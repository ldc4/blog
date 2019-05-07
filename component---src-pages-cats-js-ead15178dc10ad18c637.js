(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ 149:
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
/* harmony import */ var _components_Layout_Layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(160);
/* harmony import */ var _components_SEO_seo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(156);
/* harmony import */ var _cats_less__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(193);
/* harmony import */ var _cats_less__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_cats_less__WEBPACK_IMPORTED_MODULE_9__);











var CatsPage =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_3___default()(CatsPage, _React$Component);

  function CatsPage() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = CatsPage.prototype;

  _proto.getCatsHTML = function getCatsHTML(cats) {
    var catsHTML = [];
    cats.forEach(function (cat, index) {
      catsHTML.push(react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
        className: "cat",
        key: "col-" + index
      }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_5__["Link"], {
        to: "/cats/" + cat.catLink
      }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
        className: "cat-value"
      }, cat.catValue), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
        className: "cat-count"
      }, cat.catCount))));
    });
    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "cats-wrap page-content"
    }, catsHTML);
  };

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
    var cats = allMarkdownRemark.edges;
    var navs = allNavigationJson.edges; // 得到相对路径

    var reg = new RegExp("^" + "");
    var rePathname = pathname.replace(reg, '');
    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components_Layout_Layout__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {
      pathname: rePathname,
      metadata: siteMetadata,
      navs: navs
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components_SEO_seo__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], {
      title: "All cats",
      keywords: ["blog", "gatsby", "javascript", "react"]
    }), this.getCatsHTML(dealWithCats(cats)));
  };

  return CatsPage;
}(react__WEBPACK_IMPORTED_MODULE_4___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (CatsPage);
var pageQuery = "3981859618";
/**
将graphql查询的结果进行处理
原数据结果：
[
  {
    "node": {
      "frontmatter": {
        "category": "xxx"
      }
    }
  }
]
处理为：
[
  {
    "catValue": "xxx",
    "catLink": "xxx",
    "catCount": 1
  }
]
另外，进行一些边界处理
*/

function dealWithCats(arr) {
  // 将多个tag先拆分出来
  var result = [];
  var noCatCount = 0; // 统计没有cat的个数

  arr.forEach(function (item) {
    var _item$node$frontmatte = item.node.frontmatter,
        category = _item$node$frontmatte.category,
        draft = _item$node$frontmatte.draft;
    if (draft) return; // 屏蔽草稿

    if (category) {
      var index = Object(lodash__WEBPACK_IMPORTED_MODULE_6__["findIndex"])(result, function (node) {
        return node.catValue === category;
      });

      if (index >= 0) {
        result[index]['catCount']++;
      } else {
        result.push({
          catValue: category,
          catLink: Object(lodash__WEBPACK_IMPORTED_MODULE_6__["kebabCase"])(category),
          catCount: 1
        });
      }
    } else {
      noCatCount++;
    }
  });

  if (noCatCount > 0) {
    result.push({
      catValue: '未分类',
      catLink: 'uncat',
      catCount: noCatCount
    });
  }

  return result;
}

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "graphql", function() { return graphql; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaticQueryContext", function() { return StaticQueryContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaticQuery", function() { return StaticQuery; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gatsby_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(153);
/* harmony import */ var gatsby_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gatsby_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2___default.a; });
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withPrefix", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2__["withPrefix"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "navigate", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2__["navigate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "push", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2__["push"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "replace", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2__["replace"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "navigateTo", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2__["navigateTo"]; });

/* harmony import */ var _public_page_renderer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(155);
/* harmony import */ var _public_page_renderer__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_page_renderer__WEBPACK_IMPORTED_MODULE_3__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "PageRenderer", function() { return _public_page_renderer__WEBPACK_IMPORTED_MODULE_3___default.a; });
/* harmony import */ var _parse_path__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(33);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parsePath", function() { return _parse_path__WEBPACK_IMPORTED_MODULE_4__["a"]; });






var StaticQueryContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext({});

var StaticQuery = function StaticQuery(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StaticQueryContext.Consumer, null, function (staticQueryData) {
    if (props.data || staticQueryData[props.query] && staticQueryData[props.query].data) {
      return (props.render || props.children)(props.data ? props.data.data : staticQueryData[props.query].data);
    } else {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Loading (StaticQuery)");
    }
  });
};

StaticQuery.propTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  query: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  render: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};

function graphql() {
  throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls " + "are supposed to only be evaluated at compile time, and then compiled away,. " + "Unfortunately, something went wrong and the query was left in the compiled code.\n\n." + "Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.");
}



/***/ }),

