(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-calculation-calculation-module"],{

/***/ "+bOv":
/*!******************************************************************************!*\
  !*** ./src/app/admin/components/calculation/services/calculation.service.ts ***!
  \******************************************************************************/
/*! exports provided: CalculationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalculationService", function() { return CalculationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "AytR");




let CalculationService = class CalculationService {
    constructor(http) {
        this.http = http;
    }
    SaveCalculation(data) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].crudCalculations, data);
    }
    UpdateCalculation(data) {
        return this.http.patch(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].crudCalculations, data);
    }
    getCalculationsList() {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].GetCalculations);
    }
    getCalculation(Id) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].crudCalculations + Id);
    }
    deleteCalculation(Id) {
        return this.http.delete(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].crudCalculations + Id);
    }
};
CalculationService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
CalculationService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CalculationService);



/***/ }),

/***/ "85di":
/*!********************************************************************!*\
  !*** ./src/app/admin/components/calculation/calculation.module.ts ***!
  \********************************************************************/
/*! exports provided: CalculationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalculationModule", function() { return CalculationModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _calculation_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./calculation-routing.module */ "9F7Q");
/* harmony import */ var _calculation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./calculation.component */ "Q7cE");
/* harmony import */ var _components_calculation_list_calculation_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/calculation-list/calculation-list.component */ "CKd4");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-pagination */ "oOf3");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _components_calculation_write_calculation_write_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/calculation-write/calculation-write.component */ "pjap");











let CalculationModule = class CalculationModule {
};
CalculationModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_calculation_component__WEBPACK_IMPORTED_MODULE_4__["CalculationComponent"], _components_calculation_list_calculation_list_component__WEBPACK_IMPORTED_MODULE_5__["CalculationListComponent"], _components_calculation_write_calculation_write_component__WEBPACK_IMPORTED_MODULE_10__["CalculationWriteComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _calculation_routing_module__WEBPACK_IMPORTED_MODULE_3__["CalculationRoutingModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatRippleModule"],
            ngx_pagination__WEBPACK_IMPORTED_MODULE_8__["NgxPaginationModule"],
        ]
    })
], CalculationModule);



/***/ }),

/***/ "9F7Q":
/*!****************************************************************************!*\
  !*** ./src/app/admin/components/calculation/calculation-routing.module.ts ***!
  \****************************************************************************/
/*! exports provided: CalculationRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalculationRoutingModule", function() { return CalculationRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _calculation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./calculation.component */ "Q7cE");
/* harmony import */ var _components_calculation_list_calculation_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/calculation-list/calculation-list.component */ "CKd4");
/* harmony import */ var _components_calculation_write_calculation_write_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/calculation-write/calculation-write.component */ "pjap");






const routes = [
    {
        path: "",
        component: _calculation_component__WEBPACK_IMPORTED_MODULE_3__["CalculationComponent"],
        children: [
            {
                path: '',
                component: _components_calculation_list_calculation_list_component__WEBPACK_IMPORTED_MODULE_4__["CalculationListComponent"],
            },
            {
                path: 'add',
                component: _components_calculation_write_calculation_write_component__WEBPACK_IMPORTED_MODULE_5__["CalculationWriteComponent"],
            }, {
                path: 'add/:Id',
                component: _components_calculation_write_calculation_write_component__WEBPACK_IMPORTED_MODULE_5__["CalculationWriteComponent"],
            },
        ],
    },
];
let CalculationRoutingModule = class CalculationRoutingModule {
};
CalculationRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], CalculationRoutingModule);



/***/ }),

