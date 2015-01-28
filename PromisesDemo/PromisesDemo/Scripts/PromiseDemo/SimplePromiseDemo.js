window.Lab = window.Lab || {};

(function (simplePromiseDemo) {

    var countdownCounter = 5;
    var timeoutId = null;

    $(function () {
        simplePromiseDemo.initialize();
    });

   
    simplePromiseDemo.initialize = function () {

        console.log('starting countdown');

        countdownAsync().then(function() {
            console.log('countdown complete');
        });

    };

    var countdownAsync = function () {

        return new Promise(function (resolve, reject) {

            var countdown = function() {

                console.log(countdownCounter);

                countdownCounter -= 1;

                if (countdownCounter <= 0) {
                    clearTimeout(timeoutId);
                    resolve();
                } else {
                    timeoutId = setTimeout(countdown, 1000);
                }

            };

            countdown();

        });

    };

}(window.Lab.simplePromiseDemo = window.Lab.simplePromiseDemo || {}));