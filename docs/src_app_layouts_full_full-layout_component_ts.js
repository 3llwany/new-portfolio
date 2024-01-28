"use strict";
(self["webpackChunkportfolio"] = self["webpackChunkportfolio"] || []).push([["src_app_layouts_full_full-layout_component_ts"],{

/***/ 6141:
/*!*******************************************************!*\
  !*** ./src/app/layouts/full/full-layout.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FullLayoutComponent": () => (/* binding */ FullLayoutComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 9151);
/* harmony import */ var app_shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/footer/footer.component */ 5227);
/* harmony import */ var app_shared_vertical_menu_vertical_menu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/vertical-menu/vertical-menu.component */ 2329);
/* harmony import */ var app_shared_directives_sidebar_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/directives/sidebar.directive */ 7744);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var app_shared_services_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/services/config.service */ 6955);
/* harmony import */ var app_shared_services_layout_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/services/layout.service */ 5682);
/* harmony import */ var app_shared_services_customizer_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/services/customizer.service */ 360);
/* harmony import */ var ngx_device_detector__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-device-detector */ 1431);












const _c0 = function (a0) {
  return {
    "background-image": a0
  };
};
function FullLayoutComponent_div_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "div", 11);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](1, _c0, "url(" + ctx_r2.bgImage + ")"));
  }
}
const _c1 = function (a0, a1, a2) {
  return {
    "main-menu": a0,
    "menu-fixed": a1,
    "menu-native-scroll": a2
  };
};
function FullLayoutComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("mouseenter", function FullLayoutComponent_div_1_Template_div_mouseenter_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r4);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r3.sidebarMouseenter($event));
    })("mouseleave", function FullLayoutComponent_div_1_Template_div_mouseleave_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r4);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r5.sidebarMouseleave($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "app-sidebar");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, FullLayoutComponent_div_1_div_2_Template, 1, 3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction3"](4, _c1, ctx_r0.menuPosition === "Side" || ctx_r0.displayOverlayMenu, ctx_r0.menuPosition === "Side" || ctx_r0.displayOverlayMenu, !ctx_r0.perfectScrollbarEnable));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("data-background-color", (ctx_r0.config == null ? null : ctx_r0.config.layout.variant) === "Transparent" ? "black" : ctx_r0.bgColor)("data-image", ctx_r0.bgImage);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.config == null ? null : ctx_r0.config.layout.sidebar.backgroundImage);
  }
}
function FullLayoutComponent_button_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function FullLayoutComponent_button_8_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r6.scrollToTop());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
const _c2 = function (a0) {
  return {
    "show-overlay": a0
  };
};
const _c3 = function (a0, a1) {
  return {
    "d-none": a0,
    "d-block": a1
  };
};
class FullLayoutComponent {
  constructor(configService, layoutService, router, customizerService, document,
  //  @Inject(WINDOW) private window: Window,
  renderer, cdr, deviceService) {
    this.configService = configService;
    this.layoutService = layoutService;
    this.router = router;
    this.customizerService = customizerService;
    this.document = document;
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
    this.perfectScrollbarEnable = true;
    this.isScrollTopVisible = false;
    this.config = this.configService.templateConf;
    this.innerWidth = window.innerWidth;
    // On toggle sidebar menu
    this.layoutSub = layoutService.toggleSidebar$.subscribe(isShow => {
      this.hideSidebar = !isShow;
      if (this.hideSidebar) {
        this.overlayContent = false;
      } else {
        this.overlayContent = true;
      }
      this.toggleSidebar();
    });
  }
  ngOnInit() {
    this.configSub = this.configService.templateConf$.subscribe(templateConf => {
      if (templateConf) {
        this.config = templateConf;
      }
      //load layout
      this.loadLayout();
      this.cdr.markForCheck();
    });
    //hide overlay class on router change
    this.router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_8__.NavigationEnd)).subscribe(routeChange => {
      if (this.config.layout.menuPosition === "Side" || this.displayOverlayMenu) {
        // Vertical Menu
        if (this.innerWidth < 1200) {
          this.layoutService.toggleSidebarSmallScreen(false);
          this.overlayContent = false;
          this.renderer.removeClass(this.document.body, "overflow-hidden");
        }
      }
    });
  }
  ngAfterViewInit() {
    this.setMenuLayout();
  }
  ngOnDestroy() {
    //Unsubcribe subscriptions
    if (this.configSub) {
      this.configSub.unsubscribe();
    }
    if (this.layoutSub) {
      this.layoutSub.unsubscribe();
    }
  }
  //adjust layout
  setMenuLayout() {
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
  loadLayout() {
    //menu position "SIDE" or "TOP"
    if (this.config.layout.menuPosition && this.config.layout.menuPosition.toString().trim() != "") {
      this.menuPosition = this.config.layout.menuPosition;
    }
    //Hide/show sidebar menu background image
    if (!this.config.layout.sidebar.backgroundImage) {
      this.bgImage = "";
    } else {
      this.bgImage = this.config.layout.sidebar.backgroundImageURL;
    }
    //Set sidebar menu background color
    if (!this.config.layout.sidebar.backgroundColor) {
      this.bgColor = this.customizerService.light_dark_colors[7].code;
    } else {
      this.bgColor = this.config.layout.sidebar.backgroundColor;
    }
    //toggle side menu
    if (this.config.layout.menuPosition === "Side") {
      if (this.config.layout.sidebar.collapsed) {
        this.isMenuCollapsedOnHover = true;
      } else {
        this.isMenuCollapsedOnHover = true;
      }
      this.toggleSidebar();
    }
    this.removeTransparentBGClasses();
    // Layout variants
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
    this.setMenuLayout();
    // For Sidebar width
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
    }
    //Navbar types
    if (this.config.layout.navbar.type === 'Static') {
      this.renderer.removeClass(this.document.body, "navbar-sticky");
      this.renderer.addClass(this.document.body, "navbar-static");
    } else if (this.config.layout.navbar.type === 'Fixed') {
      this.renderer.removeClass(this.document.body, "navbar-static");
      this.renderer.addClass(this.document.body, "navbar-sticky");
    }
  }
  toggleSidebar() {
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
  isTouchDevice() {
    const isMobile = this.deviceService.isMobile();
    const isTablet = this.deviceService.isTablet();
    if (isMobile || isTablet) {
      if (!this.hideSidebar) {
        this.renderer.addClass(this.document.body, "overflow-hidden");
      } else {
        this.renderer.removeClass(this.document.body, "overflow-hidden");
      }
    }
  }
  hideCompactMenuOnSmallScreen() {
    if (this.innerWidth < 1200) {
      let conf = this.config;
      conf.layout.sidebar.collapsed = false;
      this.configService.applyTemplateConfigChange({
        layout: conf.layout
      });
    }
  }
  //Remove transparent layout classes
  removeTransparentBGClasses() {
    this.customizerService.transparent_colors.forEach(_ => {
      this.renderer.removeClass(this.document.body, _.class);
    });
    this.customizerService.transparent_colors_with_shade.forEach(_ => {
      this.renderer.removeClass(this.document.body, _.class);
    });
  }
  sidebarMouseenter(e) {
    if (this.config.layout.sidebar.collapsed) {
      this.isMenuCollapsedOnHover = false;
      this.layoutService.overlaySidebartoggle(this.isMenuCollapsedOnHover);
    }
  }
  sidebarMouseleave(e) {
    if (this.config.layout.sidebar.collapsed) {
      this.isMenuCollapsedOnHover = true;
      this.layoutService.overlaySidebartoggle(this.isMenuCollapsedOnHover);
    }
  }
  //scroll to top on click
  scrollToTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }
  onOutsideClick(e) {
    if (this.innerWidth < 1200) {
      if (!e.target.classList.contains("toggleSidebarNavbarButton")) {
        this.layoutService.toggleSidebarSmallScreen(false);
      }
    }
  }
  onWrapperClick() {
    this.isNavbarSeachTextEmpty = true;
  }
  checkNavbarSeachTextEmpty($event) {
    this.isNavbarSeachTextEmpty = $event;
  }
  onResize(event) {
    if (this.resizeTimeout) {
      clearTimeout(this.resizeTimeout);
    }
    this.resizeTimeout = setTimeout((() => {
      this.innerWidth = event.target.innerWidth;
      this.setMenuLayout();
      this.hideCompactMenuOnSmallScreen();
    }).bind(this), 500);
  }
  //Add/remove classes on page scroll
  onWindowScroll() {
    //   let number = this.window.pageYOffset || this.document.documentElement.scrollTop || this.document.body.scrollTop || 0;
    let number = this.document.documentElement.scrollTop || this.document.body.scrollTop || 0;
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
  static #_ = this.ɵfac = function FullLayoutComponent_Factory(t) {
    return new (t || FullLayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](app_shared_services_config_service__WEBPACK_IMPORTED_MODULE_3__.ConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](app_shared_services_layout_service__WEBPACK_IMPORTED_MODULE_4__.LayoutService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](app_shared_services_customizer_service__WEBPACK_IMPORTED_MODULE_5__.CustomizerService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_9__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](ngx_device_detector__WEBPACK_IMPORTED_MODULE_10__.DeviceDetectorService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: FullLayoutComponent,
    selectors: [["app-full-layout"]],
    hostBindings: function FullLayoutComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("resize", function FullLayoutComponent_resize_HostBindingHandler($event) {
          return ctx.onResize($event);
        }, false, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresolveWindow"])("scroll", function FullLayoutComponent_scroll_HostBindingHandler() {
          return ctx.onWindowScroll();
        }, false, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresolveWindow"]);
      }
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵStandaloneFeature"]],
    decls: 11,
    vars: 11,
    consts: [[1, "wrapper", 3, "click", "resize"], ["appSidebar", "", "class", "app-sidebar", "data-active-color", "white", 3, "ngClass", "mouseenter", "mouseleave", 4, "ngIf"], [1, "main-panel"], [1, "main-content"], [1, "content-overlay"], [1, "content-wrapper"], ["class", "btn btn-primary scroll-top", "type", "button", 3, "click", 4, "ngIf"], [1, "sidenav-overlay", 3, "click"], [1, "drag-target"], ["appSidebar", "", "data-active-color", "white", 1, "app-sidebar", 3, "ngClass", "mouseenter", "mouseleave"], ["class", "sidebar-background", 3, "ngStyle", 4, "ngIf"], [1, "sidebar-background", 3, "ngStyle"], ["type", "button", 1, "btn", "btn-primary", "scroll-top", 3, "click"], [1, "ft-arrow-up"]],
    template: function FullLayoutComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function FullLayoutComponent_Template_div_click_0_listener() {
          return ctx.onWrapperClick();
        })("resize", function FullLayoutComponent_Template_div_resize_0_listener($event) {
          return ctx.onResize($event);
        }, false, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresolveWindow"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, FullLayoutComponent_div_1_Template, 3, 8, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](7, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, FullLayoutComponent_button_8_Template, 2, 0, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function FullLayoutComponent_Template_div_click_9_listener($event) {
          return ctx.onOutsideClick($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](6, _c2, !ctx.isNavbarSeachTextEmpty));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.menuPosition === "Side" || ctx.displayOverlayMenu);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.isScrollTopVisible);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction2"](8, _c3, ctx.displayOverlayMenu && ctx.hideSidebar && !ctx.overlayContent, ctx.displayOverlayMenu && !ctx.hideSidebar && ctx.overlayContent && ctx.innerWidth < 1200));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, app_shared_directives_sidebar_directive__WEBPACK_IMPORTED_MODULE_2__.SidebarDirective, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgClass, app_shared_vertical_menu_vertical_menu_component__WEBPACK_IMPORTED_MODULE_1__.VerticalMenuComponent, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgStyle, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterOutlet, app_shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_0__.FooterComponent],
    styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmdWxsLWxheW91dC5jb21wb25lbnQuc2NzcyJ9 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbGF5b3V0cy9mdWxsL2Z1bGwtbGF5b3V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSx3S0FBd0siLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 1138:
