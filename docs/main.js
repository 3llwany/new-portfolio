"use strict";
(self["webpackChunkportfolio"] = self["webpackChunkportfolio"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _shared_routes_full_layout_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/routes/full-layout.routes */ 578);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);




const appRoutes = [
// {
// 	path: "",
// 	redirectTo: "profile",
// 	pathMatch: "full",
// },
{
  path: "",
  //component: FullLayoutComponent,
  loadComponent: () => __webpack_require__.e(/*! import() */ "src_app_layouts_full_full-layout_component_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../app/layouts/full/full-layout.component */ 6141)).then(c => c.FullLayoutComponent),
  data: {
    title: "full Views"
  },
  children: _shared_routes_full_layout_routes__WEBPACK_IMPORTED_MODULE_0__.Full_ROUTES
},
// {
//   path: "",
//   component: ContentLayoutComponent,
//   loadComponent: () => import('../app/layouts/content/content-layout.component').then(c => c.ContentLayoutComponent),
//   data: {title: "content Views"},
//   children: CONTENT_ROUTES,
// },
{
  path: "**",
  redirectTo: "pages/error"
}];
class AppRoutingModule {
  static #_ = this.ɵfac = function AppRoutingModule_Factory(t) {
    return new (t || AppRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: AppRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(appRoutes, {
      //	preloadingStrategy: PreloadAllModules,
      //relativeLinkResolution: "legacy",
    }), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 9151);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ 3488);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/effects */ 5405);
/* harmony import */ var ngx_lottie__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-lottie */ 9906);
/* harmony import */ var app_store_counter_counter_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/store/counter/counter.actions */ 7425);
/* harmony import */ var app_store_counter_counter_effect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/store/counter/counter.effect */ 1243);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);












function AppComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 2)(1, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "ng-lottie", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("options", ctx_r0.options);
  }
}
class AppComponent {
  constructor(router, store) {
    this.router = router;
    this.loading = false;
    this.options = {
      path: 'assets/images/welcome.json'
    };
    store.dispatch((0,app_store_counter_counter_actions__WEBPACK_IMPORTED_MODULE_0__.init)());
  }
  ngOnInit() {
    this.subscription = this.router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__.NavigationEnd)).subscribe(() => window.scrollTo(0, 0));
    // setTimeout(() => {
    //   this.loading = false;
    //
    // }, 4000);
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
  static #_ = this.ɵfac = function AppComponent_Factory(t) {
    return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_5__.Store));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["app-root"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([app_store_counter_counter_effect__WEBPACK_IMPORTED_MODULE_1__.CounterEffects]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
    decls: 3,
    vars: 1,
    consts: [[1, "router-outlet"], ["class", "page-loading", 4, "ngIf"], [1, "page-loading"], [1, "d-block", "lottieSpan"], [3, "options"]],
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, AppComponent_div_2_Template, 3, 1, "div", 1);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.loading);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterOutlet, _ngrx_effects__WEBPACK_IMPORTED_MODULE_7__.EffectsModule, _ngrx_store__WEBPACK_IMPORTED_MODULE_5__.StoreModule, ngx_lottie__WEBPACK_IMPORTED_MODULE_8__.LottieModule, ngx_lottie__WEBPACK_IMPORTED_MODULE_8__.LottieComponent],
    encapsulation: 2
  });
}

/***/ }),

/***/ 3994:
/*!*******************************************************!*\
  !*** ./src/app/components/banner/banner.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BannerComponent": () => (/* binding */ BannerComponent)
/* harmony export */ });
/* harmony import */ var app_shared_resources_assets_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/resources/assets_manager */ 4179);
/* harmony import */ var app_components_banner_social_links__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/components/banner/social-links */ 1469);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var ngx_device_detector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-device-detector */ 1431);





