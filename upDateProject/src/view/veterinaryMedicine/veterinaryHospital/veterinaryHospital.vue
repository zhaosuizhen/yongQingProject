<template>
  <!--产业办---诊疗机构数据-->
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
            miniNav:'诊疗机构数据',
            qualityInspectionelem:[
                {width:200,labelName:'机构名称', prop:'hospitalName'},
                {labelName:'联系人',prop: 'legalPerson'},
                {labelName:'联系电话',prop:'phone'},
                {labelName:'占地面积（亩）',prop:'landArea'},
                {labelName:'注册资金（万元）',prop:'registeredCapital'},
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
               this.$router.push({path:'/veterinaryHospitalDetail',query:{type:'detail',toMiniNav:'查看 诊疗机构数据',id:rowData.id}})
           }else{
               this.$router.push({path:'/veterinaryHospitalDetail',query:{type:'detail',toMiniNav:'查看 诊疗机构数据',id:rowData.id}})
           }
            
        },
        //编辑
        goEdit(rowData){
           if(this.$route.path.indexOf("/rearBusinessEntity") >= 0){
               this.$router.push({path:'/veterinaryHospitalDetail',query:{type:'edit',toMiniNav:'编辑 诊疗机构数据',id:rowData.id}})
           }else{
               this.$router.push({path:'/veterinaryHospitalDetail',query:{type:'edit',toMiniNav:'编辑 诊疗机构数据',id:rowData.id}})
           }
            
        },
        //新增
        add(){
            if(this.$route.path.indexOf("/rearBusinessEntity") >= 0){
               this.$router.push({path:'/veterinaryHospitalDetail',query:{type:'add',toMiniNav:'新增 诊疗机构数据'}})
           }else{
               this.$router.push({path:'/veterinaryHospitalDetail',query:{type:'add',toMiniNav:'新增 诊疗机构数据'}})
           }
        }
    }
}
</script>
<style scoped lang="scss">

</style>