chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {

    if (request.action !== "getSelection")
        sendResponse({ selection: "" });

    sendResponse({ selection: window.getSelection().toString() });
})