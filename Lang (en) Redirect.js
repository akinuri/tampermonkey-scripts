// ==UserScript==
// @name         Lang (en) Redirect
// @namespace    https://github.com/akinuri
// @version      0.5
// @description  Switch language to "en"
// @author       Noreh AD
// @include      *php.net/manual/*/*
// @include      http://docs.php.net/manual/*/*
// @include      https://secure.php.net/manual/*/*
// @include      *docs.microsoft.com/*
// @include      *msdn.microsoft.com/*
// @include      *developer.mozilla.org/*
// @include      *opensubtitles.org/*
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

    var patterns = [
        {
            site : "php.net",
            lang : "/en/",
            patterns: [
                /https?:\/\/(?:www\.)?(?:secure\.)?(?:docs\.)?php\.net\/manual(\/.*?\/).*/,
            ],
        },
        {
            site : "microsoft.com",
            lang : "/en-US/",
            patterns: [
                /https:\/\/(?:docs\.)?(?:msdn\.)?microsoft\.com(\/.*?\/).*/,
            ],
        },
        {
            site : "mozilla.org",
            lang : "/en-US/",
            patterns: [
                /https:\/\/developer\.mozilla\.org(\/.*?\/)docs\/.*/,
            ],
        },
        {
            site : "opensubtitles.org",
            lang : "/sublanguageid-eng/",
            patterns: [
                // https://www.opensubtitles.org/en/search/sublanguageid-all/imdbid-3268978
                /https:\/\/www\.opensubtitles\.org\/(?:en|tr)\/search(\/sublanguageid-all\/)(imdbid|idmovie)-\d+/,
            ],
        },
    ];

    var match = null;
    var lang  = null;

    patterns.forEach((obj) => {
        obj.patterns.forEach((pattern) => {
            if (match = location.href.match(pattern)) {
                lang = match[1];
                if (lang != obj.lang) {
                    location.href = location.href.replace(lang, obj.lang);
                }
            }
        });
    });

})();