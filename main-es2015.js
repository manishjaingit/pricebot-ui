(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\projects\Angular\Pricebot-Micheal\pricebot-dashboard\src\main.ts */"zUnb");


/***/ }),

/***/ "63R7":
/*!****************************************************************!*\
  !*** ./src/app/shared/directives/content-animate.directive.ts ***!
  \****************************************************************/
/*! exports provided: ContentAnimateDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentAnimateDirective", function() { return ContentAnimateDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");

// Angular



/**
 * Page load animation
 *
 */
let ContentAnimateDirective = class ContentAnimateDirective {
    /**
     * Directive Consturctor
     * @param el: ElementRef
     * @param router: Router
     * @param animationBuilder: AnimationBuilder
     */
    constructor(el, router, animationBuilder) {
        this.el = el;
        this.router = router;
        this.animationBuilder = animationBuilder;
    }
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    /**
     * On init
     */
    ngOnInit() {
        // animate the content
        this.initAnimate();
        // animate page load
        this.events = this.router.events.subscribe(event => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]) {
                this.player.play();
            }
        });
    }
    /**
     * On destroy
     */
    ngOnDestroy() {
        this.events.unsubscribe();
        this.player.destroy();
    }
    /**
     * Animate page load
     */
    initAnimate() {
        this.player = this.animationBuilder
            .build([
            // style({opacity: 0, transform: 'translateY(15px)'}),
            // animate(500, style({opacity: 1, transform: 'translateY(0)'})),
            // style({transform: 'none'}),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                transform: 'translateY(-1%)',
                opacity: 0,
                position: 'static',
                height: '100%'
            }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'translateY(0%)', opacity: 1 }))
        ])
            .create(this.el.nativeElement);
    }
};
ContentAnimateDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_animations__WEBPACK_IMPORTED_MODULE_2__["AnimationBuilder"] }
];
ContentAnimateDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[contentAnimate]'
    })
], ContentAnimateDirective);



/***/ }),

/***/ "9Ku7":
/*!**********************************************************!*\
  !*** ./src/app/authentication/authentication.service.ts ***!
  \**********************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../environments/environment */ "AytR");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");






let AuthenticationService = class AuthenticationService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.url = '';
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL;
    }
    isLoggedIn(failed_redirect = false, success_redirect = false) {
        if (!localStorage.getItem('auth') || localStorage.getItem('auth') == '' || localStorage.getItem('auth') == undefined) {
            if (failed_redirect) {
                this.router.navigate(["/authentication/signin"]);
            }
            return false;
        }
        else {
            if (success_redirect) {
                this.router.navigate(["/dashboard"]);
            }
            return true;
        }
    }
    userIsNotLogin() {
        this.isLoggedIn(false, true);
    }
    login(data) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]({
            fromObject: {
                grant_type: 'password',
                username: data.email,
                password: data.password,
            }
        });
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/x-www-form-urlencoded',
            })
        };
        data.grant_type = 'password';
        var result;
        result = this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].logIn, params, httpOptions);
        return result;
    }
    user_register(data) {
        data.Firstname = data.fname;
        data.Lastname = data.lname;
        data.Email = data.email;
        data.password = data.pwd;
        data.Street = data.lname;
        data.Plc = data.lname;
        data.City = data.lname;
        data.Country = data.lname;
        data.TaxId = data.lname;
        let reqHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json');
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].UserRegister, data, { headers: reqHeaders }).map(res => res);
    }
    resetPassword(data) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].CompleteResetPassword, data).map(res => res);
    }
    forgetPasword(data) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].ResetPassword, data).map(res => res);
    }
};
AuthenticationService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
AuthenticationService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthenticationService);



