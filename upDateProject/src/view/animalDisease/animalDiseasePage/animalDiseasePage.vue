<template>
  <!--动物疫病预防控制中心---动物疫病防控-->
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
            miniNav:'动物疫病防控',
            qualityInspectionelem:[
                {width:200,labelName:'年份', prop:'dataYear'},
                {labelName:'牛羊口蹄疫疫苗（万毫升）', prop:'vaccineSheep'},
                {labelName:'猪瘟疫苗（万头份）',prop: 'vaccineSwine'},
                {labelName:'鸡新城疫苗（万羽份）',prop:'vaccineChicken'},
                {labelName:'禽流感疫苗（万毫升）',prop:'vaccineInfluenza'},
                {labelName:'狂犬病疫苗（万头份）',prop:'vaccineRabies'},
                {labelName:'小反刍兽疫疫苗（万头份）',prop:'vaccineSmall'},
                {labelName:'消毒药（万公斤）',prop:'disinfectant'}
            ]
        }
    },
    components:{
        'Table-list':TableList
    },
    methods:{
        //查看详情
        goDetail(rowData){
           if(this.$route.path.indexOf("/animalDiseasePage") >= 0){
               this.$router.push({path:'/animalDiseasePageDetail',query:{type:'detail',toMiniNav:'查看 动物疫病防控',id:rowData.id}})
           }else{
               this.$router.push({path:'/animalDiseasePageDetail',query:{type:'detail',toMiniNav:'查看 动物疫病防控',id:rowData.id}})
           }
            
        },
        //编辑
        goEdit(rowData){
           if(this.$route.path.indexOf("/animalDiseasePage") >= 0){
               this.$router.push({path:'/animalDiseasePageDetail',query:{type:'edit',toMiniNav:'编辑 动物疫病防控',id:rowData.id}})
           }else{
               this.$router.push({path:'/animalDiseasePageDetail',query:{type:'edit',toMiniNav:'编辑 动物疫病防控',id:rowData.id}})
           }
            
        },
        //新增
        add(){
            if(this.$route.path.indexOf("/animalDiseasePage") >= 0){
               this.$router.push({path:'/animalDiseasePageDetail',query:{type:'add',toMiniNav:'新增 动物疫病防控'}})
           }else{
               this.$router.push({path:'/animalDiseasePageDetail',query:{type:'add',toMiniNav:'新增 动物疫病防控'}})
           }
        }
    }
}
</script>
<style scoped lang="scss">

</style>