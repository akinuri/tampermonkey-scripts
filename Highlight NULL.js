// ==UserScript==
// @name         Highlight NULL
// @namespace    https://github.com/akinuri
// @version      2024-09-13
// @description  Makes the NULL values in tables more distinct.
// @author       Noreh AD
// @match        *://*/*phpmyadmin/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=phpmyadmin.net
// @grant        none
// ==/UserScript==

(function() {
    "use strict";
    const url = window.location.href;
    if (url.includes("/phpmyadmin/") && new URLSearchParams(window.location.search).has("table")) {
        let domloaded = false;
        window.addEventListener("DOMContentLoaded", () => {
            domloaded = true;
            main();
        });
        setTimeout(() => {
            if (!domloaded) {
                main();
            }
        }, 1000);
    }
})();

function main() {
    let style = document.createElement("style");
    style.textContent = `
        td.null {
            color: hsl(230deg 50% 50% / 40%) !important;
        }
    `;
    document.head.append(style);
}
