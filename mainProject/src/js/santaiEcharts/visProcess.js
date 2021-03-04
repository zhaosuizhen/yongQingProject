import echarts from 'echarts';
import changeSize from '@/util/changeSize';

export default {
    //主要品种养殖规模          -----真实数据
    zhuYaoPinZhong(id, xData, data){
        data = data.map(item => {
            if(item.length > 3){
                var arr = item.split('').reverse()
                arr.splice(3,1)
                return arr.reverse().join('') * 1
            }else{
                return item * 1
            }
        })

        // 获取数组中最大值
        let maxData = Math.max.apply(Math,data)
        maxData = (Math.floor(maxData/500) + 1) * 500

        let maxDataArr = data.map( () => maxData)

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
            //     // top: '-2%',
            //     // right: '20%'
            //     // right: '0%'
            // },
            grid: {     //设置图标位置
                top: '20%',
                left: '2%',
                right: '5%',
                bottom: '5%',
                containLabel: true
            },
            xAxis: [
                {
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
            }],
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
                },
                // {
                //     // min: '0',
                //     // max: '800',
                //     name: '产量/吨',
                //     type: 'value',
                //     axisLabel: {    //设置x轴文字颜色
                //         color: '#fff'
                //     },
                //     nameTextStyle: {
                //         color: '#fff'
                //     },
                //     splitLine: {    //设置分隔线
                //         show: false
                //     },
                //     axisLine:{      //设置轴线是否显示
                //         show: false
                //     }
                // }
            ],
            series: [
                {
                    type: 'bar',
                    xAxisIndex: 1,         //使用哪一个x轴
                    barGap: '-100%',       //使柱子重叠
                    itemStyle: {
                        normal: {
                            show: true,
                            color: '#2D4F72',
                            // barBorderRadius: 50,
                            borderWidth: 0,
                            borderColor: '#333',
                        }
                    },
                   //  label:{
                   //      normal:{
                   //         show:true,
                           
                   //        position: 'top',
                   //        textStyle:{
                   //            color:'#2D4F72',
                   //            fontSize:25,
                   //        }
                   //      }
                   //  },
                    barWidth: 10,   //设置柱子宽度
                    data: maxDataArr
                }, 
                // {
                //     name: '发生面积',
                //     type: 'line',
                //     // stack: '总量',
                //     data: [300, 700, 400, 500, 800, 450, 550, 450],
                //     // symbol: 'none',
                //     // smooth: true
                //     itemStyle:{
                //         color: '#FEE185'
                //     }
                // },
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
                                color: '#02F1C4' // 0% 处的颜色
                            }, {
                                offset: 1,
                                color: '#11A2D8' // 100% 处的颜色
                            }], false),
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

    //渔业养殖              -----真实数据
    yuYeYangZhi(id, xData, yieldData, addData){
        //获取数组最大值
        let maxData = Math.max.apply(Math,yieldData)
        maxData = (Math.floor(maxData/100) + 1) * 100

        let maxDataArr = yieldData.map( () => maxData)
        
        let myChart = echarts.init(document.getElementById(id));

        let option = {
            // tooltip: {
            //     trigger: 'axis'
            // },
            legend: {
                data: ['产值', '增加值'],
                textStyle:{
                    color: '#fff'
                },
                top: '0.6%',
                right: '5%'
            },
            grid: {     //设置图标位置
                top: '5%',
                left: '2%',
                right: '10%',
                bottom: '0%',
                containLabel: true
            },
            yAxis: [
                {
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
                {
                    type: 'category',
                    boundaryGap: true,      //设置x轴距离y轴是否有间距
                    // data: yieldData,
                    axisLabel: {    //设置x轴文字颜色
                        show: true,
                        color: '#fff'
                    },
                    axisLine:{      //设置轴线是否显示
                        show: false
                    }
                }
                ],
            xAxis: [
                {
                    // min: '0',
                    // max: '800',
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
                    name: '增加值',
                    type: 'bar',
                    // stack: '总量',
                    data: addData,
                    // symbol: 'none',
                    // smooth: true
                    itemStyle: {
                        normal: {       //渐变色
                            label: {
                                show: true, //开启显示
                                position: 'right', //在上方显示
                                textStyle: { //数值样式
                                    color: '#FFF',
                                    fontSize: 16
                                }
                            },
                            // color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            //     offset: 0,
                            //     color: '#02F1C4' // 0% 处的颜色
                            // }, {
                            //     offset: 1,
                            //     color: '#11A2D8' // 100% 处的颜色
                            // }], false),
                            barBorderRadius: [0, 10, 10, 0],
                            color: '#ffdb5c'
                        }
                    },
                    barWidth: 30,   //设置柱子宽度
                },
                {
                    name: '白框',
                    type: 'bar',
                    yAxisIndex: 1,
                    // barGap: '-100%',
                    data: maxDataArr,
                    barWidth: 30,
                    itemStyle: {
                        normal: {
                            color: '#214366',
                            barBorderRadius: 5,
                        }
                    },
                    z: 1
                },
                {
                    name: '产值',
                    type: 'bar',
                    // stack: '总量',
                    data: yieldData,
                    symbol: 'none',
                    itemStyle: {
                        normal: {       //渐变色
                            label: {
                                show: true, //开启显示
                                position: 'right', //在上方显示
                                textStyle: { //数值样式
                                    color: '#FFF',
                                    fontSize: 16
                                }
                            },
                            // color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            //     offset: 0,
                            //     color: '#02F1C4' // 0% 处的颜色
                            // }, {
                            //     offset: 1,
                            //     color: '#11A2D8' // 100% 处的颜色
                            // }], false),
                            barBorderRadius: [0, 10, 10, 0],
                            color: '#00A1E5'
                        }
                    },
                    barWidth: 30,   //设置柱子宽度
                },
                {
                    name: '白框',
                    type: 'bar',
                    yAxisIndex: 1,
                    // barGap: '-100%',
                    data: maxDataArr,
                    barWidth: 30,
                    itemStyle: {
                        normal: {
                            // label: {
                            //     show: true, //开启显示
                            //     position: 'right', //在上方显示
                            //     textStyle: { //数值样式
                            //         color: '#FFF',
                            //         fontSize: 16
                            //     }
                            // },
                            color: '#214366',
                            barBorderRadius: 5,
                        }
                    },
                    z: 1
                }
            ]
        };
        
        myChart.setOption(option);
        changeSize(myChart)
        return myChart;
    },

    //养殖品种占比————饼图          -----真实数据
    yangZhiPinZhong(id, data){
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
                right: '10%',
                top: '20%'
            },
          series: [
            {
              name: '养殖产量占比统计',
              type: 'pie',
              color: ['#78E4E4', '#FEE185', '#15C2D1', '#00A1E4', '#85CBFE'],
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

    //渔业执法

}