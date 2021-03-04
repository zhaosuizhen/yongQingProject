<template>
  <div class="main">
      <div class="item">
        <h1>{{contentList[0].title}}</h1>
        <div class="echarts_box"><div class="echarts_top" id="echarts_top_1"></div></div>
        <div class="echarts_box"><div class="echarts_bottom" id="echarts_bottom_1"></div></div>
        <div class="content_box">{{contentList[0].content}}</div>
      </div>

      <div class="item">
        <h1>{{contentList[1].title}}</h1>
        <div class="echarts_box"><div class="echarts_top" id="echarts_top_2"></div></div>
        <div class="echarts_box"><div class="echarts_bottom" id="echarts_bottom_2"></div></div>
        <div class="content_box">{{contentList[0].content}}</div>
      </div>

      <div class="item">
        <h1>{{contentList[2].title}}</h1>
        <div class="echarts_box"><div class="echarts_top" id="echarts_top_3"></div></div>
        <div class="echarts_box"><div class="echarts_bottom" id="echarts_bottom_3"></div></div>
        <div class="content_box">{{contentList[0].content}}</div>
      </div>
  </div>
</template>

<script>
import echarts from '@/util/echarts/dataAnalysis'
export default {
  props:['contentList'],
  data(){
    return{
        
    }
  },
  mounted(){
      echarts.tradition('echarts_top_1', this.contentList[0].data.dataX, this.contentList[0].data.dataY, '传统农业',  this.contentList[0].title)
      echarts.number('echarts_bottom_1', this.contentList[0].data.dataX, this.contentList[0].data.dataY, '数字农业',  this.contentList[0].title)
      echarts.tradition('echarts_top_2', this.contentList[1].data.dataX, this.contentList[1].data.dataY, '传统农业',  this.contentList[1].title)
      echarts.number('echarts_bottom_2', this.contentList[1].data.dataX, this.contentList[1].data.dataY, '数字农业',  this.contentList[1].title)
      echarts.tradition('echarts_top_3', this.contentList[2].data.dataX, this.contentList[2].data.dataY, '传统农业',  this.contentList[2].title)
      echarts.number('echarts_bottom_3', this.contentList[2].data.dataX, this.contentList[2].data.dataY, '数字农业',  this.contentList[2].title)
  },
}
</script>

<style scoped lang="scss">
.main{
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  padding: 4vh 11vw;
  justify-content: space-between;
  .item{
    position: relative;
    width: 25vw;
    height: 67vh;
    padding-bottom: 6vh;
    background: rgba(25, 100, 138, 0.5);
    border-radius: 8px;
    h1{
      position: absolute;
      top: -2vh;
      width: 40%;
      height: 5.2vh;
      line-height: 5.2vh;
      left: 30%;
      text-align: center;
      color: #fff;
      background: url(../../../../assets/images/sj_tbg.png) no-repeat;
      background-size: 100% 100%;
      font-weight: bold;
      font-size: 2rem;
      -webkit-text-stroke: 1.5px #41696e;
    }
    .echarts_box{
      position: relative;
      width: 100%;
      height: 40%;
      // background: #000;
      .echarts_top,.echarts_bottom{
          position: relative;
          width: 100%;
          height: 100%;
      }
    }
    .content_box{
      position: relative;
      width: 100%;
      height: 20%;
      // background: #fff;
      padding: 10px 20px;
      font-weight: bold;
      color: #ffe764;
      text-indent: 2em;
      line-height: 3vh;
      font-size: 1.4rem;
    }
  }
}
</style>