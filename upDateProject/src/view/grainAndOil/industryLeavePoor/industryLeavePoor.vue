<template>
  <!--粮油站---产业脱贫-->
 <div class="industrialBusinessEntity pageContent">
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
    name:'industrialBusinessEntity',
    data() {
        return {
            miniNav:'产业脱贫',
            qualityInspectionelem:[
                {width:200,labelName:'年份', prop:'years'},
                {labelName:'贫困户平均收入', prop:'income'},
                {labelName:'文字介绍',prop: 'describes'}
            ]
        }
    },
    components:{
        'Table-list':TableList
    },
    methods:{
        //查看详情
        goDetail(rowData){
            //sessionStorage.setItem('currentMenuItem','industryLeavePoorDetail'); //记录路由
            this.$router.push({path:'/industryLeavePoorDetail',query:{type:'detail',toMiniNav:'查看 产业脱贫',id:rowData.id}})
        },
        //编辑
        goEdit(rowData){
            //sessionStorage.setItem('currentMenuItem','industryLeavePoorDetail'); //记录路由
            this.$router.push({path:'/industryLeavePoorDetail',query:{type:'edit',toMiniNav:'编辑 产业脱贫',id:rowData.id}})
        },
        //新增
        add(){
            //sessionStorage.setItem('currentMenuItem','industryLeavePoorDetail'); //记录路由
            this.$router.push({path:'/industryLeavePoorDetail',query:{type:'add',toMiniNav:'新增 产业脱贫'}})
        }
    }
}
</script>
<style scoped lang="scss">

</style>