(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-sources-sources-module"],{

/***/ "9g1y":
/*!********************************************************************!*\
  !*** ./src/app/admin/components/sources/sources-routing.module.ts ***!
  \********************************************************************/
/*! exports provided: SourcesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SourcesRoutingModule", function() { return SourcesRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_sources_view_sources_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/sources-view/sources-view.component */ "GqF8");




const routes = [
    {
        path: '',
        component: _components_sources_view_sources_view_component__WEBPACK_IMPORTED_MODULE_3__["SourcesViewComponent"],
    },
];
let SourcesRoutingModule = class SourcesRoutingModule {
};
SourcesRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], SourcesRoutingModule);



/***/ }),

/***/ "FdNB":
/*!************************************************************!*\
  !*** ./src/app/admin/components/sources/sources.module.ts ***!
  \************************************************************/
/*! exports provided: SourcesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SourcesModule", function() { return SourcesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _sources_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sources-routing.module */ "9g1y");
/* harmony import */ var _components_sources_view_sources_view_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/sources-view/sources-view.component */ "GqF8");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-pagination */ "oOf3");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var angular_highcharts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular-highcharts */ "a0Xn");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../../../shared/shared.module */ "PCNd");











let SourcesModule = class SourcesModule {
};
SourcesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_components_sources_view_sources_view_component__WEBPACK_IMPORTED_MODULE_4__["SourcesViewComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _sources_routing_module__WEBPACK_IMPORTED_MODULE_3__["SourcesRoutingModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatRippleModule"],
            ngx_pagination__WEBPACK_IMPORTED_MODULE_7__["NgxPaginationModule"],
            angular_highcharts__WEBPACK_IMPORTED_MODULE_9__["ChartModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"],
        ]
    })
], SourcesModule);



/***/ }),

/***/ "GqF8":
/*!********************************************************************************************!*\
  !*** ./src/app/admin/components/sources/components/sources-view/sources-view.component.ts ***!
  \********************************************************************************************/
/*! exports provided: SourcesViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SourcesViewComponent", function() { return SourcesViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_sources_view_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./sources-view.component.html */ "VSfA");
/* harmony import */ var _sources_view_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sources-view.component.scss */ "NPSH");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_sources_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../services/sources.service */ "R/CT");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _subscription_services_subscription_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../../../subscription/services/subscription.service */ "qCmP");











