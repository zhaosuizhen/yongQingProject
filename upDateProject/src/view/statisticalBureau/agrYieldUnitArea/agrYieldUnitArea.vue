<template>
  <!--统计局--主要农产品单位面积产量  列表页-->
    <div class="agrYieldUnitArea pageContent">
        <section class="sectionContent">
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
    name:'agrYieldUnitArea',
    data() {
        return {
            miniNav:'主要农产品单位面积产量',
            qualityInspectionelem:[
                {labelName:'年份',prop: 'dataYear'},
                {labelName:'粮食（公斤/亩）', prop:'foodstuff'},
                {labelName:'谷物（公斤/亩）',prop: 'grain'},
                {labelName:'棉花（公斤/亩）', prop:'cotton'},
                {labelName:'花生（公斤/亩）',prop:'peanut'},
                {labelName:'油菜籽（公斤/亩）/亩）',prop:'rape'},
                {labelName:'芝麻（公斤/亩）',prop:'sesame'},
                {labelName:'蔬菜（公斤/亩）/亩）',prop:'vegetables'},
                {labelName:'瓜果类（公斤/亩）',prop:'melonsFruitsm'},
                {labelName:'乡镇',prop:'township'}
            ],
        }
    },
    components:{
        'Table-list':TableList
    },
    methods:{
        //查看详情
        goDetail(rowData){
           // sessionStorage.setItem('currentMenuItem','agrYieldUnitAreaDetail'); //记录路由
            this.$router.push({path:'/agrYieldUnitAreaDetail',query:{type:'detail',toMiniNav:'查看 主要农产品单位面积产量',id:rowData.id}})
        },
        //编辑
        goEdit(rowData){
           // sessionStorage.setItem('currentMenuItem','agrYieldUnitAreaDetail'); //记录路由
            this.$router.push({path:'/agrYieldUnitAreaDetail',query:{type:'edit',toMiniNav:'编辑 主要农产品单位面积产量',id:rowData.id}})
        },
        //新增
        add(){
            //sessionStorage.setItem('currentMenuItem','agrYieldUnitAreaDetail'); //记录路由
            this.$router.push({path:'/agrYieldUnitAreaDetail',query:{type:'add',toMiniNav:'新增 主要农产品单位面积产量'}})
        }
    }
}
</script>
<style scoped lang="scss">

</style>