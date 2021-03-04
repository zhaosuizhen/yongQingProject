<template>
  <!--渔业局--淡水养殖产品产量列表页-->
    <div class="freshwaterProductsList pageContent">
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
    name:'freshwaterProductsList',
    data() {
        return {
            miniNav:'淡水养殖产品产量',
            qualityInspectionelem:[
                {labelName:'年份',prop: 'dataYear',},
                {labelName:'乡镇', prop:'township'},
                { width:200,labelName:'总计（吨）', prop:'totalWeight'},
                {labelName:'鱼类总量（吨）',prop:'yldsyzcl'},
                {labelName:'贝类总量（吨）',prop:'bkldayz'},
                {labelName:'甲壳类总量（吨）',prop:'xldsyzcl'},
                {labelName:'藻类总量（吨）',prop:'zldsyzcl'},
                {labelName:'其他总量（吨）',prop:'qtldsyzcl'}
            ],
        }
    },
    components:{
        'Table-list':TableList
    },
    methods:{
        //查看详情
        goDetail(rowData){
           // sessionStorage.setItem('currentMenuItem','freshwaterProductsDetail'); //记录路由
            this.$router.push({path:'/freshwaterProductsDetail',query:{type:'detail',toMiniNav:'查看 淡水养殖产品产量',id:rowData.id}})
        },
        //编辑
        goEdit(rowData){
           // sessionStorage.setItem('currentMenuItem','freshwaterProductsDetail'); //记录路由
            this.$router.push({path:'/freshwaterProductsDetail',query:{type:'edit',toMiniNav:'编辑 淡水养殖产品产量',id:rowData.id}})
        },
        //新增
        add(){
          //  sessionStorage.setItem('currentMenuItem','freshwaterProductsDetail'); //记录路由
            this.$router.push({path:'/freshwaterProductsDetail',query:{type:'add',toMiniNav:'新增 淡水养殖产品产量'}})
        },
    }
}
</script>
<style scoped lang="scss">

</style>