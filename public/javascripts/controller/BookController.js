'use strict';

angular.module('keikii').filter('durationFormat', function () {
		return function (input) {
			input = input || '';
			var out = '';
			var dur = moment.duration(input, 'minutes');
			return dur.format('HH:mm:ss');
		};
	})

	//tag categories
	.controller('BookController',
	['$scope', function ($scope) {

				$scope.myTime = 3361;

		$scope.genres = [
			"Urban Fantasy",
			"Paranormal Romance",
			"Fantasy",
			"Fiction",
			"Young Adult",
			"Science Fiction",
			"Epic"
		]

		$scope.creatures = [
			"Angel",
			"Demon",
			"Dragon",
			"Fae",
			"Ghost",
			"Gods",
			"Halfbreeds",
			"Vampires",
			"Weres/Shifters",
			"Witches",
			"Zombies",
			"Others"
		]
		$scope.jobs = [
			"Detective",
			"Slayer",
			"Powerhouse"
		]
		$scope.loves = [
			"Baby",
			"Crying",
			"Death",
			"Kids",
			"Mate",
			"Pregnancy",
			"Sex",
			"Triangle"
		]
		$scope.worlds = [
			"Apocalypse",
			"Post-Apocalypse",
			"Unknown",
			"Known",
			"Coming Out",
			"Otherworld",
		]
		$scope.annoyances = [
			"Essential",
			"Nonessential",
			"Cliffhanger",
			"Ascension",
			"Memory Loss",
			"Shitty SO",
			"Time Travel",
		]

		$scope.controls = [
			"Can't Find",
			"Edited",
			"Audio",
			"Chaptered",
			"Uploaded",
		]

	}])

	//points to the api for data
	.controller('ApiController', function($scope, $http){
		loadData();

		function loadData() {
			$http.get("localhost:4040/api/book").success(function (data){
				$scope.title = data
			});
		  };
	})

	//creating a new book
	.controller("BookController", function ($scope, $http){
		$scope.title = null;

		$scope.createBook = function(){
			var data = {Name: $scope.title};
			$http.post("localhost:4040/api/book", data).success(function (data, status, headers){
				alert("Book added.");
				$http.get(headers("location")).success(function (data){
					$scope.book.push(data);
				});
			});
		};
	})