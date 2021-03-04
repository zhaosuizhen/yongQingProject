<template>
  <!--商业局--农产品交易价格数据列表页-->
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
            miniNav:'农产品交易价格数据',
            qualityInspectionelem:[
                {width:200,labelName:'市场名称', prop:'marketId'},
                {width:220,labelName:'品种',prop: 'product',},
                {labelName:'最高价格（公斤/元）', prop:'maxPrice'},
                {labelName:'最低价格（公斤/元）',prop:'minPrice'},
                {labelName:'平均价格（公斤/元）',prop:'avgPrice'},
                {labelName:'日期',prop:'pubDate'}
            ],
        }
    },
    components:{
        'Table-list':TableList
    },
    methods:{
        //查看详情
        goDetail(rowData){
           // sessionStorage.setItem('currentMenuItem','agriculturalPriceDataDetail'); //记录路由
            this.$router.push({path:'/agriculturalPriceDataDetail',query:{type:'detail',toMiniNav:'查看 农产品交易价格数据',id:rowData.id}})
        },
        //编辑
        goEdit(rowData){
           // sessionStorage.setItem('currentMenuItem','agriculturalPriceDataDetail'); //记录路由
            this.$router.push({path:'/agriculturalPriceDataDetail',query:{type:'edit',toMiniNav:'编辑 农产品交易价格数据',id:rowData.id}})
        },
        //新增
        add(){
            //sessionStorage.setItem('currentMenuItem','agriculturalPriceDataDetail'); //记录路由
            this.$router.push({path:'/agriculturalPriceDataDetail',query:{type:'add',toMiniNav:'新增 农产品交易价格数据'}})
        },
    }
}
</script>
<style scoped lang="scss">

</style>