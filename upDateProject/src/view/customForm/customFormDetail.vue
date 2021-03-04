<template>
<!--自定义表单 编辑详情-->
    <div id="customFormDetail" class="pageContent">
        <div class="miniNav">{{miniNav}}</div>
        <section class="sectionContent">
            <el-row style="width:100%;height:90%;border:1px solid #ddd;margin-top:10px">
                <el-col :span="24">
                    <div style="width:100%;background-color:#F5F7FA;height:40px;line-height:40px;border-bottom:1px solid #DDD">
                        <span style="display:inline-block;width:100px;text-align:right">表单名称：</span>
                        <span>{{customTable}}</span>&nbsp;&nbsp;&nbsp;&nbsp;
                        <span style="display:inline-block;width:100px;text-align:right">表名：</span>
                        <span>{{tableComment}}</span>
                    </div>
                </el-col>
                <el-col :span="12">
                    <el-table   border highlight-current-row 
                                id="table" 
                                :row-class-name="tableRowClassName" 
                                max-height="600px" 
                                :data="tableData" 
                                v-loading="listLoading" 
                                class="formNameList"
                                @row-click = "onRowClick">
                        <el-table-column align="left" label="系统表格" class="heddd"> 
                            <el-table-column label="序号"  type="index" width="60" align="center"></el-table-column>
                        <el-table-column align="center">
                            <template slot="header">
                                    <P>中文名称</P>
                            </template>
                            <template slot-scope="scope">
                                <el-input v-show='scope.row.inputLineFlag' class="require_des" v-model="scope.row.customCname"></el-input>
                                <p  v-show='!scope.row.inputLineFlag'>{{scope.row.customCname}}</p>
                            </template>
                        </el-table-column>
                        <el-table-column align="center">
                            <template slot="header">
                                    <P>英文名称</P>
                            </template>
                            <template slot-scope="scope">
                                <el-input v-show='scope.row.inputLineFlag' class="require_des" v-model="scope.row.customEname"></el-input>
                                <p  v-show='!scope.row.inputLineFlag'>{{scope.row.customEname}}</p>
                            </template>
                        </el-table-column>
                        </el-table-column>        
                        
                    </el-table> 
                </el-col>
                <el-col :span="12">
                    <el-table   border highlight-current-row 
                                id="table" 
                                :row-class-name="tableRowClassName" 
                                max-height="600px" 
                                :data="tableDataById" 
                                v-loading="listLoading" 
                                class="formNameList"
                                @row-click = "onRowClick">
                        <el-table-column align="left">
                             <template slot="header">
                                    <P>新增表单 &nbsp;&nbsp;<el-button type="primary" size="mini" @click="addRow" v-if="!urlType" style="margin-left:20px">新增</el-button></P>
                            </template>
                            <el-table-column label="序号"  type="index" width="60" align="center"></el-table-column>
                        <el-table-column align="center">
                            <template slot="header">
                                    <P><span class="red">*</span>中文名称</P>
                            </template>
                            <template slot-scope="scope">
                                <el-input v-show='scope.row.inputLineFlag' class="require_des" v-model="scope.row.customCname"></el-input>
                                <p  v-show='!scope.row.inputLineFlag'>{{scope.row.customCname}}</p>
                            </template>
                        </el-table-column>
                        <el-table-column align="center">
                            <template slot="header">
                                    <P><span class="red">*</span>英文名称</P>
                            </template>
                            <template slot-scope="scope">
                                <el-input v-show='scope.row.inputLineFlag' class="require_des" v-model="scope.row.customEname"></el-input>
                                <p  v-show='!scope.row.inputLineFlag'>{{scope.row.customEname}}</p>
                            </template>
                        </el-table-column>
                        <el-table-column label="操作" :width="btnColumnWidth" align="center">
                            <template slot-scope="scope">
                                <el-button type="danger" size="mini" plain @click="handleDelItem(scope.row.id)" v-if="scope.row.id" :disabled="urlType">删除</el-button>
                                <el-button type="danger" size="mini" plain @click="deletItem()" v-if='scope.row.inputLineFlag' :disabled="urlType">删除</el-button>
                            </template>
                        </el-table-column>
                        </el-table-column>        
                        
                    </el-table> 
                </el-col>
            </el-row>
         <el-row type='flex' justify="center" class="footrBtnGroup" v-if="!urlType">
            <el-button  type="primary" class="submitBtnMargin" @click="submit">提交</el-button>
            <el-button  @click="cancel">取消</el-button>
        </el-row>
        <BackListPage v-if="urlType"></BackListPage>
        </section>
        
    </div>

