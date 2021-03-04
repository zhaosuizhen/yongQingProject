<template>
  <!--质检办——有机食品企业产品数据列表页-->
    <div class="qualityOrganicProductsList pageContent">
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
    name:'qualityOrganicProductsList',
    data() {
        return {
            miniNav:'有机食品企业产品数据',
            qualityInspectionelem:[
                {width:200,labelName:'企业名称',prop: 'enterpriseName',},
                {labelName:'乡镇', prop:'township'},
                {labelName:'企业类型', prop:'enterpriseType'},
                {labelName:'企业品牌',prop:'make'},
                {labelName:'企业联系人',prop:'contact'},
                {width:150,labelName:'企业电话',prop:'phone'},
                {labelName:'所有品种',prop:'varieties'},
                {width:150,labelName:'认证开始时间',prop:'startTime'},
                {width:150,labelName:'认证结束时间',prop:'endTime'}
            ],
        }
    },
    components:{
        'Table-list':TableList
    },
    methods:{
        //查看详情
        goDetail(rowData){
           // sessionStorage.setItem('currentMenuItem','qualityOrganicProductsDetail'); //记录路由
            this.$router.push({path:'/qualityOrganicProductsDetail',query:{type:'detail',toMiniNav:'查看 有机食品企业信息',id:rowData.id}})
        },
        //编辑
        goEdit(rowData){
           // sessionStorage.setItem('currentMenuItem','qualityOrganicProductsDetail'); //记录路由
            this.$router.push({path:'/qualityOrganicProductsDetail',query:{type:'edit',toMiniNav:'编辑 有机食品企业信息',id:rowData.id}})
        },
        handleDelItem(id){
            console.log('删除',id)
        },
        //新增
        add(){
           // sessionStorage.setItem('currentMenuItem','qualityOrganicProductsDetail'); //记录路由
            this.$router.push({path:'/qualityOrganicProductsDetail',query:{type:'add',toMiniNav:'新增 有机食品企业信息'}})
        }
    }
}
</script>
<style scoped lang="scss">

</style>