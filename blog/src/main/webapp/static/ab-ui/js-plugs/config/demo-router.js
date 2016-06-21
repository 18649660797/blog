'use strict';
angular.module("demo-app", ['ui.router', 'ui.bootstrap', 'oc.lazyLoad']).config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider.state('demo', {
            abstract: true,
            url: '/demo',
            views: {
                'main-view': {templateUrl: '../views/templates/alert.html'}
            },
            resolve: {
                javascript: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load("../controller/demo/alert.js");
                }]
            }
        }
    ).state('alert', {
        url: '/demo/alert',
        views: {
            'main-view': {templateUrl: '../views/templates/alert.html'}
        },
        resolve: {
            javascript: ['$ocLazyLoad', function ($ocLazyLoad) {
                return $ocLazyLoad.load("../controller/demo/alert.js");
            }]
        }
    }).state('accordion', {
        url: '/demo/accordion',
        views: {
            'main-view': {templateUrl: '../views/templates/accordion.html'}
        },
        resolve: {
            javascript: ['$ocLazyLoad', function ($ocLazyLoad) {
                return $ocLazyLoad.load("../controller/demo/accordion.js");
            }]
        }
    }).state('button', {
        url: '/demo/button',
        views: {
            'main-view': {templateUrl: '../views/templates/button.html'}
        },
        resolve: {
            javascript: ['$ocLazyLoad', function ($ocLazyLoad) {
                return $ocLazyLoad.load("../controller/demo/button.js");
            }]
        }
    }).state('carousel', {
        url: '/demo/carousel',
        views: {
            'main-view': {templateUrl: '../views/templates/carousel.html'}
        },
        resolve: {
            javascript: ['$ocLazyLoad', function ($ocLazyLoad) {
                return $ocLazyLoad.load("../controller/demo/carousel.js");
            }]
        }
    }).state('collapse', {
        url: '/demo/collapse',
        views: {
            'main-view': {templateUrl: '../views/templates/collapse.html'}
        },
        resolve: {
            javascript: ['$ocLazyLoad', function ($ocLazyLoad) {
                return $ocLazyLoad.load("../controller/demo/collapse.js");
            }]
        }
    }).state('dateparser', {
        url: '/demo/dateparser',
        views: {
            'main-view': {templateUrl: '../views/templates/dateparser.html'}
        },
        resolve: {
            javascript: ['$ocLazyLoad', function ($ocLazyLoad) {
                return $ocLazyLoad.load("../controller/demo/dateparser.js");
            }]
        }
    }).state('datepicker', {
        url: '/demo/datepicker',
        views: {
            'main-view': {templateUrl: '../views/templates/datepicker.html'}
        },
        resolve: {
            javascript: ['$ocLazyLoad', function ($ocLazyLoad) {
                return $ocLazyLoad.load("../controller/demo/datepicker.js");
            }]
        }
    }).state('datepickerPopup', {
        url: '/demo/datepickerPopup',
        views: {
            'main-view': {templateUrl: '../views/templates/datepickerPopup.html'}
        },
        resolve: {
            javascript: ['$ocLazyLoad', function ($ocLazyLoad) {
                return $ocLazyLoad.load("../controller/demo/datepickerPopup.js");
            }]
        }
    }).state('dropdown', {
        url: '/demo/dropdown',
        views: {
            'main-view': {templateUrl: '../views/templates/dropdown.html'}
        },
        resolve: {
            javascript: ['$ocLazyLoad', function ($ocLazyLoad) {
                return $ocLazyLoad.load("../controller/demo/dropdown.js");
            }]
        }
    }).state('modal', {
        url: '/demo/modal',
        views: {
            'main-view': {templateUrl: '../views/templates/modal.html'}
        },
        resolve: {
            animate: ['$ocLazyLoad', function ($ocLazyLoad) {
                return $ocLazyLoad.load("../../js/lib/angular-animate.js");
            }],
            javascript: ['$ocLazyLoad', function ($ocLazyLoad) {
                return $ocLazyLoad.load("../controller/demo/modal.js");
            }]
        }
    }).state('pager', {
        url: '/demo/pager',
        views: {
            'main-view': {templateUrl: '../views/templates/pager.html'}
        },
        resolve: {
            javascript: ['$ocLazyLoad', function ($ocLazyLoad) {
                return $ocLazyLoad.load("../controller/demo/pager.js");
            }]
        }
    }).state('pagination', {
        url: '/demo/pager',
        views: {
            'main-view': {templateUrl: '../views/templates/pagination.html'}
        },
        resolve: {
            javascript: ['$ocLazyLoad', function ($ocLazyLoad) {
                return $ocLazyLoad.load("../controller/demo/pagination.js");
            }]
        }
    }).state('popover', {
        url: '/demo/popover',
        views: {
            'main-view': {templateUrl: '../views/templates/popover.html'}
        },
        resolve: {
            javascript: ['$ocLazyLoad', function ($ocLazyLoad) {
                return $ocLazyLoad.load("../controller/demo/popover.js");
            }]
        }
    }).state('position', {
        url: '/demo/position',
        views: {
            'main-view': {templateUrl: '../views/templates/position.html'}
        },
        resolve: {
            javascript: ['$ocLazyLoad', function ($ocLazyLoad) {
                return $ocLazyLoad.load("../controller/demo/position.js");
            }]
        }
    }).state('progressbar', {
        url: '/demo/progressbar',
        views: {
            'main-view': {templateUrl: '../views/templates/progressbar.html'}
        },
        resolve: {
            javascript: ['$ocLazyLoad', function ($ocLazyLoad) {
                return $ocLazyLoad.load("../controller/demo/progressbar.js");
            }]
        }
    }).state('rating', {
        url: '/demo/rating',
        views: {
            'main-view': {templateUrl: '../views/templates/rating.html'}
        },
        resolve: {
            javascript: ['$ocLazyLoad', function ($ocLazyLoad) {
                return $ocLazyLoad.load("../controller/demo/rating.js");
            }]
        }
    }).state('tabs', {
        url: '/demo/tabs',
        views: {
            'main-view': {templateUrl: '../views/templates/tabs.html'}
        },
        resolve: {
            javascript: ['$ocLazyLoad', function ($ocLazyLoad) {
                return $ocLazyLoad.load("../controller/demo/tabs.js");
            }]
        }
    }).state('timepicker', {
        url: '/demo/timepicker',
        views: {
            'main-view': {templateUrl: '../views/templates/timepicker.html'}
        },
        resolve: {
            javascript: ['$ocLazyLoad', function ($ocLazyLoad) {
                return $ocLazyLoad.load("../controller/demo/timepicker.js");
            }]
        }
    }).state('tooltip', {
        url: '/demo/tooltip',
        views: {
            'main-view': {templateUrl: '../views/templates/tooltip.html'}
        },
        resolve: {
            javascript: ['$ocLazyLoad', function ($ocLazyLoad) {
                return $ocLazyLoad.load("../controller/demo/tooltip.js");
            }]
        }
    }).state('typeahead', {
        url: '/demo/typeahead',
        views: {
            'main-view': {templateUrl: '../views/templates/typeahead.html'}
        },
        resolve: {
            javascript: ['$ocLazyLoad', function ($ocLazyLoad) {
                return $ocLazyLoad.load("../controller/demo/typeahead.js");
            }]
        }
    })
}]);