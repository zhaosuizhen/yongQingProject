<template>
  <!--产业办---病虫害防治趋势-->
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
            miniNav:'病虫害防治趋势',
            qualityInspectionelem:[
                {width:200,labelName:'年份', prop:'years'},
                {labelName:'防治面积（万亩次）', prop:'defenseArea'},
                {labelName:'发生面积（万亩次）', prop:'happenArea'}
            ]
        }
    },
    components:{
        'Table-list':TableList
    },
    methods:{
        //查看详情
        goDetail(rowData){
           if(this.$route.path.indexOf("/preventionAndCure") >= 0){
               this.$router.push({path:'/preventionAndCureDetail',query:{type:'detail',toMiniNav:'查看 病虫害防治趋势',id:rowData.id}})
           }else{
               this.$router.push({path:'/preventionAndCureDetail',query:{type:'detail',toMiniNav:'查看 病虫害防治趋势',id:rowData.id}})
           }
            
        },
        //编辑
        goEdit(rowData){
           if(this.$route.path.indexOf("/preventionAndCure") >= 0){
               this.$router.push({path:'/preventionAndCureDetail',query:{type:'edit',toMiniNav:'编辑 病虫害防治趋势',id:rowData.id}})
           }else{
               this.$router.push({path:'/preventionAndCureDetail',query:{type:'edit',toMiniNav:'编辑 病虫害防治趋势',id:rowData.id}})
           }
            
        },
        //新增
        add(){
            if(this.$route.path.indexOf("/preventionAndCure") >= 0){
               this.$router.push({path:'/preventionAndCureDetail',query:{type:'add',toMiniNav:'新增 病虫害防治趋势'}})
           }else{
               this.$router.push({path:'/preventionAndCureDetail',query:{type:'add',toMiniNav:'新增 病虫害防治趋势'}})
           }
        }
    }
}
</script>
<style scoped lang="scss">

</style>