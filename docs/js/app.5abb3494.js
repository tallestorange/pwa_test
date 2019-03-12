(function(t){function e(e){for(var o,i,s=e[0],c=e[1],l=e[2],d=0,p=[];d<s.length;d++)i=s[d],a[i]&&p.push(a[i][0]),a[i]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);u&&u(e);while(p.length)p.shift()();return n.push.apply(n,l||[]),r()}function r(){for(var t,e=0;e<n.length;e++){for(var r=n[e],o=!0,s=1;s<r.length;s++){var c=r[s];0!==a[c]&&(o=!1)}o&&(n.splice(e--,1),t=i(i.s=r[0]))}return t}var o={},a={app:0},n=[];function i(e){if(o[e])return o[e].exports;var r=o[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=t,i.c=o,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(r,o,function(e){return t[e]}.bind(null,o));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/pwa_test/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var u=c;n.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"034f":function(t,e,r){"use strict";var o=r("1356"),a=r.n(o);a.a},1356:function(t,e,r){},"4a50":function(t,e,r){"use strict";var o=r("c5db"),a=r.n(o);a.a},"4a7c":function(t){t.exports={scores:[100,300,400,500],algorithms:["BFS","DFS","DP","UnionFind","ワーシャルフロイド法","二分探索","全探索","最小全域木","木構造","貪欲"],orders:["O(N^3)","O(N^2logN)","O(|S|)","O(NlogN)","O(N)","O(N^5)","O(4^N)","O(H^2W^2)"]}},"56d7":function(t,e,r){"use strict";r.r(e);r("cadf"),r("551c"),r("f751"),r("097d");var o=r("2b0e"),a=r("bb71");r("da64");o["a"].use(a["a"],{iconfont:"md"});var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",{attrs:{dark:this.$store.getters["darkColor"]}},[r("tool-bar"),r("transition",{attrs:{name:t.transitionName}},[r("router-view")],1)],1)},i=[],s=(r("4917"),function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-toolbar",{attrs:{app:"",extended:!this.$store.state.ishome},scopedSlots:t._u([this.$store.state.ishome?null:{key:"extension",fn:function(){return[r("v-spacer"),r("v-toolbar-title",[t.$route.path.match(/posts/)?r("span",{staticClass:"font-weight-light"},[t._v(t._s(t.articles[t.$route.params.value].title))]):"/search"==t.$route.path?r("span",{staticClass:"font-weight-light"},[t._v("問題検索")]):r("span",{staticClass:"font-weight-light"},[t._v("検索結果")])])]},proxy:!0}],null,!0)},[this.$store.state.ishome?r("v-toolbar-side-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}):r("v-btn",{attrs:{icon:""},on:{click:function(e){return e.stopPropagation(),t.back(e)}}},[r("v-icon",[t._v("arrow_back")])],1),this.$store.state.ishome?r("div",[r("v-toolbar-title",[r("span",{staticClass:"font-weight-light"},[t._v("競プロ")])])],1):t._e(),r("v-spacer"),this.$store.state.ishome?r("v-btn",{attrs:{icon:""},on:{click:t.clickSearch}},[r("v-icon",[t._v("search")])],1):t._e()],1),r("v-navigation-drawer",{attrs:{temporary:"",absolute:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[r("v-toolbar-side-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),r("v-list",[r("v-list-tile",{attrs:{to:"/"}},[r("v-list-tile-content",[r("v-list-tile-title",[t._v("ホーム")])],1)],1),r("v-divider"),r("v-list-tile",{on:{click:function(e){return t.clickLink("https://atcoder.jp/?lang=ja")}}},[r("v-list-tile-content",[r("v-list-tile-title",[t._v("AtCoder")])],1)],1),r("v-list-tile",{on:{click:function(e){return t.clickLink("https://kenkoooo.com/atcoder/")}}},[r("v-list-tile-content",[r("v-list-tile-title",[t._v("AtCoder Problems")])],1)],1),r("v-divider"),r("v-list-tile",[r("v-list-tile-content",[r("v-list-tile-title",[t._v("夜間モード")])],1),r("v-list-tile-action",[r("v-switch",{model:{value:t.nightMode,callback:function(e){t.nightMode=e},expression:"nightMode"}})],1)],1)],1)],1)],1)}),c=[],l={components:{},data:function(){return{sildeName:"down",drawer:!1,nightMode:this.$store.getters["darkColor"]}},computed:{articles:function(){return this.$store.state.articles}},watch:{$route:function(t,e){"/"==t.path?(this.$store.commit("isAtHome"),this.sildeName="down"):(this.$store.commit("isNotAtHome"),this.sildeName="up")},nightMode:function(t,e){this.$store.commit("changeTheme")}},methods:{back:function(){this.$router.go(-1)},clickSearch:function(){this.$router.push({path:"/search"})},clickLink:function(t){window.open(t)}}},u=l,d=(r("4a50"),r("2877")),p=r("6544"),h=r.n(p),m=r("8336"),f=r("ce7e"),v=r("132d"),g=r("8860"),b=r("ba95"),_=r("40fe"),k=r("5d23"),w=r("f774"),C=r("9910"),y=r("b73d"),A=r("71d9"),x=r("706c"),O=r("2a7f"),$=Object(d["a"])(u,s,c,!1,null,null,null),B=$.exports;h()($,{VBtn:m["a"],VDivider:f["a"],VIcon:v["a"],VList:g["a"],VListTile:b["a"],VListTileAction:_["a"],VListTileContent:k["a"],VListTileTitle:k["b"],VNavigationDrawer:w["a"],VSpacer:C["a"],VSwitch:y["a"],VToolbar:A["a"],VToolbarSideIcon:x["a"],VToolbarTitle:O["a"]});var V={name:"App",components:{ToolBar:B},data:function(){return{transitionName:"next",registration:null}},mounted:function(){document.addEventListener("swUpdated",this.showRefreshUI)},beforeDestroy:function(){document.removeEventListener("swUpdated",this.showRefreshUI)},methods:{showRefreshUI:function(t){this.registration=t.detail,console.log(this.registration),console.log("アップデート完了")}},watch:{$route:function(t,e){"/"==t.path?(this.$store.commit("isAtHome"),e.path.match(/posts/)&&(this.transitionName="next")):(this.$store.commit("isNotAtHome"),t.path.match(/posts/)&&(this.transitionName="prev"))}}},S=V,D=(r("034f"),r("7496")),j=Object(d["a"])(S,n,i,!1,null,null,null),N=j.exports;h()(j,{VApp:D["a"]});var T=r("8c4f"),P=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-content",[r("v-layout",{attrs:{"justify-center":""}},[r("v-flex",{attrs:{xs11:"",sm9:"",md7:""}},t._l(t.articles,function(t){return r("div",{staticStyle:{margin:"8px"}},[r("problem-card",{attrs:{article:t}})],1)}),0)],1)],1)},L=[],E=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",{on:{click:function(e){return t.clickProblem(t.article.filename)}}},[r("v-layout",{attrs:{row:""}},[r("v-card-title",{attrs:{"primary-title":""}},[r("div",{staticClass:"headline font-weight-bold"},[t._v(t._s(t.article.title))])]),r("v-spacer"),r("div",{staticStyle:{margin:"5px"}},[t._v(t._s(t.article.score))])],1),r("v-divider"),r("v-card-actions",[t._v("\n    難易度\n    "),r("v-spacer"),r("v-rating",{attrs:{"half-increments":"",size:"20",value:t.article.difficulty,readonly:""}})],1),r("v-flex",[r("v-card-actions",[t._v("\n      要復習度\n      "),r("v-spacer"),r("v-rating",{attrs:{"half-increments":"",size:"20",value:t.article.importance,readonly:""}})],1)],1)],1)},F=[],R={data:function(){return{}},props:["article"],methods:{clickProblem:function(t){this.$router.push({path:"/posts/".concat(t)})}}},M=R,H=r("b0af"),I=r("99d9"),U=r("12b2"),Z=r("0e8f"),z=r("a722"),J=r("1d4d"),W=Object(d["a"])(M,E,F,!1,null,null,null),q=W.exports;h()(W,{VCard:H["a"],VCardActions:I["a"],VCardTitle:U["a"],VDivider:f["a"],VFlex:Z["a"],VLayout:z["a"],VRating:J["a"],VSpacer:C["a"]});var K={components:{ProblemCard:q},computed:{articles:function(){return this.$store.getters["getArticles"]}},data:function(){return{}}},G=K,Q=r("549c"),X=Object(d["a"])(G,P,L,!1,null,null,null),Y=X.exports;h()(X,{VContent:Q["a"],VFlex:Z["a"],VLayout:z["a"]});var tt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-content",[r("v-layout",{attrs:{"justify-center":""}},[r("v-flex",{attrs:{xs11:"",sm9:"",md7:""}},[r("v-expansion-panel",[r("v-expansion-panel-content",[r("div",{attrs:{slot:"header"},slot:"header"},[t._v("アルゴリズム")]),r("v-card",[r("v-layout",{attrs:{row:""}},t._l(t.article.algorithms,function(e){return r("div",[r("v-chip",{attrs:{color:"primary","text-color":"white"}},[t._v(t._s(e))])],1)}),0)],1)],1),r("v-expansion-panel-content",[r("div",{attrs:{slot:"header"},slot:"header"},[t._v("計算量")]),r("v-card",[r("v-layout",{attrs:{row:""}},[r("v-chip",{attrs:{color:"primary","text-color":"white"}},[t._v(t._s(t.article.order))])],1)],1)],1),r("v-expansion-panel-content",[r("div",{attrs:{slot:"header"},slot:"header"},[t._v("解説")]),r("v-card",[r("div",{domProps:{innerHTML:t._s(this.$store.getters["getArticle"])}})])],1),r("div",[r("v-btn",{attrs:{round:"",color:"primary"},on:{click:t.clickLink}},[t._v("問題を見る")])],1)],1)],1)],1)],1)},et=[],rt={components:{},computed:{article:function(){var t=this.$store.state.articles[this.$route.params.value];return t}},created:function(){var t=this.$store.state.articles[this.$route.params.value];this.$store.dispatch("getArticleAction",{name:"/pwa_test/json/"+t.filename+".json"})},methods:{clickLink:function(){var t=this.$store.state.articles[this.$route.params.value];window.open(t.url)}},data:function(){return{}}},ot=rt,at=r("cc20"),nt=r("cd55"),it=r("49e2"),st=Object(d["a"])(ot,tt,et,!1,null,null,null),ct=st.exports;h()(st,{VBtn:m["a"],VCard:H["a"],VChip:at["a"],VContent:Q["a"],VExpansionPanel:nt["a"],VExpansionPanelContent:it["a"],VFlex:Z["a"],VLayout:z["a"]});var lt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-content",[r("v-layout",{attrs:{"justify-center":""}},[r("v-flex",{staticClass:"mt-3 mb-3",attrs:{xs10:"",sm9:"",md7:""}},[r("v-combobox",{attrs:{label:"計算量",items:this.$store.getters["getSearchtags"].orders,type:"button"},model:{value:t.order,callback:function(e){t.order=e},expression:"order"}}),r("v-combobox",{attrs:{label:"アルゴリズム",items:this.$store.getters["getSearchtags"].algorithms,multiple:"",clearable:"",chips:"",type:"button"},scopedSlots:t._u([{key:"selection",fn:function(e){return[r("v-chip",{attrs:{selected:e.selected,close:"",color:"primary","text-color":"white"},on:{input:function(r){return t.remove(e.item)}}},[t._v("\n            "+t._s(e.item)+"\n          ")])]}}]),model:{value:t.algorithms,callback:function(e){t.algorithms=e},expression:"algorithms"}}),r("v-btn",{attrs:{round:"",block:"",color:"primary"},on:{click:t.clickSearch}},[t._v("検索")])],1)],1)],1)},ut=[],dt={data:function(){return{order:"",algorithms:[]}},methods:{remove:function(t){var e=this.algorithms.indexOf(t);e>=0&&this.algorithms.splice(e,1)},clickSearch:function(){this.$store.commit("setSearchOptions",{order:this.order,algorithms:this.algorithms}),this.$router.push({path:"/search/result"})}}},pt=dt,ht=r("2b5d"),mt=Object(d["a"])(pt,lt,ut,!1,null,null,null),ft=mt.exports;h()(mt,{VBtn:m["a"],VChip:at["a"],VCombobox:ht["a"],VContent:Q["a"],VFlex:Z["a"],VLayout:z["a"]});var vt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-content",[r("v-layout",{attrs:{"justify-center":""}},[r("v-flex",{attrs:{xs11:"",sm9:"",md7:""}},t._l(t.articles,function(t){return r("div",{staticStyle:{margin:"8px"}},[r("problem-card",{attrs:{article:t}})],1)}),0)],1)],1)},gt=[],bt={components:{ProblemCard:q},data:function(){return{searchOprion:this.$store.getters["getSearchOptions"]}},computed:{articles:function(){var t={};for(var e in this.$store.state.articles){var r=this.$store.state.articles[e];if(""==this.searchOprion.order||r.order==this.searchOprion.order){var o=!0;for(var a in this.searchOprion.algorithms){var n=this.searchOprion.algorithms[a];if(-1==r.algorithms.indexOf(n)){o=!1;break}}1==o&&(t[e]=r)}}return t}}},_t=bt,kt=Object(d["a"])(_t,vt,gt,!1,null,null,null),wt=kt.exports;h()(kt,{VContent:Q["a"],VFlex:Z["a"],VLayout:z["a"]}),o["a"].use(T["a"]);var Ct=new T["a"]({mode:"history",base:"/pwa_test/",routes:[{path:"/",component:Y},{path:"/posts/:value",component:ct},{path:"/search/result",component:wt},{path:"/search",component:ft}]}),yt=(r("7f7f"),r("96cf"),r("3b8d")),At=r("2f62"),xt=r("7e2f"),Ot=r("4a7c"),$t=r("bc3a"),Bt=r.n($t);o["a"].use(At["a"]);var Vt=new At["a"].Store({state:{ishome:!0,isDark:!0,order:"",algorithms:[],articles:xt,searchtag:Ot,article:""},getters:{getArticle:function(t,e){return t.article.html},getSearchtags:function(t,e){return t.searchtag},getSearchOptions:function(t,e){return{order:t.order,algorithms:t.algorithms}},getArticles:function(t,e){return t.articles},darkColor:function(t,e){return"true"==localStorage.dark?t.isDark=!0:"false"==localStorage.dark?t.isDark=!1:(t.isDark=!0,localStorage.dark="true"),t.isDark}},mutations:{isNotAtHome:function(t){t.ishome=!1},isAtHome:function(t){t.ishome=!0},changeTheme:function(t){return t.isDark=!t.isDark,t.isDark?localStorage.setItem("dark","true"):localStorage.setItem("dark","false"),t.isDark},setArticle:function(t,e){t.article=e.article},setSearchOptions:function(t,e){t.order=e.order,t.algorithms=e.algorithms}},actions:{getArticleAction:function(){var t=Object(yt["a"])(regeneratorRuntime.mark(function t(e,r){var o,a;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return o=r.name,a={article:""},t.next=4,Bt.a.get(o).then(function(t){a.article=t.data});case 4:e.commit("setArticle",a);case 5:case"end":return t.stop()}},t)}));function e(e,r){return t.apply(this,arguments)}return e}()}}),St=r("9483");Object(St["a"])("".concat("/pwa_test/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(t){console.log("New content is available; please refresh.");var e=new CustomEvent("swUpdated",{detail:t});document.dispatchEvent(e)},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var Dt=r("31bd");o["a"].config.productionTip=!1,Object(Dt["sync"])(Vt,Ct),new o["a"]({router:Ct,store:Vt,render:function(t){return t(N)}}).$mount("#app")},"7e2f":function(t){t.exports={"ABC015-D":{title:"ABC015-D 高橋君の苦悩",date:"2018-11-28T00:00:00.000Z",competive_programming:!0,score:400,algorithms:["DP"],order:"O(N^3)",contest:"ABC",difficulty:4,importance:4.5,url:"https://atcoder.jp/contests/abc015/tasks/abc015_4",filename:"ABC015-D"},"ABC033-D":{title:"ABC033-D 三角形の分類",date:"2018-12-03T00:00:00.000Z",competive_programming:!0,score:100,algorithms:["二分探索"],order:"O(N^2logN)",contest:"ABC",difficulty:4.5,importance:3.5,url:"https://atcoder.jp/contests/abc033/tasks/abc033_d",filename:"ABC033-D"},"ABC064-D":{title:"ABC064-D Insertion",date:"2018-2-20",competive_programming:!0,score:400,algorithms:["貪欲"],order:"O(|S|)",contest:"ABC",difficulty:2.5,importance:3.5,url:"https://atcoder.jp/contests/abc064/tasks/abc064_d",filename:"ABC064-D"},"ABC065-D":{title:"ABC065-D Built?",date:"2018-2-21",competive_programming:!0,score:400,algorithms:["UnionFind","最小全域木","木構造"],order:"O(NlogN)",contest:"ABC",difficulty:3,importance:4,url:"https://atcoder.jp/contests/abc064/tasks/abc065_d",filename:"ABC065-D"},"ABC070-D":{title:"ABC070-D Transit Tree Path",date:"2018-2-22",competive_programming:!0,score:400,algorithms:["DFS","木構造"],order:"O(N)",contest:"ABC",difficulty:3.5,importance:4,url:"https://atcoder.jp/contests/abc070/tasks/abc070_d",filename:"ABC070-D"},"ABC074-D":{title:"ABC074-D Restoring Road Network",date:"2018-2-22",competive_programming:!0,score:500,algorithms:["ワーシャルフロイド法"],order:"O(N^3)",contest:"ABC",difficulty:4,importance:4,url:"https://atcoder.jp/contests/abc070/tasks/abc070_d",filename:"ABC074-D"},"ABC075-D":{title:"ABC075-D Axis-Parallel Rectangle",date:"2018-2-23",competive_programming:!0,score:400,algorithms:["全探索"],order:"O(N^5)",contest:"ABC",difficulty:2.5,importance:4,url:"https://atcoder.jp/contests/abc075/tasks/abc075_d",filename:"ABC075-D"},"ABC119-C":{title:"ABC119-C Synthetic Kadomatsu",date:"2019-02-24T00:00:00.000Z",competive_programming:!0,score:300,algorithms:["全探索"],order:"O(4^N)",contest:"ABC",difficulty:3.5,importance:2.5,url:"https://atcoder.jp/contests/abc119/tasks/abc119_c",filename:"ABC119-C"},"ARC031-B":{title:"ARC031-B 埋め立て",date:"2018-11-28T00:00:00.000Z",competive_programming:!0,score:100,algorithms:["DFS","BFS"],order:"O(H^2W^2)",contest:"ARC",difficulty:3,importance:3.5,url:"https://atcoder.jp/contests/arc031/tasks/arc031_2",filename:"ARC031-B"}}},c5db:function(t,e,r){}});
//# sourceMappingURL=app.5abb3494.js.map