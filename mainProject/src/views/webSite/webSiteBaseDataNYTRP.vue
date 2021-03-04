<template>
  <div class="webSite-container">
      <div style="padding: 0 2%;width: 96%">
        <el-tabs v-model="activeName" @tab-click="handleClick" type="card" class="baseDataTabsNYTYP">
          <el-tab-pane label="获取经营类型统计" name="first">
            <div id="businessChart">

            </div>
          </el-tab-pane>
          <el-tab-pane label="历年企业增长" name="second">
            <div id="enterpriseRiseChart">

            </div>
          </el-tab-pane>
          <el-tab-pane label="乡镇主体分布" name="third">
            <div id="townshipChart">

            </div>
          </el-tab-pane>
        </el-tabs>
      </div>
  </div>
</template>
<script>
  import echarts from '../../js/webSite/websiteEcharts';
  import {getBusinessChartData, getEnterpriseRiseChartData,getTownshipChartData} from "../../request/webService";
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
          this.getBusinessChartData()
        }else if(tab.name === 'second'){
          this.getEnterpriseRiseChartData()
        }else{
          this.getTownshipChartData()
        }
      },
      // 获取经营类型统计数据
      async getBusinessChartData(){
        let res = await getBusinessChartData();
        if(res.data.code == 0){
          let arrX = [];
          let arrY = [];
          arrX = res.data.data.map(item => item.types)
          arrY = res.data.data.map(item => item.counts)
          let arrYName = "数量/个"
          let seriesName = "经营类型"
          let dataObj = {
            arrX,
            arrY,
            arrYName,
            seriesName
          }
          this.initBusinessChart(dataObj)
        }
      },
      initBusinessChart(dataObj){
        echarts.soilEcharts('businessChart',dataObj)
      },
      // 获取历年企业增长数据
      async getEnterpriseRiseChartData(){
        let res = await getEnterpriseRiseChartData();
        if(res.data.code == 0){
          let arrX = []
          let arrY = []
          let arrYName = "数量/个"
          let seriesName = "历年企业增长"
          arrX = res.data.data.map(item => item.years)
          arrY = res.data.data.map(item => item.counts)
          let dataObj = {
            arrX,
            arrY,
            arrYName,
            seriesName
          }
          this.initEnterpriseRiseChart(dataObj)
        }
      },
      initEnterpriseRiseChart(dataObj){
        echarts.soilEcharts('enterpriseRiseChart',dataObj)
      },
      // 乡镇主体分布
      async getTownshipChartData(){
        let res = await getTownshipChartData();
        if(res.data.code == 0){
          let arrX = []
          let arrY = []
          let arrYName = "数量/个"
          let seriesName = "乡镇主体分布"
          arrX = res.data.data.map(item => item.pname)
          arrY = res.data.data.map(item => item.unittypecount)
          let dataObj = {
            arrX,
            arrY,
            arrYName,
            seriesName
          }
          this.initTownshipChart(dataObj)
        }
      },
      initTownshipChart(dataObj){
        echarts.soilEcharts('townshipChart',dataObj)
      },
    },
    async mounted () {
      this.getBusinessChartData()
    },
  }
</script>
<style>
  .baseDataTabsNYTYP>.el-tabs__header{
    width: 404px;
  }
  .baseDataTabsNYTYP>.el-tabs__header .el-tabs__item.is-active{
    background-color: #58a79f;
    color: #fff;
  }
  .el-tabs__item:hover{
    color: #000;
  }
  #businessChart, #enterpriseRiseChart, #townshipChart{
    width: 100%;
    height: 500px
  }
</style>
