webpackJsonp([4],{"+Ftx":function(t,e){},hhb3:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var l={name:"peopleDataTable",components:{Pagination:a("1onU").a},data:function(){return{peopleData:[{populationDensity:6e3,gdp:15e3,year:2012,locationName:"长沙"},{populationDensity:1400,gdp:2e3,year:1997,locationName:"湘潭"},{populationDensity:6100,gdp:52e3,year:2015,locationName:"株洲"}],list:null,total:0,listLoading:!0,listQuery:{page:1,limit:10},peopleForm:{populationDensity:"",gdp:"",year:"",locationName:""},dialogFormVisible:!1,dialogStatus:"",textMap:{edit:"编辑",create:"新建"},dialogPvVisible:!1,downloadLoading:!1,strSearch:""}},created:function(){this.getList()},methods:{getList:function(){this.listLoading=!0,this.list=this.tableData,this.total=100},peopleDataInitial:function(t){this.peopleForm={populationDensity:t.populationDensity,gdp:t.gdp,year:t.year,locationName:t.locationName}},handleCreate:function(){var t=this;this.dialogStatus="create",this.dialogFormVisible=!0,this.$nextTick(function(){t.$refs.dataForm.clearValidate()})},handleEdit:function(t,e){var a=this;console.log(t,e),this.peopleDataInitial(e),this.dialogStatus="edit",this.dialogFormVisible=!0,this.$nextTick(function(){a.$refs.dataForm.clearValidate()})},handleDelete:function(t,e){console.log(t,e),this.$message({showClose:!0,message:e,type:"success"})},filterHandler:function(t,e,a){return e[a.property]===t},filterLocationName:function(t,e){return e.locationName===t},createData:function(){this.dialogFormVisible=!1},updateData:function(){this.dialogFormVisible=!1}}},o={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},[a("div",{staticClass:"filter-container"},[a("el-button",{staticClass:"filter-item",staticStyle:{"margin-left":"10px"},attrs:{type:"primary",icon:"el-icon-edit"},on:{click:t.handleCreate}},[t._v("\n      "+t._s(t.$t("table.add"))+"\n    ")]),t._v(" "),a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",attrs:{loading:t.downloadLoading,type:"primary",icon:"el-icon-download"},on:{click:function(t){}}},[t._v("\n      "+t._s(t.$t("table.import"))+"\n    ")]),t._v(" "),a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",attrs:{loading:t.downloadLoading,type:"primary",icon:"el-icon-download"},on:{click:function(t){}}},[t._v("\n      "+t._s(t.$t("table.export"))+"\n    ")]),t._v(" "),a("el-input",{staticStyle:{width:"200px","margin-left":"550px"},attrs:{placeholder:"搜索",clearable:""},model:{value:t.strSearch,callback:function(e){t.strSearch=e},expression:"strSearch"}}),t._v(" "),a("el-button",{staticClass:"filter-item",staticStyle:{"margin-left":"10px"},attrs:{type:"primary",icon:"el-icon-edit"},on:{click:function(t){}}},[t._v("\n      "+t._s(t.$t("table.search"))+"\n    ")])],1),t._v(" "),a("div",{staticClass:"filter-container"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.peopleData,border:"",fit:"","highlight-current-row":""}},[a("el-table-column",{attrs:{label:t.$t("peopleTable.id"),type:"index",width:"80"}}),t._v(" "),a("el-table-column",{attrs:{prop:"populationDensity",label:t.$t("peopleTable.populationDensity"),sortable:"",width:"140"}}),t._v(" "),a("el-table-column",{attrs:{prop:"gdp",label:t.$t("peopleTable.gdp"),sortable:"",width:"140"}}),t._v(" "),a("el-table-column",{attrs:{prop:"year",label:t.$t("peopleTable.year"),width:"140"}}),t._v(" "),a("el-table-column",{attrs:{prop:"locationName",label:t.$t("peopleTable.locationName"),width:"140",filters:[{text:"长沙",value:"长沙"},{text:"株洲",value:"株洲"},{text:"湘潭",value:"湘潭"}],"filter-method":t.filterLocationName,"filter-placement":"bottom-end"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-tag",{attrs:{type:"长沙"===e.row.locationName?"danger":"株洲"===e.row.locationName?"success":"info","disable-transitions":"true",closable:""}},[t._v(t._s(e.row.locationName)+"\n          ")])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:t.$t("peopleTable.operate")},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{size:"mini",type:"success"},on:{click:function(a){return t.handleEdit(e.$index,e.row)}}},[t._v("编辑")]),t._v(" "),a("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(a){return t.handleDelete(e.$index,e.row)}}},[t._v("删除")])]}}])})],1),t._v(" "),a("pagination",{directives:[{name:"show",rawName:"v-show",value:t.total>0,expression:"total>0"}],attrs:{total:t.total,page:t.listQuery.page,limit:t.listQuery.limit},on:{"update:page":function(e){return t.$set(t.listQuery,"page",e)},"update:limit":function(e){return t.$set(t.listQuery,"limit",e)},pagination:t.getList}})],1),t._v(" "),a("div",[a("el-dialog",{attrs:{title:t.textMap[t.dialogStatus],visible:t.dialogFormVisible}},[a("el-form",{ref:"dataForm",staticStyle:{width:"400px","margin-left":"50px"},attrs:{rules:t.rules,model:t.peopleForm,"label-position":"left","label-width":"70px"}},[a("el-form-item",{attrs:{label:t.$t("peopleTable.populationDensity"),prop:"populationDensity"}},[a("el-input",{model:{value:t.peopleForm.populationDensity,callback:function(e){t.$set(t.peopleForm,"populationDensity",e)},expression:"peopleForm.populationDensity"}})],1),t._v(" "),a("el-form-item",{attrs:{label:t.$t("peopleTable.gdp"),prop:"gdp"}},[a("el-input",{model:{value:t.peopleForm.gdp,callback:function(e){t.$set(t.peopleForm,"gdp",e)},expression:"peopleForm.gdp"}})],1),t._v(" "),a("el-form-item",{attrs:{label:t.$t("peopleTable.year"),prop:"year"}},[a("el-input",{model:{value:t.peopleForm.year,callback:function(e){t.$set(t.peopleForm,"year",e)},expression:"peopleForm.year"}})],1),t._v(" "),a("el-form-item",{attrs:{label:t.$t("peopleTable.locationName"),prop:"locationName"}},[a("el-input",{model:{value:t.peopleForm.locationName,callback:function(e){t.$set(t.peopleForm,"locationName",e)},expression:"peopleForm.locationName"}})],1)],1),t._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.dialogFormVisible=!1}}},[t._v("\n          "+t._s(t.$t("table.cancel"))+"\n        ")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(e){"create"===t.dialogStatus?t.createData():t.updateData()}}},[t._v("\n          "+t._s(t.$t("table.confirm"))+"\n        ")])],1)],1)],1)])},staticRenderFns:[]};var i=a("C7Lr")(l,o,!1,function(t){a("+Ftx")},"data-v-6a7d3056",null);e.default=i.exports}});
//# sourceMappingURL=4.6df9e93febff744b249e.js.map