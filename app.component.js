(function () {
  'use strict';

  angular
    .module('App')
    .component('appComponent', {
      templateUrl: 'app.component.html',
      controller: AppComponentController
    });

  AppComponentController.$inject = ['$http'];
  function AppComponentController($http) {
    var $ctrl = this;
    $ctrl.text = 'ANGULAR';

    $http.get('users.json').then(
      function onSuccess(res) {
        console.log('usuarios cargados', res);
        $ctrl.users = res.data;
      },
      function onError(error) {
        console.error('error al traer los usuarios', error);
      }
    );
  }

})();