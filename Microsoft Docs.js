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
    'use strict';

    if (location.href.match(/tr-tr/)) {
        location.href = window.location.href.replace(/tr-tr/, "en-US");
    }
})();