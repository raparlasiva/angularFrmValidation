angular.module("demoApp.controllers")
	.controller("demo1_1Controller", ["$scope", "demo1_resources", function($scope, resources) {
			var projectResource= resources.getProjectResource();
		projectResource.get().$promise.then(function(project) {
			$scope.project= project;
		});
		
		$scope.sortableOptions= {
			handle: "span",
			stop: function(event, ui) {
				var task= ui.item.scope().task;
				console.info(task);
				for(var t= 0; t < $scope.project.tasks.length; t++) {
					$scope.project.tasks[t].rank= t+1;
				}
			}
		};
		
		$scope.demoStep= 1;
                
		
	}])

	.controller("demo1_2Controller", ["$scope", "demo1_resources", function($scope, resources) {
		var projectResource= resources.getProjectResource();
		projectResource.get().$promise.then(function(project) {
			console.info(project);
                        $scope.project= project;
			$scope.original= angular.copy(project);
			
			$scope.initialComparison = angular.equals($scope.project,$scope.original);
			$scope.dataHasChanged    = angular.copy($scope.initialComparison);
		});
		
		$scope.sortableOptions= {
			handle: "span",
			stop: function(event, ui) {
				var task= ui.item.scope().task;
				
				for(var t= 0; t < $scope.project.tasks.length; t++) {
					$scope.project.tasks[t].rank= t+1;
				}
			}
		};
		
		$scope.demoStep= 2;
		
		$scope.$watch('project',function(newValue, oldValue) {
			if(newValue != oldValue) {
				$scope.dataHasChanged= angular.equals($scope.project,$scope.original);
			}
		},true);
		
		
	}])

	
	.controller("demo1_3Controller", ["$scope", "demo1_resources", "demo1_service", function($scope, resources, service) {
		var projectResource= resources.getProjectResource();
		projectResource.get().$promise.then(function(project) {
			
                        //console.info(service.stringifyProjectData(project));
                        
			$scope.project  = service.stringifyProjectData(project);
			$scope.original = angular.copy(project);
			
			$scope.initialComparison    = angular.equals($scope.project,$scope.original);
			$scope.dataHasChanged       = angular.copy($scope.initialComparison);
		});
		
		$scope.sortableOptions= {
			handle: "span",
			stop: function(event, ui) {
				var task= ui.item.scope().task;
				
				for(var t= 0; t < $scope.project.tasks.length; t++) {
					$scope.project.tasks[t].rank= t+1;
				}
			}
		};
		
		$scope.demoStep= 3;
		
		$scope.$watch('project',function(newValue, oldValue) {
			if(newValue != oldValue) {
				$scope.dataHasChanged= angular.equals($scope.project,$scope.original);
			}
		},true);
		
		
	}]);