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
})({"eyn5M":[function(require,module,exports) {
var HMR_HOST = "localhost";
var HMR_PORT = 1815;
var HMR_SECURE = false;
var HMR_ENV_HASH = "e792fbbdaa78ee84";
module.bundle.HMR_BUNDLE_ID = "13d6bef52562b68e";
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

},{}],"4mMJy":[function(require,module,exports) {
"use strict";
/* global chrome, browser, addEventListener */ var env = typeof chrome == "undefined" ? browser : chrome;
addEventListener("beforeunload", function() {
    try {
        env.runtime.sendMessage({
            __parcel_hmr_reload__: true
        });
    } catch (err) {}
});

},{}]},["eyn5M","4mMJy"], "4mMJy", "parcelRequirefd8e")

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LE9BQU8sQ0FBQyxNQUFNLEVBQUU7U0FHNUI7UUFFRCxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssT0FBTyxFQUN2QiwrQkFBK0I7UUFDL0IsS0FBSyxJQUFJLGNBQWMsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBRTtZQUNoRCxJQUFJLEtBQUssR0FBRyxjQUFjLENBQUMsU0FBUyxHQUNoQyxjQUFjLENBQUMsU0FBUyxHQUN4QixjQUFjLENBQUMsS0FBSztZQUV4QixPQUFPLENBQUMsS0FBSyxDQUNYLHlCQUFjLEdBQ1QsY0FBVyxDQUFDLE9BQU8sR0FDdEIsSUFBSSxHQUNKLEtBQUssR0FDTCxNQUFNLEdBQ04sY0FBYyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQ2xDO1NBQ0Y7S0FFSjtJQUNELEVBQUUsQ0FBQyxPQUFPLEdBQUcsU0FBVSxDQUFDLEVBQUU7UUFDeEIsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDO0tBQ3pCO0lBQ0QsRUFBRSxDQUFDLE9BQU8sR0FBRyxTQUFVLENBQUMsRUFBRTtRQUV0QixPQUFPLENBQUMsSUFBSSxDQUFDLDZEQUFrRCxDQUFDO0tBRW5FO0NBQ0Y7OztBQzFGRCxZQUFZLENBQUM7QUFFYiw4Q0FBOEMsQ0FDOUMsSUFBSSxHQUFHLEdBQUcsT0FBTyxNQUFNLElBQUksV0FBVyxHQUFHLE9BQU8sR0FBRyxNQUFNLEFBQUM7QUFDMUQsZ0JBQWdCLENBQUMsY0FBYyxFQUFFLFdBQVk7SUFDM0MsSUFBSTtRQUNGLEdBQUcsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDO1lBQ3RCLHFCQUFxQixFQUFFLElBQUk7U0FDNUIsQ0FBQyxDQUFDO0tBQ0osQ0FBQyxPQUFPLEdBQUcsRUFBRSxFQUNiO0NBQ0YsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJub2RlX21vZHVsZXMvQHBsYXNtb2hxL3BhcmNlbC1ydW50aW1lL2Rpc3QvcnVudGltZS0zNWUzODQxMmVlMThlMGFlLmpzIiwibm9kZV9tb2R1bGVzL0BwYXJjZWwvdHJhbnNmb3JtZXItd2ViZXh0ZW5zaW9uL2xpYi9ydW50aW1lL2F1dG9yZWxvYWQuanMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIEhNUl9IT1NUID0gXCJsb2NhbGhvc3RcIjt2YXIgSE1SX1BPUlQgPSAxODE1O3ZhciBITVJfU0VDVVJFID0gZmFsc2U7dmFyIEhNUl9FTlZfSEFTSCA9IFwiZTc5MmZiYmRhYTc4ZWU4NFwiO21vZHVsZS5idW5kbGUuSE1SX0JVTkRMRV9JRCA9IFwiMTNkNmJlZjUyNTYyYjY4ZVwiO2Z1bmN0aW9uIGdldEhvc3RuYW1lKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICBITVJfSE9TVCB8fFxyXG4gICAgKGxvY2F0aW9uLnByb3RvY29sLmluZGV4T2YoXCJodHRwXCIpID09PSAwID8gbG9jYXRpb24uaG9zdG5hbWUgOiBcImxvY2FsaG9zdFwiKVxyXG4gIClcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0UG9ydCgpIHtcclxuICByZXR1cm4gSE1SX1BPUlQgfHwgbG9jYXRpb24ucG9ydFxyXG59XHJcblxyXG52YXIgcGFyZW50ID0gbW9kdWxlLmJ1bmRsZS5wYXJlbnRcclxuaWYgKCghcGFyZW50IHx8ICFwYXJlbnQuaXNQYXJjZWxSZXF1aXJlKSAmJiB0eXBlb2YgV2ViU29ja2V0ICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgdmFyIGhvc3RuYW1lID0gZ2V0SG9zdG5hbWUoKVxyXG4gIHZhciBwb3J0ID0gZ2V0UG9ydCgpXHJcbiAgdmFyIHByb3RvY29sID1cclxuICAgIEhNUl9TRUNVUkUgfHxcclxuICAgIChsb2NhdGlvbi5wcm90b2NvbCA9PSBcImh0dHBzOlwiICYmXHJcbiAgICAgICEvbG9jYWxob3N0fDEyNy4wLjAuMXwwLjAuMC4wLy50ZXN0KGhvc3RuYW1lKSlcclxuICAgICAgPyBcIndzc1wiXHJcbiAgICAgIDogXCJ3c1wiXHJcbiAgdmFyIHdzID0gbmV3IFdlYlNvY2tldChcclxuICAgIHByb3RvY29sICsgXCI6Ly9cIiArIGhvc3RuYW1lICsgKHBvcnQgPyBcIjpcIiArIHBvcnQgOiBcIlwiKSArIFwiL1wiXHJcbiAgKVxyXG5cclxuICAvLyBJZiB0aGVyZSdzIGFuIGVycm9yIGl0J3MgcHJvYmFibHkgYmVjYXVzZSBvZiBhIHJhY2VcclxuICAvLyBiZXR3ZWVuIHRoaXMgY29udGVudCBzY3JpcHQgYW5kIHRoZSBleHRlbnNpb24gcmVsb2FkaW5nXHJcbiAgaWYgKGNocm9tZS5ydW50aW1lLmxhc3RFcnJvcikge1xyXG4gICAgbG9jYXRpb24ucmVsb2FkKClcclxuICB9XHJcblxyXG4gIHdzLm9ubWVzc2FnZSA9IGFzeW5jIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgaWYgKCFjaHJvbWUucnVudGltZS5pZCkge1xyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuICAgIHZhciBkYXRhIC8qOiBITVJNZXNzYWdlICovID0gSlNPTi5wYXJzZShldmVudC5kYXRhKVxyXG5cclxuICAgIGlmIChkYXRhLnR5cGUgPT09IFwidXBkYXRlXCIpIHtcclxuICAgICAgaWYgKGRhdGEuYXNzZXRzLmZpbHRlcigoZSkgPT4gZS50eXBlID09PSBcImpzb25cIikubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIC8vIElmIGl0J3MgYSBtYW5pZmVzdCBjaGFuZ2UsIHdlIG11c3QgcmVsb2FkIHRoZSBlbnRpcmUgYXBwXHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgY2hyb21lICYmXHJcbiAgICAgICAgICBjaHJvbWUucnVudGltZSAmJlxyXG4gICAgICAgICAgdHlwZW9mIGNocm9tZS5ydW50aW1lLnJlbG9hZCA9PT0gXCJmdW5jdGlvblwiXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICBjaHJvbWUucnVudGltZS5yZWxvYWQoKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAvLyBDb250ZW50IHNjcmlwdHMgY2FuJ3QgcmVsb2FkIHRoZSBleHRlbnNpb24gb24gdGhlaXIgb3duXHJcbiAgICAgICAgICAvLyBzbyB3ZSBuZWVkIHRvIHNlbmQgYSBtZXNzYWdlIHRvIHRoZSBiYWNrZ3JvdW5kIHNlcnZpY2Ugd29ya2VyXHJcbiAgICAgICAgICAvLyB0byBkbyBpdCBmb3IgdXMsIHVzaW5nIFBhcmNlbCdzIHdlYmV4dGVuc2lvbiBydW50aW1lJ3MgYmFja2dyb3VuZCB3b3JrZXJcclxuICAgICAgICAgIGNocm9tZS5ydW50aW1lLnNlbmRNZXNzYWdlKHsgX19wYXJjZWxfaG1yX3JlbG9hZF9fOiB0cnVlIH0pXHJcbiAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKVxyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyBPdGhlcndpc2UsIHdlIGNoZWNrIHdoZXRoZXIgdGhleSBoYXZlIGxvY2F0aW9uLnJlbG9hZCgpXHJcbiAgICAgICAgLy8gSWYgdGhleSBkbywgd2UgcmVsb2FkIHRoZSBwYWdlLiBPdGhlcndpc2UsIHdlIHJlbG9hZCB0aGUgZW50aXJlIGV4dGVuc2lvblxyXG4gICAgICAgIGlmICghIWxvY2F0aW9uICYmIHR5cGVvZiBsb2NhdGlvbi5yZWxvYWQgPT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICAgICAgbG9jYXRpb24ucmVsb2FkKClcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY2hyb21lLnJ1bnRpbWUucmVsb2FkKClcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoZGF0YS50eXBlID09PSBcImVycm9yXCIpIHtcclxuICAgICAgLy8gTG9nIHBhcmNlbCBlcnJvcnMgdG8gY29uc29sZVxyXG4gICAgICBmb3IgKGxldCBhbnNpRGlhZ25vc3RpYyBvZiBkYXRhLmRpYWdub3N0aWNzLmFuc2kpIHtcclxuICAgICAgICBsZXQgc3RhY2sgPSBhbnNpRGlhZ25vc3RpYy5jb2RlZnJhbWVcclxuICAgICAgICAgID8gYW5zaURpYWdub3N0aWMuY29kZWZyYW1lXHJcbiAgICAgICAgICA6IGFuc2lEaWFnbm9zdGljLnN0YWNrXHJcblxyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXHJcbiAgICAgICAgICBcIvCfmqggW3BhcmNlbF06IFwiICtcclxuICAgICAgICAgICAgYW5zaURpYWdub3N0aWMubWVzc2FnZSArXHJcbiAgICAgICAgICAgIFwiXFxuXCIgK1xyXG4gICAgICAgICAgICBzdGFjayArXHJcbiAgICAgICAgICAgIFwiXFxuXFxuXCIgK1xyXG4gICAgICAgICAgICBhbnNpRGlhZ25vc3RpYy5oaW50cy5qb2luKFwiXFxuXCIpXHJcbiAgICAgICAgKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIHdzLm9uZXJyb3IgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgY29uc29sZS5lcnJvcihlLm1lc3NhZ2UpXHJcbiAgfVxyXG4gIHdzLm9uY2xvc2UgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgaWYgKHByb2Nlc3MuZW52LlBBUkNFTF9CVUlMRF9FTlYgIT09IFwidGVzdFwiKSB7XHJcbiAgICAgIGNvbnNvbGUud2FybihcIltwYXJjZWxdIPCfmqggQ29ubmVjdGlvbiB0byB0aGUgSE1SIHNlcnZlciB3YXMgbG9zdFwiKVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLyogZ2xvYmFsIGNocm9tZSwgYnJvd3NlciwgYWRkRXZlbnRMaXN0ZW5lciAqL1xudmFyIGVudiA9IHR5cGVvZiBjaHJvbWUgPT0gJ3VuZGVmaW5lZCcgPyBicm93c2VyIDogY2hyb21lO1xuYWRkRXZlbnRMaXN0ZW5lcignYmVmb3JldW5sb2FkJywgZnVuY3Rpb24gKCkge1xuICB0cnkge1xuICAgIGVudi5ydW50aW1lLnNlbmRNZXNzYWdlKHtcbiAgICAgIF9fcGFyY2VsX2htcl9yZWxvYWRfXzogdHJ1ZVxuICAgIH0pO1xuICB9IGNhdGNoIChlcnIpIHsvLyBpZ25vcmUgdGhyb3dpbmcgaWYgZXh0ZW5zaW9uIGNvbnRleHQgaW52YWxpZGF0ZWRcbiAgfVxufSk7Il0sIm5hbWVzIjpbXSwidmVyc2lvbiI6MywiZmlsZSI6ImF1dG9yZWxvYWQuMjU2MmI2OGUuanMubWFwIn0=
