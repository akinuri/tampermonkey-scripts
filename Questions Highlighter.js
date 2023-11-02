// ==UserScript==
// @name         Questions Highlighter
// @namespace    https://github.com/akinuri
// @version      0.1
// @description  Highlight watched questions.
// @author       Noreh AD
// @include      https://stackoverflow.com/
// @include      https://stackoverflow.com/questions
// @icon         https://www.google.com/s2/favicons?sz=64&domain=stackoverflow.com
// @grant        none
// ==/UserScript==

(function() {
    let areQuestionsHighlighed = false;
    window.addEventListener("DOMContentLoaded", () => {
        highlightQuestions();
        areQuestionsHighlighed = true;
    });
    setTimeout(() => {
        if (!areQuestionsHighlighed) {
            highlightQuestions();
            areQuestionsHighlighed = true;
        }
    }, 3000);
})();

function highlightQuestions() {
    let tagColors = {
        "javascript" : "hsl(45deg 65% 80% / 25%)",
        "php"        : "hsl(240deg 65% 80% / 15%)",
    };
    let questions   = Array.from(document.querySelectorAll(".s-post-summary"));
    let watchedTags = Array.from(document.querySelectorAll(".js-tag"));
    watchedTags = watchedTags.map(wt => wt.textContent.trim());
    questions.forEach(q => {
        let qTags = Array.from(q.querySelectorAll(".js-post-tag-list-item"));
        qTags = qTags.map(qt => qt.textContent.trim());
        let matchedTags = watchedTags.filter(wt => qTags.includes(wt));
        if (matchedTags.length) {
            let qColor = tagColors[matchedTags[0]];
            let qProp = "backgroundColor";
            if (matchedTags.length > 1) {
                let colors = matchedTags.map(mt => tagColors[mt]).join(", ");
                let gradient = `linear-gradient(90deg, ${colors})`;
                qColor = gradient;
                qProp = "backgroundImage";
            }
            q.style[qProp] = qColor;
            if (qProp == "backgroundImage") {
                q.style.backgroundColor = "transparent";
            }
        }
    });
}