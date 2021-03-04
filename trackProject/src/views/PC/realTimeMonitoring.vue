<template>
  <div class="content">
    <Header></Header>
      <iframe style="width:100vw;height:calc(100vh - 60px);vertical-align:bottom;" src="http://39.104.114.103:8082/tracing_the_source_of_straw/map.html"></iframe>
      <!-- <el-row class="main">
          <el-col class="main_left">
              <div class="mapInfo">
                  <div class="info">
                      <h3 style="margin-top:7px;margin-left:3px;color:#fff">实时信息</h3>
                      <el-button size="mini" type="primary" style="position: absolute;top:4px;right:4px;background:#05CDE2">播放</el-button>
                      <div class="form_box">
                          <div class="item">设备ID：<span></span></div>
                          <div class="item">种类：<span>{{getRealTimeInfo.strawType}}</span></div>
                          <div class="item">重量(KG)：<span>{{getRealTimeInfo.strawWeight}}</span></div>
                          <div class="item">车牌：<span>{{getRealTimeInfo.licensePlateNumber}}</span></div>
                          <div class="item">司机：<span>{{getRealTimeInfo.driverName}}</span></div>
                          <div class="item">车辆状态：<span :class="getRealTimeInfo.vehicleOilWay || getRealTimeInfo.vehicleCircuit == '0' ? 'green' : 'red' ">{{getRealTimeInfo.vehicleOilWay || getRealTimeInfo.vehicleCircuit == '0' ? '正常' : (getRealTimeInfo.vehicleOilWay || getRealTimeInfo.vehicleCircuit == '1' ? '异常' : '')}}</span></div>
                          <div class="item">车辆油路：<span :class="getRealTimeInfo.vehicleOilWay == '0' ? 'green' : 'red' ">{{getRealTimeInfo.vehicleOilWay == '0' ? '正常' : (getRealTimeInfo.vehicleOilWay == '1' ? '异常' : '')}}</span></div>
                          <div class="item">车辆电路：<span :class="getRealTimeInfo.vehicleCircuit == '0' ? 'green' : 'red' ">{{getRealTimeInfo.vehicleCircuit == '0' ? '正常' : (getRealTimeInfo.vehicleCircuit == '1' ? '异常' : '')}}</span></div>
                          <div class="item">经度：<span>{{getRealTimeInfo.longitude}}</span></div>
                          <div class="item">纬度：<span>{{getRealTimeInfo.latitude}}</span></div>
                          <div class="item">更新时间：<span>{{getRealTimeInfo.updateTime}}</span></div>
                      </div>
                  </div>
                  <div class="map">2</div>
              </div>
              <div class="historyData">
                  <h3>
                      历史数据
                  </h3>
                  <div class="searchCriteria">
                      选择日期：
                      <el-date-picker v-model="startTime" type="date" placeholder="选择日期时间" @change="choiceStartTime" value-format="yyyy-MM-dd"></el-date-picker>
                      <el-button type="primary" size="mini" @click="searchHistoryData" style="background:#05CDE2;margin-left:15px">查询</el-button>
                  </div>
                  <el-table :data="historyData" style="width: 100%;background:#1C3E54" :header-cell-style="{background:'#147D8B',color:'#c9f6f9'}" :row-class-name="tableRowClassName">
                      <el-table-column align="center" type="index" width="50" label="序号"></el-table-column>
                      <el-table-column align="center" label="设备数量">3</el-table-column>
                      <el-table-column align="center" prop="strawWeight" label="数量(KG)"></el-table-column>
                      <el-table-column align="center" prop="strawType" label="种类"></el-table-column>
                      <el-table-column align="center" prop="licensePlateNumber" label="车牌"></el-table-column>
                      <el-table-column align="center" prop="driverName" label="司机"></el-table-column>
                      <el-table-column align="center" min-width="170%" prop="fillingInTime" label="起始时间"></el-table-column>
                      <el-table-column align="center" min-width="170%" prop="updateTime" label="结束时间"></el-table-column>
                      <el-table-column align="center" min-width="170%" prop="startGps" label="起点坐标"></el-table-column>
                      <el-table-column align="center" min-width="170%" prop="endGps" label="终点坐标"></el-table-column>
                      <el-table-column align="center" label="操作"><span @click="getHistoricalVideoList('2020-09-12 08:00:00', '2020-11-19 13:41:04')" class="play_btn">播放<i class="el-icon-video-play"></i></span></el-table-column>
                  </el-table>
                  <el-pagination layout="prev, pager, next" :total="total" style="float:right" :page-size="pageSize" @current-change="changeCurrent"></el-pagination>
              </div>
          </el-col>
          <el-col class="main_right">
              <div>
                  <section class="video-box">
                    <videoPlayer :options="videoOptions_top" class="vjs-custom-skin videoPlayer" :playsinline="true" autoplay="autoplay"/>
                  </section>
              </div>
              <div>
                  <section class="video-box">
                    <videoPlayer :options="videoOptions_center" class="vjs-custom-skin videoPlayer" :playsinline="true"/>
                  </section>
              </div>
              <div>
                  <section class="video-box">
                    <videoPlayer :options="videoOptions_bottom" class="vjs-custom-skin videoPlayer" :playsinline="true"/>
                  </section>
              </div>
          </el-col>
      </el-row> -->
  </div>
