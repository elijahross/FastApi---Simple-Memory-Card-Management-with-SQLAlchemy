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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api */ \"(app-pages-browser)/./components/api.js\");\n\n\n\nasync function ShowCard(query) {\n    console.log(query.query);\n    const number = query.query;\n    const value = \"/stack/?stack_id=\".concat(query.query);\n    const response = await _api__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(value);\n    const data = response.data;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_1__.Suspense, {\n            children: response.cards.map((card)=>{\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"standart_style font-mono flex min-w-[360px] mih-h-[480px] p-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"text-xl font-bold mb-8\",\n                            children: card.title\n                        }, void 0, false, {\n                            fileName: \"/Users/elijah/Documents/Phyton/FirstApi/front-end/components/ShowCard.js\",\n                            lineNumber: 17,\n                            columnNumber: 25\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"text-white\",\n                            children: card.description\n                        }, void 0, false, {\n                            fileName: \"/Users/elijah/Documents/Phyton/FirstApi/front-end/components/ShowCard.js\",\n                            lineNumber: 20,\n                            columnNumber: 25\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/elijah/Documents/Phyton/FirstApi/front-end/components/ShowCard.js\",\n                    lineNumber: 16,\n                    columnNumber: 21\n                }, this);\n            })\n        }, void 0, false, {\n            fileName: \"/Users/elijah/Documents/Phyton/FirstApi/front-end/components/ShowCard.js\",\n            lineNumber: 14,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/elijah/Documents/Phyton/FirstApi/front-end/components/ShowCard.js\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, this);\n}\n_c = ShowCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ShowCard);\nvar _c;\n$RefreshReg$(_c, \"ShowCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvU2hvd0NhcmQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXVDO0FBQ2hCO0FBR3ZCLGVBQWVHLFNBQVNDLEtBQUs7SUFDekJDLFFBQVFDLEdBQUcsQ0FBQ0YsTUFBTUEsS0FBSztJQUN2QixNQUFNRyxTQUFTSCxNQUFNQSxLQUFLO0lBQzFCLE1BQU1JLFFBQVEsb0JBQWdDLE9BQVpKLE1BQU1BLEtBQUs7SUFDN0MsTUFBTUssV0FBVyxNQUFNUCw0Q0FBR0EsQ0FBQ1EsR0FBRyxDQUFDRjtJQUMvQixNQUFNRyxPQUFPRixTQUFTRSxJQUFJO0lBRTVCLHFCQUNFLDhEQUFDQztrQkFDRyw0RUFBQ1gsMkNBQVFBO3NCQUNSUSxTQUFTSSxLQUFLLENBQUNDLEdBQUcsQ0FBQyxDQUFDQzs4QkFDVCw4REFBQ0g7b0JBQUlJLFdBQVU7O3NDQUNYLDhEQUFDQzs0QkFBS0QsV0FBVTtzQ0FDWEQsS0FBS0csS0FBSzs7Ozs7O3NDQUVmLDhEQUFDRDs0QkFBS0QsV0FBVTtzQ0FDWEQsS0FBS0ksV0FBVzs7Ozs7Ozs7Ozs7O1lBRzdCOzs7Ozs7Ozs7OztBQUloQjtLQXZCZWhCO0FBeUJmLCtEQUFlQSxRQUFRQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvU2hvd0NhcmQuanM/YWE3OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgU3VzcGVuc2UgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBhcGkgZnJvbSAnLi9hcGknXG5cblxuYXN5bmMgZnVuY3Rpb24gU2hvd0NhcmQocXVlcnkpIHtcbiAgICBjb25zb2xlLmxvZyhxdWVyeS5xdWVyeSlcbiAgICBjb25zdCBudW1iZXIgPSBxdWVyeS5xdWVyeVxuICAgIGNvbnN0IHZhbHVlID0gYC9zdGFjay8/c3RhY2tfaWQ9JHtxdWVyeS5xdWVyeX1gXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhcGkuZ2V0KHZhbHVlKVxuICAgIGNvbnN0IGRhdGEgPSByZXNwb25zZS5kYXRhXG4gICAgXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgICAgPFN1c3BlbnNlPlxuICAgICAgICB7cmVzcG9uc2UuY2FyZHMubWFwKChjYXJkKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzdGFuZGFydF9zdHlsZSBmb250LW1vbm8gZmxleCBtaW4tdy1bMzYwcHhdIG1paC1oLVs0ODBweF0gcC00Jz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0ndGV4dC14bCBmb250LWJvbGQgbWItOCc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2NhcmQudGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3RleHQtd2hpdGUnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjYXJkLmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgPC9TdXNwZW5zZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTaG93Q2FyZCJdLCJuYW1lcyI6WyJSZWFjdCIsIlN1c3BlbnNlIiwiYXBpIiwiU2hvd0NhcmQiLCJxdWVyeSIsImNvbnNvbGUiLCJsb2ciLCJudW1iZXIiLCJ2YWx1ZSIsInJlc3BvbnNlIiwiZ2V0IiwiZGF0YSIsImRpdiIsImNhcmRzIiwibWFwIiwiY2FyZCIsImNsYXNzTmFtZSIsInNwYW4iLCJ0aXRsZSIsImRlc2NyaXB0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/ShowCard.js\n"));

/***/ })

});