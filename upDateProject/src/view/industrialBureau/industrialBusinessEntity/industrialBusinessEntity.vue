<template>
  <!--工商局---经营主体数据-->
 <div class="industrialBusinessEntity pageContent">
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
    name:'industrialBusinessEntity',
    data() {
        return {
            miniNav:'经营主体数据',
            qualityInspectionelem:[
                {width:200,labelName:'公司名称', prop:'enterpriseName'},
                {labelName:'主体类型', prop:'subjectType'},
                {labelName:'经营类别',prop: 'manageType'},
                {width:200,labelName:'法定代表人',prop:'legalPerson'},
                {labelName:'注册资本',prop:'registeredCapital'},
                {labelName:'成立日期',prop:'establishTime'},
                {labelName:'经营状态',prop:'state'},
                {labelName:'所属省份',prop:'province'},
                {labelName:'所属市区',prop:'city'},
                {labelName:'所属区县',prop:'county'},
                {labelName:'所属乡镇',prop:'township'}
            ]
        }
    },
    components:{
        'Table-list':TableList
    },
    methods:{
        //查看详情
        goDetail(rowData){
            //sessionStorage.setItem('currentMenuItem','industrialBusinessEntityDetail'); //记录路由
            this.$router.push({path:'/industrialBusinessEntityDetail',query:{type:'detail',toMiniNav:'查看 经营主体数据',id:rowData.id}})
        },
        //编辑
        goEdit(rowData){
            //sessionStorage.setItem('currentMenuItem','industrialBusinessEntityDetail'); //记录路由
            this.$router.push({path:'/industrialBusinessEntityDetail',query:{type:'edit',toMiniNav:'编辑 经营主体数据',id:rowData.id}})
        },
        //新增
        add(){
            //sessionStorage.setItem('currentMenuItem','industrialBusinessEntityDetail'); //记录路由
            this.$router.push({path:'/industrialBusinessEntityDetail',query:{type:'add',toMiniNav:'新增 经营主体数据'}})
        }
    }
}
</script>
<style scoped lang="scss">

</style>