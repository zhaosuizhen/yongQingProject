<template>
  <div class="webSite-container" style="overflow: hidden">
    <div class="management-top">
      
      <el-col :span="6" class="management-top-aside">

        <div class="management-top-div" style="position: relative;">
          <div class="management-charts-title">视频监控</div> <!--@click="handleLastyearChart"-->
          <div class="choice_btn_pig">
            <div :class="'sanPinYiBiao_active'" @click="openPigDialog">…</div>
          </div>
          <div class="content_box" id="videobox">

            <video id="video" class="video-js vjs-default-skin vjs-big-play-centered" controls="controls" autoplay="autoplay" preload="auto" data-setup='{}' style="width:96%;height:96%;left:2%" >    
                <source id="source" ref="video" src=""  type="application/x-mpegURL">
            </video>

          </div>
          <!-- <div id="geographyLastYearChart" class="management-charts-height"></div> -->
        </div>


        <!-- <div class="management-top-div" @click="handleUnitType"> -->
        <div class="management-top-div" style="position: relative;">
          <div class="management-charts-title">养殖产量占比统计</div>

          <select style="position: absolute;top:8px;right:8px;border:0;border-radius:3px;background:#153D52;border:1px solid #ccc;color:#fff;width:80px;height:25px" :value="2019" @change="choiceYear_YZCLZB">
            <option value = "2015">2015</option>
            <option value = "2016">2016</option>
            <option value = "2017">2017</option>
            <option value = "2018">2018</option>
            <option value = "2019">2019</option>
          </select>

          <div class="content_box" style="position: relative;">

            <!-- <div class="echarts_box_1 echarts_box_liq" style="height:calc(100% - 90px)"> -->
              
            <div class="echarts_box" id="yangZhiChanLiang"></div>
            <!-- </div> -->
          </div>
          <!-- <div id="manageZhuTiChart" class="management-charts-height"></div> -->
        </div>

      </el-col>

      <el-col :span="12" class="management-top-middle2" style="position: relative;">
        
        <div style="width: 100%;height: 100%;">
          <industryAnalysisMap ref="mapModel" style="width:100%;height:100%"></industryAnalysisMap>
          <div class="mapExample">
            <img width="30%" src="../../assets/yongqing_img/jyzt.png" alt="">
            <p>图例</p>
            <p>畜牧养殖</p>
          </div>
          <!-- <middleMap11 v-if="radio == '1'" style="width:99.5%;height:99.5%;position: absolute;"></middleMap11>
          <middleMap12 v-if="radio == '2'" style="width:99.5%;height:99.5%;position: absolute;"></middleMap12> -->
        </div>
        
        <div v-if="radio == '2'" style="margin-right:0.3rem;margin-top:0.2rem" class="pigExample"><img src="../../assets/santai_img/mapExample/pigExample.png" alt=""></div>
        
        <!-- <div class="radioBox">
          <el-radio-group v-model="radio">
            <el-radio label="1" style="color:#eee">养殖场</el-radio>
            <el-radio label="2" style="color:#eee">大型种猪养殖场</el-radio>
          </el-radio-group>
        </div> -->

        <!-- <div v-if="radio == '1'" class="mapPointExample mapPointExample_pig"></div> -->
      </el-col>

      <el-col :span="6" class="management-top-aside">
        
        <div class="management-top-div" style="position: relative;">
          <div class="management-charts-title">生猪养殖情况</div>
          <div class="choice_btn">
            <div :class="zhuIn_flag ? 'sanPinYiBiao_active' :''" @click="changeEcharts_zhuIn">存栏</div>
            <div :class="zhuIn_flag ? '' :'sanPinYiBiao_active'" @click="changeEcharts_zhuOut">出栏</div>
          </div>
          <div class="content_box">
            <div class="echarts_box" id="shengZhuYangZhiQingKuang"></div>
          </div>
        </div>

        <!-- <div class="management-top-div" @click="handleUnitType"> -->
        <div class="management-top-div3" style="height:95%;position: relative;">
          <div class="management-charts-title">各乡镇{{zhu_text}}量</div>
          <div class="unit">单位/百头</div>
          <div class="content_box">
            <div class="echarts_box" id="zhuXiangZhen"></div>
          </div>
          <!-- <div id="manageZhuTiChart" class="management-charts-height"></div> -->
        </div>

      </el-col>

    </div>
    <div class="management-bottom">

      <el-col :span="6">
        <!-- <div class="management-bottom-index-div" @click="YZCBJGdialog"> -->
        <div class="management-bottom-index-div">
          <div class="management-charts-title">生猪养殖产量</div>

          <div class="content_box">
            <div class="echarts_box" id="shengZhuYangZhiChanLiang" ></div>
          </div>
        </div>
      </el-col>

      <el-col :span="12" style="padding:0">
        <div class="management-bottom-other-div" style="position: relative;" >
          <div class="management-charts-title">各乡镇生猪产量</div>

          <div class="content_box">
            <!-- <div class="echarts_box" id="xiangZhenYangZhi" @click="XZYZGMdialog"></div> -->
            <div class="echarts_box" id="geXiangZhenShengZhuChanLiang"></div>
          </div>
        </div>
      </el-col>



    </div>


    
    <!-- 生猪视频弹窗 -->
    <div class="pig_video_dialog vis-geography">
        <el-dialog :visible.sync="pigDialogFlag" width="90%">
            <div class="video_big_box">
              <div class="noClick"></div>
              <!-- 1 -->
                <div class="video_small_box">
                  <div class="content_box" style="height:100%" id="videobox1">
                    <video id="video1" class="video-js vjs-default-skin vjs-big-play-centered" controls="controls" autoplay="autoplay" preload="auto" data-setup='{}' style="width:96%;height:96%;left:2%" >    
                        <source id="source1" ref="video" src=""  type="application/x-mpegURL">
                    </video>
                  </div>
                </div>
                <!-- 2 -->
                <div class="video_small_box">
                  <div class="content_box" style="height:100%" id="videobox2">
                    <video id="video2" class="video-js vjs-default-skin vjs-big-play-centered" controls="controls" autoplay="autoplay" preload="auto" data-setup='{}' style="width:96%;height:96%;left:2%" >    
                        <source id="source2" ref="video" src=""  type="application/x-mpegURL">
                    </video>
                  </div>
                </div>
                <!-- 3 -->
                <div class="video_small_box">
                  <div class="content_box" style="height:100%" id="videobox3">
                    <video id="video3" class="video-js vjs-default-skin vjs-big-play-centered" controls="controls" autoplay="autoplay" preload="auto" data-setup='{}' style="width:96%;height:96%;left:2%" >    
                        <source id="source3" ref="video" src=""  type="application/x-mpegURL">
                    </video>
                  </div>
                </div>
                <!-- 4 -->
                <div class="video_small_box">
                  <div class="content_box" style="height:100%" id="videobox4">
                    <video id="video4" class="video-js vjs-default-skin vjs-big-play-centered" controls="controls" autoplay="autoplay" preload="auto" data-setup='{}' style="width:96%;height:96%;left:2%" >    
                        <source id="source4" ref="video" src=""  type="application/x-mpegURL">
                    </video>
                  </div>
                </div>
                <!-- 5 -->
                <div class="video_small_box">
                  <div class="content_box" style="height:100%" id="videobox5">
                    <video id="video5" class="video-js vjs-default-skin vjs-big-play-centered" controls="controls" autoplay="autoplay" preload="auto" data-setup='{}' style="width:96%;height:96%;left:2%" >    
                        <source id="source5" ref="video" src=""  type="application/x-mpegURL">
                    </video>
                  </div>
                </div>
                <!-- 6 -->
                <div class="video_small_box">
                  <div class="content_box" style="height:100%" id="videobox6">
                    <video id="video6" class="video-js vjs-default-skin vjs-big-play-centered" controls="controls" autoplay="autoplay" preload="auto" data-setup='{}' style="width:96%;height:96%;left:2%" >    
                        <source id="source6" ref="video" src=""  type="application/x-mpegURL">
                    </video>
                  </div>
                </div>
                <!-- 7 -->
                <div class="video_small_box">
                  <div class="content_box" style="height:100%" id="videobox7">
                    <video id="video7" class="video-js vjs-default-skin vjs-big-play-centered" controls="controls" autoplay="autoplay" preload="auto" data-setup='{}' style="width:96%;height:96%;left:2%" >    
                        <source id="source7" ref="video" src=""  type="application/x-mpegURL">
                    </video>
                  </div>
                </div>
                <!-- 8 -->
                <div class="video_small_box">
                  <div class="content_box" style="height:100%" id="videobox8">
                    <video id="video8" class="video-js vjs-default-skin vjs-big-play-centered" controls="controls" autoplay="autoplay" preload="auto" data-setup='{}' style="width:96%;height:96%;left:2%" >    
                        <source id="source8" ref="video" src=""  type="application/x-mpegURL">
                    </video>
                  </div>
                </div>
                <!-- 9 -->
                <div class="video_small_box">
                  <div class="content_box" style="height:100%" id="videobox9">
                    <video id="video9" class="video-js vjs-default-skin vjs-big-play-centered" controls="controls" autoplay="autoplay" preload="auto" data-setup='{}' style="width:96%;height:96%;left:2%" >    
                        <source id="source9" ref="video" src=""  type="application/x-mpegURL">
                    </video>
                  </div>
                </div>
            </div>
        </el-dialog>
    </div>



  </div>
