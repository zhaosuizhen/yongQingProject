<template>
  <!--产业办---农业生产条件-->
 <div class="doAgriculturalOutputValue pageContent">
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
    name:'doAgriculturalOutputValue',
    data() {
        return {
            miniNav:'农业生产条件',
            qualityInspectionelem:[
                {labelName:'年份', prop:'dataYear'},
                {labelName:'年末耕地面积（亩）',prop: 'endYearArea'},
                {labelName:'园地（亩）',prop: 'landField'},
                {labelName:'林地（亩）', prop:'landForest'},
                {labelName:'草地（亩）', prop:'landGrass'},
                {labelName:'地膜覆盖面积',prop: 'materialMulchArea'},
                {labelName:'农用柴油使用量（吨）',prop: 'materialDieselUse'},
                {labelName:'农药使用量（吨）',prop: 'materialPesticideUse'},
                {labelName:'农村用电量（万千瓦时）',prop: 'materialPowerUse'}
            ]
        }
    },
    components:{
        'Table-list':TableList
    },
    methods:{
        //查看详情
        goDetail(rowData){
           if(this.$route.path.indexOf("/rearBusinessEntity") >= 0){
               this.$router.push({path:'/agriculturalProductionDetail',query:{type:'detail',toMiniNav:'查看 农业生产条件',id:rowData.id}})
           }else{
               this.$router.push({path:'/agriculturalProductionDetail',query:{type:'detail',toMiniNav:'查看 农业生产条件',id:rowData.id}})
           }
            
        },
        //编辑
        goEdit(rowData){
           if(this.$route.path.indexOf("/rearBusinessEntity") >= 0){
               this.$router.push({path:'/agriculturalProductionDetail',query:{type:'edit',toMiniNav:'编辑 农业生产条件',id:rowData.id}})
           }else{
               this.$router.push({path:'/agriculturalProductionDetail',query:{type:'edit',toMiniNav:'编辑 农业生产条件',id:rowData.id}})
           }
            
        },
        //新增
        add(){
            if(this.$route.path.indexOf("/rearBusinessEntity") >= 0){
               this.$router.push({path:'/agriculturalProductionDetail',query:{type:'add',toMiniNav:'新增 农业生产条件'}})
           }else{
               this.$router.push({path:'/agriculturalProductionDetail',query:{type:'add',toMiniNav:'新增 农业生产条件'}})
           }
        }
    }
}
</script>
<style scoped lang="scss">

</style>