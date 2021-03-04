<template>
  <!--产业办---经济作物面积-->
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
            miniNav:'经济作物面积',
            qualityInspectionelem:[
                {labelName:'年份', prop:'dataYear'},
                {labelName:'乡镇', prop:'townShip'},
                {labelName:'油料（亩）', prop:'oilTotalArea'},
                {labelName:'棉花（亩）',prop: 'cottonTotalArea'},
                {labelName:'生麻（亩）', prop:'hempTotalArea'},
                {labelName:'糖料（亩）', prop:'sugarTotalArea'},
                {labelName:'烟叶（亩）',prop: 'tobaccoTotalArea'},
                {labelName:'中草药材（亩）',prop: 'medicineTotalArea'},
                {labelName:'蔬菜及食用菌（亩）',prop: 'vegetablesTotalArea'},
                {labelName:'瓜果类（亩）',prop: 'melonTotalArea'}
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
               this.$router.push({path:'/areaEconomicsPlantDetail',query:{type:'detail',toMiniNav:'查看 经济作物面积',id:rowData.id}})
           }else{
               this.$router.push({path:'/areaEconomicsPlantDetail',query:{type:'detail',toMiniNav:'查看 经济作物面积',id:rowData.id}})
           }
            
        },
        //编辑
        goEdit(rowData){
           if(this.$route.path.indexOf("/rearBusinessEntity") >= 0){
               this.$router.push({path:'/areaEconomicsPlantDetail',query:{type:'edit',toMiniNav:'编辑 经济作物面积',id:rowData.id}})
           }else{
               this.$router.push({path:'/areaEconomicsPlantDetail',query:{type:'edit',toMiniNav:'编辑 经济作物面积',id:rowData.id}})
           }
            
        },
        //新增
        add(){
            if(this.$route.path.indexOf("/rearBusinessEntity") >= 0){
               this.$router.push({path:'/areaEconomicsPlantDetail',query:{type:'add',toMiniNav:'新增 经济作物面积'}})
           }else{
               this.$router.push({path:'/areaEconomicsPlantDetail',query:{type:'add',toMiniNav:'新增 经济作物面积'}})
           }
        }
    }
}
</script>
<style scoped lang="scss">

</style>