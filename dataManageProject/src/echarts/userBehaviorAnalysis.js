import echarts from 'echarts';
import changeSize from '@/utils/changeSize';

export default {
    //访问次数趋势
    fangWenCiShuQuShi(id, dataTime, data){
        let myChart = echarts.init(document.getElementById(id));

        let option = {
            title: {
                text: '访问次数趋势',
                left: 'left'
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

    //模块点击量
    moKuaiDianJiLiang(id, dataX, dataY){
        let myChart = echarts.init(document.getElementById(id));

        let option = {
            title: {
                text: '模块点击量',
                left: 'left'
                // subtext: '数据来自网络'
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            // legend: {
            //     data: ['2011年', '2012年']
            // },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: {
                type: 'value',
                boundaryGap: [0, 0.01],
                axisTick: {
                    show: false
                },
                splitLine: {
                    // show:false
                }
            },
            yAxis: {
                type: 'category',
                data: dataX
            },
            series: [
                {
                    name: '2011年',
                    type: 'bar',
                    data: dataY,
                    color: '#00BCEA',
                    barMaxWidth : 30,//柱图宽度
                    itemStyle: {
                        normal: {
                            label: {
                                show: true, //开启显示
                                position: 'right', //在上方显示
                                textStyle: { //数值样式
                                    color: '#00BCEA',
                                    fontSize: 18,
                                }
                            }
                        }
                    }
                }
            ]
        };

        
        myChart.setOption(option);
        changeSize(myChart)
        return myChart;
    },

    //模块浏览排序
    moKuaiLiuLanPaiXu(id, dataX, dataY){
        let myChart = echarts.init(document.getElementById(id));

        let option = {
            title: {
                text: '模块浏览排序',
                left: 'left'
                // subtext: '数据来自网络'
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            // legend: {
            //     data: ['2011年', '2012年']
            // },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: {
                type: 'value',
                boundaryGap: [0, 0.01],
                axisTick: {
                    show: false
                },
                splitLine: {
                    // show:false
                }
            },
            yAxis: {
                type: 'category',
                data: dataX
            },
            series: [
                {
                    name: '2011年',
                    type: 'bar',
                    data: dataY,
                    color: '#FF9E00',
                    barMaxWidth : 30,//柱图宽度
                    itemStyle: {
                        normal: {
                            label: {
                                show: true, //开启显示
                                position: 'right', //在上方显示
                                textStyle: { //数值样式
                                    color: '#FF9E00',
                                    fontSize: 18,
                                }
                            }
                        }
                    }
                }
            ]
        };

        
        myChart.setOption(option);
        changeSize(myChart)
        return myChart;
    },

    //实时点击、实时登录
    shiShiDianJi_dengLu(id, dataTime, data1, data2, name){
        let myChart = echarts.init(document.getElementById(id));

        let option = {
            title: {
                text: name,
                left: 'left'
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
                    data: data1,
                    symbol: 'none',     //去掉点
                    smooth: 0.5,        //变平滑
                    itemStyle:{
                        color: '#08C0EA'
                    },
                    areaStyle: {                    //设置折线下面的颜色
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                {
                                    offset: 0,
                                    color: 'rgba(8,192,234, 0.5)'
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
                },
                {
                    // name: '养殖成本',
                    type: 'line',
                    // stack: '总量',
                    data: data2,
                    symbol: 'none',     //去掉点
                    smooth: 0.5,        //变平滑
                    itemStyle:{
                        color: '#B381E6'
                    },
                    areaStyle: {                    //设置折线下面的颜色
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                {
                                    offset: 0,
                                    color: 'rgba(203,149,217, 0.5)'
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

}