/*!********************************************************!*\
  !*** ./src/app/shared/animations/custom-animations.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "customAnimations": () => (/* binding */ customAnimations)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ 4851);

const customAnimations = [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)('slideInOut', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.state)('1', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  height: '*'
})), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.state)('0', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  height: '0px'
})), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('1 <=> 0', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)(200))])];

/***/ }),

/***/ 8327:
/*!**********************************************************************!*\
  !*** ./src/app/shared/directives/sidebar-anchor-toggle.directive.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SidebarAnchorToggleDirective": () => (/* binding */ SidebarAnchorToggleDirective)
/* harmony export */ });
/* harmony import */ var _sidebar_link_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sidebar-link.directive */ 7883);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);



class SidebarAnchorToggleDirective {
  constructor(navlink) {
    this.navlink = navlink;
  }
  onClick() {
    this.navlink.toggle();
  }
  static #_ = this.ɵfac = function SidebarAnchorToggleDirective_Factory(t) {
    return new (t || SidebarAnchorToggleDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_sidebar_link_directive__WEBPACK_IMPORTED_MODULE_0__.SidebarLinkDirective));
  };
  static #_2 = this.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
    type: SidebarAnchorToggleDirective,
    selectors: [["", "appSidebarAnchorToggle", ""]],
    hostBindings: function SidebarAnchorToggleDirective_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SidebarAnchorToggleDirective_click_HostBindingHandler($event) {
          return ctx.onClick($event);
        });
      }
    },
    standalone: true
  });
}

/***/ }),

/***/ 3273:
/*!*****************************************************************!*\
  !*** ./src/app/shared/directives/sidebar-dropdown.directive.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SidebarDropdownDirective": () => (/* binding */ SidebarDropdownDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);


class SidebarDropdownDirective {
  constructor(router) {
    this.router = router;
    this.navlinks = [];
  }
  ngOnInit() {
    //write your code here!
  }
  static #_ = this.ɵfac = function SidebarDropdownDirective_Factory(t) {
    return new (t || SidebarDropdownDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router));
  };
  static #_2 = this.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: SidebarDropdownDirective,
    selectors: [["", "appSidebarDropdown", ""]],
    standalone: true
  });
}

/***/ }),

/***/ 7883:
/*!*************************************************************!*\
  !*** ./src/app/shared/directives/sidebar-link.directive.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SidebarLinkDirective": () => (/* binding */ SidebarLinkDirective)
/* harmony export */ });
/* harmony import */ var _sidebar_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sidebar.directive */ 7744);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);



class SidebarLinkDirective {
  constructor(sideNav) {
    this.sideNav = sideNav;
  }
  get open() {
    return this._open;
  }
  set open(value) {
    this._open = value;
  }
  get sidebarGroupActive() {
    return this._sidebarGroupActive;
  }
  set sidebarGroupActive(value) {
    this._sidebarGroupActive = value;
  }
  get navCollapsedOpen() {
    return this._navCollapsedOpen;
  }
  set navCollapsedOpen(value) {
    this._navCollapsedOpen = value;
  }
  ngOnInit() {
    this.sideNav.addLink(this);
  }
  ngOnDestroy() {}
  //when side menu (vertical menu) item gets clicked
  toggle() {
    this.open = !this.open;
    if (this.open) {
      this.sideNav.closeOtherLinks(this);
    }
    if (!this.open && this.level.toString() === "1" && this.hasSub) {
      this.sidebarGroupActive = false;
    }
  }
  static #_ = this.ɵfac = function SidebarLinkDirective_Factory(t) {
    return new (t || SidebarLinkDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_sidebar_directive__WEBPACK_IMPORTED_MODULE_0__.SidebarDirective));
  };
  static #_2 = this.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
    type: SidebarLinkDirective,
    selectors: [["", "appSidebarlink", ""]],
    hostVars: 6,
    hostBindings: function SidebarLinkDirective_HostBindings(rf, ctx) {
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("open", ctx.open)("sidebar-group-active", ctx.sidebarGroupActive)("nav-collapsed-open", ctx.navCollapsedOpen);
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
    },
    standalone: true
  });
}

/***/ }),

/***/ 7744:
/*!********************************************************!*\
  !*** ./src/app/shared/directives/sidebar.directive.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SidebarDirective": () => (/* binding */ SidebarDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/config.service */ 6955);
/* harmony import */ var _services_layout_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/layout.service */ 5682);




class SidebarDirective {
  constructor(cdr, router, configService, layoutService) {
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
  get navExpanded() {
    return this._navExpanded;
  }
  set navExpanded(value) {
    this._navExpanded = value;
  }
  ngOnInit() {
    this.innerWidth = window.innerWidth;
    this.layoutSub = this.configService.templateConf$.subscribe(templateConf => {
      if (templateConf) {
        this.config = templateConf;
      }
      this.loadLayout();
      this.cdr.markForCheck();
    });
  }
  ngOnDestroy() {
    if (this.layoutSub) {
      this.layoutSub.unsubscribe();
    }
  }
  //load layout when changes in the config
  loadLayout() {
    this.sidebarExpanded = !this.config.layout.sidebar.collapsed;
    if (this.config.layout.sidebar.collapsed && !this.mouseEnter) {
      this.setSidebarGroupActiveCollapsed();
      this.navExpanded = false;
    } else {
      this.setSidebarGroupActive();
      this.navExpanded = true;
    }
  }
  //add menu links to the link list
  addLink(link) {
    this.navlinks.push(link);
  }
  //close all other menu items other than active one
  closeOtherLinks(openLink) {
    this.navlinks.forEach(link => {
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
  ngAfterViewInit() {}
  // call when sidebar toggle is collapsed but still in expand mode on mouse hover
  setSidebarGroupActive() {
    if (this.navlinks.length > 0) {
      this.navlinks.forEach(link => {
        link.sidebarGroupActive = false;
        link.navCollapsedOpen = false;
      });
      let matched = this.navlinks.find(link => link.path === this.router.url);
      if (matched) {
        let parent = this.navlinks.find(link => link.parent === matched.parent && link.level.toString() === "1" && link.hasSub === true);
        if (parent) {
          parent.sidebarGroupActive = true;
          parent.navCollapsedOpen = false;
          parent.open = true;
        }
      }
    }
  }
  // call when sidebar toggle is collapsed and is in collapse mode on mouse out
  setSidebarGroupActiveCollapsed() {
    this.closeOtherLinks(this.navlinks.find(link => link.path === this.router.url));
    if (this.navlinks.length > 0) {
      this.navlinks.forEach(link => {
        link.sidebarGroupActive = false;
        link.navCollapsedOpen = false;
      });
      let matched = this.navlinks.find(link => link.path === this.router.url);
      if (matched) {
        let parent = this.navlinks.find(link => link.parent === matched.parent && link.level.toString() === "1" && link.hasSub === true);
        if (parent) {
          parent.sidebarGroupActive = true;
          parent.navCollapsedOpen = true;
          parent.open = false;
        }
      }
    }
  }
  // mouse enter event of side menu
  onMouseOver(e) {
    this.mouseEnter = true;
    if (this.config.layout.sidebar.collapsed) {
      this.setSidebarGroupActive();
      this.navExpanded = true;
    }
  }
  // mouse leave event of side menu
  onMouseOut(e) {
    this.mouseEnter = false;
    if (this.config.layout.sidebar.collapsed) {
      this.setSidebarGroupActiveCollapsed();
      this.navExpanded = false;
    }
  }
  static #_ = this.ɵfac = function SidebarDirective_Factory(t) {
    return new (t || SidebarDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_config_service__WEBPACK_IMPORTED_MODULE_0__.ConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_layout_service__WEBPACK_IMPORTED_MODULE_1__.LayoutService));
  };
  static #_2 = this.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
    type: SidebarDirective,
    selectors: [["", "appSidebar", ""]],
    hostVars: 2,
    hostBindings: function SidebarDirective_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("mouseenter", function SidebarDirective_mouseenter_HostBindingHandler($event) {
          return ctx.onMouseOver($event);
        })("mouseleave", function SidebarDirective_mouseleave_HostBindingHandler($event) {
          return ctx.onMouseOut($event);
        });
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("expanded", ctx.navExpanded);
      }
    },
    inputs: {
      navExpanded: "navExpanded"
    },
    standalone: true
  });
}

/***/ }),

/***/ 5227:
/*!***************************************************!*\
  !*** ./src/app/shared/footer/footer.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);


class FooterComponent {
  constructor() {
    //Variables
    this.currentDate = new Date();
  }
  static #_ = this.ɵfac = function FooterComponent_Factory(t) {
    return new (t || FooterComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: FooterComponent,
    selectors: [["app-footer"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 8,
    vars: 4,
    consts: [[1, "footer"], [1, "copyright", "clearfix", "text-muted", "m-0"], ["id", "pixinventLink", "href", "https://themeforest.net/user/pixinvent/portfolio?ref=pixinvent"], [1, "d-none", "d-sm-inline-block"]],
    template: function FooterComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0)(1, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "PIXINVENT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, ", All rights reserved.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Copyright \u00A9 ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 1, ctx.currentDate, "yyyy"), " ");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.DatePipe],
    styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LnNjc3MifQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLG9LQUFvSyIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 6955:
/*!***************************************************!*\
  !*** ./src/app/shared/services/config.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfigService": () => (/* binding */ ConfigService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 4505);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


