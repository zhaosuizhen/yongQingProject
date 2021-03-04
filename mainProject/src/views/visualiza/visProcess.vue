<template>
  <div class="webSite-container" style="overflow: hidden">
    <div class="management-top">

      <el-col :span="6" class="management-top-aside">
        
        <div class="management-top-div">
          <div class="management-charts-title">渔业养殖品种占比</div>
          <div class="content_box YZPZZB_box">
            <div>
              <div class="YZPZ_img_box YZPZ_img_box_left">
                <p v-if="YZPZ_total != 0">{{(YZPZ_value[2].value / YZPZ_total * 100).toFixed(2)}}%</p>
              </div>
              <p>{{YZPZ_value[2].name}}</p>
              <p><span style="color:#3ED3FF">{{YZPZ_value[2].value}}</span>/吨</p>
            </div>
            <div>
              <div class="YZPZ_img_box YZPZ_img_box_center">
                <p v-if="YZPZ_total != 0">{{(YZPZ_value[1].value / YZPZ_total * 100).toFixed(2)}}%</p>
              </div>
              <p>{{YZPZ_value[1].name}}</p>
              <p><span style="color:#FFE56B">{{YZPZ_value[1].value}}</span>/吨</p>
            </div>
            <div>
              <div class="YZPZ_img_box YZPZ_img_box_right">
                <p v-if="YZPZ_total != 0">{{(YZPZ_value[0].value / YZPZ_total * 100).toFixed(2)}}%</p>
              </div>
              <p>{{YZPZ_value[0].name}}</p>
              <p><span style="color:#60D6B4">{{YZPZ_value[0].value}}</span>/吨</p>
            </div>
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
            <!-- <div class="echarts_box echarts_box_liq">
              <div id="st_liqui_2"></div>
              <div id="yangZhiPinZhong"></div>
            </div> -->
          </div>
          <!--<div id="processRecordChart" class="management-charts-height"></div>-->
          <!-- <ul class="progressFarmBox">
            <li class="progressFarm" v-for="(item, index) in progressFarmData" :key="index" :class="{'activeClass': item.name.indexOf('户') > 0}">
              <label class="progressFarmLabel">{{item.name}}</label>
              <el-progress :percentage='item.progress' :show-text= false :stroke-width="8"></el-progress>
              <span class="progressFarmCounts">{{item.value + '万'}}</span>
            </li>
          </ul> -->
          <!-- <div class="content_box"> -->
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
            <!-- <div class="echarts_box echarts_box_liq">
              <div id="st_liqui_7"></div>
              <div id="yangZhiPinZhong"></div>
            </div>
          </div> -->
        </div>
        <!-- <div class="management-top-div" @click="handleLandChart"> -->
        <div class="management-top-div" style="position: relative;">
          <div class="management-charts-title">渔业人口</div>

          <ul class="yuYeRenKou">
              <li>
                <span>名称</span>
                <span>数量</span>
              </li>
              <li >
                <span>渔业户</span>
                <span style="color:#fff">{{YYRK_value.fishery_family}}</span>
              </li>
            <li>
              <span>渔业人口</span>
              <span style="color:#fff">{{YYRK_value.fishery_population}}</span>
            </li>
            <li >
              <span>渔业从业人员</span>
              <span style="color:#fff">{{YYRK_value.employed}}</span>
            </li>
            <li >
              <span>专业从业人员</span>
              <span style="color:#fff">{{YYRK_value.profess}}</span>
            </li>
            <li>
            <span>兼业从业人员</span>
            <span style="color:#fff">{{YYRK_value.parergon}}</span>
          </li>
            <li >
              <span>临时从业人员</span>
              <span style="color:#fff">{{YYRK_value.temporary}}</span>
            </li>
          </ul>
        </div>

      </el-col>

      <el-col :span="12" class="management-top-middle2">
        <img class="middle_img_top" src="../../assets/santai_img/top.png" width="100%" alt="">
        <img class="middle_img_leftB" src="../../assets/santai_img/left.png" alt="">
        <img class="middle_img_rightB" src="../../assets/santai_img/right.png" alt="">
        <h2 class="h2_title">数据改变农业，智慧创造未来</h2>
        <!-- <div class="nav_com">
          <Nav></Nav>
        </div> -->
        <!-- <div style="width: 100%;height: 100%;">
          <industryAnalysisMap ref="mapModel"></industryAnalysisMap>
        </div> -->
        <Map style="width:99.5%;height:99.5%;position: absolute;"></Map>

        <div class="bigExample"></div>
      </el-col>

      <el-col :span="6" class="management-top-aside">
        <div class="management-top-div3" style="height:97%">
          <div class="management-charts-title">渔业养殖</div>
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
            <div class="companyAdd">
              <div>名称（单位/万元）</div>
              <!-- <div>单位/元</div> -->
            </div>
            <div class="echarts_box" id="yuYeYangZhi"></div>
            <!-- <div class="echarts_box" id="liNianQiYe"></div> -->
          </div>
        </div>
      </el-col>

    </div>
    <div class="management-bottom">

      <el-col :span="12">
        <div class="management-bottom-other-div">
          <div class="management-charts-title">主要品种养殖规模</div>
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
            <div class="echarts_box" id="zhuYaoPinZhong"></div>
          </div>
        </div>
      </el-col>

      <el-col :span="12">
        <div class="management-bottom-other-div" style="position: relative;">
          <div class="management-charts-title">渔业执法情况</div>
          <div class="YYZF_ul_box">
            <table style="font-size: 2px;s" >
              <tr style="font-weight:normal">
                <th style="font-weight:normal">名称</th>
                <th style="font-weight:normal">开展专项行动(次)</th>
                <th style="font-weight:normal">出动执法人员(人次)</th>
                <th style="font-weight:normal">出动车辆(台次)</th>
                <th style="font-weight:normal">查获渔获物(公斤)</th>
                <th style="font-weight:normal">收缴违法渔具(件)</th>
                <th style="font-weight:normal">行政案件(件)</th>
                <th style="font-weight:normal">行政处罚(人次)</th>
                <th style="font-weight:normal">罚款(元)</th>
                <th style="font-weight:normal">行政结案(件)</th>
                <th style="font-weight:normal">移送案件(件)</th>
                <th style="font-weight:normal">刑事立案(件)</th>
                <th style="font-weight:normal">刑事处罚(件)</th>
                <th style="font-weight:normal">刑事结案(件)</th>
              </tr>
              <tr v-for="(item,index) in YYZF_list" :key="index" style="line-height:25px;">
                <th style="font-weight:normal">{{item.type}}</th>
                <th style="font-weight:normal">{{item.zsxd}}</th>
                <th style="font-weight:normal">{{item.cdzfry}}</th>
                <th style="font-weight:normal">{{item.cdcl}}</th>
                <th style="font-weight:normal">{{item.chyhw}}</th>
                <th style="font-weight:normal">{{item.sjwfyj}}</th>
                <th style="font-weight:normal">{{item.xzaj}}</th>
                <th style="font-weight:normal">{{item.xzcf}}</th>
                <th style="font-weight:normal">{{item.fk}}</th>
                <th style="font-weight:normal">{{item.xzja}}</th>
                <th style="font-weight:normal">{{item.ysaj}}</th>
                <th style="font-weight:normal">{{item.xsla}}</th>
                <th style="font-weight:normal">{{item.xscf}}</th>
                <th style="font-weight:normal">{{item.xsja}}</th>
              </tr>
            </table>
          </div>
        </div>
      </el-col>

    </div>

    <!--农事数据弹窗-->
    <div class="vis-geography">
      <el-dialog title="农事数据" :visible.sync="dialogGeographyCountChart" :close-on-press-escape='false' :close-on-click-modal='false'>
        <el-form :inline="true">
          <el-form-item>
            <el-input v-model.trim="companyName" placeholder="企业名称"
                      class="dialog-input"
                      @keydown.enter.native="searchEnter"
                      clearable>
            </el-input>
          </el-form-item>
          <el-button type="primary" class="dialog-btn" @click="getDialogPageData(1)" icon="el-icon-search">
          </el-button>
        </el-form>
        <el-table :data="DialogPageData.list">
          <el-table-column property="companyName" label="主体名称" :show-overflow-tooltip="true"
                           :resizable="false"></el-table-column>
          <el-table-column property="plantType" label="生产类型" :show-overflow-tooltip="true"
                           :resizable="false"></el-table-column>
          <el-table-column property="farmingName" label="农事类型" :show-overflow-tooltip="true"
                           :resizable="false"></el-table-column>
          <el-table-column property="farmingDate" label="上传时间" :show-overflow-tooltip="true"
                           :resizable="false"></el-table-column>

        </el-table>
        <el-pagination layout="prev, pager, next" @current-change="handleCurrentChange"
          :current-page.sync="DialogPageData.pageNum" :total="DialogPageData.total">
        </el-pagination>
      </el-dialog>
    </div>
    <!--农事类型占比弹窗-->
    <div class="vis-geography">
      <el-dialog title="农事类型占比" :visible.sync="dialogGeographyLandChart" :close-on-press-escape='false' :close-on-click-modal='false'>
        <el-form :inline="true">
          <el-form-item>
            <el-input v-model.trim="companyName" placeholder="企业名称"
                      class="dialog-input"
                      @keydown.enter.native="searchEnter"
                      clearable>
            </el-input>
          </el-form-item>
          <el-button type="primary" class="dialog-btn" @click="getDialogPageData(1)" icon="el-icon-search">
          </el-button>
        </el-form>
        <el-table :data="DialogPageData.list">
          <el-table-column property="companyName" label="企业名称" :show-overflow-tooltip="true"
                           :resizable="false"></el-table-column>
          <el-table-column property="parcelName" label="地块名称" :show-overflow-tooltip="true"
                           :resizable="false"></el-table-column>
          <el-table-column property="farmingName" label="农事类型" :show-overflow-tooltip="true"
                           :resizable="false"></el-table-column>
          <el-table-column property="farmingDate" label="时间" :show-overflow-tooltip="true"
                           :resizable="false"></el-table-column>
        </el-table>
        <el-pagination layout="prev, pager, next" @current-change="handleCurrentChange"
          :current-page.sync="DialogPageData.pageNum" :total="DialogPageData.total">
        </el-pagination>
      </el-dialog>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import industryAnalysisMap from "./industryAnalysisMap";