/***/ "Ag1i":
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/components/calculation/components/calculation-list/calculation-list.component.html ***!
  \************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-container\">\r\n    <div class=\"headcontainer\">\r\n  \r\n        <div class=\"d-flex justify-content-between align-items-center flex-wrap\">\r\n           <h6 class=\"d-flex justify-content-between align-items-center flex-wrap\">\r\n              <div>\r\n                    Calculation\r\n              </div>\r\n              <span class=\"ml-2 badge badge-light\">{{ Calculations.length }}</span>\r\n           </h6>\r\n           <div class=\"pt-1 iconDiv float-right d-flex flex-wrap align-items-center\">\r\n                <a routerLink=\"/calculation/add\" matRipple class=\"mx-2  cursor-pointer btn \">\r\n                    <span class=\"mr-1\">\r\n                      <i class=\"mdi mdi-plus\"></i>\r\n                    </span>\r\n                    <span class=\"mr-4\">Add</span>\r\n               </a>\r\n           </div>\r\n        </div>\r\n  \r\n       <div class=\" mt-3 pl-4\">\r\n          <div class=\"col-lg-9 col-md-5 muted inter-medium font14\">\r\n            \r\n          </div>\r\n       </div>\r\n    </div>\r\n    <div class=\"row\">\r\n       <div class=\"py-5 col-12 grid-margin\">\r\n          <div class=\" card product-list\">\r\n             <div class=\"card-body p-0\">\r\n                <div class=\"table-responsive\">\r\n                   <table class=\"table\">\r\n                      <thead>\r\n                         <tr>\r\n                            <th> Id</th>\r\n                            <th> Name</th>\r\n                         </tr>\r\n                      </thead>\r\n                      <tbody>\r\n                         <tr  *ngFor=\"let Calculation of Calculations | paginate: { itemsPerPage: itemsPerPage, currentPage: currentPage }\">\r\n                             <td>{{ Calculation.Id }}</td>\r\n                            <td>\r\n                               <div class=\"d-flex justify-content-between align-items-center\">\r\n                                  {{ Calculation.Name}}\r\n                                  <div class=\"dropdown\" ngbDropdown container=\"body\" placement=\"bottom-right\">\r\n                                     <a class=\"dropdown-toggle d-flex align-items-center\" ngbDropdownToggle id=\"profileDropdown\" >\r\n                                        <div class=\"text-black\">\r\n                                           <i class=\"mdi mdi-dots-vertical\" ></i>\r\n                                        </div>\r\n                                     </a>\r\n                                     <div class=\"dropdown-menu dropdown-menu-right navbar-dropdown p-0 option-menu\" ngbDropdownMenu aria-labelledby=\"profileDropdown\">\r\n                                        <a class=\"dropdown-item\" routerLink=\"/calculation/add/{{ Calculation.Id }}\" >\r\n                                        Edit Calculation\r\n                                        </a>\r\n                                        <a class=\"dropdown-item text-danger\" (click)=\"deleteCalculation(Calculation);\" href=\"javascript:;\" >\r\n                                          Delete Calculation\r\n                                       </a>\r\n                                     </div>\r\n                                  </div>\r\n                               </div>\r\n                            </td>\r\n                         </tr>\r\n                      </tbody>\r\n                   </table>\r\n                </div>\r\n             </div>\r\n          </div>\r\n       </div>\r\n    </div>\r\n  \r\n     <!-- pagination -->\r\n     <pagination-controls (pageChange)=\"currentPage = $event\" previousLabel=\"Prev\"\r\n     nextLabel=\"Next\"></pagination-controls>\r\n  \r\n  </div>");

/***/ }),

/***/ "CKd4":
/*!********************************************************************************************************!*\
  !*** ./src/app/admin/components/calculation/components/calculation-list/calculation-list.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: CalculationListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalculationListComponent", function() { return CalculationListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_calculation_list_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./calculation-list.component.html */ "Ag1i");
/* harmony import */ var _calculation_list_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./calculation-list.component.scss */ "TUuW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_calculation_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/calculation.service */ "+bOv");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "5eHb");







let CalculationListComponent = class CalculationListComponent {
    constructor(service, spinner, toastr) {
        this.service = service;
        this.spinner = spinner;
        this.toastr = toastr;
        this.currentPage = 1;
        this.itemsPerPage = 10;
        this.Calculations = [];
    }
    ngOnInit() {
        this.getCalculationsList();
    }
    getCalculationsList() {
        this.spinner.show();
        this.service.getCalculationsList().subscribe(res => {
            this.Calculations = res;
            this.spinner.hide();
        }, err => {
            this.spinner.hide();
            this.toastr.error(err.error.Message);
        });
    }
    deleteCalculation(Calculation) {
        this.spinner.show();
        this.service.deleteCalculation(Calculation.Id).subscribe(res => {
            this.toastr.success('Calculation Deleted');
            this.spinner.hide();
            this.getCalculationsList();
        }, err => {
            this.spinner.hide();
            this.toastr.error(err.error.Message);
        });
    }
};
CalculationListComponent.ctorParameters = () => [
    { type: _services_calculation_service__WEBPACK_IMPORTED_MODULE_4__["CalculationService"] },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"] }
];
CalculationListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-calculation-list',
        template: _raw_loader_calculation_list_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_calculation_list_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CalculationListComponent);



