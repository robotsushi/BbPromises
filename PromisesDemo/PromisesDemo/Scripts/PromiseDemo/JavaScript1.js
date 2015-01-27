window.Lab = window.Lab || {};

(function (simplePromiseDemo) {

    var countdownCounter = 5;

    $(function () {
        simplePromiseDemo.initialize();
    });

   
    simplePromiseDemo.initialize = function () {



    };

    var countdownAsync = function () {

        return new Promise(function (resolve, reject) {
            
            if (countdownCounter === null || countdownCounter === undefined)
                throw new Error("countdownCount is required")

            countdownCounter = countdownCounter - 1;

            if (countdownCounter === 0)
            {
                resolve();
            }

            setTimeout(countdownAsync, 1000);

        });

    };

}(window.Lab.simplePromiseDemo = window.Lab.simplePromiseDemo || {}));