(function () {
    var module = angular.module("prixceApp");

    module.controller("PricesBasicCtrl", PricesBasicCtor);

    function PricesBasicCtor($scope) {
        $scope.labels = ["Jimdo", "Squarespace", "Snappages", "Yola", "Webs", "Average", "Moonfruit", "Weebly", "Wix"];
        $scope.data = [0, 0, 4, 4.16, 5.99, 6.23, 6.75, 8, 8.5];
        $scope.colors = ["#ff9173", "#fc8377", "#f6767c", "#ef6a82", "#e55f89", "#d85691", "#c94f98", "#b64b9f", "#a149a6"];
    }

    module.controller("PricesMedCtrl", PricesMedCtor);

    function PricesMedCtor($scope) {
        $scope.labels = ["Jimdo", "Yola", "Moonfruit", "Snappages", "Average", "Weebly", "Squarespace", "Wix", "Webs"];
        $scope.data = [7.50, 8.33, 9, 10, 10.54, 12, 12, 12.5, 12.99];
        $scope.colors = ["#ff9173", "#fc8377", "#f6767c", "#ef6a82", "#e55f89", "#d85691", "#c94f98", "#b64b9f", "#a149a6"];
    }
    
    module.controller("PricesHighCtrl", PricesHighCtor);

    function PricesHighCtor($scope) {
        $scope.labels = ["Moonfruit", "Snappages", "Yola", "Squarespace", "Average",  "Jimdo", "Webs", "Wix", "Weebly"];
        $scope.data = [15, 15, 16.66, 18, 19.64, 20, 22.99, 24.5, 25];
        $scope.colors = ["#ff9173", "#fc8377", "#f6767c", "#ef6a82", "#e55f89", "#d85691", "#c94f98", "#b64b9f", "#a149a6"];
    }
    module.controller("RelativeCtrl", RelativePricesCtor);

    function RelativePricesCtor() 
    {
        
    }


})();