<template>
  <div class="app-container" v-if="">
    <div class="filter-container">
      <el-button v-waves :loading="downloadLoading" class="filter-item" type="primary" icon="el-icon-download" @click="">
        {{ $t('table.import') }}
      </el-button>
      <el-button v-waves :loading="downloadLoading" class="filter-item" type="primary" icon="el-icon-download" @click="">
        {{ $t('table.export') }}
      </el-button>
      <el-input placeholder="任务名称" v-model="strSearch" clearable style=" width:200px; margin-left: 550px;" ></el-input>
      <el-button class="filter-item" style="margin-left: 10px;" type="primary" icon="el-icon-edit" @click="">
        {{ $t('table.search') }}
      </el-button>
    </div>
    <div class="filter-container">
      <el-table :data="taskData" style="width: 100%" border fit highlight-current-row >
        <el-table-column v-bind:label="$t('taskTable.id')" type="index" width="80"></el-table-column>
        <el-table-column prop="taskName" v-bind:label="$t('taskTable.taskName')" width="140"></el-table-column>
        <el-table-column prop="type" v-bind:label="$t('taskTable.type')" width="140"
                         :filters="[{ text: '洪涝灾害评估', value: '洪涝灾害评估' },
                         { text: '道路损毁提取', value: '道路损毁提取' },
                         { text: '交通流量分配', value: '交通流量分配' }]"
                         :filter-method="filterTaskType" filter-placement="bottom-end"></el-table-column>
        <el-table-column prop="createId" v-bind:label="$t('taskTable.creator')" width="140"></el-table-column>
        <el-table-column prop="createTime" v-bind:label="$t('taskTable.createTime')" width="140" sortable></el-table-column>
        <el-table-column prop="status" v-bind:label="$t('taskTable.status')" width="140"
                         :filters="[{ text: '已取消', value: '已取消' },
                         { text: '待执行', value: '待执行' },
                         { text: '进行中', value: '进行中' },
                         { text: '已完成', value: '已完成' }]"
                         :filter-method="filterStatus" filter-placement="bottom-end">
          <template slot-scope="scope">
            <el-tag :type="scope.row.status === '已取消' ? 'danger':(scope.row.status === '待执行' ? 'success' : (scope.row.status === '进行中' ? 'primary' :'info'))"
                    disable-transitions="true">{{scope.row.status}}
            </el-tag>
          </template>
        </el-table-column>
        <el-table-column :label="$t('rainFallTable.operate')">
          <template slot-scope="scope">
            <el-button size="mini" type="success" v-if="scope.row.status === '待执行'" @click="handleEdit(scope.row)">编辑任务</el-button>
            <el-button size="mini" type="danger" v-if="scope.row.status === '待执行'" @click="handleDelete(scope.$index, scope.row)">取消任务</el-button>
            <el-button size="mini" type="primary" v-if="scope.row.status != '待执行'" @click="handleShow(scope.row)">查看任务</el-button>
          </template>
        </el-table-column>
      </el-table>
      <pagination v-show="total>0" :total="total" :page.sync="listQuery.page" :limit.sync="listQuery.limit" @pagination="getList"/>
    </div>
  </div>
</template>

<script>
  import Pagination from '@/components/Pagination'
  export default {
    name: 'taskTable',
    components: { Pagination },
    data () {
      return {
        taskData: [{
          taskName: '长沙-洪涝灾害评估',
          type: '洪涝灾害评估',
          createTime: '2017-03-11',
          createId:'12345',
          creator:'熊畅',
          status: '已取消'
        }, {
          taskName: '湘潭-道路损毁提取',
          type: '道路损毁提取',
          createTime: '2017-03-11',
          createId:'12345',
          creator:'熊畅',
          status: '待执行'
        }, {
          taskName: '株洲-交通流量分配',
          type: '交通流量分配',
          createTime: '2017-03-11',
          createId:'12345',
          creator:'熊畅',
          status:'进行中'
        },{
          taskName: '株洲-道路损毁提取',
          type: '道路损毁提取',
          createTime: '2017-03-11',
          createId:'12345',
          creator:'熊畅',
          status: '已完成'
        },
        ],
        list: null,
        total: 0,
        listLoading: true,
        listQuery: {
          page: 1,
          limit: 10,
        },
        taskTable: {
          id:'',
          taskName:'',
          type:'',
          createTime:'',
          createId:'',
          status:'',
          operate:''
        },
        downloadLoading: false,
        strSearch: '',
      }
    },
    created() {
      this.getList()
    },

    methods: {
      getList() {
        this.listLoading = true
        this.list = this.tableData
        this.total = 100
      },
      handleShow (row) {
        if(row.type === '道路损毁提取') {
          this.$router.push({path: '/roadMap'})
        }
        else
        this.$message({
          showClose: true,
          message:  row,
          type: 'success'
        })
      },
      handleEdit(row){
        this.$message({
          showClose: true,
          message:  row,
          type: 'success'
        })
      },
      handleDelete (index, row) {
        console.log(index, row)
        this.$message({
          showClose: true,
          message:  row,
          type: 'success'
        })
      },
      filterTaskType (value, row) {
        return row.type === value
      },
      filterStatus (value, row) {
        return row.status === value
      },
    }
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
