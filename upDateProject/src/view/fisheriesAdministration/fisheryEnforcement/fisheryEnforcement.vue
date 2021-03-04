<template>
  <!--产业办---渔业产值-->
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
            miniNav:'渔业产值',
            qualityInspectionelem:[
                {labelName:'年份', prop:'years'},
                {labelName:'开展专项行动（次）',prop: 'zxxd'},
                {labelName:'出动执法人员（人次）', prop:'zfry'},
                {labelName:'出动车辆（台次）', prop:'cdcl'},
                {labelName:'查获渔获物（公斤）', prop:'chyhw'},
                {labelName:'收缴违法渔具（件）', prop:'wfyj'},
                {labelName:'行政案件（件）', prop:'xzaj'},
                {labelName:'行政处罚（人次）', prop:'xzcf'},
                {labelName:'罚款（元）', prop:'fk'},
                {labelName:'行政结案（件）', prop:'xzja'},
                {labelName:'移送案件（件）', prop:'ysaj'},
                {labelName:'刑事立案（件）', prop:'xsla'},
                {labelName:'刑事处罚（人次）', prop:'xscf'},
                {labelName:'刑事结案（件）', prop:'xsja'}
            ]
        }
    },
    components:{
        'Table-list':TableList
    },
    methods:{
        //查看详情
        goDetail(rowData){
           if(this.$route.path.indexOf("/fisheryEnforcement") >= 0){
               this.$router.push({path:'/fisheryEnforcementDetail',query:{type:'detail',toMiniNav:'查看 渔业产值',id:rowData.id}})
           }else{
               this.$router.push({path:'/fisheryEnforcementDetail',query:{type:'detail',toMiniNav:'查看 渔业产值',id:rowData.id}})
           }
            
        },
        //编辑
        goEdit(rowData){
           if(this.$route.path.indexOf("/fisheryEnforcement") >= 0){
               this.$router.push({path:'/fisheryEnforcementDetail',query:{type:'edit',toMiniNav:'编辑 渔业产值',id:rowData.id}})
           }else{
               this.$router.push({path:'/fisheryEnforcementDetail',query:{type:'edit',toMiniNav:'编辑 渔业产值',id:rowData.id}})
           }
            
        },
        //新增
        add(){
            if(this.$route.path.indexOf("/fisheryEnforcement") >= 0){
               this.$router.push({path:'/fisheryEnforcementDetail',query:{type:'add',toMiniNav:'新增 渔业产值'}})
           }else{
               this.$router.push({path:'/fisheryEnforcementDetail',query:{type:'add',toMiniNav:'新增 渔业产值'}})
           }
        }
    }
}
</script>
<style scoped lang="scss">

</style>