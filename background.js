chrome.commands.onCommand.addListener(function(command) {
    getSelection(function(selection) {
        let translateUrl = `https://translate.google.com/?sl=en&tl=ru&text=${selection}`
        chrome.tabs.create({ url: translateUrl });
    })
});

function getSelection(callback) {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { action: "getSelection" }, null, function(response) {
            callback(response ? response.selection : "Error")
        })
    })
}