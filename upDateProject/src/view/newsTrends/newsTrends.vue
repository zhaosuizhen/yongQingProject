<template>
  <!--新闻动态-->
 <div id="newsTrends " class="pageContent">
     <el-breadcrumb separator="/" class="miniNav">
            <el-breadcrumb-item>新闻动态</el-breadcrumb-item>
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
    name:'newsTrends',
    data() {
        return {
            miniNav:'新闻动态',
            qualityInspectionelem:[
                {labelName:'文章标题',prop: 'title'},
                {labelName:'文章来源', prop:'enterpriseType'},
                {labelName:'类型',prop:'newType'},
                {labelName:'发布时间',prop:'createTime'},
                {labelName:'作者',prop:'buildUser'},
                {labelName:'最后修改时间',prop:'updateTime'}
            ]
        }
    },
    components:{
        'Table-list':TableList
    },
    methods:{
        //查看详情
        goDetail(rowData){
           // sessionStorage.setItem('currentMenuItem','newsTrendsDetail'); //记录路由
            this.$router.push({path:'/newsTrendsDetail',query:{type:'detail',toMiniNav:'查看 新闻动态',id:rowData.id}})
        },
        //编辑
        goEdit(rowData){
          //  sessionStorage.setItem('currentMenuItem','newsTrendsDetail'); //记录路由
            this.$router.push({path:'/newsTrendsDetail',query:{type:'edit',toMiniNav:'编辑 新闻动态',id:rowData.id}})
        },
        //新增
        add(){
        //    sessionStorage.setItem('currentMenuItem','newsTrendsDetail'); //记录路由
            this.$router.push({path:'/newsTrendsDetail',query:{type:'add',toMiniNav:'新增 新闻动态'}})
        }
    }
}
</script>
<style scoped lang="scss">

</style>