/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const api = "https://abc-pricebot.azurewebsites.net/";
const environment = {
    production: false,
    PAGE_TITLE: "PRICE BOT",
    API_URL: `${api}`,
    APP_VERSION: "1.0.0",
    // Auth
    logIn: `${api}token`,
    CompleteResetPassword: `${api}api/User/CompleteResetPassword`,
    ResetPassword: `${api}api/User/ResetPassword`,
    UserRegister: `${api}api/User`,
    ChangePassword: `${api}api/User/ChangePassword`,
    // User
    GetUser: `${api}api/User`,
    ProfileUpdate: `${api}api/User`,
    // Invoice
    invoice_list: `${api}api/Invoice`,
    downloadInvoice: `${api}/api/Invoice/Download`,
    // Subscription 
    getSubscription: `${api}api/Subscription?contingent=`,
    getActiveSubscription: `${api}api/Subscription/Active`,
    saveBilling: `${api}api/Subscription/BillingInfo`,
    payPalSubscribe: `${api}api/Subscription/Subscribe?subscriptionId=`,
    VerifySubscription: `${api}api/Subscription/VerifySubscription`,
    // Collections
    addCollection: `${api}api/Collection`,
    GetCollections: `${api}api/Collections`,
    UpdateCollection: `${api}api/Collection/`,
    RemoveCollection: `${api}api/Collection/`,
    getCollection: `${api}api/Collection/`,
    // Calculations
    GetCalculations: `${api}api/Calculations`,
    crudCalculations: `${api}api/Calculation/`,
    // Items 
    addItem: `${api}api/Item/Collection/`,
    GetItems: `${api}api/Items/Collection/`,
    DeleteItem: `${api}api/Item/`,
    UpdateProduct: `${api}api/Item/Collection/`,
    getSources: `${api}api/Item/Sources`,
    getCategories: `${api}api/Item/Categories`,
    getItem: `${api}api/Item/`,
    // Fields
    addField: `${api}api/User/Settings/SpecificFields/Create`,
    GetFields: `${api}api/User/Settings/SpecificFields`,
    deleteField: `${api}api/User/Settings/SpecificFields/Delete`,
    updateField: `${api}api/User/Settings/SpecificFields/Update`,
    // Sources
    UnassignedSources: `${api}api/User/CustomSources`,
    AddSourceRequest: `${api}api/User/SourceRequest`,
    CustomSources: `${api}api/Subscription/CustomSources/Subscribe`,
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "HFqJ":
/*!*************************************!*\
  !*** ./src/app/http-interceptor.ts ***!
  \*************************************/
/*! exports provided: HttpInterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpInterceptorService", function() { return HttpInterceptorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/Observable */ "4c1C");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_Observable__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs_add_operator_do__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/do */ "92bn");
/* harmony import */ var rxjs_add_operator_do__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_do__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/catch */ "S7rW");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var rxjs_add_observable_throw__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/add/observable/throw */ "Drjo");
/* harmony import */ var rxjs_add_observable_throw__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_observable_throw__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");








let HttpInterceptorService = class HttpInterceptorService {
    constructor(router, route) {
        this.router = router;
        this.route = route;
    }
    intercept(request, next) {
        // add a custom header
        var customReq;
        if (!localStorage.auth || localStorage.auth == '' || localStorage.auth == undefined) {
            customReq = request;
        }
        else {
            let data = JSON.parse(localStorage.user);
            let token = data.token_type + ' ' + localStorage.auth;
            customReq = request.clone({ headers: request.headers.set('Authorization', token) });
        }
        // pass on the modified request object
        return next.handle(customReq)
            .do((ev) => {
            if (ev instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]) {
                //let response = ev.body.result;
                /*
                * code error
                * 401 = unauthorized request
                * 200 = success
                * 500 = page not found
                */
                // switch(response.code){
                //   case 401:
                //     localStorage.removeItem('auth');
                //     this.router.navigate(["authentication/signin"]);
                //   break;
                //   case 200:
                //   break;
                //   case 500:
                //   break;
                // }
            }
        })
            .catch(response => {
            console.log(response, 11);
            if (response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpErrorResponse"]) {
                if (response.status == 401) {
                    localStorage.removeItem('auth');
                    localStorage.removeItem('user');
                    this.subscription = this.route.params.subscribe();
                    this.subscription.unsubscribe();
                    this.router.navigate(["/authentication/signin"]);
                }
            }
            return rxjs_Observable__WEBPACK_IMPORTED_MODULE_3__["Observable"].throw(response);
        });
        //return next.handle(request);
    }
};
HttpInterceptorService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] }
];
HttpInterceptorService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], HttpInterceptorService);



