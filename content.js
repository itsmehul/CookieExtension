// content.js
const d1= new Date()
d1.setDate(32);

chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        if (request.message === "set_cookie") {
            document.cookie = "disable_analytics=true; expires="+d1.toUTCString()+" UTC";

        } else {
            document.cookie = "disable_analytics=false; expires="+d1.toUTCString()+" UTC";
        }
    }
);