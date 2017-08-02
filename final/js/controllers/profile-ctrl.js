// Add module and controller here.
var app = angular.module("myMod");

app.controller("profileCtrl", function ($scope, loginService){
  $scope.userDetails = loginService.getProfile();
});
