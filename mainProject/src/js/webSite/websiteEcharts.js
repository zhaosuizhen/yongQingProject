import echarts from 'echarts';
import changeSize from '@/util/changeSize'

export default {
  soilEcharts(container,data){
    let myChart = echarts.init(document.getElementById(container));
    let option = {
      legend: {
        show: true
      },
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "shadow",
          label: {
            show: true
          }
        },
      },
      xAxis: {
        type: "category",
        data: data.arrX,
        axisTick: {
          //x 轴底部一点去掉
          show: false,
          //表格和data对齐
          alignWithLabel: true
        },
        // X轴线隐藏
        axisLine: {
          show: false
        },

      },
      yAxis: [
        {
          //去掉Y轴边线
          name: data.arrYName,
          axisLine: {
            show: false
          },
          //   splitLine: {
          //     show: false
          //   },
          axisTick: {
            //y轴刻度线
            show: false
          }
        },
      ],
      series: [
        {
          name: data.seriesName,
          type: "bar",
          data: data.arrY,
          itemStyle: {
            normal: {
              color: "#3a6e68"
            }
          },
          barWidth: 20
        },
      ]
    }
    myChart.setOption(option);
    return myChart;
  },


  agriculturalProductEcharts2(container,data){
    let myChart = echarts.init(document.getElementById(container));
    let option = {
      legend: {
        show: true
      },
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "shadow",
          label: {
            show: true
          }
        },
        formatter:function (data) {
          let showHtm = "";
          for(let i = 0; i<data.length; i++){
            if(i==0){
              showHtm += data[0].name+"<br/>";
            }
            showHtm += data[i].marker+data[i].seriesName+":"+data[i].value +"亩<br/>" ;
          }
          return showHtm;
        },
      },
      xAxis: {
        type: "category",
        data: data.arrX,
        axisTick: {
          show: false,
          alignWithLabel: true
        },
        axisLine: {
          show: false
        },

      },
      yAxis: [
        {
          name: data.arrYName,
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          }
        },
      ],
      series: [
        {
          name: data.seriesName1,
          type: "bar",
          data: data.arrY1,
          itemStyle: {
            normal: {
              color: "#3a6e68"
            }
          },
          barWidth: 10
        },
        {
          name: data.seriesName2,
          type: "bar",
          data: data.arrY2,
          itemStyle: {
            normal: {
              color: "#3a6e68"
            }
          },
          barWidth: 10
        },
      ]
    }
    myChart.setOption(option);
    return myChart;
  },

  agriculturalProductEcharts3(container,data){
    let myChart = echarts.init(document.getElementById(container));
    let option = {
      legend: {
        show: true
      },
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "shadow",
          label: {
            show: true
          }
        },
        formatter:function (data) {
          let showHtm = "";
          for(let i = 0; i<data.length; i++){
            if(i==0){
              showHtm += data[0].name+"<br/>";
            }
            showHtm += data[i].marker+data[i].seriesName+":"+data[i].value +"头<br/>" ;
          }
          return showHtm;
        },
      },
      xAxis: {
        type: "category",
        data: data.arrX,
        axisTick: {
          show: false,
          alignWithLabel: true
        },
        axisLine: {
          show: false
        },

      },
      yAxis: [
        {
          name: data.arrYName,
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          }
        },
      ],
      series: [
        {
          name: data.seriesName1,
          type: "bar",
          data: data.arrY1,
          itemStyle: {
            normal: {
              color: "#3a6e68"
            }
          },
          barWidth: 20
        },
        {
          name: data.seriesName2,
          type: "bar",
          data: data.arrY2,
          itemStyle: {
            normal: {
              color: "#3a6e68"
            }
          },
          barWidth: 20
        },
        {
          name: data.seriesName3,
          type: "bar",
          data: data.arrY3,
          itemStyle: {
            normal: {
              color: "#3a6e68"
            }
          },
          barWidth: 20
        },
      ]
    }
    myChart.setOption(option);
    return myChart;
  },
}
