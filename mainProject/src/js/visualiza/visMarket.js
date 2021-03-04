import echarts from "echarts";

import changeSize from '@/util/changeSize';

export default {
  // 市场交易数据仪表盘
  EchartsMarketCountData1Chart: function(container, data) {
    let myChart = echarts.init(document.getElementById(container));
    var marketCountData1 = data;
    // var dataArr = [{
    //   value: 8955,
    //   name: '综合健康评分'
    // }];
    var color = new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
      offset: 0,
      color: '#5CF9FE' // 0% 处的颜色
    },
      {
        offset: 0.17,
        color: '#468EFD' // 100% 处的颜色
      },
      {
        offset: 0.9,
        color: '#468EFD' // 100% 处的颜色
      },
      {
        offset: 1,
        color: '#5CF9FE' // 100% 处的颜色
      }
    ]);
    var colorSet = [
      [0.91, color],
      [1, '#15337C']
    ];
    var rich = {
      white: {
        fontSize: 12,
        color: '#fff',
        fontWeight: '500',
        padding: [-20, 0, 0, 0]
      },
      bule: {
        fontSize: 22,
        fontFamily: 'DINBold',
        color: '#f5ff44',
        fontWeight: '700',
        padding: [-25, 0, 0, 0],
      },
      radius: {
        width: 100,
        height: 25,
        // lineHeight:80,
        borderWidth: 1,
        borderColor: '#0092F2',
        fontSize: 12,
        color: '#fff',
        backgroundColor: '#1B215B',
        borderRadius: 15,
        textAlign: 'center',
      },
      size: {
        height: 15,
        padding: [100, 0, 0, 0]
      }
    }
    let option = {
      tooltip: {
        formatter: "{a} <br/>{b} : {c}%"
      },

      series: [{ //内圆
        type: 'pie',
        radius: '90%',
        center: ['50%', '50%'],
        z: 0,
        itemStyle: {
          normal: {
            color: 'rgba(17,24,43,0)',
            label: {
              show: false
            },
            labelLine: {
              show: false
            }
          },
        },
        hoverAnimation: false,
        label: {
          show: false,
        },
        tooltip: {
          show: false
        },
        data: [100],
      },
        {
          type: 'gauge',
          name: '外层辅助',
          radius: '86%',
          startAngle: '225',
          endAngle: '-45',
          splitNumber: '10',
          pointer: {
            show: false
          },
          detail: {
            show: false,
          },
          data: [{
            value: 1
          }],
          // data: [{value: 1, name: 90}],
          title: {
            show: true,
            offsetCenter: [0, 30],
            textStyle: {
              color: '#fff',
              fontStyle: 'normal',
              fontWeight: 'normal',
              fontFamily: '微软雅黑',
              fontSize: 20,
            }
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: [
                [1, '#00FFFF']
              ],
              width: 2,
              opacity: 1
            }
          },
          axisTick: {
            show: false
          },
          splitLine: {
            show: true,
            length: 20,
            lineStyle: {
              color: '#051932',
              width: 0,
              type: 'solid',
            },
          },
          axisLabel: {
            show: false
          }
        },
        {
          type: 'gauge',
          radius: '80%',
          startAngle: '225',
          endAngle: '-45',
          pointer: {
            show: false
          },
          detail: {
            formatter: function(value) {
              var num = Math.round(value);
              return '{bule|' + num + '}' + '{size|' + '}\n{radius|市场数量(家)}';
            },
            rich: rich,
            "offsetCenter": ['0%', "0%"],
          },
          data: marketCountData1,
          title: {
            show: false,
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: colorSet,
              width: 10,
              // shadowBlur: 15,
              // shadowColor: '#B0C4DE',
              shadowOffsetX: 0,
              shadowOffsetY: 0,
              opacity: 1
            }
          },
          axisTick: {
            show: false
          },
          splitLine: {
            show: false,
            length: 25,
            lineStyle: {
              color: '#00377a',
              width: 2,
              type: 'solid',
            },
          },
          axisLabel: {
            show: false
          },
        },
        {
          name: '灰色内圈', //刻度背景
          type: 'gauge',
          z: 2,
          radius: '70%',
          startAngle: '225',
          endAngle: '-45',
          //center: ["50%", "75%"], //整体的位置设置
          axisLine: { // 坐标轴线
            lineStyle: { // 属性lineStyle控制线条样式
              color: [
                [1, '#018DFF']
              ],
              width: 2,
              opacity: 1, //刻度背景宽度
            }
          },
          splitLine: {
            show: false
          },
          // data: [{
          //     show: false,
          //     value: '80'
          // }], //作用不清楚
          axisLabel: {
            show: false
          },
          pointer: {
            show: false
          },
          axisTick: {
            show: false
          },
          detail: {
            show: 0
          }
        },
        {
          name: "白色圈刻度",
          type: "gauge",
          radius: "70%",
          startAngle: 225, //刻度起始
          endAngle: -45, //刻度结束
          z: 4,
          axisTick: {
            show: false
          },
          splitLine: {
            length: 10, //刻度节点线长度
            lineStyle: {
              width: 2,
              color: 'rgba(1,244,255, 0.9)'
            } //刻度节点线
          },
          axisLabel: {
            color: 'rgba(255,255,255,0)',
            fontSize: 12,
          }, //刻度节点文字颜色
          pointer: {
            show: false
          },
          axisLine: {
            lineStyle: {
              opacity: 0
            }
          },
          detail: {
            show: false
          },
          data: [{
            value: 0,
            name: ""
          }]
        },
        { //内圆
          type: 'pie',
          radius: '55%',
          center: ['50%', '50%'],
          z: 1,
          itemStyle: {
            normal: {
              color: new echarts.graphic.RadialGradient(.5, .5, .8, [{
                offset: 0,
                color: '#4978EC'
              },
                {
                  offset: .5,
                  color: '#1E2B57'
                },
                {
                  offset: 1,
                  color: '#141F3D'
                }
              ], false),
              label: {
                show: false
              },
              labelLine: {
                show: false
              }
            },
          },
          hoverAnimation: false,
          label: {
            show: false,
          },
          tooltip: {
            show: false
          },
          data: [100],
        },
      ]
    };
    myChart.setOption(option);
    changeSize(myChart)
    return myChart;
  },
  EchartsMarketCountData2Chart: function(container, data) {
    let myChart = echarts.init(document.getElementById(container));
    var marketCountData2 = data;
    // var dataArr = [{
    //   value: 8955,
    //   name: '综合健康评分'
    // }];
    var color = new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
      offset: 0,
      color: '#5CF9FE' // 0% 处的颜色
    },
      {
        offset: 0.17,
        color: '#468EFD' // 100% 处的颜色
      },
      {
        offset: 0.9,
        color: '#468EFD' // 100% 处的颜色
      },
      {
        offset: 1,
        color: '#5CF9FE' // 100% 处的颜色
      }
    ]);
    var colorSet = [
      [0.91, color],
      [1, '#15337C']
    ];
    var rich = {
      white: {
        fontSize: 12,
        color: '#fff',
        fontWeight: '500',
        padding: [-20, 0, 0, 0]
      },
      bule: {
        fontSize: 22,
        fontFamily: 'DINBold',
        color: '#f5ff44',
        fontWeight: '700',
        padding: [-25, 0, 0, 0],
      },
      radius: {
        width: 100,
        height: 25,
        // lineHeight:80,
        borderWidth: 1,
        borderColor: '#0092F2',
        fontSize: 12,
        color: '#fff',
        backgroundColor: '#1B215B',
        borderRadius: 15,
        textAlign: 'center',
      },
      size: {
        height: 15,
        padding: [100, 0, 0, 0]
      }
    }
    let option = {
      tooltip: {
        formatter: "{a} <br/>{b} : {c}%"
      },

      series: [{ //内圆
        type: 'pie',
        radius: '90%',
        center: ['50%', '50%'],
        z: 0,
        itemStyle: {
          normal: {
            color: 'rgba(17,24,43,0)',
            label: {
              show: false
            },
            labelLine: {
              show: false
            }
          },
        },
        hoverAnimation: false,
        label: {
          show: false,
        },
        tooltip: {
          show: false
        },
        data: [100],
      },
        {
          type: 'gauge',
          name: '外层辅助',
          radius: '86%',
          startAngle: '225',
          endAngle: '-45',
          splitNumber: '10',
          pointer: {
            show: false
          },
          detail: {
            show: false,
          },
          data: [{
            value: 1
          }],
          // data: [{value: 1, name: 90}],
          title: {
            show: true,
            offsetCenter: [0, 30],
            textStyle: {
              color: '#fff',
              fontStyle: 'normal',
              fontWeight: 'normal',
              fontFamily: '微软雅黑',
              fontSize: 20,
            }
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: [
                [1, '#00FFFF']
              ],
              width: 2,
              opacity: 1
            }
          },
          axisTick: {
            show: false
          },
          splitLine: {
            show: true,
            length: 20,
            lineStyle: {
              color: '#051932',
              width: 0,
              type: 'solid',
            },
          },
          axisLabel: {
            show: false
          }
        },
        {
          type: 'gauge',
          radius: '80%',
          startAngle: '225',
          endAngle: '-45',
          pointer: {
            show: false
          },
          detail: {
            formatter: function(value) {
              var num = Math.round(value);
              return '{bule|' + num + '}' + '{size|' + '}\n{radius|交易品种(种)}';
            },
            rich: rich,
            "offsetCenter": ['0%', "0%"],
          },
          data: marketCountData2,
          title: {
            show: false,
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: colorSet,
              width: 10,
              // shadowBlur: 15,
              // shadowColor: '#B0C4DE',
              shadowOffsetX: 0,
              shadowOffsetY: 0,
              opacity: 1
            }
          },
          axisTick: {
            show: false
          },
          splitLine: {
            show: false,
            length: 25,
            lineStyle: {
              color: '#00377a',
              width: 2,
              type: 'solid',
            },
          },
          axisLabel: {
            show: false
          },
        },
        {
          name: '灰色内圈', //刻度背景
          type: 'gauge',
          z: 2,
          radius: '70%',
          startAngle: '225',
          endAngle: '-45',
          //center: ["50%", "75%"], //整体的位置设置
          axisLine: { // 坐标轴线
            lineStyle: { // 属性lineStyle控制线条样式
              color: [
                [1, '#018DFF']
              ],
              width: 2,
              opacity: 1, //刻度背景宽度
            }
          },
          splitLine: {
            show: false
          },
          // data: [{
          //     show: false,
          //     value: '80'
          // }], //作用不清楚
          axisLabel: {
            show: false
          },
          pointer: {
            show: false
          },
          axisTick: {
            show: false
          },
          detail: {
            show: 0
          }
        },
        {
          name: "白色圈刻度",
          type: "gauge",
          radius: "70%",
          startAngle: 225, //刻度起始
          endAngle: -45, //刻度结束
          z: 4,
          axisTick: {
            show: false
          },
          splitLine: {
            length: 10, //刻度节点线长度
            lineStyle: {
              width: 2,
              color: 'rgba(1,244,255, 0.9)'
            } //刻度节点线
          },
          axisLabel: {
            color: 'rgba(255,255,255,0)',
            fontSize: 12,
          }, //刻度节点文字颜色
          pointer: {
            show: false
          },
          axisLine: {
            lineStyle: {
              opacity: 0
            }
          },
          detail: {
            show: false
          },
          data: [{
            value: 0,
            name: ""
          }]
        },
        { //内圆
          type: 'pie',
          radius: '55%',
          center: ['50%', '50%'],
          z: 1,
          itemStyle: {
            normal: {
              color: new echarts.graphic.RadialGradient(.5, .5, .8, [{
                offset: 0,
                color: '#4978EC'
              },
                {
                  offset: .5,
                  color: '#1E2B57'
                },
                {
                  offset: 1,
                  color: '#141F3D'
                }
              ], false),
              label: {
                show: false
              },
              labelLine: {
                show: false
              }
            },
          },
          hoverAnimation: false,
          label: {
            show: false,
          },
          tooltip: {
            show: false
          },
          data: [100],
        },
      ]
    };
    myChart.setOption(option);
    changeSize(myChart)
    return myChart;
  },
  //价格变化数据
  EchartsMarketChart: function(container, data) {
    let myChart = echarts.init(document.getElementById(container));
    let option = {
      color: ["#57bbf7", "#ffc969", "#f38b97", "#b1d882", "#c0acf9"],
      tooltip: {
        axisPointer: {
          type: 'shadow',
          label: {
            show: true,
            backgroundColor: '#7B7DDC'
          }
        },
        trigger: "axis",
        formatter:function (data) {
          let showHtm = "";
          for(let i = 0; i<data.length; i++){
            if(i==0){
              showHtm += data[0].name+"<br/>";
            }
            showHtm += data[i].marker+data[i].seriesName+":"+data[i].value +"元/斤<br/>" ;
          }
          return showHtm;
        },
      },
      legend: {
        show: false,
        // textStyle: {
        //   fontSize: "12",
        //   color: "#fff"
        // },
        // top: "0%",
        // icon: "circle", //  这个字段控制形状  类型包括 circle，rect ，roundRect，triangle，diamond，pin，arrow，none
        // itemWidth: 10, // 设置宽度
        // itemHeight: 5 // 设置高度
      },
      grid: {
        top: "13%",
        left: "7%",
        right: "5%",
        bottom: "3%",
        containLabel: true
      },
      xAxis: [
        {
          type: "category",
          // data: ['历阳镇', '白桥镇', '姥桥镇', '乌江镇', '石杨镇'],
          data: data.name,
          axisTick: {
            show: false
          },
          axisLabel: {
            color: "#fff",
            interval: 0,
            rotate: 30,
            fontSize: 10,
          },
          axisLine: {
            // show: false,
            lineStyle: {
              color: "#7195ae",
              fontSize: 10
            }
          }
        }
      ],
      yAxis: [
        {
          type: "value",
          name: "价格(元/斤)",
          axisTick: {
            show: false
          },
          nameTextStyle: {
            padding: [0, 0, -8, 0]
          },
          axisLine: {
            show: false,
            lineStyle: {
              color: "#fff",
              fontSize: 10
            }
          },
          splitLine: {
            lineStyle: {
              type: "double",
              color: "#7195ae"
            }
          },
          axisLabel: {
            textStyle: {
              fontSize: 10
            }
          }
        }
      ],
      series: data.type,
      barMaxWidth: 25
    };
    myChart.setOption(option);
    changeSize(myChart)
    return myChart;
  },

};
