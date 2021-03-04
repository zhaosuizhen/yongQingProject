import echarts from 'echarts';
import changeSize from '@/util/changeSize';

export default {

    //食用菌基地情况
    shiYongJunJiDiQingKuang(id, data, total, color){
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
                            color: color,
                            // shadowColor: color,         //粗柱子阴影颜色
                            borderWidth:2,
                            borderColor: color,          //粗柱子颜色
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

    //蔬菜占地面积
    shuCaiZhanDiMianJi(id,data){
        let myChart = echarts.init(document.getElementById(id));

        let option = {
            color: ['#09FEFE', '#FBD778', '#F08282'],
            // tooltip: {
            //     trigger: 'item',
            //     formatter: '{a} <br/>{b} : {c} 亩 ({d}%)'
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
                    var p = (tarValue);
                    return `{uname|${name}}{unum|${p}亩}`
                    //return name + ' ' + ' ' + ' '+ ' '+ ' '+ ' ' + p + '%';
                },
              },
            series: [
                {
                    name: '面积',
                    type: 'pie',
                    radius: ['65%', '80%'],
                    center: ['30%', '50%'],
                    hoverAnimation:false,
                    label: {
                        show: false,
                        position: 'center'
                    },
                    data,
                    emphasis: {
                        itemStyle: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        };

        myChart.setOption(option);
        changeSize(myChart)
        return myChart;

    },
    
    //蔬菜播种面积
    shuCaiBoZhongMianJi(id,data){
        let myChart = echarts.init(document.getElementById(id));

        let option = {
            color: ['#AEFDCA', '#FB7293', '#8378EA'],
            // tooltip: {
            //     trigger: 'item',
            //     formatter: '{a} <br/>{b} : {c} 亩 ({d}%)'
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
                    var p = (tarValue);
                    return `{uname|${name}}{unum|${p}亩}`
                    //return name + ' ' + ' ' + ' '+ ' '+ ' '+ ' ' + p + '%';
                },
              },
            series: [
                {
                    name: '面积',
                    type: 'pie',
                    radius: ['65%', '80%'],
                    center: ['30%', '50%'],
                    hoverAnimation:false,
                    label: {
                        show: false,
                        position: 'center'
                    },
                    data,
                    emphasis: {
                        itemStyle: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        };

        myChart.setOption(option);
        changeSize(myChart)
        return myChart;

    },

    //地膜覆盖面积
    diMoFuGaiMianJi(id,data){
        let myChart = echarts.init(document.getElementById(id));

        let option = {
            color: ['#FF9F7F', '#FCA4BB', '#B8D07C'],
            // tooltip: {
            //     trigger: 'item',
            //     formatter: '{a} <br/>{b} : {c} 亩 ({d}%)'
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
                    var p = (tarValue);
                    return `{uname|${name}}{unum|${p}亩}`
                    //return name + ' ' + ' ' + ' '+ ' '+ ' '+ ' ' + p + '%';
                },
              },
            series: [
                {
                    name: '面积',
                    type: 'pie',
                    radius: ['65%', '80%'],
                    center: ['30%', '50%'],
                    hoverAnimation:false,
                    label: {
                        show: false,
                        position: 'center'
                    },
                    data,
                    emphasis:{
                        itemStyle: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        };

        myChart.setOption(option);
        changeSize(myChart)
        return myChart;

    },

    //总产量
    zongChanLiang(id,data){
        let myChart = echarts.init(document.getElementById(id));

        let option = {
            color: ['#3DD4FF', '#FFE36C', '#60D5B2'],
            // tooltip: {
            //     trigger: 'item',
            //     formatter: '{a} <br/>{b} : {c} 吨 ({d}%)'
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
                    var p = (tarValue);
                    return `{uname|${name}}{unum|${p}吨}`
                    //return name + ' ' + ' ' + ' '+ ' '+ ' '+ ' ' + p + '%';
                },
              },
            series: [
                {
                    name: '产量',
                    type: 'pie',
                    radius: ['65%', '80%'],
                    center: ['30%', '50%'],
                    hoverAnimation:false,
                    label: {
                        show: false,
                        position: 'center'
                    },
                    data,
                    emphasis: {
                        itemStyle: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
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