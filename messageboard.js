/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var parentJsonpFunction = window["webpackJsonp"];
/******/ 	window["webpackJsonp"] = function webpackJsonpCallback(chunkIds, moreModules, executeModules) {
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [], result;
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules, executeModules);
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// objects to store loaded and loading chunks
/******/ 	var installedChunks = {
/******/ 		34: 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData === 0) {
/******/ 			return new Promise(function(resolve) { resolve(); });
/******/ 		}
/******/
/******/ 		// a Promise means "currently loading".
/******/ 		if(installedChunkData) {
/******/ 			return installedChunkData[2];
/******/ 		}
/******/
/******/ 		// setup Promise in chunk cache
/******/ 		var promise = new Promise(function(resolve, reject) {
/******/ 			installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 		});
/******/ 		installedChunkData[2] = promise;
/******/
/******/ 		// start chunk loading
/******/ 		var head = document.getElementsByTagName('head')[0];
/******/ 		var script = document.createElement('script');
/******/ 		script.type = 'text/javascript';
/******/ 		script.charset = 'utf-8';
/******/ 		script.async = true;
/******/ 		script.timeout = 120000;
/******/
/******/ 		if (__webpack_require__.nc) {
/******/ 			script.setAttribute("nonce", __webpack_require__.nc);
/******/ 		}
/******/ 		script.src = __webpack_require__.p + "" + chunkId + ".js";
/******/ 		var timeout = setTimeout(onScriptComplete, 120000);
/******/ 		script.onerror = script.onload = onScriptComplete;
/******/ 		function onScriptComplete() {
/******/ 			// avoid mem leaks in IE.
/******/ 			script.onerror = script.onload = null;
/******/ 			clearTimeout(timeout);
/******/ 			var chunk = installedChunks[chunkId];
/******/ 			if(chunk !== 0) {
/******/ 				if(chunk) {
/******/ 					chunk[1](new Error('Loading chunk ' + chunkId + ' failed.'));
/******/ 				}
/******/ 				installedChunks[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		head.appendChild(script);
/******/
/******/ 		return promise;
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 167);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*! @license Firebase v4.5.0
Build: rev-f49c8b5
Terms: https://firebase.google.com/terms/ */



Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.assertionError = exports.assert = undefined;

var _constants = __webpack_require__(42);

/**
 * Throws an error if the provided assertion is falsy
 * @param {*} assertion The assertion to be tested for falsiness
 * @param {!string} message The message to display if the check fails
 */
var assert = exports.assert = function assert(assertion, message) {
  if (!assertion) {
    throw assertionError(message);
  }
};
/**
 * Returns an Error object suitable for throwing.
 * @param {string} message
 * @return {!Error}
 */
/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var assertionError = exports.assertionError = function assertionError(message) {
  return new Error('Firebase Database (' + _constants.CONSTANTS.SDK_VERSION + ') INTERNAL ASSERT FAILED: ' + message);
};
//# sourceMappingURL=assert.js.map


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*! @license Firebase v4.5.0
Build: rev-f49c8b5
Terms: https://firebase.google.com/terms/ */



Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.setTimeoutNonBlocking = exports.exportPropGetter = exports.beingCrawled = exports.callUserCallback = exports.exceptionGuard = exports.tryParseInt = exports.INTEGER_REGEXP_ = exports.errorForServerCode = exports.isWindowsStoreApp = exports.isChromeExtensionContentScript = exports.doubleToIEEE754String = exports.bindCallback = exports.each = exports.splitStringBySize = exports.ObjectToUniqueKey = exports.requireKey = exports.stringCompare = exports.nameCompare = exports.MAX_NAME = exports.MIN_NAME = exports.executeWhenDOMReady = exports.isInvalidJSONNumber = exports.warnAboutUnsupportedMethod = exports.warnIfPageIsSecure = exports.warn = exports.fatal = exports.error = exports.logWrapper = exports.log = exports.enableLogging = exports.logger = exports.sha1 = exports.base64Decode = exports.base64Encode = exports.LUIDGenerator = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /**
                                                                                                                                                                                                                                                                               * Copyright 2017 Google Inc.
                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                               * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                               * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                               * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                               *   http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                               * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                               * distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                               * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                               * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                               * limitations under the License.
                                                                                                                                                                                                                                                                               */


exports.setBufferImpl = setBufferImpl;

var _assert = __webpack_require__(2);

var _obj = __webpack_require__(4);

var _crypt = __webpack_require__(128);

var _Sha = __webpack_require__(127);

var _utf = __webpack_require__(50);

var _json = __webpack_require__(14);

var _storage = __webpack_require__(38);

var _environment = __webpack_require__(31);

/**
 * Returns a locally-unique ID (generated by just incrementing up from 0 each time its called).
 * @type {function(): number} Generated ID.
 */
var LUIDGenerator = exports.LUIDGenerator = function () {
    var id = 1;
    return function () {
        return id++;
    };
}();
/**
 * URL-safe base64 encoding
 * @param {!string} str
 * @return {!string}
 */
var base64Encode = exports.base64Encode = function base64Encode(str) {
    var utf8Bytes = (0, _utf.stringToByteArray)(str);
    return _crypt.base64.encodeByteArray(utf8Bytes, /*useWebSafe=*/true);
};
var BufferImpl;
function setBufferImpl(impl) {
    BufferImpl = impl;
}
/**
 * URL-safe base64 decoding
 *
 * NOTE: DO NOT use the global atob() function - it does NOT support the
 * base64Url variant encoding.
 *
 * @param {string} str To be decoded
 * @return {?string} Decoded result, if possible
 */
var base64Decode = exports.base64Decode = function base64Decode(str) {
    try {
        if (BufferImpl) {
            return new BufferImpl(str, 'base64').toString('utf8');
        } else {
            return _crypt.base64.decodeString(str, /*useWebSafe=*/true);
        }
    } catch (e) {
        log('base64Decode failed: ', e);
    }
    return null;
};
/**
 * Sha1 hash of the input string
 * @param {!string} str The string to hash
 * @return {!string} The resulting hash
 */
var sha1 = exports.sha1 = function sha1(str) {
    var utf8Bytes = (0, _utf.stringToByteArray)(str);
    var sha1 = new _Sha.Sha1();
    sha1.update(utf8Bytes);
    var sha1Bytes = sha1.digest();
    return _crypt.base64.encodeByteArray(sha1Bytes);
};
/**
 * @param {...*} var_args
 * @return {string}
 * @private
 */
var buildLogMessage_ = function buildLogMessage_() {
    var var_args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        var_args[_i] = arguments[_i];
    }
    var message = '';
    for (var i = 0; i < var_args.length; i++) {
        if (Array.isArray(var_args[i]) || var_args[i] && _typeof(var_args[i]) === 'object' && typeof var_args[i].length === 'number') {
            message += buildLogMessage_.apply(null, var_args[i]);
        } else if (_typeof(var_args[i]) === 'object') {
            message += (0, _json.stringify)(var_args[i]);
        } else {
            message += var_args[i];
        }
        message += ' ';
    }
    return message;
};
/**
 * Use this for all debug messages in Firebase.
 * @type {?function(string)}
 */
var logger = exports.logger = null;
/**
 * Flag to check for log availability on first log message
 * @type {boolean}
 * @private
 */
var firstLog_ = true;
/**
 * The implementation of Firebase.enableLogging (defined here to break dependencies)
 * @param {boolean|?function(string)} logger_ A flag to turn on logging, or a custom logger
 * @param {boolean=} persistent Whether or not to persist logging settings across refreshes
 */
var enableLogging = exports.enableLogging = function enableLogging(logger_, persistent) {
    (0, _assert.assert)(!persistent || logger_ === true || logger_ === false, "Can't turn on custom loggers persistently.");
    if (logger_ === true) {
        if (typeof console !== 'undefined') {
            if (typeof console.log === 'function') {
                exports.logger = logger = console.log.bind(console);
            } else if (_typeof(console.log) === 'object') {
                // IE does this.
                exports.logger = logger = function logger(message) {
                    console.log(message);
                };
            }
        }
        if (persistent) _storage.SessionStorage.set('logging_enabled', true);
    } else if (typeof logger_ === 'function') {
        exports.logger = logger = logger_;
    } else {
        exports.logger = logger = null;
        _storage.SessionStorage.remove('logging_enabled');
    }
};
/**
 *
 * @param {...(string|Arguments)} var_args
 */
var log = exports.log = function log() {
    var var_args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        var_args[_i] = arguments[_i];
    }
    if (firstLog_ === true) {
        firstLog_ = false;
        if (logger === null && _storage.SessionStorage.get('logging_enabled') === true) enableLogging(true);
    }
    if (logger) {
        var message = buildLogMessage_.apply(null, var_args);
        logger(message);
    }
};
/**
 * @param {!string} prefix
 * @return {function(...[*])}
 */
var logWrapper = exports.logWrapper = function logWrapper(prefix) {
    return function () {
        var var_args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            var_args[_i] = arguments[_i];
        }
        log.apply(void 0, [prefix].concat(var_args));
    };
};
/**
 * @param {...string} var_args
 */
var error = exports.error = function error() {
    var var_args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        var_args[_i] = arguments[_i];
    }
    if (typeof console !== 'undefined') {
        var message = 'FIREBASE INTERNAL ERROR: ' + buildLogMessage_.apply(void 0, var_args);
        if (typeof console.error !== 'undefined') {
            console.error(message);
        } else {
            console.log(message);
        }
    }
};
/**
 * @param {...string} var_args
 */
var fatal = exports.fatal = function fatal() {
    var var_args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        var_args[_i] = arguments[_i];
    }
    var message = buildLogMessage_.apply(void 0, var_args);
    throw new Error('FIREBASE FATAL ERROR: ' + message);
};
/**
 * @param {...*} var_args
 */
var warn = exports.warn = function warn() {
    var var_args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        var_args[_i] = arguments[_i];
    }
    if (typeof console !== 'undefined') {
        var message = 'FIREBASE WARNING: ' + buildLogMessage_.apply(void 0, var_args);
        if (typeof console.warn !== 'undefined') {
            console.warn(message);
        } else {
            console.log(message);
        }
    }
};
/**
 * Logs a warning if the containing page uses https. Called when a call to new Firebase
 * does not use https.
 */
var warnIfPageIsSecure = exports.warnIfPageIsSecure = function warnIfPageIsSecure() {
    // Be very careful accessing browser globals. Who knows what may or may not exist.
    if (typeof window !== 'undefined' && window.location && window.location.protocol && window.location.protocol.indexOf('https:') !== -1) {
        warn('Insecure Firebase access from a secure page. ' + 'Please use https in calls to new Firebase().');
    }
};
/**
 * @param {!String} methodName
 */
var warnAboutUnsupportedMethod = exports.warnAboutUnsupportedMethod = function warnAboutUnsupportedMethod(methodName) {
    warn(methodName + ' is unsupported and will likely change soon.  ' + 'Please do not use.');
};
/**
 * Returns true if data is NaN, or +/- Infinity.
 * @param {*} data
 * @return {boolean}
 */
var isInvalidJSONNumber = exports.isInvalidJSONNumber = function isInvalidJSONNumber(data) {
    return typeof data === 'number' && (data != data || // NaN
    data == Number.POSITIVE_INFINITY || data == Number.NEGATIVE_INFINITY);
};
/**
 * @param {function()} fn
 */
var executeWhenDOMReady = exports.executeWhenDOMReady = function executeWhenDOMReady(fn) {
    if ((0, _environment.isNodeSdk)() || document.readyState === 'complete') {
        fn();
    } else {
        // Modeled after jQuery. Try DOMContentLoaded and onreadystatechange (which
        // fire before onload), but fall back to onload.
        var called_1 = false;
        var wrappedFn_1 = function wrappedFn_1() {
            if (!document.body) {
                setTimeout(wrappedFn_1, Math.floor(10));
                return;
            }
            if (!called_1) {
                called_1 = true;
                fn();
            }
        };
        if (document.addEventListener) {
            document.addEventListener('DOMContentLoaded', wrappedFn_1, false);
            // fallback to onload.
            window.addEventListener('load', wrappedFn_1, false);
        } else if (document.attachEvent) {
            // IE.
            document.attachEvent('onreadystatechange', function () {
                if (document.readyState === 'complete') wrappedFn_1();
            });
            // fallback to onload.
            window.attachEvent('onload', wrappedFn_1);
            // jQuery has an extra hack for IE that we could employ (based on
            // http://javascript.nwbox.com/IEContentLoaded/) But it looks really old.
            // I'm hoping we don't need it.
        }
    }
};
/**
 * Minimum key name. Invalid for actual data, used as a marker to sort before any valid names
 * @type {!string}
 */
var MIN_NAME = exports.MIN_NAME = '[MIN_NAME]';
/**
 * Maximum key name. Invalid for actual data, used as a marker to sort above any valid names
 * @type {!string}
 */
var MAX_NAME = exports.MAX_NAME = '[MAX_NAME]';
/**
 * Compares valid Firebase key names, plus min and max name
 * @param {!string} a
 * @param {!string} b
 * @return {!number}
 */
var nameCompare = exports.nameCompare = function nameCompare(a, b) {
    if (a === b) {
        return 0;
    } else if (a === MIN_NAME || b === MAX_NAME) {
        return -1;
    } else if (b === MIN_NAME || a === MAX_NAME) {
        return 1;
    } else {
        var aAsInt = tryParseInt(a),
            bAsInt = tryParseInt(b);
        if (aAsInt !== null) {
            if (bAsInt !== null) {
                return aAsInt - bAsInt == 0 ? a.length - b.length : aAsInt - bAsInt;
            } else {
                return -1;
            }
        } else if (bAsInt !== null) {
            return 1;
        } else {
            return a < b ? -1 : 1;
        }
    }
};
/**
 * @param {!string} a
 * @param {!string} b
 * @return {!number} comparison result.
 */
var stringCompare = exports.stringCompare = function stringCompare(a, b) {
    if (a === b) {
        return 0;
    } else if (a < b) {
        return -1;
    } else {
        return 1;
    }
};
/**
 * @param {string} key
 * @param {Object} obj
 * @return {*}
 */
var requireKey = exports.requireKey = function requireKey(key, obj) {
    if (obj && key in obj) {
        return obj[key];
    } else {
        throw new Error('Missing required key (' + key + ') in object: ' + (0, _json.stringify)(obj));
    }
};
/**
 * @param {*} obj
 * @return {string}
 */
var ObjectToUniqueKey = exports.ObjectToUniqueKey = function ObjectToUniqueKey(obj) {
    if ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) !== 'object' || obj === null) return (0, _json.stringify)(obj);
    var keys = [];
    for (var k in obj) {
        keys.push(k);
    }
    // Export as json, but with the keys sorted.
    keys.sort();
    var key = '{';
    for (var i = 0; i < keys.length; i++) {
        if (i !== 0) key += ',';
        key += (0, _json.stringify)(keys[i]);
        key += ':';
        key += ObjectToUniqueKey(obj[keys[i]]);
    }
    key += '}';
    return key;
};
/**
 * Splits a string into a number of smaller segments of maximum size
 * @param {!string} str The string
 * @param {!number} segsize The maximum number of chars in the string.
 * @return {Array.<string>} The string, split into appropriately-sized chunks
 */
var splitStringBySize = exports.splitStringBySize = function splitStringBySize(str, segsize) {
    var len = str.length;
    if (len <= segsize) {
        return [str];
    }
    var dataSegs = [];
    for (var c = 0; c < len; c += segsize) {
        if (c + segsize > len) {
            dataSegs.push(str.substring(c, len));
        } else {
            dataSegs.push(str.substring(c, c + segsize));
        }
    }
    return dataSegs;
};
/**
 * Apply a function to each (key, value) pair in an object or
 * apply a function to each (index, value) pair in an array
 * @param {!(Object|Array)} obj The object or array to iterate over
 * @param {function(?, ?)} fn The function to apply
 */
var each = exports.each = function each(obj, fn) {
    if (Array.isArray(obj)) {
        for (var i = 0; i < obj.length; ++i) {
            fn(i, obj[i]);
        }
    } else {
        /**
         * in the conversion of code we removed the goog.object.forEach
         * function which did a value,key callback. We standardized on
         * a single impl that does a key, value callback. So we invert
         * to not have to touch the `each` code points
         */
        (0, _obj.forEach)(obj, function (key, val) {
            return fn(val, key);
        });
    }
};
/**
 * Like goog.bind, but doesn't bother to create a closure if opt_context is null/undefined.
 * @param {function(*)} callback Callback function.
 * @param {?Object=} context Optional context to bind to.
 * @return {function(*)}
 */
var bindCallback = exports.bindCallback = function bindCallback(callback, context) {
    return context ? callback.bind(context) : callback;
};
/**
 * Borrowed from http://hg.secondlife.com/llsd/src/tip/js/typedarray.js (MIT License)
 * I made one modification at the end and removed the NaN / Infinity
 * handling (since it seemed broken [caused an overflow] and we don't need it).  See MJL comments.
 * @param {!number} v A double
 * @return {string}
 */
var doubleToIEEE754String = exports.doubleToIEEE754String = function doubleToIEEE754String(v) {
    (0, _assert.assert)(!isInvalidJSONNumber(v), 'Invalid JSON number'); // MJL
    var ebits = 11,
        fbits = 52;
    var bias = (1 << ebits - 1) - 1,
        s,
        e,
        f,
        ln,
        i,
        bits,
        str;
    // Compute sign, exponent, fraction
    // Skip NaN / Infinity handling --MJL.
    if (v === 0) {
        e = 0;
        f = 0;
        s = 1 / v === -Infinity ? 1 : 0;
    } else {
        s = v < 0;
        v = Math.abs(v);
        if (v >= Math.pow(2, 1 - bias)) {
            // Normalized
            ln = Math.min(Math.floor(Math.log(v) / Math.LN2), bias);
            e = ln + bias;
            f = Math.round(v * Math.pow(2, fbits - ln) - Math.pow(2, fbits));
        } else {
            // Denormalized
            e = 0;
            f = Math.round(v / Math.pow(2, 1 - bias - fbits));
        }
    }
    // Pack sign, exponent, fraction
    bits = [];
    for (i = fbits; i; i -= 1) {
        bits.push(f % 2 ? 1 : 0);
        f = Math.floor(f / 2);
    }
    for (i = ebits; i; i -= 1) {
        bits.push(e % 2 ? 1 : 0);
        e = Math.floor(e / 2);
    }
    bits.push(s ? 1 : 0);
    bits.reverse();
    str = bits.join('');
    // Return the data as a hex string. --MJL
    var hexByteString = '';
    for (i = 0; i < 64; i += 8) {
        var hexByte = parseInt(str.substr(i, 8), 2).toString(16);
        if (hexByte.length === 1) hexByte = '0' + hexByte;
        hexByteString = hexByteString + hexByte;
    }
    return hexByteString.toLowerCase();
};
/**
 * Used to detect if we're in a Chrome content script (which executes in an
 * isolated environment where long-polling doesn't work).
 * @return {boolean}
 */
var isChromeExtensionContentScript = exports.isChromeExtensionContentScript = function isChromeExtensionContentScript() {
    return !!((typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object' && window['chrome'] && window['chrome']['extension'] && !/^chrome/.test(window.location.href));
};
/**
 * Used to detect if we're in a Windows 8 Store app.
 * @return {boolean}
 */
var isWindowsStoreApp = exports.isWindowsStoreApp = function isWindowsStoreApp() {
    // Check for the presence of a couple WinRT globals
    return (typeof Windows === 'undefined' ? 'undefined' : _typeof(Windows)) === 'object' && _typeof(Windows.UI) === 'object';
};
/**
 * Converts a server error code to a Javascript Error
 * @param {!string} code
 * @param {!Query} query
 * @return {Error}
 */
var errorForServerCode = exports.errorForServerCode = function errorForServerCode(code, query) {
    var reason = 'Unknown Error';
    if (code === 'too_big') {
        reason = 'The data requested exceeds the maximum size ' + 'that can be accessed with a single request.';
    } else if (code == 'permission_denied') {
        reason = "Client doesn't have permission to access the desired data.";
    } else if (code == 'unavailable') {
        reason = 'The service is unavailable';
    }
    var error = new Error(code + ' at ' + query.path.toString() + ': ' + reason);
    error.code = code.toUpperCase();
    return error;
};
/**
 * Used to test for integer-looking strings
 * @type {RegExp}
 * @private
 */
var INTEGER_REGEXP_ = exports.INTEGER_REGEXP_ = new RegExp('^-?\\d{1,10}$');
/**
 * If the string contains a 32-bit integer, return it.  Else return null.
 * @param {!string} str
 * @return {?number}
 */
var tryParseInt = exports.tryParseInt = function tryParseInt(str) {
    if (INTEGER_REGEXP_.test(str)) {
        var intVal = Number(str);
        if (intVal >= -2147483648 && intVal <= 2147483647) {
            return intVal;
        }
    }
    return null;
};
/**
 * Helper to run some code but catch any exceptions and re-throw them later.
 * Useful for preventing user callbacks from breaking internal code.
 *
 * Re-throwing the exception from a setTimeout is a little evil, but it's very
 * convenient (we don't have to try to figure out when is a safe point to
 * re-throw it), and the behavior seems reasonable:
 *
 * * If you aren't pausing on exceptions, you get an error in the console with
 *   the correct stack trace.
 * * If you're pausing on all exceptions, the debugger will pause on your
 *   exception and then again when we rethrow it.
 * * If you're only pausing on uncaught exceptions, the debugger will only pause
 *   on us re-throwing it.
 *
 * @param {!function()} fn The code to guard.
 */
var exceptionGuard = exports.exceptionGuard = function exceptionGuard(fn) {
    try {
        fn();
    } catch (e) {
        // Re-throw exception when it's safe.
        setTimeout(function () {
            // It used to be that "throw e" would result in a good console error with
            // relevant context, but as of Chrome 39, you just get the firebase.js
            // file/line number where we re-throw it, which is useless. So we log
            // e.stack explicitly.
            var stack = e.stack || '';
            warn('Exception was thrown by user callback.', stack);
            throw e;
        }, Math.floor(0));
    }
};
/**
 * Helper function to safely call opt_callback with the specified arguments.  It:
 * 1. Turns into a no-op if opt_callback is null or undefined.
 * 2. Wraps the call inside exceptionGuard to prevent exceptions from breaking our state.
 *
 * @param {?Function=} callback Optional onComplete callback.
 * @param {...*} var_args Arbitrary args to be passed to opt_onComplete
 */
var callUserCallback = exports.callUserCallback = function callUserCallback(callback) {
    var var_args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        var_args[_i - 1] = arguments[_i];
    }
    if (typeof callback === 'function') {
        exceptionGuard(function () {
            callback.apply(void 0, var_args);
        });
    }
};
/**
 * @return {boolean} true if we think we're currently being crawled.
 */
var beingCrawled = exports.beingCrawled = function beingCrawled() {
    var userAgent = (typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object' && window['navigator'] && window['navigator']['userAgent'] || '';
    // For now we whitelist the most popular crawlers.  We should refine this to be the set of crawlers we
    // believe to support JavaScript/AJAX rendering.
    // NOTE: Google Webmaster Tools doesn't really belong, but their "This is how a visitor to your website
    // would have seen the page" is flaky if we don't treat it as a crawler.
    return userAgent.search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i) >= 0;
};
/**
 * Export a property of an object using a getter function.
 *
 * @param {!Object} object
 * @param {string} name
 * @param {!function(): *} fnGet
 */
var exportPropGetter = exports.exportPropGetter = function exportPropGetter(object, name, fnGet) {
    Object.defineProperty(object, name, { get: fnGet });
};
/**
 * Same as setTimeout() except on Node.JS it will /not/ prevent the process from exiting.
 *
 * It is removed with clearTimeout() as normal.
 *
 * @param {Function} fn Function to run.
 * @param {number} time Milliseconds to wait before running.
 * @return {number|Object} The setTimeout() return value.
 */
var setTimeoutNonBlocking = exports.setTimeoutNonBlocking = function setTimeoutNonBlocking(fn, time) {
    var timeout = setTimeout(fn, time);
    if ((typeof timeout === 'undefined' ? 'undefined' : _typeof(timeout)) === 'object' && timeout['unref']) {
        timeout['unref']();
    }
    return timeout;
};
//# sourceMappingURL=util.js.map


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*! @license Firebase v4.5.0
Build: rev-f49c8b5
Terms: https://firebase.google.com/terms/ */



Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// See http://www.devthought.com/2012/01/18/an-object-is-not-a-hash/
var contains = exports.contains = function contains(obj, key) {
    return Object.prototype.hasOwnProperty.call(obj, key);
};
var safeGet = exports.safeGet = function safeGet(obj, key) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) return obj[key];
    // else return undefined.
};
/**
 * Enumerates the keys/values in an object, excluding keys defined on the prototype.
 *
 * @param {?Object.<K,V>} obj Object to enumerate.
 * @param {!function(K, V)} fn Function to call for each key and value.
 * @template K,V
 */
var forEach = exports.forEach = function forEach(obj, fn) {
    for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            fn(key, obj[key]);
        }
    }
};
/**
 * Copies all the (own) properties from one object to another.
 * @param {!Object} objTo
 * @param {!Object} objFrom
 * @return {!Object} objTo
 */
var extend = exports.extend = function extend(objTo, objFrom) {
    forEach(objFrom, function (key, value) {
        objTo[key] = value;
    });
    return objTo;
};
/**
 * Returns a clone of the specified object.
 * @param {!Object} obj
 * @return {!Object} cloned obj.
 */
var clone = exports.clone = function clone(obj) {
    return extend({}, obj);
};
/**
 * Returns true if obj has typeof "object" and is not null.  Unlike goog.isObject(), does not return true
 * for functions.
 *
 * @param obj {*} A potential object.
 * @returns {boolean} True if it's an object.
 */
var isNonNullObject = exports.isNonNullObject = function isNonNullObject(obj) {
    return (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object' && obj !== null;
};
var isEmpty = exports.isEmpty = function isEmpty(obj) {
    for (var key in obj) {
        return false;
    }
    return true;
};
var getCount = exports.getCount = function getCount(obj) {
    var rv = 0;
    for (var key in obj) {
        rv++;
    }
    return rv;
};
var map = exports.map = function map(obj, f, opt_obj) {
    var res = {};
    for (var key in obj) {
        res[key] = f.call(opt_obj, obj[key], key, obj);
    }
    return res;
};
var findKey = exports.findKey = function findKey(obj, fn, opt_this) {
    for (var key in obj) {
        if (fn.call(opt_this, obj[key], key, obj)) {
            return key;
        }
    }
    return undefined;
};
var findValue = exports.findValue = function findValue(obj, fn, opt_this) {
    var key = findKey(obj, fn, opt_this);
    return key && obj[key];
};
var getAnyKey = exports.getAnyKey = function getAnyKey(obj) {
    for (var key in obj) {
        return key;
    }
};
var getValues = exports.getValues = function getValues(obj) {
    var res = [];
    var i = 0;
    for (var key in obj) {
        res[i++] = obj[key];
    }
    return res;
};
/**
 * Tests whether every key/value pair in an object pass the test implemented
 * by the provided function
 *
 * @param {?Object.<K,V>} obj Object to test.
 * @param {!function(K, V)} fn Function to call for each key and value.
 * @template K,V
 */
var every = exports.every = function every(obj, fn) {
    for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            if (!fn(key, obj[key])) {
                return false;
            }
        }
    }
    return true;
};
//# sourceMappingURL=obj.js.map


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*! @license Firebase v4.5.0
Build: rev-f49c8b5
Terms: https://firebase.google.com/terms/ */



Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ValidationPath = exports.Path = undefined;

var _util = __webpack_require__(3);

var _utf = __webpack_require__(50);

/**
 * An immutable object representing a parsed path.  It's immutable so that you
 * can pass them around to other functions without worrying about them changing
 * it.
 */
/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Path = /** @class */function () {
    /**
     * @param {string|Array.<string>} pathOrString Path string to parse,
     *      or another path, or the raw tokens array
     * @param {number=} pieceNum
     */
    function Path(pathOrString, pieceNum) {
        if (pieceNum === void 0) {
            this.pieces_ = pathOrString.split('/');
            // Remove empty pieces.
            var copyTo = 0;
            for (var i = 0; i < this.pieces_.length; i++) {
                if (this.pieces_[i].length > 0) {
                    this.pieces_[copyTo] = this.pieces_[i];
                    copyTo++;
                }
            }
            this.pieces_.length = copyTo;
            this.pieceNum_ = 0;
        } else {
            this.pieces_ = pathOrString;
            this.pieceNum_ = pieceNum;
        }
    }
    Object.defineProperty(Path, "Empty", {
        /**
         * Singleton to represent an empty path
         *
         * @const
         */
        get: function get() {
            return new Path('');
        },
        enumerable: true,
        configurable: true
    });
    Path.prototype.getFront = function () {
        if (this.pieceNum_ >= this.pieces_.length) return null;
        return this.pieces_[this.pieceNum_];
    };
    /**
     * @return {number} The number of segments in this path
     */
    Path.prototype.getLength = function () {
        return this.pieces_.length - this.pieceNum_;
    };
    /**
     * @return {!Path}
     */
    Path.prototype.popFront = function () {
        var pieceNum = this.pieceNum_;
        if (pieceNum < this.pieces_.length) {
            pieceNum++;
        }
        return new Path(this.pieces_, pieceNum);
    };
    /**
     * @return {?string}
     */
    Path.prototype.getBack = function () {
        if (this.pieceNum_ < this.pieces_.length) return this.pieces_[this.pieces_.length - 1];
        return null;
    };
    Path.prototype.toString = function () {
        var pathString = '';
        for (var i = this.pieceNum_; i < this.pieces_.length; i++) {
            if (this.pieces_[i] !== '') pathString += '/' + this.pieces_[i];
        }
        return pathString || '/';
    };
    Path.prototype.toUrlEncodedString = function () {
        var pathString = '';
        for (var i = this.pieceNum_; i < this.pieces_.length; i++) {
            if (this.pieces_[i] !== '') pathString += '/' + encodeURIComponent(String(this.pieces_[i]));
        }
        return pathString || '/';
    };
    /**
     * Shallow copy of the parts of the path.
     *
     * @param {number=} begin
     * @return {!Array<string>}
     */
    Path.prototype.slice = function (begin) {
        if (begin === void 0) {
            begin = 0;
        }
        return this.pieces_.slice(this.pieceNum_ + begin);
    };
    /**
     * @return {?Path}
     */
    Path.prototype.parent = function () {
        if (this.pieceNum_ >= this.pieces_.length) return null;
        var pieces = [];
        for (var i = this.pieceNum_; i < this.pieces_.length - 1; i++) {
            pieces.push(this.pieces_[i]);
        }return new Path(pieces, 0);
    };
    /**
     * @param {string|!Path} childPathObj
     * @return {!Path}
     */
    Path.prototype.child = function (childPathObj) {
        var pieces = [];
        for (var i = this.pieceNum_; i < this.pieces_.length; i++) {
            pieces.push(this.pieces_[i]);
        }if (childPathObj instanceof Path) {
            for (var i = childPathObj.pieceNum_; i < childPathObj.pieces_.length; i++) {
                pieces.push(childPathObj.pieces_[i]);
            }
        } else {
            var childPieces = childPathObj.split('/');
            for (var i = 0; i < childPieces.length; i++) {
                if (childPieces[i].length > 0) pieces.push(childPieces[i]);
            }
        }
        return new Path(pieces, 0);
    };
    /**
     * @return {boolean} True if there are no segments in this path
     */
    Path.prototype.isEmpty = function () {
        return this.pieceNum_ >= this.pieces_.length;
    };
    /**
     * @param {!Path} outerPath
     * @param {!Path} innerPath
     * @return {!Path} The path from outerPath to innerPath
     */
    Path.relativePath = function (outerPath, innerPath) {
        var outer = outerPath.getFront(),
            inner = innerPath.getFront();
        if (outer === null) {
            return innerPath;
        } else if (outer === inner) {
            return Path.relativePath(outerPath.popFront(), innerPath.popFront());
        } else {
            throw new Error('INTERNAL ERROR: innerPath (' + innerPath + ') is not within ' + 'outerPath (' + outerPath + ')');
        }
    };
    /**
     * @param {!Path} left
     * @param {!Path} right
     * @return {number} -1, 0, 1 if left is less, equal, or greater than the right.
     */
    Path.comparePaths = function (left, right) {
        var leftKeys = left.slice();
        var rightKeys = right.slice();
        for (var i = 0; i < leftKeys.length && i < rightKeys.length; i++) {
            var cmp = (0, _util.nameCompare)(leftKeys[i], rightKeys[i]);
            if (cmp !== 0) return cmp;
        }
        if (leftKeys.length === rightKeys.length) return 0;
        return leftKeys.length < rightKeys.length ? -1 : 1;
    };
    /**
     *
     * @param {Path} other
     * @return {boolean} true if paths are the same.
     */
    Path.prototype.equals = function (other) {
        if (this.getLength() !== other.getLength()) {
            return false;
        }
        for (var i = this.pieceNum_, j = other.pieceNum_; i <= this.pieces_.length; i++, j++) {
            if (this.pieces_[i] !== other.pieces_[j]) {
                return false;
            }
        }
        return true;
    };
    /**
     *
     * @param {!Path} other
     * @return {boolean} True if this path is a parent (or the same as) other
     */
    Path.prototype.contains = function (other) {
        var i = this.pieceNum_;
        var j = other.pieceNum_;
        if (this.getLength() > other.getLength()) {
            return false;
        }
        while (i < this.pieces_.length) {
            if (this.pieces_[i] !== other.pieces_[j]) {
                return false;
            }
            ++i;
            ++j;
        }
        return true;
    };
    return Path;
}(); // end Path
exports.Path = Path;
/**
 * Dynamic (mutable) path used to count path lengths.
 *
 * This class is used to efficiently check paths for valid
 * length (in UTF8 bytes) and depth (used in path validation).
 *
 * Throws Error exception if path is ever invalid.
 *
 * The definition of a path always begins with '/'.
 */

var ValidationPath = /** @class */function () {
    /**
     * @param {!Path} path Initial Path.
     * @param {string} errorPrefix_ Prefix for any error messages.
     */
    function ValidationPath(path, errorPrefix_) {
        this.errorPrefix_ = errorPrefix_;
        /** @type {!Array<string>} */
        this.parts_ = path.slice();
        /** @type {number} Initialize to number of '/' chars needed in path. */
        this.byteLength_ = Math.max(1, this.parts_.length);
        for (var i = 0; i < this.parts_.length; i++) {
            this.byteLength_ += (0, _utf.stringLength)(this.parts_[i]);
        }
        this.checkValid_();
    }
    Object.defineProperty(ValidationPath, "MAX_PATH_DEPTH", {
        /** @const {number} Maximum key depth. */
        get: function get() {
            return 32;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ValidationPath, "MAX_PATH_LENGTH_BYTES", {
        /** @const {number} Maximum number of (UTF8) bytes in a Firebase path. */
        get: function get() {
            return 768;
        },
        enumerable: true,
        configurable: true
    });
    /** @param {string} child */
    ValidationPath.prototype.push = function (child) {
        // Count the needed '/'
        if (this.parts_.length > 0) {
            this.byteLength_ += 1;
        }
        this.parts_.push(child);
        this.byteLength_ += (0, _utf.stringLength)(child);
        this.checkValid_();
    };
    ValidationPath.prototype.pop = function () {
        var last = this.parts_.pop();
        this.byteLength_ -= (0, _utf.stringLength)(last);
        // Un-count the previous '/'
        if (this.parts_.length > 0) {
            this.byteLength_ -= 1;
        }
    };
    ValidationPath.prototype.checkValid_ = function () {
        if (this.byteLength_ > ValidationPath.MAX_PATH_LENGTH_BYTES) {
            throw new Error(this.errorPrefix_ + 'has a key path longer than ' + ValidationPath.MAX_PATH_LENGTH_BYTES + ' bytes (' + this.byteLength_ + ').');
        }
        if (this.parts_.length > ValidationPath.MAX_PATH_DEPTH) {
            throw new Error(this.errorPrefix_ + 'path specified exceeds the maximum depth that can be written (' + ValidationPath.MAX_PATH_DEPTH + ') or object contains a cycle ' + this.toErrorString());
        }
    };
    /**
     * String for use in error messages - uses '.' notation for path.
     *
     * @return {string}
     */
    ValidationPath.prototype.toErrorString = function () {
        if (this.parts_.length == 0) {
            return '';
        }
        return "in property '" + this.parts_.join('.') + "'";
    };
    return ValidationPath;
}();
exports.ValidationPath = ValidationPath;
//# sourceMappingURL=Path.js.map


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, window, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, window, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(window, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(12);
exports.setImmediate = setImmediate;
exports.clearImmediate = clearImmediate;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*! @license Firebase v4.5.0
Build: rev-f49c8b5
Terms: https://firebase.google.com/terms/ */



Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PRIORITY_INDEX = exports.PriorityIndex = undefined;
exports.setNodeFromJSON = setNodeFromJSON;
exports.setMaxNode = setMaxNode;

var _Index = __webpack_require__(37);

var _util = __webpack_require__(3);

var _Node = __webpack_require__(10);

var _LeafNode = __webpack_require__(36);

/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var __extends = undefined && undefined.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();

var nodeFromJSON;
var MAX_NODE;
function setNodeFromJSON(val) {
    nodeFromJSON = val;
}
function setMaxNode(val) {
    MAX_NODE = val;
}
/**
 * @constructor
 * @extends {Index}
 * @private
 */
var PriorityIndex = /** @class */function (_super) {
    __extends(PriorityIndex, _super);
    function PriorityIndex() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @inheritDoc
     */
    PriorityIndex.prototype.compare = function (a, b) {
        var aPriority = a.node.getPriority();
        var bPriority = b.node.getPriority();
        var indexCmp = aPriority.compareTo(bPriority);
        if (indexCmp === 0) {
            return (0, _util.nameCompare)(a.name, b.name);
        } else {
            return indexCmp;
        }
    };
    /**
     * @inheritDoc
     */
    PriorityIndex.prototype.isDefinedOn = function (node) {
        return !node.getPriority().isEmpty();
    };
    /**
     * @inheritDoc
     */
    PriorityIndex.prototype.indexedValueChanged = function (oldNode, newNode) {
        return !oldNode.getPriority().equals(newNode.getPriority());
    };
    /**
     * @inheritDoc
     */
    PriorityIndex.prototype.minPost = function () {
        return _Node.NamedNode.MIN;
    };
    /**
     * @inheritDoc
     */
    PriorityIndex.prototype.maxPost = function () {
        return new _Node.NamedNode(_util.MAX_NAME, new _LeafNode.LeafNode('[PRIORITY-POST]', MAX_NODE));
    };
    /**
     * @param {*} indexValue
     * @param {string} name
     * @return {!NamedNode}
     */
    PriorityIndex.prototype.makePost = function (indexValue, name) {
        var priorityNode = nodeFromJSON(indexValue);
        return new _Node.NamedNode(name, new _LeafNode.LeafNode('[PRIORITY-POST]', priorityNode));
    };
    /**
     * @return {!string} String representation for inclusion in a query spec
     */
    PriorityIndex.prototype.toString = function () {
        return '.priority';
    };
    return PriorityIndex;
}(_Index.Index);
exports.PriorityIndex = PriorityIndex;
var PRIORITY_INDEX = exports.PRIORITY_INDEX = new PriorityIndex();
//# sourceMappingURL=PriorityIndex.js.map


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*! @license Firebase v4.5.0
Build: rev-f49c8b5
Terms: https://firebase.google.com/terms/ */



Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MAX_NODE = exports.MaxNode = exports.ChildrenNode = undefined;

var _assert = __webpack_require__(2);

var _util = __webpack_require__(3);

var _SortedMap = __webpack_require__(47);

var _Node = __webpack_require__(10);

var _snap = __webpack_require__(67);

var _PriorityIndex = __webpack_require__(7);

var _KeyIndex = __webpack_require__(33);

var _IndexMap = __webpack_require__(62);

var _LeafNode = __webpack_require__(36);

var _comparators = __webpack_require__(64);

/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var __extends = undefined && undefined.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();

// TODO: For memory savings, don't store priorityNode_ if it's empty.
var EMPTY_NODE;
/**
 * ChildrenNode is a class for storing internal nodes in a DataSnapshot
 * (i.e. nodes with children).  It implements Node and stores the
 * list of children in the children property, sorted by child name.
 *
 * @constructor
 * @implements {Node}
 */
var ChildrenNode = /** @class */function () {
    /**
     *
     * @param {!SortedMap.<string, !Node>} children_ List of children
     * of this node..
     * @param {?Node} priorityNode_ The priority of this node (as a snapshot node).
     * @param {!IndexMap} indexMap_
     */
    function ChildrenNode(children_, priorityNode_, indexMap_) {
        this.children_ = children_;
        this.priorityNode_ = priorityNode_;
        this.indexMap_ = indexMap_;
        this.lazyHash_ = null;
        /**
         * Note: The only reason we allow null priority is for EMPTY_NODE, since we can't use
         * EMPTY_NODE as the priority of EMPTY_NODE.  We might want to consider making EMPTY_NODE its own
         * class instead of an empty ChildrenNode.
         */
        if (this.priorityNode_) {
            (0, _snap.validatePriorityNode)(this.priorityNode_);
        }
        if (this.children_.isEmpty()) {
            (0, _assert.assert)(!this.priorityNode_ || this.priorityNode_.isEmpty(), 'An empty node cannot have a priority');
        }
    }
    Object.defineProperty(ChildrenNode, "EMPTY_NODE", {
        get: function get() {
            return EMPTY_NODE || (EMPTY_NODE = new ChildrenNode(new _SortedMap.SortedMap(_comparators.NAME_COMPARATOR), null, _IndexMap.IndexMap.Default));
        },
        enumerable: true,
        configurable: true
    });
    /** @inheritDoc */
    ChildrenNode.prototype.isLeafNode = function () {
        return false;
    };
    /** @inheritDoc */
    ChildrenNode.prototype.getPriority = function () {
        return this.priorityNode_ || EMPTY_NODE;
    };
    /** @inheritDoc */
    ChildrenNode.prototype.updatePriority = function (newPriorityNode) {
        if (this.children_.isEmpty()) {
            // Don't allow priorities on empty nodes
            return this;
        } else {
            return new ChildrenNode(this.children_, newPriorityNode, this.indexMap_);
        }
    };
    /** @inheritDoc */
    ChildrenNode.prototype.getImmediateChild = function (childName) {
        // Hack to treat priority as a regular child
        if (childName === '.priority') {
            return this.getPriority();
        } else {
            var child = this.children_.get(childName);
            return child === null ? EMPTY_NODE : child;
        }
    };
    /** @inheritDoc */
    ChildrenNode.prototype.getChild = function (path) {
        var front = path.getFront();
        if (front === null) return this;
        return this.getImmediateChild(front).getChild(path.popFront());
    };
    /** @inheritDoc */
    ChildrenNode.prototype.hasChild = function (childName) {
        return this.children_.get(childName) !== null;
    };
    /** @inheritDoc */
    ChildrenNode.prototype.updateImmediateChild = function (childName, newChildNode) {
        (0, _assert.assert)(newChildNode, 'We should always be passing snapshot nodes');
        if (childName === '.priority') {
            return this.updatePriority(newChildNode);
        } else {
            var namedNode = new _Node.NamedNode(childName, newChildNode);
            var newChildren = void 0,
                newIndexMap = void 0,
                newPriority = void 0;
            if (newChildNode.isEmpty()) {
                newChildren = this.children_.remove(childName);
                newIndexMap = this.indexMap_.removeFromIndexes(namedNode, this.children_);
            } else {
                newChildren = this.children_.insert(childName, newChildNode);
                newIndexMap = this.indexMap_.addToIndexes(namedNode, this.children_);
            }
            newPriority = newChildren.isEmpty() ? EMPTY_NODE : this.priorityNode_;
            return new ChildrenNode(newChildren, newPriority, newIndexMap);
        }
    };
    /** @inheritDoc */
    ChildrenNode.prototype.updateChild = function (path, newChildNode) {
        var front = path.getFront();
        if (front === null) {
            return newChildNode;
        } else {
            (0, _assert.assert)(path.getFront() !== '.priority' || path.getLength() === 1, '.priority must be the last token in a path');
            var newImmediateChild = this.getImmediateChild(front).updateChild(path.popFront(), newChildNode);
            return this.updateImmediateChild(front, newImmediateChild);
        }
    };
    /** @inheritDoc */
    ChildrenNode.prototype.isEmpty = function () {
        return this.children_.isEmpty();
    };
    /** @inheritDoc */
    ChildrenNode.prototype.numChildren = function () {
        return this.children_.count();
    };
    /** @inheritDoc */
    ChildrenNode.prototype.val = function (exportFormat) {
        if (this.isEmpty()) return null;
        var obj = {};
        var numKeys = 0,
            maxKey = 0,
            allIntegerKeys = true;
        this.forEachChild(_PriorityIndex.PRIORITY_INDEX, function (key, childNode) {
            obj[key] = childNode.val(exportFormat);
            numKeys++;
            if (allIntegerKeys && ChildrenNode.INTEGER_REGEXP_.test(key)) {
                maxKey = Math.max(maxKey, Number(key));
            } else {
                allIntegerKeys = false;
            }
        });
        if (!exportFormat && allIntegerKeys && maxKey < 2 * numKeys) {
            // convert to array.
            var array = [];
            for (var key in obj) {
                array[key] = obj[key];
            }return array;
        } else {
            if (exportFormat && !this.getPriority().isEmpty()) {
                obj['.priority'] = this.getPriority().val();
            }
            return obj;
        }
    };
    /** @inheritDoc */
    ChildrenNode.prototype.hash = function () {
        if (this.lazyHash_ === null) {
            var toHash_1 = '';
            if (!this.getPriority().isEmpty()) toHash_1 += 'priority:' + (0, _snap.priorityHashText)(this.getPriority().val()) + ':';
            this.forEachChild(_PriorityIndex.PRIORITY_INDEX, function (key, childNode) {
                var childHash = childNode.hash();
                if (childHash !== '') toHash_1 += ':' + key + ':' + childHash;
            });
            this.lazyHash_ = toHash_1 === '' ? '' : (0, _util.sha1)(toHash_1);
        }
        return this.lazyHash_;
    };
    /** @inheritDoc */
    ChildrenNode.prototype.getPredecessorChildName = function (childName, childNode, index) {
        var idx = this.resolveIndex_(index);
        if (idx) {
            var predecessor = idx.getPredecessorKey(new _Node.NamedNode(childName, childNode));
            return predecessor ? predecessor.name : null;
        } else {
            return this.children_.getPredecessorKey(childName);
        }
    };
    /**
     * @param {!Index} indexDefinition
     * @return {?string}
     */
    ChildrenNode.prototype.getFirstChildName = function (indexDefinition) {
        var idx = this.resolveIndex_(indexDefinition);
        if (idx) {
            var minKey = idx.minKey();
            return minKey && minKey.name;
        } else {
            return this.children_.minKey();
        }
    };
    /**
     * @param {!Index} indexDefinition
     * @return {?NamedNode}
     */
    ChildrenNode.prototype.getFirstChild = function (indexDefinition) {
        var minKey = this.getFirstChildName(indexDefinition);
        if (minKey) {
            return new _Node.NamedNode(minKey, this.children_.get(minKey));
        } else {
            return null;
        }
    };
    /**
     * Given an index, return the key name of the largest value we have, according to that index
     * @param {!Index} indexDefinition
     * @return {?string}
     */
    ChildrenNode.prototype.getLastChildName = function (indexDefinition) {
        var idx = this.resolveIndex_(indexDefinition);
        if (idx) {
            var maxKey = idx.maxKey();
            return maxKey && maxKey.name;
        } else {
            return this.children_.maxKey();
        }
    };
    /**
     * @param {!Index} indexDefinition
     * @return {?NamedNode}
     */
    ChildrenNode.prototype.getLastChild = function (indexDefinition) {
        var maxKey = this.getLastChildName(indexDefinition);
        if (maxKey) {
            return new _Node.NamedNode(maxKey, this.children_.get(maxKey));
        } else {
            return null;
        }
    };
    /**
     * @inheritDoc
     */
    ChildrenNode.prototype.forEachChild = function (index, action) {
        var idx = this.resolveIndex_(index);
        if (idx) {
            return idx.inorderTraversal(function (wrappedNode) {
                return action(wrappedNode.name, wrappedNode.node);
            });
        } else {
            return this.children_.inorderTraversal(action);
        }
    };
    /**
     * @param {!Index} indexDefinition
     * @return {SortedMapIterator}
     */
    ChildrenNode.prototype.getIterator = function (indexDefinition) {
        return this.getIteratorFrom(indexDefinition.minPost(), indexDefinition);
    };
    /**
     *
     * @param {!NamedNode} startPost
     * @param {!Index} indexDefinition
     * @return {!SortedMapIterator}
     */
    ChildrenNode.prototype.getIteratorFrom = function (startPost, indexDefinition) {
        var idx = this.resolveIndex_(indexDefinition);
        if (idx) {
            return idx.getIteratorFrom(startPost, function (key) {
                return key;
            });
        } else {
            var iterator = this.children_.getIteratorFrom(startPost.name, _Node.NamedNode.Wrap);
            var next = iterator.peek();
            while (next != null && indexDefinition.compare(next, startPost) < 0) {
                iterator.getNext();
                next = iterator.peek();
            }
            return iterator;
        }
    };
    /**
     * @param {!Index} indexDefinition
     * @return {!SortedMapIterator}
     */
    ChildrenNode.prototype.getReverseIterator = function (indexDefinition) {
        return this.getReverseIteratorFrom(indexDefinition.maxPost(), indexDefinition);
    };
    /**
     * @param {!NamedNode} endPost
     * @param {!Index} indexDefinition
     * @return {!SortedMapIterator}
     */
    ChildrenNode.prototype.getReverseIteratorFrom = function (endPost, indexDefinition) {
        var idx = this.resolveIndex_(indexDefinition);
        if (idx) {
            return idx.getReverseIteratorFrom(endPost, function (key) {
                return key;
            });
        } else {
            var iterator = this.children_.getReverseIteratorFrom(endPost.name, _Node.NamedNode.Wrap);
            var next = iterator.peek();
            while (next != null && indexDefinition.compare(next, endPost) > 0) {
                iterator.getNext();
                next = iterator.peek();
            }
            return iterator;
        }
    };
    /**
     * @inheritDoc
     */
    ChildrenNode.prototype.compareTo = function (other) {
        if (this.isEmpty()) {
            if (other.isEmpty()) {
                return 0;
            } else {
                return -1;
            }
        } else if (other.isLeafNode() || other.isEmpty()) {
            return 1;
        } else if (other === MAX_NODE) {
            return -1;
        } else {
            // Must be another node with children.
            return 0;
        }
    };
    /**
     * @inheritDoc
     */
    ChildrenNode.prototype.withIndex = function (indexDefinition) {
        if (indexDefinition === _KeyIndex.KEY_INDEX || this.indexMap_.hasIndex(indexDefinition)) {
            return this;
        } else {
            var newIndexMap = this.indexMap_.addIndex(indexDefinition, this.children_);
            return new ChildrenNode(this.children_, this.priorityNode_, newIndexMap);
        }
    };
    /**
     * @inheritDoc
     */
    ChildrenNode.prototype.isIndexed = function (index) {
        return index === _KeyIndex.KEY_INDEX || this.indexMap_.hasIndex(index);
    };
    /**
     * @inheritDoc
     */
    ChildrenNode.prototype.equals = function (other) {
        if (other === this) {
            return true;
        } else if (other.isLeafNode()) {
            return false;
        } else {
            var otherChildrenNode = other;
            if (!this.getPriority().equals(otherChildrenNode.getPriority())) {
                return false;
            } else if (this.children_.count() === otherChildrenNode.children_.count()) {
                var thisIter = this.getIterator(_PriorityIndex.PRIORITY_INDEX);
                var otherIter = otherChildrenNode.getIterator(_PriorityIndex.PRIORITY_INDEX);
                var thisCurrent = thisIter.getNext();
                var otherCurrent = otherIter.getNext();
                while (thisCurrent && otherCurrent) {
                    if (thisCurrent.name !== otherCurrent.name || !thisCurrent.node.equals(otherCurrent.node)) {
                        return false;
                    }
                    thisCurrent = thisIter.getNext();
                    otherCurrent = otherIter.getNext();
                }
                return thisCurrent === null && otherCurrent === null;
            } else {
                return false;
            }
        }
    };
    /**
     * Returns a SortedMap ordered by index, or null if the default (by-key) ordering can be used
     * instead.
     *
     * @private
     * @param {!Index} indexDefinition
     * @return {?SortedMap.<NamedNode, Node>}
     */
    ChildrenNode.prototype.resolveIndex_ = function (indexDefinition) {
        if (indexDefinition === _KeyIndex.KEY_INDEX) {
            return null;
        } else {
            return this.indexMap_.get(indexDefinition.toString());
        }
    };
    /**
     * @private
     * @type {RegExp}
     */
    ChildrenNode.INTEGER_REGEXP_ = /^(0|[1-9]\d*)$/;
    return ChildrenNode;
}();
exports.ChildrenNode = ChildrenNode;
/**
 * @constructor
 * @extends {ChildrenNode}
 * @private
 */

var MaxNode = /** @class */function (_super) {
    __extends(MaxNode, _super);
    function MaxNode() {
        return _super.call(this, new _SortedMap.SortedMap(_comparators.NAME_COMPARATOR), ChildrenNode.EMPTY_NODE, _IndexMap.IndexMap.Default) || this;
    }
    MaxNode.prototype.compareTo = function (other) {
        if (other === this) {
            return 0;
        } else {
            return 1;
        }
    };
    MaxNode.prototype.equals = function (other) {
        // Not that we every compare it, but MAX_NODE is only ever equal to itself
        return other === this;
    };
    MaxNode.prototype.getPriority = function () {
        return this;
    };
    MaxNode.prototype.getImmediateChild = function (childName) {
        return ChildrenNode.EMPTY_NODE;
    };
    MaxNode.prototype.isEmpty = function () {
        return false;
    };
    return MaxNode;
}(ChildrenNode);
exports.MaxNode = MaxNode;
/**
 * Marker that will sort higher than any other snapshot.
 * @type {!MAX_NODE}
 * @const
 */

var MAX_NODE = exports.MAX_NODE = new MaxNode();
Object.defineProperties(_Node.NamedNode, {
    MIN: {
        value: new _Node.NamedNode(_util.MIN_NAME, ChildrenNode.EMPTY_NODE)
    },
    MAX: {
        value: new _Node.NamedNode(_util.MAX_NAME, MAX_NODE)
    }
});
/**
 * Reference Extensions
 */
_KeyIndex.KeyIndex.__EMPTY_NODE = ChildrenNode.EMPTY_NODE;
_LeafNode.LeafNode.__childrenNodeConstructor = ChildrenNode;
(0, _snap.setMaxNode)(MAX_NODE);
(0, _PriorityIndex.setMaxNode)(MAX_NODE);
//# sourceMappingURL=ChildrenNode.js.map


/***/ }),
/* 9 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*! @license Firebase v4.5.0
Build: rev-f49c8b5
Terms: https://firebase.google.com/terms/ */



Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 *
 * @param {!string} name
 * @param {!Node} node
 * @constructor
 * @struct
 */
var NamedNode = /** @class */function () {
  function NamedNode(name, node) {
    this.name = name;
    this.node = node;
  }
  /**
   *
   * @param {!string} name
   * @param {!Node} node
   * @return {NamedNode}
   */
  NamedNode.Wrap = function (name, node) {
    return new NamedNode(name, node);
  };
  return NamedNode;
}();
exports.NamedNode = NamedNode;
//# sourceMappingURL=Node.js.map


/***/ }),
/* 11 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9), __webpack_require__(11)))

/***/ }),
/* 13 */,
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*! @license Firebase v4.5.0
Build: rev-f49c8b5
Terms: https://firebase.google.com/terms/ */



Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Evaluates a JSON string into a javascript object.
 *
 * @param {string} str A string containing JSON.
 * @return {*} The javascript object representing the specified JSON.
 */
var jsonEval = exports.jsonEval = function jsonEval(str) {
  return JSON.parse(str);
};
/**
 * Returns JSON representing a javascript object.
 * @param {*} data Javascript object to be stringified.
 * @return {string} The JSON contents of the object.
 */
var stringify = exports.stringify = function stringify(data) {
  return JSON.stringify(data);
};
//# sourceMappingURL=json.js.map


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*! @license Firebase v4.5.0
Build: rev-f49c8b5
Terms: https://firebase.google.com/terms/ */



Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OperationSource = exports.OperationType = undefined;

var _assert = __webpack_require__(2);

/**
 *
 * @enum
 */
var OperationType = exports.OperationType = undefined; /**
                                                        * Copyright 2017 Google Inc.
                                                        *
                                                        * Licensed under the Apache License, Version 2.0 (the "License");
                                                        * you may not use this file except in compliance with the License.
                                                        * You may obtain a copy of the License at
                                                        *
                                                        *   http://www.apache.org/licenses/LICENSE-2.0
                                                        *
                                                        * Unless required by applicable law or agreed to in writing, software
                                                        * distributed under the License is distributed on an "AS IS" BASIS,
                                                        * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                        * See the License for the specific language governing permissions and
                                                        * limitations under the License.
                                                        */

(function (OperationType) {
  OperationType[OperationType["OVERWRITE"] = 0] = "OVERWRITE";
  OperationType[OperationType["MERGE"] = 1] = "MERGE";
  OperationType[OperationType["ACK_USER_WRITE"] = 2] = "ACK_USER_WRITE";
  OperationType[OperationType["LISTEN_COMPLETE"] = 3] = "LISTEN_COMPLETE";
})(OperationType || (exports.OperationType = OperationType = {}));
/**
 * @param {boolean} fromUser
 * @param {boolean} fromServer
 * @param {?string} queryId
 * @param {boolean} tagged
 * @constructor
 */
var OperationSource = /** @class */function () {
  function OperationSource(fromUser, fromServer, queryId, tagged) {
    this.fromUser = fromUser;
    this.fromServer = fromServer;
    this.queryId = queryId;
    this.tagged = tagged;
    (0, _assert.assert)(!tagged || fromServer, 'Tagged queries must be from server.');
  }
  /**
   * @const
   * @type {!OperationSource}
   */
  OperationSource.User = new OperationSource(
  /*fromUser=*/true, false, null,
  /*tagged=*/false);
  /**
   * @const
   * @type {!OperationSource}
   */
  OperationSource.Server = new OperationSource(false,
  /*fromServer=*/true, null,
  /*tagged=*/false);
  /**
   * @param {string} queryId
   * @return {!OperationSource}
   */
  OperationSource.forServerTaggedQuery = function (queryId) {
    return new OperationSource(false,
    /*fromServer=*/true, queryId,
    /*tagged=*/true);
  };
  return OperationSource;
}();
exports.OperationSource = OperationSource;
//# sourceMappingURL=Operation.js.map


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*! @license Firebase v4.5.0
Build: rev-f49c8b5
Terms: https://firebase.google.com/terms/ */



Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.validateObjectContainsKey = exports.validateObject = exports.validateString = exports.validateBoolean = exports.validateCredential = exports.validateUrl = exports.validateWritablePath = exports.validateRootPathString = exports.validatePathString = exports.validateKey = exports.validateEventType = exports.validatePriority = exports.validateFirebaseMergeDataArg = exports.validateFirebaseMergePaths = exports.validateFirebaseData = exports.validateFirebaseDataArg = exports.isValidPriority = exports.isValidRootPathString = exports.isValidPathString = exports.isValidKey = exports.MAX_LEAF_SIZE_ = exports.INVALID_PATH_REGEX_ = exports.INVALID_KEY_REGEX_ = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /**
                                                                                                                                                                                                                                                                               * Copyright 2017 Google Inc.
                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                               * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                               * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                               * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                               *   http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                               * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                               * distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                               * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                               * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                               * limitations under the License.
                                                                                                                                                                                                                                                                               */


var _Path = __webpack_require__(5);

var _obj = __webpack_require__(4);

var _util = __webpack_require__(3);

var _validation = __webpack_require__(17);

var _utf = __webpack_require__(50);

/**
 * True for invalid Firebase keys
 * @type {RegExp}
 * @private
 */
var INVALID_KEY_REGEX_ = exports.INVALID_KEY_REGEX_ = /[\[\].#$\/\u0000-\u001F\u007F]/;
/**
 * True for invalid Firebase paths.
 * Allows '/' in paths.
 * @type {RegExp}
 * @private
 */
var INVALID_PATH_REGEX_ = exports.INVALID_PATH_REGEX_ = /[\[\].#$\u0000-\u001F\u007F]/;
/**
 * Maximum number of characters to allow in leaf value
 * @type {number}
 * @private
 */
var MAX_LEAF_SIZE_ = exports.MAX_LEAF_SIZE_ = 10 * 1024 * 1024;
/**
 * @param {*} key
 * @return {boolean}
 */
var isValidKey = exports.isValidKey = function isValidKey(key) {
    return typeof key === 'string' && key.length !== 0 && !INVALID_KEY_REGEX_.test(key);
};
/**
 * @param {string} pathString
 * @return {boolean}
 */
var isValidPathString = exports.isValidPathString = function isValidPathString(pathString) {
    return typeof pathString === 'string' && pathString.length !== 0 && !INVALID_PATH_REGEX_.test(pathString);
};
/**
 * @param {string} pathString
 * @return {boolean}
 */
var isValidRootPathString = exports.isValidRootPathString = function isValidRootPathString(pathString) {
    if (pathString) {
        // Allow '/.info/' at the beginning.
        pathString = pathString.replace(/^\/*\.info(\/|$)/, '/');
    }
    return isValidPathString(pathString);
};
/**
 * @param {*} priority
 * @return {boolean}
 */
var isValidPriority = exports.isValidPriority = function isValidPriority(priority) {
    return priority === null || typeof priority === 'string' || typeof priority === 'number' && !(0, _util.isInvalidJSONNumber)(priority) || priority && (typeof priority === 'undefined' ? 'undefined' : _typeof(priority)) === 'object' && (0, _obj.contains)(priority, '.sv');
};
/**
 * Pre-validate a datum passed as an argument to Firebase function.
 *
 * @param {string} fnName
 * @param {number} argumentNumber
 * @param {*} data
 * @param {!Path} path
 * @param {boolean} optional
 */
var validateFirebaseDataArg = exports.validateFirebaseDataArg = function validateFirebaseDataArg(fnName, argumentNumber, data, path, optional) {
    if (optional && data === undefined) return;
    validateFirebaseData((0, _validation.errorPrefix)(fnName, argumentNumber, optional), data, path);
};
/**
 * Validate a data object client-side before sending to server.
 *
 * @param {string} errorPrefix
 * @param {*} data
 * @param {!Path|!ValidationPath} path_
 */
var validateFirebaseData = exports.validateFirebaseData = function validateFirebaseData(errorPrefix, data, path_) {
    var path = path_ instanceof _Path.Path ? new _Path.ValidationPath(path_, errorPrefix) : path_;
    if (data === undefined) {
        throw new Error(errorPrefix + 'contains undefined ' + path.toErrorString());
    }
    if (typeof data === 'function') {
        throw new Error(errorPrefix + 'contains a function ' + path.toErrorString() + ' with contents = ' + data.toString());
    }
    if ((0, _util.isInvalidJSONNumber)(data)) {
        throw new Error(errorPrefix + 'contains ' + data.toString() + ' ' + path.toErrorString());
    }
    // Check max leaf size, but try to avoid the utf8 conversion if we can.
    if (typeof data === 'string' && data.length > MAX_LEAF_SIZE_ / 3 && (0, _utf.stringLength)(data) > MAX_LEAF_SIZE_) {
        throw new Error(errorPrefix + 'contains a string greater than ' + MAX_LEAF_SIZE_ + ' utf8 bytes ' + path.toErrorString() + " ('" + data.substring(0, 50) + "...')");
    }
    // TODO = Perf = Consider combining the recursive validation of keys into NodeFromJSON
    // to save extra walking of large objects.
    if (data && (typeof data === 'undefined' ? 'undefined' : _typeof(data)) === 'object') {
        var hasDotValue_1 = false,
            hasActualChild_1 = false;
        (0, _obj.forEach)(data, function (key, value) {
            if (key === '.value') {
                hasDotValue_1 = true;
            } else if (key !== '.priority' && key !== '.sv') {
                hasActualChild_1 = true;
                if (!isValidKey(key)) {
                    throw new Error(errorPrefix + ' contains an invalid key (' + key + ') ' + path.toErrorString() + '.  Keys must be non-empty strings ' + 'and can\'t contain ".", "#", "$", "/", "[", or "]"');
                }
            }
            path.push(key);
            validateFirebaseData(errorPrefix, value, path);
            path.pop();
        });
        if (hasDotValue_1 && hasActualChild_1) {
            throw new Error(errorPrefix + ' contains ".value" child ' + path.toErrorString() + ' in addition to actual children.');
        }
    }
};
/**
 * Pre-validate paths passed in the firebase function.
 *
 * @param {string} errorPrefix
 * @param {Array<!Path>} mergePaths
 */
var validateFirebaseMergePaths = exports.validateFirebaseMergePaths = function validateFirebaseMergePaths(errorPrefix, mergePaths) {
    var i, curPath;
    for (i = 0; i < mergePaths.length; i++) {
        curPath = mergePaths[i];
        var keys = curPath.slice();
        for (var j = 0; j < keys.length; j++) {
            if (keys[j] === '.priority' && j === keys.length - 1) {
                // .priority is OK
            } else if (!isValidKey(keys[j])) {
                throw new Error(errorPrefix + 'contains an invalid key (' + keys[j] + ') in path ' + curPath.toString() + '. Keys must be non-empty strings ' + 'and can\'t contain ".", "#", "$", "/", "[", or "]"');
            }
        }
    }
    // Check that update keys are not descendants of each other.
    // We rely on the property that sorting guarantees that ancestors come
    // right before descendants.
    mergePaths.sort(_Path.Path.comparePaths);
    var prevPath = null;
    for (i = 0; i < mergePaths.length; i++) {
        curPath = mergePaths[i];
        if (prevPath !== null && prevPath.contains(curPath)) {
            throw new Error(errorPrefix + 'contains a path ' + prevPath.toString() + ' that is ancestor of another path ' + curPath.toString());
        }
        prevPath = curPath;
    }
};
/**
 * pre-validate an object passed as an argument to firebase function (
 * must be an object - e.g. for firebase.update()).
 *
 * @param {string} fnName
 * @param {number} argumentNumber
 * @param {*} data
 * @param {!Path} path
 * @param {boolean} optional
 */
var validateFirebaseMergeDataArg = exports.validateFirebaseMergeDataArg = function validateFirebaseMergeDataArg(fnName, argumentNumber, data, path, optional) {
    if (optional && data === undefined) return;
    var errorPrefix = (0, _validation.errorPrefix)(fnName, argumentNumber, optional);
    if (!(data && (typeof data === 'undefined' ? 'undefined' : _typeof(data)) === 'object') || Array.isArray(data)) {
        throw new Error(errorPrefix + ' must be an object containing the children to replace.');
    }
    var mergePaths = [];
    (0, _obj.forEach)(data, function (key, value) {
        var curPath = new _Path.Path(key);
        validateFirebaseData(errorPrefix, value, path.child(curPath));
        if (curPath.getBack() === '.priority') {
            if (!isValidPriority(value)) {
                throw new Error(errorPrefix + "contains an invalid value for '" + curPath.toString() + "', which must be a valid " + 'Firebase priority (a string, finite number, server value, or null).');
            }
        }
        mergePaths.push(curPath);
    });
    validateFirebaseMergePaths(errorPrefix, mergePaths);
};
var validatePriority = exports.validatePriority = function validatePriority(fnName, argumentNumber, priority, optional) {
    if (optional && priority === undefined) return;
    if ((0, _util.isInvalidJSONNumber)(priority)) throw new Error((0, _validation.errorPrefix)(fnName, argumentNumber, optional) + 'is ' + priority.toString() + ', but must be a valid Firebase priority (a string, finite number, ' + 'server value, or null).');
    // Special case to allow importing data with a .sv.
    if (!isValidPriority(priority)) throw new Error((0, _validation.errorPrefix)(fnName, argumentNumber, optional) + 'must be a valid Firebase priority ' + '(a string, finite number, server value, or null).');
};
var validateEventType = exports.validateEventType = function validateEventType(fnName, argumentNumber, eventType, optional) {
    if (optional && eventType === undefined) return;
    switch (eventType) {
        case 'value':
        case 'child_added':
        case 'child_removed':
        case 'child_changed':
        case 'child_moved':
            break;
        default:
            throw new Error((0, _validation.errorPrefix)(fnName, argumentNumber, optional) + 'must be a valid event type = "value", "child_added", "child_removed", ' + '"child_changed", or "child_moved".');
    }
};
var validateKey = exports.validateKey = function validateKey(fnName, argumentNumber, key, optional) {
    if (optional && key === undefined) return;
    if (!isValidKey(key)) throw new Error((0, _validation.errorPrefix)(fnName, argumentNumber, optional) + 'was an invalid key = "' + key + '".  Firebase keys must be non-empty strings and ' + 'can\'t contain ".", "#", "$", "/", "[", or "]").');
};
var validatePathString = exports.validatePathString = function validatePathString(fnName, argumentNumber, pathString, optional) {
    if (optional && pathString === undefined) return;
    if (!isValidPathString(pathString)) throw new Error((0, _validation.errorPrefix)(fnName, argumentNumber, optional) + 'was an invalid path = "' + pathString + '". Paths must be non-empty strings and ' + 'can\'t contain ".", "#", "$", "[", or "]"');
};
var validateRootPathString = exports.validateRootPathString = function validateRootPathString(fnName, argumentNumber, pathString, optional) {
    if (pathString) {
        // Allow '/.info/' at the beginning.
        pathString = pathString.replace(/^\/*\.info(\/|$)/, '/');
    }
    validatePathString(fnName, argumentNumber, pathString, optional);
};
var validateWritablePath = exports.validateWritablePath = function validateWritablePath(fnName, path) {
    if (path.getFront() === '.info') {
        throw new Error(fnName + " failed = Can't modify data under /.info/");
    }
};
var validateUrl = exports.validateUrl = function validateUrl(fnName, argumentNumber, parsedUrl) {
    // TODO = Validate server better.
    var pathString = parsedUrl.path.toString();
    if (!(typeof parsedUrl.repoInfo.host === 'string') || parsedUrl.repoInfo.host.length === 0 || !isValidKey(parsedUrl.repoInfo.namespace) || pathString.length !== 0 && !isValidRootPathString(pathString)) {
        throw new Error((0, _validation.errorPrefix)(fnName, argumentNumber, false) + 'must be a valid firebase URL and ' + 'the path can\'t contain ".", "#", "$", "[", or "]".');
    }
};
var validateCredential = exports.validateCredential = function validateCredential(fnName, argumentNumber, cred, optional) {
    if (optional && cred === undefined) return;
    if (!(typeof cred === 'string')) throw new Error((0, _validation.errorPrefix)(fnName, argumentNumber, optional) + 'must be a valid credential (a string).');
};
var validateBoolean = exports.validateBoolean = function validateBoolean(fnName, argumentNumber, bool, optional) {
    if (optional && bool === undefined) return;
    if (typeof bool !== 'boolean') throw new Error((0, _validation.errorPrefix)(fnName, argumentNumber, optional) + 'must be a boolean.');
};
var validateString = exports.validateString = function validateString(fnName, argumentNumber, string, optional) {
    if (optional && string === undefined) return;
    if (!(typeof string === 'string')) {
        throw new Error((0, _validation.errorPrefix)(fnName, argumentNumber, optional) + 'must be a valid string.');
    }
};
var validateObject = exports.validateObject = function validateObject(fnName, argumentNumber, obj, optional) {
    if (optional && obj === undefined) return;
    if (!(obj && (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object') || obj === null) {
        throw new Error((0, _validation.errorPrefix)(fnName, argumentNumber, optional) + 'must be a valid object.');
    }
};
var validateObjectContainsKey = exports.validateObjectContainsKey = function validateObjectContainsKey(fnName, argumentNumber, obj, key, optional, opt_type) {
    var objectContainsKey = obj && (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object' && (0, _obj.contains)(obj, key);
    if (!objectContainsKey) {
        if (optional) {
            return;
        } else {
            throw new Error((0, _validation.errorPrefix)(fnName, argumentNumber, optional) + 'must contain the key "' + key + '"');
        }
    }
    if (opt_type) {
        var val = (0, _obj.safeGet)(obj, key);
        if (opt_type === 'number' && !(typeof val === 'number') || opt_type === 'string' && !(typeof val === 'string') || opt_type === 'boolean' && !(typeof val === 'boolean') || opt_type === 'function' && !(typeof val === 'function') || opt_type === 'object' && !((typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object') && val) {
            if (optional) {
                throw new Error((0, _validation.errorPrefix)(fnName, argumentNumber, optional) + 'contains invalid value for key "' + key + '" (must be of type "' + opt_type + '")');
            } else {
                throw new Error((0, _validation.errorPrefix)(fnName, argumentNumber, optional) + 'must contain the key "' + key + '" with type "' + opt_type + '"');
            }
        }
    }
};
//# sourceMappingURL=validation.js.map


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*! @license Firebase v4.5.0
Build: rev-f49c8b5
Terms: https://firebase.google.com/terms/ */



Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.errorPrefix = errorPrefix;
/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Check to make sure the appropriate number of arguments are provided for a public function.
 * Throws an error if it fails.
 *
 * @param {!string} fnName The function name
 * @param {!number} minCount The minimum number of arguments to allow for the function call
 * @param {!number} maxCount The maximum number of argument to allow for the function call
 * @param {!number} argCount The actual number of arguments provided.
 */
var validateArgCount = exports.validateArgCount = function validateArgCount(fnName, minCount, maxCount, argCount) {
    var argError;
    if (argCount < minCount) {
        argError = 'at least ' + minCount;
    } else if (argCount > maxCount) {
        argError = maxCount === 0 ? 'none' : 'no more than ' + maxCount;
    }
    if (argError) {
        var error = fnName + ' failed: Was called with ' + argCount + (argCount === 1 ? ' argument.' : ' arguments.') + ' Expects ' + argError + '.';
        throw new Error(error);
    }
};
/**
 * Generates a string to prefix an error message about failed argument validation
 *
 * @param {!string} fnName The function name
 * @param {!number} argumentNumber The index of the argument
 * @param {boolean} optional Whether or not the argument is optional
 * @return {!string} The prefix to add to the error thrown for validation.
 */
function errorPrefix(fnName, argumentNumber, optional) {
    var argName = '';
    switch (argumentNumber) {
        case 1:
            argName = optional ? 'first' : 'First';
            break;
        case 2:
            argName = optional ? 'second' : 'Second';
            break;
        case 3:
            argName = optional ? 'third' : 'Third';
            break;
        case 4:
            argName = optional ? 'fourth' : 'Fourth';
            break;
        default:
            throw new Error('errorPrefix called with argumentNumber > 4.  Need to update it?');
    }
    var error = fnName + ' failed: ';
    error += argName + ' argument ';
    return error;
}
/**
 * @param {!string} fnName
 * @param {!number} argumentNumber
 * @param {!string} namespace
 * @param {boolean} optional
 */
var validateNamespace = exports.validateNamespace = function validateNamespace(fnName, argumentNumber, namespace, optional) {
    if (optional && !namespace) return;
    if (typeof namespace !== 'string') {
        //TODO: I should do more validation here. We only allow certain chars in namespaces.
        throw new Error(errorPrefix(fnName, argumentNumber, optional) + 'must be a valid firebase namespace.');
    }
};
var validateCallback = exports.validateCallback = function validateCallback(fnName, argumentNumber, callback, optional) {
    if (optional && !callback) return;
    if (typeof callback !== 'function') throw new Error(errorPrefix(fnName, argumentNumber, optional) + 'must be a valid function.');
};
var validateContextObject = exports.validateContextObject = function validateContextObject(fnName, argumentNumber, context, optional) {
    if (optional && !context) return;
    if ((typeof context === 'undefined' ? 'undefined' : _typeof(context)) !== 'object' || context === null) throw new Error(errorPrefix(fnName, argumentNumber, optional) + 'must be a valid context object.');
};
//# sourceMappingURL=validation.js.map


/***/ }),
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*! @license Firebase v4.5.0
Build: rev-f49c8b5
Terms: https://firebase.google.com/terms/ */



Object.defineProperty(exports, "__esModule", {
  value: true
});

__webpack_require__(131);

var _firebase_app = __webpack_require__(86);

// Export a single instance of firebase app
/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// Import the needed shims
var firebase = (0, _firebase_app.createFirebaseNamespace)();
// Import the createFirebaseNamespace function
exports.default = firebase;
module.exports = exports['default'];
//# sourceMappingURL=app.js.map


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*! @license Firebase v4.5.0
Build: rev-f49c8b5
Terms: https://firebase.google.com/terms/ */



Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.attachDummyErrorHandler = exports.Deferred = exports.PromiseImpl = undefined;

var _globalScope = __webpack_require__(79);

var PromiseImpl = exports.PromiseImpl = _globalScope.globalScope.Promise || __webpack_require__(121);
/**
 * A deferred promise implementation.
 */
/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Deferred = /** @class */function () {
    /** @constructor */
    function Deferred() {
        var self = this;
        this.resolve = null;
        this.reject = null;
        this.promise = new PromiseImpl(function (resolve, reject) {
            self.resolve = resolve;
            self.reject = reject;
        });
    }
    /**
     * Our API internals are not promiseified and cannot because our callback APIs have subtle expectations around
     * invoking promises inline, which Promises are forbidden to do. This method accepts an optional node-style callback
     * and returns a node-style callback which will resolve or reject the Deferred's promise.
     * @param {((?function(?(Error)): (?|undefined))| (?function(?(Error),?=): (?|undefined)))=} opt_nodeCallback
     * @return {!function(?(Error), ?=)}
     */
    Deferred.prototype.wrapCallback = function (opt_nodeCallback) {
        var self = this;
        /**
           * @param {?Error} error
           * @param {?=} opt_value
           */
        function meta(error, opt_value) {
            if (error) {
                self.reject(error);
            } else {
                self.resolve(opt_value);
            }
            if (typeof opt_nodeCallback === 'function') {
                attachDummyErrorHandler(self.promise);
                // Some of our callbacks don't expect a value and our own tests
                // assert that the parameter length is 1
                if (opt_nodeCallback.length === 1) {
                    opt_nodeCallback(error);
                } else {
                    opt_nodeCallback(error, opt_value);
                }
            }
        }
        return meta;
    };
    return Deferred;
}();
exports.Deferred = Deferred;
/**
 * Chrome (and maybe other browsers) report an Error in the console if you reject a promise
 * and nobody handles the error. This is normally a good thing, but this will confuse devs who
 * never intended to use promises in the first place. So in some cases (in particular, if the
 * developer attached a callback), we should attach a dummy resolver to the promise to suppress
 * this error.
 *
 * Note: We can't do this all the time, since it breaks the Promise spec (though in the obscure
 * 3.3.3 section related to upgrading non-compliant promises).
 * @param {!firebase.Promise} promise
 */

var attachDummyErrorHandler = exports.attachDummyErrorHandler = function attachDummyErrorHandler(promise) {
    promise.catch(function () {});
};
//# sourceMappingURL=promise.js.map


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*! @license Firebase v4.5.0
Build: rev-f49c8b5
Terms: https://firebase.google.com/terms/ */



Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @constructor
 * @struct
 * @param {!string} type The event type
 * @param {!Node} snapshotNode The data
 * @param {string=} childName The name for this child, if it's a child event
 * @param {Node=} oldSnap Used for intermediate processing of child changed events
 * @param {string=} prevName The name for the previous child, if applicable
 */
var Change = /** @class */function () {
  function Change(type, snapshotNode, childName, oldSnap, prevName) {
    this.type = type;
    this.snapshotNode = snapshotNode;
    this.childName = childName;
    this.oldSnap = oldSnap;
    this.prevName = prevName;
  }
  /**
   * @param {!Node} snapshot
   * @return {!Change}
   */
  Change.valueChange = function (snapshot) {
    return new Change(Change.VALUE, snapshot);
  };
  /**
   * @param {string} childKey
   * @param {!Node} snapshot
   * @return {!Change}
   */
  Change.childAddedChange = function (childKey, snapshot) {
    return new Change(Change.CHILD_ADDED, snapshot, childKey);
  };
  /**
   * @param {string} childKey
   * @param {!Node} snapshot
   * @return {!Change}
   */
  Change.childRemovedChange = function (childKey, snapshot) {
    return new Change(Change.CHILD_REMOVED, snapshot, childKey);
  };
  /**
   * @param {string} childKey
   * @param {!Node} newSnapshot
   * @param {!Node} oldSnapshot
   * @return {!Change}
   */
  Change.childChangedChange = function (childKey, newSnapshot, oldSnapshot) {
    return new Change(Change.CHILD_CHANGED, newSnapshot, childKey, oldSnapshot);
  };
  /**
   * @param {string} childKey
   * @param {!Node} snapshot
   * @return {!Change}
   */
  Change.childMovedChange = function (childKey, snapshot) {
    return new Change(Change.CHILD_MOVED, snapshot, childKey);
  };
  //event types
  /** Event type for a child added */
  Change.CHILD_ADDED = 'child_added';
  /** Event type for a child removed */
  Change.CHILD_REMOVED = 'child_removed';
  /** Event type for a child changed */
  Change.CHILD_CHANGED = 'child_changed';
  /** Event type for a child moved */
  Change.CHILD_MOVED = 'child_moved';
  /** Event type for a value change */
  Change.VALUE = 'value';
  return Change;
}();
exports.Change = Change;
//# sourceMappingURL=Change.js.map


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*! @license Firebase v4.5.0
Build: rev-f49c8b5
Terms: https://firebase.google.com/terms/ */



Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isNodeSdk = exports.isReactNative = exports.isMobileCordova = exports.getUA = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /**
                                                                                                                                                                                                                                                                               * Copyright 2017 Google Inc.
                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                               * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                               * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                               * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                               *   http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                               * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                               * distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                               * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                               * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                               * limitations under the License.
                                                                                                                                                                                                                                                                               */


var _constants = __webpack_require__(42);

/**
 * Returns navigator.userAgent string or '' if it's not defined.
 * @return {string} user agent string
 */
var getUA = exports.getUA = function getUA() {
    if (typeof navigator !== 'undefined' && typeof navigator['userAgent'] === 'string') {
        return navigator['userAgent'];
    } else {
        return '';
    }
};
/**
 * Detect Cordova / PhoneGap / Ionic frameworks on a mobile device.
 *
 * Deliberately does not rely on checking `file://` URLs (as this fails PhoneGap in the Ripple emulator) nor
 * Cordova `onDeviceReady`, which would normally wait for a callback.
 *
 * @return {boolean} isMobileCordova
 */
var isMobileCordova = exports.isMobileCordova = function isMobileCordova() {
    return typeof window !== 'undefined' && !!(window['cordova'] || window['phonegap'] || window['PhoneGap']) && /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(getUA());
};
/**
 * Detect React Native.
 *
 * @return {boolean} True if ReactNative environment is detected.
 */
var isReactNative = exports.isReactNative = function isReactNative() {
    return (typeof navigator === 'undefined' ? 'undefined' : _typeof(navigator)) === 'object' && navigator['product'] === 'ReactNative';
};
/**
 * Detect Node.js.
 *
 * @return {boolean} True if Node.js environment is detected.
 */
var isNodeSdk = exports.isNodeSdk = function isNodeSdk() {
    return _constants.CONSTANTS.NODE_CLIENT === true || _constants.CONSTANTS.NODE_ADMIN === true;
};
//# sourceMappingURL=environment.js.map


/***/ }),
/* 32 */,
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*! @license Firebase v4.5.0
Build: rev-f49c8b5
Terms: https://firebase.google.com/terms/ */



Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.KEY_INDEX = exports.KeyIndex = undefined;

var _Index = __webpack_require__(37);

var _Node = __webpack_require__(10);

var _util = __webpack_require__(3);

var _assert = __webpack_require__(2);

/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var __extends = undefined && undefined.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();

var __EMPTY_NODE;
var KeyIndex = /** @class */function (_super) {
    __extends(KeyIndex, _super);
    function KeyIndex() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(KeyIndex, "__EMPTY_NODE", {
        get: function get() {
            return __EMPTY_NODE;
        },
        set: function set(val) {
            __EMPTY_NODE = val;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @inheritDoc
     */
    KeyIndex.prototype.compare = function (a, b) {
        return (0, _util.nameCompare)(a.name, b.name);
    };
    /**
     * @inheritDoc
     */
    KeyIndex.prototype.isDefinedOn = function (node) {
        // We could probably return true here (since every node has a key), but it's never called
        // so just leaving unimplemented for now.
        throw (0, _assert.assertionError)('KeyIndex.isDefinedOn not expected to be called.');
    };
    /**
     * @inheritDoc
     */
    KeyIndex.prototype.indexedValueChanged = function (oldNode, newNode) {
        return false; // The key for a node never changes.
    };
    /**
     * @inheritDoc
     */
    KeyIndex.prototype.minPost = function () {
        return _Node.NamedNode.MIN;
    };
    /**
     * @inheritDoc
     */
    KeyIndex.prototype.maxPost = function () {
        // TODO: This should really be created once and cached in a static property, but
        // NamedNode isn't defined yet, so I can't use it in a static.  Bleh.
        return new _Node.NamedNode(_util.MAX_NAME, __EMPTY_NODE);
    };
    /**
     * @param {*} indexValue
     * @param {string} name
     * @return {!NamedNode}
     */
    KeyIndex.prototype.makePost = function (indexValue, name) {
        (0, _assert.assert)(typeof indexValue === 'string', 'KeyIndex indexValue must always be a string.');
        // We just use empty node, but it'll never be compared, since our comparator only looks at name.
        return new _Node.NamedNode(indexValue, __EMPTY_NODE);
    };
    /**
     * @return {!string} String representation for inclusion in a query spec
     */
    KeyIndex.prototype.toString = function () {
        return '.key';
    };
    return KeyIndex;
}(_Index.Index);
exports.KeyIndex = KeyIndex;
var KEY_INDEX = exports.KEY_INDEX = new KeyIndex();
//# sourceMappingURL=KeyIndex.js.map


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*! @license Firebase v4.5.0
Build: rev-f49c8b5
Terms: https://firebase.google.com/terms/ */



Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /**
                                                                                                                                                                                                                                                                               * Copyright 2017 Google Inc.
                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                               * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                               * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                               * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                               *   http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                               * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                               * distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                               * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                               * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                               * limitations under the License.
                                                                                                                                                                                                                                                                               */


exports.nodeFromJSON = nodeFromJSON;

var _ChildrenNode = __webpack_require__(8);

var _LeafNode = __webpack_require__(36);

var _Node = __webpack_require__(10);

var _obj = __webpack_require__(4);

var _assert = __webpack_require__(2);

var _childSet = __webpack_require__(63);

var _comparators = __webpack_require__(64);

var _IndexMap = __webpack_require__(62);

var _PriorityIndex = __webpack_require__(7);

var USE_HINZE = true;
/**
 * Constructs a snapshot node representing the passed JSON and returns it.
 * @param {*} json JSON to create a node for.
 * @param {?string|?number=} priority Optional priority to use.  This will be ignored if the
 * passed JSON contains a .priority property.
 * @return {!Node}
 */
function nodeFromJSON(json, priority) {
    if (priority === void 0) {
        priority = null;
    }
    if (json === null) {
        return _ChildrenNode.ChildrenNode.EMPTY_NODE;
    }
    if ((typeof json === 'undefined' ? 'undefined' : _typeof(json)) === 'object' && '.priority' in json) {
        priority = json['.priority'];
    }
    (0, _assert.assert)(priority === null || typeof priority === 'string' || typeof priority === 'number' || (typeof priority === 'undefined' ? 'undefined' : _typeof(priority)) === 'object' && '.sv' in priority, 'Invalid priority type found: ' + (typeof priority === 'undefined' ? 'undefined' : _typeof(priority)));
    if ((typeof json === 'undefined' ? 'undefined' : _typeof(json)) === 'object' && '.value' in json && json['.value'] !== null) {
        json = json['.value'];
    }
    // Valid leaf nodes include non-objects or server-value wrapper objects
    if ((typeof json === 'undefined' ? 'undefined' : _typeof(json)) !== 'object' || '.sv' in json) {
        var jsonLeaf = json;
        return new _LeafNode.LeafNode(jsonLeaf, nodeFromJSON(priority));
    }
    if (!(json instanceof Array) && USE_HINZE) {
        var children_1 = [];
        var childrenHavePriority_1 = false;
        var hinzeJsonObj_1 = json;
        (0, _obj.forEach)(hinzeJsonObj_1, function (key, child) {
            if (typeof key !== 'string' || key.substring(0, 1) !== '.') {
                // Ignore metadata nodes
                var childNode = nodeFromJSON(hinzeJsonObj_1[key]);
                if (!childNode.isEmpty()) {
                    childrenHavePriority_1 = childrenHavePriority_1 || !childNode.getPriority().isEmpty();
                    children_1.push(new _Node.NamedNode(key, childNode));
                }
            }
        });
        if (children_1.length == 0) {
            return _ChildrenNode.ChildrenNode.EMPTY_NODE;
        }
        var childSet = (0, _childSet.buildChildSet)(children_1, _comparators.NAME_ONLY_COMPARATOR, function (namedNode) {
            return namedNode.name;
        }, _comparators.NAME_COMPARATOR);
        if (childrenHavePriority_1) {
            var sortedChildSet = (0, _childSet.buildChildSet)(children_1, _PriorityIndex.PRIORITY_INDEX.getCompare());
            return new _ChildrenNode.ChildrenNode(childSet, nodeFromJSON(priority), new _IndexMap.IndexMap({ '.priority': sortedChildSet }, { '.priority': _PriorityIndex.PRIORITY_INDEX }));
        } else {
            return new _ChildrenNode.ChildrenNode(childSet, nodeFromJSON(priority), _IndexMap.IndexMap.Default);
        }
    } else {
        var node_1 = _ChildrenNode.ChildrenNode.EMPTY_NODE;
        var jsonObj_1 = json;
        (0, _obj.forEach)(jsonObj_1, function (key, childData) {
            if ((0, _obj.contains)(jsonObj_1, key)) {
                if (key.substring(0, 1) !== '.') {
                    // ignore metadata nodes.
                    var childNode = nodeFromJSON(childData);
                    if (childNode.isLeafNode() || !childNode.isEmpty()) node_1 = node_1.updateImmediateChild(key, childNode);
                }
            }
        });
        return node_1.updatePriority(nodeFromJSON(priority));
    }
}
(0, _PriorityIndex.setNodeFromJSON)(nodeFromJSON);
//# sourceMappingURL=nodeFromJSON.js.map


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*! @license Firebase v4.5.0
Build: rev-f49c8b5
Terms: https://firebase.google.com/terms/ */



Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Repo = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /**
                                                                                                                                                                                                                                                                               * Copyright 2017 Google Inc.
                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                               * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                               * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                               * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                               *   http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                               * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                               * distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                               * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                               * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                               * limitations under the License.
                                                                                                                                                                                                                                                                               */


var _ServerValues = __webpack_require__(71);

var _nodeFromJSON = __webpack_require__(34);

var _Path = __webpack_require__(5);

var _SparseSnapshotTree = __webpack_require__(59);

var _SyncTree = __webpack_require__(96);

var _SnapshotHolder = __webpack_require__(95);

var _json = __webpack_require__(14);

var _util = __webpack_require__(3);

var _obj = __webpack_require__(4);

var _AuthTokenProvider = __webpack_require__(91);

var _StatsManager = __webpack_require__(45);

var _StatsReporter = __webpack_require__(102);

var _StatsListener = __webpack_require__(68);

var _EventQueue = __webpack_require__(113);

var _PersistentConnection = __webpack_require__(56);

var _ReadonlyRestClient = __webpack_require__(93);

var _Database = __webpack_require__(54);

var INTERRUPT_REASON = 'repo_interrupt';
/**
 * A connection to a single data repository.
 */
var Repo = /** @class */function () {
    /**
     * @param {!RepoInfo} repoInfo_
     * @param {boolean} forceRestClient
     * @param {!FirebaseApp} app
     */
    function Repo(repoInfo_, forceRestClient, app) {
        var _this = this;
        this.repoInfo_ = repoInfo_;
        this.app = app;
        this.dataUpdateCount = 0;
        this.statsListener_ = null;
        this.eventQueue_ = new _EventQueue.EventQueue();
        this.nextWriteId_ = 1;
        this.interceptServerDataCallback_ = null;
        // A list of data pieces and paths to be set when this client disconnects.
        this.onDisconnect_ = new _SparseSnapshotTree.SparseSnapshotTree();
        /**
         * TODO: This should be @private but it's used by test_access.js and internal.js
         * @type {?PersistentConnection}
         */
        this.persistentConnection_ = null;
        /** @type {!AuthTokenProvider} */
        var authTokenProvider = new _AuthTokenProvider.AuthTokenProvider(app);
        this.stats_ = _StatsManager.StatsManager.getCollection(repoInfo_);
        if (forceRestClient || (0, _util.beingCrawled)()) {
            this.server_ = new _ReadonlyRestClient.ReadonlyRestClient(this.repoInfo_, this.onDataUpdate_.bind(this), authTokenProvider);
            // Minor hack: Fire onConnect immediately, since there's no actual connection.
            setTimeout(this.onConnectStatus_.bind(this, true), 0);
        } else {
            var authOverride = app.options['databaseAuthVariableOverride'];
            // Validate authOverride
            if (typeof authOverride !== 'undefined' && authOverride !== null) {
                if ((typeof authOverride === 'undefined' ? 'undefined' : _typeof(authOverride)) !== 'object') {
                    throw new Error('Only objects are supported for option databaseAuthVariableOverride');
                }
                try {
                    (0, _json.stringify)(authOverride);
                } catch (e) {
                    throw new Error('Invalid authOverride provided: ' + e);
                }
            }
            this.persistentConnection_ = new _PersistentConnection.PersistentConnection(this.repoInfo_, this.onDataUpdate_.bind(this), this.onConnectStatus_.bind(this), this.onServerInfoUpdate_.bind(this), authTokenProvider, authOverride);
            this.server_ = this.persistentConnection_;
        }
        authTokenProvider.addTokenChangeListener(function (token) {
            _this.server_.refreshAuthToken(token);
        });
        // In the case of multiple Repos for the same repoInfo (i.e. there are multiple Firebase.Contexts being used),
        // we only want to create one StatsReporter.  As such, we'll report stats over the first Repo created.
        this.statsReporter_ = _StatsManager.StatsManager.getOrCreateReporter(repoInfo_, function () {
            return new _StatsReporter.StatsReporter(_this.stats_, _this.server_);
        });
        this.transactions_init_();
        // Used for .info.
        this.infoData_ = new _SnapshotHolder.SnapshotHolder();
        this.infoSyncTree_ = new _SyncTree.SyncTree({
            startListening: function startListening(query, tag, currentHashFn, onComplete) {
                var infoEvents = [];
                var node = _this.infoData_.getNode(query.path);
                // This is possibly a hack, but we have different semantics for .info endpoints. We don't raise null events
                // on initial data...
                if (!node.isEmpty()) {
                    infoEvents = _this.infoSyncTree_.applyServerOverwrite(query.path, node);
                    setTimeout(function () {
                        onComplete('ok');
                    }, 0);
                }
                return infoEvents;
            },
            stopListening: function stopListening() {}
        });
        this.updateInfo_('connected', false);
        this.serverSyncTree_ = new _SyncTree.SyncTree({
            startListening: function startListening(query, tag, currentHashFn, onComplete) {
                _this.server_.listen(query, currentHashFn, tag, function (status, data) {
                    var events = onComplete(status, data);
                    _this.eventQueue_.raiseEventsForChangedPath(query.path, events);
                });
                // No synchronous events for network-backed sync trees
                return [];
            },
            stopListening: function stopListening(query, tag) {
                _this.server_.unlisten(query, tag);
            }
        });
    }
    /**
     * @return {string}  The URL corresponding to the root of this Firebase.
     */
    Repo.prototype.toString = function () {
        return (this.repoInfo_.secure ? 'https://' : 'http://') + this.repoInfo_.host;
    };
    /**
     * @return {!string} The namespace represented by the repo.
     */
    Repo.prototype.name = function () {
        return this.repoInfo_.namespace;
    };
    /**
     * @return {!number} The time in milliseconds, taking the server offset into account if we have one.
     */
    Repo.prototype.serverTime = function () {
        var offsetNode = this.infoData_.getNode(new _Path.Path('.info/serverTimeOffset'));
        var offset = offsetNode.val() || 0;
        return new Date().getTime() + offset;
    };
    /**
     * Generate ServerValues using some variables from the repo object.
     * @return {!Object}
     */
    Repo.prototype.generateServerValues = function () {
        return (0, _ServerValues.generateWithValues)({
            timestamp: this.serverTime()
        });
    };
    /**
     * Called by realtime when we get new messages from the server.
     *
     * @private
     * @param {string} pathString
     * @param {*} data
     * @param {boolean} isMerge
     * @param {?number} tag
     */
    Repo.prototype.onDataUpdate_ = function (pathString, data, isMerge, tag) {
        // For testing.
        this.dataUpdateCount++;
        var path = new _Path.Path(pathString);
        data = this.interceptServerDataCallback_ ? this.interceptServerDataCallback_(pathString, data) : data;
        var events = [];
        if (tag) {
            if (isMerge) {
                var taggedChildren = (0, _obj.map)(data, function (raw) {
                    return (0, _nodeFromJSON.nodeFromJSON)(raw);
                });
                events = this.serverSyncTree_.applyTaggedQueryMerge(path, taggedChildren, tag);
            } else {
                var taggedSnap = (0, _nodeFromJSON.nodeFromJSON)(data);
                events = this.serverSyncTree_.applyTaggedQueryOverwrite(path, taggedSnap, tag);
            }
        } else if (isMerge) {
            var changedChildren = (0, _obj.map)(data, function (raw) {
                return (0, _nodeFromJSON.nodeFromJSON)(raw);
            });
            events = this.serverSyncTree_.applyServerMerge(path, changedChildren);
        } else {
            var snap = (0, _nodeFromJSON.nodeFromJSON)(data);
            events = this.serverSyncTree_.applyServerOverwrite(path, snap);
        }
        var affectedPath = path;
        if (events.length > 0) {
            // Since we have a listener outstanding for each transaction, receiving any events
            // is a proxy for some change having occurred.
            affectedPath = this.rerunTransactions_(path);
        }
        this.eventQueue_.raiseEventsForChangedPath(affectedPath, events);
    };
    /**
     * TODO: This should be @private but it's used by test_access.js and internal.js
     * @param {?function(!string, *):*} callback
     * @private
     */
    Repo.prototype.interceptServerData_ = function (callback) {
        this.interceptServerDataCallback_ = callback;
    };
    /**
     * @param {!boolean} connectStatus
     * @private
     */
    Repo.prototype.onConnectStatus_ = function (connectStatus) {
        this.updateInfo_('connected', connectStatus);
        if (connectStatus === false) {
            this.runOnDisconnectEvents_();
        }
    };
    /**
     * @param {!Object} updates
     * @private
     */
    Repo.prototype.onServerInfoUpdate_ = function (updates) {
        var _this = this;
        (0, _util.each)(updates, function (value, key) {
            _this.updateInfo_(key, value);
        });
    };
    /**
     *
     * @param {!string} pathString
     * @param {*} value
     * @private
     */
    Repo.prototype.updateInfo_ = function (pathString, value) {
        var path = new _Path.Path('/.info/' + pathString);
        var newNode = (0, _nodeFromJSON.nodeFromJSON)(value);
        this.infoData_.updateSnapshot(path, newNode);
        var events = this.infoSyncTree_.applyServerOverwrite(path, newNode);
        this.eventQueue_.raiseEventsForChangedPath(path, events);
    };
    /**
     * @return {!number}
     * @private
     */
    Repo.prototype.getNextWriteId_ = function () {
        return this.nextWriteId_++;
    };
    /**
     * @param {!Path} path
     * @param {*} newVal
     * @param {number|string|null} newPriority
     * @param {?function(?Error, *=)} onComplete
     */
    Repo.prototype.setWithPriority = function (path, newVal, newPriority, onComplete) {
        var _this = this;
        this.log_('set', {
            path: path.toString(),
            value: newVal,
            priority: newPriority
        });
        // TODO: Optimize this behavior to either (a) store flag to skip resolving where possible and / or
        // (b) store unresolved paths on JSON parse
        var serverValues = this.generateServerValues();
        var newNodeUnresolved = (0, _nodeFromJSON.nodeFromJSON)(newVal, newPriority);
        var newNode = (0, _ServerValues.resolveDeferredValueSnapshot)(newNodeUnresolved, serverValues);
        var writeId = this.getNextWriteId_();
        var events = this.serverSyncTree_.applyUserOverwrite(path, newNode, writeId, true);
        this.eventQueue_.queueEvents(events);
        this.server_.put(path.toString(), newNodeUnresolved.val( /*export=*/true), function (status, errorReason) {
            var success = status === 'ok';
            if (!success) {
                (0, _util.warn)('set at ' + path + ' failed: ' + status);
            }
            var clearEvents = _this.serverSyncTree_.ackUserWrite(writeId, !success);
            _this.eventQueue_.raiseEventsForChangedPath(path, clearEvents);
            _this.callOnCompleteCallback(onComplete, status, errorReason);
        });
        var affectedPath = this.abortTransactions_(path);
        this.rerunTransactions_(affectedPath);
        // We queued the events above, so just flush the queue here
        this.eventQueue_.raiseEventsForChangedPath(affectedPath, []);
    };
    /**
     * @param {!Path} path
     * @param {!Object} childrenToMerge
     * @param {?function(?Error, *=)} onComplete
     */
    Repo.prototype.update = function (path, childrenToMerge, onComplete) {
        var _this = this;
        this.log_('update', { path: path.toString(), value: childrenToMerge });
        // Start with our existing data and merge each child into it.
        var empty = true;
        var serverValues = this.generateServerValues();
        var changedChildren = {};
        (0, _obj.forEach)(childrenToMerge, function (changedKey, changedValue) {
            empty = false;
            var newNodeUnresolved = (0, _nodeFromJSON.nodeFromJSON)(changedValue);
            changedChildren[changedKey] = (0, _ServerValues.resolveDeferredValueSnapshot)(newNodeUnresolved, serverValues);
        });
        if (!empty) {
            var writeId_1 = this.getNextWriteId_();
            var events = this.serverSyncTree_.applyUserMerge(path, changedChildren, writeId_1);
            this.eventQueue_.queueEvents(events);
            this.server_.merge(path.toString(), childrenToMerge, function (status, errorReason) {
                var success = status === 'ok';
                if (!success) {
                    (0, _util.warn)('update at ' + path + ' failed: ' + status);
                }
                var clearEvents = _this.serverSyncTree_.ackUserWrite(writeId_1, !success);
                var affectedPath = clearEvents.length > 0 ? _this.rerunTransactions_(path) : path;
                _this.eventQueue_.raiseEventsForChangedPath(affectedPath, clearEvents);
                _this.callOnCompleteCallback(onComplete, status, errorReason);
            });
            (0, _obj.forEach)(childrenToMerge, function (changedPath) {
                var affectedPath = _this.abortTransactions_(path.child(changedPath));
                _this.rerunTransactions_(affectedPath);
            });
            // We queued the events above, so just flush the queue here
            this.eventQueue_.raiseEventsForChangedPath(path, []);
        } else {
            (0, _util.log)("update() called with empty data.  Don't do anything.");
            this.callOnCompleteCallback(onComplete, 'ok');
        }
    };
    /**
     * Applies all of the changes stored up in the onDisconnect_ tree.
     * @private
     */
    Repo.prototype.runOnDisconnectEvents_ = function () {
        var _this = this;
        this.log_('onDisconnectEvents');
        var serverValues = this.generateServerValues();
        var resolvedOnDisconnectTree = (0, _ServerValues.resolveDeferredValueTree)(this.onDisconnect_, serverValues);
        var events = [];
        resolvedOnDisconnectTree.forEachTree(_Path.Path.Empty, function (path, snap) {
            events = events.concat(_this.serverSyncTree_.applyServerOverwrite(path, snap));
            var affectedPath = _this.abortTransactions_(path);
            _this.rerunTransactions_(affectedPath);
        });
        this.onDisconnect_ = new _SparseSnapshotTree.SparseSnapshotTree();
        this.eventQueue_.raiseEventsForChangedPath(_Path.Path.Empty, events);
    };
    /**
     * @param {!Path} path
     * @param {?function(?Error, *=)} onComplete
     */
    Repo.prototype.onDisconnectCancel = function (path, onComplete) {
        var _this = this;
        this.server_.onDisconnectCancel(path.toString(), function (status, errorReason) {
            if (status === 'ok') {
                _this.onDisconnect_.forget(path);
            }
            _this.callOnCompleteCallback(onComplete, status, errorReason);
        });
    };
    /**
     * @param {!Path} path
     * @param {*} value
     * @param {?function(?Error, *=)} onComplete
     */
    Repo.prototype.onDisconnectSet = function (path, value, onComplete) {
        var _this = this;
        var newNode = (0, _nodeFromJSON.nodeFromJSON)(value);
        this.server_.onDisconnectPut(path.toString(), newNode.val( /*export=*/true), function (status, errorReason) {
            if (status === 'ok') {
                _this.onDisconnect_.remember(path, newNode);
            }
            _this.callOnCompleteCallback(onComplete, status, errorReason);
        });
    };
    /**
     * @param {!Path} path
     * @param {*} value
     * @param {*} priority
     * @param {?function(?Error, *=)} onComplete
     */
    Repo.prototype.onDisconnectSetWithPriority = function (path, value, priority, onComplete) {
        var _this = this;
        var newNode = (0, _nodeFromJSON.nodeFromJSON)(value, priority);
        this.server_.onDisconnectPut(path.toString(), newNode.val( /*export=*/true), function (status, errorReason) {
            if (status === 'ok') {
                _this.onDisconnect_.remember(path, newNode);
            }
            _this.callOnCompleteCallback(onComplete, status, errorReason);
        });
    };
    /**
     * @param {!Path} path
     * @param {*} childrenToMerge
     * @param {?function(?Error, *=)} onComplete
     */
    Repo.prototype.onDisconnectUpdate = function (path, childrenToMerge, onComplete) {
        var _this = this;
        if ((0, _obj.isEmpty)(childrenToMerge)) {
            (0, _util.log)("onDisconnect().update() called with empty data.  Don't do anything.");
            this.callOnCompleteCallback(onComplete, 'ok');
            return;
        }
        this.server_.onDisconnectMerge(path.toString(), childrenToMerge, function (status, errorReason) {
            if (status === 'ok') {
                (0, _obj.forEach)(childrenToMerge, function (childName, childNode) {
                    var newChildNode = (0, _nodeFromJSON.nodeFromJSON)(childNode);
                    _this.onDisconnect_.remember(path.child(childName), newChildNode);
                });
            }
            _this.callOnCompleteCallback(onComplete, status, errorReason);
        });
    };
    /**
     * @param {!Query} query
     * @param {!EventRegistration} eventRegistration
     */
    Repo.prototype.addEventCallbackForQuery = function (query, eventRegistration) {
        var events;
        if (query.path.getFront() === '.info') {
            events = this.infoSyncTree_.addEventRegistration(query, eventRegistration);
        } else {
            events = this.serverSyncTree_.addEventRegistration(query, eventRegistration);
        }
        this.eventQueue_.raiseEventsAtPath(query.path, events);
    };
    /**
     * @param {!Query} query
     * @param {?EventRegistration} eventRegistration
     */
    Repo.prototype.removeEventCallbackForQuery = function (query, eventRegistration) {
        // These are guaranteed not to raise events, since we're not passing in a cancelError. However, we can future-proof
        // a little bit by handling the return values anyways.
        var events;
        if (query.path.getFront() === '.info') {
            events = this.infoSyncTree_.removeEventRegistration(query, eventRegistration);
        } else {
            events = this.serverSyncTree_.removeEventRegistration(query, eventRegistration);
        }
        this.eventQueue_.raiseEventsAtPath(query.path, events);
    };
    Repo.prototype.interrupt = function () {
        if (this.persistentConnection_) {
            this.persistentConnection_.interrupt(INTERRUPT_REASON);
        }
    };
    Repo.prototype.resume = function () {
        if (this.persistentConnection_) {
            this.persistentConnection_.resume(INTERRUPT_REASON);
        }
    };
    Repo.prototype.stats = function (showDelta) {
        if (showDelta === void 0) {
            showDelta = false;
        }
        if (typeof console === 'undefined') return;
        var stats;
        if (showDelta) {
            if (!this.statsListener_) this.statsListener_ = new _StatsListener.StatsListener(this.stats_);
            stats = this.statsListener_.get();
        } else {
            stats = this.stats_.get();
        }
        var longestName = Object.keys(stats).reduce(function (previousValue, currentValue) {
            return Math.max(currentValue.length, previousValue);
        }, 0);
        (0, _obj.forEach)(stats, function (stat, value) {
            // pad stat names to be the same length (plus 2 extra spaces).
            for (var i = stat.length; i < longestName + 2; i++) {
                stat += ' ';
            }console.log(stat + value);
        });
    };
    Repo.prototype.statsIncrementCounter = function (metric) {
        this.stats_.incrementCounter(metric);
        this.statsReporter_.includeStat(metric);
    };
    /**
     * @param {...*} var_args
     * @private
     */
    Repo.prototype.log_ = function () {
        var var_args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            var_args[_i] = arguments[_i];
        }
        var prefix = '';
        if (this.persistentConnection_) {
            prefix = this.persistentConnection_.id + ':';
        }
        _util.log.apply(void 0, [prefix].concat(var_args));
    };
    /**
     * @param {?function(?Error, *=)} callback
     * @param {!string} status
     * @param {?string=} errorReason
     */
    Repo.prototype.callOnCompleteCallback = function (callback, status, errorReason) {
        if (callback) {
            (0, _util.exceptionGuard)(function () {
                if (status == 'ok') {
                    callback(null);
                } else {
                    var code = (status || 'error').toUpperCase();
                    var message = code;
                    if (errorReason) message += ': ' + errorReason;
                    var error = new Error(message);
                    error.code = code;
                    callback(error);
                }
            });
        }
    };
    Object.defineProperty(Repo.prototype, "database", {
        get: function get() {
            return this.__database || (this.__database = new _Database.Database(this));
        },
        enumerable: true,
        configurable: true
    });
    return Repo;
}();
exports.Repo = Repo;
//# sourceMappingURL=Repo.js.map


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*! @license Firebase v4.5.0
Build: rev-f49c8b5
Terms: https://firebase.google.com/terms/ */



Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.LeafNode = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /**
                                                                                                                                                                                                                                                                               * Copyright 2017 Google Inc.
                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                               * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                               * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                               * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                               *   http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                               * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                               * distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                               * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                               * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                               * limitations under the License.
                                                                                                                                                                                                                                                                               */


var _assert = __webpack_require__(2);

var _util = __webpack_require__(3);

var _snap = __webpack_require__(67);

var __childrenNodeConstructor;
/**
 * LeafNode is a class for storing leaf nodes in a DataSnapshot.  It
 * implements Node and stores the value of the node (a string,
 * number, or boolean) accessible via getValue().
 */
var LeafNode = /** @class */function () {
    /**
     * @implements {Node}
     * @param {!(string|number|boolean|Object)} value_ The value to store in this leaf node.
     *                                         The object type is possible in the event of a deferred value
     * @param {!Node=} priorityNode_ The priority of this node.
     */
    function LeafNode(value_, priorityNode_) {
        if (priorityNode_ === void 0) {
            priorityNode_ = LeafNode.__childrenNodeConstructor.EMPTY_NODE;
        }
        this.value_ = value_;
        this.priorityNode_ = priorityNode_;
        this.lazyHash_ = null;
        (0, _assert.assert)(this.value_ !== undefined && this.value_ !== null, "LeafNode shouldn't be created with null/undefined value.");
        (0, _snap.validatePriorityNode)(this.priorityNode_);
    }
    Object.defineProperty(LeafNode, "__childrenNodeConstructor", {
        get: function get() {
            return __childrenNodeConstructor;
        },
        set: function set(val) {
            __childrenNodeConstructor = val;
        },
        enumerable: true,
        configurable: true
    });
    /** @inheritDoc */
    LeafNode.prototype.isLeafNode = function () {
        return true;
    };
    /** @inheritDoc */
    LeafNode.prototype.getPriority = function () {
        return this.priorityNode_;
    };
    /** @inheritDoc */
    LeafNode.prototype.updatePriority = function (newPriorityNode) {
        return new LeafNode(this.value_, newPriorityNode);
    };
    /** @inheritDoc */
    LeafNode.prototype.getImmediateChild = function (childName) {
        // Hack to treat priority as a regular child
        if (childName === '.priority') {
            return this.priorityNode_;
        } else {
            return LeafNode.__childrenNodeConstructor.EMPTY_NODE;
        }
    };
    /** @inheritDoc */
    LeafNode.prototype.getChild = function (path) {
        if (path.isEmpty()) {
            return this;
        } else if (path.getFront() === '.priority') {
            return this.priorityNode_;
        } else {
            return LeafNode.__childrenNodeConstructor.EMPTY_NODE;
        }
    };
    /**
     * @inheritDoc
     */
    LeafNode.prototype.hasChild = function () {
        return false;
    };
    /** @inheritDoc */
    LeafNode.prototype.getPredecessorChildName = function (childName, childNode) {
        return null;
    };
    /** @inheritDoc */
    LeafNode.prototype.updateImmediateChild = function (childName, newChildNode) {
        if (childName === '.priority') {
            return this.updatePriority(newChildNode);
        } else if (newChildNode.isEmpty() && childName !== '.priority') {
            return this;
        } else {
            return LeafNode.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(childName, newChildNode).updatePriority(this.priorityNode_);
        }
    };
    /** @inheritDoc */
    LeafNode.prototype.updateChild = function (path, newChildNode) {
        var front = path.getFront();
        if (front === null) {
            return newChildNode;
        } else if (newChildNode.isEmpty() && front !== '.priority') {
            return this;
        } else {
            (0, _assert.assert)(front !== '.priority' || path.getLength() === 1, '.priority must be the last token in a path');
            return this.updateImmediateChild(front, LeafNode.__childrenNodeConstructor.EMPTY_NODE.updateChild(path.popFront(), newChildNode));
        }
    };
    /** @inheritDoc */
    LeafNode.prototype.isEmpty = function () {
        return false;
    };
    /** @inheritDoc */
    LeafNode.prototype.numChildren = function () {
        return 0;
    };
    /** @inheritDoc */
    LeafNode.prototype.forEachChild = function (index, action) {
        return false;
    };
    /**
     * @inheritDoc
     */
    LeafNode.prototype.val = function (exportFormat) {
        if (exportFormat && !this.getPriority().isEmpty()) return {
            '.value': this.getValue(),
            '.priority': this.getPriority().val()
        };else return this.getValue();
    };
    /** @inheritDoc */
    LeafNode.prototype.hash = function () {
        if (this.lazyHash_ === null) {
            var toHash = '';
            if (!this.priorityNode_.isEmpty()) toHash += 'priority:' + (0, _snap.priorityHashText)(this.priorityNode_.val()) + ':';
            var type = _typeof(this.value_);
            toHash += type + ':';
            if (type === 'number') {
                toHash += (0, _util.doubleToIEEE754String)(this.value_);
            } else {
                toHash += this.value_;
            }
            this.lazyHash_ = (0, _util.sha1)(toHash);
        }
        return this.lazyHash_;
    };
    /**
     * Returns the value of the leaf node.
     * @return {Object|string|number|boolean} The value of the node.
     */
    LeafNode.prototype.getValue = function () {
        return this.value_;
    };
    /**
     * @inheritDoc
     */
    LeafNode.prototype.compareTo = function (other) {
        if (other === LeafNode.__childrenNodeConstructor.EMPTY_NODE) {
            return 1;
        } else if (other instanceof LeafNode.__childrenNodeConstructor) {
            return -1;
        } else {
            (0, _assert.assert)(other.isLeafNode(), 'Unknown node type');
            return this.compareToLeafNode_(other);
        }
    };
    /**
     * Comparison specifically for two leaf nodes
     * @param {!LeafNode} otherLeaf
     * @return {!number}
     * @private
     */
    LeafNode.prototype.compareToLeafNode_ = function (otherLeaf) {
        var otherLeafType = _typeof(otherLeaf.value_);
        var thisLeafType = _typeof(this.value_);
        var otherIndex = LeafNode.VALUE_TYPE_ORDER.indexOf(otherLeafType);
        var thisIndex = LeafNode.VALUE_TYPE_ORDER.indexOf(thisLeafType);
        (0, _assert.assert)(otherIndex >= 0, 'Unknown leaf type: ' + otherLeafType);
        (0, _assert.assert)(thisIndex >= 0, 'Unknown leaf type: ' + thisLeafType);
        if (otherIndex === thisIndex) {
            // Same type, compare values
            if (thisLeafType === 'object') {
                // Deferred value nodes are all equal, but we should also never get to this point...
                return 0;
            } else {
                // Note that this works because true > false, all others are number or string comparisons
                if (this.value_ < otherLeaf.value_) {
                    return -1;
                } else if (this.value_ === otherLeaf.value_) {
                    return 0;
                } else {
                    return 1;
                }
            }
        } else {
            return thisIndex - otherIndex;
        }
    };
    /**
     * @inheritDoc
     */
    LeafNode.prototype.withIndex = function () {
        return this;
    };
    /**
     * @inheritDoc
     */
    LeafNode.prototype.isIndexed = function () {
        return true;
    };
    /**
     * @inheritDoc
     */
    LeafNode.prototype.equals = function (other) {
        /**
         * @inheritDoc
         */
        if (other === this) {
            return true;
        } else if (other.isLeafNode()) {
            var otherLeaf = other;
            return this.value_ === otherLeaf.value_ && this.priorityNode_.equals(otherLeaf.priorityNode_);
        } else {
            return false;
        }
    };
    /**
     * The sort order for comparing leaf nodes of different types. If two leaf nodes have
     * the same type, the comparison falls back to their value
     * @type {Array.<!string>}
     * @const
     */
    LeafNode.VALUE_TYPE_ORDER = ['object', 'boolean', 'number', 'string'];
    return LeafNode;
}();
exports.LeafNode = LeafNode;
//# sourceMappingURL=LeafNode.js.map


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*! @license Firebase v4.5.0
Build: rev-f49c8b5
Terms: https://firebase.google.com/terms/ */



Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Index = undefined;

var _Node = __webpack_require__(10);

var _util = __webpack_require__(3);

/**
 *
 * @constructor
 */
/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Index = /** @class */function () {
  function Index() {}
  /**
   * @return {function(!NamedNode, !NamedNode):number} A standalone comparison function for
   * this index
   */
  Index.prototype.getCompare = function () {
    return this.compare.bind(this);
  };
  /**
   * Given a before and after value for a node, determine if the indexed value has changed. Even if they are different,
   * it's possible that the changes are isolated to parts of the snapshot that are not indexed.
   *
   * @param {!Node} oldNode
   * @param {!Node} newNode
   * @return {boolean} True if the portion of the snapshot being indexed changed between oldNode and newNode
   */
  Index.prototype.indexedValueChanged = function (oldNode, newNode) {
    var oldWrapped = new _Node.NamedNode(_util.MIN_NAME, oldNode);
    var newWrapped = new _Node.NamedNode(_util.MIN_NAME, newNode);
    return this.compare(oldWrapped, newWrapped) !== 0;
  };
  /**
   * @return {!NamedNode} a node wrapper that will sort equal to or less than
   * any other node wrapper, using this index
   */
  Index.prototype.minPost = function () {
    return _Node.NamedNode.MIN;
  };
  return Index;
}();
exports.Index = Index;
//# sourceMappingURL=Index.js.map


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*! @license Firebase v4.5.0
Build: rev-f49c8b5
Terms: https://firebase.google.com/terms/ */



Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SessionStorage = exports.PersistentStorage = undefined;

var _DOMStorageWrapper = __webpack_require__(103);

var _MemoryStorage = __webpack_require__(104);

/**
 * Helper to create a DOMStorageWrapper or else fall back to MemoryStorage.
 * TODO: Once MemoryStorage and DOMStorageWrapper have a shared interface this method annotation should change
 * to reflect this type
 *
 * @param {string} domStorageName Name of the underlying storage object
 *   (e.g. 'localStorage' or 'sessionStorage').
 * @return {?} Turning off type information until a common interface is defined.
 */
/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var createStoragefor = function createStoragefor(domStorageName) {
    try {
        // NOTE: just accessing "localStorage" or "window['localStorage']" may throw a security exception,
        // so it must be inside the try/catch.
        if (typeof window !== 'undefined' && typeof window[domStorageName] !== 'undefined') {
            // Need to test cache. Just because it's here doesn't mean it works
            var domStorage = window[domStorageName];
            domStorage.setItem('firebase:sentinel', 'cache');
            domStorage.removeItem('firebase:sentinel');
            return new _DOMStorageWrapper.DOMStorageWrapper(domStorage);
        }
    } catch (e) {}
    // Failed to create wrapper.  Just return in-memory storage.
    // TODO: log?
    return new _MemoryStorage.MemoryStorage();
};
/** A storage object that lasts across sessions */
var PersistentStorage = exports.PersistentStorage = createStoragefor('localStorage');
/** A storage object that only lasts one session */
var SessionStorage = exports.SessionStorage = createStoragefor('sessionStorage');
//# sourceMappingURL=storage.js.map


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*! @license Firebase v4.5.0
Build: rev-f49c8b5
Terms: https://firebase.google.com/terms/ */



Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * A cache node only stores complete children. Additionally it holds a flag whether the node can be considered fully
 * initialized in the sense that we know at one point in time this represented a valid state of the world, e.g.
 * initialized with data from the server, or a complete overwrite by the client. The filtered flag also tracks
 * whether a node potentially had children removed due to a filter.
 */
var CacheNode = /** @class */function () {
  /**
   * @param {!Node} node_
   * @param {boolean} fullyInitialized_
   * @param {boolean} filtered_
   */
  function CacheNode(node_, fullyInitialized_, filtered_) {
    this.node_ = node_;
    this.fullyInitialized_ = fullyInitialized_;
    this.filtered_ = filtered_;
  }
  /**
   * Returns whether this node was fully initialized with either server data or a complete overwrite by the client
   * @return {boolean}
   */
  CacheNode.prototype.isFullyInitialized = function () {
    return this.fullyInitialized_;
  };
  /**
   * Returns whether this node is potentially missing children due to a filter applied to the node
   * @return {boolean}
   */
  CacheNode.prototype.isFiltered = function () {
    return this.filtered_;
  };
  /**
   * @param {!Path} path
   * @return {boolean}
   */
  CacheNode.prototype.isCompleteForPath = function (path) {
    if (path.isEmpty()) {
      return this.isFullyInitialized() && !this.filtered_;
    }
    var childKey = path.getFront();
    return this.isCompleteForChild(childKey);
  };
  /**
   * @param {!string} key
   * @return {boolean}
   */
  CacheNode.prototype.isCompleteForChild = function (key) {
    return this.isFullyInitialized() && !this.filtered_ || this.node_.hasChild(key);
  };
  /**
   * @return {!Node}
   */
  CacheNode.prototype.getNode = function () {
    return this.node_;
  };
  return CacheNode;
}();
exports.CacheNode = CacheNode;
//# sourceMappingURL=CacheNode.js.map


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*! @license Firebase v4.5.0
Build: rev-f49c8b5
Terms: https://firebase.google.com/terms/ */



Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var PROTOCOL_VERSION = exports.PROTOCOL_VERSION = '5';
var VERSION_PARAM = exports.VERSION_PARAM = 'v';
var TRANSPORT_SESSION_PARAM = exports.TRANSPORT_SESSION_PARAM = 's';
var REFERER_PARAM = exports.REFERER_PARAM = 'r';
var FORGE_REF = exports.FORGE_REF = 'f';
var FORGE_DOMAIN = exports.FORGE_DOMAIN = 'firebaseio.com';
var LAST_SESSION_PARAM = exports.LAST_SESSION_PARAM = 'ls';
var WEBSOCKET = exports.WEBSOCKET = 'websocket';
var LONG_POLLING = exports.LONG_POLLING = 'long_polling';
//# sourceMappingURL=Constants.js.map


/***/ }),
/* 41 */,
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*! @license Firebase v4.5.0
Build: rev-f49c8b5
Terms: https://firebase.google.com/terms/ */



Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @fileoverview Firebase constants.  Some of these (@defines) can be overridden at compile-time.
 */
var CONSTANTS = exports.CONSTANTS = {
  /**
   * @define {boolean} Whether this is the client Node.js SDK.
   */
  NODE_CLIENT: false,
  /**
   * @define {boolean} Whether this is the Admin Node.js SDK.
   */
  NODE_ADMIN: false,
  /**
   * Firebase SDK Version
   */
  SDK_VERSION: '4.5.0'
};
//# sourceMappingURL=constants.js.map


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*! @license Firebase v4.5.0
Build: rev-f49c8b5
Terms: https://firebase.google.com/terms/ */



Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Reference = undefined;

var _onDisconnect = __webpack_require__(89);

var _TransactionResult = __webpack_require__(87);

var _util = __webpack_require__(3);

var _NextPushId = __webpack_require__(105);

var _Query = __webpack_require__(55);

var _Repo = __webpack_require__(35);

var _Path = __webpack_require__(5);

var _QueryParams = __webpack_require__(115);

var _validation = __webpack_require__(16);

var _validation2 = __webpack_require__(17);

var _promise = __webpack_require__(29);

var _SyncPoint = __webpack_require__(60);

/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var __extends = undefined && undefined.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();

var Reference = /** @class */function (_super) {
    __extends(Reference, _super);
    /**
     * Call options:
     *   new Reference(Repo, Path) or
     *   new Reference(url: string, string|RepoManager)
     *
     * Externally - this is the firebase.database.Reference type.
     *
     * @param {!Repo} repo
     * @param {(!Path)} path
     * @extends {Query}
     */
    function Reference(repo, path) {
        var _this = this;
        if (!(repo instanceof _Repo.Repo)) {
            throw new Error('new Reference() no longer supported - use app.database().');
        }
        // call Query's constructor, passing in the repo and path.
        _this = _super.call(this, repo, path, _QueryParams.QueryParams.DEFAULT, false) || this;
        return _this;
    }
    /** @return {?string} */
    Reference.prototype.getKey = function () {
        (0, _validation2.validateArgCount)('Reference.key', 0, 0, arguments.length);
        if (this.path.isEmpty()) return null;else return this.path.getBack();
    };
    /**
     * @param {!(string|Path)} pathString
     * @return {!Reference}
     */
    Reference.prototype.child = function (pathString) {
        (0, _validation2.validateArgCount)('Reference.child', 1, 1, arguments.length);
        if (typeof pathString === 'number') {
            pathString = String(pathString);
        } else if (!(pathString instanceof _Path.Path)) {
            if (this.path.getFront() === null) (0, _validation.validateRootPathString)('Reference.child', 1, pathString, false);else (0, _validation.validatePathString)('Reference.child', 1, pathString, false);
        }
        return new Reference(this.repo, this.path.child(pathString));
    };
    /** @return {?Reference} */
    Reference.prototype.getParent = function () {
        (0, _validation2.validateArgCount)('Reference.parent', 0, 0, arguments.length);
        var parentPath = this.path.parent();
        return parentPath === null ? null : new Reference(this.repo, parentPath);
    };
    /** @return {!Reference} */
    Reference.prototype.getRoot = function () {
        (0, _validation2.validateArgCount)('Reference.root', 0, 0, arguments.length);
        var ref = this;
        while (ref.getParent() !== null) {
            ref = ref.getParent();
        }
        return ref;
    };
    /** @return {!Database} */
    Reference.prototype.databaseProp = function () {
        return this.repo.database;
    };
    /**
     * @param {*} newVal
     * @param {function(?Error)=} onComplete
     * @return {!Promise}
     */
    Reference.prototype.set = function (newVal, onComplete) {
        (0, _validation2.validateArgCount)('Reference.set', 1, 2, arguments.length);
        (0, _validation.validateWritablePath)('Reference.set', this.path);
        (0, _validation.validateFirebaseDataArg)('Reference.set', 1, newVal, this.path, false);
        (0, _validation2.validateCallback)('Reference.set', 2, onComplete, true);
        var deferred = new _promise.Deferred();
        this.repo.setWithPriority(this.path, newVal,
        /*priority=*/null, deferred.wrapCallback(onComplete));
        return deferred.promise;
    };
    /**
     * @param {!Object} objectToMerge
     * @param {function(?Error)=} onComplete
     * @return {!Promise}
     */
    Reference.prototype.update = function (objectToMerge, onComplete) {
        (0, _validation2.validateArgCount)('Reference.update', 1, 2, arguments.length);
        (0, _validation.validateWritablePath)('Reference.update', this.path);
        if (Array.isArray(objectToMerge)) {
            var newObjectToMerge = {};
            for (var i = 0; i < objectToMerge.length; ++i) {
                newObjectToMerge['' + i] = objectToMerge[i];
            }
            objectToMerge = newObjectToMerge;
            (0, _util.warn)('Passing an Array to Firebase.update() is deprecated. ' + 'Use set() if you want to overwrite the existing data, or ' + 'an Object with integer keys if you really do want to ' + 'only update some of the children.');
        }
        (0, _validation.validateFirebaseMergeDataArg)('Reference.update', 1, objectToMerge, this.path, false);
        (0, _validation2.validateCallback)('Reference.update', 2, onComplete, true);
        var deferred = new _promise.Deferred();
        this.repo.update(this.path, objectToMerge, deferred.wrapCallback(onComplete));
        return deferred.promise;
    };
    /**
     * @param {*} newVal
     * @param {string|number|null} newPriority
     * @param {function(?Error)=} onComplete
     * @return {!Promise}
     */
    Reference.prototype.setWithPriority = function (newVal, newPriority, onComplete) {
        (0, _validation2.validateArgCount)('Reference.setWithPriority', 2, 3, arguments.length);
        (0, _validation.validateWritablePath)('Reference.setWithPriority', this.path);
        (0, _validation.validateFirebaseDataArg)('Reference.setWithPriority', 1, newVal, this.path, false);
        (0, _validation.validatePriority)('Reference.setWithPriority', 2, newPriority, false);
        (0, _validation2.validateCallback)('Reference.setWithPriority', 3, onComplete, true);
        if (this.getKey() === '.length' || this.getKey() === '.keys') throw 'Reference.setWithPriority failed: ' + this.getKey() + ' is a read-only object.';
        var deferred = new _promise.Deferred();
        this.repo.setWithPriority(this.path, newVal, newPriority, deferred.wrapCallback(onComplete));
        return deferred.promise;
    };
    /**
     * @param {function(?Error)=} onComplete
     * @return {!Promise}
     */
    Reference.prototype.remove = function (onComplete) {
        (0, _validation2.validateArgCount)('Reference.remove', 0, 1, arguments.length);
        (0, _validation.validateWritablePath)('Reference.remove', this.path);
        (0, _validation2.validateCallback)('Reference.remove', 1, onComplete, true);
        return this.set(null, onComplete);
    };
    /**
     * @param {function(*):*} transactionUpdate
     * @param {(function(?Error, boolean, ?DataSnapshot))=} onComplete
     * @param {boolean=} applyLocally
     * @return {!Promise}
     */
    Reference.prototype.transaction = function (transactionUpdate, onComplete, applyLocally) {
        (0, _validation2.validateArgCount)('Reference.transaction', 1, 3, arguments.length);
        (0, _validation.validateWritablePath)('Reference.transaction', this.path);
        (0, _validation2.validateCallback)('Reference.transaction', 1, transactionUpdate, false);
        (0, _validation2.validateCallback)('Reference.transaction', 2, onComplete, true);
        // NOTE: applyLocally is an internal-only option for now.  We need to decide if we want to keep it and how
        // to expose it.
        (0, _validation.validateBoolean)('Reference.transaction', 3, applyLocally, true);
        if (this.getKey() === '.length' || this.getKey() === '.keys') throw 'Reference.transaction failed: ' + this.getKey() + ' is a read-only object.';
        if (applyLocally === undefined) applyLocally = true;
        var deferred = new _promise.Deferred();
        if (typeof onComplete === 'function') {
            (0, _promise.attachDummyErrorHandler)(deferred.promise);
        }
        var promiseComplete = function promiseComplete(error, committed, snapshot) {
            if (error) {
                deferred.reject(error);
            } else {
                deferred.resolve(new _TransactionResult.TransactionResult(committed, snapshot));
            }
            if (typeof onComplete === 'function') {
                onComplete(error, committed, snapshot);
            }
        };
        this.repo.startTransaction(this.path, transactionUpdate, promiseComplete, applyLocally);
        return deferred.promise;
    };
    /**
     * @param {string|number|null} priority
     * @param {function(?Error)=} onComplete
     * @return {!Promise}
     */
    Reference.prototype.setPriority = function (priority, onComplete) {
        (0, _validation2.validateArgCount)('Reference.setPriority', 1, 2, arguments.length);
        (0, _validation.validateWritablePath)('Reference.setPriority', this.path);
        (0, _validation.validatePriority)('Reference.setPriority', 1, priority, false);
        (0, _validation2.validateCallback)('Reference.setPriority', 2, onComplete, true);
        var deferred = new _promise.Deferred();
        this.repo.setWithPriority(this.path.child('.priority'), priority, null, deferred.wrapCallback(onComplete));
        return deferred.promise;
    };
    /**
     * @param {*=} value
     * @param {function(?Error)=} onComplete
     * @return {!Reference}
     */
    Reference.prototype.push = function (value, onComplete) {
        (0, _validation2.validateArgCount)('Reference.push', 0, 2, arguments.length);
        (0, _validation.validateWritablePath)('Reference.push', this.path);
        (0, _validation.validateFirebaseDataArg)('Reference.push', 1, value, this.path, true);
        (0, _validation2.validateCallback)('Reference.push', 2, onComplete, true);
        var now = this.repo.serverTime();
        var name = (0, _NextPushId.nextPushId)(now);
        // push() returns a ThennableReference whose promise is fulfilled with a regular Reference.
        // We use child() to create handles to two different references. The first is turned into a
        // ThennableReference below by adding then() and catch() methods and is used as the
        // return value of push(). The second remains a regular Reference and is used as the fulfilled
        // value of the first ThennableReference.
        var thennablePushRef = this.child(name);
        var pushRef = this.child(name);
        var promise;
        if (value != null) {
            promise = thennablePushRef.set(value, onComplete).then(function () {
                return pushRef;
            });
        } else {
            promise = _promise.PromiseImpl.resolve(pushRef);
        }
        thennablePushRef.then = promise.then.bind(promise);
        thennablePushRef.catch = promise.then.bind(promise, undefined);
        if (typeof onComplete === 'function') {
            (0, _promise.attachDummyErrorHandler)(promise);
        }
        return thennablePushRef;
    };
    /**
     * @return {!OnDisconnect}
     */
    Reference.prototype.onDisconnect = function () {
        (0, _validation.validateWritablePath)('Reference.onDisconnect', this.path);
        return new _onDisconnect.OnDisconnect(this.repo, this.path);
    };
    Object.defineProperty(Reference.prototype, "database", {
        get: function get() {
            return this.databaseProp();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Reference.prototype, "key", {
        get: function get() {
            return this.getKey();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Reference.prototype, "parent", {
        get: function get() {
            return this.getParent();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Reference.prototype, "root", {
        get: function get() {
            return this.getRoot();
        },
        enumerable: true,
        configurable: true
    });
    return Reference;
}(_Query.Query);
exports.Reference = Reference;
/**
 * Define reference constructor in various modules
 *
 * We are doing this here to avoid several circular
 * dependency issues
 */

_Query.Query.__referenceConstructor = Reference;
_SyncPoint.SyncPoint.__referenceConstructor = Reference;
//# sourceMappingURL=Reference.js.map


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*! @license Firebase v4.5.0
Build: rev-f49c8b5
Terms: https://firebase.google.com/terms/ */



Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.RepoManager = undefined;

var _obj = __webpack_require__(4);

var _Repo = __webpack_require__(35);

var _util = __webpack_require__(3);

var _parser = __webpack_require__(72);

var _validation = __webpack_require__(16);

__webpack_require__(94);

/** @const {string} */
/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var DATABASE_URL_OPTION = 'databaseURL';
var _staticInstance;
/**
 * Creates and caches Repo instances.
 */
var RepoManager = /** @class */function () {
    function RepoManager() {
        /**
         * @private {!Object.<string, Object<string, !fb.core.Repo>>}
         */
        this.repos_ = {};
        /**
         * If true, new Repos will be created to use ReadonlyRestClient (for testing purposes).
         * @private {boolean}
         */
        this.useRestClient_ = false;
    }
    RepoManager.getInstance = function () {
        if (!_staticInstance) {
            _staticInstance = new RepoManager();
        }
        return _staticInstance;
    };
    // TODO(koss): Remove these functions unless used in tests?
    RepoManager.prototype.interrupt = function () {
        for (var appName in this.repos_) {
            for (var dbUrl in this.repos_[appName]) {
                this.repos_[appName][dbUrl].interrupt();
            }
        }
    };
    RepoManager.prototype.resume = function () {
        for (var appName in this.repos_) {
            for (var dbUrl in this.repos_[appName]) {
                this.repos_[appName][dbUrl].resume();
            }
        }
    };
    /**
     * This function should only ever be called to CREATE a new database instance.
     *
     * @param {!FirebaseApp} app
     * @return {!Database}
     */
    RepoManager.prototype.databaseFromApp = function (app, url) {
        var dbUrl = url || app.options[DATABASE_URL_OPTION];
        if (dbUrl === undefined) {
            (0, _util.fatal)("Can't determine Firebase Database URL.  Be sure to include " + DATABASE_URL_OPTION + ' option when calling firebase.intializeApp().');
        }
        var parsedUrl = (0, _parser.parseRepoInfo)(dbUrl);
        var repoInfo = parsedUrl.repoInfo;
        (0, _validation.validateUrl)('Invalid Firebase Database URL', 1, parsedUrl);
        if (!parsedUrl.path.isEmpty()) {
            (0, _util.fatal)('Database URL must point to the root of a Firebase Database ' + '(not including a child path).');
        }
        var repo = this.createRepo(repoInfo, app);
        return repo.database;
    };
    /**
     * Remove the repo and make sure it is disconnected.
     *
     * @param {!Repo} repo
     */
    RepoManager.prototype.deleteRepo = function (repo) {
        var appRepos = (0, _obj.safeGet)(this.repos_, repo.app.name);
        // This should never happen...
        if (!appRepos || (0, _obj.safeGet)(appRepos, repo.repoInfo_.toURLString()) !== repo) {
            (0, _util.fatal)("Database " + repo.app.name + "(" + repo.repoInfo_ + ") has already been deleted.");
        }
        repo.interrupt();
        delete appRepos[repo.repoInfo_.toURLString()];
    };
    /**
     * Ensures a repo doesn't already exist and then creates one using the
     * provided app.
     *
     * @param {!RepoInfo} repoInfo The metadata about the Repo
     * @param {!FirebaseApp} app
     * @return {!Repo} The Repo object for the specified server / repoName.
     */
    RepoManager.prototype.createRepo = function (repoInfo, app) {
        var appRepos = (0, _obj.safeGet)(this.repos_, app.name);
        if (!appRepos) {
            appRepos = {};
            this.repos_[app.name] = appRepos;
        }
        var repo = (0, _obj.safeGet)(appRepos, repoInfo.toURLString());
        if (repo) {
            (0, _util.fatal)('Database initialized multiple times. Please make sure the format of the database URL matches with each database() call.');
        }
        repo = new _Repo.Repo(repoInfo, this.useRestClient_, app);
        appRepos[repoInfo.toURLString()] = repo;
        return repo;
    };
    /**
     * Forces us to use ReadonlyRestClient instead of PersistentConnection for new Repos.
     * @param {boolean} forceRestClient
     */
    RepoManager.prototype.forceRestClient = function (forceRestClient) {
        this.useRestClient_ = forceRestClient;
    };
    return RepoManager;
}();
exports.RepoManager = RepoManager;
//# sourceMappingURL=RepoManager.js.map


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*! @license Firebase v4.5.0
Build: rev-f49c8b5
Terms: https://firebase.google.com/terms/ */



Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.StatsManager = undefined;

var _StatsCollection = __webpack_require__(101);

var StatsManager = /** @class */function () {
    function StatsManager() {}
    StatsManager.getCollection = function (repoInfo) {
        var hashString = repoInfo.toString();
        if (!this.collections_[hashString]) {
            this.collections_[hashString] = new _StatsCollection.StatsCollection();
        }
        return this.collections_[hashString];
    };
    StatsManager.getOrCreateReporter = function (repoInfo, creatorFunction) {
        var hashString = repoInfo.toString();
        if (!this.reporters_[hashString]) {
            this.reporters_[hashString] = creatorFunction();
        }
        return this.reporters_[hashString];
    };
    StatsManager.collections_ = {};
    StatsManager.reporters_ = {};
    return StatsManager;
}(); /**
      * Copyright 2017 Google Inc.
      *
      * Licensed under the Apache License, Version 2.0 (the "License");
      * you may not use this file except in compliance with the License.
      * You may obtain a copy of the License at
      *
      *   http://www.apache.org/licenses/LICENSE-2.0
      *
      * Unless required by applicable law or agreed to in writing, software
      * distributed under the License is distributed on an "AS IS" BASIS,
      * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
      * See the License for the specific language governing permissions and
      * limitations under the License.
      */
exports.StatsManager = StatsManager;
//# sourceMappingURL=StatsManager.js.map


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*! @license Firebase v4.5.0
Build: rev-f49c8b5
Terms: https://firebase.google.com/terms/ */



Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ImmutableTree = undefined;

var _SortedMap = __webpack_require__(47);

var _Path = __webpack_require__(5);

var _util = __webpack_require__(3);

var _obj = __webpack_require__(4);

/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var emptyChildrenSingleton;
/**
 * Singleton empty children collection.
 *
 * @const
 * @type {!SortedMap.<string, !ImmutableTree.<?>>}
 */
var EmptyChildren = function EmptyChildren() {
    if (!emptyChildrenSingleton) {
        emptyChildrenSingleton = new _SortedMap.SortedMap(_util.stringCompare);
    }
    return emptyChildrenSingleton;
};
/**
 * A tree with immutable elements.
 */
var ImmutableTree = /** @class */function () {
    /**
     * @template T
     * @param {?T} value
     * @param {SortedMap.<string, !ImmutableTree.<T>>=} children
     */
    function ImmutableTree(value, children) {
        if (children === void 0) {
            children = EmptyChildren();
        }
        this.value = value;
        this.children = children;
    }
    /**
     * @template T
     * @param {!Object.<string, !T>} obj
     * @return {!ImmutableTree.<!T>}
     */
    ImmutableTree.fromObject = function (obj) {
        var tree = ImmutableTree.Empty;
        (0, _obj.forEach)(obj, function (childPath, childSnap) {
            tree = tree.set(new _Path.Path(childPath), childSnap);
        });
        return tree;
    };
    /**
     * True if the value is empty and there are no children
     * @return {boolean}
     */
    ImmutableTree.prototype.isEmpty = function () {
        return this.value === null && this.children.isEmpty();
    };
    /**
     * Given a path and predicate, return the first node and the path to that node
     * where the predicate returns true.
     *
     * TODO Do a perf test -- If we're creating a bunch of {path: value:} objects
     * on the way back out, it may be better to pass down a pathSoFar obj.
     *
     * @param {!Path} relativePath The remainder of the path
     * @param {function(T):boolean} predicate The predicate to satisfy to return a
     *   node
     * @return {?{path:!Path, value:!T}}
     */
    ImmutableTree.prototype.findRootMostMatchingPathAndValue = function (relativePath, predicate) {
        if (this.value != null && predicate(this.value)) {
            return { path: _Path.Path.Empty, value: this.value };
        } else {
            if (relativePath.isEmpty()) {
                return null;
            } else {
                var front = relativePath.getFront();
                var child = this.children.get(front);
                if (child !== null) {
                    var childExistingPathAndValue = child.findRootMostMatchingPathAndValue(relativePath.popFront(), predicate);
                    if (childExistingPathAndValue != null) {
                        var fullPath = new _Path.Path(front).child(childExistingPathAndValue.path);
                        return { path: fullPath, value: childExistingPathAndValue.value };
                    } else {
                        return null;
                    }
                } else {
                    return null;
                }
            }
        }
    };
    /**
     * Find, if it exists, the shortest subpath of the given path that points a defined
     * value in the tree
     * @param {!Path} relativePath
     * @return {?{path: !Path, value: !T}}
     */
    ImmutableTree.prototype.findRootMostValueAndPath = function (relativePath) {
        return this.findRootMostMatchingPathAndValue(relativePath, function () {
            return true;
        });
    };
    /**
     * @param {!Path} relativePath
     * @return {!ImmutableTree.<T>} The subtree at the given path
     */
    ImmutableTree.prototype.subtree = function (relativePath) {
        if (relativePath.isEmpty()) {
            return this;
        } else {
            var front = relativePath.getFront();
            var childTree = this.children.get(front);
            if (childTree !== null) {
                return childTree.subtree(relativePath.popFront());
            } else {
                return ImmutableTree.Empty;
            }
        }
    };
    /**
     * Sets a value at the specified path.
     *
     * @param {!Path} relativePath Path to set value at.
     * @param {?T} toSet Value to set.
     * @return {!ImmutableTree.<T>} Resulting tree.
     */
    ImmutableTree.prototype.set = function (relativePath, toSet) {
        if (relativePath.isEmpty()) {
            return new ImmutableTree(toSet, this.children);
        } else {
            var front = relativePath.getFront();
            var child = this.children.get(front) || ImmutableTree.Empty;
            var newChild = child.set(relativePath.popFront(), toSet);
            var newChildren = this.children.insert(front, newChild);
            return new ImmutableTree(this.value, newChildren);
        }
    };
    /**
     * Removes the value at the specified path.
     *
     * @param {!Path} relativePath Path to value to remove.
     * @return {!ImmutableTree.<T>} Resulting tree.
     */
    ImmutableTree.prototype.remove = function (relativePath) {
        if (relativePath.isEmpty()) {
            if (this.children.isEmpty()) {
                return ImmutableTree.Empty;
            } else {
                return new ImmutableTree(null, this.children);
            }
        } else {
            var front = relativePath.getFront();
            var child = this.children.get(front);
            if (child) {
                var newChild = child.remove(relativePath.popFront());
                var newChildren = void 0;
                if (newChild.isEmpty()) {
                    newChildren = this.children.remove(front);
                } else {
                    newChildren = this.children.insert(front, newChild);
                }
                if (this.value === null && newChildren.isEmpty()) {
                    return ImmutableTree.Empty;
                } else {
                    return new ImmutableTree(this.value, newChildren);
                }
            } else {
                return this;
            }
        }
    };
    /**
     * Gets a value from the tree.
     *
     * @param {!Path} relativePath Path to get value for.
     * @return {?T} Value at path, or null.
     */
    ImmutableTree.prototype.get = function (relativePath) {
        if (relativePath.isEmpty()) {
            return this.value;
        } else {
            var front = relativePath.getFront();
            var child = this.children.get(front);
            if (child) {
                return child.get(relativePath.popFront());
            } else {
                return null;
            }
        }
    };
    /**
     * Replace the subtree at the specified path with the given new tree.
     *
     * @param {!Path} relativePath Path to replace subtree for.
     * @param {!ImmutableTree} newTree New tree.
     * @return {!ImmutableTree} Resulting tree.
     */
    ImmutableTree.prototype.setTree = function (relativePath, newTree) {
        if (relativePath.isEmpty()) {
            return newTree;
        } else {
            var front = relativePath.getFront();
            var child = this.children.get(front) || ImmutableTree.Empty;
            var newChild = child.setTree(relativePath.popFront(), newTree);
            var newChildren = void 0;
            if (newChild.isEmpty()) {
                newChildren = this.children.remove(front);
            } else {
                newChildren = this.children.insert(front, newChild);
            }
            return new ImmutableTree(this.value, newChildren);
        }
    };
    /**
     * Performs a depth first fold on this tree. Transforms a tree into a single
     * value, given a function that operates on the path to a node, an optional
     * current value, and a map of child names to folded subtrees
     * @template V
     * @param {function(Path, ?T, Object.<string, V>):V} fn
     * @return {V}
     */
    ImmutableTree.prototype.fold = function (fn) {
        return this.fold_(_Path.Path.Empty, fn);
    };
    /**
     * Recursive helper for public-facing fold() method
     * @template V
     * @param {!Path} pathSoFar
     * @param {function(Path, ?T, Object.<string, V>):V} fn
     * @return {V}
     * @private
     */
    ImmutableTree.prototype.fold_ = function (pathSoFar, fn) {
        var accum = {};
        this.children.inorderTraversal(function (childKey, childTree) {
            accum[childKey] = childTree.fold_(pathSoFar.child(childKey), fn);
        });
        return fn(pathSoFar, this.value, accum);
    };
    /**
     * Find the first matching value on the given path. Return the result of applying f to it.
     * @template V
     * @param {!Path} path
     * @param {!function(!Path, !T):?V} f
     * @return {?V}
     */
    ImmutableTree.prototype.findOnPath = function (path, f) {
        return this.findOnPath_(path, _Path.Path.Empty, f);
    };
    ImmutableTree.prototype.findOnPath_ = function (pathToFollow, pathSoFar, f) {
        var result = this.value ? f(pathSoFar, this.value) : false;
        if (result) {
            return result;
        } else {
            if (pathToFollow.isEmpty()) {
                return null;
            } else {
                var front = pathToFollow.getFront();
                var nextChild = this.children.get(front);
                if (nextChild) {
                    return nextChild.findOnPath_(pathToFollow.popFront(), pathSoFar.child(front), f);
                } else {
                    return null;
                }
            }
        }
    };
    /**
     *
     * @param {!Path} path
     * @param {!function(!Path, !T)} f
     * @returns {!ImmutableTree.<T>}
     */
    ImmutableTree.prototype.foreachOnPath = function (path, f) {
        return this.foreachOnPath_(path, _Path.Path.Empty, f);
    };
    ImmutableTree.prototype.foreachOnPath_ = function (pathToFollow, currentRelativePath, f) {
        if (pathToFollow.isEmpty()) {
            return this;
        } else {
            if (this.value) {
                f(currentRelativePath, this.value);
            }
            var front = pathToFollow.getFront();
            var nextChild = this.children.get(front);
            if (nextChild) {
                return nextChild.foreachOnPath_(pathToFollow.popFront(), currentRelativePath.child(front), f);
            } else {
                return ImmutableTree.Empty;
            }
        }
    };
    /**
     * Calls the given function for each node in the tree that has a value.
     *
     * @param {function(!Path, !T)} f A function to be called with
     *   the path from the root of the tree to a node, and the value at that node.
     *   Called in depth-first order.
     */
    ImmutableTree.prototype.foreach = function (f) {
        this.foreach_(_Path.Path.Empty, f);
    };
    ImmutableTree.prototype.foreach_ = function (currentRelativePath, f) {
        this.children.inorderTraversal(function (childName, childTree) {
            childTree.foreach_(currentRelativePath.child(childName), f);
        });
        if (this.value) {
            f(currentRelativePath, this.value);
        }
    };
    /**
     *
     * @param {function(string, !T)} f
     */
    ImmutableTree.prototype.foreachChild = function (f) {
        this.children.inorderTraversal(function (childName, childTree) {
            if (childTree.value) {
                f(childName, childTree.value);
            }
        });
    };
    ImmutableTree.Empty = new ImmutableTree(null);
    return ImmutableTree;
}();
exports.ImmutableTree = ImmutableTree;
//# sourceMappingURL=ImmutableTree.js.map


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*! @license Firebase v4.5.0
Build: rev-f49c8b5
Terms: https://firebase.google.com/terms/ */



Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * An iterator over an LLRBNode.
 */
var SortedMapIterator = /** @class */function () {
    /**
     * @template K, V, T
     * @param {LLRBNode|LLRBEmptyNode} node Node to iterate.
     * @param {?K} startKey
     * @param {function(K, K): number} comparator
     * @param {boolean} isReverse_ Whether or not to iterate in reverse
     * @param {(function(K, V):T)=} resultGenerator_
     */
    function SortedMapIterator(node, startKey, comparator, isReverse_, resultGenerator_) {
        if (resultGenerator_ === void 0) {
            resultGenerator_ = null;
        }
        this.isReverse_ = isReverse_;
        this.resultGenerator_ = resultGenerator_;
        /** @private
         * @type {Array.<!LLRBNode>}
         */
        this.nodeStack_ = [];
        var cmp = 1;
        while (!node.isEmpty()) {
            node = node;
            cmp = startKey ? comparator(node.key, startKey) : 1;
            // flip the comparison if we're going in reverse
            if (isReverse_) cmp *= -1;
            if (cmp < 0) {
                // This node is less than our start key. ignore it
                if (this.isReverse_) {
                    node = node.left;
                } else {
                    node = node.right;
                }
            } else if (cmp === 0) {
                // This node is exactly equal to our start key. Push it on the stack, but stop iterating;
                this.nodeStack_.push(node);
                break;
            } else {
                // This node is greater than our start key, add it to the stack and move to the next one
                this.nodeStack_.push(node);
                if (this.isReverse_) {
                    node = node.right;
                } else {
                    node = node.left;
                }
            }
        }
    }
    SortedMapIterator.prototype.getNext = function () {
        if (this.nodeStack_.length === 0) return null;
        var node = this.nodeStack_.pop();
        var result;
        if (this.resultGenerator_) result = this.resultGenerator_(node.key, node.value);else result = { key: node.key, value: node.value };
        if (this.isReverse_) {
            node = node.left;
            while (!node.isEmpty()) {
                this.nodeStack_.push(node);
                node = node.right;
            }
        } else {
            node = node.right;
            while (!node.isEmpty()) {
                this.nodeStack_.push(node);
                node = node.left;
            }
        }
        return result;
    };
    SortedMapIterator.prototype.hasNext = function () {
        return this.nodeStack_.length > 0;
    };
    SortedMapIterator.prototype.peek = function () {
        if (this.nodeStack_.length === 0) return null;
        var node = this.nodeStack_[this.nodeStack_.length - 1];
        if (this.resultGenerator_) {
            return this.resultGenerator_(node.key, node.value);
        } else {
            return { key: node.key, value: node.value };
        }
    };
    return SortedMapIterator;
}();
exports.SortedMapIterator = SortedMapIterator;
/**
 * Represents a node in a Left-leaning Red-Black tree.
 */

var LLRBNode = /** @class */function () {
    /**
     * @template K, V
     * @param {!K} key Key associated with this node.
     * @param {!V} value Value associated with this node.
     * @param {?boolean} color Whether this node is red.
     * @param {?(LLRBNode|LLRBEmptyNode)=} left Left child.
     * @param {?(LLRBNode|LLRBEmptyNode)=} right Right child.
     */
    function LLRBNode(key, value, color, left, right) {
        this.key = key;
        this.value = value;
        this.color = color != null ? color : LLRBNode.RED;
        this.left = left != null ? left : SortedMap.EMPTY_NODE;
        this.right = right != null ? right : SortedMap.EMPTY_NODE;
    }
    /**
     * Returns a copy of the current node, optionally replacing pieces of it.
     *
     * @param {?K} key New key for the node, or null.
     * @param {?V} value New value for the node, or null.
     * @param {?boolean} color New color for the node, or null.
     * @param {?LLRBNode|LLRBEmptyNode} left New left child for the node, or null.
     * @param {?LLRBNode|LLRBEmptyNode} right New right child for the node, or null.
     * @return {!LLRBNode} The node copy.
     */
    LLRBNode.prototype.copy = function (key, value, color, left, right) {
        return new LLRBNode(key != null ? key : this.key, value != null ? value : this.value, color != null ? color : this.color, left != null ? left : this.left, right != null ? right : this.right);
    };
    /**
     * @return {number} The total number of nodes in the tree.
     */
    LLRBNode.prototype.count = function () {
        return this.left.count() + 1 + this.right.count();
    };
    /**
     * @return {boolean} True if the tree is empty.
     */
    LLRBNode.prototype.isEmpty = function () {
        return false;
    };
    /**
     * Traverses the tree in key order and calls the specified action function
     * for each node.
     *
     * @param {function(!K, !V):*} action Callback function to be called for each
     *   node.  If it returns true, traversal is aborted.
     * @return {*} The first truthy value returned by action, or the last falsey
     *   value returned by action
     */
    LLRBNode.prototype.inorderTraversal = function (action) {
        return this.left.inorderTraversal(action) || action(this.key, this.value) || this.right.inorderTraversal(action);
    };
    /**
     * Traverses the tree in reverse key order and calls the specified action function
     * for each node.
     *
     * @param {function(!Object, !Object)} action Callback function to be called for each
     * node.  If it returns true, traversal is aborted.
     * @return {*} True if traversal was aborted.
     */
    LLRBNode.prototype.reverseTraversal = function (action) {
        return this.right.reverseTraversal(action) || action(this.key, this.value) || this.left.reverseTraversal(action);
    };
    /**
     * @return {!Object} The minimum node in the tree.
     * @private
     */
    LLRBNode.prototype.min_ = function () {
        if (this.left.isEmpty()) {
            return this;
        } else {
            return this.left.min_();
        }
    };
    /**
     * @return {!K} The maximum key in the tree.
     */
    LLRBNode.prototype.minKey = function () {
        return this.min_().key;
    };
    /**
     * @return {!K} The maximum key in the tree.
     */
    LLRBNode.prototype.maxKey = function () {
        if (this.right.isEmpty()) {
            return this.key;
        } else {
            return this.right.maxKey();
        }
    };
    /**
     *
     * @param {!Object} key Key to insert.
     * @param {!Object} value Value to insert.
     * @param {Comparator} comparator Comparator.
     * @return {!LLRBNode} New tree, with the key/value added.
     */
    LLRBNode.prototype.insert = function (key, value, comparator) {
        var cmp, n;
        n = this;
        cmp = comparator(key, n.key);
        if (cmp < 0) {
            n = n.copy(null, null, null, n.left.insert(key, value, comparator), null);
        } else if (cmp === 0) {
            n = n.copy(null, value, null, null, null);
        } else {
            n = n.copy(null, null, null, null, n.right.insert(key, value, comparator));
        }
        return n.fixUp_();
    };
    /**
     * @private
     * @return {!LLRBNode|LLRBEmptyNode} New tree, with the minimum key removed.
     */
    LLRBNode.prototype.removeMin_ = function () {
        if (this.left.isEmpty()) {
            return SortedMap.EMPTY_NODE;
        }
        var n = this;
        if (!n.left.isRed_() && !n.left.left.isRed_()) n = n.moveRedLeft_();
        n = n.copy(null, null, null, n.left.removeMin_(), null);
        return n.fixUp_();
    };
    /**
     * @param {!Object} key The key of the item to remove.
     * @param {Comparator} comparator Comparator.
     * @return {!LLRBNode|LLRBEmptyNode} New tree, with the specified item removed.
     */
    LLRBNode.prototype.remove = function (key, comparator) {
        var n, smallest;
        n = this;
        if (comparator(key, n.key) < 0) {
            if (!n.left.isEmpty() && !n.left.isRed_() && !n.left.left.isRed_()) {
                n = n.moveRedLeft_();
            }
            n = n.copy(null, null, null, n.left.remove(key, comparator), null);
        } else {
            if (n.left.isRed_()) n = n.rotateRight_();
            if (!n.right.isEmpty() && !n.right.isRed_() && !n.right.left.isRed_()) {
                n = n.moveRedRight_();
            }
            if (comparator(key, n.key) === 0) {
                if (n.right.isEmpty()) {
                    return SortedMap.EMPTY_NODE;
                } else {
                    smallest = n.right.min_();
                    n = n.copy(smallest.key, smallest.value, null, null, n.right.removeMin_());
                }
            }
            n = n.copy(null, null, null, null, n.right.remove(key, comparator));
        }
        return n.fixUp_();
    };
    /**
     * @private
     * @return {boolean} Whether this is a RED node.
     */
    LLRBNode.prototype.isRed_ = function () {
        return this.color;
    };
    /**
     * @private
     * @return {!LLRBNode} New tree after performing any needed rotations.
     */
    LLRBNode.prototype.fixUp_ = function () {
        var n = this;
        if (n.right.isRed_() && !n.left.isRed_()) n = n.rotateLeft_();
        if (n.left.isRed_() && n.left.left.isRed_()) n = n.rotateRight_();
        if (n.left.isRed_() && n.right.isRed_()) n = n.colorFlip_();
        return n;
    };
    /**
     * @private
     * @return {!LLRBNode} New tree, after moveRedLeft.
     */
    LLRBNode.prototype.moveRedLeft_ = function () {
        var n = this.colorFlip_();
        if (n.right.left.isRed_()) {
            n = n.copy(null, null, null, null, n.right.rotateRight_());
            n = n.rotateLeft_();
            n = n.colorFlip_();
        }
        return n;
    };
    /**
     * @private
     * @return {!LLRBNode} New tree, after moveRedRight.
     */
    LLRBNode.prototype.moveRedRight_ = function () {
        var n = this.colorFlip_();
        if (n.left.left.isRed_()) {
            n = n.rotateRight_();
            n = n.colorFlip_();
        }
        return n;
    };
    /**
     * @private
     * @return {!LLRBNode} New tree, after rotateLeft.
     */
    LLRBNode.prototype.rotateLeft_ = function () {
        var nl = this.copy(null, null, LLRBNode.RED, null, this.right.left);
        return this.right.copy(null, null, this.color, nl, null);
    };
    /**
     * @private
     * @return {!LLRBNode} New tree, after rotateRight.
     */
    LLRBNode.prototype.rotateRight_ = function () {
        var nr = this.copy(null, null, LLRBNode.RED, this.left.right, null);
        return this.left.copy(null, null, this.color, null, nr);
    };
    /**
     * @private
     * @return {!LLRBNode} New tree, after colorFlip.
     */
    LLRBNode.prototype.colorFlip_ = function () {
        var left = this.left.copy(null, null, !this.left.color, null, null);
        var right = this.right.copy(null, null, !this.right.color, null, null);
        return this.copy(null, null, !this.color, left, right);
    };
    /**
     * For testing.
     *
     * @private
     * @return {boolean} True if all is well.
     */
    LLRBNode.prototype.checkMaxDepth_ = function () {
        var blackDepth = this.check_();
        return Math.pow(2.0, blackDepth) <= this.count() + 1;
    };
    /**
     * @private
     * @return {number} Not sure what this returns exactly. :-).
     */
    LLRBNode.prototype.check_ = function () {
        var blackDepth;
        if (this.isRed_() && this.left.isRed_()) {
            throw new Error('Red node has red child(' + this.key + ',' + this.value + ')');
        }
        if (this.right.isRed_()) {
            throw new Error('Right child of (' + this.key + ',' + this.value + ') is red');
        }
        blackDepth = this.left.check_();
        if (blackDepth !== this.right.check_()) {
            throw new Error('Black depths differ');
        } else {
            return blackDepth + (this.isRed_() ? 0 : 1);
        }
    };
    LLRBNode.RED = true;
    LLRBNode.BLACK = false;
    return LLRBNode;
}();
exports.LLRBNode = LLRBNode;
/**
 * Represents an empty node (a leaf node in the Red-Black Tree).
 */

var LLRBEmptyNode = /** @class */function () {
    function LLRBEmptyNode() {}
    /**
     * Returns a copy of the current node.
     *
     * @return {!LLRBEmptyNode} The node copy.
     */
    LLRBEmptyNode.prototype.copy = function (key, value, color, left, right) {
        return this;
    };
    /**
     * Returns a copy of the tree, with the specified key/value added.
     *
     * @param {!K} key Key to be added.
     * @param {!V} value Value to be added.
     * @param {Comparator} comparator Comparator.
     * @return {!LLRBNode} New tree, with item added.
     */
    LLRBEmptyNode.prototype.insert = function (key, value, comparator) {
        return new LLRBNode(key, value, null);
    };
    /**
     * Returns a copy of the tree, with the specified key removed.
     *
     * @param {!K} key The key to remove.
     * @param {Comparator} comparator Comparator.
     * @return {!LLRBEmptyNode} New tree, with item removed.
     */
    LLRBEmptyNode.prototype.remove = function (key, comparator) {
        return this;
    };
    /**
     * @return {number} The total number of nodes in the tree.
     */
    LLRBEmptyNode.prototype.count = function () {
        return 0;
    };
    /**
     * @return {boolean} True if the tree is empty.
     */
    LLRBEmptyNode.prototype.isEmpty = function () {
        return true;
    };
    /**
     * Traverses the tree in key order and calls the specified action function
     * for each node.
     *
     * @param {function(!K, !V):*} action Callback function to be called for each
     * node.  If it returns true, traversal is aborted.
     * @return {boolean} True if traversal was aborted.
     */
    LLRBEmptyNode.prototype.inorderTraversal = function (action) {
        return false;
    };
    /**
     * Traverses the tree in reverse key order and calls the specified action function
     * for each node.
     *
     * @param {function(!K, !V)} action Callback function to be called for each
     * node.  If it returns true, traversal is aborted.
     * @return {boolean} True if traversal was aborted.
     */
    LLRBEmptyNode.prototype.reverseTraversal = function (action) {
        return false;
    };
    /**
     * @return {null}
     */
    LLRBEmptyNode.prototype.minKey = function () {
        return null;
    };
    /**
     * @return {null}
     */
    LLRBEmptyNode.prototype.maxKey = function () {
        return null;
    };
    /**
     * @private
     * @return {number} Not sure what this returns exactly. :-).
     */
    LLRBEmptyNode.prototype.check_ = function () {
        return 0;
    };
    /**
     * @private
     * @return {boolean} Whether this node is red.
     */
    LLRBEmptyNode.prototype.isRed_ = function () {
        return false;
    };
    return LLRBEmptyNode;
}();
exports.LLRBEmptyNode = LLRBEmptyNode;
/**
 * An immutable sorted map implementation, based on a Left-leaning Red-Black
 * tree.
 */

var SortedMap = /** @class */function () {
    /**
     * @template K, V
     * @param {function(K, K):number} comparator_ Key comparator.
     * @param {LLRBNode=} root_ (Optional) Root node for the map.
     */
    function SortedMap(comparator_, root_) {
        if (root_ === void 0) {
            root_ = SortedMap.EMPTY_NODE;
        }
        this.comparator_ = comparator_;
        this.root_ = root_;
    }
    /**
     * Returns a copy of the map, with the specified key/value added or replaced.
     * (TODO: We should perhaps rename this method to 'put')
     *
     * @param {!K} key Key to be added.
     * @param {!V} value Value to be added.
     * @return {!SortedMap.<K, V>} New map, with item added.
     */
    SortedMap.prototype.insert = function (key, value) {
        return new SortedMap(this.comparator_, this.root_.insert(key, value, this.comparator_).copy(null, null, LLRBNode.BLACK, null, null));
    };
    /**
     * Returns a copy of the map, with the specified key removed.
     *
     * @param {!K} key The key to remove.
     * @return {!SortedMap.<K, V>} New map, with item removed.
     */
    SortedMap.prototype.remove = function (key) {
        return new SortedMap(this.comparator_, this.root_.remove(key, this.comparator_).copy(null, null, LLRBNode.BLACK, null, null));
    };
    /**
     * Returns the value of the node with the given key, or null.
     *
     * @param {!K} key The key to look up.
     * @return {?V} The value of the node with the given key, or null if the
     * key doesn't exist.
     */
    SortedMap.prototype.get = function (key) {
        var cmp;
        var node = this.root_;
        while (!node.isEmpty()) {
            cmp = this.comparator_(key, node.key);
            if (cmp === 0) {
                return node.value;
            } else if (cmp < 0) {
                node = node.left;
            } else if (cmp > 0) {
                node = node.right;
            }
        }
        return null;
    };
    /**
     * Returns the key of the item *before* the specified key, or null if key is the first item.
     * @param {K} key The key to find the predecessor of
     * @return {?K} The predecessor key.
     */
    SortedMap.prototype.getPredecessorKey = function (key) {
        var cmp,
            node = this.root_,
            rightParent = null;
        while (!node.isEmpty()) {
            cmp = this.comparator_(key, node.key);
            if (cmp === 0) {
                if (!node.left.isEmpty()) {
                    node = node.left;
                    while (!node.right.isEmpty()) {
                        node = node.right;
                    }return node.key;
                } else if (rightParent) {
                    return rightParent.key;
                } else {
                    return null; // first item.
                }
            } else if (cmp < 0) {
                node = node.left;
            } else if (cmp > 0) {
                rightParent = node;
                node = node.right;
            }
        }
        throw new Error('Attempted to find predecessor key for a nonexistent key.  What gives?');
    };
    /**
     * @return {boolean} True if the map is empty.
     */
    SortedMap.prototype.isEmpty = function () {
        return this.root_.isEmpty();
    };
    /**
     * @return {number} The total number of nodes in the map.
     */
    SortedMap.prototype.count = function () {
        return this.root_.count();
    };
    /**
     * @return {?K} The minimum key in the map.
     */
    SortedMap.prototype.minKey = function () {
        return this.root_.minKey();
    };
    /**
     * @return {?K} The maximum key in the map.
     */
    SortedMap.prototype.maxKey = function () {
        return this.root_.maxKey();
    };
    /**
     * Traverses the map in key order and calls the specified action function
     * for each key/value pair.
     *
     * @param {function(!K, !V):*} action Callback function to be called
     * for each key/value pair.  If action returns true, traversal is aborted.
     * @return {*} The first truthy value returned by action, or the last falsey
     *   value returned by action
     */
    SortedMap.prototype.inorderTraversal = function (action) {
        return this.root_.inorderTraversal(action);
    };
    /**
     * Traverses the map in reverse key order and calls the specified action function
     * for each key/value pair.
     *
     * @param {function(!Object, !Object)} action Callback function to be called
     * for each key/value pair.  If action returns true, traversal is aborted.
     * @return {*} True if the traversal was aborted.
     */
    SortedMap.prototype.reverseTraversal = function (action) {
        return this.root_.reverseTraversal(action);
    };
    /**
     * Returns an iterator over the SortedMap.
     * @template T
     * @param {(function(K, V):T)=} resultGenerator
     * @return {SortedMapIterator.<K, V, T>} The iterator.
     */
    SortedMap.prototype.getIterator = function (resultGenerator) {
        return new SortedMapIterator(this.root_, null, this.comparator_, false, resultGenerator);
    };
    SortedMap.prototype.getIteratorFrom = function (key, resultGenerator) {
        return new SortedMapIterator(this.root_, key, this.comparator_, false, resultGenerator);
    };
    SortedMap.prototype.getReverseIteratorFrom = function (key, resultGenerator) {
        return new SortedMapIterator(this.root_, key, this.comparator_, true, resultGenerator);
    };
    SortedMap.prototype.getReverseIterator = function (resultGenerator) {
        return new SortedMapIterator(this.root_, null, this.comparator_, true, resultGenerator);
    };
    /**
     * Always use the same empty node, to reduce memory.
     * @const
     */
    SortedMap.EMPTY_NODE = new LLRBEmptyNode();
    return SortedMap;
}();
exports.SortedMap = SortedMap;
//# sourceMappingURL=SortedMap.js.map


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*! @license Firebase v4.5.0
Build: rev-f49c8b5
Terms: https://firebase.google.com/terms/ */



Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.IndexedFilter = undefined;

var _assert = __webpack_require__(2);

var _Change = __webpack_require__(30);

var _ChildrenNode = __webpack_require__(8);

var _PriorityIndex = __webpack_require__(7);

/**
 * Doesn't really filter nodes but applies an index to the node and keeps track of any changes
 *
 * @constructor
 * @implements {NodeFilter}
 * @param {!Index} index
 */
/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var IndexedFilter = /** @class */function () {
    function IndexedFilter(index_) {
        this.index_ = index_;
    }
    IndexedFilter.prototype.updateChild = function (snap, key, newChild, affectedPath, source, optChangeAccumulator) {
        (0, _assert.assert)(snap.isIndexed(this.index_), 'A node must be indexed if only a child is updated');
        var oldChild = snap.getImmediateChild(key);
        // Check if anything actually changed.
        if (oldChild.getChild(affectedPath).equals(newChild.getChild(affectedPath))) {
            // There's an edge case where a child can enter or leave the view because affectedPath was set to null.
            // In this case, affectedPath will appear null in both the old and new snapshots.  So we need
            // to avoid treating these cases as "nothing changed."
            if (oldChild.isEmpty() == newChild.isEmpty()) {
                // Nothing changed.
                // This assert should be valid, but it's expensive (can dominate perf testing) so don't actually do it.
                //assert(oldChild.equals(newChild), 'Old and new snapshots should be equal.');
                return snap;
            }
        }
        if (optChangeAccumulator != null) {
            if (newChild.isEmpty()) {
                if (snap.hasChild(key)) {
                    optChangeAccumulator.trackChildChange(_Change.Change.childRemovedChange(key, oldChild));
                } else {
                    (0, _assert.assert)(snap.isLeafNode(), 'A child remove without an old child only makes sense on a leaf node');
                }
            } else if (oldChild.isEmpty()) {
                optChangeAccumulator.trackChildChange(_Change.Change.childAddedChange(key, newChild));
            } else {
                optChangeAccumulator.trackChildChange(_Change.Change.childChangedChange(key, newChild, oldChild));
            }
        }
        if (snap.isLeafNode() && newChild.isEmpty()) {
            return snap;
        } else {
            // Make sure the node is indexed
            return snap.updateImmediateChild(key, newChild).withIndex(this.index_);
        }
    };
    /**
     * @inheritDoc
     */
    IndexedFilter.prototype.updateFullNode = function (oldSnap, newSnap, optChangeAccumulator) {
        if (optChangeAccumulator != null) {
            if (!oldSnap.isLeafNode()) {
                oldSnap.forEachChild(_PriorityIndex.PRIORITY_INDEX, function (key, childNode) {
                    if (!newSnap.hasChild(key)) {
                        optChangeAccumulator.trackChildChange(_Change.Change.childRemovedChange(key, childNode));
                    }
                });
            }
            if (!newSnap.isLeafNode()) {
                newSnap.forEachChild(_PriorityIndex.PRIORITY_INDEX, function (key, childNode) {
                    if (oldSnap.hasChild(key)) {
                        var oldChild = oldSnap.getImmediateChild(key);
                        if (!oldChild.equals(childNode)) {
                            optChangeAccumulator.trackChildChange(_Change.Change.childChangedChange(key, childNode, oldChild));
                        }
                    } else {
                        optChangeAccumulator.trackChildChange(_Change.Change.childAddedChange(key, childNode));
                    }
                });
            }
        }
        return newSnap.withIndex(this.index_);
    };
    /**
     * @inheritDoc
     */
    IndexedFilter.prototype.updatePriority = function (oldSnap, newPriority) {
        if (oldSnap.isEmpty()) {
            return _ChildrenNode.ChildrenNode.EMPTY_NODE;
        } else {
            return oldSnap.updatePriority(newPriority);
        }
    };
    /**
     * @inheritDoc
     */
    IndexedFilter.prototype.filtersNodes = function () {
        return false;
    };
    /**
     * @inheritDoc
     */
    IndexedFilter.prototype.getIndexedFilter = function () {
        return this;
    };
    /**
     * @inheritDoc
     */
    IndexedFilter.prototype.getIndex = function () {
        return this.index_;
    };
    return IndexedFilter;
}();
exports.IndexedFilter = IndexedFilter;
//# sourceMappingURL=IndexedFilter.js.map


/***/ }),
/* 49 */,
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*! @license Firebase v4.5.0
Build: rev-f49c8b5
Terms: https://firebase.google.com/terms/ */



Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.stringLength = exports.stringToByteArray = undefined;

var _assert = __webpack_require__(2);

// Code originally came from goog.crypt.stringToUtf8ByteArray, but for some reason they
// automatically replaced '\r\n' with '\n', and they didn't handle surrogate pairs,
// so it's been modified.
// Note that not all Unicode characters appear as single characters in JavaScript strings.
// fromCharCode returns the UTF-16 encoding of a character - so some Unicode characters
// use 2 characters in Javascript.  All 4-byte UTF-8 characters begin with a first
// character in the range 0xD800 - 0xDBFF (the first character of a so-called surrogate
// pair).
// See http://www.ecma-international.org/ecma-262/5.1/#sec-15.1.3
/**
 * @param {string} str
 * @return {Array}
 */
var stringToByteArray = exports.stringToByteArray = function stringToByteArray(str) {
    var out = [],
        p = 0;
    for (var i = 0; i < str.length; i++) {
        var c = str.charCodeAt(i);
        // Is this the lead surrogate in a surrogate pair?
        if (c >= 0xd800 && c <= 0xdbff) {
            var high = c - 0xd800; // the high 10 bits.
            i++;
            (0, _assert.assert)(i < str.length, 'Surrogate pair missing trail surrogate.');
            var low = str.charCodeAt(i) - 0xdc00; // the low 10 bits.
            c = 0x10000 + (high << 10) + low;
        }
        if (c < 128) {
            out[p++] = c;
        } else if (c < 2048) {
            out[p++] = c >> 6 | 192;
            out[p++] = c & 63 | 128;
        } else if (c < 65536) {
            out[p++] = c >> 12 | 224;
            out[p++] = c >> 6 & 63 | 128;
            out[p++] = c & 63 | 128;
        } else {
            out[p++] = c >> 18 | 240;
            out[p++] = c >> 12 & 63 | 128;
            out[p++] = c >> 6 & 63 | 128;
            out[p++] = c & 63 | 128;
        }
    }
    return out;
};
/**
 * Calculate length without actually converting; useful for doing cheaper validation.
 * @param {string} str
 * @return {number}
 */
/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var stringLength = exports.stringLength = function stringLength(str) {
    var p = 0;
    for (var i = 0; i < str.length; i++) {
        var c = str.charCodeAt(i);
        if (c < 128) {
            p++;
        } else if (c < 2048) {
            p += 2;
        } else if (c >= 0xd800 && c <= 0xdbff) {
            // Lead surrogate of a surrogate pair.  The pair together will take 4 bytes to represent.
            p += 4;
            i++; // skip trail surrogate.
        } else {
            p += 3;
        }
    }
    return p;
};
//# sourceMappingURL=utf8.js.map


/***/ }),
/* 51 */,
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*! @license Firebase v4.5.0
Build: rev-f49c8b5
Terms: https://firebase.google.com/terms/ */



Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.patchCapture = patchCapture;
var ERROR_NAME = 'FirebaseError';
var captureStackTrace = Error.captureStackTrace;
// Export for faking in tests
function patchCapture(captureFake) {
    var result = captureStackTrace;
    captureStackTrace = captureFake;
    return result;
}
var FirebaseError = /** @class */function () {
    function FirebaseError(code, message) {
        this.code = code;
        this.message = message;
        var stack;
        // We want the stack value, if implemented by Error
        if (captureStackTrace) {
            // Patches this.stack, omitted calls above ErrorFactory#create
            captureStackTrace(this, ErrorFactory.prototype.create);
        } else {
            var err_1 = Error.apply(this, arguments);
            this.name = ERROR_NAME;
            // Make non-enumerable getter for the property.
            Object.defineProperty(this, 'stack', {
                get: function get() {
                    return err_1.stack;
                }
            });
        }
    }
    return FirebaseError;
}();
exports.FirebaseError = FirebaseError;
// Back-door inheritance

FirebaseError.prototype = Object.create(Error.prototype);
FirebaseError.prototype.constructor = FirebaseError;
FirebaseError.prototype.name = ERROR_NAME;
var ErrorFactory = /** @class */function () {
    function ErrorFactory(service, serviceName, errors) {
        this.service = service;
        this.serviceName = serviceName;
        this.errors = errors;
        // Matches {$name}, by default.
        this.pattern = /\{\$([^}]+)}/g;
        // empty
    }
    ErrorFactory.prototype.create = function (code, data) {
        if (data === undefined) {
            data = {};
        }
        var template = this.errors[code];
        var fullCode = this.service + '/' + code;
        var message;
        if (template === undefined) {
            message = 'Error';
        } else {
            message = template.replace(this.pattern, function (match, key) {
                var value = data[key];
                return value !== undefined ? value.toString() : '<' + key + '?>';
            });
        }
        // Service: Error message (service/code).
        message = this.serviceName + ': ' + message + ' (' + fullCode + ').';
        var err = new FirebaseError(fullCode, message);
        // Populate the Error object with message parts for programmatic
        // accesses (e.g., e.file).
        for (var prop in data) {
            if (!data.hasOwnProperty(prop) || prop.slice(-1) === '_') {
                continue;
            }
            err[prop] = data[prop];
        }
        return err;
    };
    return ErrorFactory;
}();
exports.ErrorFactory = ErrorFactory;
//# sourceMappingURL=errors.js.map


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*! @license Firebase v4.5.0
Build: rev-f49c8b5
Terms: https://firebase.google.com/terms/ */



Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.DataSnapshot = undefined;

var _validation = __webpack_require__(17);

var _validation2 = __webpack_require__(16);

var _Path = __webpack_require__(5);

var _PriorityIndex = __webpack_require__(7);

/**
 * Class representing a firebase data snapshot.  It wraps a SnapshotNode and
 * surfaces the public methods (val, forEach, etc.) we want to expose.
 */
/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var DataSnapshot = /** @class */function () {
    /**
     * @param {!Node} node_ A SnapshotNode to wrap.
     * @param {!Reference} ref_ The ref of the location this snapshot came from.
     * @param {!Index} index_ The iteration order for this snapshot
     */
    function DataSnapshot(node_, ref_, index_) {
        this.node_ = node_;
        this.ref_ = ref_;
        this.index_ = index_;
    }
    /**
     * Retrieves the snapshot contents as JSON.  Returns null if the snapshot is
     * empty.
     *
     * @return {*} JSON representation of the DataSnapshot contents, or null if empty.
     */
    DataSnapshot.prototype.val = function () {
        (0, _validation.validateArgCount)('DataSnapshot.val', 0, 0, arguments.length);
        return this.node_.val();
    };
    /**
     * Returns the snapshot contents as JSON, including priorities of node.  Suitable for exporting
     * the entire node contents.
     * @return {*} JSON representation of the DataSnapshot contents, or null if empty.
     */
    DataSnapshot.prototype.exportVal = function () {
        (0, _validation.validateArgCount)('DataSnapshot.exportVal', 0, 0, arguments.length);
        return this.node_.val(true);
    };
    // Do not create public documentation. This is intended to make JSON serialization work but is otherwise unnecessary
    // for end-users
    DataSnapshot.prototype.toJSON = function () {
        // Optional spacer argument is unnecessary because we're depending on recursion rather than stringifying the content
        (0, _validation.validateArgCount)('DataSnapshot.toJSON', 0, 1, arguments.length);
        return this.exportVal();
    };
    /**
     * Returns whether the snapshot contains a non-null value.
     *
     * @return {boolean} Whether the snapshot contains a non-null value, or is empty.
     */
    DataSnapshot.prototype.exists = function () {
        (0, _validation.validateArgCount)('DataSnapshot.exists', 0, 0, arguments.length);
        return !this.node_.isEmpty();
    };
    /**
     * Returns a DataSnapshot of the specified child node's contents.
     *
     * @param {!string} childPathString Path to a child.
     * @return {!DataSnapshot} DataSnapshot for child node.
     */
    DataSnapshot.prototype.child = function (childPathString) {
        (0, _validation.validateArgCount)('DataSnapshot.child', 0, 1, arguments.length);
        // Ensure the childPath is a string (can be a number)
        childPathString = String(childPathString);
        (0, _validation2.validatePathString)('DataSnapshot.child', 1, childPathString, false);
        var childPath = new _Path.Path(childPathString);
        var childRef = this.ref_.child(childPath);
        return new DataSnapshot(this.node_.getChild(childPath), childRef, _PriorityIndex.PRIORITY_INDEX);
    };
    /**
     * Returns whether the snapshot contains a child at the specified path.
     *
     * @param {!string} childPathString Path to a child.
     * @return {boolean} Whether the child exists.
     */
    DataSnapshot.prototype.hasChild = function (childPathString) {
        (0, _validation.validateArgCount)('DataSnapshot.hasChild', 1, 1, arguments.length);
        (0, _validation2.validatePathString)('DataSnapshot.hasChild', 1, childPathString, false);
        var childPath = new _Path.Path(childPathString);
        return !this.node_.getChild(childPath).isEmpty();
    };
    /**
     * Returns the priority of the object, or null if no priority was set.
     *
     * @return {string|number|null} The priority.
     */
    DataSnapshot.prototype.getPriority = function () {
        (0, _validation.validateArgCount)('DataSnapshot.getPriority', 0, 0, arguments.length);
        // typecast here because we never return deferred values or internal priorities (MAX_PRIORITY)
        return this.node_.getPriority().val();
    };
    /**
     * Iterates through child nodes and calls the specified action for each one.
     *
     * @param {function(!DataSnapshot)} action Callback function to be called
     * for each child.
     * @return {boolean} True if forEach was canceled by action returning true for
     * one of the child nodes.
     */
    DataSnapshot.prototype.forEach = function (action) {
        var _this = this;
        (0, _validation.validateArgCount)('DataSnapshot.forEach', 1, 1, arguments.length);
        (0, _validation.validateCallback)('DataSnapshot.forEach', 1, action, false);
        if (this.node_.isLeafNode()) return false;
        var childrenNode = this.node_;
        // Sanitize the return value to a boolean. ChildrenNode.forEachChild has a weird return type...
        return !!childrenNode.forEachChild(this.index_, function (key, node) {
            return action(new DataSnapshot(node, _this.ref_.child(key), _PriorityIndex.PRIORITY_INDEX));
        });
    };
    /**
     * Returns whether this DataSnapshot has children.
     * @return {boolean} True if the DataSnapshot contains 1 or more child nodes.
     */
    DataSnapshot.prototype.hasChildren = function () {
        (0, _validation.validateArgCount)('DataSnapshot.hasChildren', 0, 0, arguments.length);
        if (this.node_.isLeafNode()) return false;else return !this.node_.isEmpty();
    };
    Object.defineProperty(DataSnapshot.prototype, "key", {
        get: function get() {
            return this.ref_.getKey();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Returns the number of children for this DataSnapshot.
     * @return {number} The number of children that this DataSnapshot contains.
     */
    DataSnapshot.prototype.numChildren = function () {
        (0, _validation.validateArgCount)('DataSnapshot.numChildren', 0, 0, arguments.length);
        return this.node_.numChildren();
    };
    /**
     * @return {Reference} The Firebase reference for the location this snapshot's data came from.
     */
    DataSnapshot.prototype.getRef = function () {
        (0, _validation.validateArgCount)('DataSnapshot.ref', 0, 0, arguments.length);
        return this.ref_;
    };
    Object.defineProperty(DataSnapshot.prototype, "ref", {
        get: function get() {
            return this.getRef();
        },
        enumerable: true,
        configurable: true
    });
    return DataSnapshot;
}();
exports.DataSnapshot = DataSnapshot;
//# sourceMappingURL=DataSnapshot.js.map


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*! @license Firebase v4.5.0
Build: rev-f49c8b5
Terms: https://firebase.google.com/terms/ */



Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.DatabaseInternals = exports.Database = undefined;

var _util = __webpack_require__(3);

var _parser = __webpack_require__(72);

var _Path = __webpack_require__(5);

var _promise = __webpack_require__(29);

var _Reference = __webpack_require__(43);

var _Repo = __webpack_require__(35);

var _RepoManager = __webpack_require__(44);

var _validation = __webpack_require__(17);

var _validation2 = __webpack_require__(16);

/**
 * Class representing a firebase database.
 * @implements {FirebaseService}
 */
var Database = /** @class */function () {
    /**
     * The constructor should not be called by users of our public API.
     * @param {!Repo} repo_
     */
    function Database(repo_) {
        this.repo_ = repo_;
        if (!(repo_ instanceof _Repo.Repo)) {
            (0, _util.fatal)("Don't call new Database() directly - please use firebase.database().");
        }
        /** @type {Reference} */
        this.root_ = new _Reference.Reference(repo_, _Path.Path.Empty);
        this.INTERNAL = new DatabaseInternals(this);
    }
    Object.defineProperty(Database.prototype, "app", {
        get: function get() {
            return this.repo_.app;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Returns a reference to the root or the path specified in opt_pathString.
     * @param {string=} pathString
     * @return {!Reference} Firebase reference.
     */
    Database.prototype.ref = function (pathString) {
        this.checkDeleted_('ref');
        (0, _validation.validateArgCount)('database.ref', 0, 1, arguments.length);
        return pathString !== undefined ? this.root_.child(pathString) : this.root_;
    };
    /**
     * Returns a reference to the root or the path specified in url.
     * We throw a exception if the url is not in the same domain as the
     * current repo.
     * @param {string} url
     * @return {!Reference} Firebase reference.
     */
    Database.prototype.refFromURL = function (url) {
        /** @const {string} */
        var apiName = 'database.refFromURL';
        this.checkDeleted_(apiName);
        (0, _validation.validateArgCount)(apiName, 1, 1, arguments.length);
        var parsedURL = (0, _parser.parseRepoInfo)(url);
        (0, _validation2.validateUrl)(apiName, 1, parsedURL);
        var repoInfo = parsedURL.repoInfo;
        if (repoInfo.host !== this.repo_.repoInfo_.host) {
            (0, _util.fatal)(apiName + ': Host name does not match the current database: ' + '(found ' + repoInfo.host + ' but expected ' + this.repo_.repoInfo_.host + ')');
        }
        return this.ref(parsedURL.path.toString());
    };
    /**
     * @param {string} apiName
     */
    Database.prototype.checkDeleted_ = function (apiName) {
        if (this.repo_ === null) {
            (0, _util.fatal)('Cannot call ' + apiName + ' on a deleted database.');
        }
    };
    // Make individual repo go offline.
    Database.prototype.goOffline = function () {
        (0, _validation.validateArgCount)('database.goOffline', 0, 0, arguments.length);
        this.checkDeleted_('goOffline');
        this.repo_.interrupt();
    };
    Database.prototype.goOnline = function () {
        (0, _validation.validateArgCount)('database.goOnline', 0, 0, arguments.length);
        this.checkDeleted_('goOnline');
        this.repo_.resume();
    };
    Database.ServerValue = {
        TIMESTAMP: {
            '.sv': 'timestamp'
        }
    };
    return Database;
}(); /**
      * Copyright 2017 Google Inc.
      *
      * Licensed under the Apache License, Version 2.0 (the "License");
      * you may not use this file except in compliance with the License.
      * You may obtain a copy of the License at
      *
      *   http://www.apache.org/licenses/LICENSE-2.0
      *
      * Unless required by applicable law or agreed to in writing, software
      * distributed under the License is distributed on an "AS IS" BASIS,
      * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
      * See the License for the specific language governing permissions and
      * limitations under the License.
      */
exports.Database = Database;

var DatabaseInternals = /** @class */function () {
    /** @param {!Database} database */
    function DatabaseInternals(database) {
        this.database = database;
    }
    /** @return {Promise<void>} */
    DatabaseInternals.prototype.delete = function () {
        this.database.checkDeleted_('delete');
        _RepoManager.RepoManager.getInstance().deleteRepo(this.database.repo_);
        this.database.repo_ = null;
        this.database.root_ = null;
        this.database.INTERNAL = null;
        this.database = null;
        return _promise.PromiseImpl.resolve();
    };
    return DatabaseInternals;
}();
exports.DatabaseInternals = DatabaseInternals;
//# sourceMappingURL=Database.js.map


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*! @license Firebase v4.5.0
Build: rev-f49c8b5
Terms: https://firebase.google.com/terms/ */



Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Query = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /**
                                                                                                                                                                                                                                                                               * Copyright 2017 Google Inc.
                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                               * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                               * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                               * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                               *   http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                               * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                               * distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                               * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                               * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                               * limitations under the License.
                                                                                                                                                                                                                                                                               */


var _assert = __webpack_require__(2);

var _KeyIndex = __webpack_require__(33);

var _PriorityIndex = __webpack_require__(7);

var _ValueIndex = __webpack_require__(66);

var _PathIndex = __webpack_require__(65);

var _util = __webpack_require__(3);

var _Path = __webpack_require__(5);

var _validation = __webpack_require__(16);

var _validation2 = __webpack_require__(17);

var _EventRegistration = __webpack_require__(114);

var _promise = __webpack_require__(29);

var __referenceConstructor;
/**
 * A Query represents a filter to be applied to a firebase location.  This object purely represents the
 * query expression (and exposes our public API to build the query).  The actual query logic is in ViewBase.js.
 *
 * Since every Firebase reference is a query, Firebase inherits from this object.
 */
var Query = /** @class */function () {
    function Query(repo, path, queryParams_, orderByCalled_) {
        this.repo = repo;
        this.path = path;
        this.queryParams_ = queryParams_;
        this.orderByCalled_ = orderByCalled_;
    }
    Object.defineProperty(Query, "__referenceConstructor", {
        get: function get() {
            (0, _assert.assert)(__referenceConstructor, 'Reference.ts has not been loaded');
            return __referenceConstructor;
        },
        set: function set(val) {
            __referenceConstructor = val;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Validates start/end values for queries.
     * @param {!QueryParams} params
     * @private
     */
    Query.validateQueryEndpoints_ = function (params) {
        var startNode = null;
        var endNode = null;
        if (params.hasStart()) {
            startNode = params.getIndexStartValue();
        }
        if (params.hasEnd()) {
            endNode = params.getIndexEndValue();
        }
        if (params.getIndex() === _KeyIndex.KEY_INDEX) {
            var tooManyArgsError = 'Query: When ordering by key, you may only pass one argument to ' + 'startAt(), endAt(), or equalTo().';
            var wrongArgTypeError = 'Query: When ordering by key, the argument passed to startAt(), endAt(),' + 'or equalTo() must be a string.';
            if (params.hasStart()) {
                var startName = params.getIndexStartName();
                if (startName != _util.MIN_NAME) {
                    throw new Error(tooManyArgsError);
                } else if (typeof startNode !== 'string') {
                    throw new Error(wrongArgTypeError);
                }
            }
            if (params.hasEnd()) {
                var endName = params.getIndexEndName();
                if (endName != _util.MAX_NAME) {
                    throw new Error(tooManyArgsError);
                } else if (typeof endNode !== 'string') {
                    throw new Error(wrongArgTypeError);
                }
            }
        } else if (params.getIndex() === _PriorityIndex.PRIORITY_INDEX) {
            if (startNode != null && !(0, _validation.isValidPriority)(startNode) || endNode != null && !(0, _validation.isValidPriority)(endNode)) {
                throw new Error('Query: When ordering by priority, the first argument passed to startAt(), ' + 'endAt(), or equalTo() must be a valid priority value (null, a number, or a string).');
            }
        } else {
            (0, _assert.assert)(params.getIndex() instanceof _PathIndex.PathIndex || params.getIndex() === _ValueIndex.VALUE_INDEX, 'unknown index type.');
            if (startNode != null && (typeof startNode === 'undefined' ? 'undefined' : _typeof(startNode)) === 'object' || endNode != null && (typeof endNode === 'undefined' ? 'undefined' : _typeof(endNode)) === 'object') {
                throw new Error('Query: First argument passed to startAt(), endAt(), or equalTo() cannot be ' + 'an object.');
            }
        }
    };
    /**
     * Validates that limit* has been called with the correct combination of parameters
     * @param {!QueryParams} params
     * @private
     */
    Query.validateLimit_ = function (params) {
        if (params.hasStart() && params.hasEnd() && params.hasLimit() && !params.hasAnchoredLimit()) {
            throw new Error("Query: Can't combine startAt(), endAt(), and limit(). Use limitToFirst() or limitToLast() instead.");
        }
    };
    /**
     * Validates that no other order by call has been made
     * @param {!string} fnName
     * @private
     */
    Query.prototype.validateNoPreviousOrderByCall_ = function (fnName) {
        if (this.orderByCalled_ === true) {
            throw new Error(fnName + ": You can't combine multiple orderBy calls.");
        }
    };
    /**
     * @return {!QueryParams}
     */
    Query.prototype.getQueryParams = function () {
        return this.queryParams_;
    };
    /**
     * @return {!Reference}
     */
    Query.prototype.getRef = function () {
        (0, _validation2.validateArgCount)('Query.ref', 0, 0, arguments.length);
        // This is a slight hack. We cannot goog.require('fb.api.Firebase'), since Firebase requires fb.api.Query.
        // However, we will always export 'Firebase' to the global namespace, so it's guaranteed to exist by the time this
        // method gets called.
        return new Query.__referenceConstructor(this.repo, this.path);
    };
    /**
     * @param {!string} eventType
     * @param {!function(DataSnapshot, string=)} callback
     * @param {(function(Error)|Object)=} cancelCallbackOrContext
     * @param {Object=} context
     * @return {!function(DataSnapshot, string=)}
     */
    Query.prototype.on = function (eventType, callback, cancelCallbackOrContext, context) {
        (0, _validation2.validateArgCount)('Query.on', 2, 4, arguments.length);
        (0, _validation.validateEventType)('Query.on', 1, eventType, false);
        (0, _validation2.validateCallback)('Query.on', 2, callback, false);
        var ret = Query.getCancelAndContextArgs_('Query.on', cancelCallbackOrContext, context);
        if (eventType === 'value') {
            this.onValueEvent(callback, ret.cancel, ret.context);
        } else {
            var callbacks = {};
            callbacks[eventType] = callback;
            this.onChildEvent(callbacks, ret.cancel, ret.context);
        }
        return callback;
    };
    /**
     * @param {!function(!DataSnapshot)} callback
     * @param {?function(Error)} cancelCallback
     * @param {?Object} context
     * @protected
     */
    Query.prototype.onValueEvent = function (callback, cancelCallback, context) {
        var container = new _EventRegistration.ValueEventRegistration(callback, cancelCallback || null, context || null);
        this.repo.addEventCallbackForQuery(this, container);
    };
    /**
     * @param {!Object.<string, !function(!DataSnapshot, ?string)>} callbacks
     * @param {?function(Error)} cancelCallback
     * @param {?Object} context
     * @protected
     */
    Query.prototype.onChildEvent = function (callbacks, cancelCallback, context) {
        var container = new _EventRegistration.ChildEventRegistration(callbacks, cancelCallback, context);
        this.repo.addEventCallbackForQuery(this, container);
    };
    /**
     * @param {string=} eventType
     * @param {(function(!DataSnapshot, ?string=))=} callback
     * @param {Object=} context
     */
    Query.prototype.off = function (eventType, callback, context) {
        (0, _validation2.validateArgCount)('Query.off', 0, 3, arguments.length);
        (0, _validation.validateEventType)('Query.off', 1, eventType, true);
        (0, _validation2.validateCallback)('Query.off', 2, callback, true);
        (0, _validation2.validateContextObject)('Query.off', 3, context, true);
        var container = null;
        var callbacks = null;
        if (eventType === 'value') {
            var valueCallback = callback || null;
            container = new _EventRegistration.ValueEventRegistration(valueCallback, null, context || null);
        } else if (eventType) {
            if (callback) {
                callbacks = {};
                callbacks[eventType] = callback;
            }
            container = new _EventRegistration.ChildEventRegistration(callbacks, null, context || null);
        }
        this.repo.removeEventCallbackForQuery(this, container);
    };
    /**
     * Attaches a listener, waits for the first event, and then removes the listener
     * @param {!string} eventType
     * @param {!function(!DataSnapshot, string=)} userCallback
     * @param cancelOrContext
     * @param context
     * @return {!firebase.Promise}
     */
    Query.prototype.once = function (eventType, userCallback, cancelOrContext, context) {
        var _this = this;
        (0, _validation2.validateArgCount)('Query.once', 1, 4, arguments.length);
        (0, _validation.validateEventType)('Query.once', 1, eventType, false);
        (0, _validation2.validateCallback)('Query.once', 2, userCallback, true);
        var ret = Query.getCancelAndContextArgs_('Query.once', cancelOrContext, context);
        // TODO: Implement this more efficiently (in particular, use 'get' wire protocol for 'value' event)
        // TODO: consider actually wiring the callbacks into the promise. We cannot do this without a breaking change
        // because the API currently expects callbacks will be called synchronously if the data is cached, but this is
        // against the Promise specification.
        var firstCall = true;
        var deferred = new _promise.Deferred();
        (0, _promise.attachDummyErrorHandler)(deferred.promise);
        var onceCallback = function onceCallback(snapshot) {
            // NOTE: Even though we unsubscribe, we may get called multiple times if a single action (e.g. set() with JSON)
            // triggers multiple events (e.g. child_added or child_changed).
            if (firstCall) {
                firstCall = false;
                _this.off(eventType, onceCallback);
                if (userCallback) {
                    userCallback.bind(ret.context)(snapshot);
                }
                deferred.resolve(snapshot);
            }
        };
        this.on(eventType, onceCallback,
        /*cancel=*/function (err) {
            _this.off(eventType, onceCallback);
            if (ret.cancel) ret.cancel.bind(ret.context)(err);
            deferred.reject(err);
        });
        return deferred.promise;
    };
    /**
     * Set a limit and anchor it to the start of the window.
     * @param {!number} limit
     * @return {!Query}
     */
    Query.prototype.limitToFirst = function (limit) {
        (0, _validation2.validateArgCount)('Query.limitToFirst', 1, 1, arguments.length);
        if (typeof limit !== 'number' || Math.floor(limit) !== limit || limit <= 0) {
            throw new Error('Query.limitToFirst: First argument must be a positive integer.');
        }
        if (this.queryParams_.hasLimit()) {
            throw new Error('Query.limitToFirst: Limit was already set (by another call to limit, ' + 'limitToFirst, or limitToLast).');
        }
        return new Query(this.repo, this.path, this.queryParams_.limitToFirst(limit), this.orderByCalled_);
    };
    /**
     * Set a limit and anchor it to the end of the window.
     * @param {!number} limit
     * @return {!Query}
     */
    Query.prototype.limitToLast = function (limit) {
        (0, _validation2.validateArgCount)('Query.limitToLast', 1, 1, arguments.length);
        if (typeof limit !== 'number' || Math.floor(limit) !== limit || limit <= 0) {
            throw new Error('Query.limitToLast: First argument must be a positive integer.');
        }
        if (this.queryParams_.hasLimit()) {
            throw new Error('Query.limitToLast: Limit was already set (by another call to limit, ' + 'limitToFirst, or limitToLast).');
        }
        return new Query(this.repo, this.path, this.queryParams_.limitToLast(limit), this.orderByCalled_);
    };
    /**
     * Given a child path, return a new query ordered by the specified grandchild path.
     * @param {!string} path
     * @return {!Query}
     */
    Query.prototype.orderByChild = function (path) {
        (0, _validation2.validateArgCount)('Query.orderByChild', 1, 1, arguments.length);
        if (path === '$key') {
            throw new Error('Query.orderByChild: "$key" is invalid.  Use Query.orderByKey() instead.');
        } else if (path === '$priority') {
            throw new Error('Query.orderByChild: "$priority" is invalid.  Use Query.orderByPriority() instead.');
        } else if (path === '$value') {
            throw new Error('Query.orderByChild: "$value" is invalid.  Use Query.orderByValue() instead.');
        }
        (0, _validation.validatePathString)('Query.orderByChild', 1, path, false);
        this.validateNoPreviousOrderByCall_('Query.orderByChild');
        var parsedPath = new _Path.Path(path);
        if (parsedPath.isEmpty()) {
            throw new Error('Query.orderByChild: cannot pass in empty path.  Use Query.orderByValue() instead.');
        }
        var index = new _PathIndex.PathIndex(parsedPath);
        var newParams = this.queryParams_.orderBy(index);
        Query.validateQueryEndpoints_(newParams);
        return new Query(this.repo, this.path, newParams, /*orderByCalled=*/true);
    };
    /**
     * Return a new query ordered by the KeyIndex
     * @return {!Query}
     */
    Query.prototype.orderByKey = function () {
        (0, _validation2.validateArgCount)('Query.orderByKey', 0, 0, arguments.length);
        this.validateNoPreviousOrderByCall_('Query.orderByKey');
        var newParams = this.queryParams_.orderBy(_KeyIndex.KEY_INDEX);
        Query.validateQueryEndpoints_(newParams);
        return new Query(this.repo, this.path, newParams, /*orderByCalled=*/true);
    };
    /**
     * Return a new query ordered by the PriorityIndex
     * @return {!Query}
     */
    Query.prototype.orderByPriority = function () {
        (0, _validation2.validateArgCount)('Query.orderByPriority', 0, 0, arguments.length);
        this.validateNoPreviousOrderByCall_('Query.orderByPriority');
        var newParams = this.queryParams_.orderBy(_PriorityIndex.PRIORITY_INDEX);
        Query.validateQueryEndpoints_(newParams);
        return new Query(this.repo, this.path, newParams, /*orderByCalled=*/true);
    };
    /**
     * Return a new query ordered by the ValueIndex
     * @return {!Query}
     */
    Query.prototype.orderByValue = function () {
        (0, _validation2.validateArgCount)('Query.orderByValue', 0, 0, arguments.length);
        this.validateNoPreviousOrderByCall_('Query.orderByValue');
        var newParams = this.queryParams_.orderBy(_ValueIndex.VALUE_INDEX);
        Query.validateQueryEndpoints_(newParams);
        return new Query(this.repo, this.path, newParams, /*orderByCalled=*/true);
    };
    /**
     * @param {number|string|boolean|null} value
     * @param {?string=} name
     * @return {!Query}
     */
    Query.prototype.startAt = function (value, name) {
        if (value === void 0) {
            value = null;
        }
        (0, _validation2.validateArgCount)('Query.startAt', 0, 2, arguments.length);
        (0, _validation.validateFirebaseDataArg)('Query.startAt', 1, value, this.path, true);
        (0, _validation.validateKey)('Query.startAt', 2, name, true);
        var newParams = this.queryParams_.startAt(value, name);
        Query.validateLimit_(newParams);
        Query.validateQueryEndpoints_(newParams);
        if (this.queryParams_.hasStart()) {
            throw new Error('Query.startAt: Starting point was already set (by another call to startAt ' + 'or equalTo).');
        }
        // Calling with no params tells us to start at the beginning.
        if (value === undefined) {
            value = null;
            name = null;
        }
        return new Query(this.repo, this.path, newParams, this.orderByCalled_);
    };
    /**
     * @param {number|string|boolean|null} value
     * @param {?string=} name
     * @return {!Query}
     */
    Query.prototype.endAt = function (value, name) {
        if (value === void 0) {
            value = null;
        }
        (0, _validation2.validateArgCount)('Query.endAt', 0, 2, arguments.length);
        (0, _validation.validateFirebaseDataArg)('Query.endAt', 1, value, this.path, true);
        (0, _validation.validateKey)('Query.endAt', 2, name, true);
        var newParams = this.queryParams_.endAt(value, name);
        Query.validateLimit_(newParams);
        Query.validateQueryEndpoints_(newParams);
        if (this.queryParams_.hasEnd()) {
            throw new Error('Query.endAt: Ending point was already set (by another call to endAt or ' + 'equalTo).');
        }
        return new Query(this.repo, this.path, newParams, this.orderByCalled_);
    };
    /**
     * Load the selection of children with exactly the specified value, and, optionally,
     * the specified name.
     * @param {number|string|boolean|null} value
     * @param {string=} name
     * @return {!Query}
     */
    Query.prototype.equalTo = function (value, name) {
        (0, _validation2.validateArgCount)('Query.equalTo', 1, 2, arguments.length);
        (0, _validation.validateFirebaseDataArg)('Query.equalTo', 1, value, this.path, false);
        (0, _validation.validateKey)('Query.equalTo', 2, name, true);
        if (this.queryParams_.hasStart()) {
            throw new Error('Query.equalTo: Starting point was already set (by another call to startAt or ' + 'equalTo).');
        }
        if (this.queryParams_.hasEnd()) {
            throw new Error('Query.equalTo: Ending point was already set (by another call to endAt or ' + 'equalTo).');
        }
        return this.startAt(value, name).endAt(value, name);
    };
    /**
     * @return {!string} URL for this location.
     */
    Query.prototype.toString = function () {
        (0, _validation2.validateArgCount)('Query.toString', 0, 0, arguments.length);
        return this.repo.toString() + this.path.toUrlEncodedString();
    };
    // Do not create public documentation. This is intended to make JSON serialization work but is otherwise unnecessary
    // for end-users.
    Query.prototype.toJSON = function () {
        // An optional spacer argument is unnecessary for a string.
        (0, _validation2.validateArgCount)('Query.toJSON', 0, 1, arguments.length);
        return this.toString();
    };
    /**
     * An object representation of the query parameters used by this Query.
     * @return {!Object}
     */
    Query.prototype.queryObject = function () {
        return this.queryParams_.getQueryObject();
    };
    /**
     * @return {!string}
     */
    Query.prototype.queryIdentifier = function () {
        var obj = this.queryObject();
        var id = (0, _util.ObjectToUniqueKey)(obj);
        return id === '{}' ? 'default' : id;
    };
    /**
     * Return true if this query and the provided query are equivalent; otherwise, return false.
     * @param {Query} other
     * @return {boolean}
     */
    Query.prototype.isEqual = function (other) {
        (0, _validation2.validateArgCount)('Query.isEqual', 1, 1, arguments.length);
        if (!(other instanceof Query)) {
            var error = 'Query.isEqual failed: First argument must be an instance of firebase.database.Query.';
            throw new Error(error);
        }
        var sameRepo = this.repo === other.repo;
        var samePath = this.path.equals(other.path);
        var sameQueryIdentifier = this.queryIdentifier() === other.queryIdentifier();
        return sameRepo && samePath && sameQueryIdentifier;
    };
    /**
     * Helper used by .on and .once to extract the context and or cancel arguments.
     * @param {!string} fnName The function name (on or once)
     * @param {(function(Error)|Object)=} cancelOrContext
     * @param {Object=} context
     * @return {{cancel: ?function(Error), context: ?Object}}
     * @private
     */
    Query.getCancelAndContextArgs_ = function (fnName, cancelOrContext, context) {
        var ret = { cancel: null, context: null };
        if (cancelOrContext && context) {
            ret.cancel = cancelOrContext;
            (0, _validation2.validateCallback)(fnName, 3, ret.cancel, true);
            ret.context = context;
            (0, _validation2.validateContextObject)(fnName, 4, ret.context, true);
        } else if (cancelOrContext) {
            // we have either a cancel callback or a context.
            if ((typeof cancelOrContext === 'undefined' ? 'undefined' : _typeof(cancelOrContext)) === 'object' && cancelOrContext !== null) {
                // it's a context!
                ret.context = cancelOrContext;
            } else if (typeof cancelOrContext === 'function') {
                ret.cancel = cancelOrContext;
            } else {
                throw new Error((0, _validation2.errorPrefix)(fnName, 3, true) + ' must either be a cancel callback or a context object.');
            }
        }
        return ret;
    };
    Object.defineProperty(Query.prototype, "ref", {
        get: function get() {
            return this.getRef();
        },
        enumerable: true,
        configurable: true
    });
    return Query;
}();
exports.Query = Query;
//# sourceMappingURL=Query.js.map


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*! @license Firebase v4.5.0
Build: rev-f49c8b5
Terms: https://firebase.google.com/terms/ */



Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PersistentConnection = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _app = __webpack_require__(28);

var _app2 = _interopRequireDefault(_app);

var _obj = __webpack_require__(4);

var _json = __webpack_require__(14);

var _assert = __webpack_require__(2);

var _util = __webpack_require__(3);

var _Path = __webpack_require__(5);

var _VisibilityMonitor = __webpack_require__(108);

var _OnlineMonitor = __webpack_require__(106);

var _jwt = __webpack_require__(130);

var _Connection = __webpack_require__(76);

var _constants = __webpack_require__(42);

var _environment = __webpack_require__(31);

var _ServerActions = __webpack_require__(58);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var __extends = undefined && undefined.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();

var RECONNECT_MIN_DELAY = 1000;
var RECONNECT_MAX_DELAY_DEFAULT = 60 * 5 * 1000; // 5 minutes in milliseconds (Case: 1858)
var RECONNECT_MAX_DELAY_FOR_ADMINS = 30 * 1000; // 30 seconds for admin clients (likely to be a backend server)
var RECONNECT_DELAY_MULTIPLIER = 1.3;
var RECONNECT_DELAY_RESET_TIMEOUT = 30000; // Reset delay back to MIN_DELAY after being connected for 30sec.
var SERVER_KILL_INTERRUPT_REASON = 'server_kill';
// If auth fails repeatedly, we'll assume something is wrong and log a warning / back off.
var INVALID_AUTH_TOKEN_THRESHOLD = 3;
/**
 * Firebase connection.  Abstracts wire protocol and handles reconnecting.
 *
 * NOTE: All JSON objects sent to the realtime connection must have property names enclosed
 * in quotes to make sure the closure compiler does not minify them.
 */
var PersistentConnection = /** @class */function (_super) {
    __extends(PersistentConnection, _super);
    /**
     * @implements {ServerActions}
     * @param {!RepoInfo} repoInfo_ Data about the namespace we are connecting to
     * @param {function(string, *, boolean, ?number)} onDataUpdate_ A callback for new data from the server
     * @param onConnectStatus_
     * @param onServerInfoUpdate_
     * @param authTokenProvider_
     * @param authOverride_
     */
    function PersistentConnection(repoInfo_, onDataUpdate_, onConnectStatus_, onServerInfoUpdate_, authTokenProvider_, authOverride_) {
        var _this = _super.call(this) || this;
        _this.repoInfo_ = repoInfo_;
        _this.onDataUpdate_ = onDataUpdate_;
        _this.onConnectStatus_ = onConnectStatus_;
        _this.onServerInfoUpdate_ = onServerInfoUpdate_;
        _this.authTokenProvider_ = authTokenProvider_;
        _this.authOverride_ = authOverride_;
        // Used for diagnostic logging.
        _this.id = PersistentConnection.nextPersistentConnectionId_++;
        _this.log_ = (0, _util.logWrapper)('p:' + _this.id + ':');
        /** @private {Object} */
        _this.interruptReasons_ = {};
        _this.listens_ = {};
        _this.outstandingPuts_ = [];
        _this.outstandingPutCount_ = 0;
        _this.onDisconnectRequestQueue_ = [];
        _this.connected_ = false;
        _this.reconnectDelay_ = RECONNECT_MIN_DELAY;
        _this.maxReconnectDelay_ = RECONNECT_MAX_DELAY_DEFAULT;
        _this.securityDebugCallback_ = null;
        _this.lastSessionId = null;
        /** @private {number|null} */
        _this.establishConnectionTimer_ = null;
        /** @private {boolean} */
        _this.visible_ = false;
        // Before we get connected, we keep a queue of pending messages to send.
        _this.requestCBHash_ = {};
        _this.requestNumber_ = 0;
        /** @private {?{
         *   sendRequest(Object),
         *   close()
         * }} */
        _this.realtime_ = null;
        /** @private {string|null} */
        _this.authToken_ = null;
        _this.forceTokenRefresh_ = false;
        _this.invalidAuthTokenCount_ = 0;
        _this.firstConnection_ = true;
        _this.lastConnectionAttemptTime_ = null;
        _this.lastConnectionEstablishedTime_ = null;
        if (authOverride_ && !(0, _environment.isNodeSdk)()) {
            throw new Error('Auth override specified in options, but not supported on non Node.js platforms');
        }
        _this.scheduleConnect_(0);
        _VisibilityMonitor.VisibilityMonitor.getInstance().on('visible', _this.onVisible_, _this);
        if (repoInfo_.host.indexOf('fblocal') === -1) {
            _OnlineMonitor.OnlineMonitor.getInstance().on('online', _this.onOnline_, _this);
        }
        return _this;
    }
    /**
     * @param {!string} action
     * @param {*} body
     * @param {function(*)=} onResponse
     * @protected
     */
    PersistentConnection.prototype.sendRequest = function (action, body, onResponse) {
        var curReqNum = ++this.requestNumber_;
        var msg = { r: curReqNum, a: action, b: body };
        this.log_((0, _json.stringify)(msg));
        (0, _assert.assert)(this.connected_, "sendRequest call when we're not connected not allowed.");
        this.realtime_.sendRequest(msg);
        if (onResponse) {
            this.requestCBHash_[curReqNum] = onResponse;
        }
    };
    /**
     * @inheritDoc
     */
    PersistentConnection.prototype.listen = function (query, currentHashFn, tag, onComplete) {
        var queryId = query.queryIdentifier();
        var pathString = query.path.toString();
        this.log_('Listen called for ' + pathString + ' ' + queryId);
        this.listens_[pathString] = this.listens_[pathString] || {};
        (0, _assert.assert)(query.getQueryParams().isDefault() || !query.getQueryParams().loadsAllData(), 'listen() called for non-default but complete query');
        (0, _assert.assert)(!this.listens_[pathString][queryId], 'listen() called twice for same path/queryId.');
        var listenSpec = {
            onComplete: onComplete,
            hashFn: currentHashFn,
            query: query,
            tag: tag
        };
        this.listens_[pathString][queryId] = listenSpec;
        if (this.connected_) {
            this.sendListen_(listenSpec);
        }
    };
    /**
     * @param {!{onComplete(),
     *           hashFn():!string,
     *           query: !Query,
     *           tag: ?number}} listenSpec
     * @private
     */
    PersistentConnection.prototype.sendListen_ = function (listenSpec) {
        var _this = this;
        var query = listenSpec.query;
        var pathString = query.path.toString();
        var queryId = query.queryIdentifier();
        this.log_('Listen on ' + pathString + ' for ' + queryId);
        var req = { /*path*/p: pathString };
        var action = 'q';
        // Only bother to send query if it's non-default.
        if (listenSpec.tag) {
            req['q'] = query.queryObject();
            req['t'] = listenSpec.tag;
        }
        req['h'] = listenSpec.hashFn();
        this.sendRequest(action, req, function (message) {
            var payload = message['d'];
            var status = message['s'];
            // print warnings in any case...
            PersistentConnection.warnOnListenWarnings_(payload, query);
            var currentListenSpec = _this.listens_[pathString] && _this.listens_[pathString][queryId];
            // only trigger actions if the listen hasn't been removed and readded
            if (currentListenSpec === listenSpec) {
                _this.log_('listen response', message);
                if (status !== 'ok') {
                    _this.removeListen_(pathString, queryId);
                }
                if (listenSpec.onComplete) {
                    listenSpec.onComplete(status, payload);
                }
            }
        });
    };
    /**
     * @param {*} payload
     * @param {!Query} query
     * @private
     */
    PersistentConnection.warnOnListenWarnings_ = function (payload, query) {
        if (payload && (typeof payload === 'undefined' ? 'undefined' : _typeof(payload)) === 'object' && (0, _obj.contains)(payload, 'w')) {
            var warnings = (0, _obj.safeGet)(payload, 'w');
            if (Array.isArray(warnings) && ~warnings.indexOf('no_index')) {
                var indexSpec = '".indexOn": "' + query.getQueryParams().getIndex().toString() + '"';
                var indexPath = query.path.toString();
                (0, _util.warn)("Using an unspecified index. Your data will be downloaded and " + ("filtered on the client. Consider adding " + indexSpec + " at ") + (indexPath + " to your security rules for better performance."));
            }
        }
    };
    /**
     * @inheritDoc
     */
    PersistentConnection.prototype.refreshAuthToken = function (token) {
        this.authToken_ = token;
        this.log_('Auth token refreshed');
        if (this.authToken_) {
            this.tryAuth();
        } else {
            //If we're connected we want to let the server know to unauthenticate us. If we're not connected, simply delete
            //the credential so we dont become authenticated next time we connect.
            if (this.connected_) {
                this.sendRequest('unauth', {}, function () {});
            }
        }
        this.reduceReconnectDelayIfAdminCredential_(token);
    };
    /**
     * @param {!string} credential
     * @private
     */
    PersistentConnection.prototype.reduceReconnectDelayIfAdminCredential_ = function (credential) {
        // NOTE: This isn't intended to be bulletproof (a malicious developer can always just modify the client).
        // Additionally, we don't bother resetting the max delay back to the default if auth fails / expires.
        var isFirebaseSecret = credential && credential.length === 40;
        if (isFirebaseSecret || (0, _jwt.isAdmin)(credential)) {
            this.log_('Admin auth credential detected.  Reducing max reconnect time.');
            this.maxReconnectDelay_ = RECONNECT_MAX_DELAY_FOR_ADMINS;
        }
    };
    /**
     * Attempts to authenticate with the given credentials. If the authentication attempt fails, it's triggered like
     * a auth revoked (the connection is closed).
     */
    PersistentConnection.prototype.tryAuth = function () {
        var _this = this;
        if (this.connected_ && this.authToken_) {
            var token_1 = this.authToken_;
            var authMethod = (0, _jwt.isValidFormat)(token_1) ? 'auth' : 'gauth';
            var requestData = { cred: token_1 };
            if (this.authOverride_ === null) {
                requestData['noauth'] = true;
            } else if (_typeof(this.authOverride_) === 'object') {
                requestData['authvar'] = this.authOverride_;
            }
            this.sendRequest(authMethod, requestData, function (res) {
                var status = res['s'];
                var data = res['d'] || 'error';
                if (_this.authToken_ === token_1) {
                    if (status === 'ok') {
                        _this.invalidAuthTokenCount_ = 0;
                    } else {
                        // Triggers reconnect and force refresh for auth token
                        _this.onAuthRevoked_(status, data);
                    }
                }
            });
        }
    };
    /**
     * @inheritDoc
     */
    PersistentConnection.prototype.unlisten = function (query, tag) {
        var pathString = query.path.toString();
        var queryId = query.queryIdentifier();
        this.log_('Unlisten called for ' + pathString + ' ' + queryId);
        (0, _assert.assert)(query.getQueryParams().isDefault() || !query.getQueryParams().loadsAllData(), 'unlisten() called for non-default but complete query');
        var listen = this.removeListen_(pathString, queryId);
        if (listen && this.connected_) {
            this.sendUnlisten_(pathString, queryId, query.queryObject(), tag);
        }
    };
    PersistentConnection.prototype.sendUnlisten_ = function (pathString, queryId, queryObj, tag) {
        this.log_('Unlisten on ' + pathString + ' for ' + queryId);
        var req = { /*path*/p: pathString };
        var action = 'n';
        // Only bother sending queryId if it's non-default.
        if (tag) {
            req['q'] = queryObj;
            req['t'] = tag;
        }
        this.sendRequest(action, req);
    };
    /**
     * @inheritDoc
     */
    PersistentConnection.prototype.onDisconnectPut = function (pathString, data, onComplete) {
        if (this.connected_) {
            this.sendOnDisconnect_('o', pathString, data, onComplete);
        } else {
            this.onDisconnectRequestQueue_.push({
                pathString: pathString,
                action: 'o',
                data: data,
                onComplete: onComplete
            });
        }
    };
    /**
     * @inheritDoc
     */
    PersistentConnection.prototype.onDisconnectMerge = function (pathString, data, onComplete) {
        if (this.connected_) {
            this.sendOnDisconnect_('om', pathString, data, onComplete);
        } else {
            this.onDisconnectRequestQueue_.push({
                pathString: pathString,
                action: 'om',
                data: data,
                onComplete: onComplete
            });
        }
    };
    /**
     * @inheritDoc
     */
    PersistentConnection.prototype.onDisconnectCancel = function (pathString, onComplete) {
        if (this.connected_) {
            this.sendOnDisconnect_('oc', pathString, null, onComplete);
        } else {
            this.onDisconnectRequestQueue_.push({
                pathString: pathString,
                action: 'oc',
                data: null,
                onComplete: onComplete
            });
        }
    };
    PersistentConnection.prototype.sendOnDisconnect_ = function (action, pathString, data, onComplete) {
        var request = { /*path*/p: pathString, /*data*/d: data };
        this.log_('onDisconnect ' + action, request);
        this.sendRequest(action, request, function (response) {
            if (onComplete) {
                setTimeout(function () {
                    onComplete(response['s'], response['d']);
                }, Math.floor(0));
            }
        });
    };
    /**
     * @inheritDoc
     */
    PersistentConnection.prototype.put = function (pathString, data, onComplete, hash) {
        this.putInternal('p', pathString, data, onComplete, hash);
    };
    /**
     * @inheritDoc
     */
    PersistentConnection.prototype.merge = function (pathString, data, onComplete, hash) {
        this.putInternal('m', pathString, data, onComplete, hash);
    };
    PersistentConnection.prototype.putInternal = function (action, pathString, data, onComplete, hash) {
        var request = {
            /*path*/p: pathString,
            /*data*/d: data
        };
        if (hash !== undefined) request['h'] = hash;
        // TODO: Only keep track of the most recent put for a given path?
        this.outstandingPuts_.push({
            action: action,
            request: request,
            onComplete: onComplete
        });
        this.outstandingPutCount_++;
        var index = this.outstandingPuts_.length - 1;
        if (this.connected_) {
            this.sendPut_(index);
        } else {
            this.log_('Buffering put: ' + pathString);
        }
    };
    PersistentConnection.prototype.sendPut_ = function (index) {
        var _this = this;
        var action = this.outstandingPuts_[index].action;
        var request = this.outstandingPuts_[index].request;
        var onComplete = this.outstandingPuts_[index].onComplete;
        this.outstandingPuts_[index].queued = this.connected_;
        this.sendRequest(action, request, function (message) {
            _this.log_(action + ' response', message);
            delete _this.outstandingPuts_[index];
            _this.outstandingPutCount_--;
            // Clean up array occasionally.
            if (_this.outstandingPutCount_ === 0) {
                _this.outstandingPuts_ = [];
            }
            if (onComplete) onComplete(message['s'], message['d']);
        });
    };
    /**
     * @inheritDoc
     */
    PersistentConnection.prototype.reportStats = function (stats) {
        var _this = this;
        // If we're not connected, we just drop the stats.
        if (this.connected_) {
            var request = { /*counters*/c: stats };
            this.log_('reportStats', request);
            this.sendRequest( /*stats*/'s', request, function (result) {
                var status = result['s'];
                if (status !== 'ok') {
                    var errorReason = result['d'];
                    _this.log_('reportStats', 'Error sending stats: ' + errorReason);
                }
            });
        }
    };
    /**
     * @param {*} message
     * @private
     */
    PersistentConnection.prototype.onDataMessage_ = function (message) {
        if ('r' in message) {
            // this is a response
            this.log_('from server: ' + (0, _json.stringify)(message));
            var reqNum = message['r'];
            var onResponse = this.requestCBHash_[reqNum];
            if (onResponse) {
                delete this.requestCBHash_[reqNum];
                onResponse(message['b']);
            }
        } else if ('error' in message) {
            throw 'A server-side error has occurred: ' + message['error'];
        } else if ('a' in message) {
            // a and b are action and body, respectively
            this.onDataPush_(message['a'], message['b']);
        }
    };
    PersistentConnection.prototype.onDataPush_ = function (action, body) {
        this.log_('handleServerMessage', action, body);
        if (action === 'd') this.onDataUpdate_(body['p'], body['d'],
        /*isMerge*/false, body['t']);else if (action === 'm') this.onDataUpdate_(body['p'], body['d'],
        /*isMerge=*/true, body['t']);else if (action === 'c') this.onListenRevoked_(body['p'], body['q']);else if (action === 'ac') this.onAuthRevoked_(body['s'], body['d']);else if (action === 'sd') this.onSecurityDebugPacket_(body);else (0, _util.error)('Unrecognized action received from server: ' + (0, _json.stringify)(action) + '\nAre you using the latest client?');
    };
    PersistentConnection.prototype.onReady_ = function (timestamp, sessionId) {
        this.log_('connection ready');
        this.connected_ = true;
        this.lastConnectionEstablishedTime_ = new Date().getTime();
        this.handleTimestamp_(timestamp);
        this.lastSessionId = sessionId;
        if (this.firstConnection_) {
            this.sendConnectStats_();
        }
        this.restoreState_();
        this.firstConnection_ = false;
        this.onConnectStatus_(true);
    };
    PersistentConnection.prototype.scheduleConnect_ = function (timeout) {
        var _this = this;
        (0, _assert.assert)(!this.realtime_, "Scheduling a connect when we're already connected/ing?");
        if (this.establishConnectionTimer_) {
            clearTimeout(this.establishConnectionTimer_);
        }
        // NOTE: Even when timeout is 0, it's important to do a setTimeout to work around an infuriating "Security Error" in
        // Firefox when trying to write to our long-polling iframe in some scenarios (e.g. Forge or our unit tests).
        this.establishConnectionTimer_ = setTimeout(function () {
            _this.establishConnectionTimer_ = null;
            _this.establishConnection_();
        }, Math.floor(timeout));
    };
    /**
     * @param {boolean} visible
     * @private
     */
    PersistentConnection.prototype.onVisible_ = function (visible) {
        // NOTE: Tabbing away and back to a window will defeat our reconnect backoff, but I think that's fine.
        if (visible && !this.visible_ && this.reconnectDelay_ === this.maxReconnectDelay_) {
            this.log_('Window became visible.  Reducing delay.');
            this.reconnectDelay_ = RECONNECT_MIN_DELAY;
            if (!this.realtime_) {
                this.scheduleConnect_(0);
            }
        }
        this.visible_ = visible;
    };
    PersistentConnection.prototype.onOnline_ = function (online) {
        if (online) {
            this.log_('Browser went online.');
            this.reconnectDelay_ = RECONNECT_MIN_DELAY;
            if (!this.realtime_) {
                this.scheduleConnect_(0);
            }
        } else {
            this.log_('Browser went offline.  Killing connection.');
            if (this.realtime_) {
                this.realtime_.close();
            }
        }
    };
    PersistentConnection.prototype.onRealtimeDisconnect_ = function () {
        this.log_('data client disconnected');
        this.connected_ = false;
        this.realtime_ = null;
        // Since we don't know if our sent transactions succeeded or not, we need to cancel them.
        this.cancelSentTransactions_();
        // Clear out the pending requests.
        this.requestCBHash_ = {};
        if (this.shouldReconnect_()) {
            if (!this.visible_) {
                this.log_("Window isn't visible.  Delaying reconnect.");
                this.reconnectDelay_ = this.maxReconnectDelay_;
                this.lastConnectionAttemptTime_ = new Date().getTime();
            } else if (this.lastConnectionEstablishedTime_) {
                // If we've been connected long enough, reset reconnect delay to minimum.
                var timeSinceLastConnectSucceeded = new Date().getTime() - this.lastConnectionEstablishedTime_;
                if (timeSinceLastConnectSucceeded > RECONNECT_DELAY_RESET_TIMEOUT) this.reconnectDelay_ = RECONNECT_MIN_DELAY;
                this.lastConnectionEstablishedTime_ = null;
            }
            var timeSinceLastConnectAttempt = new Date().getTime() - this.lastConnectionAttemptTime_;
            var reconnectDelay = Math.max(0, this.reconnectDelay_ - timeSinceLastConnectAttempt);
            reconnectDelay = Math.random() * reconnectDelay;
            this.log_('Trying to reconnect in ' + reconnectDelay + 'ms');
            this.scheduleConnect_(reconnectDelay);
            // Adjust reconnect delay for next time.
            this.reconnectDelay_ = Math.min(this.maxReconnectDelay_, this.reconnectDelay_ * RECONNECT_DELAY_MULTIPLIER);
        }
        this.onConnectStatus_(false);
    };
    PersistentConnection.prototype.establishConnection_ = function () {
        if (this.shouldReconnect_()) {
            this.log_('Making a connection attempt');
            this.lastConnectionAttemptTime_ = new Date().getTime();
            this.lastConnectionEstablishedTime_ = null;
            var onDataMessage_1 = this.onDataMessage_.bind(this);
            var onReady_1 = this.onReady_.bind(this);
            var onDisconnect_1 = this.onRealtimeDisconnect_.bind(this);
            var connId_1 = this.id + ':' + PersistentConnection.nextConnectionId_++;
            var self_1 = this;
            var lastSessionId_1 = this.lastSessionId;
            var canceled_1 = false;
            var connection_1 = null;
            var closeFn_1 = function closeFn_1() {
                if (connection_1) {
                    connection_1.close();
                } else {
                    canceled_1 = true;
                    onDisconnect_1();
                }
            };
            var sendRequestFn = function sendRequestFn(msg) {
                (0, _assert.assert)(connection_1, "sendRequest call when we're not connected not allowed.");
                connection_1.sendRequest(msg);
            };
            this.realtime_ = {
                close: closeFn_1,
                sendRequest: sendRequestFn
            };
            var forceRefresh = this.forceTokenRefresh_;
            this.forceTokenRefresh_ = false;
            // First fetch auth token, and establish connection after fetching the token was successful
            this.authTokenProvider_.getToken(forceRefresh).then(function (result) {
                if (!canceled_1) {
                    (0, _util.log)('getToken() completed. Creating connection.');
                    self_1.authToken_ = result && result.accessToken;
                    connection_1 = new _Connection.Connection(connId_1, self_1.repoInfo_, onDataMessage_1, onReady_1, onDisconnect_1,
                    /* onKill= */function (reason) {
                        (0, _util.warn)(reason + ' (' + self_1.repoInfo_.toString() + ')');
                        self_1.interrupt(SERVER_KILL_INTERRUPT_REASON);
                    }, lastSessionId_1);
                } else {
                    (0, _util.log)('getToken() completed but was canceled');
                }
            }).then(null, function (error) {
                self_1.log_('Failed to get token: ' + error);
                if (!canceled_1) {
                    if (_constants.CONSTANTS.NODE_ADMIN) {
                        // This may be a critical error for the Admin Node.js SDK, so log a warning.
                        // But getToken() may also just have temporarily failed, so we still want to
                        // continue retrying.
                        (0, _util.warn)(error);
                    }
                    closeFn_1();
                }
            });
        }
    };
    /**
     * @param {string} reason
     */
    PersistentConnection.prototype.interrupt = function (reason) {
        (0, _util.log)('Interrupting connection for reason: ' + reason);
        this.interruptReasons_[reason] = true;
        if (this.realtime_) {
            this.realtime_.close();
        } else {
            if (this.establishConnectionTimer_) {
                clearTimeout(this.establishConnectionTimer_);
                this.establishConnectionTimer_ = null;
            }
            if (this.connected_) {
                this.onRealtimeDisconnect_();
            }
        }
    };
    /**
     * @param {string} reason
     */
    PersistentConnection.prototype.resume = function (reason) {
        (0, _util.log)('Resuming connection for reason: ' + reason);
        delete this.interruptReasons_[reason];
        if ((0, _obj.isEmpty)(this.interruptReasons_)) {
            this.reconnectDelay_ = RECONNECT_MIN_DELAY;
            if (!this.realtime_) {
                this.scheduleConnect_(0);
            }
        }
    };
    PersistentConnection.prototype.handleTimestamp_ = function (timestamp) {
        var delta = timestamp - new Date().getTime();
        this.onServerInfoUpdate_({ serverTimeOffset: delta });
    };
    PersistentConnection.prototype.cancelSentTransactions_ = function () {
        for (var i = 0; i < this.outstandingPuts_.length; i++) {
            var put = this.outstandingPuts_[i];
            if (put && /*hash*/'h' in put.request && put.queued) {
                if (put.onComplete) put.onComplete('disconnect');
                delete this.outstandingPuts_[i];
                this.outstandingPutCount_--;
            }
        }
        // Clean up array occasionally.
        if (this.outstandingPutCount_ === 0) this.outstandingPuts_ = [];
    };
    /**
     * @param {!string} pathString
     * @param {Array.<*>=} query
     * @private
     */
    PersistentConnection.prototype.onListenRevoked_ = function (pathString, query) {
        // Remove the listen and manufacture a "permission_denied" error for the failed listen.
        var queryId;
        if (!query) {
            queryId = 'default';
        } else {
            queryId = query.map(function (q) {
                return (0, _util.ObjectToUniqueKey)(q);
            }).join('$');
        }
        var listen = this.removeListen_(pathString, queryId);
        if (listen && listen.onComplete) listen.onComplete('permission_denied');
    };
    /**
     * @param {!string} pathString
     * @param {!string} queryId
     * @return {{queries:Array.<Query>, onComplete:function(string)}}
     * @private
     */
    PersistentConnection.prototype.removeListen_ = function (pathString, queryId) {
        var normalizedPathString = new _Path.Path(pathString).toString(); // normalize path.
        var listen;
        if (this.listens_[normalizedPathString] !== undefined) {
            listen = this.listens_[normalizedPathString][queryId];
            delete this.listens_[normalizedPathString][queryId];
            if ((0, _obj.getCount)(this.listens_[normalizedPathString]) === 0) {
                delete this.listens_[normalizedPathString];
            }
        } else {
            // all listens for this path has already been removed
            listen = undefined;
        }
        return listen;
    };
    PersistentConnection.prototype.onAuthRevoked_ = function (statusCode, explanation) {
        (0, _util.log)('Auth token revoked: ' + statusCode + '/' + explanation);
        this.authToken_ = null;
        this.forceTokenRefresh_ = true;
        this.realtime_.close();
        if (statusCode === 'invalid_token' || statusCode === 'permission_denied') {
            // We'll wait a couple times before logging the warning / increasing the
            // retry period since oauth tokens will report as "invalid" if they're
            // just expired. Plus there may be transient issues that resolve themselves.
            this.invalidAuthTokenCount_++;
            if (this.invalidAuthTokenCount_ >= INVALID_AUTH_TOKEN_THRESHOLD) {
                // Set a long reconnect delay because recovery is unlikely
                this.reconnectDelay_ = RECONNECT_MAX_DELAY_FOR_ADMINS;
                // Notify the auth token provider that the token is invalid, which will log
                // a warning
                this.authTokenProvider_.notifyForInvalidToken();
            }
        }
    };
    PersistentConnection.prototype.onSecurityDebugPacket_ = function (body) {
        if (this.securityDebugCallback_) {
            this.securityDebugCallback_(body);
        } else {
            if ('msg' in body && typeof console !== 'undefined') {
                console.log('FIREBASE: ' + body['msg'].replace('\n', '\nFIREBASE: '));
            }
        }
    };
    PersistentConnection.prototype.restoreState_ = function () {
        var _this = this;
        //Re-authenticate ourselves if we have a credential stored.
        this.tryAuth();
        // Puts depend on having received the corresponding data update from the server before they complete, so we must
        // make sure to send listens before puts.
        (0, _obj.forEach)(this.listens_, function (pathString, queries) {
            (0, _obj.forEach)(queries, function (key, listenSpec) {
                _this.sendListen_(listenSpec);
            });
        });
        for (var i = 0; i < this.outstandingPuts_.length; i++) {
            if (this.outstandingPuts_[i]) this.sendPut_(i);
        }
        while (this.onDisconnectRequestQueue_.length) {
            var request = this.onDisconnectRequestQueue_.shift();
            this.sendOnDisconnect_(request.action, request.pathString, request.data, request.onComplete);
        }
    };
    /**
     * Sends client stats for first connection
     * @private
     */
    PersistentConnection.prototype.sendConnectStats_ = function () {
        var stats = {};
        var clientName = 'js';
        if (_constants.CONSTANTS.NODE_ADMIN) {
            clientName = 'admin_node';
        } else if (_constants.CONSTANTS.NODE_CLIENT) {
            clientName = 'node';
        }
        stats['sdk.' + clientName + '.' + _app2.default.SDK_VERSION.replace(/\./g, '-')] = 1;
        if ((0, _environment.isMobileCordova)()) {
            stats['framework.cordova'] = 1;
        } else if ((0, _environment.isReactNative)()) {
            stats['framework.reactnative'] = 1;
        }
        this.reportStats(stats);
    };
    /**
     * @return {boolean}
     * @private
     */
    PersistentConnection.prototype.shouldReconnect_ = function () {
        var online = _OnlineMonitor.OnlineMonitor.getInstance().currentlyOnline();
        return (0, _obj.isEmpty)(this.interruptReasons_) && online;
    };
    /**
     * @private
     */
    PersistentConnection.nextPersistentConnectionId_ = 0;
    /**
     * Counter for number of connections created. Mainly used for tagging in the logs
     * @type {number}
     * @private
     */
    PersistentConnection.nextConnectionId_ = 0;
    return PersistentConnection;
}(_ServerActions.ServerActions);
exports.PersistentConnection = PersistentConnection;
//# sourceMappingURL=PersistentConnection.js.map


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*! @license Firebase v4.5.0
Build: rev-f49c8b5
Terms: https://firebase.google.com/terms/ */



Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.RepoInfo = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /**
                                                                                                                                                                                                                                                                               * Copyright 2017 Google Inc.
                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                               * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                               * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                               * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                               *   http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                               * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                               * distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                               * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                               * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                               * limitations under the License.
                                                                                                                                                                                                                                                                               */


var _assert = __webpack_require__(2);

var _obj = __webpack_require__(4);

var _storage = __webpack_require__(38);

var _Constants = __webpack_require__(40);

/**
 * A class that holds metadata about a Repo object
 *
 * @constructor
 */
var RepoInfo = /** @class */function () {
    /**
     * @param {string} host Hostname portion of the url for the repo
     * @param {boolean} secure Whether or not this repo is accessed over ssl
     * @param {string} namespace The namespace represented by the repo
     * @param {boolean} webSocketOnly Whether to prefer websockets over all other transports (used by Nest).
     * @param {string=} persistenceKey Override the default session persistence storage key
     */
    function RepoInfo(host, secure, namespace, webSocketOnly, persistenceKey) {
        if (persistenceKey === void 0) {
            persistenceKey = '';
        }
        this.secure = secure;
        this.namespace = namespace;
        this.webSocketOnly = webSocketOnly;
        this.persistenceKey = persistenceKey;
        this.host = host.toLowerCase();
        this.domain = this.host.substr(this.host.indexOf('.') + 1);
        this.internalHost = _storage.PersistentStorage.get('host:' + host) || this.host;
    }
    RepoInfo.prototype.needsQueryParam = function () {
        return this.host !== this.internalHost;
    };
    RepoInfo.prototype.isCacheableHost = function () {
        return this.internalHost.substr(0, 2) === 's-';
    };
    RepoInfo.prototype.isDemoHost = function () {
        return this.domain === 'firebaseio-demo.com';
    };
    RepoInfo.prototype.isCustomHost = function () {
        return this.domain !== 'firebaseio.com' && this.domain !== 'firebaseio-demo.com';
    };
    RepoInfo.prototype.updateHost = function (newHost) {
        if (newHost !== this.internalHost) {
            this.internalHost = newHost;
            if (this.isCacheableHost()) {
                _storage.PersistentStorage.set('host:' + this.host, this.internalHost);
            }
        }
    };
    /**
     * Returns the websocket URL for this repo
     * @param {string} type of connection
     * @param {Object} params list
     * @return {string} The URL for this repo
     */
    RepoInfo.prototype.connectionURL = function (type, params) {
        (0, _assert.assert)(typeof type === 'string', 'typeof type must == string');
        (0, _assert.assert)((typeof params === 'undefined' ? 'undefined' : _typeof(params)) === 'object', 'typeof params must == object');
        var connURL;
        if (type === _Constants.WEBSOCKET) {
            connURL = (this.secure ? 'wss://' : 'ws://') + this.internalHost + '/.ws?';
        } else if (type === _Constants.LONG_POLLING) {
            connURL = (this.secure ? 'https://' : 'http://') + this.internalHost + '/.lp?';
        } else {
            throw new Error('Unknown connection type: ' + type);
        }
        if (this.needsQueryParam()) {
            params['ns'] = this.namespace;
        }
        var pairs = [];
        (0, _obj.forEach)(params, function (key, value) {
            pairs.push(key + '=' + value);
        });
        return connURL + pairs.join('&');
    };
    /** @return {string} */
    RepoInfo.prototype.toString = function () {
        var str = this.toURLString();
        if (this.persistenceKey) {
            str += '<' + this.persistenceKey + '>';
        }
        return str;
    };
    /** @return {string} */
    RepoInfo.prototype.toURLString = function () {
        return (this.secure ? 'https://' : 'http://') + this.host;
    };
    return RepoInfo;
}();
exports.RepoInfo = RepoInfo;
//# sourceMappingURL=RepoInfo.js.map


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*! @license Firebase v4.5.0
Build: rev-f49c8b5
Terms: https://firebase.google.com/terms/ */



Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Interface defining the set of actions that can be performed against the Firebase server
 * (basically corresponds to our wire protocol).
 *
 * @interface
 */
var ServerActions = /** @class */function () {
  function ServerActions() {}
  /**
   * @param {string} pathString
   * @param {*} data
   * @param {function(string, string)=} onComplete
   * @param {string=} hash
   */
  ServerActions.prototype.put = function (pathString, data, onComplete, hash) {};
  /**
   * @param {string} pathString
   * @param {*} data
   * @param {function(string, ?string)} onComplete
   * @param {string=} hash
   */
  ServerActions.prototype.merge = function (pathString, data, onComplete, hash) {};
  /**
   * Refreshes the auth token for the current connection.
   * @param {string} token The authentication token
   */
  ServerActions.prototype.refreshAuthToken = function (token) {};
  /**
   * @param {string} pathString
   * @param {*} data
   * @param {function(string, string)=} onComplete
   */
  ServerActions.prototype.onDisconnectPut = function (pathString, data, onComplete) {};
  /**
   * @param {string} pathString
   * @param {*} data
   * @param {function(string, string)=} onComplete
   */
  ServerActions.prototype.onDisconnectMerge = function (pathString, data, onComplete) {};
  /**
   * @param {string} pathString
   * @param {function(string, string)=} onComplete
   */
  ServerActions.prototype.onDisconnectCancel = function (pathString, onComplete) {};
  /**
   * @param {Object.<string, *>} stats
   */
  ServerActions.prototype.reportStats = function (stats) {};
  return ServerActions;
}();
exports.ServerActions = ServerActions;
//# sourceMappingURL=ServerActions.js.map


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*! @license Firebase v4.5.0
Build: rev-f49c8b5
Terms: https://firebase.google.com/terms/ */



Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SparseSnapshotTree = undefined;

var _Path = __webpack_require__(5);

var _PriorityIndex = __webpack_require__(7);

var _CountedSet = __webpack_require__(69);

/**
 * Helper class to store a sparse set of snapshots.
 *
 * @constructor
 */
var SparseSnapshotTree = /** @class */function () {
    function SparseSnapshotTree() {
        /**
         * @private
         * @type {Node}
         */
        this.value_ = null;
        /**
         * @private
         * @type {CountedSet}
         */
        this.children_ = null;
    }
    /**
     * Gets the node stored at the given path if one exists.
     *
     * @param {!Path} path Path to look up snapshot for.
     * @return {?Node} The retrieved node, or null.
     */
    SparseSnapshotTree.prototype.find = function (path) {
        if (this.value_ != null) {
            return this.value_.getChild(path);
        } else if (!path.isEmpty() && this.children_ != null) {
            var childKey = path.getFront();
            path = path.popFront();
            if (this.children_.contains(childKey)) {
                var childTree = this.children_.get(childKey);
                return childTree.find(path);
            } else {
                return null;
            }
        } else {
            return null;
        }
    };
    /**
     * Stores the given node at the specified path. If there is already a node
     * at a shallower path, it merges the new data into that snapshot node.
     *
     * @param {!Path} path Path to look up snapshot for.
     * @param {!Node} data The new data, or null.
     */
    SparseSnapshotTree.prototype.remember = function (path, data) {
        if (path.isEmpty()) {
            this.value_ = data;
            this.children_ = null;
        } else if (this.value_ !== null) {
            this.value_ = this.value_.updateChild(path, data);
        } else {
            if (this.children_ == null) {
                this.children_ = new _CountedSet.CountedSet();
            }
            var childKey = path.getFront();
            if (!this.children_.contains(childKey)) {
                this.children_.add(childKey, new SparseSnapshotTree());
            }
            var child = this.children_.get(childKey);
            path = path.popFront();
            child.remember(path, data);
        }
    };
    /**
     * Purge the data at path from the cache.
     *
     * @param {!Path} path Path to look up snapshot for.
     * @return {boolean} True if this node should now be removed.
     */
    SparseSnapshotTree.prototype.forget = function (path) {
        if (path.isEmpty()) {
            this.value_ = null;
            this.children_ = null;
            return true;
        } else {
            if (this.value_ !== null) {
                if (this.value_.isLeafNode()) {
                    // We're trying to forget a node that doesn't exist
                    return false;
                } else {
                    var value = this.value_;
                    this.value_ = null;
                    var self_1 = this;
                    value.forEachChild(_PriorityIndex.PRIORITY_INDEX, function (key, tree) {
                        self_1.remember(new _Path.Path(key), tree);
                    });
                    return this.forget(path);
                }
            } else if (this.children_ !== null) {
                var childKey = path.getFront();
                path = path.popFront();
                if (this.children_.contains(childKey)) {
                    var safeToRemove = this.children_.get(childKey).forget(path);
                    if (safeToRemove) {
                        this.children_.remove(childKey);
                    }
                }
                if (this.children_.isEmpty()) {
                    this.children_ = null;
                    return true;
                } else {
                    return false;
                }
            } else {
                return true;
            }
        }
    };
    /**
     * Recursively iterates through all of the stored tree and calls the
     * callback on each one.
     *
     * @param {!Path} prefixPath Path to look up node for.
     * @param {!Function} func The function to invoke for each tree.
     */
    SparseSnapshotTree.prototype.forEachTree = function (prefixPath, func) {
        if (this.value_ !== null) {
            func(prefixPath, this.value_);
        } else {
            this.forEachChild(function (key, tree) {
                var path = new _Path.Path(prefixPath.toString() + '/' + key);
                tree.forEachTree(path, func);
            });
        }
    };
    /**
     * Iterates through each immediate child and triggers the callback.
     *
     * @param {!Function} func The function to invoke for each child.
     */
    SparseSnapshotTree.prototype.forEachChild = function (func) {
        if (this.children_ !== null) {
            this.children_.each(function (key, tree) {
                func(key, tree);
            });
        }
    };
    return SparseSnapshotTree;
}(); /**
      * Copyright 2017 Google Inc.
      *
      * Licensed under the Apache License, Version 2.0 (the "License");
      * you may not use this file except in compliance with the License.
      * You may obtain a copy of the License at
      *
      *   http://www.apache.org/licenses/LICENSE-2.0
      *
      * Unless required by applicable law or agreed to in writing, software
      * distributed under the License is distributed on an "AS IS" BASIS,
      * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
      * See the License for the specific language governing permissions and
      * limitations under the License.
      */
exports.SparseSnapshotTree = SparseSnapshotTree;
//# sourceMappingURL=SparseSnapshotTree.js.map


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*! @license Firebase v4.5.0
Build: rev-f49c8b5
Terms: https://firebase.google.com/terms/ */



Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SyncPoint = undefined;

var _CacheNode = __webpack_require__(39);

var _ChildrenNode = __webpack_require__(8);

var _assert = __webpack_require__(2);

var _obj = __webpack_require__(4);

var _ViewCache = __webpack_require__(73);

var _View = __webpack_require__(116);

/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var __referenceConstructor;
/**
 * SyncPoint represents a single location in a SyncTree with 1 or more event registrations, meaning we need to
 * maintain 1 or more Views at this location to cache server data and raise appropriate events for server changes
 * and user writes (set, transaction, update).
 *
 * It's responsible for:
 *  - Maintaining the set of 1 or more views necessary at this location (a SyncPoint with 0 views should be removed).
 *  - Proxying user / server operations to the views as appropriate (i.e. applyServerOverwrite,
 *    applyUserOverwrite, etc.)
 */
var SyncPoint = /** @class */function () {
    function SyncPoint() {
        /**
         * The Views being tracked at this location in the tree, stored as a map where the key is a
         * queryId and the value is the View for that query.
         *
         * NOTE: This list will be quite small (usually 1, but perhaps 2 or 3; any more is an odd use case).
         *
         * @type {!Object.<!string, !View>}
         * @private
         */
        this.views_ = {};
    }
    Object.defineProperty(SyncPoint, "__referenceConstructor", {
        get: function get() {
            (0, _assert.assert)(__referenceConstructor, 'Reference.ts has not been loaded');
            return __referenceConstructor;
        },
        set: function set(val) {
            (0, _assert.assert)(!__referenceConstructor, '__referenceConstructor has already been defined');
            __referenceConstructor = val;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {boolean}
     */
    SyncPoint.prototype.isEmpty = function () {
        return (0, _obj.isEmpty)(this.views_);
    };
    /**
     *
     * @param {!Operation} operation
     * @param {!WriteTreeRef} writesCache
     * @param {?Node} optCompleteServerCache
     * @return {!Array.<!Event>}
     */
    SyncPoint.prototype.applyOperation = function (operation, writesCache, optCompleteServerCache) {
        var queryId = operation.source.queryId;
        if (queryId !== null) {
            var view = (0, _obj.safeGet)(this.views_, queryId);
            (0, _assert.assert)(view != null, 'SyncTree gave us an op for an invalid query.');
            return view.applyOperation(operation, writesCache, optCompleteServerCache);
        } else {
            var events_1 = [];
            (0, _obj.forEach)(this.views_, function (key, view) {
                events_1 = events_1.concat(view.applyOperation(operation, writesCache, optCompleteServerCache));
            });
            return events_1;
        }
    };
    /**
     * Add an event callback for the specified query.
     *
     * @param {!Query} query
     * @param {!EventRegistration} eventRegistration
     * @param {!WriteTreeRef} writesCache
     * @param {?Node} serverCache Complete server cache, if we have it.
     * @param {boolean} serverCacheComplete
     * @return {!Array.<!Event>} Events to raise.
     */
    SyncPoint.prototype.addEventRegistration = function (query, eventRegistration, writesCache, serverCache, serverCacheComplete) {
        var queryId = query.queryIdentifier();
        var view = (0, _obj.safeGet)(this.views_, queryId);
        if (!view) {
            // TODO: make writesCache take flag for complete server node
            var eventCache = writesCache.calcCompleteEventCache(serverCacheComplete ? serverCache : null);
            var eventCacheComplete = false;
            if (eventCache) {
                eventCacheComplete = true;
            } else if (serverCache instanceof _ChildrenNode.ChildrenNode) {
                eventCache = writesCache.calcCompleteEventChildren(serverCache);
                eventCacheComplete = false;
            } else {
                eventCache = _ChildrenNode.ChildrenNode.EMPTY_NODE;
                eventCacheComplete = false;
            }
            var viewCache = new _ViewCache.ViewCache(new _CacheNode.CacheNode /** @type {!Node} */ /** @type {!Node} */(eventCache, eventCacheComplete, false), new _CacheNode.CacheNode(serverCache, serverCacheComplete, false));
            view = new _View.View(query, viewCache);
            this.views_[queryId] = view;
        }
        // This is guaranteed to exist now, we just created anything that was missing
        view.addEventRegistration(eventRegistration);
        return view.getInitialEvents(eventRegistration);
    };
    /**
     * Remove event callback(s).  Return cancelEvents if a cancelError is specified.
     *
     * If query is the default query, we'll check all views for the specified eventRegistration.
     * If eventRegistration is null, we'll remove all callbacks for the specified view(s).
     *
     * @param {!Query} query
     * @param {?EventRegistration} eventRegistration If null, remove all callbacks.
     * @param {Error=} cancelError If a cancelError is provided, appropriate cancel events will be returned.
     * @return {{removed:!Array.<!Query>, events:!Array.<!Event>}} removed queries and any cancel events
     */
    SyncPoint.prototype.removeEventRegistration = function (query, eventRegistration, cancelError) {
        var queryId = query.queryIdentifier();
        var removed = [];
        var cancelEvents = [];
        var hadCompleteView = this.hasCompleteView();
        if (queryId === 'default') {
            // When you do ref.off(...), we search all views for the registration to remove.
            var self_1 = this;
            (0, _obj.forEach)(this.views_, function (viewQueryId, view) {
                cancelEvents = cancelEvents.concat(view.removeEventRegistration(eventRegistration, cancelError));
                if (view.isEmpty()) {
                    delete self_1.views_[viewQueryId];
                    // We'll deal with complete views later.
                    if (!view.getQuery().getQueryParams().loadsAllData()) {
                        removed.push(view.getQuery());
                    }
                }
            });
        } else {
            // remove the callback from the specific view.
            var view = (0, _obj.safeGet)(this.views_, queryId);
            if (view) {
                cancelEvents = cancelEvents.concat(view.removeEventRegistration(eventRegistration, cancelError));
                if (view.isEmpty()) {
                    delete this.views_[queryId];
                    // We'll deal with complete views later.
                    if (!view.getQuery().getQueryParams().loadsAllData()) {
                        removed.push(view.getQuery());
                    }
                }
            }
        }
        if (hadCompleteView && !this.hasCompleteView()) {
            // We removed our last complete view.
            removed.push(new SyncPoint.__referenceConstructor(query.repo, query.path));
        }
        return { removed: removed, events: cancelEvents };
    };
    /**
     * @return {!Array.<!View>}
     */
    SyncPoint.prototype.getQueryViews = function () {
        var _this = this;
        var values = Object.keys(this.views_).map(function (key) {
            return _this.views_[key];
        });
        return values.filter(function (view) {
            return !view.getQuery().getQueryParams().loadsAllData();
        });
    };
    /**
     *
     * @param {!Path} path The path to the desired complete snapshot
     * @return {?Node} A complete cache, if it exists
     */
    SyncPoint.prototype.getCompleteServerCache = function (path) {
        var serverCache = null;
        (0, _obj.forEach)(this.views_, function (key, view) {
            serverCache = serverCache || view.getCompleteServerCache(path);
        });
        return serverCache;
    };
    /**
     * @param {!Query} query
     * @return {?View}
     */
    SyncPoint.prototype.viewForQuery = function (query) {
        var params = query.getQueryParams();
        if (params.loadsAllData()) {
            return this.getCompleteView();
        } else {
            var queryId = query.queryIdentifier();
            return (0, _obj.safeGet)(this.views_, queryId);
        }
    };
    /**
     * @param {!Query} query
     * @return {boolean}
     */
    SyncPoint.prototype.viewExistsForQuery = function (query) {
        return this.viewForQuery(query) != null;
    };
    /**
     * @return {boolean}
     */
    SyncPoint.prototype.hasCompleteView = function () {
        return this.getCompleteView() != null;
    };
    /**
     * @return {?View}
     */
    SyncPoint.prototype.getCompleteView = function () {
        var completeView = (0, _obj.findValue)(this.views_, function (view) {
            return view.getQuery().getQueryParams().loadsAllData();
        });
        return completeView || null;
    };
    return SyncPoint;
}();
exports.SyncPoint = SyncPoint;
//# sourceMappingURL=SyncPoint.js.map


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*! @license Firebase v4.5.0
Build: rev-f49c8b5
Terms: https://firebase.google.com/terms/ */



Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Overwrite = undefined;

var _Operation = __webpack_require__(15);

var _Path = __webpack_require__(5);

/**
 * @param {!OperationSource} source
 * @param {!Path} path
 * @param {!Node} snap
 * @constructor
 * @implements {Operation}
 */
/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Overwrite = /** @class */function () {
    function Overwrite(source, path, snap) {
        this.source = source;
        this.path = path;
        this.snap = snap;
        /** @inheritDoc */
        this.type = _Operation.OperationType.OVERWRITE;
    }
    Overwrite.prototype.operationForChild = function (childName) {
        if (this.path.isEmpty()) {
            return new Overwrite(this.source, _Path.Path.Empty, this.snap.getImmediateChild(childName));
        } else {
            return new Overwrite(this.source, this.path.popFront(), this.snap);
        }
    };
    return Overwrite;
}();
exports.Overwrite = Overwrite;
//# sourceMappingURL=Overwrite.js.map


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*! @license Firebase v4.5.0
Build: rev-f49c8b5
Terms: https://firebase.google.com/terms/ */



Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.IndexMap = undefined;

var _assert = __webpack_require__(2);

var _childSet = __webpack_require__(63);

var _obj = __webpack_require__(4);

var _Node = __webpack_require__(10);

var _PriorityIndex = __webpack_require__(7);

var _KeyIndex = __webpack_require__(33);

/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var _defaultIndexMap;
var fallbackObject = {};
/**
 *
 * @param {Object.<string, FallbackType|SortedMap.<NamedNode, Node>>} indexes
 * @param {Object.<string, Index>} indexSet
 * @constructor
 */
var IndexMap = /** @class */function () {
    function IndexMap(indexes_, indexSet_) {
        this.indexes_ = indexes_;
        this.indexSet_ = indexSet_;
    }
    Object.defineProperty(IndexMap, "Default", {
        /**
         * The default IndexMap for nodes without a priority
         * @type {!IndexMap}
         * @const
         */
        get: function get() {
            (0, _assert.assert)(fallbackObject && _PriorityIndex.PRIORITY_INDEX, 'ChildrenNode.ts has not been loaded');
            _defaultIndexMap = _defaultIndexMap || new IndexMap({ '.priority': fallbackObject }, { '.priority': _PriorityIndex.PRIORITY_INDEX });
            return _defaultIndexMap;
        },
        enumerable: true,
        configurable: true
    });
    /**
     *
     * @param {!string} indexKey
     * @return {?SortedMap.<NamedNode, Node>}
     */
    IndexMap.prototype.get = function (indexKey) {
        var sortedMap = (0, _obj.safeGet)(this.indexes_, indexKey);
        if (!sortedMap) throw new Error('No index defined for ' + indexKey);
        if (sortedMap === fallbackObject) {
            // The index exists, but it falls back to just name comparison. Return null so that the calling code uses the
            // regular child map
            return null;
        } else {
            return sortedMap;
        }
    };
    /**
     * @param {!Index} indexDefinition
     * @return {boolean}
     */
    IndexMap.prototype.hasIndex = function (indexDefinition) {
        return (0, _obj.contains)(this.indexSet_, indexDefinition.toString());
    };
    /**
     * @param {!Index} indexDefinition
     * @param {!SortedMap.<string, !Node>} existingChildren
     * @return {!IndexMap}
     */
    IndexMap.prototype.addIndex = function (indexDefinition, existingChildren) {
        (0, _assert.assert)(indexDefinition !== _KeyIndex.KEY_INDEX, "KeyIndex always exists and isn't meant to be added to the IndexMap.");
        var childList = [];
        var sawIndexedValue = false;
        var iter = existingChildren.getIterator(_Node.NamedNode.Wrap);
        var next = iter.getNext();
        while (next) {
            sawIndexedValue = sawIndexedValue || indexDefinition.isDefinedOn(next.node);
            childList.push(next);
            next = iter.getNext();
        }
        var newIndex;
        if (sawIndexedValue) {
            newIndex = (0, _childSet.buildChildSet)(childList, indexDefinition.getCompare());
        } else {
            newIndex = fallbackObject;
        }
        var indexName = indexDefinition.toString();
        var newIndexSet = (0, _obj.clone)(this.indexSet_);
        newIndexSet[indexName] = indexDefinition;
        var newIndexes = (0, _obj.clone)(this.indexes_);
        newIndexes[indexName] = newIndex;
        return new IndexMap(newIndexes, newIndexSet);
    };
    /**
     * Ensure that this node is properly tracked in any indexes that we're maintaining
     * @param {!NamedNode} namedNode
     * @param {!SortedMap.<string, !Node>} existingChildren
     * @return {!IndexMap}
     */
    IndexMap.prototype.addToIndexes = function (namedNode, existingChildren) {
        var _this = this;
        var newIndexes = (0, _obj.map)(this.indexes_, function (indexedChildren, indexName) {
            var index = (0, _obj.safeGet)(_this.indexSet_, indexName);
            (0, _assert.assert)(index, 'Missing index implementation for ' + indexName);
            if (indexedChildren === fallbackObject) {
                // Check to see if we need to index everything
                if (index.isDefinedOn(namedNode.node)) {
                    // We need to build this index
                    var childList = [];
                    var iter = existingChildren.getIterator(_Node.NamedNode.Wrap);
                    var next = iter.getNext();
                    while (next) {
                        if (next.name != namedNode.name) {
                            childList.push(next);
                        }
                        next = iter.getNext();
                    }
                    childList.push(namedNode);
                    return (0, _childSet.buildChildSet)(childList, index.getCompare());
                } else {
                    // No change, this remains a fallback
                    return fallbackObject;
                }
            } else {
                var existingSnap = existingChildren.get(namedNode.name);
                var newChildren = indexedChildren;
                if (existingSnap) {
                    newChildren = newChildren.remove(new _Node.NamedNode(namedNode.name, existingSnap));
                }
                return newChildren.insert(namedNode, namedNode.node);
            }
        });
        return new IndexMap(newIndexes, this.indexSet_);
    };
    /**
     * Create a new IndexMap instance with the given value removed
     * @param {!NamedNode} namedNode
     * @param {!SortedMap.<string, !Node>} existingChildren
     * @return {!IndexMap}
     */
    IndexMap.prototype.removeFromIndexes = function (namedNode, existingChildren) {
        var newIndexes = (0, _obj.map)(this.indexes_, function (indexedChildren) {
            if (indexedChildren === fallbackObject) {
                // This is the fallback. Just return it, nothing to do in this case
                return indexedChildren;
            } else {
                var existingSnap = existingChildren.get(namedNode.name);
                if (existingSnap) {
                    return indexedChildren.remove(new _Node.NamedNode(namedNode.name, existingSnap));
                } else {
                    // No record of this child
                    return indexedChildren;
                }
            }
        });
        return new IndexMap(newIndexes, this.indexSet_);
    };
    return IndexMap;
}();
exports.IndexMap = IndexMap;
//# sourceMappingURL=IndexMap.js.map


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*! @license Firebase v4.5.0
Build: rev-f49c8b5
Terms: https://firebase.google.com/terms/ */



Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.buildChildSet = undefined;

var _SortedMap = __webpack_require__(47);

/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var LOG_2 = Math.log(2);
/**
 * @constructor
 */
var Base12Num = /** @class */function () {
    /**
     * @param {number} length
     */
    function Base12Num(length) {
        var logBase2 = function logBase2(num) {
            return parseInt(Math.log(num) / LOG_2, 10);
        };
        var bitMask = function bitMask(bits) {
            return parseInt(Array(bits + 1).join('1'), 2);
        };
        this.count = logBase2(length + 1);
        this.current_ = this.count - 1;
        var mask = bitMask(this.count);
        this.bits_ = length + 1 & mask;
    }
    /**
     * @return {boolean}
     */
    Base12Num.prototype.nextBitIsOne = function () {
        //noinspection JSBitwiseOperatorUsage
        var result = !(this.bits_ & 0x1 << this.current_);
        this.current_--;
        return result;
    };
    return Base12Num;
}();
/**
 * Takes a list of child nodes and constructs a SortedSet using the given comparison
 * function
 *
 * Uses the algorithm described in the paper linked here:
 * http://citeseerx.ist.psu.edu/viewdoc/summary?doi=10.1.1.46.1458
 *
 * @template K, V
 * @param {Array.<!NamedNode>} childList Unsorted list of children
 * @param {function(!NamedNode, !NamedNode):number} cmp The comparison method to be used
 * @param {(function(NamedNode):K)=} keyFn An optional function to extract K from a node wrapper, if K's
 *                                                        type is not NamedNode
 * @param {(function(K, K):number)=} mapSortFn An optional override for comparator used by the generated sorted map
 * @return {SortedMap.<K, V>}
 */
var buildChildSet = exports.buildChildSet = function buildChildSet(childList, cmp, keyFn, mapSortFn) {
    childList.sort(cmp);
    var buildBalancedTree = function buildBalancedTree(low, high) {
        var length = high - low;
        var namedNode;
        var key;
        if (length == 0) {
            return null;
        } else if (length == 1) {
            namedNode = childList[low];
            key = keyFn ? keyFn(namedNode) : namedNode;
            return new _SortedMap.LLRBNode(key, namedNode.node, _SortedMap.LLRBNode.BLACK, null, null);
        } else {
            var middle = parseInt(length / 2, 10) + low;
            var left = buildBalancedTree(low, middle);
            var right = buildBalancedTree(middle + 1, high);
            namedNode = childList[middle];
            key = keyFn ? keyFn(namedNode) : namedNode;
            return new _SortedMap.LLRBNode(key, namedNode.node, _SortedMap.LLRBNode.BLACK, left, right);
        }
    };
    var buildFrom12Array = function buildFrom12Array(base12) {
        var node = null;
        var root = null;
        var index = childList.length;
        var buildPennant = function buildPennant(chunkSize, color) {
            var low = index - chunkSize;
            var high = index;
            index -= chunkSize;
            var childTree = buildBalancedTree(low + 1, high);
            var namedNode = childList[low];
            var key = keyFn ? keyFn(namedNode) : namedNode;
            attachPennant(new _SortedMap.LLRBNode(key, namedNode.node, color, null, childTree));
        };
        var attachPennant = function attachPennant(pennant) {
            if (node) {
                node.left = pennant;
                node = pennant;
            } else {
                root = pennant;
                node = pennant;
            }
        };
        for (var i = 0; i < base12.count; ++i) {
            var isOne = base12.nextBitIsOne();
            // The number of nodes taken in each slice is 2^(arr.length - (i + 1))
            var chunkSize = Math.pow(2, base12.count - (i + 1));
            if (isOne) {
                buildPennant(chunkSize, _SortedMap.LLRBNode.BLACK);
            } else {
                // current == 2
                buildPennant(chunkSize, _SortedMap.LLRBNode.BLACK);
                buildPennant(chunkSize, _SortedMap.LLRBNode.RED);
            }
        }
        return root;
    };
    var base12 = new Base12Num(childList.length);
    var root = buildFrom12Array(base12);
    return new _SortedMap.SortedMap(mapSortFn || cmp, root);
};
//# sourceMappingURL=childSet.js.map


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*! @license Firebase v4.5.0
Build: rev-f49c8b5
Terms: https://firebase.google.com/terms/ */



Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NAME_ONLY_COMPARATOR = NAME_ONLY_COMPARATOR;
exports.NAME_COMPARATOR = NAME_COMPARATOR;

var _util = __webpack_require__(3);

function NAME_ONLY_COMPARATOR(left, right) {
    return (0, _util.nameCompare)(left.name, right.name);
} /**
   * Copyright 2017 Google Inc.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
function NAME_COMPARATOR(left, right) {
    return (0, _util.nameCompare)(left, right);
}
//# sourceMappingURL=comparators.js.map


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*! @license Firebase v4.5.0
Build: rev-f49c8b5
Terms: https://firebase.google.com/terms/ */



Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PathIndex = undefined;

var _assert = __webpack_require__(2);

var _util = __webpack_require__(3);

var _Index = __webpack_require__(37);

var _ChildrenNode = __webpack_require__(8);

var _Node = __webpack_require__(10);

var _nodeFromJSON = __webpack_require__(34);

/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var __extends = undefined && undefined.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();

/**
 * @param {!Path} indexPath
 * @constructor
 * @extends {Index}
 */
var PathIndex = /** @class */function (_super) {
    __extends(PathIndex, _super);
    function PathIndex(indexPath_) {
        var _this = _super.call(this) || this;
        _this.indexPath_ = indexPath_;
        (0, _assert.assert)(!indexPath_.isEmpty() && indexPath_.getFront() !== '.priority', "Can't create PathIndex with empty path or .priority key");
        return _this;
    }
    /**
     * @param {!Node} snap
     * @return {!Node}
     * @protected
     */
    PathIndex.prototype.extractChild = function (snap) {
        return snap.getChild(this.indexPath_);
    };
    /**
     * @inheritDoc
     */
    PathIndex.prototype.isDefinedOn = function (node) {
        return !node.getChild(this.indexPath_).isEmpty();
    };
    /**
     * @inheritDoc
     */
    PathIndex.prototype.compare = function (a, b) {
        var aChild = this.extractChild(a.node);
        var bChild = this.extractChild(b.node);
        var indexCmp = aChild.compareTo(bChild);
        if (indexCmp === 0) {
            return (0, _util.nameCompare)(a.name, b.name);
        } else {
            return indexCmp;
        }
    };
    /**
     * @inheritDoc
     */
    PathIndex.prototype.makePost = function (indexValue, name) {
        var valueNode = (0, _nodeFromJSON.nodeFromJSON)(indexValue);
        var node = _ChildrenNode.ChildrenNode.EMPTY_NODE.updateChild(this.indexPath_, valueNode);
        return new _Node.NamedNode(name, node);
    };
    /**
     * @inheritDoc
     */
    PathIndex.prototype.maxPost = function () {
        var node = _ChildrenNode.ChildrenNode.EMPTY_NODE.updateChild(this.indexPath_, _ChildrenNode.MAX_NODE);
        return new _Node.NamedNode(_util.MAX_NAME, node);
    };
    /**
     * @inheritDoc
     */
    PathIndex.prototype.toString = function () {
        return this.indexPath_.slice().join('/');
    };
    return PathIndex;
}(_Index.Index);
exports.PathIndex = PathIndex;
//# sourceMappingURL=PathIndex.js.map


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*! @license Firebase v4.5.0
Build: rev-f49c8b5
Terms: https://firebase.google.com/terms/ */



Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.VALUE_INDEX = exports.ValueIndex = undefined;

var _Index = __webpack_require__(37);

var _Node = __webpack_require__(10);

var _util = __webpack_require__(3);

var _nodeFromJSON = __webpack_require__(34);

/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var __extends = undefined && undefined.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();

/**
 * @constructor
 * @extends {Index}
 * @private
 */
var ValueIndex = /** @class */function (_super) {
    __extends(ValueIndex, _super);
    function ValueIndex() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @inheritDoc
     */
    ValueIndex.prototype.compare = function (a, b) {
        var indexCmp = a.node.compareTo(b.node);
        if (indexCmp === 0) {
            return (0, _util.nameCompare)(a.name, b.name);
        } else {
            return indexCmp;
        }
    };
    /**
     * @inheritDoc
     */
    ValueIndex.prototype.isDefinedOn = function (node) {
        return true;
    };
    /**
     * @inheritDoc
     */
    ValueIndex.prototype.indexedValueChanged = function (oldNode, newNode) {
        return !oldNode.equals(newNode);
    };
    /**
     * @inheritDoc
     */
    ValueIndex.prototype.minPost = function () {
        return _Node.NamedNode.MIN;
    };
    /**
     * @inheritDoc
     */
    ValueIndex.prototype.maxPost = function () {
        return _Node.NamedNode.MAX;
    };
    /**
     * @param {*} indexValue
     * @param {string} name
     * @return {!NamedNode}
     */
    ValueIndex.prototype.makePost = function (indexValue, name) {
        var valueNode = (0, _nodeFromJSON.nodeFromJSON)(indexValue);
        return new _Node.NamedNode(name, valueNode);
    };
    /**
     * @return {!string} String representation for inclusion in a query spec
     */
    ValueIndex.prototype.toString = function () {
        return '.value';
    };
    return ValueIndex;
}(_Index.Index);
exports.ValueIndex = ValueIndex;
var VALUE_INDEX = exports.VALUE_INDEX = new ValueIndex();
//# sourceMappingURL=ValueIndex.js.map


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*! @license Firebase v4.5.0
Build: rev-f49c8b5
Terms: https://firebase.google.com/terms/ */



Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.validatePriorityNode = exports.priorityHashText = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /**
                                                                                                                                                                                                                                                                               * Copyright 2017 Google Inc.
                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                               * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                               * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                               * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                               *   http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                               * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                               * distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                               * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                               * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                               * limitations under the License.
                                                                                                                                                                                                                                                                               */


exports.setMaxNode = setMaxNode;

var _assert = __webpack_require__(2);

var _util = __webpack_require__(3);

var _obj = __webpack_require__(4);

var MAX_NODE;
function setMaxNode(val) {
    MAX_NODE = val;
}
/**
 * @param {(!string|!number)} priority
 * @return {!string}
 */
var priorityHashText = exports.priorityHashText = function priorityHashText(priority) {
    if (typeof priority === 'number') return 'number:' + (0, _util.doubleToIEEE754String)(priority);else return 'string:' + priority;
};
/**
 * Validates that a priority snapshot Node is valid.
 *
 * @param {!Node} priorityNode
 */
var validatePriorityNode = exports.validatePriorityNode = function validatePriorityNode(priorityNode) {
    if (priorityNode.isLeafNode()) {
        var val = priorityNode.val();
        (0, _assert.assert)(typeof val === 'string' || typeof val === 'number' || (typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object' && (0, _obj.contains)(val, '.sv'), 'Priority must be a string or number.');
    } else {
        (0, _assert.assert)(priorityNode === MAX_NODE || priorityNode.isEmpty(), 'priority of unexpected type.');
    }
    // Don't call getPriority() on MAX_NODE to avoid hitting assertion.
    (0, _assert.assert)(priorityNode === MAX_NODE || priorityNode.getPriority().isEmpty(), "Priority nodes can't have a priority of their own.");
};
//# sourceMappingURL=snap.js.map


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*! @license Firebase v4.5.0
Build: rev-f49c8b5
Terms: https://firebase.google.com/terms/ */



Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.StatsListener = undefined;

var _obj = __webpack_require__(4);

/**
 * Returns the delta from the previous call to get stats.
 *
 * @param collection_ The collection to "listen" to.
 * @constructor
 */
var StatsListener = /** @class */function () {
    function StatsListener(collection_) {
        this.collection_ = collection_;
        this.last_ = null;
    }
    StatsListener.prototype.get = function () {
        var newStats = this.collection_.get();
        var delta = (0, _obj.clone)(newStats);
        if (this.last_) {
            (0, _obj.forEach)(this.last_, function (stat, value) {
                delta[stat] = delta[stat] - value;
            });
        }
        this.last_ = newStats;
        return delta;
    };
    return StatsListener;
}(); /**
      * Copyright 2017 Google Inc.
      *
      * Licensed under the Apache License, Version 2.0 (the "License");
      * you may not use this file except in compliance with the License.
      * You may obtain a copy of the License at
      *
      *   http://www.apache.org/licenses/LICENSE-2.0
      *
      * Unless required by applicable law or agreed to in writing, software
      * distributed under the License is distributed on an "AS IS" BASIS,
      * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
      * See the License for the specific language governing permissions and
      * limitations under the License.
      */
exports.StatsListener = StatsListener;
//# sourceMappingURL=StatsListener.js.map


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*! @license Firebase v4.5.0
Build: rev-f49c8b5
Terms: https://firebase.google.com/terms/ */



Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CountedSet = undefined;

var _obj = __webpack_require__(4);

/**
 * Implements a set with a count of elements.
 *
 * @template K, V
 */
var CountedSet = /** @class */function () {
    function CountedSet() {
        this.set = {};
    }
    /**
     * @param {!K} item
     * @param {V} val
     */
    CountedSet.prototype.add = function (item, val) {
        this.set[item] = val !== null ? val : true;
    };
    /**
     * @param {!K} key
     * @return {boolean}
     */
    CountedSet.prototype.contains = function (key) {
        return (0, _obj.contains)(this.set, key);
    };
    /**
     * @param {!K} item
     * @return {V}
     */
    CountedSet.prototype.get = function (item) {
        return this.contains(item) ? this.set[item] : undefined;
    };
    /**
     * @param {!K} item
     */
    CountedSet.prototype.remove = function (item) {
        delete this.set[item];
    };
    /**
     * Deletes everything in the set
     */
    CountedSet.prototype.clear = function () {
        this.set = {};
    };
    /**
     * True if there's nothing in the set
     * @return {boolean}
     */
    CountedSet.prototype.isEmpty = function () {
        return (0, _obj.isEmpty)(this.set);
    };
    /**
     * @return {number} The number of items in the set
     */
    CountedSet.prototype.count = function () {
        return (0, _obj.getCount)(this.set);
    };
    /**
     * Run a function on each k,v pair in the set
     * @param {function(K, V)} fn
     */
    CountedSet.prototype.each = function (fn) {
        (0, _obj.forEach)(this.set, function (k, v) {
            return fn(k, v);
        });
    };
    /**
     * Mostly for debugging
     * @return {Array.<K>} The keys present in this CountedSet
     */
    CountedSet.prototype.keys = function () {
        var keys = [];
        (0, _obj.forEach)(this.set, function (k) {
            keys.push(k);
        });
        return keys;
    };
    return CountedSet;
}(); /**
      * Copyright 2017 Google Inc.
      *
      * Licensed under the Apache License, Version 2.0 (the "License");
      * you may not use this file except in compliance with the License.
      * You may obtain a copy of the License at
      *
      *   http://www.apache.org/licenses/LICENSE-2.0
      *
      * Unless required by applicable law or agreed to in writing, software
      * distributed under the License is distributed on an "AS IS" BASIS,
      * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
      * See the License for the specific language governing permissions and
      * limitations under the License.
      */
exports.CountedSet = CountedSet;
//# sourceMappingURL=CountedSet.js.map


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*! @license Firebase v4.5.0
Build: rev-f49c8b5
Terms: https://firebase.google.com/terms/ */



Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.EventEmitter = undefined;

var _assert = __webpack_require__(2);

/**
 * Base class to be used if you want to emit events. Call the constructor with
 * the set of allowed event names.
 */
var EventEmitter = /** @class */function () {
    /**
     * @param {!Array.<string>} allowedEvents_
     */
    function EventEmitter(allowedEvents_) {
        this.allowedEvents_ = allowedEvents_;
        this.listeners_ = {};
        (0, _assert.assert)(Array.isArray(allowedEvents_) && allowedEvents_.length > 0, 'Requires a non-empty array');
    }
    /**
     * To be called by derived classes to trigger events.
     * @param {!string} eventType
     * @param {...*} var_args
     */
    EventEmitter.prototype.trigger = function (eventType) {
        var var_args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            var_args[_i - 1] = arguments[_i];
        }
        if (Array.isArray(this.listeners_[eventType])) {
            // Clone the list, since callbacks could add/remove listeners.
            var listeners = this.listeners_[eventType].slice();
            for (var i = 0; i < listeners.length; i++) {
                listeners[i].callback.apply(listeners[i].context, var_args);
            }
        }
    };
    EventEmitter.prototype.on = function (eventType, callback, context) {
        this.validateEventType_(eventType);
        this.listeners_[eventType] = this.listeners_[eventType] || [];
        this.listeners_[eventType].push({ callback: callback, context: context });
        var eventData = this.getInitialEvent(eventType);
        if (eventData) {
            callback.apply(context, eventData);
        }
    };
    EventEmitter.prototype.off = function (eventType, callback, context) {
        this.validateEventType_(eventType);
        var listeners = this.listeners_[eventType] || [];
        for (var i = 0; i < listeners.length; i++) {
            if (listeners[i].callback === callback && (!context || context === listeners[i].context)) {
                listeners.splice(i, 1);
                return;
            }
        }
    };
    EventEmitter.prototype.validateEventType_ = function (eventType) {
        (0, _assert.assert)(this.allowedEvents_.find(function (et) {
            return et === eventType;
        }), 'Unknown event: ' + eventType);
    };
    return EventEmitter;
}(); /**
      * Copyright 2017 Google Inc.
      *
      * Licensed under the Apache License, Version 2.0 (the "License");
      * you may not use this file except in compliance with the License.
      * You may obtain a copy of the License at
      *
      *   http://www.apache.org/licenses/LICENSE-2.0
      *
      * Unless required by applicable law or agreed to in writing, software
      * distributed under the License is distributed on an "AS IS" BASIS,
      * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
      * See the License for the specific language governing permissions and
      * limitations under the License.
      */
exports.EventEmitter = EventEmitter;
//# sourceMappingURL=EventEmitter.js.map


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*! @license Firebase v4.5.0
Build: rev-f49c8b5
Terms: https://firebase.google.com/terms/ */



Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.resolveDeferredValueSnapshot = exports.resolveDeferredValueTree = exports.resolveDeferredValue = exports.generateWithValues = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /**
                                                                                                                                                                                                                                                                               * Copyright 2017 Google Inc.
                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                               * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                               * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                               * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                               *   http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                               * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                               * distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                               * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                               * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                               * limitations under the License.
                                                                                                                                                                                                                                                                               */


var _assert = __webpack_require__(2);

var _Path = __webpack_require__(5);

var _SparseSnapshotTree = __webpack_require__(59);

var _LeafNode = __webpack_require__(36);

var _nodeFromJSON = __webpack_require__(34);

var _PriorityIndex = __webpack_require__(7);

/**
 * Generate placeholders for deferred values.
 * @param {?Object} values
 * @return {!Object}
 */
var generateWithValues = exports.generateWithValues = function generateWithValues(values) {
    values = values || {};
    values['timestamp'] = values['timestamp'] || new Date().getTime();
    return values;
};
/**
 * Value to use when firing local events. When writing server values, fire
 * local events with an approximate value, otherwise return value as-is.
 * @param {(Object|string|number|boolean)} value
 * @param {!Object} serverValues
 * @return {!(string|number|boolean)}
 */
var resolveDeferredValue = exports.resolveDeferredValue = function resolveDeferredValue(value, serverValues) {
    if (!value || (typeof value === 'undefined' ? 'undefined' : _typeof(value)) !== 'object') {
        return value;
    } else {
        (0, _assert.assert)('.sv' in value, 'Unexpected leaf node or priority contents');
        return serverValues[value['.sv']];
    }
};
/**
 * Recursively replace all deferred values and priorities in the tree with the
 * specified generated replacement values.
 * @param {!SparseSnapshotTree} tree
 * @param {!Object} serverValues
 * @return {!SparseSnapshotTree}
 */
var resolveDeferredValueTree = exports.resolveDeferredValueTree = function resolveDeferredValueTree(tree, serverValues) {
    var resolvedTree = new _SparseSnapshotTree.SparseSnapshotTree();
    tree.forEachTree(new _Path.Path(''), function (path, node) {
        resolvedTree.remember(path, resolveDeferredValueSnapshot(node, serverValues));
    });
    return resolvedTree;
};
/**
 * Recursively replace all deferred values and priorities in the node with the
 * specified generated replacement values.  If there are no server values in the node,
 * it'll be returned as-is.
 * @param {!Node} node
 * @param {!Object} serverValues
 * @return {!Node}
 */
var resolveDeferredValueSnapshot = exports.resolveDeferredValueSnapshot = function resolveDeferredValueSnapshot(node, serverValues) {
    var rawPri = node.getPriority().val();
    var priority = resolveDeferredValue(rawPri, serverValues);
    var newNode;
    if (node.isLeafNode()) {
        var leafNode = node;
        var value = resolveDeferredValue(leafNode.getValue(), serverValues);
        if (value !== leafNode.getValue() || priority !== leafNode.getPriority().val()) {
            return new _LeafNode.LeafNode(value, (0, _nodeFromJSON.nodeFromJSON)(priority));
        } else {
            return node;
        }
    } else {
        var childrenNode = node;
        newNode = childrenNode;
        if (priority !== childrenNode.getPriority().val()) {
            newNode = newNode.updatePriority(new _LeafNode.LeafNode(priority));
        }
        childrenNode.forEachChild(_PriorityIndex.PRIORITY_INDEX, function (childName, childNode) {
            var newChildNode = resolveDeferredValueSnapshot(childNode, serverValues);
            if (newChildNode !== childNode) {
                newNode = newNode.updateImmediateChild(childName, newChildNode);
            }
        });
        return newNode;
    }
};
//# sourceMappingURL=ServerValues.js.map


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*! @license Firebase v4.5.0
Build: rev-f49c8b5
Terms: https://firebase.google.com/terms/ */



Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.parseURL = exports.parseRepoInfo = undefined;

var _Path = __webpack_require__(5);

var _RepoInfo = __webpack_require__(57);

var _util = __webpack_require__(3);

/**
 * @param {!string} pathString
 * @return {string}
 */
function decodePath(pathString) {
    var pathStringDecoded = '';
    var pieces = pathString.split('/');
    for (var i = 0; i < pieces.length; i++) {
        if (pieces[i].length > 0) {
            var piece = pieces[i];
            try {
                piece = decodeURIComponent(piece.replace(/\+/g, ' '));
            } catch (e) {}
            pathStringDecoded += '/' + piece;
        }
    }
    return pathStringDecoded;
}
/**
 *
 * @param {!string} dataURL
 * @return {{repoInfo: !RepoInfo, path: !Path}}
 */
/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var parseRepoInfo = exports.parseRepoInfo = function parseRepoInfo(dataURL) {
    var parsedUrl = parseURL(dataURL),
        namespace = parsedUrl.subdomain;
    if (parsedUrl.domain === 'firebase') {
        (0, _util.fatal)(parsedUrl.host + ' is no longer supported. ' + 'Please use <YOUR FIREBASE>.firebaseio.com instead');
    }
    // Catch common error of uninitialized namespace value.
    if (!namespace || namespace == 'undefined') {
        (0, _util.fatal)('Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com');
    }
    if (!parsedUrl.secure) {
        (0, _util.warnIfPageIsSecure)();
    }
    var webSocketOnly = parsedUrl.scheme === 'ws' || parsedUrl.scheme === 'wss';
    return {
        repoInfo: new _RepoInfo.RepoInfo(parsedUrl.host, parsedUrl.secure, namespace, webSocketOnly),
        path: new _Path.Path(parsedUrl.pathString)
    };
};
/**
 *
 * @param {!string} dataURL
 * @return {{host: string, port: number, domain: string, subdomain: string, secure: boolean, scheme: string, pathString: string}}
 */
var parseURL = exports.parseURL = function parseURL(dataURL) {
    // Default to empty strings in the event of a malformed string.
    var host = '',
        domain = '',
        subdomain = '',
        pathString = '';
    // Always default to SSL, unless otherwise specified.
    var secure = true,
        scheme = 'https',
        port = 443;
    // Don't do any validation here. The caller is responsible for validating the result of parsing.
    if (typeof dataURL === 'string') {
        // Parse scheme.
        var colonInd = dataURL.indexOf('//');
        if (colonInd >= 0) {
            scheme = dataURL.substring(0, colonInd - 1);
            dataURL = dataURL.substring(colonInd + 2);
        }
        // Parse host and path.
        var slashInd = dataURL.indexOf('/');
        if (slashInd === -1) {
            slashInd = dataURL.length;
        }
        host = dataURL.substring(0, slashInd);
        pathString = decodePath(dataURL.substring(slashInd));
        var parts = host.split('.');
        if (parts.length === 3) {
            // Normalize namespaces to lowercase to share storage / connection.
            domain = parts[1];
            subdomain = parts[0].toLowerCase();
        } else if (parts.length === 2) {
            domain = parts[0];
        }
        // If we have a port, use scheme for determining if it's secure.
        colonInd = host.indexOf(':');
        if (colonInd >= 0) {
            secure = scheme === 'https' || scheme === 'wss';
            port = parseInt(host.substring(colonInd + 1), 10);
        }
    }
    return {
        host: host,
        port: port,
        domain: domain,
        subdomain: subdomain,
        secure: secure,
        scheme: scheme,
        pathString: pathString
    };
};
//# sourceMappingURL=parser.js.map


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*! @license Firebase v4.5.0
Build: rev-f49c8b5
Terms: https://firebase.google.com/terms/ */



Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ViewCache = undefined;

var _ChildrenNode = __webpack_require__(8);

var _CacheNode = __webpack_require__(39);

/**
 * Stores the data we have cached for a view.
 *
 * serverSnap is the cached server data, eventSnap is the cached event data (server data plus any local writes).
 *
 * @constructor
 */
/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var ViewCache = /** @class */function () {
  /**
   *
   * @param {!CacheNode} eventCache_
   * @param {!CacheNode} serverCache_
   */
  function ViewCache(eventCache_, serverCache_) {
    this.eventCache_ = eventCache_;
    this.serverCache_ = serverCache_;
  }
  /**
   * @param {!Node} eventSnap
   * @param {boolean} complete
   * @param {boolean} filtered
   * @return {!ViewCache}
   */
  ViewCache.prototype.updateEventSnap = function (eventSnap, complete, filtered) {
    return new ViewCache(new _CacheNode.CacheNode(eventSnap, complete, filtered), this.serverCache_);
  };
  /**
   * @param {!Node} serverSnap
   * @param {boolean} complete
   * @param {boolean} filtered
   * @return {!ViewCache}
   */
  ViewCache.prototype.updateServerSnap = function (serverSnap, complete, filtered) {
    return new ViewCache(this.eventCache_, new _CacheNode.CacheNode(serverSnap, complete, filtered));
  };
  /**
   * @return {!CacheNode}
   */
  ViewCache.prototype.getEventCache = function () {
    return this.eventCache_;
  };
  /**
   * @return {?Node}
   */
  ViewCache.prototype.getCompleteEventSnap = function () {
    return this.eventCache_.isFullyInitialized() ? this.eventCache_.getNode() : null;
  };
  /**
   * @return {!CacheNode}
   */
  ViewCache.prototype.getServerCache = function () {
    return this.serverCache_;
  };
  /**
   * @return {?Node}
   */
  ViewCache.prototype.getCompleteServerSnap = function () {
    return this.serverCache_.isFullyInitialized() ? this.serverCache_.getNode() : null;
  };
  /**
   * @const
   * @type {ViewCache}
   */
  ViewCache.Empty = new ViewCache(new _CacheNode.CacheNode(_ChildrenNode.ChildrenNode.EMPTY_NODE,
  /*fullyInitialized=*/false,
  /*filtered=*/false), new _CacheNode.CacheNode(_ChildrenNode.ChildrenNode.EMPTY_NODE,
  /*fullyInitialized=*/false,
  /*filtered=*/false));
  return ViewCache;
}();
exports.ViewCache = ViewCache;
//# sourceMappingURL=ViewCache.js.map


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*! @license Firebase v4.5.0
Build: rev-f49c8b5
Terms: https://firebase.google.com/terms/ */



Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.RangedFilter = undefined;

var _IndexedFilter = __webpack_require__(48);

var _PriorityIndex = __webpack_require__(7);

var _Node = __webpack_require__(10);

var _ChildrenNode = __webpack_require__(8);

/**
 * Filters nodes by range and uses an IndexFilter to track any changes after filtering the node
 *
 * @constructor
 * @implements {NodeFilter}
 */
/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var RangedFilter = /** @class */function () {
    /**
     * @param {!QueryParams} params
     */
    function RangedFilter(params) {
        this.indexedFilter_ = new _IndexedFilter.IndexedFilter(params.getIndex());
        this.index_ = params.getIndex();
        this.startPost_ = RangedFilter.getStartPost_(params);
        this.endPost_ = RangedFilter.getEndPost_(params);
    }
    /**
     * @return {!NamedNode}
     */
    RangedFilter.prototype.getStartPost = function () {
        return this.startPost_;
    };
    /**
     * @return {!NamedNode}
     */
    RangedFilter.prototype.getEndPost = function () {
        return this.endPost_;
    };
    /**
     * @param {!NamedNode} node
     * @return {boolean}
     */
    RangedFilter.prototype.matches = function (node) {
        return this.index_.compare(this.getStartPost(), node) <= 0 && this.index_.compare(node, this.getEndPost()) <= 0;
    };
    /**
     * @inheritDoc
     */
    RangedFilter.prototype.updateChild = function (snap, key, newChild, affectedPath, source, optChangeAccumulator) {
        if (!this.matches(new _Node.NamedNode(key, newChild))) {
            newChild = _ChildrenNode.ChildrenNode.EMPTY_NODE;
        }
        return this.indexedFilter_.updateChild(snap, key, newChild, affectedPath, source, optChangeAccumulator);
    };
    /**
     * @inheritDoc
     */
    RangedFilter.prototype.updateFullNode = function (oldSnap, newSnap, optChangeAccumulator) {
        if (newSnap.isLeafNode()) {
            // Make sure we have a children node with the correct index, not a leaf node;
            newSnap = _ChildrenNode.ChildrenNode.EMPTY_NODE;
        }
        var filtered = newSnap.withIndex(this.index_);
        // Don't support priorities on queries
        filtered = filtered.updatePriority(_ChildrenNode.ChildrenNode.EMPTY_NODE);
        var self = this;
        newSnap.forEachChild(_PriorityIndex.PRIORITY_INDEX, function (key, childNode) {
            if (!self.matches(new _Node.NamedNode(key, childNode))) {
                filtered = filtered.updateImmediateChild(key, _ChildrenNode.ChildrenNode.EMPTY_NODE);
            }
        });
        return this.indexedFilter_.updateFullNode(oldSnap, filtered, optChangeAccumulator);
    };
    /**
     * @inheritDoc
     */
    RangedFilter.prototype.updatePriority = function (oldSnap, newPriority) {
        // Don't support priorities on queries
        return oldSnap;
    };
    /**
     * @inheritDoc
     */
    RangedFilter.prototype.filtersNodes = function () {
        return true;
    };
    /**
     * @inheritDoc
     */
    RangedFilter.prototype.getIndexedFilter = function () {
        return this.indexedFilter_;
    };
    /**
     * @inheritDoc
     */
    RangedFilter.prototype.getIndex = function () {
        return this.index_;
    };
    /**
     * @param {!QueryParams} params
     * @return {!NamedNode}
     * @private
     */
    RangedFilter.getStartPost_ = function (params) {
        if (params.hasStart()) {
            var startName = params.getIndexStartName();
            return params.getIndex().makePost(params.getIndexStartValue(), startName);
        } else {
            return params.getIndex().minPost();
        }
    };
    /**
     * @param {!QueryParams} params
     * @return {!NamedNode}
     * @private
     */
    RangedFilter.getEndPost_ = function (params) {
        if (params.hasEnd()) {
            var endName = params.getIndexEndName();
            return params.getIndex().makePost(params.getIndexEndValue(), endName);
        } else {
            return params.getIndex().maxPost();
        }
    };
    return RangedFilter;
}();
exports.RangedFilter = RangedFilter;
//# sourceMappingURL=RangedFilter.js.map


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*! @license Firebase v4.5.0
Build: rev-f49c8b5
Terms: https://firebase.google.com/terms/ */



Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.FirebaseIFrameScriptHolder = exports.BrowserPollConnection = exports.FIREBASE_LONGPOLL_DISCONN_FRAME_REQUEST_PARAM = exports.FIREBASE_LONGPOLL_DISCONN_FRAME_PARAM = exports.FIREBASE_LONGPOLL_DATA_PARAM = exports.FIREBASE_LONGPOLL_SEGMENTS_IN_PACKET = exports.FIREBASE_LONGPOLL_SEGMENT_NUM_PARAM = exports.FIREBASE_LONGPOLL_CALLBACK_ID_PARAM = exports.FIREBASE_LONGPOLL_SERIAL_PARAM = exports.FIREBASE_LONGPOLL_PW_PARAM = exports.FIREBASE_LONGPOLL_ID_PARAM = exports.FIREBASE_LONGPOLL_DATA_CB_NAME = exports.FIREBASE_LONGPOLL_COMMAND_CB_NAME = exports.FIREBASE_LONGPOLL_CLOSE_COMMAND = exports.FIREBASE_LONGPOLL_START_PARAM = undefined;

var _util = __webpack_require__(3);

var _CountedSet = __webpack_require__(69);

var _StatsManager = __webpack_require__(45);

var _PacketReceiver = __webpack_require__(120);

var _Constants = __webpack_require__(40);

var _json = __webpack_require__(14);

var _environment = __webpack_require__(31);

// URL query parameters associated with longpolling
var FIREBASE_LONGPOLL_START_PARAM = exports.FIREBASE_LONGPOLL_START_PARAM = 'start'; /**
                                                                                      * Copyright 2017 Google Inc.
                                                                                      *
                                                                                      * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                      * you may not use this file except in compliance with the License.
                                                                                      * You may obtain a copy of the License at
                                                                                      *
                                                                                      *   http://www.apache.org/licenses/LICENSE-2.0
                                                                                      *
                                                                                      * Unless required by applicable law or agreed to in writing, software
                                                                                      * distributed under the License is distributed on an "AS IS" BASIS,
                                                                                      * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                      * See the License for the specific language governing permissions and
                                                                                      * limitations under the License.
                                                                                      */
var FIREBASE_LONGPOLL_CLOSE_COMMAND = exports.FIREBASE_LONGPOLL_CLOSE_COMMAND = 'close';
var FIREBASE_LONGPOLL_COMMAND_CB_NAME = exports.FIREBASE_LONGPOLL_COMMAND_CB_NAME = 'pLPCommand';
var FIREBASE_LONGPOLL_DATA_CB_NAME = exports.FIREBASE_LONGPOLL_DATA_CB_NAME = 'pRTLPCB';
var FIREBASE_LONGPOLL_ID_PARAM = exports.FIREBASE_LONGPOLL_ID_PARAM = 'id';
var FIREBASE_LONGPOLL_PW_PARAM = exports.FIREBASE_LONGPOLL_PW_PARAM = 'pw';
var FIREBASE_LONGPOLL_SERIAL_PARAM = exports.FIREBASE_LONGPOLL_SERIAL_PARAM = 'ser';
var FIREBASE_LONGPOLL_CALLBACK_ID_PARAM = exports.FIREBASE_LONGPOLL_CALLBACK_ID_PARAM = 'cb';
var FIREBASE_LONGPOLL_SEGMENT_NUM_PARAM = exports.FIREBASE_LONGPOLL_SEGMENT_NUM_PARAM = 'seg';
var FIREBASE_LONGPOLL_SEGMENTS_IN_PACKET = exports.FIREBASE_LONGPOLL_SEGMENTS_IN_PACKET = 'ts';
var FIREBASE_LONGPOLL_DATA_PARAM = exports.FIREBASE_LONGPOLL_DATA_PARAM = 'd';
var FIREBASE_LONGPOLL_DISCONN_FRAME_PARAM = exports.FIREBASE_LONGPOLL_DISCONN_FRAME_PARAM = 'disconn';
var FIREBASE_LONGPOLL_DISCONN_FRAME_REQUEST_PARAM = exports.FIREBASE_LONGPOLL_DISCONN_FRAME_REQUEST_PARAM = 'dframe';
//Data size constants.
//TODO: Perf: the maximum length actually differs from browser to browser.
// We should check what browser we're on and set accordingly.
var MAX_URL_DATA_SIZE = 1870;
var SEG_HEADER_SIZE = 30; //ie: &seg=8299234&ts=982389123&d=
var MAX_PAYLOAD_SIZE = MAX_URL_DATA_SIZE - SEG_HEADER_SIZE;
/**
 * Keepalive period
 * send a fresh request at minimum every 25 seconds. Opera has a maximum request
 * length of 30 seconds that we can't exceed.
 * @const
 * @type {number}
 */
var KEEPALIVE_REQUEST_INTERVAL = 25000;
/**
 * How long to wait before aborting a long-polling connection attempt.
 * @const
 * @type {number}
 */
var LP_CONNECT_TIMEOUT = 30000;
/**
 * This class manages a single long-polling connection.
 *
 * @constructor
 * @implements {Transport}
 */
var BrowserPollConnection = /** @class */function () {
    /**
     * @param {string} connId An identifier for this connection, used for logging
     * @param {RepoInfo} repoInfo The info for the endpoint to send data to.
     * @param {string=} transportSessionId Optional transportSessionid if we are reconnecting for an existing
     *                                         transport session
     * @param {string=}  lastSessionId Optional lastSessionId if the PersistentConnection has already created a
     *                                     connection previously
     */
    function BrowserPollConnection(connId, repoInfo, transportSessionId, lastSessionId) {
        this.connId = connId;
        this.repoInfo = repoInfo;
        this.transportSessionId = transportSessionId;
        this.lastSessionId = lastSessionId;
        this.bytesSent = 0;
        this.bytesReceived = 0;
        this.everConnected_ = false;
        this.log_ = (0, _util.logWrapper)(connId);
        this.stats_ = _StatsManager.StatsManager.getCollection(repoInfo);
        this.urlFn = function (params) {
            return repoInfo.connectionURL(_Constants.LONG_POLLING, params);
        };
    }
    /**
     *
     * @param {function(Object)} onMessage Callback when messages arrive
     * @param {function()} onDisconnect Callback with connection lost.
     */
    BrowserPollConnection.prototype.open = function (onMessage, onDisconnect) {
        var _this = this;
        this.curSegmentNum = 0;
        this.onDisconnect_ = onDisconnect;
        this.myPacketOrderer = new _PacketReceiver.PacketReceiver(onMessage);
        this.isClosed_ = false;
        this.connectTimeoutTimer_ = setTimeout(function () {
            _this.log_('Timed out trying to connect.');
            // Make sure we clear the host cache
            _this.onClosed_();
            _this.connectTimeoutTimer_ = null;
        }, Math.floor(LP_CONNECT_TIMEOUT));
        // Ensure we delay the creation of the iframe until the DOM is loaded.
        (0, _util.executeWhenDOMReady)(function () {
            if (_this.isClosed_) return;
            //Set up a callback that gets triggered once a connection is set up.
            _this.scriptTagHolder = new FirebaseIFrameScriptHolder(function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                var command = args[0],
                    arg1 = args[1],
                    arg2 = args[2],
                    arg3 = args[3],
                    arg4 = args[4];
                _this.incrementIncomingBytes_(args);
                if (!_this.scriptTagHolder) return; // we closed the connection.
                if (_this.connectTimeoutTimer_) {
                    clearTimeout(_this.connectTimeoutTimer_);
                    _this.connectTimeoutTimer_ = null;
                }
                _this.everConnected_ = true;
                if (command == FIREBASE_LONGPOLL_START_PARAM) {
                    _this.id = arg1;
                    _this.password = arg2;
                } else if (command === FIREBASE_LONGPOLL_CLOSE_COMMAND) {
                    // Don't clear the host cache. We got a response from the server, so we know it's reachable
                    if (arg1) {
                        // We aren't expecting any more data (other than what the server's already in the process of sending us
                        // through our already open polls), so don't send any more.
                        _this.scriptTagHolder.sendNewPolls = false;
                        // arg1 in this case is the last response number sent by the server. We should try to receive
                        // all of the responses up to this one before closing
                        _this.myPacketOrderer.closeAfter(arg1, function () {
                            _this.onClosed_();
                        });
                    } else {
                        _this.onClosed_();
                    }
                } else {
                    throw new Error('Unrecognized command received: ' + command);
                }
            }, function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                var pN = args[0],
                    data = args[1];
                _this.incrementIncomingBytes_(args);
                _this.myPacketOrderer.handleResponse(pN, data);
            }, function () {
                _this.onClosed_();
            }, _this.urlFn);
            //Send the initial request to connect. The serial number is simply to keep the browser from pulling previous results
            //from cache.
            var urlParams = {};
            urlParams[FIREBASE_LONGPOLL_START_PARAM] = 't';
            urlParams[FIREBASE_LONGPOLL_SERIAL_PARAM] = Math.floor(Math.random() * 100000000);
            if (_this.scriptTagHolder.uniqueCallbackIdentifier) urlParams[FIREBASE_LONGPOLL_CALLBACK_ID_PARAM] = _this.scriptTagHolder.uniqueCallbackIdentifier;
            urlParams[_Constants.VERSION_PARAM] = _Constants.PROTOCOL_VERSION;
            if (_this.transportSessionId) {
                urlParams[_Constants.TRANSPORT_SESSION_PARAM] = _this.transportSessionId;
            }
            if (_this.lastSessionId) {
                urlParams[_Constants.LAST_SESSION_PARAM] = _this.lastSessionId;
            }
            if (!(0, _environment.isNodeSdk)() && typeof location !== 'undefined' && location.href && location.href.indexOf(_Constants.FORGE_DOMAIN) !== -1) {
                urlParams[_Constants.REFERER_PARAM] = _Constants.FORGE_REF;
            }
            var connectURL = _this.urlFn(urlParams);
            _this.log_('Connecting via long-poll to ' + connectURL);
            _this.scriptTagHolder.addTag(connectURL, function () {
                /* do nothing */
            });
        });
    };
    /**
     * Call this when a handshake has completed successfully and we want to consider the connection established
     */
    BrowserPollConnection.prototype.start = function () {
        this.scriptTagHolder.startLongPoll(this.id, this.password);
        this.addDisconnectPingFrame(this.id, this.password);
    };
    /**
     * Forces long polling to be considered as a potential transport
     */
    BrowserPollConnection.forceAllow = function () {
        BrowserPollConnection.forceAllow_ = true;
    };
    /**
     * Forces longpolling to not be considered as a potential transport
     */
    BrowserPollConnection.forceDisallow = function () {
        BrowserPollConnection.forceDisallow_ = true;
    };
    // Static method, use string literal so it can be accessed in a generic way
    BrowserPollConnection.isAvailable = function () {
        // NOTE: In React-Native there's normally no 'document', but if you debug a React-Native app in
        // the Chrome debugger, 'document' is defined, but document.createElement is null (2015/06/08).
        return BrowserPollConnection.forceAllow_ || !BrowserPollConnection.forceDisallow_ && typeof document !== 'undefined' && document.createElement != null && !(0, _util.isChromeExtensionContentScript)() && !(0, _util.isWindowsStoreApp)() && !(0, _environment.isNodeSdk)();
    };
    /**
     * No-op for polling
     */
    BrowserPollConnection.prototype.markConnectionHealthy = function () {};
    /**
     * Stops polling and cleans up the iframe
     * @private
     */
    BrowserPollConnection.prototype.shutdown_ = function () {
        this.isClosed_ = true;
        if (this.scriptTagHolder) {
            this.scriptTagHolder.close();
            this.scriptTagHolder = null;
        }
        //remove the disconnect frame, which will trigger an XHR call to the server to tell it we're leaving.
        if (this.myDisconnFrame) {
            document.body.removeChild(this.myDisconnFrame);
            this.myDisconnFrame = null;
        }
        if (this.connectTimeoutTimer_) {
            clearTimeout(this.connectTimeoutTimer_);
            this.connectTimeoutTimer_ = null;
        }
    };
    /**
     * Triggered when this transport is closed
     * @private
     */
    BrowserPollConnection.prototype.onClosed_ = function () {
        if (!this.isClosed_) {
            this.log_('Longpoll is closing itself');
            this.shutdown_();
            if (this.onDisconnect_) {
                this.onDisconnect_(this.everConnected_);
                this.onDisconnect_ = null;
            }
        }
    };
    /**
     * External-facing close handler. RealTime has requested we shut down. Kill our connection and tell the server
     * that we've left.
     */
    BrowserPollConnection.prototype.close = function () {
        if (!this.isClosed_) {
            this.log_('Longpoll is being closed.');
            this.shutdown_();
        }
    };
    /**
     * Send the JSON object down to the server. It will need to be stringified, base64 encoded, and then
     * broken into chunks (since URLs have a small maximum length).
     * @param {!Object} data The JSON data to transmit.
     */
    BrowserPollConnection.prototype.send = function (data) {
        var dataStr = (0, _json.stringify)(data);
        this.bytesSent += dataStr.length;
        this.stats_.incrementCounter('bytes_sent', dataStr.length);
        //first, lets get the base64-encoded data
        var base64data = (0, _util.base64Encode)(dataStr);
        //We can only fit a certain amount in each URL, so we need to split this request
        //up into multiple pieces if it doesn't fit in one request.
        var dataSegs = (0, _util.splitStringBySize)(base64data, MAX_PAYLOAD_SIZE);
        //Enqueue each segment for transmission. We assign each chunk a sequential ID and a total number
        //of segments so that we can reassemble the packet on the server.
        for (var i = 0; i < dataSegs.length; i++) {
            this.scriptTagHolder.enqueueSegment(this.curSegmentNum, dataSegs.length, dataSegs[i]);
            this.curSegmentNum++;
        }
    };
    /**
     * This is how we notify the server that we're leaving.
     * We aren't able to send requests with DHTML on a window close event, but we can
     * trigger XHR requests in some browsers (everything but Opera basically).
     * @param {!string} id
     * @param {!string} pw
     */
    BrowserPollConnection.prototype.addDisconnectPingFrame = function (id, pw) {
        if ((0, _environment.isNodeSdk)()) return;
        this.myDisconnFrame = document.createElement('iframe');
        var urlParams = {};
        urlParams[FIREBASE_LONGPOLL_DISCONN_FRAME_REQUEST_PARAM] = 't';
        urlParams[FIREBASE_LONGPOLL_ID_PARAM] = id;
        urlParams[FIREBASE_LONGPOLL_PW_PARAM] = pw;
        this.myDisconnFrame.src = this.urlFn(urlParams);
        this.myDisconnFrame.style.display = 'none';
        document.body.appendChild(this.myDisconnFrame);
    };
    /**
     * Used to track the bytes received by this client
     * @param {*} args
     * @private
     */
    BrowserPollConnection.prototype.incrementIncomingBytes_ = function (args) {
        // TODO: This is an annoying perf hit just to track the number of incoming bytes.  Maybe it should be opt-in.
        var bytesReceived = (0, _json.stringify)(args).length;
        this.bytesReceived += bytesReceived;
        this.stats_.incrementCounter('bytes_received', bytesReceived);
    };
    return BrowserPollConnection;
}();
exports.BrowserPollConnection = BrowserPollConnection;
/*********************************************************************************************
 * A wrapper around an iframe that is used as a long-polling script holder.
 * @constructor
 *********************************************************************************************/

var FirebaseIFrameScriptHolder = /** @class */function () {
    /**
     * @param commandCB - The callback to be called when control commands are recevied from the server.
     * @param onMessageCB - The callback to be triggered when responses arrive from the server.
     * @param onDisconnect - The callback to be triggered when this tag holder is closed
     * @param urlFn - A function that provides the URL of the endpoint to send data to.
     */
    function FirebaseIFrameScriptHolder(commandCB, onMessageCB, onDisconnect, urlFn) {
        this.onDisconnect = onDisconnect;
        this.urlFn = urlFn;
        //We maintain a count of all of the outstanding requests, because if we have too many active at once it can cause
        //problems in some browsers.
        /**
         * @type {CountedSet.<number, number>}
         */
        this.outstandingRequests = new _CountedSet.CountedSet();
        //A queue of the pending segments waiting for transmission to the server.
        this.pendingSegs = [];
        //A serial number. We use this for two things:
        // 1) A way to ensure the browser doesn't cache responses to polls
        // 2) A way to make the server aware when long-polls arrive in a different order than we started them. The
        //    server needs to release both polls in this case or it will cause problems in Opera since Opera can only execute
        //    JSONP code in the order it was added to the iframe.
        this.currentSerial = Math.floor(Math.random() * 100000000);
        // This gets set to false when we're "closing down" the connection (e.g. we're switching transports but there's still
        // incoming data from the server that we're waiting for).
        this.sendNewPolls = true;
        if (!(0, _environment.isNodeSdk)()) {
            //Each script holder registers a couple of uniquely named callbacks with the window. These are called from the
            //iframes where we put the long-polling script tags. We have two callbacks:
            //   1) Command Callback - Triggered for control issues, like starting a connection.
            //   2) Message Callback - Triggered when new data arrives.
            this.uniqueCallbackIdentifier = (0, _util.LUIDGenerator)();
            window[FIREBASE_LONGPOLL_COMMAND_CB_NAME + this.uniqueCallbackIdentifier] = commandCB;
            window[FIREBASE_LONGPOLL_DATA_CB_NAME + this.uniqueCallbackIdentifier] = onMessageCB;
            //Create an iframe for us to add script tags to.
            this.myIFrame = FirebaseIFrameScriptHolder.createIFrame_();
            // Set the iframe's contents.
            var script = '';
            // if we set a javascript url, it's IE and we need to set the document domain. The javascript url is sufficient
            // for ie9, but ie8 needs to do it again in the document itself.
            if (this.myIFrame.src && this.myIFrame.src.substr(0, 'javascript:'.length) === 'javascript:') {
                var currentDomain = document.domain;
                script = '<script>document.domain="' + currentDomain + '";</script>';
            }
            var iframeContents = '<html><body>' + script + '</body></html>';
            try {
                this.myIFrame.doc.open();
                this.myIFrame.doc.write(iframeContents);
                this.myIFrame.doc.close();
            } catch (e) {
                (0, _util.log)('frame writing exception');
                if (e.stack) {
                    (0, _util.log)(e.stack);
                }
                (0, _util.log)(e);
            }
        } else {
            this.commandCB = commandCB;
            this.onMessageCB = onMessageCB;
        }
    }
    /**
     * Each browser has its own funny way to handle iframes. Here we mush them all together into one object that I can
     * actually use.
     * @private
     * @return {Element}
     */
    FirebaseIFrameScriptHolder.createIFrame_ = function () {
        var iframe = document.createElement('iframe');
        iframe.style.display = 'none';
        // This is necessary in order to initialize the document inside the iframe
        if (document.body) {
            document.body.appendChild(iframe);
            try {
                // If document.domain has been modified in IE, this will throw an error, and we need to set the
                // domain of the iframe's document manually. We can do this via a javascript: url as the src attribute
                // Also note that we must do this *after* the iframe has been appended to the page. Otherwise it doesn't work.
                var a = iframe.contentWindow.document;
                if (!a) {
                    // Apologies for the log-spam, I need to do something to keep closure from optimizing out the assignment above.
                    (0, _util.log)('No IE domain setting required');
                }
            } catch (e) {
                var domain = document.domain;
                iframe.src = "javascript:void((function(){document.open();document.domain='" + domain + "';document.close();})())";
            }
        } else {
            // LongPollConnection attempts to delay initialization until the document is ready, so hopefully this
            // never gets hit.
            throw 'Document body has not initialized. Wait to initialize Firebase until after the document is ready.';
        }
        // Get the document of the iframe in a browser-specific way.
        if (iframe.contentDocument) {
            iframe.doc = iframe.contentDocument; // Firefox, Opera, Safari
        } else if (iframe.contentWindow) {
            iframe.doc = iframe.contentWindow.document; // Internet Explorer
        } else if (iframe.document) {
            iframe.doc = iframe.document; //others?
        }
        return iframe;
    };
    /**
     * Cancel all outstanding queries and remove the frame.
     */
    FirebaseIFrameScriptHolder.prototype.close = function () {
        var _this = this;
        //Mark this iframe as dead, so no new requests are sent.
        this.alive = false;
        if (this.myIFrame) {
            //We have to actually remove all of the html inside this iframe before removing it from the
            //window, or IE will continue loading and executing the script tags we've already added, which
            //can lead to some errors being thrown. Setting innerHTML seems to be the easiest way to do this.
            this.myIFrame.doc.body.innerHTML = '';
            setTimeout(function () {
                if (_this.myIFrame !== null) {
                    document.body.removeChild(_this.myIFrame);
                    _this.myIFrame = null;
                }
            }, Math.floor(0));
        }
        if ((0, _environment.isNodeSdk)() && this.myID) {
            var urlParams = {};
            urlParams[FIREBASE_LONGPOLL_DISCONN_FRAME_PARAM] = 't';
            urlParams[FIREBASE_LONGPOLL_ID_PARAM] = this.myID;
            urlParams[FIREBASE_LONGPOLL_PW_PARAM] = this.myPW;
            var theURL = this.urlFn(urlParams);
            FirebaseIFrameScriptHolder.nodeRestRequest(theURL);
        }
        // Protect from being called recursively.
        var onDisconnect = this.onDisconnect;
        if (onDisconnect) {
            this.onDisconnect = null;
            onDisconnect();
        }
    };
    /**
     * Actually start the long-polling session by adding the first script tag(s) to the iframe.
     * @param {!string} id - The ID of this connection
     * @param {!string} pw - The password for this connection
     */
    FirebaseIFrameScriptHolder.prototype.startLongPoll = function (id, pw) {
        this.myID = id;
        this.myPW = pw;
        this.alive = true;
        //send the initial request. If there are requests queued, make sure that we transmit as many as we are currently able to.
        while (this.newRequest_()) {}
    };
    /**
     * This is called any time someone might want a script tag to be added. It adds a script tag when there aren't
     * too many outstanding requests and we are still alive.
     *
     * If there are outstanding packet segments to send, it sends one. If there aren't, it sends a long-poll anyways if
     * needed.
     */
    FirebaseIFrameScriptHolder.prototype.newRequest_ = function () {
        // We keep one outstanding request open all the time to receive data, but if we need to send data
        // (pendingSegs.length > 0) then we create a new request to send the data.  The server will automatically
        // close the old request.
        if (this.alive && this.sendNewPolls && this.outstandingRequests.count() < (this.pendingSegs.length > 0 ? 2 : 1)) {
            //construct our url
            this.currentSerial++;
            var urlParams = {};
            urlParams[FIREBASE_LONGPOLL_ID_PARAM] = this.myID;
            urlParams[FIREBASE_LONGPOLL_PW_PARAM] = this.myPW;
            urlParams[FIREBASE_LONGPOLL_SERIAL_PARAM] = this.currentSerial;
            var theURL = this.urlFn(urlParams);
            //Now add as much data as we can.
            var curDataString = '';
            var i = 0;
            while (this.pendingSegs.length > 0) {
                //first, lets see if the next segment will fit.
                var nextSeg = this.pendingSegs[0];
                if (nextSeg.d.length + SEG_HEADER_SIZE + curDataString.length <= MAX_URL_DATA_SIZE) {
                    //great, the segment will fit. Lets append it.
                    var theSeg = this.pendingSegs.shift();
                    curDataString = curDataString + '&' + FIREBASE_LONGPOLL_SEGMENT_NUM_PARAM + i + '=' + theSeg.seg + '&' + FIREBASE_LONGPOLL_SEGMENTS_IN_PACKET + i + '=' + theSeg.ts + '&' + FIREBASE_LONGPOLL_DATA_PARAM + i + '=' + theSeg.d;
                    i++;
                } else {
                    break;
                }
            }
            theURL = theURL + curDataString;
            this.addLongPollTag_(theURL, this.currentSerial);
            return true;
        } else {
            return false;
        }
    };
    /**
     * Queue a packet for transmission to the server.
     * @param segnum - A sequential id for this packet segment used for reassembly
     * @param totalsegs - The total number of segments in this packet
     * @param data - The data for this segment.
     */
    FirebaseIFrameScriptHolder.prototype.enqueueSegment = function (segnum, totalsegs, data) {
        //add this to the queue of segments to send.
        this.pendingSegs.push({ seg: segnum, ts: totalsegs, d: data });
        //send the data immediately if there isn't already data being transmitted, unless
        //startLongPoll hasn't been called yet.
        if (this.alive) {
            this.newRequest_();
        }
    };
    /**
     * Add a script tag for a regular long-poll request.
     * @param {!string} url - The URL of the script tag.
     * @param {!number} serial - The serial number of the request.
     * @private
     */
    FirebaseIFrameScriptHolder.prototype.addLongPollTag_ = function (url, serial) {
        var _this = this;
        //remember that we sent this request.
        this.outstandingRequests.add(serial, 1);
        var doNewRequest = function doNewRequest() {
            _this.outstandingRequests.remove(serial);
            _this.newRequest_();
        };
        // If this request doesn't return on its own accord (by the server sending us some data), we'll
        // create a new one after the KEEPALIVE interval to make sure we always keep a fresh request open.
        var keepaliveTimeout = setTimeout(doNewRequest, Math.floor(KEEPALIVE_REQUEST_INTERVAL));
        var readyStateCB = function readyStateCB() {
            // Request completed.  Cancel the keepalive.
            clearTimeout(keepaliveTimeout);
            // Trigger a new request so we can continue receiving data.
            doNewRequest();
        };
        this.addTag(url, readyStateCB);
    };
    /**
     * Add an arbitrary script tag to the iframe.
     * @param {!string} url - The URL for the script tag source.
     * @param {!function()} loadCB - A callback to be triggered once the script has loaded.
     */
    FirebaseIFrameScriptHolder.prototype.addTag = function (url, loadCB) {
        var _this = this;
        if ((0, _environment.isNodeSdk)()) {
            this.doNodeLongPoll(url, loadCB);
        } else {
            setTimeout(function () {
                try {
                    // if we're already closed, don't add this poll
                    if (!_this.sendNewPolls) return;
                    var newScript_1 = _this.myIFrame.doc.createElement('script');
                    newScript_1.type = 'text/javascript';
                    newScript_1.async = true;
                    newScript_1.src = url;
                    newScript_1.onload = newScript_1.onreadystatechange = function () {
                        var rstate = newScript_1.readyState;
                        if (!rstate || rstate === 'loaded' || rstate === 'complete') {
                            newScript_1.onload = newScript_1.onreadystatechange = null;
                            if (newScript_1.parentNode) {
                                newScript_1.parentNode.removeChild(newScript_1);
                            }
                            loadCB();
                        }
                    };
                    newScript_1.onerror = function () {
                        (0, _util.log)('Long-poll script failed to load: ' + url);
                        _this.sendNewPolls = false;
                        _this.close();
                    };
                    _this.myIFrame.doc.body.appendChild(newScript_1);
                } catch (e) {
                    // TODO: we should make this error visible somehow
                }
            }, Math.floor(1));
        }
    };
    return FirebaseIFrameScriptHolder;
}();
exports.FirebaseIFrameScriptHolder = FirebaseIFrameScriptHolder;
//# sourceMappingURL=BrowserPollConnection.js.map


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*! @license Firebase v4.5.0
Build: rev-f49c8b5
Terms: https://firebase.google.com/terms/ */



Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Connection = undefined;

var _util = __webpack_require__(3);

var _storage = __webpack_require__(38);

var _Constants = __webpack_require__(40);

var _TransportManager = __webpack_require__(119);

// Abort upgrade attempt if it takes longer than 60s.
/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var UPGRADE_TIMEOUT = 60000;
// For some transports (WebSockets), we need to "validate" the transport by exchanging a few requests and responses.
// If we haven't sent enough requests within 5s, we'll start sending noop ping requests.
var DELAY_BEFORE_SENDING_EXTRA_REQUESTS = 5000;
// If the initial data sent triggers a lot of bandwidth (i.e. it's a large put or a listen for a large amount of data)
// then we may not be able to exchange our ping/pong requests within the healthy timeout.  So if we reach the timeout
// but we've sent/received enough bytes, we don't cancel the connection.
var BYTES_SENT_HEALTHY_OVERRIDE = 10 * 1024;
var BYTES_RECEIVED_HEALTHY_OVERRIDE = 100 * 1024;
var MESSAGE_TYPE = 't';
var MESSAGE_DATA = 'd';
var CONTROL_SHUTDOWN = 's';
var CONTROL_RESET = 'r';
var CONTROL_ERROR = 'e';
var CONTROL_PONG = 'o';
var SWITCH_ACK = 'a';
var END_TRANSMISSION = 'n';
var PING = 'p';
var SERVER_HELLO = 'h';
/**
 * Creates a new real-time connection to the server using whichever method works
 * best in the current browser.
 *
 * @constructor
 */
var Connection = /** @class */function () {
    /**
     * @param {!string} id - an id for this connection
     * @param {!RepoInfo} repoInfo_ - the info for the endpoint to connect to
     * @param {function(Object)} onMessage_ - the callback to be triggered when a server-push message arrives
     * @param {function(number, string)} onReady_ - the callback to be triggered when this connection is ready to send messages.
     * @param {function()} onDisconnect_ - the callback to be triggered when a connection was lost
     * @param {function(string)} onKill_ - the callback to be triggered when this connection has permanently shut down.
     * @param {string=} lastSessionId - last session id in persistent connection. is used to clean up old session in real-time server
     */
    function Connection(id, repoInfo_, onMessage_, onReady_, onDisconnect_, onKill_, lastSessionId) {
        this.id = id;
        this.repoInfo_ = repoInfo_;
        this.onMessage_ = onMessage_;
        this.onReady_ = onReady_;
        this.onDisconnect_ = onDisconnect_;
        this.onKill_ = onKill_;
        this.lastSessionId = lastSessionId;
        this.connectionCount = 0;
        this.pendingDataMessages = [];
        this.state_ = 0 /* CONNECTING */;
        this.log_ = (0, _util.logWrapper)('c:' + this.id + ':');
        this.transportManager_ = new _TransportManager.TransportManager(repoInfo_);
        this.log_('Connection created');
        this.start_();
    }
    /**
     * Starts a connection attempt
     * @private
     */
    Connection.prototype.start_ = function () {
        var _this = this;
        var conn = this.transportManager_.initialTransport();
        this.conn_ = new conn(this.nextTransportId_(), this.repoInfo_, undefined, this.lastSessionId);
        // For certain transports (WebSockets), we need to send and receive several messages back and forth before we
        // can consider the transport healthy.
        this.primaryResponsesRequired_ = conn['responsesRequiredToBeHealthy'] || 0;
        var onMessageReceived = this.connReceiver_(this.conn_);
        var onConnectionLost = this.disconnReceiver_(this.conn_);
        this.tx_ = this.conn_;
        this.rx_ = this.conn_;
        this.secondaryConn_ = null;
        this.isHealthy_ = false;
        /*
         * Firefox doesn't like when code from one iframe tries to create another iframe by way of the parent frame.
         * This can occur in the case of a redirect, i.e. we guessed wrong on what server to connect to and received a reset.
         * Somehow, setTimeout seems to make this ok. That doesn't make sense from a security perspective, since you should
         * still have the context of your originating frame.
         */
        setTimeout(function () {
            // this.conn_ gets set to null in some of the tests. Check to make sure it still exists before using it
            _this.conn_ && _this.conn_.open(onMessageReceived, onConnectionLost);
        }, Math.floor(0));
        var healthyTimeout_ms = conn['healthyTimeout'] || 0;
        if (healthyTimeout_ms > 0) {
            this.healthyTimeout_ = (0, _util.setTimeoutNonBlocking)(function () {
                _this.healthyTimeout_ = null;
                if (!_this.isHealthy_) {
                    if (_this.conn_ && _this.conn_.bytesReceived > BYTES_RECEIVED_HEALTHY_OVERRIDE) {
                        _this.log_('Connection exceeded healthy timeout but has received ' + _this.conn_.bytesReceived + ' bytes.  Marking connection healthy.');
                        _this.isHealthy_ = true;
                        _this.conn_.markConnectionHealthy();
                    } else if (_this.conn_ && _this.conn_.bytesSent > BYTES_SENT_HEALTHY_OVERRIDE) {
                        _this.log_('Connection exceeded healthy timeout but has sent ' + _this.conn_.bytesSent + ' bytes.  Leaving connection alive.');
                        // NOTE: We don't want to mark it healthy, since we have no guarantee that the bytes have made it to
                        // the server.
                    } else {
                        _this.log_('Closing unhealthy connection after timeout.');
                        _this.close();
                    }
                }
            }, Math.floor(healthyTimeout_ms));
        }
    };
    /**
     * @return {!string}
     * @private
     */
    Connection.prototype.nextTransportId_ = function () {
        return 'c:' + this.id + ':' + this.connectionCount++;
    };
    Connection.prototype.disconnReceiver_ = function (conn) {
        var _this = this;
        return function (everConnected) {
            if (conn === _this.conn_) {
                _this.onConnectionLost_(everConnected);
            } else if (conn === _this.secondaryConn_) {
                _this.log_('Secondary connection lost.');
                _this.onSecondaryConnectionLost_();
            } else {
                _this.log_('closing an old connection');
            }
        };
    };
    Connection.prototype.connReceiver_ = function (conn) {
        var _this = this;
        return function (message) {
            if (_this.state_ != 2 /* DISCONNECTED */) {
                    if (conn === _this.rx_) {
                        _this.onPrimaryMessageReceived_(message);
                    } else if (conn === _this.secondaryConn_) {
                        _this.onSecondaryMessageReceived_(message);
                    } else {
                        _this.log_('message on old connection');
                    }
                }
        };
    };
    /**
     *
     * @param {Object} dataMsg An arbitrary data message to be sent to the server
     */
    Connection.prototype.sendRequest = function (dataMsg) {
        // wrap in a data message envelope and send it on
        var msg = { t: 'd', d: dataMsg };
        this.sendData_(msg);
    };
    Connection.prototype.tryCleanupConnection = function () {
        if (this.tx_ === this.secondaryConn_ && this.rx_ === this.secondaryConn_) {
            this.log_('cleaning up and promoting a connection: ' + this.secondaryConn_.connId);
            this.conn_ = this.secondaryConn_;
            this.secondaryConn_ = null;
            // the server will shutdown the old connection
        }
    };
    Connection.prototype.onSecondaryControl_ = function (controlData) {
        if (MESSAGE_TYPE in controlData) {
            var cmd = controlData[MESSAGE_TYPE];
            if (cmd === SWITCH_ACK) {
                this.upgradeIfSecondaryHealthy_();
            } else if (cmd === CONTROL_RESET) {
                // Most likely the session wasn't valid. Abandon the switch attempt
                this.log_('Got a reset on secondary, closing it');
                this.secondaryConn_.close();
                // If we were already using this connection for something, than we need to fully close
                if (this.tx_ === this.secondaryConn_ || this.rx_ === this.secondaryConn_) {
                    this.close();
                }
            } else if (cmd === CONTROL_PONG) {
                this.log_('got pong on secondary.');
                this.secondaryResponsesRequired_--;
                this.upgradeIfSecondaryHealthy_();
            }
        }
    };
    Connection.prototype.onSecondaryMessageReceived_ = function (parsedData) {
        var layer = (0, _util.requireKey)('t', parsedData);
        var data = (0, _util.requireKey)('d', parsedData);
        if (layer == 'c') {
            this.onSecondaryControl_(data);
        } else if (layer == 'd') {
            // got a data message, but we're still second connection. Need to buffer it up
            this.pendingDataMessages.push(data);
        } else {
            throw new Error('Unknown protocol layer: ' + layer);
        }
    };
    Connection.prototype.upgradeIfSecondaryHealthy_ = function () {
        if (this.secondaryResponsesRequired_ <= 0) {
            this.log_('Secondary connection is healthy.');
            this.isHealthy_ = true;
            this.secondaryConn_.markConnectionHealthy();
            this.proceedWithUpgrade_();
        } else {
            // Send a ping to make sure the connection is healthy.
            this.log_('sending ping on secondary.');
            this.secondaryConn_.send({ t: 'c', d: { t: PING, d: {} } });
        }
    };
    Connection.prototype.proceedWithUpgrade_ = function () {
        // tell this connection to consider itself open
        this.secondaryConn_.start();
        // send ack
        this.log_('sending client ack on secondary');
        this.secondaryConn_.send({ t: 'c', d: { t: SWITCH_ACK, d: {} } });
        // send end packet on primary transport, switch to sending on this one
        // can receive on this one, buffer responses until end received on primary transport
        this.log_('Ending transmission on primary');
        this.conn_.send({ t: 'c', d: { t: END_TRANSMISSION, d: {} } });
        this.tx_ = this.secondaryConn_;
        this.tryCleanupConnection();
    };
    Connection.prototype.onPrimaryMessageReceived_ = function (parsedData) {
        // Must refer to parsedData properties in quotes, so closure doesn't touch them.
        var layer = (0, _util.requireKey)('t', parsedData);
        var data = (0, _util.requireKey)('d', parsedData);
        if (layer == 'c') {
            this.onControl_(data);
        } else if (layer == 'd') {
            this.onDataMessage_(data);
        }
    };
    Connection.prototype.onDataMessage_ = function (message) {
        this.onPrimaryResponse_();
        // We don't do anything with data messages, just kick them up a level
        this.onMessage_(message);
    };
    Connection.prototype.onPrimaryResponse_ = function () {
        if (!this.isHealthy_) {
            this.primaryResponsesRequired_--;
            if (this.primaryResponsesRequired_ <= 0) {
                this.log_('Primary connection is healthy.');
                this.isHealthy_ = true;
                this.conn_.markConnectionHealthy();
            }
        }
    };
    Connection.prototype.onControl_ = function (controlData) {
        var cmd = (0, _util.requireKey)(MESSAGE_TYPE, controlData);
        if (MESSAGE_DATA in controlData) {
            var payload = controlData[MESSAGE_DATA];
            if (cmd === SERVER_HELLO) {
                this.onHandshake_(payload);
            } else if (cmd === END_TRANSMISSION) {
                this.log_('recvd end transmission on primary');
                this.rx_ = this.secondaryConn_;
                for (var i = 0; i < this.pendingDataMessages.length; ++i) {
                    this.onDataMessage_(this.pendingDataMessages[i]);
                }
                this.pendingDataMessages = [];
                this.tryCleanupConnection();
            } else if (cmd === CONTROL_SHUTDOWN) {
                // This was previously the 'onKill' callback passed to the lower-level connection
                // payload in this case is the reason for the shutdown. Generally a human-readable error
                this.onConnectionShutdown_(payload);
            } else if (cmd === CONTROL_RESET) {
                // payload in this case is the host we should contact
                this.onReset_(payload);
            } else if (cmd === CONTROL_ERROR) {
                (0, _util.error)('Server Error: ' + payload);
            } else if (cmd === CONTROL_PONG) {
                this.log_('got pong on primary.');
                this.onPrimaryResponse_();
                this.sendPingOnPrimaryIfNecessary_();
            } else {
                (0, _util.error)('Unknown control packet command: ' + cmd);
            }
        }
    };
    /**
     *
     * @param {Object} handshake The handshake data returned from the server
     * @private
     */
    Connection.prototype.onHandshake_ = function (handshake) {
        var timestamp = handshake.ts;
        var version = handshake.v;
        var host = handshake.h;
        this.sessionId = handshake.s;
        this.repoInfo_.updateHost(host);
        // if we've already closed the connection, then don't bother trying to progress further
        if (this.state_ == 0 /* CONNECTING */) {
                this.conn_.start();
                this.onConnectionEstablished_(this.conn_, timestamp);
                if (_Constants.PROTOCOL_VERSION !== version) {
                    (0, _util.warn)('Protocol version mismatch detected');
                }
                // TODO: do we want to upgrade? when? maybe a delay?
                this.tryStartUpgrade_();
            }
    };
    Connection.prototype.tryStartUpgrade_ = function () {
        var conn = this.transportManager_.upgradeTransport();
        if (conn) {
            this.startUpgrade_(conn);
        }
    };
    Connection.prototype.startUpgrade_ = function (conn) {
        var _this = this;
        this.secondaryConn_ = new conn(this.nextTransportId_(), this.repoInfo_, this.sessionId);
        // For certain transports (WebSockets), we need to send and receive several messages back and forth before we
        // can consider the transport healthy.
        this.secondaryResponsesRequired_ = conn['responsesRequiredToBeHealthy'] || 0;
        var onMessage = this.connReceiver_(this.secondaryConn_);
        var onDisconnect = this.disconnReceiver_(this.secondaryConn_);
        this.secondaryConn_.open(onMessage, onDisconnect);
        // If we haven't successfully upgraded after UPGRADE_TIMEOUT, give up and kill the secondary.
        (0, _util.setTimeoutNonBlocking)(function () {
            if (_this.secondaryConn_) {
                _this.log_('Timed out trying to upgrade.');
                _this.secondaryConn_.close();
            }
        }, Math.floor(UPGRADE_TIMEOUT));
    };
    Connection.prototype.onReset_ = function (host) {
        this.log_('Reset packet received.  New host: ' + host);
        this.repoInfo_.updateHost(host);
        // TODO: if we're already "connected", we need to trigger a disconnect at the next layer up.
        // We don't currently support resets after the connection has already been established
        if (this.state_ === 1 /* CONNECTED */) {
                this.close();
            } else {
            // Close whatever connections we have open and start again.
            this.closeConnections_();
            this.start_();
        }
    };
    Connection.prototype.onConnectionEstablished_ = function (conn, timestamp) {
        var _this = this;
        this.log_('Realtime connection established.');
        this.conn_ = conn;
        this.state_ = 1 /* CONNECTED */;
        if (this.onReady_) {
            this.onReady_(timestamp, this.sessionId);
            this.onReady_ = null;
        }
        // If after 5 seconds we haven't sent enough requests to the server to get the connection healthy,
        // send some pings.
        if (this.primaryResponsesRequired_ === 0) {
            this.log_('Primary connection is healthy.');
            this.isHealthy_ = true;
        } else {
            (0, _util.setTimeoutNonBlocking)(function () {
                _this.sendPingOnPrimaryIfNecessary_();
            }, Math.floor(DELAY_BEFORE_SENDING_EXTRA_REQUESTS));
        }
    };
    Connection.prototype.sendPingOnPrimaryIfNecessary_ = function () {
        // If the connection isn't considered healthy yet, we'll send a noop ping packet request.
        if (!this.isHealthy_ && this.state_ === 1 /* CONNECTED */) {
                this.log_('sending ping on primary.');
                this.sendData_({ t: 'c', d: { t: PING, d: {} } });
            }
    };
    Connection.prototype.onSecondaryConnectionLost_ = function () {
        var conn = this.secondaryConn_;
        this.secondaryConn_ = null;
        if (this.tx_ === conn || this.rx_ === conn) {
            // we are relying on this connection already in some capacity. Therefore, a failure is real
            this.close();
        }
    };
    /**
     *
     * @param {boolean} everConnected Whether or not the connection ever reached a server. Used to determine if
     * we should flush the host cache
     * @private
     */
    Connection.prototype.onConnectionLost_ = function (everConnected) {
        this.conn_ = null;
        // NOTE: IF you're seeing a Firefox error for this line, I think it might be because it's getting
        // called on window close and RealtimeState.CONNECTING is no longer defined.  Just a guess.
        if (!everConnected && this.state_ === 0 /* CONNECTING */) {
                this.log_('Realtime connection failed.');
                // Since we failed to connect at all, clear any cached entry for this namespace in case the machine went away
                if (this.repoInfo_.isCacheableHost()) {
                    _storage.PersistentStorage.remove('host:' + this.repoInfo_.host);
                    // reset the internal host to what we would show the user, i.e. <ns>.firebaseio.com
                    this.repoInfo_.internalHost = this.repoInfo_.host;
                }
            } else if (this.state_ === 1 /* CONNECTED */) {
                this.log_('Realtime connection lost.');
            }
        this.close();
    };
    /**
     *
     * @param {string} reason
     * @private
     */
    Connection.prototype.onConnectionShutdown_ = function (reason) {
        this.log_('Connection shutdown command received. Shutting down...');
        if (this.onKill_) {
            this.onKill_(reason);
            this.onKill_ = null;
        }
        // We intentionally don't want to fire onDisconnect (kill is a different case),
        // so clear the callback.
        this.onDisconnect_ = null;
        this.close();
    };
    Connection.prototype.sendData_ = function (data) {
        if (this.state_ !== 1 /* CONNECTED */) {
                throw 'Connection is not connected';
            } else {
            this.tx_.send(data);
        }
    };
    /**
     * Cleans up this connection, calling the appropriate callbacks
     */
    Connection.prototype.close = function () {
        if (this.state_ !== 2 /* DISCONNECTED */) {
                this.log_('Closing realtime connection.');
                this.state_ = 2 /* DISCONNECTED */;
                this.closeConnections_();
                if (this.onDisconnect_) {
                    this.onDisconnect_();
                    this.onDisconnect_ = null;
                }
            }
    };
    /**
     *
     * @private
     */
    Connection.prototype.closeConnections_ = function () {
        this.log_('Shutting down all connections');
        if (this.conn_) {
            this.conn_.close();
            this.conn_ = null;
        }
        if (this.secondaryConn_) {
            this.secondaryConn_.close();
            this.secondaryConn_ = null;
        }
        if (this.healthyTimeout_) {
            clearTimeout(this.healthyTimeout_);
            this.healthyTimeout_ = null;
        }
    };
    return Connection;
}();
exports.Connection = Connection;
//# sourceMappingURL=Connection.js.map


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/*! @license Firebase v4.5.0
Build: rev-f49c8b5
Terms: https://firebase.google.com/terms/ */



Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.WebSocketConnection = undefined;
exports.setWebSocketImpl = setWebSocketImpl;

var _app = __webpack_require__(28);

var _app2 = _interopRequireDefault(_app);

var _assert = __webpack_require__(2);

var _util = __webpack_require__(3);

var _StatsManager = __webpack_require__(45);

var _Constants = __webpack_require__(40);

var _constants = __webpack_require__(42);

var _storage = __webpack_require__(38);

var _json = __webpack_require__(14);

var _environment = __webpack_require__(31);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var WEBSOCKET_MAX_FRAME_SIZE = 16384; /**
                                       * Copyright 2017 Google Inc.
                                       *
                                       * Licensed under the Apache License, Version 2.0 (the "License");
                                       * you may not use this file except in compliance with the License.
                                       * You may obtain a copy of the License at
                                       *
                                       *   http://www.apache.org/licenses/LICENSE-2.0
                                       *
                                       * Unless required by applicable law or agreed to in writing, software
                                       * distributed under the License is distributed on an "AS IS" BASIS,
                                       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                       * See the License for the specific language governing permissions and
                                       * limitations under the License.
                                       */

var WEBSOCKET_KEEPALIVE_INTERVAL = 45000;
var WebSocketImpl = null;
if (typeof MozWebSocket !== 'undefined') {
    WebSocketImpl = MozWebSocket;
} else if (typeof WebSocket !== 'undefined') {
    WebSocketImpl = WebSocket;
}
function setWebSocketImpl(impl) {
    WebSocketImpl = impl;
}
/**
 * Create a new websocket connection with the given callbacks.
 * @constructor
 * @implements {Transport}
 */
var WebSocketConnection = /** @class */function () {
    /**
     * @param {string} connId identifier for this transport
     * @param {RepoInfo} repoInfo The info for the websocket endpoint.
     * @param {string=} transportSessionId Optional transportSessionId if this is connecting to an existing transport
     *                                         session
     * @param {string=} lastSessionId Optional lastSessionId if there was a previous connection
     */
    function WebSocketConnection(connId, repoInfo, transportSessionId, lastSessionId) {
        this.connId = connId;
        this.keepaliveTimer = null;
        this.frames = null;
        this.totalFrames = 0;
        this.bytesSent = 0;
        this.bytesReceived = 0;
        this.log_ = (0, _util.logWrapper)(this.connId);
        this.stats_ = _StatsManager.StatsManager.getCollection(repoInfo);
        this.connURL = WebSocketConnection.connectionURL_(repoInfo, transportSessionId, lastSessionId);
    }
    /**
     * @param {RepoInfo} repoInfo The info for the websocket endpoint.
     * @param {string=} transportSessionId Optional transportSessionId if this is connecting to an existing transport
     *                                         session
     * @param {string=} lastSessionId Optional lastSessionId if there was a previous connection
     * @return {string} connection url
     * @private
     */
    WebSocketConnection.connectionURL_ = function (repoInfo, transportSessionId, lastSessionId) {
        var urlParams = {};
        urlParams[_Constants.VERSION_PARAM] = _Constants.PROTOCOL_VERSION;
        if (!(0, _environment.isNodeSdk)() && typeof location !== 'undefined' && location.href && location.href.indexOf(_Constants.FORGE_DOMAIN) !== -1) {
            urlParams[_Constants.REFERER_PARAM] = _Constants.FORGE_REF;
        }
        if (transportSessionId) {
            urlParams[_Constants.TRANSPORT_SESSION_PARAM] = transportSessionId;
        }
        if (lastSessionId) {
            urlParams[_Constants.LAST_SESSION_PARAM] = lastSessionId;
        }
        return repoInfo.connectionURL(_Constants.WEBSOCKET, urlParams);
    };
    /**
     *
     * @param onMessage Callback when messages arrive
     * @param onDisconnect Callback with connection lost.
     */
    WebSocketConnection.prototype.open = function (onMessage, onDisconnect) {
        var _this = this;
        this.onDisconnect = onDisconnect;
        this.onMessage = onMessage;
        this.log_('Websocket connecting to ' + this.connURL);
        this.everConnected_ = false;
        // Assume failure until proven otherwise.
        _storage.PersistentStorage.set('previous_websocket_failure', true);
        try {
            if ((0, _environment.isNodeSdk)()) {
                var device = _constants.CONSTANTS.NODE_ADMIN ? 'AdminNode' : 'Node';
                // UA Format: Firebase/<wire_protocol>/<sdk_version>/<platform>/<device>
                var options = {
                    headers: {
                        'User-Agent': "Firebase/" + _Constants.PROTOCOL_VERSION + "/" + _app2.default.SDK_VERSION + "/" + process.platform + "/" + device
                    }
                };
                // Plumb appropriate http_proxy environment variable into faye-websocket if it exists.
                var env = process['env'];
                var proxy = this.connURL.indexOf('wss://') == 0 ? env['HTTPS_PROXY'] || env['https_proxy'] : env['HTTP_PROXY'] || env['http_proxy'];
                if (proxy) {
                    options['proxy'] = { origin: proxy };
                }
                this.mySock = new WebSocketImpl(this.connURL, [], options);
            } else {
                this.mySock = new WebSocketImpl(this.connURL);
            }
        } catch (e) {
            this.log_('Error instantiating WebSocket.');
            var error = e.message || e.data;
            if (error) {
                this.log_(error);
            }
            this.onClosed_();
            return;
        }
        this.mySock.onopen = function () {
            _this.log_('Websocket connected.');
            _this.everConnected_ = true;
        };
        this.mySock.onclose = function () {
            _this.log_('Websocket connection was disconnected.');
            _this.mySock = null;
            _this.onClosed_();
        };
        this.mySock.onmessage = function (m) {
            _this.handleIncomingFrame(m);
        };
        this.mySock.onerror = function (e) {
            _this.log_('WebSocket error.  Closing connection.');
            var error = e.message || e.data;
            if (error) {
                _this.log_(error);
            }
            _this.onClosed_();
        };
    };
    /**
     * No-op for websockets, we don't need to do anything once the connection is confirmed as open
     */
    WebSocketConnection.prototype.start = function () {};
    WebSocketConnection.forceDisallow = function () {
        WebSocketConnection.forceDisallow_ = true;
    };
    WebSocketConnection.isAvailable = function () {
        var isOldAndroid = false;
        if (typeof navigator !== 'undefined' && navigator.userAgent) {
            var oldAndroidRegex = /Android ([0-9]{0,}\.[0-9]{0,})/;
            var oldAndroidMatch = navigator.userAgent.match(oldAndroidRegex);
            if (oldAndroidMatch && oldAndroidMatch.length > 1) {
                if (parseFloat(oldAndroidMatch[1]) < 4.4) {
                    isOldAndroid = true;
                }
            }
        }
        return !isOldAndroid && WebSocketImpl !== null && !WebSocketConnection.forceDisallow_;
    };
    /**
     * Returns true if we previously failed to connect with this transport.
     * @return {boolean}
     */
    WebSocketConnection.previouslyFailed = function () {
        // If our persistent storage is actually only in-memory storage,
        // we default to assuming that it previously failed to be safe.
        return _storage.PersistentStorage.isInMemoryStorage || _storage.PersistentStorage.get('previous_websocket_failure') === true;
    };
    WebSocketConnection.prototype.markConnectionHealthy = function () {
        _storage.PersistentStorage.remove('previous_websocket_failure');
    };
    WebSocketConnection.prototype.appendFrame_ = function (data) {
        this.frames.push(data);
        if (this.frames.length == this.totalFrames) {
            var fullMess = this.frames.join('');
            this.frames = null;
            var jsonMess = (0, _json.jsonEval)(fullMess);
            //handle the message
            this.onMessage(jsonMess);
        }
    };
    /**
     * @param {number} frameCount The number of frames we are expecting from the server
     * @private
     */
    WebSocketConnection.prototype.handleNewFrameCount_ = function (frameCount) {
        this.totalFrames = frameCount;
        this.frames = [];
    };
    /**
     * Attempts to parse a frame count out of some text. If it can't, assumes a value of 1
     * @param {!String} data
     * @return {?String} Any remaining data to be process, or null if there is none
     * @private
     */
    WebSocketConnection.prototype.extractFrameCount_ = function (data) {
        (0, _assert.assert)(this.frames === null, 'We already have a frame buffer');
        // TODO: The server is only supposed to send up to 9999 frames (i.e. length <= 4), but that isn't being enforced
        // currently.  So allowing larger frame counts (length <= 6).  See https://app.asana.com/0/search/8688598998380/8237608042508
        if (data.length <= 6) {
            var frameCount = Number(data);
            if (!isNaN(frameCount)) {
                this.handleNewFrameCount_(frameCount);
                return null;
            }
        }
        this.handleNewFrameCount_(1);
        return data;
    };
    /**
     * Process a websocket frame that has arrived from the server.
     * @param mess The frame data
     */
    WebSocketConnection.prototype.handleIncomingFrame = function (mess) {
        if (this.mySock === null) return; // Chrome apparently delivers incoming packets even after we .close() the connection sometimes.
        var data = mess['data'];
        this.bytesReceived += data.length;
        this.stats_.incrementCounter('bytes_received', data.length);
        this.resetKeepAlive();
        if (this.frames !== null) {
            // we're buffering
            this.appendFrame_(data);
        } else {
            // try to parse out a frame count, otherwise, assume 1 and process it
            var remainingData = this.extractFrameCount_(data);
            if (remainingData !== null) {
                this.appendFrame_(remainingData);
            }
        }
    };
    /**
     * Send a message to the server
     * @param {Object} data The JSON object to transmit
     */
    WebSocketConnection.prototype.send = function (data) {
        this.resetKeepAlive();
        var dataStr = (0, _json.stringify)(data);
        this.bytesSent += dataStr.length;
        this.stats_.incrementCounter('bytes_sent', dataStr.length);
        //We can only fit a certain amount in each websocket frame, so we need to split this request
        //up into multiple pieces if it doesn't fit in one request.
        var dataSegs = (0, _util.splitStringBySize)(dataStr, WEBSOCKET_MAX_FRAME_SIZE);
        //Send the length header
        if (dataSegs.length > 1) {
            this.sendString_(String(dataSegs.length));
        }
        //Send the actual data in segments.
        for (var i = 0; i < dataSegs.length; i++) {
            this.sendString_(dataSegs[i]);
        }
    };
    WebSocketConnection.prototype.shutdown_ = function () {
        this.isClosed_ = true;
        if (this.keepaliveTimer) {
            clearInterval(this.keepaliveTimer);
            this.keepaliveTimer = null;
        }
        if (this.mySock) {
            this.mySock.close();
            this.mySock = null;
        }
    };
    WebSocketConnection.prototype.onClosed_ = function () {
        if (!this.isClosed_) {
            this.log_('WebSocket is closing itself');
            this.shutdown_();
            // since this is an internal close, trigger the close listener
            if (this.onDisconnect) {
                this.onDisconnect(this.everConnected_);
                this.onDisconnect = null;
            }
        }
    };
    /**
     * External-facing close handler.
     * Close the websocket and kill the connection.
     */
    WebSocketConnection.prototype.close = function () {
        if (!this.isClosed_) {
            this.log_('WebSocket is being closed');
            this.shutdown_();
        }
    };
    /**
     * Kill the current keepalive timer and start a new one, to ensure that it always fires N seconds after
     * the last activity.
     */
    WebSocketConnection.prototype.resetKeepAlive = function () {
        var _this = this;
        clearInterval(this.keepaliveTimer);
        this.keepaliveTimer = setInterval(function () {
            //If there has been no websocket activity for a while, send a no-op
            if (_this.mySock) {
                _this.sendString_('0');
            }
            _this.resetKeepAlive();
        }, Math.floor(WEBSOCKET_KEEPALIVE_INTERVAL));
    };
    /**
     * Send a string over the websocket.
     *
     * @param {string} str String to send.
     * @private
     */
    WebSocketConnection.prototype.sendString_ = function (str) {
        // Firefox seems to sometimes throw exceptions (NS_ERROR_UNEXPECTED) from websocket .send()
        // calls for some unknown reason.  We treat these as an error and disconnect.
        // See https://app.asana.com/0/58926111402292/68021340250410
        try {
            this.mySock.send(str);
        } catch (e) {
            this.log_('Exception thrown from WebSocket.send():', e.message || e.data, 'Closing connection.');
            setTimeout(this.onClosed_.bind(this), 0);
        }
    };
    /**
     * Number of response before we consider the connection "healthy."
     * @type {number}
     */
    WebSocketConnection.responsesRequiredToBeHealthy = 2;
    /**
     * Time to wait for the connection te become healthy before giving up.
     * @type {number}
     */
    WebSocketConnection.healthyTimeout = 30000;
    return WebSocketConnection;
}();
exports.WebSocketConnection = WebSocketConnection;
//# sourceMappingURL=WebSocketConnection.js.map

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)))

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*! @license Firebase v4.5.0
Build: rev-f49c8b5
Terms: https://firebase.google.com/terms/ */



Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.deepCopy = deepCopy;
exports.deepExtend = deepExtend;
exports.patchProperty = patchProperty;
/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Do a deep-copy of basic JavaScript Objects or Arrays.
 */
function deepCopy(value) {
    return deepExtend(undefined, value);
}
/**
 * Copy properties from source to target (recursively allows extension
 * of Objects and Arrays).  Scalar values in the target are over-written.
 * If target is undefined, an object of the appropriate type will be created
 * (and returned).
 *
 * We recursively copy all child properties of plain Objects in the source- so
 * that namespace- like dictionaries are merged.
 *
 * Note that the target can be a function, in which case the properties in
 * the source Object are copied onto it as static properties of the Function.
 */
function deepExtend(target, source) {
    if (!(source instanceof Object)) {
        return source;
    }
    switch (source.constructor) {
        case Date:
            // Treat Dates like scalars; if the target date object had any child
            // properties - they will be lost!
            var dateValue = source;
            return new Date(dateValue.getTime());
        case Object:
            if (target === undefined) {
                target = {};
            }
            break;
        case Array:
            // Always copy the array source and overwrite the target.
            target = [];
            break;
        default:
            // Not a plain Object - treat it as a scalar.
            return source;
    }
    for (var prop in source) {
        if (!source.hasOwnProperty(prop)) {
            continue;
        }
        target[prop] = deepExtend(target[prop], source[prop]);
    }
    return target;
}
// TODO: Really needed (for JSCompiler type checking)?
function patchProperty(obj, prop, value) {
    obj[prop] = value;
}
//# sourceMappingURL=deep_copy.js.map


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*! @license Firebase v4.5.0
Build: rev-f49c8b5
Terms: https://firebase.google.com/terms/ */



Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var scope;
if (typeof global !== 'undefined') {
    scope = global;
} else if (typeof self !== 'undefined') {
    scope = self;
} else {
    try {
        scope = Function('return this')();
    } catch (e) {
        throw new Error('polyfill failed because global object is unavailable in this environment');
    }
}
var globalScope = exports.globalScope = scope;
//# sourceMappingURL=globalScope.js.map

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)))

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*! @license Firebase v4.5.0
Build: rev-f49c8b5
Terms: https://firebase.google.com/terms/ */



Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.createSubscribe = createSubscribe;
exports.async = async;

var _promise = __webpack_require__(29);

/**
 * Helper to make a Subscribe function (just like Promise helps make a
 * Thenable).
 *
 * @param executor Function which can make calls to a single Observer
 *     as a proxy.
 * @param onNoObservers Callback when count of Observers goes to zero.
 */
function createSubscribe(executor, onNoObservers) {
    var proxy = new ObserverProxy(executor, onNoObservers);
    return proxy.subscribe.bind(proxy);
}
/**
 * Implement fan-out for any number of Observers attached via a subscribe
 * function.
 */
var ObserverProxy = /** @class */function () {
    /**
     * @param executor Function which can make calls to a single Observer
     *     as a proxy.
     * @param onNoObservers Callback when count of Observers goes to zero.
     */
    function ObserverProxy(executor, onNoObservers) {
        var _this = this;
        this.observers = [];
        this.unsubscribes = [];
        this.observerCount = 0;
        // Micro-task scheduling by calling task.then().
        this.task = _promise.PromiseImpl.resolve();
        this.finalized = false;
        this.onNoObservers = onNoObservers;
        // Call the executor asynchronously so subscribers that are called
        // synchronously after the creation of the subscribe function
        // can still receive the very first value generated in the executor.
        this.task.then(function () {
            executor(_this);
        }).catch(function (e) {
            _this.error(e);
        });
    }
    ObserverProxy.prototype.next = function (value) {
        this.forEachObserver(function (observer) {
            observer.next(value);
        });
    };
    ObserverProxy.prototype.error = function (error) {
        this.forEachObserver(function (observer) {
            observer.error(error);
        });
        this.close(error);
    };
    ObserverProxy.prototype.complete = function () {
        this.forEachObserver(function (observer) {
            observer.complete();
        });
        this.close();
    };
    /**
     * Subscribe function that can be used to add an Observer to the fan-out list.
     *
     * - We require that no event is sent to a subscriber sychronously to their
     *   call to subscribe().
     */
    ObserverProxy.prototype.subscribe = function (nextOrObserver, error, complete) {
        var _this = this;
        var observer;
        if (nextOrObserver === undefined && error === undefined && complete === undefined) {
            throw new Error('Missing Observer.');
        }
        // Assemble an Observer object when passed as callback functions.
        if (implementsAnyMethods(nextOrObserver, ['next', 'error', 'complete'])) {
            observer = nextOrObserver;
        } else {
            observer = {
                next: nextOrObserver,
                error: error,
                complete: complete
            };
        }
        if (observer.next === undefined) {
            observer.next = noop;
        }
        if (observer.error === undefined) {
            observer.error = noop;
        }
        if (observer.complete === undefined) {
            observer.complete = noop;
        }
        var unsub = this.unsubscribeOne.bind(this, this.observers.length);
        // Attempt to subscribe to a terminated Observable - we
        // just respond to the Observer with the final error or complete
        // event.
        if (this.finalized) {
            this.task.then(function () {
                try {
                    if (_this.finalError) {
                        observer.error(_this.finalError);
                    } else {
                        observer.complete();
                    }
                } catch (e) {
                    // nothing
                }
                return;
            });
        }
        this.observers.push(observer);
        return unsub;
    };
    // Unsubscribe is synchronous - we guarantee that no events are sent to
    // any unsubscribed Observer.
    ObserverProxy.prototype.unsubscribeOne = function (i) {
        if (this.observers === undefined || this.observers[i] === undefined) {
            return;
        }
        delete this.observers[i];
        this.observerCount -= 1;
        if (this.observerCount === 0 && this.onNoObservers !== undefined) {
            this.onNoObservers(this);
        }
    };
    ObserverProxy.prototype.forEachObserver = function (fn) {
        if (this.finalized) {
            // Already closed by previous event....just eat the additional values.
            return;
        }
        // Since sendOne calls asynchronously - there is no chance that
        // this.observers will become undefined.
        for (var i = 0; i < this.observers.length; i++) {
            this.sendOne(i, fn);
        }
    };
    // Call the Observer via one of it's callback function. We are careful to
    // confirm that the observe has not been unsubscribed since this asynchronous
    // function had been queued.
    ObserverProxy.prototype.sendOne = function (i, fn) {
        var _this = this;
        // Execute the callback asynchronously
        this.task.then(function () {
            if (_this.observers !== undefined && _this.observers[i] !== undefined) {
                try {
                    fn(_this.observers[i]);
                } catch (e) {
                    // Ignore exceptions raised in Observers or missing methods of an
                    // Observer.
                    // Log error to console. b/31404806
                    if (typeof console !== 'undefined' && console.error) {
                        console.error(e);
                    }
                }
            }
        });
    };
    ObserverProxy.prototype.close = function (err) {
        var _this = this;
        if (this.finalized) {
            return;
        }
        this.finalized = true;
        if (err !== undefined) {
            this.finalError = err;
        }
        // Proxy is no longer needed - garbage collect references
        this.task.then(function () {
            _this.observers = undefined;
            _this.onNoObservers = undefined;
        });
    };
    return ObserverProxy;
}();
/** Turn synchronous function into one called asynchronously. */
function async(fn, onError) {
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        _promise.PromiseImpl.resolve(true).then(function () {
            fn.apply(void 0, args);
        }).catch(function (error) {
            if (onError) {
                onError(error);
            }
        });
    };
}
/**
 * Return true if the object passed in implements any of the named methods.
 */
function implementsAnyMethods(obj, methods) {
    if ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) !== 'object' || obj === null) {
        return false;
    }
    for (var _i = 0, methods_1 = methods; _i < methods_1.length; _i++) {
        var method = methods_1[_i];
        if (method in obj && typeof obj[method] === 'function') {
            return true;
        }
    }
    return false;
}
function noop() {
    // do nothing
}
//# sourceMappingURL=subscribe.js.map


/***/ }),
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/*! @license Firebase v4.5.0
Build: rev-f49c8b5
Terms: https://firebase.google.com/terms/ */

var firebase = __webpack_require__(28);
(function(){(function(){var h,aa=aa||{},k=this,ba=function(a){return void 0!==a},m=function(a){return"string"==typeof a},ca=function(a){return"boolean"==typeof a},da=function(){},ea=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";
if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";else if("function"==b&&"undefined"==typeof a.call)return"object";return b},fa=function(a){return null===a},ha=function(a){return"array"==ea(a)},ia=function(a){var b=ea(a);return"array"==b||"object"==b&&"number"==typeof a.length},p=function(a){return"function"==ea(a)},q=function(a){var b=typeof a;return"object"==b&&null!=a||"function"==
b},ja=function(a,b,c){return a.call.apply(a.bind,arguments)},ka=function(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}},r=function(a,b,c){r=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ja:ka;return r.apply(null,arguments)},la=function(a,b){var c=
Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}},ma=Date.now||function(){return+new Date},t=function(a,b){function c(){}c.prototype=b.prototype;a.Vc=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Ng=function(a,c,f){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];return b.prototype[c].apply(a,d)}};var u=function(a){if(Error.captureStackTrace)Error.captureStackTrace(this,u);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))};t(u,Error);u.prototype.name="CustomError";var na=function(a,b){for(var c=a.split("%s"),d="",e=Array.prototype.slice.call(arguments,1);e.length&&1<c.length;)d+=c.shift()+e.shift();return d+c.join("%s")},oa=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")},wa=function(a){if(!pa.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(qa,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(ra,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(sa,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(ta,"&quot;"));-1!=a.indexOf("'")&&
(a=a.replace(ua,"&#39;"));-1!=a.indexOf("\x00")&&(a=a.replace(va,"&#0;"));return a},qa=/&/g,ra=/</g,sa=/>/g,ta=/"/g,ua=/'/g,va=/\x00/g,pa=/[\x00&<>"']/,v=function(a,b){return-1!=a.indexOf(b)},xa=function(a,b){return a<b?-1:a>b?1:0};var ya=function(a,b){b.unshift(a);u.call(this,na.apply(null,b));b.shift()};t(ya,u);ya.prototype.name="AssertionError";
var za=function(a,b,c,d){var e="Assertion failed";if(c){e+=": "+c;var f=d}else a&&(e+=": "+a,f=b);throw new ya(""+e,f||[]);},w=function(a,b,c){a||za("",null,b,Array.prototype.slice.call(arguments,2));return a},Aa=function(a,b){throw new ya("Failure"+(a?": "+a:""),Array.prototype.slice.call(arguments,1));},Ba=function(a,b,c){"number"==typeof a||za("Expected number but got %s: %s.",[ea(a),a],b,Array.prototype.slice.call(arguments,2));return a},Ca=function(a,b,c){m(a)||za("Expected string but got %s: %s.",
[ea(a),a],b,Array.prototype.slice.call(arguments,2))},Da=function(a,b,c){p(a)||za("Expected function but got %s: %s.",[ea(a),a],b,Array.prototype.slice.call(arguments,2))};var Fa=function(){this.Uc="";this.gf=Ea};Fa.prototype.qb=!0;Fa.prototype.ob=function(){return this.Uc};Fa.prototype.toString=function(){return"Const{"+this.Uc+"}"};var Ga=function(a){if(a instanceof Fa&&a.constructor===Fa&&a.gf===Ea)return a.Uc;Aa("expected object of type Const, got '"+a+"'");return"type_error:Const"},Ea={},Ha=function(a){var b=new Fa;b.Uc=a;return b};Ha("");var Ja=function(){this.Mc="";this.hf=Ia};Ja.prototype.qb=!0;Ja.prototype.ob=function(){return this.Mc};Ja.prototype.toString=function(){return"TrustedResourceUrl{"+this.Mc+"}"};
var Ka=function(a){if(a instanceof Ja&&a.constructor===Ja&&a.hf===Ia)return a.Mc;Aa("expected object of type TrustedResourceUrl, got '"+a+"' of type "+ea(a));return"type_error:TrustedResourceUrl"},Ma=function(a,b){a=La(a,b);b=new Ja;b.Mc=a;return b},La=function(a,b){var c=Ga(a);if(!Na.test(c))throw Error("Invalid TrustedResourceUrl format: "+c);return c.replace(Oa,function(a,e){if(!Object.prototype.hasOwnProperty.call(b,e))throw Error('Found marker, "'+e+'", in format string, "'+c+'", but no valid label mapping found in args: '+
JSON.stringify(b));a=b[e];return a instanceof Fa?Ga(a):encodeURIComponent(String(a))})},Oa=/%{(\w+)}/g,Na=/^(?:https:)?\/\/[0-9a-z.:[\]-]+\/|^\/[^\/\\]|^about:blank(#|$)/i,Ia={};var Pa=Array.prototype.indexOf?function(a,b,c){w(null!=a.length);return Array.prototype.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;if(m(a))return m(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},x=Array.prototype.forEach?function(a,b,c){w(null!=a.length);Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=m(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},Qa=function(a,b){for(var c=m(a)?
a.split(""):a,d=a.length-1;0<=d;--d)d in c&&b.call(void 0,c[d],d,a)},Ra=Array.prototype.map?function(a,b,c){w(null!=a.length);return Array.prototype.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),f=m(a)?a.split(""):a,g=0;g<d;g++)g in f&&(e[g]=b.call(c,f[g],g,a));return e},Sa=Array.prototype.some?function(a,b,c){w(null!=a.length);return Array.prototype.some.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=m(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return!0;return!1},
Ua=function(a){a:{var b=Ta;for(var c=a.length,d=m(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a}b=-1}return 0>b?null:m(a)?a.charAt(b):a[b]},Va=function(a,b){return 0<=Pa(a,b)},Xa=function(a,b){b=Pa(a,b);var c;(c=0<=b)&&Wa(a,b);return c},Wa=function(a,b){w(null!=a.length);return 1==Array.prototype.splice.call(a,b,1).length},Ya=function(a,b){var c=0;Qa(a,function(d,e){b.call(void 0,d,e,a)&&Wa(a,e)&&c++})},Za=function(a){return Array.prototype.concat.apply([],arguments)},
$a=function(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]};var ab=function(a){return Ra(a,function(a){a=a.toString(16);return 1<a.length?a:"0"+a}).join("")};var bb;a:{var cb=k.navigator;if(cb){var db=cb.userAgent;if(db){bb=db;break a}}bb=""}var y=function(a){return v(bb,a)};var eb=function(a,b){for(var c in a)b.call(void 0,a[c],c,a)},fb=function(a,b){for(var c in a)if(b.call(void 0,a[c],c,a))return!0;return!1},gb=function(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b},hb=function(a){var b=[],c=0,d;for(d in a)b[c++]=d;return b},ib=function(a){for(var b in a)return!1;return!0},jb=function(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(c in b)if(!(c in a))return!1;return!0},kb=function(a){var b={},c;for(c in a)b[c]=a[c];return b},lb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "),
mb=function(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<lb.length;f++)c=lb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}};var nb=function(a){nb[" "](a);return a};nb[" "]=da;var pb=function(a,b){var c=ob;return Object.prototype.hasOwnProperty.call(c,a)?c[a]:c[a]=b(a)};var qb=y("Opera"),z=y("Trident")||y("MSIE"),rb=y("Edge"),sb=rb||z,tb=y("Gecko")&&!(v(bb.toLowerCase(),"webkit")&&!y("Edge"))&&!(y("Trident")||y("MSIE"))&&!y("Edge"),ub=v(bb.toLowerCase(),"webkit")&&!y("Edge"),vb=function(){var a=k.document;return a?a.documentMode:void 0},wb;
a:{var xb="",yb=function(){var a=bb;if(tb)return/rv\:([^\);]+)(\)|;)/.exec(a);if(rb)return/Edge\/([\d\.]+)/.exec(a);if(z)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(ub)return/WebKit\/(\S+)/.exec(a);if(qb)return/(?:Version)[ \/]?(\S+)/.exec(a)}();yb&&(xb=yb?yb[1]:"");if(z){var Ab=vb();if(null!=Ab&&Ab>parseFloat(xb)){wb=String(Ab);break a}}wb=xb}
var Bb=wb,ob={},A=function(a){return pb(a,function(){for(var b=0,c=oa(String(Bb)).split("."),d=oa(String(a)).split("."),e=Math.max(c.length,d.length),f=0;0==b&&f<e;f++){var g=c[f]||"",l=d[f]||"";do{g=/(\d*)(\D*)(.*)/.exec(g)||["","","",""];l=/(\d*)(\D*)(.*)/.exec(l)||["","","",""];if(0==g[0].length&&0==l[0].length)break;b=xa(0==g[1].length?0:parseInt(g[1],10),0==l[1].length?0:parseInt(l[1],10))||xa(0==g[2].length,0==l[2].length)||xa(g[2],l[2]);g=g[3];l=l[3]}while(0==b)}return 0<=b})},Cb;var Db=k.document;
Cb=Db&&z?vb()||("CSS1Compat"==Db.compatMode?parseInt(Bb,10):5):void 0;var Eb=null,Fb=null,Hb=function(a){var b="";Gb(a,function(a){b+=String.fromCharCode(a)});return b},Gb=function(a,b){function c(b){for(;d<a.length;){var c=a.charAt(d++),e=Fb[c];if(null!=e)return e;if(!/^[\s\xa0]*$/.test(c))throw Error("Unknown base64 encoding at char: "+c);}return b}Ib();for(var d=0;;){var e=c(-1),f=c(0),g=c(64),l=c(64);if(64===l&&-1===e)break;b(e<<2|f>>4);64!=g&&(b(f<<4&240|g>>2),64!=l&&b(g<<6&192|l))}},Ib=function(){if(!Eb){Eb={};Fb={};for(var a=0;65>a;a++)Eb[a]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(a),
Fb[Eb[a]]=a,62<=a&&(Fb["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(a)]=a)}};var Jb=function(){this.Da=-1};var Mb=function(a,b){this.Da=-1;this.Da=64;this.rc=k.Uint8Array?new Uint8Array(this.Da):Array(this.Da);this.Yc=this.rb=0;this.l=[];this.$f=a;this.Ee=b;this.Bg=k.Int32Array?new Int32Array(64):Array(64);ba(Kb)||(Kb=k.Int32Array?new Int32Array(Lb):Lb);this.reset()},Kb;t(Mb,Jb);for(var Nb=[],Ob=0;63>Ob;Ob++)Nb[Ob]=0;var Pb=Za(128,Nb);Mb.prototype.reset=function(){this.Yc=this.rb=0;this.l=k.Int32Array?new Int32Array(this.Ee):$a(this.Ee)};
var Qb=function(a){var b=a.rc;w(b.length==a.Da);for(var c=a.Bg,d=0,e=0;e<b.length;)c[d++]=b[e]<<24|b[e+1]<<16|b[e+2]<<8|b[e+3],e=4*d;for(b=16;64>b;b++){e=c[b-15]|0;d=c[b-2]|0;var f=(c[b-16]|0)+((e>>>7|e<<25)^(e>>>18|e<<14)^e>>>3)|0,g=(c[b-7]|0)+((d>>>17|d<<15)^(d>>>19|d<<13)^d>>>10)|0;c[b]=f+g|0}d=a.l[0]|0;e=a.l[1]|0;var l=a.l[2]|0,n=a.l[3]|0,F=a.l[4]|0,zb=a.l[5]|0,hc=a.l[6]|0;f=a.l[7]|0;for(b=0;64>b;b++){var vi=((d>>>2|d<<30)^(d>>>13|d<<19)^(d>>>22|d<<10))+(d&e^d&l^e&l)|0;g=F&zb^~F&hc;f=f+((F>>>
6|F<<26)^(F>>>11|F<<21)^(F>>>25|F<<7))|0;g=g+(Kb[b]|0)|0;g=f+(g+(c[b]|0)|0)|0;f=hc;hc=zb;zb=F;F=n+g|0;n=l;l=e;e=d;d=g+vi|0}a.l[0]=a.l[0]+d|0;a.l[1]=a.l[1]+e|0;a.l[2]=a.l[2]+l|0;a.l[3]=a.l[3]+n|0;a.l[4]=a.l[4]+F|0;a.l[5]=a.l[5]+zb|0;a.l[6]=a.l[6]+hc|0;a.l[7]=a.l[7]+f|0};
Mb.prototype.update=function(a,b){ba(b)||(b=a.length);var c=0,d=this.rb;if(m(a))for(;c<b;)this.rc[d++]=a.charCodeAt(c++),d==this.Da&&(Qb(this),d=0);else if(ia(a))for(;c<b;){var e=a[c++];if(!("number"==typeof e&&0<=e&&255>=e&&e==(e|0)))throw Error("message must be a byte array");this.rc[d++]=e;d==this.Da&&(Qb(this),d=0)}else throw Error("message must be string or array");this.rb=d;this.Yc+=b};
Mb.prototype.digest=function(){var a=[],b=8*this.Yc;56>this.rb?this.update(Pb,56-this.rb):this.update(Pb,this.Da-(this.rb-56));for(var c=63;56<=c;c--)this.rc[c]=b&255,b/=256;Qb(this);for(c=b=0;c<this.$f;c++)for(var d=24;0<=d;d-=8)a[b++]=this.l[c]>>d&255;return a};
var Lb=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,
4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298];var Sb=function(){Mb.call(this,8,Rb)};t(Sb,Mb);var Rb=[1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225];var Tb=Object.freeze||function(a){return a};var Ub=function(){this.Ma=this.Ma;this.Jc=this.Jc};Ub.prototype.Ma=!1;Ub.prototype.isDisposed=function(){return this.Ma};Ub.prototype.lb=function(){if(this.Jc)for(;this.Jc.length;)this.Jc.shift()()};var Vb=!z||9<=Number(Cb),Wb=z&&!A("9");!ub||A("528");tb&&A("1.9b")||z&&A("8")||qb&&A("9.5")||ub&&A("528");tb&&!A("8")||z&&A("9");var Xb=function(){if(!k.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});k.addEventListener("test",da,b);k.removeEventListener("test",da,b);return a}();var B=function(a,b){this.type=a;this.currentTarget=this.target=b;this.defaultPrevented=this.Wa=!1;this.Se=!0};B.prototype.stopPropagation=function(){this.Wa=!0};B.prototype.preventDefault=function(){this.defaultPrevented=!0;this.Se=!1};var Yb=function(a,b){B.call(this,a?a.type:"");this.relatedTarget=this.currentTarget=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=this.offsetY=this.offsetX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.P=null;a&&this.init(a,b)};t(Yb,B);var Zb=Tb({2:"touch",3:"pen",4:"mouse"});
Yb.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.currentTarget=b;if(b=a.relatedTarget){if(tb){a:{try{nb(b.nodeName);var e=!0;break a}catch(f){}e=!1}e||(b=null)}}else"mouseover"==c?b=a.fromElement:"mouseout"==c&&(b=a.toElement);this.relatedTarget=b;null===d?(this.offsetX=ub||void 0!==a.offsetX?a.offsetX:a.layerX,this.offsetY=ub||void 0!==a.offsetY?a.offsetY:a.layerY,this.clientX=void 0!==a.clientX?a.clientX:a.pageX,
this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0):(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType=
m(a.pointerType)?a.pointerType:Zb[a.pointerType]||"";this.state=a.state;this.P=a;a.defaultPrevented&&this.preventDefault()};Yb.prototype.stopPropagation=function(){Yb.Vc.stopPropagation.call(this);this.P.stopPropagation?this.P.stopPropagation():this.P.cancelBubble=!0};Yb.prototype.preventDefault=function(){Yb.Vc.preventDefault.call(this);var a=this.P;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,Wb)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};
Yb.prototype.Ef=function(){return this.P};var $b="closure_listenable_"+(1E6*Math.random()|0),ac=0;var bc=function(a,b,c,d,e){this.listener=a;this.Nc=null;this.src=b;this.type=c;this.capture=!!d;this.wc=e;this.key=++ac;this.Bb=this.qc=!1},cc=function(a){a.Bb=!0;a.listener=null;a.Nc=null;a.src=null;a.wc=null};var dc=function(a){this.src=a;this.I={};this.kc=0};dc.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.I[f];a||(a=this.I[f]=[],this.kc++);var g=ec(a,b,d,e);-1<g?(b=a[g],c||(b.qc=!1)):(b=new bc(b,this.src,f,!!d,e),b.qc=c,a.push(b));return b};dc.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.I))return!1;var e=this.I[a];b=ec(e,b,c,d);return-1<b?(cc(e[b]),Wa(e,b),0==e.length&&(delete this.I[a],this.kc--),!0):!1};
var fc=function(a,b){var c=b.type;c in a.I&&Xa(a.I[c],b)&&(cc(b),0==a.I[c].length&&(delete a.I[c],a.kc--))};dc.prototype.td=function(a,b,c,d){a=this.I[a.toString()];var e=-1;a&&(e=ec(a,b,c,d));return-1<e?a[e]:null};dc.prototype.hasListener=function(a,b){var c=ba(a),d=c?a.toString():"",e=ba(b);return fb(this.I,function(a){for(var f=0;f<a.length;++f)if(!(c&&a[f].type!=d||e&&a[f].capture!=b))return!0;return!1})};
var ec=function(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.Bb&&f.listener==b&&f.capture==!!c&&f.wc==d)return e}return-1};var gc="closure_lm_"+(1E6*Math.random()|0),ic={},jc=0,lc=function(a,b,c,d,e){if(d&&d.once)kc(a,b,c,d,e);else if(ha(b))for(var f=0;f<b.length;f++)lc(a,b[f],c,d,e);else c=mc(c),a&&a[$b]?a.listen(b,c,q(d)?!!d.capture:!!d,e):nc(a,b,c,!1,d,e)},nc=function(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=q(e)?!!e.capture:!!e,l=oc(a);l||(a[gc]=l=new dc(a));c=l.add(b,c,d,g,f);if(!c.Nc){d=pc();c.Nc=d;d.src=a;d.listener=c;if(a.addEventListener)Xb||(e=g),void 0===e&&(e=!1),a.addEventListener(b.toString(),
d,e);else if(a.attachEvent)a.attachEvent(qc(b.toString()),d);else throw Error("addEventListener and attachEvent are unavailable.");jc++}},pc=function(){var a=rc,b=Vb?function(c){return a.call(b.src,b.listener,c)}:function(c){c=a.call(b.src,b.listener,c);if(!c)return c};return b},kc=function(a,b,c,d,e){if(ha(b))for(var f=0;f<b.length;f++)kc(a,b[f],c,d,e);else c=mc(c),a&&a[$b]?sc(a,b,c,q(d)?!!d.capture:!!d,e):nc(a,b,c,!0,d,e)},tc=function(a,b,c,d,e){if(ha(b))for(var f=0;f<b.length;f++)tc(a,b[f],c,d,
e);else d=q(d)?!!d.capture:!!d,c=mc(c),a&&a[$b]?a.ga.remove(String(b),c,d,e):a&&(a=oc(a))&&(b=a.td(b,c,d,e))&&uc(b)},uc=function(a){if("number"!=typeof a&&a&&!a.Bb){var b=a.src;if(b&&b[$b])fc(b.ga,a);else{var c=a.type,d=a.Nc;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent&&b.detachEvent(qc(c),d);jc--;(c=oc(b))?(fc(c,a),0==c.kc&&(c.src=null,b[gc]=null)):cc(a)}}},qc=function(a){return a in ic?ic[a]:ic[a]="on"+a},wc=function(a,b,c,d){var e=!0;if(a=oc(a))if(b=a.I[b.toString()])for(b=
b.concat(),a=0;a<b.length;a++){var f=b[a];f&&f.capture==c&&!f.Bb&&(f=vc(f,d),e=e&&!1!==f)}return e},vc=function(a,b){var c=a.listener,d=a.wc||a.src;a.qc&&uc(a);return c.call(d,b)},rc=function(a,b){if(a.Bb)return!0;if(!Vb){if(!b)a:{b=["window","event"];for(var c=k,d=0;d<b.length;d++)if(c=c[b[d]],null==c){b=null;break a}b=c}d=b;b=new Yb(d,this);c=!0;if(!(0>d.keyCode||void 0!=d.returnValue)){a:{var e=!1;if(0==d.keyCode)try{d.keyCode=-1;break a}catch(g){e=!0}if(e||void 0==d.returnValue)d.returnValue=
!0}d=[];for(e=b.currentTarget;e;e=e.parentNode)d.push(e);a=a.type;for(e=d.length-1;!b.Wa&&0<=e;e--){b.currentTarget=d[e];var f=wc(d[e],a,!0,b);c=c&&f}for(e=0;!b.Wa&&e<d.length;e++)b.currentTarget=d[e],f=wc(d[e],a,!1,b),c=c&&f}return c}return vc(a,new Yb(b,this))},oc=function(a){a=a[gc];return a instanceof dc?a:null},xc="__closure_events_fn_"+(1E9*Math.random()>>>0),mc=function(a){w(a,"Listener can not be null.");if(p(a))return a;w(a.handleEvent,"An object listener must have handleEvent method.");
a[xc]||(a[xc]=function(b){return a.handleEvent(b)});return a[xc]};var yc=/^[+a-zA-Z0-9_.!#$%&'*\/=?^`{|}~-]+@([a-zA-Z0-9-]+\.)+[a-zA-Z0-9]{2,63}$/;var Ac=function(){this.xa="";this.ff=zc};Ac.prototype.qb=!0;Ac.prototype.ob=function(){return this.xa};Ac.prototype.toString=function(){return"SafeUrl{"+this.xa+"}"};
var Bc=function(a){if(a instanceof Ac&&a.constructor===Ac&&a.ff===zc)return a.xa;Aa("expected object of type SafeUrl, got '"+a+"' of type "+ea(a));return"type_error:SafeUrl"},Cc=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,Ec=function(a){if(a instanceof Ac)return a;a=a.qb?a.ob():String(a);Cc.test(a)||(a="about:invalid#zClosurez");return Dc(a)},zc={},Dc=function(a){var b=new Ac;b.xa=a;return b};Dc("about:blank");var Hc=function(a){var b=[];Fc(new Gc,a,b);return b.join("")},Gc=function(){this.Oc=void 0},Fc=function(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(ha(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),e=d[f],Fc(a,a.Oc?a.Oc.call(d,String(f),e):e,c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");f="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(e=b[d],"function"!=typeof e&&(c.push(f),
Ic(d,c),c.push(":"),Fc(a,a.Oc?a.Oc.call(b,d,e):e,c),f=","));c.push("}");return}}switch(typeof b){case "string":Ic(b,c);break;case "number":c.push(isFinite(b)&&!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}},Jc={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},Kc=/\uffff/.test("\uffff")?/[\\\"\x00-\x1f\x7f-\uffff]/g:/[\\\"\x00-\x1f\x7f-\xff]/g,
Ic=function(a,b){b.push('"',a.replace(Kc,function(a){var b=Jc[a];b||(b="\\u"+(a.charCodeAt(0)|65536).toString(16).substr(1),Jc[a]=b);return b}),'"')};var Lc=function(){};Lc.prototype.ie=null;var Mc=function(a){return a.ie||(a.ie=a.Cd())};var Nc,Oc=function(){};t(Oc,Lc);Oc.prototype.sc=function(){var a=Pc(this);return a?new ActiveXObject(a):new XMLHttpRequest};Oc.prototype.Cd=function(){var a={};Pc(this)&&(a[0]=!0,a[1]=!0);return a};
var Pc=function(a){if(!a.De&&"undefined"==typeof XMLHttpRequest&&"undefined"!=typeof ActiveXObject){for(var b=["MSXML2.XMLHTTP.6.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"],c=0;c<b.length;c++){var d=b[c];try{return new ActiveXObject(d),a.De=d}catch(e){}}throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");}return a.De};Nc=new Oc;var Qc=function(){};t(Qc,Lc);Qc.prototype.sc=function(){var a=new XMLHttpRequest;if("withCredentials"in a)return a;if("undefined"!=typeof XDomainRequest)return new Rc;throw Error("Unsupported browser");};Qc.prototype.Cd=function(){return{}};
var Rc=function(){this.oa=new XDomainRequest;this.readyState=0;this.onreadystatechange=null;this.responseText="";this.status=-1;this.statusText=this.responseXML=null;this.oa.onload=r(this.If,this);this.oa.onerror=r(this.ye,this);this.oa.onprogress=r(this.Jf,this);this.oa.ontimeout=r(this.Kf,this)};h=Rc.prototype;h.open=function(a,b,c){if(null!=c&&!c)throw Error("Only async requests are supported.");this.oa.open(a,b)};
h.send=function(a){if(a)if("string"==typeof a)this.oa.send(a);else throw Error("Only string data is supported");else this.oa.send()};h.abort=function(){this.oa.abort()};h.setRequestHeader=function(){};h.getResponseHeader=function(a){return"content-type"==a.toLowerCase()?this.oa.contentType:""};h.If=function(){this.status=200;this.responseText=this.oa.responseText;Sc(this,4)};h.ye=function(){this.status=500;this.responseText="";Sc(this,4)};h.Kf=function(){this.ye()};
h.Jf=function(){this.status=200;Sc(this,1)};var Sc=function(a,b){a.readyState=b;if(a.onreadystatechange)a.onreadystatechange()};Rc.prototype.getAllResponseHeaders=function(){return"content-type: "+this.oa.contentType};var Tc=function(a,b,c){this.Vf=c;this.tf=a;this.kg=b;this.Ic=0;this.xc=null};Tc.prototype.get=function(){if(0<this.Ic){this.Ic--;var a=this.xc;this.xc=a.next;a.next=null}else a=this.tf();return a};Tc.prototype.put=function(a){this.kg(a);this.Ic<this.Vf&&(this.Ic++,a.next=this.xc,this.xc=a)};var Uc=function(a){k.setTimeout(function(){throw a;},0)},Vc,Wc=function(){var a=k.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!y("Presto")&&(a=function(){var a=document.createElement("IFRAME");a.style.display="none";a.src="";document.documentElement.appendChild(a);var b=a.contentWindow;a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+"//"+b.location.host;
a=r(function(a){if(("*"==d||a.origin==d)&&a.data==c)this.port1.onmessage()},this);b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});if("undefined"!==typeof a&&!y("Trident")&&!y("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(ba(c.next)){c=c.next;var a=c.me;c.me=null;a()}};return function(a){d.next={me:a};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in document.createElement("SCRIPT")?
function(a){var b=document.createElement("SCRIPT");b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};document.documentElement.appendChild(b)}:function(a){k.setTimeout(a,0)}};var Xc=function(){this.cd=this.hb=null},Zc=new Tc(function(){return new Yc},function(a){a.reset()},100);Xc.prototype.add=function(a,b){var c=Zc.get();c.set(a,b);this.cd?this.cd.next=c:(w(!this.hb),this.hb=c);this.cd=c};Xc.prototype.remove=function(){var a=null;this.hb&&(a=this.hb,this.hb=this.hb.next,this.hb||(this.cd=null),a.next=null);return a};var Yc=function(){this.next=this.scope=this.rd=null};Yc.prototype.set=function(a,b){this.rd=a;this.scope=b;this.next=null};
Yc.prototype.reset=function(){this.next=this.scope=this.rd=null};var dd=function(a,b){$c||ad();bd||($c(),bd=!0);cd.add(a,b)},$c,ad=function(){if(-1!=String(k.Promise).indexOf("[native code]")){var a=k.Promise.resolve(void 0);$c=function(){a.then(ed)}}else $c=function(){var a=ed;!p(k.setImmediate)||k.Window&&k.Window.prototype&&!y("Edge")&&k.Window.prototype.setImmediate==k.setImmediate?(Vc||(Vc=Wc()),Vc(a)):k.setImmediate(a)}},bd=!1,cd=new Xc,ed=function(){for(var a;a=cd.remove();){try{a.rd.call(a.scope)}catch(b){Uc(b)}Zc.put(a)}bd=!1};var fd=function(a){return q(a)?a.constructor.displayName||a.constructor.name||Object.prototype.toString.call(a):void 0===a?"undefined":null===a?"null":typeof a},gd=function(a){return(a=a&&a.ownerDocument)&&(a.defaultView||a.parentWindow)||k};var hd=!z||9<=Number(Cb);!tb&&!z||z&&9<=Number(Cb)||tb&&A("1.9.1");z&&A("9");var jd=function(){this.xa="";this.ef=id};jd.prototype.qb=!0;jd.prototype.ob=function(){return this.xa};jd.prototype.toString=function(){return"SafeHtml{"+this.xa+"}"};var kd=function(a){if(a instanceof jd&&a.constructor===jd&&a.ef===id)return a.xa;Aa("expected object of type SafeHtml, got '"+a+"' of type "+ea(a));return"type_error:SafeHtml"},id={};jd.prototype.Qf=function(a){this.xa=a;return this};var ld=function(a,b){var c=gd(a);"undefined"!=typeof c.HTMLScriptElement&&"undefined"!=typeof c.Element&&w(a&&(a instanceof c.HTMLScriptElement||!(a instanceof c.Element)),"Argument is not a HTMLScriptElement (or a non-Element mock); got: %s",fd(a));a.src=Ka(b)};var md=function(a){var b=document;return m(a)?b.getElementById(a):a},od=function(a,b){eb(b,function(b,d){b&&b.qb&&(b=b.ob());"style"==d?a.style.cssText=b:"class"==d?a.className=b:"for"==d?a.htmlFor=b:nd.hasOwnProperty(d)?a.setAttribute(nd[d],b):0==d.lastIndexOf("aria-",0)||0==d.lastIndexOf("data-",0)?a.setAttribute(d,b):a[d]=b})},nd={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",
type:"type",usemap:"useMap",valign:"vAlign",width:"width"},qd=function(a,b,c){var d=arguments,e=document,f=String(d[0]),g=d[1];if(!hd&&g&&(g.name||g.type)){f=["<",f];g.name&&f.push(' name="',wa(g.name),'"');if(g.type){f.push(' type="',wa(g.type),'"');var l={};mb(l,g);delete l.type;g=l}f.push(">");f=f.join("")}f=e.createElement(f);g&&(m(g)?f.className=g:ha(g)?f.className=g.join(" "):od(f,g));2<d.length&&pd(e,f,d);return f},pd=function(a,b,c){function d(c){c&&b.appendChild(m(c)?a.createTextNode(c):
c)}for(var e=2;e<c.length;e++){var f=c[e];!ia(f)||q(f)&&0<f.nodeType?d(f):x(rd(f)?$a(f):f,d)}},rd=function(a){if(a&&"number"==typeof a.length){if(q(a))return"function"==typeof a.item||"string"==typeof a.item;if(p(a))return"function"==typeof a.item}return!1};var sd=function(a){a.prototype.then=a.prototype.then;a.prototype.$goog_Thenable=!0},td=function(a){if(!a)return!1;try{return!!a.$goog_Thenable}catch(b){return!1}};var C=function(a,b){this.aa=0;this.za=void 0;this.kb=this.ua=this.w=null;this.vc=this.pd=!1;if(a!=da)try{var c=this;a.call(b,function(a){ud(c,2,a)},function(a){if(!(a instanceof vd))try{if(a instanceof Error)throw a;throw Error("Promise rejected.");}catch(e){}ud(c,3,a)})}catch(d){ud(this,3,d)}},wd=function(){this.next=this.context=this.tb=this.Ua=this.child=null;this.Hb=!1};wd.prototype.reset=function(){this.context=this.tb=this.Ua=this.child=null;this.Hb=!1};
var xd=new Tc(function(){return new wd},function(a){a.reset()},100),yd=function(a,b,c){var d=xd.get();d.Ua=a;d.tb=b;d.context=c;return d},D=function(a){if(a instanceof C)return a;var b=new C(da);ud(b,2,a);return b},E=function(a){return new C(function(b,c){c(a)})},Ad=function(a,b,c){zd(a,b,c,null)||dd(la(b,a))},Bd=function(a){return new C(function(b,c){var d=a.length,e=[];if(d)for(var f=function(a,c){d--;e[a]=c;0==d&&b(e)},g=function(a){c(a)},l=0,n;l<a.length;l++)n=a[l],Ad(n,la(f,l),g);else b(e)})},
Cd=function(a){return new C(function(b){var c=a.length,d=[];if(c)for(var e=function(a,e,f){c--;d[a]=e?{Df:!0,value:f}:{Df:!1,reason:f};0==c&&b(d)},f=0,g;f<a.length;f++)g=a[f],Ad(g,la(e,f,!0),la(e,f,!1));else b(d)})};C.prototype.then=function(a,b,c){null!=a&&Da(a,"opt_onFulfilled should be a function.");null!=b&&Da(b,"opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?");return Dd(this,p(a)?a:null,p(b)?b:null,c)};sd(C);
var Fd=function(a,b){b=yd(b,b,void 0);b.Hb=!0;Ed(a,b);return a};C.prototype.g=function(a,b){return Dd(this,null,a,b)};C.prototype.cancel=function(a){0==this.aa&&dd(function(){var b=new vd(a);Gd(this,b)},this)};
var Gd=function(a,b){if(0==a.aa)if(a.w){var c=a.w;if(c.ua){for(var d=0,e=null,f=null,g=c.ua;g&&(g.Hb||(d++,g.child==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.aa&&1==d?Gd(c,b):(f?(d=f,w(c.ua),w(null!=d),d.next==c.kb&&(c.kb=d),d.next=d.next.next):Hd(c),Id(c,e,3,b)))}a.w=null}else ud(a,3,b)},Ed=function(a,b){a.ua||2!=a.aa&&3!=a.aa||Jd(a);w(null!=b.Ua);a.kb?a.kb.next=b:a.ua=b;a.kb=b},Dd=function(a,b,c,d){var e=yd(null,null,null);e.child=new C(function(a,g){e.Ua=b?function(c){try{var e=b.call(d,
c);a(e)}catch(F){g(F)}}:a;e.tb=c?function(b){try{var e=c.call(d,b);!ba(e)&&b instanceof vd?g(b):a(e)}catch(F){g(F)}}:g});e.child.w=a;Ed(a,e);return e.child};C.prototype.yg=function(a){w(1==this.aa);this.aa=0;ud(this,2,a)};C.prototype.zg=function(a){w(1==this.aa);this.aa=0;ud(this,3,a)};
var ud=function(a,b,c){0==a.aa&&(a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself")),a.aa=1,zd(c,a.yg,a.zg,a)||(a.za=c,a.aa=b,a.w=null,Jd(a),3!=b||c instanceof vd||Kd(a,c)))},zd=function(a,b,c,d){if(a instanceof C)return null!=b&&Da(b,"opt_onFulfilled should be a function."),null!=c&&Da(c,"opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?"),Ed(a,yd(b||da,c||null,d)),!0;if(td(a))return a.then(b,c,d),!0;if(q(a))try{var e=a.then;if(p(e))return Ld(a,
e,b,c,d),!0}catch(f){return c.call(d,f),!0}return!1},Ld=function(a,b,c,d,e){var f=!1,g=function(a){f||(f=!0,c.call(e,a))},l=function(a){f||(f=!0,d.call(e,a))};try{b.call(a,g,l)}catch(n){l(n)}},Jd=function(a){a.pd||(a.pd=!0,dd(a.yf,a))},Hd=function(a){var b=null;a.ua&&(b=a.ua,a.ua=b.next,b.next=null);a.ua||(a.kb=null);null!=b&&w(null!=b.Ua);return b};C.prototype.yf=function(){for(var a;a=Hd(this);)Id(this,a,this.aa,this.za);this.pd=!1};
var Id=function(a,b,c,d){if(3==c&&b.tb&&!b.Hb)for(;a&&a.vc;a=a.w)a.vc=!1;if(b.child)b.child.w=null,Md(b,c,d);else try{b.Hb?b.Ua.call(b.context):Md(b,c,d)}catch(e){Nd.call(null,e)}xd.put(b)},Md=function(a,b,c){2==b?a.Ua.call(a.context,c):a.tb&&a.tb.call(a.context,c)},Kd=function(a,b){a.vc=!0;dd(function(){a.vc&&Nd.call(null,b)})},Nd=Uc,vd=function(a){u.call(this,a)};t(vd,u);vd.prototype.name="cancel";
var Od=function(a,b){this.Rc=[];this.Le=a;this.qe=b||null;this.Pb=this.nb=!1;this.za=void 0;this.ae=this.ge=this.gd=!1;this.Zc=0;this.w=null;this.hd=0};Od.prototype.cancel=function(a){if(this.nb)this.za instanceof Od&&this.za.cancel();else{if(this.w){var b=this.w;delete this.w;a?b.cancel(a):(b.hd--,0>=b.hd&&b.cancel())}this.Le?this.Le.call(this.qe,this):this.ae=!0;this.nb||Pd(this,new Qd)}};Od.prototype.oe=function(a,b){this.gd=!1;Rd(this,a,b)};
var Rd=function(a,b,c){a.nb=!0;a.za=c;a.Pb=!b;Sd(a)},Ud=function(a){if(a.nb){if(!a.ae)throw new Td;a.ae=!1}};Od.prototype.callback=function(a){Ud(this);Vd(a);Rd(this,!0,a)};var Pd=function(a,b){Ud(a);Vd(b);Rd(a,!1,b)},Vd=function(a){w(!(a instanceof Od),"An execution sequence may not be initiated with a blocking Deferred.")},Xd=function(a,b){Wd(a,null,b,void 0)},Wd=function(a,b,c,d){w(!a.ge,"Blocking Deferreds can not be re-used");a.Rc.push([b,c,d]);a.nb&&Sd(a)};
Od.prototype.then=function(a,b,c){var d,e,f=new C(function(a,b){d=a;e=b});Wd(this,d,function(a){a instanceof Qd?f.cancel():e(a)});return f.then(a,b,c)};sd(Od);
var Yd=function(a){return Sa(a.Rc,function(a){return p(a[1])})},Sd=function(a){if(a.Zc&&a.nb&&Yd(a)){var b=a.Zc,c=Zd[b];c&&(k.clearTimeout(c.Qb),delete Zd[b]);a.Zc=0}a.w&&(a.w.hd--,delete a.w);b=a.za;for(var d=c=!1;a.Rc.length&&!a.gd;){var e=a.Rc.shift(),f=e[0],g=e[1];e=e[2];if(f=a.Pb?g:f)try{var l=f.call(e||a.qe,b);ba(l)&&(a.Pb=a.Pb&&(l==b||l instanceof Error),a.za=b=l);if(td(b)||"function"===typeof k.Promise&&b instanceof k.Promise)d=!0,a.gd=!0}catch(n){b=n,a.Pb=!0,Yd(a)||(c=!0)}}a.za=b;d&&(l=r(a.oe,
a,!0),d=r(a.oe,a,!1),b instanceof Od?(Wd(b,l,d),b.ge=!0):b.then(l,d));c&&(b=new $d(b),Zd[b.Qb]=b,a.Zc=b.Qb)},Td=function(){u.call(this)};t(Td,u);Td.prototype.message="Deferred has already fired";Td.prototype.name="AlreadyCalledError";var Qd=function(){u.call(this)};t(Qd,u);Qd.prototype.message="Deferred was canceled";Qd.prototype.name="CanceledError";var $d=function(a){this.Qb=k.setTimeout(r(this.xg,this),0);this.ba=a};
$d.prototype.xg=function(){w(Zd[this.Qb],"Cannot throw an error that is not scheduled.");delete Zd[this.Qb];throw this.ba;};var Zd={};var ee=function(a){var b={},c=b.document||document,d=Ka(a),e=document.createElement("SCRIPT"),f={Te:e,jc:void 0},g=new Od(ae,f),l=null,n=null!=b.timeout?b.timeout:5E3;0<n&&(l=window.setTimeout(function(){be(e,!0);Pd(g,new ce(1,"Timeout reached for loading script "+d))},n),f.jc=l);e.onload=e.onreadystatechange=function(){e.readyState&&"loaded"!=e.readyState&&"complete"!=e.readyState||(be(e,b.Og||!1,l),g.callback(null))};e.onerror=function(){be(e,!0,l);Pd(g,new ce(0,"Error while loading script "+d))};
f=b.attributes||{};mb(f,{type:"text/javascript",charset:"UTF-8"});od(e,f);ld(e,a);de(c).appendChild(e);return g},de=function(a){var b;return(b=(a||document).getElementsByTagName("HEAD"))&&0!=b.length?b[0]:a.documentElement},ae=function(){if(this&&this.Te){var a=this.Te;a&&"SCRIPT"==a.tagName&&be(a,!0,this.jc)}},be=function(a,b,c){null!=c&&k.clearTimeout(c);a.onload=da;a.onerror=da;a.onreadystatechange=da;b&&window.setTimeout(function(){a&&a.parentNode&&a.parentNode.removeChild(a)},0)},ce=function(a,
b){var c="Jsloader error (code #"+a+")";b&&(c+=": "+b);u.call(this,c);this.code=a};t(ce,u);var fe=function(a,b,c,d,e){this.reset(a,b,c,d,e)};fe.prototype.se=null;var ge=0;fe.prototype.reset=function(a,b,c,d,e){"number"==typeof e||ge++;d||ma();this.Vb=a;this.Zf=b;delete this.se};fe.prototype.Ue=function(a){this.Vb=a};var he=function(a){this.Je=a;this.ze=this.kd=this.Vb=this.w=null},ie=function(a,b){this.name=a;this.value=b};ie.prototype.toString=function(){return this.name};var je=new ie("SEVERE",1E3),ke=new ie("INFO",800),le=new ie("CONFIG",700),me=new ie("FINE",500);he.prototype.getName=function(){return this.Je};he.prototype.getParent=function(){return this.w};he.prototype.Ue=function(a){this.Vb=a};var ne=function(a){if(a.Vb)return a.Vb;if(a.w)return ne(a.w);Aa("Root logger has no level set.");return null};
he.prototype.log=function(a,b,c){if(a.value>=ne(this).value)for(p(b)&&(b=b()),a=new fe(a,String(b),this.Je),c&&(a.se=c),c="log:"+a.Zf,(b=k.console)&&b.timeStamp&&b.timeStamp(c),(b=k.msWriteProfilerMark)&&b(c),c=this;c;){var d=c,e=a;if(d.ze)for(var f=0;b=d.ze[f];f++)b(e);c=c.getParent()}};he.prototype.info=function(a,b){this.log(ke,a,b)};he.prototype.config=function(a,b){this.log(le,a,b)};
var oe={},pe=null,qe=function(a){pe||(pe=new he(""),oe[""]=pe,pe.Ue(le));var b;if(!(b=oe[a])){b=new he(a);var c=a.lastIndexOf("."),d=a.substr(c+1);c=qe(a.substr(0,c));c.kd||(c.kd={});c.kd[d]=b;b.w=c;oe[a]=b}return b};var G=function(){Ub.call(this);this.ga=new dc(this);this.kf=this;this.Kd=null};t(G,Ub);G.prototype[$b]=!0;h=G.prototype;h.addEventListener=function(a,b,c,d){lc(this,a,b,c,d)};h.removeEventListener=function(a,b,c,d){tc(this,a,b,c,d)};
h.dispatchEvent=function(a){re(this);var b=this.Kd;if(b){var c=[];for(var d=1;b;b=b.Kd)c.push(b),w(1E3>++d,"infinite loop")}b=this.kf;d=a.type||a;if(m(a))a=new B(a,b);else if(a instanceof B)a.target=a.target||b;else{var e=a;a=new B(d,b);mb(a,e)}e=!0;if(c)for(var f=c.length-1;!a.Wa&&0<=f;f--){var g=a.currentTarget=c[f];e=se(g,d,!0,a)&&e}a.Wa||(g=a.currentTarget=b,e=se(g,d,!0,a)&&e,a.Wa||(e=se(g,d,!1,a)&&e));if(c)for(f=0;!a.Wa&&f<c.length;f++)g=a.currentTarget=c[f],e=se(g,d,!1,a)&&e;return e};
h.lb=function(){G.Vc.lb.call(this);if(this.ga){var a=this.ga,b=0,c;for(c in a.I){for(var d=a.I[c],e=0;e<d.length;e++)++b,cc(d[e]);delete a.I[c];a.kc--}}this.Kd=null};h.listen=function(a,b,c,d){re(this);return this.ga.add(String(a),b,!1,c,d)};
var sc=function(a,b,c,d,e){a.ga.add(String(b),c,!0,d,e)},se=function(a,b,c,d){b=a.ga.I[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.Bb&&g.capture==c){var l=g.listener,n=g.wc||g.src;g.qc&&fc(a.ga,g);e=!1!==l.call(n,d)&&e}}return e&&0!=d.Se};G.prototype.td=function(a,b,c,d){return this.ga.td(String(a),b,c,d)};G.prototype.hasListener=function(a,b){return this.ga.hasListener(ba(a)?String(a):void 0,b)};var re=function(a){w(a.ga,"Event target is not initialized. Did you call the superclass (goog.events.EventTarget) constructor?")};var te="StopIteration"in k?k.StopIteration:{message:"StopIteration",stack:""},ue=function(){};ue.prototype.next=function(){throw te;};ue.prototype.jf=function(){return this};var H=function(a,b){a&&a.log(me,b,void 0)};var ve=function(a,b){this.ja={};this.B=[];this.gb=this.u=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else a&&this.addAll(a)};h=ve.prototype;h.ha=function(){we(this);for(var a=[],b=0;b<this.B.length;b++)a.push(this.ja[this.B[b]]);return a};h.va=function(){we(this);return this.B.concat()};h.Jb=function(a){return xe(this.ja,a)};h.clear=function(){this.ja={};this.gb=this.u=this.B.length=0};
h.remove=function(a){return xe(this.ja,a)?(delete this.ja[a],this.u--,this.gb++,this.B.length>2*this.u&&we(this),!0):!1};var we=function(a){if(a.u!=a.B.length){for(var b=0,c=0;b<a.B.length;){var d=a.B[b];xe(a.ja,d)&&(a.B[c++]=d);b++}a.B.length=c}if(a.u!=a.B.length){var e={};for(c=b=0;b<a.B.length;)d=a.B[b],xe(e,d)||(a.B[c++]=d,e[d]=1),b++;a.B.length=c}};h=ve.prototype;h.get=function(a,b){return xe(this.ja,a)?this.ja[a]:b};
h.set=function(a,b){xe(this.ja,a)||(this.u++,this.B.push(a),this.gb++);this.ja[a]=b};h.addAll=function(a){if(a instanceof ve){var b=a.va();a=a.ha()}else b=hb(a),a=gb(a);for(var c=0;c<b.length;c++)this.set(b[c],a[c])};h.forEach=function(a,b){for(var c=this.va(),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};h.clone=function(){return new ve(this)};
h.jf=function(a){we(this);var b=0,c=this.gb,d=this,e=new ue;e.next=function(){if(c!=d.gb)throw Error("The map has changed since the iterator was created");if(b>=d.B.length)throw te;var e=d.B[b++];return a?e:d.ja[e]};return e};var xe=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)};var ye=function(a){if(a.ha&&"function"==typeof a.ha)return a.ha();if(m(a))return a.split("");if(ia(a)){for(var b=[],c=a.length,d=0;d<c;d++)b.push(a[d]);return b}return gb(a)},ze=function(a){if(a.va&&"function"==typeof a.va)return a.va();if(!a.ha||"function"!=typeof a.ha){if(ia(a)||m(a)){var b=[];a=a.length;for(var c=0;c<a;c++)b.push(c);return b}return hb(a)}},Ae=function(a,b,c){if(a.forEach&&"function"==typeof a.forEach)a.forEach(b,c);else if(ia(a)||m(a))x(a,b,c);else for(var d=ze(a),e=ye(a),f=e.length,
g=0;g<f;g++)b.call(c,e[g],d&&d[g],a)};var Be=function(a,b,c){if(p(a))c&&(a=r(a,c));else if(a&&"function"==typeof a.handleEvent)a=r(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(b)?-1:k.setTimeout(a,b||0)},Ce=function(a){var b=null;return(new C(function(c,d){b=Be(function(){c(void 0)},a);-1==b&&d(Error("Failed to schedule timer."))})).g(function(a){k.clearTimeout(b);throw a;})};var De=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/,Ee=function(a,b){if(a){a=a.split("&");for(var c=0;c<a.length;c++){var d=a[c].indexOf("="),e=null;if(0<=d){var f=a[c].substring(0,d);e=a[c].substring(d+1)}else f=a[c];b(f,e?decodeURIComponent(e.replace(/\+/g," ")):"")}}};var I=function(a){G.call(this);this.headers=new ve;this.ed=a||null;this.Ca=!1;this.dd=this.b=null;this.Ub=this.Ie=this.Fc="";this.Qa=this.zd=this.Ac=this.od=!1;this.Db=0;this.Wc=null;this.Pc="";this.$c=this.fg=this.df=!1};t(I,G);var Fe=I.prototype,Ge=qe("goog.net.XhrIo");Fe.R=Ge;var He=/^https?$/i,Ie=["POST","PUT"];
I.prototype.send=function(a,b,c,d){if(this.b)throw Error("[goog.net.XhrIo] Object is active with another request="+this.Fc+"; newUri="+a);b=b?b.toUpperCase():"GET";this.Fc=a;this.Ub="";this.Ie=b;this.od=!1;this.Ca=!0;this.b=this.ed?this.ed.sc():Nc.sc();this.dd=this.ed?Mc(this.ed):Mc(Nc);this.b.onreadystatechange=r(this.Pe,this);this.fg&&"onprogress"in this.b&&(this.b.onprogress=r(function(a){this.Oe(a,!0)},this),this.b.upload&&(this.b.upload.onprogress=r(this.Oe,this)));try{H(this.R,Je(this,"Opening Xhr")),
this.zd=!0,this.b.open(b,String(a),!0),this.zd=!1}catch(f){H(this.R,Je(this,"Error opening Xhr: "+f.message));this.ba(5,f);return}a=c||"";var e=this.headers.clone();d&&Ae(d,function(a,b){e.set(b,a)});d=Ua(e.va());c=k.FormData&&a instanceof k.FormData;!Va(Ie,b)||d||c||e.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");e.forEach(function(a,b){this.b.setRequestHeader(b,a)},this);this.Pc&&(this.b.responseType=this.Pc);"withCredentials"in this.b&&this.b.withCredentials!==this.df&&
(this.b.withCredentials=this.df);try{Ke(this),0<this.Db&&(this.$c=Le(this.b),H(this.R,Je(this,"Will abort after "+this.Db+"ms if incomplete, xhr2 "+this.$c)),this.$c?(this.b.timeout=this.Db,this.b.ontimeout=r(this.jc,this)):this.Wc=Be(this.jc,this.Db,this)),H(this.R,Je(this,"Sending request")),this.Ac=!0,this.b.send(a),this.Ac=!1}catch(f){H(this.R,Je(this,"Send error: "+f.message)),this.ba(5,f)}};
var Le=function(a){return z&&A(9)&&"number"==typeof a.timeout&&ba(a.ontimeout)},Ta=function(a){return"content-type"==a.toLowerCase()};I.prototype.jc=function(){"undefined"!=typeof aa&&this.b&&(this.Ub="Timed out after "+this.Db+"ms, aborting",H(this.R,Je(this,this.Ub)),this.dispatchEvent("timeout"),this.abort(8))};I.prototype.ba=function(a,b){this.Ca=!1;this.b&&(this.Qa=!0,this.b.abort(),this.Qa=!1);this.Ub=b;Me(this);Ne(this)};var Me=function(a){a.od||(a.od=!0,a.dispatchEvent("complete"),a.dispatchEvent("error"))};
I.prototype.abort=function(){this.b&&this.Ca&&(H(this.R,Je(this,"Aborting")),this.Ca=!1,this.Qa=!0,this.b.abort(),this.Qa=!1,this.dispatchEvent("complete"),this.dispatchEvent("abort"),Ne(this))};I.prototype.lb=function(){this.b&&(this.Ca&&(this.Ca=!1,this.Qa=!0,this.b.abort(),this.Qa=!1),Ne(this,!0));I.Vc.lb.call(this)};I.prototype.Pe=function(){this.isDisposed()||(this.zd||this.Ac||this.Qa?Oe(this):this.bg())};I.prototype.bg=function(){Oe(this)};
var Oe=function(a){if(a.Ca&&"undefined"!=typeof aa)if(a.dd[1]&&4==Pe(a)&&2==Qe(a))H(a.R,Je(a,"Local request error detected and ignored"));else if(a.Ac&&4==Pe(a))Be(a.Pe,0,a);else if(a.dispatchEvent("readystatechange"),4==Pe(a)){H(a.R,Je(a,"Request complete"));a.Ca=!1;try{var b=Qe(a);a:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break a;default:c=!1}var d;if(!(d=c)){var e;if(e=0===b){var f=String(a.Fc).match(De)[1]||null;if(!f&&k.self&&k.self.location){var g=
k.self.location.protocol;f=g.substr(0,g.length-1)}e=!He.test(f?f.toLowerCase():"")}d=e}if(d)a.dispatchEvent("complete"),a.dispatchEvent("success");else{try{var l=2<Pe(a)?a.b.statusText:""}catch(n){H(a.R,"Can not get status: "+n.message),l=""}a.Ub=l+" ["+Qe(a)+"]";Me(a)}}finally{Ne(a)}}};I.prototype.Oe=function(a,b){w("progress"===a.type,"goog.net.EventType.PROGRESS is of the same type as raw XHR progress.");this.dispatchEvent(Re(a,"progress"));this.dispatchEvent(Re(a,b?"downloadprogress":"uploadprogress"))};
var Re=function(a,b){return{type:b,lengthComputable:a.lengthComputable,loaded:a.loaded,total:a.total}},Ne=function(a,b){if(a.b){Ke(a);var c=a.b,d=a.dd[0]?da:null;a.b=null;a.dd=null;b||a.dispatchEvent("ready");try{c.onreadystatechange=d}catch(e){(a=a.R)&&a.log(je,"Problem encountered resetting onreadystatechange: "+e.message,void 0)}}},Ke=function(a){a.b&&a.$c&&(a.b.ontimeout=null);a.Wc&&(k.clearTimeout(a.Wc),a.Wc=null)},Pe=function(a){return a.b?a.b.readyState:0},Qe=function(a){try{return 2<Pe(a)?
a.b.status:-1}catch(b){return-1}},Se=function(a){try{return a.b?a.b.responseText:""}catch(b){return H(a.R,"Can not get responseText: "+b.message),""}};
I.prototype.getResponse=function(){try{if(!this.b)return null;if("response"in this.b)return this.b.response;switch(this.Pc){case "":case "text":return this.b.responseText;case "arraybuffer":if("mozResponseArrayBuffer"in this.b)return this.b.mozResponseArrayBuffer}var a=this.R;a&&a.log(je,"Response type "+this.Pc+" is not supported on this browser",void 0);return null}catch(b){return H(this.R,"Can not get response: "+b.message),null}};
I.prototype.getResponseHeader=function(a){if(this.b&&4==Pe(this))return a=this.b.getResponseHeader(a),null===a?void 0:a};I.prototype.getAllResponseHeaders=function(){return this.b&&4==Pe(this)?this.b.getAllResponseHeaders():""};var Je=function(a,b){return b+" ["+a.Ie+" "+a.Fc+" "+Qe(a)+"]"};var Te=function(a,b){this.pa=this.eb=this.qa="";this.vb=null;this.Pa=this.Ga="";this.da=this.Uf=!1;if(a instanceof Te){this.da=ba(b)?b:a.da;Ue(this,a.qa);var c=a.eb;J(this);this.eb=c;Ve(this,a.pa);We(this,a.vb);Xe(this,a.Ga);Ye(this,a.ea.clone());a=a.Pa;J(this);this.Pa=a}else a&&(c=String(a).match(De))?(this.da=!!b,Ue(this,c[1]||"",!0),a=c[2]||"",J(this),this.eb=Ze(a),Ve(this,c[3]||"",!0),We(this,c[4]),Xe(this,c[5]||"",!0),Ye(this,c[6]||"",!0),a=c[7]||"",J(this),this.Pa=Ze(a)):(this.da=!!b,this.ea=
new $e(null,0,this.da))};Te.prototype.toString=function(){var a=[],b=this.qa;b&&a.push(af(b,bf,!0),":");var c=this.pa;if(c||"file"==b)a.push("//"),(b=this.eb)&&a.push(af(b,bf,!0),"@"),a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c=this.vb,null!=c&&a.push(":",String(c));if(c=this.Ga)this.pa&&"/"!=c.charAt(0)&&a.push("/"),a.push(af(c,"/"==c.charAt(0)?cf:df,!0));(c=this.ea.toString())&&a.push("?",c);(c=this.Pa)&&a.push("#",af(c,ef));return a.join("")};
Te.prototype.resolve=function(a){var b=this.clone(),c=!!a.qa;c?Ue(b,a.qa):c=!!a.eb;if(c){var d=a.eb;J(b);b.eb=d}else c=!!a.pa;c?Ve(b,a.pa):c=null!=a.vb;d=a.Ga;if(c)We(b,a.vb);else if(c=!!a.Ga){if("/"!=d.charAt(0))if(this.pa&&!this.Ga)d="/"+d;else{var e=b.Ga.lastIndexOf("/");-1!=e&&(d=b.Ga.substr(0,e+1)+d)}e=d;if(".."==e||"."==e)d="";else if(v(e,"./")||v(e,"/.")){d=0==e.lastIndexOf("/",0);e=e.split("/");for(var f=[],g=0;g<e.length;){var l=e[g++];"."==l?d&&g==e.length&&f.push(""):".."==l?((1<f.length||
1==f.length&&""!=f[0])&&f.pop(),d&&g==e.length&&f.push("")):(f.push(l),d=!0)}d=f.join("/")}else d=e}c?Xe(b,d):c=""!==a.ea.toString();c?Ye(b,a.ea.clone()):c=!!a.Pa;c&&(a=a.Pa,J(b),b.Pa=a);return b};Te.prototype.clone=function(){return new Te(this)};
var Ue=function(a,b,c){J(a);a.qa=c?Ze(b,!0):b;a.qa&&(a.qa=a.qa.replace(/:$/,""))},Ve=function(a,b,c){J(a);a.pa=c?Ze(b,!0):b},We=function(a,b){J(a);if(b){b=Number(b);if(isNaN(b)||0>b)throw Error("Bad port number "+b);a.vb=b}else a.vb=null},Xe=function(a,b,c){J(a);a.Ga=c?Ze(b,!0):b},Ye=function(a,b,c){J(a);b instanceof $e?(a.ea=b,a.ea.Zd(a.da)):(c||(b=af(b,ff)),a.ea=new $e(b,0,a.da))},K=function(a,b,c){J(a);a.ea.set(b,c)},gf=function(a,b){return a.ea.get(b)};
Te.prototype.removeParameter=function(a){J(this);this.ea.remove(a);return this};var J=function(a){if(a.Uf)throw Error("Tried to modify a read-only Uri");};Te.prototype.Zd=function(a){this.da=a;this.ea&&this.ea.Zd(a);return this};
var hf=function(a){return a instanceof Te?a.clone():new Te(a,void 0)},jf=function(a,b){var c=new Te(null,void 0);Ue(c,"https");a&&Ve(c,a);b&&Xe(c,b);return c},Ze=function(a,b){return a?b?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""},af=function(a,b,c){return m(a)?(a=encodeURI(a).replace(b,kf),c&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null},kf=function(a){a=a.charCodeAt(0);return"%"+(a>>4&15).toString(16)+(a&15).toString(16)},bf=/[#\/\?@]/g,df=/[\#\?:]/g,cf=/[\#\?]/g,ff=/[\#\?@]/g,
ef=/#/g,$e=function(a,b,c){this.u=this.s=null;this.V=a||null;this.da=!!c},lf=function(a){a.s||(a.s=new ve,a.u=0,a.V&&Ee(a.V,function(b,c){a.add(decodeURIComponent(b.replace(/\+/g," ")),c)}))},nf=function(a){var b=ze(a);if("undefined"==typeof b)throw Error("Keys are undefined");var c=new $e(null,0,void 0);a=ye(a);for(var d=0;d<b.length;d++){var e=b[d],f=a[d];ha(f)?mf(c,e,f):c.add(e,f)}return c};h=$e.prototype;
h.add=function(a,b){lf(this);this.V=null;a=this.ca(a);var c=this.s.get(a);c||this.s.set(a,c=[]);c.push(b);this.u=Ba(this.u)+1;return this};h.remove=function(a){lf(this);a=this.ca(a);return this.s.Jb(a)?(this.V=null,this.u=Ba(this.u)-this.s.get(a).length,this.s.remove(a)):!1};h.clear=function(){this.s=this.V=null;this.u=0};h.Jb=function(a){lf(this);a=this.ca(a);return this.s.Jb(a)};h.forEach=function(a,b){lf(this);this.s.forEach(function(c,d){x(c,function(c){a.call(b,c,d,this)},this)},this)};
h.va=function(){lf(this);for(var a=this.s.ha(),b=this.s.va(),c=[],d=0;d<b.length;d++)for(var e=a[d],f=0;f<e.length;f++)c.push(b[d]);return c};h.ha=function(a){lf(this);var b=[];if(m(a))this.Jb(a)&&(b=Za(b,this.s.get(this.ca(a))));else{a=this.s.ha();for(var c=0;c<a.length;c++)b=Za(b,a[c])}return b};h.set=function(a,b){lf(this);this.V=null;a=this.ca(a);this.Jb(a)&&(this.u=Ba(this.u)-this.s.get(a).length);this.s.set(a,[b]);this.u=Ba(this.u)+1;return this};
h.get=function(a,b){a=a?this.ha(a):[];return 0<a.length?String(a[0]):b};var mf=function(a,b,c){a.remove(b);0<c.length&&(a.V=null,a.s.set(a.ca(b),$a(c)),a.u=Ba(a.u)+c.length)};h=$e.prototype;h.toString=function(){if(this.V)return this.V;if(!this.s)return"";for(var a=[],b=this.s.va(),c=0;c<b.length;c++){var d=b[c],e=encodeURIComponent(String(d));d=this.ha(d);for(var f=0;f<d.length;f++){var g=e;""!==d[f]&&(g+="="+encodeURIComponent(String(d[f])));a.push(g)}}return this.V=a.join("&")};
h.clone=function(){var a=new $e;a.V=this.V;this.s&&(a.s=this.s.clone(),a.u=this.u);return a};h.ca=function(a){a=String(a);this.da&&(a=a.toLowerCase());return a};h.Zd=function(a){a&&!this.da&&(lf(this),this.V=null,this.s.forEach(function(a,c){var b=c.toLowerCase();c!=b&&(this.remove(c),mf(this,b,a))},this));this.da=a};h.extend=function(a){for(var b=0;b<arguments.length;b++)Ae(arguments[b],function(a,b){this.add(b,a)},this)};var of={Jg:{qd:"https://www.googleapis.com/identitytoolkit/v3/relyingparty/",Vd:"https://securetoken.googleapis.com/v1/token",id:"p"},Kg:{qd:"https://staging-www.sandbox.googleapis.com/identitytoolkit/v3/relyingparty/",Vd:"https://staging-securetoken.sandbox.googleapis.com/v1/token",id:"s"},Lg:{qd:"https://www-googleapis-test.sandbox.google.com/identitytoolkit/v3/relyingparty/",Vd:"https://test-securetoken.sandbox.googleapis.com/v1/token",id:"t"}},pf=function(a){for(var b in of)if(of[b].id===a)return a=
of[b],{firebaseEndpoint:a.qd,secureTokenEndpoint:a.Vd};return null},qf;qf=pf("__EID__")?"__EID__":void 0;var rf=function(){var a=L();return z&&!!Cb&&11==Cb||/Edge\/\d+/.test(a)},sf=function(){return k.window&&k.window.location.href||""},tf=function(a,b){b=b||k.window;var c="about:blank";a&&(c=Bc(Ec(a)));b.location.href=c},uf=function(a,b){var c=[],d;for(d in a)d in b?typeof a[d]!=typeof b[d]?c.push(d):ha(a[d])?jb(a[d],b[d])||c.push(d):"object"==typeof a[d]&&null!=a[d]&&null!=b[d]?0<uf(a[d],b[d]).length&&c.push(d):a[d]!==b[d]&&c.push(d):c.push(d);for(d in b)d in a||c.push(d);return c},wf=function(){var a=
L();a="Chrome"!=vf(a)?null:(a=a.match(/\sChrome\/(\d+)/i))&&2==a.length?parseInt(a[1],10):null;return a&&30>a?!1:!z||!Cb||9<Cb},xf=function(a){a=(a||L()).toLowerCase();return a.match(/android/)||a.match(/webos/)||a.match(/iphone|ipad|ipod/)||a.match(/blackberry/)||a.match(/windows phone/)||a.match(/iemobile/)?!0:!1},yf=function(a){a=a||k.window;try{a.close()}catch(b){}},zf=function(a,b,c){var d=Math.floor(1E9*Math.random()).toString();b=b||500;c=c||600;var e=(window.screen.availHeight-c)/2,f=(window.screen.availWidth-
b)/2;b={width:b,height:c,top:0<e?e:0,left:0<f?f:0,location:!0,resizable:!0,statusbar:!0,toolbar:!1};c=L().toLowerCase();d&&(b.target=d,v(c,"crios/")&&(b.target="_blank"));"Firefox"==vf(L())&&(a=a||"http://localhost",b.scrollbars=!0);c=a||"";(d=b)||(d={});a=window;b=c instanceof Ac?c:Ec("undefined"!=typeof c.href?c.href:String(c));c=d.target||c.target;e=[];for(g in d)switch(g){case "width":case "height":case "top":case "left":e.push(g+"="+d[g]);break;case "target":case "noreferrer":break;default:e.push(g+
"="+(d[g]?1:0))}var g=e.join(",");(y("iPhone")&&!y("iPod")&&!y("iPad")||y("iPad")||y("iPod"))&&a.navigator&&a.navigator.standalone&&c&&"_self"!=c?(g=a.document.createElement("A"),e=gd(g),"undefined"!=typeof e.HTMLAnchorElement&&"undefined"!=typeof e.Location&&"undefined"!=typeof e.Element&&w(g&&(g instanceof e.HTMLAnchorElement||!(g instanceof e.Location||g instanceof e.Element)),"Argument is not a HTMLAnchorElement (or a non-Element mock); got: %s",fd(g)),b instanceof Ac||b instanceof Ac||(b=b.qb?
b.ob():String(b),w(Cc.test(b))||(b="about:invalid#zClosurez"),b=Dc(b)),g.href=Bc(b),g.setAttribute("target",c),d.noreferrer&&g.setAttribute("rel","noreferrer"),d=document.createEvent("MouseEvent"),d.initMouseEvent("click",!0,!0,a,1),g.dispatchEvent(d),g={}):d.noreferrer?(g=a.open("",c,g),d=Bc(b),g&&(sb&&v(d,";")&&(d="'"+d.replace(/'/g,"%27")+"'"),g.opener=null,a=Ha("b/12014412, meta tag with sanitized URL"),d='<META HTTP-EQUIV="refresh" content="0; url='+wa(d)+'">',Ca(Ga(a),"must provide justification"),
w(!/^[\s\xa0]*$/.test(Ga(a)),"must provide non-empty justification"),g.document.write(kd((new jd).Qf(d))),g.document.close())):g=a.open(Bc(b),c,g);if(g)try{g.focus()}catch(l){}return g},Af=function(a){return new C(function(b){var c=function(){Ce(2E3).then(function(){if(!a||a.closed)b();else return c()})};return c()})},Bf=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Cf=function(){var a=null;return(new C(function(b){"complete"==k.document.readyState?b():(a=function(){b()},kc(window,"load",a))})).g(function(b){tc(window,
"load",a);throw b;})},Ef=function(){return Df(void 0)?Cf().then(function(){return new C(function(a,b){var c=k.document,d=setTimeout(function(){b(Error("Cordova framework is not ready."))},1E3);c.addEventListener("deviceready",function(){clearTimeout(d);a()},!1)})}):E(Error("Cordova must run in an Android or iOS file scheme."))},Df=function(a){a=a||L();return!("file:"!==Ff()||!a.toLowerCase().match(/iphone|ipad|ipod|android/))},Gf=function(){var a=k.window;try{return!(!a||a==a.top)}catch(b){return!1}},
Hf=function(){return firebase.INTERNAL.hasOwnProperty("reactNative")?"ReactNative":firebase.INTERNAL.hasOwnProperty("node")?"Node":"Browser"},If=function(){var a=Hf();return"ReactNative"===a||"Node"===a},vf=function(a){var b=a.toLowerCase();if(v(b,"opera/")||v(b,"opr/")||v(b,"opios/"))return"Opera";if(v(b,"iemobile"))return"IEMobile";if(v(b,"msie")||v(b,"trident/"))return"IE";if(v(b,"edge/"))return"Edge";if(v(b,"firefox/"))return"Firefox";if(v(b,"silk/"))return"Silk";if(v(b,"blackberry"))return"Blackberry";
if(v(b,"webos"))return"Webos";if(!v(b,"safari/")||v(b,"chrome/")||v(b,"crios/")||v(b,"android"))if(!v(b,"chrome/")&&!v(b,"crios/")||v(b,"edge/")){if(v(b,"android"))return"Android";if((a=a.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/))&&2==a.length)return a[1]}else return"Chrome";else return"Safari";return"Other"},Jf={Eg:"FirebaseCore-web",Gg:"FirebaseUI-web"},Kf=function(a,b){b=b||[];var c=[],d={},e;for(e in Jf)d[Jf[e]]=!0;for(e=0;e<b.length;e++)"undefined"!==typeof d[b[e]]&&(delete d[b[e]],c.push(b[e]));
c.sort();b=c;b.length||(b=["FirebaseCore-web"]);c=Hf();return("Browser"===c?vf(L()):c)+"/JsCore/"+a+"/"+b.join(",")},L=function(){return k.navigator&&k.navigator.userAgent||""},M=function(a,b){a=a.split(".");b=b||k;for(var c=0;c<a.length&&"object"==typeof b&&null!=b;c++)b=b[a[c]];c!=a.length&&(b=void 0);return b},Mf=function(){try{var a=k.localStorage,b=Lf();if(a)return a.setItem(b,"1"),a.removeItem(b),rf()?!!k.indexedDB:!0}catch(c){}return!1},Of=function(){return(Nf()||"chrome-extension:"===Ff()||
Df())&&!If()&&Mf()},Nf=function(){return"http:"===Ff()||"https:"===Ff()},Ff=function(){return k.location&&k.location.protocol||null},Pf=function(a){a=a||L();return xf(a)||"Firefox"==vf(a)?!1:!0},Qf=function(a){return"undefined"===typeof a?null:Hc(a)},Rf=function(a){var b={},c;for(c in a)a.hasOwnProperty(c)&&null!==a[c]&&void 0!==a[c]&&(b[c]=a[c]);return b},Sf=function(a){if(null!==a)return JSON.parse(a)},Lf=function(a){return a?a:""+Math.floor(1E9*Math.random()).toString()},Tf=function(a){a=a||L();
return"Safari"==vf(a)||a.toLowerCase().match(/iphone|ipad|ipod/)?!1:!0},Uf=function(){var a=k.___jsl;if(a&&a.H)for(var b in a.H)if(a.H[b].r=a.H[b].r||[],a.H[b].L=a.H[b].L||[],a.H[b].r=a.H[b].L.concat(),a.CP)for(var c=0;c<a.CP.length;c++)a.CP[c]=null},Vf=function(){var a=k.navigator;return a&&"boolean"===typeof a.onLine&&(Nf()||"chrome-extension:"===Ff()||"undefined"!==typeof a.connection)?a.onLine:!0},Wf=function(a,b,c,d){if(a>b)throw Error("Short delay should be less than long delay!");this.tg=a;
this.Yf=b;a=c||L();d=d||Hf();this.Tf=xf(a)||"ReactNative"===d};Wf.prototype.get=function(){return this.Tf?this.Yf:this.tg};
var Xf=function(){var a=k.document;return a&&"undefined"!==typeof a.visibilityState?"visible"==a.visibilityState:!0},Yf=function(){var a=k.document,b=null;return Xf()||!a?D():(new C(function(c){b=function(){Xf()&&(a.removeEventListener("visibilitychange",b,!1),c())};a.addEventListener("visibilitychange",b,!1)})).g(function(c){a.removeEventListener("visibilitychange",b,!1);throw c;})};var Zf={};var $f;try{var ag={};Object.defineProperty(ag,"abcd",{configurable:!0,enumerable:!0,value:1});Object.defineProperty(ag,"abcd",{configurable:!0,enumerable:!0,value:2});$f=2==ag.abcd}catch(a){$f=!1}
var N=function(a,b,c){$f?Object.defineProperty(a,b,{configurable:!0,enumerable:!0,value:c}):a[b]=c},bg=function(a,b){if(b)for(var c in b)b.hasOwnProperty(c)&&N(a,c,b[c])},cg=function(a){var b={};bg(b,a);return b},dg=function(a){var b={},c;for(c in a)a.hasOwnProperty(c)&&(b[c]=a[c]);return b},eg=function(a,b){if(!b||!b.length)return!0;if(!a)return!1;for(var c=0;c<b.length;c++){var d=a[b[c]];if(void 0===d||null===d||""===d)return!1}return!0},fg=function(a){var b=a;if("object"==typeof a&&null!=a){b=
"length"in a?[]:{};for(var c in a)N(b,c,fg(a[c]))}return b};var gg="oauth_consumer_key oauth_nonce oauth_signature oauth_signature_method oauth_timestamp oauth_token oauth_version".split(" "),hg=["client_id","response_type","scope","redirect_uri","state"],ig={Fg:{Ec:"locale",Zb:500,Yb:600,providerId:"facebook.com",Td:hg},Hg:{Ec:null,Zb:500,Yb:620,providerId:"github.com",Td:hg},Ig:{Ec:"hl",Zb:515,Yb:680,providerId:"google.com",Td:hg},Mg:{Ec:"lang",Zb:485,Yb:705,providerId:"twitter.com",Td:gg}},jg=function(a){for(var b in ig)if(ig[b].providerId==a)return ig[b];
return null};var O=function(a,b){this.code="auth/"+a;this.message=b||kg[a]||""};t(O,Error);O.prototype.G=function(){return{code:this.code,message:this.message}};O.prototype.toJSON=function(){return this.G()};
var lg=function(a){var b=a&&a.code;return b?new O(b.substring(5),a.message):null},kg={"argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.","captcha-check-failed":"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",
"code-expired":"The SMS code has expired. Please re-send the verification code to try again.","cordova-not-ready":"Cordova framework is not ready.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.","requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.",
"dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","email-already-in-use":"The email address is already in use by another account.","expired-action-code":"The action code has expired. ","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.","internal-error":"An internal error has occurred.","invalid-app-credential":"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.",
"invalid-app-id":"The mobile app identifier is not registed for the current project.","invalid-user-token":"The user's credential is no longer valid. The user must sign in again.","invalid-auth-event":"An internal error has occurred.","invalid-verification-code":"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure use the verification code provided by the user.","invalid-continue-uri":"The continue URL provided in the request is invalid.",
"invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.","invalid-custom-token":"The custom token format is incorrect. Please check the documentation.","invalid-email":"The email address is badly formatted.","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","invalid-credential":"The supplied auth credential is malformed or has expired.",
"invalid-persistence-type":"The specified persistence type is invalid. It can only be local, session or none.","invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","invalid-oauth-client-id":"The OAuth client ID provided is either invalid or does not match the specified API key.",
"unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.","invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.","invalid-phone-number":"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].",
"invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.","invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-verification-id":"The verification ID used to create the phone auth credential is invalid.","missing-android-pkg-name":"An Android Package Name must be provided if the Android App is required to be installed.",
"auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","missing-app-credential":"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.","missing-verification-code":"The phone auth credential was created with an empty SMS verification code.","missing-continue-uri":"A continue URL must be provided in the request.","missing-iframe-start":"An internal error has occurred.",
"missing-ios-bundle-id":"An iOS Bundle ID must be provided if an App Store ID is provided.","missing-phone-number":"To send verification codes, provide a phone number for the recipient.","missing-verification-id":"The phone auth credential was created with an empty verification ID.","app-deleted":"This instance of FirebaseApp has been deleted.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",
"network-request-failed":"A network error (such as timeout, interrupted connection or unreachable host) has occurred.","no-auth-event":"An internal error has occurred.","no-such-provider":"User was not linked to an account with the given provider.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',
"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.","quota-exceeded":"The SMS quota for this project has been exceeded.","redirect-cancelled-by-user":"The redirect operation has been cancelled by the user before finalizing.","redirect-operation-pending":"A redirect sign-in operation is already pending.",
timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.","too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.","unauthorized-continue-uri":"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.","unsupported-persistence-type":"The current environment does not support the specified persistence type.","user-cancelled":"User did not grant your application the permissions it requested.",
"user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":"The user account has been disabled by an administrator.","user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.","web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled."};var mg=function(a,b,c,d,e){this.ma=a;this.W=b||null;this.Eb=c||null;this.Xd=d||null;this.ba=e||null;if(this.Eb||this.ba){if(this.Eb&&this.ba)throw new O("invalid-auth-event");if(this.Eb&&!this.Xd)throw new O("invalid-auth-event");}else throw new O("invalid-auth-event");};mg.prototype.uc=function(){return this.Xd};mg.prototype.getError=function(){return this.ba};mg.prototype.G=function(){return{type:this.ma,eventId:this.W,urlResponse:this.Eb,sessionId:this.Xd,error:this.ba&&this.ba.G()}};
var ng=function(a){a=a||{};return a.type?new mg(a.type,a.eventId,a.urlResponse,a.sessionId,a.error&&lg(a.error)):null};var og=function(a){var b="unauthorized-domain",c=void 0,d=hf(a);a=d.pa;d=d.qa;"chrome-extension"==d?c=na("This chrome extension ID (chrome-extension://%s) is not authorized to run this operation. Add it to the OAuth redirect domains list in the Firebase console -> Auth section -> Sign in method tab.",a):"http"==d||"https"==d?c=na("This domain (%s) is not authorized to run this operation. Add it to the OAuth redirect domains list in the Firebase console -> Auth section -> Sign in method tab.",a):b=
"operation-not-supported-in-this-environment";O.call(this,b,c)};t(og,O);var pg=function(a){this.Wf=a.sub;ma();this.Mb=a.email||null;this.gg=a.provider_id||null;this.mf=!!a.is_anonymous||"anonymous"==this.gg};pg.prototype.getEmail=function(){return this.Mb};pg.prototype.isAnonymous=function(){return this.mf};var qg=function(a,b){return a.then(function(a){if(a.idToken){a:{var c=a.idToken.split(".");if(3==c.length){c=c[1];for(var e=(4-c.length%4)%4,f=0;f<e;f++)c+=".";try{var g=JSON.parse(Hb(c));if(g.sub&&g.iss&&g.aud&&g.exp){var l=new pg(g);break a}}catch(n){}}l=null}if(!l||b!=l.Wf)throw new O("user-mismatch");return a}throw new O("user-mismatch");}).g(function(a){throw a&&a.code&&"auth/user-not-found"==a.code?new O("user-mismatch"):a;})},rg=function(a,b){if(b.idToken||b.accessToken)b.idToken&&N(this,"idToken",
b.idToken),b.accessToken&&N(this,"accessToken",b.accessToken);else if(b.oauthToken&&b.oauthTokenSecret)N(this,"accessToken",b.oauthToken),N(this,"secret",b.oauthTokenSecret);else throw new O("internal-error","failed to construct a credential");N(this,"providerId",a)};rg.prototype.Ob=function(a){return sg(a,tg(this))};rg.prototype.Gc=function(a,b){var c=tg(this);c.idToken=b;return ug(a,c)};rg.prototype.Gd=function(a,b){var c=tg(this);return qg(vg(a,c),b)};
var tg=function(a){var b={};a.idToken&&(b.id_token=a.idToken);a.accessToken&&(b.access_token=a.accessToken);a.secret&&(b.oauth_token_secret=a.secret);b.providerId=a.providerId;return{postBody:nf(b).toString(),requestUri:"http://localhost"}};rg.prototype.G=function(){var a={providerId:this.providerId};this.idToken&&(a.oauthIdToken=this.idToken);this.accessToken&&(a.oauthAccessToken=this.accessToken);this.secret&&(a.oauthTokenSecret=this.secret);return a};
var wg=function(a,b){this.jg=b||[];bg(this,{providerId:a,isOAuthProvider:!0});this.pe={};this.Ed=(jg(a)||{}).Ec||null;this.nd=null};wg.prototype.setCustomParameters=function(a){this.pe=kb(a);return this};var P=function(a){wg.call(this,a,hg);this.Ud=[]};t(P,wg);P.prototype.addScope=function(a){Va(this.Ud,a)||this.Ud.push(a);return this};P.prototype.xe=function(){return $a(this.Ud)};
P.prototype.credential=function(a,b){if(!a&&!b)throw new O("argument-error","credential failed: must provide the ID token and/or the access token.");return new rg(this.providerId,{idToken:a||null,accessToken:b||null})};var xg=function(){P.call(this,"facebook.com")};t(xg,P);N(xg,"PROVIDER_ID","facebook.com");
var yg=function(a){if(!a)throw new O("argument-error","credential failed: expected 1 argument (the OAuth access token).");var b=a;q(a)&&(b=a.accessToken);return(new xg).credential(null,b)},zg=function(){P.call(this,"github.com")};t(zg,P);N(zg,"PROVIDER_ID","github.com");var Ag=function(a){if(!a)throw new O("argument-error","credential failed: expected 1 argument (the OAuth access token).");var b=a;q(a)&&(b=a.accessToken);return(new zg).credential(null,b)},Bg=function(){P.call(this,"google.com");this.addScope("profile")};
t(Bg,P);N(Bg,"PROVIDER_ID","google.com");var Cg=function(a,b){var c=a;q(a)&&(c=a.idToken,b=a.accessToken);return(new Bg).credential(c,b)},Dg=function(){wg.call(this,"twitter.com",gg)};t(Dg,wg);N(Dg,"PROVIDER_ID","twitter.com");
var Eg=function(a,b){var c=a;q(c)||(c={oauthToken:a,oauthTokenSecret:b});if(!c.oauthToken||!c.oauthTokenSecret)throw new O("argument-error","credential failed: expected 2 arguments (the OAuth access token and secret).");return new rg("twitter.com",c)},Fg=function(a,b){this.Mb=a;this.Ld=b;N(this,"providerId","password")};Fg.prototype.Ob=function(a){return Q(a,Gg,{email:this.Mb,password:this.Ld})};Fg.prototype.Gc=function(a,b){return Q(a,Hg,{idToken:b,email:this.Mb,password:this.Ld})};
Fg.prototype.Gd=function(a,b){return qg(this.Ob(a),b)};Fg.prototype.G=function(){return{email:this.Mb,password:this.Ld}};var Ig=function(){bg(this,{providerId:"password",isOAuthProvider:!1})};bg(Ig,{PROVIDER_ID:"password"});var Jg=function(a){if(!(a.verificationId&&a.ad||a.ic&&a.phoneNumber))throw new O("internal-error");this.S=a;N(this,"providerId","phone")};Jg.prototype.Ob=function(a){return a.verifyPhoneNumber(Kg(this))};Jg.prototype.Gc=function(a,b){var c=Kg(this);c.idToken=b;return Q(a,Lg,c)};
Jg.prototype.Gd=function(a,b){var c=Kg(this);c.operation="REAUTH";a=Q(a,Mg,c);return qg(a,b)};Jg.prototype.G=function(){var a={providerId:"phone"};this.S.verificationId&&(a.verificationId=this.S.verificationId);this.S.ad&&(a.verificationCode=this.S.ad);this.S.ic&&(a.temporaryProof=this.S.ic);this.S.phoneNumber&&(a.phoneNumber=this.S.phoneNumber);return a};
var Kg=function(a){return a.S.ic&&a.S.phoneNumber?{temporaryProof:a.S.ic,phoneNumber:a.S.phoneNumber}:{sessionInfo:a.S.verificationId,code:a.S.ad}},Ng=function(a){try{this.qf=a||firebase.auth()}catch(b){throw new O("argument-error","Either an instance of firebase.auth.Auth must be passed as an argument to the firebase.auth.PhoneAuthProvider constructor, or the default firebase App instance must be initialized via firebase.initializeApp().");}bg(this,{providerId:"phone",isOAuthProvider:!1})};
Ng.prototype.verifyPhoneNumber=function(a,b){var c=this.qf.f;return D(b.verify()).then(function(d){if(!m(d))throw new O("argument-error","An implementation of firebase.auth.ApplicationVerifier.prototype.verify() must return a firebase.Promise that resolves with a string.");switch(b.type){case "recaptcha":return Q(c,Og,{phoneNumber:a,recaptchaToken:d});default:throw new O("argument-error",'Only firebase.auth.ApplicationVerifiers with type="recaptcha" are currently supported.');}})};
var Pg=function(a,b){if(!a)throw new O("missing-verification-id");if(!b)throw new O("missing-verification-code");return new Jg({verificationId:a,ad:b})};bg(Ng,{PROVIDER_ID:"phone"});
var Qg=function(a){if(a.temporaryProof&&a.phoneNumber)return new Jg({ic:a.temporaryProof,phoneNumber:a.phoneNumber});var b=a&&a.providerId;if(!b||"password"===b)return null;var c=a&&a.oauthAccessToken,d=a&&a.oauthTokenSecret;a=a&&a.oauthIdToken;try{switch(b){case "google.com":return Cg(a,c);case "facebook.com":return yg(c);case "github.com":return Ag(c);case "twitter.com":return Eg(c,d);default:return(new P(b)).credential(a,c)}}catch(e){return null}},Rg=function(a){if(!a.isOAuthProvider)throw new O("invalid-oauth-provider");
};var Sg=function(a,b,c){O.call(this,a,c);a=b||{};a.email&&N(this,"email",a.email);a.phoneNumber&&N(this,"phoneNumber",a.phoneNumber);a.credential&&N(this,"credential",a.credential)};t(Sg,O);Sg.prototype.G=function(){var a={code:this.code,message:this.message};this.email&&(a.email=this.email);this.phoneNumber&&(a.phoneNumber=this.phoneNumber);var b=this.credential&&this.credential.G();b&&mb(a,b);return a};Sg.prototype.toJSON=function(){return this.G()};
var Tg=function(a){if(a.code){var b=a.code||"";0==b.indexOf("auth/")&&(b=b.substring(5));var c={credential:Qg(a)};if(a.email)c.email=a.email;else if(a.phoneNumber)c.phoneNumber=a.phoneNumber;else return new O(b,a.message||void 0);return new Sg(b,c,a.message)}return null};var Ug=function(a){this.Dg=a};t(Ug,Lc);Ug.prototype.sc=function(){return new this.Dg};Ug.prototype.Cd=function(){return{}};
var R=function(a,b,c){var d="Node"==Hf();d=k.XMLHttpRequest||d&&firebase.INTERNAL.node&&firebase.INTERNAL.node.XMLHttpRequest;if(!d)throw new O("internal-error","The XMLHttpRequest compatibility library was not found.");this.m=a;a=b||{};this.pg=a.secureTokenEndpoint||"https://securetoken.googleapis.com/v1/token";this.qg=a.secureTokenTimeout||Vg;this.Qc=kb(a.secureTokenHeaders||Wg);this.Af=a.firebaseEndpoint||"https://www.googleapis.com/identitytoolkit/v3/relyingparty/";this.Bf=a.firebaseTimeout||
Xg;this.mb=kb(a.firebaseHeaders||Yg);c&&(this.mb["X-Client-Version"]=c,this.Qc["X-Client-Version"]=c);this.sf=new Qc;this.Cg=new Ug(d)},Zg,Vg=new Wf(3E4,6E4),Wg={"Content-Type":"application/x-www-form-urlencoded"},Xg=new Wf(3E4,6E4),Yg={"Content-Type":"application/json"},$g=function(a,b){b?a.mb["X-Firebase-Locale"]=b:delete a.mb["X-Firebase-Locale"]},ah=function(a,b){b?(a.mb["X-Client-Version"]=b,a.Qc["X-Client-Version"]=b):(delete a.mb["X-Client-Version"],delete a.Qc["X-Client-Version"])},ch=function(a,
b,c,d,e,f,g){Vf()?(wf()?a=r(a.sg,a):(Zg||(Zg=new C(function(a,b){bh(a,b)})),a=r(a.rg,a)),a(b,c,d,e,f,g)):c&&c(null)};
R.prototype.sg=function(a,b,c,d,e,f){var g="Node"==Hf(),l=If()?g?new I(this.Cg):new I:new I(this.sf);if(f){l.Db=Math.max(0,f);var n=setTimeout(function(){l.dispatchEvent("timeout")},f)}l.listen("complete",function(){n&&clearTimeout(n);var a=null;try{a=JSON.parse(Se(this))||null}catch(zb){a=null}b&&b(a)});sc(l,"ready",function(){n&&clearTimeout(n);this.Ma||(this.Ma=!0,this.lb())});sc(l,"timeout",function(){n&&clearTimeout(n);this.Ma||(this.Ma=!0,this.lb());b&&b(null)});l.send(a,c,d,e)};
var dh=Ha("https://apis.google.com/js/client.js?onload=%{onload}"),eh="__fcb"+Math.floor(1E6*Math.random()).toString(),bh=function(a,b){if(((window.gapi||{}).client||{}).request)a();else{k[eh]=function(){((window.gapi||{}).client||{}).request?a():b(Error("CORS_UNSUPPORTED"))};var c=Ma(dh,{onload:eh});Xd(ee(c),function(){b(Error("CORS_UNSUPPORTED"))})}};
R.prototype.rg=function(a,b,c,d,e){var f=this;Zg.then(function(){window.gapi.client.setApiKey(f.m);var g=window.gapi.auth.getToken();window.gapi.auth.setToken(null);window.gapi.client.request({path:a,method:c,body:d,headers:e,authType:"none",callback:function(a){window.gapi.auth.setToken(g);b&&b(a)}})}).g(function(a){b&&b({error:{message:a&&a.message||"CORS_UNSUPPORTED"}})})};
var gh=function(a,b){return new C(function(c,d){"refresh_token"==b.grant_type&&b.refresh_token||"authorization_code"==b.grant_type&&b.code?ch(a,a.pg+"?key="+encodeURIComponent(a.m),function(a){a?a.error?d(fh(a)):a.access_token&&a.refresh_token?c(a):d(new O("internal-error")):d(new O("network-request-failed"))},"POST",nf(b).toString(),a.Qc,a.qg.get()):d(new O("internal-error"))})},hh=function(a,b,c,d,e,f){var g=hf(a.Af+b);K(g,"key",a.m);f&&K(g,"cb",ma().toString());var l="GET"==c;if(l)for(var n in d)d.hasOwnProperty(n)&&
K(g,n,d[n]);return new C(function(b,f){ch(a,g.toString(),function(a){a?a.error?f(fh(a,e||{})):b(a):f(new O("network-request-failed"))},c,l?void 0:Hc(Rf(d)),a.mb,a.Bf.get())})},ih=function(a){if(!yc.test(a.email))throw new O("invalid-email");},jh=function(a){"email"in a&&ih(a)},lh=function(a,b){return Q(a,kh,{identifier:b,continueUri:Nf()?sf():"http://localhost"}).then(function(a){return a.allProviders||[]})},nh=function(a){return Q(a,mh,{}).then(function(a){return a.authorizedDomains||[]})},oh=function(a){if(!a.idToken)throw new O("internal-error");
},ph=function(a){if(a.phoneNumber||a.temporaryProof){if(!a.phoneNumber||!a.temporaryProof)throw new O("internal-error");}else{if(!a.sessionInfo)throw new O("missing-verification-id");if(!a.code)throw new O("missing-verification-code");}};R.prototype.signInAnonymously=function(){return Q(this,qh,{})};R.prototype.updateEmail=function(a,b){return Q(this,rh,{idToken:a,email:b})};R.prototype.updatePassword=function(a,b){return Q(this,Hg,{idToken:a,password:b})};var sh={displayName:"DISPLAY_NAME",photoUrl:"PHOTO_URL"};
R.prototype.updateProfile=function(a,b){var c={idToken:a},d=[];eb(sh,function(a,f){var e=b[f];null===e?d.push(a):f in b&&(c[f]=e)});d.length&&(c.deleteAttribute=d);return Q(this,rh,c)};R.prototype.sendPasswordResetEmail=function(a,b){a={requestType:"PASSWORD_RESET",email:a};mb(a,b);return Q(this,th,a)};R.prototype.sendEmailVerification=function(a,b){a={requestType:"VERIFY_EMAIL",idToken:a};mb(a,b);return Q(this,uh,a)};R.prototype.verifyPhoneNumber=function(a){return Q(this,vh,a)};
var xh=function(a,b,c){return Q(a,wh,{idToken:b,deleteProvider:c})},yh=function(a){if(!a.requestUri||!a.sessionId&&!a.postBody)throw new O("internal-error");},zh=function(a){var b=null;a.needConfirmation?(a.code="account-exists-with-different-credential",b=Tg(a)):"FEDERATED_USER_ID_ALREADY_LINKED"==a.errorMessage?(a.code="credential-already-in-use",b=Tg(a)):"EMAIL_EXISTS"==a.errorMessage&&(a.code="email-already-in-use",b=Tg(a));if(b)throw b;if(!a.idToken)throw new O("internal-error");},sg=function(a,
b){b.returnIdpCredential=!0;return Q(a,Ah,b)},ug=function(a,b){b.returnIdpCredential=!0;return Q(a,Bh,b)},vg=function(a,b){b.returnIdpCredential=!0;b.autoCreate=!1;return Q(a,Ch,b)},Dh=function(a){if(!a.oobCode)throw new O("invalid-action-code");};R.prototype.confirmPasswordReset=function(a,b){return Q(this,Eh,{oobCode:a,newPassword:b})};R.prototype.checkActionCode=function(a){return Q(this,Fh,{oobCode:a})};R.prototype.applyActionCode=function(a){return Q(this,Gh,{oobCode:a})};
var Gh={endpoint:"setAccountInfo",D:Dh,cb:"email"},Fh={endpoint:"resetPassword",D:Dh,$:function(a){if(!a.email||!a.requestType)throw new O("internal-error");}},Hh={endpoint:"signupNewUser",D:function(a){ih(a);if(!a.password)throw new O("weak-password");},$:oh,Aa:!0},kh={endpoint:"createAuthUri"},Ih={endpoint:"deleteAccount",ab:["idToken"]},wh={endpoint:"setAccountInfo",ab:["idToken","deleteProvider"],D:function(a){if(!ha(a.deleteProvider))throw new O("internal-error");}},Jh={endpoint:"getAccountInfo"},
uh={endpoint:"getOobConfirmationCode",ab:["idToken","requestType"],D:function(a){if("VERIFY_EMAIL"!=a.requestType)throw new O("internal-error");},cb:"email"},th={endpoint:"getOobConfirmationCode",ab:["requestType"],D:function(a){if("PASSWORD_RESET"!=a.requestType)throw new O("internal-error");ih(a)},cb:"email"},mh={he:!0,endpoint:"getProjectConfig",Ce:"GET"},Kh={he:!0,endpoint:"getRecaptchaParam",Ce:"GET",$:function(a){if(!a.recaptchaSiteKey)throw new O("internal-error");}},Eh={endpoint:"resetPassword",
D:Dh,cb:"email"},Og={endpoint:"sendVerificationCode",ab:["phoneNumber","recaptchaToken"],cb:"sessionInfo"},rh={endpoint:"setAccountInfo",ab:["idToken"],D:jh,Aa:!0},Hg={endpoint:"setAccountInfo",ab:["idToken"],D:function(a){jh(a);if(!a.password)throw new O("weak-password");},$:oh,Aa:!0},qh={endpoint:"signupNewUser",$:oh,Aa:!0},Ah={endpoint:"verifyAssertion",D:yh,$:zh,Aa:!0},Ch={endpoint:"verifyAssertion",D:yh,$:function(a){if(a.errorMessage&&"USER_NOT_FOUND"==a.errorMessage)throw new O("user-not-found");
if(!a.idToken)throw new O("internal-error");},Aa:!0},Bh={endpoint:"verifyAssertion",D:function(a){yh(a);if(!a.idToken)throw new O("internal-error");},$:zh,Aa:!0},Lh={endpoint:"verifyCustomToken",D:function(a){if(!a.token)throw new O("invalid-custom-token");},$:oh,Aa:!0},Gg={endpoint:"verifyPassword",D:function(a){ih(a);if(!a.password)throw new O("wrong-password");},$:oh,Aa:!0},vh={endpoint:"verifyPhoneNumber",D:ph,$:oh},Lg={endpoint:"verifyPhoneNumber",D:function(a){if(!a.idToken)throw new O("internal-error");
ph(a)},$:function(a){if(a.temporaryProof)throw a.code="credential-already-in-use",Tg(a);oh(a)}},Mg={vf:{USER_NOT_FOUND:"user-not-found"},endpoint:"verifyPhoneNumber",D:ph,$:oh},Q=function(a,b,c){if(!eg(c,b.ab))return E(new O("internal-error"));var d=b.Ce||"POST",e;return D(c).then(b.D).then(function(){b.Aa&&(c.returnSecureToken=!0);return hh(a,b.endpoint,d,c,b.vf,b.he||!1)}).then(function(a){return e=a}).then(b.$).then(function(){if(!b.cb)return e;if(!(b.cb in e))throw new O("internal-error");return e[b.cb]})},
fh=function(a,b){var c=(a.error&&a.error.errors&&a.error.errors[0]||{}).reason||"";var d={keyInvalid:"invalid-api-key",ipRefererBlocked:"app-not-authorized"};if(c=d[c]?new O(d[c]):null)return c;c=a.error&&a.error.message||"";d={INVALID_CUSTOM_TOKEN:"invalid-custom-token",CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_EMAIL:"invalid-email",INVALID_PASSWORD:"wrong-password",USER_DISABLED:"user-disabled",
MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",INVALID_MESSAGE_PAYLOAD:"invalid-message-payload",INVALID_RECIPIENT_EMAIL:"invalid-recipient-email",INVALID_SENDER:"invalid-sender",EMAIL_NOT_FOUND:"user-not-found",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",
INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",CORS_UNSUPPORTED:"cors-unsupported",DYNAMIC_LINK_NOT_ACTIVATED:"dynamic-link-not-activated",INVALID_APP_ID:"invalid-app-id",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",WEAK_PASSWORD:"weak-password",OPERATION_NOT_ALLOWED:"operation-not-allowed",USER_CANCELLED:"user-cancelled",CAPTCHA_CHECK_FAILED:"captcha-check-failed",INVALID_APP_CREDENTIAL:"invalid-app-credential",INVALID_CODE:"invalid-verification-code",
INVALID_PHONE_NUMBER:"invalid-phone-number",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_APP_CREDENTIAL:"missing-app-credential",MISSING_CODE:"missing-verification-code",MISSING_PHONE_NUMBER:"missing-phone-number",MISSING_SESSION_INFO:"missing-verification-id",QUOTA_EXCEEDED:"quota-exceeded",SESSION_EXPIRED:"code-expired",INVALID_CONTINUE_URI:"invalid-continue-uri",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",MISSING_IOS_BUNDLE_ID:"missing-ios-bundle-id",
UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id"};mb(d,b||{});b=(b=c.match(/^[^\s]+\s*:\s*(.*)$/))&&1<b.length?b[1]:void 0;for(var e in d)if(0===c.indexOf(e))return new O(d[e],b);!b&&a&&(b=Qf(a));return new O("internal-error",b)};var Nh=function(a){this.Ag=a;this.zc=null;this.Id=Mh(this)},Mh=function(a){return Oh().then(function(){return new C(function(b,c){M("gapi.iframes.getContext")().open({where:document.body,url:a.Ag,messageHandlersFilter:M("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER"),attributes:{style:{position:"absolute",top:"-100px",width:"1px",height:"1px"}},dontclear:!0},function(d){a.zc=d;a.zc.restyle({setHideOnLeave:!1});var e=setTimeout(function(){c(Error("Network Error"))},Ph.get()),f=function(){clearTimeout(e);
b()};d.ping(f).then(f,function(){c(Error("Network Error"))})})})})};Nh.prototype.sendMessage=function(a){var b=this;return this.Id.then(function(){return new C(function(c){b.zc.send(a.type,a,c,M("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER"))})})};
var Qh=function(a,b){a.Id.then(function(){a.zc.register("authEvent",b,M("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER"))})},Rh=Ha("https://apis.google.com/js/api.js?onload=%{onload}"),Sh=new Wf(3E4,6E4),Ph=new Wf(5E3,15E3),Th=null,Oh=function(){return Th?Th:Th=(new C(function(a,b){if(Vf()){var c=function(){Uf();M("gapi.load")("gapi.iframes",{callback:a,ontimeout:function(){Uf();b(Error("Network Error"))},timeout:Sh.get()})};if(M("gapi.iframes.Iframe"))a();else if(M("gapi.load"))c();else{var d="__iframefcb"+
Math.floor(1E6*Math.random()).toString();k[d]=function(){M("gapi.load")?c():b(Error("Network Error"))};d=Ma(Rh,{onload:d});D(ee(d)).g(function(){b(Error("Network Error"))})}}else b(Error("Network Error"))})).g(function(a){Th=null;throw a;})};var Uh=function(a,b,c){this.A=a;this.m=b;this.o=c;this.fb=null;this.Ba=jf(this.A,"/__/auth/iframe");K(this.Ba,"apiKey",this.m);K(this.Ba,"appName",this.o);this.O=null;this.M=[]};Uh.prototype.$d=function(a){this.fb=a;return this};Uh.prototype.Yd=function(a){this.O=a;return this};
Uh.prototype.toString=function(){this.fb?K(this.Ba,"v",this.fb):this.Ba.removeParameter("v");this.O?K(this.Ba,"eid",this.O):this.Ba.removeParameter("eid");this.M.length?K(this.Ba,"fw",this.M.join(",")):this.Ba.removeParameter("fw");return this.Ba.toString()};var Vh=function(a,b,c,d,e){this.A=a;this.m=b;this.o=c;this.pf=d;this.fb=this.W=this.Sd=null;this.xb=e;this.O=null};Vh.prototype.$d=function(a){this.fb=a;return this};Vh.prototype.Yd=function(a){this.O=a;return this};
Vh.prototype.toString=function(){var a=jf(this.A,"/__/auth/handler");K(a,"apiKey",this.m);K(a,"appName",this.o);K(a,"authType",this.pf);if(this.xb.isOAuthProvider){var b=this.xb;try{var c=firebase.app(this.o).auth().ia}catch(l){c=null}b.nd=c;K(a,"providerId",this.xb.providerId);b=this.xb;c=Rf(b.pe);for(var d in c)c[d]=c[d].toString();d=b.jg;c=kb(c);for(var e=0;e<d.length;e++){var f=d[e];f in c&&delete c[f]}b.Ed&&b.nd&&!c[b.Ed]&&(c[b.Ed]=b.nd);ib(c)||K(a,"customParameters",Qf(c))}"function"===typeof this.xb.xe&&
(b=this.xb.xe(),b.length&&K(a,"scopes",b.join(",")));this.Sd?K(a,"redirectUrl",this.Sd):a.removeParameter("redirectUrl");this.W?K(a,"eventId",this.W):a.removeParameter("eventId");this.fb?K(a,"v",this.fb):a.removeParameter("v");if(this.nc)for(var g in this.nc)this.nc.hasOwnProperty(g)&&!gf(a,g)&&K(a,g,this.nc[g]);this.O?K(a,"eid",this.O):a.removeParameter("eid");g=Wh(this.o);g.length&&K(a,"fw",g.join(","));return a.toString()};
var Wh=function(a){try{return $a(firebase.app(a).auth().M)}catch(b){return[]}},Xh=function(a,b,c,d,e){this.A=a;this.m=b;this.o=c;this.La=d||null;this.O=e||null;this.f=this.yd=this.ve=null;this.ta=[];this.Bc=this.wa=null},Yh=function(a){var b=sf();return nh(a).then(function(a){a:{var c=hf(b),e=c.qa;c=c.pa;for(var f=0;f<a.length;f++){var g=a[f];var l=c;var n=e;0==g.indexOf("chrome-extension://")?l=hf(g).pa==l&&"chrome-extension"==n:"http"!=n&&"https"!=n?l=!1:Bf.test(g)?l=l==g:(g=g.split(".").join("\\."),
l=(new RegExp("^(.+\\."+g+"|"+g+")$","i")).test(l));if(l){a=!0;break a}}a=!1}if(!a)throw new og(sf());})};h=Xh.prototype;h.Sb=function(){if(this.Bc)return this.Bc;var a=this;return this.Bc=Cf().then(function(){if(!a.yd){var b=a.La,c=a.O,d=Wh(a.o);b=(new Uh(a.A,a.m,a.o)).$d(b).Yd(c);b.M=$a(d||[]);a.yd=b.toString()}a.yc=new Nh(a.yd);Zh(a)})};
h.fc=function(a,b,c){var d=new O("popup-closed-by-user"),e=new O("web-storage-unsupported"),f=this,g=!1;return this.Ra().then(function(){$h(f).then(function(c){c||(a&&yf(a),b(e),g=!0)})}).g(function(){}).then(function(){if(!g)return Af(a)}).then(function(){if(!g)return Ce(c).then(function(){b(d)})})};h.Ve=function(){var a=L();return!Pf(a)&&!Tf(a)};h.Ae=function(){return!1};
h.$b=function(a,b,c,d,e,f,g){if(!a)return E(new O("popup-blocked"));if(g&&!Pf())return this.Ra().g(function(b){yf(a);e(b)}),d(),D();this.wa||(this.wa=Yh(ai(this)));var l=this;return this.wa.then(function(){var b=l.Ra().g(function(b){yf(a);e(b);throw b;});d();return b}).then(function(){Rg(c);if(!g){var d=bi(l.A,l.m,l.o,b,c,null,f,l.La,void 0,l.O);tf(d,a)}}).g(function(a){"auth/network-request-failed"==a.code&&(l.wa=null);throw a;})};
var ai=function(a){a.f||(a.ve=a.La?Kf(a.La,Wh(a.o)):null,a.f=new R(a.m,pf(a.O),a.ve));return a.f};Xh.prototype.ac=function(a,b,c){this.wa||(this.wa=Yh(ai(this)));var d=this;return this.wa.then(function(){Rg(b);var e=bi(d.A,d.m,d.o,a,b,sf(),c,d.La,void 0,d.O);tf(e)}).g(function(a){"auth/network-request-failed"==a.code&&(d.wa=null);throw a;})};Xh.prototype.Ra=function(){var a=this;return this.Sb().then(function(){return a.yc.Id}).g(function(){a.wa=null;throw new O("network-request-failed");})};
Xh.prototype.Ze=function(){return!0};
var bi=function(a,b,c,d,e,f,g,l,n,F){a=new Vh(a,b,c,d,e);a.Sd=f;a.W=g;f=a.$d(l);f.nc=kb(n||null);return f.Yd(F).toString()},Zh=function(a){if(!a.yc)throw Error("IfcHandler must be initialized!");Qh(a.yc,function(b){var c={};if(b&&b.authEvent){var d=!1;b=ng(b.authEvent);for(c=0;c<a.ta.length;c++)d=a.ta[c](b)||d;c={};c.status=d?"ACK":"ERROR";return D(c)}c.status="ERROR";return D(c)})},$h=function(a){var b={type:"webStorageSupport"};return a.Sb().then(function(){return a.yc.sendMessage(b)}).then(function(a){if(a&&a.length&&
"undefined"!==typeof a[0].webStorageSupport)return a[0].webStorageSupport;throw Error();})};Xh.prototype.ib=function(a){this.ta.push(a)};Xh.prototype.dc=function(a){Ya(this.ta,function(b){return b==a})};var ci=function(a,b,c,d,e,f){N(this,"type","recaptcha");this.bd=this.Ib=null;this.Kb=!1;this.ne=b;this.Fa=c||{theme:"light",type:"image"};this.J=[];if(this.Fa.sitekey)throw new O("argument-error","sitekey should not be provided for reCAPTCHA as one is automatically provisioned for the current project.");this.Cc="invisible"===this.Fa.size;if(!md(b)||!this.Cc&&md(b).hasChildNodes())throw new O("argument-error","reCAPTCHA container is either not found or already contains inner elements!");this.f=new R(a,
f||null,e||null);this.Gf=d||function(){return null};var g=this;this.Xc=[];var l=this.Fa.callback;this.Fa.callback=function(a){g.Lb(a);if("function"===typeof l)l(a);else if("string"===typeof l){var b=M(l,k);"function"===typeof b&&b(a)}};var n=this.Fa["expired-callback"];this.Fa["expired-callback"]=function(){g.Lb(null);if("function"===typeof n)n();else if("string"===typeof n){var a=M(n,k);"function"===typeof a&&a()}}};ci.prototype.Lb=function(a){for(var b=0;b<this.Xc.length;b++)try{this.Xc[b](a)}catch(c){}};
var di=function(a,b){Ya(a.Xc,function(a){return a==b})};ci.prototype.c=function(a){var b=this;this.J.push(a);Fd(a,function(){Xa(b.J,a)});return a};
ci.prototype.Tb=function(){var a=this;return this.Ib?this.Ib:this.Ib=this.c(D().then(function(){if(Nf())return Cf();throw new O("operation-not-supported-in-this-environment","RecaptchaVerifier is only supported in a browser HTTP/HTTPS environment.");}).then(function(){return ei(fi(),a.Gf())}).then(function(){return Q(a.f,Kh,{})}).then(function(b){a.Fa.sitekey=b.recaptchaSiteKey}).g(function(b){a.Ib=null;throw b;}))};
ci.prototype.render=function(){gi(this);var a=this;return this.c(this.Tb().then(function(){if(null===a.bd){var b=a.ne;if(!a.Cc){var c=md(b);b=qd("DIV");c.appendChild(b)}a.bd=grecaptcha.render(b,a.Fa)}return a.bd}))};ci.prototype.verify=function(){gi(this);var a=this;return this.c(this.render().then(function(b){return new C(function(c){var d=grecaptcha.getResponse(b);if(d)c(d);else{var e=function(b){b&&(di(a,e),c(b))};a.Xc.push(e);a.Cc&&grecaptcha.execute(a.bd)}})}))};
var gi=function(a){if(a.Kb)throw new O("internal-error","RecaptchaVerifier instance has been destroyed.");};ci.prototype.clear=function(){gi(this);this.Kb=!0;fi().ld--;for(var a=0;a<this.J.length;a++)this.J[a].cancel("RecaptchaVerifier instance has been destroyed.");if(!this.Cc){a=md(this.ne);for(var b;b=a.firstChild;)a.removeChild(b)}};
var hi=Ha("https://www.google.com/recaptcha/api.js?onload=%{onload}&render=explicit&hl=%{hl}"),ii=function(){this.ld=k.grecaptcha?Infinity:0;this.Be=null;this.jd="__rcb"+Math.floor(1E6*Math.random()).toString()},ei=function(a,b){return new C(function(c,d){if(Vf())if(!k.grecaptcha||b!==a.Be&&!a.ld){k[a.jd]=function(){if(k.grecaptcha){a.Be=b;var e=k.grecaptcha.render;k.grecaptcha.render=function(b,c){b=e(b,c);a.ld++;return b};c()}else d(new O("internal-error"));delete k[a.jd]};var e=Ma(hi,{onload:a.jd,
hl:b||""});D(ee(e)).g(function(){d(new O("internal-error","Unable to load external reCAPTCHA dependencies!"))})}else c();else d(new O("network-request-failed"))})},ji=null,fi=function(){ji||(ji=new ii);return ji},ki=function(a,b,c){try{this.i=c||firebase.app()}catch(f){throw new O("argument-error","No firebase.app.App instance is currently initialized.");}if(this.i.options&&this.i.options.apiKey)c=this.i.options.apiKey;else throw new O("invalid-api-key");var d=this,e=null;try{e=$a(this.i.auth().M)}catch(f){}e=
firebase.SDK_VERSION?Kf(firebase.SDK_VERSION,e):null;ci.call(this,c,a,b,function(){try{var a=d.i.auth().ia}catch(g){a=null}return a},e,pf(qf))};t(ki,ci);var li=function(a){this.F=a||firebase.INTERNAL.reactNative&&firebase.INTERNAL.reactNative.AsyncStorage;if(!this.F)throw new O("internal-error","The React Native compatibility library was not found.");};h=li.prototype;h.get=function(a){return D(this.F.getItem(a)).then(function(a){return a&&Sf(a)})};h.set=function(a,b){return D(this.F.setItem(a,Qf(b)))};h.remove=function(a){return D(this.F.removeItem(a))};h.jb=function(){};h.$a=function(){};var mi=function(){this.F={}};h=mi.prototype;h.get=function(a){return D(this.F[a])};h.set=function(a,b){this.F[a]=b;return D()};h.remove=function(a){delete this.F[a];return D()};h.jb=function(){};h.$a=function(){};var oi=function(){if(!ni()){if("Node"==Hf())throw new O("internal-error","The LocalStorage compatibility library was not found.");throw new O("web-storage-unsupported");}this.F=k.localStorage||firebase.INTERNAL.node.localStorage},ni=function(){var a="Node"==Hf();a=k.localStorage||a&&firebase.INTERNAL.node&&firebase.INTERNAL.node.localStorage;if(!a)return!1;try{return a.setItem("__sak","1"),a.removeItem("__sak"),!0}catch(b){return!1}};h=oi.prototype;
h.get=function(a){var b=this;return D().then(function(){var c=b.F.getItem(a);return Sf(c)})};h.set=function(a,b){var c=this;return D().then(function(){var d=Qf(b);null===d?c.remove(a):c.F.setItem(a,d)})};h.remove=function(a){var b=this;return D().then(function(){b.F.removeItem(a)})};h.jb=function(a){k.window&&lc(k.window,"storage",a)};h.$a=function(a){k.window&&tc(k.window,"storage",a)};var pi=function(){this.F={}};h=pi.prototype;h.get=function(){return D(null)};h.set=function(){return D()};h.remove=function(){return D()};h.jb=function(){};h.$a=function(){};var ri=function(){if(!qi()){if("Node"==Hf())throw new O("internal-error","The SessionStorage compatibility library was not found.");throw new O("web-storage-unsupported");}this.F=k.sessionStorage||firebase.INTERNAL.node.sessionStorage},qi=function(){var a="Node"==Hf();a=k.sessionStorage||a&&firebase.INTERNAL.node&&firebase.INTERNAL.node.sessionStorage;if(!a)return!1;try{return a.setItem("__sak","1"),a.removeItem("__sak"),!0}catch(b){return!1}};h=ri.prototype;
h.get=function(a){var b=this;return D().then(function(){var c=b.F.getItem(a);return Sf(c)})};h.set=function(a,b){var c=this;return D().then(function(){var d=Qf(b);null===d?c.remove(a):c.F.setItem(a,d)})};h.remove=function(a){var b=this;return D().then(function(){b.F.removeItem(a)})};h.jb=function(){};h.$a=function(){};var si=function(a,b,c,d,e,f){if(!window.indexedDB)throw new O("web-storage-unsupported");this.wf=a;this.Hd=b;this.md=c;this.cf=d;this.gb=e;this.Y={};this.gc=[];this.Wb=0;this.Of=f||k.indexedDB},ti,ui=function(a){return new C(function(b,c){var d=a.Of.open(a.wf,a.gb);d.onerror=function(a){c(Error(a.target.errorCode))};d.onupgradeneeded=function(b){b=b.target.result;try{b.createObjectStore(a.Hd,{keyPath:a.md})}catch(f){c(f)}};d.onsuccess=function(a){b(a.target.result)}})},wi=function(a){a.Fe||(a.Fe=
ui(a));return a.Fe},xi=function(a,b){return b.objectStore(a.Hd)},yi=function(a,b,c){return b.transaction([a.Hd],c?"readwrite":"readonly")},zi=function(a){return new C(function(b,c){a.onsuccess=function(a){a&&a.target?b(a.target.result):b()};a.onerror=function(a){c(Error(a.target.errorCode))}})};h=si.prototype;
h.set=function(a,b){var c=!1,d,e=this;return Fd(wi(this).then(function(b){d=b;b=xi(e,yi(e,d,!0));return zi(b.get(a))}).then(function(f){var g=xi(e,yi(e,d,!0));if(f)return f.value=b,zi(g.put(f));e.Wb++;c=!0;f={};f[e.md]=a;f[e.cf]=b;return zi(g.add(f))}).then(function(){e.Y[a]=b}),function(){c&&e.Wb--})};h.get=function(a){var b=this;return wi(this).then(function(c){return zi(xi(b,yi(b,c,!1)).get(a))}).then(function(a){return a&&a.value})};
h.remove=function(a){var b=!1,c=this;return Fd(wi(this).then(function(d){b=!0;c.Wb++;return zi(xi(c,yi(c,d,!0))["delete"](a))}).then(function(){delete c.Y[a]}),function(){b&&c.Wb--})};
h.wg=function(){var a=this;return wi(this).then(function(b){var c=xi(a,yi(a,b,!1));return c.getAll?zi(c.getAll()):new C(function(a,b){var d=[],e=c.openCursor();e.onsuccess=function(b){(b=b.target.result)?(d.push(b.value),b["continue"]()):a(d)};e.onerror=function(a){b(Error(a.target.errorCode))}})}).then(function(b){var c={},d=[];if(0==a.Wb){for(d=0;d<b.length;d++)c[b[d][a.md]]=b[d][a.cf];d=uf(a.Y,c);a.Y=c}return d})};h.jb=function(a){0==this.gc.length&&this.be();this.gc.push(a)};
h.$a=function(a){Ya(this.gc,function(b){return b==a});0==this.gc.length&&this.Tc()};h.be=function(){var a=this;this.Tc();var b=function(){a.Nd=Ce(800).then(r(a.wg,a)).then(function(b){0<b.length&&x(a.gc,function(a){a(b)})}).then(b).g(function(a){"STOP_EVENT"!=a.message&&b()});return a.Nd};b()};h.Tc=function(){this.Nd&&this.Nd.cancel("STOP_EVENT")};var Di=function(){this.re={Browser:Ai,Node:Bi,ReactNative:Ci}[Hf()]},Ei,Ai={C:oi,de:ri},Bi={C:oi,de:ri},Ci={C:li,de:pi};var Fi=function(a){this.Bd(a)};
Fi.prototype.Bd=function(a){var b=a.url;if("undefined"===typeof b)throw new O("missing-continue-uri");if("string"!==typeof b||"string"===typeof b&&!b.length)throw new O("invalid-continue-uri");this.rf=b;this.fe=this.oc=null;this.Ge=!1;var c=a.android;if(c&&"object"===typeof c){b=c.packageName;var d=c.installApp;c=c.minimumVersion;if("string"===typeof b&&b.length){this.oc=b;if("undefined"!==typeof d&&"boolean"!==typeof d)throw new O("argument-error","installApp property must be a boolean when specified.");this.Ge=
!!d;if("undefined"!==typeof c&&("string"!==typeof c||"string"===typeof c&&!c.length))throw new O("argument-error","minimumVersion property must be a non empty string when specified.");this.fe=c||null}else{if("undefined"!==typeof b)throw new O("argument-error","packageName property must be a non empty string when specified.");if("undefined"!==typeof d||"undefined"!==typeof c)throw new O("missing-android-pkg-name");}}else if("undefined"!==typeof c)throw new O("argument-error","android property must be a non null object when specified.");
this.xd=null;if((b=a.iOS)&&"object"===typeof b)if(b=b.bundleId,"string"===typeof b&&b.length)this.xd=b;else{if("undefined"!==typeof b)throw new O("argument-error","bundleId property must be a non empty string when specified.");}else if("undefined"!==typeof b)throw new O("argument-error","iOS property must be a non null object when specified.");a=a.handleCodeInApp;if("undefined"!==typeof a&&"boolean"!==typeof a)throw new O("argument-error","handleCodeInApp property must be a boolean when specified.");
if((this.le=!!a)&&!this.xd&&!this.oc)throw new O("argument-error","handleCodeInApp property can't be true when no mobile application is provided.");};var Gi=function(a){var b={};b.continueUrl=a.rf;b.canHandleCodeInApp=a.le;if(b.androidPackageName=a.oc)b.androidMinimumVersion=a.fe,b.androidInstallApp=a.Ge;b.iOSBundleId=a.xd;for(var c in b)null===b[c]&&delete b[c];return b};var Hi=function(a,b){this.uf=b;N(this,"verificationId",a)};Hi.prototype.confirm=function(a){a=Pg(this.verificationId,a);return this.uf(a)};var Ii=function(a,b,c,d){return(new Ng(a)).verifyPhoneNumber(b,c).then(function(a){return new Hi(a,d)})};var Ji=function(a){var b={},c=a.email,d=a.newEmail;a=a.requestType;if(!c||!a)throw Error("Invalid provider user info!");b.fromEmail=d||null;b.email=c;N(this,"operation",a);N(this,"data",fg(b))};var Ki=function(a,b,c,d,e,f){this.dg=a;this.lg=b;this.Hf=c;this.Hc=d;this.ee=e;this.mg=!!f;this.ub=null;this.Sa=this.Hc;if(this.ee<this.Hc)throw Error("Proactive refresh lower bound greater than upper bound!");};Ki.prototype.start=function(){this.Sa=this.Hc;Li(this,!0)};
var Mi=function(a,b){if(b)return a.Sa=a.Hc,a.Hf();b=a.Sa;a.Sa*=2;a.Sa>a.ee&&(a.Sa=a.ee);return b},Li=function(a,b){a.stop();a.ub=Ce(Mi(a,b)).then(function(){return a.mg?D():Yf()}).then(function(){return a.dg()}).then(function(){Li(a,!0)}).g(function(b){a.lg(b)&&Li(a,!1)})};Ki.prototype.stop=function(){this.ub&&(this.ub.cancel(),this.ub=null)};var Si=function(a){var b={};b["facebook.com"]=Ni;b["google.com"]=Oi;b["github.com"]=Pi;b["twitter.com"]=Qi;var c=a&&a.providerId;return c?b[c]?new b[c](a):new Ri(a):null},Ri=function(a){var b=Sf(a.rawUserInfo||"{}");a=a.providerId;if(!a)throw Error("Invalid additional user info!");N(this,"profile",fg(b||{}));N(this,"providerId",a)},Ni=function(a){Ri.call(this,a);if("facebook.com"!=this.providerId)throw Error("Invalid provider id!");};t(Ni,Ri);
var Pi=function(a){Ri.call(this,a);if("github.com"!=this.providerId)throw Error("Invalid provider id!");N(this,"username",this.profile&&this.profile.login||null)};t(Pi,Ri);var Oi=function(a){Ri.call(this,a);if("google.com"!=this.providerId)throw Error("Invalid provider id!");};t(Oi,Ri);var Qi=function(a){Ri.call(this,a);if("twitter.com"!=this.providerId)throw Error("Invalid provider id!");N(this,"username",a.screenName||null)};t(Qi,Ri);var Ti={LOCAL:"local",NONE:"none",SESSION:"session"},Ui=function(a){var b=new O("invalid-persistence-type"),c=new O("unsupported-persistence-type");a:{for(d in Ti)if(Ti[d]==a){var d=!0;break a}d=!1}if(!d||"string"!==typeof a)throw b;switch(Hf()){case "ReactNative":if("session"===a)throw c;break;case "Node":if("none"!==a)throw c;break;default:if(!Mf()&&"none"!==a)throw c;}},Vi=function(a,b,c,d){this.Ke=a;this.Wd=b;this.ng=c;this.ec=d;this.X={};Ei||(Ei=new Di);a=Ei;try{if(rf()){ti||(ti=new si("firebaseLocalStorageDb",
"firebaseLocalStorage","fbase_key","value",1));var e=ti}else e=new a.re.C;this.Qe=e}catch(f){this.Qe=new mi,this.ec=!0}try{this.Ye=new a.re.de}catch(f){this.Ye=new mi}this.Nf=new mi;this.ce=r(this.We,this);this.Y={}},Wi,Xi=function(){Wi||(Wi=new Vi("firebase",":",!Tf(L())&&Gf()?!0:!1,Pf()));return Wi},Yi=function(a,b){switch(b){case "session":return a.Ye;case "none":return a.Nf;default:return a.Qe}};h=Vi.prototype;h.ca=function(a,b){return this.Ke+this.Wd+a.name+(b?this.Wd+b:"")};
h.get=function(a,b){return Yi(this,a.C).get(this.ca(a,b))};h.remove=function(a,b){b=this.ca(a,b);"local"!=a.C||this.ec||(this.Y[b]=null);return Yi(this,a.C).remove(b)};h.set=function(a,b,c){var d=this.ca(a,c),e=this,f=Yi(this,a.C);return f.set(d,b).then(function(){return f.get(d)}).then(function(b){"local"!=a.C||e.ec||(e.Y[d]=b)})};h.addListener=function(a,b,c){a=this.ca(a,b);this.ec||(this.Y[a]=k.localStorage.getItem(a));ib(this.X)&&this.be();this.X[a]||(this.X[a]=[]);this.X[a].push(c)};
h.removeListener=function(a,b,c){a=this.ca(a,b);this.X[a]&&(Ya(this.X[a],function(a){return a==c}),0==this.X[a].length&&delete this.X[a]);ib(this.X)&&this.Tc()};h.be=function(){Yi(this,"local").jb(this.ce);this.ec||rf()||Zi(this)};var Zi=function(a){$i(a);a.Fd=setInterval(function(){for(var b in a.X){var c=k.localStorage.getItem(b),d=a.Y[b];c!=d&&(a.Y[b]=c,c=new Yb({type:"storage",key:b,target:window,oldValue:d,newValue:c,Md:!0}),a.We(c))}},1E3)},$i=function(a){a.Fd&&(clearInterval(a.Fd),a.Fd=null)};
Vi.prototype.Tc=function(){Yi(this,"local").$a(this.ce);$i(this)};
Vi.prototype.We=function(a){if(a&&a.Ef){var b=a.P.key;if(0==b.indexOf(this.Ke+this.Wd)&&this.X[b]){"undefined"!==typeof a.P.Md?Yi(this,"local").$a(this.ce):$i(this);if(this.ng){var c=k.localStorage.getItem(b),d=a.P.newValue;if(d!==c)null!==d?k.localStorage.setItem(b,d):k.localStorage.removeItem(b);else if(this.Y[b]===d&&"undefined"===typeof a.P.Md)return}var e=this;c=function(){if("undefined"!==typeof a.P.Md||e.Y[b]!==k.localStorage.getItem(b))e.Y[b]=k.localStorage.getItem(b),e.je(b)};z&&Cb&&10==
Cb&&k.localStorage.getItem(b)!==a.P.newValue&&a.P.newValue!==a.P.oldValue?setTimeout(c,10):c()}}else x(a,r(this.je,this))};Vi.prototype.je=function(a){this.X[a]&&x(this.X[a],function(a){a()})};var aj=function(a,b){this.j=a;this.h=b||Xi()},bj={name:"authEvent",C:"local"},cj=function(a){return a.h.get(bj,a.j).then(function(a){return ng(a)})};aj.prototype.ib=function(a){this.h.addListener(bj,this.j,a)};aj.prototype.dc=function(a){this.h.removeListener(bj,this.j,a)};var dj=function(a){this.h=a||Xi()},ej={name:"sessionId",C:"session"};dj.prototype.uc=function(a){return this.h.get(ej,a)};var fj=function(a,b,c,d,e,f,g){this.A=a;this.m=b;this.o=c;this.La=d||null;this.O=g||null;this.Xe=b+":"+c;this.og=new dj;this.we=new aj(this.Xe);this.Ad=null;this.ta=[];this.Sf=e||500;this.hg=f||2E3;this.Rb=this.Kc=null},gj=function(a){return new O("invalid-cordova-configuration",a)};
fj.prototype.Ra=function(){return this.Tb?this.Tb:this.Tb=Ef().then(function(){if("function"!==typeof M("universalLinks.subscribe",k))throw gj("cordova-universal-links-plugin is not installed");if("undefined"===typeof M("BuildInfo.packageName",k))throw gj("cordova-plugin-buildinfo is not installed");if("function"!==typeof M("cordova.plugins.browsertab.openUrl",k))throw gj("cordova-plugin-browsertab is not installed");if("function"!==typeof M("cordova.InAppBrowser.open",k))throw gj("cordova-plugin-inappbrowser is not installed");
},function(){throw new O("cordova-not-ready");})};var hj=function(){for(var a=20,b=[];0<a;)b.push("1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(Math.floor(62*Math.random()))),a--;return b.join("")},ij=function(a){var b=new Sb;b.update(a);return ab(b.digest())};h=fj.prototype;h.fc=function(a,b){b(new O("operation-not-supported-in-this-environment"));return D()};h.$b=function(){return E(new O("operation-not-supported-in-this-environment"))};h.Ze=function(){return!1};h.Ve=function(){return!0};
h.Ae=function(){return!0};
h.ac=function(a,b,c){if(this.Kc)return E(new O("redirect-operation-pending"));var d=this,e=k.document,f=null,g=null,l=null,n=null;return this.Kc=Fd(D().then(function(){Rg(b);return jj(d)}).then(function(){return kj(d,a,b,c)}).then(function(){return(new C(function(a,b){g=function(){var b=M("cordova.plugins.browsertab.close",k);a();"function"===typeof b&&b();d.Rb&&"function"===typeof d.Rb.close&&(d.Rb.close(),d.Rb=null);return!1};d.ib(g);l=function(){f||(f=Ce(d.hg).then(function(){b(new O("redirect-cancelled-by-user"))}))};n=
function(){Xf()&&l()};e.addEventListener("resume",l,!1);L().toLowerCase().match(/android/)||e.addEventListener("visibilitychange",n,!1)})).g(function(a){return lj(d).then(function(){throw a;})})}),function(){l&&e.removeEventListener("resume",l,!1);n&&e.removeEventListener("visibilitychange",n,!1);f&&f.cancel();g&&d.dc(g);d.Kc=null})};
var kj=function(a,b,c,d){var e=hj(),f=new mg(b,d,null,e,new O("no-auth-event")),g=M("BuildInfo.packageName",k);if("string"!==typeof g)throw new O("invalid-cordova-configuration");var l=M("BuildInfo.displayName",k),n={};if(L().toLowerCase().match(/iphone|ipad|ipod/))n.ibi=g;else if(L().toLowerCase().match(/android/))n.apn=g;else return E(new O("operation-not-supported-in-this-environment"));l&&(n.appDisplayName=l);e=ij(e);n.sessionId=e;var F=bi(a.A,a.m,a.o,b,c,null,d,a.La,n,a.O);return a.Ra().then(function(){var b=
a.Xe;return a.og.h.set(bj,f.G(),b)}).then(function(){var b=M("cordova.plugins.browsertab.isAvailable",k);if("function"!==typeof b)throw new O("invalid-cordova-configuration");var c=null;b(function(b){if(b){c=M("cordova.plugins.browsertab.openUrl",k);if("function"!==typeof c)throw new O("invalid-cordova-configuration");c(F)}else{c=M("cordova.InAppBrowser.open",k);if("function"!==typeof c)throw new O("invalid-cordova-configuration");b=c;var d=L();d=!(!d.match(/(iPad|iPhone|iPod).*OS 7_\d/i)&&!d.match(/(iPad|iPhone|iPod).*OS 8_\d/i));
a.Rb=b(F,d?"_blank":"_system","location=yes")}})})};fj.prototype.Lb=function(a){for(var b=0;b<this.ta.length;b++)try{this.ta[b](a)}catch(c){}};
var jj=function(a){a.Ad||(a.Ad=a.Ra().then(function(){return new C(function(b){var c=function(d){b(d);a.dc(c);return!1};a.ib(c);mj(a)})}));return a.Ad},lj=function(a){var b=null;return cj(a.we).then(function(c){b=c;c=a.we;return c.h.remove(bj,c.j)}).then(function(){return b})},mj=function(a){var b=M("universalLinks.subscribe",k);if("function"!==typeof b)throw new O("invalid-cordova-configuration");var c=new mg("unknown",null,null,null,new O("no-auth-event")),d=!1,e=Ce(a.Sf).then(function(){return lj(a).then(function(){d||
a.Lb(c)})}),f=function(b){d=!0;e&&e.cancel();lj(a).then(function(d){var e=c;if(d&&b&&b.url){e=null;var f=b.url;var g=hf(f),l=gf(g,"link"),n=gf(hf(l),"link");g=gf(g,"deep_link_id");f=gf(hf(g),"link")||g||n||l||f;-1!=f.indexOf("/__/auth/callback")&&(e=hf(f),e=Sf(gf(e,"firebaseError")||null),e=(e="object"===typeof e?lg(e):null)?new mg(d.ma,d.W,null,null,e):new mg(d.ma,d.W,f,d.uc()));e=e||c}a.Lb(e)})},g=k.handleOpenURL;k.handleOpenURL=function(a){0==a.toLowerCase().indexOf(M("BuildInfo.packageName",k).toLowerCase()+
"://")&&f({url:a});if("function"===typeof g)try{g(a)}catch(n){console.error(n)}};b(null,f)};fj.prototype.ib=function(a){this.ta.push(a);jj(this).g(function(b){"auth/invalid-cordova-configuration"===b.code&&(b=new mg("unknown",null,null,null,new O("no-auth-event")),a(b))})};fj.prototype.dc=function(a){Ya(this.ta,function(b){return b==a})};var nj=function(a){this.j=a;this.h=Xi()},oj={name:"pendingRedirect",C:"session"},pj=function(a){return a.h.set(oj,"pending",a.j)},qj=function(a){return a.h.remove(oj,a.j)},rj=function(a){return a.h.get(oj,a.j).then(function(a){return"pending"==a})};var vj=function(a,b,c){this.A=a;this.m=b;this.o=c;this.hc=[];this.sb=!1;this.fd=r(this.vd,this);this.Xa=new sj(this);this.Od=new tj(this);this.Xb=new nj(this.m+":"+this.o);this.Ia={};this.Ia.unknown=this.Xa;this.Ia.signInViaRedirect=this.Xa;this.Ia.linkViaRedirect=this.Xa;this.Ia.reauthViaRedirect=this.Xa;this.Ia.signInViaPopup=this.Od;this.Ia.linkViaPopup=this.Od;this.Ia.reauthViaPopup=this.Od;this.Z=uj(this.A,this.m,this.o,qf)},uj=function(a,b,c,d){var e=firebase.SDK_VERSION||null;return Df()?new fj(a,
b,c,e,void 0,void 0,d):new Xh(a,b,c,e,d)};vj.prototype.reset=function(){this.sb=!1;this.Z.dc(this.fd);this.Z=uj(this.A,this.m,this.o)};vj.prototype.Sb=function(){var a=this;this.sb||(this.sb=!0,this.Z.ib(this.fd));var b=this.Z;return this.Z.Ra().g(function(c){a.Z==b&&a.reset();throw c;})};var yj=function(a){a.Z.Ve()&&a.Sb().g(function(b){var c=new mg("unknown",null,null,null,new O("operation-not-supported-in-this-environment"));wj(b)&&a.vd(c)});a.Z.Ae()||xj(a.Xa)};
vj.prototype.subscribe=function(a){Va(this.hc,a)||this.hc.push(a);if(!this.sb){var b=this;rj(this.Xb).then(function(a){a?qj(b.Xb).then(function(){b.Sb().g(function(a){var c=new mg("unknown",null,null,null,new O("operation-not-supported-in-this-environment"));wj(a)&&b.vd(c)})}):yj(b)}).g(function(){yj(b)})}};vj.prototype.unsubscribe=function(a){Ya(this.hc,function(b){return b==a})};
vj.prototype.vd=function(a){if(!a)throw new O("invalid-auth-event");for(var b=!1,c=0;c<this.hc.length;c++){var d=this.hc[c];if(d.ke(a.ma,a.W)){(b=this.Ia[a.ma])&&b.Re(a,d);b=!0;break}}xj(this.Xa);return b};var zj=new Wf(2E3,1E4),Aj=new Wf(3E4,6E4);vj.prototype.getRedirectResult=function(){return this.Xa.getRedirectResult()};vj.prototype.$b=function(a,b,c,d,e){var f=this;return this.Z.$b(a,b,c,function(){f.sb||(f.sb=!0,f.Z.ib(f.fd))},function(){f.reset()},d,e)};
var wj=function(a){return a&&"auth/cordova-not-ready"==a.code?!0:!1};vj.prototype.ac=function(a,b,c){var d=this,e;return pj(this.Xb).then(function(){return d.Z.ac(a,b,c).g(function(a){if(wj(a))throw new O("operation-not-supported-in-this-environment");e=a;return qj(d.Xb).then(function(){throw e;})}).then(function(){return d.Z.Ze()?new C(function(){}):qj(d.Xb).then(function(){return d.getRedirectResult()}).then(function(){}).g(function(){})})})};
vj.prototype.fc=function(a,b,c,d){return this.Z.fc(c,function(c){a.bb(b,null,c,d)},zj.get())};var Bj={},Cj=function(a,b,c){var d=b+":"+c;Bj[d]||(Bj[d]=new vj(a,b,c));return Bj[d]},sj=function(a){this.h=a;this.Ab=null;this.cc=[];this.bc=[];this.yb=null;this.Rd=!1};sj.prototype.reset=function(){this.Ab=null;this.yb&&(this.yb.cancel(),this.yb=null)};
sj.prototype.Re=function(a,b){if(!a)return E(new O("invalid-auth-event"));this.reset();this.Rd=!0;var c=a.ma,d=a.W,e=a.getError()&&"auth/web-storage-unsupported"==a.getError().code,f=a.getError()&&"auth/operation-not-supported-in-this-environment"==a.getError().code;"unknown"!=c||e||f?a=a.ba?this.Pd(a,b):b.Nb(c,d)?this.Qd(a,b):E(new O("invalid-auth-event")):(Dj(this,!1,null,null),a=D());return a};var xj=function(a){a.Rd||(a.Rd=!0,Dj(a,!1,null,null))};
sj.prototype.Pd=function(a){Dj(this,!0,null,a.getError());return D()};sj.prototype.Qd=function(a,b){var c=this;b=b.Nb(a.ma,a.W);var d=a.Eb,e=a.uc(),f=!!a.ma.match(/Redirect$/);return b(d,e).then(function(a){Dj(c,f,a,null)}).g(function(a){Dj(c,f,null,a)})};
var Ej=function(a,b){a.Ab=function(){return E(b)};if(a.bc.length)for(var c=0;c<a.bc.length;c++)a.bc[c](b)},Fj=function(a,b){a.Ab=function(){return D(b)};if(a.cc.length)for(var c=0;c<a.cc.length;c++)a.cc[c](b)},Dj=function(a,b,c,d){b?d?Ej(a,d):Fj(a,c):Fj(a,{user:null});a.cc=[];a.bc=[]};sj.prototype.getRedirectResult=function(){var a=this;return new C(function(b,c){a.Ab?a.Ab().then(b,c):(a.cc.push(b),a.bc.push(c),Gj(a))})};
var Gj=function(a){var b=new O("timeout");a.yb&&a.yb.cancel();a.yb=Ce(Aj.get()).then(function(){a.Ab||Dj(a,!0,null,b)})},tj=function(a){this.h=a};tj.prototype.Re=function(a,b){if(!a)return E(new O("invalid-auth-event"));var c=a.ma,d=a.W;return a.ba?this.Pd(a,b):b.Nb(c,d)?this.Qd(a,b):E(new O("invalid-auth-event"))};tj.prototype.Pd=function(a,b){b.bb(a.ma,null,a.getError(),a.W);return D()};
tj.prototype.Qd=function(a,b){var c=a.W,d=a.ma,e=b.Nb(d,c),f=a.Eb;a=a.uc();return e(f,a).then(function(a){b.bb(d,a,null,c)}).g(function(a){b.bb(d,null,a,c)})};var Hj=function(a){this.f=a;this.Ja=this.fa=null;this.Na=0};Hj.prototype.G=function(){return{apiKey:this.f.m,refreshToken:this.fa,accessToken:this.Ja,expirationTime:this.Na}};
var Jj=function(a,b){var c=b.idToken,d=b.refreshToken;b=Ij(b.expiresIn);a.Ja=c;a.Na=b;a.fa=d},Ij=function(a){return ma()+1E3*parseInt(a,10)},Kj=function(a,b){return gh(a.f,b).then(function(b){a.Ja=b.access_token;a.Na=Ij(b.expires_in);a.fa=b.refresh_token;return{accessToken:a.Ja,expirationTime:a.Na,refreshToken:a.fa}}).g(function(b){"auth/user-token-expired"==b.code&&(a.fa=null);throw b;})};
Hj.prototype.getToken=function(a){a=!!a;return this.Ja&&!this.fa?E(new O("user-token-expired")):a||!this.Ja||ma()>this.Na-3E4?this.fa?Kj(this,{grant_type:"refresh_token",refresh_token:this.fa}):D(null):D({accessToken:this.Ja,expirationTime:this.Na,refreshToken:this.fa})};var Lj=function(a,b,c,d,e,f){bg(this,{uid:a,displayName:d||null,photoURL:e||null,email:c||null,phoneNumber:f||null,providerId:b})},Mj=function(a,b){B.call(this,a);for(var c in b)this[c]=b[c]};t(Mj,B);
var S=function(a,b,c){this.J=[];this.m=a.apiKey;this.o=a.appName;this.A=a.authDomain||null;a=firebase.SDK_VERSION?Kf(firebase.SDK_VERSION):null;this.f=new R(this.m,pf(qf),a);this.ra=new Hj(this.f);Nj(this,b.idToken);Jj(this.ra,b);N(this,"refreshToken",this.ra.fa);Oj(this,c||{});G.call(this);this.Lc=!1;this.A&&Of()&&(this.v=Cj(this.A,this.m,this.o));this.Sc=[];this.sa=null;this.wb=Pj(this);this.Gb=r(this.wd,this);var d=this;this.ia=null;this.Ne=function(a){d.Cb(a.languageCode)};this.Dd=null;this.M=
[];this.Me=function(a){Qj(d,a.Cf)};this.sd=null};t(S,G);S.prototype.Cb=function(a){this.ia=a;$g(this.f,a)};var Rj=function(a,b){a.Dd&&tc(a.Dd,"languageCodeChanged",a.Ne);(a.Dd=b)&&lc(b,"languageCodeChanged",a.Ne)},Qj=function(a,b){a.M=b;ah(a.f,firebase.SDK_VERSION?Kf(firebase.SDK_VERSION,a.M):null)},Sj=function(a,b){a.sd&&tc(a.sd,"frameworkChanged",a.Me);(a.sd=b)&&lc(b,"frameworkChanged",a.Me)};S.prototype.wd=function(){this.wb.ub&&(this.wb.stop(),this.wb.start())};
var Tj=function(a){try{return firebase.app(a.o).auth()}catch(b){throw new O("internal-error","No firebase.auth.Auth instance is available for the Firebase App '"+a.o+"'!");}},Pj=function(a){return new Ki(function(){return a.getIdToken(!0)},function(a){return a&&"auth/network-request-failed"==a.code?!0:!1},function(){var b=a.ra.Na-ma()-3E5;return 0<b?b:0},3E4,96E4,!1)},Uj=function(a){a.Kb||a.wb.ub||(a.wb.start(),tc(a,"tokenChanged",a.Gb),lc(a,"tokenChanged",a.Gb))},Vj=function(a){tc(a,"tokenChanged",
a.Gb);a.wb.stop()},Nj=function(a,b){a.He=b;N(a,"_lat",b)},Wj=function(a,b){Ya(a.Sc,function(a){return a==b})},Xj=function(a){for(var b=[],c=0;c<a.Sc.length;c++)b.push(a.Sc[c](a));return Cd(b).then(function(){return a})},Yj=function(a){a.v&&!a.Lc&&(a.Lc=!0,a.v.subscribe(a))},Oj=function(a,b){bg(a,{uid:b.uid,displayName:b.displayName||null,photoURL:b.photoURL||null,email:b.email||null,emailVerified:b.emailVerified||!1,phoneNumber:b.phoneNumber||null,isAnonymous:b.isAnonymous||!1,providerData:[]})};
N(S.prototype,"providerId","firebase");var Zj=function(){},ak=function(a){return D().then(function(){if(a.Kb)throw new O("app-deleted");})},bk=function(a){return Ra(a.providerData,function(a){return a.providerId})},dk=function(a,b){b&&(ck(a,b.providerId),a.providerData.push(b))},ck=function(a,b){Ya(a.providerData,function(a){return a.providerId==b})},ek=function(a,b,c){("uid"!=b||c)&&a.hasOwnProperty(b)&&N(a,b,c)};
S.prototype.copy=function(a){var b=this;b!=a&&(bg(this,{uid:a.uid,displayName:a.displayName,photoURL:a.photoURL,email:a.email,emailVerified:a.emailVerified,phoneNumber:a.phoneNumber,isAnonymous:a.isAnonymous,providerData:[]}),x(a.providerData,function(a){dk(b,a)}),this.ra=a.ra,N(this,"refreshToken",this.ra.fa))};S.prototype.reload=function(){var a=this;return this.c(ak(this).then(function(){return fk(a).then(function(){return Xj(a)}).then(Zj)}))};
var fk=function(a){return a.getIdToken().then(function(b){var c=a.isAnonymous;return gk(a,b).then(function(){c||ek(a,"isAnonymous",!1);return b})})};S.prototype.getIdToken=function(a){var b=this;return this.c(ak(this).then(function(){return b.ra.getToken(a)}).then(function(a){if(!a)throw new O("internal-error");a.accessToken!=b.He&&(Nj(b,a.accessToken),b.Ta());ek(b,"refreshToken",a.refreshToken);return a.accessToken}))};
S.prototype.getToken=function(a){Zf["firebase.User.prototype.getToken is deprecated. Please use firebase.User.prototype.getIdToken instead."]||(Zf["firebase.User.prototype.getToken is deprecated. Please use firebase.User.prototype.getIdToken instead."]=!0,"undefined"!==typeof console&&"function"===typeof console.warn&&console.warn("firebase.User.prototype.getToken is deprecated. Please use firebase.User.prototype.getIdToken instead."));return this.getIdToken(a)};
var hk=function(a,b){b.idToken&&a.He!=b.idToken&&(Jj(a.ra,b),a.Ta(),Nj(a,b.idToken),ek(a,"refreshToken",a.ra.fa))};S.prototype.Ta=function(){this.dispatchEvent(new Mj("tokenChanged"))};var gk=function(a,b){return Q(a.f,Jh,{idToken:b}).then(r(a.eg,a))};
S.prototype.eg=function(a){a=a.users;if(!a||!a.length)throw new O("internal-error");a=a[0];Oj(this,{uid:a.localId,displayName:a.displayName,photoURL:a.photoUrl,email:a.email,emailVerified:!!a.emailVerified,phoneNumber:a.phoneNumber});for(var b=ik(a),c=0;c<b.length;c++)dk(this,b[c]);ek(this,"isAnonymous",!(this.email&&a.passwordHash)&&!(this.providerData&&this.providerData.length))};
var ik=function(a){return(a=a.providerUserInfo)&&a.length?Ra(a,function(a){return new Lj(a.rawId,a.providerId,a.email,a.displayName,a.photoUrl,a.phoneNumber)}):[]};S.prototype.reauthenticateAndRetrieveDataWithCredential=function(a){var b=this,c=null;return this.c(a.Gd(this.f,this.uid).then(function(a){hk(b,a);c=jk(b,a,"reauthenticate");b.sa=null;return b.reload()}).then(function(){return c}),!0)};S.prototype.reauthenticateWithCredential=function(a){return this.reauthenticateAndRetrieveDataWithCredential(a).then(function(){})};
var kk=function(a,b){return fk(a).then(function(){if(Va(bk(a),b))return Xj(a).then(function(){throw new O("provider-already-linked");})})};S.prototype.linkAndRetrieveDataWithCredential=function(a){var b=this,c=null;return this.c(kk(this,a.providerId).then(function(){return b.getIdToken()}).then(function(c){return a.Gc(b.f,c)}).then(function(a){c=jk(b,a,"link");return lk(b,a)}).then(function(){return c}))};S.prototype.linkWithCredential=function(a){return this.linkAndRetrieveDataWithCredential(a).then(function(a){return a.user})};
S.prototype.linkWithPhoneNumber=function(a,b){var c=this;return this.c(kk(this,"phone").then(function(){return Ii(Tj(c),a,b,r(c.linkAndRetrieveDataWithCredential,c))}))};S.prototype.reauthenticateWithPhoneNumber=function(a,b){var c=this;return this.c(D().then(function(){return Ii(Tj(c),a,b,r(c.reauthenticateAndRetrieveDataWithCredential,c))}),!0)};var jk=function(a,b,c){var d=Qg(b);b=Si(b);return cg({user:a,credential:d,additionalUserInfo:b,operationType:c})},lk=function(a,b){hk(a,b);return a.reload().then(function(){return a})};
h=S.prototype;h.updateEmail=function(a){var b=this;return this.c(this.getIdToken().then(function(c){return b.f.updateEmail(c,a)}).then(function(a){hk(b,a);return b.reload()}))};h.updatePhoneNumber=function(a){var b=this;return this.c(this.getIdToken().then(function(c){return a.Gc(b.f,c)}).then(function(a){hk(b,a);return b.reload()}))};h.updatePassword=function(a){var b=this;return this.c(this.getIdToken().then(function(c){return b.f.updatePassword(c,a)}).then(function(a){hk(b,a);return b.reload()}))};
h.updateProfile=function(a){if(void 0===a.displayName&&void 0===a.photoURL)return ak(this);var b=this;return this.c(this.getIdToken().then(function(c){return b.f.updateProfile(c,{displayName:a.displayName,photoUrl:a.photoURL})}).then(function(a){hk(b,a);ek(b,"displayName",a.displayName||null);ek(b,"photoURL",a.photoUrl||null);x(b.providerData,function(a){"password"===a.providerId&&(N(a,"displayName",b.displayName),N(a,"photoURL",b.photoURL))});return Xj(b)}).then(Zj))};
h.unlink=function(a){var b=this;return this.c(fk(this).then(function(c){return Va(bk(b),a)?xh(b.f,c,[a]).then(function(a){var c={};x(a.providerUserInfo||[],function(a){c[a.providerId]=!0});x(bk(b),function(a){c[a]||ck(b,a)});c[Ng.PROVIDER_ID]||N(b,"phoneNumber",null);return Xj(b)}):Xj(b).then(function(){throw new O("no-such-provider");})}))};
h["delete"]=function(){var a=this;return this.c(this.getIdToken().then(function(b){return Q(a.f,Ih,{idToken:b})}).then(function(){a.dispatchEvent(new Mj("userDeleted"))})).then(function(){for(var b=0;b<a.J.length;b++)a.J[b].cancel("app-deleted");Rj(a,null);Sj(a,null);a.J=[];a.Kb=!0;Vj(a);N(a,"refreshToken",null);a.v&&a.v.unsubscribe(a)})};
h.ke=function(a,b){return"linkViaPopup"==a&&(this.la||null)==b&&this.ka||"reauthViaPopup"==a&&(this.la||null)==b&&this.ka||"linkViaRedirect"==a&&(this.Ha||null)==b||"reauthViaRedirect"==a&&(this.Ha||null)==b?!0:!1};h.bb=function(a,b,c,d){"linkViaPopup"!=a&&"reauthViaPopup"!=a||d!=(this.la||null)||(c&&this.Va?this.Va(c):b&&!c&&this.ka&&this.ka(b),this.K&&(this.K.cancel(),this.K=null),delete this.ka,delete this.Va)};
h.Nb=function(a,b){return"linkViaPopup"==a&&b==(this.la||null)?r(this.te,this):"reauthViaPopup"==a&&b==(this.la||null)?r(this.ue,this):"linkViaRedirect"==a&&(this.Ha||null)==b?r(this.te,this):"reauthViaRedirect"==a&&(this.Ha||null)==b?r(this.ue,this):null};h.tc=function(){return Lf(this.uid+":::")};h.linkWithPopup=function(a){var b=this;return mk(this,"linkViaPopup",a,function(){return kk(b,a.providerId).then(function(){return Xj(b)})},!1)};
h.reauthenticateWithPopup=function(a){return mk(this,"reauthViaPopup",a,function(){return D()},!0)};
var mk=function(a,b,c,d,e){if(!Of())return E(new O("operation-not-supported-in-this-environment"));if(a.sa&&!e)return E(a.sa);var f=jg(c.providerId),g=a.tc(),l=null;(!Pf()||Gf())&&a.A&&c.isOAuthProvider&&(l=bi(a.A,a.m,a.o,b,c,null,g,firebase.SDK_VERSION||null));var n=zf(l,f&&f.Zb,f&&f.Yb);d=d().then(function(){nk(a);if(!e)return a.getIdToken().then(function(){})}).then(function(){return a.v.$b(n,b,c,g,!!l)}).then(function(){return new C(function(c,d){a.bb(b,null,new O("cancelled-popup-request"),a.la||
null);a.ka=c;a.Va=d;a.la=g;a.K=a.v.fc(a,b,n,g)})}).then(function(a){n&&yf(n);return a?cg(a):null}).g(function(a){n&&yf(n);throw a;});return a.c(d,e)};S.prototype.linkWithRedirect=function(a){var b=this;return ok(this,"linkViaRedirect",a,function(){return kk(b,a.providerId)},!1)};S.prototype.reauthenticateWithRedirect=function(a){return ok(this,"reauthViaRedirect",a,function(){return D()},!0)};
var ok=function(a,b,c,d,e){if(!Of())return E(new O("operation-not-supported-in-this-environment"));if(a.sa&&!e)return E(a.sa);var f=null,g=a.tc();d=d().then(function(){nk(a);if(!e)return a.getIdToken().then(function(){})}).then(function(){a.Ha=g;return Xj(a)}).then(function(b){a.Ya&&(b=a.Ya,b=b.h.set(pk,a.G(),b.j));return b}).then(function(){return a.v.ac(b,c,g)}).g(function(b){f=b;if(a.Ya)return qk(a.Ya);throw f;}).then(function(){if(f)throw f;});return a.c(d,e)},nk=function(a){if(!a.v||!a.Lc){if(a.v&&
!a.Lc)throw new O("internal-error");throw new O("auth-domain-config-required");}};S.prototype.te=function(a,b){var c=this;this.K&&(this.K.cancel(),this.K=null);var d=null,e=this.getIdToken().then(function(d){return ug(c.f,{requestUri:a,sessionId:b,idToken:d})}).then(function(a){d=jk(c,a,"link");return lk(c,a)}).then(function(){return d});return this.c(e)};
S.prototype.ue=function(a,b){var c=this;this.K&&(this.K.cancel(),this.K=null);var d=null,e=D().then(function(){return qg(vg(c.f,{requestUri:a,sessionId:b}),c.uid)}).then(function(a){d=jk(c,a,"reauthenticate");hk(c,a);c.sa=null;return c.reload()}).then(function(){return d});return this.c(e,!0)};
S.prototype.sendEmailVerification=function(a){var b=this,c=null;return this.c(this.getIdToken().then(function(b){c=b;return"undefined"===typeof a||ib(a)?{}:Gi(new Fi(a))}).then(function(a){return b.f.sendEmailVerification(c,a)}).then(function(a){if(b.email!=a)return b.reload()}).then(function(){}))};S.prototype.c=function(a,b){var c=this,d=rk(this,a,b);this.J.push(d);Fd(d,function(){Xa(c.J,d)});return d};
var rk=function(a,b,c){return a.sa&&!c?(b.cancel(),E(a.sa)):b.g(function(b){!b||"auth/user-disabled"!=b.code&&"auth/user-token-expired"!=b.code||(a.sa||a.dispatchEvent(new Mj("userInvalidated")),a.sa=b);throw b;})};S.prototype.toJSON=function(){return this.G()};
S.prototype.G=function(){var a={uid:this.uid,displayName:this.displayName,photoURL:this.photoURL,email:this.email,emailVerified:this.emailVerified,phoneNumber:this.phoneNumber,isAnonymous:this.isAnonymous,providerData:[],apiKey:this.m,appName:this.o,authDomain:this.A,stsTokenManager:this.ra.G(),redirectEventId:this.Ha||null};x(this.providerData,function(b){a.providerData.push(dg(b))});return a};
var sk=function(a){if(!a.apiKey)return null;var b={apiKey:a.apiKey,authDomain:a.authDomain,appName:a.appName},c={};if(a.stsTokenManager&&a.stsTokenManager.accessToken&&a.stsTokenManager.expirationTime)c.idToken=a.stsTokenManager.accessToken,c.refreshToken=a.stsTokenManager.refreshToken||null,c.expiresIn=(a.stsTokenManager.expirationTime-ma())/1E3;else return null;var d=new S(b,c,a);a.providerData&&x(a.providerData,function(a){a&&dk(d,cg(a))});a.redirectEventId&&(d.Ha=a.redirectEventId);return d},
tk=function(a,b,c,d){var e=new S(a,b);c&&(e.Ya=c);d&&Qj(e,d);return e.reload().then(function(){return e})};var uk=function(a){this.j=a;this.h=Xi()},pk={name:"redirectUser",C:"session"},qk=function(a){return a.h.remove(pk,a.j)},vk=function(a,b){return a.h.get(pk,a.j).then(function(a){a&&b&&(a.authDomain=b);return sk(a||{})})};var xk=function(a,b){this.j=a;this.h=b||Xi();this.N=null;this.Jd=this.Bd();this.h.addListener(wk("local"),this.j,r(this.ug,this))};xk.prototype.ug=function(){var a=this,b=wk("local");yk(this,function(){return D().then(function(){return a.N&&"local"!=a.N.C?a.h.get(b,a.j):null}).then(function(c){if(c)return zk(a,"local").then(function(){a.N=b})})})};var zk=function(a,b){var c=[],d;for(d in Ti)Ti[d]!==b&&c.push(a.h.remove(wk(Ti[d]),a.j));c.push(a.h.remove(Ak,a.j));return Bd(c)};
xk.prototype.Bd=function(){var a=this,b=wk("local"),c=wk("session"),d=wk("none");return this.h.get(c,this.j).then(function(e){return e?c:a.h.get(d,a.j).then(function(c){return c?d:a.h.get(b,a.j).then(function(c){return c?b:a.h.get(Ak,a.j).then(function(a){return a?wk(a):b})})})}).then(function(b){a.N=b;return zk(a,b.C)}).g(function(){a.N||(a.N=b)})};var Ak={name:"persistence",C:"session"},wk=function(a){return{name:"authUser",C:a}};
xk.prototype.setPersistence=function(a){var b=null,c=this;Ui(a);return yk(this,function(){return a!=c.N.C?c.h.get(c.N,c.j).then(function(d){b=d;return zk(c,a)}).then(function(){c.N=wk(a);if(b)return c.h.set(c.N,b,c.j)}):D()})};
var Bk=function(a){return yk(a,function(){return a.h.set(Ak,a.N.C,a.j)})},Ck=function(a,b){return yk(a,function(){return a.h.set(a.N,b.G(),a.j)})},Dk=function(a){return yk(a,function(){return a.h.remove(a.N,a.j)})},Ek=function(a,b){return yk(a,function(){return a.h.get(a.N,a.j).then(function(a){a&&b&&(a.authDomain=b);return sk(a||{})})})},yk=function(a,b){a.Jd=a.Jd.then(b,b);return a.Jd};var T=function(a){this.Ea=!1;N(this,"app",a);if(this.i().options&&this.i().options.apiKey)a=firebase.SDK_VERSION?Kf(firebase.SDK_VERSION):null,this.f=new R(this.i().options&&this.i().options.apiKey,pf(qf),a);else throw new O("invalid-api-key");this.J=[];this.Ka=[];this.Fb=[];this.ag=firebase.INTERNAL.createSubscribe(r(this.Pf,this));this.mc=void 0;this.cg=firebase.INTERNAL.createSubscribe(r(this.Rf,this));Fk(this,null);a=this.i().options.apiKey;var b=this.i().name;this.na=new xk(a+":"+b);a=this.i().options.apiKey;
b=this.i().name;this.zb=new uk(a+":"+b);this.pc=this.c(Gk(this));this.ya=this.c(Hk(this));this.Dc=!1;this.ud=r(this.vg,this);this.bf=r(this.pb,this);this.Gb=r(this.wd,this);this.$e=r(this.Lf,this);this.af=r(this.Mf,this);Ik(this);this.INTERNAL={};this.INTERNAL["delete"]=r(this["delete"],this);this.INTERNAL.logFramework=r(this.Xf,this);this.Oa=0;G.call(this);Jk(this);this.M=[]};t(T,G);var Kk=function(a){B.call(this,"languageCodeChanged");this.languageCode=a};t(Kk,B);
var Lk=function(a){B.call(this,"frameworkChanged");this.Cf=a};t(Lk,B);T.prototype.setPersistence=function(a){a=this.na.setPersistence(a);return this.c(a)};T.prototype.Cb=function(a){this.ia===a||this.Ea||(this.ia=a,$g(this.f,this.ia),this.dispatchEvent(new Kk(this.ia)))};T.prototype.useDeviceLanguage=function(){var a=k.navigator;this.Cb(a?a.languages&&a.languages[0]||a.language||a.userLanguage||null:null)};
T.prototype.Xf=function(a){this.M.push(a);ah(this.f,firebase.SDK_VERSION?Kf(firebase.SDK_VERSION,this.M):null);this.dispatchEvent(new Lk(this.M))};var Jk=function(a){Object.defineProperty(a,"lc",{get:function(){return this.ia},set:function(a){this.Cb(a)},enumerable:!1});a.ia=null};T.prototype.toJSON=function(){return{apiKey:this.i().options.apiKey,authDomain:this.i().options.authDomain,appName:this.i().name,currentUser:U(this)&&U(this).G()}};
var Mk=function(a){return a.xf||E(new O("auth-domain-config-required"))},Ik=function(a){var b=a.i().options.authDomain,c=a.i().options.apiKey;b&&Of()&&(a.xf=a.pc.then(function(){if(!a.Ea){a.v=Cj(b,c,a.i().name);a.v.subscribe(a);U(a)&&Yj(U(a));if(a.Za){Yj(a.Za);var d=a.Za;d.Cb(a.ia);Rj(d,a);d=a.Za;Qj(d,a.M);Sj(d,a);a.Za=null}return a.v}}))};h=T.prototype;h.ke=function(a,b){switch(a){case "unknown":case "signInViaRedirect":return!0;case "signInViaPopup":return this.la==b&&!!this.ka;default:return!1}};
h.bb=function(a,b,c,d){"signInViaPopup"==a&&this.la==d&&(c&&this.Va?this.Va(c):b&&!c&&this.ka&&this.ka(b),this.K&&(this.K.cancel(),this.K=null),delete this.ka,delete this.Va)};h.Nb=function(a,b){return"signInViaRedirect"==a||"signInViaPopup"==a&&this.la==b&&this.ka?r(this.zf,this):null};
h.zf=function(a,b){var c=this;a={requestUri:a,sessionId:b};this.K&&(this.K.cancel(),this.K=null);var d=null,e=null,f=sg(c.f,a).then(function(a){d=Qg(a);e=Si(a);return a});a=c.pc.then(function(){return f}).then(function(a){return Nk(c,a)}).then(function(){return cg({user:U(c),credential:d,additionalUserInfo:e,operationType:"signIn"})});return this.c(a)};h.tc=function(){return Lf()};
h.signInWithPopup=function(a){if(!Of())return E(new O("operation-not-supported-in-this-environment"));var b=this,c=jg(a.providerId),d=this.tc(),e=null;(!Pf()||Gf())&&this.i().options.authDomain&&a.isOAuthProvider&&(e=bi(this.i().options.authDomain,this.i().options.apiKey,this.i().name,"signInViaPopup",a,null,d,firebase.SDK_VERSION||null));var f=zf(e,c&&c.Zb,c&&c.Yb);c=Mk(this).then(function(b){return b.$b(f,"signInViaPopup",a,d,!!e)}).then(function(){return new C(function(a,c){b.bb("signInViaPopup",
null,new O("cancelled-popup-request"),b.la);b.ka=a;b.Va=c;b.la=d;b.K=b.v.fc(b,"signInViaPopup",f,d)})}).then(function(a){f&&yf(f);return a?cg(a):null}).g(function(a){f&&yf(f);throw a;});return this.c(c)};h.signInWithRedirect=function(a){if(!Of())return E(new O("operation-not-supported-in-this-environment"));var b=this,c=Mk(this).then(function(){return Bk(b.na)}).then(function(){return b.v.ac("signInViaRedirect",a)});return this.c(c)};
h.getRedirectResult=function(){if(!Of())return E(new O("operation-not-supported-in-this-environment"));var a=this,b=Mk(this).then(function(){return a.v.getRedirectResult()}).then(function(a){return a?cg(a):null});return this.c(b)};
var Nk=function(a,b){var c={};c.apiKey=a.i().options.apiKey;c.authDomain=a.i().options.authDomain;c.appName=a.i().name;return a.pc.then(function(){return tk(c,b,a.zb,$a(a.M))}).then(function(b){if(U(a)&&b.uid==U(a).uid)return U(a).copy(b),a.pb(b);Fk(a,b);Yj(b);return a.pb(b)}).then(function(){a.Ta()})},Fk=function(a,b){U(a)&&(Wj(U(a),a.bf),tc(U(a),"tokenChanged",a.Gb),tc(U(a),"userDeleted",a.$e),tc(U(a),"userInvalidated",a.af),Vj(U(a)));b&&(b.Sc.push(a.bf),lc(b,"tokenChanged",a.Gb),lc(b,"userDeleted",
a.$e),lc(b,"userInvalidated",a.af),0<a.Oa&&Uj(b));N(a,"currentUser",b);b&&(b.Cb(a.ia),Rj(b,a),Qj(b,a.M),Sj(b,a))};T.prototype.signOut=function(){var a=this,b=this.ya.then(function(){if(!U(a))return D();Fk(a,null);return Dk(a.na).then(function(){a.Ta()})});return this.c(b)};
var Ok=function(a){var b=a.i().options.authDomain;b=vk(a.zb,b).then(function(b){if(a.Za=b)b.Ya=a.zb;return qk(a.zb)});return a.c(b)},Gk=function(a){var b=a.i().options.authDomain,c=Ok(a).then(function(){return Ek(a.na,b)}).then(function(b){return b?(b.Ya=a.zb,a.Za&&(a.Za.Ha||null)==(b.Ha||null)?b:b.reload().then(function(){return Ck(a.na,b).then(function(){return b})}).g(function(c){return"auth/network-request-failed"==c.code?b:Dk(a.na)})):null}).then(function(b){Fk(a,b||null)});return a.c(c)},Hk=
function(a){return a.pc.then(function(){return a.getRedirectResult()}).g(function(){}).then(function(){if(!a.Ea)return a.ud()}).g(function(){}).then(function(){if(!a.Ea){a.Dc=!0;var b=a.na;b.h.addListener(wk("local"),b.j,a.ud)}})};h=T.prototype;
h.vg=function(){var a=this,b=this.i().options.authDomain;return Ek(this.na,b).then(function(b){if(!a.Ea){var c;if(c=U(a)&&b){c=U(a).uid;var e=b.uid;c=void 0===c||null===c||""===c||void 0===e||null===e||""===e?!1:c==e}if(c)return U(a).copy(b),U(a).getIdToken();if(U(a)||b)Fk(a,b),b&&(Yj(b),b.Ya=a.zb),a.v&&a.v.subscribe(a),a.Ta()}})};h.pb=function(a){return Ck(this.na,a)};h.wd=function(){this.Ta();this.pb(U(this))};h.Lf=function(){this.signOut()};h.Mf=function(){this.signOut()};
var Pk=function(a,b){var c=null,d=null;return a.c(b.then(function(b){c=Qg(b);d=Si(b);return Nk(a,b)}).then(function(){return cg({user:U(a),credential:c,additionalUserInfo:d,operationType:"signIn"})}))};h=T.prototype;h.Pf=function(a){var b=this;this.addAuthTokenListener(function(){a.next(U(b))})};h.Rf=function(a){var b=this;Qk(this,function(){a.next(U(b))})};
h.onIdTokenChanged=function(a,b,c){var d=this;this.Dc&&firebase.Promise.resolve().then(function(){p(a)?a(U(d)):p(a.next)&&a.next(U(d))});return this.ag(a,b,c)};h.onAuthStateChanged=function(a,b,c){var d=this;this.Dc&&firebase.Promise.resolve().then(function(){d.mc=d.getUid();p(a)?a(U(d)):p(a.next)&&a.next(U(d))});return this.cg(a,b,c)};h.Ff=function(a){var b=this,c=this.ya.then(function(){return U(b)?U(b).getIdToken(a).then(function(a){return{accessToken:a}}):null});return this.c(c)};
h.signInWithCustomToken=function(a){var b=this;return this.ya.then(function(){return Pk(b,Q(b.f,Lh,{token:a}))}).then(function(a){a=a.user;ek(a,"isAnonymous",!1);return b.pb(a)}).then(function(){return U(b)})};h.signInWithEmailAndPassword=function(a,b){var c=this;return this.ya.then(function(){return Pk(c,Q(c.f,Gg,{email:a,password:b}))}).then(function(a){return a.user})};h.createUserWithEmailAndPassword=function(a,b){var c=this;return this.ya.then(function(){return Pk(c,Q(c.f,Hh,{email:a,password:b}))}).then(function(a){return a.user})};
h.signInWithCredential=function(a){return this.signInAndRetrieveDataWithCredential(a).then(function(a){return a.user})};h.signInAndRetrieveDataWithCredential=function(a){var b=this;return this.ya.then(function(){return Pk(b,a.Ob(b.f))})};h.signInAnonymously=function(){var a=this;return this.ya.then(function(){var b=U(a);return b&&b.isAnonymous?b:Pk(a,a.f.signInAnonymously()).then(function(b){b=b.user;ek(b,"isAnonymous",!0);return a.pb(b)}).then(function(){return U(a)})})};h.i=function(){return this.app};
var U=function(a){return a.currentUser};T.prototype.getUid=function(){return U(this)&&U(this).uid||null};var Rk=function(a){return U(a)&&U(a)._lat||null};h=T.prototype;h.Ta=function(){if(this.Dc){for(var a=0;a<this.Ka.length;a++)if(this.Ka[a])this.Ka[a](Rk(this));if(this.mc!==this.getUid()&&this.Fb.length)for(this.mc=this.getUid(),a=0;a<this.Fb.length;a++)if(this.Fb[a])this.Fb[a](Rk(this))}};h.lf=function(a){this.addAuthTokenListener(a);this.Oa++;0<this.Oa&&U(this)&&Uj(U(this))};
h.ig=function(a){var b=this;x(this.Ka,function(c){c==a&&b.Oa--});0>this.Oa&&(this.Oa=0);0==this.Oa&&U(this)&&Vj(U(this));this.removeAuthTokenListener(a)};h.addAuthTokenListener=function(a){var b=this;this.Ka.push(a);this.c(this.ya.then(function(){b.Ea||Va(b.Ka,a)&&a(Rk(b))}))};h.removeAuthTokenListener=function(a){Ya(this.Ka,function(b){return b==a})};var Qk=function(a,b){a.Fb.push(b);a.c(a.ya.then(function(){!a.Ea&&Va(a.Fb,b)&&a.mc!==a.getUid()&&(a.mc=a.getUid(),b(Rk(a)))}))};h=T.prototype;
h["delete"]=function(){this.Ea=!0;for(var a=0;a<this.J.length;a++)this.J[a].cancel("app-deleted");this.J=[];this.na&&(a=this.na,a.h.removeListener(wk("local"),a.j,this.ud));this.v&&this.v.unsubscribe(this);return firebase.Promise.resolve()};h.c=function(a){var b=this;this.J.push(a);Fd(a,function(){Xa(b.J,a)});return a};h.fetchProvidersForEmail=function(a){return this.c(lh(this.f,a))};h.verifyPasswordResetCode=function(a){return this.checkActionCode(a).then(function(a){return a.data.email})};
h.confirmPasswordReset=function(a,b){return this.c(this.f.confirmPasswordReset(a,b).then(function(){}))};h.checkActionCode=function(a){return this.c(this.f.checkActionCode(a).then(function(a){return new Ji(a)}))};h.applyActionCode=function(a){return this.c(this.f.applyActionCode(a).then(function(){}))};h.sendPasswordResetEmail=function(a,b){var c=this;return this.c(D().then(function(){return"undefined"===typeof b||ib(b)?{}:Gi(new Fi(b))}).then(function(b){return c.f.sendPasswordResetEmail(a,b)}).then(function(){}))};
h.signInWithPhoneNumber=function(a,b){return this.c(Ii(this,a,b,r(this.signInAndRetrieveDataWithCredential,this)))};var Tk=function(a,b,c,d){a:{c=Array.prototype.slice.call(c);var e=0;for(var f=!1,g=0;g<b.length;g++)if(b[g].optional)f=!0;else{if(f)throw new O("internal-error","Argument validator encountered a required argument after an optional argument.");e++}f=b.length;if(c.length<e||f<c.length)d="Expected "+(e==f?1==e?"1 argument":e+" arguments":e+"-"+f+" arguments")+" but got "+c.length+".";else{for(e=0;e<c.length;e++)if(f=b[e].optional&&void 0===c[e],!b[e].U(c[e])&&!f){b=b[e];if(0>e||e>=Sk.length)throw new O("internal-error",
"Argument validator received an unsupported number of arguments.");c=Sk[e];d=(d?"":c+" argument ")+(b.name?'"'+b.name+'" ':"")+"must be "+b.T+".";break a}d=null}}if(d)throw new O("argument-error",a+" failed: "+d);},Sk="First Second Third Fourth Fifth Sixth Seventh Eighth Ninth".split(" "),V=function(a,b){return{name:a||"",T:"a valid string",optional:!!b,U:m}},Uk=function(){return{name:"opt_forceRefresh",T:"a boolean",optional:!0,U:ca}},W=function(a,b){return{name:a||"",T:"a valid object",optional:!!b,
U:q}},Vk=function(a,b){return{name:a||"",T:"a function",optional:!!b,U:p}},Wk=function(a,b){return{name:a||"",T:"null",optional:!!b,U:fa}},Xk=function(){return{name:"",T:"an HTML element",optional:!1,U:function(a){return!!(a&&a instanceof Element)}}},Yk=function(){return{name:"auth",T:"an instance of Firebase Auth",optional:!0,U:function(a){return!!(a&&a instanceof T)}}},Zk=function(){return{name:"app",T:"an instance of Firebase App",optional:!0,U:function(a){return!!(a&&a instanceof firebase.app.App)}}},
$k=function(a){return{name:a?a+"Credential":"credential",T:a?"a valid "+a+" credential":"a valid credential",optional:!1,U:function(b){if(!b)return!1;var c=!a||b.providerId===a;return!(!b.Ob||!c)}}},al=function(){return{name:"authProvider",T:"a valid Auth provider",optional:!1,U:function(a){return!!(a&&a.providerId&&a.hasOwnProperty&&a.hasOwnProperty("isOAuthProvider"))}}},bl=function(){return{name:"applicationVerifier",T:"an implementation of firebase.auth.ApplicationVerifier",optional:!1,U:function(a){return!!(a&&
m(a.type)&&p(a.verify))}}},X=function(a,b,c,d){return{name:c||"",T:a.T+" or "+b.T,optional:!!d,U:function(c){return a.U(c)||b.U(c)}}};var Y=function(a,b){for(var c in b){var d=b[c].name;a[d]=cl(d,a[c],b[c].a)}},Z=function(a,b,c,d){a[b]=cl(b,c,d)},cl=function(a,b,c){if(!c)return b;var d=dl(a);a=function(){var a=Array.prototype.slice.call(arguments);Tk(d,c,a);return b.apply(this,a)};for(var e in b)a[e]=b[e];for(e in b.prototype)a.prototype[e]=b.prototype[e];return a},dl=function(a){a=a.split(".");return a[a.length-1]};Y(T.prototype,{applyActionCode:{name:"applyActionCode",a:[V("code")]},checkActionCode:{name:"checkActionCode",a:[V("code")]},confirmPasswordReset:{name:"confirmPasswordReset",a:[V("code"),V("newPassword")]},createUserWithEmailAndPassword:{name:"createUserWithEmailAndPassword",a:[V("email"),V("password")]},fetchProvidersForEmail:{name:"fetchProvidersForEmail",a:[V("email")]},getRedirectResult:{name:"getRedirectResult",a:[]},onAuthStateChanged:{name:"onAuthStateChanged",a:[X(W(),Vk(),"nextOrObserver"),
Vk("opt_error",!0),Vk("opt_completed",!0)]},onIdTokenChanged:{name:"onIdTokenChanged",a:[X(W(),Vk(),"nextOrObserver"),Vk("opt_error",!0),Vk("opt_completed",!0)]},sendPasswordResetEmail:{name:"sendPasswordResetEmail",a:[V("email"),X(W("opt_actionCodeSettings",!0),Wk(null,!0),"opt_actionCodeSettings",!0)]},setPersistence:{name:"setPersistence",a:[V("persistence")]},signInAndRetrieveDataWithCredential:{name:"signInAndRetrieveDataWithCredential",a:[$k()]},signInAnonymously:{name:"signInAnonymously",a:[]},
signInWithCredential:{name:"signInWithCredential",a:[$k()]},signInWithCustomToken:{name:"signInWithCustomToken",a:[V("token")]},signInWithEmailAndPassword:{name:"signInWithEmailAndPassword",a:[V("email"),V("password")]},signInWithPhoneNumber:{name:"signInWithPhoneNumber",a:[V("phoneNumber"),bl()]},signInWithPopup:{name:"signInWithPopup",a:[al()]},signInWithRedirect:{name:"signInWithRedirect",a:[al()]},signOut:{name:"signOut",a:[]},toJSON:{name:"toJSON",a:[V(null,!0)]},useDeviceLanguage:{name:"useDeviceLanguage",
a:[]},verifyPasswordResetCode:{name:"verifyPasswordResetCode",a:[V("code")]}});(function(a,b){for(var c in b){var d=b[c].name;if(d!==c){var e=b[c].nf;Object.defineProperty(a,d,{get:function(){return this[c]},set:function(a){Tk(d,[e],[a],!0);this[c]=a},enumerable:!0})}}})(T.prototype,{lc:{name:"languageCode",nf:X(V(),Wk(),"languageCode")}});T.Persistence=Ti;T.Persistence.LOCAL="local";T.Persistence.SESSION="session";T.Persistence.NONE="none";
Y(S.prototype,{"delete":{name:"delete",a:[]},getIdToken:{name:"getIdToken",a:[Uk()]},getToken:{name:"getToken",a:[Uk()]},linkAndRetrieveDataWithCredential:{name:"linkAndRetrieveDataWithCredential",a:[$k()]},linkWithCredential:{name:"linkWithCredential",a:[$k()]},linkWithPhoneNumber:{name:"linkWithPhoneNumber",a:[V("phoneNumber"),bl()]},linkWithPopup:{name:"linkWithPopup",a:[al()]},linkWithRedirect:{name:"linkWithRedirect",a:[al()]},reauthenticateAndRetrieveDataWithCredential:{name:"reauthenticateAndRetrieveDataWithCredential",
a:[$k()]},reauthenticateWithCredential:{name:"reauthenticateWithCredential",a:[$k()]},reauthenticateWithPhoneNumber:{name:"reauthenticateWithPhoneNumber",a:[V("phoneNumber"),bl()]},reauthenticateWithPopup:{name:"reauthenticateWithPopup",a:[al()]},reauthenticateWithRedirect:{name:"reauthenticateWithRedirect",a:[al()]},reload:{name:"reload",a:[]},sendEmailVerification:{name:"sendEmailVerification",a:[X(W("opt_actionCodeSettings",!0),Wk(null,!0),"opt_actionCodeSettings",!0)]},toJSON:{name:"toJSON",a:[V(null,
!0)]},unlink:{name:"unlink",a:[V("provider")]},updateEmail:{name:"updateEmail",a:[V("email")]},updatePassword:{name:"updatePassword",a:[V("password")]},updatePhoneNumber:{name:"updatePhoneNumber",a:[$k("phone")]},updateProfile:{name:"updateProfile",a:[W("profile")]}});Y(C.prototype,{g:{name:"catch"},then:{name:"then"}});Y(Hi.prototype,{confirm:{name:"confirm",a:[V("verificationCode")]}});Z(Ig,"credential",function(a,b){return new Fg(a,b)},[V("email"),V("password")]);
Y(xg.prototype,{addScope:{name:"addScope",a:[V("scope")]},setCustomParameters:{name:"setCustomParameters",a:[W("customOAuthParameters")]}});Z(xg,"credential",yg,[X(V(),W(),"token")]);Y(zg.prototype,{addScope:{name:"addScope",a:[V("scope")]},setCustomParameters:{name:"setCustomParameters",a:[W("customOAuthParameters")]}});Z(zg,"credential",Ag,[X(V(),W(),"token")]);Y(Bg.prototype,{addScope:{name:"addScope",a:[V("scope")]},setCustomParameters:{name:"setCustomParameters",a:[W("customOAuthParameters")]}});
Z(Bg,"credential",Cg,[X(V(),X(W(),Wk()),"idToken"),X(V(),Wk(),"accessToken",!0)]);Y(Dg.prototype,{setCustomParameters:{name:"setCustomParameters",a:[W("customOAuthParameters")]}});Z(Dg,"credential",Eg,[X(V(),W(),"token"),V("secret",!0)]);Y(P.prototype,{addScope:{name:"addScope",a:[V("scope")]},credential:{name:"credential",a:[X(V(),Wk(),"idToken",!0),X(V(),Wk(),"accessToken",!0)]},setCustomParameters:{name:"setCustomParameters",a:[W("customOAuthParameters")]}});
Z(Ng,"credential",Pg,[V("verificationId"),V("verificationCode")]);Y(Ng.prototype,{verifyPhoneNumber:{name:"verifyPhoneNumber",a:[V("phoneNumber"),bl()]}});Y(O.prototype,{toJSON:{name:"toJSON",a:[V(null,!0)]}});Y(Sg.prototype,{toJSON:{name:"toJSON",a:[V(null,!0)]}});Y(og.prototype,{toJSON:{name:"toJSON",a:[V(null,!0)]}});Y(ki.prototype,{clear:{name:"clear",a:[]},render:{name:"render",a:[]},verify:{name:"verify",a:[]}});
(function(){if("undefined"!==typeof firebase&&firebase.INTERNAL&&firebase.INTERNAL.registerService){var a={Auth:T,Error:O};Z(a,"EmailAuthProvider",Ig,[]);Z(a,"FacebookAuthProvider",xg,[]);Z(a,"GithubAuthProvider",zg,[]);Z(a,"GoogleAuthProvider",Bg,[]);Z(a,"TwitterAuthProvider",Dg,[]);Z(a,"OAuthProvider",P,[V("providerId")]);Z(a,"PhoneAuthProvider",Ng,[Yk()]);Z(a,"RecaptchaVerifier",ki,[X(V(),Xk(),"recaptchaContainer"),W("recaptchaParameters",!0),Zk()]);firebase.INTERNAL.registerService("auth",function(a,
c){a=new T(a);c({INTERNAL:{getUid:r(a.getUid,a),getToken:r(a.Ff,a),addAuthTokenListener:r(a.lf,a),removeAuthTokenListener:r(a.ig,a)}});return a},a,function(a,c){if("create"===a)try{c.auth()}catch(d){}});firebase.INTERNAL.extendNamespace({User:S})}else throw Error("Cannot find the firebase namespace; be sure to include firebase-app.js before this library.");})();}).call(this);
}).call(typeof global !== undefined ? global : typeof self !== undefined ? self : typeof window !== undefined ? window : {});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)))

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*! @license Firebase v4.5.0
Build: rev-f49c8b5
Terms: https://firebase.google.com/terms/

---

typedarray.js
Copyright (c) 2010, Linden Research, Inc.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE. */



Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.registerDatabase = registerDatabase;

var _app = __webpack_require__(28);

var _app2 = _interopRequireDefault(_app);

var _Database = __webpack_require__(54);

var _Query = __webpack_require__(55);

var _Reference = __webpack_require__(43);

var _util = __webpack_require__(3);

var _RepoManager = __webpack_require__(44);

var _internal = __webpack_require__(88);

var INTERNAL = _interopRequireWildcard(_internal);

var _test_access = __webpack_require__(90);

var TEST_ACCESS = _interopRequireWildcard(_test_access);

var _environment = __webpack_require__(31);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function registerDatabase(instance) {
    // Register the Database Service with the 'firebase' namespace.
    var namespace = instance.INTERNAL.registerService('database', function (app, unused, url) {
        return _RepoManager.RepoManager.getInstance().databaseFromApp(app, url);
    },
    // firebase.database namespace properties
    {
        Reference: _Reference.Reference,
        Query: _Query.Query,
        Database: _Database.Database,
        enableLogging: _util.enableLogging,
        INTERNAL: INTERNAL,
        ServerValue: _Database.Database.ServerValue,
        TEST_ACCESS: TEST_ACCESS
    }, null, true);
    if ((0, _environment.isNodeSdk)()) {
        module.exports = namespace;
    }
} /**
   * Copyright 2017 Google Inc.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

registerDatabase(_app2.default);
//# sourceMappingURL=database.js.map


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*! @license Firebase v4.5.0
Build: rev-f49c8b5
Terms: https://firebase.google.com/terms/ */



Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createFirebaseNamespace = createFirebaseNamespace;

var _subscribe = __webpack_require__(80);

var _errors = __webpack_require__(52);

var _promise = __webpack_require__(29);

var _deep_copy = __webpack_require__(78);

/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var contains = function contains(obj, key) {
    return Object.prototype.hasOwnProperty.call(obj, key);
};
var DEFAULT_ENTRY_NAME = '[DEFAULT]';
// An array to capture listeners before the true auth functions
// exist
var tokenListeners = [];
/**
 * Global context object for a collection of services using
 * a shared authentication state.
 */
var FirebaseAppImpl = /** @class */function () {
    function FirebaseAppImpl(options, name, firebase_) {
        this.firebase_ = firebase_;
        this.isDeleted_ = false;
        this.services_ = {};
        this.name_ = name;
        this.options_ = (0, _deep_copy.deepCopy)(options);
        this.INTERNAL = {
            getUid: function getUid() {
                return null;
            },
            getToken: function getToken() {
                return _promise.PromiseImpl.resolve(null);
            },
            addAuthTokenListener: function addAuthTokenListener(callback) {
                tokenListeners.push(callback);
                // Make sure callback is called, asynchronously, in the absence of the auth module
                setTimeout(function () {
                    return callback(null);
                }, 0);
            },
            removeAuthTokenListener: function removeAuthTokenListener(callback) {
                tokenListeners = tokenListeners.filter(function (listener) {
                    return listener !== callback;
                });
            }
        };
    }
    Object.defineProperty(FirebaseAppImpl.prototype, "name", {
        get: function get() {
            this.checkDestroyed_();
            return this.name_;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FirebaseAppImpl.prototype, "options", {
        get: function get() {
            this.checkDestroyed_();
            return this.options_;
        },
        enumerable: true,
        configurable: true
    });
    FirebaseAppImpl.prototype.delete = function () {
        var _this = this;
        return new _promise.PromiseImpl(function (resolve) {
            _this.checkDestroyed_();
            resolve();
        }).then(function () {
            _this.firebase_.INTERNAL.removeApp(_this.name_);
            var services = [];
            Object.keys(_this.services_).forEach(function (serviceKey) {
                Object.keys(_this.services_[serviceKey]).forEach(function (instanceKey) {
                    services.push(_this.services_[serviceKey][instanceKey]);
                });
            });
            return _promise.PromiseImpl.all(services.map(function (service) {
                return service.INTERNAL.delete();
            }));
        }).then(function () {
            _this.isDeleted_ = true;
            _this.services_ = {};
        });
    };
    /**
     * Return a service instance associated with this app (creating it
     * on demand), identified by the passed instanceIdentifier.
     *
     * NOTE: Currently storage is the only one that is leveraging this
     * functionality. They invoke it by calling:
     *
     * ```javascript
     * firebase.app().storage('STORAGE BUCKET ID')
     * ```
     *
     * The service name is passed to this already
     * @internal
     */
    FirebaseAppImpl.prototype._getService = function (name, instanceIdentifier) {
        if (instanceIdentifier === void 0) {
            instanceIdentifier = DEFAULT_ENTRY_NAME;
        }
        this.checkDestroyed_();
        if (!this.services_[name]) {
            this.services_[name] = {};
        }
        if (!this.services_[name][instanceIdentifier]) {
            /**
             * If a custom instance has been defined (i.e. not '[DEFAULT]')
             * then we will pass that instance on, otherwise we pass `null`
             */
            var instanceSpecifier = instanceIdentifier !== DEFAULT_ENTRY_NAME ? instanceIdentifier : undefined;
            var service = this.firebase_.INTERNAL.factories[name](this, this.extendApp.bind(this), instanceSpecifier);
            this.services_[name][instanceIdentifier] = service;
        }
        return this.services_[name][instanceIdentifier];
    };
    /**
     * Callback function used to extend an App instance at the time
     * of service instance creation.
     */
    FirebaseAppImpl.prototype.extendApp = function (props) {
        var _this = this;
        // Copy the object onto the FirebaseAppImpl prototype
        (0, _deep_copy.deepExtend)(this, props);
        /**
         * If the app has overwritten the addAuthTokenListener stub, forward
         * the active token listeners on to the true fxn.
         *
         * TODO: This function is required due to our current module
         * structure. Once we are able to rely strictly upon a single module
         * implementation, this code should be refactored and Auth should
         * provide these stubs and the upgrade logic
         */
        if (props.INTERNAL && props.INTERNAL.addAuthTokenListener) {
            tokenListeners.forEach(function (listener) {
                _this.INTERNAL.addAuthTokenListener(listener);
            });
            tokenListeners = [];
        }
    };
    /**
     * This function will throw an Error if the App has already been deleted -
     * use before performing API actions on the App.
     */
    FirebaseAppImpl.prototype.checkDestroyed_ = function () {
        if (this.isDeleted_) {
            error('app-deleted', { name: this.name_ });
        }
    };
    return FirebaseAppImpl;
}();
// Prevent dead-code elimination of these methods w/o invalid property
// copying.
FirebaseAppImpl.prototype.name && FirebaseAppImpl.prototype.options || FirebaseAppImpl.prototype.delete || console.log('dc');
/**
 * Return a firebase namespace object.
 *
 * In production, this will be called exactly once and the result
 * assigned to the 'firebase' global.  It may be called multiple times
 * in unit tests.
 */
function createFirebaseNamespace() {
    var apps_ = {};
    var factories = {};
    var appHooks = {};
    // A namespace is a plain JavaScript Object.
    var namespace = {
        // Hack to prevent Babel from modifying the object returned
        // as the firebase namespace.
        __esModule: true,
        initializeApp: initializeApp,
        app: app,
        apps: null,
        Promise: _promise.PromiseImpl,
        SDK_VERSION: '4.5.0',
        INTERNAL: {
            registerService: registerService,
            createFirebaseNamespace: createFirebaseNamespace,
            extendNamespace: extendNamespace,
            createSubscribe: _subscribe.createSubscribe,
            ErrorFactory: _errors.ErrorFactory,
            removeApp: removeApp,
            factories: factories,
            useAsService: useAsService,
            Promise: _promise.PromiseImpl,
            deepExtend: _deep_copy.deepExtend
        }
    };
    // Inject a circular default export to allow Babel users who were previously
    // using:
    //
    //   import firebase from 'firebase';
    //   which becomes: var firebase = require('firebase').default;
    //
    // instead of
    //
    //   import * as firebase from 'firebase';
    //   which becomes: var firebase = require('firebase');
    (0, _deep_copy.patchProperty)(namespace, 'default', namespace);
    // firebase.apps is a read-only getter.
    Object.defineProperty(namespace, 'apps', {
        get: getApps
    });
    /**
     * Called by App.delete() - but before any services associated with the App
     * are deleted.
     */
    function removeApp(name) {
        var app = apps_[name];
        callAppHooks(app, 'delete');
        delete apps_[name];
    }
    /**
     * Get the App object for a given name (or DEFAULT).
     */
    function app(name) {
        name = name || DEFAULT_ENTRY_NAME;
        if (!contains(apps_, name)) {
            error('no-app', { name: name });
        }
        return apps_[name];
    }
    (0, _deep_copy.patchProperty)(app, 'App', FirebaseAppImpl);
    /**
     * Create a new App instance (name must be unique).
     */
    function initializeApp(options, name) {
        if (name === undefined) {
            name = DEFAULT_ENTRY_NAME;
        } else {
            if (typeof name !== 'string' || name === '') {
                error('bad-app-name', { name: name + '' });
            }
        }
        if (contains(apps_, name)) {
            error('duplicate-app', { name: name });
        }
        var app = new FirebaseAppImpl(options, name, namespace);
        apps_[name] = app;
        callAppHooks(app, 'create');
        return app;
    }
    /*
     * Return an array of all the non-deleted FirebaseApps.
     */
    function getApps() {
        // Make a copy so caller cannot mutate the apps list.
        return Object.keys(apps_).map(function (name) {
            return apps_[name];
        });
    }
    /*
     * Register a Firebase Service.
     *
     * firebase.INTERNAL.registerService()
     *
     * TODO: Implement serviceProperties.
     */
    function registerService(name, createService, serviceProperties, appHook, allowMultipleInstances) {
        // Cannot re-register a service that already exists
        if (factories[name]) {
            error('duplicate-service', { name: name });
        }
        // Capture the service factory for later service instantiation
        factories[name] = createService;
        // Capture the appHook, if passed
        if (appHook) {
            appHooks[name] = appHook;
            // Run the **new** app hook on all existing apps
            getApps().forEach(function (app) {
                appHook('create', app);
            });
        }
        // The Service namespace is an accessor function ...
        var serviceNamespace = function serviceNamespace(appArg) {
            if (appArg === void 0) {
                appArg = app();
            }
            if (typeof appArg[name] !== 'function') {
                // Invalid argument.
                // This happens in the following case: firebase.storage('gs:/')
                error('invalid-app-argument', { name: name });
            }
            // Forward service instance lookup to the FirebaseApp.
            return appArg[name]();
        };
        // ... and a container for service-level properties.
        if (serviceProperties !== undefined) {
            (0, _deep_copy.deepExtend)(serviceNamespace, serviceProperties);
        }
        // Monkey-patch the serviceNamespace onto the firebase namespace
        namespace[name] = serviceNamespace;
        // Patch the FirebaseAppImpl prototype
        FirebaseAppImpl.prototype[name] = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var serviceFxn = this._getService.bind(this, name);
            return serviceFxn.apply(this, allowMultipleInstances ? args : []);
        };
        return serviceNamespace;
    }
    /**
     * Patch the top-level firebase namespace with additional properties.
     *
     * firebase.INTERNAL.extendNamespace()
     */
    function extendNamespace(props) {
        (0, _deep_copy.deepExtend)(namespace, props);
    }
    function callAppHooks(app, eventName) {
        Object.keys(factories).forEach(function (serviceName) {
            // Ignore virtual services
            var factoryName = useAsService(app, serviceName);
            if (factoryName === null) {
                return;
            }
            if (appHooks[factoryName]) {
                appHooks[factoryName](eventName, app);
            }
        });
    }
    // Map the requested service to a registered service name
    // (used to map auth to serverAuth service when needed).
    function useAsService(app, name) {
        if (name === 'serverAuth') {
            return null;
        }
        var useService = name;
        var options = app.options;
        return useService;
    }
    return namespace;
}
function error(code, args) {
    throw appErrors.create(code, args);
}
// TypeScript does not support non-string indexes!
// let errors: {[code: AppError: string} = {
var errors = {
    'no-app': "No Firebase App '{$name}' has been created - " + 'call Firebase App.initializeApp()',
    'bad-app-name': "Illegal App name: '{$name}",
    'duplicate-app': "Firebase App named '{$name}' already exists",
    'app-deleted': "Firebase App named '{$name}' already deleted",
    'duplicate-service': "Firebase service named '{$name}' already registered",
    'sa-not-supported': 'Initializing the Firebase SDK with a service ' + 'account is only allowed in a Node.js environment. On client ' + 'devices, you should instead initialize the SDK with an api key and ' + 'auth domain',
    'invalid-app-argument': 'firebase.{$name}() takes either no argument or a ' + 'Firebase App instance.'
};
var appErrors = new _errors.ErrorFactory('app', 'Firebase', errors);
//# sourceMappingURL=firebase_app.js.map


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*! @license Firebase v4.5.0
Build: rev-f49c8b5
Terms: https://firebase.google.com/terms/ */



Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TransactionResult = undefined;

var _validation = __webpack_require__(17);

var TransactionResult = /** @class */function () {
    /**
     * A type for the resolve value of Firebase.transaction.
     * @constructor
     * @dict
     * @param {boolean} committed
     * @param {DataSnapshot} snapshot
     */
    function TransactionResult(committed, snapshot) {
        this.committed = committed;
        this.snapshot = snapshot;
    }
    // Do not create public documentation. This is intended to make JSON serialization work but is otherwise unnecessary
    // for end-users
    TransactionResult.prototype.toJSON = function () {
        (0, _validation.validateArgCount)('TransactionResult.toJSON', 0, 1, arguments.length);
        return { committed: this.committed, snapshot: this.snapshot.toJSON() };
    };
    return TransactionResult;
}(); /**
      * Copyright 2017 Google Inc.
      *
      * Licensed under the Apache License, Version 2.0 (the "License");
      * you may not use this file except in compliance with the License.
      * You may obtain a copy of the License at
      *
      *   http://www.apache.org/licenses/LICENSE-2.0
      *
      * Unless required by applicable law or agreed to in writing, software
      * distributed under the License is distributed on an "AS IS" BASIS,
      * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
      * See the License for the specific language governing permissions and
      * limitations under the License.
      */
exports.TransactionResult = TransactionResult;
//# sourceMappingURL=TransactionResult.js.map


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*! @license Firebase v4.5.0
Build: rev-f49c8b5
Terms: https://firebase.google.com/terms/ */



Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.interceptServerData = exports.dataUpdateCount = exports.statsIncrementCounter = exports.stats = exports.setSecurityDebugCallback = exports.isWebSocketsAvailable = exports.forceWebSockets = exports.forceLongPolling = undefined;

var _WebSocketConnection = __webpack_require__(77);

var _BrowserPollConnection = __webpack_require__(75);

/**
 * INTERNAL methods for internal-use only (tests, etc.).
 *
 * Customers shouldn't use these or else should be aware that they could break at any time.
 *
 * @const
 */
/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var forceLongPolling = exports.forceLongPolling = function forceLongPolling() {
    _WebSocketConnection.WebSocketConnection.forceDisallow();
    _BrowserPollConnection.BrowserPollConnection.forceAllow();
};
var forceWebSockets = exports.forceWebSockets = function forceWebSockets() {
    _BrowserPollConnection.BrowserPollConnection.forceDisallow();
};
/* Used by App Manager */
var isWebSocketsAvailable = exports.isWebSocketsAvailable = function isWebSocketsAvailable() {
    return _WebSocketConnection.WebSocketConnection['isAvailable']();
};
var setSecurityDebugCallback = exports.setSecurityDebugCallback = function setSecurityDebugCallback(ref, callback) {
    ref.repo.persistentConnection_.securityDebugCallback_ = callback;
};
var stats = exports.stats = function stats(ref, showDelta) {
    ref.repo.stats(showDelta);
};
var statsIncrementCounter = exports.statsIncrementCounter = function statsIncrementCounter(ref, metric) {
    ref.repo.statsIncrementCounter(metric);
};
var dataUpdateCount = exports.dataUpdateCount = function dataUpdateCount(ref) {
    return ref.repo.dataUpdateCount;
};
var interceptServerData = exports.interceptServerData = function interceptServerData(ref, callback) {
    return ref.repo.interceptServerData_(callback);
};
//# sourceMappingURL=internal.js.map


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*! @license Firebase v4.5.0
Build: rev-f49c8b5
Terms: https://firebase.google.com/terms/ */



Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.OnDisconnect = undefined;

var _validation = __webpack_require__(17);

var _validation2 = __webpack_require__(16);

var _util = __webpack_require__(3);

var _promise = __webpack_require__(29);

/**
 * @constructor
 */
/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var OnDisconnect = /** @class */function () {
    /**
     * @param {!Repo} repo_
     * @param {!Path} path_
     */
    function OnDisconnect(repo_, path_) {
        this.repo_ = repo_;
        this.path_ = path_;
    }
    /**
     * @param {function(?Error)=} onComplete
     * @return {!firebase.Promise}
     */
    OnDisconnect.prototype.cancel = function (onComplete) {
        (0, _validation.validateArgCount)('OnDisconnect.cancel', 0, 1, arguments.length);
        (0, _validation.validateCallback)('OnDisconnect.cancel', 1, onComplete, true);
        var deferred = new _promise.Deferred();
        this.repo_.onDisconnectCancel(this.path_, deferred.wrapCallback(onComplete));
        return deferred.promise;
    };
    /**
     * @param {function(?Error)=} onComplete
     * @return {!firebase.Promise}
     */
    OnDisconnect.prototype.remove = function (onComplete) {
        (0, _validation.validateArgCount)('OnDisconnect.remove', 0, 1, arguments.length);
        (0, _validation2.validateWritablePath)('OnDisconnect.remove', this.path_);
        (0, _validation.validateCallback)('OnDisconnect.remove', 1, onComplete, true);
        var deferred = new _promise.Deferred();
        this.repo_.onDisconnectSet(this.path_, null, deferred.wrapCallback(onComplete));
        return deferred.promise;
    };
    /**
     * @param {*} value
     * @param {function(?Error)=} onComplete
     * @return {!firebase.Promise}
     */
    OnDisconnect.prototype.set = function (value, onComplete) {
        (0, _validation.validateArgCount)('OnDisconnect.set', 1, 2, arguments.length);
        (0, _validation2.validateWritablePath)('OnDisconnect.set', this.path_);
        (0, _validation2.validateFirebaseDataArg)('OnDisconnect.set', 1, value, this.path_, false);
        (0, _validation.validateCallback)('OnDisconnect.set', 2, onComplete, true);
        var deferred = new _promise.Deferred();
        this.repo_.onDisconnectSet(this.path_, value, deferred.wrapCallback(onComplete));
        return deferred.promise;
    };
    /**
     * @param {*} value
     * @param {number|string|null} priority
     * @param {function(?Error)=} onComplete
     * @return {!firebase.Promise}
     */
    OnDisconnect.prototype.setWithPriority = function (value, priority, onComplete) {
        (0, _validation.validateArgCount)('OnDisconnect.setWithPriority', 2, 3, arguments.length);
        (0, _validation2.validateWritablePath)('OnDisconnect.setWithPriority', this.path_);
        (0, _validation2.validateFirebaseDataArg)('OnDisconnect.setWithPriority', 1, value, this.path_, false);
        (0, _validation2.validatePriority)('OnDisconnect.setWithPriority', 2, priority, false);
        (0, _validation.validateCallback)('OnDisconnect.setWithPriority', 3, onComplete, true);
        var deferred = new _promise.Deferred();
        this.repo_.onDisconnectSetWithPriority(this.path_, value, priority, deferred.wrapCallback(onComplete));
        return deferred.promise;
    };
    /**
     * @param {!Object} objectToMerge
     * @param {function(?Error)=} onComplete
     * @return {!firebase.Promise}
     */
    OnDisconnect.prototype.update = function (objectToMerge, onComplete) {
        (0, _validation.validateArgCount)('OnDisconnect.update', 1, 2, arguments.length);
        (0, _validation2.validateWritablePath)('OnDisconnect.update', this.path_);
        if (Array.isArray(objectToMerge)) {
            var newObjectToMerge = {};
            for (var i = 0; i < objectToMerge.length; ++i) {
                newObjectToMerge['' + i] = objectToMerge[i];
            }
            objectToMerge = newObjectToMerge;
            (0, _util.warn)('Passing an Array to firebase.database.onDisconnect().update() is deprecated. Use set() if you want to overwrite the ' + 'existing data, or an Object with integer keys if you really do want to only update some of the children.');
        }
        (0, _validation2.validateFirebaseMergeDataArg)('OnDisconnect.update', 1, objectToMerge, this.path_, false);
        (0, _validation.validateCallback)('OnDisconnect.update', 2, onComplete, true);
        var deferred = new _promise.Deferred();
        this.repo_.onDisconnectUpdate(this.path_, objectToMerge, deferred.wrapCallback(onComplete));
        return deferred.promise;
    };
    return OnDisconnect;
}();
exports.OnDisconnect = OnDisconnect;
//# sourceMappingURL=onDisconnect.js.map


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*! @license Firebase v4.5.0
Build: rev-f49c8b5
Terms: https://firebase.google.com/terms/ */



Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.forceRestClient = exports.listens = exports.queryIdentifier = exports.ConnectionTarget = exports.hijackHash = exports.RealTimeConnection = exports.DataConnection = undefined;

var _RepoInfo = __webpack_require__(57);

var _PersistentConnection = __webpack_require__(56);

var _RepoManager = __webpack_require__(44);

var _Connection = __webpack_require__(76);

/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var DataConnection = exports.DataConnection = _PersistentConnection.PersistentConnection;
/**
 * @param {!string} pathString
 * @param {function(*)} onComplete
 */
_PersistentConnection.PersistentConnection.prototype.simpleListen = function (pathString, onComplete) {
    this.sendRequest('q', { p: pathString }, onComplete);
};
/**
 * @param {*} data
 * @param {function(*)} onEcho
 */
_PersistentConnection.PersistentConnection.prototype.echo = function (data, onEcho) {
    this.sendRequest('echo', { d: data }, onEcho);
};
// RealTimeConnection properties that we use in tests.
var RealTimeConnection = exports.RealTimeConnection = _Connection.Connection;
/**
 * @param {function(): string} newHash
 * @return {function()}
 */
var hijackHash = exports.hijackHash = function hijackHash(newHash) {
    var oldPut = _PersistentConnection.PersistentConnection.prototype.put;
    _PersistentConnection.PersistentConnection.prototype.put = function (pathString, data, opt_onComplete, opt_hash) {
        if (opt_hash !== undefined) {
            opt_hash = newHash();
        }
        oldPut.call(this, pathString, data, opt_onComplete, opt_hash);
    };
    return function () {
        _PersistentConnection.PersistentConnection.prototype.put = oldPut;
    };
};
/**
 * @type {function(new:RepoInfo, !string, boolean, !string, boolean): undefined}
 */
var ConnectionTarget = exports.ConnectionTarget = _RepoInfo.RepoInfo;
/**
 * @param {!Query} query
 * @return {!string}
 */
var queryIdentifier = exports.queryIdentifier = function queryIdentifier(query) {
    return query.queryIdentifier();
};
/**
 * @param {!Query} firebaseRef
 * @return {!Object}
 */
var listens = exports.listens = function listens(firebaseRef) {
    return firebaseRef.repo.persistentConnection_.listens_;
};
/**
 * Forces the RepoManager to create Repos that use ReadonlyRestClient instead of PersistentConnection.
 *
 * @param {boolean} forceRestClient
 */
var forceRestClient = exports.forceRestClient = function forceRestClient(_forceRestClient) {
    _RepoManager.RepoManager.getInstance().forceRestClient(_forceRestClient);
};
//# sourceMappingURL=test_access.js.map


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*! @license Firebase v4.5.0
Build: rev-f49c8b5
Terms: https://firebase.google.com/terms/ */



Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AuthTokenProvider = undefined;

var _util = __webpack_require__(3);

/**
 * Abstraction around FirebaseApp's token fetching capabilities.
 */
var AuthTokenProvider = /** @class */function () {
    /**
     * @param {!FirebaseApp} app_
     */
    function AuthTokenProvider(app_) {
        this.app_ = app_;
    }
    /**
     * @param {boolean} forceRefresh
     * @return {!Promise<FirebaseAuthTokenData>}
     */
    AuthTokenProvider.prototype.getToken = function (forceRefresh) {
        return this.app_['INTERNAL']['getToken'](forceRefresh).then(null,
        // .catch
        function (error) {
            // TODO: Need to figure out all the cases this is raised and whether
            // this makes sense.
            if (error && error.code === 'auth/token-not-initialized') {
                (0, _util.log)('Got auth/token-not-initialized error.  Treating as null token.');
                return null;
            } else {
                return Promise.reject(error);
            }
        });
    };
    AuthTokenProvider.prototype.addTokenChangeListener = function (listener) {
        // TODO: We might want to wrap the listener and call it with no args to
        // avoid a leaky abstraction, but that makes removing the listener harder.
        this.app_['INTERNAL']['addAuthTokenListener'](listener);
    };
    AuthTokenProvider.prototype.removeTokenChangeListener = function (listener) {
        this.app_['INTERNAL']['removeAuthTokenListener'](listener);
    };
    AuthTokenProvider.prototype.notifyForInvalidToken = function () {
        var errorMessage = 'Provided authentication credentials for the app named "' + this.app_.name + '" are invalid. This usually indicates your app was not ' + 'initialized correctly. ';
        if ('credential' in this.app_.options) {
            errorMessage += 'Make sure the "credential" property provided to initializeApp() ' + 'is authorized to access the specified "databaseURL" and is from the correct ' + 'project.';
        } else if ('serviceAccount' in this.app_.options) {
            errorMessage += 'Make sure the "serviceAccount" property provided to initializeApp() ' + 'is authorized to access the specified "databaseURL" and is from the correct ' + 'project.';
        } else {
            errorMessage += 'Make sure the "apiKey" and "databaseURL" properties provided to ' + 'initializeApp() match the values provided for your app at ' + 'https://console.firebase.google.com/.';
        }
        (0, _util.warn)(errorMessage);
    };
    return AuthTokenProvider;
}(); /**
      * Copyright 2017 Google Inc.
      *
      * Licensed under the Apache License, Version 2.0 (the "License");
      * you may not use this file except in compliance with the License.
      * You may obtain a copy of the License at
      *
      *   http://www.apache.org/licenses/LICENSE-2.0
      *
      * Unless required by applicable law or agreed to in writing, software
      * distributed under the License is distributed on an "AS IS" BASIS,
      * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
      * See the License for the specific language governing permissions and
      * limitations under the License.
      */
exports.AuthTokenProvider = AuthTokenProvider;
//# sourceMappingURL=AuthTokenProvider.js.map


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*! @license Firebase v4.5.0
Build: rev-f49c8b5
Terms: https://firebase.google.com/terms/ */



Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CompoundWrite = undefined;

var _ImmutableTree = __webpack_require__(46);

var _Path = __webpack_require__(5);

var _obj = __webpack_require__(4);

var _Node = __webpack_require__(10);

var _PriorityIndex = __webpack_require__(7);

var _assert = __webpack_require__(2);

/**
 * This class holds a collection of writes that can be applied to nodes in unison. It abstracts away the logic with
 * dealing with priority writes and multiple nested writes. At any given path there is only allowed to be one write
 * modifying that path. Any write to an existing path or shadowing an existing path will modify that existing write
 * to reflect the write added.
 *
 * @constructor
 * @param {!ImmutableTree.<!Node>} writeTree
 */
/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var CompoundWrite = /** @class */function () {
    function CompoundWrite(writeTree_) {
        this.writeTree_ = writeTree_;
    }
    /**
     * @param {!Path} path
     * @param {!Node} node
     * @return {!CompoundWrite}
     */
    CompoundWrite.prototype.addWrite = function (path, node) {
        if (path.isEmpty()) {
            return new CompoundWrite(new _ImmutableTree.ImmutableTree(node));
        } else {
            var rootmost = this.writeTree_.findRootMostValueAndPath(path);
            if (rootmost != null) {
                var rootMostPath = rootmost.path;
                var value = rootmost.value;
                var relativePath = _Path.Path.relativePath(rootMostPath, path);
                value = value.updateChild(relativePath, node);
                return new CompoundWrite(this.writeTree_.set(rootMostPath, value));
            } else {
                var subtree = new _ImmutableTree.ImmutableTree(node);
                var newWriteTree = this.writeTree_.setTree(path, subtree);
                return new CompoundWrite(newWriteTree);
            }
        }
    };
    /**
     * @param {!Path} path
     * @param {!Object.<string, !Node>} updates
     * @return {!CompoundWrite}
     */
    CompoundWrite.prototype.addWrites = function (path, updates) {
        var newWrite = this;
        (0, _obj.forEach)(updates, function (childKey, node) {
            newWrite = newWrite.addWrite(path.child(childKey), node);
        });
        return newWrite;
    };
    /**
     * Will remove a write at the given path and deeper paths. This will <em>not</em> modify a write at a higher
     * location, which must be removed by calling this method with that path.
     *
     * @param {!Path} path The path at which a write and all deeper writes should be removed
     * @return {!CompoundWrite} The new CompoundWrite with the removed path
     */
    CompoundWrite.prototype.removeWrite = function (path) {
        if (path.isEmpty()) {
            return CompoundWrite.Empty;
        } else {
            var newWriteTree = this.writeTree_.setTree(path, _ImmutableTree.ImmutableTree.Empty);
            return new CompoundWrite(newWriteTree);
        }
    };
    /**
     * Returns whether this CompoundWrite will fully overwrite a node at a given location and can therefore be
     * considered "complete".
     *
     * @param {!Path} path The path to check for
     * @return {boolean} Whether there is a complete write at that path
     */
    CompoundWrite.prototype.hasCompleteWrite = function (path) {
        return this.getCompleteNode(path) != null;
    };
    /**
     * Returns a node for a path if and only if the node is a "complete" overwrite at that path. This will not aggregate
     * writes from deeper paths, but will return child nodes from a more shallow path.
     *
     * @param {!Path} path The path to get a complete write
     * @return {?Node} The node if complete at that path, or null otherwise.
     */
    CompoundWrite.prototype.getCompleteNode = function (path) {
        var rootmost = this.writeTree_.findRootMostValueAndPath(path);
        if (rootmost != null) {
            return this.writeTree_.get(rootmost.path).getChild(_Path.Path.relativePath(rootmost.path, path));
        } else {
            return null;
        }
    };
    /**
     * Returns all children that are guaranteed to be a complete overwrite.
     *
     * @return {!Array.<NamedNode>} A list of all complete children.
     */
    CompoundWrite.prototype.getCompleteChildren = function () {
        var children = [];
        var node = this.writeTree_.value;
        if (node != null) {
            // If it's a leaf node, it has no children; so nothing to do.
            if (!node.isLeafNode()) {
                node.forEachChild(_PriorityIndex.PRIORITY_INDEX, function (childName, childNode) {
                    children.push(new _Node.NamedNode(childName, childNode));
                });
            }
        } else {
            this.writeTree_.children.inorderTraversal(function (childName, childTree) {
                if (childTree.value != null) {
                    children.push(new _Node.NamedNode(childName, childTree.value));
                }
            });
        }
        return children;
    };
    /**
     * @param {!Path} path
     * @return {!CompoundWrite}
     */
    CompoundWrite.prototype.childCompoundWrite = function (path) {
        if (path.isEmpty()) {
            return this;
        } else {
            var shadowingNode = this.getCompleteNode(path);
            if (shadowingNode != null) {
                return new CompoundWrite(new _ImmutableTree.ImmutableTree(shadowingNode));
            } else {
                return new CompoundWrite(this.writeTree_.subtree(path));
            }
        }
    };
    /**
     * Returns true if this CompoundWrite is empty and therefore does not modify any nodes.
     * @return {boolean} Whether this CompoundWrite is empty
     */
    CompoundWrite.prototype.isEmpty = function () {
        return this.writeTree_.isEmpty();
    };
    /**
     * Applies this CompoundWrite to a node. The node is returned with all writes from this CompoundWrite applied to the
     * node
     * @param {!Node} node The node to apply this CompoundWrite to
     * @return {!Node} The node with all writes applied
     */
    CompoundWrite.prototype.apply = function (node) {
        return CompoundWrite.applySubtreeWrite_(_Path.Path.Empty, this.writeTree_, node);
    };
    /**
     * @type {!CompoundWrite}
     */
    CompoundWrite.Empty = new CompoundWrite(new _ImmutableTree.ImmutableTree(null));
    /**
     * @param {!Path} relativePath
     * @param {!ImmutableTree.<!Node>} writeTree
     * @param {!Node} node
     * @return {!Node}
     * @private
     */
    CompoundWrite.applySubtreeWrite_ = function (relativePath, writeTree, node) {
        if (writeTree.value != null) {
            // Since there a write is always a leaf, we're done here
            return node.updateChild(relativePath, writeTree.value);
        } else {
            var priorityWrite_1 = null;
            writeTree.children.inorderTraversal(function (childKey, childTree) {
                if (childKey === '.priority') {
                    // Apply priorities at the end so we don't update priorities for either empty nodes or forget
                    // to apply priorities to empty nodes that are later filled
                    (0, _assert.assert)(childTree.value !== null, 'Priority writes must always be leaf nodes');
                    priorityWrite_1 = childTree.value;
                } else {
                    node = CompoundWrite.applySubtreeWrite_(relativePath.child(childKey), childTree, node);
                }
            });
            // If there was a priority write, we only apply it if the node is not empty
            if (!node.getChild(relativePath).isEmpty() && priorityWrite_1 !== null) {
                node = node.updateChild(relativePath.child('.priority'), priorityWrite_1);
            }
            return node;
        }
    };
    return CompoundWrite;
}();
exports.CompoundWrite = CompoundWrite;
//# sourceMappingURL=CompoundWrite.js.map


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*! @license Firebase v4.5.0
Build: rev-f49c8b5
Terms: https://firebase.google.com/terms/ */



Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ReadonlyRestClient = undefined;

var _assert = __webpack_require__(2);

var _util = __webpack_require__(3);

var _json = __webpack_require__(14);

var _obj = __webpack_require__(4);

var _util2 = __webpack_require__(132);

var _ServerActions = __webpack_require__(58);

/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var __extends = undefined && undefined.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();

/**
 * An implementation of ServerActions that communicates with the server via REST requests.
 * This is mostly useful for compatibility with crawlers, where we don't want to spin up a full
 * persistent connection (using WebSockets or long-polling)
 */
var ReadonlyRestClient = /** @class */function (_super) {
    __extends(ReadonlyRestClient, _super);
    /**
     * @param {!RepoInfo} repoInfo_ Data about the namespace we are connecting to
     * @param {function(string, *, boolean, ?number)} onDataUpdate_ A callback for new data from the server
     * @param {AuthTokenProvider} authTokenProvider_
     * @implements {ServerActions}
     */
    function ReadonlyRestClient(repoInfo_, onDataUpdate_, authTokenProvider_) {
        var _this = _super.call(this) || this;
        _this.repoInfo_ = repoInfo_;
        _this.onDataUpdate_ = onDataUpdate_;
        _this.authTokenProvider_ = authTokenProvider_;
        /** @private {function(...[*])} */
        _this.log_ = (0, _util.logWrapper)('p:rest:');
        /**
         * We don't actually need to track listens, except to prevent us calling an onComplete for a listen
         * that's been removed. :-/
         *
         * @private {!Object.<string, !Object>}
         */
        _this.listens_ = {};
        return _this;
    }
    ReadonlyRestClient.prototype.reportStats = function (stats) {
        throw new Error('Method not implemented.');
    };
    /**
     * @param {!Query} query
     * @param {?number=} tag
     * @return {string}
     * @private
     */
    ReadonlyRestClient.getListenId_ = function (query, tag) {
        if (tag !== undefined) {
            return 'tag$' + tag;
        } else {
            (0, _assert.assert)(query.getQueryParams().isDefault(), "should have a tag if it's not a default query.");
            return query.path.toString();
        }
    };
    /** @inheritDoc */
    ReadonlyRestClient.prototype.listen = function (query, currentHashFn, tag, onComplete) {
        var _this = this;
        var pathString = query.path.toString();
        this.log_('Listen called for ' + pathString + ' ' + query.queryIdentifier());
        // Mark this listener so we can tell if it's removed.
        var listenId = ReadonlyRestClient.getListenId_(query, tag);
        var thisListen = {};
        this.listens_[listenId] = thisListen;
        var queryStringParamaters = query.getQueryParams().toRestQueryStringParameters();
        this.restRequest_(pathString + '.json', queryStringParamaters, function (error, result) {
            var data = result;
            if (error === 404) {
                data = null;
                error = null;
            }
            if (error === null) {
                _this.onDataUpdate_(pathString, data, /*isMerge=*/false, tag);
            }
            if ((0, _obj.safeGet)(_this.listens_, listenId) === thisListen) {
                var status_1;
                if (!error) {
                    status_1 = 'ok';
                } else if (error == 401) {
                    status_1 = 'permission_denied';
                } else {
                    status_1 = 'rest_error:' + error;
                }
                onComplete(status_1, null);
            }
        });
    };
    /** @inheritDoc */
    ReadonlyRestClient.prototype.unlisten = function (query, tag) {
        var listenId = ReadonlyRestClient.getListenId_(query, tag);
        delete this.listens_[listenId];
    };
    /** @inheritDoc */
    ReadonlyRestClient.prototype.refreshAuthToken = function (token) {
        // no-op since we just always call getToken.
    };
    /**
     * Performs a REST request to the given path, with the provided query string parameters,
     * and any auth credentials we have.
     *
     * @param {!string} pathString
     * @param {!Object.<string, *>} queryStringParameters
     * @param {?function(?number, *=)} callback
     * @private
     */
    ReadonlyRestClient.prototype.restRequest_ = function (pathString, queryStringParameters, callback) {
        var _this = this;
        if (queryStringParameters === void 0) {
            queryStringParameters = {};
        }
        queryStringParameters['format'] = 'export';
        this.authTokenProvider_.getToken( /*forceRefresh=*/false).then(function (authTokenData) {
            var authToken = authTokenData && authTokenData.accessToken;
            if (authToken) {
                queryStringParameters['auth'] = authToken;
            }
            var url = (_this.repoInfo_.secure ? 'https://' : 'http://') + _this.repoInfo_.host + pathString + '?' + (0, _util2.querystring)(queryStringParameters);
            _this.log_('Sending REST request for ' + url);
            var xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function () {
                if (callback && xhr.readyState === 4) {
                    _this.log_('REST Response for ' + url + ' received. status:', xhr.status, 'response:', xhr.responseText);
                    var res = null;
                    if (xhr.status >= 200 && xhr.status < 300) {
                        try {
                            res = (0, _json.jsonEval)(xhr.responseText);
                        } catch (e) {
                            (0, _util.warn)('Failed to parse JSON response for ' + url + ': ' + xhr.responseText);
                        }
                        callback(null, res);
                    } else {
                        // 401 and 404 are expected.
                        if (xhr.status !== 401 && xhr.status !== 404) {
                            (0, _util.warn)('Got unsuccessful REST response for ' + url + ' Status: ' + xhr.status);
                        }
                        callback(xhr.status);
                    }
                    callback = null;
                }
            };
            xhr.open('GET', url, /*asynchronous=*/true);
            xhr.send();
        });
    };
    return ReadonlyRestClient;
}(_ServerActions.ServerActions);
exports.ReadonlyRestClient = ReadonlyRestClient;
//# sourceMappingURL=ReadonlyRestClient.js.map


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*! @license Firebase v4.5.0
Build: rev-f49c8b5
Terms: https://firebase.google.com/terms/ */



Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TransactionStatus = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /**
                                                                                                                                                                                                                                                                               * Copyright 2017 Google Inc.
                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                               * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                               * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                               * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                               *   http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                               * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                               * distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                               * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                               * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                               * limitations under the License.
                                                                                                                                                                                                                                                                               */


var _assert = __webpack_require__(2);

var _Reference = __webpack_require__(43);

var _DataSnapshot = __webpack_require__(53);

var _Path = __webpack_require__(5);

var _Tree = __webpack_require__(107);

var _PriorityIndex = __webpack_require__(7);

var _util = __webpack_require__(3);

var _ServerValues = __webpack_require__(71);

var _validation = __webpack_require__(16);

var _obj = __webpack_require__(4);

var _nodeFromJSON = __webpack_require__(34);

var _ChildrenNode = __webpack_require__(8);

var _Repo = __webpack_require__(35);

// TODO: This is pretty messy.  Ideally, a lot of this would move into FirebaseData, or a transaction-specific
// component used by FirebaseData, but it has ties to user callbacks (transaction update and onComplete) as well
// as the realtime connection (to send transactions to the server).  So that all needs to be decoupled first.
// For now it's part of Repo, but in its own file.
/**
 * @enum {number}
 */
var TransactionStatus = exports.TransactionStatus = undefined;
(function (TransactionStatus) {
    // We've run the transaction and updated transactionResultData_ with the result, but it isn't currently sent to the
    // server. A transaction will go from RUN -> SENT -> RUN if it comes back from the server as rejected due to
    // mismatched hash.
    TransactionStatus[TransactionStatus["RUN"] = 0] = "RUN";
    // We've run the transaction and sent it to the server and it's currently outstanding (hasn't come back as accepted
    // or rejected yet).
    TransactionStatus[TransactionStatus["SENT"] = 1] = "SENT";
    // Temporary state used to mark completed transactions (whether successful or aborted).  The transaction will be
    // removed when we get a chance to prune completed ones.
    TransactionStatus[TransactionStatus["COMPLETED"] = 2] = "COMPLETED";
    // Used when an already-sent transaction needs to be aborted (e.g. due to a conflicting set() call that was made).
    // If it comes back as unsuccessful, we'll abort it.
    TransactionStatus[TransactionStatus["SENT_NEEDS_ABORT"] = 3] = "SENT_NEEDS_ABORT";
    // Temporary state used to mark transactions that need to be aborted.
    TransactionStatus[TransactionStatus["NEEDS_ABORT"] = 4] = "NEEDS_ABORT";
})(TransactionStatus || (exports.TransactionStatus = TransactionStatus = {}));
/**
 * If a transaction does not succeed after 25 retries, we abort it.  Among other things this ensure that if there's
 * ever a bug causing a mismatch between client / server hashes for some data, we won't retry indefinitely.
 * @type {number}
 * @const
 * @private
 */
_Repo.Repo.MAX_TRANSACTION_RETRIES_ = 25;
/**
 * Setup the transaction data structures
 * @private
 */
_Repo.Repo.prototype.transactions_init_ = function () {
    /**
     * Stores queues of outstanding transactions for Firebase locations.
     *
     * @type {!Tree.<Array.<!Transaction>>}
     * @private
     */
    this.transactionQueueTree_ = new _Tree.Tree();
};
/**
 * Creates a new transaction, adds it to the transactions we're tracking, and sends it to the server if possible.
 *
 * @param {!Path} path Path at which to do transaction.
 * @param {function(*):*} transactionUpdate Update callback.
 * @param {?function(?Error, boolean, ?DataSnapshot)} onComplete Completion callback.
 * @param {boolean} applyLocally Whether or not to make intermediate results visible
 */
_Repo.Repo.prototype.startTransaction = function (path, transactionUpdate, onComplete, applyLocally) {
    this.log_('transaction on ' + path);
    // Add a watch to make sure we get server updates.
    var valueCallback = function valueCallback() {};
    var watchRef = new _Reference.Reference(this, path);
    watchRef.on('value', valueCallback);
    var unwatcher = function unwatcher() {
        watchRef.off('value', valueCallback);
    };
    // Initialize transaction.
    var transaction = {
        path: path,
        update: transactionUpdate,
        onComplete: onComplete,
        // One of TransactionStatus enums.
        status: null,
        // Used when combining transactions at different locations to figure out which one goes first.
        order: (0, _util.LUIDGenerator)(),
        // Whether to raise local events for this transaction.
        applyLocally: applyLocally,
        // Count of how many times we've retried the transaction.
        retryCount: 0,
        // Function to call to clean up our .on() listener.
        unwatcher: unwatcher,
        // Stores why a transaction was aborted.
        abortReason: null,
        currentWriteId: null,
        currentInputSnapshot: null,
        currentOutputSnapshotRaw: null,
        currentOutputSnapshotResolved: null
    };
    // Run transaction initially.
    var currentState = this.getLatestState_(path);
    transaction.currentInputSnapshot = currentState;
    var newVal = transaction.update(currentState.val());
    if (newVal === undefined) {
        // Abort transaction.
        transaction.unwatcher();
        transaction.currentOutputSnapshotRaw = null;
        transaction.currentOutputSnapshotResolved = null;
        if (transaction.onComplete) {
            // We just set the input snapshot, so this cast should be safe
            var snapshot = new _DataSnapshot.DataSnapshot(transaction.currentInputSnapshot, new _Reference.Reference(this, transaction.path), _PriorityIndex.PRIORITY_INDEX);
            transaction.onComplete(null, false, snapshot);
        }
    } else {
        (0, _validation.validateFirebaseData)('transaction failed: Data returned ', newVal, transaction.path);
        // Mark as run and add to our queue.
        transaction.status = TransactionStatus.RUN;
        var queueNode = this.transactionQueueTree_.subTree(path);
        var nodeQueue = queueNode.getValue() || [];
        nodeQueue.push(transaction);
        queueNode.setValue(nodeQueue);
        // Update visibleData and raise events
        // Note: We intentionally raise events after updating all of our transaction state, since the user could
        // start new transactions from the event callbacks.
        var priorityForNode = void 0;
        if ((typeof newVal === 'undefined' ? 'undefined' : _typeof(newVal)) === 'object' && newVal !== null && (0, _obj.contains)(newVal, '.priority')) {
            priorityForNode = (0, _obj.safeGet)(newVal, '.priority');
            (0, _assert.assert)((0, _validation.isValidPriority)(priorityForNode), 'Invalid priority returned by transaction. ' + 'Priority must be a valid string, finite number, server value, or null.');
        } else {
            var currentNode = this.serverSyncTree_.calcCompleteEventCache(path) || _ChildrenNode.ChildrenNode.EMPTY_NODE;
            priorityForNode = currentNode.getPriority().val();
        }
        priorityForNode /** @type {null|number|string} */ = priorityForNode;
        var serverValues = this.generateServerValues();
        var newNodeUnresolved = (0, _nodeFromJSON.nodeFromJSON)(newVal, priorityForNode);
        var newNode = (0, _ServerValues.resolveDeferredValueSnapshot)(newNodeUnresolved, serverValues);
        transaction.currentOutputSnapshotRaw = newNodeUnresolved;
        transaction.currentOutputSnapshotResolved = newNode;
        transaction.currentWriteId = this.getNextWriteId_();
        var events = this.serverSyncTree_.applyUserOverwrite(path, newNode, transaction.currentWriteId, transaction.applyLocally);
        this.eventQueue_.raiseEventsForChangedPath(path, events);
        this.sendReadyTransactions_();
    }
};
/**
 * @param {!Path} path
 * @param {Array.<number>=} excludeSets A specific set to exclude
 * @return {Node}
 * @private
 */
_Repo.Repo.prototype.getLatestState_ = function (path, excludeSets) {
    return this.serverSyncTree_.calcCompleteEventCache(path, excludeSets) || _ChildrenNode.ChildrenNode.EMPTY_NODE;
};
/**
 * Sends any already-run transactions that aren't waiting for outstanding transactions to
 * complete.
 *
 * Externally it's called with no arguments, but it calls itself recursively with a particular
 * transactionQueueTree node to recurse through the tree.
 *
 * @param {Tree.<Array.<Transaction>>=} node  transactionQueueTree node to start at.
 * @private
 */
_Repo.Repo.prototype.sendReadyTransactions_ = function (node) {
    var _this = this;
    if (node === void 0) {
        node = this.transactionQueueTree_;
    }
    // Before recursing, make sure any completed transactions are removed.
    if (!node) {
        this.pruneCompletedTransactionsBelowNode_(node);
    }
    if (node.getValue() !== null) {
        var queue = this.buildTransactionQueue_(node);
        (0, _assert.assert)(queue.length > 0, 'Sending zero length transaction queue');
        var allRun = queue.every(function (transaction) {
            return transaction.status === TransactionStatus.RUN;
        });
        // If they're all run (and not sent), we can send them.  Else, we must wait.
        if (allRun) {
            this.sendTransactionQueue_(node.path(), queue);
        }
    } else if (node.hasChildren()) {
        node.forEachChild(function (childNode) {
            _this.sendReadyTransactions_(childNode);
        });
    }
};
/**
 * Given a list of run transactions, send them to the server and then handle the result (success or failure).
 *
 * @param {!Path} path The location of the queue.
 * @param {!Array.<Transaction>} queue Queue of transactions under the specified location.
 * @private
 */
_Repo.Repo.prototype.sendTransactionQueue_ = function (path, queue) {
    var _this = this;
    // Mark transactions as sent and increment retry count!
    var setsToIgnore = queue.map(function (txn) {
        return txn.currentWriteId;
    });
    var latestState = this.getLatestState_(path, setsToIgnore);
    var snapToSend = latestState;
    var latestHash = latestState.hash();
    for (var i = 0; i < queue.length; i++) {
        var txn = queue[i];
        (0, _assert.assert)(txn.status === TransactionStatus.RUN, 'tryToSendTransactionQueue_: items in queue should all be run.');
        txn.status = TransactionStatus.SENT;
        txn.retryCount++;
        var relativePath = _Path.Path.relativePath(path, txn.path);
        // If we've gotten to this point, the output snapshot must be defined.
        snapToSend = snapToSend.updateChild(relativePath /**@type {!Node} */, txn.currentOutputSnapshotRaw);
    }
    var dataToSend = snapToSend.val(true);
    var pathToSend = path;
    // Send the put.
    this.server_.put(pathToSend.toString(), dataToSend, function (status) {
        _this.log_('transaction put response', {
            path: pathToSend.toString(),
            status: status
        });
        var events = [];
        if (status === 'ok') {
            // Queue up the callbacks and fire them after cleaning up all of our transaction state, since
            // the callback could trigger more transactions or sets.
            var callbacks = [];
            for (var i = 0; i < queue.length; i++) {
                queue[i].status = TransactionStatus.COMPLETED;
                events = events.concat(_this.serverSyncTree_.ackUserWrite(queue[i].currentWriteId));
                if (queue[i].onComplete) {
                    // We never unset the output snapshot, and given that this transaction is complete, it should be set
                    var node = queue[i].currentOutputSnapshotResolved;
                    var ref = new _Reference.Reference(_this, queue[i].path);
                    var snapshot = new _DataSnapshot.DataSnapshot(node, ref, _PriorityIndex.PRIORITY_INDEX);
                    callbacks.push(queue[i].onComplete.bind(null, null, true, snapshot));
                }
                queue[i].unwatcher();
            }
            // Now remove the completed transactions.
            _this.pruneCompletedTransactionsBelowNode_(_this.transactionQueueTree_.subTree(path));
            // There may be pending transactions that we can now send.
            _this.sendReadyTransactions_();
            _this.eventQueue_.raiseEventsForChangedPath(path, events);
            // Finally, trigger onComplete callbacks.
            for (var i = 0; i < callbacks.length; i++) {
                (0, _util.exceptionGuard)(callbacks[i]);
            }
        } else {
            // transactions are no longer sent.  Update their status appropriately.
            if (status === 'datastale') {
                for (var i = 0; i < queue.length; i++) {
                    if (queue[i].status === TransactionStatus.SENT_NEEDS_ABORT) queue[i].status = TransactionStatus.NEEDS_ABORT;else queue[i].status = TransactionStatus.RUN;
                }
            } else {
                (0, _util.warn)('transaction at ' + pathToSend.toString() + ' failed: ' + status);
                for (var i = 0; i < queue.length; i++) {
                    queue[i].status = TransactionStatus.NEEDS_ABORT;
                    queue[i].abortReason = status;
                }
            }
            _this.rerunTransactions_(path);
        }
    }, latestHash);
};
/**
 * Finds all transactions dependent on the data at changedPath and reruns them.
 *
 * Should be called any time cached data changes.
 *
 * Return the highest path that was affected by rerunning transactions.  This is the path at which events need to
 * be raised for.
 *
 * @param {!Path} changedPath The path in mergedData that changed.
 * @return {!Path} The rootmost path that was affected by rerunning transactions.
 * @private
 */
_Repo.Repo.prototype.rerunTransactions_ = function (changedPath) {
    var rootMostTransactionNode = this.getAncestorTransactionNode_(changedPath);
    var path = rootMostTransactionNode.path();
    var queue = this.buildTransactionQueue_(rootMostTransactionNode);
    this.rerunTransactionQueue_(queue, path);
    return path;
};
/**
 * Does all the work of rerunning transactions (as well as cleans up aborted transactions and whatnot).
 *
 * @param {Array.<Transaction>} queue The queue of transactions to run.
 * @param {!Path} path The path the queue is for.
 * @private
 */
_Repo.Repo.prototype.rerunTransactionQueue_ = function (queue, path) {
    if (queue.length === 0) {
        return; // Nothing to do!
    }
    // Queue up the callbacks and fire them after cleaning up all of our transaction state, since
    // the callback could trigger more transactions or sets.
    var callbacks = [];
    var events = [];
    // Ignore all of the sets we're going to re-run.
    var txnsToRerun = queue.filter(function (q) {
        return q.status === TransactionStatus.RUN;
    });
    var setsToIgnore = txnsToRerun.map(function (q) {
        return q.currentWriteId;
    });
    for (var i = 0; i < queue.length; i++) {
        var transaction = queue[i];
        var relativePath = _Path.Path.relativePath(path, transaction.path);
        var abortTransaction = false,
            abortReason = void 0;
        (0, _assert.assert)(relativePath !== null, 'rerunTransactionsUnderNode_: relativePath should not be null.');
        if (transaction.status === TransactionStatus.NEEDS_ABORT) {
            abortTransaction = true;
            abortReason = transaction.abortReason;
            events = events.concat(this.serverSyncTree_.ackUserWrite(transaction.currentWriteId, true));
        } else if (transaction.status === TransactionStatus.RUN) {
            if (transaction.retryCount >= _Repo.Repo.MAX_TRANSACTION_RETRIES_) {
                abortTransaction = true;
                abortReason = 'maxretry';
                events = events.concat(this.serverSyncTree_.ackUserWrite(transaction.currentWriteId, true));
            } else {
                // This code reruns a transaction
                var currentNode = this.getLatestState_(transaction.path, setsToIgnore);
                transaction.currentInputSnapshot = currentNode;
                var newData = queue[i].update(currentNode.val());
                if (newData !== undefined) {
                    (0, _validation.validateFirebaseData)('transaction failed: Data returned ', newData, transaction.path);
                    var newDataNode = (0, _nodeFromJSON.nodeFromJSON)(newData);
                    var hasExplicitPriority = (typeof newData === 'undefined' ? 'undefined' : _typeof(newData)) === 'object' && newData != null && (0, _obj.contains)(newData, '.priority');
                    if (!hasExplicitPriority) {
                        // Keep the old priority if there wasn't a priority explicitly specified.
                        newDataNode = newDataNode.updatePriority(currentNode.getPriority());
                    }
                    var oldWriteId = transaction.currentWriteId;
                    var serverValues = this.generateServerValues();
                    var newNodeResolved = (0, _ServerValues.resolveDeferredValueSnapshot)(newDataNode, serverValues);
                    transaction.currentOutputSnapshotRaw = newDataNode;
                    transaction.currentOutputSnapshotResolved = newNodeResolved;
                    transaction.currentWriteId = this.getNextWriteId_();
                    // Mutates setsToIgnore in place
                    setsToIgnore.splice(setsToIgnore.indexOf(oldWriteId), 1);
                    events = events.concat(this.serverSyncTree_.applyUserOverwrite(transaction.path, newNodeResolved, transaction.currentWriteId, transaction.applyLocally));
                    events = events.concat(this.serverSyncTree_.ackUserWrite(oldWriteId, true));
                } else {
                    abortTransaction = true;
                    abortReason = 'nodata';
                    events = events.concat(this.serverSyncTree_.ackUserWrite(transaction.currentWriteId, true));
                }
            }
        }
        this.eventQueue_.raiseEventsForChangedPath(path, events);
        events = [];
        if (abortTransaction) {
            // Abort.
            queue[i].status = TransactionStatus.COMPLETED;
            // Removing a listener can trigger pruning which can muck with mergedData/visibleData (as it prunes data).
            // So defer the unwatcher until we're done.
            (function (unwatcher) {
                setTimeout(unwatcher, Math.floor(0));
            })(queue[i].unwatcher);
            if (queue[i].onComplete) {
                if (abortReason === 'nodata') {
                    var ref = new _Reference.Reference(this, queue[i].path);
                    // We set this field immediately, so it's safe to cast to an actual snapshot
                    var lastInput /** @type {!Node} */ = queue[i].currentInputSnapshot;
                    var snapshot = new _DataSnapshot.DataSnapshot(lastInput, ref, _PriorityIndex.PRIORITY_INDEX);
                    callbacks.push(queue[i].onComplete.bind(null, null, false, snapshot));
                } else {
                    callbacks.push(queue[i].onComplete.bind(null, new Error(abortReason), false, null));
                }
            }
        }
    }
    // Clean up completed transactions.
    this.pruneCompletedTransactionsBelowNode_(this.transactionQueueTree_);
    // Now fire callbacks, now that we're in a good, known state.
    for (var i = 0; i < callbacks.length; i++) {
        (0, _util.exceptionGuard)(callbacks[i]);
    }
    // Try to send the transaction result to the server.
    this.sendReadyTransactions_();
};
/**
 * Returns the rootmost ancestor node of the specified path that has a pending transaction on it, or just returns
 * the node for the given path if there are no pending transactions on any ancestor.
 *
 * @param {!Path} path The location to start at.
 * @return {!Tree.<Array.<!Transaction>>} The rootmost node with a transaction.
 * @private
 */
_Repo.Repo.prototype.getAncestorTransactionNode_ = function (path) {
    var front;
    // Start at the root and walk deeper into the tree towards path until we find a node with pending transactions.
    var transactionNode = this.transactionQueueTree_;
    while ((front = path.getFront()) !== null && transactionNode.getValue() === null) {
        transactionNode = transactionNode.subTree(front);
        path = path.popFront();
    }
    return transactionNode;
};
/**
 * Builds the queue of all transactions at or below the specified transactionNode.
 *
 * @param {!Tree.<Array.<Transaction>>} transactionNode
 * @return {Array.<Transaction>} The generated queue.
 * @private
 */
_Repo.Repo.prototype.buildTransactionQueue_ = function (transactionNode) {
    // Walk any child transaction queues and aggregate them into a single queue.
    var transactionQueue = [];
    this.aggregateTransactionQueuesForNode_(transactionNode, transactionQueue);
    // Sort them by the order the transactions were created.
    transactionQueue.sort(function (a, b) {
        return a.order - b.order;
    });
    return transactionQueue;
};
/**
 * @param {!Tree.<Array.<Transaction>>} node
 * @param {Array.<Transaction>} queue
 * @private
 */
_Repo.Repo.prototype.aggregateTransactionQueuesForNode_ = function (node, queue) {
    var _this = this;
    var nodeQueue = node.getValue();
    if (nodeQueue !== null) {
        for (var i = 0; i < nodeQueue.length; i++) {
            queue.push(nodeQueue[i]);
        }
    }
    node.forEachChild(function (child) {
        _this.aggregateTransactionQueuesForNode_(child, queue);
    });
};
/**
 * Remove COMPLETED transactions at or below this node in the transactionQueueTree_.
 *
 * @param {!Tree.<Array.<!Transaction>>} node
 * @private
 */
_Repo.Repo.prototype.pruneCompletedTransactionsBelowNode_ = function (node) {
    var _this = this;
    var queue = node.getValue();
    if (queue) {
        var to = 0;
        for (var from = 0; from < queue.length; from++) {
            if (queue[from].status !== TransactionStatus.COMPLETED) {
                queue[to] = queue[from];
                to++;
            }
        }
        queue.length = to;
        node.setValue(queue.length > 0 ? queue : null);
    }
    node.forEachChild(function (childNode) {
        _this.pruneCompletedTransactionsBelowNode_(childNode);
    });
};
/**
 * Aborts all transactions on ancestors or descendants of the specified path.  Called when doing a set() or update()
 * since we consider them incompatible with transactions.
 *
 * @param {!Path} path Path for which we want to abort related transactions.
 * @return {!Path}
 * @private
 */
_Repo.Repo.prototype.abortTransactions_ = function (path) {
    var _this = this;
    var affectedPath = this.getAncestorTransactionNode_(path).path();
    var transactionNode = this.transactionQueueTree_.subTree(path);
    transactionNode.forEachAncestor(function (node) {
        _this.abortTransactionsOnNode_(node);
    });
    this.abortTransactionsOnNode_(transactionNode);
    transactionNode.forEachDescendant(function (node) {
        _this.abortTransactionsOnNode_(node);
    });
    return affectedPath;
};
/**
 * Abort transactions stored in this transaction queue node.
 *
 * @param {!Tree.<Array.<Transaction>>} node Node to abort transactions for.
 * @private
 */
_Repo.Repo.prototype.abortTransactionsOnNode_ = function (node) {
    var queue = node.getValue();
    if (queue !== null) {
        // Queue up the callbacks and fire them after cleaning up all of our transaction state, since
        // the callback could trigger more transactions or sets.
        var callbacks = [];
        // Go through queue.  Any already-sent transactions must be marked for abort, while the unsent ones
        // can be immediately aborted and removed.
        var events = [];
        var lastSent = -1;
        for (var i = 0; i < queue.length; i++) {
            if (queue[i].status === TransactionStatus.SENT_NEEDS_ABORT) {
                // Already marked.  No action needed.
            } else if (queue[i].status === TransactionStatus.SENT) {
                (0, _assert.assert)(lastSent === i - 1, 'All SENT items should be at beginning of queue.');
                lastSent = i;
                // Mark transaction for abort when it comes back.
                queue[i].status = TransactionStatus.SENT_NEEDS_ABORT;
                queue[i].abortReason = 'set';
            } else {
                (0, _assert.assert)(queue[i].status === TransactionStatus.RUN, 'Unexpected transaction status in abort');
                // We can abort it immediately.
                queue[i].unwatcher();
                events = events.concat(this.serverSyncTree_.ackUserWrite(queue[i].currentWriteId, true));
                if (queue[i].onComplete) {
                    var snapshot = null;
                    callbacks.push(queue[i].onComplete.bind(null, new Error('set'), false, snapshot));
                }
            }
        }
        if (lastSent === -1) {
            // We're not waiting for any sent transactions.  We can clear the queue.
            node.setValue(null);
        } else {
            // Remove the transactions we aborted.
            queue.length = lastSent + 1;
        }
        // Now fire the callbacks.
        this.eventQueue_.raiseEventsForChangedPath(node.path(), events);
        for (var i = 0; i < callbacks.length; i++) {
            (0, _util.exceptionGuard)(callbacks[i]);
        }
    }
};
//# sourceMappingURL=Repo_transaction.js.map


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*! @license Firebase v4.5.0
Build: rev-f49c8b5
Terms: https://firebase.google.com/terms/ */



Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SnapshotHolder = undefined;

var _ChildrenNode = __webpack_require__(8);

/**
 * Mutable object which basically just stores a reference to the "latest" immutable snapshot.
 *
 * @constructor
 */
var SnapshotHolder = /** @class */function () {
    function SnapshotHolder() {
        this.rootNode_ = _ChildrenNode.ChildrenNode.EMPTY_NODE;
    }
    SnapshotHolder.prototype.getNode = function (path) {
        return this.rootNode_.getChild(path);
    };
    SnapshotHolder.prototype.updateSnapshot = function (path, newSnapshotNode) {
        this.rootNode_ = this.rootNode_.updateChild(path, newSnapshotNode);
    };
    return SnapshotHolder;
}(); /**
      * Copyright 2017 Google Inc.
      *
      * Licensed under the Apache License, Version 2.0 (the "License");
      * you may not use this file except in compliance with the License.
      * You may obtain a copy of the License at
      *
      *   http://www.apache.org/licenses/LICENSE-2.0
      *
      * Unless required by applicable law or agreed to in writing, software
      * distributed under the License is distributed on an "AS IS" BASIS,
      * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
      * See the License for the specific language governing permissions and
      * limitations under the License.
      */
exports.SnapshotHolder = SnapshotHolder;
//# sourceMappingURL=SnapshotHolder.js.map


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*! @license Firebase v4.5.0
Build: rev-f49c8b5
Terms: https://firebase.google.com/terms/ */



Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SyncTree = undefined;

var _assert = __webpack_require__(2);

var _util = __webpack_require__(3);

var _AckUserWrite = __webpack_require__(98);

var _ChildrenNode = __webpack_require__(8);

var _obj = __webpack_require__(4);

var _ImmutableTree = __webpack_require__(46);

var _ListenComplete = __webpack_require__(99);

var _Merge = __webpack_require__(100);

var _Operation = __webpack_require__(15);

var _Overwrite = __webpack_require__(61);

var _Path = __webpack_require__(5);

var _SyncPoint = __webpack_require__(60);

var _WriteTree = __webpack_require__(97);

/**
 * SyncTree is the central class for managing event callback registration, data caching, views
 * (query processing), and event generation.  There are typically two SyncTree instances for
 * each Repo, one for the normal Firebase data, and one for the .info data.
 *
 * It has a number of responsibilities, including:
 *  - Tracking all user event callbacks (registered via addEventRegistration() and removeEventRegistration()).
 *  - Applying and caching data changes for user set(), transaction(), and update() calls
 *    (applyUserOverwrite(), applyUserMerge()).
 *  - Applying and caching data changes for server data changes (applyServerOverwrite(),
 *    applyServerMerge()).
 *  - Generating user-facing events for server and user changes (all of the apply* methods
 *    return the set of events that need to be raised as a result).
 *  - Maintaining the appropriate set of server listens to ensure we are always subscribed
 *    to the correct set of paths and queries to satisfy the current set of user event
 *    callbacks (listens are started/stopped using the provided listenProvider).
 *
 * NOTE: Although SyncTree tracks event callbacks and calculates events to raise, the actual
 * events are returned to the caller rather than raised synchronously.
 *
 * @constructor
 */
var SyncTree = /** @class */function () {
    /**
     * @param {!ListenProvider} listenProvider_ Used by SyncTree to start / stop listening
     *   to server data.
     */
    function SyncTree(listenProvider_) {
        this.listenProvider_ = listenProvider_;
        /**
         * Tree of SyncPoints.  There's a SyncPoint at any location that has 1 or more views.
         * @type {!ImmutableTree.<!SyncPoint>}
         * @private
         */
        this.syncPointTree_ = _ImmutableTree.ImmutableTree.Empty;
        /**
         * A tree of all pending user writes (user-initiated set()'s, transaction()'s, update()'s, etc.).
         * @type {!WriteTree}
         * @private
         */
        this.pendingWriteTree_ = new _WriteTree.WriteTree();
        this.tagToQueryMap_ = {};
        this.queryToTagMap_ = {};
    }
    /**
     * Apply the data changes for a user-generated set() or transaction() call.
     *
     * @param {!Path} path
     * @param {!Node} newData
     * @param {number} writeId
     * @param {boolean=} visible
     * @return {!Array.<!Event>} Events to raise.
     */
    SyncTree.prototype.applyUserOverwrite = function (path, newData, writeId, visible) {
        // Record pending write.
        this.pendingWriteTree_.addOverwrite(path, newData, writeId, visible);
        if (!visible) {
            return [];
        } else {
            return this.applyOperationToSyncPoints_(new _Overwrite.Overwrite(_Operation.OperationSource.User, path, newData));
        }
    };
    /**
     * Apply the data from a user-generated update() call
     *
     * @param {!Path} path
     * @param {!Object.<string, !Node>} changedChildren
     * @param {!number} writeId
     * @return {!Array.<!Event>} Events to raise.
     */
    SyncTree.prototype.applyUserMerge = function (path, changedChildren, writeId) {
        // Record pending merge.
        this.pendingWriteTree_.addMerge(path, changedChildren, writeId);
        var changeTree = _ImmutableTree.ImmutableTree.fromObject(changedChildren);
        return this.applyOperationToSyncPoints_(new _Merge.Merge(_Operation.OperationSource.User, path, changeTree));
    };
    /**
     * Acknowledge a pending user write that was previously registered with applyUserOverwrite() or applyUserMerge().
     *
     * @param {!number} writeId
     * @param {boolean=} revert True if the given write failed and needs to be reverted
     * @return {!Array.<!Event>} Events to raise.
     */
    SyncTree.prototype.ackUserWrite = function (writeId, revert) {
        if (revert === void 0) {
            revert = false;
        }
        var write = this.pendingWriteTree_.getWrite(writeId);
        var needToReevaluate = this.pendingWriteTree_.removeWrite(writeId);
        if (!needToReevaluate) {
            return [];
        } else {
            var affectedTree_1 = _ImmutableTree.ImmutableTree.Empty;
            if (write.snap != null) {
                // overwrite
                affectedTree_1 = affectedTree_1.set(_Path.Path.Empty, true);
            } else {
                (0, _obj.forEach)(write.children, function (pathString, node) {
                    affectedTree_1 = affectedTree_1.set(new _Path.Path(pathString), node);
                });
            }
            return this.applyOperationToSyncPoints_(new _AckUserWrite.AckUserWrite(write.path, affectedTree_1, revert));
        }
    };
    /**
     * Apply new server data for the specified path..
     *
     * @param {!Path} path
     * @param {!Node} newData
     * @return {!Array.<!Event>} Events to raise.
     */
    SyncTree.prototype.applyServerOverwrite = function (path, newData) {
        return this.applyOperationToSyncPoints_(new _Overwrite.Overwrite(_Operation.OperationSource.Server, path, newData));
    };
    /**
     * Apply new server data to be merged in at the specified path.
     *
     * @param {!Path} path
     * @param {!Object.<string, !Node>} changedChildren
     * @return {!Array.<!Event>} Events to raise.
     */
    SyncTree.prototype.applyServerMerge = function (path, changedChildren) {
        var changeTree = _ImmutableTree.ImmutableTree.fromObject(changedChildren);
        return this.applyOperationToSyncPoints_(new _Merge.Merge(_Operation.OperationSource.Server, path, changeTree));
    };
    /**
     * Apply a listen complete for a query
     *
     * @param {!Path} path
     * @return {!Array.<!Event>} Events to raise.
     */
    SyncTree.prototype.applyListenComplete = function (path) {
        return this.applyOperationToSyncPoints_(new _ListenComplete.ListenComplete(_Operation.OperationSource.Server, path));
    };
    /**
     * Apply new server data for the specified tagged query.
     *
     * @param {!Path} path
     * @param {!Node} snap
     * @param {!number} tag
     * @return {!Array.<!Event>} Events to raise.
     */
    SyncTree.prototype.applyTaggedQueryOverwrite = function (path, snap, tag) {
        var queryKey = this.queryKeyForTag_(tag);
        if (queryKey != null) {
            var r = SyncTree.parseQueryKey_(queryKey);
            var queryPath = r.path,
                queryId = r.queryId;
            var relativePath = _Path.Path.relativePath(queryPath, path);
            var op = new _Overwrite.Overwrite(_Operation.OperationSource.forServerTaggedQuery(queryId), relativePath, snap);
            return this.applyTaggedOperation_(queryPath, op);
        } else {
            // Query must have been removed already
            return [];
        }
    };
    /**
     * Apply server data to be merged in for the specified tagged query.
     *
     * @param {!Path} path
     * @param {!Object.<string, !Node>} changedChildren
     * @param {!number} tag
     * @return {!Array.<!Event>} Events to raise.
     */
    SyncTree.prototype.applyTaggedQueryMerge = function (path, changedChildren, tag) {
        var queryKey = this.queryKeyForTag_(tag);
        if (queryKey) {
            var r = SyncTree.parseQueryKey_(queryKey);
            var queryPath = r.path,
                queryId = r.queryId;
            var relativePath = _Path.Path.relativePath(queryPath, path);
            var changeTree = _ImmutableTree.ImmutableTree.fromObject(changedChildren);
            var op = new _Merge.Merge(_Operation.OperationSource.forServerTaggedQuery(queryId), relativePath, changeTree);
            return this.applyTaggedOperation_(queryPath, op);
        } else {
            // We've already removed the query. No big deal, ignore the update
            return [];
        }
    };
    /**
     * Apply a listen complete for a tagged query
     *
     * @param {!Path} path
     * @param {!number} tag
     * @return {!Array.<!Event>} Events to raise.
     */
    SyncTree.prototype.applyTaggedListenComplete = function (path, tag) {
        var queryKey = this.queryKeyForTag_(tag);
        if (queryKey) {
            var r = SyncTree.parseQueryKey_(queryKey);
            var queryPath = r.path,
                queryId = r.queryId;
            var relativePath = _Path.Path.relativePath(queryPath, path);
            var op = new _ListenComplete.ListenComplete(_Operation.OperationSource.forServerTaggedQuery(queryId), relativePath);
            return this.applyTaggedOperation_(queryPath, op);
        } else {
            // We've already removed the query. No big deal, ignore the update
            return [];
        }
    };
    /**
     * Add an event callback for the specified query.
     *
     * @param {!Query} query
     * @param {!EventRegistration} eventRegistration
     * @return {!Array.<!Event>} Events to raise.
     */
    SyncTree.prototype.addEventRegistration = function (query, eventRegistration) {
        var path = query.path;
        var serverCache = null;
        var foundAncestorDefaultView = false;
        // Any covering writes will necessarily be at the root, so really all we need to find is the server cache.
        // Consider optimizing this once there's a better understanding of what actual behavior will be.
        this.syncPointTree_.foreachOnPath(path, function (pathToSyncPoint, sp) {
            var relativePath = _Path.Path.relativePath(pathToSyncPoint, path);
            serverCache = serverCache || sp.getCompleteServerCache(relativePath);
            foundAncestorDefaultView = foundAncestorDefaultView || sp.hasCompleteView();
        });
        var syncPoint = this.syncPointTree_.get(path);
        if (!syncPoint) {
            syncPoint = new _SyncPoint.SyncPoint();
            this.syncPointTree_ = this.syncPointTree_.set(path, syncPoint);
        } else {
            foundAncestorDefaultView = foundAncestorDefaultView || syncPoint.hasCompleteView();
            serverCache = serverCache || syncPoint.getCompleteServerCache(_Path.Path.Empty);
        }
        var serverCacheComplete;
        if (serverCache != null) {
            serverCacheComplete = true;
        } else {
            serverCacheComplete = false;
            serverCache = _ChildrenNode.ChildrenNode.EMPTY_NODE;
            var subtree = this.syncPointTree_.subtree(path);
            subtree.foreachChild(function (childName, childSyncPoint) {
                var completeCache = childSyncPoint.getCompleteServerCache(_Path.Path.Empty);
                if (completeCache) {
                    serverCache = serverCache.updateImmediateChild(childName, completeCache);
                }
            });
        }
        var viewAlreadyExists = syncPoint.viewExistsForQuery(query);
        if (!viewAlreadyExists && !query.getQueryParams().loadsAllData()) {
            // We need to track a tag for this query
            var queryKey = SyncTree.makeQueryKey_(query);
            (0, _assert.assert)(!(queryKey in this.queryToTagMap_), 'View does not exist, but we have a tag');
            var tag = SyncTree.getNextQueryTag_();
            this.queryToTagMap_[queryKey] = tag;
            // Coerce to string to avoid sparse arrays.
            this.tagToQueryMap_['_' + tag] = queryKey;
        }
        var writesCache = this.pendingWriteTree_.childWrites(path);
        var events = syncPoint.addEventRegistration(query, eventRegistration, writesCache, serverCache, serverCacheComplete);
        if (!viewAlreadyExists && !foundAncestorDefaultView) {
            var view /** @type !View */ = syncPoint.viewForQuery(query);
            events = events.concat(this.setupListener_(query, view));
        }
        return events;
    };
    /**
     * Remove event callback(s).
     *
     * If query is the default query, we'll check all queries for the specified eventRegistration.
     * If eventRegistration is null, we'll remove all callbacks for the specified query/queries.
     *
     * @param {!Query} query
     * @param {?EventRegistration} eventRegistration If null, all callbacks are removed.
     * @param {Error=} cancelError If a cancelError is provided, appropriate cancel events will be returned.
     * @return {!Array.<!Event>} Cancel events, if cancelError was provided.
     */
    SyncTree.prototype.removeEventRegistration = function (query, eventRegistration, cancelError) {
        var _this = this;
        // Find the syncPoint first. Then deal with whether or not it has matching listeners
        var path = query.path;
        var maybeSyncPoint = this.syncPointTree_.get(path);
        var cancelEvents = [];
        // A removal on a default query affects all queries at that location. A removal on an indexed query, even one without
        // other query constraints, does *not* affect all queries at that location. So this check must be for 'default', and
        // not loadsAllData().
        if (maybeSyncPoint && (query.queryIdentifier() === 'default' || maybeSyncPoint.viewExistsForQuery(query))) {
            /**
             * @type {{removed: !Array.<!Query>, events: !Array.<!Event>}}
             */
            var removedAndEvents = maybeSyncPoint.removeEventRegistration(query, eventRegistration, cancelError);
            if (maybeSyncPoint.isEmpty()) {
                this.syncPointTree_ = this.syncPointTree_.remove(path);
            }
            var removed = removedAndEvents.removed;
            cancelEvents = removedAndEvents.events;
            // We may have just removed one of many listeners and can short-circuit this whole process
            // We may also not have removed a default listener, in which case all of the descendant listeners should already be
            // properly set up.
            //
            // Since indexed queries can shadow if they don't have other query constraints, check for loadsAllData(), instead of
            // queryId === 'default'
            var removingDefault = -1 !== removed.findIndex(function (query) {
                return query.getQueryParams().loadsAllData();
            });
            var covered = this.syncPointTree_.findOnPath(path, function (relativePath, parentSyncPoint) {
                return parentSyncPoint.hasCompleteView();
            });
            if (removingDefault && !covered) {
                var subtree = this.syncPointTree_.subtree(path);
                // There are potentially child listeners. Determine what if any listens we need to send before executing the
                // removal
                if (!subtree.isEmpty()) {
                    // We need to fold over our subtree and collect the listeners to send
                    var newViews = this.collectDistinctViewsForSubTree_(subtree);
                    // Ok, we've collected all the listens we need. Set them up.
                    for (var i = 0; i < newViews.length; ++i) {
                        var view = newViews[i],
                            newQuery = view.getQuery();
                        var listener = this.createListenerForView_(view);
                        this.listenProvider_.startListening(SyncTree.queryForListening_(newQuery), this.tagForQuery_(newQuery), listener.hashFn, listener.onComplete);
                    }
                } else {
                    // There's nothing below us, so nothing we need to start listening on
                }
            }
            // If we removed anything and we're not covered by a higher up listen, we need to stop listening on this query
            // The above block has us covered in terms of making sure we're set up on listens lower in the tree.
            // Also, note that if we have a cancelError, it's already been removed at the provider level.
            if (!covered && removed.length > 0 && !cancelError) {
                // If we removed a default, then we weren't listening on any of the other queries here. Just cancel the one
                // default. Otherwise, we need to iterate through and cancel each individual query
                if (removingDefault) {
                    // We don't tag default listeners
                    var defaultTag = null;
                    this.listenProvider_.stopListening(SyncTree.queryForListening_(query), defaultTag);
                } else {
                    removed.forEach(function (queryToRemove) {
                        var tagToRemove = _this.queryToTagMap_[SyncTree.makeQueryKey_(queryToRemove)];
                        _this.listenProvider_.stopListening(SyncTree.queryForListening_(queryToRemove), tagToRemove);
                    });
                }
            }
            // Now, clear all of the tags we're tracking for the removed listens
            this.removeTags_(removed);
        } else {
            // No-op, this listener must've been already removed
        }
        return cancelEvents;
    };
    /**
     * Returns a complete cache, if we have one, of the data at a particular path. The location must have a listener above
     * it, but as this is only used by transaction code, that should always be the case anyways.
     *
     * Note: this method will *include* hidden writes from transaction with applyLocally set to false.
     * @param {!Path} path The path to the data we want
     * @param {Array.<number>=} writeIdsToExclude A specific set to be excluded
     * @return {?Node}
     */
    SyncTree.prototype.calcCompleteEventCache = function (path, writeIdsToExclude) {
        var includeHiddenSets = true;
        var writeTree = this.pendingWriteTree_;
        var serverCache = this.syncPointTree_.findOnPath(path, function (pathSoFar, syncPoint) {
            var relativePath = _Path.Path.relativePath(pathSoFar, path);
            var serverCache = syncPoint.getCompleteServerCache(relativePath);
            if (serverCache) {
                return serverCache;
            }
        });
        return writeTree.calcCompleteEventCache(path, serverCache, writeIdsToExclude, includeHiddenSets);
    };
    /**
     * This collapses multiple unfiltered views into a single view, since we only need a single
     * listener for them.
     *
     * @param {!ImmutableTree.<!SyncPoint>} subtree
     * @return {!Array.<!View>}
     * @private
     */
    SyncTree.prototype.collectDistinctViewsForSubTree_ = function (subtree) {
        return subtree.fold(function (relativePath, maybeChildSyncPoint, childMap) {
            if (maybeChildSyncPoint && maybeChildSyncPoint.hasCompleteView()) {
                var completeView = maybeChildSyncPoint.getCompleteView();
                return [completeView];
            } else {
                // No complete view here, flatten any deeper listens into an array
                var views_1 = [];
                if (maybeChildSyncPoint) {
                    views_1 = maybeChildSyncPoint.getQueryViews();
                }
                (0, _obj.forEach)(childMap, function (key, childViews) {
                    views_1 = views_1.concat(childViews);
                });
                return views_1;
            }
        });
    };
    /**
     * @param {!Array.<!Query>} queries
     * @private
     */
    SyncTree.prototype.removeTags_ = function (queries) {
        for (var j = 0; j < queries.length; ++j) {
            var removedQuery = queries[j];
            if (!removedQuery.getQueryParams().loadsAllData()) {
                // We should have a tag for this
                var removedQueryKey = SyncTree.makeQueryKey_(removedQuery);
                var removedQueryTag = this.queryToTagMap_[removedQueryKey];
                delete this.queryToTagMap_[removedQueryKey];
                delete this.tagToQueryMap_['_' + removedQueryTag];
            }
        }
    };
    /**
     * Normalizes a query to a query we send the server for listening
     * @param {!Query} query
     * @return {!Query} The normalized query
     * @private
     */
    SyncTree.queryForListening_ = function (query) {
        if (query.getQueryParams().loadsAllData() && !query.getQueryParams().isDefault()) {
            // We treat queries that load all data as default queries
            // Cast is necessary because ref() technically returns Firebase which is actually fb.api.Firebase which inherits
            // from Query
            return (/** @type {!Query} */query.getRef()
            );
        } else {
            return query;
        }
    };
    /**
     * For a given new listen, manage the de-duplication of outstanding subscriptions.
     *
     * @param {!Query} query
     * @param {!View} view
     * @return {!Array.<!Event>} This method can return events to support synchronous data sources
     * @private
     */
    SyncTree.prototype.setupListener_ = function (query, view) {
        var path = query.path;
        var tag = this.tagForQuery_(query);
        var listener = this.createListenerForView_(view);
        var events = this.listenProvider_.startListening(SyncTree.queryForListening_(query), tag, listener.hashFn, listener.onComplete);
        var subtree = this.syncPointTree_.subtree(path);
        // The root of this subtree has our query. We're here because we definitely need to send a listen for that, but we
        // may need to shadow other listens as well.
        if (tag) {
            (0, _assert.assert)(!subtree.value.hasCompleteView(), "If we're adding a query, it shouldn't be shadowed");
        } else {
            // Shadow everything at or below this location, this is a default listener.
            var queriesToStop = subtree.fold(function (relativePath, maybeChildSyncPoint, childMap) {
                if (!relativePath.isEmpty() && maybeChildSyncPoint && maybeChildSyncPoint.hasCompleteView()) {
                    return [maybeChildSyncPoint.getCompleteView().getQuery()];
                } else {
                    // No default listener here, flatten any deeper queries into an array
                    var queries_1 = [];
                    if (maybeChildSyncPoint) {
                        queries_1 = queries_1.concat(maybeChildSyncPoint.getQueryViews().map(function (view) {
                            return view.getQuery();
                        }));
                    }
                    (0, _obj.forEach)(childMap, function (key, childQueries) {
                        queries_1 = queries_1.concat(childQueries);
                    });
                    return queries_1;
                }
            });
            for (var i = 0; i < queriesToStop.length; ++i) {
                var queryToStop = queriesToStop[i];
                this.listenProvider_.stopListening(SyncTree.queryForListening_(queryToStop), this.tagForQuery_(queryToStop));
            }
        }
        return events;
    };
    /**
     *
     * @param {!View} view
     * @return {{hashFn: function(), onComplete: function(!string, *)}}
     * @private
     */
    SyncTree.prototype.createListenerForView_ = function (view) {
        var _this = this;
        var query = view.getQuery();
        var tag = this.tagForQuery_(query);
        return {
            hashFn: function hashFn() {
                var cache = view.getServerCache() || _ChildrenNode.ChildrenNode.EMPTY_NODE;
                return cache.hash();
            },
            onComplete: function onComplete(status) {
                if (status === 'ok') {
                    if (tag) {
                        return _this.applyTaggedListenComplete(query.path, tag);
                    } else {
                        return _this.applyListenComplete(query.path);
                    }
                } else {
                    // If a listen failed, kill all of the listeners here, not just the one that triggered the error.
                    // Note that this may need to be scoped to just this listener if we change permissions on filtered children
                    var error = (0, _util.errorForServerCode)(status, query);
                    return _this.removeEventRegistration(query,
                    /*eventRegistration*/null, error);
                }
            }
        };
    };
    /**
     * Given a query, computes a "queryKey" suitable for use in our queryToTagMap_.
     * @private
     * @param {!Query} query
     * @return {string}
     */
    SyncTree.makeQueryKey_ = function (query) {
        return query.path.toString() + '$' + query.queryIdentifier();
    };
    /**
     * Given a queryKey (created by makeQueryKey), parse it back into a path and queryId.
     * @private
     * @param {!string} queryKey
     * @return {{queryId: !string, path: !Path}}
     */
    SyncTree.parseQueryKey_ = function (queryKey) {
        var splitIndex = queryKey.indexOf('$');
        (0, _assert.assert)(splitIndex !== -1 && splitIndex < queryKey.length - 1, 'Bad queryKey.');
        return {
            queryId: queryKey.substr(splitIndex + 1),
            path: new _Path.Path(queryKey.substr(0, splitIndex))
        };
    };
    /**
     * Return the query associated with the given tag, if we have one
     * @param {!number} tag
     * @return {?string}
     * @private
     */
    SyncTree.prototype.queryKeyForTag_ = function (tag) {
        return this.tagToQueryMap_['_' + tag];
    };
    /**
     * Return the tag associated with the given query.
     * @param {!Query} query
     * @return {?number}
     * @private
     */
    SyncTree.prototype.tagForQuery_ = function (query) {
        var queryKey = SyncTree.makeQueryKey_(query);
        return (0, _obj.safeGet)(this.queryToTagMap_, queryKey);
    };
    /**
     * Static accessor for query tags.
     * @return {number}
     * @private
     */
    SyncTree.getNextQueryTag_ = function () {
        return SyncTree.nextQueryTag_++;
    };
    /**
     * A helper method to apply tagged operations
     *
     * @param {!Path} queryPath
     * @param {!Operation} operation
     * @return {!Array.<!Event>}
     * @private
     */
    SyncTree.prototype.applyTaggedOperation_ = function (queryPath, operation) {
        var syncPoint = this.syncPointTree_.get(queryPath);
        (0, _assert.assert)(syncPoint, "Missing sync point for query tag that we're tracking");
        var writesCache = this.pendingWriteTree_.childWrites(queryPath);
        return syncPoint.applyOperation(operation, writesCache,
        /*serverCache=*/null);
    };
    /**
     * A helper method that visits all descendant and ancestor SyncPoints, applying the operation.
     *
     * NOTES:
     * - Descendant SyncPoints will be visited first (since we raise events depth-first).
        * - We call applyOperation() on each SyncPoint passing three things:
     *   1. A version of the Operation that has been made relative to the SyncPoint location.
     *   2. A WriteTreeRef of any writes we have cached at the SyncPoint location.
     *   3. A snapshot Node with cached server data, if we have it.
        * - We concatenate all of the events returned by each SyncPoint and return the result.
     *
     * @param {!Operation} operation
     * @return {!Array.<!Event>}
     * @private
     */
    SyncTree.prototype.applyOperationToSyncPoints_ = function (operation) {
        return this.applyOperationHelper_(operation, this.syncPointTree_,
        /*serverCache=*/null, this.pendingWriteTree_.childWrites(_Path.Path.Empty));
    };
    /**
     * Recursive helper for applyOperationToSyncPoints_
     *
     * @private
     * @param {!Operation} operation
     * @param {ImmutableTree.<!SyncPoint>} syncPointTree
     * @param {?Node} serverCache
     * @param {!WriteTreeRef} writesCache
     * @return {!Array.<!Event>}
     */
    SyncTree.prototype.applyOperationHelper_ = function (operation, syncPointTree, serverCache, writesCache) {
        if (operation.path.isEmpty()) {
            return this.applyOperationDescendantsHelper_(operation, syncPointTree, serverCache, writesCache);
        } else {
            var syncPoint = syncPointTree.get(_Path.Path.Empty);
            // If we don't have cached server data, see if we can get it from this SyncPoint.
            if (serverCache == null && syncPoint != null) {
                serverCache = syncPoint.getCompleteServerCache(_Path.Path.Empty);
            }
            var events = [];
            var childName = operation.path.getFront();
            var childOperation = operation.operationForChild(childName);
            var childTree = syncPointTree.children.get(childName);
            if (childTree && childOperation) {
                var childServerCache = serverCache ? serverCache.getImmediateChild(childName) : null;
                var childWritesCache = writesCache.child(childName);
                events = events.concat(this.applyOperationHelper_(childOperation, childTree, childServerCache, childWritesCache));
            }
            if (syncPoint) {
                events = events.concat(syncPoint.applyOperation(operation, writesCache, serverCache));
            }
            return events;
        }
    };
    /**
     * Recursive helper for applyOperationToSyncPoints_
     *
     * @private
     * @param {!Operation} operation
     * @param {ImmutableTree.<!SyncPoint>} syncPointTree
     * @param {?Node} serverCache
     * @param {!WriteTreeRef} writesCache
     * @return {!Array.<!Event>}
     */
    SyncTree.prototype.applyOperationDescendantsHelper_ = function (operation, syncPointTree, serverCache, writesCache) {
        var _this = this;
        var syncPoint = syncPointTree.get(_Path.Path.Empty);
        // If we don't have cached server data, see if we can get it from this SyncPoint.
        if (serverCache == null && syncPoint != null) {
            serverCache = syncPoint.getCompleteServerCache(_Path.Path.Empty);
        }
        var events = [];
        syncPointTree.children.inorderTraversal(function (childName, childTree) {
            var childServerCache = serverCache ? serverCache.getImmediateChild(childName) : null;
            var childWritesCache = writesCache.child(childName);
            var childOperation = operation.operationForChild(childName);
            if (childOperation) {
                events = events.concat(_this.applyOperationDescendantsHelper_(childOperation, childTree, childServerCache, childWritesCache));
            }
        });
        if (syncPoint) {
            events = events.concat(syncPoint.applyOperation(operation, writesCache, serverCache));
        }
        return events;
    };
    /**
     * Static tracker for next query tag.
     * @type {number}
     * @private
     */
    SyncTree.nextQueryTag_ = 1;
    return SyncTree;
}(); /**
      * Copyright 2017 Google Inc.
      *
      * Licensed under the Apache License, Version 2.0 (the "License");
      * you may not use this file except in compliance with the License.
      * You may obtain a copy of the License at
      *
      *   http://www.apache.org/licenses/LICENSE-2.0
      *
      * Unless required by applicable law or agreed to in writing, software
      * distributed under the License is distributed on an "AS IS" BASIS,
      * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
      * See the License for the specific language governing permissions and
      * limitations under the License.
      */
exports.SyncTree = SyncTree;
//# sourceMappingURL=SyncTree.js.map


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*! @license Firebase v4.5.0
Build: rev-f49c8b5
Terms: https://firebase.google.com/terms/ */



Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.WriteTreeRef = exports.WriteTree = undefined;

var _obj = __webpack_require__(4);

var _assert = __webpack_require__(2);

var _Path = __webpack_require__(5);

var _CompoundWrite = __webpack_require__(92);

var _PriorityIndex = __webpack_require__(7);

var _ChildrenNode = __webpack_require__(8);

/**
 * WriteTree tracks all pending user-initiated writes and has methods to calculate the result of merging them
 * with underlying server data (to create "event cache" data).  Pending writes are added with addOverwrite()
 * and addMerge(), and removed with removeWrite().
 *
 * @constructor
 */
/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var WriteTree = /** @class */function () {
    function WriteTree() {
        /**
         * A tree tracking the result of applying all visible writes.  This does not include transactions with
         * applyLocally=false or writes that are completely shadowed by other writes.
         *
         * @type {!CompoundWrite}
         * @private
         */
        this.visibleWrites_ = _CompoundWrite.CompoundWrite.Empty;
        /**
         * A list of all pending writes, regardless of visibility and shadowed-ness.  Used to calculate arbitrary
         * sets of the changed data, such as hidden writes (from transactions) or changes with certain writes excluded (also
         * used by transactions).
         *
         * @type {!Array.<!WriteRecord>}
         * @private
         */
        this.allWrites_ = [];
        this.lastWriteId_ = -1;
    }
    /**
     * Create a new WriteTreeRef for the given path. For use with a new sync point at the given path.
     *
     * @param {!Path} path
     * @return {!WriteTreeRef}
     */
    WriteTree.prototype.childWrites = function (path) {
        return new WriteTreeRef(path, this);
    };
    /**
     * Record a new overwrite from user code.
     *
     * @param {!Path} path
     * @param {!Node} snap
     * @param {!number} writeId
     * @param {boolean=} visible This is set to false by some transactions. It should be excluded from event caches
     */
    WriteTree.prototype.addOverwrite = function (path, snap, writeId, visible) {
        (0, _assert.assert)(writeId > this.lastWriteId_, 'Stacking an older write on top of newer ones');
        if (visible === undefined) {
            visible = true;
        }
        this.allWrites_.push({
            path: path,
            snap: snap,
            writeId: writeId,
            visible: visible
        });
        if (visible) {
            this.visibleWrites_ = this.visibleWrites_.addWrite(path, snap);
        }
        this.lastWriteId_ = writeId;
    };
    /**
     * Record a new merge from user code.
     *
     * @param {!Path} path
     * @param {!Object.<string, !Node>} changedChildren
     * @param {!number} writeId
     */
    WriteTree.prototype.addMerge = function (path, changedChildren, writeId) {
        (0, _assert.assert)(writeId > this.lastWriteId_, 'Stacking an older merge on top of newer ones');
        this.allWrites_.push({
            path: path,
            children: changedChildren,
            writeId: writeId,
            visible: true
        });
        this.visibleWrites_ = this.visibleWrites_.addWrites(path, changedChildren);
        this.lastWriteId_ = writeId;
    };
    /**
     * @param {!number} writeId
     * @return {?WriteRecord}
     */
    WriteTree.prototype.getWrite = function (writeId) {
        for (var i = 0; i < this.allWrites_.length; i++) {
            var record = this.allWrites_[i];
            if (record.writeId === writeId) {
                return record;
            }
        }
        return null;
    };
    /**
     * Remove a write (either an overwrite or merge) that has been successfully acknowledge by the server. Recalculates
     * the tree if necessary.  We return true if it may have been visible, meaning views need to reevaluate.
     *
     * @param {!number} writeId
     * @return {boolean} true if the write may have been visible (meaning we'll need to reevaluate / raise
     * events as a result).
     */
    WriteTree.prototype.removeWrite = function (writeId) {
        // Note: disabling this check. It could be a transaction that preempted another transaction, and thus was applied
        // out of order.
        //const validClear = revert || this.allWrites_.length === 0 || writeId <= this.allWrites_[0].writeId;
        //assert(validClear, "Either we don't have this write, or it's the first one in the queue");
        var _this = this;
        var idx = this.allWrites_.findIndex(function (s) {
            return s.writeId === writeId;
        });
        (0, _assert.assert)(idx >= 0, 'removeWrite called with nonexistent writeId.');
        var writeToRemove = this.allWrites_[idx];
        this.allWrites_.splice(idx, 1);
        var removedWriteWasVisible = writeToRemove.visible;
        var removedWriteOverlapsWithOtherWrites = false;
        var i = this.allWrites_.length - 1;
        while (removedWriteWasVisible && i >= 0) {
            var currentWrite = this.allWrites_[i];
            if (currentWrite.visible) {
                if (i >= idx && this.recordContainsPath_(currentWrite, writeToRemove.path)) {
                    // The removed write was completely shadowed by a subsequent write.
                    removedWriteWasVisible = false;
                } else if (writeToRemove.path.contains(currentWrite.path)) {
                    // Either we're covering some writes or they're covering part of us (depending on which came first).
                    removedWriteOverlapsWithOtherWrites = true;
                }
            }
            i--;
        }
        if (!removedWriteWasVisible) {
            return false;
        } else if (removedWriteOverlapsWithOtherWrites) {
            // There's some shadowing going on. Just rebuild the visible writes from scratch.
            this.resetTree_();
            return true;
        } else {
            // There's no shadowing.  We can safely just remove the write(s) from visibleWrites.
            if (writeToRemove.snap) {
                this.visibleWrites_ = this.visibleWrites_.removeWrite(writeToRemove.path);
            } else {
                var children = writeToRemove.children;
                (0, _obj.forEach)(children, function (childName) {
                    _this.visibleWrites_ = _this.visibleWrites_.removeWrite(writeToRemove.path.child(childName));
                });
            }
            return true;
        }
    };
    /**
     * Return a complete snapshot for the given path if there's visible write data at that path, else null.
     * No server data is considered.
     *
     * @param {!Path} path
     * @return {?Node}
     */
    WriteTree.prototype.getCompleteWriteData = function (path) {
        return this.visibleWrites_.getCompleteNode(path);
    };
    /**
     * Given optional, underlying server data, and an optional set of constraints (exclude some sets, include hidden
     * writes), attempt to calculate a complete snapshot for the given path
     *
     * @param {!Path} treePath
     * @param {?Node} completeServerCache
     * @param {Array.<number>=} writeIdsToExclude An optional set to be excluded
     * @param {boolean=} includeHiddenWrites Defaults to false, whether or not to layer on writes with visible set to false
     * @return {?Node}
     */
    WriteTree.prototype.calcCompleteEventCache = function (treePath, completeServerCache, writeIdsToExclude, includeHiddenWrites) {
        if (!writeIdsToExclude && !includeHiddenWrites) {
            var shadowingNode = this.visibleWrites_.getCompleteNode(treePath);
            if (shadowingNode != null) {
                return shadowingNode;
            } else {
                var subMerge = this.visibleWrites_.childCompoundWrite(treePath);
                if (subMerge.isEmpty()) {
                    return completeServerCache;
                } else if (completeServerCache == null && !subMerge.hasCompleteWrite(_Path.Path.Empty)) {
                    // We wouldn't have a complete snapshot, since there's no underlying data and no complete shadow
                    return null;
                } else {
                    var layeredCache = completeServerCache || _ChildrenNode.ChildrenNode.EMPTY_NODE;
                    return subMerge.apply(layeredCache);
                }
            }
        } else {
            var merge = this.visibleWrites_.childCompoundWrite(treePath);
            if (!includeHiddenWrites && merge.isEmpty()) {
                return completeServerCache;
            } else {
                // If the server cache is null, and we don't have a complete cache, we need to return null
                if (!includeHiddenWrites && completeServerCache == null && !merge.hasCompleteWrite(_Path.Path.Empty)) {
                    return null;
                } else {
                    var filter = function filter(write) {
                        return (write.visible || includeHiddenWrites) && (!writeIdsToExclude || !~writeIdsToExclude.indexOf(write.writeId)) && (write.path.contains(treePath) || treePath.contains(write.path));
                    };
                    var mergeAtPath = WriteTree.layerTree_(this.allWrites_, filter, treePath);
                    var layeredCache = completeServerCache || _ChildrenNode.ChildrenNode.EMPTY_NODE;
                    return mergeAtPath.apply(layeredCache);
                }
            }
        }
    };
    /**
     * With optional, underlying server data, attempt to return a children node of children that we have complete data for.
     * Used when creating new views, to pre-fill their complete event children snapshot.
     *
     * @param {!Path} treePath
     * @param {?ChildrenNode} completeServerChildren
     * @return {!ChildrenNode}
     */
    WriteTree.prototype.calcCompleteEventChildren = function (treePath, completeServerChildren) {
        var completeChildren = _ChildrenNode.ChildrenNode.EMPTY_NODE;
        var topLevelSet = this.visibleWrites_.getCompleteNode(treePath);
        if (topLevelSet) {
            if (!topLevelSet.isLeafNode()) {
                // we're shadowing everything. Return the children.
                topLevelSet.forEachChild(_PriorityIndex.PRIORITY_INDEX, function (childName, childSnap) {
                    completeChildren = completeChildren.updateImmediateChild(childName, childSnap);
                });
            }
            return completeChildren;
        } else if (completeServerChildren) {
            // Layer any children we have on top of this
            // We know we don't have a top-level set, so just enumerate existing children
            var merge_1 = this.visibleWrites_.childCompoundWrite(treePath);
            completeServerChildren.forEachChild(_PriorityIndex.PRIORITY_INDEX, function (childName, childNode) {
                var node = merge_1.childCompoundWrite(new _Path.Path(childName)).apply(childNode);
                completeChildren = completeChildren.updateImmediateChild(childName, node);
            });
            // Add any complete children we have from the set
            merge_1.getCompleteChildren().forEach(function (namedNode) {
                completeChildren = completeChildren.updateImmediateChild(namedNode.name, namedNode.node);
            });
            return completeChildren;
        } else {
            // We don't have anything to layer on top of. Layer on any children we have
            // Note that we can return an empty snap if we have a defined delete
            var merge = this.visibleWrites_.childCompoundWrite(treePath);
            merge.getCompleteChildren().forEach(function (namedNode) {
                completeChildren = completeChildren.updateImmediateChild(namedNode.name, namedNode.node);
            });
            return completeChildren;
        }
    };
    /**
     * Given that the underlying server data has updated, determine what, if anything, needs to be
     * applied to the event cache.
     *
     * Possibilities:
     *
     * 1. No writes are shadowing. Events should be raised, the snap to be applied comes from the server data
     *
     * 2. Some write is completely shadowing. No events to be raised
     *
     * 3. Is partially shadowed. Events
     *
     * Either existingEventSnap or existingServerSnap must exist
     *
     * @param {!Path} treePath
     * @param {!Path} childPath
     * @param {?Node} existingEventSnap
     * @param {?Node} existingServerSnap
     * @return {?Node}
     */
    WriteTree.prototype.calcEventCacheAfterServerOverwrite = function (treePath, childPath, existingEventSnap, existingServerSnap) {
        (0, _assert.assert)(existingEventSnap || existingServerSnap, 'Either existingEventSnap or existingServerSnap must exist');
        var path = treePath.child(childPath);
        if (this.visibleWrites_.hasCompleteWrite(path)) {
            // At this point we can probably guarantee that we're in case 2, meaning no events
            // May need to check visibility while doing the findRootMostValueAndPath call
            return null;
        } else {
            // No complete shadowing. We're either partially shadowing or not shadowing at all.
            var childMerge = this.visibleWrites_.childCompoundWrite(path);
            if (childMerge.isEmpty()) {
                // We're not shadowing at all. Case 1
                return existingServerSnap.getChild(childPath);
            } else {
                // This could be more efficient if the serverNode + updates doesn't change the eventSnap
                // However this is tricky to find out, since user updates don't necessary change the server
                // snap, e.g. priority updates on empty nodes, or deep deletes. Another special case is if the server
                // adds nodes, but doesn't change any existing writes. It is therefore not enough to
                // only check if the updates change the serverNode.
                // Maybe check if the merge tree contains these special cases and only do a full overwrite in that case?
                return childMerge.apply(existingServerSnap.getChild(childPath));
            }
        }
    };
    /**
     * Returns a complete child for a given server snap after applying all user writes or null if there is no
     * complete child for this ChildKey.
     *
     * @param {!Path} treePath
     * @param {!string} childKey
     * @param {!CacheNode} existingServerSnap
     * @return {?Node}
     */
    WriteTree.prototype.calcCompleteChild = function (treePath, childKey, existingServerSnap) {
        var path = treePath.child(childKey);
        var shadowingNode = this.visibleWrites_.getCompleteNode(path);
        if (shadowingNode != null) {
            return shadowingNode;
        } else {
            if (existingServerSnap.isCompleteForChild(childKey)) {
                var childMerge = this.visibleWrites_.childCompoundWrite(path);
                return childMerge.apply(existingServerSnap.getNode().getImmediateChild(childKey));
            } else {
                return null;
            }
        }
    };
    /**
     * Returns a node if there is a complete overwrite for this path. More specifically, if there is a write at
     * a higher path, this will return the child of that write relative to the write and this path.
     * Returns null if there is no write at this path.
     *
     * @param {!Path} path
     * @return {?Node}
     */
    WriteTree.prototype.shadowingWrite = function (path) {
        return this.visibleWrites_.getCompleteNode(path);
    };
    /**
     * This method is used when processing child remove events on a query. If we can, we pull in children that were outside
     * the window, but may now be in the window.
     *
     * @param {!Path} treePath
     * @param {?Node} completeServerData
     * @param {!NamedNode} startPost
     * @param {!number} count
     * @param {boolean} reverse
     * @param {!Index} index
     * @return {!Array.<!NamedNode>}
     */
    WriteTree.prototype.calcIndexedSlice = function (treePath, completeServerData, startPost, count, reverse, index) {
        var toIterate;
        var merge = this.visibleWrites_.childCompoundWrite(treePath);
        var shadowingNode = merge.getCompleteNode(_Path.Path.Empty);
        if (shadowingNode != null) {
            toIterate = shadowingNode;
        } else if (completeServerData != null) {
            toIterate = merge.apply(completeServerData);
        } else {
            // no children to iterate on
            return [];
        }
        toIterate = toIterate.withIndex(index);
        if (!toIterate.isEmpty() && !toIterate.isLeafNode()) {
            var nodes = [];
            var cmp = index.getCompare();
            var iter = reverse ? toIterate.getReverseIteratorFrom(startPost, index) : toIterate.getIteratorFrom(startPost, index);
            var next = iter.getNext();
            while (next && nodes.length < count) {
                if (cmp(next, startPost) !== 0) {
                    nodes.push(next);
                }
                next = iter.getNext();
            }
            return nodes;
        } else {
            return [];
        }
    };
    /**
     * @param {!WriteRecord} writeRecord
     * @param {!Path} path
     * @return {boolean}
     * @private
     */
    WriteTree.prototype.recordContainsPath_ = function (writeRecord, path) {
        if (writeRecord.snap) {
            return writeRecord.path.contains(path);
        } else {
            // findKey can return undefined, so use !! to coerce to boolean
            return !!(0, _obj.findKey)(writeRecord.children, function (childSnap, childName) {
                return writeRecord.path.child(childName).contains(path);
            });
        }
    };
    /**
     * Re-layer the writes and merges into a tree so we can efficiently calculate event snapshots
     * @private
     */
    WriteTree.prototype.resetTree_ = function () {
        this.visibleWrites_ = WriteTree.layerTree_(this.allWrites_, WriteTree.DefaultFilter_, _Path.Path.Empty);
        if (this.allWrites_.length > 0) {
            this.lastWriteId_ = this.allWrites_[this.allWrites_.length - 1].writeId;
        } else {
            this.lastWriteId_ = -1;
        }
    };
    /**
     * The default filter used when constructing the tree. Keep everything that's visible.
     *
     * @param {!WriteRecord} write
     * @return {boolean}
     * @private
     */
    WriteTree.DefaultFilter_ = function (write) {
        return write.visible;
    };
    /**
     * Static method. Given an array of WriteRecords, a filter for which ones to include, and a path, construct the tree of
     * event data at that path.
     *
     * @param {!Array.<!WriteRecord>} writes
     * @param {!function(!WriteRecord):boolean} filter
     * @param {!Path} treeRoot
     * @return {!CompoundWrite}
     * @private
     */
    WriteTree.layerTree_ = function (writes, filter, treeRoot) {
        var compoundWrite = _CompoundWrite.CompoundWrite.Empty;
        for (var i = 0; i < writes.length; ++i) {
            var write = writes[i];
            // Theory, a later set will either:
            // a) abort a relevant transaction, so no need to worry about excluding it from calculating that transaction
            // b) not be relevant to a transaction (separate branch), so again will not affect the data for that transaction
            if (filter(write)) {
                var writePath = write.path;
                var relativePath = void 0;
                if (write.snap) {
                    if (treeRoot.contains(writePath)) {
                        relativePath = _Path.Path.relativePath(treeRoot, writePath);
                        compoundWrite = compoundWrite.addWrite(relativePath, write.snap);
                    } else if (writePath.contains(treeRoot)) {
                        relativePath = _Path.Path.relativePath(writePath, treeRoot);
                        compoundWrite = compoundWrite.addWrite(_Path.Path.Empty, write.snap.getChild(relativePath));
                    } else {
                        // There is no overlap between root path and write path, ignore write
                    }
                } else if (write.children) {
                    if (treeRoot.contains(writePath)) {
                        relativePath = _Path.Path.relativePath(treeRoot, writePath);
                        compoundWrite = compoundWrite.addWrites(relativePath, write.children);
                    } else if (writePath.contains(treeRoot)) {
                        relativePath = _Path.Path.relativePath(writePath, treeRoot);
                        if (relativePath.isEmpty()) {
                            compoundWrite = compoundWrite.addWrites(_Path.Path.Empty, write.children);
                        } else {
                            var child = (0, _obj.safeGet)(write.children, relativePath.getFront());
                            if (child) {
                                // There exists a child in this node that matches the root path
                                var deepNode = child.getChild(relativePath.popFront());
                                compoundWrite = compoundWrite.addWrite(_Path.Path.Empty, deepNode);
                            }
                        }
                    } else {
                        // There is no overlap between root path and write path, ignore write
                    }
                } else {
                    throw (0, _assert.assertionError)('WriteRecord should have .snap or .children');
                }
            }
        }
        return compoundWrite;
    };
    return WriteTree;
}();
exports.WriteTree = WriteTree;
/**
 * A WriteTreeRef wraps a WriteTree and a path, for convenient access to a particular subtree.  All of the methods
 * just proxy to the underlying WriteTree.
 *
 * @constructor
 */

var WriteTreeRef = /** @class */function () {
    /**
     * @param {!Path} path
     * @param {!WriteTree} writeTree
     */
    function WriteTreeRef(path, writeTree) {
        this.treePath_ = path;
        this.writeTree_ = writeTree;
    }
    /**
     * If possible, returns a complete event cache, using the underlying server data if possible. In addition, can be used
     * to get a cache that includes hidden writes, and excludes arbitrary writes. Note that customizing the returned node
     * can lead to a more expensive calculation.
     *
     * @param {?Node} completeServerCache
     * @param {Array.<number>=} writeIdsToExclude Optional writes to exclude.
     * @param {boolean=} includeHiddenWrites Defaults to false, whether or not to layer on writes with visible set to false
     * @return {?Node}
     */
    WriteTreeRef.prototype.calcCompleteEventCache = function (completeServerCache, writeIdsToExclude, includeHiddenWrites) {
        return this.writeTree_.calcCompleteEventCache(this.treePath_, completeServerCache, writeIdsToExclude, includeHiddenWrites);
    };
    /**
     * If possible, returns a children node containing all of the complete children we have data for. The returned data is a
     * mix of the given server data and write data.
     *
     * @param {?ChildrenNode} completeServerChildren
     * @return {!ChildrenNode}
     */
    WriteTreeRef.prototype.calcCompleteEventChildren = function (completeServerChildren) {
        return this.writeTree_.calcCompleteEventChildren(this.treePath_, completeServerChildren);
    };
    /**
     * Given that either the underlying server data has updated or the outstanding writes have updated, determine what,
     * if anything, needs to be applied to the event cache.
     *
     * Possibilities:
     *
     * 1. No writes are shadowing. Events should be raised, the snap to be applied comes from the server data
     *
     * 2. Some write is completely shadowing. No events to be raised
     *
     * 3. Is partially shadowed. Events should be raised
     *
     * Either existingEventSnap or existingServerSnap must exist, this is validated via an assert
     *
     * @param {!Path} path
     * @param {?Node} existingEventSnap
     * @param {?Node} existingServerSnap
     * @return {?Node}
     */
    WriteTreeRef.prototype.calcEventCacheAfterServerOverwrite = function (path, existingEventSnap, existingServerSnap) {
        return this.writeTree_.calcEventCacheAfterServerOverwrite(this.treePath_, path, existingEventSnap, existingServerSnap);
    };
    /**
     * Returns a node if there is a complete overwrite for this path. More specifically, if there is a write at
     * a higher path, this will return the child of that write relative to the write and this path.
     * Returns null if there is no write at this path.
     *
     * @param {!Path} path
     * @return {?Node}
     */
    WriteTreeRef.prototype.shadowingWrite = function (path) {
        return this.writeTree_.shadowingWrite(this.treePath_.child(path));
    };
    /**
     * This method is used when processing child remove events on a query. If we can, we pull in children that were outside
     * the window, but may now be in the window
     *
     * @param {?Node} completeServerData
     * @param {!NamedNode} startPost
     * @param {!number} count
     * @param {boolean} reverse
     * @param {!Index} index
     * @return {!Array.<!NamedNode>}
     */
    WriteTreeRef.prototype.calcIndexedSlice = function (completeServerData, startPost, count, reverse, index) {
        return this.writeTree_.calcIndexedSlice(this.treePath_, completeServerData, startPost, count, reverse, index);
    };
    /**
     * Returns a complete child for a given server snap after applying all user writes or null if there is no
     * complete child for this ChildKey.
     *
     * @param {!string} childKey
     * @param {!CacheNode} existingServerCache
     * @return {?Node}
     */
    WriteTreeRef.prototype.calcCompleteChild = function (childKey, existingServerCache) {
        return this.writeTree_.calcCompleteChild(this.treePath_, childKey, existingServerCache);
    };
    /**
     * Return a WriteTreeRef for a child.
     *
     * @param {string} childName
     * @return {!WriteTreeRef}
     */
    WriteTreeRef.prototype.child = function (childName) {
        return new WriteTreeRef(this.treePath_.child(childName), this.writeTree_);
    };
    return WriteTreeRef;
}();
exports.WriteTreeRef = WriteTreeRef;
//# sourceMappingURL=WriteTree.js.map


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*! @license Firebase v4.5.0
Build: rev-f49c8b5
Terms: https://firebase.google.com/terms/ */



Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AckUserWrite = undefined;

var _assert = __webpack_require__(2);

var _Path = __webpack_require__(5);

var _Operation = __webpack_require__(15);

var AckUserWrite = /** @class */function () {
    /**
     *
     * @param {!Path} path
     * @param {!ImmutableTree<!boolean>} affectedTree A tree containing true for each affected path. Affected paths can't overlap.
     * @param {!boolean} revert
     */
    function AckUserWrite(
    /**@inheritDoc */path,
    /**@inheritDoc */affectedTree,
    /**@inheritDoc */revert) {
        this.path = path;
        this.affectedTree = affectedTree;
        this.revert = revert;
        /** @inheritDoc */
        this.type = _Operation.OperationType.ACK_USER_WRITE;
        /** @inheritDoc */
        this.source = _Operation.OperationSource.User;
    }
    /**
     * @inheritDoc
     */
    AckUserWrite.prototype.operationForChild = function (childName) {
        if (!this.path.isEmpty()) {
            (0, _assert.assert)(this.path.getFront() === childName, 'operationForChild called for unrelated child.');
            return new AckUserWrite(this.path.popFront(), this.affectedTree, this.revert);
        } else if (this.affectedTree.value != null) {
            (0, _assert.assert)(this.affectedTree.children.isEmpty(), 'affectedTree should not have overlapping affected paths.');
            // All child locations are affected as well; just return same operation.
            return this;
        } else {
            var childTree = this.affectedTree.subtree(new _Path.Path(childName));
            return new AckUserWrite(_Path.Path.Empty, childTree, this.revert);
        }
    };
    return AckUserWrite;
}(); /**
      * Copyright 2017 Google Inc.
      *
      * Licensed under the Apache License, Version 2.0 (the "License");
      * you may not use this file except in compliance with the License.
      * You may obtain a copy of the License at
      *
      *   http://www.apache.org/licenses/LICENSE-2.0
      *
      * Unless required by applicable law or agreed to in writing, software
      * distributed under the License is distributed on an "AS IS" BASIS,
      * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
      * See the License for the specific language governing permissions and
      * limitations under the License.
      */
exports.AckUserWrite = AckUserWrite;
//# sourceMappingURL=AckUserWrite.js.map


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*! @license Firebase v4.5.0
Build: rev-f49c8b5
Terms: https://firebase.google.com/terms/ */



Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ListenComplete = undefined;

var _Path = __webpack_require__(5);

var _Operation = __webpack_require__(15);

/**
 * @param {!OperationSource} source
 * @param {!Path} path
 * @constructor
 * @implements {Operation}
 */
/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var ListenComplete = /** @class */function () {
    function ListenComplete(source, path) {
        this.source = source;
        this.path = path;
        /** @inheritDoc */
        this.type = _Operation.OperationType.LISTEN_COMPLETE;
    }
    ListenComplete.prototype.operationForChild = function (childName) {
        if (this.path.isEmpty()) {
            return new ListenComplete(this.source, _Path.Path.Empty);
        } else {
            return new ListenComplete(this.source, this.path.popFront());
        }
    };
    return ListenComplete;
}();
exports.ListenComplete = ListenComplete;
//# sourceMappingURL=ListenComplete.js.map


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*! @license Firebase v4.5.0
Build: rev-f49c8b5
Terms: https://firebase.google.com/terms/ */



Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Merge = undefined;

var _Operation = __webpack_require__(15);

var _Overwrite = __webpack_require__(61);

var _Path = __webpack_require__(5);

var _assert = __webpack_require__(2);

/**
 * @param {!OperationSource} source
 * @param {!Path} path
 * @param {!ImmutableTree.<!Node>} children
 * @constructor
 * @implements {Operation}
 */
/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Merge = /** @class */function () {
    function Merge(
    /**@inheritDoc */source,
    /**@inheritDoc */path,
    /**@inheritDoc */children) {
        this.source = source;
        this.path = path;
        this.children = children;
        /** @inheritDoc */
        this.type = _Operation.OperationType.MERGE;
    }
    /**
     * @inheritDoc
     */
    Merge.prototype.operationForChild = function (childName) {
        if (this.path.isEmpty()) {
            var childTree = this.children.subtree(new _Path.Path(childName));
            if (childTree.isEmpty()) {
                // This child is unaffected
                return null;
            } else if (childTree.value) {
                // We have a snapshot for the child in question.  This becomes an overwrite of the child.
                return new _Overwrite.Overwrite(this.source, _Path.Path.Empty, childTree.value);
            } else {
                // This is a merge at a deeper level
                return new Merge(this.source, _Path.Path.Empty, childTree);
            }
        } else {
            (0, _assert.assert)(this.path.getFront() === childName, "Can't get a merge for a child not on the path of the operation");
            return new Merge(this.source, this.path.popFront(), this.children);
        }
    };
    /**
     * @inheritDoc
     */
    Merge.prototype.toString = function () {
        return 'Operation(' + this.path + ': ' + this.source.toString() + ' merge: ' + this.children.toString() + ')';
    };
    return Merge;
}();
exports.Merge = Merge;
//# sourceMappingURL=Merge.js.map


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*! @license Firebase v4.5.0
Build: rev-f49c8b5
Terms: https://firebase.google.com/terms/ */



Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.StatsCollection = undefined;

var _deep_copy = __webpack_require__(78);

var _obj = __webpack_require__(4);

/**
 * Tracks a collection of stats.
 *
 * @constructor
 */
/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var StatsCollection = /** @class */function () {
    function StatsCollection() {
        this.counters_ = {};
    }
    StatsCollection.prototype.incrementCounter = function (name, amount) {
        if (amount === void 0) {
            amount = 1;
        }
        if (!(0, _obj.contains)(this.counters_, name)) this.counters_[name] = 0;
        this.counters_[name] += amount;
    };
    StatsCollection.prototype.get = function () {
        return (0, _deep_copy.deepCopy)(this.counters_);
    };
    return StatsCollection;
}();
exports.StatsCollection = StatsCollection;
//# sourceMappingURL=StatsCollection.js.map


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*! @license Firebase v4.5.0
Build: rev-f49c8b5
Terms: https://firebase.google.com/terms/ */



Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.StatsReporter = undefined;

var _obj = __webpack_require__(4);

var _util = __webpack_require__(3);

var _StatsListener = __webpack_require__(68);

// Assuming some apps may have a short amount of time on page, and a bulk of firebase operations probably
// happen on page load, we try to report our first set of stats pretty quickly, but we wait at least 10
// seconds to try to ensure the Firebase connection is established / settled.
var FIRST_STATS_MIN_TIME = 10 * 1000; /**
                                       * Copyright 2017 Google Inc.
                                       *
                                       * Licensed under the Apache License, Version 2.0 (the "License");
                                       * you may not use this file except in compliance with the License.
                                       * You may obtain a copy of the License at
                                       *
                                       *   http://www.apache.org/licenses/LICENSE-2.0
                                       *
                                       * Unless required by applicable law or agreed to in writing, software
                                       * distributed under the License is distributed on an "AS IS" BASIS,
                                       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                       * See the License for the specific language governing permissions and
                                       * limitations under the License.
                                       */

var FIRST_STATS_MAX_TIME = 30 * 1000;
// We'll continue to report stats on average every 5 minutes.
var REPORT_STATS_INTERVAL = 5 * 60 * 1000;
/**
 * @constructor
 */
var StatsReporter = /** @class */function () {
    /**
     * @param collection
     * @param server_
     */
    function StatsReporter(collection, server_) {
        this.server_ = server_;
        this.statsToReport_ = {};
        this.statsListener_ = new _StatsListener.StatsListener(collection);
        var timeout = FIRST_STATS_MIN_TIME + (FIRST_STATS_MAX_TIME - FIRST_STATS_MIN_TIME) * Math.random();
        (0, _util.setTimeoutNonBlocking)(this.reportStats_.bind(this), Math.floor(timeout));
    }
    StatsReporter.prototype.includeStat = function (stat) {
        this.statsToReport_[stat] = true;
    };
    StatsReporter.prototype.reportStats_ = function () {
        var _this = this;
        var stats = this.statsListener_.get();
        var reportedStats = {};
        var haveStatsToReport = false;
        (0, _obj.forEach)(stats, function (stat, value) {
            if (value > 0 && (0, _obj.contains)(_this.statsToReport_, stat)) {
                reportedStats[stat] = value;
                haveStatsToReport = true;
            }
        });
        if (haveStatsToReport) {
            this.server_.reportStats(reportedStats);
        }
        // queue our next run.
        (0, _util.setTimeoutNonBlocking)(this.reportStats_.bind(this), Math.floor(Math.random() * 2 * REPORT_STATS_INTERVAL));
    };
    return StatsReporter;
}();
exports.StatsReporter = StatsReporter;
//# sourceMappingURL=StatsReporter.js.map


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*! @license Firebase v4.5.0
Build: rev-f49c8b5
Terms: https://firebase.google.com/terms/ */



Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.DOMStorageWrapper = undefined;

var _json = __webpack_require__(14);

/**
 * Wraps a DOM Storage object and:
 * - automatically encode objects as JSON strings before storing them to allow us to store arbitrary types.
 * - prefixes names with "firebase:" to avoid collisions with app data.
 *
 * We automatically (see storage.js) create two such wrappers, one for sessionStorage,
 * and one for localStorage.
 *
 * @constructor
 */
var DOMStorageWrapper = /** @class */function () {
    /**
     * @param {Storage} domStorage_ The underlying storage object (e.g. localStorage or sessionStorage)
     */
    function DOMStorageWrapper(domStorage_) {
        this.domStorage_ = domStorage_;
        // Use a prefix to avoid collisions with other stuff saved by the app.
        this.prefix_ = 'firebase:';
    }
    /**
     * @param {string} key The key to save the value under
     * @param {?Object} value The value being stored, or null to remove the key.
     */
    DOMStorageWrapper.prototype.set = function (key, value) {
        if (value == null) {
            this.domStorage_.removeItem(this.prefixedName_(key));
        } else {
            this.domStorage_.setItem(this.prefixedName_(key), (0, _json.stringify)(value));
        }
    };
    /**
     * @param {string} key
     * @return {*} The value that was stored under this key, or null
     */
    DOMStorageWrapper.prototype.get = function (key) {
        var storedVal = this.domStorage_.getItem(this.prefixedName_(key));
        if (storedVal == null) {
            return null;
        } else {
            return (0, _json.jsonEval)(storedVal);
        }
    };
    /**
     * @param {string} key
     */
    DOMStorageWrapper.prototype.remove = function (key) {
        this.domStorage_.removeItem(this.prefixedName_(key));
    };
    /**
     * @param {string} name
     * @return {string}
     */
    DOMStorageWrapper.prototype.prefixedName_ = function (name) {
        return this.prefix_ + name;
    };
    DOMStorageWrapper.prototype.toString = function () {
        return this.domStorage_.toString();
    };
    return DOMStorageWrapper;
}(); /**
      * Copyright 2017 Google Inc.
      *
      * Licensed under the Apache License, Version 2.0 (the "License");
      * you may not use this file except in compliance with the License.
      * You may obtain a copy of the License at
      *
      *   http://www.apache.org/licenses/LICENSE-2.0
      *
      * Unless required by applicable law or agreed to in writing, software
      * distributed under the License is distributed on an "AS IS" BASIS,
      * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
      * See the License for the specific language governing permissions and
      * limitations under the License.
      */
exports.DOMStorageWrapper = DOMStorageWrapper;
//# sourceMappingURL=DOMStorageWrapper.js.map


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*! @license Firebase v4.5.0
Build: rev-f49c8b5
Terms: https://firebase.google.com/terms/ */



Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MemoryStorage = undefined;

var _obj = __webpack_require__(4);

/**
 * An in-memory storage implementation that matches the API of DOMStorageWrapper
 * (TODO: create interface for both to implement).
 *
 * @constructor
 */
var MemoryStorage = /** @class */function () {
    function MemoryStorage() {
        this.cache_ = {};
        this.isInMemoryStorage = true;
    }
    MemoryStorage.prototype.set = function (key, value) {
        if (value == null) {
            delete this.cache_[key];
        } else {
            this.cache_[key] = value;
        }
    };
    MemoryStorage.prototype.get = function (key) {
        if ((0, _obj.contains)(this.cache_, key)) {
            return this.cache_[key];
        }
        return null;
    };
    MemoryStorage.prototype.remove = function (key) {
        delete this.cache_[key];
    };
    return MemoryStorage;
}(); /**
      * Copyright 2017 Google Inc.
      *
      * Licensed under the Apache License, Version 2.0 (the "License");
      * you may not use this file except in compliance with the License.
      * You may obtain a copy of the License at
      *
      *   http://www.apache.org/licenses/LICENSE-2.0
      *
      * Unless required by applicable law or agreed to in writing, software
      * distributed under the License is distributed on an "AS IS" BASIS,
      * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
      * See the License for the specific language governing permissions and
      * limitations under the License.
      */
exports.MemoryStorage = MemoryStorage;
//# sourceMappingURL=MemoryStorage.js.map


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*! @license Firebase v4.5.0
Build: rev-f49c8b5
Terms: https://firebase.google.com/terms/ */



Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.nextPushId = undefined;

var _assert = __webpack_require__(2);

/**
 * Fancy ID generator that creates 20-character string identifiers with the
 * following properties:
 *
 * 1. They're based on timestamp so that they sort *after* any existing ids.
 * 2. They contain 72-bits of random data after the timestamp so that IDs won't
 *    collide with other clients' IDs.
 * 3. They sort *lexicographically* (so the timestamp is converted to characters
 *    that will sort properly).
 * 4. They're monotonically increasing. Even if you generate more than one in
 *    the same timestamp, the latter ones will sort after the former ones. We do
 *    this by using the previous random bits but "incrementing" them by 1 (only
 *    in the case of a timestamp collision).
 */
var nextPushId = exports.nextPushId = function () {
    // Modeled after base64 web-safe chars, but ordered by ASCII.
    var PUSH_CHARS = '-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz';
    // Timestamp of last push, used to prevent local collisions if you push twice
    // in one ms.
    var lastPushTime = 0;
    // We generate 72-bits of randomness which get turned into 12 characters and
    // appended to the timestamp to prevent collisions with other clients. We
    // store the last characters we generated because in the event of a collision,
    // we'll use those same characters except "incremented" by one.
    var lastRandChars = [];
    return function (now) {
        var duplicateTime = now === lastPushTime;
        lastPushTime = now;
        var i;
        var timeStampChars = new Array(8);
        for (i = 7; i >= 0; i--) {
            timeStampChars[i] = PUSH_CHARS.charAt(now % 64);
            // NOTE: Can't use << here because javascript will convert to int and lose
            // the upper bits.
            now = Math.floor(now / 64);
        }
        (0, _assert.assert)(now === 0, 'Cannot push at time == 0');
        var id = timeStampChars.join('');
        if (!duplicateTime) {
            for (i = 0; i < 12; i++) {
                lastRandChars[i] = Math.floor(Math.random() * 64);
            }
        } else {
            // If the timestamp hasn't changed since last push, use the same random
            // number, except incremented by 1.
            for (i = 11; i >= 0 && lastRandChars[i] === 63; i--) {
                lastRandChars[i] = 0;
            }
            lastRandChars[i]++;
        }
        for (i = 0; i < 12; i++) {
            id += PUSH_CHARS.charAt(lastRandChars[i]);
        }
        (0, _assert.assert)(id.length === 20, 'nextPushId: Length should be 20.');
        return id;
    };
}(); /**
      * Copyright 2017 Google Inc.
      *
      * Licensed under the Apache License, Version 2.0 (the "License");
      * you may not use this file except in compliance with the License.
      * You may obtain a copy of the License at
      *
      *   http://www.apache.org/licenses/LICENSE-2.0
      *
      * Unless required by applicable law or agreed to in writing, software
      * distributed under the License is distributed on an "AS IS" BASIS,
      * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
      * See the License for the specific language governing permissions and
      * limitations under the License.
      */
//# sourceMappingURL=NextPushId.js.map


/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*! @license Firebase v4.5.0
Build: rev-f49c8b5
Terms: https://firebase.google.com/terms/ */



Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.OnlineMonitor = undefined;

var _assert = __webpack_require__(2);

var _EventEmitter = __webpack_require__(70);

var _environment = __webpack_require__(31);

/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var __extends = undefined && undefined.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();

/**
 * Monitors online state (as reported by window.online/offline events).
 *
 * The expectation is that this could have many false positives (thinks we are online
 * when we're not), but no false negatives.  So we can safely use it to determine when
 * we definitely cannot reach the internet.
 *
 * @extends {EventEmitter}
 */
var OnlineMonitor = /** @class */function (_super) {
    __extends(OnlineMonitor, _super);
    function OnlineMonitor() {
        var _this = _super.call(this, ['online']) || this;
        _this.online_ = true;
        // We've had repeated complaints that Cordova apps can get stuck "offline", e.g.
        // https://forum.ionicframework.com/t/firebase-connection-is-lost-and-never-come-back/43810
        // It would seem that the 'online' event does not always fire consistently. So we disable it
        // for Cordova.
        if (typeof window !== 'undefined' && typeof window.addEventListener !== 'undefined' && !(0, _environment.isMobileCordova)()) {
            window.addEventListener('online', function () {
                if (!_this.online_) {
                    _this.online_ = true;
                    _this.trigger('online', true);
                }
            }, false);
            window.addEventListener('offline', function () {
                if (_this.online_) {
                    _this.online_ = false;
                    _this.trigger('online', false);
                }
            }, false);
        }
        return _this;
    }
    OnlineMonitor.getInstance = function () {
        return new OnlineMonitor();
    };
    /**
     * @param {!string} eventType
     * @return {Array.<boolean>}
     */
    OnlineMonitor.prototype.getInitialEvent = function (eventType) {
        (0, _assert.assert)(eventType === 'online', 'Unknown event type: ' + eventType);
        return [this.online_];
    };
    /**
     * @return {boolean}
     */
    OnlineMonitor.prototype.currentlyOnline = function () {
        return this.online_;
    };
    return OnlineMonitor;
}(_EventEmitter.EventEmitter);
exports.OnlineMonitor = OnlineMonitor;
//# sourceMappingURL=OnlineMonitor.js.map


/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*! @license Firebase v4.5.0
Build: rev-f49c8b5
Terms: https://firebase.google.com/terms/ */



Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Tree = exports.TreeNode = undefined;

var _assert = __webpack_require__(2);

var _Path = __webpack_require__(5);

var _obj = __webpack_require__(4);

/**
 * Node in a Tree.
 */
var TreeNode = /** @class */function () {
    function TreeNode() {
        // TODO: Consider making accessors that create children and value lazily or
        // separate Internal / Leaf 'types'.
        this.children = {};
        this.childCount = 0;
        this.value = null;
    }
    return TreeNode;
}(); /**
      * Copyright 2017 Google Inc.
      *
      * Licensed under the Apache License, Version 2.0 (the "License");
      * you may not use this file except in compliance with the License.
      * You may obtain a copy of the License at
      *
      *   http://www.apache.org/licenses/LICENSE-2.0
      *
      * Unless required by applicable law or agreed to in writing, software
      * distributed under the License is distributed on an "AS IS" BASIS,
      * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
      * See the License for the specific language governing permissions and
      * limitations under the License.
      */
exports.TreeNode = TreeNode;
/**
 * A light-weight tree, traversable by path.  Nodes can have both values and children.
 * Nodes are not enumerated (by forEachChild) unless they have a value or non-empty
 * children.
 */

var Tree = /** @class */function () {
    /**
     * @template T
     * @param {string=} name_ Optional name of the node.
     * @param {Tree=} parent_ Optional parent node.
     * @param {TreeNode=} node_ Optional node to wrap.
     */
    function Tree(name_, parent_, node_) {
        if (name_ === void 0) {
            name_ = '';
        }
        if (parent_ === void 0) {
            parent_ = null;
        }
        if (node_ === void 0) {
            node_ = new TreeNode();
        }
        this.name_ = name_;
        this.parent_ = parent_;
        this.node_ = node_;
    }
    /**
     * Returns a sub-Tree for the given path.
     *
     * @param {!(string|Path)} pathObj Path to look up.
     * @return {!Tree.<T>} Tree for path.
     */
    Tree.prototype.subTree = function (pathObj) {
        // TODO: Require pathObj to be Path?
        var path = pathObj instanceof _Path.Path ? pathObj : new _Path.Path(pathObj);
        var child = this,
            next;
        while ((next = path.getFront()) !== null) {
            var childNode = (0, _obj.safeGet)(child.node_.children, next) || new TreeNode();
            child = new Tree(next, child, childNode);
            path = path.popFront();
        }
        return child;
    };
    /**
     * Returns the data associated with this tree node.
     *
     * @return {?T} The data or null if no data exists.
     */
    Tree.prototype.getValue = function () {
        return this.node_.value;
    };
    /**
     * Sets data to this tree node.
     *
     * @param {!T} value Value to set.
     */
    Tree.prototype.setValue = function (value) {
        (0, _assert.assert)(typeof value !== 'undefined', 'Cannot set value to undefined');
        this.node_.value = value;
        this.updateParents_();
    };
    /**
     * Clears the contents of the tree node (its value and all children).
     */
    Tree.prototype.clear = function () {
        this.node_.value = null;
        this.node_.children = {};
        this.node_.childCount = 0;
        this.updateParents_();
    };
    /**
     * @return {boolean} Whether the tree has any children.
     */
    Tree.prototype.hasChildren = function () {
        return this.node_.childCount > 0;
    };
    /**
     * @return {boolean} Whether the tree is empty (no value or children).
     */
    Tree.prototype.isEmpty = function () {
        return this.getValue() === null && !this.hasChildren();
    };
    /**
     * Calls action for each child of this tree node.
     *
     * @param {function(!Tree.<T>)} action Action to be called for each child.
     */
    Tree.prototype.forEachChild = function (action) {
        var _this = this;
        (0, _obj.forEach)(this.node_.children, function (child, childTree) {
            action(new Tree(child, _this, childTree));
        });
    };
    /**
     * Does a depth-first traversal of this node's descendants, calling action for each one.
     *
     * @param {function(!Tree.<T>)} action Action to be called for each child.
     * @param {boolean=} includeSelf Whether to call action on this node as well. Defaults to
     *   false.
     * @param {boolean=} childrenFirst Whether to call action on children before calling it on
     *   parent.
     */
    Tree.prototype.forEachDescendant = function (action, includeSelf, childrenFirst) {
        if (includeSelf && !childrenFirst) action(this);
        this.forEachChild(function (child) {
            child.forEachDescendant(action, /*includeSelf=*/true, childrenFirst);
        });
        if (includeSelf && childrenFirst) action(this);
    };
    /**
     * Calls action on each ancestor node.
     *
     * @param {function(!Tree.<T>)} action Action to be called on each parent; return
     *   true to abort.
     * @param {boolean=} includeSelf Whether to call action on this node as well.
     * @return {boolean} true if the action callback returned true.
     */
    Tree.prototype.forEachAncestor = function (action, includeSelf) {
        var node = includeSelf ? this : this.parent();
        while (node !== null) {
            if (action(node)) {
                return true;
            }
            node = node.parent();
        }
        return false;
    };
    /**
     * Does a depth-first traversal of this node's descendants.  When a descendant with a value
     * is found, action is called on it and traversal does not continue inside the node.
     * Action is *not* called on this node.
     *
     * @param {function(!Tree.<T>)} action Action to be called for each child.
     */
    Tree.prototype.forEachImmediateDescendantWithValue = function (action) {
        this.forEachChild(function (child) {
            if (child.getValue() !== null) action(child);else child.forEachImmediateDescendantWithValue(action);
        });
    };
    /**
     * @return {!Path} The path of this tree node, as a Path.
     */
    Tree.prototype.path = function () {
        return new _Path.Path(this.parent_ === null ? this.name_ : this.parent_.path() + '/' + this.name_);
    };
    /**
     * @return {string} The name of the tree node.
     */
    Tree.prototype.name = function () {
        return this.name_;
    };
    /**
     * @return {?Tree} The parent tree node, or null if this is the root of the tree.
     */
    Tree.prototype.parent = function () {
        return this.parent_;
    };
    /**
     * Adds or removes this child from its parent based on whether it's empty or not.
     *
     * @private
     */
    Tree.prototype.updateParents_ = function () {
        if (this.parent_ !== null) this.parent_.updateChild_(this.name_, this);
    };
    /**
     * Adds or removes the passed child to this tree node, depending on whether it's empty.
     *
     * @param {string} childName The name of the child to update.
     * @param {!Tree.<T>} child The child to update.
     * @private
     */
    Tree.prototype.updateChild_ = function (childName, child) {
        var childEmpty = child.isEmpty();
        var childExists = (0, _obj.contains)(this.node_.children, childName);
        if (childEmpty && childExists) {
            delete this.node_.children[childName];
            this.node_.childCount--;
            this.updateParents_();
        } else if (!childEmpty && !childExists) {
            this.node_.children[childName] = child.node_;
            this.node_.childCount++;
            this.updateParents_();
        }
    };
    return Tree;
}();
exports.Tree = Tree;
//# sourceMappingURL=Tree.js.map


/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*! @license Firebase v4.5.0
Build: rev-f49c8b5
Terms: https://firebase.google.com/terms/ */



Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.VisibilityMonitor = undefined;

var _EventEmitter = __webpack_require__(70);

var _assert = __webpack_require__(2);

/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var __extends = undefined && undefined.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();

/**
 * @extends {EventEmitter}
 */
var VisibilityMonitor = /** @class */function (_super) {
    __extends(VisibilityMonitor, _super);
    function VisibilityMonitor() {
        var _this = _super.call(this, ['visible']) || this;
        var hidden;
        var visibilityChange;
        if (typeof document !== 'undefined' && typeof document.addEventListener !== 'undefined') {
            if (typeof document['hidden'] !== 'undefined') {
                // Opera 12.10 and Firefox 18 and later support
                visibilityChange = 'visibilitychange';
                hidden = 'hidden';
            } else if (typeof document['mozHidden'] !== 'undefined') {
                visibilityChange = 'mozvisibilitychange';
                hidden = 'mozHidden';
            } else if (typeof document['msHidden'] !== 'undefined') {
                visibilityChange = 'msvisibilitychange';
                hidden = 'msHidden';
            } else if (typeof document['webkitHidden'] !== 'undefined') {
                visibilityChange = 'webkitvisibilitychange';
                hidden = 'webkitHidden';
            }
        }
        // Initially, we always assume we are visible. This ensures that in browsers
        // without page visibility support or in cases where we are never visible
        // (e.g. chrome extension), we act as if we are visible, i.e. don't delay
        // reconnects
        _this.visible_ = true;
        if (visibilityChange) {
            document.addEventListener(visibilityChange, function () {
                var visible = !document[hidden];
                if (visible !== _this.visible_) {
                    _this.visible_ = visible;
                    _this.trigger('visible', visible);
                }
            }, false);
        }
        return _this;
    }
    VisibilityMonitor.getInstance = function () {
        return new VisibilityMonitor();
    };
    /**
     * @param {!string} eventType
     * @return {Array.<boolean>}
     */
    VisibilityMonitor.prototype.getInitialEvent = function (eventType) {
        (0, _assert.assert)(eventType === 'visible', 'Unknown event type: ' + eventType);
        return [this.visible_];
    };
    return VisibilityMonitor;
}(_EventEmitter.EventEmitter);
exports.VisibilityMonitor = VisibilityMonitor;
//# sourceMappingURL=VisibilityMonitor.js.map


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*! @license Firebase v4.5.0
Build: rev-f49c8b5
Terms: https://firebase.google.com/terms/ */



Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ChildChangeAccumulator = undefined;

var _obj = __webpack_require__(4);

var _Change = __webpack_require__(30);

var _assert = __webpack_require__(2);

/**
 * @constructor
 */
var ChildChangeAccumulator = /** @class */function () {
    function ChildChangeAccumulator() {
        this.changeMap_ = {};
    }
    /**
     * @param {!Change} change
     */
    ChildChangeAccumulator.prototype.trackChildChange = function (change) {
        var type = change.type;
        var childKey /** @type {!string} */ = change.childName;
        (0, _assert.assert)(type == _Change.Change.CHILD_ADDED || type == _Change.Change.CHILD_CHANGED || type == _Change.Change.CHILD_REMOVED, 'Only child changes supported for tracking');
        (0, _assert.assert)(childKey !== '.priority', 'Only non-priority child changes can be tracked.');
        var oldChange = (0, _obj.safeGet)(this.changeMap_, childKey);
        if (oldChange) {
            var oldType = oldChange.type;
            if (type == _Change.Change.CHILD_ADDED && oldType == _Change.Change.CHILD_REMOVED) {
                this.changeMap_[childKey] = _Change.Change.childChangedChange(childKey, change.snapshotNode, oldChange.snapshotNode);
            } else if (type == _Change.Change.CHILD_REMOVED && oldType == _Change.Change.CHILD_ADDED) {
                delete this.changeMap_[childKey];
            } else if (type == _Change.Change.CHILD_REMOVED && oldType == _Change.Change.CHILD_CHANGED) {
                this.changeMap_[childKey] = _Change.Change.childRemovedChange(childKey, oldChange.oldSnap);
            } else if (type == _Change.Change.CHILD_CHANGED && oldType == _Change.Change.CHILD_ADDED) {
                this.changeMap_[childKey] = _Change.Change.childAddedChange(childKey, change.snapshotNode);
            } else if (type == _Change.Change.CHILD_CHANGED && oldType == _Change.Change.CHILD_CHANGED) {
                this.changeMap_[childKey] = _Change.Change.childChangedChange(childKey, change.snapshotNode, oldChange.oldSnap);
            } else {
                throw (0, _assert.assertionError)('Illegal combination of changes: ' + change + ' occurred after ' + oldChange);
            }
        } else {
            this.changeMap_[childKey] = change;
        }
    };
    /**
     * @return {!Array.<!Change>}
     */
    ChildChangeAccumulator.prototype.getChanges = function () {
        return (0, _obj.getValues)(this.changeMap_);
    };
    return ChildChangeAccumulator;
}(); /**
      * Copyright 2017 Google Inc.
      *
      * Licensed under the Apache License, Version 2.0 (the "License");
      * you may not use this file except in compliance with the License.
      * You may obtain a copy of the License at
      *
      *   http://www.apache.org/licenses/LICENSE-2.0
      *
      * Unless required by applicable law or agreed to in writing, software
      * distributed under the License is distributed on an "AS IS" BASIS,
      * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
      * See the License for the specific language governing permissions and
      * limitations under the License.
      */
exports.ChildChangeAccumulator = ChildChangeAccumulator;
//# sourceMappingURL=ChildChangeAccumulator.js.map


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*! @license Firebase v4.5.0
Build: rev-f49c8b5
Terms: https://firebase.google.com/terms/ */



Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.WriteTreeCompleteChildSource = exports.NO_COMPLETE_CHILD_SOURCE = exports.NoCompleteChildSource_ = undefined;

var _CacheNode = __webpack_require__(39);

/**
 * An implementation of CompleteChildSource that never returns any additional children
 *
 * @private
 * @constructor
 * @implements CompleteChildSource
 */
var NoCompleteChildSource_ = /** @class */function () {
    function NoCompleteChildSource_() {}
    /**
     * @inheritDoc
     */
    NoCompleteChildSource_.prototype.getCompleteChild = function (childKey) {
        return null;
    };
    /**
     * @inheritDoc
     */
    NoCompleteChildSource_.prototype.getChildAfterChild = function (index, child, reverse) {
        return null;
    };
    return NoCompleteChildSource_;
}(); /**
      * Copyright 2017 Google Inc.
      *
      * Licensed under the Apache License, Version 2.0 (the "License");
      * you may not use this file except in compliance with the License.
      * You may obtain a copy of the License at
      *
      *   http://www.apache.org/licenses/LICENSE-2.0
      *
      * Unless required by applicable law or agreed to in writing, software
      * distributed under the License is distributed on an "AS IS" BASIS,
      * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
      * See the License for the specific language governing permissions and
      * limitations under the License.
      */
exports.NoCompleteChildSource_ = NoCompleteChildSource_;
/**
 * Singleton instance.
 * @const
 * @type {!CompleteChildSource}
 */

var NO_COMPLETE_CHILD_SOURCE = exports.NO_COMPLETE_CHILD_SOURCE = new NoCompleteChildSource_();
/**
 * An implementation of CompleteChildSource that uses a WriteTree in addition to any other server data or
 * old event caches available to calculate complete children.
 *
 *
 * @implements CompleteChildSource
 */
var WriteTreeCompleteChildSource = /** @class */function () {
    /**
     * @param {!WriteTreeRef} writes_
     * @param {!ViewCache} viewCache_
     * @param {?Node} optCompleteServerCache_
     */
    function WriteTreeCompleteChildSource(writes_, viewCache_, optCompleteServerCache_) {
        if (optCompleteServerCache_ === void 0) {
            optCompleteServerCache_ = null;
        }
        this.writes_ = writes_;
        this.viewCache_ = viewCache_;
        this.optCompleteServerCache_ = optCompleteServerCache_;
    }
    /**
     * @inheritDoc
     */
    WriteTreeCompleteChildSource.prototype.getCompleteChild = function (childKey) {
        var node = this.viewCache_.getEventCache();
        if (node.isCompleteForChild(childKey)) {
            return node.getNode().getImmediateChild(childKey);
        } else {
            var serverNode = this.optCompleteServerCache_ != null ? new _CacheNode.CacheNode(this.optCompleteServerCache_, true, false) : this.viewCache_.getServerCache();
            return this.writes_.calcCompleteChild(childKey, serverNode);
        }
    };
    /**
     * @inheritDoc
     */
    WriteTreeCompleteChildSource.prototype.getChildAfterChild = function (index, child, reverse) {
        var completeServerData = this.optCompleteServerCache_ != null ? this.optCompleteServerCache_ : this.viewCache_.getCompleteServerSnap();
        var nodes = this.writes_.calcIndexedSlice(completeServerData, child, 1, reverse, index);
        if (nodes.length === 0) {
            return null;
        } else {
            return nodes[0];
        }
    };
    return WriteTreeCompleteChildSource;
}();
exports.WriteTreeCompleteChildSource = WriteTreeCompleteChildSource;
//# sourceMappingURL=CompleteChildSource.js.map


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*! @license Firebase v4.5.0
Build: rev-f49c8b5
Terms: https://firebase.google.com/terms/ */



Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CancelEvent = exports.DataEvent = undefined;

var _json = __webpack_require__(14);

/**
 * Encapsulates the data needed to raise an event
 * @implements {Event}
 */
var DataEvent = /** @class */function () {
    /**
     * @param {!string} eventType One of: value, child_added, child_changed, child_moved, child_removed
     * @param {!EventRegistration} eventRegistration The function to call to with the event data. User provided
     * @param {!DataSnapshot} snapshot The data backing the event
     * @param {?string=} prevName Optional, the name of the previous child for child_* events.
     */
    function DataEvent(eventType, eventRegistration, snapshot, prevName) {
        this.eventType = eventType;
        this.eventRegistration = eventRegistration;
        this.snapshot = snapshot;
        this.prevName = prevName;
    }
    /**
     * @inheritDoc
     */
    DataEvent.prototype.getPath = function () {
        var ref = this.snapshot.getRef();
        if (this.eventType === 'value') {
            return ref.path;
        } else {
            return ref.getParent().path;
        }
    };
    /**
     * @inheritDoc
     */
    DataEvent.prototype.getEventType = function () {
        return this.eventType;
    };
    /**
     * @inheritDoc
     */
    DataEvent.prototype.getEventRunner = function () {
        return this.eventRegistration.getEventRunner(this);
    };
    /**
     * @inheritDoc
     */
    DataEvent.prototype.toString = function () {
        return this.getPath().toString() + ':' + this.eventType + ':' + (0, _json.stringify)(this.snapshot.exportVal());
    };
    return DataEvent;
}(); /**
      * Copyright 2017 Google Inc.
      *
      * Licensed under the Apache License, Version 2.0 (the "License");
      * you may not use this file except in compliance with the License.
      * You may obtain a copy of the License at
      *
      *   http://www.apache.org/licenses/LICENSE-2.0
      *
      * Unless required by applicable law or agreed to in writing, software
      * distributed under the License is distributed on an "AS IS" BASIS,
      * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
      * See the License for the specific language governing permissions and
      * limitations under the License.
      */
exports.DataEvent = DataEvent;

var CancelEvent = /** @class */function () {
    /**
     * @param {EventRegistration} eventRegistration
     * @param {Error} error
     * @param {!Path} path
     */
    function CancelEvent(eventRegistration, error, path) {
        this.eventRegistration = eventRegistration;
        this.error = error;
        this.path = path;
    }
    /**
     * @inheritDoc
     */
    CancelEvent.prototype.getPath = function () {
        return this.path;
    };
    /**
     * @inheritDoc
     */
    CancelEvent.prototype.getEventType = function () {
        return 'cancel';
    };
    /**
     * @inheritDoc
     */
    CancelEvent.prototype.getEventRunner = function () {
        return this.eventRegistration.getEventRunner(this);
    };
    /**
     * @inheritDoc
     */
    CancelEvent.prototype.toString = function () {
        return this.path.toString() + ':cancel';
    };
    return CancelEvent;
}();
exports.CancelEvent = CancelEvent;
//# sourceMappingURL=Event.js.map


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*! @license Firebase v4.5.0
Build: rev-f49c8b5
Terms: https://firebase.google.com/terms/ */



Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.EventGenerator = undefined;

var _Node = __webpack_require__(10);

var _Change = __webpack_require__(30);

var _assert = __webpack_require__(2);

/**
 * An EventGenerator is used to convert "raw" changes (Change) as computed by the
 * CacheDiffer into actual events (Event) that can be raised.  See generateEventsForChanges()
 * for details.
 *
 * @constructor
 */
var EventGenerator = /** @class */function () {
    /**
     *
     * @param {!Query} query_
     */
    function EventGenerator(query_) {
        this.query_ = query_;
        /**
         * @private
         * @type {!Index}
         */
        this.index_ = this.query_.getQueryParams().getIndex();
    }
    /**
     * Given a set of raw changes (no moved events and prevName not specified yet), and a set of
     * EventRegistrations that should be notified of these changes, generate the actual events to be raised.
     *
     * Notes:
     *  - child_moved events will be synthesized at this time for any child_changed events that affect
     *    our index.
     *  - prevName will be calculated based on the index ordering.
     *
     * @param {!Array.<!Change>} changes
     * @param {!Node} eventCache
     * @param {!Array.<!EventRegistration>} eventRegistrations
     * @return {!Array.<!Event>}
     */
    EventGenerator.prototype.generateEventsForChanges = function (changes, eventCache, eventRegistrations) {
        var _this = this;
        var events = [];
        var moves = [];
        changes.forEach(function (change) {
            if (change.type === _Change.Change.CHILD_CHANGED && _this.index_.indexedValueChanged(change.oldSnap, change.snapshotNode)) {
                moves.push(_Change.Change.childMovedChange(change.childName, change.snapshotNode));
            }
        });
        this.generateEventsForType_(events, _Change.Change.CHILD_REMOVED, changes, eventRegistrations, eventCache);
        this.generateEventsForType_(events, _Change.Change.CHILD_ADDED, changes, eventRegistrations, eventCache);
        this.generateEventsForType_(events, _Change.Change.CHILD_MOVED, moves, eventRegistrations, eventCache);
        this.generateEventsForType_(events, _Change.Change.CHILD_CHANGED, changes, eventRegistrations, eventCache);
        this.generateEventsForType_(events, _Change.Change.VALUE, changes, eventRegistrations, eventCache);
        return events;
    };
    /**
     * Given changes of a single change type, generate the corresponding events.
     *
     * @param {!Array.<!Event>} events
     * @param {!string} eventType
     * @param {!Array.<!Change>} changes
     * @param {!Array.<!EventRegistration>} registrations
     * @param {!Node} eventCache
     * @private
     */
    EventGenerator.prototype.generateEventsForType_ = function (events, eventType, changes, registrations, eventCache) {
        var _this = this;
        var filteredChanges = changes.filter(function (change) {
            return change.type === eventType;
        });
        filteredChanges.sort(this.compareChanges_.bind(this));
        filteredChanges.forEach(function (change) {
            var materializedChange = _this.materializeSingleChange_(change, eventCache);
            registrations.forEach(function (registration) {
                if (registration.respondsTo(change.type)) {
                    events.push(registration.createEvent(materializedChange, _this.query_));
                }
            });
        });
    };
    /**
     * @param {!Change} change
     * @param {!Node} eventCache
     * @return {!Change}
     * @private
     */
    EventGenerator.prototype.materializeSingleChange_ = function (change, eventCache) {
        if (change.type === 'value' || change.type === 'child_removed') {
            return change;
        } else {
            change.prevName = eventCache.getPredecessorChildName(
            /** @type {!string} */
            change.childName, change.snapshotNode, this.index_);
            return change;
        }
    };
    /**
     * @param {!Change} a
     * @param {!Change} b
     * @return {number}
     * @private
     */
    EventGenerator.prototype.compareChanges_ = function (a, b) {
        if (a.childName == null || b.childName == null) {
            throw (0, _assert.assertionError)('Should only compare child_ events.');
        }
        var aWrapped = new _Node.NamedNode(a.childName, a.snapshotNode);
        var bWrapped = new _Node.NamedNode(b.childName, b.snapshotNode);
        return this.index_.compare(aWrapped, bWrapped);
    };
    return EventGenerator;
}(); /**
      * Copyright 2017 Google Inc.
      *
      * Licensed under the Apache License, Version 2.0 (the "License");
      * you may not use this file except in compliance with the License.
      * You may obtain a copy of the License at
      *
      *   http://www.apache.org/licenses/LICENSE-2.0
      *
      * Unless required by applicable law or agreed to in writing, software
      * distributed under the License is distributed on an "AS IS" BASIS,
      * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
      * See the License for the specific language governing permissions and
      * limitations under the License.
      */
exports.EventGenerator = EventGenerator;
//# sourceMappingURL=EventGenerator.js.map


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*! @license Firebase v4.5.0
Build: rev-f49c8b5
Terms: https://firebase.google.com/terms/ */



Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.EventList = exports.EventQueue = undefined;

var _util = __webpack_require__(3);

/**
 * The event queue serves a few purposes:
 * 1. It ensures we maintain event order in the face of event callbacks doing operations that result in more
 *    events being queued.
 * 2. raiseQueuedEvents() handles being called reentrantly nicely.  That is, if in the course of raising events,
 *    raiseQueuedEvents() is called again, the "inner" call will pick up raising events where the "outer" call
 *    left off, ensuring that the events are still raised synchronously and in order.
 * 3. You can use raiseEventsAtPath and raiseEventsForChangedPath to ensure only relevant previously-queued
 *    events are raised synchronously.
 *
 * NOTE: This can all go away if/when we move to async events.
 *
 * @constructor
 */
var EventQueue = /** @class */function () {
    function EventQueue() {
        /**
         * @private
         * @type {!Array.<EventList>}
         */
        this.eventLists_ = [];
        /**
         * Tracks recursion depth of raiseQueuedEvents_, for debugging purposes.
         * @private
         * @type {!number}
         */
        this.recursionDepth_ = 0;
    }
    /**
     * @param {!Array.<Event>} eventDataList The new events to queue.
     */
    EventQueue.prototype.queueEvents = function (eventDataList) {
        // We group events by path, storing them in a single EventList, to make it easier to skip over them quickly.
        var currList = null;
        for (var i = 0; i < eventDataList.length; i++) {
            var eventData = eventDataList[i];
            var eventPath = eventData.getPath();
            if (currList !== null && !eventPath.equals(currList.getPath())) {
                this.eventLists_.push(currList);
                currList = null;
            }
            if (currList === null) {
                currList = new EventList(eventPath);
            }
            currList.add(eventData);
        }
        if (currList) {
            this.eventLists_.push(currList);
        }
    };
    /**
     * Queues the specified events and synchronously raises all events (including previously queued ones)
     * for the specified path.
     *
     * It is assumed that the new events are all for the specified path.
     *
     * @param {!Path} path The path to raise events for.
     * @param {!Array.<Event>} eventDataList The new events to raise.
     */
    EventQueue.prototype.raiseEventsAtPath = function (path, eventDataList) {
        this.queueEvents(eventDataList);
        this.raiseQueuedEventsMatchingPredicate_(function (eventPath) {
            return eventPath.equals(path);
        });
    };
    /**
     * Queues the specified events and synchronously raises all events (including previously queued ones) for
     * locations related to the specified change path (i.e. all ancestors and descendants).
     *
     * It is assumed that the new events are all related (ancestor or descendant) to the specified path.
     *
     * @param {!Path} changedPath The path to raise events for.
     * @param {!Array.<!Event>} eventDataList The events to raise
     */
    EventQueue.prototype.raiseEventsForChangedPath = function (changedPath, eventDataList) {
        this.queueEvents(eventDataList);
        this.raiseQueuedEventsMatchingPredicate_(function (eventPath) {
            return eventPath.contains(changedPath) || changedPath.contains(eventPath);
        });
    };
    /**
     * @param {!function(!Path):boolean} predicate
     * @private
     */
    EventQueue.prototype.raiseQueuedEventsMatchingPredicate_ = function (predicate) {
        this.recursionDepth_++;
        var sentAll = true;
        for (var i = 0; i < this.eventLists_.length; i++) {
            var eventList = this.eventLists_[i];
            if (eventList) {
                var eventPath = eventList.getPath();
                if (predicate(eventPath)) {
                    this.eventLists_[i].raise();
                    this.eventLists_[i] = null;
                } else {
                    sentAll = false;
                }
            }
        }
        if (sentAll) {
            this.eventLists_ = [];
        }
        this.recursionDepth_--;
    };
    return EventQueue;
}(); /**
      * Copyright 2017 Google Inc.
      *
      * Licensed under the Apache License, Version 2.0 (the "License");
      * you may not use this file except in compliance with the License.
      * You may obtain a copy of the License at
      *
      *   http://www.apache.org/licenses/LICENSE-2.0
      *
      * Unless required by applicable law or agreed to in writing, software
      * distributed under the License is distributed on an "AS IS" BASIS,
      * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
      * See the License for the specific language governing permissions and
      * limitations under the License.
      */
exports.EventQueue = EventQueue;
/**
 * @param {!Path} path
 * @constructor
 */

var EventList = /** @class */function () {
    function EventList(path_) {
        this.path_ = path_;
        /**
         * @type {!Array.<Event>}
         * @private
         */
        this.events_ = [];
    }
    /**
     * @param {!Event} eventData
     */
    EventList.prototype.add = function (eventData) {
        this.events_.push(eventData);
    };
    /**
     * Iterates through the list and raises each event
     */
    EventList.prototype.raise = function () {
        for (var i = 0; i < this.events_.length; i++) {
            var eventData = this.events_[i];
            if (eventData !== null) {
                this.events_[i] = null;
                var eventFn = eventData.getEventRunner();
                if (_util.logger) {
                    (0, _util.log)('event: ' + eventData.toString());
                }
                (0, _util.exceptionGuard)(eventFn);
            }
        }
    };
    /**
     * @return {!Path}
     */
    EventList.prototype.getPath = function () {
        return this.path_;
    };
    return EventList;
}();
exports.EventList = EventList;
//# sourceMappingURL=EventQueue.js.map


/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*! @license Firebase v4.5.0
Build: rev-f49c8b5
Terms: https://firebase.google.com/terms/ */



Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ChildEventRegistration = exports.ValueEventRegistration = undefined;

var _DataSnapshot = __webpack_require__(53);

var _Event = __webpack_require__(111);

var _obj = __webpack_require__(4);

var _assert = __webpack_require__(2);

/**
 * Represents registration for 'value' events.
 */
/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var ValueEventRegistration = /** @class */function () {
    /**
     * @param {?function(!DataSnapshot)} callback_
     * @param {?function(Error)} cancelCallback_
     * @param {?Object} context_
     */
    function ValueEventRegistration(callback_, cancelCallback_, context_) {
        this.callback_ = callback_;
        this.cancelCallback_ = cancelCallback_;
        this.context_ = context_;
    }
    /**
     * @inheritDoc
     */
    ValueEventRegistration.prototype.respondsTo = function (eventType) {
        return eventType === 'value';
    };
    /**
     * @inheritDoc
     */
    ValueEventRegistration.prototype.createEvent = function (change, query) {
        var index = query.getQueryParams().getIndex();
        return new _Event.DataEvent('value', this, new _DataSnapshot.DataSnapshot(change.snapshotNode, query.getRef(), index));
    };
    /**
     * @inheritDoc
     */
    ValueEventRegistration.prototype.getEventRunner = function (eventData) {
        var ctx = this.context_;
        if (eventData.getEventType() === 'cancel') {
            (0, _assert.assert)(this.cancelCallback_, 'Raising a cancel event on a listener with no cancel callback');
            var cancelCB_1 = this.cancelCallback_;
            return function () {
                // We know that error exists, we checked above that this is a cancel event
                cancelCB_1.call(ctx, eventData.error);
            };
        } else {
            var cb_1 = this.callback_;
            return function () {
                cb_1.call(ctx, eventData.snapshot);
            };
        }
    };
    /**
     * @inheritDoc
     */
    ValueEventRegistration.prototype.createCancelEvent = function (error, path) {
        if (this.cancelCallback_) {
            return new _Event.CancelEvent(this, error, path);
        } else {
            return null;
        }
    };
    /**
     * @inheritDoc
     */
    ValueEventRegistration.prototype.matches = function (other) {
        if (!(other instanceof ValueEventRegistration)) {
            return false;
        } else if (!other.callback_ || !this.callback_) {
            // If no callback specified, we consider it to match any callback.
            return true;
        } else {
            return other.callback_ === this.callback_ && other.context_ === this.context_;
        }
    };
    /**
     * @inheritDoc
     */
    ValueEventRegistration.prototype.hasAnyCallback = function () {
        return this.callback_ !== null;
    };
    return ValueEventRegistration;
}();
exports.ValueEventRegistration = ValueEventRegistration;
/**
 * Represents the registration of 1 or more child_xxx events.
 *
 * Currently, it is always exactly 1 child_xxx event, but the idea is we might let you
 * register a group of callbacks together in the future.
 *
 * @constructor
 * @implements {EventRegistration}
 */

var ChildEventRegistration = /** @class */function () {
    /**
     * @param {?Object.<string, function(!DataSnapshot, ?string=)>} callbacks_
     * @param {?function(Error)} cancelCallback_
     * @param {Object=} context_
     */
    function ChildEventRegistration(callbacks_, cancelCallback_, context_) {
        this.callbacks_ = callbacks_;
        this.cancelCallback_ = cancelCallback_;
        this.context_ = context_;
    }
    /**
     * @inheritDoc
     */
    ChildEventRegistration.prototype.respondsTo = function (eventType) {
        var eventToCheck = eventType === 'children_added' ? 'child_added' : eventType;
        eventToCheck = eventToCheck === 'children_removed' ? 'child_removed' : eventToCheck;
        return (0, _obj.contains)(this.callbacks_, eventToCheck);
    };
    /**
     * @inheritDoc
     */
    ChildEventRegistration.prototype.createCancelEvent = function (error, path) {
        if (this.cancelCallback_) {
            return new _Event.CancelEvent(this, error, path);
        } else {
            return null;
        }
    };
    /**
     * @inheritDoc
     */
    ChildEventRegistration.prototype.createEvent = function (change, query) {
        (0, _assert.assert)(change.childName != null, 'Child events should have a childName.');
        var ref = query.getRef().child /** @type {!string} */(change.childName);
        var index = query.getQueryParams().getIndex();
        return new _Event.DataEvent(change.type, this, new _DataSnapshot.DataSnapshot(change.snapshotNode, ref, index), change.prevName);
    };
    /**
     * @inheritDoc
     */
    ChildEventRegistration.prototype.getEventRunner = function (eventData) {
        var ctx = this.context_;
        if (eventData.getEventType() === 'cancel') {
            (0, _assert.assert)(this.cancelCallback_, 'Raising a cancel event on a listener with no cancel callback');
            var cancelCB_2 = this.cancelCallback_;
            return function () {
                // We know that error exists, we checked above that this is a cancel event
                cancelCB_2.call(ctx, eventData.error);
            };
        } else {
            var cb_2 = this.callbacks_[eventData.eventType];
            return function () {
                cb_2.call(ctx, eventData.snapshot, eventData.prevName);
            };
        }
    };
    /**
     * @inheritDoc
     */
    ChildEventRegistration.prototype.matches = function (other) {
        if (other instanceof ChildEventRegistration) {
            if (!this.callbacks_ || !other.callbacks_) {
                return true;
            } else if (this.context_ === other.context_) {
                var otherCount = (0, _obj.getCount)(other.callbacks_);
                var thisCount = (0, _obj.getCount)(this.callbacks_);
                if (otherCount === thisCount) {
                    // If count is 1, do an exact match on eventType, if either is defined but null, it's a match.
                    //  If event types don't match, not a match
                    // If count is not 1, exact match across all
                    if (otherCount === 1) {
                        var otherKey /** @type {!string} */ = (0, _obj.getAnyKey)(other.callbacks_);
                        var thisKey /** @type {!string} */ = (0, _obj.getAnyKey)(this.callbacks_);
                        return thisKey === otherKey && (!other.callbacks_[otherKey] || !this.callbacks_[thisKey] || other.callbacks_[otherKey] === this.callbacks_[thisKey]);
                    } else {
                        // Exact match on each key.
                        return (0, _obj.every)(this.callbacks_, function (eventType, cb) {
                            return other.callbacks_[eventType] === cb;
                        });
                    }
                }
            }
        }
        return false;
    };
    /**
     * @inheritDoc
     */
    ChildEventRegistration.prototype.hasAnyCallback = function () {
        return this.callbacks_ !== null;
    };
    return ChildEventRegistration;
}();
exports.ChildEventRegistration = ChildEventRegistration;
//# sourceMappingURL=EventRegistration.js.map


/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*! @license Firebase v4.5.0
Build: rev-f49c8b5
Terms: https://firebase.google.com/terms/ */



Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.QueryParams = undefined;

var _assert = __webpack_require__(2);

var _util = __webpack_require__(3);

var _KeyIndex = __webpack_require__(33);

var _PriorityIndex = __webpack_require__(7);

var _ValueIndex = __webpack_require__(66);

var _PathIndex = __webpack_require__(65);

var _IndexedFilter = __webpack_require__(48);

var _LimitedFilter = __webpack_require__(118);

var _RangedFilter = __webpack_require__(74);

var _json = __webpack_require__(14);

/**
 * This class is an immutable-from-the-public-api struct containing a set of query parameters defining a
 * range to be returned for a particular location. It is assumed that validation of parameters is done at the
 * user-facing API level, so it is not done here.
 * @constructor
 */
/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var QueryParams = /** @class */function () {
    function QueryParams() {
        this.limitSet_ = false;
        this.startSet_ = false;
        this.startNameSet_ = false;
        this.endSet_ = false;
        this.endNameSet_ = false;
        this.limit_ = 0;
        this.viewFrom_ = '';
        this.indexStartValue_ = null;
        this.indexStartName_ = '';
        this.indexEndValue_ = null;
        this.indexEndName_ = '';
        this.index_ = _PriorityIndex.PRIORITY_INDEX;
    }
    /**
     * @return {boolean}
     */
    QueryParams.prototype.hasStart = function () {
        return this.startSet_;
    };
    /**
     * @return {boolean} True if it would return from left.
     */
    QueryParams.prototype.isViewFromLeft = function () {
        if (this.viewFrom_ === '') {
            // limit(), rather than limitToFirst or limitToLast was called.
            // This means that only one of startSet_ and endSet_ is true. Use them
            // to calculate which side of the view to anchor to. If neither is set,
            // anchor to the end.
            return this.startSet_;
        } else {
            return this.viewFrom_ === QueryParams.WIRE_PROTOCOL_CONSTANTS_.VIEW_FROM_LEFT;
        }
    };
    /**
     * Only valid to call if hasStart() returns true
     * @return {*}
     */
    QueryParams.prototype.getIndexStartValue = function () {
        (0, _assert.assert)(this.startSet_, 'Only valid if start has been set');
        return this.indexStartValue_;
    };
    /**
     * Only valid to call if hasStart() returns true.
     * Returns the starting key name for the range defined by these query parameters
     * @return {!string}
     */
    QueryParams.prototype.getIndexStartName = function () {
        (0, _assert.assert)(this.startSet_, 'Only valid if start has been set');
        if (this.startNameSet_) {
            return this.indexStartName_;
        } else {
            return _util.MIN_NAME;
        }
    };
    /**
     * @return {boolean}
     */
    QueryParams.prototype.hasEnd = function () {
        return this.endSet_;
    };
    /**
     * Only valid to call if hasEnd() returns true.
     * @return {*}
     */
    QueryParams.prototype.getIndexEndValue = function () {
        (0, _assert.assert)(this.endSet_, 'Only valid if end has been set');
        return this.indexEndValue_;
    };
    /**
     * Only valid to call if hasEnd() returns true.
     * Returns the end key name for the range defined by these query parameters
     * @return {!string}
     */
    QueryParams.prototype.getIndexEndName = function () {
        (0, _assert.assert)(this.endSet_, 'Only valid if end has been set');
        if (this.endNameSet_) {
            return this.indexEndName_;
        } else {
            return _util.MAX_NAME;
        }
    };
    /**
     * @return {boolean}
     */
    QueryParams.prototype.hasLimit = function () {
        return this.limitSet_;
    };
    /**
     * @return {boolean} True if a limit has been set and it has been explicitly anchored
     */
    QueryParams.prototype.hasAnchoredLimit = function () {
        return this.limitSet_ && this.viewFrom_ !== '';
    };
    /**
     * Only valid to call if hasLimit() returns true
     * @return {!number}
     */
    QueryParams.prototype.getLimit = function () {
        (0, _assert.assert)(this.limitSet_, 'Only valid if limit has been set');
        return this.limit_;
    };
    /**
     * @return {!Index}
     */
    QueryParams.prototype.getIndex = function () {
        return this.index_;
    };
    /**
     * @return {!QueryParams}
     * @private
     */
    QueryParams.prototype.copy_ = function () {
        var copy = new QueryParams();
        copy.limitSet_ = this.limitSet_;
        copy.limit_ = this.limit_;
        copy.startSet_ = this.startSet_;
        copy.indexStartValue_ = this.indexStartValue_;
        copy.startNameSet_ = this.startNameSet_;
        copy.indexStartName_ = this.indexStartName_;
        copy.endSet_ = this.endSet_;
        copy.indexEndValue_ = this.indexEndValue_;
        copy.endNameSet_ = this.endNameSet_;
        copy.indexEndName_ = this.indexEndName_;
        copy.index_ = this.index_;
        copy.viewFrom_ = this.viewFrom_;
        return copy;
    };
    /**
     * @param {!number} newLimit
     * @return {!QueryParams}
     */
    QueryParams.prototype.limit = function (newLimit) {
        var newParams = this.copy_();
        newParams.limitSet_ = true;
        newParams.limit_ = newLimit;
        newParams.viewFrom_ = '';
        return newParams;
    };
    /**
     * @param {!number} newLimit
     * @return {!QueryParams}
     */
    QueryParams.prototype.limitToFirst = function (newLimit) {
        var newParams = this.copy_();
        newParams.limitSet_ = true;
        newParams.limit_ = newLimit;
        newParams.viewFrom_ = QueryParams.WIRE_PROTOCOL_CONSTANTS_.VIEW_FROM_LEFT;
        return newParams;
    };
    /**
     * @param {!number} newLimit
     * @return {!QueryParams}
     */
    QueryParams.prototype.limitToLast = function (newLimit) {
        var newParams = this.copy_();
        newParams.limitSet_ = true;
        newParams.limit_ = newLimit;
        newParams.viewFrom_ = QueryParams.WIRE_PROTOCOL_CONSTANTS_.VIEW_FROM_RIGHT;
        return newParams;
    };
    /**
     * @param {*} indexValue
     * @param {?string=} key
     * @return {!QueryParams}
     */
    QueryParams.prototype.startAt = function (indexValue, key) {
        var newParams = this.copy_();
        newParams.startSet_ = true;
        if (!(indexValue !== undefined)) {
            indexValue = null;
        }
        newParams.indexStartValue_ = indexValue;
        if (key != null) {
            newParams.startNameSet_ = true;
            newParams.indexStartName_ = key;
        } else {
            newParams.startNameSet_ = false;
            newParams.indexStartName_ = '';
        }
        return newParams;
    };
    /**
     * @param {*} indexValue
     * @param {?string=} key
     * @return {!QueryParams}
     */
    QueryParams.prototype.endAt = function (indexValue, key) {
        var newParams = this.copy_();
        newParams.endSet_ = true;
        if (!(indexValue !== undefined)) {
            indexValue = null;
        }
        newParams.indexEndValue_ = indexValue;
        if (key !== undefined) {
            newParams.endNameSet_ = true;
            newParams.indexEndName_ = key;
        } else {
            newParams.endNameSet_ = false;
            newParams.indexEndName_ = '';
        }
        return newParams;
    };
    /**
     * @param {!Index} index
     * @return {!QueryParams}
     */
    QueryParams.prototype.orderBy = function (index) {
        var newParams = this.copy_();
        newParams.index_ = index;
        return newParams;
    };
    /**
     * @return {!Object}
     */
    QueryParams.prototype.getQueryObject = function () {
        var WIRE_PROTOCOL_CONSTANTS = QueryParams.WIRE_PROTOCOL_CONSTANTS_;
        var obj = {};
        if (this.startSet_) {
            obj[WIRE_PROTOCOL_CONSTANTS.INDEX_START_VALUE] = this.indexStartValue_;
            if (this.startNameSet_) {
                obj[WIRE_PROTOCOL_CONSTANTS.INDEX_START_NAME] = this.indexStartName_;
            }
        }
        if (this.endSet_) {
            obj[WIRE_PROTOCOL_CONSTANTS.INDEX_END_VALUE] = this.indexEndValue_;
            if (this.endNameSet_) {
                obj[WIRE_PROTOCOL_CONSTANTS.INDEX_END_NAME] = this.indexEndName_;
            }
        }
        if (this.limitSet_) {
            obj[WIRE_PROTOCOL_CONSTANTS.LIMIT] = this.limit_;
            var viewFrom = this.viewFrom_;
            if (viewFrom === '') {
                if (this.isViewFromLeft()) {
                    viewFrom = WIRE_PROTOCOL_CONSTANTS.VIEW_FROM_LEFT;
                } else {
                    viewFrom = WIRE_PROTOCOL_CONSTANTS.VIEW_FROM_RIGHT;
                }
            }
            obj[WIRE_PROTOCOL_CONSTANTS.VIEW_FROM] = viewFrom;
        }
        // For now, priority index is the default, so we only specify if it's some other index
        if (this.index_ !== _PriorityIndex.PRIORITY_INDEX) {
            obj[WIRE_PROTOCOL_CONSTANTS.INDEX] = this.index_.toString();
        }
        return obj;
    };
    /**
     * @return {boolean}
     */
    QueryParams.prototype.loadsAllData = function () {
        return !(this.startSet_ || this.endSet_ || this.limitSet_);
    };
    /**
     * @return {boolean}
     */
    QueryParams.prototype.isDefault = function () {
        return this.loadsAllData() && this.index_ == _PriorityIndex.PRIORITY_INDEX;
    };
    /**
     * @return {!NodeFilter}
     */
    QueryParams.prototype.getNodeFilter = function () {
        if (this.loadsAllData()) {
            return new _IndexedFilter.IndexedFilter(this.getIndex());
        } else if (this.hasLimit()) {
            return new _LimitedFilter.LimitedFilter(this);
        } else {
            return new _RangedFilter.RangedFilter(this);
        }
    };
    /**
     * Returns a set of REST query string parameters representing this query.
     *
     * @return {!Object.<string,*>} query string parameters
     */
    QueryParams.prototype.toRestQueryStringParameters = function () {
        var REST_CONSTANTS = QueryParams.REST_QUERY_CONSTANTS_;
        var qs = {};
        if (this.isDefault()) {
            return qs;
        }
        var orderBy;
        if (this.index_ === _PriorityIndex.PRIORITY_INDEX) {
            orderBy = REST_CONSTANTS.PRIORITY_INDEX;
        } else if (this.index_ === _ValueIndex.VALUE_INDEX) {
            orderBy = REST_CONSTANTS.VALUE_INDEX;
        } else if (this.index_ === _KeyIndex.KEY_INDEX) {
            orderBy = REST_CONSTANTS.KEY_INDEX;
        } else {
            (0, _assert.assert)(this.index_ instanceof _PathIndex.PathIndex, 'Unrecognized index type!');
            orderBy = this.index_.toString();
        }
        qs[REST_CONSTANTS.ORDER_BY] = (0, _json.stringify)(orderBy);
        if (this.startSet_) {
            qs[REST_CONSTANTS.START_AT] = (0, _json.stringify)(this.indexStartValue_);
            if (this.startNameSet_) {
                qs[REST_CONSTANTS.START_AT] += ',' + (0, _json.stringify)(this.indexStartName_);
            }
        }
        if (this.endSet_) {
            qs[REST_CONSTANTS.END_AT] = (0, _json.stringify)(this.indexEndValue_);
            if (this.endNameSet_) {
                qs[REST_CONSTANTS.END_AT] += ',' + (0, _json.stringify)(this.indexEndName_);
            }
        }
        if (this.limitSet_) {
            if (this.isViewFromLeft()) {
                qs[REST_CONSTANTS.LIMIT_TO_FIRST] = this.limit_;
            } else {
                qs[REST_CONSTANTS.LIMIT_TO_LAST] = this.limit_;
            }
        }
        return qs;
    };
    /**
     * Wire Protocol Constants
     * @const
     * @enum {string}
     * @private
     */
    QueryParams.WIRE_PROTOCOL_CONSTANTS_ = {
        INDEX_START_VALUE: 'sp',
        INDEX_START_NAME: 'sn',
        INDEX_END_VALUE: 'ep',
        INDEX_END_NAME: 'en',
        LIMIT: 'l',
        VIEW_FROM: 'vf',
        VIEW_FROM_LEFT: 'l',
        VIEW_FROM_RIGHT: 'r',
        INDEX: 'i'
    };
    /**
     * REST Query Constants
     * @const
     * @enum {string}
     * @private
     */
    QueryParams.REST_QUERY_CONSTANTS_ = {
        ORDER_BY: 'orderBy',
        PRIORITY_INDEX: '$priority',
        VALUE_INDEX: '$value',
        KEY_INDEX: '$key',
        START_AT: 'startAt',
        END_AT: 'endAt',
        LIMIT_TO_FIRST: 'limitToFirst',
        LIMIT_TO_LAST: 'limitToLast'
    };
    /**
     * Default, empty query parameters
     * @type {!QueryParams}
     * @const
     */
    QueryParams.DEFAULT = new QueryParams();
    return QueryParams;
}();
exports.QueryParams = QueryParams;
//# sourceMappingURL=QueryParams.js.map


/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*! @license Firebase v4.5.0
Build: rev-f49c8b5
Terms: https://firebase.google.com/terms/ */



Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.View = undefined;

var _IndexedFilter = __webpack_require__(48);

var _ViewProcessor = __webpack_require__(117);

var _ChildrenNode = __webpack_require__(8);

var _CacheNode = __webpack_require__(39);

var _ViewCache = __webpack_require__(73);

var _EventGenerator = __webpack_require__(112);

var _assert = __webpack_require__(2);

var _Operation = __webpack_require__(15);

var _Change = __webpack_require__(30);

var _PriorityIndex = __webpack_require__(7);

/**
 * A view represents a specific location and query that has 1 or more event registrations.
 *
 * It does several things:
 *  - Maintains the list of event registrations for this location/query.
 *  - Maintains a cache of the data visible for this location/query.
 *  - Applies new operations (via applyOperation), updates the cache, and based on the event
 *    registrations returns the set of events to be raised.
 * @constructor
 */
/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var View = /** @class */function () {
    /**
     *
     * @param {!Query} query_
     * @param {!ViewCache} initialViewCache
     */
    function View(query_, initialViewCache) {
        this.query_ = query_;
        this.eventRegistrations_ = [];
        var params = this.query_.getQueryParams();
        var indexFilter = new _IndexedFilter.IndexedFilter(params.getIndex());
        var filter = params.getNodeFilter();
        /**
         * @type {ViewProcessor}
         * @private
         */
        this.processor_ = new _ViewProcessor.ViewProcessor(filter);
        var initialServerCache = initialViewCache.getServerCache();
        var initialEventCache = initialViewCache.getEventCache();
        // Don't filter server node with other filter than index, wait for tagged listen
        var serverSnap = indexFilter.updateFullNode(_ChildrenNode.ChildrenNode.EMPTY_NODE, initialServerCache.getNode(), null);
        var eventSnap = filter.updateFullNode(_ChildrenNode.ChildrenNode.EMPTY_NODE, initialEventCache.getNode(), null);
        var newServerCache = new _CacheNode.CacheNode(serverSnap, initialServerCache.isFullyInitialized(), indexFilter.filtersNodes());
        var newEventCache = new _CacheNode.CacheNode(eventSnap, initialEventCache.isFullyInitialized(), filter.filtersNodes());
        /**
         * @type {!ViewCache}
         * @private
         */
        this.viewCache_ = new _ViewCache.ViewCache(newEventCache, newServerCache);
        /**
         * @type {!EventGenerator}
         * @private
         */
        this.eventGenerator_ = new _EventGenerator.EventGenerator(this.query_);
    }
    /**
     * @return {!Query}
     */
    View.prototype.getQuery = function () {
        return this.query_;
    };
    /**
     * @return {?Node}
     */
    View.prototype.getServerCache = function () {
        return this.viewCache_.getServerCache().getNode();
    };
    /**
     * @param {!Path} path
     * @return {?Node}
     */
    View.prototype.getCompleteServerCache = function (path) {
        var cache = this.viewCache_.getCompleteServerSnap();
        if (cache) {
            // If this isn't a "loadsAllData" view, then cache isn't actually a complete cache and
            // we need to see if it contains the child we're interested in.
            if (this.query_.getQueryParams().loadsAllData() || !path.isEmpty() && !cache.getImmediateChild(path.getFront()).isEmpty()) {
                return cache.getChild(path);
            }
        }
        return null;
    };
    /**
     * @return {boolean}
     */
    View.prototype.isEmpty = function () {
        return this.eventRegistrations_.length === 0;
    };
    /**
     * @param {!EventRegistration} eventRegistration
     */
    View.prototype.addEventRegistration = function (eventRegistration) {
        this.eventRegistrations_.push(eventRegistration);
    };
    /**
     * @param {?EventRegistration} eventRegistration If null, remove all callbacks.
     * @param {Error=} cancelError If a cancelError is provided, appropriate cancel events will be returned.
     * @return {!Array.<!Event>} Cancel events, if cancelError was provided.
     */
    View.prototype.removeEventRegistration = function (eventRegistration, cancelError) {
        var cancelEvents = [];
        if (cancelError) {
            (0, _assert.assert)(eventRegistration == null, 'A cancel should cancel all event registrations.');
            var path_1 = this.query_.path;
            this.eventRegistrations_.forEach(function (registration) {
                cancelError /** @type {!Error} */ = cancelError;
                var maybeEvent = registration.createCancelEvent(cancelError, path_1);
                if (maybeEvent) {
                    cancelEvents.push(maybeEvent);
                }
            });
        }
        if (eventRegistration) {
            var remaining = [];
            for (var i = 0; i < this.eventRegistrations_.length; ++i) {
                var existing = this.eventRegistrations_[i];
                if (!existing.matches(eventRegistration)) {
                    remaining.push(existing);
                } else if (eventRegistration.hasAnyCallback()) {
                    // We're removing just this one
                    remaining = remaining.concat(this.eventRegistrations_.slice(i + 1));
                    break;
                }
            }
            this.eventRegistrations_ = remaining;
        } else {
            this.eventRegistrations_ = [];
        }
        return cancelEvents;
    };
    /**
     * Applies the given Operation, updates our cache, and returns the appropriate events.
     *
     * @param {!Operation} operation
     * @param {!WriteTreeRef} writesCache
     * @param {?Node} completeServerCache
     * @return {!Array.<!Event>}
     */
    View.prototype.applyOperation = function (operation, writesCache, completeServerCache) {
        if (operation.type === _Operation.OperationType.MERGE && operation.source.queryId !== null) {
            (0, _assert.assert)(this.viewCache_.getCompleteServerSnap(), 'We should always have a full cache before handling merges');
            (0, _assert.assert)(this.viewCache_.getCompleteEventSnap(), 'Missing event cache, even though we have a server cache');
        }
        var oldViewCache = this.viewCache_;
        var result = this.processor_.applyOperation(oldViewCache, operation, writesCache, completeServerCache);
        this.processor_.assertIndexed(result.viewCache);
        (0, _assert.assert)(result.viewCache.getServerCache().isFullyInitialized() || !oldViewCache.getServerCache().isFullyInitialized(), 'Once a server snap is complete, it should never go back');
        this.viewCache_ = result.viewCache;
        return this.generateEventsForChanges_(result.changes, result.viewCache.getEventCache().getNode(), null);
    };
    /**
     * @param {!EventRegistration} registration
     * @return {!Array.<!Event>}
     */
    View.prototype.getInitialEvents = function (registration) {
        var eventSnap = this.viewCache_.getEventCache();
        var initialChanges = [];
        if (!eventSnap.getNode().isLeafNode()) {
            var eventNode = eventSnap.getNode();
            eventNode.forEachChild(_PriorityIndex.PRIORITY_INDEX, function (key, childNode) {
                initialChanges.push(_Change.Change.childAddedChange(key, childNode));
            });
        }
        if (eventSnap.isFullyInitialized()) {
            initialChanges.push(_Change.Change.valueChange(eventSnap.getNode()));
        }
        return this.generateEventsForChanges_(initialChanges, eventSnap.getNode(), registration);
    };
    /**
     * @private
     * @param {!Array.<!Change>} changes
     * @param {!Node} eventCache
     * @param {EventRegistration=} eventRegistration
     * @return {!Array.<!Event>}
     */
    View.prototype.generateEventsForChanges_ = function (changes, eventCache, eventRegistration) {
        var registrations = eventRegistration ? [eventRegistration] : this.eventRegistrations_;
        return this.eventGenerator_.generateEventsForChanges(changes, eventCache, registrations);
    };
    return View;
}();
exports.View = View;
//# sourceMappingURL=View.js.map


/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*! @license Firebase v4.5.0
Build: rev-f49c8b5
Terms: https://firebase.google.com/terms/ */



Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ViewProcessor = exports.ProcessorResult = undefined;

var _Operation = __webpack_require__(15);

var _assert = __webpack_require__(2);

var _ChildChangeAccumulator = __webpack_require__(109);

var _Change = __webpack_require__(30);

var _ChildrenNode = __webpack_require__(8);

var _KeyIndex = __webpack_require__(33);

var _ImmutableTree = __webpack_require__(46);

var _Path = __webpack_require__(5);

var _CompleteChildSource = __webpack_require__(110);

/**
 * @constructor
 * @struct
 */
var ProcessorResult = /** @class */function () {
    /**
     * @param {!ViewCache} viewCache
     * @param {!Array.<!Change>} changes
     */
    function ProcessorResult(viewCache, changes) {
        this.viewCache = viewCache;
        this.changes = changes;
    }
    return ProcessorResult;
}(); /**
      * Copyright 2017 Google Inc.
      *
      * Licensed under the Apache License, Version 2.0 (the "License");
      * you may not use this file except in compliance with the License.
      * You may obtain a copy of the License at
      *
      *   http://www.apache.org/licenses/LICENSE-2.0
      *
      * Unless required by applicable law or agreed to in writing, software
      * distributed under the License is distributed on an "AS IS" BASIS,
      * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
      * See the License for the specific language governing permissions and
      * limitations under the License.
      */
exports.ProcessorResult = ProcessorResult;
/**
 * @constructor
 */

var ViewProcessor = /** @class */function () {
    /**
     * @param {!NodeFilter} filter_
     */
    function ViewProcessor(filter_) {
        this.filter_ = filter_;
    }
    /**
     * @param {!ViewCache} viewCache
     */
    ViewProcessor.prototype.assertIndexed = function (viewCache) {
        (0, _assert.assert)(viewCache.getEventCache().getNode().isIndexed(this.filter_.getIndex()), 'Event snap not indexed');
        (0, _assert.assert)(viewCache.getServerCache().getNode().isIndexed(this.filter_.getIndex()), 'Server snap not indexed');
    };
    /**
     * @param {!ViewCache} oldViewCache
     * @param {!Operation} operation
     * @param {!WriteTreeRef} writesCache
     * @param {?Node} completeCache
     * @return {!ProcessorResult}
     */
    ViewProcessor.prototype.applyOperation = function (oldViewCache, operation, writesCache, completeCache) {
        var accumulator = new _ChildChangeAccumulator.ChildChangeAccumulator();
        var newViewCache, filterServerNode;
        if (operation.type === _Operation.OperationType.OVERWRITE) {
            var overwrite = operation;
            if (overwrite.source.fromUser) {
                newViewCache = this.applyUserOverwrite_(oldViewCache, overwrite.path, overwrite.snap, writesCache, completeCache, accumulator);
            } else {
                (0, _assert.assert)(overwrite.source.fromServer, 'Unknown source.');
                // We filter the node if it's a tagged update or the node has been previously filtered  and the
                // update is not at the root in which case it is ok (and necessary) to mark the node unfiltered
                // again
                filterServerNode = overwrite.source.tagged || oldViewCache.getServerCache().isFiltered() && !overwrite.path.isEmpty();
                newViewCache = this.applyServerOverwrite_(oldViewCache, overwrite.path, overwrite.snap, writesCache, completeCache, filterServerNode, accumulator);
            }
        } else if (operation.type === _Operation.OperationType.MERGE) {
            var merge = operation;
            if (merge.source.fromUser) {
                newViewCache = this.applyUserMerge_(oldViewCache, merge.path, merge.children, writesCache, completeCache, accumulator);
            } else {
                (0, _assert.assert)(merge.source.fromServer, 'Unknown source.');
                // We filter the node if it's a tagged update or the node has been previously filtered
                filterServerNode = merge.source.tagged || oldViewCache.getServerCache().isFiltered();
                newViewCache = this.applyServerMerge_(oldViewCache, merge.path, merge.children, writesCache, completeCache, filterServerNode, accumulator);
            }
        } else if (operation.type === _Operation.OperationType.ACK_USER_WRITE) {
            var ackUserWrite = operation;
            if (!ackUserWrite.revert) {
                newViewCache = this.ackUserWrite_(oldViewCache, ackUserWrite.path, ackUserWrite.affectedTree, writesCache, completeCache, accumulator);
            } else {
                newViewCache = this.revertUserWrite_(oldViewCache, ackUserWrite.path, writesCache, completeCache, accumulator);
            }
        } else if (operation.type === _Operation.OperationType.LISTEN_COMPLETE) {
            newViewCache = this.listenComplete_(oldViewCache, operation.path, writesCache, accumulator);
        } else {
            throw (0, _assert.assertionError)('Unknown operation type: ' + operation.type);
        }
        var changes = accumulator.getChanges();
        ViewProcessor.maybeAddValueEvent_(oldViewCache, newViewCache, changes);
        return new ProcessorResult(newViewCache, changes);
    };
    /**
     * @param {!ViewCache} oldViewCache
     * @param {!ViewCache} newViewCache
     * @param {!Array.<!Change>} accumulator
     * @private
     */
    ViewProcessor.maybeAddValueEvent_ = function (oldViewCache, newViewCache, accumulator) {
        var eventSnap = newViewCache.getEventCache();
        if (eventSnap.isFullyInitialized()) {
            var isLeafOrEmpty = eventSnap.getNode().isLeafNode() || eventSnap.getNode().isEmpty();
            var oldCompleteSnap = oldViewCache.getCompleteEventSnap();
            if (accumulator.length > 0 || !oldViewCache.getEventCache().isFullyInitialized() || isLeafOrEmpty && !eventSnap.getNode().equals /** @type {!Node} */(oldCompleteSnap) || !eventSnap.getNode().getPriority().equals(oldCompleteSnap.getPriority())) {
                accumulator.push(_Change.Change.valueChange(
                /** @type {!Node} */newViewCache.getCompleteEventSnap()));
            }
        }
    };
    /**
     * @param {!ViewCache} viewCache
     * @param {!Path} changePath
     * @param {!WriteTreeRef} writesCache
     * @param {!CompleteChildSource} source
     * @param {!ChildChangeAccumulator} accumulator
     * @return {!ViewCache}
     * @private
     */
    ViewProcessor.prototype.generateEventCacheAfterServerEvent_ = function (viewCache, changePath, writesCache, source, accumulator) {
        var oldEventSnap = viewCache.getEventCache();
        if (writesCache.shadowingWrite(changePath) != null) {
            // we have a shadowing write, ignore changes
            return viewCache;
        } else {
            var newEventCache = void 0,
                serverNode = void 0;
            if (changePath.isEmpty()) {
                // TODO: figure out how this plays with "sliding ack windows"
                (0, _assert.assert)(viewCache.getServerCache().isFullyInitialized(), 'If change path is empty, we must have complete server data');
                if (viewCache.getServerCache().isFiltered()) {
                    // We need to special case this, because we need to only apply writes to complete children, or
                    // we might end up raising events for incomplete children. If the server data is filtered deep
                    // writes cannot be guaranteed to be complete
                    var serverCache = viewCache.getCompleteServerSnap();
                    var completeChildren = serverCache instanceof _ChildrenNode.ChildrenNode ? serverCache : _ChildrenNode.ChildrenNode.EMPTY_NODE;
                    var completeEventChildren = writesCache.calcCompleteEventChildren(completeChildren);
                    newEventCache = this.filter_.updateFullNode(viewCache.getEventCache().getNode(), completeEventChildren, accumulator);
                } else {
                    var completeNode = writesCache.calcCompleteEventCache(viewCache.getCompleteServerSnap());
                    newEventCache = this.filter_.updateFullNode(viewCache.getEventCache().getNode(), completeNode, accumulator);
                }
            } else {
                var childKey = changePath.getFront();
                if (childKey == '.priority') {
                    (0, _assert.assert)(changePath.getLength() == 1, "Can't have a priority with additional path components");
                    var oldEventNode = oldEventSnap.getNode();
                    serverNode = viewCache.getServerCache().getNode();
                    // we might have overwrites for this priority
                    var updatedPriority = writesCache.calcEventCacheAfterServerOverwrite(changePath, oldEventNode, serverNode);
                    if (updatedPriority != null) {
                        newEventCache = this.filter_.updatePriority(oldEventNode, updatedPriority);
                    } else {
                        // priority didn't change, keep old node
                        newEventCache = oldEventSnap.getNode();
                    }
                } else {
                    var childChangePath = changePath.popFront();
                    // update child
                    var newEventChild = void 0;
                    if (oldEventSnap.isCompleteForChild(childKey)) {
                        serverNode = viewCache.getServerCache().getNode();
                        var eventChildUpdate = writesCache.calcEventCacheAfterServerOverwrite(changePath, oldEventSnap.getNode(), serverNode);
                        if (eventChildUpdate != null) {
                            newEventChild = oldEventSnap.getNode().getImmediateChild(childKey).updateChild(childChangePath, eventChildUpdate);
                        } else {
                            // Nothing changed, just keep the old child
                            newEventChild = oldEventSnap.getNode().getImmediateChild(childKey);
                        }
                    } else {
                        newEventChild = writesCache.calcCompleteChild(childKey, viewCache.getServerCache());
                    }
                    if (newEventChild != null) {
                        newEventCache = this.filter_.updateChild(oldEventSnap.getNode(), childKey, newEventChild, childChangePath, source, accumulator);
                    } else {
                        // no complete child available or no change
                        newEventCache = oldEventSnap.getNode();
                    }
                }
            }
            return viewCache.updateEventSnap(newEventCache, oldEventSnap.isFullyInitialized() || changePath.isEmpty(), this.filter_.filtersNodes());
        }
    };
    /**
     * @param {!ViewCache} oldViewCache
     * @param {!Path} changePath
     * @param {!Node} changedSnap
     * @param {!WriteTreeRef} writesCache
     * @param {?Node} completeCache
     * @param {boolean} filterServerNode
     * @param {!ChildChangeAccumulator} accumulator
     * @return {!ViewCache}
     * @private
     */
    ViewProcessor.prototype.applyServerOverwrite_ = function (oldViewCache, changePath, changedSnap, writesCache, completeCache, filterServerNode, accumulator) {
        var oldServerSnap = oldViewCache.getServerCache();
        var newServerCache;
        var serverFilter = filterServerNode ? this.filter_ : this.filter_.getIndexedFilter();
        if (changePath.isEmpty()) {
            newServerCache = serverFilter.updateFullNode(oldServerSnap.getNode(), changedSnap, null);
        } else if (serverFilter.filtersNodes() && !oldServerSnap.isFiltered()) {
            // we want to filter the server node, but we didn't filter the server node yet, so simulate a full update
            var newServerNode = oldServerSnap.getNode().updateChild(changePath, changedSnap);
            newServerCache = serverFilter.updateFullNode(oldServerSnap.getNode(), newServerNode, null);
        } else {
            var childKey = changePath.getFront();
            if (!oldServerSnap.isCompleteForPath(changePath) && changePath.getLength() > 1) {
                // We don't update incomplete nodes with updates intended for other listeners
                return oldViewCache;
            }
            var childChangePath = changePath.popFront();
            var childNode = oldServerSnap.getNode().getImmediateChild(childKey);
            var newChildNode = childNode.updateChild(childChangePath, changedSnap);
            if (childKey == '.priority') {
                newServerCache = serverFilter.updatePriority(oldServerSnap.getNode(), newChildNode);
            } else {
                newServerCache = serverFilter.updateChild(oldServerSnap.getNode(), childKey, newChildNode, childChangePath, _CompleteChildSource.NO_COMPLETE_CHILD_SOURCE, null);
            }
        }
        var newViewCache = oldViewCache.updateServerSnap(newServerCache, oldServerSnap.isFullyInitialized() || changePath.isEmpty(), serverFilter.filtersNodes());
        var source = new _CompleteChildSource.WriteTreeCompleteChildSource(writesCache, newViewCache, completeCache);
        return this.generateEventCacheAfterServerEvent_(newViewCache, changePath, writesCache, source, accumulator);
    };
    /**
     * @param {!ViewCache} oldViewCache
     * @param {!Path} changePath
     * @param {!Node} changedSnap
     * @param {!WriteTreeRef} writesCache
     * @param {?Node} completeCache
     * @param {!ChildChangeAccumulator} accumulator
     * @return {!ViewCache}
     * @private
     */
    ViewProcessor.prototype.applyUserOverwrite_ = function (oldViewCache, changePath, changedSnap, writesCache, completeCache, accumulator) {
        var oldEventSnap = oldViewCache.getEventCache();
        var newViewCache, newEventCache;
        var source = new _CompleteChildSource.WriteTreeCompleteChildSource(writesCache, oldViewCache, completeCache);
        if (changePath.isEmpty()) {
            newEventCache = this.filter_.updateFullNode(oldViewCache.getEventCache().getNode(), changedSnap, accumulator);
            newViewCache = oldViewCache.updateEventSnap(newEventCache, true, this.filter_.filtersNodes());
        } else {
            var childKey = changePath.getFront();
            if (childKey === '.priority') {
                newEventCache = this.filter_.updatePriority(oldViewCache.getEventCache().getNode(), changedSnap);
                newViewCache = oldViewCache.updateEventSnap(newEventCache, oldEventSnap.isFullyInitialized(), oldEventSnap.isFiltered());
            } else {
                var childChangePath = changePath.popFront();
                var oldChild = oldEventSnap.getNode().getImmediateChild(childKey);
                var newChild = void 0;
                if (childChangePath.isEmpty()) {
                    // Child overwrite, we can replace the child
                    newChild = changedSnap;
                } else {
                    var childNode = source.getCompleteChild(childKey);
                    if (childNode != null) {
                        if (childChangePath.getBack() === '.priority' && childNode.getChild(childChangePath.parent()).isEmpty()) {
                            // This is a priority update on an empty node. If this node exists on the server, the
                            // server will send down the priority in the update, so ignore for now
                            newChild = childNode;
                        } else {
                            newChild = childNode.updateChild(childChangePath, changedSnap);
                        }
                    } else {
                        // There is no complete child node available
                        newChild = _ChildrenNode.ChildrenNode.EMPTY_NODE;
                    }
                }
                if (!oldChild.equals(newChild)) {
                    var newEventSnap = this.filter_.updateChild(oldEventSnap.getNode(), childKey, newChild, childChangePath, source, accumulator);
                    newViewCache = oldViewCache.updateEventSnap(newEventSnap, oldEventSnap.isFullyInitialized(), this.filter_.filtersNodes());
                } else {
                    newViewCache = oldViewCache;
                }
            }
        }
        return newViewCache;
    };
    /**
     * @param {!ViewCache} viewCache
     * @param {string} childKey
     * @return {boolean}
     * @private
     */
    ViewProcessor.cacheHasChild_ = function (viewCache, childKey) {
        return viewCache.getEventCache().isCompleteForChild(childKey);
    };
    /**
     * @param {!ViewCache} viewCache
     * @param {!Path} path
     * @param {ImmutableTree.<!Node>} changedChildren
     * @param {!WriteTreeRef} writesCache
     * @param {?Node} serverCache
     * @param {!ChildChangeAccumulator} accumulator
     * @return {!ViewCache}
     * @private
     */
    ViewProcessor.prototype.applyUserMerge_ = function (viewCache, path, changedChildren, writesCache, serverCache, accumulator) {
        var _this = this;
        // HACK: In the case of a limit query, there may be some changes that bump things out of the
        // window leaving room for new items.  It's important we process these changes first, so we
        // iterate the changes twice, first processing any that affect items currently in view.
        // TODO: I consider an item "in view" if cacheHasChild is true, which checks both the server
        // and event snap.  I'm not sure if this will result in edge cases when a child is in one but
        // not the other.
        var curViewCache = viewCache;
        changedChildren.foreach(function (relativePath, childNode) {
            var writePath = path.child(relativePath);
            if (ViewProcessor.cacheHasChild_(viewCache, writePath.getFront())) {
                curViewCache = _this.applyUserOverwrite_(curViewCache, writePath, childNode, writesCache, serverCache, accumulator);
            }
        });
        changedChildren.foreach(function (relativePath, childNode) {
            var writePath = path.child(relativePath);
            if (!ViewProcessor.cacheHasChild_(viewCache, writePath.getFront())) {
                curViewCache = _this.applyUserOverwrite_(curViewCache, writePath, childNode, writesCache, serverCache, accumulator);
            }
        });
        return curViewCache;
    };
    /**
     * @param {!Node} node
     * @param {ImmutableTree.<!Node>} merge
     * @return {!Node}
     * @private
     */
    ViewProcessor.prototype.applyMerge_ = function (node, merge) {
        merge.foreach(function (relativePath, childNode) {
            node = node.updateChild(relativePath, childNode);
        });
        return node;
    };
    /**
     * @param {!ViewCache} viewCache
     * @param {!Path} path
     * @param {!ImmutableTree.<!Node>} changedChildren
     * @param {!WriteTreeRef} writesCache
     * @param {?Node} serverCache
     * @param {boolean} filterServerNode
     * @param {!ChildChangeAccumulator} accumulator
     * @return {!ViewCache}
     * @private
     */
    ViewProcessor.prototype.applyServerMerge_ = function (viewCache, path, changedChildren, writesCache, serverCache, filterServerNode, accumulator) {
        var _this = this;
        // If we don't have a cache yet, this merge was intended for a previously listen in the same location. Ignore it and
        // wait for the complete data update coming soon.
        if (viewCache.getServerCache().getNode().isEmpty() && !viewCache.getServerCache().isFullyInitialized()) {
            return viewCache;
        }
        // HACK: In the case of a limit query, there may be some changes that bump things out of the
        // window leaving room for new items.  It's important we process these changes first, so we
        // iterate the changes twice, first processing any that affect items currently in view.
        // TODO: I consider an item "in view" if cacheHasChild is true, which checks both the server
        // and event snap.  I'm not sure if this will result in edge cases when a child is in one but
        // not the other.
        var curViewCache = viewCache;
        var viewMergeTree;
        if (path.isEmpty()) {
            viewMergeTree = changedChildren;
        } else {
            viewMergeTree = _ImmutableTree.ImmutableTree.Empty.setTree(path, changedChildren);
        }
        var serverNode = viewCache.getServerCache().getNode();
        viewMergeTree.children.inorderTraversal(function (childKey, childTree) {
            if (serverNode.hasChild(childKey)) {
                var serverChild = viewCache.getServerCache().getNode().getImmediateChild(childKey);
                var newChild = _this.applyMerge_(serverChild, childTree);
                curViewCache = _this.applyServerOverwrite_(curViewCache, new _Path.Path(childKey), newChild, writesCache, serverCache, filterServerNode, accumulator);
            }
        });
        viewMergeTree.children.inorderTraversal(function (childKey, childMergeTree) {
            var isUnknownDeepMerge = !viewCache.getServerCache().isCompleteForChild(childKey) && childMergeTree.value == null;
            if (!serverNode.hasChild(childKey) && !isUnknownDeepMerge) {
                var serverChild = viewCache.getServerCache().getNode().getImmediateChild(childKey);
                var newChild = _this.applyMerge_(serverChild, childMergeTree);
                curViewCache = _this.applyServerOverwrite_(curViewCache, new _Path.Path(childKey), newChild, writesCache, serverCache, filterServerNode, accumulator);
            }
        });
        return curViewCache;
    };
    /**
     * @param {!ViewCache} viewCache
     * @param {!Path} ackPath
     * @param {!ImmutableTree<!boolean>} affectedTree
     * @param {!WriteTreeRef} writesCache
     * @param {?Node} completeCache
     * @param {!ChildChangeAccumulator} accumulator
     * @return {!ViewCache}
     * @private
     */
    ViewProcessor.prototype.ackUserWrite_ = function (viewCache, ackPath, affectedTree, writesCache, completeCache, accumulator) {
        if (writesCache.shadowingWrite(ackPath) != null) {
            return viewCache;
        }
        // Only filter server node if it is currently filtered
        var filterServerNode = viewCache.getServerCache().isFiltered();
        // Essentially we'll just get our existing server cache for the affected paths and re-apply it as a server update
        // now that it won't be shadowed.
        var serverCache = viewCache.getServerCache();
        if (affectedTree.value != null) {
            // This is an overwrite.
            if (ackPath.isEmpty() && serverCache.isFullyInitialized() || serverCache.isCompleteForPath(ackPath)) {
                return this.applyServerOverwrite_(viewCache, ackPath, serverCache.getNode().getChild(ackPath), writesCache, completeCache, filterServerNode, accumulator);
            } else if (ackPath.isEmpty()) {
                // This is a goofy edge case where we are acking data at this location but don't have full data.  We
                // should just re-apply whatever we have in our cache as a merge.
                var changedChildren_1 = _ImmutableTree.ImmutableTree.Empty;
                serverCache.getNode().forEachChild(_KeyIndex.KEY_INDEX, function (name, node) {
                    changedChildren_1 = changedChildren_1.set(new _Path.Path(name), node);
                });
                return this.applyServerMerge_(viewCache, ackPath, changedChildren_1, writesCache, completeCache, filterServerNode, accumulator);
            } else {
                return viewCache;
            }
        } else {
            // This is a merge.
            var changedChildren_2 = _ImmutableTree.ImmutableTree.Empty;
            affectedTree.foreach(function (mergePath, value) {
                var serverCachePath = ackPath.child(mergePath);
                if (serverCache.isCompleteForPath(serverCachePath)) {
                    changedChildren_2 = changedChildren_2.set(mergePath, serverCache.getNode().getChild(serverCachePath));
                }
            });
            return this.applyServerMerge_(viewCache, ackPath, changedChildren_2, writesCache, completeCache, filterServerNode, accumulator);
        }
    };
    /**
     * @param {!ViewCache} viewCache
     * @param {!Path} path
     * @param {!WriteTreeRef} writesCache
     * @param {!ChildChangeAccumulator} accumulator
     * @return {!ViewCache}
     * @private
     */
    ViewProcessor.prototype.listenComplete_ = function (viewCache, path, writesCache, accumulator) {
        var oldServerNode = viewCache.getServerCache();
        var newViewCache = viewCache.updateServerSnap(oldServerNode.getNode(), oldServerNode.isFullyInitialized() || path.isEmpty(), oldServerNode.isFiltered());
        return this.generateEventCacheAfterServerEvent_(newViewCache, path, writesCache, _CompleteChildSource.NO_COMPLETE_CHILD_SOURCE, accumulator);
    };
    /**
     * @param {!ViewCache} viewCache
     * @param {!Path} path
     * @param {!WriteTreeRef} writesCache
     * @param {?Node} completeServerCache
     * @param {!ChildChangeAccumulator} accumulator
     * @return {!ViewCache}
     * @private
     */
    ViewProcessor.prototype.revertUserWrite_ = function (viewCache, path, writesCache, completeServerCache, accumulator) {
        var complete;
        if (writesCache.shadowingWrite(path) != null) {
            return viewCache;
        } else {
            var source = new _CompleteChildSource.WriteTreeCompleteChildSource(writesCache, viewCache, completeServerCache);
            var oldEventCache = viewCache.getEventCache().getNode();
            var newEventCache = void 0;
            if (path.isEmpty() || path.getFront() === '.priority') {
                var newNode = void 0;
                if (viewCache.getServerCache().isFullyInitialized()) {
                    newNode = writesCache.calcCompleteEventCache(viewCache.getCompleteServerSnap());
                } else {
                    var serverChildren = viewCache.getServerCache().getNode();
                    (0, _assert.assert)(serverChildren instanceof _ChildrenNode.ChildrenNode, 'serverChildren would be complete if leaf node');
                    newNode = writesCache.calcCompleteEventChildren(serverChildren);
                }
                newNode = newNode;
                newEventCache = this.filter_.updateFullNode(oldEventCache, newNode, accumulator);
            } else {
                var childKey = path.getFront();
                var newChild = writesCache.calcCompleteChild(childKey, viewCache.getServerCache());
                if (newChild == null && viewCache.getServerCache().isCompleteForChild(childKey)) {
                    newChild = oldEventCache.getImmediateChild(childKey);
                }
                if (newChild != null) {
                    newEventCache = this.filter_.updateChild(oldEventCache, childKey, newChild, path.popFront(), source, accumulator);
                } else if (viewCache.getEventCache().getNode().hasChild(childKey)) {
                    // No complete child available, delete the existing one, if any
                    newEventCache = this.filter_.updateChild(oldEventCache, childKey, _ChildrenNode.ChildrenNode.EMPTY_NODE, path.popFront(), source, accumulator);
                } else {
                    newEventCache = oldEventCache;
                }
                if (newEventCache.isEmpty() && viewCache.getServerCache().isFullyInitialized()) {
                    // We might have reverted all child writes. Maybe the old event was a leaf node
                    complete = writesCache.calcCompleteEventCache(viewCache.getCompleteServerSnap());
                    if (complete.isLeafNode()) {
                        newEventCache = this.filter_.updateFullNode(newEventCache, complete, accumulator);
                    }
                }
            }
            complete = viewCache.getServerCache().isFullyInitialized() || writesCache.shadowingWrite(_Path.Path.Empty) != null;
            return viewCache.updateEventSnap(newEventCache, complete, this.filter_.filtersNodes());
        }
    };
    return ViewProcessor;
}();
exports.ViewProcessor = ViewProcessor;
//# sourceMappingURL=ViewProcessor.js.map


/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*! @license Firebase v4.5.0
Build: rev-f49c8b5
Terms: https://firebase.google.com/terms/ */



Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.LimitedFilter = undefined;

var _RangedFilter = __webpack_require__(74);

var _ChildrenNode = __webpack_require__(8);

var _Node = __webpack_require__(10);

var _assert = __webpack_require__(2);

var _Change = __webpack_require__(30);

/**
 * Applies a limit and a range to a node and uses RangedFilter to do the heavy lifting where possible
 *
 * @constructor
 * @implements {NodeFilter}
 */
var LimitedFilter = /** @class */function () {
    /**
     * @param {!QueryParams} params
     */
    function LimitedFilter(params) {
        this.rangedFilter_ = new _RangedFilter.RangedFilter(params);
        this.index_ = params.getIndex();
        this.limit_ = params.getLimit();
        this.reverse_ = !params.isViewFromLeft();
    }
    /**
     * @inheritDoc
     */
    LimitedFilter.prototype.updateChild = function (snap, key, newChild, affectedPath, source, optChangeAccumulator) {
        if (!this.rangedFilter_.matches(new _Node.NamedNode(key, newChild))) {
            newChild = _ChildrenNode.ChildrenNode.EMPTY_NODE;
        }
        if (snap.getImmediateChild(key).equals(newChild)) {
            // No change
            return snap;
        } else if (snap.numChildren() < this.limit_) {
            return this.rangedFilter_.getIndexedFilter().updateChild(snap, key, newChild, affectedPath, source, optChangeAccumulator);
        } else {
            return this.fullLimitUpdateChild_(snap, key, newChild, source, optChangeAccumulator);
        }
    };
    /**
     * @inheritDoc
     */
    LimitedFilter.prototype.updateFullNode = function (oldSnap, newSnap, optChangeAccumulator) {
        var filtered;
        if (newSnap.isLeafNode() || newSnap.isEmpty()) {
            // Make sure we have a children node with the correct index, not a leaf node;
            filtered = _ChildrenNode.ChildrenNode.EMPTY_NODE.withIndex(this.index_);
        } else {
            if (this.limit_ * 2 < newSnap.numChildren() && newSnap.isIndexed(this.index_)) {
                // Easier to build up a snapshot, since what we're given has more than twice the elements we want
                filtered = _ChildrenNode.ChildrenNode.EMPTY_NODE.withIndex(this.index_);
                // anchor to the startPost, endPost, or last element as appropriate
                var iterator = void 0;
                if (this.reverse_) {
                    iterator = newSnap.getReverseIteratorFrom(this.rangedFilter_.getEndPost(), this.index_);
                } else {
                    iterator = newSnap.getIteratorFrom(this.rangedFilter_.getStartPost(), this.index_);
                }
                var count = 0;
                while (iterator.hasNext() && count < this.limit_) {
                    var next = iterator.getNext();
                    var inRange = void 0;
                    if (this.reverse_) {
                        inRange = this.index_.compare(this.rangedFilter_.getStartPost(), next) <= 0;
                    } else {
                        inRange = this.index_.compare(next, this.rangedFilter_.getEndPost()) <= 0;
                    }
                    if (inRange) {
                        filtered = filtered.updateImmediateChild(next.name, next.node);
                        count++;
                    } else {
                        // if we have reached the end post, we cannot keep adding elemments
                        break;
                    }
                }
            } else {
                // The snap contains less than twice the limit. Faster to delete from the snap than build up a new one
                filtered = newSnap.withIndex(this.index_);
                // Don't support priorities on queries
                filtered = filtered.updatePriority(_ChildrenNode.ChildrenNode.EMPTY_NODE);
                var startPost = void 0;
                var endPost = void 0;
                var cmp = void 0;
                var iterator = void 0;
                if (this.reverse_) {
                    iterator = filtered.getReverseIterator(this.index_);
                    startPost = this.rangedFilter_.getEndPost();
                    endPost = this.rangedFilter_.getStartPost();
                    var indexCompare_1 = this.index_.getCompare();
                    cmp = function cmp(a, b) {
                        return indexCompare_1(b, a);
                    };
                } else {
                    iterator = filtered.getIterator(this.index_);
                    startPost = this.rangedFilter_.getStartPost();
                    endPost = this.rangedFilter_.getEndPost();
                    cmp = this.index_.getCompare();
                }
                var count = 0;
                var foundStartPost = false;
                while (iterator.hasNext()) {
                    var next = iterator.getNext();
                    if (!foundStartPost && cmp(startPost, next) <= 0) {
                        // start adding
                        foundStartPost = true;
                    }
                    var inRange = foundStartPost && count < this.limit_ && cmp(next, endPost) <= 0;
                    if (inRange) {
                        count++;
                    } else {
                        filtered = filtered.updateImmediateChild(next.name, _ChildrenNode.ChildrenNode.EMPTY_NODE);
                    }
                }
            }
        }
        return this.rangedFilter_.getIndexedFilter().updateFullNode(oldSnap, filtered, optChangeAccumulator);
    };
    /**
     * @inheritDoc
     */
    LimitedFilter.prototype.updatePriority = function (oldSnap, newPriority) {
        // Don't support priorities on queries
        return oldSnap;
    };
    /**
     * @inheritDoc
     */
    LimitedFilter.prototype.filtersNodes = function () {
        return true;
    };
    /**
     * @inheritDoc
     */
    LimitedFilter.prototype.getIndexedFilter = function () {
        return this.rangedFilter_.getIndexedFilter();
    };
    /**
     * @inheritDoc
     */
    LimitedFilter.prototype.getIndex = function () {
        return this.index_;
    };
    /**
     * @param {!Node} snap
     * @param {string} childKey
     * @param {!Node} childSnap
     * @param {!CompleteChildSource} source
     * @param {?ChildChangeAccumulator} changeAccumulator
     * @return {!Node}
     * @private
     */
    LimitedFilter.prototype.fullLimitUpdateChild_ = function (snap, childKey, childSnap, source, changeAccumulator) {
        // TODO: rename all cache stuff etc to general snap terminology
        var cmp;
        if (this.reverse_) {
            var indexCmp_1 = this.index_.getCompare();
            cmp = function cmp(a, b) {
                return indexCmp_1(b, a);
            };
        } else {
            cmp = this.index_.getCompare();
        }
        var oldEventCache = snap;
        (0, _assert.assert)(oldEventCache.numChildren() == this.limit_, '');
        var newChildNamedNode = new _Node.NamedNode(childKey, childSnap);
        var windowBoundary = this.reverse_ ? oldEventCache.getFirstChild(this.index_) : oldEventCache.getLastChild(this.index_);
        var inRange = this.rangedFilter_.matches(newChildNamedNode);
        if (oldEventCache.hasChild(childKey)) {
            var oldChildSnap = oldEventCache.getImmediateChild(childKey);
            var nextChild = source.getChildAfterChild(this.index_, windowBoundary, this.reverse_);
            while (nextChild != null && (nextChild.name == childKey || oldEventCache.hasChild(nextChild.name))) {
                // There is a weird edge case where a node is updated as part of a merge in the write tree, but hasn't
                // been applied to the limited filter yet. Ignore this next child which will be updated later in
                // the limited filter...
                nextChild = source.getChildAfterChild(this.index_, nextChild, this.reverse_);
            }
            var compareNext = nextChild == null ? 1 : cmp(nextChild, newChildNamedNode);
            var remainsInWindow = inRange && !childSnap.isEmpty() && compareNext >= 0;
            if (remainsInWindow) {
                if (changeAccumulator != null) {
                    changeAccumulator.trackChildChange(_Change.Change.childChangedChange(childKey, childSnap, oldChildSnap));
                }
                return oldEventCache.updateImmediateChild(childKey, childSnap);
            } else {
                if (changeAccumulator != null) {
                    changeAccumulator.trackChildChange(_Change.Change.childRemovedChange(childKey, oldChildSnap));
                }
                var newEventCache = oldEventCache.updateImmediateChild(childKey, _ChildrenNode.ChildrenNode.EMPTY_NODE);
                var nextChildInRange = nextChild != null && this.rangedFilter_.matches(nextChild);
                if (nextChildInRange) {
                    if (changeAccumulator != null) {
                        changeAccumulator.trackChildChange(_Change.Change.childAddedChange(nextChild.name, nextChild.node));
                    }
                    return newEventCache.updateImmediateChild(nextChild.name, nextChild.node);
                } else {
                    return newEventCache;
                }
            }
        } else if (childSnap.isEmpty()) {
            // we're deleting a node, but it was not in the window, so ignore it
            return snap;
        } else if (inRange) {
            if (cmp(windowBoundary, newChildNamedNode) >= 0) {
                if (changeAccumulator != null) {
                    changeAccumulator.trackChildChange(_Change.Change.childRemovedChange(windowBoundary.name, windowBoundary.node));
                    changeAccumulator.trackChildChange(_Change.Change.childAddedChange(childKey, childSnap));
                }
                return oldEventCache.updateImmediateChild(childKey, childSnap).updateImmediateChild(windowBoundary.name, _ChildrenNode.ChildrenNode.EMPTY_NODE);
            } else {
                return snap;
            }
        } else {
            return snap;
        }
    };
    return LimitedFilter;
}(); /**
      * Copyright 2017 Google Inc.
      *
      * Licensed under the Apache License, Version 2.0 (the "License");
      * you may not use this file except in compliance with the License.
      * You may obtain a copy of the License at
      *
      *   http://www.apache.org/licenses/LICENSE-2.0
      *
      * Unless required by applicable law or agreed to in writing, software
      * distributed under the License is distributed on an "AS IS" BASIS,
      * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
      * See the License for the specific language governing permissions and
      * limitations under the License.
      */
exports.LimitedFilter = LimitedFilter;
//# sourceMappingURL=LimitedFilter.js.map


/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*! @license Firebase v4.5.0
Build: rev-f49c8b5
Terms: https://firebase.google.com/terms/ */



Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TransportManager = undefined;

var _BrowserPollConnection = __webpack_require__(75);

var _WebSocketConnection = __webpack_require__(77);

var _util = __webpack_require__(3);

/**
 * Currently simplistic, this class manages what transport a Connection should use at various stages of its
 * lifecycle.
 *
 * It starts with longpolling in a browser, and httppolling on node. It then upgrades to websockets if
 * they are available.
 * @constructor
 */
var TransportManager = /** @class */function () {
    /**
     * @param {!RepoInfo} repoInfo Metadata around the namespace we're connecting to
     */
    function TransportManager(repoInfo) {
        this.initTransports_(repoInfo);
    }
    Object.defineProperty(TransportManager, "ALL_TRANSPORTS", {
        /**
         * @const
         * @type {!Array.<function(new:Transport, string, RepoInfo, string=)>}
         */
        get: function get() {
            return [_BrowserPollConnection.BrowserPollConnection, _WebSocketConnection.WebSocketConnection];
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {!RepoInfo} repoInfo
     * @private
     */
    TransportManager.prototype.initTransports_ = function (repoInfo) {
        var isWebSocketsAvailable = _WebSocketConnection.WebSocketConnection && _WebSocketConnection.WebSocketConnection['isAvailable']();
        var isSkipPollConnection = isWebSocketsAvailable && !_WebSocketConnection.WebSocketConnection.previouslyFailed();
        if (repoInfo.webSocketOnly) {
            if (!isWebSocketsAvailable) (0, _util.warn)("wss:// URL used, but browser isn't known to support websockets.  Trying anyway.");
            isSkipPollConnection = true;
        }
        if (isSkipPollConnection) {
            this.transports_ = [_WebSocketConnection.WebSocketConnection];
        } else {
            var transports_1 = this.transports_ = [];
            (0, _util.each)(TransportManager.ALL_TRANSPORTS, function (i, transport) {
                if (transport && transport['isAvailable']()) {
                    transports_1.push(transport);
                }
            });
        }
    };
    /**
     * @return {function(new:Transport, !string, !RepoInfo, string=, string=)} The constructor for the
     * initial transport to use
     */
    TransportManager.prototype.initialTransport = function () {
        if (this.transports_.length > 0) {
            return this.transports_[0];
        } else {
            throw new Error('No transports available');
        }
    };
    /**
     * @return {?function(new:Transport, function(),function(), string=)} The constructor for the next
     * transport, or null
     */
    TransportManager.prototype.upgradeTransport = function () {
        if (this.transports_.length > 1) {
            return this.transports_[1];
        } else {
            return null;
        }
    };
    return TransportManager;
}(); /**
      * Copyright 2017 Google Inc.
      *
      * Licensed under the Apache License, Version 2.0 (the "License");
      * you may not use this file except in compliance with the License.
      * You may obtain a copy of the License at
      *
      *   http://www.apache.org/licenses/LICENSE-2.0
      *
      * Unless required by applicable law or agreed to in writing, software
      * distributed under the License is distributed on an "AS IS" BASIS,
      * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
      * See the License for the specific language governing permissions and
      * limitations under the License.
      */
exports.TransportManager = TransportManager;
//# sourceMappingURL=TransportManager.js.map


/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*! @license Firebase v4.5.0
Build: rev-f49c8b5
Terms: https://firebase.google.com/terms/ */



Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PacketReceiver = undefined;

var _util = __webpack_require__(3);

/**
 * This class ensures the packets from the server arrive in order
 * This class takes data from the server and ensures it gets passed into the callbacks in order.
 * @constructor
 */
var PacketReceiver = /** @class */function () {
    /**
     * @param onMessage_
     */
    function PacketReceiver(onMessage_) {
        this.onMessage_ = onMessage_;
        this.pendingResponses = [];
        this.currentResponseNum = 0;
        this.closeAfterResponse = -1;
        this.onClose = null;
    }
    PacketReceiver.prototype.closeAfter = function (responseNum, callback) {
        this.closeAfterResponse = responseNum;
        this.onClose = callback;
        if (this.closeAfterResponse < this.currentResponseNum) {
            this.onClose();
            this.onClose = null;
        }
    };
    /**
     * Each message from the server comes with a response number, and an array of data. The responseNumber
     * allows us to ensure that we process them in the right order, since we can't be guaranteed that all
     * browsers will respond in the same order as the requests we sent
     * @param {number} requestNum
     * @param {Array} data
     */
    PacketReceiver.prototype.handleResponse = function (requestNum, data) {
        var _this = this;
        this.pendingResponses[requestNum] = data;
        var _loop_1 = function _loop_1() {
            var toProcess = this_1.pendingResponses[this_1.currentResponseNum];
            delete this_1.pendingResponses[this_1.currentResponseNum];
            var _loop_2 = function _loop_2(i) {
                if (toProcess[i]) {
                    (0, _util.exceptionGuard)(function () {
                        _this.onMessage_(toProcess[i]);
                    });
                }
            };
            for (var i = 0; i < toProcess.length; ++i) {
                _loop_2(i);
            }
            if (this_1.currentResponseNum === this_1.closeAfterResponse) {
                if (this_1.onClose) {
                    this_1.onClose();
                    this_1.onClose = null;
                }
                return "break";
            }
            this_1.currentResponseNum++;
        };
        var this_1 = this;
        while (this.pendingResponses[this.currentResponseNum]) {
            var state_1 = _loop_1();
            if (state_1 === "break") break;
        }
    };
    return PacketReceiver;
}(); /**
      * Copyright 2017 Google Inc.
      *
      * Licensed under the Apache License, Version 2.0 (the "License");
      * you may not use this file except in compliance with the License.
      * You may obtain a copy of the License at
      *
      *   http://www.apache.org/licenses/LICENSE-2.0
      *
      * Unless required by applicable law or agreed to in writing, software
      * distributed under the License is distributed on an "AS IS" BASIS,
      * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
      * See the License for the specific language governing permissions and
      * limitations under the License.
      */
exports.PacketReceiver = PacketReceiver;
//# sourceMappingURL=PacketReceiver.js.map


/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(setImmediate) {(function (root) {

  // Store setTimeout reference so promise-polyfill will be unaffected by
  // other code modifying setTimeout (like sinon.useFakeTimers())
  var setTimeoutFunc = setTimeout;

  function noop() {}
  
  // Polyfill for Function.prototype.bind
  function bind(fn, thisArg) {
    return function () {
      fn.apply(thisArg, arguments);
    };
  }

  function Promise(fn) {
    if (typeof this !== 'object') throw new TypeError('Promises must be constructed via new');
    if (typeof fn !== 'function') throw new TypeError('not a function');
    this._state = 0;
    this._handled = false;
    this._value = undefined;
    this._deferreds = [];

    doResolve(fn, this);
  }

  function handle(self, deferred) {
    while (self._state === 3) {
      self = self._value;
    }
    if (self._state === 0) {
      self._deferreds.push(deferred);
      return;
    }
    self._handled = true;
    Promise._immediateFn(function () {
      var cb = self._state === 1 ? deferred.onFulfilled : deferred.onRejected;
      if (cb === null) {
        (self._state === 1 ? resolve : reject)(deferred.promise, self._value);
        return;
      }
      var ret;
      try {
        ret = cb(self._value);
      } catch (e) {
        reject(deferred.promise, e);
        return;
      }
      resolve(deferred.promise, ret);
    });
  }

  function resolve(self, newValue) {
    try {
      // Promise Resolution Procedure: https://github.com/promises-aplus/promises-spec#the-promise-resolution-procedure
      if (newValue === self) throw new TypeError('A promise cannot be resolved with itself.');
      if (newValue && (typeof newValue === 'object' || typeof newValue === 'function')) {
        var then = newValue.then;
        if (newValue instanceof Promise) {
          self._state = 3;
          self._value = newValue;
          finale(self);
          return;
        } else if (typeof then === 'function') {
          doResolve(bind(then, newValue), self);
          return;
        }
      }
      self._state = 1;
      self._value = newValue;
      finale(self);
    } catch (e) {
      reject(self, e);
    }
  }

  function reject(self, newValue) {
    self._state = 2;
    self._value = newValue;
    finale(self);
  }

  function finale(self) {
    if (self._state === 2 && self._deferreds.length === 0) {
      Promise._immediateFn(function() {
        if (!self._handled) {
          Promise._unhandledRejectionFn(self._value);
        }
      });
    }

    for (var i = 0, len = self._deferreds.length; i < len; i++) {
      handle(self, self._deferreds[i]);
    }
    self._deferreds = null;
  }

  function Handler(onFulfilled, onRejected, promise) {
    this.onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : null;
    this.onRejected = typeof onRejected === 'function' ? onRejected : null;
    this.promise = promise;
  }

  /**
   * Take a potentially misbehaving resolver function and make sure
   * onFulfilled and onRejected are only called once.
   *
   * Makes no guarantees about asynchrony.
   */
  function doResolve(fn, self) {
    var done = false;
    try {
      fn(function (value) {
        if (done) return;
        done = true;
        resolve(self, value);
      }, function (reason) {
        if (done) return;
        done = true;
        reject(self, reason);
      });
    } catch (ex) {
      if (done) return;
      done = true;
      reject(self, ex);
    }
  }

  Promise.prototype['catch'] = function (onRejected) {
    return this.then(null, onRejected);
  };

  Promise.prototype.then = function (onFulfilled, onRejected) {
    var prom = new (this.constructor)(noop);

    handle(this, new Handler(onFulfilled, onRejected, prom));
    return prom;
  };

  Promise.all = function (arr) {
    var args = Array.prototype.slice.call(arr);

    return new Promise(function (resolve, reject) {
      if (args.length === 0) return resolve([]);
      var remaining = args.length;

      function res(i, val) {
        try {
          if (val && (typeof val === 'object' || typeof val === 'function')) {
            var then = val.then;
            if (typeof then === 'function') {
              then.call(val, function (val) {
                res(i, val);
              }, reject);
              return;
            }
          }
          args[i] = val;
          if (--remaining === 0) {
            resolve(args);
          }
        } catch (ex) {
          reject(ex);
        }
      }

      for (var i = 0; i < args.length; i++) {
        res(i, args[i]);
      }
    });
  };

  Promise.resolve = function (value) {
    if (value && typeof value === 'object' && value.constructor === Promise) {
      return value;
    }

    return new Promise(function (resolve) {
      resolve(value);
    });
  };

  Promise.reject = function (value) {
    return new Promise(function (resolve, reject) {
      reject(value);
    });
  };

  Promise.race = function (values) {
    return new Promise(function (resolve, reject) {
      for (var i = 0, len = values.length; i < len; i++) {
        values[i].then(resolve, reject);
      }
    });
  };

  // Use polyfill for setImmediate for performance gains
  Promise._immediateFn = (typeof setImmediate === 'function' && function (fn) { setImmediate(fn); }) ||
    function (fn) {
      setTimeoutFunc(fn, 0);
    };

  Promise._unhandledRejectionFn = function _unhandledRejectionFn(err) {
    if (typeof console !== 'undefined' && console) {
      console.warn('Possible Unhandled Promise Rejection:', err); // eslint-disable-line no-console
    }
  };

  /**
   * Set the immediate function to execute callbacks
   * @param fn {function} Function to execute
   * @deprecated
   */
  Promise._setImmediateFn = function _setImmediateFn(fn) {
    Promise._immediateFn = fn;
  };

  /**
   * Change the function to execute on unhandled rejection
   * @param {function} fn Function to execute on unhandled rejection
   * @deprecated
   */
  Promise._setUnhandledRejectionFn = function _setUnhandledRejectionFn(fn) {
    Promise._unhandledRejectionFn = fn;
  };
  
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = Promise;
  } else if (!root.Promise) {
    root.Promise = Promise;
  }

})(this);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6).setImmediate))

/***/ }),
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*! @license Firebase v4.5.0
Build: rev-f49c8b5
Terms: https://firebase.google.com/terms/ */



Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Sha1 = undefined;

var _hash = __webpack_require__(129);

/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var __extends = undefined && undefined.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();

/**
 * @fileoverview SHA-1 cryptographic hash.
 * Variable names follow the notation in FIPS PUB 180-3:
 * http://csrc.nist.gov/publications/fips/fips180-3/fips180-3_final.pdf.
 *
 * Usage:
 *   var sha1 = new sha1();
 *   sha1.update(bytes);
 *   var hash = sha1.digest();
 *
 * Performance:
 *   Chrome 23:   ~400 Mbit/s
 *   Firefox 16:  ~250 Mbit/s
 *
 */
/**
 * SHA-1 cryptographic hash constructor.
 *
 * The properties declared here are discussed in the above algorithm document.
 * @constructor
 * @extends {Hash}
 * @final
 * @struct
 */
var Sha1 = /** @class */function (_super) {
    __extends(Sha1, _super);
    function Sha1() {
        var _this = _super.call(this) || this;
        /**
         * Holds the previous values of accumulated variables a-e in the compress_
         * function.
         * @type {!Array<number>}
         * @private
         */
        _this.chain_ = [];
        /**
         * A buffer holding the partially computed hash result.
         * @type {!Array<number>}
         * @private
         */
        _this.buf_ = [];
        /**
         * An array of 80 bytes, each a part of the message to be hashed.  Referred to
         * as the message schedule in the docs.
         * @type {!Array<number>}
         * @private
         */
        _this.W_ = [];
        /**
         * Contains data needed to pad messages less than 64 bytes.
         * @type {!Array<number>}
         * @private
         */
        _this.pad_ = [];
        /**
         * @private {number}
         */
        _this.inbuf_ = 0;
        /**
         * @private {number}
         */
        _this.total_ = 0;
        _this.blockSize = 512 / 8;
        _this.pad_[0] = 128;
        for (var i = 1; i < _this.blockSize; ++i) {
            _this.pad_[i] = 0;
        }
        _this.reset();
        return _this;
    }
    Sha1.prototype.reset = function () {
        this.chain_[0] = 0x67452301;
        this.chain_[1] = 0xefcdab89;
        this.chain_[2] = 0x98badcfe;
        this.chain_[3] = 0x10325476;
        this.chain_[4] = 0xc3d2e1f0;
        this.inbuf_ = 0;
        this.total_ = 0;
    };
    /**
     * Internal compress helper function.
     * @param {!Array<number>|!Uint8Array|string} buf Block to compress.
     * @param {number=} opt_offset Offset of the block in the buffer.
     * @private
     */
    Sha1.prototype.compress_ = function (buf, opt_offset) {
        if (!opt_offset) {
            opt_offset = 0;
        }
        var W = this.W_;
        // get 16 big endian words
        if (typeof buf === 'string') {
            for (var i = 0; i < 16; i++) {
                // TODO(user): [bug 8140122] Recent versions of Safari for Mac OS and iOS
                // have a bug that turns the post-increment ++ operator into pre-increment
                // during JIT compilation.  We have code that depends heavily on SHA-1 for
                // correctness and which is affected by this bug, so I've removed all uses
                // of post-increment ++ in which the result value is used.  We can revert
                // this change once the Safari bug
                // (https://bugs.webkit.org/show_bug.cgi?id=109036) has been fixed and
                // most clients have been updated.
                W[i] = buf.charCodeAt(opt_offset) << 24 | buf.charCodeAt(opt_offset + 1) << 16 | buf.charCodeAt(opt_offset + 2) << 8 | buf.charCodeAt(opt_offset + 3);
                opt_offset += 4;
            }
        } else {
            for (var i = 0; i < 16; i++) {
                W[i] = buf[opt_offset] << 24 | buf[opt_offset + 1] << 16 | buf[opt_offset + 2] << 8 | buf[opt_offset + 3];
                opt_offset += 4;
            }
        }
        // expand to 80 words
        for (var i = 16; i < 80; i++) {
            var t = W[i - 3] ^ W[i - 8] ^ W[i - 14] ^ W[i - 16];
            W[i] = (t << 1 | t >>> 31) & 0xffffffff;
        }
        var a = this.chain_[0];
        var b = this.chain_[1];
        var c = this.chain_[2];
        var d = this.chain_[3];
        var e = this.chain_[4];
        var f, k;
        // TODO(user): Try to unroll this loop to speed up the computation.
        for (var i = 0; i < 80; i++) {
            if (i < 40) {
                if (i < 20) {
                    f = d ^ b & (c ^ d);
                    k = 0x5a827999;
                } else {
                    f = b ^ c ^ d;
                    k = 0x6ed9eba1;
                }
            } else {
                if (i < 60) {
                    f = b & c | d & (b | c);
                    k = 0x8f1bbcdc;
                } else {
                    f = b ^ c ^ d;
                    k = 0xca62c1d6;
                }
            }
            var t = (a << 5 | a >>> 27) + f + e + k + W[i] & 0xffffffff;
            e = d;
            d = c;
            c = (b << 30 | b >>> 2) & 0xffffffff;
            b = a;
            a = t;
        }
        this.chain_[0] = this.chain_[0] + a & 0xffffffff;
        this.chain_[1] = this.chain_[1] + b & 0xffffffff;
        this.chain_[2] = this.chain_[2] + c & 0xffffffff;
        this.chain_[3] = this.chain_[3] + d & 0xffffffff;
        this.chain_[4] = this.chain_[4] + e & 0xffffffff;
    };
    Sha1.prototype.update = function (bytes, opt_length) {
        // TODO(johnlenz): tighten the function signature and remove this check
        if (bytes == null) {
            return;
        }
        if (opt_length === undefined) {
            opt_length = bytes.length;
        }
        var lengthMinusBlock = opt_length - this.blockSize;
        var n = 0;
        // Using local instead of member variables gives ~5% speedup on Firefox 16.
        var buf = this.buf_;
        var inbuf = this.inbuf_;
        // The outer while loop should execute at most twice.
        while (n < opt_length) {
            // When we have no data in the block to top up, we can directly process the
            // input buffer (assuming it contains sufficient data). This gives ~25%
            // speedup on Chrome 23 and ~15% speedup on Firefox 16, but requires that
            // the data is provided in large chunks (or in multiples of 64 bytes).
            if (inbuf == 0) {
                while (n <= lengthMinusBlock) {
                    this.compress_(bytes, n);
                    n += this.blockSize;
                }
            }
            if (typeof bytes === 'string') {
                while (n < opt_length) {
                    buf[inbuf] = bytes.charCodeAt(n);
                    ++inbuf;
                    ++n;
                    if (inbuf == this.blockSize) {
                        this.compress_(buf);
                        inbuf = 0;
                        // Jump to the outer loop so we use the full-block optimization.
                        break;
                    }
                }
            } else {
                while (n < opt_length) {
                    buf[inbuf] = bytes[n];
                    ++inbuf;
                    ++n;
                    if (inbuf == this.blockSize) {
                        this.compress_(buf);
                        inbuf = 0;
                        // Jump to the outer loop so we use the full-block optimization.
                        break;
                    }
                }
            }
        }
        this.inbuf_ = inbuf;
        this.total_ += opt_length;
    };
    /** @override */
    Sha1.prototype.digest = function () {
        var digest = [];
        var totalBits = this.total_ * 8;
        // Add pad 0x80 0x00*.
        if (this.inbuf_ < 56) {
            this.update(this.pad_, 56 - this.inbuf_);
        } else {
            this.update(this.pad_, this.blockSize - (this.inbuf_ - 56));
        }
        // Add # bits.
        for (var i = this.blockSize - 1; i >= 56; i--) {
            this.buf_[i] = totalBits & 255;
            totalBits /= 256; // Don't use bit-shifting here!
        }
        this.compress_(this.buf_);
        var n = 0;
        for (var i = 0; i < 5; i++) {
            for (var j = 24; j >= 0; j -= 8) {
                digest[n] = this.chain_[i] >> j & 255;
                ++n;
            }
        }
        return digest;
    };
    return Sha1;
}(_hash.Hash);
exports.Sha1 = Sha1;
//# sourceMappingURL=Sha1.js.map


/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*! @license Firebase v4.5.0
Build: rev-f49c8b5
Terms: https://firebase.google.com/terms/ */



Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.base64 = undefined;

var _globalScope = __webpack_require__(79);

var stringToByteArray = function stringToByteArray(str) {
    var output = [],
        p = 0;
    for (var i = 0; i < str.length; i++) {
        var c = str.charCodeAt(i);
        while (c > 255) {
            output[p++] = c & 255;
            c >>= 8;
        }
        output[p++] = c;
    }
    return output;
};
/**
 * Turns an array of numbers into the string given by the concatenation of the
 * characters to which the numbers correspond.
 * @param {Array<number>} bytes Array of numbers representing characters.
 * @return {string} Stringification of the array.
 */
/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var byteArrayToString = function byteArrayToString(bytes) {
    var CHUNK_SIZE = 8192;
    // Special-case the simple case for speed's sake.
    if (bytes.length < CHUNK_SIZE) {
        return String.fromCharCode.apply(null, bytes);
    }
    // The remaining logic splits conversion by chunks since
    // Function#apply() has a maximum parameter count.
    // See discussion: http://goo.gl/LrWmZ9
    var str = '';
    for (var i = 0; i < bytes.length; i += CHUNK_SIZE) {
        var chunk = bytes.slice(i, i + CHUNK_SIZE);
        str += String.fromCharCode.apply(null, chunk);
    }
    return str;
};
// Static lookup maps, lazily populated by init_()
var base64 = exports.base64 = {
    /**
     * Maps bytes to characters.
     * @type {Object}
     * @private
     */
    byteToCharMap_: null,
    /**
     * Maps characters to bytes.
     * @type {Object}
     * @private
     */
    charToByteMap_: null,
    /**
     * Maps bytes to websafe characters.
     * @type {Object}
     * @private
     */
    byteToCharMapWebSafe_: null,
    /**
     * Maps websafe characters to bytes.
     * @type {Object}
     * @private
     */
    charToByteMapWebSafe_: null,
    /**
     * Our default alphabet, shared between
     * ENCODED_VALS and ENCODED_VALS_WEBSAFE
     * @type {string}
     */
    ENCODED_VALS_BASE: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' + 'abcdefghijklmnopqrstuvwxyz' + '0123456789',
    /**
     * Our default alphabet. Value 64 (=) is special; it means "nothing."
     * @type {string}
     */
    get ENCODED_VALS() {
        return this.ENCODED_VALS_BASE + '+/=';
    },
    /**
     * Our websafe alphabet.
     * @type {string}
     */
    get ENCODED_VALS_WEBSAFE() {
        return this.ENCODED_VALS_BASE + '-_.';
    },
    /**
     * Whether this browser supports the atob and btoa functions. This extension
     * started at Mozilla but is now implemented by many browsers. We use the
     * ASSUME_* variables to avoid pulling in the full useragent detection library
     * but still allowing the standard per-browser compilations.
     *
     * @type {boolean}
     */
    HAS_NATIVE_SUPPORT: typeof _globalScope.globalScope.atob === 'function',
    /**
     * Base64-encode an array of bytes.
     *
     * @param {Array<number>|Uint8Array} input An array of bytes (numbers with
     *     value in [0, 255]) to encode.
     * @param {boolean=} opt_webSafe Boolean indicating we should use the
     *     alternative alphabet.
     * @return {string} The base64 encoded string.
     */
    encodeByteArray: function encodeByteArray(input, opt_webSafe) {
        if (!Array.isArray(input)) {
            throw Error('encodeByteArray takes an array as a parameter');
        }
        this.init_();
        var byteToCharMap = opt_webSafe ? this.byteToCharMapWebSafe_ : this.byteToCharMap_;
        var output = [];
        for (var i = 0; i < input.length; i += 3) {
            var byte1 = input[i];
            var haveByte2 = i + 1 < input.length;
            var byte2 = haveByte2 ? input[i + 1] : 0;
            var haveByte3 = i + 2 < input.length;
            var byte3 = haveByte3 ? input[i + 2] : 0;
            var outByte1 = byte1 >> 2;
            var outByte2 = (byte1 & 0x03) << 4 | byte2 >> 4;
            var outByte3 = (byte2 & 0x0f) << 2 | byte3 >> 6;
            var outByte4 = byte3 & 0x3f;
            if (!haveByte3) {
                outByte4 = 64;
                if (!haveByte2) {
                    outByte3 = 64;
                }
            }
            output.push(byteToCharMap[outByte1], byteToCharMap[outByte2], byteToCharMap[outByte3], byteToCharMap[outByte4]);
        }
        return output.join('');
    },
    /**
     * Base64-encode a string.
     *
     * @param {string} input A string to encode.
     * @param {boolean=} opt_webSafe If true, we should use the
     *     alternative alphabet.
     * @return {string} The base64 encoded string.
     */
    encodeString: function encodeString(input, opt_webSafe) {
        // Shortcut for Mozilla browsers that implement
        // a native base64 encoder in the form of "btoa/atob"
        if (this.HAS_NATIVE_SUPPORT && !opt_webSafe) {
            return btoa(input);
        }
        return this.encodeByteArray(stringToByteArray(input), opt_webSafe);
    },
    /**
     * Base64-decode a string.
     *
     * @param {string} input to decode.
     * @param {boolean=} opt_webSafe True if we should use the
     *     alternative alphabet.
     * @return {string} string representing the decoded value.
     */
    decodeString: function decodeString(input, opt_webSafe) {
        // Shortcut for Mozilla browsers that implement
        // a native base64 encoder in the form of "btoa/atob"
        if (this.HAS_NATIVE_SUPPORT && !opt_webSafe) {
            return atob(input);
        }
        return byteArrayToString(this.decodeStringToByteArray(input, opt_webSafe));
    },
    /**
     * Base64-decode a string.
     *
     * In base-64 decoding, groups of four characters are converted into three
     * bytes.  If the encoder did not apply padding, the input length may not
     * be a multiple of 4.
     *
     * In this case, the last group will have fewer than 4 characters, and
     * padding will be inferred.  If the group has one or two characters, it decodes
     * to one byte.  If the group has three characters, it decodes to two bytes.
     *
     * @param {string} input Input to decode.
     * @param {boolean=} opt_webSafe True if we should use the web-safe alphabet.
     * @return {!Array<number>} bytes representing the decoded value.
     */
    decodeStringToByteArray: function decodeStringToByteArray(input, opt_webSafe) {
        this.init_();
        var charToByteMap = opt_webSafe ? this.charToByteMapWebSafe_ : this.charToByteMap_;
        var output = [];
        for (var i = 0; i < input.length;) {
            var byte1 = charToByteMap[input.charAt(i++)];
            var haveByte2 = i < input.length;
            var byte2 = haveByte2 ? charToByteMap[input.charAt(i)] : 0;
            ++i;
            var haveByte3 = i < input.length;
            var byte3 = haveByte3 ? charToByteMap[input.charAt(i)] : 64;
            ++i;
            var haveByte4 = i < input.length;
            var byte4 = haveByte4 ? charToByteMap[input.charAt(i)] : 64;
            ++i;
            if (byte1 == null || byte2 == null || byte3 == null || byte4 == null) {
                throw Error();
            }
            var outByte1 = byte1 << 2 | byte2 >> 4;
            output.push(outByte1);
            if (byte3 != 64) {
                var outByte2 = byte2 << 4 & 0xf0 | byte3 >> 2;
                output.push(outByte2);
                if (byte4 != 64) {
                    var outByte3 = byte3 << 6 & 0xc0 | byte4;
                    output.push(outByte3);
                }
            }
        }
        return output;
    },
    /**
     * Lazy static initialization function. Called before
     * accessing any of the static map variables.
     * @private
     */
    init_: function init_() {
        if (!this.byteToCharMap_) {
            this.byteToCharMap_ = {};
            this.charToByteMap_ = {};
            this.byteToCharMapWebSafe_ = {};
            this.charToByteMapWebSafe_ = {};
            // We want quick mappings back and forth, so we precompute two maps.
            for (var i = 0; i < this.ENCODED_VALS.length; i++) {
                this.byteToCharMap_[i] = this.ENCODED_VALS.charAt(i);
                this.charToByteMap_[this.byteToCharMap_[i]] = i;
                this.byteToCharMapWebSafe_[i] = this.ENCODED_VALS_WEBSAFE.charAt(i);
                this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]] = i;
                // Be forgiving when decoding and correctly decode both encodings.
                if (i >= this.ENCODED_VALS_BASE.length) {
                    this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)] = i;
                    this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)] = i;
                }
            }
        }
    }
};
//# sourceMappingURL=crypt.js.map


/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*! @license Firebase v4.5.0
Build: rev-f49c8b5
Terms: https://firebase.google.com/terms/ */



Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// Copyright 2011 The Closure Library Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
/**
 * @fileoverview Abstract cryptographic hash interface.
 *
 * See Sha1 and Md5 for sample implementations.
 *
 */
/**
 * Create a cryptographic hash instance.
 *
 * @constructor
 * @struct
 */
var Hash = /** @class */function () {
  function Hash() {
    /**
     * The block size for the hasher.
     * @type {number}
     */
    this.blockSize = -1;
  }
  return Hash;
}();
exports.Hash = Hash;
//# sourceMappingURL=hash.js.map


/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*! @license Firebase v4.5.0
Build: rev-f49c8b5
Terms: https://firebase.google.com/terms/ */



Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isAdmin = exports.isValidFormat = exports.issuedAtTime = exports.isValidTimestamp = exports.decode = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /**
                                                                                                                                                                                                                                                                               * Copyright 2017 Google Inc.
                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                               * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                               * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                               * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                               *   http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                               * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                               * distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                               * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                               * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                               * limitations under the License.
                                                                                                                                                                                                                                                                               */


var _util = __webpack_require__(3);

var _json = __webpack_require__(14);

/**
 * Decodes a Firebase auth. token into constituent parts.
 *
 * Notes:
 * - May return with invalid / incomplete claims if there's no native base64 decoding support.
 * - Doesn't check if the token is actually valid.
 *
 * @param {?string} token
 * @return {{header: *, claims: *, data: *, signature: string}}
 */
var decode = exports.decode = function decode(token) {
    var header = {},
        claims = {},
        data = {},
        signature = '';
    try {
        var parts = token.split('.');
        header = (0, _json.jsonEval)((0, _util.base64Decode)(parts[0]) || '');
        claims = (0, _json.jsonEval)((0, _util.base64Decode)(parts[1]) || '');
        signature = parts[2];
        data = claims['d'] || {};
        delete claims['d'];
    } catch (e) {}
    return {
        header: header,
        claims: claims,
        data: data,
        signature: signature
    };
};
/**
 * Decodes a Firebase auth. token and checks the validity of its time-based claims. Will return true if the
 * token is within the time window authorized by the 'nbf' (not-before) and 'iat' (issued-at) claims.
 *
 * Notes:
 * - May return a false negative if there's no native base64 decoding support.
 * - Doesn't check if the token is actually valid.
 *
 * @param {?string} token
 * @return {boolean}
 */
var isValidTimestamp = exports.isValidTimestamp = function isValidTimestamp(token) {
    var claims = decode(token).claims,
        now = Math.floor(new Date().getTime() / 1000),
        validSince,
        validUntil;
    if ((typeof claims === 'undefined' ? 'undefined' : _typeof(claims)) === 'object') {
        if (claims.hasOwnProperty('nbf')) {
            validSince = claims['nbf'];
        } else if (claims.hasOwnProperty('iat')) {
            validSince = claims['iat'];
        }
        if (claims.hasOwnProperty('exp')) {
            validUntil = claims['exp'];
        } else {
            // token will expire after 24h by default
            validUntil = validSince + 86400;
        }
    }
    return now && validSince && validUntil && now >= validSince && now <= validUntil;
};
/**
 * Decodes a Firebase auth. token and returns its issued at time if valid, null otherwise.
 *
 * Notes:
 * - May return null if there's no native base64 decoding support.
 * - Doesn't check if the token is actually valid.
 *
 * @param {?string} token
 * @return {?number}
 */
var issuedAtTime = exports.issuedAtTime = function issuedAtTime(token) {
    var claims = decode(token).claims;
    if ((typeof claims === 'undefined' ? 'undefined' : _typeof(claims)) === 'object' && claims.hasOwnProperty('iat')) {
        return claims['iat'];
    }
    return null;
};
/**
 * Decodes a Firebase auth. token and checks the validity of its format. Expects a valid issued-at time and non-empty
 * signature.
 *
 * Notes:
 * - May return a false negative if there's no native base64 decoding support.
 * - Doesn't check if the token is actually valid.
 *
 * @param {?string} token
 * @return {boolean}
 */
var isValidFormat = exports.isValidFormat = function isValidFormat(token) {
    var decoded = decode(token),
        claims = decoded.claims;
    return !!decoded.signature && !!claims && (typeof claims === 'undefined' ? 'undefined' : _typeof(claims)) === 'object' && claims.hasOwnProperty('iat');
};
/**
 * Attempts to peer into an auth token and determine if it's an admin auth token by looking at the claims portion.
 *
 * Notes:
 * - May return a false negative if there's no native base64 decoding support.
 * - Doesn't check if the token is actually valid.
 *
 * @param {?string} token
 * @return {boolean}
 */
var isAdmin = exports.isAdmin = function isAdmin(token) {
    var claims = decode(token).claims;
    return (typeof claims === 'undefined' ? 'undefined' : _typeof(claims)) === 'object' && claims['admin'] === true;
};
//# sourceMappingURL=jwt.js.map


/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*! @license Firebase v4.5.0
Build: rev-f49c8b5
Terms: https://firebase.google.com/terms/ */



/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * This is the Array.prototype.findIndex polyfill from MDN
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
 * https://tc39.github.io/ecma262/#sec-array.prototype.findIndex
 */
if (!Array.prototype.findIndex) {
    Object.defineProperty(Array.prototype, 'findIndex', {
        value: function value(predicate) {
            // 1. Let O be ? ToObject(this value).
            if (this == null) {
                throw new TypeError('"this" is null or not defined');
            }
            var o = Object(this);
            // 2. Let len be ? ToLength(? Get(O, "length")).
            var len = o.length >>> 0;
            // 3. If IsCallable(predicate) is false, throw a TypeError exception.
            if (typeof predicate !== 'function') {
                throw new TypeError('predicate must be a function');
            }
            // 4. If thisArg was supplied, let T be thisArg; else let T be undefined.
            var thisArg = arguments[1];
            // 5. Let k be 0.
            var k = 0;
            // 6. Repeat, while k < len
            while (k < len) {
                // a. Let Pk be ! ToString(k).
                // b. Let kValue be ? Get(O, Pk).
                // c. Let testResult be ToBoolean(? Call(predicate, T, « kValue, k, O »)).
                // d. If testResult is true, return k.
                var kValue = o[k];
                if (predicate.call(thisArg, kValue, k, o)) {
                    return k;
                }
                // e. Increase k by 1.
                k++;
            }
            // 7. Return -1.
            return -1;
        }
    });
}
/**
 * This is the Array.prototype.find polyfill from MDN
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
 * https://tc39.github.io/ecma262/#sec-array.prototype.find
 */
if (!Array.prototype.find) {
    Object.defineProperty(Array.prototype, 'find', {
        value: function value(predicate) {
            // 1. Let O be ? ToObject(this value).
            if (this == null) {
                throw new TypeError('"this" is null or not defined');
            }
            var o = Object(this);
            // 2. Let len be ? ToLength(? Get(O, "length")).
            var len = o.length >>> 0;
            // 3. If IsCallable(predicate) is false, throw a TypeError exception.
            if (typeof predicate !== 'function') {
                throw new TypeError('predicate must be a function');
            }
            // 4. If thisArg was supplied, let T be thisArg; else let T be undefined.
            var thisArg = arguments[1];
            // 5. Let k be 0.
            var k = 0;
            // 6. Repeat, while k < len
            while (k < len) {
                // a. Let Pk be ! ToString(k).
                // b. Let kValue be ? Get(O, Pk).
                // c. Let testResult be ToBoolean(? Call(predicate, T, « kValue, k, O »)).
                // d. If testResult is true, return kValue.
                var kValue = o[k];
                if (predicate.call(thisArg, kValue, k, o)) {
                    return kValue;
                }
                // e. Increase k by 1.
                k++;
            }
            // 7. Return undefined.
            return undefined;
        }
    });
}
//# sourceMappingURL=shims.js.map


/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*! @license Firebase v4.5.0
Build: rev-f49c8b5
Terms: https://firebase.google.com/terms/ */



Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.querystringDecode = exports.querystring = undefined;

var _obj = __webpack_require__(4);

/**
 * Returns a querystring-formatted string (e.g. &arg=val&arg2=val2) from a params
 * object (e.g. {arg: 'val', arg2: 'val2'})
 * Note: You must prepend it with ? when adding it to a URL.
 *
 * @param {!Object} querystringParams
 * @return {string}
 */
var querystring = exports.querystring = function querystring(querystringParams) {
    var params = [];
    (0, _obj.forEach)(querystringParams, function (key, value) {
        if (Array.isArray(value)) {
            value.forEach(function (arrayVal) {
                params.push(encodeURIComponent(key) + '=' + encodeURIComponent(arrayVal));
            });
        } else {
            params.push(encodeURIComponent(key) + '=' + encodeURIComponent(value));
        }
    });
    return params.length ? '&' + params.join('&') : '';
};
/**
 * Decodes a querystring (e.g. ?arg=val&arg2=val2) into a params object (e.g. {arg: 'val', arg2: 'val2'})
 *
 * @param {string} querystring
 * @return {!Object}
 */
/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var querystringDecode = exports.querystringDecode = function querystringDecode(querystring) {
    var obj = {};
    var tokens = querystring.replace(/^\?/, '').split('&');
    tokens.forEach(function (token) {
        if (token) {
            var key = token.split('=');
            obj[key[0]] = key[1];
        }
    });
    return obj;
};
//# sourceMappingURL=util.js.map


/***/ }),
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./messages.en.njk": [
		226,
		1
	],
	"./messages.es.njk": [
		227,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
module.exports = webpackAsyncContext;
webpackAsyncContext.id = 151;

/***/ }),
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _app = __webpack_require__(28);

var firebase = _interopRequireWildcard(_app);

__webpack_require__(84);

__webpack_require__(85);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

// Initialize Firebase


// These imports load individual services into the firebase namespace.
var config = {
  apiKey: "AIzaSyADWQW2m0LOHMLhjbv27iQwQjVKLvIiqEw",
  authDomain: "secrets-74e91.firebaseapp.com",
  databaseURL: "https://secrets-74e91.firebaseio.com",
  projectId: "secrets-74e91"
}; // This import loads the firebase namespace along with all its type information.

firebase.initializeApp(config);

var language = localStorage['lng'] || 'en';

document.title = language == "es" ? "Mensajes" : "Messages";

//Load messages from firebase
var messages = firebase.database().ref('messages');
messages.on('value', function (snapshot) {
  snapshot.forEach(function (childSnapshot) {
    var key = childSnapshot.key;
    var childData = childSnapshot.val();
    console.log(key);
    console.log(childData);

    var dte = new Date(childData.timestamp * 1000);
    var name = childData.name;
    var email = childData.email;
    var message = childData.message;

    var title = document.createElement("div");
    title.style.height = "30px";
    title.style.background = "rgba(0,0,0,0.4)";
    title.style.color = "white";
    title.innerHTML = " On " + dte + " " + name + "/" + email + " wrote: ";

    var msg = document.createElement("div");
    msg.style.height = "80px";
    msg.style.background = "rgba(0,0,0,0.4)";
    msg.style.color = "white";

    var messagearea = document.createElement("div");
    messagearea.style.height = "60px";
    messagearea.style.background = "rgba(255,255,255,0.9)";
    messagearea.style.color = "rgba(0,0,0,0.4)";
    messagearea.style.margin = "0 15px";
    messagearea.style.padding = "5px 5px";
    messagearea.innerHTML = message;

    msg.appendChild(messagearea);

    var item = document.createElement('li');
    item.appendChild(title);
    item.appendChild(msg);
    document.getElementById("message-list").appendChild(item);
  });
});

var board = document.querySelector('#page-content');
__webpack_require__(151)("./messages." + language + '.njk').then(function (m) {
  console.log(m);
  var tpl = m;
  var html = tpl.render({});
  board.innerHTML = html;
});

/***/ })
/******/ ]);
//# sourceMappingURL=messageboard.js.map