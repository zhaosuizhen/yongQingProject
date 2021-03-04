<template>
  <!--产业办---水产加工数据-->
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
            miniNav:'水产加工数据',
            qualityInspectionelem:[
                {labelName:'年份', prop:'dataYear'},
                {labelName:'水产加工品总量（吨）',prop: 'aquaticYieldTotal'},
                {labelName:'用于加工的水产品量（吨）', prop:'useAquaticYieldTotal'},
                {labelName:'部分水产品年加工量（吨）', prop:'aquaticYearYieldTotal'},
                {labelName:'水产加工企业（个）',prop: 'enterpriseCount'},
                {labelName:'水产冷库（座）',prop: 'freezerCount'}
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
               this.$router.push({path:'/aquaticMachiningDetail',query:{type:'detail',toMiniNav:'查看 水产加工数据',id:rowData.id}})
           }else{
               this.$router.push({path:'/aquaticMachiningDetail',query:{type:'detail',toMiniNav:'查看 水产加工数据',id:rowData.id}})
           }
            
        },
        //编辑
        goEdit(rowData){
           if(this.$route.path.indexOf("/rearBusinessEntity") >= 0){
               this.$router.push({path:'/aquaticMachiningDetail',query:{type:'edit',toMiniNav:'编辑 水产加工数据',id:rowData.id}})
           }else{
               this.$router.push({path:'/aquaticMachiningDetail',query:{type:'edit',toMiniNav:'编辑 水产加工数据',id:rowData.id}})
           }
            
        },
        //新增
        add(){
            if(this.$route.path.indexOf("/rearBusinessEntity") >= 0){
               this.$router.push({path:'/aquaticMachiningDetail',query:{type:'add',toMiniNav:'新增 水产加工数据'}})
           }else{
               this.$router.push({path:'/aquaticMachiningDetail',query:{type:'add',toMiniNav:'新增 水产加工数据'}})
           }
        }
    }
}
</script>
<style scoped lang="scss">

</style>