(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pageQuery", function() { return pageQuery; });
/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32);
/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_regexp_constructor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(157);
/* harmony import */ var core_js_modules_es6_regexp_constructor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_constructor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(154);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(165);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(171);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_Layout_Layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(160);
/* harmony import */ var _components_Grids__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(172);
/* harmony import */ var _components_SEO_seo__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(156);
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(194);
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_10__);












var BlogIndex =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_2___default()(BlogIndex, _React$Component);

  function BlogIndex() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = BlogIndex.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        _this$props$data = _this$props.data,
        data = _this$props$data === void 0 ? {} : _this$props$data,
        _this$props$location = _this$props.location,
        location = _this$props$location === void 0 ? {} : _this$props$location;
    var _data$site = data.site,
        site = _data$site === void 0 ? {} : _data$site,
        _data$allMarkdownRema = data.allMarkdownRemark,
        allMarkdownRemark = _data$allMarkdownRema === void 0 ? {} : _data$allMarkdownRema,
        _data$allNavigationJs = data.allNavigationJson,
        allNavigationJson = _data$allNavigationJs === void 0 ? {} : _data$allNavigationJs;
    var _location$pathname = location.pathname,
        pathname = _location$pathname === void 0 ? '' : _location$pathname;
    var siteMetadata = site.siteMetadata;
    var _allMarkdownRemark$ed = allMarkdownRemark.edges,
        posts = _allMarkdownRemark$ed === void 0 ? [] : _allMarkdownRemark$ed;
    var _allNavigationJson$ed = allNavigationJson.edges,
        navs = _allNavigationJson$ed === void 0 ? [] : _allNavigationJson$ed; // 得到相对路径

    var reg = new RegExp("^" + "");
    var rePathname = pathname.replace(reg, '');
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_Layout_Layout__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {
      pathname: rePathname,
      metadata: siteMetadata,
      navs: navs
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_SEO_seo__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"], {
      title: "All posts",
      keywords: ["blog", "gatsby", "javascript", "react"]
    }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: "fragment-list page-content"
    }, posts.map(function (_ref) {
      var node = _ref.node;
      var title = node.frontmatter.title || node.fields.slug;
      var date = dayjs__WEBPACK_IMPORTED_MODULE_6___default()(node.frontmatter.date).format('YYYY-MM-DD');
      var tags = node.frontmatter.tags || [];
      var category = node.frontmatter.category;
      var isDraft =  true && node.frontmatter.draft;
      return !isDraft && react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: "fragment",
        key: node.fields.slug
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: "title"
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_4__["Link"], {
        to: node.fields.slug
      }, title), node.frontmatter.draft && react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", null, "(\u8349\u7A3F)")), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: "content"
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_Grids__WEBPACK_IMPORTED_MODULE_8__[/* Row */ "b"], null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_Grids__WEBPACK_IMPORTED_MODULE_8__[/* Col */ "a"], {
        span: 4
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: "date-and-category"
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: "date"
      }, date), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: "category"
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_4__["Link"], {
        to: "/cats/" + (Object(lodash__WEBPACK_IMPORTED_MODULE_5__["kebabCase"])(category) || 'uncat') + "/"
      }, category || '未分类')))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_Grids__WEBPACK_IMPORTED_MODULE_8__[/* Col */ "a"], {
        span: 14
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: "excerpt",
        dangerouslySetInnerHTML: {
          __html: node.excerpt
        }
      })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_Grids__WEBPACK_IMPORTED_MODULE_8__[/* Col */ "a"], {
        span: 6
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: "tags"
      }, tags.map(function (tag, index) {
        return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
          className: "tag-item",
          key: tag + "-" + index
        }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_4__["Link"], {
          to: "/tags/" + Object(lodash__WEBPACK_IMPORTED_MODULE_5__["kebabCase"])(tag) + "/"
        }, tag));
      }))))));
    })));
  };

  return BlogIndex;
}(react__WEBPACK_IMPORTED_MODULE_3___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (BlogIndex);
var pageQuery = "1553659606";

/***/ }),

/***/ 194:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);
//# sourceMappingURL=component---src-pages-index-js-ee6f9588192f84c614bf.js.map