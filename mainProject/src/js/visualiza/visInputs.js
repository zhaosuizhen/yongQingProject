import echarts from "echarts";

import changeSize from '@/util/changeSize';

export default {
  // *******投入品数据*******
  //投入品占比 柱状图
  EchartsInputsProportion: function(container, data) {
    let myChart = echarts.init(document.getElementById(container));
    var option = {
      //   tooltip: {
      //     trigger: 'item',
      //     formatter: '{a} <br/>{b}: {c} ({d}%)'
      //   },
        legend: {
          textStyle: {
            color: '#FFF',
            rich: {
                uname: {
                    width: 70
                },
                unum: {
                    width: 40,
                    align: 'right'
                }
              }
            },
            type: 'scroll',
            orient: 'vertical',
            right: '5%',
            top: '20%',
            formatter: function(name) {
              var total = 0;
              var tarValue;
              for (var i = 0, l = data.length; i < l; i++) {
                  total += data[i].value;
                  if (data[i].name == name) {
                      tarValue = data[i].value;
                  }
              }
              var p = (tarValue / total * 100).toFixed(2);
              return `{uname|${name}}{unum|${p}%}`
              //return name + ' ' + ' ' + ' '+ ' '+ ' '+ ' ' + p + '%';
          },
        },
        series: [
          {
            name: '投入品占比',
            type: 'pie',
            color: ['#78E4E4', '#FEE185', '#15C2D1', '#00A1E4', '#85CBFE', '#66B8BC', '#66B88D'],
            radius: ['70%', '85%'],
            center: ['30%', '50%'],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: 'center'
            },
            labelLine: {
              show: false
            },
            data
          }
        ]
      }
    myChart.setOption(option);
    changeSize(myChart)
    return myChart;
  },
  //地膜 柱状图
  EchartsInputsFilmChart: function(container, dataX, dataY1, dataY2) {
    let myChart = echarts.init(document.getElementById(container));
    var inputsFilmDataY1 = dataY1;
    var inputsFilmDataY2 = dataY2;
    let inputsFilmDataX = dataX;
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
      },
      grid: {
        top: "18%",
        left: "3%",
        right: "3%",
        bottom: "3%",
        containLabel: true
      },
      xAxis: [
        {
          type: "category",
          data: inputsFilmDataX,
          axisTick: {
            show: false
          },
          axisLabel: {
            color: "#fff"
          },
          axisLine: {
            // show: false,
            lineStyle: {
              color: "#20406a",
              fontSize: 10
            }
          }
        }
      ],
      yAxis: [
        {
          type: "value",
          name: "面积/吨",
          nameTextStyle: {
            padding: [0, 0, -8,0],
            color: "#fff"
          },
          axisTick: {
            show: false
          },
          axisLine: {
            show: false,
            lineStyle: {
              color: "#fff",
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
              type: "double",
              color: "#20406a"
            }
          }
        },
        // {
        //   type: "value",
        //   name: "面积(亩)",
        //   nameTextStyle: {
        //     padding: [0, 0, -8, 0],
        //     color: "#fff"
        //   },
        //   axisLabel: {
        //     textStyle:{
        //       fontSize: 10,
        //       color:'#fff',  //坐标的字体颜色
        //     },
        //   },
        //   axisLine: {
        //     show: true,
        //     lineStyle: {
        //       type: 'solid',
        //       color: '#7195ae'
        //     },
        //   },
        //   splitLine: {
        //     lineStyle: {
        //       type: "double",
        //       color: "#7195ae"
        //     }
        //   }
        // },
      ],

      series: [
        {
          name: "面积/吨",
          barMaxWidth: "20%",
          type: "bar",
          itemStyle: {
            normal: {
              color: "#fb7293"
            }
          },
          data: inputsFilmDataY1
        },
        // {
        //   name: "覆盖面积(亩)",
        //   barMaxWidth: "30%",
        //   type: "line",
        //   smooth: true,
        //   yAxisIndex: 1,
        //   // type: "pictorialBar",
        //   // symbol: "path://M250 150 L150 350 L350 350 Z",
        //   // symbolClip: true,
        //   itemStyle: {
        //     normal: {
        //       color: "#E4C13D"
        //     }
        //   },
        //   data: inputsFilmDataY2
        // }
      ]
    };
    myChart.setOption(option);
    changeSize(myChart)
    return myChart;
  },
  //农药 柱状图
  EchartsInputsPesticideChart: function(container, dataX, dataY) {
    let myChart = echarts.init(document.getElementById(container));
    var inputsPesticideDataY = dataY;
    let inputsPesticideDataX = dataX;
    /*for(let i=0;i < inputsPesticideDataY.length;i++){
      inputsPesticideDataY[i] = (inputsPesticideDataY[i]/10000).toFixed(2);
    }*/
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
        formatter: "{b}<br/>使用数量：{c}吨"
        // formatter: function (params, ticket, callback) {
        //   let showHtm = "";
        //   showHtm = params.name + "<br>" + "使用数量：" + (params.value).toFixed(2) + "吨";
        //   return showHtm;
        // }
      },
      grid: {
        left: "3%",
        right: "5%",
        bottom: "3%",
        top: "18%",
        containLabel: true
      },
      xAxis: [
        {
          type: "category",
          data: inputsPesticideDataX,
          axisTick: {
            show: false
          },
          axisLabel: {
            color: "#fff"
          },
          axisLine: {
            // show: false,
            lineStyle: {
              color: "#20406a",
              fontSize: 10
            }
          }
        }
      ],
      yAxis: [
        {
          type: "value",
          name: "面积/吨",
          nameTextStyle: {
            padding: [0, 0, -8, 0]
          },
          axisTick: {
            show: false
          },
          axisLine: {
            show: false,
            lineStyle: {
              color: "#fff",
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
              type: "double",
              color: "#20406a"
            }
          }
        }
      ],

      series: [
        {
          name: "农药使用数量",
          barMaxWidth: "20%",
          type: "bar",
          // type: "pictorialBar",
          // symbol: "path://M250 150 L150 350 L350 350 Z",
          // symbolClip: true,
          itemStyle: {
            normal: {
              color: "#fee185"
              // color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              //   offset: 0,
              //   color: '#C3FFB6' // 0% 处的颜色
              // }, {
              //   offset: 1,
              //   color: '#50CB78' // 100% 处的颜色
              // }], false),
            }
          },
          data: inputsPesticideDataY
        }
      ]
    };
    myChart.setOption(option);
    changeSize(myChart)
    return myChart;
  },
  //柴油
  EchartsInputsSeedChart: function(container, dataX, dataY) {
    let myChart = echarts.init(document.getElementById(container));
    var inputsSeedDataY = dataY;
    /*for(let i=0;i < inputsSeedDataY.length;i++){
      inputsSeedDataY[i] = (inputsSeedDataY[i]/10000).toFixed(2);
    }*/
    let inputsSeedDataX = dataX;
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
        formatter: "{b}<br/>使用数量：{c}吨"
        // formatter: function (params, ticket, callback) {
        //   let showHtm = "";
        //   showHtm = params.name + "<br>" + "使用数量：" + (params.value).toFixed(2) + "吨";
        //   return showHtm;
        // }
      },
      grid: {
        left: "3%",
        right: "5%",
        bottom: "3%",
        top: "18%",
        containLabel: true
      },
      xAxis: [
        {
          type: "category",
          data: inputsSeedDataX,
          axisTick: {
            show: false
          },
          axisLabel: {
            color: "#fff"
          },
          axisLine: {
            // show: false,
            lineStyle: {
              color: "#20406a",
              fontSize: 10
            }
          }
        }
      ],
      yAxis: [
        {
          type: "value",
          name: "面积/吨",
          nameTextStyle: {
            padding: [0, 0, -8, 0]
          },
          axisTick: {
            show: false
          },
          axisLine: {
            show: false,
            lineStyle: {
              color: "#fff",
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
              type: "double",
              color: "#20406a"
            }
          }
        }
      ],

      series: [
        {
          name: "农用柴油使用量",
          barMaxWidth: "20%",
          type: "bar",
          // type: "pictorialBar",
          // symbol: "path://M250 150 L150 350 L350 350 Z",
          // symbolClip: true,
          itemStyle: {
            normal: {
              color: "#44f0fe"
              // color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              //   offset: 0,
              //   color: '#C3FFB6' // 0% 处的颜色
              // }, {
              //   offset: 1,
              //   color: '#50CB78' // 100% 处的颜色
              // }], false),
            }
          },
          data: inputsSeedDataY
        }
      ]
    };
    myChart.setOption(option);
    changeSize(myChart)
    return myChart;
  },
  //化肥 柱状图
  EchartsInputsChemicalChart: function(container, dataX, dataY) {
    let myChart = echarts.init(document.getElementById(container));
    var inputsChemicalY = dataY;
    /*for(let i=0;i < inputsChemicalY.length;i++){
      inputsChemicalY[i] = (inputsChemicalY[i]/10000).toFixed(2);
    }*/
    let inputsChemicalX = dataX;
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
        formatter: "{b}<br/>使用数量：{c}吨"
        // formatter: function (params, ticket, callback) {
        //   let showHtm = "";
        //   showHtm = params.name + "<br>" + "使用数量：" + (params.value).toFixed(2) + "吨";
        //   return showHtm;
        // }
      },
      grid: {
        left: "3%",
        right: "5%",
        bottom: "3%",
        top: "18%",
        containLabel: true
      },
      xAxis: [
        {
          type: "category",
          data: inputsChemicalX,
          axisTick: {
            show: false
          },
          axisLabel: {
            color: "#fff"
          },
          axisLine: {
            // show: false,
            lineStyle: {
              color: "#20406a",
              fontSize: 10
            }
          }
        }
      ],
      yAxis: [
        {
          type: "value",
          name: "单位(吨)",
          nameTextStyle: {
            padding: [0, 0, -8, 0]
          },
          axisTick: {
            show: false
          },
          axisLine: {
            show: false,
            lineStyle: {
              color: "#fff",
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
              type: "double",
              color: "#20406a"
            }
          }
        }
      ],

      series: [
        {
          name: "化肥使用数量",
          barMaxWidth: "20%",
          type: "bar",
          // type: "pictorialBar",
          // symbol: "path://M250 150 L150 350 L350 350 Z",
          // symbolClip: true,
          itemStyle: {
            normal: {
              color: "#91d280"
              // color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              //   offset: 0,
              //   color: '#C3FFB6' // 0% 处的颜色
              // }, {
              //   offset: 1,
              //   color: '#50CB78' // 100% 处的颜色
              // }], false),
            }
          },
          data: inputsChemicalY
        }
      ]
    };
    myChart.setOption(option);
    changeSize(myChart)
    return myChart;
  },

  //农机作业情况
  argJobStatesChart(id, xData, dataY1,dataY2,dataY3){
    // xData = xData.slice(0, xData.length / 2)
    // let data_SD = data.slice(0, data.length / 2)
    // let data_YC = data.slice(data.length / 2)

    let myChart = echarts.init(document.getElementById(id));

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
            // formatter: "{b}：{c}个",
          },
        legend: {
            textStyle:{
                color: '#fff'
            },
            top: '1%',
            // right: '20%'
        },
        grid: {     //设置图标位置
          top: '15%',
          left: '2%',
          right: '5%',
          bottom: '15%',
          containLabel: true
        },
        xAxis: {
            type: 'category',
            boundaryGap: true,      //设置x轴距离y轴是否有间距
            data: xData,
            axisTick: {
              show: false
            },
            axisLabel: {
              color: "#fff"
            },
            axisLine: {
              // show: false,
              lineStyle: {
                color: "#20406a",
                fontSize: 10
              }
            }
        },
        yAxis: [
            {
                // min: '0',
                // max: '800',
                name: '面积/公顷',
                type: 'value',
                nameTextStyle: {
                  padding: [0, 0, -8, 0]
                },
                axisTick: {
                  show: false
                },
                axisLine: {
                  show: false,
                  lineStyle: {
                    color: "#fff",
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
                    type: "double",
                    color: "#20406a"
                  }
                }
            }
        ],
        series: [
          {
            name: '机耕面积',
            type: 'bar',
            // stack: '总量',
            data: dataY1,
            // symbol: 'none',
            // smooth: true
            barGap:'100%',
            barCategoryGap:'100%',/*多个并排柱子设置柱子之间的间距*/
            itemStyle:{
                normal: {       //渐变色
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#dbc57c' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: '#dbc57c' // 100% 处的颜色
                    }], false),
                    // barBorderRadius: [30, 30, 0, 0],
                    // color: '#91D27F'
                }
            },
            barWidth: '10%',   //设置柱子宽度
        },
            {
                name: '机播面积',
                type: 'bar',
                // stack: '总量',
                data: dataY2,
                // symbol: 'none',
                // smooth: true
                barGap:'100%',
                barCategoryGap:'100%',/*多个并排柱子设置柱子之间的间距*/
                itemStyle:{
                    normal: {       //渐变色
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: '#2aaec7' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: '#2aaec7' // 100% 处的颜色
                        }], false),
                        // barBorderRadius: [30, 30, 0, 0],
                        // color: '#91D27F'
                    }
                },
                barWidth: '10%',   //设置柱子宽度
            },
            {
                name: '机收面积',
                type: 'bar',
                // stack: '总量',
                data: dataY3,
                symbol: 'none',
                barGap:'100%',
            barCategoryGap:'100%',/*多个并排柱子设置柱子之间的间距*/
                itemStyle: {
                    normal: {       //渐变色
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: '#8bc87b' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: '#8bc87b' // 100% 处的颜色
                        }], false),
                        // barBorderRadius: [30, 30, 0, 0],
                        // color: '#91D27F'
                    }
                },
                barWidth: '10%',   //设置柱子宽度
            }
        ]
    };
    
    myChart.setOption(option);
    changeSize(myChart)
    return myChart;
},
};
