<template>
  <div class="webSite-container" style="overflow: hidden">
    <div class="management-top2">

      <el-col :span="6" class="management-top-aside2">

        <!-- <div class="management-top-div2" @click="handleCountChart"> -->
        <div class="management-top-div2">
          <div class="management-charts-title">市场数量</div>
          <div id="marketCountData1Chart" class="management-charts-height">

          </div>
        </div>

        <div class="management-top-div3">
          <div class="management-charts-title">蔬菜价格（元/斤）</div>
          <div class="manage-market-table1">
            <ul class="market-scroll-ul">
              <li class="market-scroll-li">
                <div>名称</div>
                <div>廊坊</div>
                <div>河北</div>
                <div>涨幅</div>
              </li>
            </ul>
            <vue-seamless-scroll :data="vegetablesData" class="market-seamless-warp1"
                                 :class-option="optionSingleHeightTime" >
              <ul class="market-scroll-ul">
                <li v-for="(item,index) in vegetablesData" :key="index" class="market-scroll-li">
                  <div v-text="item.name"></div>
                  <div v-text="item.my == null ? '--' : item.my"></div>
                  <div v-text="item.cd == null ? '--' : item.cd"></div>
                  <!-- <div v-text="item.maxPriceIncrease == null ? '--' : item.maxPriceIncrease"></div> -->
                  <div v-text="item.maxPriceIncrease == null ? '--' : item.maxPriceIncrease" :class="item.maxPriceIncrease.includes('-') ? 'price-increase-green': 'price-increase-red'"></div>
                </li>
              </ul>
            </vue-seamless-scroll>
          </div>
          <div class="manage-market-chart1">
            <div id="vegetablesCharts" class="management-charts-height" style="height: 85%;"></div>
          </div>
        </div>

      </el-col>

      <el-col :span="12" class="management-top-middle3">

        <div class="management-top-middle-div-map" style="padding: 0px 3px 2px 2px;">
        
          <div style="width: 100%;height: 100%;">
          <industryAnalysisMap ref="mapModel" style="width:100%;height:100%"></industryAnalysisMap>
          <div class="mapExample">
            <img width="30%" src="../../assets/yongqing_img/jysc.png" alt="">
            <p>图例</p>
            <p>批发市场</p>
          </div>
          </div>
          <!-- <div class="mapPointExample mapPointExample_JGSJ"></div> -->
        </div>

        <div class="management-top-middle-div-chart">
          <div class="management-charts-title" style="padding-top: 1%">水果价格（元/斤）</div>
          <div class="manage-market-chart2">
            <div id="fruitsCharts" class="management-charts-height" style="height: 85%"></div>
          </div>
          <div class="manage-market-table2">
            <ul class="market-scroll-ul">
              <li class="market-scroll-li">
                <div>名称</div>
                <div>廊坊</div>
                <div>河北</div>
                <div>涨幅</div>
              </li>
            </ul>
            <vue-seamless-scroll :data="fruitsData" class="seamless-warp" :class-option="optionSingleHeightTime" >
              <ul class="market-scroll-ul">
                <li v-for="(item,index) in fruitsData" :key="index" class="market-scroll-li">
                  <div v-text="item.name"></div>
                  <div v-text="item.my == null ? '--' : item.my"></div>
                  <div v-text="item.cd == null ? '--' : item.cd"></div>
                  <!-- <div v-text="item.maxPriceIncrease == null ? '--' : item.maxPriceIncrease"></div> -->
                  <div v-text="item.maxPriceIncrease == null ? '--' : item.maxPriceIncrease" :class="item.maxPriceIncrease.includes('-') ? 'price-increase-green': 'price-increase-red'"></div>
                </li>
              </ul>
            </vue-seamless-scroll>
          </div>
        </div>
      </el-col>

      <el-col :span="6" class="management-top-aside2">
        
        <!-- <div class="management-top-div2" @click="handleCountChart"> -->
        <div class="management-top-div2">
          <div class="management-charts-title">交易品种</div>
          <div id="marketCountData2Chart" class="management-charts-height">

          </div>
        </div>
        
        <div class="management-top-div3">
          <div class="management-charts-title">肉类价格（元/斤）</div>
          <div class="manage-market-table1">
            <ul class="market-scroll-ul">
              <li class="market-scroll-li">
                <div>名称</div>
                <div>廊坊</div>
                <div>河北</div>
                <div>涨幅</div>
              </li>
            </ul>
            <vue-seamless-scroll :data="meatsData" class="market-seamless-warp1" :class-option="optionSingleHeightTime" >
              <ul class="market-scroll-ul">
                <li v-for="(item,index) in meatsData" :key="index" class="market-scroll-li">
                  <div v-text="item.name"></div>
                  <div v-text="item.my == null ? '--' : item.my"></div>
                  <div v-text="item.cd == null ? '--' : item.cd"></div>
                  <!-- <div v-text="item.maxPriceIncrease == null ? '--' : item.maxPriceIncrease"></div> -->
                  <div v-text="item.maxPriceIncrease == null ? '--' : item.maxPriceIncrease" :class="item.maxPriceIncrease.includes('-') ? 'price-increase-green': 'price-increase-red'"></div>
                </li>
              </ul>
            </vue-seamless-scroll>
          </div>
          <div class="manage-market-chart1">
            <div id="meatCharts" class="management-charts-height" style="height: 85%;"></div>
          </div>
        </div>
        
      </el-col>
      
    </div>

    <!--市场交易数据弹窗-->
    <div class="vis-geography">
      <el-dialog title="市场交易数据" :visible.sync="dialogGeographyCountChart" :close-on-press-escape='false' :close-on-click-modal='false'>
        <el-form :inline="true">
          <el-form-item>
            <el-input v-model.trim="marketLocation" placeholder="交易市场名称"
                      clearable
                      @keydown.enter.native="searchEnter"
                      class="dialog-input">

            </el-input>
          </el-form-item>
          <el-button type="primary" @click="getDialogData(1)" class="dialog-btn" icon="el-icon-search"></el-button>
        </el-form>
        <el-table :data="dialogData.list || []">
          <el-table-column property="marketLocation" label="交易市场名称">
          </el-table-column>
          <el-table-column property="productName" label="交易品种"></el-table-column>
          <el-table-column property="productPrice" label="价格(元)">
            <template slot-scope="scope">
              <span>{{scope.row.productPrice.toFixed(1)}}</span>
            </template>
          </el-table-column>
          <el-table-column property="transactionTime" label="时间"></el-table-column>
        </el-table>
        <el-pagination
          layout="prev, pager, next"
          @current-change="handleCurrentChange"
          :current-page.sync="dialogData.pageNum"
          :total="dialogData.total">
        </el-pagination>
      </el-dialog>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import industryAnalysisMap from "./industryAnalysisMap";