function BannerComponent_a_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const app_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", app_r1.btn)("href", app_r1.url, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](app_r1.icon);
  }
}
class BannerComponent {
  constructor(deviceService) {
    this.deviceService = deviceService;
    this.assetsManager = app_shared_resources_assets_manager__WEBPACK_IMPORTED_MODULE_0__.AssetsManager;
  }
  ngOnInit() {
    this.socialLinks = app_components_banner_social_links__WEBPACK_IMPORTED_MODULE_1__.SOCIALLINKS;
  }
  static #_ = this.ɵfac = function BannerComponent_Factory(t) {
    return new (t || BannerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_device_detector__WEBPACK_IMPORTED_MODULE_3__.DeviceDetectorService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: BannerComponent,
    selectors: [["app-banner"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
    decls: 13,
    vars: 6,
    consts: [[1, "card"], [1, "user-profile-images"], ["alt", "banner", "width", "100%", 1, "img-fluid", "rounded-top", "user-timeline-image", 3, "src"], ["alt", "User Profile Image", "height", "140", "width", "140", 1, "user-profile-image", "rounded", 3, "src"], [1, "user-profile-text"], [1, "profile-text-color", "mb-0"], [1, "card-content"], [1, "card-body"], [1, "user-profile-buttons", "d-flex", "justify-content-center", "justify-content-sm-start"], ["class", "btn btn-social-icon mr-2", "target", "_blank", 3, "ngClass", "href", 4, "ngFor", "ngForOf"], ["target", "_blank", 1, "btn", "btn-social-icon", "mr-2", 3, "ngClass", "href"]],
    template: function BannerComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 2)(3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4)(5, "h4", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Sayed Elwany");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Front-End Angular Developer ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 6)(10, "div", 7)(11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, BannerComponent_a_12_Template, 2, 4, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx.assetsManager.banner, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("style.height", !ctx.deviceService.isDesktop() ? "520px" : "auto");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx.assetsManager.big_profile, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("username", !ctx.deviceService.isDesktop());
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.socialLinks);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgFor],
    styles: [".user-timeline-image[_ngcontent-%COMP%] {\n  filter: brightness(0.6);\n}\n\n.username[_ngcontent-%COMP%] {\n  margin-left: -95px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhbm5lci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVFLHVCQUFBO0FBQUY7O0FBR0E7RUFDRSxrQkFBQTtBQUFGIiwiZmlsZSI6ImJhbm5lci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi51c2VyLXRpbWVsaW5lLWltYWdlIHtcclxuICAvLyBoZWlnaHQ6IDUyMHB4O1xyXG4gIGZpbHRlcjogYnJpZ2h0bmVzcyguNik7XHJcbn1cclxuXHJcbi51c2VybmFtZSB7XHJcbiAgbWFyZ2luLWxlZnQ6IC05NXB4O1xyXG59XHJcbiJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9iYW5uZXIvYmFubmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUUsdUJBQUE7QUFBRjs7QUFHQTtFQUNFLGtCQUFBO0FBQUY7QUFDQSx3Y0FBd2MiLCJzb3VyY2VzQ29udGVudCI6WyIudXNlci10aW1lbGluZS1pbWFnZSB7XHJcbiAgLy8gaGVpZ2h0OiA1MjBweDtcclxuICBmaWx0ZXI6IGJyaWdodG5lc3MoLjYpO1xyXG59XHJcblxyXG4udXNlcm5hbWUge1xyXG4gIG1hcmdpbi1sZWZ0OiAtOTVweDtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 1469:
/*!***************************************************!*\
  !*** ./src/app/components/banner/social-links.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SOCIALLINKS": () => (/* binding */ SOCIALLINKS)
/* harmony export */ });
const SOCIALLINKS = [{
  url: "https://www.facebook.com/3llwaNy",
  btn: "btn-facebook",
  icon: "fa fa-facebook"
}, {
  url: "https://twitter.com/3llwaNy",
  btn: "btn-twitter",
  icon: "fa fa-twitter"
}, {
  url: "mailto:sayedelwany03@gmail.com",
  btn: "btn-google",
  icon: "fa fa-google"
}, {
  url: "https://api.whatsapp.com/send?phone=2001117731605",
  //	url: "https://wa.me/+201117731605",
  btn: "btn-success",
  icon: "fa fa-whatsapp"
}, {
  url: "https://github.com/3llwany",
  btn: "btn-dark",
  icon: "fa fa-github"
}, {
  url: "tel:01117731605",
  btn: "btn-info",
  icon: "fa fa-phone"
}];

/***/ }),

/***/ 7094:
/*!*********************************************************!*\
  !*** ./src/app/components/profile/profile.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileComponent": () => (/* binding */ ProfileComponent)
