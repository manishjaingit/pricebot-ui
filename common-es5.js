(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
    /***/
    "qCmP":
    /*!********************************************************************************!*\
      !*** ./src/app/admin/components/subscription/services/subscription.service.ts ***!
      \********************************************************************************/

    /*! exports provided: SubscriptionService */

    /***/
    function qCmP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SubscriptionService", function () {
        return SubscriptionService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/add/operator/map */
      "4XzM");
      /* harmony import */


      var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3__);
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");

      var SubscriptionService = /*#__PURE__*/function () {
        function SubscriptionService(http) {
          _classCallCheck(this, SubscriptionService);

          this.http = http;
          this.url = '';
          this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_URL;
        }

        _createClass(SubscriptionService, [{
          key: "getSubscription",
          value: function getSubscription(price) {
            return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].getSubscription + price);
          }
        }, {
          key: "getActiveSubsciption",
          value: function getActiveSubsciption() {
            return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].getActiveSubscription);
          }
        }, {
          key: "saveBilling",
          value: function saveBilling(data) {
            return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].saveBilling, data);
          }
        }, {
          key: "payPalSubscribe",
          value: function payPalSubscribe(data) {
            return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].payPalSubscribe + data.subscriptionId);
          }
        }, {
          key: "VerifySubscription",
          value: function VerifySubscription(data) {
            return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].VerifySubscription, data);
          }
        }, {
          key: "getInvoices",
          value: function getInvoices() {
            return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].invoice_list);
          }
        }, {
          key: "downloadInvoice",
          value: function downloadInvoice(Id) {
            var httpOptions = {
              responseType: 'blob'
            };
            return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].downloadInvoice + '/' + Id, httpOptions);
          }
        }]);

        return SubscriptionService;
      }();

      SubscriptionService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      SubscriptionService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], SubscriptionService);
      /***/
    },

    /***/
    "uvcW":
    /*!*********************************************!*\
      !*** ./src/app/shared/custom-validators.ts ***!
      \*********************************************/

    /*! exports provided: CustomValidators */

    /***/
    function uvcW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CustomValidators", function () {
        return CustomValidators;
      });

      var CustomValidators = /*#__PURE__*/function () {
        function CustomValidators() {
          _classCallCheck(this, CustomValidators);
        }

        _createClass(CustomValidators, null, [{
          key: "patternValidator",
          value: function patternValidator(regex, error) {
            return function (control) {
              if (!control.value) {
                // if control is empty return no error
                return null;
              } // test the value of the control against the regexp supplied


              var valid = regex.test(control.value); // if true, return no error (no error), else return error passed in the second parameter

              return valid ? null : error;
            };
          }
        }, {
          key: "passwordMatchValidator",
          value: function passwordMatchValidator(control) {
            var newpassword = control.get('newpassword').value; // get password from our password form control

            var cpassword = control.get('cpassword').value; // get password from our confirmPassword form control
            // compare is the password math

            if (newpassword !== cpassword) {
              // if they don't match, set an error in our confirmPassword form control
              control.get('cpassword').setErrors({
                NoPassswordMatch: true
              });
            }
          }
        }]);

        return CustomValidators;
      }();
      /***/

    }
  }]);
})();
//# sourceMappingURL=common-es5.js.map