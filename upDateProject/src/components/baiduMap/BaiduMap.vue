<!--百度地图组件-->
<template>
    <div id="baiduMap">
        <el-row> 
            <baidu-map v-bind:style="mapStyle" class="bm-view" ak="XwUZB4H7LycKG5zVKZoDcYft"
                :mapClick="false"
                :center="center" 
                :zoom="zoom" 
                :scroll-wheel-zoom="true" 
                @click="getClickInfo"
                @moving="syncCenterAndZoom" 
                @moveend="syncCenterAndZoom" 
                @zoomend="syncCenterAndZoom">
                <bm-view style="width: 100%; height:500px;"></bm-view>
                    <!-- <bm-marker :position="{lng: longitude, lat: latitude}" :dragging="true" animation="BMAP_ANIMATION_BOUNCE">
                </bm-marker> -->
                <bm-control >
                <bm-auto-complete v-model="keyword" :sugStyle="{zIndex: 999999}">
                    <input type="text" placeholder="请输入搜索关键字" class="serachinput mapSerachinput">
                </bm-auto-complete>
                </bm-control>
                <bm-local-search :keyword="keyword" :auto-viewport="true"></bm-local-search>
            </baidu-map>
        </el-row>
    </div>
</template>
<script>
import {BaiduMap, BmControl, BmView, BmAutoComplete,BmLocalSearch} from 'vue-baidu-map' //BmMarker
export default {
    data () {
        return {
            keyword: '',
            mapStyle: {
                width: '100%',
                height: this.mapHeight + 'px'
            },
            center: {lng: 116.404, lat: 39.915},
            zoom: 15
        }
    },
    components:{
        BaiduMap,
        BmControl,
        BmView,
        BmAutoComplete,
        BmLocalSearch,
       // BmMarker
    },
    mounted(){

    },
    methods:{
        getClickInfo (e) {
            this.$emit('getClickInfo',e);
       },
      syncCenterAndZoom (e) {
        this.$emit('syncCenterAndZoom',e);
      },   
    }
}
</script>
<style scoped lang='scss'>
</style>