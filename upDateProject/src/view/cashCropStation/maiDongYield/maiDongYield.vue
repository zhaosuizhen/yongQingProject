<template>
  <!--经作站---麦冬产量-->
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
            miniNav:'麦冬产量',
            qualityInspectionelem:[
                {width:200,labelName:'年份', prop:'years'},
                {labelName:'鲜产量', prop:'freshYield'},
                {labelName:'干货产量',prop: 'dryYield'}
            ]
        }
    },
    components:{
        'Table-list':TableList
    },
    methods:{
        //查看详情
        goDetail(rowData){
           if(this.$route.path.indexOf("/maiDongYield") >= 0){
               this.$router.push({path:'/maiDongYieldDetail',query:{type:'detail',toMiniNav:'查看 麦冬产量',id:rowData.id}})
           }else{
               this.$router.push({path:'/maiDongYieldDetail',query:{type:'detail',toMiniNav:'查看 麦冬产量',id:rowData.id}})
           }
            
        },
        //编辑
        goEdit(rowData){
           if(this.$route.path.indexOf("/maiDongYield") >= 0){
               this.$router.push({path:'/maiDongYieldDetail',query:{type:'edit',toMiniNav:'编辑 麦冬产量',id:rowData.id}})
           }else{
               this.$router.push({path:'/maiDongYieldDetail',query:{type:'edit',toMiniNav:'编辑 麦冬产量',id:rowData.id}})
           }
            
        },
        //新增
        add(){
            if(this.$route.path.indexOf("/maiDongYield") >= 0){
               this.$router.push({path:'/maiDongYieldDetail',query:{type:'add',toMiniNav:'新增 麦冬产量'}})
           }else{
               this.$router.push({path:'/maiDongYieldDetail',query:{type:'add',toMiniNav:'新增 麦冬产量'}})
           }
        }
    }
}
</script>
<style scoped lang="scss">

</style>