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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

// const formMessageCreation = document.querySelectorAll(".chat-box");
//
//
//
// const escapeHtml = (unsafe)  => {
//     return unsafe
//         .replace(/&/g, "&amp;")
//         .replace(/</g, "&lt;")
//         .replace(/>/g, "&gt;")
//         .replace(/"/g, "&quot;")
//         .replace(/'/g, "&#039;");
// };
//
// for (let i = 0; i < formMessageCreation.length; i++) {
//     formMessageCreation[i].addEventListener('keydown', (evt) => {
//         let chatBoxFirst = formMessageCreation[i].querySelector(".create-message");
//
//         let messages = formMessageCreation[i].querySelectorAll(".message_you");
//
//         let usersText = messages[messages.length - 1].querySelectorAll(".message__your-text");
//
//         if (evt.keyCode === 13) {
//             let inputText = formMessageCreation[i].querySelector(".create-message__text").value;
//             evt.preventDefault();
//             inputText = escapeHtml(inputText);
//             if (inputText.length > 0) {
//                 if (usersText.length === 1) {
//                     usersText[0].classList.add('message__your-text_first');
//                 } else {
//                     usersText[usersText.length - 1].classList.add('message__your-text_middle');
//                     usersText[usersText.length - 1].classList.remove('message__your-text_last');
//                 }
//                 let item = `<p class="message__your-text_last">${inputText}</p>`;
//                 if (inputText.length < 30) {
//                     item = `<p class="message__your-text_small message__your-text_last">${inputText}</p>`;
//                 }
//                 messages[messages.length - 1].innerHTML += item;
//
//                 messages[messages.length - 1].scrollTop = messages[messages.length - 1].scrollHeight;
//                 let elem = formMessageCreation[i].querySelector(".chat");
//                 elem.scrollTop = elem.scrollHeight;
//                 chatBoxFirst.reset();
//             }
//         }
//         if (evt.keyCode === 27) {
//             chatBoxFirst.reset();
//         }
//     }, false);
// }
//
//
//
//


/***/ })
/******/ ]);