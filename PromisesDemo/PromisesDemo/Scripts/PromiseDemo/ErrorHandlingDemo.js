window.Lab = window.Lab || {};

(function (errorHandlingDemo) {


    $(function () {
        errorHandlingDemo.initialize();
    });

    var failBoatDataCallAsync = function () {

        return new Promise(function (resolve, reject) {

            throw new Error(" So Error ! Very Exception ! Much Handling !")

        });

    };


    errorHandlingDemo.initialize = function () {

        failBoatDataCallAsync()
            .then(function () {
                //This code will never be hit becuase the promise always throws an error
                console.log("code wont be hit")
            })
            .catch(function (e) {
                console.log(e);
            });

    };
   


}(window.Lab.ErrorHandlingDemo = window.Lab.ErrorHandlingDemo || {}));