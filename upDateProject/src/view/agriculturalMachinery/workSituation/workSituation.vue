<template>
  <!--产业办---农机作业情况-->
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
            miniNav:'农机作业情况',
            qualityInspectionelem:[
                {width:200,labelName:'年份', prop:'dataYear'},
                {labelName:'农机作业总体情况（公顷）', prop:'njzyTotal'},
                {labelName:'拖拉机及配套机械（千瓦）',prop: 'tljTotal'},
                {labelName:'主要农作物生产机械化作业情况（公顷）',prop:'zyzwTotal'},
                {labelName:'单项农机作业情况（公顷）',prop:'dxnjTotal'},
                {labelName:'农机社会化服务作业情况（公顷）',prop:'njshTotal'},
                {labelName:'农产品初加工机械化作业情况（吨）',prop:'cjgTotal'},
                {labelName:'水产养殖机械化作业情况（公顷）',prop:'scyzTotal'}
            ]
        }
    },
    components:{
        'Table-list':TableList
    },
    methods:{
        //查看详情
        goDetail(rowData){
           if(this.$route.path.indexOf("/workSituation") >= 0){
               this.$router.push({path:'/workSituationDetail',query:{type:'detail',toMiniNav:'查看 农机作业情况',id:rowData.id}})
           }else{
               this.$router.push({path:'/workSituationDetail',query:{type:'detail',toMiniNav:'查看 农机作业情况',id:rowData.id}})
           }
            
        },
        //编辑
        goEdit(rowData){
           if(this.$route.path.indexOf("/workSituation") >= 0){
               this.$router.push({path:'/workSituationDetail',query:{type:'edit',toMiniNav:'编辑 农机作业情况',id:rowData.id}})
           }else{
               this.$router.push({path:'/workSituationDetail',query:{type:'edit',toMiniNav:'编辑 农机作业情况',id:rowData.id}})
           }
            
        },
        //新增
        add(){
            if(this.$route.path.indexOf("/workSituation") >= 0){
               this.$router.push({path:'/workSituationDetail',query:{type:'add',toMiniNav:'新增 农机作业情况'}})
           }else{
               this.$router.push({path:'/workSituationDetail',query:{type:'add',toMiniNav:'新增 农机作业情况'}})
           }
        }
    }
}
</script>
<style scoped lang="scss">

</style>