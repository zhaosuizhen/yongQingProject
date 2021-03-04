<template>
  <!--产业办---兽医站数据-->
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
            miniNav:'兽医站数据',
            qualityInspectionelem:[
                {width:200,labelName:'兽医站名称', prop:'vetName'},
                {labelName:'联系人', prop:'legalPerson'},
                {labelName:'联系电话',prop: 'phone'},
                {labelName:'详细地址',prop:'address'},
                {labelName:'单位人数',prop:'personCount'},
                {labelName:'所属乡镇',prop:'township'},
                {labelName:'备案时间',prop:'updateTime'}
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
               this.$router.push({path:'/veterinaryStationDetail',query:{type:'detail',toMiniNav:'查看 兽医站数据',id:rowData.id}})
           }else{
               this.$router.push({path:'/veterinaryStationDetail',query:{type:'detail',toMiniNav:'查看 兽医站数据',id:rowData.id}})
           }
            
        },
        //编辑
        goEdit(rowData){
           if(this.$route.path.indexOf("/rearBusinessEntity") >= 0){
               this.$router.push({path:'/veterinaryStationDetail',query:{type:'edit',toMiniNav:'编辑 兽医站数据',id:rowData.id}})
           }else{
               this.$router.push({path:'/veterinaryStationDetail',query:{type:'edit',toMiniNav:'编辑 兽医站数据',id:rowData.id}})
           }
            
        },
        //新增
        add(){
            if(this.$route.path.indexOf("/rearBusinessEntity") >= 0){
               this.$router.push({path:'/veterinaryStationDetail',query:{type:'add',toMiniNav:'新增 兽医站数据'}})
           }else{
               this.$router.push({path:'/veterinaryStationDetail',query:{type:'add',toMiniNav:'新增 兽医站数据'}})
           }
        }
    }
}
</script>
<style scoped lang="scss">

</style>