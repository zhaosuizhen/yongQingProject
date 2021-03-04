<!--自定义表单组件-->
<template>
    <div id="customForm">
        <el-collapse v-model="activeNames" @change="handleChange">
            <el-collapse-item name="10">
                    <template slot="title">
                        <div><i class="collapseDownIcon" :class="[nameFlag.includes('10') == true?'el-icon-caret-bottom':'el-icon-caret-right']"></i>自定义菜单信息</div>
                    </template>
                    <div class="formContent">
                        <el-form status-icon label-width="100px" class="demo-ruleForm">
                            <el-form-item :label="item.customCname+'：'" class="formItem" v-for="item in ruleForm" :key='item.customColumnsId'>
                                <el-input v-model="item.customDatavalue" :disabled="type" @input="customDatavalueChange"></el-input>
                            </el-form-item>
                        </el-form>
                    </div>
                </el-collapse-item>
        </el-collapse>
    </div>
</template>
<script>
export default {
    data () {
        return {
            activeNames:['10'],
            nameFlag:[],
            ruleForm:[]
        }
    },
    props:{
        formDate:{
            type:Array
        },
        type:{
            type:Boolean,
            default(){
                return true;
            }
        }
    },
    mounted(){
        this.nameFlag = this.activeNames;
        this.ruleForm = this.formDate; 
    },
    methods:{
        handleChange(val){
            if(val instanceof Array){
                val.sort();
                this.nameFlag = val
            }else{
                this.nameFlag[0] = val
            }   
        },
        customDatavalueChange(){
            this.$emit('customDatavalueChange',this.ruleForm)
            
        }
    }
}
</script>
<style scoped lang='scss'>

</style>