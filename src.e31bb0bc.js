// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
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

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
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
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"../node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"sass/main.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./../images/hero/hero-mob.png":[["hero-mob.44442330.png","images/hero/hero-mob.png"],"images/hero/hero-mob.png"],"./../images/hero/hero-bg-mob.png":[["hero-bg-mob.0bbf9343.png","images/hero/hero-bg-mob.png"],"images/hero/hero-bg-mob.png"],"./../images/hero/hero-mob@2x.png":[["hero-mob@2x.8e50927b.png","images/hero/hero-mob@2x.png"],"images/hero/hero-mob@2x.png"],"./../images/hero/hero-tab.png":[["hero-tab.43b78b16.png","images/hero/hero-tab.png"],"images/hero/hero-tab.png"],"./../images/hero/hero-bg-desk.png":[["hero-bg-desk.c2f5aa32.png","images/hero/hero-bg-desk.png"],"images/hero/hero-bg-desk.png"],"./../images/hero/hero-tab@2x.png":[["hero-tab@2x.cc819e2c.png","images/hero/hero-tab@2x.png"],"images/hero/hero-tab@2x.png"],"./../images/hero/hero-desk.png":[["hero-desk.1879606f.png","images/hero/hero-desk.png"],"images/hero/hero-desk.png"],"./../images/hero/hero-desk@2x.png":[["hero-desk@2x.c0e28438.png","images/hero/hero-desk@2x.png"],"images/hero/hero-desk@2x.png"],"./../images/icons/problems-bg-campfire.svg":[["problems-bg-campfire.ac66c6f0.svg","images/icons/problems-bg-campfire.svg"],"images/icons/problems-bg-campfire.svg"],"./../images/program/program-bg-mob.png":[["program-bg-mob.7e4a52b3.png","images/program/program-bg-mob.png"],"images/program/program-bg-mob.png"],"./../images/program/program-bg-mob@2x.png":[["program-bg-mob@2x.3c5ba021.png","images/program/program-bg-mob@2x.png"],"images/program/program-bg-mob@2x.png"],"./../images/program/program-bg-tab.png":[["program-bg-tab.5f7ee748.png","images/program/program-bg-tab.png"],"images/program/program-bg-tab.png"],"./../images/program/program-bg-tab@2x.png":[["program-bg-tab@2x.8c491d01.png","images/program/program-bg-tab@2x.png"],"images/program/program-bg-tab@2x.png"],"./../images/program/program-bg-desk.png":[["program-bg-desk.47e0d4b9.png","images/program/program-bg-desk.png"],"images/program/program-bg-desk.png"],"./../images/program/program-bg-desk@2x.png":[["program-bg-desk@2x.8624b497.png","images/program/program-bg-desk@2x.png"],"images/program/program-bg-desk@2x.png"],"./../images/feedback/feedback-person1.jpg":[["feedback-person1.42308266.jpg","images/feedback/feedback-person1.jpg"],"images/feedback/feedback-person1.jpg"],"./../images/feedback/feedback-person1@2x.jpg":[["feedback-person1@2x.e067f6f7.jpg","images/feedback/feedback-person1@2x.jpg"],"images/feedback/feedback-person1@2x.jpg"],"./../images/feedback/feedback-person2.jpg":[["feedback-person2.2f726139.jpg","images/feedback/feedback-person2.jpg"],"images/feedback/feedback-person2.jpg"],"./../images/feedback/feedback-person2@2x.jpg":[["feedback-person2@2x.1e41ab08.jpg","images/feedback/feedback-person2@2x.jpg"],"images/feedback/feedback-person2@2x.jpg"],"./../images/feedback/feedback-person3.jpg":[["feedback-person3.9b971835.jpg","images/feedback/feedback-person3.jpg"],"images/feedback/feedback-person3.jpg"],"./../images/feedback/feedback-person3@2x.jpg":[["feedback-person3@2x.4c111aa1.jpg","images/feedback/feedback-person3@2x.jpg"],"images/feedback/feedback-person3@2x.jpg"],"./../images/feedback/feedback-person4.jpg":[["feedback-person4.d3dfeacf.jpg","images/feedback/feedback-person4.jpg"],"images/feedback/feedback-person4.jpg"],"./../images/feedback/feedback-person4@2x.jpg":[["feedback-person4@2x.211df8bb.jpg","images/feedback/feedback-person4@2x.jpg"],"images/feedback/feedback-person4@2x.jpg"],"./../images/feedback/feedback-person5.jpg":[["feedback-person5.c29a957c.jpg","images/feedback/feedback-person5.jpg"],"images/feedback/feedback-person5.jpg"],"./../images/feedback/feedback-person5@2x.jpg":[["feedback-person5@2x.06042234.jpg","images/feedback/feedback-person5@2x.jpg"],"images/feedback/feedback-person5@2x.jpg"],"./../images/feedback/feedback-person6.jpg":[["feedback-person6.df0ff916.jpg","images/feedback/feedback-person6.jpg"],"images/feedback/feedback-person6.jpg"],"./../images/feedback/feedback-person6@2x.jpg":[["feedback-person6@2x.98acc358.jpg","images/feedback/feedback-person6@2x.jpg"],"images/feedback/feedback-person6@2x.jpg"],"./../images/feedback/feedback-person7.jpg":[["feedback-person7.3d2a1bf8.jpg","images/feedback/feedback-person7.jpg"],"images/feedback/feedback-person7.jpg"],"./../images/feedback/feedback-person7@2x.jpg":[["feedback-person7@2x.d278347d.jpg","images/feedback/feedback-person7@2x.jpg"],"images/feedback/feedback-person7@2x.jpg"],"./../images/registration/registration-bg-mob.png":[["registration-bg-mob.b363f34f.png","images/registration/registration-bg-mob.png"],"images/registration/registration-bg-mob.png"],"./../images/registration/registration-bg-mob@2x.png":[["registration-bg-mob@2x.2f0047cd.png","images/registration/registration-bg-mob@2x.png"],"images/registration/registration-bg-mob@2x.png"],"./../images/registration/registration-bg-tab.png":[["registration-bg-tab.9877b726.png","images/registration/registration-bg-tab.png"],"images/registration/registration-bg-tab.png"],"./../images/registration/registration-bg-tab@2x.png":[["registration-bg-tab@2x.5b257242.png","images/registration/registration-bg-tab@2x.png"],"images/registration/registration-bg-tab@2x.png"],"./../images/registration/registration-bg-desk.png":[["registration-bg-desk.9c13bcc3.png","images/registration/registration-bg-desk.png"],"images/registration/registration-bg-desk.png"],"./../images/registration/registration-bg-desk@2x.png":[["registration-bg-desk@2x.ae5d666f.png","images/registration/registration-bg-desk@2x.png"],"images/registration/registration-bg-desk@2x.png"],"./../images/icons/instagram.svg":[["instagram.c31dc77c.svg","images/icons/instagram.svg"],"images/icons/instagram.svg"],"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"index.js":[function(require,module,exports) {
"use strict";

require("./sass/main.scss");
},{"./sass/main.scss":"sass/main.scss"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "64508" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/src.e31bb0bc.js.map