; (function () {

    let setupStatus = {
        appName: 'Youtube AD Selector clicker',
        degug: false,
        isYoutubePlayer: false,
        cmi: 0,
        consoleMonitorInterval: 15
    }

    if (setupStatus.degug) {
        console.log("Start : " + setupStatus.appName);
    }

    setInterval(function () {

        if (window.location.origin == 'https://www.youtube.com') {
            setupStatus.isYoutubePlayer = true;
        }

        if (window.location.pathname !== '/watch') {
            setupStatus.isYoutubePlayer = false;
        }

        if (setupStatus.isYoutubePlayer) {
            if (setupStatus.degug) {
                setupStatus.cmi++;
                if (setupStatus.cmi >= setupStatus.consoleMonitorInterval) {
                    console.log("Work : " + setupStatus.appName)
                    setupStatus.cmi = 0;
                }
            }

            let playerContainer = document.getElementById('player');
            if (playerContainer) {
                videoP = document.querySelector("#player-container .ytp-ad-skip-button-container");
                if (videoP) {
                    clickYoutubeSelector(videoP);
                }
            }

            let reckAds = document.querySelector("div.ytp-ad-overlay-container>div:nth-child(1)>div:nth-child(2)>button");
            if (reckAds) {
                clickYoutubeSelector(reckAds);
            }
        }

    }, 1000);

    function clickYoutubeSelector(element) {
        if (setupStatus.degug) {
            console.log("Auto click : " + setupStatus.appName);
        }
        element.click();
    }

})();