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

/***/ "(app-pages-browser)/./app/quiz/page.js":
/*!**************************!*\
  !*** ./app/quiz/page.js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/api */ \"(app-pages-browser)/./components/api.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst page = ()=>{\n    _s();\n    const [options, setOptions] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const getOptions = async ()=>{\n        const skip = 0;\n        const limit = 20;\n        const response = await _components_api__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"/\", skip, limit);\n        setOptions(response.data);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        getOptions();\n    }, []);\n    const handleChange = async (e)=>{\n        console.log(e.target.value);\n        let value = \"/stack/?stack_id=\".concat(e.target.value);\n        const stack = await _components_api__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(value);\n    };\n    const getCards = async ()=>{};\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"flex min-h-screen flex-col items-center justify-between p-24\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-row standart_style\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"font-mono mr-4 \",\n                        children: \"Choose Stack:\"\n                    }, void 0, false, {\n                        fileName: \"/Users/elijah/Documents/Phyton/FirstApi/front-end/app/quiz/page.js\",\n                        lineNumber: 30,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                        name: \"stack_id\",\n                        defaultValue: \"\",\n                        className: \"bg-transparent font-mono cursor-pointer\",\n                        onChange: handleChange,\n                        children: options.map((l)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                value: l.id,\n                                children: l.title\n                            }, l.id, false, {\n                                fileName: \"/Users/elijah/Documents/Phyton/FirstApi/front-end/app/quiz/page.js\",\n                                lineNumber: 34,\n                                columnNumber: 37\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"/Users/elijah/Documents/Phyton/FirstApi/front-end/app/quiz/page.js\",\n                        lineNumber: 33,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/elijah/Documents/Phyton/FirstApi/front-end/app/quiz/page.js\",\n                lineNumber: 29,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex\"\n            }, void 0, false, {\n                fileName: \"/Users/elijah/Documents/Phyton/FirstApi/front-end/app/quiz/page.js\",\n                lineNumber: 37,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/elijah/Documents/Phyton/FirstApi/front-end/app/quiz/page.js\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, undefined);\n};\n_s(page, \"Cb37lItZDPBl0Zl/uTamqIOmlew=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (page);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9xdWl6L3BhZ2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUN5QjtBQUNTO0FBQ1M7QUFFM0MsTUFBTUksT0FBTzs7SUFDYixNQUFNLENBQUNDLFNBQVNDLFdBQVcsR0FBR0osK0NBQVFBLENBQUMsRUFBRTtJQUN6QyxNQUFNSyxhQUFhO1FBQ2YsTUFBTUMsT0FBTztRQUNiLE1BQU1DLFFBQVE7UUFDZCxNQUFNQyxXQUFXLE1BQU1ULHVEQUFHQSxDQUFDVSxHQUFHLENBQUMsS0FBS0gsTUFBTUM7UUFDMUNILFdBQVdJLFNBQVNFLElBQUk7SUFDNUI7SUFDQVQsZ0RBQVNBLENBQUM7UUFDTkk7SUFDSixHQUFHLEVBQUU7SUFFTCxNQUFNTSxlQUFlLE9BQU1DO1FBQ3ZCQyxRQUFRQyxHQUFHLENBQUNGLEVBQUVHLE1BQU0sQ0FBQ0MsS0FBSztRQUMxQixJQUFJQSxRQUFRLG9CQUFtQyxPQUFmSixFQUFFRyxNQUFNLENBQUNDLEtBQUs7UUFDOUMsTUFBTUMsUUFBUSxNQUFNbEIsdURBQUdBLENBQUNVLEdBQUcsQ0FBQ087SUFDaEM7SUFDQSxNQUFNRSxXQUFXLFdBRWpCO0lBRUUscUJBQ0UsOERBQUNDO1FBQUtDLFdBQVU7OzBCQUNaLDhEQUFDQztnQkFBSUQsV0FBVTs7a0NBQ1gsOERBQUNFO3dCQUFHRixXQUFVO2tDQUFrQjs7Ozs7O2tDQUdoQyw4REFBQ0c7d0JBQU9DLE1BQU07d0JBQVlDLGNBQWE7d0JBQUdMLFdBQVU7d0JBQTBDTSxVQUFVZjtrQ0FDbkdSLFFBQVF3QixHQUFHLENBQUMsQ0FBQ0Msa0JBQU0sOERBQUNDO2dDQUFPYixPQUFPWSxFQUFFRSxFQUFFOzBDQUFjRixFQUFFRyxLQUFLOytCQUFkSCxFQUFFRSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7OzBCQUcxRCw4REFBQ1Q7Z0JBQUlELFdBQVU7Ozs7Ozs7Ozs7OztBQUt2QjtHQXBDTWxCO0FBc0NOLCtEQUFlQSxJQUFJQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9xdWl6L3BhZ2UuanM/ZjAyMiJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBhcGkgZnJvbSAnQC9jb21wb25lbnRzL2FwaSdcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcblxuY29uc3QgcGFnZSA9ICgpID0+IHtcbmNvbnN0IFtvcHRpb25zLCBzZXRPcHRpb25zXSA9IHVzZVN0YXRlKFtdKVxuY29uc3QgZ2V0T3B0aW9ucyA9IGFzeW5jKCkgPT4ge1xuICAgIGNvbnN0IHNraXAgPSAwXG4gICAgY29uc3QgbGltaXQgPSAyMFxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXBpLmdldCgnLycsIHNraXAsIGxpbWl0KVxuICAgIHNldE9wdGlvbnMocmVzcG9uc2UuZGF0YSlcbn1cbnVzZUVmZmVjdCgoKSA9PntcbiAgICBnZXRPcHRpb25zKCk7XG59LCBbXSlcblxuY29uc3QgaGFuZGxlQ2hhbmdlID0gYXN5bmMoZSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0LnZhbHVlKVxuICAgIGxldCB2YWx1ZSA9IGAvc3RhY2svP3N0YWNrX2lkPSR7ZS50YXJnZXQudmFsdWV9YFxuICAgIGNvbnN0IHN0YWNrID0gYXdhaXQgYXBpLmdldCh2YWx1ZSlcbn1cbmNvbnN0IGdldENhcmRzID0gYXN5bmMoKSA9PiB7XG5cbn1cblxuICByZXR1cm4gKFxuICAgIDxtYWluIGNsYXNzTmFtZT1cImZsZXggbWluLWgtc2NyZWVuIGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gcC0yNFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LXJvdyBzdGFuZGFydF9zdHlsZSc+XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPSdmb250LW1vbm8gbXItNCAnPlxuICAgICAgICAgICAgQ2hvb3NlIFN0YWNrOlxuICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgIDxzZWxlY3QgbmFtZT17XCJzdGFja19pZFwifSBkZWZhdWx0VmFsdWU9XCJcIiBjbGFzc05hbWU9J2JnLXRyYW5zcGFyZW50IGZvbnQtbW9ubyBjdXJzb3ItcG9pbnRlcicgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0+XG4gICAgICAgICAgICAgICAge29wdGlvbnMubWFwKChsKSA9PiA8b3B0aW9uIHZhbHVlPXtsLmlkfSBrZXk9e2wuaWR9PntsLnRpdGxlfTwvb3B0aW9uPil9XG4gICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiei0xMCBtYXgtdy01eGwgdy1mdWxsIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gZm9udC1tb25vIHRleHQtc20gbGc6ZmxleFwiPlxuXG4gICAgICAgIDwvZGl2PlxuICAgIDwvbWFpbj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBwYWdlIl0sIm5hbWVzIjpbIlJlYWN0IiwiYXBpIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJwYWdlIiwib3B0aW9ucyIsInNldE9wdGlvbnMiLCJnZXRPcHRpb25zIiwic2tpcCIsImxpbWl0IiwicmVzcG9uc2UiLCJnZXQiLCJkYXRhIiwiaGFuZGxlQ2hhbmdlIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJ0YXJnZXQiLCJ2YWx1ZSIsInN0YWNrIiwiZ2V0Q2FyZHMiLCJtYWluIiwiY2xhc3NOYW1lIiwiZGl2IiwiaDEiLCJzZWxlY3QiLCJuYW1lIiwiZGVmYXVsdFZhbHVlIiwib25DaGFuZ2UiLCJtYXAiLCJsIiwib3B0aW9uIiwiaWQiLCJ0aXRsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/quiz/page.js\n"));

/***/ })

});