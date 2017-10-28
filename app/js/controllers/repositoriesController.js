castObj.controller('repositoriesController',['$scope','$state','$stateParams','dataServices','$location','$rootScope',function($scope,$state,$stateParams,dataServices,$location,$rootScope){
	     /* Variables are declared for pagination purpose */
	     $scope.currentPage = 1;  //Always show first page
	     $scope.itemsPerPage=9;   //Display at max 9 items on page
	     $scope.maxSize = 10;    //Pagination items available at max
	
		/* To handle the refresh of page and show the default technology repositories i.e, JavaScript */
		//check if flow coming from technology listing page,this condition will be false if refreshed in browser or directly typing state address in addressbar.
		if($rootScope.browsingTechnology){
		     $scope.techName=$rootScope.browsingTechnology;
		}else{
	     
	      	     $scope.techName=$state.params.techName;   // else take the default technology declared in app.js while registering state
		}

	      $scope.searchKeyword='';
	      $scope.headerTitle="Repositories";  //Text to display in top header
		
	      dataServices.getAllReposByTech($scope.techName).then(function(success){
			$scope.listsOfTechsRepo=success.data.items;
			$scope.totalTechRepoCount=success.data.items.length;

		});
	     
		//On click, go to profile of the repo owner and list all other repo owner has.
	       $scope.goToUserProfile=function(repoitem){
		$state.go('userProfile',{owner_url:repoitem.owner.url});
	    };

        }]);

