window.Lab = window.Lab || {};

(function (synchronizationDemo) {


    $(function () {
        synchronizationDemo.initialize();
    });

    synchronizationDemo.initialize = function () {

        console.log('Making 1st data request');

        synchronizationDemo.getData().then(function(response) {

            console.log('1st Data Request Was Success!' + response);
            console.log('Making 2nd data request');

            return synchronizationDemo.getData();
        }).then(function(response) {
            
            console.log('2nd Data Request Was Success!' + response);

        });

    }

    synchronizationDemo.getData = function () {

        var jqXHR = $.ajax({
            type: "POST",
            url: "/PromisesDemo/GetData"

        });       

        return Promise.resolve(jqXHR);
    };


}(window.Lab.synchronizationDemo = window.Lab.synchronizationDemo || {}));