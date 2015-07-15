var app = angular.module('CsgoloadoutApp', [
    'ngRoute'
]);

/**
 * Configure the Routes
 */
app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        // Home
        .when("/", {templateUrl: "partials/home.html", controller: "PageCtrl"})
        // Pages
        .when("/about", {templateUrl: "partials/about.html", controller: "PageCtrl"})
        .when("/betting", {templateUrl: "partials/betting.html", controller: "PageCtrl"})
        // Loadout
        .when("/loadouts", {templateUrl: "partials/loadouts.html", controller: "LoadoutCtrl"})
        .when("/loadouts/loadout", {templateUrl: "partials/loadouts_loadout.html", controller: "LoadoutCtrl"})
        // else 404
        .otherwise("/404", {templateUrl: "partials/404.html", controller: "PageCtrl"});
}]);

/**
 * Controls the Blog
 */
app.controller('LoadoutCtrl', function (/* $scope, $location, $http */) {
});

/**
 * Controls all other Pages
 */
app.controller('PageCtrl', function (/* $scope, $location, $http */) {

    // Activates the Carousel
    $('.carousel').carousel({
        interval: 5000
    });

    // Activates Tooltips for Social Links
    $('.tooltip-social').tooltip({
        selector: "a[data-toggle=tooltip]"
    })
});