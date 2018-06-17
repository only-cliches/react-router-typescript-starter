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
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app/components/Hello.tsx":
/*!**************************************!*\
  !*** ./src/app/components/Hello.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst React = __webpack_require__(/*! react */ \"react\");\r\nexports.Hello = (props) => React.createElement(\"p\", null,\r\n    \"Hello, \",\r\n    props.name,\r\n    \"!\");\r\n\n\n//# sourceURL=webpack:///./src/app/components/Hello.tsx?");

/***/ }),

/***/ "./src/app/routes.tsx":
/*!****************************!*\
  !*** ./src/app/routes.tsx ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst React = __webpack_require__(/*! react */ \"react\");\r\nconst react_router_1 = __webpack_require__(/*! react-router */ \"react-router\");\r\nconst HomeView_1 = __webpack_require__(/*! ./views/HomeView */ \"./src/app/views/HomeView.tsx\");\r\nconst AboutView_1 = __webpack_require__(/*! ./views/AboutView */ \"./src/app/views/AboutView.tsx\");\r\nconst NotFoundView_1 = __webpack_require__(/*! ./views/NotFoundView */ \"./src/app/views/NotFoundView.tsx\");\r\nexports.RouteMap = () => (React.createElement(\"div\", null,\r\n    React.createElement(react_router_1.Switch, null,\r\n        React.createElement(react_router_1.Route, { path: \"/\", exact: true, component: HomeView_1.default }),\r\n        React.createElement(react_router_1.Route, { path: \"/about\", component: AboutView_1.default }),\r\n        React.createElement(react_router_1.Route, { component: NotFoundView_1.default }))));\r\n\n\n//# sourceURL=webpack:///./src/app/routes.tsx?");

/***/ }),

/***/ "./src/app/views/AboutView.tsx":
/*!*************************************!*\
  !*** ./src/app/views/AboutView.tsx ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst React = __webpack_require__(/*! react */ \"react\");\r\nclass AboutView extends React.Component {\r\n    render() {\r\n        return React.createElement(\"div\", null,\r\n            React.createElement(\"h2\", null, \"About\"),\r\n            React.createElement(\"p\", null,\r\n                \"This project includes a working example of React, React Router, and TypeScript with Webpack. It is \",\r\n                React.createElement(\"a\", { href: \"https://github.com/ClickSimply/react-router-typescript-starter\" }, \"hosted on Github\"),\r\n                \".\"));\r\n    }\r\n}\r\nexports.default = AboutView;\r\n\n\n//# sourceURL=webpack:///./src/app/views/AboutView.tsx?");

/***/ }),

/***/ "./src/app/views/HomeView.tsx":
/*!************************************!*\
  !*** ./src/app/views/HomeView.tsx ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst React = __webpack_require__(/*! react */ \"react\");\r\nconst react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\r\nconst Hello_1 = __webpack_require__(/*! ../components/Hello */ \"./src/app/components/Hello.tsx\");\r\nclass HomeView extends React.Component {\r\n    render() {\r\n        return React.createElement(\"div\", null,\r\n            React.createElement(\"h2\", null, \"Home\"),\r\n            React.createElement(Hello_1.Hello, { name: \"world\" }),\r\n            React.createElement(\"div\", null,\r\n                React.createElement(react_router_dom_1.Link, { to: \"/about\" }, \"About\")));\r\n    }\r\n}\r\nexports.default = HomeView;\r\n\n\n//# sourceURL=webpack:///./src/app/views/HomeView.tsx?");

/***/ }),

/***/ "./src/app/views/NotFoundView.tsx":
/*!****************************************!*\
  !*** ./src/app/views/NotFoundView.tsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst React = __webpack_require__(/*! react */ \"react\");\r\nclass NotFoundView extends React.Component {\r\n    render() {\r\n        return React.createElement(\"div\", null,\r\n            React.createElement(\"h2\", null, \"404\"),\r\n            React.createElement(\"h3\", null, \"Page not found\"));\r\n    }\r\n}\r\nexports.default = NotFoundView;\r\n\n\n//# sourceURL=webpack:///./src/app/views/NotFoundView.tsx?");

