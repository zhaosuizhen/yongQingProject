<template>
  <div class="webSite-container">
    <div class="management-top">
      <el-col :span="6" class="management-top-aside" style="padding: 0 1% 1%">
        <div class="management-top-div4" @click="handlePlantCount">
          <div class="management-charts-title">设备数据</div>
          <div id="environmentMoistureChart" class="environment-charts-height">

          </div>
          <div id="environmentWeatherChart" class="environment-charts-height">

          </div>
          <div id="environmentCameraChart" class="environment-charts-height">

          </div>
          <div id="environmentHouseChart" class="environment-charts-height">

          </div>
          <!--<div class="management-other-count">
          <div class="other-count-left">
          <img src="../../assets/visualiza/manage_icon1.png" class="left-icon4" alt="">
          <img src="../../assets/visualiza/management_count4.png" class="left-count4" style="">
          </div>
          <div class="other-count-right4 other-count-right-div6">
          <i class="other-count-text">
          墒情站(个)
          </i>
          <i class="other-count-num">
          {{productionData[0] ? productionData[0].equipmentNums: ""}}
          </i>
          </div>
          <div class="other-count-right4 other-count-right-div7">
          <i class="other-count-text">
          气象站(个)
          </i>
          <i class="other-count-num">
          {{productionData[1] ? productionData[1].equipmentNums: ""}}
          </i>
          </div>
          <div class="other-count-right4 other-count-right-div8">
          <i class="other-count-text">
          摄像头(个)
          </i>
          <i class="other-count-num">
          {{productionData[2] ? productionData[2].equipmentNums: ""}}
          </i>
          </div>
          <div class="other-count-right4 other-count-right-div9">
          <i class="other-count-text">
          温室设备(台)
          </i>
          <i class="other-count-num">
          {{productionData[4] ? productionData[4].equipmentNums: ""}}
          </i>
          </div>
          </div>-->
        </div>
      </el-col>
      <el-col :span="12" class="management-top-middle" style="position: relative">
        <div style="width: 100%;height: 100%;">
          <industryAnalysisMap ref="mapModel" style="width:100%;height:100%"></industryAnalysisMap>
        </div>
        <img src="../../assets/visualiza/envir_legend.png" alt="" style="position: absolute;bottom: 4%;left: 3%;">
      </el-col>
      <el-col :span="6" class="management-top-aside">
        <div class="management-top-div">
          <div class="management-charts-title" @click="handleVideo" style="cursor: pointer" title="点击查看">
            视频监控
          </div>
          <div class="management-charts-height">
            <!--之前版本的视频start-->
            <!--<div class="hint"></div>-->
            <!--&lt;!&ndash; <textarea id="url" placeholder="这里输入直播地址">http://hls01open.ys7.com/openlive/637184d5c5d04f5985fe746516f2dc26.m3u8</textarea> &ndash;&gt;-->
            <!--<div class="btn-container">-->
            <!--</div>-->
            <!--<video id="video"  controls="controls" autoplay="autoplay"  style="width: 95%;height: 100%;padding-top: 2%;margin-left: 3%;">-->
            <!--<source src="http://hls01open.ys7.com/openlive/637184d5c5d04f5985fe746516f2dc26.m3u8" type="video/mp4" style="width: 100%;height: 100%;"/>-->
            <!--您的浏览器不支持 video 标签-->
            <!--</video>-->
            <!--之前版本的视频end-->

            <!--最新版视频-->
            <!--<textarea id="url" placeholder="这里输入ezopen地址">
              ezopen://open.ys7.com/D64878516/1.live
            </textarea>
            <textarea id="accessToken" placeholder="这里输入accessToken">
              at.37zw5los97qj8g9v7hdkowaw7v1tfcs3-6eyu2o5iec-1dr7n5v-sagf1rwm3
            </textarea>-->
            <div id="playWind" style="width: 95%;height: 100%;padding-top: 2%;margin-left: 3%;"></div>
          </div>
        </div>
        <div class="management-top-div">
          <div class="management-charts-title">土壤监测</div>
          <div class="management-charts-height">
            <div class="management-environment-top-img">
              <img src="../../assets/visualiza/environment_soil.png" alt="">
            </div>
            <div class="management-environment-top-concent">
              <div v-for="item in trEnvironmentData" :key="item.column" @click="handleTendencyData(item.name,item.sensorCode)">
                <p class="management-environment-concent-title">
                  {{item.name}}
                </p>
                <p class="management-environment-concent-num">
                  {{item.value == null?"--":item.value}}{{item.unit}}
                </p>
              </div>
            </div>
          </div>
        </div>
      </el-col>
    </div>
    <div class="management-bottom">
      <el-col :span="12">
        <div class="management-bottom-other-div">
          <div class="management-charts-title">温室数据监测</div>
          <div class="management-environment-bottom-img">
            <img src="../../assets/visualiza/environment_house.png" alt="">
          </div>
          <div class="management-environment-bottom-concent" id="nullData">
            <div v-for="item in greenHouseData" :key="item.colum" @click="handleTendencyData(item.name, item.column)">
              <p class="management-environment-concent-title bottom-title">
                {{item.name}}
              </p>
              <p class="management-environment-concent-num bottom-num">
                {{item.value}}{{item.unit.toLowerCase()}}
              </p>
            </div>
          </div>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="management-bottom-other-div">
          <div class="management-charts-title">气象监测</div>
          <div class="management-environment-bottom-img">
            <img src="../../assets/visualiza/environment_weather.png" alt="">
          </div>
          <div class="management-environment-bottom-concent" id="nullData"> <!--@click="handleTendencyData(item.sensorCode, item.sensorCode)"-->
            <div v-for="item in qxEnvironmentData" :key="item.column" @click="handleTendencyData(item.name,item.sensorCode)">
              <p class="management-environment-concent-title bottom-title">
                {{item.name}}
              </p>
              <p class="management-environment-concent-num bottom-num">
                {{item.value}}{{item.unit}}
              </p>
            </div>
          </div>
        </div>
      </el-col>
    </div>

    <!--设备数据 弹窗-->
    <div class="vis-geography">
      <el-dialog title="设备数据" :visible.sync="dialogPlantCount" :close-on-press-escape='false' :close-on-click-modal='false'>
        <el-form :inline="true">
          <el-form-item>
            <el-input v-model.trim="parcelCode" placeholder="设备编号"
                      clearable
                      @keydown.enter.native="searchEnter"
                      class="dialog-input"
                      style="border-right: 1px solid #287494;border-radius: 4px;">
            </el-input>
          </el-form-item>
          <el-form-item>
            <el-input v-model.trim="equipmentType" placeholder="设备类型"
                      clearable
                      @keydown.enter.native="searchEnter"
                      class="dialog-input">
            </el-input>
          </el-form-item>
          <el-button type="primary" class="dialog-btn" @click="getPageData(1)" icon="el-icon-search"></el-button>
          <!--<el-date-picker
            v-model="formPlantCount.dialogdate"
            type="datetime"
            placeholder="选择日期时间">
          </el-date-picker>-->
        </el-form>
        <el-table :data="dialogData.list || []">
          <el-table-column property="equipmentCode" label="设备编号" style="width: 10%;"></el-table-column>
          <el-table-column property="equipmentName" label="设备名称" style="width: 10%;"></el-table-column>
          <el-table-column property="typeName" label="设备类型" style="width: 10%;"></el-table-column>
          <el-table-column property="managementName" label="所属企业" :show-overflow-tooltip="true" :resizable="false" style="width: 10%;"></el-table-column>
          <!--<el-table-column property="PlantCountStart" label="开始时间" style="width: 20%;"></el-table-column>
          <el-table-column property="PlantCountEnd" label="结束时间" style="width: 20%;"></el-table-column>-->
        </el-table>
        <el-pagination
          layout="prev, pager, next"
          @current-change="handleCurrentChange"
          :current-page.sync="dialogData.pageNum"
          :total="dialogData.total">
        </el-pagination>
      </el-dialog>
    </div>

    <!--视频弹窗-->
    <div class="vis-geography">
      <el-dialog title="视频" :visible.sync="dialogVideo" :close-on-press-escape='false' :close-on-click-modal='false'>
        <ul style="overflow:auto;">
          <li style="width: 31.2%;height: 200px;float: left;margin-right: 1%;margin-left: 1%;margin-bottom: 2%" v-for="item in dialogVideoData.list" :key="item.ip">
            <div style="width: 100%;height: 100%;">
              <div class="myPlayers" :id="'myPlayers'+(item.id)" :data-ip="item.ip" style="width: 100%;height: 100%;" ></div>
              <!--              <video class="myPlayers"-->
              <!--                     :id="'myPlayers'+(item.id)"-->
              <!--                     :src="item.ip"-->
              <!--                     controls-->
              <!--                     playsInline-->
              <!--                     webkit-playsinline-->
              <!--                     style="width: 100%;height: 100%;">-->
              <!--              </video>-->
            </div>
            <div style="text-align: center;color: #fff;">{{item.equipmentName}}</div>
          </li>
        </ul>
        <el-pagination
          layout="prev, pager, next"
          @current-change="handleCurrentChange"
          :current-page.sync="dialogVideoData.pageNum"
          :total="dialogVideoData.total">
        </el-pagination>
      </el-dialog>
    </div>

    <!-- 土壤监测 气象监测 弹框 -->
    <div class="vis-geography">
      <el-dialog title="生产环境数据趋势" :visible.sync="dialogEnvCount" :close-on-press-escape='false' :close-on-click-modal='false'>
        <div id="dataTendency" style="width:970px;height:500px;"></div>
      </el-dialog>
    </div>
    <!--&lt;!&ndash;地图弹窗&ndash;&gt;-->
    <!--<div style="font-size: 20px;color:#fff" id="mapPop">-->
    <!---->
    <!--</div>-->
  </div>

