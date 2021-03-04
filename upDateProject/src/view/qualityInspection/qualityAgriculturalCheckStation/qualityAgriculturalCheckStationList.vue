<template>
    <!--质检办---农产品检测站信息列表-->
    <div class="qualityAgriculturalCheckStationList pageContent">
        <section class="sectionContent">
            <Table-list 
                :tableKey='qualityInspectionelem' 
                :tableData="dataList"
                @goDetail='goDetail' 
                @goEdit='goEdit'
                @add='add'
                :miniNav="miniNav"
            ></Table-list>
        </section>
    </div>
</template>
<script>
import TableList from '@/components/tableList/TableList'
export default {
    name:'qualityOrganicProductsList',
    data() {
        return {
            miniNav:'农产品检测站信息', 
            qualityInspectionelem:[
                {labelName:'检测站名称',prop: 'checkpoint',},
                {labelName:'乡镇', prop:'township'},
                { width:200,labelName:'主检测项目', prop:'mainCheck'},
                {labelName:'联系人',prop:'contact'},
                {labelName:'联系电话',prop:'phone'},
                {labelName:'经度',prop:'longitude'},
                {labelName:'纬度',prop:'latitude'}
            ],
            dataList:{}
        }
    },
    components:{
        'Table-list':TableList
    },
    methods:{
        //查看详情
        goDetail(rowData){
           // sessionStorage.setItem('currentMenuItem','qualityAgriculturalCheckStationDetail'); //记录路由
            this.$router.push({path:'/qualityAgriculturalCheckStationDetail',query:{type:'detail',toMiniNav:'查看 农产品检测站信息',id:rowData.id}})
        },
        //编辑
        goEdit(rowData){
           // sessionStorage.setItem('currentMenuItem','qualityAgriculturalCheckStationDetail'); //记录路由
            this.$router.push({path:'/qualityAgriculturalCheckStationDetail',query:{type:'edit',toMiniNav:'查看 农产品检测站信息',id:rowData.id}})
        },
        //新增
        add(){
           // sessionStorage.setItem('currentMenuItem','qualityAgriculturalCheckStationDetail'); //记录路由
            this.$router.push({path:'/qualityAgriculturalCheckStationDetail',query:{type:'add',toMiniNav:'新增 农产品检测站信息'}})
        }
    }
}
</script>
<style scoped lang="scss">

</style>