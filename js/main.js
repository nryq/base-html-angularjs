(function(){

	angular.module('directives', [])
		.controller('directivesCtrl', ['$scope', function($scope) {
			$scope.customer = {
				name: 'Naomi',
				address: '1600 Amphitheatre'
			};
		}])
		.directive('myCustomer', function() {
			console.log('directiva ejemplo');
			return {
				template: 'Name: {{customer.name}} Address: {{customer.address}}'
			};
		})
		.directive('navbar', function() {
			console.log('directiva navbar');
			return {
				templateUrl: 'pages/navbar.html'
			};
		})
})();