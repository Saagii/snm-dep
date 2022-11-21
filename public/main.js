(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\Version - Deployment\Version 1.0.0\crm-cm\src\main.ts */"zUnb");


/***/ }),

/***/ "3DMK":
/*!*****************************************************!*\
  !*** ./src/app/shared/services/schedule.service.ts ***!
  \*****************************************************/
/*! exports provided: ScheduleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScheduleService", function() { return ScheduleService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


class ScheduleService {
    constructor(_httpClient) {
        this._httpClient = _httpClient;
    }
    createSchedule(scheduleDetails) {
        return this._httpClient.post('schedule/createSchedule', scheduleDetails);
    }
    getScheduleList(date) {
        return this._httpClient.get('schedule/' + date + '/scheduleList');
    }
}
ScheduleService.ɵfac = function ScheduleService_Factory(t) { return new (t || ScheduleService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
ScheduleService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ScheduleService, factory: ScheduleService.ɵfac });


/***/ }),

/***/ "4MfO":
/*!************************************************!*\
  !*** ./src/app/modules/main/main-side-menu.ts ***!
  \************************************************/
/*! exports provided: sideMenuItems */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sideMenuItems", function() { return sideMenuItems; });
const sideMenuItems = [
    {
        id: 1,
        name: 'Dashboard',
        icon: 'dashboard',
        route: '/main/dashboard',
        children: [
            {
                name: 'Contacts',
                icon: 'contacts',
                route: '/main/dashboard',
            },
            {
                name: 'Schedule',
                icon: 'schedule',
                route: '/main/dashboard',
            }
        ]
    },
    {
        id: 2,
        name: 'Profile',
        icon: 'person',
        route: '/main/dashboard/user-profile'
    },
    {
        id: 3,
        name: 'Favourite',
        icon: 'favorite',
        route: '/main/dashboard/favourites'
    },
    {
        id: 4,
        name: 'Docs',
        icon: 'my_library_books',
        route: '/main/dashboard'
    },
    {
        id: 5,
        name: 'Settings',
        icon: 'settings',
        route: '/main/dashboard'
    }
];


/***/ }),

/***/ "6xxe":
/*!*************************************************!*\
  !*** ./src/app/modules/authGuard/auth.guard.ts ***!
  \*************************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/auth.service */ "IYfF");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AuthGuard {
    constructor(_authService, _route) {
        this._authService = _authService;
        this._route = _route;
    }
    canActivate() {
        if (this._authService.loggedIn()) {
            console.log('Yes');
            return true;
        }
        else {
            console.log('No');
            this._route.navigate(['login']);
            return false;
        }
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });


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
const environment = {
    production: false
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

/***/ "E5Fj":
/*!*********************************************************************!*\
  !*** ./src/app/modules/main/confirmation/confirmation.component.ts ***!
  \*********************************************************************/
/*! exports provided: ConfirmationDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmationDialogComponent", function() { return ConfirmationDialogComponent; });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");






class ConfirmationDialogComponent {
    constructor(data, dialogRef, _router) {
        this.data = data;
        this.dialogRef = dialogRef;
        this._router = _router;
    }
    ngOnInit() {
    }
    // On Cancelling the dialog box
    dialogActions(action) {
        if (action === '') {
            this.dialogRef.close(false);
        }
        else {
            this.dialogRef.close(true);
        }
    }
}
ConfirmationDialogComponent.ɵfac = function ConfirmationDialogComponent_Factory(t) { return new (t || ConfirmationDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
ConfirmationDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ConfirmationDialogComponent, selectors: [["app-confirmation-dialog"]], decls: 13, vars: 0, consts: [[1, "max-w-md"], [1, "w-full", "flex", "justify-center", "flex-wrap"], [1, "w-full", "flex", "justify-end"], ["mat-icon-button", "", 3, "click"], [1, ""], [1, "w-auto", "flex", "justify-center"], ["src", "../../../../assets/images/logout.gif", 1, "w-5/12"], [1, "w-full", "mt-4", "text-gray-600", "font-bold", "text-center", "text-base"], [1, "w-full", "flex", "justify-center", "mt-6"], ["mat-flat-button", "", "color", "warn", 3, "click"]], template: function ConfirmationDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ConfirmationDialogComponent_Template_button_click_3_listener() { return ctx.dialogActions(""); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Are you sure, you want to Logout ?");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ConfirmationDialogComponent_Template_button_click_11_listener() { return ctx.dialogActions("Logout"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb25maXJtYXRpb24uY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "Hd4m":
/*!******************************************************!*\
  !*** ./src/app/modules/landing/landing.component.ts ***!
  \******************************************************/
/*! exports provided: LandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingComponent", function() { return LandingComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/auth.service */ "IYfF");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/progress-bar */ "bv9b");












