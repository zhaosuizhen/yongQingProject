import echarts from "echarts";

import changeSize from '@/util/changeSize'

function randomData() {
  return Math.round(Math.random()*100);
}
export default {
  //*****质量检测数据*****

  //质量检测
  EchartsSourceEnterpriseChart: function(container, data) {
    let myChart = echarts.init(document.getElementById(container));
    let option = {
      color: ['#1890FF', '#41D9C7', '#2FC25B', '#FACC14', '#E6965C', '#5C8EE6', '#13C2C2', '#5CA3E6', '#B381E6', '#F04864', '#D598D9'],
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow',
          label: {
            show: true,
            backgroundColor: '#7B7DDC'
          }
        },
        formatter:function (data) {
          let showHtm = "";
          for(let i = 0; i<data.length; i++){
            if(i==0){
              showHtm += data[0].name+"<br/>";
            }
            showHtm += data[i].marker+data[i].seriesName+":"+data[i].value +"个<br/>" ;
          }
          return showHtm;
        },
      },
      legend: {
        // show: false,
        textStyle: {
          fontSize: "10",
          color: "#fff"
        },
        top: "0%",
        icon: "circle", //  这个字段控制形状  类型包括 circle，rect ，roundRect，triangle，diamond，pin，arrow，none
        itemWidth: 5, // 设置宽度
        itemHeight: 5 // 设置高度
      },
      grid: {
        top: "20%",
        left: "5%",
        right: "5%",
        bottom: "-5%",
        containLabel: true
      },
      xAxis: [
        {
          type: "category",
          data: data.name,
          axisTick: {
            show: false
          },
          axisLabel: {
            color: "#fff",
            interval: 0,
            rotate: 30,
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
      series: data.type,
      barMaxWidth: 25
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
    // let managJingYingDataX = data;
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
    //       data: managJingYingDataX
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
  //溯源产品占比
  EchartsSourceProductChart: function (container, data) {
    let myChart = echarts.init(document.getElementById(container));
    var sourceProductData = data;
    let sourceProductColor = ['#1890FF', '#41D9C7', '#2FC25B', '#FACC14', '#E6965C', '#5C8EE6', '#13C2C2', '#5CA3E6', '#B381E6', '#F04864', '#D598D9',]
    let option = {
      color: sourceProductColor,
      tooltip: {
        trigger: "item",
        formatter: "扫码数量<br>{b}: {c}次 ({d}%)"
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
        data: sourceProductData
      },
      series: [
        {
          radius: ["40%", "65%"],
          center: ["50%", "55%"],
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
              length: 1,
              // length2: 10,
            },
            emphasis: {
              show: true
            }
          },
          name: "溯源产品占比",
          data: sourceProductData
        },
      ]
    };
    myChart.setOption(option);
    changeSize(myChart)
    return myChart;
    /*let myChart = echarts.init(document.getElementById(container));
    var geographyHouseNumDataY = dataY
    let geographyHouseNumDataX = dataX;
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
        formatter: "{b}<br/>面积：{c}万亩"
        //  formatter: function (params) {
        //    let showHtm = "";
        //    showHtm = params.name + "<br>" + "面积：" + (params.value / 10000).toFixed(2) + "万亩";
        //    return showHtm;
        //  }
      },
      grid: {
        left: "5%",
        right: "5%",
        bottom: "3%",
        top: "18%",
        containLabel: true
      },
      xAxis: [{
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
      }],
      yAxis: [{
        type: "value",
        name: "面积(万亩)",
        nameTextStyle: {
          padding: [0, 0, -8, -14]
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
      }],

      series: [{
        name: "面积",
        barMaxWidth: "30%",
        type: "bar",
        // type: "pictorialBar",
        // symbol: "path://M250 150 L150 350 L350 350 Z",
        // symbolClip: true,
        itemStyle: {
          normal: {
            color: "skyblue"
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
      }]
    };
    myChart.setOption(option);
    return myChart;*/
  },
  //扫码区域占比
  EchartsSourceRegionChart: function (container, data) {
    let myChart = echarts.init(document.getElementById(container));
    var sourceRegionData = data;
    let sourceRegionColor = ['#1890FF', '#41D9C7', '#2FC25B', '#FACC14', '#E6965C', '#5C8EE6', '#13C2C2', '#5CA3E6', '#B381E6', '#F04864', '#D598D9',]
    let option = {
      color: sourceRegionColor,
      tooltip: {
        trigger: "item",
        formatter: "{b}: {c}次 ({d}%)"
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
        data: sourceRegionData
      },
      series: [
        {
          radius: ["40%", "65%"],
          center: ["50%", "55%"],
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
              length: 1,
              // length2: 10,
            },
            emphasis: {
              show: true
            }
          },
          name: "扫码区域占比",
          data: sourceRegionData
        },
      ]
    };
    myChart.setOption(option);
    changeSize(myChart)
    return myChart;
    /*let myChart = echarts.init(document.getElementById(container));
    var geographyHouseNumDataY = dataY
    let geographyHouseNumDataX = dataX;
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
        formatter: "{b}<br/>面积：{c}万亩"
        //  formatter: function (params) {
        //    let showHtm = "";
        //    showHtm = params.name + "<br>" + "面积：" + (params.value / 10000).toFixed(2) + "万亩";
        //    return showHtm;
        //  }
      },
      grid: {
        left: "5%",
        right: "5%",
        bottom: "3%",
        top: "18%",
        containLabel: true
      },
      xAxis: [{
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
      }],
      yAxis: [{
        type: "value",
        name: "面积(万亩)",
        nameTextStyle: {
          padding: [0, 0, -8, -14]
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
      }],

      series: [{
        name: "面积",
        barMaxWidth: "30%",
        type: "bar",
        // type: "pictorialBar",
        // symbol: "path://M250 150 L150 350 L350 350 Z",
        // symbolClip: true,
        itemStyle: {
          normal: {
            color: "skyblue"
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
      }]
    };
    myChart.setOption(option);
    return myChart;*/
  },
  //农残检测  折线图
  EchartsSourceCheckChart: function(container, dataX, dataY) {
    let myChart = echarts.init(document.getElementById(container));
    var xData = dataX;
    var yData1 = dataY;
    /*for (let i = 0; i < yData1.length; i++) {
      yData1[i] = yData1[i] * 100
    }*/
    let option = {
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: 'shadow',
          label: {
            show: true,
            backgroundColor: '#7B7DDC'
          }
        },
        formatter: "{b}<br/>合格率：{c}%"
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
          data: xData,
          axisTick: {
            show: false
          },
          axisLabel: {
            color: "#fff",
            fontSize: 10,
          },
          axisLine: {
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
          name: "合格率(%)",
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
          name: "农残检测",
          type: "line",
          yAxisIndex: 0,
          symbolSize: 4,
          smooth: true,
          itemStyle: {
            normal: {
              color: "#E4C13D"
            }
          },
          data: yData1
        }
      ]
    };
    myChart.setOption(option);
    changeSize(myChart)
    return myChart;
  },
  //投诉意见排行
  EchartsSourceComplaintChart: function(container, dataX, dataY) {
    let myChart = echarts.init(document.getElementById(container));
    var sourceComplaintDataY = dataY;
    let sourceComplaintDataX = dataX;
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
        formatter: "投诉意见次数<br/>{b}：{c}次"
      },
      grid: {
        top: "18%",
        left: "7%",
        right: "3%",
        bottom: "3%",
        containLabel: true
      },
      xAxis: [
        {
          type: "category",
          data: sourceComplaintDataX,
          axisTick: {
            show: false
          },
          axisLabel: {
            interval: 0,
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
          name: "投诉意见排行",
          barMaxWidth: "30%",
          type: "bar",
          // type: "pictorialBar",
          // symbol: "path://M250 150 L150 350 L350 350 Z",
          // symbolClip: true,
          itemStyle: {
            normal: {
              color: "#50CB78"
              // color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              //   offset: 0,
              //   color: '#C3FFB6' // 0% 处的颜色
              // }, {
              //   offset: 1,
              //   color: '#50CB78' // 100% 处的颜色
              // }], false),
            }
          },
          data: sourceComplaintDataY
        }
      ]
    };
    myChart.setOption(option);
    changeSize(myChart)
    return myChart;
  },
