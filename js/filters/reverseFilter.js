myApp.filter("reverse", function () {

    return function (input) {

        var result = "";

        for (var i = input.length-1; i >= 0 ; i--) {
            result += input[i];
        }
        return result;

    };

})