<template>
  <div class="webSite-container">
    <div style="padding: 0 2%;width: 96%">
      <el-tabs v-model="activeName" @tab-click="handleClick" type="card" class="baseDataTabsTDXX">
        <el-tab-pane label="农药" name="first">
          <div id="pesticide">

          </div>
        </el-tab-pane>
        <el-tab-pane label="农村用电量" name="second">
          <div id="dieselOil">

          </div>
        </el-tab-pane>
        <el-tab-pane label="化肥" name="third">
          <div id="chemicalFertilizer">

          </div>
        </el-tab-pane>
        <el-tab-pane label="地膜" name="fourth">
          <div id="film">

          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script>
  import echarts from '../../js/webSite/websiteEcharts';
  import {getPesticideChartData, getDieselOilChartData, getChemicalFertilizerChartData, getFilmChartData} from "../../request/webService";
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
          this.getPesticideChartData()
        }else if(tab.name === 'second'){
          this.getDieselOilChartData()
        }else if(tab.name === 'third'){
          this.getChemicalFertilizerChartData()
        }else if(tab.name === 'fourth'){
          this.getFilmChartData()
        }
      },
      // 农药
      async getPesticideChartData(){
        let res = await getPesticideChartData();
        if(res.data.code == 0){
          let arrX = []
          let arrY = []
          let arrYName = "数量/吨"
          let seriesName = "农药投入/吨"
          arrX = res.data.data.map(item => item.dataYear)
          arrY = res.data.data.map(item => item.value)
          let dataObj = {
            arrX,
            arrY,
            arrYName,
            seriesName
          }
          this.initPesticideChart(dataObj)
        }
      },
      initPesticideChart(dataObj){
        echarts.soilEcharts('pesticide',dataObj)
      },
      // 农村用电量
      async getDieselOilChartData(){
        let res = await getDieselOilChartData();
        if(res.data.code == 0){
          let arrX = []
          let arrY = []
          let arrYName = "单位/万度"
          let seriesName = "农村用电量投入/吨"
          arrX = res.data.data.map(item => item.dataYear)
          arrY = res.data.data.map(item => item.value)
          let dataObj = {
            arrX,
            arrY,
            arrYName,
            seriesName
          }
          this.initDieselOilChart(dataObj)
        }
      },
      initDieselOilChart(dataObj){
        echarts.soilEcharts('dieselOil',dataObj)
      },
      // 化肥
      async getChemicalFertilizerChartData(){
        let res = await getChemicalFertilizerChartData();
        if(res.data.code == 0){
          let arrX = []
          let arrY = []
          let arrYName = "数量/吨"
          let seriesName = "化肥投入/吨"
          arrX = res.data.data.map(item => item.dataYear)
          arrY = res.data.data.map(item => item.value)
          let dataObj = {
            arrX,
            arrY,
            arrYName,
            seriesName
          }
          this.initChemicalFertilizerChart(dataObj)
        }
      },
      initChemicalFertilizerChart(dataObj){
        echarts.soilEcharts('chemicalFertilizer',dataObj)
      },
      // 地膜
      async getFilmChartData(){
        let res = await getFilmChartData();
        if(res.data.code == 0){
          let arrX = []
          let arrY = []
          let arrYName = "数量/吨"
          let seriesName = "地膜投入/吨"
          arrX = res.data.data.map(item => item.dataYear)
          arrY = res.data.data.map(item => item.value)
          let dataObj = {
            arrX,
            arrY,
            arrYName,
            seriesName
          }
          this.initFilmChart(dataObj)
        }
      },
      initFilmChart(dataObj){
        echarts.soilEcharts('film',dataObj)
      },
    },
    async mounted () {
      this.getPesticideChartData()
    },
  }
</script>
<style>
  .baseDataTabsTDXX>.el-tabs__header{
    width: 305px;
  }
  .baseDataTabsTDXX>.el-tabs__header .el-tabs__item.is-active{
    background-color: #58a79f;
    color: #fff;
  }
  .el-tabs__item:hover{
    color: #000;
  }
  #pesticide, #dieselOil, #chemicalFertilizer, #film{
    width: 100%;
    height: 500px
  }
</style>
