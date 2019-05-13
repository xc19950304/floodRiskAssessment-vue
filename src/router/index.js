import en from '../i18n/lang/en'
import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/login/index'
import Layout from '@/views/layout/layout'
import HomeMain from '@/views/index/mainIndex'

// 不是必须加载的组件使用懒加载
const NotFound = () => import('@/page404')
const waterLevelTable = () => import('@/views/dataManagement/waterLevelTable')
const peopleDataTable = () => import('@/views/dataManagement/peopleDataTable')
const rainFallDataTable = () => import('@/views/dataManagement/rainFallDataTable')
const geoEnvDataTable = () => import('@/views/dataManagement/geoEnvDataTable')
const roadBaseTable = () => import('@/views/dataManagement/roadDataTable')

const riskManagement = () => import('@/views/riskAssessment/riskManagement')
const roadDamageExtract = () => import('@/views/riskAssessment/roadDamageExtract')
const trafficFlowDistribution = () => import('@/views/riskAssessment/trafficFlowDistribution')

const taskTable = () => import('@/views/taskManagement/taskTable')
const roadMap = () => import('@/views/taskManagement/roadMap')


Vue.use(Router)
let routeNmae = en.routeNmae
let defaultRouter = [
  { path: '/',
    redirect: '/index',
    hidden: true,
    children: []
  },
  {
    path: '/login',
    component: Login,
    name: '',
    hidden: true,
    children: []
  },
  {
    path: '/index',
    iconCls: 'fa fa-dashboard', // 图标样式class
    name: routeNmae.home,
    component: Layout,
    alone: true,
    children: [
      {
        path: '/index',
        iconCls: 'fa fa-dashboard', // 图标样式class
        name: '主页',
        component: HomeMain,
        children: []
      }
    ]
  },
  {
    path: '/404',
    component: NotFound,
    name: '404',
    hidden: true,
    children: []
  },
  {
    path: '/',
    iconCls: 'el-icon-tickets', // 图标样式class
    name: routeNmae.roadEnvRiskManagement,
    component: Layout,
    children:[
      {
        path: '/riskAssessment',
        iconCls: '', // 图标样式class
        name: routeNmae.floodRiskAssessment,
        component: riskManagement,
        children: []
      },
      {
        path: '/roadDamageExtraction',
        iconCls: '', // 图标样式class
        name: routeNmae.roadDamageExtraction,
        component: roadDamageExtract,
        children: []
      },
      {
        path: '/trafficFlowDistribution',
        iconCls: '', // 图标样式class
        name: routeNmae.trafficFlowDistribution,
        component: trafficFlowDistribution,
        children: []
      },
    ]
  },
  {
    path: '/',
    iconCls: 'el-icon-tickets', // 图标样式class
    name: routeNmae.roadEnvDataManagement,
    component: Layout,
    children: [
      {
        path: '/waterLevelData',
        iconCls: '', // 图标样式class
        name: routeNmae.waterLevelData,
        component: waterLevelTable,
        children: []
      },
      {
        path: '/rainFallData',
        iconCls: '', // 图标样式class
        name: routeNmae.rainFallData,
        component: rainFallDataTable,
        children: []
      },
      {
        path: '/geoEnviromentData',
        iconCls: '', // 图标样式class
        name: routeNmae.geoEnviromentData,
        component: geoEnvDataTable,
        children: []
      },
      {
        path: '/roadBasicData',
        iconCls: '', // 图标样式class
        name: routeNmae.roadBasicData,
        component: roadBaseTable,
        children: []
      },
      {
        path: '/peopleData',
        iconCls: '', // 图标样式class
        name: routeNmae.peopleData,
        component: peopleDataTable,
        children: []
      },
    ]

  },
  {
    path: '/',
    iconCls: 'el-icon-tickets', // 图标样式class
    name: routeNmae.disasterAnalysisResults,
    component: Layout,
    children: [
      {
        path: '/taskProcess',
        iconCls: '', // 图标样式class
        name: routeNmae.taskProcess,
        component: taskTable,
        children: []
      },
      {
        path: '/roadMap',
        iconCls: '', // 图标样式class
        name: routeNmae.roadMap,
        component: roadMap,
        children: []
      },
    ]
  },
]

let addRouter = [
  { path: '*',
    redirect: '/404',
    hidden: true,
    children: []
  },

]
export default new Router({
  routes: defaultRouter
})
export {defaultRouter, addRouter}
