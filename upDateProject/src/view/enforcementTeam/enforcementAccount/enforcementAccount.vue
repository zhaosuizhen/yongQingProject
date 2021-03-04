<template>
  <!--执法大队-->
 <div class="enforcementAccount pageContent">
     <el-breadcrumb separator="/" class="miniNav">
            <el-breadcrumb-item>执法台账</el-breadcrumb-item>
        </el-breadcrumb>
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
    name:'enforcementAccount',
    data() {
        return {
            miniNav:'执法台账',
            qualityInspectionelem:[
                {labelName:'案件名称',prop: 'caseName'},
                {labelName:'违法姓名', prop:'lawbreakersName'},
                {labelName:'联系方式',prop:'phone'},
                {labelName:'案卷号',prop:'fileNo'},
                {labelName:'处罚机关',prop:'penaltyAuthorities'},
                // {labelName:'办案人员',prop:'checkUser'},
                {labelName:'立案时间', prop:'createTime'},
                {labelName:'结案时间', prop:'closingTime'}
            ]
        }
    },
    components:{
        'Table-list':TableList
    },
    methods:{
        //查看详情
        goDetail(rowData){
            //sessionStorage.setItem('currentMenuItem','enforcementAccountDetail'); //记录路由
            this.$router.push({path:'/enforcementAccountDetail',query:{type:'detail',toMiniNav:'查看 执法台账',id:rowData.id}})
        },
        //编辑
        goEdit(rowData){
          //  sessionStorage.setItem('currentMenuItem','enforcementAccountDetail'); //记录路由
            this.$router.push({path:'/enforcementAccountDetail',query:{type:'edit',toMiniNav:'编辑 执法台账',id:rowData.id}})
        },
        //新增
        add(){
           // sessionStorage.setItem('currentMenuItem','enforcementAccountDetail'); //记录路由
            this.$router.push({path:'/enforcementAccountDetail',query:{type:'add',toMiniNav:'新增 执法台账'}})
        }
    }
}
</script>
<style scoped lang="scss">

</style>