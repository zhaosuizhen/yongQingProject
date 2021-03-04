<template>
  <!--产业办---农机拥有量-数量-->
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
            miniNav:'农机拥有量-数量',
            qualityInspectionelem:[
                {width:200,labelName:'年份', prop:'dataYear'},
                {labelName:'种植机械（台）',prop: 'plantMechanicsTotal'},
                {labelName:'农产品初加工机械（台）',prop:'agricultureMechanicsTotal'},
                {labelName:'畜牧机械（台）',prop:'animalMechanicsTotal'},
                {labelName:'水产机械（台）',prop:'waterMechanicsTotal'},
                {labelName:'农田基本建设机械（台）',prop:'buildMechanicsTotal'},
                {labelName:'拖拉机及配套机械（台）',prop:'tractorTotal'}
            ]
        }
    },
    components:{
        'Table-list':TableList
    },
    methods:{
        //查看详情
        goDetail(rowData){
           if(this.$route.path.indexOf("/haveCount") >= 0){
               this.$router.push({path:'/haveCountDetail',query:{type:'detail',toMiniNav:'查看 农机拥有量-数量',id:rowData.id}})
           }else{
               this.$router.push({path:'/haveCountDetail',query:{type:'detail',toMiniNav:'查看 农机拥有量-数量',id:rowData.id}})
           }
            
        },
        //编辑
        goEdit(rowData){
           if(this.$route.path.indexOf("/haveCount") >= 0){
               this.$router.push({path:'/haveCountDetail',query:{type:'edit',toMiniNav:'编辑 农机拥有量-数量',id:rowData.id}})
           }else{
               this.$router.push({path:'/haveCountDetail',query:{type:'edit',toMiniNav:'编辑 农机拥有量-数量',id:rowData.id}})
           }
            
        },
        //新增
        add(){
            if(this.$route.path.indexOf("/haveCount") >= 0){
               this.$router.push({path:'/haveCountDetail',query:{type:'add',toMiniNav:'新增 农机拥有量-数量'}})
           }else{
               this.$router.push({path:'/haveCountDetail',query:{type:'add',toMiniNav:'新增 农机拥有量-数量'}})
           }
        }
    }
}
</script>
<style scoped lang="scss">

</style>