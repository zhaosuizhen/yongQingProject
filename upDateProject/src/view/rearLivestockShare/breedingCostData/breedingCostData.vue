<template>
    <!--畜牧股---养殖成本数据列表-->
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
            miniNav:'养殖成本数据',
            qualityInspectionelem:[
                {width:200,labelName:'时间',prop: 'dateTime'},
                {labelName:'养殖饲料成本（元/头）', prop:'feedCost'},
                {labelName:'猪仔成本（元/头）', prop:'pigCost'},
                {labelName:'养殖成本（元/头）',prop:'breedCost'},
                {labelName:'豆粕全国（元/吨）',prop:'soybeanCountry'},
                {labelName:'豆粕四川（元/吨）',prop:'soybeanSc'},
                {labelName:'玉米全国（元/吨）',prop:'cornCountry'},
                {labelName:'玉米四川（元/吨）',prop:'cornSc'}
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
            this.$router.push({path:'/breedingCostDataDetail',query:{type:'detail',toMiniNav:'查看 养殖成本数据',id:rowData.id}})
        },
        //编辑
        goEdit(rowData){
          // sessionStorage.setItem('currentMenuItem','qualityPollutionProductsDetail'); //记录路由
            this.$router.push({path:'/breedingCostDataDetail',query:{type:'edit',toMiniNav:'编辑 养殖成本数据',id:rowData.id}})
        },
        //新增
        add(){
            //sessionStorage.setItem('currentMenuItem','qualityPollutionProductsDetail'); //记录路由
            this.$router.push({path:'/breedingCostDataDetail',query:{type:'add',toMiniNav:'新增 养殖成本数据'}})
        }
    }
}
</script>
<style scoped lang="scss">

</style>