chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.update({ url: "https://bigquery.cloud.google.com/" });
});
