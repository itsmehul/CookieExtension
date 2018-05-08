// content.js
chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        if (request.message === "set_cookie") {
            document.cookie = "disable_analytics=true";

        } else {
            document.cookie = "disable_analytics=false";
        }
    }
);