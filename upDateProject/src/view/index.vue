<template>
    <div id="plateIndex" class="pageContent">
        <div class="miniNav">首页</div>
        <section class="sectionContentIndex">
            <el-row v-loading='basicsLoading' style="margin-top:10px;">
                <el-col :span="6">
                    <div class="index-rect-list" >
                        <div class="index-rect-leftImg"><img :src="imgIcon.indexImg1"/></div>
                        <div class="index-rect-right">
                            <p>填报部门</p>
                            <p class="count">{{basicsData.departmentCount}}</p>
                        </div>
                    </div>
                </el-col>
                <el-col :span="6">
                    <div class="index-rect-list" >
                        <div class="index-rect-leftImg"><img :src="imgIcon.indexImg2"/></div>
                        <div class="index-rect-right">
                            <p>填报人员</p>
                            <p class="count">{{basicsData.personnelCount}}</p>
                        </div>
                    </div>
                </el-col>
                <el-col :span="6">
                    <div class="index-rect-list" >
                        <div class="index-rect-leftImg"><img :src="imgIcon.indexImg3"/></div>
                        <div class="index-rect-right">
                            <p>数据条数</p>
                            <p class="count">{{basicsData.dataCount}}</p>
                        </div>
                    </div>
                </el-col>
                <el-col :span="6">
                    <div class="index-rect-list" >
                        <div class="index-rect-leftImg"><img :src="imgIcon.indexImg4"/></div>
                        <div class="index-rect-right">
                            <p>更新时间</p>
                            <p class="count">{{basicsData.updateTime}}</p>
                        </div>
                    </div>
                </el-col>
            </el-row>
            <el-row class="graphicData">
                <el-col :span="14">
                    <div class="datasContent" v-loading="deptCountLoading">
                        <p>部门数据总量统计</p>
                        <div id="deptData"></div>
                    </div>
                </el-col>
                <el-col :span="10">
                    <div class="dataTypeProContent" v-loading="proportionLoading">
                        <p>数据类型统计</p>
                        <div id="dataTypeProportion"></div>
                    </div>
                </el-col>
            </el-row>
            <el-row class="graphicData">
                <el-col :span="12">
                    <div class="datasContent" v-loading='growthLoading'>
                        <p>数据增长趋势</p>
                        <div id="dataGrowthTrend"></div>
                    </div>
                </el-col>
                <el-col :span="12">
                    <div class="datasContent">
                        <p>部门数据详情</p>
                        <el-table
                            :data="tableData"
                            height="310"
                            v-loading="tableLoading"
                            style="width: 100%">
                            <el-table-column
                                prop="departmentName"
                                label="部门"
                                align="center"
                                >
                            </el-table-column>
                            <el-table-column
                                prop="departmentCount"
                                label="数据项(个)"
                                align="center"
                                >
                            </el-table-column>
                            <el-table-column
                                prop="dataCount"
                                align="center"
                                label="数据量(条)">
                            </el-table-column>
                            <el-table-column
                                prop="updateTime"
                                align="center"
                                label="更新时间">
                            </el-table-column>
                            </el-table>
                    </div>
                </el-col>
            </el-row>
        </section>
    </div>
