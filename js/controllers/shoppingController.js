myApp.controller("shoppingController", function ($scope) {


    $scope.myData = { val: "phani" };

    $scope.$watch('myData.val', function (newVal) {
        $scope.myData.tooLong = newVal.length > 10;
    });

    $scope.showItem = false;

    $scope.bill = {};


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

     var calculateTotals = function () {

        var total = 0;
        angular.forEach($scope.invoice.items, function (item) {
            total += item.qty * item.cost;
        });

        $scope.bill.total = total;
        $scope.bill.discout = total > 1000 ? 50 : 0;
        $scope.bill.subTotal = total - $scope.bill.discout;
    };

    $scope.$watch('invoice.items', calculateTotals, true);

    $scope.removeItem = function (index) {
        $scope.invoice.items.splice(index, 1);
    };

});