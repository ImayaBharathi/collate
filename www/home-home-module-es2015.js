(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/government-government-blog/government-government-blog.page.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/government-government-blog/government-government-blog.page.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>government_government_blog</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/government-people-blog/government-people-blog.page.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/government-people-blog/government-people-blog.page.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Government_people_blog</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <div id=\"container\">\n  </div>-->\n<ion-header class=\"ion-no-border\">\n  <ion-toolbar color=\"appcolor\">\n    <ion-title>CoLLAte</ion-title>\n  </ion-toolbar>\n</ion-header>\n<super-tabs>\n  <super-tabs-toolbar slot=\"bottom\" color=\"appcolor\">\n    <super-tab-button>\n      <ion-icon name=\"home\" color=\"light\"></ion-icon>\n    </super-tab-button>\n    <super-tab-button>\n      <ion-icon name=\"people\" color=\"light\"></ion-icon>\n    </super-tab-button>\n    <super-tab-button>\n      <ion-icon name=\"radio\" color=\"light\"></ion-icon>\n    </super-tab-button>\n    <super-tab-button>\n      <ion-icon name=\"help-buoy\" color=\"light\"></ion-icon>\n    </super-tab-button>\n    <super-tab-button>\n      <ion-icon name=\"briefcase\" color=\"light\"></ion-icon>\n    </super-tab-button>\n  </super-tabs-toolbar>\n  <super-tabs-container>\n    <super-tab>\n      <ion-content >\n        <ion-nav [root]=\"landing_home\" #landinghomeNav></ion-nav>\n      </ion-content>\n    </super-tab>\n    <super-tab>\n      <ion-content>\n        <ion-nav [root]=\"government_people_blog\" #governmentpeopleNav></ion-nav>\n      </ion-content>\n    </super-tab>\n    <super-tab>\n      <ion-content>\n        <ion-nav [root]=\"ngo_people_blog\" #ngopeopleNav></ion-nav>\n      </ion-content>\n    </super-tab>\n    <super-tab>\n      <ion-content>\n        <ion-nav [root]=\"people_government_blog\" #peoplegovernNav></ion-nav>\n      </ion-content>\n    </super-tab>\n    <super-tab>\n      <ion-content>\n        <ion-nav [root]=\"people_ngo\" #peoplengoNav></ion-nav>\n      </ion-content>\n    </super-tab>\n  </super-tabs-container>\n</super-tabs>\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/landing-home/landing-home.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/landing-home/landing-home.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content padding>\n  <ion-card *ngFor=\"let article of people\">\n  <ion-item>\n    <ion-chip>\n      <ion-avatar>\n        <img src=\"../../assets/icon/img_avatar.png\">\n      </ion-avatar>\n      <ion-label>{{article.name}}</ion-label>\n\n    </ion-chip>\n<ion-label></ion-label>\n    <ion-icon name=\"ellipsis-vertical-outline\"></ion-icon>\n  </ion-item>\n  <a style=\"text-decoration:none;color: black;\"  href=\"\" class=\"item item-avatar-left\">\n  <ion-card-header>\n    \n\n    <ion-card-subtitle>Card Subtitle</ion-card-subtitle>\n    <ion-card-title>{{article.title}}</ion-card-title>\n  </ion-card-header>\n  <ion-card-content>\n    {{article.description}}\n  </ion-card-content>\n</a>\n<ion-item>\n<ion-icon name=\"heart-outline\"></ion-icon>\n<ion-card-subtitle>{{article.like}}</ion-card-subtitle>\n<ion-label></ion-label>\n\n<ion-icon name=\"chatbox-outline\"></ion-icon>\n<ion-card-subtitle>{{article.like}}</ion-card-subtitle>\n<ion-label></ion-label>\n\n<ion-icon name=\"share-social-outline\"></ion-icon>\n<ion-card-subtitle>{{article.like}}</ion-card-subtitle>\n<ion-label></ion-label>\n<ion-icon name=\"bookmark-outline\"></ion-icon>\n</ion-item>\n</ion-card>\n\n</ion-content>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ngo-ngo-blog/ngo-ngo-blog.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ngo-ngo-blog/ngo-ngo-blog.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>NGO_NGO_Blog</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ngo-people-blog/ngo-people-blog.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ngo-people-blog/ngo-people-blog.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>NGO_people_blog</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/people-government-blog/people-government-blog.page.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/people-government-blog/people-government-blog.page.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>people_government_blog</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/people-ngo-blog/people-ngo-blog.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/people-ngo-blog/people-ngo-blog.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>people_NGO_blog</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/people-people-blog/people-people-blog.page.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/people-people-blog/people-people-blog.page.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>people_people_blog</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/government-government-blog/government-government-blog.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/government-government-blog/government-government-blog.module.ts ***!
  \*********************************************************************************/
/*! exports provided: GovernmentGovernmentBlogPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GovernmentGovernmentBlogPageModule", function() { return GovernmentGovernmentBlogPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _government_government_blog_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./government-government-blog.page */ "./src/app/government-government-blog/government-government-blog.page.ts");





