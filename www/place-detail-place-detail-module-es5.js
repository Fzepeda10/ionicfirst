function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["place-detail-place-detail-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/places/place-detail/place-detail.page.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/places/place-detail/place-detail.page.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPlacesPlaceDetailPlaceDetailPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>place-detail</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/places/place-detail/place-detail-routing.module.ts":
  /*!********************************************************************!*\
    !*** ./src/app/places/place-detail/place-detail-routing.module.ts ***!
    \********************************************************************/

  /*! exports provided: PlaceDetailPageRoutingModule */

  /***/
  function srcAppPlacesPlaceDetailPlaceDetailRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PlaceDetailPageRoutingModule", function () {
      return PlaceDetailPageRoutingModule;
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


    var _place_detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./place-detail.page */
    "./src/app/places/place-detail/place-detail.page.ts");

    var routes = [{
      path: '',
      component: _place_detail_page__WEBPACK_IMPORTED_MODULE_3__["PlaceDetailPage"]
    }];

    var PlaceDetailPageRoutingModule = function PlaceDetailPageRoutingModule() {
      _classCallCheck(this, PlaceDetailPageRoutingModule);
    };

    PlaceDetailPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], PlaceDetailPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/places/place-detail/place-detail.module.ts":
  /*!************************************************************!*\
    !*** ./src/app/places/place-detail/place-detail.module.ts ***!
    \************************************************************/

  /*! exports provided: PlaceDetailPageModule */

  /***/
  function srcAppPlacesPlaceDetailPlaceDetailModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PlaceDetailPageModule", function () {
      return PlaceDetailPageModule;
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


    var _place_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./place-detail-routing.module */
    "./src/app/places/place-detail/place-detail-routing.module.ts");
    /* harmony import */


    var _place_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./place-detail.page */
    "./src/app/places/place-detail/place-detail.page.ts");

    var PlaceDetailPageModule = function PlaceDetailPageModule() {
      _classCallCheck(this, PlaceDetailPageModule);
    };

    PlaceDetailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _place_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__["PlaceDetailPageRoutingModule"]],
      declarations: [_place_detail_page__WEBPACK_IMPORTED_MODULE_6__["PlaceDetailPage"]]
    })], PlaceDetailPageModule);
    /***/
  },

  /***/
  "./src/app/places/place-detail/place-detail.page.scss":
  /*!************************************************************!*\
    !*** ./src/app/places/place-detail/place-detail.page.scss ***!
    \************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPlacesPlaceDetailPlaceDetailPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BsYWNlcy9wbGFjZS1kZXRhaWwvcGxhY2UtZGV0YWlsLnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/places/place-detail/place-detail.page.ts":
  /*!**********************************************************!*\
    !*** ./src/app/places/place-detail/place-detail.page.ts ***!
    \**********************************************************/

  /*! exports provided: PlaceDetailPage */

  /***/
  function srcAppPlacesPlaceDetailPlaceDetailPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PlaceDetailPage", function () {
      return PlaceDetailPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var PlaceDetailPage = /*#__PURE__*/function () {
      function PlaceDetailPage() {
        _classCallCheck(this, PlaceDetailPage);
      }

      _createClass(PlaceDetailPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PlaceDetailPage;
    }();

    PlaceDetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-place-detail',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./place-detail.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/places/place-detail/place-detail.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./place-detail.page.scss */
      "./src/app/places/place-detail/place-detail.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], PlaceDetailPage);
    /***/
  }
}]);
//# sourceMappingURL=place-detail-place-detail-module-es5.js.map