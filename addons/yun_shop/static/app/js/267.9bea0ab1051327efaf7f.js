webpackJsonp([267],{"6CuR":function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,"\n#recordDeclaration[data-v-89a2e9e8] {\n  padding-top: 40px;\n}\n#recordDeclaration .content[data-v-89a2e9e8] {\n    padding-left: 0.875rem;\n    background: #fff;\n}\n#recordDeclaration .content .main[data-v-89a2e9e8] {\n      min-height: 100vh;\n}\n#recordDeclaration .content .main .grade_list[data-v-89a2e9e8] {\n        padding: 0.625rem 0.875rem 0.625rem 0;\n        border-bottom: solid 0.0625rem #ebebeb;\n        text-align: left;\n}\n#recordDeclaration .content .main .grade_list .grade[data-v-89a2e9e8] {\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          -webkit-box-pack: justify;\n              -ms-flex-pack: justify;\n                  justify-content: space-between;\n          line-height: 1.875rem;\n}\n#recordDeclaration .content .main .grade_list .grade .left[data-v-89a2e9e8] {\n            font-size: 16px;\n            overflow: hidden;\n            text-overflow: ellipsis;\n            white-space: nowrap;\n            max-width: 240px;\n}\n#recordDeclaration .content .main .grade_list .grade .right[data-v-89a2e9e8] {\n            color: #f15353;\n            font-size: 18px;\n}\n#recordDeclaration .content .main .grade_list .state[data-v-89a2e9e8] {\n          font-size: 14px;\n          line-height: 1.5rem;\n}\n#recordDeclaration .content .main .grade_list .time[data-v-89a2e9e8] {\n          font-size: 14px;\n          line-height: 1.5rem;\n          color: #8c8c8c;\n}\n#recordDeclaration .content .main .grade_list[data-v-89a2e9e8]:last-child {\n        border: none;\n}\n",""])},n5Bf:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("Pexp"),i={mixins:[a("vsZy").a],data:function(){return{info:[],page:1,isLoadMore:!0,total_page:0}},activated:function(){this.getData(),this.init()},methods:{init:function(){this.info=[],this.isLoadMore=!0,this.total_page=0,this.page=1},getData:function(){var t=this,e=this;$http.get("plugin.declaration.api.maker-user-log.index",{member_id:this.$route.params.id,page:1},"加载中").then(function(a){1==a.result&&(e.isLoadMore=!0,e.total_page=a.data.last_page,e.total_page||(e.total_page=0),t.info=a.data.data)}).catch(function(t){console.log(t)})},getMoreData:function(){this.isLoadMore=!1;var t=this;t.page>=t.total_page||(t.page+=1,$http.get("plugin.declaration.api.maker-user-log.index",{member_id:this.$route.params.id,page:t.page},"加载中").then(function(e){if(t.isLoadMore=!0,1!=e.result)return t.page=t.page-1,void(t.isLoadMore=!1);var a=e.data.data;t.info=t.info.concat(a)}).catch(function(t){console.log(t)}))},loadTop:function(){this.init(),this.getData(),this.$refs.loadmore.onTopLoaded()}},components:{cTitle:n.a}},o={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"recordDeclaration"}},[a("c-title",{attrs:{hide:!1,text:"报单记录"}}),t._v(" "),a("div",{staticClass:"content"},[a("mt-loadmore",{ref:"loadmore",attrs:{"top-method":t.loadTop,topDropText:"释放刷新"}},[a("ul",{staticClass:"main"},[t._l(this.info,function(e,n){return a("li",{key:n,staticClass:"grade_list"},[a("div",{staticClass:"grade"},[a("span",{staticClass:"left"},[t._v(t._s(e.has_one_members.nickname)+"("+t._s(e.has_one_level.name)+")")]),t._v(" "),a("span",{staticClass:"right"},[t._v("-"+t._s(e.amount))])]),t._v(" "),a("div",{staticClass:"grade"},[a("span",{staticClass:"time"},[t._v(t._s(e.created_at))]),t._v(" "),a("span",{staticClass:"state"},[t._v("扣除金额")])])])}),t._v(" "),this.fun.isTextEmpty(this.info)?a("h2",{staticStyle:{"padding-top":"24px",color:"#f15353"}},[t._v("暂无相关记录！")]):t._e()],2)])],1)],1)},staticRenderFns:[]};var r=a("VU/8")(i,o,!1,function(t){a("v1q1")},"data-v-89a2e9e8",null);e.default=r.exports},v1q1:function(t,e,a){var n=a("6CuR");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a("rjj0")("231322b3",n,!0,{})}});