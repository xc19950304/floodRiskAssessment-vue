<template>
  <div class="app-container">
    <div class="filter-container">
      <el-button class="filter-item" style="margin-left: 10px;" type="primary" icon="el-icon-edit" @click="handleCreate">
        {{ $t('table.add') }}
      </el-button>
      <el-button v-waves :loading="downloadLoading" class="filter-item" type="primary" icon="el-icon-download" @click="handleDownload">
        {{ $t('table.import') }}
      </el-button>
      <el-button v-waves :loading="downloadLoading" class="filter-item" type="primary" icon="el-icon-download" @click="handleDownload">
        {{ $t('table.export') }}
      </el-button>
    </div>
    <div class="filter-container">
      <el-table :data="waterLevelData" style="width: 100%" border fit highlight-current-row >
        <el-table-column v-bind:label="$t('waterLevelTable.id')" type="index" width="80"></el-table-column>
        <el-table-column prop="monitorDate" v-bind:label="$t('waterLevelTable.monitorDate')" sortable width="140"></el-table-column>
        <el-table-column prop="waterLevel" v-bind:label="$t('waterLevelTable.waterLevel')" sortable width="140"></el-table-column>
        <el-table-column prop="flow" v-bind:label="$t('waterLevelTable.flow')" sortable width="140"></el-table-column>
        <el-table-column prop="waringWaterLevel" v-bind:label="$t('waterLevelTable.waringWaterLevel')" sortable width="140"></el-table-column>
        <el-table-column prop="stationName" v-bind:label="$t('waterLevelTable.stationName')" width="140"></el-table-column>
        <el-table-column prop="locationName" v-bind:label="$t('waterLevelTable.locationName')" width="140"
          :filters="[{ text: '长沙', value: '长沙' }, { text: '株洲', value: '株洲' }, { text: '湘潭', value: '湘潭' }]"
          :filter-method="filterLocationName" filter-placement="bottom-end">
          <template slot-scope="scope">
            <el-tag :type="scope.row.locationName === '长沙' ? 'danger':(scope.row.locationName === '株洲' ? 'success' : 'info')"
                    disable-transitions="true" closable>{{scope.row.locationName}}
            </el-tag>
          </template>
        </el-table-column>
        <el-table-column :label="$t('waterLevelTable.operate')">
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
        <el-form ref="dataForm" :rules="rules" :model="waterLevelForm" label-position="left" label-width="70px" style="width: 400px; margin-left:50px;">
          <el-form-item :label="$t('waterLevelTable.monitorDate')" prop="monitorDate">
            <el-input v-model="waterLevelForm.monitorDate" />
          </el-form-item>
          <el-form-item :label="$t('waterLevelTable.waterLevel')" prop="waterLevel">
            <el-input v-model="waterLevelForm.waterLevel" />
          </el-form-item>
          <el-form-item :label="$t('waterLevelTable.flow')" prop="flow">
            <el-input v-model="waterLevelForm.flow" />
          </el-form-item>
          <el-form-item :label="$t('waterLevelTable.stationName')" prop="stationName">
            <el-input v-model="waterLevelForm.stationName" />
          </el-form-item>
          <el-form-item :label="$t('waterLevelTable.waringWaterLevel')" prop="waringWaterLevel">
            <el-input v-model="waterLevelForm.waringWaterLevel" />
          </el-form-item>
          <el-form-item :label="$t('waterLevelTable.locationName')" prop="locationName">
            <el-input v-model="waterLevelForm.locationName" />
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
    name: 'waterLevelDataTable',
    components: { Pagination },

    data () {
      return {
        waterLevelData: [{
          monitorDate: '2016-05-01',
          waterLevel: 20.51,
          stationName: 'sad',
          locationName:'长沙',
        }, {
          monitorDate: '2016-05-01',
          waterLevel: 21.35,
          stationName: 'angry',
          locationName:'湘潭',
        }, {
          monitorDate: '2016-05-01',
          waterLevel: 21.75,
          stationName: 'happy',
          locationName:'株洲',
        }, {
          monitorDate: '2016-05-02',
          waterLevel: 19.50,
          stationName: 'sad',
          locationName:'长沙',
        }, {
          monitorDate: '2016-05-02',
          waterLevel: 22.32,
          stationName: 'angry',
          locationName:'湘潭',
        }, {
          monitorDate: '2016-05-02',
          waterLevel: 15.95,
          stationName: 'happy',
          locationName:'株洲',
        },{
          monitorDate: '2016-05-03',
          waterLevel: 16.75,
          stationName: 'sad',
          locationName:'长沙',
        }, {
          monitorDate: '2016-05-03',
          waterLevel: 15.25,
          stationName: 'angry',
          locationName:'湘潭',
        }, {
          monitorDate: '2016-05-03',
          waterLevel: 25.57,
          stationName: 'happy',
          locationName:'株洲',
        },{
          monitorDate: '2016-05-04',
          waterLevel: 27.50,
          stationName: 'sad',
          locationName:'长沙',
        }, {
          monitorDate: '2016-05-04',
          waterLevel: 23.15,
          stationName: 'angry',
          locationName:'湘潭',
        }, {
          monitorDate: '2016-05-04',
          waterLevel: 17.54,
          stationName: 'happy',
          locationName:'株洲',
        },{
          monitorDate: '2016-05-05',
          waterLevel: 21.51,
          stationName: 'sad',
          locationName:'长沙',
        }, {
          monitorDate: '2016-05-05',
          waterLevel: 19.65,
          stationName: 'angry',
          locationName:'湘潭',
        }, {
          monitorDate: '2016-05-05',
          waterLevel: 20.75,
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
        waterLevelForm: {
          monitorDate:'',
          waterLevel:'',
          flow:'',
          waringWaterLevel:'',
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
      waterLevelDataInitial(row){
        this.waterLevelForm = {
          monitorDate:row.monitorDate,
          waterLevel:row.waterLevel,
          flow:row.flow,
          waringWaterLevel:row.waringWaterLevel,
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
        this.waterLevelDataInitial(row)
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
      handleClose(tag) {
        this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
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
