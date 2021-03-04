import echarts from "echarts";

import changeSize from '@/util/changeSize';

export default {
  //农事类型占比
  EchartsProcessTypeChart: function (container, data) {
    let myChart = echarts.init(document.getElementById(container));
    var processTypeData = data;
    let processTypeColor = ['#1890FF', '#41D9C7', '#2FC25B', '#FACC14', '#E6965C', '#5C8EE6', '#13C2C2', '#5CA3E6', '#B381E6', '#F04864', '#D598D9']
    let option = {
      color: processTypeColor,
      tooltip: {
        trigger: "item",
        formatter: "{b}: {c}个 ({d}%)"
      },
      legend: {
        show: false,
        orient: "vertical",
        top: "middle",
        left: "60%",
        textStyle: {
          color: "#f2f2f2",
          fontSize: 12
        },
        icon: "roundRect",
        data: processTypeData
      },
      series: [
        {
          radius: ["40%", "65%"],
          center: ["50%", "60%"],
          type: "pie",
          label: {
            normal: {
              show: true,
              formatter: '{b|{b}}\n{hr|}\n{d|{d}%}',
              rich: {
                b: {
                  fontSize: 12,
                  color: '#fff',
                  align: 'left',
                  padding: 4
                },
                hr: {
                  borderColor: '#fff',
                  width: '100%',
                  borderWidth: 1,
                  height: 0
                },
                d: {
                  fontSize: 12,
                  color: '#fff',
                  align: 'left',
                  padding: 4
                },
                c: {
                  fontSize: 12,
                  color: '#fff',
                  align: 'left',
                  padding: 4
                }
              },
              textStyle: {
                fontSize: 10,
                color: "#fff"
              },
              position: "outside"
            },
            emphasis: {
              show: true
            }
          },
          labelLine: {
            normal: {
              show: true,
              lineStyle: {
                color: "#fff"  // 改变标示线的颜色
              },
              length: 5,
              // length2: 10,
            },
            emphasis: {
              show: true
            }
          },
          name: "农事类型占比",
          data: processTypeData
        },
      ]
    };
    myChart.setOption(option);
    changeSize(myChart)
    return myChart;
  },
  //农事主体排名
  EchartsProcessMainChart: function(container, dataX, dataY) {
    let myChart = echarts.init(document.getElementById(container));
    let processMainDataY = dataY;
    let processMainDataX = dataX;
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
        formatter: "{b}：{c}个",
      },
      grid: {
        top: "18%",
        left: "5%",
        right: "5%",
        bottom: "1%",
        containLabel: true
      },
      xAxis: [
        {
          type: "category",
          data: processMainDataX,
          axisTick: {
            show: false
          },
          axisLabel: {
            color: "#fff",
            // interval: 0,
            // rotate: 0,
            fontSize: 10,
            // formatter: function (value) {
            //   return (value.length > 1 ? (value.slice(0,6)+"...") : value )
            // },
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
          name: "数量(个)",
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
              color: "#7195ae"
            }
          }
        }
      ],
      series: [
        {
          name: "农事主体排名",
          barMaxWidth: "30%",
          // type: "pictorialBar",
          type: "bar",
          // symbol: "path://M250 150 L150 350 L350 350 Z",
          symbolClip: true,
          itemStyle: {
            normal: {
              color: "#1E9BD1"
              // color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              //   offset: 0,
              //   color: '#999999' // 0% 处的颜色
              // }, {
              //   offset: 1,
              //   color: '#50FF78' // 100% 处的颜色
              // }], false),
            }
          },
          data: processMainDataY
        }
      ]
    };
    myChart.setOption(option);
    changeSize(myChart)
    return myChart;
    // let myChart = echarts.init(document.getElementById(container));
    // let colorList = [
    //   "#A0CE3A",
    //   "#0F347B",
    //   "#1E9BD1",
    //   "#585247",
    //   "#31C5C0",
    //   "#7F6AAD",
    //   "#009D85",
    //   "rgba(250,250,250,0.3)"
    // ];
    // let processMainDataX = data;
    // let option = {
    //   color: colorList,
    //   tooltip: {
    //     trigger: "item",
    //     formatter: "{a} <br/>{b}: {c}亩 ({d}%)"
    //   },
    //   legend: {
    //     orient: "vertical",
    //     top: "middle",
    //     right: "15%",
    //     textStyle: {
    //       color: "#f2f2f2",
    //       fontSize: 12
    //     },
    //     icon: "roundRect"
    //   },
    //   series: [
    //     {
    //       name: "生产经营主体数据表",
    //       type: "pie",
    //       radius: ["30%", "61%"],
    //       center: ["40%", "50%"],
    //       // avoidLabelOverlap: false,
    //       label: {
    //         normal: {
    //           show: true,
    //           formatter: "{c}亩",
    //           textStyle: {
    //             fontSize: 12,
    //             color: "#fff"
    //           },
    //           position: "outside"
    //         },
    //         emphasis: {
    //           show: true
    //         }
    //       },
    //       itemStyle: {
    //         normal: {
    //           color: function(params) {
    //             return colorList[params.dataIndex];
    //           }
    //         }
    //       },
    //       labelLine: {
    //         normal: {
    //           show: true,
    //           length: 10,
    //           length2: 10
    //         },
    //         emphasis: {
    //           show: true
    //         }
    //       },
    //       data: processMainDataX
    //     },
    //     // 边框的设置
    //     {
    //       radius: ["30%", "34%"],
    //       center: ["40%", "50%"],
    //       type: "pie",
    //       label: {
    //         normal: {
    //           show: false
    //         },
    //         emphasis: {
    //           show: false
    //         }
    //       },
    //       labelLine: {
    //         normal: {
    //           show: false
    //         },
    //         emphasis: {
    //           show: false
    //         }
    //       },
    //       animation: false,
    //       tooltip: {
    //         show: false
    //       },
    //       data: [
    //         {
    //           value: 1,
    //           itemStyle: {
    //             color: "rgba(250,250,250,0.3)"
    //           }
    //         }
    //       ]
    //     },
    //     {
    //       name: "外边框",
    //       type: "pie",
    //       clockWise: false, //顺时加载
    //       hoverAnimation: false, //鼠标移入变大
    //       center: ["40%", "50%"],
    //       radius: ["65%", "65%"],
    //       label: {
    //         normal: {
    //           show: false
    //         }
    //       },
    //       data: [
    //         {
    //           value: 9,
    //           name: "",
    //           itemStyle: {
    //             normal: {
    //               borderWidth: 2,
    //               borderColor: "#0b5263"
    //             }
    //           }
    //         }
    //       ]
    //     }
    //   ]
    // };
    // myChart.setOption(option);
    // return myChart;
  },
  /*//农事记录趋势
  EchartsProcessRecordChart: function(container, dataX, dataY) {
    let myChart = echarts.init(document.getElementById(container));
    let processRecordDataY = dataY;
    let processRecordDataX = dataX;
    let option = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow',
          label: {
            show: true,
            backgroundColor: '#7B7DDC'
          },
        },
        formatter: "{b}月：{c}次",
      },
      grid: {
        top: "18%",
        left: "5%",
        right: "5%",
        bottom: "1%",
        containLabel: true
      },
      xAxis: [
        {
          type: "category",
          data: processRecordDataX,
          axisTick: {
            show: false
          },
          axisLabel: {
            color: "#fff",
            // interval: 0,
            // rotate: 0,
            fontSize: 10,
            // formatter: function (value) {
            //   return (value.length > 1 ? (value.slice(0,6)+"...") : value )
            // },
            interval: 0,
            formatter: function(data) {
              return data + "月";
            }
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
          name: "次数(次)",
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
              color: "#7195ae"
            }
          }
        }
      ],
      series: [
        {
          name: "农事记录趋势",
          barMaxWidth: "30%",
          // type: "pictorialBar",
          type: "bar",
          // symbol: "path://M250 150 L150 350 L350 350 Z",
          symbolClip: true,
          itemStyle: {
            normal: {
              color: "#50CB78"
              // color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              //   offset: 0,
              //   color: '#999999' // 0% 处的颜色
              // }, {
              //   offset: 1,
              //   color: '#50FF78' // 100% 处的颜色
              // }], false),
            }
          },
          data: processRecordDataY
        }
      ]
    };
    myChart.setOption(option);
    return myChart;
    /!*let myChart = echarts.init(document.getElementById(container));
    let colorList = [
      "#A0CE3A",
      "#0F347B",
      "#1E9BD1",
      "#585247",
      "#31C5C0",
      "#7F6AAD",
      "#009D85",
      "rgba(250,250,250,0.3)"
    ];
    let processMainDataX = data;
    let option = {
      color: colorList,
      tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b}: {c}亩 ({d}%)"
      },
      legend: {
        orient: "vertical",
        top: "middle",
        right: "15%",
        textStyle: {
          color: "#f2f2f2",
          fontSize: 12
        },
        icon: "roundRect"
      },
      series: [
        {
          name: "生产经营主体数据表",
          type: "pie",
          radius: ["30%", "61%"],
          center: ["40%", "50%"],
          // avoidLabelOverlap: false,
          label: {
            normal: {
              show: true,
              formatter: "{c}亩",
              textStyle: {
                fontSize: 12,
                color: "#fff"
              },
              position: "outside"
            },
            emphasis: {
              show: true
            }
          },
          itemStyle: {
            normal: {
              color: function(params) {
                return colorList[params.dataIndex];
              }
            }
          },
          labelLine: {
            normal: {
              show: true,
              length: 10,
              length2: 10
            },
            emphasis: {
              show: true
            }
          },
          data: processMainDataX
        },
        // 边框的设置
        {
          radius: ["30%", "34%"],
          center: ["40%", "50%"],
          type: "pie",
          label: {
            normal: {
              show: false
            },
            emphasis: {
              show: false
            }
          },
          labelLine: {
            normal: {
              show: false
            },
            emphasis: {
              show: false
            }
          },
          animation: false,
          tooltip: {
            show: false
          },
          data: [
            {
              value: 1,
              itemStyle: {
                color: "rgba(250,250,250,0.3)"
              }
            }
          ]
        },
        {
          name: "外边框",
          type: "pie",
          clockWise: false, //顺时加载
          hoverAnimation: false, //鼠标移入变大
          center: ["40%", "50%"],
          radius: ["65%", "65%"],
          label: {
            normal: {
              show: false
            }
          },
          data: [
            {
              value: 9,
              name: "",
              itemStyle: {
                normal: {
                  borderWidth: 2,
                  borderColor: "#0b5263"
                }
              }
            }
          ]
        }
      ]
    };
    myChart.setOption(option);
    return myChart;*!/
  },*/
  //农机数据
  EchartsProcessPlantTypeChart: function(container, dataX, dataY) {
    let myChart = echarts.init(document.getElementById(container));
    let processPlantTypeDataY = dataY;
    let processPlantTypeDataX = dataX;
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
        formatter: "{b}：{c}台",
      },
      grid: {
        top: "18%",
        left: "5%",
        right: "5%",
        bottom: "1%",
        containLabel: true
      },
      xAxis: [
        {
          type: "category",
          data: processPlantTypeDataX,
          axisTick: {
            show: false
          },
          axisLabel: {
            color: "#fff",
            interval: 0,
            // rotate: 0,
            fontSize: 10,
            // formatter: function (value) {
            //   return (value.length > 1 ? (value.slice(0,6)+"...") : value )
            // },
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
          name: "数量(台)",
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
              color: "#7195ae"
            }
          }
        }
      ],
      series: [
        {
          name: "农机数据",
          barMaxWidth: "30%",
          // type: "pictorialBar",
          type: "bar",
          // symbol: "path://M250 150 L150 350 L350 350 Z",
          symbolClip: true,
          itemStyle: {
            normal: {
              color: "#41D9C7"
              // color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              //   offset: 0,
              //   color: '#999999' // 0% 处的颜色
              // }, {
              //   offset: 1,
              //   color: '#50FF78' // 100% 处的颜色
              // }], false),
            }
          },
          data: processPlantTypeDataY
        }
      ]
    };
    myChart.setOption(option);
    changeSize(myChart)
    return myChart;
    /*let myChart = echarts.init(document.getElementById(container));
    let colorList = [
      "#A0CE3A",
      "#0F347B",
      "#1E9BD1",
      "#585247",
      "#31C5C0",
      "#7F6AAD",
      "#009D85",
      "rgba(250,250,250,0.3)"
    ];
    let processMainDataX = data;
    let option = {
      color: colorList,
      tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b}: {c}亩 ({d}%)"
      },
      legend: {
        orient: "vertical",
        top: "middle",
        right: "15%",
        textStyle: {
          color: "#f2f2f2",
          fontSize: 12
        },
        icon: "roundRect"
      },
      series: [
        {
          name: "生产经营主体数据表",
          type: "pie",
          radius: ["30%", "61%"],
          center: ["40%", "50%"],
          // avoidLabelOverlap: false,
          label: {
            normal: {
              show: true,
              formatter: "{c}亩",
              textStyle: {
                fontSize: 12,
                color: "#fff"
              },
              position: "outside"
            },
            emphasis: {
              show: true
            }
          },
          itemStyle: {
            normal: {
              color: function(params) {
                return colorList[params.dataIndex];
              }
            }
          },
          labelLine: {
            normal: {
              show: true,
              length: 10,
              length2: 10
            },
            emphasis: {
              show: true
            }
          },
          data: processMainDataX
        },
        // 边框的设置
        {
          radius: ["30%", "34%"],
          center: ["40%", "50%"],
          type: "pie",
          label: {
            normal: {
              show: false
            },
            emphasis: {
              show: false
            }
          },
          labelLine: {
            normal: {
              show: false
            },
            emphasis: {
              show: false
            }
          },
          animation: false,
          tooltip: {
            show: false
          },
          data: [
            {
              value: 1,
              itemStyle: {
                color: "rgba(250,250,250,0.3)"
              }
            }
          ]
        },
        {
          name: "外边框",
          type: "pie",
          clockWise: false, //顺时加载
          hoverAnimation: false, //鼠标移入变大
          center: ["40%", "50%"],
          radius: ["65%", "65%"],
          label: {
            normal: {
              show: false
            }
          },
          data: [
            {
              value: 9,
              name: "",
              itemStyle: {
                normal: {
                  borderWidth: 2,
                  borderColor: "#0b5263"
                }
              }
            }
          ]
        }
      ]
    };
    myChart.setOption(option);
    return myChart;*/
  },
  //农事类型排名
  EchartsProcessFarmTypeChart: function(container, dataX, dataY) {
    let myChart = echarts.init(document.getElementById(container));
    let processFarmTypeDataY = dataY;
    let processFarmTypeDataX = dataX;
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
        formatter: "{b}：{c}个",
      },
      grid: {
        top: "18%",
        left: "5%",
        right: "5%",
        bottom: "1%",
        containLabel: true
      },
      xAxis: [
        {
          type: "category",
          data: processFarmTypeDataX,
          axisTick: {
            show: false
          },
          axisLabel: {
            color: "#fff",
            // interval: 0,
            // rotate: 0,
            fontSize: 10,
            // formatter: function (value) {
            //   return (value.length > 1 ? (value.slice(0,6)+"...") : value )
            // },
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
          name: "数量(个)",
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
              color: "#7195ae"
            }
          }
        }
      ],
      series: [
        {
          name: "农事类型排名",
          barMaxWidth: "30%",
          // type: "pictorialBar",
          type: "bar",
          // symbol: "path://M250 150 L150 350 L350 350 Z",
          symbolClip: true,
          itemStyle: {
            normal: {
              color: "#1890FF"
              // color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              //   offset: 0,
              //   color: '#999999' // 0% 处的颜色
              // }, {
              //   offset: 1,
              //   color: '#50FF78' // 100% 处的颜色
              // }], false),
            }
          },
          data: processFarmTypeDataY
        }
      ]
    };
    myChart.setOption(option);
    changeSize(myChart)
    return myChart;
    // let myChart = echarts.init(document.getElementById(container));
    // let colorList = [
    //   "#A0CE3A",
    //   "#0F347B",
    //   "#1E9BD1",
    //   "#585247",
    //   "#31C5C0",
    //   "#7F6AAD",
    //   "#009D85",
    //   "rgba(250,250,250,0.3)"
    // ];
    // let processMainDataX = data;
    // let option = {
    //   color: colorList,
    //   tooltip: {
    //     trigger: "item",
    //     formatter: "{a} <br/>{b}: {c}亩 ({d}%)"
    //   },
    //   legend: {
    //     orient: "vertical",
    //     top: "middle",
    //     right: "15%",
    //     textStyle: {
    //       color: "#f2f2f2",
    //       fontSize: 12
    //     },
    //     icon: "roundRect"
    //   },
    //   series: [
    //     {
    //       name: "生产经营主体数据表",
    //       type: "pie",
    //       radius: ["30%", "61%"],
    //       center: ["40%", "50%"],
    //       // avoidLabelOverlap: false,
    //       label: {
    //         normal: {
    //           show: true,
    //           formatter: "{c}亩",
    //           textStyle: {
    //             fontSize: 12,
    //             color: "#fff"
    //           },
    //           position: "outside"
    //         },
    //         emphasis: {
    //           show: true
    //         }
    //       },
    //       itemStyle: {
    //         normal: {
    //           color: function(params) {
    //             return colorList[params.dataIndex];
    //           }
    //         }
    //       },
    //       labelLine: {
    //         normal: {
    //           show: true,
    //           length: 10,
    //           length2: 10
    //         },
    //         emphasis: {
    //           show: true
    //         }
    //       },
    //       data: processMainDataX
    //     },
    //     // 边框的设置
    //     {
    //       radius: ["30%", "34%"],
    //       center: ["40%", "50%"],
    //       type: "pie",
    //       label: {
    //         normal: {
    //           show: false
    //         },
    //         emphasis: {
    //           show: false
    //         }
    //       },
    //       labelLine: {
    //         normal: {
    //           show: false
    //         },
    //         emphasis: {
    //           show: false
    //         }
    //       },
    //       animation: false,
    //       tooltip: {
    //         show: false
    //       },
    //       data: [
    //         {
    //           value: 1,
    //           itemStyle: {
    //             color: "rgba(250,250,250,0.3)"
    //           }
    //         }
    //       ]
    //     },
    //     {
    //       name: "外边框",
    //       type: "pie",
    //       clockWise: false, //顺时加载
    //       hoverAnimation: false, //鼠标移入变大
    //       center: ["40%", "50%"],
    //       radius: ["65%", "65%"],
    //       label: {
    //         normal: {
    //           show: false
    //         }
    //       },
    //       data: [
    //         {
    //           value: 9,
    //           name: "",
    //           itemStyle: {
    //             normal: {
    //               borderWidth: 2,
    //               borderColor: "#0b5263"
    //             }
    //           }
    //         }
    //       ]
    //     }
    //   ]
    // };
    // myChart.setOption(option);
    // return myChart;
  },

  /*//农事类型趋势 折线图
  EchartsGeographyWorkChart: function(container, data) {
    let myChart = echarts.init(document.getElementById(container));
    let timeDataX = [...new Set(data.map(ele => ele.time))];
        timeDataX.forEach((item, index) => {
          timeDataX[index] = parseInt(timeDataX[index])
        })
        timeDataX.sort(function (a, b) {
          return a - b;
        });
        let a  = timeDataX.join("月,")
          timeDataX = a.split(',')
    let legendData = [...new Set(data.map(ele => ele.farmingName))];
        // legendData.unshift('','','','','','')
    let seriesData = legendData.map(ele => {
      return {
        name: ele,
        type: "line",
        stack: "总量",
        symbol: "circle",
        symbolSize: 8,
        data: data
          .filter(item => item.farmingName === ele)
          .map(item => item.count)
      };
    });
    var colors = ["#57bbf7", "#ffc969", "#f38b97", "#b1d882", "#c0acf9"];
    let option = {
      tooltip: {
        trigger: "axis",
        axisPointer: {
          // 坐标轴指示器，坐标轴触发有效
          type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
        },
        formatter:function (data) {
          let showHtm = "";
          for(let i = 0; i<data.length; i++){
            if(i==0){
              showHtm += data[0].name+"<br/>";
            }
            showHtm += data[i].marker+data[i].seriesName+":"+data[i].value +"条<br/>" ;
          }
          return showHtm;
        },
      },

      grid: {
        left: "3%",
        right: "5%",
        bottom: "10%",
        top: "18%",
        containLabel: true
      },

      xAxis: {
        type: "category",
        boundaryGap: false,
        data: timeDataX,
        axisTick: {
          show: false
        },
        axisLabel: {
          color: "#fff"
        },
        axisLine: {
          // show: false,
          lineStyle: {
            color: "#7195ae",
            fontSize: 10
          }
        }
      },
      yAxis: {
        type: "value",
        name: "单位(条)",
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
            color: "#7195ae"
          }
        }
      },
      color: colors,
      series: seriesData
    };
    myChart.setOption(option);
    return myChart;
  },
  //农事记录趋势  柱状图
  EchartsGeographyRecordChart: function(container, data) {
    let myChart = echarts.init(document.getElementById(container));
    var geographyHouseNumDataY = data.map(ele => ele.count);
    let geographyHouseNumDataX = data.map(ele => ele.time);
          geographyHouseNumDataX.forEach((item, index) => {
            geographyHouseNumDataX[index] = parseInt(geographyHouseNumDataX[index])
          })
          geographyHouseNumDataX.sort(function (a, b) {
            return a - b;
          });
          let a = geographyHouseNumDataX.join("月,")
          geographyHouseNumDataX = a.split(',')
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
        formatter: "{b}<br/>农事次数：{c}次",
      },
      grid: {
        left: "5%",
        right: "5%",
        bottom: "3%",
        top: "18%",
        containLabel: true
      },
      xAxis: [
        {
          type: "category",
          data: geographyHouseNumDataX,
          axisTick: {
            show: false
          },
          axisLabel: {
            color: "#fff"
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
          name: "次数(次)",
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
              color: "#7195ae"
            }
          }
        }
      ],

      series: [
        {
          name: "人数统计",
          barMaxWidth: "30%",
          type: "bar",
          // type: "pictorialBar",
          symbol: "path://M250 150 L150 350 L350 350 Z",
          symbolClip: true,
          itemStyle: {
            normal: {
              color: "#E4C13D"
              // color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              //   offset: 0,
              //   color: '#FFFF73' // 0% 处的颜色
              // }, {
              //   offset: 1,
              //   color: '#E4C13D' // 100% 处的颜色
              // }], false),
            }
          },
          data: geographyHouseNumDataY
        }
      ]
    };

    myChart.setOption(option);
    return myChart;
  },
  //产品农事记录 柱状图
  EchartsGeographyProductChart: function(container, data) {
    let myChart = echarts.init(document.getElementById(container));
    var geographyHouseNumDataY = data.map(ele => ele.count);
    let geographyHouseNumDataX = data.map(ele => ele.productName);
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
        formatter: "{b}<br/>农事次数：{c}次",
      },
      grid: {
        left: "5%",
        right: "5%",
        bottom: "3%",
        top: "18%",
        containLabel: true
      },
      xAxis: [
        {
          type: "category",
          data: geographyHouseNumDataX,
          axisTick: {
            show: false
          },
          axisLabel: {
            color: "#fff"
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
          name: "次数(次)",
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
              color: "#7195ae"
            }
          }
        }
      ],

      series: [
        {
          name: "人数统计",
          barMaxWidth: "30%",
          type: "bar",
          // type: "pictorialBar",
          symbol: "path://M250 150 L150 350 L350 350 Z",
          symbolClip: true,
          itemStyle: {
            normal: {
              color: "#50CB78"
              //   color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              //     offset: 0,
              //     color: '#FFFF73' // 0% 处的颜色
              //   }, {
              //     offset: 1,
              //     color: 'skyblue' // 100% 处的颜色
              //   }], false),
            }
          },
          data: geographyHouseNumDataY
        }
      ]
    };
    myChart.setOption(option);
    return myChart;
  }*/
};