/* harmony export */ });
/* harmony import */ var app_shared_resources_assets_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/resources/assets_manager */ 4179);
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../projects/projects.component */ 4935);
/* harmony import */ var _banner_banner_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../banner/banner.component */ 3994);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




class ProfileComponent {
  constructor() {
    this.assetsManager = app_shared_resources_assets_manager__WEBPACK_IMPORTED_MODULE_0__.AssetsManager;
  }
  ngOnInit() {}
  static #_ = this.ɵfac = function ProfileComponent_Factory(t) {
    return new (t || ProfileComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: ProfileComponent,
    selectors: [["app-profile"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
    decls: 70,
    vars: 0,
    consts: [[1, "page-user-profile"], [1, "row", "justify-content-center", "align-items-center"], [1, "col-12"], [1, "row", "profile-info-posts"], [1, "col-lg-3", "col-12"], [1, "row"], [1, "card"], [1, "card-header", "d-flex", "justify-content-between", "align-items-center"], [1, "card-title", "m-0"], [1, "cursor-pointer"], [1, "ft-more-vertical-"], [1, "card-content"], [1, "card-body"], [1, "m-0"], [1, "card-header", "d-flex", "justify-content-left", "align-items-center"], [1, "fa", "fa-graduation-cap", "font-large-1", "mr-2"], [1, "list-unstyled", "mb-0"], [1, "d-flex", "align-items-center", "mb-2"], [1, "ft-briefcase", "mr-2", "cursor-pointer"], ["href", "http://www.akhbaracademy.edu.eg/", "target", "_blank"], [1, "ft-file-text", "mr-2", "cursor-pointer"], [1, "card-header", "d-flex", "justify-left-between", "align-items-center"], [1, "fa", "fa-code", "font-large-1", "mr-2"], [1, "d-flex", "align-items-center"], ["href", "https://mashura.co/", "target", "_blank"], ["href", "https://mashura.co/"], ["href", "javascript:;"], [1, "col-lg-9", "col-12"]],
    template: function ProfileComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "app-banner");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 3)(5, "div", 4)(6, "div", 5)(7, "div", 2)(8, "div", 6)(9, "div", 7)(10, "h4", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 11)(15, "div", 12)(16, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, " I am interested in Web Programming, Building websites. Worked as a freelancer Front End Developer. I am keen to gain more experience in the field. For this reason, i am looking for a company willing to offer me a placement among their web designers. I hope to be Full Stack Web Developer, and i am learning the track now. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 2)(19, "div", 6)(20, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](21, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "h4", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "Education");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "div", 11)(25, "div", 12)(26, "ul", 16)(27, "li", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](28, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, " Bachelor\u2019s degree in Computer Science, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, "Akhbar El-Yom Academy ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "li", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](34, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36, " Cumulative grade: Very Good with honors. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "li", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](38, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](40, " Graduation Project: Tracking system (web app, mobile app and GPS device) for helping families finding and keep their children safe from kidnapping. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "div", 2)(42, "div", 6)(43, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](44, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "h4", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](46, "Work Experience");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "div", 11)(48, "div", 12)(49, "ul", 16)(50, "li", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](51, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](53, " Angular Developer at ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](55, "Mashura Consultants");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](56, "li", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](57, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](59, " Flutter Developer at ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](60, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](61, "Mashura Consultants ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](62, "li", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](63, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](64, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](65, " Front-End Developer at ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](66, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](67, "Soft Square");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](68, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](69, "app-projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      }
    },
    dependencies: [_banner_banner_component__WEBPACK_IMPORTED_MODULE_2__.BannerComponent, _projects_projects_component__WEBPACK_IMPORTED_MODULE_1__.ProjectsComponent],
    styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9maWxlLmNvbXBvbmVudC5zY3NzIn0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLG9LQUFvSyIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 4935:
/*!***********************************************************!*\
  !*** ./src/app/components/projects/projects.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectsComponent": () => (/* binding */ ProjectsComponent)
/* harmony export */ });
/* harmony import */ var app_components_projects_projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/components/projects/projects */ 3174);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);



