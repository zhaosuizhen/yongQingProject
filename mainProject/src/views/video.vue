<template>
  <div>
        <div id="videobox1">
            <video id="video1" class="video-js vjs-default-skin vjs-big-play-centered" controls preload="auto"  data-setup='{}'>    
                <source id="source1" ref="video" src=""  width="420" height="250"  type="application/x-mpegURL">
                <!-- <source id="source" src="http://ivi.bupt.edu.cn/hls/cctv1hd.m3u8"  type="application/x-mpegURL"> -->
            </video>
        </div>

        <div id="videobox">
            <video id="video" class="video-js vjs-default-skin vjs-big-play-centered" controls preload="auto"  data-setup='{}'>    
                <source id="source" ref="video" src=""  width="420" height="250"  type="application/x-mpegURL">
                <!-- <source id="source" src="http://ivi.bupt.edu.cn/hls/cctv1hd.m3u8"  type="application/x-mpegURL"> -->
            </video>
        </div>
  </div>
</template>

<script>
import videojs from 'video.js'
import 'video.js/dist/video-js.css'
import 'videojs-contrib-hls'


import { getPigVideoUrl } from '../api/visLivestock'
export default {
    data(){
        return{
            urls:[],
        }
    },
    methods:{
        async getPigVideoUrlData(){
            let res = await getPigVideoUrl()                //调用接口获取地址
            console.log(res.data.data)
            console.log(res.data.data.urls[0])
            this.urls = res.data.data.urls

            this.changeVideo('videobox', 2, 'video', 'source')                              //删除video后重新创建一个video
            this.changeVideo('videobox1', 2, 'video1', 'source1')                              //删除video后重新创建一个video
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
                <source id="${sourceID}" src="${this.urls[index]}" type="application/x-mpegURL"> // 重新加载videojs，并赋值url
            </video>`
            document.getElementById(boxID).innerHTML = str2

            videojs(videoID, {
                bigPlayButton: true,            //播放按钮
                textTrackDisplay: false,        
                posterImage: true,              //封面图片
                errorDisplay: false             //错误显示
            }, function () {
                this.play()
            })
        }
    },
     mounted(){
         this.getPigVideoUrlData()
    }
}
</script>

<style>
@import url('video.js/dist/video-js.css');
</style>