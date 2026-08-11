// ==UserScript==
// @name         Kindroid Chat Overlay
// @namespace    kindroid-chat-overlay
// @version      1.0.0
// @description  Widens, centers, and auto-expands Kindroid's native chat composer for easier long-form writing.
// @author       Community proof of concept
// @match        https://kindroid.ai/*
// @grant        none
// @license      MIT
// ==/UserScript==

(() => {
    'use strict';

    const STYLE_ID = 'kindroid-chat-overlay-style';
    const ATTACHED_ATTR = 'data-kindroid-chat-overlay';

    const MAX_WIDTH = 940;
    const MIN_HEIGHT = 64;
    const MAX_HEIGHT = 320;
    const SCAN_INTERVAL_MS = 1000;

    const TEXTAREA_SELECTOR = [
        'textarea[class*="chat-input-bar-v2_input"]',
        'textarea[aria-label="Message"][maxlength="4000"]'
    ].join(', ');

    function injectStyles() {
        if (document.getElementById(STYLE_ID)) return;

        const style = document.createElement('style');
        style.id = STYLE_ID;

        style.textContent = `
            [class*="v2-chat-screen_input-overlay"] {
                box-sizing: border-box !important;
                width: min(${MAX_WIDTH}px, calc(100% - 32px)) !important;
                max-width: ${MAX_WIDTH}px !important;
                min-width: 0 !important;
                left: 50% !important;
                right: auto !important;
                transform: translateX(-50%) !important;
                padding-left: 0 !important;
                padding-right: 0 !important;
            }

            [class*="chat-input-bar-v2_wrapper"] {
                width: 100% !important;
                max-width: none !important;
                min-width: 0 !important;
                margin-left: 0 !important;
                margin-right: 0 !important;
                max-height: none !important;
                flex: 0 0 100% !important;
            }

            [class*="chat-input-bar-v2_bar"] {
                max-height: none !important;
            }

            [class*="chat-input-bar-v2_input-row"] {
                align-items: flex-end !important;
                width: 100% !important;
                min-width: 0 !important;
            }

            ${TEXTAREA_SELECTOR} {
                box-sizing: border-box !important;
                flex: 1 1 auto !important;
                width: auto !important;
                min-width: 0 !important;
                min-height: ${MIN_HEIGHT}px !important;
                max-height: ${MAX_HEIGHT}px !important;
                overflow-y: hidden !important;
                resize: none !important;
                line-height: 1.45 !important;
                padding-top: 12px !important;
                padding-bottom: 12px !important;
                scrollbar-width: thin !important;
            }

            @media (max-width: 820px) {
                [class*="v2-chat-screen_input-overlay"] {
                    width: calc(100% - 16px) !important;
                    max-width: none !important;
                }

                [class*="chat-input-bar-v2_wrapper"] {
                    width: 100% !important;
                    max-width: none !important;
                }

                ${TEXTAREA_SELECTOR} {
                    max-height: 42vh !important;
                }
            }
        `;

        (document.head || document.documentElement).appendChild(style);
    }

    function findTextarea() {
        return document.querySelector(TEXTAREA_SELECTOR);
    }

    function resizeTextarea(textarea) {
        if (!textarea?.isConnected) return;

        textarea.style.setProperty('height', 'auto', 'important');

        const contentHeight = textarea.scrollHeight;
        const maxHeight =
            window.innerWidth <= 820
                ? Math.round(window.innerHeight * 0.42)
                : MAX_HEIGHT;

        const height = Math.max(
            MIN_HEIGHT,
            Math.min(maxHeight, contentHeight)
        );

        textarea.style.setProperty(
            'height',
            `${height}px`,
            'important'
        );

        textarea.style.setProperty(
            'overflow-y',
            contentHeight > maxHeight ? 'auto' : 'hidden',
            'important'
        );
    }

    function scheduleResize(textarea) {
        requestAnimationFrame(() => {
            resizeTextarea(textarea);

            requestAnimationFrame(() => {
                resizeTextarea(textarea);
            });
        });
    }

    function attach(textarea) {
        if (
            !textarea ||
            textarea.hasAttribute(ATTACHED_ATTR)
        ) {
            return;
        }

        textarea.setAttribute(ATTACHED_ATTR, 'true');

        const handleResize = () => scheduleResize(textarea);

        textarea.addEventListener('input', handleResize, true);
        textarea.addEventListener('change', handleResize, true);
        textarea.addEventListener('focus', handleResize, true);

        scheduleResize(textarea);
    }

    function scan() {
        injectStyles();

        const textarea = findTextarea();
        if (!textarea) return;

        attach(textarea);
        resizeTextarea(textarea);
    }

    scan();
    setInterval(scan, SCAN_INTERVAL_MS);

    window.addEventListener('resize', () => {
        const textarea = findTextarea();
        if (textarea) scheduleResize(textarea);
    });
})();