function ProjectsComponent_div_3_div_1_a_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Live Preview");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const project_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", project_r3.url, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
  }
}
function ProjectsComponent_div_3_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 5)(1, "div", 6)(2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 9)(5, "h4", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 11)(8, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, ProjectsComponent_div_3_div_1_a_11_Template, 2, 1, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const project_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", project_r3.img, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("alt", project_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](project_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", project_r3.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](project_r3.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", project_r3.url);
  }
}
function ProjectsComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ProjectsComponent_div_3_div_1_Template, 12, 6, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.projects);
  }
}
function ProjectsComponent_div_4_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 17)(1, "div", 18)(2, "div", 3)(3, "div", 19)(4, "div", 20)(5, "div", 21)(6, "div")(7, "h4", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Go somewhere");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 24)(14, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "img", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const project_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](project_r7.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](project_r7.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", project_r7.img, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("alt", project_r7.name);
  }
}
function ProjectsComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ProjectsComponent_div_4_div_1_Template, 16, 4, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.projects);
  }
}
class ProjectsComponent {
  constructor() {
    this.projects = app_components_projects_projects__WEBPACK_IMPORTED_MODULE_0__.PROJECTS;
  }
  ngOnInit() {}
  static #_ = this.ɵfac = function ProjectsComponent_Factory(t) {
    return new (t || ProjectsComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: ProjectsComponent,
    selectors: [["app-projects"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
    decls: 5,
    vars: 2,
    consts: [[1, "content-header"], [1, "fa", "fa-suitcase", "font-large-1", "mr-1", "secondary"], ["class", "row", 4, "ngIf"], [1, "row"], ["class", "col-md-4 col-12", 4, "ngFor", "ngForOf"], [1, "col-md-4", "col-12"], [1, "card", "project"], [1, "card-content"], [1, "img-fluid", "project-img", 3, "src", "alt"], [1, "card-header"], [1, "card-title"], [1, "card-body", 3, "title"], [1, "card-text"], [1, "card-footer", "pt-0", "mt-1"], ["class", "card-link info", "target", "_blank", 3, "href", 4, "ngIf"], ["target", "_blank", 1, "card-link", "info", 3, "href"], ["class", "col-6", 4, "ngFor", "ngForOf"], [1, "col-6"], [1, "card", "overflow-hidden", "vertical-card"], [1, "col-sm-6", "col-12", "d-flex", "align-items-center"], [1, "card-body"], [1, "align-self-center"], [1, "card-title", "mb-3"], ["type", "button", 1, "btn", "btn-danger"], [1, "col-sm-6", "col-12"], [1, "card-img"], [1, "img-fluid", "img", 3, "src", "alt"]],
    template: function ProjectsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Projects\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ProjectsComponent_div_3_Template, 2, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ProjectsComponent_div_4_Template, 2, 1, "div", 2);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", false);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgFor],
    styles: [".content-header[_ngcontent-%COMP%] {\n  color: #616d89;\n  display: inline-block;\n  border-bottom: 4px solid #616d89;\n}\n\n.project-img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 200px !important;\n  transition: all 0.3s ease-in-out;\n}\n\n.project-img[_ngcontent-%COMP%]:hover {\n  filter: brightness(0.8);\n}\n\n.project[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  height: 115px;\n  overflow: hidden;\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 4;\n}\n\n.vertical-card[_ngcontent-%COMP%]   .card-text[_ngcontent-%COMP%] {\n  overflow: hidden !important;\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 2;\n}\n.vertical-card[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%] {\n  height: 200px;\n  overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsZ0NBQUE7QUFDRjs7QUFDQTtFQUNFLFdBQUE7RUFDQSx3QkFBQTtFQUNBLGdDQUFBO0FBRUY7O0FBQ0E7RUFDRSx1QkFBQTtBQUVGOztBQUNBO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSw0QkFBQTtFQUNBLHFCQUFBO0FBRUY7O0FBRUU7RUFDRywyQkFBQTtFQUNELG9CQUFBO0VBQ0EsNEJBQUE7RUFDQSxxQkFBQTtBQUNKO0FBRUU7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7QUFBSiIsImZpbGUiOiJwcm9qZWN0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50LWhlYWRlcntcclxuICBjb2xvcjogIzYxNmQ4OTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7ICBcclxuICBib3JkZXItYm90dG9tOiA0cHggc29saWQgIzYxNmQ4OTtcclxufVxyXG4ucHJvamVjdC1pbWcge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMjAwcHggIWltcG9ydGFudDtcclxuICB0cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4ucHJvamVjdC1pbWc6aG92ZXIge1xyXG4gIGZpbHRlcjogYnJpZ2h0bmVzcyguOCk7XHJcbn1cclxuXHJcbi5wcm9qZWN0IC5jYXJkLWJvZHkge1xyXG4gIGhlaWdodDogMTE1cHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xyXG4gIC13ZWJraXQtbGluZS1jbGFtcDogNDtcclxufVxyXG5cclxuLnZlcnRpY2FsLWNhcmQge1xyXG4gIC5jYXJkLXRleHQge1xyXG4gICAgIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcclxuICAgIC13ZWJraXQtbGluZS1jbGFtcDogMjtcclxuICB9XHJcblxyXG4gIC5pbWd7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB9XHJcbn1cclxuIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9wcm9qZWN0cy9wcm9qZWN0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSxxQkFBQTtFQUNBLGdDQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxXQUFBO0VBQ0Esd0JBQUE7RUFDQSxnQ0FBQTtBQUVGOztBQUNBO0VBQ0UsdUJBQUE7QUFFRjs7QUFDQTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EsNEJBQUE7RUFDQSxxQkFBQTtBQUVGOztBQUVFO0VBQ0csMkJBQUE7RUFDRCxvQkFBQTtFQUNBLDRCQUFBO0VBQ0EscUJBQUE7QUFDSjtBQUVFO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0FBQUo7QUFDQSw0K0NBQTQrQyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50LWhlYWRlcntcclxuICBjb2xvcjogIzYxNmQ4OTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7ICBcclxuICBib3JkZXItYm90dG9tOiA0cHggc29saWQgIzYxNmQ4OTtcclxufVxyXG4ucHJvamVjdC1pbWcge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMjAwcHggIWltcG9ydGFudDtcclxuICB0cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4ucHJvamVjdC1pbWc6aG92ZXIge1xyXG4gIGZpbHRlcjogYnJpZ2h0bmVzcyguOCk7XHJcbn1cclxuXHJcbi5wcm9qZWN0IC5jYXJkLWJvZHkge1xyXG4gIGhlaWdodDogMTE1cHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xyXG4gIC13ZWJraXQtbGluZS1jbGFtcDogNDtcclxufVxyXG5cclxuLnZlcnRpY2FsLWNhcmQge1xyXG4gIC5jYXJkLXRleHQge1xyXG4gICAgIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcclxuICAgIC13ZWJraXQtbGluZS1jbGFtcDogMjtcclxuICB9XHJcblxyXG4gIC5pbWd7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 3174:
/*!*************************************************!*\
  !*** ./src/app/components/projects/projects.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PROJECTS": () => (/* binding */ PROJECTS)
/* harmony export */ });
/* harmony import */ var app_shared_resources_assets_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/resources/assets_manager */ 4179);

