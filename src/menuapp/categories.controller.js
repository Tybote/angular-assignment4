(function () {
'use strict';

angular.module('MenuApp')
.controller('CategoriesController', CategoriesController);


CategoriesController.$inject = ['categories_list'];
function CategoriesController(categories_list) {
  var controller = this;
  console.log(categories_list);
  controller.categories = categories_list;
}

})();
