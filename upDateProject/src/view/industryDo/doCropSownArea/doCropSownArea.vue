<template>
  <!--产业办---农作物播种面积-->
 <div class="doCropSownArea pageContent">
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
    name:'doCropSownArea',
    data() {
        return {
            miniNav:'农作物播种面积',
            qualityInspectionelem:[
                {labelName:'乡镇', prop:'township'},
                {labelName:'年份',prop: 'dataYear',},
                {width:120,labelName:'农作物总播种面积(亩)', prop:'totalarea'},
                {width:120,labelName:'粮食作物播种面积(亩)',prop:'foodstuff'},
                {labelName:'油料（亩）',prop:'oil'},
                {labelName:'棉花（亩）',prop:'cotton'},
                {labelName:'麻类（亩）',prop:'flax'},
                {labelName:'糖类（亩',prop:'sugar'},
                {labelName:'中药材（亩）',prop:'cmedicine'},
                {labelName:'蔬菜（亩）',prop:'vegetables'},
                {labelName:'瓜果类（亩）',prop:'melonsFruitsm'},
                {labelName:'其他农作物（亩）',prop:'otherCrops'}
            ]
        }
    },
    components:{
        'Table-list':TableList
    },
    methods:{
        //查看详情
        goDetail(rowData){
           // sessionStorage.setItem('currentMenuItem','doCropSownAreaDetail'); //记录路由
            this.$router.push({path:'/doCropSownAreaDetail',query:{type:'detail',toMiniNav:'查看 农作物播种面积',id:rowData.id}})
        },
        //编辑
        goEdit(rowData){
           // sessionStorage.setItem('currentMenuItem','doCropSownAreaDetail'); //记录路由
            this.$router.push({path:'/doCropSownAreaDetail',query:{type:'edit',toMiniNav:'编辑 农作物播种面积',id:rowData.id}})
        },
        //新增
        add(){
           // sessionStorage.setItem('currentMenuItem','doCropSownAreaDetail'); //记录路由
            this.$router.push({path:'/doCropSownAreaDetail',query:{type:'add',toMiniNav:'新增 农作物播种面积'}})
        }
    }
}
</script>
<style scoped lang="scss">

</style>