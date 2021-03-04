<template>
  <div class="webSite-container" style="overflow: hidden">
    <div class="management-top">

      <el-col :span="6" class="management-top-aside">

        <!-- <div class="management-top-div" @click="handleCount"> -->
        <div class="management-top-div">
          <div class="management-charts-title">农业从业人口</div>
          <div class="content_box NYCYRK">
            <div class="box_line">
              <span style="float:left"><b>类型</b></span>
              <span style="float:right"><b>人数</b></span>
            </div>
            <div class="box_line" v-for="(item,index) in nycyrk_list" :key="index">
              <span style="float:left">{{item.key}}</span>
              <span style="float:right">{{item.value}}</span>
            </div>
          </div>
        </div>

        <!-- <div class="management-top-div" @click="handleInputsProportion"> -->
        <div class="management-top-div" style="position: relative">
          <div class="management-charts-title">单品种面积</div>
          <!-- <div id="inputsProportion" class="management-charts-height"></div> -->

          <select style="position: absolute;top:8px;right:8px;border:0;border-radius:3px;background:#153D52;border:1px solid #ccc;color:#fff;width:80px;height:25px" :value="DPZMJ_year" @change="choiceYear_DPZMJ">
            <option value = "2017">2017</option>
            <option value = "2018">2018</option>
            <option value = "2019">2019</option>
          </select>

          <div class="content_box">
            <div class="echarts_box" id="danPinZhongMianJi"></div>
          </div>
        </div>

      </el-col>

      <el-col :span="12" class="management-top-middle2" style="position: relative">
        
        <div style="width: 100%;height: 100%;">
          <industryAnalysisMap ref="mapModel" style="width:100%;height:100%"></industryAnalysisMap>
          <div class="mapExample">
            <img width="30%" src="../../assets/yongqing_img/jyzt.png" alt="">
            <p>图例</p>
            <p>种植基地</p>
          </div>
        </div>
        <!-- <div class="mapPointExample mapPointExample_NJSJ"></div> -->
        <!-- <img src="../../assets/visualiza/inputs_legend.png" alt="" style="position: absolute;bottom: 4%;left: 3%;"> -->
      </el-col>

      <el-col :span="6" class="management-top-aside">

        <!-- <div class="management-top-div" @click="handlePesticide"> -->
        <div class="management-top-div" style="position: relative">
          <div class="management-charts-title">种植单产</div>
          <select style="position: absolute;top:8px;right:8px;border:0;border-radius:3px;background:#153D52;border:1px solid #ccc;color:#fff;width:80px;height:25px;z-index:9999;" :value="ZZDC_year" @change="choiceYear_ZZDC">
            <option value = "2017">2017</option>
            <option value = "2018">2018</option>
            <option value = "2019">2019</option>
          </select>
          <div class="content_box">
            <div class="echarts_box" id="zhongZhiDanChang"></div>
          </div>
        </div>

        <!-- <div class="management-top-div" @click="handleMulchFilm"> -->
        <div class="management-top-div" style="position: relative">
          <div class="management-charts-title">种植产量</div>
          <select style="position: absolute;top:8px;right:8px;border:0;border-radius:3px;background:#153D52;border:1px solid #ccc;color:#fff;width:80px;height:25px" :value="ZZCL_year" @change="choiceYear_ZZCL">
            <option value = "2017">2017</option>
            <option value = "2018">2018</option>
            <option value = "2019">2019</option>
          </select>
          <div class="content_box">
            <div class="echarts_box" id="zhongZhiChangLiang"></div>
          </div>
        </div>

      </el-col>

    </div>
    <div class="management-bottom">

      <el-col :span="12">
        <!-- <div class="management-bottom-other-div" @click="handleFertilizer"> -->
        <div class="management-bottom-other-div">
          <div class="management-charts-title">各乡镇面积<span style="font-size:0.1rem"></span></div>
          <div class="content_box">
            <div class="echarts_box" id="geXiangZhenMianJi"></div>
          </div>
        </div>
      </el-col>

      <el-col :span="12" style="padding:0 0 0 0">
        <!-- <div class="management-bottom-other-div" @click="handleDiMo"> -->
        <div class="management-bottom-other-div" style="position: relative">
          <div class="management-charts-title">种植面积</div>

          <select style="position: absolute;top:8px;right:8px;border:0;border-radius:3px;background:#153D52;border:1px solid #ccc;color:#fff;width:80px;height:25px" :value="ZZMJ_year" @change="choiceYear_ZZMJ">
            <option value = "2017">2017</option>
            <option value = "2018">2018</option>
            <option value = "2019">2019</option>
          </select>

          <!-- <div id="inputsFilmChart" class="management-charts-height"></div> -->
          <div class="content_box">
            <div class="echarts_box" id="zhongZhiMianJi"></div> 
          </div>
        </div>
      </el-col>

    </div>

  </div>
