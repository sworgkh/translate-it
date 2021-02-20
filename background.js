var BASE_URLS = {
    "Google": "https://translate.google.com/?sl=en&tl=ru&text=",
    "Yandex": "https://translate.yandex.com/?lang=en-ru&text="
}

chrome.commands.onCommand.addListener(function(command) {
    getSelection(function(selection) {
        let translateUrl = `${getBaseUrl(command)}${selection}`;
        chrome.tabs.create({ url: translateUrl });

    });
});

function getBaseUrl(command) {
    switch (command) {
        case "GoogleTranslate":
            return BASE_URLS.Google;
        case "YandexTranslate":
            return BASE_URLS.Yandex;
        default:
            return BASE_URLS.Google;
    }
}

function getSelection(callback) {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.sendMessage(
            tabs[0].id, { action: "getSelection" },
            null,
            function(response) {
                callback(response ? response.selection : "Error");
            }
        );
    });
}