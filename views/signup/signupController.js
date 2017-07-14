/**
 * Created by malsha_h on 7/12/2017.
 */

var register = angular.module('signup',[]);
register.controller('signupCtrl', function($scope,$http){
    $scope.invalid = false;
    $scope.emailFormat = /^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,5}$/;
    $scope.change=function(){
        $scope.sample = false;
        $scope.change=function(){
            if(angular.equals($scope.password,$scope.confirm)){
                $scope.sample = true;
                document.getElementById("Button").disabled = false;
            }else{
                document.getElementById("Button").disabled = true;
                $scope.sample= false;
            }
        };
    };
    $scope.submit = function(){
        // $scope.invalid = true;
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
        console.log(req);
        $http(req).then(
            function(res){
                if(res.data.status==='fail'){
                    $scope.invalid = true;
                    console.log(res.data.status);
                }else{
                    $scope.invalid = false;
                }
            });
    };



});