/***/ }),

/***/ "PCNd":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _directives_content_animate_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./directives/content-animate.directive */ "63R7");
/* harmony import */ var _util_pipes_currency_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./util/pipes/currency.pipe */ "WQNT");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/core */ "FKr1");










let SharedModule = class SharedModule {
};
SharedModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _util_pipes_currency_pipe__WEBPACK_IMPORTED_MODULE_4__["DollarCurrency"],
            _util_pipes_currency_pipe__WEBPACK_IMPORTED_MODULE_4__["EuroCurrency"],
            _directives_content_animate_directive__WEBPACK_IMPORTED_MODULE_3__["ContentAnimateDirective"],
        ],
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatRippleModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrModule"].forRoot(),
        ],
        exports: [
            _util_pipes_currency_pipe__WEBPACK_IMPORTED_MODULE_4__["DollarCurrency"],
            _util_pipes_currency_pipe__WEBPACK_IMPORTED_MODULE_4__["EuroCurrency"],
            _directives_content_animate_directive__WEBPACK_IMPORTED_MODULE_3__["ContentAnimateDirective"],
        ]
    })
], SharedModule);



/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.scss */ "ynWL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _authentication_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./authentication/authentication.service */ "9Ku7");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ "JqCM");







let AppComponent = class AppComponent {
    constructor(router, authService, spinner) {
        this.router = router;
        this.authService = authService;
        this.spinner = spinner;
        // Spinner for lazyload modules
        router.events.forEach((event) => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouteConfigLoadStart"]) {
                this.isLoading = true;
                this.spinner.show();
            }
            else if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouteConfigLoadEnd"]) {
                this.isLoading = false;
                this.spinner.hide();
            }
        });
    }
    ngOnInit() {
        // Scroll to top after route change
        this.router.events.subscribe((evt) => {
            if (!(evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["NavigationEnd"])) {
                return;
            }
            window.scrollTo(0, 0);
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _authentication_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"] },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"] }
];
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AppComponent);



/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div contentAnimate *ngIf=\"!isLoading\" class=\"h-100\">\r\n  <router-outlet></router-outlet>\r\n</div>\r\n<ngx-spinner\r\n  bdColor=\"rgba(0, 0, 0, 0.8)\"\r\n  size=\"medium\"\r\n  color=\"#fff\"\r\n  type=\"ball-clip-rotate\"\r\n  [fullScreen]=\"true\"\r\n  >\r\n  <p style=\"color: white;\">Loading...</p>\r\n  </ngx-spinner\r\n>\r\n");

/***/ }),

/***/ "WQNT":
/*!****************************************************!*\
  !*** ./src/app/shared/util/pipes/currency.pipe.ts ***!
  \****************************************************/
/*! exports provided: EuroCurrency, DollarCurrency */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EuroCurrency", function() { return EuroCurrency; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DollarCurrency", function() { return DollarCurrency; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


let EuroCurrency = class EuroCurrency {
    transform(value) {
        return new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'EUR',
            currencyDisplay: 'code',
        }).format(value);
    }
};
EuroCurrency = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'euroCurrency' })
], EuroCurrency);

let DollarCurrency = class DollarCurrency {
    transform(value) {
        return new Intl.NumberFormat('en-Us', {
            style: 'currency',
            currency: 'USD',
            currencyDisplay: 'narrowSymbol',
        }).format(value);
    }
};
DollarCurrency = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'dollarCurrency' })
], DollarCurrency);



