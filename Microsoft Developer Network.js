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
    'use strict';

    if (location.href.match(/tr-tr/)) {
        location.href = window.location.href.replace(/tr-tr/, "en-US");
    }
})();