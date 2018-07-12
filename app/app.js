var myApp = angular.module('mainApp', ['ngRoute', 'ngAnimate']);

myApp.config(['$routeProvider', function($routeProvider){
	$routeProvider
		.when('/home', {
			templateUrl: 'views/home.html',
			controller: 'myCtrl'
		})
		.when('/contact', {
			templateUrl: 'views/contact.html',
			controller: 'contactController'
		})
		.when('/contact-success', {
			templateUrl: 'views/contact-success.html',
			controller: 'contactController'
		})
		.when('/directory', {
			templateUrl: 'views/directory.html',
			controller: 'myCtrl'
		}).otherwise({
			redirectTo: '/home'
		});


}]);

/*myApp.directive('randomNinja' [function(){

	return {
		restrict: 'E',
		scope: {
			ninjas: '=',
			title: '='
		},
		template: '{{title}}'
		controller: function($scope){}
	};

}]);*/

myApp.controller('myCtrl', ['$scope', function($scope){

	$scope.message = "hey all";
	$scope.removeNinja = function(ninja){
		var removedNinja = $scope.ninjas.indexOf(ninja);
		$scope.ninjas.splice(removedNinja, 1);
	};

	$scope.addNinja = function(){
		$scope.ninjas.push({
			name: $scope.new.name,
			belt: $scope.new.belt,
			rate: parseInt($scope.new.rate),
			available: true
		});

		$scope.new.name = "";
		$scope.new.belt = "";
		$scope.new.rate = "";
	};

	$scope.removeAll = function(){
		$scope.ninjas = [];
	};


	$scope.ninjas = [
		{
			name: "yoshi",
			belt: "green",
			rate: 50,
			available: true,
			thumb: "content/images/avat1.png"
		},
		{
			name: "Crystal",
			belt: "yellow",
			rate: 30,
			available: true,
			thumb: "content/images/avat1.png"
		},
		{
			name: "Ryu",
			belt: "orange",
			rate: 10,
			available: false,
			thumb: "content/images/avat1.png"
		},
		{
			name: "Shaun",
			belt: "black",
			rate: 1000,
			available: true,
			thumb: "content/images/avat1.png"
		}

	];

	console.log(angular.toJson($scope.ninjas));


	/*$http.get('../data/ninjas.json').then(function(data){
		$scope.ninjas = data;
	});

	console.log($scope.ninjas);*/

}]);




myApp.controller('contactController', ['$scope', '$location', function($scope, $location){

	$scope.sendMessage = function(){
		$location.path('/contact-success');
	};


}]);