myApp.filter("join", function () {
   

    return function (arr, seperator) {
            
        if (!arr) {
            return "";
        }
        return arr.join(seperator);
    };

});
