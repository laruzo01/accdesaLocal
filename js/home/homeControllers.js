(function () {

	angular.module ('HomeController', [])

	.controller( 'HomeCtrl',  ['$scope','dataFactory','$state', function HomeController($scope,dataFactory,$state) {


	  var urlBase = 'http://webapiaccdesalocal.azurewebsites.net/api/';

	      $scope.empresas = [
	        { name: 'Desa', IdEmpresa: 1 },
	        { name: 'Moto', IdEmpresa: 2 }
	    ];

	$scope.loadingCustomers = true;
	$scope.getCustomers = function(sFiltro,idEmpresa) {

	 var  url = urlBase + 'Clientes?sFiltro='+  sFiltro +  '&IdEmpresa=' +idEmpresa;

	 return  dataFactory.getClientes(url).then(function(response) {
	    return response;
	  });
	 };

	$scope.$watch('customerSelected', function(customer){
	var details = [];
	  if (angular.isObject(customer)){
	    var  url = 'http://webapiaccdesalocal.azurewebsites.net/api/Representantes?IdCliente=1218&IdEmpresa=1';
	          dataFactory.getClienteDetails(url).then(function(response) {
	          details = response.data[0];
	          console.log(details);
	           $state.go("viewer");
	    });

	  }
	})

}]);  //controller
})();
