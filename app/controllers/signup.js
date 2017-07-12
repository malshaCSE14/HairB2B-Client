/**
 * Created by malsha_h on 7/10/2017.
 */

var login = angular.module('signup',[]);
login.controller('signupCtrl', function($scope,$http){
    $scope.change=function(){
        if(angular.equals($scope.password,$scope.confirm)){
            $scope.con = "*";
        }else{
            $scope.con = "";
        }
    };
    $scope.submit = function(){
        var req = {
            method: 'POST',
            url: 'http://localhost:3000/signup',
            data: {
                first_name:$scope.first_name,
                last_name:$scope.last_name,
                email:$scope.email,
                password:$scope.password
            }
        };

        $http(req).then(function(){ console.log("yes")}, function(){console.log("no")});
    }


});