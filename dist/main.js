/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css_files/cool.css":
/*!**********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css_files/cool.css ***!
  \**********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n    font-family: Cyber;\n    src: url(\"https://assets.codepen.io/605876/Blender-Pro-Bold.otf\");\n    font-display: swap;\n  }\n  \n  * {\n    box-sizing: border-box;\n  }\n  \n  \n  \n  .cybr-btn {\n    --primary: hsl(var(--primary-hue), 85%, calc(var(--primary-lightness, 50) * 1%));\n    --shadow-primary: hsl(var(--shadow-primary-hue), 90%, 50%);\n    --primary-hue: 0;\n    --primary-lightness: 50;\n    --color: hsl(0, 0%, 100%);\n    --font-size: 26px;\n    --shadow-primary-hue: 180;\n    --label-size: 9px;\n    --shadow-secondary-hue: 60;\n    --shadow-secondary: hsl(var(--shadow-secondary-hue), 90%, 60%);\n    --clip: polygon(0 0, 100% 0, 100% 100%, 95% 100%, 95% 90%, 85% 90%, 85% 100%, 8% 100%, 0 70%);\n    --border: 4px;\n    --shimmy-distance: 5;\n    --clip-one: polygon(0 2%, 100% 2%, 100% 95%, 95% 95%, 95% 90%, 85% 90%, 85% 95%, 8% 95%, 0 70%);\n    --clip-two: polygon(0 78%, 100% 78%, 100% 100%, 95% 100%, 95% 90%, 85% 90%, 85% 100%, 8% 100%, 0 78%);\n    --clip-three: polygon(0 44%, 100% 44%, 100% 54%, 95% 54%, 95% 54%, 85% 54%, 85% 54%, 8% 54%, 0 54%);\n    --clip-four: polygon(0 0, 100% 0, 100% 0, 95% 0, 95% 0, 85% 0, 85% 0, 8% 0, 0 0);\n    --clip-five: polygon(0 0, 100% 0, 100% 0, 95% 0, 95% 0, 85% 0, 85% 0, 8% 0, 0 0);\n    --clip-six: polygon(0 40%, 100% 40%, 100% 85%, 95% 85%, 95% 85%, 85% 85%, 85% 85%, 8% 85%, 0 70%);\n    --clip-seven: polygon(0 63%, 100% 63%, 100% 80%, 95% 80%, 95% 80%, 85% 80%, 85% 80%, 8% 80%, 0 70%);\n    font-family: 'Cyber', sans-serif;\n    color: var(--color);\n    cursor: pointer;\n    background: transparent;\n    text-transform: uppercase;\n    font-size: var(--font-size);\n    outline: transparent;\n    letter-spacing: 2px;\n    position: relative;\n    font-weight: 700;\n    border: 0;\n    min-width: 200px;\n    height: 50px;\n    line-height: 50px;\n    transition: background 0.2s;\n  }\n  \n  .cybr-btn:hover {\n    --primary: hsl(var(--primary-hue), 85%, calc(var(--primary-lightness, 50) * 0.8%));\n  }\n  .cybr-btn:active {\n    --primary: hsl(var(--primary-hue), 85%, calc(var(--primary-lightness, 50) * 0.6%));\n  }\n  \n  .cybr-btn:after,\n  .cybr-btn:before {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    clip-path: var(--clip);\n    z-index: -1;\n  }\n  \n  .cybr-btn:before {\n    background: var(--shadow-primary);\n    transform: translate(var(--border), 0);\n  }\n  \n  .cybr-btn:after {\n    background: var(--primary);\n  }\n  \n  .cybr-btn__tag {\n    position: absolute;\n    padding: 1px 4px;\n    letter-spacing: 1px;\n    line-height: 1;\n    bottom: -5%;\n    right: 5%;\n    font-weight: normal;\n    color: hsl(0, 0%, 0%);\n    font-size: var(--label-size);\n  }\n  \n  .cybr-btn__glitch {\n    position: absolute;\n    top: calc(var(--border) * -1);\n    left: calc(var(--border) * -1);\n    right: calc(var(--border) * -1);\n    bottom: calc(var(--border) * -1);\n    background: var(--shadow-primary);\n    text-shadow: 2px 2px var(--shadow-primary), -2px -2px var(--shadow-secondary);\n    clip-path: var(--clip);\n    animation: glitch 2s infinite;\n    display: none;\n  }\n  \n  .cybr-btn:hover .cybr-btn__glitch {\n    display: block;\n  }\n  \n  .cybr-btn__glitch:before {\n    content: '';\n    position: absolute;\n    top: calc(var(--border) * 1);\n    right: calc(var(--border) * 1);\n    bottom: calc(var(--border) * 1);\n    left: calc(var(--border) * 1);\n    clip-path: var(--clip);\n    background: var(--primary);\n    z-index: -1;\n  }\n  \n  @keyframes glitch {\n    0% {\n      clip-path: var(--clip-one);\n    }\n    2%, 8% {\n      clip-path: var(--clip-two);\n      transform: translate(calc(var(--shimmy-distance) * -1%), 0);\n    }\n    6% {\n      clip-path: var(--clip-two);\n      transform: translate(calc(var(--shimmy-distance) * 1%), 0);\n    }\n    9% {\n      clip-path: var(--clip-two);\n      transform: translate(0, 0);\n    }\n    10% {\n      clip-path: var(--clip-three);\n      transform: translate(calc(var(--shimmy-distance) * 1%), 0);\n    }\n    13% {\n      clip-path: var(--clip-three);\n      transform: translate(0, 0);\n    }\n    14%, 21% {\n      clip-path: var(--clip-four);\n      transform: translate(calc(var(--shimmy-distance) * 1%), 0);\n    }\n    25% {\n      clip-path: var(--clip-five);\n      transform: translate(calc(var(--shimmy-distance) * 1%), 0);\n    }\n    30% {\n      clip-path: var(--clip-five);\n      transform: translate(calc(var(--shimmy-distance) * -1%), 0);\n    }\n    35%, 45% {\n      clip-path: var(--clip-six);\n      transform: translate(calc(var(--shimmy-distance) * -1%));\n    }\n    40% {\n      clip-path: var(--clip-six);\n      transform: translate(calc(var(--shimmy-distance) * 1%));\n    }\n    50% {\n      clip-path: var(--clip-six);\n      transform: translate(0, 0);\n    }\n    55% {\n      clip-path: var(--clip-seven);\n      transform: translate(calc(var(--shimmy-distance) * 1%), 0);\n    }\n    60% {\n      clip-path: var(--clip-seven);\n      transform: translate(0, 0);\n    }\n    31%, 61%, 100% {\n      clip-path: var(--clip-four);\n    }\n  }\n  \n  .cybr-btn:nth-of-type(2) {\n    --primary-hue: 260;\n  }", "",{"version":3,"sources":["webpack://./src/css_files/cool.css"],"names":[],"mappings":"AAAA;IACI,kBAAkB;IAClB,iEAAiE;IACjE,kBAAkB;EACpB;;EAEA;IACE,sBAAsB;EACxB;;;;EAIA;IACE,gFAAgF;IAChF,0DAA0D;IAC1D,gBAAgB;IAChB,uBAAuB;IACvB,yBAAyB;IACzB,iBAAiB;IACjB,yBAAyB;IACzB,iBAAiB;IACjB,0BAA0B;IAC1B,8DAA8D;IAC9D,6FAA6F;IAC7F,aAAa;IACb,oBAAoB;IACpB,+FAA+F;IAC/F,qGAAqG;IACrG,mGAAmG;IACnG,gFAAgF;IAChF,gFAAgF;IAChF,iGAAiG;IACjG,mGAAmG;IACnG,gCAAgC;IAChC,mBAAmB;IACnB,eAAe;IACf,uBAAuB;IACvB,yBAAyB;IACzB,2BAA2B;IAC3B,oBAAoB;IACpB,mBAAmB;IACnB,kBAAkB;IAClB,gBAAgB;IAChB,SAAS;IACT,gBAAgB;IAChB,YAAY;IACZ,iBAAiB;IACjB,2BAA2B;EAC7B;;EAEA;IACE,kFAAkF;EACpF;EACA;IACE,kFAAkF;EACpF;;EAEA;;IAEE,WAAW;IACX,kBAAkB;IAClB,MAAM;IACN,OAAO;IACP,QAAQ;IACR,SAAS;IACT,sBAAsB;IACtB,WAAW;EACb;;EAEA;IACE,iCAAiC;IACjC,sCAAsC;EACxC;;EAEA;IACE,0BAA0B;EAC5B;;EAEA;IACE,kBAAkB;IAClB,gBAAgB;IAChB,mBAAmB;IACnB,cAAc;IACd,WAAW;IACX,SAAS;IACT,mBAAmB;IACnB,qBAAqB;IACrB,4BAA4B;EAC9B;;EAEA;IACE,kBAAkB;IAClB,6BAA6B;IAC7B,8BAA8B;IAC9B,+BAA+B;IAC/B,gCAAgC;IAChC,iCAAiC;IACjC,6EAA6E;IAC7E,sBAAsB;IACtB,6BAA6B;IAC7B,aAAa;EACf;;EAEA;IACE,cAAc;EAChB;;EAEA;IACE,WAAW;IACX,kBAAkB;IAClB,4BAA4B;IAC5B,8BAA8B;IAC9B,+BAA+B;IAC/B,6BAA6B;IAC7B,sBAAsB;IACtB,0BAA0B;IAC1B,WAAW;EACb;;EAEA;IACE;MACE,0BAA0B;IAC5B;IACA;MACE,0BAA0B;MAC1B,2DAA2D;IAC7D;IACA;MACE,0BAA0B;MAC1B,0DAA0D;IAC5D;IACA;MACE,0BAA0B;MAC1B,0BAA0B;IAC5B;IACA;MACE,4BAA4B;MAC5B,0DAA0D;IAC5D;IACA;MACE,4BAA4B;MAC5B,0BAA0B;IAC5B;IACA;MACE,2BAA2B;MAC3B,0DAA0D;IAC5D;IACA;MACE,2BAA2B;MAC3B,0DAA0D;IAC5D;IACA;MACE,2BAA2B;MAC3B,2DAA2D;IAC7D;IACA;MACE,0BAA0B;MAC1B,wDAAwD;IAC1D;IACA;MACE,0BAA0B;MAC1B,uDAAuD;IACzD;IACA;MACE,0BAA0B;MAC1B,0BAA0B;IAC5B;IACA;MACE,4BAA4B;MAC5B,0DAA0D;IAC5D;IACA;MACE,4BAA4B;MAC5B,0BAA0B;IAC5B;IACA;MACE,2BAA2B;IAC7B;EACF;;EAEA;IACE,kBAAkB;EACpB","sourcesContent":["@font-face {\n    font-family: Cyber;\n    src: url(\"https://assets.codepen.io/605876/Blender-Pro-Bold.otf\");\n    font-display: swap;\n  }\n  \n  * {\n    box-sizing: border-box;\n  }\n  \n  \n  \n  .cybr-btn {\n    --primary: hsl(var(--primary-hue), 85%, calc(var(--primary-lightness, 50) * 1%));\n    --shadow-primary: hsl(var(--shadow-primary-hue), 90%, 50%);\n    --primary-hue: 0;\n    --primary-lightness: 50;\n    --color: hsl(0, 0%, 100%);\n    --font-size: 26px;\n    --shadow-primary-hue: 180;\n    --label-size: 9px;\n    --shadow-secondary-hue: 60;\n    --shadow-secondary: hsl(var(--shadow-secondary-hue), 90%, 60%);\n    --clip: polygon(0 0, 100% 0, 100% 100%, 95% 100%, 95% 90%, 85% 90%, 85% 100%, 8% 100%, 0 70%);\n    --border: 4px;\n    --shimmy-distance: 5;\n    --clip-one: polygon(0 2%, 100% 2%, 100% 95%, 95% 95%, 95% 90%, 85% 90%, 85% 95%, 8% 95%, 0 70%);\n    --clip-two: polygon(0 78%, 100% 78%, 100% 100%, 95% 100%, 95% 90%, 85% 90%, 85% 100%, 8% 100%, 0 78%);\n    --clip-three: polygon(0 44%, 100% 44%, 100% 54%, 95% 54%, 95% 54%, 85% 54%, 85% 54%, 8% 54%, 0 54%);\n    --clip-four: polygon(0 0, 100% 0, 100% 0, 95% 0, 95% 0, 85% 0, 85% 0, 8% 0, 0 0);\n    --clip-five: polygon(0 0, 100% 0, 100% 0, 95% 0, 95% 0, 85% 0, 85% 0, 8% 0, 0 0);\n    --clip-six: polygon(0 40%, 100% 40%, 100% 85%, 95% 85%, 95% 85%, 85% 85%, 85% 85%, 8% 85%, 0 70%);\n    --clip-seven: polygon(0 63%, 100% 63%, 100% 80%, 95% 80%, 95% 80%, 85% 80%, 85% 80%, 8% 80%, 0 70%);\n    font-family: 'Cyber', sans-serif;\n    color: var(--color);\n    cursor: pointer;\n    background: transparent;\n    text-transform: uppercase;\n    font-size: var(--font-size);\n    outline: transparent;\n    letter-spacing: 2px;\n    position: relative;\n    font-weight: 700;\n    border: 0;\n    min-width: 200px;\n    height: 50px;\n    line-height: 50px;\n    transition: background 0.2s;\n  }\n  \n  .cybr-btn:hover {\n    --primary: hsl(var(--primary-hue), 85%, calc(var(--primary-lightness, 50) * 0.8%));\n  }\n  .cybr-btn:active {\n    --primary: hsl(var(--primary-hue), 85%, calc(var(--primary-lightness, 50) * 0.6%));\n  }\n  \n  .cybr-btn:after,\n  .cybr-btn:before {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    clip-path: var(--clip);\n    z-index: -1;\n  }\n  \n  .cybr-btn:before {\n    background: var(--shadow-primary);\n    transform: translate(var(--border), 0);\n  }\n  \n  .cybr-btn:after {\n    background: var(--primary);\n  }\n  \n  .cybr-btn__tag {\n    position: absolute;\n    padding: 1px 4px;\n    letter-spacing: 1px;\n    line-height: 1;\n    bottom: -5%;\n    right: 5%;\n    font-weight: normal;\n    color: hsl(0, 0%, 0%);\n    font-size: var(--label-size);\n  }\n  \n  .cybr-btn__glitch {\n    position: absolute;\n    top: calc(var(--border) * -1);\n    left: calc(var(--border) * -1);\n    right: calc(var(--border) * -1);\n    bottom: calc(var(--border) * -1);\n    background: var(--shadow-primary);\n    text-shadow: 2px 2px var(--shadow-primary), -2px -2px var(--shadow-secondary);\n    clip-path: var(--clip);\n    animation: glitch 2s infinite;\n    display: none;\n  }\n  \n  .cybr-btn:hover .cybr-btn__glitch {\n    display: block;\n  }\n  \n  .cybr-btn__glitch:before {\n    content: '';\n    position: absolute;\n    top: calc(var(--border) * 1);\n    right: calc(var(--border) * 1);\n    bottom: calc(var(--border) * 1);\n    left: calc(var(--border) * 1);\n    clip-path: var(--clip);\n    background: var(--primary);\n    z-index: -1;\n  }\n  \n  @keyframes glitch {\n    0% {\n      clip-path: var(--clip-one);\n    }\n    2%, 8% {\n      clip-path: var(--clip-two);\n      transform: translate(calc(var(--shimmy-distance) * -1%), 0);\n    }\n    6% {\n      clip-path: var(--clip-two);\n      transform: translate(calc(var(--shimmy-distance) * 1%), 0);\n    }\n    9% {\n      clip-path: var(--clip-two);\n      transform: translate(0, 0);\n    }\n    10% {\n      clip-path: var(--clip-three);\n      transform: translate(calc(var(--shimmy-distance) * 1%), 0);\n    }\n    13% {\n      clip-path: var(--clip-three);\n      transform: translate(0, 0);\n    }\n    14%, 21% {\n      clip-path: var(--clip-four);\n      transform: translate(calc(var(--shimmy-distance) * 1%), 0);\n    }\n    25% {\n      clip-path: var(--clip-five);\n      transform: translate(calc(var(--shimmy-distance) * 1%), 0);\n    }\n    30% {\n      clip-path: var(--clip-five);\n      transform: translate(calc(var(--shimmy-distance) * -1%), 0);\n    }\n    35%, 45% {\n      clip-path: var(--clip-six);\n      transform: translate(calc(var(--shimmy-distance) * -1%));\n    }\n    40% {\n      clip-path: var(--clip-six);\n      transform: translate(calc(var(--shimmy-distance) * 1%));\n    }\n    50% {\n      clip-path: var(--clip-six);\n      transform: translate(0, 0);\n    }\n    55% {\n      clip-path: var(--clip-seven);\n      transform: translate(calc(var(--shimmy-distance) * 1%), 0);\n    }\n    60% {\n      clip-path: var(--clip-seven);\n      transform: translate(0, 0);\n    }\n    31%, 61%, 100% {\n      clip-path: var(--clip-four);\n    }\n  }\n  \n  .cybr-btn:nth-of-type(2) {\n    --primary-hue: 260;\n  }"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css_files/glitch.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css_files/glitch.css ***!
  \************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n  \n  .container {\n    text-align: center;\n  }\n  \n  .glitch {\n    font-size: 3rem;\n    font-weight: bold;\n    text-transform: uppercase;\n    position: relative;\n    text-shadow: 0.05em 0 0 #00fffc, -0.03em -0.04em 0 #fc00ff,\n      0.025em 0.04em 0 #fffc00;\n    animation: glitch 725ms infinite;\n  }\n  \n  .glitch span {\n    position: absolute;\n    top: 0;\n    left: 0;\n  }\n  \n  .glitch span:first-child {\n    animation: glitch 500ms infinite;\n    clip-path: polygon(0 0, 100% 0, 100% 35%, 0 35%);\n    transform: translate(-0.04em, -0.03em);\n    opacity: 0.75;\n  }\n  \n  .glitch span:last-child {\n    animation: glitch 375ms infinite;\n    clip-path: polygon(0 65%, 100% 65%, 100% 100%, 0 100%);\n    transform: translate(0.04em, 0.03em);\n    opacity: 0.75;\n  }\n  \n  @keyframes glitch {\n    0% {\n      text-shadow: 0.05em 0 0 #00fffc, -0.03em -0.04em 0 #fc00ff,\n        0.025em 0.04em 0 #fffc00;\n    }\n    15% {\n      text-shadow: 0.05em 0 0 #00fffc, -0.03em -0.04em 0 #fc00ff,\n        0.025em 0.04em 0 #fffc00;\n    }\n    16% {\n      text-shadow: -0.05em -0.025em 0 #00fffc, 0.025em 0.035em 0 #fc00ff,\n        -0.05em -0.05em 0 #fffc00;\n    }\n    49% {\n      text-shadow: -0.05em -0.025em 0 #00fffc, 0.025em 0.035em 0 #fc00ff,\n        -0.05em -0.05em 0 #fffc00;\n    }\n    50% {\n      text-shadow: 0.05em 0.035em 0 #00fffc, 0.03em 0 0 #fc00ff,\n        0 -0.04em 0 #fffc00;\n    }\n    99% {\n      text-shadow: 0.05em 0.035em 0 #00fffc, 0.03em 0 0 #fc00ff,\n        0 -0.04em 0 #fffc00;\n    }\n    100% {\n      text-shadow: -0.05em 0 0 #00fffc, -0.025em -0.04em 0 #fc00ff,\n        -0.04em -0.025em 0 #fffc00;\n    }\n  }\n  ", "",{"version":3,"sources":["webpack://./src/css_files/glitch.css"],"names":[],"mappings":";;EAEE;IACE,kBAAkB;EACpB;;EAEA;IACE,eAAe;IACf,iBAAiB;IACjB,yBAAyB;IACzB,kBAAkB;IAClB;8BAC0B;IAC1B,gCAAgC;EAClC;;EAEA;IACE,kBAAkB;IAClB,MAAM;IACN,OAAO;EACT;;EAEA;IACE,gCAAgC;IAChC,gDAAgD;IAChD,sCAAsC;IACtC,aAAa;EACf;;EAEA;IACE,gCAAgC;IAChC,sDAAsD;IACtD,oCAAoC;IACpC,aAAa;EACf;;EAEA;IACE;MACE;gCAC0B;IAC5B;IACA;MACE;gCAC0B;IAC5B;IACA;MACE;iCAC2B;IAC7B;IACA;MACE;iCAC2B;IAC7B;IACA;MACE;2BACqB;IACvB;IACA;MACE;2BACqB;IACvB;IACA;MACE;kCAC4B;IAC9B;EACF","sourcesContent":["\n  \n  .container {\n    text-align: center;\n  }\n  \n  .glitch {\n    font-size: 3rem;\n    font-weight: bold;\n    text-transform: uppercase;\n    position: relative;\n    text-shadow: 0.05em 0 0 #00fffc, -0.03em -0.04em 0 #fc00ff,\n      0.025em 0.04em 0 #fffc00;\n    animation: glitch 725ms infinite;\n  }\n  \n  .glitch span {\n    position: absolute;\n    top: 0;\n    left: 0;\n  }\n  \n  .glitch span:first-child {\n    animation: glitch 500ms infinite;\n    clip-path: polygon(0 0, 100% 0, 100% 35%, 0 35%);\n    transform: translate(-0.04em, -0.03em);\n    opacity: 0.75;\n  }\n  \n  .glitch span:last-child {\n    animation: glitch 375ms infinite;\n    clip-path: polygon(0 65%, 100% 65%, 100% 100%, 0 100%);\n    transform: translate(0.04em, 0.03em);\n    opacity: 0.75;\n  }\n  \n  @keyframes glitch {\n    0% {\n      text-shadow: 0.05em 0 0 #00fffc, -0.03em -0.04em 0 #fc00ff,\n        0.025em 0.04em 0 #fffc00;\n    }\n    15% {\n      text-shadow: 0.05em 0 0 #00fffc, -0.03em -0.04em 0 #fc00ff,\n        0.025em 0.04em 0 #fffc00;\n    }\n    16% {\n      text-shadow: -0.05em -0.025em 0 #00fffc, 0.025em 0.035em 0 #fc00ff,\n        -0.05em -0.05em 0 #fffc00;\n    }\n    49% {\n      text-shadow: -0.05em -0.025em 0 #00fffc, 0.025em 0.035em 0 #fc00ff,\n        -0.05em -0.05em 0 #fffc00;\n    }\n    50% {\n      text-shadow: 0.05em 0.035em 0 #00fffc, 0.03em 0 0 #fc00ff,\n        0 -0.04em 0 #fffc00;\n    }\n    99% {\n      text-shadow: 0.05em 0.035em 0 #00fffc, 0.03em 0 0 #fc00ff,\n        0 -0.04em 0 #fffc00;\n    }\n    100% {\n      text-shadow: -0.05em 0 0 #00fffc, -0.025em -0.04em 0 #fc00ff,\n        -0.04em -0.025em 0 #fffc00;\n    }\n  }\n  "],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css_files/main_style.css":
/*!****************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css_files/main_style.css ***!
  \****************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body,html {\n    min-height:100vh;\n    width:100%;\n    margin:0px;\n    padding:0px;\n}\ndiv {\n    font-family: Consolas,monaco,monospace; \n}\n\nbody {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-content: center;\n}\n.footer , .header , .content {\n    box-sizing: border-box;\n    width: 100%;\n    \n}\n.nav{\n    background-color: rgba(255, 255, 255, 0);\n    height:40px;\n    width:40px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    max-height: 100%;\n    width: auto;\n}\n.header{\n    min-height: max(10vh,40px);\n    max-height:10vh;\n    display: grid;\n    grid-template-columns: repeat(3,1fr);\n    grid-template-rows: 10vh;\n    background-color: #cc9347a3;\n}\n.content {\n    height:90vh;\n    background-color: rgb(238, 227, 193);\n}\n.footer{\n    height:100px;\n    background-color: #cc9347a3;\n}\n.title{\n    grid-column: 2/3;\n    height:100%;\n    width:100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap:10px;\n    max-height: 100%;\n    min-height: 40px;\n    width: auto;\n\n}\n.extend{\n    grid-column: 1/2;\n    display: flex;\n    margin-left:10%;\n    align-items: center;\n    height:100%;\n    min-height: 40px;\n}\n#frog , #bars{\n    max-height:100%;\n    width:auto;\n}\n.page-name{\n    font-family: Cyber;\n    font-size:25px;\n    font-weight: bold;\n    font-variant: small-caps;\n}", "",{"version":3,"sources":["webpack://./src/css_files/main_style.css"],"names":[],"mappings":"AAAA;IACI,gBAAgB;IAChB,UAAU;IACV,UAAU;IACV,WAAW;AACf;AACA;IACI,sCAAsC;AAC1C;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,8BAA8B;IAC9B,qBAAqB;AACzB;AACA;IACI,sBAAsB;IACtB,WAAW;;AAEf;AACA;IACI,wCAAwC;IACxC,WAAW;IACX,UAAU;IACV,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,gBAAgB;IAChB,WAAW;AACf;AACA;IACI,0BAA0B;IAC1B,eAAe;IACf,aAAa;IACb,oCAAoC;IACpC,wBAAwB;IACxB,2BAA2B;AAC/B;AACA;IACI,WAAW;IACX,oCAAoC;AACxC;AACA;IACI,YAAY;IACZ,2BAA2B;AAC/B;AACA;IACI,gBAAgB;IAChB,WAAW;IACX,UAAU;IACV,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,QAAQ;IACR,gBAAgB;IAChB,gBAAgB;IAChB,WAAW;;AAEf;AACA;IACI,gBAAgB;IAChB,aAAa;IACb,eAAe;IACf,mBAAmB;IACnB,WAAW;IACX,gBAAgB;AACpB;AACA;IACI,eAAe;IACf,UAAU;AACd;AACA;IACI,kBAAkB;IAClB,cAAc;IACd,iBAAiB;IACjB,wBAAwB;AAC5B","sourcesContent":["body,html {\n    min-height:100vh;\n    width:100%;\n    margin:0px;\n    padding:0px;\n}\ndiv {\n    font-family: Consolas,monaco,monospace; \n}\n\nbody {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-content: center;\n}\n.footer , .header , .content {\n    box-sizing: border-box;\n    width: 100%;\n    \n}\n.nav{\n    background-color: rgba(255, 255, 255, 0);\n    height:40px;\n    width:40px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    max-height: 100%;\n    width: auto;\n}\n.header{\n    min-height: max(10vh,40px);\n    max-height:10vh;\n    display: grid;\n    grid-template-columns: repeat(3,1fr);\n    grid-template-rows: 10vh;\n    background-color: #cc9347a3;\n}\n.content {\n    height:90vh;\n    background-color: rgb(238, 227, 193);\n}\n.footer{\n    height:100px;\n    background-color: #cc9347a3;\n}\n.title{\n    grid-column: 2/3;\n    height:100%;\n    width:100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap:10px;\n    max-height: 100%;\n    min-height: 40px;\n    width: auto;\n\n}\n.extend{\n    grid-column: 1/2;\n    display: flex;\n    margin-left:10%;\n    align-items: center;\n    height:100%;\n    min-height: 40px;\n}\n#frog , #bars{\n    max-height:100%;\n    width:auto;\n}\n.page-name{\n    font-family: Cyber;\n    font-size:25px;\n    font-weight: bold;\n    font-variant: small-caps;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/pictures/frog.png":
/*!*******************************!*\
  !*** ./src/pictures/frog.png ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/frog.png");

/***/ }),

