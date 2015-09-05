myApp.controller("firstController", function ($scope) {


    $scope.employees = [
        { firstName: "Phani", "lastName": "Kumar", phones: [{ phone: "1221212122" }, {phone:"2332342342"}] },
        { firstName: "Raj", "lastName": "Kumar" },
        { firstName: "Kunal", "lastName": "Kumar" },
        { firstName: "Nitesh", "lastName": "Kumar" },
        { firstName: "Sundar", "lastName": "Kumar" },
        { firstName: "Ganga", "lastName": "Kumar" }
    ];

    $scope.insertEmp = function () {

        $scope.employees.push(
            {
                firstName: $scope.firstEmployee,
                lastName: $scope.lastEmployee,
                email: $scope.emailEmployee,
                phones:
            }
            );
    };

    $scope.phones = [];

    $scope.addphone = function () { $scope.phones.push($scope.phones.length); }





});