function LandingComponent_div_175_div_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Wrong Credentials!!");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function LandingComponent_div_175_mat_progress_bar_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "mat-progress-bar", 108);
} }
function LandingComponent_div_175_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Welcome back,");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Sign-In to Tasks Manager");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "form", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "mat-form-field", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "input", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Email is ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Required!");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "mat-form-field", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "input", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "button", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LandingComponent_div_175_Template_button_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r4.hideLoginPassword = !ctx_r4.hideLoginPassword; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Password is ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "Required!");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](27, LandingComponent_div_175_div_27_Template, 2, 0, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LandingComponent_div_175_Template_div_click_28_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r6.login(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "Sign In");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](30, LandingComponent_div_175_mat_progress_bar_30_Template, 1, 0, "mat-progress-bar", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "New User? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "span", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LandingComponent_div_175_Template_span_click_33_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r7.enableRegister = true; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "Register Now");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx_r0.loginForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("type", ctx_r0.hideLoginPassword ? "password" : "text");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-label", "Hide password")("aria-pressed", ctx_r0.hideLoginPassword);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.hideLoginPassword ? "visibility_off" : "visibility");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.loginWrongCredentials);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.loader);
} }
function LandingComponent_div_176_div_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Email Already Exists!!");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function LandingComponent_div_176_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Register Now,");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Please enter email and password");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "form", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "mat-form-field", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Compnay Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "input", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Company Name is ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Required!");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "mat-form-field", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Phone Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "input", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Phone Number is ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Required!");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "mat-form-field", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](27, "input", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "Email is ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "Required!");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "mat-form-field", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](35, "input", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "button", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LandingComponent_div_176_Template_button_click_36_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r9.hideRegisterPassword = !ctx_r9.hideRegisterPassword; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, "Password is ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, "Required!");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](43, LandingComponent_div_176_div_43_Template, 2, 0, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "div", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LandingComponent_div_176_Template_div_click_44_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r11.register(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45, "Register");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "div", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47, "Have account already? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "span", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LandingComponent_div_176_Template_span_click_48_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r12.enableRegister = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49, "Sign-In Now");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx_r1.registerForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("type", ctx_r1.hideRegisterPassword ? "password" : "text");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-label", "Hide password")("aria-pressed", ctx_r1.hideRegisterPassword);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.hideRegisterPassword ? "visibility_off" : "visibility");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.emailExists);
} }
class LandingComponent {
    // *** Constructor ***
    constructor(fb, _authService, _router) {
        this.fb = fb;
        this._authService = _authService;
        this._router = _router;
        this.enableRegister = false;
        this.loginWrongCredentials = false;
        this.emailExists = false;
        this.hideLoginPassword = true;
        this.hideRegisterPassword = true;
        this.loader = false;
        // Prepare Login Form
        this.loginForm = this.fb.group({
            email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].email]],
            password: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(4)]]
        });
        // Prepare Register Form
        this.registerForm = this.fb.group({
            email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].email]],
            name: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            phoneNumber: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            password: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(4)]],
            registrationDate: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
        });
    }
    // *** Life-cycle Hooks ***
    ngOnInit() {
        // check if token present - temporary fix. Needs to be added in auth component
        console.log(this._authService.getToken());
        if (this._authService.getToken()) {
            this._router.navigate(['/main/dashboard']);
        }
        else {
            this._router.navigate(['/login']);
        }
    }
    // *** Login Action ***
    login() {
        // Return if form is invalid
        if (this.loginForm.invalid) {
            return;
        }
        // Enable Loader
        this.loader = true;
        console.log(this.loginForm.value);
        // Disable form untill response or error is recieved
        this.loginForm.disable();
        // Submit User Credentials - Check and Authenticate
        this._authService.loginUser(this.loginForm.value).subscribe((response) => {
            console.log(response);
            // Store the token
            localStorage.setItem('token', response.token);
            // Store the user details
            localStorage.setItem('userName', response.user.name);
            // Set to false if wrong credentials
            this.loginWrongCredentials = false;
            // disable Loader
            this.loader = false;
            // Navigate to dashboard
            this._router.navigate(['main/dashboard']);
        }, (error) => {
            console.log(error);
            // Enable the form
            this.loginForm.enable();
            // Set to true if wrong credentials
            this.loginWrongCredentials = true;
            // disable Loader
            this.loader = false;
        });
    }
    // *** Register Action ***
    register() {
        var _a;
        console.log(this.registerForm);
        // Set Registration date
        (_a = this.registerForm.get('registrationDate')) === null || _a === void 0 ? void 0 : _a.setValue(moment__WEBPACK_IMPORTED_MODULE_1__().format('MMMM Do YYYY, h:mm:ss a'));
        // Return if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
        console.log(this.registerForm.value);
        // set to false before posting credentials details
        this.emailExists = false;
        // Disable form untill response or error is recieved
        this.registerForm.disable();
        // Post User Credentials - Store and Authenticate
        this._authService.registerUser(this.registerForm.value).subscribe((response) => {
            console.log(response);
            // If email does not exist, then store the token and navigate
            if (response) {
                // If email exists, set this to false
                this.emailExists = false;
                // Store the token
                localStorage.setItem('token', response.token);
                // Enable the form
                this.registerForm.enable();
                // Navigate to Dashboard
                this._router.navigate(['main']);
            }
            else {
                // If email exists, set this to true
                this.emailExists = true;
                // Enable the form
                this.registerForm.enable();
            }
        }, (error) => {
            console.log(error);
            // Enable the form
            this.registerForm.enable();
        });
    }
}
LandingComponent.ɵfac = function LandingComponent_Factory(t) { return new (t || LandingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
LandingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: LandingComponent, selectors: [["app-landing"]], decls: 177, vars: 2, consts: [[1, "w-full", "h-screen", "flex", "relative"], [1, "absolute", "right-0", "top-0", "z-20"], ["width", "107", "height", "134", "viewBox", "0 0 107 134", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["cx", "104.999", "cy", "132", "r", "1.66667", "transform", "rotate(180 104.999 132)", "fill", "#13C296"], ["cx", "104.999", "cy", "117.333", "r", "1.66667", "transform", "rotate(180 104.999 117.333)", "fill", "#13C296"], ["cx", "104.999", "cy", "102.667", "r", "1.66667", "transform", "rotate(180 104.999 102.667)", "fill", "#13C296"], ["cx", "104.999", "cy", "88", "r", "1.66667", "transform", "rotate(180 104.999 88)", "fill", "#13C296"], ["cx", "104.999", "cy", "73.3333", "r", "1.66667", "transform", "rotate(180 104.999 73.3333)", "fill", "#13C296"], ["cx", "104.999", "cy", "45", "r", "1.66667", "transform", "rotate(180 104.999 45)", "fill", "#13C296"], ["cx", "104.999", "cy", "16", "r", "1.66667", "transform", "rotate(180 104.999 16)", "fill", "#13C296"], ["cx", "104.999", "cy", "59", "r", "1.66667", "transform", "rotate(180 104.999 59)", "fill", "#13C296"], ["cx", "104.999", "cy", "30.6666", "r", "1.66667", "transform", "rotate(180 104.999 30.6666)", "fill", "#13C296"], ["cx", "104.999", "cy", "1.66665", "r", "1.66667", "transform", "rotate(180 104.999 1.66665)", "fill", "#13C296"], ["cx", "90.3333", "cy", "132", "r", "1.66667", "transform", "rotate(180 90.3333 132)", "fill", "#13C296"], ["cx", "90.3333", "cy", "117.333", "r", "1.66667", "transform", "rotate(180 90.3333 117.333)", "fill", "#13C296"], ["cx", "90.3333", "cy", "102.667", "r", "1.66667", "transform", "rotate(180 90.3333 102.667)", "fill", "#13C296"], ["cx", "90.3333", "cy", "88", "r", "1.66667", "transform", "rotate(180 90.3333 88)", "fill", "#13C296"], ["cx", "90.3333", "cy", "73.3333", "r", "1.66667", "transform", "rotate(180 90.3333 73.3333)", "fill", "#13C296"], ["cx", "90.3333", "cy", "45", "r", "1.66667", "transform", "rotate(180 90.3333 45)", "fill", "#13C296"], ["cx", "90.3333", "cy", "16", "r", "1.66667", "transform", "rotate(180 90.3333 16)", "fill", "#13C296"], ["cx", "90.3333", "cy", "59", "r", "1.66667", "transform", "rotate(180 90.3333 59)", "fill", "#13C296"], ["cx", "90.3333", "cy", "30.6666", "r", "1.66667", "transform", "rotate(180 90.3333 30.6666)", "fill", "#13C296"], ["cx", "90.3333", "cy", "1.66665", "r", "1.66667", "transform", "rotate(180 90.3333 1.66665)", "fill", "#13C296"], ["cx", "75.6654", "cy", "132", "r", "1.66667", "transform", "rotate(180 75.6654 132)", "fill", "#13C296"], ["cx", "31.9993", "cy", "132", "r", "1.66667", "transform", "rotate(180 31.9993 132)", "fill", "#13C296"], ["cx", "75.6654", "cy", "117.333", "r", "1.66667", "transform", "rotate(180 75.6654 117.333)", "fill", "#13C296"], ["cx", "31.9993", "cy", "117.333", "r", "1.66667", "transform", "rotate(180 31.9993 117.333)", "fill", "#13C296"], ["cx", "75.6654", "cy", "102.667", "r", "1.66667", "transform", "rotate(180 75.6654 102.667)", "fill", "#13C296"], ["cx", "31.9993", "cy", "102.667", "r", "1.66667", "transform", "rotate(180 31.9993 102.667)", "fill", "#13C296"], ["cx", "75.6654", "cy", "88", "r", "1.66667", "transform", "rotate(180 75.6654 88)", "fill", "#13C296"], ["cx", "31.9993", "cy", "88", "r", "1.66667", "transform", "rotate(180 31.9993 88)", "fill", "#13C296"], ["cx", "75.6654", "cy", "73.3333", "r", "1.66667", "transform", "rotate(180 75.6654 73.3333)", "fill", "#13C296"], ["cx", "31.9993", "cy", "73.3333", "r", "1.66667", "transform", "rotate(180 31.9993 73.3333)", "fill", "#13C296"], ["cx", "75.6654", "cy", "45", "r", "1.66667", "transform", "rotate(180 75.6654 45)", "fill", "#13C296"], ["cx", "31.9993", "cy", "45", "r", "1.66667", "transform", "rotate(180 31.9993 45)", "fill", "#13C296"], ["cx", "75.6654", "cy", "16", "r", "1.66667", "transform", "rotate(180 75.6654 16)", "fill", "#13C296"], ["cx", "31.9993", "cy", "16", "r", "1.66667", "transform", "rotate(180 31.9993 16)", "fill", "#13C296"], ["cx", "75.6654", "cy", "59", "r", "1.66667", "transform", "rotate(180 75.6654 59)", "fill", "#13C296"], ["cx", "31.9993", "cy", "59", "r", "1.66667", "transform", "rotate(180 31.9993 59)", "fill", "#13C296"], ["cx", "75.6654", "cy", "30.6666", "r", "1.66667", "transform", "rotate(180 75.6654 30.6666)", "fill", "#13C296"], ["cx", "31.9993", "cy", "30.6666", "r", "1.66667", "transform", "rotate(180 31.9993 30.6666)", "fill", "#13C296"], ["cx", "75.6654", "cy", "1.66665", "r", "1.66667", "transform", "rotate(180 75.6654 1.66665)", "fill", "#13C296"], ["cx", "31.9993", "cy", "1.66665", "r", "1.66667", "transform", "rotate(180 31.9993 1.66665)", "fill", "#13C296"], ["cx", "60.9993", "cy", "132", "r", "1.66667", "transform", "rotate(180 60.9993 132)", "fill", "#13C296"], ["cx", "17.3333", "cy", "132", "r", "1.66667", "transform", "rotate(180 17.3333 132)", "fill", "#13C296"], ["cx", "60.9993", "cy", "117.333", "r", "1.66667", "transform", "rotate(180 60.9993 117.333)", "fill", "#13C296"], ["cx", "17.3333", "cy", "117.333", "r", "1.66667", "transform", "rotate(180 17.3333 117.333)", "fill", "#13C296"], ["cx", "60.9993", "cy", "102.667", "r", "1.66667", "transform", "rotate(180 60.9993 102.667)", "fill", "#13C296"], ["cx", "17.3333", "cy", "102.667", "r", "1.66667", "transform", "rotate(180 17.3333 102.667)", "fill", "#13C296"], ["cx", "60.9993", "cy", "88", "r", "1.66667", "transform", "rotate(180 60.9993 88)", "fill", "#13C296"], ["cx", "17.3333", "cy", "88", "r", "1.66667", "transform", "rotate(180 17.3333 88)", "fill", "#13C296"], ["cx", "60.9993", "cy", "73.3333", "r", "1.66667", "transform", "rotate(180 60.9993 73.3333)", "fill", "#13C296"], ["cx", "17.3333", "cy", "73.3333", "r", "1.66667", "transform", "rotate(180 17.3333 73.3333)", "fill", "#13C296"], ["cx", "60.9993", "cy", "45", "r", "1.66667", "transform", "rotate(180 60.9993 45)", "fill", "#13C296"], ["cx", "17.3333", "cy", "45", "r", "1.66667", "transform", "rotate(180 17.3333 45)", "fill", "#13C296"], ["cx", "60.9993", "cy", "16", "r", "1.66667", "transform", "rotate(180 60.9993 16)", "fill", "#13C296"], ["cx", "17.3333", "cy", "16", "r", "1.66667", "transform", "rotate(180 17.3333 16)", "fill", "#13C296"], ["cx", "60.9993", "cy", "59", "r", "1.66667", "transform", "rotate(180 60.9993 59)", "fill", "#13C296"], ["cx", "17.3333", "cy", "59", "r", "1.66667", "transform", "rotate(180 17.3333 59)", "fill", "#13C296"], ["cx", "60.9993", "cy", "30.6666", "r", "1.66667", "transform", "rotate(180 60.9993 30.6666)", "fill", "#13C296"], ["cx", "17.3333", "cy", "30.6666", "r", "1.66667", "transform", "rotate(180 17.3333 30.6666)", "fill", "#13C296"], ["cx", "60.9993", "cy", "1.66665", "r", "1.66667", "transform", "rotate(180 60.9993 1.66665)", "fill", "#13C296"], ["cx", "17.3333", "cy", "1.66665", "r", "1.66667", "transform", "rotate(180 17.3333 1.66665)", "fill", "#13C296"], ["cx", "46.3333", "cy", "132", "r", "1.66667", "transform", "rotate(180 46.3333 132)", "fill", "#13C296"], ["cx", "2.66536", "cy", "132", "r", "1.66667", "transform", "rotate(180 2.66536 132)", "fill", "#13C296"], ["cx", "46.3333", "cy", "117.333", "r", "1.66667", "transform", "rotate(180 46.3333 117.333)", "fill", "#13C296"], ["cx", "2.66536", "cy", "117.333", "r", "1.66667", "transform", "rotate(180 2.66536 117.333)", "fill", "#13C296"], ["cx", "46.3333", "cy", "102.667", "r", "1.66667", "transform", "rotate(180 46.3333 102.667)", "fill", "#13C296"], ["cx", "2.66536", "cy", "102.667", "r", "1.66667", "transform", "rotate(180 2.66536 102.667)", "fill", "#13C296"], ["cx", "46.3333", "cy", "88", "r", "1.66667", "transform", "rotate(180 46.3333 88)", "fill", "#13C296"], ["cx", "2.66536", "cy", "88", "r", "1.66667", "transform", "rotate(180 2.66536 88)", "fill", "#13C296"], ["cx", "46.3333", "cy", "73.3333", "r", "1.66667", "transform", "rotate(180 46.3333 73.3333)", "fill", "#13C296"], ["cx", "2.66536", "cy", "73.3333", "r", "1.66667", "transform", "rotate(180 2.66536 73.3333)", "fill", "#13C296"], ["cx", "46.3333", "cy", "45", "r", "1.66667", "transform", "rotate(180 46.3333 45)", "fill", "#13C296"], ["cx", "2.66536", "cy", "45", "r", "1.66667", "transform", "rotate(180 2.66536 45)", "fill", "#13C296"], ["cx", "46.3333", "cy", "16", "r", "1.66667", "transform", "rotate(180 46.3333 16)", "fill", "#13C296"], ["cx", "2.66536", "cy", "16", "r", "1.66667", "transform", "rotate(180 2.66536 16)", "fill", "#13C296"], ["cx", "46.3333", "cy", "59", "r", "1.66667", "transform", "rotate(180 46.3333 59)", "fill", "#13C296"], ["cx", "2.66536", "cy", "59", "r", "1.66667", "transform", "rotate(180 2.66536 59)", "fill", "#13C296"], ["cx", "46.3333", "cy", "30.6666", "r", "1.66667", "transform", "rotate(180 46.3333 30.6666)", "fill", "#13C296"], ["cx", "2.66536", "cy", "30.6666", "r", "1.66667", "transform", "rotate(180 2.66536 30.6666)", "fill", "#13C296"], ["cx", "46.3333", "cy", "1.66665", "r", "1.66667", "transform", "rotate(180 46.3333 1.66665)", "fill", "#13C296"], ["cx", "2.66536", "cy", "1.66665", "r", "1.66667", "transform", "rotate(180 2.66536 1.66665)", "fill", "#13C296"], [1, "absolute", "left-0", "bottom-0", "z-20"], [1, "w-4/12", "flex", "justify-center", "items-center", "bg-indigo-600", "bg-img", "relative"], [1, "w-full", "h-full", "bg-black", "opacity-60", "absolute"], [1, "w-10/12", "flex", "flex-wrap", "justify-start", "p-4", "z-10", 2, "background", "#0000007d"], [1, "w-full", "text-white", "text-4xl", "z-10", "font-bold", 2, "color", "#00ff72"], [2, "color", "#00fbff", "font-style", "italic"], [1, "w-full", "text-white", "text-lg", "text-gray-400", "mt-2", "z-10"], [1, "w-8/12", "flex", "flex-wrap", "justify-center", "content-center"], ["class", "w-4/12 flex flex-wrap justify-center", 4, "ngIf"], [1, "w-4/12", "flex", "flex-wrap", "justify-center"], [1, "w-full", "font-bold", "text-2xl"], [1, "w-full", "text-gray-500", "text-base"], [1, "w-full", "flex", "flex-wrap", "mt-6"], [1, "w-full"], [1, "w-full", "flex", "flex-wrap", "justify-start", 3, "formGroup"], ["appearance", "outline", 1, "w-full"], ["type", "email", "matInput", "", "placeholder", "Enter your Email ID", "formControlName", "email"], ["matInput", "", "placeholder", "Enter the Password", "formControlName", "password", 3, "type"], ["mat-icon-button", "", "matSuffix", "", 3, "click"], ["class", "w-full mt-2 border border-gray-200 p-2 bg-red-50 rounded-md text-red-500 font-bold text-center", 4, "ngIf"], [1, "w-full", "py-3", "mt-8", "bg-green-400", "text-white", "text-center", "rounded", "hover:bg-green-500", "hover:shadow-xl", "cursor-pointer", "relative", 3, "click"], ["mode", "indeterminate", 4, "ngIf"], [1, "w-full", "mt-4", "text-center", "py-3", "border-t", "border-gray-200", "text-gray-400"], [1, "font-bold", "text-blue-500", "cursor-pointer", 3, "click"], [1, "w-full", "mt-2", "border", "border-gray-200", "p-2", "bg-red-50", "rounded-md", "text-red-500", "font-bold", "text-center"], ["mode", "indeterminate"], ["autocomplete", "off", 1, "w-full", "flex", "flex-wrap", "justify-start", 3, "formGroup"], ["matInput", "", "placeholder", "Enter the Compnay Name", "formControlName", "name"], ["type", "number", "matInput", "", "placeholder", "Enter the Phone Number", "formControlName", "phoneNumber"], ["matInput", "", "placeholder", "Enter the Email ID", "formControlName", "email"], [1, "w-full", "py-3", "mt-8", "bg-blue-500", "text-white", "text-center", "rounded", "hover:bg-blue-600", "hover:shadow-xl", "cursor-pointer", 3, "click"], [1, "w-full", "mt-4", "text-center", "text-gray-400", "py-3", "border-t", "border-gray-200"], [1, "font-bold", "text-green-500", "cursor-pointer", 3, "click"]], template: function LandingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "svg", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "circle", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "circle", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "circle", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "circle", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "circle", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "circle", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "circle", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "circle", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "circle", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "circle", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "circle", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "circle", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "circle", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "circle", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "circle", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "circle", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "circle", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "circle", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "circle", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "circle", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](23, "circle", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "circle", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](25, "circle", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](26, "circle", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](27, "circle", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](28, "circle", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](29, "circle", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](30, "circle", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](31, "circle", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](32, "circle", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](33, "circle", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](34, "circle", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](35, "circle", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](36, "circle", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](37, "circle", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](38, "circle", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](39, "circle", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](40, "circle", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](41, "circle", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](42, "circle", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](43, "circle", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](44, "circle", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](45, "circle", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](46, "circle", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](47, "circle", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](48, "circle", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](49, "circle", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](50, "circle", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](51, "circle", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](52, "circle", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](53, "circle", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](54, "circle", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](55, "circle", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](56, "circle", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](57, "circle", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](58, "circle", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](59, "circle", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](60, "circle", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](61, "circle", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](62, "circle", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](63, "circle", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](64, "circle", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](65, "circle", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](66, "circle", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](67, "circle", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](68, "circle", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](69, "circle", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](70, "circle", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](71, "circle", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](72, "circle", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](73, "circle", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](74, "circle", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](75, "circle", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](76, "circle", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](77, "circle", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](78, "circle", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](79, "circle", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](80, "circle", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](81, "circle", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](82, "circle", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](83, "span", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](84, "svg", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](85, "circle", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](86, "circle", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](87, "circle", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](88, "circle", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](89, "circle", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](90, "circle", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](91, "circle", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](92, "circle", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](93, "circle", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](94, "circle", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](95, "circle", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](96, "circle", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](97, "circle", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](98, "circle", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](99, "circle", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](100, "circle", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](101, "circle", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](102, "circle", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](103, "circle", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](104, "circle", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](105, "circle", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](106, "circle", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](107, "circle", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](108, "circle", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](109, "circle", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](110, "circle", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](111, "circle", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](112, "circle", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](113, "circle", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](114, "circle", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](115, "circle", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](116, "circle", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](117, "circle", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](118, "circle", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](119, "circle", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](120, "circle", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](121, "circle", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](122, "circle", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](123, "circle", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](124, "circle", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](125, "circle", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](126, "circle", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](127, "circle", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](128, "circle", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](129, "circle", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](130, "circle", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](131, "circle", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](132, "circle", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](133, "circle", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](134, "circle", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](135, "circle", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](136, "circle", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](137, "circle", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](138, "circle", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](139, "circle", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](140, "circle", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](141, "circle", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](142, "circle", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](143, "circle", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](144, "circle", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](145, "circle", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](146, "circle", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](147, "circle", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](148, "circle", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](149, "circle", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](150, "circle", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](151, "circle", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](152, "circle", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](153, "circle", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](154, "circle", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](155, "circle", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](156, "circle", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](157, "circle", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](158, "circle", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](159, "circle", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](160, "circle", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](161, "circle", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](162, "circle", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](163, "circle", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](164, "circle", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](165, "div", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](166, "div", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](167, "div", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](168, "div", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](169, "Manage");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](170, "span", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](171, "X");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](172, "div", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](173, "Easily Track, Organize Sales Processes & Follow Up w/ Customers.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](174, "div", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](175, LandingComponent_div_175_Template, 35, 7, "div", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](176, LandingComponent_div_176_Template, 50, 6, "div", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](175);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.enableRegister);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.enableRegister);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatError"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatSuffix"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_10__["MatProgressBar"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NumberValueAccessor"]], styles: [".bg-img[_ngcontent-%COMP%] {\n  background-image: url('img-3.jpg');\n  background-size: cover;\n  background-position: center;\n}\n\n.landing-text[_ngcontent-%COMP%] {\n  font-family: \"Ephesis\", cursive;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxsYW5kaW5nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0NBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0FBQ0o7O0FBRUE7RUFDSSwrQkFBQTtBQUNKIiwiZmlsZSI6ImxhbmRpbmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmctaW1nIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2ltZy0zLmpwZyk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG59XHJcblxyXG4ubGFuZGluZy10ZXh0IHtcclxuICAgIGZvbnQtZmFtaWx5OiAnRXBoZXNpcycsIGN1cnNpdmU7XHJcbn0iXX0= */"] });