/***/ "./src/pictures/menu.png":
/*!*******************************!*\
  !*** ./src/pictures/menu.png ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/menu.png");

/***/ }),

/***/ "./src/html_files/content.html":
/*!*************************************!*\
  !*** ./src/html_files/content.html ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Module
var code = "<div class=\"content\">\n\n      \n</div>";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./src/html_files/footer.html":
/*!************************************!*\
  !*** ./src/html_files/footer.html ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Module
var code = "<div class=\"footer\">\n    <ul>\n        <li>\n            <a href=\"https://www.flaticon.com/free-icons/frog\" title=\"frog icons\">Frog icons created by Freepik - Flaticon</a>\n        </li>\n        <li>\n            <a href=\"https://codepen.io/cbanlawi/pen/xxRBeMY\" title=\"title glitch\">Text glitch effect by Christine Banlawi - CodePen</a>\n        </li>\n        <li>\n            <a href=\"https://codepen.io/jh3y/pen/PoGbxLp\" title=\"title glitch\">Button with glitch effect by Jhey - CodePen</a>\n        </li>\n    </ul>\n</div>";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./src/html_files/header.html":
/*!************************************!*\
  !*** ./src/html_files/header.html ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Module
var code = "<div class=\"header\">\n    <div class=\"extend\">\n        <button class=\"cybr-btn\">\n            Menu<span aria-hidden>_</span>\n            <span aria-hidden class=\"cybr-btn__glitch\">Menu</span>\n            \n          </button>\n          \n    </div>\n    <div class=\"title\">\n        <img id=\"frog\">\n        <div class=\"page-name\">\n            <div class=\"container\">\n                <p class=\"glitch\">\n                  <span aria-hidden=\"true\">ToDoList</span>\n                  ToDoList\n                  <span aria-hidden=\"true\">ToDoList</span>\n                </p>\n              </div>\n        </div>\n    </div>\n</div>";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./src/css_files/cool.css":
/*!********************************!*\
  !*** ./src/css_files/cool.css ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_cool_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./cool.css */ "./node_modules/css-loader/dist/cjs.js!./src/css_files/cool.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_cool_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_cool_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_cool_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_cool_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/css_files/glitch.css":
