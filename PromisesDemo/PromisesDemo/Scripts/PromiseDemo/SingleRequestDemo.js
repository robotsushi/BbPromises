window.Lab = window.Lab || {};

(function (singleRequestDemo) {


    $(function () {
        singleRequestDemo.initialize();
    });

    singleRequestDemo.initialize = function () {

        console.log('requesting data');

        singleRequestDemo.getData().then(function (response) {

            console.log(response);

        })
        .catch(function (error) {

            console.log(error);

        });

    }

    singleRequestDemo.getData = function () {

        var jqXHR = $.ajax({
            type: "POST",
            url: "/PromisesDemo/GetData"

        })

        /*****************************************************************
        
        API Reference for BlueBird Promise.resolve

        Create a promise that is resolved with the given value. 
        If value is already a trusted Promise, it is returned as is. 
        If value is not a thenable, a fulfilled Promise is returned 
        with value as its fulfillment value. If value is a thenable 
        (Promise-like object, like those returned by jQuery's $.ajax), 
        returns a trusted Promise that assimilates the state of the thenable

        ******************************************************************/

        return Promise.resolve(jqXHR);
    };


}(window.Lab.SingleRequestDemo = window.Lab.SingleRequestDemo || {}));