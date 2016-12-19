(function () {
  'use strict';

  angular
    .module('App')
    .component('appComponent', {
      templateUrl: 'app.component.html',
      controller: AppComponentController
    });

  AppComponentController.$inject = ['AppService'];
  function AppComponentController(AppService) {
    var $ctrl = this;
    $ctrl.text = 'ANGULAR';

    AppService.getUsers().then(
      function (res) {
        $ctrl.users = res.data;
      },
      function onError(error) {
        console.error('error al traer los usuarios', error);
      }
    );

  }

})();