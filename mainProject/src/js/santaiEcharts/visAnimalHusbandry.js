import echarts from 'echarts';
import changeSize from '@/util/changeSize';

export default {
    //各乡镇造林面积              -----真实数据
    geXiangZhenZaoLinMianJi(id, xData, economicForest, timberForest){
        //获取数组最大值
        let maxData = (Math.max.apply(Math,economicForest) > Math.max.apply(Math,timberForest)) ? Math.max.apply(Math,economicForest) : Math.max.apply(Math,timberForest)
        maxData = (Math.floor(maxData/100) + 1) * 100

        let maxDataArr = economicForest.map( () => maxData)
        
        let myChart = echarts.init(document.getElementById(id));

        let option = {
            // tooltip: {
            //     trigger: 'axis'
            // },
            legend: {
                data: ['经济林', '用材林'],
                textStyle:{
                    color: '#fff'
                },
                top: '0%',
                right: '5%'
            },
            grid: {     //设置图标位置
                top: '8%',
                left: '2%',
                right: '12%',
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
                    name: '用材林',
                    type: 'bar',
                    // stack: '总量',
                    data: timberForest,
                    // symbol: 'none',
                    // smooth: true
                    itemStyle: {
                        normal: {       //渐变色
                            label: {
                                show: true, //开启显示
                                position: 'right', //在上方显示
                                textStyle: { //数值样式
                                    color: '#FFF',
                                    fontSize: 13
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
                    barWidth: 8,   //设置柱子宽度
                },
                {
                    name: '白框',
                    type: 'bar',
                    yAxisIndex: 1,
                    // barGap: '-100%',
                    data: maxDataArr,
                    barWidth: 8,
                    itemStyle: {
                        normal: {
                            color: '#214366',
                            barBorderRadius: 5,
                        }
                    },
                    z: 1
                },
                {
                    name: '经济林',
                    type: 'bar',
                    // stack: '总量',
                    data: economicForest,
                    symbol: 'none',
                    itemStyle: {
                        normal: {       //渐变色
                            label: {
                                show: true, //开启显示
                                position: 'right', //在上方显示
                                textStyle: { //数值样式
                                    color: '#FFF',
                                    fontSize: 13
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
                    barWidth: 8,   //设置柱子宽度
                },
                {
                    name: '白框',
                    type: 'bar',
                    yAxisIndex: 1,
                    // barGap: '-100%',
                    data: maxDataArr,
                    barWidth: 8,
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
    
    //各乡镇鲜果产量
    geGeXianGuoChanLiang(id, data){
        console.log(id)
        let myChart = echarts.init(document.getElementById(id));

        var option = {
            // title: {
            //     text: '总产值',
            //     left: '20%',
            //     top: '40%',
            //     textStyle: {
            //         color: '#eee',
            //         fontSize: 16
            //     }
            // },
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
                right: '10%',
                top: '20%',
                formatter: function(name) {
                  var total = 0;
                  var tarValue;
                  for (var i = 0, l = data.length; i < l; i++) {
                      total += data[i].value * 1;
                      if (data[i].name == name) {
                          tarValue = data[i].value;
                      }
                  }
                  var p = tarValue
                  return `${name}  ${((p * 1)/(total * 1) * 100).toFixed(2)}%`
                  //return name + ' ' + ' ' + ' '+ ' '+ ' '+ ' ' + p + '%';
              },
            },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b}: {c}吨 ({d}%)'
        },
        series: [
          {
              hoverAnimation:false,
            name: '各个鲜果产量',
            type: 'pie',
            color: ['#FCDC71','#D3EC50','#8ECF74','#61CDB0','#1FB8CB',],
            radius: ['65%', '90%'],
            center: ['30%', '50%'],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: 'center'
            },
            labelLine: {
              show: false
            },
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
            data,
            label:{
                normal:{
                    show: true,
                    position:"center",
                    formatter: `各个鲜果产量`,
                    fontSize: 12,
                    // fontWeight: 900,
                    color: "white",
                }
            },
          }
        ]
      }
        
        myChart.setOption(option);
        changeSize(myChart)
        return myChart;
    },
}