/***/ }),

/***/ "IYfF":
/*!*************************************************!*\
  !*** ./src/app/shared/services/auth.service.ts ***!
  \*************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AuthService {
    constructor(_httpClient, _router) {
        this._httpClient = _httpClient;
        this._router = _router;
    }
    registerUser(user) {
        return this._httpClient.post('auth/register', user);
    }
    loginUser(user) {
        return this._httpClient.post('auth/login', user);
    }
    getUserDetails() {
        return this._httpClient.get('auth/userDetails');
    }
    loggedIn() {
        return !!localStorage.getItem('token');
    }
    getToken() {
        return localStorage.getItem('token');
    }
    getLoggedInUserDetails() {
        return localStorage.getItem('userName');
    }
    loggedOut() {
        localStorage.removeItem('token');
        this._router.navigate(['/login']);
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac });


/***/ }),

/***/ "J2gf":
/*!*****************************************************!*\
  !*** ./src/app/shared/services/contacts.service.ts ***!
  \*****************************************************/
/*! exports provided: ContactsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsService", function() { return ContactsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


class ContactsService {
    constructor(_httpClient) {
        this._httpClient = _httpClient;
    }
    createContact(contactDetails) {
        return this._httpClient.post('contacts/create', contactDetails);
    }
    getContactsList() {
        return this._httpClient.get('contacts/list');
    }
    getContactDetails(id) {
        return this._httpClient.get('contacts/' + id + '/details');
    }
    updateContactDetails(id, updatedContactDetails) {
        return this._httpClient.put('contacts/' + id + '/details', updatedContactDetails);
    }
    searchContacts(searchObject) {
        return this._httpClient.post('contacts/search', searchObject);
    }
    retireContact(id) {
        return this._httpClient.put('contacts/' + id + '/retire', {});
    }
    activateContact(id) {
        return this._httpClient.put('contacts/' + id + '/activate', {});
    }
    markFavouriteContact(id) {
        return this._httpClient.put('contacts/' + id + '/markFavourite', {});
    }
    unmarkFavouriteContact(id) {
        return this._httpClient.put('contacts/' + id + '/unmarkFavourite', {});
    }
}
ContactsService.ɵfac = function ContactsService_Factory(t) { return new (t || ContactsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
ContactsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ContactsService, factory: ContactsService.ɵfac });


/***/ }),

