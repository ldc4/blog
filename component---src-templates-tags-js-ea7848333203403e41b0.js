(self.webpackChunkldc4_blog=self.webpackChunkldc4_blog||[]).push([[942],{8538:function(t,e,n){n(5743),t.exports=function(){"use strict";var t=1e3,e=6e4,n=36e5,r="millisecond",i="second",s="minute",a="hour",u="day",o="week",c="month",l="quarter",f="year",h="date",d="Invalid Date",m=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,$=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,p={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},g=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},v={s:g,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+g(r,2,"0")+":"+g(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,c),s=n-i<0,a=e.clone().add(r+(s?-1:1),c);return+(-(r+(n-i)/(s?i-a:a-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:c,y:f,w:o,d:u,D:h,h:a,m:s,s:i,ms:r,Q:l}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},y="en",M={};M[y]=p;var D=function(t){return t instanceof N},S=function t(e,n,r){var i;if(!e)return y;if("string"==typeof e){var s=e.toLowerCase();M[s]&&(i=s),n&&(M[s]=n,i=s);var a=e.split("-");if(!i&&a.length>1)return t(a[0])}else{var u=e.name;M[u]=e,i=u}return!r&&i&&(y=i),i||!r&&y},w=function(t,e){if(D(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new N(n)},E=v;E.l=S,E.i=D,E.w=function(t,e){return w(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var N=function(){function p(t){this.$L=S(t.locale,null,!0),this.parse(t)}var g=p.prototype;return g.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(E.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(m);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},g.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},g.$utils=function(){return E},g.isValid=function(){return!(this.$d.toString()===d)},g.isSame=function(t,e){var n=w(t);return this.startOf(e)<=n&&n<=this.endOf(e)},g.isAfter=function(t,e){return w(t)<this.startOf(e)},g.isBefore=function(t,e){return this.endOf(e)<w(t)},g.$g=function(t,e,n){return E.u(t)?this[e]:this.set(n,t)},g.unix=function(){return Math.floor(this.valueOf()/1e3)},g.valueOf=function(){return this.$d.getTime()},g.startOf=function(t,e){var n=this,r=!!E.u(e)||e,l=E.p(t),d=function(t,e){var i=E.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?i:i.endOf(u)},m=function(t,e){return E.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},$=this.$W,p=this.$M,g=this.$D,v="set"+(this.$u?"UTC":"");switch(l){case f:return r?d(1,0):d(31,11);case c:return r?d(1,p):d(0,p+1);case o:var y=this.$locale().weekStart||0,M=($<y?$+7:$)-y;return d(r?g-M:g+(6-M),p);case u:case h:return m(v+"Hours",0);case a:return m(v+"Minutes",1);case s:return m(v+"Seconds",2);case i:return m(v+"Milliseconds",3);default:return this.clone()}},g.endOf=function(t){return this.startOf(t,!1)},g.$set=function(t,e){var n,o=E.p(t),l="set"+(this.$u?"UTC":""),d=(n={},n[u]=l+"Date",n[h]=l+"Date",n[c]=l+"Month",n[f]=l+"FullYear",n[a]=l+"Hours",n[s]=l+"Minutes",n[i]=l+"Seconds",n[r]=l+"Milliseconds",n)[o],m=o===u?this.$D+(e-this.$W):e;if(o===c||o===f){var $=this.clone().set(h,1);$.$d[d](m),$.init(),this.$d=$.set(h,Math.min(this.$D,$.daysInMonth())).$d}else d&&this.$d[d](m);return this.init(),this},g.set=function(t,e){return this.clone().$set(t,e)},g.get=function(t){return this[E.p(t)]()},g.add=function(r,l){var h,d=this;r=Number(r);var m=E.p(l),$=function(t){var e=w(d);return E.w(e.date(e.date()+Math.round(t*r)),d)};if(m===c)return this.set(c,this.$M+r);if(m===f)return this.set(f,this.$y+r);if(m===u)return $(1);if(m===o)return $(7);var p=(h={},h[s]=e,h[a]=n,h[i]=t,h)[m]||1,g=this.$d.getTime()+r*p;return E.w(g,this)},g.subtract=function(t,e){return this.add(-1*t,e)},g.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||d;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=E.z(this),s=this.$H,a=this.$m,u=this.$M,o=n.weekdays,c=n.months,l=function(t,n,i,s){return t&&(t[n]||t(e,r))||i[n].substr(0,s)},f=function(t){return E.s(s%12||12,t,"0")},h=n.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},m={YY:String(this.$y).slice(-2),YYYY:this.$y,M:u+1,MM:E.s(u+1,2,"0"),MMM:l(n.monthsShort,u,c,3),MMMM:l(c,u),D:this.$D,DD:E.s(this.$D,2,"0"),d:String(this.$W),dd:l(n.weekdaysMin,this.$W,o,2),ddd:l(n.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(s),HH:E.s(s,2,"0"),h:f(1),hh:f(2),a:h(s,a,!0),A:h(s,a,!1),m:String(a),mm:E.s(a,2,"0"),s:String(this.$s),ss:E.s(this.$s,2,"0"),SSS:E.s(this.$ms,3,"0"),Z:i};return r.replace($,(function(t,e){return e||m[t]||i.replace(":","")}))},g.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},g.diff=function(r,h,d){var m,$=E.p(h),p=w(r),g=(p.utcOffset()-this.utcOffset())*e,v=this-p,y=E.m(this,p);return y=(m={},m[f]=y/12,m[c]=y,m[l]=y/3,m[o]=(v-g)/6048e5,m[u]=(v-g)/864e5,m[a]=v/n,m[s]=v/e,m[i]=v/t,m)[$]||v,d?y:E.a(y)},g.daysInMonth=function(){return this.endOf(c).$D},g.$locale=function(){return M[this.$L]},g.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=S(t,e,!0);return r&&(n.$L=r),n},g.clone=function(){return E.w(this.$d,this)},g.toDate=function(){return new Date(this.valueOf())},g.toJSON=function(){return this.isValid()?this.toISOString():null},g.toISOString=function(){return this.$d.toISOString()},g.toString=function(){return this.$d.toUTCString()},p}(),_=N.prototype;return w.prototype=_,[["$ms",r],["$s",i],["$m",s],["$H",a],["$W",u],["$M",c],["$y",f],["$D",h]].forEach((function(t){_[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),w.extend=function(t,e){return t.$i||(t(e,N,w),t.$i=!0),w},w.locale=S,w.isDayjs=D,w.unix=function(t){return w(1e3*t)},w.en=M[y],w.Ls=M,w.p={},w}()},6972:function(t,e,n){"use strict";n.d(e,{J:function(){return s},X:function(){return a}});var r=n(1721),i=n(7294),s=function(t){function e(){return t.apply(this,arguments)||this}return(0,r.Z)(e,t),e.prototype.render=function(){var t=this.props.className||"";return i.createElement("div",{className:"col-g-u-"+this.props.span+"-24 "+t},this.props.children)},e}(i.Component),a=function(t){function e(){return t.apply(this,arguments)||this}return(0,r.Z)(e,t),e.prototype.render=function(){var t=this.props.className||"";return i.createElement("div",{className:"row-g "+t},this.props.children)},e}(i.Component)},6602:function(t,e,n){"use strict";n.r(e);var r=n(1721),i=n(7294),s=n(1597),a=n(8538),u=n.n(a),o=n(6013),c=n(7608),l=n(6972),f=n(894),h=function(t){function e(){return t.apply(this,arguments)||this}return(0,r.Z)(e,t),e.prototype.render=function(){var t=this.props,e=t.data,n=void 0===e?{}:e,r=t.location,a=void 0===r?{}:r,h=t.pageContext,d=n.site,m=void 0===d?{}:d,$=n.tagMarkdownRemark,p=void 0===$?{}:$,g=n.allMarkdownRemark,v=void 0===g?{}:g,y=n.allNavigationJson,M=void 0===y?{}:y,D=a.pathname,S=void 0===D?"":D,w=h.tag,E=m.siteMetadata,N=M.edges,_=void 0===N?[]:N,O=[];w?O=p.edges||[]:(v.edges||[]).forEach((function(t){var e=t.node.frontmatter,n=e.tags,r=e.draft;n&&0!==n.length||r||O.push(t)}));var k=new RegExp("^/blog"),b=S.replace(k,"");return i.createElement(c.Z,{pathname:b,metadata:E,navs:_},i.createElement(f.Z,{title:"tag-"+w,keywords:["blog","gatsby","javascript","react"]}),i.createElement("div",{className:"tags-page"},i.createElement("div",{className:"fragment-header"},w?i.createElement("div",null,i.createElement("div",{className:"title"},"标签"),i.createElement("div",{className:"tag"},w)):i.createElement("div",{className:"title"},"未标记")),i.createElement("div",{className:"fragment-list"},O.map((function(t){var e=t.node,n=e.frontmatter.title||e.fields.slug,r=u()(e.frontmatter.date).format("YYYY-MM-DD"),a=e.frontmatter.tags||[],c=e.frontmatter.category;return i.createElement("div",{className:"fragment",key:e.fields.slug},i.createElement("div",{className:"title"},i.createElement(s.Link,{to:"/pages/"+o.Z.getHash(e.fields.slug)},n)),i.createElement("div",{className:"content"},i.createElement(l.X,null,i.createElement(l.J,{span:4},i.createElement("div",{className:"date-and-category"},i.createElement("div",{className:"date"},r),i.createElement("div",{className:"category"},i.createElement(s.Link,{to:"/cats/"+(c?o.Z.getHash(c):"uncat")+"/"},c||"未分类")))),i.createElement(l.J,{span:14},i.createElement("div",{className:"excerpt",dangerouslySetInnerHTML:{__html:e.excerpt}})),i.createElement(l.J,{span:6},i.createElement("div",{className:"tags"},a.map((function(t,e){return i.createElement("div",{className:"tag-item",key:t+"-"+e},i.createElement(s.Link,{to:"/tags/"+o.Z.getHash(t)+"/"},t))})))))))})))))},e}(i.Component);e.default=h}}]);
//# sourceMappingURL=component---src-templates-tags-js-ea7848333203403e41b0.js.map