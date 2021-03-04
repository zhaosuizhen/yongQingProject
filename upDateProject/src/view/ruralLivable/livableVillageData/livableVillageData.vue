<template>
  <!--产业办---乡村数据汇总-->
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
            miniNav:'乡村数据汇总',
            qualityInspectionelem:[
                {width:200,labelName:'村名称', prop:'villageName'},
                {labelName:'所属乡镇', prop:'township'},
                {labelName:'建成时间',prop: 'createTime'},
                {labelName:'省、市等级', prop:'level'},
                {labelName:'项目名称',prop: 'projectName'}
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
               this.$router.push({path:'/livableVillageDataDetail',query:{type:'detail',toMiniNav:'查看 乡村数据汇总',id:rowData.id}})
           }else{
               this.$router.push({path:'/livableVillageDataDetail',query:{type:'detail',toMiniNav:'查看 乡村数据汇总',id:rowData.id}})
           }
            
        },
        //编辑
        goEdit(rowData){
           if(this.$route.path.indexOf("/rearBusinessEntity") >= 0){
               this.$router.push({path:'/livableVillageDataDetail',query:{type:'edit',toMiniNav:'编辑 乡村数据汇总',id:rowData.id}})
           }else{
               this.$router.push({path:'/livableVillageDataDetail',query:{type:'edit',toMiniNav:'编辑 乡村数据汇总',id:rowData.id}})
           }
            
        },
        //新增
        add(){
            if(this.$route.path.indexOf("/rearBusinessEntity") >= 0){
               this.$router.push({path:'/livableVillageDataDetail',query:{type:'add',toMiniNav:'新增 乡村数据汇总'}})
           }else{
               this.$router.push({path:'/livableVillageDataDetail',query:{type:'add',toMiniNav:'新增 乡村数据汇总'}})
           }
        }
    }
}
</script>
<style scoped lang="scss">

</style>