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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/api */ \"(app-pages-browser)/./components/api.js\");\n/* harmony import */ var _components_ShowStack_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/ShowStack.js */ \"(app-pages-browser)/./components/ShowStack.js\");\n/* harmony import */ var next_link_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link.js */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link_js__WEBPACK_IMPORTED_MODULE_4__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst page = ()=>{\n    _s();\n    const [options, setOptions] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [query, setQuery] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"1\");\n    const getOptions = async ()=>{\n        const skip = 0;\n        const limit = 20;\n        const response = await _components_api__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"/\", skip, limit);\n        setOptions(response.data);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        getOptions();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"flex min-h-screen flex-col items-center justify-between p-24 relative\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link_js__WEBPACK_IMPORTED_MODULE_4___default()), {\n                href: \"/\",\n                className: \"fixed left-24 -top-24 btn\",\n                children: \" Back \"\n            }, void 0, false, {\n                fileName: \"/Users/elijah/Documents/Phyton/FirstApi/front-end/app/quiz/page.js\",\n                lineNumber: 24,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-row standart_style\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"font-mono mr-4 \",\n                        children: \"Choose Stack:\"\n                    }, void 0, false, {\n                        fileName: \"/Users/elijah/Documents/Phyton/FirstApi/front-end/app/quiz/page.js\",\n                        lineNumber: 26,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                        name: \"stack_id\",\n                        className: \"bg-transparent font-mono cursor-pointer\",\n                        onChange: (e)=>setQuery(e.target.value),\n                        children: options.map((l)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                value: l.id,\n                                children: l.title\n                            }, l.id, false, {\n                                fileName: \"/Users/elijah/Documents/Phyton/FirstApi/front-end/app/quiz/page.js\",\n                                lineNumber: 30,\n                                columnNumber: 37\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"/Users/elijah/Documents/Phyton/FirstApi/front-end/app/quiz/page.js\",\n                        lineNumber: 29,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/elijah/Documents/Phyton/FirstApi/front-end/app/quiz/page.js\",\n                lineNumber: 25,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_1__.Suspense, {\n                    fallback: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Loading feed...\"\n                    }, void 0, false, {\n                        fileName: \"/Users/elijah/Documents/Phyton/FirstApi/front-end/app/quiz/page.js\",\n                        lineNumber: 34,\n                        columnNumber: 33\n                    }, void 0),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ShowStack_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        query: query\n                    }, void 0, false, {\n                        fileName: \"/Users/elijah/Documents/Phyton/FirstApi/front-end/app/quiz/page.js\",\n                        lineNumber: 35,\n                        columnNumber: 17\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/elijah/Documents/Phyton/FirstApi/front-end/app/quiz/page.js\",\n                    lineNumber: 34,\n                    columnNumber: 13\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/elijah/Documents/Phyton/FirstApi/front-end/app/quiz/page.js\",\n                lineNumber: 33,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/elijah/Documents/Phyton/FirstApi/front-end/app/quiz/page.js\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, undefined);\n};\n_s(page, \"3VZVRq7/D7MBSXF0UwanVDKnows=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (page);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9xdWl6L3BhZ2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUN5QjtBQUNTO0FBQ1M7QUFDWDtBQUNxQjtBQUN0QjtBQUUvQixNQUFNTyxPQUFPOztJQUNiLE1BQU0sQ0FBQ0MsU0FBU0MsV0FBVyxHQUFHUCwrQ0FBUUEsQ0FBQyxFQUFFO0lBQ3pDLE1BQU0sQ0FBQ1EsT0FBT0MsU0FBUyxHQUFHVCwrQ0FBUUEsQ0FBQztJQUNuQyxNQUFNVSxhQUFhO1FBQ2YsTUFBTUMsT0FBTztRQUNiLE1BQU1DLFFBQVE7UUFDZCxNQUFNQyxXQUFXLE1BQU1kLHVEQUFHQSxDQUFDZSxHQUFHLENBQUMsS0FBS0gsTUFBTUM7UUFDMUNMLFdBQVdNLFNBQVNFLElBQUk7SUFDNUI7SUFDQWQsZ0RBQVNBLENBQUM7UUFDTlM7SUFDSixHQUFHLEVBQUU7SUFFSCxxQkFDRSw4REFBQ007UUFBS0MsV0FBVTs7MEJBQ1osOERBQUNiLHFEQUFJQTtnQkFBQ2MsTUFBSztnQkFBSUQsV0FBVTswQkFBNEI7Ozs7OzswQkFDckQsOERBQUNFO2dCQUFJRixXQUFVOztrQ0FDWCw4REFBQ0c7d0JBQUdILFdBQVU7a0NBQWtCOzs7Ozs7a0NBR2hDLDhEQUFDSTt3QkFBT0MsTUFBTTt3QkFBWUwsV0FBVTt3QkFBMENNLFVBQVVDLENBQUFBLElBQUtmLFNBQVNlLEVBQUVDLE1BQU0sQ0FBQ0MsS0FBSztrQ0FDL0dwQixRQUFRcUIsR0FBRyxDQUFDLENBQUNDLGtCQUFNLDhEQUFDQztnQ0FBT0gsT0FBT0UsRUFBRUUsRUFBRTswQ0FBY0YsRUFBRUcsS0FBSzsrQkFBZEgsRUFBRUUsRUFBRTs7Ozs7Ozs7Ozs7Ozs7OzswQkFHMUQsOERBQUNYOzBCQUNHLDRFQUFDakIsMkNBQVFBO29CQUFDOEIsd0JBQVUsOERBQUNDO2tDQUFFOzs7Ozs7OEJBQ25CLDRFQUFDOUIsZ0VBQVNBO3dCQUFDSyxPQUFPQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtsQztHQS9CTUg7QUFpQ04sK0RBQWVBLElBQUlBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3F1aXovcGFnZS5qcz9mMDIyIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGFwaSBmcm9tICdAL2NvbXBvbmVudHMvYXBpJ1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgU3VzcGVuc2UgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBTaG93U3RhY2sgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9TaG93U3RhY2suanMnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsuanMnXG5cbmNvbnN0IHBhZ2UgPSAoKSA9PiB7XG5jb25zdCBbb3B0aW9ucywgc2V0T3B0aW9uc10gPSB1c2VTdGF0ZShbXSlcbmNvbnN0IFtxdWVyeSwgc2V0UXVlcnldID0gdXNlU3RhdGUoXCIxXCIpXG5jb25zdCBnZXRPcHRpb25zID0gYXN5bmMoKSA9PiB7XG4gICAgY29uc3Qgc2tpcCA9IDBcbiAgICBjb25zdCBsaW1pdCA9IDIwXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhcGkuZ2V0KCcvJywgc2tpcCwgbGltaXQpXG4gICAgc2V0T3B0aW9ucyhyZXNwb25zZS5kYXRhKVxufVxudXNlRWZmZWN0KCgpID0+e1xuICAgIGdldE9wdGlvbnMoKTtcbn0sIFtdKVxuXG4gIHJldHVybiAoXG4gICAgPG1haW4gY2xhc3NOYW1lPVwiZmxleCBtaW4taC1zY3JlZW4gZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBwLTI0IHJlbGF0aXZlXCI+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvXCIgY2xhc3NOYW1lPSdmaXhlZCBsZWZ0LTI0IC10b3AtMjQgYnRuJz4gQmFjayA8L0xpbms+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtcm93IHN0YW5kYXJ0X3N0eWxlJz5cbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9J2ZvbnQtbW9ubyBtci00ICc+XG4gICAgICAgICAgICBDaG9vc2UgU3RhY2s6XG4gICAgICAgICAgICA8L2gxPlxuICAgICAgICAgICAgPHNlbGVjdCBuYW1lPXtcInN0YWNrX2lkXCJ9IGNsYXNzTmFtZT0nYmctdHJhbnNwYXJlbnQgZm9udC1tb25vIGN1cnNvci1wb2ludGVyJyBvbkNoYW5nZT17ZSA9PiBzZXRRdWVyeShlLnRhcmdldC52YWx1ZSl9PlxuICAgICAgICAgICAgICAgIHtvcHRpb25zLm1hcCgobCkgPT4gPG9wdGlvbiB2YWx1ZT17bC5pZH0ga2V5PXtsLmlkfT57bC50aXRsZX08L29wdGlvbj4pfVxuICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPFN1c3BlbnNlIGZhbGxiYWNrPXs8cD5Mb2FkaW5nIGZlZWQuLi48L3A+fT5cbiAgICAgICAgICAgICAgICA8U2hvd1N0YWNrIHF1ZXJ5PXtxdWVyeX0vPlxuICAgICAgICAgICAgPC9TdXNwZW5zZT5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9tYWluPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IHBhZ2UiXSwibmFtZXMiOlsiUmVhY3QiLCJhcGkiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIlN1c3BlbnNlIiwiU2hvd1N0YWNrIiwiTGluayIsInBhZ2UiLCJvcHRpb25zIiwic2V0T3B0aW9ucyIsInF1ZXJ5Iiwic2V0UXVlcnkiLCJnZXRPcHRpb25zIiwic2tpcCIsImxpbWl0IiwicmVzcG9uc2UiLCJnZXQiLCJkYXRhIiwibWFpbiIsImNsYXNzTmFtZSIsImhyZWYiLCJkaXYiLCJoMSIsInNlbGVjdCIsIm5hbWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm1hcCIsImwiLCJvcHRpb24iLCJpZCIsInRpdGxlIiwiZmFsbGJhY2siLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/quiz/page.js\n"));

/***/ })

});