</template>
<script type="text/ecmascript-6">
import industryAnalysisMap from "./industryAnalysisMap";
import middleMap11 from "./middleMap11";
import middleMap12 from "./middleMap12";
import api from "../../request/visualiza1Api.js";
import liquidfill from '../../js/santaiEcharts/liquidfill'
import echart from '../../js/santaiEcharts/visDiseases'
import echart_Ophiopogon from '../../js/santaiEcharts/visOphiopogon'
import echarts_home from '../../js/santaiEcharts/home'
import { getBreedProportion, getMaterialPrice, getLiveStockYield, getLiveStockData, getPigVideoUrl, getBreedPageList,
         proportionOfAquacultureOutput, pigBreedingYield, eachTowhShipPigBreedingYield } from '../../api/visLivestock'
import { cattleBreeding, inOrOutAmount } from '../../api/visOphiopogon'
import { getcoststructure } from '../../api/home'
import { startmarquee, getBig } from '../../util/util'
import VideoCom from '../video';
import echarts from 'echarts';
import changeSize from '@/util/changeSize';

import videojs from 'video.js'
import 'video.js/dist/video-js.css'
import 'videojs-contrib-hls'
export default {
  data() {
    return {
      zhu_text: '存栏',
      zhu_year: 2019,
      zhuIn_flag: true,
      LTQY_count:17,//龙头企业数量
      YZC_count:510,//养殖场数量
      radio:'1',//单选
      thisYear:new Date().getFullYear() - 1,
      lastYear:new Date().getFullYear() - 2,
      choiceYear:new Date().getFullYear() - 1,//选择年份
      //乡镇养殖规模分页数据
      XZYZGM_textValue: '',
      XZYZGM_currentPage:1,
      XZYZGM_pageSize:10,
      XZYZGM_total: 0,
      //生猪视频地址
      pig_videp_urls:[],
      pigDialogFlag: true,
      //生猪养殖数据
      amountNum: 0,   //存栏数量
      breederNum: 0,  //养殖场数量
      outNum: 0,  //出栏数量
      //养殖规模数据
      XZYZGM_dialog_flag: false,
      XZYZGM_tableData:[],
      XZYZGM_inData:[],
      XZYZGM_outData:[],
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
      table_YM:[],
      table_DP:[],
      time:[],
      siChuanYuMi:[],
      siChuanDoupo:[],
      quanGuoYuMi:[],
      quanGuoDoupo:[],
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
        enterprise_name: "经营主体名称",
        subject_type: "经营主体类型",
        manage_type: "经营类别",
        legal_person: "法人姓名",
        registered_capital:"注册资金(万元)",
        adress: "详细地址",
        //product_service: "主营产品服务",
        /*unit_head_pic: "单位头像",
          registration_date: "注册日期",
          business_license_no: "营业执照号",*/
        // legal_name: "法人姓名",
        /* turnover: "年营业额",
            registered_capital: "注册资金(万元)",*/
        /*contacts_name: "联系人姓名",*/
        // email: "电子邮箱"
        /*fixed_telephone: "固定电话",
          fax: "传真",
          mobile_phone: "移动电话",
          postal_code: "邮政编码",
          fixed_employees: "固定从业人数",
          temporary_employees: "临时用工人数",
          poverty_population: "带动贫困人数",
          total_people: "共计人数",
          product_type: "种植、养殖、畜禽通用字段",
          varieties: "种植、养殖、畜禽通用字段",
          plant_area: "种植面积（km2）",
          yield: "产量（公斤）",
          output_value: "产值（万元）",
          aquaculture_area: "养殖面积（亩）",
          breed_yield: "养殖产量（吨）",
          breed_output_value: "养殖产值（万元）",
          design_scale: "年出栏/笼(头、只等)",
          livestock_hand: "年末存栏/笼（头、只等）",
          female_livestock: "能繁母畜禽存栏(头、只等)",
          egg_yield: "年畜蛋产量(吨)",
          fixed_assets: "固定资产(万元)",
          whether_leading_ent: "是否龙头主体",
          whether_regulations_ent: "规模以上主体是一个统计术语",
          total_investment: "投资总额",
          main_product: "主要产品",
          annual_output: "年产量(吨)",
          annual_output_value: "年产值(万元)",
          registered_trademark: "注册商标",
          origin_address: "产地地址",
          product_name: "产品名称",
          batch_production: "批量产量",
          certificate_number: "证书编号",
          certification_period: "认证有效期限",
          certification_mechanism_name: "作出认证的机构名称",
          certification_date: "作出认证的日期",
          prize_name: "获奖名称",
          prize_time: "获奖时间",
          agency_name: "作出奖励的机关名称",
          remarks: "备注",
          park_name: "园区名称",
          park_id: "园区编号",
          update_time: "修改时间",
          the_position: "地理位置"*/
      },
      //三品一标企业
      tabThirdgrade: 'firstWgh',
    };
  },
  components: {
    industryAnalysisMap,
    VideoCom,
    middleMap11,
    middleMap12
  },
  async mounted() {
    this.initLayer();
    this.pigDialogFlag = false

    //获取养殖产量占比数据 
    await this.proportionOfAquacultureOutputData(2019)
    //生猪养殖产量
    await this.pigBreedingYieldData()
    //各乡镇生猪产量
    await this.eachTowhShipPigBreedingYieldData(2019)
    //获取生猪养殖情况
    await this.getCattleBreeding('存栏')
    //获取生猪各乡镇存出栏量
    await this.getInOrOutAmount(0, this.zhu_year)

    
    // liquidfill.liquidfill_left('st_liqui_1','养殖产量', '15.5%')
    liquidfill.liquidfill_left('st_liqui_1')
    //获取视频地址
    await this.getPigVideoUrlData()

    
  },
  methods: {
    changeEcharts_zhuIn(){
      this.zhuIn_flag = true
      this.zhu_text = '存栏'
      this.getCattleBreeding(this.zhu_text)
      this.getInOrOutAmount(0, this.zhu_year)
    },
    changeEcharts_zhuOut(){
      this.zhuIn_flag = false
      this.zhu_text = '出栏'
      this.getCattleBreeding(this.zhu_text)
      this.getInOrOutAmount(1, this.zhu_year)
    },
    //永清--获取住各乡镇量
    async getInOrOutAmount( inOrOut, year){
      let res = await inOrOutAmount({dataType: 3, inOrOut, year})
      let xData = res.data.data.map(item => item.township)
      let yData = res.data.data.map(item => item.value)
      echart_Ophiopogon.geXiangZhenChangLiang_col('zhuXiangZhen', xData, yData)
    },
    //永清--获取生猪养殖情况
    async getCattleBreeding(type){
      let res = await cattleBreeding({dataType: 3})
      let xData = res.data.data.map(item => item.years)
      let yData = ( type == '存栏' ) ? res.data.data.map(item => item.in) : res.data.data.map(item => item.out)
      this.yangZhiQingKuang_echarts('shengZhuYangZhiQingKuang', xData, yData, 0)
    },
    //永清--养殖产量占比
    async proportionOfAquacultureOutputData(year){
      let res = await proportionOfAquacultureOutput({year})
      echart.yangZhiChanLiang('yangZhiChanLiang', res.data.data)
    },
    //永清--养殖产量占比选择年份
    choiceYear_YZCLZB(e){
      //获取养殖产量占比数据 
      this.proportionOfAquacultureOutputData(e.target.value)
    },
    //永清--生猪养殖产量
    async pigBreedingYieldData(){
      let res = await pigBreedingYield()
      let xData = res.data.data.map(item => item.year)
      let yData = res.data.data.map(item => item.value)
      this.shengZhuYangZhiChanLiang_echarts('shengZhuYangZhiChanLiang', xData, yData)
    },
    //永清--各乡镇生猪产量
    async eachTowhShipPigBreedingYieldData(year){
      let res = await eachTowhShipPigBreedingYield({year})
      let xData = res.data.data.map(item => item.townShip)
      let yData = res.data.data.map(item => item.value)
      echart.geXiangZhenShengZhuChanLiang('geXiangZhenShengZhuChanLiang', xData, yData)
    },


    //生猪视频弹框
    async openPigDialog(){
      this.pigDialogFlag = true
    },
    //获取视频地址
    async getPigVideoUrlData(){
      let res = await getPigVideoUrl()
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

    changeVideo (boxID,index,videoID,sourceID) {
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

    initLayer() {
      var _this = this;
      this.managementLayer = this.$refs.mapModel.addLayer({
        layername: "v_enterprise_animal_husbandry",
        clickType: "point",
        popupCallback(e) {
          var data = [];
          for (let key in _this.managementTextMapping) {
            if(_this.managementTextMapping[key] == '占地面积(亩)'){
              data.push({
                title: _this.managementTextMapping[key],
                value: parseFloat(e.get(key).toFixed(2))
              });
            }else{
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


    //生猪养殖产量echarts图表
    shengZhuYangZhiChanLiang_echarts(id, xData, economicForest){
      
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
          console.log(name)
          if(name){
            this.eachTowhShipPigBreedingYieldData(name)
          }
          
        });
    },

    //生猪养殖情况echarts图表
    yangZhiQingKuang_echarts(id, xData, economicForest){
      
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
                    name: '单位/百头',
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
            this.zhu_year = name
            let inOrOut = ( this.zhu_text == '存栏' ) ? 0 : 1
            this.getInOrOutAmount( inOrOut, this.zhu_year)
          }
          
        });
    },
  }
};
</script>
<style scoped lang="scss">
.unit{
  position: absolute;
  color: #f2f2f2;
  top: 25px;
  right: 5px;
}
</style>
