(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1772e0b2"],{"097a":function(e,t,n){},"136d":function(e,t,n){},"44fa":function(e,t,n){"use strict";n.r(t);var r,a,i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("search-bar"),e._v(" "),n("div",{staticClass:"control"},[n("el-table",{ref:"handSelectTest_multipleTable",staticStyle:{width:"100%"},attrs:{data:e.tableData},on:{"current-change":e.handleRowClick,"selection-change":e.handleSelectionChange}},[n("el-table-column",[n("template",{slot:"header"},[n("div",{staticClass:"btns"},[n("el-button",{attrs:{type:"primary"},on:{click:function(){e.handleFunction1(e.multipleSelection)}}},[e._v(e._s(e.$t("testList.function1")))]),e._v(" "),n("el-button",{attrs:{type:"primary"}},[e._v(e._s(e.$t("testList.function2")))]),e._v(" "),n("el-button",{attrs:{type:"primary"}},[e._v(e._s(e.$t("testList.function3")))])],1)]),e._v(" "),n("el-table-column",{attrs:{type:"selection",width:"55"}}),e._v(" "),e._l(e.fields,(function(e,t){return n("el-table-column",{key:t,attrs:{prop:e.key,label:e.name,width:e.width}})}))],2)],1)],1),e._v(" "),n("div",{staticClass:"block"},[n("el-pagination",{attrs:{"current-page":e.currentPage2,"page-sizes":[10,20],"page-size":100,layout:"sizes, prev, pager, next",total:e.total},on:{"update:currentPage":function(t){e.currentPage2=t},"update:current-page":function(t){e.currentPage2=t},"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)],1)},s=[],u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("search-bar",{attrs:{fields:e.fields,"fields-arr":e.fieldsArr,"search-query":e.query,"form-items":e.formItems,"search-handle":e.searchHandle,"search-reset":e.searchHandle}})],1)},c=[],l={query:{customerName:{value:"intellent"},customerName2:{value:"intellent"}},formItems:[{type:"input",key:"customerName",label:"test2",span:1,placeholder:"请输入",props:{size:"mini"}},{type:"input",key:"customerName2",label:"收货客户",span:1,placeholder:"请输入",props:{size:"mini"}}],fields:["customerName","customerName2"],fieldsArr:[{key:"customerName",name:"test2",show:!0},{key:"customerName2",name:"收货客户",show:!0}]},o=l,d=n("9d06"),f=d["a"],h=n("2877"),m=Object(h["a"])(f,r,a,!1,null,null,null),p=m.exports,y={components:{SearchBar:p},data:function(){return{fields:[],formItems:[],fieldsArr:[],query:{}}},watch:{},beforeCreate:function(){this.fields=o.fields},created:function(){this.fieldsArr=o.fieldsArr,this.query=o.query,this.formItems=o.formItems},methods:{searchHandle:function(e){},searchReset:function(){}}},b=y,v=Object(h["a"])(b,u,c,!1,null,null,null),g=v.exports,k=n("db72"),_=(n("96cf"),n("3b8d")),q=n("b775");function w(e){return Object(q["a"])({url:"/test/list",method:"get",params:e})}var S={tableData:[],total:0},I={QUERYLIST:function(e,t){e.tableData=t.rows,e.total=t.total}},L={queryList:function(){var e=Object(_["a"])(regeneratorRuntime.mark((function e(t,n){var r,a=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,e.next=4,w(Object(k["a"])({},n)).then((function(e){var t=e.code,n=e.content;1===t?r("QUERYLIST",n):a.$message.error(n.message)}));case 4:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}()},C={namespaced:!0,state:S,mutations:I,actions:L},A={methods:{registStore:function(e){!e||this.storeKey in this.$store._modules.root._children||this.$store.registerModule(this.storeKey,e)},dispatch:function(e,t){return this.$store.dispatch(this.storeKey+"/"+e,t)},commit:function(e,t){this.$store.commit(this.storeKey+"/"+e,t)},updateState:function(e){this.commit("update",e)},resetState:function(){this.commit("reset")}}},R={components:{SearchBar:g},mixins:[A],data:function(){return{storeKey:"testList",formInline:{user:"",region:""},currentPage2:1,total:0,fields:[{key:"author",name:"用户"},{key:"display_time",name:"创建时间"},{key:"timestamp",name:"运单号"},{key:"reviewer",name:"审核人"},{key:"forecast",name:"预收金额"}],tableData:[],query:{author:void 0,reviewer:void 0},listQuery:{page:1,limit:10},multipleSelection:[]}},created:function(){this.registStore(C)},mounted:function(){this.queryList()},methods:{queryList:function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.dispatch("queryList")},onSubmit:function(){this.queryList(this.query)},handleReset:function(){this.listQuery.page=1,this.currentPage2=1,this.queryList()},handleSizeChange:function(e){this.listQuery.limit=e,this.listQuery.page=1,this.currentPage2=1,this.queryList()},handleCurrentChange:function(e){this.listQuery.page=e,this.queryList()},handleRowClick:function(e,t,n){this.$refs.handSelectTest_multipleTable.toggleRowSelection(e)},handleSelectionChange:function(e){this.multipleSelection=e},handleFunction1:function(e){}}},z=R,$=(n("ed37"),Object(h["a"])(z,i,s,!1,null,"40182864",null));t["default"]=$.exports},"8e39":function(e,t,n){"use strict";(function(e){var r=n("db72"),a=n("e7d0");t["a"]={components:{ExactSearch:a["a"]},props:{fields:{type:Array,default:function(){return[]}},fieldsArr:{type:Array,default:function(){return[]}},searchQuery:{type:Object,default:function(){return{}}},formItems:{type:Array,default:function(){return[]}},searchHandle:{type:Function,default:function(){return function(){}}},searchReset:{type:Function,default:function(){return function(){}}}},data:function(){return{query:{},defLabelWidth:"100px",subFormItems:[],carriersL:[],carriersR:[]}},watch:{formItems:{deep:!0,handler:function(t){e.isArray(t)&&t.length>0&&(this.subFormItems=e.cloneDeep(t))},immediate:!0}},mounted:function(){},methods:{getAllItems:function(){var t=this,n=this.$createElement,a={};return e.isEmpty(this.subFormItems)?a:(this.subFormItems.map((function(i){switch(i.type){case"input":a[i.key]=n("el-form-item",{class:2===i.span?"span-2":null,attrs:{size:i.props.size||"mini","label-width":i.labelWidth||t.defLabelWidth,label:i.label},key:i.key},[n("el-input",{attrs:{placeholder:i.placeholder||""},props:Object(r["a"])({},i.props),model:{value:t.query[i.key].value,callback:function(e){t.$set(t.query[i.key],"value",e)}}})]);break;case"select":a[i.key]=n("el-form-item",{class:"span-".concat(i.span)||!1,attrs:{size:i.props.size,"label-width":i.labelWidth||t.defLabelWidth,label:i.label},key:i.key},[n("el-select",{props:Object(r["a"])({},i.props),attrs:{clearable:!0},on:{change:function(){i.needConnect&&t.selctBackHandle(i.key,t.query[i.key].value)}},model:{value:t.query[i.key].value,callback:function(e){t.$set(t.query[i.key],"value",e)}}},[e.isArray(i.dataList)&&i.dataList.length>0?i.dataList.map((function(e,t){return n("el-option",{key:t+e.value,attrs:{label:e.label,value:e.value}})})):null])]);break;default:break}})),a)},packItems:function(){var e=[];return this.allItemsFn(e,this.fieldsArr)},unpackItems:function(){var e=[];return this.allItemsFn(e,this.fieldsArr)},allItemsFn:function(e,t){var n=this.getAllItems();t||(t=this.fieldsArr);for(var r=0,a=t.length;r<a;r++)n[t[r].key]&&e.push(n[t[r].key]);return e}}}}).call(this,n("bcbf"))},"98f4":function(e,t,n){"use strict";var r=n("136d"),a=n.n(r);a.a},"9d06":function(e,t,n){"use strict";(function(e){var r=n("8e39");t["a"]={mixins:[r["a"]],data:function(){return{}},watch:{},created:function(){this.query=e.cloneDeep(this.searchQuery)},methods:{searchResetTemporary:function(){this.query=e.cloneDeep(this.searchQuery),this.searchReset()}},render:function(){var e=arguments[0];return e("exact-search",{attrs:{query:this.query,"handle-search":this.searchHandle,"handle-reset":this.searchResetTemporary}},[e("template",{slot:"unpack"},[this.unpackItems()])])}}}).call(this,n("bcbf"))},bcbf:function(e,t,n){"use strict";n.r(t),n.d(t,"chunk",(function(){return de})),n.d(t,"difference",(function(){return fe})),n.d(t,"findIndex",(function(){return he})),n.d(t,"join",(function(){return me})),n.d(t,"uniq",(function(){return pe})),n.d(t,"sum",(function(){return ye})),n.d(t,"flatten",(function(){return be})),n.d(t,"filter",(function(){return ve})),n.d(t,"sortBy",(function(){return ge})),n.d(t,"pull",(function(){return ke})),n.d(t,"debounce",(function(){return _e})),n.d(t,"throttle",(function(){return qe})),n.d(t,"cloneDeep",(function(){return we})),n.d(t,"isArray",(function(){return Se})),n.d(t,"isEmpty",(function(){return Ie})),n.d(t,"isEqual",(function(){return Le})),n.d(t,"isNull",(function(){return Ce})),n.d(t,"isObject",(function(){return Ae})),n.d(t,"isString",(function(){return Re})),n.d(t,"isNumber",(function(){return ze})),n.d(t,"isUndefined",(function(){return $e})),n.d(t,"groupBy",(function(){return xe})),n.d(t,"get",(function(){return Fe})),n.d(t,"merge",(function(){return je})),n.d(t,"omit",(function(){return Oe})),n.d(t,"pick",(function(){return Ne})),n.d(t,"assignIn",(function(){return Ee})),n.d(t,"camelCase",(function(){return Pe})),n.d(t,"capitalize",(function(){return Qe})),n.d(t,"trim",(function(){return De})),n.d(t,"upperFirst",(function(){return Te}));var r=n("8103"),a=n.n(r),i=n("66c7"),s=n.n(i),u=n("e9a7"),c=n.n(u),l=n("bba4"),o=n.n(l),d=n("a9b9"),f=n.n(d),h=n("2593"),m=n.n(h),p=n("3eea"),y=n.n(p),b=n("4245"),v=n.n(b),g=n("9b02"),k=n.n(g),_=n("6edf"),q=n.n(_),w=n("4cfe"),S=n.n(w),I=n("501e"),L=n.n(I),C=n("e2a0"),A=n.n(C),R=n("1a8c"),z=n.n(R),$=n("eaa6"),x=n.n($),F=n("63ea"),j=n.n(F),O=n("13ea"),N=n.n(O),E=n("6747"),P=n.n(E),Q=n("0644"),D=n.n(Q),T=n("0f32"),W=n.n(T),H=n("b047c"),B=n.n(H),K=n("8730"),U=n.n(K),J=n("c707"),M=n.n(J),V=n("9380"),Y=n.n(V),G=n("4d8c"),X=n.n(G),Z=n("d180"),ee=n.n(Z),te=n("eed6"),ne=n.n(te),re=n("ded5"),ae=n.n(re),ie=n("51f5"),se=n.n(ie),ue=n("ceac"),ce=n.n(ue),le=n("91c8"),oe=n.n(le),de=oe.a,fe=ce.a,he=se.a,me=ae.a,pe=ne.a,ye=ee.a,be=X.a,ve=Y.a,ge=M.a,ke=U.a,_e=B.a,qe=W.a,we=D.a,Se=P.a,Ie=N.a,Le=j.a,Ce=x.a,Ae=z.a,Re=A.a,ze=L.a,$e=S.a,xe=q.a,Fe=k.a,je=v.a,Oe=y.a,Ne=m.a,Ee=f.a,Pe=o.a,Qe=c.a,De=s.a,Te=a.a},e7d0:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{class:["basic-search"]},[n("div",{staticClass:"basic-search__col-l"},[n("div",{staticClass:"formModalLayer"}),e._v(" "),n("el-form",{ref:e.refVal,attrs:{"label-position":e.labelPosition,"label-width":e.labelWidth+"px"},nativeOn:{submit:function(e){e.preventDefault()}}},[e._t("unpack")],2)],1),e._v(" "),n("div",{staticClass:"basic-search__col-r"},[n("el-button",{staticStyle:{background:"#4186f6"},attrs:{size:"small",type:"primary",icon:"el-icon-search"},on:{click:function(t){return e.handleSearch(e.query)}}},[e._v("查询")]),e._v(" "),n("el-button",{staticStyle:{"margin-left":"0"},attrs:{size:"small"},on:{click:function(t){return t.stopPropagation(),e.handleReset(t)}}},[e._v("重置")])],1)])])},a=[],i=(n("c5f6"),{components:{},props:{refVal:{type:String,default:"form"},labelPosition:{type:String,default:"right"},labelWidth:{type:Number,default:80},query:{type:Object,default:function(){return{}}},handleSearch:{type:Function,default:function(){}},handleReset:{type:Function,default:function(){}}},data:function(){return{}},watch:{},created:function(){},mounted:function(){},methods:{}}),s=i,u=(n("98f4"),n("2877")),c=Object(u["a"])(s,r,a,!1,null,"d4347e76",null);t["a"]=c.exports},ed37:function(e,t,n){"use strict";var r=n("097a"),a=n.n(r);a.a}}]);