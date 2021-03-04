<template>
  <!--产业办---农机拥有量-动力-->
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
            miniNav:'农机拥有量-动力',
            qualityInspectionelem:[
                {width:200,labelName:'年份', prop:'dataYear'},
                {labelName:'柴油发动机动力',prop: 'powerDiesel'},
                {labelName:'汽油发动机动力',prop:'powerElectric'},
                {labelName:'电动机动力',prop:'powerPetrol'},
                {labelName:'其它机械动力',prop:'powerOther'}
            ]
        }
    },
    components:{
        'Table-list':TableList
    },
    methods:{
        //查看详情
        goDetail(rowData){
           if(this.$route.path.indexOf("/havePower") >= 0){
               this.$router.push({path:'/havePowerDetail',query:{type:'detail',toMiniNav:'查看 农机拥有量-动力',id:rowData.id}})
           }else{
               this.$router.push({path:'/havePowerDetail',query:{type:'detail',toMiniNav:'查看 农机拥有量-动力',id:rowData.id}})
           }
            
        },
        //编辑
        goEdit(rowData){
           if(this.$route.path.indexOf("/havePower") >= 0){
               this.$router.push({path:'/havePowerDetail',query:{type:'edit',toMiniNav:'编辑 农机拥有量-动力',id:rowData.id}})
           }else{
               this.$router.push({path:'/havePowerDetail',query:{type:'edit',toMiniNav:'编辑 农机拥有量-动力',id:rowData.id}})
           }
            
        },
        //新增
        add(){
            if(this.$route.path.indexOf("/havePower") >= 0){
               this.$router.push({path:'/havePowerDetail',query:{type:'add',toMiniNav:'新增 农机拥有量-动力'}})
           }else{
               this.$router.push({path:'/havePowerDetail',query:{type:'add',toMiniNav:'新增 农机拥有量-动力'}})
           }
        }
    }
}
</script>
<style scoped lang="scss">

</style>