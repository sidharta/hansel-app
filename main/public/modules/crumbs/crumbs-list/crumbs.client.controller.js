(function() {
    'use strict';
    var module = angular.module('admin');

    function updateMarkers(crumbs, map) {
      angular.forEach(crumbs, function(o){
        L.marker([o.lat, o.lng]).addTo(map);
      });
    }

    module.controller('CrumbsController', function($scope, Restangular) {

        $scope.crumbs = [];

        $scope.$on('$stateChangeSuccess', function() {
            $scope.isLoading = true;

            L.mapbox.accessToken = 'pk.eyJ1Ijoic2lkaGFydGEiLCJhIjoiY2ltczg2OW1yMDFpNHZsbTR6MWs5ZHlwbSJ9.T5h2oS8vItUFM9__uoRvaA';
            var map = L.mapbox.map('map-one', 'mapbox.streets').setView([-19.8929, -49.0252], 8);

            Restangular.all('crumbs').getList().then(function(crumbs) {
                $scope.crumbs = crumbs;

                updateMarkers(crumbs, map);
            }).finally(function() {
                $scope.isLoading = false;
            });
        });
    });
}());
