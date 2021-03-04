<template>
  <!--产业办---农机服务-->
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
            miniNav:'农机服务',
            qualityInspectionelem:[
                {width:200,labelName:'年份', prop:'dataYear'},
                {labelName:'农机服务组织及农机户（个）', prop:'organizationCount'},
                {labelName:'农机服务组织及农机户（人）',prop: 'organizationNum'},
                {labelName:'农机化投入（万元）',prop:'investment'},
                {labelName:'农机服务收入（万元）',prop:'income'}
            ]
        }
    },
    components:{
        'Table-list':TableList
    },
    methods:{
        //查看详情
        goDetail(rowData){
           if(this.$route.path.indexOf("/serviceInformation") >= 0){
               this.$router.push({path:'/serviceInformationDetail',query:{type:'detail',toMiniNav:'查看 农机服务',id:rowData.id}})
           }else{
               this.$router.push({path:'/serviceInformationDetail',query:{type:'detail',toMiniNav:'查看 农机服务',id:rowData.id}})
           }
            
        },
        //编辑
        goEdit(rowData){
           if(this.$route.path.indexOf("/serviceInformation") >= 0){
               this.$router.push({path:'/serviceInformationDetail',query:{type:'edit',toMiniNav:'编辑 农机服务',id:rowData.id}})
           }else{
               this.$router.push({path:'/serviceInformationDetail',query:{type:'edit',toMiniNav:'编辑 农机服务',id:rowData.id}})
           }
            
        },
        //新增
        add(){
            if(this.$route.path.indexOf("/serviceInformation") >= 0){
               this.$router.push({path:'/serviceInformationDetail',query:{type:'add',toMiniNav:'新增 农机服务'}})
           }else{
               this.$router.push({path:'/serviceInformationDetail',query:{type:'add',toMiniNav:'新增 农机服务'}})
           }
        }
    }
}
</script>
<style scoped lang="scss">

</style>