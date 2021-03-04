<template>
  <!--产业办---水库渔业生产情况-->
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
            miniNav:'水库渔业生产情况',
            qualityInspectionelem:[
                {labelName:'年份', prop:'dataYear'},
                {labelName:'产量（吨）', prop:'yeild'},
                {labelName:'投放鱼种量（吨）', prop:'seedPut'},
                {labelName:'可利用水库（座）', prop:'usableTotal'},
                {labelName:'可养殖水库（公顷）',prop: 'farmableTotal'},
                {labelName:'已利用水库（座）',prop: 'usedTotal'},
                {labelName:'已养殖水库（公顷）',prop: 'farmedTotal'},
                {labelName:'无公害养殖产量（吨）',prop: 'nuisancelessYeild'},
                {labelName:'水库网箱养鱼产量（吨）',prop: 'nuisancelessArea'}
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
               this.$router.push({path:'/reservoirProductionDetail',query:{type:'detail',toMiniNav:'查看 水库渔业生产情况',id:rowData.id}})
           }else{
               this.$router.push({path:'/reservoirProductionDetail',query:{type:'detail',toMiniNav:'查看 水库渔业生产情况',id:rowData.id}})
           }
            
        },
        //编辑
        goEdit(rowData){
           if(this.$route.path.indexOf("/rearBusinessEntity") >= 0){
               this.$router.push({path:'/reservoirProductionDetail',query:{type:'edit',toMiniNav:'编辑 水库渔业生产情况',id:rowData.id}})
           }else{
               this.$router.push({path:'/reservoirProductionDetail',query:{type:'edit',toMiniNav:'编辑 水库渔业生产情况',id:rowData.id}})
           }
            
        },
        //新增
        add(){
            if(this.$route.path.indexOf("/rearBusinessEntity") >= 0){
               this.$router.push({path:'/reservoirProductionDetail',query:{type:'add',toMiniNav:'新增 水库渔业生产情况'}})
           }else{
               this.$router.push({path:'/reservoirProductionDetail',query:{type:'add',toMiniNav:'新增 水库渔业生产情况'}})
           }
        }
    }
}
</script>
<style scoped lang="scss">

</style>