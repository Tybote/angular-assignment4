(function () {
'use strict';

angular.module('Data')
.controller('CategoryItemsController', CategoryItemsController);


CategoryItemsController.$inject = ['$stateParams', 'MenuDataService'];
function CategoryItemsController($stateParams, MenuDataService) {
  var itemsController = this;
  itemsController.fromCategory = $stateParams.shortName;
  
  var items = MenuDataService.getItemsForCategory($stateParams.shortName);
  items.then(function(response) {
    itemsController.menuItems = response.menu_items;
  });
}

})();
