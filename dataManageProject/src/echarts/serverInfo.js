import echarts from 'echarts';
import changeSize from '@/utils/changeSize';

export default {
    //负载状态————饼图          -----真实数据
    fuZaiZhuangTai(id, data){
        var myChart = echarts.init(document.getElementById(id))
        var option = {
            title: {
                text: '负载状态',
                left: 'center'
            },

        //   tooltip: {
        //     trigger: 'item',
        //     formatter: '{a} <br/>{b}: {c} ({d}%)'
        //   },
          series: [
            {
                hoverAnimation:false,
              name: '养殖产量占比统计',
              type: 'pie',
              color: ['#5599FE','#F3F6F8'],
              radius: ['60%', '80%'],
              center: ['50%', '60%'],
              avoidLabelOverlap: false,
              label: {
                show: false,
                position: 'center'
              },
            //   labelLine: {
            //     show: false
            //   },
            //   label: {
            //     normal: {
            //         // padding: -50,
            //         show: true,
            //         formatter: '{b}    {d}%',   //边上所显示的文字
            //         textStyle: {
            //             fontSize: 14,
            //         },
            //         position: 'outside'
            //     },
            //     emphasis: {
            //         show: true
            //     }
            // },
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

    //内存使用率————饼图          -----真实数据
    neiCunShiYongLv(id, data){
        var myChart = echarts.init(document.getElementById(id))
        var option = {
            title: {
                text: '内存使用率',
                left: 'center'
            },

        //   tooltip: {
        //     trigger: 'item',
        //     formatter: '{a} <br/>{b}: {c} ({d}%)'
        //   },
          series: [
            {
                hoverAnimation:false,
              name: '养殖产量占比统计',
              type: 'pie',
              color: ['#5599FE','#F3F6F8'],
              radius: ['60%', '80%'],
              center: ['50%', '60%'],
              avoidLabelOverlap: false,
              label: {
                show: false,
                position: 'center'
              },
            //   labelLine: {
            //     show: false
            //   },
            //   label: {
            //     normal: {
            //         // padding: -50,
            //         show: true,
            //         formatter: '{b}    {d}%',   //边上所显示的文字
            //         textStyle: {
            //             fontSize: 14,
            //         },
            //         position: 'outside'
            //     },
            //     emphasis: {
            //         show: true
            //     }
            // },
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

    //存储状态————饼图          -----真实数据
    cunChuZhuangTai(id, data){
        var myChart = echarts.init(document.getElementById(id))
        var option = {
            title: {
                text: '存储状态',
                left: 'center'
            },

        //   tooltip: {
        //     trigger: 'item',
        //     formatter: '{a} <br/>{b}: {c} ({d}%)'
        //   },
          series: [
            {
                hoverAnimation:false,
              name: '养殖产量占比统计',
              type: 'pie',
              color: ['#5599FE','#F3F6F8'],
              radius: ['60%', '80%'],
              center: ['50%', '60%'],
              avoidLabelOverlap: false,
              label: {
                show: false,
                position: 'center'
              },
            //   labelLine: {
            //     show: false
            //   },
            //   label: {
            //     normal: {
            //         // padding: -50,
            //         show: true,
            //         formatter: '{b}    {d}%',   //边上所显示的文字
            //         textStyle: {
            //             fontSize: 14,
            //         },
            //         position: 'outside'
            //     },
            //     emphasis: {
            //         show: true
            //     }
            // },
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

    //用户访问
    yongHuFangWen(id, dataTime, data){
        let myChart = echarts.init(document.getElementById(id));

        let option = {
            title: {
                text: '用户访问数量',
                left: 'center'
            },
            // tooltip: {
            //     trigger: 'axis'
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
                // formatter: "{b}：{c}个",
              },
            // legend: {
            //     // data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
            //     textStyle:{
            //         color: '#fff'
            //     },
            //     top: '0%',
            //     // right: '20%'
            //     right: '0%'
            // },
            grid: {     //设置图标位置
                top: '15%',
                left: '5%',
                right: '5%',
                bottom: '5%',
                containLabel: true
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: dataTime,
                axisLabel: {    //设置x轴文字颜色
                    color: '#000'
                },
                axisLine:{      //设置轴线是否显示
                    show: true
                }
            },
            yAxis: [
                {
                    
                    // name: '单位/元',
                    type: 'value',
                    axisLabel: {    //设置x轴文字颜色
                        color: '#000'
                    },
                    nameTextStyle: {
                        color: '#000'
                    },
                    splitLine: {    //设置分隔线
                        show: false
                    },
                    axisLine:{      //设置轴线是否显示
                        show: true
                    }
                }
            ],
            series: [
                {
                    // name: '养殖成本',
                    type: 'line',
                    // stack: '总量',
                    data,
                    symbol: 'none',     //去掉点
                    smooth: 0.5,        //变平滑
                    itemStyle:{
                        color: '#5599FE'
                    },
                    areaStyle: {                    //设置折线下面的颜色
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                {
                                    offset: 0,
                                    color: 'rgba(85,153,254, 0.5)'
                                },
                                {
                                    offset: 1,
                                    color: 'rgba(0,0,0,0)'
                                }
                            ], false),
                            shadowColor: 'rgba(85,153,254, 0.5)',
                            shadowBlur: 20
                        }
                    }
                }
            ]
        };
        
        myChart.setOption(option);
        changeSize(myChart)
        return myChart;
    },

    //服务器请求数量
    fuWuQiQingQiu(id, dataTime, data){
        let myChart = echarts.init(document.getElementById(id));

        let option = {
            title: {
                text: '服务器请求数量',
                left: 'center'
            },
            // tooltip: {
            //     trigger: 'axis'
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
                // formatter: "{b}：{c}个",
              },
            // legend: {
            //     // data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
            //     textStyle:{
            //         color: '#fff'
            //     },
            //     top: '0%',
            //     // right: '20%'
            //     right: '0%'
            // },
            grid: {     //设置图标位置
                top: '15%',
                left: '5%',
                right: '5%',
                bottom: '5%',
                containLabel: true
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: dataTime,
                axisLabel: {    //设置x轴文字颜色
                    color: '#000'
                },
                axisLine:{      //设置轴线是否显示
                    show: true
                }
            },
            yAxis: [
                {
                    
                    // name: '单位/元',
                    type: 'value',
                    axisLabel: {    //设置x轴文字颜色
                        color: '#000'
                    },
                    nameTextStyle: {
                        color: '#000'
                    },
                    splitLine: {    //设置分隔线
                        show: false
                    },
                    axisLine:{      //设置轴线是否显示
                        show: true
                    }
                }
            ],
            series: [
                {
                    // name: '养殖成本',
                    type: 'line',
                    // stack: '总量',
                    data,
                    symbol: 'none',     //去掉点
                    smooth: 0.5,        //变平滑
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
                    }
                }
            ]
        };
        
        myChart.setOption(option);
        changeSize(myChart)
        return myChart;
    },

    //内存使用情况
    neiCunShiYong(id, dataTime, data){
        let myChart = echarts.init(document.getElementById(id));

        let option = {
            title: {
                text: '内存使用情况',
                left: 'center'
            },
            // tooltip: {
            //     trigger: 'axis'
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
                // formatter: "{b}：{c}个",
              },
            // legend: {
            //     // data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
            //     textStyle:{
            //         color: '#fff'
            //     },
            //     top: '0%',
            //     // right: '20%'
            //     right: '0%'
            // },
            grid: {     //设置图标位置
                top: '15%',
                left: '5%',
                right: '5%',
                bottom: '5%',
                containLabel: true
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: dataTime,
                axisLabel: {    //设置x轴文字颜色
                    color: '#000'
                },
                axisLine:{      //设置轴线是否显示
                    show: true
                }
            },
            yAxis: [
                {
                    
                    // name: '单位/元',
                    type: 'value',
                    axisLabel: {    //设置x轴文字颜色
                        color: '#000'
                    },
                    nameTextStyle: {
                        color: '#000'
                    },
                    splitLine: {    //设置分隔线
                        show: false
                    },
                    axisLine:{      //设置轴线是否显示
                        show: true
                    }
                }
            ],
            series: [
                {
                    // name: '养殖成本',
                    type: 'line',
                    // stack: '总量',
                    data,
                    symbol: 'none',     //去掉点
                    smooth: 0.5,        //变平滑
                    itemStyle:{
                        color: '#CBC437'
                    },
                    areaStyle: {                    //设置折线下面的颜色
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                {
                                    offset: 0,
                                    color: 'rgba(203,203,58, 0.5)'
                                },
                                {
                                    offset: 1,
                                    color: 'rgba(0,0,0,0)'
                                }
                            ], false),
                            shadowColor: 'rgba(203,203,58, 0.5)',
                            shadowBlur: 20
                        }
                    }
                }
            ]
        };
        
        myChart.setOption(option);
        changeSize(myChart)
        return myChart;
    },
}