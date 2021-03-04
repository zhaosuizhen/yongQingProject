<!--
<template>
  <div class="webSite-container">
    &lt;!&ndash;gis地图&ndash;&gt;
    <div style="width: 100%;height: 100%">
      <industryAnalysisMap ref="mapModel" @></industryAnalysisMap>
    </div>
    <div class="visualiza-shade">
      <img src="../../assets/visualiza/visualiza_bg.png" alt="">
    </div>
    <div class="vis-geography-left">
      <p class="vis-geography-title">视频图像数据</p>
      <div class="vis-geography-count" @click="dialogGeographyCountChart = false">
        <div class="vis-geography-count-list vis-plant-count-list">
          <p>视频数量</p>
          <p>
            <i class="vis-geography-count-num ">{{ videoData.videoCount }}</i>
            <i>&nbsp&nbsp个</i>
          </p>
        </div>
        <div class="vis-geography-count-list vis-plant-count-list">
          <p>生长图谱</p>
          <p>
            <i class="vis-geography-count-num">{{ videoData.sztp }}</i>
            <i>&nbsp&nbsp组</i>
          </p>
        </div>
        <div class="vis-geography-count-list vis-plant-count-list">
          <p>摄像头数量</p>
          <p>
            <i class="vis-geography-count-num">{{ videoData.cameriCount }}</i>
            <i>&nbsp&nbsp台</i>
          </p>
        </div>
      </div>
      <div class="vis-geography-charts" @click="dialogGeographyLandChart = false">
        <div class="vis-geography-charts-title">
          视频
        </div>
        <div style="width: 100%;height: 80%;">
          &lt;!&ndash;<video src="../../assets/visualiza/qs.mp4" controls="controls" style="width: 100%;height: 100%;">&ndash;&gt;
          &lt;!&ndash;您的浏览器不支持 video 标签。&ndash;&gt;
          &lt;!&ndash;</video>&ndash;&gt;
          <video id="video" controls="controls" autoplay="autoplay" style="width: 100%;height: 100%;padding-top: 2%">
            <source src="http://hls01open.ys7.com/openlive/637184d5c5d04f5985fe746516f2dc26.m3u8" type="video/mp4" style="width: 100%;height: 100%;" />
            您的浏览器不支持 video 标签
          </video>
          &lt;!&ndash; <video
              id="myPlayer"
              autoplay
              src="http://hls01open.ys7.com/openlive/637184d5c5d04f5985fe746516f2dc26.m3u8"
              controls
              playsInline
              webkit-playsinline
              style="width:100%;height:100%"
            >
            </video> &ndash;&gt;
        </div>
      </div>
      <el-row class="vis-geography-menu">
        <el-col :span="12">
          <router-link to='/visDiseases' tag='span'>
            病虫害数据
          </router-link>
        </el-col>
        <el-col :span="12">
          <router-link to='/visGeography' tag='span'>
            地理信息数据
          </router-link>
        </el-col>
        <el-col :span="12">
          <router-link to='/visMarket' tag='span'>
            市场交易数据
          </router-link>
        </el-col>
        <el-col :span="12">
          <router-link to='/visPlant' tag='span'>
            生产种植数据
          </router-link>
        </el-col>
        <el-col :span="12">
          <router-link to='/visManage' tag='span'>
            经营主体数据
          </router-link>
        </el-col>
        <el-col :span="12">
          <router-link to='/visEnvironment' tag='span'>
            生产环境数据
          </router-link>
        </el-col>
        <el-col :span="12">
          <router-link to='/visInputs' tag='span'>
            投入品数据
          </router-link>
        </el-col>
        <el-col :span="12">
          <router-link to='/visProcess' tag='span'>
            生产过程数据
          </router-link>
        </el-col>
        <el-col :span="12">
          <router-link to='/visSource' tag='span'>
            质量溯源数据
          </router-link>
        </el-col>
        <el-col :span="12">
          <router-link to='/visVideo' tag='span'>
            视频图像数据
          </router-link>
        </el-col>
      </el-row>
    </div>

    <div class="vis-geography-right">
      &lt;!&ndash;生长图谱数量&ndash;&gt;
      <div class="vis-geography-right-chart">
        <div class="vis-geography-charts-title">
          生长图谱数量
        </div>
        <div id="videoGrowMapNumChart" @click="dialogGeographyHouseChart = false">

        </div>
      </div>
      &lt;!&ndash;生长图谱&ndash;&gt;
      <div class="vis-geography-right-chart" @click="dialogGeographyHouseNumChart = false">
        <div class="vis-geography-charts-title">
          生长图谱
        </div>
        <div style="display:flex;height: 80%;margin-top: 2%">
          <div v-for="item in growthMap" :key="item.time" style="flex:1;margin-right: 1%">
            <img :src="item.imgUrl" alt="" style="height: 100%;width:100%">
          </div>
        </div>
      </div>
      &lt;!&ndash;摄像头数量&ndash;&gt;
      <div class="vis-geography-right-chart">
        <div class="vis-geography-charts-title">
          摄像头数量
        </div>
        <div id="videoCameraNumChart" @click="dialogGeographyHistoryNumChart = false">

        </div>
      </div>
    </div>

    &lt;!&ndash;统计弹窗&ndash;&gt;
    <div class="vis-geography">
      <el-dialog title="统计" :visible.sync="dialogGeographyCountChart">
        <el-form :inline="true" :model="formGeographyCount">
          &lt;!&ndash;<el-form-item label="地块编码">
            <el-input v-model="formGeographyCount.dialogSearchNum" placeholder="地块编码" suffix-icon="el-icon-search"></el-input>
          </el-form-item>&ndash;&gt;
          <el-form-item label="摄像头名称">
            <el-input v-model="formGeographyCount.dialogSearchType" placeholder="摄像头名称" suffix-icon="el-icon-search">
            </el-input>
          </el-form-item>
          <el-button type="primary" style="margin-right: 8%;padding: 10px 20px">查询</el-button>
          &lt;!&ndash;<el-date-picker
            v-model="formGeographyCount.dialogdate"
            type="datetime"
            placeholder="选择日期时间">
          </el-date-picker>&ndash;&gt;
        </el-form>
        <el-table :data="geographyCountData">
          <el-table-column property="geographyLandNum" label="摄像头编号" style="width: 10%;"></el-table-column>
          <el-table-column property="geographyLandType" label="所属地块" style="width: 10%;"></el-table-column>
          <el-table-column property="geographyLandVariety" label="作物品种" style="width: 10%;"></el-table-column>
          &lt;!&ndash; <el-table-column property="geographyLandArea" label="作物面积" style="width: 10%;"></el-table-column>
          <el-table-column property="geographyLandStart" label="开始时间" style="width: 20%;"></el-table-column>
          <el-table-column property="geographyLandEnd" label="结束时间" style="width: 20%;"></el-table-column>&ndash;&gt;
        </el-table>
      </el-dialog>
    </div>

    &lt;!&ndash;视频弹窗&ndash;&gt;
    <div class="vis-geography">
      <el-dialog title="视频" :visible.sync="dialogGeographyLandChart">
        <el-form :inline="true" :model="formGeography">
          <el-form-item label="地块编码">
            <el-input v-model="formGeography.dialogSearchNum" placeholder="地块编码" suffix-icon="el-icon-search">
            </el-input>
          </el-form-item>
          <el-form-item label="作物类型">
            <el-input v-model="formGeography.dialogSearchType" placeholder="作物类型" suffix-icon="el-icon-search">
            </el-input>
          </el-form-item>

          <el-button type="primary" style="margin-right: 8%;padding: 10px 20px">查询</el-button>

          <el-date-picker v-model="formGeography.dialogdate" type="datetime" placeholder="选择日期时间">
          </el-date-picker>
        </el-form>
        <el-table :data="geographyLandData">
          <el-table-column property="geographyLandNum" label="地块编号" style="width: 10%;"></el-table-column>
          <el-table-column property="geographyLandType" label="作物类型" style="width: 10%;"></el-table-column>
          <el-table-column property="geographyLandVariety" label="作物品种" style="width: 10%;"></el-table-column>
          <el-table-column property="geographyLandArea" label="作物面积" style="width: 10%;"></el-table-column>
          <el-table-column property="geographyLandStart" label="开始时间" style="width: 20%;"></el-table-column>
          <el-table-column property="geographyLandEnd" label="结束时间" style="width: 20%;"></el-table-column>
        </el-table>
      </el-dialog>
    </div>

    &lt;!&ndash;生长图谱数量弹窗&ndash;&gt;
    <div class="vis-geography">
      <el-dialog title="生长图谱数量" :visible.sync="dialogGeographyHouseChart">
        <el-form :inline="true" :model="formGeographyHouse">
          &lt;!&ndash;<el-form-item label="地块编码">
            <el-input v-model="formGeographyHouse.dialogSearchNum" placeholder="地块编码" suffix-icon="el-icon-search"></el-input>
          </el-form-item>&ndash;&gt;
          <el-form-item label="作物名称">
            <el-input v-model="formGeographyHouse.dialogSearchType" placeholder="作物名称" suffix-icon="el-icon-search">
            </el-input>
          </el-form-item>

          <el-button type="primary" style="margin-right: 8%;padding: 10px 20px">查询</el-button>

          &lt;!&ndash;<el-date-picker
            v-model="formGeographyHouse.dialogdate"
            type="datetime"
            placeholder="选择日期时间">
          </el-date-picker>&ndash;&gt;
        </el-form>
        <el-table :data="geographyHouseData">
          <el-table-column property="geographyLandNum" label="地块编号" style="width: 10%;"></el-table-column>
          <el-table-column property="geographyLandType" label="作物类型" style="width: 10%;"></el-table-column>
          <el-table-column property="geographyLandVariety" label="作物品种" style="width: 10%;"></el-table-column>
          <el-table-column property="geographyLandArea" label="作物面积" style="width: 10%;"></el-table-column>
          &lt;!&ndash;  <el-table-column property="geographyLandStart" label="开始时间" style="width: 20%;"></el-table-column>
          <el-table-column property="geographyLandEnd" label="结束时间" style="width: 20%;"></el-table-column>&ndash;&gt;
        </el-table>
      </el-dialog>
    </div>

    &lt;!&ndash;生长图谱弹窗&ndash;&gt;
    <div class="vis-geography">
      <el-dialog title="生长图谱" :visible.sync="dialogGeographyHouseNumChart">
        <el-form :inline="true" :model="formGeographyHouseNum">
          <el-form-item label="地块编码">
            <el-input v-model="formGeographyHouseNum.dialogSearchNum" placeholder="地块编码" suffix-icon="el-icon-search">
            </el-input>
          </el-form-item>
          <el-form-item label="作物类型">
            <el-input v-model="formGeographyHouseNum.dialogSearchType" placeholder="作物类型" suffix-icon="el-icon-search">
            </el-input>
          </el-form-item>
          <el-button type="primary" style="margin-right: 8%;padding: 10px 20px">查询</el-button>
          <el-date-picker v-model="formGeographyHouseNum.dialogdate" type="datetime" placeholder="选择日期时间">
          </el-date-picker>
        </el-form>
        <el-table :data="geographyHouseNumData">
          <el-table-column property="geographyLandNum" label="地块编号" style="width: 10%;"></el-table-column>
          <el-table-column property="geographyLandType" label="作物类型" style="width: 10%;"></el-table-column>
          <el-table-column property="geographyLandVariety" label="作物品种" style="width: 10%;"></el-table-column>
          <el-table-column property="geographyLandArea" label="作物面积" style="width: 10%;"></el-table-column>
          <el-table-column property="geographyLandStart" label="开始时间" style="width: 20%;"></el-table-column>
          <el-table-column property="geographyLandEnd" label="结束时间" style="width: 20%;"></el-table-column>
        </el-table>
      </el-dialog>
    </div>

    &lt;!&ndash;摄像头数量弹窗&ndash;&gt;
    <div class="vis-geography">
      <el-dialog title="摄像头数量" :visible.sync="dialogGeographyHistoryNumChart">
        <el-form :inline="true" :model="formGeographyHouseNum">
          <el-form-item label="地块编码">
            <el-input v-model="formGeographyHistoryNum.dialogSearchNum" placeholder="地块编码" suffix-icon="el-icon-search">
            </el-input>
          </el-form-item>
          <el-form-item label="作物类型">
            <el-input v-model="formGeographyHistoryNum.dialogSearchType" placeholder="作物类型"
              suffix-icon="el-icon-search"></el-input>
          </el-form-item>
          <el-button type="primary" style="margin-right: 8%;padding: 10px 20px">查询</el-button>
          <el-date-picker v-model="formGeographyHistoryNum.dialogdate" type="datetime" placeholder="选择日期时间">
          </el-date-picker>
        </el-form>
        <el-table :data="geographyHistoryNumData">
          <el-table-column property="geographyLandNum" label="地块编号" style="width: 10%;"></el-table-column>
          <el-table-column property="geographyLandType" label="作物类型" style="width: 10%;"></el-table-column>
          <el-table-column property="geographyLandVariety" label="作物品种" style="width: 10%;"></el-table-column>
          <el-table-column property="geographyLandArea" label="作物面积" style="width: 10%;"></el-table-column>
          <el-table-column property="geographyLandStart" label="开始时间" style="width: 20%;"></el-table-column>
          <el-table-column property="geographyLandEnd" label="结束时间" style="width: 20%;"></el-table-column>
        </el-table>
      </el-dialog>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import industryAnalysisMap from "./industryAnalysisMap";
  import chart from '../../js/visualiza/visVideo';
 /* import '../../assets/ezuikit1/ezuikit'*/
  import api from "../../request/visualiza1Api.js";
  export default {
    data() {
      return {
        //视频地址
        videoUrl: "http://hls01open.ys7.com/openlive/637184d5c5d04f5985fe746516f2dc26.m3u8",
        //视频图像数据
        videoData: {
          videoCount: 0,
          sztp: 0,
          cameriCount: 0
        },
        //生长图谱
        growthMap: [],
        // 控制弹窗显示隐藏
        dialogGeographyLandChart: false,
        dialogGeographyHouseChart: false,
        dialogGeographyHouseNumChart: false,
        dialogGeographyHistoryNumChart: false,
        dialogGeographyCountChart: false,

        //统计 弹窗 表格
        geographyCountData: [{
          geographyLandNum: '1',
          geographyLandType: '地块一',
          geographyLandVariety: '川麦42',

        }, {
          geographyLandNum: '2',
          geographyLandType: '地块二',
          geographyLandVariety: '川麦43',
        }, {
          geographyLandNum: '3',
          geographyLandType: '地块三',
          geographyLandVariety: '川麦44',
        }, {
          geographyLandNum: '4',
          geographyLandType: '地块四',
          geographyLandVariety: '川麦45',
        }, {
          geographyLandNum: '5',
          geographyLandType: '地块五',
          geographyLandVariety: '川麦45',
        }, {
          geographyLandNum: '6',
          geographyLandType: '地块六',
          geographyLandVariety: '川麦45',
        }],
        //统计 弹窗 搜索
        formGeographyCount: {
          dialogSearchNum: '',
          dialogSearchType: '',
          dialogdate: ''
        },
        // 视频 弹窗 表格
        geographyLandData: [{
          geographyLandNum: '6502',
          geographyLandType: '小麦',
          geographyLandVariety: '川麦42',
          geographyLandArea: '21.88亩',
          geographyLandStart: '2018-10-02',
          geographyLandEnd: '2019-10-02',
        }, {
          geographyLandNum: '6503',
          geographyLandType: '小麦',
          geographyLandVariety: '川麦43',
          geographyLandArea: '22.8亩',
          geographyLandStart: '2018-10-02',
          geographyLandEnd: '2019-10-02',
        }, {
          geographyLandNum: '6504',
          geographyLandType: '小麦',
          geographyLandVariety: '川麦44',
          geographyLandArea: '25亩',
          geographyLandStart: '2018-10-02',
          geographyLandEnd: '2019-10-02',
        }, {
          geographyLandNum: '6505',
          geographyLandType: '小麦',
          geographyLandVariety: '川麦45',
          geographyLandArea: '34.7亩',
          geographyLandStart: '2018-10-02',
          geographyLandEnd: '2019-10-02',
        }, {
          geographyLandNum: '6505',
          geographyLandType: '小麦',
          geographyLandVariety: '川麦45',
          geographyLandArea: '34.7亩',
          geographyLandStart: '2018-10-02',
          geographyLandEnd: '2019-10-02',
        }, {
          geographyLandNum: '6505',
          geographyLandType: '小麦',
          geographyLandVariety: '川麦45',
          geographyLandArea: '34.7亩',
          geographyLandStart: '2018-10-02',
          geographyLandEnd: '2019-10-02',
        }],
        // 视频 弹窗 搜索
        formGeography: {
          dialogSearchNum: '',
          dialogSearchType: '',
          dialogdate: ''
        },
        // 生长图谱数量 弹窗 表格
        geographyHouseData: [{
          geographyLandNum: '6502',
          geographyLandType: '蔬菜',
          geographyLandVariety: '辣椒',
          geographyLandArea: '28.88亩',
          geographyLandStart: '2018-10-02',
          geographyLandEnd: '2019-10-02',
        }, {
          geographyLandNum: '6503',
          geographyLandType: '蔬菜',
          geographyLandVariety: '黄瓜',
          geographyLandArea: '30.8亩',
          geographyLandStart: '2018-10-02',
          geographyLandEnd: '2019-10-02',
        }, {
          geographyLandNum: '6504',
          geographyLandType: '蔬菜',
          geographyLandVariety: '辣椒',
          geographyLandArea: '26亩',
          geographyLandStart: '2018-10-02',
          geographyLandEnd: '2019-10-02',
        }, {
          geographyLandNum: '6505',
          geographyLandType: '蔬菜',
          geographyLandVariety: '黄瓜',
          geographyLandArea: '34.7亩',
          geographyLandStart: '2018-10-02',
          geographyLandEnd: '2019-10-02',
        }, {
          geographyLandNum: '6505',
          geographyLandType: '蔬菜',
          geographyLandVariety: '黄瓜',
          geographyLandArea: '12.7亩',
          geographyLandStart: '2018-10-02',
          geographyLandEnd: '2019-10-02',
        }, {
          geographyLandNum: '6505',
          geographyLandType: '蔬菜',
          geographyLandVariety: '辣椒',
          geographyLandArea: '34.7亩',
          geographyLandStart: '2018-10-02',
          geographyLandEnd: '2019-10-02',
        }],
        // 生长图谱数量 弹窗 搜索
        formGeographyHouse: {
          dialogSearchNum: '',
          dialogSearchType: '',
          dialogdate: ''
        },
        //生长图谱 弹窗 表格
        geographyHouseNumData: [{
          geographyLandNum: '6502',
          geographyLandType: '小麦',
          geographyLandVariety: '川麦42',
          geographyLandArea: '21.88亩',
          geographyLandStart: '2018-10-02',
          geographyLandEnd: '2019-10-02',
        }, {
          geographyLandNum: '6503',
          geographyLandType: '小麦',
          geographyLandVariety: '川麦43',
          geographyLandArea: '22.8亩',
          geographyLandStart: '2018-10-02',
          geographyLandEnd: '2019-10-02',
        }, {
          geographyLandNum: '6504',
          geographyLandType: '小麦',
          geographyLandVariety: '川麦44',
          geographyLandArea: '25亩',
          geographyLandStart: '2018-10-02',
          geographyLandEnd: '2019-10-02',
        }, {
          geographyLandNum: '6505',
          geographyLandType: '小麦',
          geographyLandVariety: '川麦45',
          geographyLandArea: '34.7亩',
          geographyLandStart: '2018-10-02',
          geographyLandEnd: '2019-10-02',
        }, {
          geographyLandNum: '6505',
          geographyLandType: '小麦',
          geographyLandVariety: '川麦45',
          geographyLandArea: '34.7亩',
          geographyLandStart: '2018-10-02',
          geographyLandEnd: '2019-10-02',
        }, {
          geographyLandNum: '6505',
          geographyLandType: '小麦',
          geographyLandVariety: '川麦45',
          geographyLandArea: '34.7亩',
          geographyLandStart: '2018-10-02',
          geographyLandEnd: '2019-10-02',
        }],
        // 生长图谱 弹窗 搜索
        formGeographyHouseNum: {
          dialogSearchNum: '',
          dialogSearchType: '',
          dialogdate: ''
        },
        //摄像头数量 弹窗 表格
        geographyHistoryNumData: [{
          geographyLandNum: '6502',
          geographyLandType: '小麦',
          geographyLandVariety: '川麦42',
          geographyLandArea: '21.88亩',
          geographyLandStart: '2018-10-02',
          geographyLandEnd: '2019-10-02',

        }, {
          geographyLandNum: '6503',
          geographyLandType: '小麦',
          geographyLandVariety: '川麦43',
          geographyLandArea: '22.8亩',
          geographyLandStart: '2018-10-02',
          geographyLandEnd: '2019-10-02',

        }, {
          geographyLandNum: '6504',
          geographyLandType: '小麦',
          geographyLandVariety: '川麦44',
          geographyLandArea: '25亩',
          geographyLandStart: '2018-10-02',
          geographyLandEnd: '2019-10-02',

        }, {
          geographyLandNum: '6505',
          geographyLandType: '小麦',
          geographyLandVariety: '川麦45',
          geographyLandArea: '34.7亩',
          geographyLandStart: '2018-10-02',
          geographyLandEnd: '2019-10-02',

        }, {
          geographyLandNum: '6505',
          geographyLandType: '小麦',
          geographyLandVariety: '川麦45',
          geographyLandArea: '34.7亩',
          geographyLandStart: '2018-10-02',
          geographyLandEnd: '2019-10-02',

        }, {
          geographyLandNum: '6505',
          geographyLandType: '小麦',
          geographyLandVariety: '川麦45',
          geographyLandArea: '34.7亩',
          geographyLandStart: '2018-10-02',
          geographyLandEnd: '2019-10-02',

        }],
        // 摄像头数量 弹窗 搜索
        formGeographyHistoryNum: {
          dialogSearchNum: '',
          dialogSearchType: '',
          dialogdate: ''
        },
        c_equipmentTextMapping: {

        }
      }
    },
    components: {
      industryAnalysisMap
    },
    mounted() {
      this.initVideoGrowMapNumChart();
      this.initVideoCameraNumChart();
      this.initLayer();
      this.initCount();
      this.initGrowthMap();
       (function(){
        // var url = $('#url').val().trim();
        const url = 'http://hls01open.ys7.com/openlive/637184d5c5d04f5985fe746516f2dc26.m3u8'
        $('#video').attr("src", url);
        var player = new window.EZUIKit.EZUIPlayer('video');
        // 日志
        player.on('log', log);

        function log(str) {
          var div = document.createElement('DIV');
          div.innerHTML = (new Date()).Format('yyyy-MM-dd hh:mm:ss.S') + JSON.stringify(str);
          document.body.appendChild(div);
        }
        $("#stop").click(function () {
          player.stop();
      });
      }(window))
    },
    methods: {
      //生长图谱数量
      initVideoGrowMapNumChart() {
        this.$http.get(
          api.ip + "/web/videoimage/growthmap"
          )
          .then(
            res => {
              const oneYear = 31536000000;
              let data = res.body.data.filter(ele =>{
                let lowerLimit = new Date().getTime() - oneYear;
                let upperLimit = new Date().getTime();
                return new Date(ele.time).getTime() >= lowerLimit && new Date(ele.time).getTime() <= upperLimit;
              });
              let echartsData = data.map(ele => {
                let newEle = {
                  count: 0,
                  time: ''
                };
                if (ele) {
                  if (ele.count) {
                    newEle.count = ele.count;
                  }
                  if (ele.time) {
                    let reg = /^\d{4}-(\d{2})$/;
                    let month = reg.exec(ele.time)[1];
                    if (month.charAt(0) === '0') {
                      month = month.slice(1, 2);
                    }
                    month = month + '月';
                    newEle.time = month;
                  }
                }
                return newEle;
              });
              chart.EchartsVideoGrowMapNumChart("videoGrowMapNumChart", echartsData);
            },
            err => {
              this.$message.error("生长图谱数据请求失败！");
            }
          );
      },
      //摄像头数量
      initVideoCameraNumChart() {
        this.$http.get(
          api.ip + "/web/videoimage/camericount"
          )
          .then(
            res => {
              let echartsData = res.body.data.map(ele => {
                let newEle = {
                  count: 0,
                  time: ''
                };
                if (ele) {
                  if (ele.count) {
                    newEle.count = ele.count;
                  }
                  if (ele.time) {
                    newEle.time = ele.time;
                  }
                }
                return newEle;
              });
              chart.EchartsVideoCameraNumChart("videoCameraNumChart", echartsData);
            },
            err => {
              this.$message.error("摄像头数量请求失败！");
            }
          );
      },
      //视频播放
      initLayer() {
        var _this = this;
        this.c_equipment = this.$refs.mapModel.addLayer({
          layername: "c_equipment",
          clickType: "point",
          styles: "c_equipment_shipin",
          popupCallback(e) {
            let video = document.getElementById('video');
            video.src = e.values_.ip ? e.values_.ip : this.videoUrl;
            // console.log(e.values_.ip)
            video.play();
            var data = [];
            for (let key in _this.c_equipmentTextMapping) {
              data.push({
                title: _this.c_equipmentTextMapping[key],
                value: e.get(key)
              });
            }
            //return {data: data};
          }
        });
        this.c_equipment.isPopUp = true;
      },
      //生长图谱数据 图片
      initGrowthMap() {
        this.$http.get(
          api.ip + "/web/videoimage/growthimgs"
          )
          .then(
            res => {
              this.growthMap = res.body.data;
            },
            err => {
              this.$message.error("生长图谱数据请求失败！");
            }
          );
      },
      //视频图像数据
      initCount() {
        this.$http.get(
          api.ip + "/web/videoimage/countdata"
          )
          .then(
            res => {
              this.videoData = res.body.data;
            },
            err => {
              this.$message.error("视频图像数据请求失败！");
            }
          );
      }
    }
  }

</script>
<style>

</style>
-->
