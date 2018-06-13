// ==UserScript==
// @name         PHP.net
// @namespace    https://github.com/akinuri
// @version      0.1
// @description  Change language to "en"
// @author       Noreh AD
// @include      http://php.net/manual/*/*
// @include      http://docs.php.net/manual/*/*
// @include      https://secure.php.net/manual/*/*
// @grant        none
// ==/UserScript==

(function() {

    // google.com.* shows documentation pages in user's native language, and for me, this is not preferable
    // most documentations are written in English and translations do not make much sense
    // this is usually not a translation related problem, but a language related problem
    // every programming language (basics, concepts, etc.) I've encountered is written in English
    // when you translate these into another language, they do not make much sense, because
    // these concepts do not exist in the target language
    // so I rather view the original

    if (match = location.href.match(/https?:\/\/(?:secure\.)?(?:docs\.)?php\.net\/manual(\/.*?\/).*/)) {
        var lang = match[1];
        if (lang != "/en/") {
            location.href = location.href.replace(lang, "/en/");
        }
    }

})();