// import { GovernmentGovernmentBlogPageRoutingModule } from './government-government-blog-routing.module';

let GovernmentGovernmentBlogPageModule = class GovernmentGovernmentBlogPageModule {
};
GovernmentGovernmentBlogPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"]
            // GovernmentGovernmentBlogPageRoutingModule
        ],
        declarations: [_government_government_blog_page__WEBPACK_IMPORTED_MODULE_5__["GovernmentGovernmentBlogPage"]],
        entryComponents: [_government_government_blog_page__WEBPACK_IMPORTED_MODULE_5__["GovernmentGovernmentBlogPage"]]
    })
], GovernmentGovernmentBlogPageModule);



/***/ }),

/***/ "./src/app/government-government-blog/government-government-blog.page.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/government-government-blog/government-government-blog.page.scss ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dvdmVybm1lbnQtZ292ZXJubWVudC1ibG9nL2dvdmVybm1lbnQtZ292ZXJubWVudC1ibG9nLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/government-government-blog/government-government-blog.page.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/government-government-blog/government-government-blog.page.ts ***!
  \*******************************************************************************/
/*! exports provided: GovernmentGovernmentBlogPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GovernmentGovernmentBlogPage", function() { return GovernmentGovernmentBlogPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let GovernmentGovernmentBlogPage = class GovernmentGovernmentBlogPage {
    constructor() { }
    ngOnInit() {
    }
};
GovernmentGovernmentBlogPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-government-government-blog',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./government-government-blog.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/government-government-blog/government-government-blog.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./government-government-blog.page.scss */ "./src/app/government-government-blog/government-government-blog.page.scss")).default]
    })
], GovernmentGovernmentBlogPage);



/***/ }),

/***/ "./src/app/government-people-blog/government-people-blog.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/government-people-blog/government-people-blog.module.ts ***!
  \*************************************************************************/
/*! exports provided: GovernmentPeopleBlogPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GovernmentPeopleBlogPageModule", function() { return GovernmentPeopleBlogPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _government_people_blog_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./government-people-blog.page */ "./src/app/government-people-blog/government-people-blog.page.ts");





// import { GovernmentPeopleBlogPageRoutingModule } from './government-people-blog-routing.module';

let GovernmentPeopleBlogPageModule = class GovernmentPeopleBlogPageModule {
};
GovernmentPeopleBlogPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"]
            // GovernmentPeopleBlogPageRoutingModule
        ],
        declarations: [_government_people_blog_page__WEBPACK_IMPORTED_MODULE_5__["GovernmentPeopleBlogPage"]],
        entryComponents: [_government_people_blog_page__WEBPACK_IMPORTED_MODULE_5__["GovernmentPeopleBlogPage"]]
    })
], GovernmentPeopleBlogPageModule);



/***/ }),

