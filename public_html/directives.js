'use strict'

angular.module('demoApp.directives')
	.directive('crumbLink', function() {
		return {
			restrict: 'A',
			replace: true,
			scope: {
				linkStep: "=",
				currentStep: "="
			},
			
			template: '<li><a ng-show="linkStep != currentStep" ng-href="#/demo1/{{linkStep}}">Example {{linkStep}}</a><span ng-show="linkStep == currentStep">Example {{linkStep}}</span></li>'
		}
	})