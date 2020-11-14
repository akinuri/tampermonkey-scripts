// ==UserScript==
// @name         Popup Blocker
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Noreh AD
// @match        https://*/*
// @grant        none
// ==/UserScript==

(function() {
    
    window.urlActions = {
        // url : {
            // done     : false,
            // function : {},
            // repeat   : 1,
            // timeout  : 1000,
        // },
    };
    
    
    
    
    urlActions["https:\\/\\/www\\.sozcu\\.com\.tr\/.*"] = function () {
        hideElements(".fc-ab-root");
        document.body.classList.add("scroll-fkn-able");
    };
    
    
    
    urlActions["https:\\/\\/www\\.dailymail\\.co\.uk\/.*"] = {
        
    };
    
    
    
    // improve this!
    // https://www.dailymail.co.uk/femail/article-8460023/Viewers-School-Tried-End-Racism-left-tears-11-year-old-boy-breaks-down.html
    // urlActions["https:\\/\\/www\\.dailymail\\.co\.uk\/.*"] = function () {
        
        // function hide() {
            // let title = queryText(document.body, "We see that you're using an ad blocker");
            // if (!title) {
                // return;
            // }
            // let parent = title.closest("body > *");
            // if (parent) {
                // parent.classList.add("in-fkn-visible");
            // }
        // }
        
        // if (typeof queryText == "undefined") {
            // fetch("https://raw.githubusercontent.com/akinuri/js-lib/master/queryText.js")
                // .then(function (response) {
                    // return response.text();
                // })
                // .then(function (text) {
                    // eval(text);
                    // window.queryText = queryText;
                    // window.queryTextAll = queryTextAll;
                // })
                // .then(function () {
                    // hide();
                // });
        // } else {
            // hide();
        // }
        
    // };
    
    
    // https://www.forbes.com/sites/sergeiklebnikov/2020/06/17/20-year-old-robinhood-customer-commits-suicide-after-seeing-a-730000-negative-balance/
    urlActions["https:\\/\\/www\\.forbes\\.com\/.*"] = function () {
        
    };
    
    
    
    // https://www.businessinsider.com/how-to-time-travel-with-wormholes-2017-11?utm_source=facebook.com&utm_medium=social&utm_campaign=sf-bi-science&fbclid=IwAR09n4h0bXztBgAg1Dv8YMBz_RDo0i0VaS61MOG2PDV1ycwg0SJYqDDZ3Yc
    urlActions["https:\\/\\/www\\.businessinsider\\.com\\/.*"] = function () {
        hideElements(".tp-modal iframe", ".tp-modal");
        hideElements(".tp-backdrop.tp-active");
        document.body.classList.remove("tp-modal-open");
        document.body.classList.add("scroll-fkn-able");
    };
    
    
    // https://www.dailymail.co.uk/tvshowbiz/article-8399955/The-Flash-actor-Hartley-Sawyer-FIRED-racist-misogynist-tweets-resurface.html?ito=social-facebook&fbclid=IwAR3deoJOk1AnFZQOJ-rJu59v08QpN0aGGbCGsMn6NwklgXfpBvphL3DYfHo
    urlActions["https:\\/\\/www\\.dailymail\\.co\.uk\\/.*"] = function () {
        
    };
    
    
    
    
    
    
    
})();

window.addEventListener("load", function () {
    
    if (window.urlActions) {
    
        let tmStyle = document.querySelector("head style#tmStyle");
        if (!tmStyle) {
            let tmStyle = document.createElement("style");
            tmStyle.id = "tmStyle";
            tmStyle.textContent = ".in-fkn-visible { display:none; visibility:hidden; opacity:0; } .scroll-fkn-able { overflow: auto !important; overflow-x: auto !important; }";
            document.head.appendChild(tmStyle);
        }
        
        let urls = Object.keys(window.urlActions);
        for (let url of urls) {
            let urlPattern = new RegExp(url);
            if (urlPattern.test(location.href)) {
                console.log("Removing pop-ups.");
                urlActions[url]();
                setTimeout(function () {
                    urlActions[url]();
                }, 1000);
                break;
            }
        }
        
    }
    
});

function hideElements(queryIn, queryOut = null) {
    let elements = document.querySelectorAll(queryIn);
    if (queryOut) {
        elements.forEach(element => {
            let parent = element.closest(queryOut);
            if (parent) {
                parent.classList.add("in-fkn-visible");
            }
        });
    } else {
        elements.forEach(element => element.classList.add("in-fkn-visible"));
    }
}
