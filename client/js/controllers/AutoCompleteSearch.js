/* globals angular */
'use strict';

/* Controllers */
angular.module('myApp.controllers')
    .controller('AutoCompleteSearch', ['$scope', '$http', function($scope, $http) {
        var search = this;
        search.result = [];

        $scope.change = function() {
            search.keyword = $scope.keyword;
            if ( ! search.keyword ) {
                search.results = [];
                return;
            }

            $http.get('/api/search?q=' + search.keyword)
                .then(function(data) {
                    if (typeof data.hits !== 'undefined') {
                        console.log(data.hits.hits)
                        search.result = data.hits.hits;
                    }
                });
        };
    }]);

