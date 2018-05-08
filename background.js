var state = false;
chrome.browserAction.onClicked.addListener(function (tab) {
  state = !state;
  if (state == false) {
    chrome.browserAction.setIcon({path: "uncookie.png"});    
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      var activeTab = tabs[0];
      chrome.tabs.sendMessage(activeTab.id, { "message": "unset_cookie" });
    });
  } else {
    chrome.browserAction.setIcon({path: "cookie.png"});          
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      var activeTab = tabs[0];
      chrome.tabs.sendMessage(activeTab.id, { "message": "set_cookie" });
    });
  }

});

