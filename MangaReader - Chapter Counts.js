// ==UserScript==
// @name         MangaReader: Chapter Counts
// @namespace    https://github.com/akinuri
// @version      0.1
// @description  Adds the missing chapter count to the header.
// @author       Noreh AD
// @match        https://www.mangareader.net/*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // https://stackoverflow.com/a/42600459/2202732
    function getElementsByXPath(xpath, parent = document) {
        let results = [];
        let query = document.evaluate(xpath, parent, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE);
        for (let i = 0, length = query.snapshotLength; i < length; ++i) {
            results.push(query.snapshotItem(i));
        }
        return results;
    }

    window.addEventListener("load", function () {

        if (!("mj" in document)) {
            return;
        }

        if (!("im" in document.mj)) {
            return;
        }

        let chapterCount = Object.keys(document.mj.im).length;

        let targetEl = getElementsByXPath("/html/body/div/div[3]/div/div[6]/div[3]", document);

        if (targetEl.length == 0) {
            return;
        }

        targetEl = targetEl[0];

        let style = "font-weight: bold; display: inline; color: rgba(255, 255, 255, 0.6); float: left; line-height: 33px; font-size: 14px; margin-right: 5px;";

        targetEl.insertAdjacentHTML("afterEnd", '<div style="' + style + '"> / ' + chapterCount + '</div>');

    });

})();