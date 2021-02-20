chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {

    if (request.action !== "getSelection")
        sendResponse({ selection: "" });

    console.log(window.getSelection())
    sendResponse({ selection: window.getSelection().toString() });
})