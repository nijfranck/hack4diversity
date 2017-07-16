'use strict'

var matchingCtrl = app.controller('matchingCtrl', function($scope, $http){
	$scope.matches = false;
	$scope.availability = [];
	$scope.inputStart = "";
	$scope.inputEnd = "";
	$scope.dates = [];
	$scope.username = "pclarke";
	$scope.topic = "Technical";
	$scope.role = "Interviewer";
	$scope.langInterview = "Python";
	$scope.lingua = "";

	$scope.fadeIn = false;

	function clearInputs() {
	  $scope.inputStart = ""
	  $scope.inputEnd = ""
	}


	function fade() {
	  $("div.message")
	    .addClass("messageFade")
	    .text("Successfully added availability!")
	    .fadeIn(1000)
	    .fadeOut(1200);
	}

	$scope.add = function(){	
		$scope.fadeIn = true;
		console.log($("#inputStart").val());
		$scope.availability.push($("#inputStart").val());
		console.log($scope.availability);
		clearInputs();
		fade();
	
	};
	
	$scope.submitMatches = function(){
		var eventer = {
				username: $scope.username,
				topic: $scope.topic,
				role: $scope.role,
				langInterview: $scope.langInterview,
				startings: $scope.availability
		};

		$http.post('https://hidden-hollows-63203.herokuapp.com/api/events', eventer)
			.success(function(data, status, headers, config) {
				console.log(data);
				$scope.postEvent = 'Success';
		});

		getmatches();
	}

	var getmatches = function(){
		     
		var eventer = {
			creator: $scope.username,
			topic: $scope.topic,
			role: $scope.role,
			langInterview: $scope.langInterview,
			starting: $scope.availability
		};
		$http.post('https://hidden-hollows-63203.herokuapp.com/api/matching', eventer)
			.success(function(data, status, headers, config) {
				
				$scope.match = data;
				$scope.interviewer = "pclarke";
				$scope.interviewee = "nijfranck";
				$scope.matches = true;
				$scope.starting = $scope.availability[0];
		});
	}
});

var availabilityArray = [];
var idCounter = 0;

	$('#rangeStart').calendar({
	  endCalendar: $('#rangeEnd')
	});
	$('#rangeEnd').calendar({
	  startCalendar: $('#rangeStart')
	});

	// Clears the input fields so that the user can submit more information
	

	