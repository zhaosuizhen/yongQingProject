<template>
  <div class="webSite-container" style="overflow: hidden">
      

      <el-col :span="24" class="management-top-middleWX" style="position: relative;height:100%;width:100%;margin:0;padding:0">
        
        <div style="width: 100%;height: 100%;">
          <industryAnalysisMap ref="mapModel" style="width:100%;height:100%"></industryAnalysisMap>
        </div>
        <div class="mapPointExample_WX mapPointExample_MDZZ"></div>
        <NAV></NAV>
      </el-col>
      


  </div>
</template>

<script type="text/ecmascript-6">
import industryAnalysisMap from "./industryAnalysisMap";
import NAV from './navWX'
export default {
  data() {
    return {
      managementTextMapping: {
        name: "经营主体名称",
        type: "主体类型",
        township: "所属乡镇",
        create_date: "成立日期",
        address: "详细地址",
      }
    };
  },
  components: {
    industryAnalysisMap,
    NAV
  },
  async mounted() {
    this.initLayer();
  },
  methods: {
    initLayer() {
      var _this = this;
       this.managementLayer = this.$refs.mapModel.addLayer({
        layername: "v_liriope_business",
        clickType: "point",
        popupCallback(e) {
          var data = [];
          for (let key in _this.managementTextMapping) {
            if(_this.managementTextMapping[key] == '占地面积(亩)'){
              let zhandival="暂无数据";
              if(e.get(key)!=null){
                zhandival=parseFloat(e.get(key).toFixed(2));
              }
              data.push({
                title: _this.managementTextMapping[key],
                value: zhandival
              });
            }else{
              data.push({
                title: _this.managementTextMapping[key],
                value: e.get(key)
              });
            }
          }
          return { data: data };
        }
      });
      this.managementLayer.isPopUp = true;
    }
  }
};
</script>
<style>
</style>
