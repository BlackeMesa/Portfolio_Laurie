// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"1v1mF":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "0e4c76d35490052f";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets, assetsToDispose, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets); // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                } // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle, id) {
    // Execute the module.
    bundle(id); // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            }); // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"d8YYE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _utils = require("../utils");
var _row = require("./row");
var _gsap = require("gsap");
var _flip = require("gsap/Flip");
var _previewItem = require("./previewItem");
var _data = require("../data/data");
var _dataDefault = parcelHelpers.interopDefault(_data);
var _categoryComponent = require("./categoryComponent");
var _categoryComponentDefault = parcelHelpers.interopDefault(_categoryComponent);
(0, _gsap.gsap).registerPlugin((0, _flip.Flip));
// preview Items
const previewItems = [
    ...document.querySelectorAll(".preview > .preview__item")
];
// initial rows
const rows = [
    ...document.querySelectorAll(".row")
];
// cover element
const cover = document.querySelector(".cover");
// close ctrl
const closeCtrl = document.querySelector(".preview > .preview__close");
const body = document.body;
const containerImg = document.querySelectorAll(".panel__item-img");
const mainLayout = document.querySelector(".ici");
const panelItem = document.querySelectorAll(".panel__item");
containerImg.forEach((container)=>{
    const containerProject = document.querySelectorAll(".panel__item-title");
    const dataName = container.getAttribute("data-name");
    container.addEventListener("click", ()=>{
        containerProject.forEach((project)=>{
            if (dataName === "Marketing") (0, _dataDefault.default).Marketing.forEach((item)=>{
                const categoryItem = new (0, _categoryComponentDefault.default)(item);
                const category = categoryItem.getCategoryDOM();
                project.appendChild(category);
            });
            else if (dataName === "Design") (0, _dataDefault.default).Design.forEach((item)=>{
                const categoryItem = new (0, _categoryComponentDefault.default)(item);
                const category = categoryItem.getCategoryDOM();
                project.appendChild(category);
            });
            else if (dataName === "Communication") (0, _dataDefault.default).Communication.forEach((item)=>{
                const categoryItem = new (0, _categoryComponentDefault.default)(item);
                const category = categoryItem.getCategoryDOM();
                project.appendChild(category);
            });
            panelItem.forEach((item)=>{
                const closeBtn = item.querySelector(".panel__item-close");
                closeBtn.addEventListener("click", ()=>{
                    project.innerHTML = "";
                    mainLayout.innerHTML = "";
                });
            });
        });
    });
});
// Row instance array
let rowsArr = [];
rows.forEach((row, position)=>{
    rowsArr.push(new (0, _row.Row)(row));
});
console.log(rowsArr);
let isOpen = false;
let isAnimating = false;
let currentRow = -1;
let mouseenterTimeline;
for (const row of rowsArr){
    row.DOM.el.addEventListener("mouseenter", ()=>{
        if (isOpen) return;
        (0, _gsap.gsap).killTweensOf([
            row.DOM.images,
            row.DOM.title
        ]);
        mouseenterTimeline = (0, _gsap.gsap).timeline().addLabel("start", 0).to(row.DOM.images, {
            duration: 0.4,
            ease: "power3",
            startAt: {
                scale: 0.8,
                xPercent: 20
            },
            scale: 1,
            xPercent: 0,
            opacity: 1,
            stagger: -0.035
        }, "start").set(row.DOM.title, {
            transformOrigin: "0% 50%"
        }, "start").to(row.DOM.title, {
            duration: 0.1,
            ease: "power1.in",
            yPercent: -100,
            onComplete: ()=>row.DOM.titleWrap.classList.add("cell__title--switch")
        }, "start").to(row.DOM.title, {
            duration: 0.5,
            ease: "expo",
            startAt: {
                yPercent: 50,
                rotation: 5
            },
            yPercent: 0,
            rotation: 0
        }, "start+=0.1");
    });
    row.DOM.el.addEventListener("mouseleave", ()=>{
        if (isOpen) return;
        (0, _gsap.gsap).killTweensOf([
            row.DOM.images,
            row.DOM.title
        ]);
        (0, _gsap.gsap).timeline().addLabel("start").to(row.DOM.images, {
            duration: 0.4,
            ease: "power4",
            opacity: 0,
            scale: 0.8
        }, "start")// .to(row.DOM.title, {
        //     duration: 0.1,
        //     ease: 'power1.in',
        //     yPercent: -100,
        //     onComplete: () => row.DOM.titleWrap.classList.remove('cell__title--switch')
        // }, 'start')
        .to(row.DOM.title, {
            duration: 0.5,
            ease: "expo",
            startAt: {
                yPercent: 0,
                rotation: 0
            },
            yPercent: 0,
            rotation: 0
        }, "start+=0.1");
    });
    // Open a row and reveal the grid
    row.DOM.el.addEventListener("click", ()=>{
        console.log("l\xe0");
        rows.forEach((row, position)=>{
            rowsArr[position].previewItem = new (0, _previewItem.PreviewItem)(previewItems[position]);
        });
        if (isAnimating) return;
        isAnimating = true;
        isOpen = true;
        currentRow = rowsArr.indexOf(row);
        (0, _gsap.gsap).killTweensOf([
            cover,
            rowsArr.map((row)=>row.DOM.title)
        ]);
        (0, _gsap.gsap).timeline({
            onStart: ()=>{
                body.classList.add("oh");
                row.DOM.el.classList.add("row--current");
                row.previewItem.DOM.el.classList.add("preview__item--current");
                (0, _gsap.gsap).set(row.previewItem.DOM.images, {
                    opacity: 0
                });
                // set cover to be on top of the row and then animate it to cover the whole page
                (0, _gsap.gsap).set(cover, {
                    height: row.DOM.el.offsetHeight - 1,
                    top: row.DOM.el.getBoundingClientRect()["top"],
                    opacity: 1
                });
                (0, _gsap.gsap).set(row.previewItem.DOM.title, {
                    yPercent: -100,
                    rotation: 15,
                    transformOrigin: "100% 50%"
                });
                closeCtrl.classList.add("preview__close--show");
            },
            onComplete: ()=>isAnimating = false
        }).addLabel("start", 0).to(cover, {
            duration: 0.9,
            ease: "power4.inOut",
            height: window.innerHeight,
            top: 0
        }, "start")// animate all the titles out
        .to(rowsArr.map((row)=>row.DOM.title), {
            duration: 0.5,
            ease: "power4.inOut",
            yPercent: (_, target)=>{
                return target.getBoundingClientRect()["top"] > row.DOM.el.getBoundingClientRect()["top"] ? 100 : -100;
            },
            rotation: 0
        }, "start").add(()=>{
            mouseenterTimeline.progress(1, false);
            const flipstate = (0, _flip.Flip).getState(row.DOM.images, {
                simple: true
            });
            row.previewItem.DOM.grid.prepend(...row.DOM.images);
            (0, _flip.Flip).from(flipstate, {
                duration: 0.9,
                ease: "power4.inOut",
                //absoluteOnLeave: true,
                stagger: 0.04
            })// other images in the grid
            .to(row.previewItem.DOM.images, {
                duration: 0.9,
                ease: "power4.inOut",
                startAt: {
                    scale: 0,
                    yPercent: ()=>(0, _gsap.gsap).utils.random(0, 200)
                },
                scale: 1,
                opacity: 1,
                yPercent: 0,
                stagger: 0.04
            }, 0.04 * row.DOM.images.length);
        }, "start").to(row.previewItem.DOM.title, {
            duration: 1,
            ease: "power4.inOut",
            yPercent: 0,
            rotation: 0,
            onComplete: ()=>row.DOM.titleWrap.classList.remove("cell__title--switch")
        }, "start").to(closeCtrl, {
            duration: 1,
            ease: "power4.inOut",
            opacity: 1
        }, "start");
    });
}
// Close the grid and show back the rows
closeCtrl.addEventListener("click", ()=>{
    if (isAnimating) return;
    isAnimating = true;
    isOpen = false;
    const row = rowsArr[currentRow];
    (0, _gsap.gsap).timeline({
        defaults: {
            duration: 0.5,
            ease: "power4.inOut"
        },
        onStart: ()=>body.classList.remove("oh"),
        onComplete: ()=>{
            row.DOM.el.classList.remove("row--current");
            row.previewItem.DOM.el.classList.remove("preview__item--current");
            isAnimating = false;
        }
    }).addLabel("start", 0).to([
        row.DOM.images,
        row.previewItem.DOM.images
    ], {
        scale: 0,
        opacity: 0,
        stagger: 0.04,
        onComplete: ()=>row.DOM.imagesWrap.prepend(...row.DOM.images)
    }, 0).to(row.previewItem.DOM.title, {
        duration: 0.6,
        yPercent: 100
    }, "start").to(closeCtrl, {
        opacity: 0
    }, "start")// animate cover out
    .to(cover, {
        ease: "power4",
        height: 0,
        top: row.DOM.el.getBoundingClientRect()["top"] + row.DOM.el.offsetHeight / 2
    }, "start+=0.4")// fade out cover
    .to(cover, {
        duration: 0.3,
        opacity: 0
    }, "start+=0.9")// animate all the titles in
    .to(rowsArr.map((row)=>row.DOM.title), {
        yPercent: 0,
        stagger: {
            each: 0.03,
            grid: "auto",
            from: currentRow
        }
    }, "start+=0.4");
});
// Preload images and fonts
Promise.all([
    (0, _utils.preloadImages)(".cell__img-inner")
]).then(()=>{
    document.body.classList.remove("loading");
});

},{"./row":"3HjGf","gsap":"fPSuC","gsap/Flip":"iKp6p","../utils":"72Dku","./previewItem":"9c6LR","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","../data/data":"aYHQW","./categoryComponent":"8CZ7h"}],"3HjGf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Class representing a Row (.row)
 */ parcelHelpers.export(exports, "Row", ()=>Row);
