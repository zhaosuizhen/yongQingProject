<template>
  <div class="webSite-container" style="overflow: hidden">
    <div class="management-top">

      <el-col :span="6" class="management-top-aside">

        <div class="management-top-div">
          <div class="management-charts-title">牛养殖产量</div>
          <div class="content_box">
            <div class="echarts_box" id="niuYangZhiChanLiang"></div>
          </div>
        </div>

        <div class="management-top-div3" style="height:95%">
          <div class="management-charts-title">各乡镇产量</div>
          <div class="content_box">
            <div class="echarts_box" id="niuXiangZhenChanLiang"></div>
          </div>
        </div>

      </el-col>

      <el-col :span="12" class="management-top-middle2" style="position: relative">
        
        <div style="width: 100%;height: 100%;">
          <industryAnalysisMap ref="mapModel" style="width:100%;height:100%"></industryAnalysisMap>
          <div class="mapExample">
            <img width="30%" src="../../assets/yongqing_img/jyzt.png" alt="">
            <p>图例</p>
            <p>家禽养殖</p>
          </div>
        </div>
        <!-- <div class="mapPointExample mapPointExample_TRP"></div> -->
      </el-col>

      <el-col :span="6" class="management-top-aside">

        <!-- <div class="management-top-div" @click="handlePesticide"> -->
        <div class="management-top-div">
          <div class="management-charts-title">羊养殖产量</div>
          <div class="content_box">
            <div class="echarts_box" id="yangYangZhiChanLiang"></div>
          </div>
        </div>

        <!-- <div class="management-top-div" @click="handleMulchFilm"> -->
        <div class="management-top-div3" style="height:95%">
          <div class="management-charts-title">各乡镇产量</div>
          <div class="content_box">
            <div class="echarts_box" id="yangXiangZhenChanLiang"></div>
          </div>
        </div>

      </el-col>

    </div>
    <div class="management-bottom">

      <el-col :span="6"></el-col>

      <el-col :span="6" style="padding:0 8px 0 0">
        <div class="management-bottom-index-div">
          <div class="management-charts-title" style="position: relative;">家禽养殖产量</div>
          
          <div class="content_box">
            <div class="echarts_box" id="jiaQinYangZhiChanLiang"></div>
          </div>

        </div>
      </el-col>

      <el-col :span="6" style="padding:0 0 0 8px">
        <div class="management-bottom-index-div">
          <div class="management-charts-title" style="position: relative;">各乡镇产量</div>
          
          <div class="content_box">
            <div class="echarts_box" id="jiaQinXiangZhenChanLiang"></div>
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
import changeSize from '@/util/changeSize';
import { breedingYield, townshipYield } from '@/api/visInputs'
export default {
  data() {
    return{
      niu_year: 2019,
      yang_year: 2019,
      jiaQin_year: 2019,

      agricultural_storesTextMapping: {
        enterprise_name: "经营主体名称",
        subject_type: "经营主体类型",
        manage_type: "经营类别",
        legal_person: "法人姓名",
        registered_capital:"注册资金(万元)",
        adress: "详细地址",
      },
    }
  },
  components: {
    industryAnalysisMap
  },
  mounted() {
    this.initLayer();
    
    //牛养殖产量
    this.niuYield(0)
    //羊养殖产量
    this.yangYield(1)
    //家禽养殖产量
    this.jiaQinYield(2)

    //牛乡镇产量
    this.niuTownshipYield(0, this.niu_year)
    //羊乡镇产量
    this.yangTownshipYield(1, this.yang_year)
    //家禽乡镇产量
    this.jiaQinTownshipYield(2, this.jiaQin_year)
  },
  methods: {
    initLayer() {
      let _this = this;
      this.agricultural_stores = this.$refs.mapModel.addLayer({
        layername: "v_enterprise_poultry_farming",
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
    
    //获牛养殖产量
    async niuYield(dataType){
      let res = await breedingYield({dataType})
      let xData = res.data.data.map(item => item.years)
      let yData = res.data.data.map(item => item.value)
      this.yangZhiChanLiang_echarts('niuYangZhiChanLiang', xData, yData, 0)
    },

    //获羊养殖产量
    async yangYield(dataType){
      let res = await breedingYield({dataType})
      let xData = res.data.data.map(item => item.years)
      let yData = res.data.data.map(item => item.value)
      this.yangZhiChanLiang_echarts('yangYangZhiChanLiang', xData, yData, 1)
    },

    //获家禽养殖产量
    async jiaQinYield(dataType){
      let res = await breedingYield({dataType})
      let xData = res.data.data.map(item => item.years)
      let yData = res.data.data.map(item => item.value)
      this.yangZhiChanLiang_echarts('jiaQinYangZhiChanLiang', xData, yData, 2)
    },

    //获取牛乡镇产量
    async niuTownshipYield(dataType, year){
      let res = await townshipYield({dataType, year})
      let xData = res.data.data.map(item => item.township)
      let yData = res.data.data.map(item => item.value)
      chart.geXiangZhenChangLiang_col('niuXiangZhenChanLiang', xData, yData)
    },

    //获取羊乡镇产量
    async yangTownshipYield(dataType, year){
      let res = await townshipYield({dataType, year})
      let xData = res.data.data.map(item => item.township)
      let yData = res.data.data.map(item => item.value)
      chart.geXiangZhenChangLiang_col('yangXiangZhenChanLiang', xData, yData)
    },

    //获取家禽乡镇产量
    async jiaQinTownshipYield(dataType, year){
      let res = await townshipYield({dataType, year})
      let xData = res.data.data.map(item => item.township)
      let yData = res.data.data.map(item => item.value)
      chart.geXiangZhenChangLiang_row('jiaQinXiangZhenChanLiang', xData, yData)
    },


    //养殖产量echarts图表
    yangZhiChanLiang_echarts(id, xData, economicForest,dataType){
      
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
                                color: '#78C0AB' // 0% 处的颜色
                            }, {
                                offset: 1,
                                color: '#78C0AB' // 100% 处的颜色
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
            console.log(name)
            if(dataType == 0){
              this.niu_year = name
              this.niuTownshipYield(0, this.niu_year)
            }else if(dataType == 1){
              this.yang_year = name
              this.yangTownshipYield(1, this.yang_year)
            }else if(dataType == 2){
              this.jiaQin_year = name
              this.jiaQinTownshipYield(2, this.jiaQin_year)
            }
          }
          
        });
    },
  }
};
</script>
<style>
</style>

