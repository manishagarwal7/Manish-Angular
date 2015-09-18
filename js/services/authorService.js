myApp.service("authorService", function ($http, $q) {

    return {
        getAuthors: function () {
            var deferred = $q.defer();
            $http.get("http://localhost:2020")
            .success(function (data) {
                deferred.resolve(data);
            })
            .error(function () {
                deferred.reject("Failed due to some error");
            });

            return deferred.promise;

        },

        saveAuthors: function (authObj) {
            var deferred = $q.defer();
            $http.post("http://localhost:2020/author", authObj)
            .success(function (data) {
                deferred.resolve(data);
            })
            .error(function (err) {
                deferred.reject("Failed due to some error");
            });

            return deferred.promise;
        }

    };


});