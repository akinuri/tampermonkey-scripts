// ==UserScript==
// @name         Manga Highlighter
// @namespace    https://github.com/akinuri
// @version      0.1
// @description  Highlight specific Mangas
// @author       Noreh AD
// @include      *mangareader.net/
// @grant        none
// ==/UserScript==

(function() {

    var mangas = [
        "Boruto",
        "Boruto: Naruto Next Generations",
        "DICE: The Cube that Changes Everything",
        "Fairy Tail 100 Years Quest",
        "Fairy Tail Zero",
        "Fairy Tail",
        "Godspeed",
        "Naruto Gaiden: The Seventh Hokage",
        "Naruto",
        "One Piece",
        "Onepunch-Man",
        "Rock Lee's Springtime of Youth",
        "The Breaker: New Waves",
        "The Fiary Captivity",
        "That Girl Is Not Just Cute",
        "Eden's Zero",
        "Burning Effect",
        "Noblesse",
        "Ouroboros",
        "Shingeki no Kyojin",
        "I don't want to be Empress!",
    ];

    var updateCount = 0;

    Array.from(document.querySelectorAll("#latestchapters tr")).forEach(function (row) {
        var title = row.querySelector("strong").textContent;
        if (mangas.includes(title)) {
            row.style.backgroundColor = "hsla(0, 100%, 50%, .2)";
            updateCount++;
        }
    });

    document.querySelector("#latesthot h2").innerHTML += " <sup style='color: hsl(0, 80%, 40%); font-size: 0.8em; line-height: 1;'>(" + updateCount + ")</sup>";



    // ----- AD-BLOCKING

    function hideAd(query) {
        var el = document.querySelector(query);
        if (el) {
            el.style.display = "none";
        }
    }

    var adElements = [
        "#admaintop",
        "#admaintop + a",
        "div.c10",
        "body > :last-child",
    ];

    window.addEventListener("load", function () {
        adElements.forEach(ad => hideAd(ad));
    });

})();