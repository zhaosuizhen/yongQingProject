<template>
    <!--土肥站---监测点耕地质量数据-->
    <div id="farmlandQualityData" class="pageContent">
        <section class="sectionContent-40">
            <Table-list 
                :tableKey='qualityInspectionelem' 
                :tableData="dataList"
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
    data() {
        return {
            miniNav:'监测点耕地质量数据',
            qualityInspectionelem:[
                {labelName:'监测点',prop: 'testingPlaceName'},
                {labelName:'乡镇', prop:'township'},
                { width:200,labelName:'年份', prop:'dataYear'},
                {labelName:'作物名称',prop:'productName'},
                {labelName:'作物产量（kg/亩）',prop:'productYield'},
                {labelName:'pH',prop:'ph'},
                {labelName:'有机质 g/kg',prop:'organicMatter'},
                {labelName:'碱解氮mg/kg',prop:'jjd'},
                {labelName:'有效磷mg/kg',prop:'olsenp'},
                {labelName:'速效钾mg/kg',prop:'sxj'},
                {labelName:'缓效钾mg/kg',prop:'hxj'}
            ],
            dataList:{},
        }
    },
    components:{
        'Table-list':TableList
    },
    methods:{
        //查看详情
        goDetail(rowData){
          //  sessionStorage.setItem('currentMenuItem','farmlandQualityDataDetail'); //记录路由
            this.$router.push({path:'/farmlandQualityDataDetail',query:{type:'detail',toMiniNav:'查看 监测点耕地质量数据',id:rowData.id}})
        },
        //编辑
        goEdit(rowData){
           // sessionStorage.setItem('currentMenuItem','farmlandQualityDataDetail'); //记录路由
            this.$router.push({path:'/farmlandQualityDataDetail',query:{type:'edit',toMiniNav:'编辑 监测点耕地质量数据',id:rowData.id}})
        },
        //新增
        add(){
         //   sessionStorage.setItem('currentMenuItem','farmlandQualityDataDetail'); //记录路由
            this.$router.push({path:'/farmlandQualityDataDetail',query:{type:'add',toMiniNav:'新增 监测点耕地质量数据'}})
        }
    }
}
</script>
<style scoped lang="scss">

</style>