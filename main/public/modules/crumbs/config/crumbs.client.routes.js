(function() {
    'use strict';

    var module = angular.module('crumbs');
    module.config(function($stateProvider) {
        $stateProvider
            .state('crumbs', {
                url         : '/crumbs',
                controller  : 'CrumbsController',
                templateUrl : '/p/modules/crumbs/crumbs-list/crumbs.client.view.html',
                data:{
                  mainTitle: 'Crumbs'
                }
            });
    });
}());
