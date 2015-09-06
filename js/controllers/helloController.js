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

        $scope.employees.push(
            {
                firstName: $scope.firstEmployee,
                lastName: $scope.lastEmployee,
                email: $scope.emailEmployee,
                phones: $scope.phoneArr  //$(".phone-number").map(function () { return { phone: $(this).val() } })
            }
            );
    };

    $scope.phoneArr = [];

    $scope.addphone = function () {
        $scope.phoneArr.push($scope.phoneArr.length);
    }

    $scope.showPhones = function (phones) {
        if (phones) {
            var numbers = $.map(phones, function (ph, i) { return i + 1 + ". " + ph.phone })
            alert(numbers.join("\n"));
        }
    };





});