/*!**********************************!*\
  !*** ./src/css_files/glitch.css ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_glitch_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./glitch.css */ "./node_modules/css-loader/dist/cjs.js!./src/css_files/glitch.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_glitch_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_glitch_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_glitch_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_glitch_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/css_files/main_style.css":
/*!**************************************!*\
  !*** ./src/css_files/main_style.css ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./main_style.css */ "./node_modules/css-loader/dist/cjs.js!./src/css_files/main_style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_main_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_main_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/storageAvailable.js":
/*!*********************************!*\
  !*** ./src/storageAvailable.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "storageAvailable": () => (/* binding */ storageAvailable)
/* harmony export */ });
function storageAvailable(type) {
    let storage;
    try {
        storage = window[type];
        const x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch (e) {
        return e instanceof DOMException && (
            // everything except Firefox
            e.code=== 22 ||
            // Firefox
            e.code === 1014 ||
            // test name field too, because code might not be present
            // everything except Firefox
            e.name === 'QuotaExceededError' ||
            // Firefox
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            // acknowledge QuotaExceededError only if there's something already stored
            (storage && storage.length !== 0);
    }
}

/***/ }),

/***/ "./src/taskFactory.js":
/*!****************************!*\
  !*** ./src/taskFactory.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "task": () => (/* binding */ task)
/* harmony export */ });
const task = ()=>{
    const variable = 32;
    //constructor
    //      At a minimum they should have a title, 
    // description, dueDate and priority.
    // You might also want to include notes or even a checklist.
    function constructor(){
        console.log(variable);
        console.log(`hello`);
    }
    const constructor2 = ()=>{
       // console.log(this.variable);
    }
    return{constructor,constructor2};
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _html_files_header_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./html_files/header.html */ "./src/html_files/header.html");
/* harmony import */ var _html_files_content_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./html_files/content.html */ "./src/html_files/content.html");
/* harmony import */ var _html_files_footer_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./html_files/footer.html */ "./src/html_files/footer.html");
/* harmony import */ var _storageAvailable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./storageAvailable */ "./src/storageAvailable.js");
/* harmony import */ var _taskFactory_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./taskFactory.js */ "./src/taskFactory.js");
/* harmony import */ var _css_files_main_style_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./css_files/main_style.css */ "./src/css_files/main_style.css");
/* harmony import */ var _css_files_cool_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./css_files/cool.css */ "./src/css_files/cool.css");
/* harmony import */ var _css_files_glitch_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./css_files/glitch.css */ "./src/css_files/glitch.css");
/* harmony import */ var _pictures_frog_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pictures/frog.png */ "./src/pictures/frog.png");
/* harmony import */ var _pictures_menu_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pictures/menu.png */ "./src/pictures/menu.png");












//import frog from "./assets";

document.body.innerHTML = _html_files_header_html__WEBPACK_IMPORTED_MODULE_0__["default"];
document.body.innerHTML += _html_files_content_html__WEBPACK_IMPORTED_MODULE_1__["default"];
document.body.innerHTML += _html_files_footer_html__WEBPACK_IMPORTED_MODULE_2__["default"];

document.getElementById(`frog`).src = "./assets/images/frog.png";


