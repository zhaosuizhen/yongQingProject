<template>
  <!--经作站---麦冬经营主体-->
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
            miniNav:'麦冬经营主体',
            qualityInspectionelem:[
                {width:200,labelName:'经营主体名称', prop:'enterpriseName'},
                {labelName:'所属乡镇', prop:'township'},
                {labelName:'基地面积（亩）',prop: 'baseArea'},
                {labelName:'占地面积（亩）',prop:'landArea'},
                {labelName:'注册日期',prop:'establishTime'},
                {labelName:'详细地址',prop:'adress'}
            ]
        }
    },
    components:{
        'Table-list':TableList
    },
    methods:{
        //查看详情
        goDetail(rowData){
           if(this.$route.path.indexOf("/maiDongManagement") >= 0){
               this.$router.push({path:'/maiDongManagementDetail',query:{type:'detail',toMiniNav:'查看 麦冬经营主体',id:rowData.id}})
           }else{
               this.$router.push({path:'/maiDongManagementDetail',query:{type:'detail',toMiniNav:'查看 麦冬经营主体',id:rowData.id}})
           }
            
        },
        //编辑
        goEdit(rowData){
           if(this.$route.path.indexOf("/maiDongManagement") >= 0){
               this.$router.push({path:'/maiDongManagementDetail',query:{type:'edit',toMiniNav:'编辑 麦冬经营主体',id:rowData.id}})
           }else{
               this.$router.push({path:'/maiDongManagementDetail',query:{type:'edit',toMiniNav:'编辑 麦冬经营主体',id:rowData.id}})
           }
            
        },
        //新增
        add(){
            if(this.$route.path.indexOf("/maiDongManagement") >= 0){
               this.$router.push({path:'/maiDongManagementDetail',query:{type:'add',toMiniNav:'新增 麦冬经营主体'}})
           }else{
               this.$router.push({path:'/maiDongManagementDetail',query:{type:'add',toMiniNav:'新增 麦冬经营主体'}})
           }
        }
    }
}
</script>
<style scoped lang="scss">

</style>