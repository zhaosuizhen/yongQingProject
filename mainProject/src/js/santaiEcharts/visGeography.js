import echarts from 'echarts';
import changeSize from '@/util/changeSize';

export default {

    //耕地面积占比      -----真实数据
    gengDiMianJi(id,data){
        let myChart = echarts.init(document.getElementById(id));

        let option = {
            tooltip: {
                trigger: 'item'
            },
            // backgroundColor:"#0B1837",
            color: ["#EAEA26", "#906BF9", "#FE5656", "#01E17E", "#3DD1F9", "#FFAD05"],
            // title: {
            //     text: '网络/安全设备',
            //     left: '60',
            //     top: 0,
            //     textAlign: 'center',
            //     textStyle: {
            //         color: '#fff',
            //         fontSize: 14,
            //         fontWeight: 0
            //     }
            // },
            grid: {
                left: -100,
                top: 50,
                bottom: 10,
                right: 10,
                containLabel: true
            },
            // tooltip: {
            //     trigger: 'item',
            //     formatter: "{b} : {c} ({d}%)"
            // },
            // legend: {
            //     type: "scroll",
            //     orient: "vartical",
            //     // x: "right",
            //     top: "center",
            //     right: "15",
            //     // bottom: "0%",
            //     itemWidth: 16,
            //     itemHeight: 8,
            //     itemGap: 16,
            //     textStyle: {
            //         color: '#A3E2F4',
            //         fontSize: 12,
            //         fontWeight: 0
            //     },
            //     data: ['IDS', 'VPN', '交换机', '防火墙', 'WAF', '堡垒机']
            // },
            polar: {},
            angleAxis: {
                interval: 1,
                type: 'category',
                data: [],
                z: 10,
                axisLine: {
                    show: false,
                    lineStyle: {
                        color: "#0B4A6B",
                        width: 1,
                        type: "solid"
                    },
                },
                axisLabel: {
                    interval: 0,
                    show: true,
                    color: "#0B4A6B",
                    margin: 8,
                    fontSize: 16
                },
            },
            radiusAxis: {
                min: 40,
                max: 120,
                interval: 20,
                axisLine: {
                    show: false,
                    lineStyle: {
                        color: "#0B3E5E",
                        width: 1,
                        type: "solid"
                    },
                },
                axisLabel: {
                    formatter: '{value} %',
                    show: false,
                    // padding: [0, 0, 20, 0],
                    color: "#0B3E5E",
                    fontSize: 16
                },
                splitLine: {
                    lineStyle: {
                        color: "#0B3E5E",
                        width: 2,
                        type: "solid"
                    }
                }
            },
            calculable: true,
            series: [{
                type: 'pie',
                radius: ["5%", "10%"],
                hoverAnimation: false,
                labelLine: {
                    normal: {
                        show: false,
                        length: 30,
                        length2: 55
                    },
                    emphasis: {
                        show: false
                    }
                },
                data: [{
                    name: '',
                    value: 0,
                    itemStyle: {
                        normal: {
                            color: "#0B4A6B"
                        }
                    }
                }]
            }, {
                type: 'pie',
                radius: ["88%", "90%"],
                hoverAnimation: false,
                labelLine: {
                    normal: {
                        show: false,
                        length: 30,
                        length2: 55
                    },
                    emphasis: {
                        show: false
                    }
                },
                name: "",
                data: [{
                    name: '',
                    value: 0,
                    itemStyle: {
                        normal: {
                            color: "#0B4A6B"
                        }
                    }
                }]
            },{
                stack: 'a',
                type: 'pie',
                radius: ['0%', '80%'],
                roseType: 'area',
                zlevel:10,
                color: ['#66B8A7', '#66B8BC', '#68BFDC', '#66B8FF', '#66B88D'],
                
                label: {
                    normal: {
                        padding: -50,
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
                        show: false,    //设置连接线是否显示
                        length: 20,
                        length2: 55
                    },
                    emphasis: {
                        show: false
                    }
                },
                data
            }, ]
        }

        myChart.setOption(option);
        changeSize(myChart)
        return myChart;
    },

    //乡镇承包地块————数量          -----真实数据
    xiangZhenChengBao_1(id, xData, data, data_line){
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
                // top: '-2%',
                // right: '20%'
            },
            grid: {     //设置图标位置
                top: '15%',
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
               end: 100,          //设置结束位置
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
                    name: '数量/个',
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
                    type: 'line',
                    // stack: '总量',
                    data: data_line,
                    yAxisIndex: 1,      //使用那个y轴
                    symbol: 'none',
                    itemStyle: {
                        color: '#FEE186'
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
                    },
                    barWidth: 10,   //设置柱子宽度
                },
                {
                    name: '数量',
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

    //乡镇承包地块————面积          -----真实数据
    xiangZhenChengBao_2(id, xData, data){
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
               end: 100,          //设置结束位置
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

    //耕地地力等级      -----真实数据
    gengDiDiLi(id, xData, data){
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
                            // color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            //     offset: 0,
                            //     color: '#02F1C4' // 0% 处的颜色
                            // }, {
                            //     offset: 1,
                            //     color: '#11A2D8' // 100% 处的颜色
                            // }], false),
                            color: '#9fe6b8',
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

    //监测点分布      -----真实数据
    jianCeDianFenBu(id, xData, data){
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
                bottom: '8%',
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
               end: 50,          //设置结束位置
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
                    name: '数量/万个',
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
                    name: '监测点数量',
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
                            color: '#F0AD3D',
                            // barBorderRadius: [30, 30, 0, 0],
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

    //乡镇耕地分布      -----真实数据
    xiangZhenGengDi(id, xData, data){

        const value = (Math.floor(data[0]/500) + 1) * 500
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
                     top:'15%',
                     right: '2%',
                     bottom: '8%',
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

    //幸福美丽新村      -----真实数据
    nongCunRenJuHuanJing(id, xData, data){

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
                     top:'15%',
                     right: '2%',
                     bottom: '8%',
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
                     name:'数量/个',
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
                                    color: '#44F3FF' // 0% 处的颜色
                                }, {
                                    offset: 1,
                                    color: '#3488DC' // 100% 处的颜色
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

    //土地资源结构————饼图          -----真实数据
    tuDiZiYuan(id, data){
        var myChart = echarts.init(document.getElementById(id))
        var option = {
            //   tooltip: {
            //     trigger: 'item',
            //     formatter: '{a} <br/>{b}: {c} ({d}%)'
            //   },
              legend: {
                textStyle: {
                  color: '#FFF',
                  rich: {
                      uname: {
                          width: 70
                      },
                      unum: {
                          width: 40,
                          align: 'right'
                      }
                    }
                  },
                  type: 'scroll',
                  orient: 'vertical',
                  right: '5%',
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
                    var p = tarValue
                    return `{uname|${name}}{unum|${p}亩}`
                    //return name + ' ' + ' ' + ' '+ ' '+ ' '+ ' ' + p + '%';
                },
              },
              series: [
                {
                  name: '投入品占比',
                  type: 'pie',
                  color: ['#37a2da','#9fe6b8','#ff9f7f','#8378ea'],
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

        //耕地面积占比 ---左侧
        zhongZhiLeiXing_left(id, data, total){
            let baiFenBi = (data/total * 100).toFixed(2)
            // console.log(baiFenBi)
            let myChart = echarts.init(document.getElementById(id));
    
            let option = {
                // backgroundColor:"rgb(0,0,0)",
                series: {
                    type: 'pie',
                    clockWise: false,
                    radius: [50, 55],
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
                                fontSize: 25,
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
    
        //耕地面积占比 ---中间
        zhongZhiLeiXing_center(id, data, total){
            let baiFenBi = (data/total * 100).toFixed(2)
            let myChart = echarts.init(document.getElementById(id));
    
            let option = {
                // backgroundColor:"rgb(0,0,0)",
                series: {
                    type: 'pie',
                    clockWise: false,
                    radius: [50, 55],
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
                                fontSize: 25,
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
    
        //耕地面积占比 ---右侧
        zhongZhiLeiXing_right(id, data, total){
            console.log(data)
            console.log(total)
            let baiFenBi = (data/total * 100).toFixed(2)
            let myChart = echarts.init(document.getElementById(id));
    
            let option = {
                // backgroundColor:"rgb(0,0,0)",
                series: {
                    type: 'pie',
                    clockWise: false,
                    radius: [50, 55],
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
                                fontSize: 25,
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
}