/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _http_interceptor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./http-interceptor */ "HFqJ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/shared.module */ "PCNd");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ngx_formly_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-formly/core */ "0FS3");
/* harmony import */ var _ngx_formly_bootstrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-formly/bootstrap */ "bquJ");














let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_10__["NgxSpinnerModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
            _ngx_formly_core__WEBPACK_IMPORTED_MODULE_12__["FormlyModule"].forRoot({ extras: { lazyRender: true } }),
            _ngx_formly_bootstrap__WEBPACK_IMPORTED_MODULE_13__["FormlyBootstrapModule"],
        ],
        providers: [
            _http_interceptor__WEBPACK_IMPORTED_MODULE_7__["HttpInterceptorService"],
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HTTP_INTERCEPTORS"], useClass: _http_interceptor__WEBPACK_IMPORTED_MODULE_7__["HttpInterceptorService"], multi: true },
            { provide: _angular_common__WEBPACK_IMPORTED_MODULE_8__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_8__["HashLocationStrategy"] },
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



const routes = [
    { path: '', loadChildren: () => Promise.all(/*! import() | home-home-module */[__webpack_require__.e("default~components-calculation-calculation-module~components-collections-collections-module~componen~a546b0f1"), __webpack_require__.e("home-home-module")]).then(__webpack_require__.bind(null, /*! ./home/home.module */ "ct+p")).then(m => m.HomeModule) },
    { path: '', loadChildren: () => __webpack_require__.e(/*! import() | admin-admin-module */ "admin-admin-module").then(__webpack_require__.bind(null, /*! ./admin/admin.module */ "jkDv")).then(m => m.AdminModule) },
    { path: 'e', loadChildren: () => __webpack_require__.e(/*! import() | error-pages-error-pages-module */ "error-pages-error-pages-module").then(__webpack_require__.bind(null, /*! ./error-pages/error-pages.module */ "dflm")).then(m => m.ErrorPagesModule) },
    { path: 'authentication', loadChildren: () => Promise.all(/*! import() | authentication-authentication-module */[__webpack_require__.e("common"), __webpack_require__.e("authentication-authentication-module")]).then(__webpack_require__.bind(null, /*! ./authentication/authentication.module */ "OpKh")).then(m => m.AuthenticationModule) },
    { path: '**', redirectTo: 'e/404' },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { useHash: false })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "ynWL":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@font-face {\n  font-family: Inter light;\n  src: url(/assets/fonts/Inter-Light-slnt=0.ttf);\n}\n\n@font-face {\n  font-family: Inter;\n  src: url(/assets/fonts/Inter-Regular-slnt=0.ttf);\n}\n\n@font-face {\n  font-family: Inter medium;\n  src: url(/assets/fonts/Inter-Medium-slnt=0.ttf);\n}\n\n@font-face {\n  font-family: Inter bold;\n  src: url(/assets/fonts/Inter-Bold-slnt=0.ttf);\n}\n\n@font-face {\n  font-family: Inter semi bold;\n  src: url(/assets/fonts/Inter-SemiBold-slnt=0.ttf);\n}\n\n@font-face {\n  font-family: 'FontAwesome';\n  src: url(/assets/fonts/fontawesome-webfont.woff);\n  src: url(\"/../fonts/fontawesome-webfont.eot?#iefix&v=4.2.0\") format(\"embedded-opentype\"), url(/assets/fonts/fontawesome-webfont.woff) format(\"woff\"), url(\"/../fonts/fontawesome-webfont.ttf?v=4.2.0\") format(\"truetype\"), url(\"/../fonts/fontawesome-webfont.svg?v=4.2.0#fontawesomeregular\") format(\"svg\");\n  font-weight: normal;\n  font-style: normal;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Msd0JBQXdCO0VBQ3hCLDhDQUE4QztBQUMvQzs7QUFDQTtFQUNDLGtCQUFrQjtFQUNsQixnREFBZ0Q7QUFFakQ7O0FBQUE7RUFDQyx5QkFBeUI7RUFDekIsK0NBQStDO0FBR2hEOztBQURBO0VBQ0MsdUJBQXVCO0VBQ3ZCLDZDQUE2QztBQUk5Qzs7QUFGQTtFQUNDLDRCQUE0QjtFQUM1QixpREFBaUQ7QUFLbEQ7O0FBSEE7RUFDQywwQkFBMEI7RUFDMUIsZ0RBQWdEO0VBQ2hELDRTQUE0UztFQUM1UyxtQkFBbUI7RUFDbkIsa0JBQWtCO0FBTW5CIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGZvbnQtZmFjZSB7XHJcblx0Zm9udC1mYW1pbHk6IEludGVyIGxpZ2h0O1xyXG5cdHNyYzogdXJsKC9hc3NldHMvZm9udHMvSW50ZXItTGlnaHQtc2xudD0wLnR0Zik7XHJcbn1cclxuQGZvbnQtZmFjZSB7XHJcblx0Zm9udC1mYW1pbHk6IEludGVyO1xyXG5cdHNyYzogdXJsKC9hc3NldHMvZm9udHMvSW50ZXItUmVndWxhci1zbG50PTAudHRmKTtcclxufVxyXG5AZm9udC1mYWNlIHtcclxuXHRmb250LWZhbWlseTogSW50ZXIgbWVkaXVtO1xyXG5cdHNyYzogdXJsKC9hc3NldHMvZm9udHMvSW50ZXItTWVkaXVtLXNsbnQ9MC50dGYpO1xyXG59XHJcbkBmb250LWZhY2Uge1xyXG5cdGZvbnQtZmFtaWx5OiBJbnRlciBib2xkO1xyXG5cdHNyYzogdXJsKC9hc3NldHMvZm9udHMvSW50ZXItQm9sZC1zbG50PTAudHRmKTtcclxufVxyXG5AZm9udC1mYWNlIHtcclxuXHRmb250LWZhbWlseTogSW50ZXIgc2VtaSBib2xkO1xyXG5cdHNyYzogdXJsKC9hc3NldHMvZm9udHMvSW50ZXItU2VtaUJvbGQtc2xudD0wLnR0Zik7XHJcbn1cclxuQGZvbnQtZmFjZSB7XHJcblx0Zm9udC1mYW1pbHk6ICdGb250QXdlc29tZSc7XHJcblx0c3JjOiB1cmwoL2Fzc2V0cy9mb250cy9mb250YXdlc29tZS13ZWJmb250LndvZmYpO1xyXG5cdHNyYzogdXJsKCcvLi4vZm9udHMvZm9udGF3ZXNvbWUtd2ViZm9udC5lb3Q/I2llZml4JnY9NC4yLjAnKSBmb3JtYXQoJ2VtYmVkZGVkLW9wZW50eXBlJyksIHVybCgvYXNzZXRzL2ZvbnRzL2ZvbnRhd2Vzb21lLXdlYmZvbnQud29mZikgZm9ybWF0KCd3b2ZmJyksIHVybCgnLy4uL2ZvbnRzL2ZvbnRhd2Vzb21lLXdlYmZvbnQudHRmP3Y9NC4yLjAnKSBmb3JtYXQoJ3RydWV0eXBlJyksIHVybCgnLy4uL2ZvbnRzL2ZvbnRhd2Vzb21lLXdlYmZvbnQuc3ZnP3Y9NC4yLjAjZm9udGF3ZXNvbWVyZWd1bGFyJykgZm9ybWF0KCdzdmcnKTtcclxuXHRmb250LXdlaWdodDogbm9ybWFsO1xyXG5cdGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICB9Il19 */");

/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var zone_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! zone.js */ "m+po");
/* harmony import */ var zone_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(zone_js__WEBPACK_IMPORTED_MODULE_4__);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
 //Added for lazy module error in firefox,safari in server.
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map