<template>
  <!--县委秘书办---banner图维护-->
 <div class="doAgriculturalOutputValue pageContent">
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
    name:'doAgriculturalOutputValue',
    data() {
        return {
            miniNav:'banner图维护',
            qualityInspectionelem:[
                {labelName:'图片路径', prop:'pictureUrl'},
                {labelName:'页面模块', prop:'modularName'},
                {labelName:'图片名称',prop: 'pictureName'}
            ]
        }
    },
    components:{
        'Table-list':TableList
    },
    methods:{
        //查看详情
        goDetail(rowData){
           if(this.$route.path.indexOf("/bannerImgMaintain") >= 0){
               this.$router.push({path:'/bannerImgMaintainDetail',query:{type:'detail',toMiniNav:'查看 banner图维护',id:rowData.id}})
           }else{
               this.$router.push({path:'/bannerImgMaintainDetail',query:{type:'detail',toMiniNav:'查看 banner图维护',id:rowData.id}})
           }
            
        },
        //编辑
        goEdit(rowData){
           if(this.$route.path.indexOf("/bannerImgMaintain") >= 0){
               this.$router.push({path:'/bannerImgMaintainDetail',query:{type:'edit',toMiniNav:'编辑 banner图维护',id:rowData.id}})
           }else{
               this.$router.push({path:'/bannerImgMaintainDetail',query:{type:'edit',toMiniNav:'编辑 banner图维护',id:rowData.id}})
           }
            
        },
        //新增
        add(){
            if(this.$route.path.indexOf("/bannerImgMaintain") >= 0){
               this.$router.push({path:'/bannerImgMaintainDetail',query:{type:'add',toMiniNav:'新增 banner图维护'}})
           }else{
               this.$router.push({path:'/bannerImgMaintainDetail',query:{type:'add',toMiniNav:'新增 banner图维护'}})
           }
        }
    }
}
</script>
<style scoped lang="scss">

</style>