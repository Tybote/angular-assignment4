(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/menuapp/templates/home.template.html'
  })
  .state('categories', {
    url: '/categories',
    templateUrl: 'src/menuapp/templates/main-categories.template.html',
    controller: 'CategoriesController as mainCategories',
    resolve: {
      categories_list: ['MenuDataService', function (MenuDataService) {
             return MenuDataService.getAllCategories();
     }]
    }
  })
 .state('items', {
    url: '/items/{shortName}',
    templateUrl: 'src/menuapp/templates/main-category-items.template.html',
    controller: "CategoryItemsController as itemsController",
    resolve: {
      items_list: ['$stateParams', 'MenuDataService', function ($stateParams, MenuDataService) {
             return MenuDataService.getItemsForCategory($stateParams.shortName);
     }]
    }
  });

}

})();
