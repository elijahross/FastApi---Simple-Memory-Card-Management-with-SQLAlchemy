"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/quiz/page",{

/***/ "(app-pages-browser)/./components/ShowCard.js":
/*!********************************!*\
  !*** ./components/ShowCard.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api */ \"(app-pages-browser)/./components/api.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\nasync function ShowCard(query) {\n    const value = \"/stack/?stack_id=\".concat(query.query);\n    const respon = await _api__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(value);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"standart_style font-mono overflow-auto flex-1 p-4\",\n        children: respon.data.cards.map((card)=>{\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-xl font-bold mb-8\",\n                        children: [\n                            card.title,\n                            console.log(card.title)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/elijah/Documents/Phyton/FirstApi/front-end/components/ShowCard.js\",\n                        lineNumber: 14,\n                        columnNumber: 25\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-white\",\n                        children: card.description\n                    }, void 0, false, {\n                        fileName: \"/Users/elijah/Documents/Phyton/FirstApi/front-end/components/ShowCard.js\",\n                        lineNumber: 18,\n                        columnNumber: 25\n                    }, this),\n                    \" \"\n                ]\n            }, card.id, true, {\n                fileName: \"/Users/elijah/Documents/Phyton/FirstApi/front-end/components/ShowCard.js\",\n                lineNumber: 13,\n                columnNumber: 32\n            }, this);\n        })\n    }, void 0, false, {\n        fileName: \"/Users/elijah/Documents/Phyton/FirstApi/front-end/components/ShowCard.js\",\n        lineNumber: 11,\n        columnNumber: 9\n    }, this);\n}\n_c = ShowCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ShowCard);\nvar _c;\n$RefreshReg$(_c, \"ShowCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvU2hvd0NhcmQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ3VDO0FBQ2hCO0FBR3ZCLGVBQWVHLFNBQVNDLEtBQUs7SUFDekIsTUFBTUMsUUFBUSxvQkFBZ0MsT0FBWkQsTUFBTUEsS0FBSztJQUM3QyxNQUFNRSxTQUFTLE1BQU1KLDRDQUFHQSxDQUFDSyxHQUFHLENBQUNGO0lBRS9CLHFCQUNNLDhEQUFDRztRQUFJQyxXQUFVO2tCQUNkSCxPQUFPSSxJQUFJLENBQUNDLEtBQUssQ0FBQ0MsR0FBRyxDQUFDLENBQUNDO1lBQ1IscUJBQU8sOERBQUNMOztrQ0FDUiw4REFBQ007d0JBQUVMLFdBQVU7OzRCQUNSSSxLQUFLRSxLQUFLOzRCQUNWQyxRQUFRQyxHQUFHLENBQUNKLEtBQUtFLEtBQUs7Ozs7Ozs7a0NBRTNCLDhEQUFDRDt3QkFBRUwsV0FBVTtrQ0FDUkksS0FBS0ssV0FBVzs7Ozs7O29CQUNqQjs7ZUFQYUwsS0FBS00sRUFBRTs7Ozs7UUFRaEM7Ozs7OztBQUdoQjtLQWxCZWhCO0FBb0JmLCtEQUFlQSxRQUFRQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvU2hvd0NhcmQuanM/YWE3OSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxuaW1wb3J0IFJlYWN0LCB7IFN1c3BlbnNlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgYXBpIGZyb20gJy4vYXBpJ1xuXG5cbmFzeW5jIGZ1bmN0aW9uIFNob3dDYXJkKHF1ZXJ5KSB7XG4gICAgY29uc3QgdmFsdWUgPSBgL3N0YWNrLz9zdGFja19pZD0ke3F1ZXJ5LnF1ZXJ5fWBcbiAgICBjb25zdCByZXNwb24gPSBhd2FpdCBhcGkuZ2V0KHZhbHVlKVxuICAgIFxuICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc3RhbmRhcnRfc3R5bGUgZm9udC1tb25vIG92ZXJmbG93LWF1dG8gZmxleC0xIHAtNCc+XG4gICAgICAgIHtyZXNwb24uZGF0YS5jYXJkcy5tYXAoKGNhcmQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybig8ZGl2IGtleT17Y2FyZC5pZH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J3RleHQteGwgZm9udC1ib2xkIG1iLTgnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjYXJkLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjb25zb2xlLmxvZyhjYXJkLnRpdGxlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0ndGV4dC13aGl0ZSc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2NhcmQuZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+IDwvZGl2PilcbiAgICAgICAgICAgICAgICB9KX0gXG4gICAgICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNob3dDYXJkIl0sIm5hbWVzIjpbIlJlYWN0IiwiU3VzcGVuc2UiLCJhcGkiLCJTaG93Q2FyZCIsInF1ZXJ5IiwidmFsdWUiLCJyZXNwb24iLCJnZXQiLCJkaXYiLCJjbGFzc05hbWUiLCJkYXRhIiwiY2FyZHMiLCJtYXAiLCJjYXJkIiwicCIsInRpdGxlIiwiY29uc29sZSIsImxvZyIsImRlc2NyaXB0aW9uIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/ShowCard.js\n"));

/***/ })

});