/***/ "MfXf":
/*!************************************************!*\
  !*** ./src/app/shared/shared/shared.module.ts ***!
  \************************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/progress-bar */ "bv9b");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ "fXoL");


















class SharedModule {
}
SharedModule.ɵfac = function SharedModule_Factory(t) { return new (t || SharedModule)(); };
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__["MatSidenavModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["MatMenuModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__["MatTabsModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTableModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatRippleModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormFieldModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_11__["MatRadioModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_13__["MatProgressBarModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__["MatTooltipModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MatDialogModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__["MatDatepickerModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatNativeDateModule"]
        ], _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__["MatSidenavModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["MatMenuModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__["MatTabsModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTableModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatRippleModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormFieldModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_11__["MatRadioModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_13__["MatProgressBarModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__["MatTooltipModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MatDialogModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__["MatDatepickerModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatNativeDateModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵsetNgModuleScope"](SharedModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__["MatSidenavModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["MatMenuModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__["MatTabsModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTableModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatRippleModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormFieldModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_11__["MatRadioModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_13__["MatProgressBarModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__["MatTooltipModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MatDialogModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__["MatDatepickerModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatNativeDateModule"]], exports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__["MatSidenavModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["MatMenuModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__["MatTabsModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTableModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatRippleModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormFieldModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_11__["MatRadioModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_13__["MatProgressBarModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__["MatTooltipModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MatDialogModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__["MatDatepickerModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatNativeDateModule"]] }); })();


/***/ }),

/***/ "RnhZ":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "K/tc",
	"./af.js": "K/tc",
	"./ar": "jnO4",
	"./ar-dz": "o1bE",
	"./ar-dz.js": "o1bE",
	"./ar-kw": "Qj4J",
	"./ar-kw.js": "Qj4J",
	"./ar-ly": "HP3h",
	"./ar-ly.js": "HP3h",
	"./ar-ma": "CoRJ",
	"./ar-ma.js": "CoRJ",
	"./ar-sa": "gjCT",
	"./ar-sa.js": "gjCT",
	"./ar-tn": "bYM6",
	"./ar-tn.js": "bYM6",
	"./ar.js": "jnO4",
	"./az": "SFxW",
	"./az.js": "SFxW",
	"./be": "H8ED",
	"./be.js": "H8ED",
	"./bg": "hKrs",
	"./bg.js": "hKrs",
	"./bm": "p/rL",
	"./bm.js": "p/rL",
	"./bn": "kEOa",
	"./bn-bd": "loYQ",
	"./bn-bd.js": "loYQ",
	"./bn.js": "kEOa",
	"./bo": "0mo+",
	"./bo.js": "0mo+",
	"./br": "aIdf",
	"./br.js": "aIdf",
	"./bs": "JVSJ",
	"./bs.js": "JVSJ",
	"./ca": "1xZ4",
	"./ca.js": "1xZ4",
	"./cs": "PA2r",
	"./cs.js": "PA2r",
	"./cv": "A+xa",
	"./cv.js": "A+xa",
	"./cy": "l5ep",
	"./cy.js": "l5ep",
	"./da": "DxQv",
	"./da.js": "DxQv",
	"./de": "tGlX",
	"./de-at": "s+uk",
	"./de-at.js": "s+uk",
	"./de-ch": "u3GI",
	"./de-ch.js": "u3GI",
	"./de.js": "tGlX",
	"./dv": "WYrj",
	"./dv.js": "WYrj",
	"./el": "jUeY",
	"./el.js": "jUeY",
	"./en-au": "Dmvi",
	"./en-au.js": "Dmvi",
	"./en-ca": "OIYi",
	"./en-ca.js": "OIYi",
	"./en-gb": "Oaa7",
	"./en-gb.js": "Oaa7",
	"./en-ie": "4dOw",
	"./en-ie.js": "4dOw",
	"./en-il": "czMo",
	"./en-il.js": "czMo",
	"./en-in": "7C5Q",
	"./en-in.js": "7C5Q",
	"./en-nz": "b1Dy",
	"./en-nz.js": "b1Dy",
	"./en-sg": "t+mt",
	"./en-sg.js": "t+mt",
	"./eo": "Zduo",
	"./eo.js": "Zduo",
	"./es": "iYuL",
	"./es-do": "CjzT",
	"./es-do.js": "CjzT",
	"./es-mx": "tbfe",
	"./es-mx.js": "tbfe",
	"./es-us": "Vclq",
	"./es-us.js": "Vclq",
	"./es.js": "iYuL",
	"./et": "7BjC",
	"./et.js": "7BjC",
	"./eu": "D/JM",
	"./eu.js": "D/JM",
	"./fa": "jfSC",
	"./fa.js": "jfSC",
	"./fi": "gekB",
	"./fi.js": "gekB",
	"./fil": "1ppg",
	"./fil.js": "1ppg",
	"./fo": "ByF4",
	"./fo.js": "ByF4",
	"./fr": "nyYc",
	"./fr-ca": "2fjn",
	"./fr-ca.js": "2fjn",
	"./fr-ch": "Dkky",
	"./fr-ch.js": "Dkky",
	"./fr.js": "nyYc",
	"./fy": "cRix",
	"./fy.js": "cRix",
	"./ga": "USCx",
	"./ga.js": "USCx",
	"./gd": "9rRi",
	"./gd.js": "9rRi",
	"./gl": "iEDd",
	"./gl.js": "iEDd",
	"./gom-deva": "qvJo",
	"./gom-deva.js": "qvJo",
	"./gom-latn": "DKr+",
	"./gom-latn.js": "DKr+",
	"./gu": "4MV3",
	"./gu.js": "4MV3",
	"./he": "x6pH",
	"./he.js": "x6pH",
	"./hi": "3E1r",
	"./hi.js": "3E1r",
	"./hr": "S6ln",
	"./hr.js": "S6ln",
	"./hu": "WxRl",
	"./hu.js": "WxRl",
	"./hy-am": "1rYy",
	"./hy-am.js": "1rYy",
	"./id": "UDhR",
	"./id.js": "UDhR",
	"./is": "BVg3",
	"./is.js": "BVg3",
	"./it": "bpih",
	"./it-ch": "bxKX",
	"./it-ch.js": "bxKX",
	"./it.js": "bpih",
	"./ja": "B55N",
	"./ja.js": "B55N",
	"./jv": "tUCv",
	"./jv.js": "tUCv",
	"./ka": "IBtZ",
	"./ka.js": "IBtZ",
	"./kk": "bXm7",
	"./kk.js": "bXm7",
	"./km": "6B0Y",
	"./km.js": "6B0Y",
	"./kn": "PpIw",
	"./kn.js": "PpIw",
	"./ko": "Ivi+",
	"./ko.js": "Ivi+",
	"./ku": "JCF/",
	"./ku.js": "JCF/",
	"./ky": "lgnt",
	"./ky.js": "lgnt",
	"./lb": "RAwQ",
	"./lb.js": "RAwQ",
	"./lo": "sp3z",
	"./lo.js": "sp3z",
	"./lt": "JvlW",
	"./lt.js": "JvlW",
	"./lv": "uXwI",
	"./lv.js": "uXwI",
	"./me": "KTz0",
	"./me.js": "KTz0",
	"./mi": "aIsn",
	"./mi.js": "aIsn",
	"./mk": "aQkU",
	"./mk.js": "aQkU",
	"./ml": "AvvY",
	"./ml.js": "AvvY",
	"./mn": "lYtQ",
	"./mn.js": "lYtQ",
	"./mr": "Ob0Z",
	"./mr.js": "Ob0Z",
	"./ms": "6+QB",
	"./ms-my": "ZAMP",
	"./ms-my.js": "ZAMP",
	"./ms.js": "6+QB",
	"./mt": "G0Uy",
	"./mt.js": "G0Uy",
	"./my": "honF",
	"./my.js": "honF",
	"./nb": "bOMt",
	"./nb.js": "bOMt",
	"./ne": "OjkT",
	"./ne.js": "OjkT",
	"./nl": "+s0g",
	"./nl-be": "2ykv",
	"./nl-be.js": "2ykv",
	"./nl.js": "+s0g",
	"./nn": "uEye",
	"./nn.js": "uEye",
	"./oc-lnc": "Fnuy",
	"./oc-lnc.js": "Fnuy",
	"./pa-in": "8/+R",
	"./pa-in.js": "8/+R",
	"./pl": "jVdC",
	"./pl.js": "jVdC",
	"./pt": "8mBD",
	"./pt-br": "0tRk",
	"./pt-br.js": "0tRk",
	"./pt.js": "8mBD",
	"./ro": "lyxo",
	"./ro.js": "lyxo",
	"./ru": "lXzo",
	"./ru.js": "lXzo",
	"./sd": "Z4QM",
	"./sd.js": "Z4QM",
	"./se": "//9w",
	"./se.js": "//9w",
	"./si": "7aV9",
	"./si.js": "7aV9",
	"./sk": "e+ae",
	"./sk.js": "e+ae",
	"./sl": "gVVK",
	"./sl.js": "gVVK",
	"./sq": "yPMs",
	"./sq.js": "yPMs",
	"./sr": "zx6S",
	"./sr-cyrl": "E+lV",
	"./sr-cyrl.js": "E+lV",
	"./sr.js": "zx6S",
	"./ss": "Ur1D",
	"./ss.js": "Ur1D",
	"./sv": "X709",
	"./sv.js": "X709",
	"./sw": "dNwA",
	"./sw.js": "dNwA",
	"./ta": "PeUW",
	"./ta.js": "PeUW",
	"./te": "XLvN",
	"./te.js": "XLvN",
	"./tet": "V2x9",
	"./tet.js": "V2x9",
	"./tg": "Oxv6",
	"./tg.js": "Oxv6",
	"./th": "EOgW",
	"./th.js": "EOgW",
	"./tk": "Wv91",
	"./tk.js": "Wv91",
	"./tl-ph": "Dzi0",
	"./tl-ph.js": "Dzi0",
	"./tlh": "z3Vd",
	"./tlh.js": "z3Vd",
	"./tr": "DoHr",
	"./tr.js": "DoHr",
	"./tzl": "z1FC",
	"./tzl.js": "z1FC",
	"./tzm": "wQk9",
	"./tzm-latn": "tT3J",
	"./tzm-latn.js": "tT3J",
	"./tzm.js": "wQk9",
	"./ug-cn": "YRex",
	"./ug-cn.js": "YRex",
	"./uk": "raLr",
	"./uk.js": "raLr",
	"./ur": "UpQW",
	"./ur.js": "UpQW",
	"./uz": "Loxo",
	"./uz-latn": "AQ68",
	"./uz-latn.js": "AQ68",
	"./uz.js": "Loxo",
	"./vi": "KSF8",
	"./vi.js": "KSF8",
	"./x-pseudo": "/X5v",
	"./x-pseudo.js": "/X5v",
	"./yo": "fzPg",
	"./yo.js": "fzPg",
	"./zh-cn": "XDpg",
	"./zh-cn.js": "XDpg",
	"./zh-hk": "SatO",
	"./zh-hk.js": "SatO",
	"./zh-mo": "OmwH",
	"./zh-mo.js": "OmwH",
	"./zh-tw": "kOpN",
	"./zh-tw.js": "kOpN"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "RnhZ";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class AppComponent {
    constructor() {
        this.title = 'crm-cm';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "TZWI":
/*!**************************************************************!*\
  !*** ./src/app/shared/services/token-interceptor.service.ts ***!
  \**************************************************************/
/*! exports provided: TokenInterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenInterceptorService", function() { return TokenInterceptorService; });
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.service */ "IYfF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class TokenInterceptorService {
    constructor(_injector) {
        this._injector = _injector;
    }
    intercept(req, next) {
        let authService = this._injector.get(_auth_service__WEBPACK_IMPORTED_MODULE_0__["AuthService"]);
        let tokenizedReq = req.clone({
            setHeaders: {
                Authorization: `Bearer ${authService.getToken()}`
            }
        });
        return next.handle(tokenizedReq);
    }
}
TokenInterceptorService.ɵfac = function TokenInterceptorService_Factory(t) { return new (t || TokenInterceptorService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"])); };
TokenInterceptorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: TokenInterceptorService, factory: TokenInterceptorService.ɵfac });


/***/ }),

/***/ "YZ3A":
/*!******************************************************!*\
  !*** ./src/app/shared/services/side-menu.service.ts ***!
  \******************************************************/
/*! exports provided: SideMenuService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideMenuService", function() { return SideMenuService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class SideMenuService {
    constructor() {
        this.currentRoute = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](null);
        this.route = this.currentRoute.asObservable();
    }
    updatedCurrentRoute(route) {
        this.currentRoute.next(route);
    }
}
SideMenuService.ɵfac = function SideMenuService_Factory(t) { return new (t || SideMenuService)(); };
SideMenuService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: SideMenuService, factory: SideMenuService.ɵfac, providedIn: 'root' });


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _modules_landing_landing_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/landing/landing.component */ "Hd4m");
/* harmony import */ var _shared_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/shared/shared.module */ "MfXf");
/* harmony import */ var _modules_main_main_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/main/main.component */ "ZEQa");
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/services/auth.service */ "IYfF");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _modules_authGuard_auth_guard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/authGuard/auth.guard */ "6xxe");
/* harmony import */ var _shared_services_token_interceptor_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/services/token-interceptor.service */ "TZWI");
/* harmony import */ var _shared_services_contacts_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/services/contacts.service */ "J2gf");
/* harmony import */ var _shared_services_schedule_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shared/services/schedule.service */ "3DMK");
/* harmony import */ var _shared_services_user_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./shared/services/user.service */ "kmKP");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ "fXoL");















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineInjector"]({ providers: [_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"], _shared_services_contacts_service__WEBPACK_IMPORTED_MODULE_11__["ContactsService"], _shared_services_schedule_service__WEBPACK_IMPORTED_MODULE_12__["ScheduleService"], _shared_services_user_service__WEBPACK_IMPORTED_MODULE_13__["UserService"], _modules_authGuard_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"], {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HTTP_INTERCEPTORS"],
            useClass: _shared_services_token_interceptor_service__WEBPACK_IMPORTED_MODULE_10__["TokenInterceptorService"],
            multi: true
        }], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            _shared_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _modules_landing_landing_component__WEBPACK_IMPORTED_MODULE_4__["LandingComponent"],
        _modules_main_main_component__WEBPACK_IMPORTED_MODULE_6__["MainComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
        _shared_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"]] }); })();


/***/ }),

