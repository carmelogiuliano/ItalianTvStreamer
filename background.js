chrome.runtime.onInstalled.addListener(() => {
  console.log('Hotkey Loader extension installed.');
});

chrome.commands.onCommand.addListener(function(command) {
  if (command === 'loadRaiNewsUrl') {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      chrome.tabs.update(tabs[0].id, { url: 'https://www.raiplay.it/dirette/rainews24' });
    });
  }
  else if (command === 'loadTV2000Url') {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      chrome.tabs.update(tabs[0].id, { url: 'https://www.tv2000.it/live/' });
    });
  }
  else if (command === 'loadMediasetItaliaUrl') {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      chrome.tabs.update(tabs[0].id, { url: 'https://mediasetinfinity.mediaset.it/diretta/mediaset-international_cMG' });
    });
  }
  else if (command === 'loadLa7Url') {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      chrome.tabs.update(tabs[0].id, { url: 'https://www.la7.it/dirette-tv' });
    });
  }
});

