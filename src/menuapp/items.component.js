(function () {
  'use strict';
  
  angular.module('Data')
  .component('items', {
    templateUrl: 'src/menuapp/templates/category-items.template.html',
    bindings: {
      menuItems: '<'
    }
  });
  
  })();