/***/ "./src/app/government-people-blog/government-people-blog.page.scss":
/*!*************************************************************************!*\
  !*** ./src/app/government-people-blog/government-people-blog.page.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dvdmVybm1lbnQtcGVvcGxlLWJsb2cvZ292ZXJubWVudC1wZW9wbGUtYmxvZy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/government-people-blog/government-people-blog.page.ts":
/*!***********************************************************************!*\
  !*** ./src/app/government-people-blog/government-people-blog.page.ts ***!
  \***********************************************************************/
/*! exports provided: GovernmentPeopleBlogPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GovernmentPeopleBlogPage", function() { return GovernmentPeopleBlogPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let GovernmentPeopleBlogPage = class GovernmentPeopleBlogPage {
    constructor() { }
    ngOnInit() {
    }
};
GovernmentPeopleBlogPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-government-people-blog',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./government-people-blog.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/government-people-blog/government-people-blog.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./government-people-blog.page.scss */ "./src/app/government-people-blog/government-people-blog.page.scss")).default]
    })
], GovernmentPeopleBlogPage);



/***/ }),

/***/ "./src/app/home/home-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/*! exports provided: HomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function() { return HomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"],
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], HomePageRoutingModule);



/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/home/home-routing.module.ts");
/* harmony import */ var _ionic_super_tabs_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-super-tabs/angular */ "./node_modules/@ionic-super-tabs/angular/__ivy_ngcc__/fesm2015/ionic-super-tabs-angular.js");
/* harmony import */ var _government_government_blog_government_government_blog_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../government-government-blog/government-government-blog.module */ "./src/app/government-government-blog/government-government-blog.module.ts");
/* harmony import */ var _government_people_blog_government_people_blog_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../government-people-blog/government-people-blog.module */ "./src/app/government-people-blog/government-people-blog.module.ts");
/* harmony import */ var _landing_home_landing_home_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../landing-home/landing-home.module */ "./src/app/landing-home/landing-home.module.ts");
/* harmony import */ var _ngo_people_blog_ngo_people_blog_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../ngo-people-blog/ngo-people-blog.module */ "./src/app/ngo-people-blog/ngo-people-blog.module.ts");
/* harmony import */ var _ngo_ngo_blog_ngo_ngo_blog_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../ngo-ngo-blog/ngo-ngo-blog.module */ "./src/app/ngo-ngo-blog/ngo-ngo-blog.module.ts");
/* harmony import */ var _people_ngo_blog_people_ngo_blog_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../people-ngo-blog/people-ngo-blog.module */ "./src/app/people-ngo-blog/people-ngo-blog.module.ts");
/* harmony import */ var _people_people_blog_people_people_blog_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../people-people-blog/people-people-blog.module */ "./src/app/people-people-blog/people-people-blog.module.ts");















