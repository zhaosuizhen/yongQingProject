import echarts from "echarts";
import api from "../../request/visualiza1Api.js";

import changeSize from '@/util/changeSize';

export default {
  //*******病虫害数据*******
  //虫害投入品
  EchartsDiseasesInputs: function(container, data) {
    let myChart = echarts.init(document.getElementById(container));
    let option = {
      color: ["#57bbf7", "#ffc969", "#b1d882", "#41D9C7","#50CB78"],
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
            showHtm += data[i].marker+data[i].seriesName+":"+data[i].value +"吨<br/>" ;
          }
          return showHtm;
        },
      },
      grid: {
        left: "5%",
        right: "5%",
        bottom: "3%",
        top: "18%",
        containLabel: true
      },
      legend: {
        textStyle: {
          color: '#fff'
        },
        right:"5%",
        top: '2%',
        icon: "circle",   //  这个字段控制形状  类型包括 circle，rect ，roundRect，triangle，diamond，pin，arrow，none
        itemWidth: 10,  // 设置宽度
        itemHeight: 10, // 设置高度
        // itemGap: 10 // 设置间距
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
            fontSize: 10,
            rotate: 0,
            /*formatter: function (value) {
              return (value.length > 1 ? (value.slice(0,2)+"...") : value )
            },*/
          },
          axisLine: {
            // show: false,
            lineStyle: {
              color: "#7195ae",
              fontSize: 10
            },
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
              color: "#7195ae"
            }
          }
        }
      ],

      series: data.type,
      barMaxWidth: '20%'
    };
    myChart.setOption(option);
    changeSize(myChart)
    return myChart;
    // let myChart = echarts.init(document.getElementById(container));
    // var plantTypeData = data;
    // let plantTypeColor = [
    //   "#A0CE3A",
    //   "#31C5C0",
    //   "#1E9BD1",
    //   "#0F347B",
    //   "#585247",
    //   "#7F6AAD",
    //   "#009D85",
    //   "rgba(250,250,250,0.3)"
    // ];
    // let option = {
    //   color: plantTypeColor,
    //   // title: {
    //   //   text: '总数',
    //   //   subtext: 7789,
    //   //   textStyle: {
    //   //     color: '#f2f2f2',
    //   //     fontSize: 40,
    //   //     // align: 'center'
    //   //   },
    //   //   subtextStyle: {
    //   //     fontSize: 12,
    //   //     color: ['#ff9d19']
    //   //   },
    //   //   x: 'center',
    //   //   y: 'center',
    //   // },
    //   tooltip: {
    //     trigger: "item",
    //     formatter: "{b}<br/>{c}次"
    //   },
    //   grid: {
    //     bottom: "",
    //     left: "10%"
    //   },
    //   legend: {
    //     orient: "vertical",
    //     top: "middle",
    //     right: "15%",
    //     show: false,
    //     textStyle: {
    //       color: "#f2f2f2",
    //       fontSize: 12
    //     },
    //     icon: "roundRect",
    //     data: plantTypeData
    //   },
    //   series: [
    //     // 主要展示层的
    //     {
    //       radius: ["30%", "61%"],
    //       center: ["40%", "50%"],
    //       type: "pie",
    //       label: {
    //         normal: {
    //           show: true,
    //           // formatter: "{c}种",
    //           formatter: function(params, ticket, callback) {
    //             let showHtm = "";
    //             showHtm = params.name;
    //             return showHtm;
    //           },
    //           textStyle: {
    //             fontSize: 12
    //           },
    //           position: "outside"
    //         },
    //         emphasis: {
    //           show: true
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
    //       name: "种植类型",
    //       data: plantTypeData
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
  //植保防治趋势
  EchartsDiseasesTownshipChart: function(container, data, obj) {
    let myChart = echarts.init(document.getElementById(container));
    let diseasesTownshipDataY2 = data.defenseArea;
    let diseasesTownshipDataY1 = data.happenArea;
    let diseasesTownshipDataX = data.years;
    let option = {
      tooltip: {
        trigger: "axis",
        axisPointer: {
          // 坐标轴指示器，坐标轴触发有效
          type: "cross", // 默认为直线，可选为：'line' | 'shadow'
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
            showHtm += data[i].marker+data[i].seriesName+":"+data[i].value +"亩<br/>" ;
          }
          return showHtm;
        },
      },
      legend: {
        textStyle: {
          color: '#fff'
        },
        right:"center",
        top: '2%',
        itemWidth: 12,  // 设置宽度
        itemHeight: 8, // 设置高度
        // itemGap: 10 // 设置间距
      },
      grid: {
        left: "3%",
        right: "10%",
        bottom: "3%",
        top: "18%",
        containLabel: true
      },
      xAxis: [
        {
          type: "category",
          data: diseasesTownshipDataX,
          axisTick: {
            show: false
          },
          axisLabel: {
            color: "#fff",
            fontSize: 10,
            // rotate: 0,
            interval: 0,
            /*formatter: function (value) {
              return (value.length > 1 ? (value.slice(0,2)+"...") : value )
            },*/
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
          /*max: 500000,
          min: 0,*/
          nameTextStyle: {
            padding: [0, 0, -8,0],
            color: "#fff"
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            textStyle:{
              fontSize: 10,
              color:'#fff',  //坐标的字体颜色
            },
          },
          axisLine: {
            show: true,
            lineStyle: {
              type: 'solid',
              color: '#7195ae'
            },
          },
          splitLine: {
            lineStyle: {
              type: "double",
              color: "#7195ae"
            }
          }
        },
        {
          type: "value",
          name: "面积(亩)",
          /*max: 50000,
          min: 0,*/
          nameTextStyle: {
            padding: [0, 0, -8,0],
            color: "#fff"
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            show:true,
            textStyle:{
              fontSize: 10,
              color:'#fff',  //坐标的字体颜色
            },
          },
          axisLine: {
            show: true,
            lineStyle: {
              type: 'solid',
              color: '#7195ae'
            },
          },
          splitLine: {
            lineStyle: {
              type: "double",
              color: "#7195ae"
            }
          }
        },
      ],

      series: [{
        name: '防治面积',
        barMaxWidth: "30%",
        type: 'bar',
        itemStyle: {
          normal: {
            color: '#41D9C7',
          }
        },
        data: diseasesTownshipDataY2,
      },{
        name: '发生面积',
        type: 'line',
        itemStyle: {
          normal: {
            color: '#FACC14',
          }
        },
        data: diseasesTownshipDataY1,
    }]
    };
    myChart.setOption(option);

    myChart.on('click', function(params) {
      let name = parseInt(params.name);
      obj.yearVal = name
      //防治效果
      obj.$http
        .get(
          api.ip + "/web/april7/effect", {
            params:{
              effectYears: name
            }
          }
        )
        .then(
          res => {
            var importantAreaPlantDataX = [];
            var importantAreaPlantDataY1 = [];
            var importantAreaPlantDataY2 = [];
            res.data.data.map(item => {
              if (item != null) {
                if (item.name == null) {
                  item.name = "";
                }
                if (item.redeemLoss == null && item.redeemLoss != null) {
                  item.redeemLoss = "";
                }
                if (item.realityLoss == null && item.realityLoss != null) {
                  item.realityLoss = "";
                }
                importantAreaPlantDataX.push(item.name);
                importantAreaPlantDataY1.push(item.redeemLoss);
                importantAreaPlantDataY2.push(item.realityLoss);
              }
            });
            obj.initDiseasesTypeFiveChart(importantAreaPlantDataX, importantAreaPlantDataY1, importantAreaPlantDataY2);
          },
          err => {
            this.$message.error("防治效果数据请求失败！");
          }
        )
    });

    changeSize(myChart)
    return myChart;
  },
  //防治趋势
  EchartsDiseasesControlAreaChart: function(container, data) {
    let myChart = echarts.init(document.getElementById(container));
    var diseasesControlAreaDataY = data.controlArea;
    let diseasesControlAreaDataX = data.years;
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
          data: diseasesControlAreaDataX,
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
          name: "面积(万亩)",
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
          name: "防治趋势",
          barMaxWidth: "30%",
          type: "bar",
          itemStyle: {
            normal: {
              color: "#50CB78"
            }
          },
          data: diseasesControlAreaDataY
        }
      ]
    };
    myChart.setOption(option);
    changeSize(myChart)
    return myChart;
  },
  //病虫害防治
  EchartsDiseasesControlChart: function (container, data) {
    let myChart = echarts.init(document.getElementById(container));
    var diseasesControlData = data;
    let diseasesControlColor = ['#1890FF', '#41D9C7', '#2FC25B', '#FACC14', '#7564CC', '#8543E0', '#5C8EE6', '#13C2C2', '#5CA3E6', '#3436C7', '#B381E6', '#F04864', '#D598D9',]
    let option = {
      color: diseasesControlColor,
      tooltip: {
        trigger: "item",
        formatter: "{b}: {c}万亩 ({d}%)"
      },
      grid: {
        bottom: 150,
        left: 100,
        right: "10%"
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
        data: diseasesControlData
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
          name: "病虫害防治",
          data: diseasesControlData
        },
      ]
    };
    myChart.setOption(option);
    changeSize(myChart)
    return myChart;
  },
  //防治效果
  EchartsDiseasesTypeFiveChart: function(container, dataX, dataY1, dataY2) {
    var plantCropsX = dataX;
    var plantCropsY1 = dataY1;
    var plantCropsY2 = dataY2;
    let myChart = echarts.init(document.getElementById(container));
    let option = {
      tooltip: {
        trigger: "axis",
        axisPointer: {
          // 坐标轴指示器，坐标轴触发有效
          type: "cross", // 默认为直线，可选为：'line' | 'shadow'
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
            showHtm += data[i].marker+data[i].seriesName+":"+data[i].value +"吨<br/>" ;
          }
          return showHtm;
        },
      },
      legend: {
        textStyle: {
          color: '#fff'
        },
        right:"14%",
        top: '2%',
        icon: "circle",   //  这个字段控制形状  类型包括 circle，rect ，roundRect，triangle，diamond，pin，arrow，none
        itemWidth: 10,  // 设置宽度
        itemHeight: 10, // 设置高度
        // itemGap: 10 // 设置间距
      },
      grid: {
        left: "3%",
        right: "3%",
        bottom: "3%",
        top: "18%",
        containLabel: true
      },
      xAxis: [
        {
          type: "category",
          data: plantCropsX,
          axisTick: {
            show: false
          },
          axisLabel: {
            color: "#fff",
            fontSize:10,
            interval: 0,
            // rotate: 30
          },
          axisLine: {
            // show: false,
            lineStyle: {
              color: "#7195ae",
              fontSize: 10
            }
          },
          axisPointer: {
            type: 'shadow'
          }
        }
      ],
      yAxis: [
        {
          type: "value",
          name: "单位(吨)",
          /*max: 500000,
          min: 0,*/
          nameTextStyle: {
            padding: [0, 0, -8,0],
            color: "#fff"
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            textStyle:{
              fontSize: 10,
              color:'#fff',  //坐标的字体颜色
            },
          },
          axisLine: {
            show: true,
            lineStyle: {
              type: 'solid',
              color: '#7195ae'
            },
          },
          splitLine: {
            lineStyle: {
              type: "double",
              color: "#7195ae"
            }
          }
        },
        {
          type: "value",
          name: "单位(吨)",
          nameTextStyle: {
            padding: [0, 0, -8,0],
            color: "#fff"
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            show:true,
            textStyle:{
              fontSize: 10,
              color:'#fff',  //坐标的字体颜色
            },
          },
          axisLine: {
            show: true,
            lineStyle: {
              type: 'solid',
              color: '#7195ae'
            },
          },
          splitLine: {
            lineStyle: {
              type: "double",
              color: "#7195ae"
            }
          }
        },
      ],

      series: [
        {
          name: "挽回损失",
          barMaxWidth: "20%",
          type: "bar",
          barGap:'50%',//柱图间距
          itemStyle: {
            normal: {
              color: "#57bbf7"
            }
          },
          data: plantCropsY1
        },
        {
          name: "实际损失",
          // barMaxWidth: "30%",
          type: "bar",
          barMaxWidth: "20%",
          barGap:'50%',//柱图间距
          yAxisIndex: 1,
          smooth: true,
          itemStyle: {
            normal: {
              color: "#ffc969"
            }
          },
          data: plantCropsY2
        }
      ]
    };
    myChart.setOption(option);
    changeSize(myChart)
    return myChart;
  },
 /* //病虫害发生趋势 柱状图
  EchartsDiseasesHappenChart: function(container, data) {
    let myChart = echarts.init(document.getElementById(container));
    let option = {
      color: ["#57bbf7", "#ffc969", "#f38b97", "#b1d882", "#c0acf9"],
      // tooltip: {
      //   trigger: 'axis',
      //   axisPointer: {
      //     type: 'shadow',
      //     label: {
      //       show: true,
      //       backgroundColor: '#7B7DDC'
      //     }
      //   },
      //   formatter: "{b}<br/>次数：{c}次"
      // },
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
            showHtm += data[i].marker+data[i].seriesName+":"+data[i].value +"次<br/>" ;
          }
          return showHtm;
        },
      },
      legend: {
        show: false,
        textStyle: {
          fontSize: "12",
          color: "#fff"
        },
        top: "0%",
        icon: "circle", //  这个字段控制形状  类型包括 circle，rect ，roundRect，triangle，diamond，pin，arrow，none
        itemWidth: 10, // 设置宽度
        itemHeight: 5 // 设置高度
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
          // data: ['历阳镇', '白桥镇', '姥桥镇', '乌江镇', '石杨镇'],
          data: data.name,
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
          name: "次数(次)",
          nameTextStyle: {
            padding: [0, 0, -8, 0]
          },
          type: "value",
          splitLine: {
            lineStyle: {
              type: "dashed",
              color: "rgba(135,140,147,0.8)"
            }
          }, //设置横线样式
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
          }
        }
      ],
      series: data.type,
      barMaxWidth: 25
    };
    myChart.setOption(option);
    return myChart;
  },
  //病虫害上报趋势 柱状图
  EchartsDiseasesTrendChart: function(container, data) {
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
        formatter: "{b}<br/>上报次数：{c}次"
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
          name: "病虫害上报次数",
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
    return myChart;
  },
  //专家问诊记录 柱状图
  EchartsDiseasesInterrogaChart: function(container, data) {
    let myChart = echarts.init(document.getElementById(container));
    var plantHistoryAreaDataY = data.counts;
    let plantHistoryAreaDataX = data.year;
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
        formatter: "{b}<br/>专家问诊：{c}次"
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
          data: plantHistoryAreaDataX,
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
          name: "专家问诊",
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
          data: plantHistoryAreaDataY
        }
      ]
    };
    myChart.setOption(option);
    return myChart;
  },*/
};
