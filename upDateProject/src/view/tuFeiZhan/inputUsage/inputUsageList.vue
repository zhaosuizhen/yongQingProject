<template>
    <!--土肥站---投入品使用情况-->
    <div id="inputUsageList" class="pageContent">
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
    data() {
        return {
            miniNav:'投入品使用情况',
            qualityInspectionelem:[
                {labelName:'乡镇', prop:'township'},
                {labelName:'年份', prop:'industry'},
                {labelName:'化肥施用量（吨）',prop: 'hfsylsw'},
                {width:120, labelName:'农村用电量(万千瓦时)',prop:'ncydl'},
                {labelName:'塑料薄膜使用量（吨）',prop:'nyslbmsyl'},
                {labelName:'柴油使用量（吨）',prop:'nycysyl'},
                {labelName:'农药使用量（吨）',prop:'nysyl'}
            ],
        }
    },
    components:{
        'Table-list':TableList
    },
    methods:{
        //查看详情
        goDetail(rowData){
            //sessionStorage.setItem('currentMenuItem','inputUsageDetail'); //记录路由
            this.$router.push({path:'/inputUsageDetail',query:{type:'detail',toMiniNav:'查看 投入品使用情况',id:rowData.id}})
        },
        //编辑
        goEdit(rowData){
           // sessionStorage.setItem('currentMenuItem','inputUsageDetail'); //记录路由
            this.$router.push({path:'/inputUsageDetail',query:{type:'edit',toMiniNav:'编辑 投入品使用情况',id:rowData.id}})
        },
        //新增
        add(){
           // sessionStorage.setItem('currentMenuItem','inputUsageDetail'); //记录路由
            this.$router.push({path:'/inputUsageDetail',query:{type:'add',toMiniNav:'新增 投入品使用情况'}})
        }
    }
}
</script>
<style scoped lang="scss">

</style>