angular.module("cast.services",['ui.router','ui.bootstrap'])
		.factory("dataServices",function($http){
			var obj=this;
			
			//Util to get All available technologies offline,Can make online by replacing with http
                        obj.getAllTechnologies=function(){
				return ['JavaScript','Java','Python','Php','Ruby'];
			};
			
			//Util to fetch All Repositories specific to a technology provided the name. e.g techName='Python'
			obj.getAllReposByTech=function(techName){
				return $http({url:'https://api.github.com/search/repositories?q='+techName})
			};
		
			//Util to fetch All USer data provided the url 
			obj.getUserProfileData=function(owner_url){
				return $http({url:owner_url});
			};

			//Util to get All repos a user has.
			obj.getUserRepos=function(user_repos_url){
				return $http({url:user_repos_url});
			};
			return obj;	
		});
