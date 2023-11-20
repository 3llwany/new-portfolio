"use strict";
(self["webpackChunkmatngular"] = self["webpackChunkmatngular"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": function() { return /* binding */ AppRoutingModule; }
/* harmony export */ });
/* harmony import */ var F_portfolio_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var F_portfolio_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _layouts_full_full_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layouts/full/full-layout.component */ 6141);
/* harmony import */ var _layouts_content_content_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layouts/content/content-layout.component */ 2227);
/* harmony import */ var _shared_routes_full_layout_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/routes/full-layout.routes */ 578);
/* harmony import */ var _shared_routes_content_layout_routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/routes/content-layout.routes */ 3650);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);









var appRoutes = [{
  path: "",
  redirectTo: "profile",
  pathMatch: "full"
}, {
  path: "",
  component: _layouts_full_full_layout_component__WEBPACK_IMPORTED_MODULE_2__.FullLayoutComponent,
  data: {
    title: "full Views"
  },
  children: _shared_routes_full_layout_routes__WEBPACK_IMPORTED_MODULE_4__.Full_ROUTES
}, {
  path: "",
  component: _layouts_content_content_layout_component__WEBPACK_IMPORTED_MODULE_3__.ContentLayoutComponent,
  data: {
    title: "content Views"
  },
  children: _shared_routes_content_layout_routes__WEBPACK_IMPORTED_MODULE_5__.CONTENT_ROUTES
}, {
  path: "**",
  redirectTo: "pages/error"
}];
var AppRoutingModule = /*#__PURE__*/(0,F_portfolio_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function AppRoutingModule() {
  (0,F_portfolio_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, AppRoutingModule);
});

AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
  return new (t || AppRoutingModule)();
};

AppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
  type: AppRoutingModule
});
AppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
  imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forRoot(appRoutes, {
    preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_7__.PreloadAllModules,
    relativeLinkResolution: "legacy"
  })], _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule]
  });
})();

/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": function() { return /* binding */ AppComponent; }
/* harmony export */ });
/* harmony import */ var F_portfolio_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var F_portfolio_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 9151);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);






var AppComponent = /*#__PURE__*/function () {
  function AppComponent(router) {
    (0,F_portfolio_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AppComponent);

    this.router = router;
  }

  (0,F_portfolio_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(AppComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      this.subscription = this.router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.filter)(function (event) {
        return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__.NavigationEnd;
      })).subscribe(function () {
        return window.scrollTo(0, 0);
      });
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      if (this.subscription) {
        this.subscription.unsubscribe();
      }
    }
  }]);

  return AppComponent;
}();

AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
};

AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["app-root"]],
  decls: 1,
  vars: 0,
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "router-outlet");
    }
  },
  directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet],
  encapsulation: 2
});

/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTranslateLoader": function() { return /* binding */ createTranslateLoader; },
/* harmony export */   "AppModule": function() { return /* binding */ AppModule; }
/* harmony export */ });
/* harmony import */ var F_portfolio_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var F_portfolio_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3598);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 5365);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ngx-translate/core */ 9461);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/http-loader */ 4370);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ngx-spinner */ 8035);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 8626);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/shared.module */ 4466);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _layouts_content_content_layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layouts/content/content-layout.component */ 2227);
/* harmony import */ var _layouts_full_full_layout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./layouts/full/full-layout.component */ 6141);
/* harmony import */ var _shared_services_window_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/services/window.service */ 294);
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/profile/profile.component */ 7094);
/* harmony import */ var _components_banner_banner_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/banner/banner.component */ 3994);
/* harmony import */ var _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/projects/projects.component */ 4935);
/* harmony import */ var _components_counter_counter_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/counter/counter.component */ 7741);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @ngrx/store */ 5585);
/* harmony import */ var app_store_store_reducers__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! app/store/store.reducers */ 9388);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/fire/auth */ 1577);
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/fire */ 3413);
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 3184);




























var DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
  suppressScrollX: true,
  wheelPropagation: false
};
function createTranslateLoader(http) {
  return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_14__.TranslateHttpLoader(http, "./assets/i18n/", ".json");
}
var AppModule = /*#__PURE__*/(0,F_portfolio_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function AppModule() {
  (0,F_portfolio_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, AppModule);
});

AppModule.ɵfac = function AppModule_Factory(t) {
  return new (t || AppModule)();
};

AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineNgModule"]({
  type: AppModule,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__.AppComponent]
});
AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineInjector"]({
  providers: [{
    provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_16__.PERFECT_SCROLLBAR_CONFIG,
    useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
  }, _shared_services_window_service__WEBPACK_IMPORTED_MODULE_7__.WINDOW_PROVIDERS],
  imports: [[_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__.BrowserAnimationsModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_2__.AppRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_18__.HttpClientModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_19__.NgbModule, ngx_spinner__WEBPACK_IMPORTED_MODULE_20__.NgxSpinnerModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_21__.TranslateModule.forRoot({
    loader: {
      provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_21__.TranslateLoader,
      useFactory: createTranslateLoader,
      deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_18__.HttpClient]
    }
  }), ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_16__.PerfectScrollbarModule, _angular_fire__WEBPACK_IMPORTED_MODULE_22__.AngularFireModule.initializeApp(environments_environment__WEBPACK_IMPORTED_MODULE_13__.environment.firebaseConfig), _angular_fire_auth__WEBPACK_IMPORTED_MODULE_23__.AngularFireAuthModule, _ngrx_store__WEBPACK_IMPORTED_MODULE_24__.StoreModule.forRoot(app_store_store_reducers__WEBPACK_IMPORTED_MODULE_12__.reducers)]]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__.AppComponent, _layouts_full_full_layout_component__WEBPACK_IMPORTED_MODULE_6__.FullLayoutComponent, _layouts_content_content_layout_component__WEBPACK_IMPORTED_MODULE_5__.ContentLayoutComponent, _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_8__.ProfileComponent, _components_banner_banner_component__WEBPACK_IMPORTED_MODULE_9__.BannerComponent, _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_10__.ProjectsComponent, _components_counter_counter_component__WEBPACK_IMPORTED_MODULE_11__.CounterComponent],
    imports: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__.BrowserAnimationsModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_2__.AppRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_18__.HttpClientModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_19__.NgbModule, ngx_spinner__WEBPACK_IMPORTED_MODULE_20__.NgxSpinnerModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_21__.TranslateModule, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_16__.PerfectScrollbarModule, _angular_fire__WEBPACK_IMPORTED_MODULE_22__.AngularFireModule, _angular_fire_auth__WEBPACK_IMPORTED_MODULE_23__.AngularFireAuthModule, _ngrx_store__WEBPACK_IMPORTED_MODULE_24__.StoreRootModule]
  });
})();

/***/ }),

/***/ 3994:
/*!*******************************************************!*\
  !*** ./src/app/components/banner/banner.component.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BannerComponent": function() { return /* binding */ BannerComponent; }
/* harmony export */ });
/* harmony import */ var F_portfolio_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var F_portfolio_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var app_shared_resources_assets_manager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/resources/assets_manager */ 4179);
/* harmony import */ var app_components_banner_social_links__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/components/banner/social-links */ 1469);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);







function BannerComponent_a_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var app_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", app_r1.btn)("href", app_r1.url, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMap"](app_r1.icon);
  }
}

var BannerComponent = /*#__PURE__*/function () {
  function BannerComponent() {
    (0,F_portfolio_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, BannerComponent);

    this.assetsManager = app_shared_resources_assets_manager__WEBPACK_IMPORTED_MODULE_2__.AssetsManager;
  }

  (0,F_portfolio_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(BannerComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      this.socialLinks = app_components_banner_social_links__WEBPACK_IMPORTED_MODULE_3__.SOCIALLINKS;
    }
  }]);

  return BannerComponent;
}();

BannerComponent.ɵfac = function BannerComponent_Factory(t) {
  return new (t || BannerComponent)();
};

BannerComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: BannerComponent,
  selectors: [["app-banner"]],
  decls: 13,
  vars: 3,
  consts: [[1, "card"], [1, "user-profile-images"], ["alt", "banner", "width", "100%", 1, "img-fluid", "rounded-top", "user-timeline-image", 3, "src"], ["alt", "User Profile Image", "height", "140", "width", "140", 1, "user-profile-image", "rounded", 3, "src"], [1, "user-profile-text"], [1, "profile-text-color", "mb-0"], [1, "card-content"], [1, "card-body"], [1, "user-profile-buttons", "d-flex", "justify-content-center", "justify-content-sm-start"], ["class", "btn btn-social-icon mr-2", "target", "_blank", 3, "ngClass", "href", 4, "ngFor", "ngForOf"], ["target", "_blank", 1, "btn", "btn-social-icon", "mr-2", 3, "ngClass", "href"]],
  template: function BannerComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "img", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "img", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "h4", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Sayed Elwany");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "small");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Front-End Angular Developer ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, BannerComponent_a_12_Template, 2, 4, "a", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", ctx.assetsManager.banner, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", ctx.assetsManager.big_profile, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.socialLinks);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass],
  styles: [".user-timeline-image[_ngcontent-%COMP%] {\n  height: 520px;\n  filter: brightness(0.6);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhbm5lci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtBQUNGIiwiZmlsZSI6ImJhbm5lci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi51c2VyLXRpbWVsaW5lLWltYWdlIHtcclxuICBoZWlnaHQ6IDUyMHB4O1xyXG4gIGZpbHRlcjogYnJpZ2h0bmVzcyguNik7XHJcbn1cclxuIl19 */"]
});

/***/ }),

/***/ 1469:
/*!***************************************************!*\
  !*** ./src/app/components/banner/social-links.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SOCIALLINKS": function() { return /* binding */ SOCIALLINKS; }
/* harmony export */ });
var SOCIALLINKS = [{
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

/***/ 7741:
/*!*********************************************************!*\
  !*** ./src/app/components/counter/counter.component.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CounterComponent": function() { return /* binding */ CounterComponent; }
/* harmony export */ });
/* harmony import */ var F_portfolio_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var F_portfolio_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var app_store_counter_counter_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/store/counter/counter.actions */ 7425);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ 5585);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/auth */ 1577);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/firestore */ 6466);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6362);








var CounterComponent = /*#__PURE__*/function () {
  function CounterComponent(store, fireAuth, firestore) {
    (0,F_portfolio_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CounterComponent);

    this.store = store;
    this.fireAuth = fireAuth;
    this.firestore = firestore;
    this.count$ = store.select('count');
  }

  (0,F_portfolio_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(CounterComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      this.fireAuth.signInWithEmailAndPassword('sayedelwany03@gmail.com', '123456').then(function (res) {
        console.log(res);
      });
    }
  }, {
    key: "increment",
    value: function increment() {
      this.store.dispatch((0,app_store_counter_counter_actions__WEBPACK_IMPORTED_MODULE_2__.increment)({
        value: 70
      }));
    }
  }, {
    key: "decrement",
    value: function decrement() {
      this.store.dispatch((0,app_store_counter_counter_actions__WEBPACK_IMPORTED_MODULE_2__.decrement)({
        value: 5
      }));
    }
  }, {
    key: "reset",
    value: function reset() {
      this.store.dispatch((0,app_store_counter_counter_actions__WEBPACK_IMPORTED_MODULE_2__.reset)());
    }
  }]);

  return CounterComponent;
}();

CounterComponent.ɵfac = function CounterComponent_Factory(t) {
  return new (t || CounterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__.AngularFireAuth), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__.AngularFirestore));
};

CounterComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: CounterComponent,
  selectors: [["app-counter"]],
  decls: 9,
  vars: 3,
  consts: [[1, "btn", "btn-info", "mr-1", 3, "click"], [1, "btn", "btn-danger", "mr-1", 3, "click"], [1, "btn", "btn-warning", "mr-1", 3, "click"]],
  template: function CounterComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "button", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CounterComponent_Template_button_click_3_listener() {
        return ctx.increment();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "+1");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "button", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CounterComponent_Template_button_click_5_listener() {
        return ctx.decrement();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "-1");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CounterComponent_Template_button_click_7_listener() {
        return ctx.reset();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "reset");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      var tmp_0_0;
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"]((tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, ctx.count$)) !== null && tmp_0_0 !== undefined ? tmp_0_0 : 0);
    }
  },
  pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.AsyncPipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb3VudGVyLmNvbXBvbmVudC5zY3NzIn0= */"]
});

/***/ }),

/***/ 7094:
/*!*********************************************************!*\
  !*** ./src/app/components/profile/profile.component.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileComponent": function() { return /* binding */ ProfileComponent; }
/* harmony export */ });
/* harmony import */ var F_portfolio_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var F_portfolio_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var app_shared_resources_assets_manager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/resources/assets_manager */ 4179);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _banner_banner_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../banner/banner.component */ 3994);
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../projects/projects.component */ 4935);






var ProfileComponent = /*#__PURE__*/function () {
  function ProfileComponent() {
    (0,F_portfolio_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ProfileComponent);

    this.assetsManager = app_shared_resources_assets_manager__WEBPACK_IMPORTED_MODULE_2__.AssetsManager;
  }

  (0,F_portfolio_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(ProfileComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {}
  }]);

  return ProfileComponent;
}();

ProfileComponent.ɵfac = function ProfileComponent_Factory(t) {
  return new (t || ProfileComponent)();
};

ProfileComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: ProfileComponent,
  selectors: [["app-profile"]],
  decls: 70,
  vars: 0,
  consts: [[1, "page-user-profile"], [1, "row", "justify-content-center", "align-items-center"], [1, "col-12"], [1, "row", "profile-info-posts"], [1, "col-lg-3", "col-12"], [1, "row"], [1, "card"], [1, "card-header", "d-flex", "justify-content-between", "align-items-center"], [1, "card-title", "m-0"], [1, "cursor-pointer"], [1, "ft-more-vertical-"], [1, "card-content"], [1, "card-body"], [1, "m-0"], [1, "card-header", "d-flex", "justify-content-left", "align-items-center"], [1, "fa", "fa-graduation-cap", "font-large-1", "mr-2"], [1, "list-unstyled", "mb-0"], [1, "d-flex", "align-items-center", "mb-2"], [1, "ft-briefcase", "mr-2", "cursor-pointer"], ["href", "http://www.akhbaracademy.edu.eg/", "target", "_blank"], [1, "ft-file-text", "mr-2", "cursor-pointer"], [1, "card-header", "d-flex", "justify-left-between", "align-items-center"], [1, "fa", "fa-code", "font-large-1", "mr-2"], [1, "d-flex", "align-items-center"], ["href", "https://mashura.co/", "target", "_blank"], ["href", "https://mashura.co/"], ["href", "javascript:;"], [1, "col-lg-9", "col-12"]],
  template: function ProfileComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "section", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "app-banner");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "h4", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "About");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "span", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](13, "i", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "p", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, " I am interested in Web Programming, Building websites. Worked as a freelancer Front End Developer. I am keen to gain more experience in the field. For this reason, i am looking for a company willing to offer me a placement among their web designers. I hope to be Full Stack Web Developer, and i am learning the track now. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](21, "i", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "h4", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23, "Education");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "ul", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "li", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](28, "i", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](30, " Bachelor\u2019s degree in Computer Science, ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "a", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](32, "Akhbar El-Yom Academy ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "li", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](34, "i", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](36, " Cumulative grade: Very Good with honors. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "li", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](38, "i", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](40, " Graduation Project: Tracking system (web app, mobile app and GPS device) for helping families finding and keep their children safe from kidnapping. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](42, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "div", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](44, "i", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](45, "h4", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](46, "Work Experience");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](47, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](48, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](49, "ul", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](50, "li", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](51, "i", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](52, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](53, " Angular Developer at ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](54, "a", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](55, "Mashura Consultants");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](56, "li", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](57, "i", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](58, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](59, " Flutter Developer at ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](60, "a", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](61, "Mashura Consultants ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](62, "li", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](63, "i", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](64, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](65, " Front-End Developer at ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](66, "a", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](67, "Soft Square");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](68, "div", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](69, "app-projects");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    }
  },
  directives: [_banner_banner_component__WEBPACK_IMPORTED_MODULE_3__.BannerComponent, _projects_projects_component__WEBPACK_IMPORTED_MODULE_4__.ProjectsComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9maWxlLmNvbXBvbmVudC5zY3NzIn0= */"]
});

/***/ }),

/***/ 4935:
/*!***********************************************************!*\
  !*** ./src/app/components/projects/projects.component.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectsComponent": function() { return /* binding */ ProjectsComponent; }
/* harmony export */ });
/* harmony import */ var F_portfolio_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var F_portfolio_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var app_components_projects_projects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/components/projects/projects */ 3174);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);






function ProjectsComponent_div_3_div_1_a_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Live Preview");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var project_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("href", project_r3.url, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
  }
}

function ProjectsComponent_div_3_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "h4", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, ProjectsComponent_div_3_div_1_a_11_Template, 2, 1, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var project_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", project_r3.img, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"])("alt", project_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](project_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("title", project_r3.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](project_r3.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", project_r3.url);
  }
}

function ProjectsComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ProjectsComponent_div_3_div_1_Template, 14, 6, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r0.projects);
  }
}

function ProjectsComponent_div_4_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "h4", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Go somewhere");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](15, "img", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var project_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](project_r7.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](project_r7.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", project_r7.img, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"])("alt", project_r7.name);
  }
}

function ProjectsComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ProjectsComponent_div_4_div_1_Template, 16, 4, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r1.projects);
  }
}

var ProjectsComponent = /*#__PURE__*/function () {
  function ProjectsComponent() {
    (0,F_portfolio_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ProjectsComponent);

    this.projects = app_components_projects_projects__WEBPACK_IMPORTED_MODULE_2__.PROJECTS;
  }

  (0,F_portfolio_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(ProjectsComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {}
  }]);

  return ProjectsComponent;
}();

ProjectsComponent.ɵfac = function ProjectsComponent_Factory(t) {
  return new (t || ProjectsComponent)();
};

ProjectsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: ProjectsComponent,
  selectors: [["app-projects"]],
  decls: 5,
  vars: 2,
  consts: [[1, "content-header"], [1, "fa", "fa-suitcase", "font-large-1", "mr-1", "secondary"], ["class", "row", 4, "ngIf"], [1, "row"], ["class", "col-4", 4, "ngFor", "ngForOf"], [1, "col-4"], [1, "card", "project"], [1, "card-content"], [1, "img-fluid", "project-img", 3, "src", "alt"], [1, "card-header"], [1, "card-title"], [1, "card-body", 3, "title"], [1, "card-text"], [1, "card-footer", "pt-0", "mt-1"], ["class", "card-link info", "target", "_blank", 3, "href", 4, "ngIf"], ["target", "_blank", 1, "card-link", "warning"], ["target", "_blank", 1, "card-link", "info", 3, "href"], ["class", "col-6", 4, "ngFor", "ngForOf"], [1, "col-6"], [1, "card", "overflow-hidden", "vertical-card"], [1, "col-sm-6", "col-12", "d-flex", "align-items-center"], [1, "card-body"], [1, "align-self-center"], [1, "card-title", "mb-3"], ["type", "button", 1, "btn", "btn-danger"], [1, "col-sm-6", "col-12"], [1, "card-img"], [1, "img-fluid", "img", 3, "src", "alt"]],
  template: function ProjectsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " Projects\n");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, ProjectsComponent_div_3_Template, 2, 1, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, ProjectsComponent_div_4_Template, 2, 1, "div", 2);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", false);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf],
  styles: [".content-header[_ngcontent-%COMP%] {\n  color: #616d89;\n  display: inline-block;\n  border-bottom: 4px solid #616d89;\n}\n\n.project-img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 200px !important;\n  transition: all 0.3s ease-in-out;\n}\n\n.project-img[_ngcontent-%COMP%]:hover {\n  filter: brightness(0.8);\n}\n\n.project[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  height: 115px;\n  overflow: hidden;\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 4;\n}\n\n.vertical-card[_ngcontent-%COMP%]   .card-text[_ngcontent-%COMP%] {\n  overflow: hidden !important;\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 2;\n}\n\n.vertical-card[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%] {\n  height: 200px;\n  overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsZ0NBQUE7QUFDRjs7QUFDQTtFQUNFLFdBQUE7RUFDQSx3QkFBQTtFQUNBLGdDQUFBO0FBRUY7O0FBQ0E7RUFDRSx1QkFBQTtBQUVGOztBQUNBO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSw0QkFBQTtFQUNBLHFCQUFBO0FBRUY7O0FBRUU7RUFDRywyQkFBQTtFQUNELG9CQUFBO0VBQ0EsNEJBQUE7RUFDQSxxQkFBQTtBQUNKOztBQUVFO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0FBQUoiLCJmaWxlIjoicHJvamVjdHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudC1oZWFkZXJ7XHJcbiAgY29sb3I6ICM2MTZkODk7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrOyAgXHJcbiAgYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkICM2MTZkODk7XHJcbn1cclxuLnByb2plY3QtaW1nIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDIwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgdHJhbnNpdGlvbjogYWxsIC4zcyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuLnByb2plY3QtaW1nOmhvdmVyIHtcclxuICBmaWx0ZXI6IGJyaWdodG5lc3MoLjgpO1xyXG59XHJcblxyXG4ucHJvamVjdCAuY2FyZC1ib2R5IHtcclxuICBoZWlnaHQ6IDExNXB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcclxuICAtd2Via2l0LWxpbmUtY2xhbXA6IDQ7XHJcbn1cclxuXHJcbi52ZXJ0aWNhbC1jYXJkIHtcclxuICAuY2FyZC10ZXh0IHtcclxuICAgICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XHJcbiAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDI7XHJcbiAgfVxyXG5cclxuICAuaW1ne1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgfVxyXG59XHJcbiJdfQ== */"]
});

/***/ }),

/***/ 3174:
/*!*************************************************!*\
  !*** ./src/app/components/projects/projects.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PROJECTS": function() { return /* binding */ PROJECTS; }
/* harmony export */ });
/* harmony import */ var app_shared_resources_assets_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/resources/assets_manager */ 4179);

var assetsManager = app_shared_resources_assets_manager__WEBPACK_IMPORTED_MODULE_0__.AssetsManager;
var PROJECTS = [{
  id: 1,
  name: "HR System",
  url: null,
  img: assetsManager.hr,
  description: "Create full structure pattern for HR project, create reusable and dynamic  functions, like store employee information and support various humanresource functions, such as benefits, payroll, recruiting, training, financial,attendance, self Service, org structure, employees structure, etc."
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
} // {
//   id: 8,
//   name: "ZH-Transportation",
//   url: "https://trainingmisrangular.cloudiax.com",
//   img: assetsManager.zhTransportation,
//   description: "Dashboard for transportation app."
// },
];

/***/ }),

/***/ 2227:
/*!*************************************************************!*\
  !*** ./src/app/layouts/content/content-layout.component.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContentLayoutComponent": function() { return /* binding */ ContentLayoutComponent; }
/* harmony export */ });
/* harmony import */ var F_portfolio_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var F_portfolio_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var app_shared_services_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/services/config.service */ 6955);
/* harmony import */ var app_shared_services_customizer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/services/customizer.service */ 360);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 2816);







