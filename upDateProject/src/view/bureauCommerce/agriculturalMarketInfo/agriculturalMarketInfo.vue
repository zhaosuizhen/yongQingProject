<template>
  <!--商业局--农产品批发市场信息列表页-->
    <div class="agriculturalMarketInfo pageContent">
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
    name:'agriculturalMarketInfo',
    data() {
        return {
            miniNav:'农产品批发市场信息',
            qualityInspectionelem:[
                {width:180,labelName:'市场名称', prop:'marketName'},
                {labelName:'主营特色',prop: 'marketTrait',},
                {labelName:'联系人', prop:'contacts'},
                {width:120,labelName:'电话',prop:'phone'},
                {labelName:'乡镇',prop:'township'},
                {width:200,labelName:'地址',prop:'address'},
                {labelName:'上报日期',prop:'createTime'}
            ],
        }
    },
    components:{
        'Table-list':TableList
    },
    methods:{
        //查看详情
        goDetail(rowData){
         //   sessionStorage.setItem('currentMenuItem','agriculturalMarketInfoDetail'); //记录路由
            this.$router.push({path:'/agriculturalMarketInfoDetail',query:{type:'detail',toMiniNav:'查看 农产品批发市场信息',id:rowData.id}})
        },
        //编辑
        goEdit(rowData){
           // sessionStorage.setItem('currentMenuItem','agriculturalMarketInfoDetail'); //记录路由
            this.$router.push({path:'/agriculturalMarketInfoDetail',query:{type:'edit',toMiniNav:'编辑 农产品批发市场信息',id:rowData.id}})
        },
        //新增
        add(){
            //sessionStorage.setItem('currentMenuItem','agriculturalMarketInfoDetail'); //记录路由
            this.$router.push({path:'/agriculturalMarketInfoDetail',query:{type:'add',toMiniNav:'新增 农产品批发市场信息'}})
        },
    }
}
</script>
<style scoped lang="scss">

</style>