<template>
    <!--畜牧股---生猪养殖列表-->
    <div id="pigBreeList " class="pageContent">
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
import TableList from '@/components/tableList/TableList';
export default {
    data() {
        return {
            miniNav:'生猪养殖',
            qualityInspectionelem:[
                {width:200,labelName:'养殖场名称',prop: 'farmName'},
                {labelName:'养殖种类', prop:'stockType'},
                {labelName:'主要品种', prop:'varieties'},
                {labelName:'畜种',prop:'stock'},
                {labelName:'负责人',prop:'legalName'},
                {labelName:'移动电话',prop:'mobilePhone'},
                {labelName:'当前存栏',prop:'amountNum'},
                {labelName:'年末出栏量',prop:'outNum'},
                {labelName:'详细地址',prop:'address'},
                {labelName:'所属乡镇',prop:'township'},
                {labelName:'经度',prop:'longitude'},
                {labelName:'纬度',prop:'latitude'},
            ],
            dataList:{},
        }
    },
    components:{
        'Table-list':TableList
    },
    methods:{
        //查看详情
        goDetail(rowData){
          //  sessionStorage.setItem('currentMenuItem','qualityPollutionProductsDetail'); //记录路由
            this.$router.push({path:'/pigBreeDetail',query:{type:'detail',toMiniNav:'查看 生猪养殖',id:rowData.id}})
        },
        //编辑
        goEdit(rowData){
          // sessionStorage.setItem('currentMenuItem','qualityPollutionProductsDetail'); //记录路由
            this.$router.push({path:'/pigBreeDetail',query:{type:'edit',toMiniNav:'编辑 生猪养殖',id:rowData.id}})
        },
        //新增
        add(){
            //sessionStorage.setItem('currentMenuItem','qualityPollutionProductsDetail'); //记录路由
            this.$router.push({path:'/pigBreeDetail',query:{type:'add',toMiniNav:'新增 生猪养殖'}})
        }
    }
}
</script>
<style scoped lang="scss">

</style>