class ConfigService {
  constructor() {
    this.templateConf = this.setConfigValue();
    this.templateConfSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(this.templateConf);
    this.templateConf$ = this.templateConfSubject.asObservable();
  }
  // Default configurations for Light layout. Please check *customizer.service.ts* for different colors and bg images options
  setConfigValue() {
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
  }
  // Default configurations for Dark layout. Please check *customizer.service.ts* for different colors and bg images options
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
  applyTemplateConfigChange(tempConfig) {
    this.templateConf = Object.assign(this.templateConf, tempConfig);
    this.templateConfSubject.next(this.templateConf);
  }
  static #_ = this.ɵfac = function ConfigService_Factory(t) {
    return new (t || ConfigService)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: ConfigService,
    factory: ConfigService.ɵfac,
    providedIn: "root"
  });
}

/***/ }),

/***/ 360:
/*!*******************************************************!*\
  !*** ./src/app/shared/services/customizer.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomizerService": () => (/* binding */ CustomizerService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config.service */ 6955);


class CustomizerService {
  constructor(config) {
    this.config = config;
    // sidebar BG colors for Light & Dark Layout
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
    }];
    // sidebar BG colors for Transparent Layout
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
    }];
    // sidebar BG images for Light & Dark Layout
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
    }];
    // Background Colors with Shades for Transparent Layout
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
  getData() {
    this.lightDarkLayoutGradientBGColors = this.getlightDarkLayoutGradientBGColors();
    this.lightDarkLayoutSolidBGColors = this.getlightDarkLayoutSolidBGColors();
    this.transparentLayoutBGColors = this.getTransparentLayoutBGColors();
    this.transparentLayoutBGColorsWithShades = this.GetTransparentLayoutBGColorsWithShades();
    this.lightDarkLayoutBGImages = this.getLightDarkLayoutBGImages();
  }
  getlightDarkLayoutGradientBGColors() {
    return this.light_dark_colors.filter(_ => _.type === 'gradient').map(color => {
      color.active = color.code === this.config.templateConf.layout.sidebar.backgroundColor;
      return {
        ...color
      };
    });
  }
  getlightDarkLayoutSolidBGColors() {
    return this.light_dark_colors.filter(_ => _.type === 'solid').map(color => {
      color.active = color.code === this.config.templateConf.layout.sidebar.backgroundColor;
      return {
        ...color
      };
    });
  }
  getTransparentLayoutBGColors() {
    return this.transparent_colors.map(color => {
      color.active = color.class === this.config.templateConf.layout.sidebar.backgroundColor;
      return {
        ...color
      };
    });
  }
  GetTransparentLayoutBGColorsWithShades() {
    return this.transparent_colors_with_shade.map(color => {
      color.active = color.class === this.config.templateConf.layout.sidebar.backgroundColor;
      return {
        ...color
      };
    });
  }
  getLightDarkLayoutBGImages() {
    return this.light_dark_bg_images.map(image => {
      image.active = image.src === this.config.templateConf.layout.sidebar.backgroundImageURL;
      return {
        ...image
      };
    });
  }
  //called when click to change on any Gradient/Solid color for Light & Dark layout in customizer
  changeSidebarBGColor(color) {
    let conf = this.config.templateConf;
    conf.layout.sidebar.backgroundColor = color.code;
    this.config.applyTemplateConfigChange({
      layout: conf.layout
    });
    this.getData();
  }
  //called when click to change on any Transparent color for Transparent layout in customizer
  changeSidebarTransparentBGColor(color) {
    let conf = this.config.templateConf;
    conf.layout.sidebar.backgroundColor = color.class;
    conf.layout.sidebar.backgroundImage = false;
    conf.layout.sidebar.backgroundImageURL = '';
    this.config.applyTemplateConfigChange({
      layout: conf.layout
    });
    this.getData();
  }
  //called when click to change on any image for Light & Dark layout in customizer
  changeSidebarBgImage(image) {
    let conf = this.config.templateConf;
    conf.layout.sidebar.backgroundImageURL = image.src;
    this.config.applyTemplateConfigChange({
      layout: conf.layout
    });
    this.getData();
  }
  bgImageDisplay(e) {
    let conf = this.config.templateConf;
    if (e.target.checked) {
      conf.layout.sidebar.backgroundImage = true;
    } else {
      conf.layout.sidebar.backgroundImage = false;
    }
    this.config.applyTemplateConfigChange({
      layout: conf.layout
    });
  }
  toggleCompactMenu(e) {
    let conf = this.config.templateConf;
    if (e.target.checked) {
      conf.layout.sidebar.collapsed = true;
    } else {
      conf.layout.sidebar.collapsed = false;
    }
    this.config.applyTemplateConfigChange({
      layout: conf.layout
    });
  }
  changeSidebarWidth(value) {
    let conf = this.config.templateConf;
    conf.layout.sidebar.size = value;
    this.config.applyTemplateConfigChange({
      layout: conf.layout
    });
  }
  toggleNavbarType(value) {
    let conf = this.config.templateConf;
    conf.layout.navbar.type = value;
    this.config.applyTemplateConfigChange({
      layout: conf.layout
    });
  }
  // position: "Side" for vertical menu and position: "Top" for horizontal menu
  toggleMenuPosition(position) {
    let conf = this.config.templateConf;
    conf.layout.menuPosition = position;
    this.config.applyTemplateConfigChange({
      layout: conf.layout
    });
  }
  switchLayout(layout, isBgImageDisplay) {
    let conf = this.config.templateConf;
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
  static #_ = this.ɵfac = function CustomizerService_Factory(t) {
    return new (t || CustomizerService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_config_service__WEBPACK_IMPORTED_MODULE_0__.ConfigService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: CustomizerService,
    factory: CustomizerService.ɵfac,
    providedIn: "root"
  });
}

/***/ }),

/***/ 5682:
/*!***************************************************!*\
  !*** ./src/app/shared/services/layout.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LayoutService": () => (/* binding */ LayoutService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 2218);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


class LayoutService {
  constructor() {
    this.toggleSidebar = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject(); // small screen
    this.overlaySidebarToggle = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    this.toggleNotiSidebar = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    // Observable
    this.toggleSidebar$ = this.toggleSidebar.asObservable();
    this.overlaySidebarToggle$ = this.overlaySidebarToggle.asObservable();
    this.toggleNotiSidebar$ = this.toggleNotiSidebar.asObservable();
  }
  toggleSidebarSmallScreen(toggle) {
    this.toggleSidebar.next(toggle);
  }
  overlaySidebartoggle(toggle) {
    this.overlaySidebarToggle.next(toggle);
  }
  toggleNotificationSidebar(toggle) {
    this.toggleNotiSidebar.next(toggle);
  }
  static #_ = this.ɵfac = function LayoutService_Factory(t) {
    return new (t || LayoutService)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: LayoutService,
    factory: LayoutService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 2329:
/*!*****************************************************************!*\
  !*** ./src/app/shared/vertical-menu/vertical-menu.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VerticalMenuComponent": () => (/* binding */ VerticalMenuComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 9461);
/* harmony import */ var _animations_custom_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../animations/custom-animations */ 1138);
/* harmony import */ var _directives_sidebar_anchor_toggle_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../directives/sidebar-anchor-toggle.directive */ 8327);
/* harmony import */ var _directives_sidebar_link_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../directives/sidebar-link.directive */ 7883);
/* harmony import */ var _directives_sidebar_dropdown_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../directives/sidebar-dropdown.directive */ 3273);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 8626);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_layout_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/layout.service */ 5682);
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/config.service */ 6955);
/* harmony import */ var ngx_device_detector__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-device-detector */ 1431);
















