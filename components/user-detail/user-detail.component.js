(function () {
  'use strict';

  // Usage:
  // 
  // Creates:
  // 

  angular
    .module('App')
    .component('userDetail', {
      templateUrl: 'components/user-detail/user-detail.component.html',
      controller: UserDetailController,
      bindings: {
        user: '<'
      },
    });

  UserDetailController.inject = [];
  function UserDetailController() {
    var ctrl = this;
    ////////////////

    ctrl.onInit = function () { };



    ctrl.onChanges = function (changesObj) {
      console.info(changesObj);
    };


  }
})();