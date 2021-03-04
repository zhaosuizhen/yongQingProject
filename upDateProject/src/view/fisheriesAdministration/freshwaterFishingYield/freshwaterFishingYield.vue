<template>
  <!--产业办---淡水捕捞产量-->
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
            miniNav:'淡水捕捞产量',
            qualityInspectionelem:[
                {labelName:'年份', prop:'dataYear'},
                {labelName:'鱼类（吨）',prop: 'fish'},
                {labelName:'甲壳类（吨）', prop:'carapaceTotal'},
                {labelName:'贝类（吨）', prop:'shellfish'},
                {labelName:'藻类（吨）',prop: 'alga'},
                {labelName:'其它类（吨）',prop: 'shrimpFairy'}
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
               this.$router.push({path:'/freshwaterFishingYieldDetail',query:{type:'detail',toMiniNav:'查看 淡水捕捞产量',id:rowData.id}})
           }else{
               this.$router.push({path:'/freshwaterFishingYieldDetail',query:{type:'detail',toMiniNav:'查看 淡水捕捞产量',id:rowData.id}})
           }
            
        },
        //编辑
        goEdit(rowData){
           if(this.$route.path.indexOf("/rearBusinessEntity") >= 0){
               this.$router.push({path:'/freshwaterFishingYieldDetail',query:{type:'edit',toMiniNav:'编辑 淡水捕捞产量',id:rowData.id}})
           }else{
               this.$router.push({path:'/freshwaterFishingYieldDetail',query:{type:'edit',toMiniNav:'编辑 淡水捕捞产量',id:rowData.id}})
           }
            
        },
        //新增
        add(){
            if(this.$route.path.indexOf("/rearBusinessEntity") >= 0){
               this.$router.push({path:'/freshwaterFishingYieldDetail',query:{type:'add',toMiniNav:'新增 淡水捕捞产量'}})
           }else{
               this.$router.push({path:'/freshwaterFishingYieldDetail',query:{type:'add',toMiniNav:'新增 淡水捕捞产量'}})
           }
        }
    }
}
</script>
<style scoped lang="scss">

</style>