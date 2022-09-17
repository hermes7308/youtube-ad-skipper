var state = {
    status: true
};

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    if (message === "setStatus") {
        state.status = request.status;
        return;
    }

    if (message == "getStatus") {
        sendResponse({ status: state.status })
    }
});