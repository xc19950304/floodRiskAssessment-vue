<template>
  <div >
    <div class="filter-container">
      <el-form ref="form"  label-width="150px">
        <el-form-item label="区域道路">
          <el-input  placeholder="选择参与模型计算的该区域的道路" :disabled="true" v-model="roadForm.roadName" style=" width:300px"> </el-input>
          <el-button type="primary" round plain @click = "roadDialogOpen">道路选择</el-button>
        </el-form-item>
        <el-form-item label="道路参数(默认)">
          <el-button type="text"  @click = "">道路行政等级</el-button>
          <el-button type="text"  @click = "">设计时速</el-button>
          <el-button type="text"  @click = "">车道数量</el-button>
          <el-button type="text"  @click = "">年平均日交通量</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="filter-container" style="text-align:center">
      <el-button style="margin-top: 12px;" type="primary" @click="previousStep">上一步</el-button>
      <el-button style="margin-top: 12px;" @click="">清空</el-button>
      <el-button style="margin-top: 12px;" type="primary" @click="nextStep">下一步</el-button>
    </div>
    <div>
      <el-dialog title="道路选择" v-bind:visible="dialogVisible">
        <div class="filter-container">
          <el-transfer style="text-align: left; display: inline-block" v-model="roadForm.roadUID" :data="roadDataAll"
            :titles="['该区域所有', '所选道路']" :button-texts="['到左边', '到右边']">
          </el-transfer>
        </div>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">
            {{ $t('table.cancel') }}
          </el-button>
          <el-button type="primary" @click="roadChoose">
            {{ $t('table.confirm') }}
          </el-button>
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'roadImportanceAssessment',
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
        dialogVisible: false,
        roadDataAll: generateData(),
        roadForm: {
          roadUID:[],
          roadName:[],
        }
      }
    },
    methods: {
      previousStep(){
        this .$emit('listenToReturnPrevious')
      },
      nextStep() {
        this.$emit('listenToRoadImportanceInfo', "")
      },
      roadDialogOpen()
      {
        this.dialogVisible = true
      },
      roadChoose(){
        const data = [];
        for ( let i = 0; i <this.roadForm.roadUID.length; i++){
          let key = this.roadForm.roadUID[i]
          for ( let j = 0; j <this.roadDataAll.length; j++) {
            if(this.roadDataAll[j].key === key) {
              data.push(this.roadDataAll[j].label)
              break
            }
          }
        }
        this.roadForm.roadName = data
        this.dialogVisible = false
      },
    },
  }
</script>

<style scoped>

</style>