</template>
<script>
import {customFormDetail ,customFormDelete, customFormUpdate} from '@/utils/api/customForm/customForm'//customFormUpdate
import {handleCofirm} from '@/utils/messageBox/confirm';
import BackListPage from '@/view/backListPage'
export default {
    data() {
        return {
            activeNames:['1'],
            nameFlag:[],
            tableData:[], //table数据
            tableDataById:[],
            tableName:'', //表名
            btnColumnWidth:200,
            listLoading:false,
            deleteCurrentIndex:0,
            customTable:'',
            tableComment:'',
            urlType:true, //地址类型  edit--编辑 detail--查看 add-添加
            addFormItems:[] //新增表单
        }
    },
    mounted(){
        this.nameFlag = this.activeNames;
        this.urlType = this.$route.query.type == 'detail'?true:false;
        this.miniNav = this.$route.query.toMiniNav; //左上角导航
        this.tableName = this.$route.query.tableName; //查看详情数据的表名
        this.initData(); //初始化数据
    },
    methods:{
        tableRowClassName ({row, rowIndex}) {
            //把每一行的索引放进row
            row.index = rowIndex;
        },
        //点击行获取index索引值
        onRowClick(row){
            this.deleteCurrentIndex = row.index;
        },
        //添加表单行
        addRow(){
            let list = {
                customCname:'',
                customEname:'',
                inputLineFlag:true
            }
            this.tableDataById.push(list);
   
            var ele = document.getElementById('customFormDetail');
            ele.scrollTop = ele.scrollHeight;
        },
        //没有提交的中文名，英文名表格删除
        deletItem(){
            this.$confirm('确认删除吗？', '提示', {}).then(() => {
                this.tableDataById.splice( this.deleteCurrentIndex,1)
            })
            
        },
        //点击删除，调用接口删除
        handleDelItem(id){
            this.$confirm('确认删除吗？', '提示', {}).then(() => {
                this.customFormDelete(id);
            })
           
        },
        //折叠版打开，收起
        handleChange(val){
            if(val instanceof Array){
                val.sort();
                this.nameFlag = val
                console.log(this.nameFlag )
            }else{
                this.nameFlag[0] = val
            } 
        },
        //初始化页面数据
        initData(){
            this.getDataDetail(); //调用初始化接口
        },
        //详情接口，获取详情数据
        async getDataDetail(){
            this.loading = true; //显示加载框
            let obj = {
                customTable:this.tableName
            }
            let res = await customFormDetail(obj);
             if(res.data.status== 0){
                this.tableData =  res.data.entitys.noid;
                this.tableDataById = res.data.entitys.yesid;
                this.customTable = this.tableData[0].customTable;
                this.tableComment = this.tableData[0].tableComment;
            }else if(res.data.status== -1 || res.data.status== 500){
                this.$message({
                    message: res.data.msg,
                    type: 'warning'
                })
            }else if(res.data.status == -2){
                handleCofirm(res.data.msg, 'warning', false).then(() => {
                    window.loginOut();
                })
            }else{
                this.$message({
                    message: '服务器异常，请稍后再试',
                    type: 'warning'
                })
            }
            this.loading = false; //隐藏加载框
        },
        //删除接口
        async customFormDelete(id){
            this.loading = true; //显示加载框
            let obj = {
                id:id,
            }
            let res = await customFormDelete(obj);
             if(res.data.status== 0){
                this.$message({
                    message: '删除成功',
                    type: 'success'
                })
                this.tableData.splice( this.deleteCurrentIndex,1)
            }else if(res.data.status== -1 || res.data.status== 500){
                this.$message({
                    message: res.data.msg,
                    type: 'warning'
                })
            }else if(res.data.status == -2){
                handleCofirm(res.data.msg, 'warning', false).then(() => {
                    window.loginOut();
                })
            }else{
                this.$message({
                    message: '服务器异常，请稍后再试',
                    type: 'warning'
                })
            }
            this.loading = false; //隐藏加载框
        },
        //取消
        cancel(){
            this.$router.go(-1); //返回上一路由
        },
        //提交
        submit(){
            this.addFormItems = [];
            this.tableDataById.forEach(item =>{
                if(item.inputLineFlag){
                    this.addFormItems.push({
                        customCname: item.customCname,
                        customEname: item.customEname,
                        customTable: this.customTable,
                        tableComment: this.tableComment
                    })
                }
            })
            this.customFormUpdate(this.addFormItems);
        },
        //编辑接口
        async customFormUpdate(addFormItems){
            for(let i =0;i<addFormItems.length;i++){
                if(!addFormItems[i].customCname){
                    this.$message({
                        message: '请填写中文名称',
                        type: 'warning'
                    })
                    return;
                }else if(!addFormItems[i].customEname){
                    this.$message({
                        message: '请填写英文名称',
                        type: 'warning'
                    })
                    return;
                }
            }
            this.loading = true; //显示加载框
            let res = await customFormUpdate(addFormItems);
             if(res.data.status== 0){
                this.$message({
                    message: '新增成功',
                    type: 'success'
                })
                this.$router.go(-1); //返回上一路由
            }else if(res.data.status== -1 || res.data.status== 500){
                this.$message({
                    message: res.data.msg,
                    type: 'warning'
                })
            }else if(res.data.status == -2){
                handleCofirm(res.data.msg, 'warning', false).then(() => {
                    window.loginOut();
                })
            }else{
                this.$message({
                    message: '服务器异常，请稍后再试',
                    type: 'warning'
                })
            }
            this.loading = false; //隐藏加载框
        }
    },
    components:{
        BackListPage
    },
}
</script>
<style scoped lang="scss">
    .formNameList{
        width: 96% !important;
        margin: 30px auto !important;
    }
    .formAddBtn{
        margin-left: 30px;
    }
    .red{
        color: red;
    }


    .td{border:solid #EBEEF5; border-width:0px 1px 1px 0px; padding:10px 0px;text-align: center;width: 50%;}
    .table{border:solid #EBEEF5; border-width:1px 0px 0px 1px;}
    
</style>