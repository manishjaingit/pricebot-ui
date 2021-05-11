(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "qCmP":
/*!********************************************************************************!*\
  !*** ./src/app/admin/components/subscription/services/subscription.service.ts ***!
  \********************************************************************************/
/*! exports provided: SubscriptionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubscriptionService", function() { return SubscriptionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/map */ "4XzM");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "AytR");





let SubscriptionService = class SubscriptionService {
    constructor(http) {
        this.http = http;
        this.url = '';
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_URL;
    }
    getSubscription(price) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].getSubscription + price);
    }
    getActiveSubsciption() {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].getActiveSubscription);
    }
    saveBilling(data) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].saveBilling, data);
    }
    payPalSubscribe(data) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].payPalSubscribe + data.subscriptionId);
    }
    VerifySubscription(data) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].VerifySubscription, data);
    }
    getInvoices() {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].invoice_list);
    }
    downloadInvoice(Id) {
        const httpOptions = {
            responseType: 'blob',
        };
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].downloadInvoice + '/' + Id, httpOptions);
    }
};
SubscriptionService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
SubscriptionService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], SubscriptionService);



/***/ }),

/***/ "uvcW":
/*!*********************************************!*\
  !*** ./src/app/shared/custom-validators.ts ***!
  \*********************************************/
/*! exports provided: CustomValidators */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomValidators", function() { return CustomValidators; });
class CustomValidators {
    static patternValidator(regex, error) {
        return (control) => {
            if (!control.value) {
                // if control is empty return no error
                return null;
            }
            // test the value of the control against the regexp supplied
            const valid = regex.test(control.value);
            // if true, return no error (no error), else return error passed in the second parameter
            return valid ? null : error;
        };
    }
    static passwordMatchValidator(control) {
        const newpassword = control.get('newpassword').value; // get password from our password form control
        const cpassword = control.get('cpassword').value; // get password from our confirmPassword form control
        // compare is the password math
        if (newpassword !== cpassword) {
            // if they don't match, set an error in our confirmPassword form control
            control.get('cpassword').setErrors({ NoPassswordMatch: true });
        }
    }
}


/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map