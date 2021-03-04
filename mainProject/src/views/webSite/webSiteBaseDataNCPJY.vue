<template>
  <div class="webSite-container">
    <div style="padding: 0 2%;width: 96%">
      <el-tabs v-model="activeName" @tab-click="handleClick" type="card" class="baseDataTabsNCPJY">
        <el-tab-pane label="耕地面积" name="first">
          <div id="landAreaChart">

          </div>
        </el-tab-pane>
        <el-tab-pane label="植保防治" name="second">
          <div id="plantControlChart">

          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script>
  import echarts from '../../js/webSite/websiteEcharts';
  import {getLandAreaChartData,getPlantControlChartData} from "../../request/webService";
  export default {
    name: '',
    data () {
      return {
        businessChart: true,
        enterpriseRiseChart: false,
        townshipChart: false,
        activeName: 'first'
      }
    },
    methods: {
      handleClick(tab, event) {
        if(tab.name === 'first'){
          this.getLandAreaChartData()
        }else{
          this.getPlantControlChartData()
        }
      },

      // 耕地面积
      async getLandAreaChartData(){
        let res = await getLandAreaChartData();
        if(res.data.code == 0){
          let arrX = []
          let arrY = []
          let arrYName = "面积/亩"
          let seriesName = "耕地面积/亩"
          arrX = res.data.data.map(item => item.dataYear)
          arrY = res.data.data.map(item => item.sumArea)
          let dataObj = {
            arrX,
            arrY,
            arrYName,
            seriesName
          }
          this.initLandAreaChart(dataObj)
        }
      },
      initLandAreaChart(dataObj){
        echarts.soilEcharts('landAreaChart',dataObj)
      },
      // 植保防治
      async getPlantControlChartData(){
        let res = await getPlantControlChartData();
        if(res.data.code == 0){
          let arrX = []
          let arrY = []
          let arrYName = "面积/亩"
          let seriesName = "防治面积/亩"
          arrX = res.data.data.map(item => item.years)
          arrY = res.data.data.map(item => item.defenseArea)
          let dataObj = {
            arrX,
            arrY,
            arrYName,
            seriesName
          }
          this.initPlantControlChart(dataObj)
        }
      },
      initPlantControlChart(dataObj){
        echarts.soilEcharts('plantControlChart',dataObj)
      },
    },
    async mounted () {
      this.getLandAreaChartData()
    },
  }
</script>
<style>
  .baseDataTabsNCPJY>.el-tabs__header{
    width: 195px;
  }
  .baseDataTabsNCPJY>.el-tabs__header .el-tabs__item.is-active{
    background-color: #58a79f;
    color: #fff;
  }
  .el-tabs__item:hover{
    color: #000;
  }
  #landAreaChart, #plantControlChart{
    width: 100%;
    height: 500px
  }
</style>
