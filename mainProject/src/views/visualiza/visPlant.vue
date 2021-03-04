<template>
  <div class="webSite-container" style="overflow: hidden">
    <div class="management-top">

      <el-col :span="6" class="management-top-aside">

        <div class="management-top-div">
          <div class="management-charts-title">农业从业人口</div>
          <ul class="yuYeRenKou">
              <li>
                <span>类型</span>
                <span>人数</span>
              </li>
              <li>
                <span>乡村户数</span>
                <span style="color:#fff">{{NYCYRK_value.pop_house}}</span>
              </li>
            <li>
              <span>乡村人口数(男)</span>
              <span style="color:#fff">{{NYCYRK_value.pop_man}}</span>
            </li>
            <li>
              <span>乡村人口数(女)</span>
              <span style="color:#fff">{{NYCYRK_value.aspop_woman}}</span>
            </li>
            <li>
              <span>乡村劳动力资源数</span>
              <span style="color:#fff">{{NYCYRK_value.pop_labor}}</span>
            </li>
            <li>
            <span>农业从业人员</span>
            <span style="color:#fff">{{NYCYRK_value.pop_work}}</span>
          </li>
            <li>
              <span>乡村从业人员人数</span>
              <span style="color:#fff">{{NYCYRK_value.pop_job}}</span>
            </li>
          </ul>
        </div>

        <div class="management-top-div">
          <div class="management-charts-title">主要品种面积</div>
          <!-- <div class="content_box" style="padding: 10px 20px;">
            <div class="left_echarts"></div>
            <div class="right_text">
              <ul class="animal_stat">
                <li>
                  <div style="background:#00A1E4"></div>
                  <p><span>鱼类</span><span>89.31万头</span></p>
                </li>
                <li>
                  <div style="background:#85CBFE"></div>
                  <p><span>贝类</span><span>4.10万头</span></p>
                </li>
                <li>
                  <div style="background:#15C2D2"></div>
                  <p><span>藻类</span><span>14.12万头</span></p>
                </li>
                <li>
                  <div style="background:#78E4E4"></div>
                  <p><span>甲壳类</span><span>1616.22万头</span></p>
                </li>
                <li>
                  <div style="background:#FEE185"></div>
                  <p><span>其他类</span><span>214.68万头</span></p>
                </li>
              </ul>
            </div>
          </div> -->
            <div class="text_box">
              <div>
                <span>水稻</span>
                <span style="color:#83E914">{{(SD_total/10000).toFixed(2)}}万亩</span>
              </div>
              <div>
                <span>油菜</span>
                <span style="color:#00F6FF">{{(YC_total/10000).toFixed(2)}}万亩</span>
              </div>
            </div>
          <div class="content_box">
            <!-- <div class="text_box">
              <div>
                <span>年平均气温/℃</span>
                <span style="color:#83E914">2547</span>
              </div>
              <div>
                <span>降水量/毫米</span>
                <span style="color:#01E8FD">2547</span>
              </div>
            </div> -->
            <div class="echarts_box" id="zhuYaoPinZhong"></div>
            
          </div>
        </div>

      </el-col>

      <el-col :span="12" class="management-top-middle2" style="position: relative">
        <img class="middle_img_top" src="../../assets/santai_img/top.png" width="100%" alt="">
        <img class="middle_img_leftB" src="../../assets/santai_img/left.png" alt="">
        <img class="middle_img_rightB" src="../../assets/santai_img/right.png" alt="">
        <h2 class="h2_title">数据改变农业，智慧创造未来</h2>
        <!-- <div class="nav_com">
          <Nav></Nav>
        </div> -->
        <!--<div id="allmap" style="width: 95%;height: 94%;margin: 1.5% 2.5%;"></div>
        <img src="../../assets/visualiza/map_legend.png" alt="" style="position: absolute;bottom: 4%;left: 3%;">-->
        <!--地图渲染-->
        <div style="width: 100%;height: 100%;">
          <industryAnalysisMap ref="mapModel" style="width:100%;height:100%"></industryAnalysisMap>
        </div>
        <div class="mapPointExample mapPointExample_SCZZ"></div>
      </el-col>

      <el-col :span="6" class="management-top-aside">

        <div class="management-top-div" >
          <div class="management-charts-title">粮食作物</div>
          <div class="text_box">
              <div>
                <span>总面积</span>
                <span style="color:#83E914">{{this.LSZW_total_area}}亩</span>
              </div>
              <div>
                <span>总产量</span>
                <span style="color:#00F6FF">{{this.LSZW_total_yield}}吨</span>
              </div>
            </div>
          <div class="content_box">
            <!-- <div class="text_box">
              <div>
                <span>农药/2019</span>
                <span style="color:#83E914">2547</span>
              </div>
              <div>
                <span>化肥/2019</span>
                <span style="color:#01E8FD">2547</span>
              </div>
            </div> -->
            <div class="choice_btn">
              <!-- <div :class="liangShiZuoWu_flag === 1 ? 'sanPinYiBiao_active' :''" @click="changeEcharts_4">面积</div> -->
              <!-- <div style="border-left:2px solid #1D3A60;border-right:2px solid #1D3A60" :class="liangShiZuoWu_flag === 2 ? 'sanPinYiBiao_active' :''" @click="changeEcharts_5">单产</div> -->
              <!-- <div :class="liangShiZuoWu_flag === 3 ? 'sanPinYiBiao_active' :''" @click="changeEcharts_6">产量</div> -->
            </div>
            <div class="echarts_box" id="liangShiZuoWu"></div>
          </div>
        </div>

        
        <div class="management-top-div">
          <div class="management-charts-title">经济作物</div>
          <div class="text_box">
              <div>
                <span>总面积</span>
                <span style="color:#83E914">{{this.JJZW_total_area}}亩</span>
              </div>
              <div>
                <span>总产量</span>
                <span style="color:#00F6FF">{{this.JJZW_total_yield}}吨</span>
              </div>
            </div>
          <div class="content_box">
            <!-- <div class="text_box">
              <div>
                <span>出栏数量/头</span>
                <span style="color:#83E914">2547</span>
              </div>
              <div>
                <span>存栏数量/头</span>
                <span style="color:#01E8FD">2547</span>
              </div>
            </div> -->
            <div class="choice_btn">
              <!-- <div :class="jingJiZuoWu_flag === 1 ? 'sanPinYiBiao_active' :''" @click="changeEcharts_1">面积</div> -->
              <!-- <div style="border-left:2px solid #1D3A60;border-right:2px solid #1D3A60" :class="jingJiZuoWu_flag === 2 ? 'sanPinYiBiao_active' :''" @click="changeEcharts_2">单产</div> -->
              <!-- <div :class="jingJiZuoWu_flag === 3 ? 'sanPinYiBiao_active' :''" @click="changeEcharts_3">产量</div> -->
            </div>
            <div class="echarts_box" id="jingJiZuoWu"></div>
          </div>
        </div>
      </el-col>

    </div>

    <div class="management-bottom">

      <el-col :span="12">
        <div class="management-bottom-other-div">
          <div class="management-charts-title">种植类型占比</div>
          <div class="text_box">
              <div>
                <span>总面积</span>
                <span style="color:#83E914">{{ZZLX_area_total}}亩</span>
              </div>
              <div>
                <span>总产量</span>
                <span style="color:#00F6FF">{{ZZLX_yield_total}}吨</span>
              </div>
            </div>
          <div class="content_box">
            <!-- <div class="text_box_1">
              <div>
                <span>豆类子实/元</span>
                <span style="color:#83E914">2547</span>
              </div>
              <div>
                <span>饼粕类台/元</span>
                <span style="color:#01E8FD">2547</span>
              </div>
              <div>
                <span>槽查类/元</span>
                <span style="color:#D59842">2547</span>
              </div>
            </div> -->
            <div class="echarts_box" id="shengChanLeiXing">
              <!-- <div id="st_liqui_5"></div> -->
            </div>
            <!-- <div class="echarts_box" id="zhuYaoPinZhong"></div> -->
          </div>
        </div>
      </el-col>

      <el-col :span="12">
        <div class="management-bottom-other-div">
          <div class="management-charts-title">种植面积</div>
          
            <div class="text_box_1">
              <div v-for="(item,index) in ZZMJ_bigArr" :key="index">
                <span>{{item.name}}</span>
                <span style="color:#83E914">{{item.value}}亩</span>
              </div>
            </div>

          <div class="content_box">
            <!-- <div class="text_box_1">
              <div>
                <span>豆类子实/元</span>
                <span style="color:#83E914">2547</span>
              </div>
              <div>
                <span>饼粕类台/元</span>
                <span style="color:#01E8FD">2547</span>
              </div>
              <div>
                <span>槽查类/元</span>
                <span style="color:#D59842">2547</span>
              </div>
            </div> -->
            <div class="echarts_box" id="zhongZhiMianJi"></div>
          </div>
        </div>
      </el-col>

    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  // import BMap from 'BMap'
  import industryAnalysisMap from "./industryAnalysisMap";
  import chart from "../../js/visualiza/visPlant";
  import api from "../../request/visualiza1Api.js";
