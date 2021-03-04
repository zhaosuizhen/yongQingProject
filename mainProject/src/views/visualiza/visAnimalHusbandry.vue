<template>
  <div class="webSite-container" style="overflow: hidden">
    <div class="management-top">

      <el-col :span="6" class="management-top-aside">

        <!-- <div class="management-top-div" @click="handleCount"> -->
        <div class="management-top-div" style="position: relative;">
          <div class="management-charts-title"></div>

        </div>

        <!-- <div class="management-top-div" @click="handleInputsProportion"> -->
        <div class="management-top-div" style="position: relative;">
          <div class="management-charts-title">鲜果产量</div>

          <div class="content_box">
            <div class="echarts_box" id="xianGuoChanLiang"></div>
          </div>
        </div>

      </el-col>

      <el-col :span="12" class="management-top-middle2" style="position: relative">
        
        <div style="width: 100%;height: 100%;">
          <industryAnalysisMap ref="mapModel" style="width:100%;height:100%"></industryAnalysisMap>
          <div class="mapExample">
            <img width="30%" src="../../assets/yongqing_img/jyzt.png" alt="">
            <p>图例</p>
            <p>果园基地</p>
          </div>
        </div>
        <!-- <div class="mapPointExample mapPointExample_XQYZ"></div> -->
        <!-- <div class="mapPointExample mapPointExample_TRP"></div> -->
      </el-col>

      <el-col :span="6" class="management-top-aside">

        <!-- <div class="management-top-div" @click="handlePesticide"> -->
        <div class="management-top-div">
          <div class="management-charts-title">造林面积</div>

          <div class="content_box">
            <div class="echarts_box" id="zaoLinMianJi"></div>
          </div>
        </div>

        <!-- <div class="management-top-div" @click="handleMulchFilm"> -->
        <div class="management-top-div3" style="position:relative;height:95%">
          <div class="management-charts-title">各乡镇造林面积</div>

            <div class="content_box">
              <div class="companyAdd">
                <div>名称（单位/亩）</div>
              </div>
              <div class="echarts_box" id="geXiangZhenZaoLinMianJi"></div>
            </div>
        </div>

      </el-col>

    </div>
    <div class="management-bottom">

      <el-col :span="12">
        <div class="management-bottom-other-div">
          <div class="management-charts-title">各乡镇鲜果产量</div>

          <div class="content_box">
            <div class="echarts_box" id="geXiangZhenXianGuoChanLiang"></div>
          </div>
        </div>
      </el-col>

      <el-col :span="6" style="padding:0 0 0 0">
        <!-- <div class="management-bottom-other-div" @click="handleDiMo"> -->
        <div class="management-bottom-index-div">
          <div class="management-charts-title" style="position: relative;">各个鲜果产量</div>

          <div class="content_box">
            <div class="echarts_box" id="geGeXianGuoChanLiang"></div>
          </div>
        </div>
      </el-col>

    </div>

  </div>
</template>

