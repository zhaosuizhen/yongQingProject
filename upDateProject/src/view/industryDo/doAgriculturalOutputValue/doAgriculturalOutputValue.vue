<template>
  <!--产业办---农产品企业产值-->
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
            miniNav:'农产品企业产值',
            qualityInspectionelem:[
                {labelName:'乡镇', prop:'township'},
                {labelName:'年份',prop: 'dataYear',},
                {width:200,labelName:'企业名称', prop:'enterpriseName'},
                {width:120,labelName:'产值（万元）',prop:'outputValue'},
                {labelName:'去年产值（万元）',prop:'lastYearValue'},
                {labelName:'上报时间',prop:'reportTime'}
            ]
        }
    },
    components:{
        'Table-list':TableList
    },
    methods:{
        //查看详情
        goDetail(rowData){
           // sessionStorage.setItem('currentMenuItem','doAgriculturalOutputValueDetail'); //记录路由
            this.$router.push({path:'/doAgriculturalOutputValueDetail',query:{type:'detail',toMiniNav:'查看 农产品企业产值',id:rowData.id}})
        },
        //编辑
        goEdit(rowData){
           // sessionStorage.setItem('currentMenuItem','doAgriculturalOutputValueDetail'); //记录路由
            this.$router.push({path:'/doAgriculturalOutputValueDetail',query:{type:'edit',toMiniNav:'编辑 农产品企业产值',id:rowData.id}})
        },
        //新增
        add(){
           // sessionStorage.setItem('currentMenuItem','doAgriculturalOutputValueDetail'); //记录路由
            this.$router.push({path:'/doAgriculturalOutputValueDetail',query:{type:'add',toMiniNav:'新增 农产品企业产值'}})
        }
    }
}
</script>
<style scoped lang="scss">

</style>