<template>
  <div class="webSite-container" style="overflow: hidden">
    <div class="management-top">
      
      <el-col :span="24" >
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
      radio:'1',//单选
      radioType:'v_management_farm',//

      //三品一标企业数据
      WGH_name: [],
      WGH_value: [],
      WGH_total: [],

      YJ_name: [],
      YJ_value: [],
      YJ_total: [],
      //历年企业增长数量数据
      LNQY_year: [],
      LNQY_counts: [],
      LNQY_bigArr: [],
      //乡镇主体分布数据
      XZZT_city: [],
      XZZT_value: {
        data_JTNC: [],    //家庭农场
        data_LTQY: [],    //龙头企业
        data_ZYHZS: [],   //专业合作社
      },
      //经营类型统计数据
      JYLX_name: null,
      JYLX_value: null,
      //主体类型统计数据
      ZTLX_data:[],
      ZTLX_total: 0,    //总数
      ZTLX_LT: 0,       //龙头
      ZTLX_JTNC: 0,     //家庭农场
      ZTLX_HZS: 0,     //合作社
      //经营主体数据
      JYZT_counts: null,    //主体数量
      JYZT_area: null,      //占地面积
      JYZT_sums: null,      //注册资金
      sanPinYiBiao_flag:true,
      // 控制弹窗显示隐藏
      dialogGeographyStyleChart: false,
      dialogGeographyTownsChart: false,
      dialogGeographyStatisticsChart: false,
      // 进度条宽度
      strokeWidth: 12,
      //经营主体数据
      jingYingZhuTiData: {},
      //主体类型饼图数据
      qiYeLeiXingChart: {},
      //历年主体数量
      qiYeCount: {
        counts: [],
        year: []
      },
      areaUnit:'亩',
      sumsUnit:'万元',
      //获取各个乡镇主体数量柱形图
      xiangZhenCount: {
        name: [],
        count: []
      },
      //主体规模排行
      qiYeRank: {
        type: [],
        sum: []
      },
      //弹框分页数据
      DialogPageData: {
        isFirstPage: true,
        isLastPage: true,
        list: [],
        PageNum: 1,
        PageSize: 10,
        pages: 1,
        total: 1,
      },
      // dialogYear:'',
      //作物品种类别-搜索框
      managementName: "",

      managementTextMapping: {
        management_name: "经营主体名称",
        //management_abbreviation: "经营主体简称",
        unit_property: "单位性质",
        unit_type: "单位类型",
        legal_name: "法人姓名",
        registered_capital:"注册资金(万元)",
        //official_website: "官方网站",
        //unit_introduction: "单位简介",
        /*longitude: "经度",
          latitude: "纬度",*/
        // area_covered: "占地面积(亩)",
        //product_service: "主营产品服务",
        /*unit_head_pic: "单位头像",
          registration_date: "注册日期",
          business_license_no: "营业执照号",*/
        // legal_name: "法人姓名",
        /* turnover: "年营业额",
            registered_capital: "注册资金(万元)",*/
        /*contacts_name: "联系人姓名",*/
        address: "详细地址",
        // email: "电子邮箱"
        /*fixed_telephone: "固定电话",
          fax: "传真",
          mobile_phone: "移动电话",
          postal_code: "邮政编码",
          fixed_employees: "固定从业人数",
          temporary_employees: "临时用工人数",
          poverty_population: "带动贫困人数",
          total_people: "共计人数",
          product_type: "种植、养殖、畜禽通用字段",
          varieties: "种植、养殖、畜禽通用字段",
          plant_area: "种植面积（km2）",
          yield: "产量（公斤）",
          output_value: "产值（万元）",
          aquaculture_area: "养殖面积（亩）",
          breed_yield: "养殖产量（吨）",
          breed_output_value: "养殖产值（万元）",
          design_scale: "年出栏/笼(头、只等)",
          livestock_hand: "年末存栏/笼（头、只等）",
          female_livestock: "能繁母畜禽存栏(头、只等)",
          egg_yield: "年畜蛋产量(吨)",
          fixed_assets: "固定资产(万元)",
          whether_leading_ent: "是否龙头主体",
          whether_regulations_ent: "规模以上主体是一个统计术语",
          total_investment: "投资总额",
          main_product: "主要产品",
          annual_output: "年产量(吨)",
          annual_output_value: "年产值(万元)",
          registered_trademark: "注册商标",
          origin_address: "产地地址",
          product_name: "产品名称",
          batch_production: "批量产量",
          certificate_number: "证书编号",
          certification_period: "认证有效期限",
          certification_mechanism_name: "作出认证的机构名称",
          certification_date: "作出认证的日期",
          prize_name: "获奖名称",
          prize_time: "获奖时间",
          agency_name: "作出奖励的机关名称",
          remarks: "备注",
          park_name: "园区名称",
          park_id: "园区编号",
          update_time: "修改时间",
          the_position: "地理位置"*/
      },
      //三品一标企业
      tabThirdgrade: 'firstWgh',
    };
  },
  components: {
    industryAnalysisMap
  },
  async mounted() {
    this.initLayer();
  },
  methods: {

    initLayer() {
      var _this = this;
      this.managementLayer = this.$refs.mapModel.addLayer({
        layername: 'v_management_farm',
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
<style>
</style>
