<template>
  <div class="webSite-container" style="overflow: hidden">
    <div class="management-top2">

      <el-col :span="6" class="management-top-aside2">

        <!-- <div class="management-top-div2" @click="handleCountChart"> -->
        <div class="management-top-div2">
          <div class="management-charts-title">粮油产业数据</div>
          <div class="content_box" style="padding: 10px 20px 10px 0;">
            <div class="left_echarts LYSJ_img" style="width:55%"></div>
            <div class="right_text right_text_XMYZ" style="width:45%">
              <ul class="coolPig">
                <li>
                  <p><span>{{(foodArea / 10000).toFixed(2)}}</span><span style="color:#fff;font-size:0.1rem">/万亩</span></p>
                  <p style="color:#CEE1FE;font-size:0.12rem">粮食种植</p>
                </li>
                <li>
                  <p><span>{{(foodYield / 10000).toFixed(2)}}</span><span style="color:#fff;font-size:0.1rem">/万吨</span></p>
                  <p style="color:#CEE1FE;font-size:0.12rem">粮食产量</p>
                </li>
                <li>
                  <!-- <p><span>{{(amountNum/10000).toFixed(2)}}</span><span style="color:#fff;font-size:0.1rem">/万亩</span></p> -->
                  <p><span>{{(oilArea / 10000).toFixed(2)}}</span><span style="color:#fff;font-size:0.1rem">/万亩</span></p>
                  <p style="color:#CEE1FE;font-size:0.12rem">油料种植</p>
                </li>
                <li>
                  <!-- <p><span>{{(outNum/10000).toFixed(2)}}</span><span style="color:#fff;font-size:0.1rem">/万吨</span></p> -->
                  <p><span>{{(oilYield / 10000).toFixed(2)}}</span><span style="color:#fff;font-size:0.1rem">/万吨</span></p>
                  <p style="color:#CEE1FE;font-size:0.12rem">油料总产</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="management-top-div3">
          <div class="management-charts-title">粮油价格对比</div>
          <div class="content_box">
            <p class="table_title">
                <span class="title_gooseeggYiled" style="text-align:center">日期</span>
                <span class="title_township">四川(元/吨)</span>
                <span class="title_eggYield" style="text-align:center">全国(元/吨)</span>
                <span class="title_duckeggYiled" style="text-align:center">差额(元/吨)</span>
            </p>
            <div class="table_box">
              <ul class="geXiangZhenQinDanChanLiang" id="roll_table_WGH_1">
                <li v-for="(item,index) in LYJG_value" :key="index">
                  <span class="title_gooseeggYiled" style="color:#fff;text-align:center">{{item.years}}</span>
                  <span class="title_township">{{item.product_name}}</span>
                  <span class="title_eggYield" style="color:#fff;text-align:center">{{item.oil_price_country}}</span>
                  <span class="title_duckeggYiled" style="color:#fff;text-align:center">{{item.address}}</span>
                </li>
              </ul>
            </div>
          </div>

          <div class="SLYL_bottom_echarts">
            <div class="content_box" style="height:100%">
              <div class="echarts_box" id="SLYLJG_YM" style="height:90%"></div>
            </div>
          </div>
          
        </div>

      </el-col>

      <el-col :span="12" class="management-top-middle3">

        <div class="management-top-middle-div-map" style="padding: 0px 3px 2px 2px;">

          <img class="middle_img_top" src="../../assets/santai_img/top.png" width="100%" alt="">
          <img class="middle_img_leftB" src="../../assets/santai_img/left.png" alt="">
          <img class="middle_img_rightB" src="../../assets/santai_img/right.png" alt="">
          <h2 class="h2_title">数据改变农业，智慧创造未来</h2>
        
          <div style="width: 100%;height: 100%;">
            <!-- <industryAnalysisMap ref="mapModel" style="width:100%;height:100%"></industryAnalysisMap> -->
            <middleMap21 style="width:99.5%;height:99.5%;position: absolute;"></middleMap21>
          </div>

          <div class="oilExample"></div>
        </div>

        <div class="management-top-middle-div-chart">
          <div class="management-charts-title" style="padding-top: 1%">品牌介绍</div>
          <div class="content_box">
            <p class="table_title">
                <span class="title_gooseeggYiled" style="text-align:center">公司名称</span>
                <span class="title_township">产品名称</span>
                <span class="title_eggYield" style="text-align:center">产品类型</span>
                <span class="title_duckeggYiled" style="text-align:center">地址</span>
            </p>
            <div class="table_box">
              <ul class="geXiangZhenQinDanChanLiang" id="roll_table_WGH">
                <li v-for="(item,index) in PPJS" :key="index">
                  <span class="title_gooseeggYiled" style="color:#fff;text-align:center">{{item.company_name}}</span>
                  <span class="title_township">{{item.product_name}}</span>
                  <span class="title_eggYield" style="color:#fff;text-align:center">{{item.product_type}}</span>
                  <span class="title_duckeggYiled" style="color:#fff;text-align:center">{{item.address}}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

      </el-col>

      <el-col :span="6" class="management-top-aside2">
        
        <!-- <div class="management-top-div2" @click="handleCountChart"> -->
        <div class="management-top-div2">
          <div class="management-charts-title">视频监控</div>
          
        </div>
        
        <div class="management-top-div3">
          <div class="management-charts-title">产业脱贫</div>

          <div class="content_box CYTP_box">
            <div class="CYTP_describes">
              <p class="CYTP_content">{{CYTP_value.describes[0]}}</p>
            </div>
            <div class="CYTP_echarts">
              <div class="echarts_box_2" id="chanYeTuoPin"></div>
            </div>
            <div class="CYTP_img">
              <img width="100%" src="../../assets/santai_img/chanYeTuoPin.png" alt="">
            </div>
          </div>

          <!-- <div class="CYTP_text">
            <p>优质粮油产业基地覆盖80余个贫困村,5500余农户, 约1.8万贫困人口,通过企业加价收购农产品,年人均增收100元以上,通过产业高质量发展,实现农村贫困人口脱贫,助力全面建成小康社会。</p>
          </div>
          <div class="CYTP_img">
            <img src="../../assets//santai_img/CYTP.png" width="90%" style="margin:5%" alt="">
          </div> -->
        </div>
        
      </el-col>
      
    </div>

    
  </div>
