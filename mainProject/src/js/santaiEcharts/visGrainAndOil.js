import echarts from 'echarts';
import changeSize from '@/util/changeSize';

export default {
    // 不同作物病虫害防治统计         -----真实数据
    buTongZuoWu(id, xData, sheepData, rabbitData, fowlData, cattleData){
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
                top: '15%',
                left: '2%',
                right: '2%',
                bottom: '0%',
                containLabel: true
            },
            // "dataZoom": [{          //滚动条设置！！
            //     "show": true,       //设置是否显示
            //     "height": 10,       //设置高度
            //     "xAxisIndex": [
            //         0
            //     ],
            //     bottom: '0%',         //设置位置
            //     "start": 0,         //设置起始位置
            //     "end": 25,          //设置结束位置
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
            //     "type": "inside",
            //     // disabled: true,     //可以设置鼠标滚轮控制失效，不知道有啥用
            //     "show": true,
            //     "height": 15,
            //     "start": 1,
            //     "end": 35
            // }],
            xAxis: {
                type: 'category',
                boundaryGap: true,      //设置x轴距离y轴是否有间距
                data: xData,
                axisLabel: {    //设置x轴文字颜色
                    color: '#fff',
                    interval:0
                },
                axisLine:{      //设置轴线是否显示
                    show: false
                }
            },
            yAxis: [
                {
                    // min: '0',
                    // max: '800',
                    name: '单位/元',
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
                    name: '收入',
                    type: 'bar',
                    // stack: '总量',
                    data: sheepData,       //发生面积
                    // symbol: 'none',
                    // smooth: true
                    itemStyle:{
                        // color: '#FEE185'
                        normal: {       //渐变色
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#C23531' // 0% 处的颜色
                            }, {
                                offset: 1,
                                color: '#C23531' // 100% 处的颜色
                            }], false),
                            // barBorderRadius: [30, 30, 0, 0],
                        }
                    },
                    barWidth: 20,   //设置柱子宽度
                }
            ]
        };
        
        myChart.setOption(option);
        changeSize(myChart)
        return myChart;
    },

    //病虫害发生与防治占比————饼图          -----真实数据
    happen_defense(id, data, index){
        data.forEach(item => {
            if(item.name == "egg_yiled"){
                item.name = '蛋产量'
            }else if(item.name == "fowl_exist_column"){
                item.name = '家禽存栏量'
            }else if(item.name == "cattle_exist_column"){
                item.name = '牛存栏量'
            }else if(item.name == "sheep_exist_column"){
                item.name = '羊存栏量'
            }else if(item.name == "fowl_out_column"){
                item.name = '家禽出栏量'
            }else if(item.name == "cattle_out_column"){
                item.name = '牛出栏量'
            }else if(item.name == "sheep_out_column"){
                item.name = '羊出栏量'
            }
        })

        for(var i = 0;i< DataTransfer.length - 1;i++){
            for(var j = data.length - 1;j > i;j--){
                if(data[i].value < data[j].value){
                    var temp = data[i]
                    data[i] = data[j]
                    data[j] = temp
                }
            }
        }

        var color = [
            ['#37a2da','#9fe6b8','#ff9f7f','#e7bcf3'],
            ['#9084FF','#FB7293','#FFDB5C','#32C5E9'],
            ['#AEFDCA','#FF9F7F','#E7BCF3','#53A7FF'],
            ['#83CCE7','#8CDF6C','#FBD657','#634FDA'],
            ['#09FEFE','#FBD778','#F08282','#A18BFE']
        ]
        var myChart = echarts.init(document.getElementById(id))
        var option = {
            //   tooltip: {
            //     trigger: 'item',
            //     formatter: '{a} <br/>{b}: {c} ({d}%)'
            //   },
              legend: {
                textStyle: {
                  color: '#FFF',
                  rich: {
                      uname: {
                          width: 60
                      },
                      unum: {
                          width: 40,
                          align: 'right'
                      }
                    }
                  },
                  type: 'scroll',
                  orient: 'vertical',
                  right: '-1%',
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
                    var p = tarValue;
                    return `{uname|${name}}     {unum|${p}}`
                    //return name + ' ' + ' ' + ' '+ ' '+ ' '+ ' ' + p + '%';
                },
              },
              series: [
                {
                  name: '投入品占比',
                  type: 'pie',
                  color: color[index],
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
}