if ((0,_storageAvailable__WEBPACK_IMPORTED_MODULE_3__.storageAvailable)('localStorage')) {
    // Yippee! We can use localStorage awesomeness
    console.log(`st orage available`);

  }
  else {
    // Too bad, no localStorage for us
    console.log(`storage unavailable`);
}   
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7Ozs7OztVQ2RBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBOEM7QUFDRTtBQUNEO0FBQ0s7QUFDZDtBQUNGO0FBQ047QUFDRTs7QUFFSDtBQUNBOztBQUU3Qjs7QUFFQSwwQkFBMEIsK0RBQU07QUFDaEMsMkJBQTJCLGdFQUFPO0FBQ2xDLDJCQUEyQiwrREFBTTs7QUFFakM7OztBQUdBLElBQUksbUVBQWdCO0FBQ3BCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvY3NzX2ZpbGVzL2Nvb2wuY3NzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2Nzc19maWxlcy9nbGl0Y2guY3NzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2Nzc19maWxlcy9tYWluX3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9waWN0dXJlcy9mcm9nLnBuZyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9waWN0dXJlcy9tZW51LnBuZyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9odG1sX2ZpbGVzL2NvbnRlbnQuaHRtbCIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9odG1sX2ZpbGVzL2Zvb3Rlci5odG1sIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2h0bWxfZmlsZXMvaGVhZGVyLmh0bWwiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvY3NzX2ZpbGVzL2Nvb2wuY3NzPzgzZDAiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvY3NzX2ZpbGVzL2dsaXRjaC5jc3M/ZDhjMiIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9jc3NfZmlsZXMvbWFpbl9zdHlsZS5jc3M/Yzc2ZiIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3N0b3JhZ2VBdmFpbGFibGUuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvdGFza0ZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogQ3liZXI7XFxuICAgIHNyYzogdXJsKFxcXCJodHRwczovL2Fzc2V0cy5jb2RlcGVuLmlvLzYwNTg3Ni9CbGVuZGVyLVByby1Cb2xkLm90ZlxcXCIpO1xcbiAgICBmb250LWRpc3BsYXk6IHN3YXA7XFxuICB9XFxuICBcXG4gICoge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgfVxcbiAgXFxuICBcXG4gIFxcbiAgLmN5YnItYnRuIHtcXG4gICAgLS1wcmltYXJ5OiBoc2wodmFyKC0tcHJpbWFyeS1odWUpLCA4NSUsIGNhbGModmFyKC0tcHJpbWFyeS1saWdodG5lc3MsIDUwKSAqIDElKSk7XFxuICAgIC0tc2hhZG93LXByaW1hcnk6IGhzbCh2YXIoLS1zaGFkb3ctcHJpbWFyeS1odWUpLCA5MCUsIDUwJSk7XFxuICAgIC0tcHJpbWFyeS1odWU6IDA7XFxuICAgIC0tcHJpbWFyeS1saWdodG5lc3M6IDUwO1xcbiAgICAtLWNvbG9yOiBoc2woMCwgMCUsIDEwMCUpO1xcbiAgICAtLWZvbnQtc2l6ZTogMjZweDtcXG4gICAgLS1zaGFkb3ctcHJpbWFyeS1odWU6IDE4MDtcXG4gICAgLS1sYWJlbC1zaXplOiA5cHg7XFxuICAgIC0tc2hhZG93LXNlY29uZGFyeS1odWU6IDYwO1xcbiAgICAtLXNoYWRvdy1zZWNvbmRhcnk6IGhzbCh2YXIoLS1zaGFkb3ctc2Vjb25kYXJ5LWh1ZSksIDkwJSwgNjAlKTtcXG4gICAgLS1jbGlwOiBwb2x5Z29uKDAgMCwgMTAwJSAwLCAxMDAlIDEwMCUsIDk1JSAxMDAlLCA5NSUgOTAlLCA4NSUgOTAlLCA4NSUgMTAwJSwgOCUgMTAwJSwgMCA3MCUpO1xcbiAgICAtLWJvcmRlcjogNHB4O1xcbiAgICAtLXNoaW1teS1kaXN0YW5jZTogNTtcXG4gICAgLS1jbGlwLW9uZTogcG9seWdvbigwIDIlLCAxMDAlIDIlLCAxMDAlIDk1JSwgOTUlIDk1JSwgOTUlIDkwJSwgODUlIDkwJSwgODUlIDk1JSwgOCUgOTUlLCAwIDcwJSk7XFxuICAgIC0tY2xpcC10d286IHBvbHlnb24oMCA3OCUsIDEwMCUgNzglLCAxMDAlIDEwMCUsIDk1JSAxMDAlLCA5NSUgOTAlLCA4NSUgOTAlLCA4NSUgMTAwJSwgOCUgMTAwJSwgMCA3OCUpO1xcbiAgICAtLWNsaXAtdGhyZWU6IHBvbHlnb24oMCA0NCUsIDEwMCUgNDQlLCAxMDAlIDU0JSwgOTUlIDU0JSwgOTUlIDU0JSwgODUlIDU0JSwgODUlIDU0JSwgOCUgNTQlLCAwIDU0JSk7XFxuICAgIC0tY2xpcC1mb3VyOiBwb2x5Z29uKDAgMCwgMTAwJSAwLCAxMDAlIDAsIDk1JSAwLCA5NSUgMCwgODUlIDAsIDg1JSAwLCA4JSAwLCAwIDApO1xcbiAgICAtLWNsaXAtZml2ZTogcG9seWdvbigwIDAsIDEwMCUgMCwgMTAwJSAwLCA5NSUgMCwgOTUlIDAsIDg1JSAwLCA4NSUgMCwgOCUgMCwgMCAwKTtcXG4gICAgLS1jbGlwLXNpeDogcG9seWdvbigwIDQwJSwgMTAwJSA0MCUsIDEwMCUgODUlLCA5NSUgODUlLCA5NSUgODUlLCA4NSUgODUlLCA4NSUgODUlLCA4JSA4NSUsIDAgNzAlKTtcXG4gICAgLS1jbGlwLXNldmVuOiBwb2x5Z29uKDAgNjMlLCAxMDAlIDYzJSwgMTAwJSA4MCUsIDk1JSA4MCUsIDk1JSA4MCUsIDg1JSA4MCUsIDg1JSA4MCUsIDglIDgwJSwgMCA3MCUpO1xcbiAgICBmb250LWZhbWlseTogJ0N5YmVyJywgc2Fucy1zZXJpZjtcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yKTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUpO1xcbiAgICBvdXRsaW5lOiB0cmFuc3BhcmVudDtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBib3JkZXI6IDA7XFxuICAgIG1pbi13aWR0aDogMjAwcHg7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgbGluZS1oZWlnaHQ6IDUwcHg7XFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4ycztcXG4gIH1cXG4gIFxcbiAgLmN5YnItYnRuOmhvdmVyIHtcXG4gICAgLS1wcmltYXJ5OiBoc2wodmFyKC0tcHJpbWFyeS1odWUpLCA4NSUsIGNhbGModmFyKC0tcHJpbWFyeS1saWdodG5lc3MsIDUwKSAqIDAuOCUpKTtcXG4gIH1cXG4gIC5jeWJyLWJ0bjphY3RpdmUge1xcbiAgICAtLXByaW1hcnk6IGhzbCh2YXIoLS1wcmltYXJ5LWh1ZSksIDg1JSwgY2FsYyh2YXIoLS1wcmltYXJ5LWxpZ2h0bmVzcywgNTApICogMC42JSkpO1xcbiAgfVxcbiAgXFxuICAuY3lici1idG46YWZ0ZXIsXFxuICAuY3lici1idG46YmVmb3JlIHtcXG4gICAgY29udGVudDogJyc7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBjbGlwLXBhdGg6IHZhcigtLWNsaXApO1xcbiAgICB6LWluZGV4OiAtMTtcXG4gIH1cXG4gIFxcbiAgLmN5YnItYnRuOmJlZm9yZSB7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLXNoYWRvdy1wcmltYXJ5KTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUodmFyKC0tYm9yZGVyKSwgMCk7XFxuICB9XFxuICBcXG4gIC5jeWJyLWJ0bjphZnRlciB7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnkpO1xcbiAgfVxcbiAgXFxuICAuY3lici1idG5fX3RhZyB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcGFkZGluZzogMXB4IDRweDtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXG4gICAgbGluZS1oZWlnaHQ6IDE7XFxuICAgIGJvdHRvbTogLTUlO1xcbiAgICByaWdodDogNSU7XFxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICAgIGNvbG9yOiBoc2woMCwgMCUsIDAlKTtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1sYWJlbC1zaXplKTtcXG4gIH1cXG4gIFxcbiAgLmN5YnItYnRuX19nbGl0Y2gge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogY2FsYyh2YXIoLS1ib3JkZXIpICogLTEpO1xcbiAgICBsZWZ0OiBjYWxjKHZhcigtLWJvcmRlcikgKiAtMSk7XFxuICAgIHJpZ2h0OiBjYWxjKHZhcigtLWJvcmRlcikgKiAtMSk7XFxuICAgIGJvdHRvbTogY2FsYyh2YXIoLS1ib3JkZXIpICogLTEpO1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1zaGFkb3ctcHJpbWFyeSk7XFxuICAgIHRleHQtc2hhZG93OiAycHggMnB4IHZhcigtLXNoYWRvdy1wcmltYXJ5KSwgLTJweCAtMnB4IHZhcigtLXNoYWRvdy1zZWNvbmRhcnkpO1xcbiAgICBjbGlwLXBhdGg6IHZhcigtLWNsaXApO1xcbiAgICBhbmltYXRpb246IGdsaXRjaCAycyBpbmZpbml0ZTtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG4gIFxcbiAgLmN5YnItYnRuOmhvdmVyIC5jeWJyLWJ0bl9fZ2xpdGNoIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICB9XFxuICBcXG4gIC5jeWJyLWJ0bl9fZ2xpdGNoOmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogY2FsYyh2YXIoLS1ib3JkZXIpICogMSk7XFxuICAgIHJpZ2h0OiBjYWxjKHZhcigtLWJvcmRlcikgKiAxKTtcXG4gICAgYm90dG9tOiBjYWxjKHZhcigtLWJvcmRlcikgKiAxKTtcXG4gICAgbGVmdDogY2FsYyh2YXIoLS1ib3JkZXIpICogMSk7XFxuICAgIGNsaXAtcGF0aDogdmFyKC0tY2xpcCk7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnkpO1xcbiAgICB6LWluZGV4OiAtMTtcXG4gIH1cXG4gIFxcbiAgQGtleWZyYW1lcyBnbGl0Y2gge1xcbiAgICAwJSB7XFxuICAgICAgY2xpcC1wYXRoOiB2YXIoLS1jbGlwLW9uZSk7XFxuICAgIH1cXG4gICAgMiUsIDglIHtcXG4gICAgICBjbGlwLXBhdGg6IHZhcigtLWNsaXAtdHdvKTtcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZShjYWxjKHZhcigtLXNoaW1teS1kaXN0YW5jZSkgKiAtMSUpLCAwKTtcXG4gICAgfVxcbiAgICA2JSB7XFxuICAgICAgY2xpcC1wYXRoOiB2YXIoLS1jbGlwLXR3byk7XFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoY2FsYyh2YXIoLS1zaGltbXktZGlzdGFuY2UpICogMSUpLCAwKTtcXG4gICAgfVxcbiAgICA5JSB7XFxuICAgICAgY2xpcC1wYXRoOiB2YXIoLS1jbGlwLXR3byk7XFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XFxuICAgIH1cXG4gICAgMTAlIHtcXG4gICAgICBjbGlwLXBhdGg6IHZhcigtLWNsaXAtdGhyZWUpO1xcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKGNhbGModmFyKC0tc2hpbW15LWRpc3RhbmNlKSAqIDElKSwgMCk7XFxuICAgIH1cXG4gICAgMTMlIHtcXG4gICAgICBjbGlwLXBhdGg6IHZhcigtLWNsaXAtdGhyZWUpO1xcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xcbiAgICB9XFxuICAgIDE0JSwgMjElIHtcXG4gICAgICBjbGlwLXBhdGg6IHZhcigtLWNsaXAtZm91cik7XFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoY2FsYyh2YXIoLS1zaGltbXktZGlzdGFuY2UpICogMSUpLCAwKTtcXG4gICAgfVxcbiAgICAyNSUge1xcbiAgICAgIGNsaXAtcGF0aDogdmFyKC0tY2xpcC1maXZlKTtcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZShjYWxjKHZhcigtLXNoaW1teS1kaXN0YW5jZSkgKiAxJSksIDApO1xcbiAgICB9XFxuICAgIDMwJSB7XFxuICAgICAgY2xpcC1wYXRoOiB2YXIoLS1jbGlwLWZpdmUpO1xcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKGNhbGModmFyKC0tc2hpbW15LWRpc3RhbmNlKSAqIC0xJSksIDApO1xcbiAgICB9XFxuICAgIDM1JSwgNDUlIHtcXG4gICAgICBjbGlwLXBhdGg6IHZhcigtLWNsaXAtc2l4KTtcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZShjYWxjKHZhcigtLXNoaW1teS1kaXN0YW5jZSkgKiAtMSUpKTtcXG4gICAgfVxcbiAgICA0MCUge1xcbiAgICAgIGNsaXAtcGF0aDogdmFyKC0tY2xpcC1zaXgpO1xcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKGNhbGModmFyKC0tc2hpbW15LWRpc3RhbmNlKSAqIDElKSk7XFxuICAgIH1cXG4gICAgNTAlIHtcXG4gICAgICBjbGlwLXBhdGg6IHZhcigtLWNsaXAtc2l4KTtcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcXG4gICAgfVxcbiAgICA1NSUge1xcbiAgICAgIGNsaXAtcGF0aDogdmFyKC0tY2xpcC1zZXZlbik7XFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoY2FsYyh2YXIoLS1zaGltbXktZGlzdGFuY2UpICogMSUpLCAwKTtcXG4gICAgfVxcbiAgICA2MCUge1xcbiAgICAgIGNsaXAtcGF0aDogdmFyKC0tY2xpcC1zZXZlbik7XFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XFxuICAgIH1cXG4gICAgMzElLCA2MSUsIDEwMCUge1xcbiAgICAgIGNsaXAtcGF0aDogdmFyKC0tY2xpcC1mb3VyKTtcXG4gICAgfVxcbiAgfVxcbiAgXFxuICAuY3lici1idG46bnRoLW9mLXR5cGUoMikge1xcbiAgICAtLXByaW1hcnktaHVlOiAyNjA7XFxuICB9XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzc19maWxlcy9jb29sLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixpRUFBaUU7SUFDakUsa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0Usc0JBQXNCO0VBQ3hCOzs7O0VBSUE7SUFDRSxnRkFBZ0Y7SUFDaEYsMERBQTBEO0lBQzFELGdCQUFnQjtJQUNoQix1QkFBdUI7SUFDdkIseUJBQXlCO0lBQ3pCLGlCQUFpQjtJQUNqQix5QkFBeUI7SUFDekIsaUJBQWlCO0lBQ2pCLDBCQUEwQjtJQUMxQiw4REFBOEQ7SUFDOUQsNkZBQTZGO0lBQzdGLGFBQWE7SUFDYixvQkFBb0I7SUFDcEIsK0ZBQStGO0lBQy9GLHFHQUFxRztJQUNyRyxtR0FBbUc7SUFDbkcsZ0ZBQWdGO0lBQ2hGLGdGQUFnRjtJQUNoRixpR0FBaUc7SUFDakcsbUdBQW1HO0lBQ25HLGdDQUFnQztJQUNoQyxtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLHVCQUF1QjtJQUN2Qix5QkFBeUI7SUFDekIsMkJBQTJCO0lBQzNCLG9CQUFvQjtJQUNwQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixTQUFTO0lBQ1QsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsMkJBQTJCO0VBQzdCOztFQUVBO0lBQ0Usa0ZBQWtGO0VBQ3BGO0VBQ0E7SUFDRSxrRkFBa0Y7RUFDcEY7O0VBRUE7O0lBRUUsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sT0FBTztJQUNQLFFBQVE7SUFDUixTQUFTO0lBQ1Qsc0JBQXNCO0lBQ3RCLFdBQVc7RUFDYjs7RUFFQTtJQUNFLGlDQUFpQztJQUNqQyxzQ0FBc0M7RUFDeEM7O0VBRUE7SUFDRSwwQkFBMEI7RUFDNUI7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2QsV0FBVztJQUNYLFNBQVM7SUFDVCxtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLDRCQUE0QjtFQUM5Qjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQiw2QkFBNkI7SUFDN0IsOEJBQThCO0lBQzlCLCtCQUErQjtJQUMvQixnQ0FBZ0M7SUFDaEMsaUNBQWlDO0lBQ2pDLDZFQUE2RTtJQUM3RSxzQkFBc0I7SUFDdEIsNkJBQTZCO0lBQzdCLGFBQWE7RUFDZjs7RUFFQTtJQUNFLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLDRCQUE0QjtJQUM1Qiw4QkFBOEI7SUFDOUIsK0JBQStCO0lBQy9CLDZCQUE2QjtJQUM3QixzQkFBc0I7SUFDdEIsMEJBQTBCO0lBQzFCLFdBQVc7RUFDYjs7RUFFQTtJQUNFO01BQ0UsMEJBQTBCO0lBQzVCO0lBQ0E7TUFDRSwwQkFBMEI7TUFDMUIsMkRBQTJEO0lBQzdEO0lBQ0E7TUFDRSwwQkFBMEI7TUFDMUIsMERBQTBEO0lBQzVEO0lBQ0E7TUFDRSwwQkFBMEI7TUFDMUIsMEJBQTBCO0lBQzVCO0lBQ0E7TUFDRSw0QkFBNEI7TUFDNUIsMERBQTBEO0lBQzVEO0lBQ0E7TUFDRSw0QkFBNEI7TUFDNUIsMEJBQTBCO0lBQzVCO0lBQ0E7TUFDRSwyQkFBMkI7TUFDM0IsMERBQTBEO0lBQzVEO0lBQ0E7TUFDRSwyQkFBMkI7TUFDM0IsMERBQTBEO0lBQzVEO0lBQ0E7TUFDRSwyQkFBMkI7TUFDM0IsMkRBQTJEO0lBQzdEO0lBQ0E7TUFDRSwwQkFBMEI7TUFDMUIsd0RBQXdEO0lBQzFEO0lBQ0E7TUFDRSwwQkFBMEI7TUFDMUIsdURBQXVEO0lBQ3pEO0lBQ0E7TUFDRSwwQkFBMEI7TUFDMUIsMEJBQTBCO0lBQzVCO0lBQ0E7TUFDRSw0QkFBNEI7TUFDNUIsMERBQTBEO0lBQzVEO0lBQ0E7TUFDRSw0QkFBNEI7TUFDNUIsMEJBQTBCO0lBQzVCO0lBQ0E7TUFDRSwyQkFBMkI7SUFDN0I7RUFDRjs7RUFFQTtJQUNFLGtCQUFrQjtFQUNwQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6IEN5YmVyO1xcbiAgICBzcmM6IHVybChcXFwiaHR0cHM6Ly9hc3NldHMuY29kZXBlbi5pby82MDU4NzYvQmxlbmRlci1Qcm8tQm9sZC5vdGZcXFwiKTtcXG4gICAgZm9udC1kaXNwbGF5OiBzd2FwO1xcbiAgfVxcbiAgXFxuICAqIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIH1cXG4gIFxcbiAgXFxuICBcXG4gIC5jeWJyLWJ0biB7XFxuICAgIC0tcHJpbWFyeTogaHNsKHZhcigtLXByaW1hcnktaHVlKSwgODUlLCBjYWxjKHZhcigtLXByaW1hcnktbGlnaHRuZXNzLCA1MCkgKiAxJSkpO1xcbiAgICAtLXNoYWRvdy1wcmltYXJ5OiBoc2wodmFyKC0tc2hhZG93LXByaW1hcnktaHVlKSwgOTAlLCA1MCUpO1xcbiAgICAtLXByaW1hcnktaHVlOiAwO1xcbiAgICAtLXByaW1hcnktbGlnaHRuZXNzOiA1MDtcXG4gICAgLS1jb2xvcjogaHNsKDAsIDAlLCAxMDAlKTtcXG4gICAgLS1mb250LXNpemU6IDI2cHg7XFxuICAgIC0tc2hhZG93LXByaW1hcnktaHVlOiAxODA7XFxuICAgIC0tbGFiZWwtc2l6ZTogOXB4O1xcbiAgICAtLXNoYWRvdy1zZWNvbmRhcnktaHVlOiA2MDtcXG4gICAgLS1zaGFkb3ctc2Vjb25kYXJ5OiBoc2wodmFyKC0tc2hhZG93LXNlY29uZGFyeS1odWUpLCA5MCUsIDYwJSk7XFxuICAgIC0tY2xpcDogcG9seWdvbigwIDAsIDEwMCUgMCwgMTAwJSAxMDAlLCA5NSUgMTAwJSwgOTUlIDkwJSwgODUlIDkwJSwgODUlIDEwMCUsIDglIDEwMCUsIDAgNzAlKTtcXG4gICAgLS1ib3JkZXI6IDRweDtcXG4gICAgLS1zaGltbXktZGlzdGFuY2U6IDU7XFxuICAgIC0tY2xpcC1vbmU6IHBvbHlnb24oMCAyJSwgMTAwJSAyJSwgMTAwJSA5NSUsIDk1JSA5NSUsIDk1JSA5MCUsIDg1JSA5MCUsIDg1JSA5NSUsIDglIDk1JSwgMCA3MCUpO1xcbiAgICAtLWNsaXAtdHdvOiBwb2x5Z29uKDAgNzglLCAxMDAlIDc4JSwgMTAwJSAxMDAlLCA5NSUgMTAwJSwgOTUlIDkwJSwgODUlIDkwJSwgODUlIDEwMCUsIDglIDEwMCUsIDAgNzglKTtcXG4gICAgLS1jbGlwLXRocmVlOiBwb2x5Z29uKDAgNDQlLCAxMDAlIDQ0JSwgMTAwJSA1NCUsIDk1JSA1NCUsIDk1JSA1NCUsIDg1JSA1NCUsIDg1JSA1NCUsIDglIDU0JSwgMCA1NCUpO1xcbiAgICAtLWNsaXAtZm91cjogcG9seWdvbigwIDAsIDEwMCUgMCwgMTAwJSAwLCA5NSUgMCwgOTUlIDAsIDg1JSAwLCA4NSUgMCwgOCUgMCwgMCAwKTtcXG4gICAgLS1jbGlwLWZpdmU6IHBvbHlnb24oMCAwLCAxMDAlIDAsIDEwMCUgMCwgOTUlIDAsIDk1JSAwLCA4NSUgMCwgODUlIDAsIDglIDAsIDAgMCk7XFxuICAgIC0tY2xpcC1zaXg6IHBvbHlnb24oMCA0MCUsIDEwMCUgNDAlLCAxMDAlIDg1JSwgOTUlIDg1JSwgOTUlIDg1JSwgODUlIDg1JSwgODUlIDg1JSwgOCUgODUlLCAwIDcwJSk7XFxuICAgIC0tY2xpcC1zZXZlbjogcG9seWdvbigwIDYzJSwgMTAwJSA2MyUsIDEwMCUgODAlLCA5NSUgODAlLCA5NSUgODAlLCA4NSUgODAlLCA4NSUgODAlLCA4JSA4MCUsIDAgNzAlKTtcXG4gICAgZm9udC1mYW1pbHk6ICdDeWJlcicsIHNhbnMtc2VyaWY7XFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvcik7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplKTtcXG4gICAgb3V0bGluZTogdHJhbnNwYXJlbnQ7XFxuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBtaW4td2lkdGg6IDIwMHB4O1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMnM7XFxuICB9XFxuICBcXG4gIC5jeWJyLWJ0bjpob3ZlciB7XFxuICAgIC0tcHJpbWFyeTogaHNsKHZhcigtLXByaW1hcnktaHVlKSwgODUlLCBjYWxjKHZhcigtLXByaW1hcnktbGlnaHRuZXNzLCA1MCkgKiAwLjglKSk7XFxuICB9XFxuICAuY3lici1idG46YWN0aXZlIHtcXG4gICAgLS1wcmltYXJ5OiBoc2wodmFyKC0tcHJpbWFyeS1odWUpLCA4NSUsIGNhbGModmFyKC0tcHJpbWFyeS1saWdodG5lc3MsIDUwKSAqIDAuNiUpKTtcXG4gIH1cXG4gIFxcbiAgLmN5YnItYnRuOmFmdGVyLFxcbiAgLmN5YnItYnRuOmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgY2xpcC1wYXRoOiB2YXIoLS1jbGlwKTtcXG4gICAgei1pbmRleDogLTE7XFxuICB9XFxuICBcXG4gIC5jeWJyLWJ0bjpiZWZvcmUge1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1zaGFkb3ctcHJpbWFyeSk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKHZhcigtLWJvcmRlciksIDApO1xcbiAgfVxcbiAgXFxuICAuY3lici1idG46YWZ0ZXIge1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5KTtcXG4gIH1cXG4gIFxcbiAgLmN5YnItYnRuX190YWcge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHBhZGRpbmc6IDFweCA0cHg7XFxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XFxuICAgIGxpbmUtaGVpZ2h0OiAxO1xcbiAgICBib3R0b206IC01JTtcXG4gICAgcmlnaHQ6IDUlO1xcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgICBjb2xvcjogaHNsKDAsIDAlLCAwJSk7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tbGFiZWwtc2l6ZSk7XFxuICB9XFxuICBcXG4gIC5jeWJyLWJ0bl9fZ2xpdGNoIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IGNhbGModmFyKC0tYm9yZGVyKSAqIC0xKTtcXG4gICAgbGVmdDogY2FsYyh2YXIoLS1ib3JkZXIpICogLTEpO1xcbiAgICByaWdodDogY2FsYyh2YXIoLS1ib3JkZXIpICogLTEpO1xcbiAgICBib3R0b206IGNhbGModmFyKC0tYm9yZGVyKSAqIC0xKTtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tc2hhZG93LXByaW1hcnkpO1xcbiAgICB0ZXh0LXNoYWRvdzogMnB4IDJweCB2YXIoLS1zaGFkb3ctcHJpbWFyeSksIC0ycHggLTJweCB2YXIoLS1zaGFkb3ctc2Vjb25kYXJ5KTtcXG4gICAgY2xpcC1wYXRoOiB2YXIoLS1jbGlwKTtcXG4gICAgYW5pbWF0aW9uOiBnbGl0Y2ggMnMgaW5maW5pdGU7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuICBcXG4gIC5jeWJyLWJ0bjpob3ZlciAuY3lici1idG5fX2dsaXRjaCB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgfVxcbiAgXFxuICAuY3lici1idG5fX2dsaXRjaDpiZWZvcmUge1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IGNhbGModmFyKC0tYm9yZGVyKSAqIDEpO1xcbiAgICByaWdodDogY2FsYyh2YXIoLS1ib3JkZXIpICogMSk7XFxuICAgIGJvdHRvbTogY2FsYyh2YXIoLS1ib3JkZXIpICogMSk7XFxuICAgIGxlZnQ6IGNhbGModmFyKC0tYm9yZGVyKSAqIDEpO1xcbiAgICBjbGlwLXBhdGg6IHZhcigtLWNsaXApO1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5KTtcXG4gICAgei1pbmRleDogLTE7XFxuICB9XFxuICBcXG4gIEBrZXlmcmFtZXMgZ2xpdGNoIHtcXG4gICAgMCUge1xcbiAgICAgIGNsaXAtcGF0aDogdmFyKC0tY2xpcC1vbmUpO1xcbiAgICB9XFxuICAgIDIlLCA4JSB7XFxuICAgICAgY2xpcC1wYXRoOiB2YXIoLS1jbGlwLXR3byk7XFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoY2FsYyh2YXIoLS1zaGltbXktZGlzdGFuY2UpICogLTElKSwgMCk7XFxuICAgIH1cXG4gICAgNiUge1xcbiAgICAgIGNsaXAtcGF0aDogdmFyKC0tY2xpcC10d28pO1xcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKGNhbGModmFyKC0tc2hpbW15LWRpc3RhbmNlKSAqIDElKSwgMCk7XFxuICAgIH1cXG4gICAgOSUge1xcbiAgICAgIGNsaXAtcGF0aDogdmFyKC0tY2xpcC10d28pO1xcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xcbiAgICB9XFxuICAgIDEwJSB7XFxuICAgICAgY2xpcC1wYXRoOiB2YXIoLS1jbGlwLXRocmVlKTtcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZShjYWxjKHZhcigtLXNoaW1teS1kaXN0YW5jZSkgKiAxJSksIDApO1xcbiAgICB9XFxuICAgIDEzJSB7XFxuICAgICAgY2xpcC1wYXRoOiB2YXIoLS1jbGlwLXRocmVlKTtcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcXG4gICAgfVxcbiAgICAxNCUsIDIxJSB7XFxuICAgICAgY2xpcC1wYXRoOiB2YXIoLS1jbGlwLWZvdXIpO1xcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKGNhbGModmFyKC0tc2hpbW15LWRpc3RhbmNlKSAqIDElKSwgMCk7XFxuICAgIH1cXG4gICAgMjUlIHtcXG4gICAgICBjbGlwLXBhdGg6IHZhcigtLWNsaXAtZml2ZSk7XFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoY2FsYyh2YXIoLS1zaGltbXktZGlzdGFuY2UpICogMSUpLCAwKTtcXG4gICAgfVxcbiAgICAzMCUge1xcbiAgICAgIGNsaXAtcGF0aDogdmFyKC0tY2xpcC1maXZlKTtcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZShjYWxjKHZhcigtLXNoaW1teS1kaXN0YW5jZSkgKiAtMSUpLCAwKTtcXG4gICAgfVxcbiAgICAzNSUsIDQ1JSB7XFxuICAgICAgY2xpcC1wYXRoOiB2YXIoLS1jbGlwLXNpeCk7XFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoY2FsYyh2YXIoLS1zaGltbXktZGlzdGFuY2UpICogLTElKSk7XFxuICAgIH1cXG4gICAgNDAlIHtcXG4gICAgICBjbGlwLXBhdGg6IHZhcigtLWNsaXAtc2l4KTtcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZShjYWxjKHZhcigtLXNoaW1teS1kaXN0YW5jZSkgKiAxJSkpO1xcbiAgICB9XFxuICAgIDUwJSB7XFxuICAgICAgY2xpcC1wYXRoOiB2YXIoLS1jbGlwLXNpeCk7XFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XFxuICAgIH1cXG4gICAgNTUlIHtcXG4gICAgICBjbGlwLXBhdGg6IHZhcigtLWNsaXAtc2V2ZW4pO1xcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKGNhbGModmFyKC0tc2hpbW15LWRpc3RhbmNlKSAqIDElKSwgMCk7XFxuICAgIH1cXG4gICAgNjAlIHtcXG4gICAgICBjbGlwLXBhdGg6IHZhcigtLWNsaXAtc2V2ZW4pO1xcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xcbiAgICB9XFxuICAgIDMxJSwgNjElLCAxMDAlIHtcXG4gICAgICBjbGlwLXBhdGg6IHZhcigtLWNsaXAtZm91cik7XFxuICAgIH1cXG4gIH1cXG4gIFxcbiAgLmN5YnItYnRuOm50aC1vZi10eXBlKDIpIHtcXG4gICAgLS1wcmltYXJ5LWh1ZTogMjYwO1xcbiAgfVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIlxcbiAgXFxuICAuY29udGFpbmVyIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgfVxcbiAgXFxuICAuZ2xpdGNoIHtcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0ZXh0LXNoYWRvdzogMC4wNWVtIDAgMCAjMDBmZmZjLCAtMC4wM2VtIC0wLjA0ZW0gMCAjZmMwMGZmLFxcbiAgICAgIDAuMDI1ZW0gMC4wNGVtIDAgI2ZmZmMwMDtcXG4gICAgYW5pbWF0aW9uOiBnbGl0Y2ggNzI1bXMgaW5maW5pdGU7XFxuICB9XFxuICBcXG4gIC5nbGl0Y2ggc3BhbiB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgfVxcbiAgXFxuICAuZ2xpdGNoIHNwYW46Zmlyc3QtY2hpbGQge1xcbiAgICBhbmltYXRpb246IGdsaXRjaCA1MDBtcyBpbmZpbml0ZTtcXG4gICAgY2xpcC1wYXRoOiBwb2x5Z29uKDAgMCwgMTAwJSAwLCAxMDAlIDM1JSwgMCAzNSUpO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMC4wNGVtLCAtMC4wM2VtKTtcXG4gICAgb3BhY2l0eTogMC43NTtcXG4gIH1cXG4gIFxcbiAgLmdsaXRjaCBzcGFuOmxhc3QtY2hpbGQge1xcbiAgICBhbmltYXRpb246IGdsaXRjaCAzNzVtcyBpbmZpbml0ZTtcXG4gICAgY2xpcC1wYXRoOiBwb2x5Z29uKDAgNjUlLCAxMDAlIDY1JSwgMTAwJSAxMDAlLCAwIDEwMCUpO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLjA0ZW0sIDAuMDNlbSk7XFxuICAgIG9wYWNpdHk6IDAuNzU7XFxuICB9XFxuICBcXG4gIEBrZXlmcmFtZXMgZ2xpdGNoIHtcXG4gICAgMCUge1xcbiAgICAgIHRleHQtc2hhZG93OiAwLjA1ZW0gMCAwICMwMGZmZmMsIC0wLjAzZW0gLTAuMDRlbSAwICNmYzAwZmYsXFxuICAgICAgICAwLjAyNWVtIDAuMDRlbSAwICNmZmZjMDA7XFxuICAgIH1cXG4gICAgMTUlIHtcXG4gICAgICB0ZXh0LXNoYWRvdzogMC4wNWVtIDAgMCAjMDBmZmZjLCAtMC4wM2VtIC0wLjA0ZW0gMCAjZmMwMGZmLFxcbiAgICAgICAgMC4wMjVlbSAwLjA0ZW0gMCAjZmZmYzAwO1xcbiAgICB9XFxuICAgIDE2JSB7XFxuICAgICAgdGV4dC1zaGFkb3c6IC0wLjA1ZW0gLTAuMDI1ZW0gMCAjMDBmZmZjLCAwLjAyNWVtIDAuMDM1ZW0gMCAjZmMwMGZmLFxcbiAgICAgICAgLTAuMDVlbSAtMC4wNWVtIDAgI2ZmZmMwMDtcXG4gICAgfVxcbiAgICA0OSUge1xcbiAgICAgIHRleHQtc2hhZG93OiAtMC4wNWVtIC0wLjAyNWVtIDAgIzAwZmZmYywgMC4wMjVlbSAwLjAzNWVtIDAgI2ZjMDBmZixcXG4gICAgICAgIC0wLjA1ZW0gLTAuMDVlbSAwICNmZmZjMDA7XFxuICAgIH1cXG4gICAgNTAlIHtcXG4gICAgICB0ZXh0LXNoYWRvdzogMC4wNWVtIDAuMDM1ZW0gMCAjMDBmZmZjLCAwLjAzZW0gMCAwICNmYzAwZmYsXFxuICAgICAgICAwIC0wLjA0ZW0gMCAjZmZmYzAwO1xcbiAgICB9XFxuICAgIDk5JSB7XFxuICAgICAgdGV4dC1zaGFkb3c6IDAuMDVlbSAwLjAzNWVtIDAgIzAwZmZmYywgMC4wM2VtIDAgMCAjZmMwMGZmLFxcbiAgICAgICAgMCAtMC4wNGVtIDAgI2ZmZmMwMDtcXG4gICAgfVxcbiAgICAxMDAlIHtcXG4gICAgICB0ZXh0LXNoYWRvdzogLTAuMDVlbSAwIDAgIzAwZmZmYywgLTAuMDI1ZW0gLTAuMDRlbSAwICNmYzAwZmYsXFxuICAgICAgICAtMC4wNGVtIC0wLjAyNWVtIDAgI2ZmZmMwMDtcXG4gICAgfVxcbiAgfVxcbiAgXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzc19maWxlcy9nbGl0Y2guY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7O0VBRUU7SUFDRSxrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEI7OEJBQzBCO0lBQzFCLGdDQUFnQztFQUNsQzs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sT0FBTztFQUNUOztFQUVBO0lBQ0UsZ0NBQWdDO0lBQ2hDLGdEQUFnRDtJQUNoRCxzQ0FBc0M7SUFDdEMsYUFBYTtFQUNmOztFQUVBO0lBQ0UsZ0NBQWdDO0lBQ2hDLHNEQUFzRDtJQUN0RCxvQ0FBb0M7SUFDcEMsYUFBYTtFQUNmOztFQUVBO0lBQ0U7TUFDRTtnQ0FDMEI7SUFDNUI7SUFDQTtNQUNFO2dDQUMwQjtJQUM1QjtJQUNBO01BQ0U7aUNBQzJCO0lBQzdCO0lBQ0E7TUFDRTtpQ0FDMkI7SUFDN0I7SUFDQTtNQUNFOzJCQUNxQjtJQUN2QjtJQUNBO01BQ0U7MkJBQ3FCO0lBQ3ZCO0lBQ0E7TUFDRTtrQ0FDNEI7SUFDOUI7RUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJcXG4gIFxcbiAgLmNvbnRhaW5lciB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIH1cXG4gIFxcbiAgLmdsaXRjaCB7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdGV4dC1zaGFkb3c6IDAuMDVlbSAwIDAgIzAwZmZmYywgLTAuMDNlbSAtMC4wNGVtIDAgI2ZjMDBmZixcXG4gICAgICAwLjAyNWVtIDAuMDRlbSAwICNmZmZjMDA7XFxuICAgIGFuaW1hdGlvbjogZ2xpdGNoIDcyNW1zIGluZmluaXRlO1xcbiAgfVxcbiAgXFxuICAuZ2xpdGNoIHNwYW4ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gIH1cXG4gIFxcbiAgLmdsaXRjaCBzcGFuOmZpcnN0LWNoaWxkIHtcXG4gICAgYW5pbWF0aW9uOiBnbGl0Y2ggNTAwbXMgaW5maW5pdGU7XFxuICAgIGNsaXAtcGF0aDogcG9seWdvbigwIDAsIDEwMCUgMCwgMTAwJSAzNSUsIDAgMzUlKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTAuMDRlbSwgLTAuMDNlbSk7XFxuICAgIG9wYWNpdHk6IDAuNzU7XFxuICB9XFxuICBcXG4gIC5nbGl0Y2ggc3BhbjpsYXN0LWNoaWxkIHtcXG4gICAgYW5pbWF0aW9uOiBnbGl0Y2ggMzc1bXMgaW5maW5pdGU7XFxuICAgIGNsaXAtcGF0aDogcG9seWdvbigwIDY1JSwgMTAwJSA2NSUsIDEwMCUgMTAwJSwgMCAxMDAlKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMC4wNGVtLCAwLjAzZW0pO1xcbiAgICBvcGFjaXR5OiAwLjc1O1xcbiAgfVxcbiAgXFxuICBAa2V5ZnJhbWVzIGdsaXRjaCB7XFxuICAgIDAlIHtcXG4gICAgICB0ZXh0LXNoYWRvdzogMC4wNWVtIDAgMCAjMDBmZmZjLCAtMC4wM2VtIC0wLjA0ZW0gMCAjZmMwMGZmLFxcbiAgICAgICAgMC4wMjVlbSAwLjA0ZW0gMCAjZmZmYzAwO1xcbiAgICB9XFxuICAgIDE1JSB7XFxuICAgICAgdGV4dC1zaGFkb3c6IDAuMDVlbSAwIDAgIzAwZmZmYywgLTAuMDNlbSAtMC4wNGVtIDAgI2ZjMDBmZixcXG4gICAgICAgIDAuMDI1ZW0gMC4wNGVtIDAgI2ZmZmMwMDtcXG4gICAgfVxcbiAgICAxNiUge1xcbiAgICAgIHRleHQtc2hhZG93OiAtMC4wNWVtIC0wLjAyNWVtIDAgIzAwZmZmYywgMC4wMjVlbSAwLjAzNWVtIDAgI2ZjMDBmZixcXG4gICAgICAgIC0wLjA1ZW0gLTAuMDVlbSAwICNmZmZjMDA7XFxuICAgIH1cXG4gICAgNDklIHtcXG4gICAgICB0ZXh0LXNoYWRvdzogLTAuMDVlbSAtMC4wMjVlbSAwICMwMGZmZmMsIDAuMDI1ZW0gMC4wMzVlbSAwICNmYzAwZmYsXFxuICAgICAgICAtMC4wNWVtIC0wLjA1ZW0gMCAjZmZmYzAwO1xcbiAgICB9XFxuICAgIDUwJSB7XFxuICAgICAgdGV4dC1zaGFkb3c6IDAuMDVlbSAwLjAzNWVtIDAgIzAwZmZmYywgMC4wM2VtIDAgMCAjZmMwMGZmLFxcbiAgICAgICAgMCAtMC4wNGVtIDAgI2ZmZmMwMDtcXG4gICAgfVxcbiAgICA5OSUge1xcbiAgICAgIHRleHQtc2hhZG93OiAwLjA1ZW0gMC4wMzVlbSAwICMwMGZmZmMsIDAuMDNlbSAwIDAgI2ZjMDBmZixcXG4gICAgICAgIDAgLTAuMDRlbSAwICNmZmZjMDA7XFxuICAgIH1cXG4gICAgMTAwJSB7XFxuICAgICAgdGV4dC1zaGFkb3c6IC0wLjA1ZW0gMCAwICMwMGZmZmMsIC0wLjAyNWVtIC0wLjA0ZW0gMCAjZmMwMGZmLFxcbiAgICAgICAgLTAuMDRlbSAtMC4wMjVlbSAwICNmZmZjMDA7XFxuICAgIH1cXG4gIH1cXG4gIFwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHksaHRtbCB7XFxuICAgIG1pbi1oZWlnaHQ6MTAwdmg7XFxuICAgIHdpZHRoOjEwMCU7XFxuICAgIG1hcmdpbjowcHg7XFxuICAgIHBhZGRpbmc6MHB4O1xcbn1cXG5kaXYge1xcbiAgICBmb250LWZhbWlseTogQ29uc29sYXMsbW9uYWNvLG1vbm9zcGFjZTsgXFxufVxcblxcbmJvZHkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLmZvb3RlciAsIC5oZWFkZXIgLCAuY29udGVudCB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBcXG59XFxuLm5hdntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTtcXG4gICAgaGVpZ2h0OjQwcHg7XFxuICAgIHdpZHRoOjQwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogYXV0bztcXG59XFxuLmhlYWRlcntcXG4gICAgbWluLWhlaWdodDogbWF4KDEwdmgsNDBweCk7XFxuICAgIG1heC1oZWlnaHQ6MTB2aDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywxZnIpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwdmg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjYzkzNDdhMztcXG59XFxuLmNvbnRlbnQge1xcbiAgICBoZWlnaHQ6OTB2aDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzOCwgMjI3LCAxOTMpO1xcbn1cXG4uZm9vdGVye1xcbiAgICBoZWlnaHQ6MTAwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjYzkzNDdhMztcXG59XFxuLnRpdGxle1xcbiAgICBncmlkLWNvbHVtbjogMi8zO1xcbiAgICBoZWlnaHQ6MTAwJTtcXG4gICAgd2lkdGg6MTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDoxMHB4O1xcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xcbiAgICBtaW4taGVpZ2h0OiA0MHB4O1xcbiAgICB3aWR0aDogYXV0bztcXG5cXG59XFxuLmV4dGVuZHtcXG4gICAgZ3JpZC1jb2x1bW46IDEvMjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgbWFyZ2luLWxlZnQ6MTAlO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBoZWlnaHQ6MTAwJTtcXG4gICAgbWluLWhlaWdodDogNDBweDtcXG59XFxuI2Zyb2cgLCAjYmFyc3tcXG4gICAgbWF4LWhlaWdodDoxMDAlO1xcbiAgICB3aWR0aDphdXRvO1xcbn1cXG4ucGFnZS1uYW1le1xcbiAgICBmb250LWZhbWlseTogQ3liZXI7XFxuICAgIGZvbnQtc2l6ZToyNXB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgZm9udC12YXJpYW50OiBzbWFsbC1jYXBzO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzX2ZpbGVzL21haW5fc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFVBQVU7SUFDVixVQUFVO0lBQ1YsV0FBVztBQUNmO0FBQ0E7SUFDSSxzQ0FBc0M7QUFDMUM7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDhCQUE4QjtJQUM5QixxQkFBcUI7QUFDekI7QUFDQTtJQUNJLHNCQUFzQjtJQUN0QixXQUFXOztBQUVmO0FBQ0E7SUFDSSx3Q0FBd0M7SUFDeEMsV0FBVztJQUNYLFVBQVU7SUFDVixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsV0FBVztBQUNmO0FBQ0E7SUFDSSwwQkFBMEI7SUFDMUIsZUFBZTtJQUNmLGFBQWE7SUFDYixvQ0FBb0M7SUFDcEMsd0JBQXdCO0lBQ3hCLDJCQUEyQjtBQUMvQjtBQUNBO0lBQ0ksV0FBVztJQUNYLG9DQUFvQztBQUN4QztBQUNBO0lBQ0ksWUFBWTtJQUNaLDJCQUEyQjtBQUMvQjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxVQUFVO0lBQ1YsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsUUFBUTtJQUNSLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsV0FBVzs7QUFFZjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGVBQWU7SUFDZixVQUFVO0FBQ2Q7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLHdCQUF3QjtBQUM1QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5LGh0bWwge1xcbiAgICBtaW4taGVpZ2h0OjEwMHZoO1xcbiAgICB3aWR0aDoxMDAlO1xcbiAgICBtYXJnaW46MHB4O1xcbiAgICBwYWRkaW5nOjBweDtcXG59XFxuZGl2IHtcXG4gICAgZm9udC1mYW1pbHk6IENvbnNvbGFzLG1vbmFjbyxtb25vc3BhY2U7IFxcbn1cXG5cXG5ib2R5IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxufVxcbi5mb290ZXIgLCAuaGVhZGVyICwgLmNvbnRlbnQge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgXFxufVxcbi5uYXZ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XFxuICAgIGhlaWdodDo0MHB4O1xcbiAgICB3aWR0aDo0MHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWF4LWhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IGF1dG87XFxufVxcbi5oZWFkZXJ7XFxuICAgIG1pbi1oZWlnaHQ6IG1heCgxMHZoLDQwcHgpO1xcbiAgICBtYXgtaGVpZ2h0OjEwdmg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsMWZyKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMHZoO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2M5MzQ3YTM7XFxufVxcbi5jb250ZW50IHtcXG4gICAgaGVpZ2h0Ojkwdmg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzgsIDIyNywgMTkzKTtcXG59XFxuLmZvb3RlcntcXG4gICAgaGVpZ2h0OjEwMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2M5MzQ3YTM7XFxufVxcbi50aXRsZXtcXG4gICAgZ3JpZC1jb2x1bW46IDIvMztcXG4gICAgaGVpZ2h0OjEwMCU7XFxuICAgIHdpZHRoOjEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6MTBweDtcXG4gICAgbWF4LWhlaWdodDogMTAwJTtcXG4gICAgbWluLWhlaWdodDogNDBweDtcXG4gICAgd2lkdGg6IGF1dG87XFxuXFxufVxcbi5leHRlbmR7XFxuICAgIGdyaWQtY29sdW1uOiAxLzI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIG1hcmdpbi1sZWZ0OjEwJTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OjEwMCU7XFxuICAgIG1pbi1oZWlnaHQ6IDQwcHg7XFxufVxcbiNmcm9nICwgI2JhcnN7XFxuICAgIG1heC1oZWlnaHQ6MTAwJTtcXG4gICAgd2lkdGg6YXV0bztcXG59XFxuLnBhZ2UtbmFtZXtcXG4gICAgZm9udC1mYW1pbHk6IEN5YmVyO1xcbiAgICBmb250LXNpemU6MjVweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGZvbnQtdmFyaWFudDogc21hbGwtY2FwcztcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJhc3NldHMvaW1hZ2VzL2Zyb2cucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImFzc2V0cy9pbWFnZXMvbWVudS5wbmdcIjsiLCIvLyBNb2R1bGVcbnZhciBjb2RlID0gXCI8ZGl2IGNsYXNzPVxcXCJjb250ZW50XFxcIj5cXG5cXG4gICAgICBcXG48L2Rpdj5cIjtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IGNvZGU7IiwiLy8gTW9kdWxlXG52YXIgY29kZSA9IFwiPGRpdiBjbGFzcz1cXFwiZm9vdGVyXFxcIj5cXG4gICAgPHVsPlxcbiAgICAgICAgPGxpPlxcbiAgICAgICAgICAgIDxhIGhyZWY9XFxcImh0dHBzOi8vd3d3LmZsYXRpY29uLmNvbS9mcmVlLWljb25zL2Zyb2dcXFwiIHRpdGxlPVxcXCJmcm9nIGljb25zXFxcIj5Gcm9nIGljb25zIGNyZWF0ZWQgYnkgRnJlZXBpayAtIEZsYXRpY29uPC9hPlxcbiAgICAgICAgPC9saT5cXG4gICAgICAgIDxsaT5cXG4gICAgICAgICAgICA8YSBocmVmPVxcXCJodHRwczovL2NvZGVwZW4uaW8vY2Jhbmxhd2kvcGVuL3h4UkJlTVlcXFwiIHRpdGxlPVxcXCJ0aXRsZSBnbGl0Y2hcXFwiPlRleHQgZ2xpdGNoIGVmZmVjdCBieSBDaHJpc3RpbmUgQmFubGF3aSAtIENvZGVQZW48L2E+XFxuICAgICAgICA8L2xpPlxcbiAgICAgICAgPGxpPlxcbiAgICAgICAgICAgIDxhIGhyZWY9XFxcImh0dHBzOi8vY29kZXBlbi5pby9qaDN5L3Blbi9Qb0dieExwXFxcIiB0aXRsZT1cXFwidGl0bGUgZ2xpdGNoXFxcIj5CdXR0b24gd2l0aCBnbGl0Y2ggZWZmZWN0IGJ5IEpoZXkgLSBDb2RlUGVuPC9hPlxcbiAgICAgICAgPC9saT5cXG4gICAgPC91bD5cXG48L2Rpdj5cIjtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IGNvZGU7IiwiLy8gTW9kdWxlXG52YXIgY29kZSA9IFwiPGRpdiBjbGFzcz1cXFwiaGVhZGVyXFxcIj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiZXh0ZW5kXFxcIj5cXG4gICAgICAgIDxidXR0b24gY2xhc3M9XFxcImN5YnItYnRuXFxcIj5cXG4gICAgICAgICAgICBNZW51PHNwYW4gYXJpYS1oaWRkZW4+Xzwvc3Bhbj5cXG4gICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbiBjbGFzcz1cXFwiY3lici1idG5fX2dsaXRjaFxcXCI+TWVudTwvc3Bhbj5cXG4gICAgICAgICAgICBcXG4gICAgICAgICAgPC9idXR0b24+XFxuICAgICAgICAgIFxcbiAgICA8L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz1cXFwidGl0bGVcXFwiPlxcbiAgICAgICAgPGltZyBpZD1cXFwiZnJvZ1xcXCI+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwYWdlLW5hbWVcXFwiPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbnRhaW5lclxcXCI+XFxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVxcXCJnbGl0Y2hcXFwiPlxcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj5Ub0RvTGlzdDwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICBUb0RvTGlzdFxcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj5Ub0RvTGlzdDwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgPC9wPlxcbiAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuPC9kaXY+XCI7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBjb2RlOyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9jb29sLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vY29vbC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZ2xpdGNoLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZ2xpdGNoLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluX3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbl9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGZ1bmN0aW9uIHN0b3JhZ2VBdmFpbGFibGUodHlwZSkge1xuICAgIGxldCBzdG9yYWdlO1xuICAgIHRyeSB7XG4gICAgICAgIHN0b3JhZ2UgPSB3aW5kb3dbdHlwZV07XG4gICAgICAgIGNvbnN0IHggPSAnX19zdG9yYWdlX3Rlc3RfXyc7XG4gICAgICAgIHN0b3JhZ2Uuc2V0SXRlbSh4LCB4KTtcbiAgICAgICAgc3RvcmFnZS5yZW1vdmVJdGVtKHgpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgcmV0dXJuIGUgaW5zdGFuY2VvZiBET01FeGNlcHRpb24gJiYgKFxuICAgICAgICAgICAgLy8gZXZlcnl0aGluZyBleGNlcHQgRmlyZWZveFxuICAgICAgICAgICAgZS5jb2RlPT09IDIyIHx8XG4gICAgICAgICAgICAvLyBGaXJlZm94XG4gICAgICAgICAgICBlLmNvZGUgPT09IDEwMTQgfHxcbiAgICAgICAgICAgIC8vIHRlc3QgbmFtZSBmaWVsZCB0b28sIGJlY2F1c2UgY29kZSBtaWdodCBub3QgYmUgcHJlc2VudFxuICAgICAgICAgICAgLy8gZXZlcnl0aGluZyBleGNlcHQgRmlyZWZveFxuICAgICAgICAgICAgZS5uYW1lID09PSAnUXVvdGFFeGNlZWRlZEVycm9yJyB8fFxuICAgICAgICAgICAgLy8gRmlyZWZveFxuICAgICAgICAgICAgZS5uYW1lID09PSAnTlNfRVJST1JfRE9NX1FVT1RBX1JFQUNIRUQnKSAmJlxuICAgICAgICAgICAgLy8gYWNrbm93bGVkZ2UgUXVvdGFFeGNlZWRlZEVycm9yIG9ubHkgaWYgdGhlcmUncyBzb21ldGhpbmcgYWxyZWFkeSBzdG9yZWRcbiAgICAgICAgICAgIChzdG9yYWdlICYmIHN0b3JhZ2UubGVuZ3RoICE9PSAwKTtcbiAgICB9XG59IiwiZXhwb3J0IGNvbnN0IHRhc2sgPSAoKT0+e1xuICAgIGNvbnN0IHZhcmlhYmxlID0gMzI7XG4gICAgLy9jb25zdHJ1Y3RvclxuICAgIC8vICAgICAgQXQgYSBtaW5pbXVtIHRoZXkgc2hvdWxkIGhhdmUgYSB0aXRsZSwgXG4gICAgLy8gZGVzY3JpcHRpb24sIGR1ZURhdGUgYW5kIHByaW9yaXR5LlxuICAgIC8vIFlvdSBtaWdodCBhbHNvIHdhbnQgdG8gaW5jbHVkZSBub3RlcyBvciBldmVuIGEgY2hlY2tsaXN0LlxuICAgIGZ1bmN0aW9uIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIGNvbnNvbGUubG9nKHZhcmlhYmxlKTtcbiAgICAgICAgY29uc29sZS5sb2coYGhlbGxvYCk7XG4gICAgfVxuICAgIGNvbnN0IGNvbnN0cnVjdG9yMiA9ICgpPT57XG4gICAgICAgLy8gY29uc29sZS5sb2codGhpcy52YXJpYWJsZSk7XG4gICAgfVxuICAgIHJldHVybntjb25zdHJ1Y3Rvcixjb25zdHJ1Y3RvcjJ9O1xufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgaGVhZGVyIGZyb20gXCIuL2h0bWxfZmlsZXMvaGVhZGVyLmh0bWxcIjtcbmltcG9ydCBjb250ZW50IGZyb20gXCIuL2h0bWxfZmlsZXMvY29udGVudC5odG1sXCI7XG5pbXBvcnQgIGZvb3RlciBmcm9tIFwiLi9odG1sX2ZpbGVzL2Zvb3Rlci5odG1sXCI7XG5pbXBvcnQge3N0b3JhZ2VBdmFpbGFibGV9IGZyb20gXCIuL3N0b3JhZ2VBdmFpbGFibGVcIjtcbmltcG9ydCB7dGFza30gZnJvbSBcIi4vdGFza0ZhY3RvcnkuanNcIjtcbmltcG9ydCBcIi4vY3NzX2ZpbGVzL21haW5fc3R5bGUuY3NzXCI7XG5pbXBvcnQgXCIuL2Nzc19maWxlcy9jb29sLmNzc1wiO1xuaW1wb3J0IFwiLi9jc3NfZmlsZXMvZ2xpdGNoLmNzc1wiO1xuXG5pbXBvcnQgXCIuL3BpY3R1cmVzL2Zyb2cucG5nXCI7XG5pbXBvcnQgXCIuL3BpY3R1cmVzL21lbnUucG5nXCI7XG5cbi8vaW1wb3J0IGZyb2cgZnJvbSBcIi4vYXNzZXRzXCI7XG5cbmRvY3VtZW50LmJvZHkuaW5uZXJIVE1MID0gaGVhZGVyO1xuZG9jdW1lbnQuYm9keS5pbm5lckhUTUwgKz0gY29udGVudDtcbmRvY3VtZW50LmJvZHkuaW5uZXJIVE1MICs9IGZvb3RlcjtcblxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGZyb2dgKS5zcmMgPSBcIi4vYXNzZXRzL2ltYWdlcy9mcm9nLnBuZ1wiO1xuXG5cbmlmIChzdG9yYWdlQXZhaWxhYmxlKCdsb2NhbFN0b3JhZ2UnKSkge1xuICAgIC8vIFlpcHBlZSEgV2UgY2FuIHVzZSBsb2NhbFN0b3JhZ2UgYXdlc29tZW5lc3NcbiAgICBjb25zb2xlLmxvZyhgc3Qgb3JhZ2UgYXZhaWxhYmxlYCk7XG5cbiAgfVxuICBlbHNlIHtcbiAgICAvLyBUb28gYmFkLCBubyBsb2NhbFN0b3JhZ2UgZm9yIHVzXG4gICAgY29uc29sZS5sb2coYHN0b3JhZ2UgdW5hdmFpbGFibGVgKTtcbn0gICAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=