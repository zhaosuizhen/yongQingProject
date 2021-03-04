<template>
    <!--土肥站---监测点基本情况-->
    <div id="basicSituationOfPointsList" class="pageContent">
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
            miniNav:'监测点基本情况',
            qualityInspectionelem:[
                {labelName:'监测点名称',prop: 'testingPlaceName'},
                {labelName:'乡镇', prop:'township'},
                { width:200,labelName:'建点年份', prop:'industry'},
                {labelName:'种植制度',prop:'dxzhzd'},
                {labelName:'土类',prop:'soilType'},
                {labelName:'亚类',prop:'subsoil'},
                {labelName:'土属',prop:'soilGenus'},
                {labelName:'土种',prop:'soilSpecies'}
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
           // sessionStorage.setItem('currentMenuItem','basicSituationOfPointsDetail'); //记录路由
            this.$router.push({path:'/basicSituationOfPointsDetail',query:{type:'detail',toMiniNav:'查看 监测点基本情况',id:rowData.id}})
        },
        //编辑
        goEdit(rowData){
           // sessionStorage.setItem('currentMenuItem','basicSituationOfPointsDetail'); //记录路由
            this.$router.push({path:'/basicSituationOfPointsDetail',query:{type:'edit',toMiniNav:'编辑 监测点基本情况',id:rowData.id}})
        },
        //新增
        add(){
            //sessionStorage.setItem('currentMenuItem','basicSituationOfPointsDetail'); //记录路由
            this.$router.push({path:'/basicSituationOfPointsDetail',query:{type:'add',toMiniNav:'新增 监测点基本情况'}})
        }
    }
}
</script>
<style scoped lang="scss">

</style>