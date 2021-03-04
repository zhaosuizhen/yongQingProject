<template>
  <div class="runningStatus">
    <!-- <el-button-group style="margin: 10px 0 30px">
      <el-button type="primary">运行状态</el-button>
      <el-button plain @click="gotoBackup">数据备份与还原</el-button>
    </el-button-group> -->
    <div class="pageTitle" style="width:100%;height:50px">
      数据库状态
      <div class="pageTitle" style="width:50%;float:right;z-index:99">
        <el-button type="primary" @click="refreshPage" round style="float:right;margin-right:20%">
          <a href="javascript:location.reload();" style="color:#fff;text-decoration:none;">刷新</a>
        </el-button>
      </div>
    </div>
    
    <el-row :gutter="20" style="margin-bottom:0px;">
      <el-col :span="12">
        <div class="partTitle">总览</div>
        <el-row class="partItem">
          <el-col :span="6" :offset="1">优炫数据库:</el-col>
          <el-col :span="17">v1.0 企业版</el-col>
        </el-row>
        <el-row class="partItem">
          <el-col :span="6" :offset="1">安装路径：</el-col>
          <el-col :span="17">/user/locd/sys/...</el-col>
        </el-row>
        <el-row class="partItem">
          <el-col :span="6" :offset="1">数据总量大小(GB)：</el-col>
          <el-col :span="17">{{dataTotalSize}}</el-col>
        </el-row>
      </el-col>
      <el-col :span="12">
        <div class="partTitle">运行状态：</div>
        <el-row class="partStatus">
          <el-col :span="6" :offset="1">
            <div v-if="status == 1" class="running status">运行中</div>
            <div v-else-if="status == 2" class="status stoped">已停止</div>
            <div v-else-if="status == 3" class="status fault">故障</div>
            <div v-else-if="status == 4" class="status unknow">未知</div>
          </el-col>
          <el-col :span="17">
            <div class="runningExm statusExm">
              <i></i>
              <span>运行中</span>
            </div>
            <div class="stopedExm statusExm">
              <i></i>
              <span>已停止</span>
            </div>
            <div class="faultExm statusExm">
              <i></i>
              <span>故障</span>
            </div>
            <div class="unknowExm statusExm">
              <i></i>
              <span>未知</span>
            </div>
          </el-col>
        </el-row>
        <el-row class="partItem">
          <el-col :span="6" :offset="1">启动时间：</el-col>
          <el-col :span="17">{{onTime}}</el-col>
        </el-row>
        <el-row class="partItem">
          <el-col :span="6" :offset="1">运行时长：</el-col>
          <el-col :span="17">{{runTime}}</el-col>
        </el-row>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="12">
        <div><b>用户数</b></div>
        <div id="userCountChart"></div>
      </el-col>
      <el-col :span="12">
        <div><b>进程状态</b></div>
        <div id="progressChart"></div>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="12">
        <div><b>会话状态</b></div>
        <div id="sessionChart"></div>
      </el-col>
      <el-col :span="12">
        <div><b>业务数据量</b></div>
        <div id="dataSizeChart"></div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import echarts from 'echarts'
import { userCount } from '@/utils/api/dataSecurity/safeSys'

