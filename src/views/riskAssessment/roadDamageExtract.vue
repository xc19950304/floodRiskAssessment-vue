<template>
  <div class="app-container">
    <div class="filter-container">
      <el-form ref="form" :model="taskForm" label-width="100px">
        <el-form-item label="任务名称">
          <el-input v-model="taskForm.name" placeholder="输入本次损毁道路提取任务名称" ></el-input>
        </el-form-item>
        <el-form-item label="影像分辨率">
          <el-input v-model="taskForm.resolution" placeholder="输入影像分辨率(m)" ></el-input>
        </el-form-item>
        <el-form-item label="影像数据选择" >
          <el-select v-model="sensorImageChoose" filterable remote multiple reserve-keyword size="large" placeholder="请输入区域关键词(eg:长沙)" :remote-method="remoteMethod" :loading="loading">
            <el-option v-for="item in sensorImageOptions" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="模型选择" >
          <el-radio v-model="taskForm.model" label="0">默认模型</el-radio>
          <el-radio v-model="taskForm.model" label="1">自定义边缘检测模型</el-radio>
        </el-form-item>
        <el-form-item label="边缘检测算法">
          <el-radio :disabled="taskForm.model === '0'" v-model="taskForm.operatorStrategy" label="0">Prewitt算子 [单边阈值]</el-radio>
          <el-radio :disabled="taskForm.model === '0'" v-model="taskForm.operatorStrategy" label="1">Sobel算子 [单边阈值]</el-radio>
          <el-radio :disabled="taskForm.model === '0'" v-model="taskForm.operatorStrategy" label="2">Roberts算子 [单边阈值]</el-radio>
          <el-radio :disabled="taskForm.model === '0'" v-model="taskForm.operatorStrategy" label="3">Canny算子 [双边阈值]</el-radio>
        </el-form-item>
        <el-form-item label="种子点间距">
          <el-input :disabled="taskForm.model === '0'" v-model="taskForm.distance" placeholder="尽可能取健康道路宽距的最小值(m)" ></el-input>
        </el-form-item>
        <el-form-item label="任务备注">
          <el-input type="textarea" v-model="taskForm.note"></el-input>
        </el-form-item>
      </el-form>
    </div>
    <div class="filter-container" style="text-align:center">
      <el-button style="margin-top: 12px;" @click="clearAll">清空</el-button>
      <el-button style="margin-top: 12px;" type="primary" @click="confirmTask">提交任务</el-button>
    </div>
    <div>
      <el-dialog title="提示" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
        <span>确定提交该道路损毁提取任务吗?(不可更改)</span>
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
  import{ test } from '@/api/waterLevel'
  export default {
    name: 'roadDamageExtract',
    data() {
      return {
        dialogVisible:false,
        fullscreenLoading: false,
        taskForm: {
          name: '',
          model:'0',
          operatorStrategy:'0',
          note: '',
          distance:'',
          resolution:''
        },
        sensorImageOptions: [],
        sensorImageChoose: [],
        sensorImageList: [],
        loading: false,
        states: ["长沙-遥感影像", "株洲-遥感影像", "湘潭-遥感影像"],
      }
    },
    mounted() {
      this.sensorImageList = this.states.map(item => {
        return { value: item, label: item };
      });
    },
    methods:{
      confirmTask(){
        this.dialogVisible = true
      },
      clearAll(){
        this.taskForm = {
          name: '',
          model:'0',
          operatorStrategy:'0',
          note: '',
          distance:''
        }
        this.sensorImageChoose = []
      },
      submitTask() {
        this.fullscreenLoading = true
        setTimeout(() => {
          this.fullscreenLoading = false;
          this.dialogVisible = false;
          this.clearAll();
          test().then(response => {
            alert('test ok-' + response.data);
          }).catch((error) => {
              console.log(error)
            });
          this.$notify({
            title: '任务提交成功',
            message: '请前往 <strong>路域风险任务管理模块</strong> 查看任务执行进度！',
            type: 'success',
            dangerouslyUseHTMLString: true,
            duration:'2000'

          })}, 1000);
      },
      remoteMethod(query) {
        if (query !== '') {
          this.loading = true;
          setTimeout(() => {
            this.loading = false;
            this.sensorImageOptions = this.sensorImageList.filter(item => {
              return item.label.toLowerCase()
                .indexOf(query.toLowerCase()) > -1;
            });
          }, 500);
        } else {
          this.sensorImageOptions = [];
        }
      },
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
