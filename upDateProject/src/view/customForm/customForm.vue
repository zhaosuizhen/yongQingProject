<template>
  <!--自定义表单-->
 <div class="customForm pageContent">
     <el-breadcrumb separator="/" class="miniNav">
            <el-breadcrumb-item>自定义表单</el-breadcrumb-item>
        </el-breadcrumb>
    
            <section class="sectionContent-40">
                <Table-list 
                    :tableKey='qualityInspectionelem' 
                    @goDetail='goDetail' 
                    @goEdit='goEdit'
                    :miniNav="miniNav"
                    :featureFlag='featureFlag'
                    :btnWidth='btnTableWidth'
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
            miniNav:'自定义表单',
            featureFlag:'自定义表单',
            qualityInspectionelem:[
                {width:80, labelName:'序号',prop: 'index'},
                {labelName:'数据项名称', prop:'tableComment'},
                {labelName:'表名',prop:'customTable'},
                {labelName:'数据字段数量',prop:'columnsNumber'},
                {labelName:'更新时间',prop:'updateTime'}
            ],
            btnTableWidth:400, //操作按钮table的宽度
        }
    },
    components:{
        'Table-list':TableList
    },
    methods:{
        //查看详情
        goDetail(rowData){
            //sessionStorage.setItem('currentMenuItem','customFormDetail'); //记录路由
            this.$router.push({path:'/customFormDetail',query:{type:'detail',toMiniNav:'查看 自定义表单',tableName:rowData.customTable}})
        },
        //编辑
        goEdit(rowData){
            //sessionStorage.setItem('currentMenuItem','customFormDetail'); //记录路由
            this.$router.push({path:'/customFormDetail',query:{type:'edit',toMiniNav:'编辑 自定义表单',tableName:rowData.customTable}})
        }
    }
}
</script>
<style scoped lang="scss">

</style>