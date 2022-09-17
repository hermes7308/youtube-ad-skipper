let skipperId = null;

function Skip() {
    if (document.location.pathname !== "/watch") {
        return;
    }

    // Skip Ad video, ytp-progress-bar-padding
    if (document.getElementsByClassName("ad-interrupting").length > 0) {
        let numOfVideos = document.getElementsByTagName("video").length;
        if (numOfVideos == 0) {
            return;
        }

        const lastVideoIndex = numOfVideos - 1
        document.getElementsByTagName("video")[lastVideoIndex].currentTime = Number.MAX_SAFE_INTEGER;
        if (document.getElementsByClassName("ytp-ad-skip-button").length > 0) {
            document.getElementsByClassName("ytp-ad-skip-button")[0].click();
        }
        console.log("Ad video is skipped.")
    }
    // Skip Ad banner
    if (document.getElementsByClassName("ytp-ad-image-overlay").length > 0) {
        if (document.getElementsByClassName("ytp-ad-overlay-close-button").length > 0) {
            document.getElementsByClassName("ytp-ad-overlay-close-button")[0].click();
        }
        console.log("Ad banner is skipped.")
    }
}

function StartSkipper() {
    if (skipperId != null) {
        console.log("Skipper is already running...")
        return;
    }
    console.log("Start Youtube Skipper")
    skipperId = setInterval(Skip, 100);
}

function StopSkipper() {
    if (skipperId == null) {
        console.log("Skipper is not running...")
    }
    console.log("Stop Youtube Skipper")
    clearInterval(skipperId);
    skipperId = null;
}

StartSkipper();