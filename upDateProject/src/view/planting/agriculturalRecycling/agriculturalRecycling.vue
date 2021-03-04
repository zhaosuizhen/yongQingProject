<template>
  <!--产业办---农膜覆盖及回收利用情况-->
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
            miniNav:'农膜覆盖及回收利用情况',
            qualityInspectionelem:[
                {labelName:'年份', prop:'years'},
                {labelName:'乡镇',prop: 'township'},
                {labelName:'回收企业（个）',prop: 'recoveryEnterprise'},
                {labelName:'回收网点（个）', prop:'recoveryStation'},
                {labelName:'农膜回收率（%）', prop:'rates'},
                {labelName:'地膜面积（万亩）',prop: 'filmCoverArea'},
                {labelName:'地膜用量（吨）',prop: 'filmConsumption'},
                {labelName:'地膜回收量（吨）',prop: 'filmRecovery'},
                {labelName:'地膜回收率（%）',prop: 'filmRate'},
                {labelName:'棚膜面积（万亩）',prop: 'plasticCoverArea'},
                {labelName:'棚膜用量（吨）',prop: 'plasticConsumption'},
                {labelName:'棚膜回收量（吨）',prop: 'plasticRecovery'},
                {labelName:'棚膜回收率（%）',prop: 'plasticRate'},
            ]
        }
    },
    components:{
        'Table-list':TableList
    },
    methods:{
        //查看详情
        goDetail(rowData){
           if(this.$route.path.indexOf("/agriculturalRecycling") >= 0){
               this.$router.push({path:'/agriculturalRecyclingDetail',query:{type:'detail',toMiniNav:'查看 农膜覆盖及回收利用情况',id:rowData.id}})
           }else{
               this.$router.push({path:'/agriculturalRecyclingDetail',query:{type:'detail',toMiniNav:'查看 农膜覆盖及回收利用情况',id:rowData.id}})
           }
            
        },
        //编辑
        goEdit(rowData){
           if(this.$route.path.indexOf("/agriculturalRecycling") >= 0){
               this.$router.push({path:'/agriculturalRecyclingDetail',query:{type:'edit',toMiniNav:'编辑 农膜覆盖及回收利用情况',id:rowData.id}})
           }else{
               this.$router.push({path:'/agriculturalRecyclingDetail',query:{type:'edit',toMiniNav:'编辑 农膜覆盖及回收利用情况',id:rowData.id}})
           }
            
        },
        //新增
        add(){
            if(this.$route.path.indexOf("/agriculturalRecycling") >= 0){
               this.$router.push({path:'/agriculturalRecyclingDetail',query:{type:'add',toMiniNav:'新增 农膜覆盖及回收利用情况'}})
           }else{
               this.$router.push({path:'/agriculturalRecyclingDetail',query:{type:'add',toMiniNav:'新增 农膜覆盖及回收利用情况'}})
           }
        }
    }
}
</script>
<style scoped lang="scss">

</style>