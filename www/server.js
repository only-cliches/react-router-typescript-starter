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
/******/ 	return __webpack_require__(__webpack_require__.s = 15);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(0);
class NotFoundView extends React.Component {
    render() {
        return React.createElement("div", null,
            React.createElement("h2", null, "404"),
            React.createElement("h3", null, "Page not found"));
    }
}
exports.default = NotFoundView;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(0);
class AboutView extends React.Component {
    render() {
        return React.createElement("div", null,
            React.createElement("h2", null, "About"),
            React.createElement("p", null,
                "This project includes a working example of React, React Router, and TypeScript with Webpack. It is ",
                React.createElement("a", { href: "https://github.com/ClickSimply/react-router-typescript-starter" }, "hosted on Github"),
                "."));
    }
}
exports.default = AboutView;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(0);
exports.Hello = (props) => React.createElement("p", null,
    "Hello, ",
    props.name,
    "!");


/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(0);
const react_router_dom_1 = __webpack_require__(5);
const Hello_1 = __webpack_require__(4);
class HomeView extends React.Component {
    render() {
        return React.createElement("div", null,
            React.createElement("h2", null, "Home"),
            React.createElement(Hello_1.Hello, { name: "world" }),
            React.createElement("div", null,
                React.createElement(react_router_dom_1.Link, { to: "/about" }, "About")));
    }
}
exports.default = HomeView;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(0);
const react_router_1 = __webpack_require__(1);
const HomeView_1 = __webpack_require__(6);
const AboutView_1 = __webpack_require__(3);
const NotFoundView_1 = __webpack_require__(2);
exports.RouteMap = () => (React.createElement("div", null,
    React.createElement(react_router_1.Switch, null,
        React.createElement(react_router_1.Route, { path: "/", exact: true, component: HomeView_1.default }),
        React.createElement(react_router_1.Route, { path: "/about", component: AboutView_1.default }),
        React.createElement(react_router_1.Route, { component: NotFoundView_1.default }))));


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(0);
const env = "production" || 'development';
class MainPage extends React.Component {
    render() {
        // Add helmet to control title at the view level
        // const helmet = Helmet.rewind();
        return (React.createElement("html", { lang: "en-us" },
            React.createElement("head", null,
                React.createElement("meta", { charSet: "utf-8" }),
                React.createElement("meta", { name: "viewport", content: "width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=0" }),
                React.createElement("title", null, "Home"),
                env === "development" ? React.createElement("script", { src: "http://localhost:35729/livereload.js?snipver=1" }) : null,
                React.createElement("link", { href: "/style.css", rel: "stylesheet" }),
                React.createElement("link", { href: "/favicon.ico" })),
            React.createElement("body", null,
                React.createElement("div", { id: "body", dangerouslySetInnerHTML: { __html: this.props.content } }),
                React.createElement("script", { src: "/app.js" }))));
    }
}
exports.default = MainPage;


/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("errorhandler");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const express = __webpack_require__(13);
const errorHandler = __webpack_require__(12);
const http = __webpack_require__(11);
const path = __webpack_require__(10);
const React = __webpack_require__(0);
const ReactDOMServer = __webpack_require__(9);
const react_router_1 = __webpack_require__(1);
const MainPage_1 = __webpack_require__(8);
const routes_1 = __webpack_require__(7);
const app = express();
app.set('port', process.env.PORT || 3000);
const env = "production" || 'development';
if ('development' === env) {
    console.log('Running in development mode');
    app.use(errorHandler());
}
app.use(express.static(path.join(__dirname, 'public')));
app.use((req, res, next) => {
    const content = ReactDOMServer.renderToString(React.createElement(react_router_1.StaticRouter, { location: req.url, context: {} },
        React.createElement(routes_1.RouteMap, null)));
    res.send(`<!DOCTYPE html>\r\n${ReactDOMServer.renderToString(React.createElement(MainPage_1.default, { content: content }))}`);
});
http.createServer(app).listen(app.get('port'), () => {
    console.log('Express server listening on port ' + app.get('port'));
});


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(14);


/***/ })
/******/ ]);
});