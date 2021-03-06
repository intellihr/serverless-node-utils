(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("lodash"), require("aws-sdk"), require("ramda"), require("http-status"), require("validator"), require("jsonschema"), require("clean-deep"), require("swagger-tools"), require("uuid/v4"), require("moment"), require("path"), require("mkdirp"), require("fs"), require("console"), require("serializerr"));
	else if(typeof define === 'function' && define.amd)
		define(["lodash", "aws-sdk", "ramda", "http-status", "validator", "jsonschema", "clean-deep", "swagger-tools", "uuid/v4", "moment", "path", "mkdirp", "fs", "console", "serializerr"], factory);
	else if(typeof exports === 'object')
		exports["serverless-node-utils"] = factory(require("lodash"), require("aws-sdk"), require("ramda"), require("http-status"), require("validator"), require("jsonschema"), require("clean-deep"), require("swagger-tools"), require("uuid/v4"), require("moment"), require("path"), require("mkdirp"), require("fs"), require("console"), require("serializerr"));
	else
		root["serverless-node-utils"] = factory(root["lodash"], root["aws-sdk"], root["ramda"], root["http-status"], root["validator"], root["jsonschema"], root["clean-deep"], root["swagger-tools"], root["uuid/v4"], root["moment"], root["path"], root["mkdirp"], root["fs"], root["console"], root["serializerr"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_6__, __WEBPACK_EXTERNAL_MODULE_8__, __WEBPACK_EXTERNAL_MODULE_9__, __WEBPACK_EXTERNAL_MODULE_10__, __WEBPACK_EXTERNAL_MODULE_12__, __WEBPACK_EXTERNAL_MODULE_14__, __WEBPACK_EXTERNAL_MODULE_21__, __WEBPACK_EXTERNAL_MODULE_23__, __WEBPACK_EXTERNAL_MODULE_24__, __WEBPACK_EXTERNAL_MODULE_25__, __WEBPACK_EXTERNAL_MODULE_26__, __WEBPACK_EXTERNAL_MODULE_29__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!**************************!*\
  !*** ./src/promisify.js ***!
  \**************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nexports.__esModule = true;\nexports.swaggerPromisify = exports.execPromisify = exports.awsPromisify = undefined;\n\nvar _lodash = __webpack_require__(/*! lodash */ 1);\n\nfunction swaggerCallbackHandler(resolve, reject) {\n  return (error, schema) => {\n    if (error) {\n      reject(error);\n    }\n    resolve(schema);\n  };\n}\n\nfunction execCallbackHandler(console) {\n  return (resolve, reject) => {\n    return (error, stdout, stderr) => {\n      if (error) {\n        console.log(stdout);\n        console.log(stderr);\n        return reject(error);\n      }\n      resolve(stdout);\n    };\n  };\n}\n\nfunction awsCallbackHandler(resolve, reject) {\n  return (error, data) => {\n    if (error) {\n      return reject(error);\n    }\n    resolve(data);\n  };\n}\n\nfunction promisifyHandler(Promise, callbackHandler, fn) {\n  return (...args) => {\n    return new Promise((resolve, reject) => {\n      fn(...args, callbackHandler(resolve, reject));\n    });\n  };\n}\n\nconst promisify = (0, _lodash.curry)(promisifyHandler)(Promise);\n\nconst awsPromisify = exports.awsPromisify = (0, _lodash.curry)(promisify)(awsCallbackHandler);\nconst execPromisify = exports.execPromisify = (0, _lodash.curry)(promisify)(execCallbackHandler(console));\nconst swaggerPromisify = exports.swaggerPromisify = (0, _lodash.curry)(promisify)(swaggerCallbackHandler);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvcHJvbWlzaWZ5LmpzPzFmMGQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3VycnkgfSBmcm9tICdsb2Rhc2gnXG5cbmZ1bmN0aW9uIHN3YWdnZXJDYWxsYmFja0hhbmRsZXIgKHJlc29sdmUsIHJlamVjdCkge1xuICByZXR1cm4gKGVycm9yLCBzY2hlbWEpID0+IHtcbiAgICBpZiAoZXJyb3IpIHtcbiAgICAgIHJlamVjdChlcnJvcilcbiAgICB9XG4gICAgcmVzb2x2ZShzY2hlbWEpXG4gIH1cbn1cblxuZnVuY3Rpb24gZXhlY0NhbGxiYWNrSGFuZGxlciAoY29uc29sZSkge1xuICByZXR1cm4gKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIHJldHVybiAoZXJyb3IsIHN0ZG91dCwgc3RkZXJyKSA9PiB7XG4gICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coc3Rkb3V0KVxuICAgICAgICBjb25zb2xlLmxvZyhzdGRlcnIpXG4gICAgICAgIHJldHVybiByZWplY3QoZXJyb3IpXG4gICAgICB9XG4gICAgICByZXNvbHZlKHN0ZG91dClcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXdzQ2FsbGJhY2tIYW5kbGVyIChyZXNvbHZlLCByZWplY3QpIHtcbiAgcmV0dXJuIChlcnJvciwgZGF0YSkgPT4ge1xuICAgIGlmIChlcnJvcikge1xuICAgICAgcmV0dXJuIHJlamVjdChlcnJvcilcbiAgICB9XG4gICAgcmVzb2x2ZShkYXRhKVxuICB9XG59XG5cbmZ1bmN0aW9uIHByb21pc2lmeUhhbmRsZXIgKFByb21pc2UsIGNhbGxiYWNrSGFuZGxlciwgZm4pIHtcbiAgcmV0dXJuICguLi5hcmdzKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGZuKC4uLmFyZ3MsIGNhbGxiYWNrSGFuZGxlcihyZXNvbHZlLCByZWplY3QpKVxuICAgIH0pXG4gIH1cbn1cblxuY29uc3QgcHJvbWlzaWZ5ID0gY3VycnkocHJvbWlzaWZ5SGFuZGxlcikoUHJvbWlzZSlcblxuZXhwb3J0IGNvbnN0IGF3c1Byb21pc2lmeSA9IGN1cnJ5KHByb21pc2lmeSkoYXdzQ2FsbGJhY2tIYW5kbGVyKVxuZXhwb3J0IGNvbnN0IGV4ZWNQcm9taXNpZnkgPSBjdXJyeShwcm9taXNpZnkpKGV4ZWNDYWxsYmFja0hhbmRsZXIoY29uc29sZSkpXG5leHBvcnQgY29uc3Qgc3dhZ2dlclByb21pc2lmeSA9IGN1cnJ5KHByb21pc2lmeSkoc3dhZ2dlckNhbGxiYWNrSGFuZGxlcilcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvcHJvbWlzaWZ5LmpzIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

eval("module.exports = require(\"lodash\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcImxvZGFzaFwiPzBjOGIiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibG9kYXNoXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwibG9kYXNoXCJcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!**************************!*\
  !*** external "aws-sdk" ***!
  \**************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

eval("module.exports = require(\"aws-sdk\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcImF3cy1zZGtcIj82NGUzIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF3cy1zZGtcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJhd3Mtc2RrXCJcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/*!************************!*\
  !*** external "ramda" ***!
  \************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

eval("module.exports = require(\"ramda\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcInJhbWRhXCI/OTU2OSJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyYW1kYVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJhbWRhXCJcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///3\n");

/***/ }),
/* 4 */
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nexports.__esModule = true;\nexports.logger = exports.cloudWatch = exports.sqs = exports.s3 = exports.dynamoDB = exports.kinesis = exports.swagger = exports.execPromisify = exports.awsPromisify = exports.jsValidate = exports.Response = undefined;\n\nvar _response = __webpack_require__(/*! ./response */ 5);\n\nvar _response2 = _interopRequireDefault(_response);\n\nvar _jsonSchema = __webpack_require__(/*! ./jsonSchema */ 7);\n\nvar _promisify = __webpack_require__(/*! ./promisify */ 0);\n\nvar _swagger2 = __webpack_require__(/*! ./swagger */ 11);\n\nvar _kinesis2 = __webpack_require__(/*! ./kinesis */ 13);\n\nvar _dynamoDB2 = __webpack_require__(/*! ./dynamoDB */ 15);\n\nvar _s = __webpack_require__(/*! ./s3 */ 16);\n\nvar _sqs2 = __webpack_require__(/*! ./sqs */ 17);\n\nvar _cloudWatch2 = __webpack_require__(/*! ./cloudWatch */ 18);\n\nvar _logger2 = __webpack_require__(/*! ./logger */ 19);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst Response = exports.Response = _response2.default;\n\nconst jsValidate = exports.jsValidate = _jsonSchema.validate;\n\nconst awsPromisify = exports.awsPromisify = _promisify.awsPromisify;\nconst execPromisify = exports.execPromisify = _promisify.execPromisify;\n\nconst swagger = exports.swagger = _swagger2.swagger;\n\nconst kinesis = exports.kinesis = _kinesis2.kinesis;\nconst dynamoDB = exports.dynamoDB = _dynamoDB2.dynamoDB;\nconst s3 = exports.s3 = _s.s3;\nconst sqs = exports.sqs = _sqs2.sqs;\nconst cloudWatch = exports.cloudWatch = _cloudWatch2.cloudWatch;\n\nconst logger = exports.logger = _logger2.logger;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvaW5kZXguanM/MWZkZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVzcCBmcm9tICcuL3Jlc3BvbnNlJ1xuaW1wb3J0IHsgdmFsaWRhdGUgYXMganN2IH0gZnJvbSAnLi9qc29uU2NoZW1hJ1xuaW1wb3J0IHsgYXdzUHJvbWlzaWZ5IGFzIGF3c3AsIGV4ZWNQcm9taXNpZnkgYXMgZXhlY3AgfSBmcm9tICcuL3Byb21pc2lmeSdcbmltcG9ydCB7IHN3YWdnZXIgYXMgX3N3YWdnZXIgfSBmcm9tICcuL3N3YWdnZXInXG5pbXBvcnQgeyBraW5lc2lzIGFzIF9raW5lc2lzIH0gZnJvbSAnLi9raW5lc2lzJ1xuaW1wb3J0IHsgZHluYW1vREIgYXMgX2R5bmFtb0RCIH0gZnJvbSAnLi9keW5hbW9EQidcbmltcG9ydCB7IHMzIGFzIF9zMyB9IGZyb20gJy4vczMnXG5pbXBvcnQgeyBzcXMgYXMgX3NxcyB9IGZyb20gJy4vc3FzJ1xuaW1wb3J0IHsgY2xvdWRXYXRjaCBhcyBfY2xvdWRXYXRjaCB9IGZyb20gJy4vY2xvdWRXYXRjaCdcbmltcG9ydCB7IGxvZ2dlciBhcyBfbG9nZ2VyIH0gZnJvbSAnLi9sb2dnZXInXG5cbmV4cG9ydCBjb25zdCBSZXNwb25zZSA9IFJlc3BcblxuZXhwb3J0IGNvbnN0IGpzVmFsaWRhdGUgPSBqc3ZcblxuZXhwb3J0IGNvbnN0IGF3c1Byb21pc2lmeSA9IGF3c3BcbmV4cG9ydCBjb25zdCBleGVjUHJvbWlzaWZ5ID0gZXhlY3BcblxuZXhwb3J0IGNvbnN0IHN3YWdnZXIgPSBfc3dhZ2dlclxuXG5leHBvcnQgY29uc3Qga2luZXNpcyA9IF9raW5lc2lzXG5leHBvcnQgY29uc3QgZHluYW1vREIgPSBfZHluYW1vREJcbmV4cG9ydCBjb25zdCBzMyA9IF9zM1xuZXhwb3J0IGNvbnN0IHNxcyA9IF9zcXNcbmV4cG9ydCBjb25zdCBjbG91ZFdhdGNoID0gX2Nsb3VkV2F0Y2hcblxuZXhwb3J0IGNvbnN0IGxvZ2dlciA9IF9sb2dnZXJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvaW5kZXguanMiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///4\n");

/***/ }),
/* 5 */
/*!*************************!*\
  !*** ./src/response.js ***!
  \*************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nexports.__esModule = true;\n\nvar _lodash = __webpack_require__(/*! lodash */ 1);\n\nvar _httpStatus = __webpack_require__(/*! http-status */ 6);\n\nvar _httpStatus2 = _interopRequireDefault(_httpStatus);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nclass Response {\n  constructor(callback, {\n    cors = false\n  } = {}) {\n    this._callback = callback;\n    this._corsHeaders = cors ? {\n      'Access-Control-Allow-Origin': '*',\n      'Access-Control-Allow-Credentials': true\n    } : {};\n  }\n\n  emptyResponse() {\n    return this._callback(null, {\n      statusCode: _httpStatus2.default.NO_CONTENT,\n      headers: this._corsHeaders\n    });\n  }\n\n  successResponse({\n    response = {}\n  } = {}) {\n    return this._callback(null, {\n      statusCode: _httpStatus2.default.OK,\n      headers: this._corsHeaders,\n      body: JSON.stringify(response)\n    });\n  }\n\n  resourceNotFoundResponse() {\n    return this._callback(null, {\n      statusCode: _httpStatus2.default.NOT_FOUND,\n      headers: this._corsHeaders,\n      body: JSON.stringify({\n        error: 'Resource not found'\n      })\n    });\n  }\n\n  forbiddenResponse() {\n    return this._callback(null, {\n      statusCode: _httpStatus2.default.FORBIDDEN,\n      headers: this._corsHeaders,\n      body: JSON.stringify({\n        error: 'Forbidden Access'\n      })\n    });\n  }\n\n  errorResponse({\n    error = null\n  } = {}) {\n    if (error) {\n      console.log(error);\n    }\n\n    return this._callback(null, {\n      statusCode: _httpStatus2.default.INTERNAL_SERVER_ERROR,\n      headers: this._corsHeaders,\n      body: JSON.stringify({\n        error: 'Error'\n      })\n    });\n  }\n\n  clientErrorResponse({\n    errors\n  }) {\n    const returnErrors = (0, _lodash.map)(errors, error => {\n      const instance = (0, _lodash.toString)(error.property);\n      const prefix = instance ? instance + ' ' : instance;\n\n      return {\n        code: (0, _lodash.defaultTo)(error.code, _httpStatus2.default.BAD_REQUEST),\n        detail: `${prefix}${(0, _lodash.defaultTo)(error.message, 'Bad Request')}`\n      };\n    });\n\n    return this._callback(null, {\n      statusCode: _httpStatus2.default.BAD_REQUEST,\n      headers: this._corsHeaders,\n      body: JSON.stringify({\n        errors: returnErrors\n      })\n    });\n  }\n}\nexports.default = Response;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvcmVzcG9uc2UuanM/ZDBmNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBkZWZhdWx0VG8sIG1hcCwgdG9TdHJpbmcgfSBmcm9tICdsb2Rhc2gnXG5pbXBvcnQgSFRUUFN0YXR1cyBmcm9tICdodHRwLXN0YXR1cydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVzcG9uc2Uge1xuICBjb25zdHJ1Y3RvciAoXG4gICAgY2FsbGJhY2ssXG4gICAge1xuICAgICAgY29ycyA9IGZhbHNlXG4gICAgfSA9IHt9XG4gICkge1xuICAgIHRoaXMuX2NhbGxiYWNrID0gY2FsbGJhY2tcbiAgICB0aGlzLl9jb3JzSGVhZGVycyA9IGNvcnMgPyB7XG4gICAgICAnQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luJzogJyonLFxuICAgICAgJ0FjY2Vzcy1Db250cm9sLUFsbG93LUNyZWRlbnRpYWxzJzogdHJ1ZVxuICAgIH0gOiB7fVxuICB9XG5cbiAgZW1wdHlSZXNwb25zZSAoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NhbGxiYWNrKG51bGwsIHtcbiAgICAgIHN0YXR1c0NvZGU6IEhUVFBTdGF0dXMuTk9fQ09OVEVOVCxcbiAgICAgIGhlYWRlcnM6IHRoaXMuX2NvcnNIZWFkZXJzXG4gICAgfSlcbiAgfVxuXG4gIHN1Y2Nlc3NSZXNwb25zZSAoXG4gICAge1xuICAgICAgcmVzcG9uc2UgPSB7fVxuICAgIH0gPSB7fVxuICApIHtcbiAgICByZXR1cm4gdGhpcy5fY2FsbGJhY2sobnVsbCwge1xuICAgICAgc3RhdHVzQ29kZTogSFRUUFN0YXR1cy5PSyxcbiAgICAgIGhlYWRlcnM6IHRoaXMuX2NvcnNIZWFkZXJzLFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocmVzcG9uc2UpXG4gICAgfSlcbiAgfVxuXG4gIHJlc291cmNlTm90Rm91bmRSZXNwb25zZSAoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NhbGxiYWNrKG51bGwsIHtcbiAgICAgIHN0YXR1c0NvZGU6IEhUVFBTdGF0dXMuTk9UX0ZPVU5ELFxuICAgICAgaGVhZGVyczogdGhpcy5fY29yc0hlYWRlcnMsXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIGVycm9yOiAnUmVzb3VyY2Ugbm90IGZvdW5kJ1xuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgZm9yYmlkZGVuUmVzcG9uc2UgKCkge1xuICAgIHJldHVybiB0aGlzLl9jYWxsYmFjayhudWxsLCB7XG4gICAgICBzdGF0dXNDb2RlOiBIVFRQU3RhdHVzLkZPUkJJRERFTixcbiAgICAgIGhlYWRlcnM6IHRoaXMuX2NvcnNIZWFkZXJzLFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICBlcnJvcjogJ0ZvcmJpZGRlbiBBY2Nlc3MnXG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICBlcnJvclJlc3BvbnNlIChcbiAgICB7XG4gICAgICBlcnJvciA9IG51bGxcbiAgICB9ID0ge31cbiAgKSB7XG4gICAgaWYgKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5fY2FsbGJhY2sobnVsbCwge1xuICAgICAgc3RhdHVzQ29kZTogSFRUUFN0YXR1cy5JTlRFUk5BTF9TRVJWRVJfRVJST1IsXG4gICAgICBoZWFkZXJzOiB0aGlzLl9jb3JzSGVhZGVycyxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgZXJyb3I6ICdFcnJvcidcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIGNsaWVudEVycm9yUmVzcG9uc2UgKFxuICAgIHtcbiAgICAgIGVycm9yc1xuICAgIH1cbiAgKSB7XG4gICAgY29uc3QgcmV0dXJuRXJyb3JzID0gbWFwKGVycm9ycywgZXJyb3IgPT4ge1xuICAgICAgY29uc3QgaW5zdGFuY2UgPSB0b1N0cmluZyhlcnJvci5wcm9wZXJ0eSlcbiAgICAgIGNvbnN0IHByZWZpeCA9IGluc3RhbmNlID8gaW5zdGFuY2UgKyAnICcgOiBpbnN0YW5jZVxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBjb2RlOiBkZWZhdWx0VG8oZXJyb3IuY29kZSwgSFRUUFN0YXR1cy5CQURfUkVRVUVTVCksXG4gICAgICAgIGRldGFpbDogYCR7cHJlZml4fSR7ZGVmYXVsdFRvKGVycm9yLm1lc3NhZ2UsICdCYWQgUmVxdWVzdCcpfWBcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgcmV0dXJuIHRoaXMuX2NhbGxiYWNrKG51bGwsIHtcbiAgICAgIHN0YXR1c0NvZGU6IEhUVFBTdGF0dXMuQkFEX1JFUVVFU1QsXG4gICAgICBoZWFkZXJzOiB0aGlzLl9jb3JzSGVhZGVycyxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgZXJyb3JzOiByZXR1cm5FcnJvcnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9yZXNwb25zZS5qcyJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7OztBQUNBO0FBQ0E7QUFHQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBRUE7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFIQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUhBO0FBT0E7QUFDQTtBQUNBO0FBRUE7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBSEE7QUFPQTtBQUNBO0FBQ0E7QUFFQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFIQTtBQU9BO0FBN0ZBO0FBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///5\n");