</template>

<script type="text/ecmascript-6">
  import industryAnalysisMap from "./industryAnalysisMap";
  import ezuikit from "../../../static/ezuikit/ezuikit";
  import chart1 from "../../js/visualiza/visEnvironment";
  import api from "../../request/visualiza1Api.js";
  import echarts from "echarts";

  export default {
    data() {
      return {
        token: '',
        videoPlay: '',
        // 控制弹窗显示隐藏
        dialogPlantTypeChart: false,
        dialogPlantCount: false,
        dialogVideo: false,

        // 进度条宽度
        /*strokeWidth: 12,*/

        dialogEnvCount: true,

        // 进度条颜色
        progressColor: ["#03c5fa", "#fb9500", "#e14a5b", "#f42121"],

        //生产环境数据
        productionData: [],

        //土壤监测 气象监测 数据
        trEnvironmentData: [],
        qxEnvironmentData: [],
        //温室数据监测
        greenHouseData: [],

        //冠层辐射监测数据
        canopyData: [
          {
            em50_b: 0,
            em50_c: 0
          }
        ],

        //土壤 气象监测 温室设备addr
        trAddr: "60817543",
        qxAddr: "60883044",
        wsAddr: "60883235",
        addr:"",
        //冠层辐射监测 设备addr
        gcAddr: "",

        //弹框数据
        dialogData: [],
        equipmentType: "",
        parcelCode: "",

        //弹框图标数据
        dialogChartData: {
          pageX: [],
          pageY: []
        },
        c_equipmentTextMapping: {
          equipment_name: "设备名称",
          equipment_code: "设备编号"
        },

        dialogVideoData: {},
        videoView:[]
      };
    },
    components: {
      industryAnalysisMap
    },
    mounted() {
      this.dialogEnvCount = false;
      this.getEnvironmentData();
      this.getInitEnvironmentData();
      this.getCanopyData();
      this.initYbp();
      this.initVideo();
      this.initLayer();
    },
    methods: {

      // 生产环境 墒情站
      initEnvironmentMoistureChart(data) {
        chart1.EchartsEnvironmentMoisture("environmentMoistureChart", data);
      },
      // 生产环境 气象站
      initEnvironmentWeatherChart(data) {
        chart1.EchartsEnvironmentWeather("environmentWeatherChart", data);
      },
      // 生产环境 摄像头
      initEnvironmentCameraChart(data) {
        chart1.EchartsEnvironmentCamera("environmentCameraChart", data);
      },
      // 生产环境 温室设备
      initEnvironmentHouseChart(data) {
        chart1.EchartsEnvironmentHouse("environmentHouseChart", data);
      },

      getInitEnvironmentData() {
        //初始化获取土壤检测 气象监测数据
        this.$http
          .get(
            /*"http://47.92.105.102:89/qfls/api?addr=" +
            "60883102" +
            "&method=getRealTimeDeviceData&sessionkey=239A506CD4E38A8757A2314442146CF3"*/
            api.ip + "/web/equipment/realtimeData?sensorCode=BY_318862647"
          )
          .then(
            res => {
              let environmentData = res.body.data;
              if(res.body.code == -1) {
                document.getElementById("nullData").innerHTML="<p style='padding: 5% 17%;font-size: 16px;color: #bbb'>暂无数据</p>";
              } else {
                this.qxEnvironmentData = environmentData.filter(item => {
                  return item;
                  /*return item.name == "光照" || item.name == "风向" || item.name == "风速" || item.name == "气温" || item.name == "湿度" || item.name == "雨量";*/
                });
              }
              err => {
                // this.$message.error("气象监测数据请求失败！");
              }
            }
          );
        //土壤检测
        this.$http
          .get(
            /*"http://47.92.105.102:89/qfls/api?addr=" +
            "60817803" +
            "&method=getRealTimeDeviceData&sessionkey=239A506CD4E38A8757A2314442146CF3"*/
            api.ip + "/web/equipment/realtimeData?sensorCode=BY_318862645"
          )
          .then(
            res => {
              // let environmentData = res.body.devValue;
              let environmentData = res.body.data;
              if(res.body.code == -1){
                document.getElementById("nullData").innerHTML="<p style='padding: 5% 17%;font-size: 16px;color: #bbb'>暂无数据</p>";
              } else {
                this.trEnvironmentData = environmentData.filter(item => {
                  return item.name == "温度" || item.name == "湿度";
                });
              }
            },
            err => {
              // this.$message.error("土壤检测数据请求失败！");
            }
          );
        //温室数据监测
        this.$http
          .get(
            api.ip + "/web/equipment/realtimeData?sensorCode=BY_123"
          )
          .then(
            res => {
              let environmentData = res.body.data;
              if(res.body.code == -1){
                document.getElementById("nullData").innerHTML="<p style='padding: 5% 17%;font-size: 16px;color: #bbb'>暂无数据</p>";
              }else{
                this.greenHouseData = environmentData.filter(item => {
                  return item.name == "光照"  || item.name == "气温" || item.name == "湿度" || item.name == "土温" || item.name == "土湿";
                });
              }
            },
            err => {
              // this.$message.error("温室数据请求失败！");
            }
          );
      },

      getEnvironmentData(type) {
        //获取土壤检测 气象监测数据
        let that = this;
        //气象站
        if (type == 2) {
          that.addr = this.qxAddr;
          //土壤墒情
        } else if(type == 1){
          that.addr = this.trAddr;
          //温室设备
        }else if(type == 4){
          that.addr = this.wsAddr;
        }
        this.$http
          .get(
            /*"http://192.168.1.16:8086/clesun/api/v1.0/web/equipment/findAll?sensorCode=" +
            that.addr*/
            /*"http://47.92.105.102:89/qfls/api?addr=" +
            that.addr +
            "&method=getRealTimeDeviceData&sessionkey=239A506CD4E38A8757A2314442146CF3"*/
            api.ip + "/web/equipment/realtimeData?sensorCode=" +
            that.addr
          )
          .then(
            res => {
              let environmentData = res.body.data;
              if (!type) {

              } else if (type == 1) {
                this.trEnvironmentData = environmentData.filter(item => {
                  return item.name == "温度" || item.name == "湿度"; //item.column == "column_8" || item.column == "column_9";
                });
              } else if (type == 2) {
                this.qxEnvironmentData = environmentData.filter(item => {
                  return item
                  /*return item.name == "光照" || item.name == "风向" || item.name == "风速" || item.name == "气温" || item.name == "湿度" || item.name == "雨量";//item.column != "column_0";*/
                });
              }else if (type == 4) {
                this.greenHouseData = environmentData.filter(item => {
                  return item.name == "光照"  || item.name == "气温" || item.name == "湿度" || item.name == "土温" || item.name == "土湿";
                });
              }
            },
            err => {
              // this.$message.error("土壤检测和气象监测数据请求失败！");
            }
          );
      },
      //冠层辐射监测数据 暂时无用
      getCanopyData() {
        let nowTime = new Date().Format("yyyy-MM-dd hh:mm:ss");
        let yestodayTime = new Date().getTime() - 24 * 3600 * 1000;
        let yestodayDate = new Date(yestodayTime).Format("yyyy-MM-dd hh:mm:ss");
        let tenDaysTime = nowTime - 10 * 24 * 3600 * 1000;
        this.$http
          .get(
            api.ip + "/web/equipment/getCanopyEquipmentData",
            {
              params: {
                startTime: "2019-05-20 12:11:00",
                endTime: "2019-05-25 12:11:00"
              }
            }
          )
          .then(
            res => {
              this.canopyData = res.body.data;
            },
            err => {
              // this.$message.error("冠层辐射监测数据请求失败！");
            }
          );
      },

      getDialogChartData(type,code) {
        //http://api.nongyongtong.com:8081/qfls/api?addr=44041331&method=getDeviceSensorDataFromTime&sessionkey=239A506CD4E38A8757A2314442146CF3&startTime=2019-10-2104:48:33&endTime= 2019-10-31 04:48:33channelNumber=4
        let _type = type;
        let _addr = code;
        let that = this;
        /*if (title != "土温" && title != "土湿") {
          that.addr = this.qxAddr;
        }else {
          that.addr = this.trAddr;
        }*/
        let nowDate = new Date().Format("yyyy-MM-dd hh:mm:ss");
        let twoDaysTime = new Date().getTime() - 2 * 24 * 3600 * 1000;
        let twoDaysDate = new Date(twoDaysTime).Format("yyyy-MM-dd hh:mm:ss");
        this.$http
          .get(
            /*"http://47.92.105.102:89/qfls/api?addr=" +
            that.addr +
            "&method=getDeviceSensorDataFromTime&sessionkey=239A506CD4E38A8757A2314442146CF3&startTime=" +
            twoDaysDate +
            "&endTime=" +
            nowDate +
            "&channelNumber=" +
            _type*/
            api.ip + "/web/equipment/historicalData?sensorCode=" +
            _addr +
            "&passageway=" +
            _type +
            "&startTime=" +
            twoDaysDate +
            "&endTime=" +
            nowDate
          )
          .then(
            res => {
              console.log("res")
              console.log(res)
              if (res.body.error == "401" || res.body.code == -1) {
                document.getElementById("dataTendency").innerHTML="暂无数据";
              } else {
                this.dialogChartData.dataX = res.body.data.map(item => {
                  return item.time;
                });
                this.dialogChartData.dataY = res.body.data.map(item => {
                  return item.value;
                });
                this.initDialogChart(this.dialogChartData, type);
              }
            },
            err => {
              // this.$message.error("土壤检测、气象监测、温室设备数据请求失败！");
            }
          );
      },
      //地图
      initLayer() {
        // var mapPop = document.getElementById("mapPop");
        var _this = this;
        this.c_equipment = this.$refs.mapModel.addLayer({
          layername: "c_equipment",
          clickType: "point",
          styles: "c_equipment_shengchanhuanjing",
          popupCallback(e) {
            if (e.values_.equipment_type == "3") {
              let player = new ezuikit.EZUIPlayer({
                id: 'playWind',
                autoplay: true,
                url: e.values_.ip,
                accessToken: _this.token,
                decoderPath: './static/ezuikit',
                /*width: 600,
                  height: 400,*/
                handleError: this.handleError,
                handleSuccess: this.handleSuccess,
              });
              // 日志
              player.on("log", this.log);

              //墒情站
            } else if (e.values_.equipment_type == "1") {
              _this.trAddr = e.values_.equipment_code;
              _this.getEnvironmentData(1);
              //气象站
            } else if (e.values_.equipment_type == "2") {
              _this.qxAddr = e.values_.equipment_code;
              _this.getEnvironmentData(2);
              //温室设备
            } else if (e.values_.equipment_type == "4") {
              _this.wsAddr = e.values_.equipment_code;
              _this.getEnvironmentData(4);
            } else {
              this.$message.error("无法识别设备");
            }
            var data = [];
            for (let key in _this.c_equipmentTextMapping) {
              data.push({
                title: _this.c_equipmentTextMapping[key],
                value: e.get(key)
              });
            }
            return { data: data };
            // return {element: mapPop}
          }
        });
        this.c_equipment.isPopUp = true;
      },

      close() {
        this.$refs.mapModel.closePopup();
      },
      //弹框分页接口
      getPageData(page) {
        //分页接口
        let that = this;
        this.$http
          .get(
            api.ip + "/web/equipment/pageList",
            {
              params: {
                currentPage: page,
                pageSize: 10,
                equipmentType: that.equipmentType,
                parcelCode:that.parcelCode
              }
            }
          )
          .then(
            res => {
              this.dialogData = res.body.data;
            },
            err => {
              // this.$message.error("弹框数据请求失败！");
            }
          );
      },
      //最新版视频弹窗分页
      getVideoPageData(page) {
        let that = this;
        this.$http
          .get(
            api.ip + "/web/equipment/query_BY_camera"
          )
          /*.then(
            res => {
              if(res.body.code == 200 && res.body.isLogin == true) {
                this.$http.get(
                  "http://hxapi.ahaia.net/video"
                )*/
          .then(
            res => {
              if(res.body.code == 0) {
                this.token = res.body.token;
                this.$http
                  .get(
                    api.ip + "/web/equipment/pageList",
                    {
                      params: {
                        currentPage: page,
                        pageSize: 9,
                        equipmentType: "摄像头"
                      }
                    }
                  )
                  .then(
                    res => {
                      this.dialogVideoData = res.data.data;
                      console.log("this.dialogVideoData")
                      console.log(this.dialogVideoData)
                      setTimeout(function(self){
                        for (let j = 0; j < self.videoView.length; j++){
                          self.videoView[j].stop()
                        }
                        for (let i = 0; i < $(".myPlayers").length; i++) {
                          console.log($($(".myPlayers")[i])[0].id)
                          console.log($($(".myPlayers")[i])[0].dataset.ip)
                          console.log(self.token)
                          var player = new ezuikit.EZUIPlayer({
                            id: $($(".myPlayers")[i])[0].id,
                            autoplay: true,
                            url: $($(".myPlayers")[i])[0].dataset.ip,
                            accessToken: self.token,
                            decoderPath: './static/ezuikit',
                            /*width: 600,
                            height: 400*/
                          })
                          self.videoView.push(player)
                        }
                      },500,this)
                    },
                    err => {
                      // this.$message.error("弹框数据请求失败！");
                    }
                  );
              }
            }
          );


      },

      /*//原来版本视频弹窗分页
      getVideoPageData(page) {
        let that = this;
        this.$http
          .get(
            api.ip + "/web/equipment/pageList",
            {
              params: {
                currentPage: page,
                pageSize: 9,
                equipmentType: "摄像头"
              }
            }
          )
          .then(
            res => {
              this.dialogVideoData = res.data.data
              setTimeout(function(self){
                for (let j = 0; j < self.videoView.length; j++){
                  self.videoView[j].stop()
                }
                for (let i = 0; i < $(".myPlayers").length; i++) {
                  console.log($($(".myPlayers")[i])[0].id)
                  var player = new window.EZUIKit.EZUIPlayer($($(".myPlayers")[i])[0].id)
                  self.videoView.push(player)
                }
                console.log(self.videoView)
              },500,this)

            },
            err => {
              // this.$message.error("弹框数据请求失败！");
            }
          );
      },*/
      handlePlantCount() {
        this.equipmentType = "";
        this.parcelCode = "";
        this.getPageData(1);
        this.dialogPlantCount = true;
      },
      handlePlantType() {
        this.equipmentType = "";
        this.parcelCode = "";
        this.getPageData(1);
        this.dialogPlantTypeChart = true;
      },
      //视频弹窗
      handleVideo(){
        this.dialogVideo = true;
        this.player.stop()
        this.getVideoPageData(1);
      },
      //翻页
      handleCurrentChange(val) {
        this.getPageData(val);
        this.getVideoPageData(val)
      },
      //初始化弹框折线图
      initDialogChart(data, title) {
        let myChart = echarts.init(document.getElementById("dataTendency"));
        var xData = data.dataX;
        var yData1 = data.dataY;
        let option = {
          title: {
            top: "0",
            left: "center",
            textStyle: {
              align: "center",
              fontSize: 22
            }
          },
          tooltip: {
            trigger: "axis",
            axisPointer: {
              type: "cross"
            }
          },
          legend: {
            x: "center",
            y: "40px",
            textStyle: {
              color: "#7195ae",
              fontSize: 13
            },
            icon: "circle"
          },

          grid: {
            left: "5%",
            right: "5%",
            bottom: "10%",
            top: "18%",
            containLabel: true
          },
          xAxis: [
            {
              type: "category",
              data: xData,
              nameTextStyle: {
                color: "#d4ffff"
              },
              axisLine: {
                lineStyle: {
                  color: "#"
                }
              },

              axisTick: {
                show: false
              },
              axisLabel: {
                show: true,
                textStyle: {
                  color: "#FFF",
                  fontSize: 12
                }
              }
            }
          ],
          yAxis: [
            {
              type: "value",
              name: title,

              axisTick: {
                show: false
              },
              axisLine: {
                show: false,
                lineStyle: {
                  color: "#fff",
                  fontSize: 10
                }
              },
              axisLabel: {
                textStyle: {
                  fontSize: 10
                }
              },
              splitLine: {
                lineStyle: {
                  type: "double",
                  color: "#7195ae"
                }
              }
            }
          ],
          series: [
            {
              type: "line",
              yAxisIndex: 0,
              symbolSize: 12,
              itemStyle: {
                normal: {
                  color: "skyblue"
                }
              },
              data: yData1
            }
          ]
        };
        myChart.setOption(option);
      },
      //调起折线图弹框
      handleTendencyData(type,code) {
        this.dialogEnvCount = true;
        this.getDialogChartData(type,code);
      },
      /*//调起折线图弹框
      handleTendencyData(title, type) {
        this.dialogEnvCount = true;
        this.getDialogChartData(title, type);
      },*/
      //回车搜索
      searchEnter(e){
        let keyCode = window.event? e.keyCode:e.which;
        if (keyCode == 13){
          this.getPageData(1);
        }
      },
      //初始化视频
      initVideo(){
        this.$http
          .get(
            api.ip + "/web/equipment/query_BY_camera"
          )
          .then(
            res => {
              if(res.body.code == 0) {
                this.token = res.body.token;
                let videoUrl = res.body.data[0].url;
                this.player = new ezuikit.EZUIPlayer({
                  id: 'playWind',
                  autoplay: true,
                  url: videoUrl,
                  accessToken: this.token,
                  decoderPath: './static/ezuikit',
                  /*width: 600,
                  height: 400,*/
                  handleError: this.handleError,
                  handleSuccess: this.handleSuccess,
                });
                // player.stop();
                // 日志
                this.player.on("log", this.log);
              }
            }
          );
      },
      // 初始化生产环境数据 仪表盘
      initYbp(){
        this.$http
          .get(
            api.ip + "/web/equipment/getEquipmentType"
          )
          .then(
            res => {
              res.data.data.map(item => {
                let moistureData = []
                let weatherData = []
                let cameraData = []
                let houseData = []
                if (item != null) {
                  if (item.typeName == "墒情站") {
                    let obj = {
                      name: item.typeName,
                      value: item.equipmentNums
                    }
                    moistureData.push(obj)
                    this.initEnvironmentMoistureChart(moistureData);
                  }
                  if (item.typeName == "气象站") {
                    let obj = {
                      name: item.typeName,
                      value: item.equipmentNums
                    }
                    weatherData.push(obj)
                    this.initEnvironmentWeatherChart(weatherData);
                  }
                  if (item.typeName == "摄像头") {
                    let obj = {
                      name: item.typeName,
                      value: item.equipmentNums
                    }
                    cameraData.push(obj)
                    this.initEnvironmentCameraChart(cameraData);
                  }
                  if (item.typeName == "温室设备") {
                    let obj = {
                      name: item.typeName,
                      value: item.equipmentNums
                    }
                    houseData.push(obj)
                    this.initEnvironmentHouseChart(houseData);
                  }

                }
              });

            },
            err => {
              // this.$message.error("生产环境数据请求失败！");
            }
          );
      },
      //视频播放失败回调
      handleError(e) {
        console.log('捕获到错误', e)
      },
      //视频播放成功回调
      handleSuccess() {
        console.log("播放成功回调函数，此处可执行播放成功后续动作");
      },
      //视频日志
      log(str, className) {
      }
    }
  };
</script>
<style>
</style>

