// ==UserScript==
// @name         Google Image Search - View Image
// @namespace    https://github.com/akinuri
// @version      0.1
// @description  Add "View Image" button back (WIP). Works with initially loaded images.
// @author       Noreh AD
// @include      https://www.google.com/search*
// @include      https://www.google.com.tr/search*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    
    // created on the spur of the moment
    // see https://www.youtube.com/watch?v=WNkLtHGPi8U&lc=Ugyah1Fuq6ZyuIHsLY94AaABAg
    // will update it later, so that it'll work with images that're loaded when page is scrolled down
    
    window.onload = function () {
        
        setTimeout(function () {
            
            var isImageSearch = document.getElementById("res");
            
            if (isImageSearch) {
                
                var tiles = isImageSearch.querySelectorAll(".rg_bx");
                
                var preview = document.getElementById("irc_bg");
                
                var rows = Array.from(document.querySelectorAll("#irc_cc > div table.irc_but_r tr"));
                
                var cell = document.createElement("td");
                var link = document.createElement("a");
                link.className = "viewImage";
                link.href = "#";
                link.target = "_blank";
                link.innerHTML = "<span>View Image</span>";
                cell.append(link);
                
                var cells = [
                    cell.cloneNode(true),
                    cell.cloneNode(true),
                    cell.cloneNode(true),
                ];
                
                rows.forEach(function (row, i) {
                    row.insertBefore(cells[i], row.children[0]);
                });
                
                window.cells = cells;
                
                Array.from(tiles).forEach(function (tile) {
                    
                    var data = JSON.parse(tile.querySelector(".rg_meta").innerText);
                    
                    tile.dataset.ou = data.ou;
                    
                    tile.addEventListener("click", function () {
                    
                        cells.forEach(function (cell) {
                            cell.children[0].href = this.dataset.ou;
                            console.log(cell);
                        }, this);
                    
                    }, true);
                    
                });
                
            }
            
        }, 500);
        
    };
    
})();