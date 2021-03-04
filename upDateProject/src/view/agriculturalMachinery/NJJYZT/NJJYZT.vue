<template>
  <!--产业办---农机经营主体-->
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
            miniNav:'农机经营主体',
            qualityInspectionelem:[
                {width:200,labelName:'合作社名称', prop:'enterpriseName'},
                {labelName:'通讯地址', prop:'address'},
                {labelName:'邮政编码',prop: 'postCode'},
                {labelName:'法人姓名',prop:'legalPerson'},
                {labelName:'法人电话',prop:'phone'},
                {labelName:'成立日期',prop:'registeredDate'}
            ]
        }
    },
    components:{
        'Table-list':TableList
    },
    methods:{
        //查看详情
        goDetail(rowData){
           if(this.$route.path.indexOf("/NJJYZT") >= 0){
               this.$router.push({path:'/NJJYZTDetail',query:{type:'detail',toMiniNav:'查看 农机经营主体',id:rowData.id}})
           }else{
               this.$router.push({path:'/NJJYZTDetail',query:{type:'detail',toMiniNav:'查看 农机经营主体',id:rowData.id}})
           }
            
        },
        //编辑
        goEdit(rowData){
           if(this.$route.path.indexOf("/NJJYZT") >= 0){
               this.$router.push({path:'/NJJYZTDetail',query:{type:'edit',toMiniNav:'编辑 农机经营主体',id:rowData.id}})
           }else{
               this.$router.push({path:'/NJJYZTDetail',query:{type:'edit',toMiniNav:'编辑 农机经营主体',id:rowData.id}})
           }
            
        },
        //新增
        add(){
            if(this.$route.path.indexOf("/NJJYZT") >= 0){
               this.$router.push({path:'/NJJYZTDetail',query:{type:'add',toMiniNav:'新增 农机经营主体'}})
           }else{
               this.$router.push({path:'/NJJYZTDetail',query:{type:'add',toMiniNav:'新增 农机经营主体'}})
           }
        }
    }
}
</script>
<style scoped lang="scss">

</style>