/***/ }),
/* 6 */
/*!******************************!*\
  !*** external "http-status" ***!
  \******************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

eval("module.exports = require(\"http-status\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcImh0dHAtc3RhdHVzXCI/MjgwMiJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJodHRwLXN0YXR1c1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImh0dHAtc3RhdHVzXCJcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///6\n");

/***/ }),
/* 7 */
/*!***************************!*\
  !*** ./src/jsonSchema.js ***!
  \***************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nexports.__esModule = true;\nexports.validate = undefined;\n\nvar _lodash = __webpack_require__(/*! lodash */ 1);\n\nvar _ramda = __webpack_require__(/*! ramda */ 3);\n\nvar R = _interopRequireWildcard(_ramda);\n\nvar _validator = __webpack_require__(/*! validator */ 8);\n\nvar _validator2 = _interopRequireDefault(_validator);\n\nvar _jsonschema = __webpack_require__(/*! jsonschema */ 9);\n\nvar _cleanDeep = __webpack_require__(/*! clean-deep */ 10);\n\nvar _cleanDeep2 = _interopRequireDefault(_cleanDeep);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nfunction allowEmpty(fn) {\n  return (input, ...args) => {\n    if ((0, _lodash.isNil)(input)) {\n      return () => true;\n    }\n    return fn(input, ...args);\n  };\n}\n\nfunction allowNumber(fn) {\n  return (input, ...args) => {\n    if ((0, _lodash.isNumber)(input)) {\n      return fn((0, _lodash.toString)(input), ...args);\n    }\n    return fn(input, ...args);\n  };\n}\n\nconst defaultValidator = R.compose(allowEmpty, allowNumber);\n\nclass JsonSchemaValidator extends _jsonschema.Validator {\n  constructor() {\n    super();\n\n    this.customFormats = {\n      iso8601: input => defaultValidator(_validator2.default.isISO8601)(input),\n      uuid: input => defaultValidator(_validator2.default.isUUID)(input),\n      url: input => defaultValidator(_validator2.default.isURL)(input, { require_tld: false, allow_underscores: true })\n    };\n  }\n}\n\nconst jsv = new JsonSchemaValidator();\n\nconst validate = exports.validate = (body, schema) => jsv.validate.call(jsv, (0, _cleanDeep2.default)(body, {\n  emptyArrays: false,\n  emptyObjects: false,\n  emptyStrings: false,\n  nullValues: true,\n  undefinedValues: true\n}), schema);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvanNvblNjaGVtYS5qcz83MjEyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGlzTmlsLCBpc051bWJlciwgdG9TdHJpbmcgfSBmcm9tICdsb2Rhc2gnXG5pbXBvcnQgKiBhcyBSIGZyb20gJ3JhbWRhJ1xuaW1wb3J0IHZhbGlkYXRvciBmcm9tICd2YWxpZGF0b3InXG5pbXBvcnQgeyBWYWxpZGF0b3IgYXMgSnNWYWxpZGF0b3IgfSBmcm9tICdqc29uc2NoZW1hJ1xuaW1wb3J0IGNsZWFuRGVlcCBmcm9tICdjbGVhbi1kZWVwJ1xuXG5mdW5jdGlvbiBhbGxvd0VtcHR5IChmbikge1xuICByZXR1cm4gKGlucHV0LCAuLi5hcmdzKSA9PiB7XG4gICAgaWYgKGlzTmlsKGlucHV0KSkge1xuICAgICAgcmV0dXJuICgpID0+IHRydWVcbiAgICB9XG4gICAgcmV0dXJuIGZuKGlucHV0LCAuLi5hcmdzKVxuICB9XG59XG5cbmZ1bmN0aW9uIGFsbG93TnVtYmVyIChmbikge1xuICByZXR1cm4gKGlucHV0LCAuLi5hcmdzKSA9PiB7XG4gICAgaWYgKGlzTnVtYmVyKGlucHV0KSkge1xuICAgICAgcmV0dXJuIGZuKHRvU3RyaW5nKGlucHV0KSwgLi4uYXJncylcbiAgICB9XG4gICAgcmV0dXJuIGZuKGlucHV0LCAuLi5hcmdzKVxuICB9XG59XG5cbmNvbnN0IGRlZmF1bHRWYWxpZGF0b3IgPSBSLmNvbXBvc2UoYWxsb3dFbXB0eSwgYWxsb3dOdW1iZXIpXG5cbmNsYXNzIEpzb25TY2hlbWFWYWxpZGF0b3IgZXh0ZW5kcyBKc1ZhbGlkYXRvciB7XG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICBzdXBlcigpXG5cbiAgICB0aGlzLmN1c3RvbUZvcm1hdHMgPSB7XG4gICAgICBpc284NjAxOiBpbnB1dCA9PiBkZWZhdWx0VmFsaWRhdG9yKHZhbGlkYXRvci5pc0lTTzg2MDEpKGlucHV0KSxcbiAgICAgIHV1aWQ6IGlucHV0ID0+IGRlZmF1bHRWYWxpZGF0b3IodmFsaWRhdG9yLmlzVVVJRCkoaW5wdXQpLFxuICAgICAgdXJsOiBpbnB1dCA9PiBkZWZhdWx0VmFsaWRhdG9yKHZhbGlkYXRvci5pc1VSTCkoXG4gICAgICAgIGlucHV0LFxuICAgICAgICB7IHJlcXVpcmVfdGxkOiBmYWxzZSwgYWxsb3dfdW5kZXJzY29yZXM6IHRydWUgfVxuICAgICAgKVxuICAgIH1cbiAgfVxufVxuXG5jb25zdCBqc3YgPSBuZXcgSnNvblNjaGVtYVZhbGlkYXRvcigpXG5cbmV4cG9ydCBjb25zdCB2YWxpZGF0ZSA9IChib2R5LCBzY2hlbWEpID0+IDo6anN2LnZhbGlkYXRlKFxuICBjbGVhbkRlZXAoXG4gICAgYm9keSxcbiAgICB7XG4gICAgICBlbXB0eUFycmF5czogZmFsc2UsXG4gICAgICBlbXB0eU9iamVjdHM6IGZhbHNlLFxuICAgICAgZW1wdHlTdHJpbmdzOiBmYWxzZSxcbiAgICAgIG51bGxWYWx1ZXM6IHRydWUsXG4gICAgICB1bmRlZmluZWRWYWx1ZXM6IHRydWVcbiAgICB9XG4gICksXG4gIHNjaGVtYVxuKVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9qc29uU2NoZW1hLmpzIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQVFBO0FBWkE7QUFDQTtBQWNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///7\n");

