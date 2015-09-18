var myApp = angular.module("myApp", ['ngRoute']);

myApp.config(function ($routeProvider) {

    $routeProvider
    .when('/employees', {
        templateUrl: "views/employees.html",
        controller: "empController"
    }).when('/departments', {
        templateUrl: "views/departments.html",
        controller:"depController"
    }).when('/departments/:empName', {
        templateUrl: "views/viewDep.html",
        controller:"viewDepController"
    }).when('/getExample', {
        templateUrl: "views/httpEample.html",
        controller:"dataController"
    }).otherwise({
        redirectTo:"/employees"
    })

});