let SourcesViewComponent = class SourcesViewComponent {
    constructor(service, subscriptionService, modalService, toastr, formBuilder, spinner) {
        this.service = service;
        this.subscriptionService = subscriptionService;
        this.modalService = modalService;
        this.toastr = toastr;
        this.formBuilder = formBuilder;
        this.spinner = spinner;
        this.UnassignedSources = [];
        this.AssignedSources = [];
        this.Types = [];
        this.buttonDisable = false;
        this.ShowAssignedAll = 0;
        this.ShowUnassignedAll = 0;
    }
    ngOnInit() {
        this.getActiveSubsciption();
        Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["of"])(this.getTypes()).subscribe(orders => {
            this.Types = orders;
        });
        this.initForm();
    }
    getActiveSubsciption() {
        this.spinner.show();
        this.subscriptionService.getActiveSubsciption().subscribe((response) => {
            this.subsciption = response;
            if (this.subsciption) {
                this.getAssignedSources();
            }
            this.spinner.hide();
        }, err => {
            //handle errors here
            this.toastr.error(err.error.Message);
        });
    }
    initForm() {
        this.forms = this.formBuilder.group({
            RecourceUrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
            SourceType: ['CSV', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
            Message: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
            Terms: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
        });
    }
    getTypes() {
        return [
            { Id: 'CSV', Name: 'CSV' },
            { Id: 'XML', Name: 'XML' },
            { Id: 'Crawler', Name: 'Crawler' },
        ];
    }
    markFormGroupTouched(formGroup) {
        Object.values(formGroup.controls).forEach(control => {
            control.markAsTouched();
            if (control.controls) {
                this.markFormGroupTouched(control);
            }
        });
        return true;
    }
    getUnassignedSources() {
        this.spinner.show();
        this.service.getUnassignedSources().subscribe((response) => {
            this.UnassignedSources = response;
            this.spinner.hide();
        }, err => {
            //handle errors here
            this.toastr.error(err.error.Message);
        });
    }
    getAssignedSources() {
        this.spinner.show();
        this.service.getAssignedSources().subscribe((response) => {
            this.AssignedSources = response;
            this.getUnassignedSources();
            this.spinner.hide();
        }, err => {
            //handle errors here
            this.toastr.error(err.error.Message);
        });
    }
    AddSourceRequest() {
        this.spinner.show();
        this.service.AddSourceRequest(this.forms.value).subscribe((response) => {
            this.getUnassignedSources();
            this.getAssignedSources();
            this.spinner.hide();
            this.toastr.success("Request added");
            this.initForm();
        }, err => {
            //handle errors here
            this.toastr.error(err.error.Message);
        });
    }
    openModal(ref) {
        this.modal = this.modalService.open(ref, { size: 'lg', centered: true });
    }
    AssignSource(source = null, selected = []) {
        this.spinner.show();
        let data;
        if (source) {
            data = this.UnassignedSources.filter((state) => {
                return state.Id == source.Id;
            });
        }
        else {
            data = selected;
        }
        this.service.AssignSource({ sourceIds: data }).subscribe((res) => {
            window.location = res.Link;
            this.spinner.hide();
        }, err => {
            //handle errors here
            this.toastr.error(err.error.Message);
        });
    }
    UnassignSource(source = null, selected = []) {
        this.spinner.show();
        let data;
        if (source) {
            data = this.AssignedSources.filter((state) => {
                return state.Id != source.Id;
            });
        }
        else {
            data = selected;
        }
        this.service.AssignSource({ sourceIds: data }).subscribe((res) => {
            window.location = res.Link;
            this.spinner.hide();
        }, err => {
            //handle errors here
            this.toastr.error(err.error.Message);
        });
    }
    AssignedAllSelection() {
        this.ShowAssignedAll = 0;
        this.UnassignedSources.filter(res => {
            res.select === true ? this.ShowAssignedAll++ : '';
        });
    }
    AssignedAll() {
        let data = [];
        this.UnassignedSources.filter(res => {
            res.select === true ? data.push(res.Id) : '';
        });
        this.AssignSource(null, data);
    }
    UnassignedAllSelection() {
        this.ShowUnassignedAll = 0;
        this.AssignedSources.filter(res => {
            res.select === true ? this.ShowUnassignedAll++ : '';
        });
    }
    UnassignedAll() {
        let data = [];
        this.AssignedSources.filter(res => {
            res.select === true ? '' : data.push(res.Id);
        });
        this.UnassignSource(null, data);
    }
};
SourcesViewComponent.ctorParameters = () => [
    { type: _services_sources_service__WEBPACK_IMPORTED_MODULE_4__["SourcesService"] },
    { type: _subscription_services_subscription_service__WEBPACK_IMPORTED_MODULE_10__["SubscriptionService"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"] },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"] }
];
SourcesViewComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-sources-view',
        template: _raw_loader_sources_view_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_sources_view_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SourcesViewComponent);



/***/ }),