/***/ }),
/* 8 */
/*!****************************!*\
  !*** external "validator" ***!
  \****************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

eval("module.exports = require(\"validator\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcInZhbGlkYXRvclwiPzU0ZDEiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidmFsaWRhdG9yXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwidmFsaWRhdG9yXCJcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///8\n");

/***/ }),
/* 9 */
/*!*****************************!*\
  !*** external "jsonschema" ***!
  \*****************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

eval("module.exports = require(\"jsonschema\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcImpzb25zY2hlbWFcIj9jYmI4Il0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpzb25zY2hlbWFcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJqc29uc2NoZW1hXCJcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///9\n");

/***/ }),
/* 10 */
/*!*****************************!*\
  !*** external "clean-deep" ***!
  \*****************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

eval("module.exports = require(\"clean-deep\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTAuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjbGVhbi1kZWVwXCI/NzMyZiJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjbGVhbi1kZWVwXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiY2xlYW4tZGVlcFwiXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///10\n");

/***/ }),
/* 11 */
/*!************************!*\
  !*** ./src/swagger.js ***!
  \************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nexports.__esModule = true;\nexports.swagger = undefined;\n\nvar _swaggerTools = __webpack_require__(/*! swagger-tools */ 12);\n\nvar _promisify = __webpack_require__(/*! ./promisify */ 0);\n\nfunction swaggerToolHelper(swaggerSpecs, promisify) {\n  const {\n    v2\n  } = swaggerSpecs;\n\n  return {\n    composeModel: promisify(v2.composeModel.bind(v2))\n  };\n}\n\nconst swagger = exports.swagger = swaggerToolHelper(_swaggerTools.specs, _promisify.swaggerPromisify);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTEuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL3N3YWdnZXIuanM/YmY4ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBzcGVjcyBhcyBzd2FnZ2VyU3BlY3MgfSBmcm9tICdzd2FnZ2VyLXRvb2xzJ1xuaW1wb3J0IHsgc3dhZ2dlclByb21pc2lmeSB9IGZyb20gJy4vcHJvbWlzaWZ5J1xuXG5mdW5jdGlvbiBzd2FnZ2VyVG9vbEhlbHBlciAoc3dhZ2dlclNwZWNzLCBwcm9taXNpZnkpIHtcbiAgY29uc3Qge1xuICAgIHYyXG4gIH0gPSBzd2FnZ2VyU3BlY3NcblxuICByZXR1cm4ge1xuICAgIGNvbXBvc2VNb2RlbDogcHJvbWlzaWZ5KDo6djIuY29tcG9zZU1vZGVsKVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBzd2FnZ2VyID0gc3dhZ2dlclRvb2xIZWxwZXIoXG4gIHN3YWdnZXJTcGVjcyxcbiAgc3dhZ2dlclByb21pc2lmeVxuKVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9zd2FnZ2VyLmpzIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///11\n");

