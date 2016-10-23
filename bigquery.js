chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.create({ url: "https://bigquery.cloud.google.com/" });
});
