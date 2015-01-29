window.Lab = window.Lab || {};

(function (coordinationDemo) {

    $(function () {
        coordinationDemo.initialize();
    });


    coordinationDemo.initialize = function () {

        Promise.all(coordinationDemo.getPromises()).then(function (args) {
            console.log(args);
        });

    };

    coordinationDemo.getPromises = function () {

        var result = [];

        for (var index = 0; index < 10; index++) {
            
            var jqXHR = $.ajax({
                type: "POST",
                url: "/PromisesDemo/GetData"

            });

            result.push(Promise.resolve(jqXHR));
        }

        return result;
    };

}(window.Lab.coordinationDemo = window.Lab.coordinationDemo || {}));