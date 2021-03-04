import echarts from 'echarts';
import changeSize from '@/util/changeSize';

export default {
    //种植面积
    zhongZhiMianJi(id, xData, data){
        // 获取数组中最大值
        let maxData = Math.max.apply(Math,data)
        maxData = (Math.floor(maxData/500) + 1) * 500

        let maxDataArr = data.map( () => maxData)
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
                     top:'15%',
                     right: '2%',
                     bottom: '20%',
                     containLabel: true
                 },
                 dataZoom: [{          //滚动条设置！！
                    show: true,       //设置是否显示
                    height: 10,       //设置高度
                    xAxisIndex: [
                        0
                    ],
                    bottom: '13%',         //设置位置
                    start: 0,         //设置起始位置
                    end: 95,          //设置结束位置
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
                     name:'面积/亩',
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
                    //      data: maxDataArr
                    //  }, 
                     {
                        type: 'bar',
                        z:10,
                        itemStyle: {
                           normal: {       //渐变色
                               color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                   offset: 0,
                                   color: '#ffdb5c' // 0% 处的颜色
                               }, {
                                   offset: 1,
                                   color: '#ffdb5c' // 100% 处的颜色
                               }], false),
                               barBorderRadius: [30, 30, 0, 0],
                           }
                       },
                        label: {
                            normal: {
                                show: false,
    
                            }
                        },
                        barWidth: 10,   //设置柱子宽度
                        data
                    }
                 ]
         };

         myChart.setOption(option);
         changeSize(myChart)
         return myChart;
    },

    //主要品种面积          -----真实数据
    zhuYaoPinZhong(id, xData, data_SD,data_YC){
       // xData = xData.slice(0, xData.length / 2)
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
                // data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
                textStyle:{
                    color: '#fff'
                },
                top: '5%',
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
                    name: '面积/万亩',
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
                    name: '水稻',
                    type: 'bar',
                    // stack: '总量',
                    data: data_SD,
                    // symbol: 'none',
                    // smooth: true
                    itemStyle:{
                        normal: {       //渐变色
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#FEE185' // 0% 处的颜色
                            }, {
                                offset: 1,
                                color: '#F0AD3D' // 100% 处的颜色
                            }], false),
                            // barBorderRadius: [30, 30, 0, 0],
                            // color: '#91D27F'
                        }
                    },
                    barWidth: 10,   //设置柱子宽度
                },
                {
                    name: '油菜',
                    type: 'bar',
                    // stack: '总量',
                    data: data_YC,
                    symbol: 'none',
                    itemStyle: {
                        normal: {       //渐变色
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#02FECD' // 0% 处的颜色
                            }, {
                                offset: 1,
                                color: '#11A0DA' // 100% 处的颜色
                            }], false),
                            // barBorderRadius: [30, 30, 0, 0],
                            // color: '#91D27F'
                        }
                    },
                    barWidth: 10,   //设置柱子宽度
                }
            ]
        };
        
        myChart.setOption(option);
        changeSize(myChart)
        return myChart;
    },

    //经济作物————面积          -----真实数据
    jingJiZuoWu_1(id, xData, data, data_yield){
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
                top: '20%',
                left: '2%',
                right: '5%',
                bottom: '18%',
                containLabel: true
            },
            dataZoom: [{          //滚动条设置！！
                show: true,       //设置是否显示
                height: 10,       //设置高度
                xAxisIndex: [
                    0
                ],
                bottom: '12%',         //设置位置
                start: 0,         //设置起始位置
                end: 20,          //设置结束位置
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
                    color: '#fff',
                    interval:0
                },
                axisLine:{      //设置轴线是否显示
                    show: false
                }
            },
            yAxis: [
                {
                    // min: '0',
                    // max: '800',
                    name: '面积/亩',
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
                },
                {
                    // min: '0',
                    // max: '800',
                    name: '面积/亩',
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
                    name: '面积',
                    type: 'bar',
                    // stack: '总量',
                    data,
                    symbol: 'none',
                    itemStyle: {
                        normal: {       //渐变色
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#9fe6b8' // 0% 处的颜色
                            }, {
                                offset: 1,
                                color: '#9fe6b8' // 100% 处的颜色
                            }], false),
                            barBorderRadius: [30, 30, 0, 0],
                        }
                    },
                    barWidth: 10,   //设置柱子宽度
                },
                {
                    name: '产量',
                    type: 'line',
                    smooth: true,
                    // stack: '总量',
                    data: data_yield,
                    symbol: 'none',
                    yAxisIndex: 1,
                    itemStyle: {
                        // normal: {       //渐变色
                        //     color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        //         offset: 0,
                        //         color: '#02F1C4' // 0% 处的颜色
                        //     }, {
                        //         offset: 1,
                        //         color: '#11A2D8' // 100% 处的颜色
                        //     }], false),
                        //     barBorderRadius: [30, 30, 0, 0],
                        // }
                        color: "#fb7293"
                    },
                    barWidth: 10,   //设置柱子宽度
                }
            ]
        };

        myChart.setOption(option);
        changeSize(myChart)
        return myChart;
    },

    //经济作物————单产
    // jingJiZuoWu_2(id){
    //     let myChart = echarts.init(document.getElementById(id));

    //     let option = {
    //         // tooltip: {
    //         //     trigger: 'axis'
    //         // },
    //         // legend: {
    //         //     // data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
    //         //     textStyle:{
    //         //         color: '#fff'
    //         //     },
    //         //     top: '-2%',
    //         //     right: '20%'
    //         // },
    //         grid: {     //设置图标位置
    //             top: '20%',
    //             left: '2%',
    //             right: '5%',
    //             bottom: '5%',
    //             containLabel: true
    //         },
    //         xAxis: {
    //             type: 'category',
    //             boundaryGap: true,      //设置x轴距离y轴是否有间距
    //             data: ['2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019'],
    //             axisLabel: {    //设置x轴文字颜色
    //                 color: '#fff'
    //             },
    //             axisLine:{      //设置轴线是否显示
    //                 show: false
    //             }
    //         },
    //         yAxis: [
    //             {
    //                 min: '0',
    //                 max: '800',
    //                 name: '产量/吨',
    //                 type: 'value',
    //                 axisLabel: {    //设置x轴文字颜色
    //                     color: '#fff'
    //                 },
    //                 nameTextStyle: {
    //                     color: '#fff'
    //                 },
    //                 splitLine: {    //设置分隔线
    //                     show: false
    //                 },
    //                 axisLine:{      //设置轴线是否显示
    //                     show: false
    //                 }
    //             }
    //         ],
    //         series: [
    //             {
    //                 name: '单产',
    //                 type: 'bar',
    //                 // stack: '总量',
    //                 data: [200, 350, 700, 800, 350, 400, 650, 750],
    //                 symbol: 'none',
    //                 itemStyle: {
    //                     normal: {       //渐变色
    //                         color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
    //                             offset: 0,
    //                             color: '#02F1C4' // 0% 处的颜色
    //                         }, {
    //                             offset: 1,
    //                             color: '#11A2D8' // 100% 处的颜色
    //                         }], false),
    //                         barBorderRadius: [30, 30, 0, 0],
    //                     }
    //                 },
    //                 barWidth: 10,   //设置柱子宽度
    //             }
    //         ]
    //     };

    //     myChart.setOption(option);
    //     changeSize(myChart)
    //     return myChart;
    // },

    //经济作物————产量          -----真实数据
    jingJiZuoWu_3(id, xData, data){
        let myChart = echarts.init(document.getElementById(id));

        let option = {
            tooltip: {
                trigger: 'axis'
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
                top: '20%',
                left: '2%',
                right: '5%',
                bottom: '5%',
                containLabel: true
            },
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
                    name: '产量/吨',
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
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#9fe6b8' // 0% 处的颜色
                            }, {
                                offset: 1,
                                color: '#9fe6b8' // 100% 处的颜色
                            }], false),
                            barBorderRadius: [30, 30, 0, 0],
                        }
                    },
                    barWidth: 10,   //设置柱子宽度
                }
            ]
        };

        myChart.setOption(option);
        changeSize(myChart)
        return myChart;
    },

    //粮食作物————面积      -----真实数据
    liangShiZuoWu_1(id, xData, data, data_yield){
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
                top: '20%',
                left: '2%',
                right: '5%',
                bottom: '15%',
                containLabel: true
            },
            dataZoom: [{          //滚动条设置！！
                show: true,       //设置是否显示
                height: 10,       //设置高度
                xAxisIndex: [
                    0
                ],
                bottom: '12%',         //设置位置
                start: 0,         //设置起始位置
                end: 20,          //设置结束位置
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
                    color: '#fff',
                    interval:0
                },
                axisLine:{      //设置轴线是否显示
                    show: false
                }
            },
            yAxis: [
                {
                    // min: '0',
                    // max: '800',
                    name: '面积/亩',
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
                },
                {
                    // min: '0',
                    // max: '800',
                    name: '面积/亩',
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
                    name: '面积',
                    type: 'bar',
                    // stack: '总量',
                    data,
                    symbol: 'none',
                    itemStyle: {
                        normal: {       //渐变色
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#02F1C4' // 0% 处的颜色
                            }, {
                                offset: 1,
                                color: '#11A2D8' // 100% 处的颜色
                            }], false),
                            barBorderRadius: [30, 30, 0, 0],
                            // color: '#F0AD3D'
                        }
                    },
                    barWidth: 10,   //设置柱子宽度
                },
                {
                    name: '产量',
                    type: 'line',
                    smooth: true,
                    // stack: '总量',
                    data: data_yield,
                    symbol: 'none',
                    yAxisIndex: 1,
                    itemStyle: {
                        // normal: {       //渐变色
                        //     color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        //         offset: 0,
                        //         color: '#02F1C4' // 0% 处的颜色
                        //     }, {
                        //         offset: 1,
                        //         color: '#11A2D8' // 100% 处的颜色
                        //     }], false),
                        //     barBorderRadius: [30, 30, 0, 0],
                        // }
                        color: "#fb7293"
                    },
                    barWidth: 10,   //设置柱子宽度
                }
            ]
        };

        myChart.setOption(option);
        changeSize(myChart)
        return myChart;
    },

    //粮食作物————单产
    // liangShiZuoWu_2(id){
    //     let myChart = echarts.init(document.getElementById(id));

    //     let option = {
    //         // tooltip: {
    //         //     trigger: 'axis'
    //         // },
    //         // legend: {
    //         //     // data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
    //         //     textStyle:{
    //         //         color: '#fff'
    //         //     },
    //         //     top: '-2%',
    //         //     right: '20%'
    //         // },
    //         grid: {     //设置图标位置
    //             top: '20%',
    //             left: '2%',
    //             right: '5%',
    //             bottom: '5%',
    //             containLabel: true
    //         },
    //         xAxis: {
    //             type: 'category',
    //             boundaryGap: true,      //设置x轴距离y轴是否有间距
    //             data: ['2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019'],
    //             axisLabel: {    //设置x轴文字颜色
    //                 color: '#fff'
    //             },
    //             axisLine:{      //设置轴线是否显示
    //                 show: false
    //             }
    //         },
    //         yAxis: [
    //             {
    //                 min: '0',
    //                 max: '800',
    //                 name: '产量/吨',
    //                 type: 'value',
    //                 axisLabel: {    //设置x轴文字颜色
    //                     color: '#fff'
    //                 },
    //                 nameTextStyle: {
    //                     color: '#fff'
    //                 },
    //                 splitLine: {    //设置分隔线
    //                     show: false
    //                 },
    //                 axisLine:{      //设置轴线是否显示
    //                     show: false
    //                 }
    //             }
    //         ],
    //         series: [
    //             {
    //                 name: '单产',
    //                 type: 'bar',
    //                 // stack: '总量',
    //                 data: [200, 350, 700, 800, 350, 400, 650, 750],
    //                 symbol: 'none',
    //                 itemStyle: {
    //                     normal: {       //渐变色
    //                         // color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
    //                         //     offset: 0,
    //                         //     color: '#02F1C4' // 0% 处的颜色
    //                         // }, {
    //                         //     offset: 1,
    //                         //     color: '#11A2D8' // 100% 处的颜色
    //                         // }], false),
    //                         // barBorderRadius: [30, 30, 0, 0],
    //                         color: '#F0AD3D'
    //                     }
    //                 },
    //                 barWidth: 10,   //设置柱子宽度
    //             }
    //         ]
    //     };

    //     myChart.setOption(option);
    //     changeSize(myChart)
    //     return myChart;
    // },

    //粮食作物————产量      -----真实数据
    liangShiZuoWu_3(id, xData, data){
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
                top: '20%',
                left: '2%',
                right: '5%',
                bottom: '5%',
                containLabel: true
            },
            dataZoom: [{          //滚动条设置！！
                show: true,       //设置是否显示
                height: 10,       //设置高度
                xAxisIndex: [
                    0
                ],
                bottom: '12%',         //设置位置
                start: 0,         //设置起始位置
                end: 20,          //设置结束位置
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
                    color: '#fff',
                    interval:0
                },
                axisLine:{      //设置轴线是否显示
                    show: false
                }
            },
            yAxis: [
                {
                    // min: '0',
                    // max: '800',
                    name: '产量/吨',
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
                            // barBorderRadius: [30, 30, 0, 0],
                            color: '#9fe6b8'
                        }
                    },
                    barWidth: 10,   //设置柱子宽度
                }
            ]
        };

        myChart.setOption(option);
        changeSize(myChart)
        return myChart;
    },

    //生产类型占比      -----真实数据
    shengChanLeiXing(id, data){
        var myChart = echarts.init(document.getElementById(id))
        var option = {
        //   tooltip: {
        //     trigger: 'item',
        //     formatter: '{a} <br/>{b}: {c} ({d}%)'
        //   },
          series: [
            {
              name: '养殖产量占比统计',
              type: 'pie',
              color: ['#78E4E4', '#FEE185', '#15C2D1', '#00A1E4', '#85CBFE', '#179F5C'],
              radius: ['60%', '75%'],
              avoidLabelOverlap: false,
              label: {
                normal: {
                    // padding: -50,
                    show: true,
                    formatter: '{b}    {d}%',   //边上所显示的文字
                    textStyle: {
                        fontSize: 14,
                    },
                    position: 'outside'
                },
                emphasis: {
                    show: true
                }
            },
            labelLine: {
                normal: {
                    show: true,    //设置连接线是否显示
                    // length: 20,
                    // length2: 55
                },
                emphasis: {
                    show: false
                }
            },
              data
            }
          ]
        }
    
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option)
        changeSize(myChart)
        return myChart;
    },
    //农机数据————饼图      -----真实数据
    nongJiShuJu(id, data){
        data.forEach(item => {
            item.value = item.value * 1
        })
        var myChart = echarts.init(document.getElementById(id))
        var option = {
        //   tooltip: {
        //     trigger: 'item',
        //     formatter: '{a} <br/>{b}: {c} ({d}%)'
        //   },
            legend: {
                textStyle:{
                    color: '#fff'
                },
                type: 'scroll',
                orient: 'vertical',
                right: '-1%',
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
                    var p = (tarValue);
                    return `${name}   ${p}台`
                    //return name + ' ' + ' ' + ' '+ ' '+ ' '+ ' ' + p + '%';
                },
            },
          series: [
            {
              name: '养殖产量占比统计',
              type: 'pie',
              color: ['#9fe6b8','#32c5e9','#ffdb5c','#ff9f7f','#fb7293','#e7bcf3','#8378ea'],
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

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option)
        changeSize(myChart)
        return myChart;
    },
    
    //种植类型占比数据
    zhongZhiLeiXing(id, xData, data, data_yield){
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
                axisLabel: {    //设置x轴文字颜色
                    color: '#fff',
                    interval:0
                },
                axisLine:{      //设置轴线是否显示
                    show: false
                }
            },
            yAxis: [
                {
                    // min: '0',
                    // max: '800',
                    name: '面积/亩',
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
                },
                {
                    // min: '0',
                    // max: '800',
                    name: '产量/吨',
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
                    name: '面积',
                    type: 'bar',
                    // stack: '总量',
                    data,
                    symbol: 'none',
                    itemStyle: {
                        normal: {       //渐变色
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#8378ea' // 0% 处的颜色
                            }, {
                                offset: 1,
                                color: '#8378ea' // 100% 处的颜色
                            }], false),
                            barBorderRadius: [30, 30, 0, 0],
                        }
                    },
                    barWidth: 10,   //设置柱子宽度
                },
                {
                    name: '产量',
                    type: 'line',
                    smooth: true,
                    // stack: '总量',
                    data: data_yield,
                    symbol: 'none',
                    yAxisIndex: 1,
                    itemStyle: {
                        // normal: {       //渐变色
                        //     color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        //         offset: 0,
                        //         color: '#02F1C4' // 0% 处的颜色
                        //     }, {
                        //         offset: 1,
                        //         color: '#11A2D8' // 100% 处的颜色
                        //     }], false),
                        //     barBorderRadius: [30, 30, 0, 0],
                        // }
                        color: "#FEE185"
                    },
                    barWidth: 10,   //设置柱子宽度
                }
            ]
        };

        myChart.setOption(option);
        changeSize(myChart)
        return myChart;
    }
}