var _c0 = ["content-wrapper"];
var ContentLayoutComponent = /*#__PURE__*/function () {
  function ContentLayoutComponent(configService, document, renderer, cdr, customizerService) {
    (0,F_portfolio_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ContentLayoutComponent);

    this.configService = configService;
    this.document = document;
    this.renderer = renderer;
    this.cdr = cdr;
    this.customizerService = customizerService;
    this.config = {};
    this.config = this.configService.templateConf;
    this.renderer.addClass(this.document.body, "auth-page");
  }

  (0,F_portfolio_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(ContentLayoutComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this = this;

      this.layoutSub = this.configService.templateConf$.subscribe(function (templateConf) {
        if (templateConf) {
          _this.config = templateConf;
        }

        _this.loadLayout();

        _this.cdr.markForCheck();
      });
    }
  }, {
    key: "loadLayout",
    value: function loadLayout() {
      this.removeTransparentBGClasses();

      if (this.config.layout.variant === "Light") {
        this.renderer.removeClass(this.document.body, "layout-dark");
        this.renderer.removeClass(this.document.body, "layout-transparent");
      } else if (this.config.layout.variant === "Dark") {
        this.renderer.removeClass(this.document.body, "layout-transparent");
        this.renderer.addClass(this.document.body, "layout-dark");
      } else if (this.config.layout.variant === "Transparent") {
        this.renderer.addClass(this.document.body, "layout-dark");
        this.renderer.addClass(this.document.body, "layout-transparent");
        this.renderer.addClass(this.document.body, this.config.layout.sidebar.backgroundColor);
      }

      this.renderer.removeClass(this.document.body, "menu-expanded");
      this.renderer.removeClass(this.document.body, "navbar-static");
      this.renderer.removeClass(this.document.body, "menu-open");
      this.renderer.addClass(this.document.body, "blank-page");
    }
  }, {
    key: "removeTransparentBGClasses",
    value: function removeTransparentBGClasses() {
      var _this2 = this;

      this.customizerService.transparent_colors.forEach(function (_) {
        _this2.renderer.removeClass(_this2.document.body, _.class);
      });
      this.customizerService.transparent_colors_with_shade.forEach(function (_) {
        _this2.renderer.removeClass(_this2.document.body, _.class);
      });
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this.renderer.removeClass(this.document.body, "auth-page");

      if (this.layoutSub) {
        this.layoutSub.unsubscribe();
      }
    }
  }]);

  return ContentLayoutComponent;
}();

ContentLayoutComponent.ɵfac = function ContentLayoutComponent_Factory(t) {
  return new (t || ContentLayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](app_shared_services_config_service__WEBPACK_IMPORTED_MODULE_2__.ConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](app_shared_services_customizer_service__WEBPACK_IMPORTED_MODULE_3__.CustomizerService));
};

ContentLayoutComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: ContentLayoutComponent,
  selectors: [["app-content-layout"]],
  viewQuery: function ContentLayoutComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 5);
    }

    if (rf & 2) {
      var _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.wrapper = _t.first);
    }
  },
  decls: 6,
  vars: 0,
  consts: [[1, "wrapper"], [1, "main-panel"], [1, "main-content"], [1, "content-overlay"], [1, "content-wrapper", "p-0"]],
  template: function ContentLayoutComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "router-outlet");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }
  },
  directives: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterOutlet],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb250ZW50LWxheW91dC5jb21wb25lbnQuc2NzcyJ9 */"],
  changeDetection: 0
});

/***/ }),

/***/ 6141:
/*!*******************************************************!*\
  !*** ./src/app/layouts/full/full-layout.component.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FullLayoutComponent": function() { return /* binding */ FullLayoutComponent; }
/* harmony export */ });
/* harmony import */ var F_portfolio_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var F_portfolio_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var app_shared_services_window_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/services/window.service */ 294);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 9151);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var app_shared_services_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/services/config.service */ 6955);
/* harmony import */ var app_shared_services_layout_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/services/layout.service */ 5682);
/* harmony import */ var app_shared_services_customizer_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/services/customizer.service */ 360);
/* harmony import */ var ngx_device_detector__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-device-detector */ 1431);
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/footer/footer.component */ 5227);
/* harmony import */ var _shared_notification_sidebar_notification_sidebar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/notification-sidebar/notification-sidebar.component */ 6430);
/* harmony import */ var _shared_directives_sidebar_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/directives/sidebar.directive */ 7744);
/* harmony import */ var _shared_vertical_menu_vertical_menu_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/vertical-menu/vertical-menu.component */ 2329);


















var _c0 = function _c0(a0) {
  return {
    "background-image": a0
  };
};

function FullLayoutComponent_div_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "div", 11);
  }

  if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](1, _c0, "url(" + ctx_r2.bgImage + ")"));
  }
}

var _c1 = function _c1(a0, a1, a2) {
  return {
    "main-menu": a0,
    "menu-fixed": a1,
    "menu-native-scroll": a2
  };
};

function FullLayoutComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("mouseenter", function FullLayoutComponent_div_1_Template_div_mouseenter_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r4);
      var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return ctx_r3.sidebarMouseenter($event);
    })("mouseleave", function FullLayoutComponent_div_1_Template_div_mouseleave_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r4);
      var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return ctx_r5.sidebarMouseleave($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "app-sidebar");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, FullLayoutComponent_div_1_div_2_Template, 1, 3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction3"](4, _c1, ctx_r0.menuPosition === "Side" || ctx_r0.displayOverlayMenu, ctx_r0.menuPosition === "Side" || ctx_r0.displayOverlayMenu, !ctx_r0.perfectScrollbarEnable));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵattribute"]("data-background-color", (ctx_r0.config == null ? null : ctx_r0.config.layout.variant) === "Transparent" ? "black" : ctx_r0.bgColor)("data-image", ctx_r0.bgImage);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r0.config == null ? null : ctx_r0.config.layout.sidebar.backgroundImage);
  }
}

function FullLayoutComponent_button_8_Template(rf, ctx) {
  if (rf & 1) {
    var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function FullLayoutComponent_button_8_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r7);
      var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return ctx_r6.scrollToTop();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}

var _c2 = function _c2(a0) {
  return {
    "show-overlay": a0
  };
};

var _c3 = function _c3(a0, a1) {
  return {
    "d-none": a0,
    "d-block": a1
  };
};

var FullLayoutComponent = /*#__PURE__*/function () {
  function FullLayoutComponent(configService, layoutService, router, customizerService, document, window, renderer, cdr, deviceService) {
    var _this = this;

    (0,F_portfolio_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, FullLayoutComponent);

    this.configService = configService;
    this.layoutService = layoutService;
    this.router = router;
    this.customizerService = customizerService;
    this.document = document;
    this.window = window;
    this.renderer = renderer;
    this.cdr = cdr;
    this.deviceService = deviceService;
    this.hideSidebar = true;
    this.overlayContent = false;
    this.isSmallScreen = false;
    this.menuPosition = 'Side';
    this.displayOverlayMenu = false; // Vertical Side menu for screenSize < 1200

    this.config = {};
    this.isMenuCollapsedOnHover = false;
    this.isNavbarSeachTextEmpty = true;
    this.isScrollTopVisible = false;
    this.config = this.configService.templateConf;
    this.innerWidth = window.innerWidth; // On toggle sidebar menu

    this.layoutSub = layoutService.toggleSidebar$.subscribe(function (isShow) {
      _this.hideSidebar = !isShow;

      if (_this.hideSidebar) {
        _this.overlayContent = false;
      } else {
        _this.overlayContent = true;
      }

      _this.toggleSidebar();
    });
  }

  (0,F_portfolio_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(FullLayoutComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this2 = this;

      this.configSub = this.configService.templateConf$.subscribe(function (templateConf) {
        if (templateConf) {
          _this2.config = templateConf;
        } //load layout


        _this2.loadLayout();

        _this2.cdr.markForCheck();
      }); //hide overlay class on router change

      this.router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.filter)(function (event) {
        return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_12__.NavigationEnd;
      })).subscribe(function (routeChange) {
        if (_this2.config.layout.menuPosition === "Side" || _this2.displayOverlayMenu) {
          // Vertical Menu
          if (_this2.innerWidth < 1200) {
            _this2.layoutService.toggleSidebarSmallScreen(false);

            _this2.overlayContent = false;

            _this2.renderer.removeClass(_this2.document.body, "overflow-hidden");
          }
        }
      });
    }
  }, {
    key: "ngAfterViewInit",
    value: function ngAfterViewInit() {
      this.setMenuLayout();
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      //Unsubcribe subscriptions
      if (this.configSub) {
        this.configSub.unsubscribe();
      }

      if (this.layoutSub) {
        this.layoutSub.unsubscribe();
      }
    } //adjust layout

  }, {
    key: "setMenuLayout",
    value: function setMenuLayout() {
      this.overlayContent = false;
      this.renderer.removeClass(this.document.body, "blank-page");

      if (this.config.layout.menuPosition === "Top") {
        // Horizontal Menu
        if (this.innerWidth < 1200) {
          // Screen size < 1200
          this.displayOverlayMenu = true;
          this.hideSidebar = true;
          this.renderer.removeClass(this.document.body, "horizontal-menu");
          this.renderer.removeClass(this.document.body, "menu-open");
          this.renderer.addClass(this.document.body, "horizontal-layout");
          this.renderer.addClass(this.document.body, "horizontal-menu-padding");
          this.renderer.addClass(this.document.body, "vertical-layout");
          this.renderer.addClass(this.document.body, "vertical-overlay-menu");
          this.renderer.addClass(this.document.body, "fixed-navbar");
          this.renderer.addClass(this.document.body, "menu-hide");
        } else {
          // Screen size > 1200
          this.displayOverlayMenu = false;
          this.hideSidebar = false;
          this.renderer.setAttribute(this.document.body, "data-menu", "horizontal-menu");
          this.renderer.removeClass(this.document.body, "vertical-layout");
          this.renderer.removeClass(this.document.body, "vertical-overlay-menu");
          this.renderer.removeClass(this.document.body, "fixed-navbar");
          this.renderer.removeClass(this.document.body, "menu-hide");
          this.renderer.removeClass(this.document.body, "vertical-menu");
          this.renderer.addClass(this.document.body, "horizontal-menu");
          this.renderer.addClass(this.document.body, "horizontal-layout");
          this.renderer.addClass(this.document.body, "horizontal-menu-padding");
        }
      } else if (this.config.layout.menuPosition === "Side") {
        // Vertical Menu
        if (this.innerWidth < 1200) {
          // If Screen size < 1200
          this.displayOverlayMenu = true;
          this.renderer.removeClass(this.document.body, "horizontal-layout");
          this.renderer.removeClass(this.document.body, "horizontal-menu");
          this.renderer.removeClass(this.document.body, "horizontal-menu-padding");
          this.renderer.removeClass(this.document.body, "menu-expanded");
          this.renderer.removeClass(this.document.body, "vertical-menu");
          this.renderer.removeClass(this.document.body, "menu-open");
          this.renderer.removeClass(this.document.body, "nav-collapsed");
          this.renderer.addClass(this.document.body, "vertical-layout");
          this.renderer.addClass(this.document.body, "menu-hide");
        } else {
          // If Screen size > 1200
          this.displayOverlayMenu = false;
          this.renderer.removeClass(this.document.body, "horizontal-layout");
          this.renderer.removeClass(this.document.body, "horizontal-menu");
          this.renderer.removeClass(this.document.body, "horizontal-menu-padding");
          this.renderer.setAttribute(this.document.body, "data-menu", "vertical-menu");
          this.renderer.addClass(this.document.body, "vertical-layout");

          if (!this.config.layout.sidebar.collapsed) {
            this.renderer.addClass(this.document.body, "menu-expanded");
            this.renderer.addClass(this.document.body, "menu-open");
          }

          this.renderer.addClass(this.document.body, "vertical-menu");
          this.renderer.removeClass(this.document.body, "menu-hide");
          this.renderer.removeClass(this.document.body, "vertical-overlay-menu");
        }
      }
    }
  }, {
    key: "loadLayout",
    value: function loadLayout() {
      //menu position "SIDE" or "TOP"
      if (this.config.layout.menuPosition && this.config.layout.menuPosition.toString().trim() != "") {
        this.menuPosition = this.config.layout.menuPosition;
      } //Hide/show sidebar menu background image


      if (!this.config.layout.sidebar.backgroundImage) {
        this.bgImage = "";
      } else {
        this.bgImage = this.config.layout.sidebar.backgroundImageURL;
      } //Set sidebar menu background color


      if (!this.config.layout.sidebar.backgroundColor) {
        this.bgColor = this.customizerService.light_dark_colors[7].code;
      } else {
        this.bgColor = this.config.layout.sidebar.backgroundColor;
      } //toggle side menu


      if (this.config.layout.menuPosition === "Side") {
        if (this.config.layout.sidebar.collapsed) {
          this.isMenuCollapsedOnHover = true;
        } else {
          this.isMenuCollapsedOnHover = true;
        }

        this.toggleSidebar();
      }

      this.removeTransparentBGClasses(); // Layout variants

      if (this.config.layout.variant === "Light") {
        this.renderer.removeClass(this.document.body, "layout-dark");
        this.renderer.removeClass(this.document.body, "layout-transparent");
      } else if (this.config.layout.variant === "Dark") {
        this.renderer.removeClass(this.document.body, "layout-transparent");
        this.renderer.addClass(this.document.body, "layout-dark");
      } else if (this.config.layout.variant === "Transparent") {
        this.renderer.addClass(this.document.body, "layout-dark");
        this.renderer.addClass(this.document.body, "layout-transparent");
        this.renderer.addClass(this.document.body, this.bgColor);
        this.bgImage = "";
      }

      this.setMenuLayout(); // For Sidebar width

      if (this.config.layout.sidebar.size === 'sidebar-sm') {
        this.renderer.removeClass(this.document.body, "sidebar-lg");
        this.renderer.addClass(this.document.body, "sidebar-sm");
      } else if (this.config.layout.sidebar.size === 'sidebar-lg') {
        this.renderer.removeClass(this.document.body, "sidebar-sm");
        this.renderer.addClass(this.document.body, "sidebar-lg");
      } else {
        this.renderer.removeClass(this.document.body, "sidebar-sm");
        this.renderer.removeClass(this.document.body, "sidebar-lg");
      }

      if (this.config.layout.menuPosition === "Side") {
        // vertical/Side menu expanded/collapse
        if (this.config.layout.sidebar.collapsed && !this.isSmallScreen) {
          // collapse side menu
          this.renderer.removeClass(this.document.body, "menu-expanded");
          this.renderer.addClass(this.document.body, "nav-collapsed");
        } else {
          // expand side menu
          this.renderer.removeClass(this.document.body, "nav-collapsed");
          this.renderer.addClass(this.document.body, "menu-expanded");
        }
      } //Navbar types


      if (this.config.layout.navbar.type === 'Static') {
        this.renderer.removeClass(this.document.body, "navbar-sticky");
        this.renderer.addClass(this.document.body, "navbar-static");
      } else if (this.config.layout.navbar.type === 'Fixed') {
        this.renderer.removeClass(this.document.body, "navbar-static");
        this.renderer.addClass(this.document.body, "navbar-sticky");
      }
    }
  }, {
    key: "toggleSidebar",
    value: function toggleSidebar() {
      if (this.hideSidebar) {
        // on sidebar collapse
        this.renderer.removeClass(this.document.body, "menu-expanded");
        this.renderer.removeClass(this.document.body, "vertical-menu");
        this.renderer.removeClass(this.document.body, "menu-open");
        this.renderer.addClass(this.document.body, "vertical-layout");
        this.renderer.addClass(this.document.body, "menu-hide");

        if (this.config.layout.menuPosition === "Top") {
          this.renderer.addClass(this.document.body, "vertical-overlay-menu");
        }
      } else {
        // on sidebar expand
        this.renderer.addClass(this.document.body, "vertical-layout");
        this.renderer.addClass(this.document.body, "menu-expanded");
        this.renderer.addClass(this.document.body, "vertical-menu");

        if (this.config.layout.sidebar.collapsed) {
          this.renderer.removeClass(this.document.body, "menu-open");
        } else {
          this.renderer.addClass(this.document.body, "menu-open");
        }

        this.renderer.removeClass(this.document.body, "menu-hide");
      }

      this.isTouchDevice();
    }
  }, {
    key: "isTouchDevice",
    value: function isTouchDevice() {
      var isMobile = this.deviceService.isMobile();
      var isTablet = this.deviceService.isTablet();

      if (isMobile || isTablet) {
        if (!this.hideSidebar) {
          this.renderer.addClass(this.document.body, "overflow-hidden");
        } else {
          this.renderer.removeClass(this.document.body, "overflow-hidden");
        }
      }
    }
  }, {
    key: "hideCompactMenuOnSmallScreen",
    value: function hideCompactMenuOnSmallScreen() {
      if (this.innerWidth < 1200) {
        var conf = this.config;
        conf.layout.sidebar.collapsed = false;
        this.configService.applyTemplateConfigChange({
          layout: conf.layout
        });
      }
    } //Remove transparent layout classes

  }, {
    key: "removeTransparentBGClasses",
    value: function removeTransparentBGClasses() {
      var _this3 = this;

      this.customizerService.transparent_colors.forEach(function (_) {
        _this3.renderer.removeClass(_this3.document.body, _.class);
      });
      this.customizerService.transparent_colors_with_shade.forEach(function (_) {
        _this3.renderer.removeClass(_this3.document.body, _.class);
      });
    }
  }, {
    key: "sidebarMouseenter",
    value: function sidebarMouseenter(e) {
      if (this.config.layout.sidebar.collapsed) {
        this.isMenuCollapsedOnHover = false;
        this.layoutService.overlaySidebartoggle(this.isMenuCollapsedOnHover);
      }
    }
  }, {
    key: "sidebarMouseleave",
    value: function sidebarMouseleave(e) {
      if (this.config.layout.sidebar.collapsed) {
        this.isMenuCollapsedOnHover = true;
        this.layoutService.overlaySidebartoggle(this.isMenuCollapsedOnHover);
      }
    } //scroll to top on click

  }, {
    key: "scrollToTop",
    value: function scrollToTop() {
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }
  }, {
    key: "onOutsideClick",
    value: function onOutsideClick(e) {
      if (this.innerWidth < 1200) {
        if (!e.target.classList.contains("toggleSidebarNavbarButton")) {
          this.layoutService.toggleSidebarSmallScreen(false);
        }
      }
    }
  }, {
    key: "onWrapperClick",
    value: function onWrapperClick() {
      this.isNavbarSeachTextEmpty = true;
    }
  }, {
    key: "checkNavbarSeachTextEmpty",
    value: function checkNavbarSeachTextEmpty($event) {
      this.isNavbarSeachTextEmpty = $event;
    }
  }, {
    key: "onResize",
    value: function onResize(event) {
      var _this4 = this;

      if (this.resizeTimeout) {
        clearTimeout(this.resizeTimeout);
      }

      this.resizeTimeout = setTimeout(function () {
        _this4.innerWidth = event.target.innerWidth;

        _this4.setMenuLayout();

        _this4.hideCompactMenuOnSmallScreen();
      }.bind(this), 500);
    } //Add/remove classes on page scroll

  }, {
    key: "onWindowScroll",
    value: function onWindowScroll() {
      var number = this.window.pageYOffset || this.document.documentElement.scrollTop || this.document.body.scrollTop || 0;

      if (number > 60) {
        this.renderer.addClass(this.document.body, "navbar-scrolled");
      } else {
        this.renderer.removeClass(this.document.body, "navbar-scrolled");
      }

      if (number > 400) {
        this.isScrollTopVisible = true;
      } else {
        this.isScrollTopVisible = false;
      }

      if (number > 20) {
        this.renderer.addClass(this.document.body, "page-scrolled");
      } else {
        this.renderer.removeClass(this.document.body, "page-scrolled");
      }
    }
  }]);

  return FullLayoutComponent;
}();

FullLayoutComponent.ɵfac = function FullLayoutComponent_Factory(t) {
  return new (t || FullLayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](app_shared_services_config_service__WEBPACK_IMPORTED_MODULE_3__.ConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](app_shared_services_layout_service__WEBPACK_IMPORTED_MODULE_4__.LayoutService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](app_shared_services_customizer_service__WEBPACK_IMPORTED_MODULE_5__.CustomizerService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_13__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](app_shared_services_window_service__WEBPACK_IMPORTED_MODULE_2__.WINDOW), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_10__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_10__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](ngx_device_detector__WEBPACK_IMPORTED_MODULE_14__.DeviceDetectorService));
};

FullLayoutComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
  type: FullLayoutComponent,
  selectors: [["app-full-layout"]],
  hostBindings: function FullLayoutComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("resize", function FullLayoutComponent_resize_HostBindingHandler($event) {
        return ctx.onResize($event);
      }, false, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresolveWindow"])("scroll", function FullLayoutComponent_scroll_HostBindingHandler() {
        return ctx.onWindowScroll();
      }, false, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresolveWindow"]);
    }
  },
  decls: 12,
  vars: 11,
  consts: [[1, "wrapper", 3, "click", "resize"], ["appSidebar", "", "class", "app-sidebar", "data-active-color", "white", 3, "ngClass", "mouseenter", "mouseleave", 4, "ngIf"], [1, "main-panel"], [1, "main-content"], [1, "content-overlay"], [1, "content-wrapper"], ["class", "btn btn-primary scroll-top", "type", "button", 3, "click", 4, "ngIf"], [1, "sidenav-overlay", 3, "click"], [1, "drag-target"], ["appSidebar", "", "data-active-color", "white", 1, "app-sidebar", 3, "ngClass", "mouseenter", "mouseleave"], ["class", "sidebar-background", 3, "ngStyle", 4, "ngIf"], [1, "sidebar-background", 3, "ngStyle"], ["type", "button", 1, "btn", "btn-primary", "scroll-top", 3, "click"], [1, "ft-arrow-up"]],
  template: function FullLayoutComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function FullLayoutComponent_Template_div_click_0_listener() {
        return ctx.onWrapperClick();
      })("resize", function FullLayoutComponent_Template_div_resize_0_listener($event) {
        return ctx.onResize($event);
      }, false, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresolveWindow"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, FullLayoutComponent_div_1_Template, 3, 8, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](4, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](6, "router-outlet");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](7, "app-footer");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](8, FullLayoutComponent_button_8_Template, 2, 0, "button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](9, "app-notification-sidebar");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function FullLayoutComponent_Template_div_click_10_listener($event) {
        return ctx.onOutsideClick($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](11, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](6, _c2, !ctx.isNavbarSeachTextEmpty));
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.menuPosition === "Side" || ctx.displayOverlayMenu);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.isScrollTopVisible);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction2"](8, _c3, ctx.displayOverlayMenu && ctx.hideSidebar && !ctx.overlayContent, ctx.displayOverlayMenu && !ctx.hideSidebar && ctx.overlayContent && ctx.innerWidth < 1200));
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterOutlet, _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__.FooterComponent, _shared_notification_sidebar_notification_sidebar_component__WEBPACK_IMPORTED_MODULE_7__.NotificationSidebarComponent, _shared_directives_sidebar_directive__WEBPACK_IMPORTED_MODULE_8__.SidebarDirective, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgClass, _shared_vertical_menu_vertical_menu_component__WEBPACK_IMPORTED_MODULE_9__.VerticalMenuComponent, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgStyle],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmdWxsLWxheW91dC5jb21wb25lbnQuc2NzcyJ9 */"]
});

/***/ }),

/***/ 1138:
/*!********************************************************!*\
  !*** ./src/app/shared/animations/custom-animations.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "customAnimations": function() { return /* binding */ customAnimations; }
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ 1631);

var customAnimations = [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)('slideInOut', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.state)('1', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  height: '*'
})), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.state)('0', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  height: '0px'
})), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('1 <=> 0', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)(200))])];

/***/ }),

/***/ 4609:
/*!**********************************************************************************!*\
  !*** ./src/app/shared/components/autocomplete/autocomplete-content.directive.ts ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AutocompleteContentDirective": function() { return /* binding */ AutocompleteContentDirective; }
