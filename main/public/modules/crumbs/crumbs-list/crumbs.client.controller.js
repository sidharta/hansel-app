(function() {
    'use strict';
    var module = angular.module('admin');

    module.controller('CrumbsController', function($scope, Restangular) {

        var ctrl = this;
        var nextCursor = '';
        var more = true;
        $scope.crumbs = [{code: 'ADS-1234'}, {code: 'JOI-9876'}];
        $scope.center = {lat: 51.505,lng: -0.09,zoom: 4};

        // ctrl.getUsers = function() {
        //     if (!more) {
        //         return;
        //     }
        //     $scope.isLoading = true;
        //     Restangular.all('users').getList({cursor: nextCursor, filter: $scope.filter}).then(function(users) {
        //         $scope.users = $scope.users.concat(users);
        //         nextCursor = users.meta.nextCursor;
        //         more = users.meta.more;
        //         $scope.totalCount = users.meta.totalCount;
        //     }).finally(function() {
        //         $scope.isLoading = false;
        //     });
        // };
        //
        // ctrl.getUsers();
        //
        // // This is fired when user scrolled to bottom
        // $scope.$on('mainContentScrolled', function() {
        //     ctrl.getUsers();
        // });

        $scope.$on('$stateChangeSuccess', function(){
          L.mapbox.accessToken = 'pk.eyJ1Ijoic2lkaGFydGEiLCJhIjoiY2ltczg2OW1yMDFpNHZsbTR6MWs5ZHlwbSJ9.T5h2oS8vItUFM9__uoRvaA';
          L.mapbox.map('map-one', 'mapbox.streets').setView([-19.8929,-49.0252], 8);
        });

    });
}());
