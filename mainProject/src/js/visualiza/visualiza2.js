/*
import echarts from 'echarts';
export default {
  // 经营主体数据
  //企业类型占比  饼图
  EchartsGeographyFirmChart: function (container) {
    let myChart = echarts.init(document.getElementById(container));
    let colorList= ["#EAEA26", "#906BF9", "#FE5656", "#01E17E", "#666"];
    let productDataX = [
      {value:59, name:'种植'},
      {value:6, name:'生产'},
      {value:21, name:'水产'},
      {value:12, name:'畜禽'},
    ];
    let option = {
      tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
      },
      legend: {
        orient: 'vertical',
        top: "middle",
        right: "15%",
        textStyle: {
          color: '#f2f2f2',
          fontSize: 12,
        },
      },
      series: [
        {
          name:'生产经营主体数据表',
          type:'pie',
          center: ["35%", "53%"],
          radius: ['45%', '70%'],
          avoidLabelOverlap: false,
          label: {
            normal: {
              show: true,
              formatter: "{c}亩",
              textStyle: {
                fontSize: 12,
                color:"#fff"
              },
              position: 'outside'
            },
            emphasis: {
              show: true
            }
          },
          itemStyle: {
            normal: {
              color: function(params) {
                return colorList[params.dataIndex]
              }
            }
          },
          labelLine: {
            normal: {
              show: false
            }
          },
          data:productDataX
        }
      ]
    };
    myChart.setOption(option);
    return myChart;
  },
   //历年企业数量  柱状图
  EchartsGeographyLastYearChart: function (container) {
    let myChart = echarts.init(document.getElementById(container));
    var geographyHouseNumDataY = [393, 430, 485, 526, 589,633];
    let geographyHouseNumDataX = ['2014', '2015', '2016', '2017', '2018', '2019' ];
    let option = {
      tooltip: {
        trigger: 'item',
        formatter: "{b}<br/>{c}家",
      },
      grid: {
        top: '18%',
        left: '5%',
        right: '5%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: [{
        type: 'category',
        data: geographyHouseNumDataX,
        axisTick: {
          show: false
        },
        axisLabel : {
          color:'#fff'
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
        name: '数量/个',
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
        name: '规模',
        barMaxWidth: "30%",
        type: "pictorialBar",
        type:"bar",
        symbol: "path://M250 150 L150 350 L350 350 Z",
        symbolClip: true,
        itemStyle: {
          normal: {
            color: '#50CB78',
            // color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            //   offset: 0,
            //   color: '#999999' // 0% 处的颜色
            // }, {
            //   offset: 1,
            //   color: '#50FF78' // 100% 处的颜色
            // }], false),

          }
        },
        data: geographyHouseNumDataY,
      }]
    };
    myChart.setOption(option);
    return myChart;
  },
  //各个乡镇主体数量  堆叠柱状图
  EchartsGeographyTownshipChart: function (container) {
    let myChart = echarts.init(document.getElementById(container));

    let option = {

  color: ["#EAEA26", "#906BF9", "#FE5656", "#01E17E",],
      tooltip: {
        // trigger: 'item',
        // formatter: "{b}<br/>数量：{c}个",
        // axisPointer: {
        //   type: 'shadow',
        //   label: {
        //     show: true,
        //     backgroundColor: '#7B7DDC'
        //   }
        // }
        trigger: 'axis',
        backgroundColor:'rgba(255,255,255,0.1)',
        axisPointer: {
          type: 'shadow',
          label: {
            show: true,
            backgroundColor: '#7B7DDC'
          }
        },
      },
      legend: {
        // selectedMode:false,//取消图例上的点击事件
        // data:['系统外部','系统内部'],
        textStyle: {
          fontSize: '12',
          color:'#fff'
        },
        top:'3%',
        icon: "circle",   //  这个字段控制形状  类型包括 circle，rect ，roundRect，triangle，diamond，pin，arrow，none
        itemWidth: 10,  // 设置宽度
        itemHeight: 10, // 设置高度
      },
      grid: {
        left: '5%',
        right: '5%',
        bottom: '10%',
        top:"18%",
        containLabel: true
      },
      xAxis : [
        {
          type : 'category',
          data : ['历阳镇','白桥镇','姥桥镇','乌江镇','石杨镇'],
          axisTick: {
            show: false
          },
          axisLabel : {
            color:'#fff'
          },
          axisLine: {
            // show: false,
            lineStyle: {
              color: '#7195ae',
              fontSize: 10
            }
          },
        }
      ],
      yAxis : [
        {
          type : 'value',
          minInterval:10,//设置左侧Y轴最小刻度
          splitLine: {
            lineStyle: {
              type: 'dashed',
              color: 'rgba(135,140,147,0.8)'
            }
          },//设置横线样式
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
        }
      ],
      series : [
        {
          name:'种植',
          type:'bar',
          stack: '排名',
          data:[83,62,43,56,76],
          barMaxWidth: "30%",
          // barMaxWidth: '40%',
          // type: "pictorialBar",
          // symbol: "path://M250 150 L150 350 L350 350 Z",
          // symbolClip: true,
        },
        {
          name:'畜禽',
          type:'bar',
          stack: '排名',
          data:[8,13,6,8,9],
          barMaxWidth: "30%",
          // barMaxWidth: '40%',
          // type: "pictorialBar",
          // symbol: "path://M250 150 L150 350 L350 350 Z",
          // symbolClip: true,
          // itemStyle:{
          //   normal:{
          //     barBorderRadius: [30, 30, 0, 0],
          //   }
          // }
        },
        {
          name:'生产',
          type:'bar',
          stack: '排名',
          data:[6,9,8,3,6],
          barMaxWidth: "30%",
          // barMaxWidth: '40%',
          // type: "pictorialBar",
          // symbol: "path://M250 150 L150 350 L350 350 Z",
          // symbolClip: true,
          // itemStyle:{
          //   normal:{
          //     barBorderRadius: [30, 30, 0, 0],
          //   }
          // }
        },
        {
          name:'水产',
          type:'bar',
          stack: '排名',
          data:[18,6,21,14,13],
          barMaxWidth: "30%",
          // barMaxWidth: '40%',
          // type: "pictorialBar",
          // symbol: "path://M250 150 L150 350 L350 350 Z",
          // symbolClip: true,
          // itemStyle:{
          //   normal:{
          //     barBorderRadius: [30, 30, 0, 0],
          //   }
          // }
        },
      ]
};


    myChart.setOption(option);
    return myChart;
  },
  //企业规模排行  柱状图
  EchartsGeographyScaleChart: function (container) {
    let myChart = echarts.init(document.getElementById(container));
    var geographyHouseNumDataY = [171, 42, 80, 25];
    let geographyHouseNumDataX = ['种植', '水产', '畜禽', '生产', ];
    let option = {
      tooltip: {
        trigger: 'item',
        formatter: "{b}<br/>{c}百万元",
      },
      grid: {
        top: '18%',
        left: '5%',
        right: '5%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: [{
        type: 'category',
        data: geographyHouseNumDataX,
        axisTick: {
          show: false
        },
        axisLabel : {
          color:'#fff'
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
        name: '单位(百万元)',
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
        name: '规模',
        barMaxWidth: "30%",
        type: "pictorialBar",
        type:'bar',
        symbol: "path://M250 150 L150 350 L350 350 Z",
        symbolClip: true,
        itemStyle: {
          normal: {
            color: '#50CB78',
            // color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            //   offset: 0,
            //   color: '#999999' // 0% 处的颜色
            // }, {
            //   offset: 1,
            //   color: '#50FF78' // 100% 处的颜色
            // }], false),

          }
        },
        data: geographyHouseNumDataY,
      }]
    };




    myChart.setOption(option);
    return myChart;
  },

  // ------------------------------------------------------------------------------------------

  //生产过程数据
  //打药、除草、施肥、浇水  折线图
  EchartsGeographyWorkChart: function (container) {
    let myChart = echarts.init(document.getElementById(container));
    var colors=['#57bbf7','#ffc969','#f38b97', '#b1d882','#c0acf9'];
     let option = {
      tooltip: {
          trigger: 'axis'
      },
      legend: {
          data:['打药', '除草', '施肥', '浇水'],
          textStyle: {
            color: '#fff'
          },
      },
      grid: {
          left: '0%',
          right: '3%',
          bottom: '3%',
          containLabel: true,
          borderColor:'#eeeff0'
      },

      xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['一月','二月','三月','四月','五月',],
          axisTick: {
            show: false
          },
          axisLabel : {
            color:'#fff'
          },
          axisLine: {
            // show: false,
            lineStyle: {
              color: '#7195ae',
              fontSize: 10
            }
          },
      },
      yAxis: {
          type: 'value',
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
      },
      color:colors,
      series: [
          {
              name:'打药',
              type:'line',
              stack: '总量',
              symbol:'circle',
              symbolSize: 8,
              data:[16,25,19,22,24]
          },
          {
              name:'除草',
              type:'line',
              stack: '总量',
              symbol:'circle',
              symbolSize: 8,
              data:[22,26,25,21,20]
          },
          {
              name:'施肥',
              type:'line',
              stack: '总量',
              symbol:'circle',
              symbolSize: 8,
              data:[11,16,12,10,13]
          },
          {
              name:'浇水',
              type:'line',
              stack: '总量',
              symbol:'circle',
              symbolSize: 8,
              data:[12,16,18,17,15]
          },

      ]
  };
    myChart.setOption(option);
    return myChart;
  },


  //农事记录趋势  柱状图
  EchartsGeographyRecordChart: function (container) {
    let myChart = echarts.init(document.getElementById(container));
    var geographyHouseNumDataY = [61, 83, 74, 70, 72];
    let geographyHouseNumDataX = ['一月', '二月', '三月', '四月', '五月'];
    let option = {
      tooltip: {
        trigger: 'item',
        formatter: "{b}<br/>{c}",
      },
      grid: {
        left: '5%',
        right: '5%',
        bottom: '10%',
        top:"18%",
        containLabel: true
      },
      xAxis: [{
        type: 'category',
        data: geographyHouseNumDataX,
        axisTick: {
          show: false
        },
        axisLabel : {
          color:'#fff'
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
        name:'',
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
        name: '人数统计',
        barMaxWidth: "30%",
        type: 'bar',
        // type: "pictorialBar",
        symbol: "path://M250 150 L150 350 L350 350 Z",
        symbolClip: true,
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
        data: geographyHouseNumDataY,
      }]
    };

    myChart.setOption(option);
    return myChart;
  },

  //产品农事记录 柱状图
  EchartsGeographyProductChart: function (container) {
    let myChart = echarts.init(document.getElementById(container));
    var geographyHouseNumDataY = [32, 25, 39, 26, 28];
    let geographyHouseNumDataX = ['西红柿', '辣椒', '黄瓜', '豇豆', '土豆'];
    let option = {
      tooltip: {
        trigger: 'item',
        formatter: "{b}<br/>{c}",
      },
      grid: {
        left: '5%',
        right: '5%',
        bottom: '10%',
        top:"18%",
        containLabel: true
      },
      xAxis: [{
        type: 'category',
        data: geographyHouseNumDataX,
        axisTick: {
          show: false
        },
        axisLabel : {
          color:'#fff'
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
        name:'数量',
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
        name: '人数统计',
        barMaxWidth: "30%",
        type: 'bar',
        // type: "pictorialBar",
        symbol: "path://M250 150 L150 350 L350 350 Z",
        symbolClip: true,
        itemStyle: {
          normal: {
            color: '#50CB78',
          //   color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
          //     offset: 0,
          //     color: '#FFFF73' // 0% 处的颜色
          //   }, {
          //     offset: 1,
          //     color: 'skyblue' // 100% 处的颜色
          //   }], false),
          }
        },
        data: geographyHouseNumDataY,
      }]
    };

    myChart.setOption(option);
    return myChart;
  },



//---------------------------------------------------------------------------------
//市场交易数据
//交易主体  柱状图
EchartsGeographyBodyChart: function (container) {
  let myChart = echarts.init(document.getElementById(container));
  var geographyHouseNumDataY = [15,13,37,17,25];
    let geographyHouseNumDataX = ['皖江蔬菜批发市场', '皖东瓜果蔬菜批发市场', '皖江大市场', '龙桥批发市场', '巢湖批发市场'];
    let option = {
      tooltip: {
        trigger: 'item',
        formatter: "{b}<br/>{c}摊位",
      },
      grid: {
        top: '18%',
        left: '5%',
        right: '3%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: [{
        type: 'category',
        data: geographyHouseNumDataX,
        axisTick: {
          show: false
        },
        axisLabel : {
          color:'#fff'
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
        name: '数量（摊位）',
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
        name: '人数统计',
        barMaxWidth: "30%",
        type:"bar",
        // type: "pictorialBar",
        symbol: "path://M250 150 L150 350 L350 350 Z",
        symbolClip: true,
        itemStyle: {
          normal: {
            color: '#50CB78',
            // color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            //   offset: 0,
            //   color: 'green' // 0% 处的颜色
            // }, {
            //   offset: 1,
            //   color: 'skyblue' // 100% 处的颜色
            // }], false),

          }
        },
        data: geographyHouseNumDataY,
      }]
    };
  myChart.setOption(option);
  return myChart;
},
//交易价格  双折线图
EchartsGeographyPriceChart: function (container) {
  let myChart = echarts.init(document.getElementById(container));
  var xData = ['2015', '2016', '2017', '2018', '2019', ];
  var yData1 = [25,27,23,30,28];
  // var yData2 = [13, 7, 10, 38, 17, 28, 22, 12,];
  let option = {
      title: {
          top: '0',
          left: 'center',
          textStyle: {
              align: 'center',
              fontSize: 22,
          }
      },
      tooltip: {
          trigger: 'axis',
          axisPointer: {
              type: 'cross'
          }
      },
      legend: {
          x: 'center',
          y: '40px',
          textStyle: {
              color: '#7195ae',
              fontSize: 13,
          },
          icon: 'circle',
          data: ['今天', '明天']
      },

    grid: {
      left: '5%',
      right: '5%',
      bottom: '10%',
      top:"18%",
      containLabel: true
    },
      xAxis: [{
          type: 'category',
          data: xData,
        axisTick: {
          show: false
        },
        axisLabel : {
          color:'#fff'
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
          name: '单位(万元)',
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
      }, ],
      series: [{
              name: '黄瓜',
              type: 'line',
              yAxisIndex: 0,
              symbolSize: 12,
              itemStyle: {
                  normal: {
                      color: 'skyblue',
                  }
              },
              data: yData1
          },
          // {
          //     name: '农贸市场',
          //     type: 'line',
          //     yAxisIndex: 0,
          //     symbolSize: 12,
          //     itemStyle: {
          //         normal: {
          //             color: '#666',
          //         }
          //     },
          //     data: yData2
          // }

      ]
  };
  myChart.setOption(option);
  return myChart;
},
//交易量  横向统计图
EchartsGeographyAmountChart: function (container) {
  let myChart = echarts.init(document.getElementById(container));
   let option = {
    title: {
    },
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },


    grid: {
        top:'5%',
        left: '0%',
        right: '0%',
        bottom: '0%',
        containLabel: true,
    },
    xAxis: {
        type: 'value',
        position:'bottom',
        splitLine: {show: false},
        boundaryGap: [0, 0.01],
        axisLine: {
          show: false,
          lineStyle: {
            color: '#fff',
            fontSize: 10
          }
        },
    },
    yAxis: {
        type: 'category',
        data: [
        '籼米',
        '黄瓜',
        '大白菜',
        '西红柿',
        '白萝卜'],
        axisLabel : {
          color:'#fff'
        },
    },
    series: [

        {
            itemStyle: {
                normal: {
                    color:  'skyblue',
                    shadowBlur: 11,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            },
            type: 'bar',
            barMaxWidth: "30%",
            data: [24740,5130,2350,4120,2320]
        }
    ]
};

  myChart.setOption(option);
  return myChart;
},
//交易品种  堆叠柱状图
EchartsGeographyVarietyChart: function (container) {
  let myChart = echarts.init(document.getElementById(container));
  let option = {
    color: ['#A0CE3A', '#31C5C0', '#585247', '#7F6AAD', '#009D85','skyblue','green','pink','yellogreen','#26842f','69f561' ,"rgba(250,250,250,0.3)"],
          tooltip : {
          trigger: 'axis',
          axisPointer : {            // 坐标轴指示器，坐标轴触发有效
              type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        legend: {
          // selectedMode:false,//取消图例上的点击事件
          // data:['系统外部','系统内部'],
          textStyle: {
            fontSize: '12',
            color:'#fff'
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis : [
          {
            type : 'category',
            data : ['皖江蔬菜批发市场', '皖东瓜果蔬菜批发市场', '皖江大市场', '龙桥批发市场', '巢湖批发市场'],
            axisTick: {
              show: false
            },
            axisLabel : {
              color:'#fff'
            },
            axisLine: {
              // show: false,
              lineStyle: {
                color: '#7195ae',
                fontSize: 10
              }
            },
          }
        ],
        yAxis : [
          {
            type : 'value',
            minInterval:10,//设置左侧Y轴最小刻度
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
          }
        ],
        series : [
          {
            name:'土豆',
            type:'bar',
            stack: '排名',
            data:[120, 132, 101, 134, 90,120, 132, 101, 134, 90],
            barWidth:'30%',
            // barMaxWidth: '40%',
            // type: "pictorialBar",
            // symbol: "path://M250 150 L150 350 L350 350 Z",
            // symbolClip: true,
          },
          {
            name:'黄瓜',
            type:'bar',
            stack: '排名',
            data:[220, 182, 191, 234, 290,220, 182, 191, 234, 290],
            barWidth:'30%',
            // barMaxWidth: '40%',
            // type: "pictorialBar",
            // symbol: "path://M250 150 L150 350 L350 350 Z",
            // symbolClip: true,
            // itemStyle:{
            //   normal:{
            //     barBorderRadius: [30, 30, 0, 0],
            //   }
            // }
          },
          {
            name:'西红柿',
            type:'bar',
            stack: '排名',
            data:[120, 132, 101, 134, 90,220, 182, 191, 234, 290],
            barWidth:'30%',
            // barMaxWidth: '40%',
            // type: "pictorialBar",
            // symbol: "path://M250 150 L150 350 L350 350 Z",
            // symbolClip: true,
          },
          {
            name:'辣椒',
            type:'bar',
            stack: '排名',
            data:[120, 132, 101, 134, 90,220, 182, 191, 234, 290],
            barWidth:'30%',
            // barMaxWidth: '40%',
            // type: "pictorialBar",
            // symbol: "path://M250 150 L150 350 L350 350 Z",
            // symbolClip: true,
          },
          {
            name:'茄子',
            type:'bar',
            stack: '排名',
            data:[120, 132, 101, 134, 90,220, 182, 191, 234, 290],
            barWidth:'30%',
            // barMaxWidth: '40%',
            // type: "pictorialBar",
            // symbol: "path://M250 150 L150 350 L350 350 Z",
            // symbolClip: true,
          },
          {
            name:'苦瓜',
            type:'bar',
            stack: '排名',
            data:[120, 132, 101, 134, 90,220, 182, 191, 234, 290],
            barWidth:'30%',
            // barMaxWidth: '40%',
            // type: "pictorialBar",
            // symbol: "path://M250 150 L150 350 L350 350 Z",
            // symbolClip: true,
          },
          {
            name:'大白菜',
            type:'bar',
            stack: '排名',
            data:[120, 132, 101, 134, 90,220, 182, 191, 234, 290],
            barWidth:'30%',
            // barMaxWidth: '40%',
            // type: "pictorialBar",
            // symbol: "path://M250 150 L150 350 L350 350 Z",
            // symbolClip: true,
          },
        ]
  };

  myChart.setOption(option);
  return myChart;
},


//-----------------------------------------------------------------------------------------
//质量溯源数据
//溯源企业排行  柱状图加折线图
EchartsGeographyRankingChart: function (container) {
  let myChart = echarts.init(document.getElementById(container));
  var xData = function() {
    var data = [];
    for (var i = 1; i < 11; i++) {
        data.push(i + "月份");
    }
    return data;
}();

 let option = {
    "title": {
        x: "1%",

        textStyle: {
            color: '#666',
            fontSize: '22'
        },
        subtextStyle: {
            color: '#90979c',
            fontSize: '16',

        },
    },
    "tooltip": {
        "trigger": "axis",
        "axisPointer": {
            "type": "shadow",
            textStyle: {
                color: "#666"
            }

        },
    },
    "grid": {
        "borderWidth": 1,
        "top": 200,
        "bottom": 200,
        "left":40,
        "right":40,
        textStyle: {
            color: "#fff"
        }
    },
    "legend": {
        x: '1%',
        top: '1%',
        textStyle: {
            color: '#90979c',
        },
    },


    "calculable": true,
    "xAxis": [{
        "type": "category",
      axisTick: {
        show: false
      },
      axisLabel : {
        color:'#fff'
      },
      axisLine: {
        // show: false,
        lineStyle: {
          color: '#7195ae',
          fontSize: 10
        }
      },
        "data": xData,
    }],
    "yAxis": [{
        "type": "value",
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

    "series": [{
            "name": "扫码次数",
            "type": "bar",
            "stack": "总量",
            "barMaxWidth": 10,
            "barGap": "5%",
            "itemStyle": {
                "normal": {
                    "color": "rgba(255,144,128,1)",
                    "label": {
                        "show": true,
                        "textStyle": {
                            "color": "#999"
                        },
                        "position": "insideTop",
                        formatter: function(p) {
                            return p.value > 0 ? (p.value) : '';
                        }
                    }
                }
            },
            "data": [
              856,1036,953,1120,1059,1169,1354,1216,1416,1536
            ],
        },

        {
            "name": "溯源码数量",
            "type": "bar",
            "stack": "总量",
            "itemStyle": {
                "normal": {
                    "color": "rgba(0,191,183,1)",
                    "barBorderRadius": 0,
                    "label": {
                        "show": true,
                        "position": "top",
                    }
                }
            },
            "data": [
              198,201,220,234,256,274,295,309,336,356
            ]
        },
        // {
        //     "name": "扫码次数",
        //     "type": "line",
        //     symbolSize:1,
        //     symbol:'circle',
        //     "itemStyle": {
        //         "normal": {
        //           "color": "rgba(255,144,128,1)",
        //           "barBorderRadius": 0,
        //             "label": {
        //                 "show": true,
        //                 "position": "top",
        //             }
        //         }
        //     },
        //     "data": [
        //       8568,10365,9536,11203,10598,11698,,13546,12164,14168,15362
        //     ]
        // },
      //   {
      //     "name": "溯源码数量",
      //     "type": "line",
      //     symbolSize:1,
      //     symbol:'circle',
      //     "itemStyle": {
      //         "normal": {
      //           "color": "rgba(0,191,183,1)",
      //           "barBorderRadius": 0,
      //             "label": {
      //                 "show": true,
      //                 "position": "top",
      //             }
      //         }
      //     },
      //     "data": [
      //       198,201,220,234,256,274,295,309,336,356
      //     ]
      // },
    ]
}
  myChart.setOption(option);
  return myChart;
},
//农残检测  折线图
EchartsGeographyDetectChart: function (container) {
  let myChart = echarts.init(document.getElementById(container));
  var xData = ["1月", "2月", "3月","4月","5月", "6月", "7月", "8月","9月","10月"];
  var yData1 = [0.9, 0.6, 0.8, 0.6, 0.7, 0.9,0.8,0.7,0.6,0.9];
  // var yData2 = [13, 7, 10, 38, 17, 28, 22, 12,];
  let option = {
      title: {
          top: '0',
          left: 'center',
          textStyle: {
              align: 'center',
              fontSize: 22,
          }
      },
      tooltip: {
          trigger: 'axis',
          axisPointer: {
              type: 'cross'
          }
      },
      legend: {
          x: 'center',
          y: '40px',
          textStyle: {
              color: '#7195ae',
              fontSize: 13,
          },
          icon: 'circle',
      },


    grid: {
      left: '5%',
      right: '5%',
      bottom: '10%',
      top:"18%",
      containLabel: true
    },
      xAxis: [{
          type: 'category',
          data: xData,
          nameTextStyle: {
              color: '#d4ffff'
          },
          axisLine: {
              lineStyle: {
                  color: '#'
              }
          },

          axisTick: {
              show: false,
          },
          axisLabel: {
              show: true,
              textStyle: {
                  color: "#FFF",
                  fontSize: 12,
              },

          },
      }],
      yAxis: [{
          type: 'value',
          name: '合格率',

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

      }, ],
      series: [{
              type: 'line',
              yAxisIndex: 0,
              symbolSize: 12,
              itemStyle: {
                  normal: {
                      color: 'skyblue',
                  }
              },
              data: yData1
          },
          // {
          //     name: '明天',
          //     type: 'line',
          //     yAxisIndex: 0,
          //     symbolSize: 12,
          //     itemStyle: {
          //         normal: {
          //             color: '#666',
          //         }
          //     },
          //     data: yData2
          // }

      ]
  };
  myChart.setOption(option);
  return myChart;
},
//产品信息  柱状图
EchartsGeographyMessageChart: function (container) {
  let myChart = echarts.init(document.getElementById(container));
  var geographyHouseNumDataY = [3612, 3055, 2654, 2164, 1685];
  let geographyHouseNumDataX = ['黄瓜', '土豆', '白菜', '西红柿', '油麦菜'];
  let option = {
    tooltip: {
      trigger: 'item',
      formatter: "{b}<br/>{c}次",
    },
    grid: {
      top: '18%',
      left: '5%',
      right: '3%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [{
      type: 'category',
      data: geographyHouseNumDataX,
      axisTick: {
        show: false
      },
      axisLabel : {
        color:'#fff'
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
      name: '扫码次数',
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
      name: '人数统计',
      barMaxWidth: '20%',
      type:'bar',
      // type: "pictorialBar",
      symbol: "path://M250 150 L150 350 L350 350 Z",
      symbolClip: true,
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
      data: geographyHouseNumDataY,
    }]
  };
  myChart.setOption(option);
  return myChart;
},
//投诉统计  折线图
EchartsGeographyComplaintChart: function (container) {
  let myChart = echarts.init(document.getElementById(container));
  var colors=['#3AA1FF','#F47F92','#FBD437','#4ECB73','#36CBCB'];
  let option = {
      tooltip: {
          trigger: 'axis'
      },
      legend: {
          data:['黄瓜', '土豆', '白菜', '西红柿', '油麦菜'],
          textStyle: {
            color: '#f2f2f2',
            fontSize: 12,
          },
      },
      grid: {
        left: '5%',
        right: '5%',
        bottom: '10%',
        top:"18%",
        containLabel: true
      },

      xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月'],
          axisLine: {
            show: false,
            lineStyle: {
              color: '#fff',
              fontSize: 10
            }
          },
      },
      yAxis: {
          type: 'value',

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
      },
      color:colors,
      series: [
          {
              name:'黄瓜',
              type:'line',
              stack: '总量',
              symbol:'circle',
              symbolSize: 8,

              data:[12, 13, 10, 14, 9, 23, 21,26,21,25]
          },
          {
              name:'土豆',
              type:'line',
              stack: '总量',
              symbol:'circle',
              symbolSize: 8,
              data:[22, 18, 19, 24, 29, 33, 31,28,26,30]
          },
          {
              name:'白菜',
              type:'line',
              stack: '总量',
              symbol:'circle',
              symbolSize: 8,
              data:[10, 32, 21, 14, 10, 30, 41,35,37,32]
          },
          {
              name:'西红柿',
              type:'line',
              stack: '总量',
              symbol:'circle',
              symbolSize: 8,
              data:[20, 32, 30, 34, 30, 30, 20,24,26,23]
          },
          {
              name:'油麦菜',
              type:'line',
              stack: '总量',
              symbol:'circle',
              symbolSize: 8,
              data:[35, 22, 15, 26, 29, 21, 30,33,28,23]
          }
      ]
  };
  myChart.setOption(option);
  return myChart;
},
}
*/
