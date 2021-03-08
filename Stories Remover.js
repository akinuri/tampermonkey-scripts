// ==UserScript==
// @name         Stories Remover
// @namespace    https://github.com/akinuri
// @version      0.1
// @description  Removes stupid Stories section.
// @author       Noreh AD
// @match        https://*
// @grant        none
// ==/UserScript==

(function() {

    function remove() {
        
        if (location.href == "https://www.facebook.com/") {
            
            // removes stories section
            let storiesEl = document.querySelector("[data-pagelet='Stories']");
            if (storiesEl) storiesEl.style.display = "none";
            
            // removes rooms section
            let roomsEl = document.querySelector("[data-pagelet='VideoChatHomeUnit']");
            if (roomsEl) roomsEl.style.display = "none";
            
            // removes watch link
            let watchEl = document.querySelector("a[aria-label^=Watch]").closest("li");
            if (watchEl) watchEl = watchEl.closest("li");
            if (watchEl) watchEl.style.display = "none";
            
        }
        
    }

    window.addEventListener("DOMContentLoaded", remove);
    window.addEventListener("load", remove);

})();