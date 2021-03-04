<template>
  <div class="webSite-container">
    <div style="padding: 0 2%;width: 96%">
      <p class="tabTitle">土壤采样面积分布</p>
      <div id="soilChart">

      </div>
    </div>
  </div>
</template>
<script>
  import echarts from '../../js/webSite/websiteEcharts';
  import {getSoilChartData} from "../../request/webService";
  export default {
    name: '',
    data () {
      return {

      }
    },
    methods: {
      //获取土壤采样面积分布图表数据
      async getSoilChartData(){
        let res = await getSoilChartData();
        if(res.data.code == 0){
          let arrX = [];
          arrX = res.data.data.x;
          let arrY = [];
          arrY = res.data.data.series;
          let arrYName = "数量/亩"
          let seriesName = "土壤采样面积"
          let dataObj = {
            arrX,
            arrY,
            arrYName,
            seriesName
          }
          this.initSoilChart(dataObj)
        }
      },
      initSoilChart(dataObj){
        echarts.soilEcharts('soilChart',dataObj)
      },
    },
    async mounted () {
      await this.getSoilChartData()
    },
  }
</script>
<style>
  .tabTitle{
    text-align: left;
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 40px;
  }
  #soilChart{
    width: 100%;
    height: 500px
  }
</style>
