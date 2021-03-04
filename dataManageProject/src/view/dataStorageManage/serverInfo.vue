<template>
  <div>
    <el-header>数据存储管理</el-header>
    <el-main>
      <el-row style="margin-bottom:20px"><h1>存储状态分析</h1></el-row>
      <el-row style="margin-bottom:20px">
        <el-col style="position: relative;" :span="8">
          <div class="centerText"><h1>{{fuZaiText}}</h1></div>
          <div class="echartsBox" id="fuZaiZhuangTai"></div>
        </el-col>
        <el-col style="position: relative;" :span="8">
          <div class="centerText"><h1>{{neiCunText}}</h1></div>
          <div class="echartsBox" id="neiCunShiYongLv"></div>
        </el-col>
        <el-col style="position: relative;" :span="8">
          <div class="centerText"><h1>{{cunChuText}}</h1></div>
          <div class="echartsBox" id="cunChuZhuangTai"></div>
        </el-col>
      </el-row>
      <el-row>
        <!-- 用户访问数量 -->
        <el-col style="position: relative;" :span="8">
          <el-radio-group v-model="yongHuType" style="margin-bottom: 20px;" @change="changeYongHuType">
            <el-radio-button label="0">今天</el-radio-button>
            <el-radio-button label="1">昨天</el-radio-button>
            <el-radio-button label="2">最近7天</el-radio-button>
            <el-radio-button label="3">最近30天</el-radio-button>
          </el-radio-group>
          <div class="echartsBox" id="yongHuFangWen"></div>
        </el-col>
        <!-- 服务器请求数量 -->
        <el-col style="position: relative;" :span="8">
          <el-radio-group v-model="fuWuQiType" style="margin-bottom: 20px;" @change="changeFuWuQiType">
            <el-radio-button label="0">今天</el-radio-button>
            <el-radio-button label="1">昨天</el-radio-button>
            <el-radio-button label="2">最近7天</el-radio-button>
            <el-radio-button label="3">最近30天</el-radio-button>
          </el-radio-group>
          <div class="echartsBox" id="fuWuQiQingQiu"></div>
        </el-col>
        <!-- 内存使用情况 -->
        <el-col style="position: relative;" :span="8">
          <el-radio-group v-model="neiCunType" style="margin-bottom: 20px;" @change="changeNeiCunType">
            <el-radio-button label="0">今天</el-radio-button>
            <el-radio-button label="1">昨天</el-radio-button>
            <el-radio-button label="2">最近7天</el-radio-button>
            <el-radio-button label="3">最近30天</el-radio-button>
          </el-radio-group>
          <div class="echartsBox" id="neiCunShiYong"></div>
        </el-col>

      </el-row>
    </el-main>
  </div>
</template>

