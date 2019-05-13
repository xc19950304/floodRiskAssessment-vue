/**
 * Created by WebStorm.
 * User: nirongxu
 * Date: 2018/12/8
 * Description: 文件描述
 */

import enLocale from 'element-ui/lib/locale/lang/en'
const en = {
  routeNmae: {
    home: 'home',
    article: 'article',
    publishArticle: 'publishArticle',
    publishArticleEditor: 'publishArticleEditor',
    icon: 'icon',
    builtInIcon: 'builtInIcon',
    shuttleBox: 'shuttleBox',
    demoShuttle: 'demoShuttle',
    permissions: 'permissions',
    pageControl: 'pageControl',
    btnControl: 'btnControl',
    table: 'table',
    multiDataTable: 'multiDataTable',
    filterTable: 'filterTable',
    dragSort: 'dragSort',
    upload: 'upload',
    fileUpload: 'fileUpload',
    editor: 'editor',
    markdown: 'markdown',
    wangeditor: 'wangeditor',
    multiDirectory: 'multiDirectory',
    'menu2-1': 'menu2-1',
    'menu2-2': 'menu2-2',
    'menu2-3': 'menu2-3',
    'menu3-1': 'menu3-1',
    'menu3-2': 'menu3-2',
    'menu3-3': 'menu3-3',
    'menu4-1': 'menu4-1',
    'menu4-2': 'menu4-2',
    'menu5-1': 'menu5-1',
    systemSettings: 'systemSettings',
    navMenu : 'navMenu',

    roadEnvRiskManagement:'roadEnvRiskManagement',
      floodRiskAssessment:'floodRiskAssessment',
      roadDamageExtraction: 'roadDamageExtraction',
      trafficFlowDistribution:'trafficFlowDistribution',

    roadEnvDataManagement:'roadEnvDataManagement',
      waterLevelData: 'waterLevelData',
      rainFallData: 'rainFallData',
      geoEnviromentData:'geoEnviromentData',
      peopleData:'peopleData',
      roadBasicData:'roadBasicData',

    disasterAnalysisResults:'disasterAnalysisResults',
    taskProcess:'taskProcess',
    roadMap:'roadMap',
  },
  rightMenu: {
    close: 'close',
    closeOther: 'closeOther',
    closeAll: 'closeAll'
  },
  role: {
    superAdmin: 'superAdmin',
    admin: 'admin',
    ordinary: 'ordinary'
  },
  userDropdownMenu: {
    basicInfor: 'basicInfor',
    changePassword: 'changePassword',
    logout: 'logout'
  },
  table: {
    type: 'type',
    search: 'search',
    add: 'add',
    export: 'export',
    import:'import',
    id: 'id',
    date: 'date',
    status: 'status',
    actions: 'actions',
    edit: 'edit',
    publish: 'publish',
    draft: 'draft',
    delete: 'delete',
    cancel: 'cancel',
    confirm: 'confirm',
    ranking:'ranking'
  },
  waterLevelTable: {
      id:'id',
      monitorDate:'monitorDate',
      waterLevel:'waterLevel',
      flow:'flow',
      waringWaterLevel:'waringWaterLevel',
      stationName:'stationName',
      locationName:'locationName',
      operate:'operate',
  },
  rainFallTable: {
    id:'id',
    monitorDate:'monitorDate',
    rainFall:'rainFall',
    stationName:'stationName',
    locationName:'locationName',
    operate:'operate'
  },
  geoEnvTable: {
    id:'id',
    slope:'slope',
    soiErosionLevel:'soiErosionLevel',
    year:'year',
    locationName:'locationName',
    operate:'operate'
  },
  peopleTable: {
    id:'id',
    populationDensity:'populationDensity',
    gdp:'gdp',
    year:'year',
    locationName:'locationName',
    operate:'operate'
  },
  roadDataTable: {
    id:'id',
    roadName:'roadName',
    roadLevel:'roadLevel',
    roadMiles:'roadMiles(km)',
    lanesNumber:'lanesNumber',
    designSpeed:'designSpeed(km/h)',
    annualAverageADailyTrafficVolume:'annualAverageADailyTrafficVolume',
    statisticalYear:'statisticalYear',
    locationName:'locationName',
    operate:'operate',
  },
  reservoirTable: {
    id:'id',
    reservoirName:'reservoirName',
    reservoirStorage:'reservoirStorage',
    monitorDate:'monitorDate',
    locationName:'locationName',
    operate:'operate'
  },
  taskTable: {
    id:'id',
    taskName:'taskName',
    creator:'creator',
    type:'type',
    createTime:'createTime',
    createId:'createId',
    status:'status',
    operate:'operate'
  },

  ...enLocale   //  合并element-ui内置翻译
}

export default en
