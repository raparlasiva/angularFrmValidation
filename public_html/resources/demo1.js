'use strict'

angular.module("demoApp.resources")
	.factory("demo1_resources", ["$resource", function($resource) {
		//Designed to defeat browser caching
		var today   = new Date(),
		urlSuffix   = "?" + today.toUTCString;
		
		var projectResource= $resource("./data/project.json.txt" + urlSuffix);
		
		return {
			getProjectResource: function() {
				return projectResource;
			}
		};
		
	}]);