const _c0 = ["toggleIcon"];
const _c1 = function () {
  return ["/page"];
};
const _c2 = function (a0, a1) {
  return {
    "ft-toggle-left": a0,
    "ft-toggle-right": a1
  };
};
function VerticalMenuComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 5)(1, "div", 6)(2, "a", 7)(3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "APEX");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function VerticalMenuComponent_div_0_Template_a_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r4);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r3.toggleSidebar());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](8, "i", 12, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function VerticalMenuComponent_div_0_Template_a_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r4);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r5.CloseSidebar());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](11, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](3, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", ctx_r0.logoUrl, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction2"](4, _c2, ctx_r0.config.layout.sidebar.collapsed, !ctx_r0.config.layout.sidebar.collapsed));
  }
}
const _c3 = function (a0) {
  return [a0];
};
function VerticalMenuComponent_li_4_a_1_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const menuItem_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](2, _c3, menuItem_r6.badgeClass));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](menuItem_r6.badge);
  }
}
function VerticalMenuComponent_li_4_a_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, VerticalMenuComponent_li_4_a_1_span_5_Template, 2, 4, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const menuItem_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](5, _c3, menuItem_r6.icon));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](4, 3, menuItem_r6.title));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", menuItem_r6.badge && menuItem_r6.badge != "");
  }
}
function VerticalMenuComponent_li_4_a_2_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const menuItem_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](2, _c3, menuItem_r6.badgeClass));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](menuItem_r6.badge);
  }
}
function VerticalMenuComponent_li_4_a_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, VerticalMenuComponent_li_4_a_2_span_5_Template, 2, 4, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const menuItem_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("routerLink", menuItem_r6.path);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](6, _c3, menuItem_r6.icon));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](4, 4, menuItem_r6.title));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", menuItem_r6.badge && menuItem_r6.badge != "");
  }
}
function VerticalMenuComponent_li_4_a_3_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const menuItem_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](2, _c3, menuItem_r6.badgeClass));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](menuItem_r6.badge);
  }
}
function VerticalMenuComponent_li_4_a_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, VerticalMenuComponent_li_4_a_3_span_5_Template, 2, 4, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const menuItem_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("href", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](6, _c3, menuItem_r6.path), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](8, _c3, menuItem_r6.icon));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](4, 4, menuItem_r6.title));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", menuItem_r6.badge && menuItem_r6.badge != "");
  }
}
function VerticalMenuComponent_li_4_ul_4_li_1_a_1_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const menuSubItem_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](2, _c3, menuSubItem_r21.badgeClass));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](menuSubItem_r21.badge);
  }
}
function VerticalMenuComponent_li_4_ul_4_li_1_a_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, VerticalMenuComponent_li_4_ul_4_li_1_a_1_span_5_Template, 2, 4, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const menuSubItem_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](5, _c3, menuSubItem_r21.icon));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](4, 3, menuSubItem_r21.title));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", menuSubItem_r21.badge && menuSubItem_r21.badge != "");
  }
}
function VerticalMenuComponent_li_4_ul_4_li_1_a_2_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const menuSubItem_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](2, _c3, menuSubItem_r21.badgeClass));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](menuSubItem_r21.badge);
  }
}
function VerticalMenuComponent_li_4_ul_4_li_1_a_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, VerticalMenuComponent_li_4_ul_4_li_1_a_2_span_5_Template, 2, 4, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const menuSubItem_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("routerLink", menuSubItem_r21.path);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](6, _c3, menuSubItem_r21.icon));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](4, 4, menuSubItem_r21.title));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", menuSubItem_r21.badge && menuSubItem_r21.badge != "");
  }
}
function VerticalMenuComponent_li_4_ul_4_li_1_a_3_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const menuSubItem_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](2, _c3, menuSubItem_r21.badgeClass));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](menuSubItem_r21.badge);
  }
}
function VerticalMenuComponent_li_4_ul_4_li_1_a_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, VerticalMenuComponent_li_4_ul_4_li_1_a_3_span_5_Template, 2, 4, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const menuSubItem_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("routerLink", menuSubItem_r21.path);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](6, _c3, menuSubItem_r21.icon));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](4, 4, menuSubItem_r21.title));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", menuSubItem_r21.badge && menuSubItem_r21.badge != "");
  }
}
function VerticalMenuComponent_li_4_ul_4_li_1_ul_4_li_1_a_1_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const menuSubsubItem_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](2, _c3, menuSubsubItem_r36.badgeClass));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](menuSubsubItem_r36.badge);
  }
}
function VerticalMenuComponent_li_4_ul_4_li_1_ul_4_li_1_a_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, VerticalMenuComponent_li_4_ul_4_li_1_ul_4_li_1_a_1_span_5_Template, 2, 4, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const menuSubsubItem_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("routerLink", menuSubsubItem_r36.path);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](6, _c3, menuSubsubItem_r36.icon));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](4, 4, menuSubsubItem_r36.title));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", menuSubsubItem_r36.badge && menuSubsubItem_r36.badge != "");
  }
}
function VerticalMenuComponent_li_4_ul_4_li_1_ul_4_li_1_ng_template_2_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const menuSubsubItem_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](2, _c3, menuSubsubItem_r36.badgeClass));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](menuSubsubItem_r36.badge);
  }
}
function VerticalMenuComponent_li_4_ul_4_li_1_ul_4_li_1_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, VerticalMenuComponent_li_4_ul_4_li_1_ul_4_li_1_ng_template_2_span_5_Template, 2, 4, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const menuSubsubItem_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("routerLink", menuSubsubItem_r36.path);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](6, _c3, menuSubsubItem_r36.icon));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](4, 4, menuSubsubItem_r36.title));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", menuSubsubItem_r36.badge && menuSubsubItem_r36.badge != "");
  }
}
const _c4 = function () {
  return {
    exact: true
  };
};
function VerticalMenuComponent_li_4_ul_4_li_1_ul_4_li_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "li", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, VerticalMenuComponent_li_4_ul_4_li_1_ul_4_li_1_a_1_Template, 6, 8, "a", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, VerticalMenuComponent_li_4_ul_4_li_1_ul_4_li_1_ng_template_2_Template, 6, 8, "ng-template", null, 35, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const menuSubsubItem_r36 = ctx.$implicit;
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](3);
    const menuItem_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](4).$implicit;
    const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("level", ctx_r35.level + 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("parent", menuItem_r6.title)("hasSub", false)("path", menuSubsubItem_r36.path)("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](8, _c4))("ngClass", ctx_r35.config.layout.menuPosition === "Side" ? menuSubsubItem_r36.class : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !menuSubsubItem_r36.isExternalLink)("ngIfElse", _r38);
  }
}
function VerticalMenuComponent_li_4_ul_4_li_1_ul_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ul", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, VerticalMenuComponent_li_4_ul_4_li_1_ul_4_li_1_Template, 4, 9, "li", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const menuSubItem_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", menuSubItem_r21.submenu);
  }
}
const _c5 = function (a0) {
  return {
    "has-sub": a0
  };
};
function VerticalMenuComponent_li_4_ul_4_li_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "li", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, VerticalMenuComponent_li_4_ul_4_li_1_a_1_Template, 6, 7, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, VerticalMenuComponent_li_4_ul_4_li_1_a_2_Template, 6, 8, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, VerticalMenuComponent_li_4_ul_4_li_1_a_3_Template, 6, 8, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, VerticalMenuComponent_li_4_ul_4_li_1_ul_4_Template, 2, 1, "ul", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const menuSubItem_r21 = ctx.$implicit;
    const menuItem_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("level", ctx_r20.level + 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("parent", menuItem_r6.title)("hasSub", menuSubItem_r21.class.includes("has-sub") ? true : false)("path", menuSubItem_r21.path)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](10, _c5, menuSubItem_r21.class.includes("has-sub") ? true : false))("routerLinkActive", menuSubItem_r21.submenu.length != 0 ? "open" : "active");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", menuSubItem_r21.submenu.length > 0 && !menuSubItem_r21.isExternalLink);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", menuSubItem_r21.submenu.length === 0 && !menuSubItem_r21.isExternalLink);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", menuSubItem_r21.isExternalLink);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", menuSubItem_r21.submenu.length > 0);
  }
}
function VerticalMenuComponent_li_4_ul_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ul", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, VerticalMenuComponent_li_4_ul_4_li_1_Template, 5, 12, "li", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const menuItem_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", menuItem_r6.submenu);
  }
}
const _c6 = function () {
  return {
    exact: false
  };
};
function VerticalMenuComponent_li_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "li", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, VerticalMenuComponent_li_4_a_1_Template, 6, 7, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, VerticalMenuComponent_li_4_a_2_Template, 6, 8, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, VerticalMenuComponent_li_4_a_3_Template, 6, 10, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, VerticalMenuComponent_li_4_ul_4_Template, 2, 1, "ul", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const menuItem_r6 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("level", ctx_r1.level + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("parent", menuItem_r6.title)("path", menuItem_r6.path)("hasSub", menuItem_r6.class.includes("has-sub") ? true : false)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](11, _c5, menuItem_r6.class.includes("has-sub") ? true : false))("routerLinkActive", menuItem_r6.submenu.length != 0 ? "open" : "active")("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](13, _c6));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", menuItem_r6.submenu.length > 0 && !menuItem_r6.isExternalLink);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", menuItem_r6.submenu.length === 0 && !menuItem_r6.isExternalLink);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", menuItem_r6.isExternalLink);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", menuItem_r6.submenu.length > 0);
  }
}
class VerticalMenuComponent {
  constructor(router, translate, layoutService, configService, cdr, deviceService) {
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
      const evt = document.createEvent("HTMLEvents");
      evt.initEvent("resize", true, false);
      window.dispatchEvent(evt);
    };
    this.config = this.configService.templateConf;
    this.innerWidth = window.innerWidth;
    this.isTouchDevice();
  }
  ngOnInit() {
    //  this.menuItems = ROUTES;
  }
  ngAfterViewInit() {
    this.configSub = this.configService.templateConf$.subscribe(templateConf => {
      if (templateConf) {
        this.config = templateConf;
      }
      this.loadLayout();
      this.cdr.markForCheck();
    });
    this.layoutSub = this.layoutService.overlaySidebarToggle$.subscribe(collapse => {
      if (this.config.layout.menuPosition === "Side") {
        this.collapseSidebar = collapse;
      }
    });
  }
  onWindowResize(event) {
    if (this.resizeTimeout) {
      clearTimeout(this.resizeTimeout);
    }
    this.resizeTimeout = setTimeout((() => {
      this.innerWidth = event.target.innerWidth;
      this.loadLayout();
    }).bind(this), 500);
  }
  loadLayout() {
    if (this.config.layout.menuPosition === "Top") {
      // Horizontal Menu
      if (this.innerWidth < 1200) {// Screen size < 1200
        //this.menuItems = HROUTES;
      }
    } else if (this.config.layout.menuPosition === "Side") {// Vertical Menu{
      //  this.menuItems = ROUTES;
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
  toggleSidebar() {
    let conf = this.config;
    conf.layout.sidebar.collapsed = !this.config.layout.sidebar.collapsed;
    this.configService.applyTemplateConfigChange({
      layout: conf.layout
    });
    setTimeout(() => {
      this.fireRefreshEventOnWindow();
    }, 300);
  }
  CloseSidebar() {
    this.layoutService.toggleSidebarSmallScreen(false);
  }
  isTouchDevice() {
    const isMobile = this.deviceService.isMobile();
    const isTablet = this.deviceService.isTablet();
    if (isMobile || isTablet) {
      this.perfectScrollbarEnable = false;
    } else {
      this.perfectScrollbarEnable = true;
    }
  }
  ngOnDestroy() {
    if (this.layoutSub) {
      this.layoutSub.unsubscribe();
    }
    if (this.configSub) {
      this.configSub.unsubscribe();
    }
  }
  static #_ = this.ɵfac = function VerticalMenuComponent_Factory(t) {
    return new (t || VerticalMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_layout_service__WEBPACK_IMPORTED_MODULE_4__.LayoutService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_config_service__WEBPACK_IMPORTED_MODULE_5__.ConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](ngx_device_detector__WEBPACK_IMPORTED_MODULE_9__.DeviceDetectorService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: VerticalMenuComponent,
    selectors: [["app-sidebar"]],
    viewQuery: function VerticalMenuComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c0, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.toggleIcon = _t.first);
      }
    },
    hostBindings: function VerticalMenuComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("resize", function VerticalMenuComponent_resize_HostBindingHandler($event) {
          return ctx.onWindowResize($event);
        }, false, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresolveWindow"]);
      }
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵStandaloneFeature"]],
    decls: 5,
    vars: 3,
    consts: [["class", "sidebar-header", 4, "ngIf"], [1, "sidebar-content", "main-menu-content", 3, "perfectScrollbar", "disabled"], [1, "nav-container"], ["appSidebarDropdown", "", 1, "navigation"], ["appSidebarlink", "", 3, "parent", "path", "level", "hasSub", "ngClass", "routerLinkActive", "routerLinkActiveOptions", 4, "ngFor", "ngForOf"], [1, "sidebar-header"], [1, "logo", "clearfix"], [1, "logo-text", "float-left", 3, "routerLink"], [1, "logo-img"], ["alt", "Apex logo", 3, "src"], [1, "text", "align-middle"], ["id", "sidebarToggle", "href", "javascript:;", 1, "nav-toggle", "d-none", "d-lg-none", "d-xl-block", 3, "click"], [1, "toggle-icon", 3, "ngClass"], ["toggleIcon", ""], ["id", "sidebarClose", "href", "javascript:;", 1, "nav-close", "d-block", "d-lg-block", "d-xl-none", 3, "click"], [1, "ft-x"], ["appSidebarlink", "", 3, "parent", "path", "level", "hasSub", "ngClass", "routerLinkActive", "routerLinkActiveOptions"], ["appSidebarAnchorToggle", "", 4, "ngIf"], ["appSidebarAnchorToggle", "", 3, "routerLink", 4, "ngIf"], ["target", "_blank", 3, "href", 4, "ngIf"], ["appSidebarDropdown", "", "class", "menu-content", 4, "ngIf"], ["appSidebarAnchorToggle", ""], [3, "ngClass"], [1, "menu-title"], [3, "ngClass", 4, "ngIf"], ["appSidebarAnchorToggle", "", 3, "routerLink"], ["target", "_blank", 3, "href"], ["appSidebarDropdown", "", 1, "menu-content"], ["appSidebarlink", "", 3, "parent", "hasSub", "path", "level", "ngClass", "routerLinkActive", 4, "ngFor", "ngForOf"], ["appSidebarlink", "", 3, "parent", "hasSub", "path", "level", "ngClass", "routerLinkActive"], ["target", "_blank", 3, "routerLink", 4, "ngIf"], ["target", "_blank", 3, "routerLink"], ["appSidebarlink", "", "routerLinkActive", "active", 3, "parent", "hasSub", "path", "level", "routerLinkActiveOptions", "ngClass", 4, "ngFor", "ngForOf"], ["appSidebarlink", "", "routerLinkActive", "active", 3, "parent", "hasSub", "path", "level", "routerLinkActiveOptions", "ngClass"], ["appSidebarAnchorToggle", "", 3, "routerLink", 4, "ngIf", "ngIfElse"], ["externalSubSubLinkBlock", ""]],
    template: function VerticalMenuComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, VerticalMenuComponent_div_0_Template, 12, 7, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, VerticalMenuComponent_li_4_Template, 5, 14, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (ctx.config == null ? null : ctx.config.layout.menuPosition) === "Side");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", !ctx.perfectScrollbarEnable);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.menuItems);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgClass, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_11__.PerfectScrollbarModule, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_11__.PerfectScrollbarDirective, _directives_sidebar_dropdown_directive__WEBPACK_IMPORTED_MODULE_3__.SidebarDropdownDirective, _directives_sidebar_link_directive__WEBPACK_IMPORTED_MODULE_2__.SidebarLinkDirective, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLinkActive, _directives_sidebar_anchor_toggle_directive__WEBPACK_IMPORTED_MODULE_1__.SidebarAnchorToggleDirective, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslatePipe],
    encapsulation: 2,
    data: {
      animation: _animations_custom_animations__WEBPACK_IMPORTED_MODULE_0__.customAnimations
    }
  });
}

