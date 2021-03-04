<template>
  <!--新闻动态-->
 <div class="dynamic pageContent">
     <el-breadcrumb separator="/" class="miniNav">
            <el-breadcrumb-item>园区动态</el-breadcrumb-item>
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
    name:'dynamic',
    data() {
        return {
            miniNav:'园区动态',
            qualityInspectionelem:[
                {labelName:'文章标题',prop: 'title'},
                {labelName:'农场名称', prop:'farmName'},
                {labelName:'发布时间',prop:'createTime'},
                {labelName:'作者',prop:'author'},
                {labelName:'最后修改时间',prop:'updateTime'},
                {labelName:'类型',prop:'newType'},
                {labelName:'状态', prop:'isCheck'}
            ]
        }
    },
    components:{
        'Table-list':TableList
    },
    methods:{
        //查看详情
        goDetail(rowData){
            //sessionStorage.setItem('currentMenuItem','dynamicDetail'); //记录路由
            this.$router.push({path:'/dynamicDetail',query:{type:'detail',toMiniNav:'查看 园区动态',id:rowData.id}})
        },
        //编辑
        goEdit(rowData){
          //  sessionStorage.setItem('currentMenuItem','dynamicDetail'); //记录路由
            this.$router.push({path:'/dynamicDetail',query:{type:'edit',toMiniNav:'编辑 园区动态',id:rowData.id}})
        },
        //新增
        add(){
           // sessionStorage.setItem('currentMenuItem','dynamicDetail'); //记录路由
            this.$router.push({path:'/dynamicDetail',query:{type:'add',toMiniNav:'新增 园区动态'}})
        }
    }
}
</script>
<style scoped lang="scss">

</style>