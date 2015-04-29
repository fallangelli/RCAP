// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('rcap', ['ionic', 'rcap.controllers', 'rcap.services'])

    .run(function ($ionicPlatform) {
        $ionicPlatform.ready(function () {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleLightContent();
            }
        });
    })

    .config(function ($stateProvider, $urlRouterProvider) {

        // Ionic uses AngularUI Router which uses the concept of states
        // Learn more here: https://github.com/angular-ui/ui-router
        // Set up the various states which the app can be in.
        // Each state's controller can be found in controllers.js
        $stateProvider


            // setup an abstract state for the tabs directive
            .state('rcap', {
                url: "/rcap",
                abstract: true,
                templateUrl: "templates/tabs.html"
            })

            // Each tab has its own nav history stack:

            .state('rcap.dash', {
                url: '/dash',
                views: {
                    'tab-dash': {
                        templateUrl: 'templates/tab-dash.html',
                        controller: 'DashCtrl'
                    }
                }
            })

            .state('select', {
                url: '/apply/type-select',
                templateUrl: 'templates/apply/type-select.html',
                controller: 'ApplyCtrl'
            })

            .state('identity-qa', {
                url: '/apply/identity-qa',
                templateUrl: 'templates/apply/identity-qa.html',
                controller: 'ApplyCtrl'
            })

            .state('apply-result', {
                url: '/apply/apply-result',
                templateUrl: 'templates/apply/apply-result.html',
                controller: 'ApplyCtrl'
            })

            .state('result-select', {
                url: '/result/result-select',
                templateUrl: 'templates/result/result-select.html',
                controller: 'ApplyCtrl'
            })

            .state('result-tips', {
                url: '/result/result-tips',
                templateUrl: 'templates/result/result-tips.html',
                controller: 'ApplyCtrl'
            })

            .state('result-summary', {
                url: '/result/result-summary',
                templateUrl: 'templates/result/result-summary.html',
                controller: 'ApplyCtrl'
            })

            .state('rcap.business', {
                url: '/business',
                views: {
                    'tab-business': {
                        templateUrl: 'templates/tab-business.html',
                        controller: 'BusinessCtrl'
                    }
                }
            })
            .state('rcap.business-detail', {
                url: '/business/:businessId',
                views: {
                    'tab-business': {
                        templateUrl: 'templates/business-detail.html',
                        controller: 'BusinessDetailCtrl'
                    }
                }
            })

            .state('rcap.account', {
                url: '/account',
                views: {
                    'tab-account': {
                        templateUrl: 'templates/tab-account.html',
                        controller: 'AccountCtrl'
                    }
                }
            });

// if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/rcap/dash');

    })
;
