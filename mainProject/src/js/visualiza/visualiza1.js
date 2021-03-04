import echarts from 'echarts';
import {indexlandType,indexTrade,indexInputs,indexPlantType,indexFarmType,indexSourceType,indexEquipmentType,indexDiseasesType,indexPrice,indexmap} from '../../request/visualiza1Api';

import changeSize from '@/util/changeSize'

export default {
  // *******主页*******
  //地图
  initChartsChina:function (container, self) {
    indexmap(self).then(result => {
      if (result.code == 0) {
        self.indexMapData = result.data;
          let mapData = result.data;
          //let mapData = eval("[{\"pname\":\"刘营镇\",\"counts\":\"1\"},{\"pname\":\"新生镇\",\"counts\":\"2\"}]");
          let indexManageCounts = []
          let maxData = []
          let minData = []
          for (let i = 0; i < mapData.length; i++) {
            indexManageCounts.push({
              name:mapData[i].pname,
              value:mapData[i].counts
            })
          maxData.push(mapData[i].counts)
          minData.push(mapData[i].counts)
        }
        var max = Math.max.apply(null, maxData);
        var min = Math.min.apply(null, minData);
        // 地图柱状图数据
        $.getJSON('./static/santaitown.json', function (hexianJson) {
          echarts.registerMap('hexian', hexianJson);
          var regions = hexianJson.features.map(function (feature) {
            return {
              name: feature.properties.name,
              value: Math.random(),
              height: feature.properties.height / 10
            };
          });
          var autoRotate = false;//是否开启视角绕物体的自动旋转查看。
          var autoRotateDirection='cw';//物体自传的方向。默认是 'cw' 也就是从上往下看是顺时针方向，也可以取 'ccw'，既从上往下看为逆时针方向。
          var autoRotateSpeed=20;//旋转速度
          var autoRotateAfterStill= 3;//在鼠标静止操作后恢复自动旋转的时间间隔。在开启 autoRotate 后有效。
          var damping=0.8;//鼠标进行旋转，缩放等操作时的迟滞因子，在大于 0 的时候鼠标在停止操作后，视角仍会因为一定的惯性继续运动（旋转和缩放）。
          var rotateSensitivity=1;//旋转操作的灵敏度，值越大越灵敏。支持使用数组分别设置横向和纵向的旋转灵敏度。0不能旋转
          var distance = 180; //地图大小   值越大-地图越小，值越小-地图越大
          var alpha = 100; //垂直翻转角度
          var beta = 0;//视角绕 y 轴，即左右旋转的角度。
          var zoomSensitivity = 3;//缩放操作的灵敏度，值越大越灵敏。0表示不能缩放
          var center = [ 0, 0, 0 ];//[ 18, 10, 0 ]视角中心点，旋转也会围绕这个中心点旋转，默认为[0,0,0]。
          let myChart = echarts.init(document.getElementById('china'));
          // console.log(regions)
          myChart.setOption({
            baseOption: {
              tooltip: {
                trigger: 'item',
                formatter:function(params){
                  console.log(params)
                  var data = params.data;
                  if(params.componentSubType == "bar3D"){
                    return data.name +
                      '</b><br /> 数量: '+data.value[2] + '个'
                  }
                  if (params.componentSubType == "map3D") {
                    /* console.log(data.name +
                     '</b><br /> 数量: '+ data.value ? data.value : '暂无数据')*/
                    return data.name +
                      '</b><br /> 数量: '+ (data.value ? data.value + '个' : '--')
                  }

                }
              },
              visualMap : [ {
                text: ['数量(个)'],
                show : true,
                seriesIndex : 0,
                calculable: true,
                dimension : 0,//取第一维度,批次
                // 			left:10,
                // 			top:10,
                left:20,
                bottom:0,
                // zlevel:20,
                inRange : {//由低到高
                  color : ['#69bdf5','#30a6f5','#2998E1','#0C67A3']
                },
                min : 0,
                max : max,
                textStyle:{
                  color:'#fff',
                  fontSize:10
                }
              }],
              geo3D: {
                show: false,
                map: 'hexian',
                viewControl: {
                  // alpha: 180 ,    //地图初始化角度
                  distance: 180
                },
                regionHeight: 0,
                light: { //光照阴影
                  main: {
                    color: '#fff', //光照颜色
                    intensity: 1, //光照强度
                    // shadowQuality: 'high', //阴影亮度
                    // shadow: false, //是否显示阴影
                    alpha: 60,
                    beta:0,
                    shadow: true,
                    shadowQuality: 'medium',
                  },
                  /*ambient: {
                    intensity: 0.22
                  }*/
                },
              },
              series: [
                {
                  type : 'map3D',
                  map : 'hexian',
                  name : 'hexian',
                  roam: true,
                  height:'auto',
                  zlevel : 3,
                  boxWidth : 'auto',
                  boxHeight : 'auto',
                  boxDepth : 'auto',
                  top : '0',
                  instancing : true,
                  itemStyle: {
                    color: '#4e8ab4',     //地图区域默认颜色
                    opacity: 1,
                    borderWidth: 0.5,
                    borderColor: 'rgb(62,215,213)'
                  },
                  /*groundPlane: {
                    show: true,
                    color: '#aaa'    //地面颜色
                  },*/
                  emphasis : { //当鼠标放上去  地区区域是否显示名称
                    label : {
                      show : true,
                      textStyle : {
                        color : '#fff',
                        fontSize : 12,
                        backgroundColor : 'rgba(0,23,11,0)'
                      }
                    },
                   /* itemStyle : {
                      areaColor : "#e3c854",
                      opacity : 1,
                    },*/
                  },
                  light: { //光照阴影
                    main: {
                      color: '#fff', //光照颜色
                      intensity: 1, //光照强度
                      // shadowQuality: 'high', //阴影亮度
                      // shadow: false, //是否显示阴影
                      alpha:60,
                      beta:0,
                      shadow: true,
                      shadowQuality: 'medium',
                    },
                    /*ambient: {
                      intensity: 0.22
                    }*/
                  },
                  viewControl: {
                    // alpha: 180 ,    //地图初始化角度
                    distance: 180
                  },
                  regionHeight: 6,
                  data : indexManageCounts
                },
                //柱状图
                {
                  name: '数量',
                  type: "bar3D",
                  coordinateSystem: 'geo3D',
                  barSize: 4,//柱状图大小
                  // bevelSize:0.5,//柱子的倒角尺寸
                  label: {
                    show: false,
                    formatter: '{b}'
                  },

                  shading: 'lambert',
                  opacity: 1,
                  bevelSize: 0,
                  zlevel : 5,
                  viewControl: {
                    // alpha: 180 ,    //地图初始化角度
                    // distance: 120
                    //zoomSensitivity: 20
                  },
                  itemStyle: {
                    normal: {
                      color: "#E4C13D"
                    }
                  },
                  data: self.convertData(indexManageCounts),
                },
              ],
            }
          })
          
          self.china = myChart;
          changeSize(myChart)
        });
      }
    })
  },
  //土地资源结构
  EchartsIndexLandTypeChart: function (container, self) {
    indexlandType(self).then(result => {
      if (result.code == 0) {
        let indexData = result.data;
        let indexlandData = []
        let indexPlantColor = ['#1890FF', '#41D9C7', '#2FC25B', '#FACC14', '#E6965C', '#5C8EE6', '#13C2C2', '#5CA3E6', '#B381E6', '#F04864', '#D598D9',]
        for (let i = 0; i < indexData.length; i++) {
          indexlandData.push({
            name: indexData[i].types,
            value: indexData[i].areas
          })
        }
        let myChart = echarts.init(document.getElementById(container));
        let option = {
          color: indexPlantColor,
          tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c}亩 ({d}%)"
          },
          legend: {
            show: false,
            orient: "vertical",
            top: "middle",
            left: "60%",
            textStyle: {
              color: "#f2f2f2",
              fontSize: 12
            },
            icon: "roundRect",
            data: indexlandData,
          },
          series: [
            {
              radius: ["40%", "65%"],
              center: ["50%", "60%"],
              type: "pie",
              label: {
                normal: {
                  show: true,
                  formatter: '{b|{b}}\n{hr|}\n{d|{d}%}',
                  rich: {
                    b: {
                      fontSize: 12,
                      color: '#fff',
                      align: 'left',
                      padding: 4
                    },
                    hr: {
                      borderColor: '#fff',
                      width: '100%',
                      borderWidth: 1,
                      height: 0
                    },
                    d: {
                      fontSize: 12,
                      color: '#fff',
                      align: 'left',
                      padding: 4
                    },
                    c: {
                      fontSize: 12,
                      color: '#fff',
                      align: 'left',
                      padding: 4
                    }
                  },
                  textStyle: {
                    fontSize: 10,
                    color: "#fff"
                  },
                  position: "outside"
                },
                emphasis: {
                  show: true
                }
              },
              labelLine: {
                normal: {
                  show: true,
                  lineStyle: {
                    color: "#fff"  // 改变标示线的颜色
                  },
                  length: 5,
                  // length2: 10,
                },
                emphasis: {
                  show: true
                }
              },
              name: "土地资源结构",
              data: indexlandData,
            },
          ]
        };
        myChart.setOption(option);
        changeSize(myChart)
        return myChart;
      }
    })
  },
  //种植类型占比 饼图
  EchartsIndexPlantTypeChart: function (container, self) {
    indexPlantType(self).then(result => {
      if (result.code == 0) {
        let indexData = result.data;
        let indexPlantData = []
        let indexPlantColor = ['#1890FF', '#41D9C7', '#2FC25B', '#FACC14', '#E6965C', '#5C8EE6', '#13C2C2', '#5CA3E6', '#B381E6', '#F04864', '#D598D9',]
        for (let i = 0; i < indexData.length; i++) {
          indexPlantData.push({
            name: indexData[i].typeName,
            value: indexData[i].areas.toFixed(2)
          })
        }
        let myChart = echarts.init(document.getElementById(container));
        let option = {
          color: indexPlantColor,
          tooltip: {
            trigger: 'item',
            formatter: "{b}<br/>面积：{c}亩",
          },
          legend: {
            show: false,
            orient: "vertical",
            top: "middle",
            left: "60%",
            textStyle: {
              color: "#f2f2f2",
              fontSize: 12
            },
            icon: "roundRect",
            data: indexPlantData,
          },
          series: [
            {
              radius: ["40%", "65%"],
              center: ["50%", "60%"],
              type: "pie",
              label: {
                normal: {
                  show: true,
                  formatter: '{b|{b}}\n{hr|}\n{d|{d}%}',
                  rich: {
                    b: {
                      fontSize: 12,
                      color: '#fff',
                      align: 'left',
                      padding: 4
                    },
                    hr: {
                      borderColor: '#fff',
                      width: '100%',
                      borderWidth: 1,
                      height: 0
                    },
                    d: {
                      fontSize: 12,
                      color: '#fff',
                      align: 'left',
                      padding: 4
                    },
                    c: {
                      fontSize: 12,
                      color: '#fff',
                      align: 'left',
                      padding: 4
                    }
                  },
                  textStyle: {
                    fontSize: 10,
                    color: "#fff"
                  },
                  position: "outside"
                },
                emphasis: {
                  show: true
                }
              },
              labelLine: {
                normal: {
                  show: true,
                  lineStyle: {
                    color: "#fff"  // 改变标示线的颜色
                  },
                  length: 5,
                  // length2: 10,
                },
                emphasis: {
                  show: true
                }
              },
              name: "种植类型占比",
              data: indexPlantData,
            },
           /* // 边框的设置
            {
              radius: ['30%', '34%'],
              center: ['30%', '50%'],
              type: 'pie',
              label: {
                normal: {
                  show: false
                },
                emphasis: {
                  show: false
                }
              },
              labelLine: {
                normal: {
                  show: false
                },
                emphasis: {
                  show: false
                }
              },
              animation: false,
              tooltip: {
                show: false
              },
              data: [{
                value: 1,
              }],
            },
            {
              name: '外边框',
              type: 'pie',
              clockWise: false, //顺时加载
              hoverAnimation: false, //鼠标移入变大
              center: ['30%', '50%'],
              radius: ['65%', '65%'],
              label: {
                normal: {
                  show: false
                }
              },
              data: [{
                value: 9,
                name: '',
                itemStyle: {
                  normal: {
                    borderWidth: 2,
                    borderColor: '#0b5263'
                  }
                }
              }]
            },*/
          ]
        };
        myChart.setOption(option);
        changeSize(myChart)
        return myChart;
      }
      /*let indexLandData = result.data;
       let indexEnterpriseDataY = [];
       let indexEnterpriseDataX = [];
       let nameY = "数量(万亩)"
       for (let i = 0; i < indexLandData.length; i++) {
         indexEnterpriseDataY.push(indexLandData[i].area)
         indexEnterpriseDataX.push(indexLandData[i].pname)
       }
       for (let j = 0; j < indexEnterpriseDataY.length; j++) {
         indexEnterpriseDataY[j] = indexEnterpriseDataY[j].toFixed(2);
         // if (indexEnterpriseDataY[j] > 10000) {
         //   indexEnterpriseDataY[j] = (indexEnterpriseDataY[j] / 10000).toFixed(2);
         //   nameY = "数量(万亩)"
         // }
       }

       let myChart = echarts.init(document.getElementById(container));
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
           formatter: "{b}<br/>数量：{c}万亩",
           //  formatter: function (params) {
           //    let showHtm = "";
           //    showHtm = params.name + "<br>" + "数量：" + (params.value).toFixed(2) + "万亩";
           //    return showHtm;
           //  }
           // formatter: function (params) {
           //   let showHtm = "";
           //   showHtm = params.name + "<br>" + "数量：" + Math.round(params.value) + "万亩";
           //   return showHtm;
           // }
         },
         grid: {
           left: '3%',
           right: '5%',
           bottom: '10%',
           top:"20%",
           containLabel: true
         },
         xAxis: [{
           type: 'category',
           data: indexEnterpriseDataX,
           axisTick: {
             show: false
           },
           axisLabel : {
             color:'#fff',
           },
           axisLine: {
             // show: false,
             lineStyle: {
               color: '#7195ae',
               fontSize: 10
             }
           },
         }],
         yAxis: [{
           type: 'value',
           name: nameY,
           axisTick: {
             show: false
           },
           axisLine: {
             show: false,
             lineStyle: {
               color: '#fff',
               fontSize: 10
             }
           },
           axisLabel: {
             textStyle: {
               fontSize: 10
             }
           },
           splitLine: {
             lineStyle: {
               type: 'double',
               color: '#7195ae'
             }
           }
         }],

         series: [{
           name: '土地类型统计',
           barMaxWidth: "30%",
           type: 'bar',
           // type: "pictorialBar",
           // symbol: "path://M250 150 L150 350 L350 350 Z",
           // symbolClip: true,
           itemStyle: {
             normal: {
               color: '#50CB78',
               // color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
               //   offset: 0,
               //   color: '#C3FFB6' // 0% 处的颜色
               // }, {
               //   offset: 1,
               //   color: '#50CB78' // 100% 处的颜色
               // }], false),
             }
           },
           data: indexEnterpriseDataY,
         }]
       };
       myChart.setOption(option);
       return myChart;*/
    })
  },
  //农事类型占比
  EchartsIndexFarmTypeChart: function (container, self) {
    indexFarmType(self).then(result => {
      if (result.code == 0) {
        let indexData = result.data;
        let indexFarmData = []
        let indexFarmColor =['#1890FF', '#41D9C7', '#2FC25B', '#FACC14', '#E6965C', '#5C8EE6', '#13C2C2', '#5CA3E6', '#B381E6', '#F04864', '#D598D9',]
        for (let i = 0; i < indexData.length; i++) {
          indexFarmData.push({
            name: indexData[i].farmingName,
            value: indexData[i].count
          })
        }
        let myChart = echarts.init(document.getElementById(container));
        let option = {
          color: indexFarmColor,
          tooltip: {
            trigger: "item",
            formatter: "{b}: {c}次 ({d}%)"
          },
          legend: {
            show: false,
            orient: "vertical",
            top: "middle",
            left: "60%",
            textStyle: {
              color: "#f2f2f2",
              fontSize: 12
            },
            icon: "roundRect",
            data: indexFarmData,
          },
          series: [
            {
              radius: ["40%", "65%"],
              center: ["50%", "60%"],
              type: "pie",
              label: {
                normal: {
                  show: true,
                  formatter: '{b|{b}}\n{hr|}\n{d|{d}%}',
                  rich: {
                    b: {
                      fontSize: 12,
                      color: '#fff',
                      align: 'left',
                      padding: 4
                    },
                    hr: {
                      borderColor: '#fff',
                      width: '100%',
                      borderWidth: 1,
                      height: 0
                    },
                    d: {
                      fontSize: 12,
                      color: '#fff',
                      align: 'left',
                      padding: 4
                    },
                    c: {
                      fontSize: 12,
                      color: '#fff',
                      align: 'left',
                      padding: 4
                    }
                  },
                  textStyle: {
                    fontSize: 10,
                    color: "#fff"
                  },
                  position: "outside"
                },
                emphasis: {
                  show: true
                }
              },
              labelLine: {
                normal: {
                  show: true,
                  lineStyle: {
                    color: "#fff"  // 改变标示线的颜色
                  },
                  length: 5,
                  // length2: 10,
                },
                emphasis: {
                  show: true
                }
              },
              name: "农事类型占比",
              data: indexFarmData,
            }
          ]
          /*series: [
            // 主要展示层的
            {
              radius: ["30%", "61%"],
              center: ["30%", "50%"],
              type: "pie",
              label: {
                normal: {
                  show: true,
                  formatter: "{d}%",
                  textStyle: {
                    fontSize: 10
                  },
                  position: "outside"
                },
                emphasis: {
                  show: true
                }
              },
              labelLine: {
                normal: {
                  show: true,
                  length: 10,
                  length2: 10
                },
                emphasis: {
                  show: true
                }
              },
              name: "种植类型占比",
              data: indexFarmData,

            },
            // 边框的设置
            {
              radius: ["30%", "34%"],
              center: ["30%", "50%"],
              type: "pie",
              label: {
                normal: {
                  show: false
                },
                emphasis: {
                  show: false
                }
              },
              labelLine: {
                normal: {
                  show: false
                },
                emphasis: {
                  show: false
                }
              },
              animation: false,
              tooltip: {
                show: false
              },
              data: [
                {
                  value: 1,
                  itemStyle: {
                    color: "rgba(250,250,250,0.3)"
                  }
                }
              ]
            },
            {
              name: "外边框",
              type: "pie",
              clockWise: false, //顺时加载
              hoverAnimation: false, //鼠标移入变大
              center: ["30%", "50%"],
              radius: ["65%", "65%"],
              label: {
                normal: {
                  show: false
                }
              },
              data: [
                {
                  value: 9,
                  name: "",
                  itemStyle: {
                    normal: {
                      borderWidth: 2,
                      borderColor: "#0b5263"
                    }
                  }
                }
              ]
            }
          ]*/
        };
        myChart.setOption(option);
        changeSize(myChart)
        return myChart;
      }
      /*let indexLandData = result.data;
       let indexEnterpriseDataY = [];
       let indexEnterpriseDataX = [];
       let nameY = "数量(万亩)"
       for (let i = 0; i < indexLandData.length; i++) {
         indexEnterpriseDataY.push(indexLandData[i].area)
         indexEnterpriseDataX.push(indexLandData[i].pname)
       }
       for (let j = 0; j < indexEnterpriseDataY.length; j++) {
         indexEnterpriseDataY[j] = indexEnterpriseDataY[j].toFixed(2);
         // if (indexEnterpriseDataY[j] > 10000) {
         //   indexEnterpriseDataY[j] = (indexEnterpriseDataY[j] / 10000).toFixed(2);
         //   nameY = "数量(万亩)"
         // }
       }

       let myChart = echarts.init(document.getElementById(container));
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
           formatter: "{b}<br/>数量：{c}万亩",
           //  formatter: function (params) {
           //    let showHtm = "";
           //    showHtm = params.name + "<br>" + "数量：" + (params.value).toFixed(2) + "万亩";
           //    return showHtm;
           //  }
           // formatter: function (params) {
           //   let showHtm = "";
           //   showHtm = params.name + "<br>" + "数量：" + Math.round(params.value) + "万亩";
           //   return showHtm;
           // }
         },
         grid: {
           left: '3%',
           right: '5%',
           bottom: '10%',
           top:"20%",
           containLabel: true
         },
         xAxis: [{
           type: 'category',
           data: indexEnterpriseDataX,
           axisTick: {
             show: false
           },
           axisLabel : {
             color:'#fff',
           },
           axisLine: {
             // show: false,
             lineStyle: {
               color: '#7195ae',
               fontSize: 10
             }
           },
         }],
         yAxis: [{
           type: 'value',
           name: nameY,
           axisTick: {
             show: false
           },
           axisLine: {
             show: false,
             lineStyle: {
               color: '#fff',
               fontSize: 10
             }
           },
           axisLabel: {
             textStyle: {
               fontSize: 10
             }
           },
           splitLine: {
             lineStyle: {
               type: 'double',
               color: '#7195ae'
             }
           }
         }],

         series: [{
           name: '土地类型统计',
           barMaxWidth: "30%",
           type: 'bar',
           // type: "pictorialBar",
           // symbol: "path://M250 150 L150 350 L350 350 Z",
           // symbolClip: true,
           itemStyle: {
             normal: {
               color: '#50CB78',
               // color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
               //   offset: 0,
               //   color: '#C3FFB6' // 0% 处的颜色
               // }, {
               //   offset: 1,
               //   color: '#50CB78' // 100% 处的颜色
               // }], false),
             }
           },
           data: indexEnterpriseDataY,
         }]
       };
       myChart.setOption(option);
       return myChart;*/
    })
  },
  //质量检测
  EchartsIndexSourceChart: function (container, self) {
    indexSourceType(self).then(result => {
      if (result.code == 0) {
        let typeArr = [];
        let nameArr = [];
        result.data.forEach(item => {
          if (!typeArr.includes(item.testingItems)) {
            typeArr.push(item.testingItems);
          }
        });
        result.data.forEach(item => {
          if (!nameArr.includes(item.inspectionTime)) {
            nameArr.push(item.inspectionTime);
          }
        });

        let finArr = [];
        typeArr.forEach(item1 => {
          let _arr = [];
          nameArr.forEach((item2, index) => {
            _arr[index] = "--";
            result.data.forEach(a => {
              if (a.inspectionTime == item2 && a.testingItems == item1) {
                _arr[index] = a.count;
              }
            });
          });
          let valueObj = {
            name: item1,
            type: "bar",
            stack: "数量",
            // smooth: "true",
            data: _arr
          };
          finArr.push(valueObj);
        });
        let qualityTestData = {}
        qualityTestData.type = finArr;
        qualityTestData.name = nameArr;
        let myChart = echarts.init(document.getElementById(container));
        let option = {
          color: ['#1890FF', '#41D9C7', '#2FC25B', '#FACC14', '#E6965C', '#5C8EE6', '#13C2C2', '#5CA3E6', '#B381E6', '#F04864', '#D598D9'],
          tooltip: {
            axisPointer: {
              type: 'shadow',
              label: {
                show: true,
                backgroundColor: '#7B7DDC'
              }
            },
            trigger: "axis",
            formatter:function (data) {
              let showHtm = "";
              for(let i = 0; i<data.length; i++){
                if(i==0){
                  showHtm += data[0].name+"<br/>";
                }
                showHtm += data[i].marker+data[i].seriesName+":"+data[i].value +"个<br/>" ;
              }
              return showHtm;
            },
          },
          legend: {
            textStyle: {
              color: '#fff'
            },
            // right:"6%",
            top: 0,
            icon: "circle",   //  这个字段控制形状  类型包括 circle，rect ，roundRect，triangle，diamond，pin，arrow，none
            itemWidth: 5,  // 设置宽度
            itemHeight: 5, // 设置高度
            // itemGap: 10 // 设置间距
          },
          grid: {
            top: "20%",
            left: "6%",
            right: "6%",
            bottom: '-5%',
            containLabel: true
          },

          xAxis: [
            {
              type: 'category',
              data: qualityTestData.name,
              axisTick: {
                show: false
              },
              axisLabel: {
                color: "#fff",
                interval: 0,
                rotate: 30,
                fontSize: 10,
              },
              axisLine: {
                // show: false,
                lineStyle: {
                  color: "#7195ae",
                  fontSize: 10
                }
              }
            }
          ],
          yAxis: [
            {
              type: "value",
              name: "数量(个)",
              axisTick: {
                show: false
              },
              nameTextStyle: {
                padding: [0, 0, -8, 0]
              },
              axisLine: {
                show: false,
                lineStyle: {
                  color: "#fff",
                  fontSize: 10
                }
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
              }
            }
          ],
          series: qualityTestData.type
        };
        myChart.setOption(option);
        changeSize(myChart)
        return myChart;
      }
    })

  },
  //设备类型占比
  EchartsIndexEquipmentChart: function (container, self) {
    indexEquipmentType(self).then(result => {
      if (result.code == 0) {
        let indexData = result.data;
        let indexEquipmentData = []
        let indexEquipmentColor = ['#1890FF', '#41D9C7', '#2FC25B', '#FACC14', '#E6965C', '#5C8EE6', '#13C2C2', '#5CA3E6', '#B381E6', '#F04864', '#D598D9',]
        for (let i = 0; i < indexData.length; i++) {
          indexEquipmentData.push({
            name: indexData[i].typeName,
            value: indexData[i].equipmentNums
          })
        }
        let myChart = echarts.init(document.getElementById(container));
        let option = {
          color: indexEquipmentColor,
          tooltip: {
            trigger: "item",
            formatter: "{b}: {c}个 ({d}%)"
          },
          legend: {
            show: false,
            orient: "vertical",
            top: "middle",
            left: "60%",
            textStyle: {
              color: "#f2f2f2",
              fontSize: 12
            },
            icon: "roundRect",
            data: indexEquipmentData,
          },
          series: [
            {
              radius: ["40%", "65%"],
              center: ["50%", "60%"],
              type: "pie",
              label: {
                normal: {
                  show: true,
                  formatter: '{b|{b}}\n{hr|}\n{d|{d}%}',
                  rich: {
                    b: {
                      fontSize: 12,
                      color: '#fff',
                      align: 'left',
                      padding: 4
                    },
                    hr: {
                      borderColor: '#fff',
                      width: '100%',
                      borderWidth: 1,
                      height: 0
                    },
                    d: {
                      fontSize: 12,
                      color: '#fff',
                      align: 'left',
                      padding: 4
                    },
                    c: {
                      fontSize: 12,
                      color: '#fff',
                      align: 'left',
                      padding: 4
                    }
                  },
                  textStyle: {
                    fontSize: 10,
                    color: "#fff"
                  },
                  position: "outside"
                },
                emphasis: {
                  show: true
                }
              },
              labelLine: {
                normal: {
                  show: true,
                  lineStyle: {
                    color: "#fff"  // 改变标示线的颜色
                  },
                  length: 5,
                  // length2: 10,
                },
                emphasis: {
                  show: true
                }
              },
              name: "设备类型占比",
              data: indexEquipmentData,
            }
          ]
          /*series: [
            // 主要展示层的
            {
              radius: ["30%", "61%"],
              center: ["30%", "50%"],
              type: "pie",
              label: {
                normal: {
                  show: true,
                  formatter: "{d}%",
                  textStyle: {
                    fontSize: 10
                  },
                  position: "outside"
                },
                emphasis: {
                  show: true
                }
              },
              labelLine: {
                normal: {
                  show: true,
                  length: 10,
                  length2: 10
                },
                emphasis: {
                  show: true
                }
              },
              name: "设备类型占比",
              data: indexEquipmentData,

            },
            // 边框的设置
            {
              radius: ["30%", "34%"],
              center: ["30%", "50%"],
              type: "pie",
              label: {
                normal: {
                  show: false
                },
                emphasis: {
                  show: false
                }
              },
              labelLine: {
                normal: {
                  show: false
                },
                emphasis: {
                  show: false
                }
              },
              animation: false,
              tooltip: {
                show: false
              },
              data: [
                {
                  value: 1,
                  itemStyle: {
                    color: "rgba(250,250,250,0.3)"
                  }
                }
              ]
            },
            {
              name: "外边框",
              type: "pie",
              clockWise: false, //顺时加载
              hoverAnimation: false, //鼠标移入变大
              center: ["30%", "50%"],
              radius: ["65%", "65%"],
              label: {
                normal: {
                  show: false
                }
              },
              data: [
                {
                  value: 9,
                  name: "",
                  itemStyle: {
                    normal: {
                      borderWidth: 2,
                      borderColor: "#0b5263"
                    }
                  }
                }
              ]
            }
          ]*/
        };
        myChart.setOption(option);
        changeSize(myChart)
        return myChart;
      }
      /*let indexLandData = result.data;
       let indexEnterpriseDataY = [];
       let indexEnterpriseDataX = [];
       let nameY = "数量(万亩)"
       for (let i = 0; i < indexLandData.length; i++) {
         indexEnterpriseDataY.push(indexLandData[i].area)
         indexEnterpriseDataX.push(indexLandData[i].pname)
       }
       for (let j = 0; j < indexEnterpriseDataY.length; j++) {
         indexEnterpriseDataY[j] = indexEnterpriseDataY[j].toFixed(2);
         // if (indexEnterpriseDataY[j] > 10000) {
         //   indexEnterpriseDataY[j] = (indexEnterpriseDataY[j] / 10000).toFixed(2);
         //   nameY = "数量(万亩)"
         // }
       }

       let myChart = echarts.init(document.getElementById(container));
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
           formatter: "{b}<br/>数量：{c}万亩",
           //  formatter: function (params) {
           //    let showHtm = "";
           //    showHtm = params.name + "<br>" + "数量：" + (params.value).toFixed(2) + "万亩";
           //    return showHtm;
           //  }
           // formatter: function (params) {
           //   let showHtm = "";
           //   showHtm = params.name + "<br>" + "数量：" + Math.round(params.value) + "万亩";
           //   return showHtm;
           // }
         },
         grid: {
           left: '3%',
           right: '5%',
           bottom: '10%',
           top:"20%",
           containLabel: true
         },
         xAxis: [{
           type: 'category',
           data: indexEnterpriseDataX,
           axisTick: {
             show: false
           },
           axisLabel : {
             color:'#fff',
           },
           axisLine: {
             // show: false,
             lineStyle: {
               color: '#7195ae',
               fontSize: 10
             }
           },
         }],
         yAxis: [{
           type: 'value',
           name: nameY,
           axisTick: {
             show: false
           },
           axisLine: {
             show: false,
             lineStyle: {
               color: '#fff',
               fontSize: 10
             }
           },
           axisLabel: {
             textStyle: {
               fontSize: 10
             }
           },
           splitLine: {
             lineStyle: {
               type: 'double',
               color: '#7195ae'
             }
           }
         }],

         series: [{
           name: '土地类型统计',
           barMaxWidth: "30%",
           type: 'bar',
           // type: "pictorialBar",
           // symbol: "path://M250 150 L150 350 L350 350 Z",
           // symbolClip: true,
           itemStyle: {
             normal: {
               color: '#50CB78',
               // color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
               //   offset: 0,
               //   color: '#C3FFB6' // 0% 处的颜色
               // }, {
               //   offset: 1,
               //   color: '#50CB78' // 100% 处的颜色
               // }], false),
             }
           },
           data: indexEnterpriseDataY,
         }]
       };
       myChart.setOption(option);
       return myChart;*/
    })
  },
  //植保防治趋势
  EchartsIndexDiseases: function (container, self) {
    indexDiseasesType(self).then(result => {
      if (result.code == 0) {
        let indexLandData = result.data;
        let indexEnterpriseDataY1 = [];
        let indexEnterpriseDataY2 = [];
        let indexEnterpriseDataX = [];
        for (let i = 0; i < indexLandData.length; i++) {
          indexEnterpriseDataY1.push(indexLandData[i].happenArea)
          indexEnterpriseDataY2.push(indexLandData[i].defenseArea)
          indexEnterpriseDataX.push(indexLandData[i].years)
        }
        let myChart = echarts.init(document.getElementById(container));
        let option = {
          tooltip: {
            trigger: "axis",
            axisPointer: {
              // 坐标轴指示器，坐标轴触发有效
              type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
              label: {
                show: true,
                backgroundColor: '#7B7DDC'
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
          legend: {
            textStyle: {
              color: '#fff'
            },
            right:"center",
            top: '2%',
            itemWidth: 12,  // 设置宽度
            itemHeight: 8, // 设置高度
            // itemGap: 10 // 设置间距
          },
          grid: {
            top: "18%",
            left: "6%",
            right: "8%",
            bottom: "0",
            containLabel: true
          },
          xAxis: [{
            type: 'category',
            data: indexEnterpriseDataX,
            axisTick: {
              show: false
            },
            axisLabel: {
              color: "#fff",
              fontSize: 10,
              rotate: 0,
              interval: 0,
            },
            axisLine: {
              // show: false,
              lineStyle: {
                color: '#7195ae',
                fontSize: 10
              }
            },
            axisPointer: {
              type: 'shadow'
            }
          }],
          yAxis: [
            {
              type: "value",
              name: "面积(亩)",
              nameTextStyle: {
                padding: [0, 0, -8,0],
                color: "#fff"
              },
              axisTick: {
                show: false
              },
              axisLabel: {
                textStyle:{
                  fontSize: 10,
                  color:'#fff',  //坐标的字体颜色
                },
              },
              axisLine: {
                show: true,
                lineStyle: {
                  type: 'solid',
                  color: '#7195ae'
                },
              },
              splitLine: {
                lineStyle: {
                  type: "double",
                  color: "#7195ae"
                }
              }
            },
            {
              type: "value",
              name: "面积(亩)",
              nameTextStyle: {
                padding: [0, 0, -8,0],
                color: "#fff"
              },
              axisTick: {
                show: false
              },
              axisLabel: {
                show:true,
                textStyle:{
                  fontSize: 10,
                  color:'#fff',  //坐标的字体颜色
                },
              },
              axisLine: {
                show: true,
                lineStyle: {
                  type: 'solid',
                  color: '#7195ae'
                },
              },
              splitLine: {
                lineStyle: {
                  type: "double",
                  color: "#7195ae"
                }
              }
            },
          ],
          series: [{
            name: '防治面积',
            barMaxWidth: "30%",
            type: 'bar',
            itemStyle: {
              normal: {
                color: '#41D9C7',
              }
            },
            data: indexEnterpriseDataY2,
          },{
            name: '发生面积',
            type: 'line',
            itemStyle: {
              normal: {
                color: '#FACC14',
              }
            },
            data: indexEnterpriseDataY1,
          }]
        };
        myChart.setOption(option);
        changeSize(myChart)
        return myChart
      }
      /*if (result.code == 0) {
          let indexData = result.data;
          // 其他去最后一位的处理
          let dataArr = []
          for (let j = indexData.length - 1; j > -1; j--) {
            if (indexData[j].typename == '其他') {
              dataArr.push(indexData[j]);
            } else {
              dataArr.unshift(indexData[j]);
            }
          }
          let indexDiseasesDataY = [];
          let indexDiseasesDataX = [];
          for (let i = 0; i < dataArr.length; i++) {
            if (dataArr[i].typename == null) {
              dataArr[i].typename = "";
            }
            if (dataArr[i].counts == null) {
              dataArr[i].counts = 0;
            }
            indexDiseasesDataY.push(dataArr[i].counts)
            indexDiseasesDataX.push(dataArr[i].typename)
          }
          let myChart = echarts.init(document.getElementById(container));
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
              formatter: "{b}<br/>次数：{c}次"
            },
            grid: {
              top: "18%",
              left: "6%",
              right: "6%",
              bottom: 0,
              containLabel: true
            },
            xAxis: [{
              type: 'category',
              data: indexDiseasesDataX,
              axisTick: {
                show: false
              },
              axisLabel: {
                color: "#fff",
                fontSize: 10,
                rotate: 30,
                interval: 1,
                formatter: function (value) {
                  return (value.length > 1 ? (value.slice(0,2)+"...") : value )
                },
              },
              axisLine: {
                // show: false,
                lineStyle: {
                  color: '#7195ae',
                  fontSize: 10
                }
              },
            }],
            yAxis: [{
              type: 'value',
              name: "次数(次)",
              axisTick: {
                show: false
              },
              nameTextStyle: {
                padding: [0, 0, -8, 0]
              },
              axisLine: {
                show: false,
                lineStyle: {
                  color: '#fff',
                  fontSize: 10
                }
              },
              axisLabel: {
                textStyle: {
                  fontSize: 10
                }
              },
              splitLine: {
                lineStyle: {
                  type: 'double',
                  color: '#7195ae'
                }
              }
            }],

            series: [{
              name: '病虫害类型',
              barMaxWidth: "30%",
              type: 'bar',
              // type: "pictorialBar",
              // symbol: "path://M250 150 L150 350 L350 350 Z",
              // symbolClip: true,
              itemStyle: {
                normal: {
                  color: '#3EACE5',
                }
              },
              data: indexDiseasesDataY,
            }]
          };
          myChart.setOption(option);
          return myChart

        /!*let indexLandData = result.data;
         let indexEnterpriseDataY = [];
         let indexEnterpriseDataX = [];
         let nameY = "数量(万亩)"
         for (let i = 0; i < indexLandData.length; i++) {
           indexEnterpriseDataY.push(indexLandData[i].area)
           indexEnterpriseDataX.push(indexLandData[i].pname)
         }
         for (let j = 0; j < indexEnterpriseDataY.length; j++) {
           indexEnterpriseDataY[j] = indexEnterpriseDataY[j].toFixed(2);
           // if (indexEnterpriseDataY[j] > 10000) {
           //   indexEnterpriseDataY[j] = (indexEnterpriseDataY[j] / 10000).toFixed(2);
           //   nameY = "数量(万亩)"
           // }
         }

         let myChart = echarts.init(document.getElementById(container));
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
             formatter: "{b}<br/>数量：{c}万亩",
             //  formatter: function (params) {
             //    let showHtm = "";
             //    showHtm = params.name + "<br>" + "数量：" + (params.value).toFixed(2) + "万亩";
             //    return showHtm;
             //  }
             // formatter: function (params) {
             //   let showHtm = "";
             //   showHtm = params.name + "<br>" + "数量：" + Math.round(params.value) + "万亩";
             //   return showHtm;
             // }
           },
           grid: {
             left: '3%',
             right: '5%',
             bottom: '10%',
             top:"20%",
             containLabel: true
           },
           xAxis: [{
             type: 'category',
             data: indexEnterpriseDataX,
             axisTick: {
               show: false
             },
             axisLabel : {
               color:'#fff',
             },
             axisLine: {
               // show: false,
               lineStyle: {
                 color: '#7195ae',
                 fontSize: 10
               }
             },
           }],
           yAxis: [{
             type: 'value',
             name: nameY,
             axisTick: {
               show: false
             },
             axisLine: {
               show: false,
               lineStyle: {
                 color: '#fff',
                 fontSize: 10
               }
             },
             axisLabel: {
               textStyle: {
                 fontSize: 10
               }
             },
             splitLine: {
               lineStyle: {
                 type: 'double',
                 color: '#7195ae'
               }
             }
           }],

           series: [{
             name: '土地类型统计',
             barMaxWidth: "30%",
             type: 'bar',
             // type: "pictorialBar",
             // symbol: "path://M250 150 L150 350 L350 350 Z",
             // symbolClip: true,
             itemStyle: {
               normal: {
                 color: '#50CB78',
                 // color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                 //   offset: 0,
                 //   color: '#C3FFB6' // 0% 处的颜色
                 // }, {
                 //   offset: 1,
                 //   color: '#50CB78' // 100% 处的颜色
                 // }], false),
               }
             },
             data: indexEnterpriseDataY,
           }]
         };
         myChart.setOption(option);
         return myChart;*!/
      }*/
    })
  },
  //价格交易数据
  EchartsIndexPriceChart: function (container, self) {
    indexPrice(self).then(result => {
      if (result.code == 0) {
        let typeArr = [];
        let nameArr = [];
        result.data.forEach(item => {
          if (!typeArr.includes(item.productName)) {
            typeArr.push(item.productName);
          }
        });
        result.data.forEach(item => {
          if (!nameArr.includes(item.time)) {
            nameArr.push(item.time);
          }
        });

        let finArr = [];
        typeArr.forEach(item1 => {
          let _arr = [];
          nameArr.forEach((item2, index) => {
            _arr[index] = "--";
            result.data.forEach(a => {
              if (a.time == item2 && a.productName == item1) {
                _arr[index] = (a.avgprice).toFixed(2);
              }
            });
          });
          let valueObj = {
            name: item1,
            type: "line",
            smooth: "true",
            data: _arr
          };
          finArr.push(valueObj);
        });
        let marketData = {}
        marketData.type = finArr;
        marketData.name = nameArr;
        let myChart = echarts.init(document.getElementById(container));
        let option = {
          color: ["#57bbf7", "#ffc969", "#f38b97", "#b1d882", "#c0acf9"],
          tooltip: {
            axisPointer: {
              type: 'shadow',
              label: {
                show: true,
                backgroundColor: '#7B7DDC'
              }
            },
            trigger: "axis",
            formatter:function (data) {
              let showHtm = "";
              for(let i = 0; i<data.length; i++){
                if(i==0){
                  showHtm += data[0].name+"<br/>";
                }
                showHtm += data[i].marker+data[i].seriesName+":"+data[i].value +"元<br/>" ;
              }
              return showHtm;
            },
          },
          legend: {
            show: false,
            textStyle: {
              color: '#fff'
            },
            right:"10%",
            top: 0,
            icon: "circle",   //  这个字段控制形状  类型包括 circle，rect ，roundRect，triangle，diamond，pin，arrow，none
            itemWidth: 5,  // 设置宽度
            itemHeight: 5, // 设置高度
            // itemGap: 10 // 设置间距
          },
          grid: {
            top: "20%",
            left: "6%",
            right: "6%",
            bottom: '-5%',
            containLabel: true
          },

          xAxis: [
            {
              type: 'category',
              data: marketData.name,
              axisTick: {
                show: false
              },
              axisLabel: {
                color: "#fff",
                interval: 0,
                rotate: 30,
                fontSize: 10,
              },
              axisLine: {
                // show: false,
                lineStyle: {
                  color: "#7195ae",
                  fontSize: 10
                }
              }
            }
          ],
          yAxis: [
            {
              type: "value",
              name: "价格(元/公斤)",
              axisTick: {
                show: false
              },
              nameTextStyle: {
                padding: [0, 0, -8, 0]
              },
              axisLine: {
                show: false,
                lineStyle: {
                  color: "#fff",
                  fontSize: 10
                }
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
              }
            }
          ],
          series: marketData.type
        };
        myChart.setOption(option);
        changeSize(myChart)
        return myChart;
      }
    })

  },
  //投入品用量  柱状图
  EchartsIndexInputsChart: function (container,self) {
    //日期
    let geographyHouseNumDataTime = [];
    //投入品不同类型数据
    let seriesList = [];
    let legendData = [];
    let nameY = "单位(吨)"
    let colors = ['#1890FF', '#41D9C7', '#2FC25B', '#FACC14', '#E6965C', '#5C8EE6', '#13C2C2', '#5CA3E6', '#B381E6', '#F04864', '#D598D9',]
    indexInputs(self).then(result => {
      if (result.code == 0) {
        let indexInputsData = result.data;
        //图例数据
        legendData = indexInputsData.inputName;
        //横轴数据
        geographyHouseNumDataTime = indexInputsData.year;
        let seriesMap = indexInputsData.series;
        let i = 0;
        $.each(seriesMap,function(key,value){
          /*for (let j = 0; j < value.length; j++) {
            if (value[j] > 10000) {
              value[j] = (value[j] / 10000).toFixed(2);
              nameY = "单位(万吨)"
            }
          }*/
          let seriesObj={
            name: key,
            barMaxWidth: "30%",
            type: 'bar',
            itemStyle: {
              normal: {
                color: colors[i],
              }
            },
            data: value,
          };
          seriesList.push(seriesObj);
          i++;
        });
      }
      let myChart = echarts.init(document.getElementById(container));
      let option = {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
          },
          formatter:function (data) {
            let showHtm = "";
            for(let i = 0; i<data.length; i++){
              if(i==0){
                showHtm += data[0].name+"<br/>";
              }
              showHtm += data[i].marker+data[i].seriesName+":"+data[i].value +"吨<br/>" ;
            }
            return showHtm;
          },
        },
        legend: {
          data: legendData,
          textStyle: {
            color: '#fff'
          },
          right:"6%",
          top: 0,
          icon: "circle",   //  这个字段控制形状  类型包括 circle，rect ，roundRect，triangle，diamond，pin，arrow，none
          itemWidth: 10,  // 设置宽度
          itemHeight: 10, // 设置高度
          // itemGap: 10 // 设置间距
        },
        grid: {
          top: "18%",
          left: "6%",
          right: "6%",
          bottom: 0,
          containLabel: true
        },
        xAxis: [{
          type: 'category',
          data: geographyHouseNumDataTime,
          axisTick: {
            show: false
          },
          axisLabel: {
            color: "#fff",
            interval: 0,
            rotate: 0,
            fontSize: 10,
          },
          axisLine: {
            // show: false,
            lineStyle: {
              color: '#7195ae',
              fontSize: 10
            }
          },
        }],
        yAxis: [{
          type: 'value',
          name: nameY,
          nameTextStyle: {
            padding: [0, 0, -8, 0]
          },
          axisTick: {
            show: false
          },
          axisLine: {
            show: false,
            lineStyle: {
              color: '#fff',
              fontSize: 10
            }
          },
          axisLabel: {
            textStyle: {
              fontSize: 10
            }
          },
          splitLine: {
            lineStyle: {
              type: 'double',
              color: '#7195ae'
            }
          }
        }],
        series:seriesList
        /* [
          {
            name: '化肥',
            barMaxWidth: "30%",
            type: 'bar',

            itemStyle: {
              normal: {
                color: '#50CB78',
              }
            },
            data: geographyHouseNumDataNum,
          },
          {
            name: '地膜',
            barMaxWidth: '30%',
            type: 'bar',
            itemStyle: {
              normal: {
                color: '#E4C13D',
              }
            },
            data: geographyHouseNumDataType,
          },
          {
            name: '农药',
            barMaxWidth: '30%',
            type: 'bar',
            itemStyle: {
              normal: {
                color: '#00d8cd',
              }
            },
            data: geographyHouseNumDataY3,
          }
        ]*/
      };
      myChart.setOption(option);
      changeSize(myChart)
      return myChart;
    })

   }
}
