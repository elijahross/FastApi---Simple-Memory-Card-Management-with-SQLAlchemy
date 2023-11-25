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

/***/ "(app-pages-browser)/./components/CreateCard.js":
/*!**********************************!*\
  !*** ./components/CreateCard.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api */ \"(app-pages-browser)/./components/api.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction CreateCard() {\n    _s();\n    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        \"title\": \"\",\n        \"description\": \"\",\n        \"stack_id\": \"\"\n    });\n    const [options, setOptions] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const getOptions = async ()=>{\n        const skip = 0;\n        const limit = 20;\n        const response = await _api__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"/\", skip, limit);\n        setOptions(response.data);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        getOptions();\n    }, []);\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        await _api__WEBPACK_IMPORTED_MODULE_2__[\"default\"].post(\"/card/\", formData);\n        setFormData({\n            \"title\": \"\",\n            \"description\": \"\",\n            \"stack_id\": \"\"\n        });\n    };\n    const handleChange = (e)=>{\n        const value = e.target.value;\n        setFormData({\n            ...formData,\n            [e.target.name]: value\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            onSubmit: handleSubmit,\n            className: \"flex flex-col p-4 justify-center standart_style\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: \"m-auto pt-2 pb-4\",\n                    children: \"New Card\"\n                }, void 0, false, {\n                    fileName: \"/Users/elijah/Documents/Phyton/FirstApi/front-end/components/CreateCard.js\",\n                    lineNumber: 46,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-row justify-start items-center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            className: \"p-4\",\n                            children: \"Stack: \"\n                        }, void 0, false, {\n                            fileName: \"/Users/elijah/Documents/Phyton/FirstApi/front-end/components/CreateCard.js\",\n                            lineNumber: 48,\n                            columnNumber: 17\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                            name: \"stack_id\",\n                            className: \"m-auto bg-transparent cursor-pointer\",\n                            children: options.map((l)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: l.id,\n                                    children: l.title\n                                }, void 0, false, {\n                                    fileName: \"/Users/elijah/Documents/Phyton/FirstApi/front-end/components/CreateCard.js\",\n                                    lineNumber: 50,\n                                    columnNumber: 41\n                                }, this))\n                        }, void 0, false, {\n                            fileName: \"/Users/elijah/Documents/Phyton/FirstApi/front-end/components/CreateCard.js\",\n                            lineNumber: 49,\n                            columnNumber: 17\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/elijah/Documents/Phyton/FirstApi/front-end/components/CreateCard.js\",\n                    lineNumber: 47,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-row justify-between items-center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            className: \"p-4\",\n                            children: \"Card Name: \"\n                        }, void 0, false, {\n                            fileName: \"/Users/elijah/Documents/Phyton/FirstApi/front-end/components/CreateCard.js\",\n                            lineNumber: 54,\n                            columnNumber: 17\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            name: \"title\",\n                            onChange: handleChange,\n                            value: formData.title,\n                            className: \"h-[20px] rounded-md px-4\"\n                        }, void 0, false, {\n                            fileName: \"/Users/elijah/Documents/Phyton/FirstApi/front-end/components/CreateCard.js\",\n                            lineNumber: 55,\n                            columnNumber: 17\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/elijah/Documents/Phyton/FirstApi/front-end/components/CreateCard.js\",\n                    lineNumber: 53,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mb-4 flex flex-row justify-between items-center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            className: \"p-4\",\n                            children: \"Description: \"\n                        }, void 0, false, {\n                            fileName: \"/Users/elijah/Documents/Phyton/FirstApi/front-end/components/CreateCard.js\",\n                            lineNumber: 58,\n                            columnNumber: 17\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            name: \"description\",\n                            onChange: handleChange,\n                            value: formData.description,\n                            className: \"h-[20px] rounded-md px-4\"\n                        }, void 0, false, {\n                            fileName: \"/Users/elijah/Documents/Phyton/FirstApi/front-end/components/CreateCard.js\",\n                            lineNumber: 59,\n                            columnNumber: 17\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/elijah/Documents/Phyton/FirstApi/front-end/components/CreateCard.js\",\n                    lineNumber: 57,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    type: \"submit\",\n                    className: \"btn\",\n                    children: \" Create \"\n                }, void 0, false, {\n                    fileName: \"/Users/elijah/Documents/Phyton/FirstApi/front-end/components/CreateCard.js\",\n                    lineNumber: 61,\n                    columnNumber: 13\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/elijah/Documents/Phyton/FirstApi/front-end/components/CreateCard.js\",\n            lineNumber: 45,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/elijah/Documents/Phyton/FirstApi/front-end/components/CreateCard.js\",\n        lineNumber: 44,\n        columnNumber: 5\n    }, this);\n}\n_s(CreateCard, \"GDq3qF2OFU0BrI+JOZmvHV27MLE=\");\n_c = CreateCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CreateCard);\nvar _c;\n$RefreshReg$(_c, \"CreateCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvQ3JlYXRlQ2FyZC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ3lCO0FBQ2tCO0FBQ3BCO0FBRXZCLFNBQVNJOztJQUNMLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHTCwrQ0FBUUEsQ0FBRTtRQUN0QyxTQUFTO1FBQ1QsZUFBZTtRQUNmLFlBQVk7SUFDaEI7SUFDQSxNQUFNLENBQUNNLFNBQVNDLFdBQVcsR0FBR1AsK0NBQVFBLENBQUMsRUFBRTtJQUV6QyxNQUFNUSxhQUFhO1FBQ2YsTUFBTUMsT0FBTztRQUNiLE1BQU1DLFFBQVE7UUFDZCxNQUFNQyxXQUFXLE1BQU1ULDRDQUFHQSxDQUFDVSxHQUFHLENBQUMsS0FBS0gsTUFBTUM7UUFDMUNILFdBQVdJLFNBQVNFLElBQUk7SUFDNUI7SUFFQVosZ0RBQVNBLENBQUM7UUFDTk87SUFDSixHQUFHLEVBQUU7SUFFTCxNQUFNTSxlQUFlLE9BQU9DO1FBQ3hCQSxFQUFFQyxjQUFjO1FBQ2hCLE1BQU1kLDRDQUFHQSxDQUFDZSxJQUFJLENBQUMsVUFBVWI7UUFDekJDLFlBQVk7WUFDUixTQUFTO1lBQ1QsZUFBZTtZQUNmLFlBQVk7UUFDaEI7SUFDSjtJQUVBLE1BQU1hLGVBQWUsQ0FBQ0g7UUFDbEIsTUFBTUksUUFBUUosRUFBRUssTUFBTSxDQUFDRCxLQUFLO1FBQzVCZCxZQUFZO1lBQ1IsR0FBR0QsUUFBUTtZQUNYLENBQUNXLEVBQUVLLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDLEVBQUVGO1FBQ3JCO0lBQ0o7SUFFRixxQkFDRSw4REFBQ0c7a0JBQ0csNEVBQUNDO1lBQUtDLFVBQVVWO1lBQWNXLFdBQVU7OzhCQUN4Qyw4REFBQ0M7b0JBQUtELFdBQVU7OEJBQW1COzs7Ozs7OEJBQ25DLDhEQUFDSDtvQkFBSUcsV0FBVTs7c0NBQ1AsOERBQUNFOzRCQUFNRixXQUFVO3NDQUFNOzs7Ozs7c0NBQ3ZCLDhEQUFDRzs0QkFBT1AsTUFBTTs0QkFBWUksV0FBVTtzQ0FDL0JuQixRQUFRdUIsR0FBRyxDQUFDLENBQUNDLGtCQUFNLDhEQUFDQztvQ0FBT1osT0FBT1csRUFBRUUsRUFBRTs4Q0FBR0YsRUFBRUcsS0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7OEJBR3pELDhEQUFDWDtvQkFBSUcsV0FBVTs7c0NBQ1gsOERBQUNFOzRCQUFNRixXQUFVO3NDQUFNOzs7Ozs7c0NBQ3ZCLDhEQUFDUzs0QkFBTWIsTUFBTTs0QkFBVWMsVUFBVWpCOzRCQUFjQyxPQUFPZixTQUFTNkIsS0FBSzs0QkFBRVIsV0FBVTs7Ozs7Ozs7Ozs7OzhCQUVwRiw4REFBQ0g7b0JBQUlHLFdBQVU7O3NDQUNYLDhEQUFDRTs0QkFBTUYsV0FBVTtzQ0FBTTs7Ozs7O3NDQUN2Qiw4REFBQ1M7NEJBQU1iLE1BQU07NEJBQWdCYyxVQUFVakI7NEJBQWNDLE9BQU9mLFNBQVNnQyxXQUFXOzRCQUFFWCxXQUFVOzs7Ozs7Ozs7Ozs7OEJBRWhHLDhEQUFDWTtvQkFBT0MsTUFBSztvQkFBU2IsV0FBVTs4QkFBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJbEQ7R0EzRFN0QjtLQUFBQTtBQTZEVCwrREFBZUEsVUFBVUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0NyZWF0ZUNhcmQuanM/ZTcwNiJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBhcGkgZnJvbSAnLi9hcGknXG5cbmZ1bmN0aW9uIENyZWF0ZUNhcmQoKSB7XG4gICAgY29uc3QgW2Zvcm1EYXRhLCBzZXRGb3JtRGF0YV0gPSB1c2VTdGF0ZSAoe1xuICAgICAgICBcInRpdGxlXCI6IFwiXCIsXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJcIixcbiAgICAgICAgXCJzdGFja19pZFwiOiBcIlwiXG4gICAgfSlcbiAgICBjb25zdCBbb3B0aW9ucywgc2V0T3B0aW9uc10gPSB1c2VTdGF0ZShbXSlcblxuICAgIGNvbnN0IGdldE9wdGlvbnMgPSBhc3luYygpID0+IHtcbiAgICAgICAgY29uc3Qgc2tpcCA9IDBcbiAgICAgICAgY29uc3QgbGltaXQgPSAyMFxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGFwaS5nZXQoJy8nLCBza2lwLCBsaW1pdClcbiAgICAgICAgc2V0T3B0aW9ucyhyZXNwb25zZS5kYXRhKVxuICAgIH1cblxuICAgIHVzZUVmZmVjdCgoKSA9PntcbiAgICAgICAgZ2V0T3B0aW9ucygpO1xuICAgIH0sIFtdKVxuXG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIGF3YWl0IGFwaS5wb3N0KCcvY2FyZC8nLCBmb3JtRGF0YSlcbiAgICAgICAgc2V0Rm9ybURhdGEoe1xuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIlwiLFxuICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlwiLFxuICAgICAgICAgICAgXCJzdGFja19pZFwiOiBcIlwiXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGUpID0+IHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBlLnRhcmdldC52YWx1ZVxuICAgICAgICBzZXRGb3JtRGF0YSh7XG4gICAgICAgICAgICAuLi5mb3JtRGF0YSxcbiAgICAgICAgICAgIFtlLnRhcmdldC5uYW1lXTogdmFsdWUsXG4gICAgICAgIH0pXG4gICAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0gY2xhc3NOYW1lPSdmbGV4IGZsZXgtY29sIHAtNCBqdXN0aWZ5LWNlbnRlciBzdGFuZGFydF9zdHlsZSc+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nbS1hdXRvIHB0LTIgcGItNCc+TmV3IENhcmQ8L3NwYW4+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtcm93IGp1c3RpZnktc3RhcnQgaXRlbXMtY2VudGVyJz5cbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPSdwLTQnPlN0YWNrOiA8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxzZWxlY3QgbmFtZT17XCJzdGFja19pZFwifSBjbGFzc05hbWU9J20tYXV0byBiZy10cmFuc3BhcmVudCBjdXJzb3ItcG9pbnRlcic+XG4gICAgICAgICAgICAgICAgICAgIHtvcHRpb25zLm1hcCgobCkgPT4gPG9wdGlvbiB2YWx1ZT17bC5pZH0+e2wudGl0bGV9PC9vcHRpb24+KX1cbiAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1yb3cganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlcic+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT0ncC00Jz5DYXJkIE5hbWU6IDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0IG5hbWU9e1widGl0bGVcIn0gIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9IHZhbHVlPXtmb3JtRGF0YS50aXRsZX0gY2xhc3NOYW1lPSdoLVsyMHB4XSByb3VuZGVkLW1kIHB4LTQnLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21iLTQgZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyJz5cbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPSdwLTQnPkRlc2NyaXB0aW9uOiA8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dCBuYW1lPXtcImRlc2NyaXB0aW9uXCJ9ICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSB2YWx1ZT17Zm9ybURhdGEuZGVzY3JpcHRpb259IGNsYXNzTmFtZT0naC1bMjBweF0gcm91bmRlZC1tZCBweC00Jy8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT0nYnRuJz4gQ3JlYXRlIDwvYnV0dG9uPlxuICAgICAgICA8L2Zvcm0+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ3JlYXRlQ2FyZCJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiYXBpIiwiQ3JlYXRlQ2FyZCIsImZvcm1EYXRhIiwic2V0Rm9ybURhdGEiLCJvcHRpb25zIiwic2V0T3B0aW9ucyIsImdldE9wdGlvbnMiLCJza2lwIiwibGltaXQiLCJyZXNwb25zZSIsImdldCIsImRhdGEiLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJwb3N0IiwiaGFuZGxlQ2hhbmdlIiwidmFsdWUiLCJ0YXJnZXQiLCJuYW1lIiwiZGl2IiwiZm9ybSIsIm9uU3VibWl0IiwiY2xhc3NOYW1lIiwic3BhbiIsImxhYmVsIiwic2VsZWN0IiwibWFwIiwibCIsIm9wdGlvbiIsImlkIiwidGl0bGUiLCJpbnB1dCIsIm9uQ2hhbmdlIiwiZGVzY3JpcHRpb24iLCJidXR0b24iLCJ0eXBlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/CreateCard.js\n"));

/***/ })

});