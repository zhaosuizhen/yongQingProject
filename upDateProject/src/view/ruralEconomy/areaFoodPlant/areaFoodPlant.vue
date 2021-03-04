<template>
  <!--产业办---粮食作物播种面积-->
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
            miniNav:'粮食作物播种面积',
            qualityInspectionelem:[
                {labelName:'年份', prop:'dataYear'},
                {labelName:'乡镇', prop:'townShip'},
                {labelName:'谷物（亩）', prop:'grainTotalArea'},
                {labelName:'豆类（亩）',prop: 'beanTotalArea'},
                {labelName:'薯类（亩）', prop:'tubersTotalArea'}
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
               this.$router.push({path:'/areaFoodPlantDetail',query:{type:'detail',toMiniNav:'查看 粮食作物播种面积',id:rowData.id}})
           }else{
               this.$router.push({path:'/areaFoodPlantDetail',query:{type:'detail',toMiniNav:'查看 粮食作物播种面积',id:rowData.id}})
           }
            
        },
        //编辑
        goEdit(rowData){
           if(this.$route.path.indexOf("/rearBusinessEntity") >= 0){
               this.$router.push({path:'/areaFoodPlantDetail',query:{type:'edit',toMiniNav:'编辑 粮食作物播种面积',id:rowData.id}})
           }else{
               this.$router.push({path:'/areaFoodPlantDetail',query:{type:'edit',toMiniNav:'编辑 粮食作物播种面积',id:rowData.id}})
           }
            
        },
        //新增
        add(){
            if(this.$route.path.indexOf("/rearBusinessEntity") >= 0){
               this.$router.push({path:'/areaFoodPlantDetail',query:{type:'add',toMiniNav:'新增 粮食作物播种面积'}})
           }else{
               this.$router.push({path:'/areaFoodPlantDetail',query:{type:'add',toMiniNav:'新增 粮食作物播种面积'}})
           }
        }
    }
}
</script>
<style scoped lang="scss">

</style>