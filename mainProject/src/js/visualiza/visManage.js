import echarts from "echarts";

import changeSize from '@/util/changeSize'

export default {
  // *****经营主体数据*****

  // 主体类型
  EchartsManageZhuTiChart: function (container, data) {
    let myChart = echarts.init(document.getElementById(container));
    var manageZhuTiData = data;
    let manageZhuTiColor = ['#1890FF', '#41D9C7', '#2FC25B', '#FACC14', '#7564CC', '#8543E0', '#5C8EE6', '#13C2C2', '#5CA3E6', '#3436C7', '#B381E6', '#F04864', '#D598D9'];
    let option = {
      color: manageZhuTiColor,
      tooltip: {
        trigger: "item",
        formatter: "{b}: {c}个 ({d}%)"
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
        data: manageZhuTiData
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
          name: "主体类型",
          data: manageZhuTiData
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
  //经营类型
  EchartsManageJingYingChart: function(container, dataX, dataY) {
    let myChart = echarts.init(document.getElementById(container));
    let managJingYingDataY = dataY;
    let managJingYingDataX = dataX;
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
          data: managJingYingDataX,
          axisTick: {
            show: false
          },
          axisLabel: {
            color: "#fff",
            fontSize: 10,
            // rotate: 0,
            interval: 0,
            formatter: function (value) {
              return (value.length > 1 ? (value.slice(0,2)+"...") : value )
            },
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
          name: "企业类型占比",
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
          data: managJingYingDataY
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
  //历年企业增长数量  柱状图
  EchartsGeographyLastYearChart: function(container, data) {
    let myChart = echarts.init(document.getElementById(container));
    var geographyHouseNumDataY = data.counts;
    let geographyHouseNumDataX = data.year;
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
        formatter: "{b}<br/>企业数量：{c}个",
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
          name: "规模",
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
  },
  //乡镇主体分布  堆叠柱状图
  EchartsGeographyTownshipChart: function(container, data) {
    let myChart = echarts.init(document.getElementById(container));
    let option = {
      color: ['#1890FF', '#41D9C7', '#2FC25B', '#FACC14', '#7564CC', '#8543E0', '#5C8EE6', '#13C2C2', '#5CA3E6', '#3436C7', '#B381E6', '#F04864', '#D598D9'],
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
            showHtm += data[i].marker+data[i].seriesName+":"+data[i].value +"个<br/>" ;
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
        top: "18%",
        left: "5%",
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
          name: "数量(个)",
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
  //三品一标企业
  EchartsManageWgh: function(container, dataX, dataY) {
    let myChart = echarts.init(document.getElementById(container));
    var manageWghmDataX = dataX;
    var manageWghmDataY = dataY;
    let option = {
      /*tooltip: {
        trigger: "item",
        axisPointer: {
              type: 'shadow',
              label: {
                show: true,
                backgroundColor: '#7B7DDC'
              }
              },
        formatter: function(params, ticket, callback) {
          let showHtm = "";
          showHtm = "注册资金：" + Math.round(params.value)+ "万元";
          return showHtm;
        }
      },*/
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow',
          label: {
            show: true,
            backgroundColor: '#7B7DDC'
          }
        },
        formatter: "{b}<br/>产量：{c}吨",
      },
      grid: {
        top: "18%",
        left: "3%",
        right: "5%",
        bottom: "5%",
        containLabel: true
      },
      xAxis: [
        {
          type: "category",
          data: manageWghmDataX,
          axisTick: {
            show: false
          },
          axisLabel: {
            color: "#fff",
            /*interval: 0,
            rotate: 30,*/
            fontSize: 10,
            // rotate: 0,
            interval: 0,
            formatter: function (value) {
              return (value.length > 1 ? (value.slice(0,4)+"...") : value )
            },
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
          name: "产量(吨)",
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
          name: "产量",
          barMaxWidth: "30%",
          type: "bar",
          itemStyle: {
            normal: {
              color: "#50CB78"
            }
          },
          data: manageWghmDataY
        }
      ]
    };

    myChart.setOption(option);
    changeSize(myChart)
    return myChart;
  }
};
