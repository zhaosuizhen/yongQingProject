import echarts from "echarts";
export default {
  // *******视频图像数据*******
  // 生长图谱数量 柱状图
  EchartsVideoGrowMapNumChart: function (container,data) {
    let myChart = echarts.init(document.getElementById(container));
    var videoGrowMapNumDataY = data.map(ele => ele.count);
    let videoGrowMapNumDataX = data.map(ele => ele.time);
    let option = {
      tooltip: {
        trigger: 'item',
        formatter: "{b}<br/>生长图谱{c}组",
      },
      grid: {
        left: '5%',
        right: '5%',
        bottom: '10%',
        top: "18%",
        containLabel: true
      },
      xAxis: [{
        type: 'category',
        data: videoGrowMapNumDataX,
        axisTick: {
          show: false
        },
        axisLabel: {
          color: '#fff'
        },
        axisLine: {
          // show: false,
          lineStyle: {
            color: '#7195ae',
            fontSize: 10
          }
        },
      }],
      yAxis: [{
        type: 'value',
        name: '单位（组）',
        axisTick: {
          show: false
        },
        axisLine: {
          show: false,
          lineStyle: {
            color: '#fff',
            fontSize: 10
          }
        },
        axisLabel: {
          textStyle: {
            fontSize: 10
          }
        },
        splitLine: {
          lineStyle: {
            type: 'double',
            color: '#7195ae'
          }
        }
      }],

      series: [{
        name: '生长图谱数量',
        barMaxWidth: '30%',
        type: 'bar',
        // type: "pictorialBar",
        // symbol: "path://M250 150 L150 350 L350 350 Z",
        // symbolClip: true,
        itemStyle: {
          normal: {
            color: '#E4C13D',
            // color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            //   offset: 0,
            //   color: '#FFFF73' // 0% 处的颜色
            // }, {
            //   offset: 1,
            //   color: '#E4C13D' // 100% 处的颜色
            // }], false),
          }
        },
        data: videoGrowMapNumDataY,
      }]
    };
    myChart.setOption(option);
    return myChart;
  },
  //摄像头数量 柱状图
  EchartsVideoCameraNumChart: function (container,data) {
    let myChart = echarts.init(document.getElementById(container));
    var videoCameraNumDataY = data.map(ele =>ele.count);
    let videoCameraNumDataX = data.map(ele =>ele.time);
    let option = {
      tooltip: {
        trigger: 'item',
        formatter: "{b}<br/>摄像头数量{c}台",
      },
      grid: {
        left: '5%',
        right: '5%',
        bottom: '10%',
        top: "18%",
        containLabel: true
      },
      xAxis: [{
        type: 'category',
        data: videoCameraNumDataX,
        axisTick: {
          show: false
        },
        axisLabel: {
          color: '#fff'
        },
        axisLine: {
          // show: false,
          lineStyle: {
            color: '#7195ae',
            fontSize: 10
          }
        },
      }],
      yAxis: [{
        type: 'value',
        name: '单位（台）',
        axisTick: {
          show: false
        },
        axisLine: {
          show: false,
          lineStyle: {
            color: '#fff',
            fontSize: 10
          }
        },
        axisLabel: {
          textStyle: {
            fontSize: 10
          }
        },
        splitLine: {
          lineStyle: {
            type: 'double',
            color: '#7195ae'
          }
        }
      }],

      series: [{
        name: '摄像头数量',
        barMaxWidth: '30%',
        type: 'bar',
        // type: "pictorialBar",
        // symbol: "path://M250 150 L150 350 L350 350 Z",
        // symbolClip: true,
        itemStyle: {
          normal: {
            color: '#50CB78',
            // color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            //   offset: 0,
            //   color: '#C3FFB6' // 0% 处的颜色
            // }, {
            //   offset: 1,
            //   color: '#50CB78' // 100% 处的颜色
            // }], false),
          }
        },
        data: videoCameraNumDataY,
      }]
    };
    myChart.setOption(option);
    return myChart;
  },
}