let HomePageModule = class HomePageModule {
};
HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_6__["HomePageRoutingModule"],
            _ionic_super_tabs_angular__WEBPACK_IMPORTED_MODULE_7__["SuperTabsModule"],
            _government_government_blog_government_government_blog_module__WEBPACK_IMPORTED_MODULE_8__["GovernmentGovernmentBlogPageModule"],
            _government_people_blog_government_people_blog_module__WEBPACK_IMPORTED_MODULE_9__["GovernmentPeopleBlogPageModule"],
            _landing_home_landing_home_module__WEBPACK_IMPORTED_MODULE_10__["LandingHomePageModule"],
            _ngo_people_blog_ngo_people_blog_module__WEBPACK_IMPORTED_MODULE_11__["NGOPeopleBlogPageModule"],
            _ngo_ngo_blog_ngo_ngo_blog_module__WEBPACK_IMPORTED_MODULE_12__["NGONGOBlogPageModule"],
            _people_ngo_blog_people_ngo_blog_module__WEBPACK_IMPORTED_MODULE_13__["PeopleNGOBlogPageModule"],
            _people_people_blog_people_people_blog_module__WEBPACK_IMPORTED_MODULE_14__["PeoplePeopleBlogPageModule"]
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n\n:host {\n  --st-indicator-color:black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9EOlxcTW9iaWxlXFxJb25pY1xcbXlQaG9uZUFwcC9zcmNcXGFwcFxcaG9tZVxcaG9tZS5wYWdlLnNjc3MiLCJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUVBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7QUNBRjs7QURHQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQ0FGOztBREdBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBRUEsY0FBQTtFQUVBLFNBQUE7QUNGRjs7QURLQTtFQUNFLHFCQUFBO0FDRkY7O0FETUE7RUFDRSwwQkFBQTtBQ0hGIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjb250YWluZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbn1cblxuI2NvbnRhaW5lciBzdHJvbmcge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyNnB4O1xufVxuXG4jY29udGFpbmVyIHAge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xuXG4gIGNvbG9yOiAjOGM4YzhjO1xuXG4gIG1hcmdpbjogMDtcbn1cblxuI2NvbnRhaW5lciBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4vLyBob21lLnBhZ2Uuc2Nzc1xuOmhvc3QgeyAgXG4gIC0tc3QtaW5kaWNhdG9yLWNvbG9yOmJsYWNrO1xufVxuIiwiI2NvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbn1cblxuI2NvbnRhaW5lciBzdHJvbmcge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyNnB4O1xufVxuXG4jY29udGFpbmVyIHAge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICBjb2xvcjogIzhjOGM4YztcbiAgbWFyZ2luOiAwO1xufVxuXG4jY29udGFpbmVyIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbjpob3N0IHtcbiAgLS1zdC1pbmRpY2F0b3ItY29sb3I6YmxhY2s7XG59Il19 */");

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _landing_home_landing_home_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../landing-home/landing-home.page */ "./src/app/landing-home/landing-home.page.ts");
/* harmony import */ var _government_people_blog_government_people_blog_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../government-people-blog/government-people-blog.page */ "./src/app/government-people-blog/government-people-blog.page.ts");
/* harmony import */ var _ngo_people_blog_ngo_people_blog_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ngo-people-blog/ngo-people-blog.page */ "./src/app/ngo-people-blog/ngo-people-blog.page.ts");
/* harmony import */ var _people_government_blog_people_government_blog_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../people-government-blog/people-government-blog.page */ "./src/app/people-government-blog/people-government-blog.page.ts");
/* harmony import */ var _people_ngo_blog_people_ngo_blog_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../people-ngo-blog/people-ngo-blog.page */ "./src/app/people-ngo-blog/people-ngo-blog.page.ts");







let HomePage = class HomePage {
    constructor() {
        this.landing_home = _landing_home_landing_home_page__WEBPACK_IMPORTED_MODULE_2__["LandingHomePage"];
        this.government_people_blog = _government_people_blog_government_people_blog_page__WEBPACK_IMPORTED_MODULE_3__["GovernmentPeopleBlogPage"];
        this.ngo_people_blog = _ngo_people_blog_ngo_people_blog_page__WEBPACK_IMPORTED_MODULE_4__["NGOPeopleBlogPage"];
        this.people_government_blog = _people_government_blog_people_government_blog_page__WEBPACK_IMPORTED_MODULE_5__["PeopleGovernmentBlogPage"];
        this.people_ngo = _people_ngo_blog_people_ngo_blog_page__WEBPACK_IMPORTED_MODULE_6__["PeopleNGOBlogPage"];
    }
};
HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")).default]
    })
], HomePage);



/***/ }),

/***/ "./src/app/landing-home/landing-home.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/landing-home/landing-home.module.ts ***!
  \*****************************************************/
/*! exports provided: LandingHomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingHomePageModule", function() { return LandingHomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _landing_home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./landing-home.page */ "./src/app/landing-home/landing-home.page.ts");





// import { LandingHomePageRoutingModule } from './landing-home-routing.module';

let LandingHomePageModule = class LandingHomePageModule {
};
LandingHomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"]
            // LandingHomePageRoutingModule
        ],
        declarations: [_landing_home_page__WEBPACK_IMPORTED_MODULE_5__["LandingHomePage"]],
        entryComponents: [_landing_home_page__WEBPACK_IMPORTED_MODULE_5__["LandingHomePage"]]
    })
], LandingHomePageModule);



