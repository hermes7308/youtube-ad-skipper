var pid = null;
window.addEventListener("load", (event) => {
    console.log("Youtube AD Skipper is initialized.");
    pid = setInterval(() => {
        chrome.runtime.sendMessage({ message: "getStatus" }, (response) => {
            if (response.status) {
                Skip();
            }
        });
    }, 10);
})

window.addEventListener("beforeunload", (event) => {
    console.log("Close youtube ad skiper: " + pid);
    if (pid != null) {
        clearInterval(pid);
    }
});

function Skip() {
    // Skip Ad video, ytp-progress-bar-padding
    if (document.documentElement.getElementsByClassName("ad-interrupting").length > 0
        || document.documentElement.getElementsByClassName("ytp-ad-preview-text").length > 0) {
        const videos = document.getElementsByTagName("video");
        for (const video of videos) {
            video.currentTime = Number.MAX_SAFE_INTEGER;
        }

        if (document.documentElement.getElementsByClassName("ytp-ad-skip-button").length > 0) {
            document.documentElement.getElementsByClassName("ytp-ad-skip-button")[0].click();
        }
        console.log("Ad video is skipped.");
    }

    // Skip Ad banner
    if (document.documentElement.getElementsByClassName("ytp-ad-image-overlay").length > 0) {
        if (document.documentElement.getElementsByClassName("ytp-ad-overlay-close-button").length > 0) {
            document.documentElement.getElementsByClassName("ytp-ad-overlay-close-button")[0].click();
        }
        console.log("Ad banner is skipped.")
    }
}