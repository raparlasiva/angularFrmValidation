'use strict'

angular.module("demoApp.services")
	.factory("demo1_service", [function() {
	
		var stringifyProperty= function(property) {
			if(property== null) {
				return "";
			} 
                        else 
                        {
                            return property.toString();
			}
		};
		
		return {
			stringifyProjectData: function(project) {
				var simpleProperties= ["projectName","description","hours","meetingNotes"];
				for(var p= 0; p < simpleProperties.length; p++) {
					project[simpleProperties[p]]= stringifyProperty(project[simpleProperties[p]]);
				}
				for(var t= 0; t < project.tasks.length; t++) {
					project.tasks[t].description= stringifyProperty(project.tasks[t].description);
				}
				
                                console.info("service");
                                console.info(project)
                                
                                return project;
			}
		};
		
	}]);