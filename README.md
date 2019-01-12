<div id="welcome" align="center">

  <h1>
    TPOT Toolbox Extension 
  </h1>

  __A cross-browser extension platform that hosts multiple__
  __helpful utilities used by the PathofTruth community.__

  <a href="https://www.emailthis.me/open-source/extension-boilerplate">
    <img src="./resources/promotion/code.png" alt="Extension Boilerplate">
  </a>

</div>

## Getting Started

<div style="max-width: 400px;>

 > __*Welcome!*__ If have never used Toolbox, begin with [How to Install](#how-to-install) & [Basic Usage](#basic-usage). If you have already installed the extension to your browser(s), then check out the [Features](#features) section to see what tools you can enable and how to use them!

</div>


- [__What's New?__](#whats-new?)
- [__How to Install__](#how-to-install)
  - [__What is an 'Extension'?__](#what-is-an-extension)
  - [__What Browser do I have?__](#what-browser-do-i-have)
    - [__Chrome How-to__](#chrome-how-to)
    - [__Firefox How-to__](#firefox-how-to)
    - [__Opera How-to__](#opera-how-to)
  - [__Basic Usage__](#basic-usage)
    - [__Signing Into TPOT CLoud__](#signing-into-tpot-cloud)
    - [__Example: Adding a Highlight__](#basic-example)
    - [__Can I Use this on Mobile?__](#can-i-use-this-on-mobile)
  - [__I need help...__](#i-need-helpl)
- [__Features__](#features)
  - [__What are Tools?__](#what-are-tools)
  - [__Settings__](#settings)
  - [__Highlighter__](#highlighter)
  - [__Scripture Versions__](#scripture-versions)
  - [__Email Sorting__](#email-sorting)
  - [__Letters__](#letters)
  - [__Bible Readings__](#bible-readings)
  - [__Music and Video__](#music-and-video)
- [__Advanced Stuff__](#advanced-stuff)
- [__How Can I Contribute?__](#how-can-i-contribute)
- [__Development__ [admins only]](#development)

## What's New?

[January 12, 2019]()
> Now that Firefox supports WebExtensions, it has become a lot easier to build browser extensions for multiple browsers without duplicating the code. We can now support [Firefox](#firefox-how-to), [Opera](#opera-how-to), and [Firefox Mobile](#firefox-mobile-how-to).
  - Toolbox now updated to support Firefox.
  - Support for Firefox Mobile and Opera will be added soon.

##### [[back to menu]](#getting-started)

## How to Install



## Features

<dl>
  <dt>Write once and deploy to Chrome, Opera & Firefox</dt>
  <dd>
    Based on WebExtensions. It also includes a tiny polyfill to bring uniformity to the APIs exposed by different browsers.
  </dd>
</dl>

<dl>
  <dt>Live-reload</dt>
  <dd>
    Your changes to CSS, HTML & JS files will be relayed instantly without having to manually reload the extension. This ends up saving a lot of time and improving the developer experience.
  </dd>
</dl>

<dl>
  <dt>Sensible starting point</dt>
  <dd>
    This comes with a gulp based workflow that converts modern <strong>ES6</strong> JavaScript and <strong>SCSS</strong> to JS/CSS. 
    Scripts are transpiled using Babel and bundled using Browserify.
    Sourcemaps are available for both JS and SCSS.
  </dd>
</dl>

<dl>
  <dt>Sketch (.sketch) assets for icons and promo images</dt>
  <dd>
    A .sketch file is included in the resources directory. This has all the icons and promo images that will be needed while uploading the extensions to the app stores.
  </dd>
</dl>

<dl>
  <dt>Easily configurable and extendable</dt>
  <dd>
    The gulpfile is easily understandable and configurable. If you want to add additional tasks or remove un-used ones, you can easily tweak that file to suit your needs.
  </dd>
</dl>

<dl>
  <dt>Platform specific & Environment specific variables.</dt>
  <dd>
    You might need to specify different data variables based on your environment. For example, you might want to use a localhost API endpoint during development and a production API endpoint once the extension is submitted to the appstore. You can specify such data in the json files inside `config` directory.

    You can also set custom data variables based on the platform (different variable for Chrome, FF, Opera).
  </dd>
</dl>



## Installation
1. Clone the repository `git clone https://github.com/EmailThis/extension-boilerplate.git`
2. Run `npm install`
3. Run `npm run build`

Alternately, if you want to try out the sample extension, here are the download links. After you download it, unzip the file and load it in your browser using the steps mentioned below.
 - [__Download Chrome Extension__](https://github.com/EmailThis/extension-boilerplate/releases/download/v1.0/chrome.zip)
 - [__Download Opera Extension__](https://github.com/EmailThis/extension-boilerplate/releases/download/v1.0/opera.zip)
 - [__Download Firefox Extension__](https://github.com/EmailThis/extension-boilerplate/releases/download/v1.0/firefox.zip)


##### Load the extension in Chrome & Opera
1. Open Chrome/Opera browser and navigate to chrome://extensions
2. Select "Developer Mode" and then click "Load unpacked extension..."
3. From the file browser, choose to `extension-boilerplate/build/chrome` or (`extension-boilerplate/build/opera`)


##### Load the extension in Firefox
1. Open Firefox browser and navigate to about:debugging
2. Click "Load Temporary Add-on" and from the file browser, choose `extension-boilerplate/build/firefox`


## Developing
The following tasks can be used when you want to start developing the extension and want to enable live reload - 

- `npm run chrome-watch`
- `npm run opera-watch`
- `npm run firefox-watch`


## Packaging
Run `npm run dist` to create a zipped, production-ready extension for each browser. You can then upload that to the appstore.


## TODO
- [ ] Add support for Safari
- [x] Add Firefox & Opera Promo images
- [x] Add sample screenshot templates
- [ ] Write a guide for using config variables & JS preprocessor


-----------
This project is licensed under the MIT license. 

If you have any questions or comments, please create a new issue. I'd be happy to hear your thoughts.


Bharani, [Email This](https://www.emailthis.me)
