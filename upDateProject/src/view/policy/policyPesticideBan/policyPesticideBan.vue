<template>
  <!--产业办---禁用农药-->
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
            miniNav:'禁用农药',
            qualityInspectionelem:[
                {width:200,labelName:'农药名称', prop:'pesticideName'},
                {labelName:'限用原因', prop:'limitReason'},
                {labelName:'禁用范围',prop: 'banScope'},
                {labelName:'禁用日期', prop:'banTime'},
                {labelName:'农业部公告号',prop: 'fileName'},
                {labelName:'发布日期',prop: 'publishTime'}
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
               this.$router.push({path:'/policyPesticideBanDetail',query:{type:'detail',toMiniNav:'查看 禁用农药',id:rowData.id}})
           }else{
               this.$router.push({path:'/policyPesticideBanDetail',query:{type:'detail',toMiniNav:'查看 禁用农药',id:rowData.id}})
           }
            
        },
        //编辑
        goEdit(rowData){
           if(this.$route.path.indexOf("/rearBusinessEntity") >= 0){
               this.$router.push({path:'/policyPesticideBanDetail',query:{type:'edit',toMiniNav:'编辑 禁用农药',id:rowData.id}})
           }else{
               this.$router.push({path:'/policyPesticideBanDetail',query:{type:'edit',toMiniNav:'编辑 禁用农药',id:rowData.id}})
           }
            
        },
        //新增
        add(){
            if(this.$route.path.indexOf("/rearBusinessEntity") >= 0){
               this.$router.push({path:'/policyPesticideBanDetail',query:{type:'add',toMiniNav:'新增 禁用农药'}})
           }else{
               this.$router.push({path:'/policyPesticideBanDetail',query:{type:'add',toMiniNav:'新增 禁用农药'}})
           }
        }
    }
}
</script>
<style scoped lang="scss">

</style>