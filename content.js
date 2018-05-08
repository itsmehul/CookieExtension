// content.js
chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        if (request.message === "set_cookie") {
            document.cookie = "Disable Analytics=true";
            
        }else{
            document.cookie = "Disable Analytics=false";
        }
    }
);