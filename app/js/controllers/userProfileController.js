castObj.controller('userProfileController',['$scope','$state','$stateParams','dataServices','$location',function($scope,$state,$stateParams,dataServices,$location){

	      $scope.currentPage = 1;
	      $scope.itemsPerPage=7;
	      $scope.maxSize = 3;
              
	      $scope.headerTitle="UserProfile";	//Text to display in top header
	      $scope.owner_url=$state.params.owner_url;  //Take the parameter passed while state transiting.Default is mentioned in app.js
	      $scope.searchKeyword=''; //For Search functionality

	      // Get All User profile information provided the url. e.g BioGraphy,Name,Company,Blog Link,Location
	      dataServices.getUserProfileData($scope.owner_url).then(function(success){
			
			$scope.userProfileData=success.data;
			getUserRepo(); //Once the data is fetched, take the repo_url of the user and get all the repo user has.

	      });

	      //function to get All the repo user has.
	      var getUserRepo=function(){
		   dataServices.getUserRepos($scope.userProfileData.repos_url).then(function(success){
		       $scope.userrepos=success.data;   //This Array contains repo list the user has.
		       $scope.totalUserRepoCount=success.data.length;
		   });
                   

	      };
	     

        }]);

