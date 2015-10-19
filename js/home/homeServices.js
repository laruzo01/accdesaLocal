(function () {

	angular.module ('HomeServices', ['ngRoute'])

	.config( ['$routeProvider', function($routeProvider) {
	  $routeProvider.
	     when('/', {
	        templateUrl: 'home/home.tpl.html',
	        controller: 'HomeCtrl'
	    })
	    .when('/home', {
	       templateUrl: 'home/home.tpl.html',
	       controller: 'HomeCtrl'
	   })
	  //  .when('/viewer', {
	  //     templateUrl: 'viewer/viewer.tpl.html',
	  //     controller: 'ViewerCtrl'
	  // })
	    .otherwise({
	     redirectTo: '/home'
	   });
	 }])

	 .factory('dataFactory', function($http,$q){
	      getClientes = function (url) {
	                   var deferred = $q.defer();
	                   $http.get(url).then(function (response) {
	                         var data = [];
	                         angular.forEach(response.data, function(e, i){
	                           if (i < 20){
	                             data.push({id: e.IdCliente, name: e.Nombre, label: e.IdCliente+' - '+e.Nombre, location: e.Poblacion});
	                            }
	                          });
	                           deferred.resolve(data);
	                       });
	                   return deferred.promise;
	           };

	      getClienteDetails = function (url) {
	                       var deferred = $q.defer();

	                       $http.get(url).then(function (data) {
	                           deferred.resolve( data );

	                           });
	                       return deferred.promise;
	               };

	             return {
	               'getClientes': getClientes,
	               'getClienteDetails':getClienteDetails
	              };


	   })



})();
