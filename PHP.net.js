// ==UserScript==
// @name         PHP.net
// @namespace    https://github.com/akinuri
// @version      0.1
// @description  Change language to "en"
// @author       Noreh AD
// @match        *php.net/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    if (location.href.match(/\/tr\//)) {
        location.href = window.location.href.replace(/\/tr\//, "/en/");
    }
})();