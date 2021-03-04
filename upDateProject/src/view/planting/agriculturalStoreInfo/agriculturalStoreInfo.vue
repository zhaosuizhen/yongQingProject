<template>
  <!--产业办---农资店信息-->
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
            miniNav:'农资店信息',
            qualityInspectionelem:[
                {labelName:'经营者名称', prop:'managementName'},
                {labelName:'统一社会信用代码',prop: 'creditCode'},
                {labelName:'法定代表人',prop: 'legalName'},
                {labelName:'联系方式', prop:'phone'},
                {labelName:'经营场所地址', prop:'businessAddress'},
                {labelName:'受理时间',prop: 'acceptanceDate'},
                {labelName:'有效日期',prop: 'lienseEffectiveDate'}
            ]
        }
    },
    components:{
        'Table-list':TableList
    },
    methods:{
        //查看详情
        goDetail(rowData){
           if(this.$route.path.indexOf("/agriculturalStoreInfo") >= 0){
               this.$router.push({path:'/agriculturalStoreInfoDetail',query:{type:'detail',toMiniNav:'查看 农资店信息',id:rowData.id}})
           }else{
               this.$router.push({path:'/agriculturalStoreInfoDetail',query:{type:'detail',toMiniNav:'查看 农资店信息',id:rowData.id}})
           }
            
        },
        //编辑
        goEdit(rowData){
           if(this.$route.path.indexOf("/agriculturalStoreInfo") >= 0){
               this.$router.push({path:'/agriculturalStoreInfoDetail',query:{type:'edit',toMiniNav:'编辑 农资店信息',id:rowData.id}})
           }else{
               this.$router.push({path:'/agriculturalStoreInfoDetail',query:{type:'edit',toMiniNav:'编辑 农资店信息',id:rowData.id}})
           }
            
        },
        //新增
        add(){
            if(this.$route.path.indexOf("/agriculturalStoreInfo") >= 0){
               this.$router.push({path:'/agriculturalStoreInfoDetail',query:{type:'add',toMiniNav:'新增 农资店信息'}})
           }else{
               this.$router.push({path:'/agriculturalStoreInfoDetail',query:{type:'add',toMiniNav:'新增 农资店信息'}})
           }
        }
    }
}
</script>
<style scoped lang="scss">

</style>