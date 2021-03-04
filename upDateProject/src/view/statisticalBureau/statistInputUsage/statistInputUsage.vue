<template>
    <!--统计局---投入品使用情况-->
    <div id="statistInputUsage " class="pageContent">
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
    data() {
        return {
            miniNav:'投入品使用情况',
            qualityInspectionelem:[
                {labelName:'年份', prop:'dataYear'},
                {labelName:'化肥施用量实物量总计（吨）',prop: 'hfsylsw'},
                {labelName:'农村用电量(万千瓦时)(万千瓦时)',prop:'ncydl'},
                {labelName:'农用塑料薄膜使用量（吨）',prop:'nyslbmsyl'},
                {labelName:'农用柴油使用量（吨）',prop:'nycysyl'},
                {labelName:'农药使用量（吨）',prop:'nysyl'},
                {labelName:'乡镇', prop:'township'}
            ],
        }
    },
    components:{
        'Table-list':TableList
    },
    methods:{
        //查看详情
        goDetail(rowData){
           // sessionStorage.setItem('currentMenuItem','statistInputUsageDetail'); //记录路由
            this.$router.push({path:'/statistInputUsageDetail',query:{type:'detail',toMiniNav:'查看 投入品使用情况',id:rowData.id}})
        },
        //编辑
        goEdit(rowData){
           // sessionStorage.setItem('currentMenuItem','statistInputUsageDetail'); //记录路由
            this.$router.push({path:'/statistInputUsageDetail',query:{type:'edit',toMiniNav:'编辑 投入品使用情况',id:rowData.id}})
        },
        //新增
        add(){
           // sessionStorage.setItem('currentMenuItem','statistInputUsageDetail'); //记录路由
            this.$router.push({path:'/statistInputUsageDetail',query:{type:'add',toMiniNav:'新增 投入品使用情况'}})
        }
    }
}
</script>
<style scoped lang="scss">

</style>