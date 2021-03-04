/**
 * 判断输入的是否是手机号
 */

export const isPhone = (value) => {
    var reg = /^0?(13[0-9]|15[012356789]|17[013678]|18[0-9]|14[57])[0-9]{8}$/;
    if (!reg.test(value)) {
        return false;
    };
    return true;
};

/**
 * 表格自动向下滚动
 */
export const startmarquee = (lh,speed,delay,marqueeObj) =>  {  //lh---每行列表的高度，speed---滚动的速度，delay---间隔多久滚动一次,marqueeObj---需要实现这个效果的id
    var p=false;
    var t;
    var o=document.getElementById(marqueeObj);  
    o.innerHTML+=o.innerHTML;
    o.style.marginTop=0;
    o.onmouseover=function(){p=true;} //鼠标移入，停止滚动
    o.onmouseout=function(){p=false;}//鼠标移出，继续滚动
    
    function start(){
        t=setInterval(scrolling,speed); //定时器，自动滚动
        if(!p) o.style.marginTop=parseInt(o.style.marginTop)-1+"px";
    }    
    
    function scrolling(){
        if(parseInt(o.style.marginTop)%lh!=0){
            o.style.marginTop=parseInt(o.style.marginTop)-1+"px";
            if(Math.abs(parseInt(o.style.marginTop))>=o.scrollHeight/2) o.style.marginTop=0;
        }else{
            clearInterval(t);
            setTimeout(start,delay);
        }
    }
    setTimeout(start,delay);
}

/**
 * 获取几个最大值
 */
// 传入一个数组包对象，对象内有name和value属性
export const getBig = (arr,count) => {
    let big_num = 0
    let big_index = 0
    let return_arr = []
    for (let i = 0; i < count; i++) {
        big_num = 0
        arr.forEach((item,index) => {
            if(item.value > big_num){
                big_num = item.value
                big_index = index
            }
        })
        return_arr.push(...arr.splice(big_index,1))
    }

    return return_arr
}

/**
 * 格式话日期
 */
export function formatDate(longTypeDate) {
    var dateType = "";
    var date = new Date();
    date.setTime(longTypeDate);
    dateType += date.getFullYear();   //年
    dateType += "/" + getMonth(date); //月
    dateType += "/" + getDay(date);   //日
    return dateType;
}

function getMonth(date) {
    var month = "";
    month = date.getMonth() + 1; //getMonth()得到的月份是0-11
    if (month < 10) {
        month = "0" + month;
    }
    return month;
}

function getDay(date) {
    var day = "";
    day = date.getDate();
    if (day < 10) {
        day = "0" + day;
    }
    return day;
}

export default {
  formatTimeToStr(times, pattern) {
    let d = new Date(times).Format("yyyy-MM-dd hh:mm:ss");
    if (pattern) {
      d = new Date(times).Format(pattern);
    }
    return d.toLocaleString();
  },

  //根据初始颜色和结束颜色，分割梯度获取rgba数组
  gradientColor(startColor, endColor, step) {
    let startRGB = this.colorRgb(startColor);//转换为rgb数组模式
    let startR = startRGB[0];
    let startG = startRGB[1];
    let startB = startRGB[2];

    let endRGB = this.colorRgb(endColor);
    let endR = endRGB[0];
    let endG = endRGB[1];
    let endB = endRGB[2];

    let sR = (endR - startR) / step;//总差值
    let sG = (endG - startG) / step;
    let sB = (endB - startB) / step;

    var colorArr = [];
    for (var i = 0; i < step; i++) {
      //计算每一步的hex值 
      var hex = this.colorHex('rgb('+ parseInt((sR * i + startR))+ ',' + parseInt((sG * i + startG))+ ',' + parseInt((sB * i + startB)) +','+0.9+ ')');
      colorArr.push(hex);
    }
      return colorArr;
    },
    // 将hex表示方式转换为rgb表示方式(这里返回rgb数组模式)
    colorRgb(sColor) {
      var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
      var sColor = sColor.toLowerCase();
      if (sColor && reg.test(sColor)) {
          if (sColor.length === 4) {
              var sColorNew = "#";
              for (var i = 1; i < 4; i += 1) {
                  sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1));
              }
              sColor = sColorNew;
          }
          //处理六位的颜色值
          var sColorChange = [];
          for (var i = 1; i < 7; i += 2) {
              sColorChange.push(parseInt("0x" + sColor.slice(i, i + 2)));
          }
          return sColorChange;
      } else {
          return sColor;
      }
  },
  // 将rgb表示方式转换为hex表示方式
  colorHex(rgb) {
      var _this = rgb;
      var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
      if (/^(rgb|RGB)/.test(_this)) {
          var aColor = _this.replace(/(?:(|)|rgb|RGB)*/g, "").split(",");
          var strHex = "#";
          for (var i = 0; i < aColor.length; i++) {
              var hex = Number(aColor[i]).toString(16);
              hex = hex < 10 ? 0 + '' + hex : hex;// 保证每个rgb的值为2位
              if (hex === "0") {
                  hex += hex;
              }
              strHex += hex;
          }
          if (strHex.length !== 7) {
              strHex = _this;
          }
          return strHex;
      } else if (reg.test(_this)) {
          var aNum = _this.replace(/#/, "").split("");
          if (aNum.length === 6) {
              return _this;
          } else if (aNum.length === 3) {
              var numHex = "#";
              for (var i = 0; i < aNum.length; i += 1) {
                  numHex += (aNum[i] + aNum[i]);
              }
              return numHex;
          }
      } else {
          return _this;
      }
  }
}

//图片地址
export const imgUrl = 'http://39.104.114.103:8082/image/datacentersystem/'