import echarts from '../../js/santaiEcharts/visPlant'
import liquidfill from '../../js/santaiEcharts/liquidfill'
import { getPZCL, getrapeplantdata, machinerycount, getproductionbytype,getproductionbytypeFood, getXZQSLS, getPeopleCounts } from '../../api/visPlant'
import { getBig } from '../../util/util'
  import Nav from './nav'
  export default {
    data() {
      return {
        //农业从业人口
        NYCYRK_value:[],
        //种植类型占比数据
        ZZLX_name: [],
        ZZLX_area: [],
        ZZLX_yield: [],
        ZZLX_area_total: 0,
        ZZLX_yield_total: 0,

        //种植面积数据
        ZZMJ_name: [],
        ZZMJ_value: [],
        ZZMJ_bigArr: [],

        //经济作物数据
        JJZW_name: [],
        JJZW_yield: [],   //产量
        JJZW_area: [],    //面积
        JJZW_total_area: 0,
        JJZW_total_yield: 0,

        //粮食作物数据
        LSZW_name: [],
        LSZW_yield: [],   //产量
        LSZW_area: [],    //面积
        LSZW_total_area: 0,
        LSZW_total_yield: 0,

        //农机数据 
        NJSJ_value:[],

        //主要品种面积数据  
        ZYPZ_year: [],
        ZYPZ_valueSD: [],
        ZYPZ_valueYC: [],
        SD_total: 0,
        YC_total: 0,

        //生产类型占比数据  
        SCLX_value: [],

        jingJiZuoWu_flag: 1,
        liangShiZuoWu_flag: 1,
        radio: '1',
        tabImportantArea: 'first',
        tabPlantArea: 'third',
        tabImportant: 'first',
        num:[],
        //种类、面积、预估产量数据
        ProductionData: {},
        outputValue:[],
        //弹框分页数据
        DialogPageData: {
          isFirstPage: true,
          isLastPage: true,
          list: [],
          PageNum: 1,
          PageSize: 10,
          pages: 1,
          total: 1
        },
        //作物品种名称-搜索框
        companyName: "",
        agricultural_storesTextMapping: {
        management_name: "经营主体名称",
        registered_capital: "注册资金(万元)",
        unit_property: "单位性质",
        unit_type: "单位类型",
        legal_name: "联系人",
        address: "地址",
        //price: "农资价格"
      },
        //@李晓群  对应的tif图层服务
        tifOption: [
          {
            id:"dxm",
            layername:"dxm",
            url:"http://39.98.226.242:8089/geoserver_hexian/hexian/wms?",
            layers:"hexian:dongxiaomai_2020",
            visible:false
          },
          {
            id:"gd",
            layername:"gd",
            url:"http://39.98.226.242:8089/geoserver_hexian/hexian/wms?",
            layers:"hexian:gengdi_2020",
            visible:false
          },
          {
            id:"ssny",
            layername:"ssny",
            url:"http://39.98.226.242:8089/geoserver_hexian/hexian/wms?",
            layers:"hexian:sheshinongye_2020",
            visible:false
          },
          {
            id:"yc",
            layername:"yc",
            url:"http://39.98.226.242:8089/geoserver_hexian/hexian/wms?",
            layers:"hexian:youcai_2020",
            visible:false
          },
          {
            id:"scyz",
            layername:"scyz",
            url:"http://39.98.226.242:8089/geoserver_hexian/hexian/wms?",
            layers:"hexian:shuichanyangzhi_2020",
            visible:false
          },
        ],
        a:[],
        plantHistoryData: {
          name: [],
          count: []
        },
      };
    },
    components: {
      industryAnalysisMap,
      Nav
    },
    methods: {
      //农事信息查询
      async getPeopleCountsData(){
        let res = await getPeopleCounts()
        console.log(res.data.data)
        this.NYCYRK_value = res.data.data
      },
      //获取种植面积数据  
      async getXZQSLS_data(){
        let res = await getXZQSLS()
        this.ZZMJ_name = res.data.data.map(item => item.typeName)
        this.ZZMJ_value = res.data.data.map(item => item.areas)
        this.ZZMJ_bigArr = getBig(
        res.data.data.map(item => {
          return {
            name: item.typeName,
            value: item.areas
          }
        }),3)
        console.log(this.ZZMJ_bigArr)
      },
      //获取经济作物、粮食作物数据  
      async getProductionByType(){
        let res_JJ = await getproductionbytype()//经济作物数据
        let res_LS = await getproductionbytypeFood()    //粮食作物数据
        console.log(res_JJ.data.data)

        for(var i = 0;i < res_LS.data.data.length - 1;i++){
          for(var j = res_LS.data.data.length - 1;j > i;j--){
            if(res_LS.data.data[i].yields < res_LS.data.data[j].yields){
              var temp = res_LS.data.data[i]
              res_LS.data.data[i] = res_LS.data.data[j]
              res_LS.data.data[j] = temp
            }
          }
        }

        for(var i = 0;i < res_JJ.data.data.length - 1;i++){
          for(var j = res_JJ.data.data.length - 1;j > i;j--){
            if(res_JJ.data.data[i].yields < res_JJ.data.data[j].yields){
              var temp = res_JJ.data.data[i]
              res_JJ.data.data[i] = res_JJ.data.data[j]
              res_JJ.data.data[j] = temp
            }
          }
        }

        this.JJZW_name = res_JJ.data.data.map(item => item.typeName)
        this.JJZW_yield = res_JJ.data.data.map(item => item.yields)
        this.JJZW_area = res_JJ.data.data.map(item => item.areas)
        res_JJ.data.data.forEach(item => {
          this.JJZW_total_area += item.areas
          this.JJZW_total_yield += item.yields
        })
        console.log(this.JJZW_yield)
        this.LSZW_name = res_LS.data.data.map(item => item.typeName)
        this.LSZW_yield = res_LS.data.data.map(item => item.yields)
        this.LSZW_area = res_LS.data.data.map(item => item.areas)
        res_LS.data.data.forEach((item) => {
          this.LSZW_total_area += item.areas
          this.LSZW_total_yield += item.yields
        })
      },
      //获取农机数据  
      async machineryCount(){
        let res = await machinerycount()
        console.log(res.data.data)

        for(var i = 0;i < res.data.data.length - 1;i++){
        for(var j = res.data.data.length - 1;j > i;j--){
          if(res.data.data[i].value * 1 < res.data.data[j].value * 1){
            var temp = res.data.data[i]
            res.data.data[i] = res.data.data[j]
            res.data.data[j] = temp
          }
        }
      }

        console.log(res.data.data)
        this.NJSJ_value = res.data.data
      },
      //获取主要品种面积数据  
      async getRapePlantData(){
        let res = await getrapeplantdata()
        let yearsArray=[];
         res.data.data.map( item => {
          if(item.typeName == '水稻'){
            this.SD_total += item.areas
            yearsArray.push(item.years)
          }else{
            this.YC_total += item.areas
          }
        })

         this.ZYPZ_year=yearsArray;
         let sd=[];
        res.data.data.map(item => {
          if(item.typeName == '水稻') {
            sd.push(item.areas);
          }
        })
        this.ZYPZ_valueSD=sd;
        let yc=[];
         res.data.data.map(item => {
          if(item.typeName == '油菜') {
            yc.push(item.areas);
          }
        })
        this.ZYPZ_valueYC =yc;
      },
      //获取种植类型占比数据  
      async getPZCL_data(){
        let res = await getPZCL()
        this.ZZLX_name = res.data.data.map(item => item.typeName)
        this.ZZLX_area = res.data.data.map(item => item.areas)
        this.ZZLX_yield = res.data.data.map(item => item.yields)
        res.data.data.forEach(item => {
          this.ZZLX_area_total += item.areas
          this.ZZLX_yield_total += item.yields
        })
        // this.SCLX_value = res.data.data.map(item => {
        //   return {
        //     name: item.typeName,
        //     value: item.areas
        //   }
        // })

        console.log(res.data.data)
      },

      // 经济作物
      changeEcharts_1(){
        this.jingJiZuoWu_flag = 1
        echarts.jingJiZuoWu_1('jingJiZuoWu', this.JJZW_name, this.JJZW_area, this.JJZW_yield)
      },
      changeEcharts_2(){
        this.jingJiZuoWu_flag = 2
        echarts.jingJiZuoWu_2('jingJiZuoWu')
      },
      changeEcharts_3(){
        this.jingJiZuoWu_flag = 3
        echarts.jingJiZuoWu_3('jingJiZuoWu', this.JJZW_name, this.JJZW_yield)
      },
      // 粮食作物
      changeEcharts_4(){
        this.liangShiZuoWu_flag = 1
        echarts.liangShiZuoWu_1('liangShiZuoWu', this.LSZW_name, this.LSZW_area, this.LSZW_yield)
      },
      changeEcharts_5(){
        this.liangShiZuoWu_flag = 2
        echarts.liangShiZuoWu_2('liangShiZuoWu')
      },
      changeEcharts_6(){
        this.liangShiZuoWu_flag = 3
        echarts.liangShiZuoWu_3('liangShiZuoWu', this.LSZW_name, this.LSZW_yield)
      },
      //生产类型占比
      initPlantTypeChart(data) {
        chart.EchartsPlantTypeChart("plantTypeChart", data);
      },
      //历年养殖趋势
      initPlantCropsChart(dataX, dataY1, dataY2) {
        chart.EchartsPlantCropsChart("plantCropsChart", dataX, dataY1, dataY2);
      },
      /*//主要品种面积 养殖
      initPlantImportantAreaPoultryChart(dataX, dataY) {
        chart.EchartsPlantImportantAreaPoultryChart("plantImportantAreaPoultryChart", dataX, dataY);
      },*/
      //主要品种面积 种植
      initPlantImportantAreaPlantChart(dataX, dataY) {
        chart.EchartsPlantImportantAreaPlantChart("plantImportantAreaPlantChart", dataX, dataY);
      },
      //历年种植趋势
      initPlantHistoryChart(data) {
        chart.EchartsPlantHistoryChart("plantHistoryChart", data);
      },
      //乡镇种植趋势 蔬菜
      initPlantTownShipVegetablesChart(dataX, dataY1, dataY2) {
        chart.EchartsPlantTownShipVegetablesChart("plantTownShipVegetablesChart", dataX, dataY1, dataY2);
      },
      //乡镇种植趋势 粮食
      initPlantTownShipFoodChart(dataX, dataY1, dataY2) {
        chart.EchartsPlantTownShipFoodChart("plantTownShipFoodChart", dataX, dataY1, dataY2);
      },
      //主要品种产量（种植）
      initPlantImportantYieldChart(data) {
        chart.EchartsPlantImportantChart("plantImportantYieldChart", data);
      },
      //主要品种产量（水产）
      initPlantImportantAquaticChart(data) {
        chart.EchartsPlantImportantChart("plantImportantAquaticChart", data);
      },
      //主要品种产量 tabs切换（水产）
      handleClickImportant(tab, event){
        if(tab.paneName =="second"){
          this.$http
            .get(
              api.ip + "/web/april7/mainproduct"
            )
            .then(
              res => {
                this.plantImportantAquatic = res.data.data.map(item => {
                  if (item != null) {
                    if (item.areas == null || item.areas == 0) {
                      item.areas = 0;
                    }
                    if (item.name == null) {
                      item.name = "";
                    }
                    return {
                      name: item.name,
                      value: item.areas
                    }

                  }
                });
                this.initPlantImportantAquaticChart(this.plantImportantAquatic);
              },
              err => {
                // this.$message.error("主要品种产量数据请求失败！");
              }
            );
        }
      },
      // 乡镇种植趋势 粮食 tab切换
      handleClickTownShip(tab, event){
        if(tab.paneName =="fourth"){
          this.$http
            .get(
              api.ip + "/web/production/getXZQSLS"
            )
            .then(
              res => {
                var plantTownShipFoodX = [];
                var plantTownShipFoodY1 = [];
                var plantTownShipFoodY2 = [];
                res.data.data.map(item => {
                  if (item != null) {
                    if (item.typeName == null) {
                      item.typeName = "";
                    }
                    if (item.areas == null) {
                      item.areas = 0;
                    }
                    if (item.yields == null) {
                      item.yields = "";
                    }
                    plantTownShipFoodX.push(item.typeName);
                    plantTownShipFoodY1.push(item.areas);
                    plantTownShipFoodY2.push(item.yields);
                  }
                });
                this.initPlantTownShipFoodChart(plantTownShipFoodX,plantTownShipFoodY1,plantTownShipFoodY2);
              },
              err => {
                // this.$message.error("乡镇种植趋势数据请求失败！");
              }
            );
        }
      },
      //初始化地图图层
      initLayer() {
      let _this = this;
      this.agricultural_stores = this.$refs.mapModel.addLayer({
        layername: "v_production_plant",
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
      initWMSTif() {
        for(let i=0;i<this.tifOption.length;i++){
          this.$refs.mapModel.addWMS(this.tifOption[i]);
        }
        //@李晓群 通过data里定义的名称可以设置各个图层的显示与隐藏，这些图层在同一层级，因此同时显示后加载的则会遮盖前加载的图层
        this.$refs.mapModel.map.getTileLayerByName("dxm").setVisible(true);
      },
      getDxmValue(){
        this.$refs.mapModel.map.getTileLayerByName("yc").setVisible(false);
        this.$refs.mapModel.map.getTileLayerByName("ssny").setVisible(false);
        this.$refs.mapModel.map.getTileLayerByName("scyz").setVisible(false);
        this.$refs.mapModel.map.getTileLayerByName("gd").setVisible(false);
        this.$refs.mapModel.map.getTileLayerByName("dxm").setVisible(true);
      },
      getYcValue(){
        this.$refs.mapModel.map.getTileLayerByName("dxm").setVisible(false);
        this.$refs.mapModel.map.getTileLayerByName("ssny").setVisible(false);
        this.$refs.mapModel.map.getTileLayerByName("scyz").setVisible(false);
        this.$refs.mapModel.map.getTileLayerByName("gd").setVisible(false);
        this.$refs.mapModel.map.getTileLayerByName("yc").setVisible(true);
      },
      getSsnyValue(){
        this.$refs.mapModel.map.getTileLayerByName("yc").setVisible(false);
        this.$refs.mapModel.map.getTileLayerByName("dxm").setVisible(false);
        this.$refs.mapModel.map.getTileLayerByName("scyz").setVisible(false);
        this.$refs.mapModel.map.getTileLayerByName("gd").setVisible(false);
        this.$refs.mapModel.map.getTileLayerByName("ssny").setVisible(true);
      },
      getScyzValue(){
        this.$refs.mapModel.map.getTileLayerByName("ssny").setVisible(false);
        this.$refs.mapModel.map.getTileLayerByName("yc").setVisible(false);
        this.$refs.mapModel.map.getTileLayerByName("dxm").setVisible(false);
        this.$refs.mapModel.map.getTileLayerByName("gd").setVisible(false);
        this.$refs.mapModel.map.getTileLayerByName("scyz").setVisible(true);
      },
      getGdValue(){
        this.$refs.mapModel.map.getTileLayerByName("scyz").setVisible(false);
        this.$refs.mapModel.map.getTileLayerByName("ssny").setVisible(false);
        this.$refs.mapModel.map.getTileLayerByName("dxm").setVisible(false);
        this.$refs.mapModel.map.getTileLayerByName("yc").setVisible(false);
        this.$refs.mapModel.map.getTileLayerByName("gd").setVisible(true);
      },
      getDialogPageData(currentPage) {
        //获取弹框分页数据
        let that = this;
        this.$http
          .get(
            api.ip + "/web/production/pageList",
            {
              params: {
                //createTime: that.createTime,
                currentPage: currentPage,
                pageSize: 10,
                companyName: that.companyName
              }
            }
          )
          .then(
            res => {
              // estimatedYield/plantArea
              let chanzhiList = res.body.data.list
              for(let i = 0; i < chanzhiList.length; i++){
                chanzhiList[i].chanzhi = chanzhiList[i].estimatedYield/chanzhiList[i].plantArea
              }
              this.DialogPageData = res.body.data;
              // const {list} = res.body.data
              // const resultList = list.map((item)=>{
              //   var areas =item.estimatedYield/100
              //   return {
              //     ...item,
              //     areas,
              //   }
              // })
              // this.DialogPageData.list  = resultList
              // console.log(this.DialogPageData.list)
            },
            err => {
              // this.$message.error("弹框请求失败！");
            }
          );
      },
    },
    async mounted() {
      this.initLayer();
      //农事信息查询
      await this.getPeopleCountsData()
      //获取种植面积数据  
      await this.getXZQSLS_data()
      //获取经济作物、粮食作物数据  
      await this.getProductionByType()
      //获取农机数据  
      await this.machineryCount()
      //获取主要品种面积数据  
      await this.getRapePlantData()    //接口不通
      //获取生产类型占比数据 
      await this.getPZCL_data()

    echarts.zhongZhiLeiXing('shengChanLeiXing', this.ZZLX_name, this.ZZLX_area, this.ZZLX_yield)
    echarts.zhongZhiMianJi('zhongZhiMianJi', this.ZZMJ_name, this.ZZMJ_value)
    echarts.zhuYaoPinZhong('zhuYaoPinZhong', this.ZYPZ_year, this.ZYPZ_valueSD,this.ZYPZ_valueYC)
    echarts.jingJiZuoWu_1('jingJiZuoWu', this.JJZW_name, this.JJZW_area, this.JJZW_yield)      //面积
    echarts.liangShiZuoWu_1('liangShiZuoWu', this.LSZW_name, this.LSZW_area, this.LSZW_yield)   //面积
    // echarts.shengChanLeiXing('shengChanLeiXing', this.SCLX_value)
    echarts.nongJiShuJu('nongJiShuJu', this.NJSJ_value)
      
      
    // liquidfill.liquidfill('st_liqui_5','生产类型')
    liquidfill.liquidfill_left('st_liqui_6','生产类型')
      // 百度地图API功能
      /*var map = new BMap.Map("allmap");
      var point = new BMap.Point(118.349417,31.804478);
      map.centerAndZoom(point, 11);
      // map.enableScrollWheelZoom(true);
      map.enableDragging(true);

      map.setMapStyleV2({
        styleId: '94ead68f435dee96e258129a8ce752a7'
      });

      //创建小狐狸
      var pt = new BMap.Point(118.360417,31.733478);
      var myIcon = new BMap.Icon("./static/002.gif", new BMap.Size(430,690));
      // 创建标注
      var marker2 = new BMap.Marker(pt,{icon:myIcon});
      // 将标注添加到地图中
      map.addOverlay(marker2); */

     /* function getBoundary(){
        var bdary = new BMap.Boundary();
        bdary.get("和县", function(rs){       //获取行政区域
          /!*map.clearOverlays();        //清除地图覆盖物     *!/
          var count = rs.boundaries.length; //行政区域的点有多少个
          if (count === 0) {
            alert('未能获取当前输入行政区域');
            return ;
          }
          var pointArray = [];
          for (var i = 0; i < count; i++) {
            var ply = new BMap.Polygon(rs.boundaries[i], {strokeWeight: 2, strokeColor: "#59c8fb"}); //建立多边形覆盖物
            map.addOverlay(ply);  //添加覆盖物
            pointArray = pointArray.concat(ply.getPath());
          }
        });
      }*/

      //获取统计种类、面积、预估产量
      this.$http
        .get(
          api.ip + "/web/production/getProductionData"
        )
        .then(
          res => {
            this.ProductionData = res.data.data;
          },
          err => {
            // this.$message.error("种类、面积、预估产量数据请求失败！");
          }
        );

      //生产类型占比
      this.$http
        .get(
          api.ip + "/web/production/getZZZB"
        )
        .then(
          res => {
            this.plantType = res.data.data.map(item => {
              if (item != null) {
                if (item.areas == null || item.areas == 0) {
                  item.areas = 0;
                }
                if (item.typeName == null) {
                  item.typeName = "";
                }
                return {
                  name: item.typeName,
                  value: item.areas
                }

              }
            });
            this.initPlantTypeChart(this.plantType);
          },
          err => {
            // this.$message.error("生产类型占比数据请求失败！");
          }
        );
      //主要品种面积
      this.$http
        .get(
          api.ip + "/web/production/get2019ZZZB"
        )
        .then(
          res => {
            var plantCropsX = [];
            var plantCropsY1 = [];
            var plantCropsY2 = [];
            res.data.data.map(item => {
              if (item != null) {
                if (item.years == null) {
                  item.years = "";
                }
                if (item.areas == null) {
                  item.areas = 0;
                }
                if (item.yields == null) {
                  item.yields = "";
                }
                plantCropsX.push(item.years);
                plantCropsY1.push(item.areas);
                plantCropsY2.push(item.yields);
              }
            });
            this.initPlantCropsChart(plantCropsX, plantCropsY1, plantCropsY2);
          },
          err => {
            // this.$message.error("历年养殖趋势数据请求失败！");
          }
        );
      this.$http
        .get(
          api.ip + "/web/production/getXZZZMJ"
        )
        .then(
          res => {
            var importantAreaPlantDataX = [];
            var importantAreaPlantDataY = [];
            res.data.data.map(item => {
              if (item != null) {
                if (item.areas == null) {
                  item.areas = 0;
                }
                if (item.typeName == null && item.areas != null) {
                  item.typeName = "";
                }
                importantAreaPlantDataX.push(item.typeName);
                importantAreaPlantDataY.push(item.areas);
              }
            });

            this.initPlantImportantAreaPlantChart(importantAreaPlantDataX,importantAreaPlantDataY);
          },
          err => {
            // this.$message.error("主要品种面积数据请求失败！");
          }
        );

      //历年种植趋势
      this.$http
        .get(
          api.ip + "/web/production/getZYPZCL"
        )
        .then(
          res => {
            let typeArr = [];
            let nameArr = [];
            res.data.data.forEach(item => {
              if (!typeArr.includes(item.types)) {
                typeArr.push(item.types);
              }
            });
            res.data.data.forEach(item => {
              if (!nameArr.includes(item.years)) {
                nameArr.push(item.years);
              }
            });

            let finArr = [];
            typeArr.forEach(item1 => {
              let _arr = [];
              nameArr.forEach((item2, index) => {
                _arr[index] = 0;
                res.data.data.forEach(a => {
                  if (a.years == item2 && a.types == item1) {
                    _arr[index] = a.areas;
                  }
                });
              });
              let valueObj = {
                name: item1,
                type: "line",
                smooth: true,
                data: _arr
              };
              finArr.push(valueObj);
            });
            this.plantHistoryData.type = finArr;
            this.plantHistoryData.name = nameArr;
            this.initPlantHistoryChart(this.plantHistoryData);
          },
          err => {
            // this.$message.error("历年种植趋势数据请求失败！");
          }
      );

      //乡镇种植趋势 蔬菜
      this.$http
        .get(
          api.ip + "/web/production/getXZQS"
        )
        .then(
          res => {
            var plantTownShipVegetablesX = [];
            var plantTownShipVegetablesY1 = [];
            var plantTownShipVegetablesY2 = [];
            res.data.data.map(item => {
              if (item != null) {
                if (item.typeName == null) {
                  item.typeName = "";
                }
                if (item.areas == null) {
                  item.areas = 0;
                }
                if (item.yields == null) {
                  item.yields = "";
                }
                plantTownShipVegetablesX.push(item.typeName);
                plantTownShipVegetablesY1.push(item.areas);
                plantTownShipVegetablesY2.push(item.yields);
              }
            });
            this.initPlantTownShipVegetablesChart(plantTownShipVegetablesX,plantTownShipVegetablesY1,plantTownShipVegetablesY2);
          },
          err => {
            // this.$message.error("乡镇种植趋势数据请求失败！");
          }
        );
      //主要品种产量（种植）
      this.$http
        .get(
          api.ip + "/web/production/getPZCL"
        )
        .then(
          res => {
            this.plantImportantYield = res.data.data.map(item => {
              if (item != null) {
                if (item.areas == null || item.areas == 0) {
                  item.areas = 0;
                }
                if (item.typeName == null) {
                  item.typeName = "";
                }
                return {
                  name: item.typeName,
                  value: item.areas
                }

              }
            });
            this.initPlantImportantYieldChart(this.plantImportantYield);
          },
          err => {
            // this.$message.error("主要品种产量数据请求失败！");
          }
        );
      this.initWMSTif();
    }
  }
</script>
<style>
</style>