/*
  //地图数据处理
  convertData:function(data) {
    // 地图数据
    let geoCoordMap = {
      "海门": [121.15, 31.89],
      "鄂尔多斯": [109.781327, 39.608266],
      "招远": [120.38, 37.35],
      "舟山": [122.207216, 29.985295],
      "齐齐哈尔": [123.97, 47.33],
      "盐城": [120.13, 33.38],
      "赤峰": [118.87, 42.28],
      "青岛": [120.33, 36.07],
      "乳山": [121.52, 36.89],
      "金昌": [102.188043, 38.520089],
      "泉州": [118.58, 24.93],
      "莱西": [120.53, 36.86],
      "日照": [119.46, 35.42],
      "胶南": [119.97, 35.88],
      "南通": [121.05, 32.08],
      "拉萨": [91.11, 29.97],
      "云浮": [112.02, 22.93],
      "梅州": [116.1, 24.55],
      "文登": [122.05, 37.2],
      "上海": [121.48, 31.22],
      "攀枝花": [101.718637, 26.582347],
      "威海": [122.1, 37.5],
      "承德": [117.93, 40.97],
      "厦门": [118.1, 24.46],
      "汕尾": [115.375279, 22.786211],
      "潮州": [116.63, 23.68],
      "丹东": [124.37, 40.13],
      "太仓": [121.1, 31.45],
      "曲靖": [103.79, 25.51],
      "烟台": [121.39, 37.52],
      "福州": [119.3, 26.08],
      "瓦房店": [121.979603, 39.627114],
      "即墨": [120.45, 36.38],
      "抚顺": [123.97, 41.97],
      "玉溪": [102.52, 24.35],
      "张家口": [114.87, 40.82],
      "阳泉": [113.57, 37.85],
      "莱州": [119.942327, 37.177017],
      "湖州": [120.1, 30.86],
      "汕头": [116.69, 23.39],
      "昆山": [120.95, 31.39],
      "宁波": [121.56, 29.86],
      "湛江": [110.359377, 21.270708],
      "揭阳": [116.35, 23.55],
      "荣成": [122.41, 37.16],
      "连云港": [119.16, 34.59],
      "葫芦岛": [120.836932, 40.711052],
      "常熟": [120.74, 31.64],
      "东莞": [113.75, 23.04],
      "河源": [114.68, 23.73],
      "淮安": [119.15, 33.5],
      "泰州": [119.9, 32.49],
      "南宁": [108.33, 22.84],
      "营口": [122.18, 40.65],
      "惠州": [114.4, 23.09],
      "江阴": [120.26, 31.91],
      "蓬莱": [120.75, 37.8],
      "韶关": [113.62, 24.84],
      "嘉峪关": [98.289152, 39.77313],
      "广州": [113.23, 23.16],
      "延安": [109.47, 36.6],
      "太原": [112.53, 37.87],
      "清远": [113.01, 23.7],
      "中山": [113.38, 22.52],
      "昆明": [102.73, 25.04],
      "寿光": [118.73, 36.86],
      "盘锦": [122.070714, 41.119997],
      "长治": [113.08, 36.18],
      "深圳": [114.07, 22.62],
      "珠海": [113.52, 22.3],
      "宿迁": [118.3, 33.96],
      "咸阳": [108.72, 34.36],
      "铜川": [109.11, 35.09],
      "平度": [119.97, 36.77],
      "佛山": [113.11, 23.05],
      "海口": [110.35, 20.02],
      "江门": [113.06, 22.61],
      "章丘": [117.53, 36.72],
      "肇庆": [112.44, 23.05],
      "大连": [121.62, 38.92],
      "临汾": [111.5, 36.08],
      "吴江": [120.63, 31.16],
      "石嘴山": [106.39, 39.04],
      "沈阳": [123.38, 41.8],
      "苏州": [120.62, 31.32],
      "茂名": [110.88, 21.68],
      "嘉兴": [120.76, 30.77],
      "长春": [125.35, 43.88],
      "胶州": [120.03336, 36.264622],
      "银川": [106.27, 38.47],
      "张家港": [120.555821, 31.875428],
      "三门峡": [111.19, 34.76],
      "锦州": [121.15, 41.13],
      "南昌": [115.89, 28.68],
      "柳州": [109.4, 24.33],
      "三亚": [109.511909, 18.252847],
      "自贡": [104.778442, 29.33903],
      "吉林": [126.57, 43.87],
      "阳江": [111.95, 21.85],
      "泸州": [105.39, 28.91],
      "西宁": [101.74, 36.56],
      "宜宾": [104.56, 29.77],
      "呼和浩特": [111.65, 40.82],
      "成都": [104.06, 30.67],
      "大同": [113.3, 40.12],
      "镇江": [119.44, 32.2],
      "桂林": [110.28, 25.29],
      "张家界": [110.479191, 29.117096],
      "宜兴": [119.82, 31.36],
      "北海": [109.12, 21.49],
      "西安": [108.95, 34.27],
      "金坛": [119.56, 31.74],
      "东营": [118.49, 37.46],
      "牡丹江": [129.58, 44.6],
      "遵义": [106.9, 27.7],
      "绍兴": [120.58, 30.01],
      "扬州": [119.42, 32.39],
      "常州": [119.95, 31.79],
      "潍坊": [119.1, 36.62],
      "重庆": [106.54, 29.59],
      "台州": [121.420757, 28.656386],
      "南京": [118.78, 32.04],
      "滨州": [118.03, 37.36],
      "贵阳": [106.71, 26.57],
      "无锡": [120.29, 31.59],
      "本溪": [123.73, 41.3],
      "克拉玛依": [84.77, 45.59],
      "渭南": [109.5, 34.52],
      "马鞍山": [118.48, 31.56],
      "宝鸡": [107.15, 34.38],
      "焦作": [113.21, 35.24],
      "句容": [119.16, 31.95],
      "北京": [116.46, 39.92],
      "徐州": [117.2, 34.26],
      "衡水": [115.72, 37.72],
      "包头": [110, 40.58],
      "绵阳": [104.73, 31.48],
      "乌鲁木齐": [87.68, 43.77],
      "枣庄": [117.57, 34.86],
      "杭州": [120.19, 30.26],
      "淄博": [118.05, 36.78],
      "鞍山": [122.85, 41.12],
      "溧阳": [119.48, 31.43],
      "库尔勒": [86.06, 41.68],
      "安阳": [114.35, 36.1],
      "开封": [114.35, 34.79],
      "济南": [117, 36.65],
      "德阳": [104.37, 31.13],
      "温州": [120.65, 28.01],
      "九江": [115.97, 29.71],
      "邯郸": [114.47, 36.6],
      "临安": [119.72, 30.23],
      "兰州": [103.73, 36.03],
      "沧州": [116.83, 38.33],
      "临沂": [118.35, 35.05],
      "南充": [106.110698, 30.837793],
      "天津": [117.2, 39.13],
      "富阳": [119.95, 30.07],
      "泰安": [117.13, 36.18],
      "诸暨": [120.23, 29.71],
      "郑州": [113.65, 34.76],
      "哈尔滨": [126.63, 45.75],
      "聊城": [115.97, 36.45],
      "芜湖": [118.38, 31.33],
      "唐山": [118.02, 39.63],
      "平顶山": [113.29, 33.75],
      "邢台": [114.48, 37.05],
      "德州": [116.29, 37.45],
      "济宁": [116.59, 35.38],
      "荆州": [112.239741, 30.335165],
      "宜昌": [111.3, 30.7],
      "义乌": [120.06, 29.32],
      "丽水": [119.92, 28.45],
      "洛阳": [112.44, 34.7],
      "秦皇岛": [119.57, 39.95],
      "株洲": [113.16, 27.83],
      "石家庄": [114.48, 38.03],
      "莱芜": [117.67, 36.19],
      "常德": [111.69, 29.05],
      "保定": [115.48, 38.85],
      "湘潭": [112.91, 27.87],
      "金华": [119.64, 29.12],
      "岳阳": [113.09, 29.37],
      "长沙": [113, 28.21],
      "衢州": [118.88, 28.97],
      "廊坊": [116.7, 39.53],
      "菏泽": [115.480656, 35.23375],
      "合肥": [117.27, 31.86],
      "武汉": [114.31, 30.52],
      "大庆": [125.03, 46.58]
    };
    let res = [];
    for (let i = 0; i < data.length; i++) {
      let geoCoord = geoCoordMap[data[i].name];
      if (geoCoord) {
        res.push({
          name: data[i].name,
          value: geoCoord.concat(data[i].value)
        });
      }
    }
    return res;
  },*/
  //初始化中国地图
  initChartsChina:function (container) {
    var data = [

      {
        name: '南京'
      }, {
        name: '长沙'
      }, {
        name: '杭州'
      }, {
        name: '合肥'
      },{
        name: '安徽'
      }

    ];


    var geoCoordMap = {
      '南京': [118.800697,32.078604],
      '长沙': [112.898902,28.232599],
      '杭州': [120.142496,30.296248],
      '合肥': [117.355898,31.845966],
      '安徽': [118.359513,31.748244]

    };
    var planePath = 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z';

    var dataFrom = '安徽';
    var convertData = function(data) {
      var res = [];

      for (var i = 0; i < data.length; i++) {
        var geoCoord = geoCoordMap[data[i].name];

        if (geoCoord) {
          res.push({
            name: data[i].name,
            value: geoCoord.concat(data[i].value)
          });
        }
      }

      return res;
    };

    let myChart = echarts.init(document.getElementById(container));
    let option= {
      visualMap: {
        show: false,
        min: 0,
        max: 100,
        left: 'left',
        top: 'bottom',
        text: ['高', '低'],
        calculable: true,
        inRange: {
          color: ['#04387b', '#467bc0'] // 蓝绿
        }
        // inRange: {
        //   color: ['#ffffff', '#E0DAFF', '#ADBFFF', '#9CB4FF', '#6A9DFF', '#3889FF']
        // }
      },
      geo: {
        map: 'china',
        zoom: 1.2,
        label: {
          normal: {
            show: true,
            textStyle: {
              fontSize: 10,
              color: '#fff'
            }
          },
          emphasis: {
            show: false,
            color: '#292929'
          }
        },
        roam: true,
        itemStyle: {
          normal: {
            areaColor: '#023677',
            borderColor: '#17bfdc',
            width: 2,
            textStyle: {
              fontSize: 10,
              color: '#fff'
            }
          },
          emphasis: {
            areaColor: '#4499d0',
          }
        }
      },
      series: [
        {
          name: '安徽',
          type: 'lines',
          zlevel: 2,
          symbolSize: 10,
          effect: {
            show: true,
            period: 6,
            symbol: planePath,
            trailLength: 0,
            symbolSize: 15

          },
          label: {
            normal: {
              textStyle: {
                fontSize: 10,
                color: '#fff'
              }
            }
          },
          lineStyle: {
            normal: {
              color:'#ffff00',
              width: 2,
              opacity:0.5,
              curveness:0.2
            }
          },
          data: data.map(function (dataItem) {
            return {
              fromName: dataFrom,
              toName: dataItem.name,
              coords: [
                geoCoordMap[dataFrom],
                geoCoordMap[dataItem.name]
              ]
            }
          })
        },{
          name: '质量溯源',
          type: 'effectScatter',
          coordinateSystem: 'geo',
          data: convertData(data),
          symbolSize: 8,
          showEffectOn: 'render',
          rippleEffect: {
            scale: 5,
            brushType: 'stroke'
          },
          hoverAnimation: true,
          label: {
            normal: {
              formatter: '{b}',
              position: 'right',
              show: true,
              textStyle: {
                fontSize: 10,
                color: '#fff'
              }
            },
            emphasis: {
              show: true
            }
          },
          itemStyle: {
            normal: {
              color: '#ffff00',
              shadowBlur: 20,
              shadowColor: '#fff'
            }
          }
        }, {
          type: 'map',
          mapType: 'china',
          geoIndex: 0,
          label: {
            emphasis: {
              show: true
            },
            normal: {
              textStyle: {
                fontSize: 10,
                color: '#fff'
              }
            }

          },
          data: [
           {
            name: '北京',
            value: randomData()
          }, {
            name: '天津',
            value: randomData()
          }, {
            name: '上海',
            value: randomData()
          }, {
            name: '重庆',
            value: randomData()
          }, {
            name: '河北',
            value: randomData()
          }, {
            name: '河南',
            value: randomData()
          }, {
            name: '云南',
            value: randomData()
          }, {
            name: '辽宁',
            value: randomData()
          }, {
            name: '黑龙江',
            value: randomData()
          }, {
            name: '湖南',
            value: randomData()
          }, {
            name: '安徽',
            value: randomData()
          }, {
            name: '山东',
            value: randomData()
          }, {
            name: '新疆',
            value: randomData()
          }, {
            name: '江苏',
            value: randomData()
          }, {
            name: '浙江',
            value: randomData()
          }, {
            name: '江西',
            value: randomData()
          }, {
            name: '湖北',
            value: randomData()
          }, {
            name: '广西',
            value: randomData()
          }, {
            name: '甘肃',
            value: randomData()
          }, {
            name: '山西',
            value: randomData()
          }, {
            name: '内蒙古',
            value: randomData()
          }, {
            name: '陕西',
            value: randomData()
          }, {
            name: '吉林',
            value: randomData()
          }, {
            name: '福建',
            value: randomData()
          }, {
            name: '贵州',
            value: randomData()
          }, {
            name: '广东',
            value: randomData()
          }, {
            name: '青海',
            value: randomData()
          }, {
            name: '西藏',
            value: randomData()
          }, {
            name: '四川',
            value: randomData()
          }, {
            name: '宁夏',
            value: randomData()
          }, {
            name: '海南',
            value: randomData()
          }, {
            name: '台湾',
            value: randomData()
          }, {
            name: '香港',
            value: randomData()
          }, {
            name: '澳门',
            value: randomData()
          }]
        }]
    }
    myChart.setOption(option);
    changeSize(myChart)
    return myChart;
  },

  /*//溯源企业排行  柱状图加折线图
  EchartsGeographyRankingChart: function(container, timeData, traceCodeData, scanTimesData) {
    let myChart = echarts.init(document.getElementById(container));
    var xData = (function() {
      return timeData;
    })();
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
        formatter: "{b}<br/>扫码次数：{c}次",
      },
      grid: {
        top: "18%",
        left: "5%",
        right: "3%",
        bottom: "3%",
        containLabel: true
      },
      xAxis: [
        {
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
        }
      ],
      yAxis: [
        {
          name: "扫码次数(次)",
          nameTextStyle: {
            padding: [0, 0, -8, -24]
          },
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

      series: [
        {
          name: "扫码次数",
          type: "bar",
          stack: "总量",
          barMaxWidth: "30%",
          itemStyle: {
            normal: {
              color: "rgba(255,144,128,1)"
            },
          },
          data: scanTimesData
        },
      ]
    };
    myChart.setOption(option);
    return myChart;
  },

  //溯源产品排行  柱状图
  EchartsGeographyMessageChart: function(container, dataX, dataY) {
    let myChart = echarts.init(document.getElementById(container));
    var geographyHouseNumDataY = dataY;
    let geographyHouseNumDataX = dataX;
    let option = {
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: 'shadow',
          label: {
            show: true,
            backgroundColor: '#7B7DDC'
          }
        },
        formatter: "{b}<br/>扫码次数：{c}次"
      },
      grid: {
        top: "18%",
        left: "5%",
        right: "3%",
        bottom: "3%",
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
          name: "扫码次数(次)",
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
              // color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              //   offset: 0,
              //   color: '#C3FFB6' // 0% 处的颜色
              // }, {
              //   offset: 1,
              //   color: '#50CB78' // 100% 处的颜色
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
  //投诉统计
  EchartsGeographyComplaintChart: function (container, dataX, dataY) {
   let myChart = echarts.init(document.getElementById(container));
   var geographyHouseNumDataY = dataY;
   let geographyHouseNumDataX = dataX;
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
       formatter: "{b}<br/>投诉次数：{c}次",
     },
     grid: {
       top: "18%",
       left: "5%",
       right: "3%",
       bottom: "3%",
       containLabel: true
     },
     xAxis: [{
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
     }],
     yAxis: [{
       type: "value",
       name: "投诉次数(次)",
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
     }],

     series: [{
       name: "人数统计",
       barMaxWidth: "30%",
       type: "bar",
       // type: "pictorialBar",
       symbol: "path://M250 150 L150 350 L350 350 Z",
       symbolClip: true,
       itemStyle: {
         normal: {
           color: "#50CB78"
           // color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
           //   offset: 0,
           //   color: '#C3FFB6' // 0% 处的颜色
           // }, {
           //   offset: 1,
           //   color: '#50CB78' // 100% 处的颜色
           // }], false),
         }
       },
       data: geographyHouseNumDataY
     }]
   };
   myChart.setOption(option);
   return myChart;
  },
  //溯源码统计弹窗  柱状图
  EchartsTraceCodeCountChart: function(container, data) {
    let myChart = echarts.init(document.getElementById(container));
    let geographyHouseNumDataY = data.map(ele => ele.traceCodeCount);
    let geographyHouseNumDataX = data.map(ele => ele.name);
    let option = {
      tooltip: {
        trigger: "item",
        formatter: "{b}<br/>{c}次"
      },
      grid: {
        top: "18%",
        left: "5%",
        right: "3%",
        bottom: "3%",
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
          name: "扫码次数(次)",
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
              // color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              //   offset: 0,
              //   color: '#C3FFB6' // 0% 处的颜色
              // }, {
              //   offset: 1,
              //   color: '#50CB78' // 100% 处的颜色
              // }], false),
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