/* harmony export */ });
/* harmony import */ var F_portfolio_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var F_portfolio_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);



var AutocompleteContentDirective = /*#__PURE__*/(0,F_portfolio_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function AutocompleteContentDirective(tpl) {
  (0,F_portfolio_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, AutocompleteContentDirective);

  this.tpl = tpl;
});

AutocompleteContentDirective.ɵfac = function AutocompleteContentDirective_Factory(t) {
  return new (t || AutocompleteContentDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.TemplateRef));
};

AutocompleteContentDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
  type: AutocompleteContentDirective,
  selectors: [["", "appAutocompleteContent", ""]]
});

/***/ }),

/***/ 7575:
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/autocomplete/autocomplete.component.ts ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AutocompleteComponent": function() { return /* binding */ AutocompleteComponent; }
/* harmony export */ });
/* harmony import */ var F_portfolio_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js */ 8277);
/* harmony import */ var F_portfolio_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var F_portfolio_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var _autocomplete_content_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./autocomplete-content.directive */ 4609);
/* harmony import */ var _option_option_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./option/option.component */ 7606);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 9095);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 8623);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 6362);









var _c0 = ["root"];

function AutocompleteComponent_ng_template_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainer"](0);
  }
}

function AutocompleteComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, AutocompleteComponent_ng_template_0_ng_container_1_Template, 1, 0, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.content ? ctx_r1.content.tpl : null);
  }
}

var AutocompleteComponent = /*#__PURE__*/function () {
  function AutocompleteComponent() {
    (0,F_portfolio_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, AutocompleteComponent);
  }

  (0,F_portfolio_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__["default"])(AutocompleteComponent, [{
    key: "optionsClick",
    value: function optionsClick() {
      return this.options.changes.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.switchMap)(function (options) {
        var clicks$ = options.map(function (option) {
          return option.click$;
        });
        return rxjs__WEBPACK_IMPORTED_MODULE_7__.merge.apply(void 0, (0,F_portfolio_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(clicks$));
      }));
    }
  }]);

  return AutocompleteComponent;
}();

AutocompleteComponent.ɵfac = function AutocompleteComponent_Factory(t) {
  return new (t || AutocompleteComponent)();
};

AutocompleteComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: AutocompleteComponent,
  selectors: [["app-autocomplete"]],
  contentQueries: function AutocompleteComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵcontentQuery"](dirIndex, _autocomplete_content_directive__WEBPACK_IMPORTED_MODULE_3__.AutocompleteContentDirective, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵcontentQuery"](dirIndex, _option_option_component__WEBPACK_IMPORTED_MODULE_4__.OptionComponent, 4);
    }

    if (rf & 2) {
      var _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.content = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.options = _t);
    }
  },
  viewQuery: function AutocompleteComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 5);
    }

    if (rf & 2) {
      var _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.rootTemplate = _t.first);
    }
  },
  exportAs: ["appAutocomplete"],
  decls: 2,
  vars: 0,
  consts: [["root", ""], [1, "autocomplete", "search-list"], [4, "ngTemplateOutlet"]],
  template: function AutocompleteComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, AutocompleteComponent_ng_template_0_Template, 2, 1, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgTemplateOutlet],
  styles: [".autocomplete[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  display: block;\r\n}\r\n\r\n.search-list[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 100%;\r\n  left: 0;\r\n  background: #FFFFFF;\r\n  width: 100%;\r\n  margin-top: 1rem;\r\n  padding-left: 0;\r\n  border-radius: 0.267rem;\r\n  z-index: 1200;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dG9jb21wbGV0ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULE9BQU87RUFDUCxtQkFBbUI7RUFDbkIsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLGFBQWE7QUFDZiIsImZpbGUiOiJhdXRvY29tcGxldGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hdXRvY29tcGxldGUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4uc2VhcmNoLWxpc3Qge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDEwMCU7XHJcbiAgbGVmdDogMDtcclxuICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuMjY3cmVtO1xyXG4gIHotaW5kZXg6IDEyMDA7XHJcbn1cclxuIl19 */"]
});

/***/ }),

/***/ 6780:
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/autocomplete/autocomplete.directive.ts ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AutocompleteDirective": function() { return /* binding */ AutocompleteDirective; },
/* harmony export */   "overlayClickOutside": function() { return /* binding */ overlayClickOutside; }
/* harmony export */ });
/* harmony import */ var F_portfolio_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var F_portfolio_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 6312);
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/overlay */ 1782);
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/portal */ 7208);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 5921);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 9151);
/* harmony import */ var ngx_take_until_destroy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-take-until-destroy */ 9222);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 587);












var AutocompleteDirective = /*#__PURE__*/function () {
  function AutocompleteDirective(host, ngControl, vcr, overlay, router) {
    (0,F_portfolio_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AutocompleteDirective);

    this.host = host;
    this.ngControl = ngControl;
    this.vcr = vcr;
    this.overlay = overlay;
    this.router = router;
  }

  (0,F_portfolio_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(AutocompleteDirective, [{
    key: "control",
    get: function get() {
      return this.ngControl.control;
    }
  }, {
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this = this;

      (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.fromEvent)(this.origin, 'focus').pipe((0,ngx_take_until_destroy__WEBPACK_IMPORTED_MODULE_3__.untilDestroyed)(this)).subscribe(function () {
        _this.openDropdown();

        _this.appAutocomplete.optionsClick().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(_this.overlayRef.detachments())).subscribe(function (value) {
          _this.control.setValue(value);

          _this.close();
        });
      });
      this.router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.filter)(function (event) {
        return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_6__.NavigationEnd;
      })).subscribe(function (routeChange) {
        _this.close();
      });
    }
  }, {
    key: "openDropdown",
    value: function openDropdown() {
      var _this2 = this;

      this.close();
      this.overlayRef = this.overlay.create({
        width: this.origin.offsetWidth,
        maxHeight: 40 * 3,
        backdropClass: '',
        scrollStrategy: this.overlay.scrollStrategies.reposition(),
        positionStrategy: this.getOverlayPosition()
      });
      var template = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_7__.TemplatePortal(this.appAutocomplete.rootTemplate, this.vcr);
      this.overlayRef.attach(template);
      overlayClickOutside(this.overlayRef, this.origin).subscribe(function () {
        return _this2.close();
      });
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {}
  }, {
    key: "close",
    value: function close() {
      if (this.overlayRef) {
        this.overlayRef.detach();
      }

      this.overlayRef = null;
    }
  }, {
    key: "getOverlayPosition",
    value: function getOverlayPosition() {
      var positions = [new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_8__.ConnectionPositionPair({
        originX: 'start',
        originY: 'bottom'
      }, {
        overlayX: 'start',
        overlayY: 'top'
      }), new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_8__.ConnectionPositionPair({
        originX: 'start',
        originY: 'top'
      }, {
        overlayX: 'start',
        overlayY: 'bottom'
      })];
      return this.overlay.position().flexibleConnectedTo(this.origin).withPositions(positions).withFlexibleDimensions(false).withPush(false);
    }
  }, {
    key: "origin",
    get: function get() {
      return this.host.nativeElement;
    }
  }]);

  return AutocompleteDirective;
}();

AutocompleteDirective.ɵfac = function AutocompleteDirective_Factory(t) {
  return new (t || AutocompleteDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_9__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControl), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_9__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_8__.Overlay), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router));
};

AutocompleteDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineDirective"]({
  type: AutocompleteDirective,
  selectors: [["", "appAutocomplete", ""]],
  inputs: {
    appAutocomplete: "appAutocomplete"
  }
});
function overlayClickOutside(overlayRef, origin) {
  return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.fromEvent)(document, 'click').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.filter)(function (event) {
    var clickTarget = event.target;
    var notOrigin = clickTarget !== origin; // the input

    var notOverlay = !!overlayRef && overlayRef.overlayElement.contains(clickTarget) === false; // the autocomplete

    return notOrigin && notOverlay;
  }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(overlayRef.detachments()));
}

/***/ }),

/***/ 322:
/*!***********************************************************************!*\
  !*** ./src/app/shared/components/autocomplete/autocomplete.module.ts ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AutocompleteModule": function() { return /* binding */ AutocompleteModule; }
/* harmony export */ });
/* harmony import */ var F_portfolio_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var F_portfolio_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _autocomplete_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./autocomplete.component */ 7575);
/* harmony import */ var _autocomplete_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./autocomplete.directive */ 6780);
/* harmony import */ var _autocomplete_content_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./autocomplete-content.directive */ 4609);
/* harmony import */ var _option_option_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./option/option.component */ 7606);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);








var publicApi = [_autocomplete_component__WEBPACK_IMPORTED_MODULE_2__.AutocompleteComponent, _autocomplete_directive__WEBPACK_IMPORTED_MODULE_3__.AutocompleteDirective, _autocomplete_content_directive__WEBPACK_IMPORTED_MODULE_4__.AutocompleteContentDirective, _option_option_component__WEBPACK_IMPORTED_MODULE_5__.OptionComponent];
var AutocompleteModule = /*#__PURE__*/(0,F_portfolio_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function AutocompleteModule() {
  (0,F_portfolio_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, AutocompleteModule);
});

AutocompleteModule.ɵfac = function AutocompleteModule_Factory(t) {
  return new (t || AutocompleteModule)();
};

AutocompleteModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
  type: AutocompleteModule
});
AutocompleteModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule]]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AutocompleteModule, {
    declarations: [_autocomplete_component__WEBPACK_IMPORTED_MODULE_2__.AutocompleteComponent, _autocomplete_directive__WEBPACK_IMPORTED_MODULE_3__.AutocompleteDirective, _autocomplete_content_directive__WEBPACK_IMPORTED_MODULE_4__.AutocompleteContentDirective, _option_option_component__WEBPACK_IMPORTED_MODULE_5__.OptionComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule],
    exports: [_autocomplete_component__WEBPACK_IMPORTED_MODULE_2__.AutocompleteComponent, _autocomplete_directive__WEBPACK_IMPORTED_MODULE_3__.AutocompleteDirective, _autocomplete_content_directive__WEBPACK_IMPORTED_MODULE_4__.AutocompleteContentDirective, _option_option_component__WEBPACK_IMPORTED_MODULE_5__.OptionComponent]
  });
})();

/***/ }),

/***/ 7606:
/*!***************************************************************************!*\
  !*** ./src/app/shared/components/autocomplete/option/option.component.ts ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OptionComponent": function() { return /* binding */ OptionComponent; }
/* harmony export */ });
/* harmony import */ var F_portfolio_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var F_portfolio_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 6312);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 9361);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);





var _c0 = ["*"];
var OptionComponent = /*#__PURE__*/function () {
  function OptionComponent(host) {
    (0,F_portfolio_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, OptionComponent);

    this.host = host;
  }

  (0,F_portfolio_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(OptionComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      this.click$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.fromEvent)(this.element, 'click').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mapTo)(this.value));
    }
  }, {
    key: "element",
    get: function get() {
      return this.host.nativeElement;
    }
  }]);

  return OptionComponent;
}();

OptionComponent.ɵfac = function OptionComponent_Factory(t) {
  return new (t || OptionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ElementRef));
};

OptionComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: OptionComponent,
  selectors: [["app-option"]],
  inputs: {
    value: "value",
    url: "url"
  },
  ngContentSelectors: _c0,
  decls: 2,
  vars: 0,
  consts: [[1, "option"]],
  template: function OptionComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojection"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }
  },
  styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n\n.no-result[_nghost-%COMP%] {\n  pointer-events: none;\n}\n\n.option[_ngcontent-%COMP%] {\n  padding: 0.8rem 1rem;\n  cursor: pointer;\n  display: block;\n}\n\n[_nghost-%COMP%]:first-child   .option[_ngcontent-%COMP%] {\n  border-top-left-radius: 0.35rem;\n  border-top-right-radius: 0.35rem;\n}\n\n[_nghost-%COMP%]:last-child   .option[_ngcontent-%COMP%] {\n  border-bottom-left-radius: 0.35rem;\n  border-bottom-right-radius: 0.35rem;\n}\n\n.option[_ngcontent-%COMP%]:hover {\n  background-color: #F5F5F5;\n}\n\n.first-active-item[_nghost-%COMP%]   .option[_ngcontent-%COMP%] {\n  background-color: #F5F5F5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9wdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7QUFDRjs7QUFFQTtFQUNFLG9CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSwrQkFBQTtFQUNBLGdDQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQ0FBQTtFQUNBLG1DQUFBO0FBQ0Y7O0FBRUE7RUFDRSx5QkFBQTtBQUNGOztBQUdFO0VBQ0UseUJBQUE7QUFBSiIsImZpbGUiOiJvcHRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbjpob3N0Lm5vLXJlc3VsdCB7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbn1cclxuXHJcbi5vcHRpb24ge1xyXG4gIHBhZGRpbmc6IDAuOHJlbSAxcmVtO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuOmhvc3Q6Zmlyc3QtY2hpbGQgLm9wdGlvbiB7XHJcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMC4zNXJlbTtcclxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMC4zNXJlbTtcclxufVxyXG5cclxuOmhvc3Q6bGFzdC1jaGlsZCAub3B0aW9uIHtcclxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwLjM1cmVtO1xyXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwLjM1cmVtO1xyXG59XHJcblxyXG4ub3B0aW9uOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGNUY1O1xyXG59XHJcblxyXG46aG9zdC5maXJzdC1hY3RpdmUtaXRlbSB7XHJcbiAgLm9wdGlvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGNUY1O1xyXG4gIH1cclxufVxyXG4iXX0= */"],
  changeDetection: 0
});

/***/ }),

/***/ 3495:
/*!***********************************************************!*\
  !*** ./src/app/shared/customizer/customizer.component.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomizerComponent": function() { return /* binding */ CustomizerComponent; }
/* harmony export */ });
/* harmony import */ var F_portfolio_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var F_portfolio_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/config.service */ 6955);
/* harmony import */ var _services_customizer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/customizer.service */ 360);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 8626);








var _c0 = ["customizer"];

var _c1 = function _c1(a0) {
  return {
    "selected": a0
  };
};

function CustomizerComponent_div_68_Template(rf, ctx) {
  if (rf & 1) {
    var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "span", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CustomizerComponent_div_68_Template_span_click_1_listener() {
      var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r9);
      var color_r7 = restoredCtx.$implicit;
      var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return ctx_r8.customizerService.changeSidebarBGColor(color_r7);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var color_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMapInterpolate1"]("", color_r7.class, " d-block rounded");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](5, _c1, color_r7.active));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("data-bg-color", color_r7.code);
  }
}

function CustomizerComponent_div_70_Template(rf, ctx) {
  if (rf & 1) {
    var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "span", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CustomizerComponent_div_70_Template_span_click_1_listener() {
      var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r12);
      var color_r10 = restoredCtx.$implicit;
      var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return ctx_r11.customizerService.changeSidebarBGColor(color_r10);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var color_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMapInterpolate1"]("", color_r10.class, " d-block rounded");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](5, _c1, color_r10.active));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("data-bg-color", color_r10.code);
  }
}

function CustomizerComponent_div_77_Template(rf, ctx) {
  if (rf & 1) {
    var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CustomizerComponent_div_77_Template_div_click_1_listener() {
      var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r15);
      var color_r13 = restoredCtx.$implicit;
      var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return ctx_r14.customizerService.changeSidebarTransparentBGColor(color_r13);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var color_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMapInterpolate1"]("rounded ", color_r13.class, " ct-glass-bg");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](5, _c1, color_r13.active));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("data-bg-image", color_r13.class);
  }
}

function CustomizerComponent_div_85_Template(rf, ctx) {
  if (rf & 1) {
    var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "img", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CustomizerComponent_div_85_Template_img_click_1_listener() {
      var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r18);
      var img_r16 = restoredCtx.$implicit;
      var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return ctx_r17.customizerService.changeSidebarBgImage(img_r16);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var img_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", img_r16.src, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"])("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](2, _c1, img_r16.active));
  }
}

function CustomizerComponent_div_93_Template(rf, ctx) {
  if (rf & 1) {
    var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "span", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CustomizerComponent_div_93_Template_span_click_1_listener() {
      var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r21);
      var color_r19 = restoredCtx.$implicit;
      var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return ctx_r20.customizerService.changeSidebarTransparentBGColor(color_r19);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var color_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMapInterpolate1"]("", color_r19.class, " d-block rounded  ct-color-bg");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](5, _c1, color_r19.active));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("data-bg-color", color_r19.class);
  }
}

var _c2 = function _c2(a0) {
  return {
    "active": a0
  };
};

function CustomizerComponent_div_114_Template(rf, ctx) {
  if (rf & 1) {
    var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Sidebar Width");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "label", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "input", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function CustomizerComponent_div_114_Template_input_change_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r23);
      var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return ctx_r22.changeSidebarWidth("sidebar-sm");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Small");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "label", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "input", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function CustomizerComponent_div_114_Template_input_change_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r23);
      var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return ctx_r24.changeSidebarWidth("sidebar-md");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "Medium");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "label", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "input", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function CustomizerComponent_div_114_Template_input_change_14_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r23);
      var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return ctx_r25.changeSidebarWidth("sidebar-lg");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "Large");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](6, _c2, ctx_r6.size === "sidebar-sm"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("checked", ctx_r6.size === "sidebar-sm");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](8, _c2, ctx_r6.size === "sidebar-md"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("checked", ctx_r6.size === "sidebar-md");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](10, _c2, ctx_r6.size === "sidebar-lg"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("checked", ctx_r6.size === "sidebar-lg");
  }
}

var _c3 = function _c3(a0) {
  return {
    open: a0
  };
};

var CustomizerComponent = /*#__PURE__*/function () {
  function CustomizerComponent(renderer, configService, customizerService) {
    (0,F_portfolio_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CustomizerComponent);

    this.renderer = renderer;
    this.configService = configService;
    this.customizerService = customizerService;
    this.isBgImageDisplay = true;
    this.isOpen = true;
    this.config = {};
    this.directionEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
    this.config = this.configService.templateConf;
    this.isOpen = !this.config.layout.customizer.hidden;

    if (this.config.layout.sidebar.size) {
      this.size = this.config.layout.sidebar.size;
    }
  }

  (0,F_portfolio_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(CustomizerComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {}
  }, {
    key: "changeSidebarWidth",
    value: function changeSidebarWidth(value) {
      this.size = value;
      this.customizerService.changeSidebarWidth(value);
    }
  }, {
    key: "toggleCustomizer",
    value: function toggleCustomizer() {
      if (this.isOpen) {
        this.renderer.removeClass(this.customizer.nativeElement, "open");
        this.isOpen = false;
      } else {
        this.renderer.addClass(this.customizer.nativeElement, "open");
        this.isOpen = true;
      }
    }
  }, {
    key: "closeCustomizer",
    value: function closeCustomizer() {
      this.renderer.removeClass(this.customizer.nativeElement, "open");
      this.isOpen = false;
    }
  }, {
    key: "bgImageDisplay",
    value: function bgImageDisplay(e) {
      if (e.target.checked) {
        this.isBgImageDisplay = true;
      } else {
        this.isBgImageDisplay = false;
      } //emit event to FUll Layout


      this.customizerService.bgImageDisplay(e);
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      if (this.layoutSub) {
        this.layoutSub.unsubscribe();
      }
    }
  }]);

  return CustomizerComponent;
}();

CustomizerComponent.ɵfac = function CustomizerComponent_Factory(t) {
  return new (t || CustomizerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_config_service__WEBPACK_IMPORTED_MODULE_2__.ConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_customizer_service__WEBPACK_IMPORTED_MODULE_3__.CustomizerService));
};

CustomizerComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: CustomizerComponent,
  selectors: [["app-customizer"]],
  viewQuery: function CustomizerComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 5);
    }

    if (rf & 2) {
      var _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.customizer = _t.first);
    }
  },
  outputs: {
    directionEvent: "directionEvent"
  },
  decls: 115,
  vars: 17,
  consts: [[1, "customizer", "d-none", "d-lg-none", "d-xl-block", 3, "ngClass"], ["customizer", ""], [1, "customizer-close", 3, "click"], [1, "ft-x", "font-medium-3"], ["id", "customizer-toggle-icon", 1, "customizer-toggle", "bg-primary", 3, "click"], [1, "ft-settings", "font-medium-1", "spinner", "white", "align-middle"], ["data-ps-id", "df6a5ce4-a175-9172-4402-dabd98fc9c0a", 1, "customizer-content", "p-3", "ps-container", "ps-theme-dark", 3, "perfectScrollbar"], [1, "text-uppercase"], [1, "ct-layout"], [1, "mb-3", "d-flex", "align-items-center"], [1, "ft-layout", "font-medium-2", "mr-2"], [1, "layout-switch"], [1, "radio", "radio-sm", "d-inline-block", "light-layout", "mr-3"], ["id", "ll-switch", "type", "radio", "name", "layout-switch", 3, "checked", "click"], ["for", "ll-switch"], [1, "radio", "radio-sm", "d-inline-block", "dark-layout", "mr-3"], ["id", "dl-switch", "type", "radio", "name", "layout-switch", 3, "checked", "click"], ["for", "dl-switch"], [1, "radio", "radio-sm", "d-inline-block", "transparent-layout"], ["id", "tl-switch", "type", "radio", "name", "layout-switch", 3, "checked", "click"], ["for", "tl-switch"], [1, "ct-menu-type"], [1, "ft-credit-card", "font-medium-2", "mr-2"], [1, "menu-switch"], [1, "radio", "radio-sm", "d-inline-block", "menu-side", "mr-3"], ["id", "menu-side", "type", "radio", "name", "menu-switch", 3, "checked", "click"], ["for", "menu-side"], [1, "radio", "radio-sm", "d-inline-block", "menu-top"], ["id", "menu-top", "type", "radio", "name", "menu-switch", 3, "checked", "click"], ["for", "menu-top"], [1, "ct-navbar-type"], [1, "ft-more-horizontal", "font-medium-2", "mr-2"], [1, "navbar-switch"], [1, "radio", "radio-sm", "d-inline-block", "nav-static", "mr-3"], ["id", "nav-static", "type", "radio", "name", "navbar-switch", 3, "checked", "click"], ["for", "nav-static"], [1, "radio", "radio-sm", "d-inline-block", "nav-fixed"], ["id", "nav-fixed", "type", "radio", "name", "navbar-switch", 3, "checked", "click"], ["for", "nav-fixed"], [1, "ct-bg-color"], [1, "sb-options", "d-flex", "align-items-center", "mb-3"], [1, "ft-droplet", "font-medium-2", "mr-2"], [1, "cz-bg-color", "sb-color-options"], [1, "row", "mb-3"], ["class", "col px-2", 4, "ngFor", "ngForOf"], [1, "row"], [1, "tl-bg-img"], [1, "d-flex", "align-items-center", "mb-3"], [1, "ft-star", "font-medium-2", "mr-2"], [1, "cz-tl-bg-image", "row"], ["class", "col-sm-3", 4, "ngFor", "ngForOf"], [1, "ct-bg-image"], [1, "sb-bg-img", "d-flex", "align-items-center", "mb-3"], [1, "ft-sidebar", "font-medium-2", "mr-2"], [1, "cz-bg-image", "row", "sb-bg-img"], ["class", "col-2 px-2", 4, "ngFor", "ngForOf"], [1, "tl-color-option"], [1, "tl-color-options", "d-flex", "align-items-center", "mb-3"], [1, "cz-tl-bg-color"], ["class", "col", 4, "ngFor", "ngForOf"], [1, "ct-bg-image-toggler"], [1, "togglebutton", "toggle-sb-bg-img"], [1, "float-right"], [1, "checkbox"], ["id", "sidebar-bg-img", "type", "checkbox", "checked", "", 1, "cz-bg-image-display", 3, "change"], ["for", "sidebar-bg-img"], [1, "ct-compact-toggler"], [1, "togglebutton"], ["id", "cz-compact-menu", "type", "checkbox", 1, "cz-compact-menu", 3, "checked", "change"], ["for", "cz-compact-menu"], ["class", "ct-sidebar-size", 4, "ngIf"], [1, "col", "px-2"], [2, "width", "30px", "height", "30px", 3, "ngClass", "click"], [1, "col-sm-3"], [3, "ngClass", "click"], [1, "col-2", "px-2"], ["alt", "sidebar bg image", "width", "90", 1, "rounded", 3, "src", "ngClass", "click"], [1, "col"], [1, "ct-sidebar-size"], ["id", "cz-sidebar-width", "data-toggle", "buttons", 1, "cz-sidebar-width", "btn-group", "btn-group-toggle"], [1, "btn", "btn-outline-primary", 3, "ngClass"], ["id", "cz-btn-radio-1", "type", "radio", "name", "cz-btn-radio", "value", "sidebar-sm", 3, "checked", "change"], ["id", "cz-btn-radio-2", "type", "radio", "name", "cz-btn-radio", "value", "sidebar-md", 3, "checked", "change"], ["id", "cz-btn-radio-3", "type", "radio", "name", "cz-btn-radio", "value", "sidebar-lg", 3, "checked", "change"]],
  template: function CustomizerComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "a", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CustomizerComponent_Template_a_click_2_listener() {
        return ctx.closeCustomizer();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "i", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "a", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CustomizerComponent_Template_a_click_4_listener() {
        return ctx.toggleCustomizer();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "i", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "h4", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Theme Customizer");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Customize & Preview in Real Time");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "h6", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](14, "i", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "Layout Options");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "input", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CustomizerComponent_Template_input_click_19_listener() {
        return ctx.customizerService.switchLayout("light", ctx.isBgImageDisplay);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "label", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, "Light");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "input", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CustomizerComponent_Template_input_click_23_listener() {
        return ctx.customizerService.switchLayout("dark", ctx.isBgImageDisplay);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "label", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, "Dark");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "div", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "input", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CustomizerComponent_Template_input_click_27_listener() {
        return ctx.customizerService.switchLayout("transparent", ctx.isBgImageDisplay);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "label", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29, "Transparent");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "div", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](31, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "h6", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](33, "i", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](35, "Navigation Options");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "div", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "div", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "input", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CustomizerComponent_Template_input_click_38_listener() {
        return ctx.customizerService.toggleMenuPosition("Side");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "label", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](40, "Vertical");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "div", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "input", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CustomizerComponent_Template_input_click_42_listener() {
        return ctx.customizerService.toggleMenuPosition("Top");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "label", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](44, "Horizontal");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "div", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](46, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](47, "h6", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](48, "i", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](49, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](50, "Navbar Type");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "div", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](52, "div", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](53, "input", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CustomizerComponent_Template_input_click_53_listener() {
        return ctx.customizerService.toggleNavbarType("Static");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](54, "label", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](55, "Static");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](56, "div", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](57, "input", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CustomizerComponent_Template_input_click_57_listener() {
        return ctx.customizerService.toggleNavbarType("Fixed");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](58, "label", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](59, "Fixed");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](60, "div", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](61, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](62, "h6", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](63, "i", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](64, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](65, "Sidebar Color Options");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](66, "div", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](67, "div", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](68, CustomizerComponent_div_68_Template, 2, 7, "div", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](69, "div", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](70, CustomizerComponent_div_70_Template, 2, 7, "div", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](71, "div", 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](72, "h6", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](73, "i", 48);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](74, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](75, "Background Colors with Shades");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](76, "div", 49);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](77, CustomizerComponent_div_77_Template, 2, 7, "div", 50);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](78, "div", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](79, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](80, "h6", 52);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](81, "i", 53);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](82, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](83, "Sidebar Bg Image");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](84, "div", 54);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](85, CustomizerComponent_div_85_Template, 2, 4, "div", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](86, "div", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](87, "h6", 57);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](88, "i", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](89, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](90, "Background Colors");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](91, "div", 58);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](92, "div", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](93, CustomizerComponent_div_93_Template, 2, 7, "div", 59);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](94, "div", 60);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](95, "div", 61);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](96, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](97, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](98, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](99, "Sidebar Bg Image");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](100, "div", 62);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](101, "div", 63);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](102, "input", 64);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function CustomizerComponent_Template_input_change_102_listener($event) {
        return ctx.bgImageDisplay($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](103, "label", 65);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](104, "div", 66);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](105, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](106, "div", 67);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](107, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](108, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](109, "Compact Menu");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](110, "div", 62);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](111, "div", 63);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](112, "input", 68);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function CustomizerComponent_Template_input_change_112_listener($event) {
        return ctx.customizerService.toggleCompactMenu($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](113, "label", 69);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](114, CustomizerComponent_div_114_Template, 17, 12, "div", 70);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](15, _c3, ctx.isOpen));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("checked", ctx.config.layout.variant === "Light");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("checked", ctx.config.layout.variant === "Dark");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("checked", ctx.config.layout.variant === "Transparent");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("checked", ctx.config.layout.menuPosition === "Side");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("checked", ctx.config.layout.menuPosition === "Top");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("checked", ctx.config.layout.navbar.type === "Static");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("checked", ctx.config.layout.navbar.type === "Fixed");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.customizerService.lightDarkLayoutGradientBGColors);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.customizerService.lightDarkLayoutSolidBGColors);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.customizerService.transparentLayoutBGColorsWithShades);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.customizerService.lightDarkLayoutBGImages);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.customizerService.transparentLayoutBGColors);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("checked", ctx.config.layout.sidebar.collapsed);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.config.layout.sidebar.collapsed);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__.PerfectScrollbarDirective, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjdXN0b21pemVyLmNvbXBvbmVudC5zY3NzIn0= */"]
});

/***/ }),

/***/ 1918:
/*!************************************************!*\
  !*** ./src/app/shared/data/template-search.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LISTITEMS": function() { return /* binding */ LISTITEMS; }
/* harmony export */ });
var LISTITEMS = [{
  "url": "/page",
  "name": "Page",
  "icon": "ft-home"
}, {
  "url": "/pages/login",
  "name": "Login",
  "icon": "ft-log-in"
}];

/***/ }),

/***/ 8327:
/*!**********************************************************************!*\
  !*** ./src/app/shared/directives/sidebar-anchor-toggle.directive.ts ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SidebarAnchorToggleDirective": function() { return /* binding */ SidebarAnchorToggleDirective; }
/* harmony export */ });
/* harmony import */ var F_portfolio_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var F_portfolio_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var _sidebar_link_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sidebar-link.directive */ 7883);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);





var SidebarAnchorToggleDirective = /*#__PURE__*/function () {
  function SidebarAnchorToggleDirective(navlink) {
    (0,F_portfolio_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SidebarAnchorToggleDirective);

    this.navlink = navlink;
  }

  (0,F_portfolio_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(SidebarAnchorToggleDirective, [{
    key: "onClick",
    value: function onClick() {
      this.navlink.toggle();
    }
  }]);

  return SidebarAnchorToggleDirective;
}();

SidebarAnchorToggleDirective.ɵfac = function SidebarAnchorToggleDirective_Factory(t) {
  return new (t || SidebarAnchorToggleDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_sidebar_link_directive__WEBPACK_IMPORTED_MODULE_2__.SidebarLinkDirective));
};

SidebarAnchorToggleDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
  type: SidebarAnchorToggleDirective,
  selectors: [["", "appSidebarAnchorToggle", ""]],
  hostBindings: function SidebarAnchorToggleDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SidebarAnchorToggleDirective_click_HostBindingHandler($event) {
        return ctx.onClick($event);
      });
    }
  }
});

/***/ }),

/***/ 3273:
/*!*****************************************************************!*\
  !*** ./src/app/shared/directives/sidebar-dropdown.directive.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SidebarDropdownDirective": function() { return /* binding */ SidebarDropdownDirective; }
/* harmony export */ });
/* harmony import */ var F_portfolio_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var F_portfolio_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);




var SidebarDropdownDirective = /*#__PURE__*/function () {
  function SidebarDropdownDirective(router) {
    (0,F_portfolio_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SidebarDropdownDirective);

    this.router = router;
    this.navlinks = [];
  }

  (0,F_portfolio_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(SidebarDropdownDirective, [{
    key: "ngOnInit",
    value: function ngOnInit() {//write your code here!
    }
  }]);

  return SidebarDropdownDirective;
}();

SidebarDropdownDirective.ɵfac = function SidebarDropdownDirective_Factory(t) {
  return new (t || SidebarDropdownDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
};

SidebarDropdownDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
  type: SidebarDropdownDirective,
  selectors: [["", "appSidebarDropdown", ""]]
});

/***/ }),

/***/ 7883:
/*!*************************************************************!*\
  !*** ./src/app/shared/directives/sidebar-link.directive.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SidebarLinkDirective": function() { return /* binding */ SidebarLinkDirective; }
/* harmony export */ });
/* harmony import */ var F_portfolio_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var F_portfolio_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var _sidebar_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sidebar.directive */ 7744);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);





var SidebarLinkDirective = /*#__PURE__*/function () {
  function SidebarLinkDirective(sideNav) {
    (0,F_portfolio_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SidebarLinkDirective);

    this.sideNav = sideNav;
  }

  (0,F_portfolio_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(SidebarLinkDirective, [{
    key: "open",
    get: function get() {
      return this._open;
    },
    set: function set(value) {
      this._open = value;
    }
  }, {
    key: "sidebarGroupActive",
    get: function get() {
      return this._sidebarGroupActive;
    },
    set: function set(value) {
      this._sidebarGroupActive = value;
    }
  }, {
    key: "navCollapsedOpen",
    get: function get() {
      return this._navCollapsedOpen;
    },
    set: function set(value) {
      this._navCollapsedOpen = value;
    }
  }, {
    key: "ngOnInit",
    value: function ngOnInit() {
      this.sideNav.addLink(this);
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {} //when side menu (vertical menu) item gets clicked

  }, {
    key: "toggle",
    value: function toggle() {
      this.open = !this.open;

      if (this.open) {
        this.sideNav.closeOtherLinks(this);
      }

      if (!this.open && this.level.toString() === "1" && this.hasSub) {
        this.sidebarGroupActive = false;
      }
    }
  }]);

  return SidebarLinkDirective;
}();

SidebarLinkDirective.ɵfac = function SidebarLinkDirective_Factory(t) {
  return new (t || SidebarLinkDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_sidebar_directive__WEBPACK_IMPORTED_MODULE_2__.SidebarDirective));
};

SidebarLinkDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
  type: SidebarLinkDirective,
  selectors: [["", "appSidebarlink", ""]],
  hostVars: 6,
  hostBindings: function SidebarLinkDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("open", ctx.open)("sidebar-group-active", ctx.sidebarGroupActive)("nav-collapsed-open", ctx.navCollapsedOpen);
    }
  },
  inputs: {
    parent: "parent",
    level: "level",
    hasSub: "hasSub",
    path: "path",
    open: "open",
    sidebarGroupActive: "sidebarGroupActive",
    navCollapsedOpen: "navCollapsedOpen"
  }
});

/***/ }),

/***/ 7744:
/*!********************************************************!*\
  !*** ./src/app/shared/directives/sidebar.directive.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SidebarDirective": function() { return /* binding */ SidebarDirective; }
/* harmony export */ });
/* harmony import */ var F_portfolio_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var F_portfolio_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/config.service */ 6955);
/* harmony import */ var _services_layout_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/layout.service */ 5682);






var SidebarDirective = /*#__PURE__*/function () {
  function SidebarDirective(cdr, router, configService, layoutService) {
    (0,F_portfolio_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SidebarDirective);

    this.cdr = cdr;
    this.router = router;
    this.configService = configService;
    this.layoutService = layoutService;
    this.navlinks = [];
    this.config = {};
    this.mouseEnter = false;
    this.sidebarExpanded = true;
    this.config = this.configService.templateConf;
    this.sidebarExpanded = !this.config.layout.sidebar.collapsed;
  }

  (0,F_portfolio_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(SidebarDirective, [{
    key: "navExpanded",
    get: function get() {
      return this._navExpanded;
    },
    set: function set(value) {
      this._navExpanded = value;
    }
  }, {
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this = this;

      this.innerWidth = window.innerWidth;
      this.layoutSub = this.configService.templateConf$.subscribe(function (templateConf) {
        if (templateConf) {
          _this.config = templateConf;
        }

        _this.loadLayout();

        _this.cdr.markForCheck();
      });
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      if (this.layoutSub) {
        this.layoutSub.unsubscribe();
      }
    } //load layout when changes in the config

  }, {
    key: "loadLayout",
    value: function loadLayout() {
      this.sidebarExpanded = !this.config.layout.sidebar.collapsed;

      if (this.config.layout.sidebar.collapsed && !this.mouseEnter) {
        this.setSidebarGroupActiveCollapsed();
        this.navExpanded = false;
      } else {
        this.setSidebarGroupActive();
        this.navExpanded = true;
      }
    } //add menu links to the link list

  }, {
    key: "addLink",
    value: function addLink(link) {
      this.navlinks.push(link);
    } //close all other menu items other than active one

  }, {
    key: "closeOtherLinks",
    value: function closeOtherLinks(openLink) {
      this.navlinks.forEach(function (link) {
        if (link != openLink && (openLink.level.toString() === "1" || link.level === openLink.level)) {
          link.open = false;
          link.sidebarGroupActive = false;
        } else if (link === openLink && openLink.level.toString() === "1" && link.hasSub === true) {
          link.sidebarGroupActive = true;
        } else if (link === openLink && openLink.level.toString() === "1" && link.hasSub === false) {
          link.sidebarGroupActive = false;
          link.open = false;
        } else if (link === openLink && openLink.level.toString() != "1" && link.hasSub === false) {
          link.open = false;
          link.sidebarGroupActive = false;
          return;
        }
      });
    }
  }, {
    key: "ngAfterViewInit",
    value: function ngAfterViewInit() {} // call when sidebar toggle is collapsed but still in expand mode on mouse hover

  }, {
    key: "setSidebarGroupActive",
    value: function setSidebarGroupActive() {
      var _this2 = this;

      if (this.navlinks.length > 0) {
        this.navlinks.forEach(function (link) {
          link.sidebarGroupActive = false;
          link.navCollapsedOpen = false;
        });
        var matched = this.navlinks.find(function (link) {
          return link.path === _this2.router.url;
        });

        if (matched) {
          var parent = this.navlinks.find(function (link) {
            return link.parent === matched.parent && link.level.toString() === "1" && link.hasSub === true;
          });

          if (parent) {
            parent.sidebarGroupActive = true;
            parent.navCollapsedOpen = false;
            parent.open = true;
          }
        }
      }
    } // call when sidebar toggle is collapsed and is in collapse mode on mouse out

  }, {
    key: "setSidebarGroupActiveCollapsed",
    value: function setSidebarGroupActiveCollapsed() {
      var _this3 = this;

      this.closeOtherLinks(this.navlinks.find(function (link) {
        return link.path === _this3.router.url;
      }));

      if (this.navlinks.length > 0) {
        this.navlinks.forEach(function (link) {
          link.sidebarGroupActive = false;
          link.navCollapsedOpen = false;
        });
        var matched = this.navlinks.find(function (link) {
          return link.path === _this3.router.url;
        });

        if (matched) {
          var parent = this.navlinks.find(function (link) {
            return link.parent === matched.parent && link.level.toString() === "1" && link.hasSub === true;
          });

          if (parent) {
            parent.sidebarGroupActive = true;
            parent.navCollapsedOpen = true;
            parent.open = false;
          }
        }
      }
    } // mouse enter event of side menu

  }, {
    key: "onMouseOver",
    value: function onMouseOver(e) {
      this.mouseEnter = true;

      if (this.config.layout.sidebar.collapsed) {
        this.setSidebarGroupActive();
        this.navExpanded = true;
      }
    } // mouse leave event of side menu

  }, {
    key: "onMouseOut",
    value: function onMouseOut(e) {
      this.mouseEnter = false;

      if (this.config.layout.sidebar.collapsed) {
        this.setSidebarGroupActiveCollapsed();
        this.navExpanded = false;
      }
    }
  }]);

  return SidebarDirective;
}();

SidebarDirective.ɵfac = function SidebarDirective_Factory(t) {
  return new (t || SidebarDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_config_service__WEBPACK_IMPORTED_MODULE_2__.ConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_layout_service__WEBPACK_IMPORTED_MODULE_3__.LayoutService));
};

SidebarDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({
  type: SidebarDirective,
  selectors: [["", "appSidebar", ""]],
  hostVars: 2,
  hostBindings: function SidebarDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("mouseenter", function SidebarDirective_mouseenter_HostBindingHandler($event) {
        return ctx.onMouseOver($event);
      })("mouseleave", function SidebarDirective_mouseleave_HostBindingHandler($event) {
        return ctx.onMouseOut($event);
      });
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("expanded", ctx.navExpanded);
    }
  },
  inputs: {
    navExpanded: "navExpanded"
  }
});

/***/ }),

/***/ 3418:
/*!******************************************************************!*\
  !*** ./src/app/shared/directives/toggle-fullscreen.directive.ts ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToggleFullscreenDirective": function() { return /* binding */ ToggleFullscreenDirective; }
/* harmony export */ });
/* harmony import */ var F_portfolio_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var F_portfolio_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var screenfull__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! screenfull */ 8914);
/* harmony import */ var screenfull__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(screenfull__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




var ToggleFullscreenDirective = /*#__PURE__*/function () {
  function ToggleFullscreenDirective() {
    (0,F_portfolio_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ToggleFullscreenDirective);
  }

  (0,F_portfolio_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(ToggleFullscreenDirective, [{
    key: "onClick",
    value: function onClick() {
      if (screenfull__WEBPACK_IMPORTED_MODULE_2__.isEnabled) {
        screenfull__WEBPACK_IMPORTED_MODULE_2__.toggle();
      }
    }
  }]);

  return ToggleFullscreenDirective;
}();

ToggleFullscreenDirective.ɵfac = function ToggleFullscreenDirective_Factory(t) {
  return new (t || ToggleFullscreenDirective)();
};

ToggleFullscreenDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
  type: ToggleFullscreenDirective,
  selectors: [["", "appToggleFullscreen", ""]],
  hostBindings: function ToggleFullscreenDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ToggleFullscreenDirective_click_HostBindingHandler() {
        return ctx.onClick();
      });
    }
  }
});

/***/ }),

/***/ 1354:
/*!**********************************************************************!*\
  !*** ./src/app/shared/directives/topmenu-anchor-toggle.directive.ts ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TopMenuAnchorToggleDirective": function() { return /* binding */ TopMenuAnchorToggleDirective; }
/* harmony export */ });
/* harmony import */ var F_portfolio_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var F_portfolio_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var _topmenu_link_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./topmenu-link.directive */ 1793);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);





var TopMenuAnchorToggleDirective = /*#__PURE__*/function () {
  function TopMenuAnchorToggleDirective(navlink) {
    (0,F_portfolio_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, TopMenuAnchorToggleDirective);

    this.navlink = navlink;
  } // @HostListener("click", ["$event"])
  // onClick() {
  //   this.navlink.toggle();
  // }


  (0,F_portfolio_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(TopMenuAnchorToggleDirective, [{
    key: "onMouseOver",
    value: function onMouseOver(e) {
      this.navlink.openDropdown();
    }
  }]);

  return TopMenuAnchorToggleDirective;
}();

TopMenuAnchorToggleDirective.ɵfac = function TopMenuAnchorToggleDirective_Factory(t) {
  return new (t || TopMenuAnchorToggleDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_topmenu_link_directive__WEBPACK_IMPORTED_MODULE_2__.TopMenuLinkDirective));
};

TopMenuAnchorToggleDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
  type: TopMenuAnchorToggleDirective,
  selectors: [["", "appTopMenuAnchorToggle", ""]],
  hostBindings: function TopMenuAnchorToggleDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("mouseenter", function TopMenuAnchorToggleDirective_mouseenter_HostBindingHandler($event) {
        return ctx.onMouseOver($event);
      });
    }
  }
});

/***/ }),

/***/ 235:
/*!*****************************************************************!*\
  !*** ./src/app/shared/directives/topmenu-dropdown.directive.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TopMenuDropdownDirective": function() { return /* binding */ TopMenuDropdownDirective; }
/* harmony export */ });
/* harmony import */ var F_portfolio_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var F_portfolio_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);




var TopMenuDropdownDirective = /*#__PURE__*/function () {
  function TopMenuDropdownDirective(router) {
    (0,F_portfolio_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, TopMenuDropdownDirective);

    this.router = router;
    this.navlinks = [];
  }

  (0,F_portfolio_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(TopMenuDropdownDirective, [{
    key: "ngOnInit",
    value: function ngOnInit() {//write your code here!
    }
  }]);

  return TopMenuDropdownDirective;
}();

TopMenuDropdownDirective.ɵfac = function TopMenuDropdownDirective_Factory(t) {
  return new (t || TopMenuDropdownDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
};

TopMenuDropdownDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
  type: TopMenuDropdownDirective,
  selectors: [["", "appTopMenuDropdown", ""]]
});

/***/ }),

/***/ 1793:
/*!*************************************************************!*\
  !*** ./src/app/shared/directives/topmenu-link.directive.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TopMenuLinkDirective": function() { return /* binding */ TopMenuLinkDirective; }
/* harmony export */ });
/* harmony import */ var F_portfolio_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var F_portfolio_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var _topmenu_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./topmenu.directive */ 342);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);





var TopMenuLinkDirective = /*#__PURE__*/function () {
  function TopMenuLinkDirective(topNav) {
    (0,F_portfolio_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, TopMenuLinkDirective);

    this.topNav = topNav;
  }

  (0,F_portfolio_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(TopMenuLinkDirective, [{
    key: "show",
    get: function get() {
      return this._show;
    },
    set: function set(value) {
      this._show = value;

      if (value) {
        this.topNav.closeOtherLinks(this);
      }
    }
  }, {
    key: "ngOnInit",
    value: function ngOnInit() {
      this.topNav.addLink(this);
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {} // public toggle(): any {
    //   this.show = !this.show;
    // }

  }, {
    key: "openDropdown",
    value: function openDropdown() {
      this.show = true;
    }
  }]);

  return TopMenuLinkDirective;
}();

TopMenuLinkDirective.ɵfac = function TopMenuLinkDirective_Factory(t) {
  return new (t || TopMenuLinkDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_topmenu_directive__WEBPACK_IMPORTED_MODULE_2__.TopMenuDirective));
};

TopMenuLinkDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
  type: TopMenuLinkDirective,
  selectors: [["", "appTopMenulink", ""]],
  hostVars: 2,
  hostBindings: function TopMenuLinkDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("show", ctx.show);
    }
  },
  inputs: {
    parent: "parent",
    level: "level",
    show: "show"
  }
});

/***/ }),

/***/ 342:
/*!********************************************************!*\
  !*** ./src/app/shared/directives/topmenu.directive.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TopMenuDirective": function() { return /* binding */ TopMenuDirective; }
/* harmony export */ });
/* harmony import */ var F_portfolio_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var F_portfolio_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);



