import echarts from 'echarts';
import changeSize from '@/util/changeSize';

export default {

    //主体类型统计----饼图      -----真实数据
    zhuTiLeiXing(id, data){
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
              color: ['#78E4E4', '#FEE185', '#15C2D1', '#00A1E4', '#85CBFE'],
              radius: ['45%', '60%'],
              avoidLabelOverlap: false,
              label: {
                show: false,
                position: 'center'
              },
              labelLine: {
                show: false
              },
              label: {
                normal: {
                    // padding: -50,
                    show: true,
                    formatter: '{b}    {d}%',   //边上所显示的文字
                    textStyle: {
                        fontSize: 12,
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

    //三品一标企业————无公害        -----真实数据
    sanPinYiBiao_1(id, xData, data){
        // console.log(xData,data)
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
                    name: '防保面积',
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

    //三品一标企业————有机          -----真实数据
    sanPinYiBiao_2(id, xData, data){
        console.log(xData,data)
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
                    name: '防保面积',
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

    // 经营类型统计 -----真实数据      
    liNianQiYe(id, yData, data){
            let myChart = echarts.init(document.getElementById(id));

            //获取数组最大值
            let maxData = Math.max.apply(Math,data)
            maxData = (Math.floor(maxData/100) + 1) * 100

            let maxDataArr = data.map( () => maxData)

            // var data = ['1257', '1058', '958', '819', '657', '313', '303', '297', '286', '267', '205', '186', '205', '186', '205', '186', '205', '186', '205', '186']
    
            var myColor = ['#A3D890', '#A3D890', '#A3D890', '#A3D890', '#A3D890', '#A3D890', '#A3D890', '#A3D890', '#A3D890', '#A3D890'];
            let option = {
                // backgroundColor: '#0e2147',
                grid: {
                    // left: '11%',
                    top: '10%',
                    right: '0%',
                    bottom: '5%',
                    containLabel: true
                },
                xAxis: [{
                    show: false,
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

    // 历年企业增长数量      -----真实数据    
    jingYingLeiXing(id, data, xData){
        
        let maxData = Math.max.apply(Math,data)
        maxData = (Math.floor(maxData/100) + 1) * 100

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
                     top:'25%',
                     right: '2%',
                    //  bottom: '-50%',
                     bottom: '18%',
                     containLabel: true
                 },
                 xAxis: [{
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
                             },
                            //  rotate:"-40"
                         },
                         
                         data: xData
                     }, {
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
                     name:'数量/个',
                    //  nameGap:35,         //设置name距离图标的距离
                     nameTextStyle:{
                         color:'#ffffff',
                        //  fontSize:16,
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
                    //      xAxisIndex: 1,
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
                         type: 'line',
                         smooth: true,
                         z:10,
                         itemStyle: {
                            normal: {       //渐变色
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: '#6CD3B5' // 0% 处的颜色
                                }, {
                                    offset: 1,
                                    color: '#6CD3B5' // 100% 处的颜色
                                }], false),
                                // barBorderRadius: [30, 30, 0, 0],
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
                        //  label: {
                        //      normal: {
                        //          show: false,
     
                        //      }
                        //  },
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

    //乡镇主体分布      -----真实数据
    xiangZhenZhuTi(id, xData, dataObj){
        let myChart = echarts.init(document.getElementById(id));

        var option = {
            // backgroundColor: "#344b58",
        
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
            "grid": {
                // "borderWidth": 0,
                "top": '20%',
                "bottom": '20%',
                textStyle: {
                    color: "#fff"
                }
            },
            "legend": {
                top: '0%',
                right: '0%',
                textStyle: {
                    color: '#fff',
                },
                
            },
             
        
            "calculable": true,
            "xAxis": [{
                "type": "category",
                "axisLine": {       //坐标轴轴线的相关配置
                    show: false,
                    lineStyle: {
                        color: '#fff'
                    }
                },
                "splitLine": {
                    "show": false
                },
                "axisTick": {
                    "show": false
                },
                "splitArea": {
                    "show": false
                },
                "axisLabel": {
                    "interval": 0,
        
                },
                "data": xData
            }],
            "yAxis": [{
                "type": "value",
                name: '数量/个',
                "splitLine": {
                    "show": false
                },
                "axisLine": {
                    show: false,
                    lineStyle: {
                        color: '#fff'
                    }
                },
                "axisTick": {
                    "show": false
                },
                "axisLabel": {
                    "interval": 0,
        
                },
                "splitArea": {
                    "show": false
                },
        
            }],
            "dataZoom": [{          //滚动条设置！！
                "show": true,       //设置是否显示
                "height": 10,       //设置高度
                "xAxisIndex": [
                    0
                ],
                bottom: '0%',         //设置位置
                "start": 0,         //设置起始位置
                "end": 50,          //设置结束位置
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
                "type": "inside",
                // disabled: true,     //可以设置鼠标滚轮控制失效，不知道有啥用
                "show": true,
                "height": 15,
                "start": 1,
                "end": 35
            }],
            "series": [{
                    "name": "家庭农场",
                    "type": "bar",
                    "stack": "总量",
                    "barMaxWidth": 35,
                    "barGap": "10%",
                    barWidth: 10,   //设置柱子宽度
                    "itemStyle": {
                        "normal": {
                            "color": "#37a2da"
                            // "label": {
                            //     "show": true,
                            //     "textStyle": {
                            //         "color": "#fff"
                            //     },
                            //     "position": "inside",
                            //     formatter: function(p) {
                            //         return p.value > 0 ? (p.value) : '';
                            //     }
                            // }
                        }
                    },
                    "data": dataObj.data_JTNC,
                },{
                    "name": "龙头企业",
                    "type": "bar",
                    "stack": "总量",
                    barWidth: 10,   //设置柱子宽度
                    "itemStyle": {
                        "normal": {
                            "color": "#9fe6b8",
                            "barBorderRadius": 0
                            // "label": {
                            //     "show": true,
                            //     "position": "inside",
                            //     formatter: function(p) {
                            //         return p.value > 0 ? (p.value) : '';
                            //     }
                            // }
                        }
                    },
                    "data": dataObj.data_LTQY
                },{
                    "name": "专业合作社",
                    "type": "bar",
                    "stack": "总量",
                    barWidth: 10,   //设置柱子宽度
                    "itemStyle": {
                        "normal": {
                            "color": "#e7bcf3",
                            "barBorderRadius": 0
                            // "label": {
                            //     "show": true,
                            //     "position": "inside",
                            //     formatter: function(p) {
                            //         return p.value > 0 ? (p.value) : '';
                            //     }
                            // }
                        }
                    },
                    "data": dataObj.data_ZYHZS
                }
            ]
        }
        
        myChart.setOption(option);
        changeSize(myChart)
        return myChart;
    },


    //主体类型统计 ---左侧
    zhuTiLeiXing_left(id, data, total){
        // console.log(data)
        // console.log(total)
            let baiFenBi = (data/total * 100).toFixed(2)
            // console.log(baiFenBi)
            let myChart = echarts.init(document.getElementById(id));
    
            let option = {
                // backgroundColor:"rgb(0,0,0)",
                series: {
                    type: 'pie',
                    clockWise: false,
                    radius: [30, 35],
                    hoverAnimation: false,
                    silent: true,
                    center: ['50%', '50%'],
                    itemStyle:{
                        normal:{
                            labelLine: {
                                show:false,
                            },
                        }
                    },
                    data: [{
                      value: data,
                        label:{
                            normal:{
                                show: true,
                                position:"center",
                                formatter: `${baiFenBi}%`,
                                fontSize: 16,
                                fontWeight: 900,
                                color: "white",
                            }
                        },
                      itemStyle: {
                        normal: {
                            color: '#3DD4FF',
                            // shadowColor: '#3DD4FF',
                            borderWidth:2,
                            borderColor:'#3DD4FF',
                            // shadowBlur: 3
                        }
                      }
                    },{
                        value: (total - data),
                          itemStyle: {
                              normal: {
                                color: '#405773',
                              }
                          }
                    }]
                }
            }
    
            myChart.setOption(option);
            changeSize(myChart)
            return myChart;
    },

    //主体类型统计 ---最后一个
    zhuTiLeiXing_center(id, data, total){
            let baiFenBi = (data/total * 100).toFixed(2)
            let myChart = echarts.init(document.getElementById(id));
    
            let option = {
                // backgroundColor:"rgb(0,0,0)",
                series: {
                    type: 'pie',
                    clockWise: false,
                    radius: [30, 35],
                    hoverAnimation: false,
                    silent: true,
                    center: ['50%', '50%'],
                    itemStyle:{
                        normal:{
                            labelLine: {
                                show:false,
                            },
                        }
                    },
                    data: [{
                      value: data,
                        label:{
                            normal:{
                                show: true,
                                position:"center",
                                formatter: `${baiFenBi}%`,
                                fontSize: 16,
                                fontWeight: 900,
                                color: "white",
                            }
                        },
                      itemStyle: {
                        normal: {
                            color: '#FEE36C',
                            // shadowColor: '#FEE36C',         //粗柱子阴影颜色
                            borderWidth:2,
                            borderColor:'#FEE36C',          //粗柱子颜色
                            // shadowBlur: 3
                        }
                      }
                    },{
                        value: total - data,
                          itemStyle: {
                              normal: {
                                color: '#405773',           //细柱子颜色
                              }
                          }
                    }]
                }
            }
    
            myChart.setOption(option);
            changeSize(myChart)
            return myChart;
    
    },

    //主体类型统计 ---右侧
    zhuTiLeiXing_right(id, data, total){
            // console.log(data)
            // console.log(total)
            let baiFenBi = (data/total * 100).toFixed(2)
            let myChart = echarts.init(document.getElementById(id));
    
            let option = {
                // backgroundColor:"rgb(0,0,0)",
                series: {
                    type: 'pie',
                    clockWise: false,
                    radius: [30, 35],
                    hoverAnimation: false,
                    silent: true,
                    center: ['50%', '50%'],
                    itemStyle:{
                        normal:{
                            labelLine: {
                                show:false,
                            },
                        }
                    },
                    data: [{
                      value: data,
                        label:{
                            normal:{
                                show: true,
                                position:"center",
                                formatter: `${baiFenBi}%`,
                                fontSize: 16,
                                fontWeight: 900,
                                color: "white",
                            }
                        },
                      itemStyle: {
                        normal: {
                            color: '#60D5B2',
                            // shadowColor: '#60D5B2',
                            borderWidth:2,
                            borderColor:'#60D5B2',
                            // shadowBlur: 3
                        }
                      }
                    },{
                        value: total - data,
                          itemStyle: {
                              normal: {
                                color: '#405773',
                              }
                          }
                    }]
                }
            }
            
            myChart.setOption(option);
            changeSize(myChart)
            return myChart;
    
    },
    //主体类型统计 ---右侧
    zhuTiLeiXing_last(id, data, total){
            // console.log(data)
            // console.log(total)
            let baiFenBi = (data/total * 100).toFixed(2)
            let myChart = echarts.init(document.getElementById(id));
    
            let option = {
                // backgroundColor:"rgb(0,0,0)",
                series: {
                    type: 'pie',
                    clockWise: false,
                    radius: [30, 35],
                    hoverAnimation: false,
                    silent: true,
                    center: ['50%', '50%'],
                    itemStyle:{
                        normal:{
                            labelLine: {
                                show:false,
                            },
                        }
                    },
                    data: [{
                      value: data,
                        label:{
                            normal:{
                                show: true,
                                position:"center",
                                formatter: `${baiFenBi}%`,
                                fontSize: 16,
                                fontWeight: 900,
                                color: "white",
                            }
                        },
                      itemStyle: {
                        normal: {
                            color: '#FF9F7F',
                            // shadowColor: '#FF9F7F',
                            borderWidth:2,
                            borderColor:'#FF9F7F',
                            // shadowBlur: 3
                        }
                      }
                    },{
                        value: total - data,
                          itemStyle: {
                              normal: {
                                color: '#405773',
                              }
                          }
                    }]
                }
            }
            
            myChart.setOption(option);
            changeSize(myChart)
            return myChart;
    
    },
    //乡镇主体分布      -----真实数据
    xiangZhenZhuTiFenBu(id, index, dataName, xData, dataNC, dataQY, dataHZS, dataDH){
        let myChart = echarts.init(document.getElementById(id));

        let seriesArr = [
            [{
                name: dataName[0],
                type: 'bar',
                data: dataNC,       //化肥
                // symbol: 'none',
                // smooth: true
                itemStyle: {
                    normal: {       //渐变色
                        // color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        //     offset: 0,
                        //     color: '#02F1C4' // 0% 处的颜色
                        // }, {
                        //     offset: 1,
                        //     color: '#11A2D8' // 100% 处的颜色
                        // }], false),
                        color: '#37a2da',
                        // barBorderRadius: [30, 30, 0, 0],
                    }
                },
                barWidth: 15,   //设置柱子宽度
            },
            {
                name: dataName[1],
                type: 'bar',
                data: dataQY,       //地膜
                // symbol: 'none',
                itemStyle: {
                    normal: {       //渐变色
                        // color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        //     offset: 0,
                        //     color: '#02F1C4' // 0% 处的颜色
                        // }, {
                        //     offset: 1,
                        //     color: '#11A2D8' // 100% 处的颜色
                        // }], false),
                        color: '#8378ea',
                        // barBorderRadius: [30, 30, 0, 0],
                    }
                },
                barWidth: 15,   //设置柱子宽度
            }]
            ,
            [{
                name: dataName[2],
                type: 'bar',
                data: dataHZS,       //农药
                // symbol: 'none',
                itemStyle: {
                    normal: {       //渐变色
                        // color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        //     offset: 0,
                        //     color: '#02F1C4' // 0% 处的颜色
                        // }, {
                        //     offset: 1,
                        //     color: '#11A2D8' // 100% 处的颜色
                        // }], false),
                        color: '#9fe6b8',
                        // barBorderRadius: [30, 30, 0, 0],
                    }
                },
                barWidth: 15,   //设置柱子宽度
            },
            {
                name: dataName[3],
                type: 'bar',
                data: dataDH,     //农用柴油
                // symbol: 'none',
                itemStyle: {
                    normal: {       //渐变色
                        // color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        //     offset: 0,
                        //     color: '#02F1C4' // 0% 处的颜色
                        // }, {
                        //     offset: 1,
                        //     color: '#11A2D8' // 100% 处的颜色
                        // }], false),
                        color: '#ffdb5c',
                        // barBorderRadius: [30, 30, 0, 0],
                    }
                },
                barWidth: 15,   //设置柱子宽度
            }]
        ]

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
                top: '0%',
                // right: '10%'
                right: '0%'
            },
            grid: {     //设置图标位置
                top: '28%',
                left: '2%',
                right: '2%',
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
                end: 40,          //设置结束位置
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
                    name: '单位/家',
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
            series: seriesArr[index]
        };
        
        myChart.setOption(option);
        changeSize(myChart)
        return myChart;
    },
}