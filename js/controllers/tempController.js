myApp.controller("tempController", function ($scope) {


    $scope.message = "hello world";


    $scope.names = ["Phani", "Kumar", "Raj", "Kunal"];

    $scope.employees = [
          {
              firstName: "Phani", "lastName": "Kumar",
              phones: [
                  { phone: "1221212122" },
                  { phone: "2332342342" }
              ]
          },
          { firstName: "Raj", "lastName": "Kumar" },
          { firstName: "Kunal", "lastName": "Raj" },
          { firstName: "Nitesh", "lastName": "Raj" },
          { firstName: "Sundar", "lastName": "Kumar" },
          { firstName: "Ganga", "lastName": "Kumar" }
    ];



});