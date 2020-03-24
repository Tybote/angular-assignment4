(function () {
'use strict';

angular.module('Data')
.controller('CategoryItemsController', CategoryItemsController);


CategoryItemsController.$inject = ['items_list'];
function CategoryItemsController(items_list) {
  var itemsController = this;
  itemsController.menuItems = items_list.menu_items;
}

})();
