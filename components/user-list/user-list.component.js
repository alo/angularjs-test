(function () {
  'use strict';

  // Usage:
  // 
  // Creates:
  // 

  angular
    .module('App')
    .component('userList', {
      templateUrl: 'components/user-list/user-list.component.html',
      controller: UserListController,
      bindings: {
        users: '<',
        setSelectedUser: '&'
      },
    });

  UserListController.inject = [];
  function UserListController() {
    var $ctrl = this;

    $ctrl.onInit = function () { };
    $ctrl.onChanges = function (changesObj) { };
    $ctrl.onDestory = function () { };
  }

})();