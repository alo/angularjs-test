(function () {
  'use strict';

  angular
    .module('App')
    .service('AppService', AppService);

  AppService.inject = ['$http'];
  function AppService($http) {
    this.getUsers = getUsers;

    function getUsers() {
      return $http.get('users.json');
    }
  }

})();