myApp.filter("iDontLike", function () {

    return function (input, name) {

        var arrReturn = [];
        for (var i = 0; i < input.length; i++) {
            if (input[i].firstName !== name) {
                arrReturn.push(input[i]);
            }
        }
        return arrReturn;

    };

});
