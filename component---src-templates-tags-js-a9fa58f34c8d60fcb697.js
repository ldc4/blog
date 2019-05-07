(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ 146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pageQuery", function() { return pageQuery; });
/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32);
/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_regexp_constructor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(157);
/* harmony import */ var core_js_modules_es6_regexp_constructor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_constructor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(73);
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(154);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(165);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(171);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_Layout_Layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(160);
/* harmony import */ var _components_Grids__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(172);
/* harmony import */ var _components_SEO_seo__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(156);
/* harmony import */ var _tags_less__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(191);
/* harmony import */ var _tags_less__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_tags_less__WEBPACK_IMPORTED_MODULE_11__);













var TagsTemplate =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_3___default()(TagsTemplate, _React$Component);

  function TagsTemplate() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = TagsTemplate.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        _this$props$data = _this$props.data,
        data = _this$props$data === void 0 ? {} : _this$props$data,
        _this$props$location = _this$props.location,
        location = _this$props$location === void 0 ? {} : _this$props$location,
        pageContext = _this$props.pageContext;
    var _data$site = data.site,
        site = _data$site === void 0 ? {} : _data$site,
        _data$tagMarkdownRema = data.tagMarkdownRemark,
        tagMarkdownRemark = _data$tagMarkdownRema === void 0 ? {} : _data$tagMarkdownRema,
        _data$allMarkdownRema = data.allMarkdownRemark,
        allMarkdownRemark = _data$allMarkdownRema === void 0 ? {} : _data$allMarkdownRema,
        _data$allNavigationJs = data.allNavigationJson,
        allNavigationJson = _data$allNavigationJs === void 0 ? {} : _data$allNavigationJs;
    var _location$pathname = location.pathname,
        pathname = _location$pathname === void 0 ? '' : _location$pathname;
    var tag = pageContext.tag;
    var siteMetadata = site.siteMetadata;
    var _allNavigationJson$ed = allNavigationJson.edges,
        navs = _allNavigationJson$ed === void 0 ? [] : _allNavigationJson$ed; // 特殊处理未标记

    var posts = [];

    if (tag) {
      posts = tagMarkdownRemark.edges || [];
    } else {
      var allPosts = allMarkdownRemark.edges || [];
      allPosts.forEach(function (post) {
        var tags = post.node.frontmatter.tags;

        if (!tags || tags.length === 0) {
          posts.push(post);
        }
      });
    } // 得到相对路径


    var reg = new RegExp("^" + "");
    var rePathname = pathname.replace(reg, '');
    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components_Layout_Layout__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], {
      pathname: rePathname,
      metadata: siteMetadata,
      navs: navs
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components_SEO_seo__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"], {
      title: "tag-" + tag,
      keywords: ["blog", "gatsby", "javascript", "react"]
    }), tag ? react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "fragment-header"
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "title"
    }, "\u6807\u7B7E"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "tag"
    }, tag)) : react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "fragment-header"
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "title"
    }, "\u672A\u6807\u8BB0")), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "fragment-list"
    }, posts.map(function (_ref) {
      var node = _ref.node;
      var title = node.frontmatter.title || node.fields.slug;
      var date = dayjs__WEBPACK_IMPORTED_MODULE_7___default()(node.frontmatter.date).format('YYYY-MM-DD');
      var tags = node.frontmatter.tags || [];
      var category = node.frontmatter.category;
      return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
        className: "fragment",
        key: node.fields.slug
      }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
        className: "title"
      }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_5__["Link"], {
        to: node.fields.slug
      }, title)), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
        className: "content"
      }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components_Grids__WEBPACK_IMPORTED_MODULE_9__[/* Row */ "b"], null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components_Grids__WEBPACK_IMPORTED_MODULE_9__[/* Col */ "a"], {
        span: 4
      }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
        className: "date-and-category"
      }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
        className: "date"
      }, date), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
        className: "category"
      }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_5__["Link"], {
        to: "/"
      }, category)))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components_Grids__WEBPACK_IMPORTED_MODULE_9__[/* Col */ "a"], {
        span: 14
      }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
        className: "excerpt",
        dangerouslySetInnerHTML: {
          __html: node.excerpt
        }
      })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components_Grids__WEBPACK_IMPORTED_MODULE_9__[/* Col */ "a"], {
        span: 6
      }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
        className: "tags"
      }, tags.map(function (tag, index) {
        return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
          className: "tag-item",
          key: tag + "-" + index
        }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_5__["Link"], {
          to: "/tags/" + Object(lodash__WEBPACK_IMPORTED_MODULE_6__["kebabCase"])(tag) + "/"
        }, tag));
      }))))));
    })));
  };

  return TagsTemplate;
}(react__WEBPACK_IMPORTED_MODULE_4___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (TagsTemplate);
var pageQuery = "3263241946";

/***/ }),

/***/ 191:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);
//# sourceMappingURL=component---src-templates-tags-js-a9fa58f34c8d60fcb697.js.map