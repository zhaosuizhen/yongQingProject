<template>
  <div class="webSite-container"
       style="overflow: hidden">
    <div class="management-top">

      <el-col :span="6"
              class="management-top-aside">

        <div class="management-top-div"
             style="position: relative;">
          <!-- <div class="management-top-div"> -->
          <div class="content_box"
               style="padding: 10px 20px 10px 0;">
            <div class="item-top"
                 style="width:100%;height:50%;display:flex;justify-content: space-between;">
              <div id="environmentMoistureChart"
                   class="environment-charts-height"></div>
              <div id="environmentWeatherChart"
                   class="environment-charts-height"></div>
            </div>
            <div class="item.bottom"
                 style="width:100%;height:50%;display:flex;justify-content: space-between; margin-top:5%;">
              <div id="environmentCameraChart"
                   class="environment-charts-height"></div>
              <div id="environmentHouseChart"
                   class="environment-charts-height"></div>
            </div>

          </div>
        </div>

        <!-- <div class="management-top-div" @click="handleTownsChart"> -->
        <div class="management-top-div"
             style="position: relative;">
          <div class="management-charts-title">墒情站数据</div>
          <div class="content_box"
               style="padding: 10px 20px 10px 0;">
            <div class="management-item">
              <div class="management-environment-top-img">
                <img src="../../assets/visualiza/environment_soil.png"
                     alt="">
              </div>
              <div class="management-item-content">
                <div class="management-environment-top-concent"
                     style="overflow:auto;margin-top:-10px"
                     v-for="item in s_data"
                     :key="item.name"
                      @click="handleTendencyData(item.name,s_code)"
                     >
                  <p class="management-environment-concent-title"
                     style="font-size:12px">
                    {{item.name}}
                  </p>
                  <p class="management-environment-concent-num"
                     style="font-size:12px">
                    {{item.value}}
                  </p>
                </div>

              </div>
            </div>

          </div>
        </div>

      </el-col>

      <el-col :span="12"
              class="management-top-middle2"
              style="position: relative;">

        <div style="width: 100%;height: 100%;">
          <industryAnalysisMap ref="mapModel" style="width:100%;height:100%"></industryAnalysisMap>
        </div>

        <div v-if="radio == '2'"
             style="margin-right:0.3rem;margin-top:0.2rem"
             class="pigExample"><img src="../../assets/santai_img/mapExample/pigExample.png"
               alt=""></div>

        <!-- <div v-if="radio == '1'" class="mapPointExample mapPointExample_pig"></div> -->
      </el-col>

      <el-col :span="6"
              class="management-top-aside">

        <div class="management-top-div"
             style="position: relative;">
          <div class="management-charts-title">视频监控</div>
          <!--@click="handleLastyearChart"-->
          <!-- <div class="choice_btn_pig">
            <div :class="'sanPinYiBiao_active'" @click="openPigDialog">…</div>
          </div> -->
          <div class="content_box"
               id="videobox">

            <video id="video"
                   class="video-js vjs-default-skin vjs-big-play-centered"
                   controls="controls"
                   autoplay="autoplay"
                   preload="auto"
                   data-setup='{}'
                   style="width:96%;height:96%;left:2%">
              <source id="source"
                      ref="video"
                      src=""
                      type="application/x-mpegURL">
            </video>

          </div>
          <!-- <div id="geographyLastYearChart" class="management-charts-height"></div> -->
        </div>

        <!-- <div class="management-top-div" @click="handleUnitType"> -->
        <div class="management-top-div"
             style="position: relative;">
          <div class="management-charts-title">采集器数据</div>

          <div class="content_box"
               style="padding: 10px 20px 10px 0;">
            <div class="management-item">
              <div class="management-environment-top-img">
                <img src="../../assets/visualiza/environment_soil.png"
                     alt="">
              </div>
              <div class="management-item-content">
                <div class="management-environment-top-concent"
                     style="overflow:auto;margin-top:-10px"
                     v-for="(item,i) in cjq_data"
                     :key='i'
                      @click="handleTendencyData(item.name,cjq_code)"
                     >
                  <p class="management-environment-concent-title"
                     style="font-size:12px">
                    {{item.name}}
                  </p>
                  <p class="management-environment-concent-num"
                     style="font-size:12px">
                    {{item.value}}
                  </p>
                </div>

              </div>
            </div>

          </div>
          <!-- <div id="manageZhuTiChart" class="management-charts-height"></div> -->
        </div>

      </el-col>

    </div>
    <div class="management-bottom">

      <el-col :span="12">
        <!-- <div class="management-bottom-index-div" @click="YZCBJGdialog"> -->
        <div class="management-bottom-other-div">
          <div class="management-charts-title">产业园区</div>
        
          <div class="content_box">
     <div class="management-environment-bottom-img">
            <img src="../../assets/visualiza/environment_house.png">>
          </div>
            <el-carousel style="height:100%" direction="vertical" :autoplay="true" :interval="3000">
              <el-carousel-item v-for="item in sourceIntroduceData" :key="item.id" style="height:100%">
                <div class="management-source-introduce-content" >
                  <p class="management-source-introduce-title">
                    {{item.title}}
                  </p>
                  <p class="management-source-introduce-text" :title= 'item.companyIntroduction' >
                    {{item.content}}
                  </p>
                </div>
              </el-carousel-item>
            </el-carousel>
          </div>
        </div>
      </el-col>

      <el-col :span="12"
              style="padding:0">
        <div class="management-bottom-other-div"
             style="position: relative;">
          <div class="management-charts-title">气象监测</div>
          <div class="content_box">
            <div class="management-environment-bottom-img">
              <img src="../../assets/visualiza/environment_weather.png"
                   alt="">
            </div>
            <div class="management-environment-bottom-concent"
                 id="qxEnvironmentData">
              <div v-for="item in qx_data"
                   :key='item.name'
                   @click="handleTendencyData(item.name,qx_code)"
                   >
                <p class="management-environment-concent-title bottom-title">
                  {{item.name}}
                </p>
                <p class="management-environment-concent-num bottom-num">
                  {{item.value}}
                </p>
              </div>

            </div>
            <!-- <div class="echarts_box" id="xiangZhenYangZhi" @click="XZYZGMdialog"></div> -->
            <!-- <div class="echarts_box"
                 id="geXiangZhenShengZhuChanLiang"></div> -->
          </div>
        </div>
      </el-col>

    </div>

    <!-- 生猪视频弹窗 -->
    <!-- <div class="pig_video_dialog vis-geography">
      <el-dialog :visible.sync="pigDialogFlag"
                 width="90%">
        <div class="video_big_box">
          <div class="noClick"></div>
          <!-- 1 -->
          <!-- <div class="video_small_box">
            <div class="content_box"
                 style="height:100%"
                 id="videobox1">
              <video id="video1"
                     class="video-js vjs-default-skin vjs-big-play-centered"
                     controls="controls"
                     autoplay="autoplay"
                     preload="auto"
                     data-setup='{}'
                     style="width:96%;height:96%;left:2%">
                <source id="source1"
                        ref="video"
                        src=""
                        type="application/x-mpegURL">
              </video>
            </div>
          </div> -->
          <!-- 2 -->
          <!-- <div class="video_small_box">
            <div class="content_box"
                 style="height:100%"
                 id="videobox2">
              <video id="video2"
                     class="video-js vjs-default-skin vjs-big-play-centered"
                     controls="controls"
                     autoplay="autoplay"
                     preload="auto"
                     data-setup='{}'
                     style="width:96%;height:96%;left:2%">
                <source id="source2"
                        ref="video"
                        src=""
                        type="application/x-mpegURL">
              </video>
            </div>
          </div> -->
          <!-- 3 -->
          <!-- <div class="video_small_box">
            <div class="content_box"
                 style="height:100%"
                 id="videobox3">
              <video id="video3"
                     class="video-js vjs-default-skin vjs-big-play-centered"
                     controls="controls"
                     autoplay="autoplay"
                     preload="auto"
                     data-setup='{}'
                     style="width:96%;height:96%;left:2%">
                <source id="source3"
                        ref="video"
                        src=""
                        type="application/x-mpegURL">
              </video>
            </div>
          </div> -->
          <!-- 4 -->
          <!-- <div class="video_small_box">
            <div class="content_box"
                 style="height:100%"
                 id="videobox4">
              <video id="video4"
                     class="video-js vjs-default-skin vjs-big-play-centered"
                     controls="controls"
                     autoplay="autoplay"
                     preload="auto"
                     data-setup='{}'
                     style="width:96%;height:96%;left:2%">
                <source id="source4"
                        ref="video"
                        src=""
                        type="application/x-mpegURL">
              </video>
            </div>
          </div> -->
          <!-- 5 -->
          <!-- <div class="video_small_box">
            <div class="content_box"
                 style="height:100%"
                 id="videobox5">
              <video id="video5"
                     class="video-js vjs-default-skin vjs-big-play-centered"
                     controls="controls"
                     autoplay="autoplay"
                     preload="auto"
                     data-setup='{}'
                     style="width:96%;height:96%;left:2%">
                <source id="source5"
                        ref="video"
                        src=""
                        type="application/x-mpegURL">
              </video>
            </div>
          </div> -->
          <!-- 6 -->
          <!-- <div class="video_small_box">
            <div class="content_box"
                 style="height:100%"
                 id="videobox6">
              <video id="video6"
                     class="video-js vjs-default-skin vjs-big-play-centered"
                     controls="controls"
                     autoplay="autoplay"
                     preload="auto"
                     data-setup='{}'
                     style="width:96%;height:96%;left:2%">
                <source id="source6"
                        ref="video"
                        src=""
                        type="application/x-mpegURL">
              </video>
            </div>
          </div> -->
          <!-- 7 -->
          <!-- <div class="video_small_box">
            <div class="content_box"
                 style="height:100%"
                 id="videobox7">
              <video id="video7"
                     class="video-js vjs-default-skin vjs-big-play-centered"
                     controls="controls"
                     autoplay="autoplay"
                     preload="auto"
                     data-setup='{}'
                     style="width:96%;height:96%;left:2%">
                <source id="source7"
                        ref="video"
                        src=""
                        type="application/x-mpegURL">
              </video>
            </div>
          </div> -->
          <!-- 8 -->
          <!-- <div class="video_small_box">
            <div class="content_box"
                 style="height:100%"
                 id="videobox8">
              <video id="video8"
                     class="video-js vjs-default-skin vjs-big-play-centered"
                     controls="controls"
                     autoplay="autoplay"
                     preload="auto"
                     data-setup='{}'
                     style="width:96%;height:96%;left:2%">
                <source id="source8"
                        ref="video"
                        src=""
                        type="application/x-mpegURL">
              </video>
            </div>
          </div>
          <!-- 9 -->
          <!-- <div class="video_small_box">
            <div class="content_box"
                 style="height:100%"
                 id="videobox9">
              <video id="video9"
                     class="video-js vjs-default-skin vjs-big-play-centered"
                     controls="controls"
                     autoplay="autoplay"
                     preload="auto"
                     data-setup='{}'
                     style="width:96%;height:96%;left:2%">
                <source id="source9"
                        ref="video"
                        src=""
                        type="application/x-mpegURL">
              </video>
            </div>
          </div>
        </div>
      </el-dialog>
    </div>  -->

    <!-- 采集器数据 气象监测 弹框 -->
    <div class="vis-geography">
      <el-dialog title="现代产业园数据趋势"
                 :visible.sync="dialogEnvCount"
                 :close-on-press-escape='false'
                 :close-on-click-modal='false'
                 @close='closeDialog'
                  @open="open()"
                 >

        <div id="dataTendency"
             style="width:970px;height:500px">

        </div>
      </el-dialog>
    </div>

  </div>
