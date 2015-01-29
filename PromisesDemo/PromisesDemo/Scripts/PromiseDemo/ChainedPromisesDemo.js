window.Lab = window.Lab || {};

(function (chainedPromisesDemo) {

    var countdownCounter = 5;
    var timeoutId = null;

    $(function () {
        chainedPromisesDemo.initialize();
    });


    chainedPromisesDemo.initialize = function () {

        console.log('starting 1st countdown');

        countdownAsync(5).then(function () {

            console.log('1st countdown complete');

            console.log('starting 2nd countdown');

            return countdownAsync(10);

        })
        .then(function () {

            console.log('2nd countdown complete');

        })
        .catch(function(e) {
            console.log('exception caught !');
            console.log(e);
        });

    };

    var countdownAsync = function (startFrom) {

        return new Promise(function (resolve, reject) {

            var countdownFrom = startFrom ? startFrom : countdownCounter;

            var countdown = function () {

                console.log(countdownFrom);

                countdownFrom -= 1;

                if (countdownFrom <= 0) {
                    clearTimeout(timeoutId);
                    resolve();
                } else {
                    timeoutId = setTimeout(countdown, 1000);
                }

            };

            countdown();

        });

    };


}(window.Lab.chainedPromisesDemo = window.Lab.chainedPromisesDemo || {}));