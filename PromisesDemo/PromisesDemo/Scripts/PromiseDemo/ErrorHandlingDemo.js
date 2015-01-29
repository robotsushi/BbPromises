window.Lab = window.Lab || {};

(function (errorHandlingDemo) {


    $(function () {
        errorHandlingDemo.initialize();
    });

    var errorThrowingPromise = function () {

        return new Promise(function (resolve, reject) {

            throw new Error(" So Error ! Very Exception ! Much Handling !");

        });

    };

    var rejectionPromise = function() {

        return new Promise(function (resolve, reject) {

            reject(" So Error ! Very Exception ! Much Handling !");

        });

    };

    errorHandlingDemo.initialize = function () {

        console.log("**************************************");
        console.log('executing error throwing promise');
        console.log("**************************************");

        errorThrowingPromise()
            .then(function () {
                //This code will never be hit becuase the promise always throws an error
                console.log("This code wont be hit");
            })
            .catch(function (e) {
                console.log(e);
            });

        console.log("**************************************");
        console.log('executing promise that will call the reject handler');
        console.log("**************************************");

        rejectionPromise()
            .then(function () {
                //This code will never be hit becuase the promise always rejects the promise
                console.log("This code wont be hit");
            })
            .catch(function (e) {
                console.log(e);
            });

    };
   


}(window.Lab.ErrorHandlingDemo = window.Lab.ErrorHandlingDemo || {}));