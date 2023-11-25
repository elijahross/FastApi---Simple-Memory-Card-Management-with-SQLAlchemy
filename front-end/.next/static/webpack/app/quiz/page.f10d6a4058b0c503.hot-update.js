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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/api */ \"(app-pages-browser)/./components/api.js\");\n/* harmony import */ var _components_ShowStack_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/ShowStack.js */ \"(app-pages-browser)/./components/ShowStack.js\");\n/* harmony import */ var next_link_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link.js */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link_js__WEBPACK_IMPORTED_MODULE_4__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst page = ()=>{\n    _s();\n    const [options, setOptions] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [query, setQuery] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"1\");\n    const [order, setOrder] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"0\");\n    const getOptions = async ()=>{\n        const skip = 0;\n        const limit = 20;\n        const response = await _components_api__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"/\", skip, limit);\n        setOptions(response.data);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        getOptions();\n        showCard();\n    }, []);\n    const showCard = async ()=>{\n        const stack = await (0,_components_ShowStack_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(query);\n        console.log(query);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"flex min-h-screen flex-col items-center justify-between p-24 relative\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link_js__WEBPACK_IMPORTED_MODULE_4___default()), {\n                href: \"/\",\n                className: \"fixed left-8 top-8 btn\",\n                children: \" Back \"\n            }, void 0, false, {\n                fileName: \"/Users/elijah/Documents/Phyton/FirstApi/front-end/app/quiz/page.js\",\n                lineNumber: 32,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"fixed bottom-8 left-8 btn\",\n                children: \"Previous Card\"\n            }, void 0, false, {\n                fileName: \"/Users/elijah/Documents/Phyton/FirstApi/front-end/app/quiz/page.js\",\n                lineNumber: 33,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"fixed bottom-8 right-8 btn\",\n                children: \"Next Card\"\n            }, void 0, false, {\n                fileName: \"/Users/elijah/Documents/Phyton/FirstApi/front-end/app/quiz/page.js\",\n                lineNumber: 34,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-row standart_style\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"font-mono mr-4 \",\n                        children: \"Choose Stack:\"\n                    }, void 0, false, {\n                        fileName: \"/Users/elijah/Documents/Phyton/FirstApi/front-end/app/quiz/page.js\",\n                        lineNumber: 36,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                        name: \"stack_id\",\n                        className: \"bg-transparent font-mono cursor-pointer\",\n                        onChange: (e)=>setQuery(e.target.value),\n                        children: options.map((l)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                value: l.id,\n                                children: l.title\n                            }, l.id, false, {\n                                fileName: \"/Users/elijah/Documents/Phyton/FirstApi/front-end/app/quiz/page.js\",\n                                lineNumber: 40,\n                                columnNumber: 37\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"/Users/elijah/Documents/Phyton/FirstApi/front-end/app/quiz/page.js\",\n                        lineNumber: 39,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/elijah/Documents/Phyton/FirstApi/front-end/app/quiz/page.js\",\n                lineNumber: 35,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"align-top items-start\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_1__.Suspense, {\n                    fallback: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Loading feed...\"\n                    }, void 0, false, {\n                        fileName: \"/Users/elijah/Documents/Phyton/FirstApi/front-end/app/quiz/page.js\",\n                        lineNumber: 44,\n                        columnNumber: 33\n                    }, void 0)\n                }, void 0, false, {\n                    fileName: \"/Users/elijah/Documents/Phyton/FirstApi/front-end/app/quiz/page.js\",\n                    lineNumber: 44,\n                    columnNumber: 13\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/elijah/Documents/Phyton/FirstApi/front-end/app/quiz/page.js\",\n                lineNumber: 43,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/elijah/Documents/Phyton/FirstApi/front-end/app/quiz/page.js\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, undefined);\n};\n_s(page, \"aNfaHRjogL4AiGtuYdl8/6NCIVQ=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (page);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9xdWl6L3BhZ2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUN5QjtBQUNTO0FBQ1M7QUFDWDtBQUNxQjtBQUN0QjtBQUcvQixNQUFNTyxPQUFPOztJQUNiLE1BQU0sQ0FBQ0MsU0FBU0MsV0FBVyxHQUFHUCwrQ0FBUUEsQ0FBQyxFQUFFO0lBQ3pDLE1BQU0sQ0FBQ1EsT0FBT0MsU0FBUyxHQUFHVCwrQ0FBUUEsQ0FBQztJQUNuQyxNQUFNLENBQUNVLE9BQU9DLFNBQVMsR0FBR1gsK0NBQVFBLENBQUM7SUFDbkMsTUFBTVksYUFBYTtRQUNmLE1BQU1DLE9BQU87UUFDYixNQUFNQyxRQUFRO1FBQ2QsTUFBTUMsV0FBVyxNQUFNaEIsdURBQUdBLENBQUNpQixHQUFHLENBQUMsS0FBS0gsTUFBTUM7UUFDMUNQLFdBQVdRLFNBQVNFLElBQUk7SUFDNUI7SUFDQWhCLGdEQUFTQSxDQUFDO1FBQ05XO1FBQ0FNO0lBQ0osR0FBRyxFQUFFO0lBRUwsTUFBTUEsV0FBVztRQUNoQixNQUFNQyxRQUFRLE1BQU1oQixvRUFBU0EsQ0FBQ0s7UUFDOUJZLFFBQVFDLEdBQUcsQ0FBQ2I7SUFFYjtJQUNFLHFCQUNFLDhEQUFDYztRQUFLQyxXQUFVOzswQkFDWiw4REFBQ25CLHFEQUFJQTtnQkFBQ29CLE1BQUs7Z0JBQUlELFdBQVU7MEJBQXlCOzs7Ozs7MEJBQ2xELDhEQUFDRTtnQkFBSUYsV0FBVTswQkFBNEI7Ozs7OzswQkFDM0MsOERBQUNFO2dCQUFJRixXQUFVOzBCQUE2Qjs7Ozs7OzBCQUM1Qyw4REFBQ0U7Z0JBQUlGLFdBQVU7O2tDQUNYLDhEQUFDRzt3QkFBR0gsV0FBVTtrQ0FBa0I7Ozs7OztrQ0FHaEMsOERBQUNJO3dCQUFPQyxNQUFNO3dCQUFZTCxXQUFVO3dCQUEwQ00sVUFBVUMsQ0FBQUEsSUFBS3JCLFNBQVNxQixFQUFFQyxNQUFNLENBQUNDLEtBQUs7a0NBQy9HMUIsUUFBUTJCLEdBQUcsQ0FBQyxDQUFDQyxrQkFBTSw4REFBQ0M7Z0NBQU9ILE9BQU9FLEVBQUVFLEVBQUU7MENBQWNGLEVBQUVHLEtBQUs7K0JBQWRILEVBQUVFLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBRzFELDhEQUFDWDtnQkFBSUYsV0FBVTswQkFDWCw0RUFBQ3JCLDJDQUFRQTtvQkFBQ29DLHdCQUFVLDhEQUFDQztrQ0FBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1uQztHQXhDTWxDO0FBMENOLCtEQUFlQSxJQUFJQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9xdWl6L3BhZ2UuanM/ZjAyMiJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBhcGkgZnJvbSAnQC9jb21wb25lbnRzL2FwaSdcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFN1c3BlbnNlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgc2hvd1N0YWNrIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvU2hvd1N0YWNrLmpzJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rLmpzJ1xuXG5cbmNvbnN0IHBhZ2UgPSAoKSA9PiB7XG5jb25zdCBbb3B0aW9ucywgc2V0T3B0aW9uc10gPSB1c2VTdGF0ZShbXSlcbmNvbnN0IFtxdWVyeSwgc2V0UXVlcnldID0gdXNlU3RhdGUoXCIxXCIpXG5jb25zdCBbb3JkZXIsIHNldE9yZGVyXSA9IHVzZVN0YXRlKFwiMFwiKVxuY29uc3QgZ2V0T3B0aW9ucyA9IGFzeW5jKCkgPT4ge1xuICAgIGNvbnN0IHNraXAgPSAwXG4gICAgY29uc3QgbGltaXQgPSAyMFxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXBpLmdldCgnLycsIHNraXAsIGxpbWl0KVxuICAgIHNldE9wdGlvbnMocmVzcG9uc2UuZGF0YSlcbn1cbnVzZUVmZmVjdCgoKSA9PntcbiAgICBnZXRPcHRpb25zKCk7XG4gICAgc2hvd0NhcmQoKTtcbn0sIFtdKVxuXG5jb25zdCBzaG93Q2FyZCA9IGFzeW5jKCkgPT4ge1xuIGNvbnN0IHN0YWNrID0gYXdhaXQgc2hvd1N0YWNrKHF1ZXJ5KVxuIGNvbnNvbGUubG9nKHF1ZXJ5KVxuXG59XG4gIHJldHVybiAoXG4gICAgPG1haW4gY2xhc3NOYW1lPVwiZmxleCBtaW4taC1zY3JlZW4gZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBwLTI0IHJlbGF0aXZlXCI+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvXCIgY2xhc3NOYW1lPSdmaXhlZCBsZWZ0LTggdG9wLTggYnRuJz4gQmFjayA8L0xpbms+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmaXhlZCBib3R0b20tOCBsZWZ0LTggYnRuJz5QcmV2aW91cyBDYXJkPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmaXhlZCBib3R0b20tOCByaWdodC04IGJ0bic+TmV4dCBDYXJkPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtcm93IHN0YW5kYXJ0X3N0eWxlJz5cbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9J2ZvbnQtbW9ubyBtci00ICc+XG4gICAgICAgICAgICBDaG9vc2UgU3RhY2s6XG4gICAgICAgICAgICA8L2gxPlxuICAgICAgICAgICAgPHNlbGVjdCBuYW1lPXtcInN0YWNrX2lkXCJ9IGNsYXNzTmFtZT0nYmctdHJhbnNwYXJlbnQgZm9udC1tb25vIGN1cnNvci1wb2ludGVyJyBvbkNoYW5nZT17ZSA9PiBzZXRRdWVyeShlLnRhcmdldC52YWx1ZSl9PlxuICAgICAgICAgICAgICAgIHtvcHRpb25zLm1hcCgobCkgPT4gPG9wdGlvbiB2YWx1ZT17bC5pZH0ga2V5PXtsLmlkfT57bC50aXRsZX08L29wdGlvbj4pfVxuICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYWxpZ24tdG9wIGl0ZW1zLXN0YXJ0Jz5cbiAgICAgICAgICAgIDxTdXNwZW5zZSBmYWxsYmFjaz17PHA+TG9hZGluZyBmZWVkLi4uPC9wPn0+XG5cbiAgICAgICAgICAgIDwvU3VzcGVuc2U+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvbWFpbj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBwYWdlIl0sIm5hbWVzIjpbIlJlYWN0IiwiYXBpIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJTdXNwZW5zZSIsInNob3dTdGFjayIsIkxpbmsiLCJwYWdlIiwib3B0aW9ucyIsInNldE9wdGlvbnMiLCJxdWVyeSIsInNldFF1ZXJ5Iiwib3JkZXIiLCJzZXRPcmRlciIsImdldE9wdGlvbnMiLCJza2lwIiwibGltaXQiLCJyZXNwb25zZSIsImdldCIsImRhdGEiLCJzaG93Q2FyZCIsInN0YWNrIiwiY29uc29sZSIsImxvZyIsIm1haW4iLCJjbGFzc05hbWUiLCJocmVmIiwiZGl2IiwiaDEiLCJzZWxlY3QiLCJuYW1lIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJtYXAiLCJsIiwib3B0aW9uIiwiaWQiLCJ0aXRsZSIsImZhbGxiYWNrIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/quiz/page.js\n"));

/***/ })

});