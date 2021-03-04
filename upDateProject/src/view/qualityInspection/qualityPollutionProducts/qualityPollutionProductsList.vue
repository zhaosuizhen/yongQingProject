<template>
    <!--质检办---无公害企业产品数据列表-->
    <div id="qualityPollutionProductsList " class="pageContent">
        <section class="sectionContent">
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
            miniNav:'无公害企业产品数据',
            qualityInspectionelem:[
                {width:200,labelName:'企业名称',prop: 'enterpriseName'},
                {labelName:'乡镇', prop:'township'},
                {labelName:'行业', prop:'industry'},
                {labelName:'联系电话',prop:'phone'},
                {labelName:'规模(公顷)',prop:'scale'},
                {labelName:'产量(吨)',prop:'yield'},
                {labelName:'开始时间',prop:'startTime'},
                {labelName:'结束时间',prop:'endTime'}
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
          //  sessionStorage.setItem('currentMenuItem','qualityPollutionProductsDetail'); //记录路由
            this.$router.push({path:'/qualityPollutionProductsDetail',query:{type:'detail',toMiniNav:'查看 无公害企业产品信息',id:rowData.id}})
        },
        //编辑
        goEdit(rowData){
          // sessionStorage.setItem('currentMenuItem','qualityPollutionProductsDetail'); //记录路由
            this.$router.push({path:'/qualityPollutionProductsDetail',query:{type:'edit',toMiniNav:'编辑 无公害企业产品信息',id:rowData.id}})
        },
        //新增
        add(){
            //sessionStorage.setItem('currentMenuItem','qualityPollutionProductsDetail'); //记录路由
            this.$router.push({path:'/qualityPollutionProductsDetail',query:{type:'add',toMiniNav:'新增 无公害企业产品信息'}})
        }
    }
}
</script>
<style scoped lang="scss">

</style>