import echarts from "echarts";

import changeSize from '@/util/changeSize';

export default {
  //各乡镇面积      -----真实数据
  geXiangZhenMianJi(id, xData, data){

    const value = (Math.floor(data[0]/30) + 1) * 30
    const bg_arr = data.map(() => value)

    let myChart = echarts.init(document.getElementById(id));

    var option = {
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
        // backgroundColor:'rgba(0,0,0,0.8)',
             grid: {
                 left: '3%',
                 top:'25%',
                 right: '2%',
                 bottom: '0%',
                 containLabel: true
             },
            //  dataZoom: [{          //滚动条设置！！
            //     show: true,       //设置是否显示
            //     height: 10,       //设置高度
            //     xAxisIndex: [
            //         0
            //     ],
            //     bottom: '0%',         //设置位置
            //     start: 0,         //设置起始位置
            //     end: 100,          //设置结束位置
            //     // handleIcon: 'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
            //     // handleSize: '110%',
            //     handleStyle:{
            //         color:"#01FBCC",        //设置滚动条两头的颜色
            //     },
            //     textStyle:{
            //      color:"#fff"               //设置鼠标悬停时显示文字的颜色
            //     },
            //     borderColor:"#90979c"       //设置整个滚动条边框的颜色
            // }, {                    //可以通过鼠标滚轮控制
            //     type: "inside",
            //     show: true,
            //     height: 15,
            //     start: 1,
            //     end: 100
            // }],
             xAxis: [
                 {
                     type: 'category',
                     axisTick: {
                         show: false
                     },
                     axisLine:{
                         show: false,
                        lineStyle:{
                            color:'rgba(160,160,160,0.3)',
                        }
                     },
                     axisLabel:{
                        //  show: false,
                         textStyle:{
                             color:'#fff',
                            //  fontSize:13,
                         }
                     },
                     data: xData
                 }, 
                 {
                     type: 'category',
                     axisLine: {
                         show: false
                     },
                     axisTick: {
                         show: false
                     },
                     axisLabel: {
                         show: false
                     },
                     splitArea: {
                         show: false
                     },
                     splitLine: {
                         show: false
                     },
                     data: []
                 }
             ],
             yAxis: {
                 type: 'value',
                 name:'单位/亩',
                //  nameGap:35,
                 nameTextStyle:{
                     color:'#ffffff',
                    //  fontSize:10,
                 },
                 axisTick: {
                     show: false
                 },
                 axisLine: {
                     show: false
                 },
                 splitLine: {
                     show: false,
                     lineStyle:{
                         color:'rgba(160,160,160,0.3)',
                     }
                 },
                 axisLabel: {
                     textStyle: {
                         color: 'rgba(255,255,255,0.8)',
                        //  fontSize:14,
                     }
                 }
             },
             series: [
                //  {
                //      type: 'bar',
                //      xAxisIndex: 0,         //使用哪一个x轴
                //      barGap: '-100%',       //使柱子重叠
                //      itemStyle: {
                //          normal: {
                //              show: true,
                //              color: '#2D4F72',
                //              barBorderRadius: 50,
                //              borderWidth: 0,
                //              borderColor: '#333',
                //          }
                //      },
                //     //  label:{
                //     //      normal:{
                //     //         show:true,
                            
                //     //        position: 'top',
                //     //        textStyle:{
                //     //            color:'#2D4F72',
                //     //            fontSize:25,
                //     //        }
                //     //      }
                //     //  },
                //      barWidth: 10,   //设置柱子宽度
                //      data: bg_arr
                //  }, 
                 {
                     type: 'line',
                     smooth: true,
                     z:10,
                     itemStyle: {
                        normal: {       //渐变色
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#78C0AB' // 0% 处的颜色
                            }, {
                                offset: 1,
                                color: '#78C0AB' // 100% 处的颜色
                            }], false),
                            // barBorderRadius: [30, 30, 0, 0],
                        }
                    },
                     label: {
                         normal: {
                             show: false,
 
                         }
                     },
                     itemStyle:{
                        color: '#8CC87C'
                    },
                    areaStyle: {                    //设置折线下面的颜色
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                {
                                    offset: 0,
                                    color: 'rgba(140,200,124, 0.5)'
                                },
                                {
                                    offset: 1,
                                    color: 'rgba(0,0,0,0)'
                                }
                            ], false),
                            shadowColor: 'rgba(140,200,124, 0.5)',
                            shadowBlur: 20
                        }
                    },
                     barWidth: 15,   //设置柱子宽度
                     data
                 }
             ]
     };

     myChart.setOption(option);
     changeSize(myChart)
     return myChart;
  },

  //种植单产      -----真实数据
  zhongZhiDanChang(id, xData, data){

    const value = (Math.floor(data[0]/30) + 1) * 30
    const bg_arr = data.map(() => value)

    let myChart = echarts.init(document.getElementById(id));

    var option = {
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
        // backgroundColor:'rgba(0,0,0,0.8)',
             grid: {
                 left: '3%',
                 top:'25%',
                 right: '2%',
                 bottom: '0%',
                 containLabel: true
             },
             xAxis: [
                 {
                     type: 'category',
                     axisTick: {
                         show: false
                     },
                     axisLine:{
                         show: false,
                        lineStyle:{
                            color:'rgba(160,160,160,0.3)',
                        }
                     },
                     axisLabel:{
                        //  show: false,
                         textStyle:{
                             color:'#fff',
                            //  fontSize:13,
                         }
                     },
                     data: xData
                 }, 
                 {
                     type: 'category',
                     axisLine: {
                         show: false
                     },
                     axisTick: {
                         show: false
                     },
                     axisLabel: {
                         show: false
                     },
                     splitArea: {
                         show: false
                     },
                     splitLine: {
                         show: false
                     },
                     data: []
                 }
             ],
             yAxis: {
                 type: 'value',
                 name:'公斤/亩',
                //  nameGap:35,
                 nameTextStyle:{
                     color:'#ffffff',
                    //  fontSize:10,
                 },
                 axisTick: {
                     show: false
                 },
                 axisLine: {
                     show: false
                 },
                 splitLine: {
                     show: false,
                     lineStyle:{
                         color:'rgba(160,160,160,0.3)',
                     }
                 },
                 axisLabel: {
                     textStyle: {
                         color: 'rgba(255,255,255,0.8)',
                        //  fontSize:14,
                     }
                 }
             },
             series: [
                //  {
                //      type: 'bar',
                //      xAxisIndex: 0,         //使用哪一个x轴
                //      barGap: '-100%',       //使柱子重叠
                //      itemStyle: {
                //          normal: {
                //              show: true,
                //              color: '#2D4F72',
                //              barBorderRadius: 50,
                //              borderWidth: 0,
                //              borderColor: '#333',
                //          }
                //      },
                //     //  label:{
                //     //      normal:{
                //     //         show:true,
                            
                //     //        position: 'top',
                //     //        textStyle:{
                //     //            color:'#2D4F72',
                //     //            fontSize:25,
                //     //        }
                //     //      }
                //     //  },
                //      barWidth: 10,   //设置柱子宽度
                //      data: bg_arr
                //  }, 
                 {
                     type: 'bar',
                     z:10,
                     itemStyle: {
                        normal: {       //渐变色
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#78C0AB' // 0% 处的颜色
                            }, {
                                offset: 1,
                                color: '#78C0AB' // 100% 处的颜色
                            }], false),
                            // barBorderRadius: [30, 30, 0, 0],
                        }
                    },
                     label: {
                         normal: {
                             show: false,
 
                         }
                     },
                     barWidth: 15,   //设置柱子宽度
                     data
                 }
             ]
     };

     myChart.setOption(option);
     changeSize(myChart)
     return myChart;
  },

  //种植产量      -----真实数据
  zhongZhiChangLiang(id, xData, data){

    const value = (Math.floor(data[0]/30) + 1) * 30
    const bg_arr = data.map(() => value)

    let myChart = echarts.init(document.getElementById(id));

    var option = {
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
        // backgroundColor:'rgba(0,0,0,0.8)',
             grid: {
                 left: '3%',
                 top:'25%',
                 right: '2%',
                 bottom: '0%',
                 containLabel: true
             },
             xAxis: [
                 {
                     type: 'category',
                     axisTick: {
                         show: false
                     },
                     axisLine:{
                         show: false,
                        lineStyle:{
                            color:'rgba(160,160,160,0.3)',
                        }
                     },
                     axisLabel:{
                        //  show: false,
                         textStyle:{
                             color:'#fff',
                            //  fontSize:13,
                         }
                     },
                     data: xData
                 }, 
                 {
                     type: 'category',
                     axisLine: {
                         show: false
                     },
                     axisTick: {
                         show: false
                     },
                     axisLabel: {
                         show: false
                     },
                     splitArea: {
                         show: false
                     },
                     splitLine: {
                         show: false
                     },
                     data: []
                 }
             ],
             yAxis: {
                 type: 'value',
                 name:'单位/吨',
                //  nameGap:35,
                 nameTextStyle:{
                     color:'#ffffff',
                    //  fontSize:10,
                 },
                 axisTick: {
                     show: false
                 },
                 axisLine: {
                     show: false
                 },
                 splitLine: {
                     show: false,
                     lineStyle:{
                         color:'rgba(160,160,160,0.3)',
                     }
                 },
                 axisLabel: {
                     textStyle: {
                         color: 'rgba(255,255,255,0.8)',
                        //  fontSize:14,
                     }
                 }
             },
             series: [
                //  {
                //      type: 'bar',
                //      xAxisIndex: 0,         //使用哪一个x轴
                //      barGap: '-100%',       //使柱子重叠
                //      itemStyle: {
                //          normal: {
                //              show: true,
                //              color: '#2D4F72',
                //              barBorderRadius: 50,
                //              borderWidth: 0,
                //              borderColor: '#333',
                //          }
                //      },
                //     //  label:{
                //     //      normal:{
                //     //         show:true,
                            
                //     //        position: 'top',
                //     //        textStyle:{
                //     //            color:'#2D4F72',
                //     //            fontSize:25,
                //     //        }
                //     //      }
                //     //  },
                //      barWidth: 10,   //设置柱子宽度
                //      data: bg_arr
                //  }, 
                 {
                     type: 'bar',
                     z:10,
                     itemStyle: {
                        normal: {       //渐变色
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#78C0AB' // 0% 处的颜色
                            }, {
                                offset: 1,
                                color: '#78C0AB' // 100% 处的颜色
                            }], false),
                            // barBorderRadius: [30, 30, 0, 0],
                        }
                    },
                     label: {
                         normal: {
                             show: false,
 
                         }
                     },
                     barWidth: 15,   //设置柱子宽度
                     data
                 }
             ]
     };

     myChart.setOption(option);
     changeSize(myChart)
     return myChart;
  },

  //种植面积      -----真实数据
  zhongZhiMianJi(id, xData, data){

    const value = (Math.floor(data[0]/30) + 1) * 30
    const bg_arr = data.map(() => value)

    let myChart = echarts.init(document.getElementById(id));

    var option = {
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
        // backgroundColor:'rgba(0,0,0,0.8)',
             grid: {
                 left: '3%',
                 top:'25%',
                 right: '2%',
                 bottom: '0%',
                 containLabel: true
             },
            //  dataZoom: [{          //滚动条设置！！
            //     show: true,       //设置是否显示
            //     height: 10,       //设置高度
            //     xAxisIndex: [
            //         0
            //     ],
            //     bottom: '0%',         //设置位置
            //     start: 0,         //设置起始位置
            //     end: 100,          //设置结束位置
            //     // handleIcon: 'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
            //     // handleSize: '110%',
            //     handleStyle:{
            //         color:"#01FBCC",        //设置滚动条两头的颜色
            //     },
            //     textStyle:{
            //      color:"#fff"               //设置鼠标悬停时显示文字的颜色
            //     },
            //     borderColor:"#90979c"       //设置整个滚动条边框的颜色
            // }, {                    //可以通过鼠标滚轮控制
            //     type: "inside",
            //     show: true,
            //     height: 15,
            //     start: 1,
            //     end: 35
            // }],
             xAxis: [
                 {
                     type: 'category',
                     axisTick: {
                         show: false
                     },
                     axisLine:{
                         show: false,
                        lineStyle:{
                            color:'rgba(160,160,160,0.3)',
                        }
                     },
                     axisLabel:{
                        //  show: false,
                         textStyle:{
                             color:'#fff',
                            //  fontSize:13,
                         }
                     },
                     data: xData
                 }, 
                 {
                     type: 'category',
                     axisLine: {
                         show: false
                     },
                     axisTick: {
                         show: false
                     },
                     axisLabel: {
                         show: false
                     },
                     splitArea: {
                         show: false
                     },
                     splitLine: {
                         show: false
                     },
                     data: []
                 }
             ],
             yAxis: {
                 type: 'value',
                 name:'单位/亩',
                //  nameGap:35,
                 nameTextStyle:{
                     color:'#ffffff',
                    //  fontSize:10,
                 },
                 axisTick: {
                     show: false
                 },
                 axisLine: {
                     show: false
                 },
                 splitLine: {
                     show: false,
                     lineStyle:{
                         color:'rgba(160,160,160,0.3)',
                     }
                 },
                 axisLabel: {
                     textStyle: {
                         color: 'rgba(255,255,255,0.8)',
                        //  fontSize:14,
                     }
                 }
             },
             series: [
                //  {
                //      type: 'bar',
                //      xAxisIndex: 0,         //使用哪一个x轴
                //      barGap: '-100%',       //使柱子重叠
                //      itemStyle: {
                //          normal: {
                //              show: true,
                //              color: '#2D4F72',
                //              barBorderRadius: 50,
                //              borderWidth: 0,
                //              borderColor: '#333',
                //          }
                //      },
                //     //  label:{
                //     //      normal:{
                //     //         show:true,
                            
                //     //        position: 'top',
                //     //        textStyle:{
                //     //            color:'#2D4F72',
                //     //            fontSize:25,
                //     //        }
                //     //      }
                //     //  },
                //      barWidth: 10,   //设置柱子宽度
                //      data: bg_arr
                //  }, 
                 {
                     type: 'line',
                     smooth: true,
                     z:10,
                     itemStyle: {
                        normal: {       //渐变色
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#78C0AB' // 0% 处的颜色
                            }, {
                                offset: 1,
                                color: '#78C0AB' // 100% 处的颜色
                            }], false),
                            // barBorderRadius: [30, 30, 0, 0],
                        }
                    },
                     label: {
                         normal: {
                             show: false,
 
                         }
                     },
                     itemStyle:{
                        color: '#8CC87C'
                    },
                    areaStyle: {                    //设置折线下面的颜色
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                {
                                    offset: 0,
                                    color: 'rgba(140,200,124, 0.5)'
                                },
                                {
                                    offset: 1,
                                    color: 'rgba(0,0,0,0)'
                                }
                            ], false),
                            shadowColor: 'rgba(140,200,124, 0.5)',
                            shadowBlur: 20
                        }
                    },
                     barWidth: 15,   //设置柱子宽度
                     data
                 }
             ]
     };

     myChart.setOption(option);
     changeSize(myChart)
     return myChart;
  },


  
    // 各乡镇产量_竖 -----真实数据       
    geXiangZhenChangLiang_col(id, yData, data){
        let myChart = echarts.init(document.getElementById(id));

        //获取数组最大值
        let maxData = Math.max.apply(Math,data)
        maxData = (Math.floor(maxData/100) + 1) * 100

        let maxDataArr = data.map( () => maxData)

        // var data = ['1257', '1058', '958', '819', '657', '313', '303', '297', '286', '267', '205', '186', '205', '186', '205', '186', '205', '186', '205', '186']

        var myColor = ['#9BDD85', '#9BDD85', '#9BDD85', '#9BDD85', '#9BDD85', '#9BDD85', '#9BDD85', '#9BDD85', '#9BDD85', '#9BDD85'];
        let option = {
            // backgroundColor: '#0e2147',
            grid: {
                // left: '11%',
                top: '5%',
                right: '0%',
                bottom: '5%',
                containLabel: true
            },
            xAxis: [{
                // show: false,
                type: 'value',
                // position: 'top',
                offset: 15,
                axisLine:{        //设置x轴相关
                    show: false
                },
                axisTick: {      //设置刻度相关
                    show: false
                },
                axisLabel: {    //设置x轴文字颜色
                    color: '#fff'
                },
                splitLine: {    //设置分隔线
                    show: false
                }
            }],
            yAxis: [{
                name: '年份',
                inverse: true,  //设置柱状图倒叙排列
                axisTick: 'none',
                axisLine: 'none',
                offset: '27',
                boundaryGap: false,
                axisLabel: {
                    textStyle: {
                        color: '#ffffff',
                        fontSize: '12'
                    },
                    formatter: function (value) {           //文字太长显示两个字！！！！！！！！！！
                      return (value.length > 8 ? (value.slice(0,9)+"...") : value )
                    }
                },
                data: yData
            }, 
            {
                inverse: true,  //设置柱状图倒叙排列
                axisTick: 'none',
                axisLine: 'none',
                // offset: '27',
                boundaryGap: false,
                axisLabel: {
                    textStyle: {
                        color: '#ffffff',
                        fontSize: '16'
                    }
                },
                data
            }, 
            {
                inverse: true,  //设置柱状图倒叙排列
                // name: '分拨延误TOP 10',
                // nameGap: '50',
                nameTextStyle: {
                    color: '#ffffff',
                    fontSize: '16',
                },
                axisLine: {
                    lineStyle: {
                        color: 'rgba(0,0,0,0)'
                    }
                },
                data: [],
            }
        ],
            series: [{
                    name: '条',
                    type: 'bar',
                    yAxisIndex: 0,
                    data,
                    // label: {     //设置是否在柱子顶端显示数值
                    //     normal: {
                    //         show: true,
                    //         position: 'right',
                    //         textStyle: {
                    //             color: '#ffffff',
                    //             fontSize: '16',
                    //         }
                    //     }
                    // },
                    barWidth: 15,   //设置柱子宽度
                    itemStyle: {
                        normal: {
                            color: function(params) {
                                var num = myColor.length;
                                return myColor[params.dataIndex % num]
                            },
                        }
                    },
                    z: 2
                }, {
                    name: '白框',
                    type: 'bar',
                    yAxisIndex: 0,
                    barGap: '-100%',
                    // data: maxDataArr,
                    barWidth: 15,
                    itemStyle: {
                        normal: {
                            color: '#214366',
                            barBorderRadius: 5,
                        }
                    },
                    z: 1
                }, 
                // {
                //     name: '外框',
                //     type: 'bar',
                //     yAxisIndex: 2,
                //     barGap: '-100%',
                //     data: [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100],
                //     barWidth: 24,
                //     itemStyle: {
                //         normal: {
                //             color: function(params) {
                //                 var num = myColor.length;
                //                 return myColor[params.dataIndex % num]
                //             },
                //             barBorderRadius: 5,
                //         }
                //     },
                //     z: 0
                // }
            ]
        };

        myChart.setOption(option);
        changeSize(myChart)
        return myChart;
    },

    //各乡镇产量_横      -----真实数据
    geXiangZhenChangLiang_row(id, xData, data){
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
            // legend: {
            //     // data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
            //     textStyle:{
            //         color: '#fff'
            //     },
            //     top: '-2%',
            //     right: '20%'
            // },
            grid: {     //设置图标位置
                top: '25%',
                left: '2%',
                right: '5%',
                bottom: '10%',
                containLabel: true
            },
            dataZoom: [{          //滚动条设置！！
                show: true,       //设置是否显示
                height: 10,       //设置高度
                xAxisIndex: [
                    0
                ],
                bottom: '2%',         //设置位置
                start: 0,         //设置起始位置
                end: 18,          //设置结束位置
                // handleIcon: 'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
                // handleSize: '110%',
                handleStyle:{
                    color:"#01FBCC",        //设置滚动条两头的颜色
                },
                textStyle:{
                color:"#fff"               //设置鼠标悬停时显示文字的颜色
                },
                borderColor:"#90979c"       //设置整个滚动条边框的颜色
            }, {                    //可以通过鼠标滚轮控制
                type: "inside",
                show: true,
                height: 15,
                start: 1,
                end: 35
            }],
            xAxis: {
                type: 'category',
                boundaryGap: true,      //设置x轴距离y轴是否有间距
                data: xData,
                axisLabel: {    //设置x轴文字颜色
                    color: '#fff'
                },
                axisLine:{      //设置轴线是否显示
                    show: false
                }
            },
            yAxis: [
                {
                    // min: '0',
                    // max: '800',
                    name: '产量/公斤',
                    type: 'value',
                    axisLabel: {    //设置x轴文字颜色
                        color: '#fff'
                    },
                    nameTextStyle: {
                        color: '#fff'
                    },
                    splitLine: {    //设置分隔线
                        show: false
                    },
                    axisLine:{      //设置轴线是否显示
                        show: false
                    }
                }
            ],
            series: [
                {
                    name: '产量',
                    type: 'bar',
                    // stack: '总量',
                    data,
                    symbol: 'none',
                    itemStyle: {
                        normal: {       //渐变色
                            // color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            //     offset: 0,
                            //     color: '#02F1C4' // 0% 处的颜色
                            // }, {
                            //     offset: 1,
                            //     color: '#11A2D8' // 100% 处的颜色
                            // }], false),
                            color: '#9BDD85',
                            // barBorderRadius: [30, 30, 0, 0],
                        }
                    },
                    barWidth: 15,   //设置柱子宽度
                }
            ]
        };
        
        myChart.setOption(option);
        changeSize(myChart)
        return myChart;
    },
};
