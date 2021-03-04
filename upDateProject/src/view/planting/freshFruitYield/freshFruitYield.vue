<template>
    <!---鲜果产量-->
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
                miniNav:'鲜果产量',
                qualityInspectionelem:[
                    {labelName:'年份', prop:'dataYear'},
                    {labelName:'乡镇', prop:'townShip'},
                    {labelName:'总计', prop:'sumYield'},
                    {labelName:'苹果(吨)', prop:'appleYield'},
                    {labelName:'梨(吨)', prop:'pearYield'},
                    {labelName:'葡萄(吨)', prop:'grapeYield'},
                    {labelName:'桃子(吨)', prop:'peachYield'},
                    {labelName:'杏(吨)', prop:'apricotYield'},
                    {labelName:'其他(吨)', prop:'otherYield'},
                ]
            }
        },
        components:{
            'Table-list':TableList
        },
        methods:{
            //查看详情
            goDetail(rowData){
                this.$router.push({path:'/freshFruitYieldDetail',query:{type:'detail',toMiniNav:'查看 鲜果产量',id:rowData.id}})
            },
            //编辑
            goEdit(rowData){
                this.$router.push({path:'/freshFruitYieldDetail',query:{type:'edit',toMiniNav:'编辑 鲜果产量',id:rowData.id}})
            },
            //新增
            add(){
                this.$router.push({path:'/freshFruitYieldDetail',query:{type:'add',toMiniNav:'新增 鲜果产量'}})
            }
        }
    }
</script>
<style scoped lang="scss">

</style>