<template>
  <!--统计局--农机拥有量列表页-->
    <div class="statistMachineryList pageContent">
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
    name:'statistMachineryList',
    data() {
        return {
            miniNav:'农机拥有量',
            qualityInspectionelem:[
                {width:240, labelName:'指标名称（如拖拉机、插秧机、水泵、联合收割机、植保机械）',prop: 'machineName'},
                {labelName:'数量(个)', prop:'machineNum'},
                {labelName:'年份',prop: 'dataYear',},
                {labelName:'乡镇', prop:'township'},
                {labelName:'上报日期',prop:'createTime'}
            ],
        }
    },
    components:{
        'Table-list':TableList
    },
    methods:{
        //详情，新增，编辑 使用农机局---农机拥有量的相同页面
        //查看详情  
        goDetail(rowData){
            //sessionStorage.setItem('currentMenuItem','statistMachineryListDetail'); //记录路由
            this.$router.push({path:'/statistMachineryListDetail',query:{type:'detail',toMiniNav:'查看 农机拥有量',id:rowData.id}})
        },
        //编辑
        goEdit(rowData){
           // sessionStorage.setItem('currentMenuItem','statistMachineryListDetail'); //记录路由
            this.$router.push({path:'/statistMachineryListDetail',query:{type:'edit',toMiniNav:'编辑 农机拥有量',id:rowData.id}})
        },
        //新增
        add(){
            //sessionStorage.setItem('currentMenuItem','statistMachineryListDetail'); //记录路由
            this.$router.push({path:'/statistMachineryListDetail',query:{type:'add',toMiniNav:'新增 农机拥有量'}})
        }
    }
}
</script>
<style scoped lang="scss">

</style>