</template>

<script type="text/ecmascript-6">
import industryAnalysisMap from "./industryAnalysisMap";
import api from "../../request/visualiza1Api.js";
import echarts from 'echarts';
import changeSize from '@/util/changeSize';
import chart from "../../js/santaiEcharts/visInputs";
import echarts_plant from '../../js/santaiEcharts/visPlant'
import liquidfill from '../../js/santaiEcharts/liquidfill'
import { machinerycount } from '../../api/visPlant'
import { employedPopulation, areaOfSingleVariety, townshipArea, plantingYieldPerUnitArea, plantingYield, plantingArea } from '../../api/visAgriculturalData'
import { getBig } from '../../util/util'
export default {
  data() {
    return {
      
      DPZMJ_year:2019,  //单品种面积年份
      ZZMJ_year:2019,  //种植面积年份
      ZZDC_year:2019,  //种植单产年份
      ZZCL_year:2019,  //种植产量年份

      nycyrk_list:[],
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

    //获取农村从业人口
    await this.employedPopulationData()
    //获取单品种面积
    await this.areaOfSingleVarietyData(2019)
    //获取各乡镇面积
    await this.townshipAreaData('玉米', 2019)
    //获取种植单产
    await this.plantingYieldPerUnitAreaData(2019)
    //获取种植产量
    await this.plantingYieldData(2019)
    //获取种植面积
    await this.plantingAreaData(2019)
  },
  methods: {
    initLayer() {
      let _this = this;
      this.agricultural_stores = this.$refs.mapModel.addLayer({
        layername: "v_enterprise_vegetables_and_cereals_oils",
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
    //获取农村从业人口
    async employedPopulationData(){
      let res = await employedPopulation()
      this.nycyrk_list = res.data.data
    },
    //获取单品种面积
    async areaOfSingleVarietyData(year){
      let res = await areaOfSingleVariety({year})
      console.log(res.data.data)
      this.danPinZhongMianJi_echarts('danPinZhongMianJi', ['玉米','棉花','甜瓜', '花生', '大豆', '块茎', '蔬菜', '小麦'], 
      [res.data.data.corn, res.data.data.cotton, res.data.data.melon, res.data.data.peanut, res.data.data.soybean, res.data.data.tubers, res.data.data.vegetablevs, res.data.data.wheat])
    },
    //单品种面积选择年份
    choiceYear_DPZMJ(e){
      this.DPZMJ_year = e.target.value
      this.areaOfSingleVarietyData(this.DPZMJ_year)
    },
    //种植单产选择年份
    choiceYear_ZZDC(e){
      this.ZZDC_year = e.target.value
      this.plantingYieldPerUnitAreaData(this.ZZDC_year)
    },
    //种植产量选择年份
    choiceYear_ZZCL(e){
      this.ZZCL_year = e.target.value
      this.plantingYieldData(this.ZZCL_year)
    },
    //获取各乡镇面积
    async townshipAreaData(varieties, year){
      let res = await townshipArea({varieties, year})
      let xData = res.data.data.map(item => item.townShip)
      let yData = res.data.data.map(item => item.value)
      chart.geXiangZhenMianJi('geXiangZhenMianJi', xData, yData)
    },
    //获取种植单产
    async plantingYieldPerUnitAreaData(year){
      let res = await plantingYieldPerUnitArea({year})
      let xData = res.data.data.x
      let yData = res.data.data.series
      chart.zhongZhiDanChang('zhongZhiDanChang', xData, yData)
    },
    //获取种植产量
    async plantingYieldData(year){
      let res = await plantingYield({year})
      let xData = res.data.data.x
      let yData = res.data.data.series
      chart.zhongZhiChangLiang('zhongZhiChangLiang', xData, yData)
    },
    //获取种植面积
    async plantingAreaData(year){
      let res = await plantingArea({year})
      console.log(res.data.data)
      let xData = res.data.data.map(item => item.townShip)
      let yData = res.data.data.map(item => item.value)
      chart.zhongZhiMianJi('zhongZhiMianJi', xData, yData)
    },
    //种植面积选择年份
    choiceYear_ZZMJ(e){
      this.ZZMJ_year = e.target.value
      this.plantingAreaData(this.ZZMJ_year)
    },

    //单品种面积echarts图表
    danPinZhongMianJi_echarts(id, xData, economicForest){
      
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
                bottom: '0%',
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
                    name: '面积',
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
          console.log(name)
          if(name){
            this.townshipAreaData(name, this.DPZMJ_year)
          }
          
        });
    },
  }
};
</script>
<style>
</style>

