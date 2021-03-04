<template>
    <!---林业生产-->
    <div class="doAgriculturalOutputValue pageContent">
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
        name:'doAgriculturalOutputValue',
        data() {
            return {
                miniNav:'林业生产',
                qualityInspectionelem:[
                    {labelName:'年份', prop:'dataYear'},
                    {labelName:'乡镇', prop:'townShip'},
                    {labelName:'总计', prop:'sumCount'},
                    {labelName:'经济林', prop:'economicForest'},
                    {labelName:'用材林', prop:'timberForest'},
                    {labelName:'零星植树', prop:'sporadicTreePlanting'},
                    {labelName:'育苗面积', prop:'seedlingArea'},
                ]
            }
        },
        components:{
            'Table-list':TableList
        },
        methods:{
            //查看详情
            goDetail(rowData){
                this.$router.push({path:'/forestryProductDetail',query:{type:'detail',toMiniNav:'查看 林业生产',id:rowData.id}})
            },
            //编辑
            goEdit(rowData){
                this.$router.push({path:'/forestryProductDetail',query:{type:'edit',toMiniNav:'编辑 林业生产',id:rowData.id}})
            },
            //新增
            add(){
                this.$router.push({path:'/forestryProductDetail',query:{type:'add',toMiniNav:'新增 林业生产'}})
            }
        }
    }
</script>
<style scoped lang="scss">

</style>