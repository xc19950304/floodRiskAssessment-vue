<template>
  <div>
    <div>
      <el-form ref="form" :model="taskForm" label-width="80px">
        <el-form-item label="任务名称">
          <el-input v-model="taskForm.name" placeholder="输入本次风险评估任务名称" ></el-input>
        </el-form-item>
        <el-form-item label="任务区域">
          <el-select v-model="taskForm.region" placeholder="请选择活动区域">
            <el-option label="长沙" value="changsha"></el-option>
            <el-option label="湘潭" value="xiangtan"></el-option>
            <el-option label="株洲" value="zhuzhou"></el-option>
            <el-option label="长沙+湘潭" value="changxiang"></el-option>
            <el-option label="湘潭+株洲" value="xiangzhu"></el-option>
            <el-option label="长沙+株洲" value="changzhu"></el-option>
            <el-option label="长沙+湘潭+株洲" value="changzhutan"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="灾害场景">
          <el-input  placeholder="选择灾害评估具体场景" v-model="taskForm.floodInfo" style="width:300px" :disabled="true" > </el-input>
          <el-button type="primary" round plain @click = "floodSceneChoose">洪涝灾害选择</el-button>
        </el-form-item>
        <el-form-item label="任务备注">
          <el-input type="textarea" v-model="taskForm.note"></el-input>
        </el-form-item>
      </el-form>
    </div>
    <div class="filter-container" style="text-align:center">
      <el-button style="margin-top: 12px;" @click="">清空</el-button>
      <el-button style="margin-top: 12px;" type="primary" @click="dialog2open">下一步</el-button>
    </div>
    <div>
      <el-dialog title="洪涝场次选择" v-bind:visible="dialogVisible1">
        <div class="filter-container">
          <el-table :data="floodData" style="width: 100%" @row-click="floodRowChoose" border fit highlight-current-row >
            <el-table-column label="序号" type="index" width="100"></el-table-column>
            <el-table-column prop="floodName" label="洪涝场次"  width="140">
            </el-table-column>
            <el-table-column prop="startTime" label="起始时间" sortable width="160"></el-table-column>
            <el-table-column prop="endTime" label="终止时间" sortable width="160"></el-table-column>
            <el-table-column prop="floodRanking" label="洪涝级别" sortable width="159"
              :filters="[{ text: '较小', value: '较小' }, { text: '一般', value: '一般' },
              { text: '大', value: '大' }, { text: '特大', value: '特大' }]"
              :filter-method="filterFloodRanking" filter-placement="bottom-end">
              <template slot-scope="scope">
                <el-tag :type="scope.row.floodRanking === '较小' ? 'danger':
                (scope.row.floodRanking === '一般' ? 'success':(
                scope.row.floodRanking === '大' ? 'info' : 'warning'))"
                        disable-transitions >{{scope.row.floodRanking}}
                </el-tag>
              </template>
            </el-table-column>
          </el-table>
          <pagination v-show="total>0" :total="total" :page.sync="listQuery.page" :limit.sync="listQuery.limit" @pagination="getList"/>
        </div>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible1 = false">
            {{ $t('table.cancel') }}
          </el-button>
          <el-button type="primary" @click="floodChoose">
            {{ $t('table.confirm') }}
          </el-button>
        </div>
      </el-dialog>
    </div>
    <div>
      <el-dialog title="提示" :visible.sync="dialogVisible2" width="30%" :before-close="handleClose">
        <span>环境参数会影响后续模型参数默认值，请确认后进行下一步(不可更改)！</span>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible2 = false">取 消</el-button>
          <el-button type="primary" @click="nextStep">确 定</el-button>
         </span>
      </el-dialog>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'enviromentChoose',
    props:['experimentalArea','floodId'],
    data() {
      return {
        floodData:[{
          id:1,
          floodName: 'xxxssd',
          startTime: '2007-03-11',
          endTime: '2007-03-15',
          floodRanking:'一般',
          },{
          id:2,
          floodName: 'x131xxssd',
          startTime: '2007-05-21',
          endTime: '2007-05-26',
          floodRanking:'大',
        },{
          id:3,
          floodName: 'xxxssd',
          startTime: '2012-03-14',
          endTime: '2012-03-16',
          floodRanking:'较小',
        },{
          id:4,
          floodName: 'xxxssd',
          startTime: '2017-05-11',
          endTime: '2017-05-17',
          floodRanking:'一般',
        },{
          id:5,
          floodName: 'xxxssd',
          startTime: '2007-03-11',
          endTime: '2007-03-15',
          floodRanking:'一般',
        },{
          id:6,
          floodName: 'xxxssd',
          startTime: '2007-03-11',
          endTime: '2007-03-15',
          floodRanking:'一般',
        },{
          id:7,
          floodName: 'xxxssd',
          startTime: '2007-03-11',
          endTime: '2007-03-15',
          floodRanking:'特大',
        },{
          id:8,
          floodName: '11xxxssd',
          startTime: '2014-03-11',
          endTime: '2014-03-15',
          floodRanking:'一般',
        },{
          id:9,
          floodName: 'xxx546ssd',
          startTime: '2016-03-11',
          endTime: '2016-03-13',
          floodRanking:'较小',
        },{
          id:10,
          floodName: 'x321xxssd',
          startTime: '2016-06-11',
          endTime: '2016-06-25',
          floodRanking:'特大',
        },{
          id:11,
          floodName: 'xxxskjhsd',
          startTime: '2017-04-11',
          endTime: '2017-04-17',
          floodRanking:'大',
        }],
        taskForm: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          note: '',
          floodInfo:'',
        },
        floodRow:null,
        floodForm: {
          floodName:'',
          startTime:'',
          endTime:'',
          floodRanking:'',
          floodInfo:'',
        },
        dialogVisible1: false,
        dialogVisible2:false,
        total: 0,
        listQuery: {
          page: 1,
          limit: 10,
        },
      }
    },
    methods:
    {
      floodSceneChoose() {
        this.dialogVisible1 = true
        this.$nextTick(() => {
          this.$refs['dataForm'].clearValidate()
        })
      },
      filterFloodRanking (value, row) {
        return row.floodRanking === value
      },
      getList() {
        this.list = this.floodData
        this.total = 100
      },
      floodRowChoose(row){
        this.floodRow = row
      },
      floodChoose(){
        this.floodForm = {
          floodName: this.floodRow.floodName,
          startTime:this.floodRow.startTime,
          endTime:this.floodRow.endTime,
          floodRanking:this.floodRow.floodRanking,
        }
        this.taskForm.floodInfo = this.floodRow.floodName+' ( '+this.floodRow.startTime+'-'+this.floodRow.endTime+' ) '
        this.dialogVisible1 = false
      },
      previousStep(){
        this .$emit('listenToReturnPrevious')
      },
      nextStep(){
        this.dialogVisible2 = false
          this.$emit('listenToTaskInfo',this.taskForm)
      },
      dialog2open(){
        this.dialogVisible2 = true
      },
    },
  }
</script>

<style scoped>
  .app-container {
    padding: 20px;
  }
  .filter-container {
    padding-bottom: 10px;
  }
  .filter-item {
    display: inline-block;
    vertical-align: middle;
    margin-bottom: 10px;
  }
</style>
