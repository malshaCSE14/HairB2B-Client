/**
 * Created by malsha_h on 7/13/2017.
 */
var register = angular.module('signin',[]);
register.controller('signinCtrl', function($scope,$http){
    $scope.submit = function(){
        $scope.validLogin = null;
        var req = {
            method: 'POST',
            url: 'http://localhost:3000/signin',
            data: {
                email:$scope.email,
                password:$scope.password
            }
        };
        console.log(req);
        $http(req).then(
            function(res){
                if(res.data.status==='successful'){
                    $scope.validLogin = true;
                    console.log(res.data.status);
                }else if(res.data.status='failed'){
                    $scope.validLogin = false;
                    console.log(res.data.status);
                }else{
                    console.log(res.data.status);
                }
            });
    };



});