/***/ }),
/* 12 */
/*!********************************!*\
  !*** external "swagger-tools" ***!
  \********************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

eval("module.exports = require(\"swagger-tools\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTIuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzd2FnZ2VyLXRvb2xzXCI/Mzc4MyJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzd2FnZ2VyLXRvb2xzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwic3dhZ2dlci10b29sc1wiXG4vLyBtb2R1bGUgaWQgPSAxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///12\n");

/***/ }),
/* 13 */
/*!************************!*\
  !*** ./src/kinesis.js ***!
  \************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nexports.__esModule = true;\nexports.kinesis = undefined;\n\nvar _awsSdk = __webpack_require__(/*! aws-sdk */ 2);\n\nvar _awsSdk2 = _interopRequireDefault(_awsSdk);\n\nvar _v = __webpack_require__(/*! uuid/v4 */ 14);\n\nvar _v2 = _interopRequireDefault(_v);\n\nvar _promisify = __webpack_require__(/*! ./promisify */ 0);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction kinesisHelper(aws, process, uuid, promisify) {\n  const {\n    IS_OFFLINE,\n    KINESIS_ENDPOINT\n  } = process.env;\n\n  let options = {};\n\n  if (IS_OFFLINE) {\n    options = {\n      region: 'localhost',\n      endpoint: KINESIS_ENDPOINT,\n      credentials: new aws.Credentials('accessKey', 'secretKey')\n    };\n  }\n\n  const kinesis = new aws.Kinesis(options);\n\n  return {\n    createStream: promisify(kinesis.createStream.bind(kinesis)),\n    deleteStream: promisify(kinesis.deleteStream.bind(kinesis)),\n    putRecord: promisify(kinesis.putRecord.bind(kinesis)),\n    describeStream: promisify(kinesis.describeStream.bind(kinesis)),\n    getShardIterator: promisify(kinesis.getShardIterator.bind(kinesis)),\n    getRecords: promisify(kinesis.getRecords.bind(kinesis))\n  };\n}\n\nconst kinesis = exports.kinesis = kinesisHelper(_awsSdk2.default, process, _v2.default, _promisify.awsPromisify);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2tpbmVzaXMuanM/OTVhZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXdzIGZyb20gJ2F3cy1zZGsnXG5pbXBvcnQgdXVpZHY0IGZyb20gJ3V1aWQvdjQnXG5pbXBvcnQgeyBhd3NQcm9taXNpZnkgfSBmcm9tICcuL3Byb21pc2lmeSdcblxuZnVuY3Rpb24ga2luZXNpc0hlbHBlciAoYXdzLCBwcm9jZXNzLCB1dWlkLCBwcm9taXNpZnkpIHtcbiAgY29uc3Qge1xuICAgIElTX09GRkxJTkUsXG4gICAgS0lORVNJU19FTkRQT0lOVFxuICB9ID0gcHJvY2Vzcy5lbnZcblxuICBsZXQgb3B0aW9ucyA9IHt9XG5cbiAgaWYgKElTX09GRkxJTkUpIHtcbiAgICBvcHRpb25zID0ge1xuICAgICAgcmVnaW9uOiAnbG9jYWxob3N0JyxcbiAgICAgIGVuZHBvaW50OiBLSU5FU0lTX0VORFBPSU5ULFxuICAgICAgY3JlZGVudGlhbHM6IG5ldyBhd3MuQ3JlZGVudGlhbHMoJ2FjY2Vzc0tleScsICdzZWNyZXRLZXknKVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGtpbmVzaXMgPSBuZXcgYXdzLktpbmVzaXMob3B0aW9ucylcblxuICByZXR1cm4ge1xuICAgIGNyZWF0ZVN0cmVhbTogcHJvbWlzaWZ5KDo6a2luZXNpcy5jcmVhdGVTdHJlYW0pLFxuICAgIGRlbGV0ZVN0cmVhbTogcHJvbWlzaWZ5KDo6a2luZXNpcy5kZWxldGVTdHJlYW0pLFxuICAgIHB1dFJlY29yZDogcHJvbWlzaWZ5KDo6a2luZXNpcy5wdXRSZWNvcmQpLFxuICAgIGRlc2NyaWJlU3RyZWFtOiBwcm9taXNpZnkoOjpraW5lc2lzLmRlc2NyaWJlU3RyZWFtKSxcbiAgICBnZXRTaGFyZEl0ZXJhdG9yOiBwcm9taXNpZnkoOjpraW5lc2lzLmdldFNoYXJkSXRlcmF0b3IpLFxuICAgIGdldFJlY29yZHM6IHByb21pc2lmeSg6OmtpbmVzaXMuZ2V0UmVjb3JkcylcbiAgfVxufVxuXG5leHBvcnQgY29uc3Qga2luZXNpcyA9IGtpbmVzaXNIZWxwZXIoYXdzLCBwcm9jZXNzLCB1dWlkdjQsIGF3c1Byb21pc2lmeSlcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMva2luZXNpcy5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///13\n");

