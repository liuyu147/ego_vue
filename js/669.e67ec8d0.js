"use strict";(self["webpackChunkvue_test"]=self["webpackChunkvue_test"]||[]).push([[669],{6669:function(t,a,e){e.r(a),e.d(a,{default:function(){return $}});var l=function(){var t=this,a=t._self._c;return a("div",[a("ParamsList"),a("PublicPagination",{attrs:{total:t.total}})],1)},s=[],n=function(){var t=this,a=t._self._c;return a("div",[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,border:""}},[a("el-table-column",{attrs:{prop:"id",label:"规格参数ID",width:"180","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{prop:"itemCatId",label:"产品关联ID",width:"180","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{prop:"paramData",label:"规格参数内容","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",{domProps:{innerHTML:t._s(e.row.paramData)}})]}}])})],1)],1)},o=[],r={data(){return{tableData:[]}},mounted(){this.Pages(1),this.$bus.$on("pagePub",(t=>{this.Pages(t)})),this.$api.selectItemParamAll().then((t=>{200===t.data.status&&(this.tableData=t.data.result,this.$bus.$emit("tal",t.data.result.length))}))},methods:{Pages(t){this.$api.selectTbItemAllByPage({page:t}).then((t=>{200===t.data.status&&(this.tableData=t.data.result)}))}}},u=r,i=e(1001),h=(0,i.Z)(u,n,o,!1,null,null,null),d=h.exports,p=function(){var t=this,a=t._self._c;return a("div",{staticClass:"pag"},[a("el-pagination",{attrs:{layout:"prev, pager, next,jumper",total:t.total},on:{"size-change":t.handleSize,"current-change":t.handleCurren}})],1)},c=[],b={data(){return{}},props:["total"],mounted(){},methods:{handleSize(t){console.log(t)},handleCurren(t){this.$bus.$emit("pagePub",t)}}},m=b,f=(0,i.Z)(m,p,c,!1,null,"48fc5f6a",null),g=f.exports,v={data(){return{total:1}},components:{ParamsList:d,PublicPagination:g},mounted(){this.$bus.$on("tal",(t=>{this.total=t,console.log(this.total)}))}},P=v,w=(0,i.Z)(P,l,s,!1,null,null,null),$=w.exports}}]);
//# sourceMappingURL=669.e67ec8d0.js.map