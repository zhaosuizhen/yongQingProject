import echarts from 'echarts';
import changeSize from '@/util/changeSize';

export default {
    //养殖产量占比
    yangZhiChanLiang(id, data){
        var myChart = echarts.init(document.getElementById(id))
        var option = {
            // title: {
            //     text: '养殖产量',
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
                    return `${name} ${((p * 1) / (total * 1) * 100).toFixed(2)}%`
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
              name: '养殖产量占比统计',
              type: 'pie',
              color: ['#37a2da','#9fe6b8','#ff9f7f','#8378ea'],
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
                    formatter: `养殖产量占比`,
                    fontSize: 12,
                    // fontWeight: 900,
                    color: "white",
                }
            },
            }
          ]
        }
    
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option)
        changeSize(myChart)
        return myChart;
    },

    // 各乡镇生猪产量         -----真实数据
    geXiangZhenShengZhuChanLiang(id, xData, data){
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
            //     // right: '20%'
            //     right: '0%'
            // },
            grid: {     //设置图标位置
                top: '25%',
                left: '2%',
                right: '0%',
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
                    // name: '四川',
                    type: 'line',
                    // stack: '总量',
                    data,
                    // symbol: 'none',
                    // smooth: 0.5,        //变平滑
                    smooth: true,
                    itemStyle:{
                        // color: '#FEE185'
                        normal: {       //渐变色
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#78C0AB' // 0% 处的颜色
                            }, {
                                offset: 1,
                                color: '#78C0AB' // 100% 处的颜色
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
                    barWidth: 15,   //设置柱子宽度
                }
            ]
        };
        
        myChart.setOption(option);
        changeSize(myChart)
        return myChart;
    },
}