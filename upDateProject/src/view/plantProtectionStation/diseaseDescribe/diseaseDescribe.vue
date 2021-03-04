<template>
  <!--产业办---病害描述-->
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
            miniNav:'病害描述',
            qualityInspectionelem:[
                {labelName:'病害名称', prop:'diseaseName'},
                {labelName:'品种', prop:'cropName'},
                {labelName:'病害类型', prop:'diseaseType'},
                {labelName:'发病部位', prop:'parts'},
                {width:700,labelName:'病害描述',prop: 'content'}
            ]
        }
    },
    components:{
        'Table-list':TableList
    },
    methods:{
        //查看详情
        goDetail(rowData){
           if(this.$route.path.indexOf("/diseaseDescribe") >= 0){
               this.$router.push({path:'/diseaseDescribeDetail',query:{type:'detail',toMiniNav:'查看 病害描述',id:rowData.id}})
           }else{
               this.$router.push({path:'/diseaseDescribeDetail',query:{type:'detail',toMiniNav:'查看 病害描述',id:rowData.id}})
           }
            
        },
        //编辑
        goEdit(rowData){
           if(this.$route.path.indexOf("/diseaseDescribe") >= 0){
               this.$router.push({path:'/diseaseDescribeDetail',query:{type:'edit',toMiniNav:'编辑 病害描述',id:rowData.id}})
           }else{
               this.$router.push({path:'/diseaseDescribeDetail',query:{type:'edit',toMiniNav:'编辑 病害描述',id:rowData.id}})
           }
            
        },
        //新增
        add(){
            if(this.$route.path.indexOf("/diseaseDescribe") >= 0){
               this.$router.push({path:'/diseaseDescribeDetail',query:{type:'add',toMiniNav:'新增 病害描述'}})
           }else{
               this.$router.push({path:'/diseaseDescribeDetail',query:{type:'add',toMiniNav:'新增 病害描述'}})
           }
        }
    }
}
</script>
<style scoped lang="scss">

</style>