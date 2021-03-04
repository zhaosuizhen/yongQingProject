<template>
  <div class="main">
      <Content :contentList="contentList"></Content>
  </div>
</template>

<script>
import Content from './util/content'
export default {
  data(){
    return{
      contentList:[
        {
          title: '水 果 成 本',
          content:'经过五年的数据对比，传统农业在5年内成本机构比较稳定，每年都集中在15元每亩左右，不会有大的波动，但是数字农业在第一年因设备的投入原因，成本比较高，但是逐年降低，5年后降为5元每亩，产期受益数字农业在成本上有很大的节约，有着很大的优势。',
          data:{
            dataX: [2017,2018,2019,2020],
            dataY: [20, 60, 10, 30]
          }
        },
        {
          title: '水 果 单 产',
          content:'经过五年的数据对比，传统农业在5年内成本机构比较稳定，每年都集中在15元每亩左右，不会有大的波动，但是数字农业在第一年因设备的投入原因，成本比较高，但是逐年降低，5年后降为5元每亩，产期受益数字农业在成本上有很大的节约，有着很大的优势。',
          data:{
            dataX: [2017,2018,2019,2020],
            dataY: [20, 60, 10, 30]
          }
        },
        {
          title: '水 果 产 值',
          content:'经过五年的数据对比，传统农业在5年内成本机构比较稳定，每年都集中在15元每亩左右，不会有大的波动，但是数字农业在第一年因设备的投入原因，成本比较高，但是逐年降低，5年后降为5元每亩，产期受益数字农业在成本上有很大的节约，有着很大的优势。',
          data:{
            dataX: [2017,2018,2019,2020],
            dataY: [20, 60, 10, 30]
          }
        },
      ]
    }
  },
  components:{
    Content
  }
}
</script>

<style scoped lang="scss">

</style>