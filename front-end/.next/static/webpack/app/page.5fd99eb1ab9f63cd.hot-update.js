"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./components/CreateStack.js":
/*!***********************************!*\
  !*** ./components/CreateStack.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api */ \"(app-pages-browser)/./components/api.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction CreateStack() {\n    _s();\n    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        \"title\": \"\"\n    });\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        await _api__WEBPACK_IMPORTED_MODULE_2__[\"default\"].post(\"/\", formData);\n        setFormData({\n            \"title\": \"\"\n        });\n    };\n    const handleChange = (e)=>{\n        const value = e.target.value;\n        setFormData({\n            \"title\": value\n        });\n        console.log(formData);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            onSubmit: handleSubmit,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                    children: \"Title\"\n                }, void 0, false, {\n                    fileName: \"/Users/elijah/Documents/Phyton/FirstApi/front-end/components/CreateStack.js\",\n                    lineNumber: 29,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    name: \"title\",\n                    onChange: handleChange,\n                    value: formData.title\n                }, void 0, false, {\n                    fileName: \"/Users/elijah/Documents/Phyton/FirstApi/front-end/components/CreateStack.js\",\n                    lineNumber: 30,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    type: \"submit\",\n                    children: \"Send\"\n                }, void 0, false, {\n                    fileName: \"/Users/elijah/Documents/Phyton/FirstApi/front-end/components/CreateStack.js\",\n                    lineNumber: 31,\n                    columnNumber: 13\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/elijah/Documents/Phyton/FirstApi/front-end/components/CreateStack.js\",\n            lineNumber: 28,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/elijah/Documents/Phyton/FirstApi/front-end/components/CreateStack.js\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, this);\n}\n_s(CreateStack, \"DCaxwxEe6EKCSx2XQuq4nUXiTaM=\");\n_c = CreateStack;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CreateStack);\nvar _c;\n$RefreshReg$(_c, \"CreateStack\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvQ3JlYXRlU3RhY2suanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUN5QjtBQUNlO0FBQ2pCO0FBRXZCLFNBQVNJOztJQUNMLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHTCwrQ0FBUUEsQ0FBRTtRQUN0QyxTQUFTO0lBQ2I7SUFFQSxNQUFNTSxlQUFlLE9BQU9DO1FBQ3hCQSxFQUFFQyxjQUFjO1FBQ2hCLE1BQU1OLDRDQUFHQSxDQUFDTyxJQUFJLENBQUMsS0FBS0w7UUFDcEJDLFlBQVk7WUFDUixTQUFTO1FBQ2I7SUFDSjtJQUVBLE1BQU1LLGVBQWUsQ0FBQ0g7UUFDbEIsTUFBTUksUUFBUUosRUFBRUssTUFBTSxDQUFDRCxLQUFLO1FBQzVCTixZQUFZO1lBQ1IsU0FBU007UUFDYjtRQUNBRSxRQUFRQyxHQUFHLENBQUNWO0lBQ2hCO0lBQ0YscUJBQ0UsOERBQUNXO2tCQUNHLDRFQUFDQztZQUFLQyxVQUFVWDs7OEJBQ1osOERBQUNZOzhCQUFNOzs7Ozs7OEJBQ1AsOERBQUNDO29CQUFNQyxNQUFLO29CQUFRQyxVQUFVWDtvQkFBY0MsT0FBT1AsU0FBU2tCLEtBQUs7Ozs7Ozs4QkFDakUsOERBQUNDO29CQUFPQyxNQUFLOzhCQUFTOzs7Ozs7Ozs7Ozs7Ozs7OztBQUlsQztHQTdCU3JCO0tBQUFBO0FBK0JULCtEQUFlQSxXQUFXQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQ3JlYXRlU3RhY2suanM/NjZmMSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBhcGkgZnJvbSAnLi9hcGknXG5cbmZ1bmN0aW9uIENyZWF0ZVN0YWNrKCkge1xuICAgIGNvbnN0IFtmb3JtRGF0YSwgc2V0Rm9ybURhdGFdID0gdXNlU3RhdGUgKHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlwiXG4gICAgfSlcblxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICBhd2FpdCBhcGkucG9zdCgnLycsIGZvcm1EYXRhKVxuICAgICAgICBzZXRGb3JtRGF0YSh7XG4gICAgICAgICAgICBcInRpdGxlXCI6IFwiXCJcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IGUudGFyZ2V0LnZhbHVlXG4gICAgICAgIHNldEZvcm1EYXRhKHtcbiAgICAgICAgICAgIFwidGl0bGVcIjogdmFsdWUsXG4gICAgICAgIH0pXG4gICAgICAgIGNvbnNvbGUubG9nKGZvcm1EYXRhKVxuICAgIH1cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgICAgIDxsYWJlbD5UaXRsZTwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgbmFtZT1cInRpdGxlXCIgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gdmFsdWU9e2Zvcm1EYXRhLnRpdGxlfS8+XG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5TZW5kPC9idXR0b24+XG4gICAgICAgIDwvZm9ybT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBDcmVhdGVTdGFjayJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlUmVmIiwiYXBpIiwiQ3JlYXRlU3RhY2siLCJmb3JtRGF0YSIsInNldEZvcm1EYXRhIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwicG9zdCIsImhhbmRsZUNoYW5nZSIsInZhbHVlIiwidGFyZ2V0IiwiY29uc29sZSIsImxvZyIsImRpdiIsImZvcm0iLCJvblN1Ym1pdCIsImxhYmVsIiwiaW5wdXQiLCJuYW1lIiwib25DaGFuZ2UiLCJ0aXRsZSIsImJ1dHRvbiIsInR5cGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/CreateStack.js\n"));

/***/ })

});