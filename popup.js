document.getElementById('loadUrl1').addEventListener('click', function() {
    chrome.runtime.sendMessage({ action: 'loadUrl', url: 'https://youtube.com' });
  });
  
  document.getElementById('loadUrl2').addEventListener('click', function() {
    chrome.runtime.sendMessage({ action: 'loadUrl', url: 'https://google.com' });
  });
  
  // Add more event listeners for additional buttons
  