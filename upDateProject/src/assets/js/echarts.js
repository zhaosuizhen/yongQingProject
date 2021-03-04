import echarts from 'echarts';

export default {
    //部门数据总量统计柱状图
    deptData(container,data){
        let myChart = echarts.init(document.getElementById(container));
        let option = {
            color: ['#3398DB'],
            legend: {
                show: true,
               // right: "25%",
                textStyle: {
                  fontSize: 12
                },
                data: ['数据条数'],
                right:10
              },
            tooltip: {
                trigger: 'axis',
                formatter:'{b}：{c}条',
                axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: [
                {
                    type: 'category',
                    data: data.nameArray,
                    axisLine: {
                        lineStyle: {
                            color: "#7195ae"
                        }
                    },
                    axisTick: {
                        show:false
                    },
                    minorTick:{
                        show:false
                    }, 
                    splitLine: {
                        lineStyle: {
                          type: "double",
                          color: "#7195ae"
                        }
                      },
                      axisLabel: {
                        textStyle: {
                          fontSize: 10,
                          color:'#333'
                        }
                    },
                }
            ],
            yAxis: [
                {
                    name:'单位：条',
                    type: 'value',
                    nameTextStyle:{
                        color:"#333", 
                    },
                    splitLine: {
                        lineStyle: {
                          type: "double",
                          color: "#7195ae"
                        }
                      },
                      axisLine: {
                        lineStyle: {
                            color: "#7195ae"
                        }
                    },
                    minorTick:{
                        show:false
                    },
                    axisTick: {
                        show:false
                    },
                    axisLabel: {
                        textStyle: {
                          fontSize: 10,
                          color:'#333'
                        }
                    },
                },
                
            ],
            series: [
                {
                    name: '数据条数',
                    type: 'bar',
                    barWidth: '60%',
                    data: data.valueArray
                }
            ]
        };
        myChart.setOption(option);
        return myChart;   
    },
    //数据类型占比
    dataTypeProportion(container,data){
        console.log('aaaa==',data.nameArray)
        let myChart = echarts.init(document.getElementById(container));
        let indexPlantColor = ['#1890FF', '#41D9C7', '#2FC25B', '#FACC14', '#E6965C']
        let option = {
            color:indexPlantColor,
            tooltip: {
               trigger: 'axis',
                formatter:'{b}：{c}条',
                axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            legend: {
                show:true,
                data: ['数据条数'],
                right:0
                // data: data.nameArray
            },
            grid: {
                left: 0,
                top: 30,
                containLabel: true
            },
            xAxis: [
                {
                    type: 'value',
                    splitLine: {
                        lineStyle: {
                          type: "double",
                          color: "#7195ae"
                        }
                      },
                      axisLine:{
                        lineStyle: {
                            color: "#7195ae"
                          }
                      },
                      axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#333'
                        }
                    },
                      minorTick:{
                        show:false
                    },
                    axisTick: {
                        show:false
                    },
                }
            ],
            yAxis: [
                { 
                    type: 'category',
                    data: data.nameArray,
                    splitLine: {
                        lineStyle: {
                          type: "double",
                          color: "#7195ae"
                        }
                      },
                    axisLine: {
                        lineStyle: {
                            color: "#7195ae"
                        }
                    },
                    axisLabel: {
                        textStyle: {
                          fontSize: 10,
                          color:'#333'
                        }
                    },
                    axisTick: {
                        show:false
                    },
                },
                
            ],
            series: [
                {   name:'数据条数',
                    type: 'bar',
                    data: data.valueArray
                }
            ]
        }
        myChart.setOption(option);
        return myChart;  
    },

    //数据增长趋势
    dataGrowthTrend(container,data){
        let myChart = echarts.init(document.getElementById(container));
        let option = {
            color:['#70d9b1'],
            tooltip: {
                trigger: 'axis',
                type:'vertical',
                formatter:'日期：{b}<br>数量：{c}',
                show:true
            },
            legend: {
                left: 'right',
                name: '数据条数',
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                axisLine: {
                    show:false,
                },
                axisTick: {
                    show:false
                },
                minorTick:{
                    show:false
                }, 
                axisLabel:{
                    align:'center'
                },
                splitLine: {
                    lineStyle: {
                      type: "double",
                      color: "#7195ae"
                    }
                  },
                data: data.nameArray
            },
            yAxis: {
                type: 'value',
                name:'单位：条',
                minorTick:{
                    show:false
                },
                axisTick: {
                    show:false
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
                  },
                axisLine: {
                    show:false,
                },
            },
            series: [{
                name: '数据条数',
                data: data.valueArray,
                type: 'line',
                areaStyle: {}
            }]
        }
        myChart.setOption(option);
        return myChart;  
    }
}