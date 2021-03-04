<template>
  <!--植保站---虫鼠害发生和防治面积列表-->
 <div class="pageContent">
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
    name:'occurrenceAndAreaList',
    data() {
        return {
            miniNav:'虫鼠害发生和防治面积', 
            qualityInspectionelem:[
                {labelName:'乡镇', prop:'township'},
                {labelName:'年份',prop: 'dataYear',},
                {labelName:'发生面积（亩）',prop:'fhxxtj'},
                {labelName:'防治面积（亩）',prop:'ntshtj'},
                {labelName:'挽回损失（吨）',prop:'chzl'},
                {labelName:'实际损失（吨）',prop:' ntlhhj'}
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
           //// sessionStorage.setItem('currentMenuItem','occurrenceAndAreaDetail'); //记录路由
            this.$router.push({path:'/occurrenceAndAreaDetail',query:{type:'detail',toMiniNav:'查看 虫鼠害发生和防治面积',year:rowData.dataYear}})
        },
        //编辑
        goEdit(rowData){
            //sessionStorage.setItem('currentMenuItem','occurrenceAndAreaDetail'); //记录路由
            this.$router.push({path:'/occurrenceAndAreaDetail',query:{type:'edit',toMiniNav:'编辑 虫鼠害发生和防治面积',year:rowData.dataYear}})
        },
        //新增
        add(){
           // sessionStorage.setItem('currentMenuItem','occurrenceAndAreaDetail'); //记录路由
            this.$router.push({path:'/occurrenceAndAreaDetail',query:{type:'add',toMiniNav:'新增 虫鼠害发生和防治面积'}})
        },
    }
}
</script>
<style scoped lang="scss">
    .occurrenceAndAreaList{
        height: 100%;
    }
</style>