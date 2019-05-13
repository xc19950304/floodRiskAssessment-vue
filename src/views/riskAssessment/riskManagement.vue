<template>
  <div class="app-container">
    <div class="filter-container">
      <el-steps :active="active" finish-status="success" process-status="process" align-center >
        <el-step title="环境选择"></el-step>
        <el-step title="淹没水深计算"></el-step>
        <el-step title="道路重要性评估"></el-step>
        <el-step title="灾害等级评估"></el-step>
      </el-steps>
    </div>
    <div class="filter-container">
      <div v-if="active === 0">
        <enviroment-choose v-on:listenToTaskInfo="getTaskInfo"
                          v-on:listenToReturnPrevious="reduceActiveStatus">active</enviroment-choose>
      </div>
      <div v-else-if="active === 1">
        <sub-merged-depth v-on:listenToSubMergeInfo="getSubMergeInfo"
                        v-on:listenToReturnPrevious="reduceActiveStatus"
                        :taskArea="taskForm.region"></sub-merged-depth>
      </div>
      <div v-else-if="active === 2">
        <road-importance-assessment v-on:listenToRoadImportanceInfo="getRoadImportanceInfo"
                                  v-on:listenToReturnPrevious="reduceActiveStatus"
                                  :taskArea="taskForm.region"></road-importance-assessment>
      </div>
      <div v-else-if="active === 3">
        <flood-env-risk-ranking v-on:listenToFloodEnvRiskInfo="getFloodEnvRiskInfo"
                             v-on:listenToReturnPrevious="reduceActiveStatus"
                             :taskArea="taskForm.region"></flood-env-risk-ranking>
      </div>
    </div>
  </div>
</template>

<script>
  const subMergedDepth = () => import('@/views/riskAssessment/subMergedDepth')
  const roadImportanceAssessment = () => import('@/views/riskAssessment/roadImportanceAssessment')
  const floodEnvRiskRanking = () => import('@/views/riskAssessment/floadEnvRiskRanking')
  const enviromentChoose = () => import('@/views/riskAssessment/enviromentChoose')
  export default {
    name: 'riskManagement',
    data() {
      return {
        active: 0,
        taskForm: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          note: '',
          floodInfo:'',
        },
        subMergedDepthTaskForm:{
          rainfallUID:[],
          delayTime:'',
          delayStrategy:'1',
          weightMatrix:[],
        },
        dialogVisible:false,
      };
    },
    methods: {
      addActiveStatus(){
        this.active++;
      },
      reduceActiveStatus(){
        this.active--;
      },
      getTaskInfo(data){
        this.taskForm = {
          name: data.name,
          region: data.region,
          date1: data.date1,
          date2: data.date2,
          note: data.note,
          floodInfo:data.floodInfo,
        }
        this.addActiveStatus()
      },
      getSubMergeInfo(data){
        this.subMergedDepthTaskForm = {
            rainfallUID:data.rainfallUID,
            delayTime:data.delayTime,
            delayStrategy:data.delayStrategy,
            weightMatrix:data.weightMatrix,
        },
        this.addActiveStatus()
      },
      getRoadImportanceInfo(data){
        this.addActiveStatus()
      },
      getFloodEnvRiskInfo (data){
        this.addActiveStatus()
        this.active = 0;
      },
    },
    components: {
      subMergedDepth: subMergedDepth,
      roadImportanceAssessment: roadImportanceAssessment,
      floodEnvRiskRanking:floodEnvRiskRanking,
      enviromentChoose:enviromentChoose,
    }
  }
</script>

<style scoped>
  .app-container {
    padding: 20px;
  }
  .filter-container {
    padding-bottom: 20px;
    padding-top: 10px;
  }
</style>
