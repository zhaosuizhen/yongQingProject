<template>
  <div id="map" class="map"></div>
</template>

<script>
import '../../util/webgisLibES5/jsts.min.js'
import '../../assets/znxdmap/znxdmap'
import '../../util/webgisLibES5/olcesium.js'
import '../../util/webgisLibES5/znxdwebgis.min.js'
export default {
    data(){
        return{

        }
    },
    methods:{
        setMap(){
            var extent = [104.71893, 30.70524 , 105.30670, 31.45444];

            var projection = new znxdmap.proj.Projection({
            code: 'xkcd-image',
            units: 'pixels',
            extent: extent
            });

            var map = new ZNXDWEBGIS.Map("map", {
              zoom: 9.5,
              center: [105.005517,31.123317],
              projection: "EPSG:4326",
              // controls: new ZNXDWEBGIS.Control({
              //   collapsible: true,
              //   collapsed: true,
              //   controlArr: []
              // }).control,
              controls:[],
              minZoom: 9.5,
              maxZoom: 15,
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
                    },
		    // {
        //   LayerName: "天地图",
        //   LayerType: "TianTileLayer",
        //   LayerJson: {
        //     visible: true,
        //     opacity: 1,
        //     layerName: "天地图",
        //     titleName: "矢量底图",
        //     zIndex: -2,
        //     tk: "efc93d241ce4173f8d856e8725536a57",
        //     type: "cia_c"
        //   }
	    	// }
	    	];
	    	map.initLayers(aj);

	    	map.addLayer(new znxdmap.layer.Image({
          zIndex: 101,
                    source: new znxdmap.source.ImageStatic({
                      //   url: './2-1-min.png',//这里添加静态图片的地址
                        url: require("../../assets/santai_img/map/4-1.png"),
                        projection: projection,
                        imageExtent: extent,
                    })
                }))

          var zzcLayer = new znxdmap.layer.Vector({
          title: "zzcLayer",
          source: new znxdmap.source.Vector({
            projection: "EPSG:4326"
          }),
          zIndex: 100,
	    	style:new znxdmap.style.Style({
            fill: new znxdmap.style.Fill({
             color: "rgba(26, 47, 86, 0.8)"
                        }),
                        stroke: new znxdmap.style.Stroke({
                            color: "#68B9EB",
              width: 1
            })
          })
            });


		    var jstsFeature = new znxdmap.Feature({
              geometry: new znxdmap.geom.Polygon.fromExtent([-180, -90, 180, 90])
            });
            zzcLayer.getSource().addFeatures([jstsFeature]);
		    map.addLayer(zzcLayer);
        }
    },
    mounted(){
        this.setMap()
    }
}
</script>

<style>
@import url('../../util/webgisLibES5/znxdmap.css');
@import url('../../util/webgisLibES5/olcs.css');
@import url('../../util/webgisLibES5/znxdwebgis.css');
.map {
            height: 98%;
            width: 100%;
        }
</style>