/***/ }),
/* 14 */
/*!**************************!*\
  !*** external "uuid/v4" ***!
  \**************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

eval("module.exports = require(\"uuid/v4\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTQuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ1dWlkL3Y0XCI/ZTk1OCJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ1dWlkL3Y0XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwidXVpZC92NFwiXG4vLyBtb2R1bGUgaWQgPSAxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///14\n");

/***/ }),
/* 15 */
/*!*************************!*\
  !*** ./src/dynamoDB.js ***!
  \*************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nexports.__esModule = true;\nexports.dynamoDB = undefined;\n\nvar _awsSdk = __webpack_require__(/*! aws-sdk */ 2);\n\nvar _awsSdk2 = _interopRequireDefault(_awsSdk);\n\nvar _promisify = __webpack_require__(/*! ./promisify */ 0);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction dynamoDBHelper(aws, process, promisify) {\n  const {\n    IS_OFFLINE,\n    DYNAMODB_ENDPOINT\n  } = process.env;\n\n  let options = {};\n\n  if (IS_OFFLINE) {\n    options = {\n      region: 'localhost',\n      endpoint: DYNAMODB_ENDPOINT,\n      credentials: new aws.Credentials('accessKey', 'secretKey')\n    };\n  }\n\n  const dynamoDBClient = new aws.DynamoDB.DocumentClient(options);\n  const dynamoDB = new aws.DynamoDB(options);\n\n  return {\n    delete: promisify(dynamoDBClient.delete.bind(dynamoDBClient)),\n    query: promisify(dynamoDBClient.query.bind(dynamoDBClient)),\n    put: promisify(dynamoDBClient.put.bind(dynamoDBClient)),\n    createTable: promisify(dynamoDB.createTable.bind(dynamoDB)),\n    deleteTable: promisify(dynamoDB.deleteTable.bind(dynamoDB)),\n    listTables: promisify(dynamoDB.listTables.bind(dynamoDB))\n  };\n}\n\nconst dynamoDB = exports.dynamoDB = dynamoDBHelper(_awsSdk2.default, process, _promisify.awsPromisify);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTUuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2R5bmFtb0RCLmpzPzBhZDEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF3cyBmcm9tICdhd3Mtc2RrJ1xuaW1wb3J0IHsgYXdzUHJvbWlzaWZ5IH0gZnJvbSAnLi9wcm9taXNpZnknXG5cbmZ1bmN0aW9uIGR5bmFtb0RCSGVscGVyIChhd3MsIHByb2Nlc3MsIHByb21pc2lmeSkge1xuICBjb25zdCB7XG4gICAgSVNfT0ZGTElORSxcbiAgICBEWU5BTU9EQl9FTkRQT0lOVFxuICB9ID0gcHJvY2Vzcy5lbnZcblxuICBsZXQgb3B0aW9ucyA9IHt9XG5cbiAgaWYgKElTX09GRkxJTkUpIHtcbiAgICBvcHRpb25zID0ge1xuICAgICAgcmVnaW9uOiAnbG9jYWxob3N0JyxcbiAgICAgIGVuZHBvaW50OiBEWU5BTU9EQl9FTkRQT0lOVCxcbiAgICAgIGNyZWRlbnRpYWxzOiBuZXcgYXdzLkNyZWRlbnRpYWxzKCdhY2Nlc3NLZXknLCAnc2VjcmV0S2V5JylcbiAgICB9XG4gIH1cblxuICBjb25zdCBkeW5hbW9EQkNsaWVudCA9IG5ldyBhd3MuRHluYW1vREIuRG9jdW1lbnRDbGllbnQob3B0aW9ucylcbiAgY29uc3QgZHluYW1vREIgPSBuZXcgYXdzLkR5bmFtb0RCKG9wdGlvbnMpXG5cbiAgcmV0dXJuIHtcbiAgICBkZWxldGU6IHByb21pc2lmeSg6OmR5bmFtb0RCQ2xpZW50LmRlbGV0ZSksXG4gICAgcXVlcnk6IHByb21pc2lmeSg6OmR5bmFtb0RCQ2xpZW50LnF1ZXJ5KSxcbiAgICBwdXQ6IHByb21pc2lmeSg6OmR5bmFtb0RCQ2xpZW50LnB1dCksXG4gICAgY3JlYXRlVGFibGU6IHByb21pc2lmeSg6OmR5bmFtb0RCLmNyZWF0ZVRhYmxlKSxcbiAgICBkZWxldGVUYWJsZTogcHJvbWlzaWZ5KDo6ZHluYW1vREIuZGVsZXRlVGFibGUpLFxuICAgIGxpc3RUYWJsZXM6IHByb21pc2lmeSg6OmR5bmFtb0RCLmxpc3RUYWJsZXMpXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGR5bmFtb0RCID0gZHluYW1vREJIZWxwZXIoYXdzLCBwcm9jZXNzLCBhd3NQcm9taXNpZnkpXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2R5bmFtb0RCLmpzIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///15\n");

/***/ }),
/* 16 */
/*!*******************!*\
  !*** ./src/s3.js ***!
  \*******************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nexports.__esModule = true;\nexports.s3 = undefined;\n\nvar _awsSdk = __webpack_require__(/*! aws-sdk */ 2);\n\nvar _awsSdk2 = _interopRequireDefault(_awsSdk);\n\nvar _promisify = __webpack_require__(/*! ./promisify */ 0);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction s3Helper(aws, process, promisify) {\n  const {\n    IS_OFFLINE,\n    S3_ENDPOINT\n  } = process.env;\n\n  let options = {};\n\n  if (IS_OFFLINE) {\n    options = {\n      region: 'localhost',\n      endpoint: S3_ENDPOINT,\n      credentials: new aws.Credentials('accessKey', 'secretKey'),\n      s3ForcePathStyle: true\n    };\n  }\n\n  const s3 = new aws.S3(options);\n\n  return {\n    putObject: promisify(s3.putObject.bind(s3)),\n    createBucket: promisify(s3.createBucket.bind(s3))\n  };\n}\n\nconst s3 = exports.s3 = s3Helper(_awsSdk2.default, process, _promisify.awsPromisify);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTYuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL3MzLmpzPzFhOTgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF3cyBmcm9tICdhd3Mtc2RrJ1xuaW1wb3J0IHsgYXdzUHJvbWlzaWZ5IH0gZnJvbSAnLi9wcm9taXNpZnknXG5cbmZ1bmN0aW9uIHMzSGVscGVyIChhd3MsIHByb2Nlc3MsIHByb21pc2lmeSkge1xuICBjb25zdCB7XG4gICAgSVNfT0ZGTElORSxcbiAgICBTM19FTkRQT0lOVFxuICB9ID0gcHJvY2Vzcy5lbnZcblxuICBsZXQgb3B0aW9ucyA9IHt9XG5cbiAgaWYgKElTX09GRkxJTkUpIHtcbiAgICBvcHRpb25zID0ge1xuICAgICAgcmVnaW9uOiAnbG9jYWxob3N0JyxcbiAgICAgIGVuZHBvaW50OiBTM19FTkRQT0lOVCxcbiAgICAgIGNyZWRlbnRpYWxzOiBuZXcgYXdzLkNyZWRlbnRpYWxzKCdhY2Nlc3NLZXknLCAnc2VjcmV0S2V5JyksXG4gICAgICBzM0ZvcmNlUGF0aFN0eWxlOiB0cnVlXG4gICAgfVxuICB9XG5cbiAgY29uc3QgczMgPSBuZXcgYXdzLlMzKG9wdGlvbnMpXG5cbiAgcmV0dXJuIHtcbiAgICBwdXRPYmplY3Q6IHByb21pc2lmeSg6OnMzLnB1dE9iamVjdCksXG4gICAgY3JlYXRlQnVja2V0OiBwcm9taXNpZnkoOjpzMy5jcmVhdGVCdWNrZXQpXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHMzID0gczNIZWxwZXIoYXdzLCBwcm9jZXNzLCBhd3NQcm9taXNpZnkpXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL3MzLmpzIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///16\n");

