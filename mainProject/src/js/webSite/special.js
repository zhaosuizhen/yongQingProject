import echarts from 'echarts';
import changeSize from '@/util/changeSize';

export default {
  //农业资源专题图表
  // 农业市场信息监测预警  饼图
  EchartsProductChart: function (container, data) {
    let myChart = echarts.init(document.getElementById(container));
    let colorList = ["#EAEA26", "#906BF9", "#FE5656", "#01E17E", "#3DD1F9", "#FFAD05","FF0042","#7BD339","#F5A115","#FFB600","#9367C4","#C46776","#EAEA26", "#906BF9", "#FE5656", "#01E17E", "#3DD1F9", "#FFAD05","FF0042","#7BD339","#F5A115","#FFB600","#9367C4","#C46776"];
    let productDataX = data;
    let legendData = data.map(ele => ele.name);
    let option = {
      tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
      },
      legend: {
        orient: 'vertical',
        x: '75%',
        y: 'center',
        data: legendData,
        itemWidth: 8,
        itemHeight: 8,
        itemGap: 16,
      },
      series: [{
        name: '生产经营主体数据',
        type: 'pie',
        center: ["35%", "53%"],
        radius: ['30%', '50%'],
        avoidLabelOverlap: false,
        // label: {
        //   normal: {
        //     show: false,
        //     position: 'center'
        //   },
        //   emphasis: {
        //     show: true,
        //     textStyle: {
        //       fontSize: '14',
        //       fontWeight: 'bold'
        //     }
        //   }
        // },
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
        itemStyle: {
          normal: {
            color: function (params) {
              return colorList[params.dataIndex]
            }
          }
        },

        data: productDataX
      }]
    };
    myChart.setOption(option);
    changeSize(myChart)
    return myChart;
  },

  //园区基本信息数据表 双柱状图
  EchartsInformationChart: function (container, data) {
    let myChart = echarts.init(document.getElementById(container));
    let InforDataX = data.map(ele => ele.years);
    let nameY = "占地面积(亩)"
    let legendInforData = ['占地面积'];
    // let InforDataY1 = data.map(ele => ele.counts);
    let InforDataY2 = data.map(ele => ele.area);
    for (let i = 0; i < InforDataY2.length; i++) {
      if (InforDataY2[i] > 10000) {
        InforDataY2[i] = (InforDataY2[i] / 10000).toFixed(2);
        nameY = "占地面积(万亩)"
      }
    }
    var InforColor = new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
      offset: 0,
      color: '#DEEEDD'
    }, {
      offset: 1,
      color: '#DEEEDD'
    }]);
    var InforColor2 = new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
      offset: 0,
      color: '#87D281'
    }, {
      offset: 1,
      color: '#47A440'
    }]);
    let option = {
      title: {
        // text: '2016年12月长宁区合规成本分析'
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
          type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        },
        formatter: "{b}<br/>占地面积：{c}万亩",
      },
      // legend: {
      //   // show:true,
      //   itemWidth: 8,
      //   itemHeight: 8,
      //   data: legendInforData,
      //   align: 'right',
      //   right: '5%',
      //   top: '5%',
      //   textStyle: {
      //     color: '#000'
      //   },
      // },
      grid: {
        left: '6%',
        right: '5%',
        top: '15%',
        bottom: '5%',
        containLabel: true
      },
      calculable: true,
      xAxis: [{
        type: 'category',
        axisLabel: {
          textStyle: {
            fontSize: 10,
            color: '#666'
          }
        },
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        // splitLine: {
        //     lineStyle: {
        //         type: 'dashed',
        //         color: '#DDD'
        //     }
        // },
        data: InforDataX
      }],
      yAxis: [{
        type: 'value',
        name: nameY,
        nameTextStyle:{
          color:"#666",
        },
        axisLabel: {
          formatter: '{value}',
          color: '#666',
          fontSize: 10,
        },
        axisLine: false,
        splitLine: {
          lineStyle: {
            color: '#dbdbdb',
            type: 'dotted',
          }
        },
      }],
      series: [
       /* {
        name: legendInforData[0],
        type: 'bar',
        barWidth: 15, //柱子宽度
        //barGap: 1, //柱子之间间距
        itemStyle: {
          normal: {
            color: InforColor
            // barBorderRadius: 10,
          }
        },
        data: InforDataY1
      }, */
        {
        name: legendInforData[0],
        type: 'bar',
        barWidth: 15, //柱子宽度
        //barGap: 1, //柱子之间间距
        itemStyle: {
          normal: {
            color: InforColor2
            // barBorderRadius: 10,
          }
        },
        data: InforDataY2
      }]
    };
    myChart.setOption(option);
    changeSize(myChart)
    return myChart;
  },

  //农业投入品数据表 玫瑰图
  EchartsInputsChart: function (container, data) {
    let myChart = echarts.init(document.getElementById(container));
    let inputsData = data;

    for (let i = 0; i < inputsData.length; i++) {
      if (inputsData[i].value > 10000) {
        inputsData[i].value = (inputsData[i].value / 10000).toFixed(2);
      }
    }

    let inputsColor = ['#A0CE3A', '#31C5C0', '#1E9BD1', '#0F347B', '#585247', '#7F6AAD', '#009D85', "rgba(250,250,250,0.3)"];
    let option = {
      color: inputsColor,
      tooltip: {
        trigger: 'item',
        // formatter: "{a} <br/>{b}: {c} ({d}%)"
        formatter: "{b}<br/>{c}万吨 ({d}%)"
      },

      legend: {
        orient: 'vertical',
        x: '65%',
        y: 'center',
        data: inputsData,
        itemWidth: 8,
        itemHeight: 8,
        itemGap: 16,
      },
      series: [
        // 主要展示层的
        {
          center: ["35%", "53%"],
          radius: ['30%', '50%'],
          // radius: ['30%', '61%'],
          // center: ['50%', '50%'],
          type: 'pie',
          roseType: true,
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
          // labelLine: {
          //   normal: {
          //     show: true,
          //     length: 30,
          //     length2: 55
          //   },
          //   emphasis: {
          //     show: true
          //   }
          // },
          name: "数量",
          data: inputsData,
        },
      ]
    };
    myChart.setOption(option);
    changeSize(myChart)
    return myChart;
  },

  //农产品市场交易数据表 折线图
  EchartsTradeChart: function (container, data) {
    let myChart = echarts.init(document.getElementById(container));
    let tradeDataX = data.map(ele => ele.productName);
    let InforDataY1 = data.map(ele => ele.tradingVolume);
    // var InforDataY2 = data.map(ele => ele.tradingVolume);
    let InforColor = new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
      offset: 0,
      color: '#87D281'
    }, {
      offset: 1,
      color: '#47A440'
    }]);
    let option = {
      tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
          type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        },
        formatter: "{b}<br/>数量：{c}吨",
      },
      grid: {
        left: '3%',
        right: '3%',
        bottom: '5%',
        top: '15%',
        containLabel: true
      },
      xAxis: [{
        type: 'category',
        axisLabel: {
          textStyle: {
            fontSize: 10,
            color: '#666'
          }
        },
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        data: tradeDataX,
      }],
      yAxis: [{
        type: 'value',
        name: "单位(吨)",
        nameTextStyle:{
          color:"#666",
        },
        axisLabel: {
          formatter: '{value}',
          color: '#666',
          fontSize: 10,
        },
        axisLine: false,
        splitLine: {
          lineStyle: {
            color: '#dbdbdb',
            type: 'dotted',
          }
        },
      }],

      series: [{
        name: '和县交易数据',
        type: 'bar',
        barMaxWidth: "30%",
        symbolClip: true,
        // smooth: true, //是否平滑曲线显示
        // showAllSymbol: true,
        // symbolSize: 8,
        lineStyle: {
          normal: {
            color: "#3675be", // 线条颜色
          },
          // borderColor: '#f0f'
        },
        // itemStyle: {
        //   normal: {
        //     color: "#3675be",
        //     lineStyle: {
        //       width: 1,
        //     }
        //   }
        // },
        itemStyle: {
          normal: {
            color: InforColor
          }
        },
        // areaStyle: { //区域填充样式
        //   normal: {
        //     //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
        //     color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
        //       offset: 0,
        //       color: 'rgba(0,150,239,0.3)'
        //     },
        //       {
        //         offset: 1,
        //         color: 'rgba(0,253,252,0)'
        //       }
        //     ], false),
        //     shadowColor: 'rgba(53,142,215, 0.9)', //阴影颜色
        //     shadowBlur: 20 //shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
        //   }
        // },
        data: InforDataY1
      },
        /*{
          name: '和县交易数据',
          smooth: true,
          type: 'line',
          // smooth: true, //是否平滑曲线显示
          // 			symbol:'circle',  // 默认是空心圆（中间是白色的），改成实心圆
          showAllSymbol: true,
          // symbol: 'image://./static/images/guang-circle.png',
          symbolSize: 8,
          lineStyle: {
            normal: {
              color: "#3675be", // 线条颜色
            },
            // borderColor: '#f0f'
          },
          label: {
            show: false,
          },
          itemStyle: {
            normal: {
              color: "#3675be",
              lineStyle: {
                width: 1,
              }
            }
          },

          tooltip: {
            show: false
          },
          data: InforDataY2
        },*/
      ]
    };
    myChart.setOption(option);
    changeSize(myChart)
    return myChart;
  },

  //生产过程数据表 柱状图
  EchartsProcessChart: function (container, data) {
    let myChart = echarts.init(document.getElementById(container));
    let ProcessDataX = data.map(ele => ele.time);
    let legendProcessData = ['规划面积'];
    let ProcessDataY = data.map(ele => ele.count);
    let ProcessColor = new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
      offset: 0,
      color: '#87D281'
    }, {
      offset: 1,
      color: '#47A440'
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
        formatter: "{b}<br/>次数：{c}次",
        // formatter: function (params, ticket, callback) {
        //   let showHtm = "";
        //   showHtm = params.name + "<br>" + "次数：" + Math.round(params.value) + "次";
        //   return showHtm;
        // }
      },
      legend: {
        // show:true,
        itemWidth: 8,
        itemHeight: 8,
        data: legendProcessData,
        align: 'right',
        right: '5%',
        top: '5%',
        textStyle: {
          color: '#000'
        },
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
        data: ProcessDataX,
        axisTick: {
          show: false
        },
        axisLabel: {
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
     /*{
        type: 'value',
        name: '次数(次)',
        axisLabel: {
          formatter: '{value}',
          color: '#666',
          fontSize: 10
        },
        axisLine: false,
        splitLine: {
          lineStyle: {
            color: '#dbdbdb',
            type: 'dotted',
          }
        },
      }*/
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
        name: legendProcessData[1],
        type: 'bar',
        barMaxWidth: "30%",
        //barGap: 1, //柱子之间间距
        symbolClip: true,
        itemStyle: {
          normal: {
            color: ProcessColor
            // barBorderRadius: 10,
          }
        },
        data: ProcessDataY
      }]
    };
    myChart.setOption(option);
    changeSize(myChart)
    return myChart;
  },

  //基础地理数据 饼图
  EchartsGeography: function (container,data) {
    let myChart = echarts.init(document.getElementById(container));
    let colorList = ["#EAEA26", "#906BF9", "#FE5656", "#01E17E", "#3DD1F9", "#FFAD05","FF0042","#7BD339","#F5A115","#FFB600","#9367C4","#C46776","#EAEA26", "#906BF9", "#FE5656", "#01E17E", "#3DD1F9", "#FFAD05","FF0042","#7BD339","#F5A115","#FFB600","#9367C4","#C46776"];
    let productDataX = data;
    let legendData = data.map(ele => ele.name);
    for (let i = 0; i < productDataX.length; i++) {
      if (productDataX[i].value > 10000) {
        productDataX[i].value = (productDataX[i].value / 10000).toFixed(2);
      }
    }
    let option = {
      tooltip: {
        trigger: 'item',
        formatter: "{b}:<br/> {c}万亩 ({d}%)"
      },
      legend: {
        orient: 'vertical',
        x: '65%',
        y: 'center',
        data: legendData,
        itemWidth: 8,
        itemHeight: 8,
        itemGap: 16,
      },
      series: [{
        name: '基础地理信息数据',
        type: 'pie',
        center: ["35%", "53%"],
        radius: ['30%', '50%'],
        avoidLabelOverlap: false,
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
        data: productDataX
      }]
    };
    myChart.setOption(option);
    changeSize(myChart)
    return myChart;
  },

  //病虫害专题
  EchartsDiseases: function (container,data) {
    let myChart = echarts.init(document.getElementById(container));
    let colorList = ["#EAEA26", "#906BF9", "#FE5656", "#01E17E", "#3DD1F9", "#FFAD05"];
    let productDataX = data;
    let legendData = data.map(ele => ele.name);
    let option = {
      tooltip: {
        trigger: 'item',
        formatter: "{b}:<br/> {c} ({d}%)"
      },
      legend: {
        orient: 'vertical',
        x: '75%',
        y: 'center',
        data: legendData,
        itemWidth: 8,
        itemHeight: 8,
        itemGap: 16,
      },
      series: [{
        name: '病虫害专题',
        type: 'pie',
        center: ["37%", "53%"],
        radius: ['30%', '50%'],
        avoidLabelOverlap: false,
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
        data: productDataX
      }]
    };
    myChart.setOption(option);
    changeSize(myChart)
    return myChart;
  },

  //视频图像数据表
  EchartsVideo: function (container,data) {
    let myChart = echarts.init(document.getElementById(container));
    var tradeDataX = data.map(ele => ele.time);
    var InforDataY = data.map(ele => ele.count);
    let option = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          lineStyle: {
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [{
                offset: 0,
                color: 'rgba(255,255,255,0)' // 0% 处的颜色
              }, {
                offset: 0.5,
                color: 'rgba(255,255,255,1)' // 100% 处的颜色
              }, {
                offset: 1,
                color: 'rgba(255,255,255,0)' // 100% 处的颜色
              }],
              global: false // 缺省为 false
            }
          },
        },

      },
      grid: {
        left: '3%',
        right: '3%',
        bottom: '5%',
        top: '3%',
        containLabel: true
      },
      xAxis: [{
        type: 'category',
        boundaryGap: true,
        axisLine: { //坐标轴轴线相关设置。数学上的x轴
          show: false,
          // lineStyle: {
          //   color: '#000'
          // },
        },
        axisLabel: { //坐标轴刻度标签的相关设置
          textStyle: {
            color: '#666',
            fontSize: 10
          },
        },
        axisTick: {
          show: false,
        },

        data: tradeDataX,
      }],
      yAxis: [{
        type: 'value',
        // name: '总价(万元)',
        axisLabel: {
          formatter: '{value}',
          color: '#666',
          fontSize: 10
        },
        axisLine: false,
        splitLine: {
          lineStyle: {
            color: '#dbdbdb',
            type: 'dotted',
          }
        },
      }],

      series: [{
        name: '注册总量',
        smooth: true,
        type: 'line',
        // smooth: true, //是否平滑曲线显示
        // 			symbol:'circle',  // 默认是空心圆（中间是白色的），改成实心圆
        showAllSymbol: true,
        // symbol: 'image://./static/images/guang-circle.png',
        symbolSize: 8,
        lineStyle: {
          normal: {
            color: "#3675be", // 线条颜色
          },
          // borderColor: '#f0f'
        },
        label: {
          show: false,
        },
        itemStyle: {
          normal: {
            color: "#3675be",
            lineStyle: {
              width: 1,
            }
          }
        },

        tooltip: {
          show: false
        },
        areaStyle: { //区域填充样式
          normal: {
            //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: 'rgba(0,150,239,0.3)'
              },
              {
                offset: 1,
                color: 'rgba(0,253,252,0)'
              }
            ], false),
            shadowColor: 'rgba(53,142,215, 0.9)', //阴影颜色
            shadowBlur: 20 //shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
          }
        },
        data: InforDataY
      }]
    };
    myChart.setOption(option);
    changeSize(myChart)
    return myChart;
  },

  //生产环境数据表
  EchartsEnvironmental: function (container,data) {
    let myChart = echarts.init(document.getElementById(container));
    let inputsData = data;
    let inputsColor = ['#A0CE3A', '#31C5C0', '#1E9BD1', '#0F347B', '#585247', '#7F6AAD', '#009D85', "rgba(250,250,250,0.3)"];
    let option = {
      color: inputsColor,
      tooltip: {
        trigger: 'item',
        formatter: "{b}: <br/>数量：{c}个 ({d}%)"
      },
      legend: {
        orient: 'vertical',
        x: '75%',
        y: 'center',
        data: inputsData,
        itemWidth: 8,
        itemHeight: 8,
        itemGap: 16,
      },
      series: [
        // 主要展示层的
        {
          center: ["37%", "53%"],
          radius: ['30%', '50%'],
          // radius: ['30%', '61%'],
          // center: ['50%', '50%'],
          type: 'pie',
          roseType: true,
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
          // labelLine: {
          //   normal: {
          //     show: true,
          //     length: 30,
          //     length2: 55
          //   },
          //   emphasis: {
          //     show: true
          //   }
          // },
          name: "数量",
          data: inputsData,
        },
      ]
    };
    myChart.setOption(option);
    changeSize(myChart)
    return myChart;
  },

  // 质量溯源数据表
  EchartsSource: function (container,data) {
    let myChart = echarts.init(document.getElementById(container));
    var InforDataX = data.map(ele => ele.time);
    // var legendInforData = ['扫码次数', '溯源标签数'];
    var legendInforData = ['扫码次数'];
    var InforDataY1 = data.map(ele => ele.scanTimes);
    // var InforDataY2 = data.map(ele => ele.traceCodeCount);
    var InforColor2 = new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
      offset: 0,
      color: '#DEEEDD'
    }, {
      offset: 1,
      color: '#DEEEDD'
    }]);
    var InforColor = new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
      offset: 0,
      color: '#87D281'
    }, {
      offset: 1,
      color: '#47A440'
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
        formatter: "{b}<br/>扫码次数：{c}次",
        // formatter: function (params, ticket, callback) {
        //   let showHtm = "";
        //   showHtm = params.name + "<br>" + "次数：" + Math.round(params.value) + "次";
        //   return showHtm;
        // }
      },
      legend: {
        show:false,
        itemWidth: 8,
        itemHeight: 8,
        data: legendInforData,
        align: 'right',
        right: '5%',
        top: '1%',
        textStyle: {
          color: '#000'
        },
      },
      grid: {
        top: '13%',
        left: '3%',
        right: '3%',
        bottom: '3%',
        containLabel: true
      },
      calculable: true,
      xAxis: [{
        type: 'category',
        axisLabel: {
          textStyle: {
            fontSize: 10,
            color: '#666'
          }
        },
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        // splitLine: {
        //     lineStyle: {
        //         type: 'dashed',
        //         color: '#DDD'
        //     }
        // },
        data: InforDataX
      }],
      yAxis: [{
        type: 'value',
        name: '次数(次)',
        nameTextStyle: {
          color: "#666"
        },
        axisLabel: {
          formatter: '{value}',
          color: '#666',
          fontSize: 10
        },
        axisLine: false,
        splitLine: {
          lineStyle: {
            color: '#dbdbdb',
            type: 'dotted',
          }
        },
      }],
      series: [{
        name: legendInforData[0],
        type: 'bar',
        barWidth: 15, //柱子宽度
        //barGap: 1, //柱子之间间距
        itemStyle: {
          normal: {
            color: InforColor
            // barBorderRadius: 10,
          }
        },
        data: InforDataY1
      },
      //   {
      //   name: legendInforData[1],
      //   type: 'bar',
      //   barWidth: 15, //柱子宽度
      //   //barGap: 1, //柱子之间间距
      //   itemStyle: {
      //     normal: {
      //       color: InforColor2
      //       // barBorderRadius: 10,
      //     }
      //   },
      //   data: InforDataY2
      // }
      ]
    };
    myChart.setOption(option);
    changeSize(myChart)
    return myChart;
  },

  //生产种植数据表
  EchartsPlant: function (container,data) {
    let myChart = echarts.init(document.getElementById(container));
    let inputsData = data;
    for (let i = 0; i < inputsData.length; i++) {
      if (inputsData[i].value > 10000) {
        inputsData[i].value = (inputsData[i].value / 10000);
      }
    }
    let inputsColor = ['#A0CE3A', '#31C5C0', '#1E9BD1', '#585247', '#7F6AAD', '#009D85','#A0CE3A', '#31C5C0', '#1E9BD1', '#0F347B', '#585247', '#7F6AAD', '#009D85' ];
    let option = {
      color: inputsColor,
      tooltip: {
        trigger: 'item',
        // formatter: "{b}:<br/> 数量：{c}万亩 ({d}%)"
        formatter: function(params, ticket, callback) {
              let showHtm = "";
              showHtm = "数量：" + (params.value).toFixed(2)+ "万亩";
              return showHtm;
        }
      },
      legend: {
        orient: 'vertical',
        x: '65%',
        y: 'center',
        data: inputsData,
        itemWidth: 8,
        itemHeight: 8,
        itemGap: 16,
      },
      series: [
        // 主要展示层的
        {
          center: ["35%", "53%"],
          radius: ['30%', '50%'],
          // radius: ['30%', '61%'],
          // center: ['50%', '50%'],
          type: 'pie',
          roseType: true,
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
          // labelLine: {
          //   normal: {
          //     show: true,
          //     length: 30,
          //     length2: 55
          //   },
          //   emphasis: {
          //     show: true
          //   }
          // },
          name: "数量",
          data: inputsData,
        },
      ]
    };
    myChart.setOption(option);
    changeSize(myChart)
    return myChart;
  },

  //首页市场行情图表  双折线图
  initEchartsMarket: function (container) {
    let myChart = echarts.init(document.getElementById(container));
    let marketDataX = ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月',
      '十一月', '十二月'
    ];
    let marketDataY1 = [0.3, 0.9, 0.7, 1.1, 0.5, 0.4, 0.3, 0.8, 0.9, 0.6, 0.5, 0.7];
    let marketDataY2 = [0.4, 0.7, 0.5, 0.9, 0.6, 0.5, 0.4, 0.3, 0.7, 0.4, 0.4, 0.6];
    let option = {
      // title: {
      //   text: '行情趋势图',
      //   x: "center",
      //   textStyle: {
      //     fontSize: 16,
      //     color: '#000'
      //   }
      // },
      grid: [{
        left: '5%',
        bottom: '13%',
        top: '20%',
        right: '1%'
      }],
      legend: {
        icon: 'line',
        y: '10',
        textStyle: {
          color: "#000",
          data: ['全国', '和县']
        },

        itemWidth: 10, // 设置宽度
        itemHeight: 10, // 设置高度
      },
      tooltip: {
        trigger: 'axis',

      },
      xAxis: { //x轴
        type: 'category',
        //boundaryGap: false, //坐标轴两边留白策略
        data: marketDataX,
        axisLabel: {
          interval: 0,
          textStyle: {
            fontSize: 10,
            color: '#3c3c3c'
          }
        },
        axisLine: {
          lineStyle: {
            color: '#b8b8b8',
            //type: 'dotted',
          }
        },

      },
      yAxis: { //y轴
        min: 0,
        name: '万元',
        nameTextStyle: {
          color: '#666',

        },
        type: 'value',
        splitLine: {
          show: true,
          lineStyle: {
            type: 'dotted', //dashed solid
            color: "#b8b8b8"
          }
        },
        axisLabel: {
          textStyle: {
            fontSize: 12,
            color: '#3c3c3c'
          },
        },
        axisLine: {
          // "dataResources": false,
          lineStyle: {
            color: '#b8b8b8',
            //type: 'dotted',
          }
        },
      },
      series: [{
          name: '全国',
          data: marketDataY1,
          type: 'line',
          smooth: true, //折线是否平滑
          areaStyle: {
            opacity: 0
          },
          itemStyle: {
            normal: {
              color: "#197CD8", //小圆点的颜色
              lineStyle: {
                color: "#197CD8", //折线的颜色,
                width: 1
              },

            }
          },
        },
        {
          name: '和县',
          data: marketDataY2,
          type: 'line',
          smooth: true, //是否平滑
          areaStyle: {
            opacity: 0
          },
          itemStyle: {
            normal: {
              color: "#2B9F50", //小圆点的颜色
              lineStyle: {
                color: "#2B9F50", //折线的颜色
                width: 1
              }
            }
          },
        },
      ]
    };
    myChart.setOption(option);
    changeSize(myChart)
    return myChart;
  },

  initEchartsMarket2: function (container) {
    let myChart = echarts.init(document.getElementById(container));
    let marketDataX = ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月',
      '十一月', '十二月'
    ];
    let marketDataY1 = [1.3, 1.9, 1.7, 2.1, 1.5, 2.4, 3.3, 3.8, 3.9, 3.6, 4.5, 4.7];
    let marketDataY2 = [0.4, 0.7, 0.5, 0.9, 0.6, 0.5, 0.4, 0.3, 0.7, 0.4, 0.4, 0.6];
    let option = {
      // title: {
      //   text: '行情趋势图',
      //   x: "center",
      //   textStyle: {
      //     fontSize: 16,
      //     color: '#000'
      //   }
      // },
      grid: [{
        left: '5%',
        bottom: '13%',
        top: '20%',
        right: '1%'
      }],
      legend: {
        icon: 'line',
        y: '10',
        textStyle: {
          color: "#000",
          data: ['全国', '和县']
        },

        itemWidth: 10, // 设置宽度
        itemHeight: 10, // 设置高度
      },
      tooltip: {
        trigger: 'axis',

      },
      xAxis: { //x轴
        type: 'category',
        //boundaryGap: false, //坐标轴两边留白策略
        data: marketDataX,
        axisLabel: {
          interval: 0,
          textStyle: {
            fontSize: 10,
            color: '#3c3c3c'
          }
        },
        axisLine: {
          lineStyle: {
            color: '#b8b8b8',
            //type: 'dotted',
          }
        },

      },
      yAxis: { //y轴
        min: 0,
        name: '万元',
        nameTextStyle: {
          color: '#666',

        },
        type: 'value',
        splitLine: {
          show: true,
          lineStyle: {
            type: 'dotted', //dashed solid
            color: "#b8b8b8"
          }
        },
        axisLabel: {
          textStyle: {
            fontSize: 12,
            color: '#3c3c3c'
          },
        },
        axisLine: {
          // "dataResources": false,
          lineStyle: {
            color: '#b8b8b8',
            //type: 'dotted',
          }
        },
      },
      series: [{
          name: '全国',
          data: marketDataY1,
          type: 'line',
          smooth: true, //折线是否平滑
          areaStyle: {
            opacity: 0
          },
          itemStyle: {
            normal: {
              color: "#197CD8", //小圆点的颜色
              lineStyle: {
                color: "#197CD8", //折线的颜色,
                width: 1
              },

            }
          },
        },
        {
          name: '和县',
          data: marketDataY2,
          type: 'line',
          smooth: true, //是否平滑
          areaStyle: {
            opacity: 0
          },
          itemStyle: {
            normal: {
              color: "#2B9F50", //小圆点的颜色
              lineStyle: {
                color: "#2B9F50", //折线的颜色
                width: 1
              }
            }
          },
        },
      ]
    };
    myChart.setOption(option);
    changeSize(myChart)
    return myChart;
  },
  // 市场行情页面折线图
  EchartsMarketHistory: function (container) {
    let myChart = echarts.init(document.getElementById(container));
    let marketHistoryDataX = ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月',
      '十一月', '十二月'
    ];
    let marketHistoryDataY = [0.3, 0.9, 0.7, 1.1, 0.5, 0.4, 0.3, 0.8, 0.9, 0.6, 0.5, 0.7];
    let option = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          lineStyle: {
            color: '#57617B'
          }
        }
      },
      legend: {
        // icon: 'rect',
        // itemWidth: 14,
        // itemHeight: 5,
        // itemGap: 13,
        data: ['辣椒'],
        right: '4%',
        top: '5%',
        textStyle: {
          fontSize: 12,
          color: '#fff'
        }
      },
      grid: {
        left: '5%',
        right: '5%',
        bottom: '10%',
        top: "18%",
        containLabel: true
      },
      xAxis: [{
        type: 'category',
        boundaryGap: false,
        axisTick: {
          show: false
        },
        axisLabel: {
          color: '#fff'
        },
        axisLine: {
          // show: false,
          lineStyle: {
            color: '#7195ae',
            fontSize: 12
          }
        },
        data: marketHistoryDataX
      }],
      yAxis: [{
        type: 'value',
        name: '单位（元）',
        axisTick: {
          show: false
        },
        axisLine: {
          show: false,
          lineStyle: {
            color: '#fff',
            fontSize: 12
          }
        },
        axisLabel: {
          textStyle: {
            fontSize: 12
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
        name: '辣椒',
        type: 'line',
        smooth: true,
        symbol: 'circle',
        symbolSize: 5,
        showSymbol: false,
        lineStyle: {
          normal: {
            width: 3
          }
        },
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
              offset: 0,
              color: 'rgba(16,97,204, 0.3)'
            }, {
              offset: 0.8,
              color: 'rgba(17,235,210, 0)'
            }], false),
            shadowColor: 'rgba(0, 0, 0, 0.1)',
            shadowBlur: 10
          }
        },

        itemStyle: {
          normal: {

            color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
              offset: 0,
              color: 'rgba(16,97,204,1)'
            }, {
              offset: 1,
              color: 'rgba(17,235,210,1)'
            }])
          },
          emphasis: {
            color: 'rgb(0,196,132)',
            borderColor: 'rgba(0,196,132,0.2)',
            extraCssText: 'box-shadow: 8px 8px 8px rgba(0, 0, 0, 1);',
            borderWidth: 10,

          },
        },
        data: marketHistoryDataY
      }]
    };
    myChart.setOption(option);
    changeSize(myChart)
    return myChart;
  },
}