</template>

<script>
import 'video.js/dist/video-js.css'
import { videoPlayer } from 'vue-video-player'
import 'videojs-flash'

import videojs from 'video.js'
import 'videojs-contrib-hls'

import { getRealTimeVideo, getPolicyInformationHistoryByTime, getRealTimeData, getHistoricalVideo } from '@/api/dataSubmit'

import Header from '@/views/header'
export default {
    components:{
        Header,
        videoPlayer
    },
    data(){
        return{
            pageSize:4,
            total:0,
            getRealTimeInfo:{},
            startTime: '',
            endTime: '',
            historyData: [],
            // 视频播放配置
            videoOptions_top: {
                        playbackRates: [0.75, 1.0, 1.5, 2.0], //播放速度
                        autoplay: true, //如果true,浏览器准备好时开始回放。
                        muted: true, // 默认情况下将会消除任何音频。
                        loop: false, // 导致视频一结束就重新开始。
                        preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
                        language: 'zh-CN',
                        aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
                        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
                        sources: [{
                            type: "application/x-mpegURL",
                            src: "http://ivi.bupt.edu.cn/hls/cctv1hd.m3u8" //你的m3u8地址（必填）
                        }],
                        poster: "", //你的封面地址
                        width: document.documentElement.clientWidth,
                        notSupportedMessage: '此视频暂无法播放，请稍后再试', //允许覆盖Video.js无法播放媒体源时显示的默认信息。
                        // controlBar: {
                        //     timeDivider: true,
                        //     durationDisplay: true,
                        //     remainingTimeDisplay: true,
                        //     fullscreenToggle: true  //全屏按钮
                        // }
            },
            videoOptions_center: {
                        playbackRates: [0.75, 1.0, 1.5, 2.0], //播放速度
                        autoplay: true, //如果true,浏览器准备好时开始回放。
                        muted: true, // 默认情况下将会消除任何音频。
                        loop: false, // 导致视频一结束就重新开始。
                        preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
                        language: 'zh-CN',
                        aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
                        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
                        sources: [{
                            type: "application/x-mpegURL",
                            src: "http://ivi.bupt.edu.cn/hls/cctv2hd.m3u8" //你的m3u8地址（必填）
                        }],
                        poster: "", //你的封面地址
                        width: document.documentElement.clientWidth,
                        notSupportedMessage: '此视频暂无法播放，请稍后再试', //允许覆盖Video.js无法播放媒体源时显示的默认信息。
                        // controlBar: {
                        //     timeDivider: true,
                        //     durationDisplay: true,
                        //     remainingTimeDisplay: true,
                        //     fullscreenToggle: true  //全屏按钮
                        // }
            },
            videoOptions_bottom: {
                playbackRates: [0.75, 1.0, 1.5, 2.0], //播放速度
                autoplay: true, //如果true,浏览器准备好时开始回放。
                muted: true, // 默认情况下将会消除任何音频。
                loop: false, // 导致视频一结束就重新开始。
                preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
                language: 'zh-CN',
                aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
                techOrder: ['flash', 'html5'],      // 兼容顺序
                sources: [{ // 流配置，数组形式，会根据兼容顺序自动切换
                    type: 'rtmp/hls',
                    src: 'rtmp://58.200.131.2:1935/livetv/cctv1'
                }],
                poster: "", //你的封面地址
                // width: document.documentElement.clientWidth,
                notSupportedMessage: '此视频暂无法播放，请稍后再试', // 允许覆盖Video.js无法播放媒体源时显示的默认信息。
                controlBar: {
                    timeDivider: true,
                    durationDisplay: true,
                    remainingTimeDisplay: false,
                    fullscreenToggle: true  //全屏按钮
                }
            },
        }
    },
    methods:{
        //查询历史数据
        searchHistoryData(){
            //根据时间获取历史数据
            this.getPolicyInformationHistoryByTimeList(1)
        },
        //历史数据翻页
        changeCurrent(val){
            //根据时间获取历史数据
            this.getPolicyInformationHistoryByTimeList(val)
        },
        choiceStartTime(){
            let time = this.startTime
            this.startTime = `${time} 00:00:00`
            this.endTime = `${time} 23:59:59`
        },
        //获取当前时间
        generateTimeReqestNumber() {
            var date = new Date();
            this.startTime = `${date.getFullYear().toString()}-${this.addZero(date.getMonth() + 1)}-${this.addZero(date.getDate())} 00:00:00`
            this.endTime = `${date.getFullYear().toString()}-${this.addZero(date.getMonth() + 1)}-${this.addZero(date.getDate())} ${this.addZero(date.getHours()) }:${this.addZero(date.getMinutes())}:${this.addZero(date.getSeconds())}`
        },
        addZero(n) {
            return n < 10 ? '0' + n : n 
        },
        //获取直播地址
        async getRealTimeVideoList(){
            let res = await getRealTimeVideo()
            console.log(res)
            res.data.data.forEach((item,index) => {
                if(item.name == "原材料地点摄像头"){
                    this.videoOptions_top.sources[0].src = item.value
                }else if(item.name == "焚烧秸秆地点摄像头"){
                    this.videoOptions_center.sources[0].src = item.value
                }else if(item.name == "车载摄像头"){
                    this.videoOptions_bottom.sources[0].src = item.value
                }
            })
        },
        //根据时间获取历史数据
        async getPolicyInformationHistoryByTimeList(currentPage){
            let res = await getPolicyInformationHistoryByTime({startTime: this.startTime, endTime: this.endTime, currentPage, pageSize:this.pageSize })
            this.total = res.data.data.totalCount
            this.historyData = res.data.data.pageData
        },
        //获取历史视频数据
        async getHistoricalVideoList(startTime, endTime){
            let res = await getHistoricalVideo({startTime, endTime})
            res.data.data.forEach((item,index) => {
                if(item.name == "海康"){
                    this.videoOptions_top.sources = item.ip.map(i => {
                        return {
                            type: "application/x-mpegURL",
                            src: i.substring(i.indexOf('http'), i.indexOf('m3u8') + 4) //你的m3u8地址（必填
                        }
                    })
                }else if(item.name == "大华"){
                    this.videoOptions_center.sources = item.ip.map(i => {
                        return {
                            type: "application/x-mpegURL",
                            src: i.substring(i.indexOf('http'), i.indexOf('m3u8') + 4) //你的m3u8地址（必填
                        }
                    })
                }else if(item.name == "车载摄像头"){
                    this.videoOptions_bottom.sources = [{ // 流配置，数组形式，会根据兼容顺序自动切换
                        type: 'rtmp/hls',
                        src: item.ip[0]
                    }]
                }
            })
        },
        //实时信息数据
        async getRealTimeDataList(licensePlateNumber){
            let res = await getRealTimeData({licensePlateNumber})
            this.getRealTimeInfo = res.data.data
        },
        //控制行颜色
        tableRowClassName ({ row, rowIndex }) {
            if ((rowIndex + 1) % 2 === 0) {
                return 'double';   //对应的类
            } else {
                return 'single';    //对应的类
            }
        },
    },
    created(){
        //获取直播地址
        this.getRealTimeVideoList()

        //实时信息数据
        this.getRealTimeDataList('湘N1F967')

        //获取历史数据
        this.getPolicyInformationHistoryByTimeList(1)

        //设置视频流地址
        
        
        

        // this.generateTimeReqestNumber()
    },
}
</script>

