<template>
  <!--县委秘书办---新闻动态-->
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
            miniNav:'新闻动态',
            qualityInspectionelem:[
                {labelName:'文章标题', prop:'title'},
                {labelName:'文章来源', prop:'source'},
                {labelName:'类型',prop: 'dataType_num'},
                {labelName:'发布时间', prop:'releaseTime'},
                {labelName:'作者', prop:'author'},
                {labelName:'最后修改时间',prop: 'updateTime'}
            ]
        }
    },
    components:{
        'Table-list':TableList
    },
    methods:{
        //查看详情
        goDetail(rowData){
           if(this.$route.path.indexOf("/newsDynamic") >= 0){
               this.$router.push({path:'/newsDynamicDetail',query:{type:'detail',toMiniNav:'查看 新闻动态',id:rowData.id}})
           }else{
               this.$router.push({path:'/newsDynamicDetail',query:{type:'detail',toMiniNav:'查看 新闻动态',id:rowData.id}})
           }
            
        },
        //编辑
        goEdit(rowData){
           if(this.$route.path.indexOf("/newsDynamic") >= 0){
               this.$router.push({path:'/newsDynamicDetail',query:{type:'edit',toMiniNav:'编辑 新闻动态',id:rowData.id}})
           }else{
               this.$router.push({path:'/newsDynamicDetail',query:{type:'edit',toMiniNav:'编辑 新闻动态',id:rowData.id}})
           }
            
        },
        //新增
        add(){
            if(this.$route.path.indexOf("/newsDynamic") >= 0){
               this.$router.push({path:'/newsDynamicDetail',query:{type:'add',toMiniNav:'新增 新闻动态'}})
           }else{
               this.$router.push({path:'/newsDynamicDetail',query:{type:'add',toMiniNav:'新增 新闻动态'}})
           }
        }
    }
}
</script>
<style scoped lang="scss">

</style>