(self.webpackChunkMyGatsby=self.webpackChunkMyGatsby||[]).push([[290],{4910:function(t,e,a){"use strict";a.r(e);var n=a(1721),r=a(998),c=a.n(r),o=a(7294),u=a(1597),i=a(6013),s=a(7608),f=a(894),l=function(t){function e(){return t.apply(this,arguments)||this}(0,n.Z)(e,t);var a=e.prototype;return a.getCatsHTML=function(t){var e=[];return t.forEach((function(t,a){e.push(o.createElement("div",{className:"cat",key:"col-"+a},o.createElement(u.Link,{to:"/cats/"+t.catLink},o.createElement("div",{className:"cat-value"},t.catValue),o.createElement("div",{className:"cat-count"},t.catCount))))})),o.createElement("div",{className:"cats-wrap page-content"},e)},a.render=function(){var t=this.props,e=t.data,a=void 0===e?{}:e,n=t.location,r=void 0===n?{}:n,u=a.site,l=void 0===u?{}:u,v=a.allMarkdownRemark,p=void 0===v?{}:v,d=a.allNavigationJson,h=void 0===d?{}:d,m=r.pathname,g=void 0===m?"":m,y=l.siteMetadata,k=p.edges,x=h.edges,E=new RegExp("^/blog"),b=g.replace(E,"");return o.createElement(s.Z,{pathname:b,metadata:y,navs:x},o.createElement(f.Z,{title:"All cats",keywords:["blog","gatsby","javascript","react"]}),this.getCatsHTML(function(t){var e=[],a=0;t.forEach((function(t){var n=t.node.frontmatter,r=n.category;if(!n.draft)if(r){var o=c()(e,(function(t){return t.catValue===r}));o>=0?e[o].catCount++:e.push({catValue:r,catLink:i.Z.getHash(r),catCount:1})}else a++})),a>0&&e.push({catValue:"未分类",catLink:"uncat",catCount:a});return e}(k)))},e}(o.Component);e.default=l},1848:function(t){t.exports=function(t,e,a,n){for(var r=t.length,c=a+(n?1:-1);n?c--:++c<r;)if(e(t[c],c,t))return c;return-1}},7561:function(t,e,a){var n=a(7990),r=/^\s+/;t.exports=function(t){return t?t.slice(0,n(t)+1).replace(r,""):t}},7990:function(t){var e=/\s/;t.exports=function(t){for(var a=t.length;a--&&e.test(t.charAt(a)););return a}},998:function(t,e,a){var n=a(1848),r=a(7206),c=a(554),o=Math.max;t.exports=function(t,e,a){var u=null==t?0:t.length;if(!u)return-1;var i=null==a?0:c(a);return i<0&&(i=o(u+i,0)),n(t,r(e,3),i)}},8601:function(t,e,a){var n=a(4841),r=1/0;t.exports=function(t){return t?(t=n(t))===r||t===-1/0?17976931348623157e292*(t<0?-1:1):t==t?t:0:0===t?t:0}},554:function(t,e,a){var n=a(8601);t.exports=function(t){var e=n(t),a=e%1;return e==e?a?e-a:e:0}},4841:function(t,e,a){var n=a(7561),r=a(3218),c=a(3448),o=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,i=/^0o[0-7]+$/i,s=parseInt;t.exports=function(t){if("number"==typeof t)return t;if(c(t))return NaN;if(r(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=r(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=n(t);var a=u.test(t);return a||i.test(t)?s(t.slice(2),a?2:8):o.test(t)?NaN:+t}}}]);
//# sourceMappingURL=component---src-pages-cats-js-3ad8b4f0e236599d5702.js.map