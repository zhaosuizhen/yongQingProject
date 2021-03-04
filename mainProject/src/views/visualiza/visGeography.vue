<template>
  <div class="webSite-container" style="overflow: hidden">
    <div class="management-top">

      <el-col :span="6" class="management-top-aside">

        <div class="management-top-div">
          <div class="management-charts-title">土地资源结构</div>
          <div class="content_box">
            
            <div class="echarts_box echarts_box_liq">
              <div id="st_liqui_4"></div>
              <div id="tuDiZiYuan_1"></div>
            </div>
          </div>
        </div>

        <div class="management-top-div" >
          <div class="management-charts-title">耕地面积占比</div>
          <div class="areaOfLand content_box">
            <!-- <div class="text_box">
              <div>
                <span>耕地/万亩</span>
                <span style="color:#82E916">12547</span>
              </div>
              <div>
                <span>草地/万亩</span>
                <span style="color:#02E4F9">12547</span>
              </div>
              <div>
                <span>林地/万亩</span>
                <span style="color:#82E916">12457</span>
              </div>
              <div>
                <span>园地/万亩</span>
                <span style="color:#02E4F9">12547</span>
              </div>
            </div> -->
            <!-- <div class="echarts_box" id="zhongZhiLeiXing"></div> -->
            <div class="echarts_box ZZLX_box">
              <div class="ZZLX_box_item">
                <div class="ZZLX_box_item_echarts" id="GDMJ_box_item_echarts_left"></div>
                <p>{{GDMJ_name[0]}}</p>
                <p><span style="color:#3DD4FF">{{(GDMJ_left/10000).toFixed(2)}}</span>/万亩</p>
              </div>
              <div class="ZZLX_box_item">
                <div class="ZZLX_box_item_echarts" id="GDMJ_box_item_echarts_center"></div>
                <p>{{GDMJ_name[1]}}</p>
                <p><span style="color:#FEE36C">{{(GDMJ_center/10000).toFixed(2)}}</span>/万亩</p>
              </div>
              <div class="ZZLX_box_item">
                <div class="ZZLX_box_item_echarts" id="GDMJ_box_item_echarts_right"></div>
                <p>{{GDMJ_name[2]}}</p>
                <p><span style="color:#60D5B2">{{(GDMJ_right/10000).toFixed(2)}}</span>/万亩</p>
              </div>
            </div>
          </div>
        </div>
      </el-col>

      <!--地图内容-->
      <el-col :span="12" class="management-top-middle2" style="position: relative;">
        
        <img class="middle_img_top" src="../../assets/santai_img/top.png" width="100%" alt="">
        <img class="middle_img_leftB" src="../../assets/santai_img/left.png" alt="">
        <img class="middle_img_rightB" src="../../assets/santai_img/right.png" alt="">
        <h2 class="h2_title">数据改变农业，智慧创造未来</h2>


        <Map1 v-if="radio == 1" style="width:99.5%;height:99.5%;position: absolute;"></Map1>
        <Map2 v-if="radio == 2" style="width:99.5%;height:99.5%;position: absolute;"></Map2>
        <Map3 v-if="radio == 3" style="width:99.5%;height:99.5%;position: absolute;"></Map3>
        <Map4 v-if="radio == 4" style="width:99.5%;height:99.5%;position: absolute;"></Map4>
        <Map5 v-if="radio == 5" style="width:99.5%;height:99.5%;position: absolute;"></Map5>
        <Map6 v-if="radio == 6" style="width:99.5%;height:99.5%;position: absolute;"></Map6>
        <Map7 v-if="radio == 7" style="width:99.5%;height:99.5%;position: absolute;"></Map7>
        <Map8 v-if="radio == 8" style="width:99.5%;height:99.5%;position: absolute;"></Map8>

        <div v-if="radio == 1" class="mapExample"><img src="../../assets/santai_img/mapExample/1.png" alt=""></div>
        <div v-if="radio == 3" class="mapExample"><img src="../../assets/santai_img/mapExample/3.png" alt=""></div>
        <div v-if="radio == 4" class="mapExample"><img src="../../assets/santai_img/mapExample/4.png" alt=""></div>
        <div v-if="radio == 5" class="mapExample"><img src="../../assets/santai_img/mapExample/5.png" alt=""></div>
        <div v-if="radio == 6" class="mapExample"><img src="../../assets/santai_img/mapExample/6.png" alt=""></div>
        <div v-if="radio == 7" class="mapExample"><img src="../../assets/santai_img/mapExample/7.png" alt=""></div>
        <div v-if="radio == 8" class="mapExample"><img src="../../assets/santai_img/mapExample/8.png" alt=""></div>
        
        <div class="radioBox">
          <el-radio-group v-model="radio" @change="changeRadio">
            <el-radio label="1" style="color:#eee">土壤速效钾含量</el-radio>
            <!-- <el-radio label="2" style="color:#eee">222222</el-radio> -->
            <el-radio label="3" style="color:#eee">土壤有效磷含量</el-radio>
            <el-radio label="4" style="color:#eee">土壤全氮含量</el-radio>
            <el-radio label="5" style="color:#eee">土壤有机质含量</el-radio>
            <el-radio label="6" style="color:#eee">土壤地力等级</el-radio>
            <el-radio label="7" style="color:#eee">耕地质量采样点</el-radio>
            <el-radio label="8" style="color:#eee">土壤酸碱度分布</el-radio>
          </el-radio-group>
        </div>
        <!-- <div id="xzqinfo" class="geography-map-card">
          <div class="card-header">
            <span>详细信息</span>
            <span @click="cancelPop">
              <i class="el-icon-circle-close"></i>
            </span>
          </div>
          <div class="card-body">
            <p>镇名称：{{xzqInfo.name}}</p>
            <p>总面积：{{xzqInfo.totalArea}}亩</p>
            <p>承包地块数：{{xzqInfo.parcels}}个</p>
            <p>承包地块总面积：{{xzqInfo.parcelsAre}}亩</p>
            <p>非承包地块数：{{xzqInfo.nonContrac}}个</p>
            <p>非承包地块总面积：{{xzqInfo.nonContr_1}}亩</p>
            <p>颁发证书数量：{{xzqInfo.certificat}}个</p>
          </div>
          <span @click="infoCl" class="pop-btn">查看地块信息</span>
        </div>
        <div style="width: 100%;height: 100%;">
          <industryAnalysisMap ref="mapModel"></industryAnalysisMap>
        </div>
        <el-button @click="cancel" v-show="initState" type="primary" size="mini" class="geography-map-return-btn">
          <img src="../../assets/visualiza/icon--fanhui.png" alt="">
        </el-button>
        <div class="plant-radio-div" v-show="initState">
          <div class="radio-list">
            <el-radio v-model="radio" label="1" @change="changeLayer('3405232014JBNTBHQ')">基本农田保护区</el-radio>
          </div>

          <div class="radio-list">
            <el-radio v-model="radio" label="2" @change="changeLayer('3405232014JBNTBZP')">基本农田标志牌</el-radio>
          </div>
        </div>
        <img src="../../assets/visualiza/geography-legend.png" alt="" class="geography-legend"> -->

        <!--<img src="../../assets/visualiza/quequantu.png" style="width: 95%;height: 94%;margin: 1.5% 2.5%;object-fit: cover;">-->
      </el-col>

      <el-col :span="6" class="management-top-aside">

        <div class="management-top-div">
          <div class="management-charts-title">耕地地力等级</div>
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
            <div class="echarts_box" id="gengDiDiLi"></div>
          </div>
        </div>

        <!-- <div class="management-top-div" @click="handleCountMonitor"> -->
        <div class="management-top-div" style="position: relative;">
          <div class="management-charts-title">土地确权数据</div>
          <div class="null_img_sm"></div>
          <div class="dataUpdate">数据更新中</div>
            <!-- <div class="text_box">
              <div v-for="(item,index) in JCD_bigArr" :key="index">
                <span>{{item.name}}</span>
                <span style="color:#83E914">{{item.value}}万个</span>
              </div>
            </div>
          <div class="content_box" style="height:calc(100% - 50px);padding-top:5px;">
            <div class="echarts_box" id="jianCeDianFenBu"></div>
          </div> -->
        </div>

      </el-col>

    </div>

    <div class="management-bottom">

      <el-col :span="12">
        <div class="management-bottom-other-div" style="position: relative;">
          <div class="management-charts-title">幸福美丽新村</div>
            <div class="text_box_1">
              <div v-for="(item,index) in NCJZHJ_bigArr" :key="index">
                <span>{{item.name}}/个</span>
                <span style="color:#83E914">{{item.value}}</span>
              </div>
            </div>
            <div class="content_box" style="height:calc(100% - 50px);padding-top:5px;">
              <div class="echarts_box" id="nongCunRenJuHuanJing"></div>
            </div>
        </div>
      </el-col>

      <el-col :span="12">
        <div class="management-bottom-other-div">
          <div class="management-charts-title">乡镇耕地分布</div>
            <div class="text_box_1">
              <div v-for="(item,index) in GDFB_bigArr" :key="index">
                <span>{{item.name}}</span>
                <span style="color:#83E914">{{item.value}}亩</span>
              </div>
            </div>
          <div class="content_box" style="height:calc(100% - 50px);padding-top:5px;">
            <div class="echarts_box" id="xiangZhenGengDi"></div>
          </div>
        </div>
      </el-col>

    </div>
    <!--监测点分布弹窗-->
    <div class="vis-geography vis-dialog-geography-monitor">
      <el-dialog
        title="监测点分布"
        :visible.sync="dialogMonitor"
        :close-on-press-escape="false"
        :close-on-click-modal="false"
      >
        <el-table :data="dialogMonitordata" height="387">
          <el-table-column property="towns" label="乡镇" :show-overflow-tooltip="true" fixed></el-table-column>
          <el-table-column property="name" label="投入品名称" :show-overflow-tooltip="true"></el-table-column>
          <el-table-column property="areas" label="投入品监测值" :show-overflow-tooltip="true"></el-table-column>
        </el-table>
      </el-dialog>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import Map1 from '../mapPage/map_1';
