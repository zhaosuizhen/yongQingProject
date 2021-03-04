import echarts from 'echarts';
import changeSize from '@/util/changeSize';
//藤椒种植echarts
export default {

        // 饼图————小圆
        pie_small(id){
            let myChart = echarts.init(document.getElementById(id));
    
            var option = {
                tooltip: {
                  trigger: 'item',
                  formatter: '{a} <br/>{b}: {c} ({d}%)'
                },
                series: [
                  {
                    name: '生猪出栏量',
                    type: 'pie',
                    color: ['#FEAD5C'],
                    radius: ['70%', '85%'],
                    center: ['50%', '50%'],
                    avoidLabelOverlap: false,
                    label: {
                      show: false,
                      position: 'center'
                    },
                    labelLine: {
                      show: false
                    },
                    data: [
                      { value: 100, name: '生猪出栏量' }
                    ]
                  }
                ]
              }
            
            myChart.setOption(option);
            changeSize(myChart)
            return myChart;
        },
    
        
        // 饼图————大圆
        pie_big(id, data){
          console.log(data)
            let myChart = echarts.init(document.getElementById(id));
    
            var option = {
                // tooltip: {
                //   trigger: 'item',
                //   formatter: '{a} <br/>{b}: {c} ({d}%)'
                // },
                series: [
                  {
                    name: '麦冬产量',
                    hoverAnimation:false,
                    type: 'pie',
                    color: ['#36E5FF', 'rgba(0,0,0,0)'],
                    radius: ['65%', '90%'],
                    center: ['50%', '50%'],
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
            
            myChart.setOption(option);
            changeSize(myChart)
            return myChart;
        },


    //藤椒生产面积      -----真实数据
    tengJiaoShengChanMianJi(id, xData, data){
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

    //销售情况      -----真实数据
    xiaoShouQingKuang(id, xData, data){
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
                    name: '销售量/公斤',
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
                    name: '销售量',
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
                            color: '#FF9F7F',
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

    //农林牧渔产值              -----真实数据
    nongLinMuYuChanZhi(id, xData, yData_1, yData_2){
        //获取数组最大值
        let maxData = (Math.max.apply(Math,yData_1) > Math.max.apply(Math,yData_2)) ? Math.max.apply(Math,yData_1) : Math.max.apply(Math,yData_2)
        maxData = (Math.floor(maxData/100) + 1) * 100

        let maxDataArr = yData_1.map( () => maxData)
        
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
                top: '10%',
                left: '2%',
                right: '20%',
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
                    data: yData_2,
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
                            // barBorderRadius: [0, 10, 10, 0],
                            color: '#ffdb5c'
                        }
                    },
                    barWidth: 15,   //设置柱子宽度
                },
                {
                    name: '白框',
                    type: 'bar',
                    yAxisIndex: 1,
                    // barGap: '-100%',
                    data: maxDataArr,
                    barWidth: 15,
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
                    data: yData_1,
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
                            // barBorderRadius: [0, 10, 10, 0],
                            color: '#00A1E5'
                        }
                    },
                    barWidth: 15,   //设置柱子宽度
                },
                {
                    name: '白框',
                    type: 'bar',
                    yAxisIndex: 1,
                    // barGap: '-100%',
                    data: maxDataArr,
                    barWidth: 15,
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


    //各乡镇耕地      -----真实数据
    geXiangZhenGengDi(id, xData, data){

        const value = (Math.floor(data[0]/30) + 1) * 30
        data = data.map(item => item * 15)

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
                     bottom: '8%',
                     containLabel: true
                 },
                //  dataZoom: [{          //滚动条设置！！
                //     show: true,       //设置是否显示
                //     height: 10,       //设置高度
                //     xAxisIndex: [
                //         0
                //     ],
                //     bottom: '2%',         //设置位置
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
                         name: '发展面积',
                         type: 'line',
                         smooth: true,
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
                         barWidth: 10,   //设置柱子宽度
                         data
                     }
                 ]
         };

         myChart.setOption(option);
         changeSize(myChart)
         return myChart;
    },

    // 植保防治趋势         -----真实数据
    zhiBaoFangZhi(id, xData, happenData, defenseData){
        happenData = happenData.map(item => item.toFixed(2))
        defenseData = defenseData.map(item => item.toFixed(2))
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
                top: '0%',
                // right: '20%'
                right: '0%'
            },
            grid: {     //设置图标位置
                top: '25%',
                left: '2%',
                right: '5%',
                bottom: '0%',
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
                    name: '万亩次',
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
                //     name: '面积/亩',
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
                    name: '发生面积',
                    type: 'bar',
                    // stack: '总量',
                    data: happenData,
                    // symbol: 'none',
                    // smooth: true
                    itemStyle:{
                        // color: '#FEE185'
                        normal: {       //渐变色
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#fffe97' // 0% 处的颜色
                            }, {
                                offset: 1,
                                color: '#FEE185' // 100% 处的颜色
                            }], false),
                            // barBorderRadius: [30, 30, 0, 0],
                        }
                    },
                    barWidth: 15,   //设置柱子宽度
                },
                {
                    name: '防治面积',
                    type: 'bar',
                    // stack: '总量',
                    data: defenseData,
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
                    barWidth: 15,   //设置柱子宽度
                }
            ]
        };
        
        myChart.setOption(option);


        changeSize(myChart)

        myChart.on("click", function(param) {
            // alert(param.name);
        });
        return myChart;
    },

    //投入品用量      -----真实数据
    touRuPin(id, index, dataName, xData, dataHF, dataDm, dataNy, dataNYCY){
        let myChart = echarts.init(document.getElementById(id));

        let seriesArr = [
            [{
                name: dataName[0],
                type: 'bar',
                data: dataHF,       //化肥
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
                name: dataName[3],
                type: 'bar',
                data: dataNYCY,     //农用柴油
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
            ,
            [{
                name: dataName[2],
                type: 'bar',
                data: dataNy,       //农药
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
                name: dataName[1],
                type: 'bar',
                data: dataDm,       //地膜
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
                top: '25%',
                left: '2%',
                right: '5%',
                bottom: '10%',
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
                    name: '单位/吨',
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