</template>
<script>
import chart from "@/assets/js/echarts";
import { basicsData, dataGrowth,dataProportion,getDepartmentCount,departmentList } from '@/utils/api/index'; //首页接口
import {handleCofirm} from '@/utils/messageBox/confirm';
export default {
    name:'plateIndex',
    data() {
        return{
            basicsData:{}, //基础数据
            tableData: [],
            tableLoading:false, // 部门详情列表加载框
            deptCountLoading:false, //部门统计柱状图
            proportionLoading:false, //数据类型占比 饼状图加载框
            growthLoading:false, //增长趋势折线图 加载框
            basicsLoading:false, //基础数据加载框
          imgIcon:{
              indexImg1:require('@/assets/images/index/index1.png'),
              indexImg2:require('@/assets/images/index/index2.png'),
              indexImg3:require('@/assets/images/index/index3.png'),
              indexImg4:require('@/assets/images/index/index4.png')
          }
        }
    },
    async mounted(){
        this.getBasicsData(); //获取基本数据
        this.getDataProportion(); //数据类型占比
        this.dataGrowth(); //数据增长趋势接口获取数据
        this.getDepartmentCount();   //部门数据总量统计
        this.getDepartmentList();  //部门数据详情
    },
    methods:{
        //获取基础数据
        async getBasicsData(){
            this.basicsLoading = true;
            let res = await basicsData();
            console.log(res.data.entitys)
            if(res.data.status== 0){
                this.basicsData = res.data.entitys;
                if(res.data.entitys.updateTime){
                    this.basicsData.updateTime = res.data.entitys.updateTime.split(' ')[0]
                }
                
            }else if(res.data.status== -1 || res.data.status== 500){
                this.$message({
                    message: res.data.msg,
                    type: 'warning'
                })
            }else if(res.data.status == -2){
                handleCofirm(res.data.msg, 'warning', false).then(() => {
                    window.loginOut();
                })
            }else{
                this.$message({
                    message: '服务器异常，请稍后再试',
                    type: 'warning'
                })
            }
            this.basicsLoading = false;
        },
        
        //部门数据总量统计
        initDeptData(dataObj){
             chart.deptData('deptData',dataObj)
        },
        //数据类型占比
        initDataTypeProportion(dataObj){
            chart.dataTypeProportion('dataTypeProportion',dataObj)
        },
        //数据增长趋势
        initDataGrowthTrend(dataObj){
            chart.dataGrowthTrend('dataGrowthTrend',dataObj)
        },
        //数据趋势
        async dataGrowth(){
            this.growthLoading = true;
            let res = await dataGrowth();
            if(res.data.status== 0){
                let dataGrowth = res.data.entitys;
                let nameArray = [];
                let valueArray = [];
                dataGrowth.forEach(item => {
                    nameArray.push(item.dataDate);
                    valueArray.push(item.dataCount)
                });
                let dataObj = {
                    nameArray,
                    valueArray
                }
              this.initDataGrowthTrend(dataObj)
            }else if(res.data.status== -1 || res.data.status== 500){
                this.$message({
                    message: res.data.msg,
                    type: 'warning'
                })
            }else if(res.data.status == -2){
                handleCofirm(res.data.msg, 'warning', false).then(() => {
                    window.loginOut();
                })
            }else{
                this.$message({
                    message: '服务器异常，请稍后再试',
                    type: 'warning'
                })
            }
            this.growthLoading = false;
        },
        //数据占比
        async getDataProportion(){
            this.proportionLoading = true;
            let res = await dataProportion();
            if(res.data.status== 0){
                let dataProportion = res.data.entitys;
                let nameArray = [];
                let valueArray = [];
                //将数组按照departmentCount的大小排序
                dataProportion.sort(this.compare('departmentCount'));
                dataProportion.forEach(item => {
                    nameArray.push(item.departmentName);
                    valueArray.push({name:item.departmentName,value:item.departmentCount})
                });
                let dataObj = {
                    nameArray,
                    valueArray
                }
              this.initDataTypeProportion(dataObj)
            }else if(res.data.status== -1 || res.data.status== 500){
                this.$message({
                    message: res.data.msg,
                    type: 'warning'
                })
            }else if(res.data.status == -2){
                handleCofirm(res.data.msg, 'warning', false).then(() => {
                    window.loginOut();
                })
            }else{
                this.$message({
                    message: '服务器异常，请稍后再试',
                    type: 'warning'
                })
            }
            this.proportionLoading = false;
        },
        compare(property){
            return function(a,b){
                var value1 = a[property];
                var value2 = b[property];
                return value1 - value2;
            }
        },
        //部门数据总量
        async getDepartmentCount(){
            this.deptCountLoading = true;
            let res = await getDepartmentCount();
            console.log(res)
            if(res.data.status== 0){
                let deptCount = res.data.entitys;
                let nameArray = [];
                let valueArray = [];
                deptCount.forEach(item => {
                    nameArray.push(item.departmentName);
                    valueArray.push(item.departmentCount)
                });
                let dataObj = {
                    nameArray,
                    valueArray
                }
              this.initDeptData(dataObj)
            }else if(res.data.status== -1 || res.data.status== 500){
                this.$message({
                    message: res.data.msg,
                    type: 'warning'
                })
            }else if(res.data.status == -2){
                handleCofirm(res.data.msg, 'warning', false).then(() => {
                    window.loginOut();
                })
            }else{
                this.$message({
                    message: '服务器异常，请稍后再试',
                    type: 'warning'
                })
            }
            this.deptCountLoading = false;
        },
        //部门数据详情
        async getDepartmentList(){
            this.tableLoading = true;
            let res = await departmentList();
            if(res.data.status== 0){
                this.tableData = res.data.entitys;
            }else if(res.data.status== -1 || res.data.status== 500){
                this.$message({
                    message: res.data.msg,
                    type: 'warning'
                })
            }else if(res.data.status == -2){
                handleCofirm(res.data.msg, 'warning', false).then(() => {
                    window.loginOut();
                })
            }else{
                this.$message({
                    message: '服务器异常，请稍后再试',
                    type: 'warning'
                })
            }
            this.tableLoading = false;
        }
    }
}
</script>
<style scoped lang="scss">

    .index-rect-list{
        width: 90%;
        margin: 0 auto;
        height: 80px;
        border-radius: 5px;
        box-shadow: 3px 3px 3px #eeeeee;
        border:1px solid #F8F8F8;
        .index-rect-leftImg{
            height: 100%;
            float: left;
            img{
                margin-top: 5%;
                margin-left: 20%;
            }
        }
        .index-rect-right{
            p:nth-child(1){
                line-height: 40px;
                font-size: 12px;
                color: #666;
            }
            p:nth-child(2){
                line-height: 40px;
                font-size: 20px;
                font-weight: 700;
            }
        }
    }
    .graphicData{
        margin-top: 20px;
        .datasContent{
            width: 95%;
            height: 320px;
            margin: 0 auto;
            border: 1px solid #eeeeee;
            padding: 10px;
            box-shadow: 3px 3px 3px #f3f3f3;
            border-radius: 5px;
            #deptData,#dataGrowthTrend{
                width: 95%;
                height: 95%;
                margin: 0 auto;
            }
        }
        .dataTypeProContent{
            width: 95%;
            height: 320px;
            margin: 0 auto;
            border: 1px solid #eeeeee;
            padding: 10px;
            box-shadow: 3px 3px 3px #f3f3f3;
            border-radius: 5px;
            overflow: auto;
            #dataTypeProportion{
                width: 100%;
                height: 1200px;
                margin: 0 auto;
            }
        }
    }
    @media (min-width: 1366px) {  
        .index-rect-leftImg{
            width: 40% !important;
        }

    }
    @media (min-width: 1920px) {
        .index-rect-leftImg{
                width: 30% !important;
            }
    }
</style>