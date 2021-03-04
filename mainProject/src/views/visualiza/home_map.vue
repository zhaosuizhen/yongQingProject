<template>
    <div class="main-content" style="">
      <div id="main" style="width:100%;height:90%;margin-top:5%"></div>
    </div>
</template>
<script>
import echarts from 'echarts'
import 'echarts/map/js/china.js'
export default {
  name: 'map',
  data() {
    return {
      myChart: null,
      myOption: {},
    }
  },
  methods: {
    buildMap() {
      const myChart = echarts.init(document.getElementById('main'))
      this.myChart = myChart
      const dataList = []
      const option = {
        tooltip: {
                formatter: function (params, ticket, callback) {
                  return (
                    params.seriesName + '<br />' + params.name + '：' + params.value[2]
                  )
                } // 数据格式化
        },

        geo: {
                map: 'yongqing',
                roam: false, // 不开启缩放和平移
                zoom: 1.23, // 视角缩放比例
                aspectScale:1,
                label: {
                  normal: {
                    show: true,
                    fontSize: '10', // 注意：地图省份名字字体如果过大会导致字体重叠
                    color: '#fff'
                  }
                },
                itemStyle: {
                  normal: {
                    areaColor: 'rgba(0, 0, 0, 0)',
                    borderColor: '#1BE2E6',//线
                    borderWidth: 2,
                    shadowColor: '#1BE2E6',//外发光
                    shadowBlur: 10
                  },
                  emphasis: {
                    areaColor: '#03EAC6', // 鼠标选择区域颜色
                    shadowOffsetX: 0,
                    shadowOffsetY: 0,
                    shadowBlur: 20,
                    borderWidth: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)',
                  }
                }
        }
      }

      let that= this

      myChart.setOption(option)
    },

  },
  mounted() {
    this.buildMap()
  }
}
</script>
<style scoped>
.main-content{
    width: 100%;
    height: 100%;
}
</style>