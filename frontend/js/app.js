// Link all the JS Docs here
var myApp = angular.module('myApp', [
    'ui.router',
    'pascalprecht.translate',
    'angulartics',
    'angulartics.google.analytics',
    'ui.bootstrap',
    'ngAnimate',
    'ngSanitize',
    'angular-flexslider',
    'ui.swiper'
]);

// Define all the routes below
myApp.config(function ($stateProvider, $urlRouterProvider, $httpProvider, $locationProvider) {
    var tempateURL = "views/template/template.html"; //Default Template URL

    // for http request with session
    $httpProvider.defaults.withCredentials = true;
    $stateProvider
        .state('home', {
            url: "/",
            templateUrl: tempateURL,
            controller: 'HomeCtrl'
        })
        .state('about-ohara', {
            url: "/about-ohara",
            templateUrl: tempateURL,
            controller: 'AboutoharaCtrl'
        })
        .state('about-us', {
            url: "/about-us",
            templateUrl: tempateURL,
            controller: 'AboutusCtrl'
        })
        .state('explore-japan', {
            url: "/explore-japan",
            templateUrl: tempateURL,
            controller: 'ExploreljapanCtrl'
        })
        .state('course', {
            url: "/course",
            templateUrl: tempateURL,
            controller: 'CourseCtrl'
        })
        .state('services', {
            url: "/services",
            templateUrl: tempateURL,
            controller: 'ServicesCtrl'
        })
        .state('contact', {
            url: "/contact",
            templateUrl: tempateURL,
            controller: 'ContactCtrl'
        })
        .state('form', {
            url: "/form",
            templateUrl: tempateURL,
            controller: 'FormCtrl'
        });
    $urlRouterProvider.otherwise("/");
    $locationProvider.html5Mode(isproduction);
});

// For Language JS
myApp.config(function ($translateProvider) {
    $translateProvider.translations('en', LanguageEnglish);
    $translateProvider.translations('hi', LanguageHindi);
    $translateProvider.preferredLanguage('en');
});