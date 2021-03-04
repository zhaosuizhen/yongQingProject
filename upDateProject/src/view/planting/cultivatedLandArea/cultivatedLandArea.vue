<template>
    <!---耕地面积-->
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
                miniNav:'耕地面积',
                qualityInspectionelem:[
                    {labelName:'年份', prop:'dataYear'},
                    {labelName:'总计（公顷）', prop:'sumArea'}
                ]
            }
        },
        components:{
            'Table-list':TableList
        },
        methods:{
            //查看详情
            goDetail(rowData){
                this.$router.push({path:'/cultivatedLandAreaDetail',query:{type:'detail',toMiniNav:'查看 耕地面积',id:rowData.id}})
            },
            //编辑
            goEdit(rowData){
                this.$router.push({path:'/cultivatedLandAreaDetail',query:{type:'edit',toMiniNav:'编辑 耕地面积',id:rowData.id}})
            },
            //新增
            add(){
                this.$router.push({path:'/cultivatedLandAreaDetail',query:{type:'add',toMiniNav:'新增 耕地面积'}})
            }
        }
    }
</script>
<style scoped lang="scss">

</style>