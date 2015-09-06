myApp.controller("firstController", function ($scope) {


    $scope.employees = [
        {
            firstName: "Phani", "lastName": "Kumar",
            phones: [
                { phone: "1221212122" },
                { phone: "2332342342" }
            ]
        },
        { firstName: "Raj", "lastName": "Kumar" },
        { firstName: "Kunal", "lastName": "Kumar" },
        { firstName: "Nitesh", "lastName": "Kumar" },
        { firstName: "Sundar", "lastName": "Kumar" },
        { firstName: "Ganga", "lastName": "Kumar" }
    ];

    $scope.insertEmp = function () {

        angular.forEach($scope.phoneArr, function (item) {
            console.log();
        });


        $scope.employees.push(
            {
                firstName: $scope.firstEmployee,
                lastName: $scope.lastEmployee,
                email: $scope.emailEmployee,
                phones: $scope.phoneArr  //$(".phone-number").map(function () { return { phone: $(this).val() } })
            }
            );
    };

    $scope.phoneArr = [{phone:1234567890}];

    $scope.addphone = function () {
        $scope.phoneArr.push({ phone: 000000000});
    }

    $scope.showPhones = function (phones) {
        if (phones) {
            var numbers = $.map(phones, function (ph, i) { return i + 1 + ". " + ph.phone })
            alert(numbers.join("\n"));
        }
    };





});