chrome.runtime.onInstalled.addListener(() => {
  console.log('Hotkey Loader extension installed.');
});

chrome.commands.onCommand.addListener(function(command) {
  if (command === 'loadUrl') {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      chrome.tabs.update(tabs[0].id, { url: 'https://example.com/new-url' });
    });
  }
});

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.action === 'loadUrl') {
      chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.update(tabs[0].id, { url: request.url });
      });
    }
  }
);
