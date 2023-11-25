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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/api */ \"(app-pages-browser)/./components/api.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst page = ()=>{\n    _s();\n    const [options, setOptions] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [cards, setCards] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const getOptions = async ()=>{\n        const skip = 0;\n        const limit = 20;\n        const response = await _components_api__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"/\", skip, limit);\n        setOptions(response.data);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        getOptions();\n        setCards([]);\n    }, []);\n    const handleChange = async (e)=>{\n        let value = \"/stack/?stack_id=\".concat(e.target.value);\n        const stack = await _components_api__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(value);\n        setCards(stack.data.cards);\n        console.log(stack.data.cards);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"flex min-h-screen flex-col items-center justify-between p-24\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-row standart_style\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"font-mono mr-4 \",\n                        children: \"Choose Stack:\"\n                    }, void 0, false, {\n                        fileName: \"/Users/elijah/Documents/Phyton/FirstApi/front-end/app/quiz/page.js\",\n                        lineNumber: 30,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                        name: \"stack_id\",\n                        defaultValue: \"1\",\n                        className: \"bg-transparent font-mono cursor-pointer\",\n                        onChange: handleChange,\n                        children: options.map((l)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                value: l.id,\n                                children: l.title\n                            }, l.id, false, {\n                                fileName: \"/Users/elijah/Documents/Phyton/FirstApi/front-end/app/quiz/page.js\",\n                                lineNumber: 34,\n                                columnNumber: 37\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"/Users/elijah/Documents/Phyton/FirstApi/front-end/app/quiz/page.js\",\n                        lineNumber: 33,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/elijah/Documents/Phyton/FirstApi/front-end/app/quiz/page.js\",\n                lineNumber: 29,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex min-w-full min-h-[720px] overflow-auto standart_style bg-transparent items-center justify-between\",\n                children: cards.map((card)=>{\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"standart_style font-mono flex min-w-[360px] mih-h-[480px] p-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"text-xl font-bold mb-8\",\n                                children: card.title\n                            }, void 0, false, {\n                                fileName: \"/Users/elijah/Documents/Phyton/FirstApi/front-end/app/quiz/page.js\",\n                                lineNumber: 40,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"text-white\",\n                                children: card.description\n                            }, void 0, false, {\n                                fileName: \"/Users/elijah/Documents/Phyton/FirstApi/front-end/app/quiz/page.js\",\n                                lineNumber: 43,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/elijah/Documents/Phyton/FirstApi/front-end/app/quiz/page.js\",\n                        lineNumber: 39,\n                        columnNumber: 17\n                    }, undefined);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/elijah/Documents/Phyton/FirstApi/front-end/app/quiz/page.js\",\n                lineNumber: 37,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/elijah/Documents/Phyton/FirstApi/front-end/app/quiz/page.js\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, undefined);\n};\n_s(page, \"eVSG584y7g7ibr1hxwgALbIcahI=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (page);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9xdWl6L3BhZ2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUN5QjtBQUNTO0FBQ1M7QUFFM0MsTUFBTUksT0FBTzs7SUFDYixNQUFNLENBQUNDLFNBQVNDLFdBQVcsR0FBR0osK0NBQVFBLENBQUMsRUFBRTtJQUN6QyxNQUFNLENBQUNLLE9BQU9DLFNBQVMsR0FBR04sK0NBQVFBLENBQUMsRUFBRTtJQUNyQyxNQUFNTyxhQUFhO1FBQ2YsTUFBTUMsT0FBTztRQUNiLE1BQU1DLFFBQVE7UUFDZCxNQUFNQyxXQUFXLE1BQU1YLHVEQUFHQSxDQUFDWSxHQUFHLENBQUMsS0FBS0gsTUFBTUM7UUFDMUNMLFdBQVdNLFNBQVNFLElBQUk7SUFDNUI7SUFDQVgsZ0RBQVNBLENBQUM7UUFDTk07UUFDQUQsU0FBUyxFQUFFO0lBQ2YsR0FBRyxFQUFFO0lBRUwsTUFBTU8sZUFBZSxPQUFNQztRQUNuQixJQUFJQyxRQUFRLG9CQUFtQyxPQUFmRCxFQUFFRSxNQUFNLENBQUNELEtBQUs7UUFDOUMsTUFBTUUsUUFBUSxNQUFNbEIsdURBQUdBLENBQUNZLEdBQUcsQ0FBQ0k7UUFDNUJULFNBQVNXLE1BQU1MLElBQUksQ0FBQ1AsS0FBSztRQUN6QmEsUUFBUUMsR0FBRyxDQUFDRixNQUFNTCxJQUFJLENBQUNQLEtBQUs7SUFDcEM7SUFFRSxxQkFDRSw4REFBQ2U7UUFBS0MsV0FBVTs7MEJBQ1osOERBQUNDO2dCQUFJRCxXQUFVOztrQ0FDWCw4REFBQ0U7d0JBQUdGLFdBQVU7a0NBQWtCOzs7Ozs7a0NBR2hDLDhEQUFDRzt3QkFBT0MsTUFBTTt3QkFBWUMsY0FBYTt3QkFBSUwsV0FBVTt3QkFBMENNLFVBQVVkO2tDQUNwR1YsUUFBUXlCLEdBQUcsQ0FBQyxDQUFDQyxrQkFBTSw4REFBQ0M7Z0NBQU9mLE9BQU9jLEVBQUVFLEVBQUU7MENBQWNGLEVBQUVHLEtBQUs7K0JBQWRILEVBQUVFLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBRzFELDhEQUFDVDtnQkFBSUQsV0FBVTswQkFDVmhCLE1BQU11QixHQUFHLENBQUMsQ0FBQ0s7a0NBQ1IsOERBQUNYO3dCQUFJRCxXQUFVOzswQ0FDWCw4REFBQ2E7Z0NBQUtiLFdBQVU7MENBQ1hZLEtBQUtELEtBQUs7Ozs7OzswQ0FFZiw4REFBQ0U7Z0NBQUtiLFdBQVU7MENBQ1hZLEtBQUtFLFdBQVc7Ozs7Ozs7Ozs7OztnQkFHN0I7Ozs7Ozs7Ozs7OztBQUlaO0dBN0NNakM7QUErQ04sK0RBQWVBLElBQUlBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3F1aXovcGFnZS5qcz9mMDIyIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGFwaSBmcm9tICdAL2NvbXBvbmVudHMvYXBpJ1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuXG5jb25zdCBwYWdlID0gKCkgPT4ge1xuY29uc3QgW29wdGlvbnMsIHNldE9wdGlvbnNdID0gdXNlU3RhdGUoW10pXG5jb25zdCBbY2FyZHMsIHNldENhcmRzXSA9IHVzZVN0YXRlKFtdKVxuY29uc3QgZ2V0T3B0aW9ucyA9IGFzeW5jKCkgPT4ge1xuICAgIGNvbnN0IHNraXAgPSAwXG4gICAgY29uc3QgbGltaXQgPSAyMFxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXBpLmdldCgnLycsIHNraXAsIGxpbWl0KVxuICAgIHNldE9wdGlvbnMocmVzcG9uc2UuZGF0YSlcbn1cbnVzZUVmZmVjdCgoKSA9PntcbiAgICBnZXRPcHRpb25zKCk7XG4gICAgc2V0Q2FyZHMoW10pO1xufSwgW10pXG5cbmNvbnN0IGhhbmRsZUNoYW5nZSA9IGFzeW5jKGUpID0+IHtcbiAgICAgICAgbGV0IHZhbHVlID0gYC9zdGFjay8/c3RhY2tfaWQ9JHtlLnRhcmdldC52YWx1ZX1gXG4gICAgICAgIGNvbnN0IHN0YWNrID0gYXdhaXQgYXBpLmdldCh2YWx1ZSlcbiAgICAgICAgc2V0Q2FyZHMoc3RhY2suZGF0YS5jYXJkcylcbiAgICAgICAgY29uc29sZS5sb2coc3RhY2suZGF0YS5jYXJkcylcbn1cblxuICByZXR1cm4gKFxuICAgIDxtYWluIGNsYXNzTmFtZT1cImZsZXggbWluLWgtc2NyZWVuIGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gcC0yNFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LXJvdyBzdGFuZGFydF9zdHlsZSc+XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPSdmb250LW1vbm8gbXItNCAnPlxuICAgICAgICAgICAgQ2hvb3NlIFN0YWNrOlxuICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgIDxzZWxlY3QgbmFtZT17XCJzdGFja19pZFwifSBkZWZhdWx0VmFsdWU9XCIxXCIgY2xhc3NOYW1lPSdiZy10cmFuc3BhcmVudCBmb250LW1vbm8gY3Vyc29yLXBvaW50ZXInIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9PlxuICAgICAgICAgICAgICAgIHtvcHRpb25zLm1hcCgobCkgPT4gPG9wdGlvbiB2YWx1ZT17bC5pZH0ga2V5PXtsLmlkfT57bC50aXRsZX08L29wdGlvbj4pfVxuICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggbWluLXctZnVsbCBtaW4taC1bNzIwcHhdIG92ZXJmbG93LWF1dG8gc3RhbmRhcnRfc3R5bGUgYmctdHJhbnNwYXJlbnQgaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICAgICAge2NhcmRzLm1hcCgoY2FyZCkgPT4ge1xuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzdGFuZGFydF9zdHlsZSBmb250LW1vbm8gZmxleCBtaW4tdy1bMzYwcHhdIG1paC1oLVs0ODBweF0gcC00Jz5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSd0ZXh0LXhsIGZvbnQtYm9sZCBtYi04Jz5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtjYXJkLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0ndGV4dC13aGl0ZSc+XG4gICAgICAgICAgICAgICAgICAgICAgICB7Y2FyZC5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgfSl9XG4gICAgICAgIDwvZGl2PlxuICAgIDwvbWFpbj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBwYWdlIl0sIm5hbWVzIjpbIlJlYWN0IiwiYXBpIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJwYWdlIiwib3B0aW9ucyIsInNldE9wdGlvbnMiLCJjYXJkcyIsInNldENhcmRzIiwiZ2V0T3B0aW9ucyIsInNraXAiLCJsaW1pdCIsInJlc3BvbnNlIiwiZ2V0IiwiZGF0YSIsImhhbmRsZUNoYW5nZSIsImUiLCJ2YWx1ZSIsInRhcmdldCIsInN0YWNrIiwiY29uc29sZSIsImxvZyIsIm1haW4iLCJjbGFzc05hbWUiLCJkaXYiLCJoMSIsInNlbGVjdCIsIm5hbWUiLCJkZWZhdWx0VmFsdWUiLCJvbkNoYW5nZSIsIm1hcCIsImwiLCJvcHRpb24iLCJpZCIsInRpdGxlIiwiY2FyZCIsInNwYW4iLCJkZXNjcmlwdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/quiz/page.js\n"));

/***/ })

});