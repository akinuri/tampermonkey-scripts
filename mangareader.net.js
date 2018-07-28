// ==UserScript==
// @name         Manga Highlighter
// @namespace    https://github.com/akinuri
// @version      0.1
// @description  Highlight specific Mangas
// @author       Npreh AD
// @match        https://www.mangareader.net/
// @grant        none
// ==/UserScript==

(function() {
    
    var mangas = [
        "Naruto",
        "Naruto Gaiden: The Seventh Hokage",
        "Boruto: Naruto Next Generations",
        "Boruto",
        "One Piece",
        "Fairy Tail",
        "Fairy Tail Zero",
        "Fairy Tail 100 Years Quest",
        "The Breaker: New Waves",
        "Onepunch-Man",
        "The Fiary Captivity",
        "DICE: The Cube that Changes Everything",
        "Rock Lee's Springtime of Youth",
        "Godspeed",
    ];
    
    Array.from(document.querySelectorAll(".c6")).forEach(function (row) {
        var title = row.querySelector("strong").innerText;
        mangas.forEach(function (manga) {
            if (manga == title) {
                row.style.backgroundColor = "hsla(0, 100%, 50%, .2)";
            }
        });
    });
    
})();