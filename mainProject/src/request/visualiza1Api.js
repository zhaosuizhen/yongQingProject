// ******管理平台******
// 除首页之外的其他页面的接口地址
export default {
  // ip: "http://39.99.202.47:8086/clesun/api/v1.0"
  ip: "http://39.99.202.47:8081/clesun/api/v1.0"
}
// 首页接口地址
//  let baseUrl1="http://39.99.202.47:8086/clesun/api/v1.0/web";
 let baseUrl1="http://39.99.202.47:8081/clesun/api/v1.0/web";
// 土壤监测
export const indexSoil = ($this) => {
  return $this.$http({
    method: 'GET',
    url: `http://api.nongyongtong.com:8081/qfls/api?addr=60817547&method=getRealTimeDeviceData&sessionkey=239A506CD4E38A8757A2314442146CF3`,
  }).then(res => res.data);
}
//和县3D地图
export const indexmap = ($this) => {
  return $this.$http({
    method: 'GET',
    url: `${baseUrl1}/management/getMapData`,
  }).then(res => res.data);
}
// 企业类型占比
export const indexBussiness = ($this) => {
  return $this.$http({
    url: `${baseUrl1}/management/getbusinessdata`,
    method: 'GET',

  }).then(res => res.data);
}
// 土地资源结构
export const indexlandType = ($this) => {
  return $this.$http({
    url: `${baseUrl1}/april7/landuse`,
    method: 'GET',

  }).then(res => res.data);
}
//种植类型占比
export const indexPlantType = ($this) => {
  return $this.$http({
    url: `${baseUrl1}/production/getZZZB`,
    method: 'GET',

  }).then(res => res.data);
}
//农事类型占比
export const indexFarmType = ($this) => {
  return $this.$http({
    url: `${baseUrl1}/productionprocess/typeCount`,
    method: 'GET',

  }).then(res => res.data);
}
//质量检测
export const indexSourceType = ($this) => {
  return $this.$http({
    url: `${baseUrl1}/taceability/qualityTesting`,
    method: 'GET',

  }).then(res => res.data);
}
//设备类型占比
export const indexEquipmentType = ($this) => {
  return $this.$http({
    url: `${baseUrl1}/equipment/getEquipmentType`,
    method: 'GET',

  }).then(res => res.data);
}
//植保防治趋势
export const indexDiseasesType = ($this) => {
  return $this.$http({
    url: `${baseUrl1}/april7/cropdefense`,
    method: 'GET',

  }).then(res => res.data);
}
//价格交易数据
export const indexPrice = ($this) => {
  return $this.$http({
    url: `${baseUrl1}/cMarketTransaction/changesInPrices?type=0`,
    method: 'GET',

  }).then(res => res.data);
}
// 交易主体
export const indexTrade = ($this) => {
  return $this.$http({
    url: `${baseUrl1}/cMarketTransaction/transactionSubject`,
    method: 'GET',

  }).then(res => res.data);
}
// 投入品
export const indexInputs = ($this) => {
  return $this.$http({
    url: `${baseUrl1}/agriculturalInputs/inputUse`,
    method: 'GET',

  }).then(res => res.data);
}
