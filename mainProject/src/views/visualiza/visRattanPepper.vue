<template>
  <div class="webSite-container" style="overflow: hidden">
    <div class="management-top">

      <el-col :span="6" class="management-top-aside">

        <!-- <div class="management-top-div" @click="handleCount"> -->
        <div class="management-top-div">
          <div class="management-charts-title">农林牧渔</div>
          <div class="content_box">
            <div class="echarts_box" id="nongLinMuYu"></div>
          </div>
        </div>

        <!-- <div class="management-top-div" @click="handleInputsProportion"> -->
        <div class="management-top-div" style="height:95%">
          <div class="management-charts-title">农林牧渔产值</div>
          <div class="content_box">
            <div class="companyAdd">
              <div>名称（单位/万元）</div>
            </div>
            <div class="echarts_box" id="nongLinMuYuChanZhi" style="height:95%"></div>
          </div>
        </div>

      </el-col>

      <el-col :span="12" class="management-top-middle2" style="position: relative">
        
        <div style="width: 100%;height: 100%;">
          <industryAnalysisMap ref="mapModel" style="width:100%;height:100%"></industryAnalysisMap>
        </div>
        <!-- <div class="mapPointExample mapPointExample_TRP"></div> -->
      </el-col>

      <el-col :span="6" class="management-top-aside">

        <!-- <div class="management-top-div" @click="handlePesticide"> -->
        <div class="management-top-div">
          <div class="management-charts-title">植保防治</div>
          <div class="content_box">
            <div class="echarts_box" id="zhiBaoFangZhi"></div>
          </div>
        </div>

        <!-- <div class="management-top-div" @click="handleMulchFilm"> -->
        <div class="management-top-div">
          <div class="management-charts-title">投入品用量</div>
          <div class="content_box" style="padding:0">
            <div class="text_box">
              <template v-if="index%2 == 0">
                <div>
                  <span>农药/吨</span>
                  <span style="color:#FEE185">{{TRP_data_NY[TRP_data_NY.length - 1]}}</span>
                </div>
                <div>
                  <span>地膜/吨</span>
                  <span style="color:#85CBFE">{{TRP_data_DM[TRP_data_DM.length - 1]}}</span>
                </div>
              </template>
              <template v-else>
                <div>
                  <span>化肥(折纯)/吨</span>
                  <span style="color:#91D27F">{{TRP_data_HF[TRP_data_HF.length - 1]}}</span>
                </div>
                <div>
                  <span>用电量/吨</span>
                  <span style="color:#44F0FF">{{TRP_data_NYCY[TRP_data_NYCY.length - 1]}}</span>
                </div>
              </template>
            </div>
            <div class="echarts_box" id="touRuPinYongLiang"></div>
          </div>
        </div>

      </el-col>

    </div>
    <div class="management-bottom">

      <el-col :span="6"></el-col>

      <el-col :span="6" style="padding-left:0">
        <!-- <div class="management-bottom-other-div" @click="handleFertilizer"> -->
        <div class="management-bottom-index-div">
          <div class="management-charts-title">耕地面积</div>
          <div class="content_box">
            <div class="echarts_box" id="gengDiMianJi"></div>
          </div>
        </div>
      </el-col>

      <el-col :span="12" style="padding:0 1% 0 0">
        <!-- <div class="management-bottom-other-div" @click="handleDiMo"> -->
        <div class="management-bottom-other-div">
          <div class="management-charts-title" style="position: relative;">各乡镇耕地</div>
          <div class="content_box">
            <div class="echarts_box" id="geXiangZhenGengDi"></div>
          </div>
        </div>
      </el-col>

    </div>

  </div>
</template>

<script type="text/ecmascript-6">
import industryAnalysisMap from "./industryAnalysisMap";
import echart from "../../js/santaiEcharts/visRattanPepper";
import echarts from 'echarts';
import api from "../../request/visualiza1Api.js";
import liquidfill from '../../js/santaiEcharts/liquidfill'
import changeSize from '@/util/changeSize';
import { agricultureAndForestry, agricultureAndForestryByYear, cultivatedLandSumArea, cultivatedLandAreaByTownShip, getPlantDiseaseControl } from '@/api/visRattanPepper'
import { inputuse } from '../../api/home'

