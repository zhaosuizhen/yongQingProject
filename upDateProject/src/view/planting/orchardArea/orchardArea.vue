<template>
    <!---果园面积-->
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
                miniNav:'果园面积',
                qualityInspectionelem:[
                    {labelName:'年份', prop:'dataYear'},
                    {labelName:'乡镇', prop:'townShip'},
                    {labelName:'总计', prop:'sumArea'},
                    {labelName:'苹果(亩)', prop:'appleArea'},
                    {labelName:'梨(亩)', prop:'pearArea'},
                    {labelName:'葡萄(亩)', prop:'grapeArea'},
                    {labelName:'桃子(亩)', prop:'peachArea'},
                ]
            }
        },
        components:{
            'Table-list':TableList
        },
        methods:{
            //查看详情
            goDetail(rowData){
                this.$router.push({path:'/orchardAreaDetail',query:{type:'detail',toMiniNav:'查看 果园面积',id:rowData.id}})
            },
            //编辑
            goEdit(rowData){
                this.$router.push({path:'/orchardAreaDetail',query:{type:'edit',toMiniNav:'编辑 果园面积',id:rowData.id}})
            },
            //新增
            add(){
                this.$router.push({path:'/orchardAreaDetail',query:{type:'add',toMiniNav:'新增 果园面积'}})
            }
        }
    }
</script>
<style scoped lang="scss">

</style>