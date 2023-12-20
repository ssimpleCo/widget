/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/ssimpleSdk.js":
/*!***************************!*\
  !*** ./src/ssimpleSdk.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass ssimpleWidget {\n\tinit = ({ appId: clientId, btnColor }) => {\n\t\t// this.clientId = clientId;\n\t\tthis.mountIframe(clientId, btnColor);\n\t}\n\n\tmountIframe = (clientId, btnColor) => {\n\t\tconst styleTag = `\n      <style>\n\t\t\t\t#ssimpleWidget {\n\t\t\t\t\tposition: fixed;\n\t\t\t\t\tbottom: 20px;\n\t\t\t\t\tright: 20px;\n\t\t\t\t\tz-index: 999999999 !important;\n\t\t\t\t}\n\t\t\t\t#ssimpleWidgetBtn {\n\t\t\t\t\tbox-sizing: border-box;\n\t\t\t\t\tmargin-left: auto;\n\t\t\t\t\tmargin-top: auto;\n\t\t\t\t\tdisplay: inline-flex;\n\t\t\t\t\theight: 3rem;\n\t\t\t\t\twidth: 3rem;\n\t\t\t\t\talign-items: center;\n\t\t\t\t\tjustify-content: center;\n\t\t\t\t\tborder-radius: 9999px;\n\t\t\t\t\tcolor: white;\n\t\t\t\t\tcursor: pointer;\n\t\t\t\t\tbackground-color: ` + btnColor + `;\n\t\t\t\t\tborder-style: none;\n\t\t\t\t}\n      </style>\n\t\t`;\n\n\t\tconst components = {\n\t\t\ticon_close: `<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><line x1=\"18\" x2=\"6\" y1=\"6\" y2=\"18\"></line><line x1=\"6\" x2=\"18\" y1=\"6\" y2=\"18\"></line></svg>`,\n\t\t\ticon_report: `<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M 12 24 C 5.373 24 0 18.627 0 12 C 0 5.373 5.373 0 12 0 L 24 0 L 24 12 C 24 18.627 18.627 24 12 24 Z M 13.019 5.272 L 10.981 5.272 L 10.981 7.31 L 13.019 7.31 L 13.019 5.272 Z M 13.057 13.115 L 12.788 8.251 L 11.212 8.251 L 10.943 13.115 L 10.943 18.728 L 13.057 18.728 L 13.057 13.115 Z\" style=\"fill: rgb(255, 255, 255); transform-origin: 12px 12px;\" transform=\"matrix(-1, 0, 0, -1, 0.000001907349, 0.000001907349)\"></path></svg>`,\n\t\t};\n\n\t\t// create iframe\n\t\tconst iframe = document.createElement('iframe');\n\t\tiframe.style.display = \"none\";\n\t\tiframe.style.border = \"none\";\n\t\tiframe.style.position = \"fixed\";\n\t\tiframe.style.inset = \"auto 15px 75px auto\";\n\t\tiframe.style.width = \"420px\";\n\t\tiframe.style.height = \"700px\";\n\t\tiframe.style.borderWidth = \"1px\";\n\t\tiframe.style.borderRadius = \"16px\";\n\t\tiframe.style.boxShadow = \"rgba(0, 0, 0, 0.16) 0px 5px 40px\";\n\t\tiframe.style.opacity = \"1\";\n\t\tiframe.style.maxWidth = \"100vw\";\n\t\tiframe.style.maxHeight = \"100vh\";\n\t\tiframe.style.visibility = \"visible\";\n\t\tiframe.style.zIndex = \"999999999\";\n\n\t\t// iframe.onload = () => {\n\t\t// \t// this.iframe.contentWindow.postMessage({\n\t\t// \tiframe.contentWindow.postMessage({\n\t\t// \t\ttype: 'INIT_IFRAME',\n\t\t// \t\tvalue: { clientId }\n\t\t// \t\t// value: { clientId: this.clientId }\n\t\t// \t}, 'http://localhost:3000/widget');\n\t\t// };\n\t\tiframe.src = 'https://' + clientId + '.ssimple.co/widget';\n\t\tiframe.crossorigin = \"anonymous\";\n\t\tthis.iframe = iframe;\n\t\t// window.addEventListener(\"message\", this.receiveMessage, false);\n\n\t\t// create widget trigger button\n\t\tconst btn = document.createElement('button');\n\t\tbtn.id = \"ssimpleWidgetBtn\";\n\t\tbtn.innerHTML = components.icon_report;\n\t\tbtn.addEventListener(\"click\", () => {\n\t\t\tif (btn.innerHTML === components.icon_report) {\n\t\t\t\tbtn.innerHTML = components.icon_close;\n\t\t\t\tiframe.style.display = \"block\";\n\t\t\t} else {\n\t\t\t\tbtn.innerHTML = components.icon_report;\n\t\t\t\tiframe.style.display = \"none\";\n\t\t\t}\n\t\t});\n\t\tthis.btn = btn;\n\n\t\tconst wrapper = document.createElement('div');\n\t\twrapper.id = \"ssimpleWidget\";\n\t\twrapper.appendChild(this.iframe);\n\t\twrapper.appendChild(this.btn);\n\n\t\tdocument.head.insertAdjacentHTML(\"beforeend\", styleTag);\n\t\tdocument.body.appendChild(wrapper);\n\t}\n\n\treceiveMessage = (event) => {\n\t\t// this is where we handle when our widget sends us a message\n\t\tif (!!event && !!event.data && !!event.data.type) {\n\t\t\tswitch (event.data.type) {\n\t\t\t\tcase 'BOOTSTRAP_DONE':\n\t\t\t\t\tthis.handleBootstrapDone();\n\t\t\t\t\tbreak;\n\t\t\t\tdefault:\n\t\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\n\thandleBootstrapDone = () => {\n\t\t// const ssimpleApi = window.ssimple;\n\t\t// these methods aren't filled out here, but you can\n\t\t// imagine what they might do\n\t\t// ssimpleApi.login = this.login;\n\t\t// ssimpleApi.signup = this.signup;\n\t\t// ssimpleApi.getCurrentUser = this.getCurrentUser;\n\t\t// ssimpleApi.setAttribute = this.setAttribute;\n\t\t// ssimpleApi.logout = this.logout;\n\t\t// ssimpleApi.debug = this.debug;\n\t\t// ssimpleApi._c = window.ssimple._c;\n\t\t// this.runPriorCalls();\n\t\t// window.ssimple = ssimpleApi;\n\t}\n\n\trunPriorCalls = () => {\n\t\twindow.ssimple._c.forEach(([method, args]) => {\n\t\t\tthis[method].apply(this, args);\n\t\t});\n\t}\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (((window) => {\n\tconst stubSdk = window.ssimple;\n\n\t// _c is the real name for the _beforeLoadCallQueue\n\t// const initCall = stubSdk._c.filter(call => call[0] === 'init');\n\tconst shim = new ssimpleWidget();\n\tstubSdk.init = shim.init;\n\t// initCall && shim.init(initCall[1]);\n})(__webpack_require__.g));\n\n\n//# sourceURL=webpack://ssimple-widget/./src/ssimpleSdk.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/ssimpleSdk.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;