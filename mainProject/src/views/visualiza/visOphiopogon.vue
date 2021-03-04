<template>
  <div class="webSite-container" style="overflow: hidden">
    <div class="management-top">
      
      <el-col :span="6" class="management-top-aside">

        <!-- <div class="management-top-div" @click="handleCount"> -->
        <div class="management-top-div" style="position: relative;">
          <div class="management-charts-title">牛养殖情况</div>
          <div class="choice_btn">
            <div :class="niuIn_flag ? 'sanPinYiBiao_active' :''" @click="changeEcharts_niuIn">存栏</div>
            <div :class="niuIn_flag ? '' :'sanPinYiBiao_active'" @click="changeEcharts_niuOut">出栏</div>
          </div>
          <div class="content_box">
            <div class="echarts_box" id="niuYangZhiQingKuang"></div>
          </div>
        </div>

        <!-- <div class="management-top-div" @click="handleUnitType"> -->
        <div class="management-top-div3" style="height:95%;position: relative;">
          <div class="management-charts-title">各乡镇{{niu_text}}量</div>
          <p class="unit">单位/吨</p>
          <div class="content_box">
            <div class="echarts_box" id="niuXiangZhen"></div>
          </div>
          <!-- <div id="manageZhuTiChart" class="management-charts-height"></div> -->
        </div>

      </el-col>

      <el-col :span="12" class="management-top-middle2">
        
        <div style="width: 100%;height: 100%;">
          <industryAnalysisMap ref="mapModel" style="width:100%;height:100%"></industryAnalysisMap>
          <div class="mapExample">
            <img width="30%" src="../../assets/yongqing_img/jyzt.png" alt="">
            <p>图例</p>
            <p>家禽养殖</p>
          </div>
        </div>
        <!-- <div class="mapPointExample mapPointExample_MDZZ"></div> -->
      </el-col>

      <el-col :span="6" class="management-top-aside">

        <div class="management-top-div" style="position: relative;">
          <div class="management-charts-title">羊养殖情况</div> <!--@click="handleLastyearChart"-->
          <div class="choice_btn">
            <div :class="yangIn_flag ? 'sanPinYiBiao_active' :''" @click="changeEcharts_yangIn">存栏</div>
            <div :class="yangIn_flag ? '' :'sanPinYiBiao_active'" @click="changeEcharts_yangOut">出栏</div>
          </div>
          <div class="content_box">
            <div class="echarts_box" id="yangYangZhiQingKuang"></div>
          </div>
        </div>

        <div class="management-top-div3" style="height:95%;position: relative;">
          <div class="management-charts-title">各乡镇{{yang_text}}量</div>
          <p class="unit">单位/吨</p>
          <div class="content_box">
            <div class="echarts_box" id="yangXiangZhen"></div>
          </div>
        </div>

      </el-col>

    </div>
    <div class="management-bottom">

      <el-col :span="6"></el-col>

      <el-col :span="6" style="position: relative;padding:0 8px 0 0">
        <div class="management-bottom-index-div">
          <div class="management-charts-title" style="">家禽养殖情况</div>
          <div class="choice_btn">
            <div :class="jiaQinIn_flag ? 'sanPinYiBiao_active' :''" @click="changeEcharts_jiaQinIn">存栏</div>
            <div :class="jiaQinIn_flag ? '' :'sanPinYiBiao_active'" @click="changeEcharts_jiaQinOut ">出栏</div>
          </div>
          <div class="content_box">
            <div class="echarts_box" id="jiaQinYangZhiQingKuang"></div>
          </div>
        </div>
      </el-col>

      <el-col :span="6" style="padding:0 0 0 8px">
        <div class="management-bottom-index-div">
          <div class="management-charts-title">各乡镇{{jiaQin_text}}量</div>
          <div class="content_box">
            <div class="echarts_box" id="jiaQinXiangZhen"></div>
          </div>
        </div>
      </el-col>

    </div>


  </div>
</template>

