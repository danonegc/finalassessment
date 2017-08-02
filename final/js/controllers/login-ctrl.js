// Add module and controller here.
var app = angular.module("myMod");

app.controller("loginCtrl", function($scope, loginService, $location){
  $scope.userDetails = function (userObj){
    loginService.checkLogin(userObj);
    $location.path('/profile');
  };
});
