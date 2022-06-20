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
})({"ddd0V":[function(require,module,exports) {
var HMR_HOST = "localhost";
var HMR_PORT = 1815;
var HMR_SECURE = false;
var HMR_ENV_HASH = "e792fbbdaa78ee84";
module.bundle.HMR_BUNDLE_ID = "43fc6acf1058f4eb";
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

},{}],"3Nd82":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "config", ()=>config);
var _tippyJs = require("tippy.js");
var _tippyJsDefault = parcelHelpers.interopDefault(_tippyJs);
var _tippyCss = require("tippy.js/dist/tippy.css");
const config = {
    matches: [
        "https://www.primevideo.com/detail/*"
    ]
};
let tooltip;
function translateSubtitles() {
    const el = document.querySelector("span.atvwebplayersdk-captions-text");
    const text = el.innerText.replace(/(\r\n|\n|\r)/gm, " ");
    const message = {
        type: "translate",
        text
    };
    chrome.runtime.sendMessage(message, (response)=>{
        tooltip = (0, _tippyJsDefault.default)(el, {
            content: response.result
        });
        tooltip.show();
    });
}
window.addEventListener("keydown", (e)=>{
    if (e.code !== "Space") return;
    if (tooltip) tooltip.hide();
    const isPausing = !!document.querySelector('[aria-label="Pause"]');
    if (isPausing) translateSubtitles();
});
window.addEventListener("mousedown", ()=>{
    if (tooltip) tooltip.hide();
    const isPausing = !!document.querySelector('[aria-label="Pause"]');
    if (isPausing) translateSubtitles();
});

},{"tippy.js":"1nYwp","tippy.js/dist/tippy.css":"42519","@parcel/transformer-js/src/esmodule-helpers.js":"boKlo"}],"1nYwp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "animateFill", ()=>animateFill);
parcelHelpers.export(exports, "createSingleton", ()=>createSingleton);
parcelHelpers.export(exports, "delegate", ()=>delegate);
parcelHelpers.export(exports, "followCursor", ()=>followCursor);
parcelHelpers.export(exports, "hideAll", ()=>hideAll);
parcelHelpers.export(exports, "inlinePositioning", ()=>inlinePositioning);
parcelHelpers.export(exports, "roundArrow", ()=>ROUND_ARROW);
parcelHelpers.export(exports, "sticky", ()=>sticky);
/**!
* tippy.js v6.3.7
* (c) 2017-2021 atomiks
* MIT License
*/ var _core = require("@popperjs/core");
var ROUND_ARROW = '<svg width="16" height="6" xmlns="http://www.w3.org/2000/svg"><path d="M0 6s1.796-.013 4.67-3.615C5.851.9 6.93.006 8 0c1.07-.006 2.148.887 3.343 2.385C14.233 6.005 16 6 16 6H0z"></svg>';
var BOX_CLASS = "tippy-box";
var CONTENT_CLASS = "tippy-content";
var BACKDROP_CLASS = "tippy-backdrop";
var ARROW_CLASS = "tippy-arrow";
var SVG_ARROW_CLASS = "tippy-svg-arrow";
var TOUCH_OPTIONS = {
    passive: true,
    capture: true
};
var TIPPY_DEFAULT_APPEND_TO = function TIPPY_DEFAULT_APPEND_TO() {
    return document.body;
};
function hasOwnProperty(obj, key) {
    return ({}).hasOwnProperty.call(obj, key);
}
function getValueAtIndexOrReturn(value, index, defaultValue) {
    if (Array.isArray(value)) {
        var v = value[index];
        return v == null ? Array.isArray(defaultValue) ? defaultValue[index] : defaultValue : v;
    }
    return value;
}
function isType(value, type) {
    var str = ({}).toString.call(value);
    return str.indexOf("[object") === 0 && str.indexOf(type + "]") > -1;
}
function invokeWithArgsOrReturn(value, args) {
    return typeof value === "function" ? value.apply(void 0, args) : value;
}
function debounce(fn, ms) {
    // Avoid wrapping in `setTimeout` if ms is 0 anyway
    if (ms === 0) return fn;
    var timeout;
    return function(arg) {
        clearTimeout(timeout);
        timeout = setTimeout(function() {
            fn(arg);
        }, ms);
    };
}
function removeProperties(obj, keys) {
    var clone = Object.assign({}, obj);
    keys.forEach(function(key) {
        delete clone[key];
    });
    return clone;
}
function splitBySpaces(value) {
    return value.split(/\s+/).filter(Boolean);
}
function normalizeToArray(value) {
    return [].concat(value);
}
function pushIfUnique(arr, value) {
    if (arr.indexOf(value) === -1) arr.push(value);
}
function unique(arr) {
    return arr.filter(function(item, index) {
        return arr.indexOf(item) === index;
    });
}
function getBasePlacement(placement) {
    return placement.split("-")[0];
}
function arrayFrom(value) {
    return [].slice.call(value);
}
function removeUndefinedProps(obj) {
    return Object.keys(obj).reduce(function(acc, key) {
        if (obj[key] !== undefined) acc[key] = obj[key];
        return acc;
    }, {});
}
function div() {
    return document.createElement("div");
}
function isElement(value) {
    return [
        "Element",
        "Fragment"
    ].some(function(type) {
        return isType(value, type);
    });
}
function isNodeList(value) {
    return isType(value, "NodeList");
}
function isMouseEvent(value) {
    return isType(value, "MouseEvent");
}
function isReferenceElement(value) {
    return !!(value && value._tippy && value._tippy.reference === value);
}
function getArrayOfElements(value) {
    if (isElement(value)) return [
        value
    ];
    if (isNodeList(value)) return arrayFrom(value);
    if (Array.isArray(value)) return value;
    return arrayFrom(document.querySelectorAll(value));
}
function setTransitionDuration(els, value) {
    els.forEach(function(el) {
        if (el) el.style.transitionDuration = value + "ms";
    });
}
function setVisibilityState(els, state) {
    els.forEach(function(el) {
        if (el) el.setAttribute("data-state", state);
    });
}
function getOwnerDocument(elementOrElements) {
    var _element$ownerDocumen;
    var _normalizeToArray = normalizeToArray(elementOrElements), element = _normalizeToArray[0]; // Elements created via a <template> have an ownerDocument with no reference to the body
    return element != null && (_element$ownerDocumen = element.ownerDocument) != null && _element$ownerDocumen.body ? element.ownerDocument : document;
}
function isCursorOutsideInteractiveBorder(popperTreeData, event) {
    var clientX = event.clientX, clientY = event.clientY;
    return popperTreeData.every(function(_ref) {
        var popperRect = _ref.popperRect, popperState = _ref.popperState, props = _ref.props;
        var interactiveBorder = props.interactiveBorder;
        var basePlacement = getBasePlacement(popperState.placement);
        var offsetData = popperState.modifiersData.offset;
        if (!offsetData) return true;
        var topDistance = basePlacement === "bottom" ? offsetData.top.y : 0;
        var bottomDistance = basePlacement === "top" ? offsetData.bottom.y : 0;
        var leftDistance = basePlacement === "right" ? offsetData.left.x : 0;
        var rightDistance = basePlacement === "left" ? offsetData.right.x : 0;
        var exceedsTop = popperRect.top - clientY + topDistance > interactiveBorder;
        var exceedsBottom = clientY - popperRect.bottom - bottomDistance > interactiveBorder;
        var exceedsLeft = popperRect.left - clientX + leftDistance > interactiveBorder;
        var exceedsRight = clientX - popperRect.right - rightDistance > interactiveBorder;
        return exceedsTop || exceedsBottom || exceedsLeft || exceedsRight;
    });
}
function updateTransitionEndListener(box, action, listener) {
    var method = action + "EventListener"; // some browsers apparently support `transition` (unprefixed) but only fire
    // `webkitTransitionEnd`...
    [
        "transitionend",
        "webkitTransitionEnd"
    ].forEach(function(event) {
        box[method](event, listener);
    });
}
/**
 * Compared to xxx.contains, this function works for dom structures with shadow
 * dom
 */ function actualContains(parent, child) {
    var target = child;
    while(target){
        var _target$getRootNode;
        if (parent.contains(target)) return true;
        target = target.getRootNode == null ? void 0 : (_target$getRootNode = target.getRootNode()) == null ? void 0 : _target$getRootNode.host;
    }
    return false;
}
var currentInput = {
    isTouch: false
};
var lastMouseMoveTime = 0;
/**
 * When a `touchstart` event is fired, it's assumed the user is using touch
 * input. We'll bind a `mousemove` event listener to listen for mouse input in
 * the future. This way, the `isTouch` property is fully dynamic and will handle
 * hybrid devices that use a mix of touch + mouse input.
 */ function onDocumentTouchStart() {
    if (currentInput.isTouch) return;
    currentInput.isTouch = true;
    if (window.performance) document.addEventListener("mousemove", onDocumentMouseMove);
}
/**
 * When two `mousemove` event are fired consecutively within 20ms, it's assumed
 * the user is using mouse input again. `mousemove` can fire on touch devices as
 * well, but very rarely that quickly.
 */ function onDocumentMouseMove() {
    var now = performance.now();
    if (now - lastMouseMoveTime < 20) {
        currentInput.isTouch = false;
        document.removeEventListener("mousemove", onDocumentMouseMove);
    }
    lastMouseMoveTime = now;
}
/**
 * When an element is in focus and has a tippy, leaving the tab/window and
 * returning causes it to show again. For mouse users this is unexpected, but
 * for keyboard use it makes sense.
 * TODO: find a better technique to solve this problem
 */ function onWindowBlur() {
    var activeElement = document.activeElement;
    if (isReferenceElement(activeElement)) {
        var instance = activeElement._tippy;
        if (activeElement.blur && !instance.state.isVisible) activeElement.blur();
    }
}
function bindGlobalEventListeners() {
    document.addEventListener("touchstart", onDocumentTouchStart, TOUCH_OPTIONS);
    window.addEventListener("blur", onWindowBlur);
}
var isBrowser = typeof window !== "undefined" && typeof document !== "undefined";
var isIE11 = isBrowser ? !!window.msCrypto : false;
function createMemoryLeakWarning(method) {
    var txt = method === "destroy" ? "n already-" : " ";
    return [
        method + "() was called on a" + txt + "destroyed instance. This is a no-op but",
        "indicates a potential memory leak."
    ].join(" ");
}
function clean(value) {
    var spacesAndTabs = /[ \t]{2,}/g;
    var lineStartWithSpaces = /^[ \t]*/gm;
    return value.replace(spacesAndTabs, " ").replace(lineStartWithSpaces, "").trim();
}
function getDevMessage(message) {
    return clean("\n  %ctippy.js\n\n  %c" + clean(message) + "\n\n  %c\uD83D\uDC77\u200D This is a development-only message. It will be removed in production.\n  ");
}
function getFormattedMessage(message) {
    return [
        getDevMessage(message),
        "color: #00C584; font-size: 1.3em; font-weight: bold;",
        "line-height: 1.5",
        "color: #a6a095;"
    ];
} // Assume warnings and errors never have the same message
var visitedMessages;
resetVisitedMessages();
function resetVisitedMessages() {
    visitedMessages = new Set();
}
function warnWhen(condition, message) {
    if (condition && !visitedMessages.has(message)) {
        var _console;
        visitedMessages.add(message);
        (_console = console).warn.apply(_console, getFormattedMessage(message));
    }
}
function errorWhen(condition, message) {
    if (condition && !visitedMessages.has(message)) {
        var _console2;
        visitedMessages.add(message);
        (_console2 = console).error.apply(_console2, getFormattedMessage(message));
    }
}
function validateTargets(targets) {
    var didPassFalsyValue = !targets;
    var didPassPlainObject = Object.prototype.toString.call(targets) === "[object Object]" && !targets.addEventListener;
    errorWhen(didPassFalsyValue, [
        "tippy() was passed",
        "`" + String(targets) + "`",
        "as its targets (first) argument. Valid types are: String, Element,",
        "Element[], or NodeList."
    ].join(" "));
    errorWhen(didPassPlainObject, [
        "tippy() was passed a plain object which is not supported as an argument",
        "for virtual positioning. Use props.getReferenceClientRect instead."
    ].join(" "));
}
var pluginProps = {
    animateFill: false,
    followCursor: false,
    inlinePositioning: false,
    sticky: false
};
var renderProps = {
    allowHTML: false,
    animation: "fade",
    arrow: true,
    content: "",
    inertia: false,
    maxWidth: 350,
    role: "tooltip",
    theme: "",
    zIndex: 9999
};
var defaultProps = Object.assign({
    appendTo: TIPPY_DEFAULT_APPEND_TO,
    aria: {
        content: "auto",
        expanded: "auto"
    },
    delay: 0,
    duration: [
        300,
        250
    ],
    getReferenceClientRect: null,
    hideOnClick: true,
    ignoreAttributes: false,
    interactive: false,
    interactiveBorder: 2,
    interactiveDebounce: 0,
    moveTransition: "",
    offset: [
        0,
        10
    ],
    onAfterUpdate: function onAfterUpdate() {},
    onBeforeUpdate: function onBeforeUpdate() {},
    onCreate: function onCreate() {},
    onDestroy: function onDestroy() {},
    onHidden: function onHidden() {},
    onHide: function onHide() {},
    onMount: function onMount() {},
    onShow: function onShow() {},
    onShown: function onShown() {},
    onTrigger: function onTrigger() {},
    onUntrigger: function onUntrigger() {},
    onClickOutside: function onClickOutside() {},
    placement: "top",
    plugins: [],
    popperOptions: {},
    render: null,
    showOnCreate: false,
    touch: true,
    trigger: "mouseenter focus",
    triggerTarget: null
}, pluginProps, renderProps);
var defaultKeys = Object.keys(defaultProps);
var setDefaultProps = function setDefaultProps(partialProps) {
    validateProps(partialProps, []);
    var keys = Object.keys(partialProps);
    keys.forEach(function(key) {
        defaultProps[key] = partialProps[key];
    });
};
function getExtendedPassedProps(passedProps) {
    var plugins = passedProps.plugins || [];
    var pluginProps1 = plugins.reduce(function(acc, plugin) {
        var name = plugin.name, defaultValue = plugin.defaultValue;
        if (name) {
            var _name;
            acc[name] = passedProps[name] !== undefined ? passedProps[name] : (_name = defaultProps[name]) != null ? _name : defaultValue;
        }
        return acc;
    }, {});
    return Object.assign({}, passedProps, pluginProps1);
}
function getDataAttributeProps(reference, plugins) {
    var propKeys = plugins ? Object.keys(getExtendedPassedProps(Object.assign({}, defaultProps, {
        plugins: plugins
    }))) : defaultKeys;
    var props = propKeys.reduce(function(acc, key) {
        var valueAsString = (reference.getAttribute("data-tippy-" + key) || "").trim();
        if (!valueAsString) return acc;
        if (key === "content") acc[key] = valueAsString;
        else try {
            acc[key] = JSON.parse(valueAsString);
        } catch (e) {
            acc[key] = valueAsString;
        }
        return acc;
    }, {});
    return props;
}
function evaluateProps(reference, props) {
    var out = Object.assign({}, props, {
        content: invokeWithArgsOrReturn(props.content, [
            reference
        ])
    }, props.ignoreAttributes ? {} : getDataAttributeProps(reference, props.plugins));
    out.aria = Object.assign({}, defaultProps.aria, out.aria);
    out.aria = {
        expanded: out.aria.expanded === "auto" ? props.interactive : out.aria.expanded,
        content: out.aria.content === "auto" ? props.interactive ? null : "describedby" : out.aria.content
    };
    return out;
}
function validateProps(partialProps, plugins) {
    if (partialProps === void 0) partialProps = {};
    if (plugins === void 0) plugins = [];
    var keys = Object.keys(partialProps);
    keys.forEach(function(prop) {
        var nonPluginProps = removeProperties(defaultProps, Object.keys(pluginProps));
        var didPassUnknownProp = !hasOwnProperty(nonPluginProps, prop); // Check if the prop exists in `plugins`
        if (didPassUnknownProp) didPassUnknownProp = plugins.filter(function(plugin) {
            return plugin.name === prop;
        }).length === 0;
        warnWhen(didPassUnknownProp, [
            "`" + prop + "`",
            "is not a valid prop. You may have spelled it incorrectly, or if it's",
            "a plugin, forgot to pass it in an array as props.plugins.",
            "\n\n",
            "All props: https://atomiks.github.io/tippyjs/v6/all-props/\n",
            "Plugins: https://atomiks.github.io/tippyjs/v6/plugins/"
        ].join(" "));
    });
}
var innerHTML = function innerHTML() {
    return "innerHTML";
};
function dangerouslySetInnerHTML(element, html) {
    element[innerHTML()] = html;
}
function createArrowElement(value) {
    var arrow = div();
    if (value === true) arrow.className = ARROW_CLASS;
    else {
        arrow.className = SVG_ARROW_CLASS;
        if (isElement(value)) arrow.appendChild(value);
        else dangerouslySetInnerHTML(arrow, value);
    }
    return arrow;
}
function setContent(content, props) {
    if (isElement(props.content)) {
        dangerouslySetInnerHTML(content, "");
        content.appendChild(props.content);
    } else if (typeof props.content !== "function") {
        if (props.allowHTML) dangerouslySetInnerHTML(content, props.content);
        else content.textContent = props.content;
    }
}
function getChildren(popper) {
    var box = popper.firstElementChild;
    var boxChildren = arrayFrom(box.children);
    return {
        box: box,
        content: boxChildren.find(function(node) {
            return node.classList.contains(CONTENT_CLASS);
        }),
        arrow: boxChildren.find(function(node) {
            return node.classList.contains(ARROW_CLASS) || node.classList.contains(SVG_ARROW_CLASS);
        }),
        backdrop: boxChildren.find(function(node) {
            return node.classList.contains(BACKDROP_CLASS);
        })
    };
}
function render(instance) {
    var popper = div();
    var box1 = div();
    box1.className = BOX_CLASS;
    box1.setAttribute("data-state", "hidden");
    box1.setAttribute("tabindex", "-1");
    var content1 = div();
    content1.className = CONTENT_CLASS;
    content1.setAttribute("data-state", "hidden");
    setContent(content1, instance.props);
    popper.appendChild(box1);
    box1.appendChild(content1);
    onUpdate(instance.props, instance.props);
    function onUpdate(prevProps, nextProps) {
        var _getChildren = getChildren(popper), box = _getChildren.box, content = _getChildren.content, arrow = _getChildren.arrow;
        if (nextProps.theme) box.setAttribute("data-theme", nextProps.theme);
        else box.removeAttribute("data-theme");
        if (typeof nextProps.animation === "string") box.setAttribute("data-animation", nextProps.animation);
        else box.removeAttribute("data-animation");
        if (nextProps.inertia) box.setAttribute("data-inertia", "");
        else box.removeAttribute("data-inertia");
        box.style.maxWidth = typeof nextProps.maxWidth === "number" ? nextProps.maxWidth + "px" : nextProps.maxWidth;
        if (nextProps.role) box.setAttribute("role", nextProps.role);
        else box.removeAttribute("role");
        if (prevProps.content !== nextProps.content || prevProps.allowHTML !== nextProps.allowHTML) setContent(content, instance.props);
        if (nextProps.arrow) {
            if (!arrow) box.appendChild(createArrowElement(nextProps.arrow));
            else if (prevProps.arrow !== nextProps.arrow) {
                box.removeChild(arrow);
                box.appendChild(createArrowElement(nextProps.arrow));
            }
        } else if (arrow) box.removeChild(arrow);
    }
    return {
        popper: popper,
        onUpdate: onUpdate
    };
} // Runtime check to identify if the render function is the default one; this
// way we can apply default CSS transitions logic and it can be tree-shaken away
render.$$tippy = true;
var idCounter = 1;
var mouseMoveListeners = []; // Used by `hideAll()`
var mountedInstances = [];
function createTippy(reference, passedProps) {
    var props = evaluateProps(reference, Object.assign({}, defaultProps, getExtendedPassedProps(removeUndefinedProps(passedProps)))); // ===========================================================================
    // 🔒 Private members
    // ===========================================================================
    var showTimeout;
    var hideTimeout;
    var scheduleHideAnimationFrame;
    var isVisibleFromClick = false;
    var didHideDueToDocumentMouseDown = false;
    var didTouchMove = false;
    var ignoreOnFirstUpdate = false;
    var lastTriggerEvent;
    var currentTransitionEndListener;
    var onFirstUpdate;
    var listeners = [];
    var debouncedOnMouseMove = debounce(onMouseMove, props.interactiveDebounce);
    var currentTarget; // ===========================================================================
    // 🔑 Public members
    // ===========================================================================
    var id1 = idCounter++;
    var popperInstance = null;
    var plugins = unique(props.plugins);
    var state1 = {
        // Is the instance currently enabled?
        isEnabled: true,
        // Is the tippy currently showing and not transitioning out?
        isVisible: false,
        // Has the instance been destroyed?
        isDestroyed: false,
        // Is the tippy currently mounted to the DOM?
        isMounted: false,
        // Has the tippy finished transitioning in?
        isShown: false
    };
    var instance1 = {
        // properties
        id: id1,
        reference: reference,
        popper: div(),
        popperInstance: popperInstance,
        props: props,
        state: state1,
        plugins: plugins,
        // methods
        clearDelayTimeouts: clearDelayTimeouts,
        setProps: setProps,
        setContent: setContent1,
        show: show,
        hide: hide,
        hideWithInteractivity: hideWithInteractivity,
        enable: enable,
        disable: disable,
        unmount: unmount,
        destroy: destroy
    }; // TODO: Investigate why this early return causes a TDZ error in the tests —
    // it doesn't seem to happen in the browser
    /* istanbul ignore if */ if (!props.render) {
        errorWhen(true, "render() function has not been supplied.");
        return instance1;
    } // ===========================================================================
    // Initial mutations
    // ===========================================================================
    var _props$render = props.render(instance1), popper1 = _props$render.popper, onUpdate = _props$render.onUpdate;
    popper1.setAttribute("data-tippy-root", "");
    popper1.id = "tippy-" + instance1.id;
    instance1.popper = popper1;
    reference._tippy = instance1;
    popper1._tippy = instance1;
    var pluginsHooks = plugins.map(function(plugin) {
        return plugin.fn(instance1);
    });
    var hasAriaExpanded = reference.hasAttribute("aria-expanded");
    addListeners();
    handleAriaExpandedAttribute();
    handleStyles();
    invokeHook("onCreate", [
        instance1
    ]);
    if (props.showOnCreate) scheduleShow();
     // Prevent a tippy with a delay from hiding if the cursor left then returned
    // before it started hiding
    popper1.addEventListener("mouseenter", function() {
        if (instance1.props.interactive && instance1.state.isVisible) instance1.clearDelayTimeouts();
    });
    popper1.addEventListener("mouseleave", function() {
        if (instance1.props.interactive && instance1.props.trigger.indexOf("mouseenter") >= 0) getDocument().addEventListener("mousemove", debouncedOnMouseMove);
    });
    return instance1; // ===========================================================================
    // 🔒 Private methods
    // ===========================================================================
    function getNormalizedTouchSettings() {
        var touch = instance1.props.touch;
        return Array.isArray(touch) ? touch : [
            touch,
            0
        ];
    }
    function getIsCustomTouchBehavior() {
        return getNormalizedTouchSettings()[0] === "hold";
    }
    function getIsDefaultRenderFn() {
        var _instance$props$rende;
        // @ts-ignore
        return !!((_instance$props$rende = instance1.props.render) != null && _instance$props$rende.$$tippy);
    }
    function getCurrentTarget() {
        return currentTarget || reference;
    }
    function getDocument() {
        var parent = getCurrentTarget().parentNode;
        return parent ? getOwnerDocument(parent) : document;
    }
    function getDefaultTemplateChildren() {
        return getChildren(popper1);
    }
    function getDelay(isShow) {
        // For touch or keyboard input, force `0` delay for UX reasons
        // Also if the instance is mounted but not visible (transitioning out),
        // ignore delay
        if (instance1.state.isMounted && !instance1.state.isVisible || currentInput.isTouch || lastTriggerEvent && lastTriggerEvent.type === "focus") {
            return 0;
        }
        return getValueAtIndexOrReturn(instance1.props.delay, isShow ? 0 : 1, defaultProps.delay);
    }
    function handleStyles(fromHide) {
        if (fromHide === void 0) {
            fromHide = false;
        }
        popper1.style.pointerEvents = instance1.props.interactive && !fromHide ? "" : "none";
        popper1.style.zIndex = "" + instance1.props.zIndex;
    }
    function invokeHook(hook, args, shouldInvokePropsHook) {
        if (shouldInvokePropsHook === void 0) {
            shouldInvokePropsHook = true;
        }
        pluginsHooks.forEach(function(pluginHooks) {
            if (pluginHooks[hook]) {
                pluginHooks[hook].apply(pluginHooks, args);
            }
        });
        if (shouldInvokePropsHook) {
            var _instance$props;
            (_instance$props = instance1.props)[hook].apply(_instance$props, args);
        }
    }
    function handleAriaContentAttribute() {
        var aria = instance1.props.aria;
        if (!aria.content) {
            return;
        }
        var attr = "aria-" + aria.content;
        var id = popper1.id;
        var nodes = normalizeToArray(instance1.props.triggerTarget || reference);
        nodes.forEach(function(node) {
            var currentValue = node.getAttribute(attr);
            if (instance1.state.isVisible) {
                node.setAttribute(attr, currentValue ? currentValue + " " + id : id);
            } else {
                var nextValue = currentValue && currentValue.replace(id, "").trim();
                if (nextValue) {
                    node.setAttribute(attr, nextValue);
                } else {
                    node.removeAttribute(attr);
                }
            }
        });
    }
    function handleAriaExpandedAttribute() {
        if (hasAriaExpanded || !instance1.props.aria.expanded) {
            return;
        }
        var nodes = normalizeToArray(instance1.props.triggerTarget || reference);
        nodes.forEach(function(node) {
            if (instance1.props.interactive) {
                node.setAttribute("aria-expanded", instance1.state.isVisible && node === getCurrentTarget() ? "true" : "false");
            } else {
                node.removeAttribute("aria-expanded");
            }
        });
    }
    function cleanupInteractiveMouseListeners() {
        getDocument().removeEventListener("mousemove", debouncedOnMouseMove);
        mouseMoveListeners = mouseMoveListeners.filter(function(listener) {
            return listener !== debouncedOnMouseMove;
        });
    }
    function onDocumentPress(event) {
        // Moved finger to scroll instead of an intentional tap outside
        if (currentInput.isTouch) {
            if (didTouchMove || event.type === "mousedown") {
                return;
            }
        }
        var actualTarget = event.composedPath && event.composedPath()[0] || event.target; // Clicked on interactive popper
        if (instance1.props.interactive && actualContains(popper1, actualTarget)) {
            return;
        } // Clicked on the event listeners target
        if (normalizeToArray(instance1.props.triggerTarget || reference).some(function(el) {
            return actualContains(el, actualTarget);
        })) {
            if (currentInput.isTouch) {
                return;
            }
            if (instance1.state.isVisible && instance1.props.trigger.indexOf("click") >= 0) {
                return;
            }
        } else {
            invokeHook("onClickOutside", [
                instance1,
                event
            ]);
        }
        if (instance1.props.hideOnClick === true) {
            instance1.clearDelayTimeouts();
            instance1.hide(); // `mousedown` event is fired right before `focus` if pressing the
            // currentTarget. This lets a tippy with `focus` trigger know that it
            // should not show
            didHideDueToDocumentMouseDown = true;
            setTimeout(function() {
                didHideDueToDocumentMouseDown = false;
            }); // The listener gets added in `scheduleShow()`, but this may be hiding it
            // before it shows, and hide()'s early bail-out behavior can prevent it
            // from being cleaned up
            if (!instance1.state.isMounted) {
                removeDocumentPress();
            }
        }
    }
    function onTouchMove() {
        didTouchMove = true;
    }
    function onTouchStart() {
        didTouchMove = false;
    }
    function addDocumentPress() {
        var doc = getDocument();
        doc.addEventListener("mousedown", onDocumentPress, true);
        doc.addEventListener("touchend", onDocumentPress, TOUCH_OPTIONS);
        doc.addEventListener("touchstart", onTouchStart, TOUCH_OPTIONS);
        doc.addEventListener("touchmove", onTouchMove, TOUCH_OPTIONS);
    }
    function removeDocumentPress() {
        var doc = getDocument();
        doc.removeEventListener("mousedown", onDocumentPress, true);
        doc.removeEventListener("touchend", onDocumentPress, TOUCH_OPTIONS);
        doc.removeEventListener("touchstart", onTouchStart, TOUCH_OPTIONS);
        doc.removeEventListener("touchmove", onTouchMove, TOUCH_OPTIONS);
    }
    function onTransitionedOut(duration, callback) {
        onTransitionEnd(duration, function() {
            if (!instance1.state.isVisible && popper1.parentNode && popper1.parentNode.contains(popper1)) {
                callback();
            }
        });
    }
    function onTransitionedIn(duration, callback) {
        onTransitionEnd(duration, callback);
    }
    function onTransitionEnd(duration, callback) {
        var box = getDefaultTemplateChildren().box;
        function listener(event) {
            if (event.target === box) {
                updateTransitionEndListener(box, "remove", listener);
                callback();
            }
        } // Make callback synchronous if duration is 0
        // `transitionend` won't fire otherwise
        if (duration === 0) {
            return callback();
        }
        updateTransitionEndListener(box, "remove", currentTransitionEndListener);
        updateTransitionEndListener(box, "add", listener);
        currentTransitionEndListener = listener;
    }
    function on(eventType, handler, options) {
        if (options === void 0) {
            options = false;
        }
        var nodes = normalizeToArray(instance1.props.triggerTarget || reference);
        nodes.forEach(function(node) {
            node.addEventListener(eventType, handler, options);
            listeners.push({
                node: node,
                eventType: eventType,
                handler: handler,
                options: options
            });
        });
    }
    function addListeners() {
        if (getIsCustomTouchBehavior()) {
            on("touchstart", onTrigger, {
                passive: true
            });
            on("touchend", onMouseLeave, {
                passive: true
            });
        }
        splitBySpaces(instance1.props.trigger).forEach(function(eventType) {
            if (eventType === "manual") {
                return;
            }
            on(eventType, onTrigger);
            switch(eventType){
                case "mouseenter":
                    on("mouseleave", onMouseLeave);
                    break;
                case "focus":
                    on(isIE11 ? "focusout" : "blur", onBlurOrFocusOut);
                    break;
                case "focusin":
                    on("focusout", onBlurOrFocusOut);
                    break;
            }
        });
    }
    function removeListeners() {
        listeners.forEach(function(_ref) {
            var node = _ref.node, eventType = _ref.eventType, handler = _ref.handler, options = _ref.options;
            node.removeEventListener(eventType, handler, options);
        });
        listeners = [];
    }
    function onTrigger(event) {
        var _lastTriggerEvent;
        var shouldScheduleClickHide = false;
        if (!instance1.state.isEnabled || isEventListenerStopped(event) || didHideDueToDocumentMouseDown) {
            return;
        }
        var wasFocused = ((_lastTriggerEvent = lastTriggerEvent) == null ? void 0 : _lastTriggerEvent.type) === "focus";
        lastTriggerEvent = event;
        currentTarget = event.currentTarget;
        handleAriaExpandedAttribute();
        if (!instance1.state.isVisible && isMouseEvent(event)) {
            // If scrolling, `mouseenter` events can be fired if the cursor lands
            // over a new target, but `mousemove` events don't get fired. This
            // causes interactive tooltips to get stuck open until the cursor is
            // moved
            mouseMoveListeners.forEach(function(listener) {
                return listener(event);
            });
        } // Toggle show/hide when clicking click-triggered tooltips
        if (event.type === "click" && (instance1.props.trigger.indexOf("mouseenter") < 0 || isVisibleFromClick) && instance1.props.hideOnClick !== false && instance1.state.isVisible) {
            shouldScheduleClickHide = true;
        } else {
            scheduleShow(event);
        }
        if (event.type === "click") {
            isVisibleFromClick = !shouldScheduleClickHide;
        }
        if (shouldScheduleClickHide && !wasFocused) {
            scheduleHide(event);
        }
    }
    function onMouseMove(event) {
        var target = event.target;
        var isCursorOverReferenceOrPopper = getCurrentTarget().contains(target) || popper1.contains(target);
        if (event.type === "mousemove" && isCursorOverReferenceOrPopper) {
            return;
        }
        var popperTreeData = getNestedPopperTree().concat(popper1).map(function(popper) {
            var _instance$popperInsta;
            var instance = popper._tippy;
            var state = (_instance$popperInsta = instance.popperInstance) == null ? void 0 : _instance$popperInsta.state;
            if (state) {
                return {
                    popperRect: popper.getBoundingClientRect(),
                    popperState: state,
                    props: props
                };
            }
            return null;
        }).filter(Boolean);
        if (isCursorOutsideInteractiveBorder(popperTreeData, event)) {
            cleanupInteractiveMouseListeners();
            scheduleHide(event);
        }
    }
    function onMouseLeave(event) {
        var shouldBail = isEventListenerStopped(event) || instance1.props.trigger.indexOf("click") >= 0 && isVisibleFromClick;
        if (shouldBail) {
            return;
        }
        if (instance1.props.interactive) {
            instance1.hideWithInteractivity(event);
            return;
        }
        scheduleHide(event);
    }
    function onBlurOrFocusOut(event) {
        if (instance1.props.trigger.indexOf("focusin") < 0 && event.target !== getCurrentTarget()) {
            return;
        } // If focus was moved to within the popper
        if (instance1.props.interactive && event.relatedTarget && popper1.contains(event.relatedTarget)) {
            return;
        }
        scheduleHide(event);
    }
    function isEventListenerStopped(event) {
        return currentInput.isTouch ? getIsCustomTouchBehavior() !== event.type.indexOf("touch") >= 0 : false;
    }
    function createPopperInstance() {
        destroyPopperInstance();
        var _instance$props2 = instance1.props, popperOptions = _instance$props2.popperOptions, placement = _instance$props2.placement, offset = _instance$props2.offset, getReferenceClientRect = _instance$props2.getReferenceClientRect, moveTransition = _instance$props2.moveTransition;
        var arrow = getIsDefaultRenderFn() ? getChildren(popper1).arrow : null;
        var computedReference = getReferenceClientRect ? {
            getBoundingClientRect: getReferenceClientRect,
            contextElement: getReferenceClientRect.contextElement || getCurrentTarget()
        } : reference;
        var tippyModifier = {
            name: "$$tippy",
            enabled: true,
            phase: "beforeWrite",
            requires: [
                "computeStyles"
            ],
            fn: function fn(_ref2) {
                var state = _ref2.state;
                if (getIsDefaultRenderFn()) {
                    var _getDefaultTemplateCh = getDefaultTemplateChildren(), box = _getDefaultTemplateCh.box;
                    [
                        "placement",
                        "reference-hidden",
                        "escaped"
                    ].forEach(function(attr) {
                        if (attr === "placement") {
                            box.setAttribute("data-placement", state.placement);
                        } else {
                            if (state.attributes.popper["data-popper-" + attr]) {
                                box.setAttribute("data-" + attr, "");
                            } else {
                                box.removeAttribute("data-" + attr);
                            }
                        }
                    });
                    state.attributes.popper = {};
                }
            }
        };
        var modifiers = [
            {
                name: "offset",
                options: {
                    offset: offset
                }
            },
            {
                name: "preventOverflow",
                options: {
                    padding: {
                        top: 2,
                        bottom: 2,
                        left: 5,
                        right: 5
                    }
                }
            },
            {
                name: "flip",
                options: {
                    padding: 5
                }
            },
            {
                name: "computeStyles",
                options: {
                    adaptive: !moveTransition
                }
            },
            tippyModifier
        ];
        if (getIsDefaultRenderFn() && arrow) {
            modifiers.push({
                name: "arrow",
                options: {
                    element: arrow,
                    padding: 3
                }
            });
        }
        modifiers.push.apply(modifiers, (popperOptions == null ? void 0 : popperOptions.modifiers) || []);
        instance1.popperInstance = (0, _core.createPopper)(computedReference, popper1, Object.assign({}, popperOptions, {
            placement: placement,
            onFirstUpdate: onFirstUpdate,
            modifiers: modifiers
        }));
    }
    function destroyPopperInstance() {
        if (instance1.popperInstance) {
            instance1.popperInstance.destroy();
            instance1.popperInstance = null;
        }
    }
    function mount() {
        var appendTo = instance1.props.appendTo;
        var parentNode; // By default, we'll append the popper to the triggerTargets's parentNode so
        // it's directly after the reference element so the elements inside the
        // tippy can be tabbed to
        // If there are clipping issues, the user can specify a different appendTo
        // and ensure focus management is handled correctly manually
        var node = getCurrentTarget();
        if (instance1.props.interactive && appendTo === TIPPY_DEFAULT_APPEND_TO || appendTo === "parent") {
            parentNode = node.parentNode;
        } else {
            parentNode = invokeWithArgsOrReturn(appendTo, [
                node
            ]);
        } // The popper element needs to exist on the DOM before its position can be
        // updated as Popper needs to read its dimensions
        if (!parentNode.contains(popper1)) {
            parentNode.appendChild(popper1);
        }
        instance1.state.isMounted = true;
        createPopperInstance();
        /* istanbul ignore else */ if (true) {
            // Accessibility check
            warnWhen(instance1.props.interactive && appendTo === defaultProps.appendTo && node.nextElementSibling !== popper1, [
                "Interactive tippy element may not be accessible via keyboard",
                "navigation because it is not directly after the reference element",
                "in the DOM source order.",
                "\n\n",
                "Using a wrapper <div> or <span> tag around the reference element",
                "solves this by creating a new parentNode context.",
                "\n\n",
                "Specifying `appendTo: document.body` silences this warning, but it",
                "assumes you are using a focus management solution to handle",
                "keyboard navigation.",
                "\n\n",
                "See: https://atomiks.github.io/tippyjs/v6/accessibility/#interactivity"
            ].join(" "));
        }
    }
    function getNestedPopperTree() {
        return arrayFrom(popper1.querySelectorAll("[data-tippy-root]"));
    }
    function scheduleShow(event) {
        instance1.clearDelayTimeouts();
        if (event) {
            invokeHook("onTrigger", [
                instance1,
                event
            ]);
        }
        addDocumentPress();
        var delay = getDelay(true);
        var _getNormalizedTouchSe = getNormalizedTouchSettings(), touchValue = _getNormalizedTouchSe[0], touchDelay = _getNormalizedTouchSe[1];
        if (currentInput.isTouch && touchValue === "hold" && touchDelay) {
            delay = touchDelay;
        }
        if (delay) {
            showTimeout = setTimeout(function() {
                instance1.show();
            }, delay);
        } else {
            instance1.show();
        }
    }
    function scheduleHide(event) {
        instance1.clearDelayTimeouts();
        invokeHook("onUntrigger", [
            instance1,
            event
        ]);
        if (!instance1.state.isVisible) {
            removeDocumentPress();
            return;
        } // For interactive tippies, scheduleHide is added to a document.body handler
        // from onMouseLeave so must intercept scheduled hides from mousemove/leave
        // events when trigger contains mouseenter and click, and the tip is
        // currently shown as a result of a click.
        if (instance1.props.trigger.indexOf("mouseenter") >= 0 && instance1.props.trigger.indexOf("click") >= 0 && [
            "mouseleave",
            "mousemove"
        ].indexOf(event.type) >= 0 && isVisibleFromClick) {
            return;
        }
        var delay = getDelay(false);
        if (delay) {
            hideTimeout = setTimeout(function() {
                if (instance1.state.isVisible) {
                    instance1.hide();
                }
            }, delay);
        } else {
            // Fixes a `transitionend` problem when it fires 1 frame too
            // late sometimes, we don't want hide() to be called.
            scheduleHideAnimationFrame = requestAnimationFrame(function() {
                instance1.hide();
            });
        }
    } // ===========================================================================
    // 🔑 Public methods
    // ===========================================================================
    function enable() {
        instance1.state.isEnabled = true;
    }
    function disable() {
        // Disabling the instance should also hide it
        // https://github.com/atomiks/tippy.js-react/issues/106
        instance1.hide();
        instance1.state.isEnabled = false;
    }
    function clearDelayTimeouts() {
        clearTimeout(showTimeout);
        clearTimeout(hideTimeout);
        cancelAnimationFrame(scheduleHideAnimationFrame);
    }
    function setProps(partialProps) {
        /* istanbul ignore else */ if (true) {
            warnWhen(instance1.state.isDestroyed, createMemoryLeakWarning("setProps"));
        }
        if (instance1.state.isDestroyed) {
            return;
        }
        invokeHook("onBeforeUpdate", [
            instance1,
            partialProps
        ]);
        removeListeners();
        var prevProps = instance1.props;
        var nextProps = evaluateProps(reference, Object.assign({}, prevProps, removeUndefinedProps(partialProps), {
            ignoreAttributes: true
        }));
        instance1.props = nextProps;
        addListeners();
        if (prevProps.interactiveDebounce !== nextProps.interactiveDebounce) {
            cleanupInteractiveMouseListeners();
            debouncedOnMouseMove = debounce(onMouseMove, nextProps.interactiveDebounce);
        } // Ensure stale aria-expanded attributes are removed
        if (prevProps.triggerTarget && !nextProps.triggerTarget) {
            normalizeToArray(prevProps.triggerTarget).forEach(function(node) {
                node.removeAttribute("aria-expanded");
            });
        } else if (nextProps.triggerTarget) {
            reference.removeAttribute("aria-expanded");
        }
        handleAriaExpandedAttribute();
        handleStyles();
        if (onUpdate) {
            onUpdate(prevProps, nextProps);
        }
        if (instance1.popperInstance) {
            createPopperInstance(); // Fixes an issue with nested tippies if they are all getting re-rendered,
            // and the nested ones get re-rendered first.
            // https://github.com/atomiks/tippyjs-react/issues/177
            // TODO: find a cleaner / more efficient solution(!)
            getNestedPopperTree().forEach(function(nestedPopper) {
                // React (and other UI libs likely) requires a rAF wrapper as it flushes
                // its work in one
                requestAnimationFrame(nestedPopper._tippy.popperInstance.forceUpdate);
            });
        }
        invokeHook("onAfterUpdate", [
            instance1,
            partialProps
        ]);
    }
    function setContent1(content) {
        instance1.setProps({
            content: content
        });
    }
    function show() {
        /* istanbul ignore else */ if (true) {
            warnWhen(instance1.state.isDestroyed, createMemoryLeakWarning("show"));
        } // Early bail-out
        var isAlreadyVisible = instance1.state.isVisible;
        var isDestroyed = instance1.state.isDestroyed;
        var isDisabled = !instance1.state.isEnabled;
        var isTouchAndTouchDisabled = currentInput.isTouch && !instance1.props.touch;
        var duration = getValueAtIndexOrReturn(instance1.props.duration, 0, defaultProps.duration);
        if (isAlreadyVisible || isDestroyed || isDisabled || isTouchAndTouchDisabled) {
            return;
        } // Normalize `disabled` behavior across browsers.
        // Firefox allows events on disabled elements, but Chrome doesn't.
        // Using a wrapper element (i.e. <span>) is recommended.
        if (getCurrentTarget().hasAttribute("disabled")) {
            return;
        }
        invokeHook("onShow", [
            instance1
        ], false);
        if (instance1.props.onShow(instance1) === false) {
            return;
        }
        instance1.state.isVisible = true;
        if (getIsDefaultRenderFn()) {
            popper1.style.visibility = "visible";
        }
        handleStyles();
        addDocumentPress();
        if (!instance1.state.isMounted) {
            popper1.style.transition = "none";
        } // If flipping to the opposite side after hiding at least once, the
        // animation will use the wrong placement without resetting the duration
        if (getIsDefaultRenderFn()) {
            var _getDefaultTemplateCh2 = getDefaultTemplateChildren(), box = _getDefaultTemplateCh2.box, content = _getDefaultTemplateCh2.content;
            setTransitionDuration([
                box,
                content
            ], 0);
        }
        onFirstUpdate = function onFirstUpdate() {
            var _instance$popperInsta2;
            if (!instance1.state.isVisible || ignoreOnFirstUpdate) {
                return;
            }
            ignoreOnFirstUpdate = true; // reflow
            void popper1.offsetHeight;
            popper1.style.transition = instance1.props.moveTransition;
            if (getIsDefaultRenderFn() && instance1.props.animation) {
                var _getDefaultTemplateCh3 = getDefaultTemplateChildren(), _box = _getDefaultTemplateCh3.box, _content = _getDefaultTemplateCh3.content;
                setTransitionDuration([
                    _box,
                    _content
                ], duration);
                setVisibilityState([
                    _box,
                    _content
                ], "visible");
            }
            handleAriaContentAttribute();
            handleAriaExpandedAttribute();
            pushIfUnique(mountedInstances, instance1); // certain modifiers (e.g. `maxSize`) require a second update after the
            // popper has been positioned for the first time
            (_instance$popperInsta2 = instance1.popperInstance) == null ? void 0 : _instance$popperInsta2.forceUpdate();
            invokeHook("onMount", [
                instance1
            ]);
            if (instance1.props.animation && getIsDefaultRenderFn()) {
                onTransitionedIn(duration, function() {
                    instance1.state.isShown = true;
                    invokeHook("onShown", [
                        instance1
                    ]);
                });
            }
        };
        mount();
    }
    function hide() {
        /* istanbul ignore else */ if (true) {
            warnWhen(instance1.state.isDestroyed, createMemoryLeakWarning("hide"));
        } // Early bail-out
        var isAlreadyHidden = !instance1.state.isVisible;
        var isDestroyed = instance1.state.isDestroyed;
        var isDisabled = !instance1.state.isEnabled;
        var duration = getValueAtIndexOrReturn(instance1.props.duration, 1, defaultProps.duration);
        if (isAlreadyHidden || isDestroyed || isDisabled) {
            return;
        }
        invokeHook("onHide", [
            instance1
        ], false);
        if (instance1.props.onHide(instance1) === false) {
            return;
        }
        instance1.state.isVisible = false;
        instance1.state.isShown = false;
        ignoreOnFirstUpdate = false;
        isVisibleFromClick = false;
        if (getIsDefaultRenderFn()) {
            popper1.style.visibility = "hidden";
        }
        cleanupInteractiveMouseListeners();
        removeDocumentPress();
        handleStyles(true);
        if (getIsDefaultRenderFn()) {
            var _getDefaultTemplateCh4 = getDefaultTemplateChildren(), box = _getDefaultTemplateCh4.box, content = _getDefaultTemplateCh4.content;
            if (instance1.props.animation) {
                setTransitionDuration([
                    box,
                    content
                ], duration);
                setVisibilityState([
                    box,
                    content
                ], "hidden");
            }
        }
        handleAriaContentAttribute();
        handleAriaExpandedAttribute();
        if (instance1.props.animation) {
            if (getIsDefaultRenderFn()) {
                onTransitionedOut(duration, instance1.unmount);
            }
        } else {
            instance1.unmount();
        }
    }
    function hideWithInteractivity(event) {
        /* istanbul ignore else */ if (true) {
            warnWhen(instance1.state.isDestroyed, createMemoryLeakWarning("hideWithInteractivity"));
        }
        getDocument().addEventListener("mousemove", debouncedOnMouseMove);
        pushIfUnique(mouseMoveListeners, debouncedOnMouseMove);
        debouncedOnMouseMove(event);
    }
    function unmount() {
        /* istanbul ignore else */ if (true) {
            warnWhen(instance1.state.isDestroyed, createMemoryLeakWarning("unmount"));
        }
        if (instance1.state.isVisible) {
            instance1.hide();
        }
        if (!instance1.state.isMounted) {
            return;
        }
        destroyPopperInstance(); // If a popper is not interactive, it will be appended outside the popper
        // tree by default. This seems mainly for interactive tippies, but we should
        // find a workaround if possible
        getNestedPopperTree().forEach(function(nestedPopper) {
            nestedPopper._tippy.unmount();
        });
        if (popper1.parentNode) {
            popper1.parentNode.removeChild(popper1);
        }
        mountedInstances = mountedInstances.filter(function(i) {
            return i !== instance1;
        });
        instance1.state.isMounted = false;
        invokeHook("onHidden", [
            instance1
        ]);
    }
    function destroy() {
        /* istanbul ignore else */ if (true) {
            warnWhen(instance1.state.isDestroyed, createMemoryLeakWarning("destroy"));
        }
        if (instance1.state.isDestroyed) {
            return;
        }
        instance1.clearDelayTimeouts();
        instance1.unmount();
        removeListeners();
        delete reference._tippy;
        instance1.state.isDestroyed = true;
        invokeHook("onDestroy", [
            instance1
        ]);
    }
}
function tippy(targets, optionalProps) {
    if (optionalProps === void 0) optionalProps = {};
    var plugins = defaultProps.plugins.concat(optionalProps.plugins || []);
    validateTargets(targets);
    validateProps(optionalProps, plugins);
    bindGlobalEventListeners();
    var passedProps = Object.assign({}, optionalProps, {
        plugins: plugins
    });
    var elements = getArrayOfElements(targets);
    var isSingleContentElement = isElement(passedProps.content);
    var isMoreThanOneReferenceElement = elements.length > 1;
    warnWhen(isSingleContentElement && isMoreThanOneReferenceElement, [
        "tippy() was passed an Element as the `content` prop, but more than",
        "one tippy instance was created by this invocation. This means the",
        "content element will only be appended to the last tippy instance.",
        "\n\n",
        "Instead, pass the .innerHTML of the element, or use a function that",
        "returns a cloned version of the element instead.",
        "\n\n",
        "1) content: element.innerHTML\n",
        "2) content: () => element.cloneNode(true)"
    ].join(" "));
    var instances = elements.reduce(function(acc, reference) {
        var instance = reference && createTippy(reference, passedProps);
        if (instance) acc.push(instance);
        return acc;
    }, []);
    return isElement(targets) ? instances[0] : instances;
}
tippy.defaultProps = defaultProps;
tippy.setDefaultProps = setDefaultProps;
tippy.currentInput = currentInput;
var hideAll = function hideAll(_temp) {
    var _ref = _temp === void 0 ? {} : _temp, excludedReferenceOrInstance = _ref.exclude, duration = _ref.duration;
    mountedInstances.forEach(function(instance) {
        var isExcluded = false;
        if (excludedReferenceOrInstance) isExcluded = isReferenceElement(excludedReferenceOrInstance) ? instance.reference === excludedReferenceOrInstance : instance.popper === excludedReferenceOrInstance.popper;
        if (!isExcluded) {
            var originalDuration = instance.props.duration;
            instance.setProps({
                duration: duration
            });
            instance.hide();
            if (!instance.state.isDestroyed) instance.setProps({
                duration: originalDuration
            });
        }
    });
};
// every time the popper is destroyed (i.e. a new target), removing the styles
// and causing transitions to break for singletons when the console is open, but
// most notably for non-transform styles being used, `gpuAcceleration: false`.
var applyStylesModifier = Object.assign({}, (0, _core.applyStyles), {
    effect: function effect(_ref) {
        var state = _ref.state;
        var initialStyles = {
            popper: {
                position: state.options.strategy,
                left: "0",
                top: "0",
                margin: "0"
            },
            arrow: {
                position: "absolute"
            },
            reference: {}
        };
        Object.assign(state.elements.popper.style, initialStyles.popper);
        state.styles = initialStyles;
        if (state.elements.arrow) Object.assign(state.elements.arrow.style, initialStyles.arrow);
         // intentionally return no cleanup function
    // return () => { ... }
    }
});
var createSingleton = function createSingleton(tippyInstances, optionalProps) {
    var _optionalProps$popper;
    if (optionalProps === void 0) optionalProps = {};
    errorWhen(!Array.isArray(tippyInstances), [
        "The first argument passed to createSingleton() must be an array of",
        "tippy instances. The passed value was",
        String(tippyInstances)
    ].join(" "));
    var individualInstances = tippyInstances;
    var references = [];
    var triggerTargets = [];
    var currentTarget;
    var overrides = optionalProps.overrides;
    var interceptSetPropsCleanups = [];
    var shownOnCreate = false;
    function setTriggerTargets() {
        triggerTargets = individualInstances.map(function(instance) {
            return normalizeToArray(instance.props.triggerTarget || instance.reference);
        }).reduce(function(acc, item) {
            return acc.concat(item);
        }, []);
    }
    function setReferences() {
        references = individualInstances.map(function(instance) {
            return instance.reference;
        });
    }
    function enableInstances(isEnabled) {
        individualInstances.forEach(function(instance) {
            if (isEnabled) instance.enable();
            else instance.disable();
        });
    }
    function interceptSetProps(singleton) {
        return individualInstances.map(function(instance) {
            var originalSetProps = instance.setProps;
            instance.setProps = function(props) {
                originalSetProps(props);
                if (instance.reference === currentTarget) singleton.setProps(props);
            };
            return function() {
                instance.setProps = originalSetProps;
            };
        });
    } // have to pass singleton, as it maybe undefined on first call
    function prepareInstance(singleton, target) {
        var index = triggerTargets.indexOf(target); // bail-out
        if (target === currentTarget) return;
        currentTarget = target;
        var overrideProps = (overrides || []).concat("content").reduce(function(acc, prop) {
            acc[prop] = individualInstances[index].props[prop];
            return acc;
        }, {});
        singleton.setProps(Object.assign({}, overrideProps, {
            getReferenceClientRect: typeof overrideProps.getReferenceClientRect === "function" ? overrideProps.getReferenceClientRect : function() {
                var _references$index;
                return (_references$index = references[index]) == null ? void 0 : _references$index.getBoundingClientRect();
            }
        }));
    }
    enableInstances(false);
    setReferences();
    setTriggerTargets();
    var plugin = {
        fn: function fn() {
            return {
                onDestroy: function onDestroy() {
                    enableInstances(true);
                },
                onHidden: function onHidden() {
                    currentTarget = null;
                },
                onClickOutside: function onClickOutside(instance) {
                    if (instance.props.showOnCreate && !shownOnCreate) {
                        shownOnCreate = true;
                        currentTarget = null;
                    }
                },
                onShow: function onShow(instance) {
                    if (instance.props.showOnCreate && !shownOnCreate) {
                        shownOnCreate = true;
                        prepareInstance(instance, references[0]);
                    }
                },
                onTrigger: function onTrigger(instance, event) {
                    prepareInstance(instance, event.currentTarget);
                }
            };
        }
    };
    var singleton1 = tippy(div(), Object.assign({}, removeProperties(optionalProps, [
        "overrides"
    ]), {
        plugins: [
            plugin
        ].concat(optionalProps.plugins || []),
        triggerTarget: triggerTargets,
        popperOptions: Object.assign({}, optionalProps.popperOptions, {
            modifiers: [].concat(((_optionalProps$popper = optionalProps.popperOptions) == null ? void 0 : _optionalProps$popper.modifiers) || [], [
                applyStylesModifier
            ])
        })
    }));
    var originalShow = singleton1.show;
    singleton1.show = function(target) {
        originalShow(); // first time, showOnCreate or programmatic call with no params
        // default to showing first instance
        if (!currentTarget && target == null) return prepareInstance(singleton1, references[0]);
         // triggered from event (do nothing as prepareInstance already called by onTrigger)
        // programmatic call with no params when already visible (do nothing again)
        if (currentTarget && target == null) return;
         // target is index of instance
        if (typeof target === "number") return references[target] && prepareInstance(singleton1, references[target]);
         // target is a child tippy instance
        if (individualInstances.indexOf(target) >= 0) {
            var ref = target.reference;
            return prepareInstance(singleton1, ref);
        } // target is a ReferenceElement
        if (references.indexOf(target) >= 0) return prepareInstance(singleton1, target);
    };
    singleton1.showNext = function() {
        var first = references[0];
        if (!currentTarget) return singleton1.show(0);
        var index = references.indexOf(currentTarget);
        singleton1.show(references[index + 1] || first);
    };
    singleton1.showPrevious = function() {
        var last = references[references.length - 1];
        if (!currentTarget) return singleton1.show(last);
        var index = references.indexOf(currentTarget);
        var target = references[index - 1] || last;
        singleton1.show(target);
    };
    var originalSetProps1 = singleton1.setProps;
    singleton1.setProps = function(props) {
        overrides = props.overrides || overrides;
        originalSetProps1(props);
    };
    singleton1.setInstances = function(nextInstances) {
        enableInstances(true);
        interceptSetPropsCleanups.forEach(function(fn) {
            return fn();
        });
        individualInstances = nextInstances;
        enableInstances(false);
        setReferences();
        setTriggerTargets();
        interceptSetPropsCleanups = interceptSetProps(singleton1);
        singleton1.setProps({
            triggerTarget: triggerTargets
        });
    };
    interceptSetPropsCleanups = interceptSetProps(singleton1);
    return singleton1;
};
var BUBBLING_EVENTS_MAP = {
    mouseover: "mouseenter",
    focusin: "focus",
    click: "click"
};
/**
 * Creates a delegate instance that controls the creation of tippy instances
 * for child elements (`target` CSS selector).
 */ function delegate(targets, props) {
    errorWhen(!(props && props.target), [
        "You must specity a `target` prop indicating a CSS selector string matching",
        "the target elements that should receive a tippy."
    ].join(" "));
    var listeners = [];
    var childTippyInstances = [];
    var disabled = false;
    var target = props.target;
    var nativeProps = removeProperties(props, [
        "target"
    ]);
    var parentProps = Object.assign({}, nativeProps, {
        trigger: "manual",
        touch: false
    });
    var childProps = Object.assign({
        touch: defaultProps.touch
    }, nativeProps, {
        showOnCreate: true
    });
    var returnValue = tippy(targets, parentProps);
    var normalizedReturnValue = normalizeToArray(returnValue);
    function onTrigger(event) {
        if (!event.target || disabled) return;
        var targetNode = event.target.closest(target);
        if (!targetNode) return;
         // Get relevant trigger with fallbacks:
        // 1. Check `data-tippy-trigger` attribute on target node
        // 2. Fallback to `trigger` passed to `delegate()`
        // 3. Fallback to `defaultProps.trigger`
        var trigger = targetNode.getAttribute("data-tippy-trigger") || props.trigger || defaultProps.trigger; // @ts-ignore
        if (targetNode._tippy) return;
        if (event.type === "touchstart" && typeof childProps.touch === "boolean") return;
        if (event.type !== "touchstart" && trigger.indexOf(BUBBLING_EVENTS_MAP[event.type]) < 0) return;
        var instance = tippy(targetNode, childProps);
        if (instance) childTippyInstances = childTippyInstances.concat(instance);
    }
    function on(node, eventType, handler, options) {
        if (options === void 0) options = false;
        node.addEventListener(eventType, handler, options);
        listeners.push({
            node: node,
            eventType: eventType,
            handler: handler,
            options: options
        });
    }
    function addEventListeners(instance) {
        var reference = instance.reference;
        on(reference, "touchstart", onTrigger, TOUCH_OPTIONS);
        on(reference, "mouseover", onTrigger);
        on(reference, "focusin", onTrigger);
        on(reference, "click", onTrigger);
    }
    function removeEventListeners() {
        listeners.forEach(function(_ref) {
            var node = _ref.node, eventType = _ref.eventType, handler = _ref.handler, options = _ref.options;
            node.removeEventListener(eventType, handler, options);
        });
        listeners = [];
    }
    function applyMutations(instance2) {
        var originalDestroy = instance2.destroy;
        var originalEnable = instance2.enable;
        var originalDisable = instance2.disable;
        instance2.destroy = function(shouldDestroyChildInstances) {
            if (shouldDestroyChildInstances === void 0) shouldDestroyChildInstances = true;
            if (shouldDestroyChildInstances) childTippyInstances.forEach(function(instance) {
                instance.destroy();
            });
            childTippyInstances = [];
            removeEventListeners();
            originalDestroy();
        };
        instance2.enable = function() {
            originalEnable();
            childTippyInstances.forEach(function(instance) {
                return instance.enable();
            });
            disabled = false;
        };
        instance2.disable = function() {
            originalDisable();
            childTippyInstances.forEach(function(instance) {
                return instance.disable();
            });
            disabled = true;
        };
        addEventListeners(instance2);
    }
    normalizedReturnValue.forEach(applyMutations);
    return returnValue;
}
var animateFill = {
    name: "animateFill",
    defaultValue: false,
    fn: function fn(instance) {
        var _instance$props$rende;
        // @ts-ignore
        if (!((_instance$props$rende = instance.props.render) != null && _instance$props$rende.$$tippy)) {
            errorWhen(instance.props.animateFill, "The `animateFill` plugin requires the default render function.");
            return {};
        }
        var _getChildren = getChildren(instance.popper), box = _getChildren.box, content = _getChildren.content;
        var backdrop = instance.props.animateFill ? createBackdropElement() : null;
        return {
            onCreate: function onCreate() {
                if (backdrop) {
                    box.insertBefore(backdrop, box.firstElementChild);
                    box.setAttribute("data-animatefill", "");
                    box.style.overflow = "hidden";
                    instance.setProps({
                        arrow: false,
                        animation: "shift-away"
                    });
                }
            },
            onMount: function onMount() {
                if (backdrop) {
                    var transitionDuration = box.style.transitionDuration;
                    var duration = Number(transitionDuration.replace("ms", "")); // The content should fade in after the backdrop has mostly filled the
                    // tooltip element. `clip-path` is the other alternative but is not
                    // well-supported and is buggy on some devices.
                    content.style.transitionDelay = Math.round(duration / 10) + "ms";
                    backdrop.style.transitionDuration = transitionDuration;
                    setVisibilityState([
                        backdrop
                    ], "visible");
                }
            },
            onShow: function onShow() {
                if (backdrop) backdrop.style.transitionDuration = "0ms";
            },
            onHide: function onHide() {
                if (backdrop) setVisibilityState([
                    backdrop
                ], "hidden");
            }
        };
    }
};
function createBackdropElement() {
    var backdrop = div();
    backdrop.className = BACKDROP_CLASS;
    setVisibilityState([
        backdrop
    ], "hidden");
    return backdrop;
}
var mouseCoords = {
    clientX: 0,
    clientY: 0
};
var activeInstances = [];
function storeMouseCoords(_ref) {
    var clientX = _ref.clientX, clientY = _ref.clientY;
    mouseCoords = {
        clientX: clientX,
        clientY: clientY
    };
}
function addMouseCoordsListener(doc) {
    doc.addEventListener("mousemove", storeMouseCoords);
}
function removeMouseCoordsListener(doc) {
    doc.removeEventListener("mousemove", storeMouseCoords);
}
var followCursor = {
    name: "followCursor",
    defaultValue: false,
    fn: function fn(instance) {
        var reference = instance.reference;
        var doc = getOwnerDocument(instance.props.triggerTarget || reference);
        var isInternalUpdate = false;
        var wasFocusEvent = false;
        var isUnmounted = true;
        var prevProps = instance.props;
        function getIsInitialBehavior() {
            return instance.props.followCursor === "initial" && instance.state.isVisible;
        }
        function addListener() {
            doc.addEventListener("mousemove", onMouseMove);
        }
        function removeListener() {
            doc.removeEventListener("mousemove", onMouseMove);
        }
        function unsetGetReferenceClientRect() {
            isInternalUpdate = true;
            instance.setProps({
                getReferenceClientRect: null
            });
            isInternalUpdate = false;
        }
        function onMouseMove(event) {
            // If the instance is interactive, avoid updating the position unless it's
            // over the reference element
            var isCursorOverReference = event.target ? reference.contains(event.target) : true;
            var followCursor1 = instance.props.followCursor;
            var clientX = event.clientX, clientY = event.clientY;
            var rect1 = reference.getBoundingClientRect();
            var relativeX = clientX - rect1.left;
            var relativeY = clientY - rect1.top;
            if (isCursorOverReference || !instance.props.interactive) instance.setProps({
                // @ts-ignore - unneeded DOMRect properties
                getReferenceClientRect: function getReferenceClientRect() {
                    var rect = reference.getBoundingClientRect();
                    var x = clientX;
                    var y = clientY;
                    if (followCursor1 === "initial") {
                        x = rect.left + relativeX;
                        y = rect.top + relativeY;
                    }
                    var top = followCursor1 === "horizontal" ? rect.top : y;
                    var right = followCursor1 === "vertical" ? rect.right : x;
                    var bottom = followCursor1 === "horizontal" ? rect.bottom : y;
                    var left = followCursor1 === "vertical" ? rect.left : x;
                    return {
                        width: right - left,
                        height: bottom - top,
                        top: top,
                        right: right,
                        bottom: bottom,
                        left: left
                    };
                }
            });
        }
        function create() {
            if (instance.props.followCursor) {
                activeInstances.push({
                    instance: instance,
                    doc: doc
                });
                addMouseCoordsListener(doc);
            }
        }
        function destroy() {
            activeInstances = activeInstances.filter(function(data) {
                return data.instance !== instance;
            });
            if (activeInstances.filter(function(data) {
                return data.doc === doc;
            }).length === 0) removeMouseCoordsListener(doc);
        }
        return {
            onCreate: create,
            onDestroy: destroy,
            onBeforeUpdate: function onBeforeUpdate() {
                prevProps = instance.props;
            },
            onAfterUpdate: function onAfterUpdate(_, _ref2) {
                var followCursor2 = _ref2.followCursor;
                if (isInternalUpdate) return;
                if (followCursor2 !== undefined && prevProps.followCursor !== followCursor2) {
                    destroy();
                    if (followCursor2) {
                        create();
                        if (instance.state.isMounted && !wasFocusEvent && !getIsInitialBehavior()) addListener();
                    } else {
                        removeListener();
                        unsetGetReferenceClientRect();
                    }
                }
            },
            onMount: function onMount() {
                if (instance.props.followCursor && !wasFocusEvent) {
                    if (isUnmounted) {
                        onMouseMove(mouseCoords);
                        isUnmounted = false;
                    }
                    if (!getIsInitialBehavior()) addListener();
                }
            },
            onTrigger: function onTrigger(_, event) {
                if (isMouseEvent(event)) mouseCoords = {
                    clientX: event.clientX,
                    clientY: event.clientY
                };
                wasFocusEvent = event.type === "focus";
            },
            onHidden: function onHidden() {
                if (instance.props.followCursor) {
                    unsetGetReferenceClientRect();
                    removeListener();
                    isUnmounted = true;
                }
            }
        };
    }
};
function getProps(props, modifier) {
    var _props$popperOptions;
    return {
        popperOptions: Object.assign({}, props.popperOptions, {
            modifiers: [].concat((((_props$popperOptions = props.popperOptions) == null ? void 0 : _props$popperOptions.modifiers) || []).filter(function(_ref) {
                var name = _ref.name;
                return name !== modifier.name;
            }), [
                modifier
            ])
        })
    };
}
var inlinePositioning = {
    name: "inlinePositioning",
    defaultValue: false,
    fn: function fn(instance) {
        var reference = instance.reference;
        function isEnabled() {
            return !!instance.props.inlinePositioning;
        }
        var placement1;
        var cursorRectIndex = -1;
        var isInternalUpdate = false;
        var triedPlacements = [];
        var modifier = {
            name: "tippyInlinePositioning",
            enabled: true,
            phase: "afterWrite",
            fn: function fn(_ref2) {
                var state = _ref2.state;
                if (isEnabled()) {
                    if (triedPlacements.indexOf(state.placement) !== -1) triedPlacements = [];
                    if (placement1 !== state.placement && triedPlacements.indexOf(state.placement) === -1) {
                        triedPlacements.push(state.placement);
                        instance.setProps({
                            // @ts-ignore - unneeded DOMRect properties
                            getReferenceClientRect: function getReferenceClientRect() {
                                return _getReferenceClientRect(state.placement);
                            }
                        });
                    }
                    placement1 = state.placement;
                }
            }
        };
        function _getReferenceClientRect(placement) {
            return getInlineBoundingClientRect(getBasePlacement(placement), reference.getBoundingClientRect(), arrayFrom(reference.getClientRects()), cursorRectIndex);
        }
        function setInternalProps(partialProps) {
            isInternalUpdate = true;
            instance.setProps(partialProps);
            isInternalUpdate = false;
        }
        function addModifier() {
            if (!isInternalUpdate) setInternalProps(getProps(instance.props, modifier));
        }
        return {
            onCreate: addModifier,
            onAfterUpdate: addModifier,
            onTrigger: function onTrigger(_, event) {
                if (isMouseEvent(event)) {
                    var rects = arrayFrom(instance.reference.getClientRects());
                    var cursorRect = rects.find(function(rect) {
                        return rect.left - 2 <= event.clientX && rect.right + 2 >= event.clientX && rect.top - 2 <= event.clientY && rect.bottom + 2 >= event.clientY;
                    });
                    var index = rects.indexOf(cursorRect);
                    cursorRectIndex = index > -1 ? index : cursorRectIndex;
                }
            },
            onHidden: function onHidden() {
                cursorRectIndex = -1;
            }
        };
    }
};
function getInlineBoundingClientRect(currentBasePlacement, boundingRect, clientRects, cursorRectIndex) {
    // Not an inline element, or placement is not yet known
    if (clientRects.length < 2 || currentBasePlacement === null) return boundingRect;
     // There are two rects and they are disjoined
    if (clientRects.length === 2 && cursorRectIndex >= 0 && clientRects[0].left > clientRects[1].right) return clientRects[cursorRectIndex] || boundingRect;
    switch(currentBasePlacement){
        case "top":
        case "bottom":
            var firstRect = clientRects[0];
            var lastRect = clientRects[clientRects.length - 1];
            var isTop = currentBasePlacement === "top";
            var top = firstRect.top;
            var bottom = lastRect.bottom;
            var left = isTop ? firstRect.left : lastRect.left;
            var right = isTop ? firstRect.right : lastRect.right;
            var width = right - left;
            var height = bottom - top;
            return {
                top: top,
                bottom: bottom,
                left: left,
                right: right,
                width: width,
                height: height
            };
        case "left":
        case "right":
            var minLeft = Math.min.apply(Math, clientRects.map(function(rects) {
                return rects.left;
            }));
            var maxRight = Math.max.apply(Math, clientRects.map(function(rects) {
                return rects.right;
            }));
            var measureRects = clientRects.filter(function(rect) {
                return currentBasePlacement === "left" ? rect.left === minLeft : rect.right === maxRight;
            });
            var _top = measureRects[0].top;
            var _bottom = measureRects[measureRects.length - 1].bottom;
            var _left = minLeft;
            var _right = maxRight;
            var _width = _right - _left;
            var _height = _bottom - _top;
            return {
                top: _top,
                bottom: _bottom,
                left: _left,
                right: _right,
                width: _width,
                height: _height
            };
        default:
            return boundingRect;
    }
}
var sticky = {
    name: "sticky",
    defaultValue: false,
    fn: function fn(instance) {
        var reference = instance.reference, popper = instance.popper;
        function getReference() {
            return instance.popperInstance ? instance.popperInstance.state.elements.reference : reference;
        }
        function shouldCheck(value) {
            return instance.props.sticky === true || instance.props.sticky === value;
        }
        var prevRefRect = null;
        var prevPopRect = null;
        function updatePosition() {
            var currentRefRect = shouldCheck("reference") ? getReference().getBoundingClientRect() : null;
            var currentPopRect = shouldCheck("popper") ? popper.getBoundingClientRect() : null;
            if (currentRefRect && areRectsDifferent(prevRefRect, currentRefRect) || currentPopRect && areRectsDifferent(prevPopRect, currentPopRect)) {
                if (instance.popperInstance) instance.popperInstance.update();
            }
            prevRefRect = currentRefRect;
            prevPopRect = currentPopRect;
            if (instance.state.isMounted) requestAnimationFrame(updatePosition);
        }
        return {
            onMount: function onMount() {
                if (instance.props.sticky) updatePosition();
            }
        };
    }
};
function areRectsDifferent(rectA, rectB) {
    if (rectA && rectB) return rectA.top !== rectB.top || rectA.right !== rectB.right || rectA.bottom !== rectB.bottom || rectA.left !== rectB.left;
    return true;
}
tippy.setDefaultProps({
    render: render
});
exports.default = tippy;

},{"@popperjs/core":"9hiy9","@parcel/transformer-js/src/esmodule-helpers.js":"boKlo"}],"9hiy9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "popperGenerator", ()=>(0, _createPopperJs.popperGenerator)) // eslint-disable-next-line import/no-unused-modules
;
parcelHelpers.export(exports, "detectOverflow", ()=>(0, _createPopperJs.detectOverflow));
parcelHelpers.export(exports, "createPopperBase", ()=>(0, _createPopperJs.createPopper));
parcelHelpers.export(exports, "createPopper", ()=>(0, _popperJs.createPopper)) // eslint-disable-next-line import/no-unused-modules
;
parcelHelpers.export(exports, "createPopperLite", ()=>(0, _popperLiteJs.createPopper));
var _enumsJs = require("./enums.js");
parcelHelpers.exportAll(_enumsJs, exports);
var _indexJs = require("./modifiers/index.js"); // eslint-disable-next-line import/no-unused-modules
parcelHelpers.exportAll(_indexJs, exports);
var _createPopperJs = require("./createPopper.js");
var _popperJs = require("./popper.js");
var _popperLiteJs = require("./popper-lite.js");

},{"./enums.js":"e9s7y","./modifiers/index.js":"2dCOw","./createPopper.js":"dNHHN","./popper.js":"hCHGX","./popper-lite.js":false,"@parcel/transformer-js/src/esmodule-helpers.js":"boKlo"}],"e9s7y":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "top", ()=>top);
parcelHelpers.export(exports, "bottom", ()=>bottom);
parcelHelpers.export(exports, "right", ()=>right);
parcelHelpers.export(exports, "left", ()=>left);
parcelHelpers.export(exports, "auto", ()=>auto);
parcelHelpers.export(exports, "basePlacements", ()=>basePlacements);
parcelHelpers.export(exports, "start", ()=>start);
parcelHelpers.export(exports, "end", ()=>end);
parcelHelpers.export(exports, "clippingParents", ()=>clippingParents);
parcelHelpers.export(exports, "viewport", ()=>viewport);
parcelHelpers.export(exports, "popper", ()=>popper);
parcelHelpers.export(exports, "reference", ()=>reference);
parcelHelpers.export(exports, "variationPlacements", ()=>variationPlacements);
parcelHelpers.export(exports, "placements", ()=>placements);
parcelHelpers.export(exports, "beforeRead", ()=>beforeRead);
parcelHelpers.export(exports, "read", ()=>read);
parcelHelpers.export(exports, "afterRead", ()=>afterRead);
parcelHelpers.export(exports, "beforeMain", ()=>beforeMain);
parcelHelpers.export(exports, "main", ()=>main);
parcelHelpers.export(exports, "afterMain", ()=>afterMain);
parcelHelpers.export(exports, "beforeWrite", ()=>beforeWrite);
parcelHelpers.export(exports, "write", ()=>write);
parcelHelpers.export(exports, "afterWrite", ()=>afterWrite);
parcelHelpers.export(exports, "modifierPhases", ()=>modifierPhases);
var top = "top";
var bottom = "bottom";
var right = "right";
var left = "left";
var auto = "auto";
var basePlacements = [
    top,
    bottom,
    right,
    left
];
var start = "start";
var end = "end";
var clippingParents = "clippingParents";
var viewport = "viewport";
var popper = "popper";
var reference = "reference";
var variationPlacements = /*#__PURE__*/ basePlacements.reduce(function(acc, placement) {
    return acc.concat([
        placement + "-" + start,
        placement + "-" + end
    ]);
}, []);
var placements = /*#__PURE__*/ [].concat(basePlacements, [
    auto
]).reduce(function(acc, placement) {
    return acc.concat([
        placement,
        placement + "-" + start,
        placement + "-" + end
    ]);
}, []); // modifiers that need to read the DOM
var beforeRead = "beforeRead";
var read = "read";
var afterRead = "afterRead"; // pure-logic modifiers
var beforeMain = "beforeMain";
var main = "main";
var afterMain = "afterMain"; // modifier with the purpose to write to the DOM (or write into a framework state)
var beforeWrite = "beforeWrite";
var write = "write";
var afterWrite = "afterWrite";
var modifierPhases = [
    beforeRead,
    read,
    afterRead,
    beforeMain,
    main,
    afterMain,
    beforeWrite,
    write,
    afterWrite
];

},{"@parcel/transformer-js/src/esmodule-helpers.js":"boKlo"}],"boKlo":[function(require,module,exports) {
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

},{}],"2dCOw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "applyStyles", ()=>(0, _applyStylesJsDefault.default));
parcelHelpers.export(exports, "arrow", ()=>(0, _arrowJsDefault.default));
parcelHelpers.export(exports, "computeStyles", ()=>(0, _computeStylesJsDefault.default));
parcelHelpers.export(exports, "eventListeners", ()=>(0, _eventListenersJsDefault.default));
parcelHelpers.export(exports, "flip", ()=>(0, _flipJsDefault.default));
parcelHelpers.export(exports, "hide", ()=>(0, _hideJsDefault.default));
parcelHelpers.export(exports, "offset", ()=>(0, _offsetJsDefault.default));
parcelHelpers.export(exports, "popperOffsets", ()=>(0, _popperOffsetsJsDefault.default));
parcelHelpers.export(exports, "preventOverflow", ()=>(0, _preventOverflowJsDefault.default));
var _applyStylesJs = require("./applyStyles.js");
var _applyStylesJsDefault = parcelHelpers.interopDefault(_applyStylesJs);
var _arrowJs = require("./arrow.js");
var _arrowJsDefault = parcelHelpers.interopDefault(_arrowJs);
var _computeStylesJs = require("./computeStyles.js");
var _computeStylesJsDefault = parcelHelpers.interopDefault(_computeStylesJs);
var _eventListenersJs = require("./eventListeners.js");
var _eventListenersJsDefault = parcelHelpers.interopDefault(_eventListenersJs);
var _flipJs = require("./flip.js");
var _flipJsDefault = parcelHelpers.interopDefault(_flipJs);
var _hideJs = require("./hide.js");
var _hideJsDefault = parcelHelpers.interopDefault(_hideJs);
var _offsetJs = require("./offset.js");
var _offsetJsDefault = parcelHelpers.interopDefault(_offsetJs);
var _popperOffsetsJs = require("./popperOffsets.js");
var _popperOffsetsJsDefault = parcelHelpers.interopDefault(_popperOffsetsJs);
var _preventOverflowJs = require("./preventOverflow.js");
var _preventOverflowJsDefault = parcelHelpers.interopDefault(_preventOverflowJs);

},{"./applyStyles.js":"fKaVm","./arrow.js":"bpkna","./computeStyles.js":"4p01Q","./eventListeners.js":"dtJWQ","./flip.js":"igbXP","./hide.js":"gwjAn","./offset.js":"lCHOt","./popperOffsets.js":"j33sS","./preventOverflow.js":"dSh6X","@parcel/transformer-js/src/esmodule-helpers.js":"boKlo"}],"fKaVm":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getNodeNameJs = require("../dom-utils/getNodeName.js");
var _getNodeNameJsDefault = parcelHelpers.interopDefault(_getNodeNameJs);
var _instanceOfJs = require("../dom-utils/instanceOf.js"); // This modifier takes the styles prepared by the `computeStyles` modifier
// and applies them to the HTMLElements such as popper and arrow
function applyStyles(_ref) {
    var state = _ref.state;
    Object.keys(state.elements).forEach(function(name1) {
        var style = state.styles[name1] || {};
        var attributes = state.attributes[name1] || {};
        var element = state.elements[name1]; // arrow is optional + virtual elements
        if (!(0, _instanceOfJs.isHTMLElement)(element) || !(0, _getNodeNameJsDefault.default)(element)) return;
         // Flow doesn't support to extend this property, but it's the most
        // effective way to apply styles to an HTMLElement
        // $FlowFixMe[cannot-write]
        Object.assign(element.style, style);
        Object.keys(attributes).forEach(function(name) {
            var value = attributes[name];
            if (value === false) element.removeAttribute(name);
            else element.setAttribute(name, value === true ? "" : value);
        });
    });
}
function effect(_ref2) {
    var state = _ref2.state;
    var initialStyles = {
        popper: {
            position: state.options.strategy,
            left: "0",
            top: "0",
            margin: "0"
        },
        arrow: {
            position: "absolute"
        },
        reference: {}
    };
    Object.assign(state.elements.popper.style, initialStyles.popper);
    state.styles = initialStyles;
    if (state.elements.arrow) Object.assign(state.elements.arrow.style, initialStyles.arrow);
    return function() {
        Object.keys(state.elements).forEach(function(name) {
            var element = state.elements[name];
            var attributes = state.attributes[name] || {};
            var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]); // Set all values to an empty string to unset them
            var style1 = styleProperties.reduce(function(style, property) {
                style[property] = "";
                return style;
            }, {}); // arrow is optional + virtual elements
            if (!(0, _instanceOfJs.isHTMLElement)(element) || !(0, _getNodeNameJsDefault.default)(element)) return;
            Object.assign(element.style, style1);
            Object.keys(attributes).forEach(function(attribute) {
                element.removeAttribute(attribute);
            });
        });
    };
} // eslint-disable-next-line import/no-unused-modules
exports.default = {
    name: "applyStyles",
    enabled: true,
    phase: "write",
    fn: applyStyles,
    effect: effect,
    requires: [
        "computeStyles"
    ]
};

},{"../dom-utils/getNodeName.js":"7waoK","../dom-utils/instanceOf.js":"gKrwR","@parcel/transformer-js/src/esmodule-helpers.js":"boKlo"}],"7waoK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function getNodeName(element) {
    return element ? (element.nodeName || "").toLowerCase() : null;
}
exports.default = getNodeName;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"boKlo"}],"gKrwR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isElement", ()=>isElement);
parcelHelpers.export(exports, "isHTMLElement", ()=>isHTMLElement);
parcelHelpers.export(exports, "isShadowRoot", ()=>isShadowRoot);
var _getWindowJs = require("./getWindow.js");
var _getWindowJsDefault = parcelHelpers.interopDefault(_getWindowJs);
function isElement(node) {
    var OwnElement = (0, _getWindowJsDefault.default)(node).Element;
    return node instanceof OwnElement || node instanceof Element;
}
function isHTMLElement(node) {
    var OwnElement = (0, _getWindowJsDefault.default)(node).HTMLElement;
    return node instanceof OwnElement || node instanceof HTMLElement;
}
function isShadowRoot(node) {
    // IE 11 has no ShadowRoot
    if (typeof ShadowRoot === "undefined") return false;
    var OwnElement = (0, _getWindowJsDefault.default)(node).ShadowRoot;
    return node instanceof OwnElement || node instanceof ShadowRoot;
}

},{"./getWindow.js":"6mER2","@parcel/transformer-js/src/esmodule-helpers.js":"boKlo"}],"6mER2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function getWindow(node) {
    if (node == null) return window;
    if (node.toString() !== "[object Window]") {
        var ownerDocument = node.ownerDocument;
        return ownerDocument ? ownerDocument.defaultView || window : window;
    }
    return node;
}
exports.default = getWindow;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"boKlo"}],"bpkna":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getBasePlacementJs = require("../utils/getBasePlacement.js");
var _getBasePlacementJsDefault = parcelHelpers.interopDefault(_getBasePlacementJs);
var _getLayoutRectJs = require("../dom-utils/getLayoutRect.js");
var _getLayoutRectJsDefault = parcelHelpers.interopDefault(_getLayoutRectJs);
var _containsJs = require("../dom-utils/contains.js");
var _containsJsDefault = parcelHelpers.interopDefault(_containsJs);
var _getOffsetParentJs = require("../dom-utils/getOffsetParent.js");
var _getOffsetParentJsDefault = parcelHelpers.interopDefault(_getOffsetParentJs);
var _getMainAxisFromPlacementJs = require("../utils/getMainAxisFromPlacement.js");
var _getMainAxisFromPlacementJsDefault = parcelHelpers.interopDefault(_getMainAxisFromPlacementJs);
var _withinJs = require("../utils/within.js");
var _mergePaddingObjectJs = require("../utils/mergePaddingObject.js");
var _mergePaddingObjectJsDefault = parcelHelpers.interopDefault(_mergePaddingObjectJs);
var _expandToHashMapJs = require("../utils/expandToHashMap.js");
var _expandToHashMapJsDefault = parcelHelpers.interopDefault(_expandToHashMapJs);
var _enumsJs = require("../enums.js");
var _instanceOfJs = require("../dom-utils/instanceOf.js"); // eslint-disable-next-line import/no-unused-modules
var toPaddingObject = function toPaddingObject(padding, state) {
    padding = typeof padding === "function" ? padding(Object.assign({}, state.rects, {
        placement: state.placement
    })) : padding;
    return (0, _mergePaddingObjectJsDefault.default)(typeof padding !== "number" ? padding : (0, _expandToHashMapJsDefault.default)(padding, (0, _enumsJs.basePlacements)));
};
function arrow(_ref) {
    var _state$modifiersData$;
    var state = _ref.state, name = _ref.name, options = _ref.options;
    var arrowElement = state.elements.arrow;
    var popperOffsets = state.modifiersData.popperOffsets;
    var basePlacement = (0, _getBasePlacementJsDefault.default)(state.placement);
    var axis = (0, _getMainAxisFromPlacementJsDefault.default)(basePlacement);
    var isVertical = [
        (0, _enumsJs.left),
        (0, _enumsJs.right)
    ].indexOf(basePlacement) >= 0;
    var len = isVertical ? "height" : "width";
    if (!arrowElement || !popperOffsets) return;
    var paddingObject = toPaddingObject(options.padding, state);
    var arrowRect = (0, _getLayoutRectJsDefault.default)(arrowElement);
    var minProp = axis === "y" ? (0, _enumsJs.top) : (0, _enumsJs.left);
    var maxProp = axis === "y" ? (0, _enumsJs.bottom) : (0, _enumsJs.right);
    var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets[axis] - state.rects.popper[len];
    var startDiff = popperOffsets[axis] - state.rects.reference[axis];
    var arrowOffsetParent = (0, _getOffsetParentJsDefault.default)(arrowElement);
    var clientSize = arrowOffsetParent ? axis === "y" ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
    var centerToReference = endDiff / 2 - startDiff / 2; // Make sure the arrow doesn't overflow the popper if the center point is
    // outside of the popper bounds
    var min = paddingObject[minProp];
    var max = clientSize - arrowRect[len] - paddingObject[maxProp];
    var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
    var offset = (0, _withinJs.within)(min, center, max); // Prevents breaking syntax highlighting...
    var axisProp = axis;
    state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset, _state$modifiersData$.centerOffset = offset - center, _state$modifiersData$);
}
function effect(_ref2) {
    var state = _ref2.state, options = _ref2.options;
    var _options$element = options.element, arrowElement = _options$element === void 0 ? "[data-popper-arrow]" : _options$element;
    if (arrowElement == null) return;
     // CSS selector
    if (typeof arrowElement === "string") {
        arrowElement = state.elements.popper.querySelector(arrowElement);
        if (!arrowElement) return;
    }
    if (!(0, _instanceOfJs.isHTMLElement)(arrowElement)) console.error([
        'Popper: "arrow" element must be an HTMLElement (not an SVGElement).',
        "To use an SVG arrow, wrap it in an HTMLElement that will be used as",
        "the arrow."
    ].join(" "));
    if (!(0, _containsJsDefault.default)(state.elements.popper, arrowElement)) {
        console.error([
            'Popper: "arrow" modifier\'s `element` must be a child of the popper',
            "element."
        ].join(" "));
        return;
    }
    state.elements.arrow = arrowElement;
} // eslint-disable-next-line import/no-unused-modules
exports.default = {
    name: "arrow",
    enabled: true,
    phase: "main",
    fn: arrow,
    effect: effect,
    requires: [
        "popperOffsets"
    ],
    requiresIfExists: [
        "preventOverflow"
    ]
};

},{"../utils/getBasePlacement.js":"lDcir","../dom-utils/getLayoutRect.js":"6FFHP","../dom-utils/contains.js":"jh4QG","../dom-utils/getOffsetParent.js":"lWkJl","../utils/getMainAxisFromPlacement.js":"3hI8e","../utils/within.js":"cHZSC","../utils/mergePaddingObject.js":"1EMkY","../utils/expandToHashMap.js":"k0tbp","../enums.js":"e9s7y","../dom-utils/instanceOf.js":"gKrwR","@parcel/transformer-js/src/esmodule-helpers.js":"boKlo"}],"lDcir":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _enumsJs = require("../enums.js");
function getBasePlacement(placement) {
    return placement.split("-")[0];
}
exports.default = getBasePlacement;

},{"../enums.js":"e9s7y","@parcel/transformer-js/src/esmodule-helpers.js":"boKlo"}],"6FFHP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getBoundingClientRectJs = require("./getBoundingClientRect.js"); // Returns the layout rect of an element relative to its offsetParent. Layout
var _getBoundingClientRectJsDefault = parcelHelpers.interopDefault(_getBoundingClientRectJs);
function getLayoutRect(element) {
    var clientRect = (0, _getBoundingClientRectJsDefault.default)(element); // Use the clientRect sizes if it's not been transformed.
    // Fixes https://github.com/popperjs/popper-core/issues/1223
    var width = element.offsetWidth;
    var height = element.offsetHeight;
    if (Math.abs(clientRect.width - width) <= 1) width = clientRect.width;
    if (Math.abs(clientRect.height - height) <= 1) height = clientRect.height;
    return {
        x: element.offsetLeft,
        y: element.offsetTop,
        width: width,
        height: height
    };
}
exports.default = getLayoutRect;

},{"./getBoundingClientRect.js":"15x8t","@parcel/transformer-js/src/esmodule-helpers.js":"boKlo"}],"15x8t":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _instanceOfJs = require("./instanceOf.js");
var _mathJs = require("../utils/math.js");
function getBoundingClientRect(element, includeScale) {
    if (includeScale === void 0) includeScale = false;
    var rect = element.getBoundingClientRect();
    var scaleX = 1;
    var scaleY = 1;
    if ((0, _instanceOfJs.isHTMLElement)(element) && includeScale) {
        var offsetHeight = element.offsetHeight;
        var offsetWidth = element.offsetWidth; // Do not attempt to divide by 0, otherwise we get `Infinity` as scale
        // Fallback to 1 in case both values are `0`
        if (offsetWidth > 0) scaleX = (0, _mathJs.round)(rect.width) / offsetWidth || 1;
        if (offsetHeight > 0) scaleY = (0, _mathJs.round)(rect.height) / offsetHeight || 1;
    }
    return {
        width: rect.width / scaleX,
        height: rect.height / scaleY,
        top: rect.top / scaleY,
        right: rect.right / scaleX,
        bottom: rect.bottom / scaleY,
        left: rect.left / scaleX,
        x: rect.left / scaleX,
        y: rect.top / scaleY
    };
}
exports.default = getBoundingClientRect;

},{"./instanceOf.js":"gKrwR","../utils/math.js":"h98n4","@parcel/transformer-js/src/esmodule-helpers.js":"boKlo"}],"h98n4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "max", ()=>max);
parcelHelpers.export(exports, "min", ()=>min);
parcelHelpers.export(exports, "round", ()=>round);
var max = Math.max;
var min = Math.min;
var round = Math.round;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"boKlo"}],"jh4QG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _instanceOfJs = require("./instanceOf.js");
function contains(parent, child) {
    var rootNode = child.getRootNode && child.getRootNode(); // First, attempt with faster native method
    if (parent.contains(child)) return true;
    else if (rootNode && (0, _instanceOfJs.isShadowRoot)(rootNode)) {
        var next = child;
        do {
            if (next && parent.isSameNode(next)) return true;
             // $FlowFixMe[prop-missing]: need a better way to handle this...
            next = next.parentNode || next.host;
        }while (next);
    } // Give up, the result is false
    return false;
}
exports.default = contains;

},{"./instanceOf.js":"gKrwR","@parcel/transformer-js/src/esmodule-helpers.js":"boKlo"}],"lWkJl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getWindowJs = require("./getWindow.js");
var _getWindowJsDefault = parcelHelpers.interopDefault(_getWindowJs);
var _getNodeNameJs = require("./getNodeName.js");
var _getNodeNameJsDefault = parcelHelpers.interopDefault(_getNodeNameJs);
var _getComputedStyleJs = require("./getComputedStyle.js");
var _getComputedStyleJsDefault = parcelHelpers.interopDefault(_getComputedStyleJs);
var _instanceOfJs = require("./instanceOf.js");
var _isTableElementJs = require("./isTableElement.js");
var _isTableElementJsDefault = parcelHelpers.interopDefault(_isTableElementJs);
var _getParentNodeJs = require("./getParentNode.js");
var _getParentNodeJsDefault = parcelHelpers.interopDefault(_getParentNodeJs);
function getTrueOffsetParent(element) {
    if (!(0, _instanceOfJs.isHTMLElement)(element) || (0, _getComputedStyleJsDefault.default)(element).position === "fixed") return null;
    return element.offsetParent;
} // `.offsetParent` reports `null` for fixed elements, while absolute elements
// return the containing block
function getContainingBlock(element) {
    var isFirefox = navigator.userAgent.toLowerCase().indexOf("firefox") !== -1;
    var isIE = navigator.userAgent.indexOf("Trident") !== -1;
    if (isIE && (0, _instanceOfJs.isHTMLElement)(element)) {
        // In IE 9, 10 and 11 fixed elements containing block is always established by the viewport
        var elementCss = (0, _getComputedStyleJsDefault.default)(element);
        if (elementCss.position === "fixed") return null;
    }
    var currentNode = (0, _getParentNodeJsDefault.default)(element);
    if ((0, _instanceOfJs.isShadowRoot)(currentNode)) currentNode = currentNode.host;
    while((0, _instanceOfJs.isHTMLElement)(currentNode) && [
        "html",
        "body"
    ].indexOf((0, _getNodeNameJsDefault.default)(currentNode)) < 0){
        var css = (0, _getComputedStyleJsDefault.default)(currentNode); // This is non-exhaustive but covers the most common CSS properties that
        // create a containing block.
        // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block
        if (css.transform !== "none" || css.perspective !== "none" || css.contain === "paint" || [
            "transform",
            "perspective"
        ].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === "filter" || isFirefox && css.filter && css.filter !== "none") return currentNode;
        else currentNode = currentNode.parentNode;
    }
    return null;
} // Gets the closest ancestor positioned element. Handles some edge cases,
function getOffsetParent(element) {
    var window = (0, _getWindowJsDefault.default)(element);
    var offsetParent = getTrueOffsetParent(element);
    while(offsetParent && (0, _isTableElementJsDefault.default)(offsetParent) && (0, _getComputedStyleJsDefault.default)(offsetParent).position === "static")offsetParent = getTrueOffsetParent(offsetParent);
    if (offsetParent && ((0, _getNodeNameJsDefault.default)(offsetParent) === "html" || (0, _getNodeNameJsDefault.default)(offsetParent) === "body" && (0, _getComputedStyleJsDefault.default)(offsetParent).position === "static")) return window;
    return offsetParent || getContainingBlock(element) || window;
}
exports.default = getOffsetParent;

},{"./getWindow.js":"6mER2","./getNodeName.js":"7waoK","./getComputedStyle.js":"duKXO","./instanceOf.js":"gKrwR","./isTableElement.js":"kTo8h","./getParentNode.js":"6sYM2","@parcel/transformer-js/src/esmodule-helpers.js":"boKlo"}],"duKXO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getWindowJs = require("./getWindow.js");
var _getWindowJsDefault = parcelHelpers.interopDefault(_getWindowJs);
function getComputedStyle(element) {
    return (0, _getWindowJsDefault.default)(element).getComputedStyle(element);
}
exports.default = getComputedStyle;

},{"./getWindow.js":"6mER2","@parcel/transformer-js/src/esmodule-helpers.js":"boKlo"}],"kTo8h":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getNodeNameJs = require("./getNodeName.js");
var _getNodeNameJsDefault = parcelHelpers.interopDefault(_getNodeNameJs);
function isTableElement(element) {
    return [
        "table",
        "td",
        "th"
    ].indexOf((0, _getNodeNameJsDefault.default)(element)) >= 0;
}
exports.default = isTableElement;

},{"./getNodeName.js":"7waoK","@parcel/transformer-js/src/esmodule-helpers.js":"boKlo"}],"6sYM2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getNodeNameJs = require("./getNodeName.js");
var _getNodeNameJsDefault = parcelHelpers.interopDefault(_getNodeNameJs);
var _getDocumentElementJs = require("./getDocumentElement.js");
var _getDocumentElementJsDefault = parcelHelpers.interopDefault(_getDocumentElementJs);
var _instanceOfJs = require("./instanceOf.js");
function getParentNode(element) {
    if ((0, _getNodeNameJsDefault.default)(element) === "html") return element;
    return(// $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    element.assignedSlot || element.parentNode || ((0, _instanceOfJs.isShadowRoot)(element) ? element.host : null) || // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    (0, _getDocumentElementJsDefault.default)(element) // fallback
    );
}
exports.default = getParentNode;

},{"./getNodeName.js":"7waoK","./getDocumentElement.js":"e3uMC","./instanceOf.js":"gKrwR","@parcel/transformer-js/src/esmodule-helpers.js":"boKlo"}],"e3uMC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _instanceOfJs = require("./instanceOf.js");
function getDocumentElement(element) {
    // $FlowFixMe[incompatible-return]: assume body is always available
    return (((0, _instanceOfJs.isElement)(element) ? element.ownerDocument : element.document) || window.document).documentElement;
}
exports.default = getDocumentElement;

},{"./instanceOf.js":"gKrwR","@parcel/transformer-js/src/esmodule-helpers.js":"boKlo"}],"3hI8e":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function getMainAxisFromPlacement(placement) {
    return [
        "top",
        "bottom"
    ].indexOf(placement) >= 0 ? "x" : "y";
}
exports.default = getMainAxisFromPlacement;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"boKlo"}],"cHZSC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "within", ()=>within);
parcelHelpers.export(exports, "withinMaxClamp", ()=>withinMaxClamp);
var _mathJs = require("./math.js");
function within(min, value, max) {
    return (0, _mathJs.max)(min, (0, _mathJs.min)(value, max));
}
function withinMaxClamp(min, value, max) {
    var v = within(min, value, max);
    return v > max ? max : v;
}

},{"./math.js":"h98n4","@parcel/transformer-js/src/esmodule-helpers.js":"boKlo"}],"1EMkY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getFreshSideObjectJs = require("./getFreshSideObject.js");
var _getFreshSideObjectJsDefault = parcelHelpers.interopDefault(_getFreshSideObjectJs);
function mergePaddingObject(paddingObject) {
    return Object.assign({}, (0, _getFreshSideObjectJsDefault.default)(), paddingObject);
}
exports.default = mergePaddingObject;

},{"./getFreshSideObject.js":"dIPNr","@parcel/transformer-js/src/esmodule-helpers.js":"boKlo"}],"dIPNr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function getFreshSideObject() {
    return {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    };
}
exports.default = getFreshSideObject;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"boKlo"}],"k0tbp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function expandToHashMap(value, keys) {
    return keys.reduce(function(hashMap, key) {
        hashMap[key] = value;
        return hashMap;
    }, {});
}
exports.default = expandToHashMap;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"boKlo"}],"4p01Q":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "mapToStyles", ()=>mapToStyles);
var _enumsJs = require("../enums.js");
var _getOffsetParentJs = require("../dom-utils/getOffsetParent.js");
var _getOffsetParentJsDefault = parcelHelpers.interopDefault(_getOffsetParentJs);
var _getWindowJs = require("../dom-utils/getWindow.js");
var _getWindowJsDefault = parcelHelpers.interopDefault(_getWindowJs);
var _getDocumentElementJs = require("../dom-utils/getDocumentElement.js");
var _getDocumentElementJsDefault = parcelHelpers.interopDefault(_getDocumentElementJs);
var _getComputedStyleJs = require("../dom-utils/getComputedStyle.js");
var _getComputedStyleJsDefault = parcelHelpers.interopDefault(_getComputedStyleJs);
var _getBasePlacementJs = require("../utils/getBasePlacement.js");
var _getBasePlacementJsDefault = parcelHelpers.interopDefault(_getBasePlacementJs);
var _getVariationJs = require("../utils/getVariation.js");
var _getVariationJsDefault = parcelHelpers.interopDefault(_getVariationJs);
var _mathJs = require("../utils/math.js"); // eslint-disable-next-line import/no-unused-modules
var unsetSides = {
    top: "auto",
    right: "auto",
    bottom: "auto",
    left: "auto"
}; // Round the offsets to the nearest suitable subpixel based on the DPR.
// Zooming can change the DPR, but it seems to report a value that will
// cleanly divide the values into the appropriate subpixels.
function roundOffsetsByDPR(_ref) {
    var x = _ref.x, y = _ref.y;
    var win = window;
    var dpr = win.devicePixelRatio || 1;
    return {
        x: (0, _mathJs.round)(x * dpr) / dpr || 0,
        y: (0, _mathJs.round)(y * dpr) / dpr || 0
    };
}
function mapToStyles(_ref2) {
    var _Object$assign2;
    var popper = _ref2.popper, popperRect = _ref2.popperRect, placement = _ref2.placement, variation = _ref2.variation, offsets = _ref2.offsets, position = _ref2.position, gpuAcceleration = _ref2.gpuAcceleration, adaptive = _ref2.adaptive, roundOffsets = _ref2.roundOffsets, isFixed = _ref2.isFixed;
    var _offsets$x = offsets.x, x = _offsets$x === void 0 ? 0 : _offsets$x, _offsets$y = offsets.y, y = _offsets$y === void 0 ? 0 : _offsets$y;
    var _ref3 = typeof roundOffsets === "function" ? roundOffsets({
        x: x,
        y: y
    }) : {
        x: x,
        y: y
    };
    x = _ref3.x;
    y = _ref3.y;
    var hasX = offsets.hasOwnProperty("x");
    var hasY = offsets.hasOwnProperty("y");
    var sideX = (0, _enumsJs.left);
    var sideY = (0, _enumsJs.top);
    var win = window;
    if (adaptive) {
        var offsetParent = (0, _getOffsetParentJsDefault.default)(popper);
        var heightProp = "clientHeight";
        var widthProp = "clientWidth";
        if (offsetParent === (0, _getWindowJsDefault.default)(popper)) {
            offsetParent = (0, _getDocumentElementJsDefault.default)(popper);
            if ((0, _getComputedStyleJsDefault.default)(offsetParent).position !== "static" && position === "absolute") {
                heightProp = "scrollHeight";
                widthProp = "scrollWidth";
            }
        } // $FlowFixMe[incompatible-cast]: force type refinement, we compare offsetParent with window above, but Flow doesn't detect it
        offsetParent;
        if (placement === (0, _enumsJs.top) || (placement === (0, _enumsJs.left) || placement === (0, _enumsJs.right)) && variation === (0, _enumsJs.end)) {
            sideY = (0, _enumsJs.bottom);
            var offsetY = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.height : offsetParent[heightProp];
            y -= offsetY - popperRect.height;
            y *= gpuAcceleration ? 1 : -1;
        }
        if (placement === (0, _enumsJs.left) || (placement === (0, _enumsJs.top) || placement === (0, _enumsJs.bottom)) && variation === (0, _enumsJs.end)) {
            sideX = (0, _enumsJs.right);
            var offsetX = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.width : offsetParent[widthProp];
            x -= offsetX - popperRect.width;
            x *= gpuAcceleration ? 1 : -1;
        }
    }
    var commonStyles = Object.assign({
        position: position
    }, adaptive && unsetSides);
    var _ref4 = roundOffsets === true ? roundOffsetsByDPR({
        x: x,
        y: y
    }) : {
        x: x,
        y: y
    };
    x = _ref4.x;
    y = _ref4.y;
    if (gpuAcceleration) {
        var _Object$assign;
        return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? "0" : "", _Object$assign[sideX] = hasX ? "0" : "", _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
    }
    return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : "", _Object$assign2[sideX] = hasX ? x + "px" : "", _Object$assign2.transform = "", _Object$assign2));
}
function computeStyles(_ref5) {
    var state = _ref5.state, options = _ref5.options;
    var _options$gpuAccelerat = options.gpuAcceleration, gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat, _options$adaptive = options.adaptive, adaptive = _options$adaptive === void 0 ? true : _options$adaptive, _options$roundOffsets = options.roundOffsets, roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;
    var transitionProperty = (0, _getComputedStyleJsDefault.default)(state.elements.popper).transitionProperty || "";
    if (adaptive && [
        "transform",
        "top",
        "right",
        "bottom",
        "left"
    ].some(function(property) {
        return transitionProperty.indexOf(property) >= 0;
    })) console.warn([
        "Popper: Detected CSS transitions on at least one of the following",
        'CSS properties: "transform", "top", "right", "bottom", "left".',
        "\n\n",
        'Disable the "computeStyles" modifier\'s `adaptive` option to allow',
        "for smooth transitions, or remove these properties from the CSS",
        "transition declaration on the popper element if only transitioning",
        "opacity or background-color for example.",
        "\n\n",
        "We recommend using the popper element as a wrapper around an inner",
        "element that can have any CSS property transitioned for animations."
    ].join(" "));
    var commonStyles = {
        placement: (0, _getBasePlacementJsDefault.default)(state.placement),
        variation: (0, _getVariationJsDefault.default)(state.placement),
        popper: state.elements.popper,
        popperRect: state.rects.popper,
        gpuAcceleration: gpuAcceleration,
        isFixed: state.options.strategy === "fixed"
    };
    if (state.modifiersData.popperOffsets != null) state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
        offsets: state.modifiersData.popperOffsets,
        position: state.options.strategy,
        adaptive: adaptive,
        roundOffsets: roundOffsets
    })));
    if (state.modifiersData.arrow != null) state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
        offsets: state.modifiersData.arrow,
        position: "absolute",
        adaptive: false,
        roundOffsets: roundOffsets
    })));
    state.attributes.popper = Object.assign({}, state.attributes.popper, {
        "data-popper-placement": state.placement
    });
} // eslint-disable-next-line import/no-unused-modules
exports.default = {
    name: "computeStyles",
    enabled: true,
    phase: "beforeWrite",
    fn: computeStyles,
    data: {}
};

},{"../enums.js":"e9s7y","../dom-utils/getOffsetParent.js":"lWkJl","../dom-utils/getWindow.js":"6mER2","../dom-utils/getDocumentElement.js":"e3uMC","../dom-utils/getComputedStyle.js":"duKXO","../utils/getBasePlacement.js":"lDcir","../utils/getVariation.js":"gKAYa","../utils/math.js":"h98n4","@parcel/transformer-js/src/esmodule-helpers.js":"boKlo"}],"gKAYa":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function getVariation(placement) {
    return placement.split("-")[1];
}
exports.default = getVariation;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"boKlo"}],"dtJWQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getWindowJs = require("../dom-utils/getWindow.js"); // eslint-disable-next-line import/no-unused-modules
var _getWindowJsDefault = parcelHelpers.interopDefault(_getWindowJs);
var passive = {
    passive: true
};
function effect(_ref) {
    var state = _ref.state, instance = _ref.instance, options = _ref.options;
    var _options$scroll = options.scroll, scroll = _options$scroll === void 0 ? true : _options$scroll, _options$resize = options.resize, resize = _options$resize === void 0 ? true : _options$resize;
    var window = (0, _getWindowJsDefault.default)(state.elements.popper);
    var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);
    if (scroll) scrollParents.forEach(function(scrollParent) {
        scrollParent.addEventListener("scroll", instance.update, passive);
    });
    if (resize) window.addEventListener("resize", instance.update, passive);
    return function() {
        if (scroll) scrollParents.forEach(function(scrollParent) {
            scrollParent.removeEventListener("scroll", instance.update, passive);
        });
        if (resize) window.removeEventListener("resize", instance.update, passive);
    };
} // eslint-disable-next-line import/no-unused-modules
exports.default = {
    name: "eventListeners",
    enabled: true,
    phase: "write",
    fn: function fn() {},
    effect: effect,
    data: {}
};

},{"../dom-utils/getWindow.js":"6mER2","@parcel/transformer-js/src/esmodule-helpers.js":"boKlo"}],"igbXP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getOppositePlacementJs = require("../utils/getOppositePlacement.js");
var _getOppositePlacementJsDefault = parcelHelpers.interopDefault(_getOppositePlacementJs);
var _getBasePlacementJs = require("../utils/getBasePlacement.js");
var _getBasePlacementJsDefault = parcelHelpers.interopDefault(_getBasePlacementJs);
var _getOppositeVariationPlacementJs = require("../utils/getOppositeVariationPlacement.js");
var _getOppositeVariationPlacementJsDefault = parcelHelpers.interopDefault(_getOppositeVariationPlacementJs);
var _detectOverflowJs = require("../utils/detectOverflow.js");
var _detectOverflowJsDefault = parcelHelpers.interopDefault(_detectOverflowJs);
var _computeAutoPlacementJs = require("../utils/computeAutoPlacement.js");
var _computeAutoPlacementJsDefault = parcelHelpers.interopDefault(_computeAutoPlacementJs);
var _enumsJs = require("../enums.js");
var _getVariationJs = require("../utils/getVariation.js"); // eslint-disable-next-line import/no-unused-modules
var _getVariationJsDefault = parcelHelpers.interopDefault(_getVariationJs);
function getExpandedFallbackPlacements(placement) {
    if ((0, _getBasePlacementJsDefault.default)(placement) === (0, _enumsJs.auto)) return [];
    var oppositePlacement = (0, _getOppositePlacementJsDefault.default)(placement);
    return [
        (0, _getOppositeVariationPlacementJsDefault.default)(placement),
        oppositePlacement,
        (0, _getOppositeVariationPlacementJsDefault.default)(oppositePlacement)
    ];
}
function flip(_ref) {
    var state = _ref.state, options = _ref.options, name = _ref.name;
    if (state.modifiersData[name]._skip) return;
    var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis, specifiedFallbackPlacements = options.fallbackPlacements, padding = options.padding, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, _options$flipVariatio = options.flipVariations, flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio, allowedAutoPlacements = options.allowedAutoPlacements;
    var preferredPlacement = state.options.placement;
    var basePlacement = (0, _getBasePlacementJsDefault.default)(preferredPlacement);
    var isBasePlacement = basePlacement === preferredPlacement;
    var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [
        (0, _getOppositePlacementJsDefault.default)(preferredPlacement)
    ] : getExpandedFallbackPlacements(preferredPlacement));
    var placements = [
        preferredPlacement
    ].concat(fallbackPlacements).reduce(function(acc, placement) {
        return acc.concat((0, _getBasePlacementJsDefault.default)(placement) === (0, _enumsJs.auto) ? (0, _computeAutoPlacementJsDefault.default)(state, {
            placement: placement,
            boundary: boundary,
            rootBoundary: rootBoundary,
            padding: padding,
            flipVariations: flipVariations,
            allowedAutoPlacements: allowedAutoPlacements
        }) : placement);
    }, []);
    var referenceRect = state.rects.reference;
    var popperRect = state.rects.popper;
    var checksMap = new Map();
    var makeFallbackChecks = true;
    var firstFittingPlacement = placements[0];
    for(var i = 0; i < placements.length; i++){
        var placement1 = placements[i];
        var _basePlacement = (0, _getBasePlacementJsDefault.default)(placement1);
        var isStartVariation = (0, _getVariationJsDefault.default)(placement1) === (0, _enumsJs.start);
        var isVertical = [
            (0, _enumsJs.top),
            (0, _enumsJs.bottom)
        ].indexOf(_basePlacement) >= 0;
        var len = isVertical ? "width" : "height";
        var overflow = (0, _detectOverflowJsDefault.default)(state, {
            placement: placement1,
            boundary: boundary,
            rootBoundary: rootBoundary,
            altBoundary: altBoundary,
            padding: padding
        });
        var mainVariationSide = isVertical ? isStartVariation ? (0, _enumsJs.right) : (0, _enumsJs.left) : isStartVariation ? (0, _enumsJs.bottom) : (0, _enumsJs.top);
        if (referenceRect[len] > popperRect[len]) mainVariationSide = (0, _getOppositePlacementJsDefault.default)(mainVariationSide);
        var altVariationSide = (0, _getOppositePlacementJsDefault.default)(mainVariationSide);
        var checks = [];
        if (checkMainAxis) checks.push(overflow[_basePlacement] <= 0);
        if (checkAltAxis) checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
        if (checks.every(function(check) {
            return check;
        })) {
            firstFittingPlacement = placement1;
            makeFallbackChecks = false;
            break;
        }
        checksMap.set(placement1, checks);
    }
    if (makeFallbackChecks) {
        // `2` may be desired in some cases – research later
        var numberOfChecks = flipVariations ? 3 : 1;
        var _loop = function _loop(_i) {
            var fittingPlacement = placements.find(function(placement) {
                var checks = checksMap.get(placement);
                if (checks) return checks.slice(0, _i).every(function(check) {
                    return check;
                });
            });
            if (fittingPlacement) {
                firstFittingPlacement = fittingPlacement;
                return "break";
            }
        };
        for(var _i1 = numberOfChecks; _i1 > 0; _i1--){
            var _ret = _loop(_i1);
            if (_ret === "break") break;
        }
    }
    if (state.placement !== firstFittingPlacement) {
        state.modifiersData[name]._skip = true;
        state.placement = firstFittingPlacement;
        state.reset = true;
    }
} // eslint-disable-next-line import/no-unused-modules
exports.default = {
    name: "flip",
    enabled: true,
    phase: "main",
    fn: flip,
    requiresIfExists: [
        "offset"
    ],
    data: {
        _skip: false
    }
};

},{"../utils/getOppositePlacement.js":"aKdMe","../utils/getBasePlacement.js":"lDcir","../utils/getOppositeVariationPlacement.js":"1jdHj","../utils/detectOverflow.js":"7uWWS","../utils/computeAutoPlacement.js":"hWIFx","../enums.js":"e9s7y","../utils/getVariation.js":"gKAYa","@parcel/transformer-js/src/esmodule-helpers.js":"boKlo"}],"aKdMe":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var hash = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
};
function getOppositePlacement(placement) {
    return placement.replace(/left|right|bottom|top/g, function(matched) {
        return hash[matched];
    });
}
exports.default = getOppositePlacement;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"boKlo"}],"1jdHj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var hash = {
    start: "end",
    end: "start"
};
function getOppositeVariationPlacement(placement) {
    return placement.replace(/start|end/g, function(matched) {
        return hash[matched];
    });
}
exports.default = getOppositeVariationPlacement;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"boKlo"}],"7uWWS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getClippingRectJs = require("../dom-utils/getClippingRect.js");
var _getClippingRectJsDefault = parcelHelpers.interopDefault(_getClippingRectJs);
var _getDocumentElementJs = require("../dom-utils/getDocumentElement.js");
var _getDocumentElementJsDefault = parcelHelpers.interopDefault(_getDocumentElementJs);
var _getBoundingClientRectJs = require("../dom-utils/getBoundingClientRect.js");
var _getBoundingClientRectJsDefault = parcelHelpers.interopDefault(_getBoundingClientRectJs);
var _computeOffsetsJs = require("./computeOffsets.js");
var _computeOffsetsJsDefault = parcelHelpers.interopDefault(_computeOffsetsJs);
var _rectToClientRectJs = require("./rectToClientRect.js");
var _rectToClientRectJsDefault = parcelHelpers.interopDefault(_rectToClientRectJs);
var _enumsJs = require("../enums.js");
var _instanceOfJs = require("../dom-utils/instanceOf.js");
var _mergePaddingObjectJs = require("./mergePaddingObject.js");
var _mergePaddingObjectJsDefault = parcelHelpers.interopDefault(_mergePaddingObjectJs);
var _expandToHashMapJs = require("./expandToHashMap.js"); // eslint-disable-next-line import/no-unused-modules
var _expandToHashMapJsDefault = parcelHelpers.interopDefault(_expandToHashMapJs);
function detectOverflow(state, options) {
    if (options === void 0) options = {};
    var _options = options, _options$placement = _options.placement, placement = _options$placement === void 0 ? state.placement : _options$placement, _options$boundary = _options.boundary, boundary = _options$boundary === void 0 ? (0, _enumsJs.clippingParents) : _options$boundary, _options$rootBoundary = _options.rootBoundary, rootBoundary = _options$rootBoundary === void 0 ? (0, _enumsJs.viewport) : _options$rootBoundary, _options$elementConte = _options.elementContext, elementContext = _options$elementConte === void 0 ? (0, _enumsJs.popper) : _options$elementConte, _options$altBoundary = _options.altBoundary, altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary, _options$padding = _options.padding, padding = _options$padding === void 0 ? 0 : _options$padding;
    var paddingObject = (0, _mergePaddingObjectJsDefault.default)(typeof padding !== "number" ? padding : (0, _expandToHashMapJsDefault.default)(padding, (0, _enumsJs.basePlacements)));
    var altContext = elementContext === (0, _enumsJs.popper) ? (0, _enumsJs.reference) : (0, _enumsJs.popper);
    var popperRect = state.rects.popper;
    var element = state.elements[altBoundary ? altContext : elementContext];
    var clippingClientRect = (0, _getClippingRectJsDefault.default)((0, _instanceOfJs.isElement)(element) ? element : element.contextElement || (0, _getDocumentElementJsDefault.default)(state.elements.popper), boundary, rootBoundary);
    var referenceClientRect = (0, _getBoundingClientRectJsDefault.default)(state.elements.reference);
    var popperOffsets = (0, _computeOffsetsJsDefault.default)({
        reference: referenceClientRect,
        element: popperRect,
        strategy: "absolute",
        placement: placement
    });
    var popperClientRect = (0, _rectToClientRectJsDefault.default)(Object.assign({}, popperRect, popperOffsets));
    var elementClientRect = elementContext === (0, _enumsJs.popper) ? popperClientRect : referenceClientRect; // positive = overflowing the clipping rect
    // 0 or negative = within the clipping rect
    var overflowOffsets = {
        top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
        bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
        left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
        right: elementClientRect.right - clippingClientRect.right + paddingObject.right
    };
    var offsetData = state.modifiersData.offset; // Offsets can be applied only to the popper element
    if (elementContext === (0, _enumsJs.popper) && offsetData) {
        var offset = offsetData[placement];
        Object.keys(overflowOffsets).forEach(function(key) {
            var multiply = [
                (0, _enumsJs.right),
                (0, _enumsJs.bottom)
            ].indexOf(key) >= 0 ? 1 : -1;
            var axis = [
                (0, _enumsJs.top),
                (0, _enumsJs.bottom)
            ].indexOf(key) >= 0 ? "y" : "x";
            overflowOffsets[key] += offset[axis] * multiply;
        });
    }
    return overflowOffsets;
}
exports.default = detectOverflow;

},{"../dom-utils/getClippingRect.js":"7LD8I","../dom-utils/getDocumentElement.js":"e3uMC","../dom-utils/getBoundingClientRect.js":"15x8t","./computeOffsets.js":"7ZRM7","./rectToClientRect.js":"gIyIk","../enums.js":"e9s7y","../dom-utils/instanceOf.js":"gKrwR","./mergePaddingObject.js":"1EMkY","./expandToHashMap.js":"k0tbp","@parcel/transformer-js/src/esmodule-helpers.js":"boKlo"}],"7LD8I":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _enumsJs = require("../enums.js");
var _getViewportRectJs = require("./getViewportRect.js");
var _getViewportRectJsDefault = parcelHelpers.interopDefault(_getViewportRectJs);
var _getDocumentRectJs = require("./getDocumentRect.js");
var _getDocumentRectJsDefault = parcelHelpers.interopDefault(_getDocumentRectJs);
var _listScrollParentsJs = require("./listScrollParents.js");
var _listScrollParentsJsDefault = parcelHelpers.interopDefault(_listScrollParentsJs);
var _getOffsetParentJs = require("./getOffsetParent.js");
var _getOffsetParentJsDefault = parcelHelpers.interopDefault(_getOffsetParentJs);
var _getDocumentElementJs = require("./getDocumentElement.js");
var _getDocumentElementJsDefault = parcelHelpers.interopDefault(_getDocumentElementJs);
var _getComputedStyleJs = require("./getComputedStyle.js");
var _getComputedStyleJsDefault = parcelHelpers.interopDefault(_getComputedStyleJs);
var _instanceOfJs = require("./instanceOf.js");
var _getBoundingClientRectJs = require("./getBoundingClientRect.js");
var _getBoundingClientRectJsDefault = parcelHelpers.interopDefault(_getBoundingClientRectJs);
var _getParentNodeJs = require("./getParentNode.js");
var _getParentNodeJsDefault = parcelHelpers.interopDefault(_getParentNodeJs);
var _containsJs = require("./contains.js");
var _containsJsDefault = parcelHelpers.interopDefault(_containsJs);
var _getNodeNameJs = require("./getNodeName.js");
var _getNodeNameJsDefault = parcelHelpers.interopDefault(_getNodeNameJs);
var _rectToClientRectJs = require("../utils/rectToClientRect.js");
var _rectToClientRectJsDefault = parcelHelpers.interopDefault(_rectToClientRectJs);
var _mathJs = require("../utils/math.js");
function getInnerBoundingClientRect(element) {
    var rect = (0, _getBoundingClientRectJsDefault.default)(element);
    rect.top = rect.top + element.clientTop;
    rect.left = rect.left + element.clientLeft;
    rect.bottom = rect.top + element.clientHeight;
    rect.right = rect.left + element.clientWidth;
    rect.width = element.clientWidth;
    rect.height = element.clientHeight;
    rect.x = rect.left;
    rect.y = rect.top;
    return rect;
}
function getClientRectFromMixedType(element, clippingParent) {
    return clippingParent === (0, _enumsJs.viewport) ? (0, _rectToClientRectJsDefault.default)((0, _getViewportRectJsDefault.default)(element)) : (0, _instanceOfJs.isElement)(clippingParent) ? getInnerBoundingClientRect(clippingParent) : (0, _rectToClientRectJsDefault.default)((0, _getDocumentRectJsDefault.default)((0, _getDocumentElementJsDefault.default)(element)));
} // A "clipping parent" is an overflowable container with the characteristic of
// clipping (or hiding) overflowing elements with a position different from
// `initial`
function getClippingParents(element) {
    var clippingParents = (0, _listScrollParentsJsDefault.default)((0, _getParentNodeJsDefault.default)(element));
    var canEscapeClipping = [
        "absolute",
        "fixed"
    ].indexOf((0, _getComputedStyleJsDefault.default)(element).position) >= 0;
    var clipperElement = canEscapeClipping && (0, _instanceOfJs.isHTMLElement)(element) ? (0, _getOffsetParentJsDefault.default)(element) : element;
    if (!(0, _instanceOfJs.isElement)(clipperElement)) return [];
     // $FlowFixMe[incompatible-return]: https://github.com/facebook/flow/issues/1414
    return clippingParents.filter(function(clippingParent) {
        return (0, _instanceOfJs.isElement)(clippingParent) && (0, _containsJsDefault.default)(clippingParent, clipperElement) && (0, _getNodeNameJsDefault.default)(clippingParent) !== "body";
    });
} // Gets the maximum area that the element is visible in due to any number of
function getClippingRect(element, boundary, rootBoundary) {
    var mainClippingParents = boundary === "clippingParents" ? getClippingParents(element) : [].concat(boundary);
    var clippingParents = [].concat(mainClippingParents, [
        rootBoundary
    ]);
    var firstClippingParent = clippingParents[0];
    var clippingRect = clippingParents.reduce(function(accRect, clippingParent) {
        var rect = getClientRectFromMixedType(element, clippingParent);
        accRect.top = (0, _mathJs.max)(rect.top, accRect.top);
        accRect.right = (0, _mathJs.min)(rect.right, accRect.right);
        accRect.bottom = (0, _mathJs.min)(rect.bottom, accRect.bottom);
        accRect.left = (0, _mathJs.max)(rect.left, accRect.left);
        return accRect;
    }, getClientRectFromMixedType(element, firstClippingParent));
    clippingRect.width = clippingRect.right - clippingRect.left;
    clippingRect.height = clippingRect.bottom - clippingRect.top;
    clippingRect.x = clippingRect.left;
    clippingRect.y = clippingRect.top;
    return clippingRect;
}
exports.default = getClippingRect;

},{"../enums.js":"e9s7y","./getViewportRect.js":"j4Vms","./getDocumentRect.js":"1XENq","./listScrollParents.js":"fJMQG","./getOffsetParent.js":"lWkJl","./getDocumentElement.js":"e3uMC","./getComputedStyle.js":"duKXO","./instanceOf.js":"gKrwR","./getBoundingClientRect.js":"15x8t","./getParentNode.js":"6sYM2","./contains.js":"jh4QG","./getNodeName.js":"7waoK","../utils/rectToClientRect.js":"gIyIk","../utils/math.js":"h98n4","@parcel/transformer-js/src/esmodule-helpers.js":"boKlo"}],"j4Vms":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getWindowJs = require("./getWindow.js");
var _getWindowJsDefault = parcelHelpers.interopDefault(_getWindowJs);
var _getDocumentElementJs = require("./getDocumentElement.js");
var _getDocumentElementJsDefault = parcelHelpers.interopDefault(_getDocumentElementJs);
var _getWindowScrollBarXJs = require("./getWindowScrollBarX.js");
var _getWindowScrollBarXJsDefault = parcelHelpers.interopDefault(_getWindowScrollBarXJs);
function getViewportRect(element) {
    var win = (0, _getWindowJsDefault.default)(element);
    var html = (0, _getDocumentElementJsDefault.default)(element);
    var visualViewport = win.visualViewport;
    var width = html.clientWidth;
    var height = html.clientHeight;
    var x = 0;
    var y = 0; // NB: This isn't supported on iOS <= 12. If the keyboard is open, the popper
    // can be obscured underneath it.
    // Also, `html.clientHeight` adds the bottom bar height in Safari iOS, even
    // if it isn't open, so if this isn't available, the popper will be detected
    // to overflow the bottom of the screen too early.
    if (visualViewport) {
        width = visualViewport.width;
        height = visualViewport.height; // Uses Layout Viewport (like Chrome; Safari does not currently)
        // In Chrome, it returns a value very close to 0 (+/-) but contains rounding
        // errors due to floating point numbers, so we need to check precision.
        // Safari returns a number <= 0, usually < -1 when pinch-zoomed
        // Feature detection fails in mobile emulation mode in Chrome.
        // Math.abs(win.innerWidth / visualViewport.scale - visualViewport.width) <
        // 0.001
        // Fallback here: "Not Safari" userAgent
        if (!/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
            x = visualViewport.offsetLeft;
            y = visualViewport.offsetTop;
        }
    }
    return {
        width: width,
        height: height,
        x: x + (0, _getWindowScrollBarXJsDefault.default)(element),
        y: y
    };
}
exports.default = getViewportRect;

},{"./getWindow.js":"6mER2","./getDocumentElement.js":"e3uMC","./getWindowScrollBarX.js":"jc6qC","@parcel/transformer-js/src/esmodule-helpers.js":"boKlo"}],"jc6qC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getBoundingClientRectJs = require("./getBoundingClientRect.js");
var _getBoundingClientRectJsDefault = parcelHelpers.interopDefault(_getBoundingClientRectJs);
var _getDocumentElementJs = require("./getDocumentElement.js");
var _getDocumentElementJsDefault = parcelHelpers.interopDefault(_getDocumentElementJs);
var _getWindowScrollJs = require("./getWindowScroll.js");
var _getWindowScrollJsDefault = parcelHelpers.interopDefault(_getWindowScrollJs);
function getWindowScrollBarX(element) {
    // If <html> has a CSS width greater than the viewport, then this will be
    // incorrect for RTL.
    // Popper 1 is broken in this case and never had a bug report so let's assume
    // it's not an issue. I don't think anyone ever specifies width on <html>
    // anyway.
    // Browsers where the left scrollbar doesn't cause an issue report `0` for
    // this (e.g. Edge 2019, IE11, Safari)
    return (0, _getBoundingClientRectJsDefault.default)((0, _getDocumentElementJsDefault.default)(element)).left + (0, _getWindowScrollJsDefault.default)(element).scrollLeft;
}
exports.default = getWindowScrollBarX;

},{"./getBoundingClientRect.js":"15x8t","./getDocumentElement.js":"e3uMC","./getWindowScroll.js":"eeAtv","@parcel/transformer-js/src/esmodule-helpers.js":"boKlo"}],"eeAtv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getWindowJs = require("./getWindow.js");
var _getWindowJsDefault = parcelHelpers.interopDefault(_getWindowJs);
function getWindowScroll(node) {
    var win = (0, _getWindowJsDefault.default)(node);
    var scrollLeft = win.pageXOffset;
    var scrollTop = win.pageYOffset;
    return {
        scrollLeft: scrollLeft,
        scrollTop: scrollTop
    };
}
exports.default = getWindowScroll;

},{"./getWindow.js":"6mER2","@parcel/transformer-js/src/esmodule-helpers.js":"boKlo"}],"1XENq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getDocumentElementJs = require("./getDocumentElement.js");
var _getDocumentElementJsDefault = parcelHelpers.interopDefault(_getDocumentElementJs);
var _getComputedStyleJs = require("./getComputedStyle.js");
var _getComputedStyleJsDefault = parcelHelpers.interopDefault(_getComputedStyleJs);
var _getWindowScrollBarXJs = require("./getWindowScrollBarX.js");
var _getWindowScrollBarXJsDefault = parcelHelpers.interopDefault(_getWindowScrollBarXJs);
var _getWindowScrollJs = require("./getWindowScroll.js");
var _getWindowScrollJsDefault = parcelHelpers.interopDefault(_getWindowScrollJs);
var _mathJs = require("../utils/math.js"); // Gets the entire size of the scrollable document area, even extending outside
function getDocumentRect(element) {
    var _element$ownerDocumen;
    var html = (0, _getDocumentElementJsDefault.default)(element);
    var winScroll = (0, _getWindowScrollJsDefault.default)(element);
    var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
    var width = (0, _mathJs.max)(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
    var height = (0, _mathJs.max)(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
    var x = -winScroll.scrollLeft + (0, _getWindowScrollBarXJsDefault.default)(element);
    var y = -winScroll.scrollTop;
    if ((0, _getComputedStyleJsDefault.default)(body || html).direction === "rtl") x += (0, _mathJs.max)(html.clientWidth, body ? body.clientWidth : 0) - width;
    return {
        width: width,
        height: height,
        x: x,
        y: y
    };
}
exports.default = getDocumentRect;

},{"./getDocumentElement.js":"e3uMC","./getComputedStyle.js":"duKXO","./getWindowScrollBarX.js":"jc6qC","./getWindowScroll.js":"eeAtv","../utils/math.js":"h98n4","@parcel/transformer-js/src/esmodule-helpers.js":"boKlo"}],"fJMQG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getScrollParentJs = require("./getScrollParent.js");
var _getScrollParentJsDefault = parcelHelpers.interopDefault(_getScrollParentJs);
var _getParentNodeJs = require("./getParentNode.js");
var _getParentNodeJsDefault = parcelHelpers.interopDefault(_getParentNodeJs);
var _getWindowJs = require("./getWindow.js");
var _getWindowJsDefault = parcelHelpers.interopDefault(_getWindowJs);
var _isScrollParentJs = require("./isScrollParent.js");
var _isScrollParentJsDefault = parcelHelpers.interopDefault(_isScrollParentJs);
function listScrollParents(element, list) {
    var _element$ownerDocumen;
    if (list === void 0) list = [];
    var scrollParent = (0, _getScrollParentJsDefault.default)(element);
    var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
    var win = (0, _getWindowJsDefault.default)(scrollParent);
    var target = isBody ? [
        win
    ].concat(win.visualViewport || [], (0, _isScrollParentJsDefault.default)(scrollParent) ? scrollParent : []) : scrollParent;
    var updatedList = list.concat(target);
    return isBody ? updatedList : updatedList.concat(listScrollParents((0, _getParentNodeJsDefault.default)(target)));
}
exports.default = listScrollParents;

},{"./getScrollParent.js":"gHPG0","./getParentNode.js":"6sYM2","./getWindow.js":"6mER2","./isScrollParent.js":"1gdAa","@parcel/transformer-js/src/esmodule-helpers.js":"boKlo"}],"gHPG0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getParentNodeJs = require("./getParentNode.js");
var _getParentNodeJsDefault = parcelHelpers.interopDefault(_getParentNodeJs);
var _isScrollParentJs = require("./isScrollParent.js");
var _isScrollParentJsDefault = parcelHelpers.interopDefault(_isScrollParentJs);
var _getNodeNameJs = require("./getNodeName.js");
var _getNodeNameJsDefault = parcelHelpers.interopDefault(_getNodeNameJs);
var _instanceOfJs = require("./instanceOf.js");
function getScrollParent(node) {
    if ([
        "html",
        "body",
        "#document"
    ].indexOf((0, _getNodeNameJsDefault.default)(node)) >= 0) // $FlowFixMe[incompatible-return]: assume body is always available
    return node.ownerDocument.body;
    if ((0, _instanceOfJs.isHTMLElement)(node) && (0, _isScrollParentJsDefault.default)(node)) return node;
    return getScrollParent((0, _getParentNodeJsDefault.default)(node));
}
exports.default = getScrollParent;

},{"./getParentNode.js":"6sYM2","./isScrollParent.js":"1gdAa","./getNodeName.js":"7waoK","./instanceOf.js":"gKrwR","@parcel/transformer-js/src/esmodule-helpers.js":"boKlo"}],"1gdAa":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getComputedStyleJs = require("./getComputedStyle.js");
var _getComputedStyleJsDefault = parcelHelpers.interopDefault(_getComputedStyleJs);
function isScrollParent(element) {
    // Firefox wants us to check `-x` and `-y` variations as well
    var _getComputedStyle = (0, _getComputedStyleJsDefault.default)(element), overflow = _getComputedStyle.overflow, overflowX = _getComputedStyle.overflowX, overflowY = _getComputedStyle.overflowY;
    return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}
exports.default = isScrollParent;

},{"./getComputedStyle.js":"duKXO","@parcel/transformer-js/src/esmodule-helpers.js":"boKlo"}],"gIyIk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function rectToClientRect(rect) {
    return Object.assign({}, rect, {
        left: rect.x,
        top: rect.y,
        right: rect.x + rect.width,
        bottom: rect.y + rect.height
    });
}
exports.default = rectToClientRect;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"boKlo"}],"7ZRM7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getBasePlacementJs = require("./getBasePlacement.js");
var _getBasePlacementJsDefault = parcelHelpers.interopDefault(_getBasePlacementJs);
var _getVariationJs = require("./getVariation.js");
var _getVariationJsDefault = parcelHelpers.interopDefault(_getVariationJs);
var _getMainAxisFromPlacementJs = require("./getMainAxisFromPlacement.js");
var _getMainAxisFromPlacementJsDefault = parcelHelpers.interopDefault(_getMainAxisFromPlacementJs);
var _enumsJs = require("../enums.js");
function computeOffsets(_ref) {
    var reference = _ref.reference, element = _ref.element, placement = _ref.placement;
    var basePlacement = placement ? (0, _getBasePlacementJsDefault.default)(placement) : null;
    var variation = placement ? (0, _getVariationJsDefault.default)(placement) : null;
    var commonX = reference.x + reference.width / 2 - element.width / 2;
    var commonY = reference.y + reference.height / 2 - element.height / 2;
    var offsets;
    switch(basePlacement){
        case 0, _enumsJs.top:
            offsets = {
                x: commonX,
                y: reference.y - element.height
            };
            break;
        case 0, _enumsJs.bottom:
            offsets = {
                x: commonX,
                y: reference.y + reference.height
            };
            break;
        case 0, _enumsJs.right:
            offsets = {
                x: reference.x + reference.width,
                y: commonY
            };
            break;
        case 0, _enumsJs.left:
            offsets = {
                x: reference.x - element.width,
                y: commonY
            };
            break;
        default:
            offsets = {
                x: reference.x,
                y: reference.y
            };
    }
    var mainAxis = basePlacement ? (0, _getMainAxisFromPlacementJsDefault.default)(basePlacement) : null;
    if (mainAxis != null) {
        var len = mainAxis === "y" ? "height" : "width";
        switch(variation){
            case 0, _enumsJs.start:
                offsets[mainAxis] = offsets[mainAxis] - (reference[len] / 2 - element[len] / 2);
                break;
            case 0, _enumsJs.end:
                offsets[mainAxis] = offsets[mainAxis] + (reference[len] / 2 - element[len] / 2);
                break;
            default:
        }
    }
    return offsets;
}
exports.default = computeOffsets;

},{"./getBasePlacement.js":"lDcir","./getVariation.js":"gKAYa","./getMainAxisFromPlacement.js":"3hI8e","../enums.js":"e9s7y","@parcel/transformer-js/src/esmodule-helpers.js":"boKlo"}],"hWIFx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getVariationJs = require("./getVariation.js");
var _getVariationJsDefault = parcelHelpers.interopDefault(_getVariationJs);
var _enumsJs = require("../enums.js");
var _detectOverflowJs = require("./detectOverflow.js");
var _detectOverflowJsDefault = parcelHelpers.interopDefault(_detectOverflowJs);
var _getBasePlacementJs = require("./getBasePlacement.js");
var _getBasePlacementJsDefault = parcelHelpers.interopDefault(_getBasePlacementJs);
function computeAutoPlacement(state, options) {
    if (options === void 0) options = {};
    var _options = options, placement1 = _options.placement, boundary = _options.boundary, rootBoundary = _options.rootBoundary, padding = _options.padding, flipVariations = _options.flipVariations, _options$allowedAutoP = _options.allowedAutoPlacements, allowedAutoPlacements = _options$allowedAutoP === void 0 ? (0, _enumsJs.placements) : _options$allowedAutoP;
    var variation = (0, _getVariationJsDefault.default)(placement1);
    var placements = variation ? flipVariations ? (0, _enumsJs.variationPlacements) : (0, _enumsJs.variationPlacements).filter(function(placement) {
        return (0, _getVariationJsDefault.default)(placement) === variation;
    }) : (0, _enumsJs.basePlacements);
    var allowedPlacements = placements.filter(function(placement) {
        return allowedAutoPlacements.indexOf(placement) >= 0;
    });
    if (allowedPlacements.length === 0) {
        allowedPlacements = placements;
        console.error([
            "Popper: The `allowedAutoPlacements` option did not allow any",
            "placements. Ensure the `placement` option matches the variation",
            "of the allowed placements.",
            'For example, "auto" cannot be used to allow "bottom-start".',
            'Use "auto-start" instead.'
        ].join(" "));
    } // $FlowFixMe[incompatible-type]: Flow seems to have problems with two array unions...
    var overflows = allowedPlacements.reduce(function(acc, placement) {
        acc[placement] = (0, _detectOverflowJsDefault.default)(state, {
            placement: placement,
            boundary: boundary,
            rootBoundary: rootBoundary,
            padding: padding
        })[(0, _getBasePlacementJsDefault.default)(placement)];
        return acc;
    }, {});
    return Object.keys(overflows).sort(function(a, b) {
        return overflows[a] - overflows[b];
    });
}
exports.default = computeAutoPlacement;

},{"./getVariation.js":"gKAYa","../enums.js":"e9s7y","./detectOverflow.js":"7uWWS","./getBasePlacement.js":"lDcir","@parcel/transformer-js/src/esmodule-helpers.js":"boKlo"}],"gwjAn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _enumsJs = require("../enums.js");
var _detectOverflowJs = require("../utils/detectOverflow.js");
var _detectOverflowJsDefault = parcelHelpers.interopDefault(_detectOverflowJs);
function getSideOffsets(overflow, rect, preventedOffsets) {
    if (preventedOffsets === void 0) preventedOffsets = {
        x: 0,
        y: 0
    };
    return {
        top: overflow.top - rect.height - preventedOffsets.y,
        right: overflow.right - rect.width + preventedOffsets.x,
        bottom: overflow.bottom - rect.height + preventedOffsets.y,
        left: overflow.left - rect.width - preventedOffsets.x
    };
}
function isAnySideFullyClipped(overflow) {
    return [
        (0, _enumsJs.top),
        (0, _enumsJs.right),
        (0, _enumsJs.bottom),
        (0, _enumsJs.left)
    ].some(function(side) {
        return overflow[side] >= 0;
    });
}
function hide(_ref) {
    var state = _ref.state, name = _ref.name;
    var referenceRect = state.rects.reference;
    var popperRect = state.rects.popper;
    var preventedOffsets = state.modifiersData.preventOverflow;
    var referenceOverflow = (0, _detectOverflowJsDefault.default)(state, {
        elementContext: "reference"
    });
    var popperAltOverflow = (0, _detectOverflowJsDefault.default)(state, {
        altBoundary: true
    });
    var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
    var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
    var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
    var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
    state.modifiersData[name] = {
        referenceClippingOffsets: referenceClippingOffsets,
        popperEscapeOffsets: popperEscapeOffsets,
        isReferenceHidden: isReferenceHidden,
        hasPopperEscaped: hasPopperEscaped
    };
    state.attributes.popper = Object.assign({}, state.attributes.popper, {
        "data-popper-reference-hidden": isReferenceHidden,
        "data-popper-escaped": hasPopperEscaped
    });
} // eslint-disable-next-line import/no-unused-modules
exports.default = {
    name: "hide",
    enabled: true,
    phase: "main",
    requiresIfExists: [
        "preventOverflow"
    ],
    fn: hide
};

},{"../enums.js":"e9s7y","../utils/detectOverflow.js":"7uWWS","@parcel/transformer-js/src/esmodule-helpers.js":"boKlo"}],"lCHOt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "distanceAndSkiddingToXY", ()=>distanceAndSkiddingToXY);
var _getBasePlacementJs = require("../utils/getBasePlacement.js");
var _getBasePlacementJsDefault = parcelHelpers.interopDefault(_getBasePlacementJs);
var _enumsJs = require("../enums.js"); // eslint-disable-next-line import/no-unused-modules
function distanceAndSkiddingToXY(placement, rects, offset1) {
    var basePlacement = (0, _getBasePlacementJsDefault.default)(placement);
    var invertDistance = [
        (0, _enumsJs.left),
        (0, _enumsJs.top)
    ].indexOf(basePlacement) >= 0 ? -1 : 1;
    var _ref = typeof offset1 === "function" ? offset1(Object.assign({}, rects, {
        placement: placement
    })) : offset1, skidding = _ref[0], distance = _ref[1];
    skidding = skidding || 0;
    distance = (distance || 0) * invertDistance;
    return [
        (0, _enumsJs.left),
        (0, _enumsJs.right)
    ].indexOf(basePlacement) >= 0 ? {
        x: distance,
        y: skidding
    } : {
        x: skidding,
        y: distance
    };
}
function offset(_ref2) {
    var state = _ref2.state, options = _ref2.options, name = _ref2.name;
    var _options$offset = options.offset, offset2 = _options$offset === void 0 ? [
        0,
        0
    ] : _options$offset;
    var data = (0, _enumsJs.placements).reduce(function(acc, placement) {
        acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset2);
        return acc;
    }, {});
    var _data$state$placement = data[state.placement], x = _data$state$placement.x, y = _data$state$placement.y;
    if (state.modifiersData.popperOffsets != null) {
        state.modifiersData.popperOffsets.x += x;
        state.modifiersData.popperOffsets.y += y;
    }
    state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules
exports.default = {
    name: "offset",
    enabled: true,
    phase: "main",
    requires: [
        "popperOffsets"
    ],
    fn: offset
};

},{"../utils/getBasePlacement.js":"lDcir","../enums.js":"e9s7y","@parcel/transformer-js/src/esmodule-helpers.js":"boKlo"}],"j33sS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _computeOffsetsJs = require("../utils/computeOffsets.js");
var _computeOffsetsJsDefault = parcelHelpers.interopDefault(_computeOffsetsJs);
function popperOffsets(_ref) {
    var state = _ref.state, name = _ref.name;
    // Offsets are the actual position the popper needs to have to be
    // properly positioned near its reference element
    // This is the most basic placement, and will be adjusted by
    // the modifiers in the next step
    state.modifiersData[name] = (0, _computeOffsetsJsDefault.default)({
        reference: state.rects.reference,
        element: state.rects.popper,
        strategy: "absolute",
        placement: state.placement
    });
} // eslint-disable-next-line import/no-unused-modules
exports.default = {
    name: "popperOffsets",
    enabled: true,
    phase: "read",
    fn: popperOffsets,
    data: {}
};

},{"../utils/computeOffsets.js":"7ZRM7","@parcel/transformer-js/src/esmodule-helpers.js":"boKlo"}],"dSh6X":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _enumsJs = require("../enums.js");
var _getBasePlacementJs = require("../utils/getBasePlacement.js");
var _getBasePlacementJsDefault = parcelHelpers.interopDefault(_getBasePlacementJs);
var _getMainAxisFromPlacementJs = require("../utils/getMainAxisFromPlacement.js");
var _getMainAxisFromPlacementJsDefault = parcelHelpers.interopDefault(_getMainAxisFromPlacementJs);
var _getAltAxisJs = require("../utils/getAltAxis.js");
var _getAltAxisJsDefault = parcelHelpers.interopDefault(_getAltAxisJs);
var _withinJs = require("../utils/within.js");
var _getLayoutRectJs = require("../dom-utils/getLayoutRect.js");
var _getLayoutRectJsDefault = parcelHelpers.interopDefault(_getLayoutRectJs);
var _getOffsetParentJs = require("../dom-utils/getOffsetParent.js");
var _getOffsetParentJsDefault = parcelHelpers.interopDefault(_getOffsetParentJs);
var _detectOverflowJs = require("../utils/detectOverflow.js");
var _detectOverflowJsDefault = parcelHelpers.interopDefault(_detectOverflowJs);
var _getVariationJs = require("../utils/getVariation.js");
var _getVariationJsDefault = parcelHelpers.interopDefault(_getVariationJs);
var _getFreshSideObjectJs = require("../utils/getFreshSideObject.js");
var _getFreshSideObjectJsDefault = parcelHelpers.interopDefault(_getFreshSideObjectJs);
var _mathJs = require("../utils/math.js");
function preventOverflow(_ref) {
    var state = _ref.state, options = _ref.options, name = _ref.name;
    var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, padding = options.padding, _options$tether = options.tether, tether = _options$tether === void 0 ? true : _options$tether, _options$tetherOffset = options.tetherOffset, tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
    var overflow = (0, _detectOverflowJsDefault.default)(state, {
        boundary: boundary,
        rootBoundary: rootBoundary,
        padding: padding,
        altBoundary: altBoundary
    });
    var basePlacement = (0, _getBasePlacementJsDefault.default)(state.placement);
    var variation = (0, _getVariationJsDefault.default)(state.placement);
    var isBasePlacement = !variation;
    var mainAxis = (0, _getMainAxisFromPlacementJsDefault.default)(basePlacement);
    var altAxis = (0, _getAltAxisJsDefault.default)(mainAxis);
    var popperOffsets = state.modifiersData.popperOffsets;
    var referenceRect = state.rects.reference;
    var popperRect = state.rects.popper;
    var tetherOffsetValue = typeof tetherOffset === "function" ? tetherOffset(Object.assign({}, state.rects, {
        placement: state.placement
    })) : tetherOffset;
    var normalizedTetherOffsetValue = typeof tetherOffsetValue === "number" ? {
        mainAxis: tetherOffsetValue,
        altAxis: tetherOffsetValue
    } : Object.assign({
        mainAxis: 0,
        altAxis: 0
    }, tetherOffsetValue);
    var offsetModifierState = state.modifiersData.offset ? state.modifiersData.offset[state.placement] : null;
    var data = {
        x: 0,
        y: 0
    };
    if (!popperOffsets) return;
    if (checkMainAxis) {
        var _offsetModifierState$;
        var mainSide = mainAxis === "y" ? (0, _enumsJs.top) : (0, _enumsJs.left);
        var altSide = mainAxis === "y" ? (0, _enumsJs.bottom) : (0, _enumsJs.right);
        var len = mainAxis === "y" ? "height" : "width";
        var offset = popperOffsets[mainAxis];
        var min = offset + overflow[mainSide];
        var max = offset - overflow[altSide];
        var additive = tether ? -popperRect[len] / 2 : 0;
        var minLen = variation === (0, _enumsJs.start) ? referenceRect[len] : popperRect[len];
        var maxLen = variation === (0, _enumsJs.start) ? -popperRect[len] : -referenceRect[len]; // We need to include the arrow in the calculation so the arrow doesn't go
        // outside the reference bounds
        var arrowElement = state.elements.arrow;
        var arrowRect = tether && arrowElement ? (0, _getLayoutRectJsDefault.default)(arrowElement) : {
            width: 0,
            height: 0
        };
        var arrowPaddingObject = state.modifiersData["arrow#persistent"] ? state.modifiersData["arrow#persistent"].padding : (0, _getFreshSideObjectJsDefault.default)();
        var arrowPaddingMin = arrowPaddingObject[mainSide];
        var arrowPaddingMax = arrowPaddingObject[altSide]; // If the reference length is smaller than the arrow length, we don't want
        // to include its full size in the calculation. If the reference is small
        // and near the edge of a boundary, the popper can overflow even if the
        // reference is not overflowing as well (e.g. virtual elements with no
        // width or height)
        var arrowLen = (0, _withinJs.within)(0, referenceRect[len], arrowRect[len]);
        var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis : minLen - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis;
        var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis : maxLen + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis;
        var arrowOffsetParent = state.elements.arrow && (0, _getOffsetParentJsDefault.default)(state.elements.arrow);
        var clientOffset = arrowOffsetParent ? mainAxis === "y" ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
        var offsetModifierValue = (_offsetModifierState$ = offsetModifierState == null ? void 0 : offsetModifierState[mainAxis]) != null ? _offsetModifierState$ : 0;
        var tetherMin = offset + minOffset - offsetModifierValue - clientOffset;
        var tetherMax = offset + maxOffset - offsetModifierValue;
        var preventedOffset = (0, _withinJs.within)(tether ? (0, _mathJs.min)(min, tetherMin) : min, offset, tether ? (0, _mathJs.max)(max, tetherMax) : max);
        popperOffsets[mainAxis] = preventedOffset;
        data[mainAxis] = preventedOffset - offset;
    }
    if (checkAltAxis) {
        var _offsetModifierState$2;
        var _mainSide = mainAxis === "x" ? (0, _enumsJs.top) : (0, _enumsJs.left);
        var _altSide = mainAxis === "x" ? (0, _enumsJs.bottom) : (0, _enumsJs.right);
        var _offset = popperOffsets[altAxis];
        var _len = altAxis === "y" ? "height" : "width";
        var _min = _offset + overflow[_mainSide];
        var _max = _offset - overflow[_altSide];
        var isOriginSide = [
            (0, _enumsJs.top),
            (0, _enumsJs.left)
        ].indexOf(basePlacement) !== -1;
        var _offsetModifierValue = (_offsetModifierState$2 = offsetModifierState == null ? void 0 : offsetModifierState[altAxis]) != null ? _offsetModifierState$2 : 0;
        var _tetherMin = isOriginSide ? _min : _offset - referenceRect[_len] - popperRect[_len] - _offsetModifierValue + normalizedTetherOffsetValue.altAxis;
        var _tetherMax = isOriginSide ? _offset + referenceRect[_len] + popperRect[_len] - _offsetModifierValue - normalizedTetherOffsetValue.altAxis : _max;
        var _preventedOffset = tether && isOriginSide ? (0, _withinJs.withinMaxClamp)(_tetherMin, _offset, _tetherMax) : (0, _withinJs.within)(tether ? _tetherMin : _min, _offset, tether ? _tetherMax : _max);
        popperOffsets[altAxis] = _preventedOffset;
        data[altAxis] = _preventedOffset - _offset;
    }
    state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules
exports.default = {
    name: "preventOverflow",
    enabled: true,
    phase: "main",
    fn: preventOverflow,
    requiresIfExists: [
        "offset"
    ]
};

},{"../enums.js":"e9s7y","../utils/getBasePlacement.js":"lDcir","../utils/getMainAxisFromPlacement.js":"3hI8e","../utils/getAltAxis.js":"PKtUW","../utils/within.js":"cHZSC","../dom-utils/getLayoutRect.js":"6FFHP","../dom-utils/getOffsetParent.js":"lWkJl","../utils/detectOverflow.js":"7uWWS","../utils/getVariation.js":"gKAYa","../utils/getFreshSideObject.js":"dIPNr","../utils/math.js":"h98n4","@parcel/transformer-js/src/esmodule-helpers.js":"boKlo"}],"PKtUW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function getAltAxis(axis) {
    return axis === "x" ? "y" : "x";
}
exports.default = getAltAxis;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"boKlo"}],"dNHHN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "popperGenerator", ()=>popperGenerator);
parcelHelpers.export(exports, "createPopper", ()=>createPopper);
parcelHelpers.export(exports, "detectOverflow", ()=>(0, _detectOverflowJsDefault.default));
var _getCompositeRectJs = require("./dom-utils/getCompositeRect.js");
var _getCompositeRectJsDefault = parcelHelpers.interopDefault(_getCompositeRectJs);
var _getLayoutRectJs = require("./dom-utils/getLayoutRect.js");
var _getLayoutRectJsDefault = parcelHelpers.interopDefault(_getLayoutRectJs);
var _listScrollParentsJs = require("./dom-utils/listScrollParents.js");
var _listScrollParentsJsDefault = parcelHelpers.interopDefault(_listScrollParentsJs);
var _getOffsetParentJs = require("./dom-utils/getOffsetParent.js");
var _getOffsetParentJsDefault = parcelHelpers.interopDefault(_getOffsetParentJs);
var _getComputedStyleJs = require("./dom-utils/getComputedStyle.js");
var _getComputedStyleJsDefault = parcelHelpers.interopDefault(_getComputedStyleJs);
var _orderModifiersJs = require("./utils/orderModifiers.js");
var _orderModifiersJsDefault = parcelHelpers.interopDefault(_orderModifiersJs);
var _debounceJs = require("./utils/debounce.js");
var _debounceJsDefault = parcelHelpers.interopDefault(_debounceJs);
var _validateModifiersJs = require("./utils/validateModifiers.js");
var _validateModifiersJsDefault = parcelHelpers.interopDefault(_validateModifiersJs);
var _uniqueByJs = require("./utils/uniqueBy.js");
var _uniqueByJsDefault = parcelHelpers.interopDefault(_uniqueByJs);
var _getBasePlacementJs = require("./utils/getBasePlacement.js");
var _getBasePlacementJsDefault = parcelHelpers.interopDefault(_getBasePlacementJs);
var _mergeByNameJs = require("./utils/mergeByName.js");
var _mergeByNameJsDefault = parcelHelpers.interopDefault(_mergeByNameJs);
var _detectOverflowJs = require("./utils/detectOverflow.js");
var _detectOverflowJsDefault = parcelHelpers.interopDefault(_detectOverflowJs);
var _instanceOfJs = require("./dom-utils/instanceOf.js");
var _enumsJs = require("./enums.js");
var INVALID_ELEMENT_ERROR = "Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.";
var INFINITE_LOOP_ERROR = "Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.";
var DEFAULT_OPTIONS = {
    placement: "bottom",
    modifiers: [],
    strategy: "absolute"
};
function areValidElements() {
    for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
    return !args.some(function(element) {
        return !(element && typeof element.getBoundingClientRect === "function");
    });
}
function popperGenerator(generatorOptions) {
    if (generatorOptions === void 0) generatorOptions = {};
    var _generatorOptions = generatorOptions, _generatorOptions$def = _generatorOptions.defaultModifiers, defaultModifiers = _generatorOptions$def === void 0 ? [] : _generatorOptions$def, _generatorOptions$def2 = _generatorOptions.defaultOptions, defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
    return function createPopper(reference1, popper1, options1) {
        if (options1 === void 0) options1 = defaultOptions;
        var state1 = {
            placement: "bottom",
            orderedModifiers: [],
            options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
            modifiersData: {},
            elements: {
                reference: reference1,
                popper: popper1
            },
            attributes: {},
            styles: {}
        };
        var effectCleanupFns = [];
        var isDestroyed = false;
        var instance = {
            state: state1,
            setOptions: function setOptions(setOptionsAction) {
                var options = typeof setOptionsAction === "function" ? setOptionsAction(state1.options) : setOptionsAction;
                cleanupModifierEffects();
                state1.options = Object.assign({}, defaultOptions, state1.options, options);
                state1.scrollParents = {
                    reference: (0, _instanceOfJs.isElement)(reference1) ? (0, _listScrollParentsJsDefault.default)(reference1) : reference1.contextElement ? (0, _listScrollParentsJsDefault.default)(reference1.contextElement) : [],
                    popper: (0, _listScrollParentsJsDefault.default)(popper1)
                }; // Orders the modifiers based on their dependencies and `phase`
                // properties
                var orderedModifiers = (0, _orderModifiersJsDefault.default)((0, _mergeByNameJsDefault.default)([].concat(defaultModifiers, state1.options.modifiers))); // Strip out disabled modifiers
                state1.orderedModifiers = orderedModifiers.filter(function(m) {
                    return m.enabled;
                }); // Validate the provided modifiers so that the consumer will get warned
                var modifiers = (0, _uniqueByJsDefault.default)([].concat(orderedModifiers, state1.options.modifiers), function(_ref) {
                    var name = _ref.name;
                    return name;
                });
                (0, _validateModifiersJsDefault.default)(modifiers);
                if ((0, _getBasePlacementJsDefault.default)(state1.options.placement) === (0, _enumsJs.auto)) {
                    var flipModifier = state1.orderedModifiers.find(function(_ref2) {
                        var name = _ref2.name;
                        return name === "flip";
                    });
                    if (!flipModifier) console.error([
                        'Popper: "auto" placements require the "flip" modifier be',
                        "present and enabled to work."
                    ].join(" "));
                }
                var _getComputedStyle = (0, _getComputedStyleJsDefault.default)(popper1), marginTop = _getComputedStyle.marginTop, marginRight = _getComputedStyle.marginRight, marginBottom = _getComputedStyle.marginBottom, marginLeft = _getComputedStyle.marginLeft; // We no longer take into account `margins` on the popper, and it can
                // cause bugs with positioning, so we'll warn the consumer
                if ([
                    marginTop,
                    marginRight,
                    marginBottom,
                    marginLeft
                ].some(function(margin) {
                    return parseFloat(margin);
                })) console.warn([
                    'Popper: CSS "margin" styles cannot be used to apply padding',
                    "between the popper and its reference element or boundary.",
                    "To replicate margin, use the `offset` modifier, as well as",
                    "the `padding` option in the `preventOverflow` and `flip`",
                    "modifiers."
                ].join(" "));
                runModifierEffects();
                return instance.update();
            },
            // Sync update – it will always be executed, even if not necessary. This
            // is useful for low frequency updates where sync behavior simplifies the
            // logic.
            // For high frequency updates (e.g. `resize` and `scroll` events), always
            // prefer the async Popper#update method
            forceUpdate: function forceUpdate() {
                if (isDestroyed) return;
                var _state$elements = state1.elements, reference = _state$elements.reference, popper = _state$elements.popper; // Don't proceed if `reference` or `popper` are not valid elements
                // anymore
                if (!areValidElements(reference, popper)) {
                    console.error(INVALID_ELEMENT_ERROR);
                    return;
                } // Store the reference and popper rects to be read by modifiers
                state1.rects = {
                    reference: (0, _getCompositeRectJsDefault.default)(reference, (0, _getOffsetParentJsDefault.default)(popper), state1.options.strategy === "fixed"),
                    popper: (0, _getLayoutRectJsDefault.default)(popper)
                }; // Modifiers have the ability to reset the current update cycle. The
                // most common use case for this is the `flip` modifier changing the
                // placement, which then needs to re-run all the modifiers, because the
                // logic was previously ran for the previous placement and is therefore
                // stale/incorrect
                state1.reset = false;
                state1.placement = state1.options.placement; // On each update cycle, the `modifiersData` property for each modifier
                // is filled with the initial data specified by the modifier. This means
                // it doesn't persist and is fresh on each update.
                // To ensure persistent data, use `${name}#persistent`
                state1.orderedModifiers.forEach(function(modifier) {
                    return state1.modifiersData[modifier.name] = Object.assign({}, modifier.data);
                });
                var __debug_loops__ = 0;
                for(var index = 0; index < state1.orderedModifiers.length; index++){
                    __debug_loops__ += 1;
                    if (__debug_loops__ > 100) {
                        console.error(INFINITE_LOOP_ERROR);
                        break;
                    }
                    if (state1.reset === true) {
                        state1.reset = false;
                        index = -1;
                        continue;
                    }
                    var _state$orderedModifie = state1.orderedModifiers[index], fn = _state$orderedModifie.fn, _state$orderedModifie2 = _state$orderedModifie.options, _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2, name = _state$orderedModifie.name;
                    if (typeof fn === "function") state1 = fn({
                        state: state1,
                        options: _options,
                        name: name,
                        instance: instance
                    }) || state1;
                }
            },
            // Async and optimistically optimized update – it will not be executed if
            // not necessary (debounced to run at most once-per-tick)
            update: (0, _debounceJsDefault.default)(function() {
                return new Promise(function(resolve) {
                    instance.forceUpdate();
                    resolve(state1);
                });
            }),
            destroy: function destroy() {
                cleanupModifierEffects();
                isDestroyed = true;
            }
        };
        if (!areValidElements(reference1, popper1)) {
            console.error(INVALID_ELEMENT_ERROR);
            return instance;
        }
        instance.setOptions(options1).then(function(state) {
            if (!isDestroyed && options1.onFirstUpdate) options1.onFirstUpdate(state);
        }); // Modifiers have the ability to execute arbitrary code before the first
        // update cycle runs. They will be executed in the same order as the update
        // cycle. This is useful when a modifier adds some persistent data that
        // other modifiers need to use, but the modifier is run after the dependent
        // one.
        function runModifierEffects() {
            state1.orderedModifiers.forEach(function(_ref3) {
                var name = _ref3.name, _ref3$options = _ref3.options, options = _ref3$options === void 0 ? {} : _ref3$options, effect = _ref3.effect;
                if (typeof effect === "function") {
                    var cleanupFn = effect({
                        state: state1,
                        name: name,
                        instance: instance,
                        options: options
                    });
                    var noopFn = function noopFn() {};
                    effectCleanupFns.push(cleanupFn || noopFn);
                }
            });
        }
        function cleanupModifierEffects() {
            effectCleanupFns.forEach(function(fn) {
                return fn();
            });
            effectCleanupFns = [];
        }
        return instance;
    };
}
var createPopper = /*#__PURE__*/ popperGenerator(); // eslint-disable-next-line import/no-unused-modules

},{"./dom-utils/getCompositeRect.js":"2NPq9","./dom-utils/getLayoutRect.js":"6FFHP","./dom-utils/listScrollParents.js":"fJMQG","./dom-utils/getOffsetParent.js":"lWkJl","./dom-utils/getComputedStyle.js":"duKXO","./utils/orderModifiers.js":"iP4cg","./utils/debounce.js":"87OQ1","./utils/validateModifiers.js":"grsKQ","./utils/uniqueBy.js":"3ki7L","./utils/getBasePlacement.js":"lDcir","./utils/mergeByName.js":"ayFYN","./utils/detectOverflow.js":"7uWWS","./dom-utils/instanceOf.js":"gKrwR","./enums.js":"e9s7y","@parcel/transformer-js/src/esmodule-helpers.js":"boKlo"}],"2NPq9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getBoundingClientRectJs = require("./getBoundingClientRect.js");
var _getBoundingClientRectJsDefault = parcelHelpers.interopDefault(_getBoundingClientRectJs);
var _getNodeScrollJs = require("./getNodeScroll.js");
var _getNodeScrollJsDefault = parcelHelpers.interopDefault(_getNodeScrollJs);
var _getNodeNameJs = require("./getNodeName.js");
var _getNodeNameJsDefault = parcelHelpers.interopDefault(_getNodeNameJs);
var _instanceOfJs = require("./instanceOf.js");
var _getWindowScrollBarXJs = require("./getWindowScrollBarX.js");
var _getWindowScrollBarXJsDefault = parcelHelpers.interopDefault(_getWindowScrollBarXJs);
var _getDocumentElementJs = require("./getDocumentElement.js");
var _getDocumentElementJsDefault = parcelHelpers.interopDefault(_getDocumentElementJs);
var _isScrollParentJs = require("./isScrollParent.js");
var _isScrollParentJsDefault = parcelHelpers.interopDefault(_isScrollParentJs);
var _mathJs = require("../utils/math.js");
function isElementScaled(element) {
    var rect = element.getBoundingClientRect();
    var scaleX = (0, _mathJs.round)(rect.width) / element.offsetWidth || 1;
    var scaleY = (0, _mathJs.round)(rect.height) / element.offsetHeight || 1;
    return scaleX !== 1 || scaleY !== 1;
} // Returns the composite rect of an element relative to its offsetParent.
function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
    if (isFixed === void 0) isFixed = false;
    var isOffsetParentAnElement = (0, _instanceOfJs.isHTMLElement)(offsetParent);
    var offsetParentIsScaled = (0, _instanceOfJs.isHTMLElement)(offsetParent) && isElementScaled(offsetParent);
    var documentElement = (0, _getDocumentElementJsDefault.default)(offsetParent);
    var rect = (0, _getBoundingClientRectJsDefault.default)(elementOrVirtualElement, offsetParentIsScaled);
    var scroll = {
        scrollLeft: 0,
        scrollTop: 0
    };
    var offsets = {
        x: 0,
        y: 0
    };
    if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
        if ((0, _getNodeNameJsDefault.default)(offsetParent) !== "body" || (0, _isScrollParentJsDefault.default)(documentElement)) scroll = (0, _getNodeScrollJsDefault.default)(offsetParent);
        if ((0, _instanceOfJs.isHTMLElement)(offsetParent)) {
            offsets = (0, _getBoundingClientRectJsDefault.default)(offsetParent, true);
            offsets.x += offsetParent.clientLeft;
            offsets.y += offsetParent.clientTop;
        } else if (documentElement) offsets.x = (0, _getWindowScrollBarXJsDefault.default)(documentElement);
    }
    return {
        x: rect.left + scroll.scrollLeft - offsets.x,
        y: rect.top + scroll.scrollTop - offsets.y,
        width: rect.width,
        height: rect.height
    };
}
exports.default = getCompositeRect;

},{"./getBoundingClientRect.js":"15x8t","./getNodeScroll.js":"bSFOh","./getNodeName.js":"7waoK","./instanceOf.js":"gKrwR","./getWindowScrollBarX.js":"jc6qC","./getDocumentElement.js":"e3uMC","./isScrollParent.js":"1gdAa","../utils/math.js":"h98n4","@parcel/transformer-js/src/esmodule-helpers.js":"boKlo"}],"bSFOh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getWindowScrollJs = require("./getWindowScroll.js");
var _getWindowScrollJsDefault = parcelHelpers.interopDefault(_getWindowScrollJs);
var _getWindowJs = require("./getWindow.js");
var _getWindowJsDefault = parcelHelpers.interopDefault(_getWindowJs);
var _instanceOfJs = require("./instanceOf.js");
var _getHTMLElementScrollJs = require("./getHTMLElementScroll.js");
var _getHTMLElementScrollJsDefault = parcelHelpers.interopDefault(_getHTMLElementScrollJs);
function getNodeScroll(node) {
    if (node === (0, _getWindowJsDefault.default)(node) || !(0, _instanceOfJs.isHTMLElement)(node)) return (0, _getWindowScrollJsDefault.default)(node);
    else return (0, _getHTMLElementScrollJsDefault.default)(node);
}
exports.default = getNodeScroll;

},{"./getWindowScroll.js":"eeAtv","./getWindow.js":"6mER2","./instanceOf.js":"gKrwR","./getHTMLElementScroll.js":"04Y60","@parcel/transformer-js/src/esmodule-helpers.js":"boKlo"}],"04Y60":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function getHTMLElementScroll(element) {
    return {
        scrollLeft: element.scrollLeft,
        scrollTop: element.scrollTop
    };
}
exports.default = getHTMLElementScroll;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"boKlo"}],"iP4cg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _enumsJs = require("../enums.js"); // source: https://stackoverflow.com/questions/49875255
function order(modifiers) {
    var map = new Map();
    var visited = new Set();
    var result = [];
    modifiers.forEach(function(modifier) {
        map.set(modifier.name, modifier);
    }); // On visiting object, check for its dependencies and visit them recursively
    function sort(modifier) {
        visited.add(modifier.name);
        var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
        requires.forEach(function(dep) {
            if (!visited.has(dep)) {
                var depModifier = map.get(dep);
                if (depModifier) sort(depModifier);
            }
        });
        result.push(modifier);
    }
    modifiers.forEach(function(modifier) {
        if (!visited.has(modifier.name)) // check for visited object
        sort(modifier);
    });
    return result;
}
function orderModifiers(modifiers) {
    // order based on dependencies
    var orderedModifiers = order(modifiers); // order based on phase
    return (0, _enumsJs.modifierPhases).reduce(function(acc, phase) {
        return acc.concat(orderedModifiers.filter(function(modifier) {
            return modifier.phase === phase;
        }));
    }, []);
}
exports.default = orderModifiers;

},{"../enums.js":"e9s7y","@parcel/transformer-js/src/esmodule-helpers.js":"boKlo"}],"87OQ1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function debounce(fn) {
    var pending;
    return function() {
        if (!pending) pending = new Promise(function(resolve) {
            Promise.resolve().then(function() {
                pending = undefined;
                resolve(fn());
            });
        });
        return pending;
    };
}
exports.default = debounce;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"boKlo"}],"grsKQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _formatJs = require("./format.js");
var _formatJsDefault = parcelHelpers.interopDefault(_formatJs);
var _enumsJs = require("../enums.js");
var INVALID_MODIFIER_ERROR = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s';
var MISSING_DEPENDENCY_ERROR = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available';
var VALID_PROPERTIES = [
    "name",
    "enabled",
    "phase",
    "fn",
    "effect",
    "requires",
    "options"
];
function validateModifiers(modifiers) {
    modifiers.forEach(function(modifier) {
        [].concat(Object.keys(modifier), VALID_PROPERTIES) // IE11-compatible replacement for `new Set(iterable)`
        .filter(function(value, index, self) {
            return self.indexOf(value) === index;
        }).forEach(function(key) {
            switch(key){
                case "name":
                    if (typeof modifier.name !== "string") console.error((0, _formatJsDefault.default)(INVALID_MODIFIER_ERROR, String(modifier.name), '"name"', '"string"', '"' + String(modifier.name) + '"'));
                    break;
                case "enabled":
                    if (typeof modifier.enabled !== "boolean") console.error((0, _formatJsDefault.default)(INVALID_MODIFIER_ERROR, modifier.name, '"enabled"', '"boolean"', '"' + String(modifier.enabled) + '"'));
                    break;
                case "phase":
                    if ((0, _enumsJs.modifierPhases).indexOf(modifier.phase) < 0) console.error((0, _formatJsDefault.default)(INVALID_MODIFIER_ERROR, modifier.name, '"phase"', "either " + (0, _enumsJs.modifierPhases).join(", "), '"' + String(modifier.phase) + '"'));
                    break;
                case "fn":
                    if (typeof modifier.fn !== "function") console.error((0, _formatJsDefault.default)(INVALID_MODIFIER_ERROR, modifier.name, '"fn"', '"function"', '"' + String(modifier.fn) + '"'));
                    break;
                case "effect":
                    if (modifier.effect != null && typeof modifier.effect !== "function") console.error((0, _formatJsDefault.default)(INVALID_MODIFIER_ERROR, modifier.name, '"effect"', '"function"', '"' + String(modifier.fn) + '"'));
                    break;
                case "requires":
                    if (modifier.requires != null && !Array.isArray(modifier.requires)) console.error((0, _formatJsDefault.default)(INVALID_MODIFIER_ERROR, modifier.name, '"requires"', '"array"', '"' + String(modifier.requires) + '"'));
                    break;
                case "requiresIfExists":
                    if (!Array.isArray(modifier.requiresIfExists)) console.error((0, _formatJsDefault.default)(INVALID_MODIFIER_ERROR, modifier.name, '"requiresIfExists"', '"array"', '"' + String(modifier.requiresIfExists) + '"'));
                    break;
                case "options":
                case "data":
                    break;
                default:
                    console.error('PopperJS: an invalid property has been provided to the "' + modifier.name + '" modifier, valid properties are ' + VALID_PROPERTIES.map(function(s) {
                        return '"' + s + '"';
                    }).join(", ") + '; but "' + key + '" was provided.');
            }
            modifier.requires && modifier.requires.forEach(function(requirement) {
                if (modifiers.find(function(mod) {
                    return mod.name === requirement;
                }) == null) console.error((0, _formatJsDefault.default)(MISSING_DEPENDENCY_ERROR, String(modifier.name), requirement, requirement));
            });
        });
    });
}
exports.default = validateModifiers;

},{"./format.js":"5jqdf","../enums.js":"e9s7y","@parcel/transformer-js/src/esmodule-helpers.js":"boKlo"}],"5jqdf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function format(str) {
    for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++)args[_key - 1] = arguments[_key];
    return [].concat(args).reduce(function(p, c) {
        return p.replace(/%s/, c);
    }, str);
}
exports.default = format;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"boKlo"}],"3ki7L":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function uniqueBy(arr, fn) {
    var identifiers = new Set();
    return arr.filter(function(item) {
        var identifier = fn(item);
        if (!identifiers.has(identifier)) {
            identifiers.add(identifier);
            return true;
        }
    });
}
exports.default = uniqueBy;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"boKlo"}],"ayFYN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function mergeByName(modifiers) {
    var merged1 = modifiers.reduce(function(merged, current) {
        var existing = merged[current.name];
        merged[current.name] = existing ? Object.assign({}, existing, current, {
            options: Object.assign({}, existing.options, current.options),
            data: Object.assign({}, existing.data, current.data)
        }) : current;
        return merged;
    }, {}); // IE11 does not support Object.values
    return Object.keys(merged1).map(function(key) {
        return merged1[key];
    });
}
exports.default = mergeByName;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"boKlo"}],"hCHGX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createPopper", ()=>createPopper) // eslint-disable-next-line import/no-unused-modules
;
parcelHelpers.export(exports, "popperGenerator", ()=>(0, _createPopperJs.popperGenerator));
parcelHelpers.export(exports, "defaultModifiers", ()=>defaultModifiers);
parcelHelpers.export(exports, "detectOverflow", ()=>(0, _createPopperJs.detectOverflow));
parcelHelpers.export(exports, "createPopperLite", ()=>(0, _popperLiteJs.createPopper)) // eslint-disable-next-line import/no-unused-modules
;
var _createPopperJs = require("./createPopper.js");
var _eventListenersJs = require("./modifiers/eventListeners.js");
var _eventListenersJsDefault = parcelHelpers.interopDefault(_eventListenersJs);
var _popperOffsetsJs = require("./modifiers/popperOffsets.js");
var _popperOffsetsJsDefault = parcelHelpers.interopDefault(_popperOffsetsJs);
var _computeStylesJs = require("./modifiers/computeStyles.js");
var _computeStylesJsDefault = parcelHelpers.interopDefault(_computeStylesJs);
var _applyStylesJs = require("./modifiers/applyStyles.js");
var _applyStylesJsDefault = parcelHelpers.interopDefault(_applyStylesJs);
var _offsetJs = require("./modifiers/offset.js");
var _offsetJsDefault = parcelHelpers.interopDefault(_offsetJs);
var _flipJs = require("./modifiers/flip.js");
var _flipJsDefault = parcelHelpers.interopDefault(_flipJs);
var _preventOverflowJs = require("./modifiers/preventOverflow.js");
var _preventOverflowJsDefault = parcelHelpers.interopDefault(_preventOverflowJs);
var _arrowJs = require("./modifiers/arrow.js");
var _arrowJsDefault = parcelHelpers.interopDefault(_arrowJs);
var _hideJs = require("./modifiers/hide.js");
var _hideJsDefault = parcelHelpers.interopDefault(_hideJs);
var _popperLiteJs = require("./popper-lite.js");
var _indexJs = require("./modifiers/index.js");
parcelHelpers.exportAll(_indexJs, exports);
var defaultModifiers = [
    (0, _eventListenersJsDefault.default),
    (0, _popperOffsetsJsDefault.default),
    (0, _computeStylesJsDefault.default),
    (0, _applyStylesJsDefault.default),
    (0, _offsetJsDefault.default),
    (0, _flipJsDefault.default),
    (0, _preventOverflowJsDefault.default),
    (0, _arrowJsDefault.default),
    (0, _hideJsDefault.default)
];
var createPopper = /*#__PURE__*/ (0, _createPopperJs.popperGenerator)({
    defaultModifiers: defaultModifiers
}); // eslint-disable-next-line import/no-unused-modules

},{"./createPopper.js":"dNHHN","./modifiers/eventListeners.js":"dtJWQ","./modifiers/popperOffsets.js":"j33sS","./modifiers/computeStyles.js":"4p01Q","./modifiers/applyStyles.js":"fKaVm","./modifiers/offset.js":"lCHOt","./modifiers/flip.js":"igbXP","./modifiers/preventOverflow.js":"dSh6X","./modifiers/arrow.js":"bpkna","./modifiers/hide.js":"gwjAn","./popper-lite.js":false,"./modifiers/index.js":"2dCOw","@parcel/transformer-js/src/esmodule-helpers.js":"boKlo"}],"42519":[function() {},{}]},["ddd0V","3Nd82"], "3Nd82", "parcelRequirefd8e")

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OztBQWVBLGtEQUFTLFlBQVksQ0FBc0QsQ0FBQyxvREFBb0Q7O0FBQWhJLHFEQUF1QixDQUFBLEdBQUEsK0JBQWUsQ0FBQSxDQUFxQztBQUEzRSxzREFBd0MsZ0JBQWdCLENBQW1CO0FBQTNFLG9EQUEwRCxDQUFBLEdBQUEsOEJBQWMsQ0FBQSxDQUFHO0FBRTNFLHNGQUFvRSxDQUFDLG9EQUFvRDs7QUFqQnpILGtEQUFvRTtBQUNwRSxnRUFBMkQ7O0FBQzNELDhEQUF5RDs7QUFDekQsOERBQXlEOztBQUN6RCwwREFBcUQ7O0FBQ3JELGdEQUEyQzs7QUFDM0MsNENBQXVDOztBQUN2QyxrRUFBNkQ7O0FBQzdELDhDQUF5Qzs7QUFDekMsNENBQXVDOztBQVF2QywrQ0FBb0U7QUFFcEUsOENBQXFDO0FBQXJDLHdCQUFBLFFBQXFDLFVBQUE7QUFUckMsSUFBSSxnQkFBZ0IsR0FBRztJQUFDLENBQUEsR0FBQSxnQ0FBYyxDQUFBO0lBQUUsQ0FBQSxHQUFBLCtCQUFhLENBQUE7SUFBRSxDQUFBLEdBQUEsK0JBQWEsQ0FBQTtJQUFFLENBQUEsR0FBQSw2QkFBVyxDQUFBO0lBQUUsQ0FBQSxHQUFBLHdCQUFNLENBQUE7SUFBRSxDQUFBLEdBQUEsc0JBQUksQ0FBQTtJQUFFLENBQUEsR0FBQSxpQ0FBZSxDQUFBO0lBQUUsQ0FBQSxHQUFBLHVCQUFLLENBQUE7SUFBRSxDQUFBLEdBQUEsc0JBQUksQ0FBQTtDQUFDLEFBQUM7QUFDL0gsSUFBSSxZQUFZLEdBQUcsYUFBYSxDQUFBLENBQUEsR0FBQSwrQkFBZSxDQUFBLENBQUM7SUFDOUMsZ0JBQWdCLEVBQUUsZ0JBQWdCO0NBQ25DLENBQUMsQUFBQyxFQUFDLG9EQUFvRCIsInNvdXJjZXMiOlsibm9kZV9tb2R1bGVzL0BwbGFzbW9ocS9wYXJjZWwtcnVudGltZS9kaXN0L3J1bnRpbWUtYjRmMjA0NzU1ZDI2Mjc3OS5qcyIsImNvbnRlbnRzL3ByaW1ldmlkZW8udHMiLCJub2RlX21vZHVsZXMvdGlwcHkuanMvZGlzdC90aXBweS5lc20uanMiLCJub2RlX21vZHVsZXMvdGlwcHkuanMvc3JjL2NvbnN0YW50cy50cyIsIm5vZGVfbW9kdWxlcy90aXBweS5qcy9zcmMvdXRpbHMudHMiLCJub2RlX21vZHVsZXMvdGlwcHkuanMvc3JjL2RvbS11dGlscy50cyIsIm5vZGVfbW9kdWxlcy90aXBweS5qcy9zcmMvYmluZEdsb2JhbEV2ZW50TGlzdGVuZXJzLnRzIiwibm9kZV9tb2R1bGVzL3RpcHB5LmpzL3NyYy9icm93c2VyLnRzIiwibm9kZV9tb2R1bGVzL3RpcHB5LmpzL3NyYy92YWxpZGF0aW9uLnRzIiwibm9kZV9tb2R1bGVzL3RpcHB5LmpzL3NyYy9wcm9wcy50cyIsIm5vZGVfbW9kdWxlcy90aXBweS5qcy9zcmMvdGVtcGxhdGUudHMiLCJub2RlX21vZHVsZXMvdGlwcHkuanMvc3JjL2NyZWF0ZVRpcHB5LnRzIiwibm9kZV9tb2R1bGVzL3RpcHB5LmpzL3NyYy9pbmRleC50cyIsIm5vZGVfbW9kdWxlcy90aXBweS5qcy9zcmMvYWRkb25zL2NyZWF0ZVNpbmdsZXRvbi50cyIsIm5vZGVfbW9kdWxlcy90aXBweS5qcy9zcmMvYWRkb25zL2RlbGVnYXRlLnRzIiwibm9kZV9tb2R1bGVzL3RpcHB5LmpzL3NyYy9wbHVnaW5zL2FuaW1hdGVGaWxsLnRzIiwibm9kZV9tb2R1bGVzL3RpcHB5LmpzL3NyYy9wbHVnaW5zL2ZvbGxvd0N1cnNvci50cyIsIm5vZGVfbW9kdWxlcy90aXBweS5qcy9zcmMvcGx1Z2lucy9pbmxpbmVQb3NpdGlvbmluZy50cyIsIm5vZGVfbW9kdWxlcy90aXBweS5qcy9zcmMvcGx1Z2lucy9zdGlja3kudHMiLCJub2RlX21vZHVsZXMvdGlwcHkuanMvYnVpbGQvYmFzZS5qcyIsIm5vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvaW5kZXguanMiLCJub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2VudW1zLmpzIiwibm9kZV9tb2R1bGVzL0BwYXJjZWwvdHJhbnNmb3JtZXItanMvc3JjL2VzbW9kdWxlLWhlbHBlcnMuanMiLCJub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL21vZGlmaWVycy9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvbW9kaWZpZXJzL2FwcGx5U3R5bGVzLmpzIiwibm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9kb20tdXRpbHMvZ2V0Tm9kZU5hbWUuanMiLCJub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9pbnN0YW5jZU9mLmpzIiwibm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9kb20tdXRpbHMvZ2V0V2luZG93LmpzIiwibm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9tb2RpZmllcnMvYXJyb3cuanMiLCJub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL2dldEJhc2VQbGFjZW1lbnQuanMiLCJub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9nZXRMYXlvdXRSZWN0LmpzIiwibm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9kb20tdXRpbHMvZ2V0Qm91bmRpbmdDbGllbnRSZWN0LmpzIiwibm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi91dGlscy9tYXRoLmpzIiwibm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9kb20tdXRpbHMvY29udGFpbnMuanMiLCJub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9nZXRPZmZzZXRQYXJlbnQuanMiLCJub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9nZXRDb21wdXRlZFN0eWxlLmpzIiwibm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9kb20tdXRpbHMvaXNUYWJsZUVsZW1lbnQuanMiLCJub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9nZXRQYXJlbnROb2RlLmpzIiwibm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9kb20tdXRpbHMvZ2V0RG9jdW1lbnRFbGVtZW50LmpzIiwibm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi91dGlscy9nZXRNYWluQXhpc0Zyb21QbGFjZW1lbnQuanMiLCJub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL3dpdGhpbi5qcyIsIm5vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvdXRpbHMvbWVyZ2VQYWRkaW5nT2JqZWN0LmpzIiwibm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi91dGlscy9nZXRGcmVzaFNpZGVPYmplY3QuanMiLCJub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL2V4cGFuZFRvSGFzaE1hcC5qcyIsIm5vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvbW9kaWZpZXJzL2NvbXB1dGVTdHlsZXMuanMiLCJub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL2dldFZhcmlhdGlvbi5qcyIsIm5vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvbW9kaWZpZXJzL2V2ZW50TGlzdGVuZXJzLmpzIiwibm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9tb2RpZmllcnMvZmxpcC5qcyIsIm5vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvdXRpbHMvZ2V0T3Bwb3NpdGVQbGFjZW1lbnQuanMiLCJub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL2dldE9wcG9zaXRlVmFyaWF0aW9uUGxhY2VtZW50LmpzIiwibm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi91dGlscy9kZXRlY3RPdmVyZmxvdy5qcyIsIm5vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2dldENsaXBwaW5nUmVjdC5qcyIsIm5vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2dldFZpZXdwb3J0UmVjdC5qcyIsIm5vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2dldFdpbmRvd1Njcm9sbEJhclguanMiLCJub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9nZXRXaW5kb3dTY3JvbGwuanMiLCJub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9nZXREb2N1bWVudFJlY3QuanMiLCJub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9saXN0U2Nyb2xsUGFyZW50cy5qcyIsIm5vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2dldFNjcm9sbFBhcmVudC5qcyIsIm5vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2lzU2Nyb2xsUGFyZW50LmpzIiwibm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi91dGlscy9yZWN0VG9DbGllbnRSZWN0LmpzIiwibm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi91dGlscy9jb21wdXRlT2Zmc2V0cy5qcyIsIm5vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvdXRpbHMvY29tcHV0ZUF1dG9QbGFjZW1lbnQuanMiLCJub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL21vZGlmaWVycy9oaWRlLmpzIiwibm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9tb2RpZmllcnMvb2Zmc2V0LmpzIiwibm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9tb2RpZmllcnMvcG9wcGVyT2Zmc2V0cy5qcyIsIm5vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvbW9kaWZpZXJzL3ByZXZlbnRPdmVyZmxvdy5qcyIsIm5vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvdXRpbHMvZ2V0QWx0QXhpcy5qcyIsIm5vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvY3JlYXRlUG9wcGVyLmpzIiwibm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9kb20tdXRpbHMvZ2V0Q29tcG9zaXRlUmVjdC5qcyIsIm5vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2dldE5vZGVTY3JvbGwuanMiLCJub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9nZXRIVE1MRWxlbWVudFNjcm9sbC5qcyIsIm5vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvdXRpbHMvb3JkZXJNb2RpZmllcnMuanMiLCJub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL2RlYm91bmNlLmpzIiwibm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi91dGlscy92YWxpZGF0ZU1vZGlmaWVycy5qcyIsIm5vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvdXRpbHMvZm9ybWF0LmpzIiwibm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi91dGlscy91bmlxdWVCeS5qcyIsIm5vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvdXRpbHMvbWVyZ2VCeU5hbWUuanMiLCJub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3BvcHBlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgSE1SX0hPU1QgPSBcImxvY2FsaG9zdFwiO3ZhciBITVJfUE9SVCA9IDE4MTU7dmFyIEhNUl9TRUNVUkUgPSBmYWxzZTt2YXIgSE1SX0VOVl9IQVNIID0gXCJlNzkyZmJiZGFhNzhlZTg0XCI7bW9kdWxlLmJ1bmRsZS5ITVJfQlVORExFX0lEID0gXCI0M2ZjNmFjZjEwNThmNGViXCI7ZnVuY3Rpb24gZ2V0SG9zdG5hbWUoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIEhNUl9IT1NUIHx8XHJcbiAgICAobG9jYXRpb24ucHJvdG9jb2wuaW5kZXhPZihcImh0dHBcIikgPT09IDAgPyBsb2NhdGlvbi5ob3N0bmFtZSA6IFwibG9jYWxob3N0XCIpXHJcbiAgKVxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRQb3J0KCkge1xyXG4gIHJldHVybiBITVJfUE9SVCB8fCBsb2NhdGlvbi5wb3J0XHJcbn1cclxuXHJcbnZhciBwYXJlbnQgPSBtb2R1bGUuYnVuZGxlLnBhcmVudFxyXG5pZiAoKCFwYXJlbnQgfHwgIXBhcmVudC5pc1BhcmNlbFJlcXVpcmUpICYmIHR5cGVvZiBXZWJTb2NrZXQgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICB2YXIgaG9zdG5hbWUgPSBnZXRIb3N0bmFtZSgpXHJcbiAgdmFyIHBvcnQgPSBnZXRQb3J0KClcclxuICB2YXIgcHJvdG9jb2wgPVxyXG4gICAgSE1SX1NFQ1VSRSB8fFxyXG4gICAgKGxvY2F0aW9uLnByb3RvY29sID09IFwiaHR0cHM6XCIgJiZcclxuICAgICAgIS9sb2NhbGhvc3R8MTI3LjAuMC4xfDAuMC4wLjAvLnRlc3QoaG9zdG5hbWUpKVxyXG4gICAgICA/IFwid3NzXCJcclxuICAgICAgOiBcIndzXCJcclxuICB2YXIgd3MgPSBuZXcgV2ViU29ja2V0KFxyXG4gICAgcHJvdG9jb2wgKyBcIjovL1wiICsgaG9zdG5hbWUgKyAocG9ydCA/IFwiOlwiICsgcG9ydCA6IFwiXCIpICsgXCIvXCJcclxuICApXHJcblxyXG4gIC8vIElmIHRoZXJlJ3MgYW4gZXJyb3IgaXQncyBwcm9iYWJseSBiZWNhdXNlIG9mIGEgcmFjZVxyXG4gIC8vIGJldHdlZW4gdGhpcyBjb250ZW50IHNjcmlwdCBhbmQgdGhlIGV4dGVuc2lvbiByZWxvYWRpbmdcclxuICBpZiAoY2hyb21lLnJ1bnRpbWUubGFzdEVycm9yKSB7XHJcbiAgICBsb2NhdGlvbi5yZWxvYWQoKVxyXG4gIH1cclxuXHJcbiAgd3Mub25tZXNzYWdlID0gYXN5bmMgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICBpZiAoIWNocm9tZS5ydW50aW1lLmlkKSB7XHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gICAgdmFyIGRhdGEgLyo6IEhNUk1lc3NhZ2UgKi8gPSBKU09OLnBhcnNlKGV2ZW50LmRhdGEpXHJcblxyXG4gICAgaWYgKGRhdGEudHlwZSA9PT0gXCJ1cGRhdGVcIikge1xyXG4gICAgICBpZiAoZGF0YS5hc3NldHMuZmlsdGVyKChlKSA9PiBlLnR5cGUgPT09IFwianNvblwiKS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgLy8gSWYgaXQncyBhIG1hbmlmZXN0IGNoYW5nZSwgd2UgbXVzdCByZWxvYWQgdGhlIGVudGlyZSBhcHBcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICBjaHJvbWUgJiZcclxuICAgICAgICAgIGNocm9tZS5ydW50aW1lICYmXHJcbiAgICAgICAgICB0eXBlb2YgY2hyb21lLnJ1bnRpbWUucmVsb2FkID09PSBcImZ1bmN0aW9uXCJcclxuICAgICAgICApIHtcclxuICAgICAgICAgIGNocm9tZS5ydW50aW1lLnJlbG9hZCgpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIC8vIENvbnRlbnQgc2NyaXB0cyBjYW4ndCByZWxvYWQgdGhlIGV4dGVuc2lvbiBvbiB0aGVpciBvd25cclxuICAgICAgICAgIC8vIHNvIHdlIG5lZWQgdG8gc2VuZCBhIG1lc3NhZ2UgdG8gdGhlIGJhY2tncm91bmQgc2VydmljZSB3b3JrZXJcclxuICAgICAgICAgIC8vIHRvIGRvIGl0IGZvciB1cywgdXNpbmcgUGFyY2VsJ3Mgd2ViZXh0ZW5zaW9uIHJ1bnRpbWUncyBiYWNrZ3JvdW5kIHdvcmtlclxyXG4gICAgICAgICAgY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2UoeyBfX3BhcmNlbF9obXJfcmVsb2FkX186IHRydWUgfSlcclxuICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpXHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIE90aGVyd2lzZSwgd2UgY2hlY2sgd2hldGhlciB0aGV5IGhhdmUgbG9jYXRpb24ucmVsb2FkKClcclxuICAgICAgICAvLyBJZiB0aGV5IGRvLCB3ZSByZWxvYWQgdGhlIHBhZ2UuIE90aGVyd2lzZSwgd2UgcmVsb2FkIHRoZSBlbnRpcmUgZXh0ZW5zaW9uXHJcbiAgICAgICAgaWYgKCEhbG9jYXRpb24gJiYgdHlwZW9mIGxvY2F0aW9uLnJlbG9hZCA9PT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBjaHJvbWUucnVudGltZS5yZWxvYWQoKVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChkYXRhLnR5cGUgPT09IFwiZXJyb3JcIikge1xyXG4gICAgICAvLyBMb2cgcGFyY2VsIGVycm9ycyB0byBjb25zb2xlXHJcbiAgICAgIGZvciAobGV0IGFuc2lEaWFnbm9zdGljIG9mIGRhdGEuZGlhZ25vc3RpY3MuYW5zaSkge1xyXG4gICAgICAgIGxldCBzdGFjayA9IGFuc2lEaWFnbm9zdGljLmNvZGVmcmFtZVxyXG4gICAgICAgICAgPyBhbnNpRGlhZ25vc3RpYy5jb2RlZnJhbWVcclxuICAgICAgICAgIDogYW5zaURpYWdub3N0aWMuc3RhY2tcclxuXHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcclxuICAgICAgICAgIFwi8J+aqCBbcGFyY2VsXTogXCIgK1xyXG4gICAgICAgICAgICBhbnNpRGlhZ25vc3RpYy5tZXNzYWdlICtcclxuICAgICAgICAgICAgXCJcXG5cIiArXHJcbiAgICAgICAgICAgIHN0YWNrICtcclxuICAgICAgICAgICAgXCJcXG5cXG5cIiArXHJcbiAgICAgICAgICAgIGFuc2lEaWFnbm9zdGljLmhpbnRzLmpvaW4oXCJcXG5cIilcclxuICAgICAgICApXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgd3Mub25lcnJvciA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGUubWVzc2FnZSlcclxuICB9XHJcbiAgd3Mub25jbG9zZSA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICBpZiAocHJvY2Vzcy5lbnYuUEFSQ0VMX0JVSUxEX0VOViAhPT0gXCJ0ZXN0XCIpIHtcclxuICAgICAgY29uc29sZS53YXJuKFwiW3BhcmNlbF0g8J+aqCBDb25uZWN0aW9uIHRvIHRoZSBITVIgc2VydmVyIHdhcyBsb3N0XCIpXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB0eXBlIHsgUGxhc21vQ29udGVudFNjcmlwdCB9IGZyb20gXCJwbGFzbW9cIlxuaW1wb3J0IHRpcHB5IGZyb20gJ3RpcHB5LmpzJ1xuaW1wb3J0ICd0aXBweS5qcy9kaXN0L3RpcHB5LmNzcydcblxuZXhwb3J0IGNvbnN0IGNvbmZpZzogUGxhc21vQ29udGVudFNjcmlwdCA9IHtcbiAgbWF0Y2hlczogW1wiaHR0cHM6Ly93d3cucHJpbWV2aWRlby5jb20vZGV0YWlsLypcIl1cbn1cblxubGV0IHRvb2x0aXBcblxuZnVuY3Rpb24gdHJhbnNsYXRlU3VidGl0bGVzKCkge1xuICBjb25zdCBlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTFNwYW5FbGVtZW50Pignc3Bhbi5hdHZ3ZWJwbGF5ZXJzZGstY2FwdGlvbnMtdGV4dCcpXG4gIGNvbnN0IHRleHQgPSBlbC5pbm5lclRleHQucmVwbGFjZSgvKFxcclxcbnxcXG58XFxyKS9nbSwgXCIgXCIpXG4gIGNvbnN0IG1lc3NhZ2UgPSB7IHR5cGU6ICd0cmFuc2xhdGUnLCB0ZXh0IH1cbiAgY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2UobWVzc2FnZSwgKHJlc3BvbnNlKSA9PiB7XG4gICAgdG9vbHRpcCA9IHRpcHB5KGVsLCB7XG4gICAgICBjb250ZW50OiByZXNwb25zZS5yZXN1bHQsXG4gICAgfSlcbiAgICB0b29sdGlwLnNob3coKVxuICB9KTtcbn1cblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChlKSA9PiB7XG4gIGlmIChlLmNvZGUgIT09ICdTcGFjZScpIHtcbiAgICByZXR1cm5cbiAgfVxuICBpZiAodG9vbHRpcCkge1xuICAgIHRvb2x0aXAuaGlkZSgpXG4gIH1cbiAgY29uc3QgaXNQYXVzaW5nID0gISFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbYXJpYS1sYWJlbD1cIlBhdXNlXCJdJylcbiAgaWYgKGlzUGF1c2luZykge1xuICAgIHRyYW5zbGF0ZVN1YnRpdGxlcygpXG4gIH1cbn0pXG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsICgpID0+IHtcbiAgaWYgKHRvb2x0aXApIHtcbiAgICB0b29sdGlwLmhpZGUoKVxuICB9XG4gIGNvbnN0IGlzUGF1c2luZyA9ICEhZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2FyaWEtbGFiZWw9XCJQYXVzZVwiXScpXG4gIGlmIChpc1BhdXNpbmcpIHtcbiAgICB0cmFuc2xhdGVTdWJ0aXRsZXMoKVxuICB9XG59KVxuIiwiLyoqIVxuKiB0aXBweS5qcyB2Ni4zLjdcbiogKGMpIDIwMTctMjAyMSBhdG9taWtzXG4qIE1JVCBMaWNlbnNlXG4qL1xuaW1wb3J0IHsgY3JlYXRlUG9wcGVyLCBhcHBseVN0eWxlcyB9IGZyb20gJ0Bwb3BwZXJqcy9jb3JlJztcblxudmFyIFJPVU5EX0FSUk9XID0gJzxzdmcgd2lkdGg9XCIxNlwiIGhlaWdodD1cIjZcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PHBhdGggZD1cIk0wIDZzMS43OTYtLjAxMyA0LjY3LTMuNjE1QzUuODUxLjkgNi45My4wMDYgOCAwYzEuMDctLjAwNiAyLjE0OC44ODcgMy4zNDMgMi4zODVDMTQuMjMzIDYuMDA1IDE2IDYgMTYgNkgwelwiPjwvc3ZnPic7XG52YXIgQk9YX0NMQVNTID0gXCJ0aXBweS1ib3hcIjtcbnZhciBDT05URU5UX0NMQVNTID0gXCJ0aXBweS1jb250ZW50XCI7XG52YXIgQkFDS0RST1BfQ0xBU1MgPSBcInRpcHB5LWJhY2tkcm9wXCI7XG52YXIgQVJST1dfQ0xBU1MgPSBcInRpcHB5LWFycm93XCI7XG52YXIgU1ZHX0FSUk9XX0NMQVNTID0gXCJ0aXBweS1zdmctYXJyb3dcIjtcbnZhciBUT1VDSF9PUFRJT05TID0ge1xuICBwYXNzaXZlOiB0cnVlLFxuICBjYXB0dXJlOiB0cnVlXG59O1xudmFyIFRJUFBZX0RFRkFVTFRfQVBQRU5EX1RPID0gZnVuY3Rpb24gVElQUFlfREVGQVVMVF9BUFBFTkRfVE8oKSB7XG4gIHJldHVybiBkb2N1bWVudC5ib2R5O1xufTtcblxuZnVuY3Rpb24gaGFzT3duUHJvcGVydHkob2JqLCBrZXkpIHtcbiAgcmV0dXJuIHt9Lmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpO1xufVxuZnVuY3Rpb24gZ2V0VmFsdWVBdEluZGV4T3JSZXR1cm4odmFsdWUsIGluZGV4LCBkZWZhdWx0VmFsdWUpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgdmFyIHYgPSB2YWx1ZVtpbmRleF07XG4gICAgcmV0dXJuIHYgPT0gbnVsbCA/IEFycmF5LmlzQXJyYXkoZGVmYXVsdFZhbHVlKSA/IGRlZmF1bHRWYWx1ZVtpbmRleF0gOiBkZWZhdWx0VmFsdWUgOiB2O1xuICB9XG5cbiAgcmV0dXJuIHZhbHVlO1xufVxuZnVuY3Rpb24gaXNUeXBlKHZhbHVlLCB0eXBlKSB7XG4gIHZhciBzdHIgPSB7fS50b1N0cmluZy5jYWxsKHZhbHVlKTtcbiAgcmV0dXJuIHN0ci5pbmRleE9mKCdbb2JqZWN0JykgPT09IDAgJiYgc3RyLmluZGV4T2YodHlwZSArIFwiXVwiKSA+IC0xO1xufVxuZnVuY3Rpb24gaW52b2tlV2l0aEFyZ3NPclJldHVybih2YWx1ZSwgYXJncykge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nID8gdmFsdWUuYXBwbHkodm9pZCAwLCBhcmdzKSA6IHZhbHVlO1xufVxuZnVuY3Rpb24gZGVib3VuY2UoZm4sIG1zKSB7XG4gIC8vIEF2b2lkIHdyYXBwaW5nIGluIGBzZXRUaW1lb3V0YCBpZiBtcyBpcyAwIGFueXdheVxuICBpZiAobXMgPT09IDApIHtcbiAgICByZXR1cm4gZm47XG4gIH1cblxuICB2YXIgdGltZW91dDtcbiAgcmV0dXJuIGZ1bmN0aW9uIChhcmcpIHtcbiAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgdGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgZm4oYXJnKTtcbiAgICB9LCBtcyk7XG4gIH07XG59XG5mdW5jdGlvbiByZW1vdmVQcm9wZXJ0aWVzKG9iaiwga2V5cykge1xuICB2YXIgY2xvbmUgPSBPYmplY3QuYXNzaWduKHt9LCBvYmopO1xuICBrZXlzLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIGRlbGV0ZSBjbG9uZVtrZXldO1xuICB9KTtcbiAgcmV0dXJuIGNsb25lO1xufVxuZnVuY3Rpb24gc3BsaXRCeVNwYWNlcyh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUuc3BsaXQoL1xccysvKS5maWx0ZXIoQm9vbGVhbik7XG59XG5mdW5jdGlvbiBub3JtYWxpemVUb0FycmF5KHZhbHVlKSB7XG4gIHJldHVybiBbXS5jb25jYXQodmFsdWUpO1xufVxuZnVuY3Rpb24gcHVzaElmVW5pcXVlKGFyciwgdmFsdWUpIHtcbiAgaWYgKGFyci5pbmRleE9mKHZhbHVlKSA9PT0gLTEpIHtcbiAgICBhcnIucHVzaCh2YWx1ZSk7XG4gIH1cbn1cbmZ1bmN0aW9uIHVuaXF1ZShhcnIpIHtcbiAgcmV0dXJuIGFyci5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0sIGluZGV4KSB7XG4gICAgcmV0dXJuIGFyci5pbmRleE9mKGl0ZW0pID09PSBpbmRleDtcbiAgfSk7XG59XG5mdW5jdGlvbiBnZXRCYXNlUGxhY2VtZW50KHBsYWNlbWVudCkge1xuICByZXR1cm4gcGxhY2VtZW50LnNwbGl0KCctJylbMF07XG59XG5mdW5jdGlvbiBhcnJheUZyb20odmFsdWUpIHtcbiAgcmV0dXJuIFtdLnNsaWNlLmNhbGwodmFsdWUpO1xufVxuZnVuY3Rpb24gcmVtb3ZlVW5kZWZpbmVkUHJvcHMob2JqKSB7XG4gIHJldHVybiBPYmplY3Qua2V5cyhvYmopLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBrZXkpIHtcbiAgICBpZiAob2JqW2tleV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgYWNjW2tleV0gPSBvYmpba2V5XTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWNjO1xuICB9LCB7fSk7XG59XG5cbmZ1bmN0aW9uIGRpdigpIHtcbiAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xufVxuZnVuY3Rpb24gaXNFbGVtZW50KHZhbHVlKSB7XG4gIHJldHVybiBbJ0VsZW1lbnQnLCAnRnJhZ21lbnQnXS5zb21lKGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgcmV0dXJuIGlzVHlwZSh2YWx1ZSwgdHlwZSk7XG4gIH0pO1xufVxuZnVuY3Rpb24gaXNOb2RlTGlzdCh2YWx1ZSkge1xuICByZXR1cm4gaXNUeXBlKHZhbHVlLCAnTm9kZUxpc3QnKTtcbn1cbmZ1bmN0aW9uIGlzTW91c2VFdmVudCh2YWx1ZSkge1xuICByZXR1cm4gaXNUeXBlKHZhbHVlLCAnTW91c2VFdmVudCcpO1xufVxuZnVuY3Rpb24gaXNSZWZlcmVuY2VFbGVtZW50KHZhbHVlKSB7XG4gIHJldHVybiAhISh2YWx1ZSAmJiB2YWx1ZS5fdGlwcHkgJiYgdmFsdWUuX3RpcHB5LnJlZmVyZW5jZSA9PT0gdmFsdWUpO1xufVxuZnVuY3Rpb24gZ2V0QXJyYXlPZkVsZW1lbnRzKHZhbHVlKSB7XG4gIGlmIChpc0VsZW1lbnQodmFsdWUpKSB7XG4gICAgcmV0dXJuIFt2YWx1ZV07XG4gIH1cblxuICBpZiAoaXNOb2RlTGlzdCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gYXJyYXlGcm9tKHZhbHVlKTtcbiAgfVxuXG4gIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBhcnJheUZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCh2YWx1ZSkpO1xufVxuZnVuY3Rpb24gc2V0VHJhbnNpdGlvbkR1cmF0aW9uKGVscywgdmFsdWUpIHtcbiAgZWxzLmZvckVhY2goZnVuY3Rpb24gKGVsKSB7XG4gICAgaWYgKGVsKSB7XG4gICAgICBlbC5zdHlsZS50cmFuc2l0aW9uRHVyYXRpb24gPSB2YWx1ZSArIFwibXNcIjtcbiAgICB9XG4gIH0pO1xufVxuZnVuY3Rpb24gc2V0VmlzaWJpbGl0eVN0YXRlKGVscywgc3RhdGUpIHtcbiAgZWxzLmZvckVhY2goZnVuY3Rpb24gKGVsKSB7XG4gICAgaWYgKGVsKSB7XG4gICAgICBlbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtc3RhdGUnLCBzdGF0ZSk7XG4gICAgfVxuICB9KTtcbn1cbmZ1bmN0aW9uIGdldE93bmVyRG9jdW1lbnQoZWxlbWVudE9yRWxlbWVudHMpIHtcbiAgdmFyIF9lbGVtZW50JG93bmVyRG9jdW1lbjtcblxuICB2YXIgX25vcm1hbGl6ZVRvQXJyYXkgPSBub3JtYWxpemVUb0FycmF5KGVsZW1lbnRPckVsZW1lbnRzKSxcbiAgICAgIGVsZW1lbnQgPSBfbm9ybWFsaXplVG9BcnJheVswXTsgLy8gRWxlbWVudHMgY3JlYXRlZCB2aWEgYSA8dGVtcGxhdGU+IGhhdmUgYW4gb3duZXJEb2N1bWVudCB3aXRoIG5vIHJlZmVyZW5jZSB0byB0aGUgYm9keVxuXG5cbiAgcmV0dXJuIGVsZW1lbnQgIT0gbnVsbCAmJiAoX2VsZW1lbnQkb3duZXJEb2N1bWVuID0gZWxlbWVudC5vd25lckRvY3VtZW50KSAhPSBudWxsICYmIF9lbGVtZW50JG93bmVyRG9jdW1lbi5ib2R5ID8gZWxlbWVudC5vd25lckRvY3VtZW50IDogZG9jdW1lbnQ7XG59XG5mdW5jdGlvbiBpc0N1cnNvck91dHNpZGVJbnRlcmFjdGl2ZUJvcmRlcihwb3BwZXJUcmVlRGF0YSwgZXZlbnQpIHtcbiAgdmFyIGNsaWVudFggPSBldmVudC5jbGllbnRYLFxuICAgICAgY2xpZW50WSA9IGV2ZW50LmNsaWVudFk7XG4gIHJldHVybiBwb3BwZXJUcmVlRGF0YS5ldmVyeShmdW5jdGlvbiAoX3JlZikge1xuICAgIHZhciBwb3BwZXJSZWN0ID0gX3JlZi5wb3BwZXJSZWN0LFxuICAgICAgICBwb3BwZXJTdGF0ZSA9IF9yZWYucG9wcGVyU3RhdGUsXG4gICAgICAgIHByb3BzID0gX3JlZi5wcm9wcztcbiAgICB2YXIgaW50ZXJhY3RpdmVCb3JkZXIgPSBwcm9wcy5pbnRlcmFjdGl2ZUJvcmRlcjtcbiAgICB2YXIgYmFzZVBsYWNlbWVudCA9IGdldEJhc2VQbGFjZW1lbnQocG9wcGVyU3RhdGUucGxhY2VtZW50KTtcbiAgICB2YXIgb2Zmc2V0RGF0YSA9IHBvcHBlclN0YXRlLm1vZGlmaWVyc0RhdGEub2Zmc2V0O1xuXG4gICAgaWYgKCFvZmZzZXREYXRhKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICB2YXIgdG9wRGlzdGFuY2UgPSBiYXNlUGxhY2VtZW50ID09PSAnYm90dG9tJyA/IG9mZnNldERhdGEudG9wLnkgOiAwO1xuICAgIHZhciBib3R0b21EaXN0YW5jZSA9IGJhc2VQbGFjZW1lbnQgPT09ICd0b3AnID8gb2Zmc2V0RGF0YS5ib3R0b20ueSA6IDA7XG4gICAgdmFyIGxlZnREaXN0YW5jZSA9IGJhc2VQbGFjZW1lbnQgPT09ICdyaWdodCcgPyBvZmZzZXREYXRhLmxlZnQueCA6IDA7XG4gICAgdmFyIHJpZ2h0RGlzdGFuY2UgPSBiYXNlUGxhY2VtZW50ID09PSAnbGVmdCcgPyBvZmZzZXREYXRhLnJpZ2h0LnggOiAwO1xuICAgIHZhciBleGNlZWRzVG9wID0gcG9wcGVyUmVjdC50b3AgLSBjbGllbnRZICsgdG9wRGlzdGFuY2UgPiBpbnRlcmFjdGl2ZUJvcmRlcjtcbiAgICB2YXIgZXhjZWVkc0JvdHRvbSA9IGNsaWVudFkgLSBwb3BwZXJSZWN0LmJvdHRvbSAtIGJvdHRvbURpc3RhbmNlID4gaW50ZXJhY3RpdmVCb3JkZXI7XG4gICAgdmFyIGV4Y2VlZHNMZWZ0ID0gcG9wcGVyUmVjdC5sZWZ0IC0gY2xpZW50WCArIGxlZnREaXN0YW5jZSA+IGludGVyYWN0aXZlQm9yZGVyO1xuICAgIHZhciBleGNlZWRzUmlnaHQgPSBjbGllbnRYIC0gcG9wcGVyUmVjdC5yaWdodCAtIHJpZ2h0RGlzdGFuY2UgPiBpbnRlcmFjdGl2ZUJvcmRlcjtcbiAgICByZXR1cm4gZXhjZWVkc1RvcCB8fCBleGNlZWRzQm90dG9tIHx8IGV4Y2VlZHNMZWZ0IHx8IGV4Y2VlZHNSaWdodDtcbiAgfSk7XG59XG5mdW5jdGlvbiB1cGRhdGVUcmFuc2l0aW9uRW5kTGlzdGVuZXIoYm94LCBhY3Rpb24sIGxpc3RlbmVyKSB7XG4gIHZhciBtZXRob2QgPSBhY3Rpb24gKyBcIkV2ZW50TGlzdGVuZXJcIjsgLy8gc29tZSBicm93c2VycyBhcHBhcmVudGx5IHN1cHBvcnQgYHRyYW5zaXRpb25gICh1bnByZWZpeGVkKSBidXQgb25seSBmaXJlXG4gIC8vIGB3ZWJraXRUcmFuc2l0aW9uRW5kYC4uLlxuXG4gIFsndHJhbnNpdGlvbmVuZCcsICd3ZWJraXRUcmFuc2l0aW9uRW5kJ10uZm9yRWFjaChmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBib3hbbWV0aG9kXShldmVudCwgbGlzdGVuZXIpO1xuICB9KTtcbn1cbi8qKlxuICogQ29tcGFyZWQgdG8geHh4LmNvbnRhaW5zLCB0aGlzIGZ1bmN0aW9uIHdvcmtzIGZvciBkb20gc3RydWN0dXJlcyB3aXRoIHNoYWRvd1xuICogZG9tXG4gKi9cblxuZnVuY3Rpb24gYWN0dWFsQ29udGFpbnMocGFyZW50LCBjaGlsZCkge1xuICB2YXIgdGFyZ2V0ID0gY2hpbGQ7XG5cbiAgd2hpbGUgKHRhcmdldCkge1xuICAgIHZhciBfdGFyZ2V0JGdldFJvb3ROb2RlO1xuXG4gICAgaWYgKHBhcmVudC5jb250YWlucyh0YXJnZXQpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICB0YXJnZXQgPSB0YXJnZXQuZ2V0Um9vdE5vZGUgPT0gbnVsbCA/IHZvaWQgMCA6IChfdGFyZ2V0JGdldFJvb3ROb2RlID0gdGFyZ2V0LmdldFJvb3ROb2RlKCkpID09IG51bGwgPyB2b2lkIDAgOiBfdGFyZ2V0JGdldFJvb3ROb2RlLmhvc3Q7XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbnZhciBjdXJyZW50SW5wdXQgPSB7XG4gIGlzVG91Y2g6IGZhbHNlXG59O1xudmFyIGxhc3RNb3VzZU1vdmVUaW1lID0gMDtcbi8qKlxuICogV2hlbiBhIGB0b3VjaHN0YXJ0YCBldmVudCBpcyBmaXJlZCwgaXQncyBhc3N1bWVkIHRoZSB1c2VyIGlzIHVzaW5nIHRvdWNoXG4gKiBpbnB1dC4gV2UnbGwgYmluZCBhIGBtb3VzZW1vdmVgIGV2ZW50IGxpc3RlbmVyIHRvIGxpc3RlbiBmb3IgbW91c2UgaW5wdXQgaW5cbiAqIHRoZSBmdXR1cmUuIFRoaXMgd2F5LCB0aGUgYGlzVG91Y2hgIHByb3BlcnR5IGlzIGZ1bGx5IGR5bmFtaWMgYW5kIHdpbGwgaGFuZGxlXG4gKiBoeWJyaWQgZGV2aWNlcyB0aGF0IHVzZSBhIG1peCBvZiB0b3VjaCArIG1vdXNlIGlucHV0LlxuICovXG5cbmZ1bmN0aW9uIG9uRG9jdW1lbnRUb3VjaFN0YXJ0KCkge1xuICBpZiAoY3VycmVudElucHV0LmlzVG91Y2gpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBjdXJyZW50SW5wdXQuaXNUb3VjaCA9IHRydWU7XG5cbiAgaWYgKHdpbmRvdy5wZXJmb3JtYW5jZSkge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG9uRG9jdW1lbnRNb3VzZU1vdmUpO1xuICB9XG59XG4vKipcbiAqIFdoZW4gdHdvIGBtb3VzZW1vdmVgIGV2ZW50IGFyZSBmaXJlZCBjb25zZWN1dGl2ZWx5IHdpdGhpbiAyMG1zLCBpdCdzIGFzc3VtZWRcbiAqIHRoZSB1c2VyIGlzIHVzaW5nIG1vdXNlIGlucHV0IGFnYWluLiBgbW91c2Vtb3ZlYCBjYW4gZmlyZSBvbiB0b3VjaCBkZXZpY2VzIGFzXG4gKiB3ZWxsLCBidXQgdmVyeSByYXJlbHkgdGhhdCBxdWlja2x5LlxuICovXG5cbmZ1bmN0aW9uIG9uRG9jdW1lbnRNb3VzZU1vdmUoKSB7XG4gIHZhciBub3cgPSBwZXJmb3JtYW5jZS5ub3coKTtcblxuICBpZiAobm93IC0gbGFzdE1vdXNlTW92ZVRpbWUgPCAyMCkge1xuICAgIGN1cnJlbnRJbnB1dC5pc1RvdWNoID0gZmFsc2U7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgb25Eb2N1bWVudE1vdXNlTW92ZSk7XG4gIH1cblxuICBsYXN0TW91c2VNb3ZlVGltZSA9IG5vdztcbn1cbi8qKlxuICogV2hlbiBhbiBlbGVtZW50IGlzIGluIGZvY3VzIGFuZCBoYXMgYSB0aXBweSwgbGVhdmluZyB0aGUgdGFiL3dpbmRvdyBhbmRcbiAqIHJldHVybmluZyBjYXVzZXMgaXQgdG8gc2hvdyBhZ2Fpbi4gRm9yIG1vdXNlIHVzZXJzIHRoaXMgaXMgdW5leHBlY3RlZCwgYnV0XG4gKiBmb3Iga2V5Ym9hcmQgdXNlIGl0IG1ha2VzIHNlbnNlLlxuICogVE9ETzogZmluZCBhIGJldHRlciB0ZWNobmlxdWUgdG8gc29sdmUgdGhpcyBwcm9ibGVtXG4gKi9cblxuZnVuY3Rpb24gb25XaW5kb3dCbHVyKCkge1xuICB2YXIgYWN0aXZlRWxlbWVudCA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XG5cbiAgaWYgKGlzUmVmZXJlbmNlRWxlbWVudChhY3RpdmVFbGVtZW50KSkge1xuICAgIHZhciBpbnN0YW5jZSA9IGFjdGl2ZUVsZW1lbnQuX3RpcHB5O1xuXG4gICAgaWYgKGFjdGl2ZUVsZW1lbnQuYmx1ciAmJiAhaW5zdGFuY2Uuc3RhdGUuaXNWaXNpYmxlKSB7XG4gICAgICBhY3RpdmVFbGVtZW50LmJsdXIoKTtcbiAgICB9XG4gIH1cbn1cbmZ1bmN0aW9uIGJpbmRHbG9iYWxFdmVudExpc3RlbmVycygpIHtcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIG9uRG9jdW1lbnRUb3VjaFN0YXJ0LCBUT1VDSF9PUFRJT05TKTtcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCBvbldpbmRvd0JsdXIpO1xufVxuXG52YXIgaXNCcm93c2VyID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJztcbnZhciBpc0lFMTEgPSBpc0Jyb3dzZXIgPyAvLyBAdHMtaWdub3JlXG4hIXdpbmRvdy5tc0NyeXB0byA6IGZhbHNlO1xuXG5mdW5jdGlvbiBjcmVhdGVNZW1vcnlMZWFrV2FybmluZyhtZXRob2QpIHtcbiAgdmFyIHR4dCA9IG1ldGhvZCA9PT0gJ2Rlc3Ryb3knID8gJ24gYWxyZWFkeS0nIDogJyAnO1xuICByZXR1cm4gW21ldGhvZCArIFwiKCkgd2FzIGNhbGxlZCBvbiBhXCIgKyB0eHQgKyBcImRlc3Ryb3llZCBpbnN0YW5jZS4gVGhpcyBpcyBhIG5vLW9wIGJ1dFwiLCAnaW5kaWNhdGVzIGEgcG90ZW50aWFsIG1lbW9yeSBsZWFrLiddLmpvaW4oJyAnKTtcbn1cbmZ1bmN0aW9uIGNsZWFuKHZhbHVlKSB7XG4gIHZhciBzcGFjZXNBbmRUYWJzID0gL1sgXFx0XXsyLH0vZztcbiAgdmFyIGxpbmVTdGFydFdpdGhTcGFjZXMgPSAvXlsgXFx0XSovZ207XG4gIHJldHVybiB2YWx1ZS5yZXBsYWNlKHNwYWNlc0FuZFRhYnMsICcgJykucmVwbGFjZShsaW5lU3RhcnRXaXRoU3BhY2VzLCAnJykudHJpbSgpO1xufVxuXG5mdW5jdGlvbiBnZXREZXZNZXNzYWdlKG1lc3NhZ2UpIHtcbiAgcmV0dXJuIGNsZWFuKFwiXFxuICAlY3RpcHB5LmpzXFxuXFxuICAlY1wiICsgY2xlYW4obWVzc2FnZSkgKyBcIlxcblxcbiAgJWNcXHVEODNEXFx1REM3N1xcdTIwMEQgVGhpcyBpcyBhIGRldmVsb3BtZW50LW9ubHkgbWVzc2FnZS4gSXQgd2lsbCBiZSByZW1vdmVkIGluIHByb2R1Y3Rpb24uXFxuICBcIik7XG59XG5cbmZ1bmN0aW9uIGdldEZvcm1hdHRlZE1lc3NhZ2UobWVzc2FnZSkge1xuICByZXR1cm4gW2dldERldk1lc3NhZ2UobWVzc2FnZSksIC8vIHRpdGxlXG4gICdjb2xvcjogIzAwQzU4NDsgZm9udC1zaXplOiAxLjNlbTsgZm9udC13ZWlnaHQ6IGJvbGQ7JywgLy8gbWVzc2FnZVxuICAnbGluZS1oZWlnaHQ6IDEuNScsIC8vIGZvb3RlclxuICAnY29sb3I6ICNhNmEwOTU7J107XG59IC8vIEFzc3VtZSB3YXJuaW5ncyBhbmQgZXJyb3JzIG5ldmVyIGhhdmUgdGhlIHNhbWUgbWVzc2FnZVxuXG52YXIgdmlzaXRlZE1lc3NhZ2VzO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIHJlc2V0VmlzaXRlZE1lc3NhZ2VzKCk7XG59XG5cbmZ1bmN0aW9uIHJlc2V0VmlzaXRlZE1lc3NhZ2VzKCkge1xuICB2aXNpdGVkTWVzc2FnZXMgPSBuZXcgU2V0KCk7XG59XG5mdW5jdGlvbiB3YXJuV2hlbihjb25kaXRpb24sIG1lc3NhZ2UpIHtcbiAgaWYgKGNvbmRpdGlvbiAmJiAhdmlzaXRlZE1lc3NhZ2VzLmhhcyhtZXNzYWdlKSkge1xuICAgIHZhciBfY29uc29sZTtcblxuICAgIHZpc2l0ZWRNZXNzYWdlcy5hZGQobWVzc2FnZSk7XG5cbiAgICAoX2NvbnNvbGUgPSBjb25zb2xlKS53YXJuLmFwcGx5KF9jb25zb2xlLCBnZXRGb3JtYXR0ZWRNZXNzYWdlKG1lc3NhZ2UpKTtcbiAgfVxufVxuZnVuY3Rpb24gZXJyb3JXaGVuKGNvbmRpdGlvbiwgbWVzc2FnZSkge1xuICBpZiAoY29uZGl0aW9uICYmICF2aXNpdGVkTWVzc2FnZXMuaGFzKG1lc3NhZ2UpKSB7XG4gICAgdmFyIF9jb25zb2xlMjtcblxuICAgIHZpc2l0ZWRNZXNzYWdlcy5hZGQobWVzc2FnZSk7XG5cbiAgICAoX2NvbnNvbGUyID0gY29uc29sZSkuZXJyb3IuYXBwbHkoX2NvbnNvbGUyLCBnZXRGb3JtYXR0ZWRNZXNzYWdlKG1lc3NhZ2UpKTtcbiAgfVxufVxuZnVuY3Rpb24gdmFsaWRhdGVUYXJnZXRzKHRhcmdldHMpIHtcbiAgdmFyIGRpZFBhc3NGYWxzeVZhbHVlID0gIXRhcmdldHM7XG4gIHZhciBkaWRQYXNzUGxhaW5PYmplY3QgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodGFyZ2V0cykgPT09ICdbb2JqZWN0IE9iamVjdF0nICYmICF0YXJnZXRzLmFkZEV2ZW50TGlzdGVuZXI7XG4gIGVycm9yV2hlbihkaWRQYXNzRmFsc3lWYWx1ZSwgWyd0aXBweSgpIHdhcyBwYXNzZWQnLCAnYCcgKyBTdHJpbmcodGFyZ2V0cykgKyAnYCcsICdhcyBpdHMgdGFyZ2V0cyAoZmlyc3QpIGFyZ3VtZW50LiBWYWxpZCB0eXBlcyBhcmU6IFN0cmluZywgRWxlbWVudCwnLCAnRWxlbWVudFtdLCBvciBOb2RlTGlzdC4nXS5qb2luKCcgJykpO1xuICBlcnJvcldoZW4oZGlkUGFzc1BsYWluT2JqZWN0LCBbJ3RpcHB5KCkgd2FzIHBhc3NlZCBhIHBsYWluIG9iamVjdCB3aGljaCBpcyBub3Qgc3VwcG9ydGVkIGFzIGFuIGFyZ3VtZW50JywgJ2ZvciB2aXJ0dWFsIHBvc2l0aW9uaW5nLiBVc2UgcHJvcHMuZ2V0UmVmZXJlbmNlQ2xpZW50UmVjdCBpbnN0ZWFkLiddLmpvaW4oJyAnKSk7XG59XG5cbnZhciBwbHVnaW5Qcm9wcyA9IHtcbiAgYW5pbWF0ZUZpbGw6IGZhbHNlLFxuICBmb2xsb3dDdXJzb3I6IGZhbHNlLFxuICBpbmxpbmVQb3NpdGlvbmluZzogZmFsc2UsXG4gIHN0aWNreTogZmFsc2Vcbn07XG52YXIgcmVuZGVyUHJvcHMgPSB7XG4gIGFsbG93SFRNTDogZmFsc2UsXG4gIGFuaW1hdGlvbjogJ2ZhZGUnLFxuICBhcnJvdzogdHJ1ZSxcbiAgY29udGVudDogJycsXG4gIGluZXJ0aWE6IGZhbHNlLFxuICBtYXhXaWR0aDogMzUwLFxuICByb2xlOiAndG9vbHRpcCcsXG4gIHRoZW1lOiAnJyxcbiAgekluZGV4OiA5OTk5XG59O1xudmFyIGRlZmF1bHRQcm9wcyA9IE9iamVjdC5hc3NpZ24oe1xuICBhcHBlbmRUbzogVElQUFlfREVGQVVMVF9BUFBFTkRfVE8sXG4gIGFyaWE6IHtcbiAgICBjb250ZW50OiAnYXV0bycsXG4gICAgZXhwYW5kZWQ6ICdhdXRvJ1xuICB9LFxuICBkZWxheTogMCxcbiAgZHVyYXRpb246IFszMDAsIDI1MF0sXG4gIGdldFJlZmVyZW5jZUNsaWVudFJlY3Q6IG51bGwsXG4gIGhpZGVPbkNsaWNrOiB0cnVlLFxuICBpZ25vcmVBdHRyaWJ1dGVzOiBmYWxzZSxcbiAgaW50ZXJhY3RpdmU6IGZhbHNlLFxuICBpbnRlcmFjdGl2ZUJvcmRlcjogMixcbiAgaW50ZXJhY3RpdmVEZWJvdW5jZTogMCxcbiAgbW92ZVRyYW5zaXRpb246ICcnLFxuICBvZmZzZXQ6IFswLCAxMF0sXG4gIG9uQWZ0ZXJVcGRhdGU6IGZ1bmN0aW9uIG9uQWZ0ZXJVcGRhdGUoKSB7fSxcbiAgb25CZWZvcmVVcGRhdGU6IGZ1bmN0aW9uIG9uQmVmb3JlVXBkYXRlKCkge30sXG4gIG9uQ3JlYXRlOiBmdW5jdGlvbiBvbkNyZWF0ZSgpIHt9LFxuICBvbkRlc3Ryb3k6IGZ1bmN0aW9uIG9uRGVzdHJveSgpIHt9LFxuICBvbkhpZGRlbjogZnVuY3Rpb24gb25IaWRkZW4oKSB7fSxcbiAgb25IaWRlOiBmdW5jdGlvbiBvbkhpZGUoKSB7fSxcbiAgb25Nb3VudDogZnVuY3Rpb24gb25Nb3VudCgpIHt9LFxuICBvblNob3c6IGZ1bmN0aW9uIG9uU2hvdygpIHt9LFxuICBvblNob3duOiBmdW5jdGlvbiBvblNob3duKCkge30sXG4gIG9uVHJpZ2dlcjogZnVuY3Rpb24gb25UcmlnZ2VyKCkge30sXG4gIG9uVW50cmlnZ2VyOiBmdW5jdGlvbiBvblVudHJpZ2dlcigpIHt9LFxuICBvbkNsaWNrT3V0c2lkZTogZnVuY3Rpb24gb25DbGlja091dHNpZGUoKSB7fSxcbiAgcGxhY2VtZW50OiAndG9wJyxcbiAgcGx1Z2luczogW10sXG4gIHBvcHBlck9wdGlvbnM6IHt9LFxuICByZW5kZXI6IG51bGwsXG4gIHNob3dPbkNyZWF0ZTogZmFsc2UsXG4gIHRvdWNoOiB0cnVlLFxuICB0cmlnZ2VyOiAnbW91c2VlbnRlciBmb2N1cycsXG4gIHRyaWdnZXJUYXJnZXQ6IG51bGxcbn0sIHBsdWdpblByb3BzLCByZW5kZXJQcm9wcyk7XG52YXIgZGVmYXVsdEtleXMgPSBPYmplY3Qua2V5cyhkZWZhdWx0UHJvcHMpO1xudmFyIHNldERlZmF1bHRQcm9wcyA9IGZ1bmN0aW9uIHNldERlZmF1bHRQcm9wcyhwYXJ0aWFsUHJvcHMpIHtcbiAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgIHZhbGlkYXRlUHJvcHMocGFydGlhbFByb3BzLCBbXSk7XG4gIH1cblxuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKHBhcnRpYWxQcm9wcyk7XG4gIGtleXMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgZGVmYXVsdFByb3BzW2tleV0gPSBwYXJ0aWFsUHJvcHNba2V5XTtcbiAgfSk7XG59O1xuZnVuY3Rpb24gZ2V0RXh0ZW5kZWRQYXNzZWRQcm9wcyhwYXNzZWRQcm9wcykge1xuICB2YXIgcGx1Z2lucyA9IHBhc3NlZFByb3BzLnBsdWdpbnMgfHwgW107XG4gIHZhciBwbHVnaW5Qcm9wcyA9IHBsdWdpbnMucmVkdWNlKGZ1bmN0aW9uIChhY2MsIHBsdWdpbikge1xuICAgIHZhciBuYW1lID0gcGx1Z2luLm5hbWUsXG4gICAgICAgIGRlZmF1bHRWYWx1ZSA9IHBsdWdpbi5kZWZhdWx0VmFsdWU7XG5cbiAgICBpZiAobmFtZSkge1xuICAgICAgdmFyIF9uYW1lO1xuXG4gICAgICBhY2NbbmFtZV0gPSBwYXNzZWRQcm9wc1tuYW1lXSAhPT0gdW5kZWZpbmVkID8gcGFzc2VkUHJvcHNbbmFtZV0gOiAoX25hbWUgPSBkZWZhdWx0UHJvcHNbbmFtZV0pICE9IG51bGwgPyBfbmFtZSA6IGRlZmF1bHRWYWx1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWNjO1xuICB9LCB7fSk7XG4gIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBwYXNzZWRQcm9wcywgcGx1Z2luUHJvcHMpO1xufVxuZnVuY3Rpb24gZ2V0RGF0YUF0dHJpYnV0ZVByb3BzKHJlZmVyZW5jZSwgcGx1Z2lucykge1xuICB2YXIgcHJvcEtleXMgPSBwbHVnaW5zID8gT2JqZWN0LmtleXMoZ2V0RXh0ZW5kZWRQYXNzZWRQcm9wcyhPYmplY3QuYXNzaWduKHt9LCBkZWZhdWx0UHJvcHMsIHtcbiAgICBwbHVnaW5zOiBwbHVnaW5zXG4gIH0pKSkgOiBkZWZhdWx0S2V5cztcbiAgdmFyIHByb3BzID0gcHJvcEtleXMucmVkdWNlKGZ1bmN0aW9uIChhY2MsIGtleSkge1xuICAgIHZhciB2YWx1ZUFzU3RyaW5nID0gKHJlZmVyZW5jZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXRpcHB5LVwiICsga2V5KSB8fCAnJykudHJpbSgpO1xuXG4gICAgaWYgKCF2YWx1ZUFzU3RyaW5nKSB7XG4gICAgICByZXR1cm4gYWNjO1xuICAgIH1cblxuICAgIGlmIChrZXkgPT09ICdjb250ZW50Jykge1xuICAgICAgYWNjW2tleV0gPSB2YWx1ZUFzU3RyaW5nO1xuICAgIH0gZWxzZSB7XG4gICAgICB0cnkge1xuICAgICAgICBhY2Nba2V5XSA9IEpTT04ucGFyc2UodmFsdWVBc1N0cmluZyk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGFjY1trZXldID0gdmFsdWVBc1N0cmluZztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gYWNjO1xuICB9LCB7fSk7XG4gIHJldHVybiBwcm9wcztcbn1cbmZ1bmN0aW9uIGV2YWx1YXRlUHJvcHMocmVmZXJlbmNlLCBwcm9wcykge1xuICB2YXIgb3V0ID0gT2JqZWN0LmFzc2lnbih7fSwgcHJvcHMsIHtcbiAgICBjb250ZW50OiBpbnZva2VXaXRoQXJnc09yUmV0dXJuKHByb3BzLmNvbnRlbnQsIFtyZWZlcmVuY2VdKVxuICB9LCBwcm9wcy5pZ25vcmVBdHRyaWJ1dGVzID8ge30gOiBnZXREYXRhQXR0cmlidXRlUHJvcHMocmVmZXJlbmNlLCBwcm9wcy5wbHVnaW5zKSk7XG4gIG91dC5hcmlhID0gT2JqZWN0LmFzc2lnbih7fSwgZGVmYXVsdFByb3BzLmFyaWEsIG91dC5hcmlhKTtcbiAgb3V0LmFyaWEgPSB7XG4gICAgZXhwYW5kZWQ6IG91dC5hcmlhLmV4cGFuZGVkID09PSAnYXV0bycgPyBwcm9wcy5pbnRlcmFjdGl2ZSA6IG91dC5hcmlhLmV4cGFuZGVkLFxuICAgIGNvbnRlbnQ6IG91dC5hcmlhLmNvbnRlbnQgPT09ICdhdXRvJyA/IHByb3BzLmludGVyYWN0aXZlID8gbnVsbCA6ICdkZXNjcmliZWRieScgOiBvdXQuYXJpYS5jb250ZW50XG4gIH07XG4gIHJldHVybiBvdXQ7XG59XG5mdW5jdGlvbiB2YWxpZGF0ZVByb3BzKHBhcnRpYWxQcm9wcywgcGx1Z2lucykge1xuICBpZiAocGFydGlhbFByb3BzID09PSB2b2lkIDApIHtcbiAgICBwYXJ0aWFsUHJvcHMgPSB7fTtcbiAgfVxuXG4gIGlmIChwbHVnaW5zID09PSB2b2lkIDApIHtcbiAgICBwbHVnaW5zID0gW107XG4gIH1cblxuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKHBhcnRpYWxQcm9wcyk7XG4gIGtleXMuZm9yRWFjaChmdW5jdGlvbiAocHJvcCkge1xuICAgIHZhciBub25QbHVnaW5Qcm9wcyA9IHJlbW92ZVByb3BlcnRpZXMoZGVmYXVsdFByb3BzLCBPYmplY3Qua2V5cyhwbHVnaW5Qcm9wcykpO1xuICAgIHZhciBkaWRQYXNzVW5rbm93blByb3AgPSAhaGFzT3duUHJvcGVydHkobm9uUGx1Z2luUHJvcHMsIHByb3ApOyAvLyBDaGVjayBpZiB0aGUgcHJvcCBleGlzdHMgaW4gYHBsdWdpbnNgXG5cbiAgICBpZiAoZGlkUGFzc1Vua25vd25Qcm9wKSB7XG4gICAgICBkaWRQYXNzVW5rbm93blByb3AgPSBwbHVnaW5zLmZpbHRlcihmdW5jdGlvbiAocGx1Z2luKSB7XG4gICAgICAgIHJldHVybiBwbHVnaW4ubmFtZSA9PT0gcHJvcDtcbiAgICAgIH0pLmxlbmd0aCA9PT0gMDtcbiAgICB9XG5cbiAgICB3YXJuV2hlbihkaWRQYXNzVW5rbm93blByb3AsIFtcImBcIiArIHByb3AgKyBcImBcIiwgXCJpcyBub3QgYSB2YWxpZCBwcm9wLiBZb3UgbWF5IGhhdmUgc3BlbGxlZCBpdCBpbmNvcnJlY3RseSwgb3IgaWYgaXQnc1wiLCAnYSBwbHVnaW4sIGZvcmdvdCB0byBwYXNzIGl0IGluIGFuIGFycmF5IGFzIHByb3BzLnBsdWdpbnMuJywgJ1xcblxcbicsICdBbGwgcHJvcHM6IGh0dHBzOi8vYXRvbWlrcy5naXRodWIuaW8vdGlwcHlqcy92Ni9hbGwtcHJvcHMvXFxuJywgJ1BsdWdpbnM6IGh0dHBzOi8vYXRvbWlrcy5naXRodWIuaW8vdGlwcHlqcy92Ni9wbHVnaW5zLyddLmpvaW4oJyAnKSk7XG4gIH0pO1xufVxuXG52YXIgaW5uZXJIVE1MID0gZnVuY3Rpb24gaW5uZXJIVE1MKCkge1xuICByZXR1cm4gJ2lubmVySFRNTCc7XG59O1xuXG5mdW5jdGlvbiBkYW5nZXJvdXNseVNldElubmVySFRNTChlbGVtZW50LCBodG1sKSB7XG4gIGVsZW1lbnRbaW5uZXJIVE1MKCldID0gaHRtbDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQXJyb3dFbGVtZW50KHZhbHVlKSB7XG4gIHZhciBhcnJvdyA9IGRpdigpO1xuXG4gIGlmICh2YWx1ZSA9PT0gdHJ1ZSkge1xuICAgIGFycm93LmNsYXNzTmFtZSA9IEFSUk9XX0NMQVNTO1xuICB9IGVsc2Uge1xuICAgIGFycm93LmNsYXNzTmFtZSA9IFNWR19BUlJPV19DTEFTUztcblxuICAgIGlmIChpc0VsZW1lbnQodmFsdWUpKSB7XG4gICAgICBhcnJvdy5hcHBlbmRDaGlsZCh2YWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MKGFycm93LCB2YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGFycm93O1xufVxuXG5mdW5jdGlvbiBzZXRDb250ZW50KGNvbnRlbnQsIHByb3BzKSB7XG4gIGlmIChpc0VsZW1lbnQocHJvcHMuY29udGVudCkpIHtcbiAgICBkYW5nZXJvdXNseVNldElubmVySFRNTChjb250ZW50LCAnJyk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChwcm9wcy5jb250ZW50KTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgcHJvcHMuY29udGVudCAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIGlmIChwcm9wcy5hbGxvd0hUTUwpIHtcbiAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MKGNvbnRlbnQsIHByb3BzLmNvbnRlbnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb250ZW50LnRleHRDb250ZW50ID0gcHJvcHMuY29udGVudDtcbiAgICB9XG4gIH1cbn1cbmZ1bmN0aW9uIGdldENoaWxkcmVuKHBvcHBlcikge1xuICB2YXIgYm94ID0gcG9wcGVyLmZpcnN0RWxlbWVudENoaWxkO1xuICB2YXIgYm94Q2hpbGRyZW4gPSBhcnJheUZyb20oYm94LmNoaWxkcmVuKTtcbiAgcmV0dXJuIHtcbiAgICBib3g6IGJveCxcbiAgICBjb250ZW50OiBib3hDaGlsZHJlbi5maW5kKGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICByZXR1cm4gbm9kZS5jbGFzc0xpc3QuY29udGFpbnMoQ09OVEVOVF9DTEFTUyk7XG4gICAgfSksXG4gICAgYXJyb3c6IGJveENoaWxkcmVuLmZpbmQoZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgIHJldHVybiBub2RlLmNsYXNzTGlzdC5jb250YWlucyhBUlJPV19DTEFTUykgfHwgbm9kZS5jbGFzc0xpc3QuY29udGFpbnMoU1ZHX0FSUk9XX0NMQVNTKTtcbiAgICB9KSxcbiAgICBiYWNrZHJvcDogYm94Q2hpbGRyZW4uZmluZChmdW5jdGlvbiAobm9kZSkge1xuICAgICAgcmV0dXJuIG5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKEJBQ0tEUk9QX0NMQVNTKTtcbiAgICB9KVxuICB9O1xufVxuZnVuY3Rpb24gcmVuZGVyKGluc3RhbmNlKSB7XG4gIHZhciBwb3BwZXIgPSBkaXYoKTtcbiAgdmFyIGJveCA9IGRpdigpO1xuICBib3guY2xhc3NOYW1lID0gQk9YX0NMQVNTO1xuICBib3guc2V0QXR0cmlidXRlKCdkYXRhLXN0YXRlJywgJ2hpZGRlbicpO1xuICBib3guc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsICctMScpO1xuICB2YXIgY29udGVudCA9IGRpdigpO1xuICBjb250ZW50LmNsYXNzTmFtZSA9IENPTlRFTlRfQ0xBU1M7XG4gIGNvbnRlbnQuc2V0QXR0cmlidXRlKCdkYXRhLXN0YXRlJywgJ2hpZGRlbicpO1xuICBzZXRDb250ZW50KGNvbnRlbnQsIGluc3RhbmNlLnByb3BzKTtcbiAgcG9wcGVyLmFwcGVuZENoaWxkKGJveCk7XG4gIGJveC5hcHBlbmRDaGlsZChjb250ZW50KTtcbiAgb25VcGRhdGUoaW5zdGFuY2UucHJvcHMsIGluc3RhbmNlLnByb3BzKTtcblxuICBmdW5jdGlvbiBvblVwZGF0ZShwcmV2UHJvcHMsIG5leHRQcm9wcykge1xuICAgIHZhciBfZ2V0Q2hpbGRyZW4gPSBnZXRDaGlsZHJlbihwb3BwZXIpLFxuICAgICAgICBib3ggPSBfZ2V0Q2hpbGRyZW4uYm94LFxuICAgICAgICBjb250ZW50ID0gX2dldENoaWxkcmVuLmNvbnRlbnQsXG4gICAgICAgIGFycm93ID0gX2dldENoaWxkcmVuLmFycm93O1xuXG4gICAgaWYgKG5leHRQcm9wcy50aGVtZSkge1xuICAgICAgYm94LnNldEF0dHJpYnV0ZSgnZGF0YS10aGVtZScsIG5leHRQcm9wcy50aGVtZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGJveC5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtdGhlbWUnKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIG5leHRQcm9wcy5hbmltYXRpb24gPT09ICdzdHJpbmcnKSB7XG4gICAgICBib3guc2V0QXR0cmlidXRlKCdkYXRhLWFuaW1hdGlvbicsIG5leHRQcm9wcy5hbmltYXRpb24pO1xuICAgIH0gZWxzZSB7XG4gICAgICBib3gucmVtb3ZlQXR0cmlidXRlKCdkYXRhLWFuaW1hdGlvbicpO1xuICAgIH1cblxuICAgIGlmIChuZXh0UHJvcHMuaW5lcnRpYSkge1xuICAgICAgYm94LnNldEF0dHJpYnV0ZSgnZGF0YS1pbmVydGlhJywgJycpO1xuICAgIH0gZWxzZSB7XG4gICAgICBib3gucmVtb3ZlQXR0cmlidXRlKCdkYXRhLWluZXJ0aWEnKTtcbiAgICB9XG5cbiAgICBib3guc3R5bGUubWF4V2lkdGggPSB0eXBlb2YgbmV4dFByb3BzLm1heFdpZHRoID09PSAnbnVtYmVyJyA/IG5leHRQcm9wcy5tYXhXaWR0aCArIFwicHhcIiA6IG5leHRQcm9wcy5tYXhXaWR0aDtcblxuICAgIGlmIChuZXh0UHJvcHMucm9sZSkge1xuICAgICAgYm94LnNldEF0dHJpYnV0ZSgncm9sZScsIG5leHRQcm9wcy5yb2xlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYm94LnJlbW92ZUF0dHJpYnV0ZSgncm9sZScpO1xuICAgIH1cblxuICAgIGlmIChwcmV2UHJvcHMuY29udGVudCAhPT0gbmV4dFByb3BzLmNvbnRlbnQgfHwgcHJldlByb3BzLmFsbG93SFRNTCAhPT0gbmV4dFByb3BzLmFsbG93SFRNTCkge1xuICAgICAgc2V0Q29udGVudChjb250ZW50LCBpbnN0YW5jZS5wcm9wcyk7XG4gICAgfVxuXG4gICAgaWYgKG5leHRQcm9wcy5hcnJvdykge1xuICAgICAgaWYgKCFhcnJvdykge1xuICAgICAgICBib3guYXBwZW5kQ2hpbGQoY3JlYXRlQXJyb3dFbGVtZW50KG5leHRQcm9wcy5hcnJvdykpO1xuICAgICAgfSBlbHNlIGlmIChwcmV2UHJvcHMuYXJyb3cgIT09IG5leHRQcm9wcy5hcnJvdykge1xuICAgICAgICBib3gucmVtb3ZlQ2hpbGQoYXJyb3cpO1xuICAgICAgICBib3guYXBwZW5kQ2hpbGQoY3JlYXRlQXJyb3dFbGVtZW50KG5leHRQcm9wcy5hcnJvdykpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoYXJyb3cpIHtcbiAgICAgIGJveC5yZW1vdmVDaGlsZChhcnJvdyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBwb3BwZXI6IHBvcHBlcixcbiAgICBvblVwZGF0ZTogb25VcGRhdGVcbiAgfTtcbn0gLy8gUnVudGltZSBjaGVjayB0byBpZGVudGlmeSBpZiB0aGUgcmVuZGVyIGZ1bmN0aW9uIGlzIHRoZSBkZWZhdWx0IG9uZTsgdGhpc1xuLy8gd2F5IHdlIGNhbiBhcHBseSBkZWZhdWx0IENTUyB0cmFuc2l0aW9ucyBsb2dpYyBhbmQgaXQgY2FuIGJlIHRyZWUtc2hha2VuIGF3YXlcblxucmVuZGVyLiQkdGlwcHkgPSB0cnVlO1xuXG52YXIgaWRDb3VudGVyID0gMTtcbnZhciBtb3VzZU1vdmVMaXN0ZW5lcnMgPSBbXTsgLy8gVXNlZCBieSBgaGlkZUFsbCgpYFxuXG52YXIgbW91bnRlZEluc3RhbmNlcyA9IFtdO1xuZnVuY3Rpb24gY3JlYXRlVGlwcHkocmVmZXJlbmNlLCBwYXNzZWRQcm9wcykge1xuICB2YXIgcHJvcHMgPSBldmFsdWF0ZVByb3BzKHJlZmVyZW5jZSwgT2JqZWN0LmFzc2lnbih7fSwgZGVmYXVsdFByb3BzLCBnZXRFeHRlbmRlZFBhc3NlZFByb3BzKHJlbW92ZVVuZGVmaW5lZFByb3BzKHBhc3NlZFByb3BzKSkpKTsgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIC8vIPCflJIgUHJpdmF0ZSBtZW1iZXJzXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gIHZhciBzaG93VGltZW91dDtcbiAgdmFyIGhpZGVUaW1lb3V0O1xuICB2YXIgc2NoZWR1bGVIaWRlQW5pbWF0aW9uRnJhbWU7XG4gIHZhciBpc1Zpc2libGVGcm9tQ2xpY2sgPSBmYWxzZTtcbiAgdmFyIGRpZEhpZGVEdWVUb0RvY3VtZW50TW91c2VEb3duID0gZmFsc2U7XG4gIHZhciBkaWRUb3VjaE1vdmUgPSBmYWxzZTtcbiAgdmFyIGlnbm9yZU9uRmlyc3RVcGRhdGUgPSBmYWxzZTtcbiAgdmFyIGxhc3RUcmlnZ2VyRXZlbnQ7XG4gIHZhciBjdXJyZW50VHJhbnNpdGlvbkVuZExpc3RlbmVyO1xuICB2YXIgb25GaXJzdFVwZGF0ZTtcbiAgdmFyIGxpc3RlbmVycyA9IFtdO1xuICB2YXIgZGVib3VuY2VkT25Nb3VzZU1vdmUgPSBkZWJvdW5jZShvbk1vdXNlTW92ZSwgcHJvcHMuaW50ZXJhY3RpdmVEZWJvdW5jZSk7XG4gIHZhciBjdXJyZW50VGFyZ2V0OyAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgLy8g8J+UkSBQdWJsaWMgbWVtYmVyc1xuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICB2YXIgaWQgPSBpZENvdW50ZXIrKztcbiAgdmFyIHBvcHBlckluc3RhbmNlID0gbnVsbDtcbiAgdmFyIHBsdWdpbnMgPSB1bmlxdWUocHJvcHMucGx1Z2lucyk7XG4gIHZhciBzdGF0ZSA9IHtcbiAgICAvLyBJcyB0aGUgaW5zdGFuY2UgY3VycmVudGx5IGVuYWJsZWQ/XG4gICAgaXNFbmFibGVkOiB0cnVlLFxuICAgIC8vIElzIHRoZSB0aXBweSBjdXJyZW50bHkgc2hvd2luZyBhbmQgbm90IHRyYW5zaXRpb25pbmcgb3V0P1xuICAgIGlzVmlzaWJsZTogZmFsc2UsXG4gICAgLy8gSGFzIHRoZSBpbnN0YW5jZSBiZWVuIGRlc3Ryb3llZD9cbiAgICBpc0Rlc3Ryb3llZDogZmFsc2UsXG4gICAgLy8gSXMgdGhlIHRpcHB5IGN1cnJlbnRseSBtb3VudGVkIHRvIHRoZSBET00/XG4gICAgaXNNb3VudGVkOiBmYWxzZSxcbiAgICAvLyBIYXMgdGhlIHRpcHB5IGZpbmlzaGVkIHRyYW5zaXRpb25pbmcgaW4/XG4gICAgaXNTaG93bjogZmFsc2VcbiAgfTtcbiAgdmFyIGluc3RhbmNlID0ge1xuICAgIC8vIHByb3BlcnRpZXNcbiAgICBpZDogaWQsXG4gICAgcmVmZXJlbmNlOiByZWZlcmVuY2UsXG4gICAgcG9wcGVyOiBkaXYoKSxcbiAgICBwb3BwZXJJbnN0YW5jZTogcG9wcGVySW5zdGFuY2UsXG4gICAgcHJvcHM6IHByb3BzLFxuICAgIHN0YXRlOiBzdGF0ZSxcbiAgICBwbHVnaW5zOiBwbHVnaW5zLFxuICAgIC8vIG1ldGhvZHNcbiAgICBjbGVhckRlbGF5VGltZW91dHM6IGNsZWFyRGVsYXlUaW1lb3V0cyxcbiAgICBzZXRQcm9wczogc2V0UHJvcHMsXG4gICAgc2V0Q29udGVudDogc2V0Q29udGVudCxcbiAgICBzaG93OiBzaG93LFxuICAgIGhpZGU6IGhpZGUsXG4gICAgaGlkZVdpdGhJbnRlcmFjdGl2aXR5OiBoaWRlV2l0aEludGVyYWN0aXZpdHksXG4gICAgZW5hYmxlOiBlbmFibGUsXG4gICAgZGlzYWJsZTogZGlzYWJsZSxcbiAgICB1bm1vdW50OiB1bm1vdW50LFxuICAgIGRlc3Ryb3k6IGRlc3Ryb3lcbiAgfTsgLy8gVE9ETzogSW52ZXN0aWdhdGUgd2h5IHRoaXMgZWFybHkgcmV0dXJuIGNhdXNlcyBhIFREWiBlcnJvciBpbiB0aGUgdGVzdHMg4oCUXG4gIC8vIGl0IGRvZXNuJ3Qgc2VlbSB0byBoYXBwZW4gaW4gdGhlIGJyb3dzZXJcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cblxuICBpZiAoIXByb3BzLnJlbmRlcikge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICAgIGVycm9yV2hlbih0cnVlLCAncmVuZGVyKCkgZnVuY3Rpb24gaGFzIG5vdCBiZWVuIHN1cHBsaWVkLicpO1xuICAgIH1cblxuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfSAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgLy8gSW5pdGlhbCBtdXRhdGlvbnNcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cblxuICB2YXIgX3Byb3BzJHJlbmRlciA9IHByb3BzLnJlbmRlcihpbnN0YW5jZSksXG4gICAgICBwb3BwZXIgPSBfcHJvcHMkcmVuZGVyLnBvcHBlcixcbiAgICAgIG9uVXBkYXRlID0gX3Byb3BzJHJlbmRlci5vblVwZGF0ZTtcblxuICBwb3BwZXIuc2V0QXR0cmlidXRlKCdkYXRhLXRpcHB5LXJvb3QnLCAnJyk7XG4gIHBvcHBlci5pZCA9IFwidGlwcHktXCIgKyBpbnN0YW5jZS5pZDtcbiAgaW5zdGFuY2UucG9wcGVyID0gcG9wcGVyO1xuICByZWZlcmVuY2UuX3RpcHB5ID0gaW5zdGFuY2U7XG4gIHBvcHBlci5fdGlwcHkgPSBpbnN0YW5jZTtcbiAgdmFyIHBsdWdpbnNIb29rcyA9IHBsdWdpbnMubWFwKGZ1bmN0aW9uIChwbHVnaW4pIHtcbiAgICByZXR1cm4gcGx1Z2luLmZuKGluc3RhbmNlKTtcbiAgfSk7XG4gIHZhciBoYXNBcmlhRXhwYW5kZWQgPSByZWZlcmVuY2UuaGFzQXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJyk7XG4gIGFkZExpc3RlbmVycygpO1xuICBoYW5kbGVBcmlhRXhwYW5kZWRBdHRyaWJ1dGUoKTtcbiAgaGFuZGxlU3R5bGVzKCk7XG4gIGludm9rZUhvb2soJ29uQ3JlYXRlJywgW2luc3RhbmNlXSk7XG5cbiAgaWYgKHByb3BzLnNob3dPbkNyZWF0ZSkge1xuICAgIHNjaGVkdWxlU2hvdygpO1xuICB9IC8vIFByZXZlbnQgYSB0aXBweSB3aXRoIGEgZGVsYXkgZnJvbSBoaWRpbmcgaWYgdGhlIGN1cnNvciBsZWZ0IHRoZW4gcmV0dXJuZWRcbiAgLy8gYmVmb3JlIGl0IHN0YXJ0ZWQgaGlkaW5nXG5cblxuICBwb3BwZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoaW5zdGFuY2UucHJvcHMuaW50ZXJhY3RpdmUgJiYgaW5zdGFuY2Uuc3RhdGUuaXNWaXNpYmxlKSB7XG4gICAgICBpbnN0YW5jZS5jbGVhckRlbGF5VGltZW91dHMoKTtcbiAgICB9XG4gIH0pO1xuICBwb3BwZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoaW5zdGFuY2UucHJvcHMuaW50ZXJhY3RpdmUgJiYgaW5zdGFuY2UucHJvcHMudHJpZ2dlci5pbmRleE9mKCdtb3VzZWVudGVyJykgPj0gMCkge1xuICAgICAgZ2V0RG9jdW1lbnQoKS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBkZWJvdW5jZWRPbk1vdXNlTW92ZSk7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIGluc3RhbmNlOyAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgLy8g8J+UkiBQcml2YXRlIG1ldGhvZHNcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiAgZnVuY3Rpb24gZ2V0Tm9ybWFsaXplZFRvdWNoU2V0dGluZ3MoKSB7XG4gICAgdmFyIHRvdWNoID0gaW5zdGFuY2UucHJvcHMudG91Y2g7XG4gICAgcmV0dXJuIEFycmF5LmlzQXJyYXkodG91Y2gpID8gdG91Y2ggOiBbdG91Y2gsIDBdO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0SXNDdXN0b21Ub3VjaEJlaGF2aW9yKCkge1xuICAgIHJldHVybiBnZXROb3JtYWxpemVkVG91Y2hTZXR0aW5ncygpWzBdID09PSAnaG9sZCc7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRJc0RlZmF1bHRSZW5kZXJGbigpIHtcbiAgICB2YXIgX2luc3RhbmNlJHByb3BzJHJlbmRlO1xuXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIHJldHVybiAhISgoX2luc3RhbmNlJHByb3BzJHJlbmRlID0gaW5zdGFuY2UucHJvcHMucmVuZGVyKSAhPSBudWxsICYmIF9pbnN0YW5jZSRwcm9wcyRyZW5kZS4kJHRpcHB5KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEN1cnJlbnRUYXJnZXQoKSB7XG4gICAgcmV0dXJuIGN1cnJlbnRUYXJnZXQgfHwgcmVmZXJlbmNlO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0RG9jdW1lbnQoKSB7XG4gICAgdmFyIHBhcmVudCA9IGdldEN1cnJlbnRUYXJnZXQoKS5wYXJlbnROb2RlO1xuICAgIHJldHVybiBwYXJlbnQgPyBnZXRPd25lckRvY3VtZW50KHBhcmVudCkgOiBkb2N1bWVudDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldERlZmF1bHRUZW1wbGF0ZUNoaWxkcmVuKCkge1xuICAgIHJldHVybiBnZXRDaGlsZHJlbihwb3BwZXIpO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0RGVsYXkoaXNTaG93KSB7XG4gICAgLy8gRm9yIHRvdWNoIG9yIGtleWJvYXJkIGlucHV0LCBmb3JjZSBgMGAgZGVsYXkgZm9yIFVYIHJlYXNvbnNcbiAgICAvLyBBbHNvIGlmIHRoZSBpbnN0YW5jZSBpcyBtb3VudGVkIGJ1dCBub3QgdmlzaWJsZSAodHJhbnNpdGlvbmluZyBvdXQpLFxuICAgIC8vIGlnbm9yZSBkZWxheVxuICAgIGlmIChpbnN0YW5jZS5zdGF0ZS5pc01vdW50ZWQgJiYgIWluc3RhbmNlLnN0YXRlLmlzVmlzaWJsZSB8fCBjdXJyZW50SW5wdXQuaXNUb3VjaCB8fCBsYXN0VHJpZ2dlckV2ZW50ICYmIGxhc3RUcmlnZ2VyRXZlbnQudHlwZSA9PT0gJ2ZvY3VzJykge1xuICAgICAgcmV0dXJuIDA7XG4gICAgfVxuXG4gICAgcmV0dXJuIGdldFZhbHVlQXRJbmRleE9yUmV0dXJuKGluc3RhbmNlLnByb3BzLmRlbGF5LCBpc1Nob3cgPyAwIDogMSwgZGVmYXVsdFByb3BzLmRlbGF5KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZVN0eWxlcyhmcm9tSGlkZSkge1xuICAgIGlmIChmcm9tSGlkZSA9PT0gdm9pZCAwKSB7XG4gICAgICBmcm9tSGlkZSA9IGZhbHNlO1xuICAgIH1cblxuICAgIHBvcHBlci5zdHlsZS5wb2ludGVyRXZlbnRzID0gaW5zdGFuY2UucHJvcHMuaW50ZXJhY3RpdmUgJiYgIWZyb21IaWRlID8gJycgOiAnbm9uZSc7XG4gICAgcG9wcGVyLnN0eWxlLnpJbmRleCA9IFwiXCIgKyBpbnN0YW5jZS5wcm9wcy56SW5kZXg7XG4gIH1cblxuICBmdW5jdGlvbiBpbnZva2VIb29rKGhvb2ssIGFyZ3MsIHNob3VsZEludm9rZVByb3BzSG9vaykge1xuICAgIGlmIChzaG91bGRJbnZva2VQcm9wc0hvb2sgPT09IHZvaWQgMCkge1xuICAgICAgc2hvdWxkSW52b2tlUHJvcHNIb29rID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBwbHVnaW5zSG9va3MuZm9yRWFjaChmdW5jdGlvbiAocGx1Z2luSG9va3MpIHtcbiAgICAgIGlmIChwbHVnaW5Ib29rc1tob29rXSkge1xuICAgICAgICBwbHVnaW5Ib29rc1tob29rXS5hcHBseShwbHVnaW5Ib29rcywgYXJncyk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAoc2hvdWxkSW52b2tlUHJvcHNIb29rKSB7XG4gICAgICB2YXIgX2luc3RhbmNlJHByb3BzO1xuXG4gICAgICAoX2luc3RhbmNlJHByb3BzID0gaW5zdGFuY2UucHJvcHMpW2hvb2tdLmFwcGx5KF9pbnN0YW5jZSRwcm9wcywgYXJncyk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlQXJpYUNvbnRlbnRBdHRyaWJ1dGUoKSB7XG4gICAgdmFyIGFyaWEgPSBpbnN0YW5jZS5wcm9wcy5hcmlhO1xuXG4gICAgaWYgKCFhcmlhLmNvbnRlbnQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgYXR0ciA9IFwiYXJpYS1cIiArIGFyaWEuY29udGVudDtcbiAgICB2YXIgaWQgPSBwb3BwZXIuaWQ7XG4gICAgdmFyIG5vZGVzID0gbm9ybWFsaXplVG9BcnJheShpbnN0YW5jZS5wcm9wcy50cmlnZ2VyVGFyZ2V0IHx8IHJlZmVyZW5jZSk7XG4gICAgbm9kZXMuZm9yRWFjaChmdW5jdGlvbiAobm9kZSkge1xuICAgICAgdmFyIGN1cnJlbnRWYWx1ZSA9IG5vZGUuZ2V0QXR0cmlidXRlKGF0dHIpO1xuXG4gICAgICBpZiAoaW5zdGFuY2Uuc3RhdGUuaXNWaXNpYmxlKSB7XG4gICAgICAgIG5vZGUuc2V0QXR0cmlidXRlKGF0dHIsIGN1cnJlbnRWYWx1ZSA/IGN1cnJlbnRWYWx1ZSArIFwiIFwiICsgaWQgOiBpZCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgbmV4dFZhbHVlID0gY3VycmVudFZhbHVlICYmIGN1cnJlbnRWYWx1ZS5yZXBsYWNlKGlkLCAnJykudHJpbSgpO1xuXG4gICAgICAgIGlmIChuZXh0VmFsdWUpIHtcbiAgICAgICAgICBub2RlLnNldEF0dHJpYnV0ZShhdHRyLCBuZXh0VmFsdWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG5vZGUucmVtb3ZlQXR0cmlidXRlKGF0dHIpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVBcmlhRXhwYW5kZWRBdHRyaWJ1dGUoKSB7XG4gICAgaWYgKGhhc0FyaWFFeHBhbmRlZCB8fCAhaW5zdGFuY2UucHJvcHMuYXJpYS5leHBhbmRlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBub2RlcyA9IG5vcm1hbGl6ZVRvQXJyYXkoaW5zdGFuY2UucHJvcHMudHJpZ2dlclRhcmdldCB8fCByZWZlcmVuY2UpO1xuICAgIG5vZGVzLmZvckVhY2goZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgIGlmIChpbnN0YW5jZS5wcm9wcy5pbnRlcmFjdGl2ZSkge1xuICAgICAgICBub2RlLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsIGluc3RhbmNlLnN0YXRlLmlzVmlzaWJsZSAmJiBub2RlID09PSBnZXRDdXJyZW50VGFyZ2V0KCkgPyAndHJ1ZScgOiAnZmFsc2UnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5vZGUucmVtb3ZlQXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBjbGVhbnVwSW50ZXJhY3RpdmVNb3VzZUxpc3RlbmVycygpIHtcbiAgICBnZXREb2N1bWVudCgpLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGRlYm91bmNlZE9uTW91c2VNb3ZlKTtcbiAgICBtb3VzZU1vdmVMaXN0ZW5lcnMgPSBtb3VzZU1vdmVMaXN0ZW5lcnMuZmlsdGVyKGZ1bmN0aW9uIChsaXN0ZW5lcikge1xuICAgICAgcmV0dXJuIGxpc3RlbmVyICE9PSBkZWJvdW5jZWRPbk1vdXNlTW92ZTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uRG9jdW1lbnRQcmVzcyhldmVudCkge1xuICAgIC8vIE1vdmVkIGZpbmdlciB0byBzY3JvbGwgaW5zdGVhZCBvZiBhbiBpbnRlbnRpb25hbCB0YXAgb3V0c2lkZVxuICAgIGlmIChjdXJyZW50SW5wdXQuaXNUb3VjaCkge1xuICAgICAgaWYgKGRpZFRvdWNoTW92ZSB8fCBldmVudC50eXBlID09PSAnbW91c2Vkb3duJykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGFjdHVhbFRhcmdldCA9IGV2ZW50LmNvbXBvc2VkUGF0aCAmJiBldmVudC5jb21wb3NlZFBhdGgoKVswXSB8fCBldmVudC50YXJnZXQ7IC8vIENsaWNrZWQgb24gaW50ZXJhY3RpdmUgcG9wcGVyXG5cbiAgICBpZiAoaW5zdGFuY2UucHJvcHMuaW50ZXJhY3RpdmUgJiYgYWN0dWFsQ29udGFpbnMocG9wcGVyLCBhY3R1YWxUYXJnZXQpKSB7XG4gICAgICByZXR1cm47XG4gICAgfSAvLyBDbGlja2VkIG9uIHRoZSBldmVudCBsaXN0ZW5lcnMgdGFyZ2V0XG5cblxuICAgIGlmIChub3JtYWxpemVUb0FycmF5KGluc3RhbmNlLnByb3BzLnRyaWdnZXJUYXJnZXQgfHwgcmVmZXJlbmNlKS5zb21lKGZ1bmN0aW9uIChlbCkge1xuICAgICAgcmV0dXJuIGFjdHVhbENvbnRhaW5zKGVsLCBhY3R1YWxUYXJnZXQpO1xuICAgIH0pKSB7XG4gICAgICBpZiAoY3VycmVudElucHV0LmlzVG91Y2gpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoaW5zdGFuY2Uuc3RhdGUuaXNWaXNpYmxlICYmIGluc3RhbmNlLnByb3BzLnRyaWdnZXIuaW5kZXhPZignY2xpY2snKSA+PSAwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaW52b2tlSG9vaygnb25DbGlja091dHNpZGUnLCBbaW5zdGFuY2UsIGV2ZW50XSk7XG4gICAgfVxuXG4gICAgaWYgKGluc3RhbmNlLnByb3BzLmhpZGVPbkNsaWNrID09PSB0cnVlKSB7XG4gICAgICBpbnN0YW5jZS5jbGVhckRlbGF5VGltZW91dHMoKTtcbiAgICAgIGluc3RhbmNlLmhpZGUoKTsgLy8gYG1vdXNlZG93bmAgZXZlbnQgaXMgZmlyZWQgcmlnaHQgYmVmb3JlIGBmb2N1c2AgaWYgcHJlc3NpbmcgdGhlXG4gICAgICAvLyBjdXJyZW50VGFyZ2V0LiBUaGlzIGxldHMgYSB0aXBweSB3aXRoIGBmb2N1c2AgdHJpZ2dlciBrbm93IHRoYXQgaXRcbiAgICAgIC8vIHNob3VsZCBub3Qgc2hvd1xuXG4gICAgICBkaWRIaWRlRHVlVG9Eb2N1bWVudE1vdXNlRG93biA9IHRydWU7XG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZGlkSGlkZUR1ZVRvRG9jdW1lbnRNb3VzZURvd24gPSBmYWxzZTtcbiAgICAgIH0pOyAvLyBUaGUgbGlzdGVuZXIgZ2V0cyBhZGRlZCBpbiBgc2NoZWR1bGVTaG93KClgLCBidXQgdGhpcyBtYXkgYmUgaGlkaW5nIGl0XG4gICAgICAvLyBiZWZvcmUgaXQgc2hvd3MsIGFuZCBoaWRlKCkncyBlYXJseSBiYWlsLW91dCBiZWhhdmlvciBjYW4gcHJldmVudCBpdFxuICAgICAgLy8gZnJvbSBiZWluZyBjbGVhbmVkIHVwXG5cbiAgICAgIGlmICghaW5zdGFuY2Uuc3RhdGUuaXNNb3VudGVkKSB7XG4gICAgICAgIHJlbW92ZURvY3VtZW50UHJlc3MoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBvblRvdWNoTW92ZSgpIHtcbiAgICBkaWRUb3VjaE1vdmUgPSB0cnVlO1xuICB9XG5cbiAgZnVuY3Rpb24gb25Ub3VjaFN0YXJ0KCkge1xuICAgIGRpZFRvdWNoTW92ZSA9IGZhbHNlO1xuICB9XG5cbiAgZnVuY3Rpb24gYWRkRG9jdW1lbnRQcmVzcygpIHtcbiAgICB2YXIgZG9jID0gZ2V0RG9jdW1lbnQoKTtcbiAgICBkb2MuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgb25Eb2N1bWVudFByZXNzLCB0cnVlKTtcbiAgICBkb2MuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCBvbkRvY3VtZW50UHJlc3MsIFRPVUNIX09QVElPTlMpO1xuICAgIGRvYy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0Jywgb25Ub3VjaFN0YXJ0LCBUT1VDSF9PUFRJT05TKTtcbiAgICBkb2MuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgb25Ub3VjaE1vdmUsIFRPVUNIX09QVElPTlMpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVtb3ZlRG9jdW1lbnRQcmVzcygpIHtcbiAgICB2YXIgZG9jID0gZ2V0RG9jdW1lbnQoKTtcbiAgICBkb2MucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgb25Eb2N1bWVudFByZXNzLCB0cnVlKTtcbiAgICBkb2MucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCBvbkRvY3VtZW50UHJlc3MsIFRPVUNIX09QVElPTlMpO1xuICAgIGRvYy5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0Jywgb25Ub3VjaFN0YXJ0LCBUT1VDSF9PUFRJT05TKTtcbiAgICBkb2MucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgb25Ub3VjaE1vdmUsIFRPVUNIX09QVElPTlMpO1xuICB9XG5cbiAgZnVuY3Rpb24gb25UcmFuc2l0aW9uZWRPdXQoZHVyYXRpb24sIGNhbGxiYWNrKSB7XG4gICAgb25UcmFuc2l0aW9uRW5kKGR1cmF0aW9uLCBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoIWluc3RhbmNlLnN0YXRlLmlzVmlzaWJsZSAmJiBwb3BwZXIucGFyZW50Tm9kZSAmJiBwb3BwZXIucGFyZW50Tm9kZS5jb250YWlucyhwb3BwZXIpKSB7XG4gICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBvblRyYW5zaXRpb25lZEluKGR1cmF0aW9uLCBjYWxsYmFjaykge1xuICAgIG9uVHJhbnNpdGlvbkVuZChkdXJhdGlvbiwgY2FsbGJhY2spO1xuICB9XG5cbiAgZnVuY3Rpb24gb25UcmFuc2l0aW9uRW5kKGR1cmF0aW9uLCBjYWxsYmFjaykge1xuICAgIHZhciBib3ggPSBnZXREZWZhdWx0VGVtcGxhdGVDaGlsZHJlbigpLmJveDtcblxuICAgIGZ1bmN0aW9uIGxpc3RlbmVyKGV2ZW50KSB7XG4gICAgICBpZiAoZXZlbnQudGFyZ2V0ID09PSBib3gpIHtcbiAgICAgICAgdXBkYXRlVHJhbnNpdGlvbkVuZExpc3RlbmVyKGJveCwgJ3JlbW92ZScsIGxpc3RlbmVyKTtcbiAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgIH1cbiAgICB9IC8vIE1ha2UgY2FsbGJhY2sgc3luY2hyb25vdXMgaWYgZHVyYXRpb24gaXMgMFxuICAgIC8vIGB0cmFuc2l0aW9uZW5kYCB3b24ndCBmaXJlIG90aGVyd2lzZVxuXG5cbiAgICBpZiAoZHVyYXRpb24gPT09IDApIHtcbiAgICAgIHJldHVybiBjYWxsYmFjaygpO1xuICAgIH1cblxuICAgIHVwZGF0ZVRyYW5zaXRpb25FbmRMaXN0ZW5lcihib3gsICdyZW1vdmUnLCBjdXJyZW50VHJhbnNpdGlvbkVuZExpc3RlbmVyKTtcbiAgICB1cGRhdGVUcmFuc2l0aW9uRW5kTGlzdGVuZXIoYm94LCAnYWRkJywgbGlzdGVuZXIpO1xuICAgIGN1cnJlbnRUcmFuc2l0aW9uRW5kTGlzdGVuZXIgPSBsaXN0ZW5lcjtcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uKGV2ZW50VHlwZSwgaGFuZGxlciwgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHtcbiAgICAgIG9wdGlvbnMgPSBmYWxzZTtcbiAgICB9XG5cbiAgICB2YXIgbm9kZXMgPSBub3JtYWxpemVUb0FycmF5KGluc3RhbmNlLnByb3BzLnRyaWdnZXJUYXJnZXQgfHwgcmVmZXJlbmNlKTtcbiAgICBub2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICBub2RlLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBoYW5kbGVyLCBvcHRpb25zKTtcbiAgICAgIGxpc3RlbmVycy5wdXNoKHtcbiAgICAgICAgbm9kZTogbm9kZSxcbiAgICAgICAgZXZlbnRUeXBlOiBldmVudFR5cGUsXG4gICAgICAgIGhhbmRsZXI6IGhhbmRsZXIsXG4gICAgICAgIG9wdGlvbnM6IG9wdGlvbnNcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gYWRkTGlzdGVuZXJzKCkge1xuICAgIGlmIChnZXRJc0N1c3RvbVRvdWNoQmVoYXZpb3IoKSkge1xuICAgICAgb24oJ3RvdWNoc3RhcnQnLCBvblRyaWdnZXIsIHtcbiAgICAgICAgcGFzc2l2ZTogdHJ1ZVxuICAgICAgfSk7XG4gICAgICBvbigndG91Y2hlbmQnLCBvbk1vdXNlTGVhdmUsIHtcbiAgICAgICAgcGFzc2l2ZTogdHJ1ZVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgc3BsaXRCeVNwYWNlcyhpbnN0YW5jZS5wcm9wcy50cmlnZ2VyKS5mb3JFYWNoKGZ1bmN0aW9uIChldmVudFR5cGUpIHtcbiAgICAgIGlmIChldmVudFR5cGUgPT09ICdtYW51YWwnKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgb24oZXZlbnRUeXBlLCBvblRyaWdnZXIpO1xuXG4gICAgICBzd2l0Y2ggKGV2ZW50VHlwZSkge1xuICAgICAgICBjYXNlICdtb3VzZWVudGVyJzpcbiAgICAgICAgICBvbignbW91c2VsZWF2ZScsIG9uTW91c2VMZWF2ZSk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnZm9jdXMnOlxuICAgICAgICAgIG9uKGlzSUUxMSA/ICdmb2N1c291dCcgOiAnYmx1cicsIG9uQmx1ck9yRm9jdXNPdXQpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ2ZvY3VzaW4nOlxuICAgICAgICAgIG9uKCdmb2N1c291dCcsIG9uQmx1ck9yRm9jdXNPdXQpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVtb3ZlTGlzdGVuZXJzKCkge1xuICAgIGxpc3RlbmVycy5mb3JFYWNoKGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgICB2YXIgbm9kZSA9IF9yZWYubm9kZSxcbiAgICAgICAgICBldmVudFR5cGUgPSBfcmVmLmV2ZW50VHlwZSxcbiAgICAgICAgICBoYW5kbGVyID0gX3JlZi5oYW5kbGVyLFxuICAgICAgICAgIG9wdGlvbnMgPSBfcmVmLm9wdGlvbnM7XG4gICAgICBub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBoYW5kbGVyLCBvcHRpb25zKTtcbiAgICB9KTtcbiAgICBsaXN0ZW5lcnMgPSBbXTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uVHJpZ2dlcihldmVudCkge1xuICAgIHZhciBfbGFzdFRyaWdnZXJFdmVudDtcblxuICAgIHZhciBzaG91bGRTY2hlZHVsZUNsaWNrSGlkZSA9IGZhbHNlO1xuXG4gICAgaWYgKCFpbnN0YW5jZS5zdGF0ZS5pc0VuYWJsZWQgfHwgaXNFdmVudExpc3RlbmVyU3RvcHBlZChldmVudCkgfHwgZGlkSGlkZUR1ZVRvRG9jdW1lbnRNb3VzZURvd24pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgd2FzRm9jdXNlZCA9ICgoX2xhc3RUcmlnZ2VyRXZlbnQgPSBsYXN0VHJpZ2dlckV2ZW50KSA9PSBudWxsID8gdm9pZCAwIDogX2xhc3RUcmlnZ2VyRXZlbnQudHlwZSkgPT09ICdmb2N1cyc7XG4gICAgbGFzdFRyaWdnZXJFdmVudCA9IGV2ZW50O1xuICAgIGN1cnJlbnRUYXJnZXQgPSBldmVudC5jdXJyZW50VGFyZ2V0O1xuICAgIGhhbmRsZUFyaWFFeHBhbmRlZEF0dHJpYnV0ZSgpO1xuXG4gICAgaWYgKCFpbnN0YW5jZS5zdGF0ZS5pc1Zpc2libGUgJiYgaXNNb3VzZUV2ZW50KGV2ZW50KSkge1xuICAgICAgLy8gSWYgc2Nyb2xsaW5nLCBgbW91c2VlbnRlcmAgZXZlbnRzIGNhbiBiZSBmaXJlZCBpZiB0aGUgY3Vyc29yIGxhbmRzXG4gICAgICAvLyBvdmVyIGEgbmV3IHRhcmdldCwgYnV0IGBtb3VzZW1vdmVgIGV2ZW50cyBkb24ndCBnZXQgZmlyZWQuIFRoaXNcbiAgICAgIC8vIGNhdXNlcyBpbnRlcmFjdGl2ZSB0b29sdGlwcyB0byBnZXQgc3R1Y2sgb3BlbiB1bnRpbCB0aGUgY3Vyc29yIGlzXG4gICAgICAvLyBtb3ZlZFxuICAgICAgbW91c2VNb3ZlTGlzdGVuZXJzLmZvckVhY2goZnVuY3Rpb24gKGxpc3RlbmVyKSB7XG4gICAgICAgIHJldHVybiBsaXN0ZW5lcihldmVudCk7XG4gICAgICB9KTtcbiAgICB9IC8vIFRvZ2dsZSBzaG93L2hpZGUgd2hlbiBjbGlja2luZyBjbGljay10cmlnZ2VyZWQgdG9vbHRpcHNcblxuXG4gICAgaWYgKGV2ZW50LnR5cGUgPT09ICdjbGljaycgJiYgKGluc3RhbmNlLnByb3BzLnRyaWdnZXIuaW5kZXhPZignbW91c2VlbnRlcicpIDwgMCB8fCBpc1Zpc2libGVGcm9tQ2xpY2spICYmIGluc3RhbmNlLnByb3BzLmhpZGVPbkNsaWNrICE9PSBmYWxzZSAmJiBpbnN0YW5jZS5zdGF0ZS5pc1Zpc2libGUpIHtcbiAgICAgIHNob3VsZFNjaGVkdWxlQ2xpY2tIaWRlID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2NoZWR1bGVTaG93KGV2ZW50KTtcbiAgICB9XG5cbiAgICBpZiAoZXZlbnQudHlwZSA9PT0gJ2NsaWNrJykge1xuICAgICAgaXNWaXNpYmxlRnJvbUNsaWNrID0gIXNob3VsZFNjaGVkdWxlQ2xpY2tIaWRlO1xuICAgIH1cblxuICAgIGlmIChzaG91bGRTY2hlZHVsZUNsaWNrSGlkZSAmJiAhd2FzRm9jdXNlZCkge1xuICAgICAgc2NoZWR1bGVIaWRlKGV2ZW50KTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBvbk1vdXNlTW92ZShldmVudCkge1xuICAgIHZhciB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG4gICAgdmFyIGlzQ3Vyc29yT3ZlclJlZmVyZW5jZU9yUG9wcGVyID0gZ2V0Q3VycmVudFRhcmdldCgpLmNvbnRhaW5zKHRhcmdldCkgfHwgcG9wcGVyLmNvbnRhaW5zKHRhcmdldCk7XG5cbiAgICBpZiAoZXZlbnQudHlwZSA9PT0gJ21vdXNlbW92ZScgJiYgaXNDdXJzb3JPdmVyUmVmZXJlbmNlT3JQb3BwZXIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgcG9wcGVyVHJlZURhdGEgPSBnZXROZXN0ZWRQb3BwZXJUcmVlKCkuY29uY2F0KHBvcHBlcikubWFwKGZ1bmN0aW9uIChwb3BwZXIpIHtcbiAgICAgIHZhciBfaW5zdGFuY2UkcG9wcGVySW5zdGE7XG5cbiAgICAgIHZhciBpbnN0YW5jZSA9IHBvcHBlci5fdGlwcHk7XG4gICAgICB2YXIgc3RhdGUgPSAoX2luc3RhbmNlJHBvcHBlckluc3RhID0gaW5zdGFuY2UucG9wcGVySW5zdGFuY2UpID09IG51bGwgPyB2b2lkIDAgOiBfaW5zdGFuY2UkcG9wcGVySW5zdGEuc3RhdGU7XG5cbiAgICAgIGlmIChzdGF0ZSkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHBvcHBlclJlY3Q6IHBvcHBlci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcbiAgICAgICAgICBwb3BwZXJTdGF0ZTogc3RhdGUsXG4gICAgICAgICAgcHJvcHM6IHByb3BzXG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH0pLmZpbHRlcihCb29sZWFuKTtcblxuICAgIGlmIChpc0N1cnNvck91dHNpZGVJbnRlcmFjdGl2ZUJvcmRlcihwb3BwZXJUcmVlRGF0YSwgZXZlbnQpKSB7XG4gICAgICBjbGVhbnVwSW50ZXJhY3RpdmVNb3VzZUxpc3RlbmVycygpO1xuICAgICAgc2NoZWR1bGVIaWRlKGV2ZW50KTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBvbk1vdXNlTGVhdmUoZXZlbnQpIHtcbiAgICB2YXIgc2hvdWxkQmFpbCA9IGlzRXZlbnRMaXN0ZW5lclN0b3BwZWQoZXZlbnQpIHx8IGluc3RhbmNlLnByb3BzLnRyaWdnZXIuaW5kZXhPZignY2xpY2snKSA+PSAwICYmIGlzVmlzaWJsZUZyb21DbGljaztcblxuICAgIGlmIChzaG91bGRCYWlsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGluc3RhbmNlLnByb3BzLmludGVyYWN0aXZlKSB7XG4gICAgICBpbnN0YW5jZS5oaWRlV2l0aEludGVyYWN0aXZpdHkoZXZlbnQpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHNjaGVkdWxlSGlkZShldmVudCk7XG4gIH1cblxuICBmdW5jdGlvbiBvbkJsdXJPckZvY3VzT3V0KGV2ZW50KSB7XG4gICAgaWYgKGluc3RhbmNlLnByb3BzLnRyaWdnZXIuaW5kZXhPZignZm9jdXNpbicpIDwgMCAmJiBldmVudC50YXJnZXQgIT09IGdldEN1cnJlbnRUYXJnZXQoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH0gLy8gSWYgZm9jdXMgd2FzIG1vdmVkIHRvIHdpdGhpbiB0aGUgcG9wcGVyXG5cblxuICAgIGlmIChpbnN0YW5jZS5wcm9wcy5pbnRlcmFjdGl2ZSAmJiBldmVudC5yZWxhdGVkVGFyZ2V0ICYmIHBvcHBlci5jb250YWlucyhldmVudC5yZWxhdGVkVGFyZ2V0KSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHNjaGVkdWxlSGlkZShldmVudCk7XG4gIH1cblxuICBmdW5jdGlvbiBpc0V2ZW50TGlzdGVuZXJTdG9wcGVkKGV2ZW50KSB7XG4gICAgcmV0dXJuIGN1cnJlbnRJbnB1dC5pc1RvdWNoID8gZ2V0SXNDdXN0b21Ub3VjaEJlaGF2aW9yKCkgIT09IGV2ZW50LnR5cGUuaW5kZXhPZigndG91Y2gnKSA+PSAwIDogZmFsc2U7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVQb3BwZXJJbnN0YW5jZSgpIHtcbiAgICBkZXN0cm95UG9wcGVySW5zdGFuY2UoKTtcbiAgICB2YXIgX2luc3RhbmNlJHByb3BzMiA9IGluc3RhbmNlLnByb3BzLFxuICAgICAgICBwb3BwZXJPcHRpb25zID0gX2luc3RhbmNlJHByb3BzMi5wb3BwZXJPcHRpb25zLFxuICAgICAgICBwbGFjZW1lbnQgPSBfaW5zdGFuY2UkcHJvcHMyLnBsYWNlbWVudCxcbiAgICAgICAgb2Zmc2V0ID0gX2luc3RhbmNlJHByb3BzMi5vZmZzZXQsXG4gICAgICAgIGdldFJlZmVyZW5jZUNsaWVudFJlY3QgPSBfaW5zdGFuY2UkcHJvcHMyLmdldFJlZmVyZW5jZUNsaWVudFJlY3QsXG4gICAgICAgIG1vdmVUcmFuc2l0aW9uID0gX2luc3RhbmNlJHByb3BzMi5tb3ZlVHJhbnNpdGlvbjtcbiAgICB2YXIgYXJyb3cgPSBnZXRJc0RlZmF1bHRSZW5kZXJGbigpID8gZ2V0Q2hpbGRyZW4ocG9wcGVyKS5hcnJvdyA6IG51bGw7XG4gICAgdmFyIGNvbXB1dGVkUmVmZXJlbmNlID0gZ2V0UmVmZXJlbmNlQ2xpZW50UmVjdCA/IHtcbiAgICAgIGdldEJvdW5kaW5nQ2xpZW50UmVjdDogZ2V0UmVmZXJlbmNlQ2xpZW50UmVjdCxcbiAgICAgIGNvbnRleHRFbGVtZW50OiBnZXRSZWZlcmVuY2VDbGllbnRSZWN0LmNvbnRleHRFbGVtZW50IHx8IGdldEN1cnJlbnRUYXJnZXQoKVxuICAgIH0gOiByZWZlcmVuY2U7XG4gICAgdmFyIHRpcHB5TW9kaWZpZXIgPSB7XG4gICAgICBuYW1lOiAnJCR0aXBweScsXG4gICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgcGhhc2U6ICdiZWZvcmVXcml0ZScsXG4gICAgICByZXF1aXJlczogWydjb21wdXRlU3R5bGVzJ10sXG4gICAgICBmbjogZnVuY3Rpb24gZm4oX3JlZjIpIHtcbiAgICAgICAgdmFyIHN0YXRlID0gX3JlZjIuc3RhdGU7XG5cbiAgICAgICAgaWYgKGdldElzRGVmYXVsdFJlbmRlckZuKCkpIHtcbiAgICAgICAgICB2YXIgX2dldERlZmF1bHRUZW1wbGF0ZUNoID0gZ2V0RGVmYXVsdFRlbXBsYXRlQ2hpbGRyZW4oKSxcbiAgICAgICAgICAgICAgYm94ID0gX2dldERlZmF1bHRUZW1wbGF0ZUNoLmJveDtcblxuICAgICAgICAgIFsncGxhY2VtZW50JywgJ3JlZmVyZW5jZS1oaWRkZW4nLCAnZXNjYXBlZCddLmZvckVhY2goZnVuY3Rpb24gKGF0dHIpIHtcbiAgICAgICAgICAgIGlmIChhdHRyID09PSAncGxhY2VtZW50Jykge1xuICAgICAgICAgICAgICBib3guc2V0QXR0cmlidXRlKCdkYXRhLXBsYWNlbWVudCcsIHN0YXRlLnBsYWNlbWVudCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBpZiAoc3RhdGUuYXR0cmlidXRlcy5wb3BwZXJbXCJkYXRhLXBvcHBlci1cIiArIGF0dHJdKSB7XG4gICAgICAgICAgICAgICAgYm94LnNldEF0dHJpYnV0ZShcImRhdGEtXCIgKyBhdHRyLCAnJyk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYm94LnJlbW92ZUF0dHJpYnV0ZShcImRhdGEtXCIgKyBhdHRyKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHN0YXRlLmF0dHJpYnV0ZXMucG9wcGVyID0ge307XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICAgIHZhciBtb2RpZmllcnMgPSBbe1xuICAgICAgbmFtZTogJ29mZnNldCcsXG4gICAgICBvcHRpb25zOiB7XG4gICAgICAgIG9mZnNldDogb2Zmc2V0XG4gICAgICB9XG4gICAgfSwge1xuICAgICAgbmFtZTogJ3ByZXZlbnRPdmVyZmxvdycsXG4gICAgICBvcHRpb25zOiB7XG4gICAgICAgIHBhZGRpbmc6IHtcbiAgICAgICAgICB0b3A6IDIsXG4gICAgICAgICAgYm90dG9tOiAyLFxuICAgICAgICAgIGxlZnQ6IDUsXG4gICAgICAgICAgcmlnaHQ6IDVcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIG5hbWU6ICdmbGlwJyxcbiAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgcGFkZGluZzogNVxuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIG5hbWU6ICdjb21wdXRlU3R5bGVzJyxcbiAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgYWRhcHRpdmU6ICFtb3ZlVHJhbnNpdGlvblxuICAgICAgfVxuICAgIH0sIHRpcHB5TW9kaWZpZXJdO1xuXG4gICAgaWYgKGdldElzRGVmYXVsdFJlbmRlckZuKCkgJiYgYXJyb3cpIHtcbiAgICAgIG1vZGlmaWVycy5wdXNoKHtcbiAgICAgICAgbmFtZTogJ2Fycm93JyxcbiAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgIGVsZW1lbnQ6IGFycm93LFxuICAgICAgICAgIHBhZGRpbmc6IDNcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgbW9kaWZpZXJzLnB1c2guYXBwbHkobW9kaWZpZXJzLCAocG9wcGVyT3B0aW9ucyA9PSBudWxsID8gdm9pZCAwIDogcG9wcGVyT3B0aW9ucy5tb2RpZmllcnMpIHx8IFtdKTtcbiAgICBpbnN0YW5jZS5wb3BwZXJJbnN0YW5jZSA9IGNyZWF0ZVBvcHBlcihjb21wdXRlZFJlZmVyZW5jZSwgcG9wcGVyLCBPYmplY3QuYXNzaWduKHt9LCBwb3BwZXJPcHRpb25zLCB7XG4gICAgICBwbGFjZW1lbnQ6IHBsYWNlbWVudCxcbiAgICAgIG9uRmlyc3RVcGRhdGU6IG9uRmlyc3RVcGRhdGUsXG4gICAgICBtb2RpZmllcnM6IG1vZGlmaWVyc1xuICAgIH0pKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRlc3Ryb3lQb3BwZXJJbnN0YW5jZSgpIHtcbiAgICBpZiAoaW5zdGFuY2UucG9wcGVySW5zdGFuY2UpIHtcbiAgICAgIGluc3RhbmNlLnBvcHBlckluc3RhbmNlLmRlc3Ryb3koKTtcbiAgICAgIGluc3RhbmNlLnBvcHBlckluc3RhbmNlID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBtb3VudCgpIHtcbiAgICB2YXIgYXBwZW5kVG8gPSBpbnN0YW5jZS5wcm9wcy5hcHBlbmRUbztcbiAgICB2YXIgcGFyZW50Tm9kZTsgLy8gQnkgZGVmYXVsdCwgd2UnbGwgYXBwZW5kIHRoZSBwb3BwZXIgdG8gdGhlIHRyaWdnZXJUYXJnZXRzJ3MgcGFyZW50Tm9kZSBzb1xuICAgIC8vIGl0J3MgZGlyZWN0bHkgYWZ0ZXIgdGhlIHJlZmVyZW5jZSBlbGVtZW50IHNvIHRoZSBlbGVtZW50cyBpbnNpZGUgdGhlXG4gICAgLy8gdGlwcHkgY2FuIGJlIHRhYmJlZCB0b1xuICAgIC8vIElmIHRoZXJlIGFyZSBjbGlwcGluZyBpc3N1ZXMsIHRoZSB1c2VyIGNhbiBzcGVjaWZ5IGEgZGlmZmVyZW50IGFwcGVuZFRvXG4gICAgLy8gYW5kIGVuc3VyZSBmb2N1cyBtYW5hZ2VtZW50IGlzIGhhbmRsZWQgY29ycmVjdGx5IG1hbnVhbGx5XG5cbiAgICB2YXIgbm9kZSA9IGdldEN1cnJlbnRUYXJnZXQoKTtcblxuICAgIGlmIChpbnN0YW5jZS5wcm9wcy5pbnRlcmFjdGl2ZSAmJiBhcHBlbmRUbyA9PT0gVElQUFlfREVGQVVMVF9BUFBFTkRfVE8gfHwgYXBwZW5kVG8gPT09ICdwYXJlbnQnKSB7XG4gICAgICBwYXJlbnROb2RlID0gbm9kZS5wYXJlbnROb2RlO1xuICAgIH0gZWxzZSB7XG4gICAgICBwYXJlbnROb2RlID0gaW52b2tlV2l0aEFyZ3NPclJldHVybihhcHBlbmRUbywgW25vZGVdKTtcbiAgICB9IC8vIFRoZSBwb3BwZXIgZWxlbWVudCBuZWVkcyB0byBleGlzdCBvbiB0aGUgRE9NIGJlZm9yZSBpdHMgcG9zaXRpb24gY2FuIGJlXG4gICAgLy8gdXBkYXRlZCBhcyBQb3BwZXIgbmVlZHMgdG8gcmVhZCBpdHMgZGltZW5zaW9uc1xuXG5cbiAgICBpZiAoIXBhcmVudE5vZGUuY29udGFpbnMocG9wcGVyKSkge1xuICAgICAgcGFyZW50Tm9kZS5hcHBlbmRDaGlsZChwb3BwZXIpO1xuICAgIH1cblxuICAgIGluc3RhbmNlLnN0YXRlLmlzTW91bnRlZCA9IHRydWU7XG4gICAgY3JlYXRlUG9wcGVySW5zdGFuY2UoKTtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgICAgLy8gQWNjZXNzaWJpbGl0eSBjaGVja1xuICAgICAgd2FybldoZW4oaW5zdGFuY2UucHJvcHMuaW50ZXJhY3RpdmUgJiYgYXBwZW5kVG8gPT09IGRlZmF1bHRQcm9wcy5hcHBlbmRUbyAmJiBub2RlLm5leHRFbGVtZW50U2libGluZyAhPT0gcG9wcGVyLCBbJ0ludGVyYWN0aXZlIHRpcHB5IGVsZW1lbnQgbWF5IG5vdCBiZSBhY2Nlc3NpYmxlIHZpYSBrZXlib2FyZCcsICduYXZpZ2F0aW9uIGJlY2F1c2UgaXQgaXMgbm90IGRpcmVjdGx5IGFmdGVyIHRoZSByZWZlcmVuY2UgZWxlbWVudCcsICdpbiB0aGUgRE9NIHNvdXJjZSBvcmRlci4nLCAnXFxuXFxuJywgJ1VzaW5nIGEgd3JhcHBlciA8ZGl2PiBvciA8c3Bhbj4gdGFnIGFyb3VuZCB0aGUgcmVmZXJlbmNlIGVsZW1lbnQnLCAnc29sdmVzIHRoaXMgYnkgY3JlYXRpbmcgYSBuZXcgcGFyZW50Tm9kZSBjb250ZXh0LicsICdcXG5cXG4nLCAnU3BlY2lmeWluZyBgYXBwZW5kVG86IGRvY3VtZW50LmJvZHlgIHNpbGVuY2VzIHRoaXMgd2FybmluZywgYnV0IGl0JywgJ2Fzc3VtZXMgeW91IGFyZSB1c2luZyBhIGZvY3VzIG1hbmFnZW1lbnQgc29sdXRpb24gdG8gaGFuZGxlJywgJ2tleWJvYXJkIG5hdmlnYXRpb24uJywgJ1xcblxcbicsICdTZWU6IGh0dHBzOi8vYXRvbWlrcy5naXRodWIuaW8vdGlwcHlqcy92Ni9hY2Nlc3NpYmlsaXR5LyNpbnRlcmFjdGl2aXR5J10uam9pbignICcpKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBnZXROZXN0ZWRQb3BwZXJUcmVlKCkge1xuICAgIHJldHVybiBhcnJheUZyb20ocG9wcGVyLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXRpcHB5LXJvb3RdJykpO1xuICB9XG5cbiAgZnVuY3Rpb24gc2NoZWR1bGVTaG93KGV2ZW50KSB7XG4gICAgaW5zdGFuY2UuY2xlYXJEZWxheVRpbWVvdXRzKCk7XG5cbiAgICBpZiAoZXZlbnQpIHtcbiAgICAgIGludm9rZUhvb2soJ29uVHJpZ2dlcicsIFtpbnN0YW5jZSwgZXZlbnRdKTtcbiAgICB9XG5cbiAgICBhZGREb2N1bWVudFByZXNzKCk7XG4gICAgdmFyIGRlbGF5ID0gZ2V0RGVsYXkodHJ1ZSk7XG5cbiAgICB2YXIgX2dldE5vcm1hbGl6ZWRUb3VjaFNlID0gZ2V0Tm9ybWFsaXplZFRvdWNoU2V0dGluZ3MoKSxcbiAgICAgICAgdG91Y2hWYWx1ZSA9IF9nZXROb3JtYWxpemVkVG91Y2hTZVswXSxcbiAgICAgICAgdG91Y2hEZWxheSA9IF9nZXROb3JtYWxpemVkVG91Y2hTZVsxXTtcblxuICAgIGlmIChjdXJyZW50SW5wdXQuaXNUb3VjaCAmJiB0b3VjaFZhbHVlID09PSAnaG9sZCcgJiYgdG91Y2hEZWxheSkge1xuICAgICAgZGVsYXkgPSB0b3VjaERlbGF5O1xuICAgIH1cblxuICAgIGlmIChkZWxheSkge1xuICAgICAgc2hvd1RpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaW5zdGFuY2Uuc2hvdygpO1xuICAgICAgfSwgZGVsYXkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpbnN0YW5jZS5zaG93KCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gc2NoZWR1bGVIaWRlKGV2ZW50KSB7XG4gICAgaW5zdGFuY2UuY2xlYXJEZWxheVRpbWVvdXRzKCk7XG4gICAgaW52b2tlSG9vaygnb25VbnRyaWdnZXInLCBbaW5zdGFuY2UsIGV2ZW50XSk7XG5cbiAgICBpZiAoIWluc3RhbmNlLnN0YXRlLmlzVmlzaWJsZSkge1xuICAgICAgcmVtb3ZlRG9jdW1lbnRQcmVzcygpO1xuICAgICAgcmV0dXJuO1xuICAgIH0gLy8gRm9yIGludGVyYWN0aXZlIHRpcHBpZXMsIHNjaGVkdWxlSGlkZSBpcyBhZGRlZCB0byBhIGRvY3VtZW50LmJvZHkgaGFuZGxlclxuICAgIC8vIGZyb20gb25Nb3VzZUxlYXZlIHNvIG11c3QgaW50ZXJjZXB0IHNjaGVkdWxlZCBoaWRlcyBmcm9tIG1vdXNlbW92ZS9sZWF2ZVxuICAgIC8vIGV2ZW50cyB3aGVuIHRyaWdnZXIgY29udGFpbnMgbW91c2VlbnRlciBhbmQgY2xpY2ssIGFuZCB0aGUgdGlwIGlzXG4gICAgLy8gY3VycmVudGx5IHNob3duIGFzIGEgcmVzdWx0IG9mIGEgY2xpY2suXG5cblxuICAgIGlmIChpbnN0YW5jZS5wcm9wcy50cmlnZ2VyLmluZGV4T2YoJ21vdXNlZW50ZXInKSA+PSAwICYmIGluc3RhbmNlLnByb3BzLnRyaWdnZXIuaW5kZXhPZignY2xpY2snKSA+PSAwICYmIFsnbW91c2VsZWF2ZScsICdtb3VzZW1vdmUnXS5pbmRleE9mKGV2ZW50LnR5cGUpID49IDAgJiYgaXNWaXNpYmxlRnJvbUNsaWNrKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIGRlbGF5ID0gZ2V0RGVsYXkoZmFsc2UpO1xuXG4gICAgaWYgKGRlbGF5KSB7XG4gICAgICBoaWRlVGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoaW5zdGFuY2Uuc3RhdGUuaXNWaXNpYmxlKSB7XG4gICAgICAgICAgaW5zdGFuY2UuaGlkZSgpO1xuICAgICAgICB9XG4gICAgICB9LCBkZWxheSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIEZpeGVzIGEgYHRyYW5zaXRpb25lbmRgIHByb2JsZW0gd2hlbiBpdCBmaXJlcyAxIGZyYW1lIHRvb1xuICAgICAgLy8gbGF0ZSBzb21ldGltZXMsIHdlIGRvbid0IHdhbnQgaGlkZSgpIHRvIGJlIGNhbGxlZC5cbiAgICAgIHNjaGVkdWxlSGlkZUFuaW1hdGlvbkZyYW1lID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaW5zdGFuY2UuaGlkZSgpO1xuICAgICAgfSk7XG4gICAgfVxuICB9IC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAvLyDwn5SRIFB1YmxpYyBtZXRob2RzXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5cbiAgZnVuY3Rpb24gZW5hYmxlKCkge1xuICAgIGluc3RhbmNlLnN0YXRlLmlzRW5hYmxlZCA9IHRydWU7XG4gIH1cblxuICBmdW5jdGlvbiBkaXNhYmxlKCkge1xuICAgIC8vIERpc2FibGluZyB0aGUgaW5zdGFuY2Ugc2hvdWxkIGFsc28gaGlkZSBpdFxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hdG9taWtzL3RpcHB5LmpzLXJlYWN0L2lzc3Vlcy8xMDZcbiAgICBpbnN0YW5jZS5oaWRlKCk7XG4gICAgaW5zdGFuY2Uuc3RhdGUuaXNFbmFibGVkID0gZmFsc2U7XG4gIH1cblxuICBmdW5jdGlvbiBjbGVhckRlbGF5VGltZW91dHMoKSB7XG4gICAgY2xlYXJUaW1lb3V0KHNob3dUaW1lb3V0KTtcbiAgICBjbGVhclRpbWVvdXQoaGlkZVRpbWVvdXQpO1xuICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHNjaGVkdWxlSGlkZUFuaW1hdGlvbkZyYW1lKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNldFByb3BzKHBhcnRpYWxQcm9wcykge1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgICAgd2FybldoZW4oaW5zdGFuY2Uuc3RhdGUuaXNEZXN0cm95ZWQsIGNyZWF0ZU1lbW9yeUxlYWtXYXJuaW5nKCdzZXRQcm9wcycpKTtcbiAgICB9XG5cbiAgICBpZiAoaW5zdGFuY2Uuc3RhdGUuaXNEZXN0cm95ZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpbnZva2VIb29rKCdvbkJlZm9yZVVwZGF0ZScsIFtpbnN0YW5jZSwgcGFydGlhbFByb3BzXSk7XG4gICAgcmVtb3ZlTGlzdGVuZXJzKCk7XG4gICAgdmFyIHByZXZQcm9wcyA9IGluc3RhbmNlLnByb3BzO1xuICAgIHZhciBuZXh0UHJvcHMgPSBldmFsdWF0ZVByb3BzKHJlZmVyZW5jZSwgT2JqZWN0LmFzc2lnbih7fSwgcHJldlByb3BzLCByZW1vdmVVbmRlZmluZWRQcm9wcyhwYXJ0aWFsUHJvcHMpLCB7XG4gICAgICBpZ25vcmVBdHRyaWJ1dGVzOiB0cnVlXG4gICAgfSkpO1xuICAgIGluc3RhbmNlLnByb3BzID0gbmV4dFByb3BzO1xuICAgIGFkZExpc3RlbmVycygpO1xuXG4gICAgaWYgKHByZXZQcm9wcy5pbnRlcmFjdGl2ZURlYm91bmNlICE9PSBuZXh0UHJvcHMuaW50ZXJhY3RpdmVEZWJvdW5jZSkge1xuICAgICAgY2xlYW51cEludGVyYWN0aXZlTW91c2VMaXN0ZW5lcnMoKTtcbiAgICAgIGRlYm91bmNlZE9uTW91c2VNb3ZlID0gZGVib3VuY2Uob25Nb3VzZU1vdmUsIG5leHRQcm9wcy5pbnRlcmFjdGl2ZURlYm91bmNlKTtcbiAgICB9IC8vIEVuc3VyZSBzdGFsZSBhcmlhLWV4cGFuZGVkIGF0dHJpYnV0ZXMgYXJlIHJlbW92ZWRcblxuXG4gICAgaWYgKHByZXZQcm9wcy50cmlnZ2VyVGFyZ2V0ICYmICFuZXh0UHJvcHMudHJpZ2dlclRhcmdldCkge1xuICAgICAgbm9ybWFsaXplVG9BcnJheShwcmV2UHJvcHMudHJpZ2dlclRhcmdldCkuZm9yRWFjaChmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICBub2RlLnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChuZXh0UHJvcHMudHJpZ2dlclRhcmdldCkge1xuICAgICAgcmVmZXJlbmNlLnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcpO1xuICAgIH1cblxuICAgIGhhbmRsZUFyaWFFeHBhbmRlZEF0dHJpYnV0ZSgpO1xuICAgIGhhbmRsZVN0eWxlcygpO1xuXG4gICAgaWYgKG9uVXBkYXRlKSB7XG4gICAgICBvblVwZGF0ZShwcmV2UHJvcHMsIG5leHRQcm9wcyk7XG4gICAgfVxuXG4gICAgaWYgKGluc3RhbmNlLnBvcHBlckluc3RhbmNlKSB7XG4gICAgICBjcmVhdGVQb3BwZXJJbnN0YW5jZSgpOyAvLyBGaXhlcyBhbiBpc3N1ZSB3aXRoIG5lc3RlZCB0aXBwaWVzIGlmIHRoZXkgYXJlIGFsbCBnZXR0aW5nIHJlLXJlbmRlcmVkLFxuICAgICAgLy8gYW5kIHRoZSBuZXN0ZWQgb25lcyBnZXQgcmUtcmVuZGVyZWQgZmlyc3QuXG4gICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vYXRvbWlrcy90aXBweWpzLXJlYWN0L2lzc3Vlcy8xNzdcbiAgICAgIC8vIFRPRE86IGZpbmQgYSBjbGVhbmVyIC8gbW9yZSBlZmZpY2llbnQgc29sdXRpb24oISlcblxuICAgICAgZ2V0TmVzdGVkUG9wcGVyVHJlZSgpLmZvckVhY2goZnVuY3Rpb24gKG5lc3RlZFBvcHBlcikge1xuICAgICAgICAvLyBSZWFjdCAoYW5kIG90aGVyIFVJIGxpYnMgbGlrZWx5KSByZXF1aXJlcyBhIHJBRiB3cmFwcGVyIGFzIGl0IGZsdXNoZXNcbiAgICAgICAgLy8gaXRzIHdvcmsgaW4gb25lXG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShuZXN0ZWRQb3BwZXIuX3RpcHB5LnBvcHBlckluc3RhbmNlLmZvcmNlVXBkYXRlKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGludm9rZUhvb2soJ29uQWZ0ZXJVcGRhdGUnLCBbaW5zdGFuY2UsIHBhcnRpYWxQcm9wc10pO1xuICB9XG5cbiAgZnVuY3Rpb24gc2V0Q29udGVudChjb250ZW50KSB7XG4gICAgaW5zdGFuY2Uuc2V0UHJvcHMoe1xuICAgICAgY29udGVudDogY29udGVudFxuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gc2hvdygpIHtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICAgIHdhcm5XaGVuKGluc3RhbmNlLnN0YXRlLmlzRGVzdHJveWVkLCBjcmVhdGVNZW1vcnlMZWFrV2FybmluZygnc2hvdycpKTtcbiAgICB9IC8vIEVhcmx5IGJhaWwtb3V0XG5cblxuICAgIHZhciBpc0FscmVhZHlWaXNpYmxlID0gaW5zdGFuY2Uuc3RhdGUuaXNWaXNpYmxlO1xuICAgIHZhciBpc0Rlc3Ryb3llZCA9IGluc3RhbmNlLnN0YXRlLmlzRGVzdHJveWVkO1xuICAgIHZhciBpc0Rpc2FibGVkID0gIWluc3RhbmNlLnN0YXRlLmlzRW5hYmxlZDtcbiAgICB2YXIgaXNUb3VjaEFuZFRvdWNoRGlzYWJsZWQgPSBjdXJyZW50SW5wdXQuaXNUb3VjaCAmJiAhaW5zdGFuY2UucHJvcHMudG91Y2g7XG4gICAgdmFyIGR1cmF0aW9uID0gZ2V0VmFsdWVBdEluZGV4T3JSZXR1cm4oaW5zdGFuY2UucHJvcHMuZHVyYXRpb24sIDAsIGRlZmF1bHRQcm9wcy5kdXJhdGlvbik7XG5cbiAgICBpZiAoaXNBbHJlYWR5VmlzaWJsZSB8fCBpc0Rlc3Ryb3llZCB8fCBpc0Rpc2FibGVkIHx8IGlzVG91Y2hBbmRUb3VjaERpc2FibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfSAvLyBOb3JtYWxpemUgYGRpc2FibGVkYCBiZWhhdmlvciBhY3Jvc3MgYnJvd3NlcnMuXG4gICAgLy8gRmlyZWZveCBhbGxvd3MgZXZlbnRzIG9uIGRpc2FibGVkIGVsZW1lbnRzLCBidXQgQ2hyb21lIGRvZXNuJ3QuXG4gICAgLy8gVXNpbmcgYSB3cmFwcGVyIGVsZW1lbnQgKGkuZS4gPHNwYW4+KSBpcyByZWNvbW1lbmRlZC5cblxuXG4gICAgaWYgKGdldEN1cnJlbnRUYXJnZXQoKS5oYXNBdHRyaWJ1dGUoJ2Rpc2FibGVkJykpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpbnZva2VIb29rKCdvblNob3cnLCBbaW5zdGFuY2VdLCBmYWxzZSk7XG5cbiAgICBpZiAoaW5zdGFuY2UucHJvcHMub25TaG93KGluc3RhbmNlKSA9PT0gZmFsc2UpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpbnN0YW5jZS5zdGF0ZS5pc1Zpc2libGUgPSB0cnVlO1xuXG4gICAgaWYgKGdldElzRGVmYXVsdFJlbmRlckZuKCkpIHtcbiAgICAgIHBvcHBlci5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xuICAgIH1cblxuICAgIGhhbmRsZVN0eWxlcygpO1xuICAgIGFkZERvY3VtZW50UHJlc3MoKTtcblxuICAgIGlmICghaW5zdGFuY2Uuc3RhdGUuaXNNb3VudGVkKSB7XG4gICAgICBwb3BwZXIuc3R5bGUudHJhbnNpdGlvbiA9ICdub25lJztcbiAgICB9IC8vIElmIGZsaXBwaW5nIHRvIHRoZSBvcHBvc2l0ZSBzaWRlIGFmdGVyIGhpZGluZyBhdCBsZWFzdCBvbmNlLCB0aGVcbiAgICAvLyBhbmltYXRpb24gd2lsbCB1c2UgdGhlIHdyb25nIHBsYWNlbWVudCB3aXRob3V0IHJlc2V0dGluZyB0aGUgZHVyYXRpb25cblxuXG4gICAgaWYgKGdldElzRGVmYXVsdFJlbmRlckZuKCkpIHtcbiAgICAgIHZhciBfZ2V0RGVmYXVsdFRlbXBsYXRlQ2gyID0gZ2V0RGVmYXVsdFRlbXBsYXRlQ2hpbGRyZW4oKSxcbiAgICAgICAgICBib3ggPSBfZ2V0RGVmYXVsdFRlbXBsYXRlQ2gyLmJveCxcbiAgICAgICAgICBjb250ZW50ID0gX2dldERlZmF1bHRUZW1wbGF0ZUNoMi5jb250ZW50O1xuXG4gICAgICBzZXRUcmFuc2l0aW9uRHVyYXRpb24oW2JveCwgY29udGVudF0sIDApO1xuICAgIH1cblxuICAgIG9uRmlyc3RVcGRhdGUgPSBmdW5jdGlvbiBvbkZpcnN0VXBkYXRlKCkge1xuICAgICAgdmFyIF9pbnN0YW5jZSRwb3BwZXJJbnN0YTI7XG5cbiAgICAgIGlmICghaW5zdGFuY2Uuc3RhdGUuaXNWaXNpYmxlIHx8IGlnbm9yZU9uRmlyc3RVcGRhdGUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZ25vcmVPbkZpcnN0VXBkYXRlID0gdHJ1ZTsgLy8gcmVmbG93XG5cbiAgICAgIHZvaWQgcG9wcGVyLm9mZnNldEhlaWdodDtcbiAgICAgIHBvcHBlci5zdHlsZS50cmFuc2l0aW9uID0gaW5zdGFuY2UucHJvcHMubW92ZVRyYW5zaXRpb247XG5cbiAgICAgIGlmIChnZXRJc0RlZmF1bHRSZW5kZXJGbigpICYmIGluc3RhbmNlLnByb3BzLmFuaW1hdGlvbikge1xuICAgICAgICB2YXIgX2dldERlZmF1bHRUZW1wbGF0ZUNoMyA9IGdldERlZmF1bHRUZW1wbGF0ZUNoaWxkcmVuKCksXG4gICAgICAgICAgICBfYm94ID0gX2dldERlZmF1bHRUZW1wbGF0ZUNoMy5ib3gsXG4gICAgICAgICAgICBfY29udGVudCA9IF9nZXREZWZhdWx0VGVtcGxhdGVDaDMuY29udGVudDtcblxuICAgICAgICBzZXRUcmFuc2l0aW9uRHVyYXRpb24oW19ib3gsIF9jb250ZW50XSwgZHVyYXRpb24pO1xuICAgICAgICBzZXRWaXNpYmlsaXR5U3RhdGUoW19ib3gsIF9jb250ZW50XSwgJ3Zpc2libGUnKTtcbiAgICAgIH1cblxuICAgICAgaGFuZGxlQXJpYUNvbnRlbnRBdHRyaWJ1dGUoKTtcbiAgICAgIGhhbmRsZUFyaWFFeHBhbmRlZEF0dHJpYnV0ZSgpO1xuICAgICAgcHVzaElmVW5pcXVlKG1vdW50ZWRJbnN0YW5jZXMsIGluc3RhbmNlKTsgLy8gY2VydGFpbiBtb2RpZmllcnMgKGUuZy4gYG1heFNpemVgKSByZXF1aXJlIGEgc2Vjb25kIHVwZGF0ZSBhZnRlciB0aGVcbiAgICAgIC8vIHBvcHBlciBoYXMgYmVlbiBwb3NpdGlvbmVkIGZvciB0aGUgZmlyc3QgdGltZVxuXG4gICAgICAoX2luc3RhbmNlJHBvcHBlckluc3RhMiA9IGluc3RhbmNlLnBvcHBlckluc3RhbmNlKSA9PSBudWxsID8gdm9pZCAwIDogX2luc3RhbmNlJHBvcHBlckluc3RhMi5mb3JjZVVwZGF0ZSgpO1xuICAgICAgaW52b2tlSG9vaygnb25Nb3VudCcsIFtpbnN0YW5jZV0pO1xuXG4gICAgICBpZiAoaW5zdGFuY2UucHJvcHMuYW5pbWF0aW9uICYmIGdldElzRGVmYXVsdFJlbmRlckZuKCkpIHtcbiAgICAgICAgb25UcmFuc2l0aW9uZWRJbihkdXJhdGlvbiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGluc3RhbmNlLnN0YXRlLmlzU2hvd24gPSB0cnVlO1xuICAgICAgICAgIGludm9rZUhvb2soJ29uU2hvd24nLCBbaW5zdGFuY2VdKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIG1vdW50KCk7XG4gIH1cblxuICBmdW5jdGlvbiBoaWRlKCkge1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgICAgd2FybldoZW4oaW5zdGFuY2Uuc3RhdGUuaXNEZXN0cm95ZWQsIGNyZWF0ZU1lbW9yeUxlYWtXYXJuaW5nKCdoaWRlJykpO1xuICAgIH0gLy8gRWFybHkgYmFpbC1vdXRcblxuXG4gICAgdmFyIGlzQWxyZWFkeUhpZGRlbiA9ICFpbnN0YW5jZS5zdGF0ZS5pc1Zpc2libGU7XG4gICAgdmFyIGlzRGVzdHJveWVkID0gaW5zdGFuY2Uuc3RhdGUuaXNEZXN0cm95ZWQ7XG4gICAgdmFyIGlzRGlzYWJsZWQgPSAhaW5zdGFuY2Uuc3RhdGUuaXNFbmFibGVkO1xuICAgIHZhciBkdXJhdGlvbiA9IGdldFZhbHVlQXRJbmRleE9yUmV0dXJuKGluc3RhbmNlLnByb3BzLmR1cmF0aW9uLCAxLCBkZWZhdWx0UHJvcHMuZHVyYXRpb24pO1xuXG4gICAgaWYgKGlzQWxyZWFkeUhpZGRlbiB8fCBpc0Rlc3Ryb3llZCB8fCBpc0Rpc2FibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaW52b2tlSG9vaygnb25IaWRlJywgW2luc3RhbmNlXSwgZmFsc2UpO1xuXG4gICAgaWYgKGluc3RhbmNlLnByb3BzLm9uSGlkZShpbnN0YW5jZSkgPT09IGZhbHNlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaW5zdGFuY2Uuc3RhdGUuaXNWaXNpYmxlID0gZmFsc2U7XG4gICAgaW5zdGFuY2Uuc3RhdGUuaXNTaG93biA9IGZhbHNlO1xuICAgIGlnbm9yZU9uRmlyc3RVcGRhdGUgPSBmYWxzZTtcbiAgICBpc1Zpc2libGVGcm9tQ2xpY2sgPSBmYWxzZTtcblxuICAgIGlmIChnZXRJc0RlZmF1bHRSZW5kZXJGbigpKSB7XG4gICAgICBwb3BwZXIuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICAgIH1cblxuICAgIGNsZWFudXBJbnRlcmFjdGl2ZU1vdXNlTGlzdGVuZXJzKCk7XG4gICAgcmVtb3ZlRG9jdW1lbnRQcmVzcygpO1xuICAgIGhhbmRsZVN0eWxlcyh0cnVlKTtcblxuICAgIGlmIChnZXRJc0RlZmF1bHRSZW5kZXJGbigpKSB7XG4gICAgICB2YXIgX2dldERlZmF1bHRUZW1wbGF0ZUNoNCA9IGdldERlZmF1bHRUZW1wbGF0ZUNoaWxkcmVuKCksXG4gICAgICAgICAgYm94ID0gX2dldERlZmF1bHRUZW1wbGF0ZUNoNC5ib3gsXG4gICAgICAgICAgY29udGVudCA9IF9nZXREZWZhdWx0VGVtcGxhdGVDaDQuY29udGVudDtcblxuICAgICAgaWYgKGluc3RhbmNlLnByb3BzLmFuaW1hdGlvbikge1xuICAgICAgICBzZXRUcmFuc2l0aW9uRHVyYXRpb24oW2JveCwgY29udGVudF0sIGR1cmF0aW9uKTtcbiAgICAgICAgc2V0VmlzaWJpbGl0eVN0YXRlKFtib3gsIGNvbnRlbnRdLCAnaGlkZGVuJyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaGFuZGxlQXJpYUNvbnRlbnRBdHRyaWJ1dGUoKTtcbiAgICBoYW5kbGVBcmlhRXhwYW5kZWRBdHRyaWJ1dGUoKTtcblxuICAgIGlmIChpbnN0YW5jZS5wcm9wcy5hbmltYXRpb24pIHtcbiAgICAgIGlmIChnZXRJc0RlZmF1bHRSZW5kZXJGbigpKSB7XG4gICAgICAgIG9uVHJhbnNpdGlvbmVkT3V0KGR1cmF0aW9uLCBpbnN0YW5jZS51bm1vdW50KTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaW5zdGFuY2UudW5tb3VudCgpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGhpZGVXaXRoSW50ZXJhY3Rpdml0eShldmVudCkge1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgICAgd2FybldoZW4oaW5zdGFuY2Uuc3RhdGUuaXNEZXN0cm95ZWQsIGNyZWF0ZU1lbW9yeUxlYWtXYXJuaW5nKCdoaWRlV2l0aEludGVyYWN0aXZpdHknKSk7XG4gICAgfVxuXG4gICAgZ2V0RG9jdW1lbnQoKS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBkZWJvdW5jZWRPbk1vdXNlTW92ZSk7XG4gICAgcHVzaElmVW5pcXVlKG1vdXNlTW92ZUxpc3RlbmVycywgZGVib3VuY2VkT25Nb3VzZU1vdmUpO1xuICAgIGRlYm91bmNlZE9uTW91c2VNb3ZlKGV2ZW50KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHVubW91bnQoKSB7XG4gICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgICB3YXJuV2hlbihpbnN0YW5jZS5zdGF0ZS5pc0Rlc3Ryb3llZCwgY3JlYXRlTWVtb3J5TGVha1dhcm5pbmcoJ3VubW91bnQnKSk7XG4gICAgfVxuXG4gICAgaWYgKGluc3RhbmNlLnN0YXRlLmlzVmlzaWJsZSkge1xuICAgICAgaW5zdGFuY2UuaGlkZSgpO1xuICAgIH1cblxuICAgIGlmICghaW5zdGFuY2Uuc3RhdGUuaXNNb3VudGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZGVzdHJveVBvcHBlckluc3RhbmNlKCk7IC8vIElmIGEgcG9wcGVyIGlzIG5vdCBpbnRlcmFjdGl2ZSwgaXQgd2lsbCBiZSBhcHBlbmRlZCBvdXRzaWRlIHRoZSBwb3BwZXJcbiAgICAvLyB0cmVlIGJ5IGRlZmF1bHQuIFRoaXMgc2VlbXMgbWFpbmx5IGZvciBpbnRlcmFjdGl2ZSB0aXBwaWVzLCBidXQgd2Ugc2hvdWxkXG4gICAgLy8gZmluZCBhIHdvcmthcm91bmQgaWYgcG9zc2libGVcblxuICAgIGdldE5lc3RlZFBvcHBlclRyZWUoKS5mb3JFYWNoKGZ1bmN0aW9uIChuZXN0ZWRQb3BwZXIpIHtcbiAgICAgIG5lc3RlZFBvcHBlci5fdGlwcHkudW5tb3VudCgpO1xuICAgIH0pO1xuXG4gICAgaWYgKHBvcHBlci5wYXJlbnROb2RlKSB7XG4gICAgICBwb3BwZXIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChwb3BwZXIpO1xuICAgIH1cblxuICAgIG1vdW50ZWRJbnN0YW5jZXMgPSBtb3VudGVkSW5zdGFuY2VzLmZpbHRlcihmdW5jdGlvbiAoaSkge1xuICAgICAgcmV0dXJuIGkgIT09IGluc3RhbmNlO1xuICAgIH0pO1xuICAgIGluc3RhbmNlLnN0YXRlLmlzTW91bnRlZCA9IGZhbHNlO1xuICAgIGludm9rZUhvb2soJ29uSGlkZGVuJywgW2luc3RhbmNlXSk7XG4gIH1cblxuICBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgICAgd2FybldoZW4oaW5zdGFuY2Uuc3RhdGUuaXNEZXN0cm95ZWQsIGNyZWF0ZU1lbW9yeUxlYWtXYXJuaW5nKCdkZXN0cm95JykpO1xuICAgIH1cblxuICAgIGlmIChpbnN0YW5jZS5zdGF0ZS5pc0Rlc3Ryb3llZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGluc3RhbmNlLmNsZWFyRGVsYXlUaW1lb3V0cygpO1xuICAgIGluc3RhbmNlLnVubW91bnQoKTtcbiAgICByZW1vdmVMaXN0ZW5lcnMoKTtcbiAgICBkZWxldGUgcmVmZXJlbmNlLl90aXBweTtcbiAgICBpbnN0YW5jZS5zdGF0ZS5pc0Rlc3Ryb3llZCA9IHRydWU7XG4gICAgaW52b2tlSG9vaygnb25EZXN0cm95JywgW2luc3RhbmNlXSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gdGlwcHkodGFyZ2V0cywgb3B0aW9uYWxQcm9wcykge1xuICBpZiAob3B0aW9uYWxQcm9wcyA9PT0gdm9pZCAwKSB7XG4gICAgb3B0aW9uYWxQcm9wcyA9IHt9O1xuICB9XG5cbiAgdmFyIHBsdWdpbnMgPSBkZWZhdWx0UHJvcHMucGx1Z2lucy5jb25jYXQob3B0aW9uYWxQcm9wcy5wbHVnaW5zIHx8IFtdKTtcbiAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgdmFsaWRhdGVUYXJnZXRzKHRhcmdldHMpO1xuICAgIHZhbGlkYXRlUHJvcHMob3B0aW9uYWxQcm9wcywgcGx1Z2lucyk7XG4gIH1cblxuICBiaW5kR2xvYmFsRXZlbnRMaXN0ZW5lcnMoKTtcbiAgdmFyIHBhc3NlZFByb3BzID0gT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9uYWxQcm9wcywge1xuICAgIHBsdWdpbnM6IHBsdWdpbnNcbiAgfSk7XG4gIHZhciBlbGVtZW50cyA9IGdldEFycmF5T2ZFbGVtZW50cyh0YXJnZXRzKTtcbiAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgdmFyIGlzU2luZ2xlQ29udGVudEVsZW1lbnQgPSBpc0VsZW1lbnQocGFzc2VkUHJvcHMuY29udGVudCk7XG4gICAgdmFyIGlzTW9yZVRoYW5PbmVSZWZlcmVuY2VFbGVtZW50ID0gZWxlbWVudHMubGVuZ3RoID4gMTtcbiAgICB3YXJuV2hlbihpc1NpbmdsZUNvbnRlbnRFbGVtZW50ICYmIGlzTW9yZVRoYW5PbmVSZWZlcmVuY2VFbGVtZW50LCBbJ3RpcHB5KCkgd2FzIHBhc3NlZCBhbiBFbGVtZW50IGFzIHRoZSBgY29udGVudGAgcHJvcCwgYnV0IG1vcmUgdGhhbicsICdvbmUgdGlwcHkgaW5zdGFuY2Ugd2FzIGNyZWF0ZWQgYnkgdGhpcyBpbnZvY2F0aW9uLiBUaGlzIG1lYW5zIHRoZScsICdjb250ZW50IGVsZW1lbnQgd2lsbCBvbmx5IGJlIGFwcGVuZGVkIHRvIHRoZSBsYXN0IHRpcHB5IGluc3RhbmNlLicsICdcXG5cXG4nLCAnSW5zdGVhZCwgcGFzcyB0aGUgLmlubmVySFRNTCBvZiB0aGUgZWxlbWVudCwgb3IgdXNlIGEgZnVuY3Rpb24gdGhhdCcsICdyZXR1cm5zIGEgY2xvbmVkIHZlcnNpb24gb2YgdGhlIGVsZW1lbnQgaW5zdGVhZC4nLCAnXFxuXFxuJywgJzEpIGNvbnRlbnQ6IGVsZW1lbnQuaW5uZXJIVE1MXFxuJywgJzIpIGNvbnRlbnQ6ICgpID0+IGVsZW1lbnQuY2xvbmVOb2RlKHRydWUpJ10uam9pbignICcpKTtcbiAgfVxuXG4gIHZhciBpbnN0YW5jZXMgPSBlbGVtZW50cy5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgcmVmZXJlbmNlKSB7XG4gICAgdmFyIGluc3RhbmNlID0gcmVmZXJlbmNlICYmIGNyZWF0ZVRpcHB5KHJlZmVyZW5jZSwgcGFzc2VkUHJvcHMpO1xuXG4gICAgaWYgKGluc3RhbmNlKSB7XG4gICAgICBhY2MucHVzaChpbnN0YW5jZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFjYztcbiAgfSwgW10pO1xuICByZXR1cm4gaXNFbGVtZW50KHRhcmdldHMpID8gaW5zdGFuY2VzWzBdIDogaW5zdGFuY2VzO1xufVxuXG50aXBweS5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHM7XG50aXBweS5zZXREZWZhdWx0UHJvcHMgPSBzZXREZWZhdWx0UHJvcHM7XG50aXBweS5jdXJyZW50SW5wdXQgPSBjdXJyZW50SW5wdXQ7XG52YXIgaGlkZUFsbCA9IGZ1bmN0aW9uIGhpZGVBbGwoX3RlbXApIHtcbiAgdmFyIF9yZWYgPSBfdGVtcCA9PT0gdm9pZCAwID8ge30gOiBfdGVtcCxcbiAgICAgIGV4Y2x1ZGVkUmVmZXJlbmNlT3JJbnN0YW5jZSA9IF9yZWYuZXhjbHVkZSxcbiAgICAgIGR1cmF0aW9uID0gX3JlZi5kdXJhdGlvbjtcblxuICBtb3VudGVkSW5zdGFuY2VzLmZvckVhY2goZnVuY3Rpb24gKGluc3RhbmNlKSB7XG4gICAgdmFyIGlzRXhjbHVkZWQgPSBmYWxzZTtcblxuICAgIGlmIChleGNsdWRlZFJlZmVyZW5jZU9ySW5zdGFuY2UpIHtcbiAgICAgIGlzRXhjbHVkZWQgPSBpc1JlZmVyZW5jZUVsZW1lbnQoZXhjbHVkZWRSZWZlcmVuY2VPckluc3RhbmNlKSA/IGluc3RhbmNlLnJlZmVyZW5jZSA9PT0gZXhjbHVkZWRSZWZlcmVuY2VPckluc3RhbmNlIDogaW5zdGFuY2UucG9wcGVyID09PSBleGNsdWRlZFJlZmVyZW5jZU9ySW5zdGFuY2UucG9wcGVyO1xuICAgIH1cblxuICAgIGlmICghaXNFeGNsdWRlZCkge1xuICAgICAgdmFyIG9yaWdpbmFsRHVyYXRpb24gPSBpbnN0YW5jZS5wcm9wcy5kdXJhdGlvbjtcbiAgICAgIGluc3RhbmNlLnNldFByb3BzKHtcbiAgICAgICAgZHVyYXRpb246IGR1cmF0aW9uXG4gICAgICB9KTtcbiAgICAgIGluc3RhbmNlLmhpZGUoKTtcblxuICAgICAgaWYgKCFpbnN0YW5jZS5zdGF0ZS5pc0Rlc3Ryb3llZCkge1xuICAgICAgICBpbnN0YW5jZS5zZXRQcm9wcyh7XG4gICAgICAgICAgZHVyYXRpb246IG9yaWdpbmFsRHVyYXRpb25cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn07XG5cbi8vIGV2ZXJ5IHRpbWUgdGhlIHBvcHBlciBpcyBkZXN0cm95ZWQgKGkuZS4gYSBuZXcgdGFyZ2V0KSwgcmVtb3ZpbmcgdGhlIHN0eWxlc1xuLy8gYW5kIGNhdXNpbmcgdHJhbnNpdGlvbnMgdG8gYnJlYWsgZm9yIHNpbmdsZXRvbnMgd2hlbiB0aGUgY29uc29sZSBpcyBvcGVuLCBidXRcbi8vIG1vc3Qgbm90YWJseSBmb3Igbm9uLXRyYW5zZm9ybSBzdHlsZXMgYmVpbmcgdXNlZCwgYGdwdUFjY2VsZXJhdGlvbjogZmFsc2VgLlxuXG52YXIgYXBwbHlTdHlsZXNNb2RpZmllciA9IE9iamVjdC5hc3NpZ24oe30sIGFwcGx5U3R5bGVzLCB7XG4gIGVmZmVjdDogZnVuY3Rpb24gZWZmZWN0KF9yZWYpIHtcbiAgICB2YXIgc3RhdGUgPSBfcmVmLnN0YXRlO1xuICAgIHZhciBpbml0aWFsU3R5bGVzID0ge1xuICAgICAgcG9wcGVyOiB7XG4gICAgICAgIHBvc2l0aW9uOiBzdGF0ZS5vcHRpb25zLnN0cmF0ZWd5LFxuICAgICAgICBsZWZ0OiAnMCcsXG4gICAgICAgIHRvcDogJzAnLFxuICAgICAgICBtYXJnaW46ICcwJ1xuICAgICAgfSxcbiAgICAgIGFycm93OiB7XG4gICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnXG4gICAgICB9LFxuICAgICAgcmVmZXJlbmNlOiB7fVxuICAgIH07XG4gICAgT2JqZWN0LmFzc2lnbihzdGF0ZS5lbGVtZW50cy5wb3BwZXIuc3R5bGUsIGluaXRpYWxTdHlsZXMucG9wcGVyKTtcbiAgICBzdGF0ZS5zdHlsZXMgPSBpbml0aWFsU3R5bGVzO1xuXG4gICAgaWYgKHN0YXRlLmVsZW1lbnRzLmFycm93KSB7XG4gICAgICBPYmplY3QuYXNzaWduKHN0YXRlLmVsZW1lbnRzLmFycm93LnN0eWxlLCBpbml0aWFsU3R5bGVzLmFycm93KTtcbiAgICB9IC8vIGludGVudGlvbmFsbHkgcmV0dXJuIG5vIGNsZWFudXAgZnVuY3Rpb25cbiAgICAvLyByZXR1cm4gKCkgPT4geyAuLi4gfVxuXG4gIH1cbn0pO1xuXG52YXIgY3JlYXRlU2luZ2xldG9uID0gZnVuY3Rpb24gY3JlYXRlU2luZ2xldG9uKHRpcHB5SW5zdGFuY2VzLCBvcHRpb25hbFByb3BzKSB7XG4gIHZhciBfb3B0aW9uYWxQcm9wcyRwb3BwZXI7XG5cbiAgaWYgKG9wdGlvbmFsUHJvcHMgPT09IHZvaWQgMCkge1xuICAgIG9wdGlvbmFsUHJvcHMgPSB7fTtcbiAgfVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICBlcnJvcldoZW4oIUFycmF5LmlzQXJyYXkodGlwcHlJbnN0YW5jZXMpLCBbJ1RoZSBmaXJzdCBhcmd1bWVudCBwYXNzZWQgdG8gY3JlYXRlU2luZ2xldG9uKCkgbXVzdCBiZSBhbiBhcnJheSBvZicsICd0aXBweSBpbnN0YW5jZXMuIFRoZSBwYXNzZWQgdmFsdWUgd2FzJywgU3RyaW5nKHRpcHB5SW5zdGFuY2VzKV0uam9pbignICcpKTtcbiAgfVxuXG4gIHZhciBpbmRpdmlkdWFsSW5zdGFuY2VzID0gdGlwcHlJbnN0YW5jZXM7XG4gIHZhciByZWZlcmVuY2VzID0gW107XG4gIHZhciB0cmlnZ2VyVGFyZ2V0cyA9IFtdO1xuICB2YXIgY3VycmVudFRhcmdldDtcbiAgdmFyIG92ZXJyaWRlcyA9IG9wdGlvbmFsUHJvcHMub3ZlcnJpZGVzO1xuICB2YXIgaW50ZXJjZXB0U2V0UHJvcHNDbGVhbnVwcyA9IFtdO1xuICB2YXIgc2hvd25PbkNyZWF0ZSA9IGZhbHNlO1xuXG4gIGZ1bmN0aW9uIHNldFRyaWdnZXJUYXJnZXRzKCkge1xuICAgIHRyaWdnZXJUYXJnZXRzID0gaW5kaXZpZHVhbEluc3RhbmNlcy5tYXAoZnVuY3Rpb24gKGluc3RhbmNlKSB7XG4gICAgICByZXR1cm4gbm9ybWFsaXplVG9BcnJheShpbnN0YW5jZS5wcm9wcy50cmlnZ2VyVGFyZ2V0IHx8IGluc3RhbmNlLnJlZmVyZW5jZSk7XG4gICAgfSkucmVkdWNlKGZ1bmN0aW9uIChhY2MsIGl0ZW0pIHtcbiAgICAgIHJldHVybiBhY2MuY29uY2F0KGl0ZW0pO1xuICAgIH0sIFtdKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNldFJlZmVyZW5jZXMoKSB7XG4gICAgcmVmZXJlbmNlcyA9IGluZGl2aWR1YWxJbnN0YW5jZXMubWFwKGZ1bmN0aW9uIChpbnN0YW5jZSkge1xuICAgICAgcmV0dXJuIGluc3RhbmNlLnJlZmVyZW5jZTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGVuYWJsZUluc3RhbmNlcyhpc0VuYWJsZWQpIHtcbiAgICBpbmRpdmlkdWFsSW5zdGFuY2VzLmZvckVhY2goZnVuY3Rpb24gKGluc3RhbmNlKSB7XG4gICAgICBpZiAoaXNFbmFibGVkKSB7XG4gICAgICAgIGluc3RhbmNlLmVuYWJsZSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaW5zdGFuY2UuZGlzYWJsZSgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gaW50ZXJjZXB0U2V0UHJvcHMoc2luZ2xldG9uKSB7XG4gICAgcmV0dXJuIGluZGl2aWR1YWxJbnN0YW5jZXMubWFwKGZ1bmN0aW9uIChpbnN0YW5jZSkge1xuICAgICAgdmFyIG9yaWdpbmFsU2V0UHJvcHMgPSBpbnN0YW5jZS5zZXRQcm9wcztcblxuICAgICAgaW5zdGFuY2Uuc2V0UHJvcHMgPSBmdW5jdGlvbiAocHJvcHMpIHtcbiAgICAgICAgb3JpZ2luYWxTZXRQcm9wcyhwcm9wcyk7XG5cbiAgICAgICAgaWYgKGluc3RhbmNlLnJlZmVyZW5jZSA9PT0gY3VycmVudFRhcmdldCkge1xuICAgICAgICAgIHNpbmdsZXRvbi5zZXRQcm9wcyhwcm9wcyk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGluc3RhbmNlLnNldFByb3BzID0gb3JpZ2luYWxTZXRQcm9wcztcbiAgICAgIH07XG4gICAgfSk7XG4gIH0gLy8gaGF2ZSB0byBwYXNzIHNpbmdsZXRvbiwgYXMgaXQgbWF5YmUgdW5kZWZpbmVkIG9uIGZpcnN0IGNhbGxcblxuXG4gIGZ1bmN0aW9uIHByZXBhcmVJbnN0YW5jZShzaW5nbGV0b24sIHRhcmdldCkge1xuICAgIHZhciBpbmRleCA9IHRyaWdnZXJUYXJnZXRzLmluZGV4T2YodGFyZ2V0KTsgLy8gYmFpbC1vdXRcblxuICAgIGlmICh0YXJnZXQgPT09IGN1cnJlbnRUYXJnZXQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjdXJyZW50VGFyZ2V0ID0gdGFyZ2V0O1xuICAgIHZhciBvdmVycmlkZVByb3BzID0gKG92ZXJyaWRlcyB8fCBbXSkuY29uY2F0KCdjb250ZW50JykucmVkdWNlKGZ1bmN0aW9uIChhY2MsIHByb3ApIHtcbiAgICAgIGFjY1twcm9wXSA9IGluZGl2aWR1YWxJbnN0YW5jZXNbaW5kZXhdLnByb3BzW3Byb3BdO1xuICAgICAgcmV0dXJuIGFjYztcbiAgICB9LCB7fSk7XG4gICAgc2luZ2xldG9uLnNldFByb3BzKE9iamVjdC5hc3NpZ24oe30sIG92ZXJyaWRlUHJvcHMsIHtcbiAgICAgIGdldFJlZmVyZW5jZUNsaWVudFJlY3Q6IHR5cGVvZiBvdmVycmlkZVByb3BzLmdldFJlZmVyZW5jZUNsaWVudFJlY3QgPT09ICdmdW5jdGlvbicgPyBvdmVycmlkZVByb3BzLmdldFJlZmVyZW5jZUNsaWVudFJlY3QgOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfcmVmZXJlbmNlcyRpbmRleDtcblxuICAgICAgICByZXR1cm4gKF9yZWZlcmVuY2VzJGluZGV4ID0gcmVmZXJlbmNlc1tpbmRleF0pID09IG51bGwgPyB2b2lkIDAgOiBfcmVmZXJlbmNlcyRpbmRleC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgIH1cbiAgICB9KSk7XG4gIH1cblxuICBlbmFibGVJbnN0YW5jZXMoZmFsc2UpO1xuICBzZXRSZWZlcmVuY2VzKCk7XG4gIHNldFRyaWdnZXJUYXJnZXRzKCk7XG4gIHZhciBwbHVnaW4gPSB7XG4gICAgZm46IGZ1bmN0aW9uIGZuKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgb25EZXN0cm95OiBmdW5jdGlvbiBvbkRlc3Ryb3koKSB7XG4gICAgICAgICAgZW5hYmxlSW5zdGFuY2VzKHRydWUpO1xuICAgICAgICB9LFxuICAgICAgICBvbkhpZGRlbjogZnVuY3Rpb24gb25IaWRkZW4oKSB7XG4gICAgICAgICAgY3VycmVudFRhcmdldCA9IG51bGw7XG4gICAgICAgIH0sXG4gICAgICAgIG9uQ2xpY2tPdXRzaWRlOiBmdW5jdGlvbiBvbkNsaWNrT3V0c2lkZShpbnN0YW5jZSkge1xuICAgICAgICAgIGlmIChpbnN0YW5jZS5wcm9wcy5zaG93T25DcmVhdGUgJiYgIXNob3duT25DcmVhdGUpIHtcbiAgICAgICAgICAgIHNob3duT25DcmVhdGUgPSB0cnVlO1xuICAgICAgICAgICAgY3VycmVudFRhcmdldCA9IG51bGw7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBvblNob3c6IGZ1bmN0aW9uIG9uU2hvdyhpbnN0YW5jZSkge1xuICAgICAgICAgIGlmIChpbnN0YW5jZS5wcm9wcy5zaG93T25DcmVhdGUgJiYgIXNob3duT25DcmVhdGUpIHtcbiAgICAgICAgICAgIHNob3duT25DcmVhdGUgPSB0cnVlO1xuICAgICAgICAgICAgcHJlcGFyZUluc3RhbmNlKGluc3RhbmNlLCByZWZlcmVuY2VzWzBdKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG9uVHJpZ2dlcjogZnVuY3Rpb24gb25UcmlnZ2VyKGluc3RhbmNlLCBldmVudCkge1xuICAgICAgICAgIHByZXBhcmVJbnN0YW5jZShpbnN0YW5jZSwgZXZlbnQuY3VycmVudFRhcmdldCk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuICB9O1xuICB2YXIgc2luZ2xldG9uID0gdGlwcHkoZGl2KCksIE9iamVjdC5hc3NpZ24oe30sIHJlbW92ZVByb3BlcnRpZXMob3B0aW9uYWxQcm9wcywgWydvdmVycmlkZXMnXSksIHtcbiAgICBwbHVnaW5zOiBbcGx1Z2luXS5jb25jYXQob3B0aW9uYWxQcm9wcy5wbHVnaW5zIHx8IFtdKSxcbiAgICB0cmlnZ2VyVGFyZ2V0OiB0cmlnZ2VyVGFyZ2V0cyxcbiAgICBwb3BwZXJPcHRpb25zOiBPYmplY3QuYXNzaWduKHt9LCBvcHRpb25hbFByb3BzLnBvcHBlck9wdGlvbnMsIHtcbiAgICAgIG1vZGlmaWVyczogW10uY29uY2F0KCgoX29wdGlvbmFsUHJvcHMkcG9wcGVyID0gb3B0aW9uYWxQcm9wcy5wb3BwZXJPcHRpb25zKSA9PSBudWxsID8gdm9pZCAwIDogX29wdGlvbmFsUHJvcHMkcG9wcGVyLm1vZGlmaWVycykgfHwgW10sIFthcHBseVN0eWxlc01vZGlmaWVyXSlcbiAgICB9KVxuICB9KSk7XG4gIHZhciBvcmlnaW5hbFNob3cgPSBzaW5nbGV0b24uc2hvdztcblxuICBzaW5nbGV0b24uc2hvdyA9IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICBvcmlnaW5hbFNob3coKTsgLy8gZmlyc3QgdGltZSwgc2hvd09uQ3JlYXRlIG9yIHByb2dyYW1tYXRpYyBjYWxsIHdpdGggbm8gcGFyYW1zXG4gICAgLy8gZGVmYXVsdCB0byBzaG93aW5nIGZpcnN0IGluc3RhbmNlXG5cbiAgICBpZiAoIWN1cnJlbnRUYXJnZXQgJiYgdGFyZ2V0ID09IG51bGwpIHtcbiAgICAgIHJldHVybiBwcmVwYXJlSW5zdGFuY2Uoc2luZ2xldG9uLCByZWZlcmVuY2VzWzBdKTtcbiAgICB9IC8vIHRyaWdnZXJlZCBmcm9tIGV2ZW50IChkbyBub3RoaW5nIGFzIHByZXBhcmVJbnN0YW5jZSBhbHJlYWR5IGNhbGxlZCBieSBvblRyaWdnZXIpXG4gICAgLy8gcHJvZ3JhbW1hdGljIGNhbGwgd2l0aCBubyBwYXJhbXMgd2hlbiBhbHJlYWR5IHZpc2libGUgKGRvIG5vdGhpbmcgYWdhaW4pXG5cblxuICAgIGlmIChjdXJyZW50VGFyZ2V0ICYmIHRhcmdldCA9PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfSAvLyB0YXJnZXQgaXMgaW5kZXggb2YgaW5zdGFuY2VcblxuXG4gICAgaWYgKHR5cGVvZiB0YXJnZXQgPT09ICdudW1iZXInKSB7XG4gICAgICByZXR1cm4gcmVmZXJlbmNlc1t0YXJnZXRdICYmIHByZXBhcmVJbnN0YW5jZShzaW5nbGV0b24sIHJlZmVyZW5jZXNbdGFyZ2V0XSk7XG4gICAgfSAvLyB0YXJnZXQgaXMgYSBjaGlsZCB0aXBweSBpbnN0YW5jZVxuXG5cbiAgICBpZiAoaW5kaXZpZHVhbEluc3RhbmNlcy5pbmRleE9mKHRhcmdldCkgPj0gMCkge1xuICAgICAgdmFyIHJlZiA9IHRhcmdldC5yZWZlcmVuY2U7XG4gICAgICByZXR1cm4gcHJlcGFyZUluc3RhbmNlKHNpbmdsZXRvbiwgcmVmKTtcbiAgICB9IC8vIHRhcmdldCBpcyBhIFJlZmVyZW5jZUVsZW1lbnRcblxuXG4gICAgaWYgKHJlZmVyZW5jZXMuaW5kZXhPZih0YXJnZXQpID49IDApIHtcbiAgICAgIHJldHVybiBwcmVwYXJlSW5zdGFuY2Uoc2luZ2xldG9uLCB0YXJnZXQpO1xuICAgIH1cbiAgfTtcblxuICBzaW5nbGV0b24uc2hvd05leHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGZpcnN0ID0gcmVmZXJlbmNlc1swXTtcblxuICAgIGlmICghY3VycmVudFRhcmdldCkge1xuICAgICAgcmV0dXJuIHNpbmdsZXRvbi5zaG93KDApO1xuICAgIH1cblxuICAgIHZhciBpbmRleCA9IHJlZmVyZW5jZXMuaW5kZXhPZihjdXJyZW50VGFyZ2V0KTtcbiAgICBzaW5nbGV0b24uc2hvdyhyZWZlcmVuY2VzW2luZGV4ICsgMV0gfHwgZmlyc3QpO1xuICB9O1xuXG4gIHNpbmdsZXRvbi5zaG93UHJldmlvdXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGxhc3QgPSByZWZlcmVuY2VzW3JlZmVyZW5jZXMubGVuZ3RoIC0gMV07XG5cbiAgICBpZiAoIWN1cnJlbnRUYXJnZXQpIHtcbiAgICAgIHJldHVybiBzaW5nbGV0b24uc2hvdyhsYXN0KTtcbiAgICB9XG5cbiAgICB2YXIgaW5kZXggPSByZWZlcmVuY2VzLmluZGV4T2YoY3VycmVudFRhcmdldCk7XG4gICAgdmFyIHRhcmdldCA9IHJlZmVyZW5jZXNbaW5kZXggLSAxXSB8fCBsYXN0O1xuICAgIHNpbmdsZXRvbi5zaG93KHRhcmdldCk7XG4gIH07XG5cbiAgdmFyIG9yaWdpbmFsU2V0UHJvcHMgPSBzaW5nbGV0b24uc2V0UHJvcHM7XG5cbiAgc2luZ2xldG9uLnNldFByb3BzID0gZnVuY3Rpb24gKHByb3BzKSB7XG4gICAgb3ZlcnJpZGVzID0gcHJvcHMub3ZlcnJpZGVzIHx8IG92ZXJyaWRlcztcbiAgICBvcmlnaW5hbFNldFByb3BzKHByb3BzKTtcbiAgfTtcblxuICBzaW5nbGV0b24uc2V0SW5zdGFuY2VzID0gZnVuY3Rpb24gKG5leHRJbnN0YW5jZXMpIHtcbiAgICBlbmFibGVJbnN0YW5jZXModHJ1ZSk7XG4gICAgaW50ZXJjZXB0U2V0UHJvcHNDbGVhbnVwcy5mb3JFYWNoKGZ1bmN0aW9uIChmbikge1xuICAgICAgcmV0dXJuIGZuKCk7XG4gICAgfSk7XG4gICAgaW5kaXZpZHVhbEluc3RhbmNlcyA9IG5leHRJbnN0YW5jZXM7XG4gICAgZW5hYmxlSW5zdGFuY2VzKGZhbHNlKTtcbiAgICBzZXRSZWZlcmVuY2VzKCk7XG4gICAgc2V0VHJpZ2dlclRhcmdldHMoKTtcbiAgICBpbnRlcmNlcHRTZXRQcm9wc0NsZWFudXBzID0gaW50ZXJjZXB0U2V0UHJvcHMoc2luZ2xldG9uKTtcbiAgICBzaW5nbGV0b24uc2V0UHJvcHMoe1xuICAgICAgdHJpZ2dlclRhcmdldDogdHJpZ2dlclRhcmdldHNcbiAgICB9KTtcbiAgfTtcblxuICBpbnRlcmNlcHRTZXRQcm9wc0NsZWFudXBzID0gaW50ZXJjZXB0U2V0UHJvcHMoc2luZ2xldG9uKTtcbiAgcmV0dXJuIHNpbmdsZXRvbjtcbn07XG5cbnZhciBCVUJCTElOR19FVkVOVFNfTUFQID0ge1xuICBtb3VzZW92ZXI6ICdtb3VzZWVudGVyJyxcbiAgZm9jdXNpbjogJ2ZvY3VzJyxcbiAgY2xpY2s6ICdjbGljaydcbn07XG4vKipcbiAqIENyZWF0ZXMgYSBkZWxlZ2F0ZSBpbnN0YW5jZSB0aGF0IGNvbnRyb2xzIHRoZSBjcmVhdGlvbiBvZiB0aXBweSBpbnN0YW5jZXNcbiAqIGZvciBjaGlsZCBlbGVtZW50cyAoYHRhcmdldGAgQ1NTIHNlbGVjdG9yKS5cbiAqL1xuXG5mdW5jdGlvbiBkZWxlZ2F0ZSh0YXJnZXRzLCBwcm9wcykge1xuICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgZXJyb3JXaGVuKCEocHJvcHMgJiYgcHJvcHMudGFyZ2V0KSwgWydZb3UgbXVzdCBzcGVjaXR5IGEgYHRhcmdldGAgcHJvcCBpbmRpY2F0aW5nIGEgQ1NTIHNlbGVjdG9yIHN0cmluZyBtYXRjaGluZycsICd0aGUgdGFyZ2V0IGVsZW1lbnRzIHRoYXQgc2hvdWxkIHJlY2VpdmUgYSB0aXBweS4nXS5qb2luKCcgJykpO1xuICB9XG5cbiAgdmFyIGxpc3RlbmVycyA9IFtdO1xuICB2YXIgY2hpbGRUaXBweUluc3RhbmNlcyA9IFtdO1xuICB2YXIgZGlzYWJsZWQgPSBmYWxzZTtcbiAgdmFyIHRhcmdldCA9IHByb3BzLnRhcmdldDtcbiAgdmFyIG5hdGl2ZVByb3BzID0gcmVtb3ZlUHJvcGVydGllcyhwcm9wcywgWyd0YXJnZXQnXSk7XG4gIHZhciBwYXJlbnRQcm9wcyA9IE9iamVjdC5hc3NpZ24oe30sIG5hdGl2ZVByb3BzLCB7XG4gICAgdHJpZ2dlcjogJ21hbnVhbCcsXG4gICAgdG91Y2g6IGZhbHNlXG4gIH0pO1xuICB2YXIgY2hpbGRQcm9wcyA9IE9iamVjdC5hc3NpZ24oe1xuICAgIHRvdWNoOiBkZWZhdWx0UHJvcHMudG91Y2hcbiAgfSwgbmF0aXZlUHJvcHMsIHtcbiAgICBzaG93T25DcmVhdGU6IHRydWVcbiAgfSk7XG4gIHZhciByZXR1cm5WYWx1ZSA9IHRpcHB5KHRhcmdldHMsIHBhcmVudFByb3BzKTtcbiAgdmFyIG5vcm1hbGl6ZWRSZXR1cm5WYWx1ZSA9IG5vcm1hbGl6ZVRvQXJyYXkocmV0dXJuVmFsdWUpO1xuXG4gIGZ1bmN0aW9uIG9uVHJpZ2dlcihldmVudCkge1xuICAgIGlmICghZXZlbnQudGFyZ2V0IHx8IGRpc2FibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIHRhcmdldE5vZGUgPSBldmVudC50YXJnZXQuY2xvc2VzdCh0YXJnZXQpO1xuXG4gICAgaWYgKCF0YXJnZXROb2RlKSB7XG4gICAgICByZXR1cm47XG4gICAgfSAvLyBHZXQgcmVsZXZhbnQgdHJpZ2dlciB3aXRoIGZhbGxiYWNrczpcbiAgICAvLyAxLiBDaGVjayBgZGF0YS10aXBweS10cmlnZ2VyYCBhdHRyaWJ1dGUgb24gdGFyZ2V0IG5vZGVcbiAgICAvLyAyLiBGYWxsYmFjayB0byBgdHJpZ2dlcmAgcGFzc2VkIHRvIGBkZWxlZ2F0ZSgpYFxuICAgIC8vIDMuIEZhbGxiYWNrIHRvIGBkZWZhdWx0UHJvcHMudHJpZ2dlcmBcblxuXG4gICAgdmFyIHRyaWdnZXIgPSB0YXJnZXROb2RlLmdldEF0dHJpYnV0ZSgnZGF0YS10aXBweS10cmlnZ2VyJykgfHwgcHJvcHMudHJpZ2dlciB8fCBkZWZhdWx0UHJvcHMudHJpZ2dlcjsgLy8gQHRzLWlnbm9yZVxuXG4gICAgaWYgKHRhcmdldE5vZGUuX3RpcHB5KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGV2ZW50LnR5cGUgPT09ICd0b3VjaHN0YXJ0JyAmJiB0eXBlb2YgY2hpbGRQcm9wcy50b3VjaCA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGV2ZW50LnR5cGUgIT09ICd0b3VjaHN0YXJ0JyAmJiB0cmlnZ2VyLmluZGV4T2YoQlVCQkxJTkdfRVZFTlRTX01BUFtldmVudC50eXBlXSkgPCAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIGluc3RhbmNlID0gdGlwcHkodGFyZ2V0Tm9kZSwgY2hpbGRQcm9wcyk7XG5cbiAgICBpZiAoaW5zdGFuY2UpIHtcbiAgICAgIGNoaWxkVGlwcHlJbnN0YW5jZXMgPSBjaGlsZFRpcHB5SW5zdGFuY2VzLmNvbmNhdChpbnN0YW5jZSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gb24obm9kZSwgZXZlbnRUeXBlLCBoYW5kbGVyLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkge1xuICAgICAgb3B0aW9ucyA9IGZhbHNlO1xuICAgIH1cblxuICAgIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGhhbmRsZXIsIG9wdGlvbnMpO1xuICAgIGxpc3RlbmVycy5wdXNoKHtcbiAgICAgIG5vZGU6IG5vZGUsXG4gICAgICBldmVudFR5cGU6IGV2ZW50VHlwZSxcbiAgICAgIGhhbmRsZXI6IGhhbmRsZXIsXG4gICAgICBvcHRpb25zOiBvcHRpb25zXG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBhZGRFdmVudExpc3RlbmVycyhpbnN0YW5jZSkge1xuICAgIHZhciByZWZlcmVuY2UgPSBpbnN0YW5jZS5yZWZlcmVuY2U7XG4gICAgb24ocmVmZXJlbmNlLCAndG91Y2hzdGFydCcsIG9uVHJpZ2dlciwgVE9VQ0hfT1BUSU9OUyk7XG4gICAgb24ocmVmZXJlbmNlLCAnbW91c2VvdmVyJywgb25UcmlnZ2VyKTtcbiAgICBvbihyZWZlcmVuY2UsICdmb2N1c2luJywgb25UcmlnZ2VyKTtcbiAgICBvbihyZWZlcmVuY2UsICdjbGljaycsIG9uVHJpZ2dlcik7XG4gIH1cblxuICBmdW5jdGlvbiByZW1vdmVFdmVudExpc3RlbmVycygpIHtcbiAgICBsaXN0ZW5lcnMuZm9yRWFjaChmdW5jdGlvbiAoX3JlZikge1xuICAgICAgdmFyIG5vZGUgPSBfcmVmLm5vZGUsXG4gICAgICAgICAgZXZlbnRUeXBlID0gX3JlZi5ldmVudFR5cGUsXG4gICAgICAgICAgaGFuZGxlciA9IF9yZWYuaGFuZGxlcixcbiAgICAgICAgICBvcHRpb25zID0gX3JlZi5vcHRpb25zO1xuICAgICAgbm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgaGFuZGxlciwgb3B0aW9ucyk7XG4gICAgfSk7XG4gICAgbGlzdGVuZXJzID0gW107XG4gIH1cblxuICBmdW5jdGlvbiBhcHBseU11dGF0aW9ucyhpbnN0YW5jZSkge1xuICAgIHZhciBvcmlnaW5hbERlc3Ryb3kgPSBpbnN0YW5jZS5kZXN0cm95O1xuICAgIHZhciBvcmlnaW5hbEVuYWJsZSA9IGluc3RhbmNlLmVuYWJsZTtcbiAgICB2YXIgb3JpZ2luYWxEaXNhYmxlID0gaW5zdGFuY2UuZGlzYWJsZTtcblxuICAgIGluc3RhbmNlLmRlc3Ryb3kgPSBmdW5jdGlvbiAoc2hvdWxkRGVzdHJveUNoaWxkSW5zdGFuY2VzKSB7XG4gICAgICBpZiAoc2hvdWxkRGVzdHJveUNoaWxkSW5zdGFuY2VzID09PSB2b2lkIDApIHtcbiAgICAgICAgc2hvdWxkRGVzdHJveUNoaWxkSW5zdGFuY2VzID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHNob3VsZERlc3Ryb3lDaGlsZEluc3RhbmNlcykge1xuICAgICAgICBjaGlsZFRpcHB5SW5zdGFuY2VzLmZvckVhY2goZnVuY3Rpb24gKGluc3RhbmNlKSB7XG4gICAgICAgICAgaW5zdGFuY2UuZGVzdHJveSgpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgY2hpbGRUaXBweUluc3RhbmNlcyA9IFtdO1xuICAgICAgcmVtb3ZlRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICAgIG9yaWdpbmFsRGVzdHJveSgpO1xuICAgIH07XG5cbiAgICBpbnN0YW5jZS5lbmFibGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBvcmlnaW5hbEVuYWJsZSgpO1xuICAgICAgY2hpbGRUaXBweUluc3RhbmNlcy5mb3JFYWNoKGZ1bmN0aW9uIChpbnN0YW5jZSkge1xuICAgICAgICByZXR1cm4gaW5zdGFuY2UuZW5hYmxlKCk7XG4gICAgICB9KTtcbiAgICAgIGRpc2FibGVkID0gZmFsc2U7XG4gICAgfTtcblxuICAgIGluc3RhbmNlLmRpc2FibGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBvcmlnaW5hbERpc2FibGUoKTtcbiAgICAgIGNoaWxkVGlwcHlJbnN0YW5jZXMuZm9yRWFjaChmdW5jdGlvbiAoaW5zdGFuY2UpIHtcbiAgICAgICAgcmV0dXJuIGluc3RhbmNlLmRpc2FibGUoKTtcbiAgICAgIH0pO1xuICAgICAgZGlzYWJsZWQgPSB0cnVlO1xuICAgIH07XG5cbiAgICBhZGRFdmVudExpc3RlbmVycyhpbnN0YW5jZSk7XG4gIH1cblxuICBub3JtYWxpemVkUmV0dXJuVmFsdWUuZm9yRWFjaChhcHBseU11dGF0aW9ucyk7XG4gIHJldHVybiByZXR1cm5WYWx1ZTtcbn1cblxudmFyIGFuaW1hdGVGaWxsID0ge1xuICBuYW1lOiAnYW5pbWF0ZUZpbGwnLFxuICBkZWZhdWx0VmFsdWU6IGZhbHNlLFxuICBmbjogZnVuY3Rpb24gZm4oaW5zdGFuY2UpIHtcbiAgICB2YXIgX2luc3RhbmNlJHByb3BzJHJlbmRlO1xuXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIGlmICghKChfaW5zdGFuY2UkcHJvcHMkcmVuZGUgPSBpbnN0YW5jZS5wcm9wcy5yZW5kZXIpICE9IG51bGwgJiYgX2luc3RhbmNlJHByb3BzJHJlbmRlLiQkdGlwcHkpKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgICAgIGVycm9yV2hlbihpbnN0YW5jZS5wcm9wcy5hbmltYXRlRmlsbCwgJ1RoZSBgYW5pbWF0ZUZpbGxgIHBsdWdpbiByZXF1aXJlcyB0aGUgZGVmYXVsdCByZW5kZXIgZnVuY3Rpb24uJyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7fTtcbiAgICB9XG5cbiAgICB2YXIgX2dldENoaWxkcmVuID0gZ2V0Q2hpbGRyZW4oaW5zdGFuY2UucG9wcGVyKSxcbiAgICAgICAgYm94ID0gX2dldENoaWxkcmVuLmJveCxcbiAgICAgICAgY29udGVudCA9IF9nZXRDaGlsZHJlbi5jb250ZW50O1xuXG4gICAgdmFyIGJhY2tkcm9wID0gaW5zdGFuY2UucHJvcHMuYW5pbWF0ZUZpbGwgPyBjcmVhdGVCYWNrZHJvcEVsZW1lbnQoKSA6IG51bGw7XG4gICAgcmV0dXJuIHtcbiAgICAgIG9uQ3JlYXRlOiBmdW5jdGlvbiBvbkNyZWF0ZSgpIHtcbiAgICAgICAgaWYgKGJhY2tkcm9wKSB7XG4gICAgICAgICAgYm94Lmluc2VydEJlZm9yZShiYWNrZHJvcCwgYm94LmZpcnN0RWxlbWVudENoaWxkKTtcbiAgICAgICAgICBib3guc2V0QXR0cmlidXRlKCdkYXRhLWFuaW1hdGVmaWxsJywgJycpO1xuICAgICAgICAgIGJveC5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xuICAgICAgICAgIGluc3RhbmNlLnNldFByb3BzKHtcbiAgICAgICAgICAgIGFycm93OiBmYWxzZSxcbiAgICAgICAgICAgIGFuaW1hdGlvbjogJ3NoaWZ0LWF3YXknXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBvbk1vdW50OiBmdW5jdGlvbiBvbk1vdW50KCkge1xuICAgICAgICBpZiAoYmFja2Ryb3ApIHtcbiAgICAgICAgICB2YXIgdHJhbnNpdGlvbkR1cmF0aW9uID0gYm94LnN0eWxlLnRyYW5zaXRpb25EdXJhdGlvbjtcbiAgICAgICAgICB2YXIgZHVyYXRpb24gPSBOdW1iZXIodHJhbnNpdGlvbkR1cmF0aW9uLnJlcGxhY2UoJ21zJywgJycpKTsgLy8gVGhlIGNvbnRlbnQgc2hvdWxkIGZhZGUgaW4gYWZ0ZXIgdGhlIGJhY2tkcm9wIGhhcyBtb3N0bHkgZmlsbGVkIHRoZVxuICAgICAgICAgIC8vIHRvb2x0aXAgZWxlbWVudC4gYGNsaXAtcGF0aGAgaXMgdGhlIG90aGVyIGFsdGVybmF0aXZlIGJ1dCBpcyBub3RcbiAgICAgICAgICAvLyB3ZWxsLXN1cHBvcnRlZCBhbmQgaXMgYnVnZ3kgb24gc29tZSBkZXZpY2VzLlxuXG4gICAgICAgICAgY29udGVudC5zdHlsZS50cmFuc2l0aW9uRGVsYXkgPSBNYXRoLnJvdW5kKGR1cmF0aW9uIC8gMTApICsgXCJtc1wiO1xuICAgICAgICAgIGJhY2tkcm9wLnN0eWxlLnRyYW5zaXRpb25EdXJhdGlvbiA9IHRyYW5zaXRpb25EdXJhdGlvbjtcbiAgICAgICAgICBzZXRWaXNpYmlsaXR5U3RhdGUoW2JhY2tkcm9wXSwgJ3Zpc2libGUnKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIG9uU2hvdzogZnVuY3Rpb24gb25TaG93KCkge1xuICAgICAgICBpZiAoYmFja2Ryb3ApIHtcbiAgICAgICAgICBiYWNrZHJvcC5zdHlsZS50cmFuc2l0aW9uRHVyYXRpb24gPSAnMG1zJztcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIG9uSGlkZTogZnVuY3Rpb24gb25IaWRlKCkge1xuICAgICAgICBpZiAoYmFja2Ryb3ApIHtcbiAgICAgICAgICBzZXRWaXNpYmlsaXR5U3RhdGUoW2JhY2tkcm9wXSwgJ2hpZGRlbicpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgfVxufTtcblxuZnVuY3Rpb24gY3JlYXRlQmFja2Ryb3BFbGVtZW50KCkge1xuICB2YXIgYmFja2Ryb3AgPSBkaXYoKTtcbiAgYmFja2Ryb3AuY2xhc3NOYW1lID0gQkFDS0RST1BfQ0xBU1M7XG4gIHNldFZpc2liaWxpdHlTdGF0ZShbYmFja2Ryb3BdLCAnaGlkZGVuJyk7XG4gIHJldHVybiBiYWNrZHJvcDtcbn1cblxudmFyIG1vdXNlQ29vcmRzID0ge1xuICBjbGllbnRYOiAwLFxuICBjbGllbnRZOiAwXG59O1xudmFyIGFjdGl2ZUluc3RhbmNlcyA9IFtdO1xuXG5mdW5jdGlvbiBzdG9yZU1vdXNlQ29vcmRzKF9yZWYpIHtcbiAgdmFyIGNsaWVudFggPSBfcmVmLmNsaWVudFgsXG4gICAgICBjbGllbnRZID0gX3JlZi5jbGllbnRZO1xuICBtb3VzZUNvb3JkcyA9IHtcbiAgICBjbGllbnRYOiBjbGllbnRYLFxuICAgIGNsaWVudFk6IGNsaWVudFlcbiAgfTtcbn1cblxuZnVuY3Rpb24gYWRkTW91c2VDb29yZHNMaXN0ZW5lcihkb2MpIHtcbiAgZG9jLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHN0b3JlTW91c2VDb29yZHMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVNb3VzZUNvb3Jkc0xpc3RlbmVyKGRvYykge1xuICBkb2MucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgc3RvcmVNb3VzZUNvb3Jkcyk7XG59XG5cbnZhciBmb2xsb3dDdXJzb3IgPSB7XG4gIG5hbWU6ICdmb2xsb3dDdXJzb3InLFxuICBkZWZhdWx0VmFsdWU6IGZhbHNlLFxuICBmbjogZnVuY3Rpb24gZm4oaW5zdGFuY2UpIHtcbiAgICB2YXIgcmVmZXJlbmNlID0gaW5zdGFuY2UucmVmZXJlbmNlO1xuICAgIHZhciBkb2MgPSBnZXRPd25lckRvY3VtZW50KGluc3RhbmNlLnByb3BzLnRyaWdnZXJUYXJnZXQgfHwgcmVmZXJlbmNlKTtcbiAgICB2YXIgaXNJbnRlcm5hbFVwZGF0ZSA9IGZhbHNlO1xuICAgIHZhciB3YXNGb2N1c0V2ZW50ID0gZmFsc2U7XG4gICAgdmFyIGlzVW5tb3VudGVkID0gdHJ1ZTtcbiAgICB2YXIgcHJldlByb3BzID0gaW5zdGFuY2UucHJvcHM7XG5cbiAgICBmdW5jdGlvbiBnZXRJc0luaXRpYWxCZWhhdmlvcigpIHtcbiAgICAgIHJldHVybiBpbnN0YW5jZS5wcm9wcy5mb2xsb3dDdXJzb3IgPT09ICdpbml0aWFsJyAmJiBpbnN0YW5jZS5zdGF0ZS5pc1Zpc2libGU7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYWRkTGlzdGVuZXIoKSB7XG4gICAgICBkb2MuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgb25Nb3VzZU1vdmUpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbW92ZUxpc3RlbmVyKCkge1xuICAgICAgZG9jLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG9uTW91c2VNb3ZlKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1bnNldEdldFJlZmVyZW5jZUNsaWVudFJlY3QoKSB7XG4gICAgICBpc0ludGVybmFsVXBkYXRlID0gdHJ1ZTtcbiAgICAgIGluc3RhbmNlLnNldFByb3BzKHtcbiAgICAgICAgZ2V0UmVmZXJlbmNlQ2xpZW50UmVjdDogbnVsbFxuICAgICAgfSk7XG4gICAgICBpc0ludGVybmFsVXBkYXRlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25Nb3VzZU1vdmUoZXZlbnQpIHtcbiAgICAgIC8vIElmIHRoZSBpbnN0YW5jZSBpcyBpbnRlcmFjdGl2ZSwgYXZvaWQgdXBkYXRpbmcgdGhlIHBvc2l0aW9uIHVubGVzcyBpdCdzXG4gICAgICAvLyBvdmVyIHRoZSByZWZlcmVuY2UgZWxlbWVudFxuICAgICAgdmFyIGlzQ3Vyc29yT3ZlclJlZmVyZW5jZSA9IGV2ZW50LnRhcmdldCA/IHJlZmVyZW5jZS5jb250YWlucyhldmVudC50YXJnZXQpIDogdHJ1ZTtcbiAgICAgIHZhciBmb2xsb3dDdXJzb3IgPSBpbnN0YW5jZS5wcm9wcy5mb2xsb3dDdXJzb3I7XG4gICAgICB2YXIgY2xpZW50WCA9IGV2ZW50LmNsaWVudFgsXG4gICAgICAgICAgY2xpZW50WSA9IGV2ZW50LmNsaWVudFk7XG4gICAgICB2YXIgcmVjdCA9IHJlZmVyZW5jZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgIHZhciByZWxhdGl2ZVggPSBjbGllbnRYIC0gcmVjdC5sZWZ0O1xuICAgICAgdmFyIHJlbGF0aXZlWSA9IGNsaWVudFkgLSByZWN0LnRvcDtcblxuICAgICAgaWYgKGlzQ3Vyc29yT3ZlclJlZmVyZW5jZSB8fCAhaW5zdGFuY2UucHJvcHMuaW50ZXJhY3RpdmUpIHtcbiAgICAgICAgaW5zdGFuY2Uuc2V0UHJvcHMoe1xuICAgICAgICAgIC8vIEB0cy1pZ25vcmUgLSB1bm5lZWRlZCBET01SZWN0IHByb3BlcnRpZXNcbiAgICAgICAgICBnZXRSZWZlcmVuY2VDbGllbnRSZWN0OiBmdW5jdGlvbiBnZXRSZWZlcmVuY2VDbGllbnRSZWN0KCkge1xuICAgICAgICAgICAgdmFyIHJlY3QgPSByZWZlcmVuY2UuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgICB2YXIgeCA9IGNsaWVudFg7XG4gICAgICAgICAgICB2YXIgeSA9IGNsaWVudFk7XG5cbiAgICAgICAgICAgIGlmIChmb2xsb3dDdXJzb3IgPT09ICdpbml0aWFsJykge1xuICAgICAgICAgICAgICB4ID0gcmVjdC5sZWZ0ICsgcmVsYXRpdmVYO1xuICAgICAgICAgICAgICB5ID0gcmVjdC50b3AgKyByZWxhdGl2ZVk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciB0b3AgPSBmb2xsb3dDdXJzb3IgPT09ICdob3Jpem9udGFsJyA/IHJlY3QudG9wIDogeTtcbiAgICAgICAgICAgIHZhciByaWdodCA9IGZvbGxvd0N1cnNvciA9PT0gJ3ZlcnRpY2FsJyA/IHJlY3QucmlnaHQgOiB4O1xuICAgICAgICAgICAgdmFyIGJvdHRvbSA9IGZvbGxvd0N1cnNvciA9PT0gJ2hvcml6b250YWwnID8gcmVjdC5ib3R0b20gOiB5O1xuICAgICAgICAgICAgdmFyIGxlZnQgPSBmb2xsb3dDdXJzb3IgPT09ICd2ZXJ0aWNhbCcgPyByZWN0LmxlZnQgOiB4O1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgd2lkdGg6IHJpZ2h0IC0gbGVmdCxcbiAgICAgICAgICAgICAgaGVpZ2h0OiBib3R0b20gLSB0b3AsXG4gICAgICAgICAgICAgIHRvcDogdG9wLFxuICAgICAgICAgICAgICByaWdodDogcmlnaHQsXG4gICAgICAgICAgICAgIGJvdHRvbTogYm90dG9tLFxuICAgICAgICAgICAgICBsZWZ0OiBsZWZ0XG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlKCkge1xuICAgICAgaWYgKGluc3RhbmNlLnByb3BzLmZvbGxvd0N1cnNvcikge1xuICAgICAgICBhY3RpdmVJbnN0YW5jZXMucHVzaCh7XG4gICAgICAgICAgaW5zdGFuY2U6IGluc3RhbmNlLFxuICAgICAgICAgIGRvYzogZG9jXG4gICAgICAgIH0pO1xuICAgICAgICBhZGRNb3VzZUNvb3Jkc0xpc3RlbmVyKGRvYyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICAgIGFjdGl2ZUluc3RhbmNlcyA9IGFjdGl2ZUluc3RhbmNlcy5maWx0ZXIoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIGRhdGEuaW5zdGFuY2UgIT09IGluc3RhbmNlO1xuICAgICAgfSk7XG5cbiAgICAgIGlmIChhY3RpdmVJbnN0YW5jZXMuZmlsdGVyKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIHJldHVybiBkYXRhLmRvYyA9PT0gZG9jO1xuICAgICAgfSkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJlbW92ZU1vdXNlQ29vcmRzTGlzdGVuZXIoZG9jKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgb25DcmVhdGU6IGNyZWF0ZSxcbiAgICAgIG9uRGVzdHJveTogZGVzdHJveSxcbiAgICAgIG9uQmVmb3JlVXBkYXRlOiBmdW5jdGlvbiBvbkJlZm9yZVVwZGF0ZSgpIHtcbiAgICAgICAgcHJldlByb3BzID0gaW5zdGFuY2UucHJvcHM7XG4gICAgICB9LFxuICAgICAgb25BZnRlclVwZGF0ZTogZnVuY3Rpb24gb25BZnRlclVwZGF0ZShfLCBfcmVmMikge1xuICAgICAgICB2YXIgZm9sbG93Q3Vyc29yID0gX3JlZjIuZm9sbG93Q3Vyc29yO1xuXG4gICAgICAgIGlmIChpc0ludGVybmFsVXBkYXRlKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGZvbGxvd0N1cnNvciAhPT0gdW5kZWZpbmVkICYmIHByZXZQcm9wcy5mb2xsb3dDdXJzb3IgIT09IGZvbGxvd0N1cnNvcikge1xuICAgICAgICAgIGRlc3Ryb3koKTtcblxuICAgICAgICAgIGlmIChmb2xsb3dDdXJzb3IpIHtcbiAgICAgICAgICAgIGNyZWF0ZSgpO1xuXG4gICAgICAgICAgICBpZiAoaW5zdGFuY2Uuc3RhdGUuaXNNb3VudGVkICYmICF3YXNGb2N1c0V2ZW50ICYmICFnZXRJc0luaXRpYWxCZWhhdmlvcigpKSB7XG4gICAgICAgICAgICAgIGFkZExpc3RlbmVyKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlbW92ZUxpc3RlbmVyKCk7XG4gICAgICAgICAgICB1bnNldEdldFJlZmVyZW5jZUNsaWVudFJlY3QoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBvbk1vdW50OiBmdW5jdGlvbiBvbk1vdW50KCkge1xuICAgICAgICBpZiAoaW5zdGFuY2UucHJvcHMuZm9sbG93Q3Vyc29yICYmICF3YXNGb2N1c0V2ZW50KSB7XG4gICAgICAgICAgaWYgKGlzVW5tb3VudGVkKSB7XG4gICAgICAgICAgICBvbk1vdXNlTW92ZShtb3VzZUNvb3Jkcyk7XG4gICAgICAgICAgICBpc1VubW91bnRlZCA9IGZhbHNlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICghZ2V0SXNJbml0aWFsQmVoYXZpb3IoKSkge1xuICAgICAgICAgICAgYWRkTGlzdGVuZXIoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBvblRyaWdnZXI6IGZ1bmN0aW9uIG9uVHJpZ2dlcihfLCBldmVudCkge1xuICAgICAgICBpZiAoaXNNb3VzZUV2ZW50KGV2ZW50KSkge1xuICAgICAgICAgIG1vdXNlQ29vcmRzID0ge1xuICAgICAgICAgICAgY2xpZW50WDogZXZlbnQuY2xpZW50WCxcbiAgICAgICAgICAgIGNsaWVudFk6IGV2ZW50LmNsaWVudFlcbiAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgd2FzRm9jdXNFdmVudCA9IGV2ZW50LnR5cGUgPT09ICdmb2N1cyc7XG4gICAgICB9LFxuICAgICAgb25IaWRkZW46IGZ1bmN0aW9uIG9uSGlkZGVuKCkge1xuICAgICAgICBpZiAoaW5zdGFuY2UucHJvcHMuZm9sbG93Q3Vyc29yKSB7XG4gICAgICAgICAgdW5zZXRHZXRSZWZlcmVuY2VDbGllbnRSZWN0KCk7XG4gICAgICAgICAgcmVtb3ZlTGlzdGVuZXIoKTtcbiAgICAgICAgICBpc1VubW91bnRlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9XG59O1xuXG5mdW5jdGlvbiBnZXRQcm9wcyhwcm9wcywgbW9kaWZpZXIpIHtcbiAgdmFyIF9wcm9wcyRwb3BwZXJPcHRpb25zO1xuXG4gIHJldHVybiB7XG4gICAgcG9wcGVyT3B0aW9uczogT2JqZWN0LmFzc2lnbih7fSwgcHJvcHMucG9wcGVyT3B0aW9ucywge1xuICAgICAgbW9kaWZpZXJzOiBbXS5jb25jYXQoKCgoX3Byb3BzJHBvcHBlck9wdGlvbnMgPSBwcm9wcy5wb3BwZXJPcHRpb25zKSA9PSBudWxsID8gdm9pZCAwIDogX3Byb3BzJHBvcHBlck9wdGlvbnMubW9kaWZpZXJzKSB8fCBbXSkuZmlsdGVyKGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgICAgIHZhciBuYW1lID0gX3JlZi5uYW1lO1xuICAgICAgICByZXR1cm4gbmFtZSAhPT0gbW9kaWZpZXIubmFtZTtcbiAgICAgIH0pLCBbbW9kaWZpZXJdKVxuICAgIH0pXG4gIH07XG59XG5cbnZhciBpbmxpbmVQb3NpdGlvbmluZyA9IHtcbiAgbmFtZTogJ2lubGluZVBvc2l0aW9uaW5nJyxcbiAgZGVmYXVsdFZhbHVlOiBmYWxzZSxcbiAgZm46IGZ1bmN0aW9uIGZuKGluc3RhbmNlKSB7XG4gICAgdmFyIHJlZmVyZW5jZSA9IGluc3RhbmNlLnJlZmVyZW5jZTtcblxuICAgIGZ1bmN0aW9uIGlzRW5hYmxlZCgpIHtcbiAgICAgIHJldHVybiAhIWluc3RhbmNlLnByb3BzLmlubGluZVBvc2l0aW9uaW5nO1xuICAgIH1cblxuICAgIHZhciBwbGFjZW1lbnQ7XG4gICAgdmFyIGN1cnNvclJlY3RJbmRleCA9IC0xO1xuICAgIHZhciBpc0ludGVybmFsVXBkYXRlID0gZmFsc2U7XG4gICAgdmFyIHRyaWVkUGxhY2VtZW50cyA9IFtdO1xuICAgIHZhciBtb2RpZmllciA9IHtcbiAgICAgIG5hbWU6ICd0aXBweUlubGluZVBvc2l0aW9uaW5nJyxcbiAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICBwaGFzZTogJ2FmdGVyV3JpdGUnLFxuICAgICAgZm46IGZ1bmN0aW9uIGZuKF9yZWYyKSB7XG4gICAgICAgIHZhciBzdGF0ZSA9IF9yZWYyLnN0YXRlO1xuXG4gICAgICAgIGlmIChpc0VuYWJsZWQoKSkge1xuICAgICAgICAgIGlmICh0cmllZFBsYWNlbWVudHMuaW5kZXhPZihzdGF0ZS5wbGFjZW1lbnQpICE9PSAtMSkge1xuICAgICAgICAgICAgdHJpZWRQbGFjZW1lbnRzID0gW107XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHBsYWNlbWVudCAhPT0gc3RhdGUucGxhY2VtZW50ICYmIHRyaWVkUGxhY2VtZW50cy5pbmRleE9mKHN0YXRlLnBsYWNlbWVudCkgPT09IC0xKSB7XG4gICAgICAgICAgICB0cmllZFBsYWNlbWVudHMucHVzaChzdGF0ZS5wbGFjZW1lbnQpO1xuICAgICAgICAgICAgaW5zdGFuY2Uuc2V0UHJvcHMoe1xuICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlIC0gdW5uZWVkZWQgRE9NUmVjdCBwcm9wZXJ0aWVzXG4gICAgICAgICAgICAgIGdldFJlZmVyZW5jZUNsaWVudFJlY3Q6IGZ1bmN0aW9uIGdldFJlZmVyZW5jZUNsaWVudFJlY3QoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9nZXRSZWZlcmVuY2VDbGllbnRSZWN0KHN0YXRlLnBsYWNlbWVudCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHBsYWNlbWVudCA9IHN0YXRlLnBsYWNlbWVudDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICBmdW5jdGlvbiBfZ2V0UmVmZXJlbmNlQ2xpZW50UmVjdChwbGFjZW1lbnQpIHtcbiAgICAgIHJldHVybiBnZXRJbmxpbmVCb3VuZGluZ0NsaWVudFJlY3QoZ2V0QmFzZVBsYWNlbWVudChwbGFjZW1lbnQpLCByZWZlcmVuY2UuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksIGFycmF5RnJvbShyZWZlcmVuY2UuZ2V0Q2xpZW50UmVjdHMoKSksIGN1cnNvclJlY3RJbmRleCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0SW50ZXJuYWxQcm9wcyhwYXJ0aWFsUHJvcHMpIHtcbiAgICAgIGlzSW50ZXJuYWxVcGRhdGUgPSB0cnVlO1xuICAgICAgaW5zdGFuY2Uuc2V0UHJvcHMocGFydGlhbFByb3BzKTtcbiAgICAgIGlzSW50ZXJuYWxVcGRhdGUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhZGRNb2RpZmllcigpIHtcbiAgICAgIGlmICghaXNJbnRlcm5hbFVwZGF0ZSkge1xuICAgICAgICBzZXRJbnRlcm5hbFByb3BzKGdldFByb3BzKGluc3RhbmNlLnByb3BzLCBtb2RpZmllcikpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBvbkNyZWF0ZTogYWRkTW9kaWZpZXIsXG4gICAgICBvbkFmdGVyVXBkYXRlOiBhZGRNb2RpZmllcixcbiAgICAgIG9uVHJpZ2dlcjogZnVuY3Rpb24gb25UcmlnZ2VyKF8sIGV2ZW50KSB7XG4gICAgICAgIGlmIChpc01vdXNlRXZlbnQoZXZlbnQpKSB7XG4gICAgICAgICAgdmFyIHJlY3RzID0gYXJyYXlGcm9tKGluc3RhbmNlLnJlZmVyZW5jZS5nZXRDbGllbnRSZWN0cygpKTtcbiAgICAgICAgICB2YXIgY3Vyc29yUmVjdCA9IHJlY3RzLmZpbmQoZnVuY3Rpb24gKHJlY3QpIHtcbiAgICAgICAgICAgIHJldHVybiByZWN0LmxlZnQgLSAyIDw9IGV2ZW50LmNsaWVudFggJiYgcmVjdC5yaWdodCArIDIgPj0gZXZlbnQuY2xpZW50WCAmJiByZWN0LnRvcCAtIDIgPD0gZXZlbnQuY2xpZW50WSAmJiByZWN0LmJvdHRvbSArIDIgPj0gZXZlbnQuY2xpZW50WTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICB2YXIgaW5kZXggPSByZWN0cy5pbmRleE9mKGN1cnNvclJlY3QpO1xuICAgICAgICAgIGN1cnNvclJlY3RJbmRleCA9IGluZGV4ID4gLTEgPyBpbmRleCA6IGN1cnNvclJlY3RJbmRleDtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIG9uSGlkZGVuOiBmdW5jdGlvbiBvbkhpZGRlbigpIHtcbiAgICAgICAgY3Vyc29yUmVjdEluZGV4ID0gLTE7XG4gICAgICB9XG4gICAgfTtcbiAgfVxufTtcbmZ1bmN0aW9uIGdldElubGluZUJvdW5kaW5nQ2xpZW50UmVjdChjdXJyZW50QmFzZVBsYWNlbWVudCwgYm91bmRpbmdSZWN0LCBjbGllbnRSZWN0cywgY3Vyc29yUmVjdEluZGV4KSB7XG4gIC8vIE5vdCBhbiBpbmxpbmUgZWxlbWVudCwgb3IgcGxhY2VtZW50IGlzIG5vdCB5ZXQga25vd25cbiAgaWYgKGNsaWVudFJlY3RzLmxlbmd0aCA8IDIgfHwgY3VycmVudEJhc2VQbGFjZW1lbnQgPT09IG51bGwpIHtcbiAgICByZXR1cm4gYm91bmRpbmdSZWN0O1xuICB9IC8vIFRoZXJlIGFyZSB0d28gcmVjdHMgYW5kIHRoZXkgYXJlIGRpc2pvaW5lZFxuXG5cbiAgaWYgKGNsaWVudFJlY3RzLmxlbmd0aCA9PT0gMiAmJiBjdXJzb3JSZWN0SW5kZXggPj0gMCAmJiBjbGllbnRSZWN0c1swXS5sZWZ0ID4gY2xpZW50UmVjdHNbMV0ucmlnaHQpIHtcbiAgICByZXR1cm4gY2xpZW50UmVjdHNbY3Vyc29yUmVjdEluZGV4XSB8fCBib3VuZGluZ1JlY3Q7XG4gIH1cblxuICBzd2l0Y2ggKGN1cnJlbnRCYXNlUGxhY2VtZW50KSB7XG4gICAgY2FzZSAndG9wJzpcbiAgICBjYXNlICdib3R0b20nOlxuICAgICAge1xuICAgICAgICB2YXIgZmlyc3RSZWN0ID0gY2xpZW50UmVjdHNbMF07XG4gICAgICAgIHZhciBsYXN0UmVjdCA9IGNsaWVudFJlY3RzW2NsaWVudFJlY3RzLmxlbmd0aCAtIDFdO1xuICAgICAgICB2YXIgaXNUb3AgPSBjdXJyZW50QmFzZVBsYWNlbWVudCA9PT0gJ3RvcCc7XG4gICAgICAgIHZhciB0b3AgPSBmaXJzdFJlY3QudG9wO1xuICAgICAgICB2YXIgYm90dG9tID0gbGFzdFJlY3QuYm90dG9tO1xuICAgICAgICB2YXIgbGVmdCA9IGlzVG9wID8gZmlyc3RSZWN0LmxlZnQgOiBsYXN0UmVjdC5sZWZ0O1xuICAgICAgICB2YXIgcmlnaHQgPSBpc1RvcCA/IGZpcnN0UmVjdC5yaWdodCA6IGxhc3RSZWN0LnJpZ2h0O1xuICAgICAgICB2YXIgd2lkdGggPSByaWdodCAtIGxlZnQ7XG4gICAgICAgIHZhciBoZWlnaHQgPSBib3R0b20gLSB0b3A7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgdG9wOiB0b3AsXG4gICAgICAgICAgYm90dG9tOiBib3R0b20sXG4gICAgICAgICAgbGVmdDogbGVmdCxcbiAgICAgICAgICByaWdodDogcmlnaHQsXG4gICAgICAgICAgd2lkdGg6IHdpZHRoLFxuICAgICAgICAgIGhlaWdodDogaGVpZ2h0XG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICBjYXNlICdsZWZ0JzpcbiAgICBjYXNlICdyaWdodCc6XG4gICAgICB7XG4gICAgICAgIHZhciBtaW5MZWZ0ID0gTWF0aC5taW4uYXBwbHkoTWF0aCwgY2xpZW50UmVjdHMubWFwKGZ1bmN0aW9uIChyZWN0cykge1xuICAgICAgICAgIHJldHVybiByZWN0cy5sZWZ0O1xuICAgICAgICB9KSk7XG4gICAgICAgIHZhciBtYXhSaWdodCA9IE1hdGgubWF4LmFwcGx5KE1hdGgsIGNsaWVudFJlY3RzLm1hcChmdW5jdGlvbiAocmVjdHMpIHtcbiAgICAgICAgICByZXR1cm4gcmVjdHMucmlnaHQ7XG4gICAgICAgIH0pKTtcbiAgICAgICAgdmFyIG1lYXN1cmVSZWN0cyA9IGNsaWVudFJlY3RzLmZpbHRlcihmdW5jdGlvbiAocmVjdCkge1xuICAgICAgICAgIHJldHVybiBjdXJyZW50QmFzZVBsYWNlbWVudCA9PT0gJ2xlZnQnID8gcmVjdC5sZWZ0ID09PSBtaW5MZWZ0IDogcmVjdC5yaWdodCA9PT0gbWF4UmlnaHQ7XG4gICAgICAgIH0pO1xuICAgICAgICB2YXIgX3RvcCA9IG1lYXN1cmVSZWN0c1swXS50b3A7XG4gICAgICAgIHZhciBfYm90dG9tID0gbWVhc3VyZVJlY3RzW21lYXN1cmVSZWN0cy5sZW5ndGggLSAxXS5ib3R0b207XG4gICAgICAgIHZhciBfbGVmdCA9IG1pbkxlZnQ7XG4gICAgICAgIHZhciBfcmlnaHQgPSBtYXhSaWdodDtcblxuICAgICAgICB2YXIgX3dpZHRoID0gX3JpZ2h0IC0gX2xlZnQ7XG5cbiAgICAgICAgdmFyIF9oZWlnaHQgPSBfYm90dG9tIC0gX3RvcDtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHRvcDogX3RvcCxcbiAgICAgICAgICBib3R0b206IF9ib3R0b20sXG4gICAgICAgICAgbGVmdDogX2xlZnQsXG4gICAgICAgICAgcmlnaHQ6IF9yaWdodCxcbiAgICAgICAgICB3aWR0aDogX3dpZHRoLFxuICAgICAgICAgIGhlaWdodDogX2hlaWdodFxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgZGVmYXVsdDpcbiAgICAgIHtcbiAgICAgICAgcmV0dXJuIGJvdW5kaW5nUmVjdDtcbiAgICAgIH1cbiAgfVxufVxuXG52YXIgc3RpY2t5ID0ge1xuICBuYW1lOiAnc3RpY2t5JyxcbiAgZGVmYXVsdFZhbHVlOiBmYWxzZSxcbiAgZm46IGZ1bmN0aW9uIGZuKGluc3RhbmNlKSB7XG4gICAgdmFyIHJlZmVyZW5jZSA9IGluc3RhbmNlLnJlZmVyZW5jZSxcbiAgICAgICAgcG9wcGVyID0gaW5zdGFuY2UucG9wcGVyO1xuXG4gICAgZnVuY3Rpb24gZ2V0UmVmZXJlbmNlKCkge1xuICAgICAgcmV0dXJuIGluc3RhbmNlLnBvcHBlckluc3RhbmNlID8gaW5zdGFuY2UucG9wcGVySW5zdGFuY2Uuc3RhdGUuZWxlbWVudHMucmVmZXJlbmNlIDogcmVmZXJlbmNlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNob3VsZENoZWNrKHZhbHVlKSB7XG4gICAgICByZXR1cm4gaW5zdGFuY2UucHJvcHMuc3RpY2t5ID09PSB0cnVlIHx8IGluc3RhbmNlLnByb3BzLnN0aWNreSA9PT0gdmFsdWU7XG4gICAgfVxuXG4gICAgdmFyIHByZXZSZWZSZWN0ID0gbnVsbDtcbiAgICB2YXIgcHJldlBvcFJlY3QgPSBudWxsO1xuXG4gICAgZnVuY3Rpb24gdXBkYXRlUG9zaXRpb24oKSB7XG4gICAgICB2YXIgY3VycmVudFJlZlJlY3QgPSBzaG91bGRDaGVjaygncmVmZXJlbmNlJykgPyBnZXRSZWZlcmVuY2UoKS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSA6IG51bGw7XG4gICAgICB2YXIgY3VycmVudFBvcFJlY3QgPSBzaG91bGRDaGVjaygncG9wcGVyJykgPyBwb3BwZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkgOiBudWxsO1xuXG4gICAgICBpZiAoY3VycmVudFJlZlJlY3QgJiYgYXJlUmVjdHNEaWZmZXJlbnQocHJldlJlZlJlY3QsIGN1cnJlbnRSZWZSZWN0KSB8fCBjdXJyZW50UG9wUmVjdCAmJiBhcmVSZWN0c0RpZmZlcmVudChwcmV2UG9wUmVjdCwgY3VycmVudFBvcFJlY3QpKSB7XG4gICAgICAgIGlmIChpbnN0YW5jZS5wb3BwZXJJbnN0YW5jZSkge1xuICAgICAgICAgIGluc3RhbmNlLnBvcHBlckluc3RhbmNlLnVwZGF0ZSgpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHByZXZSZWZSZWN0ID0gY3VycmVudFJlZlJlY3Q7XG4gICAgICBwcmV2UG9wUmVjdCA9IGN1cnJlbnRQb3BSZWN0O1xuXG4gICAgICBpZiAoaW5zdGFuY2Uuc3RhdGUuaXNNb3VudGVkKSB7XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh1cGRhdGVQb3NpdGlvbik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIG9uTW91bnQ6IGZ1bmN0aW9uIG9uTW91bnQoKSB7XG4gICAgICAgIGlmIChpbnN0YW5jZS5wcm9wcy5zdGlja3kpIHtcbiAgICAgICAgICB1cGRhdGVQb3NpdGlvbigpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgfVxufTtcblxuZnVuY3Rpb24gYXJlUmVjdHNEaWZmZXJlbnQocmVjdEEsIHJlY3RCKSB7XG4gIGlmIChyZWN0QSAmJiByZWN0Qikge1xuICAgIHJldHVybiByZWN0QS50b3AgIT09IHJlY3RCLnRvcCB8fCByZWN0QS5yaWdodCAhPT0gcmVjdEIucmlnaHQgfHwgcmVjdEEuYm90dG9tICE9PSByZWN0Qi5ib3R0b20gfHwgcmVjdEEubGVmdCAhPT0gcmVjdEIubGVmdDtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG50aXBweS5zZXREZWZhdWx0UHJvcHMoe1xuICByZW5kZXI6IHJlbmRlclxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHRpcHB5O1xuZXhwb3J0IHsgYW5pbWF0ZUZpbGwsIGNyZWF0ZVNpbmdsZXRvbiwgZGVsZWdhdGUsIGZvbGxvd0N1cnNvciwgaGlkZUFsbCwgaW5saW5lUG9zaXRpb25pbmcsIFJPVU5EX0FSUk9XIGFzIHJvdW5kQXJyb3csIHN0aWNreSB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dGlwcHkuZXNtLmpzLm1hcFxuIiwiZXhwb3J0IGNvbnN0IFJPVU5EX0FSUk9XID1cbiAgJzxzdmcgd2lkdGg9XCIxNlwiIGhlaWdodD1cIjZcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PHBhdGggZD1cIk0wIDZzMS43OTYtLjAxMyA0LjY3LTMuNjE1QzUuODUxLjkgNi45My4wMDYgOCAwYzEuMDctLjAwNiAyLjE0OC44ODcgMy4zNDMgMi4zODVDMTQuMjMzIDYuMDA1IDE2IDYgMTYgNkgwelwiPjwvc3ZnPic7XG5cbmV4cG9ydCBjb25zdCBCT1hfQ0xBU1MgPSBgX19OQU1FU1BBQ0VfUFJFRklYX18tYm94YDtcbmV4cG9ydCBjb25zdCBDT05URU5UX0NMQVNTID0gYF9fTkFNRVNQQUNFX1BSRUZJWF9fLWNvbnRlbnRgO1xuZXhwb3J0IGNvbnN0IEJBQ0tEUk9QX0NMQVNTID0gYF9fTkFNRVNQQUNFX1BSRUZJWF9fLWJhY2tkcm9wYDtcbmV4cG9ydCBjb25zdCBBUlJPV19DTEFTUyA9IGBfX05BTUVTUEFDRV9QUkVGSVhfXy1hcnJvd2A7XG5leHBvcnQgY29uc3QgU1ZHX0FSUk9XX0NMQVNTID0gYF9fTkFNRVNQQUNFX1BSRUZJWF9fLXN2Zy1hcnJvd2A7XG5cbmV4cG9ydCBjb25zdCBUT1VDSF9PUFRJT05TID0ge3Bhc3NpdmU6IHRydWUsIGNhcHR1cmU6IHRydWV9O1xuXG5leHBvcnQgY29uc3QgVElQUFlfREVGQVVMVF9BUFBFTkRfVE8gPSAoKSA9PiBkb2N1bWVudC5ib2R5O1xuIiwiaW1wb3J0IHtCYXNlUGxhY2VtZW50LCBQbGFjZW1lbnR9IGZyb20gJy4vdHlwZXMnO1xuXG5leHBvcnQgZnVuY3Rpb24gaGFzT3duUHJvcGVydHkoXG4gIG9iajogUmVjb3JkPHN0cmluZywgdW5rbm93bj4sXG4gIGtleTogc3RyaW5nXG4pOiBib29sZWFuIHtcbiAgcmV0dXJuIHt9Lmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VmFsdWVBdEluZGV4T3JSZXR1cm48VD4oXG4gIHZhbHVlOiBUIHwgW1QgfCBudWxsLCBUIHwgbnVsbF0sXG4gIGluZGV4OiBudW1iZXIsXG4gIGRlZmF1bHRWYWx1ZTogVCB8IFtULCBUXVxuKTogVCB7XG4gIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgIGNvbnN0IHYgPSB2YWx1ZVtpbmRleF07XG4gICAgcmV0dXJuIHYgPT0gbnVsbFxuICAgICAgPyBBcnJheS5pc0FycmF5KGRlZmF1bHRWYWx1ZSlcbiAgICAgICAgPyBkZWZhdWx0VmFsdWVbaW5kZXhdXG4gICAgICAgIDogZGVmYXVsdFZhbHVlXG4gICAgICA6IHY7XG4gIH1cblxuICByZXR1cm4gdmFsdWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1R5cGUodmFsdWU6IGFueSwgdHlwZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gIGNvbnN0IHN0ciA9IHt9LnRvU3RyaW5nLmNhbGwodmFsdWUpO1xuICByZXR1cm4gc3RyLmluZGV4T2YoJ1tvYmplY3QnKSA9PT0gMCAmJiBzdHIuaW5kZXhPZihgJHt0eXBlfV1gKSA+IC0xO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW52b2tlV2l0aEFyZ3NPclJldHVybih2YWx1ZTogYW55LCBhcmdzOiBhbnlbXSk6IGFueSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicgPyB2YWx1ZSguLi5hcmdzKSA6IHZhbHVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVib3VuY2U8VD4oXG4gIGZuOiAoYXJnOiBUKSA9PiB2b2lkLFxuICBtczogbnVtYmVyXG4pOiAoYXJnOiBUKSA9PiB2b2lkIHtcbiAgLy8gQXZvaWQgd3JhcHBpbmcgaW4gYHNldFRpbWVvdXRgIGlmIG1zIGlzIDAgYW55d2F5XG4gIGlmIChtcyA9PT0gMCkge1xuICAgIHJldHVybiBmbjtcbiAgfVxuXG4gIGxldCB0aW1lb3V0OiBhbnk7XG5cbiAgcmV0dXJuIChhcmcpOiB2b2lkID0+IHtcbiAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgdGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgZm4oYXJnKTtcbiAgICB9LCBtcyk7XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVQcm9wZXJ0aWVzPFQ+KG9iajogVCwga2V5czogc3RyaW5nW10pOiBQYXJ0aWFsPFQ+IHtcbiAgY29uc3QgY2xvbmUgPSB7Li4ub2JqfTtcbiAga2V5cy5mb3JFYWNoKChrZXkpID0+IHtcbiAgICBkZWxldGUgKGNsb25lIGFzIGFueSlba2V5XTtcbiAgfSk7XG4gIHJldHVybiBjbG9uZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNwbGl0QnlTcGFjZXModmFsdWU6IHN0cmluZyk6IHN0cmluZ1tdIHtcbiAgcmV0dXJuIHZhbHVlLnNwbGl0KC9cXHMrLykuZmlsdGVyKEJvb2xlYW4pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplVG9BcnJheTxUPih2YWx1ZTogVCB8IFRbXSk6IFRbXSB7XG4gIHJldHVybiAoW10gYXMgVFtdKS5jb25jYXQodmFsdWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHVzaElmVW5pcXVlPFQ+KGFycjogVFtdLCB2YWx1ZTogVCk6IHZvaWQge1xuICBpZiAoYXJyLmluZGV4T2YodmFsdWUpID09PSAtMSkge1xuICAgIGFyci5wdXNoKHZhbHVlKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYXBwZW5kUHhJZk51bWJlcih2YWx1ZTogc3RyaW5nIHwgbnVtYmVyKTogc3RyaW5nIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicgPyBgJHt2YWx1ZX1weGAgOiB2YWx1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVuaXF1ZTxUPihhcnI6IFRbXSk6IFRbXSB7XG4gIHJldHVybiBhcnIuZmlsdGVyKChpdGVtLCBpbmRleCkgPT4gYXJyLmluZGV4T2YoaXRlbSkgPT09IGluZGV4KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldE51bWJlcih2YWx1ZTogc3RyaW5nIHwgbnVtYmVyKTogbnVtYmVyIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicgPyB2YWx1ZSA6IHBhcnNlRmxvYXQodmFsdWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QmFzZVBsYWNlbWVudChwbGFjZW1lbnQ6IFBsYWNlbWVudCk6IEJhc2VQbGFjZW1lbnQge1xuICByZXR1cm4gcGxhY2VtZW50LnNwbGl0KCctJylbMF0gYXMgQmFzZVBsYWNlbWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFycmF5RnJvbSh2YWx1ZTogQXJyYXlMaWtlPGFueT4pOiBhbnlbXSB7XG4gIHJldHVybiBbXS5zbGljZS5jYWxsKHZhbHVlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVVuZGVmaW5lZFByb3BzKFxuICBvYmo6IFJlY29yZDxzdHJpbmcsIHVua25vd24+XG4pOiBQYXJ0aWFsPFJlY29yZDxzdHJpbmcsIHVua25vd24+PiB7XG4gIHJldHVybiBPYmplY3Qua2V5cyhvYmopLnJlZHVjZSgoYWNjLCBrZXkpID0+IHtcbiAgICBpZiAob2JqW2tleV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgKGFjYyBhcyBhbnkpW2tleV0gPSBvYmpba2V5XTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWNjO1xuICB9LCB7fSk7XG59XG4iLCJpbXBvcnQge1JlZmVyZW5jZUVsZW1lbnQsIFRhcmdldHN9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHtQb3BwZXJUcmVlRGF0YX0gZnJvbSAnLi90eXBlcy1pbnRlcm5hbCc7XG5pbXBvcnQge2FycmF5RnJvbSwgaXNUeXBlLCBub3JtYWxpemVUb0FycmF5LCBnZXRCYXNlUGxhY2VtZW50fSBmcm9tICcuL3V0aWxzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGRpdigpOiBIVE1MRGl2RWxlbWVudCB7XG4gIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRWxlbWVudCh2YWx1ZTogdW5rbm93bik6IHZhbHVlIGlzIEVsZW1lbnQgfCBEb2N1bWVudEZyYWdtZW50IHtcbiAgcmV0dXJuIFsnRWxlbWVudCcsICdGcmFnbWVudCddLnNvbWUoKHR5cGUpID0+IGlzVHlwZSh2YWx1ZSwgdHlwZSkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNOb2RlTGlzdCh2YWx1ZTogdW5rbm93bik6IHZhbHVlIGlzIE5vZGVMaXN0IHtcbiAgcmV0dXJuIGlzVHlwZSh2YWx1ZSwgJ05vZGVMaXN0Jyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc01vdXNlRXZlbnQodmFsdWU6IHVua25vd24pOiB2YWx1ZSBpcyBNb3VzZUV2ZW50IHtcbiAgcmV0dXJuIGlzVHlwZSh2YWx1ZSwgJ01vdXNlRXZlbnQnKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUmVmZXJlbmNlRWxlbWVudCh2YWx1ZTogYW55KTogdmFsdWUgaXMgUmVmZXJlbmNlRWxlbWVudCB7XG4gIHJldHVybiAhISh2YWx1ZSAmJiB2YWx1ZS5fdGlwcHkgJiYgdmFsdWUuX3RpcHB5LnJlZmVyZW5jZSA9PT0gdmFsdWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QXJyYXlPZkVsZW1lbnRzKHZhbHVlOiBUYXJnZXRzKTogRWxlbWVudFtdIHtcbiAgaWYgKGlzRWxlbWVudCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gW3ZhbHVlXTtcbiAgfVxuXG4gIGlmIChpc05vZGVMaXN0KHZhbHVlKSkge1xuICAgIHJldHVybiBhcnJheUZyb20odmFsdWUpO1xuICB9XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIGFycmF5RnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHZhbHVlKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRUcmFuc2l0aW9uRHVyYXRpb24oXG4gIGVsczogKEhUTUxEaXZFbGVtZW50IHwgbnVsbClbXSxcbiAgdmFsdWU6IG51bWJlclxuKTogdm9pZCB7XG4gIGVscy5mb3JFYWNoKChlbCkgPT4ge1xuICAgIGlmIChlbCkge1xuICAgICAgZWwuc3R5bGUudHJhbnNpdGlvbkR1cmF0aW9uID0gYCR7dmFsdWV9bXNgO1xuICAgIH1cbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRWaXNpYmlsaXR5U3RhdGUoXG4gIGVsczogKEhUTUxEaXZFbGVtZW50IHwgbnVsbClbXSxcbiAgc3RhdGU6ICd2aXNpYmxlJyB8ICdoaWRkZW4nXG4pOiB2b2lkIHtcbiAgZWxzLmZvckVhY2goKGVsKSA9PiB7XG4gICAgaWYgKGVsKSB7XG4gICAgICBlbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtc3RhdGUnLCBzdGF0ZSk7XG4gICAgfVxuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldE93bmVyRG9jdW1lbnQoXG4gIGVsZW1lbnRPckVsZW1lbnRzOiBFbGVtZW50IHwgRWxlbWVudFtdXG4pOiBEb2N1bWVudCB7XG4gIGNvbnN0IFtlbGVtZW50XSA9IG5vcm1hbGl6ZVRvQXJyYXkoZWxlbWVudE9yRWxlbWVudHMpO1xuXG4gIC8vIEVsZW1lbnRzIGNyZWF0ZWQgdmlhIGEgPHRlbXBsYXRlPiBoYXZlIGFuIG93bmVyRG9jdW1lbnQgd2l0aCBubyByZWZlcmVuY2UgdG8gdGhlIGJvZHlcbiAgcmV0dXJuIGVsZW1lbnQ/Lm93bmVyRG9jdW1lbnQ/LmJvZHkgPyBlbGVtZW50Lm93bmVyRG9jdW1lbnQgOiBkb2N1bWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzQ3Vyc29yT3V0c2lkZUludGVyYWN0aXZlQm9yZGVyKFxuICBwb3BwZXJUcmVlRGF0YTogUG9wcGVyVHJlZURhdGFbXSxcbiAgZXZlbnQ6IE1vdXNlRXZlbnRcbik6IGJvb2xlYW4ge1xuICBjb25zdCB7Y2xpZW50WCwgY2xpZW50WX0gPSBldmVudDtcblxuICByZXR1cm4gcG9wcGVyVHJlZURhdGEuZXZlcnkoKHtwb3BwZXJSZWN0LCBwb3BwZXJTdGF0ZSwgcHJvcHN9KSA9PiB7XG4gICAgY29uc3Qge2ludGVyYWN0aXZlQm9yZGVyfSA9IHByb3BzO1xuICAgIGNvbnN0IGJhc2VQbGFjZW1lbnQgPSBnZXRCYXNlUGxhY2VtZW50KHBvcHBlclN0YXRlLnBsYWNlbWVudCk7XG4gICAgY29uc3Qgb2Zmc2V0RGF0YSA9IHBvcHBlclN0YXRlLm1vZGlmaWVyc0RhdGEub2Zmc2V0O1xuXG4gICAgaWYgKCFvZmZzZXREYXRhKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBjb25zdCB0b3BEaXN0YW5jZSA9IGJhc2VQbGFjZW1lbnQgPT09ICdib3R0b20nID8gb2Zmc2V0RGF0YS50b3AhLnkgOiAwO1xuICAgIGNvbnN0IGJvdHRvbURpc3RhbmNlID0gYmFzZVBsYWNlbWVudCA9PT0gJ3RvcCcgPyBvZmZzZXREYXRhLmJvdHRvbSEueSA6IDA7XG4gICAgY29uc3QgbGVmdERpc3RhbmNlID0gYmFzZVBsYWNlbWVudCA9PT0gJ3JpZ2h0JyA/IG9mZnNldERhdGEubGVmdCEueCA6IDA7XG4gICAgY29uc3QgcmlnaHREaXN0YW5jZSA9IGJhc2VQbGFjZW1lbnQgPT09ICdsZWZ0JyA/IG9mZnNldERhdGEucmlnaHQhLnggOiAwO1xuXG4gICAgY29uc3QgZXhjZWVkc1RvcCA9XG4gICAgICBwb3BwZXJSZWN0LnRvcCAtIGNsaWVudFkgKyB0b3BEaXN0YW5jZSA+IGludGVyYWN0aXZlQm9yZGVyO1xuICAgIGNvbnN0IGV4Y2VlZHNCb3R0b20gPVxuICAgICAgY2xpZW50WSAtIHBvcHBlclJlY3QuYm90dG9tIC0gYm90dG9tRGlzdGFuY2UgPiBpbnRlcmFjdGl2ZUJvcmRlcjtcbiAgICBjb25zdCBleGNlZWRzTGVmdCA9XG4gICAgICBwb3BwZXJSZWN0LmxlZnQgLSBjbGllbnRYICsgbGVmdERpc3RhbmNlID4gaW50ZXJhY3RpdmVCb3JkZXI7XG4gICAgY29uc3QgZXhjZWVkc1JpZ2h0ID1cbiAgICAgIGNsaWVudFggLSBwb3BwZXJSZWN0LnJpZ2h0IC0gcmlnaHREaXN0YW5jZSA+IGludGVyYWN0aXZlQm9yZGVyO1xuXG4gICAgcmV0dXJuIGV4Y2VlZHNUb3AgfHwgZXhjZWVkc0JvdHRvbSB8fCBleGNlZWRzTGVmdCB8fCBleGNlZWRzUmlnaHQ7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlVHJhbnNpdGlvbkVuZExpc3RlbmVyKFxuICBib3g6IEhUTUxEaXZFbGVtZW50LFxuICBhY3Rpb246ICdhZGQnIHwgJ3JlbW92ZScsXG4gIGxpc3RlbmVyOiAoZXZlbnQ6IFRyYW5zaXRpb25FdmVudCkgPT4gdm9pZFxuKTogdm9pZCB7XG4gIGNvbnN0IG1ldGhvZCA9IGAke2FjdGlvbn1FdmVudExpc3RlbmVyYCBhc1xuICAgIHwgJ2FkZEV2ZW50TGlzdGVuZXInXG4gICAgfCAncmVtb3ZlRXZlbnRMaXN0ZW5lcic7XG5cbiAgLy8gc29tZSBicm93c2VycyBhcHBhcmVudGx5IHN1cHBvcnQgYHRyYW5zaXRpb25gICh1bnByZWZpeGVkKSBidXQgb25seSBmaXJlXG4gIC8vIGB3ZWJraXRUcmFuc2l0aW9uRW5kYC4uLlxuICBbJ3RyYW5zaXRpb25lbmQnLCAnd2Via2l0VHJhbnNpdGlvbkVuZCddLmZvckVhY2goKGV2ZW50KSA9PiB7XG4gICAgYm94W21ldGhvZF0oZXZlbnQsIGxpc3RlbmVyIGFzIEV2ZW50TGlzdGVuZXIpO1xuICB9KTtcbn1cblxuLyoqXG4gKiBDb21wYXJlZCB0byB4eHguY29udGFpbnMsIHRoaXMgZnVuY3Rpb24gd29ya3MgZm9yIGRvbSBzdHJ1Y3R1cmVzIHdpdGggc2hhZG93XG4gKiBkb21cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFjdHVhbENvbnRhaW5zKHBhcmVudDogRWxlbWVudCwgY2hpbGQ6IEVsZW1lbnQpOiBib29sZWFuIHtcbiAgbGV0IHRhcmdldCA9IGNoaWxkO1xuICB3aGlsZSAodGFyZ2V0KSB7XG4gICAgaWYgKHBhcmVudC5jb250YWlucyh0YXJnZXQpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgdGFyZ2V0ID0gKHRhcmdldC5nZXRSb290Tm9kZT8uKCkgYXMgYW55KT8uaG9zdDtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG4iLCJpbXBvcnQge1RPVUNIX09QVElPTlN9IGZyb20gJy4vY29uc3RhbnRzJztcbmltcG9ydCB7aXNSZWZlcmVuY2VFbGVtZW50fSBmcm9tICcuL2RvbS11dGlscyc7XG5cbmV4cG9ydCBjb25zdCBjdXJyZW50SW5wdXQgPSB7aXNUb3VjaDogZmFsc2V9O1xubGV0IGxhc3RNb3VzZU1vdmVUaW1lID0gMDtcblxuLyoqXG4gKiBXaGVuIGEgYHRvdWNoc3RhcnRgIGV2ZW50IGlzIGZpcmVkLCBpdCdzIGFzc3VtZWQgdGhlIHVzZXIgaXMgdXNpbmcgdG91Y2hcbiAqIGlucHV0LiBXZSdsbCBiaW5kIGEgYG1vdXNlbW92ZWAgZXZlbnQgbGlzdGVuZXIgdG8gbGlzdGVuIGZvciBtb3VzZSBpbnB1dCBpblxuICogdGhlIGZ1dHVyZS4gVGhpcyB3YXksIHRoZSBgaXNUb3VjaGAgcHJvcGVydHkgaXMgZnVsbHkgZHluYW1pYyBhbmQgd2lsbCBoYW5kbGVcbiAqIGh5YnJpZCBkZXZpY2VzIHRoYXQgdXNlIGEgbWl4IG9mIHRvdWNoICsgbW91c2UgaW5wdXQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBvbkRvY3VtZW50VG91Y2hTdGFydCgpOiB2b2lkIHtcbiAgaWYgKGN1cnJlbnRJbnB1dC5pc1RvdWNoKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY3VycmVudElucHV0LmlzVG91Y2ggPSB0cnVlO1xuXG4gIGlmICh3aW5kb3cucGVyZm9ybWFuY2UpIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBvbkRvY3VtZW50TW91c2VNb3ZlKTtcbiAgfVxufVxuXG4vKipcbiAqIFdoZW4gdHdvIGBtb3VzZW1vdmVgIGV2ZW50IGFyZSBmaXJlZCBjb25zZWN1dGl2ZWx5IHdpdGhpbiAyMG1zLCBpdCdzIGFzc3VtZWRcbiAqIHRoZSB1c2VyIGlzIHVzaW5nIG1vdXNlIGlucHV0IGFnYWluLiBgbW91c2Vtb3ZlYCBjYW4gZmlyZSBvbiB0b3VjaCBkZXZpY2VzIGFzXG4gKiB3ZWxsLCBidXQgdmVyeSByYXJlbHkgdGhhdCBxdWlja2x5LlxuICovXG5leHBvcnQgZnVuY3Rpb24gb25Eb2N1bWVudE1vdXNlTW92ZSgpOiB2b2lkIHtcbiAgY29uc3Qgbm93ID0gcGVyZm9ybWFuY2Uubm93KCk7XG5cbiAgaWYgKG5vdyAtIGxhc3RNb3VzZU1vdmVUaW1lIDwgMjApIHtcbiAgICBjdXJyZW50SW5wdXQuaXNUb3VjaCA9IGZhbHNlO1xuXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgb25Eb2N1bWVudE1vdXNlTW92ZSk7XG4gIH1cblxuICBsYXN0TW91c2VNb3ZlVGltZSA9IG5vdztcbn1cblxuLyoqXG4gKiBXaGVuIGFuIGVsZW1lbnQgaXMgaW4gZm9jdXMgYW5kIGhhcyBhIHRpcHB5LCBsZWF2aW5nIHRoZSB0YWIvd2luZG93IGFuZFxuICogcmV0dXJuaW5nIGNhdXNlcyBpdCB0byBzaG93IGFnYWluLiBGb3IgbW91c2UgdXNlcnMgdGhpcyBpcyB1bmV4cGVjdGVkLCBidXRcbiAqIGZvciBrZXlib2FyZCB1c2UgaXQgbWFrZXMgc2Vuc2UuXG4gKiBUT0RPOiBmaW5kIGEgYmV0dGVyIHRlY2huaXF1ZSB0byBzb2x2ZSB0aGlzIHByb2JsZW1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG9uV2luZG93Qmx1cigpOiB2b2lkIHtcbiAgY29uc3QgYWN0aXZlRWxlbWVudCA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQgfCBudWxsO1xuXG4gIGlmIChpc1JlZmVyZW5jZUVsZW1lbnQoYWN0aXZlRWxlbWVudCkpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IGFjdGl2ZUVsZW1lbnQuX3RpcHB5ITtcblxuICAgIGlmIChhY3RpdmVFbGVtZW50LmJsdXIgJiYgIWluc3RhbmNlLnN0YXRlLmlzVmlzaWJsZSkge1xuICAgICAgYWN0aXZlRWxlbWVudC5ibHVyKCk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJpbmRHbG9iYWxFdmVudExpc3RlbmVycygpOiB2b2lkIHtcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIG9uRG9jdW1lbnRUb3VjaFN0YXJ0LCBUT1VDSF9PUFRJT05TKTtcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCBvbldpbmRvd0JsdXIpO1xufVxuIiwiZXhwb3J0IGNvbnN0IGlzQnJvd3NlciA9XG4gIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCc7XG5cbmV4cG9ydCBjb25zdCBpc0lFMTEgPSBpc0Jyb3dzZXJcbiAgPyAvLyBAdHMtaWdub3JlXG4gICAgISF3aW5kb3cubXNDcnlwdG9cbiAgOiBmYWxzZTtcbiIsImltcG9ydCB7VGFyZ2V0c30gZnJvbSAnLi90eXBlcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVNZW1vcnlMZWFrV2FybmluZyhtZXRob2Q6IHN0cmluZyk6IHN0cmluZyB7XG4gIGNvbnN0IHR4dCA9IG1ldGhvZCA9PT0gJ2Rlc3Ryb3knID8gJ24gYWxyZWFkeS0nIDogJyAnO1xuXG4gIHJldHVybiBbXG4gICAgYCR7bWV0aG9kfSgpIHdhcyBjYWxsZWQgb24gYSR7dHh0fWRlc3Ryb3llZCBpbnN0YW5jZS4gVGhpcyBpcyBhIG5vLW9wIGJ1dGAsXG4gICAgJ2luZGljYXRlcyBhIHBvdGVudGlhbCBtZW1vcnkgbGVhay4nLFxuICBdLmpvaW4oJyAnKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFuKHZhbHVlOiBzdHJpbmcpOiBzdHJpbmcge1xuICBjb25zdCBzcGFjZXNBbmRUYWJzID0gL1sgXFx0XXsyLH0vZztcbiAgY29uc3QgbGluZVN0YXJ0V2l0aFNwYWNlcyA9IC9eWyBcXHRdKi9nbTtcblxuICByZXR1cm4gdmFsdWVcbiAgICAucmVwbGFjZShzcGFjZXNBbmRUYWJzLCAnICcpXG4gICAgLnJlcGxhY2UobGluZVN0YXJ0V2l0aFNwYWNlcywgJycpXG4gICAgLnRyaW0oKTtcbn1cblxuZnVuY3Rpb24gZ2V0RGV2TWVzc2FnZShtZXNzYWdlOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gY2xlYW4oYFxuICAlY3RpcHB5LmpzXG5cbiAgJWMke2NsZWFuKG1lc3NhZ2UpfVxuXG4gICVj8J+Rt+KAjSBUaGlzIGlzIGEgZGV2ZWxvcG1lbnQtb25seSBtZXNzYWdlLiBJdCB3aWxsIGJlIHJlbW92ZWQgaW4gcHJvZHVjdGlvbi5cbiAgYCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRGb3JtYXR0ZWRNZXNzYWdlKG1lc3NhZ2U6IHN0cmluZyk6IHN0cmluZ1tdIHtcbiAgcmV0dXJuIFtcbiAgICBnZXREZXZNZXNzYWdlKG1lc3NhZ2UpLFxuICAgIC8vIHRpdGxlXG4gICAgJ2NvbG9yOiAjMDBDNTg0OyBmb250LXNpemU6IDEuM2VtOyBmb250LXdlaWdodDogYm9sZDsnLFxuICAgIC8vIG1lc3NhZ2VcbiAgICAnbGluZS1oZWlnaHQ6IDEuNScsXG4gICAgLy8gZm9vdGVyXG4gICAgJ2NvbG9yOiAjYTZhMDk1OycsXG4gIF07XG59XG5cbi8vIEFzc3VtZSB3YXJuaW5ncyBhbmQgZXJyb3JzIG5ldmVyIGhhdmUgdGhlIHNhbWUgbWVzc2FnZVxubGV0IHZpc2l0ZWRNZXNzYWdlczogU2V0PHN0cmluZz47XG5pZiAoX19ERVZfXykge1xuICByZXNldFZpc2l0ZWRNZXNzYWdlcygpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVzZXRWaXNpdGVkTWVzc2FnZXMoKTogdm9pZCB7XG4gIHZpc2l0ZWRNZXNzYWdlcyA9IG5ldyBTZXQoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHdhcm5XaGVuKGNvbmRpdGlvbjogYm9vbGVhbiwgbWVzc2FnZTogc3RyaW5nKTogdm9pZCB7XG4gIGlmIChjb25kaXRpb24gJiYgIXZpc2l0ZWRNZXNzYWdlcy5oYXMobWVzc2FnZSkpIHtcbiAgICB2aXNpdGVkTWVzc2FnZXMuYWRkKG1lc3NhZ2UpO1xuICAgIGNvbnNvbGUud2FybiguLi5nZXRGb3JtYXR0ZWRNZXNzYWdlKG1lc3NhZ2UpKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZXJyb3JXaGVuKGNvbmRpdGlvbjogYm9vbGVhbiwgbWVzc2FnZTogc3RyaW5nKTogdm9pZCB7XG4gIGlmIChjb25kaXRpb24gJiYgIXZpc2l0ZWRNZXNzYWdlcy5oYXMobWVzc2FnZSkpIHtcbiAgICB2aXNpdGVkTWVzc2FnZXMuYWRkKG1lc3NhZ2UpO1xuICAgIGNvbnNvbGUuZXJyb3IoLi4uZ2V0Rm9ybWF0dGVkTWVzc2FnZShtZXNzYWdlKSk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhbGlkYXRlVGFyZ2V0cyh0YXJnZXRzOiBUYXJnZXRzKTogdm9pZCB7XG4gIGNvbnN0IGRpZFBhc3NGYWxzeVZhbHVlID0gIXRhcmdldHM7XG4gIGNvbnN0IGRpZFBhc3NQbGFpbk9iamVjdCA9XG4gICAgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHRhcmdldHMpID09PSAnW29iamVjdCBPYmplY3RdJyAmJlxuICAgICEodGFyZ2V0cyBhcyBhbnkpLmFkZEV2ZW50TGlzdGVuZXI7XG5cbiAgZXJyb3JXaGVuKFxuICAgIGRpZFBhc3NGYWxzeVZhbHVlLFxuICAgIFtcbiAgICAgICd0aXBweSgpIHdhcyBwYXNzZWQnLFxuICAgICAgJ2AnICsgU3RyaW5nKHRhcmdldHMpICsgJ2AnLFxuICAgICAgJ2FzIGl0cyB0YXJnZXRzIChmaXJzdCkgYXJndW1lbnQuIFZhbGlkIHR5cGVzIGFyZTogU3RyaW5nLCBFbGVtZW50LCcsXG4gICAgICAnRWxlbWVudFtdLCBvciBOb2RlTGlzdC4nLFxuICAgIF0uam9pbignICcpXG4gICk7XG5cbiAgZXJyb3JXaGVuKFxuICAgIGRpZFBhc3NQbGFpbk9iamVjdCxcbiAgICBbXG4gICAgICAndGlwcHkoKSB3YXMgcGFzc2VkIGEgcGxhaW4gb2JqZWN0IHdoaWNoIGlzIG5vdCBzdXBwb3J0ZWQgYXMgYW4gYXJndW1lbnQnLFxuICAgICAgJ2ZvciB2aXJ0dWFsIHBvc2l0aW9uaW5nLiBVc2UgcHJvcHMuZ2V0UmVmZXJlbmNlQ2xpZW50UmVjdCBpbnN0ZWFkLicsXG4gICAgXS5qb2luKCcgJylcbiAgKTtcbn1cbiIsImltcG9ydCB7RGVmYXVsdFByb3BzLCBQbHVnaW4sIFByb3BzLCBSZWZlcmVuY2VFbGVtZW50LCBUaXBweX0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQge1xuICBoYXNPd25Qcm9wZXJ0eSxcbiAgcmVtb3ZlUHJvcGVydGllcyxcbiAgaW52b2tlV2l0aEFyZ3NPclJldHVybixcbn0gZnJvbSAnLi91dGlscyc7XG5pbXBvcnQge3dhcm5XaGVufSBmcm9tICcuL3ZhbGlkYXRpb24nO1xuaW1wb3J0IHtUSVBQWV9ERUZBVUxUX0FQUEVORF9UT30gZnJvbSAnLi9jb25zdGFudHMnO1xuXG5jb25zdCBwbHVnaW5Qcm9wcyA9IHtcbiAgYW5pbWF0ZUZpbGw6IGZhbHNlLFxuICBmb2xsb3dDdXJzb3I6IGZhbHNlLFxuICBpbmxpbmVQb3NpdGlvbmluZzogZmFsc2UsXG4gIHN0aWNreTogZmFsc2UsXG59O1xuXG5jb25zdCByZW5kZXJQcm9wcyA9IHtcbiAgYWxsb3dIVE1MOiBmYWxzZSxcbiAgYW5pbWF0aW9uOiAnZmFkZScsXG4gIGFycm93OiB0cnVlLFxuICBjb250ZW50OiAnJyxcbiAgaW5lcnRpYTogZmFsc2UsXG4gIG1heFdpZHRoOiAzNTAsXG4gIHJvbGU6ICd0b29sdGlwJyxcbiAgdGhlbWU6ICcnLFxuICB6SW5kZXg6IDk5OTksXG59O1xuXG5leHBvcnQgY29uc3QgZGVmYXVsdFByb3BzOiBEZWZhdWx0UHJvcHMgPSB7XG4gIGFwcGVuZFRvOiBUSVBQWV9ERUZBVUxUX0FQUEVORF9UTyxcbiAgYXJpYToge1xuICAgIGNvbnRlbnQ6ICdhdXRvJyxcbiAgICBleHBhbmRlZDogJ2F1dG8nLFxuICB9LFxuICBkZWxheTogMCxcbiAgZHVyYXRpb246IFszMDAsIDI1MF0sXG4gIGdldFJlZmVyZW5jZUNsaWVudFJlY3Q6IG51bGwsXG4gIGhpZGVPbkNsaWNrOiB0cnVlLFxuICBpZ25vcmVBdHRyaWJ1dGVzOiBmYWxzZSxcbiAgaW50ZXJhY3RpdmU6IGZhbHNlLFxuICBpbnRlcmFjdGl2ZUJvcmRlcjogMixcbiAgaW50ZXJhY3RpdmVEZWJvdW5jZTogMCxcbiAgbW92ZVRyYW5zaXRpb246ICcnLFxuICBvZmZzZXQ6IFswLCAxMF0sXG4gIG9uQWZ0ZXJVcGRhdGUoKSB7fSxcbiAgb25CZWZvcmVVcGRhdGUoKSB7fSxcbiAgb25DcmVhdGUoKSB7fSxcbiAgb25EZXN0cm95KCkge30sXG4gIG9uSGlkZGVuKCkge30sXG4gIG9uSGlkZSgpIHt9LFxuICBvbk1vdW50KCkge30sXG4gIG9uU2hvdygpIHt9LFxuICBvblNob3duKCkge30sXG4gIG9uVHJpZ2dlcigpIHt9LFxuICBvblVudHJpZ2dlcigpIHt9LFxuICBvbkNsaWNrT3V0c2lkZSgpIHt9LFxuICBwbGFjZW1lbnQ6ICd0b3AnLFxuICBwbHVnaW5zOiBbXSxcbiAgcG9wcGVyT3B0aW9uczoge30sXG4gIHJlbmRlcjogbnVsbCxcbiAgc2hvd09uQ3JlYXRlOiBmYWxzZSxcbiAgdG91Y2g6IHRydWUsXG4gIHRyaWdnZXI6ICdtb3VzZWVudGVyIGZvY3VzJyxcbiAgdHJpZ2dlclRhcmdldDogbnVsbCxcbiAgLi4ucGx1Z2luUHJvcHMsXG4gIC4uLnJlbmRlclByb3BzLFxufTtcblxuY29uc3QgZGVmYXVsdEtleXMgPSBPYmplY3Qua2V5cyhkZWZhdWx0UHJvcHMpO1xuXG5leHBvcnQgY29uc3Qgc2V0RGVmYXVsdFByb3BzOiBUaXBweVsnc2V0RGVmYXVsdFByb3BzJ10gPSAocGFydGlhbFByb3BzKSA9PiB7XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gIGlmIChfX0RFVl9fKSB7XG4gICAgdmFsaWRhdGVQcm9wcyhwYXJ0aWFsUHJvcHMsIFtdKTtcbiAgfVxuXG4gIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhwYXJ0aWFsUHJvcHMpIGFzIEFycmF5PGtleW9mIERlZmF1bHRQcm9wcz47XG4gIGtleXMuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgKGRlZmF1bHRQcm9wcyBhcyBhbnkpW2tleV0gPSBwYXJ0aWFsUHJvcHNba2V5XTtcbiAgfSk7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RXh0ZW5kZWRQYXNzZWRQcm9wcyhcbiAgcGFzc2VkUHJvcHM6IFBhcnRpYWw8UHJvcHM+ICYgUmVjb3JkPHN0cmluZywgdW5rbm93bj5cbik6IFBhcnRpYWw8UHJvcHM+IHtcbiAgY29uc3QgcGx1Z2lucyA9IHBhc3NlZFByb3BzLnBsdWdpbnMgfHwgW107XG4gIGNvbnN0IHBsdWdpblByb3BzID0gcGx1Z2lucy5yZWR1Y2U8UmVjb3JkPHN0cmluZywgdW5rbm93bj4+KChhY2MsIHBsdWdpbikgPT4ge1xuICAgIGNvbnN0IHtuYW1lLCBkZWZhdWx0VmFsdWV9ID0gcGx1Z2luO1xuXG4gICAgaWYgKG5hbWUpIHtcbiAgICAgIGFjY1tuYW1lXSA9XG4gICAgICAgIHBhc3NlZFByb3BzW25hbWVdICE9PSB1bmRlZmluZWRcbiAgICAgICAgICA/IHBhc3NlZFByb3BzW25hbWVdXG4gICAgICAgICAgOiAoZGVmYXVsdFByb3BzIGFzIGFueSlbbmFtZV0gPz8gZGVmYXVsdFZhbHVlO1xuICAgIH1cblxuICAgIHJldHVybiBhY2M7XG4gIH0sIHt9KTtcblxuICByZXR1cm4ge1xuICAgIC4uLnBhc3NlZFByb3BzLFxuICAgIC4uLnBsdWdpblByb3BzLFxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGF0YUF0dHJpYnV0ZVByb3BzKFxuICByZWZlcmVuY2U6IFJlZmVyZW5jZUVsZW1lbnQsXG4gIHBsdWdpbnM6IFBsdWdpbltdXG4pOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiB7XG4gIGNvbnN0IHByb3BLZXlzID0gcGx1Z2luc1xuICAgID8gT2JqZWN0LmtleXMoZ2V0RXh0ZW5kZWRQYXNzZWRQcm9wcyh7Li4uZGVmYXVsdFByb3BzLCBwbHVnaW5zfSkpXG4gICAgOiBkZWZhdWx0S2V5cztcblxuICBjb25zdCBwcm9wcyA9IHByb3BLZXlzLnJlZHVjZShcbiAgICAoYWNjOiBQYXJ0aWFsPFByb3BzPiAmIFJlY29yZDxzdHJpbmcsIHVua25vd24+LCBrZXkpID0+IHtcbiAgICAgIGNvbnN0IHZhbHVlQXNTdHJpbmcgPSAoXG4gICAgICAgIHJlZmVyZW5jZS5nZXRBdHRyaWJ1dGUoYGRhdGEtdGlwcHktJHtrZXl9YCkgfHwgJydcbiAgICAgICkudHJpbSgpO1xuXG4gICAgICBpZiAoIXZhbHVlQXNTdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgIH1cblxuICAgICAgaWYgKGtleSA9PT0gJ2NvbnRlbnQnKSB7XG4gICAgICAgIGFjY1trZXldID0gdmFsdWVBc1N0cmluZztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgYWNjW2tleV0gPSBKU09OLnBhcnNlKHZhbHVlQXNTdHJpbmcpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgYWNjW2tleV0gPSB2YWx1ZUFzU3RyaW5nO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBhY2M7XG4gICAgfSxcbiAgICB7fVxuICApO1xuXG4gIHJldHVybiBwcm9wcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV2YWx1YXRlUHJvcHMoXG4gIHJlZmVyZW5jZTogUmVmZXJlbmNlRWxlbWVudCxcbiAgcHJvcHM6IFByb3BzXG4pOiBQcm9wcyB7XG4gIGNvbnN0IG91dCA9IHtcbiAgICAuLi5wcm9wcyxcbiAgICBjb250ZW50OiBpbnZva2VXaXRoQXJnc09yUmV0dXJuKHByb3BzLmNvbnRlbnQsIFtyZWZlcmVuY2VdKSxcbiAgICAuLi4ocHJvcHMuaWdub3JlQXR0cmlidXRlc1xuICAgICAgPyB7fVxuICAgICAgOiBnZXREYXRhQXR0cmlidXRlUHJvcHMocmVmZXJlbmNlLCBwcm9wcy5wbHVnaW5zKSksXG4gIH07XG5cbiAgb3V0LmFyaWEgPSB7XG4gICAgLi4uZGVmYXVsdFByb3BzLmFyaWEsXG4gICAgLi4ub3V0LmFyaWEsXG4gIH07XG5cbiAgb3V0LmFyaWEgPSB7XG4gICAgZXhwYW5kZWQ6XG4gICAgICBvdXQuYXJpYS5leHBhbmRlZCA9PT0gJ2F1dG8nID8gcHJvcHMuaW50ZXJhY3RpdmUgOiBvdXQuYXJpYS5leHBhbmRlZCxcbiAgICBjb250ZW50OlxuICAgICAgb3V0LmFyaWEuY29udGVudCA9PT0gJ2F1dG8nXG4gICAgICAgID8gcHJvcHMuaW50ZXJhY3RpdmVcbiAgICAgICAgICA/IG51bGxcbiAgICAgICAgICA6ICdkZXNjcmliZWRieSdcbiAgICAgICAgOiBvdXQuYXJpYS5jb250ZW50LFxuICB9O1xuXG4gIHJldHVybiBvdXQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YWxpZGF0ZVByb3BzKFxuICBwYXJ0aWFsUHJvcHM6IFBhcnRpYWw8UHJvcHM+ID0ge30sXG4gIHBsdWdpbnM6IFBsdWdpbltdID0gW11cbik6IHZvaWQge1xuICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMocGFydGlhbFByb3BzKSBhcyBBcnJheTxrZXlvZiBQcm9wcz47XG4gIGtleXMuZm9yRWFjaCgocHJvcCkgPT4ge1xuICAgIGNvbnN0IG5vblBsdWdpblByb3BzID0gcmVtb3ZlUHJvcGVydGllcyhcbiAgICAgIGRlZmF1bHRQcm9wcyxcbiAgICAgIE9iamVjdC5rZXlzKHBsdWdpblByb3BzKVxuICAgICk7XG5cbiAgICBsZXQgZGlkUGFzc1Vua25vd25Qcm9wID0gIWhhc093blByb3BlcnR5KG5vblBsdWdpblByb3BzLCBwcm9wKTtcblxuICAgIC8vIENoZWNrIGlmIHRoZSBwcm9wIGV4aXN0cyBpbiBgcGx1Z2luc2BcbiAgICBpZiAoZGlkUGFzc1Vua25vd25Qcm9wKSB7XG4gICAgICBkaWRQYXNzVW5rbm93blByb3AgPVxuICAgICAgICBwbHVnaW5zLmZpbHRlcigocGx1Z2luKSA9PiBwbHVnaW4ubmFtZSA9PT0gcHJvcCkubGVuZ3RoID09PSAwO1xuICAgIH1cblxuICAgIHdhcm5XaGVuKFxuICAgICAgZGlkUGFzc1Vua25vd25Qcm9wLFxuICAgICAgW1xuICAgICAgICBgXFxgJHtwcm9wfVxcYGAsXG4gICAgICAgIFwiaXMgbm90IGEgdmFsaWQgcHJvcC4gWW91IG1heSBoYXZlIHNwZWxsZWQgaXQgaW5jb3JyZWN0bHksIG9yIGlmIGl0J3NcIixcbiAgICAgICAgJ2EgcGx1Z2luLCBmb3Jnb3QgdG8gcGFzcyBpdCBpbiBhbiBhcnJheSBhcyBwcm9wcy5wbHVnaW5zLicsXG4gICAgICAgICdcXG5cXG4nLFxuICAgICAgICAnQWxsIHByb3BzOiBodHRwczovL2F0b21pa3MuZ2l0aHViLmlvL3RpcHB5anMvdjYvYWxsLXByb3BzL1xcbicsXG4gICAgICAgICdQbHVnaW5zOiBodHRwczovL2F0b21pa3MuZ2l0aHViLmlvL3RpcHB5anMvdjYvcGx1Z2lucy8nLFxuICAgICAgXS5qb2luKCcgJylcbiAgICApO1xuICB9KTtcbn1cbiIsImltcG9ydCB7XG4gIEFSUk9XX0NMQVNTLFxuICBCQUNLRFJPUF9DTEFTUyxcbiAgQk9YX0NMQVNTLFxuICBDT05URU5UX0NMQVNTLFxuICBTVkdfQVJST1dfQ0xBU1MsXG59IGZyb20gJy4vY29uc3RhbnRzJztcbmltcG9ydCB7ZGl2LCBpc0VsZW1lbnR9IGZyb20gJy4vZG9tLXV0aWxzJztcbmltcG9ydCB7SW5zdGFuY2UsIFBvcHBlckVsZW1lbnQsIFByb3BzfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7UG9wcGVyQ2hpbGRyZW59IGZyb20gJy4vdHlwZXMtaW50ZXJuYWwnO1xuaW1wb3J0IHthcnJheUZyb219IGZyb20gJy4vdXRpbHMnO1xuXG4vLyBGaXJlZm94IGV4dGVuc2lvbnMgZG9uJ3QgYWxsb3cgLmlubmVySFRNTCA9IFwiLi4uXCIgcHJvcGVydHkuIFRoaXMgdHJpY2tzIGl0LlxuY29uc3QgaW5uZXJIVE1MID0gKCk6ICdpbm5lckhUTUwnID0+ICdpbm5lckhUTUwnO1xuXG5mdW5jdGlvbiBkYW5nZXJvdXNseVNldElubmVySFRNTChlbGVtZW50OiBFbGVtZW50LCBodG1sOiBzdHJpbmcpOiB2b2lkIHtcbiAgZWxlbWVudFtpbm5lckhUTUwoKV0gPSBodG1sO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVBcnJvd0VsZW1lbnQodmFsdWU6IFByb3BzWydhcnJvdyddKTogSFRNTERpdkVsZW1lbnQge1xuICBjb25zdCBhcnJvdyA9IGRpdigpO1xuXG4gIGlmICh2YWx1ZSA9PT0gdHJ1ZSkge1xuICAgIGFycm93LmNsYXNzTmFtZSA9IEFSUk9XX0NMQVNTO1xuICB9IGVsc2Uge1xuICAgIGFycm93LmNsYXNzTmFtZSA9IFNWR19BUlJPV19DTEFTUztcblxuICAgIGlmIChpc0VsZW1lbnQodmFsdWUpKSB7XG4gICAgICBhcnJvdy5hcHBlbmRDaGlsZCh2YWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MKGFycm93LCB2YWx1ZSBhcyBzdHJpbmcpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBhcnJvdztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldENvbnRlbnQoY29udGVudDogSFRNTERpdkVsZW1lbnQsIHByb3BzOiBQcm9wcyk6IHZvaWQge1xuICBpZiAoaXNFbGVtZW50KHByb3BzLmNvbnRlbnQpKSB7XG4gICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwoY29udGVudCwgJycpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQocHJvcHMuY29udGVudCk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIHByb3BzLmNvbnRlbnQgIT09ICdmdW5jdGlvbicpIHtcbiAgICBpZiAocHJvcHMuYWxsb3dIVE1MKSB7XG4gICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTChjb250ZW50LCBwcm9wcy5jb250ZW50KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29udGVudC50ZXh0Q29udGVudCA9IHByb3BzLmNvbnRlbnQ7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRDaGlsZHJlbihwb3BwZXI6IFBvcHBlckVsZW1lbnQpOiBQb3BwZXJDaGlsZHJlbiB7XG4gIGNvbnN0IGJveCA9IHBvcHBlci5maXJzdEVsZW1lbnRDaGlsZCBhcyBIVE1MRGl2RWxlbWVudDtcbiAgY29uc3QgYm94Q2hpbGRyZW4gPSBhcnJheUZyb20oYm94LmNoaWxkcmVuKTtcblxuICByZXR1cm4ge1xuICAgIGJveCxcbiAgICBjb250ZW50OiBib3hDaGlsZHJlbi5maW5kKChub2RlKSA9PiBub2RlLmNsYXNzTGlzdC5jb250YWlucyhDT05URU5UX0NMQVNTKSksXG4gICAgYXJyb3c6IGJveENoaWxkcmVuLmZpbmQoXG4gICAgICAobm9kZSkgPT5cbiAgICAgICAgbm9kZS5jbGFzc0xpc3QuY29udGFpbnMoQVJST1dfQ0xBU1MpIHx8XG4gICAgICAgIG5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKFNWR19BUlJPV19DTEFTUylcbiAgICApLFxuICAgIGJhY2tkcm9wOiBib3hDaGlsZHJlbi5maW5kKChub2RlKSA9PlxuICAgICAgbm9kZS5jbGFzc0xpc3QuY29udGFpbnMoQkFDS0RST1BfQ0xBU1MpXG4gICAgKSxcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlcihcbiAgaW5zdGFuY2U6IEluc3RhbmNlXG4pOiB7XG4gIHBvcHBlcjogUG9wcGVyRWxlbWVudDtcbiAgb25VcGRhdGU/OiAocHJldlByb3BzOiBQcm9wcywgbmV4dFByb3BzOiBQcm9wcykgPT4gdm9pZDtcbn0ge1xuICBjb25zdCBwb3BwZXIgPSBkaXYoKTtcblxuICBjb25zdCBib3ggPSBkaXYoKTtcbiAgYm94LmNsYXNzTmFtZSA9IEJPWF9DTEFTUztcbiAgYm94LnNldEF0dHJpYnV0ZSgnZGF0YS1zdGF0ZScsICdoaWRkZW4nKTtcbiAgYm94LnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAnLTEnKTtcblxuICBjb25zdCBjb250ZW50ID0gZGl2KCk7XG4gIGNvbnRlbnQuY2xhc3NOYW1lID0gQ09OVEVOVF9DTEFTUztcbiAgY29udGVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtc3RhdGUnLCAnaGlkZGVuJyk7XG5cbiAgc2V0Q29udGVudChjb250ZW50LCBpbnN0YW5jZS5wcm9wcyk7XG5cbiAgcG9wcGVyLmFwcGVuZENoaWxkKGJveCk7XG4gIGJveC5hcHBlbmRDaGlsZChjb250ZW50KTtcblxuICBvblVwZGF0ZShpbnN0YW5jZS5wcm9wcywgaW5zdGFuY2UucHJvcHMpO1xuXG4gIGZ1bmN0aW9uIG9uVXBkYXRlKHByZXZQcm9wczogUHJvcHMsIG5leHRQcm9wczogUHJvcHMpOiB2b2lkIHtcbiAgICBjb25zdCB7Ym94LCBjb250ZW50LCBhcnJvd30gPSBnZXRDaGlsZHJlbihwb3BwZXIpO1xuXG4gICAgaWYgKG5leHRQcm9wcy50aGVtZSkge1xuICAgICAgYm94LnNldEF0dHJpYnV0ZSgnZGF0YS10aGVtZScsIG5leHRQcm9wcy50aGVtZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGJveC5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtdGhlbWUnKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIG5leHRQcm9wcy5hbmltYXRpb24gPT09ICdzdHJpbmcnKSB7XG4gICAgICBib3guc2V0QXR0cmlidXRlKCdkYXRhLWFuaW1hdGlvbicsIG5leHRQcm9wcy5hbmltYXRpb24pO1xuICAgIH0gZWxzZSB7XG4gICAgICBib3gucmVtb3ZlQXR0cmlidXRlKCdkYXRhLWFuaW1hdGlvbicpO1xuICAgIH1cblxuICAgIGlmIChuZXh0UHJvcHMuaW5lcnRpYSkge1xuICAgICAgYm94LnNldEF0dHJpYnV0ZSgnZGF0YS1pbmVydGlhJywgJycpO1xuICAgIH0gZWxzZSB7XG4gICAgICBib3gucmVtb3ZlQXR0cmlidXRlKCdkYXRhLWluZXJ0aWEnKTtcbiAgICB9XG5cbiAgICBib3guc3R5bGUubWF4V2lkdGggPVxuICAgICAgdHlwZW9mIG5leHRQcm9wcy5tYXhXaWR0aCA9PT0gJ251bWJlcidcbiAgICAgICAgPyBgJHtuZXh0UHJvcHMubWF4V2lkdGh9cHhgXG4gICAgICAgIDogbmV4dFByb3BzLm1heFdpZHRoO1xuXG4gICAgaWYgKG5leHRQcm9wcy5yb2xlKSB7XG4gICAgICBib3guc2V0QXR0cmlidXRlKCdyb2xlJywgbmV4dFByb3BzLnJvbGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBib3gucmVtb3ZlQXR0cmlidXRlKCdyb2xlJyk7XG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgcHJldlByb3BzLmNvbnRlbnQgIT09IG5leHRQcm9wcy5jb250ZW50IHx8XG4gICAgICBwcmV2UHJvcHMuYWxsb3dIVE1MICE9PSBuZXh0UHJvcHMuYWxsb3dIVE1MXG4gICAgKSB7XG4gICAgICBzZXRDb250ZW50KGNvbnRlbnQsIGluc3RhbmNlLnByb3BzKTtcbiAgICB9XG5cbiAgICBpZiAobmV4dFByb3BzLmFycm93KSB7XG4gICAgICBpZiAoIWFycm93KSB7XG4gICAgICAgIGJveC5hcHBlbmRDaGlsZChjcmVhdGVBcnJvd0VsZW1lbnQobmV4dFByb3BzLmFycm93KSk7XG4gICAgICB9IGVsc2UgaWYgKHByZXZQcm9wcy5hcnJvdyAhPT0gbmV4dFByb3BzLmFycm93KSB7XG4gICAgICAgIGJveC5yZW1vdmVDaGlsZChhcnJvdyk7XG4gICAgICAgIGJveC5hcHBlbmRDaGlsZChjcmVhdGVBcnJvd0VsZW1lbnQobmV4dFByb3BzLmFycm93KSk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChhcnJvdykge1xuICAgICAgYm94LnJlbW92ZUNoaWxkKGFycm93ISk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBwb3BwZXIsXG4gICAgb25VcGRhdGUsXG4gIH07XG59XG5cbi8vIFJ1bnRpbWUgY2hlY2sgdG8gaWRlbnRpZnkgaWYgdGhlIHJlbmRlciBmdW5jdGlvbiBpcyB0aGUgZGVmYXVsdCBvbmU7IHRoaXNcbi8vIHdheSB3ZSBjYW4gYXBwbHkgZGVmYXVsdCBDU1MgdHJhbnNpdGlvbnMgbG9naWMgYW5kIGl0IGNhbiBiZSB0cmVlLXNoYWtlbiBhd2F5XG5yZW5kZXIuJCR0aXBweSA9IHRydWU7XG4iLCJpbXBvcnQge2NyZWF0ZVBvcHBlciwgU3RyaWN0TW9kaWZpZXJzLCBNb2RpZmllcn0gZnJvbSAnQHBvcHBlcmpzL2NvcmUnO1xuaW1wb3J0IHtjdXJyZW50SW5wdXR9IGZyb20gJy4vYmluZEdsb2JhbEV2ZW50TGlzdGVuZXJzJztcbmltcG9ydCB7aXNJRTExfSBmcm9tICcuL2Jyb3dzZXInO1xuaW1wb3J0IHtUSVBQWV9ERUZBVUxUX0FQUEVORF9UTywgVE9VQ0hfT1BUSU9OU30gZnJvbSAnLi9jb25zdGFudHMnO1xuaW1wb3J0IHtcbiAgYWN0dWFsQ29udGFpbnMsXG4gIGRpdixcbiAgZ2V0T3duZXJEb2N1bWVudCxcbiAgaXNDdXJzb3JPdXRzaWRlSW50ZXJhY3RpdmVCb3JkZXIsXG4gIGlzTW91c2VFdmVudCxcbiAgc2V0VHJhbnNpdGlvbkR1cmF0aW9uLFxuICBzZXRWaXNpYmlsaXR5U3RhdGUsXG4gIHVwZGF0ZVRyYW5zaXRpb25FbmRMaXN0ZW5lcixcbn0gZnJvbSAnLi9kb20tdXRpbHMnO1xuaW1wb3J0IHtkZWZhdWx0UHJvcHMsIGV2YWx1YXRlUHJvcHMsIGdldEV4dGVuZGVkUGFzc2VkUHJvcHN9IGZyb20gJy4vcHJvcHMnO1xuaW1wb3J0IHtnZXRDaGlsZHJlbn0gZnJvbSAnLi90ZW1wbGF0ZSc7XG5pbXBvcnQge1xuICBDb250ZW50LFxuICBJbnN0YW5jZSxcbiAgTGlmZWN5Y2xlSG9va3MsXG4gIFBvcHBlckVsZW1lbnQsXG4gIFByb3BzLFxuICBSZWZlcmVuY2VFbGVtZW50LFxufSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7TGlzdGVuZXJPYmplY3QsIFBvcHBlclRyZWVEYXRhLCBQb3BwZXJDaGlsZHJlbn0gZnJvbSAnLi90eXBlcy1pbnRlcm5hbCc7XG5pbXBvcnQge1xuICBhcnJheUZyb20sXG4gIGRlYm91bmNlLFxuICBnZXRWYWx1ZUF0SW5kZXhPclJldHVybixcbiAgaW52b2tlV2l0aEFyZ3NPclJldHVybixcbiAgbm9ybWFsaXplVG9BcnJheSxcbiAgcHVzaElmVW5pcXVlLFxuICBzcGxpdEJ5U3BhY2VzLFxuICB1bmlxdWUsXG4gIHJlbW92ZVVuZGVmaW5lZFByb3BzLFxufSBmcm9tICcuL3V0aWxzJztcbmltcG9ydCB7Y3JlYXRlTWVtb3J5TGVha1dhcm5pbmcsIGVycm9yV2hlbiwgd2FybldoZW59IGZyb20gJy4vdmFsaWRhdGlvbic7XG5cbmxldCBpZENvdW50ZXIgPSAxO1xubGV0IG1vdXNlTW92ZUxpc3RlbmVyczogKChldmVudDogTW91c2VFdmVudCkgPT4gdm9pZClbXSA9IFtdO1xuXG4vLyBVc2VkIGJ5IGBoaWRlQWxsKClgXG5leHBvcnQgbGV0IG1vdW50ZWRJbnN0YW5jZXM6IEluc3RhbmNlW10gPSBbXTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlVGlwcHkoXG4gIHJlZmVyZW5jZTogUmVmZXJlbmNlRWxlbWVudCxcbiAgcGFzc2VkUHJvcHM6IFBhcnRpYWw8UHJvcHM+XG4pOiBJbnN0YW5jZSB7XG4gIGNvbnN0IHByb3BzID0gZXZhbHVhdGVQcm9wcyhyZWZlcmVuY2UsIHtcbiAgICAuLi5kZWZhdWx0UHJvcHMsXG4gICAgLi4uZ2V0RXh0ZW5kZWRQYXNzZWRQcm9wcyhyZW1vdmVVbmRlZmluZWRQcm9wcyhwYXNzZWRQcm9wcykpLFxuICB9KTtcblxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgLy8g8J+UkiBQcml2YXRlIG1lbWJlcnNcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIGxldCBzaG93VGltZW91dDogYW55O1xuICBsZXQgaGlkZVRpbWVvdXQ6IGFueTtcbiAgbGV0IHNjaGVkdWxlSGlkZUFuaW1hdGlvbkZyYW1lOiBudW1iZXI7XG4gIGxldCBpc1Zpc2libGVGcm9tQ2xpY2sgPSBmYWxzZTtcbiAgbGV0IGRpZEhpZGVEdWVUb0RvY3VtZW50TW91c2VEb3duID0gZmFsc2U7XG4gIGxldCBkaWRUb3VjaE1vdmUgPSBmYWxzZTtcbiAgbGV0IGlnbm9yZU9uRmlyc3RVcGRhdGUgPSBmYWxzZTtcbiAgbGV0IGxhc3RUcmlnZ2VyRXZlbnQ6IEV2ZW50IHwgdW5kZWZpbmVkO1xuICBsZXQgY3VycmVudFRyYW5zaXRpb25FbmRMaXN0ZW5lcjogKGV2ZW50OiBUcmFuc2l0aW9uRXZlbnQpID0+IHZvaWQ7XG4gIGxldCBvbkZpcnN0VXBkYXRlOiAoKSA9PiB2b2lkO1xuICBsZXQgbGlzdGVuZXJzOiBMaXN0ZW5lck9iamVjdFtdID0gW107XG4gIGxldCBkZWJvdW5jZWRPbk1vdXNlTW92ZSA9IGRlYm91bmNlKG9uTW91c2VNb3ZlLCBwcm9wcy5pbnRlcmFjdGl2ZURlYm91bmNlKTtcbiAgbGV0IGN1cnJlbnRUYXJnZXQ6IEVsZW1lbnQ7XG5cbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIC8vIPCflJEgUHVibGljIG1lbWJlcnNcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIGNvbnN0IGlkID0gaWRDb3VudGVyKys7XG4gIGNvbnN0IHBvcHBlckluc3RhbmNlID0gbnVsbDtcbiAgY29uc3QgcGx1Z2lucyA9IHVuaXF1ZShwcm9wcy5wbHVnaW5zKTtcblxuICBjb25zdCBzdGF0ZSA9IHtcbiAgICAvLyBJcyB0aGUgaW5zdGFuY2UgY3VycmVudGx5IGVuYWJsZWQ/XG4gICAgaXNFbmFibGVkOiB0cnVlLFxuICAgIC8vIElzIHRoZSB0aXBweSBjdXJyZW50bHkgc2hvd2luZyBhbmQgbm90IHRyYW5zaXRpb25pbmcgb3V0P1xuICAgIGlzVmlzaWJsZTogZmFsc2UsXG4gICAgLy8gSGFzIHRoZSBpbnN0YW5jZSBiZWVuIGRlc3Ryb3llZD9cbiAgICBpc0Rlc3Ryb3llZDogZmFsc2UsXG4gICAgLy8gSXMgdGhlIHRpcHB5IGN1cnJlbnRseSBtb3VudGVkIHRvIHRoZSBET00/XG4gICAgaXNNb3VudGVkOiBmYWxzZSxcbiAgICAvLyBIYXMgdGhlIHRpcHB5IGZpbmlzaGVkIHRyYW5zaXRpb25pbmcgaW4/XG4gICAgaXNTaG93bjogZmFsc2UsXG4gIH07XG5cbiAgY29uc3QgaW5zdGFuY2U6IEluc3RhbmNlID0ge1xuICAgIC8vIHByb3BlcnRpZXNcbiAgICBpZCxcbiAgICByZWZlcmVuY2UsXG4gICAgcG9wcGVyOiBkaXYoKSxcbiAgICBwb3BwZXJJbnN0YW5jZSxcbiAgICBwcm9wcyxcbiAgICBzdGF0ZSxcbiAgICBwbHVnaW5zLFxuICAgIC8vIG1ldGhvZHNcbiAgICBjbGVhckRlbGF5VGltZW91dHMsXG4gICAgc2V0UHJvcHMsXG4gICAgc2V0Q29udGVudCxcbiAgICBzaG93LFxuICAgIGhpZGUsXG4gICAgaGlkZVdpdGhJbnRlcmFjdGl2aXR5LFxuICAgIGVuYWJsZSxcbiAgICBkaXNhYmxlLFxuICAgIHVubW91bnQsXG4gICAgZGVzdHJveSxcbiAgfTtcblxuICAvLyBUT0RPOiBJbnZlc3RpZ2F0ZSB3aHkgdGhpcyBlYXJseSByZXR1cm4gY2F1c2VzIGEgVERaIGVycm9yIGluIHRoZSB0ZXN0cyDigJRcbiAgLy8gaXQgZG9lc24ndCBzZWVtIHRvIGhhcHBlbiBpbiB0aGUgYnJvd3NlclxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgaWYgKCFwcm9wcy5yZW5kZXIpIHtcbiAgICBpZiAoX19ERVZfXykge1xuICAgICAgZXJyb3JXaGVuKHRydWUsICdyZW5kZXIoKSBmdW5jdGlvbiBoYXMgbm90IGJlZW4gc3VwcGxpZWQuJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIC8vIEluaXRpYWwgbXV0YXRpb25zXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICBjb25zdCB7cG9wcGVyLCBvblVwZGF0ZX0gPSBwcm9wcy5yZW5kZXIoaW5zdGFuY2UpO1xuXG4gIHBvcHBlci5zZXRBdHRyaWJ1dGUoJ2RhdGEtX19OQU1FU1BBQ0VfUFJFRklYX18tcm9vdCcsICcnKTtcbiAgcG9wcGVyLmlkID0gYF9fTkFNRVNQQUNFX1BSRUZJWF9fLSR7aW5zdGFuY2UuaWR9YDtcblxuICBpbnN0YW5jZS5wb3BwZXIgPSBwb3BwZXI7XG4gIHJlZmVyZW5jZS5fdGlwcHkgPSBpbnN0YW5jZTtcbiAgcG9wcGVyLl90aXBweSA9IGluc3RhbmNlO1xuXG4gIGNvbnN0IHBsdWdpbnNIb29rcyA9IHBsdWdpbnMubWFwKChwbHVnaW4pID0+IHBsdWdpbi5mbihpbnN0YW5jZSkpO1xuICBjb25zdCBoYXNBcmlhRXhwYW5kZWQgPSByZWZlcmVuY2UuaGFzQXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJyk7XG5cbiAgYWRkTGlzdGVuZXJzKCk7XG4gIGhhbmRsZUFyaWFFeHBhbmRlZEF0dHJpYnV0ZSgpO1xuICBoYW5kbGVTdHlsZXMoKTtcblxuICBpbnZva2VIb29rKCdvbkNyZWF0ZScsIFtpbnN0YW5jZV0pO1xuXG4gIGlmIChwcm9wcy5zaG93T25DcmVhdGUpIHtcbiAgICBzY2hlZHVsZVNob3coKTtcbiAgfVxuXG4gIC8vIFByZXZlbnQgYSB0aXBweSB3aXRoIGEgZGVsYXkgZnJvbSBoaWRpbmcgaWYgdGhlIGN1cnNvciBsZWZ0IHRoZW4gcmV0dXJuZWRcbiAgLy8gYmVmb3JlIGl0IHN0YXJ0ZWQgaGlkaW5nXG4gIHBvcHBlci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgKCkgPT4ge1xuICAgIGlmIChpbnN0YW5jZS5wcm9wcy5pbnRlcmFjdGl2ZSAmJiBpbnN0YW5jZS5zdGF0ZS5pc1Zpc2libGUpIHtcbiAgICAgIGluc3RhbmNlLmNsZWFyRGVsYXlUaW1lb3V0cygpO1xuICAgIH1cbiAgfSk7XG5cbiAgcG9wcGVyLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCAoKSA9PiB7XG4gICAgaWYgKFxuICAgICAgaW5zdGFuY2UucHJvcHMuaW50ZXJhY3RpdmUgJiZcbiAgICAgIGluc3RhbmNlLnByb3BzLnRyaWdnZXIuaW5kZXhPZignbW91c2VlbnRlcicpID49IDBcbiAgICApIHtcbiAgICAgIGdldERvY3VtZW50KCkuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgZGVib3VuY2VkT25Nb3VzZU1vdmUpO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGluc3RhbmNlO1xuXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAvLyDwn5SSIFByaXZhdGUgbWV0aG9kc1xuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgZnVuY3Rpb24gZ2V0Tm9ybWFsaXplZFRvdWNoU2V0dGluZ3MoKTogW3N0cmluZyB8IGJvb2xlYW4sIG51bWJlcl0ge1xuICAgIGNvbnN0IHt0b3VjaH0gPSBpbnN0YW5jZS5wcm9wcztcbiAgICByZXR1cm4gQXJyYXkuaXNBcnJheSh0b3VjaCkgPyB0b3VjaCA6IFt0b3VjaCwgMF07XG4gIH1cblxuICBmdW5jdGlvbiBnZXRJc0N1c3RvbVRvdWNoQmVoYXZpb3IoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGdldE5vcm1hbGl6ZWRUb3VjaFNldHRpbmdzKClbMF0gPT09ICdob2xkJztcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldElzRGVmYXVsdFJlbmRlckZuKCk6IGJvb2xlYW4ge1xuICAgIC8vIEB0cy1pZ25vcmVcbiAgICByZXR1cm4gISFpbnN0YW5jZS5wcm9wcy5yZW5kZXI/LiQkdGlwcHk7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRDdXJyZW50VGFyZ2V0KCk6IEVsZW1lbnQge1xuICAgIHJldHVybiBjdXJyZW50VGFyZ2V0IHx8IHJlZmVyZW5jZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldERvY3VtZW50KCk6IERvY3VtZW50IHtcbiAgICBjb25zdCBwYXJlbnQgPSBnZXRDdXJyZW50VGFyZ2V0KCkucGFyZW50Tm9kZSBhcyBFbGVtZW50O1xuICAgIHJldHVybiBwYXJlbnQgPyBnZXRPd25lckRvY3VtZW50KHBhcmVudCkgOiBkb2N1bWVudDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldERlZmF1bHRUZW1wbGF0ZUNoaWxkcmVuKCk6IFBvcHBlckNoaWxkcmVuIHtcbiAgICByZXR1cm4gZ2V0Q2hpbGRyZW4ocG9wcGVyKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldERlbGF5KGlzU2hvdzogYm9vbGVhbik6IG51bWJlciB7XG4gICAgLy8gRm9yIHRvdWNoIG9yIGtleWJvYXJkIGlucHV0LCBmb3JjZSBgMGAgZGVsYXkgZm9yIFVYIHJlYXNvbnNcbiAgICAvLyBBbHNvIGlmIHRoZSBpbnN0YW5jZSBpcyBtb3VudGVkIGJ1dCBub3QgdmlzaWJsZSAodHJhbnNpdGlvbmluZyBvdXQpLFxuICAgIC8vIGlnbm9yZSBkZWxheVxuICAgIGlmIChcbiAgICAgIChpbnN0YW5jZS5zdGF0ZS5pc01vdW50ZWQgJiYgIWluc3RhbmNlLnN0YXRlLmlzVmlzaWJsZSkgfHxcbiAgICAgIGN1cnJlbnRJbnB1dC5pc1RvdWNoIHx8XG4gICAgICAobGFzdFRyaWdnZXJFdmVudCAmJiBsYXN0VHJpZ2dlckV2ZW50LnR5cGUgPT09ICdmb2N1cycpXG4gICAgKSB7XG4gICAgICByZXR1cm4gMDtcbiAgICB9XG5cbiAgICByZXR1cm4gZ2V0VmFsdWVBdEluZGV4T3JSZXR1cm4oXG4gICAgICBpbnN0YW5jZS5wcm9wcy5kZWxheSxcbiAgICAgIGlzU2hvdyA/IDAgOiAxLFxuICAgICAgZGVmYXVsdFByb3BzLmRlbGF5XG4gICAgKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZVN0eWxlcyhmcm9tSGlkZSA9IGZhbHNlKTogdm9pZCB7XG4gICAgcG9wcGVyLnN0eWxlLnBvaW50ZXJFdmVudHMgPVxuICAgICAgaW5zdGFuY2UucHJvcHMuaW50ZXJhY3RpdmUgJiYgIWZyb21IaWRlID8gJycgOiAnbm9uZSc7XG4gICAgcG9wcGVyLnN0eWxlLnpJbmRleCA9IGAke2luc3RhbmNlLnByb3BzLnpJbmRleH1gO1xuICB9XG5cbiAgZnVuY3Rpb24gaW52b2tlSG9vayhcbiAgICBob29rOiBrZXlvZiBMaWZlY3ljbGVIb29rcyxcbiAgICBhcmdzOiBbSW5zdGFuY2UsIGFueT9dLFxuICAgIHNob3VsZEludm9rZVByb3BzSG9vayA9IHRydWVcbiAgKTogdm9pZCB7XG4gICAgcGx1Z2luc0hvb2tzLmZvckVhY2goKHBsdWdpbkhvb2tzKSA9PiB7XG4gICAgICBpZiAocGx1Z2luSG9va3NbaG9va10pIHtcbiAgICAgICAgcGx1Z2luSG9va3NbaG9va10hKC4uLmFyZ3MpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKHNob3VsZEludm9rZVByb3BzSG9vaykge1xuICAgICAgaW5zdGFuY2UucHJvcHNbaG9va10oLi4uYXJncyk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlQXJpYUNvbnRlbnRBdHRyaWJ1dGUoKTogdm9pZCB7XG4gICAgY29uc3Qge2FyaWF9ID0gaW5zdGFuY2UucHJvcHM7XG5cbiAgICBpZiAoIWFyaWEuY29udGVudCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGF0dHIgPSBgYXJpYS0ke2FyaWEuY29udGVudH1gO1xuICAgIGNvbnN0IGlkID0gcG9wcGVyLmlkO1xuICAgIGNvbnN0IG5vZGVzID0gbm9ybWFsaXplVG9BcnJheShpbnN0YW5jZS5wcm9wcy50cmlnZ2VyVGFyZ2V0IHx8IHJlZmVyZW5jZSk7XG5cbiAgICBub2Rlcy5mb3JFYWNoKChub2RlKSA9PiB7XG4gICAgICBjb25zdCBjdXJyZW50VmFsdWUgPSBub2RlLmdldEF0dHJpYnV0ZShhdHRyKTtcblxuICAgICAgaWYgKGluc3RhbmNlLnN0YXRlLmlzVmlzaWJsZSkge1xuICAgICAgICBub2RlLnNldEF0dHJpYnV0ZShhdHRyLCBjdXJyZW50VmFsdWUgPyBgJHtjdXJyZW50VmFsdWV9ICR7aWR9YCA6IGlkKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IG5leHRWYWx1ZSA9IGN1cnJlbnRWYWx1ZSAmJiBjdXJyZW50VmFsdWUucmVwbGFjZShpZCwgJycpLnRyaW0oKTtcblxuICAgICAgICBpZiAobmV4dFZhbHVlKSB7XG4gICAgICAgICAgbm9kZS5zZXRBdHRyaWJ1dGUoYXR0ciwgbmV4dFZhbHVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBub2RlLnJlbW92ZUF0dHJpYnV0ZShhdHRyKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlQXJpYUV4cGFuZGVkQXR0cmlidXRlKCk6IHZvaWQge1xuICAgIGlmIChoYXNBcmlhRXhwYW5kZWQgfHwgIWluc3RhbmNlLnByb3BzLmFyaWEuZXhwYW5kZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBub2RlcyA9IG5vcm1hbGl6ZVRvQXJyYXkoaW5zdGFuY2UucHJvcHMudHJpZ2dlclRhcmdldCB8fCByZWZlcmVuY2UpO1xuXG4gICAgbm9kZXMuZm9yRWFjaCgobm9kZSkgPT4ge1xuICAgICAgaWYgKGluc3RhbmNlLnByb3BzLmludGVyYWN0aXZlKSB7XG4gICAgICAgIG5vZGUuc2V0QXR0cmlidXRlKFxuICAgICAgICAgICdhcmlhLWV4cGFuZGVkJyxcbiAgICAgICAgICBpbnN0YW5jZS5zdGF0ZS5pc1Zpc2libGUgJiYgbm9kZSA9PT0gZ2V0Q3VycmVudFRhcmdldCgpXG4gICAgICAgICAgICA/ICd0cnVlJ1xuICAgICAgICAgICAgOiAnZmFsc2UnXG4gICAgICAgICk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBub2RlLnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gY2xlYW51cEludGVyYWN0aXZlTW91c2VMaXN0ZW5lcnMoKTogdm9pZCB7XG4gICAgZ2V0RG9jdW1lbnQoKS5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBkZWJvdW5jZWRPbk1vdXNlTW92ZSk7XG4gICAgbW91c2VNb3ZlTGlzdGVuZXJzID0gbW91c2VNb3ZlTGlzdGVuZXJzLmZpbHRlcihcbiAgICAgIChsaXN0ZW5lcikgPT4gbGlzdGVuZXIgIT09IGRlYm91bmNlZE9uTW91c2VNb3ZlXG4gICAgKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uRG9jdW1lbnRQcmVzcyhldmVudDogTW91c2VFdmVudCB8IFRvdWNoRXZlbnQpOiB2b2lkIHtcbiAgICAvLyBNb3ZlZCBmaW5nZXIgdG8gc2Nyb2xsIGluc3RlYWQgb2YgYW4gaW50ZW50aW9uYWwgdGFwIG91dHNpZGVcbiAgICBpZiAoY3VycmVudElucHV0LmlzVG91Y2gpIHtcbiAgICAgIGlmIChkaWRUb3VjaE1vdmUgfHwgZXZlbnQudHlwZSA9PT0gJ21vdXNlZG93bicpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGFjdHVhbFRhcmdldCA9XG4gICAgICAoZXZlbnQuY29tcG9zZWRQYXRoICYmIGV2ZW50LmNvbXBvc2VkUGF0aCgpWzBdKSB8fCBldmVudC50YXJnZXQ7XG5cbiAgICAvLyBDbGlja2VkIG9uIGludGVyYWN0aXZlIHBvcHBlclxuICAgIGlmIChcbiAgICAgIGluc3RhbmNlLnByb3BzLmludGVyYWN0aXZlICYmXG4gICAgICBhY3R1YWxDb250YWlucyhwb3BwZXIsIGFjdHVhbFRhcmdldCBhcyBFbGVtZW50KVxuICAgICkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIENsaWNrZWQgb24gdGhlIGV2ZW50IGxpc3RlbmVycyB0YXJnZXRcbiAgICBpZiAoXG4gICAgICBub3JtYWxpemVUb0FycmF5KGluc3RhbmNlLnByb3BzLnRyaWdnZXJUYXJnZXQgfHwgcmVmZXJlbmNlKS5zb21lKChlbCkgPT5cbiAgICAgICAgYWN0dWFsQ29udGFpbnMoZWwsIGFjdHVhbFRhcmdldCBhcyBFbGVtZW50KVxuICAgICAgKVxuICAgICkge1xuICAgICAgaWYgKGN1cnJlbnRJbnB1dC5pc1RvdWNoKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKFxuICAgICAgICBpbnN0YW5jZS5zdGF0ZS5pc1Zpc2libGUgJiZcbiAgICAgICAgaW5zdGFuY2UucHJvcHMudHJpZ2dlci5pbmRleE9mKCdjbGljaycpID49IDBcbiAgICAgICkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGludm9rZUhvb2soJ29uQ2xpY2tPdXRzaWRlJywgW2luc3RhbmNlLCBldmVudF0pO1xuICAgIH1cblxuICAgIGlmIChpbnN0YW5jZS5wcm9wcy5oaWRlT25DbGljayA9PT0gdHJ1ZSkge1xuICAgICAgaW5zdGFuY2UuY2xlYXJEZWxheVRpbWVvdXRzKCk7XG4gICAgICBpbnN0YW5jZS5oaWRlKCk7XG5cbiAgICAgIC8vIGBtb3VzZWRvd25gIGV2ZW50IGlzIGZpcmVkIHJpZ2h0IGJlZm9yZSBgZm9jdXNgIGlmIHByZXNzaW5nIHRoZVxuICAgICAgLy8gY3VycmVudFRhcmdldC4gVGhpcyBsZXRzIGEgdGlwcHkgd2l0aCBgZm9jdXNgIHRyaWdnZXIga25vdyB0aGF0IGl0XG4gICAgICAvLyBzaG91bGQgbm90IHNob3dcbiAgICAgIGRpZEhpZGVEdWVUb0RvY3VtZW50TW91c2VEb3duID0gdHJ1ZTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBkaWRIaWRlRHVlVG9Eb2N1bWVudE1vdXNlRG93biA9IGZhbHNlO1xuICAgICAgfSk7XG5cbiAgICAgIC8vIFRoZSBsaXN0ZW5lciBnZXRzIGFkZGVkIGluIGBzY2hlZHVsZVNob3coKWAsIGJ1dCB0aGlzIG1heSBiZSBoaWRpbmcgaXRcbiAgICAgIC8vIGJlZm9yZSBpdCBzaG93cywgYW5kIGhpZGUoKSdzIGVhcmx5IGJhaWwtb3V0IGJlaGF2aW9yIGNhbiBwcmV2ZW50IGl0XG4gICAgICAvLyBmcm9tIGJlaW5nIGNsZWFuZWQgdXBcbiAgICAgIGlmICghaW5zdGFuY2Uuc3RhdGUuaXNNb3VudGVkKSB7XG4gICAgICAgIHJlbW92ZURvY3VtZW50UHJlc3MoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBvblRvdWNoTW92ZSgpOiB2b2lkIHtcbiAgICBkaWRUb3VjaE1vdmUgPSB0cnVlO1xuICB9XG5cbiAgZnVuY3Rpb24gb25Ub3VjaFN0YXJ0KCk6IHZvaWQge1xuICAgIGRpZFRvdWNoTW92ZSA9IGZhbHNlO1xuICB9XG5cbiAgZnVuY3Rpb24gYWRkRG9jdW1lbnRQcmVzcygpOiB2b2lkIHtcbiAgICBjb25zdCBkb2MgPSBnZXREb2N1bWVudCgpO1xuICAgIGRvYy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBvbkRvY3VtZW50UHJlc3MsIHRydWUpO1xuICAgIGRvYy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIG9uRG9jdW1lbnRQcmVzcywgVE9VQ0hfT1BUSU9OUyk7XG4gICAgZG9jLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBvblRvdWNoU3RhcnQsIFRPVUNIX09QVElPTlMpO1xuICAgIGRvYy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCBvblRvdWNoTW92ZSwgVE9VQ0hfT1BUSU9OUyk7XG4gIH1cblxuICBmdW5jdGlvbiByZW1vdmVEb2N1bWVudFByZXNzKCk6IHZvaWQge1xuICAgIGNvbnN0IGRvYyA9IGdldERvY3VtZW50KCk7XG4gICAgZG9jLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIG9uRG9jdW1lbnRQcmVzcywgdHJ1ZSk7XG4gICAgZG9jLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgb25Eb2N1bWVudFByZXNzLCBUT1VDSF9PUFRJT05TKTtcbiAgICBkb2MucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIG9uVG91Y2hTdGFydCwgVE9VQ0hfT1BUSU9OUyk7XG4gICAgZG9jLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIG9uVG91Y2hNb3ZlLCBUT1VDSF9PUFRJT05TKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uVHJhbnNpdGlvbmVkT3V0KGR1cmF0aW9uOiBudW1iZXIsIGNhbGxiYWNrOiAoKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgb25UcmFuc2l0aW9uRW5kKGR1cmF0aW9uLCAoKSA9PiB7XG4gICAgICBpZiAoXG4gICAgICAgICFpbnN0YW5jZS5zdGF0ZS5pc1Zpc2libGUgJiZcbiAgICAgICAgcG9wcGVyLnBhcmVudE5vZGUgJiZcbiAgICAgICAgcG9wcGVyLnBhcmVudE5vZGUuY29udGFpbnMocG9wcGVyKVxuICAgICAgKSB7XG4gICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBvblRyYW5zaXRpb25lZEluKGR1cmF0aW9uOiBudW1iZXIsIGNhbGxiYWNrOiAoKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgb25UcmFuc2l0aW9uRW5kKGR1cmF0aW9uLCBjYWxsYmFjayk7XG4gIH1cblxuICBmdW5jdGlvbiBvblRyYW5zaXRpb25FbmQoZHVyYXRpb246IG51bWJlciwgY2FsbGJhY2s6ICgpID0+IHZvaWQpOiB2b2lkIHtcbiAgICBjb25zdCBib3ggPSBnZXREZWZhdWx0VGVtcGxhdGVDaGlsZHJlbigpLmJveDtcblxuICAgIGZ1bmN0aW9uIGxpc3RlbmVyKGV2ZW50OiBUcmFuc2l0aW9uRXZlbnQpOiB2b2lkIHtcbiAgICAgIGlmIChldmVudC50YXJnZXQgPT09IGJveCkge1xuICAgICAgICB1cGRhdGVUcmFuc2l0aW9uRW5kTGlzdGVuZXIoYm94LCAncmVtb3ZlJywgbGlzdGVuZXIpO1xuICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIE1ha2UgY2FsbGJhY2sgc3luY2hyb25vdXMgaWYgZHVyYXRpb24gaXMgMFxuICAgIC8vIGB0cmFuc2l0aW9uZW5kYCB3b24ndCBmaXJlIG90aGVyd2lzZVxuICAgIGlmIChkdXJhdGlvbiA9PT0gMCkge1xuICAgICAgcmV0dXJuIGNhbGxiYWNrKCk7XG4gICAgfVxuXG4gICAgdXBkYXRlVHJhbnNpdGlvbkVuZExpc3RlbmVyKGJveCwgJ3JlbW92ZScsIGN1cnJlbnRUcmFuc2l0aW9uRW5kTGlzdGVuZXIpO1xuICAgIHVwZGF0ZVRyYW5zaXRpb25FbmRMaXN0ZW5lcihib3gsICdhZGQnLCBsaXN0ZW5lcik7XG5cbiAgICBjdXJyZW50VHJhbnNpdGlvbkVuZExpc3RlbmVyID0gbGlzdGVuZXI7XG4gIH1cblxuICBmdW5jdGlvbiBvbihcbiAgICBldmVudFR5cGU6IHN0cmluZyxcbiAgICBoYW5kbGVyOiBFdmVudExpc3RlbmVyLFxuICAgIG9wdGlvbnM6IGJvb2xlYW4gfCBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiA9IGZhbHNlXG4gICk6IHZvaWQge1xuICAgIGNvbnN0IG5vZGVzID0gbm9ybWFsaXplVG9BcnJheShpbnN0YW5jZS5wcm9wcy50cmlnZ2VyVGFyZ2V0IHx8IHJlZmVyZW5jZSk7XG4gICAgbm9kZXMuZm9yRWFjaCgobm9kZSkgPT4ge1xuICAgICAgbm9kZS5hZGRFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgaGFuZGxlciwgb3B0aW9ucyk7XG4gICAgICBsaXN0ZW5lcnMucHVzaCh7bm9kZSwgZXZlbnRUeXBlLCBoYW5kbGVyLCBvcHRpb25zfSk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBhZGRMaXN0ZW5lcnMoKTogdm9pZCB7XG4gICAgaWYgKGdldElzQ3VzdG9tVG91Y2hCZWhhdmlvcigpKSB7XG4gICAgICBvbigndG91Y2hzdGFydCcsIG9uVHJpZ2dlciwge3Bhc3NpdmU6IHRydWV9KTtcbiAgICAgIG9uKCd0b3VjaGVuZCcsIG9uTW91c2VMZWF2ZSBhcyBFdmVudExpc3RlbmVyLCB7cGFzc2l2ZTogdHJ1ZX0pO1xuICAgIH1cblxuICAgIHNwbGl0QnlTcGFjZXMoaW5zdGFuY2UucHJvcHMudHJpZ2dlcikuZm9yRWFjaCgoZXZlbnRUeXBlKSA9PiB7XG4gICAgICBpZiAoZXZlbnRUeXBlID09PSAnbWFudWFsJykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIG9uKGV2ZW50VHlwZSwgb25UcmlnZ2VyKTtcblxuICAgICAgc3dpdGNoIChldmVudFR5cGUpIHtcbiAgICAgICAgY2FzZSAnbW91c2VlbnRlcic6XG4gICAgICAgICAgb24oJ21vdXNlbGVhdmUnLCBvbk1vdXNlTGVhdmUgYXMgRXZlbnRMaXN0ZW5lcik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2ZvY3VzJzpcbiAgICAgICAgICBvbihpc0lFMTEgPyAnZm9jdXNvdXQnIDogJ2JsdXInLCBvbkJsdXJPckZvY3VzT3V0IGFzIEV2ZW50TGlzdGVuZXIpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdmb2N1c2luJzpcbiAgICAgICAgICBvbignZm9jdXNvdXQnLCBvbkJsdXJPckZvY3VzT3V0IGFzIEV2ZW50TGlzdGVuZXIpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVtb3ZlTGlzdGVuZXJzKCk6IHZvaWQge1xuICAgIGxpc3RlbmVycy5mb3JFYWNoKCh7bm9kZSwgZXZlbnRUeXBlLCBoYW5kbGVyLCBvcHRpb25zfTogTGlzdGVuZXJPYmplY3QpID0+IHtcbiAgICAgIG5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGhhbmRsZXIsIG9wdGlvbnMpO1xuICAgIH0pO1xuICAgIGxpc3RlbmVycyA9IFtdO1xuICB9XG5cbiAgZnVuY3Rpb24gb25UcmlnZ2VyKGV2ZW50OiBFdmVudCk6IHZvaWQge1xuICAgIGxldCBzaG91bGRTY2hlZHVsZUNsaWNrSGlkZSA9IGZhbHNlO1xuXG4gICAgaWYgKFxuICAgICAgIWluc3RhbmNlLnN0YXRlLmlzRW5hYmxlZCB8fFxuICAgICAgaXNFdmVudExpc3RlbmVyU3RvcHBlZChldmVudCkgfHxcbiAgICAgIGRpZEhpZGVEdWVUb0RvY3VtZW50TW91c2VEb3duXG4gICAgKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgd2FzRm9jdXNlZCA9IGxhc3RUcmlnZ2VyRXZlbnQ/LnR5cGUgPT09ICdmb2N1cyc7XG5cbiAgICBsYXN0VHJpZ2dlckV2ZW50ID0gZXZlbnQ7XG4gICAgY3VycmVudFRhcmdldCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQgYXMgRWxlbWVudDtcblxuICAgIGhhbmRsZUFyaWFFeHBhbmRlZEF0dHJpYnV0ZSgpO1xuXG4gICAgaWYgKCFpbnN0YW5jZS5zdGF0ZS5pc1Zpc2libGUgJiYgaXNNb3VzZUV2ZW50KGV2ZW50KSkge1xuICAgICAgLy8gSWYgc2Nyb2xsaW5nLCBgbW91c2VlbnRlcmAgZXZlbnRzIGNhbiBiZSBmaXJlZCBpZiB0aGUgY3Vyc29yIGxhbmRzXG4gICAgICAvLyBvdmVyIGEgbmV3IHRhcmdldCwgYnV0IGBtb3VzZW1vdmVgIGV2ZW50cyBkb24ndCBnZXQgZmlyZWQuIFRoaXNcbiAgICAgIC8vIGNhdXNlcyBpbnRlcmFjdGl2ZSB0b29sdGlwcyB0byBnZXQgc3R1Y2sgb3BlbiB1bnRpbCB0aGUgY3Vyc29yIGlzXG4gICAgICAvLyBtb3ZlZFxuICAgICAgbW91c2VNb3ZlTGlzdGVuZXJzLmZvckVhY2goKGxpc3RlbmVyKSA9PiBsaXN0ZW5lcihldmVudCkpO1xuICAgIH1cblxuICAgIC8vIFRvZ2dsZSBzaG93L2hpZGUgd2hlbiBjbGlja2luZyBjbGljay10cmlnZ2VyZWQgdG9vbHRpcHNcbiAgICBpZiAoXG4gICAgICBldmVudC50eXBlID09PSAnY2xpY2snICYmXG4gICAgICAoaW5zdGFuY2UucHJvcHMudHJpZ2dlci5pbmRleE9mKCdtb3VzZWVudGVyJykgPCAwIHx8XG4gICAgICAgIGlzVmlzaWJsZUZyb21DbGljaykgJiZcbiAgICAgIGluc3RhbmNlLnByb3BzLmhpZGVPbkNsaWNrICE9PSBmYWxzZSAmJlxuICAgICAgaW5zdGFuY2Uuc3RhdGUuaXNWaXNpYmxlXG4gICAgKSB7XG4gICAgICBzaG91bGRTY2hlZHVsZUNsaWNrSGlkZSA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNjaGVkdWxlU2hvdyhldmVudCk7XG4gICAgfVxuXG4gICAgaWYgKGV2ZW50LnR5cGUgPT09ICdjbGljaycpIHtcbiAgICAgIGlzVmlzaWJsZUZyb21DbGljayA9ICFzaG91bGRTY2hlZHVsZUNsaWNrSGlkZTtcbiAgICB9XG5cbiAgICBpZiAoc2hvdWxkU2NoZWR1bGVDbGlja0hpZGUgJiYgIXdhc0ZvY3VzZWQpIHtcbiAgICAgIHNjaGVkdWxlSGlkZShldmVudCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gb25Nb3VzZU1vdmUoZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQgYXMgTm9kZTtcbiAgICBjb25zdCBpc0N1cnNvck92ZXJSZWZlcmVuY2VPclBvcHBlciA9XG4gICAgICBnZXRDdXJyZW50VGFyZ2V0KCkuY29udGFpbnModGFyZ2V0KSB8fCBwb3BwZXIuY29udGFpbnModGFyZ2V0KTtcblxuICAgIGlmIChldmVudC50eXBlID09PSAnbW91c2Vtb3ZlJyAmJiBpc0N1cnNvck92ZXJSZWZlcmVuY2VPclBvcHBlcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHBvcHBlclRyZWVEYXRhID0gZ2V0TmVzdGVkUG9wcGVyVHJlZSgpXG4gICAgICAuY29uY2F0KHBvcHBlcilcbiAgICAgIC5tYXAoKHBvcHBlcikgPT4ge1xuICAgICAgICBjb25zdCBpbnN0YW5jZSA9IHBvcHBlci5fdGlwcHkhO1xuICAgICAgICBjb25zdCBzdGF0ZSA9IGluc3RhbmNlLnBvcHBlckluc3RhbmNlPy5zdGF0ZTtcblxuICAgICAgICBpZiAoc3RhdGUpIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcG9wcGVyUmVjdDogcG9wcGVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuICAgICAgICAgICAgcG9wcGVyU3RhdGU6IHN0YXRlLFxuICAgICAgICAgICAgcHJvcHMsXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfSlcbiAgICAgIC5maWx0ZXIoQm9vbGVhbikgYXMgUG9wcGVyVHJlZURhdGFbXTtcblxuICAgIGlmIChpc0N1cnNvck91dHNpZGVJbnRlcmFjdGl2ZUJvcmRlcihwb3BwZXJUcmVlRGF0YSwgZXZlbnQpKSB7XG4gICAgICBjbGVhbnVwSW50ZXJhY3RpdmVNb3VzZUxpc3RlbmVycygpO1xuICAgICAgc2NoZWR1bGVIaWRlKGV2ZW50KTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBvbk1vdXNlTGVhdmUoZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICBjb25zdCBzaG91bGRCYWlsID1cbiAgICAgIGlzRXZlbnRMaXN0ZW5lclN0b3BwZWQoZXZlbnQpIHx8XG4gICAgICAoaW5zdGFuY2UucHJvcHMudHJpZ2dlci5pbmRleE9mKCdjbGljaycpID49IDAgJiYgaXNWaXNpYmxlRnJvbUNsaWNrKTtcblxuICAgIGlmIChzaG91bGRCYWlsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGluc3RhbmNlLnByb3BzLmludGVyYWN0aXZlKSB7XG4gICAgICBpbnN0YW5jZS5oaWRlV2l0aEludGVyYWN0aXZpdHkoZXZlbnQpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHNjaGVkdWxlSGlkZShldmVudCk7XG4gIH1cblxuICBmdW5jdGlvbiBvbkJsdXJPckZvY3VzT3V0KGV2ZW50OiBGb2N1c0V2ZW50KTogdm9pZCB7XG4gICAgaWYgKFxuICAgICAgaW5zdGFuY2UucHJvcHMudHJpZ2dlci5pbmRleE9mKCdmb2N1c2luJykgPCAwICYmXG4gICAgICBldmVudC50YXJnZXQgIT09IGdldEN1cnJlbnRUYXJnZXQoKVxuICAgICkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIElmIGZvY3VzIHdhcyBtb3ZlZCB0byB3aXRoaW4gdGhlIHBvcHBlclxuICAgIGlmIChcbiAgICAgIGluc3RhbmNlLnByb3BzLmludGVyYWN0aXZlICYmXG4gICAgICBldmVudC5yZWxhdGVkVGFyZ2V0ICYmXG4gICAgICBwb3BwZXIuY29udGFpbnMoZXZlbnQucmVsYXRlZFRhcmdldCBhcyBFbGVtZW50KVxuICAgICkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHNjaGVkdWxlSGlkZShldmVudCk7XG4gIH1cblxuICBmdW5jdGlvbiBpc0V2ZW50TGlzdGVuZXJTdG9wcGVkKGV2ZW50OiBFdmVudCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBjdXJyZW50SW5wdXQuaXNUb3VjaFxuICAgICAgPyBnZXRJc0N1c3RvbVRvdWNoQmVoYXZpb3IoKSAhPT0gZXZlbnQudHlwZS5pbmRleE9mKCd0b3VjaCcpID49IDBcbiAgICAgIDogZmFsc2U7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVQb3BwZXJJbnN0YW5jZSgpOiB2b2lkIHtcbiAgICBkZXN0cm95UG9wcGVySW5zdGFuY2UoKTtcblxuICAgIGNvbnN0IHtcbiAgICAgIHBvcHBlck9wdGlvbnMsXG4gICAgICBwbGFjZW1lbnQsXG4gICAgICBvZmZzZXQsXG4gICAgICBnZXRSZWZlcmVuY2VDbGllbnRSZWN0LFxuICAgICAgbW92ZVRyYW5zaXRpb24sXG4gICAgfSA9IGluc3RhbmNlLnByb3BzO1xuXG4gICAgY29uc3QgYXJyb3cgPSBnZXRJc0RlZmF1bHRSZW5kZXJGbigpID8gZ2V0Q2hpbGRyZW4ocG9wcGVyKS5hcnJvdyA6IG51bGw7XG5cbiAgICBjb25zdCBjb21wdXRlZFJlZmVyZW5jZSA9IGdldFJlZmVyZW5jZUNsaWVudFJlY3RcbiAgICAgID8ge1xuICAgICAgICAgIGdldEJvdW5kaW5nQ2xpZW50UmVjdDogZ2V0UmVmZXJlbmNlQ2xpZW50UmVjdCxcbiAgICAgICAgICBjb250ZXh0RWxlbWVudDpcbiAgICAgICAgICAgIGdldFJlZmVyZW5jZUNsaWVudFJlY3QuY29udGV4dEVsZW1lbnQgfHwgZ2V0Q3VycmVudFRhcmdldCgpLFxuICAgICAgICB9XG4gICAgICA6IHJlZmVyZW5jZTtcblxuICAgIGNvbnN0IHRpcHB5TW9kaWZpZXI6IE1vZGlmaWVyPCckJHRpcHB5JywgUmVjb3JkPHN0cmluZywgdW5rbm93bj4+ID0ge1xuICAgICAgbmFtZTogJyQkdGlwcHknLFxuICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgIHBoYXNlOiAnYmVmb3JlV3JpdGUnLFxuICAgICAgcmVxdWlyZXM6IFsnY29tcHV0ZVN0eWxlcyddLFxuICAgICAgZm4oe3N0YXRlfSkge1xuICAgICAgICBpZiAoZ2V0SXNEZWZhdWx0UmVuZGVyRm4oKSkge1xuICAgICAgICAgIGNvbnN0IHtib3h9ID0gZ2V0RGVmYXVsdFRlbXBsYXRlQ2hpbGRyZW4oKTtcblxuICAgICAgICAgIFsncGxhY2VtZW50JywgJ3JlZmVyZW5jZS1oaWRkZW4nLCAnZXNjYXBlZCddLmZvckVhY2goKGF0dHIpID0+IHtcbiAgICAgICAgICAgIGlmIChhdHRyID09PSAncGxhY2VtZW50Jykge1xuICAgICAgICAgICAgICBib3guc2V0QXR0cmlidXRlKCdkYXRhLXBsYWNlbWVudCcsIHN0YXRlLnBsYWNlbWVudCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBpZiAoc3RhdGUuYXR0cmlidXRlcy5wb3BwZXJbYGRhdGEtcG9wcGVyLSR7YXR0cn1gXSkge1xuICAgICAgICAgICAgICAgIGJveC5zZXRBdHRyaWJ1dGUoYGRhdGEtJHthdHRyfWAsICcnKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBib3gucmVtb3ZlQXR0cmlidXRlKGBkYXRhLSR7YXR0cn1gKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgc3RhdGUuYXR0cmlidXRlcy5wb3BwZXIgPSB7fTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICB9O1xuXG4gICAgdHlwZSBUaXBweU1vZGlmaWVyID0gTW9kaWZpZXI8JyQkdGlwcHknLCBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPj47XG4gICAgdHlwZSBFeHRlbmRlZE1vZGlmaWVycyA9IFN0cmljdE1vZGlmaWVycyB8IFBhcnRpYWw8VGlwcHlNb2RpZmllcj47XG5cbiAgICBjb25zdCBtb2RpZmllcnM6IEFycmF5PEV4dGVuZGVkTW9kaWZpZXJzPiA9IFtcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ29mZnNldCcsXG4gICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICBvZmZzZXQsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAncHJldmVudE92ZXJmbG93JyxcbiAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgIHBhZGRpbmc6IHtcbiAgICAgICAgICAgIHRvcDogMixcbiAgICAgICAgICAgIGJvdHRvbTogMixcbiAgICAgICAgICAgIGxlZnQ6IDUsXG4gICAgICAgICAgICByaWdodDogNSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ2ZsaXAnLFxuICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgcGFkZGluZzogNSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdjb21wdXRlU3R5bGVzJyxcbiAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgIGFkYXB0aXZlOiAhbW92ZVRyYW5zaXRpb24sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgdGlwcHlNb2RpZmllcixcbiAgICBdO1xuXG4gICAgaWYgKGdldElzRGVmYXVsdFJlbmRlckZuKCkgJiYgYXJyb3cpIHtcbiAgICAgIG1vZGlmaWVycy5wdXNoKHtcbiAgICAgICAgbmFtZTogJ2Fycm93JyxcbiAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgIGVsZW1lbnQ6IGFycm93LFxuICAgICAgICAgIHBhZGRpbmc6IDMsXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBtb2RpZmllcnMucHVzaCguLi4ocG9wcGVyT3B0aW9ucz8ubW9kaWZpZXJzIHx8IFtdKSk7XG5cbiAgICBpbnN0YW5jZS5wb3BwZXJJbnN0YW5jZSA9IGNyZWF0ZVBvcHBlcjxFeHRlbmRlZE1vZGlmaWVycz4oXG4gICAgICBjb21wdXRlZFJlZmVyZW5jZSxcbiAgICAgIHBvcHBlcixcbiAgICAgIHtcbiAgICAgICAgLi4ucG9wcGVyT3B0aW9ucyxcbiAgICAgICAgcGxhY2VtZW50LFxuICAgICAgICBvbkZpcnN0VXBkYXRlLFxuICAgICAgICBtb2RpZmllcnMsXG4gICAgICB9XG4gICAgKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRlc3Ryb3lQb3BwZXJJbnN0YW5jZSgpOiB2b2lkIHtcbiAgICBpZiAoaW5zdGFuY2UucG9wcGVySW5zdGFuY2UpIHtcbiAgICAgIGluc3RhbmNlLnBvcHBlckluc3RhbmNlLmRlc3Ryb3koKTtcbiAgICAgIGluc3RhbmNlLnBvcHBlckluc3RhbmNlID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBtb3VudCgpOiB2b2lkIHtcbiAgICBjb25zdCB7YXBwZW5kVG99ID0gaW5zdGFuY2UucHJvcHM7XG5cbiAgICBsZXQgcGFyZW50Tm9kZTogYW55O1xuXG4gICAgLy8gQnkgZGVmYXVsdCwgd2UnbGwgYXBwZW5kIHRoZSBwb3BwZXIgdG8gdGhlIHRyaWdnZXJUYXJnZXRzJ3MgcGFyZW50Tm9kZSBzb1xuICAgIC8vIGl0J3MgZGlyZWN0bHkgYWZ0ZXIgdGhlIHJlZmVyZW5jZSBlbGVtZW50IHNvIHRoZSBlbGVtZW50cyBpbnNpZGUgdGhlXG4gICAgLy8gdGlwcHkgY2FuIGJlIHRhYmJlZCB0b1xuICAgIC8vIElmIHRoZXJlIGFyZSBjbGlwcGluZyBpc3N1ZXMsIHRoZSB1c2VyIGNhbiBzcGVjaWZ5IGEgZGlmZmVyZW50IGFwcGVuZFRvXG4gICAgLy8gYW5kIGVuc3VyZSBmb2N1cyBtYW5hZ2VtZW50IGlzIGhhbmRsZWQgY29ycmVjdGx5IG1hbnVhbGx5XG4gICAgY29uc3Qgbm9kZSA9IGdldEN1cnJlbnRUYXJnZXQoKTtcblxuICAgIGlmIChcbiAgICAgIChpbnN0YW5jZS5wcm9wcy5pbnRlcmFjdGl2ZSAmJiBhcHBlbmRUbyA9PT0gVElQUFlfREVGQVVMVF9BUFBFTkRfVE8pIHx8XG4gICAgICBhcHBlbmRUbyA9PT0gJ3BhcmVudCdcbiAgICApIHtcbiAgICAgIHBhcmVudE5vZGUgPSBub2RlLnBhcmVudE5vZGU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHBhcmVudE5vZGUgPSBpbnZva2VXaXRoQXJnc09yUmV0dXJuKGFwcGVuZFRvLCBbbm9kZV0pO1xuICAgIH1cblxuICAgIC8vIFRoZSBwb3BwZXIgZWxlbWVudCBuZWVkcyB0byBleGlzdCBvbiB0aGUgRE9NIGJlZm9yZSBpdHMgcG9zaXRpb24gY2FuIGJlXG4gICAgLy8gdXBkYXRlZCBhcyBQb3BwZXIgbmVlZHMgdG8gcmVhZCBpdHMgZGltZW5zaW9uc1xuICAgIGlmICghcGFyZW50Tm9kZS5jb250YWlucyhwb3BwZXIpKSB7XG4gICAgICBwYXJlbnROb2RlLmFwcGVuZENoaWxkKHBvcHBlcik7XG4gICAgfVxuXG4gICAgaW5zdGFuY2Uuc3RhdGUuaXNNb3VudGVkID0gdHJ1ZTtcblxuICAgIGNyZWF0ZVBvcHBlckluc3RhbmNlKCk7XG5cbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgIGlmIChfX0RFVl9fKSB7XG4gICAgICAvLyBBY2Nlc3NpYmlsaXR5IGNoZWNrXG4gICAgICB3YXJuV2hlbihcbiAgICAgICAgaW5zdGFuY2UucHJvcHMuaW50ZXJhY3RpdmUgJiZcbiAgICAgICAgICBhcHBlbmRUbyA9PT0gZGVmYXVsdFByb3BzLmFwcGVuZFRvICYmXG4gICAgICAgICAgbm9kZS5uZXh0RWxlbWVudFNpYmxpbmcgIT09IHBvcHBlcixcbiAgICAgICAgW1xuICAgICAgICAgICdJbnRlcmFjdGl2ZSB0aXBweSBlbGVtZW50IG1heSBub3QgYmUgYWNjZXNzaWJsZSB2aWEga2V5Ym9hcmQnLFxuICAgICAgICAgICduYXZpZ2F0aW9uIGJlY2F1c2UgaXQgaXMgbm90IGRpcmVjdGx5IGFmdGVyIHRoZSByZWZlcmVuY2UgZWxlbWVudCcsXG4gICAgICAgICAgJ2luIHRoZSBET00gc291cmNlIG9yZGVyLicsXG4gICAgICAgICAgJ1xcblxcbicsXG4gICAgICAgICAgJ1VzaW5nIGEgd3JhcHBlciA8ZGl2PiBvciA8c3Bhbj4gdGFnIGFyb3VuZCB0aGUgcmVmZXJlbmNlIGVsZW1lbnQnLFxuICAgICAgICAgICdzb2x2ZXMgdGhpcyBieSBjcmVhdGluZyBhIG5ldyBwYXJlbnROb2RlIGNvbnRleHQuJyxcbiAgICAgICAgICAnXFxuXFxuJyxcbiAgICAgICAgICAnU3BlY2lmeWluZyBgYXBwZW5kVG86IGRvY3VtZW50LmJvZHlgIHNpbGVuY2VzIHRoaXMgd2FybmluZywgYnV0IGl0JyxcbiAgICAgICAgICAnYXNzdW1lcyB5b3UgYXJlIHVzaW5nIGEgZm9jdXMgbWFuYWdlbWVudCBzb2x1dGlvbiB0byBoYW5kbGUnLFxuICAgICAgICAgICdrZXlib2FyZCBuYXZpZ2F0aW9uLicsXG4gICAgICAgICAgJ1xcblxcbicsXG4gICAgICAgICAgJ1NlZTogaHR0cHM6Ly9hdG9taWtzLmdpdGh1Yi5pby90aXBweWpzL3Y2L2FjY2Vzc2liaWxpdHkvI2ludGVyYWN0aXZpdHknLFxuICAgICAgICBdLmpvaW4oJyAnKVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBnZXROZXN0ZWRQb3BwZXJUcmVlKCk6IFBvcHBlckVsZW1lbnRbXSB7XG4gICAgcmV0dXJuIGFycmF5RnJvbShcbiAgICAgIHBvcHBlci5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1fX05BTUVTUEFDRV9QUkVGSVhfXy1yb290XScpXG4gICAgKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNjaGVkdWxlU2hvdyhldmVudD86IEV2ZW50KTogdm9pZCB7XG4gICAgaW5zdGFuY2UuY2xlYXJEZWxheVRpbWVvdXRzKCk7XG5cbiAgICBpZiAoZXZlbnQpIHtcbiAgICAgIGludm9rZUhvb2soJ29uVHJpZ2dlcicsIFtpbnN0YW5jZSwgZXZlbnRdKTtcbiAgICB9XG5cbiAgICBhZGREb2N1bWVudFByZXNzKCk7XG5cbiAgICBsZXQgZGVsYXkgPSBnZXREZWxheSh0cnVlKTtcbiAgICBjb25zdCBbdG91Y2hWYWx1ZSwgdG91Y2hEZWxheV0gPSBnZXROb3JtYWxpemVkVG91Y2hTZXR0aW5ncygpO1xuXG4gICAgaWYgKGN1cnJlbnRJbnB1dC5pc1RvdWNoICYmIHRvdWNoVmFsdWUgPT09ICdob2xkJyAmJiB0b3VjaERlbGF5KSB7XG4gICAgICBkZWxheSA9IHRvdWNoRGVsYXk7XG4gICAgfVxuXG4gICAgaWYgKGRlbGF5KSB7XG4gICAgICBzaG93VGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBpbnN0YW5jZS5zaG93KCk7XG4gICAgICB9LCBkZWxheSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGluc3RhbmNlLnNob3coKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBzY2hlZHVsZUhpZGUoZXZlbnQ6IEV2ZW50KTogdm9pZCB7XG4gICAgaW5zdGFuY2UuY2xlYXJEZWxheVRpbWVvdXRzKCk7XG5cbiAgICBpbnZva2VIb29rKCdvblVudHJpZ2dlcicsIFtpbnN0YW5jZSwgZXZlbnRdKTtcblxuICAgIGlmICghaW5zdGFuY2Uuc3RhdGUuaXNWaXNpYmxlKSB7XG4gICAgICByZW1vdmVEb2N1bWVudFByZXNzKCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBGb3IgaW50ZXJhY3RpdmUgdGlwcGllcywgc2NoZWR1bGVIaWRlIGlzIGFkZGVkIHRvIGEgZG9jdW1lbnQuYm9keSBoYW5kbGVyXG4gICAgLy8gZnJvbSBvbk1vdXNlTGVhdmUgc28gbXVzdCBpbnRlcmNlcHQgc2NoZWR1bGVkIGhpZGVzIGZyb20gbW91c2Vtb3ZlL2xlYXZlXG4gICAgLy8gZXZlbnRzIHdoZW4gdHJpZ2dlciBjb250YWlucyBtb3VzZWVudGVyIGFuZCBjbGljaywgYW5kIHRoZSB0aXAgaXNcbiAgICAvLyBjdXJyZW50bHkgc2hvd24gYXMgYSByZXN1bHQgb2YgYSBjbGljay5cbiAgICBpZiAoXG4gICAgICBpbnN0YW5jZS5wcm9wcy50cmlnZ2VyLmluZGV4T2YoJ21vdXNlZW50ZXInKSA+PSAwICYmXG4gICAgICBpbnN0YW5jZS5wcm9wcy50cmlnZ2VyLmluZGV4T2YoJ2NsaWNrJykgPj0gMCAmJlxuICAgICAgWydtb3VzZWxlYXZlJywgJ21vdXNlbW92ZSddLmluZGV4T2YoZXZlbnQudHlwZSkgPj0gMCAmJlxuICAgICAgaXNWaXNpYmxlRnJvbUNsaWNrXG4gICAgKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgZGVsYXkgPSBnZXREZWxheShmYWxzZSk7XG5cbiAgICBpZiAoZGVsYXkpIHtcbiAgICAgIGhpZGVUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGlmIChpbnN0YW5jZS5zdGF0ZS5pc1Zpc2libGUpIHtcbiAgICAgICAgICBpbnN0YW5jZS5oaWRlKCk7XG4gICAgICAgIH1cbiAgICAgIH0sIGRlbGF5KTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gRml4ZXMgYSBgdHJhbnNpdGlvbmVuZGAgcHJvYmxlbSB3aGVuIGl0IGZpcmVzIDEgZnJhbWUgdG9vXG4gICAgICAvLyBsYXRlIHNvbWV0aW1lcywgd2UgZG9uJ3Qgd2FudCBoaWRlKCkgdG8gYmUgY2FsbGVkLlxuICAgICAgc2NoZWR1bGVIaWRlQW5pbWF0aW9uRnJhbWUgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICBpbnN0YW5jZS5oaWRlKCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgLy8g8J+UkSBQdWJsaWMgbWV0aG9kc1xuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgZnVuY3Rpb24gZW5hYmxlKCk6IHZvaWQge1xuICAgIGluc3RhbmNlLnN0YXRlLmlzRW5hYmxlZCA9IHRydWU7XG4gIH1cblxuICBmdW5jdGlvbiBkaXNhYmxlKCk6IHZvaWQge1xuICAgIC8vIERpc2FibGluZyB0aGUgaW5zdGFuY2Ugc2hvdWxkIGFsc28gaGlkZSBpdFxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hdG9taWtzL3RpcHB5LmpzLXJlYWN0L2lzc3Vlcy8xMDZcbiAgICBpbnN0YW5jZS5oaWRlKCk7XG4gICAgaW5zdGFuY2Uuc3RhdGUuaXNFbmFibGVkID0gZmFsc2U7XG4gIH1cblxuICBmdW5jdGlvbiBjbGVhckRlbGF5VGltZW91dHMoKTogdm9pZCB7XG4gICAgY2xlYXJUaW1lb3V0KHNob3dUaW1lb3V0KTtcbiAgICBjbGVhclRpbWVvdXQoaGlkZVRpbWVvdXQpO1xuICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHNjaGVkdWxlSGlkZUFuaW1hdGlvbkZyYW1lKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNldFByb3BzKHBhcnRpYWxQcm9wczogUGFydGlhbDxQcm9wcz4pOiB2b2lkIHtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgIGlmIChfX0RFVl9fKSB7XG4gICAgICB3YXJuV2hlbihpbnN0YW5jZS5zdGF0ZS5pc0Rlc3Ryb3llZCwgY3JlYXRlTWVtb3J5TGVha1dhcm5pbmcoJ3NldFByb3BzJykpO1xuICAgIH1cblxuICAgIGlmIChpbnN0YW5jZS5zdGF0ZS5pc0Rlc3Ryb3llZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGludm9rZUhvb2soJ29uQmVmb3JlVXBkYXRlJywgW2luc3RhbmNlLCBwYXJ0aWFsUHJvcHNdKTtcblxuICAgIHJlbW92ZUxpc3RlbmVycygpO1xuXG4gICAgY29uc3QgcHJldlByb3BzID0gaW5zdGFuY2UucHJvcHM7XG4gICAgY29uc3QgbmV4dFByb3BzID0gZXZhbHVhdGVQcm9wcyhyZWZlcmVuY2UsIHtcbiAgICAgIC4uLnByZXZQcm9wcyxcbiAgICAgIC4uLnJlbW92ZVVuZGVmaW5lZFByb3BzKHBhcnRpYWxQcm9wcyksXG4gICAgICBpZ25vcmVBdHRyaWJ1dGVzOiB0cnVlLFxuICAgIH0pO1xuXG4gICAgaW5zdGFuY2UucHJvcHMgPSBuZXh0UHJvcHM7XG5cbiAgICBhZGRMaXN0ZW5lcnMoKTtcblxuICAgIGlmIChwcmV2UHJvcHMuaW50ZXJhY3RpdmVEZWJvdW5jZSAhPT0gbmV4dFByb3BzLmludGVyYWN0aXZlRGVib3VuY2UpIHtcbiAgICAgIGNsZWFudXBJbnRlcmFjdGl2ZU1vdXNlTGlzdGVuZXJzKCk7XG4gICAgICBkZWJvdW5jZWRPbk1vdXNlTW92ZSA9IGRlYm91bmNlKFxuICAgICAgICBvbk1vdXNlTW92ZSxcbiAgICAgICAgbmV4dFByb3BzLmludGVyYWN0aXZlRGVib3VuY2VcbiAgICAgICk7XG4gICAgfVxuXG4gICAgLy8gRW5zdXJlIHN0YWxlIGFyaWEtZXhwYW5kZWQgYXR0cmlidXRlcyBhcmUgcmVtb3ZlZFxuICAgIGlmIChwcmV2UHJvcHMudHJpZ2dlclRhcmdldCAmJiAhbmV4dFByb3BzLnRyaWdnZXJUYXJnZXQpIHtcbiAgICAgIG5vcm1hbGl6ZVRvQXJyYXkocHJldlByb3BzLnRyaWdnZXJUYXJnZXQpLmZvckVhY2goKG5vZGUpID0+IHtcbiAgICAgICAgbm9kZS5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAobmV4dFByb3BzLnRyaWdnZXJUYXJnZXQpIHtcbiAgICAgIHJlZmVyZW5jZS5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnKTtcbiAgICB9XG5cbiAgICBoYW5kbGVBcmlhRXhwYW5kZWRBdHRyaWJ1dGUoKTtcbiAgICBoYW5kbGVTdHlsZXMoKTtcblxuICAgIGlmIChvblVwZGF0ZSkge1xuICAgICAgb25VcGRhdGUocHJldlByb3BzLCBuZXh0UHJvcHMpO1xuICAgIH1cblxuICAgIGlmIChpbnN0YW5jZS5wb3BwZXJJbnN0YW5jZSkge1xuICAgICAgY3JlYXRlUG9wcGVySW5zdGFuY2UoKTtcblxuICAgICAgLy8gRml4ZXMgYW4gaXNzdWUgd2l0aCBuZXN0ZWQgdGlwcGllcyBpZiB0aGV5IGFyZSBhbGwgZ2V0dGluZyByZS1yZW5kZXJlZCxcbiAgICAgIC8vIGFuZCB0aGUgbmVzdGVkIG9uZXMgZ2V0IHJlLXJlbmRlcmVkIGZpcnN0LlxuICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2F0b21pa3MvdGlwcHlqcy1yZWFjdC9pc3N1ZXMvMTc3XG4gICAgICAvLyBUT0RPOiBmaW5kIGEgY2xlYW5lciAvIG1vcmUgZWZmaWNpZW50IHNvbHV0aW9uKCEpXG4gICAgICBnZXROZXN0ZWRQb3BwZXJUcmVlKCkuZm9yRWFjaCgobmVzdGVkUG9wcGVyKSA9PiB7XG4gICAgICAgIC8vIFJlYWN0IChhbmQgb3RoZXIgVUkgbGlicyBsaWtlbHkpIHJlcXVpcmVzIGEgckFGIHdyYXBwZXIgYXMgaXQgZmx1c2hlc1xuICAgICAgICAvLyBpdHMgd29yayBpbiBvbmVcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKG5lc3RlZFBvcHBlci5fdGlwcHkhLnBvcHBlckluc3RhbmNlIS5mb3JjZVVwZGF0ZSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpbnZva2VIb29rKCdvbkFmdGVyVXBkYXRlJywgW2luc3RhbmNlLCBwYXJ0aWFsUHJvcHNdKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNldENvbnRlbnQoY29udGVudDogQ29udGVudCk6IHZvaWQge1xuICAgIGluc3RhbmNlLnNldFByb3BzKHtjb250ZW50fSk7XG4gIH1cblxuICBmdW5jdGlvbiBzaG93KCk6IHZvaWQge1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gICAgaWYgKF9fREVWX18pIHtcbiAgICAgIHdhcm5XaGVuKGluc3RhbmNlLnN0YXRlLmlzRGVzdHJveWVkLCBjcmVhdGVNZW1vcnlMZWFrV2FybmluZygnc2hvdycpKTtcbiAgICB9XG5cbiAgICAvLyBFYXJseSBiYWlsLW91dFxuICAgIGNvbnN0IGlzQWxyZWFkeVZpc2libGUgPSBpbnN0YW5jZS5zdGF0ZS5pc1Zpc2libGU7XG4gICAgY29uc3QgaXNEZXN0cm95ZWQgPSBpbnN0YW5jZS5zdGF0ZS5pc0Rlc3Ryb3llZDtcbiAgICBjb25zdCBpc0Rpc2FibGVkID0gIWluc3RhbmNlLnN0YXRlLmlzRW5hYmxlZDtcbiAgICBjb25zdCBpc1RvdWNoQW5kVG91Y2hEaXNhYmxlZCA9XG4gICAgICBjdXJyZW50SW5wdXQuaXNUb3VjaCAmJiAhaW5zdGFuY2UucHJvcHMudG91Y2g7XG4gICAgY29uc3QgZHVyYXRpb24gPSBnZXRWYWx1ZUF0SW5kZXhPclJldHVybihcbiAgICAgIGluc3RhbmNlLnByb3BzLmR1cmF0aW9uLFxuICAgICAgMCxcbiAgICAgIGRlZmF1bHRQcm9wcy5kdXJhdGlvblxuICAgICk7XG5cbiAgICBpZiAoXG4gICAgICBpc0FscmVhZHlWaXNpYmxlIHx8XG4gICAgICBpc0Rlc3Ryb3llZCB8fFxuICAgICAgaXNEaXNhYmxlZCB8fFxuICAgICAgaXNUb3VjaEFuZFRvdWNoRGlzYWJsZWRcbiAgICApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBOb3JtYWxpemUgYGRpc2FibGVkYCBiZWhhdmlvciBhY3Jvc3MgYnJvd3NlcnMuXG4gICAgLy8gRmlyZWZveCBhbGxvd3MgZXZlbnRzIG9uIGRpc2FibGVkIGVsZW1lbnRzLCBidXQgQ2hyb21lIGRvZXNuJ3QuXG4gICAgLy8gVXNpbmcgYSB3cmFwcGVyIGVsZW1lbnQgKGkuZS4gPHNwYW4+KSBpcyByZWNvbW1lbmRlZC5cbiAgICBpZiAoZ2V0Q3VycmVudFRhcmdldCgpLmhhc0F0dHJpYnV0ZSgnZGlzYWJsZWQnKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGludm9rZUhvb2soJ29uU2hvdycsIFtpbnN0YW5jZV0sIGZhbHNlKTtcbiAgICBpZiAoaW5zdGFuY2UucHJvcHMub25TaG93KGluc3RhbmNlKSA9PT0gZmFsc2UpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpbnN0YW5jZS5zdGF0ZS5pc1Zpc2libGUgPSB0cnVlO1xuXG4gICAgaWYgKGdldElzRGVmYXVsdFJlbmRlckZuKCkpIHtcbiAgICAgIHBvcHBlci5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xuICAgIH1cblxuICAgIGhhbmRsZVN0eWxlcygpO1xuICAgIGFkZERvY3VtZW50UHJlc3MoKTtcblxuICAgIGlmICghaW5zdGFuY2Uuc3RhdGUuaXNNb3VudGVkKSB7XG4gICAgICBwb3BwZXIuc3R5bGUudHJhbnNpdGlvbiA9ICdub25lJztcbiAgICB9XG5cbiAgICAvLyBJZiBmbGlwcGluZyB0byB0aGUgb3Bwb3NpdGUgc2lkZSBhZnRlciBoaWRpbmcgYXQgbGVhc3Qgb25jZSwgdGhlXG4gICAgLy8gYW5pbWF0aW9uIHdpbGwgdXNlIHRoZSB3cm9uZyBwbGFjZW1lbnQgd2l0aG91dCByZXNldHRpbmcgdGhlIGR1cmF0aW9uXG4gICAgaWYgKGdldElzRGVmYXVsdFJlbmRlckZuKCkpIHtcbiAgICAgIGNvbnN0IHtib3gsIGNvbnRlbnR9ID0gZ2V0RGVmYXVsdFRlbXBsYXRlQ2hpbGRyZW4oKTtcbiAgICAgIHNldFRyYW5zaXRpb25EdXJhdGlvbihbYm94LCBjb250ZW50XSwgMCk7XG4gICAgfVxuXG4gICAgb25GaXJzdFVwZGF0ZSA9ICgpOiB2b2lkID0+IHtcbiAgICAgIGlmICghaW5zdGFuY2Uuc3RhdGUuaXNWaXNpYmxlIHx8IGlnbm9yZU9uRmlyc3RVcGRhdGUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZ25vcmVPbkZpcnN0VXBkYXRlID0gdHJ1ZTtcblxuICAgICAgLy8gcmVmbG93XG4gICAgICB2b2lkIHBvcHBlci5vZmZzZXRIZWlnaHQ7XG5cbiAgICAgIHBvcHBlci5zdHlsZS50cmFuc2l0aW9uID0gaW5zdGFuY2UucHJvcHMubW92ZVRyYW5zaXRpb247XG5cbiAgICAgIGlmIChnZXRJc0RlZmF1bHRSZW5kZXJGbigpICYmIGluc3RhbmNlLnByb3BzLmFuaW1hdGlvbikge1xuICAgICAgICBjb25zdCB7Ym94LCBjb250ZW50fSA9IGdldERlZmF1bHRUZW1wbGF0ZUNoaWxkcmVuKCk7XG4gICAgICAgIHNldFRyYW5zaXRpb25EdXJhdGlvbihbYm94LCBjb250ZW50XSwgZHVyYXRpb24pO1xuICAgICAgICBzZXRWaXNpYmlsaXR5U3RhdGUoW2JveCwgY29udGVudF0sICd2aXNpYmxlJyk7XG4gICAgICB9XG5cbiAgICAgIGhhbmRsZUFyaWFDb250ZW50QXR0cmlidXRlKCk7XG4gICAgICBoYW5kbGVBcmlhRXhwYW5kZWRBdHRyaWJ1dGUoKTtcblxuICAgICAgcHVzaElmVW5pcXVlKG1vdW50ZWRJbnN0YW5jZXMsIGluc3RhbmNlKTtcblxuICAgICAgLy8gY2VydGFpbiBtb2RpZmllcnMgKGUuZy4gYG1heFNpemVgKSByZXF1aXJlIGEgc2Vjb25kIHVwZGF0ZSBhZnRlciB0aGVcbiAgICAgIC8vIHBvcHBlciBoYXMgYmVlbiBwb3NpdGlvbmVkIGZvciB0aGUgZmlyc3QgdGltZVxuICAgICAgaW5zdGFuY2UucG9wcGVySW5zdGFuY2U/LmZvcmNlVXBkYXRlKCk7XG5cbiAgICAgIGludm9rZUhvb2soJ29uTW91bnQnLCBbaW5zdGFuY2VdKTtcblxuICAgICAgaWYgKGluc3RhbmNlLnByb3BzLmFuaW1hdGlvbiAmJiBnZXRJc0RlZmF1bHRSZW5kZXJGbigpKSB7XG4gICAgICAgIG9uVHJhbnNpdGlvbmVkSW4oZHVyYXRpb24sICgpID0+IHtcbiAgICAgICAgICBpbnN0YW5jZS5zdGF0ZS5pc1Nob3duID0gdHJ1ZTtcbiAgICAgICAgICBpbnZva2VIb29rKCdvblNob3duJywgW2luc3RhbmNlXSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBtb3VudCgpO1xuICB9XG5cbiAgZnVuY3Rpb24gaGlkZSgpOiB2b2lkIHtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgIGlmIChfX0RFVl9fKSB7XG4gICAgICB3YXJuV2hlbihpbnN0YW5jZS5zdGF0ZS5pc0Rlc3Ryb3llZCwgY3JlYXRlTWVtb3J5TGVha1dhcm5pbmcoJ2hpZGUnKSk7XG4gICAgfVxuXG4gICAgLy8gRWFybHkgYmFpbC1vdXRcbiAgICBjb25zdCBpc0FscmVhZHlIaWRkZW4gPSAhaW5zdGFuY2Uuc3RhdGUuaXNWaXNpYmxlO1xuICAgIGNvbnN0IGlzRGVzdHJveWVkID0gaW5zdGFuY2Uuc3RhdGUuaXNEZXN0cm95ZWQ7XG4gICAgY29uc3QgaXNEaXNhYmxlZCA9ICFpbnN0YW5jZS5zdGF0ZS5pc0VuYWJsZWQ7XG4gICAgY29uc3QgZHVyYXRpb24gPSBnZXRWYWx1ZUF0SW5kZXhPclJldHVybihcbiAgICAgIGluc3RhbmNlLnByb3BzLmR1cmF0aW9uLFxuICAgICAgMSxcbiAgICAgIGRlZmF1bHRQcm9wcy5kdXJhdGlvblxuICAgICk7XG5cbiAgICBpZiAoaXNBbHJlYWR5SGlkZGVuIHx8IGlzRGVzdHJveWVkIHx8IGlzRGlzYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpbnZva2VIb29rKCdvbkhpZGUnLCBbaW5zdGFuY2VdLCBmYWxzZSk7XG4gICAgaWYgKGluc3RhbmNlLnByb3BzLm9uSGlkZShpbnN0YW5jZSkgPT09IGZhbHNlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaW5zdGFuY2Uuc3RhdGUuaXNWaXNpYmxlID0gZmFsc2U7XG4gICAgaW5zdGFuY2Uuc3RhdGUuaXNTaG93biA9IGZhbHNlO1xuICAgIGlnbm9yZU9uRmlyc3RVcGRhdGUgPSBmYWxzZTtcbiAgICBpc1Zpc2libGVGcm9tQ2xpY2sgPSBmYWxzZTtcblxuICAgIGlmIChnZXRJc0RlZmF1bHRSZW5kZXJGbigpKSB7XG4gICAgICBwb3BwZXIuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICAgIH1cblxuICAgIGNsZWFudXBJbnRlcmFjdGl2ZU1vdXNlTGlzdGVuZXJzKCk7XG4gICAgcmVtb3ZlRG9jdW1lbnRQcmVzcygpO1xuICAgIGhhbmRsZVN0eWxlcyh0cnVlKTtcblxuICAgIGlmIChnZXRJc0RlZmF1bHRSZW5kZXJGbigpKSB7XG4gICAgICBjb25zdCB7Ym94LCBjb250ZW50fSA9IGdldERlZmF1bHRUZW1wbGF0ZUNoaWxkcmVuKCk7XG5cbiAgICAgIGlmIChpbnN0YW5jZS5wcm9wcy5hbmltYXRpb24pIHtcbiAgICAgICAgc2V0VHJhbnNpdGlvbkR1cmF0aW9uKFtib3gsIGNvbnRlbnRdLCBkdXJhdGlvbik7XG4gICAgICAgIHNldFZpc2liaWxpdHlTdGF0ZShbYm94LCBjb250ZW50XSwgJ2hpZGRlbicpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGhhbmRsZUFyaWFDb250ZW50QXR0cmlidXRlKCk7XG4gICAgaGFuZGxlQXJpYUV4cGFuZGVkQXR0cmlidXRlKCk7XG5cbiAgICBpZiAoaW5zdGFuY2UucHJvcHMuYW5pbWF0aW9uKSB7XG4gICAgICBpZiAoZ2V0SXNEZWZhdWx0UmVuZGVyRm4oKSkge1xuICAgICAgICBvblRyYW5zaXRpb25lZE91dChkdXJhdGlvbiwgaW5zdGFuY2UudW5tb3VudCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGluc3RhbmNlLnVubW91bnQoKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBoaWRlV2l0aEludGVyYWN0aXZpdHkoZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgIGlmIChfX0RFVl9fKSB7XG4gICAgICB3YXJuV2hlbihcbiAgICAgICAgaW5zdGFuY2Uuc3RhdGUuaXNEZXN0cm95ZWQsXG4gICAgICAgIGNyZWF0ZU1lbW9yeUxlYWtXYXJuaW5nKCdoaWRlV2l0aEludGVyYWN0aXZpdHknKVxuICAgICAgKTtcbiAgICB9XG5cbiAgICBnZXREb2N1bWVudCgpLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGRlYm91bmNlZE9uTW91c2VNb3ZlKTtcbiAgICBwdXNoSWZVbmlxdWUobW91c2VNb3ZlTGlzdGVuZXJzLCBkZWJvdW5jZWRPbk1vdXNlTW92ZSk7XG4gICAgZGVib3VuY2VkT25Nb3VzZU1vdmUoZXZlbnQpO1xuICB9XG5cbiAgZnVuY3Rpb24gdW5tb3VudCgpOiB2b2lkIHtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgIGlmIChfX0RFVl9fKSB7XG4gICAgICB3YXJuV2hlbihpbnN0YW5jZS5zdGF0ZS5pc0Rlc3Ryb3llZCwgY3JlYXRlTWVtb3J5TGVha1dhcm5pbmcoJ3VubW91bnQnKSk7XG4gICAgfVxuXG4gICAgaWYgKGluc3RhbmNlLnN0YXRlLmlzVmlzaWJsZSkge1xuICAgICAgaW5zdGFuY2UuaGlkZSgpO1xuICAgIH1cblxuICAgIGlmICghaW5zdGFuY2Uuc3RhdGUuaXNNb3VudGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZGVzdHJveVBvcHBlckluc3RhbmNlKCk7XG5cbiAgICAvLyBJZiBhIHBvcHBlciBpcyBub3QgaW50ZXJhY3RpdmUsIGl0IHdpbGwgYmUgYXBwZW5kZWQgb3V0c2lkZSB0aGUgcG9wcGVyXG4gICAgLy8gdHJlZSBieSBkZWZhdWx0LiBUaGlzIHNlZW1zIG1haW5seSBmb3IgaW50ZXJhY3RpdmUgdGlwcGllcywgYnV0IHdlIHNob3VsZFxuICAgIC8vIGZpbmQgYSB3b3JrYXJvdW5kIGlmIHBvc3NpYmxlXG4gICAgZ2V0TmVzdGVkUG9wcGVyVHJlZSgpLmZvckVhY2goKG5lc3RlZFBvcHBlcikgPT4ge1xuICAgICAgbmVzdGVkUG9wcGVyLl90aXBweSEudW5tb3VudCgpO1xuICAgIH0pO1xuXG4gICAgaWYgKHBvcHBlci5wYXJlbnROb2RlKSB7XG4gICAgICBwb3BwZXIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChwb3BwZXIpO1xuICAgIH1cblxuICAgIG1vdW50ZWRJbnN0YW5jZXMgPSBtb3VudGVkSW5zdGFuY2VzLmZpbHRlcigoaSkgPT4gaSAhPT0gaW5zdGFuY2UpO1xuXG4gICAgaW5zdGFuY2Uuc3RhdGUuaXNNb3VudGVkID0gZmFsc2U7XG4gICAgaW52b2tlSG9vaygnb25IaWRkZW4nLCBbaW5zdGFuY2VdKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRlc3Ryb3koKTogdm9pZCB7XG4gICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgICBpZiAoX19ERVZfXykge1xuICAgICAgd2FybldoZW4oaW5zdGFuY2Uuc3RhdGUuaXNEZXN0cm95ZWQsIGNyZWF0ZU1lbW9yeUxlYWtXYXJuaW5nKCdkZXN0cm95JykpO1xuICAgIH1cblxuICAgIGlmIChpbnN0YW5jZS5zdGF0ZS5pc0Rlc3Ryb3llZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGluc3RhbmNlLmNsZWFyRGVsYXlUaW1lb3V0cygpO1xuICAgIGluc3RhbmNlLnVubW91bnQoKTtcblxuICAgIHJlbW92ZUxpc3RlbmVycygpO1xuXG4gICAgZGVsZXRlIHJlZmVyZW5jZS5fdGlwcHk7XG5cbiAgICBpbnN0YW5jZS5zdGF0ZS5pc0Rlc3Ryb3llZCA9IHRydWU7XG5cbiAgICBpbnZva2VIb29rKCdvbkRlc3Ryb3knLCBbaW5zdGFuY2VdKTtcbiAgfVxufVxuIiwiaW1wb3J0IGJpbmRHbG9iYWxFdmVudExpc3RlbmVycywge1xuICBjdXJyZW50SW5wdXQsXG59IGZyb20gJy4vYmluZEdsb2JhbEV2ZW50TGlzdGVuZXJzJztcbmltcG9ydCBjcmVhdGVUaXBweSwge21vdW50ZWRJbnN0YW5jZXN9IGZyb20gJy4vY3JlYXRlVGlwcHknO1xuaW1wb3J0IHtnZXRBcnJheU9mRWxlbWVudHMsIGlzRWxlbWVudCwgaXNSZWZlcmVuY2VFbGVtZW50fSBmcm9tICcuL2RvbS11dGlscyc7XG5pbXBvcnQge2RlZmF1bHRQcm9wcywgc2V0RGVmYXVsdFByb3BzLCB2YWxpZGF0ZVByb3BzfSBmcm9tICcuL3Byb3BzJztcbmltcG9ydCB7SGlkZUFsbCwgSGlkZUFsbE9wdGlvbnMsIEluc3RhbmNlLCBQcm9wcywgVGFyZ2V0c30gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQge3ZhbGlkYXRlVGFyZ2V0cywgd2FybldoZW59IGZyb20gJy4vdmFsaWRhdGlvbic7XG5cbmZ1bmN0aW9uIHRpcHB5KFxuICB0YXJnZXRzOiBUYXJnZXRzLFxuICBvcHRpb25hbFByb3BzOiBQYXJ0aWFsPFByb3BzPiA9IHt9XG4pOiBJbnN0YW5jZSB8IEluc3RhbmNlW10ge1xuICBjb25zdCBwbHVnaW5zID0gZGVmYXVsdFByb3BzLnBsdWdpbnMuY29uY2F0KG9wdGlvbmFsUHJvcHMucGx1Z2lucyB8fCBbXSk7XG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgaWYgKF9fREVWX18pIHtcbiAgICB2YWxpZGF0ZVRhcmdldHModGFyZ2V0cyk7XG4gICAgdmFsaWRhdGVQcm9wcyhvcHRpb25hbFByb3BzLCBwbHVnaW5zKTtcbiAgfVxuXG4gIGJpbmRHbG9iYWxFdmVudExpc3RlbmVycygpO1xuXG4gIGNvbnN0IHBhc3NlZFByb3BzOiBQYXJ0aWFsPFByb3BzPiA9IHsuLi5vcHRpb25hbFByb3BzLCBwbHVnaW5zfTtcblxuICBjb25zdCBlbGVtZW50cyA9IGdldEFycmF5T2ZFbGVtZW50cyh0YXJnZXRzKTtcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICBpZiAoX19ERVZfXykge1xuICAgIGNvbnN0IGlzU2luZ2xlQ29udGVudEVsZW1lbnQgPSBpc0VsZW1lbnQocGFzc2VkUHJvcHMuY29udGVudCk7XG4gICAgY29uc3QgaXNNb3JlVGhhbk9uZVJlZmVyZW5jZUVsZW1lbnQgPSBlbGVtZW50cy5sZW5ndGggPiAxO1xuICAgIHdhcm5XaGVuKFxuICAgICAgaXNTaW5nbGVDb250ZW50RWxlbWVudCAmJiBpc01vcmVUaGFuT25lUmVmZXJlbmNlRWxlbWVudCxcbiAgICAgIFtcbiAgICAgICAgJ3RpcHB5KCkgd2FzIHBhc3NlZCBhbiBFbGVtZW50IGFzIHRoZSBgY29udGVudGAgcHJvcCwgYnV0IG1vcmUgdGhhbicsXG4gICAgICAgICdvbmUgdGlwcHkgaW5zdGFuY2Ugd2FzIGNyZWF0ZWQgYnkgdGhpcyBpbnZvY2F0aW9uLiBUaGlzIG1lYW5zIHRoZScsXG4gICAgICAgICdjb250ZW50IGVsZW1lbnQgd2lsbCBvbmx5IGJlIGFwcGVuZGVkIHRvIHRoZSBsYXN0IHRpcHB5IGluc3RhbmNlLicsXG4gICAgICAgICdcXG5cXG4nLFxuICAgICAgICAnSW5zdGVhZCwgcGFzcyB0aGUgLmlubmVySFRNTCBvZiB0aGUgZWxlbWVudCwgb3IgdXNlIGEgZnVuY3Rpb24gdGhhdCcsXG4gICAgICAgICdyZXR1cm5zIGEgY2xvbmVkIHZlcnNpb24gb2YgdGhlIGVsZW1lbnQgaW5zdGVhZC4nLFxuICAgICAgICAnXFxuXFxuJyxcbiAgICAgICAgJzEpIGNvbnRlbnQ6IGVsZW1lbnQuaW5uZXJIVE1MXFxuJyxcbiAgICAgICAgJzIpIGNvbnRlbnQ6ICgpID0+IGVsZW1lbnQuY2xvbmVOb2RlKHRydWUpJyxcbiAgICAgIF0uam9pbignICcpXG4gICAgKTtcbiAgfVxuXG4gIGNvbnN0IGluc3RhbmNlcyA9IGVsZW1lbnRzLnJlZHVjZTxJbnN0YW5jZVtdPihcbiAgICAoYWNjLCByZWZlcmVuY2UpOiBJbnN0YW5jZVtdID0+IHtcbiAgICAgIGNvbnN0IGluc3RhbmNlID0gcmVmZXJlbmNlICYmIGNyZWF0ZVRpcHB5KHJlZmVyZW5jZSwgcGFzc2VkUHJvcHMpO1xuXG4gICAgICBpZiAoaW5zdGFuY2UpIHtcbiAgICAgICAgYWNjLnB1c2goaW5zdGFuY2UpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gYWNjO1xuICAgIH0sXG4gICAgW11cbiAgKTtcblxuICByZXR1cm4gaXNFbGVtZW50KHRhcmdldHMpID8gaW5zdGFuY2VzWzBdIDogaW5zdGFuY2VzO1xufVxuXG50aXBweS5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHM7XG50aXBweS5zZXREZWZhdWx0UHJvcHMgPSBzZXREZWZhdWx0UHJvcHM7XG50aXBweS5jdXJyZW50SW5wdXQgPSBjdXJyZW50SW5wdXQ7XG5cbmV4cG9ydCBkZWZhdWx0IHRpcHB5O1xuXG5leHBvcnQgY29uc3QgaGlkZUFsbDogSGlkZUFsbCA9ICh7XG4gIGV4Y2x1ZGU6IGV4Y2x1ZGVkUmVmZXJlbmNlT3JJbnN0YW5jZSxcbiAgZHVyYXRpb24sXG59OiBIaWRlQWxsT3B0aW9ucyA9IHt9KSA9PiB7XG4gIG1vdW50ZWRJbnN0YW5jZXMuZm9yRWFjaCgoaW5zdGFuY2UpID0+IHtcbiAgICBsZXQgaXNFeGNsdWRlZCA9IGZhbHNlO1xuXG4gICAgaWYgKGV4Y2x1ZGVkUmVmZXJlbmNlT3JJbnN0YW5jZSkge1xuICAgICAgaXNFeGNsdWRlZCA9IGlzUmVmZXJlbmNlRWxlbWVudChleGNsdWRlZFJlZmVyZW5jZU9ySW5zdGFuY2UpXG4gICAgICAgID8gaW5zdGFuY2UucmVmZXJlbmNlID09PSBleGNsdWRlZFJlZmVyZW5jZU9ySW5zdGFuY2VcbiAgICAgICAgOiBpbnN0YW5jZS5wb3BwZXIgPT09IChleGNsdWRlZFJlZmVyZW5jZU9ySW5zdGFuY2UgYXMgSW5zdGFuY2UpLnBvcHBlcjtcbiAgICB9XG5cbiAgICBpZiAoIWlzRXhjbHVkZWQpIHtcbiAgICAgIGNvbnN0IG9yaWdpbmFsRHVyYXRpb24gPSBpbnN0YW5jZS5wcm9wcy5kdXJhdGlvbjtcblxuICAgICAgaW5zdGFuY2Uuc2V0UHJvcHMoe2R1cmF0aW9ufSk7XG4gICAgICBpbnN0YW5jZS5oaWRlKCk7XG5cbiAgICAgIGlmICghaW5zdGFuY2Uuc3RhdGUuaXNEZXN0cm95ZWQpIHtcbiAgICAgICAgaW5zdGFuY2Uuc2V0UHJvcHMoe2R1cmF0aW9uOiBvcmlnaW5hbER1cmF0aW9ufSk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn07XG4iLCJpbXBvcnQgdGlwcHkgZnJvbSAnLi4nO1xuaW1wb3J0IHtkaXZ9IGZyb20gJy4uL2RvbS11dGlscyc7XG5pbXBvcnQge1xuICBDcmVhdGVTaW5nbGV0b24sXG4gIFBsdWdpbixcbiAgQ3JlYXRlU2luZ2xldG9uUHJvcHMsXG4gIFJlZmVyZW5jZUVsZW1lbnQsXG4gIENyZWF0ZVNpbmdsZXRvbkluc3RhbmNlLFxuICBJbnN0YW5jZSxcbiAgUHJvcHMsXG59IGZyb20gJy4uL3R5cGVzJztcbmltcG9ydCB7bm9ybWFsaXplVG9BcnJheSwgcmVtb3ZlUHJvcGVydGllc30gZnJvbSAnLi4vdXRpbHMnO1xuaW1wb3J0IHtlcnJvcldoZW59IGZyb20gJy4uL3ZhbGlkYXRpb24nO1xuaW1wb3J0IHthcHBseVN0eWxlcywgTW9kaWZpZXJ9IGZyb20gJ0Bwb3BwZXJqcy9jb3JlJztcblxuLy8gVGhlIGRlZmF1bHQgYGFwcGx5U3R5bGVzYCBtb2RpZmllciBoYXMgYSBjbGVhbnVwIGZ1bmN0aW9uIHRoYXQgZ2V0cyBjYWxsZWRcbi8vIGV2ZXJ5IHRpbWUgdGhlIHBvcHBlciBpcyBkZXN0cm95ZWQgKGkuZS4gYSBuZXcgdGFyZ2V0KSwgcmVtb3ZpbmcgdGhlIHN0eWxlc1xuLy8gYW5kIGNhdXNpbmcgdHJhbnNpdGlvbnMgdG8gYnJlYWsgZm9yIHNpbmdsZXRvbnMgd2hlbiB0aGUgY29uc29sZSBpcyBvcGVuLCBidXRcbi8vIG1vc3Qgbm90YWJseSBmb3Igbm9uLXRyYW5zZm9ybSBzdHlsZXMgYmVpbmcgdXNlZCwgYGdwdUFjY2VsZXJhdGlvbjogZmFsc2VgLlxuY29uc3QgYXBwbHlTdHlsZXNNb2RpZmllcjogTW9kaWZpZXI8J2FwcGx5U3R5bGVzJywgUmVjb3JkPHN0cmluZywgdW5rbm93bj4+ID0ge1xuICAuLi5hcHBseVN0eWxlcyxcbiAgZWZmZWN0KHtzdGF0ZX0pIHtcbiAgICBjb25zdCBpbml0aWFsU3R5bGVzID0ge1xuICAgICAgcG9wcGVyOiB7XG4gICAgICAgIHBvc2l0aW9uOiBzdGF0ZS5vcHRpb25zLnN0cmF0ZWd5LFxuICAgICAgICBsZWZ0OiAnMCcsXG4gICAgICAgIHRvcDogJzAnLFxuICAgICAgICBtYXJnaW46ICcwJyxcbiAgICAgIH0sXG4gICAgICBhcnJvdzoge1xuICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIH0sXG4gICAgICByZWZlcmVuY2U6IHt9LFxuICAgIH07XG5cbiAgICBPYmplY3QuYXNzaWduKHN0YXRlLmVsZW1lbnRzLnBvcHBlci5zdHlsZSwgaW5pdGlhbFN0eWxlcy5wb3BwZXIpO1xuICAgIHN0YXRlLnN0eWxlcyA9IGluaXRpYWxTdHlsZXM7XG5cbiAgICBpZiAoc3RhdGUuZWxlbWVudHMuYXJyb3cpIHtcbiAgICAgIE9iamVjdC5hc3NpZ24oc3RhdGUuZWxlbWVudHMuYXJyb3cuc3R5bGUsIGluaXRpYWxTdHlsZXMuYXJyb3cpO1xuICAgIH1cblxuICAgIC8vIGludGVudGlvbmFsbHkgcmV0dXJuIG5vIGNsZWFudXAgZnVuY3Rpb25cbiAgICAvLyByZXR1cm4gKCkgPT4geyAuLi4gfVxuICB9LFxufTtcblxuY29uc3QgY3JlYXRlU2luZ2xldG9uOiBDcmVhdGVTaW5nbGV0b24gPSAoXG4gIHRpcHB5SW5zdGFuY2VzLFxuICBvcHRpb25hbFByb3BzID0ge31cbikgPT4ge1xuICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICBpZiAoX19ERVZfXykge1xuICAgIGVycm9yV2hlbihcbiAgICAgICFBcnJheS5pc0FycmF5KHRpcHB5SW5zdGFuY2VzKSxcbiAgICAgIFtcbiAgICAgICAgJ1RoZSBmaXJzdCBhcmd1bWVudCBwYXNzZWQgdG8gY3JlYXRlU2luZ2xldG9uKCkgbXVzdCBiZSBhbiBhcnJheSBvZicsXG4gICAgICAgICd0aXBweSBpbnN0YW5jZXMuIFRoZSBwYXNzZWQgdmFsdWUgd2FzJyxcbiAgICAgICAgU3RyaW5nKHRpcHB5SW5zdGFuY2VzKSxcbiAgICAgIF0uam9pbignICcpXG4gICAgKTtcbiAgfVxuXG4gIGxldCBpbmRpdmlkdWFsSW5zdGFuY2VzID0gdGlwcHlJbnN0YW5jZXM7XG4gIGxldCByZWZlcmVuY2VzOiBBcnJheTxSZWZlcmVuY2VFbGVtZW50PiA9IFtdO1xuICBsZXQgdHJpZ2dlclRhcmdldHM6IEFycmF5PEVsZW1lbnQ+ID0gW107XG4gIGxldCBjdXJyZW50VGFyZ2V0OiBFbGVtZW50IHwgbnVsbDtcbiAgbGV0IG92ZXJyaWRlcyA9IG9wdGlvbmFsUHJvcHMub3ZlcnJpZGVzO1xuICBsZXQgaW50ZXJjZXB0U2V0UHJvcHNDbGVhbnVwczogQXJyYXk8KCkgPT4gdm9pZD4gPSBbXTtcbiAgbGV0IHNob3duT25DcmVhdGUgPSBmYWxzZTtcblxuICBmdW5jdGlvbiBzZXRUcmlnZ2VyVGFyZ2V0cygpOiB2b2lkIHtcbiAgICB0cmlnZ2VyVGFyZ2V0cyA9IGluZGl2aWR1YWxJbnN0YW5jZXNcbiAgICAgIC5tYXAoKGluc3RhbmNlKSA9PlxuICAgICAgICBub3JtYWxpemVUb0FycmF5KGluc3RhbmNlLnByb3BzLnRyaWdnZXJUYXJnZXQgfHwgaW5zdGFuY2UucmVmZXJlbmNlKVxuICAgICAgKVxuICAgICAgLnJlZHVjZSgoYWNjLCBpdGVtKSA9PiBhY2MuY29uY2F0KGl0ZW0pLCBbXSk7XG4gIH1cblxuICBmdW5jdGlvbiBzZXRSZWZlcmVuY2VzKCk6IHZvaWQge1xuICAgIHJlZmVyZW5jZXMgPSBpbmRpdmlkdWFsSW5zdGFuY2VzLm1hcCgoaW5zdGFuY2UpID0+IGluc3RhbmNlLnJlZmVyZW5jZSk7XG4gIH1cblxuICBmdW5jdGlvbiBlbmFibGVJbnN0YW5jZXMoaXNFbmFibGVkOiBib29sZWFuKTogdm9pZCB7XG4gICAgaW5kaXZpZHVhbEluc3RhbmNlcy5mb3JFYWNoKChpbnN0YW5jZSkgPT4ge1xuICAgICAgaWYgKGlzRW5hYmxlZCkge1xuICAgICAgICBpbnN0YW5jZS5lbmFibGUoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGluc3RhbmNlLmRpc2FibGUoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGludGVyY2VwdFNldFByb3BzKHNpbmdsZXRvbjogSW5zdGFuY2UpOiBBcnJheTwoKSA9PiB2b2lkPiB7XG4gICAgcmV0dXJuIGluZGl2aWR1YWxJbnN0YW5jZXMubWFwKChpbnN0YW5jZSkgPT4ge1xuICAgICAgY29uc3Qgb3JpZ2luYWxTZXRQcm9wcyA9IGluc3RhbmNlLnNldFByb3BzO1xuXG4gICAgICBpbnN0YW5jZS5zZXRQcm9wcyA9IChwcm9wcyk6IHZvaWQgPT4ge1xuICAgICAgICBvcmlnaW5hbFNldFByb3BzKHByb3BzKTtcblxuICAgICAgICBpZiAoaW5zdGFuY2UucmVmZXJlbmNlID09PSBjdXJyZW50VGFyZ2V0KSB7XG4gICAgICAgICAgc2luZ2xldG9uLnNldFByb3BzKHByb3BzKTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgcmV0dXJuICgpOiB2b2lkID0+IHtcbiAgICAgICAgaW5zdGFuY2Uuc2V0UHJvcHMgPSBvcmlnaW5hbFNldFByb3BzO1xuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIGhhdmUgdG8gcGFzcyBzaW5nbGV0b24sIGFzIGl0IG1heWJlIHVuZGVmaW5lZCBvbiBmaXJzdCBjYWxsXG4gIGZ1bmN0aW9uIHByZXBhcmVJbnN0YW5jZShcbiAgICBzaW5nbGV0b246IEluc3RhbmNlLFxuICAgIHRhcmdldDogUmVmZXJlbmNlRWxlbWVudFxuICApOiB2b2lkIHtcbiAgICBjb25zdCBpbmRleCA9IHRyaWdnZXJUYXJnZXRzLmluZGV4T2YodGFyZ2V0KTtcblxuICAgIC8vIGJhaWwtb3V0XG4gICAgaWYgKHRhcmdldCA9PT0gY3VycmVudFRhcmdldCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGN1cnJlbnRUYXJnZXQgPSB0YXJnZXQ7XG5cbiAgICBjb25zdCBvdmVycmlkZVByb3BzOiBQYXJ0aWFsPFByb3BzPiA9IChvdmVycmlkZXMgfHwgW10pXG4gICAgICAuY29uY2F0KCdjb250ZW50JylcbiAgICAgIC5yZWR1Y2UoKGFjYywgcHJvcCkgPT4ge1xuICAgICAgICAoYWNjIGFzIGFueSlbcHJvcF0gPSBpbmRpdmlkdWFsSW5zdGFuY2VzW2luZGV4XS5wcm9wc1twcm9wXTtcbiAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgIH0sIHt9KTtcblxuICAgIHNpbmdsZXRvbi5zZXRQcm9wcyh7XG4gICAgICAuLi5vdmVycmlkZVByb3BzLFxuICAgICAgZ2V0UmVmZXJlbmNlQ2xpZW50UmVjdDpcbiAgICAgICAgdHlwZW9mIG92ZXJyaWRlUHJvcHMuZ2V0UmVmZXJlbmNlQ2xpZW50UmVjdCA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICAgID8gb3ZlcnJpZGVQcm9wcy5nZXRSZWZlcmVuY2VDbGllbnRSZWN0XG4gICAgICAgICAgOiAoKTogQ2xpZW50UmVjdCA9PiByZWZlcmVuY2VzW2luZGV4XT8uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG4gICAgfSk7XG4gIH1cblxuICBlbmFibGVJbnN0YW5jZXMoZmFsc2UpO1xuICBzZXRSZWZlcmVuY2VzKCk7XG4gIHNldFRyaWdnZXJUYXJnZXRzKCk7XG5cbiAgY29uc3QgcGx1Z2luOiBQbHVnaW4gPSB7XG4gICAgZm4oKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBvbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgICAgICAgZW5hYmxlSW5zdGFuY2VzKHRydWUpO1xuICAgICAgICB9LFxuICAgICAgICBvbkhpZGRlbigpOiB2b2lkIHtcbiAgICAgICAgICBjdXJyZW50VGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfSxcbiAgICAgICAgb25DbGlja091dHNpZGUoaW5zdGFuY2UpOiB2b2lkIHtcbiAgICAgICAgICBpZiAoaW5zdGFuY2UucHJvcHMuc2hvd09uQ3JlYXRlICYmICFzaG93bk9uQ3JlYXRlKSB7XG4gICAgICAgICAgICBzaG93bk9uQ3JlYXRlID0gdHJ1ZTtcbiAgICAgICAgICAgIGN1cnJlbnRUYXJnZXQgPSBudWxsO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgb25TaG93KGluc3RhbmNlKTogdm9pZCB7XG4gICAgICAgICAgaWYgKGluc3RhbmNlLnByb3BzLnNob3dPbkNyZWF0ZSAmJiAhc2hvd25PbkNyZWF0ZSkge1xuICAgICAgICAgICAgc2hvd25PbkNyZWF0ZSA9IHRydWU7XG4gICAgICAgICAgICBwcmVwYXJlSW5zdGFuY2UoaW5zdGFuY2UsIHJlZmVyZW5jZXNbMF0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgb25UcmlnZ2VyKGluc3RhbmNlLCBldmVudCk6IHZvaWQge1xuICAgICAgICAgIHByZXBhcmVJbnN0YW5jZShpbnN0YW5jZSwgZXZlbnQuY3VycmVudFRhcmdldCBhcyBFbGVtZW50KTtcbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgfSxcbiAgfTtcblxuICBjb25zdCBzaW5nbGV0b24gPSB0aXBweShkaXYoKSwge1xuICAgIC4uLnJlbW92ZVByb3BlcnRpZXMob3B0aW9uYWxQcm9wcywgWydvdmVycmlkZXMnXSksXG4gICAgcGx1Z2luczogW3BsdWdpbiwgLi4uKG9wdGlvbmFsUHJvcHMucGx1Z2lucyB8fCBbXSldLFxuICAgIHRyaWdnZXJUYXJnZXQ6IHRyaWdnZXJUYXJnZXRzLFxuICAgIHBvcHBlck9wdGlvbnM6IHtcbiAgICAgIC4uLm9wdGlvbmFsUHJvcHMucG9wcGVyT3B0aW9ucyxcbiAgICAgIG1vZGlmaWVyczogW1xuICAgICAgICAuLi4ob3B0aW9uYWxQcm9wcy5wb3BwZXJPcHRpb25zPy5tb2RpZmllcnMgfHwgW10pLFxuICAgICAgICBhcHBseVN0eWxlc01vZGlmaWVyLFxuICAgICAgXSxcbiAgICB9LFxuICB9KSBhcyBDcmVhdGVTaW5nbGV0b25JbnN0YW5jZTxDcmVhdGVTaW5nbGV0b25Qcm9wcz47XG5cbiAgY29uc3Qgb3JpZ2luYWxTaG93ID0gc2luZ2xldG9uLnNob3c7XG5cbiAgc2luZ2xldG9uLnNob3cgPSAodGFyZ2V0PzogUmVmZXJlbmNlRWxlbWVudCB8IEluc3RhbmNlIHwgbnVtYmVyKTogdm9pZCA9PiB7XG4gICAgb3JpZ2luYWxTaG93KCk7XG5cbiAgICAvLyBmaXJzdCB0aW1lLCBzaG93T25DcmVhdGUgb3IgcHJvZ3JhbW1hdGljIGNhbGwgd2l0aCBubyBwYXJhbXNcbiAgICAvLyBkZWZhdWx0IHRvIHNob3dpbmcgZmlyc3QgaW5zdGFuY2VcbiAgICBpZiAoIWN1cnJlbnRUYXJnZXQgJiYgdGFyZ2V0ID09IG51bGwpIHtcbiAgICAgIHJldHVybiBwcmVwYXJlSW5zdGFuY2Uoc2luZ2xldG9uLCByZWZlcmVuY2VzWzBdKTtcbiAgICB9XG5cbiAgICAvLyB0cmlnZ2VyZWQgZnJvbSBldmVudCAoZG8gbm90aGluZyBhcyBwcmVwYXJlSW5zdGFuY2UgYWxyZWFkeSBjYWxsZWQgYnkgb25UcmlnZ2VyKVxuICAgIC8vIHByb2dyYW1tYXRpYyBjYWxsIHdpdGggbm8gcGFyYW1zIHdoZW4gYWxyZWFkeSB2aXNpYmxlIChkbyBub3RoaW5nIGFnYWluKVxuICAgIGlmIChjdXJyZW50VGFyZ2V0ICYmIHRhcmdldCA9PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gdGFyZ2V0IGlzIGluZGV4IG9mIGluc3RhbmNlXG4gICAgaWYgKHR5cGVvZiB0YXJnZXQgPT09ICdudW1iZXInKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICByZWZlcmVuY2VzW3RhcmdldF0gJiYgcHJlcGFyZUluc3RhbmNlKHNpbmdsZXRvbiwgcmVmZXJlbmNlc1t0YXJnZXRdKVxuICAgICAgKTtcbiAgICB9XG5cbiAgICAvLyB0YXJnZXQgaXMgYSBjaGlsZCB0aXBweSBpbnN0YW5jZVxuICAgIGlmIChpbmRpdmlkdWFsSW5zdGFuY2VzLmluZGV4T2YodGFyZ2V0IGFzIEluc3RhbmNlKSA+PSAwKSB7XG4gICAgICBjb25zdCByZWYgPSAodGFyZ2V0IGFzIEluc3RhbmNlKS5yZWZlcmVuY2U7XG4gICAgICByZXR1cm4gcHJlcGFyZUluc3RhbmNlKHNpbmdsZXRvbiwgcmVmKTtcbiAgICB9XG5cbiAgICAvLyB0YXJnZXQgaXMgYSBSZWZlcmVuY2VFbGVtZW50XG4gICAgaWYgKHJlZmVyZW5jZXMuaW5kZXhPZih0YXJnZXQgYXMgUmVmZXJlbmNlRWxlbWVudCkgPj0gMCkge1xuICAgICAgcmV0dXJuIHByZXBhcmVJbnN0YW5jZShzaW5nbGV0b24sIHRhcmdldCBhcyBSZWZlcmVuY2VFbGVtZW50KTtcbiAgICB9XG4gIH07XG5cbiAgc2luZ2xldG9uLnNob3dOZXh0ID0gKCk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IGZpcnN0ID0gcmVmZXJlbmNlc1swXTtcbiAgICBpZiAoIWN1cnJlbnRUYXJnZXQpIHtcbiAgICAgIHJldHVybiBzaW5nbGV0b24uc2hvdygwKTtcbiAgICB9XG4gICAgY29uc3QgaW5kZXggPSByZWZlcmVuY2VzLmluZGV4T2YoY3VycmVudFRhcmdldCk7XG4gICAgc2luZ2xldG9uLnNob3cocmVmZXJlbmNlc1tpbmRleCArIDFdIHx8IGZpcnN0KTtcbiAgfTtcblxuICBzaW5nbGV0b24uc2hvd1ByZXZpb3VzID0gKCk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IGxhc3QgPSByZWZlcmVuY2VzW3JlZmVyZW5jZXMubGVuZ3RoIC0gMV07XG4gICAgaWYgKCFjdXJyZW50VGFyZ2V0KSB7XG4gICAgICByZXR1cm4gc2luZ2xldG9uLnNob3cobGFzdCk7XG4gICAgfVxuICAgIGNvbnN0IGluZGV4ID0gcmVmZXJlbmNlcy5pbmRleE9mKGN1cnJlbnRUYXJnZXQpO1xuICAgIGNvbnN0IHRhcmdldCA9IHJlZmVyZW5jZXNbaW5kZXggLSAxXSB8fCBsYXN0O1xuICAgIHNpbmdsZXRvbi5zaG93KHRhcmdldCk7XG4gIH07XG5cbiAgY29uc3Qgb3JpZ2luYWxTZXRQcm9wcyA9IHNpbmdsZXRvbi5zZXRQcm9wcztcblxuICBzaW5nbGV0b24uc2V0UHJvcHMgPSAocHJvcHMpOiB2b2lkID0+IHtcbiAgICBvdmVycmlkZXMgPSBwcm9wcy5vdmVycmlkZXMgfHwgb3ZlcnJpZGVzO1xuICAgIG9yaWdpbmFsU2V0UHJvcHMocHJvcHMpO1xuICB9O1xuXG4gIHNpbmdsZXRvbi5zZXRJbnN0YW5jZXMgPSAobmV4dEluc3RhbmNlcyk6IHZvaWQgPT4ge1xuICAgIGVuYWJsZUluc3RhbmNlcyh0cnVlKTtcbiAgICBpbnRlcmNlcHRTZXRQcm9wc0NsZWFudXBzLmZvckVhY2goKGZuKSA9PiBmbigpKTtcblxuICAgIGluZGl2aWR1YWxJbnN0YW5jZXMgPSBuZXh0SW5zdGFuY2VzO1xuXG4gICAgZW5hYmxlSW5zdGFuY2VzKGZhbHNlKTtcbiAgICBzZXRSZWZlcmVuY2VzKCk7XG4gICAgc2V0VHJpZ2dlclRhcmdldHMoKTtcbiAgICBpbnRlcmNlcHRTZXRQcm9wc0NsZWFudXBzID0gaW50ZXJjZXB0U2V0UHJvcHMoc2luZ2xldG9uKTtcblxuICAgIHNpbmdsZXRvbi5zZXRQcm9wcyh7dHJpZ2dlclRhcmdldDogdHJpZ2dlclRhcmdldHN9KTtcbiAgfTtcblxuICBpbnRlcmNlcHRTZXRQcm9wc0NsZWFudXBzID0gaW50ZXJjZXB0U2V0UHJvcHMoc2luZ2xldG9uKTtcblxuICByZXR1cm4gc2luZ2xldG9uO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlU2luZ2xldG9uO1xuIiwiaW1wb3J0IHRpcHB5IGZyb20gJy4uJztcbmltcG9ydCB7VE9VQ0hfT1BUSU9OU30gZnJvbSAnLi4vY29uc3RhbnRzJztcbmltcG9ydCB7ZGVmYXVsdFByb3BzfSBmcm9tICcuLi9wcm9wcyc7XG5pbXBvcnQge0luc3RhbmNlLCBQcm9wcywgVGFyZ2V0c30gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHtMaXN0ZW5lck9iamVjdH0gZnJvbSAnLi4vdHlwZXMtaW50ZXJuYWwnO1xuaW1wb3J0IHtub3JtYWxpemVUb0FycmF5LCByZW1vdmVQcm9wZXJ0aWVzfSBmcm9tICcuLi91dGlscyc7XG5pbXBvcnQge2Vycm9yV2hlbn0gZnJvbSAnLi4vdmFsaWRhdGlvbic7XG5cbmNvbnN0IEJVQkJMSU5HX0VWRU5UU19NQVAgPSB7XG4gIG1vdXNlb3ZlcjogJ21vdXNlZW50ZXInLFxuICBmb2N1c2luOiAnZm9jdXMnLFxuICBjbGljazogJ2NsaWNrJyxcbn07XG5cbi8qKlxuICogQ3JlYXRlcyBhIGRlbGVnYXRlIGluc3RhbmNlIHRoYXQgY29udHJvbHMgdGhlIGNyZWF0aW9uIG9mIHRpcHB5IGluc3RhbmNlc1xuICogZm9yIGNoaWxkIGVsZW1lbnRzIChgdGFyZ2V0YCBDU1Mgc2VsZWN0b3IpLlxuICovXG5mdW5jdGlvbiBkZWxlZ2F0ZShcbiAgdGFyZ2V0czogVGFyZ2V0cyxcbiAgcHJvcHM6IFBhcnRpYWw8UHJvcHM+ICYge3RhcmdldDogc3RyaW5nfVxuKTogSW5zdGFuY2UgfCBJbnN0YW5jZVtdIHtcbiAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgaWYgKF9fREVWX18pIHtcbiAgICBlcnJvcldoZW4oXG4gICAgICAhKHByb3BzICYmIHByb3BzLnRhcmdldCksXG4gICAgICBbXG4gICAgICAgICdZb3UgbXVzdCBzcGVjaXR5IGEgYHRhcmdldGAgcHJvcCBpbmRpY2F0aW5nIGEgQ1NTIHNlbGVjdG9yIHN0cmluZyBtYXRjaGluZycsXG4gICAgICAgICd0aGUgdGFyZ2V0IGVsZW1lbnRzIHRoYXQgc2hvdWxkIHJlY2VpdmUgYSB0aXBweS4nLFxuICAgICAgXS5qb2luKCcgJylcbiAgICApO1xuICB9XG5cbiAgbGV0IGxpc3RlbmVyczogTGlzdGVuZXJPYmplY3RbXSA9IFtdO1xuICBsZXQgY2hpbGRUaXBweUluc3RhbmNlczogSW5zdGFuY2VbXSA9IFtdO1xuICBsZXQgZGlzYWJsZWQgPSBmYWxzZTtcblxuICBjb25zdCB7dGFyZ2V0fSA9IHByb3BzO1xuXG4gIGNvbnN0IG5hdGl2ZVByb3BzID0gcmVtb3ZlUHJvcGVydGllcyhwcm9wcywgWyd0YXJnZXQnXSk7XG4gIGNvbnN0IHBhcmVudFByb3BzID0gey4uLm5hdGl2ZVByb3BzLCB0cmlnZ2VyOiAnbWFudWFsJywgdG91Y2g6IGZhbHNlfTtcbiAgY29uc3QgY2hpbGRQcm9wcyA9IHtcbiAgICB0b3VjaDogZGVmYXVsdFByb3BzLnRvdWNoLFxuICAgIC4uLm5hdGl2ZVByb3BzLFxuICAgIHNob3dPbkNyZWF0ZTogdHJ1ZSxcbiAgfTtcblxuICBjb25zdCByZXR1cm5WYWx1ZSA9IHRpcHB5KHRhcmdldHMsIHBhcmVudFByb3BzKTtcbiAgY29uc3Qgbm9ybWFsaXplZFJldHVyblZhbHVlID0gbm9ybWFsaXplVG9BcnJheShyZXR1cm5WYWx1ZSk7XG5cbiAgZnVuY3Rpb24gb25UcmlnZ2VyKGV2ZW50OiBFdmVudCk6IHZvaWQge1xuICAgIGlmICghZXZlbnQudGFyZ2V0IHx8IGRpc2FibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgdGFyZ2V0Tm9kZSA9IChldmVudC50YXJnZXQgYXMgRWxlbWVudCkuY2xvc2VzdCh0YXJnZXQpO1xuXG4gICAgaWYgKCF0YXJnZXROb2RlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gR2V0IHJlbGV2YW50IHRyaWdnZXIgd2l0aCBmYWxsYmFja3M6XG4gICAgLy8gMS4gQ2hlY2sgYGRhdGEtdGlwcHktdHJpZ2dlcmAgYXR0cmlidXRlIG9uIHRhcmdldCBub2RlXG4gICAgLy8gMi4gRmFsbGJhY2sgdG8gYHRyaWdnZXJgIHBhc3NlZCB0byBgZGVsZWdhdGUoKWBcbiAgICAvLyAzLiBGYWxsYmFjayB0byBgZGVmYXVsdFByb3BzLnRyaWdnZXJgXG4gICAgY29uc3QgdHJpZ2dlciA9XG4gICAgICB0YXJnZXROb2RlLmdldEF0dHJpYnV0ZSgnZGF0YS10aXBweS10cmlnZ2VyJykgfHxcbiAgICAgIHByb3BzLnRyaWdnZXIgfHxcbiAgICAgIGRlZmF1bHRQcm9wcy50cmlnZ2VyO1xuXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIGlmICh0YXJnZXROb2RlLl90aXBweSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChldmVudC50eXBlID09PSAndG91Y2hzdGFydCcgJiYgdHlwZW9mIGNoaWxkUHJvcHMudG91Y2ggPT09ICdib29sZWFuJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChcbiAgICAgIGV2ZW50LnR5cGUgIT09ICd0b3VjaHN0YXJ0JyAmJlxuICAgICAgdHJpZ2dlci5pbmRleE9mKChCVUJCTElOR19FVkVOVFNfTUFQIGFzIGFueSlbZXZlbnQudHlwZV0pIDwgMFxuICAgICkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGluc3RhbmNlID0gdGlwcHkodGFyZ2V0Tm9kZSwgY2hpbGRQcm9wcyk7XG5cbiAgICBpZiAoaW5zdGFuY2UpIHtcbiAgICAgIGNoaWxkVGlwcHlJbnN0YW5jZXMgPSBjaGlsZFRpcHB5SW5zdGFuY2VzLmNvbmNhdChpbnN0YW5jZSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gb24oXG4gICAgbm9kZTogRWxlbWVudCxcbiAgICBldmVudFR5cGU6IHN0cmluZyxcbiAgICBoYW5kbGVyOiBFdmVudExpc3RlbmVyLFxuICAgIG9wdGlvbnM6IGJvb2xlYW4gfCBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiA9IGZhbHNlXG4gICk6IHZvaWQge1xuICAgIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGhhbmRsZXIsIG9wdGlvbnMpO1xuICAgIGxpc3RlbmVycy5wdXNoKHtub2RlLCBldmVudFR5cGUsIGhhbmRsZXIsIG9wdGlvbnN9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZEV2ZW50TGlzdGVuZXJzKGluc3RhbmNlOiBJbnN0YW5jZSk6IHZvaWQge1xuICAgIGNvbnN0IHtyZWZlcmVuY2V9ID0gaW5zdGFuY2U7XG5cbiAgICBvbihyZWZlcmVuY2UsICd0b3VjaHN0YXJ0Jywgb25UcmlnZ2VyLCBUT1VDSF9PUFRJT05TKTtcbiAgICBvbihyZWZlcmVuY2UsICdtb3VzZW92ZXInLCBvblRyaWdnZXIpO1xuICAgIG9uKHJlZmVyZW5jZSwgJ2ZvY3VzaW4nLCBvblRyaWdnZXIpO1xuICAgIG9uKHJlZmVyZW5jZSwgJ2NsaWNrJywgb25UcmlnZ2VyKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbW92ZUV2ZW50TGlzdGVuZXJzKCk6IHZvaWQge1xuICAgIGxpc3RlbmVycy5mb3JFYWNoKCh7bm9kZSwgZXZlbnRUeXBlLCBoYW5kbGVyLCBvcHRpb25zfTogTGlzdGVuZXJPYmplY3QpID0+IHtcbiAgICAgIG5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGhhbmRsZXIsIG9wdGlvbnMpO1xuICAgIH0pO1xuICAgIGxpc3RlbmVycyA9IFtdO1xuICB9XG5cbiAgZnVuY3Rpb24gYXBwbHlNdXRhdGlvbnMoaW5zdGFuY2U6IEluc3RhbmNlKTogdm9pZCB7XG4gICAgY29uc3Qgb3JpZ2luYWxEZXN0cm95ID0gaW5zdGFuY2UuZGVzdHJveTtcbiAgICBjb25zdCBvcmlnaW5hbEVuYWJsZSA9IGluc3RhbmNlLmVuYWJsZTtcbiAgICBjb25zdCBvcmlnaW5hbERpc2FibGUgPSBpbnN0YW5jZS5kaXNhYmxlO1xuXG4gICAgaW5zdGFuY2UuZGVzdHJveSA9IChzaG91bGREZXN0cm95Q2hpbGRJbnN0YW5jZXMgPSB0cnVlKTogdm9pZCA9PiB7XG4gICAgICBpZiAoc2hvdWxkRGVzdHJveUNoaWxkSW5zdGFuY2VzKSB7XG4gICAgICAgIGNoaWxkVGlwcHlJbnN0YW5jZXMuZm9yRWFjaCgoaW5zdGFuY2UpID0+IHtcbiAgICAgICAgICBpbnN0YW5jZS5kZXN0cm95KCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBjaGlsZFRpcHB5SW5zdGFuY2VzID0gW107XG5cbiAgICAgIHJlbW92ZUV2ZW50TGlzdGVuZXJzKCk7XG4gICAgICBvcmlnaW5hbERlc3Ryb3koKTtcbiAgICB9O1xuXG4gICAgaW5zdGFuY2UuZW5hYmxlID0gKCk6IHZvaWQgPT4ge1xuICAgICAgb3JpZ2luYWxFbmFibGUoKTtcbiAgICAgIGNoaWxkVGlwcHlJbnN0YW5jZXMuZm9yRWFjaCgoaW5zdGFuY2UpID0+IGluc3RhbmNlLmVuYWJsZSgpKTtcbiAgICAgIGRpc2FibGVkID0gZmFsc2U7XG4gICAgfTtcblxuICAgIGluc3RhbmNlLmRpc2FibGUgPSAoKTogdm9pZCA9PiB7XG4gICAgICBvcmlnaW5hbERpc2FibGUoKTtcbiAgICAgIGNoaWxkVGlwcHlJbnN0YW5jZXMuZm9yRWFjaCgoaW5zdGFuY2UpID0+IGluc3RhbmNlLmRpc2FibGUoKSk7XG4gICAgICBkaXNhYmxlZCA9IHRydWU7XG4gICAgfTtcblxuICAgIGFkZEV2ZW50TGlzdGVuZXJzKGluc3RhbmNlKTtcbiAgfVxuXG4gIG5vcm1hbGl6ZWRSZXR1cm5WYWx1ZS5mb3JFYWNoKGFwcGx5TXV0YXRpb25zKTtcblxuICByZXR1cm4gcmV0dXJuVmFsdWU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGRlbGVnYXRlO1xuIiwiaW1wb3J0IHtCQUNLRFJPUF9DTEFTU30gZnJvbSAnLi4vY29uc3RhbnRzJztcbmltcG9ydCB7ZGl2LCBzZXRWaXNpYmlsaXR5U3RhdGV9IGZyb20gJy4uL2RvbS11dGlscyc7XG5pbXBvcnQge2dldENoaWxkcmVufSBmcm9tICcuLi90ZW1wbGF0ZSc7XG5pbXBvcnQge0FuaW1hdGVGaWxsfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQge2Vycm9yV2hlbn0gZnJvbSAnLi4vdmFsaWRhdGlvbic7XG5cbmNvbnN0IGFuaW1hdGVGaWxsOiBBbmltYXRlRmlsbCA9IHtcbiAgbmFtZTogJ2FuaW1hdGVGaWxsJyxcbiAgZGVmYXVsdFZhbHVlOiBmYWxzZSxcbiAgZm4oaW5zdGFuY2UpIHtcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgaWYgKCFpbnN0YW5jZS5wcm9wcy5yZW5kZXI/LiQkdGlwcHkpIHtcbiAgICAgIGlmIChfX0RFVl9fKSB7XG4gICAgICAgIGVycm9yV2hlbihcbiAgICAgICAgICBpbnN0YW5jZS5wcm9wcy5hbmltYXRlRmlsbCxcbiAgICAgICAgICAnVGhlIGBhbmltYXRlRmlsbGAgcGx1Z2luIHJlcXVpcmVzIHRoZSBkZWZhdWx0IHJlbmRlciBmdW5jdGlvbi4nXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7fTtcbiAgICB9XG5cbiAgICBjb25zdCB7Ym94LCBjb250ZW50fSA9IGdldENoaWxkcmVuKGluc3RhbmNlLnBvcHBlcik7XG5cbiAgICBjb25zdCBiYWNrZHJvcCA9IGluc3RhbmNlLnByb3BzLmFuaW1hdGVGaWxsXG4gICAgICA/IGNyZWF0ZUJhY2tkcm9wRWxlbWVudCgpXG4gICAgICA6IG51bGw7XG5cbiAgICByZXR1cm4ge1xuICAgICAgb25DcmVhdGUoKTogdm9pZCB7XG4gICAgICAgIGlmIChiYWNrZHJvcCkge1xuICAgICAgICAgIGJveC5pbnNlcnRCZWZvcmUoYmFja2Ryb3AsIGJveC5maXJzdEVsZW1lbnRDaGlsZCEpO1xuICAgICAgICAgIGJveC5zZXRBdHRyaWJ1dGUoJ2RhdGEtYW5pbWF0ZWZpbGwnLCAnJyk7XG4gICAgICAgICAgYm94LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XG5cbiAgICAgICAgICBpbnN0YW5jZS5zZXRQcm9wcyh7YXJyb3c6IGZhbHNlLCBhbmltYXRpb246ICdzaGlmdC1hd2F5J30pO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgb25Nb3VudCgpOiB2b2lkIHtcbiAgICAgICAgaWYgKGJhY2tkcm9wKSB7XG4gICAgICAgICAgY29uc3Qge3RyYW5zaXRpb25EdXJhdGlvbn0gPSBib3guc3R5bGU7XG4gICAgICAgICAgY29uc3QgZHVyYXRpb24gPSBOdW1iZXIodHJhbnNpdGlvbkR1cmF0aW9uLnJlcGxhY2UoJ21zJywgJycpKTtcblxuICAgICAgICAgIC8vIFRoZSBjb250ZW50IHNob3VsZCBmYWRlIGluIGFmdGVyIHRoZSBiYWNrZHJvcCBoYXMgbW9zdGx5IGZpbGxlZCB0aGVcbiAgICAgICAgICAvLyB0b29sdGlwIGVsZW1lbnQuIGBjbGlwLXBhdGhgIGlzIHRoZSBvdGhlciBhbHRlcm5hdGl2ZSBidXQgaXMgbm90XG4gICAgICAgICAgLy8gd2VsbC1zdXBwb3J0ZWQgYW5kIGlzIGJ1Z2d5IG9uIHNvbWUgZGV2aWNlcy5cbiAgICAgICAgICBjb250ZW50LnN0eWxlLnRyYW5zaXRpb25EZWxheSA9IGAke01hdGgucm91bmQoZHVyYXRpb24gLyAxMCl9bXNgO1xuXG4gICAgICAgICAgYmFja2Ryb3Auc3R5bGUudHJhbnNpdGlvbkR1cmF0aW9uID0gdHJhbnNpdGlvbkR1cmF0aW9uO1xuICAgICAgICAgIHNldFZpc2liaWxpdHlTdGF0ZShbYmFja2Ryb3BdLCAndmlzaWJsZScpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgb25TaG93KCk6IHZvaWQge1xuICAgICAgICBpZiAoYmFja2Ryb3ApIHtcbiAgICAgICAgICBiYWNrZHJvcC5zdHlsZS50cmFuc2l0aW9uRHVyYXRpb24gPSAnMG1zJztcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIG9uSGlkZSgpOiB2b2lkIHtcbiAgICAgICAgaWYgKGJhY2tkcm9wKSB7XG4gICAgICAgICAgc2V0VmlzaWJpbGl0eVN0YXRlKFtiYWNrZHJvcF0sICdoaWRkZW4nKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICB9O1xuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgYW5pbWF0ZUZpbGw7XG5cbmZ1bmN0aW9uIGNyZWF0ZUJhY2tkcm9wRWxlbWVudCgpOiBIVE1MRGl2RWxlbWVudCB7XG4gIGNvbnN0IGJhY2tkcm9wID0gZGl2KCk7XG4gIGJhY2tkcm9wLmNsYXNzTmFtZSA9IEJBQ0tEUk9QX0NMQVNTO1xuICBzZXRWaXNpYmlsaXR5U3RhdGUoW2JhY2tkcm9wXSwgJ2hpZGRlbicpO1xuICByZXR1cm4gYmFja2Ryb3A7XG59XG4iLCJpbXBvcnQge2dldE93bmVyRG9jdW1lbnQsIGlzTW91c2VFdmVudH0gZnJvbSAnLi4vZG9tLXV0aWxzJztcbmltcG9ydCB7Rm9sbG93Q3Vyc29yLCBJbnN0YW5jZX0gZnJvbSAnLi4vdHlwZXMnO1xuXG5sZXQgbW91c2VDb29yZHMgPSB7Y2xpZW50WDogMCwgY2xpZW50WTogMH07XG5sZXQgYWN0aXZlSW5zdGFuY2VzOiBBcnJheTx7aW5zdGFuY2U6IEluc3RhbmNlOyBkb2M6IERvY3VtZW50fT4gPSBbXTtcblxuZnVuY3Rpb24gc3RvcmVNb3VzZUNvb3Jkcyh7Y2xpZW50WCwgY2xpZW50WX06IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgbW91c2VDb29yZHMgPSB7Y2xpZW50WCwgY2xpZW50WX07XG59XG5cbmZ1bmN0aW9uIGFkZE1vdXNlQ29vcmRzTGlzdGVuZXIoZG9jOiBEb2N1bWVudCk6IHZvaWQge1xuICBkb2MuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgc3RvcmVNb3VzZUNvb3Jkcyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZU1vdXNlQ29vcmRzTGlzdGVuZXIoZG9jOiBEb2N1bWVudCk6IHZvaWQge1xuICBkb2MucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgc3RvcmVNb3VzZUNvb3Jkcyk7XG59XG5cbmNvbnN0IGZvbGxvd0N1cnNvcjogRm9sbG93Q3Vyc29yID0ge1xuICBuYW1lOiAnZm9sbG93Q3Vyc29yJyxcbiAgZGVmYXVsdFZhbHVlOiBmYWxzZSxcbiAgZm4oaW5zdGFuY2UpIHtcbiAgICBjb25zdCByZWZlcmVuY2UgPSBpbnN0YW5jZS5yZWZlcmVuY2U7XG4gICAgY29uc3QgZG9jID0gZ2V0T3duZXJEb2N1bWVudChpbnN0YW5jZS5wcm9wcy50cmlnZ2VyVGFyZ2V0IHx8IHJlZmVyZW5jZSk7XG5cbiAgICBsZXQgaXNJbnRlcm5hbFVwZGF0ZSA9IGZhbHNlO1xuICAgIGxldCB3YXNGb2N1c0V2ZW50ID0gZmFsc2U7XG4gICAgbGV0IGlzVW5tb3VudGVkID0gdHJ1ZTtcbiAgICBsZXQgcHJldlByb3BzID0gaW5zdGFuY2UucHJvcHM7XG5cbiAgICBmdW5jdGlvbiBnZXRJc0luaXRpYWxCZWhhdmlvcigpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIGluc3RhbmNlLnByb3BzLmZvbGxvd0N1cnNvciA9PT0gJ2luaXRpYWwnICYmIGluc3RhbmNlLnN0YXRlLmlzVmlzaWJsZVxuICAgICAgKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhZGRMaXN0ZW5lcigpOiB2b2lkIHtcbiAgICAgIGRvYy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBvbk1vdXNlTW92ZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVtb3ZlTGlzdGVuZXIoKTogdm9pZCB7XG4gICAgICBkb2MucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgb25Nb3VzZU1vdmUpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVuc2V0R2V0UmVmZXJlbmNlQ2xpZW50UmVjdCgpOiB2b2lkIHtcbiAgICAgIGlzSW50ZXJuYWxVcGRhdGUgPSB0cnVlO1xuICAgICAgaW5zdGFuY2Uuc2V0UHJvcHMoe2dldFJlZmVyZW5jZUNsaWVudFJlY3Q6IG51bGx9KTtcbiAgICAgIGlzSW50ZXJuYWxVcGRhdGUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvbk1vdXNlTW92ZShldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xuICAgICAgLy8gSWYgdGhlIGluc3RhbmNlIGlzIGludGVyYWN0aXZlLCBhdm9pZCB1cGRhdGluZyB0aGUgcG9zaXRpb24gdW5sZXNzIGl0J3NcbiAgICAgIC8vIG92ZXIgdGhlIHJlZmVyZW5jZSBlbGVtZW50XG4gICAgICBjb25zdCBpc0N1cnNvck92ZXJSZWZlcmVuY2UgPSBldmVudC50YXJnZXRcbiAgICAgICAgPyByZWZlcmVuY2UuY29udGFpbnMoZXZlbnQudGFyZ2V0IGFzIE5vZGUpXG4gICAgICAgIDogdHJ1ZTtcbiAgICAgIGNvbnN0IHtmb2xsb3dDdXJzb3J9ID0gaW5zdGFuY2UucHJvcHM7XG4gICAgICBjb25zdCB7Y2xpZW50WCwgY2xpZW50WX0gPSBldmVudDtcblxuICAgICAgY29uc3QgcmVjdCA9IHJlZmVyZW5jZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgIGNvbnN0IHJlbGF0aXZlWCA9IGNsaWVudFggLSByZWN0LmxlZnQ7XG4gICAgICBjb25zdCByZWxhdGl2ZVkgPSBjbGllbnRZIC0gcmVjdC50b3A7XG5cbiAgICAgIGlmIChpc0N1cnNvck92ZXJSZWZlcmVuY2UgfHwgIWluc3RhbmNlLnByb3BzLmludGVyYWN0aXZlKSB7XG4gICAgICAgIGluc3RhbmNlLnNldFByb3BzKHtcbiAgICAgICAgICAvLyBAdHMtaWdub3JlIC0gdW5uZWVkZWQgRE9NUmVjdCBwcm9wZXJ0aWVzXG4gICAgICAgICAgZ2V0UmVmZXJlbmNlQ2xpZW50UmVjdCgpIHtcbiAgICAgICAgICAgIGNvbnN0IHJlY3QgPSByZWZlcmVuY2UuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICAgICAgICAgIGxldCB4ID0gY2xpZW50WDtcbiAgICAgICAgICAgIGxldCB5ID0gY2xpZW50WTtcblxuICAgICAgICAgICAgaWYgKGZvbGxvd0N1cnNvciA9PT0gJ2luaXRpYWwnKSB7XG4gICAgICAgICAgICAgIHggPSByZWN0LmxlZnQgKyByZWxhdGl2ZVg7XG4gICAgICAgICAgICAgIHkgPSByZWN0LnRvcCArIHJlbGF0aXZlWTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgdG9wID0gZm9sbG93Q3Vyc29yID09PSAnaG9yaXpvbnRhbCcgPyByZWN0LnRvcCA6IHk7XG4gICAgICAgICAgICBjb25zdCByaWdodCA9IGZvbGxvd0N1cnNvciA9PT0gJ3ZlcnRpY2FsJyA/IHJlY3QucmlnaHQgOiB4O1xuICAgICAgICAgICAgY29uc3QgYm90dG9tID0gZm9sbG93Q3Vyc29yID09PSAnaG9yaXpvbnRhbCcgPyByZWN0LmJvdHRvbSA6IHk7XG4gICAgICAgICAgICBjb25zdCBsZWZ0ID0gZm9sbG93Q3Vyc29yID09PSAndmVydGljYWwnID8gcmVjdC5sZWZ0IDogeDtcblxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgd2lkdGg6IHJpZ2h0IC0gbGVmdCxcbiAgICAgICAgICAgICAgaGVpZ2h0OiBib3R0b20gLSB0b3AsXG4gICAgICAgICAgICAgIHRvcCxcbiAgICAgICAgICAgICAgcmlnaHQsXG4gICAgICAgICAgICAgIGJvdHRvbSxcbiAgICAgICAgICAgICAgbGVmdCxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlKCk6IHZvaWQge1xuICAgICAgaWYgKGluc3RhbmNlLnByb3BzLmZvbGxvd0N1cnNvcikge1xuICAgICAgICBhY3RpdmVJbnN0YW5jZXMucHVzaCh7aW5zdGFuY2UsIGRvY30pO1xuICAgICAgICBhZGRNb3VzZUNvb3Jkc0xpc3RlbmVyKGRvYyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGVzdHJveSgpOiB2b2lkIHtcbiAgICAgIGFjdGl2ZUluc3RhbmNlcyA9IGFjdGl2ZUluc3RhbmNlcy5maWx0ZXIoXG4gICAgICAgIChkYXRhKSA9PiBkYXRhLmluc3RhbmNlICE9PSBpbnN0YW5jZVxuICAgICAgKTtcblxuICAgICAgaWYgKGFjdGl2ZUluc3RhbmNlcy5maWx0ZXIoKGRhdGEpID0+IGRhdGEuZG9jID09PSBkb2MpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZW1vdmVNb3VzZUNvb3Jkc0xpc3RlbmVyKGRvYyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIG9uQ3JlYXRlOiBjcmVhdGUsXG4gICAgICBvbkRlc3Ryb3k6IGRlc3Ryb3ksXG4gICAgICBvbkJlZm9yZVVwZGF0ZSgpOiB2b2lkIHtcbiAgICAgICAgcHJldlByb3BzID0gaW5zdGFuY2UucHJvcHM7XG4gICAgICB9LFxuICAgICAgb25BZnRlclVwZGF0ZShfLCB7Zm9sbG93Q3Vyc29yfSk6IHZvaWQge1xuICAgICAgICBpZiAoaXNJbnRlcm5hbFVwZGF0ZSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChcbiAgICAgICAgICBmb2xsb3dDdXJzb3IgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgICAgIHByZXZQcm9wcy5mb2xsb3dDdXJzb3IgIT09IGZvbGxvd0N1cnNvclxuICAgICAgICApIHtcbiAgICAgICAgICBkZXN0cm95KCk7XG5cbiAgICAgICAgICBpZiAoZm9sbG93Q3Vyc29yKSB7XG4gICAgICAgICAgICBjcmVhdGUoKTtcblxuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICBpbnN0YW5jZS5zdGF0ZS5pc01vdW50ZWQgJiZcbiAgICAgICAgICAgICAgIXdhc0ZvY3VzRXZlbnQgJiZcbiAgICAgICAgICAgICAgIWdldElzSW5pdGlhbEJlaGF2aW9yKClcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICBhZGRMaXN0ZW5lcigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZW1vdmVMaXN0ZW5lcigpO1xuICAgICAgICAgICAgdW5zZXRHZXRSZWZlcmVuY2VDbGllbnRSZWN0KCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgb25Nb3VudCgpOiB2b2lkIHtcbiAgICAgICAgaWYgKGluc3RhbmNlLnByb3BzLmZvbGxvd0N1cnNvciAmJiAhd2FzRm9jdXNFdmVudCkge1xuICAgICAgICAgIGlmIChpc1VubW91bnRlZCkge1xuICAgICAgICAgICAgb25Nb3VzZU1vdmUobW91c2VDb29yZHMgYXMgTW91c2VFdmVudCk7XG4gICAgICAgICAgICBpc1VubW91bnRlZCA9IGZhbHNlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICghZ2V0SXNJbml0aWFsQmVoYXZpb3IoKSkge1xuICAgICAgICAgICAgYWRkTGlzdGVuZXIoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBvblRyaWdnZXIoXywgZXZlbnQpOiB2b2lkIHtcbiAgICAgICAgaWYgKGlzTW91c2VFdmVudChldmVudCkpIHtcbiAgICAgICAgICBtb3VzZUNvb3JkcyA9IHtjbGllbnRYOiBldmVudC5jbGllbnRYLCBjbGllbnRZOiBldmVudC5jbGllbnRZfTtcbiAgICAgICAgfVxuICAgICAgICB3YXNGb2N1c0V2ZW50ID0gZXZlbnQudHlwZSA9PT0gJ2ZvY3VzJztcbiAgICAgIH0sXG4gICAgICBvbkhpZGRlbigpOiB2b2lkIHtcbiAgICAgICAgaWYgKGluc3RhbmNlLnByb3BzLmZvbGxvd0N1cnNvcikge1xuICAgICAgICAgIHVuc2V0R2V0UmVmZXJlbmNlQ2xpZW50UmVjdCgpO1xuICAgICAgICAgIHJlbW92ZUxpc3RlbmVyKCk7XG4gICAgICAgICAgaXNVbm1vdW50ZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgIH07XG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmb2xsb3dDdXJzb3I7XG4iLCJpbXBvcnQge01vZGlmaWVyLCBQbGFjZW1lbnR9IGZyb20gJ0Bwb3BwZXJqcy9jb3JlJztcbmltcG9ydCB7aXNNb3VzZUV2ZW50fSBmcm9tICcuLi9kb20tdXRpbHMnO1xuaW1wb3J0IHtCYXNlUGxhY2VtZW50LCBJbmxpbmVQb3NpdGlvbmluZywgUHJvcHN9IGZyb20gJy4uL3R5cGVzJztcbmltcG9ydCB7YXJyYXlGcm9tLCBnZXRCYXNlUGxhY2VtZW50fSBmcm9tICcuLi91dGlscyc7XG5cbmZ1bmN0aW9uIGdldFByb3BzKHByb3BzOiBQcm9wcywgbW9kaWZpZXI6IE1vZGlmaWVyPGFueSwgYW55Pik6IFBhcnRpYWw8UHJvcHM+IHtcbiAgcmV0dXJuIHtcbiAgICBwb3BwZXJPcHRpb25zOiB7XG4gICAgICAuLi5wcm9wcy5wb3BwZXJPcHRpb25zLFxuICAgICAgbW9kaWZpZXJzOiBbXG4gICAgICAgIC4uLihwcm9wcy5wb3BwZXJPcHRpb25zPy5tb2RpZmllcnMgfHwgW10pLmZpbHRlcihcbiAgICAgICAgICAoe25hbWV9KSA9PiBuYW1lICE9PSBtb2RpZmllci5uYW1lXG4gICAgICAgICksXG4gICAgICAgIG1vZGlmaWVyLFxuICAgICAgXSxcbiAgICB9LFxuICB9O1xufVxuXG5jb25zdCBpbmxpbmVQb3NpdGlvbmluZzogSW5saW5lUG9zaXRpb25pbmcgPSB7XG4gIG5hbWU6ICdpbmxpbmVQb3NpdGlvbmluZycsXG4gIGRlZmF1bHRWYWx1ZTogZmFsc2UsXG4gIGZuKGluc3RhbmNlKSB7XG4gICAgY29uc3Qge3JlZmVyZW5jZX0gPSBpbnN0YW5jZTtcblxuICAgIGZ1bmN0aW9uIGlzRW5hYmxlZCgpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiAhIWluc3RhbmNlLnByb3BzLmlubGluZVBvc2l0aW9uaW5nO1xuICAgIH1cblxuICAgIGxldCBwbGFjZW1lbnQ6IFBsYWNlbWVudDtcbiAgICBsZXQgY3Vyc29yUmVjdEluZGV4ID0gLTE7XG4gICAgbGV0IGlzSW50ZXJuYWxVcGRhdGUgPSBmYWxzZTtcbiAgICBsZXQgdHJpZWRQbGFjZW1lbnRzOiBBcnJheTxzdHJpbmc+ID0gW107XG5cbiAgICBjb25zdCBtb2RpZmllcjogTW9kaWZpZXI8XG4gICAgICAndGlwcHlJbmxpbmVQb3NpdGlvbmluZycsXG4gICAgICBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPlxuICAgID4gPSB7XG4gICAgICBuYW1lOiAndGlwcHlJbmxpbmVQb3NpdGlvbmluZycsXG4gICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgcGhhc2U6ICdhZnRlcldyaXRlJyxcbiAgICAgIGZuKHtzdGF0ZX0pIHtcbiAgICAgICAgaWYgKGlzRW5hYmxlZCgpKSB7XG4gICAgICAgICAgaWYgKHRyaWVkUGxhY2VtZW50cy5pbmRleE9mKHN0YXRlLnBsYWNlbWVudCkgIT09IC0xKSB7XG4gICAgICAgICAgICB0cmllZFBsYWNlbWVudHMgPSBbXTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICBwbGFjZW1lbnQgIT09IHN0YXRlLnBsYWNlbWVudCAmJlxuICAgICAgICAgICAgdHJpZWRQbGFjZW1lbnRzLmluZGV4T2Yoc3RhdGUucGxhY2VtZW50KSA9PT0gLTFcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHRyaWVkUGxhY2VtZW50cy5wdXNoKHN0YXRlLnBsYWNlbWVudCk7XG4gICAgICAgICAgICBpbnN0YW5jZS5zZXRQcm9wcyh7XG4gICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmUgLSB1bm5lZWRlZCBET01SZWN0IHByb3BlcnRpZXNcbiAgICAgICAgICAgICAgZ2V0UmVmZXJlbmNlQ2xpZW50UmVjdDogKCkgPT5cbiAgICAgICAgICAgICAgICBnZXRSZWZlcmVuY2VDbGllbnRSZWN0KHN0YXRlLnBsYWNlbWVudCksXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBwbGFjZW1lbnQgPSBzdGF0ZS5wbGFjZW1lbnQ7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIGdldFJlZmVyZW5jZUNsaWVudFJlY3QocGxhY2VtZW50OiBQbGFjZW1lbnQpOiBQYXJ0aWFsPERPTVJlY3Q+IHtcbiAgICAgIHJldHVybiBnZXRJbmxpbmVCb3VuZGluZ0NsaWVudFJlY3QoXG4gICAgICAgIGdldEJhc2VQbGFjZW1lbnQocGxhY2VtZW50KSxcbiAgICAgICAgcmVmZXJlbmNlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuICAgICAgICBhcnJheUZyb20ocmVmZXJlbmNlLmdldENsaWVudFJlY3RzKCkpLFxuICAgICAgICBjdXJzb3JSZWN0SW5kZXhcbiAgICAgICk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0SW50ZXJuYWxQcm9wcyhwYXJ0aWFsUHJvcHM6IFBhcnRpYWw8UHJvcHM+KTogdm9pZCB7XG4gICAgICBpc0ludGVybmFsVXBkYXRlID0gdHJ1ZTtcbiAgICAgIGluc3RhbmNlLnNldFByb3BzKHBhcnRpYWxQcm9wcyk7XG4gICAgICBpc0ludGVybmFsVXBkYXRlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYWRkTW9kaWZpZXIoKTogdm9pZCB7XG4gICAgICBpZiAoIWlzSW50ZXJuYWxVcGRhdGUpIHtcbiAgICAgICAgc2V0SW50ZXJuYWxQcm9wcyhnZXRQcm9wcyhpbnN0YW5jZS5wcm9wcywgbW9kaWZpZXIpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgb25DcmVhdGU6IGFkZE1vZGlmaWVyLFxuICAgICAgb25BZnRlclVwZGF0ZTogYWRkTW9kaWZpZXIsXG4gICAgICBvblRyaWdnZXIoXywgZXZlbnQpOiB2b2lkIHtcbiAgICAgICAgaWYgKGlzTW91c2VFdmVudChldmVudCkpIHtcbiAgICAgICAgICBjb25zdCByZWN0cyA9IGFycmF5RnJvbShpbnN0YW5jZS5yZWZlcmVuY2UuZ2V0Q2xpZW50UmVjdHMoKSk7XG4gICAgICAgICAgY29uc3QgY3Vyc29yUmVjdCA9IHJlY3RzLmZpbmQoXG4gICAgICAgICAgICAocmVjdCkgPT5cbiAgICAgICAgICAgICAgcmVjdC5sZWZ0IC0gMiA8PSBldmVudC5jbGllbnRYICYmXG4gICAgICAgICAgICAgIHJlY3QucmlnaHQgKyAyID49IGV2ZW50LmNsaWVudFggJiZcbiAgICAgICAgICAgICAgcmVjdC50b3AgLSAyIDw9IGV2ZW50LmNsaWVudFkgJiZcbiAgICAgICAgICAgICAgcmVjdC5ib3R0b20gKyAyID49IGV2ZW50LmNsaWVudFlcbiAgICAgICAgICApO1xuICAgICAgICAgIGNvbnN0IGluZGV4ID0gcmVjdHMuaW5kZXhPZihjdXJzb3JSZWN0KTtcbiAgICAgICAgICBjdXJzb3JSZWN0SW5kZXggPSBpbmRleCA+IC0xID8gaW5kZXggOiBjdXJzb3JSZWN0SW5kZXg7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBvbkhpZGRlbigpOiB2b2lkIHtcbiAgICAgICAgY3Vyc29yUmVjdEluZGV4ID0gLTE7XG4gICAgICB9LFxuICAgIH07XG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBpbmxpbmVQb3NpdGlvbmluZztcblxuZXhwb3J0IGZ1bmN0aW9uIGdldElubGluZUJvdW5kaW5nQ2xpZW50UmVjdChcbiAgY3VycmVudEJhc2VQbGFjZW1lbnQ6IEJhc2VQbGFjZW1lbnQgfCBudWxsLFxuICBib3VuZGluZ1JlY3Q6IERPTVJlY3QsXG4gIGNsaWVudFJlY3RzOiBET01SZWN0W10sXG4gIGN1cnNvclJlY3RJbmRleDogbnVtYmVyXG4pOiB7XG4gIHRvcDogbnVtYmVyO1xuICBib3R0b206IG51bWJlcjtcbiAgbGVmdDogbnVtYmVyO1xuICByaWdodDogbnVtYmVyO1xuICB3aWR0aDogbnVtYmVyO1xuICBoZWlnaHQ6IG51bWJlcjtcbn0ge1xuICAvLyBOb3QgYW4gaW5saW5lIGVsZW1lbnQsIG9yIHBsYWNlbWVudCBpcyBub3QgeWV0IGtub3duXG4gIGlmIChjbGllbnRSZWN0cy5sZW5ndGggPCAyIHx8IGN1cnJlbnRCYXNlUGxhY2VtZW50ID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGJvdW5kaW5nUmVjdDtcbiAgfVxuXG4gIC8vIFRoZXJlIGFyZSB0d28gcmVjdHMgYW5kIHRoZXkgYXJlIGRpc2pvaW5lZFxuICBpZiAoXG4gICAgY2xpZW50UmVjdHMubGVuZ3RoID09PSAyICYmXG4gICAgY3Vyc29yUmVjdEluZGV4ID49IDAgJiZcbiAgICBjbGllbnRSZWN0c1swXS5sZWZ0ID4gY2xpZW50UmVjdHNbMV0ucmlnaHRcbiAgKSB7XG4gICAgcmV0dXJuIGNsaWVudFJlY3RzW2N1cnNvclJlY3RJbmRleF0gfHwgYm91bmRpbmdSZWN0O1xuICB9XG5cbiAgc3dpdGNoIChjdXJyZW50QmFzZVBsYWNlbWVudCkge1xuICAgIGNhc2UgJ3RvcCc6XG4gICAgY2FzZSAnYm90dG9tJzoge1xuICAgICAgY29uc3QgZmlyc3RSZWN0ID0gY2xpZW50UmVjdHNbMF07XG4gICAgICBjb25zdCBsYXN0UmVjdCA9IGNsaWVudFJlY3RzW2NsaWVudFJlY3RzLmxlbmd0aCAtIDFdO1xuICAgICAgY29uc3QgaXNUb3AgPSBjdXJyZW50QmFzZVBsYWNlbWVudCA9PT0gJ3RvcCc7XG5cbiAgICAgIGNvbnN0IHRvcCA9IGZpcnN0UmVjdC50b3A7XG4gICAgICBjb25zdCBib3R0b20gPSBsYXN0UmVjdC5ib3R0b207XG4gICAgICBjb25zdCBsZWZ0ID0gaXNUb3AgPyBmaXJzdFJlY3QubGVmdCA6IGxhc3RSZWN0LmxlZnQ7XG4gICAgICBjb25zdCByaWdodCA9IGlzVG9wID8gZmlyc3RSZWN0LnJpZ2h0IDogbGFzdFJlY3QucmlnaHQ7XG4gICAgICBjb25zdCB3aWR0aCA9IHJpZ2h0IC0gbGVmdDtcbiAgICAgIGNvbnN0IGhlaWdodCA9IGJvdHRvbSAtIHRvcDtcblxuICAgICAgcmV0dXJuIHt0b3AsIGJvdHRvbSwgbGVmdCwgcmlnaHQsIHdpZHRoLCBoZWlnaHR9O1xuICAgIH1cbiAgICBjYXNlICdsZWZ0JzpcbiAgICBjYXNlICdyaWdodCc6IHtcbiAgICAgIGNvbnN0IG1pbkxlZnQgPSBNYXRoLm1pbiguLi5jbGllbnRSZWN0cy5tYXAoKHJlY3RzKSA9PiByZWN0cy5sZWZ0KSk7XG4gICAgICBjb25zdCBtYXhSaWdodCA9IE1hdGgubWF4KC4uLmNsaWVudFJlY3RzLm1hcCgocmVjdHMpID0+IHJlY3RzLnJpZ2h0KSk7XG4gICAgICBjb25zdCBtZWFzdXJlUmVjdHMgPSBjbGllbnRSZWN0cy5maWx0ZXIoKHJlY3QpID0+XG4gICAgICAgIGN1cnJlbnRCYXNlUGxhY2VtZW50ID09PSAnbGVmdCdcbiAgICAgICAgICA/IHJlY3QubGVmdCA9PT0gbWluTGVmdFxuICAgICAgICAgIDogcmVjdC5yaWdodCA9PT0gbWF4UmlnaHRcbiAgICAgICk7XG5cbiAgICAgIGNvbnN0IHRvcCA9IG1lYXN1cmVSZWN0c1swXS50b3A7XG4gICAgICBjb25zdCBib3R0b20gPSBtZWFzdXJlUmVjdHNbbWVhc3VyZVJlY3RzLmxlbmd0aCAtIDFdLmJvdHRvbTtcbiAgICAgIGNvbnN0IGxlZnQgPSBtaW5MZWZ0O1xuICAgICAgY29uc3QgcmlnaHQgPSBtYXhSaWdodDtcbiAgICAgIGNvbnN0IHdpZHRoID0gcmlnaHQgLSBsZWZ0O1xuICAgICAgY29uc3QgaGVpZ2h0ID0gYm90dG9tIC0gdG9wO1xuXG4gICAgICByZXR1cm4ge3RvcCwgYm90dG9tLCBsZWZ0LCByaWdodCwgd2lkdGgsIGhlaWdodH07XG4gICAgfVxuICAgIGRlZmF1bHQ6IHtcbiAgICAgIHJldHVybiBib3VuZGluZ1JlY3Q7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQge1ZpcnR1YWxFbGVtZW50fSBmcm9tICdAcG9wcGVyanMvY29yZSc7XG5pbXBvcnQge1JlZmVyZW5jZUVsZW1lbnQsIFN0aWNreX0gZnJvbSAnLi4vdHlwZXMnO1xuXG5jb25zdCBzdGlja3k6IFN0aWNreSA9IHtcbiAgbmFtZTogJ3N0aWNreScsXG4gIGRlZmF1bHRWYWx1ZTogZmFsc2UsXG4gIGZuKGluc3RhbmNlKSB7XG4gICAgY29uc3Qge3JlZmVyZW5jZSwgcG9wcGVyfSA9IGluc3RhbmNlO1xuXG4gICAgZnVuY3Rpb24gZ2V0UmVmZXJlbmNlKCk6IFJlZmVyZW5jZUVsZW1lbnQgfCBWaXJ0dWFsRWxlbWVudCB7XG4gICAgICByZXR1cm4gaW5zdGFuY2UucG9wcGVySW5zdGFuY2VcbiAgICAgICAgPyBpbnN0YW5jZS5wb3BwZXJJbnN0YW5jZS5zdGF0ZS5lbGVtZW50cy5yZWZlcmVuY2VcbiAgICAgICAgOiByZWZlcmVuY2U7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2hvdWxkQ2hlY2sodmFsdWU6ICdyZWZlcmVuY2UnIHwgJ3BvcHBlcicpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiBpbnN0YW5jZS5wcm9wcy5zdGlja3kgPT09IHRydWUgfHwgaW5zdGFuY2UucHJvcHMuc3RpY2t5ID09PSB2YWx1ZTtcbiAgICB9XG5cbiAgICBsZXQgcHJldlJlZlJlY3Q6IENsaWVudFJlY3QgfCBudWxsID0gbnVsbDtcbiAgICBsZXQgcHJldlBvcFJlY3Q6IENsaWVudFJlY3QgfCBudWxsID0gbnVsbDtcblxuICAgIGZ1bmN0aW9uIHVwZGF0ZVBvc2l0aW9uKCk6IHZvaWQge1xuICAgICAgY29uc3QgY3VycmVudFJlZlJlY3QgPSBzaG91bGRDaGVjaygncmVmZXJlbmNlJylcbiAgICAgICAgPyBnZXRSZWZlcmVuY2UoKS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgICAgICA6IG51bGw7XG4gICAgICBjb25zdCBjdXJyZW50UG9wUmVjdCA9IHNob3VsZENoZWNrKCdwb3BwZXInKVxuICAgICAgICA/IHBvcHBlci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgICAgICA6IG51bGw7XG5cbiAgICAgIGlmIChcbiAgICAgICAgKGN1cnJlbnRSZWZSZWN0ICYmIGFyZVJlY3RzRGlmZmVyZW50KHByZXZSZWZSZWN0LCBjdXJyZW50UmVmUmVjdCkpIHx8XG4gICAgICAgIChjdXJyZW50UG9wUmVjdCAmJiBhcmVSZWN0c0RpZmZlcmVudChwcmV2UG9wUmVjdCwgY3VycmVudFBvcFJlY3QpKVxuICAgICAgKSB7XG4gICAgICAgIGlmIChpbnN0YW5jZS5wb3BwZXJJbnN0YW5jZSkge1xuICAgICAgICAgIGluc3RhbmNlLnBvcHBlckluc3RhbmNlLnVwZGF0ZSgpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHByZXZSZWZSZWN0ID0gY3VycmVudFJlZlJlY3Q7XG4gICAgICBwcmV2UG9wUmVjdCA9IGN1cnJlbnRQb3BSZWN0O1xuXG4gICAgICBpZiAoaW5zdGFuY2Uuc3RhdGUuaXNNb3VudGVkKSB7XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh1cGRhdGVQb3NpdGlvbik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIG9uTW91bnQoKTogdm9pZCB7XG4gICAgICAgIGlmIChpbnN0YW5jZS5wcm9wcy5zdGlja3kpIHtcbiAgICAgICAgICB1cGRhdGVQb3NpdGlvbigpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgIH07XG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBzdGlja3k7XG5cbmZ1bmN0aW9uIGFyZVJlY3RzRGlmZmVyZW50KFxuICByZWN0QTogQ2xpZW50UmVjdCB8IG51bGwsXG4gIHJlY3RCOiBDbGllbnRSZWN0IHwgbnVsbFxuKTogYm9vbGVhbiB7XG4gIGlmIChyZWN0QSAmJiByZWN0Qikge1xuICAgIHJldHVybiAoXG4gICAgICByZWN0QS50b3AgIT09IHJlY3RCLnRvcCB8fFxuICAgICAgcmVjdEEucmlnaHQgIT09IHJlY3RCLnJpZ2h0IHx8XG4gICAgICByZWN0QS5ib3R0b20gIT09IHJlY3RCLmJvdHRvbSB8fFxuICAgICAgcmVjdEEubGVmdCAhPT0gcmVjdEIubGVmdFxuICAgICk7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cbiIsImltcG9ydCB0aXBweSBmcm9tICcuLi9zcmMnO1xuaW1wb3J0IHtyZW5kZXJ9IGZyb20gJy4uL3NyYy90ZW1wbGF0ZSc7XG5cbnRpcHB5LnNldERlZmF1bHRQcm9wcyh7cmVuZGVyfSk7XG5cbmV4cG9ydCB7ZGVmYXVsdCwgaGlkZUFsbH0gZnJvbSAnLi4vc3JjJztcbmV4cG9ydCB7ZGVmYXVsdCBhcyBjcmVhdGVTaW5nbGV0b259IGZyb20gJy4uL3NyYy9hZGRvbnMvY3JlYXRlU2luZ2xldG9uJztcbmV4cG9ydCB7ZGVmYXVsdCBhcyBkZWxlZ2F0ZX0gZnJvbSAnLi4vc3JjL2FkZG9ucy9kZWxlZ2F0ZSc7XG5leHBvcnQge2RlZmF1bHQgYXMgYW5pbWF0ZUZpbGx9IGZyb20gJy4uL3NyYy9wbHVnaW5zL2FuaW1hdGVGaWxsJztcbmV4cG9ydCB7ZGVmYXVsdCBhcyBmb2xsb3dDdXJzb3J9IGZyb20gJy4uL3NyYy9wbHVnaW5zL2ZvbGxvd0N1cnNvcic7XG5leHBvcnQge2RlZmF1bHQgYXMgaW5saW5lUG9zaXRpb25pbmd9IGZyb20gJy4uL3NyYy9wbHVnaW5zL2lubGluZVBvc2l0aW9uaW5nJztcbmV4cG9ydCB7ZGVmYXVsdCBhcyBzdGlja3l9IGZyb20gJy4uL3NyYy9wbHVnaW5zL3N0aWNreSc7XG5leHBvcnQge1JPVU5EX0FSUk9XIGFzIHJvdW5kQXJyb3d9IGZyb20gJy4uL3NyYy9jb25zdGFudHMnO1xuIiwiZXhwb3J0ICogZnJvbSBcIi4vZW51bXMuanNcIjtcbmV4cG9ydCAqIGZyb20gXCIuL21vZGlmaWVycy9pbmRleC5qc1wiOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cbmV4cG9ydCB7IHBvcHBlckdlbmVyYXRvciwgZGV0ZWN0T3ZlcmZsb3csIGNyZWF0ZVBvcHBlciBhcyBjcmVhdGVQb3BwZXJCYXNlIH0gZnJvbSBcIi4vY3JlYXRlUG9wcGVyLmpzXCI7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuZXhwb3J0IHsgY3JlYXRlUG9wcGVyIH0gZnJvbSBcIi4vcG9wcGVyLmpzXCI7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuZXhwb3J0IHsgY3JlYXRlUG9wcGVyIGFzIGNyZWF0ZVBvcHBlckxpdGUgfSBmcm9tIFwiLi9wb3BwZXItbGl0ZS5qc1wiOyIsImV4cG9ydCB2YXIgdG9wID0gJ3RvcCc7XG5leHBvcnQgdmFyIGJvdHRvbSA9ICdib3R0b20nO1xuZXhwb3J0IHZhciByaWdodCA9ICdyaWdodCc7XG5leHBvcnQgdmFyIGxlZnQgPSAnbGVmdCc7XG5leHBvcnQgdmFyIGF1dG8gPSAnYXV0byc7XG5leHBvcnQgdmFyIGJhc2VQbGFjZW1lbnRzID0gW3RvcCwgYm90dG9tLCByaWdodCwgbGVmdF07XG5leHBvcnQgdmFyIHN0YXJ0ID0gJ3N0YXJ0JztcbmV4cG9ydCB2YXIgZW5kID0gJ2VuZCc7XG5leHBvcnQgdmFyIGNsaXBwaW5nUGFyZW50cyA9ICdjbGlwcGluZ1BhcmVudHMnO1xuZXhwb3J0IHZhciB2aWV3cG9ydCA9ICd2aWV3cG9ydCc7XG5leHBvcnQgdmFyIHBvcHBlciA9ICdwb3BwZXInO1xuZXhwb3J0IHZhciByZWZlcmVuY2UgPSAncmVmZXJlbmNlJztcbmV4cG9ydCB2YXIgdmFyaWF0aW9uUGxhY2VtZW50cyA9IC8qI19fUFVSRV9fKi9iYXNlUGxhY2VtZW50cy5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgcGxhY2VtZW50KSB7XG4gIHJldHVybiBhY2MuY29uY2F0KFtwbGFjZW1lbnQgKyBcIi1cIiArIHN0YXJ0LCBwbGFjZW1lbnQgKyBcIi1cIiArIGVuZF0pO1xufSwgW10pO1xuZXhwb3J0IHZhciBwbGFjZW1lbnRzID0gLyojX19QVVJFX18qL1tdLmNvbmNhdChiYXNlUGxhY2VtZW50cywgW2F1dG9dKS5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgcGxhY2VtZW50KSB7XG4gIHJldHVybiBhY2MuY29uY2F0KFtwbGFjZW1lbnQsIHBsYWNlbWVudCArIFwiLVwiICsgc3RhcnQsIHBsYWNlbWVudCArIFwiLVwiICsgZW5kXSk7XG59LCBbXSk7IC8vIG1vZGlmaWVycyB0aGF0IG5lZWQgdG8gcmVhZCB0aGUgRE9NXG5cbmV4cG9ydCB2YXIgYmVmb3JlUmVhZCA9ICdiZWZvcmVSZWFkJztcbmV4cG9ydCB2YXIgcmVhZCA9ICdyZWFkJztcbmV4cG9ydCB2YXIgYWZ0ZXJSZWFkID0gJ2FmdGVyUmVhZCc7IC8vIHB1cmUtbG9naWMgbW9kaWZpZXJzXG5cbmV4cG9ydCB2YXIgYmVmb3JlTWFpbiA9ICdiZWZvcmVNYWluJztcbmV4cG9ydCB2YXIgbWFpbiA9ICdtYWluJztcbmV4cG9ydCB2YXIgYWZ0ZXJNYWluID0gJ2FmdGVyTWFpbic7IC8vIG1vZGlmaWVyIHdpdGggdGhlIHB1cnBvc2UgdG8gd3JpdGUgdG8gdGhlIERPTSAob3Igd3JpdGUgaW50byBhIGZyYW1ld29yayBzdGF0ZSlcblxuZXhwb3J0IHZhciBiZWZvcmVXcml0ZSA9ICdiZWZvcmVXcml0ZSc7XG5leHBvcnQgdmFyIHdyaXRlID0gJ3dyaXRlJztcbmV4cG9ydCB2YXIgYWZ0ZXJXcml0ZSA9ICdhZnRlcldyaXRlJztcbmV4cG9ydCB2YXIgbW9kaWZpZXJQaGFzZXMgPSBbYmVmb3JlUmVhZCwgcmVhZCwgYWZ0ZXJSZWFkLCBiZWZvcmVNYWluLCBtYWluLCBhZnRlck1haW4sIGJlZm9yZVdyaXRlLCB3cml0ZSwgYWZ0ZXJXcml0ZV07IiwiZXhwb3J0cy5pbnRlcm9wRGVmYXVsdCA9IGZ1bmN0aW9uIChhKSB7XG4gIHJldHVybiBhICYmIGEuX19lc01vZHVsZSA/IGEgOiB7ZGVmYXVsdDogYX07XG59O1xuXG5leHBvcnRzLmRlZmluZUludGVyb3BGbGFnID0gZnVuY3Rpb24gKGEpIHtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGEsICdfX2VzTW9kdWxlJywge3ZhbHVlOiB0cnVlfSk7XG59O1xuXG5leHBvcnRzLmV4cG9ydEFsbCA9IGZ1bmN0aW9uIChzb3VyY2UsIGRlc3QpIHtcbiAgT2JqZWN0LmtleXMoc291cmNlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBpZiAoa2V5ID09PSAnZGVmYXVsdCcgfHwga2V5ID09PSAnX19lc01vZHVsZScgfHwgZGVzdC5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGRlc3QsIGtleSwge1xuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gc291cmNlW2tleV07XG4gICAgICB9LFxuICAgIH0pO1xuICB9KTtcblxuICByZXR1cm4gZGVzdDtcbn07XG5cbmV4cG9ydHMuZXhwb3J0ID0gZnVuY3Rpb24gKGRlc3QsIGRlc3ROYW1lLCBnZXQpIHtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGRlc3QsIGRlc3ROYW1lLCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGdldCxcbiAgfSk7XG59O1xuIiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBhcHBseVN0eWxlcyB9IGZyb20gXCIuL2FwcGx5U3R5bGVzLmpzXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGFycm93IH0gZnJvbSBcIi4vYXJyb3cuanNcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgY29tcHV0ZVN0eWxlcyB9IGZyb20gXCIuL2NvbXB1dGVTdHlsZXMuanNcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZXZlbnRMaXN0ZW5lcnMgfSBmcm9tIFwiLi9ldmVudExpc3RlbmVycy5qc1wiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBmbGlwIH0gZnJvbSBcIi4vZmxpcC5qc1wiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBoaWRlIH0gZnJvbSBcIi4vaGlkZS5qc1wiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBvZmZzZXQgfSBmcm9tIFwiLi9vZmZzZXQuanNcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgcG9wcGVyT2Zmc2V0cyB9IGZyb20gXCIuL3BvcHBlck9mZnNldHMuanNcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgcHJldmVudE92ZXJmbG93IH0gZnJvbSBcIi4vcHJldmVudE92ZXJmbG93LmpzXCI7IiwiaW1wb3J0IGdldE5vZGVOYW1lIGZyb20gXCIuLi9kb20tdXRpbHMvZ2V0Tm9kZU5hbWUuanNcIjtcbmltcG9ydCB7IGlzSFRNTEVsZW1lbnQgfSBmcm9tIFwiLi4vZG9tLXV0aWxzL2luc3RhbmNlT2YuanNcIjsgLy8gVGhpcyBtb2RpZmllciB0YWtlcyB0aGUgc3R5bGVzIHByZXBhcmVkIGJ5IHRoZSBgY29tcHV0ZVN0eWxlc2AgbW9kaWZpZXJcbi8vIGFuZCBhcHBsaWVzIHRoZW0gdG8gdGhlIEhUTUxFbGVtZW50cyBzdWNoIGFzIHBvcHBlciBhbmQgYXJyb3dcblxuZnVuY3Rpb24gYXBwbHlTdHlsZXMoX3JlZikge1xuICB2YXIgc3RhdGUgPSBfcmVmLnN0YXRlO1xuICBPYmplY3Qua2V5cyhzdGF0ZS5lbGVtZW50cykuZm9yRWFjaChmdW5jdGlvbiAobmFtZSkge1xuICAgIHZhciBzdHlsZSA9IHN0YXRlLnN0eWxlc1tuYW1lXSB8fCB7fTtcbiAgICB2YXIgYXR0cmlidXRlcyA9IHN0YXRlLmF0dHJpYnV0ZXNbbmFtZV0gfHwge307XG4gICAgdmFyIGVsZW1lbnQgPSBzdGF0ZS5lbGVtZW50c1tuYW1lXTsgLy8gYXJyb3cgaXMgb3B0aW9uYWwgKyB2aXJ0dWFsIGVsZW1lbnRzXG5cbiAgICBpZiAoIWlzSFRNTEVsZW1lbnQoZWxlbWVudCkgfHwgIWdldE5vZGVOYW1lKGVsZW1lbnQpKSB7XG4gICAgICByZXR1cm47XG4gICAgfSAvLyBGbG93IGRvZXNuJ3Qgc3VwcG9ydCB0byBleHRlbmQgdGhpcyBwcm9wZXJ0eSwgYnV0IGl0J3MgdGhlIG1vc3RcbiAgICAvLyBlZmZlY3RpdmUgd2F5IHRvIGFwcGx5IHN0eWxlcyB0byBhbiBIVE1MRWxlbWVudFxuICAgIC8vICRGbG93Rml4TWVbY2Fubm90LXdyaXRlXVxuXG5cbiAgICBPYmplY3QuYXNzaWduKGVsZW1lbnQuc3R5bGUsIHN0eWxlKTtcbiAgICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICB2YXIgdmFsdWUgPSBhdHRyaWJ1dGVzW25hbWVdO1xuXG4gICAgICBpZiAodmFsdWUgPT09IGZhbHNlKSB7XG4gICAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKG5hbWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUgPT09IHRydWUgPyAnJyA6IHZhbHVlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGVmZmVjdChfcmVmMikge1xuICB2YXIgc3RhdGUgPSBfcmVmMi5zdGF0ZTtcbiAgdmFyIGluaXRpYWxTdHlsZXMgPSB7XG4gICAgcG9wcGVyOiB7XG4gICAgICBwb3NpdGlvbjogc3RhdGUub3B0aW9ucy5zdHJhdGVneSxcbiAgICAgIGxlZnQ6ICcwJyxcbiAgICAgIHRvcDogJzAnLFxuICAgICAgbWFyZ2luOiAnMCdcbiAgICB9LFxuICAgIGFycm93OiB7XG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJ1xuICAgIH0sXG4gICAgcmVmZXJlbmNlOiB7fVxuICB9O1xuICBPYmplY3QuYXNzaWduKHN0YXRlLmVsZW1lbnRzLnBvcHBlci5zdHlsZSwgaW5pdGlhbFN0eWxlcy5wb3BwZXIpO1xuICBzdGF0ZS5zdHlsZXMgPSBpbml0aWFsU3R5bGVzO1xuXG4gIGlmIChzdGF0ZS5lbGVtZW50cy5hcnJvdykge1xuICAgIE9iamVjdC5hc3NpZ24oc3RhdGUuZWxlbWVudHMuYXJyb3cuc3R5bGUsIGluaXRpYWxTdHlsZXMuYXJyb3cpO1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICBPYmplY3Qua2V5cyhzdGF0ZS5lbGVtZW50cykuZm9yRWFjaChmdW5jdGlvbiAobmFtZSkge1xuICAgICAgdmFyIGVsZW1lbnQgPSBzdGF0ZS5lbGVtZW50c1tuYW1lXTtcbiAgICAgIHZhciBhdHRyaWJ1dGVzID0gc3RhdGUuYXR0cmlidXRlc1tuYW1lXSB8fCB7fTtcbiAgICAgIHZhciBzdHlsZVByb3BlcnRpZXMgPSBPYmplY3Qua2V5cyhzdGF0ZS5zdHlsZXMuaGFzT3duUHJvcGVydHkobmFtZSkgPyBzdGF0ZS5zdHlsZXNbbmFtZV0gOiBpbml0aWFsU3R5bGVzW25hbWVdKTsgLy8gU2V0IGFsbCB2YWx1ZXMgdG8gYW4gZW1wdHkgc3RyaW5nIHRvIHVuc2V0IHRoZW1cblxuICAgICAgdmFyIHN0eWxlID0gc3R5bGVQcm9wZXJ0aWVzLnJlZHVjZShmdW5jdGlvbiAoc3R5bGUsIHByb3BlcnR5KSB7XG4gICAgICAgIHN0eWxlW3Byb3BlcnR5XSA9ICcnO1xuICAgICAgICByZXR1cm4gc3R5bGU7XG4gICAgICB9LCB7fSk7IC8vIGFycm93IGlzIG9wdGlvbmFsICsgdmlydHVhbCBlbGVtZW50c1xuXG4gICAgICBpZiAoIWlzSFRNTEVsZW1lbnQoZWxlbWVudCkgfHwgIWdldE5vZGVOYW1lKGVsZW1lbnQpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgT2JqZWN0LmFzc2lnbihlbGVtZW50LnN0eWxlLCBzdHlsZSk7XG4gICAgICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChhdHRyaWJ1dGUpIHtcbiAgICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoYXR0cmlidXRlKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xufSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnYXBwbHlTdHlsZXMnLFxuICBlbmFibGVkOiB0cnVlLFxuICBwaGFzZTogJ3dyaXRlJyxcbiAgZm46IGFwcGx5U3R5bGVzLFxuICBlZmZlY3Q6IGVmZmVjdCxcbiAgcmVxdWlyZXM6IFsnY29tcHV0ZVN0eWxlcyddXG59OyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldE5vZGVOYW1lKGVsZW1lbnQpIHtcbiAgcmV0dXJuIGVsZW1lbnQgPyAoZWxlbWVudC5ub2RlTmFtZSB8fCAnJykudG9Mb3dlckNhc2UoKSA6IG51bGw7XG59IiwiaW1wb3J0IGdldFdpbmRvdyBmcm9tIFwiLi9nZXRXaW5kb3cuanNcIjtcblxuZnVuY3Rpb24gaXNFbGVtZW50KG5vZGUpIHtcbiAgdmFyIE93bkVsZW1lbnQgPSBnZXRXaW5kb3cobm9kZSkuRWxlbWVudDtcbiAgcmV0dXJuIG5vZGUgaW5zdGFuY2VvZiBPd25FbGVtZW50IHx8IG5vZGUgaW5zdGFuY2VvZiBFbGVtZW50O1xufVxuXG5mdW5jdGlvbiBpc0hUTUxFbGVtZW50KG5vZGUpIHtcbiAgdmFyIE93bkVsZW1lbnQgPSBnZXRXaW5kb3cobm9kZSkuSFRNTEVsZW1lbnQ7XG4gIHJldHVybiBub2RlIGluc3RhbmNlb2YgT3duRWxlbWVudCB8fCBub2RlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIGlzU2hhZG93Um9vdChub2RlKSB7XG4gIC8vIElFIDExIGhhcyBubyBTaGFkb3dSb290XG4gIGlmICh0eXBlb2YgU2hhZG93Um9vdCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIgT3duRWxlbWVudCA9IGdldFdpbmRvdyhub2RlKS5TaGFkb3dSb290O1xuICByZXR1cm4gbm9kZSBpbnN0YW5jZW9mIE93bkVsZW1lbnQgfHwgbm9kZSBpbnN0YW5jZW9mIFNoYWRvd1Jvb3Q7XG59XG5cbmV4cG9ydCB7IGlzRWxlbWVudCwgaXNIVE1MRWxlbWVudCwgaXNTaGFkb3dSb290IH07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0V2luZG93KG5vZGUpIHtcbiAgaWYgKG5vZGUgPT0gbnVsbCkge1xuICAgIHJldHVybiB3aW5kb3c7XG4gIH1cblxuICBpZiAobm9kZS50b1N0cmluZygpICE9PSAnW29iamVjdCBXaW5kb3ddJykge1xuICAgIHZhciBvd25lckRvY3VtZW50ID0gbm9kZS5vd25lckRvY3VtZW50O1xuICAgIHJldHVybiBvd25lckRvY3VtZW50ID8gb3duZXJEb2N1bWVudC5kZWZhdWx0VmlldyB8fCB3aW5kb3cgOiB3aW5kb3c7XG4gIH1cblxuICByZXR1cm4gbm9kZTtcbn0iLCJpbXBvcnQgZ2V0QmFzZVBsYWNlbWVudCBmcm9tIFwiLi4vdXRpbHMvZ2V0QmFzZVBsYWNlbWVudC5qc1wiO1xuaW1wb3J0IGdldExheW91dFJlY3QgZnJvbSBcIi4uL2RvbS11dGlscy9nZXRMYXlvdXRSZWN0LmpzXCI7XG5pbXBvcnQgY29udGFpbnMgZnJvbSBcIi4uL2RvbS11dGlscy9jb250YWlucy5qc1wiO1xuaW1wb3J0IGdldE9mZnNldFBhcmVudCBmcm9tIFwiLi4vZG9tLXV0aWxzL2dldE9mZnNldFBhcmVudC5qc1wiO1xuaW1wb3J0IGdldE1haW5BeGlzRnJvbVBsYWNlbWVudCBmcm9tIFwiLi4vdXRpbHMvZ2V0TWFpbkF4aXNGcm9tUGxhY2VtZW50LmpzXCI7XG5pbXBvcnQgeyB3aXRoaW4gfSBmcm9tIFwiLi4vdXRpbHMvd2l0aGluLmpzXCI7XG5pbXBvcnQgbWVyZ2VQYWRkaW5nT2JqZWN0IGZyb20gXCIuLi91dGlscy9tZXJnZVBhZGRpbmdPYmplY3QuanNcIjtcbmltcG9ydCBleHBhbmRUb0hhc2hNYXAgZnJvbSBcIi4uL3V0aWxzL2V4cGFuZFRvSGFzaE1hcC5qc1wiO1xuaW1wb3J0IHsgbGVmdCwgcmlnaHQsIGJhc2VQbGFjZW1lbnRzLCB0b3AsIGJvdHRvbSB9IGZyb20gXCIuLi9lbnVtcy5qc1wiO1xuaW1wb3J0IHsgaXNIVE1MRWxlbWVudCB9IGZyb20gXCIuLi9kb20tdXRpbHMvaW5zdGFuY2VPZi5qc1wiOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cbnZhciB0b1BhZGRpbmdPYmplY3QgPSBmdW5jdGlvbiB0b1BhZGRpbmdPYmplY3QocGFkZGluZywgc3RhdGUpIHtcbiAgcGFkZGluZyA9IHR5cGVvZiBwYWRkaW5nID09PSAnZnVuY3Rpb24nID8gcGFkZGluZyhPYmplY3QuYXNzaWduKHt9LCBzdGF0ZS5yZWN0cywge1xuICAgIHBsYWNlbWVudDogc3RhdGUucGxhY2VtZW50XG4gIH0pKSA6IHBhZGRpbmc7XG4gIHJldHVybiBtZXJnZVBhZGRpbmdPYmplY3QodHlwZW9mIHBhZGRpbmcgIT09ICdudW1iZXInID8gcGFkZGluZyA6IGV4cGFuZFRvSGFzaE1hcChwYWRkaW5nLCBiYXNlUGxhY2VtZW50cykpO1xufTtcblxuZnVuY3Rpb24gYXJyb3coX3JlZikge1xuICB2YXIgX3N0YXRlJG1vZGlmaWVyc0RhdGEkO1xuXG4gIHZhciBzdGF0ZSA9IF9yZWYuc3RhdGUsXG4gICAgICBuYW1lID0gX3JlZi5uYW1lLFxuICAgICAgb3B0aW9ucyA9IF9yZWYub3B0aW9ucztcbiAgdmFyIGFycm93RWxlbWVudCA9IHN0YXRlLmVsZW1lbnRzLmFycm93O1xuICB2YXIgcG9wcGVyT2Zmc2V0cyA9IHN0YXRlLm1vZGlmaWVyc0RhdGEucG9wcGVyT2Zmc2V0cztcbiAgdmFyIGJhc2VQbGFjZW1lbnQgPSBnZXRCYXNlUGxhY2VtZW50KHN0YXRlLnBsYWNlbWVudCk7XG4gIHZhciBheGlzID0gZ2V0TWFpbkF4aXNGcm9tUGxhY2VtZW50KGJhc2VQbGFjZW1lbnQpO1xuICB2YXIgaXNWZXJ0aWNhbCA9IFtsZWZ0LCByaWdodF0uaW5kZXhPZihiYXNlUGxhY2VtZW50KSA+PSAwO1xuICB2YXIgbGVuID0gaXNWZXJ0aWNhbCA/ICdoZWlnaHQnIDogJ3dpZHRoJztcblxuICBpZiAoIWFycm93RWxlbWVudCB8fCAhcG9wcGVyT2Zmc2V0cykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciBwYWRkaW5nT2JqZWN0ID0gdG9QYWRkaW5nT2JqZWN0KG9wdGlvbnMucGFkZGluZywgc3RhdGUpO1xuICB2YXIgYXJyb3dSZWN0ID0gZ2V0TGF5b3V0UmVjdChhcnJvd0VsZW1lbnQpO1xuICB2YXIgbWluUHJvcCA9IGF4aXMgPT09ICd5JyA/IHRvcCA6IGxlZnQ7XG4gIHZhciBtYXhQcm9wID0gYXhpcyA9PT0gJ3knID8gYm90dG9tIDogcmlnaHQ7XG4gIHZhciBlbmREaWZmID0gc3RhdGUucmVjdHMucmVmZXJlbmNlW2xlbl0gKyBzdGF0ZS5yZWN0cy5yZWZlcmVuY2VbYXhpc10gLSBwb3BwZXJPZmZzZXRzW2F4aXNdIC0gc3RhdGUucmVjdHMucG9wcGVyW2xlbl07XG4gIHZhciBzdGFydERpZmYgPSBwb3BwZXJPZmZzZXRzW2F4aXNdIC0gc3RhdGUucmVjdHMucmVmZXJlbmNlW2F4aXNdO1xuICB2YXIgYXJyb3dPZmZzZXRQYXJlbnQgPSBnZXRPZmZzZXRQYXJlbnQoYXJyb3dFbGVtZW50KTtcbiAgdmFyIGNsaWVudFNpemUgPSBhcnJvd09mZnNldFBhcmVudCA/IGF4aXMgPT09ICd5JyA/IGFycm93T2Zmc2V0UGFyZW50LmNsaWVudEhlaWdodCB8fCAwIDogYXJyb3dPZmZzZXRQYXJlbnQuY2xpZW50V2lkdGggfHwgMCA6IDA7XG4gIHZhciBjZW50ZXJUb1JlZmVyZW5jZSA9IGVuZERpZmYgLyAyIC0gc3RhcnREaWZmIC8gMjsgLy8gTWFrZSBzdXJlIHRoZSBhcnJvdyBkb2Vzbid0IG92ZXJmbG93IHRoZSBwb3BwZXIgaWYgdGhlIGNlbnRlciBwb2ludCBpc1xuICAvLyBvdXRzaWRlIG9mIHRoZSBwb3BwZXIgYm91bmRzXG5cbiAgdmFyIG1pbiA9IHBhZGRpbmdPYmplY3RbbWluUHJvcF07XG4gIHZhciBtYXggPSBjbGllbnRTaXplIC0gYXJyb3dSZWN0W2xlbl0gLSBwYWRkaW5nT2JqZWN0W21heFByb3BdO1xuICB2YXIgY2VudGVyID0gY2xpZW50U2l6ZSAvIDIgLSBhcnJvd1JlY3RbbGVuXSAvIDIgKyBjZW50ZXJUb1JlZmVyZW5jZTtcbiAgdmFyIG9mZnNldCA9IHdpdGhpbihtaW4sIGNlbnRlciwgbWF4KTsgLy8gUHJldmVudHMgYnJlYWtpbmcgc3ludGF4IGhpZ2hsaWdodGluZy4uLlxuXG4gIHZhciBheGlzUHJvcCA9IGF4aXM7XG4gIHN0YXRlLm1vZGlmaWVyc0RhdGFbbmFtZV0gPSAoX3N0YXRlJG1vZGlmaWVyc0RhdGEkID0ge30sIF9zdGF0ZSRtb2RpZmllcnNEYXRhJFtheGlzUHJvcF0gPSBvZmZzZXQsIF9zdGF0ZSRtb2RpZmllcnNEYXRhJC5jZW50ZXJPZmZzZXQgPSBvZmZzZXQgLSBjZW50ZXIsIF9zdGF0ZSRtb2RpZmllcnNEYXRhJCk7XG59XG5cbmZ1bmN0aW9uIGVmZmVjdChfcmVmMikge1xuICB2YXIgc3RhdGUgPSBfcmVmMi5zdGF0ZSxcbiAgICAgIG9wdGlvbnMgPSBfcmVmMi5vcHRpb25zO1xuICB2YXIgX29wdGlvbnMkZWxlbWVudCA9IG9wdGlvbnMuZWxlbWVudCxcbiAgICAgIGFycm93RWxlbWVudCA9IF9vcHRpb25zJGVsZW1lbnQgPT09IHZvaWQgMCA/ICdbZGF0YS1wb3BwZXItYXJyb3ddJyA6IF9vcHRpb25zJGVsZW1lbnQ7XG5cbiAgaWYgKGFycm93RWxlbWVudCA9PSBudWxsKSB7XG4gICAgcmV0dXJuO1xuICB9IC8vIENTUyBzZWxlY3RvclxuXG5cbiAgaWYgKHR5cGVvZiBhcnJvd0VsZW1lbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgYXJyb3dFbGVtZW50ID0gc3RhdGUuZWxlbWVudHMucG9wcGVyLnF1ZXJ5U2VsZWN0b3IoYXJyb3dFbGVtZW50KTtcblxuICAgIGlmICghYXJyb3dFbGVtZW50KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgIGlmICghaXNIVE1MRWxlbWVudChhcnJvd0VsZW1lbnQpKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFsnUG9wcGVyOiBcImFycm93XCIgZWxlbWVudCBtdXN0IGJlIGFuIEhUTUxFbGVtZW50IChub3QgYW4gU1ZHRWxlbWVudCkuJywgJ1RvIHVzZSBhbiBTVkcgYXJyb3csIHdyYXAgaXQgaW4gYW4gSFRNTEVsZW1lbnQgdGhhdCB3aWxsIGJlIHVzZWQgYXMnLCAndGhlIGFycm93LiddLmpvaW4oJyAnKSk7XG4gICAgfVxuICB9XG5cbiAgaWYgKCFjb250YWlucyhzdGF0ZS5lbGVtZW50cy5wb3BwZXIsIGFycm93RWxlbWVudCkpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFsnUG9wcGVyOiBcImFycm93XCIgbW9kaWZpZXJcXCdzIGBlbGVtZW50YCBtdXN0IGJlIGEgY2hpbGQgb2YgdGhlIHBvcHBlcicsICdlbGVtZW50LiddLmpvaW4oJyAnKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgc3RhdGUuZWxlbWVudHMuYXJyb3cgPSBhcnJvd0VsZW1lbnQ7XG59IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdhcnJvdycsXG4gIGVuYWJsZWQ6IHRydWUsXG4gIHBoYXNlOiAnbWFpbicsXG4gIGZuOiBhcnJvdyxcbiAgZWZmZWN0OiBlZmZlY3QsXG4gIHJlcXVpcmVzOiBbJ3BvcHBlck9mZnNldHMnXSxcbiAgcmVxdWlyZXNJZkV4aXN0czogWydwcmV2ZW50T3ZlcmZsb3cnXVxufTsiLCJpbXBvcnQgeyBhdXRvIH0gZnJvbSBcIi4uL2VudW1zLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRCYXNlUGxhY2VtZW50KHBsYWNlbWVudCkge1xuICByZXR1cm4gcGxhY2VtZW50LnNwbGl0KCctJylbMF07XG59IiwiaW1wb3J0IGdldEJvdW5kaW5nQ2xpZW50UmVjdCBmcm9tIFwiLi9nZXRCb3VuZGluZ0NsaWVudFJlY3QuanNcIjsgLy8gUmV0dXJucyB0aGUgbGF5b3V0IHJlY3Qgb2YgYW4gZWxlbWVudCByZWxhdGl2ZSB0byBpdHMgb2Zmc2V0UGFyZW50LiBMYXlvdXRcbi8vIG1lYW5zIGl0IGRvZXNuJ3QgdGFrZSBpbnRvIGFjY291bnQgdHJhbnNmb3Jtcy5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0TGF5b3V0UmVjdChlbGVtZW50KSB7XG4gIHZhciBjbGllbnRSZWN0ID0gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KGVsZW1lbnQpOyAvLyBVc2UgdGhlIGNsaWVudFJlY3Qgc2l6ZXMgaWYgaXQncyBub3QgYmVlbiB0cmFuc2Zvcm1lZC5cbiAgLy8gRml4ZXMgaHR0cHM6Ly9naXRodWIuY29tL3BvcHBlcmpzL3BvcHBlci1jb3JlL2lzc3Vlcy8xMjIzXG5cbiAgdmFyIHdpZHRoID0gZWxlbWVudC5vZmZzZXRXaWR0aDtcbiAgdmFyIGhlaWdodCA9IGVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xuXG4gIGlmIChNYXRoLmFicyhjbGllbnRSZWN0LndpZHRoIC0gd2lkdGgpIDw9IDEpIHtcbiAgICB3aWR0aCA9IGNsaWVudFJlY3Qud2lkdGg7XG4gIH1cblxuICBpZiAoTWF0aC5hYnMoY2xpZW50UmVjdC5oZWlnaHQgLSBoZWlnaHQpIDw9IDEpIHtcbiAgICBoZWlnaHQgPSBjbGllbnRSZWN0LmhlaWdodDtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgeDogZWxlbWVudC5vZmZzZXRMZWZ0LFxuICAgIHk6IGVsZW1lbnQub2Zmc2V0VG9wLFxuICAgIHdpZHRoOiB3aWR0aCxcbiAgICBoZWlnaHQ6IGhlaWdodFxuICB9O1xufSIsImltcG9ydCB7IGlzSFRNTEVsZW1lbnQgfSBmcm9tIFwiLi9pbnN0YW5jZU9mLmpzXCI7XG5pbXBvcnQgeyByb3VuZCB9IGZyb20gXCIuLi91dGlscy9tYXRoLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRCb3VuZGluZ0NsaWVudFJlY3QoZWxlbWVudCwgaW5jbHVkZVNjYWxlKSB7XG4gIGlmIChpbmNsdWRlU2NhbGUgPT09IHZvaWQgMCkge1xuICAgIGluY2x1ZGVTY2FsZSA9IGZhbHNlO1xuICB9XG5cbiAgdmFyIHJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICB2YXIgc2NhbGVYID0gMTtcbiAgdmFyIHNjYWxlWSA9IDE7XG5cbiAgaWYgKGlzSFRNTEVsZW1lbnQoZWxlbWVudCkgJiYgaW5jbHVkZVNjYWxlKSB7XG4gICAgdmFyIG9mZnNldEhlaWdodCA9IGVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xuICAgIHZhciBvZmZzZXRXaWR0aCA9IGVsZW1lbnQub2Zmc2V0V2lkdGg7IC8vIERvIG5vdCBhdHRlbXB0IHRvIGRpdmlkZSBieSAwLCBvdGhlcndpc2Ugd2UgZ2V0IGBJbmZpbml0eWAgYXMgc2NhbGVcbiAgICAvLyBGYWxsYmFjayB0byAxIGluIGNhc2UgYm90aCB2YWx1ZXMgYXJlIGAwYFxuXG4gICAgaWYgKG9mZnNldFdpZHRoID4gMCkge1xuICAgICAgc2NhbGVYID0gcm91bmQocmVjdC53aWR0aCkgLyBvZmZzZXRXaWR0aCB8fCAxO1xuICAgIH1cblxuICAgIGlmIChvZmZzZXRIZWlnaHQgPiAwKSB7XG4gICAgICBzY2FsZVkgPSByb3VuZChyZWN0LmhlaWdodCkgLyBvZmZzZXRIZWlnaHQgfHwgMTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHdpZHRoOiByZWN0LndpZHRoIC8gc2NhbGVYLFxuICAgIGhlaWdodDogcmVjdC5oZWlnaHQgLyBzY2FsZVksXG4gICAgdG9wOiByZWN0LnRvcCAvIHNjYWxlWSxcbiAgICByaWdodDogcmVjdC5yaWdodCAvIHNjYWxlWCxcbiAgICBib3R0b206IHJlY3QuYm90dG9tIC8gc2NhbGVZLFxuICAgIGxlZnQ6IHJlY3QubGVmdCAvIHNjYWxlWCxcbiAgICB4OiByZWN0LmxlZnQgLyBzY2FsZVgsXG4gICAgeTogcmVjdC50b3AgLyBzY2FsZVlcbiAgfTtcbn0iLCJleHBvcnQgdmFyIG1heCA9IE1hdGgubWF4O1xuZXhwb3J0IHZhciBtaW4gPSBNYXRoLm1pbjtcbmV4cG9ydCB2YXIgcm91bmQgPSBNYXRoLnJvdW5kOyIsImltcG9ydCB7IGlzU2hhZG93Um9vdCB9IGZyb20gXCIuL2luc3RhbmNlT2YuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbnRhaW5zKHBhcmVudCwgY2hpbGQpIHtcbiAgdmFyIHJvb3ROb2RlID0gY2hpbGQuZ2V0Um9vdE5vZGUgJiYgY2hpbGQuZ2V0Um9vdE5vZGUoKTsgLy8gRmlyc3QsIGF0dGVtcHQgd2l0aCBmYXN0ZXIgbmF0aXZlIG1ldGhvZFxuXG4gIGlmIChwYXJlbnQuY29udGFpbnMoY2hpbGQpKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gLy8gdGhlbiBmYWxsYmFjayB0byBjdXN0b20gaW1wbGVtZW50YXRpb24gd2l0aCBTaGFkb3cgRE9NIHN1cHBvcnRcbiAgZWxzZSBpZiAocm9vdE5vZGUgJiYgaXNTaGFkb3dSb290KHJvb3ROb2RlKSkge1xuICAgICAgdmFyIG5leHQgPSBjaGlsZDtcblxuICAgICAgZG8ge1xuICAgICAgICBpZiAobmV4dCAmJiBwYXJlbnQuaXNTYW1lTm9kZShuZXh0KSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IC8vICRGbG93Rml4TWVbcHJvcC1taXNzaW5nXTogbmVlZCBhIGJldHRlciB3YXkgdG8gaGFuZGxlIHRoaXMuLi5cblxuXG4gICAgICAgIG5leHQgPSBuZXh0LnBhcmVudE5vZGUgfHwgbmV4dC5ob3N0O1xuICAgICAgfSB3aGlsZSAobmV4dCk7XG4gICAgfSAvLyBHaXZlIHVwLCB0aGUgcmVzdWx0IGlzIGZhbHNlXG5cblxuICByZXR1cm4gZmFsc2U7XG59IiwiaW1wb3J0IGdldFdpbmRvdyBmcm9tIFwiLi9nZXRXaW5kb3cuanNcIjtcbmltcG9ydCBnZXROb2RlTmFtZSBmcm9tIFwiLi9nZXROb2RlTmFtZS5qc1wiO1xuaW1wb3J0IGdldENvbXB1dGVkU3R5bGUgZnJvbSBcIi4vZ2V0Q29tcHV0ZWRTdHlsZS5qc1wiO1xuaW1wb3J0IHsgaXNIVE1MRWxlbWVudCwgaXNTaGFkb3dSb290IH0gZnJvbSBcIi4vaW5zdGFuY2VPZi5qc1wiO1xuaW1wb3J0IGlzVGFibGVFbGVtZW50IGZyb20gXCIuL2lzVGFibGVFbGVtZW50LmpzXCI7XG5pbXBvcnQgZ2V0UGFyZW50Tm9kZSBmcm9tIFwiLi9nZXRQYXJlbnROb2RlLmpzXCI7XG5cbmZ1bmN0aW9uIGdldFRydWVPZmZzZXRQYXJlbnQoZWxlbWVudCkge1xuICBpZiAoIWlzSFRNTEVsZW1lbnQoZWxlbWVudCkgfHwgLy8gaHR0cHM6Ly9naXRodWIuY29tL3BvcHBlcmpzL3BvcHBlci1jb3JlL2lzc3Vlcy84MzdcbiAgZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KS5wb3NpdGlvbiA9PT0gJ2ZpeGVkJykge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnQub2Zmc2V0UGFyZW50O1xufSAvLyBgLm9mZnNldFBhcmVudGAgcmVwb3J0cyBgbnVsbGAgZm9yIGZpeGVkIGVsZW1lbnRzLCB3aGlsZSBhYnNvbHV0ZSBlbGVtZW50c1xuLy8gcmV0dXJuIHRoZSBjb250YWluaW5nIGJsb2NrXG5cblxuZnVuY3Rpb24gZ2V0Q29udGFpbmluZ0Jsb2NrKGVsZW1lbnQpIHtcbiAgdmFyIGlzRmlyZWZveCA9IG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKS5pbmRleE9mKCdmaXJlZm94JykgIT09IC0xO1xuICB2YXIgaXNJRSA9IG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZignVHJpZGVudCcpICE9PSAtMTtcblxuICBpZiAoaXNJRSAmJiBpc0hUTUxFbGVtZW50KGVsZW1lbnQpKSB7XG4gICAgLy8gSW4gSUUgOSwgMTAgYW5kIDExIGZpeGVkIGVsZW1lbnRzIGNvbnRhaW5pbmcgYmxvY2sgaXMgYWx3YXlzIGVzdGFibGlzaGVkIGJ5IHRoZSB2aWV3cG9ydFxuICAgIHZhciBlbGVtZW50Q3NzID0gZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KTtcblxuICAgIGlmIChlbGVtZW50Q3NzLnBvc2l0aW9uID09PSAnZml4ZWQnKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1cblxuICB2YXIgY3VycmVudE5vZGUgPSBnZXRQYXJlbnROb2RlKGVsZW1lbnQpO1xuXG4gIGlmIChpc1NoYWRvd1Jvb3QoY3VycmVudE5vZGUpKSB7XG4gICAgY3VycmVudE5vZGUgPSBjdXJyZW50Tm9kZS5ob3N0O1xuICB9XG5cbiAgd2hpbGUgKGlzSFRNTEVsZW1lbnQoY3VycmVudE5vZGUpICYmIFsnaHRtbCcsICdib2R5J10uaW5kZXhPZihnZXROb2RlTmFtZShjdXJyZW50Tm9kZSkpIDwgMCkge1xuICAgIHZhciBjc3MgPSBnZXRDb21wdXRlZFN0eWxlKGN1cnJlbnROb2RlKTsgLy8gVGhpcyBpcyBub24tZXhoYXVzdGl2ZSBidXQgY292ZXJzIHRoZSBtb3N0IGNvbW1vbiBDU1MgcHJvcGVydGllcyB0aGF0XG4gICAgLy8gY3JlYXRlIGEgY29udGFpbmluZyBibG9jay5cbiAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvQ29udGFpbmluZ19ibG9jayNpZGVudGlmeWluZ190aGVfY29udGFpbmluZ19ibG9ja1xuXG4gICAgaWYgKGNzcy50cmFuc2Zvcm0gIT09ICdub25lJyB8fCBjc3MucGVyc3BlY3RpdmUgIT09ICdub25lJyB8fCBjc3MuY29udGFpbiA9PT0gJ3BhaW50JyB8fCBbJ3RyYW5zZm9ybScsICdwZXJzcGVjdGl2ZSddLmluZGV4T2YoY3NzLndpbGxDaGFuZ2UpICE9PSAtMSB8fCBpc0ZpcmVmb3ggJiYgY3NzLndpbGxDaGFuZ2UgPT09ICdmaWx0ZXInIHx8IGlzRmlyZWZveCAmJiBjc3MuZmlsdGVyICYmIGNzcy5maWx0ZXIgIT09ICdub25lJykge1xuICAgICAgcmV0dXJuIGN1cnJlbnROb2RlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjdXJyZW50Tm9kZSA9IGN1cnJlbnROb2RlLnBhcmVudE5vZGU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59IC8vIEdldHMgdGhlIGNsb3Nlc3QgYW5jZXN0b3IgcG9zaXRpb25lZCBlbGVtZW50LiBIYW5kbGVzIHNvbWUgZWRnZSBjYXNlcyxcbi8vIHN1Y2ggYXMgdGFibGUgYW5jZXN0b3JzIGFuZCBjcm9zcyBicm93c2VyIGJ1Z3MuXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0T2Zmc2V0UGFyZW50KGVsZW1lbnQpIHtcbiAgdmFyIHdpbmRvdyA9IGdldFdpbmRvdyhlbGVtZW50KTtcbiAgdmFyIG9mZnNldFBhcmVudCA9IGdldFRydWVPZmZzZXRQYXJlbnQoZWxlbWVudCk7XG5cbiAgd2hpbGUgKG9mZnNldFBhcmVudCAmJiBpc1RhYmxlRWxlbWVudChvZmZzZXRQYXJlbnQpICYmIGdldENvbXB1dGVkU3R5bGUob2Zmc2V0UGFyZW50KS5wb3NpdGlvbiA9PT0gJ3N0YXRpYycpIHtcbiAgICBvZmZzZXRQYXJlbnQgPSBnZXRUcnVlT2Zmc2V0UGFyZW50KG9mZnNldFBhcmVudCk7XG4gIH1cblxuICBpZiAob2Zmc2V0UGFyZW50ICYmIChnZXROb2RlTmFtZShvZmZzZXRQYXJlbnQpID09PSAnaHRtbCcgfHwgZ2V0Tm9kZU5hbWUob2Zmc2V0UGFyZW50KSA9PT0gJ2JvZHknICYmIGdldENvbXB1dGVkU3R5bGUob2Zmc2V0UGFyZW50KS5wb3NpdGlvbiA9PT0gJ3N0YXRpYycpKSB7XG4gICAgcmV0dXJuIHdpbmRvdztcbiAgfVxuXG4gIHJldHVybiBvZmZzZXRQYXJlbnQgfHwgZ2V0Q29udGFpbmluZ0Jsb2NrKGVsZW1lbnQpIHx8IHdpbmRvdztcbn0iLCJpbXBvcnQgZ2V0V2luZG93IGZyb20gXCIuL2dldFdpbmRvdy5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KSB7XG4gIHJldHVybiBnZXRXaW5kb3coZWxlbWVudCkuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KTtcbn0iLCJpbXBvcnQgZ2V0Tm9kZU5hbWUgZnJvbSBcIi4vZ2V0Tm9kZU5hbWUuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzVGFibGVFbGVtZW50KGVsZW1lbnQpIHtcbiAgcmV0dXJuIFsndGFibGUnLCAndGQnLCAndGgnXS5pbmRleE9mKGdldE5vZGVOYW1lKGVsZW1lbnQpKSA+PSAwO1xufSIsImltcG9ydCBnZXROb2RlTmFtZSBmcm9tIFwiLi9nZXROb2RlTmFtZS5qc1wiO1xuaW1wb3J0IGdldERvY3VtZW50RWxlbWVudCBmcm9tIFwiLi9nZXREb2N1bWVudEVsZW1lbnQuanNcIjtcbmltcG9ydCB7IGlzU2hhZG93Um9vdCB9IGZyb20gXCIuL2luc3RhbmNlT2YuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFBhcmVudE5vZGUoZWxlbWVudCkge1xuICBpZiAoZ2V0Tm9kZU5hbWUoZWxlbWVudCkgPT09ICdodG1sJykge1xuICAgIHJldHVybiBlbGVtZW50O1xuICB9XG5cbiAgcmV0dXJuICgvLyB0aGlzIGlzIGEgcXVpY2tlciAoYnV0IGxlc3MgdHlwZSBzYWZlKSB3YXkgdG8gc2F2ZSBxdWl0ZSBzb21lIGJ5dGVzIGZyb20gdGhlIGJ1bmRsZVxuICAgIC8vICRGbG93Rml4TWVbaW5jb21wYXRpYmxlLXJldHVybl1cbiAgICAvLyAkRmxvd0ZpeE1lW3Byb3AtbWlzc2luZ11cbiAgICBlbGVtZW50LmFzc2lnbmVkU2xvdCB8fCAvLyBzdGVwIGludG8gdGhlIHNoYWRvdyBET00gb2YgdGhlIHBhcmVudCBvZiBhIHNsb3R0ZWQgbm9kZVxuICAgIGVsZW1lbnQucGFyZW50Tm9kZSB8fCAoIC8vIERPTSBFbGVtZW50IGRldGVjdGVkXG4gICAgaXNTaGFkb3dSb290KGVsZW1lbnQpID8gZWxlbWVudC5ob3N0IDogbnVsbCkgfHwgLy8gU2hhZG93Um9vdCBkZXRlY3RlZFxuICAgIC8vICRGbG93Rml4TWVbaW5jb21wYXRpYmxlLWNhbGxdOiBIVE1MRWxlbWVudCBpcyBhIE5vZGVcbiAgICBnZXREb2N1bWVudEVsZW1lbnQoZWxlbWVudCkgLy8gZmFsbGJhY2tcblxuICApO1xufSIsImltcG9ydCB7IGlzRWxlbWVudCB9IGZyb20gXCIuL2luc3RhbmNlT2YuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldERvY3VtZW50RWxlbWVudChlbGVtZW50KSB7XG4gIC8vICRGbG93Rml4TWVbaW5jb21wYXRpYmxlLXJldHVybl06IGFzc3VtZSBib2R5IGlzIGFsd2F5cyBhdmFpbGFibGVcbiAgcmV0dXJuICgoaXNFbGVtZW50KGVsZW1lbnQpID8gZWxlbWVudC5vd25lckRvY3VtZW50IDogLy8gJEZsb3dGaXhNZVtwcm9wLW1pc3NpbmddXG4gIGVsZW1lbnQuZG9jdW1lbnQpIHx8IHdpbmRvdy5kb2N1bWVudCkuZG9jdW1lbnRFbGVtZW50O1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldE1haW5BeGlzRnJvbVBsYWNlbWVudChwbGFjZW1lbnQpIHtcbiAgcmV0dXJuIFsndG9wJywgJ2JvdHRvbSddLmluZGV4T2YocGxhY2VtZW50KSA+PSAwID8gJ3gnIDogJ3knO1xufSIsImltcG9ydCB7IG1heCBhcyBtYXRoTWF4LCBtaW4gYXMgbWF0aE1pbiB9IGZyb20gXCIuL21hdGguanNcIjtcbmV4cG9ydCBmdW5jdGlvbiB3aXRoaW4obWluLCB2YWx1ZSwgbWF4KSB7XG4gIHJldHVybiBtYXRoTWF4KG1pbiwgbWF0aE1pbih2YWx1ZSwgbWF4KSk7XG59XG5leHBvcnQgZnVuY3Rpb24gd2l0aGluTWF4Q2xhbXAobWluLCB2YWx1ZSwgbWF4KSB7XG4gIHZhciB2ID0gd2l0aGluKG1pbiwgdmFsdWUsIG1heCk7XG4gIHJldHVybiB2ID4gbWF4ID8gbWF4IDogdjtcbn0iLCJpbXBvcnQgZ2V0RnJlc2hTaWRlT2JqZWN0IGZyb20gXCIuL2dldEZyZXNoU2lkZU9iamVjdC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWVyZ2VQYWRkaW5nT2JqZWN0KHBhZGRpbmdPYmplY3QpIHtcbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIGdldEZyZXNoU2lkZU9iamVjdCgpLCBwYWRkaW5nT2JqZWN0KTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRGcmVzaFNpZGVPYmplY3QoKSB7XG4gIHJldHVybiB7XG4gICAgdG9wOiAwLFxuICAgIHJpZ2h0OiAwLFxuICAgIGJvdHRvbTogMCxcbiAgICBsZWZ0OiAwXG4gIH07XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZXhwYW5kVG9IYXNoTWFwKHZhbHVlLCBrZXlzKSB7XG4gIHJldHVybiBrZXlzLnJlZHVjZShmdW5jdGlvbiAoaGFzaE1hcCwga2V5KSB7XG4gICAgaGFzaE1hcFtrZXldID0gdmFsdWU7XG4gICAgcmV0dXJuIGhhc2hNYXA7XG4gIH0sIHt9KTtcbn0iLCJpbXBvcnQgeyB0b3AsIGxlZnQsIHJpZ2h0LCBib3R0b20sIGVuZCB9IGZyb20gXCIuLi9lbnVtcy5qc1wiO1xuaW1wb3J0IGdldE9mZnNldFBhcmVudCBmcm9tIFwiLi4vZG9tLXV0aWxzL2dldE9mZnNldFBhcmVudC5qc1wiO1xuaW1wb3J0IGdldFdpbmRvdyBmcm9tIFwiLi4vZG9tLXV0aWxzL2dldFdpbmRvdy5qc1wiO1xuaW1wb3J0IGdldERvY3VtZW50RWxlbWVudCBmcm9tIFwiLi4vZG9tLXV0aWxzL2dldERvY3VtZW50RWxlbWVudC5qc1wiO1xuaW1wb3J0IGdldENvbXB1dGVkU3R5bGUgZnJvbSBcIi4uL2RvbS11dGlscy9nZXRDb21wdXRlZFN0eWxlLmpzXCI7XG5pbXBvcnQgZ2V0QmFzZVBsYWNlbWVudCBmcm9tIFwiLi4vdXRpbHMvZ2V0QmFzZVBsYWNlbWVudC5qc1wiO1xuaW1wb3J0IGdldFZhcmlhdGlvbiBmcm9tIFwiLi4vdXRpbHMvZ2V0VmFyaWF0aW9uLmpzXCI7XG5pbXBvcnQgeyByb3VuZCB9IGZyb20gXCIuLi91dGlscy9tYXRoLmpzXCI7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxudmFyIHVuc2V0U2lkZXMgPSB7XG4gIHRvcDogJ2F1dG8nLFxuICByaWdodDogJ2F1dG8nLFxuICBib3R0b206ICdhdXRvJyxcbiAgbGVmdDogJ2F1dG8nXG59OyAvLyBSb3VuZCB0aGUgb2Zmc2V0cyB0byB0aGUgbmVhcmVzdCBzdWl0YWJsZSBzdWJwaXhlbCBiYXNlZCBvbiB0aGUgRFBSLlxuLy8gWm9vbWluZyBjYW4gY2hhbmdlIHRoZSBEUFIsIGJ1dCBpdCBzZWVtcyB0byByZXBvcnQgYSB2YWx1ZSB0aGF0IHdpbGxcbi8vIGNsZWFubHkgZGl2aWRlIHRoZSB2YWx1ZXMgaW50byB0aGUgYXBwcm9wcmlhdGUgc3VicGl4ZWxzLlxuXG5mdW5jdGlvbiByb3VuZE9mZnNldHNCeURQUihfcmVmKSB7XG4gIHZhciB4ID0gX3JlZi54LFxuICAgICAgeSA9IF9yZWYueTtcbiAgdmFyIHdpbiA9IHdpbmRvdztcbiAgdmFyIGRwciA9IHdpbi5kZXZpY2VQaXhlbFJhdGlvIHx8IDE7XG4gIHJldHVybiB7XG4gICAgeDogcm91bmQoeCAqIGRwcikgLyBkcHIgfHwgMCxcbiAgICB5OiByb3VuZCh5ICogZHByKSAvIGRwciB8fCAwXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtYXBUb1N0eWxlcyhfcmVmMikge1xuICB2YXIgX09iamVjdCRhc3NpZ24yO1xuXG4gIHZhciBwb3BwZXIgPSBfcmVmMi5wb3BwZXIsXG4gICAgICBwb3BwZXJSZWN0ID0gX3JlZjIucG9wcGVyUmVjdCxcbiAgICAgIHBsYWNlbWVudCA9IF9yZWYyLnBsYWNlbWVudCxcbiAgICAgIHZhcmlhdGlvbiA9IF9yZWYyLnZhcmlhdGlvbixcbiAgICAgIG9mZnNldHMgPSBfcmVmMi5vZmZzZXRzLFxuICAgICAgcG9zaXRpb24gPSBfcmVmMi5wb3NpdGlvbixcbiAgICAgIGdwdUFjY2VsZXJhdGlvbiA9IF9yZWYyLmdwdUFjY2VsZXJhdGlvbixcbiAgICAgIGFkYXB0aXZlID0gX3JlZjIuYWRhcHRpdmUsXG4gICAgICByb3VuZE9mZnNldHMgPSBfcmVmMi5yb3VuZE9mZnNldHMsXG4gICAgICBpc0ZpeGVkID0gX3JlZjIuaXNGaXhlZDtcbiAgdmFyIF9vZmZzZXRzJHggPSBvZmZzZXRzLngsXG4gICAgICB4ID0gX29mZnNldHMkeCA9PT0gdm9pZCAwID8gMCA6IF9vZmZzZXRzJHgsXG4gICAgICBfb2Zmc2V0cyR5ID0gb2Zmc2V0cy55LFxuICAgICAgeSA9IF9vZmZzZXRzJHkgPT09IHZvaWQgMCA/IDAgOiBfb2Zmc2V0cyR5O1xuXG4gIHZhciBfcmVmMyA9IHR5cGVvZiByb3VuZE9mZnNldHMgPT09ICdmdW5jdGlvbicgPyByb3VuZE9mZnNldHMoe1xuICAgIHg6IHgsXG4gICAgeTogeVxuICB9KSA6IHtcbiAgICB4OiB4LFxuICAgIHk6IHlcbiAgfTtcblxuICB4ID0gX3JlZjMueDtcbiAgeSA9IF9yZWYzLnk7XG4gIHZhciBoYXNYID0gb2Zmc2V0cy5oYXNPd25Qcm9wZXJ0eSgneCcpO1xuICB2YXIgaGFzWSA9IG9mZnNldHMuaGFzT3duUHJvcGVydHkoJ3knKTtcbiAgdmFyIHNpZGVYID0gbGVmdDtcbiAgdmFyIHNpZGVZID0gdG9wO1xuICB2YXIgd2luID0gd2luZG93O1xuXG4gIGlmIChhZGFwdGl2ZSkge1xuICAgIHZhciBvZmZzZXRQYXJlbnQgPSBnZXRPZmZzZXRQYXJlbnQocG9wcGVyKTtcbiAgICB2YXIgaGVpZ2h0UHJvcCA9ICdjbGllbnRIZWlnaHQnO1xuICAgIHZhciB3aWR0aFByb3AgPSAnY2xpZW50V2lkdGgnO1xuXG4gICAgaWYgKG9mZnNldFBhcmVudCA9PT0gZ2V0V2luZG93KHBvcHBlcikpIHtcbiAgICAgIG9mZnNldFBhcmVudCA9IGdldERvY3VtZW50RWxlbWVudChwb3BwZXIpO1xuXG4gICAgICBpZiAoZ2V0Q29tcHV0ZWRTdHlsZShvZmZzZXRQYXJlbnQpLnBvc2l0aW9uICE9PSAnc3RhdGljJyAmJiBwb3NpdGlvbiA9PT0gJ2Fic29sdXRlJykge1xuICAgICAgICBoZWlnaHRQcm9wID0gJ3Njcm9sbEhlaWdodCc7XG4gICAgICAgIHdpZHRoUHJvcCA9ICdzY3JvbGxXaWR0aCc7XG4gICAgICB9XG4gICAgfSAvLyAkRmxvd0ZpeE1lW2luY29tcGF0aWJsZS1jYXN0XTogZm9yY2UgdHlwZSByZWZpbmVtZW50LCB3ZSBjb21wYXJlIG9mZnNldFBhcmVudCB3aXRoIHdpbmRvdyBhYm92ZSwgYnV0IEZsb3cgZG9lc24ndCBkZXRlY3QgaXRcblxuXG4gICAgb2Zmc2V0UGFyZW50ID0gb2Zmc2V0UGFyZW50O1xuXG4gICAgaWYgKHBsYWNlbWVudCA9PT0gdG9wIHx8IChwbGFjZW1lbnQgPT09IGxlZnQgfHwgcGxhY2VtZW50ID09PSByaWdodCkgJiYgdmFyaWF0aW9uID09PSBlbmQpIHtcbiAgICAgIHNpZGVZID0gYm90dG9tO1xuICAgICAgdmFyIG9mZnNldFkgPSBpc0ZpeGVkICYmIG9mZnNldFBhcmVudCA9PT0gd2luICYmIHdpbi52aXN1YWxWaWV3cG9ydCA/IHdpbi52aXN1YWxWaWV3cG9ydC5oZWlnaHQgOiAvLyAkRmxvd0ZpeE1lW3Byb3AtbWlzc2luZ11cbiAgICAgIG9mZnNldFBhcmVudFtoZWlnaHRQcm9wXTtcbiAgICAgIHkgLT0gb2Zmc2V0WSAtIHBvcHBlclJlY3QuaGVpZ2h0O1xuICAgICAgeSAqPSBncHVBY2NlbGVyYXRpb24gPyAxIDogLTE7XG4gICAgfVxuXG4gICAgaWYgKHBsYWNlbWVudCA9PT0gbGVmdCB8fCAocGxhY2VtZW50ID09PSB0b3AgfHwgcGxhY2VtZW50ID09PSBib3R0b20pICYmIHZhcmlhdGlvbiA9PT0gZW5kKSB7XG4gICAgICBzaWRlWCA9IHJpZ2h0O1xuICAgICAgdmFyIG9mZnNldFggPSBpc0ZpeGVkICYmIG9mZnNldFBhcmVudCA9PT0gd2luICYmIHdpbi52aXN1YWxWaWV3cG9ydCA/IHdpbi52aXN1YWxWaWV3cG9ydC53aWR0aCA6IC8vICRGbG93Rml4TWVbcHJvcC1taXNzaW5nXVxuICAgICAgb2Zmc2V0UGFyZW50W3dpZHRoUHJvcF07XG4gICAgICB4IC09IG9mZnNldFggLSBwb3BwZXJSZWN0LndpZHRoO1xuICAgICAgeCAqPSBncHVBY2NlbGVyYXRpb24gPyAxIDogLTE7XG4gICAgfVxuICB9XG5cbiAgdmFyIGNvbW1vblN0eWxlcyA9IE9iamVjdC5hc3NpZ24oe1xuICAgIHBvc2l0aW9uOiBwb3NpdGlvblxuICB9LCBhZGFwdGl2ZSAmJiB1bnNldFNpZGVzKTtcblxuICB2YXIgX3JlZjQgPSByb3VuZE9mZnNldHMgPT09IHRydWUgPyByb3VuZE9mZnNldHNCeURQUih7XG4gICAgeDogeCxcbiAgICB5OiB5XG4gIH0pIDoge1xuICAgIHg6IHgsXG4gICAgeTogeVxuICB9O1xuXG4gIHggPSBfcmVmNC54O1xuICB5ID0gX3JlZjQueTtcblxuICBpZiAoZ3B1QWNjZWxlcmF0aW9uKSB7XG4gICAgdmFyIF9PYmplY3QkYXNzaWduO1xuXG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIGNvbW1vblN0eWxlcywgKF9PYmplY3QkYXNzaWduID0ge30sIF9PYmplY3QkYXNzaWduW3NpZGVZXSA9IGhhc1kgPyAnMCcgOiAnJywgX09iamVjdCRhc3NpZ25bc2lkZVhdID0gaGFzWCA/ICcwJyA6ICcnLCBfT2JqZWN0JGFzc2lnbi50cmFuc2Zvcm0gPSAod2luLmRldmljZVBpeGVsUmF0aW8gfHwgMSkgPD0gMSA/IFwidHJhbnNsYXRlKFwiICsgeCArIFwicHgsIFwiICsgeSArIFwicHgpXCIgOiBcInRyYW5zbGF0ZTNkKFwiICsgeCArIFwicHgsIFwiICsgeSArIFwicHgsIDApXCIsIF9PYmplY3QkYXNzaWduKSk7XG4gIH1cblxuICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgY29tbW9uU3R5bGVzLCAoX09iamVjdCRhc3NpZ24yID0ge30sIF9PYmplY3QkYXNzaWduMltzaWRlWV0gPSBoYXNZID8geSArIFwicHhcIiA6ICcnLCBfT2JqZWN0JGFzc2lnbjJbc2lkZVhdID0gaGFzWCA/IHggKyBcInB4XCIgOiAnJywgX09iamVjdCRhc3NpZ24yLnRyYW5zZm9ybSA9ICcnLCBfT2JqZWN0JGFzc2lnbjIpKTtcbn1cblxuZnVuY3Rpb24gY29tcHV0ZVN0eWxlcyhfcmVmNSkge1xuICB2YXIgc3RhdGUgPSBfcmVmNS5zdGF0ZSxcbiAgICAgIG9wdGlvbnMgPSBfcmVmNS5vcHRpb25zO1xuICB2YXIgX29wdGlvbnMkZ3B1QWNjZWxlcmF0ID0gb3B0aW9ucy5ncHVBY2NlbGVyYXRpb24sXG4gICAgICBncHVBY2NlbGVyYXRpb24gPSBfb3B0aW9ucyRncHVBY2NlbGVyYXQgPT09IHZvaWQgMCA/IHRydWUgOiBfb3B0aW9ucyRncHVBY2NlbGVyYXQsXG4gICAgICBfb3B0aW9ucyRhZGFwdGl2ZSA9IG9wdGlvbnMuYWRhcHRpdmUsXG4gICAgICBhZGFwdGl2ZSA9IF9vcHRpb25zJGFkYXB0aXZlID09PSB2b2lkIDAgPyB0cnVlIDogX29wdGlvbnMkYWRhcHRpdmUsXG4gICAgICBfb3B0aW9ucyRyb3VuZE9mZnNldHMgPSBvcHRpb25zLnJvdW5kT2Zmc2V0cyxcbiAgICAgIHJvdW5kT2Zmc2V0cyA9IF9vcHRpb25zJHJvdW5kT2Zmc2V0cyA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9vcHRpb25zJHJvdW5kT2Zmc2V0cztcblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgdmFyIHRyYW5zaXRpb25Qcm9wZXJ0eSA9IGdldENvbXB1dGVkU3R5bGUoc3RhdGUuZWxlbWVudHMucG9wcGVyKS50cmFuc2l0aW9uUHJvcGVydHkgfHwgJyc7XG5cbiAgICBpZiAoYWRhcHRpdmUgJiYgWyd0cmFuc2Zvcm0nLCAndG9wJywgJ3JpZ2h0JywgJ2JvdHRvbScsICdsZWZ0J10uc29tZShmdW5jdGlvbiAocHJvcGVydHkpIHtcbiAgICAgIHJldHVybiB0cmFuc2l0aW9uUHJvcGVydHkuaW5kZXhPZihwcm9wZXJ0eSkgPj0gMDtcbiAgICB9KSkge1xuICAgICAgY29uc29sZS53YXJuKFsnUG9wcGVyOiBEZXRlY3RlZCBDU1MgdHJhbnNpdGlvbnMgb24gYXQgbGVhc3Qgb25lIG9mIHRoZSBmb2xsb3dpbmcnLCAnQ1NTIHByb3BlcnRpZXM6IFwidHJhbnNmb3JtXCIsIFwidG9wXCIsIFwicmlnaHRcIiwgXCJib3R0b21cIiwgXCJsZWZ0XCIuJywgJ1xcblxcbicsICdEaXNhYmxlIHRoZSBcImNvbXB1dGVTdHlsZXNcIiBtb2RpZmllclxcJ3MgYGFkYXB0aXZlYCBvcHRpb24gdG8gYWxsb3cnLCAnZm9yIHNtb290aCB0cmFuc2l0aW9ucywgb3IgcmVtb3ZlIHRoZXNlIHByb3BlcnRpZXMgZnJvbSB0aGUgQ1NTJywgJ3RyYW5zaXRpb24gZGVjbGFyYXRpb24gb24gdGhlIHBvcHBlciBlbGVtZW50IGlmIG9ubHkgdHJhbnNpdGlvbmluZycsICdvcGFjaXR5IG9yIGJhY2tncm91bmQtY29sb3IgZm9yIGV4YW1wbGUuJywgJ1xcblxcbicsICdXZSByZWNvbW1lbmQgdXNpbmcgdGhlIHBvcHBlciBlbGVtZW50IGFzIGEgd3JhcHBlciBhcm91bmQgYW4gaW5uZXInLCAnZWxlbWVudCB0aGF0IGNhbiBoYXZlIGFueSBDU1MgcHJvcGVydHkgdHJhbnNpdGlvbmVkIGZvciBhbmltYXRpb25zLiddLmpvaW4oJyAnKSk7XG4gICAgfVxuICB9XG5cbiAgdmFyIGNvbW1vblN0eWxlcyA9IHtcbiAgICBwbGFjZW1lbnQ6IGdldEJhc2VQbGFjZW1lbnQoc3RhdGUucGxhY2VtZW50KSxcbiAgICB2YXJpYXRpb246IGdldFZhcmlhdGlvbihzdGF0ZS5wbGFjZW1lbnQpLFxuICAgIHBvcHBlcjogc3RhdGUuZWxlbWVudHMucG9wcGVyLFxuICAgIHBvcHBlclJlY3Q6IHN0YXRlLnJlY3RzLnBvcHBlcixcbiAgICBncHVBY2NlbGVyYXRpb246IGdwdUFjY2VsZXJhdGlvbixcbiAgICBpc0ZpeGVkOiBzdGF0ZS5vcHRpb25zLnN0cmF0ZWd5ID09PSAnZml4ZWQnXG4gIH07XG5cbiAgaWYgKHN0YXRlLm1vZGlmaWVyc0RhdGEucG9wcGVyT2Zmc2V0cyAhPSBudWxsKSB7XG4gICAgc3RhdGUuc3R5bGVzLnBvcHBlciA9IE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLnN0eWxlcy5wb3BwZXIsIG1hcFRvU3R5bGVzKE9iamVjdC5hc3NpZ24oe30sIGNvbW1vblN0eWxlcywge1xuICAgICAgb2Zmc2V0czogc3RhdGUubW9kaWZpZXJzRGF0YS5wb3BwZXJPZmZzZXRzLFxuICAgICAgcG9zaXRpb246IHN0YXRlLm9wdGlvbnMuc3RyYXRlZ3ksXG4gICAgICBhZGFwdGl2ZTogYWRhcHRpdmUsXG4gICAgICByb3VuZE9mZnNldHM6IHJvdW5kT2Zmc2V0c1xuICAgIH0pKSk7XG4gIH1cblxuICBpZiAoc3RhdGUubW9kaWZpZXJzRGF0YS5hcnJvdyAhPSBudWxsKSB7XG4gICAgc3RhdGUuc3R5bGVzLmFycm93ID0gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUuc3R5bGVzLmFycm93LCBtYXBUb1N0eWxlcyhPYmplY3QuYXNzaWduKHt9LCBjb21tb25TdHlsZXMsIHtcbiAgICAgIG9mZnNldHM6IHN0YXRlLm1vZGlmaWVyc0RhdGEuYXJyb3csXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIGFkYXB0aXZlOiBmYWxzZSxcbiAgICAgIHJvdW5kT2Zmc2V0czogcm91bmRPZmZzZXRzXG4gICAgfSkpKTtcbiAgfVxuXG4gIHN0YXRlLmF0dHJpYnV0ZXMucG9wcGVyID0gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUuYXR0cmlidXRlcy5wb3BwZXIsIHtcbiAgICAnZGF0YS1wb3BwZXItcGxhY2VtZW50Jzogc3RhdGUucGxhY2VtZW50XG4gIH0pO1xufSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnY29tcHV0ZVN0eWxlcycsXG4gIGVuYWJsZWQ6IHRydWUsXG4gIHBoYXNlOiAnYmVmb3JlV3JpdGUnLFxuICBmbjogY29tcHV0ZVN0eWxlcyxcbiAgZGF0YToge31cbn07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VmFyaWF0aW9uKHBsYWNlbWVudCkge1xuICByZXR1cm4gcGxhY2VtZW50LnNwbGl0KCctJylbMV07XG59IiwiaW1wb3J0IGdldFdpbmRvdyBmcm9tIFwiLi4vZG9tLXV0aWxzL2dldFdpbmRvdy5qc1wiOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cbnZhciBwYXNzaXZlID0ge1xuICBwYXNzaXZlOiB0cnVlXG59O1xuXG5mdW5jdGlvbiBlZmZlY3QoX3JlZikge1xuICB2YXIgc3RhdGUgPSBfcmVmLnN0YXRlLFxuICAgICAgaW5zdGFuY2UgPSBfcmVmLmluc3RhbmNlLFxuICAgICAgb3B0aW9ucyA9IF9yZWYub3B0aW9ucztcbiAgdmFyIF9vcHRpb25zJHNjcm9sbCA9IG9wdGlvbnMuc2Nyb2xsLFxuICAgICAgc2Nyb2xsID0gX29wdGlvbnMkc2Nyb2xsID09PSB2b2lkIDAgPyB0cnVlIDogX29wdGlvbnMkc2Nyb2xsLFxuICAgICAgX29wdGlvbnMkcmVzaXplID0gb3B0aW9ucy5yZXNpemUsXG4gICAgICByZXNpemUgPSBfb3B0aW9ucyRyZXNpemUgPT09IHZvaWQgMCA/IHRydWUgOiBfb3B0aW9ucyRyZXNpemU7XG4gIHZhciB3aW5kb3cgPSBnZXRXaW5kb3coc3RhdGUuZWxlbWVudHMucG9wcGVyKTtcbiAgdmFyIHNjcm9sbFBhcmVudHMgPSBbXS5jb25jYXQoc3RhdGUuc2Nyb2xsUGFyZW50cy5yZWZlcmVuY2UsIHN0YXRlLnNjcm9sbFBhcmVudHMucG9wcGVyKTtcblxuICBpZiAoc2Nyb2xsKSB7XG4gICAgc2Nyb2xsUGFyZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChzY3JvbGxQYXJlbnQpIHtcbiAgICAgIHNjcm9sbFBhcmVudC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBpbnN0YW5jZS51cGRhdGUsIHBhc3NpdmUpO1xuICAgIH0pO1xuICB9XG5cbiAgaWYgKHJlc2l6ZSkge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBpbnN0YW5jZS51cGRhdGUsIHBhc3NpdmUpO1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoc2Nyb2xsKSB7XG4gICAgICBzY3JvbGxQYXJlbnRzLmZvckVhY2goZnVuY3Rpb24gKHNjcm9sbFBhcmVudCkge1xuICAgICAgICBzY3JvbGxQYXJlbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaW5zdGFuY2UudXBkYXRlLCBwYXNzaXZlKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChyZXNpemUpIHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCBpbnN0YW5jZS51cGRhdGUsIHBhc3NpdmUpO1xuICAgIH1cbiAgfTtcbn0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ2V2ZW50TGlzdGVuZXJzJyxcbiAgZW5hYmxlZDogdHJ1ZSxcbiAgcGhhc2U6ICd3cml0ZScsXG4gIGZuOiBmdW5jdGlvbiBmbigpIHt9LFxuICBlZmZlY3Q6IGVmZmVjdCxcbiAgZGF0YToge31cbn07IiwiaW1wb3J0IGdldE9wcG9zaXRlUGxhY2VtZW50IGZyb20gXCIuLi91dGlscy9nZXRPcHBvc2l0ZVBsYWNlbWVudC5qc1wiO1xuaW1wb3J0IGdldEJhc2VQbGFjZW1lbnQgZnJvbSBcIi4uL3V0aWxzL2dldEJhc2VQbGFjZW1lbnQuanNcIjtcbmltcG9ydCBnZXRPcHBvc2l0ZVZhcmlhdGlvblBsYWNlbWVudCBmcm9tIFwiLi4vdXRpbHMvZ2V0T3Bwb3NpdGVWYXJpYXRpb25QbGFjZW1lbnQuanNcIjtcbmltcG9ydCBkZXRlY3RPdmVyZmxvdyBmcm9tIFwiLi4vdXRpbHMvZGV0ZWN0T3ZlcmZsb3cuanNcIjtcbmltcG9ydCBjb21wdXRlQXV0b1BsYWNlbWVudCBmcm9tIFwiLi4vdXRpbHMvY29tcHV0ZUF1dG9QbGFjZW1lbnQuanNcIjtcbmltcG9ydCB7IGJvdHRvbSwgdG9wLCBzdGFydCwgcmlnaHQsIGxlZnQsIGF1dG8gfSBmcm9tIFwiLi4vZW51bXMuanNcIjtcbmltcG9ydCBnZXRWYXJpYXRpb24gZnJvbSBcIi4uL3V0aWxzL2dldFZhcmlhdGlvbi5qc1wiOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cbmZ1bmN0aW9uIGdldEV4cGFuZGVkRmFsbGJhY2tQbGFjZW1lbnRzKHBsYWNlbWVudCkge1xuICBpZiAoZ2V0QmFzZVBsYWNlbWVudChwbGFjZW1lbnQpID09PSBhdXRvKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgdmFyIG9wcG9zaXRlUGxhY2VtZW50ID0gZ2V0T3Bwb3NpdGVQbGFjZW1lbnQocGxhY2VtZW50KTtcbiAgcmV0dXJuIFtnZXRPcHBvc2l0ZVZhcmlhdGlvblBsYWNlbWVudChwbGFjZW1lbnQpLCBvcHBvc2l0ZVBsYWNlbWVudCwgZ2V0T3Bwb3NpdGVWYXJpYXRpb25QbGFjZW1lbnQob3Bwb3NpdGVQbGFjZW1lbnQpXTtcbn1cblxuZnVuY3Rpb24gZmxpcChfcmVmKSB7XG4gIHZhciBzdGF0ZSA9IF9yZWYuc3RhdGUsXG4gICAgICBvcHRpb25zID0gX3JlZi5vcHRpb25zLFxuICAgICAgbmFtZSA9IF9yZWYubmFtZTtcblxuICBpZiAoc3RhdGUubW9kaWZpZXJzRGF0YVtuYW1lXS5fc2tpcCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciBfb3B0aW9ucyRtYWluQXhpcyA9IG9wdGlvbnMubWFpbkF4aXMsXG4gICAgICBjaGVja01haW5BeGlzID0gX29wdGlvbnMkbWFpbkF4aXMgPT09IHZvaWQgMCA/IHRydWUgOiBfb3B0aW9ucyRtYWluQXhpcyxcbiAgICAgIF9vcHRpb25zJGFsdEF4aXMgPSBvcHRpb25zLmFsdEF4aXMsXG4gICAgICBjaGVja0FsdEF4aXMgPSBfb3B0aW9ucyRhbHRBeGlzID09PSB2b2lkIDAgPyB0cnVlIDogX29wdGlvbnMkYWx0QXhpcyxcbiAgICAgIHNwZWNpZmllZEZhbGxiYWNrUGxhY2VtZW50cyA9IG9wdGlvbnMuZmFsbGJhY2tQbGFjZW1lbnRzLFxuICAgICAgcGFkZGluZyA9IG9wdGlvbnMucGFkZGluZyxcbiAgICAgIGJvdW5kYXJ5ID0gb3B0aW9ucy5ib3VuZGFyeSxcbiAgICAgIHJvb3RCb3VuZGFyeSA9IG9wdGlvbnMucm9vdEJvdW5kYXJ5LFxuICAgICAgYWx0Qm91bmRhcnkgPSBvcHRpb25zLmFsdEJvdW5kYXJ5LFxuICAgICAgX29wdGlvbnMkZmxpcFZhcmlhdGlvID0gb3B0aW9ucy5mbGlwVmFyaWF0aW9ucyxcbiAgICAgIGZsaXBWYXJpYXRpb25zID0gX29wdGlvbnMkZmxpcFZhcmlhdGlvID09PSB2b2lkIDAgPyB0cnVlIDogX29wdGlvbnMkZmxpcFZhcmlhdGlvLFxuICAgICAgYWxsb3dlZEF1dG9QbGFjZW1lbnRzID0gb3B0aW9ucy5hbGxvd2VkQXV0b1BsYWNlbWVudHM7XG4gIHZhciBwcmVmZXJyZWRQbGFjZW1lbnQgPSBzdGF0ZS5vcHRpb25zLnBsYWNlbWVudDtcbiAgdmFyIGJhc2VQbGFjZW1lbnQgPSBnZXRCYXNlUGxhY2VtZW50KHByZWZlcnJlZFBsYWNlbWVudCk7XG4gIHZhciBpc0Jhc2VQbGFjZW1lbnQgPSBiYXNlUGxhY2VtZW50ID09PSBwcmVmZXJyZWRQbGFjZW1lbnQ7XG4gIHZhciBmYWxsYmFja1BsYWNlbWVudHMgPSBzcGVjaWZpZWRGYWxsYmFja1BsYWNlbWVudHMgfHwgKGlzQmFzZVBsYWNlbWVudCB8fCAhZmxpcFZhcmlhdGlvbnMgPyBbZ2V0T3Bwb3NpdGVQbGFjZW1lbnQocHJlZmVycmVkUGxhY2VtZW50KV0gOiBnZXRFeHBhbmRlZEZhbGxiYWNrUGxhY2VtZW50cyhwcmVmZXJyZWRQbGFjZW1lbnQpKTtcbiAgdmFyIHBsYWNlbWVudHMgPSBbcHJlZmVycmVkUGxhY2VtZW50XS5jb25jYXQoZmFsbGJhY2tQbGFjZW1lbnRzKS5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgcGxhY2VtZW50KSB7XG4gICAgcmV0dXJuIGFjYy5jb25jYXQoZ2V0QmFzZVBsYWNlbWVudChwbGFjZW1lbnQpID09PSBhdXRvID8gY29tcHV0ZUF1dG9QbGFjZW1lbnQoc3RhdGUsIHtcbiAgICAgIHBsYWNlbWVudDogcGxhY2VtZW50LFxuICAgICAgYm91bmRhcnk6IGJvdW5kYXJ5LFxuICAgICAgcm9vdEJvdW5kYXJ5OiByb290Qm91bmRhcnksXG4gICAgICBwYWRkaW5nOiBwYWRkaW5nLFxuICAgICAgZmxpcFZhcmlhdGlvbnM6IGZsaXBWYXJpYXRpb25zLFxuICAgICAgYWxsb3dlZEF1dG9QbGFjZW1lbnRzOiBhbGxvd2VkQXV0b1BsYWNlbWVudHNcbiAgICB9KSA6IHBsYWNlbWVudCk7XG4gIH0sIFtdKTtcbiAgdmFyIHJlZmVyZW5jZVJlY3QgPSBzdGF0ZS5yZWN0cy5yZWZlcmVuY2U7XG4gIHZhciBwb3BwZXJSZWN0ID0gc3RhdGUucmVjdHMucG9wcGVyO1xuICB2YXIgY2hlY2tzTWFwID0gbmV3IE1hcCgpO1xuICB2YXIgbWFrZUZhbGxiYWNrQ2hlY2tzID0gdHJ1ZTtcbiAgdmFyIGZpcnN0Rml0dGluZ1BsYWNlbWVudCA9IHBsYWNlbWVudHNbMF07XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwbGFjZW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHBsYWNlbWVudCA9IHBsYWNlbWVudHNbaV07XG5cbiAgICB2YXIgX2Jhc2VQbGFjZW1lbnQgPSBnZXRCYXNlUGxhY2VtZW50KHBsYWNlbWVudCk7XG5cbiAgICB2YXIgaXNTdGFydFZhcmlhdGlvbiA9IGdldFZhcmlhdGlvbihwbGFjZW1lbnQpID09PSBzdGFydDtcbiAgICB2YXIgaXNWZXJ0aWNhbCA9IFt0b3AsIGJvdHRvbV0uaW5kZXhPZihfYmFzZVBsYWNlbWVudCkgPj0gMDtcbiAgICB2YXIgbGVuID0gaXNWZXJ0aWNhbCA/ICd3aWR0aCcgOiAnaGVpZ2h0JztcbiAgICB2YXIgb3ZlcmZsb3cgPSBkZXRlY3RPdmVyZmxvdyhzdGF0ZSwge1xuICAgICAgcGxhY2VtZW50OiBwbGFjZW1lbnQsXG4gICAgICBib3VuZGFyeTogYm91bmRhcnksXG4gICAgICByb290Qm91bmRhcnk6IHJvb3RCb3VuZGFyeSxcbiAgICAgIGFsdEJvdW5kYXJ5OiBhbHRCb3VuZGFyeSxcbiAgICAgIHBhZGRpbmc6IHBhZGRpbmdcbiAgICB9KTtcbiAgICB2YXIgbWFpblZhcmlhdGlvblNpZGUgPSBpc1ZlcnRpY2FsID8gaXNTdGFydFZhcmlhdGlvbiA/IHJpZ2h0IDogbGVmdCA6IGlzU3RhcnRWYXJpYXRpb24gPyBib3R0b20gOiB0b3A7XG5cbiAgICBpZiAocmVmZXJlbmNlUmVjdFtsZW5dID4gcG9wcGVyUmVjdFtsZW5dKSB7XG4gICAgICBtYWluVmFyaWF0aW9uU2lkZSA9IGdldE9wcG9zaXRlUGxhY2VtZW50KG1haW5WYXJpYXRpb25TaWRlKTtcbiAgICB9XG5cbiAgICB2YXIgYWx0VmFyaWF0aW9uU2lkZSA9IGdldE9wcG9zaXRlUGxhY2VtZW50KG1haW5WYXJpYXRpb25TaWRlKTtcbiAgICB2YXIgY2hlY2tzID0gW107XG5cbiAgICBpZiAoY2hlY2tNYWluQXhpcykge1xuICAgICAgY2hlY2tzLnB1c2gob3ZlcmZsb3dbX2Jhc2VQbGFjZW1lbnRdIDw9IDApO1xuICAgIH1cblxuICAgIGlmIChjaGVja0FsdEF4aXMpIHtcbiAgICAgIGNoZWNrcy5wdXNoKG92ZXJmbG93W21haW5WYXJpYXRpb25TaWRlXSA8PSAwLCBvdmVyZmxvd1thbHRWYXJpYXRpb25TaWRlXSA8PSAwKTtcbiAgICB9XG5cbiAgICBpZiAoY2hlY2tzLmV2ZXJ5KGZ1bmN0aW9uIChjaGVjaykge1xuICAgICAgcmV0dXJuIGNoZWNrO1xuICAgIH0pKSB7XG4gICAgICBmaXJzdEZpdHRpbmdQbGFjZW1lbnQgPSBwbGFjZW1lbnQ7XG4gICAgICBtYWtlRmFsbGJhY2tDaGVja3MgPSBmYWxzZTtcbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGNoZWNrc01hcC5zZXQocGxhY2VtZW50LCBjaGVja3MpO1xuICB9XG5cbiAgaWYgKG1ha2VGYWxsYmFja0NoZWNrcykge1xuICAgIC8vIGAyYCBtYXkgYmUgZGVzaXJlZCBpbiBzb21lIGNhc2VzIOKAkyByZXNlYXJjaCBsYXRlclxuICAgIHZhciBudW1iZXJPZkNoZWNrcyA9IGZsaXBWYXJpYXRpb25zID8gMyA6IDE7XG5cbiAgICB2YXIgX2xvb3AgPSBmdW5jdGlvbiBfbG9vcChfaSkge1xuICAgICAgdmFyIGZpdHRpbmdQbGFjZW1lbnQgPSBwbGFjZW1lbnRzLmZpbmQoZnVuY3Rpb24gKHBsYWNlbWVudCkge1xuICAgICAgICB2YXIgY2hlY2tzID0gY2hlY2tzTWFwLmdldChwbGFjZW1lbnQpO1xuXG4gICAgICAgIGlmIChjaGVja3MpIHtcbiAgICAgICAgICByZXR1cm4gY2hlY2tzLnNsaWNlKDAsIF9pKS5ldmVyeShmdW5jdGlvbiAoY2hlY2spIHtcbiAgICAgICAgICAgIHJldHVybiBjaGVjaztcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGlmIChmaXR0aW5nUGxhY2VtZW50KSB7XG4gICAgICAgIGZpcnN0Rml0dGluZ1BsYWNlbWVudCA9IGZpdHRpbmdQbGFjZW1lbnQ7XG4gICAgICAgIHJldHVybiBcImJyZWFrXCI7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGZvciAodmFyIF9pID0gbnVtYmVyT2ZDaGVja3M7IF9pID4gMDsgX2ktLSkge1xuICAgICAgdmFyIF9yZXQgPSBfbG9vcChfaSk7XG5cbiAgICAgIGlmIChfcmV0ID09PSBcImJyZWFrXCIpIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIGlmIChzdGF0ZS5wbGFjZW1lbnQgIT09IGZpcnN0Rml0dGluZ1BsYWNlbWVudCkge1xuICAgIHN0YXRlLm1vZGlmaWVyc0RhdGFbbmFtZV0uX3NraXAgPSB0cnVlO1xuICAgIHN0YXRlLnBsYWNlbWVudCA9IGZpcnN0Rml0dGluZ1BsYWNlbWVudDtcbiAgICBzdGF0ZS5yZXNldCA9IHRydWU7XG4gIH1cbn0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ2ZsaXAnLFxuICBlbmFibGVkOiB0cnVlLFxuICBwaGFzZTogJ21haW4nLFxuICBmbjogZmxpcCxcbiAgcmVxdWlyZXNJZkV4aXN0czogWydvZmZzZXQnXSxcbiAgZGF0YToge1xuICAgIF9za2lwOiBmYWxzZVxuICB9XG59OyIsInZhciBoYXNoID0ge1xuICBsZWZ0OiAncmlnaHQnLFxuICByaWdodDogJ2xlZnQnLFxuICBib3R0b206ICd0b3AnLFxuICB0b3A6ICdib3R0b20nXG59O1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0T3Bwb3NpdGVQbGFjZW1lbnQocGxhY2VtZW50KSB7XG4gIHJldHVybiBwbGFjZW1lbnQucmVwbGFjZSgvbGVmdHxyaWdodHxib3R0b218dG9wL2csIGZ1bmN0aW9uIChtYXRjaGVkKSB7XG4gICAgcmV0dXJuIGhhc2hbbWF0Y2hlZF07XG4gIH0pO1xufSIsInZhciBoYXNoID0ge1xuICBzdGFydDogJ2VuZCcsXG4gIGVuZDogJ3N0YXJ0J1xufTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldE9wcG9zaXRlVmFyaWF0aW9uUGxhY2VtZW50KHBsYWNlbWVudCkge1xuICByZXR1cm4gcGxhY2VtZW50LnJlcGxhY2UoL3N0YXJ0fGVuZC9nLCBmdW5jdGlvbiAobWF0Y2hlZCkge1xuICAgIHJldHVybiBoYXNoW21hdGNoZWRdO1xuICB9KTtcbn0iLCJpbXBvcnQgZ2V0Q2xpcHBpbmdSZWN0IGZyb20gXCIuLi9kb20tdXRpbHMvZ2V0Q2xpcHBpbmdSZWN0LmpzXCI7XG5pbXBvcnQgZ2V0RG9jdW1lbnRFbGVtZW50IGZyb20gXCIuLi9kb20tdXRpbHMvZ2V0RG9jdW1lbnRFbGVtZW50LmpzXCI7XG5pbXBvcnQgZ2V0Qm91bmRpbmdDbGllbnRSZWN0IGZyb20gXCIuLi9kb20tdXRpbHMvZ2V0Qm91bmRpbmdDbGllbnRSZWN0LmpzXCI7XG5pbXBvcnQgY29tcHV0ZU9mZnNldHMgZnJvbSBcIi4vY29tcHV0ZU9mZnNldHMuanNcIjtcbmltcG9ydCByZWN0VG9DbGllbnRSZWN0IGZyb20gXCIuL3JlY3RUb0NsaWVudFJlY3QuanNcIjtcbmltcG9ydCB7IGNsaXBwaW5nUGFyZW50cywgcmVmZXJlbmNlLCBwb3BwZXIsIGJvdHRvbSwgdG9wLCByaWdodCwgYmFzZVBsYWNlbWVudHMsIHZpZXdwb3J0IH0gZnJvbSBcIi4uL2VudW1zLmpzXCI7XG5pbXBvcnQgeyBpc0VsZW1lbnQgfSBmcm9tIFwiLi4vZG9tLXV0aWxzL2luc3RhbmNlT2YuanNcIjtcbmltcG9ydCBtZXJnZVBhZGRpbmdPYmplY3QgZnJvbSBcIi4vbWVyZ2VQYWRkaW5nT2JqZWN0LmpzXCI7XG5pbXBvcnQgZXhwYW5kVG9IYXNoTWFwIGZyb20gXCIuL2V4cGFuZFRvSGFzaE1hcC5qc1wiOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRldGVjdE92ZXJmbG93KHN0YXRlLCBvcHRpb25zKSB7XG4gIGlmIChvcHRpb25zID09PSB2b2lkIDApIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICB2YXIgX29wdGlvbnMgPSBvcHRpb25zLFxuICAgICAgX29wdGlvbnMkcGxhY2VtZW50ID0gX29wdGlvbnMucGxhY2VtZW50LFxuICAgICAgcGxhY2VtZW50ID0gX29wdGlvbnMkcGxhY2VtZW50ID09PSB2b2lkIDAgPyBzdGF0ZS5wbGFjZW1lbnQgOiBfb3B0aW9ucyRwbGFjZW1lbnQsXG4gICAgICBfb3B0aW9ucyRib3VuZGFyeSA9IF9vcHRpb25zLmJvdW5kYXJ5LFxuICAgICAgYm91bmRhcnkgPSBfb3B0aW9ucyRib3VuZGFyeSA9PT0gdm9pZCAwID8gY2xpcHBpbmdQYXJlbnRzIDogX29wdGlvbnMkYm91bmRhcnksXG4gICAgICBfb3B0aW9ucyRyb290Qm91bmRhcnkgPSBfb3B0aW9ucy5yb290Qm91bmRhcnksXG4gICAgICByb290Qm91bmRhcnkgPSBfb3B0aW9ucyRyb290Qm91bmRhcnkgPT09IHZvaWQgMCA/IHZpZXdwb3J0IDogX29wdGlvbnMkcm9vdEJvdW5kYXJ5LFxuICAgICAgX29wdGlvbnMkZWxlbWVudENvbnRlID0gX29wdGlvbnMuZWxlbWVudENvbnRleHQsXG4gICAgICBlbGVtZW50Q29udGV4dCA9IF9vcHRpb25zJGVsZW1lbnRDb250ZSA9PT0gdm9pZCAwID8gcG9wcGVyIDogX29wdGlvbnMkZWxlbWVudENvbnRlLFxuICAgICAgX29wdGlvbnMkYWx0Qm91bmRhcnkgPSBfb3B0aW9ucy5hbHRCb3VuZGFyeSxcbiAgICAgIGFsdEJvdW5kYXJ5ID0gX29wdGlvbnMkYWx0Qm91bmRhcnkgPT09IHZvaWQgMCA/IGZhbHNlIDogX29wdGlvbnMkYWx0Qm91bmRhcnksXG4gICAgICBfb3B0aW9ucyRwYWRkaW5nID0gX29wdGlvbnMucGFkZGluZyxcbiAgICAgIHBhZGRpbmcgPSBfb3B0aW9ucyRwYWRkaW5nID09PSB2b2lkIDAgPyAwIDogX29wdGlvbnMkcGFkZGluZztcbiAgdmFyIHBhZGRpbmdPYmplY3QgPSBtZXJnZVBhZGRpbmdPYmplY3QodHlwZW9mIHBhZGRpbmcgIT09ICdudW1iZXInID8gcGFkZGluZyA6IGV4cGFuZFRvSGFzaE1hcChwYWRkaW5nLCBiYXNlUGxhY2VtZW50cykpO1xuICB2YXIgYWx0Q29udGV4dCA9IGVsZW1lbnRDb250ZXh0ID09PSBwb3BwZXIgPyByZWZlcmVuY2UgOiBwb3BwZXI7XG4gIHZhciBwb3BwZXJSZWN0ID0gc3RhdGUucmVjdHMucG9wcGVyO1xuICB2YXIgZWxlbWVudCA9IHN0YXRlLmVsZW1lbnRzW2FsdEJvdW5kYXJ5ID8gYWx0Q29udGV4dCA6IGVsZW1lbnRDb250ZXh0XTtcbiAgdmFyIGNsaXBwaW5nQ2xpZW50UmVjdCA9IGdldENsaXBwaW5nUmVjdChpc0VsZW1lbnQoZWxlbWVudCkgPyBlbGVtZW50IDogZWxlbWVudC5jb250ZXh0RWxlbWVudCB8fCBnZXREb2N1bWVudEVsZW1lbnQoc3RhdGUuZWxlbWVudHMucG9wcGVyKSwgYm91bmRhcnksIHJvb3RCb3VuZGFyeSk7XG4gIHZhciByZWZlcmVuY2VDbGllbnRSZWN0ID0gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KHN0YXRlLmVsZW1lbnRzLnJlZmVyZW5jZSk7XG4gIHZhciBwb3BwZXJPZmZzZXRzID0gY29tcHV0ZU9mZnNldHMoe1xuICAgIHJlZmVyZW5jZTogcmVmZXJlbmNlQ2xpZW50UmVjdCxcbiAgICBlbGVtZW50OiBwb3BwZXJSZWN0LFxuICAgIHN0cmF0ZWd5OiAnYWJzb2x1dGUnLFxuICAgIHBsYWNlbWVudDogcGxhY2VtZW50XG4gIH0pO1xuICB2YXIgcG9wcGVyQ2xpZW50UmVjdCA9IHJlY3RUb0NsaWVudFJlY3QoT2JqZWN0LmFzc2lnbih7fSwgcG9wcGVyUmVjdCwgcG9wcGVyT2Zmc2V0cykpO1xuICB2YXIgZWxlbWVudENsaWVudFJlY3QgPSBlbGVtZW50Q29udGV4dCA9PT0gcG9wcGVyID8gcG9wcGVyQ2xpZW50UmVjdCA6IHJlZmVyZW5jZUNsaWVudFJlY3Q7IC8vIHBvc2l0aXZlID0gb3ZlcmZsb3dpbmcgdGhlIGNsaXBwaW5nIHJlY3RcbiAgLy8gMCBvciBuZWdhdGl2ZSA9IHdpdGhpbiB0aGUgY2xpcHBpbmcgcmVjdFxuXG4gIHZhciBvdmVyZmxvd09mZnNldHMgPSB7XG4gICAgdG9wOiBjbGlwcGluZ0NsaWVudFJlY3QudG9wIC0gZWxlbWVudENsaWVudFJlY3QudG9wICsgcGFkZGluZ09iamVjdC50b3AsXG4gICAgYm90dG9tOiBlbGVtZW50Q2xpZW50UmVjdC5ib3R0b20gLSBjbGlwcGluZ0NsaWVudFJlY3QuYm90dG9tICsgcGFkZGluZ09iamVjdC5ib3R0b20sXG4gICAgbGVmdDogY2xpcHBpbmdDbGllbnRSZWN0LmxlZnQgLSBlbGVtZW50Q2xpZW50UmVjdC5sZWZ0ICsgcGFkZGluZ09iamVjdC5sZWZ0LFxuICAgIHJpZ2h0OiBlbGVtZW50Q2xpZW50UmVjdC5yaWdodCAtIGNsaXBwaW5nQ2xpZW50UmVjdC5yaWdodCArIHBhZGRpbmdPYmplY3QucmlnaHRcbiAgfTtcbiAgdmFyIG9mZnNldERhdGEgPSBzdGF0ZS5tb2RpZmllcnNEYXRhLm9mZnNldDsgLy8gT2Zmc2V0cyBjYW4gYmUgYXBwbGllZCBvbmx5IHRvIHRoZSBwb3BwZXIgZWxlbWVudFxuXG4gIGlmIChlbGVtZW50Q29udGV4dCA9PT0gcG9wcGVyICYmIG9mZnNldERhdGEpIHtcbiAgICB2YXIgb2Zmc2V0ID0gb2Zmc2V0RGF0YVtwbGFjZW1lbnRdO1xuICAgIE9iamVjdC5rZXlzKG92ZXJmbG93T2Zmc2V0cykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICB2YXIgbXVsdGlwbHkgPSBbcmlnaHQsIGJvdHRvbV0uaW5kZXhPZihrZXkpID49IDAgPyAxIDogLTE7XG4gICAgICB2YXIgYXhpcyA9IFt0b3AsIGJvdHRvbV0uaW5kZXhPZihrZXkpID49IDAgPyAneScgOiAneCc7XG4gICAgICBvdmVyZmxvd09mZnNldHNba2V5XSArPSBvZmZzZXRbYXhpc10gKiBtdWx0aXBseTtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBvdmVyZmxvd09mZnNldHM7XG59IiwiaW1wb3J0IHsgdmlld3BvcnQgfSBmcm9tIFwiLi4vZW51bXMuanNcIjtcbmltcG9ydCBnZXRWaWV3cG9ydFJlY3QgZnJvbSBcIi4vZ2V0Vmlld3BvcnRSZWN0LmpzXCI7XG5pbXBvcnQgZ2V0RG9jdW1lbnRSZWN0IGZyb20gXCIuL2dldERvY3VtZW50UmVjdC5qc1wiO1xuaW1wb3J0IGxpc3RTY3JvbGxQYXJlbnRzIGZyb20gXCIuL2xpc3RTY3JvbGxQYXJlbnRzLmpzXCI7XG5pbXBvcnQgZ2V0T2Zmc2V0UGFyZW50IGZyb20gXCIuL2dldE9mZnNldFBhcmVudC5qc1wiO1xuaW1wb3J0IGdldERvY3VtZW50RWxlbWVudCBmcm9tIFwiLi9nZXREb2N1bWVudEVsZW1lbnQuanNcIjtcbmltcG9ydCBnZXRDb21wdXRlZFN0eWxlIGZyb20gXCIuL2dldENvbXB1dGVkU3R5bGUuanNcIjtcbmltcG9ydCB7IGlzRWxlbWVudCwgaXNIVE1MRWxlbWVudCB9IGZyb20gXCIuL2luc3RhbmNlT2YuanNcIjtcbmltcG9ydCBnZXRCb3VuZGluZ0NsaWVudFJlY3QgZnJvbSBcIi4vZ2V0Qm91bmRpbmdDbGllbnRSZWN0LmpzXCI7XG5pbXBvcnQgZ2V0UGFyZW50Tm9kZSBmcm9tIFwiLi9nZXRQYXJlbnROb2RlLmpzXCI7XG5pbXBvcnQgY29udGFpbnMgZnJvbSBcIi4vY29udGFpbnMuanNcIjtcbmltcG9ydCBnZXROb2RlTmFtZSBmcm9tIFwiLi9nZXROb2RlTmFtZS5qc1wiO1xuaW1wb3J0IHJlY3RUb0NsaWVudFJlY3QgZnJvbSBcIi4uL3V0aWxzL3JlY3RUb0NsaWVudFJlY3QuanNcIjtcbmltcG9ydCB7IG1heCwgbWluIH0gZnJvbSBcIi4uL3V0aWxzL21hdGguanNcIjtcblxuZnVuY3Rpb24gZ2V0SW5uZXJCb3VuZGluZ0NsaWVudFJlY3QoZWxlbWVudCkge1xuICB2YXIgcmVjdCA9IGdldEJvdW5kaW5nQ2xpZW50UmVjdChlbGVtZW50KTtcbiAgcmVjdC50b3AgPSByZWN0LnRvcCArIGVsZW1lbnQuY2xpZW50VG9wO1xuICByZWN0LmxlZnQgPSByZWN0LmxlZnQgKyBlbGVtZW50LmNsaWVudExlZnQ7XG4gIHJlY3QuYm90dG9tID0gcmVjdC50b3AgKyBlbGVtZW50LmNsaWVudEhlaWdodDtcbiAgcmVjdC5yaWdodCA9IHJlY3QubGVmdCArIGVsZW1lbnQuY2xpZW50V2lkdGg7XG4gIHJlY3Qud2lkdGggPSBlbGVtZW50LmNsaWVudFdpZHRoO1xuICByZWN0LmhlaWdodCA9IGVsZW1lbnQuY2xpZW50SGVpZ2h0O1xuICByZWN0LnggPSByZWN0LmxlZnQ7XG4gIHJlY3QueSA9IHJlY3QudG9wO1xuICByZXR1cm4gcmVjdDtcbn1cblxuZnVuY3Rpb24gZ2V0Q2xpZW50UmVjdEZyb21NaXhlZFR5cGUoZWxlbWVudCwgY2xpcHBpbmdQYXJlbnQpIHtcbiAgcmV0dXJuIGNsaXBwaW5nUGFyZW50ID09PSB2aWV3cG9ydCA/IHJlY3RUb0NsaWVudFJlY3QoZ2V0Vmlld3BvcnRSZWN0KGVsZW1lbnQpKSA6IGlzRWxlbWVudChjbGlwcGluZ1BhcmVudCkgPyBnZXRJbm5lckJvdW5kaW5nQ2xpZW50UmVjdChjbGlwcGluZ1BhcmVudCkgOiByZWN0VG9DbGllbnRSZWN0KGdldERvY3VtZW50UmVjdChnZXREb2N1bWVudEVsZW1lbnQoZWxlbWVudCkpKTtcbn0gLy8gQSBcImNsaXBwaW5nIHBhcmVudFwiIGlzIGFuIG92ZXJmbG93YWJsZSBjb250YWluZXIgd2l0aCB0aGUgY2hhcmFjdGVyaXN0aWMgb2Zcbi8vIGNsaXBwaW5nIChvciBoaWRpbmcpIG92ZXJmbG93aW5nIGVsZW1lbnRzIHdpdGggYSBwb3NpdGlvbiBkaWZmZXJlbnQgZnJvbVxuLy8gYGluaXRpYWxgXG5cblxuZnVuY3Rpb24gZ2V0Q2xpcHBpbmdQYXJlbnRzKGVsZW1lbnQpIHtcbiAgdmFyIGNsaXBwaW5nUGFyZW50cyA9IGxpc3RTY3JvbGxQYXJlbnRzKGdldFBhcmVudE5vZGUoZWxlbWVudCkpO1xuICB2YXIgY2FuRXNjYXBlQ2xpcHBpbmcgPSBbJ2Fic29sdXRlJywgJ2ZpeGVkJ10uaW5kZXhPZihnZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpLnBvc2l0aW9uKSA+PSAwO1xuICB2YXIgY2xpcHBlckVsZW1lbnQgPSBjYW5Fc2NhcGVDbGlwcGluZyAmJiBpc0hUTUxFbGVtZW50KGVsZW1lbnQpID8gZ2V0T2Zmc2V0UGFyZW50KGVsZW1lbnQpIDogZWxlbWVudDtcblxuICBpZiAoIWlzRWxlbWVudChjbGlwcGVyRWxlbWVudCkpIHtcbiAgICByZXR1cm4gW107XG4gIH0gLy8gJEZsb3dGaXhNZVtpbmNvbXBhdGlibGUtcmV0dXJuXTogaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL2Zsb3cvaXNzdWVzLzE0MTRcblxuXG4gIHJldHVybiBjbGlwcGluZ1BhcmVudHMuZmlsdGVyKGZ1bmN0aW9uIChjbGlwcGluZ1BhcmVudCkge1xuICAgIHJldHVybiBpc0VsZW1lbnQoY2xpcHBpbmdQYXJlbnQpICYmIGNvbnRhaW5zKGNsaXBwaW5nUGFyZW50LCBjbGlwcGVyRWxlbWVudCkgJiYgZ2V0Tm9kZU5hbWUoY2xpcHBpbmdQYXJlbnQpICE9PSAnYm9keSc7XG4gIH0pO1xufSAvLyBHZXRzIHRoZSBtYXhpbXVtIGFyZWEgdGhhdCB0aGUgZWxlbWVudCBpcyB2aXNpYmxlIGluIGR1ZSB0byBhbnkgbnVtYmVyIG9mXG4vLyBjbGlwcGluZyBwYXJlbnRzXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0Q2xpcHBpbmdSZWN0KGVsZW1lbnQsIGJvdW5kYXJ5LCByb290Qm91bmRhcnkpIHtcbiAgdmFyIG1haW5DbGlwcGluZ1BhcmVudHMgPSBib3VuZGFyeSA9PT0gJ2NsaXBwaW5nUGFyZW50cycgPyBnZXRDbGlwcGluZ1BhcmVudHMoZWxlbWVudCkgOiBbXS5jb25jYXQoYm91bmRhcnkpO1xuICB2YXIgY2xpcHBpbmdQYXJlbnRzID0gW10uY29uY2F0KG1haW5DbGlwcGluZ1BhcmVudHMsIFtyb290Qm91bmRhcnldKTtcbiAgdmFyIGZpcnN0Q2xpcHBpbmdQYXJlbnQgPSBjbGlwcGluZ1BhcmVudHNbMF07XG4gIHZhciBjbGlwcGluZ1JlY3QgPSBjbGlwcGluZ1BhcmVudHMucmVkdWNlKGZ1bmN0aW9uIChhY2NSZWN0LCBjbGlwcGluZ1BhcmVudCkge1xuICAgIHZhciByZWN0ID0gZ2V0Q2xpZW50UmVjdEZyb21NaXhlZFR5cGUoZWxlbWVudCwgY2xpcHBpbmdQYXJlbnQpO1xuICAgIGFjY1JlY3QudG9wID0gbWF4KHJlY3QudG9wLCBhY2NSZWN0LnRvcCk7XG4gICAgYWNjUmVjdC5yaWdodCA9IG1pbihyZWN0LnJpZ2h0LCBhY2NSZWN0LnJpZ2h0KTtcbiAgICBhY2NSZWN0LmJvdHRvbSA9IG1pbihyZWN0LmJvdHRvbSwgYWNjUmVjdC5ib3R0b20pO1xuICAgIGFjY1JlY3QubGVmdCA9IG1heChyZWN0LmxlZnQsIGFjY1JlY3QubGVmdCk7XG4gICAgcmV0dXJuIGFjY1JlY3Q7XG4gIH0sIGdldENsaWVudFJlY3RGcm9tTWl4ZWRUeXBlKGVsZW1lbnQsIGZpcnN0Q2xpcHBpbmdQYXJlbnQpKTtcbiAgY2xpcHBpbmdSZWN0LndpZHRoID0gY2xpcHBpbmdSZWN0LnJpZ2h0IC0gY2xpcHBpbmdSZWN0LmxlZnQ7XG4gIGNsaXBwaW5nUmVjdC5oZWlnaHQgPSBjbGlwcGluZ1JlY3QuYm90dG9tIC0gY2xpcHBpbmdSZWN0LnRvcDtcbiAgY2xpcHBpbmdSZWN0LnggPSBjbGlwcGluZ1JlY3QubGVmdDtcbiAgY2xpcHBpbmdSZWN0LnkgPSBjbGlwcGluZ1JlY3QudG9wO1xuICByZXR1cm4gY2xpcHBpbmdSZWN0O1xufSIsImltcG9ydCBnZXRXaW5kb3cgZnJvbSBcIi4vZ2V0V2luZG93LmpzXCI7XG5pbXBvcnQgZ2V0RG9jdW1lbnRFbGVtZW50IGZyb20gXCIuL2dldERvY3VtZW50RWxlbWVudC5qc1wiO1xuaW1wb3J0IGdldFdpbmRvd1Njcm9sbEJhclggZnJvbSBcIi4vZ2V0V2luZG93U2Nyb2xsQmFyWC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0Vmlld3BvcnRSZWN0KGVsZW1lbnQpIHtcbiAgdmFyIHdpbiA9IGdldFdpbmRvdyhlbGVtZW50KTtcbiAgdmFyIGh0bWwgPSBnZXREb2N1bWVudEVsZW1lbnQoZWxlbWVudCk7XG4gIHZhciB2aXN1YWxWaWV3cG9ydCA9IHdpbi52aXN1YWxWaWV3cG9ydDtcbiAgdmFyIHdpZHRoID0gaHRtbC5jbGllbnRXaWR0aDtcbiAgdmFyIGhlaWdodCA9IGh0bWwuY2xpZW50SGVpZ2h0O1xuICB2YXIgeCA9IDA7XG4gIHZhciB5ID0gMDsgLy8gTkI6IFRoaXMgaXNuJ3Qgc3VwcG9ydGVkIG9uIGlPUyA8PSAxMi4gSWYgdGhlIGtleWJvYXJkIGlzIG9wZW4sIHRoZSBwb3BwZXJcbiAgLy8gY2FuIGJlIG9ic2N1cmVkIHVuZGVybmVhdGggaXQuXG4gIC8vIEFsc28sIGBodG1sLmNsaWVudEhlaWdodGAgYWRkcyB0aGUgYm90dG9tIGJhciBoZWlnaHQgaW4gU2FmYXJpIGlPUywgZXZlblxuICAvLyBpZiBpdCBpc24ndCBvcGVuLCBzbyBpZiB0aGlzIGlzbid0IGF2YWlsYWJsZSwgdGhlIHBvcHBlciB3aWxsIGJlIGRldGVjdGVkXG4gIC8vIHRvIG92ZXJmbG93IHRoZSBib3R0b20gb2YgdGhlIHNjcmVlbiB0b28gZWFybHkuXG5cbiAgaWYgKHZpc3VhbFZpZXdwb3J0KSB7XG4gICAgd2lkdGggPSB2aXN1YWxWaWV3cG9ydC53aWR0aDtcbiAgICBoZWlnaHQgPSB2aXN1YWxWaWV3cG9ydC5oZWlnaHQ7IC8vIFVzZXMgTGF5b3V0IFZpZXdwb3J0IChsaWtlIENocm9tZTsgU2FmYXJpIGRvZXMgbm90IGN1cnJlbnRseSlcbiAgICAvLyBJbiBDaHJvbWUsIGl0IHJldHVybnMgYSB2YWx1ZSB2ZXJ5IGNsb3NlIHRvIDAgKCsvLSkgYnV0IGNvbnRhaW5zIHJvdW5kaW5nXG4gICAgLy8gZXJyb3JzIGR1ZSB0byBmbG9hdGluZyBwb2ludCBudW1iZXJzLCBzbyB3ZSBuZWVkIHRvIGNoZWNrIHByZWNpc2lvbi5cbiAgICAvLyBTYWZhcmkgcmV0dXJucyBhIG51bWJlciA8PSAwLCB1c3VhbGx5IDwgLTEgd2hlbiBwaW5jaC16b29tZWRcbiAgICAvLyBGZWF0dXJlIGRldGVjdGlvbiBmYWlscyBpbiBtb2JpbGUgZW11bGF0aW9uIG1vZGUgaW4gQ2hyb21lLlxuICAgIC8vIE1hdGguYWJzKHdpbi5pbm5lcldpZHRoIC8gdmlzdWFsVmlld3BvcnQuc2NhbGUgLSB2aXN1YWxWaWV3cG9ydC53aWR0aCkgPFxuICAgIC8vIDAuMDAxXG4gICAgLy8gRmFsbGJhY2sgaGVyZTogXCJOb3QgU2FmYXJpXCIgdXNlckFnZW50XG5cbiAgICBpZiAoIS9eKCg/IWNocm9tZXxhbmRyb2lkKS4pKnNhZmFyaS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkpIHtcbiAgICAgIHggPSB2aXN1YWxWaWV3cG9ydC5vZmZzZXRMZWZ0O1xuICAgICAgeSA9IHZpc3VhbFZpZXdwb3J0Lm9mZnNldFRvcDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHdpZHRoOiB3aWR0aCxcbiAgICBoZWlnaHQ6IGhlaWdodCxcbiAgICB4OiB4ICsgZ2V0V2luZG93U2Nyb2xsQmFyWChlbGVtZW50KSxcbiAgICB5OiB5XG4gIH07XG59IiwiaW1wb3J0IGdldEJvdW5kaW5nQ2xpZW50UmVjdCBmcm9tIFwiLi9nZXRCb3VuZGluZ0NsaWVudFJlY3QuanNcIjtcbmltcG9ydCBnZXREb2N1bWVudEVsZW1lbnQgZnJvbSBcIi4vZ2V0RG9jdW1lbnRFbGVtZW50LmpzXCI7XG5pbXBvcnQgZ2V0V2luZG93U2Nyb2xsIGZyb20gXCIuL2dldFdpbmRvd1Njcm9sbC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0V2luZG93U2Nyb2xsQmFyWChlbGVtZW50KSB7XG4gIC8vIElmIDxodG1sPiBoYXMgYSBDU1Mgd2lkdGggZ3JlYXRlciB0aGFuIHRoZSB2aWV3cG9ydCwgdGhlbiB0aGlzIHdpbGwgYmVcbiAgLy8gaW5jb3JyZWN0IGZvciBSVEwuXG4gIC8vIFBvcHBlciAxIGlzIGJyb2tlbiBpbiB0aGlzIGNhc2UgYW5kIG5ldmVyIGhhZCBhIGJ1ZyByZXBvcnQgc28gbGV0J3MgYXNzdW1lXG4gIC8vIGl0J3Mgbm90IGFuIGlzc3VlLiBJIGRvbid0IHRoaW5rIGFueW9uZSBldmVyIHNwZWNpZmllcyB3aWR0aCBvbiA8aHRtbD5cbiAgLy8gYW55d2F5LlxuICAvLyBCcm93c2VycyB3aGVyZSB0aGUgbGVmdCBzY3JvbGxiYXIgZG9lc24ndCBjYXVzZSBhbiBpc3N1ZSByZXBvcnQgYDBgIGZvclxuICAvLyB0aGlzIChlLmcuIEVkZ2UgMjAxOSwgSUUxMSwgU2FmYXJpKVxuICByZXR1cm4gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KGdldERvY3VtZW50RWxlbWVudChlbGVtZW50KSkubGVmdCArIGdldFdpbmRvd1Njcm9sbChlbGVtZW50KS5zY3JvbGxMZWZ0O1xufSIsImltcG9ydCBnZXRXaW5kb3cgZnJvbSBcIi4vZ2V0V2luZG93LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRXaW5kb3dTY3JvbGwobm9kZSkge1xuICB2YXIgd2luID0gZ2V0V2luZG93KG5vZGUpO1xuICB2YXIgc2Nyb2xsTGVmdCA9IHdpbi5wYWdlWE9mZnNldDtcbiAgdmFyIHNjcm9sbFRvcCA9IHdpbi5wYWdlWU9mZnNldDtcbiAgcmV0dXJuIHtcbiAgICBzY3JvbGxMZWZ0OiBzY3JvbGxMZWZ0LFxuICAgIHNjcm9sbFRvcDogc2Nyb2xsVG9wXG4gIH07XG59IiwiaW1wb3J0IGdldERvY3VtZW50RWxlbWVudCBmcm9tIFwiLi9nZXREb2N1bWVudEVsZW1lbnQuanNcIjtcbmltcG9ydCBnZXRDb21wdXRlZFN0eWxlIGZyb20gXCIuL2dldENvbXB1dGVkU3R5bGUuanNcIjtcbmltcG9ydCBnZXRXaW5kb3dTY3JvbGxCYXJYIGZyb20gXCIuL2dldFdpbmRvd1Njcm9sbEJhclguanNcIjtcbmltcG9ydCBnZXRXaW5kb3dTY3JvbGwgZnJvbSBcIi4vZ2V0V2luZG93U2Nyb2xsLmpzXCI7XG5pbXBvcnQgeyBtYXggfSBmcm9tIFwiLi4vdXRpbHMvbWF0aC5qc1wiOyAvLyBHZXRzIHRoZSBlbnRpcmUgc2l6ZSBvZiB0aGUgc2Nyb2xsYWJsZSBkb2N1bWVudCBhcmVhLCBldmVuIGV4dGVuZGluZyBvdXRzaWRlXG4vLyBvZiB0aGUgYDxodG1sPmAgYW5kIGA8Ym9keT5gIHJlY3QgYm91bmRzIGlmIGhvcml6b250YWxseSBzY3JvbGxhYmxlXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldERvY3VtZW50UmVjdChlbGVtZW50KSB7XG4gIHZhciBfZWxlbWVudCRvd25lckRvY3VtZW47XG5cbiAgdmFyIGh0bWwgPSBnZXREb2N1bWVudEVsZW1lbnQoZWxlbWVudCk7XG4gIHZhciB3aW5TY3JvbGwgPSBnZXRXaW5kb3dTY3JvbGwoZWxlbWVudCk7XG4gIHZhciBib2R5ID0gKF9lbGVtZW50JG93bmVyRG9jdW1lbiA9IGVsZW1lbnQub3duZXJEb2N1bWVudCkgPT0gbnVsbCA/IHZvaWQgMCA6IF9lbGVtZW50JG93bmVyRG9jdW1lbi5ib2R5O1xuICB2YXIgd2lkdGggPSBtYXgoaHRtbC5zY3JvbGxXaWR0aCwgaHRtbC5jbGllbnRXaWR0aCwgYm9keSA/IGJvZHkuc2Nyb2xsV2lkdGggOiAwLCBib2R5ID8gYm9keS5jbGllbnRXaWR0aCA6IDApO1xuICB2YXIgaGVpZ2h0ID0gbWF4KGh0bWwuc2Nyb2xsSGVpZ2h0LCBodG1sLmNsaWVudEhlaWdodCwgYm9keSA/IGJvZHkuc2Nyb2xsSGVpZ2h0IDogMCwgYm9keSA/IGJvZHkuY2xpZW50SGVpZ2h0IDogMCk7XG4gIHZhciB4ID0gLXdpblNjcm9sbC5zY3JvbGxMZWZ0ICsgZ2V0V2luZG93U2Nyb2xsQmFyWChlbGVtZW50KTtcbiAgdmFyIHkgPSAtd2luU2Nyb2xsLnNjcm9sbFRvcDtcblxuICBpZiAoZ2V0Q29tcHV0ZWRTdHlsZShib2R5IHx8IGh0bWwpLmRpcmVjdGlvbiA9PT0gJ3J0bCcpIHtcbiAgICB4ICs9IG1heChodG1sLmNsaWVudFdpZHRoLCBib2R5ID8gYm9keS5jbGllbnRXaWR0aCA6IDApIC0gd2lkdGg7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHdpZHRoOiB3aWR0aCxcbiAgICBoZWlnaHQ6IGhlaWdodCxcbiAgICB4OiB4LFxuICAgIHk6IHlcbiAgfTtcbn0iLCJpbXBvcnQgZ2V0U2Nyb2xsUGFyZW50IGZyb20gXCIuL2dldFNjcm9sbFBhcmVudC5qc1wiO1xuaW1wb3J0IGdldFBhcmVudE5vZGUgZnJvbSBcIi4vZ2V0UGFyZW50Tm9kZS5qc1wiO1xuaW1wb3J0IGdldFdpbmRvdyBmcm9tIFwiLi9nZXRXaW5kb3cuanNcIjtcbmltcG9ydCBpc1Njcm9sbFBhcmVudCBmcm9tIFwiLi9pc1Njcm9sbFBhcmVudC5qc1wiO1xuLypcbmdpdmVuIGEgRE9NIGVsZW1lbnQsIHJldHVybiB0aGUgbGlzdCBvZiBhbGwgc2Nyb2xsIHBhcmVudHMsIHVwIHRoZSBsaXN0IG9mIGFuY2Vzb3JzXG51bnRpbCB3ZSBnZXQgdG8gdGhlIHRvcCB3aW5kb3cgb2JqZWN0LiBUaGlzIGxpc3QgaXMgd2hhdCB3ZSBhdHRhY2ggc2Nyb2xsIGxpc3RlbmVyc1xudG8sIGJlY2F1c2UgaWYgYW55IG9mIHRoZXNlIHBhcmVudCBlbGVtZW50cyBzY3JvbGwsIHdlJ2xsIG5lZWQgdG8gcmUtY2FsY3VsYXRlIHRoZVxucmVmZXJlbmNlIGVsZW1lbnQncyBwb3NpdGlvbi5cbiovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxpc3RTY3JvbGxQYXJlbnRzKGVsZW1lbnQsIGxpc3QpIHtcbiAgdmFyIF9lbGVtZW50JG93bmVyRG9jdW1lbjtcblxuICBpZiAobGlzdCA9PT0gdm9pZCAwKSB7XG4gICAgbGlzdCA9IFtdO1xuICB9XG5cbiAgdmFyIHNjcm9sbFBhcmVudCA9IGdldFNjcm9sbFBhcmVudChlbGVtZW50KTtcbiAgdmFyIGlzQm9keSA9IHNjcm9sbFBhcmVudCA9PT0gKChfZWxlbWVudCRvd25lckRvY3VtZW4gPSBlbGVtZW50Lm93bmVyRG9jdW1lbnQpID09IG51bGwgPyB2b2lkIDAgOiBfZWxlbWVudCRvd25lckRvY3VtZW4uYm9keSk7XG4gIHZhciB3aW4gPSBnZXRXaW5kb3coc2Nyb2xsUGFyZW50KTtcbiAgdmFyIHRhcmdldCA9IGlzQm9keSA/IFt3aW5dLmNvbmNhdCh3aW4udmlzdWFsVmlld3BvcnQgfHwgW10sIGlzU2Nyb2xsUGFyZW50KHNjcm9sbFBhcmVudCkgPyBzY3JvbGxQYXJlbnQgOiBbXSkgOiBzY3JvbGxQYXJlbnQ7XG4gIHZhciB1cGRhdGVkTGlzdCA9IGxpc3QuY29uY2F0KHRhcmdldCk7XG4gIHJldHVybiBpc0JvZHkgPyB1cGRhdGVkTGlzdCA6IC8vICRGbG93Rml4TWVbaW5jb21wYXRpYmxlLWNhbGxdOiBpc0JvZHkgdGVsbHMgdXMgdGFyZ2V0IHdpbGwgYmUgYW4gSFRNTEVsZW1lbnQgaGVyZVxuICB1cGRhdGVkTGlzdC5jb25jYXQobGlzdFNjcm9sbFBhcmVudHMoZ2V0UGFyZW50Tm9kZSh0YXJnZXQpKSk7XG59IiwiaW1wb3J0IGdldFBhcmVudE5vZGUgZnJvbSBcIi4vZ2V0UGFyZW50Tm9kZS5qc1wiO1xuaW1wb3J0IGlzU2Nyb2xsUGFyZW50IGZyb20gXCIuL2lzU2Nyb2xsUGFyZW50LmpzXCI7XG5pbXBvcnQgZ2V0Tm9kZU5hbWUgZnJvbSBcIi4vZ2V0Tm9kZU5hbWUuanNcIjtcbmltcG9ydCB7IGlzSFRNTEVsZW1lbnQgfSBmcm9tIFwiLi9pbnN0YW5jZU9mLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRTY3JvbGxQYXJlbnQobm9kZSkge1xuICBpZiAoWydodG1sJywgJ2JvZHknLCAnI2RvY3VtZW50J10uaW5kZXhPZihnZXROb2RlTmFtZShub2RlKSkgPj0gMCkge1xuICAgIC8vICRGbG93Rml4TWVbaW5jb21wYXRpYmxlLXJldHVybl06IGFzc3VtZSBib2R5IGlzIGFsd2F5cyBhdmFpbGFibGVcbiAgICByZXR1cm4gbm9kZS5vd25lckRvY3VtZW50LmJvZHk7XG4gIH1cblxuICBpZiAoaXNIVE1MRWxlbWVudChub2RlKSAmJiBpc1Njcm9sbFBhcmVudChub2RlKSkge1xuICAgIHJldHVybiBub2RlO1xuICB9XG5cbiAgcmV0dXJuIGdldFNjcm9sbFBhcmVudChnZXRQYXJlbnROb2RlKG5vZGUpKTtcbn0iLCJpbXBvcnQgZ2V0Q29tcHV0ZWRTdHlsZSBmcm9tIFwiLi9nZXRDb21wdXRlZFN0eWxlLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1Njcm9sbFBhcmVudChlbGVtZW50KSB7XG4gIC8vIEZpcmVmb3ggd2FudHMgdXMgdG8gY2hlY2sgYC14YCBhbmQgYC15YCB2YXJpYXRpb25zIGFzIHdlbGxcbiAgdmFyIF9nZXRDb21wdXRlZFN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KSxcbiAgICAgIG92ZXJmbG93ID0gX2dldENvbXB1dGVkU3R5bGUub3ZlcmZsb3csXG4gICAgICBvdmVyZmxvd1ggPSBfZ2V0Q29tcHV0ZWRTdHlsZS5vdmVyZmxvd1gsXG4gICAgICBvdmVyZmxvd1kgPSBfZ2V0Q29tcHV0ZWRTdHlsZS5vdmVyZmxvd1k7XG5cbiAgcmV0dXJuIC9hdXRvfHNjcm9sbHxvdmVybGF5fGhpZGRlbi8udGVzdChvdmVyZmxvdyArIG92ZXJmbG93WSArIG92ZXJmbG93WCk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVjdFRvQ2xpZW50UmVjdChyZWN0KSB7XG4gIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCByZWN0LCB7XG4gICAgbGVmdDogcmVjdC54LFxuICAgIHRvcDogcmVjdC55LFxuICAgIHJpZ2h0OiByZWN0LnggKyByZWN0LndpZHRoLFxuICAgIGJvdHRvbTogcmVjdC55ICsgcmVjdC5oZWlnaHRcbiAgfSk7XG59IiwiaW1wb3J0IGdldEJhc2VQbGFjZW1lbnQgZnJvbSBcIi4vZ2V0QmFzZVBsYWNlbWVudC5qc1wiO1xuaW1wb3J0IGdldFZhcmlhdGlvbiBmcm9tIFwiLi9nZXRWYXJpYXRpb24uanNcIjtcbmltcG9ydCBnZXRNYWluQXhpc0Zyb21QbGFjZW1lbnQgZnJvbSBcIi4vZ2V0TWFpbkF4aXNGcm9tUGxhY2VtZW50LmpzXCI7XG5pbXBvcnQgeyB0b3AsIHJpZ2h0LCBib3R0b20sIGxlZnQsIHN0YXJ0LCBlbmQgfSBmcm9tIFwiLi4vZW51bXMuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbXB1dGVPZmZzZXRzKF9yZWYpIHtcbiAgdmFyIHJlZmVyZW5jZSA9IF9yZWYucmVmZXJlbmNlLFxuICAgICAgZWxlbWVudCA9IF9yZWYuZWxlbWVudCxcbiAgICAgIHBsYWNlbWVudCA9IF9yZWYucGxhY2VtZW50O1xuICB2YXIgYmFzZVBsYWNlbWVudCA9IHBsYWNlbWVudCA/IGdldEJhc2VQbGFjZW1lbnQocGxhY2VtZW50KSA6IG51bGw7XG4gIHZhciB2YXJpYXRpb24gPSBwbGFjZW1lbnQgPyBnZXRWYXJpYXRpb24ocGxhY2VtZW50KSA6IG51bGw7XG4gIHZhciBjb21tb25YID0gcmVmZXJlbmNlLnggKyByZWZlcmVuY2Uud2lkdGggLyAyIC0gZWxlbWVudC53aWR0aCAvIDI7XG4gIHZhciBjb21tb25ZID0gcmVmZXJlbmNlLnkgKyByZWZlcmVuY2UuaGVpZ2h0IC8gMiAtIGVsZW1lbnQuaGVpZ2h0IC8gMjtcbiAgdmFyIG9mZnNldHM7XG5cbiAgc3dpdGNoIChiYXNlUGxhY2VtZW50KSB7XG4gICAgY2FzZSB0b3A6XG4gICAgICBvZmZzZXRzID0ge1xuICAgICAgICB4OiBjb21tb25YLFxuICAgICAgICB5OiByZWZlcmVuY2UueSAtIGVsZW1lbnQuaGVpZ2h0XG4gICAgICB9O1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIGJvdHRvbTpcbiAgICAgIG9mZnNldHMgPSB7XG4gICAgICAgIHg6IGNvbW1vblgsXG4gICAgICAgIHk6IHJlZmVyZW5jZS55ICsgcmVmZXJlbmNlLmhlaWdodFxuICAgICAgfTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSByaWdodDpcbiAgICAgIG9mZnNldHMgPSB7XG4gICAgICAgIHg6IHJlZmVyZW5jZS54ICsgcmVmZXJlbmNlLndpZHRoLFxuICAgICAgICB5OiBjb21tb25ZXG4gICAgICB9O1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIGxlZnQ6XG4gICAgICBvZmZzZXRzID0ge1xuICAgICAgICB4OiByZWZlcmVuY2UueCAtIGVsZW1lbnQud2lkdGgsXG4gICAgICAgIHk6IGNvbW1vbllcbiAgICAgIH07XG4gICAgICBicmVhaztcblxuICAgIGRlZmF1bHQ6XG4gICAgICBvZmZzZXRzID0ge1xuICAgICAgICB4OiByZWZlcmVuY2UueCxcbiAgICAgICAgeTogcmVmZXJlbmNlLnlcbiAgICAgIH07XG4gIH1cblxuICB2YXIgbWFpbkF4aXMgPSBiYXNlUGxhY2VtZW50ID8gZ2V0TWFpbkF4aXNGcm9tUGxhY2VtZW50KGJhc2VQbGFjZW1lbnQpIDogbnVsbDtcblxuICBpZiAobWFpbkF4aXMgIT0gbnVsbCkge1xuICAgIHZhciBsZW4gPSBtYWluQXhpcyA9PT0gJ3knID8gJ2hlaWdodCcgOiAnd2lkdGgnO1xuXG4gICAgc3dpdGNoICh2YXJpYXRpb24pIHtcbiAgICAgIGNhc2Ugc3RhcnQ6XG4gICAgICAgIG9mZnNldHNbbWFpbkF4aXNdID0gb2Zmc2V0c1ttYWluQXhpc10gLSAocmVmZXJlbmNlW2xlbl0gLyAyIC0gZWxlbWVudFtsZW5dIC8gMik7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIGVuZDpcbiAgICAgICAgb2Zmc2V0c1ttYWluQXhpc10gPSBvZmZzZXRzW21haW5BeGlzXSArIChyZWZlcmVuY2VbbGVuXSAvIDIgLSBlbGVtZW50W2xlbl0gLyAyKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG9mZnNldHM7XG59IiwiaW1wb3J0IGdldFZhcmlhdGlvbiBmcm9tIFwiLi9nZXRWYXJpYXRpb24uanNcIjtcbmltcG9ydCB7IHZhcmlhdGlvblBsYWNlbWVudHMsIGJhc2VQbGFjZW1lbnRzLCBwbGFjZW1lbnRzIGFzIGFsbFBsYWNlbWVudHMgfSBmcm9tIFwiLi4vZW51bXMuanNcIjtcbmltcG9ydCBkZXRlY3RPdmVyZmxvdyBmcm9tIFwiLi9kZXRlY3RPdmVyZmxvdy5qc1wiO1xuaW1wb3J0IGdldEJhc2VQbGFjZW1lbnQgZnJvbSBcIi4vZ2V0QmFzZVBsYWNlbWVudC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29tcHV0ZUF1dG9QbGFjZW1lbnQoc3RhdGUsIG9wdGlvbnMpIHtcbiAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIHZhciBfb3B0aW9ucyA9IG9wdGlvbnMsXG4gICAgICBwbGFjZW1lbnQgPSBfb3B0aW9ucy5wbGFjZW1lbnQsXG4gICAgICBib3VuZGFyeSA9IF9vcHRpb25zLmJvdW5kYXJ5LFxuICAgICAgcm9vdEJvdW5kYXJ5ID0gX29wdGlvbnMucm9vdEJvdW5kYXJ5LFxuICAgICAgcGFkZGluZyA9IF9vcHRpb25zLnBhZGRpbmcsXG4gICAgICBmbGlwVmFyaWF0aW9ucyA9IF9vcHRpb25zLmZsaXBWYXJpYXRpb25zLFxuICAgICAgX29wdGlvbnMkYWxsb3dlZEF1dG9QID0gX29wdGlvbnMuYWxsb3dlZEF1dG9QbGFjZW1lbnRzLFxuICAgICAgYWxsb3dlZEF1dG9QbGFjZW1lbnRzID0gX29wdGlvbnMkYWxsb3dlZEF1dG9QID09PSB2b2lkIDAgPyBhbGxQbGFjZW1lbnRzIDogX29wdGlvbnMkYWxsb3dlZEF1dG9QO1xuICB2YXIgdmFyaWF0aW9uID0gZ2V0VmFyaWF0aW9uKHBsYWNlbWVudCk7XG4gIHZhciBwbGFjZW1lbnRzID0gdmFyaWF0aW9uID8gZmxpcFZhcmlhdGlvbnMgPyB2YXJpYXRpb25QbGFjZW1lbnRzIDogdmFyaWF0aW9uUGxhY2VtZW50cy5maWx0ZXIoZnVuY3Rpb24gKHBsYWNlbWVudCkge1xuICAgIHJldHVybiBnZXRWYXJpYXRpb24ocGxhY2VtZW50KSA9PT0gdmFyaWF0aW9uO1xuICB9KSA6IGJhc2VQbGFjZW1lbnRzO1xuICB2YXIgYWxsb3dlZFBsYWNlbWVudHMgPSBwbGFjZW1lbnRzLmZpbHRlcihmdW5jdGlvbiAocGxhY2VtZW50KSB7XG4gICAgcmV0dXJuIGFsbG93ZWRBdXRvUGxhY2VtZW50cy5pbmRleE9mKHBsYWNlbWVudCkgPj0gMDtcbiAgfSk7XG5cbiAgaWYgKGFsbG93ZWRQbGFjZW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgIGFsbG93ZWRQbGFjZW1lbnRzID0gcGxhY2VtZW50cztcblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoWydQb3BwZXI6IFRoZSBgYWxsb3dlZEF1dG9QbGFjZW1lbnRzYCBvcHRpb24gZGlkIG5vdCBhbGxvdyBhbnknLCAncGxhY2VtZW50cy4gRW5zdXJlIHRoZSBgcGxhY2VtZW50YCBvcHRpb24gbWF0Y2hlcyB0aGUgdmFyaWF0aW9uJywgJ29mIHRoZSBhbGxvd2VkIHBsYWNlbWVudHMuJywgJ0ZvciBleGFtcGxlLCBcImF1dG9cIiBjYW5ub3QgYmUgdXNlZCB0byBhbGxvdyBcImJvdHRvbS1zdGFydFwiLicsICdVc2UgXCJhdXRvLXN0YXJ0XCIgaW5zdGVhZC4nXS5qb2luKCcgJykpO1xuICAgIH1cbiAgfSAvLyAkRmxvd0ZpeE1lW2luY29tcGF0aWJsZS10eXBlXTogRmxvdyBzZWVtcyB0byBoYXZlIHByb2JsZW1zIHdpdGggdHdvIGFycmF5IHVuaW9ucy4uLlxuXG5cbiAgdmFyIG92ZXJmbG93cyA9IGFsbG93ZWRQbGFjZW1lbnRzLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBwbGFjZW1lbnQpIHtcbiAgICBhY2NbcGxhY2VtZW50XSA9IGRldGVjdE92ZXJmbG93KHN0YXRlLCB7XG4gICAgICBwbGFjZW1lbnQ6IHBsYWNlbWVudCxcbiAgICAgIGJvdW5kYXJ5OiBib3VuZGFyeSxcbiAgICAgIHJvb3RCb3VuZGFyeTogcm9vdEJvdW5kYXJ5LFxuICAgICAgcGFkZGluZzogcGFkZGluZ1xuICAgIH0pW2dldEJhc2VQbGFjZW1lbnQocGxhY2VtZW50KV07XG4gICAgcmV0dXJuIGFjYztcbiAgfSwge30pO1xuICByZXR1cm4gT2JqZWN0LmtleXMob3ZlcmZsb3dzKS5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgcmV0dXJuIG92ZXJmbG93c1thXSAtIG92ZXJmbG93c1tiXTtcbiAgfSk7XG59IiwiaW1wb3J0IHsgdG9wLCBib3R0b20sIGxlZnQsIHJpZ2h0IH0gZnJvbSBcIi4uL2VudW1zLmpzXCI7XG5pbXBvcnQgZGV0ZWN0T3ZlcmZsb3cgZnJvbSBcIi4uL3V0aWxzL2RldGVjdE92ZXJmbG93LmpzXCI7XG5cbmZ1bmN0aW9uIGdldFNpZGVPZmZzZXRzKG92ZXJmbG93LCByZWN0LCBwcmV2ZW50ZWRPZmZzZXRzKSB7XG4gIGlmIChwcmV2ZW50ZWRPZmZzZXRzID09PSB2b2lkIDApIHtcbiAgICBwcmV2ZW50ZWRPZmZzZXRzID0ge1xuICAgICAgeDogMCxcbiAgICAgIHk6IDBcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB0b3A6IG92ZXJmbG93LnRvcCAtIHJlY3QuaGVpZ2h0IC0gcHJldmVudGVkT2Zmc2V0cy55LFxuICAgIHJpZ2h0OiBvdmVyZmxvdy5yaWdodCAtIHJlY3Qud2lkdGggKyBwcmV2ZW50ZWRPZmZzZXRzLngsXG4gICAgYm90dG9tOiBvdmVyZmxvdy5ib3R0b20gLSByZWN0LmhlaWdodCArIHByZXZlbnRlZE9mZnNldHMueSxcbiAgICBsZWZ0OiBvdmVyZmxvdy5sZWZ0IC0gcmVjdC53aWR0aCAtIHByZXZlbnRlZE9mZnNldHMueFxuICB9O1xufVxuXG5mdW5jdGlvbiBpc0FueVNpZGVGdWxseUNsaXBwZWQob3ZlcmZsb3cpIHtcbiAgcmV0dXJuIFt0b3AsIHJpZ2h0LCBib3R0b20sIGxlZnRdLnNvbWUoZnVuY3Rpb24gKHNpZGUpIHtcbiAgICByZXR1cm4gb3ZlcmZsb3dbc2lkZV0gPj0gMDtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGhpZGUoX3JlZikge1xuICB2YXIgc3RhdGUgPSBfcmVmLnN0YXRlLFxuICAgICAgbmFtZSA9IF9yZWYubmFtZTtcbiAgdmFyIHJlZmVyZW5jZVJlY3QgPSBzdGF0ZS5yZWN0cy5yZWZlcmVuY2U7XG4gIHZhciBwb3BwZXJSZWN0ID0gc3RhdGUucmVjdHMucG9wcGVyO1xuICB2YXIgcHJldmVudGVkT2Zmc2V0cyA9IHN0YXRlLm1vZGlmaWVyc0RhdGEucHJldmVudE92ZXJmbG93O1xuICB2YXIgcmVmZXJlbmNlT3ZlcmZsb3cgPSBkZXRlY3RPdmVyZmxvdyhzdGF0ZSwge1xuICAgIGVsZW1lbnRDb250ZXh0OiAncmVmZXJlbmNlJ1xuICB9KTtcbiAgdmFyIHBvcHBlckFsdE92ZXJmbG93ID0gZGV0ZWN0T3ZlcmZsb3coc3RhdGUsIHtcbiAgICBhbHRCb3VuZGFyeTogdHJ1ZVxuICB9KTtcbiAgdmFyIHJlZmVyZW5jZUNsaXBwaW5nT2Zmc2V0cyA9IGdldFNpZGVPZmZzZXRzKHJlZmVyZW5jZU92ZXJmbG93LCByZWZlcmVuY2VSZWN0KTtcbiAgdmFyIHBvcHBlckVzY2FwZU9mZnNldHMgPSBnZXRTaWRlT2Zmc2V0cyhwb3BwZXJBbHRPdmVyZmxvdywgcG9wcGVyUmVjdCwgcHJldmVudGVkT2Zmc2V0cyk7XG4gIHZhciBpc1JlZmVyZW5jZUhpZGRlbiA9IGlzQW55U2lkZUZ1bGx5Q2xpcHBlZChyZWZlcmVuY2VDbGlwcGluZ09mZnNldHMpO1xuICB2YXIgaGFzUG9wcGVyRXNjYXBlZCA9IGlzQW55U2lkZUZ1bGx5Q2xpcHBlZChwb3BwZXJFc2NhcGVPZmZzZXRzKTtcbiAgc3RhdGUubW9kaWZpZXJzRGF0YVtuYW1lXSA9IHtcbiAgICByZWZlcmVuY2VDbGlwcGluZ09mZnNldHM6IHJlZmVyZW5jZUNsaXBwaW5nT2Zmc2V0cyxcbiAgICBwb3BwZXJFc2NhcGVPZmZzZXRzOiBwb3BwZXJFc2NhcGVPZmZzZXRzLFxuICAgIGlzUmVmZXJlbmNlSGlkZGVuOiBpc1JlZmVyZW5jZUhpZGRlbixcbiAgICBoYXNQb3BwZXJFc2NhcGVkOiBoYXNQb3BwZXJFc2NhcGVkXG4gIH07XG4gIHN0YXRlLmF0dHJpYnV0ZXMucG9wcGVyID0gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUuYXR0cmlidXRlcy5wb3BwZXIsIHtcbiAgICAnZGF0YS1wb3BwZXItcmVmZXJlbmNlLWhpZGRlbic6IGlzUmVmZXJlbmNlSGlkZGVuLFxuICAgICdkYXRhLXBvcHBlci1lc2NhcGVkJzogaGFzUG9wcGVyRXNjYXBlZFxuICB9KTtcbn0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ2hpZGUnLFxuICBlbmFibGVkOiB0cnVlLFxuICBwaGFzZTogJ21haW4nLFxuICByZXF1aXJlc0lmRXhpc3RzOiBbJ3ByZXZlbnRPdmVyZmxvdyddLFxuICBmbjogaGlkZVxufTsiLCJpbXBvcnQgZ2V0QmFzZVBsYWNlbWVudCBmcm9tIFwiLi4vdXRpbHMvZ2V0QmFzZVBsYWNlbWVudC5qc1wiO1xuaW1wb3J0IHsgdG9wLCBsZWZ0LCByaWdodCwgcGxhY2VtZW50cyB9IGZyb20gXCIuLi9lbnVtcy5qc1wiOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cbmV4cG9ydCBmdW5jdGlvbiBkaXN0YW5jZUFuZFNraWRkaW5nVG9YWShwbGFjZW1lbnQsIHJlY3RzLCBvZmZzZXQpIHtcbiAgdmFyIGJhc2VQbGFjZW1lbnQgPSBnZXRCYXNlUGxhY2VtZW50KHBsYWNlbWVudCk7XG4gIHZhciBpbnZlcnREaXN0YW5jZSA9IFtsZWZ0LCB0b3BdLmluZGV4T2YoYmFzZVBsYWNlbWVudCkgPj0gMCA/IC0xIDogMTtcblxuICB2YXIgX3JlZiA9IHR5cGVvZiBvZmZzZXQgPT09ICdmdW5jdGlvbicgPyBvZmZzZXQoT2JqZWN0LmFzc2lnbih7fSwgcmVjdHMsIHtcbiAgICBwbGFjZW1lbnQ6IHBsYWNlbWVudFxuICB9KSkgOiBvZmZzZXQsXG4gICAgICBza2lkZGluZyA9IF9yZWZbMF0sXG4gICAgICBkaXN0YW5jZSA9IF9yZWZbMV07XG5cbiAgc2tpZGRpbmcgPSBza2lkZGluZyB8fCAwO1xuICBkaXN0YW5jZSA9IChkaXN0YW5jZSB8fCAwKSAqIGludmVydERpc3RhbmNlO1xuICByZXR1cm4gW2xlZnQsIHJpZ2h0XS5pbmRleE9mKGJhc2VQbGFjZW1lbnQpID49IDAgPyB7XG4gICAgeDogZGlzdGFuY2UsXG4gICAgeTogc2tpZGRpbmdcbiAgfSA6IHtcbiAgICB4OiBza2lkZGluZyxcbiAgICB5OiBkaXN0YW5jZVxuICB9O1xufVxuXG5mdW5jdGlvbiBvZmZzZXQoX3JlZjIpIHtcbiAgdmFyIHN0YXRlID0gX3JlZjIuc3RhdGUsXG4gICAgICBvcHRpb25zID0gX3JlZjIub3B0aW9ucyxcbiAgICAgIG5hbWUgPSBfcmVmMi5uYW1lO1xuICB2YXIgX29wdGlvbnMkb2Zmc2V0ID0gb3B0aW9ucy5vZmZzZXQsXG4gICAgICBvZmZzZXQgPSBfb3B0aW9ucyRvZmZzZXQgPT09IHZvaWQgMCA/IFswLCAwXSA6IF9vcHRpb25zJG9mZnNldDtcbiAgdmFyIGRhdGEgPSBwbGFjZW1lbnRzLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBwbGFjZW1lbnQpIHtcbiAgICBhY2NbcGxhY2VtZW50XSA9IGRpc3RhbmNlQW5kU2tpZGRpbmdUb1hZKHBsYWNlbWVudCwgc3RhdGUucmVjdHMsIG9mZnNldCk7XG4gICAgcmV0dXJuIGFjYztcbiAgfSwge30pO1xuICB2YXIgX2RhdGEkc3RhdGUkcGxhY2VtZW50ID0gZGF0YVtzdGF0ZS5wbGFjZW1lbnRdLFxuICAgICAgeCA9IF9kYXRhJHN0YXRlJHBsYWNlbWVudC54LFxuICAgICAgeSA9IF9kYXRhJHN0YXRlJHBsYWNlbWVudC55O1xuXG4gIGlmIChzdGF0ZS5tb2RpZmllcnNEYXRhLnBvcHBlck9mZnNldHMgIT0gbnVsbCkge1xuICAgIHN0YXRlLm1vZGlmaWVyc0RhdGEucG9wcGVyT2Zmc2V0cy54ICs9IHg7XG4gICAgc3RhdGUubW9kaWZpZXJzRGF0YS5wb3BwZXJPZmZzZXRzLnkgKz0geTtcbiAgfVxuXG4gIHN0YXRlLm1vZGlmaWVyc0RhdGFbbmFtZV0gPSBkYXRhO1xufSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnb2Zmc2V0JyxcbiAgZW5hYmxlZDogdHJ1ZSxcbiAgcGhhc2U6ICdtYWluJyxcbiAgcmVxdWlyZXM6IFsncG9wcGVyT2Zmc2V0cyddLFxuICBmbjogb2Zmc2V0XG59OyIsImltcG9ydCBjb21wdXRlT2Zmc2V0cyBmcm9tIFwiLi4vdXRpbHMvY29tcHV0ZU9mZnNldHMuanNcIjtcblxuZnVuY3Rpb24gcG9wcGVyT2Zmc2V0cyhfcmVmKSB7XG4gIHZhciBzdGF0ZSA9IF9yZWYuc3RhdGUsXG4gICAgICBuYW1lID0gX3JlZi5uYW1lO1xuICAvLyBPZmZzZXRzIGFyZSB0aGUgYWN0dWFsIHBvc2l0aW9uIHRoZSBwb3BwZXIgbmVlZHMgdG8gaGF2ZSB0byBiZVxuICAvLyBwcm9wZXJseSBwb3NpdGlvbmVkIG5lYXIgaXRzIHJlZmVyZW5jZSBlbGVtZW50XG4gIC8vIFRoaXMgaXMgdGhlIG1vc3QgYmFzaWMgcGxhY2VtZW50LCBhbmQgd2lsbCBiZSBhZGp1c3RlZCBieVxuICAvLyB0aGUgbW9kaWZpZXJzIGluIHRoZSBuZXh0IHN0ZXBcbiAgc3RhdGUubW9kaWZpZXJzRGF0YVtuYW1lXSA9IGNvbXB1dGVPZmZzZXRzKHtcbiAgICByZWZlcmVuY2U6IHN0YXRlLnJlY3RzLnJlZmVyZW5jZSxcbiAgICBlbGVtZW50OiBzdGF0ZS5yZWN0cy5wb3BwZXIsXG4gICAgc3RyYXRlZ3k6ICdhYnNvbHV0ZScsXG4gICAgcGxhY2VtZW50OiBzdGF0ZS5wbGFjZW1lbnRcbiAgfSk7XG59IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdwb3BwZXJPZmZzZXRzJyxcbiAgZW5hYmxlZDogdHJ1ZSxcbiAgcGhhc2U6ICdyZWFkJyxcbiAgZm46IHBvcHBlck9mZnNldHMsXG4gIGRhdGE6IHt9XG59OyIsImltcG9ydCB7IHRvcCwgbGVmdCwgcmlnaHQsIGJvdHRvbSwgc3RhcnQgfSBmcm9tIFwiLi4vZW51bXMuanNcIjtcbmltcG9ydCBnZXRCYXNlUGxhY2VtZW50IGZyb20gXCIuLi91dGlscy9nZXRCYXNlUGxhY2VtZW50LmpzXCI7XG5pbXBvcnQgZ2V0TWFpbkF4aXNGcm9tUGxhY2VtZW50IGZyb20gXCIuLi91dGlscy9nZXRNYWluQXhpc0Zyb21QbGFjZW1lbnQuanNcIjtcbmltcG9ydCBnZXRBbHRBeGlzIGZyb20gXCIuLi91dGlscy9nZXRBbHRBeGlzLmpzXCI7XG5pbXBvcnQgeyB3aXRoaW4sIHdpdGhpbk1heENsYW1wIH0gZnJvbSBcIi4uL3V0aWxzL3dpdGhpbi5qc1wiO1xuaW1wb3J0IGdldExheW91dFJlY3QgZnJvbSBcIi4uL2RvbS11dGlscy9nZXRMYXlvdXRSZWN0LmpzXCI7XG5pbXBvcnQgZ2V0T2Zmc2V0UGFyZW50IGZyb20gXCIuLi9kb20tdXRpbHMvZ2V0T2Zmc2V0UGFyZW50LmpzXCI7XG5pbXBvcnQgZGV0ZWN0T3ZlcmZsb3cgZnJvbSBcIi4uL3V0aWxzL2RldGVjdE92ZXJmbG93LmpzXCI7XG5pbXBvcnQgZ2V0VmFyaWF0aW9uIGZyb20gXCIuLi91dGlscy9nZXRWYXJpYXRpb24uanNcIjtcbmltcG9ydCBnZXRGcmVzaFNpZGVPYmplY3QgZnJvbSBcIi4uL3V0aWxzL2dldEZyZXNoU2lkZU9iamVjdC5qc1wiO1xuaW1wb3J0IHsgbWluIGFzIG1hdGhNaW4sIG1heCBhcyBtYXRoTWF4IH0gZnJvbSBcIi4uL3V0aWxzL21hdGguanNcIjtcblxuZnVuY3Rpb24gcHJldmVudE92ZXJmbG93KF9yZWYpIHtcbiAgdmFyIHN0YXRlID0gX3JlZi5zdGF0ZSxcbiAgICAgIG9wdGlvbnMgPSBfcmVmLm9wdGlvbnMsXG4gICAgICBuYW1lID0gX3JlZi5uYW1lO1xuICB2YXIgX29wdGlvbnMkbWFpbkF4aXMgPSBvcHRpb25zLm1haW5BeGlzLFxuICAgICAgY2hlY2tNYWluQXhpcyA9IF9vcHRpb25zJG1haW5BeGlzID09PSB2b2lkIDAgPyB0cnVlIDogX29wdGlvbnMkbWFpbkF4aXMsXG4gICAgICBfb3B0aW9ucyRhbHRBeGlzID0gb3B0aW9ucy5hbHRBeGlzLFxuICAgICAgY2hlY2tBbHRBeGlzID0gX29wdGlvbnMkYWx0QXhpcyA9PT0gdm9pZCAwID8gZmFsc2UgOiBfb3B0aW9ucyRhbHRBeGlzLFxuICAgICAgYm91bmRhcnkgPSBvcHRpb25zLmJvdW5kYXJ5LFxuICAgICAgcm9vdEJvdW5kYXJ5ID0gb3B0aW9ucy5yb290Qm91bmRhcnksXG4gICAgICBhbHRCb3VuZGFyeSA9IG9wdGlvbnMuYWx0Qm91bmRhcnksXG4gICAgICBwYWRkaW5nID0gb3B0aW9ucy5wYWRkaW5nLFxuICAgICAgX29wdGlvbnMkdGV0aGVyID0gb3B0aW9ucy50ZXRoZXIsXG4gICAgICB0ZXRoZXIgPSBfb3B0aW9ucyR0ZXRoZXIgPT09IHZvaWQgMCA/IHRydWUgOiBfb3B0aW9ucyR0ZXRoZXIsXG4gICAgICBfb3B0aW9ucyR0ZXRoZXJPZmZzZXQgPSBvcHRpb25zLnRldGhlck9mZnNldCxcbiAgICAgIHRldGhlck9mZnNldCA9IF9vcHRpb25zJHRldGhlck9mZnNldCA9PT0gdm9pZCAwID8gMCA6IF9vcHRpb25zJHRldGhlck9mZnNldDtcbiAgdmFyIG92ZXJmbG93ID0gZGV0ZWN0T3ZlcmZsb3coc3RhdGUsIHtcbiAgICBib3VuZGFyeTogYm91bmRhcnksXG4gICAgcm9vdEJvdW5kYXJ5OiByb290Qm91bmRhcnksXG4gICAgcGFkZGluZzogcGFkZGluZyxcbiAgICBhbHRCb3VuZGFyeTogYWx0Qm91bmRhcnlcbiAgfSk7XG4gIHZhciBiYXNlUGxhY2VtZW50ID0gZ2V0QmFzZVBsYWNlbWVudChzdGF0ZS5wbGFjZW1lbnQpO1xuICB2YXIgdmFyaWF0aW9uID0gZ2V0VmFyaWF0aW9uKHN0YXRlLnBsYWNlbWVudCk7XG4gIHZhciBpc0Jhc2VQbGFjZW1lbnQgPSAhdmFyaWF0aW9uO1xuICB2YXIgbWFpbkF4aXMgPSBnZXRNYWluQXhpc0Zyb21QbGFjZW1lbnQoYmFzZVBsYWNlbWVudCk7XG4gIHZhciBhbHRBeGlzID0gZ2V0QWx0QXhpcyhtYWluQXhpcyk7XG4gIHZhciBwb3BwZXJPZmZzZXRzID0gc3RhdGUubW9kaWZpZXJzRGF0YS5wb3BwZXJPZmZzZXRzO1xuICB2YXIgcmVmZXJlbmNlUmVjdCA9IHN0YXRlLnJlY3RzLnJlZmVyZW5jZTtcbiAgdmFyIHBvcHBlclJlY3QgPSBzdGF0ZS5yZWN0cy5wb3BwZXI7XG4gIHZhciB0ZXRoZXJPZmZzZXRWYWx1ZSA9IHR5cGVvZiB0ZXRoZXJPZmZzZXQgPT09ICdmdW5jdGlvbicgPyB0ZXRoZXJPZmZzZXQoT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUucmVjdHMsIHtcbiAgICBwbGFjZW1lbnQ6IHN0YXRlLnBsYWNlbWVudFxuICB9KSkgOiB0ZXRoZXJPZmZzZXQ7XG4gIHZhciBub3JtYWxpemVkVGV0aGVyT2Zmc2V0VmFsdWUgPSB0eXBlb2YgdGV0aGVyT2Zmc2V0VmFsdWUgPT09ICdudW1iZXInID8ge1xuICAgIG1haW5BeGlzOiB0ZXRoZXJPZmZzZXRWYWx1ZSxcbiAgICBhbHRBeGlzOiB0ZXRoZXJPZmZzZXRWYWx1ZVxuICB9IDogT2JqZWN0LmFzc2lnbih7XG4gICAgbWFpbkF4aXM6IDAsXG4gICAgYWx0QXhpczogMFxuICB9LCB0ZXRoZXJPZmZzZXRWYWx1ZSk7XG4gIHZhciBvZmZzZXRNb2RpZmllclN0YXRlID0gc3RhdGUubW9kaWZpZXJzRGF0YS5vZmZzZXQgPyBzdGF0ZS5tb2RpZmllcnNEYXRhLm9mZnNldFtzdGF0ZS5wbGFjZW1lbnRdIDogbnVsbDtcbiAgdmFyIGRhdGEgPSB7XG4gICAgeDogMCxcbiAgICB5OiAwXG4gIH07XG5cbiAgaWYgKCFwb3BwZXJPZmZzZXRzKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGNoZWNrTWFpbkF4aXMpIHtcbiAgICB2YXIgX29mZnNldE1vZGlmaWVyU3RhdGUkO1xuXG4gICAgdmFyIG1haW5TaWRlID0gbWFpbkF4aXMgPT09ICd5JyA/IHRvcCA6IGxlZnQ7XG4gICAgdmFyIGFsdFNpZGUgPSBtYWluQXhpcyA9PT0gJ3knID8gYm90dG9tIDogcmlnaHQ7XG4gICAgdmFyIGxlbiA9IG1haW5BeGlzID09PSAneScgPyAnaGVpZ2h0JyA6ICd3aWR0aCc7XG4gICAgdmFyIG9mZnNldCA9IHBvcHBlck9mZnNldHNbbWFpbkF4aXNdO1xuICAgIHZhciBtaW4gPSBvZmZzZXQgKyBvdmVyZmxvd1ttYWluU2lkZV07XG4gICAgdmFyIG1heCA9IG9mZnNldCAtIG92ZXJmbG93W2FsdFNpZGVdO1xuICAgIHZhciBhZGRpdGl2ZSA9IHRldGhlciA/IC1wb3BwZXJSZWN0W2xlbl0gLyAyIDogMDtcbiAgICB2YXIgbWluTGVuID0gdmFyaWF0aW9uID09PSBzdGFydCA/IHJlZmVyZW5jZVJlY3RbbGVuXSA6IHBvcHBlclJlY3RbbGVuXTtcbiAgICB2YXIgbWF4TGVuID0gdmFyaWF0aW9uID09PSBzdGFydCA/IC1wb3BwZXJSZWN0W2xlbl0gOiAtcmVmZXJlbmNlUmVjdFtsZW5dOyAvLyBXZSBuZWVkIHRvIGluY2x1ZGUgdGhlIGFycm93IGluIHRoZSBjYWxjdWxhdGlvbiBzbyB0aGUgYXJyb3cgZG9lc24ndCBnb1xuICAgIC8vIG91dHNpZGUgdGhlIHJlZmVyZW5jZSBib3VuZHNcblxuICAgIHZhciBhcnJvd0VsZW1lbnQgPSBzdGF0ZS5lbGVtZW50cy5hcnJvdztcbiAgICB2YXIgYXJyb3dSZWN0ID0gdGV0aGVyICYmIGFycm93RWxlbWVudCA/IGdldExheW91dFJlY3QoYXJyb3dFbGVtZW50KSA6IHtcbiAgICAgIHdpZHRoOiAwLFxuICAgICAgaGVpZ2h0OiAwXG4gICAgfTtcbiAgICB2YXIgYXJyb3dQYWRkaW5nT2JqZWN0ID0gc3RhdGUubW9kaWZpZXJzRGF0YVsnYXJyb3cjcGVyc2lzdGVudCddID8gc3RhdGUubW9kaWZpZXJzRGF0YVsnYXJyb3cjcGVyc2lzdGVudCddLnBhZGRpbmcgOiBnZXRGcmVzaFNpZGVPYmplY3QoKTtcbiAgICB2YXIgYXJyb3dQYWRkaW5nTWluID0gYXJyb3dQYWRkaW5nT2JqZWN0W21haW5TaWRlXTtcbiAgICB2YXIgYXJyb3dQYWRkaW5nTWF4ID0gYXJyb3dQYWRkaW5nT2JqZWN0W2FsdFNpZGVdOyAvLyBJZiB0aGUgcmVmZXJlbmNlIGxlbmd0aCBpcyBzbWFsbGVyIHRoYW4gdGhlIGFycm93IGxlbmd0aCwgd2UgZG9uJ3Qgd2FudFxuICAgIC8vIHRvIGluY2x1ZGUgaXRzIGZ1bGwgc2l6ZSBpbiB0aGUgY2FsY3VsYXRpb24uIElmIHRoZSByZWZlcmVuY2UgaXMgc21hbGxcbiAgICAvLyBhbmQgbmVhciB0aGUgZWRnZSBvZiBhIGJvdW5kYXJ5LCB0aGUgcG9wcGVyIGNhbiBvdmVyZmxvdyBldmVuIGlmIHRoZVxuICAgIC8vIHJlZmVyZW5jZSBpcyBub3Qgb3ZlcmZsb3dpbmcgYXMgd2VsbCAoZS5nLiB2aXJ0dWFsIGVsZW1lbnRzIHdpdGggbm9cbiAgICAvLyB3aWR0aCBvciBoZWlnaHQpXG5cbiAgICB2YXIgYXJyb3dMZW4gPSB3aXRoaW4oMCwgcmVmZXJlbmNlUmVjdFtsZW5dLCBhcnJvd1JlY3RbbGVuXSk7XG4gICAgdmFyIG1pbk9mZnNldCA9IGlzQmFzZVBsYWNlbWVudCA/IHJlZmVyZW5jZVJlY3RbbGVuXSAvIDIgLSBhZGRpdGl2ZSAtIGFycm93TGVuIC0gYXJyb3dQYWRkaW5nTWluIC0gbm9ybWFsaXplZFRldGhlck9mZnNldFZhbHVlLm1haW5BeGlzIDogbWluTGVuIC0gYXJyb3dMZW4gLSBhcnJvd1BhZGRpbmdNaW4gLSBub3JtYWxpemVkVGV0aGVyT2Zmc2V0VmFsdWUubWFpbkF4aXM7XG4gICAgdmFyIG1heE9mZnNldCA9IGlzQmFzZVBsYWNlbWVudCA/IC1yZWZlcmVuY2VSZWN0W2xlbl0gLyAyICsgYWRkaXRpdmUgKyBhcnJvd0xlbiArIGFycm93UGFkZGluZ01heCArIG5vcm1hbGl6ZWRUZXRoZXJPZmZzZXRWYWx1ZS5tYWluQXhpcyA6IG1heExlbiArIGFycm93TGVuICsgYXJyb3dQYWRkaW5nTWF4ICsgbm9ybWFsaXplZFRldGhlck9mZnNldFZhbHVlLm1haW5BeGlzO1xuICAgIHZhciBhcnJvd09mZnNldFBhcmVudCA9IHN0YXRlLmVsZW1lbnRzLmFycm93ICYmIGdldE9mZnNldFBhcmVudChzdGF0ZS5lbGVtZW50cy5hcnJvdyk7XG4gICAgdmFyIGNsaWVudE9mZnNldCA9IGFycm93T2Zmc2V0UGFyZW50ID8gbWFpbkF4aXMgPT09ICd5JyA/IGFycm93T2Zmc2V0UGFyZW50LmNsaWVudFRvcCB8fCAwIDogYXJyb3dPZmZzZXRQYXJlbnQuY2xpZW50TGVmdCB8fCAwIDogMDtcbiAgICB2YXIgb2Zmc2V0TW9kaWZpZXJWYWx1ZSA9IChfb2Zmc2V0TW9kaWZpZXJTdGF0ZSQgPSBvZmZzZXRNb2RpZmllclN0YXRlID09IG51bGwgPyB2b2lkIDAgOiBvZmZzZXRNb2RpZmllclN0YXRlW21haW5BeGlzXSkgIT0gbnVsbCA/IF9vZmZzZXRNb2RpZmllclN0YXRlJCA6IDA7XG4gICAgdmFyIHRldGhlck1pbiA9IG9mZnNldCArIG1pbk9mZnNldCAtIG9mZnNldE1vZGlmaWVyVmFsdWUgLSBjbGllbnRPZmZzZXQ7XG4gICAgdmFyIHRldGhlck1heCA9IG9mZnNldCArIG1heE9mZnNldCAtIG9mZnNldE1vZGlmaWVyVmFsdWU7XG4gICAgdmFyIHByZXZlbnRlZE9mZnNldCA9IHdpdGhpbih0ZXRoZXIgPyBtYXRoTWluKG1pbiwgdGV0aGVyTWluKSA6IG1pbiwgb2Zmc2V0LCB0ZXRoZXIgPyBtYXRoTWF4KG1heCwgdGV0aGVyTWF4KSA6IG1heCk7XG4gICAgcG9wcGVyT2Zmc2V0c1ttYWluQXhpc10gPSBwcmV2ZW50ZWRPZmZzZXQ7XG4gICAgZGF0YVttYWluQXhpc10gPSBwcmV2ZW50ZWRPZmZzZXQgLSBvZmZzZXQ7XG4gIH1cblxuICBpZiAoY2hlY2tBbHRBeGlzKSB7XG4gICAgdmFyIF9vZmZzZXRNb2RpZmllclN0YXRlJDI7XG5cbiAgICB2YXIgX21haW5TaWRlID0gbWFpbkF4aXMgPT09ICd4JyA/IHRvcCA6IGxlZnQ7XG5cbiAgICB2YXIgX2FsdFNpZGUgPSBtYWluQXhpcyA9PT0gJ3gnID8gYm90dG9tIDogcmlnaHQ7XG5cbiAgICB2YXIgX29mZnNldCA9IHBvcHBlck9mZnNldHNbYWx0QXhpc107XG5cbiAgICB2YXIgX2xlbiA9IGFsdEF4aXMgPT09ICd5JyA/ICdoZWlnaHQnIDogJ3dpZHRoJztcblxuICAgIHZhciBfbWluID0gX29mZnNldCArIG92ZXJmbG93W19tYWluU2lkZV07XG5cbiAgICB2YXIgX21heCA9IF9vZmZzZXQgLSBvdmVyZmxvd1tfYWx0U2lkZV07XG5cbiAgICB2YXIgaXNPcmlnaW5TaWRlID0gW3RvcCwgbGVmdF0uaW5kZXhPZihiYXNlUGxhY2VtZW50KSAhPT0gLTE7XG5cbiAgICB2YXIgX29mZnNldE1vZGlmaWVyVmFsdWUgPSAoX29mZnNldE1vZGlmaWVyU3RhdGUkMiA9IG9mZnNldE1vZGlmaWVyU3RhdGUgPT0gbnVsbCA/IHZvaWQgMCA6IG9mZnNldE1vZGlmaWVyU3RhdGVbYWx0QXhpc10pICE9IG51bGwgPyBfb2Zmc2V0TW9kaWZpZXJTdGF0ZSQyIDogMDtcblxuICAgIHZhciBfdGV0aGVyTWluID0gaXNPcmlnaW5TaWRlID8gX21pbiA6IF9vZmZzZXQgLSByZWZlcmVuY2VSZWN0W19sZW5dIC0gcG9wcGVyUmVjdFtfbGVuXSAtIF9vZmZzZXRNb2RpZmllclZhbHVlICsgbm9ybWFsaXplZFRldGhlck9mZnNldFZhbHVlLmFsdEF4aXM7XG5cbiAgICB2YXIgX3RldGhlck1heCA9IGlzT3JpZ2luU2lkZSA/IF9vZmZzZXQgKyByZWZlcmVuY2VSZWN0W19sZW5dICsgcG9wcGVyUmVjdFtfbGVuXSAtIF9vZmZzZXRNb2RpZmllclZhbHVlIC0gbm9ybWFsaXplZFRldGhlck9mZnNldFZhbHVlLmFsdEF4aXMgOiBfbWF4O1xuXG4gICAgdmFyIF9wcmV2ZW50ZWRPZmZzZXQgPSB0ZXRoZXIgJiYgaXNPcmlnaW5TaWRlID8gd2l0aGluTWF4Q2xhbXAoX3RldGhlck1pbiwgX29mZnNldCwgX3RldGhlck1heCkgOiB3aXRoaW4odGV0aGVyID8gX3RldGhlck1pbiA6IF9taW4sIF9vZmZzZXQsIHRldGhlciA/IF90ZXRoZXJNYXggOiBfbWF4KTtcblxuICAgIHBvcHBlck9mZnNldHNbYWx0QXhpc10gPSBfcHJldmVudGVkT2Zmc2V0O1xuICAgIGRhdGFbYWx0QXhpc10gPSBfcHJldmVudGVkT2Zmc2V0IC0gX29mZnNldDtcbiAgfVxuXG4gIHN0YXRlLm1vZGlmaWVyc0RhdGFbbmFtZV0gPSBkYXRhO1xufSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAncHJldmVudE92ZXJmbG93JyxcbiAgZW5hYmxlZDogdHJ1ZSxcbiAgcGhhc2U6ICdtYWluJyxcbiAgZm46IHByZXZlbnRPdmVyZmxvdyxcbiAgcmVxdWlyZXNJZkV4aXN0czogWydvZmZzZXQnXVxufTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRBbHRBeGlzKGF4aXMpIHtcbiAgcmV0dXJuIGF4aXMgPT09ICd4JyA/ICd5JyA6ICd4Jztcbn0iLCJpbXBvcnQgZ2V0Q29tcG9zaXRlUmVjdCBmcm9tIFwiLi9kb20tdXRpbHMvZ2V0Q29tcG9zaXRlUmVjdC5qc1wiO1xuaW1wb3J0IGdldExheW91dFJlY3QgZnJvbSBcIi4vZG9tLXV0aWxzL2dldExheW91dFJlY3QuanNcIjtcbmltcG9ydCBsaXN0U2Nyb2xsUGFyZW50cyBmcm9tIFwiLi9kb20tdXRpbHMvbGlzdFNjcm9sbFBhcmVudHMuanNcIjtcbmltcG9ydCBnZXRPZmZzZXRQYXJlbnQgZnJvbSBcIi4vZG9tLXV0aWxzL2dldE9mZnNldFBhcmVudC5qc1wiO1xuaW1wb3J0IGdldENvbXB1dGVkU3R5bGUgZnJvbSBcIi4vZG9tLXV0aWxzL2dldENvbXB1dGVkU3R5bGUuanNcIjtcbmltcG9ydCBvcmRlck1vZGlmaWVycyBmcm9tIFwiLi91dGlscy9vcmRlck1vZGlmaWVycy5qc1wiO1xuaW1wb3J0IGRlYm91bmNlIGZyb20gXCIuL3V0aWxzL2RlYm91bmNlLmpzXCI7XG5pbXBvcnQgdmFsaWRhdGVNb2RpZmllcnMgZnJvbSBcIi4vdXRpbHMvdmFsaWRhdGVNb2RpZmllcnMuanNcIjtcbmltcG9ydCB1bmlxdWVCeSBmcm9tIFwiLi91dGlscy91bmlxdWVCeS5qc1wiO1xuaW1wb3J0IGdldEJhc2VQbGFjZW1lbnQgZnJvbSBcIi4vdXRpbHMvZ2V0QmFzZVBsYWNlbWVudC5qc1wiO1xuaW1wb3J0IG1lcmdlQnlOYW1lIGZyb20gXCIuL3V0aWxzL21lcmdlQnlOYW1lLmpzXCI7XG5pbXBvcnQgZGV0ZWN0T3ZlcmZsb3cgZnJvbSBcIi4vdXRpbHMvZGV0ZWN0T3ZlcmZsb3cuanNcIjtcbmltcG9ydCB7IGlzRWxlbWVudCB9IGZyb20gXCIuL2RvbS11dGlscy9pbnN0YW5jZU9mLmpzXCI7XG5pbXBvcnQgeyBhdXRvIH0gZnJvbSBcIi4vZW51bXMuanNcIjtcbnZhciBJTlZBTElEX0VMRU1FTlRfRVJST1IgPSAnUG9wcGVyOiBJbnZhbGlkIHJlZmVyZW5jZSBvciBwb3BwZXIgYXJndW1lbnQgcHJvdmlkZWQuIFRoZXkgbXVzdCBiZSBlaXRoZXIgYSBET00gZWxlbWVudCBvciB2aXJ0dWFsIGVsZW1lbnQuJztcbnZhciBJTkZJTklURV9MT09QX0VSUk9SID0gJ1BvcHBlcjogQW4gaW5maW5pdGUgbG9vcCBpbiB0aGUgbW9kaWZpZXJzIGN5Y2xlIGhhcyBiZWVuIGRldGVjdGVkISBUaGUgY3ljbGUgaGFzIGJlZW4gaW50ZXJydXB0ZWQgdG8gcHJldmVudCBhIGJyb3dzZXIgY3Jhc2guJztcbnZhciBERUZBVUxUX09QVElPTlMgPSB7XG4gIHBsYWNlbWVudDogJ2JvdHRvbScsXG4gIG1vZGlmaWVyczogW10sXG4gIHN0cmF0ZWd5OiAnYWJzb2x1dGUnXG59O1xuXG5mdW5jdGlvbiBhcmVWYWxpZEVsZW1lbnRzKCkge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgcmV0dXJuICFhcmdzLnNvbWUoZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICByZXR1cm4gIShlbGVtZW50ICYmIHR5cGVvZiBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCA9PT0gJ2Z1bmN0aW9uJyk7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcG9wcGVyR2VuZXJhdG9yKGdlbmVyYXRvck9wdGlvbnMpIHtcbiAgaWYgKGdlbmVyYXRvck9wdGlvbnMgPT09IHZvaWQgMCkge1xuICAgIGdlbmVyYXRvck9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIHZhciBfZ2VuZXJhdG9yT3B0aW9ucyA9IGdlbmVyYXRvck9wdGlvbnMsXG4gICAgICBfZ2VuZXJhdG9yT3B0aW9ucyRkZWYgPSBfZ2VuZXJhdG9yT3B0aW9ucy5kZWZhdWx0TW9kaWZpZXJzLFxuICAgICAgZGVmYXVsdE1vZGlmaWVycyA9IF9nZW5lcmF0b3JPcHRpb25zJGRlZiA9PT0gdm9pZCAwID8gW10gOiBfZ2VuZXJhdG9yT3B0aW9ucyRkZWYsXG4gICAgICBfZ2VuZXJhdG9yT3B0aW9ucyRkZWYyID0gX2dlbmVyYXRvck9wdGlvbnMuZGVmYXVsdE9wdGlvbnMsXG4gICAgICBkZWZhdWx0T3B0aW9ucyA9IF9nZW5lcmF0b3JPcHRpb25zJGRlZjIgPT09IHZvaWQgMCA/IERFRkFVTFRfT1BUSU9OUyA6IF9nZW5lcmF0b3JPcHRpb25zJGRlZjI7XG4gIHJldHVybiBmdW5jdGlvbiBjcmVhdGVQb3BwZXIocmVmZXJlbmNlLCBwb3BwZXIsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7XG4gICAgICBvcHRpb25zID0gZGVmYXVsdE9wdGlvbnM7XG4gICAgfVxuXG4gICAgdmFyIHN0YXRlID0ge1xuICAgICAgcGxhY2VtZW50OiAnYm90dG9tJyxcbiAgICAgIG9yZGVyZWRNb2RpZmllcnM6IFtdLFxuICAgICAgb3B0aW9uczogT2JqZWN0LmFzc2lnbih7fSwgREVGQVVMVF9PUFRJT05TLCBkZWZhdWx0T3B0aW9ucyksXG4gICAgICBtb2RpZmllcnNEYXRhOiB7fSxcbiAgICAgIGVsZW1lbnRzOiB7XG4gICAgICAgIHJlZmVyZW5jZTogcmVmZXJlbmNlLFxuICAgICAgICBwb3BwZXI6IHBvcHBlclxuICAgICAgfSxcbiAgICAgIGF0dHJpYnV0ZXM6IHt9LFxuICAgICAgc3R5bGVzOiB7fVxuICAgIH07XG4gICAgdmFyIGVmZmVjdENsZWFudXBGbnMgPSBbXTtcbiAgICB2YXIgaXNEZXN0cm95ZWQgPSBmYWxzZTtcbiAgICB2YXIgaW5zdGFuY2UgPSB7XG4gICAgICBzdGF0ZTogc3RhdGUsXG4gICAgICBzZXRPcHRpb25zOiBmdW5jdGlvbiBzZXRPcHRpb25zKHNldE9wdGlvbnNBY3Rpb24pIHtcbiAgICAgICAgdmFyIG9wdGlvbnMgPSB0eXBlb2Ygc2V0T3B0aW9uc0FjdGlvbiA9PT0gJ2Z1bmN0aW9uJyA/IHNldE9wdGlvbnNBY3Rpb24oc3RhdGUub3B0aW9ucykgOiBzZXRPcHRpb25zQWN0aW9uO1xuICAgICAgICBjbGVhbnVwTW9kaWZpZXJFZmZlY3RzKCk7XG4gICAgICAgIHN0YXRlLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCBkZWZhdWx0T3B0aW9ucywgc3RhdGUub3B0aW9ucywgb3B0aW9ucyk7XG4gICAgICAgIHN0YXRlLnNjcm9sbFBhcmVudHMgPSB7XG4gICAgICAgICAgcmVmZXJlbmNlOiBpc0VsZW1lbnQocmVmZXJlbmNlKSA/IGxpc3RTY3JvbGxQYXJlbnRzKHJlZmVyZW5jZSkgOiByZWZlcmVuY2UuY29udGV4dEVsZW1lbnQgPyBsaXN0U2Nyb2xsUGFyZW50cyhyZWZlcmVuY2UuY29udGV4dEVsZW1lbnQpIDogW10sXG4gICAgICAgICAgcG9wcGVyOiBsaXN0U2Nyb2xsUGFyZW50cyhwb3BwZXIpXG4gICAgICAgIH07IC8vIE9yZGVycyB0aGUgbW9kaWZpZXJzIGJhc2VkIG9uIHRoZWlyIGRlcGVuZGVuY2llcyBhbmQgYHBoYXNlYFxuICAgICAgICAvLyBwcm9wZXJ0aWVzXG5cbiAgICAgICAgdmFyIG9yZGVyZWRNb2RpZmllcnMgPSBvcmRlck1vZGlmaWVycyhtZXJnZUJ5TmFtZShbXS5jb25jYXQoZGVmYXVsdE1vZGlmaWVycywgc3RhdGUub3B0aW9ucy5tb2RpZmllcnMpKSk7IC8vIFN0cmlwIG91dCBkaXNhYmxlZCBtb2RpZmllcnNcblxuICAgICAgICBzdGF0ZS5vcmRlcmVkTW9kaWZpZXJzID0gb3JkZXJlZE1vZGlmaWVycy5maWx0ZXIoZnVuY3Rpb24gKG0pIHtcbiAgICAgICAgICByZXR1cm4gbS5lbmFibGVkO1xuICAgICAgICB9KTsgLy8gVmFsaWRhdGUgdGhlIHByb3ZpZGVkIG1vZGlmaWVycyBzbyB0aGF0IHRoZSBjb25zdW1lciB3aWxsIGdldCB3YXJuZWRcbiAgICAgICAgLy8gaWYgb25lIG9mIHRoZSBtb2RpZmllcnMgaXMgaW52YWxpZCBmb3IgYW55IHJlYXNvblxuXG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICAgICAgICB2YXIgbW9kaWZpZXJzID0gdW5pcXVlQnkoW10uY29uY2F0KG9yZGVyZWRNb2RpZmllcnMsIHN0YXRlLm9wdGlvbnMubW9kaWZpZXJzKSwgZnVuY3Rpb24gKF9yZWYpIHtcbiAgICAgICAgICAgIHZhciBuYW1lID0gX3JlZi5uYW1lO1xuICAgICAgICAgICAgcmV0dXJuIG5hbWU7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgdmFsaWRhdGVNb2RpZmllcnMobW9kaWZpZXJzKTtcblxuICAgICAgICAgIGlmIChnZXRCYXNlUGxhY2VtZW50KHN0YXRlLm9wdGlvbnMucGxhY2VtZW50KSA9PT0gYXV0bykge1xuICAgICAgICAgICAgdmFyIGZsaXBNb2RpZmllciA9IHN0YXRlLm9yZGVyZWRNb2RpZmllcnMuZmluZChmdW5jdGlvbiAoX3JlZjIpIHtcbiAgICAgICAgICAgICAgdmFyIG5hbWUgPSBfcmVmMi5uYW1lO1xuICAgICAgICAgICAgICByZXR1cm4gbmFtZSA9PT0gJ2ZsaXAnO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmICghZmxpcE1vZGlmaWVyKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoWydQb3BwZXI6IFwiYXV0b1wiIHBsYWNlbWVudHMgcmVxdWlyZSB0aGUgXCJmbGlwXCIgbW9kaWZpZXIgYmUnLCAncHJlc2VudCBhbmQgZW5hYmxlZCB0byB3b3JrLiddLmpvaW4oJyAnKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdmFyIF9nZXRDb21wdXRlZFN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShwb3BwZXIpLFxuICAgICAgICAgICAgICBtYXJnaW5Ub3AgPSBfZ2V0Q29tcHV0ZWRTdHlsZS5tYXJnaW5Ub3AsXG4gICAgICAgICAgICAgIG1hcmdpblJpZ2h0ID0gX2dldENvbXB1dGVkU3R5bGUubWFyZ2luUmlnaHQsXG4gICAgICAgICAgICAgIG1hcmdpbkJvdHRvbSA9IF9nZXRDb21wdXRlZFN0eWxlLm1hcmdpbkJvdHRvbSxcbiAgICAgICAgICAgICAgbWFyZ2luTGVmdCA9IF9nZXRDb21wdXRlZFN0eWxlLm1hcmdpbkxlZnQ7IC8vIFdlIG5vIGxvbmdlciB0YWtlIGludG8gYWNjb3VudCBgbWFyZ2luc2Agb24gdGhlIHBvcHBlciwgYW5kIGl0IGNhblxuICAgICAgICAgIC8vIGNhdXNlIGJ1Z3Mgd2l0aCBwb3NpdGlvbmluZywgc28gd2UnbGwgd2FybiB0aGUgY29uc3VtZXJcblxuXG4gICAgICAgICAgaWYgKFttYXJnaW5Ub3AsIG1hcmdpblJpZ2h0LCBtYXJnaW5Cb3R0b20sIG1hcmdpbkxlZnRdLnNvbWUoZnVuY3Rpb24gKG1hcmdpbikge1xuICAgICAgICAgICAgcmV0dXJuIHBhcnNlRmxvYXQobWFyZ2luKTtcbiAgICAgICAgICB9KSkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKFsnUG9wcGVyOiBDU1MgXCJtYXJnaW5cIiBzdHlsZXMgY2Fubm90IGJlIHVzZWQgdG8gYXBwbHkgcGFkZGluZycsICdiZXR3ZWVuIHRoZSBwb3BwZXIgYW5kIGl0cyByZWZlcmVuY2UgZWxlbWVudCBvciBib3VuZGFyeS4nLCAnVG8gcmVwbGljYXRlIG1hcmdpbiwgdXNlIHRoZSBgb2Zmc2V0YCBtb2RpZmllciwgYXMgd2VsbCBhcycsICd0aGUgYHBhZGRpbmdgIG9wdGlvbiBpbiB0aGUgYHByZXZlbnRPdmVyZmxvd2AgYW5kIGBmbGlwYCcsICdtb2RpZmllcnMuJ10uam9pbignICcpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBydW5Nb2RpZmllckVmZmVjdHMoKTtcbiAgICAgICAgcmV0dXJuIGluc3RhbmNlLnVwZGF0ZSgpO1xuICAgICAgfSxcbiAgICAgIC8vIFN5bmMgdXBkYXRlIOKAkyBpdCB3aWxsIGFsd2F5cyBiZSBleGVjdXRlZCwgZXZlbiBpZiBub3QgbmVjZXNzYXJ5LiBUaGlzXG4gICAgICAvLyBpcyB1c2VmdWwgZm9yIGxvdyBmcmVxdWVuY3kgdXBkYXRlcyB3aGVyZSBzeW5jIGJlaGF2aW9yIHNpbXBsaWZpZXMgdGhlXG4gICAgICAvLyBsb2dpYy5cbiAgICAgIC8vIEZvciBoaWdoIGZyZXF1ZW5jeSB1cGRhdGVzIChlLmcuIGByZXNpemVgIGFuZCBgc2Nyb2xsYCBldmVudHMpLCBhbHdheXNcbiAgICAgIC8vIHByZWZlciB0aGUgYXN5bmMgUG9wcGVyI3VwZGF0ZSBtZXRob2RcbiAgICAgIGZvcmNlVXBkYXRlOiBmdW5jdGlvbiBmb3JjZVVwZGF0ZSgpIHtcbiAgICAgICAgaWYgKGlzRGVzdHJveWVkKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIF9zdGF0ZSRlbGVtZW50cyA9IHN0YXRlLmVsZW1lbnRzLFxuICAgICAgICAgICAgcmVmZXJlbmNlID0gX3N0YXRlJGVsZW1lbnRzLnJlZmVyZW5jZSxcbiAgICAgICAgICAgIHBvcHBlciA9IF9zdGF0ZSRlbGVtZW50cy5wb3BwZXI7IC8vIERvbid0IHByb2NlZWQgaWYgYHJlZmVyZW5jZWAgb3IgYHBvcHBlcmAgYXJlIG5vdCB2YWxpZCBlbGVtZW50c1xuICAgICAgICAvLyBhbnltb3JlXG5cbiAgICAgICAgaWYgKCFhcmVWYWxpZEVsZW1lbnRzKHJlZmVyZW5jZSwgcG9wcGVyKSkge1xuICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoSU5WQUxJRF9FTEVNRU5UX0VSUk9SKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gLy8gU3RvcmUgdGhlIHJlZmVyZW5jZSBhbmQgcG9wcGVyIHJlY3RzIHRvIGJlIHJlYWQgYnkgbW9kaWZpZXJzXG5cblxuICAgICAgICBzdGF0ZS5yZWN0cyA9IHtcbiAgICAgICAgICByZWZlcmVuY2U6IGdldENvbXBvc2l0ZVJlY3QocmVmZXJlbmNlLCBnZXRPZmZzZXRQYXJlbnQocG9wcGVyKSwgc3RhdGUub3B0aW9ucy5zdHJhdGVneSA9PT0gJ2ZpeGVkJyksXG4gICAgICAgICAgcG9wcGVyOiBnZXRMYXlvdXRSZWN0KHBvcHBlcilcbiAgICAgICAgfTsgLy8gTW9kaWZpZXJzIGhhdmUgdGhlIGFiaWxpdHkgdG8gcmVzZXQgdGhlIGN1cnJlbnQgdXBkYXRlIGN5Y2xlLiBUaGVcbiAgICAgICAgLy8gbW9zdCBjb21tb24gdXNlIGNhc2UgZm9yIHRoaXMgaXMgdGhlIGBmbGlwYCBtb2RpZmllciBjaGFuZ2luZyB0aGVcbiAgICAgICAgLy8gcGxhY2VtZW50LCB3aGljaCB0aGVuIG5lZWRzIHRvIHJlLXJ1biBhbGwgdGhlIG1vZGlmaWVycywgYmVjYXVzZSB0aGVcbiAgICAgICAgLy8gbG9naWMgd2FzIHByZXZpb3VzbHkgcmFuIGZvciB0aGUgcHJldmlvdXMgcGxhY2VtZW50IGFuZCBpcyB0aGVyZWZvcmVcbiAgICAgICAgLy8gc3RhbGUvaW5jb3JyZWN0XG5cbiAgICAgICAgc3RhdGUucmVzZXQgPSBmYWxzZTtcbiAgICAgICAgc3RhdGUucGxhY2VtZW50ID0gc3RhdGUub3B0aW9ucy5wbGFjZW1lbnQ7IC8vIE9uIGVhY2ggdXBkYXRlIGN5Y2xlLCB0aGUgYG1vZGlmaWVyc0RhdGFgIHByb3BlcnR5IGZvciBlYWNoIG1vZGlmaWVyXG4gICAgICAgIC8vIGlzIGZpbGxlZCB3aXRoIHRoZSBpbml0aWFsIGRhdGEgc3BlY2lmaWVkIGJ5IHRoZSBtb2RpZmllci4gVGhpcyBtZWFuc1xuICAgICAgICAvLyBpdCBkb2Vzbid0IHBlcnNpc3QgYW5kIGlzIGZyZXNoIG9uIGVhY2ggdXBkYXRlLlxuICAgICAgICAvLyBUbyBlbnN1cmUgcGVyc2lzdGVudCBkYXRhLCB1c2UgYCR7bmFtZX0jcGVyc2lzdGVudGBcblxuICAgICAgICBzdGF0ZS5vcmRlcmVkTW9kaWZpZXJzLmZvckVhY2goZnVuY3Rpb24gKG1vZGlmaWVyKSB7XG4gICAgICAgICAgcmV0dXJuIHN0YXRlLm1vZGlmaWVyc0RhdGFbbW9kaWZpZXIubmFtZV0gPSBPYmplY3QuYXNzaWduKHt9LCBtb2RpZmllci5kYXRhKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHZhciBfX2RlYnVnX2xvb3BzX18gPSAwO1xuXG4gICAgICAgIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCBzdGF0ZS5vcmRlcmVkTW9kaWZpZXJzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICAgICAgICAgIF9fZGVidWdfbG9vcHNfXyArPSAxO1xuXG4gICAgICAgICAgICBpZiAoX19kZWJ1Z19sb29wc19fID4gMTAwKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoSU5GSU5JVEVfTE9PUF9FUlJPUik7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChzdGF0ZS5yZXNldCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgc3RhdGUucmVzZXQgPSBmYWxzZTtcbiAgICAgICAgICAgIGluZGV4ID0gLTE7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB2YXIgX3N0YXRlJG9yZGVyZWRNb2RpZmllID0gc3RhdGUub3JkZXJlZE1vZGlmaWVyc1tpbmRleF0sXG4gICAgICAgICAgICAgIGZuID0gX3N0YXRlJG9yZGVyZWRNb2RpZmllLmZuLFxuICAgICAgICAgICAgICBfc3RhdGUkb3JkZXJlZE1vZGlmaWUyID0gX3N0YXRlJG9yZGVyZWRNb2RpZmllLm9wdGlvbnMsXG4gICAgICAgICAgICAgIF9vcHRpb25zID0gX3N0YXRlJG9yZGVyZWRNb2RpZmllMiA9PT0gdm9pZCAwID8ge30gOiBfc3RhdGUkb3JkZXJlZE1vZGlmaWUyLFxuICAgICAgICAgICAgICBuYW1lID0gX3N0YXRlJG9yZGVyZWRNb2RpZmllLm5hbWU7XG5cbiAgICAgICAgICBpZiAodHlwZW9mIGZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBzdGF0ZSA9IGZuKHtcbiAgICAgICAgICAgICAgc3RhdGU6IHN0YXRlLFxuICAgICAgICAgICAgICBvcHRpb25zOiBfb3B0aW9ucyxcbiAgICAgICAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgICAgICAgaW5zdGFuY2U6IGluc3RhbmNlXG4gICAgICAgICAgICB9KSB8fCBzdGF0ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAvLyBBc3luYyBhbmQgb3B0aW1pc3RpY2FsbHkgb3B0aW1pemVkIHVwZGF0ZSDigJMgaXQgd2lsbCBub3QgYmUgZXhlY3V0ZWQgaWZcbiAgICAgIC8vIG5vdCBuZWNlc3NhcnkgKGRlYm91bmNlZCB0byBydW4gYXQgbW9zdCBvbmNlLXBlci10aWNrKVxuICAgICAgdXBkYXRlOiBkZWJvdW5jZShmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xuICAgICAgICAgIGluc3RhbmNlLmZvcmNlVXBkYXRlKCk7XG4gICAgICAgICAgcmVzb2x2ZShzdGF0ZSk7XG4gICAgICAgIH0pO1xuICAgICAgfSksXG4gICAgICBkZXN0cm95OiBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgICAgICBjbGVhbnVwTW9kaWZpZXJFZmZlY3RzKCk7XG4gICAgICAgIGlzRGVzdHJveWVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgaWYgKCFhcmVWYWxpZEVsZW1lbnRzKHJlZmVyZW5jZSwgcG9wcGVyKSkge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgICAgICBjb25zb2xlLmVycm9yKElOVkFMSURfRUxFTUVOVF9FUlJPUik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBpbnN0YW5jZTtcbiAgICB9XG5cbiAgICBpbnN0YW5jZS5zZXRPcHRpb25zKG9wdGlvbnMpLnRoZW4oZnVuY3Rpb24gKHN0YXRlKSB7XG4gICAgICBpZiAoIWlzRGVzdHJveWVkICYmIG9wdGlvbnMub25GaXJzdFVwZGF0ZSkge1xuICAgICAgICBvcHRpb25zLm9uRmlyc3RVcGRhdGUoc3RhdGUpO1xuICAgICAgfVxuICAgIH0pOyAvLyBNb2RpZmllcnMgaGF2ZSB0aGUgYWJpbGl0eSB0byBleGVjdXRlIGFyYml0cmFyeSBjb2RlIGJlZm9yZSB0aGUgZmlyc3RcbiAgICAvLyB1cGRhdGUgY3ljbGUgcnVucy4gVGhleSB3aWxsIGJlIGV4ZWN1dGVkIGluIHRoZSBzYW1lIG9yZGVyIGFzIHRoZSB1cGRhdGVcbiAgICAvLyBjeWNsZS4gVGhpcyBpcyB1c2VmdWwgd2hlbiBhIG1vZGlmaWVyIGFkZHMgc29tZSBwZXJzaXN0ZW50IGRhdGEgdGhhdFxuICAgIC8vIG90aGVyIG1vZGlmaWVycyBuZWVkIHRvIHVzZSwgYnV0IHRoZSBtb2RpZmllciBpcyBydW4gYWZ0ZXIgdGhlIGRlcGVuZGVudFxuICAgIC8vIG9uZS5cblxuICAgIGZ1bmN0aW9uIHJ1bk1vZGlmaWVyRWZmZWN0cygpIHtcbiAgICAgIHN0YXRlLm9yZGVyZWRNb2RpZmllcnMuZm9yRWFjaChmdW5jdGlvbiAoX3JlZjMpIHtcbiAgICAgICAgdmFyIG5hbWUgPSBfcmVmMy5uYW1lLFxuICAgICAgICAgICAgX3JlZjMkb3B0aW9ucyA9IF9yZWYzLm9wdGlvbnMsXG4gICAgICAgICAgICBvcHRpb25zID0gX3JlZjMkb3B0aW9ucyA9PT0gdm9pZCAwID8ge30gOiBfcmVmMyRvcHRpb25zLFxuICAgICAgICAgICAgZWZmZWN0ID0gX3JlZjMuZWZmZWN0O1xuXG4gICAgICAgIGlmICh0eXBlb2YgZWZmZWN0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgdmFyIGNsZWFudXBGbiA9IGVmZmVjdCh7XG4gICAgICAgICAgICBzdGF0ZTogc3RhdGUsXG4gICAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgICAgaW5zdGFuY2U6IGluc3RhbmNlLFxuICAgICAgICAgICAgb3B0aW9uczogb3B0aW9uc1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgdmFyIG5vb3BGbiA9IGZ1bmN0aW9uIG5vb3BGbigpIHt9O1xuXG4gICAgICAgICAgZWZmZWN0Q2xlYW51cEZucy5wdXNoKGNsZWFudXBGbiB8fCBub29wRm4pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjbGVhbnVwTW9kaWZpZXJFZmZlY3RzKCkge1xuICAgICAgZWZmZWN0Q2xlYW51cEZucy5mb3JFYWNoKGZ1bmN0aW9uIChmbikge1xuICAgICAgICByZXR1cm4gZm4oKTtcbiAgICAgIH0pO1xuICAgICAgZWZmZWN0Q2xlYW51cEZucyA9IFtdO1xuICAgIH1cblxuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfTtcbn1cbmV4cG9ydCB2YXIgY3JlYXRlUG9wcGVyID0gLyojX19QVVJFX18qL3BvcHBlckdlbmVyYXRvcigpOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cbmV4cG9ydCB7IGRldGVjdE92ZXJmbG93IH07IiwiaW1wb3J0IGdldEJvdW5kaW5nQ2xpZW50UmVjdCBmcm9tIFwiLi9nZXRCb3VuZGluZ0NsaWVudFJlY3QuanNcIjtcbmltcG9ydCBnZXROb2RlU2Nyb2xsIGZyb20gXCIuL2dldE5vZGVTY3JvbGwuanNcIjtcbmltcG9ydCBnZXROb2RlTmFtZSBmcm9tIFwiLi9nZXROb2RlTmFtZS5qc1wiO1xuaW1wb3J0IHsgaXNIVE1MRWxlbWVudCB9IGZyb20gXCIuL2luc3RhbmNlT2YuanNcIjtcbmltcG9ydCBnZXRXaW5kb3dTY3JvbGxCYXJYIGZyb20gXCIuL2dldFdpbmRvd1Njcm9sbEJhclguanNcIjtcbmltcG9ydCBnZXREb2N1bWVudEVsZW1lbnQgZnJvbSBcIi4vZ2V0RG9jdW1lbnRFbGVtZW50LmpzXCI7XG5pbXBvcnQgaXNTY3JvbGxQYXJlbnQgZnJvbSBcIi4vaXNTY3JvbGxQYXJlbnQuanNcIjtcbmltcG9ydCB7IHJvdW5kIH0gZnJvbSBcIi4uL3V0aWxzL21hdGguanNcIjtcblxuZnVuY3Rpb24gaXNFbGVtZW50U2NhbGVkKGVsZW1lbnQpIHtcbiAgdmFyIHJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICB2YXIgc2NhbGVYID0gcm91bmQocmVjdC53aWR0aCkgLyBlbGVtZW50Lm9mZnNldFdpZHRoIHx8IDE7XG4gIHZhciBzY2FsZVkgPSByb3VuZChyZWN0LmhlaWdodCkgLyBlbGVtZW50Lm9mZnNldEhlaWdodCB8fCAxO1xuICByZXR1cm4gc2NhbGVYICE9PSAxIHx8IHNjYWxlWSAhPT0gMTtcbn0gLy8gUmV0dXJucyB0aGUgY29tcG9zaXRlIHJlY3Qgb2YgYW4gZWxlbWVudCByZWxhdGl2ZSB0byBpdHMgb2Zmc2V0UGFyZW50LlxuLy8gQ29tcG9zaXRlIG1lYW5zIGl0IHRha2VzIGludG8gYWNjb3VudCB0cmFuc2Zvcm1zIGFzIHdlbGwgYXMgbGF5b3V0LlxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldENvbXBvc2l0ZVJlY3QoZWxlbWVudE9yVmlydHVhbEVsZW1lbnQsIG9mZnNldFBhcmVudCwgaXNGaXhlZCkge1xuICBpZiAoaXNGaXhlZCA9PT0gdm9pZCAwKSB7XG4gICAgaXNGaXhlZCA9IGZhbHNlO1xuICB9XG5cbiAgdmFyIGlzT2Zmc2V0UGFyZW50QW5FbGVtZW50ID0gaXNIVE1MRWxlbWVudChvZmZzZXRQYXJlbnQpO1xuICB2YXIgb2Zmc2V0UGFyZW50SXNTY2FsZWQgPSBpc0hUTUxFbGVtZW50KG9mZnNldFBhcmVudCkgJiYgaXNFbGVtZW50U2NhbGVkKG9mZnNldFBhcmVudCk7XG4gIHZhciBkb2N1bWVudEVsZW1lbnQgPSBnZXREb2N1bWVudEVsZW1lbnQob2Zmc2V0UGFyZW50KTtcbiAgdmFyIHJlY3QgPSBnZXRCb3VuZGluZ0NsaWVudFJlY3QoZWxlbWVudE9yVmlydHVhbEVsZW1lbnQsIG9mZnNldFBhcmVudElzU2NhbGVkKTtcbiAgdmFyIHNjcm9sbCA9IHtcbiAgICBzY3JvbGxMZWZ0OiAwLFxuICAgIHNjcm9sbFRvcDogMFxuICB9O1xuICB2YXIgb2Zmc2V0cyA9IHtcbiAgICB4OiAwLFxuICAgIHk6IDBcbiAgfTtcblxuICBpZiAoaXNPZmZzZXRQYXJlbnRBbkVsZW1lbnQgfHwgIWlzT2Zmc2V0UGFyZW50QW5FbGVtZW50ICYmICFpc0ZpeGVkKSB7XG4gICAgaWYgKGdldE5vZGVOYW1lKG9mZnNldFBhcmVudCkgIT09ICdib2R5JyB8fCAvLyBodHRwczovL2dpdGh1Yi5jb20vcG9wcGVyanMvcG9wcGVyLWNvcmUvaXNzdWVzLzEwNzhcbiAgICBpc1Njcm9sbFBhcmVudChkb2N1bWVudEVsZW1lbnQpKSB7XG4gICAgICBzY3JvbGwgPSBnZXROb2RlU2Nyb2xsKG9mZnNldFBhcmVudCk7XG4gICAgfVxuXG4gICAgaWYgKGlzSFRNTEVsZW1lbnQob2Zmc2V0UGFyZW50KSkge1xuICAgICAgb2Zmc2V0cyA9IGdldEJvdW5kaW5nQ2xpZW50UmVjdChvZmZzZXRQYXJlbnQsIHRydWUpO1xuICAgICAgb2Zmc2V0cy54ICs9IG9mZnNldFBhcmVudC5jbGllbnRMZWZ0O1xuICAgICAgb2Zmc2V0cy55ICs9IG9mZnNldFBhcmVudC5jbGllbnRUb3A7XG4gICAgfSBlbHNlIGlmIChkb2N1bWVudEVsZW1lbnQpIHtcbiAgICAgIG9mZnNldHMueCA9IGdldFdpbmRvd1Njcm9sbEJhclgoZG9jdW1lbnRFbGVtZW50KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHg6IHJlY3QubGVmdCArIHNjcm9sbC5zY3JvbGxMZWZ0IC0gb2Zmc2V0cy54LFxuICAgIHk6IHJlY3QudG9wICsgc2Nyb2xsLnNjcm9sbFRvcCAtIG9mZnNldHMueSxcbiAgICB3aWR0aDogcmVjdC53aWR0aCxcbiAgICBoZWlnaHQ6IHJlY3QuaGVpZ2h0XG4gIH07XG59IiwiaW1wb3J0IGdldFdpbmRvd1Njcm9sbCBmcm9tIFwiLi9nZXRXaW5kb3dTY3JvbGwuanNcIjtcbmltcG9ydCBnZXRXaW5kb3cgZnJvbSBcIi4vZ2V0V2luZG93LmpzXCI7XG5pbXBvcnQgeyBpc0hUTUxFbGVtZW50IH0gZnJvbSBcIi4vaW5zdGFuY2VPZi5qc1wiO1xuaW1wb3J0IGdldEhUTUxFbGVtZW50U2Nyb2xsIGZyb20gXCIuL2dldEhUTUxFbGVtZW50U2Nyb2xsLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXROb2RlU2Nyb2xsKG5vZGUpIHtcbiAgaWYgKG5vZGUgPT09IGdldFdpbmRvdyhub2RlKSB8fCAhaXNIVE1MRWxlbWVudChub2RlKSkge1xuICAgIHJldHVybiBnZXRXaW5kb3dTY3JvbGwobm9kZSk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGdldEhUTUxFbGVtZW50U2Nyb2xsKG5vZGUpO1xuICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0SFRNTEVsZW1lbnRTY3JvbGwoZWxlbWVudCkge1xuICByZXR1cm4ge1xuICAgIHNjcm9sbExlZnQ6IGVsZW1lbnQuc2Nyb2xsTGVmdCxcbiAgICBzY3JvbGxUb3A6IGVsZW1lbnQuc2Nyb2xsVG9wXG4gIH07XG59IiwiaW1wb3J0IHsgbW9kaWZpZXJQaGFzZXMgfSBmcm9tIFwiLi4vZW51bXMuanNcIjsgLy8gc291cmNlOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy80OTg3NTI1NVxuXG5mdW5jdGlvbiBvcmRlcihtb2RpZmllcnMpIHtcbiAgdmFyIG1hcCA9IG5ldyBNYXAoKTtcbiAgdmFyIHZpc2l0ZWQgPSBuZXcgU2V0KCk7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgbW9kaWZpZXJzLmZvckVhY2goZnVuY3Rpb24gKG1vZGlmaWVyKSB7XG4gICAgbWFwLnNldChtb2RpZmllci5uYW1lLCBtb2RpZmllcik7XG4gIH0pOyAvLyBPbiB2aXNpdGluZyBvYmplY3QsIGNoZWNrIGZvciBpdHMgZGVwZW5kZW5jaWVzIGFuZCB2aXNpdCB0aGVtIHJlY3Vyc2l2ZWx5XG5cbiAgZnVuY3Rpb24gc29ydChtb2RpZmllcikge1xuICAgIHZpc2l0ZWQuYWRkKG1vZGlmaWVyLm5hbWUpO1xuICAgIHZhciByZXF1aXJlcyA9IFtdLmNvbmNhdChtb2RpZmllci5yZXF1aXJlcyB8fCBbXSwgbW9kaWZpZXIucmVxdWlyZXNJZkV4aXN0cyB8fCBbXSk7XG4gICAgcmVxdWlyZXMuZm9yRWFjaChmdW5jdGlvbiAoZGVwKSB7XG4gICAgICBpZiAoIXZpc2l0ZWQuaGFzKGRlcCkpIHtcbiAgICAgICAgdmFyIGRlcE1vZGlmaWVyID0gbWFwLmdldChkZXApO1xuXG4gICAgICAgIGlmIChkZXBNb2RpZmllcikge1xuICAgICAgICAgIHNvcnQoZGVwTW9kaWZpZXIpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmVzdWx0LnB1c2gobW9kaWZpZXIpO1xuICB9XG5cbiAgbW9kaWZpZXJzLmZvckVhY2goZnVuY3Rpb24gKG1vZGlmaWVyKSB7XG4gICAgaWYgKCF2aXNpdGVkLmhhcyhtb2RpZmllci5uYW1lKSkge1xuICAgICAgLy8gY2hlY2sgZm9yIHZpc2l0ZWQgb2JqZWN0XG4gICAgICBzb3J0KG1vZGlmaWVyKTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBvcmRlck1vZGlmaWVycyhtb2RpZmllcnMpIHtcbiAgLy8gb3JkZXIgYmFzZWQgb24gZGVwZW5kZW5jaWVzXG4gIHZhciBvcmRlcmVkTW9kaWZpZXJzID0gb3JkZXIobW9kaWZpZXJzKTsgLy8gb3JkZXIgYmFzZWQgb24gcGhhc2VcblxuICByZXR1cm4gbW9kaWZpZXJQaGFzZXMucmVkdWNlKGZ1bmN0aW9uIChhY2MsIHBoYXNlKSB7XG4gICAgcmV0dXJuIGFjYy5jb25jYXQob3JkZXJlZE1vZGlmaWVycy5maWx0ZXIoZnVuY3Rpb24gKG1vZGlmaWVyKSB7XG4gICAgICByZXR1cm4gbW9kaWZpZXIucGhhc2UgPT09IHBoYXNlO1xuICAgIH0pKTtcbiAgfSwgW10pO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRlYm91bmNlKGZuKSB7XG4gIHZhciBwZW5kaW5nO1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIGlmICghcGVuZGluZykge1xuICAgICAgcGVuZGluZyA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gICAgICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHBlbmRpbmcgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgcmVzb2x2ZShmbigpKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcGVuZGluZztcbiAgfTtcbn0iLCJpbXBvcnQgZm9ybWF0IGZyb20gXCIuL2Zvcm1hdC5qc1wiO1xuaW1wb3J0IHsgbW9kaWZpZXJQaGFzZXMgfSBmcm9tIFwiLi4vZW51bXMuanNcIjtcbnZhciBJTlZBTElEX01PRElGSUVSX0VSUk9SID0gJ1BvcHBlcjogbW9kaWZpZXIgXCIlc1wiIHByb3ZpZGVkIGFuIGludmFsaWQgJXMgcHJvcGVydHksIGV4cGVjdGVkICVzIGJ1dCBnb3QgJXMnO1xudmFyIE1JU1NJTkdfREVQRU5ERU5DWV9FUlJPUiA9ICdQb3BwZXI6IG1vZGlmaWVyIFwiJXNcIiByZXF1aXJlcyBcIiVzXCIsIGJ1dCBcIiVzXCIgbW9kaWZpZXIgaXMgbm90IGF2YWlsYWJsZSc7XG52YXIgVkFMSURfUFJPUEVSVElFUyA9IFsnbmFtZScsICdlbmFibGVkJywgJ3BoYXNlJywgJ2ZuJywgJ2VmZmVjdCcsICdyZXF1aXJlcycsICdvcHRpb25zJ107XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2YWxpZGF0ZU1vZGlmaWVycyhtb2RpZmllcnMpIHtcbiAgbW9kaWZpZXJzLmZvckVhY2goZnVuY3Rpb24gKG1vZGlmaWVyKSB7XG4gICAgW10uY29uY2F0KE9iamVjdC5rZXlzKG1vZGlmaWVyKSwgVkFMSURfUFJPUEVSVElFUykgLy8gSUUxMS1jb21wYXRpYmxlIHJlcGxhY2VtZW50IGZvciBgbmV3IFNldChpdGVyYWJsZSlgXG4gICAgLmZpbHRlcihmdW5jdGlvbiAodmFsdWUsIGluZGV4LCBzZWxmKSB7XG4gICAgICByZXR1cm4gc2VsZi5pbmRleE9mKHZhbHVlKSA9PT0gaW5kZXg7XG4gICAgfSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICBzd2l0Y2ggKGtleSkge1xuICAgICAgICBjYXNlICduYW1lJzpcbiAgICAgICAgICBpZiAodHlwZW9mIG1vZGlmaWVyLm5hbWUgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGZvcm1hdChJTlZBTElEX01PRElGSUVSX0VSUk9SLCBTdHJpbmcobW9kaWZpZXIubmFtZSksICdcIm5hbWVcIicsICdcInN0cmluZ1wiJywgXCJcXFwiXCIgKyBTdHJpbmcobW9kaWZpZXIubmFtZSkgKyBcIlxcXCJcIikpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ2VuYWJsZWQnOlxuICAgICAgICAgIGlmICh0eXBlb2YgbW9kaWZpZXIuZW5hYmxlZCAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGZvcm1hdChJTlZBTElEX01PRElGSUVSX0VSUk9SLCBtb2RpZmllci5uYW1lLCAnXCJlbmFibGVkXCInLCAnXCJib29sZWFuXCInLCBcIlxcXCJcIiArIFN0cmluZyhtb2RpZmllci5lbmFibGVkKSArIFwiXFxcIlwiKSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAncGhhc2UnOlxuICAgICAgICAgIGlmIChtb2RpZmllclBoYXNlcy5pbmRleE9mKG1vZGlmaWVyLnBoYXNlKSA8IDApIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZm9ybWF0KElOVkFMSURfTU9ESUZJRVJfRVJST1IsIG1vZGlmaWVyLm5hbWUsICdcInBoYXNlXCInLCBcImVpdGhlciBcIiArIG1vZGlmaWVyUGhhc2VzLmpvaW4oJywgJyksIFwiXFxcIlwiICsgU3RyaW5nKG1vZGlmaWVyLnBoYXNlKSArIFwiXFxcIlwiKSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnZm4nOlxuICAgICAgICAgIGlmICh0eXBlb2YgbW9kaWZpZXIuZm4gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZm9ybWF0KElOVkFMSURfTU9ESUZJRVJfRVJST1IsIG1vZGlmaWVyLm5hbWUsICdcImZuXCInLCAnXCJmdW5jdGlvblwiJywgXCJcXFwiXCIgKyBTdHJpbmcobW9kaWZpZXIuZm4pICsgXCJcXFwiXCIpKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdlZmZlY3QnOlxuICAgICAgICAgIGlmIChtb2RpZmllci5lZmZlY3QgIT0gbnVsbCAmJiB0eXBlb2YgbW9kaWZpZXIuZWZmZWN0ICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGZvcm1hdChJTlZBTElEX01PRElGSUVSX0VSUk9SLCBtb2RpZmllci5uYW1lLCAnXCJlZmZlY3RcIicsICdcImZ1bmN0aW9uXCInLCBcIlxcXCJcIiArIFN0cmluZyhtb2RpZmllci5mbikgKyBcIlxcXCJcIikpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ3JlcXVpcmVzJzpcbiAgICAgICAgICBpZiAobW9kaWZpZXIucmVxdWlyZXMgIT0gbnVsbCAmJiAhQXJyYXkuaXNBcnJheShtb2RpZmllci5yZXF1aXJlcykpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZm9ybWF0KElOVkFMSURfTU9ESUZJRVJfRVJST1IsIG1vZGlmaWVyLm5hbWUsICdcInJlcXVpcmVzXCInLCAnXCJhcnJheVwiJywgXCJcXFwiXCIgKyBTdHJpbmcobW9kaWZpZXIucmVxdWlyZXMpICsgXCJcXFwiXCIpKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdyZXF1aXJlc0lmRXhpc3RzJzpcbiAgICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkobW9kaWZpZXIucmVxdWlyZXNJZkV4aXN0cykpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZm9ybWF0KElOVkFMSURfTU9ESUZJRVJfRVJST1IsIG1vZGlmaWVyLm5hbWUsICdcInJlcXVpcmVzSWZFeGlzdHNcIicsICdcImFycmF5XCInLCBcIlxcXCJcIiArIFN0cmluZyhtb2RpZmllci5yZXF1aXJlc0lmRXhpc3RzKSArIFwiXFxcIlwiKSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnb3B0aW9ucyc6XG4gICAgICAgIGNhc2UgJ2RhdGEnOlxuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgY29uc29sZS5lcnJvcihcIlBvcHBlckpTOiBhbiBpbnZhbGlkIHByb3BlcnR5IGhhcyBiZWVuIHByb3ZpZGVkIHRvIHRoZSBcXFwiXCIgKyBtb2RpZmllci5uYW1lICsgXCJcXFwiIG1vZGlmaWVyLCB2YWxpZCBwcm9wZXJ0aWVzIGFyZSBcIiArIFZBTElEX1BST1BFUlRJRVMubWFwKGZ1bmN0aW9uIChzKSB7XG4gICAgICAgICAgICByZXR1cm4gXCJcXFwiXCIgKyBzICsgXCJcXFwiXCI7XG4gICAgICAgICAgfSkuam9pbignLCAnKSArIFwiOyBidXQgXFxcIlwiICsga2V5ICsgXCJcXFwiIHdhcyBwcm92aWRlZC5cIik7XG4gICAgICB9XG5cbiAgICAgIG1vZGlmaWVyLnJlcXVpcmVzICYmIG1vZGlmaWVyLnJlcXVpcmVzLmZvckVhY2goZnVuY3Rpb24gKHJlcXVpcmVtZW50KSB7XG4gICAgICAgIGlmIChtb2RpZmllcnMuZmluZChmdW5jdGlvbiAobW9kKSB7XG4gICAgICAgICAgcmV0dXJuIG1vZC5uYW1lID09PSByZXF1aXJlbWVudDtcbiAgICAgICAgfSkgPT0gbnVsbCkge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZm9ybWF0KE1JU1NJTkdfREVQRU5ERU5DWV9FUlJPUiwgU3RyaW5nKG1vZGlmaWVyLm5hbWUpLCByZXF1aXJlbWVudCwgcmVxdWlyZW1lbnQpKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH0pO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZvcm1hdChzdHIpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIGFyZ3NbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgcmV0dXJuIFtdLmNvbmNhdChhcmdzKS5yZWR1Y2UoZnVuY3Rpb24gKHAsIGMpIHtcbiAgICByZXR1cm4gcC5yZXBsYWNlKC8lcy8sIGMpO1xuICB9LCBzdHIpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVuaXF1ZUJ5KGFyciwgZm4pIHtcbiAgdmFyIGlkZW50aWZpZXJzID0gbmV3IFNldCgpO1xuICByZXR1cm4gYXJyLmZpbHRlcihmdW5jdGlvbiAoaXRlbSkge1xuICAgIHZhciBpZGVudGlmaWVyID0gZm4oaXRlbSk7XG5cbiAgICBpZiAoIWlkZW50aWZpZXJzLmhhcyhpZGVudGlmaWVyKSkge1xuICAgICAgaWRlbnRpZmllcnMuYWRkKGlkZW50aWZpZXIpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtZXJnZUJ5TmFtZShtb2RpZmllcnMpIHtcbiAgdmFyIG1lcmdlZCA9IG1vZGlmaWVycy5yZWR1Y2UoZnVuY3Rpb24gKG1lcmdlZCwgY3VycmVudCkge1xuICAgIHZhciBleGlzdGluZyA9IG1lcmdlZFtjdXJyZW50Lm5hbWVdO1xuICAgIG1lcmdlZFtjdXJyZW50Lm5hbWVdID0gZXhpc3RpbmcgPyBPYmplY3QuYXNzaWduKHt9LCBleGlzdGluZywgY3VycmVudCwge1xuICAgICAgb3B0aW9uczogT2JqZWN0LmFzc2lnbih7fSwgZXhpc3Rpbmcub3B0aW9ucywgY3VycmVudC5vcHRpb25zKSxcbiAgICAgIGRhdGE6IE9iamVjdC5hc3NpZ24oe30sIGV4aXN0aW5nLmRhdGEsIGN1cnJlbnQuZGF0YSlcbiAgICB9KSA6IGN1cnJlbnQ7XG4gICAgcmV0dXJuIG1lcmdlZDtcbiAgfSwge30pOyAvLyBJRTExIGRvZXMgbm90IHN1cHBvcnQgT2JqZWN0LnZhbHVlc1xuXG4gIHJldHVybiBPYmplY3Qua2V5cyhtZXJnZWQpLm1hcChmdW5jdGlvbiAoa2V5KSB7XG4gICAgcmV0dXJuIG1lcmdlZFtrZXldO1xuICB9KTtcbn0iLCJpbXBvcnQgeyBwb3BwZXJHZW5lcmF0b3IsIGRldGVjdE92ZXJmbG93IH0gZnJvbSBcIi4vY3JlYXRlUG9wcGVyLmpzXCI7XG5pbXBvcnQgZXZlbnRMaXN0ZW5lcnMgZnJvbSBcIi4vbW9kaWZpZXJzL2V2ZW50TGlzdGVuZXJzLmpzXCI7XG5pbXBvcnQgcG9wcGVyT2Zmc2V0cyBmcm9tIFwiLi9tb2RpZmllcnMvcG9wcGVyT2Zmc2V0cy5qc1wiO1xuaW1wb3J0IGNvbXB1dGVTdHlsZXMgZnJvbSBcIi4vbW9kaWZpZXJzL2NvbXB1dGVTdHlsZXMuanNcIjtcbmltcG9ydCBhcHBseVN0eWxlcyBmcm9tIFwiLi9tb2RpZmllcnMvYXBwbHlTdHlsZXMuanNcIjtcbmltcG9ydCBvZmZzZXQgZnJvbSBcIi4vbW9kaWZpZXJzL29mZnNldC5qc1wiO1xuaW1wb3J0IGZsaXAgZnJvbSBcIi4vbW9kaWZpZXJzL2ZsaXAuanNcIjtcbmltcG9ydCBwcmV2ZW50T3ZlcmZsb3cgZnJvbSBcIi4vbW9kaWZpZXJzL3ByZXZlbnRPdmVyZmxvdy5qc1wiO1xuaW1wb3J0IGFycm93IGZyb20gXCIuL21vZGlmaWVycy9hcnJvdy5qc1wiO1xuaW1wb3J0IGhpZGUgZnJvbSBcIi4vbW9kaWZpZXJzL2hpZGUuanNcIjtcbnZhciBkZWZhdWx0TW9kaWZpZXJzID0gW2V2ZW50TGlzdGVuZXJzLCBwb3BwZXJPZmZzZXRzLCBjb21wdXRlU3R5bGVzLCBhcHBseVN0eWxlcywgb2Zmc2V0LCBmbGlwLCBwcmV2ZW50T3ZlcmZsb3csIGFycm93LCBoaWRlXTtcbnZhciBjcmVhdGVQb3BwZXIgPSAvKiNfX1BVUkVfXyovcG9wcGVyR2VuZXJhdG9yKHtcbiAgZGVmYXVsdE1vZGlmaWVyczogZGVmYXVsdE1vZGlmaWVyc1xufSk7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuZXhwb3J0IHsgY3JlYXRlUG9wcGVyLCBwb3BwZXJHZW5lcmF0b3IsIGRlZmF1bHRNb2RpZmllcnMsIGRldGVjdE92ZXJmbG93IH07IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuZXhwb3J0IHsgY3JlYXRlUG9wcGVyIGFzIGNyZWF0ZVBvcHBlckxpdGUgfSBmcm9tIFwiLi9wb3BwZXItbGl0ZS5qc1wiOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cbmV4cG9ydCAqIGZyb20gXCIuL21vZGlmaWVycy9pbmRleC5qc1wiOyJdLCJuYW1lcyI6WyJST1VORF9BUlJPVyIsIkJPWF9DTEFTUyIsIkNPTlRFTlRfQ0xBU1MiLCJCQUNLRFJPUF9DTEFTUyIsIkFSUk9XX0NMQVNTIiwiU1ZHX0FSUk9XX0NMQVNTIiwiVE9VQ0hfT1BUSU9OUyIsInBhc3NpdmUiLCJjYXB0dXJlIiwiVElQUFlfREVGQVVMVF9BUFBFTkRfVE8iLCJkb2N1bWVudCIsImJvZHkiLCJoYXNPd25Qcm9wZXJ0eSIsIm9iaiIsImtleSIsImNhbGwiLCJnZXRWYWx1ZUF0SW5kZXhPclJldHVybiIsInZhbHVlIiwiaW5kZXgiLCJkZWZhdWx0VmFsdWUiLCJBcnJheSIsImlzQXJyYXkiLCJ2IiwiaXNUeXBlIiwidHlwZSIsInN0ciIsInRvU3RyaW5nIiwiaW5kZXhPZiIsImludm9rZVdpdGhBcmdzT3JSZXR1cm4iLCJhcmdzIiwiZGVib3VuY2UiLCJmbiIsIm1zIiwidGltZW91dCIsImFyZyIsImNsZWFyVGltZW91dCIsInNldFRpbWVvdXQiLCJyZW1vdmVQcm9wZXJ0aWVzIiwia2V5cyIsImNsb25lIiwiZm9yRWFjaCIsInNwbGl0QnlTcGFjZXMiLCJzcGxpdCIsImZpbHRlciIsIkJvb2xlYW4iLCJub3JtYWxpemVUb0FycmF5IiwiY29uY2F0IiwicHVzaElmVW5pcXVlIiwiYXJyIiwicHVzaCIsInVuaXF1ZSIsIml0ZW0iLCJnZXRCYXNlUGxhY2VtZW50IiwicGxhY2VtZW50IiwiYXJyYXlGcm9tIiwic2xpY2UiLCJyZW1vdmVVbmRlZmluZWRQcm9wcyIsIk9iamVjdCIsInJlZHVjZSIsImFjYyIsInVuZGVmaW5lZCIsImRpdiIsImNyZWF0ZUVsZW1lbnQiLCJpc0VsZW1lbnQiLCJzb21lIiwiaXNOb2RlTGlzdCIsImlzTW91c2VFdmVudCIsImlzUmVmZXJlbmNlRWxlbWVudCIsIl90aXBweSIsInJlZmVyZW5jZSIsImdldEFycmF5T2ZFbGVtZW50cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJzZXRUcmFuc2l0aW9uRHVyYXRpb24iLCJlbHMiLCJlbCIsInN0eWxlIiwidHJhbnNpdGlvbkR1cmF0aW9uIiwic2V0VmlzaWJpbGl0eVN0YXRlIiwic3RhdGUiLCJzZXRBdHRyaWJ1dGUiLCJnZXRPd25lckRvY3VtZW50IiwiZWxlbWVudE9yRWxlbWVudHMiLCJlbGVtZW50Iiwib3duZXJEb2N1bWVudCIsImlzQ3Vyc29yT3V0c2lkZUludGVyYWN0aXZlQm9yZGVyIiwicG9wcGVyVHJlZURhdGEiLCJldmVudCIsImNsaWVudFgiLCJjbGllbnRZIiwiZXZlcnkiLCJwb3BwZXJSZWN0IiwicG9wcGVyU3RhdGUiLCJwcm9wcyIsImludGVyYWN0aXZlQm9yZGVyIiwiYmFzZVBsYWNlbWVudCIsIm9mZnNldERhdGEiLCJtb2RpZmllcnNEYXRhIiwib2Zmc2V0IiwidG9wRGlzdGFuY2UiLCJ0b3AiLCJ5IiwiYm90dG9tRGlzdGFuY2UiLCJib3R0b20iLCJsZWZ0RGlzdGFuY2UiLCJsZWZ0IiwieCIsInJpZ2h0RGlzdGFuY2UiLCJyaWdodCIsImV4Y2VlZHNUb3AiLCJleGNlZWRzQm90dG9tIiwiZXhjZWVkc0xlZnQiLCJleGNlZWRzUmlnaHQiLCJ1cGRhdGVUcmFuc2l0aW9uRW5kTGlzdGVuZXIiLCJib3giLCJhY3Rpb24iLCJsaXN0ZW5lciIsIm1ldGhvZCIsImFjdHVhbENvbnRhaW5zIiwicGFyZW50IiwiY2hpbGQiLCJ0YXJnZXQiLCJjb250YWlucyIsImdldFJvb3ROb2RlIiwiaG9zdCIsImN1cnJlbnRJbnB1dCIsImlzVG91Y2giLCJsYXN0TW91c2VNb3ZlVGltZSIsIm9uRG9jdW1lbnRUb3VjaFN0YXJ0Iiwid2luZG93IiwicGVyZm9ybWFuY2UiLCJhZGRFdmVudExpc3RlbmVyIiwib25Eb2N1bWVudE1vdXNlTW92ZSIsIm5vdyIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJvbldpbmRvd0JsdXIiLCJhY3RpdmVFbGVtZW50IiwiaW5zdGFuY2UiLCJibHVyIiwiaXNWaXNpYmxlIiwiYmluZEdsb2JhbEV2ZW50TGlzdGVuZXJzIiwiaXNCcm93c2VyIiwiaXNJRTExIiwibXNDcnlwdG8iLCJjcmVhdGVNZW1vcnlMZWFrV2FybmluZyIsInR4dCIsImpvaW4iLCJjbGVhbiIsInNwYWNlc0FuZFRhYnMiLCJsaW5lU3RhcnRXaXRoU3BhY2VzIiwicmVwbGFjZSIsInRyaW0iLCJnZXREZXZNZXNzYWdlIiwibWVzc2FnZSIsImdldEZvcm1hdHRlZE1lc3NhZ2UiLCJ2aXNpdGVkTWVzc2FnZXMiLCJyZXNldFZpc2l0ZWRNZXNzYWdlcyIsIlNldCIsIndhcm5XaGVuIiwiY29uZGl0aW9uIiwiaGFzIiwiYWRkIiwiY29uc29sZSIsIndhcm4iLCJlcnJvcldoZW4iLCJlcnJvciIsInZhbGlkYXRlVGFyZ2V0cyIsInRhcmdldHMiLCJkaWRQYXNzRmFsc3lWYWx1ZSIsImRpZFBhc3NQbGFpbk9iamVjdCIsInByb3RvdHlwZSIsIlN0cmluZyIsInBsdWdpblByb3BzIiwiYW5pbWF0ZUZpbGwiLCJmb2xsb3dDdXJzb3IiLCJpbmxpbmVQb3NpdGlvbmluZyIsInN0aWNreSIsInJlbmRlclByb3BzIiwiYWxsb3dIVE1MIiwiYW5pbWF0aW9uIiwiYXJyb3ciLCJjb250ZW50IiwiaW5lcnRpYSIsIm1heFdpZHRoIiwicm9sZSIsInRoZW1lIiwiekluZGV4IiwiZGVmYXVsdFByb3BzIiwiYXBwZW5kVG8iLCJhcmlhIiwiZXhwYW5kZWQiLCJkZWxheSIsImR1cmF0aW9uIiwiZ2V0UmVmZXJlbmNlQ2xpZW50UmVjdCIsImhpZGVPbkNsaWNrIiwiaWdub3JlQXR0cmlidXRlcyIsImludGVyYWN0aXZlIiwiaW50ZXJhY3RpdmVEZWJvdW5jZSIsIm1vdmVUcmFuc2l0aW9uIiwib25BZnRlclVwZGF0ZSIsIm9uQmVmb3JlVXBkYXRlIiwib25DcmVhdGUiLCJvbkRlc3Ryb3kiLCJvbkhpZGRlbiIsIm9uSGlkZSIsIm9uTW91bnQiLCJvblNob3ciLCJvblNob3duIiwib25UcmlnZ2VyIiwib25VbnRyaWdnZXIiLCJvbkNsaWNrT3V0c2lkZSIsInBsdWdpbnMiLCJwb3BwZXJPcHRpb25zIiwicmVuZGVyIiwic2hvd09uQ3JlYXRlIiwidG91Y2giLCJ0cmlnZ2VyIiwidHJpZ2dlclRhcmdldCIsImRlZmF1bHRLZXlzIiwic2V0RGVmYXVsdFByb3BzIiwicGFydGlhbFByb3BzIiwidmFsaWRhdGVQcm9wcyIsImdldEV4dGVuZGVkUGFzc2VkUHJvcHMiLCJwYXNzZWRQcm9wcyIsInBsdWdpbiIsIm5hbWUiLCJnZXREYXRhQXR0cmlidXRlUHJvcHMiLCJwcm9wS2V5cyIsInZhbHVlQXNTdHJpbmciLCJnZXRBdHRyaWJ1dGUiLCJKU09OIiwicGFyc2UiLCJlIiwiZXZhbHVhdGVQcm9wcyIsIm91dCIsInByb3AiLCJub25QbHVnaW5Qcm9wcyIsImRpZFBhc3NVbmtub3duUHJvcCIsImxlbmd0aCIsImlubmVySFRNTCIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiaHRtbCIsImNyZWF0ZUFycm93RWxlbWVudCIsImNsYXNzTmFtZSIsImFwcGVuZENoaWxkIiwic2V0Q29udGVudCIsInRleHRDb250ZW50IiwiZ2V0Q2hpbGRyZW4iLCJwb3BwZXIiLCJmaXJzdEVsZW1lbnRDaGlsZCIsImJveENoaWxkcmVuIiwiY2hpbGRyZW4iLCJmaW5kIiwibm9kZSIsImNsYXNzTGlzdCIsImJhY2tkcm9wIiwib25VcGRhdGUiLCJwcmV2UHJvcHMiLCJuZXh0UHJvcHMiLCJyZW1vdmVBdHRyaWJ1dGUiLCJyZW1vdmVDaGlsZCIsIiQkdGlwcHkiLCJpZENvdW50ZXIiLCJtb3VzZU1vdmVMaXN0ZW5lcnMiLCJtb3VudGVkSW5zdGFuY2VzIiwiY3JlYXRlVGlwcHkiLCJzaG93VGltZW91dCIsImhpZGVUaW1lb3V0Iiwic2NoZWR1bGVIaWRlQW5pbWF0aW9uRnJhbWUiLCJpc1Zpc2libGVGcm9tQ2xpY2siLCJkaWRIaWRlRHVlVG9Eb2N1bWVudE1vdXNlRG93biIsImRpZFRvdWNoTW92ZSIsImlnbm9yZU9uRmlyc3RVcGRhdGUiLCJsYXN0VHJpZ2dlckV2ZW50IiwiY3VycmVudFRyYW5zaXRpb25FbmRMaXN0ZW5lciIsIm9uRmlyc3RVcGRhdGUiLCJsaXN0ZW5lcnMiLCJkZWJvdW5jZWRPbk1vdXNlTW92ZSIsIm9uTW91c2VNb3ZlIiwiY3VycmVudFRhcmdldCIsImlkIiwicG9wcGVySW5zdGFuY2UiLCJpc0VuYWJsZWQiLCJpc0Rlc3Ryb3llZCIsImlzTW91bnRlZCIsImlzU2hvd24iLCJjbGVhckRlbGF5VGltZW91dHMiLCJzZXRQcm9wcyIsInNob3ciLCJoaWRlIiwiaGlkZVdpdGhJbnRlcmFjdGl2aXR5IiwiZW5hYmxlIiwiZGlzYWJsZSIsInVubW91bnQiLCJkZXN0cm95IiwicGx1Z2luc0hvb2tzIiwibWFwIiwiaGFzQXJpYUV4cGFuZGVkIiwiaGFzQXR0cmlidXRlIiwiYWRkTGlzdGVuZXJzIiwiaGFuZGxlQXJpYUV4cGFuZGVkQXR0cmlidXRlIiwiaGFuZGxlU3R5bGVzIiwiaW52b2tlSG9vayIsInNjaGVkdWxlU2hvdyIsImdldERvY3VtZW50IiwiZ2V0Tm9ybWFsaXplZFRvdWNoU2V0dGluZ3MiLCJnZXRJc0N1c3RvbVRvdWNoQmVoYXZpb3IiLCJnZXRJc0RlZmF1bHRSZW5kZXJGbiIsImdldEN1cnJlbnRUYXJnZXQiLCJwYXJlbnROb2RlIiwiZ2V0RGVmYXVsdFRlbXBsYXRlQ2hpbGRyZW4iLCJnZXREZWxheSIsImlzU2hvdyIsImZyb21IaWRlIiwicG9pbnRlckV2ZW50cyIsImhvb2siLCJzaG91bGRJbnZva2VQcm9wc0hvb2siLCJwbHVnaW5Ib29rcyIsImhhbmRsZUFyaWFDb250ZW50QXR0cmlidXRlIiwiYXR0ciIsIm5vZGVzIiwiY3VycmVudFZhbHVlIiwibmV4dFZhbHVlIiwiY2xlYW51cEludGVyYWN0aXZlTW91c2VMaXN0ZW5lcnMiLCJvbkRvY3VtZW50UHJlc3MiLCJhY3R1YWxUYXJnZXQiLCJjb21wb3NlZFBhdGgiLCJyZW1vdmVEb2N1bWVudFByZXNzIiwib25Ub3VjaE1vdmUiLCJvblRvdWNoU3RhcnQiLCJhZGREb2N1bWVudFByZXNzIiwiZG9jIiwib25UcmFuc2l0aW9uZWRPdXQiLCJjYWxsYmFjayIsIm9uVHJhbnNpdGlvbkVuZCIsIm9uVHJhbnNpdGlvbmVkSW4iLCJvbiIsImV2ZW50VHlwZSIsImhhbmRsZXIiLCJvcHRpb25zIiwib25Nb3VzZUxlYXZlIiwib25CbHVyT3JGb2N1c091dCIsInJlbW92ZUxpc3RlbmVycyIsInNob3VsZFNjaGVkdWxlQ2xpY2tIaWRlIiwiaXNFdmVudExpc3RlbmVyU3RvcHBlZCIsIndhc0ZvY3VzZWQiLCJzY2hlZHVsZUhpZGUiLCJpc0N1cnNvck92ZXJSZWZlcmVuY2VPclBvcHBlciIsImdldE5lc3RlZFBvcHBlclRyZWUiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJzaG91bGRCYWlsIiwicmVsYXRlZFRhcmdldCIsImNyZWF0ZVBvcHBlckluc3RhbmNlIiwiZGVzdHJveVBvcHBlckluc3RhbmNlIiwiY29tcHV0ZWRSZWZlcmVuY2UiLCJjb250ZXh0RWxlbWVudCIsInRpcHB5TW9kaWZpZXIiLCJlbmFibGVkIiwicGhhc2UiLCJyZXF1aXJlcyIsImF0dHJpYnV0ZXMiLCJtb2RpZmllcnMiLCJwYWRkaW5nIiwiYWRhcHRpdmUiLCJjcmVhdGVQb3BwZXIiLCJtb3VudCIsIm5leHRFbGVtZW50U2libGluZyIsInRvdWNoVmFsdWUiLCJ0b3VjaERlbGF5IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJuZXN0ZWRQb3BwZXIiLCJmb3JjZVVwZGF0ZSIsImlzQWxyZWFkeVZpc2libGUiLCJpc0Rpc2FibGVkIiwiaXNUb3VjaEFuZFRvdWNoRGlzYWJsZWQiLCJ2aXNpYmlsaXR5IiwidHJhbnNpdGlvbiIsIm9mZnNldEhlaWdodCIsImlzQWxyZWFkeUhpZGRlbiIsImkiLCJ0aXBweSIsIm9wdGlvbmFsUHJvcHMiLCJlbGVtZW50cyIsImlzU2luZ2xlQ29udGVudEVsZW1lbnQiLCJpc01vcmVUaGFuT25lUmVmZXJlbmNlRWxlbWVudCIsImluc3RhbmNlcyIsImhpZGVBbGwiLCJleGNsdWRlZFJlZmVyZW5jZU9ySW5zdGFuY2UiLCJleGNsdWRlIiwiaXNFeGNsdWRlZCIsIm9yaWdpbmFsRHVyYXRpb24iLCJhcHBseVN0eWxlc01vZGlmaWVyIiwiYXBwbHlTdHlsZXMiLCJlZmZlY3QiLCJpbml0aWFsU3R5bGVzIiwicG9zaXRpb24iLCJzdHJhdGVneSIsIm1hcmdpbiIsImFzc2lnbiIsInN0eWxlcyIsImNyZWF0ZVNpbmdsZXRvbiIsInRpcHB5SW5zdGFuY2VzIiwiaW5kaXZpZHVhbEluc3RhbmNlcyIsInJlZmVyZW5jZXMiLCJ0cmlnZ2VyVGFyZ2V0cyIsIm92ZXJyaWRlcyIsImludGVyY2VwdFNldFByb3BzQ2xlYW51cHMiLCJzaG93bk9uQ3JlYXRlIiwic2V0VHJpZ2dlclRhcmdldHMiLCJzZXRSZWZlcmVuY2VzIiwiZW5hYmxlSW5zdGFuY2VzIiwiaW50ZXJjZXB0U2V0UHJvcHMiLCJzaW5nbGV0b24iLCJvcmlnaW5hbFNldFByb3BzIiwicHJlcGFyZUluc3RhbmNlIiwib3ZlcnJpZGVQcm9wcyIsIm9yaWdpbmFsU2hvdyIsInJlZiIsInNob3dOZXh0IiwiZmlyc3QiLCJzaG93UHJldmlvdXMiLCJsYXN0Iiwic2V0SW5zdGFuY2VzIiwibmV4dEluc3RhbmNlcyIsIkJVQkJMSU5HX0VWRU5UU19NQVAiLCJtb3VzZW92ZXIiLCJmb2N1c2luIiwiY2xpY2siLCJkZWxlZ2F0ZSIsImNoaWxkVGlwcHlJbnN0YW5jZXMiLCJkaXNhYmxlZCIsIm5hdGl2ZVByb3BzIiwicGFyZW50UHJvcHMiLCJjaGlsZFByb3BzIiwicmV0dXJuVmFsdWUiLCJub3JtYWxpemVkUmV0dXJuVmFsdWUiLCJ0YXJnZXROb2RlIiwiY2xvc2VzdCIsImFkZEV2ZW50TGlzdGVuZXJzIiwicmVtb3ZlRXZlbnRMaXN0ZW5lcnMiLCJhcHBseU11dGF0aW9ucyIsIm9yaWdpbmFsRGVzdHJveSIsIm9yaWdpbmFsRW5hYmxlIiwib3JpZ2luYWxEaXNhYmxlIiwic2hvdWxkRGVzdHJveUNoaWxkSW5zdGFuY2VzIiwiY3JlYXRlQmFja2Ryb3BFbGVtZW50IiwiaW5zZXJ0QmVmb3JlIiwib3ZlcmZsb3ciLCJOdW1iZXIiLCJ0cmFuc2l0aW9uRGVsYXkiLCJNYXRoIiwicm91bmQiLCJtb3VzZUNvb3JkcyIsImFjdGl2ZUluc3RhbmNlcyIsInN0b3JlTW91c2VDb29yZHMiLCJhZGRNb3VzZUNvb3Jkc0xpc3RlbmVyIiwicmVtb3ZlTW91c2VDb29yZHNMaXN0ZW5lciIsImlzSW50ZXJuYWxVcGRhdGUiLCJ3YXNGb2N1c0V2ZW50IiwiaXNVbm1vdW50ZWQiLCJnZXRJc0luaXRpYWxCZWhhdmlvciIsImFkZExpc3RlbmVyIiwicmVtb3ZlTGlzdGVuZXIiLCJ1bnNldEdldFJlZmVyZW5jZUNsaWVudFJlY3QiLCJpc0N1cnNvck92ZXJSZWZlcmVuY2UiLCJyZWN0IiwicmVsYXRpdmVYIiwicmVsYXRpdmVZIiwid2lkdGgiLCJoZWlnaHQiLCJjcmVhdGUiLCJkYXRhIiwiXyIsImdldFByb3BzIiwibW9kaWZpZXIiLCJjdXJzb3JSZWN0SW5kZXgiLCJ0cmllZFBsYWNlbWVudHMiLCJnZXRJbmxpbmVCb3VuZGluZ0NsaWVudFJlY3QiLCJnZXRDbGllbnRSZWN0cyIsInNldEludGVybmFsUHJvcHMiLCJhZGRNb2RpZmllciIsInJlY3RzIiwiY3Vyc29yUmVjdCIsImN1cnJlbnRCYXNlUGxhY2VtZW50IiwiYm91bmRpbmdSZWN0IiwiY2xpZW50UmVjdHMiLCJmaXJzdFJlY3QiLCJsYXN0UmVjdCIsImlzVG9wIiwibWluTGVmdCIsIm1pbiIsIm1heFJpZ2h0IiwibWF4IiwibWVhc3VyZVJlY3RzIiwiZ2V0UmVmZXJlbmNlIiwic2hvdWxkQ2hlY2siLCJwcmV2UmVmUmVjdCIsInByZXZQb3BSZWN0IiwidXBkYXRlUG9zaXRpb24iLCJjdXJyZW50UmVmUmVjdCIsImN1cnJlbnRQb3BSZWN0IiwiYXJlUmVjdHNEaWZmZXJlbnQiLCJ1cGRhdGUiLCJyZWN0QSIsInJlY3RCIl0sInZlcnNpb24iOjMsImZpbGUiOiJwcmltZXZpZGVvLjEwNThmNGViLmpzLm1hcCJ9
