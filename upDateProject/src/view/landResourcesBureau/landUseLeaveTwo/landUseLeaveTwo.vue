<template>
  <!--国土局---农村土地利用-->
 <div class="landUseLeaveTwo pageContent">
        <section class="sectionContent-40">
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
    name:'landUseLeaveOne',
    data() {
        return {
            miniNav:'农村土地利用',
            qualityInspectionelem:[
                {labelName:'年份',prop: 'dataYear'},
                {labelName:'耕地(亩)',prop:'gdhj'},
                {labelName:'园地(亩)',prop:'ydhj'},
                {labelName:'林地(亩)',prop:'ldhj'},
                {labelName:'草地(亩)',prop:'cdhj'},
                {labelName:'城镇村及工矿用地(亩)',prop:'czcjgkyd'},
                {labelName:'交通运输用地(亩)',prop:'jtys'},
                {labelName:'水域及水利设施用地(亩)',prop:'syjsl'},
                {labelName:'其他土地(亩)', prop:'qttdhj'},
                {labelName:'乡镇', prop:'township'}
            ]
        }
    },
    components:{
        'Table-list':TableList
    },
    methods:{
        //查看详情
        goDetail(rowData){
           // sessionStorage.setItem('currentMenuItem','landUseLeaveTwoDetail'); //记录路由
            this.$router.push({path:'/landUseLeaveTwoDetail',query:{type:'detail',toMiniNav:'查看 农村土地利用',id:rowData.id}})
        },
        //编辑
        goEdit(rowData){
            //sessionStorage.setItem('currentMenuItem','landUseLeaveTwoDetail'); //记录路由
            this.$router.push({path:'/landUseLeaveTwoDetail',query:{type:'edit',toMiniNav:'编辑 农村土地利用',id:rowData.id}})
        },
        //新增
        add(){
            sessionStorage.setItem('currentMenuItem','landUseLeaveTwoDetail'); //记录路由
            this.$router.push({path:'/landUseLeaveTwoDetail',query:{type:'add',toMiniNav:'新增 农村土地利用'}})
        }
    }
}
</script>
<style scoped lang="scss">

</style>