/***/ }),

/***/ 4851:
/*!******************************************************************!*\
  !*** ./node_modules/@angular/animations/fesm2020/animations.mjs ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AUTO_STYLE": () => (/* binding */ AUTO_STYLE),
/* harmony export */   "AnimationBuilder": () => (/* binding */ AnimationBuilder),
/* harmony export */   "AnimationFactory": () => (/* binding */ AnimationFactory),
/* harmony export */   "NoopAnimationPlayer": () => (/* binding */ NoopAnimationPlayer),
/* harmony export */   "animate": () => (/* binding */ animate),
/* harmony export */   "animateChild": () => (/* binding */ animateChild),
/* harmony export */   "animation": () => (/* binding */ animation),
/* harmony export */   "group": () => (/* binding */ group),
/* harmony export */   "keyframes": () => (/* binding */ keyframes),
/* harmony export */   "query": () => (/* binding */ query),
/* harmony export */   "sequence": () => (/* binding */ sequence),
/* harmony export */   "stagger": () => (/* binding */ stagger),
/* harmony export */   "state": () => (/* binding */ state),
/* harmony export */   "style": () => (/* binding */ style),
/* harmony export */   "transition": () => (/* binding */ transition),
/* harmony export */   "trigger": () => (/* binding */ trigger),
/* harmony export */   "useAnimation": () => (/* binding */ useAnimation),
/* harmony export */   "ɵAnimationGroupPlayer": () => (/* binding */ AnimationGroupPlayer),
/* harmony export */   "ɵPRE_STYLE": () => (/* binding */ ɵPRE_STYLE)
/* harmony export */ });
/**
 * @license Angular v15.2.10
 * (c) 2010-2022 Google LLC. https://angular.io/
 * License: MIT
 */

/**
 * An injectable service that produces an animation sequence programmatically within an
 * Angular component or directive.
 * Provided by the `BrowserAnimationsModule` or `NoopAnimationsModule`.
 *
 * @usageNotes
 *
 * To use this service, add it to your component or directive as a dependency.
 * The service is instantiated along with your component.
 *
 * Apps do not typically need to create their own animation players, but if you
 * do need to, follow these steps:
 *
 * 1. Use the <code>[AnimationBuilder.build](api/animations/AnimationBuilder#build)()</code> method
 * to create a programmatic animation. The method returns an `AnimationFactory` instance.
 *
 * 2. Use the factory object to create an `AnimationPlayer` and attach it to a DOM element.
 *
 * 3. Use the player object to control the animation programmatically.
 *
 * For example:
 *
 * ```ts
 * // import the service from BrowserAnimationsModule
 * import {AnimationBuilder} from '@angular/animations';
 * // require the service as a dependency
 * class MyCmp {
 *   constructor(private _builder: AnimationBuilder) {}
 *
 *   makeAnimation(element: any) {
 *     // first define a reusable animation
 *     const myAnimation = this._builder.build([
 *       style({ width: 0 }),
 *       animate(1000, style({ width: '100px' }))
 *     ]);
 *
 *     // use the returned factory object to create a player
 *     const player = myAnimation.create(element);
 *
 *     player.play();
 *   }
 * }
 * ```
 *
 * @publicApi
 */
class AnimationBuilder {}
/**
 * A factory object returned from the
 * <code>[AnimationBuilder.build](api/animations/AnimationBuilder#build)()</code>
 * method.
 *
 * @publicApi
 */
class AnimationFactory {}

/**
 * Specifies automatic styling.
 *
 * @publicApi
 */
const AUTO_STYLE = '*';
/**
 * Creates a named animation trigger, containing a  list of [`state()`](api/animations/state)
 * and `transition()` entries to be evaluated when the expression
 * bound to the trigger changes.
 *
 * @param name An identifying string.
 * @param definitions  An animation definition object, containing an array of
 * [`state()`](api/animations/state) and `transition()` declarations.
 *
 * @return An object that encapsulates the trigger data.
 *
 * @usageNotes
 * Define an animation trigger in the `animations` section of `@Component` metadata.
 * In the template, reference the trigger by name and bind it to a trigger expression that
 * evaluates to a defined animation state, using the following format:
 *
 * `[@triggerName]="expression"`
 *
 * Animation trigger bindings convert all values to strings, and then match the
 * previous and current values against any linked transitions.
 * Booleans can be specified as `1` or `true` and `0` or `false`.
 *
 * ### Usage Example
 *
 * The following example creates an animation trigger reference based on the provided
 * name value.
 * The provided animation value is expected to be an array consisting of state and
 * transition declarations.
 *
 * ```typescript
 * @Component({
 *   selector: "my-component",
 *   templateUrl: "my-component-tpl.html",
 *   animations: [
 *     trigger("myAnimationTrigger", [
 *       state(...),
 *       state(...),
 *       transition(...),
 *       transition(...)
 *     ])
 *   ]
 * })
 * class MyComponent {
 *   myStatusExp = "something";
 * }
 * ```
 *
 * The template associated with this component makes use of the defined trigger
 * by binding to an element within its template code.
 *
 * ```html
 * <!-- somewhere inside of my-component-tpl.html -->
 * <div [@myAnimationTrigger]="myStatusExp">...</div>
 * ```
 *
 * ### Using an inline function
 * The `transition` animation method also supports reading an inline function which can decide
 * if its associated animation should be run.
 *
 * ```typescript
 * // this method is run each time the `myAnimationTrigger` trigger value changes.
 * function myInlineMatcherFn(fromState: string, toState: string, element: any, params: {[key:
 string]: any}): boolean {
 *   // notice that `element` and `params` are also available here
 *   return toState == 'yes-please-animate';
 * }
 *
 * @Component({
 *   selector: 'my-component',
 *   templateUrl: 'my-component-tpl.html',
 *   animations: [
 *     trigger('myAnimationTrigger', [
 *       transition(myInlineMatcherFn, [
 *         // the animation sequence code
 *       ]),
 *     ])
 *   ]
 * })
 * class MyComponent {
 *   myStatusExp = "yes-please-animate";
 * }
 * ```
 *
 * ### Disabling Animations
 * When true, the special animation control binding `@.disabled` binding prevents
 * all animations from rendering.
 * Place the  `@.disabled` binding on an element to disable
 * animations on the element itself, as well as any inner animation triggers
 * within the element.
 *
 * The following example shows how to use this feature:
 *
 * ```typescript
 * @Component({
 *   selector: 'my-component',
 *   template: `
 *     <div [@.disabled]="isDisabled">
 *       <div [@childAnimation]="exp"></div>
 *     </div>
 *   `,
 *   animations: [
 *     trigger("childAnimation", [
 *       // ...
 *     ])
 *   ]
 * })
 * class MyComponent {
 *   isDisabled = true;
 *   exp = '...';
 * }
 * ```
 *
 * When `@.disabled` is true, it prevents the `@childAnimation` trigger from animating,
 * along with any inner animations.
 *
 * ### Disable animations application-wide
 * When an area of the template is set to have animations disabled,
 * **all** inner components have their animations disabled as well.
 * This means that you can disable all animations for an app
 * by placing a host binding set on `@.disabled` on the topmost Angular component.
 *
 * ```typescript
 * import {Component, HostBinding} from '@angular/core';
 *
 * @Component({
 *   selector: 'app-component',
 *   templateUrl: 'app.component.html',
 * })
 * class AppComponent {
 *   @HostBinding('@.disabled')
 *   public animationsDisabled = true;
 * }
 * ```
 *
 * ### Overriding disablement of inner animations
 * Despite inner animations being disabled, a parent animation can `query()`
 * for inner elements located in disabled areas of the template and still animate
 * them if needed. This is also the case for when a sub animation is
 * queried by a parent and then later animated using `animateChild()`.
 *
 * ### Detecting when an animation is disabled
 * If a region of the DOM (or the entire application) has its animations disabled, the animation
 * trigger callbacks still fire, but for zero seconds. When the callback fires, it provides
 * an instance of an `AnimationEvent`. If animations are disabled,
 * the `.disabled` flag on the event is true.
 *
 * @publicApi
 */
