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
      <el-input placeholder="" v-model="strSearch" clearable style=" width:200px; margin-left: 550px;" ></el-input>
      <el-button class="filter-item" style="margin-left: 10px;" type="primary" icon="el-icon-edit" @click="">
        {{ $t('table.search') }}
      </el-button>
    </div>
    <div class="filter-container">
      <el-table :data="geoEnviromentData" style="width: 100%" border fit highlight-current-row >
        <el-table-column v-bind:label="$t('geoEnvTable.id')" type="index" width="80"></el-table-column>
        <el-table-column prop="slope" v-bind:label="$t('geoEnvTable.slope')" sortable width="140"></el-table-column>
        <el-table-column prop="soiErosionLevel" v-bind:label="$t('geoEnvTable.soiErosionLevel')" sortable width="140"></el-table-column>
        <el-table-column prop="year" v-bind:label="$t('geoEnvTable.year')" width="140"></el-table-column>
        <el-table-column prop="locationName" v-bind:label="$t('geoEnvTable.locationName')" width="140"
                         :filters="[{ text: '长沙', value: '长沙' }, { text: '株洲', value: '株洲' }, { text: '湘潭', value: '湘潭' }]"
                         :filter-method="filterLocationName" filter-placement="bottom-end">
          <template slot-scope="scope">
            <el-tag :type="scope.row.locationName === '长沙' ? 'danger':(scope.row.locationName === '株洲' ? 'success' : 'info')"
                    disable-transitions="true" closable>{{scope.row.locationName}}
            </el-tag>
          </template>
        </el-table-column>
        <el-table-column :label="$t('geoEnvTable.operate')">
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
        <el-form ref="dataForm" :rules="rules" :model="geoEnviromentForm" label-position="left" label-width="70px" style="width: 400px; margin-left:50px;">
          <el-form-item :label="$t('geoEnvTable.slope')" prop="slope">
            <el-input v-model="geoEnviromentForm.slope" />
          </el-form-item>
          <el-form-item :label="$t('geoEnvTable.soiErosionLevel')" prop="soiErosionLevel">
            <el-input v-model="geoEnviromentForm.soiErosionLevel" />
          </el-form-item>
          <el-form-item :label="$t('geoEnvTable.year')" prop="year">
            <el-input v-model="geoEnviromentForm.year" />
          </el-form-item>
          <el-form-item :label="$t('geoEnvTable.locationName')" prop="locationName">
            <el-input v-model="geoEnviromentForm.locationName" />
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
    name: '',
    components: { Pagination },

    data () {
      return {
        geoEnviromentData: [{
          slope: 30,
          soiErosionLevel: 2,
          year: 2002,
          locationName:'长沙',
        },{
          slope: 40,
          soiErosionLevel: 4,
          year: 2015,
          locationName:'长沙',
        },{
          slope: 15,
          soiErosionLevel: 1,
          year: 2019,
          locationName:'长沙',
        },
        ],
        list: null,
        total: 0,
        listLoading: true,
        listQuery: {
          page: 1,
          limit: 10,
        },
        geoEnviromentForm: {
          slope:'',
          soiErosionLevel:'',
          year:'',
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
      geoEnviromentDataInitial(row){
        this.geoEnviromentForm= {
          slope:row.slope,
          soiErosionLevel:row.soiErosionLevel,
          year:row.year,
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
        this.geoEnviromentDataInitial(row)
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
