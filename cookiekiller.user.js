// ==UserScript==
// @name         TGS Cookie Killer
// @namespace    https://ratismal.github.io/tgs_cookie_killer/cookiekiller.user.js
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