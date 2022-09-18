var state = {
    status: true
};

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    const {
        message,
        data
    } = request;

    if (message == "setStatus") {
        state.status = data.status;
        return;
    }

    if (message == "getStatus") {
        sendResponse({ status: state.status })
    }
});