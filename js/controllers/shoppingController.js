myApp.controller("shoppingController", function ($scope) {

    $scope.showItem = false;


    $scope.invoice = {
        items: [
            {
                qty: 10,
                description: "item",
                cost: 25
            }
        ]
    };

    $scope.addItem = function () {
        $scope.showItem = true;

        $scope.invoice.items.push({
            qty: 1,
            description: "",
            cost:0
        })
    };

    $scope.total = function () {

        var total = 0;
        angular.forEach($scope.invoice.items, function (item) {
            total += item.qty * item.cost;
        });

        return total;

    };

    $scope.removeItem = function (index) {
        $scope.invoice.items.splice(index, 1);
    };

});