var assetsManager = app_shared_resources_assets_manager__WEBPACK_IMPORTED_MODULE_0__.AssetsManager;
const PROJECTS = [{
  id: 1,
  name: "HR System",
  url: "https://mashura-hrms.netlify.app",
  img: assetsManager.hr,
  description: "Create full structure pattern for HR project, create reusable and dynamic  functions, like store employee information and support various human resource functions, such as benefits, payroll, recruiting, training, financial,attendance, self Service, org structure, employees structure, etc."
}, {
  id: 2,
  name: "Schools Managements",
  url: "https://schoolsystem.cloudiax.com",
  img: assetsManager.school,
  description: "Dashboard system platform that managed E-schools."
}, {
  id: 3,
  name: "Mozakrety",
  url: "https://mozakrety.com",
  img: assetsManager.mozakrety,
  description: "A massive E-learning system platform that managed educational centers with their students, teachers and coursessystem integrated with many payment methods and integrated with cloud servers have more security integrated with zoomus for live videos."
}, {
  id: 4,
  name: "OGSET",
  url: "https://ogset.co",
  img: assetsManager.ogset,
  description: "Specialized E-exams to prepare people to work in the oil field.\n" + "Intelligent system generate different exams that not allow repeat questions.\n" + "\n" + "Integrated with many payment methods."
}, {
  id: 5,
  name: "Egypt-Training",
  url: "https://trainingmisrangular.cloudiax.com",
  img: assetsManager.EGYTraining,
  description: "Manage online Training for Employees of organization.\n" + "System integrated with HR Systems.\n" + "Integrated with cloud servers have more security."
}, {
  id: 6,
  name: "Online Courses",
  url: "https://trainingmisrangular.cloudiax.com",
  img: assetsManager.ksa_courses,
  description: "A massive E-COURSES system platform that managed online Courses."
}, {
  id: 7,
  name: "Kw Oxford",
  url: "https://trainingmisrangular.cloudiax.com",
  img: assetsManager.kw_oxford,
  description: "تهدف بشكل فعال إلى تسهيل عملية التعليم بين المتعلم والمعلم وايجاد سبل التعاون بين ولي الأمر والطالب  مساعدة ولي الأمر في شرح وحل الواجبات\n" + "الدخول المباشر من خلال المنصة لشرح النقاط الصعبة فى الدرس\n" + "(اختبارات أسبوعية واختبارات قصيرة) يتم إرسالها للطالب من خلال المنصة ويتم تصحيحها وإعادة إرسالها\n" + "كورس لغة ثابت إنجليزية عام  للمراحل الابتدائية والمتوسطة يشمل محادثات وقواعد تهدف لتقوية اللغة عند الطالب معلم ومعلمة قرآن كريم حصص أسبوعية ثابتة "
}
// {
//   id: 8,
//   name: "ZH-Transportation",
//   url: "https://trainingmisrangular.cloudiax.com",
//   img: assetsManager.zhTransportation,
//   description: "Dashboard for transportation app."
// },
];

