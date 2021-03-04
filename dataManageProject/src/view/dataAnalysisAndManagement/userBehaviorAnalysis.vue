<template>
  <div>
      <el-row>
          <el-col :span="2"><span style='line-height: 40px'>系统选择：</span></el-col>
          <el-col :span="22">
              <el-select v-model="type" placeholder="请选择系统" @change="changeSelect">
                <el-option label="可视化平台" :value="0"></el-option>
                <el-option label="门户网站" :value="1"></el-option>
              </el-select>
          </el-col>
      </el-row>
      
      <el-row type="flex" justify="center" align="center" style="margin-top:30px">
          <el-col style="text-align:center;color:#46CEF0;font-size:22px;font-weight: 800;">日均访问量</el-col>
          <el-col style="text-align:center;color:#46CEF0;font-size:22px;font-weight: 800;">日均点击量</el-col>
      </el-row>
      <el-row type="flex" justify="center" align="center">
          <el-col style="text-align:center;color:#A1B6D2;font-size:22px;font-weight: 800;">{{visitVal}}次</el-col>
          <el-col style="text-align:center;color:#A1B6D2;font-size:22px;font-weight: 800;">{{cleckVal}}次</el-col>
      </el-row>

      <h1 style="margin:50px 0">数据总览</h1>

      <el-row style="height:400px">
          <el-col :span="12" style="height:100%">
              <div style="height:100%" id="FWCSQS"></div>   <!-- 访问次数趋势 -->
          </el-col>
          <el-col :span="12" style="height:100%">
              <div style="height:100%" id="MKDJL"></div>    <!-- 模块点击量 -->
          </el-col>
      </el-row>

      <h1 style="margin:50px 0">实时数据</h1>

      <el-row style="height:320px">
          <el-col :span="8" style="height:100%">
              <div style="height:100%" id="SSDJ"></div>   <!-- 实时点击 -->
          </el-col>
          <el-col :span="8" style="height:100%">
              <div style="height:100%" id="SSDLRS"></div>    <!-- 实时登陆人数 -->
          </el-col>
          <el-col :span="8" style="height:100%">
              <div style="height:100%" id="MKLLPX"></div>    <!-- 模块浏览排序 -->
          </el-col>
      </el-row>

  </div>
</template>

<script>
import { getAverageDailyVisitsAndHitsPerMonth,getVisitsInThePastWeek,getModuleHits,getModuleBrowsingSort,getRealTimeHitsCountAndVisitsCount,getRealTimeVisitsCount } from '@/api/dataAnalysisAndManagement/userBehaviorAnalysis'
import echarts from '@/echarts/userBehaviorAnalysis'
export default {
    data(){
        return{
            type:0,
            cleckVal:0,
            visitVal:0,
        }
    },
    methods:{
        async changeSelect(){
            await this.getAverageDailyVisitsAndHitsPerMonthData()
            await this.getVisitsInThePastWeekData()
            await this.getModuleHitsData()
            await this.getModuleBrowsingSortData()
            await this.getRealTimeHitsCountAndVisitsCountData()
            await this.getRealTimeVisitsCountData()
        },
        //获取每月日均访问量和点击量
        async getAverageDailyVisitsAndHitsPerMonthData(){
            let res = await getAverageDailyVisitsAndHitsPerMonth({type:this.type})
            res.data.data.forEach(item => {
                this.visitVal = (item.name == "浏览量") ? item.value : 0
                // this.cleckVal = (item.name == "点击量") ? item.value : 0
                if(item.name == "点击量"){
                    this.cleckVal = item.value
                }
            })
        },
        //最近一周的访问次数趋势
        async getVisitsInThePastWeekData(){
            let res = await getVisitsInThePastWeek({type:this.type})
            let dataX = res.data.data.map(item => item.date)
            let dataY = res.data.data.map(item => item.visitsCount)
            echarts.fangWenCiShuQuShi('FWCSQS', dataX, dataY)
        },
        //获取模块点击量
        async getModuleHitsData(){
            let res = await getModuleHits({type:this.type})
            echarts.moKuaiDianJiLiang('MKDJL', res.data.data[1], res.data.data[0])
        },
        //模块浏览排序接口
        async getModuleBrowsingSortData(){
            let res = await getModuleBrowsingSort({type:this.type})
            let dataX = res.data.data.map(item => item.moduleName)
            let dataY = res.data.data.map(item => item.visitsCount)
            echarts.moKuaiLiuLanPaiXu('MKLLPX', dataX, dataY)
        },
        //获取实时点击接口
        async getRealTimeHitsCountAndVisitsCountData(){
            let res = await getRealTimeHitsCountAndVisitsCount({type:this.type})
            let flag = 0
            let dataTime = new Array(24).fill(0).map(() => {
                return flag++
            })
            let todayValue = new Array(24).fill(0).map((item,index) => {
                if(res.data.data[0].some(i => i.date * 1 == index)){
                    return res.data.data[0].filter(i => i.date * 1 == index)[0].hitsCount
                }
                return item
            })
            let yesterdayValue = new Array(24).fill(0).map((item,index) => {
                if(res.data.data[1].some(i => i.date * 1 == index)){
                    return res.data.data[1].filter(i => i.date * 1 == index)[0].hitsCount
                }
                return item
            })
            echarts.shiShiDianJi_dengLu('SSDJ', dataTime, todayValue, yesterdayValue, '实时点击（有效点击）')

        },
        //获取实时登录人数接口
        async getRealTimeVisitsCountData(){
            let res = await getRealTimeVisitsCount({type:this.type})
            console.log(res.data.data)
            let flag = 0
                        let dataTime = new Array(24).fill(0).map(() => {
                return flag++
            })
            let todayValue = new Array(24).fill(0).map((item,index) => {
                if(res.data.data[0].some(i => i.date.substring(11) * 1 == index)){
                    return res.data.data[0].filter(i => i.date.substring(11) * 1 == index)[0].visitsCount
                }
                return item
            })
            let yesterdayValue = new Array(24).fill(0).map((item,index) => {
                if(res.data.data[1].some(i => i.date.substring(11) * 1 == index)){
                    return res.data.data[1].filter(i => i.date.substring(11) * 1 == index)[0].visitsCount
                }
                return item
            })
            echarts.shiShiDianJi_dengLu('SSDLRS', dataTime, todayValue, yesterdayValue, '实时登陆人数')
        },

    },
    async mounted(){
        await this.getAverageDailyVisitsAndHitsPerMonthData()
        await this.getVisitsInThePastWeekData()
        await this.getModuleHitsData()
        await this.getModuleBrowsingSortData()
        await this.getRealTimeHitsCountAndVisitsCountData()
        await this.getRealTimeVisitsCountData()
    },
}
</script>

<style scoped lang="scss">

</style>