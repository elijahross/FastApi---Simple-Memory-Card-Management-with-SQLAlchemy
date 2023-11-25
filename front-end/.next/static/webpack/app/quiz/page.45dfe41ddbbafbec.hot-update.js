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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/api */ \"(app-pages-browser)/./components/api.js\");\n/* harmony import */ var _components_ShowCard_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/ShowCard.js */ \"(app-pages-browser)/./components/ShowCard.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst page = ()=>{\n    _s();\n    const [options, setOptions] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [query, setQuery] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"1\");\n    const getOptions = async ()=>{\n        const skip = 0;\n        const limit = 20;\n        const response = await _components_api__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"/\", skip, limit);\n        setOptions(response.data);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        getOptions();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"flex min-h-screen flex-col items-center justify-between p-24\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-row standart_style\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"font-mono mr-4 \",\n                        children: \"Choose Stack:\"\n                    }, void 0, false, {\n                        fileName: \"/Users/elijah/Documents/Phyton/FirstApi/front-end/app/quiz/page.js\",\n                        lineNumber: 24,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                        name: \"stack_id\",\n                        className: \"bg-transparent font-mono cursor-pointer\",\n                        onChange: (e)=>setQuery(e.target.value),\n                        children: options.map((l)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                value: l.id,\n                                children: l.title\n                            }, l.id, false, {\n                                fileName: \"/Users/elijah/Documents/Phyton/FirstApi/front-end/app/quiz/page.js\",\n                                lineNumber: 28,\n                                columnNumber: 37\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"/Users/elijah/Documents/Phyton/FirstApi/front-end/app/quiz/page.js\",\n                        lineNumber: 27,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/elijah/Documents/Phyton/FirstApi/front-end/app/quiz/page.js\",\n                lineNumber: 23,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_1__.Suspense, {\n                    fallback: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Loading feed...\"\n                    }, void 0, false, {\n                        fileName: \"/Users/elijah/Documents/Phyton/FirstApi/front-end/app/quiz/page.js\",\n                        lineNumber: 32,\n                        columnNumber: 33\n                    }, void 0),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ShowCard_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        query: query\n                    }, void 0, false, {\n                        fileName: \"/Users/elijah/Documents/Phyton/FirstApi/front-end/app/quiz/page.js\",\n                        lineNumber: 33,\n                        columnNumber: 17\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/elijah/Documents/Phyton/FirstApi/front-end/app/quiz/page.js\",\n                    lineNumber: 32,\n                    columnNumber: 13\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/elijah/Documents/Phyton/FirstApi/front-end/app/quiz/page.js\",\n                lineNumber: 31,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/elijah/Documents/Phyton/FirstApi/front-end/app/quiz/page.js\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, undefined);\n};\n_s(page, \"3VZVRq7/D7MBSXF0UwanVDKnows=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (page);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9xdWl6L3BhZ2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDeUI7QUFDUztBQUNTO0FBQ1g7QUFDbUI7QUFFbkQsTUFBTU0sT0FBTzs7SUFDYixNQUFNLENBQUNDLFNBQVNDLFdBQVcsR0FBR04sK0NBQVFBLENBQUMsRUFBRTtJQUN6QyxNQUFNLENBQUNPLE9BQU9DLFNBQVMsR0FBR1IsK0NBQVFBLENBQUM7SUFDbkMsTUFBTVMsYUFBYTtRQUNmLE1BQU1DLE9BQU87UUFDYixNQUFNQyxRQUFRO1FBQ2QsTUFBTUMsV0FBVyxNQUFNYix1REFBR0EsQ0FBQ2MsR0FBRyxDQUFDLEtBQUtILE1BQU1DO1FBQzFDTCxXQUFXTSxTQUFTRSxJQUFJO0lBQzVCO0lBQ0FiLGdEQUFTQSxDQUFDO1FBQ05RO0lBQ0osR0FBRyxFQUFFO0lBRUgscUJBQ0UsOERBQUNNO1FBQUtDLFdBQVU7OzBCQUNaLDhEQUFDQztnQkFBSUQsV0FBVTs7a0NBQ1gsOERBQUNFO3dCQUFHRixXQUFVO2tDQUFrQjs7Ozs7O2tDQUdoQyw4REFBQ0c7d0JBQU9DLE1BQU07d0JBQVlKLFdBQVU7d0JBQTBDSyxVQUFVQyxDQUFBQSxJQUFLZCxTQUFTYyxFQUFFQyxNQUFNLENBQUNDLEtBQUs7a0NBQy9HbkIsUUFBUW9CLEdBQUcsQ0FBQyxDQUFDQyxrQkFBTSw4REFBQ0M7Z0NBQU9ILE9BQU9FLEVBQUVFLEVBQUU7MENBQWNGLEVBQUVHLEtBQUs7K0JBQWRILEVBQUVFLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBRzFELDhEQUFDWDswQkFDRyw0RUFBQ2YsMkNBQVFBO29CQUFDNEIsd0JBQVUsOERBQUNDO2tDQUFFOzs7Ozs7OEJBQ25CLDRFQUFDNUIsK0RBQVFBO3dCQUFDSSxPQUFPQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtqQztHQTlCTUg7QUFnQ04sK0RBQWVBLElBQUlBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3F1aXovcGFnZS5qcz9mMDIyIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGFwaSBmcm9tICdAL2NvbXBvbmVudHMvYXBpJ1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgU3VzcGVuc2UgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBTaG93Q2FyZCBmcm9tICcuLi8uLi9jb21wb25lbnRzL1Nob3dDYXJkLmpzJ1xuXG5jb25zdCBwYWdlID0gKCkgPT4ge1xuY29uc3QgW29wdGlvbnMsIHNldE9wdGlvbnNdID0gdXNlU3RhdGUoW10pXG5jb25zdCBbcXVlcnksIHNldFF1ZXJ5XSA9IHVzZVN0YXRlKFwiMVwiKVxuY29uc3QgZ2V0T3B0aW9ucyA9IGFzeW5jKCkgPT4ge1xuICAgIGNvbnN0IHNraXAgPSAwXG4gICAgY29uc3QgbGltaXQgPSAyMFxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXBpLmdldCgnLycsIHNraXAsIGxpbWl0KVxuICAgIHNldE9wdGlvbnMocmVzcG9uc2UuZGF0YSlcbn1cbnVzZUVmZmVjdCgoKSA9PntcbiAgICBnZXRPcHRpb25zKCk7XG59LCBbXSlcblxuICByZXR1cm4gKFxuICAgIDxtYWluIGNsYXNzTmFtZT1cImZsZXggbWluLWgtc2NyZWVuIGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gcC0yNFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LXJvdyBzdGFuZGFydF9zdHlsZSc+XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPSdmb250LW1vbm8gbXItNCAnPlxuICAgICAgICAgICAgQ2hvb3NlIFN0YWNrOlxuICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgIDxzZWxlY3QgbmFtZT17XCJzdGFja19pZFwifSBjbGFzc05hbWU9J2JnLXRyYW5zcGFyZW50IGZvbnQtbW9ubyBjdXJzb3ItcG9pbnRlcicgb25DaGFuZ2U9e2UgPT4gc2V0UXVlcnkoZS50YXJnZXQudmFsdWUpfT5cbiAgICAgICAgICAgICAgICB7b3B0aW9ucy5tYXAoKGwpID0+IDxvcHRpb24gdmFsdWU9e2wuaWR9IGtleT17bC5pZH0+e2wudGl0bGV9PC9vcHRpb24+KX1cbiAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxTdXNwZW5zZSBmYWxsYmFjaz17PHA+TG9hZGluZyBmZWVkLi4uPC9wPn0+XG4gICAgICAgICAgICAgICAgPFNob3dDYXJkIHF1ZXJ5PXtxdWVyeX0vPlxuICAgICAgICAgICAgPC9TdXNwZW5zZT5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9tYWluPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IHBhZ2UiXSwibmFtZXMiOlsiUmVhY3QiLCJhcGkiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIlN1c3BlbnNlIiwiU2hvd0NhcmQiLCJwYWdlIiwib3B0aW9ucyIsInNldE9wdGlvbnMiLCJxdWVyeSIsInNldFF1ZXJ5IiwiZ2V0T3B0aW9ucyIsInNraXAiLCJsaW1pdCIsInJlc3BvbnNlIiwiZ2V0IiwiZGF0YSIsIm1haW4iLCJjbGFzc05hbWUiLCJkaXYiLCJoMSIsInNlbGVjdCIsIm5hbWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm1hcCIsImwiLCJvcHRpb24iLCJpZCIsInRpdGxlIiwiZmFsbGJhY2siLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/quiz/page.js\n"));

/***/ })

});