import chart from "../../js/visualiza/visProcess";
import api from "../../request/visualiza1Api.js";
import echarts from '../../js/santaiEcharts/visProcess'
import liquidfill from '../../js/santaiEcharts/liquidfill'
import { getaquatictypeproportion, getfisheriespeople, getmaintypescale, getaquaticoutvalue, getLawEnforcement } from '../../api/visProcess'
import Vue from "vue";
import Nav from './nav'
import Map from '../map'
export default {
  data() {
    return {
      //地图地址
      mapUrl: './2-1-min.png',
      //渔业执法数据
      YYZF_list: [],
      //渔业养殖数据 
      YYYZ_name: [],
      YYYZ_yield: [],
      YYYZ_add: [],
      //主要品种养殖规模数据
      ZYPZ_name: [],
      ZYPZ_value: [],
      ZYPZ_value_total: [],
      //渔业人口数据
      YYRK_value: [],
      //养殖品种占比数据  
      YZPZ_value: [
        {name:'其他类',value:0},
        {name:'甲壳类',value:0},
        {name:'鱼类',value:0}
      ],
      YZPZ_total: 0,

      //弹窗数据
      createTime: "",
      farmingName: "",
      DialogPageData: {
        list: [],
        PageNum: 1,
        PageSize: 10,
        pages: 1,
        total: 1
      },
      pageData:{
        data: [],
        PageNum: 1,
        PageSize: 8,
        pages: 1,
        total: 1
      },
      FarmData:{
        data: [],
        PageNum: 1,
        PageSize: 8,
        pages: 1,
        total: 1
      },
      //生产过程数据
      countData: {},
      //农事记录数据
      recordData: [],
      //控制弹窗显示隐藏`
      dialogGeographyLandChart: false,
      dialogGeographyCountChart: false,
      // 农事务农人口数据
      progressFarmData:[],
      companyName:"",
      v_parcel_farmingTextMapping: {
        management_name: "企业名称",
        parcel_name: "地块名称",
        parcel_area: "地块面积",
        parcel_type: "农事类型",
        start_time: "时间",
      },
      managementTextMapping: {
        management_name: "经营主体名称",
        unit_property: "单位性质",
        unit_type: "单位类型",
        //official_website: "官方网站",
        //unit_introduction: "单位简介",
        area_covered: "占地面积(亩)",
        //product_service: "主营产品服务",
        /*unit_head_pic: "单位头像",
          registration_date: "注册日期",
          business_license_no: "营业执照号",*/
        // legal_name: "法人姓名",
        /* turnover: "年营业额",
            registered_capital: "注册资金(万元)",*/
        /*contacts_name: "联系人姓名",*/
        address: "详细地址",
        /*fixed_telephone: "固定电话",
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
          update_time: "修改时间",*/
      }
    };
  },
  components: {
    industryAnalysisMap,
    Nav,
    Map
  },
  async mounted() {
    //获取渔业执法数据
    await this.getLawEnforcementData()
    //获取渔业养殖数据  
    await this.getAquaticOutValue()    
    // //获取主要养殖品种规模数据
    await this.getMainTypeScale()       
    // //获取渔业人口数据
    await this.getFisheriesPeople()
    // //获取养殖品种占比数据
    await this.getAquaticTypeProportion()

    echarts.zhuYaoPinZhong('zhuYaoPinZhong', this.ZYPZ_name, this.ZYPZ_value)
    echarts.yuYeYangZhi('yuYeYangZhi', this.YYYZ_name, this.YYYZ_yield, this.YYYZ_add)
    echarts.yangZhiPinZhong('yangZhiPinZhong', this.YZPZ_value)

    
    liquidfill.liquidfill_left('st_liqui_7','养殖品种')
    //农事务农人口
    this.$http
      .get(
        api.ip + "/web/cFarmingWeb/peopleCounts"
      )
      .then(
        res => {
          this.progressFarmData = res.body.data;
          let arr = [100, 100, 20, 80, 30, 10];
          for(let i = 0;i < this.progressFarmData.length; i++){
            this.progressFarmData[i].progress = arr[i];

          }
        },
        err => {
          // this.$message.error("农事务农人口数据请求失败！");
        }
      );
    //生产过程数据
    this.$http
      .get(
        api.ip + "/web/productionprocess/countdata"
      )
      .then(
        res => {
          this.countData = res.body.data;
        },
        err => {
          // this.$message.error("生产过程数据请求失败！");
        }
      );
    //农事类型占比
    this.$http
      .get(
        api.ip + "/web/productionprocess/typeCount"
      )
      .then(
        res => {
          this.processType = res.data.data.map(item => {
            if (item != null) {
              if (item.count == null || item.count == 0) {
                item.count = 0;
              }
              if (item.farmingName == null) {
                item.farmingName = "";
              }
              return {
                name: item.farmingName,
                value: item.count
              }
            }
          });
          this.initProcessTypeChart(this.processType);
        },
        err => {
          // this.$message.error("农事类型占比数据请求失败！");
        }
      );
    //农事主体排名
    this.$http
      .get(
        api.ip + "/web/productionprocess/farmingRank"
      )
      .then(
        res => {
          var processMainDataX = [];
          var processMainDataY = [];
          res.data.data.map(item => {
            if (item != null) {
              if (item.count == null) {
                item.count = 0;
              }
              if (item.companyName == null) {
                item.companyName = "";
              }
              processMainDataX.push(item.companyName);
              processMainDataY.push(item.count)
            }
          });

          this.initProcessMainChart(processMainDataX, processMainDataY);
        },
        err => {
          // this.$message.error("农事主体排名数据请求失败！");
        }
      )
    /*//农事记录趋势
    this.$http
      .get(
        api.ip + "/web/productionprocess/farmingForMonth"
      )
      .then(
        res => {
          var processRecordDataX = [];
          var processRecordDataY = [];
          res.data.data.map(item => {
            if (item != null) {
              if (item.count == null) {
                item.count = 0;
              }
              if (item.monthStr == null) {
                item.monthStr = "";
              }
              processRecordDataX.push(item.monthStr);
              processRecordDataY.push(item.count)
            }
          });
          this.initProcessRecordChart(processRecordDataX, processRecordDataY);
        },
        err => {
          // this.$message.error("农事记录趋势数据请求失败！");
        }
      )*/
    //农机数据
    this.$http
      .get(
        api.ip + "/web/cFarmingWeb/machineryCount"
      )
      .then(
        res => {
          var processPlantTypeDataX = [];
          var processPlantTypeDataY = [];
          res.data.data.map(item => {
            if (item != null) {
              if (item.value == null) {
                item.value = 0;
              }
              if (item.name == null) {
                item.name = "";
              }
              processPlantTypeDataX.push(item.name);
              processPlantTypeDataY.push(item.value)
            }
          });
          this.initProcessPlantTypeChart(processPlantTypeDataX, processPlantTypeDataY);
        },
        err => {
          // this.$message.error("农机数据请求失败！");
        }
      )

    //农事类型排名
    this.$http
      .get(
        api.ip + "/web/productionprocess/farmingTypeForTopTen"
      )
      .then(
        res => {
          var processFarmTypeDataX = [];
          var processFarmTypeDataY = [];
          res.data.data.map(item => {
            if (item != null) {
              if (item.count == null) {
                item.count = 0;
              }
              if (item.farmingName == null) {
                item.farmingName = "";
              }
              processFarmTypeDataX.push(item.farmingName);
              processFarmTypeDataY.push(item.count)
            }
          });
          this.initProcessFarmTypeChart(processFarmTypeDataX, processFarmTypeDataY);
        },
        err => {
          // this.$message.error("农事类型排名数据请求失败！");
        }
      )
    this.initLayer();
  },
  methods: {
    //获取渔业执法数据
    async getLawEnforcementData(){
      let res = await getLawEnforcement()
      this.YYZF_list = res.data.data;
    },
    //获取渔业养殖数据 
    async getAquaticOutValue(){
      let res = await getaquaticoutvalue()
      this.YYYZ_name = res.data.data.map(item => item.name)
      this.YYYZ_yield = res.data.data.map(item => item.yieldNum)
      this.YYYZ_add = res.data.data.map(item => item.addNum)
    },
    //获取主要品种养殖规模数据
    async getMainTypeScale(){
      let res = await getmaintypescale({type:1})
      let newArr = []
      res.data.data.forEach((item,index) => {
        if(item.yield !== '0'){
          newArr.push(item)
        }
      })
      
      this.ZYPZ_name = newArr.map( item => item.productName)
      this.ZYPZ_value = newArr.map( item => item.yield)
      // this.ZYPZ_value.forEach((item,index) => {
      //   if(item == "0"){
      //     this.ZYPZ_value.splice(index,1)
      //   }
      // })
      res.data.data.forEach(item => {
        if(item.yield != 0){
          this.ZYPZ_value_total
        }
      })
    },
    //获取渔业人口数据
    async getFisheriesPeople(){
      let res = await getfisheriespeople()
      this.YYRK_value = res.data.data
    },
    //获取养殖品种占比数据  
    async getAquaticTypeProportion(){
      let res = await getaquatictypeproportion()
      if(res.data.code == -1){
        return
      }
      this.YZPZ_value = res.data.data.map(item => {
        this.YZPZ_total += item.areas
        return {
          name: item.name,
          value: item.areas
        }
      })
    },

    //农事类型占比
    initProcessTypeChart(data) {
      chart.EchartsProcessTypeChart("processTypeChart", data);
    },
    //农事主体排名
    initProcessMainChart(dataX, dataY) {
      chart.EchartsProcessMainChart("processMainChart", dataX, dataY);
    },
    //农机数据
    initProcessPlantTypeChart(dataX, dataY) {
      chart.EchartsProcessPlantTypeChart("processPlantTypeChart", dataX, dataY);
    },
    //农事类型排名
    initProcessFarmTypeChart(dataX, dataY) {
      chart.EchartsProcessFarmTypeChart("processFarmTypeChart", dataX, dataY);
    },

    //获取弹框分页数据
    getDialogPageData(currentPage) {
      let that = this;
      let params = {
        currentPage: currentPage,
        pageSize: 10,
        companyName:that.companyName
      };
      // if (that.createTime) {
      //   params.createTime = that.createTime;
      // }
      // if (that.farmingName) {
      //   params.farmingName = that.farmingName;
      // }
      this.$http
        .get(
          api.ip + "/web/productionprocess/pageList",
          {
            params:params
          }
        )
        .then(
          res => {
            this.DialogPageData = res.body.data;
          },
          err => {
            // this.$message.error("弹框请求失败！");
          }
        );
    },
    initLayer() {
      /*var _this = this;
      this.v_parcel_farming = this.$refs.mapModel.addLayer({
        layername: "v_parcel_farming",
        geoField: "coordinate_range",
        popupCallback(e) {
          var data = [];
          for (let key in _this.v_parcel_farmingTextMapping) {
            data.push({
              title: _this.v_parcel_farmingTextMapping[key],
              value: e.get(key)
            });
          }
          return {
            data: data
          };
        }
      });
      this.v_parcel_farming.isPopUp = true;*/
      var _this = this;
      this.managementLayer = this.$refs.mapModel.addLayer({
        layername: "v_management",
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
    getData(currentPage){
      let that = this;
      let params = {
        currentPage: currentPage,
        pageSize: 10,
        companyName:that.companyName
      };
      this.$http
        .get(
          // "http://127.0.0.1:8086/clesun/api/v1.0/web/productionprocess/pageList",
          api.ip + "/web/productionprocess/typeTrendList",
          {
            params
          }
        )
        .then(
          res => {
            this.pageData = res.body.data;
          },
          err => {
            // this.$message.error("弹框请求失败！");
          }
        );
    },
    //产品农事记录分页数据
    FarmRecords(currentPage){
      let that = this;
      let params = {
        currentPage: currentPage,
        pageSize: 10,
        companyName:that.companyName
      };
      this.$http
        .get(
          // "http://127.0.0.1:8086/clesun/api/v1.0/web/productionprocess/pageList",
          api.ip + "/web/cMarketTransaction/productfarmList",
          {
            params
          }
        )
        .then(
          res => {
            this.FarmData = res.body.data;
          },
          err => {
            // this.$message.error("弹框请求失败！");
          }
        );
    },
    //显示农事数据弹框
    handleCountChart() {
      // this.creatTime = "";
      // this.farmingName = "";
      this.companyName = "";
      this.getDialogPageData(1);
      this.dialogGeographyCountChart = true;
    },
    //显示农事类型占比弹框
    handleLandChart() {
      // this.creatTime = "";
      // this.farmingName = "";
      this.companyName = "";
      this.getDialogPageData(1);
      this.dialogGeographyLandChart = true;
    },
    //翻页
    handleCurrentChange(val) {
      this.getDialogPageData(val);
    },
    // 弹窗回车键查询
    searchEnter(e){
      let keyCode = window.event? e.keyCode:e.which;
      if (keyCode == 13){
        this.getDialogPageData(1);
      }
    },
  }
}
</script>
<style>
</style>
