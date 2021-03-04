<template>
  <!--农机局--农机拥有量列表页-->
    <div class="agriculturalMachineryShip pageContent">
        <section class="sectionContent-40">
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
    name:'agriculturalMachineryShip',
    data() {
        return {
            miniNav:'农机拥有量',
            qualityInspectionelem:[
                {labelName:'乡镇', prop:'township'},
                {labelName:'年份',prop: 'dataYear',},
                {labelName:'指标名称',prop: 'machineName'},
                {labelName:'数量（个）', prop:'machineNum'},
                {labelName:'上报日期',prop:'createTime'}
            ],
        }
    },
    components:{
        'Table-list':TableList
    },
    methods:{
        //查看详情
        goDetail(rowData){
           // sessionStorage.setItem('currentMenuItem','agriculturalMachineryShipDetail'); //记录路由
            this.$router.push({path:'/agriculturalMachineryShipDetail',query:{type:'detail',toMiniNav:'查看 农机拥有量',id:rowData.id}})
        },
        //编辑
        goEdit(rowData){
           // sessionStorage.setItem('currentMenuItem','agriculturalMachineryShipDetail'); //记录路由
            this.$router.push({path:'/agriculturalMachineryShipDetail',query:{type:'edit',toMiniNav:'编辑 农机拥有量',id:rowData.id}})
        },
        //新增
        add(){
           // sessionStorage.setItem('currentMenuItem','agriculturalMachineryShipDetail'); //记录路由
            this.$router.push({path:'/agriculturalMachineryShipDetail',query:{type:'add',toMiniNav:'新增 农机拥有量'}})
        }
    }
}
</script>
<style scoped lang="scss">

</style>