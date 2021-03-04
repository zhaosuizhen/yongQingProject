<template>
  <div class="webSite-container" style="overflow: hidden">
      
      <el-col :span="24" class="management-top-middleWX" style="position: relative;height:100%;width:100%;margin:0;padding:0">
        
        <div style="width: 100%;height: 100%;">
          <middleMap1 v-if="radio == '1'" style="width:99.5%;height:99.5%;position: absolute;"></middleMap1>
          <middleMap2 v-if="radio == '2'" style="width:99.5%;height:99.5%;position: absolute;"></middleMap2>
          <middleMap3 v-if="radio == '3'" style="width:99.5%;height:99.5%;position: absolute;"></middleMap3>
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
        <div v-if="radio == '1'" class="mapPointExample_WX mapPointExample_JTNC"></div>
        <div v-if="radio == '2'" class="mapPointExample_WX mapPointExample_HZS"></div>
        <div v-if="radio == '3'" class="mapPointExample_WX mapPointExample_LTQY"></div>
      </el-col>




  </div>
</template>
<script type="text/ecmascript-6">
import industryAnalysisMap from "../visualiza/industryAnalysisMap";
import middleMap1 from "./middleMap1";
import middleMap2 from "./middleMap2";
import middleMap3 from "./middleMap3";
import NAV from './navWX'
export default {
  data() {
    return {
      radio:'1',//单选
      options: [{
          value: '1',
          label: '家庭农场'
        }, {
          value: '2',
          label: '合作社'
        }, {
          value: '3',
          label: '龙头企业'
        }]
    };
  },
  components: {
    industryAnalysisMap,
    NAV,
    middleMap1,
    middleMap2,
    middleMap3,
    
  },
  async mounted() {
    
  },
  methods: {

  }
};
</script>
<style scoped>
.el-select .selectBox{
  background: #1f1 !important;
}
</style>
