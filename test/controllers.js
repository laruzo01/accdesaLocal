(function () {


describe('A test suite', function())
{ 
	beforeEach(module('controllers'));
	beforeEarc(inject(function($injector){
      var $controllers = $injector.get('$controllers');
     var AttendeesController = $controllers('AttendeesController', {
     	'':''
        });
	  });


    it('A test', function () { 
   expect(false).toBe (true); 
    });	
  });	
})();