var _previewItem = require("./previewItem");
class Row {
    // DOM elements
    DOM = {
        // main element (.row)
        el: null,
        // title (.cell__title > .oh__inner)
        title: null,
        // title wrap
        titleWrap: null,
        // images wrap
        imagesWrap: null,
        // images (.cell__img)
        images: null
    };
    /**
	 * Constructor.
	 * @param {Element} DOM_el - main element (.row)
	 */ constructor(DOM_el, DOM_previewItem){
        this.DOM.el = DOM_el;
        // this.previewItem = new PreviewItem(DOM_previewItem);
        this.DOM.titleWrap = this.DOM.el.querySelector(".cell__title");
        this.DOM.title = this.DOM.titleWrap.querySelector(".oh__inner");
        this.DOM.imagesWrap = this.DOM.el.querySelector(".cell--images");
        this.DOM.images = [
            ...this.DOM.imagesWrap.querySelectorAll(".cell__img")
        ];
    }
}

},{"./previewItem":"9c6LR","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9c6LR":[function(require,module,exports) {
/**
 * Class representing a Preview Item (.preview__item)
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "PreviewItem", ()=>PreviewItem);
class PreviewItem {
    // DOM elements
    DOM = {
        // main element (.preview__item)
        el: null,
        // title (.preview__item-title)
        title: null,
        // grid (.grid)
        grid: null,
        // images (.cell__img)
        images: null
    };
    /**
	 * Constructor.
	 * @param {Element} DOM_el - main element (.preview__item)
	 */ constructor(DOM_el){
        this.DOM.el = DOM_el;
        this.DOM.title = this.DOM.el.querySelector(".preview__item-title > .oh__inner");
        this.DOM.grid = this.DOM.el.querySelector(".grid");
        this.DOM.images = [
            ...this.DOM.grid.querySelectorAll(".cell__img")
        ];
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"72Dku":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "preloadImages", ()=>preloadImages);
var _imagesloaded = require("imagesloaded");
var _imagesloadedDefault = parcelHelpers.interopDefault(_imagesloaded);
/**
 * Preload images
 * @param {String} selector - Selector/scope from where images need to be preloaded. Default is 'img'
 */ const preloadImages = (selector = "img")=>{
    return new Promise((resolve)=>{
        (0, _imagesloadedDefault.default)(document.querySelectorAll(selector), {
            background: true
        }, resolve);
    });
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","imagesloaded":"aYzyZ"}],"aYzyZ":[function(require,module,exports) {
/*!
 * imagesLoaded v4.1.4
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */ (function(window1, factory) {
    "use strict";
    // universal module definition
    /*global define: false, module: false, require: false */ if (typeof define == "function" && define.amd) // AMD
    define([
        "ev-emitter/ev-emitter"
    ], function(EvEmitter) {
        return factory(window1, EvEmitter);
    });
    else if (0, module.exports) // CommonJS
    module.exports = factory(window1, require("554d51d6a0dcedc5"));
    else // browser global
    window1.imagesLoaded = factory(window1, window1.EvEmitter);
})(typeof window !== "undefined" ? window : this, // --------------------------  factory -------------------------- //
function factory(window1, EvEmitter) {
    "use strict";
    var $ = window1.jQuery;
    var console = window1.console;
    // -------------------------- helpers -------------------------- //
    // extend objects
    function extend(a, b) {
        for(var prop in b)a[prop] = b[prop];
        return a;
    }
    var arraySlice = Array.prototype.slice;
    // turn element or nodeList into an array
    function makeArray(obj) {
        if (Array.isArray(obj)) // use object if already an array
        return obj;
        var isArrayLike = typeof obj == "object" && typeof obj.length == "number";
        if (isArrayLike) // convert nodeList to array
        return arraySlice.call(obj);
        // array of single index
        return [
            obj
        ];
    }
    // -------------------------- imagesLoaded -------------------------- //
    /**
 * @param {Array, Element, NodeList, String} elem
 * @param {Object or Function} options - if function, use as callback
 * @param {Function} onAlways - callback function
 */ function ImagesLoaded(elem, options, onAlways) {
        // coerce ImagesLoaded() without new, to be new ImagesLoaded()
        if (!(this instanceof ImagesLoaded)) return new ImagesLoaded(elem, options, onAlways);
        // use elem as selector string
        var queryElem = elem;
        if (typeof elem == "string") queryElem = document.querySelectorAll(elem);
        // bail if bad element
        if (!queryElem) {
            console.error("Bad element for imagesLoaded " + (queryElem || elem));
            return;
        }
        this.elements = makeArray(queryElem);
        this.options = extend({}, this.options);
        // shift arguments if no options set
        if (typeof options == "function") onAlways = options;
        else extend(this.options, options);
        if (onAlways) this.on("always", onAlways);
        this.getImages();
        if ($) // add jQuery Deferred object
        this.jqDeferred = new $.Deferred();
        // HACK check async to allow time to bind listeners
        setTimeout(this.check.bind(this));
    }
    ImagesLoaded.prototype = Object.create(EvEmitter.prototype);
    ImagesLoaded.prototype.options = {};
    ImagesLoaded.prototype.getImages = function() {
        this.images = [];
        // filter & find items if we have an item selector
        this.elements.forEach(this.addElementImages, this);
    };
    /**
 * @param {Node} element
 */ ImagesLoaded.prototype.addElementImages = function(elem) {
        // filter siblings
        if (elem.nodeName == "IMG") this.addImage(elem);
        // get background image on element
        if (this.options.background === true) this.addElementBackgroundImages(elem);
        // find children
        // no non-element nodes, #143
        var nodeType = elem.nodeType;
        if (!nodeType || !elementNodeTypes[nodeType]) return;
        var childImgs = elem.querySelectorAll("img");
        // concat childElems to filterFound array
        for(var i = 0; i < childImgs.length; i++){
            var img = childImgs[i];
            this.addImage(img);
        }
        // get child background images
        if (typeof this.options.background == "string") {
            var children = elem.querySelectorAll(this.options.background);
            for(i = 0; i < children.length; i++){
                var child = children[i];
                this.addElementBackgroundImages(child);
            }
        }
    };
    var elementNodeTypes = {
        1: true,
        9: true,
        11: true
    };
    ImagesLoaded.prototype.addElementBackgroundImages = function(elem) {
        var style = getComputedStyle(elem);
        if (!style) // Firefox returns null if in a hidden iframe https://bugzil.la/548397
        return;
        // get url inside url("...")
        var reURL = /url\((['"])?(.*?)\1\)/gi;
        var matches = reURL.exec(style.backgroundImage);
        while(matches !== null){
            var url = matches && matches[2];
            if (url) this.addBackground(url, elem);
            matches = reURL.exec(style.backgroundImage);
        }
    };
    /**
 * @param {Image} img
 */ ImagesLoaded.prototype.addImage = function(img) {
        var loadingImage = new LoadingImage(img);
        this.images.push(loadingImage);
    };
    ImagesLoaded.prototype.addBackground = function(url, elem) {
        var background = new Background(url, elem);
        this.images.push(background);
    };
    ImagesLoaded.prototype.check = function() {
        var _this = this;
        this.progressedCount = 0;
        this.hasAnyBroken = false;
        // complete if no images
        if (!this.images.length) {
            this.complete();
            return;
        }
        function onProgress(image, elem, message) {
            // HACK - Chrome triggers event before object properties have changed. #83
            setTimeout(function() {
                _this.progress(image, elem, message);
            });
        }
        this.images.forEach(function(loadingImage) {
            loadingImage.once("progress", onProgress);
            loadingImage.check();
        });
    };
    ImagesLoaded.prototype.progress = function(image, elem, message) {
        this.progressedCount++;
        this.hasAnyBroken = this.hasAnyBroken || !image.isLoaded;
        // progress event
        this.emitEvent("progress", [
            this,
            image,
            elem
        ]);
        if (this.jqDeferred && this.jqDeferred.notify) this.jqDeferred.notify(this, image);
        // check if completed
        if (this.progressedCount == this.images.length) this.complete();
        if (this.options.debug && console) console.log("progress: " + message, image, elem);
    };
    ImagesLoaded.prototype.complete = function() {
        var eventName = this.hasAnyBroken ? "fail" : "done";
        this.isComplete = true;
        this.emitEvent(eventName, [
            this
        ]);
        this.emitEvent("always", [
            this
        ]);
        if (this.jqDeferred) {
            var jqMethod = this.hasAnyBroken ? "reject" : "resolve";
            this.jqDeferred[jqMethod](this);
        }
    };
    // --------------------------  -------------------------- //
    function LoadingImage(img) {
        this.img = img;
    }
    LoadingImage.prototype = Object.create(EvEmitter.prototype);
    LoadingImage.prototype.check = function() {
        // If complete is true and browser supports natural sizes,
        // try to check for image status manually.
        var isComplete = this.getIsImageComplete();
        if (isComplete) {
            // report based on naturalWidth
            this.confirm(this.img.naturalWidth !== 0, "naturalWidth");
            return;
        }
        // If none of the checks above matched, simulate loading on detached element.
        this.proxyImage = new Image();
        this.proxyImage.addEventListener("load", this);
        this.proxyImage.addEventListener("error", this);
        // bind to image as well for Firefox. #191
        this.img.addEventListener("load", this);
        this.img.addEventListener("error", this);
        this.proxyImage.src = this.img.src;
    };
    LoadingImage.prototype.getIsImageComplete = function() {
        // check for non-zero, non-undefined naturalWidth
        // fixes Safari+InfiniteScroll+Masonry bug infinite-scroll#671
        return this.img.complete && this.img.naturalWidth;
    };
    LoadingImage.prototype.confirm = function(isLoaded, message) {
        this.isLoaded = isLoaded;
        this.emitEvent("progress", [
            this,
            this.img,
            message
        ]);
    };
    // ----- events ----- //
    // trigger specified handler for event type
    LoadingImage.prototype.handleEvent = function(event) {
        var method = "on" + event.type;
        if (this[method]) this[method](event);
    };
    LoadingImage.prototype.onload = function() {
        this.confirm(true, "onload");
        this.unbindEvents();
    };
    LoadingImage.prototype.onerror = function() {
        this.confirm(false, "onerror");
        this.unbindEvents();
    };
    LoadingImage.prototype.unbindEvents = function() {
        this.proxyImage.removeEventListener("load", this);
        this.proxyImage.removeEventListener("error", this);
        this.img.removeEventListener("load", this);
        this.img.removeEventListener("error", this);
    };
    // -------------------------- Background -------------------------- //
    function Background(url, element) {
        this.url = url;
        this.element = element;
        this.img = new Image();
    }
    // inherit LoadingImage prototype
    Background.prototype = Object.create(LoadingImage.prototype);
    Background.prototype.check = function() {
        this.img.addEventListener("load", this);
        this.img.addEventListener("error", this);
        this.img.src = this.url;
        // check if image is already complete
        var isComplete = this.getIsImageComplete();
        if (isComplete) {
            this.confirm(this.img.naturalWidth !== 0, "naturalWidth");
            this.unbindEvents();
        }
    };
    Background.prototype.unbindEvents = function() {
        this.img.removeEventListener("load", this);
        this.img.removeEventListener("error", this);
    };
    Background.prototype.confirm = function(isLoaded, message) {
        this.isLoaded = isLoaded;
        this.emitEvent("progress", [
            this,
            this.element,
            message
        ]);
    };
    // -------------------------- jQuery -------------------------- //
    ImagesLoaded.makeJQueryPlugin = function(jQuery) {
        jQuery = jQuery || window1.jQuery;
        if (!jQuery) return;
        // set local variable
        $ = jQuery;
        // $().imagesLoaded()
        $.fn.imagesLoaded = function(options, callback) {
            var instance = new ImagesLoaded(this, options, callback);
            return instance.jqDeferred.promise($(this));
        };
    };
    // try making plugin
    ImagesLoaded.makeJQueryPlugin();
    // --------------------------  -------------------------- //
    return ImagesLoaded;
});

},{"554d51d6a0dcedc5":"7rCHo"}],"7rCHo":[function(require,module,exports) {
/**
 * EvEmitter v1.1.0
 * Lil' event emitter
 * MIT License
 */ /* jshint unused: true, undef: true, strict: true */ (function(global, factory) {
    // universal module definition
    /* jshint strict: false */ /* globals define, module, window */ if (typeof define == "function" && define.amd) // AMD - RequireJS
    define(factory);
    else if (0, module.exports) // CommonJS - Browserify, Webpack
    module.exports = factory();
    else // Browser globals
    global.EvEmitter = factory();
})(typeof window != "undefined" ? window : this, function() {
    "use strict";
    function EvEmitter() {}
    var proto = EvEmitter.prototype;
    proto.on = function(eventName, listener) {
        if (!eventName || !listener) return;
        // set events hash
        var events = this._events = this._events || {};
        // set listeners array
        var listeners = events[eventName] = events[eventName] || [];
        // only add once
        if (listeners.indexOf(listener) == -1) listeners.push(listener);
        return this;
    };
    proto.once = function(eventName, listener) {
        if (!eventName || !listener) return;
        // add event
        this.on(eventName, listener);
        // set once flag
        // set onceEvents hash
        var onceEvents = this._onceEvents = this._onceEvents || {};
        // set onceListeners object
        var onceListeners = onceEvents[eventName] = onceEvents[eventName] || {};
        // set flag
        onceListeners[listener] = true;
        return this;
    };
    proto.off = function(eventName, listener) {
        var listeners = this._events && this._events[eventName];
        if (!listeners || !listeners.length) return;
        var index = listeners.indexOf(listener);
        if (index != -1) listeners.splice(index, 1);
        return this;
    };
    proto.emitEvent = function(eventName, args) {
        var listeners = this._events && this._events[eventName];
        if (!listeners || !listeners.length) return;
        // copy over to avoid interference if .off() in listener
        listeners = listeners.slice(0);
        args = args || [];
        // once stuff
        var onceListeners = this._onceEvents && this._onceEvents[eventName];
        for(var i = 0; i < listeners.length; i++){
            var listener = listeners[i];
            var isOnce = onceListeners && onceListeners[listener];
            if (isOnce) {
                // remove listener
                // remove before trigger to prevent recursion
                this.off(eventName, listener);
                // unset once flag
                delete onceListeners[listener];
            }
            // trigger listener
            listener.apply(this, args);
        }
        return this;
    };
    proto.allOff = function() {
        delete this._events;
        delete this._onceEvents;
    };
    return EvEmitter;
});

},{}],"aYHQW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _img = require("../../img");
const donnees = {
    Marketing: [
        {
            name: "Termer Beauty",
            photos: [
                (0, _img.image6),
                (0, _img.image7),
                (0, _img.image8),
                (0, _img.image9)
            ]
        },
        {
            name: "Holiq",
            photos: [
                (0, _img.image6),
                (0, _img.image7),
                (0, _img.image8),
                (0, _img.image9)
            ]
        },
        {
            name: "BLYAT",
            photos: [
                (0, _img.image6),
                (0, _img.image7),
                (0, _img.image8),
                (0, _img.image9)
            ]
        }
    ],
    Design: [
        {
            name: "Brandig OPAL",
            photos: [
                (0, _img.image6),
                (0, _img.image7),
                (0, _img.image8),
                (0, _img.image9)
            ]
        },
        {
            name: "Mental Story",
            photos: []
        },
        {
            name: "MidJourney",
            photos: []
        },
        {
            name: "Rosa Nostra",
            photos: []
        },
        {
            name: "Impact Gallerie",
            photos: []
        },
        {
            name: "Calendar",
            photos: []
        },
        {
            name: "Poster",
            photos: []
        },
        {
            name: "Les Ecluses de l'Art",
            photos: []
        }
    ],
    Communication: [
        {
            name: "Articles de presse",
            photos: []
        },
        {
            name: "FRANCE BLEU H\xc9RAULT",
            photos: []
        },
        {
            name: "Social Media",
            photos: []
        },
        {
            name: "Flyer",
            photos: []
        }
    ]
};
exports.default = donnees;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","../../img":"WeKuV"}],"WeKuV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "image6", ()=>(0, _6AvifDefault.default));
parcelHelpers.export(exports, "image7", ()=>(0, _7AvifDefault.default));
parcelHelpers.export(exports, "image8", ()=>(0, _8AvifDefault.default));
parcelHelpers.export(exports, "image9", ()=>(0, _9AvifDefault.default));
var _6Avif = require("./6.avif");
var _6AvifDefault = parcelHelpers.interopDefault(_6Avif);
var _7Avif = require("./7.avif");
var _7AvifDefault = parcelHelpers.interopDefault(_7Avif);
var _8Avif = require("./8.avif");
var _8AvifDefault = parcelHelpers.interopDefault(_8Avif);
var _9Avif = require("./9.avif");
var _9AvifDefault = parcelHelpers.interopDefault(_9Avif);

},{"./6.avif":"56BnH","./7.avif":"axR8J","./8.avif":"iQQiv","./9.avif":"bJn0V","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"56BnH":[function(require,module,exports) {
module.exports = require("1d978debcd86ef54").getBundleURL("1e6UU") + "6.90e7b424.avif" + "?" + Date.now();

},{"1d978debcd86ef54":"lgJ39"}],"lgJ39":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return "/";
}
function getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
} // TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"axR8J":[function(require,module,exports) {
module.exports = require("811c0f8a0356374a").getBundleURL("1e6UU") + "7.a7e46b91.avif" + "?" + Date.now();

},{"811c0f8a0356374a":"lgJ39"}],"iQQiv":[function(require,module,exports) {
module.exports = require("3691a4ea2877640").getBundleURL("1e6UU") + "8.c9f04e46.avif" + "?" + Date.now();

},{"3691a4ea2877640":"lgJ39"}],"bJn0V":[function(require,module,exports) {
module.exports = require("356107cad5913423").getBundleURL("1e6UU") + "9.68cccb30.avif" + "?" + Date.now();

},{"356107cad5913423":"lgJ39"}],"8CZ7h":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _panel = require("../panel");
var _previewItem = require("./previewItem");
class CategoryItem {
    constructor(data){
        const { name , photos  } = data;
        this.photos = photos;
        this.name = name;
    }
    getCategoryDOM() {
        const panels = [
            ...document.querySelectorAll(".panel")
        ];
        const div = document.createElement("div");
        div.classList.add("project-container", "my-5");
        const mainLayout = document.querySelector(".ici");
        div.innerHTML = `
    <section >
         <div class="row">
      <div class="cell cell--text">
        <h2 class="cell__title oh"><span class="oh__inner">${this.name}</span></h2>
      </div>
      <div class="cell cell--images">
        <div class="cell__img">
          <div class="cell__img-inner" ><img src=${this.photos[0]} alt="img"/></div>
        </div>
        <div class="cell__img">
          <div class="cell__img-inner" ><img src=${this.photos[1]} alt="img"/></div>
        </div>
        <div class="cell__img">
          <div class="cell__img-inner"><img src=${this.photos[2]} alt="img"/></div>
        </div>
        <div class="cell__img">
          <div class="cell__img-inner" ><img src=${this.photos[3]} alt="img"/></div>
        </div>
      </div>
    </div>
    </section>
    
        `;
        div.addEventListener("click", ()=>{
            this.getItemDOM();
        });
        return div;
    }
    getItemDOM() {
        const div = document.createElement("div");
        const mainLayout = document.querySelector(".ici");
        // mainLayout.classList.add("blur-layout")
        div.classList.add("project-item", "my-5");
        div.innerHTML = `
    <section class="preview">
			<button class="preview__close unbutton">&#9587;</button>
			<div class="preview__item">
				<h2 class="preview__item-title oh"><span class="oh__inner">${this.name}</span></h2>
				<div class="grid">
					<div class="cell__img">
          <div class="cell__img-inner" >
          ${this.photos.length ? `<img src="${this.photos[0]}" alt="img"/>` : ``}
          <img src=${this.photos[0]} alt="img"/>
          </div>
        </div>
        <div class="cell__img">
          <div class="cell__img-inner" ><img src=${this.photos[1]} alt="img"/></div>
        </div>
        <div class="cell__img">
          <div class="cell__img-inner"><img src=${this.photos[2]} alt="img"/></div>
        </div>
        <div class="cell__img">
          <div class="cell__img-inner" ><img src=${this.photos[3]} alt="img"/></div>
        </div>
			</div>
      </div>
           
		</section>
    
        `;
        return mainLayout.appendChild(div);
    }
}
exports.default = CategoryItem;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","../panel":"cKLyM","./previewItem":"9c6LR"}],"cKLyM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Panel", ()=>Panel);
var _gsap = require("gsap");
var _panelItem = require("./panelItem");
var _splittingCss = require("splitting/dist/splitting.css");
var _splittingCellsCss = require("splitting/dist/splitting-cells.css");
var _splitting = require("splitting");
var _splittingDefault = parcelHelpers.interopDefault(_splitting);
// initialize Splitting
const splitting = (0, _splittingDefault.default)();
Array.prototype.except = function(val) {
    return this.filter(function(x) {
        return x !== val;
    });
};
class Panel {
    constructor(el){
        this.DOM = {
            el: el
        };
        this.DOM.items = [
            ...this.DOM.el.querySelectorAll(".panel__item")
        ];
        // array of Item
        this.items = [];
        this.DOM.items.forEach((item)=>this.items.push(new (0, _panelItem.PanelItem)(item)));
        // position the images and the subtitle chars (centered on top of the image)
        this.layout();
        // Init events
        this.initEvents();
    }
    calcImgPosition(imgWrap) {
        const imgRect = imgWrap.getBoundingClientRect();
        // the second image will be in the center of the panel, while the first and third will be left and right aligned to the panel
        const centeredVal = this.rect.width / 2 - imgRect.width / 2;
        let tx = 0;
        switch(this.DOM.items.indexOf(imgWrap.parentNode)){
            case 0:
                tx = centeredVal - imgRect.width - this.marginImages;
                break;
            case 2:
                tx = centeredVal + imgRect.width + this.marginImages;
                break;
            default:
                tx = centeredVal;
                break;
        }
        return {
            tx: tx
        };
    }
    positionItemChars(item) {
        const imgRect = item.DOM.imgWrap.getBoundingClientRect();
        for (const [_, char] of item.DOM.subtitleChars.entries()){
            // reset values (for resize purposes)
            (0, _gsap.gsap).set(char, {
                x: 0,
                y: 0
            });
            // translate the char
            const subtitleCharRect = char.getBoundingClientRect();
            const charPosition = {
                x: imgRect.left + imgRect.width / 2 - subtitleCharRect.left - subtitleCharRect.width / 2 + (0, _gsap.gsap).utils.random(-150, 150),
                y: imgRect.top + imgRect.height / 2 - subtitleCharRect.top - subtitleCharRect.height / 2 + (0, _gsap.gsap).utils.random(-250, 250)
            };
            (0, _gsap.gsap).set(char, charPosition);
            char.dataset.tx = charPosition.x;
            char.dataset.ty = charPosition.y;
        }
    }
    layout() {
        //if ( this.isOpen ) return;
        this.rect = this.DOM.el.getBoundingClientRect();
        // margin between the images
        this.marginImages = parseInt(getComputedStyle(document.body).getPropertyValue("--margin-images"), 10);
        for (const [index, item] of this.items.entries()){
            if (this.isOpen && index === this.currentItemIdx) continue;
            // how much to translate the image
            // initially all the images are stacked and left aligned with the main "".panel"
            const imgPosition = this.calcImgPosition(item.DOM.imgWrap);
            // set the new position
            (0, _gsap.gsap).set(item.DOM.imgWrap, {
                x: imgPosition.tx
            });
            // now let's center all the panel item's subtitle chars on top of the image
            this.positionItemChars(item);
        }
    }
    initEvents() {
        // resize
        window.addEventListener("resize", ()=>this.layout());
        // mouseenter/mouseleave/click/close
        for (const item of this.items){
            item.DOM.imgWrap.addEventListener("mouseenter", ()=>this.showItemChars(item));
            item.DOM.imgWrap.addEventListener("mouseleave", ()=>this.hideItemChars(item));
            item.DOM.imgWrap.addEventListener("click", ()=>this.openItem(item));
            item.DOM.closeCtrl.addEventListener("click", ()=>this.closeItem(item));
        }
    }
    showItemChars(item) {
        if (this.isOpen) return;
        item.killActiveTimeline();
        // reset
        this.positionItemChars(item);
        item.timelineIn = (0, _gsap.gsap).timeline().addLabel("start", 0).set(item.DOM.subtitleText, {
            opacity: 1
        }, "start")// random value for the scale
        .set(item.DOM.subtitleChars, {
            opacity: 0,
            scale: ()=>(0, _gsap.gsap).utils.random(1.1, 2.1)
        }, "start")// add/subtract a random value to the current translation value of each char
        .to(item.DOM.subtitleChars, {
            duration: 0.2,
            ease: "power2.in",
            x: (i)=>`+=${i % 2 ? 0 : (0, _gsap.gsap).utils.random(-40, 40)}`,
            y: (i)=>`+=${i % 2 ? (0, _gsap.gsap).utils.random(-40, 40) : 0}`,
            opacity: 1,
            stagger: 0.01
        }, "start")// also scale up the image and its parent
        .to(item.DOM.img, {
            duration: 1,
            ease: "power4",
            scale: 1.1
        }, "start").to(item.DOM.imgWrap, {
            duration: 1,
            ease: "power4",
            scale: 0.95
        }, "start");
    }
    hideItemChars(item) {
        if (this.isOpen) return;
        item.killActiveTimeline();
        item.timelineOut = (0, _gsap.gsap).timeline().addLabel("start", 0).to(item.DOM.subtitleChars, {
            duration: 0.3,
            ease: "power3.inOut",
            x: (i)=>`+=${i % 2 ? (0, _gsap.gsap).utils.random(-20, 20) : 0}`,
            y: (i)=>`+=${i % 2 ? 0 : (0, _gsap.gsap).utils.random(-20, 20)}`,
            opacity: 0,
            stagger: 0.01
        }, "start").to([
            item.DOM.img,
            item.DOM.imgWrap
        ], {
            duration: 1,
            ease: "power4",
            scale: 1
        }, "start").set(item.DOM.subtitleChars, {
            x: (_, t)=>t.dataset.tx,
            y: (_, t)=>t.dataset.ty,
            scale: 1
        }).set(item.DOM.subtitleText, {
            opacity: 0
        });
    }
    openItem(item) {
        if (this.isOpen) return;
        this.isOpen = true;
        this.currentItemIdx = this.items.indexOf(item);
        //item.killActiveTimeline();
        // all other items (the .imgWrap element)
        const otherImgWrap = this.items.except(item).map((item)=>item.DOM.imgWrap);
        (0, _gsap.gsap).timeline({
            onStart: ()=>item.DOM.el.classList.add("panel__item--open")
        }).addLabel("start", 0)// translate and fade out all other items (the .imgWrap element)
        .to(otherImgWrap, {
            duration: 1,
            ease: "power4.inOut",
            x: "+=20%",
            opacity: 0
        }, "start")// translate the .imgWrap element of the clicked item to 0
        .to(item.DOM.imgWrap, {
            duration: 1,
            ease: "power4.inOut",
            x: 0
        }, "start")// scale both the image and its parent down to 1
        .to([
            item.DOM.img,
            item.DOM.imgWrap
        ], {
            duration: 1,
            ease: "power4.inOut",
            scale: 1
        }, "start")// show/animate the subtitle header element
        .to(item.DOM.subtitleHeader, {
            duration: 1,
            ease: "power4.inOut",
            startAt: {
                x: 20
            },
            opacity: 1,
            x: 0
        }, "start")// show/animate the close button
        .to(item.DOM.closeCtrl, {
            duration: 1,
            ease: "power4.inOut",
            startAt: {
                scale: 0
            },
            opacity: 1,
            scale: 1
        }, "start")// chars translate back to 0 and scale down to 1
        .to(item.DOM.subtitleChars, {
            duration: 0.4,
            ease: "power4.inOut",
            x: 0,
            y: 0,
            scale: 1,
            opacity: 1,
            stagger: 0.03
        }, "start+=0.1")// animate in the title
        .to(item.DOM.titleTexts, {
            duration: 0.8,
            ease: "power4",
            startAt: {
                x: (i)=>i ? 100 : -100
            },
            opacity: 1,
            x: 0,
            rotation: 0.001,
            stagger: -0.05
        }, "start+=0.6");
    }
    closeItem(item) {
        if (!this.isOpen) return;
        this.currentItemIdx = -1;
        //item.killActiveTimeline();
        (0, _gsap.gsap).timeline({
            onComplete: ()=>{
                item.DOM.el.classList.remove("panel__item--open");
                this.isOpen = false;
            }
        }).addLabel("start", 0).to(item.DOM.closeCtrl, {
            duration: 0.7,
            ease: "power3",
            opacity: 0,
            scale: 0.5
        }, "start").to(item.DOM.titleTexts, {
            duration: 0.7,
            ease: "power4.inOut",
            opacity: 0,
            x: (i)=>i ? 100 : -100,
            rotation: 0.001
        }, "start").to(item.DOM.subtitleHeader, {
            duration: 0.7,
            ease: "power4.inOut",
            opacity: 0,
            x: 20
        }, "start").to(item.DOM.imgWrap, {
            duration: 0.7,
            ease: "power4.inOut",
            x: (_, t)=>this.calcImgPosition(t).tx
        }, "start").to(this.items.except(item).map((item)=>item.DOM.imgWrap), {
            duration: 0.7,
            ease: "power4.inOut",
            startAt: {
                x: "+=20%"
            },
            x: (_, t)=>this.calcImgPosition(t).tx,
            opacity: 1
        }, "start").to(item.DOM.subtitleChars, {
            duration: 0.4,
            ease: "power4.inOut",
            x: (i)=>(0, _gsap.gsap).utils.random(-100, 100),
            y: (i)=>(0, _gsap.gsap).utils.random(-100, 100),
            scale: ()=>(0, _gsap.gsap).utils.random(1.1, 2.1),
            opacity: 0,
            stagger: -0.01
        }, "start");
    }
}

},{"gsap":"fPSuC","./panelItem":"k6I3h","splitting/dist/splitting.css":"3uR7n","splitting/dist/splitting-cells.css":"7jeGL","splitting":"77jB6","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"k6I3h":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "PanelItem", ()=>PanelItem);
class PanelItem {
    constructor(el){
        this.DOM = {
            el: el
        };
        this.DOM.imgWrap = this.DOM.el.querySelector(".panel__item-imgwrap");
        this.DOM.img = this.DOM.imgWrap.querySelector("img");
        this.DOM.title = this.DOM.el.querySelector(".panel__item-title");
        this.DOM.titleTexts = [
            ...this.DOM.title.querySelectorAll(".project-container")
        ];
        this.DOM.subtitle = this.DOM.el.querySelector(".panel__item-subtitle");
        // Splitting will run on this
        this.DOM.subtitleText = this.DOM.subtitle.querySelector("h4");
        // all subtitle chars 
        this.DOM.subtitleChars = [
            ...this.DOM.subtitleText.querySelectorAll(".char")
        ];
        this.DOM.subtitleHeader = this.DOM.subtitle.querySelector("span");
        this.DOM.closeCtrl = this.DOM.el.querySelector(".panel__item-close");
    }
    killActiveTimeline() {
        if (this.timelineOut) this.timelineOut.kill();
        if (this.timelineIn) this.timelineIn.kill();
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3uR7n":[function() {},{}],"7jeGL":[function() {},{}],"77jB6":[function(require,module,exports) {
(function(global, factory) {
    module.exports = factory();
})(this, function() {
    "use strict";
    var root = document;
    var createText = root.createTextNode.bind(root);
    /**
 * # setProperty
 * Apply a CSS var
 * @param el{HTMLElement} 
 * @param varName {string} 
 * @param value {string|number}  
 */ function setProperty(el, varName, value) {
        el.style.setProperty(varName, value);
    }
    /**
 * 
 * @param {Node} el 
 * @param {Node} child 
 */ function appendChild(el, child) {
        return el.appendChild(child);
    }
    function createElement(parent, key, text, whitespace) {
        var el = root.createElement("span");
        key && (el.className = key);
        if (text) {
            !whitespace && el.setAttribute("data-" + key, text);
            el.textContent = text;
        }
        return parent && appendChild(parent, el) || el;
    }
    function getData(el, key) {
        return el.getAttribute("data-" + key);
    }
    /**
 * 
 * @param e {import('../types').Target} 
 * @param parent {HTMLElement}
 * @returns {HTMLElement[]}
 */ function $(e, parent) {
        return !e || e.length == 0 ? [] : e.nodeName ? [
            e
        ] : [].slice.call(e[0].nodeName ? e : (parent || root).querySelectorAll(e));
    }
    /**
 * Creates and fills an array with the value provided
 * @template {T}
 * @param {number} len
 * @param {() => T} valueProvider
 * @return {T}
 */ function Array2D(len) {
        var a = [];
        for(; len--;)a[len] = [];
        return a;
    }
    function each(items, fn) {
        items && items.some(fn);
    }
    function selectFrom(obj) {
        return function(key) {
            return obj[key];
        };
    }
    /**
 * # Splitting.index
 * Index split elements and add them to a Splitting instance.
 *
 * @param element {HTMLElement}
 * @param key {string}
 * @param items {HTMLElement[] | HTMLElement[][]}
 */ function index(element, key, items) {
        var prefix = "--" + key;
        var cssVar = prefix + "-index";
        each(items, function(items, i) {
            if (Array.isArray(items)) each(items, function(item) {
                setProperty(item, cssVar, i);
            });
            else setProperty(items, cssVar, i);
        });
        setProperty(element, prefix + "-total", items.length);
    }
    /**
 * @type {Record<string, import('./types').ISplittingPlugin>}
 */ var plugins = {};
    /**
 * @param by {string}
 * @param parent {string}
 * @param deps {string[]}
 * @return {string[]}
 */ function resolvePlugins(by, parent, deps) {
        // skip if already visited this dependency
        var index = deps.indexOf(by);
        if (index == -1) {
            // if new to dependency array, add to the beginning
            deps.unshift(by);
            // recursively call this function for all dependencies
            each(plugins[by].depends, function(p) {
                resolvePlugins(p, by, deps);
            });
        } else {
            // if this dependency was added already move to the left of
            // the parent dependency so it gets loaded in order
            var indexOfParent = deps.indexOf(parent);
            deps.splice(index, 1);
            deps.splice(indexOfParent, 0, by);
        }
        return deps;
    }
    /**
 * Internal utility for creating plugins... essentially to reduce
 * the size of the library
 * @param {string} by 
 * @param {string} key 
 * @param {string[]} depends 
 * @param {Function} split 
 * @returns {import('./types').ISplittingPlugin}
 */ function createPlugin(by, depends, key, split) {
        return {
            by: by,
            depends: depends,
            key: key,
            split: split
        };
    }
    /**
 *
 * @param by {string}
 * @returns {import('./types').ISplittingPlugin[]}
 */ function resolve(by) {
        return resolvePlugins(by, 0, []).map(selectFrom(plugins));
    }
    /**
 * Adds a new plugin to splitting
 * @param opts {import('./types').ISplittingPlugin}
 */ function add(opts) {
        plugins[opts.by] = opts;
    }
    /**
 * # Splitting.split
 * Split an element's textContent into individual elements
 * @param el {Node} Element to split
 * @param key {string}
 * @param splitOn {string}
 * @param includeSpace {boolean}
 * @returns {HTMLElement[]}
 */ function splitText(el, key, splitOn, includePrevious, preserveWhitespace) {
        // Combine any strange text nodes or empty whitespace.
        el.normalize();
        // Use fragment to prevent unnecessary DOM thrashing.
        var elements = [];
        var F = document.createDocumentFragment();
        if (includePrevious) elements.push(el.previousSibling);
        var allElements = [];
        $(el.childNodes).some(function(next) {
            if (next.tagName && !next.hasChildNodes()) {
                // keep elements without child nodes (no text and no children)
                allElements.push(next);
                return;
            }
            // Recursively run through child nodes
            if (next.childNodes && next.childNodes.length) {
                allElements.push(next);
                elements.push.apply(elements, splitText(next, key, splitOn, includePrevious, preserveWhitespace));
                return;
            }
            // Get the text to split, trimming out the whitespace
            /** @type {string} */ var wholeText = next.wholeText || "";
            var contents = wholeText.trim();
            // If there's no text left after trimming whitespace, continue the loop
            if (contents.length) {
                // insert leading space if there was one
                if (wholeText[0] === " ") allElements.push(createText(" "));
                // Concatenate the split text children back into the full array
                each(contents.split(splitOn), function(splitText, i) {
                    if (i && preserveWhitespace) allElements.push(createElement(F, "whitespace", " ", preserveWhitespace));
                    var splitEl = createElement(F, key, splitText);
                    elements.push(splitEl);
                    allElements.push(splitEl);
                });
                // insert trailing space if there was one
                if (wholeText[wholeText.length - 1] === " ") allElements.push(createText(" "));
            }
        });
        each(allElements, function(el) {
            appendChild(F, el);
        });
        // Clear out the existing element
        el.innerHTML = "";
        appendChild(el, F);
        return elements;
    }
    /** an empty value */ var _ = 0;
    function copy(dest, src) {
        for(var k in src)dest[k] = src[k];
        return dest;
    }
    var WORDS = "words";
    var wordPlugin = createPlugin(/*by: */ WORDS, /*depends: */ _, /*key: */ "word", /*split: */ function(el) {
        return splitText(el, "word", /\s+/, 0, 1);
    });
    var CHARS = "chars";
    var charPlugin = createPlugin(/*by: */ CHARS, /*depends: */ [
        WORDS
    ], /*key: */ "char", /*split: */ function(el, options, ctx) {
        var results = [];
        each(ctx[WORDS], function(word, i) {
            results.push.apply(results, splitText(word, "char", "", options.whitespace && i));
        });
        return results;
    });
    /**
 * # Splitting
 * 
 * @param opts {import('./types').ISplittingOptions} 
 */ function Splitting(opts) {
        opts = opts || {};
        var key = opts.key;
        return $(opts.target || "[data-splitting]").map(function(el) {
            var ctx = el["\uD83C\uDF4C"];
            if (!opts.force && ctx) return ctx;
            ctx = el["\uD83C\uDF4C"] = {
                el: el
            };
            var items = resolve(opts.by || getData(el, "splitting") || CHARS);
            var opts2 = copy({}, opts);
            each(items, function(plugin) {
                if (plugin.split) {
                    var pluginBy = plugin.by;
                    var key2 = (key ? "-" + key : "") + plugin.key;
                    var results = plugin.split(el, opts2, ctx);
                    key2 && index(el, key2, results);
                    ctx[pluginBy] = results;
                    el.classList.add(pluginBy);
                }
            });
            el.classList.add("splitting");
            return ctx;
        });
    }
    /**
 * # Splitting.html
 * 
 * @param opts {import('./types').ISplittingOptions}
 */ function html(opts) {
        opts = opts || {};
        var parent = opts.target = createElement();
        parent.innerHTML = opts.content;
        Splitting(opts);
        return parent.outerHTML;
    }
    Splitting.html = html;
    Splitting.add = add;
    function detectGrid(el, options, side) {
        var items = $(options.matching || el.children, el);
        var c = {};
        each(items, function(w) {
            var val = Math.round(w[side]);
            (c[val] || (c[val] = [])).push(w);
        });
        return Object.keys(c).map(Number).sort(byNumber).map(selectFrom(c));
    }
    function byNumber(a, b) {
        return a - b;
    }
    var linePlugin = createPlugin(/*by: */ "lines", /*depends: */ [
        WORDS
    ], /*key: */ "line", /*split: */ function(el, options, ctx) {
        return detectGrid(el, {
            matching: ctx[WORDS]
        }, "offsetTop");
    });
    var itemPlugin = createPlugin(/*by: */ "items", /*depends: */ _, /*key: */ "item", /*split: */ function(el, options) {
        return $(options.matching || el.children, el);
    });
    var rowPlugin = createPlugin(/*by: */ "rows", /*depends: */ _, /*key: */ "row", /*split: */ function(el, options) {
        return detectGrid(el, options, "offsetTop");
    });
    var columnPlugin = createPlugin(/*by: */ "cols", /*depends: */ _, /*key: */ "col", /*split: */ function(el, options) {
        return detectGrid(el, options, "offsetLeft");
    });
    var gridPlugin = createPlugin(/*by: */ "grid", /*depends: */ [
        "rows",
        "cols"
    ]);
    var LAYOUT = "layout";
    var layoutPlugin = createPlugin(/*by: */ LAYOUT, /*depends: */ _, /*key: */ _, /*split: */ function(el, opts) {
        // detect and set options
        var rows = opts.rows = +(opts.rows || getData(el, "rows") || 1);
        var columns = opts.columns = +(opts.columns || getData(el, "columns") || 1);
        // Seek out the first <img> if the value is true 
        opts.image = opts.image || getData(el, "image") || el.currentSrc || el.src;
        if (opts.image) {
            var img = $("img", el)[0];
            opts.image = img && (img.currentSrc || img.src);
        }
        // add optional image to background
        if (opts.image) setProperty(el, "background-image", "url(" + opts.image + ")");
        var totalCells = rows * columns;
        var elements = [];
        var container = createElement(_, "cell-grid");
        while(totalCells--){
            // Create a span
            var cell = createElement(container, "cell");
            createElement(cell, "cell-inner");
            elements.push(cell);
        }
        // Append elements back into the parent
        appendChild(el, container);
        return elements;
    });
    var cellRowPlugin = createPlugin(/*by: */ "cellRows", /*depends: */ [
        LAYOUT
    ], /*key: */ "row", /*split: */ function(el, opts, ctx) {
        var rowCount = opts.rows;
        var result = Array2D(rowCount);
        each(ctx[LAYOUT], function(cell, i, src) {
            result[Math.floor(i / (src.length / rowCount))].push(cell);
        });
        return result;
    });
    var cellColumnPlugin = createPlugin(/*by: */ "cellColumns", /*depends: */ [
        LAYOUT
    ], /*key: */ "col", /*split: */ function(el, opts, ctx) {
        var columnCount = opts.columns;
        var result = Array2D(columnCount);
        each(ctx[LAYOUT], function(cell, i) {
            result[i % columnCount].push(cell);
        });
        return result;
    });
    var cellPlugin = createPlugin(/*by: */ "cells", /*depends: */ [
        "cellRows",
        "cellColumns"
    ], /*key: */ "cell", /*split: */ function(el, opt, ctx) {
        // re-index the layout as the cells
        return ctx[LAYOUT];
    });
    // install plugins
    // word/char plugins
    add(wordPlugin);
    add(charPlugin);
    add(linePlugin);
    // grid plugins
    add(itemPlugin);
    add(rowPlugin);
    add(columnPlugin);
    add(gridPlugin);
    // cell-layout plugins
    add(layoutPlugin);
    add(cellRowPlugin);
    add(cellColumnPlugin);
    add(cellPlugin);
    return Splitting;
});

},{}]},["1v1mF","d8YYE"], "d8YYE", "parcelRequire1912")

//# sourceMappingURL=index.5490052f.js.map