<style scoped lang="scss">
.content{
    width: 100%;
    height: 100%;
    background: #1A3C5D;
}
.main{
    background: #1A3C5D;
    display: flex;
    justify-content: space-between;
    padding: 0 10px;
    height: calc(100vh - 60px);
    // margin-top: 5px;
    // margin-bottom: 5px;
    .main_left{
        width: 72%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        .mapInfo{
            height: 65.3%;
            display: flex;
            justify-content: space-between;
            .info{
                background: #1C3E54;
                position: relative;
                width: 24%;
                border: 2px solid #1A657F;
                border-radius: 8px;
                box-shadow: 1px 1px 2px #1A657F;
                .form_box{
                    // position: relative;
                    height: calc(100% - 30px);
                    display: flex;
                    flex-direction: column;
                    justify-content: space-around;
                    padding: 0 8px;
                    .item{
                        background: #147D8B;
                        color: #c9f6f9;
                        position: relative;
                        border: 1px solid #1A657F;
                        height: 4vh;
                        line-height: 4vh;
                        border-radius: 5px;
                        padding: 0 10px;
                        font-size: 12px;
                        span{
                            // text-align: right;
                            float: right;
                            font-size: 12px;
                        }
                    }
                }
            }
            .map{
                width: 75%;
                border: 2px solid #1A657F;
                border-radius: 8px;
                box-shadow: 1px 1px 2px #1A657F;
            }
        }
        .historyData{
            background: #1C3E54;
            position: relative;
            height: 32%;
            border: 2px solid #1A657F;
            border-radius: 8px;
            box-shadow: 1px 1px 2px #1A657F;
            overflow: auto;
            h3{
                margin-top:15px;
                margin-left:3px;
                margin-bottom: 15px;
                color: #fff;
            }
            .searchCriteria{
                color: #fff;
                position: absolute;
                top: 5px;
                right: 15px;
                z-index: 9999;
            }
        }
    }
    .main_right{
        width: 26%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        div{
            height: 32%;
            border: 2px solid #1A657F;
            border-radius: 8px;
            box-shadow: 1px 1px 2px #1A657F;
            overflow: hidden;
        }
    }
}
.play_btn{
    cursor: pointer;
    color: #03f999;
}
.red{
    color: #FE3234;
}
.green{
    color: #7DBC07;
}

</style>