export default {
  data() {
    return {
      timer:null,   //定时器！！
      index: 0,     //定时器传过去的下标！！

      //投入品用量数据  
      TRP_name: [],
      TRP_year: [],
      TRP_data_HF: [],      //化肥
      TRP_data_DM: [],      //地膜
      TRP_data_NY: [],      //农药
      TRP_data_NYCY: [],    //农村用电量
      
      agricultural_storesTextMapping: {
        DKMC: "地块名称",
        DLDJ: "地理等级",
        ZJRXM: "指界人姓名 ",
        SCMJM: "实测面积亩",
        // agr_materials_type: "农资种类",
        //price: "农资价格"
      },
    };
  },
  components: {
    industryAnalysisMap
  },
  async mounted() {
    await this.initLayer();

    // 获取农林牧渔数据
    await this.getAgricultureAndForestryData()
    // 获取农林牧渔产值数据
    await this.getAgricultureAndForestryByYearData(2019)
    // 耕地面积
    await this.getCultivatedLandSumAreaData()
    // 获取各乡镇耕地面积数据
    await this.getCultivatedLandAreaByTownShipData(2019)
    //获取植保防治趋势数据
    await this.getPlantDiseaseControlData()
    // 获取投入品用量数据
    await this.getProductionTypeData()

    
  },
  methods: {
    initLayer() {
      let _this = this;
      this.agricultural_stores = this.$refs.mapModel.addLayer({
        layername: "DK1310232018",
        clickType: "point",
        popupCallback(e) {
          let data = [];
          for (let key in _this.agricultural_storesTextMapping) {
            data.push({
              title: _this.agricultural_storesTextMapping[key],
              value: e.get(key)
            });
          }
          return { data: data };
        }
      });
      this.agricultural_stores.isPopUp = true;
    },
    // 设置柱状图的定时器！！！！！
    setTime(){
        this.timer = setInterval(() => {
        this.index++
        console.log(this.index)
        echart.touRuPin('touRuPinYongLiang',this.index % 2, this.TRP_name, this.TRP_year, this.TRP_data_HF, this.TRP_data_DM, this.TRP_data_NY, this.TRP_data_NYCY)
      }, 3000);
    },
    mouseenter(){     //鼠标移入事件
      // 删除定时器！！！
      clearInterval(this.timer)
    },
    mouseleave(){      //鼠标移出事件
      //启动定时器
      this.setTime()
    },

    // 获取农林牧渔数据
    async getAgricultureAndForestryData(){
      let res = await agricultureAndForestry()
      await this.nongLinMuYu_echarts('nongLinMuYu',res.data.data.year,res.data.data.chanzhi,res.data.data.zengjiazhi)
    },
    // 获取农林牧渔产值数据
    async getAgricultureAndForestryByYearData(year){
      let res = await agricultureAndForestryByYear({year})
      let chanZhi_arr = [ res.data.data[0].forestry, res.data.data[0].fisheries, res.data.data[0].animalhusbandry, res.data.data[0].serviceIndustry, res.data.data[0].agriculture]
      let zengJiaZhi_arr = [ res.data.data[1].forestry, res.data.data[1].fisheries, res.data.data[1].animalhusbandry, res.data.data[1].serviceIndustry, res.data.data[1].agriculture]
      await echart.nongLinMuYuChanZhi('nongLinMuYuChanZhi',['服务业','牧业','渔业','林业','农业'], chanZhi_arr, zengJiaZhi_arr)
    },
    // 获取耕地面积数据
    async getCultivatedLandSumAreaData(){
      let res = await cultivatedLandSumArea()
      await this.gengDiMianJi_echarts('gengDiMianJi',res.data.data.map(item => item.dataYear), res.data.data.map(item => item.sumArea))
    },
    // 获取各乡镇耕地面积数据
    async getCultivatedLandAreaByTownShipData(dataYear){
      let res = await cultivatedLandAreaByTownShip({dataYear})
      let town_arr = ['永清镇','后弈','韩村','别古庄','里澜城','龙虎庄','刘街','三圣口','曹家务','城关','大辛阁','养马庄','亦庄','园区','县直']
      let data_arr = [res.data.data[0].yongqingTownArea, res.data.data[0].houyiArea, res.data.data[0].hanArea, res.data.data[0].bieguzhuangArea, res.data.data[0].lilanchengArea,
                      res.data.data[0].longhuzhuangArea, res.data.data[0].liujieArea, res.data.data[0].sanshengkouArea, res.data.data[0].caojiawuArea, res.data.data[0].chengguanArea,
                      res.data.data[0].daxingeArea, res.data.data[0].yangmazhuangArea, res.data.data[0].yizhuangArea, res.data.data[0].yuanquArea, res.data.data[0].xianzhiArea]
      await echart.geXiangZhenGengDi('geXiangZhenGengDi', town_arr, data_arr)
    },
    //获取植保防治趋势数据
    async getPlantDiseaseControlData(){
      let res = await getPlantDiseaseControl()
      let xData = res.data.data.map(item => item.years)
      let happenAreaArr = res.data.data.map(item => item.happenArea)
      let defenseAreaArr = res.data.data.map(item => item.defenseArea)
      await echart.zhiBaoFangZhi('zhiBaoFangZhi', xData, happenAreaArr, defenseAreaArr)
    },
    // 获取投入品用量数据
    async getProductionTypeData(){
      let res = await inputuse()
      console.log(res.data.data)
      this.TRP_name = res.data.data.inputName
      this.TRP_year = res.data.data.year
      this.TRP_data_HF = res.data.data.series['化肥(折纯)']
      this.TRP_data_DM = res.data.data.series['地膜']
      this.TRP_data_NY = res.data.data.series['农药']
      this.TRP_data_NYCY = res.data.data.series['农村用电量']
      echart.touRuPin('touRuPinYongLiang',0, this.TRP_name, this.TRP_year, this.TRP_data_HF, this.TRP_data_DM, this.TRP_data_NY, this.TRP_data_NYCY)
    },

    //农林牧渔
    nongLinMuYu_echarts(id, xData, chanZhi, zengJiaZhi){
      
        // chanZhi = chanZhi.map(item => item.toFixed(2))
        // zengJiaZhi = zengJiaZhi.map(item => item.toFixed(2))
      let myChart = echarts.init(document.getElementById(id));

        let option = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                  type: 'shadow',
                  label: {
                    show: true,
                    backgroundColor: '#7B7DDC'
                  }
                },
                // formatter: "{b}：{c}个",
              },
            legend: {
                // data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
                textStyle:{
                    color: '#fff'
                },
                top: '0%',
                // right: '20%'
                right: '0%'
            },
            grid: {     //设置图标位置
                top: '25%',
                left: '2%',
                right: '5%',
                bottom: '5%',
                containLabel: true
            },
            xAxis: {
                type: 'category',
                boundaryGap: true,      //设置x轴距离y轴是否有间距
                data: xData,
                axisLabel: {    //设置x轴文字颜色
                    color: '#fff'
                },
                axisLine:{      //设置轴线是否显示
                    show: false
                }
            },
            yAxis: [
                {
                    // min: '0',
                    // max: '800',
                    name: '单位/万元',
                    type: 'value',
                    axisLabel: {    //设置x轴文字颜色
                        color: '#fff'
                    },
                    nameTextStyle: {
                        color: '#fff'
                    },
                    splitLine: {    //设置分隔线
                        show: false
                    },
                    axisLine:{      //设置轴线是否显示
                        show: false
                    }
                },
                // {
                //     // min: '0',
                //     // max: '800',
                //     name: '万亩次',
                //     type: 'value',
                //     axisLabel: {    //设置x轴文字颜色
                //         color: '#fff'
                //     },
                //     nameTextStyle: {
                //         color: '#fff'
                //     },
                //     splitLine: {    //设置分隔线
                //         show: false
                //     },
                //     axisLine:{      //设置轴线是否显示
                //         show: false
                //     }
                // }
            ],
            series: [
                {
                    name: '产值',
                    type: 'bar',
                    // stack: '总量',
                    data: chanZhi,
                    // symbol: 'none',
                    // smooth: true
                    itemStyle:{
                        // color: '#FEE185'
                        normal: {       //渐变色
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#00A1E5' // 0% 处的颜色
                            }, {
                                offset: 1,
                                color: '#00A1E5' // 100% 处的颜色
                            }], false),
                            // barBorderRadius: [30, 30, 0, 0],
                        }
                    },
                    barWidth: 15,   //设置柱子宽度
                },
                {
                    name: '增加值',
                    type: 'bar',
                    // stack: '总量',
                    data: zengJiaZhi,
                    symbol: 'none',
                    itemStyle: {
                        normal: {       //渐变色
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#FFDB5C' // 0% 处的颜色
                            }, {
                                offset: 1,
                                color: '#FFDB5C' // 100% 处的颜色
                            }], false),
                            // barBorderRadius: [30, 30, 0, 0],
                        }
                    },
                    barWidth: 15,   //设置柱子宽度
                }
            ]
        };
        
        myChart.setOption(option);


        changeSize(myChart)

        myChart.getZr().on("click", async (param) => {
          var point = [ param.offsetX, param.offsetY ];
          if (myChart.containPixel('grid', point)) {
              var xIndex = myChart.convertFromPixel({seriesIndex : 0}, point)[0];
              var op = myChart.getOption();
              var name = op.xAxis[0].data[xIndex];
          }
          console.log(name)
          await this.getAgricultureAndForestryByYearData(name)
          // this.params_year.year = name
          //   await this.getCropStatistics()
          //   await this.buTongZuoWu_echarts('buTongZuoWu', this.BTZW_name, this.BTZW_happen, this.BTZW_defense)
            
          //   await this.getDiseaseStatistics()
          //   await this.buTongJiBing_echarts('buTongJiBing', this.BTJB_name, this.BTJB_happen, this.BTJB_defense)
        });
    },

    //耕地面积      -----真实数据
    gengDiMianJi_echarts(id, xData, data){
      console.log(data)
      data = data.map((item) => item * 15)
        let myChart = echarts.init(document.getElementById(id));

        let option = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                  type: 'shadow',
                  label: {
                    show: true,
                    backgroundColor: '#7B7DDC'
                  }
                },
                // formatter: "{b}：{c}个",
              },
            // legend: {
            //     // data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
            //     textStyle:{
            //         color: '#fff'
            //     },
            //     top: '-2%',
            //     right: '20%'
            // },
            grid: {     //设置图标位置
                top: '25%',
                left: '2%',
                right: '5%',
                bottom: '5%',
                containLabel: true
            },
            xAxis: {
                type: 'category',
                boundaryGap: true,      //设置x轴距离y轴是否有间距
                data: xData,
                axisLabel: {    //设置x轴文字颜色
                    color: '#fff'
                },
                axisLine:{      //设置轴线是否显示
                    show: false
                }
            },
            yAxis: [
                {
                    // min: '0',
                    // max: '800',
                    name: '单位/亩',
                    type: 'value',
                    axisLabel: {    //设置x轴文字颜色
                        color: '#fff'
                    },
                    nameTextStyle: {
                        color: '#fff'
                    },
                    splitLine: {    //设置分隔线
                        show: false
                    },
                    axisLine:{      //设置轴线是否显示
                        show: false
                    }
                }
            ],
            series: [
                {
                    name: '面积',
                    type: 'bar',
                    // stack: '总量',
                    data,
                    symbol: 'none',
                    itemStyle: {
                        normal: {       //渐变色
                            // color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            //     offset: 0,
                            //     color: '#02F1C4' // 0% 处的颜色
                            // }, {
                            //     offset: 1,
                            //     color: '#11A2D8' // 100% 处的颜色
                            // }], false),
                            color: '#6CD3B5',
                            // barBorderRadius: [30, 30, 0, 0],
                        }
                    },
                    barWidth: 15,   //设置柱子宽度
                }
            ]
        };
        
        myChart.setOption(option);
        changeSize(myChart)

        myChart.getZr().on("click", async (param) => {
          var point = [ param.offsetX, param.offsetY ];
          if (myChart.containPixel('grid', point)) {
              var xIndex = myChart.convertFromPixel({seriesIndex : 0}, point)[0];
              var op = myChart.getOption();
              var name = op.xAxis[0].data[xIndex];
          }
          // console.log(name)
          await this.getCultivatedLandAreaByTownShipData(name)
        });
    },
  },
  created(){
    // 动态柱状图的定时器！！！
    this.setTime()
  },
  beforeDestroy(){
    // 删除定时器！！！
    clearInterval(this.timer)
  }
};
</script>
<style>
</style>

