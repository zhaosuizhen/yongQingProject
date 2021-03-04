<template>
  <div class="webSite-container" style="overflow: hidden">

      <el-col :span="24" class="management-top-middleWX" style="position: relative;height:100%;width:100%;margin:0;padding:0">
        
        <div style="width: 100%;height: 100%;">
          <middleMap11 v-if="radio == '1'" style="width:99.5%;height:99.5%;position: absolute;"></middleMap11>
          <middleMap12 v-if="radio == '2'" style="width:99.5%;height:99.5%;position: absolute;"></middleMap12>
        </div>
        
        <div v-if="radio == '2'" style="margin-right:0%;margin-top:0%;width:30%;height:30%;bottom:5%;right:1%" class="pigExample">
        </div>
        
        <div class="radioBox_wx" style="width:50%">
          <el-select v-model="radio" placeholder="请选择" :popper-append-to-body="false" class="selectBox">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </div>
        <NAV></NAV>
        <div v-if="radio == '1'" class="mapPointExample_WX mapPointExample_pig_WX"></div>
      </el-col>


  </div>
</template>
<script type="text/ecmascript-6">
import industryAnalysisMap from "../visualiza/industryAnalysisMap";
import middleMap11 from "./middleMap11";
import middleMap12 from "./middleMap12";
import NAV from "./navWX";

import videojs from 'video.js'
import 'video.js/dist/video-js.css'
import 'videojs-contrib-hls'
export default {
  data() {
    return {
      radio:'1',//单选
      options: [{
          value: '1',
          label: '养殖场'
        }, {
          value: '2',
          label: '大型种猪养殖场'
        }]
    };
  },
  components: {
    industryAnalysisMap,
    middleMap11,
    middleMap12,
    NAV
  },
  async mounted() {

  },
  methods: {
    goToPage(){
      this.$router.push('/industryAnalysisIndex')
    },
    

    initLayer() {
      var _this = this;
      this.managementLayer = this.$refs.mapModel.addLayer({
        layername: "v_livestoc_breeding",
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
    }
  }
};
</script>
<style scoped>
.mapPointExample_pig_WX{
  background: url(../../assets/santai_img/exampleIcon/pig.png) 100% 0/100% 100% !important;
}
</style>
