window.state = {
    status: true
}

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.name === "setStatus") {
        window.state.status = request.status;
        return;
    }

    if (request.name == "getStatus") {
        sendResponse({ status: window.state.status })
    }
});