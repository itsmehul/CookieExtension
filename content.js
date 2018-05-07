// content.js
chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        if (request.message === "set_cookie") {
            document.cookie = "username=BTC";
            
        }else{
            document.cookie = "username=";
        }
    }
);