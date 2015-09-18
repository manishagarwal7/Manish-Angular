myApp.controller("dataController", ['$scope', 'authorService', function ($scope, authorService) {
    

    $scope.authors = [];
    $scope.message = false;

    authorService.getAuthors().then(function(data){
        $scope.authors = data;
    }, function(err){
        console.log(err);
    });

    $scope.addAuthor = function () {

        var authObj = {
            author: $scope.authName,
            text: $scope.authText
        }

        authorService.saveAuthors(authObj).then(function (data) {
            $scope.message = data;
        }, function (err) {
            console.log(err);
        });



    };



  

}]);