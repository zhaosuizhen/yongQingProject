import echarts from 'echarts';
import 'echarts-liquidfill'//在这里引入

export default{
    // 水球图
    liquidfill (id,text) {
        var myChart = echarts.init(document.getElementById(id))
    
        var value = 0.35
        var data = [value, value, value]
        var option = {
          // 设置背景颜色，此处为渐变色
          // backgroundColor: new echarts.graphic.RadialGradient(0.3, 0.3, 0.8, [{
          //   offset: 0,
          //   color: '#f1f'
          // }, {
          //   offset: 1,
          //   color: '#471bba'
          // }]),
          title: {
            // text: (value * 100).toFixed(0) + '{a|%}', // 西安市的标题
            text,
            textStyle: { // 标题的样式
              fontSize: 14,
              fontFamily: 'Microsoft Yahei',
              fontWeight: '600',
              color: '#fff',
              rich: {
                a: {
                  fontSize: 28
                }
              }
            },
            x: 'center', // 设置title在X轴上显示的位置
            y: '35%' // 设置title在X轴上显示的位置
          },
          graphic: [{
            type: 'group',
            left: 'center',
            top: '60%',
            children: [{
              type: 'text',
              z: 100,
              left: '10',
              top: 'middle',
            //   style: {
            //     fill: '#fff',
            //     text: '出栏数量',
            //     font: '28px Microsoft YaHei'
            //   }
            }]
          }],
          series: [{
            type: 'liquidFill', // 类型，为水晶球
            radius: '70%',
            center: ['50%', '50%'],
            shape: 'circle', // 水填充图的形状 circle默认圆形  rect矩形  roundRect圆角矩形  triangle三角形  diamond菱形  pin水滴状 arrow箭头状  还可以是svg的path
            data: data,
            backgroundStyle: {
              color: {
                type: 'linear',
                x: 1,
                y: 0,
                x2: 0.5,
                y2: 1,
                colorStops: [{
                  offset: 1,
                  color: 'rgba(68, 145, 253, 0)'
                }, {
                  offset: 0.5,
                  color: 'rgba(68, 145, 253, .25)'
                }, {
                  offset: 0,
                  color: 'rgba(68, 145, 253, 1)'
                }],
                globalCoord: false
              }
            },
            outline: { // 轮廓线配置
              show: false, // 是否显示轮廓 布尔值
              borderDistance: 0, // 外部轮廓与图表的距离 数字
              itemStyle: { // 轮廓线样式配置
                borderWidth: 20, // 轮廓线宽度
                borderColor: { // 轮廓线颜色
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [{
                    offset: 0,
                    color: 'rgba(69, 73, 240, 0)'
                  }, {
                    offset: 0.5,
                    color: 'rgba(69, 73, 240, .25)'
                  }, {
                    offset: 1,
                    color: 'rgba(69, 73, 240, 1)'
                  }],
                  globalCoord: false
                },
                shadowBlur: 10, // 模糊程度
                shadowColor: '#000' // 阴影颜色
              }
            },
            itemStyle: { // 波浪线样式配置
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                  offset: 1,
                  color: 'rgba(58, 71, 212, 0)'
                }, {
                  offset: 0.5,
                  color: 'rgba(31, 222, 225, .2)'
                }, {
                  offset: 0,
                  color: 'rgba(31, 222, 225, 1)'
                }],
                globalCoord: false
              }
            },
            label: {
              normal: {
                formatter: ''
              }
            }
          }]
        }
    
        myChart.setOption(option)
        window.addEventListener('resize', () => { myChart.resize() })
      },


      liquidfill_left (id,text,left = '20%') {
        var myChart = echarts.init(document.getElementById(id))
    
        var value = 0.35
        var data = [value, value, value]
        var option = {
          // 设置背景颜色，此处为渐变色
          // backgroundColor: new echarts.graphic.RadialGradient(0.3, 0.3, 0.8, [{
          //   offset: 0,
          //   color: '#f1f'
          // }, {
          //   offset: 1,
          //   color: '#471bba'
          // }]),
          title: {
            // text: (value * 100).toFixed(0) + '{a|%}', // 西安市的标题
            text,
            textStyle: { // 标题的样式
              fontSize: 18,
              fontFamily: 'Microsoft Yahei',
              fontWeight: '600',
              color: '#fff',
              rich: {
                a: {
                  fontSize: 28
                }
              }
            },
            x: left, // 设置title在X轴上显示的位置
            y: '35%' // 设置title在X轴上显示的位置
          },
          graphic: [{
            type: 'group',
            left: 'center',
            top: '60%',
            children: [{
              type: 'text',
              z: 100,
              left: '10',
              top: 'middle',
            //   style: {
            //     fill: '#fff',
            //     text: '出栏数量',
            //     font: '28px Microsoft YaHei'
            //   }
            }]
          }],
          series: [{
            type: 'liquidFill', // 类型，为水晶球
            radius: '70%',
            center: ['30%', '50%'],
            shape: 'circle', // 水填充图的形状 circle默认圆形  rect矩形  roundRect圆角矩形  triangle三角形  diamond菱形  pin水滴状 arrow箭头状  还可以是svg的path
            data: data,
            backgroundStyle: {
              color: {
                type: 'linear',
                x: 1,
                y: 0,
                x2: 0.5,
                y2: 1,
                colorStops: [{
                  offset: 1,
                  color: 'rgba(68, 145, 253, 0)'
                }, {
                  offset: 0.5,
                  color: 'rgba(68, 145, 253, .25)'
                }, {
                  offset: 0,
                  color: 'rgba(68, 145, 253, 1)'
                }],
                globalCoord: false
              }
            },
            outline: { // 轮廓线配置
              show: false, // 是否显示轮廓 布尔值
              borderDistance: 0, // 外部轮廓与图表的距离 数字
              itemStyle: { // 轮廓线样式配置
                borderWidth: 20, // 轮廓线宽度
                borderColor: { // 轮廓线颜色
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [{
                    offset: 0,
                    color: 'rgba(69, 73, 240, 0)'
                  }, {
                    offset: 0.5,
                    color: 'rgba(69, 73, 240, .25)'
                  }, {
                    offset: 1,
                    color: 'rgba(69, 73, 240, 1)'
                  }],
                  globalCoord: false
                },
                shadowBlur: 10, // 模糊程度
                shadowColor: '#000' // 阴影颜色
              }
            },
            itemStyle: { // 波浪线样式配置
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                  offset: 1,
                  color: 'rgba(58, 71, 212, 0)'
                }, {
                  offset: 0.5,
                  color: 'rgba(31, 222, 225, .2)'
                }, {
                  offset: 0,
                  color: 'rgba(31, 222, 225, 1)'
                }],
                globalCoord: false
              }
            },
            label: {
              normal: {
                formatter: ''
              }
            }
          }]
        }
    
        myChart.setOption(option)
        window.addEventListener('resize', () => { myChart.resize() })
      }
}