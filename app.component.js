(function () {
  'use strict';

  angular
    .module('App')
    .component('appComponent', {
      templateUrl: 'app.component.html',
      controller: AppComponentController
    });

  function AppComponentController() {
    var $ctrl = this;
    $ctrl.text = 'ANGULAR';

    $ctrl.users =
      [
        {
          "id": "58514a12a5f4192d6ee53796",
          "type": "user",
          "name": "Carole",
          "surname": "Leach",
          "isActive": false,
          "company": "LIQUIDOC"
        },
        {
          "id": "58514a12d698c0cba41894f5",
          "type": "user",
          "name": "Marquita",
          "surname": "Contreras",
          "isActive": true,
          "company": "ENERFORCE"
        },
        {
          "id": "58514a128748ebcc69b622d9",
          "type": "user",
          "name": "Blanchard",
          "surname": "Buckley",
          "isActive": true,
          "company": "KENGEN"
        },
        {
          "id": "58514a12c7ada2afd9814138",
          "type": "user",
          "name": "Armstrong",
          "surname": "Riddle",
          "isActive": true,
          "company": "SARASONIC"
        },
        {
          "id": "58514a129f7d01426e174a8d",
          "type": "user",
          "name": "Priscilla",
          "surname": "Guerra",
          "isActive": true,
          "company": "MANTRIX"
        },
        {
          "id": "58514a12b9ca6b8cfe71cb71",
          "type": "user",
          "name": "Kristine",
          "surname": "Fulton",
          "isActive": true,
          "company": "ZILLAR"
        },
        {
          "id": "58514a1281ce2f7bc6d2efee",
          "type": "user",
          "name": "Deloris",
          "surname": "Lucas",
          "isActive": false,
          "company": "ARCHITAX"
        },
        {
          "id": "58514a12b335f1245ae89ff8",
          "type": "user",
          "name": "Landry",
          "surname": "Bright",
          "isActive": true,
          "company": "EXOSIS"
        },
        {
          "id": "58514a125272d23c10f90e18",
          "type": "user",
          "name": "Kathryn",
          "surname": "Sullivan",
          "isActive": true,
          "company": "EDECINE"
        },
        {
          "id": "58514a12ed2476ccd6144521",
          "type": "user",
          "name": "Dillard",
          "surname": "Hoffman",
          "isActive": true,
          "company": "MEDCOM"
        },
        {
          "id": "58514a12c833c26221093624",
          "type": "user",
          "name": "Genevieve",
          "surname": "Brennan",
          "isActive": true,
          "company": "FLUMBO"
        }
      ];

  }

})();