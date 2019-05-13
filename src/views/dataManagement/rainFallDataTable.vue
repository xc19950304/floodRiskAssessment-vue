<template>
  <div class="app-container">
    <div class="filter-container">
      <el-button class="filter-item" style="margin-left: 10px;" type="primary" icon="el-icon-edit" @click="handleCreate">
        {{ $t('table.add') }}
      </el-button>
      <el-button v-waves :loading="downloadLoading" class="filter-item" type="primary" icon="el-icon-download" @click="">
        {{ $t('table.import') }}
      </el-button>
      <el-button v-waves :loading="downloadLoading" class="filter-item" type="primary" icon="el-icon-download" @click="">
        {{ $t('table.export') }}
      </el-button>
      <el-input placeholder="降雨站点名称" v-model="strSearch" clearable style=" width:200px; margin-left: 550px;" ></el-input>
      <el-button class="filter-item" style="margin-left: 10px;" type="primary" icon="el-icon-edit" @click="">
        {{ $t('table.search') }}
      </el-button>
    </div>
    <div class="filter-container">
      <el-table :data="rainFallData" style="width: 100%" border fit highlight-current-row >
        <el-table-column v-bind:label="$t('rainFallTable.id')" type="index" width="80"></el-table-column>
        <el-table-column prop="monitorDate" v-bind:label="$t('rainFallTable.monitorDate')" sortable width="140"></el-table-column>
        <el-table-column prop="rainFall" v-bind:label="$t('rainFallTable.rainFall')" sortable width="140"></el-table-column>
        <el-table-column prop="stationName" v-bind:label="$t('rainFallTable.stationName')" width="140"></el-table-column>
        <el-table-column prop="locationName" v-bind:label="$t('rainFallTable.locationName')" width="140"
                         :filters="[{ text: '长沙', value: '长沙' }, { text: '株洲', value: '株洲' }, { text: '湘潭', value: '湘潭' }]"
                         :filter-method="filterLocationName" filter-placement="bottom-end">
          <template slot-scope="scope">
            <el-tag :type="scope.row.locationName === '长沙' ? 'danger':(scope.row.locationName === '株洲' ? 'success' : 'info')"
                    disable-transitions="true" closable>{{scope.row.locationName}}
            </el-tag>
          </template>
        </el-table-column>
        <el-table-column :label="$t('rainFallTable.operate')">
          <template slot-scope="scope">
            <el-button size="mini" type="success" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <pagination v-show="total>0" :total="total" :page.sync="listQuery.page" :limit.sync="listQuery.limit" @pagination="getList"/>
    </div>
    <div>
      <el-dialog v-bind:title="textMap[dialogStatus]" v-bind:visible="dialogFormVisible">
        <el-form ref="dataForm" :rules="rules" :model="rainFallForm" label-position="left" label-width="70px" style="width: 400px; margin-left:50px;">
          <el-form-item :label="$t('rainFallTable.monitorDate')" prop="monitorDate">
            <el-input v-model="rainFallForm.monitorDate" />
          </el-form-item>
          <el-form-item :label="$t('rainFallTable.rainFall')" prop="rainFall">
            <el-input v-model="rainFallForm.rainFall" />
          </el-form-item>
          <el-form-item :label="$t('rainFallTable.stationName')" prop="stationName">
            <el-input v-model="rainFallForm.stationName" />
          </el-form-item>
          <el-form-item :label="$t('rainFallTable.locationName')" prop="locationName">
            <el-input v-model="rainFallForm.locationName" />
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">
            {{ $t('table.cancel') }}
          </el-button>
          <el-button type="primary" @click="dialogStatus==='create'?createData():updateData()">
            {{ $t('table.confirm') }}
          </el-button>
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script>
  import Pagination from '@/components/Pagination'
  export default {
    name: 'rainFallDataTable',
    components: { Pagination },

    data () {
      return {
        rainFallData: [{
          monitorDate: '2016-05-01',
          rainFall: 20.51,
          stationName: 'sad',
          locationName:'长沙',
        }, {
          monitorDate: '2016-05-01',
          rainFall: 21.35,
          stationName: 'angry',
          locationName:'湘潭',
        }, {
          monitorDate: '2016-05-01',
          rainFall: 21.75,
          stationName: 'happy',
          locationName:'株洲',
        },
        ],
        list: null,
        total: 0,
        listLoading: true,
        listQuery: {
          page: 1,
          limit: 10,
        },
        rainFallForm: {
          monitorDate:'',
          rainFall:'',
          stationName:'',
          locationName:'',
        },
        dialogFormVisible: false,
        dialogStatus: '',
        textMap: {
          edit: '编辑',
          create: '新建'
        },
        dialogPvVisible: false,
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
      rainFallDataInitial(row){
        this.rainFallForm = {
          monitorDate:row.monitorDate,
          rainFall:row.rainFall,
          stationName:row.stationName,
          locationName:row.locationName,
        }
      },
      handleCreate() {
        this.dialogStatus = 'create'
        this.dialogFormVisible = true
        this.$nextTick(() => {
          this.$refs['dataForm'].clearValidate()
        })
      },
      handleEdit (index, row) {
        console.log(index, row)
        this.rainFallDataInitial(row)
        this.dialogStatus = 'edit'
        this.dialogFormVisible = true
        this.$nextTick(() => {
          this.$refs['dataForm'].clearValidate()
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
      filterHandler (value, row, column) {
        const property = column['property']
        return row[property] === value
      },
      filterLocationName (value, row) {
        return row.locationName === value
      },
      createData() {
        this.dialogFormVisible = false
      },
      updateData(){
        this.dialogFormVisible = false
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

