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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/api */ \"(app-pages-browser)/./components/api.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst page = ()=>{\n    _s();\n    const [options, setOptions] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [cards, setCards] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const getOptions = async ()=>{\n        const skip = 0;\n        const limit = 20;\n        const response = await _components_api__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"/\", skip, limit);\n        setOptions(response.data);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        getOptions();\n    }, []);\n    const handleChange = async (e)=>{\n        let value = \"/stack/?stack_id=\".concat(e.target.value);\n        const stack = await _components_api__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(value);\n        setCards(stack.data.cards);\n        console.log(stack.data.cards);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"flex min-h-screen flex-col items-center justify-between p-24\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-row standart_style\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"font-mono mr-4 \",\n                        children: \"Choose Stack:\"\n                    }, void 0, false, {\n                        fileName: \"/Users/elijah/Documents/Phyton/FirstApi/front-end/app/quiz/page.js\",\n                        lineNumber: 29,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                        name: \"stack_id\",\n                        defaultValue: \"1\",\n                        className: \"bg-transparent font-mono cursor-pointer\",\n                        onChange: handleChange,\n                        children: options.map((l)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                value: l.id,\n                                children: l.title\n                            }, l.id, false, {\n                                fileName: \"/Users/elijah/Documents/Phyton/FirstApi/front-end/app/quiz/page.js\",\n                                lineNumber: 33,\n                                columnNumber: 37\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"/Users/elijah/Documents/Phyton/FirstApi/front-end/app/quiz/page.js\",\n                        lineNumber: 32,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/elijah/Documents/Phyton/FirstApi/front-end/app/quiz/page.js\",\n                lineNumber: 28,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"z-10 flex min-w-full min-h-full standart_style items-center justify-between\",\n                children: cards.map((card)=>{\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"standart_style font-mono flex grid-flow-row p-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"text-xl font-bold mb-8\",\n                                children: card.title\n                            }, void 0, false, {\n                                fileName: \"/Users/elijah/Documents/Phyton/FirstApi/front-end/app/quiz/page.js\",\n                                lineNumber: 39,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"\",\n                                children: card.description\n                            }, void 0, false, {\n                                fileName: \"/Users/elijah/Documents/Phyton/FirstApi/front-end/app/quiz/page.js\",\n                                lineNumber: 42,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/elijah/Documents/Phyton/FirstApi/front-end/app/quiz/page.js\",\n                        lineNumber: 38,\n                        columnNumber: 17\n                    }, undefined);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/elijah/Documents/Phyton/FirstApi/front-end/app/quiz/page.js\",\n                lineNumber: 36,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/elijah/Documents/Phyton/FirstApi/front-end/app/quiz/page.js\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, undefined);\n};\n_s(page, \"eVSG584y7g7ibr1hxwgALbIcahI=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (page);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9xdWl6L3BhZ2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUN5QjtBQUNTO0FBQ1M7QUFFM0MsTUFBTUksT0FBTzs7SUFDYixNQUFNLENBQUNDLFNBQVNDLFdBQVcsR0FBR0osK0NBQVFBLENBQUMsRUFBRTtJQUN6QyxNQUFNLENBQUNLLE9BQU9DLFNBQVMsR0FBR04sK0NBQVFBLENBQUMsRUFBRTtJQUNyQyxNQUFNTyxhQUFhO1FBQ2YsTUFBTUMsT0FBTztRQUNiLE1BQU1DLFFBQVE7UUFDZCxNQUFNQyxXQUFXLE1BQU1YLHVEQUFHQSxDQUFDWSxHQUFHLENBQUMsS0FBS0gsTUFBTUM7UUFDMUNMLFdBQVdNLFNBQVNFLElBQUk7SUFDNUI7SUFDQVgsZ0RBQVNBLENBQUM7UUFDTk07SUFDSixHQUFHLEVBQUU7SUFFTCxNQUFNTSxlQUFlLE9BQU1DO1FBQ25CLElBQUlDLFFBQVEsb0JBQW1DLE9BQWZELEVBQUVFLE1BQU0sQ0FBQ0QsS0FBSztRQUM5QyxNQUFNRSxRQUFRLE1BQU1sQix1REFBR0EsQ0FBQ1ksR0FBRyxDQUFDSTtRQUM1QlQsU0FBU1csTUFBTUwsSUFBSSxDQUFDUCxLQUFLO1FBQ3pCYSxRQUFRQyxHQUFHLENBQUNGLE1BQU1MLElBQUksQ0FBQ1AsS0FBSztJQUNwQztJQUVFLHFCQUNFLDhEQUFDZTtRQUFLQyxXQUFVOzswQkFDWiw4REFBQ0M7Z0JBQUlELFdBQVU7O2tDQUNYLDhEQUFDRTt3QkFBR0YsV0FBVTtrQ0FBa0I7Ozs7OztrQ0FHaEMsOERBQUNHO3dCQUFPQyxNQUFNO3dCQUFZQyxjQUFhO3dCQUFJTCxXQUFVO3dCQUEwQ00sVUFBVWQ7a0NBQ3BHVixRQUFReUIsR0FBRyxDQUFDLENBQUNDLGtCQUFNLDhEQUFDQztnQ0FBT2YsT0FBT2MsRUFBRUUsRUFBRTswQ0FBY0YsRUFBRUcsS0FBSzsrQkFBZEgsRUFBRUUsRUFBRTs7Ozs7Ozs7Ozs7Ozs7OzswQkFHMUQsOERBQUNUO2dCQUFJRCxXQUFVOzBCQUNWaEIsTUFBTXVCLEdBQUcsQ0FBQyxDQUFDSztrQ0FDUiw4REFBQ1g7d0JBQUlELFdBQVU7OzBDQUNYLDhEQUFDYTtnQ0FBS2IsV0FBVTswQ0FDWFksS0FBS0QsS0FBSzs7Ozs7OzBDQUVmLDhEQUFDRTtnQ0FBS2IsV0FBVTswQ0FDWFksS0FBS0UsV0FBVzs7Ozs7Ozs7Ozs7O2dCQUc3Qjs7Ozs7Ozs7Ozs7O0FBSVo7R0E1Q01qQztBQThDTiwrREFBZUEsSUFBSUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvcXVpei9wYWdlLmpzP2YwMjIiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgYXBpIGZyb20gJ0AvY29tcG9uZW50cy9hcGknXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5cbmNvbnN0IHBhZ2UgPSAoKSA9PiB7XG5jb25zdCBbb3B0aW9ucywgc2V0T3B0aW9uc10gPSB1c2VTdGF0ZShbXSlcbmNvbnN0IFtjYXJkcywgc2V0Q2FyZHNdID0gdXNlU3RhdGUoW10pXG5jb25zdCBnZXRPcHRpb25zID0gYXN5bmMoKSA9PiB7XG4gICAgY29uc3Qgc2tpcCA9IDBcbiAgICBjb25zdCBsaW1pdCA9IDIwXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhcGkuZ2V0KCcvJywgc2tpcCwgbGltaXQpXG4gICAgc2V0T3B0aW9ucyhyZXNwb25zZS5kYXRhKVxufVxudXNlRWZmZWN0KCgpID0+e1xuICAgIGdldE9wdGlvbnMoKTtcbn0sIFtdKVxuXG5jb25zdCBoYW5kbGVDaGFuZ2UgPSBhc3luYyhlKSA9PiB7XG4gICAgICAgIGxldCB2YWx1ZSA9IGAvc3RhY2svP3N0YWNrX2lkPSR7ZS50YXJnZXQudmFsdWV9YFxuICAgICAgICBjb25zdCBzdGFjayA9IGF3YWl0IGFwaS5nZXQodmFsdWUpXG4gICAgICAgIHNldENhcmRzKHN0YWNrLmRhdGEuY2FyZHMpXG4gICAgICAgIGNvbnNvbGUubG9nKHN0YWNrLmRhdGEuY2FyZHMpXG59XG5cbiAgcmV0dXJuIChcbiAgICA8bWFpbiBjbGFzc05hbWU9XCJmbGV4IG1pbi1oLXNjcmVlbiBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHAtMjRcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1yb3cgc3RhbmRhcnRfc3R5bGUnPlxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT0nZm9udC1tb25vIG1yLTQgJz5cbiAgICAgICAgICAgIENob29zZSBTdGFjazpcbiAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICA8c2VsZWN0IG5hbWU9e1wic3RhY2tfaWRcIn0gZGVmYXVsdFZhbHVlPVwiMVwiIGNsYXNzTmFtZT0nYmctdHJhbnNwYXJlbnQgZm9udC1tb25vIGN1cnNvci1wb2ludGVyJyBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfT5cbiAgICAgICAgICAgICAgICB7b3B0aW9ucy5tYXAoKGwpID0+IDxvcHRpb24gdmFsdWU9e2wuaWR9IGtleT17bC5pZH0+e2wudGl0bGV9PC9vcHRpb24+KX1cbiAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ6LTEwIGZsZXggbWluLXctZnVsbCBtaW4taC1mdWxsIHN0YW5kYXJ0X3N0eWxlIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgICAgIHtjYXJkcy5tYXAoKGNhcmQpID0+IHtcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc3RhbmRhcnRfc3R5bGUgZm9udC1tb25vIGZsZXggZ3JpZC1mbG93LXJvdyBwLTQnPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3RleHQteGwgZm9udC1ib2xkIG1iLTgnPlxuICAgICAgICAgICAgICAgICAgICAgICAge2NhcmQudGl0bGV9XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPScnPlxuICAgICAgICAgICAgICAgICAgICAgICAge2NhcmQuZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIH0pfVxuICAgICAgICA8L2Rpdj5cbiAgICA8L21haW4+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgcGFnZSJdLCJuYW1lcyI6WyJSZWFjdCIsImFwaSIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwicGFnZSIsIm9wdGlvbnMiLCJzZXRPcHRpb25zIiwiY2FyZHMiLCJzZXRDYXJkcyIsImdldE9wdGlvbnMiLCJza2lwIiwibGltaXQiLCJyZXNwb25zZSIsImdldCIsImRhdGEiLCJoYW5kbGVDaGFuZ2UiLCJlIiwidmFsdWUiLCJ0YXJnZXQiLCJzdGFjayIsImNvbnNvbGUiLCJsb2ciLCJtYWluIiwiY2xhc3NOYW1lIiwiZGl2IiwiaDEiLCJzZWxlY3QiLCJuYW1lIiwiZGVmYXVsdFZhbHVlIiwib25DaGFuZ2UiLCJtYXAiLCJsIiwib3B0aW9uIiwiaWQiLCJ0aXRsZSIsImNhcmQiLCJzcGFuIiwiZGVzY3JpcHRpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/quiz/page.js\n"));

/***/ })

});