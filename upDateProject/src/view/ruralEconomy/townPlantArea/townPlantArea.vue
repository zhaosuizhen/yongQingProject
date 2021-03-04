<template>
  <!--产业办---各乡镇种植面积-->
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
            miniNav:'各乡镇种植面积',
            qualityInspectionelem:[
                {labelName:'年份', prop:'years'},

                {labelName:'安居', prop:'aj'},
                {labelName:'北坝',prop: 'bb'},
                {labelName:'八洞',prop: 'bd'},
                {labelName:'百顷',prop: 'bq'},
                {labelName:'断石',prop: 'ds'},
                {labelName:'东塔',prop: 'dt'},
                {labelName:'富顺',prop: 'fs'},
                {labelName:'光辉',prop: 'gh'},
                {labelName:'古井',prop: 'gj'},
                {labelName:'观桥',prop: 'gq'},
                {labelName:'花园',prop: 'hy'},
                {labelName:'景福',prop: 'jf'},
                {labelName:'金鼓',prop: 'jg'},
                {labelName:'菊河',prop: 'jh'},
                {labelName:'建平',prop: 'jp'},
                {labelName:'金石',prop: 'js'},
                {labelName:'建设镇',prop: 'jsz'},
                {labelName:'建中',prop: 'jz'},
                {labelName:'凯河',prop: 'kh'},
                {labelName:'乐安',prop: 'la'},
                {labelName:'鲁班',prop: 'lb'},
                {labelName:'柳池',prop: 'lc'},
                {labelName:'里程镇',prop: 'lcz'},
                {labelName:'灵兴',prop: 'lingxing'},
                {labelName:'乐加',prop: 'lj'},
                {labelName:'老马',prop: 'lm'},
                {labelName:'龙树',prop: 'ls'},
                {labelName:'黎曙',prop: 'lsz'},
                {labelName:'芦溪',prop: 'lx'},
                {labelName:'立新镇',prop: 'lxz'},
                {labelName:'刘营',prop: 'ly'},
                {labelName:'前锋',prop: 'qf'},
                {labelName:'郪江',prop: 'qj'},
                {labelName:'秋林',prop: 'ql'},
                {labelName:'石安',prop: 'sa'},
                {labelName:'三元',prop: 'sy'},
                {labelName:'潼川',prop: 'tc'},
                {labelName:'塔山',prop: 'ts'},
                {labelName:'万安',prop: 'wa'},
                {labelName:'新德',prop: 'xd'},
                {labelName:'幸福',prop: 'xf'},
                {labelName:'新鲁',prop: 'xl'},
                {labelName:'西平',prop: 'xp'},
                {labelName:'新生',prop: 'xs'},
                {labelName:'下新',prop: 'xsz'},
                {labelName:'永明',prop: 'ym'},
                {labelName:'永新',prop: 'yx'},
                {labelName:'紫河',prop: 'zh'},
                {labelName:'中太',prop: 'zt'},
                {labelName:'中新',prop: 'zx'}
            ]
        }
    },
    components:{
        'Table-list':TableList
    },
    methods:{
        //查看详情
        goDetail(rowData){
           if(this.$route.path.indexOf("/townPlantArea") >= 0){
               this.$router.push({path:'/townPlantAreaDetail',query:{type:'detail',toMiniNav:'查看 各乡镇种植面积',id:rowData.id}})
           }else{
               this.$router.push({path:'/townPlantAreaDetail',query:{type:'detail',toMiniNav:'查看 各乡镇种植面积',id:rowData.id}})
           }
            
        },
        //编辑
        goEdit(rowData){
           if(this.$route.path.indexOf("/townPlantArea") >= 0){
               this.$router.push({path:'/townPlantAreaDetail',query:{type:'edit',toMiniNav:'编辑 各乡镇种植面积',id:rowData.id}})
           }else{
               this.$router.push({path:'/townPlantAreaDetail',query:{type:'edit',toMiniNav:'编辑 各乡镇种植面积',id:rowData.id}})
           }
            
        },
        //新增
        add(){
            if(this.$route.path.indexOf("/townPlantArea") >= 0){
               this.$router.push({path:'/townPlantAreaDetail',query:{type:'add',toMiniNav:'新增 各乡镇种植面积'}})
           }else{
               this.$router.push({path:'/townPlantAreaDetail',query:{type:'add',toMiniNav:'新增 各乡镇种植面积'}})
           }
        }
    }
}
</script>
<style scoped lang="scss">

</style>