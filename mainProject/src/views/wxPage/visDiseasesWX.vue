<template>
  <div class="webSite-container" style="overflow: hidden">

      <el-col :span="24" class="management-top-middleWX" style="position: relative;height:100%;width:100%;margin:0;padding:0">
        
        <div style="width: 100%;height: 100%;">
          <industryAnalysisMap ref="mapModel" style="width:100%;height:100%"></industryAnalysisMap>
        </div>
        <div class="mapPointExample_WX mapPointExample_BCH"></div>
        <NAV></NAV>
      </el-col>

  </div>
</template>

<script type="text/ecmascript-6">
import industryAnalysisMap from "./industryAnalysisMap";
import NAV from "./navWX";
export default {
  data() {
    return {
      //获取病虫害发病描述
      FBMS_cropName: '',      //作物名称
      FBMS_diseaseName: '',   //发病名称
      FBMS_content: '',       //描述内容
      //不同疾病统计数据
      BTJB_name: [],
      BTJB_happen: [],
      BTJB_defense: [],
      BTJB_list: [],
      //病虫害发生与防治面积占比数据
      bing_happen: 0,
      bing_defense: 0,
      chong_happen: 0,
      chong_defense: 0,
      BCH_total: 0,
      BCH_dataArr: [],
      //获取不同作物病虫害防治统计
      params_year: {    //选择的年份
        year: 2019,
        id: 1,
        bing_id: 1,
        name: '水稻'
      },
      BTZW_name: [],
      BTZW_happen: [],
      BTZW_defense: [],
      BTZW_list: [],
      //病虫害数据
      BCH_value:{},
      //植保防治趋势数据
      ZBFZ_name: [],
      ZBFZ_happen: [],      //发生面积
      ZBFZ_defense: [],      //防治面积


      buTongZuoWu_BCH: [{
          value: '2019',
          label: '2019'
        }, {
          value: '2018',
          label: '2018'
        }, {
          value: '2017',
          label: '2017'
        }, {
          value: '2016',
          label: '2016'
        }
        ],
        value_buTongZuoWu: '2019',



      //病虫害数据
      DiseasesTotalData: [],
      //植保防治趋势
      townShipChart: {},
      //防治趋势
      controlAreaChart: {},
      //病虫害防治
      controlChart: {},
      //排行统计
      typeFiveChart: {},
      //弹框分页数据
      DialogPageData: {
        isFirstPage: true,
        isLastPage: true,
        list: [],
        PageNum: 1,
        PageSize: 10,
        pages: 1,
        total: 1
      },
      DialogCountData: {
        isFirstPage: true,
        isLastPage: true,
        list: [],
        PageNum: 1,
        PageSize: 10,
        pages: 1,
        total: 1
      },
      createTime: "",
      peatsType: "",
      typename:"",
      c_peatsimgTextMapping: {
        getaway: "网关名称",
        pest_type: "害虫种类",
        validity: "诱芯持有效期",
        wind_speed: "风速",
        illumination: "光照",
        rainfall: "降雨量",
        soil_temperature: "土壤温度",
        soil_moisture:'土壤湿度',
      },
      happenCount: {
        name: [],
        count: []
      },
      //虫害投入品
      diseasesInputsData: {
        name: [],
        count: []
      },
      // 防治效果年份
      yearVal: '2020'
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
      this.c_peatsimg = this.$refs.mapModel.addLayer({
        layername: "v_epidemic_surveillance",
        clickType: "point",
        popupCallback(e) {
          var data = [];
          for (let key in _this.c_peatsimgTextMapping) {
            let result = e.get(key);
            if(key=="create_time"){
              result = dateFormate.formatTimeToStr(e.get(key))
                data.push({
                title: _this.c_peatsimgTextMapping[key],
                value: result
              });
            }else {
              data.push({
                title: _this.c_peatsimgTextMapping[key],
                value: result
              });
            }
          }
          return { data: data };
        }
      });
      this.c_peatsimg.isPopUp = true;
    }
  }
}
</script>
<style>
</style>

