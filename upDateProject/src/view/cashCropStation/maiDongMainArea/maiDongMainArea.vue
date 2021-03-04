<template>
  <!--产业办---麦冬主产区面积-->
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
            miniNav:'麦冬主产区面积',
            qualityInspectionelem:[
                {labelName:'年份', prop:'dataYear'},
                {labelName:'乡镇',prop: 'township'},
                {labelName:'种植面积（亩）', prop:'areas'}
            ]
        }
    },
    components:{
        'Table-list':TableList
    },
    methods:{
        //查看详情
        goDetail(rowData){
           if(this.$route.path.indexOf("/maiDongMainArea") >= 0){
               this.$router.push({path:'/maiDongMainAreaDetail',query:{type:'detail',toMiniNav:'查看 麦冬主产区面积',id:rowData.id}})
           }else{
               this.$router.push({path:'/maiDongMainAreaDetail',query:{type:'detail',toMiniNav:'查看 麦冬主产区面积',id:rowData.id}})
           }
            
        },
        //编辑
        goEdit(rowData){
           if(this.$route.path.indexOf("/maiDongMainArea") >= 0){
               this.$router.push({path:'/maiDongMainAreaDetail',query:{type:'edit',toMiniNav:'编辑 麦冬主产区面积',id:rowData.id}})
           }else{
               this.$router.push({path:'/maiDongMainAreaDetail',query:{type:'edit',toMiniNav:'编辑 麦冬主产区面积',id:rowData.id}})
           }
            
        },
        //新增
        add(){
            if(this.$route.path.indexOf("/maiDongMainArea") >= 0){
               this.$router.push({path:'/maiDongMainAreaDetail',query:{type:'add',toMiniNav:'新增 麦冬主产区面积'}})
           }else{
               this.$router.push({path:'/maiDongMainAreaDetail',query:{type:'add',toMiniNav:'新增 麦冬主产区面积'}})
           }
        }
    }
}
</script>
<style scoped lang="scss">

</style>