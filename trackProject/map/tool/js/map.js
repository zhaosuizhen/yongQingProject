var marker,
	lineArr = [ [ 116.478935, 39.997761 ], [ 116.478939, 39.997825 ], [ 116.478939, 39.997825 ], [ 116.478939, 39.997825 ], [ 116.478939, 39.997825 ], [ 116.478939, 39.997825 ], [ 116.478939, 39.997825 ], [ 116.478939, 39.997825 ], [ 116.478939, 39.997825 ], [ 116.478912, 39.998549 ], [ 116.478912, 39.998549 ], [ 116.478998, 39.998555 ], [ 116.478998, 39.998555 ], [ 116.479282, 39.99856 ], [ 116.479658, 39.998528 ], [ 116.480151, 39.998453 ], [ 116.480784, 39.998302 ], [ 116.480784, 39.998302 ], [ 116.481149, 39.998184 ], [ 116.481573, 39.997997 ], [ 116.481863, 39.997846 ], [ 116.482072, 39.997718 ], [ 116.482362, 39.997718 ], [ 116.483633, 39.998935 ], [ 116.48367, 39.998968 ], [ 116.484648, 39.999861 ] ];


var map = new AMap.Map("container", {
	resizeEnable : true,
	center : [ 116.397428, 39.90923 ],
	mapStyle : "amap://styles/blue", //grey
	zoom : 17
});


marker1 = new AMap.Marker({
	map : map,
	position : [ 116.478935, 39.997761 ],
	offset : new AMap.Pixel(100, -130),
	content : "<div class='info'><table class='mytable'><tr><td class='td1'></td><td class='td2'>车牌：冀F8LF61</td></tr><tr><td class='td5'></td><td class='td6'>重量：100kg</td></tr><tr><td class='td3'></td><td class='td4'>种类：玉米</td></tr></table></div>", //设置文本标注内容
});




marker = new AMap.Marker({
	map : map,
	position : [ 116.478935, 39.997761 ],
	icon : "tool/img/car2.png",
	offset : new AMap.Pixel(-26, -13),
	autoRotation : true,
	angle : -90,
});


// 绘制轨迹
var polyline = new AMap.Polyline({
	map : map,
	path : lineArr,
	showDir : true,
	strokeColor : "#28F", //线颜色
	strokeOpacity : 1, //线透明度
	strokeWeight : 5, //线宽
	strokeStyle : "solid" //线样式
});

var passedPolyline = new AMap.Polyline({
	map : map,
	strokeColor : "#AF5", //线颜色
	strokeOpacity : 1, //线透明度
	strokeWeight : 6, //线宽
	strokeStyle : "solid" //线样式
});


var startMarker = new AMap.Marker({
	position : lineArr[0],
	icon : 'tool/img/start.png',
	map : map
})

var endMarker = new AMap.Marker({
	position : lineArr[lineArr.length - 1],
	icon : 'tool/img/end.png',
	map : map
})


marker.on('moving', function(e) {
	passedPolyline.setPath(e.passedPath);
});

marker1.on('moving', function(e) {
	passedPolyline.setPath(e.passedPath);
});

map.setFitView();

function startAnimation() {
	marker.moveAlong(lineArr, 200);
	marker1.moveAlong(lineArr, 200);
}

function pauseAnimation() {
	marker.pauseMove();
	marker1.pauseMove();
}

function resumeAnimation() {
	marker.resumeMove();
	marker1.resumeMove();
}

function stopAnimation() {
	marker.stopMove();
	marker1.stopMove();
}