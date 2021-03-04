<template>
  <!--产业办---经营主体数据-->
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
            miniNav:'三品一标数据',
            qualityInspectionelem:[
                {width:200,labelName:'企业名称',prop: 'enterpriseName'},
                {labelName:'行业名称', prop:'industry'},
                {labelName:'产品名称', prop:'productName'},
                {labelName:'产品类型',prop:'productType'},
                {labelName:'姓名',prop:'contact'},
                {labelName:'电话',prop:'phone'},
                {labelName:'单位性质',prop:'enterpriseType'},
                {labelName:'申请人地址',prop:'address'},
                {labelName:'面积（亩）',prop:'scale'},
                {labelName:'产量（吨）',prop:'yield'}
            ]
        }
    },
    components:{
        'Table-list':TableList
    },
    methods:{
        //查看详情
        goDetail(rowData){
           if(this.$route.path.indexOf("/reformEnterpriseQuality") >= 0){
               this.$router.push({path:'/reformEnterpriseQualityDetail',query:{type:'detail',toMiniNav:'查看 经营主体数据',id:rowData.id}})
           }else{
               this.$router.push({path:'/doBusinessEntityDetail',query:{type:'detail',toMiniNav:'查看 经营主体数据',id:rowData.id}})
           }
            
        },
        //编辑
        goEdit(rowData){
           if(this.$route.path.indexOf("/reformEnterpriseQuality") >= 0){
               this.$router.push({path:'/reformEnterpriseQualityDetail',query:{type:'edit',toMiniNav:'编辑 经营主体数据',id:rowData.id}})
           }else{
               this.$router.push({path:'/doBusinessEntityDetail',query:{type:'edit',toMiniNav:'编辑 经营主体数据',id:rowData.id}})
           }
            
        },
        //新增
        add(){
            if(this.$route.path.indexOf("/reformEnterpriseQuality") >= 0){
               this.$router.push({path:'/reformEnterpriseQualityDetail',query:{type:'add',toMiniNav:'新增 三品一标数据'}})
           }else{
               this.$router.push({path:'/doBusinessEntityDetail',query:{type:'add',toMiniNav:'新增 经营主体数据'}})
           }
        }
    }
}
</script>
<style scoped lang="scss">

</style>