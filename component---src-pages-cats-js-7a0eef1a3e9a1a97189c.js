(self.webpackChunkldc4_blog=self.webpackChunkldc4_blog||[]).push([[290],{4910:function(t,e,n){"use strict";n.r(e);var a=n(1721),r=n(998),c=n.n(r),o=n(7294),u=n(1597),i=n(6013),s=n(7608),l=n(894),f=function(t){function e(){return t.apply(this,arguments)||this}(0,a.Z)(e,t);var n=e.prototype;return n.getCatsHTML=function(t){var e=[];return t.forEach((function(t,n){e.push(o.createElement("div",{className:"cat",key:"col-"+n},o.createElement(u.Link,{to:"/cats/"+t.catLink},o.createElement("div",{className:"cat-value"},t.catValue),o.createElement("div",{className:"cat-count"},t.catCount))))})),o.createElement("div",{className:"cats-wrap page-content"},e)},n.render=function(){var t=this.props,e=t.data,n=void 0===e?{}:e,a=t.location,r=void 0===a?{}:a,u=n.site,f=void 0===u?{}:u,v=n.allMarkdownRemark,p=void 0===v?{}:v,d=n.allNavigationJson,h=void 0===d?{}:d,m=r.pathname,g=void 0===m?"":m,k=f.siteMetadata,x=p.edges,E=h.edges,b=new RegExp("^/blog"),y=g.replace(b,"");return o.createElement(s.Z,{pathname:y,metadata:k,navs:E},o.createElement(l.Z,{title:"All cats",keywords:["blog","gatsby","javascript","react"]}),this.getCatsHTML(function(t){var e=[],n=0;t.forEach((function(t){var a=t.node.frontmatter,r=a.category;if(!a.draft)if(r){var o=c()(e,(function(t){return t.catValue===r}));o>=0?e[o].catCount++:e.push({catValue:r,catLink:i.Z.getHash(r),catCount:1})}else n++})),n>0&&e.push({catValue:"未分类",catLink:"uncat",catCount:n});return e}(x)))},e}(o.Component);e.default=f},1848:function(t){t.exports=function(t,e,n,a){for(var r=t.length,c=n+(a?1:-1);a?c--:++c<r;)if(e(t[c],c,t))return c;return-1}},7561:function(t,e,n){var a=n(7990),r=/^\s+/;t.exports=function(t){return t?t.slice(0,a(t)+1).replace(r,""):t}},7990:function(t){var e=/\s/;t.exports=function(t){for(var n=t.length;n--&&e.test(t.charAt(n)););return n}},998:function(t,e,n){var a=n(1848),r=n(7206),c=n(554),o=Math.max;t.exports=function(t,e,n){var u=null==t?0:t.length;if(!u)return-1;var i=null==n?0:c(n);return i<0&&(i=o(u+i,0)),a(t,r(e,3),i)}},8601:function(t,e,n){var a=n(4841),r=1/0;t.exports=function(t){return t?(t=a(t))===r||t===-1/0?17976931348623157e292*(t<0?-1:1):t==t?t:0:0===t?t:0}},554:function(t,e,n){var a=n(8601);t.exports=function(t){var e=a(t),n=e%1;return e==e?n?e-n:e:0}},4841:function(t,e,n){var a=n(7561),r=n(3218),c=n(3448),o=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,i=/^0o[0-7]+$/i,s=parseInt;t.exports=function(t){if("number"==typeof t)return t;if(c(t))return NaN;if(r(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=r(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=a(t);var n=u.test(t);return n||i.test(t)?s(t.slice(2),n?2:8):o.test(t)?NaN:+t}}}]);
//# sourceMappingURL=component---src-pages-cats-js-7a0eef1a3e9a1a97189c.js.map