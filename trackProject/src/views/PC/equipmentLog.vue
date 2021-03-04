<template>
  <div>
    <Header></Header>
    <div class="main">
        <div class="searchCriteria">
                      <el-button type="primary" size="mini" @click="searchHistoryData" style="background:#05CDE2;margin-left:15px;float:right;margin-top:8px">查询</el-button>
                      <el-date-picker style="float:right" v-model="endTime" type="date" placeholder="选择日期时间" value-format="yyyy-MM-dd"></el-date-picker>
                      <span style="float:right;margin-left:10px">结束时间：</span>
                      <el-date-picker style="float:right" v-model="starTime" type="date" placeholder="选择日期时间" value-format="yyyy-MM-dd"></el-date-picker>
                      <span style="float:right;margin-left:10px">开始时间：</span>
                      <el-input style="float:right;width:220px" v-model="licensePlateNumber" placeholder="请输入车牌"></el-input>
                      <span style="float:right;margin-left:10px">车牌：</span>
                  </div>
                  <el-table :data="historyData" style="background:#18334E;width: 94%;margin-top:30px;margin-left:3%" :header-cell-style="{background:'#147D8B',color:'#c9f6f9'}" :row-class-name="tableRowClassName">
                      <el-table-column align="center" type="index" width="50" label="序号"></el-table-column>
                      <el-table-column align="center" label="设备数量">3</el-table-column>
                      <el-table-column align="center" prop="strawWeight" label="数量(KG)"></el-table-column>
                      <el-table-column align="center" prop="strawType" label="种类"></el-table-column>
                      <el-table-column align="center" prop="licensePlateNumber" label="车牌"></el-table-column>
                      <el-table-column align="center" prop="driverName" label="司机"></el-table-column>
                      <el-table-column align="center" min-width="170%" prop="fillingInTime" label="起始时间"></el-table-column>
                      <el-table-column align="center" min-width="170%" prop="updateTime" label="结束时间"></el-table-column>
                      <el-table-column align="center" min-width="170%" prop="startGps" label="起点坐标"></el-table-column>
                      <el-table-column align="center" min-width="170%" prop="endGps" label="终点坐标"></el-table-column>
                  </el-table>
                  <el-pagination layout="prev, pager, next" :total="total" style="float:right;margin-right:50px" :page-size="pageSize" @current-change="changeCurrent"></el-pagination>
    </div>
  </div>
</template>

<script>
import Header from '@/views/header'
import { getPolicyInformationHistoryByTime } from '@/api/dataSubmit'
export default {
    components:{
        Header
    },
    data(){
        return{
            licensePlateNumber: '', //车牌
            starTime: '', //开始时间
            endTime: '', //结束时间
            pageSize: 10,
            total: 0,
            historyData:[]
        }
    },
    methods:{
        async getPolicyInformationHistoryByTimeList(currentPage){
            let res = await getPolicyInformationHistoryByTime({
                startTime: this.starTime,
                endTime: this.endTime,
                currentPage,
                pageSize: this.pageSize,
                licensePlateNumber: this.licensePlateNumber
            })
            console.log(res)
            this.historyData = res.data.data.pageData
        },
        async searchHistoryData(){
            this.getPolicyInformationHistoryByTimeList(1)
        },
        async changeCurrent(val){
            this.getPolicyInformationHistoryByTimeList(val)
        },
        //控制行颜色
        tableRowClassName ({ row, rowIndex }) {
            if ((rowIndex + 1) % 2 === 0) {
                return 'double';   //对应的类
            } else {
                return 'single';    //对应的类
            }
        },
    },
    mounted(){
        this.getPolicyInformationHistoryByTimeList(1)
    }
}
</script>

<style scoped lang="scss">
.main{
    width: 100vw;
    height: calc(100vh - 60px);
    // background: #1A3C5D;
    background: url(../../assets/images/logBg.jpg) no-repeat;
    background-size: 100% 100%;
}
.searchCriteria{
    color: #fff;
    position: relative;
    // top: 5px;
    right: 15px;
    z-index: 9;
    height: 50px;
    padding: 5px 0;
    line-height: 50px;
}
</style>