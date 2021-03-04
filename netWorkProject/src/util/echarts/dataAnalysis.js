import echarts from 'echarts';
import changeSize from '@/util/changeSize';

export default {
    // 
    tradition(id, xData, yData, title, name){
        let myChart = echarts.init(document.getElementById(id));

        let option = {
            // backgroundColor: '#080b30',
            title: {
                text: title,
                textStyle: {
                    align: 'center',
                    color: '#fff',
                    fontSize: 15,
                },
                top: '14%',
                left: 'center',
            },
            legend: {
                show: true,
                icon: "rect",
                itemWidth: 14,
                itemHeight: 5,
                itemGap: 10,
                right: "0%",
                top: "13%",
                textStyle: {
                    fontSize: 10,
                    color: "#ccc"
                }
            },
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
                                color: 'rgba(0, 255, 233,0)'
                            }, {
                                offset: 0.5,
                                color: 'rgba(255, 255, 255,1)',
                            }, {
                                offset: 1,
                                color: 'rgba(0, 255, 233,0)'
                            }],
                            global: false
                        }
                    },
                },
            },
            grid: {
                top: '35%',
                left: '15%',
                right: '5%',
                bottom: '15%',
                // containLabel: true
            },
            xAxis: [{
                type: 'category',
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                splitArea: {
                    show: false,
                    color: '#f00',
                    lineStyle: {
                        color: '#f00'
                    },
                },
                axisLabel: {
                    color: '#fff'
                },
                splitLine: {
                    show: false
                },
                boundaryGap: false,
                data: xData,
        
            }],
        
            yAxis: [{
                type: 'value',
                name: '单位：元',
                nameTextStyle:{
                    color:'#fff',
                    align:'right',
                    lineHeight:10
                },
                min: 0,
                // max: 140,
                splitNumber: 4,
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: 'rgba(255,255,255,0.1)'
                    }
                },
                axisLine: {
                    show: false,
                },
                axisLabel: {
                    color: '#fff'
                },
                axisTick: {
                    show: false,
                },
            }],
            series: [{
                    name,
                    type: 'line',
                    smooth: true, //是否平滑
                    showAllSymbol: false,
                    // symbol: 'image://./static/images/guang-circle.png',
                    symbol: 'circle',
                    symbolSize: 2,
                    lineStyle: {
                        normal: {
                            color: "#91D27F",
                        },
                    },
                    itemStyle: {
                        color: "#91D27F",
                    },
                    tooltip: {
                        show: true
                    },
                    areaStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: 'rgba(144,204,128,0.3)'
                                },
                                {
                                    offset: 1,
                                    color: 'rgba(144,204,128,0)'
                                }
                            ], false),
                            shadowColor: 'rgba(144,204,128, 0.9)',
                            shadowBlur: 20
                        }
                    },
                    data: yData
                }
            ]
        };
        
        myChart.setOption(option);
        changeSize(myChart)
        return myChart;
    },

    // 
    number(id, xData, yData, title, name){
        let myChart = echarts.init(document.getElementById(id));

        let option = {
            // backgroundColor: '#080b30',
            title: {
                text: title,
                textStyle: {
                    align: 'center',
                    color: '#fff',
                    fontSize: 15,
                },
                top: '14%',
                left: 'center',
            },
            legend: {
                show: true,
                icon: "rect",
                itemWidth: 14,
                itemHeight: 5,
                itemGap: 10,
                right: "0%",
                top: "13%",
                textStyle: {
                    fontSize: 10,
                    color: "#ccc"
                }
            },
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
                                color: 'rgba(0, 255, 233,0)'
                            }, {
                                offset: 0.5,
                                color: 'rgba(255, 255, 255,1)',
                            }, {
                                offset: 1,
                                color: 'rgba(0, 255, 233,0)'
                            }],
                            global: false
                        }
                    },
                },
            },
            grid: {
                top: '35%',
                left: '15%',
                right: '5%',
                bottom: '15%',
                // containLabel: true
            },
            xAxis: [{
                type: 'category',
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                splitArea: {
                    show: false,
                    color: '#f00',
                    lineStyle: {
                        color: '#f00'
                    },
                },
                axisLabel: {
                    color: '#fff'
                },
                splitLine: {
                    show: false
                },
                boundaryGap: false,
                data: xData,
        
            }],
        
            yAxis: [{
                type: 'value',
                name: '单位：元',
                nameTextStyle:{
                    color:'#fff',
                    align:'right',
                    lineHeight:10
                },
                min: 0,
                // max: 140,
                splitNumber: 4,
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: 'rgba(255,255,255,0.1)'
                    }
                },
                axisLine: {
                    show: false,
                },
                axisLabel: {
                    color: '#fff'
                },
                axisTick: {
                    show: false,
                },
            }],
            series: [{
                    name,
                    type: 'line',
                    smooth: true, //是否平滑
                    showAllSymbol: false,
                    // symbol: 'image://./static/images/guang-circle.png',
                    symbol: 'circle',
                    symbolSize: 2,
                    lineStyle: {
                        normal: {
                            color: "#F6B37F",
                        },
                    },
                    itemStyle: {
                        color: "#F6B37F",
                    },
                    tooltip: {
                        show: true
                    },
                    areaStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: 'rgba(246,179,127,0.3)'
                                },
                                {
                                    offset: 1,
                                    color: 'rgba(246,179,127,0)'
                                }
                            ], false),
                            shadowColor: 'rgba(246,179,127, 0.9)',
                            shadowBlur: 20
                        }
                    },
                    data: yData
                }
            ]
        };
        
        myChart.setOption(option);
        changeSize(myChart)
        return myChart;
    },
}