(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["error-pages-error-pages-module"],{

/***/ "6tXz":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/error-pages/error500/error500.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"d-flex align-items-center text-center error-page bg-info pt-5 pb-4\">\r\n  <div class=\"row flex-grow\">\r\n    <div class=\"col-lg-7 mx-auto text-white\">\r\n      <div class=\"row align-items-center d-flex flex-row\">\r\n        <div class=\"col-lg-6 text-lg-right pr-lg-4\">\r\n          <h1 class=\"display-1 mb-0\">500</h1>\r\n        </div>\r\n        <div class=\"col-lg-6 error-page-divider text-lg-left pl-lg-4\">\r\n          <h2>SORRY!</h2>\r\n          <h3 class=\"font-weight-light\">Internal server error!</h3>\r\n        </div>\r\n      </div>\r\n      <div class=\"row mt-5\">\r\n        <div class=\"col-12 text-center mt-xl-2\">\r\n          <a class=\"text-white font-weight-medium\" routerLink=\"/dashboard\">Back to home</a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>  ");

/***/ }),

/***/ "CRg8":
/*!************************************************************!*\
  !*** ./src/app/error-pages/error404/error404.component.ts ***!
  \************************************************************/
/*! exports provided: Error404Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Error404Component", function() { return Error404Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_error404_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./error404.component.html */ "DuIw");
/* harmony import */ var _error404_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./error404.component.scss */ "yqal");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let Error404Component = class Error404Component {
    constructor() { }
    ngOnInit() {
    }
};
Error404Component.ctorParameters = () => [];
Error404Component = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-error404',
        template: _raw_loader_error404_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_error404_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], Error404Component);



/***/ }),

/***/ "DuIw":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/error-pages/error404/error404.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"d-flex align-items-center text-center error-page bg-primary pt-5 pb-4\">\r\n  <div class=\"row flex-grow\">\r\n    <div class=\"col-lg-8 mx-auto text-white\">\r\n      <div class=\"row align-items-center d-flex flex-row\">\r\n        <div class=\"col-lg-6 text-lg-right pr-lg-4\">\r\n          <h1 class=\"display-1 mb-0\">404</h1>\r\n        </div>\r\n        <div class=\"col-lg-6 error-page-divider text-lg-left pl-lg-4\">\r\n          <h2>SORRY!</h2>\r\n          <h3 class=\"font-weight-light\">The page you’re looking for was not found.</h3>\r\n        </div>\r\n      </div>\r\n      <div class=\"row mt-5\">\r\n        <div class=\"col-12 text-center mt-xl-2\">\r\n          <a class=\"text-white font-weight-medium\" routerLink=\"/\">Back to home</a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "ECuu":
/*!**************************************************************!*\
  !*** ./src/app/error-pages/error500/error500.component.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".error-page.bg-info {\n  height: 100vh;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXJyb3ItcGFnZXMvZXJyb3I1MDAvZXJyb3I1MDAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFhO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvZXJyb3ItcGFnZXMvZXJyb3I1MDAvZXJyb3I1MDAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXJyb3ItcGFnZS5iZy1pbmZve1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxufSJdfQ== */");

/***/ }),

/***/ "dflm":
/*!***************************************************!*\
  !*** ./src/app/error-pages/error-pages.module.ts ***!
  \***************************************************/
/*! exports provided: ErrorPagesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorPagesModule", function() { return ErrorPagesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _error404_error404_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./error404/error404.component */ "CRg8");
/* harmony import */ var _error500_error500_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./error500/error500.component */ "klF6");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");






const routes = [
    { path: '404', component: _error404_error404_component__WEBPACK_IMPORTED_MODULE_3__["Error404Component"] },
    { path: '500', component: _error500_error500_component__WEBPACK_IMPORTED_MODULE_4__["Error500Component"] },
];
let ErrorPagesModule = class ErrorPagesModule {
};
ErrorPagesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_error404_error404_component__WEBPACK_IMPORTED_MODULE_3__["Error404Component"], _error500_error500_component__WEBPACK_IMPORTED_MODULE_4__["Error500Component"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes)
        ]
    })
], ErrorPagesModule);



/***/ }),

/***/ "klF6":
/*!************************************************************!*\
  !*** ./src/app/error-pages/error500/error500.component.ts ***!
  \************************************************************/
/*! exports provided: Error500Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Error500Component", function() { return Error500Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_error500_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./error500.component.html */ "6tXz");
/* harmony import */ var _error500_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./error500.component.scss */ "ECuu");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let Error500Component = class Error500Component {
    constructor() { }
    ngOnInit() {
    }
};
Error500Component.ctorParameters = () => [];
Error500Component = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-error500',
        template: _raw_loader_error500_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_error500_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], Error500Component);



/***/ }),

/***/ "yqal":
/*!**************************************************************!*\
  !*** ./src/app/error-pages/error404/error404.component.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".bg-primary {\n  background-color: #C30101 !important;\n  height: 100vh;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXJyb3ItcGFnZXMvZXJyb3I0MDQvZXJyb3I0MDQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQ0FBb0M7RUFDcEMsYUFBYTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL2Vycm9yLXBhZ2VzL2Vycm9yNDA0L2Vycm9yNDA0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJnLXByaW1hcnl7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQzMwMTAxICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG59Il19 */");

/***/ })

}]);
//# sourceMappingURL=error-pages-error-pages-module-es2015.js.map