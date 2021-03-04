<template>
  <!--产业办---种子企业备案-->
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
            miniNav:'种子企业备案',
            qualityInspectionelem:[
                {labelName:'企业名称', prop:'enterpriseName'},
                {labelName:'代理商名称', prop:'agentName'},
                {labelName:'种子类别',prop: 'seedName'},
                {labelName:'品种名称', prop:'breedType'},
                {labelName:'种子经营人员', prop:'seedManagePerson'},
                {labelName:'所属乡镇',prop: 'township'},
                {labelName:'备案时间',prop: 'recordTime'}
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
               this.$router.push({path:'/seedEnterpriseDetail',query:{type:'detail',toMiniNav:'查看 种子企业备案',id:rowData.id}})
           }else{
               this.$router.push({path:'/seedEnterpriseDetail',query:{type:'detail',toMiniNav:'查看 种子企业备案',id:rowData.id}})
           }
            
        },
        //编辑
        goEdit(rowData){
           if(this.$route.path.indexOf("/rearBusinessEntity") >= 0){
               this.$router.push({path:'/seedEnterpriseDetail',query:{type:'edit',toMiniNav:'编辑 种子企业备案',id:rowData.id}})
           }else{
               this.$router.push({path:'/seedEnterpriseDetail',query:{type:'edit',toMiniNav:'编辑 种子企业备案',id:rowData.id}})
           }
            
        },
        //新增
        add(){
            if(this.$route.path.indexOf("/rearBusinessEntity") >= 0){
               this.$router.push({path:'/seedEnterpriseDetail',query:{type:'add',toMiniNav:'新增 种子企业备案'}})
           }else{
               this.$router.push({path:'/seedEnterpriseDetail',query:{type:'add',toMiniNav:'新增 种子企业备案'}})
           }
        }
    }
}
</script>
<style scoped lang="scss">

</style>