<template>
  <div class="webSite-container" style="overflow: hidden">
      
      <el-col :span="24" class="management-top-middleWX" style="position: relative;height:100%;width:100%;margin:0;padding:0">

        <Map1 v-if="radio == 1" style="width:99.5%;height:99.5%;position: absolute;"></Map1>
        <Map2 v-if="radio == 2" style="width:99.5%;height:99.5%;position: absolute;"></Map2>
        <Map3 v-if="radio == 3" style="width:99.5%;height:99.5%;position: absolute;"></Map3>
        <Map4 v-if="radio == 4" style="width:99.5%;height:99.5%;position: absolute;"></Map4>
        <Map5 v-if="radio == 5" style="width:99.5%;height:99.5%;position: absolute;"></Map5>
        <Map6 v-if="radio == 6" style="width:99.5%;height:99.5%;position: absolute;"></Map6>
        <Map7 v-if="radio == 7" style="width:99.5%;height:99.5%;position: absolute;"></Map7>
        <Map8 v-if="radio == 8" style="width:99.5%;height:99.5%;position: absolute;"></Map8>

        <div v-if="radio == 1" class="mapExample_wx"><img src="../../assets/santai_img/mapExample/1.png" alt=""></div>
        <div v-if="radio == 3" class="mapExample_wx"><img src="../../assets/santai_img/mapExample/3.png" alt=""></div>
        <div v-if="radio == 4" class="mapExample_wx"><img src="../../assets/santai_img/mapExample/4.png" alt=""></div>
        <div v-if="radio == 5" class="mapExample_wx"><img src="../../assets/santai_img/mapExample/5.png" alt=""></div>
        <div v-if="radio == 6" class="mapExample_wx"><img src="../../assets/santai_img/mapExample/6.png" alt=""></div>
        <div v-if="radio == 7" class="mapExample_wx"><img src="../../assets/santai_img/mapExample/7.png" alt=""></div>
        <div v-if="radio == 8" class="mapExample_wx"><img src="../../assets/santai_img/mapExample/8.png" alt=""></div>
        
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
      </el-col>

  </div>
</template>

<script type="text/ecmascript-6">
import Map1 from '../mapPageWX/map_1';
import Map2 from '../mapPageWX/map_2';
import Map3 from '../mapPageWX/map_3';
import Map4 from '../mapPageWX/map_4';
import Map5 from '../mapPageWX/map_5';
import Map6 from '../mapPageWX/map_6';
import Map7 from '../mapPageWX/map_7';
import Map8 from '../mapPageWX/map_8';

import industryAnalysisMap from "./industryAnalysisMap";
import NAV from "./navWX";
import getColorObj from '../../util/util'

export default {
  data() {
    return {
      radio: "1",
      options: [{
          value: '1',
          label: '土壤速效钾含量'
        }, {
        //   value: '2',
        //   label: '大型种猪养殖场'
        // }, {
          value: '3',
          label: '土壤有效磷含量'
        }, {
          value: '4',
          label: '土壤全氮含量'
        }, {
          value: '5',
          label: '土壤有机质含量'
        }, {
          value: '6',
          label: '土壤地力等级'
        }, {
          value: '7',
          label: '耕地质量采样点'
        }, {
          value: '8',
          label: '土壤酸碱度分布'
        }]
    };
  },
  components: {
    industryAnalysisMap,
    NAV,
    Map1,
    Map2,
    Map3,
    Map4,
    Map5,
    Map6,
    Map7,
    Map8
  },
  async mounted() {

  },
  methods: {

  }
};
</script>
<style>
</style>

