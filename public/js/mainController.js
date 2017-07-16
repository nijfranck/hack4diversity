'use strict'

var matching = app.controller('matching', function($scope, $http){
	$scope.dates = [];
	$scope.user = "";
	$scope.topic = "";
	$scope.role = "";
	$scope.langInterview = "";
	$scope.lingua = "";

	var submitmatches = function(){
		$http.post('https://hidden-hollows-63203.herokuapp.com/', eventer)
			.success(function(data, status, headers, config) {
				$scope.postEvent = 'Success';
			});
	}

	var getmatches = function(){
		$http.post('https://hidden-hollows-63203.herokuapp.com/', user){
			.success(function(data, status, headers, config) {
				$scope.match = data;
				$scope.interviewer = data.interviewer;
				$scope.interviewee = data.interviewee;
				$scope.starting = data.starting;
				$scope.topic = data.topic;
				$scope.langInterview = data.langInterview;
				$scope.lingua = data.lingua;
			})
		}
	}
})

eventer.creator = req.body.username;
				eventer.active = true;
				eventer.topic = req.body.topic;
				eventer.role = req.body.role;
				eventer.langInterview = req.body.langInterview;
				eventer.starting = times[i];
				eventerList.push(eventer);
				console.log(eventerList);