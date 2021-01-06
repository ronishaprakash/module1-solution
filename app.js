(function () {
'use strict';
angular.module('LunchCheck',[])
.controller('LunchCheckController', LunchCheckController);
LunchCheckController.$inject=['$scope'];

function LunchCheckController($scope){
$scope.name ="";
$scope.displayOut = "";
$scope.displayValue = function () {
  var display = calcualteCount($scope.name);
  $scope.displayOut = display;
};

}
function calcualteCount(string) {
  var out = ""
  if (string.trim() =="")
  {
    var out = "Please enter data first";
    return out;
  }
  var count = string.split(",").length;
  if(count > 3)
  {
    out ="Too much!";
  }
  else {
    out = "Enjoy!";
  }
    return out;
  }

})();