<script>
import echarts from '@/echarts/serverInfo'
import { loadBalancing,memoryUsage,diskUtilization,userAccessNumber,memoryUserverRequestsNumbersage,memoryUsageSituation } from '@/api/dataStorageManage/serverInfo'
export default {
  data(){
    return{
      fuZaiText:null,
      neiCunText:null,
      cunChuText:null,
      yongHuType:0,
      fuWuQiType:0,
      neiCunType:0,
      fuZaiZhuangTai:[],
      neiCunShiYongLv:[],
      cunChuZhuangTai:[],
      yongHuFangWen:{
        time:[],
        value:[]
      },
      fuWuQiQingQiu:{
        time:[],
        value:[]
      },
      neiCUnShiYong:{
        time:[],
        value:[]
      }
    }
  },
  methods:{
    //用户访问type改变
    async changeYongHuType(){
      this.yongHuFangWen.time = []
      this.yongHuFangWen.value = []
      await this.getUserAccessNumber()
      echarts.yongHuFangWen('yongHuFangWen', this.yongHuFangWen.time, this.yongHuFangWen.value)
    },
    //用户访问type改变
    async changeFuWuQiType(){
      this.fuWuQiQingQiu.time = []
      this.fuWuQiQingQiu.value = []
      await this.getMemoryUserverRequestsNumbersage()
      echarts.fuWuQiQingQiu('fuWuQiQingQiu', this.fuWuQiQingQiu.time, this.fuWuQiQingQiu.value)
    },
    //用户访问type改变
    async changeNeiCunType(){
      this.neiCUnShiYong.time = []
      this.neiCUnShiYong.value = []
      await this.getMemoryUsageSituation()
      echarts.neiCUnShiYong('neiCUnShiYong', this.neiCUnShiYong.time, this.neiCUnShiYong.value)
    },
    //获取负载均衡数据
    async getLoadBalancing(){
      let res = await loadBalancing()
      console.log(res.data.data)
      this.fuZaiText = res.data.data.useRate
      // res.data.data = {freeRate:'3.0%',userRate:'96.9%'}
     for (const key in res.data.data) {
       this.fuZaiZhuangTai.unshift({
         name:key,
         value:(res.data.data[key].substring(0,res.data.data[key].length - 1) * 1).toFixed(1)
       })
     }
    },
    //内存使用率
    async gatMemoryUsage(){
      let res = await memoryUsage()
      this.neiCunText = `${(res.data.data.used * 100 / res.data.data.total).toFixed(1)}%`
      for (const key in res.data.data) {
        if(key != 'total'){
          this.neiCunShiYongLv.push({
            name:key,
            value:res.data.data[key]
          })
        }
      }
    },
    //磁盘使用率
    async getDiskUtilization(){
      let res = await diskUtilization()
      this.cunChuText = `${(res.data.data.usage * 100 / res.data.data.total).toFixed(1)}%`
      console.log(res.data.data)
      for (const key in res.data.data) {
        if(key != 'total'){
          this.cunChuZhuangTai.push({
            name:key,
            value:res.data.data[key]
          })
        }
      }
    },
    //用户访问数量
    async getUserAccessNumber(){
      let res = await userAccessNumber({type:this.yongHuType})
      res.data.data.forEach((item) => {
        this.yongHuFangWen.time.push(item.time)
        this.yongHuFangWen.value.push(item.count)
      })
    },
    //服务器请求数量
    async getMemoryUserverRequestsNumbersage(){
      let res = await memoryUserverRequestsNumbersage({type:this.fuWuQiType})
      res.data.data.forEach((item) => {
        this.fuWuQiQingQiu.time.push(item.time)
        this.fuWuQiQingQiu.value.push(item.count)
      })
    },
    //内存使用情况
    async getMemoryUsageSituation(){
      let res = await memoryUsageSituation({type:this.neiCunType})
      console.log(res)
      res.data.data.forEach((item) => {
        this.neiCUnShiYong.time.push(item.time)
        this.neiCUnShiYong.value.push(item.memoryUsage)
      })
    },
  },
  async mounted(){
    //获取负载均衡数据
    await this.getLoadBalancing()
    //获取内存使用率
    await this.gatMemoryUsage()
    //获取磁盘使用率
    await  this.getDiskUtilization()
    //获取用户访问数量
    await this.getUserAccessNumber()
    //获取服务器请求数量
    await this.getMemoryUserverRequestsNumbersage()
    //获取内存使用情况
    await this.getMemoryUsageSituation()
    
    await echarts.fuZaiZhuangTai('fuZaiZhuangTai', this.fuZaiZhuangTai)
    await echarts.neiCunShiYongLv('neiCunShiYongLv', this.neiCunShiYongLv)
    await echarts.cunChuZhuangTai('cunChuZhuangTai', this.cunChuZhuangTai)
    await echarts.yongHuFangWen('yongHuFangWen', this.yongHuFangWen.time, this.yongHuFangWen.value)
    await echarts.fuWuQiQingQiu('fuWuQiQingQiu', this.fuWuQiQingQiu.time, this.fuWuQiQingQiu.value)
    await echarts.neiCunShiYong('neiCunShiYong', this.neiCUnShiYong.time, this.neiCUnShiYong.value)
  }
}
</script>

<style scoped lang="scss">
.echartsBox{
  width: 100%;
  height: 30vh;
}
.centerText{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
}
</style>