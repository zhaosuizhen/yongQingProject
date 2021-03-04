<template>
  <!--产业办---主要水产苗种-->
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
            miniNav:'主要水产苗种',
            qualityInspectionelem:[
                {labelName:'年份', prop:'dataYear'},
                // {labelName:'淡水鱼苗（万尾）',prop: 'fish'},
                {labelName:'淡水鱼种（吨）', prop:'seedFreshwater'},
                {labelName:'投放鱼苗（吨）', prop:'seedPut'},
                {labelName:'河蟹育苗（公斤）', prop:'seedRiverCrab'},
                {labelName:'扣蟹（公斤）',prop: 'seedClaspCrab'},
                {labelName:'稚鳖（千只）',prop: 'seedTerrapin'},
                {labelName:'稚龟（千只）',prop: 'seedTurtle'}
                // {labelName:'虾类育苗（万尾）',prop: 'shrimpFairy'}
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
               this.$router.push({path:'/aquaticSeedlingDetail',query:{type:'detail',toMiniNav:'查看 主要水产苗种',id:rowData.id}})
           }else{
               this.$router.push({path:'/aquaticSeedlingDetail',query:{type:'detail',toMiniNav:'查看 主要水产苗种',id:rowData.id}})
           }
            
        },
        //编辑
        goEdit(rowData){
           if(this.$route.path.indexOf("/rearBusinessEntity") >= 0){
               this.$router.push({path:'/aquaticSeedlingDetail',query:{type:'edit',toMiniNav:'编辑 主要水产苗种',id:rowData.id}})
           }else{
               this.$router.push({path:'/aquaticSeedlingDetail',query:{type:'edit',toMiniNav:'编辑 主要水产苗种',id:rowData.id}})
           }
            
        },
        //新增
        add(){
            if(this.$route.path.indexOf("/rearBusinessEntity") >= 0){
               this.$router.push({path:'/aquaticSeedlingDetail',query:{type:'add',toMiniNav:'新增 主要水产苗种'}})
           }else{
               this.$router.push({path:'/aquaticSeedlingDetail',query:{type:'add',toMiniNav:'新增 主要水产苗种'}})
           }
        }
    }
}
</script>
<style scoped lang="scss">

</style>