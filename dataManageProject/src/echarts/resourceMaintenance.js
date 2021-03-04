import echarts from 'echarts';
import changeSize from '@/utils/changeSize';

export default {
    //折线图
    echarts_line(id, xdata, series, name, unit){
        var myChart = echarts.init(document.getElementById(id))
        var option = {
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross',
                        label: {
                            backgroundColor: '#6a7985'
                        }
                    }
                },
                legend: {
                    data: name,
                    top: '20'
                },
                grid: {
                    // top: "13%",
                    left: "8%",
                    // right: "5%",
                    // bottom: "3%",
                    containLabel: true
                },
                xAxis: {
                    type: 'category',
                    data: xdata
                },
                yAxis: {
                    name: unit,
                    type: 'value'
                },
                series
            };  
        
    
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option)
        changeSize(myChart)
        return myChart;
    },
    //柱状图
    echarts_bar(id, xdata, series, name, unit){
        var myChart = echarts.init(document.getElementById(id))
        var option = {
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross',
                        label: {
                            backgroundColor: '#6a7985'
                        }
                    }
                },
                legend: {
                    data: name,
                    top: '20'
                },
                grid: {
                    // top: "13%",
                    left: "8%",
                    // right: "5%",
                    // bottom: "3%",
                    containLabel: true
                },
                xAxis: {
                    type: 'category',
                    data: xdata
                },
                yAxis: {
                    name: unit,
                    type: 'value'
                },
                series
            };  
        
    
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option)
        changeSize(myChart)
        return myChart;
    },
    //饼图
    echarts_pie(id, data){
        var myChart = echarts.init(document.getElementById(id))
        var option = null
            option = {
                title: {
                    text: '负载状态',
                    left: 'center'
                },
                grid: {
                    // top: "13%",
                    left: "8%",
                    // right: "5%",
                    // bottom: "3%",
                    containLabel: true
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
}