function trigger(name, definitions) {
  return {
    type: 7 /* AnimationMetadataType.Trigger */,
    name,
    definitions,
    options: {}
  };
}
/**
 * Defines an animation step that combines styling information with timing information.
 *
 * @param timings Sets `AnimateTimings` for the parent animation.
 * A string in the format "duration [delay] [easing]".
 *  - Duration and delay are expressed as a number and optional time unit,
 * such as "1s" or "10ms" for one second and 10 milliseconds, respectively.
 * The default unit is milliseconds.
 *  - The easing value controls how the animation accelerates and decelerates
 * during its runtime. Value is one of  `ease`, `ease-in`, `ease-out`,
 * `ease-in-out`, or a `cubic-bezier()` function call.
 * If not supplied, no easing is applied.
 *
 * For example, the string "1s 100ms ease-out" specifies a duration of
 * 1000 milliseconds, and delay of 100 ms, and the "ease-out" easing style,
 * which decelerates near the end of the duration.
 * @param styles Sets AnimationStyles for the parent animation.
 * A function call to either `style()` or `keyframes()`
 * that returns a collection of CSS style entries to be applied to the parent animation.
 * When null, uses the styles from the destination state.
 * This is useful when describing an animation step that will complete an animation;
 * see "Animating to the final state" in `transitions()`.
 * @returns An object that encapsulates the animation step.
 *
 * @usageNotes
 * Call within an animation `sequence()`, `{@link animations/group group()}`, or
 * `transition()` call to specify an animation step
 * that applies given style data to the parent animation for a given amount of time.
 *
 * ### Syntax Examples
 * **Timing examples**
 *
 * The following examples show various `timings` specifications.
 * - `animate(500)` : Duration is 500 milliseconds.
 * - `animate("1s")` : Duration is 1000 milliseconds.
 * - `animate("100ms 0.5s")` : Duration is 100 milliseconds, delay is 500 milliseconds.
 * - `animate("5s ease-in")` : Duration is 5000 milliseconds, easing in.
 * - `animate("5s 10ms cubic-bezier(.17,.67,.88,.1)")` : Duration is 5000 milliseconds, delay is 10
 * milliseconds, easing according to a bezier curve.
 *
 * **Style examples**
 *
 * The following example calls `style()` to set a single CSS style.
 * ```typescript
 * animate(500, style({ background: "red" }))
 * ```
 * The following example calls `keyframes()` to set a CSS style
 * to different values for successive keyframes.
 * ```typescript
 * animate(500, keyframes(
 *  [
 *   style({ background: "blue" }),
 *   style({ background: "red" })
 *  ])
 * ```
 *
 * @publicApi
 */
function animate(timings, styles = null) {
  return {
    type: 4 /* AnimationMetadataType.Animate */,
    styles,
    timings
  };
}
/**
 * @description Defines a list of animation steps to be run in parallel.
 *
 * @param steps An array of animation step objects.
 * - When steps are defined by `style()` or `animate()`
 * function calls, each call within the group is executed instantly.
 * - To specify offset styles to be applied at a later time, define steps with
 * `keyframes()`, or use `animate()` calls with a delay value.
 * For example:
 *
 * ```typescript
 * group([
 *   animate("1s", style({ background: "black" })),
 *   animate("2s", style({ color: "white" }))
 * ])
 * ```
 *
 * @param options An options object containing a delay and
 * developer-defined parameters that provide styling defaults and
 * can be overridden on invocation.
 *
 * @return An object that encapsulates the group data.
 *
 * @usageNotes
 * Grouped animations are useful when a series of styles must be
 * animated at different starting times and closed off at different ending times.
 *
 * When called within a `sequence()` or a
 * `transition()` call, does not continue to the next
 * instruction until all of the inner animation steps have completed.
 *
 * @publicApi
 */
function group(steps, options = null) {
  return {
    type: 3 /* AnimationMetadataType.Group */,
    steps,
    options
  };
}
/**
 * Defines a list of animation steps to be run sequentially, one by one.
 *
 * @param steps An array of animation step objects.
 * - Steps defined by `style()` calls apply the styling data immediately.
 * - Steps defined by `animate()` calls apply the styling data over time
 *   as specified by the timing data.
 *
 * ```typescript
 * sequence([
 *   style({ opacity: 0 }),
 *   animate("1s", style({ opacity: 1 }))
 * ])
 * ```
 *
 * @param options An options object containing a delay and
 * developer-defined parameters that provide styling defaults and
 * can be overridden on invocation.
 *
 * @return An object that encapsulates the sequence data.
 *
 * @usageNotes
 * When you pass an array of steps to a
 * `transition()` call, the steps run sequentially by default.
 * Compare this to the `{@link animations/group group()}` call, which runs animation steps in
 *parallel.
 *
 * When a sequence is used within a `{@link animations/group group()}` or a `transition()` call,
 * execution continues to the next instruction only after each of the inner animation
 * steps have completed.
 *
 * @publicApi
 **/
function sequence(steps, options = null) {
  return {
    type: 2 /* AnimationMetadataType.Sequence */,
    steps,
    options
  };
}
/**
 * Declares a key/value object containing CSS properties/styles that
 * can then be used for an animation [`state`](api/animations/state), within an animation
 *`sequence`, or as styling data for calls to `animate()` and `keyframes()`.
 *
 * @param tokens A set of CSS styles or HTML styles associated with an animation state.
 * The value can be any of the following:
 * - A key-value style pair associating a CSS property with a value.
 * - An array of key-value style pairs.
 * - An asterisk (*), to use auto-styling, where styles are derived from the element
 * being animated and applied to the animation when it starts.
 *
 * Auto-styling can be used to define a state that depends on layout or other
 * environmental factors.
 *
 * @return An object that encapsulates the style data.
 *
 * @usageNotes
 * The following examples create animation styles that collect a set of
 * CSS property values:
 *
 * ```typescript
 * // string values for CSS properties
 * style({ background: "red", color: "blue" })
 *
 * // numerical pixel values
 * style({ width: 100, height: 0 })
 * ```
 *
 * The following example uses auto-styling to allow an element to animate from
 * a height of 0 up to its full height:
 *
 * ```
 * style({ height: 0 }),
 * animate("1s", style({ height: "*" }))
 * ```
 *
 * @publicApi
 **/
function style(tokens) {
  return {
    type: 6 /* AnimationMetadataType.Style */,
    styles: tokens,
    offset: null
  };
}
/**
 * Declares an animation state within a trigger attached to an element.
 *
 * @param name One or more names for the defined state in a comma-separated string.
 * The following reserved state names can be supplied to define a style for specific use
 * cases:
 *
 * - `void` You can associate styles with this name to be used when
 * the element is detached from the application. For example, when an `ngIf` evaluates
 * to false, the state of the associated element is void.
 *  - `*` (asterisk) Indicates the default state. You can associate styles with this name
 * to be used as the fallback when the state that is being animated is not declared
 * within the trigger.
 *
 * @param styles A set of CSS styles associated with this state, created using the
 * `style()` function.
 * This set of styles persists on the element once the state has been reached.
 * @param options Parameters that can be passed to the state when it is invoked.
 * 0 or more key-value pairs.
 * @return An object that encapsulates the new state data.
 *
 * @usageNotes
 * Use the `trigger()` function to register states to an animation trigger.
 * Use the `transition()` function to animate between states.
 * When a state is active within a component, its associated styles persist on the element,
 * even when the animation ends.
 *
 * @publicApi
 **/
function state(name, styles, options) {
  return {
    type: 0 /* AnimationMetadataType.State */,
    name,
    styles,
    options
  };
}
/**
 * Defines a set of animation styles, associating each style with an optional `offset` value.
 *
 * @param steps A set of animation styles with optional offset data.
 * The optional `offset` value for a style specifies a percentage of the total animation
 * time at which that style is applied.
 * @returns An object that encapsulates the keyframes data.
 *
 * @usageNotes
 * Use with the `animate()` call. Instead of applying animations
 * from the current state
 * to the destination state, keyframes describe how each style entry is applied and at what point
 * within the animation arc.
 * Compare [CSS Keyframe Animations](https://www.w3schools.com/css/css3_animations.asp).
 *
 * ### Usage
 *
 * In the following example, the offset values describe
 * when each `backgroundColor` value is applied. The color is red at the start, and changes to
 * blue when 20% of the total time has elapsed.
 *
 * ```typescript
 * // the provided offset values
 * animate("5s", keyframes([
 *   style({ backgroundColor: "red", offset: 0 }),
 *   style({ backgroundColor: "blue", offset: 0.2 }),
 *   style({ backgroundColor: "orange", offset: 0.3 }),
 *   style({ backgroundColor: "black", offset: 1 })
 * ]))
 * ```
 *
 * If there are no `offset` values specified in the style entries, the offsets
 * are calculated automatically.
 *
 * ```typescript
 * animate("5s", keyframes([
 *   style({ backgroundColor: "red" }) // offset = 0
 *   style({ backgroundColor: "blue" }) // offset = 0.33
 *   style({ backgroundColor: "orange" }) // offset = 0.66
 *   style({ backgroundColor: "black" }) // offset = 1
 * ]))
 *```

 * @publicApi
 */