import chart1 from "../../js/visualiza/visMarket";
import api from "../../request/visualiza1Api.js";
import { marketPrice, changesInPrices, transactionData } from '../../api/visMarket'
export default {
  data() {
    return {
      month: (new Date().getMonth()+1).length > 2 ? `${new Date().getMonth()+1}` : `0${new Date().getMonth()+1}`,
      lastMonth: new Date().getMonth() == 0 ? 12 :  (new Date().getMonth().length > 2 ? `${new Date().getMonth()}` : `0${new Date().getMonth()}`),
      // 控制弹窗显示隐藏
      dialogGeographyCountChart: false,
      //市场交易数据
      shiChangJiaoYiData: [],
      time: '',
      avgprice:'',
      vegetablesData: [],
      fruitsData: [],
      meatsData: [],
      //弹框分页数据
      dialogData: {},
      marketLocation: "",
      productName: "",
      c_market_transactionTextMapping: {
        market_location: "市场名称",
        transaction_place: "市场地址",
      },
      marketData: {
        name: [],
        count: []
      },

    };
  },
  components: {
    industryAnalysisMap
  },
  computed: {
    optionSingleHeightTime () {
      return {
        singleHeight: 35,
        waitTime: 2500
      }
    },
  },
 /* updated(){
      setInterval(function() {
        let t = document.getElementsByClassName('el-table__body-wrapper')
        setTimeout(() => {
          this.vegetablesData.splice(4,1)
          t[0].style.transition = 'all .5s'
          t[0].style.marginTop = '48px'
        }, 500)
        setTimeout(() => {
          this.vegetablesData.unshift({ date: this.vegetablesData })
          t[0].style.transition = 'all 0s ease 0s'
          t[0].style.marginTop = '0'
        }, 1000)
      },5000)
    },
  */
  mounted() {
    //获取市场交易数据
    this.getTransactionData()

    //获取价格数据
    this.getMarketPrice()

    //获取绵阳成都价格对比
    this.getChangesInPrices(0)
    this.getChangesInPrices(1)
    this.getChangesInPrices(2)

    

    // this.getMarketVegetablesPriceData();
    // this.getMarketFruitsPriceData();
    // this.getMarketMeatPriceData();

    this.initLayer();
  },
  methods: {
    //获取价格数据
    async getMarketPrice(){
      let res_vegetables = await marketPrice({type:0})
      let res_fruits = await marketPrice({type:1})
      let res_meats = await marketPrice({type:2})
      this.vegetablesData = res_vegetables.data.data
      this.meatsData = res_meats.data.data
      this.fruitsData = res_fruits.data.data
    },
    //获取绵阳成都价格对比
    async getChangesInPrices(type){
          let res = await changesInPrices({type})

          let typeArr = [];
          let nameArr = [];
          res.data.data.forEach(item => {
            if (!typeArr.includes(item.productName)) {
              typeArr.push(item.productName);
            }
          });
          res.data.data.forEach(item => {
            if (!nameArr.includes(item.time)) {
              nameArr.push(item.time);
            }
          });

          let finArr = [];
          typeArr.forEach(item1 => {
            let _arr = [];
            nameArr.forEach((item2, index) => {
              _arr[index] = 0;
              res.data.data.forEach(a => {
                if (a.time == item2 && a.productName == item1) {
                  _arr[index] = (a.avgprice).toFixed(2);
                }
              });
            });
            let valueObj = {
              name: item1,
              type: "line",
              smooth:true,
              // stack: "价格",
              data: _arr
            };
            finArr.push(valueObj);
          });
          this.marketData.type = finArr;
          this.marketData.name = nameArr;
          if(type == 0){
            this.initMarketVegetablesChart(this.marketData);
          }else if(type == 1){
            this.initMarketFruitsChart(this.marketData);
          }else if(type == 2){
            this.initMarketMeatChart(this.marketData);
          }
          
      
    },
    //获取市场交易数据
    async getTransactionData(){
      let res = await transactionData()

      this.shiChangJiaoYiData = res.data.data;

      this.marketCountChartData1 = res.data.data.map(item => {
          if (item != null) {
            if (item.marketLocation == null) {
              item.marketLocation = "";
            }
            return {
              name: "市场数量(家)",
              value: item.marketLocation
            }
          }
        });
        this.initMarketCountData1Chart(this.marketCountChartData1);


        this.marketCountChartData2 = res.data.data.map(item => {
            if (item != null) {
              if (item.productName == null) {
                item.productName = "";
              }
              return {
                name: "交易品种(种)",
                value: item.productName
              }
            }
          });
          this.initMarketCountData2Chart(this.marketCountChartData2);
    },




    
    //今日价格对比
    //蔬菜价格
    getMarketVegetablesPriceData() {
      let that = this;
      this.$http
        .get(
          api.ip + "/web/cMarketTransaction/heXianPrice?type=0",
          {
            params: {

            }
          }
        )
        .then(
          res => {
            this.vegetablesPriceData = res.body.data;
            let heXianData = []
            let nanJingData = []
            let newData = []
            for(let i = 0; i < this.vegetablesPriceData.length; i++){
              if(this.vegetablesPriceData[i].dataSources == '1'){
                heXianData.push(this.vegetablesPriceData[i])
              }else{
                nanJingData.push(this.vegetablesPriceData[i])
              }
            }

            for(let j = 0; j < heXianData.length; j++){
              let newObj = {
                productName: heXianData[j].productName,
                maxPriceIncrease: heXianData[j].maxPriceIncrease,
                heXianVal: heXianData[j].avgprice,
                nanJingVal: '--'
              }
              for(let k = 0;k < nanJingData.length; k++){
                if(heXianData[j].productName == nanJingData[k].productName){
                  newObj.nanJingVal = nanJingData[k].avgprice
                }
              }
              newData.push(newObj)
            }
            for(let l = 0;l < nanJingData.length;l++){
              let flag = true;
              for(let m = 0; m < newData.length; m++){
                if(newData[m].productName == nanJingData[l].productName){
                  flag = false
                }
              }
              if(flag){
                let newObj = {
                  productName: nanJingData[l].productName,
                  maxPriceIncrease: nanJingData[l].maxPriceIncrease,
                  heXianVal: '--',
                  nanJingVal: nanJingData[l].avgprice
                }
                newData.push(newObj)
              }
            }
            this.vegetablesData = newData;
          },
          err => {
            // this.$message.error("今日价格对比数据请求失败！");
          }
        );
    },
    //水果价格
    getMarketFruitsPriceData() {
      let that = this;
      this.$http
        .get(
          api.ip + "/web/cMarketTransaction/heXianPrice?type=3",
          {
            params: {

            }
          }
        )
        .then(
          res => {
            this.fruitsPriceData = res.body.data;
            let heXianData = []
            let nanJingData = []
            let newData = []
            for(let i = 0; i < this.fruitsPriceData.length; i++){
              if(this.fruitsPriceData[i].dataSources == '1'){
                heXianData.push(this.fruitsPriceData[i])
              }else{
                nanJingData.push(this.fruitsPriceData[i])
              }
            }
            for(let j = 0; j < heXianData.length; j++){
              let newObj = {
                productName: heXianData[j].productName,
                heXianVal: heXianData[j].avgprice,
                maxPriceIncrease: heXianData[j].maxPriceIncrease,
                nanJingVal: '--'
              }
              for(let k = 0;k < nanJingData.length; k++){
                if(heXianData[j].productName == nanJingData[k].productName){
                  newObj.nanJingVal = nanJingData[k].avgprice
                }
              }
              newData.push(newObj)
            }
            for(let l = 0;l < nanJingData.length;l++){
              let flag = true;
              for(let m = 0; m < newData.length; m++){
                if(newData[m].productName == nanJingData[l].productName){
                  flag = false
                }
              }
              if(flag){
                let newObj = {
                  productName: nanJingData[l].productName,
                  maxPriceIncrease: nanJingData[l].maxPriceIncrease,
                  heXianVal: '--',
                  nanJingVal: nanJingData[l].avgprice
                }
                newData.push(newObj)
              }
            }
            this.fruitsData = newData;
          },
          err => {
            // this.$message.error("今日价格对比数据请求失败！");
          }
        );
    },
    //肉类价格
    getMarketMeatPriceData() {
      let that = this;
      this.$http
        .get(
          api.ip + "/web/cMarketTransaction/heXianPrice?type=1",
          {
            params: {

            }
          }
        )
        .then(
          res => {
            this.meatPriceData = res.body.data;
            let heXianData = []
            let nanJingData = []
            let newData = []
            for(let i = 0; i < this.meatPriceData.length; i++){
              if(this.meatPriceData[i].dataSources == '1'){
                heXianData.push(this.meatPriceData[i])
              }else{
                nanJingData.push(this.meatPriceData[i])
              }
            }
            for(let j = 0; j < heXianData.length; j++){
              let newObj = {
                productName: heXianData[j].productName,
                heXianVal: heXianData[j].avgprice,
                maxPriceIncrease: heXianData[j].maxPriceIncrease,
                nanJingVal: '--'
              }
              for(let k = 0;k < nanJingData.length; k++){
                if(heXianData[j].productName == nanJingData[k].productName){
                  newObj.nanJingVal = nanJingData[k].avgprice
                }
              }
              newData.push(newObj)
            }
            for(let l = 0;l < nanJingData.length;l++){
              let flag = true;
              for(let m = 0; m < newData.length; m++){
                if(newData[m].productName == nanJingData[l].productName){
                  flag = false
                }
              }
              if(flag){
                let newObj = {
                  productName: nanJingData[l].productName,
                  maxPriceIncrease: nanJingData[l].maxPriceIncrease,
                  heXianVal: '--',
                  nanJingVal: nanJingData[l].avgprice
                }
                newData.push(newObj)
              }
            }
            this.meatsData = newData;
          },
          err => {
            // this.$message.error("今日价格对比数据请求失败！");
          }
        );
    },

    //市场交易数据仪表盘
    initMarketCountData1Chart(data) {
      chart1.EchartsMarketCountData1Chart("marketCountData1Chart", data);
    },
    //市场交易数据仪表盘
    initMarketCountData2Chart(data) {
      chart1.EchartsMarketCountData2Chart("marketCountData2Chart", data);
    },
    // 蔬菜价格变化
    initMarketVegetablesChart(data) {
      chart1.EchartsMarketChart("vegetablesCharts", data);
    },
    // 水果价格变化
    initMarketFruitsChart(data) {
      chart1.EchartsMarketChart("fruitsCharts", data);
    },
    // 肉类价格变化
    initMarketMeatChart(data) {
      chart1.EchartsMarketChart("meatCharts", data);
    },
    initLayer() {
      var _this = this;
      this.c_market_transaction = this.$refs.mapModel.addLayer({
        layername: "v_market_transaction",
        clickType: "point",
        popupCallback(e) {
          var data = [];
          for (let key in _this.c_market_transactionTextMapping) {
            data.push({
              title: _this.c_market_transactionTextMapping[key],
              value: e.get(key)
            });
          }
          return { data: data};
        }
      });
      this.c_market_transaction.isPopUp = true;
    },
    //获取分页数据
    getDialogData(page) {
      let that = this;
      this.$http
        .get(
          api.ip + "/web/cMarketTransaction/pageList",
          {
            params: {
              currentPage: page,
              marketLocation: that.marketLocation,
              pageSize: 10,
            }
          }
        )
        .then(
          res => {
            this.dialogData = res.body.data;
          },
          err => {
            // this.$message.error("市场交易弹框数据请求失败！");
          }
        );
    },

    handleCurrentChange(val) {
      this.getDialogData(val);
    },
    //市场交易数据弹框
    handleCountChart() {
      this.marketLocation = "";
      this.productName = "";
      this.getDialogData(1);
      this.dialogGeographyCountChart = true;
    },
    //回车搜索
    searchEnter(e){
      let keyCode = window.event? e.keyCode:e.which;
      if (keyCode == 13){
        // this.getDialogData(1)||this.jiaoyijialiang(1)||this.jiaoyijiagefenye(1);
        this.getDialogData(1)
      }
    },
  },
};
</script>
<style>
</style>