/***/ "NPSH":
/*!**********************************************************************************************!*\
  !*** ./src/app/admin/components/sources/components/sources-view/sources-view.component.scss ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@media only screen and (max-width: 1024px) {\n  .plan-btn-row {\n    justify-content: center;\n  }\n}\n\n.mtop35 {\n  margin-top: 35px;\n}\n\n.card-header {\n  border-top-right-radius: 10px;\n  border-top-left-radius: 10px;\n}\n\ntable thead th {\n  text-transform: uppercase;\n  border-bottom: 0px;\n  font-size: 11px;\n  line-height: 16px;\n  color: #A0A0A7;\n}\n\ntable tr td {\n  line-height: 20px;\n}\n\ntable tr:nth-child(1) td {\n  border-top: 0;\n}\n\n.custom-control-input {\n  z-index: 80;\n  top: 10px;\n}\n\n.custom-checkbox .custom-control-input:indeterminate ~ .custom-control-label::before {\n  background-color: white;\n  border-color: #adb5bd;\n}\n\n.custom-checkbox .custom-control-input:indeterminate ~ .custom-control-label::after {\n  background-image: none;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vY29tcG9uZW50cy9zb3VyY2VzL2NvbXBvbmVudHMvc291cmNlcy12aWV3L3NvdXJjZXMtdmlldy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJO0lBQ0UsdUJBQXVCO0VBQTNCO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBQ0E7RUFDRSw2QkFBNkI7RUFDN0IsNEJBQTRCO0FBRTlCOztBQUFBO0VBR00seUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGNBQWM7QUFDcEI7O0FBUkE7RUFZTSxpQkFBaUI7QUFBdkI7O0FBWkE7RUFpQk0sYUFBYTtBQURuQjs7QUFLQTtFQUNFLFdBQVc7RUFDWCxTQUFRO0FBRlY7O0FBSUE7RUFDRSx1QkFBc0I7RUFDdEIscUJBQXFCO0FBRHZCOztBQUdBO0VBQ0Usc0JBQXNCO0FBQXhCIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vY29tcG9uZW50cy9zb3VyY2VzL2NvbXBvbmVudHMvc291cmNlcy12aWV3L3NvdXJjZXMtdmlldy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjRweCl7XHJcbiAgICAucGxhbi1idG4tcm93e1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIH1cclxufVxyXG4ubXRvcDM1e1xyXG4gIG1hcmdpbi10b3A6IDM1cHg7XHJcbn1cclxuLmNhcmQtaGVhZGVye1xyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xyXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XHJcbn1cclxudGFibGV7XHJcbiAgdGhlYWR7XHJcbiAgICB0aHtcclxuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogMHB4O1xyXG4gICAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xyXG4gICAgICBjb2xvcjogI0EwQTBBNztcclxuICAgIH1cclxuICB9XHJcbiAgdHJ7XHJcbiAgICB0ZHtcclxuICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHRyOm50aC1jaGlsZCgxKXtcclxuICAgIHRke1xyXG4gICAgICBib3JkZXItdG9wOiAwO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4uY3VzdG9tLWNvbnRyb2wtaW5wdXR7XHJcbiAgei1pbmRleDogODA7XHJcbiAgdG9wOjEwcHg7XHJcbn1cclxuLmN1c3RvbS1jaGVja2JveCAuY3VzdG9tLWNvbnRyb2wtaW5wdXQ6aW5kZXRlcm1pbmF0ZSB+IC5jdXN0b20tY29udHJvbC1sYWJlbDo6YmVmb3JlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xyXG4gIGJvcmRlci1jb2xvcjogI2FkYjViZDtcclxufVxyXG4uY3VzdG9tLWNoZWNrYm94IC5jdXN0b20tY29udHJvbC1pbnB1dDppbmRldGVybWluYXRlIH4gLmN1c3RvbS1jb250cm9sLWxhYmVsOjphZnRlciB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "R/CT":
/*!**********************************************************************!*\
  !*** ./src/app/admin/components/sources/services/sources.service.ts ***!
  \**********************************************************************/
/*! exports provided: SourcesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SourcesService", function() { return SourcesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "AytR");




let SourcesService = class SourcesService {
    constructor(http) {
        this.http = http;
    }
    getUnassignedSources() {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].UnassignedSources + '/Unassigned');
    }
    getAssignedSources() {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].UnassignedSources + '/Assigned');
    }
    AddSourceRequest(data) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].AddSourceRequest, data);
    }
    AssignSource(data) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].CustomSources, { params: data });
    }
};
SourcesService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
SourcesService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], SourcesService);



/***/ }),

