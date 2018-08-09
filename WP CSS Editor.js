// ==UserScript==
// @name         WP CSS Editor
// @namespace    https://github.com/akinuri
// @version      0.1
// @description  Fancy CSS Editor
// @author       Noreh AD
// @include      http://*/wp-admin/*
// @grant        none
// ==/UserScript==

(function() {

    fetch("https://raw.githubusercontent.com/akinuri/js-lib/master/jstyle.js")
        .then(function (response) {
            return response.text();
        })
        .then(function (text) {
            eval(text);
            jstyle.addRules({
                ".btn-css-editor" : {
                    "height"            : "33px",
                    "padding"           : "0 10px",
                    "background-color"  : "hsl(0, 84%, 65%)",
                    "border"            : "none",
                    "color"             : "white",
                    "text-shadow"       : "0 1px 1px rgba(0,0,0,.1)",
                    "cursor"            : "pointer",
                },
                ".btn-css-editor:hover" : {
                    "background-color"  : "hsl(0, 84%, 60%)",
                }
            });
        });

    fetch("https://raw.githubusercontent.com/akinuri/js-lib/master/element.js")
        .then(function (response) {
            return response.text();
        })
        .then(function (text) {
            eval(text);
            window.elem = elem;
        });

    window.addEventListener("load", function () {
        setTimeout(function () {
            if (typeof redux != "undefined") {
                currentSection = jQuery("#currentSection");
                editor = ace.edit("custom_css-editor");
                window.button = elem("input", {"type":"button", "class":"btn-css-editor"}, "CSS Editor");
                if (location.search.match("tab=28") || currentSection.val() == "28") {
                    setTimeout(addButton, 200);
                }
                jQuery(".redux-group-menu").on("click", "li", function () {
                    if (currentSection.val() == "28") {
                        setTimeout(addButton, 200);
                        jQuery("#redux-header")[0].scrollIntoView();
                        editor.scrollToLine(0);
                    } else {
                        removeButton();
                    }
                });
            }
        }, 500);
    });

    function addButton() {
        removeButton();
        jQuery(".redux-action_bar .spinner").after(button);
        jQuery(".redux-action_bar .btn-css-editor").on("click", function () {
            window.open("https://akinuri.github.io/css-editor/");
        });
    }

    function removeButton() {
        jQuery(".btn-css-editor").remove();
    }

})(window);