var TopMenuDirective = /*#__PURE__*/function () {
  function TopMenuDirective() {
    (0,F_portfolio_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, TopMenuDirective);

    this.navlinks = [];
  }

  (0,F_portfolio_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(TopMenuDirective, [{
    key: "ngOnInit",
    value: function ngOnInit() {}
  }, {
    key: "addLink",
    value: function addLink(link) {
      this.navlinks.push(link);
    }
  }, {
    key: "closeOtherLinks",
    value: function closeOtherLinks(openLink) {
      this.navlinks.forEach(function (link) {
        if (link != openLink && (openLink.level.toString() === "1" || link.level === openLink.level)) {
          link.show = false;
        }
      });
    }
  }, {
    key: "onMouseOut",
    value: function onMouseOut(e) {
      this.navlinks.forEach(function (link) {
        link.show = false;
      });
    }
  }]);

  return TopMenuDirective;
}();

TopMenuDirective.ɵfac = function TopMenuDirective_Factory(t) {
  return new (t || TopMenuDirective)();
};

TopMenuDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
  type: TopMenuDirective,
  selectors: [["", "appTopMenu", ""]],
  hostBindings: function TopMenuDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("mouseleave", function TopMenuDirective_mouseleave_HostBindingHandler($event) {
        return ctx.onMouseOut($event);
      });
    }
  }
});

/***/ }),

/***/ 5227:
/*!***************************************************!*\
  !*** ./src/app/shared/footer/footer.component.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": function() { return /* binding */ FooterComponent; }
/* harmony export */ });
/* harmony import */ var F_portfolio_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var F_portfolio_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);




var FooterComponent = /*#__PURE__*/(0,F_portfolio_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function FooterComponent() {
  (0,F_portfolio_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, FooterComponent);

  //Variables
  this.currentDate = new Date();
});

FooterComponent.ɵfac = function FooterComponent_Factory(t) {
  return new (t || FooterComponent)();
};

FooterComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: FooterComponent,
  selectors: [["app-footer"]],
  decls: 8,
  vars: 4,
  consts: [[1, "footer"], [1, "copyright", "clearfix", "text-muted", "m-0"], ["id", "pixinventLink", "href", "https://themeforest.net/user/pixinvent/portfolio?ref=pixinvent"], [1, "d-none", "d-sm-inline-block"]],
  template: function FooterComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "footer", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "p", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "date");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "a", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "PIXINVENT");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "span", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, ", All rights reserved.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" Copyright \xA9 ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](3, 1, ctx.currentDate, "yyyy"), " ");
    }
  },
  pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.DatePipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LnNjc3MifQ== */"]
});

/***/ }),

/***/ 2185:
/*!*********************************************************************!*\
  !*** ./src/app/shared/horizontal-menu/horizontal-menu.component.ts ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HorizontalMenuComponent": function() { return /* binding */ HorizontalMenuComponent; }
/* harmony export */ });
/* harmony import */ var F_portfolio_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var F_portfolio_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var _navigation_routes_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navigation-routes.config */ 7015);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_layout_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/layout.service */ 5682);
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/config.service */ 6955);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _directives_topmenu_dropdown_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../directives/topmenu-dropdown.directive */ 235);
/* harmony import */ var _directives_topmenu_link_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../directives/topmenu-link.directive */ 1793);
/* harmony import */ var _directives_topmenu_anchor_toggle_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../directives/topmenu-anchor-toggle.directive */ 1354);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ 9461);













var _c0 = function _c0(a0) {
  return [a0];
};

function HorizontalMenuComponent_li_3_a_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var menuItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](4, _c0, menuItem_r1.icon));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](4, 2, menuItem_r1.title));
  }
}

function HorizontalMenuComponent_li_3_a_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var menuItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("routerLink", menuItem_r1.path);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](5, _c0, menuItem_r1.icon));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](4, 3, menuItem_r1.title));
  }
}

function HorizontalMenuComponent_li_3_a_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var menuItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("href", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](5, _c0, menuItem_r1.path), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](7, _c0, menuItem_r1.icon));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](4, 3, menuItem_r1.title));
  }
}

function HorizontalMenuComponent_li_3_ul_4_li_1_a_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var menuSubItem_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", "dropdown-toggle dropdown-item d-flex align-items-center");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](5, _c0, menuSubItem_r10.icon));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](4, 3, menuSubItem_r10.title));
  }
}

function HorizontalMenuComponent_li_3_ul_4_li_1_a_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var menuSubItem_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("routerLink", menuSubItem_r10.path);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", "dropdown-item d-flex align-items-center");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](6, _c0, menuSubItem_r10.icon));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](4, 4, menuSubItem_r10.title));
  }
}

function HorizontalMenuComponent_li_3_ul_4_li_1_a_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var menuSubItem_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("href", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](6, _c0, menuSubItem_r10.path), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"])("ngClass", "dropdown-item d-flex align-items-center");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](8, _c0, menuSubItem_r10.icon));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](4, 4, menuSubItem_r10.title));
  }
}

function HorizontalMenuComponent_li_3_ul_4_li_1_ul_4_li_1_a_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var menuSubsubItem_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", "dropdown-item d-flex align-items-center")("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](4, _c0, menuSubsubItem_r19.path));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](6, _c0, menuSubsubItem_r19.icon));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](menuSubsubItem_r19.title);
  }
}

function HorizontalMenuComponent_li_3_ul_4_li_1_ul_4_li_1_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var menuSubsubItem_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", "dropdown-item d-flex align-items-center")("href", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](4, _c0, menuSubsubItem_r19.path), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](6, _c0, menuSubsubItem_r19.icon));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](menuSubsubItem_r19.title);
  }
}

var _c1 = function _c1() {
  return {
    exact: true
  };
};

function HorizontalMenuComponent_li_3_ul_4_li_1_ul_4_li_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "li", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, HorizontalMenuComponent_li_3_ul_4_li_1_ul_4_li_1_a_1_Template, 4, 8, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, HorizontalMenuComponent_li_3_ul_4_li_1_ul_4_li_1_ng_template_2_Template, 4, 8, "ng-template", null, 25, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var menuSubsubItem_r19 = ctx.$implicit;

    var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](3);

    var menuItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4).$implicit;
    var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("level", ctx_r18.level + 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("parent", menuItem_r1.title)("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](5, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !menuSubsubItem_r19.isExternalLink)("ngIfElse", _r21);
  }
}

function HorizontalMenuComponent_li_3_ul_4_li_1_ul_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ul", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, HorizontalMenuComponent_li_3_ul_4_li_1_ul_4_li_1_Template, 4, 6, "li", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var menuSubItem_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", menuSubItem_r10.submenu);
  }
}

function HorizontalMenuComponent_li_3_ul_4_li_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "li", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, HorizontalMenuComponent_li_3_ul_4_li_1_a_1_Template, 5, 7, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, HorizontalMenuComponent_li_3_ul_4_li_1_a_2_Template, 5, 8, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, HorizontalMenuComponent_li_3_ul_4_li_1_a_3_Template, 5, 10, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, HorizontalMenuComponent_li_3_ul_4_li_1_ul_4_Template, 2, 1, "ul", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var menuSubItem_r10 = ctx.$implicit;
    var menuItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2).$implicit;
    var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("level", ctx_r9.level + 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("parent", menuItem_r1.title)("routerLinkActive", menuSubItem_r10.submenu.length != 0 ? "active" : "active")("ngClass", menuSubItem_r10.class === "dropdown-item" ? "" : "has-sub dropdown dropdown-submenu");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵattribute"]("data-menu", menuSubItem_r10.class === "dropdown-item" ? "" : "dropdown-submenu");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", menuSubItem_r10.submenu.length > 0 && !menuSubItem_r10.isExternalLink);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", menuSubItem_r10.submenu.length === 0 && !menuSubItem_r10.isExternalLink);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", menuSubItem_r10.isExternalLink);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", menuSubItem_r10.submenu.length > 0);
  }
}

function HorizontalMenuComponent_li_3_ul_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ul", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, HorizontalMenuComponent_li_3_ul_4_li_1_Template, 5, 9, "li", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var menuItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", menuItem_r1.submenu);
  }
}

function HorizontalMenuComponent_li_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "li", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, HorizontalMenuComponent_li_3_a_1_Template, 5, 6, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, HorizontalMenuComponent_li_3_a_2_Template, 5, 7, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, HorizontalMenuComponent_li_3_a_3_Template, 5, 9, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, HorizontalMenuComponent_li_3_ul_4_Template, 2, 1, "ul", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var menuItem_r1 = ctx.$implicit;
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("level", ctx_r0.level + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("parent", menuItem_r1.title)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](10, _c0, menuItem_r1.class))("routerLinkActive", menuItem_r1.submenu.length != 0 ? "active" : "active")("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](12, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵattribute"]("data-menu", menuItem_r1.class === "dropdown nav-item" ? "dropdown" : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", menuItem_r1.submenu.length > 0 && !menuItem_r1.isExternalLink);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", menuItem_r1.submenu.length === 0 && !menuItem_r1.isExternalLink);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", menuItem_r1.isExternalLink);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", menuItem_r1.submenu.length > 0);
  }
}

var _c2 = function _c2(a0, a1) {
  return {
    "navbar-sticky": a0,
    "navbar-fixed": a1
  };
};

var HorizontalMenuComponent = /*#__PURE__*/function () {
  function HorizontalMenuComponent(layoutService, configService, cdr, router) {
    (0,F_portfolio_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, HorizontalMenuComponent);

    this.layoutService = layoutService;
    this.configService = configService;
    this.cdr = cdr;
    this.router = router;
    this.config = {};
    this.level = 0;
    this.transparentBGClass = "";
    this.menuPosition = 'Side';
    this.config = this.configService.templateConf;
  }

  (0,F_portfolio_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(HorizontalMenuComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      this.menuItems = _navigation_routes_config__WEBPACK_IMPORTED_MODULE_2__.HROUTES;
    }
  }, {
    key: "ngAfterViewInit",
    value: function ngAfterViewInit() {
      var _this = this;

      this.layoutSub = this.configService.templateConf$.subscribe(function (templateConf) {
        if (templateConf) {
          _this.config = templateConf;
        }

        _this.loadLayout();

        _this.cdr.markForCheck();
      });
    }
  }, {
    key: "loadLayout",
    value: function loadLayout() {
      if (this.config.layout.menuPosition && this.config.layout.menuPosition.toString().trim() != "") {
        this.menuPosition = this.config.layout.menuPosition;
      }

      if (this.config.layout.variant === "Transparent") {
        this.transparentBGClass = this.config.layout.sidebar.backgroundColor;
      } else {
        this.transparentBGClass = "";
      }
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      if (this.layoutSub) {
        this.layoutSub.unsubscribe();
      }
    }
  }]);

  return HorizontalMenuComponent;
}();

HorizontalMenuComponent.ɵfac = function HorizontalMenuComponent_Factory(t) {
  return new (t || HorizontalMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_layout_service__WEBPACK_IMPORTED_MODULE_3__.LayoutService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_config_service__WEBPACK_IMPORTED_MODULE_4__.ConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router));
};

HorizontalMenuComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
  type: HorizontalMenuComponent,
  selectors: [["app-horizontal-menu"]],
  decls: 4,
  vars: 8,
  consts: [["role", "navigation", "data-menu", "menu-wrapper", "data-nav", "brand-center", 3, "ngClass"], ["data-menu", "menu-container", 1, "navbar-container", "main-menu-content", "center-layout"], ["appTopMenuDropdown", "", "id", "main-menu-navigation", "data-menu", "menu-navigation", 1, "navigation-main", "nav", "navbar-nav"], ["appTopMenulink", "", 3, "parent", "level", "ngClass", "routerLinkActive", "routerLinkActiveOptions", 4, "ngFor", "ngForOf"], ["appTopMenulink", "", 3, "parent", "level", "ngClass", "routerLinkActive", "routerLinkActiveOptions"], ["appTopMenuAnchorToggle", "", "data-toggle", "dropdown", "class", "dropdown-toggle nav-link d-flex align-items-center", 4, "ngIf"], ["appTopMenuAnchorToggle", "", "data-toggle", "dropdown", "class", "nav-link d-flex align-items-center", 3, "routerLink", 4, "ngIf"], ["target", "_blank", "data-toggle", "dropdown", "class", "nav-link d-flex align-items-center", 3, "href", 4, "ngIf"], ["appTopMenuDropdown", "", "class", "dropdown-menu", 4, "ngIf"], ["appTopMenuAnchorToggle", "", "data-toggle", "dropdown", 1, "dropdown-toggle", "nav-link", "d-flex", "align-items-center"], [3, "ngClass"], ["appTopMenuAnchorToggle", "", "data-toggle", "dropdown", 1, "nav-link", "d-flex", "align-items-center", 3, "routerLink"], ["target", "_blank", "data-toggle", "dropdown", 1, "nav-link", "d-flex", "align-items-center", 3, "href"], ["appTopMenuDropdown", "", 1, "dropdown-menu"], ["appTopMenulink", "", 3, "parent", "level", "routerLinkActive", "ngClass", 4, "ngFor", "ngForOf"], ["appTopMenulink", "", 3, "parent", "level", "routerLinkActive", "ngClass"], ["appTopMenuAnchorToggle", "", 3, "ngClass", 4, "ngIf"], ["appTopMenuAnchorToggle", "", 3, "routerLink", "ngClass", 4, "ngIf"], [3, "href", "ngClass", 4, "ngIf"], ["appTopMenuAnchorToggle", "", 3, "ngClass"], ["appTopMenuAnchorToggle", "", 3, "routerLink", "ngClass"], [3, "href", "ngClass"], ["appTopMenulink", "", "data-menu", "", "data-toggle", "dropdown", "routerLinkActive", "active", 3, "parent", "level", "routerLinkActiveOptions", 4, "ngFor", "ngForOf"], ["appTopMenulink", "", "data-menu", "", "data-toggle", "dropdown", "routerLinkActive", "active", 3, "parent", "level", "routerLinkActiveOptions"], ["appTopMenuAnchorToggle", "", "data-toggle", "dropdown", 3, "ngClass", "routerLink", 4, "ngIf", "ngIfElse"], ["externalSubSubLinkBlock", ""], ["appTopMenuAnchorToggle", "", "data-toggle", "dropdown", 3, "ngClass", "routerLink"], [1, ""], ["data-toggle", "dropdown", "target", "_blank", 3, "ngClass", "href"]],
  template: function HorizontalMenuComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "ul", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, HorizontalMenuComponent_li_3_Template, 5, 13, "li", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassMapInterpolate1"]("header-navbar navbar-expand-sm navbar navbar-horizontal   navbar-light navbar-shadow menu-border navbar-brand-center  ", ctx.transparentBGClass, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction2"](5, _c2, ctx.menuPosition === "Top" && (ctx.config == null ? null : ctx.config.layout.navbar.type) === "Static", ctx.menuPosition === "Top" && (ctx.config == null ? null : ctx.config.layout.navbar.type) === "Static"));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx.menuItems);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgClass, _directives_topmenu_dropdown_directive__WEBPACK_IMPORTED_MODULE_5__.TopMenuDropdownDirective, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _directives_topmenu_link_directive__WEBPACK_IMPORTED_MODULE_6__.TopMenuLinkDirective, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterLinkActive, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _directives_topmenu_anchor_toggle_directive__WEBPACK_IMPORTED_MODULE_7__.TopMenuAnchorToggleDirective, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterLinkWithHref],
  pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslatePipe],
  styles: [".navbar.header-navbar.navbar-horizontal[_ngcontent-%COMP%] {\n  position: unset !important;\n  background: transparent !important;\n}\n\n.horizontal-menu.page-scrolled[_ngcontent-%COMP%]   div.header-navbar[_ngcontent-%COMP%] {\n  box-shadow: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvcml6b250YWwtbWVudS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLDBCQUFBO0VBQ0Esa0NBQUE7QUFDRDs7QUFDQTtFQUNDLDJCQUFBO0FBRUQiLCJmaWxlIjoiaG9yaXpvbnRhbC1tZW51LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmJhci5oZWFkZXItbmF2YmFyLm5hdmJhci1ob3Jpem9udGFsIHtcclxuXHRwb3NpdGlvbjogdW5zZXQgIWltcG9ydGFudDtcclxuXHRiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcbi5ob3Jpem9udGFsLW1lbnUucGFnZS1zY3JvbGxlZCBkaXYuaGVhZGVyLW5hdmJhciB7XHJcblx0Ym94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcbiJdfQ== */"]
});

/***/ }),

/***/ 7015:
/*!********************************************************************!*\
  !*** ./src/app/shared/horizontal-menu/navigation-routes.config.ts ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HROUTES": function() { return /* binding */ HROUTES; }
/* harmony export */ });
var HROUTES = [{
  path: "/profile",
  title: "Profile",
  icon: "ft-user",
  class: "dropdown nav-item",
  isExternalLink: false,
  submenu: []
} // {
// 	path: "",
// 	title: "Menu Levels",
// 	icon: "ft-align-left",
// 	class: "dropdown nav-item has-sub",
// 	badge: "",
// 	badgeClass: "",
// 	isExternalLink: false,
// 	submenu: [
// 		{
// 			path: "/YOUR-ROUTE-PATH",
// 			title: "Second Level",
// 			icon: "ft-arrow-right submenu-icon",
// 			class: "dropdown-item",
// 			badge: "",
// 			badgeClass: "",
// 			isExternalLink: false,
// 			submenu: [],
// 		},
// 		{
// 			path: "",
// 			title: "Second Level Child",
// 			icon: "ft-arrow-right submenu-icon",
// 			class: "has-sub",
// 			badge: "",
// 			badgeClass: "",
// 			isExternalLink: false,
// 			submenu: [
// 				{
// 					path: "/YOUR-ROUTE-PATH",
// 					title: "Third Level 1.1",
// 					icon: "ft-arrow-right submenu-icon",
// 					class: "dropdown-item",
// 					badge: "",
// 					badgeClass: "",
// 					isExternalLink: false,
// 					submenu: [],
// 				},
// 				{
// 					path: "/YOUR-ROUTE-PATH",
// 					title: "Third Level 1.2",
// 					icon: "ft-arrow-right submenu-icon",
// 					class: "dropdown-item",
// 					badge: "",
// 					badgeClass: "",
// 					isExternalLink: false,
// 					submenu: [],
// 				},
// 			],
// 		},
// 	],
// },
];

/***/ }),

/***/ 4696:
/*!***************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavbarComponent": function() { return /* binding */ NavbarComponent; }
/* harmony export */ });
/* harmony import */ var F_portfolio_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var F_portfolio_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _data_template_search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/template-search */ 1918);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 9461);
/* harmony import */ var _services_layout_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/layout.service */ 5682);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/config.service */ 6955);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var ng_click_outside__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-click-outside */ 3530);
/* harmony import */ var _horizontal_menu_horizontal_menu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../horizontal-menu/horizontal-menu.component */ 2185);
/* harmony import */ var _directives_topmenu_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../directives/topmenu.directive */ 342);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 5365);















var _c0 = ["search"];
var _c1 = ["searchResults"];

var _c2 = function _c2(a0, a1, a2, a3) {
  return {
    "navbar-brand-center": a0,
    "navbar-static": a1,
    "navbar-sticky": a2,
    "fixed-top": a3
  };
};

var NavbarComponent = /*#__PURE__*/function () {
  function NavbarComponent(translate, layoutService, router, configService, cdr) {
    var _this = this;

    (0,F_portfolio_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, NavbarComponent);

    this.translate = translate;
    this.layoutService = layoutService;
    this.router = router;
    this.configService = configService;
    this.cdr = cdr;
    this.currentLang = "en";
    this.selectedLanguageText = "English";
    this.selectedLanguageFlag = "./assets/img/flags/us.png";
    this.toggleClass = "ft-maximize";
    this.placement = "bottom-right";
    this.logoUrl = 'assets/img/logo.png';
    this.menuPosition = 'Side';
    this.isSmallScreen = false;
    this.searchOpenClass = "";
    this.transparentBGClass = "";
    this.hideSidebar = true;
    this.isCollapsed = true;
    this.toggleHideSidebar = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.EventEmitter();
    this.seachTextEmpty = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.EventEmitter();
    this.listItems = [];
    this.control = new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl();
    this.config = {};
    var browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|es|pt|de/) ? browserLang : "en");
    this.config = this.configService.templateConf;
    this.innerWidth = window.innerWidth;
    this.layoutSub = layoutService.toggleSidebar$.subscribe(function (isShow) {
      _this.hideSidebar = !isShow;
    });
  }

  (0,F_portfolio_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(NavbarComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      this.listItems = _data_template_search__WEBPACK_IMPORTED_MODULE_2__.LISTITEMS;

      if (this.innerWidth < 1200) {
        this.isSmallScreen = true;
      } else {
        this.isSmallScreen = false;
      }
    }
  }, {
    key: "ngAfterViewInit",
    value: function ngAfterViewInit() {
      var _this2 = this;

      this.configSub = this.configService.templateConf$.subscribe(function (templateConf) {
        if (templateConf) {
          _this2.config = templateConf;
        }

        _this2.loadLayout();

        _this2.cdr.markForCheck();
      });
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      if (this.layoutSub) {
        this.layoutSub.unsubscribe();
      }

      if (this.configSub) {
        this.configSub.unsubscribe();
      }
    }
  }, {
    key: "onResize",
    value: function onResize(event) {
      this.innerWidth = event.target.innerWidth;

      if (this.innerWidth < 1200) {
        this.isSmallScreen = true;
      } else {
        this.isSmallScreen = false;
      }
    }
  }, {
    key: "loadLayout",
    value: function loadLayout() {
      if (this.config.layout.menuPosition && this.config.layout.menuPosition.toString().trim() != "") {
        this.menuPosition = this.config.layout.menuPosition;
      }

      if (this.config.layout.variant === "Light") {
        this.logoUrl = 'assets/img/logo-dark.png';
      } else {
        this.logoUrl = 'assets/img/logo.png';
      }

      if (this.config.layout.variant === "Transparent") {
        this.transparentBGClass = this.config.layout.sidebar.backgroundColor;
      } else {
        this.transparentBGClass = "";
      }
    }
  }, {
    key: "onSearchKey",
    value: function onSearchKey(event) {
      if (this.searchResults && this.searchResults.length > 0) {
        this.searchResults.first.host.nativeElement.classList.add('first-active-item');
      }

      if (event.target.value === "") {
        this.seachTextEmpty.emit(true);
      } else {
        this.seachTextEmpty.emit(false);
      }
    }
  }, {
    key: "removeActiveClass",
    value: function removeActiveClass() {
      if (this.searchResults && this.searchResults.length > 0) {
        this.searchResults.first.host.nativeElement.classList.remove('first-active-item');
      }
    }
  }, {
    key: "onEscEvent",
    value: function onEscEvent() {
      this.control.setValue("");
      this.searchOpenClass = '';
      this.seachTextEmpty.emit(true);
    }
  }, {
    key: "onEnter",
    value: function onEnter() {
      if (this.searchResults && this.searchResults.length > 0) {
        var url = this.searchResults.first.url;

        if (url && url != '') {
          this.control.setValue("");
          this.searchOpenClass = '';
          this.router.navigate([url]);
          this.seachTextEmpty.emit(true);
        }
      }
    }
  }, {
    key: "redirectTo",
    value: function redirectTo(value) {
      this.router.navigate([value]);
      this.seachTextEmpty.emit(true);
    }
  }, {
    key: "ChangeLanguage",
    value: function ChangeLanguage(language) {
      this.translate.use(language);

      if (language === 'en') {
        this.selectedLanguageText = "English";
        this.selectedLanguageFlag = "./assets/img/flags/us.png";
      } else if (language === 'es') {
        this.selectedLanguageText = "Spanish";
        this.selectedLanguageFlag = "./assets/img/flags/es.png";
      } else if (language === 'pt') {
        this.selectedLanguageText = "Portuguese";
        this.selectedLanguageFlag = "./assets/img/flags/pt.png";
      } else if (language === 'de') {
        this.selectedLanguageText = "German";
        this.selectedLanguageFlag = "./assets/img/flags/de.png";
      }
    }
  }, {
    key: "ToggleClass",
    value: function ToggleClass() {
      if (this.toggleClass === "ft-maximize") {
        this.toggleClass = "ft-minimize";
      } else {
        this.toggleClass = "ft-maximize";
      }
    }
  }, {
    key: "toggleSearchOpenClass",
    value: function toggleSearchOpenClass(display) {
      var _this3 = this;

      this.control.setValue("");

      if (display) {
        this.searchOpenClass = 'open';
        setTimeout(function () {
          _this3.searchElement.nativeElement.focus();
        }, 0);
      } else {
        this.searchOpenClass = '';
      }

      this.seachTextEmpty.emit(true);
    }
  }, {
    key: "toggleNotificationSidebar",
    value: function toggleNotificationSidebar() {
      this.layoutService.toggleNotificationSidebar(true);
    }
  }, {
    key: "toggleSidebar",
    value: function toggleSidebar() {
      this.layoutService.toggleSidebarSmallScreen(this.hideSidebar);
    }
  }]);

  return NavbarComponent;
}();

