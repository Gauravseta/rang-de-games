angular.module('rangde.controllers',['ui.router'])
	.controller('gamesListController',['$scope','dataServices','$state','$stateParams','$rootScope',function($scope,dataServices,$state,$stateParams,$rootScope){

	      $scope.headerTitle="Rang De Games Arena";  //Text to display in top header
		
     /* Variables are declared for pagination purpose */
	     $scope.currentPage = 1;  //Always show first page
	     $scope.itemsPerPage=9;   //Display at max 9 items on page
	     $scope.maxSize = 10;    //Pagination items available at max

	     $scope.searchKeyword='';

	     $scope.sortSelection=false;
	     $scope.$watch('sortSelection',function(curr,old){
		console.log('value changed');
		});
	     dataServices.getAllGames().then(function(success){
			$scope.listsOfGames=success.data.slice(1);
			$scope.totalGamesCount=$scope.listsOfGames.length;
	     });
	
        }]);