</template>
<script type="text/ecmascript-6">
import industryAnalysisMap from "./industryAnalysisMap";
import chart1 from "../../js/visualiza/visEnvironment";
import api from "../../request/visualiza1Api.js";
import liquidfill from '../../js/santaiEcharts/liquidfill'
import echart from '../../js/santaiEcharts/visLivestock'
import echarts_home from '../../js/santaiEcharts/home'
import { getEquipmentNumber, getDataOfSoilMoistureStation, getHistoricalDataOfTheDevice } from '../../api/visDiseases'
import { startmarquee, getBig } from '../../util/util'
import VideoCom from '../video';
import echarts from 'echarts';
import changeSize from '@/util/changeSize';

import videojs from 'video.js'
import 'video.js/dist/video-js.css'
import 'videojs-contrib-hls'
export default {
  data () {
    return {
      dialogEnvCount: false,
      LTQY_count: 17,//龙头企业数量
      YZC_count: 510,//养殖场数量
      radio: '1',//单选
      thisYear: new Date().getFullYear() - 1,
      lastYear: new Date().getFullYear() - 2,
      choiceYear: new Date().getFullYear() - 1,//选择年份
      //乡镇养殖规模分页数据
      XZYZGM_textValue: '',
      XZYZGM_currentPage: 1,
      XZYZGM_pageSize: 10,
      XZYZGM_total: 0,
      //生猪视频地址
      pig_videp_urls: [],
      pigDialogFlag: true,
      //生猪养殖数据
      amountNum: 0,   //存栏数量
      breederNum: 0,  //养殖场数量
      outNum: 0,  //出栏数量
      //养殖规模数据
      XZYZGM_dialog_flag: false,
      XZYZGM_tableData: [],
      XZYZGM_inData: [],
      XZYZGM_outData: [],
      //乡镇养殖规模----出栏
      XZYZ_city_out: [],
      XZYZ_value_uot: [],
      XZYZ_bigArr: [],
      //乡镇养殖规模----存栏
      XZYZ_city_in: [],
      XZYZ_value_in: [],
      //养殖成本结构数据  
      YZCBJG_tableData: {},
      YZCBJG_dialog_flag: false,
      YZCB_time: [],    //时间
      YZCB_feed: [],    //饲料成本
      YZCB_bread: [],   //养殖成本
      YZCB_pig: [],     //仔猪成本
      //饲料原料价格数据
      table_YM: [],
      table_DP: [],
      time: [],
      siChuanYuMi: [],
      siChuanDoupo: [],
      quanGuoYuMi: [],
      quanGuoDoupo: [],
      //养殖产量占比数据
      YZCL_data: [],
      siLiaoYuanLiao_flag: true,
      xiangZhenYangZhi_flag: true,
      // 控制弹窗显示隐藏
      dialogGeographyStyleChart: false,
      dialogGeographyTownsChart: false,
      dialogGeographyStatisticsChart: false,
      // 进度条宽度
      strokeWidth: 12,
      //经营主体数据
      jingYingZhuTiData: {},
      //主体类型饼图数据
      qiYeLeiXingChart: {},
      //历年主体数量
      qiYeCount: {
        counts: [],
        year: []
      },
      // areaUnit:'亩',
      // sumsUnit:'万元',
      //获取各个乡镇主体数量柱形图
      xiangZhenCount: {
        name: [],
        count: []
      },
      //主体规模排行
      qiYeRank: {
        type: [],
        sum: []
      },
      //弹框分页数据
      DialogPageData: {
        isFirstPage: true,
        isLastPage: true,
        list: [],
        PageNum: 1,
        PageSize: 10,
        pages: 1,
        total: 1,
      },
      // dialogYear:'',
      //作物品种类别-搜索框
      managementName: "",

      managementTextMapping: {
        equipment_code: '设备编号',
      equipment_name: '设备名称',
      type_name: '设备类型',
      management_name: '企业名称'
      },
      //三品一标企业

      /**
      *
        数据data
      */
      tabThirdgrade: 'firstWgh',
      //设备数据
      sb_data: {},
      //情站数据
      s_code: 62914677,
      s_data: [],
     
      //采集器数据
      cjq_code: 62914678,
      cjq_data: [],
    
      //气象检测
      qx_code: 60883347,
      qx_data: [],
  
      //获取设备历史数据
      historyCode:null,
      historyName:null,

      //dialog echarts
      dialogDataX:[],
      dialogData:[],

        //产业园区假数据
        sourceIntroduceData:[
          {
            id:1,
            title:'恒都美业现代农业科技园区',
            content:'河北恒都美业农业开发有限公司，创建于2010年5月25日，公司先后获得“河北省农业产业化重点龙头企业”、“河北 省农业企业联合会常务副会长单位”、“河北省科技型企业”等荣誉。园区现状：园区总体规划面积27.9万亩，其中核心区面积3.68万亩。主导产业现状：园区以花卉和绿色蔬菜为主导产业。'
          },
            {
            id:2,
            title:'新苑的光现代农业园区',
            content:'新苑阳光现代农业园区，位于亦庄·永清高新区，由新苑阳光农业有限公司投资建设，成立于 2012年7月，注册资金1亿元。园区核心区占地5000亩，辐射带动区域3 万亩，累计完成投资3.2亿元，建成科技集成展示区、集约化蔬菜育苗区和集约化高效安全蔬菜种植基地，现有企业员工110余人。先后获得了"国家高效节水技术集成示范区"、"农业部蔬菜标准化创建基地"、"全国休闲农业和乡村旅游四星级示范企业"、"河北省农业产业化省级示范联合体"等荣誉称号。'
          },
            {
            id:3,
            title:'远村现代农业创区',
            content:' 廊坊远村现代农业园区位于永清县刘街乡土楼胜利村，由廊坊远村农业开发有限公司兴建，创建于 2013年6 月，规划面积 23.3平方公里，总投资 30 亿元，园区以蔬菜种植及加工、河北香菊种植及菊王茶加工、籽粒苋种植及饲草加工、生猪养殖及屠宰加工、有机肥生产加工、旅游观光为六大主导产业，经营土地1.3 万亩，涉及团结、建设等八个村街，先后被评为"中国魅力十佳乡村"、"全国文明村镇"、"第 29届奥运会食品供应保障单位"、"河北省现代农业园区"、"河北美丽田园"、"河北最美休闲农村""河北四星级休闲农业园"等。'
          },
            {
            id:4,
            title:'海岸田现代农业园区',
            content:'廊坊海泽田农业开发有限公司成立于2010年7月，注册资本 5000万元。是一家以健康生活为宗旨集科研、种植、养殖、采摘、旅游休闲为一体的现代健康生态循环农业企业。规划占地3000亩,现已建成高标准日光温室 171座、连栋智能温室 8640平米。公司以休闲养生、健康生态农业为主题，引进国内外种植技术，培育优质品种，积极推广膜下滴灌、蜜蜂授粉等技术，坚持使用有机肥料，形成了一套能够全年生产各种健康、绿色蔬菜的技术体系，有效保证了产品品质。 '
          },
            {
            id:5,
            title:'威世福地科技园',
            content:' 盛世福地科技园位于永清县三圣口乡，规划占地3000亩。园区坚持绿色农业、循环农业、旅游农业的发展道路，将现代科技农业、生态农业和观光旅游有机地紧密地结合在一起，以福文化和永定河文化为内涵，充分利用自然资源，重点建设了采摘区、垂钓池、生态酒店，木质别墅，儿童乐园、水上乐园，烧烤广场、青少年拓展训练基地等八个板块，致力于打造有别于城市旅游的具有浓厚乡土特色的乡村旅游示范园，年接待游客100余万人次，深受京津冀居民的欢迎。'
          }
        ]

        
    };
  },
  components: {
    industryAnalysisMap,
    VideoCom,
  },
  async mounted () {
    this.initLayer();
    this.getEquipmentNumber()
    this.SoilMoistureStation()
    this.collectorData()
    this.MeteorologicalDetection()
    this.EchartsPopUp()
    this.pigDialogFlag = false
    //获取视频地址
    await this.getPigVideoUrlData()
    echart.EchartsEnvironmentWeather('environmentMoistureChart')

  },
  methods: {
    //设备数据
    async getEquipmentNumber () {
      const res = await getEquipmentNumber()
      if (res.data.code === 0) {
        let weatherStation = []  //气象站
        let EnvironmentalControl = []  //环控设备
        let SoilMoistureStation = [] //墒情站
        let monitor = [] //监控
        res.data.data.forEach(item => {
          if (item.name === '气象站') {
            weatherStation.push(item)
            this.initEnvironmentMoistureChart(weatherStation)
          }
          if (item.name === '环控设备') {
            EnvironmentalControl.push(item)
            this.initEnvironmentWeatherChart(EnvironmentalControl)

          }
          if (item.name === '墒情站') {
            SoilMoistureStation.push(item)
            this.initEnvironmentCameraChart(SoilMoistureStation)
          }
          if (item.name === '监控设备') {
            monitor.push(item)
            this.initEnvironmentHouseChart(monitor)

          }

        })

      }
    },

    //墒情站数据
    async SoilMoistureStation () {
      const res = await getDataOfSoilMoistureStation({
        code: this.s_code
      })
      if (res.data.code === 0) {
        res.data.data.forEach(item => {
          if (item.name === '土壤温度') {
            this.s_data.push(item)
          }
          if (item.name === '土壤湿度') {
            this.s_data.push(item)
          }
          if (item.name === 'PH') {
            this.s_data.push(item)
          }
          if (item.name === 'EC') {
            this.s_data.push(item)
          }
       
        })

      }
    },

    //采集器数据
    async collectorData () {
      const res = await getDataOfSoilMoistureStation({
        code: this.cjq_code
      })
      if (res.data.code === 0) {
        res.data.data.forEach(item => {
          if (item.name === '空气温度') {
            this.cjq_data.push(item)
          }
          if (item.name === '空气湿度') {
            this.cjq_data.push(item)
          }
          if (item.name === '土壤温度') {
            this.cjq_data.push(item)
          }
          if (item.name === '土壤湿度') {
            this.cjq_data.push(item)
          }
          if (item.name === '光照') {
            this.cjq_data.push(item)
          }
          if (item.name === '二氧化碳') {
            this.cjq_data.push(item)
          }
        })

      }
    },
    //气象检测数据
    async MeteorologicalDetection () {
      const res = await getDataOfSoilMoistureStation({
        code: this.qx_code
      })
      if (res.data.code === 0) {
        res.data.data.forEach(item => {
          if (item.name === '空气温度') {
            this.qx_data.push(item)
          }
          if (item.name === '空气湿度') {
            this.qx_data.push(item)
          }
          if (item.name === '降雨量') {
            this.qx_data.push(item)
          }
          if (item.name === '风速') {
            this.qx_data.push(item)
          }
          if (item.name === '风向') {
            this.qx_data.push(item)
          }
          if (item.name === '气压') {
            this.qx_data.push(item)
          }
          if (item.name === '光照') {
            this.qx_data.push(item)
          }
          if (item.name === '土壤温度') {
            this.qx_data.push(item)
          }
        
        })
        console.log(this.qx_data)
      }
    },

    // 获取设备历史数据
    async getHistoricalDataOfTheDevice (name,code) {
          let nowTime = new Date().Format("yyyy-MM-dd hh:mm:ss");
        let yestodayTime = new Date().getTime() - 168 * 3600 * 1000;
        let yestodayDate = new Date(yestodayTime).Format("yyyy-MM-dd hh:mm:ss");
        const res = await getHistoricalDataOfTheDevice({
          code,
          createTime:yestodayDate,
          endTime:nowTime,
          type:name
        })
        if(res.data.code === 0){
        res.data.data.map(item=>{
             this.dialogDataX.push(item.date)
             this.dialogData.push(item.value)
        })
          this.EchartsPopUp(this.dialogDataX,this.dialogData,this.historyName)
        }
    },

    // 生产环境 气象站
    initEnvironmentMoistureChart (data) {
      echart.EchartsEnvironmentMoisture("environmentMoistureChart", data);
    },
    // 生产环境 环控设备
    initEnvironmentWeatherChart (data) {
      echart.EchartsEnvironmentWeather("environmentWeatherChart", data);
    },
    // 生产环境 监控设备
    initEnvironmentCameraChart (data) {
      echart.EchartsEnvironmentCamera("environmentCameraChart", data);
    },
    initEnvironmentHouseChart (data) {
      echart.EchartsEnvironmentHouse("environmentHouseChart", data);
    },
    EchartsPopUp (datax,data,title) {
      echart.EchartsPopUp("dataTendency",datax,data,title);
    },
    //点击弹框
    handleTendencyData (name,code) {
       this.$nextTick(()=>{
   this.historyName = name
       this.historyCode = code
        this.dialogEnvCount = true
       })
    
        //  this.getHistoricalDataOfTheDevice(name,code)
        // this.EchartsPopUp()
     
    },
    //弹框调取
       open(){
         
        this.$nextTick(() => {
        //  执行echarts方法
            this.getHistoricalDataOfTheDevice(this.historyName,this.historyCode)
        })
      },

//弹框取消时数据清空
    closeDialog(){
     this.dialogData =[]
     this.dialogDataX=[]

    },

    //生猪视频弹框
    // async openPigDialog () {
    //   this.pigDialogFlag = true
    // },
    //获取视频地址
    async getPigVideoUrlData () {
      let res = await getPigVideoUrl()
      console.log(res)
      this.pig_videp_urls = res.data.data.urls

      this.changeVideo('videobox', 6, 'video', 'source')
      this.changeVideo('videobox1', 11, 'video1', 'source1')
      this.changeVideo('videobox2', 12, 'video2', 'source2')
      this.changeVideo('videobox3', 13, 'video3', 'source3')
      this.changeVideo('videobox4', 2, 'video4', 'source4')
      this.changeVideo('videobox5', 4, 'video5', 'source5')
      this.changeVideo('videobox6', 5, 'video6', 'source6')
      this.changeVideo('videobox7', 10, 'video7', 'source7')
      this.changeVideo('videobox8', 8, 'video8', 'source8')
      this.changeVideo('videobox9', 9, 'video9', 'source9')
    },

    changeVideo (boxID, index, videoID, sourceID) {
      var player = videojs(videoID)                 //通过id获取到video对象
      player.pause()                                  //暂停video
      player.dispose()                                //销毁当前video
      document.getElementById(boxID).innerHTML = ''
      var str2 = `<video id="${videoID}"  class="video-js vjs-default-skin vjs-big-play-centered video-player"
                    poster="../assets/images/login-bg.jpg"
                    controls
                    autoplay="autoplay"
                    muted
                    preload="auto"
                    data-setup="{}">
                <source id="${sourceID}" src="${this.pig_videp_urls[index]}" type="application/x-mpegURL"> // 重新加载videojs，并赋值url
            </video>`
      document.getElementById(boxID).innerHTML = str2

      videojs(videoID, {
        bigPlayButton: false,            //播放按钮
        textTrackDisplay: false,
        posterImage: false,              //封面图片
        errorDisplay: false             //错误显示
      }, function () {
        this.play()
      })
    },

    initLayer () {
      var _this = this;
      this.managementLayer = this.$refs.mapModel.addLayer({
        layername: "c_equipment",
        clickType: "point",
        popupCallback (e) {
          var data = [];
          for (let key in _this.managementTextMapping) {
            if (_this.managementTextMapping[key] == '占地面积(亩)') {
              data.push({
                title: _this.managementTextMapping[key],
                value: parseFloat(e.get(key).toFixed(2))
              });
            } else {
              data.push({
                title: _this.managementTextMapping[key],
                value: e.get(key)
              });
            }
          }
          /*for (let key in _this.managementTextMapping) {
            data.push({
              title: _this.managementTextMapping[key],
              value: e.get(key)
            });
          }*/
          return { data: data };
        }
      });
      this.managementLayer.isPopUp = true;
    },
  }
};
</script>

<style lang="scss" >
.content_box{
  .el-carousel__indicator--vertical{
    padding:1px 12px !important;
  }
}
.el-dialog__body {
  width: 100%;
  height: 100%;
}
.environment-charts-height {
  width: 50%;
  height: 100%;
  float: left;
  // margin-top: 4%;
  margin-top: -2%;
}
.management-item {
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 100%;
  overflow: auto;
  .management-item-content {
    width: 70%;
    height: 20%;
  }
}
</style>

