<template>
  <!--产业办---渔业人口情况-->
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
            miniNav:'渔业人口情况',
            qualityInspectionelem:[
                {labelName:'年份', prop:'dataYear'},
                {labelName:'渔业乡（个）',prop: 'fisheryTownship'},
                {labelName:'渔业村（个）', prop:'fisheryVillage'},
                {labelName:'渔业户（户）', prop:'fisheryFamily'},
                {labelName:'渔业人口（人）',prop: 'fisheryPopulation'},
                {labelName:'渔业从业人员（人）',prop: 'workingPeopleTotal'}
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
               this.$router.push({path:'/fisheriesPopulationDetail',query:{type:'detail',toMiniNav:'查看 渔业人口情况',id:rowData.id}})
           }else{
               this.$router.push({path:'/fisheriesPopulationDetail',query:{type:'detail',toMiniNav:'查看 渔业人口情况',id:rowData.id}})
           }
            
        },
        //编辑
        goEdit(rowData){
           if(this.$route.path.indexOf("/rearBusinessEntity") >= 0){
               this.$router.push({path:'/fisheriesPopulationDetail',query:{type:'edit',toMiniNav:'编辑 渔业人口情况',id:rowData.id}})
           }else{
               this.$router.push({path:'/fisheriesPopulationDetail',query:{type:'edit',toMiniNav:'编辑 渔业人口情况',id:rowData.id}})
           }
            
        },
        //新增
        add(){
            if(this.$route.path.indexOf("/rearBusinessEntity") >= 0){
               this.$router.push({path:'/fisheriesPopulationDetail',query:{type:'add',toMiniNav:'新增 渔业人口情况'}})
           }else{
               this.$router.push({path:'/fisheriesPopulationDetail',query:{type:'add',toMiniNav:'新增 渔业人口情况'}})
           }
        }
    }
}
</script>
<style scoped lang="scss">

</style>