/***/ }),

/***/ "./src/app/landing-home/landing-home.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/landing-home/landing-home.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xhbmRpbmctaG9tZS9sYW5kaW5nLWhvbWUucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/landing-home/landing-home.page.ts":
/*!***************************************************!*\
  !*** ./src/app/landing-home/landing-home.page.ts ***!
  \***************************************************/
/*! exports provided: LandingHomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingHomePage", function() { return LandingHomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let LandingHomePage = class LandingHomePage {
    constructor() {
        this.people = [
            {
                "like": "17",
                "name": "GovernA ",
                "title": "Douglas  Pace",
                "description": "Founded in 1829 on an isthmus between Lake Monona and Lake Mendota, Madison was named the capital of the Wisconsin Territory in 1836."
            },
            {
                "like": "910",
                "name": "NGOB",
                "title": "Mcleod  Mueller",
                "description": "Keep close to Nature's heart... and break clear away, once in awhile,\
      and climb a mountain or spend a week in the woods. Wash your spirit clean.\
      and climb a mountain or spend a week in the woods. Wash your spirit clean."
            },
            {
                "like": "412",
                "name": "GovernC",
                "title": "Day  Meyers",
                "description": "Keep close to Nature's heart... and break clear away, once in awhile,\
      and climb a mountain or spend a week in the woods. Wash your spirit clean.\
      and climb a mountain or spend a week in the woods. Wash your spirit clean."
            },
            {
                "like": "45",
                "name": "NGOD",
                "title": "Aguirre  Ellis",
                "description": "Keep close to Nature's heart... and break clear away, once in awhile,\
      and climb a mountain or spend a week in the woods. Wash your spirit clean.\
      and climb a mountain or spend a week in the woods. Wash your spirit clean."
            },
            {
                "like": "67",
                "name": "GovernE",
                "title": "Cook  Tyson",
                "description": "Keep close to Nature's heart... and break clear away, once in awhile,\
      and climb a mountain or spend a week in the woods. Wash your spirit clean.\
      and climb a mountain or spend a week in the woods. Wash your spirit clean."
            },
            {
                "like": "45",
                "name": "NGOF",
                "title": "Cook  Tyson",
                "description": "Keep close to Nature's heart... and break clear away, once in awhile,\
      and climb a mountain or spend a week in the woods. Wash your spirit clean.\
      and climb a mountain or spend a week in the woods. Wash your spirit clean."
            }
        ];
    }
    ngOnInit() {
    }
};
LandingHomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-landing-home',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./landing-home.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/landing-home/landing-home.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./landing-home.page.scss */ "./src/app/landing-home/landing-home.page.scss")).default]
    })
], LandingHomePage);



/***/ }),

/***/ "./src/app/ngo-ngo-blog/ngo-ngo-blog.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/ngo-ngo-blog/ngo-ngo-blog.module.ts ***!
  \*****************************************************/
/*! exports provided: NGONGOBlogPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NGONGOBlogPageModule", function() { return NGONGOBlogPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ngo_ngo_blog_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ngo-ngo-blog.page */ "./src/app/ngo-ngo-blog/ngo-ngo-blog.page.ts");





// import { NGONGOBlogPageRoutingModule } from './ngo-ngo-blog-routing.module';

let NGONGOBlogPageModule = class NGONGOBlogPageModule {
};
NGONGOBlogPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"]
            // NGONGOBlogPageRoutingModule
        ],
        declarations: [_ngo_ngo_blog_page__WEBPACK_IMPORTED_MODULE_5__["NGONGOBlogPage"]],
        entryComponents: [_ngo_ngo_blog_page__WEBPACK_IMPORTED_MODULE_5__["NGONGOBlogPage"]]
    })
], NGONGOBlogPageModule);



/***/ }),

