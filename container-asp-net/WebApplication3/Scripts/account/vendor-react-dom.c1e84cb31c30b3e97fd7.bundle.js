"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkmicroapps"] = self["webpackChunkmicroapps"] || []).push([[62892],{

/***/ 31557:
/*!*************************************************************!*\
  !*** ./node_modules/react-dom/cjs/react-dom.development.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


/***/ }),

/***/ 5338:
/*!******************************************!*\
  !*** ./node_modules/react-dom/client.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("var __webpack_unused_export__;\n\n\nvar m = __webpack_require__(/*! react-dom */ 40961);\nif (false) {} else {\n  var i = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;\n  exports.createRoot = function(c, o) {\n    i.usingClientEntryPoint = true;\n    try {\n      return m.createRoot(c, o);\n    } finally {\n      i.usingClientEntryPoint = false;\n    }\n  };\n  __webpack_unused_export__ = function(c, h, o) {\n    i.usingClientEntryPoint = true;\n    try {\n      return m.hydrateRoot(c, h, o);\n    } finally {\n      i.usingClientEntryPoint = false;\n    }\n  };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNTMzOC5qcyIsIm1hcHBpbmdzIjoiO0FBQWE7O0FBRWIsUUFBUSxtQkFBTyxDQUFDLHNCQUFXO0FBQzNCLElBQUksS0FBcUMsRUFBRSxFQUcxQyxDQUFDO0FBQ0Y7QUFDQSxFQUFFLGtCQUFrQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsRUFBRSx5QkFBbUI7QUFDckI7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWljcm9hcHBzLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWRvbS9jbGllbnQuanM/MTFiMSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBtID0gcmVxdWlyZSgncmVhY3QtZG9tJyk7XG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBleHBvcnRzLmNyZWF0ZVJvb3QgPSBtLmNyZWF0ZVJvb3Q7XG4gIGV4cG9ydHMuaHlkcmF0ZVJvb3QgPSBtLmh5ZHJhdGVSb290O1xufSBlbHNlIHtcbiAgdmFyIGkgPSBtLl9fU0VDUkVUX0lOVEVSTkFMU19ET19OT1RfVVNFX09SX1lPVV9XSUxMX0JFX0ZJUkVEO1xuICBleHBvcnRzLmNyZWF0ZVJvb3QgPSBmdW5jdGlvbihjLCBvKSB7XG4gICAgaS51c2luZ0NsaWVudEVudHJ5UG9pbnQgPSB0cnVlO1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gbS5jcmVhdGVSb290KGMsIG8pO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBpLnVzaW5nQ2xpZW50RW50cnlQb2ludCA9IGZhbHNlO1xuICAgIH1cbiAgfTtcbiAgZXhwb3J0cy5oeWRyYXRlUm9vdCA9IGZ1bmN0aW9uKGMsIGgsIG8pIHtcbiAgICBpLnVzaW5nQ2xpZW50RW50cnlQb2ludCA9IHRydWU7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiBtLmh5ZHJhdGVSb290KGMsIGgsIG8pO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBpLnVzaW5nQ2xpZW50RW50cnlQb2ludCA9IGZhbHNlO1xuICAgIH1cbiAgfTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///5338\n");

/***/ }),

