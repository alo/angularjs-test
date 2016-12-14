(function () {
  'use strict';

  angular
    .module('App')
    .component('appComponent', {
      template: '<h1> This is our {{$ctrl.text}} app </h1>',
      controller: AppComponentController
    });

  function AppComponentController() {
    var $ctrl = this;
    $ctrl.text = 'ANGULAR';
  }

})();