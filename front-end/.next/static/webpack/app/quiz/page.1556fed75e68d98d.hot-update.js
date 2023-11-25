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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/api */ \"(app-pages-browser)/./components/api.js\");\n/* harmony import */ var _components_ShowStack_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/ShowStack.js */ \"(app-pages-browser)/./components/ShowStack.js\");\n/* harmony import */ var next_link_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link.js */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link_js__WEBPACK_IMPORTED_MODULE_4__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst page = ()=>{\n    _s();\n    const [options, setOptions] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [order, setOrder] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"0\");\n    const [lmnt, setLmnt] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const getOptions = async ()=>{\n        const skip = 0;\n        const limit = 20;\n        const response = await _components_api__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"/\", skip, limit);\n        setOptions(response.data);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        getOptions();\n        showCard();\n    }, []);\n    const handleChange = (e)=>{\n        let stack = (0,_components_ShowStack_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(e.target.value);\n        showCard(stack);\n    };\n    const showCard = (stack)=>{\n        if (!stack) {\n            let stack = (0,_components_ShowStack_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(1);\n            setLmnt(stack);\n        } else {\n            setLmnt(stack);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"flex min-h-screen flex-col items-center justify-between p-24 relative\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link_js__WEBPACK_IMPORTED_MODULE_4___default()), {\n                href: \"/\",\n                className: \"fixed left-8 top-8 btn\",\n                children: \" Back \"\n            }, void 0, false, {\n                fileName: \"/Users/elijah/Documents/Phyton/FirstApi/front-end/app/quiz/page.js\",\n                lineNumber: 38,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"fixed bottom-8 left-8 btn\",\n                children: \"Previous Card\"\n            }, void 0, false, {\n                fileName: \"/Users/elijah/Documents/Phyton/FirstApi/front-end/app/quiz/page.js\",\n                lineNumber: 39,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"fixed bottom-8 right-8 btn\",\n                children: \"Next Card\"\n            }, void 0, false, {\n                fileName: \"/Users/elijah/Documents/Phyton/FirstApi/front-end/app/quiz/page.js\",\n                lineNumber: 40,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-row standart_style\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"font-mono mr-4 \",\n                        children: \"Choose Stack:\"\n                    }, void 0, false, {\n                        fileName: \"/Users/elijah/Documents/Phyton/FirstApi/front-end/app/quiz/page.js\",\n                        lineNumber: 42,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                        name: \"stack_id\",\n                        className: \"bg-transparent font-mono cursor-pointer\",\n                        onChange: handleChange,\n                        children: options.map((l)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                value: l.id,\n                                children: l.title\n                            }, l.id, false, {\n                                fileName: \"/Users/elijah/Documents/Phyton/FirstApi/front-end/app/quiz/page.js\",\n                                lineNumber: 46,\n                                columnNumber: 37\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"/Users/elijah/Documents/Phyton/FirstApi/front-end/app/quiz/page.js\",\n                        lineNumber: 45,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/elijah/Documents/Phyton/FirstApi/front-end/app/quiz/page.js\",\n                lineNumber: 41,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"align-top items-start\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_1__.Suspense, {\n                    fallback: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Loading feed...\"\n                    }, void 0, false, {\n                        fileName: \"/Users/elijah/Documents/Phyton/FirstApi/front-end/app/quiz/page.js\",\n                        lineNumber: 50,\n                        columnNumber: 33\n                    }, void 0),\n                    children: console.log(lmnt)\n                }, void 0, false, {\n                    fileName: \"/Users/elijah/Documents/Phyton/FirstApi/front-end/app/quiz/page.js\",\n                    lineNumber: 50,\n                    columnNumber: 13\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/elijah/Documents/Phyton/FirstApi/front-end/app/quiz/page.js\",\n                lineNumber: 49,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/elijah/Documents/Phyton/FirstApi/front-end/app/quiz/page.js\",\n        lineNumber: 37,\n        columnNumber: 5\n    }, undefined);\n};\n_s(page, \"tnEzVdgc6GX+QPtoIs0YhUE+L4Q=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (page);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9xdWl6L3BhZ2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUN5QjtBQUNTO0FBQ1M7QUFDWDtBQUNxQjtBQUN0QjtBQUcvQixNQUFNTyxPQUFPOztJQUNiLE1BQU0sQ0FBQ0MsU0FBU0MsV0FBVyxHQUFHUCwrQ0FBUUEsQ0FBQyxFQUFFO0lBQ3pDLE1BQU0sQ0FBQ1EsT0FBT0MsU0FBUyxHQUFHVCwrQ0FBUUEsQ0FBQztJQUNuQyxNQUFNLENBQUNVLE1BQU1DLFFBQVEsR0FBR1gsK0NBQVFBLENBQUMsRUFBRTtJQUNuQyxNQUFNWSxhQUFhO1FBQ2YsTUFBTUMsT0FBTztRQUNiLE1BQU1DLFFBQVE7UUFDZCxNQUFNQyxXQUFXLE1BQU1oQix1REFBR0EsQ0FBQ2lCLEdBQUcsQ0FBQyxLQUFLSCxNQUFNQztRQUMxQ1AsV0FBV1EsU0FBU0UsSUFBSTtJQUM1QjtJQUNBaEIsZ0RBQVNBLENBQUM7UUFDTlc7UUFDQU07SUFDSixHQUFHLEVBQUU7SUFFTCxNQUFNQyxlQUFlLENBQUNDO1FBQ2xCLElBQUlDLFFBQVFsQixvRUFBU0EsQ0FBQ2lCLEVBQUVFLE1BQU0sQ0FBQ0MsS0FBSztRQUNwQ0wsU0FBU0c7SUFDYjtJQUNBLE1BQU1ILFdBQVcsQ0FBQ0c7UUFDZCxJQUFJLENBQUNBLE9BQU87WUFDUixJQUFJQSxRQUFRbEIsb0VBQVNBLENBQUM7WUFDdEJRLFFBQVFVO1FBQ1osT0FBTztZQUFDVixRQUFRVTtRQUFNO0lBQUM7SUFHekIscUJBQ0UsOERBQUNHO1FBQUtDLFdBQVU7OzBCQUNaLDhEQUFDckIscURBQUlBO2dCQUFDc0IsTUFBSztnQkFBSUQsV0FBVTswQkFBeUI7Ozs7OzswQkFDbEQsOERBQUNFO2dCQUFJRixXQUFVOzBCQUE0Qjs7Ozs7OzBCQUMzQyw4REFBQ0U7Z0JBQUlGLFdBQVU7MEJBQTZCOzs7Ozs7MEJBQzVDLDhEQUFDRTtnQkFBSUYsV0FBVTs7a0NBQ1gsOERBQUNHO3dCQUFHSCxXQUFVO2tDQUFrQjs7Ozs7O2tDQUdoQyw4REFBQ0k7d0JBQU9DLE1BQU07d0JBQVlMLFdBQVU7d0JBQTBDTSxVQUFVWjtrQ0FDbkZiLFFBQVEwQixHQUFHLENBQUMsQ0FBQ0Msa0JBQU0sOERBQUNDO2dDQUFPWCxPQUFPVSxFQUFFRSxFQUFFOzBDQUFjRixFQUFFRyxLQUFLOytCQUFkSCxFQUFFRSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7OzBCQUcxRCw4REFBQ1I7Z0JBQUlGLFdBQVU7MEJBQ1gsNEVBQUN2QiwyQ0FBUUE7b0JBQUNtQyx3QkFBVSw4REFBQ0M7a0NBQUU7Ozs7Ozs4QkFDdEJDLFFBQVFDLEdBQUcsQ0FBQzlCOzs7Ozs7Ozs7Ozs7Ozs7OztBQUt6QjtHQTlDTUw7QUFnRE4sK0RBQWVBLElBQUlBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3F1aXovcGFnZS5qcz9mMDIyIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGFwaSBmcm9tICdAL2NvbXBvbmVudHMvYXBpJ1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgU3VzcGVuc2UgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBzaG93U3RhY2sgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9TaG93U3RhY2suanMnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsuanMnXG5cblxuY29uc3QgcGFnZSA9ICgpID0+IHtcbmNvbnN0IFtvcHRpb25zLCBzZXRPcHRpb25zXSA9IHVzZVN0YXRlKFtdKVxuY29uc3QgW29yZGVyLCBzZXRPcmRlcl0gPSB1c2VTdGF0ZShcIjBcIilcbmNvbnN0IFtsbW50LCBzZXRMbW50XSA9IHVzZVN0YXRlKFtdKVxuY29uc3QgZ2V0T3B0aW9ucyA9IGFzeW5jKCkgPT4ge1xuICAgIGNvbnN0IHNraXAgPSAwXG4gICAgY29uc3QgbGltaXQgPSAyMFxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXBpLmdldCgnLycsIHNraXAsIGxpbWl0KVxuICAgIHNldE9wdGlvbnMocmVzcG9uc2UuZGF0YSlcbn1cbnVzZUVmZmVjdCgoKSA9PntcbiAgICBnZXRPcHRpb25zKCk7XG4gICAgc2hvd0NhcmQoKTtcbn0sIFtdKVxuXG5jb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xuICAgIGxldCBzdGFjayA9IHNob3dTdGFjayhlLnRhcmdldC52YWx1ZSlcbiAgICBzaG93Q2FyZChzdGFjaylcbn1cbmNvbnN0IHNob3dDYXJkID0gKHN0YWNrKSA9PiB7XG4gICAgaWYgKCFzdGFjaykge1xuICAgICAgICBsZXQgc3RhY2sgPSBzaG93U3RhY2soMSlcbiAgICAgICAgc2V0TG1udChzdGFjaylcbiAgICB9IGVsc2Uge3NldExtbnQoc3RhY2spfX1cbiAgICBcblxuICByZXR1cm4gKFxuICAgIDxtYWluIGNsYXNzTmFtZT1cImZsZXggbWluLWgtc2NyZWVuIGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gcC0yNCByZWxhdGl2ZVwiPlxuICAgICAgICA8TGluayBocmVmPVwiL1wiIGNsYXNzTmFtZT0nZml4ZWQgbGVmdC04IHRvcC04IGJ0bic+IEJhY2sgPC9MaW5rPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZml4ZWQgYm90dG9tLTggbGVmdC04IGJ0bic+UHJldmlvdXMgQ2FyZDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZml4ZWQgYm90dG9tLTggcmlnaHQtOCBidG4nPk5leHQgQ2FyZDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LXJvdyBzdGFuZGFydF9zdHlsZSc+XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPSdmb250LW1vbm8gbXItNCAnPlxuICAgICAgICAgICAgQ2hvb3NlIFN0YWNrOlxuICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgIDxzZWxlY3QgbmFtZT17XCJzdGFja19pZFwifSBjbGFzc05hbWU9J2JnLXRyYW5zcGFyZW50IGZvbnQtbW9ubyBjdXJzb3ItcG9pbnRlcicgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0+XG4gICAgICAgICAgICAgICAge29wdGlvbnMubWFwKChsKSA9PiA8b3B0aW9uIHZhbHVlPXtsLmlkfSBrZXk9e2wuaWR9PntsLnRpdGxlfTwvb3B0aW9uPil9XG4gICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdhbGlnbi10b3AgaXRlbXMtc3RhcnQnPlxuICAgICAgICAgICAgPFN1c3BlbnNlIGZhbGxiYWNrPXs8cD5Mb2FkaW5nIGZlZWQuLi48L3A+fT5cbiAgICAgICAgICAgIHtjb25zb2xlLmxvZyhsbW50KX1cbiAgICAgICAgICAgIDwvU3VzcGVuc2U+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvbWFpbj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBwYWdlIl0sIm5hbWVzIjpbIlJlYWN0IiwiYXBpIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJTdXNwZW5zZSIsInNob3dTdGFjayIsIkxpbmsiLCJwYWdlIiwib3B0aW9ucyIsInNldE9wdGlvbnMiLCJvcmRlciIsInNldE9yZGVyIiwibG1udCIsInNldExtbnQiLCJnZXRPcHRpb25zIiwic2tpcCIsImxpbWl0IiwicmVzcG9uc2UiLCJnZXQiLCJkYXRhIiwic2hvd0NhcmQiLCJoYW5kbGVDaGFuZ2UiLCJlIiwic3RhY2siLCJ0YXJnZXQiLCJ2YWx1ZSIsIm1haW4iLCJjbGFzc05hbWUiLCJocmVmIiwiZGl2IiwiaDEiLCJzZWxlY3QiLCJuYW1lIiwib25DaGFuZ2UiLCJtYXAiLCJsIiwib3B0aW9uIiwiaWQiLCJ0aXRsZSIsImZhbGxiYWNrIiwicCIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/quiz/page.js\n"));

/***/ })

});