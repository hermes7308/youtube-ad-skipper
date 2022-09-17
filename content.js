console.log("Youtube AD Skipper is initialized.");

setInterval(() => {
    chrome.runtime.sendMessage("getStatus", (response) => {
        if (response.status) {
            Skip();
        }
    });
}, 1);

function Skip() {
    // Skip Ad video, ytp-progress-bar-padding
    if (document.documentElement.getElementsByClassName("ad-interrupting").length > 0
        || document.documentElement.getElementsByClassName("ytp-ad-preview-text").length > 0) {
        document.documentElement.getElementsByTagName("video")[0].currentTime = Number.MAX_SAFE_INTEGER;
        if (document.documentElement.getElementsByClassName("ytp-ad-skip-button").length > 0) {
            document.documentElement.getElementsByClassName("ytp-ad-skip-button")[0].click();
        }
        console.log("Ad video is skipped.")
    }// ytp-ad-text ytp-ad-preview-text
    // Skip Ad banner
    if (document.documentElement.getElementsByClassName("ytp-ad-image-overlay").length > 0) {
        if (document.documentElement.getElementsByClassName("ytp-ad-overlay-close-button").length > 0) {
            document.documentElement.getElementsByClassName("ytp-ad-overlay-close-button")[0].click();
        }
        console.log("Ad banner is skipped.")
    }
}