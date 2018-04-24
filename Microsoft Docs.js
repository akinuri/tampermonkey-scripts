// ==UserScript==
// @name         Microsoft Docs
// @namespace    https://github.com/akinuri
// @version      0.1
// @description  Change language to "en-US"
// @author       Nored AD
// @match        *docs.microsoft.com/*
// @grant        none
// ==/UserScript==

(function() {
    
    if (match = location.href.match(/https:\/\/docs\.microsoft\.com\/(.*?)\/.*/)) {
        var lang = match[1];
        if (lang != "en-US") {
            location.href = location.href.replace(lang, "en-US");
        }
    }
    
})();