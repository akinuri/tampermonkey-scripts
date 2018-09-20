// ==UserScript==
// @name         Lang (en) Redirect
// @namespace    https://github.com/akinuri
// @version      0.2
// @description  Change language to "en"
// @author       Noreh AD
// @include      http://php.net/manual/*/*
// @include      http://docs.php.net/manual/*/*
// @include      https://secure.php.net/manual/*/*
// @include      *docs.microsoft.com/*
// @include      *msdn.microsoft.com/*
// @include      *developer.mozilla.org/*
// @grant        none
// ==/UserScript==

(function() {

    // some sites show documentation pages in user's native language (i.e., in SE searches), and for me, this is not preferable
    // most documentations are written in English and translations do not make much sense
    // this is usually not a translation related problem, but a language related problem
    // every programming language (basics, concepts, etc.) I've encountered is written in English
    // when you translate these into another language, they do not make much sense, because
    // these concepts do not exist in the target language
    // so I rather view the original

    var patterns = {
        "php.net" : [
            /https?:\/\/(?:secure\.)?(?:docs\.)?php\.net\/manual(\/.*?\/).*/,
            /http:\/\/php\.net\/manual\/.*\/.*/,
            /http:\/\/docs\.php\.net\/manual\/.*\/.*/,
            /https:\/\/secure\.\php\.net\/manual\/.*\/.*/
        ],
        "docs.ms" : [
            /https:\/\/docs\.microsoft\.com\/(.*?)\/.*/
        ],
        "msdn.ms" : [
            /https:\/\/msdn\.microsoft\.com\/(.*?)\/.*/
        ],
        "dev.moz" : [
            /https:\/\/developer\.mozilla\.org(\/.*?\/)docs\/.*/
        ],
    };

    var match = null;
    var lang  = null;
    if (match = location.href.match(patterns["php.net"][0])) {
        lang = match[1];
        if (lang != "/en/") {
            location.href = location.href.replace(lang, "/en/");
        }
    }
    else if (match = location.href.match(patterns["docs.ms"][0])) {
        lang = match[1];
        if (lang != "en-US") {
            location.href = location.href.replace(lang, "en-US");
        }
    }
    else if (match = location.href.match(patterns["msdn.ms"][0])) {
        lang = match[1];
        if (lang != "en-US") {
            location.href = location.href.replace(lang, "en-US");
        }
    }
    else if (match = location.href.match(patterns["dev.moz"][0])) {
        lang = match[1];
        if (lang != "/en-US/") {
            location.href = location.href.replace(lang, "/en-US/");
        }
    }

})();