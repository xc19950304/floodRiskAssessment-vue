<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="12">
        <div class="card kjfs">
          <p class="title"><i class="fa fa-th-large fa-lg"></i>数据快捷查询</p>
          <ul>
            <li><router-link to="/rainFallData" class="kjfs kjfs-bluee"><span><i class="el-icon-tickets fa-2x"></i></span><span>降雨数据</span></router-link></li>
            <li><router-link to="/waterLevelData" class="kjfs kjfs-pinkk"><span><i class="fa fa-hand-stop-o fa-2x"></i></span><span>水位数据</span></router-link></li>
            <li><router-link to="/geoEnviromentData" class="kjfs kjfs-yelloww"><span><i class="fa fa-universal-access fa-2x"></i></span><span>孕灾体</span></router-link></li>

            <li><router-link to="/roadBasicData" class="kjfs kjfs-grennn"><span><i class="fa fa-cloud-upload fa-2x"></i></span><span>道路数据</span></router-link></li>
            <li><router-link to="/peopleData" class="kjfs kjfs-purplee"><span><i class="fa el-icon-menu fa-2x"></i></span><span>承载体</span></router-link></li>
            <li><router-link to="/" class="kjfs kjfs-lightBluee"><span><i class="fa fa-file-code-o fa-2x"></i></span><span>栅格影像</span></router-link></li>
          </ul>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="card dbsx">
          <p class="title"><i class="fa fa-file-text-o"></i>洪涝任务查询</p>
          <ul>
            <li><router-link to="#"><span>灾害评估</span><span class="num">1</span></router-link></li>
            <li><router-link to="#"><span>损毁提取</span><span class="num">6</span></router-link></li>
            <li><router-link to="#"><span>智能决策</span><span class="num">7</span></router-link></li>
            <li><router-link to="#"><span>降雨预测</span><span class="num">3</span></router-link></li>
          </ul>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <line-echarts id="lineEcharts" height="300px" ref="echarts"></line-echarts>
      </el-col>
    </el-row>

  </div>
</template>

<script>
import LineEcharts from '../../components/ECharts/lineEcharts'
import Maintable from '../dataManagement/roadDataTable'
export default {
  name: 'mainIndex',
  components: {Maintable, LineEcharts},
  mounted () {
    this.selfAdaption()
  },
  methods: {
    // echart自适应
    selfAdaption () {
      let that = this
      setTimeout(() => {
        window.onresize = function () {
          if (that.$refs.echarts) {
            that.$refs.echarts.chart.resize()
          }
        }
      }, 10)
    }
  }
}
</script>

<style lang="scss">
  $top:top;
  $bottom:bottom;
  $left:left;
  $right:right;
  $leftright: ($left, $right);
  $pinkk: #eec2d3;
  $bluee: #409eff;
  $yelloww: #f4d884;
  $grennn: #89dda0;
  $purplee: #78a2ea;
  $lightBluee: #b8d6ff;

  $list: bluee pinkk yelloww grennn purplee lightBluee;
  $list1: $bluee $pinkk $yelloww $grennn $purplee $lightBluee;
  %shadow{
    background: #fff;
    -webkit-box-shadow: 4px 4px 40px rgba(0, 0, 0, 0.2);
    box-shadow: 4px 4px 40px rgba(0, 0, 0, 0.2);
    border-color: rgba(0, 0, 0, 0.2);
    .title{
      font-size: 14px;
      padding: 10px;
      i{
        margin-#{$right}: 5px;
      }
    }
  }

  @mixin flex($direction:row,$content:space-between){
    display: flex;
    flex-direction: $direction;
    justify-content: $content;
  }
  .card{
    color: #666;
    @extend %shadow;

    ul{
      @include flex;
      li{
        flex: 1;
        a{
          color: #666666;
          align-items:center;
          padding-#{$top}: 20px;
          padding-#{$bottom}: 20px;
          @include flex(column);
          span{
            height: 44px;
          }
          .num{
            line-height: 44px;
            font-size: 42px;
            color: $bluee;
            margin: 0px;
          }
        }
        .kjfs-bluee{
          color: $bluee;
        }
        .kjfs-pinkk{
          color: $pinkk;
        }
        .kjfs-yelloww{
          color: $yelloww;
        }
        .kjfs-grennn{
          color: $grennn;
        }
        .kjfs-purplee{
          color: $purplee;
        }
        .kjfs-lightBluee{
          color: $lightBluee;
        }
        &:hover{
          .kjfs-bluee{
            color: #ffffff;
            background: $bluee;
          }
          .kjfs-pinkk{
            color: #ffffff;
            background: $pinkk;
          }
          .kjfs-yelloww{
            color: #ffffff;
            background: $yelloww;
          }
          .kjfs-grennn{
            color: #ffffff;
            background: $grennn;
          }
          .kjfs-purplee{
            color: #ffffff;
            background: $purplee;
          }
          .kjfs-lightBluee{
            color: #ffffff;
            background: $lightBluee;
          }
        }
      }
    }
    .table{
      padding: 21px;
      p{
        height: 52px;
        line-height: 52px;
        border: 1px solid #cccccc;
        overflow: hidden;
        border-#{$top}: none;
        @include flex( null,start);
        &:first-child{
          border-#{$top}: 1px solid #cccccc;
        }
        span{
        }
        .tit{
          width: 90px;
          min-width: 90px;
          height: 100%;
          text-align: center;
          border-#{$right}: 1px solid #cccccc;
          margin-#{$right}: 18px;
        }
        span.gitbox{
          flex: 1;
          height: 100%;
          overflow: hidden;
          @include flex(row,start);
          a{
            &:first-child{
              margin-#{$right}: 30px;
            }
          }
        }
      }
    }
  }
  #lineEcharts{
    margin-#{$top}: 20px;
    padding-#{$top}: 20px;
    @extend %shadow;
  }
  #maintable{
    margin-#{$top}: 30px;
    padding-#{$top}: 10px;
    @extend %shadow;
  }
</style>
