// ==UserScript==
// @name         Staff Injector
// @namespace    https://github.com/akinuri
// @version      0.1
// @description  Injects a person into a list of people. (a joke)
// @author       Noreh AD
// @match        https://*/*
// @grant        none
// ==/UserScript==

(function() {
    
    let staff = {
        "img"  : "data:image/jpeg;base64,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",
        "name" : "Alper Gürel",
        "role" : "Developer",
    };
    
    let targets = [
        {
            "url"       : "https://ikas.com/tr/hakkimizda",
            "container" : ".members",
            "item"      : ".member",
            "img"       : "img",
            "imgStyle"  : null,
            "name"      : ".name",
            "role"      : ".role",
            "fixes"     : [],
        },
        {
            "url"       : "https://www.ayensoftware.com/ekibimiz/tr",
            "container" : ".baslik3 + .container .row",
            "item"      : ".col-sm-3",
            "img"       : "img",
            "imgStyle"  : "height: 343.75px; object-fit: contain; background-color: gainsboro;",
            "name"      : "h2",
            "role"      : "h3",
            "fixes"     : [
                {
                    "el"    : ".baslik3 + .container .row",
                    "style" : "display: flex; flex-wrap: wrap;",
                },
            ],
        },
    ];
    
    window.addEventListener("load", function () {
        for (let target of targets) {
            if (location.href == target.url) {
                let container = document.querySelector(target.container);
                if (container) {
                    let item = container.querySelector(target.item);
                    if (item) {
                        item = item.cloneNode(true);
                        let img = item.querySelector(target.img);
                        if (img) {
                            img.src = staff.img;
                            if (target.imgStyle) {
                                img.setAttribute("style", target.imgStyle);
                            }
                        }
                        let name = item.querySelector(target.name);
                        if (name) {
                            name.textContent = staff.name;
                        }
                        let role = item.querySelector(target.role);
                        if (role) {
                            role.textContent = staff.role;
                        }
                        let staffPos = Math.round(Math.random() * (container.children.length - 1));
                        container.insertBefore(item, container.children[staffPos]);
                        for (let fix of target.fixes) {
                            let el = document.querySelector(fix.el);
                            if (el && fix.style) {
                                el.setAttribute("style", fix.style);
                            }
                        }
                    }
                }
                break;
            }
        }
    });
    
})();