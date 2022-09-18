// https://www.youtube.com/watch?v=Ipa58NVGs_c&t=525s
// chrome.runtime.sendMessage 
// sends a message to all open extension pages (i.e. background, popup, etc.)
// chrome.tabs.sendMessage 
// sends a message to all content scripts from the extension in a given tab (possibly filtered by frame ID)

document.addEventListener("DOMContentLoaded", function () {
    // toggle status input event listener
    document.querySelector("input").addEventListener("change", onChange, false);
    function onChange() {
        let checked = document.querySelector("input").checked;
        chrome.tabs.query({ currentWindow: true, active: true }, (tabs) => {
            chrome.runtime.sendMessage({
                "message": "setStatus",
                "data": {
                    "status": checked
                }
            });
        });
    }

    // current active status
    const bg = chrome.extension.getBackgroundPage();
    document.querySelector("input").checked = bg.state.status;
}, false);