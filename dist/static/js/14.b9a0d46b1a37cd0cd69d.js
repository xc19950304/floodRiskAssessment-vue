webpackJsonp([14],{X8YI:function(t,o){},"n+1L":function(t,o,e){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var l={render:function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",[e("div",[e("el-form",{ref:"form",attrs:{model:t.taskForm,"label-width":"80px"}},[e("el-form-item",{attrs:{label:"任务名称"}},[e("el-input",{attrs:{placeholder:"输入本次风险评估任务名称"},model:{value:t.taskForm.name,callback:function(o){t.$set(t.taskForm,"name",o)},expression:"taskForm.name"}})],1),t._v(" "),e("el-form-item",{attrs:{label:"任务区域"}},[e("el-select",{attrs:{placeholder:"请选择活动区域"},model:{value:t.taskForm.region,callback:function(o){t.$set(t.taskForm,"region",o)},expression:"taskForm.region"}},[e("el-option",{attrs:{label:"长沙",value:"changsha"}}),t._v(" "),e("el-option",{attrs:{label:"湘潭",value:"xiangtan"}}),t._v(" "),e("el-option",{attrs:{label:"株洲",value:"zhuzhou"}}),t._v(" "),e("el-option",{attrs:{label:"长沙+湘潭",value:"changxiang"}}),t._v(" "),e("el-option",{attrs:{label:"湘潭+株洲",value:"xiangzhu"}}),t._v(" "),e("el-option",{attrs:{label:"长沙+株洲",value:"changzhu"}}),t._v(" "),e("el-option",{attrs:{label:"长沙+湘潭+株洲",value:"changzhutan"}})],1)],1),t._v(" "),e("el-form-item",{attrs:{label:"灾害场景"}},[e("el-input",{staticStyle:{width:"300px"},attrs:{placeholder:"选择灾害评估具体场景",disabled:!0},model:{value:t.taskForm.floodInfo,callback:function(o){t.$set(t.taskForm,"floodInfo",o)},expression:"taskForm.floodInfo"}}),t._v(" "),e("el-button",{attrs:{type:"primary",round:"",plain:""},on:{click:t.floodSceneChoose}},[t._v("洪涝灾害选择")])],1),t._v(" "),e("el-form-item",{attrs:{label:"任务备注"}},[e("el-input",{attrs:{type:"textarea"},model:{value:t.taskForm.note,callback:function(o){t.$set(t.taskForm,"note",o)},expression:"taskForm.note"}})],1)],1)],1),t._v(" "),e("div",{staticClass:"filter-container",staticStyle:{"text-align":"center"}},[e("el-button",{staticStyle:{"margin-top":"12px"},on:{click:function(t){}}},[t._v("清空")]),t._v(" "),e("el-button",{staticStyle:{"margin-top":"12px"},attrs:{type:"primary"},on:{click:t.dialog2open}},[t._v("下一步")])],1),t._v(" "),e("div",[e("el-dialog",{attrs:{title:"洪涝场次选择",visible:t.dialogVisible1}},[e("div",{staticClass:"filter-container"},[e("el-table",{staticStyle:{width:"100%"},attrs:{data:t.floodData,border:"",fit:"","highlight-current-row":""},on:{"row-click":t.floodRowChoose}},[e("el-table-column",{attrs:{label:"序号",type:"index",width:"100"}}),t._v(" "),e("el-table-column",{attrs:{prop:"floodName",label:"洪涝场次",width:"140"}}),t._v(" "),e("el-table-column",{attrs:{prop:"startTime",label:"起始时间",sortable:"",width:"160"}}),t._v(" "),e("el-table-column",{attrs:{prop:"endTime",label:"终止时间",sortable:"",width:"160"}}),t._v(" "),e("el-table-column",{attrs:{prop:"floodRanking",label:"洪涝级别",sortable:"",width:"159",filters:[{text:"较小",value:"较小"},{text:"一般",value:"一般"},{text:"大",value:"大"},{text:"特大",value:"特大"}],"filter-method":t.filterFloodRanking,"filter-placement":"bottom-end"},scopedSlots:t._u([{key:"default",fn:function(o){return[e("el-tag",{attrs:{type:"较小"===o.row.floodRanking?"danger":"一般"===o.row.floodRanking?"success":"大"===o.row.floodRanking?"info":"warning","disable-transitions":""}},[t._v(t._s(o.row.floodRanking)+"\n              ")])]}}])})],1),t._v(" "),e("pagination",{directives:[{name:"show",rawName:"v-show",value:t.total>0,expression:"total>0"}],attrs:{total:t.total,page:t.listQuery.page,limit:t.listQuery.limit},on:{"update:page":function(o){return t.$set(t.listQuery,"page",o)},"update:limit":function(o){return t.$set(t.listQuery,"limit",o)},pagination:t.getList}})],1),t._v(" "),e("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[e("el-button",{on:{click:function(o){t.dialogVisible1=!1}}},[t._v("\n          "+t._s(t.$t("table.cancel"))+"\n        ")]),t._v(" "),e("el-button",{attrs:{type:"primary"},on:{click:t.floodChoose}},[t._v("\n          "+t._s(t.$t("table.confirm"))+"\n        ")])],1)])],1),t._v(" "),e("div",[e("el-dialog",{attrs:{title:"提示",visible:t.dialogVisible2,width:"30%","before-close":t.handleClose},on:{"update:visible":function(o){t.dialogVisible2=o}}},[e("span",[t._v("环境参数会影响后续模型参数默认值，请确认后进行下一步(不可更改)！")]),t._v(" "),e("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[e("el-button",{on:{click:function(o){t.dialogVisible2=!1}}},[t._v("取 消")]),t._v(" "),e("el-button",{attrs:{type:"primary"},on:{click:t.nextStep}},[t._v("确 定")])],1)])],1)])},staticRenderFns:[]};var i=e("C7Lr")({name:"enviromentChoose",props:["experimentalArea","floodId"],data:function(){return{floodData:[{id:1,floodName:"xxxssd",startTime:"2007-03-11",endTime:"2007-03-15",floodRanking:"一般"},{id:2,floodName:"x131xxssd",startTime:"2007-05-21",endTime:"2007-05-26",floodRanking:"大"},{id:3,floodName:"xxxssd",startTime:"2012-03-14",endTime:"2012-03-16",floodRanking:"较小"},{id:4,floodName:"xxxssd",startTime:"2017-05-11",endTime:"2017-05-17",floodRanking:"一般"},{id:5,floodName:"xxxssd",startTime:"2007-03-11",endTime:"2007-03-15",floodRanking:"一般"},{id:6,floodName:"xxxssd",startTime:"2007-03-11",endTime:"2007-03-15",floodRanking:"一般"},{id:7,floodName:"xxxssd",startTime:"2007-03-11",endTime:"2007-03-15",floodRanking:"特大"},{id:8,floodName:"11xxxssd",startTime:"2014-03-11",endTime:"2014-03-15",floodRanking:"一般"},{id:9,floodName:"xxx546ssd",startTime:"2016-03-11",endTime:"2016-03-13",floodRanking:"较小"},{id:10,floodName:"x321xxssd",startTime:"2016-06-11",endTime:"2016-06-25",floodRanking:"特大"},{id:11,floodName:"xxxskjhsd",startTime:"2017-04-11",endTime:"2017-04-17",floodRanking:"大"}],taskForm:{name:"",region:"",date1:"",date2:"",note:"",floodInfo:""},floodRow:null,floodForm:{floodName:"",startTime:"",endTime:"",floodRanking:"",floodInfo:""},dialogVisible1:!1,dialogVisible2:!1,total:0,listQuery:{page:1,limit:10}}},methods:{floodSceneChoose:function(){var t=this;this.dialogVisible1=!0,this.$nextTick(function(){t.$refs.dataForm.clearValidate()})},filterFloodRanking:function(t,o){return o.floodRanking===t},getList:function(){this.list=this.floodData,this.total=100},floodRowChoose:function(t){this.floodRow=t},floodChoose:function(){this.floodForm={floodName:this.floodRow.floodName,startTime:this.floodRow.startTime,endTime:this.floodRow.endTime,floodRanking:this.floodRow.floodRanking},this.taskForm.floodInfo=this.floodRow.floodName+" ( "+this.floodRow.startTime+"-"+this.floodRow.endTime+" ) ",this.dialogVisible1=!1},previousStep:function(){this.$emit("listenToReturnPrevious")},nextStep:function(){this.dialogVisible2=!1,this.$emit("listenToTaskInfo",this.taskForm)},dialog2open:function(){this.dialogVisible2=!0}}},l,!1,function(t){e("X8YI")},"data-v-396ca2d2",null);o.default=i.exports}});
//# sourceMappingURL=14.b9a0d46b1a37cd0cd69d.js.map