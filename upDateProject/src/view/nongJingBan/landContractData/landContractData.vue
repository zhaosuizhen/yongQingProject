<template>
  <!--农经办---土地承包数据列表-->
 <div class="landContractData pageContent">
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
    name:'landContractData',
    data() {
        return {
            miniNav:'土地承包数据', 
            qualityInspectionelem:[
                {labelName:'乡镇', prop:'township'},
                {labelName:'年份',prop: 'dataYear',},
                {width:180,labelName:'权属单位名称', prop:'affiliatedUnit'},
                {labelName:'发包方数量(个)',prop:'contractingOut'},
                {labelName:'颁发证书数量(个)',prop:'certificatesNum'},
                {labelName:'承包地块总数(块)',prop:'contractNum'},
                {labelName:'承包地块总面积(亩)',prop:'contractArea'},
                {width:100,labelName:'非承包地块总数',prop:'noContractNum'},
                {labelName:'非承包地块总面积(亩)',prop:'noContractArea'}
            ],
            dataList:{}
        }
    },
    components:{
        'Table-list':TableList
    },
    methods:{
        //查看详情
        goDetail(rowData){
           // sessionStorage.setItem('currentMenuItem','landContractDataDetail'); //记录路由
            this.$router.push({path:'/landContractDataDetail',query:{type:'detail',toMiniNav:'查看 土地承包数据',id:rowData.id}})
        },
        //编辑
        goEdit(rowData){
           // sessionStorage.setItem('currentMenuItem','landContractDataDetail'); //记录路由
            this.$router.push({path:'/landContractDataDetail',query:{type:'edit',toMiniNav:'编辑 土地承包数据',id:rowData.id}})
        },
        //新增
        add(){
            //sessionStorage.setItem('currentMenuItem','landContractDataDetail'); //记录路由
            this.$router.push({path:'/landContractDataDetail',query:{type:'add',toMiniNav:'新增 土地承包数据'}})
        },
    }
}
</script>
<style scoped lang="scss">

</style>