
angular.module("rangDeApp",['rangde.controllers','rangde.services','ui.router','ui.bootstrap'])
		.config(function($stateProvider,$urlRouterProvider){
			$urlRouterProvider.otherwise("/gamesList");
			$stateProvider.state('gamesList',{
				url:'/gamesList',
				templateUrl:"partials/gamesList.view.html",
				controller:"gamesListController"
			});
			
			
		})
		.controller("rangDeController",['$scope','dataServices','$rootScope',function($scope,dataServices,$rootScope){
			
			$scope.obj={};		
		}]);