</template>

<script type="text/ecmascript-6">
import industryAnalysisMap from "./industryAnalysisMap";
import echarts from "../../js/santaiEcharts/visGrainAndOil";
import api from "../../request/visualiza1Api.js";
import { changesInPrices } from '../../api/home'
import { getOilsIndustry, getCerealsOils, getIndustryOutpoor, getOilPrice } from '../../api/visGrainAndOil'
import middleMap21 from "./middleMap21";
import { startmarquee, getBig } from '../../util/util'
export default {
  data() {
    return {
      CYTP_value:{
        years:[],
        value:[],
        describes:[]
      }, //产业脱贫数据
      LYCY_value:{}, //粮油产业数据
      foodArea:0,
      foodYield:0,
      oilArea:0,
      oilYield:0,
      PPJS:[],
      LYJG_value:[], //粮油价格数据
    };
  },
  components: {
    industryAnalysisMap,
    middleMap21
  },
  async mounted() {
    startmarquee(30,30,1,"roll_table_WGH"); //表格自动滚动
    startmarquee(60,60,1,"roll_table_WGH_1"); //表格自动滚动
    // this.initLayer();
    //获取粮油产业数据
    await this.getOilsIndustryData()
    //获取品牌介绍
    await this.getCerealsOilsData()
    //获取产业脱贫数据
    await this.getIndustryOutpoorData()
    //获取粮油价格
    await this.getOilPriceData()
    
    echarts.buTongZuoWu('chanYeTuoPin', this.CYTP_value.years, this.CYTP_value.value)
  },
  methods: {
    // initLayer() {
    //   var _this = this;
    //   this.c_market_transaction = this.$refs.mapModel.addLayer({
    //     layername: "v_market_transaction",
    //     clickType: "point",
    //     popupCallback(e) {
    //       var data = [];
    //       for (let key in _this.c_market_transactionTextMapping) {
    //         data.push({
    //           title: _this.c_market_transactionTextMapping[key],
    //           value: e.get(key)
    //         });
    //       }
    //       return { data: data};
    //     }
    //   });
    //   this.c_market_transaction.isPopUp = true;
    // },
    //获取粮油产业数据
    async getOilsIndustryData(){
      let res = await getOilsIndustry()
      // console.log(res.data.data[0])
      this.foodArea = res.data.data[0].foodArea
      this.foodYield = res.data.data[0].sumYield
      this.oilArea = res.data.data[0].oilArea
      this.oilYield = res.data.data[0].oilYield
    },
    //获取品牌介绍
    async getCerealsOilsData(){
      let res = await getCerealsOils()
      // console.log(res.data.data)
      this.PPJS = res.data.data
    },
    //获取产业脱贫数据
    async getIndustryOutpoorData(){
      let res = await getIndustryOutpoor()

      for(var i = 0;i < res.data.data.length - 1;i++){
        for(var j = res.data.data.length - 1;j > i;j--){
          if(res.data.data[i].years > res.data.data[j].years){
            var temp = res.data.data[i]
            res.data.data[i] = res.data.data[j]
            res.data.data[j] = temp
          }
        }
      }

      console.log(res.data.data)
      this.CYTP_value.years = res.data.data.map((item,index) => {
        return item.years
      })
      this.CYTP_value.value = res.data.data.map((item,index) => {
        return item.income
      })
      this.CYTP_value.describes = res.data.data.map((item,index) => {
        return item.describes
      })
      // console.log(this.CYTP_value)
    },
    //获取粮油价格
    async getOilPriceData(){
      let res = await getOilPrice()
      // console.log(res.data.data)
      this.LYJG_value = res.data.data
    },
  },
};
</script>
<style>
</style>

