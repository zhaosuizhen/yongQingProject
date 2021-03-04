<template>
<div ref="map" class="map">
    <div class="ol-content" ref="popup">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <!--<span>{{this.popupBody.title}}</span>-->
                <span>详细信息</span>
                <el-button style="float: right; padding: 3px 0" type="text" icon="el-icon-circle-close" @click="closePopup">

                </el-button>
            </div>
            <div style="height: 250px;">
                <el-scrollbar style="height:100%;">
                    <li class="text" v-for="(item, index) in popupBody.data" :key="index">{{item.title}} : {{item.value}}</li>
                </el-scrollbar>
            </div>
        </el-card>
    </div>
</div>
</template>

<script>
import "@/assets/znxdmap/znxdmap.js";
import "@/assets/znxdmap/znxdmap.css";
import "@/assets/znxdwebgis/znxdwebgis.min.js";
export default {
    data() {
        return {
            popupBody: {
                title:'',
                data: []
            }
        };
    },
  /*props:{
    layer:{

    }
  },*/
    methods: {
        initMap() {
            var _this = this;
            if (!this.map) {
                this.map = new ZNXDWEBGIS.Map(this.$refs.map, {
                    zoom: 9.5,
                    //center: [118.37, 31.72],
                    // center: [118.30284, 31.55422],
                    center: [105.005517,31.103317],
                   // extent: [118.08362, 31.444, 118.50474, 32.05811],
                    extent:[105.105517,31.103317],
                    projection: "EPSG:4326",
                    // controls: new ZNXDWEBGIS.Control({
                    //     collapsible: false,
                    //     collapsed: false,
                    //     Attribution: false,
                    //     controlArr: []
                    // }).control,
                    controls:[],
                    minZoom: 9.5,
                    maxZoom: 21
                });

                let aj = [{
                        LayerName: "天地图",
                        LayerType: "TianTileLayer",
                        LayerJson: {
                            visible: true,
                            opacity: 1,
                            layerName: "img_c",
                            titleName: "矢量底图",
                            zIndex: -2,
                            tk: "ba066f36b55f4810fd8a7f0c225d09ea",
                            type: "img_c"
                        }
                    }
                    // {
                    //     LayerName: "天地图",
                    //     LayerType: "TianTileLayer",
                    //     LayerJson: {
                    //         visible: true,
                    //         opacity: 1,
                    //         layerName: "天地图",
                    //         titleName: "矢量注记",
                    //         zIndex: -2,
                    //         tk: "ba066f36b55f4810fd8a7f0c225d09ea",
                    //         type: "cia_c"
                    //     }
                    // }
                ];
                //this.map.initLayers(aj);
             /* var layer = new znxdmap.layer.Tile({
                source: new znxdmap.source.XYZ({
                  //url:'http://10.1.203.202:8080/satellite/{z}/{x}/{y}.jpg'
                   url: 'http://mt2.google.cn/vt/lyrs=y&hl=zh-CN&gl=CN&src=app&x={x}&y={y}&z={z}&s=G'
                  //url:'http://t{0-7}.tianditu.gov.cn/img_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=img&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}&tk=c60e7b1689560d591136eff1975e4e39'
                }),
                //maxResolution: 0.000005364418029785156
              })
              _this.map.addLayer(layer);*/
              /*var obj = {
                visible: true,
                opacity: 1,
                layerName: "BingTileLayer",
                titleName: "影像底图",
                zIndex: -2,
                type: "Aerial" //'Road', 'RoadOnDemand', 'Aerial', 'AerialWithLabels', 'collinsBart', 'ordnanceSurvey'
              }
              var bing = new ZNXDWEBGIS.Layer.BingTileLayer(obj);
              bing.HookLayer(this.map);*/
              let BingLayerimg = new znxdmap.layer.Tile({
                name: "三台县",
                title: true,
                visible: true,//控制显示隐藏
                preload: Infinity,
                zIndex: "-2",//层级
                opacity: 1,//透明度
                extent: [-180.0, -90.0, 180.0, 90.0],
                source: new znxdmap.source.BingMaps({
                  key: "AujfBv8qvCGHzvSufuQ_EuWOw5JaXBVtt8K6SAcA8QFl4ZuyYnb1UMH6OtTbo8lo",
                  imagerySet: "Aerial",//Aerial, Road (影像和路网)
                  maxZoom: 19//最大显示层级
                })
              });
              this.map.addLayer(BingLayerimg);

              this.popupLayer = new znxdmap.Overlay({
                    visible: false,
                    offset: [0, 2],
                    positioning: "top-center",
                    autoPan: true,
                    stopEvent: true,
                    element: this.$refs.popup
                });
              this.map.on("moveend", e => {
                    var zoom = this.map.getView().getZoom();
                    this.$emit("moveend", zoom)
                });
            }
        },
        addLayer(options) {
            var _this = this;
            let layer = new ZNXDWEBGIS.Layer.DataLayer({
                ogcType: "geo",
                layerName: options.layername,
                titleName: options.layername,
                zIndex: 12,
                geoField: options.geoField||"the_geom",
                workspace: options.workspace||"santai",
                tileUrl: geoserverurl + "/wms?",
                format: "image/png",
                layerSRS: options.layerSRS||"EPSG:4326",
                layers: (options.workspace||"santai:") + options.layername,
                vectorUrl: geoserverurl + "/ows?",
                vectorLayerName: (options.workspace||"santai:") + options.layername,
                clickType: options.clickType||"polygon",
                opacity: 1,
                isTiled: true,
                styles: options.styles,
                PopUpFun: function (e) {
                    let coordinate = layer.event.coordinate;

                    if(options.popupCallback){
                      var result = options.popupCallback(e);
                      if(result){
                          if(result.data){
                              console.log(result)
                             _this.popupBody.data = result.data;
//                            _this.popupBody.title = result.title;
                             console.log(_this.popupBody.data)
                             _this.showPopup(coordinate);
                          }else if(result.element){
                            _this.showPopup(coordinate, result.element);
                          }

                      }
                    }
                }
            });
            layer.HookLayer(this.map);
            this.map.on("singleclick", e => {
                // var features = _this.map.map.getFeaturesAtPixel(
                //     e.pixel
                // );
                // if(features.length>1){
                //     return false;
                // }
                // if(features.length==0){
                //     return false;
                // }
                _this.popupLayer.setPosition(undefined);
                if (layer.isPopUp) {
                    layer.event = e;
                    layer.ClickFun(e);
                }
            });
            return layer;
        },
        //添加行政区边界
        addXZQBorder() {
            var _this = this;

            if (!this.borderLayer) {
                this.borderLayer = new znxdmap.layer.Vector({
                    source: new znxdmap.source.Vector(),
                    style: new znxdmap.style.Style({
                        fill: new znxdmap.style.Fill({
                            color: "rgba(26, 47, 86, 0.8)"
                        }),
                        stroke: new znxdmap.style.Stroke({
                            color: "#68B9EB",
                            lineJoin: "bevel",
                            width: 2
                        })
                    })
                });
                this.map.map.addLayer(this.borderLayer);
            }

            ZNXDWEBGIS.Util.POST(
                geoserverurl + "/ows", {
                    type: "geo",
                    obj: {
                        service: "WFS",
                        version: "1.1.1",
                        request: "GetFeature",
                        srsName: "EPSG:4326",
                        typename: "santai:Export_Output",
                        outputFormat: "application/json"
                        //CQL_FILTER: "id=" + code
                    }
                },
                function (result) {
                    var features = new znxdmap.format.GeoJSON().readFeatures(result);
                    let allGeom = new znxdmap.geom.Polygon.fromExtent([-180, -90, 180, 90]);
                    //对称差异分析
                    let temp_geom = ZNXDWEBGIS.JSTS.symDifference(
                        allGeom,
                        features[0].getGeometry()
                    );
                    let jstsFeature = new znxdmap.Feature({
                        geometry: temp_geom
                    });


                    _this.borderLayer.getSource().addFeatures([jstsFeature]);
                    /*_this.map.locateToExtent(
                        _this.borderLayer.getSource().getExtent(),
                        1
                    );*/
                }
            );
        },
        showPopup(coordinate, element) {
            if(element){
              this.popupLayer.setElement(element);
            }else{
              this.popupLayer.setElement(this.$refs.popup);
            }
            if (
                !this.map
                .getOverlays()
                .getArray()
                .includes(this.popupLayer)
            ) {
                this.map.addOverlay(this.popupLayer);
            }
            this.popupLayer.setPosition(coordinate);
        },
        closePopup() {
          /*if(this.layer){
            this.layer.clear();
          }*/
          this.map.removeOverlay(this.popupLayer);
        },
        addWMS(options) {
            var _this = this;
            var json = {
                visible: options.visible,
                isTiled: true,
                zIndex: 12,
                opacity: 1,
                layerName: options.id,
                titleName: options.layername,
                format: "image/png",
                tileUrl: options.url + "/wms?",
                layers: options.layers,
                style: options.style?options.style: ""
            }
            var layer = new ZNXDWEBGIS.Layer.TileLayer(json);
            layer.HookLayer(this.map);
        }
    },
    mounted() {
        this.initMap();
        this.addXZQBorder();
    }
};
</script>

<style lang="scss">
.map {
    width: 100%;
    height: 100%;

    .ol-content {
        min-width: 250px;
        min-height: 200px;
        .el-card {
            border-color: rgba(0, 159, 255, 0.8);
            background-color: rgba(0, 87, 139, 1);
            color: #ffffff;
        }

        .el-card__header {
            padding: 10px;
            border-bottom: 1px solid #97afe6;
        }

        .el-card__body {
            padding: 10px;
        }

        li.text {
            list-style: none;
            line-height: 1.5;
            font-weight: 300;
            border-bottom: 1px dotted #97afe6;
        }

        .el-col {
            text-align: center;
        }
    }
}
</style>
