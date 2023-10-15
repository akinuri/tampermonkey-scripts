// ==UserScript==
// @name         Instagram Tile Indexer
// @namespace    https://github.com/akinuri/tampermonkey-scripts
// @version      0.1
// @description  Adds numbers to image tiles in the profile page.
// @author       Noreh AD
// @include      /^https:\/\/(www\.)?instagram.com\/[^/]+(\/)?$/
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

class XPath2{static getElementPath(e,t=null){let n=[];for(t&&("string"==typeof t?t=document.querySelector(t):parent instanceof HTMLElement&&(t=parent));e&&(n.unshift(e),!t||t!=e);)e=e.parentElement;return n}static getElementXPathIdentifier(e){let t=e.tagName.toLowerCase();if(e.parentElement){let n=e.parentElement.querySelectorAll(":scope > "+e.tagName);n.length>1&&(t+="["+(Array.from(n).indexOf(e)+1)+"]")}return t}static getElementXPath(e,t=null){let n=[],l=XPath2.getElementPath(e,t);return t&&l.shift(),l.forEach(e=>{n.push(XPath2.getElementXPathIdentifier(e))}),n=n.join("/"),t||(n="/"+n),n}static getElementByXPath(e,t=null){return(t?"string"==typeof t?t=document.querySelector(t):parent instanceof HTMLElement&&(t=parent):t=document.documentElement),new XPathEvaluator().evaluate(e,t,null,XPathResult.FIRST_ORDERED_NODE_TYPE,null).singleNodeValue}static getElementsByXPath(e,t=null){t?"string"==typeof t?t=document.querySelector(t):parent instanceof HTMLElement&&(t=parent):t=document.documentElement;let n=new XPathEvaluator().evaluate(e,t,null,XPathResult.ORDERED_NODE_ITERATOR_TYPE),l=[],a=null;for(;a=n.iterateNext();)l.push(a);return l}}

window.XPath2 = XPath2;

(function() {
    // "use strict";
    
    window.addEventListener("load", () => {

        setTimeout(() => {
            
            let totalTileCountPath = "/html/body/div[2]/div/div/div[2]/div/div/div/div[1]/div[1]/div[2]/div[2]/section/main/div/header/section/ul/li[1]/span";
            let totalTileCountEl = XPath2.getElementByXPath(totalTileCountPath);
            let totalTileCount = totalTileCountEl.textContent.trim();

            let gridPaths = [
                "/html/body/div[2]/div/div/div[2]/div/div/div/div[1]/div[1]/div[2]/div[2]/section/main/div/div[2]/article/div/div",
                "/html/body/div[2]/div/div/div[2]/div/div/div/div[1]/div[1]/div[2]/div[2]/section/main/div/div[3]/article/div[1]/div",
            ];
            let gridEl = null;
            for (let gridPath of gridPaths) {
                if (gridEl == null) {
                    gridEl = XPath2.getElementByXPath(gridPath);
                } else {
                    break;
                }
            }

            let observer = new MutationObserver(mutationsList => {
                for (let mutation of mutationsList) {
                    if (mutation.type === "childList") {
                        indexTiles();
                    }
                }
            });
            observer.observe(gridEl, { childList: true });
            
            function indexTiles() {
                let tiles = XPath2.getElementsByXPath("div/div", gridEl);
                let firstTile = tiles[0];
                let lastTile  = tiles[tiles.length - 1];
                let needsIndexing = !("gridIndex" in firstTile.dataset) || !("gridIndex" in lastTile.dataset);
                if (!needsIndexing) {
                    return;
                }
                let initialScreen = false;
                let scrollDir = 0;
                if (!("gridIndex" in firstTile.dataset) && !("gridIndex" in lastTile.dataset)) {
                    initialScreen = true;
                    scrollDir = 1;
                }
                if (!initialScreen) {
                    if ("gridIndex" in firstTile.dataset && !("gridIndex" in lastTile.dataset)) {
                        scrollDir = 1;
                    } else {
                        scrollDir = -1;
                    }
                }
                if (scrollDir == -1) {
                    tiles.reverse();
                }
                let lastGridIndex = 0;
                for (let tile of tiles) {
                    let tileHasIndex = "gridIndex" in tile.dataset;
                    if (tileHasIndex)  {
                        lastGridIndex = parseInt(tile.dataset.gridIndex);
                        continue;
                    }
                    lastGridIndex += scrollDir;
                    let tileIndex = lastGridIndex;
                    tile.dataset.gridIndex = tileIndex;
                    markTileVisually(tile, tileIndex, totalTileCount);
                }
            }

            function markTileVisually(tile, currentIndex, totalCount) {
                tile.style.position = "relative";
                let mark = document.createElement("div");
                mark.setAttribute("style", `
                    position: absolute;
                    right: 0;
                    bottom: 0;
                    padding: 0.5em;
                    background-color: hsl(0deg 25% 25% / 50%);
                    text-shadow: 0 1px 1px hsl(0deg 0% 0% / 50%);
                    color: hsl(0deg 0% 100% / 75%);
                `);
                mark.innerHTML = `
                    <span>${currentIndex}</span>
                    /
                    <span style="font-size: 0.7em; opacity: 0.7;">${totalCount}</span>
                `;
                tile.appendChild(mark);
            }

            indexTiles();
            
        }, 5000);

    });
    
})();