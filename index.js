var express		= require('express'); // call express for the server
var app			= express(); // define our express app
var bodyParser	= require('body-parser'); 
var morgan		= require('morgan'); // used to see the requests
var mongoose	= require('mongoose');
var port		= process.env.PORT || 8000; // setting the port for the application


dev_uri = 'mongodb://localhost:27017/mongoose_test';
prod_uri = 'mongodb://'+ process.env.MONGODB_PRODUCTION_USER + ':' + process.env.MONGODB_PRODUCTION_PASSWORD + '@ds161162.mlab.com:61162/heroku_qbb06v3z'
//mongodb://<dbuser>:<dbpassword>@ds161162.mlab.com:61162/heroku_qbb06v3z
mongoose.connect('mongodb://heroku_0v5807wg:qt6e4266hsg460ho8durrlme8h@ds023054.mlab.com:23054/heroku_0v5807wg/');
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());


// configure the app to handle CORS requests

app.use(function(req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET', 'POST');
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type, Authorization');
	next();
});

var apiRoutes = require('./app/routes/api')(app, express);

app.use('/api', apiRoutes);

app.get('/', function(req, res) {
	res.send('Welcome to hack4diversity');
});


app.use(express.static('calendar'));
app.use(express.static('Authorization'));
// app.get('/quickstart', function(req, res) {
// 	res.sendFile(__dirname + '/calendar/run-this-quickstart.html');
// });

// START SERVER

app.listen(port);
console.log('Server started on port ' + port);


// log all requests to the console
app.use(morgan('dev'));
