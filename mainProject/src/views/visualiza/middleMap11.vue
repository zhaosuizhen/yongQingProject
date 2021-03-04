<template>
  <div class="webSite-container" style="overflow: hidden">
    <div class="management-top">

      <el-col :span="24">
        <div style="width: 100%;height: 100%;">
          <industryAnalysisMap ref="mapModel" style="width:100%;height:100%;position: absolute;"></industryAnalysisMap>
        </div>
      </el-col>

    </div>

  </div>
</template>
<script type="text/ecmascript-6">
import industryAnalysisMap from "./industryAnalysisMap";
export default {
  data() {
    return {
      managementTextMapping: {
        farm_name: "养殖场名称",
        amount_num:"存栏量(头)",
        out_num:"出栏量(头)",
        address: "详细地址",
      }
    };
  },
  components: {
    industryAnalysisMap,
  },
  async mounted() {
    this.initLayer();
  },
  methods: {
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
    },
  }
};
</script>
<style>
</style>
