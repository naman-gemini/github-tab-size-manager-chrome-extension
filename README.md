# Github Tab Size Manager (Chrome Extension)
Manages tab size while viewing code on github.
Change tab size from options menu.

Add to chrome: https://chrome.google.com/webstore/detail/github-tab-size-manager/enjegllgfhbkappebfdbgheefocllglo?hl=en-US

## Screenshots
![Default Tab Size] (https://github.com/naman-gemini/github-tab-size-manager-chrome-extension/blob/master/images/tabsize%20-%208.png)
========
![Tab Size 2] (https://github.com/naman-gemini/github-tab-size-manager-chrome-extension/blob/master/images/tabsize%20-%202.png)

## Changelog
v 1.5
* Added the `!important` construct in tab-size css

v 1.4
* Removed unecessary permissions
* Moved google analytics code from background script to content script

v 1.3
* Added google analytics tracking

v 1.2
* Default value of `tabSize` set to 2, even before acessing options

v 1.1
* Changed `chrome.storage.sync` to `chrome.storage.local` (faster)
* Added `tabSize` validation in options

v 1.0
* Changes css and not the url anymore
* Added support for `gist.github.com` as well
