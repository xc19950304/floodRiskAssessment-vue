<template>
  <div>
    <div class="filter-container">
      <el-form ref="form"  label-width="150px">
        <el-form-item label="训练集年份">
            <el-date-picker
              v-model="floodEnvRiskForm.startDate"
              type="date"
              placeholder="起始日期">
            </el-date-picker>
          <el-date-picker
            v-model="floodEnvRiskForm.endDate"
            type="date"
            placeholder="终止日期">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="训练集区域">
          <el-select v-model="floodEnvRiskForm.region" placeholder="请选择活动区域">
            <el-option label="长沙" value="changsha"></el-option>
            <el-option label="湘潭" value="xiangtan"></el-option>
            <el-option label="株洲" value="zhuzhou"></el-option>
            <el-option label="长沙+湘潭" value="changxiang"></el-option>
            <el-option label="湘潭+株洲" value="xiangzhu"></el-option>
            <el-option label="长沙+株洲" value="changzhu"></el-option>
            <el-option label="长沙+湘潭+株洲" value="changzhutan"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="模型选择" >
            <el-radio v-model="floodEnvRiskForm.model" label="0">默认模型</el-radio>
            <el-radio v-model="floodEnvRiskForm.model" label="1">自定义模型</el-radio>
        </el-form-item>
        <el-form-item label="神经网络模型参数">
          <el-input  placeholder="动量因子" :disabled="floodEnvRiskForm.model === '0'" v-model="floodEnvRiskForm.momentumFactor" style=" width:200px"> </el-input>
          <el-input  placeholder="学习速率" :disabled="floodEnvRiskForm.model === '0'" v-model="floodEnvRiskForm.learningRate" style=" width:200px"> </el-input>
          <el-input  placeholder="迭代阈值" :disabled="floodEnvRiskForm.model === '0'" v-model="floodEnvRiskForm.threshold" style=" width:200px"> </el-input>
          <el-input  placeholder="迭代次数" :disabled="floodEnvRiskForm.model === '0'" v-model="floodEnvRiskForm.iterations" style=" width:200px"> </el-input>
          <el-input  placeholder="激活函数" :disabled="floodEnvRiskForm.model === '0'" v-model="floodEnvRiskForm.activeFunction" style=" width:200px"> </el-input>
        </el-form-item>
        <el-form-item label="遗传算法参数">
          <el-input  placeholder="种群规模" :disabled="floodEnvRiskForm.model === '0'" v-model="floodEnvRiskForm.population"  style=" width:200px"> </el-input>
          <el-input  placeholder="进化迭代次数" :disabled="floodEnvRiskForm.model === '0'" v-model="floodEnvRiskForm.evolutions"  style=" width:200px"> </el-input>
          <el-input  placeholder="交叉概率" :disabled="floodEnvRiskForm.model === '0'" v-model="floodEnvRiskForm.cross" style=" width:200px"> </el-input>
          <el-input  placeholder="变异概率" :disabled="floodEnvRiskForm.model === '0'" v-model="floodEnvRiskForm.variation" style=" width:200px"> </el-input>
        </el-form-item>
      </el-form>
    </div>
    <div class="filter-container" style="text-align:center">
      <el-button style="margin-top: 12px;" type="primary" @click="previousStep">上一步</el-button>
      <el-button style="margin-top: 12px;" @click="">清空</el-button>
      <el-button style="margin-top: 12px;" type="primary" @click="confirmTask">提交任务</el-button>
    </div>
    <div>
      <el-dialog title="提示" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
        <span>确定提交该洪涝灾害评估任务吗?(不可更改)</span>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="submitTask"
                     v-loading.fullscreen.lock="fullscreenLoading"
                     element-loading-text="任务提交中......"
                     element-loading-spinner="el-icon-loading"
                     element-loading-background="rgba(211,211,211, 0.7)">确 定</el-button>
         </span>
      </el-dialog>
    </div>
  </div>
</template>

<script>
  export default {
    name: '',
    data() {
      return {
        dialogVisible:false,
        fullscreenLoading: false,
        imageSrc:'@/assets/iconfont/finish.jpg',
        floodEnvRiskForm:{
          startDate:'',
          endDate:'',
          region:'',
          model:'0',
          momentumFactor:'',
          learningRate:'',
          threshold:'',
          iterations:'',
          activeFunction:'',
          population:'',
          evolutions:'',
          cross:'',
          variation:'',
        }
      }
    },
    methods: {
      confirmTask(){
        this.dialogVisible = true
      },
      previousStep(){
        this .$emit('listenToReturnPrevious')
      },
      submitTask() {
        this.dialogVisible = false
        this.$emit('listenToFloodEnvRiskInfo', "")
        this.fullscreenLoading = true
        setTimeout(() => {
          this.fullscreenLoading = false
          this.dialogVisible = false
          this.$notify({
            title: '任务提交成功',
            message: '请前往 <strong>路域风险任务管理模块</strong> 查看任务执行进度！',
            type: 'success',
            dangerouslyUseHTMLString: true,
            duration:'2000'

          })}, 1000);
      },
    },
  }
</script>

<style scoped>

</style>
