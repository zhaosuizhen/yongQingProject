<template>
  <!--渔业局--渔业生产基本情况列表页-->
    <div class="basicInformationOfFisheryList pageContent">
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
    name:'qualityOrganicProductsList',
    data() {
        return {
            miniNav:'渔业生产基本情况',
            qualityInspectionelem:[
                {labelName:'乡镇', prop:'township'},
                {labelName:'年份',prop: 'dataYear',},
                { width:200,labelName:'水产品总产量（吨）', prop:'scpzcl'},
                {labelName:'水产品总产值（万元）',prop:'scpzcz'},
                {labelName:'水产品养殖总面积（亩）',prop:'scyzmj'}
            ],
        }
    },
    components:{
        'Table-list':TableList
    },
    methods:{
        //查看详情
        goDetail(rowData){
           // sessionStorage.setItem('currentMenuItem','basicInformationOfFisheryDetail'); //记录路由
            this.$router.push({path:'/basicInformationOfFisheryDetail',query:{type:'detail',toMiniNav:'查看 渔业生产基本情况',id:rowData.id}})
        },
        //编辑
        goEdit(rowData){
            //sessionStorage.setItem('currentMenuItem','basicInformationOfFisheryDetail'); //记录路由
            this.$router.push({path:'/basicInformationOfFisheryDetail',query:{type:'edit',toMiniNav:'编辑 渔业生产基本情况',id:rowData.id}})
        },
        //新增
        add(){
           // sessionStorage.setItem('currentMenuItem','basicInformationOfFisheryDetail'); //记录路由
            this.$router.push({path:'/basicInformationOfFisheryDetail',query:{type:'add',toMiniNav:'新增 渔业生产基本情况'}})
        },
    }
}
</script>
<style scoped lang="scss">

</style>