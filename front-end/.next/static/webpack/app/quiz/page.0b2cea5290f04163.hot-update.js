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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/api */ \"(app-pages-browser)/./components/api.js\");\n/* harmony import */ var next_link_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link.js */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link_js__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst page = ()=>{\n    _s();\n    const [options, setOptions] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [lmnt, setLmnt] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [card, setCard] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [length, setLength] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [toggle, setToggle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const getOptions = async ()=>{\n        const skip = 0;\n        const limit = 20;\n        const response = await _components_api__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"/\", skip, limit);\n        setOptions(response.data);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        getOptions();\n        showCards(1);\n    }, []);\n    const handleChange = async (e)=>{\n        let flow = showCards(e.target.value);\n        setLmnt(flow);\n    };\n    const showCards = async (query)=>{\n        const value = \"/stack/?stack_id=\".concat(query);\n        const respon = await _components_api__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(value);\n        const array = respon.data.cards;\n        const mix = array.sort(()=>{\n            return 0.5 - Math.random();\n        });\n        setLmnt(mix);\n        setCard(mix[0]);\n        return card;\n    };\n    const previousCard = ()=>{\n        if (length >= 1) {\n            setCard(lmnt[length - 1]);\n            setLength(length - 1);\n        } else {}\n    };\n    const nextCard = ()=>{\n        if (length <= lmnt.length) {\n            setCard(lmnt[length - 1]);\n            setLength(length + 1);\n        } else {}\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"flex min-h-screen flex-col items-center justify-center p-24 relative\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link_js__WEBPACK_IMPORTED_MODULE_3___default()), {\n                href: \"/\",\n                className: \"fixed left-8 top-8 btn\",\n                children: \" Back \"\n            }, void 0, false, {\n                fileName: \"/Users/elijah/Documents/Phyton/FirstApi/front-end/app/quiz/page.js\",\n                lineNumber: 61,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"fixed bottom-8 left-8 btn\",\n                onClick: previousCard,\n                children: \"Previous Card\"\n            }, void 0, false, {\n                fileName: \"/Users/elijah/Documents/Phyton/FirstApi/front-end/app/quiz/page.js\",\n                lineNumber: 62,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"fixed bottom-8 right-8 btn\",\n                onClick: nextCard,\n                children: \"Next Card\"\n            }, void 0, false, {\n                fileName: \"/Users/elijah/Documents/Phyton/FirstApi/front-end/app/quiz/page.js\",\n                lineNumber: 63,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"fixed bottom-8 m-auto btn\",\n                onClick: ()=>setToggle((prevState)=>!prevState),\n                children: \"Show Card\"\n            }, void 0, false, {\n                fileName: \"/Users/elijah/Documents/Phyton/FirstApi/front-end/app/quiz/page.js\",\n                lineNumber: 64,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-row standart_style mb-20 justify-self-start\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"font-mono mr-4 \",\n                        children: \"Choose Stack:\"\n                    }, void 0, false, {\n                        fileName: \"/Users/elijah/Documents/Phyton/FirstApi/front-end/app/quiz/page.js\",\n                        lineNumber: 66,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                        name: \"stack_id\",\n                        className: \"bg-transparent font-mono cursor-pointer\",\n                        onChange: handleChange,\n                        children: options.map((l)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                value: l.id,\n                                children: l.title\n                            }, l.id, false, {\n                                fileName: \"/Users/elijah/Documents/Phyton/FirstApi/front-end/app/quiz/page.js\",\n                                lineNumber: 70,\n                                columnNumber: 37\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"/Users/elijah/Documents/Phyton/FirstApi/front-end/app/quiz/page.js\",\n                        lineNumber: 69,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/elijah/Documents/Phyton/FirstApi/front-end/app/quiz/page.js\",\n                lineNumber: 65,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"align-top items-start\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_1__.Suspense, {\n                    fallback: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Loading feed...\"\n                    }, void 0, false, {\n                        fileName: \"/Users/elijah/Documents/Phyton/FirstApi/front-end/app/quiz/page.js\",\n                        lineNumber: 74,\n                        columnNumber: 33\n                    }, void 0),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"standart_style min-h-[240px] min-w-[360px]\",\n                        children: !toggle ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                            children: card.title\n                        }, void 0, false) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                            children: [\n                                card.title,\n                                \" \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/Users/elijah/Documents/Phyton/FirstApi/front-end/app/quiz/page.js\",\n                                    lineNumber: 76,\n                                    columnNumber: 67\n                                }, undefined),\n                                \" \",\n                                card.description\n                            ]\n                        }, void 0, true)\n                    }, void 0, false, {\n                        fileName: \"/Users/elijah/Documents/Phyton/FirstApi/front-end/app/quiz/page.js\",\n                        lineNumber: 75,\n                        columnNumber: 17\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/elijah/Documents/Phyton/FirstApi/front-end/app/quiz/page.js\",\n                    lineNumber: 74,\n                    columnNumber: 13\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/elijah/Documents/Phyton/FirstApi/front-end/app/quiz/page.js\",\n                lineNumber: 73,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/elijah/Documents/Phyton/FirstApi/front-end/app/quiz/page.js\",\n        lineNumber: 60,\n        columnNumber: 5\n    }, undefined);\n};\n_s(page, \"NvNY8pAlQBkb497gzpju8YmZvj0=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (page);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxLQUFLOzBEQUFPOztnQ0FBRzFDLEtBQUswQyxLQUFLO2dDQUFDOzhDQUFDLDhEQUFDRzs7Ozs7Z0NBQUk7Z0NBQUU3QyxLQUFLOEMsV0FBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTXpGO0dBekVNbkQ7QUEyRU4sK0RBQWVBLElBQUlBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3F1aXovcGFnZS5qcz9mMDIyIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGFwaSBmcm9tICdAL2NvbXBvbmVudHMvYXBpJ1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgU3VzcGVuc2UgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluay5qcydcblxuXG5jb25zdCBwYWdlID0gKCkgPT4ge1xuY29uc3QgW29wdGlvbnMsIHNldE9wdGlvbnNdID0gdXNlU3RhdGUoW10pXG5jb25zdCBbbG1udCwgc2V0TG1udF0gPSB1c2VTdGF0ZShbXSlcbmNvbnN0IFtjYXJkLCBzZXRDYXJkXSA9IHVzZVN0YXRlKFtdKVxuY29uc3QgW2xlbmd0aCwgc2V0TGVuZ3RoXSA9IHVzZVN0YXRlKDApXG5jb25zdCBbdG9nZ2xlLCBzZXRUb2dnbGVdID0gdXNlU3RhdGUoZmFsc2UpXG5jb25zdCBnZXRPcHRpb25zID0gYXN5bmMoKSA9PiB7XG4gICAgY29uc3Qgc2tpcCA9IDBcbiAgICBjb25zdCBsaW1pdCA9IDIwXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhcGkuZ2V0KCcvJywgc2tpcCwgbGltaXQpXG4gICAgc2V0T3B0aW9ucyhyZXNwb25zZS5kYXRhKVxufVxudXNlRWZmZWN0KCgpID0+e1xuICAgIGdldE9wdGlvbnMoKTtcbiAgICBzaG93Q2FyZHMoMSk7XG59LCBbXSlcblxuY29uc3QgaGFuZGxlQ2hhbmdlID0gYXN5bmMoZSkgPT4ge1xuICAgIGxldCBmbG93ID0gc2hvd0NhcmRzKGUudGFyZ2V0LnZhbHVlKVxuICAgIHNldExtbnQoZmxvdylcbn1cblxuY29uc3Qgc2hvd0NhcmRzID0gYXN5bmMocXVlcnkpID0+IHtcbiAgICBjb25zdCB2YWx1ZSA9IGAvc3RhY2svP3N0YWNrX2lkPSR7cXVlcnl9YFxuICAgIGNvbnN0IHJlc3BvbiA9IGF3YWl0IGFwaS5nZXQodmFsdWUpXG4gICAgY29uc3QgYXJyYXkgPSByZXNwb24uZGF0YS5jYXJkc1xuICAgIGNvbnN0IG1peCA9IGFycmF5LnNvcnQoKCkgPT4ge3JldHVybiAwLjUgLSBNYXRoLnJhbmRvbSgpfSlcbiAgICBzZXRMbW50KG1peClcbiAgICBzZXRDYXJkKG1peFswXSlcbiAgICByZXR1cm4gY2FyZCB9XG4gICAgXG5jb25zdCBwcmV2aW91c0NhcmQgPSAoKSA9PiB7XG4gICAgaWYgKGxlbmd0aCA+PSAxKSB7XG4gICAgc2V0Q2FyZChsbW50W2xlbmd0aC0xXSlcbiAgICBzZXRMZW5ndGgobGVuZ3RoIC0gMSl9XG4gICAgZWxzZSB7XG5cbiAgICB9XG5cbn1cblxuY29uc3QgbmV4dENhcmQgPSAoKSA9PiB7XG4gICAgaWYgKGxlbmd0aCA8PSBsbW50Lmxlbmd0aCkge1xuICAgIHNldENhcmQobG1udFtsZW5ndGgtMV0pXG4gICAgc2V0TGVuZ3RoKGxlbmd0aCArIDEpfVxuICAgIGVsc2Uge1xuXG4gICAgfVxufVxuXG4gIHJldHVybiAoXG4gICAgPG1haW4gY2xhc3NOYW1lPVwiZmxleCBtaW4taC1zY3JlZW4gZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHAtMjQgcmVsYXRpdmVcIj5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9cIiBjbGFzc05hbWU9J2ZpeGVkIGxlZnQtOCB0b3AtOCBidG4nPiBCYWNrIDwvTGluaz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZpeGVkIGJvdHRvbS04IGxlZnQtOCBidG4nIG9uQ2xpY2s9e3ByZXZpb3VzQ2FyZH0+UHJldmlvdXMgQ2FyZDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZml4ZWQgYm90dG9tLTggcmlnaHQtOCBidG4nIG9uQ2xpY2s9e25leHRDYXJkfT5OZXh0IENhcmQ8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZpeGVkIGJvdHRvbS04IG0tYXV0byBidG4nIG9uQ2xpY2s9eygpID0+IHNldFRvZ2dsZShwcmV2U3RhdGUgPT4gIXByZXZTdGF0ZSl9PlNob3cgQ2FyZDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LXJvdyBzdGFuZGFydF9zdHlsZSBtYi0yMCBqdXN0aWZ5LXNlbGYtc3RhcnQnPlxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT0nZm9udC1tb25vIG1yLTQgJz5cbiAgICAgICAgICAgIENob29zZSBTdGFjazpcbiAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICA8c2VsZWN0IG5hbWU9e1wic3RhY2tfaWRcIn0gY2xhc3NOYW1lPSdiZy10cmFuc3BhcmVudCBmb250LW1vbm8gY3Vyc29yLXBvaW50ZXInIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9PlxuICAgICAgICAgICAgICAgIHtvcHRpb25zLm1hcCgobCkgPT4gPG9wdGlvbiB2YWx1ZT17bC5pZH0ga2V5PXtsLmlkfT57bC50aXRsZX08L29wdGlvbj4pfVxuICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYWxpZ24tdG9wIGl0ZW1zLXN0YXJ0Jz5cbiAgICAgICAgICAgIDxTdXNwZW5zZSBmYWxsYmFjaz17PHA+TG9hZGluZyBmZWVkLi4uPC9wPn0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BzdGFuZGFydF9zdHlsZSBtaW4taC1bMjQwcHhdIG1pbi13LVszNjBweF1gfT5cbiAgICAgICAgICAgICAgICAgICAgeyF0b2dnbGUgPyA8PntjYXJkLnRpdGxlfTwvPiA6IDw+e2NhcmQudGl0bGV9IDxici8+IHtjYXJkLmRlc2NyaXB0aW9ufTwvPn1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvU3VzcGVuc2U+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvbWFpbj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBwYWdlIl0sIm5hbWVzIjpbIlJlYWN0IiwiYXBpIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJTdXNwZW5zZSIsIkxpbmsiLCJwYWdlIiwib3B0aW9ucyIsInNldE9wdGlvbnMiLCJsbW50Iiwic2V0TG1udCIsImNhcmQiLCJzZXRDYXJkIiwibGVuZ3RoIiwic2V0TGVuZ3RoIiwidG9nZ2xlIiwic2V0VG9nZ2xlIiwiZ2V0T3B0aW9ucyIsInNraXAiLCJsaW1pdCIsInJlc3BvbnNlIiwiZ2V0IiwiZGF0YSIsInNob3dDYXJkcyIsImhhbmRsZUNoYW5nZSIsImUiLCJmbG93IiwidGFyZ2V0IiwidmFsdWUiLCJxdWVyeSIsInJlc3BvbiIsImFycmF5IiwiY2FyZHMiLCJtaXgiLCJzb3J0IiwiTWF0aCIsInJhbmRvbSIsInByZXZpb3VzQ2FyZCIsIm5leHRDYXJkIiwibWFpbiIsImNsYXNzTmFtZSIsImhyZWYiLCJkaXYiLCJvbkNsaWNrIiwicHJldlN0YXRlIiwiaDEiLCJzZWxlY3QiLCJuYW1lIiwib25DaGFuZ2UiLCJtYXAiLCJsIiwib3B0aW9uIiwiaWQiLCJ0aXRsZSIsImZhbGxiYWNrIiwicCIsImJyIiwiZGVzY3JpcHRpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/quiz/page.js\n"));

/***/ })

});