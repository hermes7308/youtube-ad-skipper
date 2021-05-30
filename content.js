console.log("Youtube AD Skipper is initialized.");

setInterval(() => {
    chrome.runtime.sendMessage({
        name: "getStatus"
    }, ({ status: status }) => {
        if (status) {
            Skip();
        }
    });
}, 100);

function Skip() {
    // Skip Ad video, ytp-progress-bar-padding
    if (document.documentElement.getElementsByClassName("ad-interrupting").length > 0) {
        document.documentElement.getElementsByTagName("video")[0].currentTime = Number.MAX_SAFE_INTEGER;
        if (document.documentElement.getElementsByClassName("ytp-ad-skip-button").length > 0) {
            document.documentElement.getElementsByClassName("ytp-ad-skip-button")[0].click();
        }
        console.log("Ad video is skipped.")
    }
    // Skip Ad banner
    if (document.documentElement.getElementsByClassName("ytp-ad-image-overlay").length > 0) {
        if (document.documentElement.getElementsByClassName("ytp-ad-overlay-close-button").length > 0) {
            document.documentElement.getElementsByClassName("ytp-ad-overlay-close-button")[0].click();
        }
        console.log("Ad banner is skipped.")
    }
}