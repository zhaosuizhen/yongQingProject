<template>
  <!--产业办---生猪定点屠宰场-->
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
            miniNav:'生猪定点屠宰场',
            qualityInspectionelem:[
                {width:200,labelName:'屠宰企业名称', prop:'houseName'},
                {labelName:'法定代表人',prop: 'legalPerson'},
                {labelName:'联系电话',prop:'phone'},
                {labelName:'经营方式',prop:'businessType'},
                {labelName:'详细地址',prop:'address'}
            ]
        }
    },
    components:{
        'Table-list':TableList
    },
    methods:{
        //查看详情
        goDetail(rowData){
           if(this.$route.path.indexOf("/rearBusinessEntity") >= 0){
               this.$router.push({path:'/pigSlaughterhouseDetail',query:{type:'detail',toMiniNav:'查看 生猪定点屠宰场',id:rowData.id}})
           }else{
               this.$router.push({path:'/pigSlaughterhouseDetail',query:{type:'detail',toMiniNav:'查看 生猪定点屠宰场',id:rowData.id}})
           }
            
        },
        //编辑
        goEdit(rowData){
           if(this.$route.path.indexOf("/rearBusinessEntity") >= 0){
               this.$router.push({path:'/pigSlaughterhouseDetail',query:{type:'edit',toMiniNav:'编辑 生猪定点屠宰场',id:rowData.id}})
           }else{
               this.$router.push({path:'/pigSlaughterhouseDetail',query:{type:'edit',toMiniNav:'编辑 生猪定点屠宰场',id:rowData.id}})
           }
            
        },
        //新增
        add(){
            if(this.$route.path.indexOf("/rearBusinessEntity") >= 0){
               this.$router.push({path:'/pigSlaughterhouseDetail',query:{type:'add',toMiniNav:'新增 生猪定点屠宰场'}})
           }else{
               this.$router.push({path:'/pigSlaughterhouseDetail',query:{type:'add',toMiniNav:'新增 生猪定点屠宰场'}})
           }
        }
    }
}
</script>
<style scoped lang="scss">

</style>