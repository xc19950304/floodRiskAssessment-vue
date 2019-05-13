/**
 * Created by WebStorm.
 * User: nirongxu
 * Date: 2018/12/8
 * Description: 文件描述
 */
import zhLocale from 'element-ui/lib/locale/lang/zh-CN'
const cn = {
  routeNmae: {
    home: '主页',
    article: '文章管理',
    publishArticle: '发表文章',
    publishArticleEditor: '发表文章-富文本',
    icon: '图标',
    builtInIcon: '内置图标',
    shuttleBox: '穿梭框',
    demoShuttle: '穿梭框demo',
    permissions: '权限管理',
    pageControl: '页面权限',
    btnControl: '按钮权限',
    table: '表格',
    multiDataTable: '多选数据表格',
    filterTable: '筛选表格',
    dragSort: '拖拽排序',
    upload: '上传',
    fileUpload: '文件上传',
    editor: '编辑器',
    markdown: 'markdown',
    wangeditor: 'wangeditor',
    multiDirectory: '多级目录',
    'menu2-1': '二级-1',
    'menu2-2': '二级-2',
    'menu2-3': '二级-3',
    'menu3-1': '三级-1',
    'menu3-2': '三级-2',
    'menu3-3': '三级-3',
    'menu4-1': '四级-1',
    'menu4-2': '四级-2',
    'menu5-1': '五级-1',
    systemSettings: '系统设置',
    navMenu : '导航菜单',

    roadEnvRiskManagement:'路域环境风险分析',
      floodRiskAssessment: '洪涝灾害评估',
      roadDamageExtraction: '道路损毁提取',
      trafficFlowDistribution: '交通流量分配',


    roadEnvDataManagement:'路域环境数据管理',
      waterLevelData:'水位数据',
      rainFallData:'降雨数据',
      geoEnviromentData:'孕灾环境数据',
      peopleData:'承灾环境数据',
      roadBasicData:'路网基础数据',

    disasterAnalysisResults: '路域风险任务管理',
      taskProcess:'任务进度查看',
      roadMap:'地图数据展示',
  },
  rightMenu: {
    close: '关闭',
    closeOther: '关闭其他',
    closeAll: '全部关闭'
  },
  role: {
    superAdmin: '超级管理员',
    admin: '管理员',
    ordinary: '普通用户'
  },
  userDropdownMenu: {
    basicInfor: '基本资料',
    changePassword: '修改密码',
    logout: '退出'
  },

  table: {
    dynamicTips1: '固定表头, 按照表头顺序排序',
    dynamicTips2: '不固定表头, 按照点击顺序排序',
    dragTips1: '默认顺序',
    dragTips2: '拖拽后顺序',
    title: '标题',
    importance: '重要性',
    type: '类型',
    remark: '点评',
    search: '搜索',
    add: '添加',
    export: '导出',
    import:'导入',
    reviewer: '审核人',
    id: '序号',
    date: '时间',
    author: '作者',
    readings: '阅读数',
    status: '状态',
    actions: '操作',
    edit: '编辑',
    publish: '发布',
    draft: '草稿',
    delete: '删除',
    cancel: '取 消',
    confirm: '确 定',
    ranking:'洪涝级别'
  },

  waterLevelTable: {
    id:'序号',
    monitorDate:'监测时间',
    waterLevel:'水位',
    flow:'流量',
    waringWaterLevel:'警戒水位',
    stationName:'站点名称',
    locationName:'县信息',
    operate:'操作'
  },
  rainFallTable: {
    id:'序号',
    monitorDate:'监测时间',
    rainFall:'降雨量',
    stationName:'站点名称',
    locationName:'县信息',
    operate:'操作'
  },
 geoEnvTable: {
   id:'序号',
   slope:'地形坡度',
   soiErosionLevel:'土壤侵蚀等级',
   year:'年份',
   locationName:'区域名称',
   operate:'操作'
 },
 peopleTable:{
    id:'序号',
    populationDensity:'人口密度',
    gdp:'区域GDP',
    year:'年份',
    locationName:'区域名称',
    operate:'操作'
  },
  roadDataTable: {
    id:'序号',
    roadName:'路段名称',
    roadLevel:'路段行政等级',
    roadMiles:'路段里程(km)',
    lanesNumber:'车道数量',
    designSpeed:'设计时速(km/h)',
    annualAverageADailyTrafficVolume:'路段年平均日交通量',
    statisticalYear:'统计年份',
    locationName:'县信息',
    operate:'操作'
  },
  reservoirTable: {
    id:'序号',
    reservoirName:'水库名称',
    reservoirStorage:'水库库容',
    monitorDate:'监测时间',
    locationName:'县信息',
    operate:'操作'
  },
  taskTable: {
    id:'序号',
    taskName:'任务名称',
    type:'任务类型',
    createTime:'创建时间',
    creator:'创建者',
    createId:'创建人',
    status:'任务状态',
    operate:'操作'
  },
  ...zhLocale   //  合并element-ui内置翻译
}

export default cn
