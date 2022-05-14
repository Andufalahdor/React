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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/server.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/server/indexTemplate.js":
/*!*************************************!*\
  !*** ./src/server/indexTemplate.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.indexTemplate = void 0;\r\nvar indexTemplate = function (content) { return \"\\n<!DOCTYPE html>\\n<html lang=\\\"en\\\">\\n\\n<head>\\n    <meta charset=\\\"UTF-8\\\">\\n    <meta http-equiv=\\\"X-UA-Compatible\\\" content=\\\"IE=edge\\\">\\n    <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1.0\\\">\\n    <title>ReactJS</title>\\n    <script src=\\\"/static/client.js\\\" type=\\\"application/javascript\\\"></script>\\n</head>\\n\\n<body>\\n    <div id=\\\"react_root\\\">\".concat(content, \"</div>\\n</body>\\n\\n</html>\\n\"); };\r\nexports.indexTemplate = indexTemplate;\r\n\n\n//# sourceURL=webpack:///./src/server/indexTemplate.js?");

/***/ }),

/***/ "./src/server/server.js":
/*!******************************!*\
  !*** ./src/server/server.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\r\nvar server_1 = __importDefault(__webpack_require__(/*! react-dom/server */ \"react-dom/server\"));\r\nvar Header_tsx_1 = __webpack_require__(/*! ../shared/Header.tsx */ \"./src/shared/Header.tsx\");\r\nvar indexTemplate_1 = __webpack_require__(/*! ./indexTemplate */ \"./src/server/indexTemplate.js\");\r\nvar app = (0, express_1.default)();\r\napp.use('/static', express_1.default.static('./dist/client'));\r\napp.get('/', function (req, res) {\r\n    res.send((0, indexTemplate_1.indexTemplate)(server_1.default.renderToString((0, Header_tsx_1.Header)())));\r\n});\r\napp.listen(3000, function () {\r\n    console.log('Server started on http:/localhost:3000');\r\n});\r\n\n\n//# sourceURL=webpack:///./src/server/server.js?");

/***/ }),

/***/ "./src/shared/Header.tsx":
/*!*******************************!*\
  !*** ./src/shared/Header.tsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __assign = (this && this.__assign) || function () {\r\n    __assign = Object.assign || function(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n                t[p] = s[p];\r\n        }\r\n        return t;\r\n    };\r\n    return __assign.apply(this, arguments);\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Header = exports.StarWarsNameFunction = void 0;\r\nvar root_1 = __webpack_require__(/*! react-hot-loader/root */ \"react-hot-loader/root\");\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar header_less_1 = __importDefault(__webpack_require__(/*! ./header.less */ \"./src/shared/header.less\"));\r\nvar unique_names_generator_1 = __webpack_require__(/*! unique-names-generator */ \"unique-names-generator\");\r\nfunction HeaderComponent() {\r\n    return (\r\n    // <StarWarsNameClass></StarWarsNameClass> // Компонент class \r\n    react_1.default.createElement(StarWarsNameFunction, null) // Компонент function\r\n    );\r\n}\r\n// class Components\r\n// class StarWarsNameClass extends React.PureComponent<{}, IStarWarsNameClassState> {\r\n// Состояние через перегрузку\r\n// state: Readonly<IStarWarsNameClassState> = { name: this.randomName(), count: 0 } // READONLY! !!\r\n// Состояния через конструктор \r\n// constructor(props: {}) {\r\n//     super(props)\r\n//     this.state = { name: this.randomName() }\r\n// }\r\n//     render() {\r\n//         return (\r\n//         <section>\r\n//             <div className={styles.example}>{this.state.name}</div>\r\n//             <button onClick={this.handleClick}> Give me name!</button>\r\n//         </section>\r\n//         );\r\n//     }\r\n//     private handleClick = () => {\r\n//         this.setState( {name: this.randomName() } )\r\n//         this.setState( (state, props) => ({count: state.count + 1}), () => {console.log(this.state.count)})\r\n//     };\r\n//     private randomName(): string {\r\n//         return uniqueNamesGenerator({dictionaries: [starWars], length: 1})\r\n//     }    \r\n// }\r\n// Functional Components \r\nfunction StarWarsNameFunction() {\r\n    var randomName = function () { return (0, unique_names_generator_1.uniqueNamesGenerator)({ dictionaries: [unique_names_generator_1.starWars], length: 1 }); };\r\n    // // Объявляем состояние через хук. \r\n    // const [name, setName] = React.useState(randomName);\r\n    // // Атомарное состояния\r\n    // const [count, setCount] = React.useState(0);\r\n    // const handleClick = () => {\r\n    //     setName(randomName);\r\n    //     setCount((prevCount: number) => prevCount + 1);\r\n    // };\r\n    // console.log(count);\r\n    // Объявляем Комплексное состояние в виде объекта \r\n    var _a = react_1.default.useState({ name: randomName(), count: 0 }), state = _a[0], setState = _a[1];\r\n    var handleClick = function () {\r\n        // setState ( (prevState: IStarWarsNameFunctionState) => ({ name: randomName(), count: prevState.count + 1 }));\r\n        // изменения состояния по отдельности с помощью спред (...prevState)\r\n        setState(function (prevState) { return (__assign(__assign({}, prevState), { name: randomName() })); });\r\n        setState(function (prevState) { return (__assign(__assign({}, prevState), { count: prevState.count + 1 })); });\r\n    };\r\n    console.log(state.count);\r\n    return (react_1.default.createElement(\"section\", null,\r\n        react_1.default.createElement(\"div\", { className: header_less_1.default.example },\r\n            \" \",\r\n            state.name,\r\n            \" \"),\r\n        react_1.default.createElement(\"button\", { onClick: handleClick }, \" Give me name!\")));\r\n}\r\nexports.StarWarsNameFunction = StarWarsNameFunction;\r\n// HMR\r\nexports.Header = (0, root_1.hot)(HeaderComponent);\r\n\n\n//# sourceURL=webpack:///./src/shared/Header.tsx?");

/***/ }),

/***/ "./src/shared/header.less":
/*!********************************!*\
  !*** ./src/shared/header.less ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"example\": \"header__example--45ehT\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/header.less?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

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

/***/ "react-hot-loader/root":
/*!****************************************!*\
  !*** external "react-hot-loader/root" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-hot-loader/root\");\n\n//# sourceURL=webpack:///external_%22react-hot-loader/root%22?");

/***/ }),

/***/ "unique-names-generator":
/*!*****************************************!*\
  !*** external "unique-names-generator" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"unique-names-generator\");\n\n//# sourceURL=webpack:///external_%22unique-names-generator%22?");

/***/ })

/******/ });