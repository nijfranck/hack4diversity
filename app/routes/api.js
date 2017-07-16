'use strict'

var Event = require('../models/event.js');
var mongoose	= require('mongoose');

module.exports = function(app, express) {

	var apiRouter = express.Router();

	// middleware to use for all the requests

	apiRouter.use(function(req, res, next) {
		console.log('Somebody just used the API');
		next();
	});

	apiRouter.get('/', function(req, res) {
		res.json({message: 'LendBuddy API'});
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
			var eventer = new Event();
		
			eventer.creator = req.body.username;
			eventer.starting = req.body.starting;
			eventer.active = true;
			eventer.topic = req.body.topic;
			eventer.role = req.body.role;
			eventer.langInterview = req.body.langInterview;

 			eventer.save(function(err) {
				if (err) {
					return res.send(err);
				}
				res.json({message: "Event posted", event_id: eventer._id})
			});


		});
	return apiRouter;
}