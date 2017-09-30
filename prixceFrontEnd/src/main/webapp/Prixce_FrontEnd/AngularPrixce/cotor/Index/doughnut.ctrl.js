(function () {

  var module = angular.module("prixceApp");

  module.controller("DoughnutCtrl", DoughnutCtor)
  function DoughnutCtor($scope) {
    // $scope.colors = [
    //   {
    //     backgroundColor: "#ff8080", "#ffffff",
    //     borderColor: "rgba(159,204,0, 1)"
    // }
    $scope.labels = ["Market", ""];
    $scope.data = [0.65 * 100, (1 - 0.65) * 100];
    $scope.colors = ["#ff8080", "#f0f0f0"];
    $scope.options = {cutoutPercentage: 85};
    
  }

})();