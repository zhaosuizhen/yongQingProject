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
                {labelName:'经营者名称',prop: 'managementName'},
                {labelName:'法定代表人', prop:'legalName'},
                {labelName:'联系方式',prop:'phone'},
                {labelName:'经营场所地址',prop:'businessAddress'},
                {labelName:'受理时间',prop:'acceptanceDate'},
                {labelName:'有效期', prop:'lienseEffectiveDate'}
            ]
        }
    },
    components:{
        'Table-list':TableList
    },
    methods:{
        //查看详情
        goDetail(rowData){
            //sessionStorage.setItem('currentMenuItem','pesticidesBusinessDetail'); //记录路由
            this.$router.push({path:'/pesticidesBusinessDetail',query:{type:'detail',toMiniNav:'查看 执法台账',id:rowData.id}})
        },
        //编辑
        goEdit(rowData){
          //  sessionStorage.setItem('currentMenuItem','pesticidesBusinessDetail'); //记录路由
            this.$router.push({path:'/pesticidesBusinessDetail',query:{type:'edit',toMiniNav:'编辑 执法台账',id:rowData.id}})
        },
        //新增
        add(){
           // sessionStorage.setItem('currentMenuItem','pesticidesBusinessDetail'); //记录路由
            this.$router.push({path:'/pesticidesBusinessDetail',query:{type:'add',toMiniNav:'新增 执法台账'}})
        }
    }
}
</script>
<style scoped lang="scss">

</style>