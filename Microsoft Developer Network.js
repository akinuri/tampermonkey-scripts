// ==UserScript==
// @name         Microsoft Developer Network
// @namespace    https://github.com/akinuri
// @version      0.1
// @description  Change language to "en-US"
// @author       Noreh AD
// @match        *msdn.microsoft.com/*
// @grant        none
// ==/UserScript==

(function() {
    
    if (match = location.href.match(/https:\/\/msdn\.microsoft\.com\/(.*?)\/.*/)) {
        var lang = match[1];
        if (lang != "en-US") {
            location.href = location.href.replace(lang, "en-US");
        }
    }
    
})();