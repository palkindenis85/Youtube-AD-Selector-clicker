; (function () {

    let setupStatus = {
        appName: 'Youtube AD Selector clicker',
        degug: false,
        showDegugAutoClick: true,
        isYoutubePlayer: false,
        cmi: 0,
        consoleMonitorInterval: 15,
        setInterval: 250
    }

    if (setupStatus.degug) {
        console.log("Start : " + setupStatus.appName);
    }

    setInterval(function () {

        if (window.location.origin == 'https://www.youtube.com' || window.location.origin == 'https://m.youtube.com') {
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
           

            let ad_text = document.querySelectorAll('[id^=ad-text]');
            let ad_image = document.querySelectorAll('[id^=ad-image]');
            if(ad_text.length > 0){
                ad_text.forEach(element => element.remove());
            }
            if(ad_image.length > 0){
                ad_image.forEach(element => element.remove());
            }
        }

    }, setupStatus.setInterval);

    function clickYoutubeSelector(element) {
        if (setupStatus.degug || setupStatus.showDegugAutoClick) {
            console.log("Auto click : " + setupStatus.appName);
        }
        element.click();
    }

})();
