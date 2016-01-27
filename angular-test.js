console.log("Hello from Angular")
var app = angular.module('App', [])
app.controller('MainCtrl', function($scope, $http){
	$scope.test = "Angular up and running";
	$http({
			method: 'GET',
			url: '/rethink-test'
		})
		.then(function(response){
			console.log('Changes', response.data)
			$scope.testData = response.data;
		})	
	// $scope.getData = function(){
	// 	$http({
	// 		method: 'GET',
	// 		url: '/rethink-test'
	// 	})
	// 	.then(function(response){
	// 		$scope.testData = response.data;
	// 	})	
	// }
})