<script type="text/ecmascript-6">
import industryAnalysisMap from "./industryAnalysisMap";
import chart from "../../js/santaiEcharts/visInputs";
import api from "../../request/visualiza1Api.js";
import liquidfill from '../../js/santaiEcharts/liquidfill'
import echarts from 'echarts';
import echart from '../../js/santaiEcharts/visAnimalHusbandry'
import { getAfforestationArea, getAfforestationAreaOfEachTownship, getFreshFruitYield, getFreshFruitOutPutOfEachTownShip, getYieldOfEachFreshFruit } from '../../api/visAnimalHusbandry'
import { startmarquee, getBig } from '../../util/util'
import changeSize from '@/util/changeSize';
export default {
  data() {
    return {
      
      choiceYear:2019,
      choiceTownship:'三圣口',

      agricultural_storesTextMapping: {
        enterprise_name: "经营主体名称",
        subject_type: "经营主体类型",
        manage_type: "经营类别",
        legal_person: "法人姓名",
        registered_capital:"注册资金(万元)",
        adress: "详细地址",
      },
    };
  },
  components: {
    industryAnalysisMap
  },
  async mounted() {

    this.initLayer();

    //造林面积
    await this.getAfforestationAreaData()
    //各乡镇造林面积
    await this.getAfforestationAreaOfEachTownshipData(this.choiceYear)
    //鲜果产量
    await this.getFreshFruitYieldData()
    //各乡镇鲜果产量
    await this.getFreshFruitOutPutOfEachTownShipData(this.choiceYear)
    //各个鲜果产量
    await this.getYieldOfEachFreshFruitData(this.choiceTownship, this.choiceYear)

  },
  methods: {
    initLayer() {
      let _this = this;
      this.agricultural_stores = this.$refs.mapModel.addLayer({
        layername: "v_enter_prise_herbal_fruit",
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
    
    //造林面积
    async getAfforestationAreaData(){
      let res = await getAfforestationArea()
      let xData = res.data.data.map(item => item.year)
      let economicForestData = res.data.data.map(item => item.economicForest * 1)
      let timberForestData = res.data.data.map(item => item.timberForest * 1)

      this.zaoLinMianJi_echarts('zaoLinMianJi', xData, economicForestData, timberForestData)
    },
    //各乡镇造林面积
    async getAfforestationAreaOfEachTownshipData(year){
      let res = await getAfforestationAreaOfEachTownship({year})
      let xData = res.data.data.map(item => item.townShip)
      let economicForestData = res.data.data.map(item => item.economicForest)
      let timberForestData = res.data.data.map(item => item.timberForest)
      echart.geXiangZhenZaoLinMianJi('geXiangZhenZaoLinMianJi', xData, economicForestData, timberForestData)
      // echart.geXiangZhenZaoLinMianJi('geXiangZhenZaoLinMianJi', [1,2,3,4,5], [2,3,4,5,6], [3,4,5,6,7])
    },
    //鲜果产量
    async getFreshFruitYieldData(){
      let res = await getFreshFruitYield()
      let xData = res.data.data.map(item => item.year)
      let yData = res.data.data.map(item => item.value)
      this.xianGuoChanLiang_echarts('xianGuoChanLiang', xData, yData)
    },
    //各乡镇鲜果产量
    async getFreshFruitOutPutOfEachTownShipData(year){
      let res = await getFreshFruitOutPutOfEachTownShip({year})
      let xData = res.data.data.map(item => item.townShip)
      let yData = res.data.data.map(item => item.value)
      this.geXiangZhenXianGuoChanLiang_echarts('geXiangZhenXianGuoChanLiang', xData, yData)
    },
    //各个鲜果产量
    async getYieldOfEachFreshFruitData(townShip,year){
      let res = await getYieldOfEachFreshFruit({townShip,year})
      let data = [
        {name:'苹果', value: res.data.data.appleYield},
        {name:'梨', value: res.data.data.pearYield},
        {name:'杏', value: res.data.data.apricotYield},
        {name:'葡萄', value: res.data.data.grapeYield},
        {name:'桃', value: res.data.data.peachYield},
        {name:'其他', value: res.data.data.otherYield},
      ]
      console.log(data)
      echart.geGeXianGuoChanLiang('geGeXianGuoChanLiang', data)
    },

    //造林面积echarts图表
    zaoLinMianJi_echarts(id, xData, economicForest, timberForest){
      
        economicForest = economicForest.map(item => item.toFixed(2))
        timberForest = timberForest.map(item => item.toFixed(2))
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
                    name: '面积/亩',
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
                    name: '经济林',
                    type: 'bar',
                    // stack: '总量',
                    data: economicForest,
                    // symbol: 'none',
                    // smooth: true
                    itemStyle:{
                        // color: '#FEE185'
                        normal: {       //渐变色
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#DEC578' // 0% 处的颜色
                            }, {
                                offset: 1,
                                color: '#DEC578' // 100% 处的颜色
                            }], false),
                            // barBorderRadius: [30, 30, 0, 0],
                        }
                    },
                    barWidth: 15,   //设置柱子宽度
                },
                {
                    name: '用材林',
                    type: 'bar',
                    // stack: '总量',
                    data: timberForest,
                    symbol: 'none',
                    itemStyle: {
                        normal: {       //渐变色
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#1DC6D4' // 0% 处的颜色
                            }, {
                                offset: 1,
                                color: '#1DC6D4' // 100% 处的颜色
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
          if(name){
            await this.getAfforestationAreaOfEachTownshipData(name)
          }
          
        });
    },

    //鲜果产量echarts图表
    xianGuoChanLiang_echarts(id, xData, economicForest){
      
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
                    name: '产量/吨',
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
                    name: '产量',
                    type: 'bar',
                    // stack: '总量',
                    data: economicForest,
                    // symbol: 'none',
                    // smooth: true
                    itemStyle:{
                        // color: '#FEE185'
                        normal: {       //渐变色
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#6CD3B5' // 0% 处的颜色
                            }, {
                                offset: 1,
                                color: '#6CD3B5' // 100% 处的颜色
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
          if(name){
            this.choiceYear = name
            await this.getFreshFruitOutPutOfEachTownShipData(this.choiceYear)
          }
          
        });
    },

    //各乡镇鲜果产量echarts图表
    geXiangZhenXianGuoChanLiang_echarts(id, xData, economicForest){

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
                    name: '产量/吨',
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
                    name: '产量',
                    type: 'bar',
                    // stack: '总量',
                    data: economicForest,
                    // symbol: 'none',
                    // smooth: true
                    itemStyle:{
                        // color: '#FEE185'
                        normal: {       //渐变色
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#6CD3B5' // 0% 处的颜色
                            }, {
                                offset: 1,
                                color: '#6CD3B5' // 100% 处的颜色
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
              console.log(xIndex)
              var op = myChart.getOption();
              var name = op.xAxis[0].data[xIndex];
          }
          if(name){
            this.choiceTownship = name
            this.getYieldOfEachFreshFruitData(this.choiceTownship, this.choiceYear)
          }
          
        });
    },
  }
};
</script>
<style>
</style>