/***/ "ZEQa":
/*!************************************************!*\
  !*** ./src/app/modules/main/main.component.ts ***!
  \************************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _confirmation_confirmation_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./confirmation/confirmation.component */ "E5Fj");
/* harmony import */ var _main_side_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main-side-menu */ "4MfO");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_shared_services_side_menu_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/side-menu.service */ "YZ3A");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/auth.service */ "IYfF");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/core */ "FKr1");














const _c0 = function (a0) { return { "bg-blue-50 border-l-4 border-blue-500 text-blue-700 font-bold": a0 }; };
const _c1 = function (a0) { return { "color": a0 }; };
function MainComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MainComponent_div_11_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4); const menuItem_r2 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r3.sideMenuNavigation(menuItem_r2.route); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const menuItem_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](4, _c0, ctx_r1.currentMainRoute === menuItem_r2.name));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](6, _c1, ctx_r1.currentMainRoute === menuItem_r2.name ? "royalblue" : null));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](menuItem_r2.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](menuItem_r2.name);
} }
class MainComponent {
    constructor(_sideMenuService, _router, _authService, _dialog) {
        this._sideMenuService = _sideMenuService;
        this._router = _router;
        this._authService = _authService;
        this._dialog = _dialog;
        this.showFiller = false;
        this.sideMenuList = _main_side_menu__WEBPACK_IMPORTED_MODULE_2__["sideMenuItems"];
        this.todaysDate = new Date();
        this.currentMainRoute = null;
    }
    ngOnInit() {
        // *** Check for User Name ***
        // if(this._authService.getLoggedInUserDetails()) {
        //   this.userLoggedInName = this._authService.getLoggedInUserDetails();
        // } else {
        //   this._authService.loggedOut();
        // }
        // console.log(this._authService.getLoggedInUserDetails());
        // *** Check for token and userdetails ***
        this._authService.getUserDetails().subscribe((data) => {
            console.log(data);
            this.userDetails = data.user;
        }, error => {
            if (error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpErrorResponse"]) {
                if (error.status === 401) {
                    this._router.navigate(['/login']);
                }
            }
        });
        // *** Side Menu Highlighter ***
        this._sideMenuService.route.subscribe((routeValue) => {
            this.currentMainRoute = routeValue;
            console.log(this.currentMainRoute);
        });
    }
    // *** Side menu navigation ***
    sideMenuNavigation(route) {
        if (route === '/main/dashboard/user-profile') {
            this._router.navigate([route, this.userDetails._id]);
        }
        else {
            this._router.navigate([route]);
        }
    }
    // Open Logout Dialog Box
    openDialog() {
        let dialogRef = this._dialog.open(_confirmation_confirmation_component__WEBPACK_IMPORTED_MODULE_1__["ConfirmationDialogComponent"], {
            width: 'max-w-md'
        });
        dialogRef.afterClosed().subscribe((result) => {
            console.log(result);
            if (result) {
                this.logout();
            }
        });
    }
    // *** Logout ***
    logout() {
        this._authService.loggedOut();
    }
    // *** User Profile Navigate ***
    navigate() {
        this._router.navigate(['main/dashboard/user-profile', this.userDetails._id]);
    }
}
MainComponent.ɵfac = function MainComponent_Factory(t) { return new (t || MainComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_services_side_menu_service__WEBPACK_IMPORTED_MODULE_4__["SideMenuService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"])); };
MainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: MainComponent, selectors: [["app-main"]], decls: 28, vars: 4, consts: [["autosize", "", 1, "w-full", "h-screen", "py-4", "bg-gray-400"], ["mode", "side", 1, "w-2/12", "flex", "justify-center", "p-4"], ["drawer", ""], [1, "w-full", "h-full", "flex", "flex-wrap", "justify-center", "content-start", "relative"], [1, "w-full", "flex", "justify-center", "flex-wrap", "mt-4"], [1, "w-full", "flex", "justify-center"], [1, "w-24", "h-24", "bg-yellow-300", "flex", "justify-center", "items-center", "rounded-full", "shadow-lg", "text-2xl", "font-bold", "pp-bg", "cursor-pointer", 3, "click"], [1, "w-full", "p-2", "text-center", "text-base", "mt-2", "text-gray-700", "font-bold"], [1, "w-full", "flex", "flex-wrap", "justify-center", "mt-16"], ["class", "w-11/12 hover:shadow p-2 my-1 rounded flex items-center text-base cursor-pointer", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "absolute", "w-11/12", "text-center", "text-gray-400", "text-sm", "bottom-10"], [1, "w-full", "flex", "flex-wrap", "content-start", "px-10"], [1, "w-full", "flex", "justify-between"], [1, "flex", "items-center"], ["mat-icon-button", "", "matTooltip", "Menu", "matTooltipPosition", "right", 1, "hover:text-blue-700", 3, "click"], [1, "w-auto", "flex", "items-center"], ["mat-ripple", "", 1, "w-10", "h-10", "ml-2", "mr-4", "border-gray-200", "cursor-pointer", "flex", "items-center", "justify-center", "uppercase", "rounded-full", "bg-yellow-300", "text-center", "font-bold", "shadow-2xl", "pp-bg", 2, "box-shadow", "2px 2px 12px -4px #1215aa !important", 3, "click"], ["mat-icon-button", "", "matTooltip", "Logout", 1, "", 3, "click"], [1, "text-red-700"], [1, "w-full", "px-10"], [1, "w-11/12", "hover:shadow", "p-2", "my-1", "rounded", "flex", "items-center", "text-base", "cursor-pointer", 3, "ngClass", "click"], [1, "text-gray-700", 3, "ngStyle"], [1, "ml-4"]], template: function MainComponent_Template(rf, ctx) { if (rf & 1) {
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-drawer-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-drawer", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MainComponent_Template_div_click_6_listener() { return ctx.navigate(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, MainComponent_div_11_Template, 5, 8, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Version 1.0.0");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MainComponent_Template_button_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](2); return _r0.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "drag_handle");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MainComponent_Template_div_click_21_listener() { return ctx.navigate(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MainComponent_Template_button_click_23_listener() { return ctx.openDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "mat-icon", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, "settings_power");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](27, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"]((ctx.userDetails == null ? null : ctx.userDetails.name) ? ctx.userDetails.name[0] : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"]((ctx.userDetails == null ? null : ctx.userDetails.name) ? ctx.userDetails == null ? null : ctx.userDetails.name : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.sideMenuList);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"]((ctx.userDetails == null ? null : ctx.userDetails.name) ? ctx.userDetails == null ? null : ctx.userDetails.name[0] : "");
    } }, directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatDrawerContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatDrawer"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__["MatTooltip"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIcon"], _angular_material_core__WEBPACK_IMPORTED_MODULE_13__["MatRipple"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgStyle"]], styles: [".mat-drawer-container[_ngcontent-%COMP%] {\n  background-color: #f6f6f6;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.pp-bg[_ngcontent-%COMP%] {\n  background-image: radial-gradient(circle at 48% 33%, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0.04) 8%, transparent 8%, transparent 92%), radial-gradient(circle at 28% 16%, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0.04) 8%, transparent 8%, transparent 92%), radial-gradient(circle at 34% 52%, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.03) 6%, transparent 6%, transparent 94%), radial-gradient(circle at 92% 52%, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.03) 6%, transparent 6%, transparent 94%), radial-gradient(circle at 77% 84%, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.03) 6%, transparent 6%, transparent 94%), radial-gradient(circle at 75% 64%, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.03) 6%, transparent 6%, transparent 94%), radial-gradient(circle at 70% 62%, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0.04) 4%, transparent 4%, transparent 96%), radial-gradient(circle at 55% 100%, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0.04) 4%, transparent 4%, transparent 96%), radial-gradient(circle at 12% 11%, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0.04) 4%, transparent 4%, transparent 96%), radial-gradient(circle at 35% 55%, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0.04) 4%, transparent 4%, transparent 96%), linear-gradient(45deg, #1a15c0, #ab53ef);\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxtYWluLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7RUFDQSwwQkFBQTtBQUNKOztBQUVBO0VBS0kscTBDQUFBO0VBQ0EsWUFBQTtBQUhKIiwiZmlsZSI6Im1haW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LWRyYXdlci1jb250YWluZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjZmNjtcclxuICAgIGNvbG9yOiByZ2JhKDAsMCwwLC44Nyk7XHJcbn1cclxuXHJcbi5wcC1iZyB7XHJcbiAgICAvLyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTI1ZGVnLCAjMDBGRjU3IDAlLCAjMDEwMDMzIDQwJSwgIzQ2MDA0MyA3MCUsICNGMEZGQzUgMTAwJSksIGxpbmVhci1ncmFkaWVudCg1NWRlZywgIzAwMTRDOSAwJSwgIzQxMDA2MCAxMDAlKSwgbGluZWFyLWdyYWRpZW50KDMwMGRlZywgI0ZGQzcwMCAwJSwgIzAwMUFGRiAxMDAlKSwgcmFkaWFsLWdyYWRpZW50KDEzNSUgMjE1JSBhdCAxMTUlIDQwJSwgIzM5MzkzOSAwJSwgIzM5MzkzOSA0MCUsICM4NDk1NjEgY2FsYyg0MCUgKyAxcHgpLCAjODQ5NTYxIDYwJSwgI0VFRDY5MCBjYWxjKDYwJSArIDFweCksICNFRUQ2OTAgODAlLCAjRUNFRkQ4IGNhbGMoODAlICsgMXB4KSwgI0VDRUZEOCAxMDAlKSwgbGluZWFyLWdyYWRpZW50KDEyNWRlZywgIzI4MkQ0RiAwJSwgIzI4MkQ0RiA0MCUsICMyMzEwM0EgY2FsYyg0MCUgKyAxcHgpLCAjMjMxMDNBIDcwJSwgI0EwMjA0QyBjYWxjKDcwJSArIDFweCksICNBMDIwNEMgODglLCAjRkY2QzAwIGNhbGMoODglICsgMXB4KSwgI0ZGNkMwMCAxMDAlKTtcclxuICAgIC8vIGJhY2tncm91bmQtYmxlbmQtbW9kZTogb3ZlcmxheSwgc2NyZWVuLCBvdmVybGF5LCBvdmVybGF5LCBub3JtYWw7XHJcbiAgICAvLyBiYWNrZ3JvdW5kLWltYWdlOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGF0IDE3JSA3NyUsIHJnYmEoMTcsIDE3LCAxNywwLjA0KSAwJSwgcmdiYSgxNywgMTcsIDE3LDAuMDQpIDUwJSxyZ2JhKDE5NywgMTk3LCAxOTcsMC4wNCkgNTAlLCByZ2JhKDE5NywgMTk3LCAxOTcsMC4wNCkgMTAwJSkscmFkaWFsLWdyYWRpZW50KGNpcmNsZSBhdCAyNiUgMTclLCByZ2JhKDY0LCA2NCwgNjQsMC4wNCkgMCUsIHJnYmEoNjQsIDY0LCA2NCwwLjA0KSA1MCUscmdiYSgyNDQsIDI0NCwgMjQ0LDAuMDQpIDUwJSwgcmdiYSgyNDQsIDI0NCwgMjQ0LDAuMDQpIDEwMCUpLHJhZGlhbC1ncmFkaWVudChjaXJjbGUgYXQgNDQlIDYwJSwgcmdiYSgxNzcsIDE3NywgMTc3LDAuMDQpIDAlLCByZ2JhKDE3NywgMTc3LCAxNzcsMC4wNCkgNTAlLHJnYmEoMTg3LCAxODcsIDE4NywwLjA0KSA1MCUsIHJnYmEoMTg3LCAxODcsIDE4NywwLjA0KSAxMDAlKSxsaW5lYXItZ3JhZGllbnQoMTlkZWcsIHJnYigyOCwgMTE3LCAyNTApLHJnYigzNCwgMiwgMTU5KSk7XHJcbiAgICAvLyBiYWNrZ3JvdW5kLWltYWdlOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGF0IHRvcCBsZWZ0LCByZ2IoMjE5LCAxNzEsIDE3KSAwJSwgcmdiKDIxOSwgMTcxLCAxNykgMSUscmdiKDIxNSwgMTYwLCAxNikgMSUsIHJnYigyMTUsIDE2MCwgMTYpIDQ5JSxyZ2IoMjExLCAxNDgsIDE1KSA0OSUsIHJnYigyMTEsIDE0OCwgMTUpIDU1JSxyZ2IoMjA3LCAxMzcsIDE0KSA1NSUsIHJnYigyMDcsIDEzNywgMTQpIDY0JSxyZ2IoMjAzLCAxMjUsIDEyKSA2NCUsIHJnYigyMDMsIDEyNSwgMTIpIDcyJSxyZ2IoMTk5LCAxMTQsIDExKSA3MiUsIHJnYigxOTksIDExNCwgMTEpIDg1JSxyZ2IoMTk1LCAxMDIsIDEwKSA4NSUsIHJnYigxOTUsIDEwMiwgMTApIDg2JSxyZ2IoMTkxLCA5MSwgOSkgODYlLCByZ2IoMTkxLCA5MSwgOSkgMTAwJSk7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGF0IDQ4JSAzMyUsIHJnYmEoMjU1LDI1NSwyNTUsMC4wNCkgMCUsIHJnYmEoMjU1LDI1NSwyNTUsMC4wNCkgOCUsdHJhbnNwYXJlbnQgOCUsIHRyYW5zcGFyZW50IDkyJSkscmFkaWFsLWdyYWRpZW50KGNpcmNsZSBhdCAyOCUgMTYlLCByZ2JhKDI1NSwyNTUsMjU1LDAuMDQpIDAlLCByZ2JhKDI1NSwyNTUsMjU1LDAuMDQpIDglLHRyYW5zcGFyZW50IDglLCB0cmFuc3BhcmVudCA5MiUpLHJhZGlhbC1ncmFkaWVudChjaXJjbGUgYXQgMzQlIDUyJSwgcmdiYSgyNTUsMjU1LDI1NSwwLjAzKSAwJSwgcmdiYSgyNTUsMjU1LDI1NSwwLjAzKSA2JSx0cmFuc3BhcmVudCA2JSwgdHJhbnNwYXJlbnQgOTQlKSxyYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGF0IDkyJSA1MiUsIHJnYmEoMjU1LDI1NSwyNTUsMC4wMykgMCUsIHJnYmEoMjU1LDI1NSwyNTUsMC4wMykgNiUsdHJhbnNwYXJlbnQgNiUsIHRyYW5zcGFyZW50IDk0JSkscmFkaWFsLWdyYWRpZW50KGNpcmNsZSBhdCA3NyUgODQlLCByZ2JhKDI1NSwyNTUsMjU1LDAuMDMpIDAlLCByZ2JhKDI1NSwyNTUsMjU1LDAuMDMpIDYlLHRyYW5zcGFyZW50IDYlLCB0cmFuc3BhcmVudCA5NCUpLHJhZGlhbC1ncmFkaWVudChjaXJjbGUgYXQgNzUlIDY0JSwgcmdiYSgyNTUsMjU1LDI1NSwwLjAzKSAwJSwgcmdiYSgyNTUsMjU1LDI1NSwwLjAzKSA2JSx0cmFuc3BhcmVudCA2JSwgdHJhbnNwYXJlbnQgOTQlKSxyYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGF0IDcwJSA2MiUsIHJnYmEoMjU1LDI1NSwyNTUsMC4wNCkgMCUsIHJnYmEoMjU1LDI1NSwyNTUsMC4wNCkgNCUsdHJhbnNwYXJlbnQgNCUsIHRyYW5zcGFyZW50IDk2JSkscmFkaWFsLWdyYWRpZW50KGNpcmNsZSBhdCA1NSUgMTAwJSwgcmdiYSgyNTUsMjU1LDI1NSwwLjA0KSAwJSwgcmdiYSgyNTUsMjU1LDI1NSwwLjA0KSA0JSx0cmFuc3BhcmVudCA0JSwgdHJhbnNwYXJlbnQgOTYlKSxyYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGF0IDEyJSAxMSUsIHJnYmEoMjU1LDI1NSwyNTUsMC4wNCkgMCUsIHJnYmEoMjU1LDI1NSwyNTUsMC4wNCkgNCUsdHJhbnNwYXJlbnQgNCUsIHRyYW5zcGFyZW50IDk2JSkscmFkaWFsLWdyYWRpZW50KGNpcmNsZSBhdCAzNSUgNTUlLCByZ2JhKDI1NSwyNTUsMjU1LDAuMDQpIDAlLCByZ2JhKDI1NSwyNTUsMjU1LDAuMDQpIDQlLHRyYW5zcGFyZW50IDQlLCB0cmFuc3BhcmVudCA5NiUpLGxpbmVhci1ncmFkaWVudCg0NWRlZywgcmdiKDI2LCAyMSwgMTkyKSxyZ2IoMTcxLCA4MywgMjM5KSk7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi8vIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0MGRlZywgIzE1NTI2MyA5JSwgIzE1NTI2MyA0MyUsICNGRjZGM0MgY2FsYyg0MyUgKyAxcHgpLCAjRkY2RjNDIDUyJSwgI0ZGOUEzQyBjYWxjKDUyJSArIDFweCksICNGRjlBM0MgODAlLCAjRkZDOTNDIGNhbGMoODAlICsgMXB4KSwgI0ZGQzkzQyAxMDAlKTsiXX0= */"] });


/***/ }),

