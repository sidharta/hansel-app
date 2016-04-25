(function() {
    'use strict';
    var module = angular.module('admin');

    module.controller('CrumbsController', function($scope) {

        $scope.crumbs = [{code: 'ADS-1234'}, {code: 'JOI-9876'}];

        $scope.$on('$stateChangeSuccess', function() {
            L.mapbox.accessToken = 'pk.eyJ1Ijoic2lkaGFydGEiLCJhIjoiY2ltczg2OW1yMDFpNHZsbTR6MWs5ZHlwbSJ9.T5h2oS8vItUFM9__uoRvaA';
            L.mapbox.map('map-one', 'mapbox.streets').setView([-19.8929, -49.0252], 8);
        });
    });
}());