function keyframes(steps) {
  return {
    type: 5 /* AnimationMetadataType.Keyframes */,
    steps
  };
}
/**
 * Declares an animation transition which is played when a certain specified condition is met.
 *
 * @param stateChangeExpr A string with a specific format or a function that specifies when the
 * animation transition should occur (see [State Change Expression](#state-change-expression)).
 *
 * @param steps One or more animation objects that represent the animation's instructions.
 *
 * @param options An options object that can be used to specify a delay for the animation or provide
 * custom parameters for it.
 *
 * @returns An object that encapsulates the transition data.
 *
 * @usageNotes
 *
 * ### State Change Expression
 *
 * The State Change Expression instructs Angular when to run the transition's animations, it can
 *either be
 *  - a string with a specific syntax
 *  - or a function that compares the previous and current state (value of the expression bound to
 *    the element's trigger) and returns `true` if the transition should occur or `false` otherwise
 *
 * The string format can be:
 *  - `fromState => toState`, which indicates that the transition's animations should occur then the
 *    expression bound to the trigger's element goes from `fromState` to `toState`
 *
 *    _Example:_
 *      ```typescript
 *        transition('open => closed', animate('.5s ease-out', style({ height: 0 }) ))
 *      ```
 *
 *  - `fromState <=> toState`, which indicates that the transition's animations should occur then
 *    the expression bound to the trigger's element goes from `fromState` to `toState` or vice versa
 *
 *    _Example:_
 *      ```typescript
 *        transition('enabled <=> disabled', animate('1s cubic-bezier(0.8,0.3,0,1)'))
 *      ```
 *
 *  - `:enter`/`:leave`, which indicates that the transition's animations should occur when the
 *    element enters or exists the DOM
 *
 *    _Example:_
 *      ```typescript
 *        transition(':enter', [
 *          style({ opacity: 0 }),
 *          animate('500ms', style({ opacity: 1 }))
 *        ])
 *      ```
 *
 *  - `:increment`/`:decrement`, which indicates that the transition's animations should occur when
 *    the numerical expression bound to the trigger's element has increased in value or decreased
 *
 *    _Example:_
 *      ```typescript
 *        transition(':increment', query('@counter', animateChild()))
 *      ```
 *
 *  - a sequence of any of the above divided by commas, which indicates that transition's animations
 *    should occur whenever one of the state change expressions matches
 *
 *    _Example:_
 *      ```typescript
 *        transition(':increment, * => enabled, :enter', animate('1s ease', keyframes([
 *          style({ transform: 'scale(1)', offset: 0}),
 *          style({ transform: 'scale(1.1)', offset: 0.7}),
 *          style({ transform: 'scale(1)', offset: 1})
 *        ]))),
 *      ```
 *
 * Also note that in such context:
 *  - `void` can be used to indicate the absence of the element
 *  - asterisks can be used as wildcards that match any state
 *  - (as a consequence of the above, `void => *` is equivalent to `:enter` and `* => void` is
 *    equivalent to `:leave`)
 *  - `true` and `false` also match expression values of `1` and `0` respectively (but do not match
 *    _truthy_ and _falsy_ values)
 *
 * <div class="alert is-helpful">
 *
 *  Be careful about entering end leaving elements as their transitions present a common
 *  pitfall for developers.
 *
 *  Note that when an element with a trigger enters the DOM its `:enter` transition always
 *  gets executed, but its `:leave` transition will not be executed if the element is removed
 *  alongside its parent (as it will be removed "without warning" before its transition has
 *  a chance to be executed, the only way that such transition can occur is if the element
 *  is exiting the DOM on its own).
 *
 *
 * </div>
 *
 * ### Animating to a Final State
 *
 * If the final step in a transition is a call to `animate()` that uses a timing value
 * with no `style` data, that step is automatically considered the final animation arc,
 * for the element to reach the final state, in such case Angular automatically adds or removes
 * CSS styles to ensure that the element is in the correct final state.
 *
 *
 * ### Usage Examples
 *
 *  - Transition animations applied based on
 *    the trigger's expression value
 *
 *   ```HTML
 *   <div [@myAnimationTrigger]="myStatusExp">
 *    ...
 *   </div>
 *   ```
 *
 *   ```typescript
 *   trigger("myAnimationTrigger", [
 *     ..., // states
 *     transition("on => off, open => closed", animate(500)),
 *     transition("* <=> error", query('.indicator', animateChild()))
 *   ])
 *   ```
 *
 *  - Transition animations applied based on custom logic dependent
 *    on the trigger's expression value and provided parameters
 *
 *    ```HTML
 *    <div [@myAnimationTrigger]="{
 *     value: stepName,
 *     params: { target: currentTarget }
 *    }">
 *     ...
 *    </div>
 *    ```
 *
 *    ```typescript
 *    trigger("myAnimationTrigger", [
 *      ..., // states
 *      transition(
 *        (fromState, toState, _element, params) =>
 *          ['firststep', 'laststep'].includes(fromState.toLowerCase())
 *          && toState === params?.['target'],
 *        animate('1s')
 *      )
 *    ])
 *    ```
 *
 * @publicApi
 **/
function transition(stateChangeExpr, steps, options = null) {
  return {
    type: 1 /* AnimationMetadataType.Transition */,
    expr: stateChangeExpr,
    animation: steps,
    options
  };
}
/**
 * Produces a reusable animation that can be invoked in another animation or sequence,
 * by calling the `useAnimation()` function.
 *
 * @param steps One or more animation objects, as returned by the `animate()`
 * or `sequence()` function, that form a transformation from one state to another.
 * A sequence is used by default when you pass an array.
 * @param options An options object that can contain a delay value for the start of the
 * animation, and additional developer-defined parameters.
 * Provided values for additional parameters are used as defaults,
 * and override values can be passed to the caller on invocation.
 * @returns An object that encapsulates the animation data.
 *
 * @usageNotes
 * The following example defines a reusable animation, providing some default parameter
 * values.
 *
 * ```typescript
 * var fadeAnimation = animation([
 *   style({ opacity: '{{ start }}' }),
 *   animate('{{ time }}',
 *   style({ opacity: '{{ end }}'}))
 *   ],
 *   { params: { time: '1000ms', start: 0, end: 1 }});
 * ```
 *
 * The following invokes the defined animation with a call to `useAnimation()`,
 * passing in override parameter values.
 *
 * ```js
 * useAnimation(fadeAnimation, {
 *   params: {
 *     time: '2s',
 *     start: 1,
 *     end: 0
 *   }
 * })
 * ```
 *
 * If any of the passed-in parameter values are missing from this call,
 * the default values are used. If one or more parameter values are missing before a step is
 * animated, `useAnimation()` throws an error.
 *
 * @publicApi
 */
function animation(steps, options = null) {
  return {
    type: 8 /* AnimationMetadataType.Reference */,
    animation: steps,
    options
  };
}
/**
 * Executes a queried inner animation element within an animation sequence.
 *
 * @param options An options object that can contain a delay value for the start of the
 * animation, and additional override values for developer-defined parameters.
 * @return An object that encapsulates the child animation data.
 *
 * @usageNotes
 * Each time an animation is triggered in Angular, the parent animation
 * has priority and any child animations are blocked. In order
 * for a child animation to run, the parent animation must query each of the elements
 * containing child animations, and run them using this function.
 *
 * Note that this feature is designed to be used with `query()` and it will only work
 * with animations that are assigned using the Angular animation library. CSS keyframes
 * and transitions are not handled by this API.
 *
 * @publicApi
 */
function animateChild(options = null) {
  return {
    type: 9 /* AnimationMetadataType.AnimateChild */,
    options
  };
}
/**
 * Starts a reusable animation that is created using the `animation()` function.
 *
 * @param animation The reusable animation to start.
 * @param options An options object that can contain a delay value for the start of
 * the animation, and additional override values for developer-defined parameters.
 * @return An object that contains the animation parameters.
 *
 * @publicApi
 */
function useAnimation(animation, options = null) {
  return {
    type: 10 /* AnimationMetadataType.AnimateRef */,
    animation,
    options
  };
}
/**
 * Finds one or more inner elements within the current element that is
 * being animated within a sequence. Use with `animate()`.
 *
 * @param selector The element to query, or a set of elements that contain Angular-specific
 * characteristics, specified with one or more of the following tokens.
 *  - `query(":enter")` or `query(":leave")` : Query for newly inserted/removed elements (not
 *     all elements can be queried via these tokens, see
 *     [Entering and Leaving Elements](#entering-and-leaving-elements))
 *  - `query(":animating")` : Query all currently animating elements.
 *  - `query("@triggerName")` : Query elements that contain an animation trigger.
 *  - `query("@*")` : Query all elements that contain an animation triggers.
 *  - `query(":self")` : Include the current element into the animation sequence.
 *
 * @param animation One or more animation steps to apply to the queried element or elements.
 * An array is treated as an animation sequence.
 * @param options An options object. Use the 'limit' field to limit the total number of
 * items to collect.
 * @return An object that encapsulates the query data.
 *
 * @usageNotes
 *
 * ### Multiple Tokens
 *
 * Tokens can be merged into a combined query selector string. For example:
 *
 * ```typescript
 *  query(':self, .record:enter, .record:leave, @subTrigger', [...])
 * ```
 *
 * The `query()` function collects multiple elements and works internally by using
 * `element.querySelectorAll`. Use the `limit` field of an options object to limit
 * the total number of items to be collected. For example:
 *
 * ```js
 * query('div', [
 *   animate(...),
 *   animate(...)
 * ], { limit: 1 })
 * ```
 *
 * By default, throws an error when zero items are found. Set the
 * `optional` flag to ignore this error. For example:
 *
 * ```js
 * query('.some-element-that-may-not-be-there', [
 *   animate(...),
 *   animate(...)
 * ], { optional: true })
 * ```
 *
 * ### Entering and Leaving Elements
 *
 * Not all elements can be queried via the `:enter` and `:leave` tokens, the only ones
 * that can are those that Angular assumes can enter/leave based on their own logic
 * (if their insertion/removal is simply a consequence of that of their parent they
 * should be queried via a different token in their parent's `:enter`/`:leave` transitions).
 *
 * The only elements Angular assumes can enter/leave based on their own logic (thus the only
 * ones that can be queried via the `:enter` and `:leave` tokens) are:
 *  - Those inserted dynamically (via `ViewContainerRef`)
 *  - Those that have a structural directive (which, under the hood, are a subset of the above ones)
 *
 * <div class="alert is-helpful">
 *
 *  Note that elements will be successfully queried via `:enter`/`:leave` even if their
 *  insertion/removal is not done manually via `ViewContainerRef`or caused by their structural
 *  directive (e.g. they enter/exit alongside their parent).
 *
 * </div>
 *
 * <div class="alert is-important">
 *
 *  There is an exception to what previously mentioned, besides elements entering/leaving based on
 *  their own logic, elements with an animation trigger can always be queried via `:leave` when
 * their parent is also leaving.
 *
 * </div>
 *
 * ### Usage Example
 *
 * The following example queries for inner elements and animates them
 * individually using `animate()`.
 *
 * ```typescript
 * @Component({
 *   selector: 'inner',
 *   template: `
 *     <div [@queryAnimation]="exp">
 *       <h1>Title</h1>
 *       <div class="content">
 *         Blah blah blah
 *       </div>
 *     </div>
 *   `,
 *   animations: [
 *    trigger('queryAnimation', [
 *      transition('* => goAnimate', [
 *        // hide the inner elements
 *        query('h1', style({ opacity: 0 })),
 *        query('.content', style({ opacity: 0 })),
 *
 *        // animate the inner elements in, one by one
 *        query('h1', animate(1000, style({ opacity: 1 }))),
 *        query('.content', animate(1000, style({ opacity: 1 }))),
 *      ])
 *    ])
 *  ]
 * })
 * class Cmp {
 *   exp = '';
 *
 *   goAnimate() {
 *     this.exp = 'goAnimate';
 *   }
 * }
 * ```
 *
 * @publicApi
 */
