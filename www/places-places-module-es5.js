function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["places-places-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/places/places.page.html":
  /*!*******************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/places/places.page.html ***!
    \*******************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPlacesPlacesPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Lugares</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-list>\r\n    <ion-item *ngFor=\"let place of places\" [routerLink]=\"['/places', place.id]\">\r\n      <ion-avatar slot=\"start\">\r\n        <img [src]=\"place.imageURL\" />\r\n      </ion-avatar>\r\n      {{place.tittle}}\r\n    </ion-item>\r\n  </ion-list>\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/places/places-routing.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/places/places-routing.module.ts ***!
    \*************************************************/

  /*! exports provided: PlacesPageRoutingModule */

  /***/
  function srcAppPlacesPlacesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PlacesPageRoutingModule", function () {
      return PlacesPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _places_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./places.page */
    "./src/app/places/places.page.ts");

    var routes = [{
      path: '',
      component: _places_page__WEBPACK_IMPORTED_MODULE_3__["PlacesPage"]
    }, {
      path: 'place-detail',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | place-detail-place-detail-module */
        "place-detail-place-detail-module").then(__webpack_require__.bind(null,
        /*! ./place-detail/place-detail.module */
        "./src/app/places/place-detail/place-detail.module.ts")).then(function (m) {
          return m.PlaceDetailPageModule;
        });
      }
    }];

    var PlacesPageRoutingModule = function PlacesPageRoutingModule() {
      _classCallCheck(this, PlacesPageRoutingModule);
    };

    PlacesPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], PlacesPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/places/places.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/places/places.module.ts ***!
    \*****************************************/

  /*! exports provided: PlacesPageModule */

  /***/
  function srcAppPlacesPlacesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PlacesPageModule", function () {
      return PlacesPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _places_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./places-routing.module */
    "./src/app/places/places-routing.module.ts");
    /* harmony import */


    var _places_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./places.page */
    "./src/app/places/places.page.ts");

    var PlacesPageModule = function PlacesPageModule() {
      _classCallCheck(this, PlacesPageModule);
    };

    PlacesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _places_routing_module__WEBPACK_IMPORTED_MODULE_5__["PlacesPageRoutingModule"]],
      declarations: [_places_page__WEBPACK_IMPORTED_MODULE_6__["PlacesPage"]]
    })], PlacesPageModule);
    /***/
  },

  /***/
  "./src/app/places/places.page.scss":
  /*!*****************************************!*\
    !*** ./src/app/places/places.page.scss ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppPlacesPlacesPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BsYWNlcy9wbGFjZXMucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/places/places.page.ts":
  /*!***************************************!*\
    !*** ./src/app/places/places.page.ts ***!
    \***************************************/

  /*! exports provided: PlacesPage */

  /***/
  function srcAppPlacesPlacesPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PlacesPage", function () {
      return PlacesPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var PlacesPage = /*#__PURE__*/function () {
      function PlacesPage() {
        _classCallCheck(this, PlacesPage);
      }

      _createClass(PlacesPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PlacesPage;
    }();

    PlacesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-places',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./places.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/places/places.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./places.page.scss */
      "./src/app/places/places.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], PlacesPage);
    /***/
  }
}]);
//# sourceMappingURL=places-places-module-es5.js.map