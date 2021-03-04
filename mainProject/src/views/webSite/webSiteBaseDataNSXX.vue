<template>
  <div class="webSite-container">
    <div style="padding: 0 2%;width: 96%">
      <el-tabs v-model="activeName" @tab-click="handleClick" type="card" class="baseDataTabsNSXX">
        <el-tab-pane label="生猪养殖产量" name="first">
          <div id="pigProductChart">

          </div>
        </el-tab-pane>
        <el-tab-pane label="造林面积" name="second">
          <div id="afforestateAreaChart">

          </div>
        </el-tab-pane>
        <el-tab-pane label="畜禽养殖" name="third">
          <div id="livestockChart">

          </div>
        </el-tab-pane>

      </el-tabs>
    </div>
  </div>
</template>
<script>
  import echarts from '../../js/webSite/websiteEcharts';
  import {getPigProductChartData,getAfforestateAreaChartData,getLivestockChartData} from "../../request/webService";
  export default {
    name: '',
    data () {
      return {
        activeName: 'first'
      }
    },
    methods: {
      handleClick(tab, event) {
        if(tab.name === 'first'){
          this.getPigProductChartData()
        }else if(tab.name === 'second'){
          this.getAfforestateAreaChartData()
        }else if(tab.name === 'third'){
          this.getLivestockChartData()
        }
      },
      // 生猪养殖产量
      async getPigProductChartData(){
        let res = await getPigProductChartData();
        if(res.data.code == 0){
          let arrX = []
          let arrY = []
          let arrYName = "数量/头"
          let seriesName = "生猪养殖产量/头"
          arrX = res.data.data.map(item => item.townShip)
          arrY = res.data.data.map(item => item.value)
          let dataObj = {
            arrX,
            arrY,
            arrYName,
            seriesName,

          }
          this.initPigProductChart(dataObj)
        }
      },
      initPigProductChart(dataObj){
        echarts.soilEcharts('pigProductChart',dataObj)
      },

      // 造林面积
      async getAfforestateAreaChartData(){
        let res = await getAfforestateAreaChartData();
        if(res.data.code == 0){
          let arrX = []
          let arrY1 = []
          let arrY2 = []
          let arrYName = "数量/亩"
          let seriesName1 = "经济林"
          let seriesName2 = "用材林"
          arrX = res.data.data.map(item => item.townShip)
          arrY1 = res.data.data.map(item => item.economicForest)
          arrY2 = res.data.data.map(item => item.timberForest)
          let dataObj = {
            arrX,
            arrY1,
            arrY2,
            arrYName,
            seriesName1,
            seriesName2,
          }
          this.initAfforestateAreaChart(dataObj)
        }
      },
      initAfforestateAreaChart(dataObj){
        echarts.agriculturalProductEcharts2('afforestateAreaChart',dataObj)
      },

      // 畜牧养殖
      async getLivestockChartData(){
        let res = await getLivestockChartData();
        if(res.data.code == 0){
          let arrX = []
          let arrY1 = []
          let arrY2 = []
          let arrY3 = []
          let arrYName = "数量/头"
          let seriesName1 = "牛"
          let seriesName2 = "羊"
          let seriesName3 = "家禽"
          arrX = res.data.data.xData[0]
          arrY1 = res.data.data.series[0]
          arrY2 = res.data.data.series[1]
          arrY3 = res.data.data.series[2]
          let dataObj = {
            arrX,
            arrY1,
            arrY2,
            arrY3,
            arrYName,
            seriesName1,
            seriesName2,
            seriesName3
          }
          this.initLivestockChart(dataObj)
        }
      },
      initLivestockChart(dataObj){
        echarts.agriculturalProductEcharts3('livestockChart',dataObj)
      },
    },
    async mounted () {
      this.getPigProductChartData()
    },
  }
</script>
<style>
  .baseDataTabsNSXX>.el-tabs__header{
    width: 320px;
  }
  .baseDataTabsNSXX>.el-tabs__header .el-tabs__item.is-active{
    background-color: #58a79f;
    color: #fff;
  }
  .el-tabs__item:hover{
    color: #000;
  }
  #pigProductChart, #afforestateAreaChart, #livestockChart{
    width: 100%;
    height: 500px
  }
</style>
