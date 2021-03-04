<template>
    <!--质检办---农产品农残检测情况信息表列表-->
    <div class="qualityDetectionOfAgriculturalList pageContent">
        <section class="sectionContent">
            <Table-list 
                :tableKey='qualityInspectionelem' 
                :tableData="dataList"
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
    data() {
        return {
            miniNav:'农产品农残检测情况信息表',
            qualityInspectionelem:[
                {labelName:'样品名称',prop: 'productName',},
                {labelName:'乡镇', prop:'township'},
                {labelName:'样本产地', prop:'productCity'},
                {labelName:'年份',prop:'dataYear'},
                {labelName:'检测项目',prop:'project'},
                {width:200,labelName:'检测单位',prop:'productCheckpointId'},
                {labelName:'设备类型',prop:'deviceType'},
                {width:120,labelName:'检测数值（%）',prop:'checkValue'},
                {labelName:'判定结果',prop:'checkResult'}
            ],
            dataList:{}
        }
        
    },
    components:{
        'Table-list':TableList
    },
    methods:{
        //查看详情
        goDetail(rowData){
           // sessionStorage.setItem('currentMenuItem','qualityDetectionOfAgriculturalDetail'); //记录路由
            this.$router.push({path:'/qualityDetectionOfAgriculturalDetail',query:{type:'detail',toMiniNav:'查看 农产品农残检测情况信息表',id:rowData.id}})
        },
        //编辑
        goEdit(rowData){
          //  sessionStorage.setItem('currentMenuItem','qualityDetectionOfAgriculturalDetail'); //记录路由
            this.$router.push({path:'/qualityDetectionOfAgriculturalDetail',query:{type:'edit',toMiniNav:'编辑 农产品农残检测情况信息表',id:rowData.id}})
        },
        //新增
        add(){
          //  sessionStorage.setItem('currentMenuItem','qualityDetectionOfAgriculturalDetail'); //记录路由
            this.$router.push({path:'/qualityDetectionOfAgriculturalDetail',query:{type:'add',toMiniNav:'新增 农产品农残检测情况信息表'}})
        }
    }
}
</script>
<style scoped lang="scss">

</style>