/***/ }),

/***/ 4179:
/*!****************************************************!*\
  !*** ./src/app/shared/resources/assets_manager.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AssetsManager": () => (/* binding */ AssetsManager)
/* harmony export */ });
class AssetsManager {
  static #_ = this.profile = 'assets/images/profile.png';
  static #_2 = this.big_profile = 'assets/images/profile.png'; //  public static banner: string = 'assets/images/banner-4.jpg';
  static #_3 = this.banner = 'assets/images/banner.png';
  static #_4 = this.banner1 = 'assets/images/banner1.jpg';
  static #_5 = this.hr = 'assets/images/projects/hr.png';
  static #_6 = this.school = 'assets/images/projects/school.jpg';
  static #_7 = this.mozakrety = 'assets/images/projects/mozakrety.jpg';
  static #_8 = this.ogset = 'assets/images/projects/ogset.jpg';
  static #_9 = this.EGYTraining = 'assets/images/projects/egyTraning.jpg';
  static #_10 = this.ksa_courses = 'assets/images/projects/ksa_courses.png';
  static #_11 = this.kw_oxford = 'assets/images/projects/kw_oxford.png';
  static #_12 = this.zhTransportation = 'assets/images/projects/kw_oxford.png';
}

/***/ }),

/***/ 578:
/*!*****************************************************!*\
  !*** ./src/app/shared/routes/full-layout.routes.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Full_ROUTES": () => (/* binding */ Full_ROUTES)
/* harmony export */ });
/* harmony import */ var app_components_profile_profile_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/components/profile/profile.component */ 7094);

//Route for content layout with sidebar, navbar and footer.
const Full_ROUTES = [
// {
//   path: 'page',
//   loadChildren: () => import('../../page/page.module').then(m => m.PageModule)
// }
{
  path: "",
  component: app_components_profile_profile_component__WEBPACK_IMPORTED_MODULE_0__.ProfileComponent
}];

/***/ }),

/***/ 294:
/*!***************************************************!*\
  !*** ./src/app/shared/services/window.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BrowserWindowRef": () => (/* binding */ BrowserWindowRef),
/* harmony export */   "WINDOW": () => (/* binding */ WINDOW),
/* harmony export */   "WINDOW_PROVIDERS": () => (/* binding */ WINDOW_PROVIDERS),
/* harmony export */   "WindowRef": () => (/* binding */ WindowRef),
/* harmony export */   "browserWindowProvider": () => (/* binding */ browserWindowProvider),
/* harmony export */   "windowFactory": () => (/* binding */ windowFactory),
/* harmony export */   "windowProvider": () => (/* binding */ windowProvider)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);