/***/ 155:
/***/ (function(module, exports, __webpack_require__) {

var preferDefault = function preferDefault(m) {
  return m && m.default || m;
};

if (false) {} else if (true) {
  module.exports = preferDefault(__webpack_require__(158));
} else {}

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _public_static_d_1025518380_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(159);
var _public_static_d_1025518380_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(159, 1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(166);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(154);






function SEO(_ref) {
  var description = _ref.description,
      lang = _ref.lang,
      meta = _ref.meta,
      keywords = _ref.keywords,
      title = _ref.title;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_4__["StaticQuery"], {
    query: detailsQuery,
    render: function render(data) {
      var metaDescription = description || data.site.siteMetadata.description;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_3___default.a, {
        htmlAttributes: {
          lang: lang
        },
        title: title,
        titleTemplate: "%s | " + data.site.siteMetadata.title,
        meta: [{
          name: "description",
          content: metaDescription
        }, {
          property: "og:title",
          content: title
        }, {
          property: "og:description",
          content: metaDescription
        }, {
          property: "og:type",
          content: "website"
        }, {
          name: "twitter:card",
          content: "summary"
        }, {
          name: "twitter:creator",
          content: data.site.siteMetadata.author
        }, {
          name: "twitter:title",
          content: title
        }, {
          name: "twitter:description",
          content: metaDescription
        }].concat(keywords.length > 0 ? {
          name: "keywords",
          content: keywords.join(", ")
        } : []).concat(meta)
      });
    },
    data: _public_static_d_1025518380_json__WEBPACK_IMPORTED_MODULE_0__
  });
}

SEO.defaultProps = {
  lang: "en",
  meta: [],
  keywords: []
};
SEO.propTypes = {
  description: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  lang: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  meta: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array,
  keywords: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string),
  title: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired
};
/* harmony default export */ __webpack_exports__["a"] = (SEO);
var detailsQuery = "1025518380";

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34);
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _page_renderer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(51);
/* harmony import */ var _loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2);






var ProdPageRenderer = function ProdPageRenderer(_ref) {
  var location = _ref.location;
  var pageResources = _loader__WEBPACK_IMPORTED_MODULE_4__["default"].getResourcesForPathnameSync(location.pathname);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_page_renderer__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], Object.assign({
    location: location,
    pageResources: pageResources
  }, pageResources.json));
};

ProdPageRenderer.propTypes = {
  location: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
    pathname: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired
  }).isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (ProdPageRenderer);

/***/ }),

/***/ 159:
/***/ (function(module) {

module.exports = {"data":{"site":{"siteMetadata":{"title":"LDC4","description":"从零开始，斗破苍穹，七界传说","author":"Weedust"}}}};

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/inheritsLoose.js
var inheritsLoose = __webpack_require__(7);
var inheritsLoose_default = /*#__PURE__*/__webpack_require__.n(inheritsLoose);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.function.name.js
var es6_function_name = __webpack_require__(167);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.string.link.js
var es6_string_link = __webpack_require__(168);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.replace.js
var es6_regexp_replace = __webpack_require__(32);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.constructor.js
var es6_regexp_constructor = __webpack_require__(157);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.string.fixed.js
var es6_string_fixed = __webpack_require__(169);

// EXTERNAL MODULE: ./public/static/d/3965702043.json
var _3965702043 = __webpack_require__(161);

// EXTERNAL MODULE: ./.cache/gatsby-browser-entry.js
var gatsby_browser_entry = __webpack_require__(154);

// EXTERNAL MODULE: ./node_modules/gatsby-image/index.js
var gatsby_image = __webpack_require__(170);
var gatsby_image_default = /*#__PURE__*/__webpack_require__.n(gatsby_image);

// CONCATENATED MODULE: ./src/graphql/Logo/Logo.js






var Logo_Logo = function Logo() {
  return react_default.a.createElement(gatsby_browser_entry["StaticQuery"], {
    query: "3965702043",
    render: function render(data) {
      return react_default.a.createElement(gatsby_image_default.a, {
        fixed: data.avatar.childImageSharp.fixed
      });
    },
    data: _3965702043
  });
};

/* harmony default export */ var graphql_Logo_Logo = (Logo_Logo);
// CONCATENATED MODULE: ./src/graphql/index.js

// EXTERNAL MODULE: ./src/components/Layout/Header.less
var Layout_Header = __webpack_require__(162);

// CONCATENATED MODULE: ./src/components/Layout/Header.js










var Header_Header =
/*#__PURE__*/
function (_React$Component) {
  inheritsLoose_default()(Header, _React$Component);

  function Header() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Header.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        pathname = _this$props.pathname,
        title = _this$props.title,
        navs = _this$props.navs; // 处理末尾"/"

    var reg = new RegExp("/$");
    var rePathname = pathname.replace(reg, '');
    return react_default.a.createElement("div", {
      className: "header"
    }, react_default.a.createElement("div", {
      className: "logo " + (rePathname === '' ? 'active' : '')
    }, react_default.a.createElement(gatsby_browser_entry["Link"], {
      to: "/"
    }, react_default.a.createElement("div", {
      className: "img"
    }, react_default.a.createElement(graphql_Logo_Logo, null)), react_default.a.createElement("div", {
      className: "title"
    }, title))), react_default.a.createElement("div", {
      className: "nav"
    }, react_default.a.createElement("ul", {
      className: "nav-list"
    }, navs.map(function (_ref, index) {
      var node = _ref.node;
      return react_default.a.createElement(gatsby_browser_entry["Link"], {
        key: node.link + "-" + index,
        to: node.link
      }, react_default.a.createElement("li", {
        className: rePathname === "" + node.link ? 'active' : ''
      }, node.name));
    }))));
  };

  return Header;
}(react_default.a.Component);

/* harmony default export */ var components_Layout_Header = (Header_Header);
// EXTERNAL MODULE: ./src/components/Layout/Footer.less
var Layout_Footer = __webpack_require__(163);

// CONCATENATED MODULE: ./src/components/Layout/Footer.js




var Footer_Footer =
/*#__PURE__*/
function (_React$Component) {
  inheritsLoose_default()(Footer, _React$Component);

  function Footer() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Footer.prototype;

  _proto.render = function render() {
    var author = this.props.author;
    return react_default.a.createElement("div", {
      className: "footer"
    }, react_default.a.createElement("div", {
      className: "author"
    }, "Theme By ", author), react_default.a.createElement("div", {
      className: "location"
    }, react_default.a.createElement("i", {
      className: "location-icon"
    }), react_default.a.createElement("span", null, "ShenZhen - China")));
  };

  return Footer;
}(react_default.a.Component);

/* harmony default export */ var components_Layout_Footer = (Footer_Footer);
// EXTERNAL MODULE: ./src/components/Layout/Layout.less
var Layout_Layout = __webpack_require__(164);

// CONCATENATED MODULE: ./src/components/Layout/Layout.js






var Layout_Layout_Layout =
/*#__PURE__*/
function (_React$Component) {
  inheritsLoose_default()(Layout, _React$Component);

  function Layout() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Layout.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        pathname = _this$props.pathname,
        _this$props$metadata = _this$props.metadata,
        metadata = _this$props$metadata === void 0 ? {} : _this$props$metadata,
        navs = _this$props.navs,
        children = _this$props.children;
    var title = metadata.title,
        author = metadata.author;
    return react_default.a.createElement("div", {
      className: "layout-container"
    }, react_default.a.createElement("div", {
      className: "layout-content"
    }, react_default.a.createElement(components_Layout_Header, {
      pathname: pathname,
      title: title,
      navs: navs
    }), react_default.a.createElement("div", {
      className: "layout-page"
    }, children)), react_default.a.createElement(components_Layout_Footer, {
      author: author
    }));
  };

  return Layout;
}(react_default.a.Component);