NavbarComponent.ɵfac = function NavbarComponent_Factory(t) {
  return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_layout_service__WEBPACK_IMPORTED_MODULE_3__.LayoutService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_config_service__WEBPACK_IMPORTED_MODULE_4__.ConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__.ChangeDetectorRef));
};

NavbarComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
  type: NavbarComponent,
  selectors: [["app-navbar"]],
  viewQuery: function NavbarComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_c0, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_c1, 5);
    }

    if (rf & 2) {
      var _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.searchElement = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.searchResults = _t);
    }
  },
  hostBindings: function NavbarComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("resize", function NavbarComponent_resize_HostBindingHandler($event) {
        return ctx.onResize($event);
      }, false, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresolveWindow"]);
    }
  },
  outputs: {
    toggleHideSidebar: "toggleHideSidebar",
    seachTextEmpty: "seachTextEmpty"
  },
  decls: 40,
  vars: 11,
  consts: [[3, "ngClass"], [1, "container-fluid", "navbar-wrapper"], [1, "navbar-header", "d-flex"], ["data-toggle", "collapse", 1, "navbar-toggle", "menu-toggle", "d-xl-none", "d-block", "float-left", "align-items-center", "justify-content-center", 3, "click"], [1, "ft-menu", "font-medium-3"], [1, "navbar-nav", 3, "clickOutside"], ["appTopMenu", ""], [1, "navbar-container"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse", "d-block"], [1, "navbar-nav"], ["display", "dynamic", "ngbDropdown", "", 1, "i18n-dropdown", "dropdown", "nav-item", "mr-2"], ["id", "dropdown-flag", "href", "javascript:;", "data-toggle", "dropdown", "ngbDropdownToggle", "", 1, "nav-link", "d-flex", "align-items-center", "dropdown-toggle", "dropdown-language"], ["alt", "flag", 1, "langimg", "selected-flag", 3, "src"], [1, "selected-language", "d-md-flex", "d-none"], ["ngbDropdownMenu", "", "aria-labelledby", "dropdown-flag", 1, "dropdown-menu", "dropdown-menu-right", "text-left"], ["href", "javascript:;", "data-language", "en", 1, "dropdown-item", 3, "click"], ["src", "./assets/img/flags/us.png", "alt", "flag", 1, "langimg", "mr-2"], [1, "font-small-3"], ["href", "javascript:;", "data-language", "es", 1, "dropdown-item", 3, "click"], ["src", "./assets/img/flags/es.png", "alt", "flag", 1, "langimg", "mr-2"], ["href", "javascript:;", "data-language", "pt", 1, "dropdown-item", 3, "click"], ["src", "./assets/img/flags/pt.png", "alt", "flag", 1, "langimg", "mr-2"], ["href", "javascript:;", "data-language", "de", 1, "dropdown-item", 3, "click"], ["src", "./assets/img/flags/de.png", "alt", "flag", 1, "langimg", "mr-2"], ["placement", "bottom-left", "display", "static", "ngbDropdown", "", 1, "dropdown", "nav-item", "mr-1"], ["routerLink", "/profile", 1, "nav-link", "dropdown-toggle", "user-dropdown", "d-flex", "align-items-end"], [1, "user", "d-md-flex", "d-none", "mr-2"], [1, "text-right"], [1, "text-right", "text-muted", "font-small-3"], ["src", "assets/images/profile.png", "alt", "avatar", "height", "35", "width", "35", 1, "avatar"]],
  template: function NavbarComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "nav", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function NavbarComponent_Template_div_click_3_listener() {
        return ctx.toggleSidebar();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](4, "i", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "ul", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("clickOutside", function NavbarComponent_Template_ul_clickOutside_5_listener() {
        return ctx.toggleSearchOpenClass(false);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](6, "app-horizontal-menu", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "ul", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "li", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "a", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](12, "img", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "span", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "a", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_16_listener() {
        return ctx.ChangeLanguage("en");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](17, "img", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "span", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](19, "English");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](20, "a", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_20_listener() {
        return ctx.ChangeLanguage("es");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](21, "img", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](22, "span", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](23, "Spanish");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](24, "a", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_24_listener() {
        return ctx.ChangeLanguage("pt");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](25, "img", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](26, "span", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](27, "Portuguese");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](28, "a", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_28_listener() {
        return ctx.ChangeLanguage("de");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](29, "img", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](30, "span", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](31, "German");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](32, "li", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](33, "a", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](34, "div", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](35, "span", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](36, "Sayed Elwany");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](37, "span", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](38, "Software Devloper");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](39, "img", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassMapInterpolate1"]("navbar navbar-expand-lg navbar-light header-navbar ", ctx.transparentBGClass, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction4"](6, _c2, ctx.menuPosition === "Top", ctx.menuPosition === "Side" && (ctx.config == null ? null : ctx.config.layout.navbar.type) === "Static", ctx.menuPosition === "Side" && (ctx.config == null ? null : ctx.config.layout.navbar.type) === "Fixed", ctx.isSmallScreen && ctx.menuPosition === "Top"));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("src", ctx.selectedLanguageFlag, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx.selectedLanguageText);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgClass, ng_click_outside__WEBPACK_IMPORTED_MODULE_5__.ClickOutsideDirective, _horizontal_menu_horizontal_menu_component__WEBPACK_IMPORTED_MODULE_6__.HorizontalMenuComponent, _directives_topmenu_directive__WEBPACK_IMPORTED_MODULE_7__.TopMenuDirective, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__.NgbDropdownToggle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__.NgbDropdownMenu, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterLinkWithHref],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuYXZiYXIuY29tcG9uZW50LnNjc3MifQ== */"]
});

/***/ }),

/***/ 6430:
/*!*******************************************************************************!*\
  !*** ./src/app/shared/notification-sidebar/notification-sidebar.component.ts ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationSidebarComponent": function() { return /* binding */ NotificationSidebarComponent; }
/* harmony export */ });
/* harmony import */ var F_portfolio_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var F_portfolio_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_layout_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/layout.service */ 5682);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 8626);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 5365);








function NotificationSidebarComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "h5", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "System Logs");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "ul", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "li", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "li", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "h6", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "New Update Available");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "1 min ago");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "Android Pie 9.0.0_r52v availabe (658MB).");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "Download Now!");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "li", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](26, "img", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "h6", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, "Reminder!");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, "52 min ago");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34, "Your meeting is scheduled with Mr. Derrick Walters at 16:00. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](38, "Snooze");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "li", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](42, "img", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "h6", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](46, "Recieved a File");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](48, "4 hours ago");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](50, "Christina Rogers sent you a file for the next conference. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](53, "img", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](55, "Diamond.sketch");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](56, "li", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](59, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](60, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](61, "h6", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](62, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](63, "Voice Message");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](64, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](65, "10 hours ago");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](66, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](67, "Natalya Parker sent you a voice message.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](68, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](69, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](70, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](71, "Listen");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](72, "li", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](73, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](74, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](75, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](76, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](77, "h6", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](78, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](79, "Weather Update");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](80, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](81, "Yesterday");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](82, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](83, "Hi John! It is a rainy day with 16\xB0C.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](84, "h5", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](85, "Applications Logs");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](86, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](87, "ul", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](88, "li", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](89, "li", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](90, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](91, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](92, "img", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](93, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](94, "h6", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](95, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](96, "Gmail");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](97, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](98, "Just now");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](99, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](100, "Victoria Hampton sent you a mail and has a file attachment with it.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](101, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](102, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](103, "img", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](104, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](105, "Register.pdf");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](106, "li", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](107, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](108, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](109, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](110, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](111, "h6", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](112, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](113, "MakeMyTrip");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](114, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](115, "7 hours ago");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](116, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](117, "Your next flight for San Francisco will be on 24th March. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](118, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](119, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](120, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](121, "Important");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](122, "li", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](123, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](124, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](125, "img", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](126, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](127, "h6", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](128, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](129, "CNN");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](130, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](131, "16 hours ago");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](132, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](133, "U.S. investigating report says email account linked to CIA Director was hacked.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](134, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](135, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](136, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](137, "Read full article");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](138, "li", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](139, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](140, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](141, "i", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](142, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](143, "h6", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](144, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](145, "Maps");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](146, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](147, "Yesterday");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](148, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](149, "You visited Walmart Supercenter in Chicago.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](150, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](151, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](152, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](153, "Write a Review!");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](154, "li", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](155, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](156, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](157, "i", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](158, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](159, "h6", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](160, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](161, "Updates Available");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](162, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](163, "2 days ago");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](164, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](165, "19 app updates found.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}

function NotificationSidebarComponent_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "h5", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "General Settings");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "ul", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "li", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Notifications");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "input", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "label", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "p", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Use switches when looking for yes or no answers.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "li", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "Show recent activity");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](21, "input", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](22, "label", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "p", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "The \"for\" attribute is necessary to bind checkbox with the input.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "li", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, "Product Update");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](31, "input", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](32, "label", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "p", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34, "Message and mail me on weekly product updates.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "li", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](38, "Email on Follow");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](41, "input", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](42, "label", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "p", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](44, "Mail me when someone follows me.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "li", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](48, "Announcements");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](51, "input", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](52, "label", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "p", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](54, "Receive all the news and announcements from my clients.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "li", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](56, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](58, "Date and Time");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](59, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](60, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](61, "input", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](62, "label", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](63, "p", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](64, "Show date and time on top of every page.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](65, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](66, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](67, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](68, "Email on Comments");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](69, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](70, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](71, "input", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](72, "label", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](73, "p", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](74, "Mail me when someone comments on my article.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}

var _c0 = function _c0(a0) {
  return {
    open: a0
  };
};

var NotificationSidebarComponent = /*#__PURE__*/function () {
  function NotificationSidebarComponent(layoutService) {
    var _this = this;

    (0,F_portfolio_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, NotificationSidebarComponent);

    this.layoutService = layoutService;
    this.isOpen = false;
    this.layoutSub = layoutService.toggleNotiSidebar$.subscribe(function (open) {
      _this.isOpen = open;
    });
  }

  (0,F_portfolio_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(NotificationSidebarComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {}
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      if (this.layoutSub) {
        this.layoutSub.unsubscribe();
      }
    }
  }, {
    key: "onClose",
    value: function onClose() {
      this.layoutService.toggleNotificationSidebar(false);
    }
  }]);

  return NotificationSidebarComponent;
}();

NotificationSidebarComponent.ɵfac = function NotificationSidebarComponent_Factory(t) {
  return new (t || NotificationSidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_layout_service__WEBPACK_IMPORTED_MODULE_2__.LayoutService));
};

NotificationSidebarComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: NotificationSidebarComponent,
  selectors: [["app-notification-sidebar"]],
  decls: 17,
  vars: 4,
  consts: [["id", "notification-sidebar", 1, "notification-sidebar", "d-none", "d-sm-none", "d-md-block", 3, "ngClass"], [1, "notification-sidebar-close", 3, "click"], [1, "ft-x", "font-medium-3", "grey", "darken-1"], [1, "side-nav", "notification-sidebar-content", 3, "perfectScrollbar"], [1, "row"], [1, "col-12", "notification-tab-content"], ["ngbNav", "", 1, "nav-tabs"], ["nav", "ngbNav"], ["ngbNavItem", "", 1, "nav-item"], ["ngbNavLink", "", 1, "nav-link"], ["ngbNavContent", ""], [1, "mt-2", 3, "ngbNavOutlet"], ["id", "activity-tab", "role", "tabpanel", "aria-expanded", "true", "aria-labelledby", "base-tab1", 1, "row", "tab-pane"], ["id", "activity", 1, "col-12"], [1, "my-2", "text-bold-500"], ["id", "timeline-1", 1, "timeline-left", "timeline-wrapper", "mb-3"], [1, "timeline"], [1, "timeline-line", "mt-4"], [1, "timeline-item"], [1, "timeline-badge"], ["data-toggle", "tooltip", "data-placement", "right", "title", "Portfolio project work", 1, "bg-primary", "bg-lighten-4"], [1, "ft-download", "primary"], [1, "activity-list-text"], [1, "mb-1"], [1, "float-right", "grey", "font-italic", "font-small-2"], [1, "mt-0", "mb-2", "font-small-3"], [1, "notification-note"], [1, "p-1", "pl-2"], [1, "text-bold-500"], ["src", "assets/img/portrait/small/avatar-s-15.png", "alt", "avatar", "width", "40", 1, "avatar"], ["src", "assets/img/portrait/small/avatar-s-16.png", "alt", "avatar", "width", "40", 1, "avatar"], ["src", "assets/img/icons/sketch-mac-icon.png", "alt", "icon", "width", "20"], [1, "text-bold-500", "ml-2"], [1, "ft-mic", "primary"], [1, "ft-cloud-drizzle", "primary"], ["id", "timeline-2", 1, "timeline-left", "timeline-wrapper"], ["src", "assets/img/portrait/small/avatar-s-26.png", "alt", "avatar", "width", "40", 1, "avatar"], ["src", "assets/img/icons/pdf.png", "alt", "pdf icon", "width", "20"], [1, "ft-droplet", "primary"], ["src", "assets/img/portrait/small/avatar-s-23.png", "alt", "avatar", "width", "40", 1, "avatar"], [1, "ft-map", "primary"], [1, "ft-package", "primary"], ["id", "settings-tab", "aria-labelledby", "base-tab2", 1, "row", "tab-pane"], ["id", "settings", 1, "col-12"], [1, "mt-2", "mb-3"], [1, "list-unstyled", "mb-0", "mx-2"], [1, "mb-3"], [1, "float-right"], [1, "custom-switch"], ["id", "noti-s-switch-1", "type", "checkbox", 1, "custom-control-input"], ["for", "noti-s-switch-1", 1, "custom-control-label"], [1, "font-small-3", "m-0"], [1, "checkbox"], ["id", "noti-s-checkbox-1", "type", "checkbox", "checked", "checked"], ["for", "noti-s-checkbox-1"], ["id", "noti-s-switch-4", "type", "checkbox", "checked", "checked", 1, "custom-control-input"], ["for", "noti-s-switch-4", 1, "custom-control-label"], ["id", "noti-s-switch-3", "type", "checkbox", 1, "custom-control-input"], ["for", "noti-s-switch-3", 1, "custom-control-label"], ["id", "noti-s-checkbox-2", "type", "checkbox", "checked", "checked"], ["for", "noti-s-checkbox-2"], ["id", "noti-s-checkbox-3", "type", "checkbox"], ["for", "noti-s-checkbox-3"], ["id", "noti-s-switch-2", "type", "checkbox", "checked", "checked", 1, "custom-control-input"], ["for", "noti-s-switch-2", 1, "custom-control-label"]],
  template: function NotificationSidebarComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "aside", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "a", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function NotificationSidebarComponent_Template_a_click_1_listener() {
        return ctx.onClose();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "i", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "nav", 6, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](8, 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "a", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Activity");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, NotificationSidebarComponent_ng_template_11_Template, 166, 0, "ng-template", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](12, 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "a", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Settings");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, NotificationSidebarComponent_ng_template_15_Template, 75, 0, "ng-template", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](7);

      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](2, _c0, ctx.isOpen));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](16);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngbNavOutlet", _r0);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__.PerfectScrollbarDirective, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbNav, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbNavItem, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbNavLink, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbNavContent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbNavOutlet],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJub3RpZmljYXRpb24tc2lkZWJhci5jb21wb25lbnQuc2NzcyJ9 */"]
});

/***/ }),

/***/ 8738:
/*!*********************************************!*\
  !*** ./src/app/shared/pipes/filter.pipe.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FilterPipe": function() { return /* binding */ FilterPipe; }
/* harmony export */ });
/* harmony import */ var F_portfolio_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var F_portfolio_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);



var FilterPipe = /*#__PURE__*/function () {
  function FilterPipe() {
    (0,F_portfolio_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, FilterPipe);
  }

  (0,F_portfolio_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(FilterPipe, [{
    key: "transform",
    value: function transform(items, searchTerm, labelKey) {
      if (!items || !searchTerm) {
        return null;
      }

      return items.filter(function (item) {
        return item[labelKey || 'name'].toLowerCase().includes(searchTerm.toLowerCase()) === true;
      }).slice(0, 10);
    }
  }]);

  return FilterPipe;
}();

FilterPipe.ɵfac = function FilterPipe_Factory(t) {
  return new (t || FilterPipe)();
};

FilterPipe.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefinePipe"]({
  name: "filter",
  type: FilterPipe,
  pure: true
});

/***/ }),

/***/ 7361:
/*!*********************************************!*\
  !*** ./src/app/shared/pipes/pipe.module.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PipeModule": function() { return /* binding */ PipeModule; }
/* harmony export */ });
/* harmony import */ var F_portfolio_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var F_portfolio_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _filter_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filter.pipe */ 8738);
/* harmony import */ var _search_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./search.pipe */ 6903);
/* harmony import */ var _short_name_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./short-name.pipe */ 3100);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);







var PipeModule = /*#__PURE__*/(0,F_portfolio_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function PipeModule() {
  (0,F_portfolio_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, PipeModule);
});

PipeModule.ɵfac = function PipeModule_Factory(t) {
  return new (t || PipeModule)();
};

PipeModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
  type: PipeModule
});
PipeModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule]]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](PipeModule, {
    declarations: [_filter_pipe__WEBPACK_IMPORTED_MODULE_2__.FilterPipe, _search_pipe__WEBPACK_IMPORTED_MODULE_3__.SearchPipe, _short_name_pipe__WEBPACK_IMPORTED_MODULE_4__.ShortNamePipe],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule],
    exports: [_filter_pipe__WEBPACK_IMPORTED_MODULE_2__.FilterPipe, _search_pipe__WEBPACK_IMPORTED_MODULE_3__.SearchPipe, _short_name_pipe__WEBPACK_IMPORTED_MODULE_4__.ShortNamePipe]
  });
})();

/***/ }),

/***/ 6903:
/*!*********************************************!*\
  !*** ./src/app/shared/pipes/search.pipe.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchPipe": function() { return /* binding */ SearchPipe; }
/* harmony export */ });
/* harmony import */ var F_portfolio_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var F_portfolio_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);



var SearchPipe = /*#__PURE__*/function () {
  function SearchPipe() {
    (0,F_portfolio_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SearchPipe);
  }

  (0,F_portfolio_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(SearchPipe, [{
    key: "transform",
    value: function transform(value, keys, term) {
      if (!term) return value;
      return (value || []).filter(function (item) {
        return keys.split(',').some(function (key) {
          return item.hasOwnProperty(key) && new RegExp(term, 'gi').test(item[key]);
        });
      });
    }
  }]);

  return SearchPipe;
}();

SearchPipe.ɵfac = function SearchPipe_Factory(t) {
  return new (t || SearchPipe)();
};

SearchPipe.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefinePipe"]({
  name: "search",
  type: SearchPipe,
  pure: true
});

/***/ }),

/***/ 3100:
/*!*************************************************!*\
  !*** ./src/app/shared/pipes/short-name.pipe.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShortNamePipe": function() { return /* binding */ ShortNamePipe; }
/* harmony export */ });
/* harmony import */ var F_portfolio_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var F_portfolio_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);



var ShortNamePipe = /*#__PURE__*/function () {
  function ShortNamePipe() {
    (0,F_portfolio_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ShortNamePipe);
  }

  (0,F_portfolio_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(ShortNamePipe, [{
    key: "transform",
    value: function transform(fullName) {
      return fullName.split(' ').map(function (n) {
        return n[0];
      }).join('');
    }
  }]);

  return ShortNamePipe;
}();

ShortNamePipe.ɵfac = function ShortNamePipe_Factory(t) {
  return new (t || ShortNamePipe)();
};

ShortNamePipe.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefinePipe"]({
  name: "shortName",
  type: ShortNamePipe,
  pure: true
});

/***/ }),

/***/ 4179:
/*!****************************************************!*\
  !*** ./src/app/shared/resources/assets_manager.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AssetsManager": function() { return /* binding */ AssetsManager; }
/* harmony export */ });
/* harmony import */ var F_portfolio_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var F_portfolio_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);


var AssetsManager = /*#__PURE__*/(0,F_portfolio_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function AssetsManager() {
  (0,F_portfolio_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, AssetsManager);
});
AssetsManager.profile = 'assets/images/profile.png';
AssetsManager.big_profile = 'assets/images/profile.png'; //  public static banner: string = 'assets/images/banner-4.jpg';

AssetsManager.banner = 'assets/images/banner.png';
AssetsManager.banner1 = 'assets/images/banner1.jpg';
AssetsManager.hr = 'assets/images/projects/hr.png';
AssetsManager.school = 'assets/images/projects/school.jpg';
AssetsManager.mozakrety = 'assets/images/projects/mozakrety.jpg';
AssetsManager.ogset = 'assets/images/projects/ogset.jpg';
AssetsManager.EGYTraining = 'assets/images/projects/egyTraning.jpg';
AssetsManager.ksa_courses = 'assets/images/projects/ksa_courses.png';
AssetsManager.kw_oxford = 'assets/images/projects/kw_oxford.png';
AssetsManager.zhTransportation = 'assets/images/projects/kw_oxford.png';

/***/ }),

/***/ 3650:
/*!********************************************************!*\
  !*** ./src/app/shared/routes/content-layout.routes.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CONTENT_ROUTES": function() { return /* binding */ CONTENT_ROUTES; }
/* harmony export */ });
//Route for content layout without sidebar, navbar and footer for pages like Login, Registration etc...
var CONTENT_ROUTES = [//  {
  //     path: 'pages',
  //     loadChildren: () => import('../../pages/content-pages/content-pages.module').then(m => m.ContentPagesModule)
  // }
];

/***/ }),

/***/ 578:
/*!*****************************************************!*\
  !*** ./src/app/shared/routes/full-layout.routes.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Full_ROUTES": function() { return /* binding */ Full_ROUTES; }
/* harmony export */ });
/* harmony import */ var app_components_profile_profile_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/components/profile/profile.component */ 7094);
 //Route for content layout with sidebar, navbar and footer.

var Full_ROUTES = [// {
//   path: 'page',
//   loadChildren: () => import('../../page/page.module').then(m => m.PageModule)
// }
{
  path: "profile",
  component: app_components_profile_profile_component__WEBPACK_IMPORTED_MODULE_0__.ProfileComponent
}];

/***/ }),

/***/ 6955:
/*!***************************************************!*\
  !*** ./src/app/shared/services/config.service.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfigService": function() { return /* binding */ ConfigService; }
