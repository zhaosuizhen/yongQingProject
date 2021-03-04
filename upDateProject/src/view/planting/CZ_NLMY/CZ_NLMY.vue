<template>
    <!---农林牧渔产值-->
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
                miniNav:'农林牧渔产值',
                qualityInspectionelem:[
                    {labelName:'年份', prop:'dataYear'},
                    {labelName:'农业（万元）', prop:'agriculture'},
                    {labelName:'林业（万元）', prop:'forestry'},
                    {labelName:'渔业（万元）', prop:'fisheries'},
                    {labelName:'牧业（万元）', prop:'animalHusbandry'},
                    {labelName:'服务业（万元）', prop:'serviceIndustry'},
                ]
            }
        },
        components:{
            'Table-list':TableList
        },
        methods:{
            //查看详情
            goDetail(rowData){
                this.$router.push({path:'/CZ_NLMYDetail',query:{type:'detail',toMiniNav:'查看 农林牧渔产值',id:rowData.id}})
            },
            //编辑
            goEdit(rowData){
                this.$router.push({path:'/CZ_NLMYDetail',query:{type:'edit',toMiniNav:'编辑 农林牧渔产值',id:rowData.id}})
            },
            //新增
            add(){
                this.$router.push({path:'/CZ_NLMYDetail',query:{type:'add',toMiniNav:'新增 农林牧渔产值'}})
            }
        }
    }
</script>
<style scoped lang="scss">

</style>