/* Create a new injection token for injecting the window into a component. */
const WINDOW = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('WindowToken');
/* Define abstract class for obtaining reference to the global window object. */
class WindowRef {
  get nativeWindow() {
    throw new Error('Not implemented.');
  }
}
/* Define class that implements the abstract class and returns the native window object. */
class BrowserWindowRef extends WindowRef {
  constructor() {
    super();
  }
  get nativeWindow() {
    return window;
  }
  static #_ = this.ɵfac = function BrowserWindowRef_Factory(t) {
    return new (t || BrowserWindowRef)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: BrowserWindowRef,
    factory: BrowserWindowRef.ɵfac
  });
}
/* Create an factory function that returns the native window object. */
function windowFactory(browserWindowRef, platformId) {
  if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_1__.isPlatformBrowser)(platformId)) {
    return browserWindowRef.nativeWindow;
  }
  return new Object();
}
/* Create a injectable provider for the WindowRef token that uses the BrowserWindowRef class. */
const browserWindowProvider = {
  provide: WindowRef,
  useClass: BrowserWindowRef
};
/* Create an injectable provider that uses the windowFactory function for returning the native window object. */
const windowProvider = {
  provide: WINDOW,
  useFactory: windowFactory,
  deps: [WindowRef, _angular_core__WEBPACK_IMPORTED_MODULE_0__.PLATFORM_ID]
};
/* Create an array of providers. */
const WINDOW_PROVIDERS = [browserWindowProvider, windowProvider];

/***/ }),

/***/ 7425:
/*!**************************************************!*\
  !*** ./src/app/store/counter/counter.actions.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DECREMENT": () => (/* binding */ DECREMENT),
/* harmony export */   "INCREMENT": () => (/* binding */ INCREMENT),
/* harmony export */   "INIT": () => (/* binding */ INIT),
/* harmony export */   "RESET": () => (/* binding */ RESET),
/* harmony export */   "SET": () => (/* binding */ SET),
/* harmony export */   "decrement": () => (/* binding */ decrement),
/* harmony export */   "increment": () => (/* binding */ increment),
/* harmony export */   "init": () => (/* binding */ init),
/* harmony export */   "reset": () => (/* binding */ reset),
/* harmony export */   "set": () => (/* binding */ set)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 3488);

const INIT = '[CounterComponent] Init';
const SET = '[CounterComponent] Set';
const INCREMENT = '[CounterComponent] Increment';
const DECREMENT = '[CounterComponent] Decrement';
const RESET = '[CounterComponent] Reset';
const init = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)(INIT);
const set = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)(SET, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const increment = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)(INCREMENT, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const decrement = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)(DECREMENT, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const reset = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)(RESET);

/***/ }),

/***/ 1243:
/*!*************************************************!*\
  !*** ./src/app/store/counter/counter.effect.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CounterEffects": () => (/* binding */ CounterEffects)
/* harmony export */ });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ 5405);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 9095);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 1745);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 8759);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 4139);
/* harmony import */ var app_store_counter_counter_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/store/counter/counter.actions */ 7425);
/* harmony import */ var app_store_counter_counter_selector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/store/counter/counter.selector */ 3184);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/store */ 3488);








class CounterEffects {
  constructor(actions$, store) {
    this.actions$ = actions$;
    this.store = store;
    this.loadCounter = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(app_store_counter_counter_actions__WEBPACK_IMPORTED_MODULE_0__.init), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.switchMap)(() => {
      const stored = localStorage.getItem('counter');
      if (stored) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)((0,app_store_counter_counter_actions__WEBPACK_IMPORTED_MODULE_0__.set)({
          value: +stored
        }));
      }
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)((0,app_store_counter_counter_actions__WEBPACK_IMPORTED_MODULE_0__.set)({
        value: 0
      }));
    })));
    this.saveCounter = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(app_store_counter_counter_actions__WEBPACK_IMPORTED_MODULE_0__.increment, app_store_counter_counter_actions__WEBPACK_IMPORTED_MODULE_0__.decrement, app_store_counter_counter_actions__WEBPACK_IMPORTED_MODULE_0__.reset), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.withLatestFrom)(this.store.select(app_store_counter_counter_selector__WEBPACK_IMPORTED_MODULE_1__.selectCounter)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.tap)(([action, counter]) => {
      console.log(counter);
      localStorage.setItem('counter', counter.toString());
    })), {
      dispatch: false
    });
  }
  static #_ = this.ɵfac = function CounterEffects_Factory(t) {
    return new (t || CounterEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.Actions), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_8__.Store));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({
    token: CounterEffects,
    factory: CounterEffects.ɵfac
  });
}