function query(selector, animation, options = null) {
  return {
    type: 11 /* AnimationMetadataType.Query */,
    selector,
    animation,
    options
  };
}
/**
 * Use within an animation `query()` call to issue a timing gap after
 * each queried item is animated.
 *
 * @param timings A delay value.
 * @param animation One ore more animation steps.
 * @returns An object that encapsulates the stagger data.
 *
 * @usageNotes
 * In the following example, a container element wraps a list of items stamped out
 * by an `ngFor`. The container element contains an animation trigger that will later be set
 * to query for each of the inner items.
 *
 * Each time items are added, the opacity fade-in animation runs,
 * and each removed item is faded out.
 * When either of these animations occur, the stagger effect is
 * applied after each item's animation is started.
 *
 * ```html
 * <!-- list.component.html -->
 * <button (click)="toggle()">Show / Hide Items</button>
 * <hr />
 * <div [@listAnimation]="items.length">
 *   <div *ngFor="let item of items">
 *     {{ item }}
 *   </div>
 * </div>
 * ```
 *
 * Here is the component code:
 *
 * ```typescript
 * import {trigger, transition, style, animate, query, stagger} from '@angular/animations';
 * @Component({
 *   templateUrl: 'list.component.html',
 *   animations: [
 *     trigger('listAnimation', [
 *     ...
 *     ])
 *   ]
 * })
 * class ListComponent {
 *   items = [];
 *
 *   showItems() {
 *     this.items = [0,1,2,3,4];
 *   }
 *
 *   hideItems() {
 *     this.items = [];
 *   }
 *
 *   toggle() {
 *     this.items.length ? this.hideItems() : this.showItems();
 *    }
 *  }
 * ```
 *
 * Here is the animation trigger code:
 *
 * ```typescript
 * trigger('listAnimation', [
 *   transition('* => *', [ // each time the binding value changes
 *     query(':leave', [
 *       stagger(100, [
 *         animate('0.5s', style({ opacity: 0 }))
 *       ])
 *     ]),
 *     query(':enter', [
 *       style({ opacity: 0 }),
 *       stagger(100, [
 *         animate('0.5s', style({ opacity: 1 }))
 *       ])
 *     ])
 *   ])
 * ])
 * ```
 *
 * @publicApi
 */
function stagger(timings, animation) {
  return {
    type: 12 /* AnimationMetadataType.Stagger */,
    timings,
    animation
  };
}
function scheduleMicroTask(cb) {
  Promise.resolve().then(cb);
}

/**
 * An empty programmatic controller for reusable animations.
 * Used internally when animations are disabled, to avoid
 * checking for the null case when an animation player is expected.
 *
 * @see `animate()`
 * @see `AnimationPlayer`
 * @see `GroupPlayer`
 *
 * @publicApi
 */
class NoopAnimationPlayer {
  constructor(duration = 0, delay = 0) {
    this._onDoneFns = [];
    this._onStartFns = [];
    this._onDestroyFns = [];
    this._originalOnDoneFns = [];
    this._originalOnStartFns = [];
    this._started = false;
    this._destroyed = false;
    this._finished = false;
    this._position = 0;
    this.parentPlayer = null;
    this.totalTime = duration + delay;
  }
  _onFinish() {
    if (!this._finished) {
      this._finished = true;
      this._onDoneFns.forEach(fn => fn());
      this._onDoneFns = [];
    }
  }
  onStart(fn) {
    this._originalOnStartFns.push(fn);
    this._onStartFns.push(fn);
  }
  onDone(fn) {
    this._originalOnDoneFns.push(fn);
    this._onDoneFns.push(fn);
  }
  onDestroy(fn) {
    this._onDestroyFns.push(fn);
  }
  hasStarted() {
    return this._started;
  }
  init() {}
  play() {
    if (!this.hasStarted()) {
      this._onStart();
      this.triggerMicrotask();
    }
    this._started = true;
  }
  /** @internal */
  triggerMicrotask() {
    scheduleMicroTask(() => this._onFinish());
  }
  _onStart() {
    this._onStartFns.forEach(fn => fn());
    this._onStartFns = [];
  }
  pause() {}
  restart() {}
  finish() {
    this._onFinish();
  }
  destroy() {
    if (!this._destroyed) {
      this._destroyed = true;
      if (!this.hasStarted()) {
        this._onStart();
      }
      this.finish();
      this._onDestroyFns.forEach(fn => fn());
      this._onDestroyFns = [];
    }
  }
  reset() {
    this._started = false;
    this._finished = false;
    this._onStartFns = this._originalOnStartFns;
    this._onDoneFns = this._originalOnDoneFns;
  }
  setPosition(position) {
    this._position = this.totalTime ? position * this.totalTime : 1;
  }
  getPosition() {
    return this.totalTime ? this._position / this.totalTime : 1;
  }
  /** @internal */
  triggerCallback(phaseName) {
    const methods = phaseName == 'start' ? this._onStartFns : this._onDoneFns;
    methods.forEach(fn => fn());
    methods.length = 0;
  }
}

/**
 * A programmatic controller for a group of reusable animations.
 * Used internally to control animations.
 *
 * @see `AnimationPlayer`
 * @see `{@link animations/group group()}`
 *
 */
class AnimationGroupPlayer {
  constructor(_players) {
    this._onDoneFns = [];
    this._onStartFns = [];
    this._finished = false;
    this._started = false;
    this._destroyed = false;
    this._onDestroyFns = [];
    this.parentPlayer = null;
    this.totalTime = 0;
    this.players = _players;
    let doneCount = 0;
    let destroyCount = 0;
    let startCount = 0;
    const total = this.players.length;
    if (total == 0) {
      scheduleMicroTask(() => this._onFinish());
    } else {
      this.players.forEach(player => {
        player.onDone(() => {
          if (++doneCount == total) {
            this._onFinish();
          }
        });
        player.onDestroy(() => {
          if (++destroyCount == total) {
            this._onDestroy();
          }
        });
        player.onStart(() => {
          if (++startCount == total) {
            this._onStart();
          }
        });
      });
    }
    this.totalTime = this.players.reduce((time, player) => Math.max(time, player.totalTime), 0);
  }
  _onFinish() {
    if (!this._finished) {
      this._finished = true;
      this._onDoneFns.forEach(fn => fn());
      this._onDoneFns = [];
    }
  }
  init() {
    this.players.forEach(player => player.init());
  }
  onStart(fn) {
    this._onStartFns.push(fn);
  }
  _onStart() {
    if (!this.hasStarted()) {
      this._started = true;
      this._onStartFns.forEach(fn => fn());
      this._onStartFns = [];
    }
  }
  onDone(fn) {
    this._onDoneFns.push(fn);
  }
  onDestroy(fn) {
    this._onDestroyFns.push(fn);
  }
  hasStarted() {
    return this._started;
  }
  play() {
    if (!this.parentPlayer) {
      this.init();
    }
    this._onStart();
    this.players.forEach(player => player.play());
  }
  pause() {
    this.players.forEach(player => player.pause());
  }
  restart() {
    this.players.forEach(player => player.restart());
  }
  finish() {
    this._onFinish();
    this.players.forEach(player => player.finish());
  }
  destroy() {
    this._onDestroy();
  }
  _onDestroy() {
    if (!this._destroyed) {
      this._destroyed = true;
      this._onFinish();
      this.players.forEach(player => player.destroy());
      this._onDestroyFns.forEach(fn => fn());
      this._onDestroyFns = [];
    }
  }
  reset() {
    this.players.forEach(player => player.reset());
    this._destroyed = false;
    this._finished = false;
    this._started = false;
  }
  setPosition(p) {
    const timeAtPosition = p * this.totalTime;
    this.players.forEach(player => {
      const position = player.totalTime ? Math.min(1, timeAtPosition / player.totalTime) : 1;
      player.setPosition(position);
    });
  }
  getPosition() {
    const longestPlayer = this.players.reduce((longestSoFar, player) => {
      const newPlayerIsLongest = longestSoFar === null || player.totalTime > longestSoFar.totalTime;
      return newPlayerIsLongest ? player : longestSoFar;
    }, null);
    return longestPlayer != null ? longestPlayer.getPosition() : 0;
  }
  beforeDestroy() {
    this.players.forEach(player => {
      if (player.beforeDestroy) {
        player.beforeDestroy();
      }
    });
  }
  /** @internal */
  triggerCallback(phaseName) {
    const methods = phaseName == 'start' ? this._onStartFns : this._onDoneFns;
    methods.forEach(fn => fn());
    methods.length = 0;
  }
}
const ɵPRE_STYLE = '!';

/**
 * @module
 * @description
 * Entry point for all animation APIs of the animation package.
 */

/**
 * @module
 * @description
 * Entry point for all public APIs of this package.
 */

// This file is not used to build this module. It is only used during editing

/**
 * Generated bundle index. Do not edit.
 */



/***/ })

}]);
//# sourceMappingURL=src_app_layouts_full_full-layout_component_ts.js.map