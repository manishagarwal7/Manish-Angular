myApp.controller("empController", function ($scope, $location) {

    $scope.empData = [
        { name: 'Mark Waugh', city: 'New York' },
        { name: 'Steve Jonathan', city: 'London' },
        { name: 'John Marcus', city: 'Paris' }
    ];

    $scope.goToDep = function () {
        $location.path("/departments/" + $scope.empData);
    };


});
