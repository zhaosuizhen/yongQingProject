<template>
  <!--产业办---经济作物产量-->
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
            miniNav:'经济作物产量',
            qualityInspectionelem:[
                {labelName:'年份', prop:'dataYear'},
                {labelName:'乡镇', prop:'townShip'},
                {labelName:'油料（吨）', prop:'oilTotalYield'},
                {labelName:'棉花（吨）',prop: 'cottonTotalYield'},
                {labelName:'生麻（吨）', prop:'hempTotalYield'},
                {labelName:'糖料（吨）', prop:'sugarTotalYield'},
                {labelName:'烟叶（吨）',prop: 'tobaccoTotalYield'},
                {labelName:'中草药材（吨）',prop: 'medicineTotalYield'},
                {labelName:'蔬菜及食用菌（吨）',prop: 'vegetablesTotalYield'},
                {labelName:'瓜果类（吨）',prop: 'melonTotalYield'}
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
               this.$router.push({path:'/yieldEconomicsPlantDetail',query:{type:'detail',toMiniNav:'查看 经济作物产量',id:rowData.id}})
           }else{
               this.$router.push({path:'/yieldEconomicsPlantDetail',query:{type:'detail',toMiniNav:'查看 经济作物产量',id:rowData.id}})
           }
            
        },
        //编辑
        goEdit(rowData){
           if(this.$route.path.indexOf("/rearBusinessEntity") >= 0){
               this.$router.push({path:'/yieldEconomicsPlantDetail',query:{type:'edit',toMiniNav:'编辑 经济作物产量',id:rowData.id}})
           }else{
               this.$router.push({path:'/yieldEconomicsPlantDetail',query:{type:'edit',toMiniNav:'编辑 经济作物产量',id:rowData.id}})
           }
            
        },
        //新增
        add(){
            if(this.$route.path.indexOf("/rearBusinessEntity") >= 0){
               this.$router.push({path:'/yieldEconomicsPlantDetail',query:{type:'add',toMiniNav:'新增 经济作物产量'}})
           }else{
               this.$router.push({path:'/yieldEconomicsPlantDetail',query:{type:'add',toMiniNav:'新增 经济作物产量'}})
           }
        }
    }
}
</script>
<style scoped lang="scss">

</style>