/* harmony export */ });
/* harmony import */ var F_portfolio_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var F_portfolio_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 4505);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




var ConfigService = /*#__PURE__*/function () {
  function ConfigService() {
    (0,F_portfolio_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ConfigService);

    this.templateConf = this.setConfigValue();
    this.templateConfSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(this.templateConf);
    this.templateConf$ = this.templateConfSubject.asObservable();
  } // Default configurations for Light layout. Please check *customizer.service.ts* for different colors and bg images options


  (0,F_portfolio_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(ConfigService, [{
    key: "setConfigValue",
    value: function setConfigValue() {
      return this.templateConf = {
        layout: {
          variant: "Light",
          menuPosition: "Top",
          customizer: {
            hidden: false
          },
          navbar: {
            type: 'Fixed'
          },
          sidebar: {
            collapsed: false,
            size: "sidebar-md",
            backgroundColor: "purple-love",
            backgroundImage: false,
            backgroundImageURL: "assets/img/sidebar-bg/01.jpg"
          }
        }
      };
    } // Default configurations for Dark layout. Please check *customizer.service.ts* for different colors and bg images options
    // setConfigValue() {
    //   return this.templateConf = {
    //     layout: {
    //       variant: "Dark",
    //       menuPosition: "Side",
    //       customizer: {
    //         hidden: true
    //       },
    //       navbar: {
    //         type: 'Static'
    //       },
    //       sidebar: {
    //         collapsed: false,
    //         size: "sidebar-md",
    //         backgroundColor: "black",
    //         backgroundImage: true,
    //         backgroundImageURL: "assets/img/sidebar-bg/01.jpg"
    //       }
    //     }
    //   };
    // }
    // Default configurations for Transparent layout. Please check *customizer.service.ts* for different colors and bg images options
    // setConfigValue() {
    //   return this.templateConf = {
    //     layout: {
    //       variant: "Transparent",
    //       menuPosition: "Side",
    //       customizer: {
    //         hidden: true
    //       },
    //       navbar: {
    //         type: 'Static'
    //       },
    //       sidebar: {
    //         collapsed: false,
    //         size: "sidebar-md",
    //         backgroundColor: "bg-glass-1",
    //         backgroundImage: true,
    //         backgroundImageURL: ""
    //       }
    //     }
    //   };
    // }

  }, {
    key: "applyTemplateConfigChange",
    value: function applyTemplateConfigChange(tempConfig) {
      this.templateConf = Object.assign(this.templateConf, tempConfig);
      this.templateConfSubject.next(this.templateConf);
    }
  }]);

  return ConfigService;
}();

ConfigService.ɵfac = function ConfigService_Factory(t) {
  return new (t || ConfigService)();
};

ConfigService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: ConfigService,
  factory: ConfigService.ɵfac,
  providedIn: "root"
});

/***/ }),

/***/ 360:
/*!*******************************************************!*\
  !*** ./src/app/shared/services/customizer.service.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomizerService": function() { return /* binding */ CustomizerService; }
/* harmony export */ });
/* harmony import */ var F_portfolio_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var F_portfolio_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config.service */ 6955);




var CustomizerService = /*#__PURE__*/function () {
  function CustomizerService(config) {
    (0,F_portfolio_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CustomizerService);

    this.config = config; // sidebar BG colors for Light & Dark Layout

    this.light_dark_colors = [{
      code: "mint",
      class: "gradient-mint",
      active: false,
      type: 'gradient'
    }, {
      code: "king-yna",
      class: "gradient-king-yna",
      active: false,
      type: 'gradient'
    }, {
      code: "ibiza-sunset",
      class: "gradient-ibiza-sunset",
      active: false,
      type: 'gradient'
    }, {
      code: "flickr",
      class: "gradient-flickr",
      active: false,
      type: 'gradient'
    }, {
      code: "purple-bliss",
      class: "gradient-purple-bliss",
      active: false,
      type: 'gradient'
    }, {
      code: "man-of-steel",
      class: "gradient-man-of-steel",
      active: false,
      type: 'gradient'
    }, {
      code: "purple-love",
      class: "gradient-purple-love",
      active: false,
      type: 'gradient'
    }, {
      code: "black",
      class: "bg-black",
      active: false,
      type: 'solid'
    }, {
      code: "white",
      class: "bg-grey",
      active: false,
      type: 'solid'
    }, {
      code: "primary",
      class: "bg-primary",
      active: false,
      type: 'solid'
    }, {
      code: "success",
      class: "bg-success",
      active: false,
      type: 'solid'
    }, {
      code: "warning",
      class: "bg-warning",
      active: false,
      type: 'solid'
    }, {
      code: "info",
      class: "bg-info",
      active: false,
      type: 'solid'
    }, {
      code: "danger",
      class: "bg-danger",
      active: false,
      type: 'solid'
    }]; // sidebar BG colors for Transparent Layout

    this.transparent_colors = [{
      class: "bg-glass-hibiscus",
      active: false
    }, {
      class: "bg-glass-purple-pizzazz",
      active: false
    }, {
      class: "bg-glass-blue-lagoon",
      active: false
    }, {
      class: "bg-glass-electric-violet",
      active: false
    }, {
      class: "bg-glass-portage",
      active: false
    }, {
      class: "bg-glass-tundora",
      active: false
    }]; // sidebar BG images for Light & Dark Layout

    this.light_dark_bg_images = [{
      src: "assets/img/sidebar-bg/01.jpg",
      active: false
    }, {
      src: "assets/img/sidebar-bg/02.jpg",
      active: false
    }, {
      src: "assets/img/sidebar-bg/03.jpg",
      active: false
    }, {
      src: "assets/img/sidebar-bg/04.jpg",
      active: false
    }, {
      src: "assets/img/sidebar-bg/05.jpg",
      active: false
    }, {
      src: "assets/img/sidebar-bg/06.jpg",
      active: false
    }]; // Background Colors with Shades for Transparent Layout

    this.transparent_colors_with_shade = [{
      class: "bg-glass-1",
      active: false
    }, {
      class: "bg-glass-2",
      active: false
    }, {
      class: "bg-glass-3",
      active: false
    }, {
      class: "bg-glass-4",
      active: false
    }];
    this.lightDarkLayoutGradientBGColors = [];
    this.lightDarkLayoutSolidBGColors = [];
    this.transparentLayoutBGColors = [];
    this.transparentLayoutBGColorsWithShades = [];
    this.lightDarkLayoutBGImages = [];
    this.getData();
  }

  (0,F_portfolio_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(CustomizerService, [{
    key: "getData",
    value: function getData() {
      this.lightDarkLayoutGradientBGColors = this.getlightDarkLayoutGradientBGColors();
      this.lightDarkLayoutSolidBGColors = this.getlightDarkLayoutSolidBGColors();
      this.transparentLayoutBGColors = this.getTransparentLayoutBGColors();
      this.transparentLayoutBGColorsWithShades = this.GetTransparentLayoutBGColorsWithShades();
      this.lightDarkLayoutBGImages = this.getLightDarkLayoutBGImages();
    }
  }, {
    key: "getlightDarkLayoutGradientBGColors",
    value: function getlightDarkLayoutGradientBGColors() {
      var _this = this;

      return this.light_dark_colors.filter(function (_) {
        return _.type === 'gradient';
      }).map(function (color) {
        color.active = color.code === _this.config.templateConf.layout.sidebar.backgroundColor;
        return Object.assign({}, color);
      });
    }
  }, {
    key: "getlightDarkLayoutSolidBGColors",
    value: function getlightDarkLayoutSolidBGColors() {
      var _this2 = this;

      return this.light_dark_colors.filter(function (_) {
        return _.type === 'solid';
      }).map(function (color) {
        color.active = color.code === _this2.config.templateConf.layout.sidebar.backgroundColor;
        return Object.assign({}, color);
      });
    }
  }, {
    key: "getTransparentLayoutBGColors",
    value: function getTransparentLayoutBGColors() {
      var _this3 = this;

      return this.transparent_colors.map(function (color) {
        color.active = color.class === _this3.config.templateConf.layout.sidebar.backgroundColor;
        return Object.assign({}, color);
      });
    }
  }, {
    key: "GetTransparentLayoutBGColorsWithShades",
    value: function GetTransparentLayoutBGColorsWithShades() {
      var _this4 = this;

      return this.transparent_colors_with_shade.map(function (color) {
        color.active = color.class === _this4.config.templateConf.layout.sidebar.backgroundColor;
        return Object.assign({}, color);
      });
    }
  }, {
    key: "getLightDarkLayoutBGImages",
    value: function getLightDarkLayoutBGImages() {
      var _this5 = this;

      return this.light_dark_bg_images.map(function (image) {
        image.active = image.src === _this5.config.templateConf.layout.sidebar.backgroundImageURL;
        return Object.assign({}, image);
      });
    } //called when click to change on any Gradient/Solid color for Light & Dark layout in customizer

  }, {
    key: "changeSidebarBGColor",
    value: function changeSidebarBGColor(color) {
      var conf = this.config.templateConf;
      conf.layout.sidebar.backgroundColor = color.code;
      this.config.applyTemplateConfigChange({
        layout: conf.layout
      });
      this.getData();
    } //called when click to change on any Transparent color for Transparent layout in customizer

  }, {
    key: "changeSidebarTransparentBGColor",
    value: function changeSidebarTransparentBGColor(color) {
      var conf = this.config.templateConf;
      conf.layout.sidebar.backgroundColor = color.class;
      conf.layout.sidebar.backgroundImage = false;
      conf.layout.sidebar.backgroundImageURL = '';
      this.config.applyTemplateConfigChange({
        layout: conf.layout
      });
      this.getData();
    } //called when click to change on any image for Light & Dark layout in customizer

  }, {
    key: "changeSidebarBgImage",
    value: function changeSidebarBgImage(image) {
      var conf = this.config.templateConf;
      conf.layout.sidebar.backgroundImageURL = image.src;
      this.config.applyTemplateConfigChange({
        layout: conf.layout
      });
      this.getData();
    }
  }, {
    key: "bgImageDisplay",
    value: function bgImageDisplay(e) {
      var conf = this.config.templateConf;

      if (e.target.checked) {
        conf.layout.sidebar.backgroundImage = true;
      } else {
        conf.layout.sidebar.backgroundImage = false;
      }

      this.config.applyTemplateConfigChange({
        layout: conf.layout
      });
    }
  }, {
    key: "toggleCompactMenu",
    value: function toggleCompactMenu(e) {
      var conf = this.config.templateConf;

      if (e.target.checked) {
        conf.layout.sidebar.collapsed = true;
      } else {
        conf.layout.sidebar.collapsed = false;
      }

      this.config.applyTemplateConfigChange({
        layout: conf.layout
      });
    }
  }, {
    key: "changeSidebarWidth",
    value: function changeSidebarWidth(value) {
      var conf = this.config.templateConf;
      conf.layout.sidebar.size = value;
      this.config.applyTemplateConfigChange({
        layout: conf.layout
      });
    }
  }, {
    key: "toggleNavbarType",
    value: function toggleNavbarType(value) {
      var conf = this.config.templateConf;
      conf.layout.navbar.type = value;
      this.config.applyTemplateConfigChange({
        layout: conf.layout
      });
    } // position: "Side" for vertical menu and position: "Top" for horizontal menu

  }, {
    key: "toggleMenuPosition",
    value: function toggleMenuPosition(position) {
      var conf = this.config.templateConf;
      conf.layout.menuPosition = position;
      this.config.applyTemplateConfigChange({
        layout: conf.layout
      });
    }
  }, {
    key: "switchLayout",
    value: function switchLayout(layout, isBgImageDisplay) {
      var conf = this.config.templateConf;

      if (layout.toLowerCase() === 'light') {
        conf.layout.variant = 'Light';
        conf.layout.sidebar.backgroundImageURL = this.light_dark_bg_images[0].src;
        conf.layout.sidebar.backgroundColor = this.light_dark_colors[5].code;
        conf.layout.sidebar.backgroundImage = isBgImageDisplay;
      } else if (layout.toLowerCase() === 'dark') {
        conf.layout.variant = 'Dark';
        conf.layout.sidebar.backgroundImageURL = this.light_dark_bg_images[2].src;
        conf.layout.sidebar.backgroundColor = this.light_dark_colors[7].code;
        conf.layout.sidebar.backgroundImage = isBgImageDisplay;
      } else if (layout.toLowerCase() === 'transparent') {
        conf.layout.variant = 'Transparent';
        conf.layout.sidebar.backgroundImageURL = "";
        conf.layout.sidebar.backgroundColor = this.transparent_colors_with_shade[0].class;
      }

      this.config.applyTemplateConfigChange({
        layout: conf.layout
      });
      this.getData();
    }
  }]);

  return CustomizerService;
}();

CustomizerService.ɵfac = function CustomizerService_Factory(t) {
  return new (t || CustomizerService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_config_service__WEBPACK_IMPORTED_MODULE_2__.ConfigService));
};

CustomizerService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: CustomizerService,
  factory: CustomizerService.ɵfac,
  providedIn: "root"
});

/***/ }),

/***/ 5682:
/*!***************************************************!*\
  !*** ./src/app/shared/services/layout.service.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LayoutService": function() { return /* binding */ LayoutService; }
/* harmony export */ });
/* harmony import */ var F_portfolio_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var F_portfolio_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 2218);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




var LayoutService = /*#__PURE__*/function () {
  function LayoutService() {
    (0,F_portfolio_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, LayoutService);

    this.toggleSidebar = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject(); // small screen

    this.overlaySidebarToggle = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    this.toggleNotiSidebar = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject(); // Observable

    this.toggleSidebar$ = this.toggleSidebar.asObservable();
    this.overlaySidebarToggle$ = this.overlaySidebarToggle.asObservable();
    this.toggleNotiSidebar$ = this.toggleNotiSidebar.asObservable();
  }

  (0,F_portfolio_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(LayoutService, [{
    key: "toggleSidebarSmallScreen",
    value: function toggleSidebarSmallScreen(toggle) {
      this.toggleSidebar.next(toggle);
    }
  }, {
    key: "overlaySidebartoggle",
    value: function overlaySidebartoggle(toggle) {
      this.overlaySidebarToggle.next(toggle);
    }
  }, {
    key: "toggleNotificationSidebar",
    value: function toggleNotificationSidebar(toggle) {
      this.toggleNotiSidebar.next(toggle);
    }
  }]);

  return LayoutService;
}();

LayoutService.ɵfac = function LayoutService_Factory(t) {
  return new (t || LayoutService)();
};

LayoutService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: LayoutService,
  factory: LayoutService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 294:
/*!***************************************************!*\
  !*** ./src/app/shared/services/window.service.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WINDOW": function() { return /* binding */ WINDOW; },
/* harmony export */   "WindowRef": function() { return /* binding */ WindowRef; },
/* harmony export */   "BrowserWindowRef": function() { return /* binding */ BrowserWindowRef; },
/* harmony export */   "windowFactory": function() { return /* binding */ windowFactory; },
/* harmony export */   "browserWindowProvider": function() { return /* binding */ browserWindowProvider; },
/* harmony export */   "windowProvider": function() { return /* binding */ windowProvider; },
/* harmony export */   "WINDOW_PROVIDERS": function() { return /* binding */ WINDOW_PROVIDERS; }
/* harmony export */ });
/* harmony import */ var F_portfolio_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits.js */ 4582);
/* harmony import */ var F_portfolio_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper.js */ 2496);
/* harmony import */ var F_portfolio_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var F_portfolio_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);







/* Create a new injection token for injecting the window into a component. */

var WINDOW = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.InjectionToken('WindowToken');
/* Define abstract class for obtaining reference to the global window object. */

var WindowRef = /*#__PURE__*/function () {
  function WindowRef() {
    (0,F_portfolio_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, WindowRef);
  }

  (0,F_portfolio_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_3__["default"])(WindowRef, [{
    key: "nativeWindow",
    get: function get() {
      throw new Error('Not implemented.');
    }
  }]);

  return WindowRef;
}();
/* Define class that implements the abstract class and returns the native window object. */

var BrowserWindowRef = /*#__PURE__*/function (_WindowRef) {
  (0,F_portfolio_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_0__["default"])(BrowserWindowRef, _WindowRef);

  var _super = (0,F_portfolio_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_1__["default"])(BrowserWindowRef);

  function BrowserWindowRef() {
    (0,F_portfolio_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, BrowserWindowRef);

    return _super.call(this);
  }

  (0,F_portfolio_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_3__["default"])(BrowserWindowRef, [{
    key: "nativeWindow",
    get: function get() {
      return window;
    }
  }]);

  return BrowserWindowRef;
}(WindowRef);

BrowserWindowRef.ɵfac = function BrowserWindowRef_Factory(t) {
  return new (t || BrowserWindowRef)();
};

BrowserWindowRef.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
  token: BrowserWindowRef,
  factory: BrowserWindowRef.ɵfac
});
/* Create an factory function that returns the native window object. */

function windowFactory(browserWindowRef, platformId) {
  if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_5__.isPlatformBrowser)(platformId)) {
    return browserWindowRef.nativeWindow;
  }

  return new Object();
}
/* Create a injectable provider for the WindowRef token that uses the BrowserWindowRef class. */

var browserWindowProvider = {
  provide: WindowRef,
  useClass: BrowserWindowRef
};
/* Create an injectable provider that uses the windowFactory function for returning the native window object. */

var windowProvider = {
  provide: WINDOW,
  useFactory: windowFactory,
  deps: [WindowRef, _angular_core__WEBPACK_IMPORTED_MODULE_4__.PLATFORM_ID]
};
/* Create an array of providers. */

var WINDOW_PROVIDERS = [browserWindowProvider, windowProvider];

/***/ }),

/***/ 4466:
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedModule": function() { return /* binding */ SharedModule; }
/* harmony export */ });
/* harmony import */ var F_portfolio_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var F_portfolio_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/cdk/overlay */ 1782);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 5365);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @ngx-translate/core */ 9461);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 8626);
/* harmony import */ var ng_click_outside__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-click-outside */ 3530);
/* harmony import */ var _components_autocomplete_autocomplete_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/autocomplete/autocomplete.module */ 322);
/* harmony import */ var app_shared_pipes_pipe_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/pipes/pipe.module */ 7361);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./footer/footer.component */ 5227);
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./navbar/navbar.component */ 4696);
/* harmony import */ var _horizontal_menu_horizontal_menu_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./horizontal-menu/horizontal-menu.component */ 2185);
/* harmony import */ var _vertical_menu_vertical_menu_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./vertical-menu/vertical-menu.component */ 2329);
/* harmony import */ var _customizer_customizer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./customizer/customizer.component */ 3495);
/* harmony import */ var _notification_sidebar_notification_sidebar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./notification-sidebar/notification-sidebar.component */ 6430);
/* harmony import */ var _directives_toggle_fullscreen_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./directives/toggle-fullscreen.directive */ 3418);
/* harmony import */ var _directives_sidebar_link_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./directives/sidebar-link.directive */ 7883);
/* harmony import */ var _directives_sidebar_dropdown_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./directives/sidebar-dropdown.directive */ 3273);
/* harmony import */ var _directives_sidebar_anchor_toggle_directive__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./directives/sidebar-anchor-toggle.directive */ 8327);
/* harmony import */ var _directives_sidebar_directive__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./directives/sidebar.directive */ 7744);
/* harmony import */ var _directives_topmenu_directive__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./directives/topmenu.directive */ 342);
/* harmony import */ var _directives_topmenu_link_directive__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./directives/topmenu-link.directive */ 1793);
/* harmony import */ var _directives_topmenu_dropdown_directive__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./directives/topmenu-dropdown.directive */ 235);
/* harmony import */ var _directives_topmenu_anchor_toggle_directive__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./directives/topmenu-anchor-toggle.directive */ 1354);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/core */ 3184);











 //COMPONENTS






 //DIRECTIVES











var SharedModule = /*#__PURE__*/(0,F_portfolio_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function SharedModule() {
  (0,F_portfolio_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, SharedModule);
});

SharedModule.ɵfac = function SharedModule_Factory(t) {
  return new (t || SharedModule)();
};

SharedModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdefineNgModule"]({
  type: SharedModule
});
SharedModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdefineInjector"]({
  imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_21__.RouterModule, _angular_common__WEBPACK_IMPORTED_MODULE_22__.CommonModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_23__.NgbModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_24__.TranslateModule, _angular_forms__WEBPACK_IMPORTED_MODULE_25__.FormsModule, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_26__.OverlayModule, _angular_forms__WEBPACK_IMPORTED_MODULE_25__.ReactiveFormsModule, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_27__.PerfectScrollbarModule, ng_click_outside__WEBPACK_IMPORTED_MODULE_2__.ClickOutsideModule, _components_autocomplete_autocomplete_module__WEBPACK_IMPORTED_MODULE_3__.AutocompleteModule, app_shared_pipes_pipe_module__WEBPACK_IMPORTED_MODULE_4__.PipeModule], _angular_common__WEBPACK_IMPORTED_MODULE_22__.CommonModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_23__.NgbModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_24__.TranslateModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵsetNgModuleScope"](SharedModule, {
    declarations: [_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__.FooterComponent, _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__.NavbarComponent, _vertical_menu_vertical_menu_component__WEBPACK_IMPORTED_MODULE_8__.VerticalMenuComponent, _horizontal_menu_horizontal_menu_component__WEBPACK_IMPORTED_MODULE_7__.HorizontalMenuComponent, _customizer_customizer_component__WEBPACK_IMPORTED_MODULE_9__.CustomizerComponent, _notification_sidebar_notification_sidebar_component__WEBPACK_IMPORTED_MODULE_10__.NotificationSidebarComponent, _directives_toggle_fullscreen_directive__WEBPACK_IMPORTED_MODULE_11__.ToggleFullscreenDirective, _directives_sidebar_link_directive__WEBPACK_IMPORTED_MODULE_12__.SidebarLinkDirective, _directives_sidebar_dropdown_directive__WEBPACK_IMPORTED_MODULE_13__.SidebarDropdownDirective, _directives_sidebar_anchor_toggle_directive__WEBPACK_IMPORTED_MODULE_14__.SidebarAnchorToggleDirective, _directives_sidebar_directive__WEBPACK_IMPORTED_MODULE_15__.SidebarDirective, _directives_topmenu_link_directive__WEBPACK_IMPORTED_MODULE_17__.TopMenuLinkDirective, _directives_topmenu_dropdown_directive__WEBPACK_IMPORTED_MODULE_18__.TopMenuDropdownDirective, _directives_topmenu_anchor_toggle_directive__WEBPACK_IMPORTED_MODULE_19__.TopMenuAnchorToggleDirective, _directives_topmenu_directive__WEBPACK_IMPORTED_MODULE_16__.TopMenuDirective],
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_21__.RouterModule, _angular_common__WEBPACK_IMPORTED_MODULE_22__.CommonModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_23__.NgbModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_24__.TranslateModule, _angular_forms__WEBPACK_IMPORTED_MODULE_25__.FormsModule, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_26__.OverlayModule, _angular_forms__WEBPACK_IMPORTED_MODULE_25__.ReactiveFormsModule, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_27__.PerfectScrollbarModule, ng_click_outside__WEBPACK_IMPORTED_MODULE_2__.ClickOutsideModule, _components_autocomplete_autocomplete_module__WEBPACK_IMPORTED_MODULE_3__.AutocompleteModule, app_shared_pipes_pipe_module__WEBPACK_IMPORTED_MODULE_4__.PipeModule],
    exports: [_angular_common__WEBPACK_IMPORTED_MODULE_22__.CommonModule, _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__.FooterComponent, _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__.NavbarComponent, _vertical_menu_vertical_menu_component__WEBPACK_IMPORTED_MODULE_8__.VerticalMenuComponent, _horizontal_menu_horizontal_menu_component__WEBPACK_IMPORTED_MODULE_7__.HorizontalMenuComponent, _customizer_customizer_component__WEBPACK_IMPORTED_MODULE_9__.CustomizerComponent, _notification_sidebar_notification_sidebar_component__WEBPACK_IMPORTED_MODULE_10__.NotificationSidebarComponent, _directives_toggle_fullscreen_directive__WEBPACK_IMPORTED_MODULE_11__.ToggleFullscreenDirective, _directives_sidebar_directive__WEBPACK_IMPORTED_MODULE_15__.SidebarDirective, _directives_topmenu_directive__WEBPACK_IMPORTED_MODULE_16__.TopMenuDirective, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_23__.NgbModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_24__.TranslateModule]
  });
})();

