(function () {
'use strict';

angular.module('MenuApp')
.controller('CategoriesController', CategoriesController);


CategoriesController.$inject = ['MenuDataService'];
function CategoriesController(MenuDataService) {
  var controller = this;

  var categories = MenuDataService.getAllCategories();
  categories.then(function(response) {
    controller.categories = response;
  });
}

})();
