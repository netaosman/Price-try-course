(function() {

	var module = angular.module("prixceApp");

	module.controller("DoughnutMarketCtrl", DoughnutMarketCtor)
	function DoughnutMarketCtor($scope) {
		$scope.labels = [ "market", "value, clients, costs" ];
		$scope.data = [ 0.65 * 100, (1 - 0.65) * 100 ];
		$scope.colors = [ "#ff6666", "#f0f0f0" ];
		$scope.options = {
			cutoutPercentage : 80,
			legend : {
			// display: true
			},
			tooltips : {
				callbacks : {
					label : function(tooltipItem, data) {
						var label = data.labels[tooltipItem.index];
						var datasetLabel = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
						return datasetLabel + "%";
						// label + ': ' +
						// datasetLabel + '%';
					}
				}
			},
		};

	}

	module.controller("DoughnutValueCtrl", DoughnutValuetCtor)
	function DoughnutValuetCtor($scope) {
		$scope.labels = [ "value", "market, clients, costs" ];
		$scope.data = [ 0.25 * 100, (1 - 0.25) * 100 ];
		$scope.colors = [ "#d72893", "#f0f0f0" ];
		$scope.options = {
			cutoutPercentage : 80,
			legend : {
			// display: true
			},
			tooltips : {
				callbacks : {
					label : function(tooltipItem, data) {
						var label = data.labels[tooltipItem.index];
						var datasetLabel = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
						return datasetLabel + "%";
						// label + ': ' + datasetLabel + '%';
					}
				}
			},
		};
	}
	module.controller("DoughnutClientsCtrl", DoughnutClientstCtor)
	function DoughnutClientstCtor($scope) {
		$scope.labels = [ "clients", "market,value,costs" ];
		$scope.data = [ 0.10 * 100, (1 - 0.10) * 100 ];
		$scope.colors = [ "#ff3366", "#f0f0f0" ];
		$scope.options = {
			cutoutPercentage : 80,
			// legend: {
			// display: true
			// },
			tooltips : {
				callbacks : {
					label : function(tooltipItem, data) {
						var label = data.labels[tooltipItem.index];
						var datasetLabel = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
						return datasetLabel + "%";
						// label + ': ' + datasetLabel + '%';
					}
				}
			},
		};
	}
	module.controller("DoughnutCostsCtrl", DoughnutCoststCtor)
	function DoughnutCoststCtor($scope) {
		$scope.labels = [ "costs", "market,value,clients" ];
		$scope.data = [ 0.0 * 100, (1 - 0.0) * 100 ];
		$scope.colors = [ "#ff9966", "#f0f0f0" ];
		$scope.options = {
			cutoutPercentage : 80,
			// legend: {
			// display: true
			// },
			tooltips : {
				callbacks : {
					label : function(tooltipItem, data) {
						var label = data.labels[tooltipItem.index];
						var datasetLabel = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
						return datasetLabel + "%";
						// label + ': ' + datasetLabel + '%';
					}
				}
			},
		};
	}

})();