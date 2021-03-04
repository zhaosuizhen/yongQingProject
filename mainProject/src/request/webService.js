import request_yq from '@/util/request'
//农业专题页面接口地址
export default {
  // ip: "http://39.99.202.47:8086/clesun/api/v1.0"
  ip: "http://39.99.202.47:8081/clesun/api/v1.0"
}
let baseUrl="http://39.104.114.103:8086/clesun/api/v1.0";
// 政策信息
export const policy = ($this, params) => {
  return $this.$http({
    url: `${baseUrl}/policyInformation/list`,
    params: {
      currentPage: params.page,
      pageSize: params.pageTotal,
      datatype: params.datatype,
      title: params.title
    },
    method: 'GET'
  }).then(res => res.data)
}
// 政策信息详情
export const policyDetail = ($this, params) => {
  return $this.$http({
    url: `${baseUrl}/policyInformation/detail`,
    params: {
      id: params.id,
    },
    method: 'GET'
  }).then(res => res.data)
}
// 公告信息
export const notice = ($this, params) => {
  return $this.$http({
    url: `${baseUrl}/notice/pageList`,
    params: {
      currentPage: params.page,
      pageSize: params.pageTotal,
      datatype: params.datatype,
      noticetitle: params.noticetitle
    },
    method: 'GET'
  }).then(res => res.data)
}
// 公告信息详情
export const noticeDetail = ($this, params) => {
  return $this.$http({
    url: `${baseUrl}/notice/detail`,
    params: {
      id: params.id,
    },
    method: 'GET'
  }).then(res => res.data)
}

// 农技技术
export const technology = ($this, params) => {
  return $this.$http({
    url: `${baseUrl}/agr/pageList`,
    params: {
      currentPage: params.page,
      pageSize: params.pageTotal,
      title: params.title
    },
    method: 'GET'
  }).then(res => res.data)
}
// 农技技术详情
export const technologyDetail = ($this, params) => {
  return $this.$http({
    url: `${baseUrl}/agr/detail`,
    params: {
      id: params.id,
    },
    method: 'GET'
  }).then(res => res.data)
}
// 病虫害防治
export const diseases = ($this, params) => {
  return $this.$http({
    url: `${baseUrl}/cdiseasest/pageList`,
    params: {
      currentPage: params.page,
      pageSize: params.pageTotal,
      title: params.title
    },
    method: 'GET'
  }).then(res => res.data)
}
// 病虫害防治详情
export const diseasesDetail = ($this, params) => {
  return $this.$http({
    url: `${baseUrl}/cdiseasest/detail`,
    params: {
      id: params.id,
    },
    method: 'GET'
  }).then(res => res.data)
}
//市场行情
export const marketList = ($this, params) => {
  return $this.$http({
    url: `${baseUrl}/pricedata/pageList`,
    params: {
      currentPage: params.page,
      pageSize: params.pageTotal,
      name: params.name
    },
    method: 'GET'
  }).then(res => res.data)
}

//农资网点数据
export const nzwdList = ($this, params) => {
  return $this.$http({
    url: `${baseUrl}/network/pageList`,
    params: {
      currentPage: params.page,
      pageSize: params.pageTotal,
      name: params.name
    },
    method: 'GET'
  }).then(res => res.data)
}




//永清门户
//土壤采样面积分布
export function getSoilChartData () {
  return request_yq({
    method: 'GET',
    url: '/clesun/api/v1.0/newInterfaceApi/pecialsTopicOfCultivatedLandGeography',
  })
}
//获取经营类型统计
export function getBusinessChartData () {
  return request_yq({
    method: 'GET',
    url: '/clesun/api/v1.0/web/management/getJYLX',
  })
}
//历年企业增长
export function getEnterpriseRiseChartData () {
  return request_yq({
    method: 'GET',
    url: '/clesun/api/v1.0/web/management/getbusinessgdpyears',
  })
}
//乡镇主体分布
export function getTownshipChartData () {
  return request_yq({
    method: 'GET',
    url: '/clesun/api/v1.0/web/management/gettownssum',
  })
}
//耕地面积
export function getLandAreaChartData () {
  return request_yq({
    method: 'GET',
    url: '/clesun/api/v1.0/geographicInformation/cultivatedLandSumArea',
  })
}
//植保防治
export function getPlantControlChartData () {
  return request_yq({
    method: 'GET',
    url: '/clesun/api/v1.0/web/getPlantDiseaseControl',
  })
}

//农药
export function getPesticideChartData () {
  return request_yq({
    method: 'GET',
    url: '/clesun/api/v1.0/yongQingInputsWeb/getDataAccordingToType?inputType=化肥',
  })
}
//农用柴油
export function getDieselOilChartData () {
  return request_yq({
    method: 'GET',
    url: '/clesun/api/v1.0/yongQingInputsWeb/getDataAccordingToType?inputType=农村用电量',
  })
}
//化肥
export function getChemicalFertilizerChartData () {
  return request_yq({
    method: 'GET',
    url: '/clesun/api/v1.0/yongQingInputsWeb/getDataAccordingToType?inputType=化肥',
  })
}
//地膜
export function getFilmChartData () {
  return request_yq({
    method: 'GET',
    url: '/clesun/api/v1.0/yongQingInputsWeb/getDataAccordingToType?inputType=地膜',
  })
}

// 农业物联专题
export function getIOTData (params) {
  return request_yq({
    method: 'GET',
    url: '/clesun/api/v1.0/newInterfaceApi/pageList',
    params
  })
}
//生猪养殖产量
export function getPigProductChartData () {
  return request_yq({
    method: 'GET',
    url: '/clesun/api/v1.0/pigBreedingWeb/eachTowhShipPigBreedingYield',
  })
}
//造林面积
export function getAfforestateAreaChartData () {
  return request_yq({
    method: 'GET',
    url: '/clesun/api/v1.0/forestAndFruitIndustryWeb/getAfforestationAreaOfEachTownship',
  })
}
//畜牧养殖
export function getLivestockChartData () {
  return request_yq({
    method: 'GET',
    url: '/clesun/api/v1.0/livestockProductionYieldWeb/townshipAllYield',
  })
}
