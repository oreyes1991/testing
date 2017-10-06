/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 32);
/******/ })
/************************************************************************/
/******/ ({

/***/ 32:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _app = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"firebase/app\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var firebase = _interopRequireWildcard(_app);

__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"firebase/auth\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"firebase/database\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

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

// creates uuid
function uuidv4() {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, function (c) {
        return (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16);
    });
}

// shows message
function showMsg() {
    var language = localStorage['lng'] || 'en';
    var lildata = {
        'es': {
            title: 'Mensaje Enviado',
            subtitle: 'Le responderemos pronto'
        }, 'en': {
            title: 'Message sent',
            subtitle: 'We will contact you soon'
        } };

    document.querySelector('#msg-form').innerHTML = '</br><div style="text-align: center" class="col-md-12">' + '<h2>' + lildata[language].title + '</h2>' + '<h3>' + lildata[language].subtitle + '</h3>' + '</div>';
}

// Bind event to submit button
document.getElementById("send-msg").addEventListener("click", function () {
    var name = document.getElementById("form-name").value,
        email = document.getElementById("form-email").value,
        message = document.getElementById("form-message").value;

    //DB auth
    firebase.auth().signInAnonymously().catch(function (error) {
        console.log(error.code);
        console.log(error.message);
    });

    //DB post-auth event listener
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            // User is signed in.
            var isAnonymous = user.isAnonymous;
            var uid = user.uid;
            // ...
            var database = firebase.database();

            database.ref('messages/' + uuidv4()).set({
                name: name,
                email: email,
                message: message
            }).then(function (e) {
                // The message has been saved
                // Shows sent message
                showMsg();
            });
        } else {
            // User is signed out.
            // ...
        }
    });
});

/***/ })

/******/ });
//# sourceMappingURL=firebase.js.map