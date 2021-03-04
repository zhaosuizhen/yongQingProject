<template>
  <!--国土局---农村土地利用现状一级分类面积汇总表-->
 <div id="landUseLeaveOne " class="pageContent">
        <section class="sectionContent-40">
            <Table-list 
                :tableKey='qualityInspectionelem' 
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
    name:'landUseLeaveOne',
    data() {
        return {
            miniNav:'农村土地利用现状一级分类面积汇总表',
            qualityInspectionelem:[
                {labelName:'年份',prop: 'dataYear'},
                {labelName:'耕地(亩)',prop:'gd'},
                {labelName:'园地(亩)',prop:'yd'},
                {labelName:'林地(亩)',prop:'ld'},
                {labelName:'草地(亩)',prop:'cd'},
                {labelName:'城镇村及工矿用地(亩)',prop:'czcjgk'},
                {labelName:'交通运输用地(亩)',prop:'jtys'},
                {labelName:'水域及水利设施用地(亩)',prop:'syjsl'},
                {labelName:'其他土地(亩)', prop:'qttd'},
                {labelName:'乡镇', prop:'township'}
            ]
        }
    },
    components:{
        'Table-list':TableList
    },
    methods:{
        //查看详情
        goDetail(rowData){
            //sessionStorage.setItem('currentMenuItem','landUseLeaveOneDetail'); //记录路由
            this.$router.push({path:'/landUseLeaveOneDetail',query:{type:'detail',toMiniNav:'查看 农村土地利用现状一级分类面积汇总表',id:rowData.id}})
        },
        //编辑
        goEdit(rowData){
           // sessionStorage.setItem('currentMenuItem','landUseLeaveOneDetail'); //记录路由
            this.$router.push({path:'/landUseLeaveOneDetail',query:{type:'edit',toMiniNav:'编辑 农村土地利用现状一级分类面积汇总表',id:rowData.id}})
        },
        //新增
        add(){
           // sessionStorage.setItem('currentMenuItem','landUseLeaveOneDetail'); //记录路由
            this.$router.push({path:'/landUseLeaveOneDetail',query:{type:'add',toMiniNav:'新增 农村土地利用现状一级分类面积汇总表'}})
        }
    }
}
</script>
<style scoped lang="scss">

</style>