/***/ }),
/* 17 */
/*!********************!*\
  !*** ./src/sqs.js ***!
  \********************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nexports.__esModule = true;\nexports.sqs = undefined;\n\nvar _awsSdk = __webpack_require__(/*! aws-sdk */ 2);\n\nvar _awsSdk2 = _interopRequireDefault(_awsSdk);\n\nvar _promisify = __webpack_require__(/*! ./promisify */ 0);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction sqsHelper(aws, process, promisify) {\n  const {\n    IS_OFFLINE,\n    SQS_ENDPOINT\n  } = process.env;\n\n  let options = null;\n\n  if (IS_OFFLINE) {\n    options = {\n      region: 'localhost',\n      endpoint: SQS_ENDPOINT,\n      credentials: new aws.Credentials('accessKey', 'secretKey')\n    };\n  }\n\n  const sqs = options ? new aws.SQS(options) : new aws.SQS();\n\n  return {\n    createQueue: promisify(sqs.createQueue.bind(sqs)),\n    sendMessage: promisify(sqs.sendMessage.bind(sqs))\n  };\n}\n\nconst sqs = exports.sqs = sqsHelper(_awsSdk2.default, process, _promisify.awsPromisify);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTcuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL3Nxcy5qcz9hYmM4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBhd3MgZnJvbSAnYXdzLXNkaydcbmltcG9ydCB7IGF3c1Byb21pc2lmeSB9IGZyb20gJy4vcHJvbWlzaWZ5J1xuXG5mdW5jdGlvbiBzcXNIZWxwZXIgKGF3cywgcHJvY2VzcywgcHJvbWlzaWZ5KSB7XG4gIGNvbnN0IHtcbiAgICBJU19PRkZMSU5FLFxuICAgIFNRU19FTkRQT0lOVFxuICB9ID0gcHJvY2Vzcy5lbnZcblxuICBsZXQgb3B0aW9ucyA9IG51bGxcblxuICBpZiAoSVNfT0ZGTElORSkge1xuICAgIG9wdGlvbnMgPSB7XG4gICAgICByZWdpb246ICdsb2NhbGhvc3QnLFxuICAgICAgZW5kcG9pbnQ6IFNRU19FTkRQT0lOVCxcbiAgICAgIGNyZWRlbnRpYWxzOiBuZXcgYXdzLkNyZWRlbnRpYWxzKCdhY2Nlc3NLZXknLCAnc2VjcmV0S2V5JylcbiAgICB9XG4gIH1cblxuICBjb25zdCBzcXMgPSBvcHRpb25zID8gbmV3IGF3cy5TUVMob3B0aW9ucykgOiBuZXcgYXdzLlNRUygpXG5cbiAgcmV0dXJuIHtcbiAgICBjcmVhdGVRdWV1ZTogcHJvbWlzaWZ5KDo6c3FzLmNyZWF0ZVF1ZXVlKSxcbiAgICBzZW5kTWVzc2FnZTogcHJvbWlzaWZ5KDo6c3FzLnNlbmRNZXNzYWdlKVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBzcXMgPSBzcXNIZWxwZXIoYXdzLCBwcm9jZXNzLCBhd3NQcm9taXNpZnkpXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL3Nxcy5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///17\n");

/***/ }),
/* 18 */
/*!***************************!*\
  !*** ./src/cloudWatch.js ***!
  \***************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nexports.__esModule = true;\nexports.cloudWatch = undefined;\n\nvar _awsSdk = __webpack_require__(/*! aws-sdk */ 2);\n\nvar _awsSdk2 = _interopRequireDefault(_awsSdk);\n\nvar _promisify = __webpack_require__(/*! ./promisify */ 0);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst {\n  IS_OFFLINE,\n  CLOUDWATCH_ENDPOINT\n} = process.env;\n\nlet options = {};\n\nif (IS_OFFLINE) {\n  options = {\n    region: 'ap-southeast-2',\n    endpoint: CLOUDWATCH_ENDPOINT,\n    credentials: new _awsSdk2.default.Credentials('accessKey', 'secretKey'),\n    correctClockSkew: true\n  };\n}\n\nconst _cloudWatch = new _awsSdk2.default.CloudWatch(options);\n\nconst cloudWatch = exports.cloudWatch = {\n  putMetricData: (0, _promisify.awsPromisify)(_cloudWatch.putMetricData.bind(_cloudWatch))\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTguanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2Nsb3VkV2F0Y2guanM/ZGI3OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXdzIGZyb20gJ2F3cy1zZGsnXG5pbXBvcnQgeyBhd3NQcm9taXNpZnkgfSBmcm9tICcuL3Byb21pc2lmeSdcblxuY29uc3Qge1xuICBJU19PRkZMSU5FLFxuICBDTE9VRFdBVENIX0VORFBPSU5UXG59ID0gcHJvY2Vzcy5lbnZcblxubGV0IG9wdGlvbnMgPSB7fVxuXG5pZiAoSVNfT0ZGTElORSkge1xuICBvcHRpb25zID0ge1xuICAgIHJlZ2lvbjogJ2FwLXNvdXRoZWFzdC0yJyxcbiAgICBlbmRwb2ludDogQ0xPVURXQVRDSF9FTkRQT0lOVCxcbiAgICBjcmVkZW50aWFsczogbmV3IGF3cy5DcmVkZW50aWFscygnYWNjZXNzS2V5JywgJ3NlY3JldEtleScpLFxuICAgIGNvcnJlY3RDbG9ja1NrZXc6IHRydWVcbiAgfVxufVxuXG5jb25zdCBfY2xvdWRXYXRjaCA9IG5ldyBhd3MuQ2xvdWRXYXRjaChvcHRpb25zKVxuXG5leHBvcnQgY29uc3QgY2xvdWRXYXRjaCA9IHtcbiAgcHV0TWV0cmljRGF0YTogYXdzUHJvbWlzaWZ5KDo6X2Nsb3VkV2F0Y2gucHV0TWV0cmljRGF0YSlcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvY2xvdWRXYXRjaC5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///18\n");

/***/ }),
/* 19 */
/*!*****************************!*\
  !*** ./src/logger/index.js ***!
  \*****************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nexports.__esModule = true;\nexports.logger = undefined;\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _Logger = __webpack_require__(/*! ./Logger */ 20);\n\nvar _Logger2 = _interopRequireDefault(_Logger);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst createLogger = ({ assign }, Logger) => {\n  const handler = params => {\n    const newHandler = newParams => {\n      return handler(_extends({}, params, newParams));\n    };\n    return assign(newHandler, new Logger(params));\n  };\n  return assign(handler, new Logger());\n};\n\nconst logger = exports.logger = createLogger(Object, _Logger2.default);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTkuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2xvZ2dlci9pbmRleC5qcz9mNTY0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMb2dnZXIgZnJvbSAnLi9Mb2dnZXInXG5cbmNvbnN0IGNyZWF0ZUxvZ2dlciA9ICh7IGFzc2lnbiB9LCBMb2dnZXIpID0+IHtcbiAgY29uc3QgaGFuZGxlciA9IHBhcmFtcyA9PiB7XG4gICAgY29uc3QgbmV3SGFuZGxlciA9IG5ld1BhcmFtcyA9PiB7XG4gICAgICByZXR1cm4gaGFuZGxlcih7IC4uLnBhcmFtcywgLi4ubmV3UGFyYW1zIH0pXG4gICAgfVxuICAgIHJldHVybiBhc3NpZ24obmV3SGFuZGxlciwgbmV3IExvZ2dlcihwYXJhbXMpKVxuICB9XG4gIHJldHVybiBhc3NpZ24oaGFuZGxlciwgbmV3IExvZ2dlcigpKVxufVxuXG5leHBvcnQgY29uc3QgbG9nZ2VyID0gY3JlYXRlTG9nZ2VyKE9iamVjdCwgTG9nZ2VyKVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9sb2dnZXIvaW5kZXguanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUNBOzs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///19\n");

