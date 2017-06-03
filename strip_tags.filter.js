'use strict';
(function () {

	angular.module('StripTags').filter('stripTags',StripTags);

	function StripTags(){
		var filter = Filter;
	
		function Filter(text){
			return text ? String(text).replace(/<[^>]+>/gm, '') : '';
		}
		
		return filter;
	}

}) (angular);
