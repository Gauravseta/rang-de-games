
angular.module("castApp",['cast.controllers','cast.services','ui.router','ui.bootstrap'])
		.config(function($stateProvider,$urlRouterProvider){
			$urlRouterProvider.otherwise("/technologies");
			$stateProvider.state('technologies',{
				url:"/technologies",
				templateUrl:"partials/technologies.view.html",
				controller:"technologiesController"
			})
			.state('repositories',{
				url:"/repositories",
				params: {techName:'JavaScript'},
				templateUrl:"partials/repositories.view.html",
				controller:"repositoriesController"
			})
			.state('userProfile',{
				url:"/userProfile",
				params:{owner_url:'https://api.github.com/users/airbnb'},
				templateUrl:"partials/userProfile.view.html",
				controller:"userProfileController"
			});
			
			
		})
		.controller("castController",['$scope','dataServices','$rootScope',function($scope,dataServices,$rootScope){
			$scope.headerTitle=dataServices.getAllTechnologies();
			$scope.obj={};		
		}]);

