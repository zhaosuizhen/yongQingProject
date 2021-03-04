import echarts from 'echarts';
import changeSize from '@/util/changeSize';

export default {
  EchartsZddwyqybjcyjChart1: function (container, data) {
    let myChart = echarts.init(document.getElementById(container));

    let legendZddwyqybjcyjChart2 = ['全国','四川'];

    let ZddwyqybjcyjChart2X = data.dateArray;
    let ZddwyqybjcyjChart2Y1 = data.qgDataArray;
    let ZddwyqybjcyjChart2Y2 = data.ahDataArray;
    let NyzypgyhjcChart1Color = ['#2FC25B','#FACC14'];
    let option = {
      color: NyzypgyhjcChart1Color,
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow',
          label: {
            show: true,
            backgroundColor: '#7B7DDC'
          }
        },
        formatter: "{b}<br/>全国：{c0}头<br/>四川：{c1}头",
      },
      legend: {
        data: legendZddwyqybjcyjChart2,
        // align: 'top',
        // right: 'auto',
        top: '8',
        // orient: 'vertical',
        x: '60%',
        // y: '100%',
        // textStyle: {
        //   color: '#1890FF'
        // },
      },
      grid: {
        left: '3%',
        right: '5%',
        top: '15%',
        bottom: '5%',
        containLabel: true
      },
      xAxis: [{
        type: 'category',
        data: ZddwyqybjcyjChart2X,
        axisTick: {
          show: false
        },
        axisLabel: {
          // interval: 0,
          textStyle: {
            fontSize: 10,
            color: '#666'
          },
        },
        axisLine: {
          show: false
        },
      }],
      yAxis: [
        {
          type: "value",
          name: "单位(只)",
          nameTextStyle: {
            padding: [0, 0, 0, -30]
          },
          axisTick: {
            show: false
          },
          axisLine: {
            show: false,
            lineStyle: {
              color: "#666",
              fontSize: 10
            }
          },
          axisLabel: {
            formatter: '{value}',
            color: '#666',
            fontSize: 10
          },
          splitLine: {
            lineStyle: {
              color: '#dbdbdb',
              type: 'dotted',
            }
          },
        }
      ],
      series: [
        {
          name: legendZddwyqybjcyjChart2[0],
          type: 'line',
          barGap: 0,
          data: ZddwyqybjcyjChart2Y1
        },
        {
          name: legendZddwyqybjcyjChart2[1],
          type: 'line',
          barGap: 0,
          data: ZddwyqybjcyjChart2Y2
        },
      ]
    };
    myChart.setOption(option);
    changeSize(myChart)
    return myChart;
  },
  EchartsZddwyqybjcyjChart2: function (container, data) {
    let myChart = echarts.init(document.getElementById(container));

    let legendZddwyqybjcyjChart2 = ['全国','四川'];

    let ZddwyqybjcyjChart2X = data.dateArray;
    let ZddwyqybjcyjChart2Y1 = data.qgDataArray;
    let ZddwyqybjcyjChart2Y2 = data.ahDataArray;
    let NyzypgyhjcChart1Color = ['#2FC25B','#FACC14'];
    let option = {
      color: NyzypgyhjcChart1Color,
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow',
          label: {
            show: true,
            backgroundColor: '#7B7DDC'
          }
        },
        formatter: "{b}<br/>全国：{c0}头<br/>四川：{c1}头",
      },
      legend: {
        data: legendZddwyqybjcyjChart2,
        // align: 'top',
        // right: 'auto',
        top: '8',
        // orient: 'vertical',
        x: '60%',
        // y: '100%',
        // textStyle: {
        //   color: '#1890FF'
        // },
      },
      grid: {
        left: '3%',
        right: '5%',
        top: '15%',
        bottom: '5%',
        containLabel: true
      },
      xAxis: [{
        type: 'category',
        data: ZddwyqybjcyjChart2X,
        axisTick: {
          show: false
        },
        axisLabel: {
          // interval: 0,
          textStyle: {
            fontSize: 10,
            color: '#666'
          },
        },
        axisLine: {
          show: false
        },
      }],
      yAxis: [
        {
          type: "value",
          name: "单位(头)",
          nameTextStyle: {
            padding: [0, 0, 0, -30]
          },
          axisTick: {
            show: false
          },
          axisLine: {
            show: false,
            lineStyle: {
              color: "#666",
              fontSize: 10
            }
          },
          axisLabel: {
            formatter: '{value}',
            color: '#666',
            fontSize: 10
          },
          splitLine: {
            lineStyle: {
              color: '#dbdbdb',
              type: 'dotted',
            }
          },
        }
      ],
      series: [
        {
          name: legendZddwyqybjcyjChart2[0],
          type: 'line',
          barGap: 0,
          data: ZddwyqybjcyjChart2Y1
        },
        {
          name: legendZddwyqybjcyjChart2[1],
          type: 'line',
          barGap: 0,
          data: ZddwyqybjcyjChart2Y2
        },
      ]
    };
    myChart.setOption(option);
    changeSize(myChart)
    return myChart;
  },
  //农业资源评估优化决策-土地资源变化
  EchartsNyzypgyhjcChart1: function (container, data) {
    let myChart = echarts.init(document.getElementById(container));
    let NyzypgyhjcChart1X = data.landYearArray;
    // let NyzypgyhjcChart1X = ['2014','2015','2016','2017'];
    let legendNyzypgyhjcChart1 = ['水田','旱地','林业用地','人工造林'];
    let NyzypgyhjcChart1Y1 = data.stDataArray;
    let NyzypgyhjcChart1Y2 = data.htDataArray;
    let NyzypgyhjcChart1Y3 = data.lyDataArray;
    let NyzypgyhjcChart1Y4 = data.rgDataArray;
    let NyzypgyhjcChart1Color = ['#1890FF','#2FC25B','#FACC14','#36CBCB'];
    let option = {
      color: NyzypgyhjcChart1Color,
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow',
          label: {
            show: true,
            backgroundColor: '#7B7DDC'
          }
        },
        // formatter: "{b0}年<br/>平均气温：{c0}摄氏度<br/>降水量：{c1}毫米",
      },
      legend: {
        data: legendNyzypgyhjcChart1,
        // align: 'top',
        // right: 'auto',
        top: '8',
        // orient: 'vertical',
        x: '23%',
        // y: '100%',
        // textStyle: {
        //   color: '#1890FF'
        // },
      },
      grid: {
        left: '1%',
        right: '5%',
        top: '15%',
        bottom: '5%',
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          data: NyzypgyhjcChart1X,
          axisTick: {
            show: false
          },
          axisLabel: {
            formatter: '{value}年',
            textStyle: {
              fontSize: 10,
              color: '#666'
            }
          },
          axisLine: {
            show: false
          },
        },
      ],
      yAxis: [
        {
          type: "value",
          name: "单位(公顷)",
          nameTextStyle: {
            padding: [0, 0, 0, -30]
          },
          axisTick: {
            show: false
          },
          axisLine: {
            show: false,
            lineStyle: {
              color: "#666",
              fontSize: 10
            }
          },
          axisLabel: {
            formatter: '{value}',
            color: '#666',
            fontSize: 10
          },
          splitLine: {
            lineStyle: {
              color: '#dbdbdb',
              type: 'dotted',
            }
          },
        }
      ],
      series: [
        {
          name: legendNyzypgyhjcChart1[0],
          type: 'bar',
          barGap: 0,
          data: NyzypgyhjcChart1Y1
        },
        {
          name: legendNyzypgyhjcChart1[1],
          type: 'bar',
          barGap: 0,
          data: NyzypgyhjcChart1Y2
        },
        {
          name: legendNyzypgyhjcChart1[2],
          type: 'bar',
          barGap: 0,
          data: NyzypgyhjcChart1Y3
        },
        {
          name: legendNyzypgyhjcChart1[3],
          type: 'bar',
          barGap: 0,
          data: NyzypgyhjcChart1Y4
        },
      ]
    };
    myChart.setOption(option);
    changeSize(myChart)
    return myChart;
  },
  //农业资源评估优化决策-水资源变化
  EchartsNyzypgyhjcChart2: function (container, data) {
    let myChart = echarts.init(document.getElementById(container));
    let NyzypgyhjcChart2X = data.map(ele => ele.landYear);
    let legendNyzypgyhjcChart2 = ['水资源'];
    let NyzypgyhjcChart2Y = data.map(ele => ele.annualWaterResources);
    let NyzypgyhjcChart2Color = new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
      offset: 0,
      color: '#1890FF'
    }, {
      offset: 1,
      color: '#1890FF'
    }]);
    let option = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow',
          label: {
            show: true,
            backgroundColor: '#7B7DDC'
          }
        },
        formatter: "{b}年<br/>{c}亿立方米",
      },
      legend: {
        // itemWidth: 8,
        // itemHeight: 8,
        data: legendNyzypgyhjcChart2,
        // align: 'top',
        // right: 'auto',
        top: '8',
        // orient: 'vertical',
        x: '60%',
        // y: '100%',
        // textStyle: {
        //   color: '#1890FF'
        // },
      },
      grid: {
        left: '3%',
        right: '5%',
        top: '15%',
        bottom: '5%',
        containLabel: true
      },
      xAxis: [{
        type: 'category',
        data: NyzypgyhjcChart2X,
        axisTick: {
          show: false
        },
        axisLabel: {
          formatter: '{value}年',
          textStyle: {
            fontSize: 10,
            color: '#666'
          }
        },
        axisLine: {
          show: false
        },
      }],
      yAxis: [
        {
          type: "value",
          name: "单位(亿立方米)",
          nameTextStyle: {
            padding: [0, 0, 0, 30]
          },
          axisTick: {
            show: false
          },
          axisLine: {
            show: false,
            lineStyle: {
              color: "#666",
              fontSize: 10
            }
          },
          axisLabel: {
            formatter: '{value}',
            color: '#666',
            fontSize: 10
          },
          splitLine: {
            lineStyle: {
              color: '#dbdbdb',
              type: 'dotted',
            }
          },
        }
      ],
      series: [{
        name: legendNyzypgyhjcChart2,
        type: 'bar',
        barMaxWidth: "45%",
        //barGap: 1, //柱子之间间距
        symbolClip: true,
        itemStyle: {
          normal: {
            color: NyzypgyhjcChart2Color
            // barBorderRadius: 10,
          }
        },
        data: NyzypgyhjcChart2Y
      }]
    };
    myChart.setOption(option);
    changeSize(myChart)
    return myChart;
  },
  //农业资源评估优化决策-气候变化
  EchartsNyzypgyhjcChart3: function (container, data) {
    let myChart = echarts.init(document.getElementById(container));
    let NyzypgyhjcChart3X = data.map(ele => ele.landYear);
    let legendNyzypgyhjcChart3 = ['年平均气温','降水量'];
    let NyzypgyhjcChart3Y1 = data.map(ele => ele.annualPrecipitation);
    let NyzypgyhjcChart3Y2 = data.map(ele => ele.annuaAverageTemperature);
    let NyzypgyhjcChart3Y1Color = new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
      offset: 0,
      color: '#36CBCB'
    }, {
      offset: 1,
      color: '#36CBCB'
    }]);
    let NyzypgyhjcChart3Y2Color = new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
      offset: 0,
      color: '#1890FF'
    }, {
      offset: 1,
      color: '#1890FF'
    }]);
    let option = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow',
          label: {
            show: true,
            backgroundColor: '#7B7DDC'
          }
        },
        formatter: "{b}年<br/>平均气温：{c0}摄氏度<br/>降水量：{c1}毫米",
      },
      legend: {
        // itemWidth: 8,
        // itemHeight: 8,
        data: legendNyzypgyhjcChart3,
        // align: 'top',
        // right: 'auto',
        top: '8',
        // orient: 'vertical',
        // x: '60%',
        // y: '100%',
        // textStyle: {
        //   color: '#1890FF'
        // },
      },
      grid: {
        left: '3%',
        right: '5%',
        top: '15%',
        bottom: '5%',
        containLabel: true
      },
      xAxis: [{
        type: 'category',
        data: NyzypgyhjcChart3X,
        axisTick: {
          show: false
        },
        axisLabel: {
          formatter: '{value}年',
          textStyle: {
            fontSize: 10,
            color: '#666'
          }
        },
        axisLine: {
          show: false
        },
      }],
      yAxis: [
        {
          type: "value",
          name: "单位(摄氏度)",
          nameTextStyle: {
            padding: [0, 0, 0, 10]
          },
          min: 16,
          max: 18,
          interval: 0.2,
          axisTick: {
            show: false
          },
          axisLine: {
            show: false,
            lineStyle: {
              color: "#666",
              fontSize: 10
            }
          },
          axisLabel: {
            formatter: '{value}',
            color: '#666',
            fontSize: 10
          },
          splitLine: {
            lineStyle: {
              color: '#dbdbdb',
              type: 'dotted',
            }
          },
        },
        {
          type: "value",
          name: "单位(毫米)",
          min: 0,
          max: 2000,
          interval: 200,
          nameTextStyle: {
            padding: [0, 0, 0, 0]
          },
          axisTick: {
            show: false
          },
          axisLine: {
            show: false,
            lineStyle: {
              color: "#666",
              fontSize: 10
            }
          },
          axisLabel: {
            formatter: '{value}',
            color: '#666',
            fontSize: 10
          },
          splitLine: {
            lineStyle: {
              color: '#dbdbdb',
              type: 'dotted',
            }
          },
        },
      ],
      series: [
        {
          name: legendNyzypgyhjcChart3[0],
          type: 'bar',
          barMaxWidth: "45%",
          //barGap: 1, //柱子之间间距
          symbolClip: true,
          itemStyle: {
            normal: {
              color: NyzypgyhjcChart3Y2Color
              // barBorderRadius: 10,
            }
          },
          data: NyzypgyhjcChart3Y2
        },
        {
          name: legendNyzypgyhjcChart3[1],
          type: 'line',
          // barMaxWidth: "45%",
          yAxisIndex: 1,
          //barGap: 1, //柱子之间间距
          // symbolClip: true,
          symbolSize:10,
          color: NyzypgyhjcChart3Y1Color,
          data: NyzypgyhjcChart3Y1
        },
      ]
    };
    myChart.setOption(option);
    changeSize(myChart)
    return myChart;
  },
  EchartsNyscxxjcyjChart1: function (container, data) {
    let myChart = echarts.init(document.getElementById(container));
    let legendStr = ['最高价格', '最低价格','平均价格'];
    let NyscxxjcyjChart1X = data.map(ele => ele.monthStr);
    let NyscxxjcyjChart1Y3 = data.map(ele => ele.avgPrice);
    let NyscxxjcyjChart1Y1 = data.map(ele => ele.maxPrice);
    let NyscxxjcyjChart1Y2 = data.map(ele => ele.minPrice);
    
    let option = {
      color: "#1890FF",
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow',
          label: {
            show: true,
            backgroundColor: '#7B7DDC'
          }
        },
        formatter: "{b}月<br/>平均价格：{c2}元<br/>最高价格：{c0}元<br/>最低价格：{c1}元",
      },
      legend: {
        data: legendStr,
        // align: 'top',
        // right: 'auto',
        top: '8',
        // orient: 'vertical',
        x: '30%',
        // y: '100%',
        // textStyle: {
        //   color: '#1890FF'
        // },
      },
      grid: {
        left: '3%',
        right: '5%',
        top: '15%',
        bottom: '5%',
        containLabel: true
      },
      xAxis: [{
        type: 'category',
        data: NyscxxjcyjChart1X,
        axisTick: {
          show: false
        },
        axisLabel: {
          formatter: "{value}月",
          interval: 0,
          textStyle: {
            fontSize: 10,
            color: '#666'
          },
        },
        axisLine: {
          show: false
        },
      }],
      yAxis: [
        {
          type: "value",
          name: "单位(元)",
          nameTextStyle: {
            padding: [0, 0, 0, 30]
          },
          axisTick: {
            show: false
          },
          axisLine: {
            show: false,
            lineStyle: {
              color: "#666",
              fontSize: 10
            }
          },
          axisLabel: {
            formatter: '{value}',
            color: '#666',
            fontSize: 10
          },
          splitLine: {
            lineStyle: {
              color: '#dbdbdb',
              type: 'dotted',
            }
          },
        }
      ],
      series: [
        {
          name: legendStr[0],
          type: 'line',
          // barMaxWidth: "45%",
          //barGap: 1, //柱子之间间距
          symbolClip: true,
          itemStyle: {
            normal: {
              color: '#1890FF',
              // barBorderRadius: 10,
            }
          },
          data: NyscxxjcyjChart1Y1
        },
        {
          name: legendStr[1],
          type: 'line',
          // barMaxWidth: "45%",
          //barGap: 1, //柱子之间间距
          symbolClip: true,
          itemStyle: {
            normal: {
              color: '#36CBCB',
              // barBorderRadius: 10,
            }
          },
          data: NyscxxjcyjChart1Y2
        },
        {
          name: legendStr[2],
          type: 'line',
          // barMaxWidth: "45%",
          //barGap: 1, //柱子之间间距
          symbolClip: true,
          itemStyle: {
            normal: {
              color: '#FACC14',
              // barBorderRadius: 10,
            }
          },
          data: NyscxxjcyjChart1Y3
        },
      ]
    };
    myChart.setOption(option);
    changeSize(myChart)
    return myChart;
  },
  EchartsNyscxxjcyjChart2: function (container, data) {
    let myChart = echarts.init(document.getElementById(container));
    let legendStr = ['最高价格', '最低价格','平均价格'];
    let NyscxxjcyjChart1X = data.map(ele => ele.monthStr);
    let NyscxxjcyjChart1Y3 = data.map(ele => ele.avgPrice);
    let NyscxxjcyjChart1Y1 = data.map(ele => ele.maxPrice);
    let NyscxxjcyjChart1Y2 = data.map(ele => ele.minPrice);
    
    let option = {
      color: "#1890FF",
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow',
          label: {
            show: true,
            backgroundColor: '#7B7DDC'
          }
        },
        formatter: "{b}月<br/>平均价格：{c0}元<br/>最高价格：{c1}元<br/>最低价格：{c2}元",
      },
      legend: {
        data: legendStr,
        // align: 'top',
        // right: 'auto',
        top: '8',
        // orient: 'vertical',
        x: '30%',
        // y: '100%',
        // textStyle: {
        //   color: '#1890FF'
        // },
      },
      grid: {
        left: '3%',
        right: '5%',
        top: '15%',
        bottom: '5%',
        containLabel: true
      },
      xAxis: [{
        type: 'category',
        data: NyscxxjcyjChart1X,
        axisTick: {
          show: false
        },
        axisLabel: {
          formatter: "{value}月",
          interval: 0,
          textStyle: {
            fontSize: 10,
            color: '#666'
          },
        },
        axisLine: {
          show: false
        },
      }],
      yAxis: [
        {
          type: "value",
          name: "单位(元)",
          nameTextStyle: {
            padding: [0, 0, 0, 30]
          },
          axisTick: {
            show: false
          },
          axisLine: {
            show: false,
            lineStyle: {
              color: "#666",
              fontSize: 10
            }
          },
          axisLabel: {
            formatter: '{value}',
            color: '#666',
            fontSize: 10
          },
          splitLine: {
            lineStyle: {
              color: '#dbdbdb',
              type: 'dotted',
            }
          },
        }
      ],
      series: [
        {
          name: legendStr[0],
          type: 'line',
          // barMaxWidth: "45%",
          //barGap: 1, //柱子之间间距
          symbolClip: true,
          itemStyle: {
            normal: {
              color: '#1890FF',
              // barBorderRadius: 10,
            }
          },
          data: NyscxxjcyjChart1Y1
        },
        {
          name: legendStr[1],
          type: 'line',
          // barMaxWidth: "45%",
          //barGap: 1, //柱子之间间距
          symbolClip: true,
          itemStyle: {
            normal: {
              color: '#36CBCB',
              // barBorderRadius: 10,
            }
          },
          data: NyscxxjcyjChart1Y2
        },
        {
          name: legendStr[2],
          type: 'line',
          // barMaxWidth: "45%",
          //barGap: 1, //柱子之间间距
          symbolClip: true,
          itemStyle: {
            normal: {
              color: '#FACC14',
              // barBorderRadius: 10,
            }
          },
          data: NyscxxjcyjChart1Y3
        },
      ]
    };
    myChart.setOption(option);
    changeSize(myChart)
    return myChart;
  },
  EchartsNyscxxjcyjChart3: function (container, data) {
    let myChart = echarts.init(document.getElementById(container));
    let legendStr = ['最高价格', '最低价格','平均价格'];
    let NyscxxjcyjChart1X = data.map(ele => ele.monthStr);
    let NyscxxjcyjChart1Y3 = data.map(ele => ele.avgPrice);
    let NyscxxjcyjChart1Y1 = data.map(ele => ele.maxPrice);
    let NyscxxjcyjChart1Y2 = data.map(ele => ele.minPrice);
    
    let option = {
      color: "#1890FF",
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow',
          label: {
            show: true,
            backgroundColor: '#7B7DDC'
          }
        },
        formatter: "{b}月<br/>平均价格：{c0}元<br/>最高价格：{c1}元<br/>最低价格：{c2}元",
      },
      legend: {
        data: legendStr,
        // align: 'top',
        // right: 'auto',
        top: '8',
        // orient: 'vertical',
        x: '30%',
        // y: '100%',
        // textStyle: {
        //   color: '#1890FF'
        // },
      },
      grid: {
        left: '3%',
        right: '5%',
        top: '15%',
        bottom: '5%',
        containLabel: true
      },
      xAxis: [{
        type: 'category',
        data: NyscxxjcyjChart1X,
        axisTick: {
          show: false
        },
        axisLabel: {
          formatter: "{value}月",
          interval: 0,
          textStyle: {
            fontSize: 10,
            color: '#666'
          },
        },
        axisLine: {
          show: false
        },
      }],
      yAxis: [
        {
          type: "value",
          name: "单位(元)",
          nameTextStyle: {
            padding: [0, 0, 0, 30]
          },
          axisTick: {
            show: false
          },
          axisLine: {
            show: false,
            lineStyle: {
              color: "#666",
              fontSize: 10
            }
          },
          axisLabel: {
            formatter: '{value}',
            color: '#666',
            fontSize: 10
          },
          splitLine: {
            lineStyle: {
              color: '#dbdbdb',
              type: 'dotted',
            }
          },
        }
      ],
      series: [
        {
          name: legendStr[0],
          type: 'line',
          // barMaxWidth: "45%",
          //barGap: 1, //柱子之间间距
          symbolClip: true,
          itemStyle: {
            normal: {
              color: '#1890FF',
              // barBorderRadius: 10,
            }
          },
          data: NyscxxjcyjChart1Y1
        },
        {
          name: legendStr[1],
          type: 'line',
          // barMaxWidth: "45%",
          //barGap: 1, //柱子之间间距
          symbolClip: true,
          itemStyle: {
            normal: {
              color: '#36CBCB',
              // barBorderRadius: 10,
            }
          },
          data: NyscxxjcyjChart1Y2
        },
        {
          name: legendStr[2],
          type: 'line',
          // barMaxWidth: "45%",
          //barGap: 1, //柱子之间间距
          symbolClip: true,
          itemStyle: {
            normal: {
              color: '#FACC14',
              // barBorderRadius: 10,
            }
          },
          data: NyscxxjcyjChart1Y3
        },
      ]
    };
    myChart.setOption(option);
    changeSize(myChart)
    return myChart;
  },
}
