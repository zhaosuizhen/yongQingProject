<template>
  <!--经作站---乡镇果蔬标准化基地-->
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
            miniNav:'乡镇果蔬标准化基地',
            qualityInspectionelem:[
                {width:200,labelName:'基地名称', prop:'baseName'},
                {labelName:'所属乡镇', prop:'township'},
                {labelName:'种植品种',prop: 'plantType'},
                {labelName:'种植面积（亩）',prop:'plantArea'},
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
           if(this.$route.path.indexOf("/fruitAndVegetable") >= 0){
               this.$router.push({path:'/fruitAndVegetableDetail',query:{type:'detail',toMiniNav:'查看 乡镇果蔬标准化基地',id:rowData.id}})
           }else{
               this.$router.push({path:'/fruitAndVegetableDetail',query:{type:'detail',toMiniNav:'查看 乡镇果蔬标准化基地',id:rowData.id}})
           }
            
        },
        //编辑
        goEdit(rowData){
           if(this.$route.path.indexOf("/fruitAndVegetable") >= 0){
               this.$router.push({path:'/fruitAndVegetableDetail',query:{type:'edit',toMiniNav:'编辑 乡镇果蔬标准化基地',id:rowData.id}})
           }else{
               this.$router.push({path:'/fruitAndVegetableDetail',query:{type:'edit',toMiniNav:'编辑 乡镇果蔬标准化基地',id:rowData.id}})
           }
            
        },
        //新增
        add(){
            if(this.$route.path.indexOf("/fruitAndVegetable") >= 0){
               this.$router.push({path:'/fruitAndVegetableDetail',query:{type:'add',toMiniNav:'新增 乡镇果蔬标准化基地'}})
           }else{
               this.$router.push({path:'/fruitAndVegetableDetail',query:{type:'add',toMiniNav:'新增 乡镇果蔬标准化基地'}})
           }
        }
    }
}
</script>
<style scoped lang="scss">

</style>