/* harmony default export */ var components_Layout_Layout = __webpack_exports__["a"] = (Layout_Layout_Layout);

/***/ }),

/***/ 161:
/***/ (function(module) {

module.exports = {"data":{"avatar":{"childImageSharp":{"fixed":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAUDAv/EABcBAAMBAAAAAAAAAAAAAAAAAAECAwT/2gAMAwEAAhADEAAAAbSfjJbbFRpvZmXMEf/EABoQAAIDAQEAAAAAAAAAAAAAAAECAAMSESH/2gAIAQEAAQUCZ8s74EvJa1uyptVr6TEcqP/EABYRAQEBAAAAAAAAAAAAAAAAABARQf/aAAgBAwEBPwGmH//EABgRAAIDAAAAAAAAAAAAAAAAAAABAhAR/9oACAECAQE/AXO9P//EAB0QAAEEAgMAAAAAAAAAAAAAAAABEBEhAkExUWH/2gAIAQEABj8CxTsn1q0c7kQVqP/EABwQAAICAwEBAAAAAAAAAAAAAAABESExQVEQcf/aAAgBAQABPyFXSwLTlh5sA1XKWhxkz3hlu8tiran6MiapP//aAAwDAQACAAMAAAAQo+g+/8QAGBEAAgMAAAAAAAAAAAAAAAAAAAEQEVH/2gAIAQMBAT8QbRos/8QAFxEBAQEBAAAAAAAAAAAAAAAAAQARMf/aAAgBAgEBPxDDSHTZ4sIO3//EAB8QAQEAAgEEAwAAAAAAAAAAAAERACExEEFRgWGh0f/aAAgBAQABPxB2zavjX7MvAoPfG9/XRSFiBOzziaZmPI5y0tB7DWWjaVTIIB9sh3VTP//Z","width":40,"height":40,"src":"/static/f787f37e0f47ed616b6dedf49c2a7501/32de1/logo.jpg","srcSet":"/static/f787f37e0f47ed616b6dedf49c2a7501/32de1/logo.jpg 1x,\n/static/f787f37e0f47ed616b6dedf49c2a7501/0a2ed/logo.jpg 1.5x,\n/static/f787f37e0f47ed616b6dedf49c2a7501/7f057/logo.jpg 2x,\n/static/f787f37e0f47ed616b6dedf49c2a7501/bf8bc/logo.jpg 3x"}}}}};

/***/ }),

/***/ 162:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 163:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 164:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 193:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);
//# sourceMappingURL=component---src-pages-cats-js-ead15178dc10ad18c637.js.map