<script type="text/ecmascript-6">
import industryAnalysisMap from "./industryAnalysisMap";
import chart1 from "../../js/visualiza/visLivestock";
import api from "../../request/visualiza1Api.js";
import liquidfill from '../../js/santaiEcharts/liquidfill'
import echart from '../../js/santaiEcharts/visOphiopogon'
import echarts_home from '../../js/santaiEcharts/home'
import { cattleBreeding, inOrOutAmount } from '../../api/visOphiopogon'
import { getcoststructure } from '../../api/home'
import { startmarquee, getBig } from '../../util/util'
import echarts from 'echarts';
import changeSize from '@/util/changeSize';
export default {
  data() {
    return{
      niuIn_flag:true,
      yangIn_flag:true,
      jiaQinIn_flag:true,

      niu_text: '存栏',
      yang_text: '存栏',
      jiaQin_text: '存栏',

      niu_year: 2019,
      yang_year: 2019,
      jiaQin_year: 2019,

      managementTextMapping: {
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
  async mounted() {
    this.initLayer();

    //牛养殖情况
    this.niuCattleBreeding(0, '存栏')
    //羊养殖情况
    this.yangCattleBreeding(1, '存栏')
    //家禽养殖情况
    this.jiaQinCattleBreeding(2, '存栏')

    //牛各乡镇量
    this.niuInOrOutAmount(0, 0, this.niu_year)
    //羊各乡镇量
    this.yangInOrOutAmount(1, 0, this.yang_year)
    //家禽各乡镇量
    this.jiaQinInOrOutAmount(2, 0, this.jiaQin_year)
  },
  methods: {
    initLayer() {
      var _this = this;
       this.managementLayer = this.$refs.mapModel.addLayer({
        layername: "v_enterprise_poultry_farming",
        clickType: "point",
        popupCallback(e) {
          var data = [];
          for (let key in _this.managementTextMapping) {
            if(_this.managementTextMapping[key] == '占地面积(亩)'){
              let zhandival="暂无数据";
              if(e.get(key)!=null){
                zhandival=parseFloat(e.get(key).toFixed(2));
              }
              data.push({
                title: _this.managementTextMapping[key],
                value: zhandival
              });
            }else{
              data.push({
                title: _this.managementTextMapping[key],
                value: e.get(key)
              });
            }
          }
          return { data: data };
        }
      });
      this.managementLayer.isPopUp = true;
    },

    //获取牛养殖情况
    async niuCattleBreeding(dataType, type){
      let res = await cattleBreeding({dataType})
      let xData = res.data.data.map(item => item.years)
      let yData = ( type == '存栏' ) ? res.data.data.map(item => item.in) : res.data.data.map(item => item.out)
      this.yangZhiQingKuang_echarts('niuYangZhiQingKuang', xData, yData, 0, '单位/百头')
    },
    //获取羊养殖情况
    async yangCattleBreeding(dataType, type){
      let res = await cattleBreeding({dataType})
      let xData = res.data.data.map(item => item.years)
      let yData = ( type == '存栏' ) ? res.data.data.map(item => item.in) : res.data.data.map(item => item.out)
      this.yangZhiQingKuang_echarts('yangYangZhiQingKuang', xData, yData, 1, '单位/百只')
    },
    //获取家禽养殖情况
    async jiaQinCattleBreeding(dataType, type){
      let res = await cattleBreeding({dataType})
      let xData = res.data.data.map(item => item.years)
      let yData = ( type == '存栏' ) ? res.data.data.map(item => item.in) : res.data.data.map(item => item.out)
      this.yangZhiQingKuang_echarts('jiaQinYangZhiQingKuang', xData, yData, 2, '单位/百只')
    },

    //获取牛各乡镇量
    async niuInOrOutAmount(dataType, inOrOut, year){
      let res = await inOrOutAmount({dataType, inOrOut, year})
      let xData = res.data.data.map(item => item.township)
      let yData = res.data.data.map(item => item.value)
      echart.geXiangZhenChangLiang_col('niuXiangZhen', xData, yData)
    },
    //获取羊各乡镇量
    async yangInOrOutAmount(dataType, inOrOut, year){
      let res = await inOrOutAmount({dataType, inOrOut, year})
      let xData = res.data.data.map(item => item.township)
      let yData = res.data.data.map(item => item.value)
      echart.geXiangZhenChangLiang_col('yangXiangZhen', xData, yData)
    },
    //获取家禽各乡镇量
    async jiaQinInOrOutAmount(dataType, inOrOut, year){
      let res = await inOrOutAmount({dataType, inOrOut, year})
      let xData = res.data.data.map(item => item.township)
      let yData = res.data.data.map(item => item.value)
      echart.geXiangZhenChangLiang_row('jiaQinXiangZhen', xData, yData)
    },

    //牛存栏
    changeEcharts_niuIn(){
      this.niuIn_flag = true
      this.niu_text = '存栏'
      this.niuCattleBreeding(0, this.niu_text)
      this.niuInOrOutAmount(0, 0, this.niu_year)
    },
    //牛出栏
    changeEcharts_niuOut(){
      this.niuIn_flag = false
      this.niu_text = '出栏'
      this.niuCattleBreeding(0, this.niu_text)
      this.niuInOrOutAmount(0, 1, this.niu_year)
    },
    //羊存栏
    changeEcharts_yangIn(){
      this.yangIn_flag = true
      this.yang_text = '存栏'
      this.yangCattleBreeding(1, this.yang_text)
      this.yangInOrOutAmount(1, 0, this.yang_year)
    },
    //羊出栏
    changeEcharts_yangOut(){
      this.yangIn_flag = false
      this.yang_text = '出栏'
      this.yangCattleBreeding(1, this.yang_text)
      this.yangInOrOutAmount(1, 1, this.yang_year)
    },
    //家禽存栏
    changeEcharts_jiaQinIn(){
      this.jiaQinIn_flag = true
      this.jiaQin_text = '存栏'
      this.jiaQinCattleBreeding(2, this.jiaQin_text)
      this.jiaQinInOrOutAmount(2, 0, this.jiaQin_year)
    },
    //家禽出栏
    changeEcharts_jiaQinOut(){
      this.jiaQinIn_flag = false
      this.jiaQin_text = '出栏'
      this.jiaQinCattleBreeding(2, this.jiaQin_text)
      this.jiaQinInOrOutAmount(2, 1, this.jiaQin_year)
    },



    //养殖情况echarts图表
    yangZhiQingKuang_echarts(id, xData, economicForest,dataType, unit){
      
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
            //     top: '0%',
            //     // right: '20%'
            //     right: '0%'
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
                    name: unit,
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
          
          if(name){
            if(dataType == 0){
              this.niu_year = name
              let inOrOut = ( this.niu_text == '存栏' ) ? 0 : 1
              this.niuInOrOutAmount(0, inOrOut, this.niu_year)
            }else if(dataType == 1){
              this.yang_year = name
              let inOrOut = ( this.yang_text == '存栏' ) ? 0 : 1
              this.yangInOrOutAmount(1, inOrOut, this.yang_year)
            }else if(dataType == 2){
              this.jiaQin_year = name
              let inOrOut = ( this.jiaQin_text == '存栏' ) ? 0 : 1
              this.jiaQinInOrOutAmount(2, inOrOut, this.jiaQin_year)
            }
          }
          
        });
    },
  }
};
</script>
<style scoped lang="scss">
.unit{
  color: #f2f2f2;
  position: absolute;
  top: 25px;
  right: 10px;
}
</style>
