<template>
  <!--产业办---兽药经营企业数据-->
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
            miniNav:'兽药经营企业数据',
            qualityInspectionelem:[
                {width:200,labelName:'企业名称', prop:'enterpriseName'},
                {labelName:'企业类型', prop:'legalPerson'},
                {labelName:'联系人',prop: 'phone'},
                {labelName:'联系电话',prop:'address'},
                {labelName:'注册日期',prop:'registerDate'},
                {labelName:'详细地址',prop:'address'}
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
               this.$router.push({path:'/veterinaryMedicineEnterpriseDetail',query:{type:'detail',toMiniNav:'查看 兽药经营企业数据',id:rowData.id}})
           }else{
               this.$router.push({path:'/veterinaryMedicineEnterpriseDetail',query:{type:'detail',toMiniNav:'查看 兽药经营企业数据',id:rowData.id}})
           }
            
        },
        //编辑
        goEdit(rowData){
           if(this.$route.path.indexOf("/rearBusinessEntity") >= 0){
               this.$router.push({path:'/veterinaryMedicineEnterpriseDetail',query:{type:'edit',toMiniNav:'编辑 兽药经营企业数据',id:rowData.id}})
           }else{
               this.$router.push({path:'/veterinaryMedicineEnterpriseDetail',query:{type:'edit',toMiniNav:'编辑 兽药经营企业数据',id:rowData.id}})
           }
            
        },
        //新增
        add(){
            if(this.$route.path.indexOf("/rearBusinessEntity") >= 0){
               this.$router.push({path:'/veterinaryMedicineEnterpriseDetail',query:{type:'add',toMiniNav:'新增 兽药经营企业数据'}})
           }else{
               this.$router.push({path:'/veterinaryMedicineEnterpriseDetail',query:{type:'add',toMiniNav:'新增 兽药经营企业数据'}})
           }
        }
    }
}
</script>
<style scoped lang="scss">

</style>