/***/ }),

/***/ "F/8c":
/*!*************************************************************************!*\
  !*** ./src/app/admin/components/calculation/calculation.component.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2NvbXBvbmVudHMvY2FsY3VsYXRpb24vY2FsY3VsYXRpb24uY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "Q7cE":
/*!***********************************************************************!*\
  !*** ./src/app/admin/components/calculation/calculation.component.ts ***!
  \***********************************************************************/
/*! exports provided: CalculationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalculationComponent", function() { return CalculationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_calculation_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./calculation.component.html */ "yK2T");
/* harmony import */ var _calculation_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./calculation.component.scss */ "F/8c");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let CalculationComponent = class CalculationComponent {
    constructor() { }
    ngOnInit() {
    }
};
CalculationComponent.ctorParameters = () => [];
CalculationComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-calculation',
        template: _raw_loader_calculation_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_calculation_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CalculationComponent);



/***/ }),

/***/ "T7u/":
/*!************************************************************************************************************!*\
  !*** ./src/app/admin/components/calculation/components/calculation-write/calculation-write.component.scss ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".btn-light {\n  color: #212529  !important;\n  background-color: #f8f9fa  !important;\n  border-color: #f8f9fa !important;\n}\n\n.btn-light:hover {\n  color: #212529 !important;\n  background-color: #e2e6ea !important;\n  border-color: #dae0e5 !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vY29tcG9uZW50cy9jYWxjdWxhdGlvbi9jb21wb25lbnRzL2NhbGN1bGF0aW9uLXdyaXRlL2NhbGN1bGF0aW9uLXdyaXRlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMEJBQTBCO0VBQzFCLHFDQUFxQztFQUNyQyxnQ0FBZ0M7QUFDcEM7O0FBQ0E7RUFDSSx5QkFBeUI7RUFDekIsb0NBQW9DO0VBQ3BDLGdDQUFnQztBQUVwQyIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2NvbXBvbmVudHMvY2FsY3VsYXRpb24vY29tcG9uZW50cy9jYWxjdWxhdGlvbi13cml0ZS9jYWxjdWxhdGlvbi13cml0ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idG4tbGlnaHR7XHJcbiAgICBjb2xvcjogIzIxMjUyOSAgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmEgICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItY29sb3I6ICNmOGY5ZmEgIWltcG9ydGFudDtcclxufVxyXG4uYnRuLWxpZ2h0OmhvdmVyIHtcclxuICAgIGNvbG9yOiAjMjEyNTI5ICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTJlNmVhICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItY29sb3I6ICNkYWUwZTUgIWltcG9ydGFudDtcclxufSJdfQ== */");

/***/ }),

/***/ "TUuW":
/*!**********************************************************************************************************!*\
  !*** ./src/app/admin/components/calculation/components/calculation-list/calculation-list.component.scss ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

/***/ }),