/***/ "./src/app/ngo-ngo-blog/ngo-ngo-blog.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/ngo-ngo-blog/ngo-ngo-blog.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25nby1uZ28tYmxvZy9uZ28tbmdvLWJsb2cucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/ngo-ngo-blog/ngo-ngo-blog.page.ts":
/*!***************************************************!*\
  !*** ./src/app/ngo-ngo-blog/ngo-ngo-blog.page.ts ***!
  \***************************************************/
/*! exports provided: NGONGOBlogPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NGONGOBlogPage", function() { return NGONGOBlogPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let NGONGOBlogPage = class NGONGOBlogPage {
    constructor() { }
    ngOnInit() {
    }
};
NGONGOBlogPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ngo-ngo-blog',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./ngo-ngo-blog.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ngo-ngo-blog/ngo-ngo-blog.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./ngo-ngo-blog.page.scss */ "./src/app/ngo-ngo-blog/ngo-ngo-blog.page.scss")).default]
    })
], NGONGOBlogPage);



/***/ }),

/***/ "./src/app/ngo-people-blog/ngo-people-blog.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/ngo-people-blog/ngo-people-blog.module.ts ***!
  \***********************************************************/
/*! exports provided: NGOPeopleBlogPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NGOPeopleBlogPageModule", function() { return NGOPeopleBlogPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ngo_people_blog_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ngo-people-blog.page */ "./src/app/ngo-people-blog/ngo-people-blog.page.ts");





// import { NGOPeopleBlogPageRoutingModule } from './ngo-people-blog-routing.module';

let NGOPeopleBlogPageModule = class NGOPeopleBlogPageModule {
};
NGOPeopleBlogPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"]
            // NGOPeopleBlogPageRoutingModule
        ],
        declarations: [_ngo_people_blog_page__WEBPACK_IMPORTED_MODULE_5__["NGOPeopleBlogPage"]],
        entryComponents: [_ngo_people_blog_page__WEBPACK_IMPORTED_MODULE_5__["NGOPeopleBlogPage"]]
    })
], NGOPeopleBlogPageModule);



/***/ }),

/***/ "./src/app/ngo-people-blog/ngo-people-blog.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/ngo-people-blog/ngo-people-blog.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25nby1wZW9wbGUtYmxvZy9uZ28tcGVvcGxlLWJsb2cucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/ngo-people-blog/ngo-people-blog.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/ngo-people-blog/ngo-people-blog.page.ts ***!
  \*********************************************************/
/*! exports provided: NGOPeopleBlogPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NGOPeopleBlogPage", function() { return NGOPeopleBlogPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let NGOPeopleBlogPage = class NGOPeopleBlogPage {
    constructor() { }
    ngOnInit() {
    }
};
NGOPeopleBlogPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ngo-people-blog',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./ngo-people-blog.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ngo-people-blog/ngo-people-blog.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./ngo-people-blog.page.scss */ "./src/app/ngo-people-blog/ngo-people-blog.page.scss")).default]
    })
], NGOPeopleBlogPage);



/***/ }),

/***/ "./src/app/people-government-blog/people-government-blog.page.scss":
/*!*************************************************************************!*\
  !*** ./src/app/people-government-blog/people-government-blog.page.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Blb3BsZS1nb3Zlcm5tZW50LWJsb2cvcGVvcGxlLWdvdmVybm1lbnQtYmxvZy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/people-government-blog/people-government-blog.page.ts":
/*!***********************************************************************!*\
  !*** ./src/app/people-government-blog/people-government-blog.page.ts ***!
  \***********************************************************************/
/*! exports provided: PeopleGovernmentBlogPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeopleGovernmentBlogPage", function() { return PeopleGovernmentBlogPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let PeopleGovernmentBlogPage = class PeopleGovernmentBlogPage {
    constructor() { }
    ngOnInit() {
    }
};
PeopleGovernmentBlogPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-people-government-blog',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./people-government-blog.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/people-government-blog/people-government-blog.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./people-government-blog.page.scss */ "./src/app/people-government-blog/people-government-blog.page.scss")).default]
    })
], PeopleGovernmentBlogPage);



/***/ }),

