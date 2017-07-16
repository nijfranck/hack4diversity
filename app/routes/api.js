'use strict'

var Event = require('../models/event.js');
var mongoose	= require('mongoose');

function matching_event(myevents, eventList) {
	var matches = [];
	for (var j = 0; j < myevents.length; j++){
		for (var i = 0; i < eventList.length; i++){
			if (eventList[i].active && eventList[i].starting == myevents[j].starting){
				console.log(eventList[i]);
				return eventList[i];
			}
		}

	}
	return {};
}
module.exports = function(app, express) {

	var apiRouter = express.Router();

	// middleware to use for all the requests

	apiRouter.use(function(req, res, next) {
		console.log('Somebody just used the API');
		next();
	});

	apiRouter.get('/', function(req, res) {
		res.json({message: 'Interview-me'});
	});

	apiRouter.route('/events')

		// return all the tentative sessions created

		.get(function(req, res) {
			Event.find(function(err, events) {
				if (err)
					res.send(err);

				res.json(events);
			});
		})

		// create a tentative session.
		.post(function(req, res) {
			
			var eventerList = []
			var times = req.body.startings;
			
			for (var i = 0; i < times.length; i++) {
				var eventer = new Event();

				eventer.creator = req.body.username;
				eventer.active = true;
				eventer.topic = req.body.topic;
				eventer.role = req.body.role;
				eventer.langInterview = req.body.langInterview;
				eventer.lingua = "English";
				eventer.starting = times[i];
				eventerList.push(eventer);
				console.log(eventerList);
				eventer.save(function(err) {
					if (err) {
						console.log(err);
					}
					console.log({message: "Event posted", event_id: eventer._id})
				});
			}
			res.json({Successful: eventerList});


 			
			// find a matching event that doesn't belong to the user (topic, time)
			// make sure the event is active
			// make the others timeslots selected by the user inactive.
			// pick randomly one among the matching events.


		});

		apiRouter.route('/matching')

		// return all the tentative sessions created

		.post(function(req, res) {
			console.log(req.body);
			Event.find(function(err, events) {
				console.log(events);
				var match = matching_event(req.body, events);
				console.log(match);
				res.json({data: match});
			});
			
		});
	return apiRouter;
}