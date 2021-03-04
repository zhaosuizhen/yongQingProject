<template>
  <!--统计局---农作物播种面积-->
 <div class="statistTotalValue pageContent">
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
    name:'doCropSownArea',
    data() {
        return {
            miniNav:'农林牧渔业总产值',
            qualityInspectionelem:[
                {labelName:'年份',prop: 'dataYear'},
                {width:120,labelName:'农林牧渔业总产值', prop:'nlmyfwy'},
                {width:120,labelName:'农业(万元)',prop:'agriculture'},
                {labelName:'林业(万元)',prop:'forestry'},
                {labelName:'牧业(万元)',prop:'animal'},
                {labelName:'渔业(万元)',prop:'fisheries'},
                {labelName:'农林牧渔服务业',prop:'nlmyfwy'},
                {labelName:'乡镇', prop:'township'}
            ]
        }
    },
    components:{
        'Table-list':TableList
    },
    methods:{
        //查看详情
        goDetail(rowData){
            //sessionStorage.setItem('currentMenuItem','statistTotalValueDetail'); //记录路由
            this.$router.push({path:'/statistTotalValueDetail',query:{type:'detail',toMiniNav:'查看 农林牧渔业总产值',id:rowData.id}})
        },
        //编辑
        goEdit(rowData){
            //sessionStorage.setItem('currentMenuItem','statistTotalValueDetail'); //记录路由
            this.$router.push({path:'/statistTotalValueDetail',query:{type:'edit',toMiniNav:'编辑 农林牧渔业总产值',id:rowData.id}})
        },
        //新增
        add(){
           // sessionStorage.setItem('currentMenuItem','statistTotalValueDetail'); //记录路由
            this.$router.push({path:'/statistTotalValueDetail',query:{type:'add',toMiniNav:'新增 农林牧渔业总产值'}})
        }
    }
}
</script>
<style scoped lang="scss">

</style>