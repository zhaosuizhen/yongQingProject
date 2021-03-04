<template>
  <!--产业办---渔业增加值-->
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
            miniNav:'渔业增加值',
            qualityInspectionelem:[
                {labelName:'年份', prop:'years'},
                {labelName:'渔业（万元）',prop: 'totalFish'},
                {labelName:'渔业工业和建筑业（万元）', prop:'totalFishBuild'},
                {labelName:'渔业流通和服务业（万元）', prop:'totalFishService'}
            ]
        }
    },
    components:{
        'Table-list':TableList
    },
    methods:{
        //查看详情
        goDetail(rowData){
           if(this.$route.path.indexOf("/fisheryAddYield") >= 0){
               this.$router.push({path:'/fisheryAddYieldDetail',query:{type:'detail',toMiniNav:'查看 渔业增加值',id:rowData.id}})
           }else{
               this.$router.push({path:'/fisheryAddYieldDetail',query:{type:'detail',toMiniNav:'查看 渔业增加值',id:rowData.id}})
           }
            
        },
        //编辑
        goEdit(rowData){
           if(this.$route.path.indexOf("/fisheryAddYield") >= 0){
               this.$router.push({path:'/fisheryAddYieldDetail',query:{type:'edit',toMiniNav:'编辑 渔业增加值',id:rowData.id}})
           }else{
               this.$router.push({path:'/fisheryAddYieldDetail',query:{type:'edit',toMiniNav:'编辑 渔业增加值',id:rowData.id}})
           }
            
        },
        //新增
        add(){
            if(this.$route.path.indexOf("/fisheryAddYield") >= 0){
               this.$router.push({path:'/fisheryAddYieldDetail',query:{type:'add',toMiniNav:'新增 渔业增加值'}})
           }else{
               this.$router.push({path:'/fisheryAddYieldDetail',query:{type:'add',toMiniNav:'新增 渔业增加值'}})
           }
        }
    }
}
</script>
<style scoped lang="scss">

</style>