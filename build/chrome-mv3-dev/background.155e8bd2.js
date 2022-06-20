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
})({"i0mOg":[function(require,module,exports) {
"use strict";
var HMR_HOST = "localhost";
var HMR_PORT = "1815";
/* global chrome, browser, addEventListener, fetch, Response, HMR_HOST, HMR_PORT */ var env = typeof chrome == "undefined" ? browser : chrome;
env.runtime.onMessage.addListener(function(msg) {
    if (msg.__parcel_hmr_reload__) env.runtime.reload();
});
if (env.runtime.getManifest().manifest_version == 3) {
    var proxyLoc = env.runtime.getURL("/__parcel_hmr_proxy__?url=");
    addEventListener("fetch", function(evt) {
        var url = evt.request.url;
        if (url.startsWith(proxyLoc)) {
            url = new URL(decodeURIComponent(url.slice(proxyLoc.length)));
            if (url.hostname == HMR_HOST && url.port == HMR_PORT) evt.respondWith(fetch(url).then(function(res) {
                return new Response(res.body, {
                    headers: {
                        "Content-Type": res.headers.get("Content-Type")
                    }
                });
            }));
        }
    });
}

},{}],"fmFZC":[function(require,module,exports) {
var HMR_HOST = "localhost";
var HMR_PORT = 1815;
var HMR_SECURE = false;
var HMR_ENV_HASH = "210281caf8d4160d";
module.bundle.HMR_BUNDLE_ID = "ea27c4ec155e8bd2";
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    // If there's an error it's probably because of a race
    // between this content script and the extension reloading
    if (chrome.runtime.lastError) location.reload();
    ws.onmessage = async function(event) {
        if (!chrome.runtime.id) return;
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            if (data.assets.filter((e)=>e.type === "json").length > 0) {
                // If it's a manifest change, we must reload the entire app
                if (chrome && chrome.runtime && typeof chrome.runtime.reload === "function") chrome.runtime.reload();
                else {
                    // Content scripts can't reload the extension on their own
                    // so we need to send a message to the background service worker
                    // to do it for us, using Parcel's webextension runtime's background worker
                    chrome.runtime.sendMessage({
                        __parcel_hmr_reload__: true
                    });
                    location.reload();
                }
            } else // Otherwise, we check whether they have location.reload()
            // If they do, we reload the page. Otherwise, we reload the entire extension
            if (!!location && typeof location.reload === "function") location.reload();
            else chrome.runtime.reload();
        }
        if (data.type === "error") // Log parcel errors to console
        for (let ansiDiagnostic of data.diagnostics.ansi){
            let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
            console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function(e) {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}

},{}],"2mzJ1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const BASE_URL = "https://clients5.google.com/translate_a/t";
chrome.runtime.onMessage.addListener((request, _sender, sendResponse)=>{
    (async ()=>{
        if (request.type === "translate") {
            const params = new URLSearchParams({
                client: "dict-chrome-ex",
                sl: "auto",
                tl: "pt",
                q: request.text
            });
            const res = await fetch(`${BASE_URL}?${params}`);
            const json = await res.json();
            sendResponse({
                result: json[0][0]
            });
        }
    })();
    return true;
});

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hCtEe"}],"hCtEe":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}]},["i0mOg","fmFZC","2mzJ1"], "2mzJ1", "parcelRequirefd8e")

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFpRCxZQUFZLENBQUM7QUFBOUQsSUFBSSxRQUFRLEdBQUcsV0FBVyxBQUFDO0FBQUEsSUFBSSxRQUFRLEdBQUcsTUFBTSxBQUFDO0FBRWpELG1GQUFtRixDQUNuRixJQUFJLEdBQUcsR0FBRyxPQUFPLE1BQU0sSUFBSSxXQUFXLEdBQUcsT0FBTyxHQUFHLE1BQU0sQUFBQztBQUMxRCxHQUFHLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsU0FBVSxHQUFHLEVBQUU7SUFDL0MsSUFBSSxHQUFHLENBQUMscUJBQXFCLEVBQzNCLEdBQUcsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7Q0FFeEIsQ0FBQyxDQUFDO0FBRUgsSUFBSSxHQUFHLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxDQUFDLGdCQUFnQixJQUFJLENBQUMsRUFBRTtJQUNuRCxJQUFJLFFBQVEsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyw0QkFBNEIsQ0FBQyxBQUFDO0lBQ2hFLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxTQUFVLEdBQUcsRUFBRTtRQUN2QyxJQUFJLEdBQUcsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsQUFBQztRQUUxQixJQUFJLEdBQUcsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDNUIsR0FBRyxHQUFHLElBQUksR0FBRyxDQUFDLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUU5RCxJQUFJLEdBQUcsQ0FBQyxRQUFRLElBQUksUUFBUSxJQUFJLEdBQUcsQ0FBQyxJQUFJLElBQUksUUFBUSxFQUNsRCxHQUFHLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBVSxHQUFHLEVBQUU7Z0JBQzdDLE9BQU8sSUFBSSxRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRTtvQkFDNUIsT0FBTyxFQUFFO3dCQUNQLGNBQWMsRUFBRSxHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUM7cUJBQ2hEO2lCQUNGLENBQUMsQ0FBQzthQUNKLENBQUMsQ0FBQyxDQUFDO1NBRVA7S0FDRixDQUFDLENBQUM7Q0FDSjs7O0FDN0JELElBQUksUUFBUSxHQUFHLFdBQVcsQUFBQztBQUFBLElBQUksUUFBUSxHQUFHLElBQUksQUFBQztBQUFBLElBQUksVUFBVSxHQUFHLEtBQUssQUFBQztBQUFBLElBQUksWUFBWSxHQUFHLGtCQUFrQixBQUFDO0FBQUEsTUFBTSxDQUFDLE1BQU0sQ0FBQyxhQUFhLEdBQUcsa0JBQWtCLENBQUM7QUFBQSxTQUFTLFdBQVcsR0FBRztJQUNsTCxPQUNFLFFBQVEsSUFDUCxDQUFBLFFBQVEsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxRQUFRLENBQUMsUUFBUSxHQUFHLFdBQVcsQ0FBQSxBQUFDLENBQzVFO0NBQ0Y7QUFFRCxTQUFTLE9BQU8sR0FBRztJQUNqQixPQUFPLFFBQVEsSUFBSSxRQUFRLENBQUMsSUFBSSxDQUFBO0NBQ2pDO0FBRUQsSUFBSSxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNO0FBQ2pDLElBQUksQUFBQyxDQUFBLENBQUMsTUFBTSxJQUFJLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQSxJQUFLLE9BQU8sU0FBUyxLQUFLLFdBQVcsRUFBRTtJQUM1RSxJQUFJLFFBQVEsR0FBRyxXQUFXLEVBQUU7SUFDNUIsSUFBSSxJQUFJLEdBQUcsT0FBTyxFQUFFO0lBQ3BCLElBQUksUUFBUSxHQUNWLFVBQVUsSUFDVCxRQUFRLENBQUMsUUFBUSxJQUFJLFFBQVEsSUFDNUIsQ0FBQyw4QkFBOEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxBQUFDLEdBQzVDLEtBQUssR0FDTCxJQUFJO0lBQ1YsSUFBSSxFQUFFLEdBQUcsSUFBSSxTQUFTLENBQ3BCLFFBQVEsR0FBRyxLQUFLLEdBQUcsUUFBUSxHQUFJLENBQUEsSUFBSSxHQUFHLEdBQUcsR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFBLEdBQUksR0FBRyxDQUM3RDtJQUVELHNEQUFzRDtJQUN0RCwwREFBMEQ7SUFDMUQsSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFDMUIsUUFBUSxDQUFDLE1BQU0sRUFBRTtJQUduQixFQUFFLENBQUMsU0FBUyxHQUFHLGVBQWdCLEtBQUssRUFBRTtRQUNwQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQ3BCLE9BQU07UUFFUixJQUFJLElBQUksQ0FBQyxpQkFBaUIsSUFBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7UUFFbkQsSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLFFBQVEsRUFBRTtZQUMxQixJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFLLENBQUMsQ0FBQyxJQUFJLEtBQUssTUFBTSxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUM7Z0JBQ3pELDJEQUEyRDtnQkFDM0QsSUFDRSxNQUFNLElBQ04sTUFBTSxDQUFDLE9BQU8sSUFDZCxPQUFPLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxLQUFLLFVBQVUsRUFFM0MsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUU7cUJBQ2xCO29CQUNMLDBEQUEwRDtvQkFDMUQsZ0VBQWdFO29CQUNoRSwyRUFBMkU7b0JBQzNFLE1BQU0sQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDO3dCQUFFLHFCQUFxQixFQUFFLElBQUk7cUJBQUUsQ0FBQztvQkFDM0QsUUFBUSxDQUFDLE1BQU0sRUFBRTtpQkFDbEI7bUJBRUQsMERBQTBEO1lBQzFELDRFQUE0RTtZQUM1RSxJQUFJLENBQUMsQ0FBQyxRQUFRLElBQUksT0FBTyxRQUFRLENBQUMsTUFBTSxLQUFLLFVBQVUsRUFDckQsUUFBUSxDQUFDLE1BQU0sRUFBRTtpQkFFakIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUU7U0FHNUI7UUFFRCxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssT0FBTyxFQUN2QiwrQkFBK0I7UUFDL0IsS0FBSyxJQUFJLGNBQWMsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBRTtZQUNoRCxJQUFJLEtBQUssR0FBRyxjQUFjLENBQUMsU0FBUyxHQUNoQyxjQUFjLENBQUMsU0FBUyxHQUN4QixjQUFjLENBQUMsS0FBSztZQUV4QixPQUFPLENBQUMsS0FBSyxDQUNYLHlCQUFjLEdBQ1QsY0FBVyxDQUFDLE9BQU8sR0FDdEIsSUFBSSxHQUNKLEtBQUssR0FDTCxNQUFNLEdBQ04sY0FBYyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQ2xDO1NBQ0Y7S0FFSjtJQUNELEVBQUUsQ0FBQyxPQUFPLEdBQUcsU0FBVSxDQUFDLEVBQUU7UUFDeEIsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDO0tBQ3pCO0lBQ0QsRUFBRSxDQUFDLE9BQU8sR0FBRyxTQUFVLENBQUMsRUFBRTtRQUV0QixPQUFPLENBQUMsSUFBSSxDQUFDLDZEQUFrRCxDQUFDO0tBRW5FO0NBQ0Y7OztBQzFGRDs7QUFBQSxNQUFNLFFBQVEsR0FBRywyQ0FBMkM7QUFFNUQsTUFBTSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxZQUFZLEdBQUs7SUFDdEUsQ0FBQSxVQUFZO1FBQ1gsSUFBSSxPQUFPLENBQUMsSUFBSSxLQUFLLFdBQVcsRUFBRTtZQUNoQyxNQUFNLE1BQU0sR0FBRyxJQUFJLGVBQWUsQ0FBQztnQkFDakMsTUFBTSxFQUFFLGdCQUFnQjtnQkFDeEIsRUFBRSxFQUFFLE1BQU07Z0JBQ1YsRUFBRSxFQUFFLElBQUk7Z0JBQ1IsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxJQUFJO2FBQ2hCLENBQUM7WUFDRixNQUFNLEdBQUcsR0FBRyxNQUFNLEtBQUssQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ2hELE1BQU0sSUFBSSxHQUFHLE1BQU0sR0FBRyxDQUFDLElBQUksRUFBRTtZQUM3QixZQUFZLENBQUM7Z0JBQ1gsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDbkIsQ0FBQztTQUNIO0tBQ0YsQ0FBQSxFQUFHO0lBRUosT0FBTyxJQUFJLENBQUE7Q0FDWixDQUFDLENBQUM7OztBQ3BCSCxPQUFPLENBQUMsY0FBYyxHQUFHLFNBQVUsQ0FBQyxFQUFFO0lBQ3BDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxVQUFVLEdBQUcsQ0FBQyxHQUFHO1FBQUMsT0FBTyxFQUFFLENBQUM7S0FBQyxDQUFDO0NBQzdDLENBQUM7QUFFRixPQUFPLENBQUMsaUJBQWlCLEdBQUcsU0FBVSxDQUFDLEVBQUU7SUFDdkMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDLEVBQUUsWUFBWSxFQUFFO1FBQUMsS0FBSyxFQUFFLElBQUk7S0FBQyxDQUFDLENBQUM7Q0FDdkQsQ0FBQztBQUVGLE9BQU8sQ0FBQyxTQUFTLEdBQUcsU0FBVSxNQUFNLEVBQUUsSUFBSSxFQUFFO0lBQzFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxDQUFDLFNBQVUsR0FBRyxFQUFFO1FBQ3pDLElBQUksR0FBRyxLQUFLLFNBQVMsSUFBSSxHQUFHLEtBQUssWUFBWSxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLEVBQ3ZFLE9BQU87UUFHVCxNQUFNLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUU7WUFDL0IsVUFBVSxFQUFFLElBQUk7WUFDaEIsR0FBRyxFQUFFLFdBQVk7Z0JBQ2YsT0FBTyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDcEI7U0FDRixDQUFDLENBQUM7S0FDSixDQUFDLENBQUM7SUFFSCxPQUFPLElBQUksQ0FBQztDQUNiLENBQUM7QUFFRixPQUFPLENBQUMsTUFBTSxHQUFHLFNBQVUsSUFBSSxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUU7SUFDOUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsUUFBUSxFQUFFO1FBQ3BDLFVBQVUsRUFBRSxJQUFJO1FBQ2hCLEdBQUcsRUFBRSxHQUFHO0tBQ1QsQ0FBQyxDQUFDO0NBQ0osQ0FBQyIsInNvdXJjZXMiOlsibm9kZV9tb2R1bGVzL0BwYXJjZWwvcnVudGltZS13ZWJleHRlbnNpb24vbGliL3J1bnRpbWUtYjliNWYxMGNhNWJkNzM0Yi5qcyIsIm5vZGVfbW9kdWxlcy9AcGxhc21vaHEvcGFyY2VsLXJ1bnRpbWUvZGlzdC9ydW50aW1lLTNkYWI2MjY4ZDBkMmU3NTQuanMiLCJiYWNrZ3JvdW5kLnRzIiwibm9kZV9tb2R1bGVzL0BwYXJjZWwvdHJhbnNmb3JtZXItanMvc3JjL2VzbW9kdWxlLWhlbHBlcnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIEhNUl9IT1NUID0gXCJsb2NhbGhvc3RcIjt2YXIgSE1SX1BPUlQgPSAnMTgxNSc7XCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGdsb2JhbCBjaHJvbWUsIGJyb3dzZXIsIGFkZEV2ZW50TGlzdGVuZXIsIGZldGNoLCBSZXNwb25zZSwgSE1SX0hPU1QsIEhNUl9QT1JUICovXG52YXIgZW52ID0gdHlwZW9mIGNocm9tZSA9PSAndW5kZWZpbmVkJyA/IGJyb3dzZXIgOiBjaHJvbWU7XG5lbnYucnVudGltZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoZnVuY3Rpb24gKG1zZykge1xuICBpZiAobXNnLl9fcGFyY2VsX2htcl9yZWxvYWRfXykge1xuICAgIGVudi5ydW50aW1lLnJlbG9hZCgpO1xuICB9XG59KTtcblxuaWYgKGVudi5ydW50aW1lLmdldE1hbmlmZXN0KCkubWFuaWZlc3RfdmVyc2lvbiA9PSAzKSB7XG4gIHZhciBwcm94eUxvYyA9IGVudi5ydW50aW1lLmdldFVSTCgnL19fcGFyY2VsX2htcl9wcm94eV9fP3VybD0nKTtcbiAgYWRkRXZlbnRMaXN0ZW5lcignZmV0Y2gnLCBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgdmFyIHVybCA9IGV2dC5yZXF1ZXN0LnVybDtcblxuICAgIGlmICh1cmwuc3RhcnRzV2l0aChwcm94eUxvYykpIHtcbiAgICAgIHVybCA9IG5ldyBVUkwoZGVjb2RlVVJJQ29tcG9uZW50KHVybC5zbGljZShwcm94eUxvYy5sZW5ndGgpKSk7XG5cbiAgICAgIGlmICh1cmwuaG9zdG5hbWUgPT0gSE1SX0hPU1QgJiYgdXJsLnBvcnQgPT0gSE1SX1BPUlQpIHtcbiAgICAgICAgZXZ0LnJlc3BvbmRXaXRoKGZldGNoKHVybCkudGhlbihmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBSZXNwb25zZShyZXMuYm9keSwge1xuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogcmVzLmhlYWRlcnMuZ2V0KCdDb250ZW50LVR5cGUnKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9KSk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn0iLCJ2YXIgSE1SX0hPU1QgPSBcImxvY2FsaG9zdFwiO3ZhciBITVJfUE9SVCA9IDE4MTU7dmFyIEhNUl9TRUNVUkUgPSBmYWxzZTt2YXIgSE1SX0VOVl9IQVNIID0gXCIyMTAyODFjYWY4ZDQxNjBkXCI7bW9kdWxlLmJ1bmRsZS5ITVJfQlVORExFX0lEID0gXCJlYTI3YzRlYzE1NWU4YmQyXCI7ZnVuY3Rpb24gZ2V0SG9zdG5hbWUoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIEhNUl9IT1NUIHx8XHJcbiAgICAobG9jYXRpb24ucHJvdG9jb2wuaW5kZXhPZihcImh0dHBcIikgPT09IDAgPyBsb2NhdGlvbi5ob3N0bmFtZSA6IFwibG9jYWxob3N0XCIpXHJcbiAgKVxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRQb3J0KCkge1xyXG4gIHJldHVybiBITVJfUE9SVCB8fCBsb2NhdGlvbi5wb3J0XHJcbn1cclxuXHJcbnZhciBwYXJlbnQgPSBtb2R1bGUuYnVuZGxlLnBhcmVudFxyXG5pZiAoKCFwYXJlbnQgfHwgIXBhcmVudC5pc1BhcmNlbFJlcXVpcmUpICYmIHR5cGVvZiBXZWJTb2NrZXQgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICB2YXIgaG9zdG5hbWUgPSBnZXRIb3N0bmFtZSgpXHJcbiAgdmFyIHBvcnQgPSBnZXRQb3J0KClcclxuICB2YXIgcHJvdG9jb2wgPVxyXG4gICAgSE1SX1NFQ1VSRSB8fFxyXG4gICAgKGxvY2F0aW9uLnByb3RvY29sID09IFwiaHR0cHM6XCIgJiZcclxuICAgICAgIS9sb2NhbGhvc3R8MTI3LjAuMC4xfDAuMC4wLjAvLnRlc3QoaG9zdG5hbWUpKVxyXG4gICAgICA/IFwid3NzXCJcclxuICAgICAgOiBcIndzXCJcclxuICB2YXIgd3MgPSBuZXcgV2ViU29ja2V0KFxyXG4gICAgcHJvdG9jb2wgKyBcIjovL1wiICsgaG9zdG5hbWUgKyAocG9ydCA/IFwiOlwiICsgcG9ydCA6IFwiXCIpICsgXCIvXCJcclxuICApXHJcblxyXG4gIC8vIElmIHRoZXJlJ3MgYW4gZXJyb3IgaXQncyBwcm9iYWJseSBiZWNhdXNlIG9mIGEgcmFjZVxyXG4gIC8vIGJldHdlZW4gdGhpcyBjb250ZW50IHNjcmlwdCBhbmQgdGhlIGV4dGVuc2lvbiByZWxvYWRpbmdcclxuICBpZiAoY2hyb21lLnJ1bnRpbWUubGFzdEVycm9yKSB7XHJcbiAgICBsb2NhdGlvbi5yZWxvYWQoKVxyXG4gIH1cclxuXHJcbiAgd3Mub25tZXNzYWdlID0gYXN5bmMgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICBpZiAoIWNocm9tZS5ydW50aW1lLmlkKSB7XHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gICAgdmFyIGRhdGEgLyo6IEhNUk1lc3NhZ2UgKi8gPSBKU09OLnBhcnNlKGV2ZW50LmRhdGEpXHJcblxyXG4gICAgaWYgKGRhdGEudHlwZSA9PT0gXCJ1cGRhdGVcIikge1xyXG4gICAgICBpZiAoZGF0YS5hc3NldHMuZmlsdGVyKChlKSA9PiBlLnR5cGUgPT09IFwianNvblwiKS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgLy8gSWYgaXQncyBhIG1hbmlmZXN0IGNoYW5nZSwgd2UgbXVzdCByZWxvYWQgdGhlIGVudGlyZSBhcHBcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICBjaHJvbWUgJiZcclxuICAgICAgICAgIGNocm9tZS5ydW50aW1lICYmXHJcbiAgICAgICAgICB0eXBlb2YgY2hyb21lLnJ1bnRpbWUucmVsb2FkID09PSBcImZ1bmN0aW9uXCJcclxuICAgICAgICApIHtcclxuICAgICAgICAgIGNocm9tZS5ydW50aW1lLnJlbG9hZCgpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIC8vIENvbnRlbnQgc2NyaXB0cyBjYW4ndCByZWxvYWQgdGhlIGV4dGVuc2lvbiBvbiB0aGVpciBvd25cclxuICAgICAgICAgIC8vIHNvIHdlIG5lZWQgdG8gc2VuZCBhIG1lc3NhZ2UgdG8gdGhlIGJhY2tncm91bmQgc2VydmljZSB3b3JrZXJcclxuICAgICAgICAgIC8vIHRvIGRvIGl0IGZvciB1cywgdXNpbmcgUGFyY2VsJ3Mgd2ViZXh0ZW5zaW9uIHJ1bnRpbWUncyBiYWNrZ3JvdW5kIHdvcmtlclxyXG4gICAgICAgICAgY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2UoeyBfX3BhcmNlbF9obXJfcmVsb2FkX186IHRydWUgfSlcclxuICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpXHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIE90aGVyd2lzZSwgd2UgY2hlY2sgd2hldGhlciB0aGV5IGhhdmUgbG9jYXRpb24ucmVsb2FkKClcclxuICAgICAgICAvLyBJZiB0aGV5IGRvLCB3ZSByZWxvYWQgdGhlIHBhZ2UuIE90aGVyd2lzZSwgd2UgcmVsb2FkIHRoZSBlbnRpcmUgZXh0ZW5zaW9uXHJcbiAgICAgICAgaWYgKCEhbG9jYXRpb24gJiYgdHlwZW9mIGxvY2F0aW9uLnJlbG9hZCA9PT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBjaHJvbWUucnVudGltZS5yZWxvYWQoKVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChkYXRhLnR5cGUgPT09IFwiZXJyb3JcIikge1xyXG4gICAgICAvLyBMb2cgcGFyY2VsIGVycm9ycyB0byBjb25zb2xlXHJcbiAgICAgIGZvciAobGV0IGFuc2lEaWFnbm9zdGljIG9mIGRhdGEuZGlhZ25vc3RpY3MuYW5zaSkge1xyXG4gICAgICAgIGxldCBzdGFjayA9IGFuc2lEaWFnbm9zdGljLmNvZGVmcmFtZVxyXG4gICAgICAgICAgPyBhbnNpRGlhZ25vc3RpYy5jb2RlZnJhbWVcclxuICAgICAgICAgIDogYW5zaURpYWdub3N0aWMuc3RhY2tcclxuXHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcclxuICAgICAgICAgIFwi8J+aqCBbcGFyY2VsXTogXCIgK1xyXG4gICAgICAgICAgICBhbnNpRGlhZ25vc3RpYy5tZXNzYWdlICtcclxuICAgICAgICAgICAgXCJcXG5cIiArXHJcbiAgICAgICAgICAgIHN0YWNrICtcclxuICAgICAgICAgICAgXCJcXG5cXG5cIiArXHJcbiAgICAgICAgICAgIGFuc2lEaWFnbm9zdGljLmhpbnRzLmpvaW4oXCJcXG5cIilcclxuICAgICAgICApXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgd3Mub25lcnJvciA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGUubWVzc2FnZSlcclxuICB9XHJcbiAgd3Mub25jbG9zZSA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICBpZiAocHJvY2Vzcy5lbnYuUEFSQ0VMX0JVSUxEX0VOViAhPT0gXCJ0ZXN0XCIpIHtcclxuICAgICAgY29uc29sZS53YXJuKFwiW3BhcmNlbF0g8J+aqCBDb25uZWN0aW9uIHRvIHRoZSBITVIgc2VydmVyIHdhcyBsb3N0XCIpXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImNvbnN0IEJBU0VfVVJMID0gJ2h0dHBzOi8vY2xpZW50czUuZ29vZ2xlLmNvbS90cmFuc2xhdGVfYS90J1xuXG5jaHJvbWUucnVudGltZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoKHJlcXVlc3QsIF9zZW5kZXIsIHNlbmRSZXNwb25zZSkgPT4ge1xuICAoYXN5bmMgKCkgPT4ge1xuICAgIGlmIChyZXF1ZXN0LnR5cGUgPT09ICd0cmFuc2xhdGUnKSB7XG4gICAgICBjb25zdCBwYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHtcbiAgICAgICAgY2xpZW50OiAnZGljdC1jaHJvbWUtZXgnLFxuICAgICAgICBzbDogJ2F1dG8nLFxuICAgICAgICB0bDogJ3B0JyxcbiAgICAgICAgcTogcmVxdWVzdC50ZXh0LFxuICAgICAgfSlcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke0JBU0VfVVJMfT8ke3BhcmFtc31gKVxuICAgICAgY29uc3QganNvbiA9IGF3YWl0IHJlcy5qc29uKClcbiAgICAgIHNlbmRSZXNwb25zZSh7XG4gICAgICAgIHJlc3VsdDoganNvblswXVswXSxcbiAgICAgIH0pXG4gICAgfVxuICB9KSgpXG5cbiAgcmV0dXJuIHRydWVcbn0pO1xuXG5leHBvcnQge31cbiIsImV4cG9ydHMuaW50ZXJvcERlZmF1bHQgPSBmdW5jdGlvbiAoYSkge1xuICByZXR1cm4gYSAmJiBhLl9fZXNNb2R1bGUgPyBhIDoge2RlZmF1bHQ6IGF9O1xufTtcblxuZXhwb3J0cy5kZWZpbmVJbnRlcm9wRmxhZyA9IGZ1bmN0aW9uIChhKSB7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShhLCAnX19lc01vZHVsZScsIHt2YWx1ZTogdHJ1ZX0pO1xufTtcblxuZXhwb3J0cy5leHBvcnRBbGwgPSBmdW5jdGlvbiAoc291cmNlLCBkZXN0KSB7XG4gIE9iamVjdC5rZXlzKHNvdXJjZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgaWYgKGtleSA9PT0gJ2RlZmF1bHQnIHx8IGtleSA9PT0gJ19fZXNNb2R1bGUnIHx8IGRlc3QuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShkZXN0LCBrZXksIHtcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHNvdXJjZVtrZXldO1xuICAgICAgfSxcbiAgICB9KTtcbiAgfSk7XG5cbiAgcmV0dXJuIGRlc3Q7XG59O1xuXG5leHBvcnRzLmV4cG9ydCA9IGZ1bmN0aW9uIChkZXN0LCBkZXN0TmFtZSwgZ2V0KSB7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShkZXN0LCBkZXN0TmFtZSwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBnZXQsXG4gIH0pO1xufTtcbiJdLCJuYW1lcyI6W10sInZlcnNpb24iOjMsImZpbGUiOiJiYWNrZ3JvdW5kLjE1NWU4YmQyLmpzLm1hcCJ9
