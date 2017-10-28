var castObj=angular.module('cast.controllers',['ui.router'])
	.controller('technologiesController',['$scope','dataServices','$state','$stateParams','$rootScope',function($scope,dataServices,$state,$stateParams,$rootScope){

	      $scope.headerTitle="Technologies";  //Text to display in top header
		
		/* Function to get offline list of available technologies */
	      $scope.getAllTechLists=function(){
			$scope.listsOfTech=dataServices.getAllTechnologies();
	      };

		//Call the function to get All Offline TechList using custom Service
	      $scope.getAllTechLists();
              
		//On click of technology, save the technology name globally and transit to next state
	      $scope.goToTechnology=function(technology){
			$rootScope.browsingTechnology=technology;
			$state.go('repositories',{techName:technology});
		};	




        }]);