/***/ }),

/***/ 537:
/*!**************************************************!*\
  !*** ./src/app/store/counter/counter.reducer.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "counterReducer": () => (/* binding */ counterReducer),
/* harmony export */   "initialState": () => (/* binding */ initialState)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ 3488);
/* harmony import */ var app_store_counter_counter_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/store/counter/counter.actions */ 7425);


const initialState = 0;
const counterReducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createReducer)(initialState, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(app_store_counter_counter_actions__WEBPACK_IMPORTED_MODULE_0__.increment, (state, action) => state + action.value), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(app_store_counter_counter_actions__WEBPACK_IMPORTED_MODULE_0__.decrement, (state, action) => state - action.value), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(app_store_counter_counter_actions__WEBPACK_IMPORTED_MODULE_0__.set, (state, action) => action.value), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(app_store_counter_counter_actions__WEBPACK_IMPORTED_MODULE_0__.reset, state => 0));

/***/ }),

/***/ 3184:
/*!***************************************************!*\
  !*** ./src/app/store/counter/counter.selector.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "selectCounter": () => (/* binding */ selectCounter),
/* harmony export */   "selectCounterDouble": () => (/* binding */ selectCounterDouble)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 3488);

const selectCounter = state => state.counter;
const selectCounterDouble = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selectCounter, state => state * 2);

/***/ }),

/***/ 9388:
/*!*****************************************!*\
  !*** ./src/app/store/store.reducers.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "reducers": () => (/* binding */ reducers)
/* harmony export */ });
/* harmony import */ var app_store_counter_counter_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/store/counter/counter.reducer */ 537);

const reducers = {
  counter: app_store_counter_counter_reducer__WEBPACK_IMPORTED_MODULE_0__.counterReducer
};

/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
const environment = {
  production: false,
  firebaseConfig: {
    apiKey: "AIzaSyB7QW4-EOcajxdT0G_RaY9CKWg3z5EwOIY",
    authDomain: "portfolio-4b609.firebaseapp.com",
    databaseURL: "https://portfolio-4b609-default-rtdb.firebaseio.com",
    projectId: "portfolio-4b609",
    storageBucket: "portfolio-4b609.appspot.com",
    messagingSenderId: "306471698031",
    appId: "1:306471698031:web:062288b5f0123f5432979a"
  }
};

/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./environments/environment */ 2340);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var app_app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/app.component */ 5041);
/* harmony import */ var app_app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/app-routing.module */ 158);
/* harmony import */ var app_store_store_reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/store/store.reducers */ 9388);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 8626);
/* harmony import */ var app_shared_services_window_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/services/window.service */ 294);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/store */ 3488);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/http-loader */ 4370);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ 9461);
/* harmony import */ var ngx_lottie__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-lottie */ 9906);













if (_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.enableProdMode)();
}
const DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
  suppressScrollX: true,
  wheelPropagation: false
};
function createTranslateLoader(http) {
  return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_6__.TranslateHttpLoader(http, "./assets/i18n/", ".json");
}
function playerFactory() {
  return __webpack_require__.e(/*! import() */ "node_modules_lottie-web_build_player_lottie_js").then(__webpack_require__.t.bind(__webpack_require__, /*! lottie-web */ 9023, 23));
}
(0,_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.bootstrapApplication)(app_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, {
  providers: [(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.importProvidersFrom)(app_app_routing_module__WEBPACK_IMPORTED_MODULE_2__.AppRoutingModule), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_8__.provideStore)(app_store_store_reducers__WEBPACK_IMPORTED_MODULE_3__.reducers), {
    provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_9__.PERFECT_SCROLLBAR_CONFIG,
    useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
  }, app_shared_services_window_service__WEBPACK_IMPORTED_MODULE_4__.WINDOW_PROVIDERS, (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.importProvidersFrom)(_angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClientModule), (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.importProvidersFrom)(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslateModule.forRoot({
    loader: {
      provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslateLoader,
      useFactory: createTranslateLoader,
      deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClient]
    }
  })), (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.importProvidersFrom)(ngx_lottie__WEBPACK_IMPORTED_MODULE_12__.LottieModule.forRoot({
    player: playerFactory
  }))]
});

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map