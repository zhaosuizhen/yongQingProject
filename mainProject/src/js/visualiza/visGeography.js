import echarts from "echarts";

import changeSize from '@/util/changeSize'

export default {
  // *******地理信息数据*******
  //土地类型统计   土地资源结构
  EchartsGeographyLandChart: function (container, data) {
    let myChart = echarts.init(document.getElementById(container));
    var geographyZiYuanData = data;
    // let geographyLandColor = ["#A0CE3A", "#31C5C0", "#1E9BD1", "#0F347B", "#585247", "#7F6AAD", "#009D85", "rgba(250,250,250,0.3)"];
    let geographyLandColor = ['#1890FF', '#41D9C7', '#2FC25B', '#FACC14', '#E6965C', '#5C8EE6', '#13C2C2', '#5CA3E6', '#B381E6', '#F04864', '#D598D9',]
    let option = {
      color: geographyLandColor,
      tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b}: {c}亩 ({d}%)"
      },
      // title: {
      //   text: '总数',
      //   subtext: 7789,
      //   textStyle: {
      //     color: '#f2f2f2',
      //     fontSize: 40,
      //     // align: 'center'
      //   },
      //   subtextStyle: {
      //     fontSize: 12,
      //     color: ['#ff9d19']
      //   },
      //   x: 'center',
      //   y: 'center',
      // },
      legend: {
        show: false,
        orient: "vertical",
        top: "middle",
        right: "10%",
        textStyle: {
          color: "#f2f2f2",
          fontSize: 12
        },
        icon: "roundRect",
        data: geographyZiYuanData
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
          name: "土地资源结构",
          data: geographyZiYuanData
        },
      ]
      /*series: [
        // 主要展示层的
        {
          radius: ["30%", "61%"],
          center: ["30%", "50%"],
          type: "pie",
          label: {
            normal: {
              show: true,
              formatter: "{d}%",
              textStyle: {
                fontSize: 10
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
              length: 10,
              length2: 10
            },
            emphasis: {
              show: true
            }
          },
          name: "土地资源结构",
          data: geographyZiYuanData
        },
        // 边框的设置
        {
          radius: ["30%", "34%"],
          center: ["30%", "50%"],
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
          center: ["30%", "50%"],
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
      ]*/
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
  //耕地面积占比
  EchartsGeographyGengdiChart: function (container, data) {
    let myChart = echarts.init(document.getElementById(container));
    var geographyGengdiData = data;
    let geographyLandColor = ['#1890FF', '#41D9C7', '#2FC25B', '#FACC14', '#7564CC', '#8543E0', '#5C8EE6', '#13C2C2', '#5CA3E6', '#3436C7', '#B381E6', '#F04864', '#D598D9'];;
    let option = {
      color: geographyLandColor,
      tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b}: {c}亩 ({d}%)"
      },
      legend: {
        show: false,
        orient: "vertical",
        top: "middle",
        right: "10%",
        textStyle: {
          color: "#f2f2f2",
          fontSize: 12
        },
        icon: "roundRect",
        data: geographyGengdiData
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
          name: "耕地面积",
          data: geographyGengdiData
        },
      ]
      /*series: [
        // 主要展示层的
        {
          radius: ["30%", "61%"],
          center: ["30%", "50%"],
          type: "pie",
          label: {
            normal: {
              show: true,
              formatter: "{d}%",
              textStyle: {
                fontSize: 10
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
              length: 10,
              length2: 10
            },
            emphasis: {
              show: true
            }
          },
          name: "耕地面积占比",
          data: geographyGengdiData
        },
        // 边框的设置
        {
          radius: ["30%", "34%"],
          center: ["30%", "50%"],
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
          center: ["30%", "50%"],
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
      ]*/
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
  //乡镇承包地块（数量）
  EchartsGeographyNumChart: function (container, dataX, dataY) {
    let myChart = echarts.init(document.getElementById(container));
    let geographyNumDataY = dataY
    let geographyNumDataX = dataX;
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
        formatter: "{b}<br/>地块数量：{c}块"
      },
      grid: {
        left: "5%",
        right: "5%",
        bottom: "5%",
        top: "15%",
        containLabel: true
      },
      xAxis: [{
        type: "category",
        data: geographyNumDataX,
        axisTick: {
          show: false
        },
        axisLabel: {
          color: "#fff",
          interval: 0,
          rotate: 0,
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
        name: "单位(块)",
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
        name: "乡镇承包地块",
        barMaxWidth: "30%",
        type: "bar",
        itemStyle: {
          normal: {
            color: "#1890FF"
          }
        },
        data: geographyNumDataY
      }]
    };
    myChart.setOption(option);
    changeSize(myChart)
    return myChart;
  },
  //乡镇承包地块（面积）
  EchartsGeographyAreasChart: function (container, dataX, dataY) {
    let myChart = echarts.init(document.getElementById(container));
    let geographyAreasDataY = dataY
    let geographyAreasDataX = dataX;
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
        formatter: "{b}<br/>地块面积：{c}亩"
      },
      grid: {
        left: "5%",
        right: "5%",
        bottom: "5%",
        top: "15%",
        containLabel: true
      },
      xAxis: [{
        type: "category",
        data: geographyAreasDataX,
        axisTick: {
          show: false
        },
        axisLabel: {
          color: "#fff",
          interval: 0,
          rotate: 0,
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
        name: "面积(亩)",
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
        name: "乡镇承包地块",
        barMaxWidth: "30%",
        type: "bar",
        itemStyle: {
          normal: {
            color: "#1890FF"
          }
        },
        data: geographyAreasDataY
      }]
    };
    myChart.setOption(option);
    changeSize(myChart)
    return myChart;
  },
  //乡镇耕地分布  柱状图
  EchartsGeographyHouseNumChart: function(container, dataX, dataY) {
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
        formatter: "{b}<br/>面积：{c}亩"
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
            color: "#fff",
            interval: 0,
            rotate: 0,
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
          name: "面积(亩)",
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
          name: "乡镇耕地分布",
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
          data: geographyHouseNumDataY
        }
      ]
    };
    myChart.setOption(option);
    changeSize(myChart)
    return myChart;
  },
  //耕地地力等级
  EchartsGeographyLevelsChart: function (container, data) {
    let myChart = echarts.init(document.getElementById(container));
    var geographyHouseNumDataY = data.areas;
    let geographyHouseNumDataX = data.levels;
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
        formatter: "{b}<br/>土地面积：{c}亩",
      },
      grid: {
        top: "18%",
        left: "5%",
        right: "5%",
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
            color: "#fff",
            interval: 0,
            rotate: 0,
            fontSize: 10,
          },
          axisLine: {
            // show: false,
            lineStyle: {
              color: "#7195ae",
              fontSize: 10
            }
          },
        }
      ],
      yAxis: [
        {
          type: "value",
          name: "面积(亩)",
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
          name: "面积",
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
          data: geographyHouseNumDataY
        }
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
  /*//台创园土地分布  柱状图
  EchartsGeographyTaiChuangYuanChart: function(container, dataX, dataY) {
    let myChart = echarts.init(document.getElementById(container));
    var geographyTaiChuangYuanDataY = dataY;
    let geographyTaiChuangYuanDataX = dataX;
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
        formatter: "{b}<br/>面积：{c}亩"
      },
      grid: {
        left: "8%",
        right: "5%",
        bottom: "3%",
        top: "18%",
        containLabel: true
      },
      xAxis: [
        {
          type: "category",
          data: geographyTaiChuangYuanDataX,
          axisTick: {
            show: false
          },
          axisLabel: {
            color: "#fff",
            interval: 0,
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
          name: "面积(亩)",
          nameTextStyle: {
            padding: [0, 0, -8, -24]
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
          name: "台创园土地分布",
          barMaxWidth: "30%",
          type: "bar",
          // type: "pictorialBar",
          // symbol: "path://M250 150 L150 350 L350 350 Z",
          // symbolClip: true,
          itemStyle: {
            normal: {
              color: "#E4C13D"
            }
          },
          data: geographyTaiChuangYuanDataY
        }
      ]
    };
    myChart.setOption(option);
    return myChart;
  },*/
  //监测点分布
  EchartsGeographyLutianChart: function(container, dataX, dataY) {
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
        formatter: "{b}<br/>监测面积：{c}亩"
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
            color: "#fff",
            interval: 0,
            rotate: 0,
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
          name: "面积(亩)",
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
          name: "大棚和大田占比",
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
          data: geographyHouseNumDataY
        }
      ]
    };
    myChart.setOption(option);
    changeSize(myChart)
    return myChart;
  },
  //土地类型环比  饼图
  EchartsGeographyHouseChart: function(container, data) {
    let myChart = echarts.init(document.getElementById(container));
    var geographyLandData = data;
    let geographyLandColor = [
      "#A0CE3A",
      "#31C5C0",
      "#1E9BD1",
      "#0F347B",
      "#585247",
      "#7F6AAD",
      "#009D85",
      "rgba(250,250,250,0.3)"
    ];
    let option = {
      color: geographyLandColor,
      tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b}: {c}亩 ({d}%)"
      },
      // title: {
      //   text: '总数',
      //   subtext: 7789,
      //   textStyle: {
      //     color: '#f2f2f2',
      //     fontSize: 40,
      //     // align: 'center'
      //   },
      //   subtextStyle: {
      //     fontSize: 12,
      //     color: ['#ff9d19']
      //   },
      //   x: 'center',
      //   y: 'center',
      // },
      grid: {
        bottom: 150,
        left: 100,
        right: "10%"
      },
      legend: {
        orient: "vertical",
        top: "middle",
        right: "15%",
        textStyle: {
          color: "#f2f2f2",
          fontSize: 12
        },
        icon: "roundRect",
        data: geographyLandData
      },
      series: [
        // 主要展示层的
        {
          radius: ["30%", "61%"],
          center: ["30%", "50%"],
          type: "pie",
          label: {
            normal: {
              show: true,
              formatter: "{d}%",
              textStyle: {
                fontSize: 10
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
              length: 10,
              length2: 10
            },
            emphasis: {
              show: true
            }
          },
          name: "温室类型",
          data: geographyLandData
        },
        // 边框的设置
        {
          radius: ["30%", "34%"],
          center: ["30%", "50%"],
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
          center: ["30%", "50%"],
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
    changeSize(myChart)
    return myChart;
  },

  //历年温室保有数量  柱状图
  /*EchartsGeographyHistoryNumChart: function(container, dataX, dataY) {
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
        formatter: "{b}<br/>温室数量：{c}个"
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
          name: "数量（个）",
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
        }
      ],

      series: [
        {
          name: "历年温室保有数量",
          barMaxWidth: "30%",
          type: "bar",
          // type: "pictorialBar",
          // symbol: "path://M250 150 L150 350 L350 350 Z",
          // symbolClip: true,
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
  }*/
};
