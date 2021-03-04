import echarts from "echarts";

import changeSize from '@/util/changeSize';

export default {
  //*******生产种植数据*******
  //生产类型占比
  EchartsPlantTypeChart: function (container, data) {
    let myChart = echarts.init(document.getElementById(container));
    var plantTypeData = data;
    let plantTypeColor = ['#1890FF', '#41D9C7', '#2FC25B', '#FACC14', '#E6965C', '#5C8EE6', '#13C2C2', '#5CA3E6', '#B381E6', '#F04864', '#D598D9',]
    let option = {
      color: plantTypeColor,
      tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b}: {c}亩 ({d}%)"
      },
      legend: {
        show: false,
        orient: "vertical",
        top: "middle",
        left: "55%",
        textStyle: {
          color: "#f2f2f2",
          fontSize: 12
        },
        icon: "roundRect",
        data: plantTypeData
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
          name: "种类面积占比",
          data: plantTypeData
        },
      ]
    };
    myChart.setOption(option);
    changeSize(myChart)
    return myChart;
  },
  //历年养殖趋势
  EchartsPlantCropsChart: function (container, dataX, dataY1, dataY2) {
    let myChart = echarts.init(document.getElementById(container));
    var plantCropsX = dataX;
    var plantCropsY1 = dataY1;
    var plantCropsY2 = dataY2;
    let option = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
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
          data: plantCropsX,
          axisTick: {
            show: false
          },
          axisLabel: {
            color: "#fff",
            fontSize:10,
            interval: 0,
            rotate: 30
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
          name: "产量(吨)",
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
          name: "面积(头、只)",
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

      series: [
        {
          name: "产量(吨)",
          barMaxWidth: "30%",
          type: "bar",
          itemStyle: {
            normal: {
              color: "#41D9C7"
            }
          },
          data: plantCropsY1
        },
        {
          name: "面积((头、只))",
          // barMaxWidth: "30%",
          type: "line",
          yAxisIndex: 1,
          smooth: true,
          // type: "pictorialBar",
          // symbol: "path://M250 150 L150 350 L350 350 Z",
          // symbolClip: true,
          itemStyle: {
            normal: {
              color: "#FACC14"
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
  //主要品种面积   家禽 柱状图
  EchartsPlantImportantAreaPoultryChart: function (container, dataX, dataY) {
    let myChart = echarts.init(document.getElementById(container));
    let plantImportantAreaPoultryDataY = dataY
    let plantImportantAreaPoultryDataX = dataX;
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
        formatter: "{b}<br/>数量(头、只)：{c}"
      },
      grid: {
        left: "2%",
        right: "5%",
        bottom: "3%",
        top: "20px",
        containLabel: true
      },
      xAxis: [{
        type: "category",
        data: plantImportantAreaPoultryDataX,
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
        }
      }],
      yAxis: [{
        type: "value",
        name: "数量(头、只)",
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
        name: "主要品种面积",
        barMaxWidth: "30%",
        type: "bar",
        // type: "pictorialBar",
        // symbol: "path://M250 150 L150 350 L350 350 Z",
        // symbolClip: true,
        itemStyle: {
          normal: {
            color: "#1890FF"
          }
        },
        data: plantImportantAreaPoultryDataY
      }]
    };
    myChart.setOption(option);
    changeSize(myChart)
    return myChart;
  },
  //主要品种面积   种植 折线图
  EchartsPlantImportantAreaPlantChart: function (container, dataX, dataY) {
    let myChart = echarts.init(document.getElementById(container));
    let plantImportantAreaPlantDataY = dataY
    let plantImportantAreaPlantDataX = dataX;
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
        left: "2%",
        right: "5%",
        bottom: "3%",
        top: "20px",
        containLabel: true
      },
      xAxis: [{
        type: "category",
        data: plantImportantAreaPlantDataX,
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
        name: "主要品种面积",
        barMaxWidth: "30%",
        type: "bar",
        // type: "pictorialBar",
        // symbol: "path://M250 150 L150 350 L350 350 Z",
        // symbolClip: true,
        itemStyle: {
          normal: {
            color: "#50CB78"
          }
        },
        data: plantImportantAreaPlantDataY
      }]
    };
    myChart.setOption(option);
    changeSize(myChart)
    return myChart;
  },
  //历年种植趋势
  EchartsPlantHistoryChart: function(container, data) {
    let myChart = echarts.init(document.getElementById(container));
    let option = {
      color: ["#57bbf7", "#ffc969", "#f38b97", "#b1d882", "#c0acf9", "#ff6900"],
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
            showHtm += data[i].marker+data[i].seriesName+":"+data[i].value +"亩<br/>" ;
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
        itemWidth: 10, // 设置宽度
        itemHeight: 5 // 设置高度
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
          name: "面积(亩)",
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
  //乡镇种植趋势 蔬菜
  EchartsPlantTownShipVegetablesChart: function (container, dataX, dataY1, dataY2) {
    let myChart = echarts.init(document.getElementById(container));
    var plantVegetablesX = dataX;
    var plantVegetablesY1 = dataY1;
    var plantVegetablesY2 = dataY2;
    let option = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
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
        bottom: "5%",
        containLabel: true
      },
      xAxis: [
        {
          type: "category",
          data: plantVegetablesX,
          axisTick: {
            show: false
          },
          axisLabel: {
            color: "#fff",
            fontSize:10,
            interval: 0,
            rotate: 0
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
          name: "产量(吨)",
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

      series: [
        {
          name: "产量(吨)",
          barMaxWidth: "30%",
          type: "bar",
          itemStyle: {
            normal: {
              color: "#41D9C7"
            }
          },
          data: plantVegetablesY2
        },
        {
          name: "面积(亩)",
          // barMaxWidth: "30%",
          type: "line",
          smooth: true,
          yAxisIndex: 1,
          // type: "pictorialBar",
          // symbol: "path://M250 150 L150 350 L350 350 Z",
          // symbolClip: true,
          itemStyle: {
            normal: {
              color: "#E4C13D"
            }
          },
          data: plantVegetablesY1
        }
      ]
    };
    myChart.setOption(option);
    changeSize(myChart)
    return myChart;
  },
  //乡镇种植趋势 粮食
  EchartsPlantTownShipFoodChart: function (container, dataX, dataY1, dataY2) {
    let myChart = echarts.init(document.getElementById(container));
    var plantFoodX = dataX;
    var plantFoodY1 = dataY1;
    var plantFoodY2 = dataY2;
    let option = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
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
        bottom: "5%",
        containLabel: true
      },
      xAxis: [
        {
          type: "category",
          data: plantFoodX,
          axisTick: {
            show: false
          },
          axisLabel: {
            color: "#fff",
            fontSize:10,
            interval: 0,
            rotate: 0
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
          name: "产量(吨)",
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

      series: [
        {
          name: "产量(吨)",
          barMaxWidth: "30%",
          type: "bar",
          itemStyle: {
            normal: {
              color: "#1890FF"
            }
          },
          data: plantFoodY2
        },
        {
          name: "面积(亩)",
          // barMaxWidth: "30%",
          type: "line",
          smooth: true,
          yAxisIndex: 1,
          // type: "pictorialBar",
          // symbol: "path://M250 150 L150 350 L350 350 Z",
          // symbolClip: true,
          itemStyle: {
            normal: {
              color: "#E4C13D"
            }
          },
          data: plantFoodY1
        }
      ]
    };
    myChart.setOption(option);
    changeSize(myChart)
    return myChart;
  },
  //主要品种产量
  EchartsPlantImportantChart: function (container, data) {
    let myChart = echarts.init(document.getElementById(container));
    var plantImportantData = data;
    let plantImportantColor = ['#1890FF', '#41D9C7', '#2FC25B', '#FACC14', '#E6965C', '#5C8EE6', '#13C2C2', '#5CA3E6','#1890FF', '#41D9C7', '#2FC25B', '#FACC14', '#E6965C', '#5C8EE6', '#13C2C2', '#5CA3E6']
    let option = {
      color: plantImportantColor,
      tooltip: {
        trigger: "item",
        formatter: "{b}<br>{a}:{c}吨 ({d}%)"
      },
      legend: {
        show: false,
        orient: "vertical",
        top: "middle",
        left: "55%",
        textStyle: {
          color: "#f2f2f2",
          fontSize: 12
        },
        icon: "roundRect",
        data: plantImportantData
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
          name: "产量",
          data: plantImportantData
        },
      ]
    };
    myChart.setOption(option);
    changeSize(myChart)
    return myChart;
  },
  /*//历年平均产量趋势 柱状图
  EchartsPlantHistoryAreaChart: function(container, dataX, dataY) {
    let myChart = echarts.init(document.getElementById(container));
    var plantTownShipDataY = dataY;
    let plantTownShipDataX = dataX;
    let option = {
      // tooltip: {
      //   trigger: "item",
      //   formatter: "{b}<br/>平均产量：{c}吨"
      // },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow',
          label: {
            show: true,
            backgroundColor: '#7B7DDC'
          }
        },
        formatter: "{b}<br/>平均产量：{c}吨"
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
          data: plantTownShipDataX,
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
          name: "平均产量(吨)",
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
          name: "平均产量",
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
          data: plantTownShipDataY
        }
      ]
    };
    myChart.setOption(option);
    return myChart;
  },*/
  /*//历年产量趋势 柱状图
  EchartsPlantHistoryOutputChart: function(container, dataX, dataY) {
    let myChart = echarts.init(document.getElementById(container));
    let plantHistoryAreaDataY = dataY;
    let plantHistoryAreaDataX = dataX;
    let nameY = "产量(吨)"
    for (let i = 0; i < plantHistoryAreaDataY.length; i++) {
      if (plantHistoryAreaDataY[i] > 10000) {
        plantHistoryAreaDataY[i] = (plantHistoryAreaDataY[i] / 10000).toFixed(2);
        nameY = "产量(万吨)"
      }
    }
    let option = {
      // tooltip: {
      //   trigger: "item",
      //   // formatter: "{b}<br/>产量：{c}吨"
      //   formatter: function (params, ticket, callback) {
      //     let showHtm = "";
      //     showHtm = params.name + "<br>" + "产量：" + (params.value).toFixed(2) + "万吨";
      //     return showHtm;
      //   }
      // },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow',
          label: {
            show: true,
            backgroundColor: '#7B7DDC'
          }
        },
        formatter: "{b}<br/>产量：{c}万吨"
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
          name: nameY,
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
          name: "历年产量趋势",
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
  }*/
};
