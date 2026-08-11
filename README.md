# Kindroid Chat Overlay ✍️

A lightweight userscript that gives **Kindroid's native chat composer more room to breathe**.

It widens and centers the existing Kindroid V2 composer, then lets the textarea grow upward as your draft gets longer. No replacement editor, no copied draft, no extra workflow.

## Features

- Wider **940 px** desktop composer
- Properly centered beneath the conversation
- Auto-expands vertically while you type
- Scrolls internally once the maximum height is reached
- Keeps Kindroid's native attachment, enhancement, voice/send, keyboard, and draft behavior
- Responsive on narrower screens
- No extra buttons or shortcuts required

## Installation

1. Install [Tampermonkey](https://www.tampermonkey.net/?locale=en).
2. Create a new userscript.
3. Replace the default template with the contents of `kindroid-chat-overlay.user.js`.
4. Save the script.
5. Make sure it is enabled.
6. Reload Kindroid.

That's it. Open a chat and type normally.

## How it works

Kindroid Chat Overlay modifies the **existing Kindroid V2 composer** in your browser.

It widens and centers Kindroid's input container, prevents the composer from being flex-squashed, and adjusts the native textarea height as your draft grows.

The script does **not** create a second editor or move your text into another field.

## Privacy

Kindroid Chat Overlay:

- uses `@grant none`
- makes no external network requests
- stores no conversation text
- sends no analytics or telemetry
- accesses no credentials or account tokens
- makes no Kindroid API calls
- does not alter prompts, model settings, generations, subscriptions, limits, or safety systems

Everything happens locally in the currently open Kindroid page.

## Compatibility

Current release targets Kindroid's V2 chat interface on:

`https://kindroid.ai/*`

Because this is a DOM-based userscript, future Kindroid frontend changes may require an update.

## Tested

Version **1.0.0** was manually tested with:

- sending messages
- switching chats
- opening and closing the sidebar
- resizing the browser
- long drafts near the character limit
- Kindroid's native composer controls

## Disclaimer

> **This is not official Kindroid stuff!**

Kindroid Chat Overlay is an independent community userscript. It is **not developed by, affiliated with, endorsed by, or supported by Kindroid**.

It changes frontend behavior locally in your browser and may stop working if Kindroid changes its site. Use it at your own risk.

## License

MIT. See [`LICENSE`](LICENSE).