/***/ "kmKP":
/*!*************************************************!*\
  !*** ./src/app/shared/services/user.service.ts ***!
  \*************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


class UserService {
    constructor(_httpClient) {
        this._httpClient = _httpClient;
    }
    getContactsList() {
        return this._httpClient.get('contacts/list');
    }
    getUserDetails(id) {
        return this._httpClient.get('contacts/' + id + '/details');
    }
    updateContactDetails(id, updatedContactDetails) {
        return this._httpClient.put('contacts/' + id + '/details', updatedContactDetails);
    }
    searchContacts(searchObject) {
        return this._httpClient.post('contacts/search', searchObject);
    }
    uploadUserDocument(fileObject) {
        return this._httpClient.post('userDocuments/addUserProfile', fileObject);
    }
}
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac });


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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _modules_authGuard_auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/authGuard/auth.guard */ "6xxe");
/* harmony import */ var _modules_landing_landing_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/landing/landing.component */ "Hd4m");
/* harmony import */ var _modules_main_main_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/main/main.component */ "ZEQa");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");






const routes = [
    {
        path: '', component: _modules_landing_landing_component__WEBPACK_IMPORTED_MODULE_2__["LandingComponent"]
    },
    {
        path: 'login', component: _modules_landing_landing_component__WEBPACK_IMPORTED_MODULE_2__["LandingComponent"]
    },
    {
        path: 'main/dashboard', component: _modules_main_main_component__WEBPACK_IMPORTED_MODULE_3__["MainComponent"],
        canActivate: [_modules_authGuard_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]],
        children: [
            {
                path: '', loadChildren: () => __webpack_require__.e(/*! import() | modules-main-main-module */ "modules-main-main-module").then(__webpack_require__.bind(null, /*! ./modules/main/main.module */ "ebwL")).then(m => m.MainModule)
            }
        ]
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
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
//# sourceMappingURL=main.js.map