/***/ }),

/***/ 1530:
/*!*********************************************************************!*\
  !*** ./src/app/shared/vertical-menu/vertical-menu-routes.config.ts ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ROUTES": function() { return /* binding */ ROUTES; }
/* harmony export */ });
//Sidebar menu Routes and data
var ROUTES = [{
  path: '/page',
  title: 'Page',
  icon: 'ft-home',
  class: '',
  badge: '',
  badgeClass: '',
  isExternalLink: false,
  submenu: []
}, {
  path: '',
  title: 'Menu Levels',
  icon: 'ft-align-left',
  class: 'has-sub',
  badge: '3',
  badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1',
  isExternalLink: false,
  submenu: [{
    path: '/YOUR-ROUTE-PATH',
    title: 'Second Level',
    icon: 'ft-arrow-right submenu-icon',
    class: '',
    badge: '',
    badgeClass: '',
    isExternalLink: false,
    submenu: []
  }, {
    path: '',
    title: 'Second Level Child',
    icon: 'ft-arrow-right submenu-icon',
    class: 'has-sub',
    badge: '',
    badgeClass: '',
    isExternalLink: false,
    submenu: [{
      path: '/YOUR-ROUTE-PATH',
      title: 'Third Level 1.1',
      icon: 'ft-arrow-right submenu-icon',
      class: '',
      badge: '',
      badgeClass: '',
      isExternalLink: false,
      submenu: []
    }, {
      path: '/YOUR-ROUTE-PATH',
      title: 'Third Level 1.2',
      icon: 'ft-arrow-right submenu-icon',
      class: '',
      badge: '',
      badgeClass: '',
      isExternalLink: false,
      submenu: []
    }]
  }]
}];

/***/ }),

/***/ 2329:
/*!*****************************************************************!*\
  !*** ./src/app/shared/vertical-menu/vertical-menu.component.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VerticalMenuComponent": function() { return /* binding */ VerticalMenuComponent; }
/* harmony export */ });
/* harmony import */ var F_portfolio_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var F_portfolio_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var _vertical_menu_routes_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vertical-menu-routes.config */ 1530);
/* harmony import */ var _horizontal_menu_navigation_routes_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../horizontal-menu/navigation-routes.config */ 7015);
/* harmony import */ var _animations_custom_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../animations/custom-animations */ 1138);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ 9461);
/* harmony import */ var _services_layout_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/layout.service */ 5682);
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/config.service */ 6955);
/* harmony import */ var ngx_device_detector__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-device-detector */ 1431);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 8626);
/* harmony import */ var _directives_sidebar_dropdown_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../directives/sidebar-dropdown.directive */ 3273);
/* harmony import */ var _directives_sidebar_link_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../directives/sidebar-link.directive */ 7883);
/* harmony import */ var _directives_sidebar_anchor_toggle_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../directives/sidebar-anchor-toggle.directive */ 8327);
















var _c0 = ["toggleIcon"];

var _c1 = function _c1() {
  return ["/page"];
};

var _c2 = function _c2(a0, a1) {
  return {
    "ft-toggle-left": a0,
    "ft-toggle-right": a1
  };
};

function VerticalMenuComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](4, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6, "APEX");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function VerticalMenuComponent_div_0_Template_a_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r4);
      var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return ctx_r3.toggleSidebar();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](8, "i", 12, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function VerticalMenuComponent_div_0_Template_a_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r4);
      var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return ctx_r5.CloseSidebar();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](11, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](3, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("src", ctx_r0.logoUrl, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction2"](4, _c2, ctx_r0.config.layout.sidebar.collapsed, !ctx_r0.config.layout.sidebar.collapsed));
  }
}

var _c3 = function _c3(a0) {
  return [a0];
};

function VerticalMenuComponent_li_4_a_1_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var menuItem_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](2, _c3, menuItem_r6.badgeClass));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](menuItem_r6.badge);
  }
}

function VerticalMenuComponent_li_4_a_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](5, VerticalMenuComponent_li_4_a_1_span_5_Template, 2, 4, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var menuItem_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](5, _c3, menuItem_r6.icon));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](4, 3, menuItem_r6.title));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", menuItem_r6.badge && menuItem_r6.badge != "");
  }
}

function VerticalMenuComponent_li_4_a_2_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var menuItem_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](2, _c3, menuItem_r6.badgeClass));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](menuItem_r6.badge);
  }
}

function VerticalMenuComponent_li_4_a_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](5, VerticalMenuComponent_li_4_a_2_span_5_Template, 2, 4, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var menuItem_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("routerLink", menuItem_r6.path);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](6, _c3, menuItem_r6.icon));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](4, 4, menuItem_r6.title));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", menuItem_r6.badge && menuItem_r6.badge != "");
  }
}

function VerticalMenuComponent_li_4_a_3_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var menuItem_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](2, _c3, menuItem_r6.badgeClass));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](menuItem_r6.badge);
  }
}

function VerticalMenuComponent_li_4_a_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](5, VerticalMenuComponent_li_4_a_3_span_5_Template, 2, 4, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var menuItem_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("href", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](6, _c3, menuItem_r6.path), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](8, _c3, menuItem_r6.icon));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](4, 4, menuItem_r6.title));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", menuItem_r6.badge && menuItem_r6.badge != "");
  }
}

function VerticalMenuComponent_li_4_ul_4_li_1_a_1_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var menuSubItem_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](2, _c3, menuSubItem_r21.badgeClass));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](menuSubItem_r21.badge);
  }
}

function VerticalMenuComponent_li_4_ul_4_li_1_a_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](5, VerticalMenuComponent_li_4_ul_4_li_1_a_1_span_5_Template, 2, 4, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var menuSubItem_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](5, _c3, menuSubItem_r21.icon));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](4, 3, menuSubItem_r21.title));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", menuSubItem_r21.badge && menuSubItem_r21.badge != "");
  }
}

function VerticalMenuComponent_li_4_ul_4_li_1_a_2_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var menuSubItem_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](2, _c3, menuSubItem_r21.badgeClass));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](menuSubItem_r21.badge);
  }
}

function VerticalMenuComponent_li_4_ul_4_li_1_a_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](5, VerticalMenuComponent_li_4_ul_4_li_1_a_2_span_5_Template, 2, 4, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var menuSubItem_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("routerLink", menuSubItem_r21.path);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](6, _c3, menuSubItem_r21.icon));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](4, 4, menuSubItem_r21.title));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", menuSubItem_r21.badge && menuSubItem_r21.badge != "");
  }
}

function VerticalMenuComponent_li_4_ul_4_li_1_a_3_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var menuSubItem_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](2, _c3, menuSubItem_r21.badgeClass));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](menuSubItem_r21.badge);
  }
}

function VerticalMenuComponent_li_4_ul_4_li_1_a_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](5, VerticalMenuComponent_li_4_ul_4_li_1_a_3_span_5_Template, 2, 4, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var menuSubItem_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("routerLink", menuSubItem_r21.path);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](6, _c3, menuSubItem_r21.icon));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](4, 4, menuSubItem_r21.title));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", menuSubItem_r21.badge && menuSubItem_r21.badge != "");
  }
}

function VerticalMenuComponent_li_4_ul_4_li_1_ul_4_li_1_a_1_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var menuSubsubItem_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](2, _c3, menuSubsubItem_r36.badgeClass));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](menuSubsubItem_r36.badge);
  }
}

function VerticalMenuComponent_li_4_ul_4_li_1_ul_4_li_1_a_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](5, VerticalMenuComponent_li_4_ul_4_li_1_ul_4_li_1_a_1_span_5_Template, 2, 4, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var menuSubsubItem_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("routerLink", menuSubsubItem_r36.path);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](6, _c3, menuSubsubItem_r36.icon));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](4, 4, menuSubsubItem_r36.title));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", menuSubsubItem_r36.badge && menuSubsubItem_r36.badge != "");
  }
}

function VerticalMenuComponent_li_4_ul_4_li_1_ul_4_li_1_ng_template_2_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var menuSubsubItem_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](2, _c3, menuSubsubItem_r36.badgeClass));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](menuSubsubItem_r36.badge);
  }
}

function VerticalMenuComponent_li_4_ul_4_li_1_ul_4_li_1_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](5, VerticalMenuComponent_li_4_ul_4_li_1_ul_4_li_1_ng_template_2_span_5_Template, 2, 4, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var menuSubsubItem_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("routerLink", menuSubsubItem_r36.path);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](6, _c3, menuSubsubItem_r36.icon));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](4, 4, menuSubsubItem_r36.title));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", menuSubsubItem_r36.badge && menuSubsubItem_r36.badge != "");
  }
}

var _c4 = function _c4() {
  return {
    exact: true
  };
};

function VerticalMenuComponent_li_4_ul_4_li_1_ul_4_li_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "li", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, VerticalMenuComponent_li_4_ul_4_li_1_ul_4_li_1_a_1_Template, 6, 8, "a", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, VerticalMenuComponent_li_4_ul_4_li_1_ul_4_li_1_ng_template_2_Template, 6, 8, "ng-template", null, 35, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var menuSubsubItem_r36 = ctx.$implicit;

    var _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](3);

    var menuItem_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](4).$implicit;
    var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("level", ctx_r35.level + 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("parent", menuItem_r6.title)("hasSub", false)("path", menuSubsubItem_r36.path)("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](8, _c4))("ngClass", ctx_r35.config.layout.menuPosition === "Side" ? menuSubsubItem_r36.class : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !menuSubsubItem_r36.isExternalLink)("ngIfElse", _r38);
  }
}

function VerticalMenuComponent_li_4_ul_4_li_1_ul_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "ul", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, VerticalMenuComponent_li_4_ul_4_li_1_ul_4_li_1_Template, 4, 9, "li", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var menuSubItem_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", menuSubItem_r21.submenu);
  }
}

var _c5 = function _c5(a0) {
  return {
    "has-sub": a0
  };
};

function VerticalMenuComponent_li_4_ul_4_li_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "li", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, VerticalMenuComponent_li_4_ul_4_li_1_a_1_Template, 6, 7, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, VerticalMenuComponent_li_4_ul_4_li_1_a_2_Template, 6, 8, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](3, VerticalMenuComponent_li_4_ul_4_li_1_a_3_Template, 6, 8, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](4, VerticalMenuComponent_li_4_ul_4_li_1_ul_4_Template, 2, 1, "ul", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var menuSubItem_r21 = ctx.$implicit;
    var menuItem_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit;
    var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("level", ctx_r20.level + 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("parent", menuItem_r6.title)("hasSub", menuSubItem_r21.class.includes("has-sub") ? true : false)("path", menuSubItem_r21.path)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](10, _c5, menuSubItem_r21.class.includes("has-sub") ? true : false))("routerLinkActive", menuSubItem_r21.submenu.length != 0 ? "open" : "active");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", menuSubItem_r21.submenu.length > 0 && !menuSubItem_r21.isExternalLink);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", menuSubItem_r21.submenu.length === 0 && !menuSubItem_r21.isExternalLink);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", menuSubItem_r21.isExternalLink);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", menuSubItem_r21.submenu.length > 0);
  }
}

function VerticalMenuComponent_li_4_ul_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "ul", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, VerticalMenuComponent_li_4_ul_4_li_1_Template, 5, 12, "li", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var menuItem_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", menuItem_r6.submenu);
  }
}

var _c6 = function _c6() {
  return {
    exact: false
  };
};

function VerticalMenuComponent_li_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "li", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, VerticalMenuComponent_li_4_a_1_Template, 6, 7, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, VerticalMenuComponent_li_4_a_2_Template, 6, 8, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](3, VerticalMenuComponent_li_4_a_3_Template, 6, 10, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](4, VerticalMenuComponent_li_4_ul_4_Template, 2, 1, "ul", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var menuItem_r6 = ctx.$implicit;
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("level", ctx_r1.level + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("parent", menuItem_r6.title)("path", menuItem_r6.path)("hasSub", menuItem_r6.class.includes("has-sub") ? true : false)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](11, _c5, menuItem_r6.class.includes("has-sub") ? true : false))("routerLinkActive", menuItem_r6.submenu.length != 0 ? "open" : "active")("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](13, _c6));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", menuItem_r6.submenu.length > 0 && !menuItem_r6.isExternalLink);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", menuItem_r6.submenu.length === 0 && !menuItem_r6.isExternalLink);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", menuItem_r6.isExternalLink);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", menuItem_r6.submenu.length > 0);
  }
}

var VerticalMenuComponent = /*#__PURE__*/function () {
  function VerticalMenuComponent(router, translate, layoutService, configService, cdr, deviceService) {
    (0,F_portfolio_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, VerticalMenuComponent);

    this.router = router;
    this.translate = translate;
    this.layoutService = layoutService;
    this.configService = configService;
    this.cdr = cdr;
    this.deviceService = deviceService;
    this.level = 0;
    this.logoUrl = 'assets/img/logo.png';
    this.config = {};
    this.perfectScrollbarEnable = true;
    this.collapseSidebar = false;

    this.fireRefreshEventOnWindow = function () {
      var evt = document.createEvent("HTMLEvents");
      evt.initEvent("resize", true, false);
      window.dispatchEvent(evt);
    };

    this.config = this.configService.templateConf;
    this.innerWidth = window.innerWidth;
    this.isTouchDevice();
  }

  (0,F_portfolio_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(VerticalMenuComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      this.menuItems = _vertical_menu_routes_config__WEBPACK_IMPORTED_MODULE_2__.ROUTES;
    }
  }, {
    key: "ngAfterViewInit",
    value: function ngAfterViewInit() {
      var _this = this;

      this.configSub = this.configService.templateConf$.subscribe(function (templateConf) {
        if (templateConf) {
          _this.config = templateConf;
        }

        _this.loadLayout();

        _this.cdr.markForCheck();
      });
      this.layoutSub = this.layoutService.overlaySidebarToggle$.subscribe(function (collapse) {
        if (_this.config.layout.menuPosition === "Side") {
          _this.collapseSidebar = collapse;
        }
      });
    }
  }, {
    key: "onWindowResize",
    value: function onWindowResize(event) {
      var _this2 = this;

      if (this.resizeTimeout) {
        clearTimeout(this.resizeTimeout);
      }

      this.resizeTimeout = setTimeout(function () {
        _this2.innerWidth = event.target.innerWidth;

        _this2.loadLayout();
      }.bind(this), 500);
    }
  }, {
    key: "loadLayout",
    value: function loadLayout() {
      if (this.config.layout.menuPosition === "Top") {
        // Horizontal Menu
        if (this.innerWidth < 1200) {
          // Screen size < 1200
          this.menuItems = _horizontal_menu_navigation_routes_config__WEBPACK_IMPORTED_MODULE_3__.HROUTES;
        }
      } else if (this.config.layout.menuPosition === "Side") {
        // Vertical Menu{
        this.menuItems = _vertical_menu_routes_config__WEBPACK_IMPORTED_MODULE_2__.ROUTES;
      }

      if (this.config.layout.sidebar.backgroundColor === 'white') {
        this.logoUrl = 'assets/img/logo-dark.png';
      } else {
        this.logoUrl = 'assets/img/logo.png';
      }

      if (this.config.layout.sidebar.collapsed) {
        this.collapseSidebar = true;
      } else {
        this.collapseSidebar = false;
      }
    }
  }, {
    key: "toggleSidebar",
    value: function toggleSidebar() {
      var _this3 = this;

      var conf = this.config;
      conf.layout.sidebar.collapsed = !this.config.layout.sidebar.collapsed;
      this.configService.applyTemplateConfigChange({
        layout: conf.layout
      });
      setTimeout(function () {
        _this3.fireRefreshEventOnWindow();
      }, 300);
    }
  }, {
    key: "CloseSidebar",
    value: function CloseSidebar() {
      this.layoutService.toggleSidebarSmallScreen(false);
    }
  }, {
    key: "isTouchDevice",
    value: function isTouchDevice() {
      var isMobile = this.deviceService.isMobile();
      var isTablet = this.deviceService.isTablet();

      if (isMobile || isTablet) {
        this.perfectScrollbarEnable = false;
      } else {
        this.perfectScrollbarEnable = true;
      }
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      if (this.layoutSub) {
        this.layoutSub.unsubscribe();
      }

      if (this.configSub) {
        this.configSub.unsubscribe();
      }
    }
  }]);

  return VerticalMenuComponent;
}();

VerticalMenuComponent.ɵfac = function VerticalMenuComponent_Factory(t) {
  return new (t || VerticalMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_services_layout_service__WEBPACK_IMPORTED_MODULE_5__.LayoutService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_services_config_service__WEBPACK_IMPORTED_MODULE_6__.ConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_10__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](ngx_device_detector__WEBPACK_IMPORTED_MODULE_13__.DeviceDetectorService));
};

VerticalMenuComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
  type: VerticalMenuComponent,
  selectors: [["app-sidebar"]],
  viewQuery: function VerticalMenuComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵviewQuery"](_c0, 5);
    }

    if (rf & 2) {
      var _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵloadQuery"]()) && (ctx.toggleIcon = _t.first);
    }
  },
  hostBindings: function VerticalMenuComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("resize", function VerticalMenuComponent_resize_HostBindingHandler($event) {
        return ctx.onWindowResize($event);
      }, false, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresolveWindow"]);
    }
  },
  decls: 5,
  vars: 3,
  consts: [["class", "sidebar-header", 4, "ngIf"], [1, "sidebar-content", "main-menu-content", 3, "perfectScrollbar", "disabled"], [1, "nav-container"], ["appSidebarDropdown", "", 1, "navigation"], ["appSidebarlink", "", 3, "parent", "path", "level", "hasSub", "ngClass", "routerLinkActive", "routerLinkActiveOptions", 4, "ngFor", "ngForOf"], [1, "sidebar-header"], [1, "logo", "clearfix"], [1, "logo-text", "float-left", 3, "routerLink"], [1, "logo-img"], ["alt", "Apex logo", 3, "src"], [1, "text", "align-middle"], ["id", "sidebarToggle", "href", "javascript:;", 1, "nav-toggle", "d-none", "d-lg-none", "d-xl-block", 3, "click"], [1, "toggle-icon", 3, "ngClass"], ["toggleIcon", ""], ["id", "sidebarClose", "href", "javascript:;", 1, "nav-close", "d-block", "d-lg-block", "d-xl-none", 3, "click"], [1, "ft-x"], ["appSidebarlink", "", 3, "parent", "path", "level", "hasSub", "ngClass", "routerLinkActive", "routerLinkActiveOptions"], ["appSidebarAnchorToggle", "", 4, "ngIf"], ["appSidebarAnchorToggle", "", 3, "routerLink", 4, "ngIf"], ["target", "_blank", 3, "href", 4, "ngIf"], ["appSidebarDropdown", "", "class", "menu-content", 4, "ngIf"], ["appSidebarAnchorToggle", ""], [3, "ngClass"], [1, "menu-title"], [3, "ngClass", 4, "ngIf"], ["appSidebarAnchorToggle", "", 3, "routerLink"], ["target", "_blank", 3, "href"], ["appSidebarDropdown", "", 1, "menu-content"], ["appSidebarlink", "", 3, "parent", "hasSub", "path", "level", "ngClass", "routerLinkActive", 4, "ngFor", "ngForOf"], ["appSidebarlink", "", 3, "parent", "hasSub", "path", "level", "ngClass", "routerLinkActive"], ["target", "_blank", 3, "routerLink", 4, "ngIf"], ["target", "_blank", 3, "routerLink"], ["appSidebarlink", "", "routerLinkActive", "active", 3, "parent", "hasSub", "path", "level", "routerLinkActiveOptions", "ngClass", 4, "ngFor", "ngForOf"], ["appSidebarlink", "", "routerLinkActive", "active", 3, "parent", "hasSub", "path", "level", "routerLinkActiveOptions", "ngClass"], ["appSidebarAnchorToggle", "", 3, "routerLink", 4, "ngIf", "ngIfElse"], ["externalSubSubLinkBlock", ""]],
  template: function VerticalMenuComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](0, VerticalMenuComponent_div_0_Template, 12, 7, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "ul", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](4, VerticalMenuComponent_li_4_Template, 5, 14, "li", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", (ctx.config == null ? null : ctx.config.layout.menuPosition) === "Side");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("disabled", !ctx.perfectScrollbarEnable);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx.menuItems);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_15__.PerfectScrollbarDirective, _directives_sidebar_dropdown_directive__WEBPACK_IMPORTED_MODULE_7__.SidebarDropdownDirective, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterLinkWithHref, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgClass, _directives_sidebar_link_directive__WEBPACK_IMPORTED_MODULE_8__.SidebarLinkDirective, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterLinkActive, _directives_sidebar_anchor_toggle_directive__WEBPACK_IMPORTED_MODULE_9__.SidebarAnchorToggleDirective],
  pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslatePipe],
  encapsulation: 2,
  data: {
    animation: _animations_custom_animations__WEBPACK_IMPORTED_MODULE_4__.customAnimations
  }
});

/***/ }),

/***/ 7425:
/*!**************************************************!*\
  !*** ./src/app/store/counter/counter.actions.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "increment": function() { return /* binding */ increment; },
/* harmony export */   "decrement": function() { return /* binding */ decrement; },
/* harmony export */   "reset": function() { return /* binding */ reset; }
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 5585);

var increment = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[CounterComponent] Increment', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
var decrement = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[CounterComponent] Decrement', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
var reset = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[CounterComponent] Reset');

/***/ }),

/***/ 537:
/*!**************************************************!*\
  !*** ./src/app/store/counter/counter.reducer.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initialState": function() { return /* binding */ initialState; },
/* harmony export */   "counterReducer": function() { return /* binding */ counterReducer; }
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ 5585);
/* harmony import */ var app_store_counter_counter_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/store/counter/counter.actions */ 7425);


var initialState = 0;
var counterReducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createReducer)(initialState, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(app_store_counter_counter_actions__WEBPACK_IMPORTED_MODULE_0__.increment, function (state, action) {
  return state + action.value;
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(app_store_counter_counter_actions__WEBPACK_IMPORTED_MODULE_0__.decrement, function (state, action) {
  return state - action.value;
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(app_store_counter_counter_actions__WEBPACK_IMPORTED_MODULE_0__.reset, function (state) {
  return 0;
}));

/***/ }),

/***/ 9388:
/*!*****************************************!*\
  !*** ./src/app/store/store.reducers.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "reducers": function() { return /* binding */ reducers; }
/* harmony export */ });
/* harmony import */ var app_store_counter_counter_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/store/counter/counter.reducer */ 537);

var reducers = {
  count: app_store_counter_counter_reducer__WEBPACK_IMPORTED_MODULE_0__.counterReducer
};

/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": function() { return /* binding */ environment; }
/* harmony export */ });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}

_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendor"], function() { return __webpack_exec__(4431); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map