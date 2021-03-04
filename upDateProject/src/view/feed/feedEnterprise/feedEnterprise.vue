<template>
    <!---饲料企业-->
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
                miniNav:'饲料企业',
                qualityInspectionelem:[
                    {labelName:'公司名称', prop:'enterpriseName'},
                    {labelName:'法定代表人', prop:'legalRepresentative'},
                    {labelName:'联系电话', prop:'phone'},
                    {labelName:'注册资本', prop:'registeredCapital'},
                    {labelName:'生产地址', prop:'address'},
                    {labelName:'开始时间', prop:'certificateValidityStartTime'},
                    {labelName:'结束时间', prop:'certificateValidityEndTime'},
                ]
            }
        },
        components:{
            'Table-list':TableList
        },
        methods:{
            //查看详情
            goDetail(rowData){
                this.$router.push({path:'/feedEnterpriseDetail',query:{type:'detail',toMiniNav:'查看 饲料企业',id:rowData.id}})
            },
            //编辑
            goEdit(rowData){
                this.$router.push({path:'/feedEnterpriseDetail',query:{type:'edit',toMiniNav:'编辑 饲料企业',id:rowData.id}})
            },
            //新增
            add(){
                this.$router.push({path:'/feedEnterpriseDetail',query:{type:'add',toMiniNav:'新增 饲料企业'}})
            }
        }
    }
</script>
<style scoped lang="scss">

</style>