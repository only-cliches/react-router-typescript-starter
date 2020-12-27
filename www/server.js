(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(global, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/pages/MainPage.tsx":
/*!********************************!*\
  !*** ./src/pages/MainPage.tsx ***!
  \********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const React = __webpack_require__(/*! react */ "react");
const env = "development" || 0;
class MainPage extends React.Component {
    render() {
        // Add helmet to control title at the view level
        // const helmet = Helmet.rewind();
        return (React.createElement("html", { lang: "en-us" },
            React.createElement("head", null,
                React.createElement("meta", { charSet: "utf-8" }),
                React.createElement("meta", { name: "viewport", content: "width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=0" }),
                React.createElement("title", null, "Home"),
                env === "development" ? React.createElement("script", { id: "livereload", src: "http://localhost:35729/livereload.js?snipver=1" }) : null,
                React.createElement("link", { href: "/build/style.css", rel: "stylesheet" }),
                React.createElement("link", { href: "/favicon.ico" })),
            React.createElement("body", null,
                React.createElement("div", { id: "app", dangerouslySetInnerHTML: { __html: this.props.content } }),
                React.createElement("script", { src: this.props.scriptSrc ? this.props.scriptSrc : "/build/app.js" }))));
    }
}
exports.default = MainPage;


/***/ }),

/***/ "./src/server.tsx":
/*!************************!*\
  !*** ./src/server.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const express = __webpack_require__(/*! express */ "express");
const errorHandler = __webpack_require__(/*! errorhandler */ "errorhandler");
const http = __webpack_require__(/*! http */ "http");
const path = __webpack_require__(/*! path */ "path");
const fs = __webpack_require__(/*! fs */ "fs");
const React = __webpack_require__(/*! react */ "react");
const ReactDOMServer = __webpack_require__(/*! react-dom/server */ "react-dom/server");
const react_router_1 = __webpack_require__(/*! react-router */ "react-router");
const assets = fs.readFileSync(path.join(__dirname, "webpack-assets.json"), { encoding: "utf-8" });
const app = express();
app.set('port', process.env.PORT || 3000);
const env = "development" || 0;
if ('development' === env) {
    console.log('Running in development mode');
    app.use(errorHandler());
}
app.use(express.static(path.join(__dirname, 'public')));
const MainPage_1 = __webpack_require__(/*! ./pages/MainPage */ "./src/pages/MainPage.tsx");
const appJS = JSON.parse(assets).app.js;
/////////////////////////////
//////////////////////////////
/////////////////////////////////////////
/////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////
/////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////
///
/////////
// SPA with no SSR in development mode
app.use((req, res, next) => {
    res.send(`<!DOCTYPE html>${ReactDOMServer.renderToString(React.createElement(MainPage_1.default, { content: "", scriptSrc: "" }))}`);
});
//////////
http.createServer(app).listen(app.get('port'), () => {
    console.log('Express server listening on port ' + app.get('port'));
});


/***/ }),

/***/ "errorhandler":
/*!*******************************!*\
  !*** external "errorhandler" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("errorhandler");;

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");;

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");;

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");;

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");;

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("react-dom/server");;

/***/ }),

/***/ "react-router":
/*!*******************************!*\
  !*** external "react-router" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("react-router");;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
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
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__("./src/server.tsx");
/******/ })()
;
});
//# sourceMappingURL=server.js.map