/***/ }),
/* 20 */
/*!******************************!*\
  !*** ./src/logger/Logger.js ***!
  \******************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nexports.__esModule = true;\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _moment = __webpack_require__(/*! moment */ 21);\n\nvar _moment2 = _interopRequireDefault(_moment);\n\nvar _LoggerConsole = __webpack_require__(/*! ./LoggerConsole */ 22);\n\nvar _LoggerConsole2 = _interopRequireDefault(_LoggerConsole);\n\nvar _serialize = __webpack_require__(/*! ./serialize */ 28);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst {\n  SERVICE,\n  STAGE,\n  HOST,\n  REGION\n} = process.env;\n\nconst _console = new _LoggerConsole2.default();\n\n/*\n * Available options:\n * level\n * service\n * environment\n * region\n * host\n * timestamp\n * user\n * path\n * tags\n * status\n * message\n * data\n * tenant\n */\nclass Logger {\n  constructor(options = {}) {\n    this._options = _extends({\n      level: 'error',\n      service: SERVICE,\n      environment: STAGE,\n      region: REGION,\n      host: HOST,\n      timestamp: _moment2.default.utc().format()\n    }, options, {\n      data: options.data ? (0, _serialize.serialize)(options.data) : null\n    });\n\n    this.log = this.log.bind(this);\n    this.emergency = this.emergency.bind(this);\n    this.alert = this.alert.bind(this);\n    this.critical = this.critical.bind(this);\n    this.error = this.error.bind(this);\n    this.warning = this.warning.bind(this);\n    this.notice = this.notice.bind(this);\n    this.info = this.info.bind(this);\n    this.debug = this.debug.bind(this);\n  }\n\n  log(options = {}) {\n    _console.log(_extends({}, this._options, options, {\n      data: options.data ? (0, _serialize.serialize)(options.data) : this._options.data\n    }));\n  }\n\n  emergency(message, options = {}) {\n    this.log(_extends({ level: 'emerg', message }, options));\n  }\n\n  alert(message, options = {}) {\n    this.log(_extends({ level: 'alert', message }, options));\n  }\n\n  critical(message, options = {}) {\n    this.log(_extends({ level: 'crit', message }, options));\n  }\n\n  error(message, options = {}) {\n    this.log(_extends({ level: 'err', message }, options));\n  }\n\n  warning(message, options = {}) {\n    this.log(_extends({ level: 'warning', message }, options));\n  }\n\n  notice(message, options = {}) {\n    this.log(_extends({ level: 'notice', message }, options));\n  }\n\n  info(message, options = {}) {\n    this.log(_extends({ level: 'info', message }, options));\n  }\n\n  debug(message, options = {}) {\n    this.log(_extends({ level: 'debug', message }, options));\n  }\n}\nexports.default = Logger;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjAuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2xvZ2dlci9Mb2dnZXIuanM/OGU4NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCdcbmltcG9ydCBMb2dnZXJDb25zb2xlIGZyb20gJy4vTG9nZ2VyQ29uc29sZSdcbmltcG9ydCB7IHNlcmlhbGl6ZSB9IGZyb20gJy4vc2VyaWFsaXplJ1xuXG5jb25zdCB7XG4gIFNFUlZJQ0UsXG4gIFNUQUdFLFxuICBIT1NULFxuICBSRUdJT05cbn0gPSBwcm9jZXNzLmVudlxuXG5jb25zdCBfY29uc29sZSA9IG5ldyBMb2dnZXJDb25zb2xlKClcblxuLypcbiAqIEF2YWlsYWJsZSBvcHRpb25zOlxuICogbGV2ZWxcbiAqIHNlcnZpY2VcbiAqIGVudmlyb25tZW50XG4gKiByZWdpb25cbiAqIGhvc3RcbiAqIHRpbWVzdGFtcFxuICogdXNlclxuICogcGF0aFxuICogdGFnc1xuICogc3RhdHVzXG4gKiBtZXNzYWdlXG4gKiBkYXRhXG4gKiB0ZW5hbnRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9nZ2VyIHtcbiAgY29uc3RydWN0b3IgKFxuICAgIG9wdGlvbnMgPSB7fVxuICApIHtcbiAgICB0aGlzLl9vcHRpb25zID0ge1xuICAgICAgbGV2ZWw6ICdlcnJvcicsXG4gICAgICBzZXJ2aWNlOiBTRVJWSUNFLFxuICAgICAgZW52aXJvbm1lbnQ6IFNUQUdFLFxuICAgICAgcmVnaW9uOiBSRUdJT04sXG4gICAgICBob3N0OiBIT1NULFxuICAgICAgdGltZXN0YW1wOiBtb21lbnQudXRjKCkuZm9ybWF0KCksXG4gICAgICAuLi5vcHRpb25zLFxuICAgICAgZGF0YTogb3B0aW9ucy5kYXRhID8gc2VyaWFsaXplKG9wdGlvbnMuZGF0YSkgOiBudWxsXG4gICAgfVxuXG4gICAgdGhpcy5sb2cgPSA6OnRoaXMubG9nXG4gICAgdGhpcy5lbWVyZ2VuY3kgPSA6OnRoaXMuZW1lcmdlbmN5XG4gICAgdGhpcy5hbGVydCA9IDo6dGhpcy5hbGVydFxuICAgIHRoaXMuY3JpdGljYWwgPSA6OnRoaXMuY3JpdGljYWxcbiAgICB0aGlzLmVycm9yID0gOjp0aGlzLmVycm9yXG4gICAgdGhpcy53YXJuaW5nID0gOjp0aGlzLndhcm5pbmdcbiAgICB0aGlzLm5vdGljZSA9IDo6dGhpcy5ub3RpY2VcbiAgICB0aGlzLmluZm8gPSA6OnRoaXMuaW5mb1xuICAgIHRoaXMuZGVidWcgPSA6OnRoaXMuZGVidWdcbiAgfVxuXG4gIGxvZyAob3B0aW9ucyA9IHt9KSB7XG4gICAgX2NvbnNvbGUubG9nKHtcbiAgICAgIC4uLnRoaXMuX29wdGlvbnMsXG4gICAgICAuLi5vcHRpb25zLFxuICAgICAgZGF0YTogb3B0aW9ucy5kYXRhID8gc2VyaWFsaXplKG9wdGlvbnMuZGF0YSkgOiB0aGlzLl9vcHRpb25zLmRhdGFcbiAgICB9KVxuICB9XG5cbiAgZW1lcmdlbmN5IChtZXNzYWdlLCBvcHRpb25zID0ge30pIHtcbiAgICB0aGlzLmxvZyh7IGxldmVsOiAnZW1lcmcnLCBtZXNzYWdlLCAuLi5vcHRpb25zIH0pXG4gIH1cblxuICBhbGVydCAobWVzc2FnZSwgb3B0aW9ucyA9IHt9KSB7XG4gICAgdGhpcy5sb2coeyBsZXZlbDogJ2FsZXJ0JywgbWVzc2FnZSwgLi4ub3B0aW9ucyB9KVxuICB9XG5cbiAgY3JpdGljYWwgKG1lc3NhZ2UsIG9wdGlvbnMgPSB7fSkge1xuICAgIHRoaXMubG9nKHsgbGV2ZWw6ICdjcml0JywgbWVzc2FnZSwgLi4ub3B0aW9ucyB9KVxuICB9XG5cbiAgZXJyb3IgKG1lc3NhZ2UsIG9wdGlvbnMgPSB7fSkge1xuICAgIHRoaXMubG9nKHsgbGV2ZWw6ICdlcnInLCBtZXNzYWdlLCAuLi5vcHRpb25zIH0pXG4gIH1cblxuICB3YXJuaW5nIChtZXNzYWdlLCBvcHRpb25zID0ge30pIHtcbiAgICB0aGlzLmxvZyh7IGxldmVsOiAnd2FybmluZycsIG1lc3NhZ2UsIC4uLm9wdGlvbnMgfSlcbiAgfVxuXG4gIG5vdGljZSAobWVzc2FnZSwgb3B0aW9ucyA9IHt9KSB7XG4gICAgdGhpcy5sb2coeyBsZXZlbDogJ25vdGljZScsIG1lc3NhZ2UsIC4uLm9wdGlvbnMgfSlcbiAgfVxuXG4gIGluZm8gKG1lc3NhZ2UsIG9wdGlvbnMgPSB7fSkge1xuICAgIHRoaXMubG9nKHsgbGV2ZWw6ICdpbmZvJywgbWVzc2FnZSwgLi4ub3B0aW9ucyB9KVxuICB9XG5cbiAgZGVidWcgKG1lc3NhZ2UsIG9wdGlvbnMgPSB7fSkge1xuICAgIHRoaXMubG9nKHsgbGV2ZWw6ICdkZWJ1ZycsIG1lc3NhZ2UsIC4uLm9wdGlvbnMgfSlcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9sb2dnZXIvTG9nZ2VyLmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFDQTtBQU1BO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQWdCQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBUkE7QUFDQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWhFQTtBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///20\n");

/***/ }),
/* 21 */
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

eval("module.exports = require(\"moment\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjEuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb21lbnRcIj9hODhkIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vbWVudFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIm1vbWVudFwiXG4vLyBtb2R1bGUgaWQgPSAyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///21\n");

