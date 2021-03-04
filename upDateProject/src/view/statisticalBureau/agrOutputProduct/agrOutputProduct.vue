<template>
  <!--统计局--主要农产品产量  列表页-->
    <div class="agrOutputProduct pageContent">
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
    name:'agrOutputProduct',
    data() {
        return {
            miniNav:'要农产品产量',
            qualityInspectionelem:[
                {width:80,labelName:'年份',prop: 'dataYear'},
                {labelName:'粮食(公斤/亩)', prop:'foodstuff'},
                {labelName:'谷物(公斤/亩)',prop: 'grain'},
                {labelName:'油料(吨)', prop:'oil'},
                {labelName:'棉花(公斤/亩)', prop:'cotton'},
                {labelName:'麻类(吨)',prop:'flax'},
                {labelName:'糖类(吨)',prop:'sugar'},
                {labelName:'中药材(吨)',prop:''},
                {width:100,labelName:'蔬菜(公斤/亩)',prop:'vegetables'},
                {width:100,labelName:'瓜果类(公斤/亩)',prop:'melonsFruitsm'},
                {labelName:'乡镇',prop:'township'},
                {labelName:'上报日期',prop:'createTime'}
            ],
        }
    },
    components:{
        'Table-list':TableList
    },
    methods:{
        //查看详情
        goDetail(rowData){
         //   sessionStorage.setItem('currentMenuItem','agrOutputProductDetail'); //记录路由
            this.$router.push({path:'/agrOutputProductDetail',query:{type:'detail',toMiniNav:'查看 主要农产品单位面积产量',id:rowData.id}})
        },
        //编辑
        goEdit(rowData){
         //   sessionStorage.setItem('currentMenuItem','agrOutputProductDetail'); //记录路由
            this.$router.push({path:'/agrOutputProductDetail',query:{type:'edit',toMiniNav:'编辑 主要农产品单位面积产量',id:rowData.id}})
        },
        //新增
        add(){
          //  sessionStorage.setItem('currentMenuItem','agrOutputProductDetail'); //记录路由
            this.$router.push({path:'/agrOutputProductDetail',query:{type:'add',toMiniNav:'新增 主要农产品单位面积产量'}})
        }
    }
}
</script>
<style scoped lang="scss">

</style>