/***/ "VSfA":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/components/sources/components/sources-view/sources-view.component.html ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"mb-5\">\r\n    <h4 class=\"page-heading font20 inter-semi-bold\">Manage sources</h4>\r\n  </div>\r\n  \r\n  <div class=\"row\" *ngIf=\"subsciption\">\r\n      <div class=\"col-md-7 mb-3 subsciption-left-section px-3\">\r\n          <div class=\"card shadow-sm\">\r\n              <div class=\"card-header d-flex align-items-center justify-content-between bg-white p-4 inter-semi-bold\">\r\n                 Assigned sources\r\n                 <a class=\"text-primary\" href=\"javascript:;\" (click)=\"UnassignedAll()\" *ngIf=\"ShowUnassignedAll\">+ Unassign selected({{ShowUnassignedAll}})</a>\r\n              </div>\r\n              <div class=\"card-body contigent-area page-area p-0\">\r\n\r\n                <div class=\"table-responsive\">\r\n                    <table class=\"table\">\r\n                        <thead>\r\n                            <tr>\r\n                                <th class=\"pt-4 px-4 pb-0 inter-semi-bold\">Source name</th>\r\n                            </tr>\r\n                        </thead>\r\n\r\n                        <tbody>\r\n                            <tr *ngFor=\"let Source of AssignedSources;\">\r\n                                <td class=\"px-4 text-black font14 inter-medium\">\r\n                                      <div class=\"d-flex justify-content-between align-items-center\">\r\n                                          <div class=\"custom-control custom-primary-checkbox custom-checkbox mr-2\">\r\n                                              <input type=\"checkbox\" value=\"1\" class=\"custom-control-input \" id=\"assignedSources{{Source.Id}}\" (change)=\"UnassignedAllSelection();\" [(ngModel)]=\"Source.select\">\r\n                                              <label class=\"custom-control-label\" for=\"assignedSources{{Source.Id}}\">\r\n                                                  {{ Source.Name }}\r\n                                              </label>\r\n                                          </div> \r\n                                          <div class=\"custom-dropdown\">\r\n                                              <div class=\"dropdown\" ngbDropdown container=\"body\" placement=\"bottom-right\">\r\n                                                  <a class=\"dropdown-toggle d-flex align-items-center\" ngbDropdownToggle id=\"profileDropdown\" >\r\n                                                     <div class=\"text-black\">\r\n                                                        <i class=\"mdi mdi-dots-vertical\"></i>\r\n                                                     </div>\r\n                                                  </a>\r\n                                                  <div class=\"dropdown-menu dropdown-menu-right custom-dropdown-menu p-0 option-menu\" ngbDropdownMenu aria-labelledby=\"profileDropdown\">\r\n                                                     <a class=\"dropdown-item\" href=\"javascript:;\" (click)=\"UnassignSource(Source)\">\r\n                                                        Unassign\r\n                                                     </a>\r\n                                                  </div>\r\n                                              </div>\r\n                                          </div>\r\n                                      </div>\r\n                                  </td>\r\n                            </tr>\r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n  \r\n                <div class=\"d-flex flex-wrap plan-btn-row p-4\">\r\n                      <button class=\"btn btn-fw inter-semi-bold btn-inverse-primary\" matRipple (click)=\"openModal(UpgradeModal)\">\r\n                        Upgrade subscription\r\n                      </button>\r\n                </div>\r\n                \r\n              </div>\r\n          </div>\r\n  \r\n          <div class=\"card mtop35 shadow-sm pb-3\">\r\n              <div class=\"card-header d-flex align-items-center justify-content-between bg-white p-4 inter-semi-bold\">\r\n                Unassigned sources\r\n                <a class=\"text-primary\" href=\"javascript:;\" (click)=\"AssignedAll()\" *ngIf=\"ShowAssignedAll\">+ Assign selected({{ShowAssignedAll}})</a>\r\n              </div>\r\n              <div class=\"card-body p-0 invoice-body\">\r\n                \r\n                  <div class=\"table-responsive\">\r\n                      <table class=\"table\">\r\n                          <thead>\r\n                              <tr>\r\n                                  <th class=\"pt-4 px-4 pb-0 inter-semi-bold\">Source name</th>\r\n                              </tr>\r\n                          </thead>\r\n  \r\n                          <tbody>\r\n                              <tr *ngFor=\"let Source of UnassignedSources;\">\r\n                                  <td class=\"px-4 text-black font14 inter-medium\">\r\n                                        <div class=\"d-flex justify-content-between align-items-center\">\r\n                                            <div class=\"custom-control custom-primary-checkbox custom-checkbox mr-2\">\r\n                                                <input type=\"checkbox\" value=\"1\" class=\"custom-control-input \" id=\"UnassignedSources{{Source.Id}}\" (change)=\"AssignedAllSelection();\" [(ngModel)]=\"Source.select\">\r\n                                                <label class=\"custom-control-label\" for=\"UnassignedSources{{Source.Id}}\">\r\n                                                    {{ Source.Name }}\r\n                                                </label>\r\n                                            </div> \r\n                                            <div class=\"custom-dropdown\">\r\n                                                <div class=\"dropdown\" ngbDropdown container=\"body\" placement=\"bottom-right\">\r\n                                                    <a class=\"dropdown-toggle d-flex align-items-center\" ngbDropdownToggle id=\"profileDropdown\" >\r\n                                                       <div class=\"text-black\">\r\n                                                          <i class=\"mdi mdi-dots-vertical\"></i>\r\n                                                       </div>\r\n                                                    </a>\r\n                                                    <div class=\"dropdown-menu dropdown-menu-right custom-dropdown-menu p-0 option-menu\" ngbDropdownMenu aria-labelledby=\"profileDropdown\">\r\n                                                       <a class=\"dropdown-item\" href=\"javascript:;\" (click)=\"AssignSource(Source)\">\r\n                                                          Assign\r\n                                                       </a>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </td>\r\n                              </tr>\r\n                          </tbody>\r\n                      </table>\r\n                  </div>\r\n  \r\n              </div>\r\n            </div>\r\n  \r\n  \r\n      </div>\r\n  \r\n      <div class=\"col-md-5 subsciption-right-section px-3\">\r\n  \r\n          <div class=\"card shadow-sm\">\r\n              <div class=\"card-header d-flex align-items-center justify-content-between bg-white p-4 inter-semi-bold\">\r\n                 Request to add a source\r\n              </div>\r\n              <div class=\"card-body py-3\">\r\n                <form class=\"form\"  [formGroup]=\"forms\" (ngSubmit)=\"markFormGroupTouched(forms)  && forms.valid && AddSourceRequest(forms)\"  novalidate>\r\n\r\n                    <div class=\"form-group\">\r\n                        <label>Source Url</label>\r\n                        <input type=\"text\" class=\"form-control form-control-lg\" placeholder=\"Url\" formControlName=\"RecourceUrl\">\r\n                        <div *ngIf=\"forms.controls['RecourceUrl'].invalid && (forms.controls['RecourceUrl'].dirty || forms.controls['RecourceUrl'].touched)\" class=\"text-danger font12 pt-1\">\r\n                               <div *ngIf=\"forms.controls['RecourceUrl'].errors.required\">\r\n                                Url is required.\r\n                               </div>\r\n                         </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group\">\r\n                        <div class=\"font14 inter-medium\">Source type</div>\r\n                      \r\n                        <div class=\"custom-control custom-primary-checkbox custom-checkbox mr-5\" *ngFor=\"let Type of Types\" style=\"display: inline-flex;\">\r\n                            <input id=\"{{ Type.Id }}\" type=\"radio\" formControlName=\"SourceType\" [value]=\"Type.Id\" class=\"custom-control-input\" name=\"SourceType\">\r\n                            <label for=\"{{ Type.Id }}\" class=\"custom-control-label\">\r\n                                {{Type.Name}}                       \r\n                             </label>\r\n                        </div>\r\n\r\n                         <div *ngIf=\"forms.controls['SourceType'].invalid\" class=\"text-danger font12 pt-1\">\r\n                            <div *ngIf=\"forms.controls['SourceType'].errors.required\">\r\n                             Source type is required.\r\n                            </div>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group\">\r\n                        <label>Message</label>\r\n                        <textarea class=\"form-control form-control-lg\" placeholder=\"Message\" formControlName=\"Message\"></textarea>\r\n                        <div *ngIf=\"forms.controls['Message'].invalid && (forms.controls['Message'].dirty || forms.controls['Message'].touched)\" class=\"error-msg\">\r\n                           <div *ngIf=\"forms.controls['Message'].errors.required\">\r\n                           Message is required.\r\n                           </div>\r\n                        </div>\r\n                     </div>\r\n\r\n                    <div class=\"custom-control custom-primary-checkbox custom-checkbox\">\r\n                        <input type=\"checkbox\" formControlName=\"Terms\" class=\"custom-control-input \" id=\"TermsCheck\">\r\n                        <label class=\"custom-control-label font14\" for=\"TermsCheck\">\r\n                            I agree to the Terms & Conditions\r\n                        </label>\r\n                    </div>\r\n            \r\n                    <button class=\"btn btn-block mt-4\" [disabled] = \"buttonDisable || !forms.valid\" matRipple>\r\n                        Send request\r\n                    </button>\r\n\r\n                </form>\r\n                \r\n  \r\n              </div>\r\n          </div>\r\n  \r\n      </div>\r\n  \r\n  </div>\r\n  <ng-template #UpgradeModal class=\"modal fade\" id=\"exampleModal-2\" aria-labelledby=\"exampleModalLabel-2\">\r\n      <div class=\"modal-content \">\r\n         <div class=\"modal-header\">\r\n            <h5 class=\"modal-title  font-weight-bold\" id=\"exampleModalLabel-2\">Upgrade subscription</h5>\r\n            <button type=\"button\" class=\"close\" (click)=\"modal.dismiss()\" aria-label=\"Close\">&times;\r\n            </button>\r\n         </div>\r\n         <div class=\"modal-body\">\r\n           <div class=\"py-3 row\">\r\n              <div class=\"col-12\">\r\n               <div class=\"inter-medium\">\r\n                  <p>Do you really wants to cancel subscription ?</p>\r\n               </div>\r\n              </div>\r\n               <div class=\"col-12\">\r\n                  <button type=\"button\" matRipple class=\"btn btn-primary inter-semi-bold\" (click)=\"cancelSubscription();\">Ok</button>\r\n                  <button type=\"button\" matRipple class=\"btn btn-inverse-light\" (click)=\"modal.dismiss()\"><span class=\"text-primary inter-semi-bold\">Cancel</span></button>\r\n               </div>\r\n           </div>\r\n         </div>\r\n      </div>\r\n   </ng-template>\r\n   ");

/***/ })

}]);
//# sourceMappingURL=components-sources-sources-module-es2015.js.map