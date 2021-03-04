<template>
  <!--经作站---麦冬加工产品-->
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
            miniNav:'麦冬加工产品',
            qualityInspectionelem:[
                {width:200,labelName:'年份', prop:'years'},
                {labelName:'产品名称', prop:'productName'},
                {labelName:'产品简介',prop: 'introduction'}
            ]
        }
    },
    components:{
        'Table-list':TableList
    },
    methods:{
        //查看详情
        goDetail(rowData){
           if(this.$route.path.indexOf("/maiDongProducts") >= 0){
               this.$router.push({path:'/maiDongProductsDetail',query:{type:'detail',toMiniNav:'查看 麦冬加工产品',id:rowData.id}})
           }else{
               this.$router.push({path:'/maiDongProductsDetail',query:{type:'detail',toMiniNav:'查看 麦冬加工产品',id:rowData.id}})
           }
            
        },
        //编辑
        goEdit(rowData){
           if(this.$route.path.indexOf("/maiDongProducts") >= 0){
               this.$router.push({path:'/maiDongProductsDetail',query:{type:'edit',toMiniNav:'编辑 麦冬加工产品',id:rowData.id}})
           }else{
               this.$router.push({path:'/maiDongProductsDetail',query:{type:'edit',toMiniNav:'编辑 麦冬加工产品',id:rowData.id}})
           }
            
        },
        //新增
        add(){
            if(this.$route.path.indexOf("/maiDongProducts") >= 0){
               this.$router.push({path:'/maiDongProductsDetail',query:{type:'add',toMiniNav:'新增 麦冬加工产品'}})
           }else{
               this.$router.push({path:'/maiDongProductsDetail',query:{type:'add',toMiniNav:'新增 麦冬加工产品'}})
           }
        }
    }
}
</script>
<style scoped lang="scss">

</style>