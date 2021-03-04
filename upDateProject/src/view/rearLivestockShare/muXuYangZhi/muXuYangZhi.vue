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
                {width:200,labelName:'日期',prop: 'years'},
                {labelName:'乡镇', prop:'township'},
                {labelName:'牛出栏', prop:'cattleOutColumn'},
                {labelName:'牛存栏',prop:'cattleExistColumn'},
                {labelName:'羊出栏',prop:'sheepOutColumn'},
                {labelName:'羊存栏',prop:'sheepExistColumn'},
                {labelName:'家禽出栏',prop:'JQCL_out'},
                {labelName:'家禽存栏',prop:'JQCL_in'},
                {labelName:'猪出栏',prop:'rabbitOutColumn'},
                {labelName:'猪存栏',prop:'rabbitExistColumn'},
                {labelName:'禽蛋产量',prop:'yields'}
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
            this.$router.push({path:'/muXuYangZhiDetail',query:{type:'detail',toMiniNav:'查看 牧畜养殖数据',id:rowData.id}})
        },
        //编辑
        goEdit(rowData){
          // sessionStorage.setItem('currentMenuItem','qualityPollutionProductsDetail'); //记录路由
            this.$router.push({path:'/muXuYangZhiDetail',query:{type:'edit',toMiniNav:'编辑 牧畜养殖数据',id:rowData.id}})
        },
        //新增
        add(){
            //sessionStorage.setItem('currentMenuItem','qualityPollutionProductsDetail'); //记录路由
            this.$router.push({path:'/muXuYangZhiDetail',query:{type:'add',toMiniNav:'新增 牧畜养殖数据'}})
        }
    }
}
</script>
<style scoped lang="scss">

</style>