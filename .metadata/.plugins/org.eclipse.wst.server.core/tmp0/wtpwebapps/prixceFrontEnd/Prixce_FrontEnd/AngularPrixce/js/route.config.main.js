﻿(function() {

	var module = angular.module("prixceApp");
	
	// http://stackoverflow.com/questions/41211875/angularjs-1-6-0-latest-now-routes-not-working
	module.config([ '$locationProvider', function($locationProvider) {
		$locationProvider.hashPrefix('');
	} ]);

	// router config
	module.config(function($stateProvider, $urlRouterProvider) {
		// The Prixce Model configuration.
		$stateProvider.state("MainModel", {
			url : "/MainModel",
			templateUrl : "HTML/PrixceModel/MainModel.html",
			controller : "MainModelCtrl as MainModel"
		})
		$stateProvider.state("FullModel", {
			url : "/FullModel",
			templateUrl : "HTML/PrixceModel/FullModel.html",
			controller : "FullModelCtrl as FullModel"
		})
		// The Market configuration.
		$stateProvider.state("Intro", {
			url : "/Intro",
			templateUrl : "HTML/Market/Intro.html",
			controller : "IntroCtrl as Intro"
		})
		$stateProvider.state("MarketHistory", {
			url : "/MarketHistory",
			templateUrl : "HTML/Market/MarketHistory.html",
			controller : "MarketHistoryCtrl as History"
		})
//====================== pricing Packages ============================
		$stateProvider.state("BasicPackages", {
			url : "/BasicPackages",
			templateUrl : "HTML/Market/pricesPack/BasicPackages.html",
			controller : "PricesBasicCtrl as basic"
		})
		$stateProvider.state("MedPackages", {
			url : "/MedPackages",
			templateUrl : "HTML/Market/pricesPack/MedPackages.html",
			controller : "PricesMedCtrl as medium"
		})
		$stateProvider.state("HighPackages", {
			url : "/HighPackages",
			templateUrl : "HTML/Market/pricesPack/HighPackages.html",
			controller : "PricesHighCtrl as High"
		})
		$stateProvider.state("RelativePrices", {
			url : "/RelativePrices",
			templateUrl : "HTML/Market/pricesPack/RelativePrices.html",
			controller : "RelativeCtrl as Relative"
		})
		
		$stateProvider.state("PricingStrategies", {
			url : "/PricingStrategies",
			templateUrl : "HTML/Market/PricingStrategies.html",
			controller : "PricingStrategiesCtrl as PricingStrategies"
		})
		// The Value configuration.
		$stateProvider.state("Product", {
			url : "/Product",
			templateUrl : "HTML/Value/Product.html",
			controller : "ProductCtrl as Product"
		})
		$stateProvider.state("MarketShare", {
			url : "/MarketShare",
			templateUrl : "HTML/Value/MarketShare.html",
			controller : "MarketShareCtrl as MarketShare"
		})
		$stateProvider.state("TweetsAnalysis", {
			url : "/TweetsAnalysis",
			templateUrl : "HTML/Value/TweetsAnalysis.html",
			controller : "TweetsAnalysisCtrl as TweetsAnalysis"
		})
		// The Clients configuration.
		$stateProvider.state("Clients", {
			url: "/Clients",
			templateUrl: "HTML/Clients/Clients.html",
			controller: "ClientsCtrl as Clients"
		})
		// The Costs configuration.
		$stateProvider.state("Costs", {
			url: "/Costs",
			templateUrl: "HTML/Costs/Costs.html",
			controller: "CostsCtrl as Costs"
		})





		// .state("createCoupon", {
		// url: "/create",
		// templateUrl: "create.html",
		// controller: "CreateCouponCtrl as c"
		// });

		$urlRouterProvider.when("", "/MainModel"); // first browsing postfix is
		// empty --> route it to /main
		// $urlRouterProvider.otherwise('/404'); // when no switch case matches
		// --> route to /404
	});

})();