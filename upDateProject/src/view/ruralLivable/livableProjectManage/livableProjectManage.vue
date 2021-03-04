<template>
  <!--产业办---项目管理-->
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
            miniNav:'项目管理',
            qualityInspectionelem:[
                {width:200,labelName:'项目名称', prop:'projectName'},
                {labelName:'项目开始时间', prop:'startTime'},
                {labelName:'备注',prop: 'remark'}
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
               this.$router.push({path:'/livableProjectManageDetail',query:{type:'detail',toMiniNav:'查看 项目管理',id:rowData.id}})
           }else{
               this.$router.push({path:'/livableProjectManageDetail',query:{type:'detail',toMiniNav:'查看 项目管理',id:rowData.id}})
           }
            
        },
        //编辑
        goEdit(rowData){
           if(this.$route.path.indexOf("/rearBusinessEntity") >= 0){
               this.$router.push({path:'/livableProjectManageDetail',query:{type:'edit',toMiniNav:'编辑 项目管理',id:rowData.id}})
           }else{
               this.$router.push({path:'/livableProjectManageDetail',query:{type:'edit',toMiniNav:'编辑 项目管理',id:rowData.id}})
           }
            
        },
        //新增
        add(){
            if(this.$route.path.indexOf("/rearBusinessEntity") >= 0){
               this.$router.push({path:'/livableProjectManageDetail',query:{type:'add',toMiniNav:'新增 项目管理'}})
           }else{
               this.$router.push({path:'/livableProjectManageDetail',query:{type:'add',toMiniNav:'新增 项目管理'}})
           }
        }
    }
}
</script>
<style scoped lang="scss">

</style>