/***/ }),

/***/ "./src/pages/MainPage.tsx":
/*!********************************!*\
  !*** ./src/pages/MainPage.tsx ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst React = __webpack_require__(/*! react */ \"react\");\r\nconst env = \"development\" || 'development';\r\nclass MainPage extends React.Component {\r\n    render() {\r\n        // Add helmet to control title at the view level\r\n        // const helmet = Helmet.rewind();\r\n        return (React.createElement(\"html\", { lang: \"en-us\" },\r\n            React.createElement(\"head\", null,\r\n                React.createElement(\"meta\", { charSet: \"utf-8\" }),\r\n                React.createElement(\"meta\", { name: \"viewport\", content: \"width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=0\" }),\r\n                React.createElement(\"title\", null, \"Home\"),\r\n                env === \"development\" ? React.createElement(\"script\", { src: \"http://localhost:35729/livereload.js?snipver=1\" }) : null,\r\n                React.createElement(\"link\", { href: \"/style.css\", rel: \"stylesheet\" }),\r\n                React.createElement(\"link\", { href: \"/favicon.ico\" })),\r\n            React.createElement(\"body\", null,\r\n                React.createElement(\"div\", { id: \"body\", dangerouslySetInnerHTML: { __html: this.props.content } }),\r\n                React.createElement(\"script\", { src: \"/app.js\" }))));\r\n    }\r\n}\r\nexports.default = MainPage;\r\n\n\n//# sourceURL=webpack:///./src/pages/MainPage.tsx?");

/***/ }),

/***/ "./src/server.tsx":
/*!************************!*\
  !*** ./src/server.tsx ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst express = __webpack_require__(/*! express */ \"express\");\r\nconst errorHandler = __webpack_require__(/*! errorhandler */ \"errorhandler\");\r\nconst http = __webpack_require__(/*! http */ \"http\");\r\nconst path = __webpack_require__(/*! path */ \"path\");\r\nconst React = __webpack_require__(/*! react */ \"react\");\r\nconst ReactDOMServer = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\r\nconst react_router_1 = __webpack_require__(/*! react-router */ \"react-router\");\r\nconst MainPage_1 = __webpack_require__(/*! ./pages/MainPage */ \"./src/pages/MainPage.tsx\");\r\nconst routes_1 = __webpack_require__(/*! ./app/routes */ \"./src/app/routes.tsx\");\r\nconst app = express();\r\napp.set('port', process.env.PORT || 3000);\r\nconst env = \"development\" || 'development';\r\nif ('development' === env) {\r\n    console.log('Running in development mode');\r\n    app.use(errorHandler());\r\n}\r\napp.use(express.static(path.join(__dirname, 'public')));\r\napp.use((req, res, next) => {\r\n    const content = ReactDOMServer.renderToString(React.createElement(react_router_1.StaticRouter, { location: req.url, context: {} },\r\n        React.createElement(routes_1.RouteMap, null)));\r\n    res.send(`<!DOCTYPE html>\\r\\n${ReactDOMServer.renderToString(React.createElement(MainPage_1.default, { content: content }))}`);\r\n});\r\nhttp.createServer(app).listen(app.get('port'), () => {\r\n    console.log('Express server listening on port ' + app.get('port'));\r\n});\r\n\n\n//# sourceURL=webpack:///./src/server.tsx?");

/***/ }),

/***/ 0:
/*!******************************!*\
  !*** multi ./src/server.tsx ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! C:\\Users\\Scott\\react-router-typescript-starter\\src\\server.tsx */\"./src/server.tsx\");\n\n\n//# sourceURL=webpack:///multi_./src/server.tsx?");

/***/ }),

/***/ "errorhandler":
/*!*******************************!*\
  !*** external "errorhandler" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"errorhandler\");\n\n//# sourceURL=webpack:///external_%22errorhandler%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"http\");\n\n//# sourceURL=webpack:///external_%22http%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-router":
/*!*******************************!*\
  !*** external "react-router" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router\");\n\n//# sourceURL=webpack:///external_%22react-router%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ })

/******/ });
});