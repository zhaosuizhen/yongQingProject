<template>
  <div class="webSite-container" style="overflow: hidden">
    <div class="management-top2">
      <el-col :span="6" class="management-top-aside">
        <div class="management-top-div2" @click="handleZhiLiangSuYuanData">
          <div class="management-charts-title">质量溯源数据</div>
          <div class="management-other-count">
            <div class="other-count-left">
              <img src="../../assets/visualiza/source_icon.png" class="left-icon4" alt="">
              <img src="../../assets/visualiza/management_count4.png" class="left-count4" style="">
            </div>
            <div class="other-count-right4 other-count-right-div6">
              <i class="other-count-text">
                溯源企业(个)
              </i>
              <i class="other-count-num">
                {{sourceData.managermentCount}}
              </i>
            </div>
            <div class="other-count-right4 other-count-right-div7">
              <i class="other-count-text">
                溯源产品(种)
              </i>
              <i class="other-count-num">
                {{sourceData.productNameCount}}
              </i>
            </div>
            <div class="other-count-right4 other-count-right-div8">
              <i class="other-count-text">
                溯源标签(个)
              </i>
              <i class="other-count-num">
                {{sourceData.traceabilityCount}}
              </i>
            </div>
            <div class="other-count-right4 other-count-right-div9">
              <i class="other-count-text" style="width: 56%;">
                溯源扫码数量(次)
              </i>
              <i class="other-count-num" style="width: 40%;">
                {{sourceData.traceabilityCodeConunt}}
              </i>
            </div>

          </div>
        </div>
        <div class="management-top-div2">
          <div class="management-charts-title">质量检测</div> <!--@click="handleLastyearChart"-->
          <div id="sourceEnterpriseChart" class="management-charts-height"></div>
        </div>
        <div class="management-top-div2" @click="handleGeographyHouseChart">
          <div class="management-charts-title">农残检测</div>
          <div id="sourceCheckChart" class="management-charts-height"></div>
        </div>
      </el-col>
      <el-col :span="12" class="management-top-middle3">
        <div class="management-top-middle-div-map" style="margin-bottom: 1%">
          <!--<div style="width: 94%;height: 95%;margin: auto;">
            <industryAnalysisMap ref="mapModel"></industryAnalysisMap>
          </div>-->
          <div id="sourceMap" style="height: 100%;width: 100%"></div>
        </div>
        <div class="management-top-middle-div-chart" style="height: 32%;">
          <div class="management-charts-title">精品企业</div>
          <div class="management-source-introduce">
            <el-carousel style="height:100%" direction="vertical" :autoplay="true" :interval="3000">
              <el-carousel-item v-for="(item,index) in sourceIntroduceData" :key="index" style="height:100%">
                <div class="management-source-introduce-img">
                  <img :src="`./static/source/${item.productPicture}.png`">>
                </div>
                <div class="management-source-introduce-content">
                  <p class="management-source-introduce-title">
                    {{item.companyName}}
                  </p>
                  <p class="management-source-introduce-text">
                    {{item.companyIntroduction}}
                  </p>
                </div>
              </el-carousel-item>
            </el-carousel>
          </div>
        </div>
      </el-col>
      <el-col :span="6" class="management-top-aside">
        <div class="management-top-div2">
          <div class="management-charts-title">扫码区域占比</div>
          <div id="sourceRegionChart" class="management-charts-height"></div>
        </div>
        <div class="management-top-div2">
          <div class="management-charts-title">溯源产品占比</div>
          <div id="sourceProductChart" class="management-charts-height"></div>
        </div>
        <div class="management-top-div2" style="position: relative">
          <div class="management-charts-title">投诉意见画像</div>
          <!--<div id="sourceComplaintChart" class="management-charts-height"></div>-->
          <div id="sourceComplaintChart" style="display:flex;height: 80%;margin-top: 2%">
            <div v-for="(item, index) in complaintData" :key="item.key" style="flex:1;">
              <span v-bind:class="'complaintClass'+index">{{item.complaintType}}</span>
            </div>
          </div>
        </div>
      </el-col>
    </div>
    <!--质量溯源数据弹窗-->
    <div class="vis-geography">
      <el-dialog title="质量溯源数据" :visible.sync="dialogGeographyCountChart" :close-on-press-escape='false' :close-on-click-modal='false'>
        <el-form :inline="true">
          <el-form-item>
            <el-input
              v-model.trim = "productName"
              placeholder="产品名称"
              class="dialog-input"
              @keydown.enter.native="searchEnter"
              clearable>
            </el-input>
          </el-form-item>
          <el-button type="primary" class="dialog-btn" @click="getDialogPageData(1)" icon="el-icon-search">
          </el-button>
        </el-form>
        <el-table :data="DialogPageData.list">
          <el-table-column property="companyName" label="企业名称" :show-overflow-tooltip="true" :resizable="false"></el-table-column>
          <el-table-column property="productName" label="产品名称" :show-overflow-tooltip="true" :resizable="false"></el-table-column>
          <el-table-column property="tracingCode" label="溯源标签" :show-overflow-tooltip="true" :resizable="false"></el-table-column>
          <el-table-column property="scantimes" label="扫码数量" :show-overflow-tooltip="true" :resizable="false"></el-table-column>
        </el-table>
        <el-pagination layout="prev, pager, next" @current-change="handleCurrentChange"
          :current-page.sync="DialogPageData.pageNum" :total="DialogPageData.total">
        </el-pagination>
      </el-dialog>
    </div>
    <!--农残检测弹窗-->
    <div class="vis-geography">
      <el-dialog title="农残检测" :visible.sync="dialogGeographyHouseChart" :close-on-press-escape='false' :close-on-click-modal='false'>
        <el-form :inline="true">
          <el-form-item>
            <el-input
                v-model.trim="productName"
                placeholder="产品名称"
                class="dialog-input"
                @keydown.enter.native="searchEnter"
                clearable>
            </el-input>
          </el-form-item>
        <el-button type="primary" class="dialog-btn" @click="getDialogPageData(1)" icon="el-icon-search"></el-button>
        </el-form>
        <el-table :data="DialogPageData.list">
          <el-table-column property="companyName" label="企业名称" :show-overflow-tooltip="true" :resizable="false"></el-table-column>
          <el-table-column property="productName" label="产品名称" :show-overflow-tooltip="true" :resizable="false"></el-table-column>
          <!-- <el-table-column property="" label="合格率" style="width: 10%;"></el-table-column> -->
          <el-table-column property="sweepTime" label="检测时间" :show-overflow-tooltip="true" :resizable="false"></el-table-column>
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
import chart1 from "../../js/visualiza/visSource";
import api from "../../request/visualiza1Api.js";
export default {
  data() {
    return {
      complaintData: [],
      // 控制弹窗显示隐藏
      dialogGeographyHouseChart: false,
      dialogGeographyCountChart: false,
      //扫码次数、溯源码数量、产品数量数据
      sourceData: {},
      sourceIntroduceData: {},
      //弹框分页数据
      DialogPageData: {
        isFirstPage: true,
        isLastPage: true,
        list: [],
        // PageNum: 1,
        // PageSize: 10,
        // pages: 1,
        // total: 1
      },
      pageData: {
        isFirstPage: true,
        isLastPage: true,
        list: [],
        PageNum: 1,
        PageSize: 10,
        pages: 1,
        total: 10,
      },
      cropType: "",
      companyName: "",
      productName: "",
      sweepTime: "",
      modType: "",
      c_market_transactionTextMapping: {
        //企业名称、产品、扫码次数、投诉次数
        management_name: "企业名称",
        product_name: "产品",
        scanTimes: "扫码次数",
        scanTimes: "投诉次数",
      },
      qualityTestData: {
        name: [],
        count: []
      },
    };
  },
  components: {
    industryAnalysisMap

  },
  mounted() {
    //获取扫码次数、溯源码数量、产品数量
    this.$http
      .get(
        api.ip + "/web/taceability/countdata"
      )
      .then(
        res => {
          this.sourceData = res.data.data;
        },
        err => {
          // this.$message.error("质量溯源数据请求失败！");
        }
      );
    //精品企业
    this.$http
      .get(
        api.ip + "/web/taceability/enterprisetraceability"
      )
      .then(
        res => {
          this.sourceIntroduceData = res.data.data;
        },
        err => {
          // this.$message.error("精品企业数据请求失败！");
        }
      );

    //质量检测
    this.$http
      .get(
        api.ip + "/web/taceability/qualityTesting"
      )
      .then(
        res => {
          let typeArr = [];
          let nameArr = [];
          res.data.data.forEach(item => {
            if (!typeArr.includes(item.testingItems)) {
              typeArr.push(item.testingItems);
            }
          });
          res.data.data.forEach(item => {
            if (!nameArr.includes(item.inspectionTime)) {
              nameArr.push(item.inspectionTime);
            }
          });

          let finArr = [];
          typeArr.forEach(item1 => {
            let _arr = [];
            nameArr.forEach((item2, index) => {
              _arr[index] = 0;
              res.data.data.forEach(a => {
                if (a.inspectionTime == item2 && a.testingItems == item1) {
                  _arr[index] = a.count
                }
              });
            });
            let valueObj = {
              name: item1,
              type: "bar",
              stack: "数量",
              data: _arr
            };
            finArr.push(valueObj);
          });
          this.qualityTestData.type = finArr;
          this.qualityTestData.name = nameArr;
          this.initSourceEnterpriseChart(this.qualityTestData);
        },
        err => {
          // this.$message.error("质量检测数据请求失败！");
        }
      );
    //溯源产品占比
    this.$http
      .get(
        api.ip + "/web/taceability/sweepproductnamecount"
      )
      .then(
        res => {
          this.sourceEnterprise = res.data.data.map(item => {
            if (item != null) {
              if (item.scantimes == null || item.scantimes == 0) {
                item.scantimes = 0;
              }
              if (item.productName == null) {
                item.productName = "";
              }
              return {
                name: item.productName,
                value: item.scantimes
              }
            }
          });
          this.initSourceProductChart(this.sourceEnterprise);
        },
        err => {
          // this.$message.error("溯源产品占比数据请求失败！");
        }
      );

    //扫码区域占比
    this.$http
      .get(
        api.ip + "/web/taceability/sweepcitycount"
      )
      .then(
        res => {
          this.sourceRegion = res.data.data.map(item => {
            if (item != null) {
              if (item.scantimes == null || item.scantimes == 0) {
                item.scantimes = 0;
              }
              if (item.city == null) {
                item.city = "";
              }
              return {
                name: item.city,
                value: item.scantimes
              }
            }
          });
          this.initSourceRegionChart(this.sourceRegion);
        },
        err => {
          // this.$message.error("溯源产品占比数据请求失败！");
        }
      );
    //获取农残检测
    this.$http
      .get(
        api.ip + "/web/taceability/pesticidecheck"
      )
      .then(
        res => {
          var dataX = [];
          var dataY = [];
          res.data.data.map(item => {
            if (item != null) {
              if (item.passRate == null) {
                item.passRate = 0;
              }
              if (item.time == null) {
                item.time = "";
              }
              dataX.push(item.time);
              dataY.push(item.passRate)
            }
          });
          /*res.data.data.map(item => {
            if (item.time != null) {
              dataX.push(item.time.split("-")[1] + "月");
            } else {
              dataX.push("");
            }

            dataY.push(item.passRate);
          });*/

          this.initSourceCheckChart(dataX, dataY);
        },
        err => {
          // this.$message.error("农残检测数据请求失败！");
        }
      );
    //投诉意见画像
    this.$http
      .get(
        api.ip + "/web/taceability/complaintcount"
      )
      .then(
        res => {
         /* var complaintDataX = [];
          var complaintDataY = [];*/
          var dataArr = []
          res.data.data.map((item, index) => {
            if (item != null) {
              /*if (item.complaintType == null) {
                item.complaintType = "complaintType" + index;
              }*/
              item.key = "complaintType" + index;
              dataArr.push(item)
            }
          });
          this.complaintData = dataArr;
          //this.initSourceComplaintChart(complaintDataX,complaintDataY);
        },
        err => {
          // this.$message.error("投诉意见画像数据请求失败！");
        }
      );
    this.initChartsChina();
    // this.initLayer();
  },
  methods: {
    //质量检测
    initSourceEnterpriseChart(data) {
      chart1.EchartsSourceEnterpriseChart("sourceEnterpriseChart", data);
    },
    //溯源产品占比
    initSourceProductChart(data) {
      chart1.EchartsSourceProductChart("sourceProductChart", data);
    },
    //扫码区域占比
    initSourceRegionChart(data) {
      chart1.EchartsSourceRegionChart("sourceRegionChart", data);
    },
    //农残检测
    initSourceCheckChart(dataX, dataY) {
      chart1.EchartsSourceCheckChart("sourceCheckChart", dataX, dataY);
    },
    /*//投诉意见画像
    initSourceComplaintChart(dataX, dataY) {
      chart1.EchartsSourceComplaintChart("sourceComplaintChart", dataX, dataY);
    },*/
    //中间地图
    initChartsChina() {
      chart1.initChartsChina("sourceMap");
    },
    //获取过去12个月的时间数组
    getMonths() {
      var dataArr = [];
      var data = new Date();
      //var year = data.getFullYear();
      data.setMonth(data.getMonth() + 1, 1); //获取到当前月份,设置月份
      for (var i = 0; i < 12; i++) {
        data.setMonth(data.getMonth() - 1); //每次循环一次 月份值减1
        var m = data.getMonth() + 1;
        m = m < 10 ? "0" + m : m;
        dataArr.push(data.getFullYear() + "-" + m);
      }
      return dataArr;
    },
    /*// 地图
    initLayer() {
      var _this = this;
      this.c_market_transaction = this.$refs.mapModel.addLayer({
        layername: "c_market_transaction",
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
    },*/
    //获取弹框分页数据
    getDialogPageData(currentPage) {
      let that = this;
      this.$http
        .get(
          api.ip + "/web/taceability/pageList/1",
          {
            params: {
              currentPage: currentPage,
              pageSize: 10,
              productName: that.productName,
            }
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
    //显示质量溯源数据弹框
    handleZhiLiangSuYuanData() {
      this.cropType = "";
      this.modType = "";
      this.sweepTime = "";
      this.productName = "";
      this.getDialogPageData(1);
      this.dialogGeographyCountChart = true;
    },
    //农残检测占比弹框
    handleGeographyHouseChart() {
      this.cropType = "";
      this.modType = "";
      this.sweepTime = "";
      this.productName = "";
      this.getDialogPageData(1);
      this.dialogGeographyHouseChart = true;
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
};
</script>
<style>
</style>