/***/ }),
/* 22 */
/*!*************************************!*\
  !*** ./src/logger/LoggerConsole.js ***!
  \*************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nexports.__esModule = true;\n\nvar _path = __webpack_require__(/*! path */ 23);\n\nvar _path2 = _interopRequireDefault(_path);\n\nvar _mkdirp = __webpack_require__(/*! mkdirp */ 24);\n\nvar _mkdirp2 = _interopRequireDefault(_mkdirp);\n\nvar _fs = __webpack_require__(/*! fs */ 25);\n\nvar _fs2 = _interopRequireDefault(_fs);\n\nvar _console = __webpack_require__(/*! console */ 26);\n\nvar _refineLog = __webpack_require__(/*! ./refineLog */ 27);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst {\n  PWD,\n  LOGGING,\n  LOG_FILE_LOCATION\n} = process.env;\n\nclass LoggerConsole {\n  constructor({\n    logging = LOGGING,\n    logFileLocation = LOG_FILE_LOCATION\n  } = {}) {\n    let newConsole = console;\n    if (logging === 'file') {\n      const outputLocation = _path2.default.resolve(PWD, logFileLocation || './output/log.txt');\n      const outputFolder = _path2.default.resolve(PWD, _path2.default.dirname(outputLocation));\n      _mkdirp2.default.sync(outputFolder);\n\n      const output = _fs2.default.createWriteStream(outputLocation, { flags: 'a' });\n\n      newConsole = new _console.Console(output);\n    }\n\n    this.log = (0, _refineLog.refineLog)(newConsole.log);\n  }\n}\nexports.default = LoggerConsole;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjIuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2xvZ2dlci9Mb2dnZXJDb25zb2xlLmpzP2U2OGMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHBhdGggZnJvbSAncGF0aCdcbmltcG9ydCBta2RpcnAgZnJvbSAnbWtkaXJwJ1xuaW1wb3J0IGZzIGZyb20gJ2ZzJ1xuaW1wb3J0IHsgQ29uc29sZSB9IGZyb20gJ2NvbnNvbGUnXG5pbXBvcnQgeyByZWZpbmVMb2cgfSBmcm9tICcuL3JlZmluZUxvZydcblxuY29uc3Qge1xuICBQV0QsXG4gIExPR0dJTkcsXG4gIExPR19GSUxFX0xPQ0FUSU9OXG59ID0gcHJvY2Vzcy5lbnZcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9nZ2VyQ29uc29sZSB7XG4gIGNvbnN0cnVjdG9yICh7XG4gICAgbG9nZ2luZyA9IExPR0dJTkcsXG4gICAgbG9nRmlsZUxvY2F0aW9uID0gTE9HX0ZJTEVfTE9DQVRJT05cbiAgfSA9IHt9KSB7XG4gICAgbGV0IG5ld0NvbnNvbGUgPSBjb25zb2xlXG4gICAgaWYgKGxvZ2dpbmcgPT09ICdmaWxlJykge1xuICAgICAgY29uc3Qgb3V0cHV0TG9jYXRpb24gPSBwYXRoLnJlc29sdmUoUFdELCBsb2dGaWxlTG9jYXRpb24gfHwgJy4vb3V0cHV0L2xvZy50eHQnKVxuICAgICAgY29uc3Qgb3V0cHV0Rm9sZGVyID0gcGF0aC5yZXNvbHZlKFBXRCwgcGF0aC5kaXJuYW1lKG91dHB1dExvY2F0aW9uKSlcbiAgICAgIG1rZGlycC5zeW5jKG91dHB1dEZvbGRlcilcblxuICAgICAgY29uc3Qgb3V0cHV0ID0gZnMuY3JlYXRlV3JpdGVTdHJlYW0ob3V0cHV0TG9jYXRpb24sIHsgZmxhZ3M6ICdhJyB9KVxuXG4gICAgICBuZXdDb25zb2xlID0gbmV3IENvbnNvbGUob3V0cHV0KVxuICAgIH1cblxuICAgIHRoaXMubG9nID0gcmVmaW5lTG9nKG5ld0NvbnNvbGUubG9nKVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2xvZ2dlci9Mb2dnZXJDb25zb2xlLmpzIl0sIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWpCQTtBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///22\n");

/***/ }),
/* 23 */
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwYXRoXCI/NWIyYSJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwYXRoXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicGF0aFwiXG4vLyBtb2R1bGUgaWQgPSAyM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///23\n");

/***/ }),
/* 24 */
/*!*************************!*\
  !*** external "mkdirp" ***!
  \*************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

eval("module.exports = require(\"mkdirp\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjQuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJta2RpcnBcIj9iOWY4Il0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1rZGlycFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIm1rZGlycFwiXG4vLyBtb2R1bGUgaWQgPSAyNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///24\n");

/***/ }),
/* 25 */
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjUuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmc1wiPzJlMDkiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZnNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJmc1wiXG4vLyBtb2R1bGUgaWQgPSAyNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///25\n");

/***/ }),
/* 26 */
/*!**************************!*\
  !*** external "console" ***!
  \**************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

eval("module.exports = require(\"console\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjYuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb25zb2xlXCI/MGE5NyJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb25zb2xlXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiY29uc29sZVwiXG4vLyBtb2R1bGUgaWQgPSAyNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///26\n");

/***/ }),
/* 27 */
/*!*********************************!*\
  !*** ./src/logger/refineLog.js ***!
  \*********************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nexports.__esModule = true;\nexports.refineLog = undefined;\n\nvar _lodash = __webpack_require__(/*! lodash */ 1);\n\nvar _ramda = __webpack_require__(/*! ramda */ 3);\n\nconst omitNilValueInLog = fn => params => fn((0, _lodash.omitBy)(params, _lodash.isNil));\n\nconst filterLogByLoggingLevel = (({ LOGGING_LEVEL }) => {\n  const levelMap = {\n    emerg: 0,\n    alert: 1,\n    crit: 2,\n    err: 3,\n    warning: 4,\n    notice: 5,\n    info: 6,\n    debug: 7\n  };\n\n  return fn => params => {\n    const {\n      level\n    } = params;\n\n    if (!LOGGING_LEVEL || levelMap[level] <= levelMap[LOGGING_LEVEL]) {\n      fn(params);\n    }\n  };\n})(process.env);\n\nconst refineLog = exports.refineLog = (0, _ramda.compose)(omitNilValueInLog, filterLogByLoggingLevel);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjcuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2xvZ2dlci9yZWZpbmVMb2cuanM/YWZhNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBvbWl0QnksIGlzTmlsIH0gZnJvbSAnbG9kYXNoJ1xuaW1wb3J0IHsgY29tcG9zZSB9IGZyb20gJ3JhbWRhJ1xuXG5jb25zdCBvbWl0TmlsVmFsdWVJbkxvZyA9IGZuID0+IHBhcmFtcyA9PiBmbihvbWl0QnkocGFyYW1zLCBpc05pbCkpXG5cbmNvbnN0IGZpbHRlckxvZ0J5TG9nZ2luZ0xldmVsID0gKFxuICAoeyBMT0dHSU5HX0xFVkVMIH0pID0+IHtcbiAgICBjb25zdCBsZXZlbE1hcCA9IHtcbiAgICAgIGVtZXJnOiAwLFxuICAgICAgYWxlcnQ6IDEsXG4gICAgICBjcml0OiAyLFxuICAgICAgZXJyOiAzLFxuICAgICAgd2FybmluZzogNCxcbiAgICAgIG5vdGljZTogNSxcbiAgICAgIGluZm86IDYsXG4gICAgICBkZWJ1ZzogN1xuICAgIH1cblxuICAgIHJldHVybiBmbiA9PiBwYXJhbXMgPT4ge1xuICAgICAgY29uc3Qge1xuICAgICAgICBsZXZlbFxuICAgICAgfSA9IHBhcmFtc1xuXG4gICAgICBpZiAoIUxPR0dJTkdfTEVWRUwgfHwgbGV2ZWxNYXBbbGV2ZWxdIDw9IGxldmVsTWFwW0xPR0dJTkdfTEVWRUxdKSB7XG4gICAgICAgIGZuKHBhcmFtcylcbiAgICAgIH1cbiAgICB9XG4gIH1cbikocHJvY2Vzcy5lbnYpXG5cbmV4cG9ydCBjb25zdCByZWZpbmVMb2cgPSBjb21wb3NlKFxuICBvbWl0TmlsVmFsdWVJbkxvZyxcbiAgZmlsdGVyTG9nQnlMb2dnaW5nTGV2ZWxcbilcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvbG9nZ2VyL3JlZmluZUxvZy5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVJBO0FBQ0E7QUFVQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///27\n");

/***/ }),
/* 28 */
/*!*********************************!*\
  !*** ./src/logger/serialize.js ***!
  \*********************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nexports.__esModule = true;\nexports.serialize = undefined;\n\nvar _lodash = __webpack_require__(/*! lodash */ 1);\n\nvar _serializerr = __webpack_require__(/*! serializerr */ 29);\n\nvar _serializerr2 = _interopRequireDefault(_serializerr);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst serialize = exports.serialize = obj => (0, _lodash.isString)(obj) ? obj : (0, _serializerr2.default)(obj);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjguanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2xvZ2dlci9zZXJpYWxpemUuanM/NTQwMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpc1N0cmluZyB9IGZyb20gJ2xvZGFzaCdcbmltcG9ydCBzZXJpYWxpemVyciBmcm9tICdzZXJpYWxpemVycidcblxuZXhwb3J0IGNvbnN0IHNlcmlhbGl6ZSA9IG9iaiA9PiBpc1N0cmluZyhvYmopID8gb2JqIDogc2VyaWFsaXplcnIob2JqKVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9sb2dnZXIvc2VyaWFsaXplLmpzIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7OztBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///28\n");

/***/ }),
/* 29 */
/*!******************************!*\
  !*** external "serializerr" ***!
  \******************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

eval("module.exports = require(\"serializerr\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjkuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzZXJpYWxpemVyclwiPzM4MTIiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic2VyaWFsaXplcnJcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJzZXJpYWxpemVyclwiXG4vLyBtb2R1bGUgaWQgPSAyOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///29\n");

/***/ })
/******/ ]);
});