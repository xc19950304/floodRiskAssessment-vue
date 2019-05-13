<template>
  <div >
    <div class="filter-container">
      <el-form ref="form" :model="subMergedDepthTaskForm" label-width="120px">
        <el-form-item label="栅格数据(默认)">
          <el-button type="text"  @click = "">DEM高程数据(点击查看)</el-button>
          <el-button type="text" @click = "">土地利用率数据(点击查看)</el-button>
        </el-form-item>
        <el-form-item label="水位站点(默认)">
          <el-input  placeholder="默认参与计算水位站点为所选区域"  :disabled="true" v-model="subMergedDepthTaskForm.waterStation" style=" width:300px"> </el-input>
        </el-form-item>
        <el-form-item label="降雨站点">
          <el-input  placeholder="选择参与模型计算的该区域的降雨站点" :disabled="true" v-model="subMergedDepthTaskForm.rainfallStation"style=" width:300px"> </el-input>
          <el-button type="primary" round plain @click = "floodSceneChoose">降雨站点选择</el-button>
          <el-button type="primary" round plain @click = "">降雨站点权值矩阵设置</el-button>
        </el-form-item>
        <el-form-item label="降雨延迟策略" >
          <template>
            <el-radio v-model="subMergedDepthTaskForm.delayStrategy" label="0">时间序列延迟策略</el-radio>
            <el-radio v-model="subMergedDepthTaskForm.delayStrategy" label="1">最高降雨量延迟策略</el-radio>
          </template>
        </el-form-item>
        <el-form-item label="延迟天数" >
          <el-select  placeholder="距最高水位发生的延迟天数" width="200" v-model="subMergedDepthTaskForm.delayTime">
            <el-option label="1天" value="1"></el-option>
            <el-option label="2天" value="2"></el-option>
            <el-option label="3天" value="3"></el-option>
            <el-option label="4天" value="4"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
    </div>
    <div class="filter-container" style="text-align:center">
      <el-button style="margin-top: 12px;" type="primary" @click="previousStep" disabled>上一步</el-button>
      <el-button style="margin-top: 12px;" @click="clearAll">清空</el-button>
      <el-button style="margin-top: 12px;" type="primary" @click="nextStep">下一步</el-button>
    </div>
    <div>
      <el-dialog title="降雨站点" v-bind:visible="dialogFormVisible">
        <div class="filter-container">
          <el-transfer
            style="text-align: left; display: inline-block"
            v-model="subMergedDepthTaskForm.rainfallUID"
            :data="stationDataAll"
            :titles="['区域降雨站点', '所选降雨站点']"
            :button-texts="['到左边', '到右边']">
          </el-transfer>
        </div>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">
            {{ $t('table.cancel') }}
          </el-button>
          <el-button type="primary" @click="rainStationChoose">
            {{ $t('table.confirm') }}
          </el-button>
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'SubMergedDepth',
    props:['taskArea'],
    data() {
      const generateData = _ => {
        const data = [];
        let flag = this.taskArea
        for (let i = 1; i <= 10; i++) {
          data.push({
            key: i,
            label: flag + ` ${ i }`,
            //disabled: i % 4 === 0
          });
        }
        return data;
      };
      return {
        subMergedDepthTaskForm:{
          waterStation: [],
          rainfallStation: [],
          rainfallUID:[],
          delayTime:'',
          delayStrategy:'1',
          weightMatrix:[],
        },
        dialogFormVisible:false,
        stationDataAll: generateData(),
      }
    },
    methods: {
      previousStep(){
        this .$emit('listenToReturnPrevious')
      },
      nextStep(){
        this.$emit('listenToSubMergeInfo',this.subMergedDepthTaskForm)
      },
      clearAll(){
      },
      floodSceneChoose(){
        this.dialogFormVisible = true
      },
      rainStationChoose(){
        //填充选择数据的UID到rainfallUID和rainfallStation中，后者展示，前者用于查数据库
        const data = [];
        for ( let i = 0; i <this.subMergedDepthTaskForm.rainfallUID.length; i++){
          let key = this.subMergedDepthTaskForm.rainfallUID[i]
          for ( let j = 0; j <this.stationDataAll.length; j++) {
            if(this.stationDataAll[j].key === key) {
              data.push(this.stationDataAll[j].label)
              break
            }
          }
        }
        this.subMergedDepthTaskForm.rainfallStation = data
        this.dialogFormVisible = false
      },
    }

  }
</script>

<style scoped>

</style>