/***/ "l/9K":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/components/calculation/components/calculation-write/calculation-write.component.html ***!
  \**************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form class=\"form\"  [formGroup]=\"forms\" (ngSubmit)=\"forms.valid && SaveCalculation()\">\r\n\r\n    <div class=\"row\">\r\n\r\n        <div class=\"col-md-6\">\r\n\r\n            <div class=\"card\">\r\n                <div class=\"card-body\">\r\n                        <div class=\"form-group inter-medium\">\r\n                            <input type=\"text\" class=\"form-control form-control-lg\" placeholder=\"Name\" formControlName=\"Name\">\r\n                            <div *ngIf=\"forms.controls['Name'].invalid && (forms.controls['Name'].dirty || forms.controls['Name'].touched)\" class=\"error-msg\">\r\n                                <div *ngIf=\"forms.controls['Name'].errors.required\">\r\n                                Name is required.\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group inter-medium\">\r\n                            <textarea class=\"form-control form-control-lg\" placeholder=\"Script\" formControlName=\"Script\" rows=\"5\"></textarea>\r\n                            <div *ngIf=\"forms.controls['Script'].invalid && (forms.controls['Script'].dirty || forms.controls['Script'].touched)\" class=\"error-msg\">\r\n                                <div *ngIf=\"forms.controls['Script'].errors.required\">\r\n                                Script is required.\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"btn-group flex-wrap\">\r\n                            <a matRipple class=\"btn btn-light mr-2\" routerLink=\"/calculation\">Back</a>\r\n                            <button mat-raised-button\r\n                            color=\"primary\"\r\n                            [disabled]=\"forms.invalid\"\r\n                            (click)=\"SaveCalculation()\"\r\n                            type=\"button\" matRipple class=\"btn \">Submit</button>\r\n                        </div>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n\r\n        <div class=\"col-md-6\">\r\n            \r\n            <div class=\"card\">\r\n                <div class=\"card-header bg-white\">\r\n                    Placeholder :\r\n                </div>\r\n                <div class=\"card-body\">\r\n                   <div *ngFor=\"let Variable of Variables\" class=\"d-flex\">\r\n                       <a class=\"text-secondary cursor-pointer\" (click)=\"InsetVariable(Variable);\">{{ Variable.Name }}</a>\r\n                   </div>   \r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n\r\n    </div>\r\n\r\n</form>\r\n");

/***/ }),

/***/ "pjap":
/*!**********************************************************************************************************!*\
  !*** ./src/app/admin/components/calculation/components/calculation-write/calculation-write.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: CalculationWriteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalculationWriteComponent", function() { return CalculationWriteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_calculation_write_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./calculation-write.component.html */ "l/9K");
/* harmony import */ var _calculation_write_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./calculation-write.component.scss */ "T7u/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _services_calculation_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/calculation.service */ "+bOv");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");









let CalculationWriteComponent = class CalculationWriteComponent {
    constructor(service, spinner, toastr, fb, router, route) {
        this.service = service;
        this.spinner = spinner;
        this.toastr = toastr;
        this.fb = fb;
        this.router = router;
        this.route = route;
    }
    ngOnInit() {
        this.forms = this.fb.group({
            Id: [''],
            Name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            Script: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
        });
        this.Id = this.route.snapshot.params['Id'];
        if (this.Id) {
            this.getCalculation(this.Id);
        }
        this.getVariables();
    }
    getCalculation(Id) {
        this.spinner.show();
        this.service.getCalculation(Id).subscribe((res) => {
            this.spinner.hide();
            this.forms.setValue({
                Id: res.Id,
                Name: res.Name,
                Script: res.Script,
            });
        });
    }
    getVariables() {
        this.Variables = [
            { Name: "Description", Value: "Description" },
            { Name: "Description1", Value: "Description1" },
        ];
    }
    SaveCalculation() {
        this.spinner.show();
        if (this.Id) {
            this.service.UpdateCalculation(this.forms.value).subscribe(res => {
                this.toastr.success('Calculation updated');
                this.spinner.hide();
                this.router.navigate(['calculation']);
            }, err => {
                this.spinner.hide();
                this.toastr.error(err.error.Message);
            });
        }
        else {
            this.service.SaveCalculation(this.forms.value).subscribe(res => {
                this.toastr.success('Calculation added');
                this.spinner.hide();
                this.router.navigate(['calculation']);
            }, err => {
                this.spinner.hide();
                this.toastr.error(err.error.Message);
            });
        }
    }
    InsetVariable(Variable) {
        this.forms.controls['Script'].setValue(this.forms.value.Script + ' ' + Variable.Name);
    }
};
CalculationWriteComponent.ctorParameters = () => [
    { type: _services_calculation_service__WEBPACK_IMPORTED_MODULE_6__["CalculationService"] },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] }
];
CalculationWriteComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-calculation-write',
        template: _raw_loader_calculation_write_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_calculation_write_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CalculationWriteComponent);



/***/ }),

/***/ "yK2T":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/components/calculation/calculation.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>");

/***/ })

}]);
//# sourceMappingURL=components-calculation-calculation-module-es2015.js.map