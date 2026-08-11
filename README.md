Kindroid Chat Overlay ✍️
A small browser userscript that gives Kindroid's native chat composer more room for long-form writing.
Kindroid Chat Overlay keeps the existing Kindroid input and controls intact, but makes the composer wider, centers it beneath the conversation, and lets the textarea grow upward as a draft becomes longer.
What it does
Widens the native Kindroid V2 composer up to 940 px on desktop.
Centers the composer instead of leaving the wider input anchored to one side.
Lets the textarea grow automatically from a compact input to a larger writing area.
Stops vertical growth at a sensible maximum, then uses the textarea's normal scrollbar.
Keeps Kindroid's existing attachment, enhancement, voice/send, keyboard, and draft behavior in place.
Adapts the layout for narrower screens.
The script modifies the existing composer. It does not create a replacement editor or copy drafts into a second textarea.
What it does NOT do
No Kindroid API calls.
No undocumented backend requests.
No message interception or rewriting.
No prompt injection or system-instruction changes.
No model or generation changes.
No conversation export.
No chat-content storage.
No account/session token access.
No credential access.
No external network requests.
No analytics or telemetry.
No bypass of authentication, subscriptions, usage limits, or safety systems.
No data leaves the browser.
The script only adjusts the DOM and CSS of the currently open Kindroid page.
Installation
Tampermonkey
Install Tampermonkey.
Create a new userscript.
Replace the default template with the contents of `kindroid-chat-overlay.user.js`.
Save it.
Make sure the script is enabled.
Reload Kindroid.
Usage
Open a Kindroid chat and type normally.
Short messages keep a compact composer. As the draft grows, the textarea expands upward until it reaches its maximum height. Longer drafts then scroll inside the composer.
No extra buttons or shortcuts are required.
How it works
Kindroid Chat Overlay targets the existing V2 composer elements already rendered by Kindroid.
It:
widens and centers Kindroid's input-overlay container,
prevents the composer wrapper from being flex-squashed,
allows the real textarea to consume the available width,
measures the textarea's content height,
and updates only the textarea height and overflow behavior.
A small periodic check reattaches the behavior if Kindroid replaces the composer during client-side navigation or a React rerender.
Privacy & security
Kindroid Chat Overlay uses `@grant none` and makes no external network requests.
It does not transmit or persist conversation text. The userscript contains the complete behavior and can be audited as a single JavaScript file.
Known limitations
This is a DOM-based browser enhancement. Changes to Kindroid's frontend structure, class names, or composer implementation may require an update.
The current release targets Kindroid's V2 chat composer on:
`https://kindroid.ai/*`
Status
Version 1.0.0
Tested manually on desktop in August 2026 across:
sending messages,
switching chats,
opening and closing the sidebar,
resizing the browser,
long drafts near the character limit,
and Kindroid's native composer controls.
Disclaimer
This is not official Kindroid stuff.
Kindroid Chat Overlay is an independent community userscript. It is not developed by, affiliated with, endorsed by, or supported by Kindroid.
It modifies frontend behavior locally in your browser and may stop working if Kindroid changes its site. Use it at your own risk.
License
MIT. See `LICENSE`.
