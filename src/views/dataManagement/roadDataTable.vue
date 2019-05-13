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
      <el-input placeholder="路段名称" v-model="strSearch" clearable style=" width:200px; margin-left: 550px;" ></el-input>
      <el-button class="filter-item" style="margin-left: 10px;" type="primary" icon="el-icon-edit" @click="">
        {{ $t('table.search') }}
      </el-button>
    </div>
    <div class="filter-container">
      <el-table :data="data" style="width: 100%" border fit highlight-current-row >
        <el-table-column v-bind:label="$t('roadDataTable.id')" type="index" width="80"></el-table-column>
        <el-table-column prop="roadName" v-bind:label="$t('roadDataTable.roadName')" width="100"></el-table-column>
        <el-table-column prop="roadLevel" v-bind:label="$t('roadDataTable.roadLevel')" width="120"></el-table-column>
        <el-table-column prop="roadMiles" v-bind:label="$t('roadDataTable.roadMiles')" width="120"></el-table-column>
        <el-table-column prop="lanesNumber" v-bind:label="$t('roadDataTable.lanesNumber')" width="100"></el-table-column>
        <el-table-column prop="annualAverageADailyTrafficVolume" v-bind:label="$t('roadDataTable.annualAverageADailyTrafficVolume')" sortable width="180"></el-table-column>
        <el-table-column prop="statisticalYear" v-bind:label="$t('roadDataTable.statisticalYear')" sortable width="120"></el-table-column>
        <el-table-column prop="designSpeed" v-bind:label="$t('roadDataTable.designSpeed')" width="140"></el-table-column>
        <el-table-column prop="locationName" v-bind:label="$t('roadDataTable.locationName')" width="100"
                         :filters="[{ text: '长沙', value: '长沙' }, { text: '株洲', value: '株洲' }, { text: '湘潭', value: '湘潭' }]"
                         :filter-method="filterLocationName" filter-placement="bottom-end">
          <template slot-scope="scope">
            <el-tag :type="scope.row.locationName === '长沙' ? 'danger':(scope.row.locationName === '株洲' ? 'success' : 'info')"
                    disable-transitions="true" closable>{{scope.row.locationName}}
            </el-tag>
          </template>
        </el-table-column>
        <el-table-column :label="$t('roadDataTable.operate')">
          <template slot-scope="scope">
            <el-button size="mini" type="success" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <pagination v-show="total>0" :total="total"  :page="listQuery.page" :limit="listQuery.limit" @pagination="getList"/>
    </div>
    <div>
      <el-dialog v-bind:title="dialogName[dialogStatus]" v-bind:visible="dialogVisible">
        <el-form ref="dataForm" :rules="rules" :model="form" label-position="left" label-width="150px" style="width: 400px; margin-left:50px;">
          <el-form-item :label="$t('roadDataTable.roadName')" prop="roadName">
            <el-input v-model="form.roadName" />
          </el-form-item>
          <el-form-item :label="$t('roadDataTable.roadLevel')" prop="roadLevel">
            <el-input v-model="form.roadLevel" />
          </el-form-item>
          <el-form-item :label="$t('roadDataTable.roadMiles')" prop="roadMiles">
            <el-input v-model="form.roadMiles" />
          </el-form-item>
          <el-form-item :label="$t('roadDataTable.lanesNumber')" prop="lanesNumber">
            <el-input v-model="form.lanesNumber" />
          </el-form-item>
          <el-form-item :label="$t('roadDataTable.designSpeed')" prop="designSpeed">
            <el-input v-model="form.designSpeed" />
          </el-form-item>
          <el-form-item :label="$t('roadDataTable.designSpeed')" prop="designSpeed">
            <el-input v-model="form.designSpeed" />
          </el-form-item>
          <el-form-item :label="$t('roadDataTable.annualAverageADailyTrafficVolume')" prop="annualAverageADailyTrafficVolume">
            <el-input v-model="form.annualAverageADailyTrafficVolume" />
          </el-form-item>
          <el-form-item :label="$t('roadDataTable.statisticalYear')" prop="statisticalYear">
            <el-input v-model="form.statisticalYear" />
          </el-form-item>
          <el-form-item :label="$t('roadDataTable.locationName')" prop="locationName">
            <el-input v-model="form.locationName" />
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">
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
  import { parseTime } from '@/utils'
  import Pagination from '@/components/Pagination'
  export default {
    name: 'roadDataTable',
    components: { Pagination },

    data () {
      return {
        data: [{
          roadName: '广八路',
          roadLevel: 1,
          roadMiles: 16,
          lanesNumber: 2,
          designSpeed: 30,
          annualAverageADailyTrafficVolume: 5000,
          statisticalYear: 1995,
          locationName: '长沙',
        }, {
          roadName: '八一路',
          roadLevel: 2,
          roadMiles: 16,
          lanesNumber: 2,
          designSpeed: 30,
          annualAverageADailyTrafficVolume: 5800,
          statisticalYear: 2002,
          locationName: '湘潭',
        },{
          roadName: '广八路',
          roadLevel: 3,
          roadMiles: 16,
          lanesNumber: 3,
          designSpeed: 70,
          annualAverageADailyTrafficVolume: 15000,
          statisticalYear: 2007,
          locationName: '株洲',
        },],
        tableKey: 0,
        list: null,
        total: 0,
        listLoading: true,
        listQuery: {
          page: 1,
          limit: 10,
        },
        form: {
          roadName:'',
          roadLevel:'',
          roadMiles:'',
          lanesNumber:'',
          designSpeed:'',
          annualAverageADailyTrafficVolume:'',
          statisticalYear:'',
          locationName:'',
        },
        dialogVisible: false,
        dialogStatus: '',
        dialogName: {
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
      dataInitial(row){
        this.form = {
          roadName:row.roadName,
          roadLevel:row.roadLevel,
          lanesNumber:row.roadMiles,
          lanesNumber:row.lanesNumber,
          designSpeed:row.designSpeed,
          annualAverageADailyTrafficVolume:row.annualAverageADailyTrafficVolume,
          statisticalYear:row.statisticalYear,
          locationName:row.locationName,
        }
      },
      handleCreate() {
        this.dialogStatus = 'create'
        this.dialogVisible = true
        this.$nextTick(() => {
          this.$refs['form'].clearValidate()
        })
      },
      handleEdit (index, row) {
        this.dataInitial(row)
        this.dialogStatus = 'edit'
        this.dialogVisible = true
        this.$nextTick(() => {
          this.$refs['form'].clearValidate()
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
      filterLocationName (value, row) {
        return row.locationName === value
      },
      createData() {
        this.dialogVisible = false
      },
      updateData(){
        this.dialogVisible = false
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