/***/ "./src/app/people-ngo-blog/people-ngo-blog.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/people-ngo-blog/people-ngo-blog.module.ts ***!
  \***********************************************************/
/*! exports provided: PeopleNGOBlogPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeopleNGOBlogPageModule", function() { return PeopleNGOBlogPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _people_ngo_blog_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./people-ngo-blog.page */ "./src/app/people-ngo-blog/people-ngo-blog.page.ts");





// import { PeopleNGOBlogPageRoutingModule } from './people-ngo-blog-routing.module';

let PeopleNGOBlogPageModule = class PeopleNGOBlogPageModule {
};
PeopleNGOBlogPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"]
            // PeopleNGOBlogPageRoutingModule
        ],
        declarations: [_people_ngo_blog_page__WEBPACK_IMPORTED_MODULE_5__["PeopleNGOBlogPage"]],
        entryComponents: [_people_ngo_blog_page__WEBPACK_IMPORTED_MODULE_5__["PeopleNGOBlogPage"]]
    })
], PeopleNGOBlogPageModule);



/***/ }),

/***/ "./src/app/people-ngo-blog/people-ngo-blog.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/people-ngo-blog/people-ngo-blog.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Blb3BsZS1uZ28tYmxvZy9wZW9wbGUtbmdvLWJsb2cucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/people-ngo-blog/people-ngo-blog.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/people-ngo-blog/people-ngo-blog.page.ts ***!
  \*********************************************************/
/*! exports provided: PeopleNGOBlogPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeopleNGOBlogPage", function() { return PeopleNGOBlogPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let PeopleNGOBlogPage = class PeopleNGOBlogPage {
    constructor() { }
    ngOnInit() {
    }
};
PeopleNGOBlogPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-people-ngo-blog',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./people-ngo-blog.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/people-ngo-blog/people-ngo-blog.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./people-ngo-blog.page.scss */ "./src/app/people-ngo-blog/people-ngo-blog.page.scss")).default]
    })
], PeopleNGOBlogPage);



/***/ }),

/***/ "./src/app/people-people-blog/people-people-blog.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/people-people-blog/people-people-blog.module.ts ***!
  \*****************************************************************/
/*! exports provided: PeoplePeopleBlogPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeoplePeopleBlogPageModule", function() { return PeoplePeopleBlogPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _people_people_blog_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./people-people-blog.page */ "./src/app/people-people-blog/people-people-blog.page.ts");





// import { PeoplePeopleBlogPageRoutingModule } from './people-people-blog-routing.module';

let PeoplePeopleBlogPageModule = class PeoplePeopleBlogPageModule {
};
PeoplePeopleBlogPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"]
            // PeoplePeopleBlogPageRoutingModule
        ],
        declarations: [_people_people_blog_page__WEBPACK_IMPORTED_MODULE_5__["PeoplePeopleBlogPage"]],
        entryComponents: [_people_people_blog_page__WEBPACK_IMPORTED_MODULE_5__["PeoplePeopleBlogPage"]]
    })
], PeoplePeopleBlogPageModule);



/***/ }),

/***/ "./src/app/people-people-blog/people-people-blog.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/people-people-blog/people-people-blog.page.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Blb3BsZS1wZW9wbGUtYmxvZy9wZW9wbGUtcGVvcGxlLWJsb2cucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/people-people-blog/people-people-blog.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/people-people-blog/people-people-blog.page.ts ***!
  \***************************************************************/
/*! exports provided: PeoplePeopleBlogPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeoplePeopleBlogPage", function() { return PeoplePeopleBlogPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let PeoplePeopleBlogPage = class PeoplePeopleBlogPage {
    constructor() { }
    ngOnInit() {
    }
};
PeoplePeopleBlogPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-people-people-blog',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./people-people-blog.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/people-people-blog/people-people-blog.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./people-people-blog.page.scss */ "./src/app/people-people-blog/people-people-blog.page.scss")).default]
    })
], PeoplePeopleBlogPage);



/***/ })

}]);
//# sourceMappingURL=home-home-module-es2015.js.map