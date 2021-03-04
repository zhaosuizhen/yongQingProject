<template>
  <!--统计局---产品产量-->
 <div class="liveProductValue pageContent">
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
            miniNav:'畜产品产量',
            qualityInspectionelem:[
                {labelName:'年份',prop: 'dataYear'},
                {width:120,labelName:'肉类总产量（吨）', prop:'meatAll'},
                {width:120,labelName:'猪牛羊肉总计（吨）',prop:'porkBeefMutton'},
                {labelName:'牛奶（吨）',prop:'milk'},
                {labelName:'禽蛋（吨）',prop:'egg'},
                {labelName:'蜂蜜（吨）',prop:'honey'},
                {labelName:'蚕茧（吨）',prop:'cocoon'},
                {labelName:'乡镇', prop:'township'},
                {labelName:'上报时间', prop:'createTime'}
            ]
        }
    },
    components:{
        'Table-list':TableList
    },
    methods:{
        //查看详情
        goDetail(rowData){
          //  sessionStorage.setItem('currentMenuItem','liveProductValueDetail'); //记录路由
          if(this.$route.path.indexOf("/rearProductValue") >= 0){
                this.$router.push({path:'/rearProductValueDetail',query:{type:'detail',toMiniNav:'查看 畜产品产量',id:rowData.id}})
          }else{
              this.$router.push({path:'/liveProductValueDetail',query:{type:'detail',toMiniNav:'查看 畜产品产量',id:rowData.id}})
          }
            
        },
        //编辑
        goEdit(rowData){
          //  sessionStorage.setItem('currentMenuItem','liveProductValueDetail'); //记录路由
            
            if(this.$route.path.indexOf("/rearProductValue") >= 0){
                    this.$router.push({path:'/rearProductValueDetail',query:{type:'edit',toMiniNav:'编辑 畜产品产量',id:rowData.id}})
            }else{
                this.$router.push({path:'/liveProductValueDetail',query:{type:'edit',toMiniNav:'编辑 畜产品产量',id:rowData.id}})
            }
        },
        //新增
        add(){
          //  sessionStorage.setItem('currentMenuItem','liveProductValueDetail'); //记录路由
          if(this.$route.path.indexOf("/rearProductValue") >= 0){
                this.$router.push({path:'/rearProductValueDetail',query:{type:'add',toMiniNav:'新增 畜产品产量'}})
            }else{
            this.$router.push({path:'/liveProductValueDetail',query:{type:'add',toMiniNav:'新增 畜产品产量'}})
            }
        }
    }
}
</script>
<style scoped lang="scss">

</style>