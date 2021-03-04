<template>
  <!--产业办---耕地地力等级-->
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
            miniNav:'耕地地力等级',
            qualityInspectionelem:[
                {labelName:'乡镇', prop:'township'},
                {labelName:'一级地',prop: 'grade1'},
                {labelName:'二级地', prop:'grade2'},
                {labelName:'三级地', prop:'grade3'},
                {labelName:'四级地',prop: 'grade4'},
                {labelName:'五级地',prop: 'grade5'},
                {labelName:'六级地',prop: 'grade6'},
                {labelName:'七级地',prop: 'grade7'},
                {labelName:'八级地',prop: 'grade8'},
                {labelName:'九级地',prop: 'grade9'},
                {labelName:'十级地',prop: 'grade10'}
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
               this.$router.push({path:'/landLevelDetail',query:{type:'detail',toMiniNav:'查看 耕地地力等级',id:rowData.id}})
           }else{
               this.$router.push({path:'/landLevelDetail',query:{type:'detail',toMiniNav:'查看 耕地地力等级',id:rowData.id}})
           }
            
        },
        //编辑
        goEdit(rowData){
           if(this.$route.path.indexOf("/rearBusinessEntity") >= 0){
               this.$router.push({path:'/landLevelDetail',query:{type:'edit',toMiniNav:'编辑 耕地地力等级',id:rowData.id}})
           }else{
               this.$router.push({path:'/landLevelDetail',query:{type:'edit',toMiniNav:'编辑 耕地地力等级',id:rowData.id}})
           }
            
        },
        //新增
        add(){
            if(this.$route.path.indexOf("/rearBusinessEntity") >= 0){
               this.$router.push({path:'/landLevelDetail',query:{type:'add',toMiniNav:'新增 耕地地力等级'}})
           }else{
               this.$router.push({path:'/landLevelDetail',query:{type:'add',toMiniNav:'新增 耕地地力等级'}})
           }
        }
    }
}
</script>
<style scoped lang="scss">

</style>