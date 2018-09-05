// ==UserScript==
// @name         TGS Cookie Killer
// @namespace    https://stupidcat.me
// @version      0.1
// @description  Kills scroll cookies set by The Great Suspender
// @author       stupid cat
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';
    let parts = document.cookie.split('; ');
    for (const cookie of parts) {
        if (cookie.startsWith('gsScrollPos')) {
            document.cookie = cookie + '; Max-Age=0';
        }
    }
})();