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
})({"1FTHl":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "5ab78a90ee87d16d";
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

},{}],"hYh27":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "init", ()=>init);
var _utils = require("./utils");
var _row = require("./row");
var _gsap = require("gsap");
var _flip = require("gsap/Flip");
function init() {
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
    // Row instance array
    let rowsArr = [];
    rows.forEach((row, position)=>{
        rowsArr.push(new (0, _row.Row)(row, previewItems[position]));
    });
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
                    yPercent: 100,
                    rotation: 15
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
            }, "start").to(row.DOM.title, {
                duration: 0.1,
                ease: "power1.in",
                yPercent: -100,
                onComplete: ()=>row.DOM.titleWrap.classList.remove("cell__title--switch")
            }, "start").to(row.DOM.title, {
                duration: 0.5,
                ease: "expo",
                startAt: {
                    yPercent: 100,
                    rotation: 15
                },
                yPercent: 0,
                rotation: 0
            }, "start+=0.1");
        });
        // Open a row and reveal the grid
        row.DOM.el.addEventListener("click", ()=>{
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
        (0, _utils.preloadImages)(".cell__img-inner"),
        (0, _utils.preloadFonts)("gdf6msi")
    ]).then(()=>{
        document.body.classList.remove("loading");
    });
}

},{"./utils":"8i096","./row":"3HjGf","gsap":"fPSuC","gsap/Flip":"iKp6p"}],"8i096":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "preloadImages", ()=>preloadImages);
parcelHelpers.export(exports, "preloadFonts", ()=>preloadFonts);
const imagesLoaded = require("3c3617c91ff8f0cb");
/**
 * Preload images
 * @param {String} selector - Selector/scope from where images need to be preloaded. Default is 'img'
 */ const preloadImages = (selector = "img")=>{
    return new Promise((resolve)=>{
        imagesLoaded(document.querySelectorAll(selector), {
            background: true
        }, resolve);
    });
};
/**
 * Preload fonts
 * @param {String} id
 */ const preloadFonts = (id)=>{
    return new Promise((resolve)=>{
        WebFont.load({
            typekit: {
                id: id
            },
            active: resolve
        });
    });
};

},{"3c3617c91ff8f0cb":"aYzyZ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3HjGf":[function(require,module,exports) {
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
        this.previewItem = new (0, _previewItem.PreviewItem)(DOM_previewItem);
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

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["1FTHl","hYh27"], "hYh27", "parcelRequire1912")

//# sourceMappingURL=index.ee87d16d.js.map
