(function(){

	var app = angular.module('store', []);
	app.controller('StoreController', function(){
		this.product = gem;
	});

var gem = {
	
	name: 'Chris',
	price: 100,
	description: 'hey, check it out',
	canPurchase: true
	soldOut:true;
};
})();