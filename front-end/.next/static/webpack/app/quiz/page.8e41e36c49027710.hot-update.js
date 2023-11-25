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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/api */ \"(app-pages-browser)/./components/api.js\");\n/* harmony import */ var next_link_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link.js */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link_js__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst page = ()=>{\n    _s();\n    const [options, setOptions] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [lmnt, setLmnt] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [toggle, setToggle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const getOptions = async ()=>{\n        const skip = 0;\n        const limit = 20;\n        const response = await _components_api__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"/\", skip, limit);\n        setOptions(response.data);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        getOptions();\n        showCards(1);\n    }, []);\n    const handleChange = async (e)=>{\n        let flow = showCards(e.target.value);\n        setLmnt(flow);\n    };\n    const showCards = async (query)=>{\n        const value = \"/stack/?stack_id=\".concat(query);\n        const respon = await _components_api__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(value);\n        const array = respon.data.cards;\n        const mix = array.sort(()=>{\n            return 0.5 - Math.random();\n        });\n        console.log(mix.length);\n        setLmnt(mix);\n        return mix;\n    };\n    const previousCard = ()=>{};\n    const nextCard = ()=>{};\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"flex min-h-screen flex-col items-center justify-between p-24 relative\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link_js__WEBPACK_IMPORTED_MODULE_3___default()), {\n                href: \"/\",\n                className: \"fixed left-8 top-8 btn\",\n                children: \" Back \"\n            }, void 0, false, {\n                fileName: \"/Users/elijah/Documents/Phyton/FirstApi/front-end/app/quiz/page.js\",\n                lineNumber: 47,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"fixed bottom-8 left-8 btn\",\n                onClick: previousCard,\n                children: \"Previous Card\"\n            }, void 0, false, {\n                fileName: \"/Users/elijah/Documents/Phyton/FirstApi/front-end/app/quiz/page.js\",\n                lineNumber: 48,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"fixed bottom-8 right-8 btn\",\n                onClick: nextCard,\n                children: \"Next Card\"\n            }, void 0, false, {\n                fileName: \"/Users/elijah/Documents/Phyton/FirstApi/front-end/app/quiz/page.js\",\n                lineNumber: 49,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"fixed bottom-8 m-auto btn\",\n                onClick: nextCard,\n                children: \"Show Card\"\n            }, void 0, false, {\n                fileName: \"/Users/elijah/Documents/Phyton/FirstApi/front-end/app/quiz/page.js\",\n                lineNumber: 50,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-row standart_style\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"font-mono mr-4 \",\n                        children: \"Choose Stack:\"\n                    }, void 0, false, {\n                        fileName: \"/Users/elijah/Documents/Phyton/FirstApi/front-end/app/quiz/page.js\",\n                        lineNumber: 52,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                        name: \"stack_id\",\n                        className: \"bg-transparent font-mono cursor-pointer\",\n                        onChange: handleChange,\n                        children: options.map((l)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                value: l.id,\n                                children: l.title\n                            }, l.id, false, {\n                                fileName: \"/Users/elijah/Documents/Phyton/FirstApi/front-end/app/quiz/page.js\",\n                                lineNumber: 56,\n                                columnNumber: 37\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"/Users/elijah/Documents/Phyton/FirstApi/front-end/app/quiz/page.js\",\n                        lineNumber: 55,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/elijah/Documents/Phyton/FirstApi/front-end/app/quiz/page.js\",\n                lineNumber: 51,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"align-top items-start\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_1__.Suspense, {\n                    fallback: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Loading feed...\"\n                    }, void 0, false, {\n                        fileName: \"/Users/elijah/Documents/Phyton/FirstApi/front-end/app/quiz/page.js\",\n                        lineNumber: 60,\n                        columnNumber: 33\n                    }, void 0),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        children: lmnt.map((t)=>{\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: t.title\n                            }, void 0, false, {\n                                fileName: \"/Users/elijah/Documents/Phyton/FirstApi/front-end/app/quiz/page.js\",\n                                lineNumber: 62,\n                                columnNumber: 39\n                            }, undefined);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/Users/elijah/Documents/Phyton/FirstApi/front-end/app/quiz/page.js\",\n                        lineNumber: 61,\n                        columnNumber: 17\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/elijah/Documents/Phyton/FirstApi/front-end/app/quiz/page.js\",\n                    lineNumber: 60,\n                    columnNumber: 13\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/elijah/Documents/Phyton/FirstApi/front-end/app/quiz/page.js\",\n                lineNumber: 59,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/elijah/Documents/Phyton/FirstApi/front-end/app/quiz/page.js\",\n        lineNumber: 46,\n        columnNumber: 5\n    }, undefined);\n};\n_s(page, \"qxcghLopihCO3BHtygS7WiIl018=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (page);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9xdWl6L3BhZ2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ3lCO0FBQ1M7QUFDUztBQUNYO0FBQ0Q7QUFHL0IsTUFBTU0sT0FBTzs7SUFDYixNQUFNLENBQUNDLFNBQVNDLFdBQVcsR0FBR04sK0NBQVFBLENBQUMsRUFBRTtJQUN6QyxNQUFNLENBQUNPLE1BQU1DLFFBQVEsR0FBR1IsK0NBQVFBLENBQUMsRUFBRTtJQUNuQyxNQUFNLENBQUNTLFFBQVFDLFVBQVUsR0FBR1YsK0NBQVFBLENBQUM7SUFDckMsTUFBTVcsYUFBYTtRQUNmLE1BQU1DLE9BQU87UUFDYixNQUFNQyxRQUFRO1FBQ2QsTUFBTUMsV0FBVyxNQUFNZix1REFBR0EsQ0FBQ2dCLEdBQUcsQ0FBQyxLQUFLSCxNQUFNQztRQUMxQ1AsV0FBV1EsU0FBU0UsSUFBSTtJQUM1QjtJQUNBZixnREFBU0EsQ0FBQztRQUNOVTtRQUNBTSxVQUFVO0lBQ2QsR0FBRyxFQUFFO0lBRUwsTUFBTUMsZUFBZSxPQUFNQztRQUN2QixJQUFJQyxPQUFPSCxVQUFVRSxFQUFFRSxNQUFNLENBQUNDLEtBQUs7UUFDbkNkLFFBQVFZO0lBQ1o7SUFDQSxNQUFNSCxZQUFZLE9BQU1NO1FBQ3BCLE1BQU1ELFFBQVEsb0JBQTBCLE9BQU5DO1FBQ2xDLE1BQU1DLFNBQVMsTUFBTXpCLHVEQUFHQSxDQUFDZ0IsR0FBRyxDQUFDTztRQUM3QixNQUFNRyxRQUFRRCxPQUFPUixJQUFJLENBQUNVLEtBQUs7UUFDL0IsTUFBTUMsTUFBTUYsTUFBTUcsSUFBSSxDQUFDO1lBQU8sT0FBTyxNQUFNQyxLQUFLQyxNQUFNO1FBQUU7UUFDeERDLFFBQVFDLEdBQUcsQ0FBQ0wsSUFBSU0sTUFBTTtRQUN0QnpCLFFBQVFtQjtRQUNSLE9BQU9BO0lBQUk7SUFFZixNQUFNTyxlQUFlLEtBRXJCO0lBRUEsTUFBTUMsV0FBVyxLQUVqQjtJQUVFLHFCQUNFLDhEQUFDQztRQUFLQyxXQUFVOzswQkFDWiw4REFBQ2xDLHFEQUFJQTtnQkFBQ21DLE1BQUs7Z0JBQUlELFdBQVU7MEJBQXlCOzs7Ozs7MEJBQ2xELDhEQUFDRTtnQkFBSUYsV0FBVTtnQkFBNEJHLFNBQVNOOzBCQUFjOzs7Ozs7MEJBQ2xFLDhEQUFDSztnQkFBSUYsV0FBVTtnQkFBNkJHLFNBQVNMOzBCQUFVOzs7Ozs7MEJBQy9ELDhEQUFDSTtnQkFBSUYsV0FBVTtnQkFBNEJHLFNBQVNMOzBCQUFVOzs7Ozs7MEJBQzlELDhEQUFDSTtnQkFBSUYsV0FBVTs7a0NBQ1gsOERBQUNJO3dCQUFHSixXQUFVO2tDQUFrQjs7Ozs7O2tDQUdoQyw4REFBQ0s7d0JBQU9DLE1BQU07d0JBQVlOLFdBQVU7d0JBQTBDTyxVQUFVMUI7a0NBQ25GYixRQUFRd0MsR0FBRyxDQUFDLENBQUNDLGtCQUFNLDhEQUFDQztnQ0FBT3pCLE9BQU93QixFQUFFRSxFQUFFOzBDQUFjRixFQUFFRyxLQUFLOytCQUFkSCxFQUFFRSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7OzBCQUcxRCw4REFBQ1Q7Z0JBQUlGLFdBQVU7MEJBQ1gsNEVBQUNuQywyQ0FBUUE7b0JBQUNnRCx3QkFBVSw4REFBQ0M7a0NBQUU7Ozs7Ozs4QkFDbkIsNEVBQUNDO2tDQUNJN0MsS0FBS3NDLEdBQUcsQ0FBQyxDQUFDUTswQ0FBTyw4REFBQ0M7MENBQUlELEVBQUVKLEtBQUs7Ozs7Ozt3QkFBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU14RDtHQTNETTdDO0FBNkROLCtEQUFlQSxJQUFJQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9xdWl6L3BhZ2UuanM/ZjAyMiJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBhcGkgZnJvbSAnQC9jb21wb25lbnRzL2FwaSdcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFN1c3BlbnNlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsuanMnXG5cblxuY29uc3QgcGFnZSA9ICgpID0+IHtcbmNvbnN0IFtvcHRpb25zLCBzZXRPcHRpb25zXSA9IHVzZVN0YXRlKFtdKVxuY29uc3QgW2xtbnQsIHNldExtbnRdID0gdXNlU3RhdGUoW10pXG5jb25zdCBbdG9nZ2xlLCBzZXRUb2dnbGVdID0gdXNlU3RhdGUoZmFsc2UpXG5jb25zdCBnZXRPcHRpb25zID0gYXN5bmMoKSA9PiB7XG4gICAgY29uc3Qgc2tpcCA9IDBcbiAgICBjb25zdCBsaW1pdCA9IDIwXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhcGkuZ2V0KCcvJywgc2tpcCwgbGltaXQpXG4gICAgc2V0T3B0aW9ucyhyZXNwb25zZS5kYXRhKVxufVxudXNlRWZmZWN0KCgpID0+e1xuICAgIGdldE9wdGlvbnMoKTtcbiAgICBzaG93Q2FyZHMoMSk7XG59LCBbXSlcblxuY29uc3QgaGFuZGxlQ2hhbmdlID0gYXN5bmMoZSkgPT4ge1xuICAgIGxldCBmbG93ID0gc2hvd0NhcmRzKGUudGFyZ2V0LnZhbHVlKVxuICAgIHNldExtbnQoZmxvdylcbn1cbmNvbnN0IHNob3dDYXJkcyA9IGFzeW5jKHF1ZXJ5KSA9PiB7XG4gICAgY29uc3QgdmFsdWUgPSBgL3N0YWNrLz9zdGFja19pZD0ke3F1ZXJ5fWBcbiAgICBjb25zdCByZXNwb24gPSBhd2FpdCBhcGkuZ2V0KHZhbHVlKVxuICAgIGNvbnN0IGFycmF5ID0gcmVzcG9uLmRhdGEuY2FyZHNcbiAgICBjb25zdCBtaXggPSBhcnJheS5zb3J0KCgpID0+IHtyZXR1cm4gMC41IC0gTWF0aC5yYW5kb20oKX0pXG4gICAgY29uc29sZS5sb2cobWl4Lmxlbmd0aClcbiAgICBzZXRMbW50KG1peClcbiAgICByZXR1cm4gbWl4IH1cbiAgICBcbmNvbnN0IHByZXZpb3VzQ2FyZCA9ICgpID0+IHtcblxufVxuXG5jb25zdCBuZXh0Q2FyZCA9ICgpID0+IHtcblxufVxuXG4gIHJldHVybiAoXG4gICAgPG1haW4gY2xhc3NOYW1lPVwiZmxleCBtaW4taC1zY3JlZW4gZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBwLTI0IHJlbGF0aXZlXCI+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvXCIgY2xhc3NOYW1lPSdmaXhlZCBsZWZ0LTggdG9wLTggYnRuJz4gQmFjayA8L0xpbms+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmaXhlZCBib3R0b20tOCBsZWZ0LTggYnRuJyBvbkNsaWNrPXtwcmV2aW91c0NhcmR9PlByZXZpb3VzIENhcmQ8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZpeGVkIGJvdHRvbS04IHJpZ2h0LTggYnRuJyBvbkNsaWNrPXtuZXh0Q2FyZH0+TmV4dCBDYXJkPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmaXhlZCBib3R0b20tOCBtLWF1dG8gYnRuJyBvbkNsaWNrPXtuZXh0Q2FyZH0+U2hvdyBDYXJkPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtcm93IHN0YW5kYXJ0X3N0eWxlJz5cbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9J2ZvbnQtbW9ubyBtci00ICc+XG4gICAgICAgICAgICBDaG9vc2UgU3RhY2s6XG4gICAgICAgICAgICA8L2gxPlxuICAgICAgICAgICAgPHNlbGVjdCBuYW1lPXtcInN0YWNrX2lkXCJ9IGNsYXNzTmFtZT0nYmctdHJhbnNwYXJlbnQgZm9udC1tb25vIGN1cnNvci1wb2ludGVyJyBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfT5cbiAgICAgICAgICAgICAgICB7b3B0aW9ucy5tYXAoKGwpID0+IDxvcHRpb24gdmFsdWU9e2wuaWR9IGtleT17bC5pZH0+e2wudGl0bGV9PC9vcHRpb24+KX1cbiAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2FsaWduLXRvcCBpdGVtcy1zdGFydCc+XG4gICAgICAgICAgICA8U3VzcGVuc2UgZmFsbGJhY2s9ezxwPkxvYWRpbmcgZmVlZC4uLjwvcD59PlxuICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAge2xtbnQubWFwKCh0KSA9PiB7PGxpPnt0LnRpdGxlfTwvbGk+fSl9XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvU3VzcGVuc2U+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvbWFpbj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBwYWdlIl0sIm5hbWVzIjpbIlJlYWN0IiwiYXBpIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJTdXNwZW5zZSIsIkxpbmsiLCJwYWdlIiwib3B0aW9ucyIsInNldE9wdGlvbnMiLCJsbW50Iiwic2V0TG1udCIsInRvZ2dsZSIsInNldFRvZ2dsZSIsImdldE9wdGlvbnMiLCJza2lwIiwibGltaXQiLCJyZXNwb25zZSIsImdldCIsImRhdGEiLCJzaG93Q2FyZHMiLCJoYW5kbGVDaGFuZ2UiLCJlIiwiZmxvdyIsInRhcmdldCIsInZhbHVlIiwicXVlcnkiLCJyZXNwb24iLCJhcnJheSIsImNhcmRzIiwibWl4Iiwic29ydCIsIk1hdGgiLCJyYW5kb20iLCJjb25zb2xlIiwibG9nIiwibGVuZ3RoIiwicHJldmlvdXNDYXJkIiwibmV4dENhcmQiLCJtYWluIiwiY2xhc3NOYW1lIiwiaHJlZiIsImRpdiIsIm9uQ2xpY2siLCJoMSIsInNlbGVjdCIsIm5hbWUiLCJvbkNoYW5nZSIsIm1hcCIsImwiLCJvcHRpb24iLCJpZCIsInRpdGxlIiwiZmFsbGJhY2siLCJwIiwidWwiLCJ0IiwibGkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/quiz/page.js\n"));

/***/ })

});