(function() {
    'use strict';
    var module = angular.module('core');

    module.controller('HistoricoController', function($scope, gaToast) {
        var ctrl = this;
        $scope.mapOptions = {
            center: new google.maps.LatLng(35.784, -78.670),
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
    });

}());