import Map2 from '../mapPage/map_2';
import Map3 from '../mapPage/map_3';
import Map4 from '../mapPage/map_4';
import Map5 from '../mapPage/map_5';
import Map6 from '../mapPage/map_6';
import Map7 from '../mapPage/map_7';
import Map8 from '../mapPage/map_8';

import industryAnalysisMap from "./industryAnalysisMap";
import chart from "../../js/visualiza/visGeography";
import api from "../../request/visualiza1Api.js";
import echarts from '../../js/santaiEcharts/visGeography'
import liquidfill from '../../js/santaiEcharts/liquidfill'
import util from "../../util/util.js";
import getColorObj from '../../util/util'

import { getGDFB, getGDMJZB, landleval, survey, contractcount, contractarea, getLivableVillageData } from '../../api/visGeography'
import { landuse } from '../../api/home'
import { getBig } from '../../util/util'

export default {
  data() {
    return {
      radio: 1,
      //农村人居环境数据
      NCRJHJ_total:[],
      NCRJHJ_name:[],
      NCRJHJ_count:[],
      NCJZHJ_bigArr:[],
      //土地资源结构势数据  
      TDZY_value:[],
      //乡镇承包地块数量数据
      XZCB_count_name: [],
      XZCB_count_value: [],
      XZCB_count_total: 0,
      //乡镇承包地块面积数据
      XZCB_area_name: [],
      XZCB_area_value: [],
      XZCB_area_total: 0,

      //监测点分布数据
      JCD_name: [],
      JCD_value: [],
      JCD_bigArr: [],

      //耕地力等级数据
      GDDL_name: ['一级','二级','三级','四级','五级','六级','七级','八级','九级','十级'],
      GDDL_value: [],

      //乡镇耕地分布数据
      GDFB_name: [],
      GDFB_value: [],
      GDFB_bigArr: [],
      // 耕地面积占比数据
      GDMJ_data: [],
      GDMJ_total: 0,
      GDMJ_left: 0,       //水田
      GDMJ_center: 0,     //天田
      GDMJ_right: 0,      //旱地
      GDMJ_name: [],

      xiangZhenChengBao_flag: true,
      tabThirdgrade: "firstWgh",
      pname: "",
      // 控制弹窗显示隐藏
      dialogMonitor: false,

      // 进度条宽度
      strokeWidth: 12,

      //耕地数量，占地面积
      ParcelData: {},

      //弹框分页数据
      dialogMonitordata: [],
      //地块名称-搜索框
      parcelName: "",
      managementName: "",

      landTextMapping: {
        parcel_code: "地块编号",
        parcel_area: "地块面积(亩)",
        parcel_type: "地块类型",
        parcel_level: "耕地质量等级",
        crop_type: "作物类型",
        crop_varieties: "作物品种",
        plant_area: "种植面积(亩)",
        /*crop_pic: "作物图片",
          start_time: "开始种植时间",
          end_time: "结束种植时间",
          picking_time: "采摘收获时间",*/
        management_name: "经营主体名称"
      },
      //统计各经营主体数量 弹窗
      dialogList: {
        list: [],
        PageNum: 1,
        PageSize: 10,
        pages: 1,
        total: 1
      },
      //大棚和大田面积
      luTianCount: {
        name: [],
        count: []
      },
      //@李
      xzqSource: null,
      dkSource: null,
      infoLabel: null,
      selectFea:null,
      xzqInfo: {
        name: "",
        totalArea: "",
        parcels: "",
        parcelsAre: "",
        nonContrac: "",
        nonContr_1: "",
        certificat: ""
      },
      initState: false, //false代表此时属于行政区视角，true代表下面图层视角，各个视角下只能点击各自图层
      dataLayerArr: [
        {
          layername: "3405232014JBNTBHQ",
          clickType: "polygon",
          layerSRS: "EPSG:2363",
          attribute: {
            BSM: "标识码",
            // BHPKMJ:"保护片块面积",//没这字段
            JBNTMJ: "基本农田面积",
            GDMJ: "耕地面积"
          }
        },
        {
          layername: "3405232014JBNTBZP",
          clickType: "point",
          layerSRS: "EPSG:2363",
          attribute: {
            BSM: "标识码",
            XZQMC: "行政区名称",
            ZRDW: "责任单位",
            ZRMJ: "责任面积",
            SLSJ: "设立时间"
          }
        }
      ],
      GeographyLevels: {},
      radio: "1",
      colorList:getColorObj.gradientColor(this.globalColorConfig.startColor,this.globalColorConfig.endColor,this.globalColorConfig.colorStep) //颜色数组
    };
  },
  components: {
    industryAnalysisMap
  },
  async mounted() {
    // getBig([
    //     {name:'zsz',value: 23},
    //     {name:'zyh',value: 24},
    //     {name:'ym',value: 22},
    //     {name:'bear',value: 21}
    //     ],2)
      
      //获取农村人居环境数据
      await this.getLivableVillage()
    //获取土地资源结构势数据  
    await this.getLanduse()

      //获取乡镇承包地块面积数据
      await this.getContractarea()

      //获取乡镇承包地块数量数据
      await this.getContractcount()

      //获取监测点分布数据
      await this.getSurvey()

      //获取耕地力等级数据
      await this.landLeval()

      //获取获取乡镇耕地分布数据
      await this.getGDFB_data()

      //获取耕地面积占比数据
      await this.getGDMJZB_data()

      // echarts.gengDiMianJi('gengDiMianJi', this.GDMJ_data)
      // echarts.xiangZhenChengBao_1('sanPinYiBiao', this.XZCB_count_name, this.XZCB_count_value, this.XZCB_area_value)
      await echarts.gengDiDiLi('gengDiDiLi', this.GDDL_name, this.GDDL_value)
      // echarts.jianCeDianFenBu('jianCeDianFenBu', this.JCD_name, this.JCD_value)
      await echarts.xiangZhenGengDi('xiangZhenGengDi', this.GDFB_name, this.GDFB_value)
      await echarts.nongCunRenJuHuanJing('nongCunRenJuHuanJing', this.NCRJHJ_name, this.NCRJHJ_count)
      await echarts.tuDiZiYuan('tuDiZiYuan_1', this.TDZY_value)

      await echarts.zhongZhiLeiXing_left('GDMJ_box_item_echarts_left', this.GDMJ_left, this.GDMJ_total)
      await echarts.zhongZhiLeiXing_center('GDMJ_box_item_echarts_center', this.GDMJ_center, this.GDMJ_total)
      await echarts.zhongZhiLeiXing_right('GDMJ_box_item_echarts_right', this.GDMJ_right, this.GDMJ_total)
      
    liquidfill.liquidfill_left('st_liqui_4','土地资源结构','16%')

    
    //获取耕地数量 占地面积
    this.$http.get(api.ip + "/web/parcel/getParcelData").then(
      res => {
        this.ParcelData = res.data.data;
      },
      err => {
        // this.$message.error("耕地数据请求失败！");
      }
    );

    //土地资源结构
    this.$http.get(api.ip + "/web/april7/landuse").then(
      res => {
        this.GeographyZiYuan = res.data.data.map(item => {
          if (item != null) {
            if (item.areas == null || item.areas == 0) {
              item.areas = 0;
            }
            if (item.types == null) {
              item.types = "";
            }
            return {
              name: item.types,
              value: item.areas
            };
          }
        });
        this.initGeographyLandChart(this.GeographyZiYuan);
      },
      err => {
        // this.$message.error("土地资源结构数据请求失败！");
      }
    );
    //耕地面积占比
    this.$http.get(api.ip + "/web/april7/landusearea").then(
      res => {
        this.GeographyGengdi = res.data.data.map(item => {
          if (item != null) {
            if (item.areas == null || item.areas == 0) {
              item.areas = "0";
            }
            if (item.types == null) {
              item.types = "";
            }
            return {
              name: item.types,
              value: item.areas
            };
          }
        });
        this.initGeographyGengdiChart(this.GeographyGengdi);
      },
      err => {
        // this.$message.error("耕地面积占比数据请求失败！");
      }
    );

    //乡镇承包地块（数量）
    this.$http.get(api.ip + "/web/april7/contractcount").then(
      res => {
        var geographyNumDataX = [];
        var geographyNumDataY = [];
        res.data.data.map(item => {
          if (item != null) {
            if (item.counts == null) {
              item.counts = 0;
            }
            if (item.name == null) {
              item.name = "";
            }
            geographyNumDataX.push(item.name);
            geographyNumDataY.push(item.counts);
          }
        });

        this.initGeographyNumChart(geographyNumDataX, geographyNumDataY);
      },
      err => {
        // this.$message.error("乡镇承包地块(数量)数据请求失败！");
      }
    );

    //监测点分布
    this.$http.get(api.ip + "/web/april7/survey").then(
      res => {
        var geographyHouseNumDataX = [];
        var geographyHouseNumDataY = [];
        res.data.data.map(item => {
          if (item != null) {
            if (item.areas == null) {
              item.areas = 0;
            }
            if (item.name == null) {
              item.name = "";
            }
            geographyHouseNumDataX.push(item.name);
            geographyHouseNumDataY.push(item.areas);
          }
        });

        this.initGeographyLutianChart(
          geographyHouseNumDataX,
          geographyHouseNumDataY
        );
      },
      err => {
        // this.$message.error("监测点分布数据请求失败！");
      }
    );

    //乡镇耕地分布
    this.$http.get(api.ip + "/web/parcel/getGDFB").then(
      res => {
        var geographyHouseNumDataX = [];
        var geographyHouseNumDataY = [];
        res.data.data.map(item => {
          if (item != null) {
            if (item.counts == null) {
              item.counts = 0;
            }
            if (item.pname == null) {
              item.pname = "";
            }
            geographyHouseNumDataX.push(item.pname);
            geographyHouseNumDataY.push(item.counts.toFixed(2));
          }
        });

        this.initGeographyHouseNumChart(
          geographyHouseNumDataX,
          geographyHouseNumDataY
        );
      },
      err => {
        // this.$message.error("乡镇耕地分布数据请求失败！");
      }
    );

    // 耕地地力等级
    this.$http.get(api.ip + "/web/april7/landleval").then(
      res => {
        this.GeographyLevels.levels = res.data.data.map(item => {
          return item.levels;
        });
        this.GeographyLevels.areas = res.data.data.map(item => {
          return item.areas;
        });
        this.initGeographyLevelsChart(this.GeographyLevels);
      },
      err => {
        // this.$message.error("耕地地力等级数据请求失败！");
      }
    );
    let _this = this;
    // this.initLayer();
    this.insertSrs();
    this.initJBNTLayer();
    this.xzqSource = new znxdmap.source.Vector();
    let xzqLayer = new znxdmap.layer.Vector({
      title: "行政区图层",
      zIndex: 999,
      source: this.xzqSource,
      style: function(feature) {
        return _this.getXZQStyle(feature);
      }
    });
    this.$refs.mapModel.map.addLayer(xzqLayer);

    this.dkSource = new znxdmap.source.Vector();
    let dkLayer = new znxdmap.layer.Vector({
      title: "地块",
      zIndex: 99,
      source: this.dkSource,
      style: new znxdmap.style.Style({
        fill: new znxdmap.style.Fill({
          color: [255, 0, 0, 1]
        }),
        stroke: new znxdmap.style.Stroke({
          color: [255, 165, 0, 0.7],
          width: 1
        })
      })
    });
    this.$refs.mapModel.map.addLayer(dkLayer);
    this.initXZQ();//初始化图层
    this.infoLabel = new znxdmap.Overlay({
      element: document.getElementById("xzqinfo"),
      autoPan: true,
      autoPanAnimation: {
        duration: 250
      }
    });
    this.$refs.mapModel.map.map.addOverlay(this.infoLabel);
    this.$refs.mapModel.map.map.on("singleclick", e => {
      if(_this.initState){
        return false;
      }
      var feature = _this.$refs.mapModel.map.map.forEachFeatureAtPixel(
        e.pixel,
        function(feature) {
          return feature;
        }
      );
      debugger;
      if (feature && feature.xzq) {
        _this.selectFea = feature;
        _this.xzqInfo = {
          name: feature.getProperties()["乡"],
          totalArea: feature.getProperties()["totalArea"],
          parcels: feature.getProperties()["parcels"],
          parcelsAre: feature.getProperties()["parcelsAre"],
          nonContrac: feature.getProperties()["nonContrac"],
          nonContr_1: feature.getProperties()["nonContr_1"],
          certificat: feature.getProperties()["certificat"]
        }
        this.infoLabel.setPosition(e.coordinate);
      }
    });
  },
  methods: {
    async getLivableVillage(){
      debugger
      let res = await getLivableVillageData()
      this.NCRJHJ_total = res.data.data
      this.NCRJHJ_name = this.NCRJHJ_total.map(item => item.township)
      this.NCRJHJ_count = this.NCRJHJ_total.map(item => item.num)
      this.NCJZHJ_bigArr = getBig(this.NCRJHJ_total.map(item => {
        return {
            name: item.township,
            value: item.num
          }
      }),3)
    },
    //获取土地资源结构势数据  
    async getLanduse(){
      let res = await landuse()

      for(var i = 0;i < res.data.data.length - 1;i++){
        for(var j = res.data.data.length - 1;j > i;j--){
          if(res.data.data[i].areas < res.data.data[j].areas){
            var temp = res.data.data[i]
            res.data.data[i] = res.data.data[j]
            res.data.data[j] = temp
          }
        }
      }
      
      this.TDZY_value = res.data.data.map(item => {
        return {
          name: item.types,
          value: item.areas
        }
      })
    },
    //获取乡镇承包地块面积数据
    async getContractarea(){
      let res = await contractarea()
      this.XZCB_area_name = res.data.data.map(item => item.name)
      this.XZCB_area_value = res.data.data.map(item => item.areas)
      res.data.data.map(item => {
        this.XZCB_area_total += item.areas.toFixed(2) * 1
      })
    },
    //获取乡镇承包地块数量数据
    async getContractcount(){
      let res = await contractcount()
      this.XZCB_count_name = res.data.data.map(item => item.name)
      this.XZCB_count_value = res.data.data.map(item => item.counts)
      res.data.data.map(item => {
        this.XZCB_count_total += item.counts.toFixed(2) * 1
      })
    },
    //获取监测点分布数据
    async getSurvey(){
      let res = await survey()
      this.JCD_name = res.data.data.map(item => item.name)
      this.JCD_value = res.data.data.map(item => item.areas)
      console.log(res.data.data)
      this.JCD_bigArr = getBig(
        res.data.data.map(item => {
          return {
            name: item.name,
            value: item.areas
          }
        }),2)
    },
    //获取耕地力等级数据
    async landLeval(){
      let res = await landleval()
      let result=res.data.data
      this.GDDL_value.push(result[0].one)
      this.GDDL_value.push(result[0].two)
      this.GDDL_value.push(result[0].three)
      this.GDDL_value.push(result[0].four)
      this.GDDL_value.push(result[0].five)
      this.GDDL_value.push(result[0].six)
      this.GDDL_value.push(result[0].seven)
      this.GDDL_value.push(result[0].eight)
      this.GDDL_value.push(result[0].nine)
      this.GDDL_value.push(result[0].ten)
    },
    //获取获取乡镇耕地分布数据
    async getGDFB_data(){
      let res = await getGDFB()
      debugger
      this.GDFB_name = res.data.data.map( item => {
        return item.township
      } )
      this.GDFB_value = res.data.data.map( item => {
        return item.TotalLand
      } )
      this.GDFB_bigArr = getBig(
        res.data.data.map(item => {
          return {
            name: item.township,
            value: item.TotalLand
          }
        }),3)
    },
    //获取耕地面积占比数据
    async getGDMJZB_data(){
      let res = await getGDMJZB()
      console.log(res.data.data)
      res.data.data.forEach((item,index) => {
        this.GDMJ_name[index] = item.types
      })
      this.GDMJ_data = res.data.data.map( item => {
        this.GDMJ_total = this.GDMJ_total + item.areas
        if(item.types == this.GDMJ_name[0]){
          this.GDMJ_left = item.areas
        }
        if(item.types == this.GDMJ_name[1]){
          this.GDMJ_center = item.areas
        }
        if(item.types == this.GDMJ_name[2]){
          this.GDMJ_right = item.areas
        }
        return {name:item.types,value:item.areas}
      } )
    },
    changeEcharts_1(){
      this.xiangZhenChengBao_flag = true
      // echarts.xiangZhenChengBao_1('sanPinYiBiao', this.XZCB_count_name, this.XZCB_count_value, this.XZCB_area_value)
    },
    changeEcharts_2(){
      this.xiangZhenChengBao_flag = false
      // echarts.xiangZhenChengBao_2('sanPinYiBiao', this.XZCB_area_name, this.XZCB_area_value)
    },
    //土地资源结构
    initGeographyLandChart(data) {
      chart.EchartsGeographyLandChart("geographyLandChart", data);
    },
    //耕地面积占比
    initGeographyGengdiChart(data) {
      chart.EchartsGeographyGengdiChart("geographyGengdiChart", data);
    },
    //乡镇承包地块（数量）
    initGeographyNumChart(dataX, dataY) {
      chart.EchartsGeographyNumChart("geographyNumChart", dataX, dataY);
    },
    //乡镇承包地块（面积）
    initGeographyAreasChart(dataX, dataY) {
      chart.EchartsGeographyAreasChart("geographyAreasChart", dataX, dataY);
    },
    handleClickManage(tab, event) {
      if (tab.paneName == "secondOrganic") {
        this.$http.get(api.ip + "/web/april7/contractarea").then(
          res => {
            var geographyAreasDataX = [];
            var geographyAreasDataY = [];
            res.data.data.map(item => {
              if (item != null) {
                if (item.areas == null) {
                  item.areas = 0;
                }
                if (item.name == null) {
                  item.name = "";
                }
                geographyAreasDataX.push(item.name);
                geographyAreasDataY.push(item.areas);
              }
            });

            this.initGeographyAreasChart(
              geographyAreasDataX,
              geographyAreasDataY
            );
          },
          err => {
            // this.$message.error("乡镇承包地块(面积)数据请求失败！");
          }
        );
      }
    },
    //乡镇耕地分布
    initGeographyHouseNumChart(dataX, dataY) {
      chart.EchartsGeographyHouseNumChart("geographyHouseNumChart", dataX, dataY);
    },
    //耕地地力等级
    initGeographyLevelsChart(data) {
      chart.EchartsGeographyLevelsChart("geographyParkChart", data);
    },
    //监测点分布
    initGeographyLutianChart(dataX, dataY) {
      chart.EchartsGeographyLutianChart("geographyLutianChart", dataX, dataY);
    },
    cancel(){
      this.changeLayer();
      this.dkSource.clear();
      this.$refs.mapModel.map.getView().fit(this.xzqSource.getExtent());
      this.initState = false;
      this.selectFea.setStyle(this.getXZQStyle(this.selectFea));
      this.radio = '1'
    },
    infoCl() {
      if (!this.initState) {
        this.selectFea.setStyle(new znxdmap.style.Style({
          fill: new znxdmap.style.Fill({
            color: [255, 215, 0, 0]
          }),
          stroke: new znxdmap.style.Stroke({
            color: [255, 165, 0, 0.7],
            width: 2
          })
        }));
        this.$refs.mapModel.map.getView().fit(this.selectFea.getGeometry().getExtent());
        this.infoLabel.setPosition(undefined);
        //初始化加载基本农田保护区图层
        this.changeLayer("3405232014JBNTBHQ");
      }
      this.initState = true;
    },
    insertSrs() {
      ZNXDWEBGIS.Util.registerSRS(
        "EPSG:2363",
        [105.104943,31.103812],
        [105.104943,31.103812],
        "+proj=tmerc +lat_0=0 +lon_0=117 +k=1 +x_0=39500000 +y_0=0 +a=6378140 +b=6356755.288157528 +units=m +no_defs"
      );
    },
    initJBNTLayer() {
      let _this = this;
      for (let i = 0; i < this.dataLayerArr.length; i++) {
        var temp = this.$refs.mapModel.addLayer({
          layername: this.dataLayerArr[i].layername,
          layerSRS: this.dataLayerArr[i].layerSRS,
          clickType: this.dataLayerArr[i].clickType,
          popupCallback(e) {
            _this.dkSource.clear();
            _this.dkSource.addFeatures([e]);
            var data = [];
            for (let key in _this.dataLayerArr[i].attribute) {
              var obj = {
                title: "",
                value: ""
              };
              obj.title = _this.dataLayerArr[i].attribute[key];
              if (key == "SLSJ") {
                obj.value = util.formatTimeToStr(e.get(key), "yyyy-MM-dd");
              }else if(key == "JBNTMJ" || key == "GDMJ" || key == "ZRMJ"){
                obj.value = (e.get(key)/666.67).toFixed(2)+'亩';
              }else {
                obj.value = e.get(key);
              }
              data.push(obj);
            }
            /*return { data: data,title:"耕地面积" };*/
            return { data: data };
          }
        });
        // temp.isPopUp = true;
        temp.setVisible(false);
      }
      //@李
    },
    getXZQStyle(feature){
      let style = null;
      let name = feature.getProperties()["乡"];
      // let color = feature.getProperties()["color"];
      let totalArea = feature.getProperties()["totalArea"];
      //获取当前地块面积在颜色数组中的currentIndex值，currentIndex为1-13区间的值
      let currentIndex = Math.round((totalArea * 1).toFixed(2) / (this.globalColorConfig.maxArea/64))
      //根据currentIndex值匹配颜色 颜色索引值从0-12，currentIndex的值1-13，所以匹配时需减一
      let color = this.colorList[currentIndex-1]; 
      // color="rgba(67,207,193,0.9)";
      style = new znxdmap.style.Style({
        fill: new znxdmap.style.Fill({
          // color: color,
          color
        }),
        stroke: new znxdmap.style.Stroke({
          color: [124, 155, 179, 0.7],
          width: 0
        }),
        text: new znxdmap.style.Text({
          font: "bold 11px 微软雅黑",
          text: name,
          overflow: true,
          fill: new znxdmap.style.Fill({
            color: "#fff"
          })
        })
      });
      return style;
    },
    initXZQ() {
      let _this = this;
      let _obj = {
        service: "WFS",
        version: "1.0.0",
        request: "GetFeature",
        srsName: "EPSG:4326",
        typename: "santai:santai",
        outputFormat: "application/json"
      };
      ZNXDWEBGIS.Util.POST(
        geoserverurl + "/ows?",
        { type: "geo", obj: _obj },
        function(resjson) {
          let xzqhFeatures = new znxdmap.format.GeoJSON().readFeatures(resjson);
          let fs = [];
          for (let i = 0; i < xzqhFeatures.length; i++) {
            xzqhFeatures[i].xzq = true;
            xzqhFeatures[i].xzq = true;
            fs.push(xzqhFeatures[i]);
          }
          _this.xzqSource.addFeatures(fs);
          _this.$refs.mapModel.map.getView().fit(_this.xzqSource.getExtent());
          _this.initState = false;
        }
      );
    },
    // 地图弹窗关闭
    cancelPop(){
      this.infoLabel.setPosition(undefined);
    },
    //单选按钮切换地图图层
    changeLayer(layername) {
      this.dkSource.clear();
      //关闭弹框
      this.$refs.mapModel.map.removeOverlay(this.$refs.mapModel.popupLayer);
      let arr = this.$refs.mapModel.map.getAllDataLayers();
      for (let i = 0; i < arr.length; i++) {
        if (arr[i].layerName == layername) {
          this.$refs.mapModel.map
            .getDataLayerByName(arr[i].layerName)
            .setVisible(true);
          this.$refs.mapModel.map.getDataLayerByName(
            arr[i].layerName
          ).isPopUp = true;
        } else {
          this.$refs.mapModel.map
            .getDataLayerByName(arr[i].layerName)
            .setVisible(false);
          this.$refs.mapModel.map.getDataLayerByName(
            arr[i].layerName
          ).isPopUp = false;
        }
      }
    },
    //监测点分布详情
    getdialogMonitordata() {
      let that = this;
      this.$http
        .get(api.ip + "/web/april7/surveyinfo", {
          params: {}
        })
        .then(
          res => {
            this.dialogMonitordata = res.body.data;
            console.log("-----");
            console.log(this.dialogMonitordata);
          },
          err => {
            // this.$message.error("弹框请求失败！");
          }
        );
    },
    //获取经营主体数据
    getOperationsNum(currentPage) {
      let that = this;
      this.$http
        .get(api.ip + "/web/parcel/getreportyeardata", {
          params: {
            currentPage: currentPage,
            pageSize: 10,
            pname: this.pname
          }
        })
        .then(
          res => {
            this.dialogList.list = res.data.data;
          },
          err => {
            // this.$message.error("弹框请求失败！");
          }
        );
    },
    //监测点数据  弹框
    handleCountMonitor() {
      this.dialogMonitor = true;
      this.getdialogMonitordata();
    }
  },
  components:{
    Map1,
    Map2,
    Map3,
    Map4,
    Map5,
    Map6,
    Map7,
    Map8
  }
};
</script>
<style>
</style>