/***/ 40961:
/*!*****************************************!*\
  !*** ./node_modules/react-dom/index.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nfunction checkDCE() {\n  /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */\n  if (\n    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined' ||\n    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== 'function'\n  ) {\n    return;\n  }\n  if (true) {\n    // This branch is unreachable because this function is only called\n    // in production, but the condition is true only in development.\n    // Therefore if the branch is still here, dead code elimination wasn't\n    // properly applied.\n    // Don't change the message. React DevTools relies on it. Also make sure\n    // this message doesn't occur elsewhere in this function, or it will cause\n    // a false positive.\n    throw new Error('^_^');\n  }\n  try {\n    // Verify that the code above has been dead code eliminated (DCE'd).\n    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);\n  } catch (err) {\n    // DevTools shouldn't crash React, no matter what.\n    // We should still report in case we break this code.\n    console.error(err);\n  }\n}\n\nif (false) {} else {\n  module.exports = __webpack_require__(/*! ./cjs/react-dom.development.js */ 31557);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNDA5NjEuanMiLCJtYXBwaW5ncyI6IkFBQWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sSUFBcUM7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBSSxLQUFxQyxFQUFFLEVBSzFDLENBQUM7QUFDRixFQUFFLGlGQUEwRDtBQUM1RCIsInNvdXJjZXMiOlsid2VicGFjazovL21pY3JvYXBwcy8uL25vZGVfbW9kdWxlcy9yZWFjdC1kb20vaW5kZXguanM/OGJjOCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIGNoZWNrRENFKCkge1xuICAvKiBnbG9iYWwgX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fICovXG4gIGlmIChcbiAgICB0eXBlb2YgX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fID09PSAndW5kZWZpbmVkJyB8fFxuICAgIHR5cGVvZiBfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18uY2hlY2tEQ0UgIT09ICdmdW5jdGlvbidcbiAgKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgLy8gVGhpcyBicmFuY2ggaXMgdW5yZWFjaGFibGUgYmVjYXVzZSB0aGlzIGZ1bmN0aW9uIGlzIG9ubHkgY2FsbGVkXG4gICAgLy8gaW4gcHJvZHVjdGlvbiwgYnV0IHRoZSBjb25kaXRpb24gaXMgdHJ1ZSBvbmx5IGluIGRldmVsb3BtZW50LlxuICAgIC8vIFRoZXJlZm9yZSBpZiB0aGUgYnJhbmNoIGlzIHN0aWxsIGhlcmUsIGRlYWQgY29kZSBlbGltaW5hdGlvbiB3YXNuJ3RcbiAgICAvLyBwcm9wZXJseSBhcHBsaWVkLlxuICAgIC8vIERvbid0IGNoYW5nZSB0aGUgbWVzc2FnZS4gUmVhY3QgRGV2VG9vbHMgcmVsaWVzIG9uIGl0LiBBbHNvIG1ha2Ugc3VyZVxuICAgIC8vIHRoaXMgbWVzc2FnZSBkb2Vzbid0IG9jY3VyIGVsc2V3aGVyZSBpbiB0aGlzIGZ1bmN0aW9uLCBvciBpdCB3aWxsIGNhdXNlXG4gICAgLy8gYSBmYWxzZSBwb3NpdGl2ZS5cbiAgICB0aHJvdyBuZXcgRXJyb3IoJ15fXicpO1xuICB9XG4gIHRyeSB7XG4gICAgLy8gVmVyaWZ5IHRoYXQgdGhlIGNvZGUgYWJvdmUgaGFzIGJlZW4gZGVhZCBjb2RlIGVsaW1pbmF0ZWQgKERDRSdkKS5cbiAgICBfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18uY2hlY2tEQ0UoY2hlY2tEQ0UpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICAvLyBEZXZUb29scyBzaG91bGRuJ3QgY3Jhc2ggUmVhY3QsIG5vIG1hdHRlciB3aGF0LlxuICAgIC8vIFdlIHNob3VsZCBzdGlsbCByZXBvcnQgaW4gY2FzZSB3ZSBicmVhayB0aGlzIGNvZGUuXG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xuICB9XG59XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIC8vIERDRSBjaGVjayBzaG91bGQgaGFwcGVuIGJlZm9yZSBSZWFjdERPTSBidW5kbGUgZXhlY3V0ZXMgc28gdGhhdFxuICAvLyBEZXZUb29scyBjYW4gcmVwb3J0IGJhZCBtaW5pZmljYXRpb24gZHVyaW5nIGluamVjdGlvbi5cbiAgY2hlY2tEQ0UoKTtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1kb20ucHJvZHVjdGlvbi5taW4uanMnKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QtZG9tLmRldmVsb3BtZW50LmpzJyk7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///40961\n");

/***/ })

}]);