export default {
  name: 'RunningStatusAdmin',
  data () {
    return {
      status: 1,
      dataTotalSize: 0,
      onTime: '',
      runTime: ''
    }
  },
  mounted () {
    userCount(this).then(result => {
      if (!result.data) {
        return false
      }
      this.dataTotalSize = result.data.dataTotelSize || 0
      this.onTime = result.data.onTime || ''
      this.runTime = result.data.runTime || ''

      let userCountList = result.data.userCountList || []
      let progressList = result.data.progressList || []
      let sessionCountList = result.data.sessionCountList || []
      let taskDataList = []
      taskDataList[0] = result.data.taskDataMap.agriculturalStores || 0
      taskDataList[1] = result.data.taskDataMap.cAgriculturalInputs || 0
      taskDataList[2] = result.data.taskDataMap.cFarming || 0
      taskDataList[3] = result.data.taskDataMap.cManagement || 0
      taskDataList[4] = result.data.taskDataMap.cMarketTransaction || 0
      taskDataList[5] = result.data.taskDataMap.cParcel || 0
      taskDataList[6] = result.data.taskDataMap.cParkInfo || 0
      taskDataList[7] = result.data.taskDataMap.cPlant || 0
      let xData = [
        '-18',
        '-16',
        '-14',
        '-12',
        '-10',
        '-8',
        '-6',
        '-4',
        '-2',
        '0'
      ]
      let barXData = [
        '农资网点数据',
        '投入品数据',
        '农事数据',
        '经营主体数据',
        '农产品交易数据',
        '耕地基本数据',
        '园区基本数据',
        '种植数据'
      ]
      this.initLineChart('userCountChart', '用户数', xData, userCountList)
      this.initLineChart('progressChart', '进程状态', xData, progressList)
      this.initLineChart('sessionChart', '会话状态', xData, sessionCountList)
      this.initBarChart('dataSizeChart', '业务数据量', barXData, taskDataList)
    })
  },
  methods: {
    //刷新页面
    refreshPage(){
      this.$router.push('/runningStatus')
    },
    //跳转至数据备份与还原页面
    gotoBackup(){
      this.$router.push('/dataBackup');
    },
    initLineChart (id, title, xData, yData) {
      let myChart = echarts.init(document.getElementById(id))
      let option = {
        // title: {
        //   text: title,
        //   textAlign: 'left',
        //   textStyle: {
        //     fontSize: 16
        //   }
        // },
        grid: {
          top: '10%',
          left: '0%',
          right: '0%',
          bottom: '0%',
          containLabel: true
        },
        xAxis: {
          name: 'min',
          type: 'category',
          boundaryGap: false,
          data: xData
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: yData,
            type: 'line'
          }
        ]
      }
      myChart.setOption(option)
      window.addEventListener('resize',() => {myChart.resize()})
    },
    initBarChart (id, title, xData, yData) {
      let myChart = echarts.init(document.getElementById(id))
      let option = {
        // title: {
        //   text: title,
        //   textAlign: 'left',
        //   x: 'center',
        //   y: 0,
        //   textStyle: {
        //     fontSize: 16
        //   }
        // },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'
          }
          // formatter: function (params) {
          //   for (var i = 0; i < params.length; i++) {
          //     return params[i].axisValue + ' min<br/>数据量：' + params[i].value
          //   }
          // }
        },
        grid: {
          top: '10%',
          left: '0%',
          right: '0%',
          bottom: '0%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            data: xData,
            axisLabel: {
              interval: 0,
              rotate: 30
            }
            // axisTick: {
            //   alignWithLabel: true
            // }
          }
        ],
        yAxis: [
          {
            // name: 'Count',
            type: 'value'
          }
        ],
        series: [
          {
            name: '数据量',
            type: 'bar',
            barWidth: '60%',
            data: yData,
            itemStyle: {
              normal: {
                color: params => {
                  const colorList = [
                    '#3398DB',
                    '#b127f8',
                    '#f819f5',
                    '#276cf8',
                    '#f8c427',
                    '#7b27f8',
                    '#27f8ec',
                    '#f8275d',
                    '#f49127',
                    '#f427d0'
                  ]
                  return colorList[params.dataIndex]
                }
              }
            }
          }
        ]
      }
      myChart.setOption(option)
      window.addEventListener('resize',() => {myChart.resize()})
    }
  }
}
</script>

<style scoped>
.partTitle {
  font-size: 16px;
  line-height: 32px;
  font-weight: 600;
  margin-bottom: 10px;
}
.partItem {
  font-size: 14px;
  line-height: 24px;
}
.partStatus {
  margin-bottom: 10px;
}
.status {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  text-align: center;
  line-height: 100px;
  font-weight: bold;
  font-size: 14px;
  color: #333;
}
.running {
  background-color: #98ff75;
}
.stoped {
  background-color: #f4ff5f;
}
.fault {
  background-color: #ff7064;
}
.unknow {
  background-color: #999999;
}
.statusExm {
  font-size: 14px;
  line-height: 24px;
}
.statusExm i {
  display: inline-block;
  width: 40px;
  height: 12px;
  vertical-align: middle;
}
.runningExm i {
  background-color: #98ff75;
}
.stopedExm i {
  background-color: #f4ff5f;
}
.faultExm i {
  background-color: #ff7064;
}
.unknowExm i {
  background-color: #999999;
}
#userCountChart,
#progressChart,
#sessionChart,
#dataSizeChart {
  width: 80%;
  min-width: 200px;
  height: 20vh;
}
</style>

