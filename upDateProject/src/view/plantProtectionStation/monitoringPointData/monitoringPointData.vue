<template>
  <!--产业办---土壤采样面积分布-->
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
            miniNav:'土壤采样面积分布',
            qualityInspectionelem:[
                {labelName:'年份', prop:'dataYear'},
                {labelName:'乡镇', prop:'townShip'},
                {labelName:'年产量', prop:'annualOutPut'}
            ]
        }
    },
    components:{
        'Table-list':TableList
    },
    methods:{
        //查看详情
        goDetail(rowData){
           if(this.$route.path.indexOf("/monitoringPointData") >= 0){
               this.$router.push({path:'/monitoringPointDataDetail',query:{type:'detail',toMiniNav:'查看 土壤采样面积分布',id:rowData.id}})
           }else{
               this.$router.push({path:'/monitoringPointDataDetail',query:{type:'detail',toMiniNav:'查看 土壤采样面积分布',id:rowData.id}})
           }
            
        },
        //编辑
        goEdit(rowData){
           if(this.$route.path.indexOf("/monitoringPointData") >= 0){
               this.$router.push({path:'/monitoringPointDataDetail',query:{type:'edit',toMiniNav:'编辑 土壤采样面积分布',id:rowData.id}})
           }else{
               this.$router.push({path:'/monitoringPointDataDetail',query:{type:'edit',toMiniNav:'编辑 土壤采样面积分布',id:rowData.id}})
           }
            
        },
        //新增
        add(){
            if(this.$route.path.indexOf("/monitoringPointData") >= 0){
               this.$router.push({path:'/monitoringPointDataDetail',query:{type:'add',toMiniNav:'新增 土壤采样面积分布'}})
           }else{
               this.$router.push({path:'/monitoringPointDataDetail',query:{type:'add',toMiniNav:'新增 土壤采样面积分布'}})
           }
        }
    }
}
</script>
<style scoped lang="scss">

</style>