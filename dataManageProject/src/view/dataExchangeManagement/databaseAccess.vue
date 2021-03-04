<template>
  <div>
        <el-header>
            <el-row>
                <el-col><h1>功能区</h1></el-col>
                <el-col><el-button style="margin-top:20px" type="primary" @click="accessDialog = true;preservationFlag = false;isEdit = false">接入配置</el-button></el-col>
            </el-row>
        </el-header>
        <el-main>
            <el-table :data="tableData" style="width: 100%">
                <el-table-column align="center" prop="dataBaseName" label="对接系统" ></el-table-column>
                <el-table-column align="center" prop="tableCount" label="数据表数量" ></el-table-column>
                <el-table-column align="center" prop="dataSize" label="数据量(mb)"></el-table-column>
                <el-table-column align="center" prop="updateTime" label="最新同步时间"></el-table-column>
                <el-table-column align="center" label="操作" width="330px">
                    <template slot-scope="scope">
                        <el-button size="mini" type="primary" plain>详情</el-button>
                        <el-button size="mini" type="warning" plain @click="editOpenDialog(scope)">编辑</el-button>
                        <el-button size="mini" type="danger" plain>设置导入</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </el-main>

        <!-- 接入配置弹窗 -->
        <el-dialog title="接入配置" :visible.sync="accessDialog" width="30%" :before-close="handleClose">
            
            <el-form ref="form" :model="submitFormData" label-width="120px">
                <el-form-item label="链接名称：">
                    <el-input v-model="submitFormData.dataBaseName" style="width:85%" @change="changeForm"></el-input>
                </el-form-item>
                <el-form-item label="数据库URL：">
                    <el-input v-model="submitFormData.dataBaseUrl" style="width:85%" :disabled="isEdit" @change="changeForm"></el-input>
                </el-form-item>
                <el-form-item label="端口：">
                    <el-input v-model="submitFormData.dataBasePort" style="width:85%" @change="changeForm"></el-input>
                </el-form-item>
                <el-form-item label="数据账户：">
                    <el-input v-model="submitFormData.dataBaseUsername" style="width:85%" @change="changeForm"></el-input>
                </el-form-item>
                <el-form-item label="密码：">
                    <el-input v-model="submitFormData.dataBasePassword" style="width:85%" @change="changeForm"></el-input>
                </el-form-item>
                <el-form-item label="数据库类型：">
                    <el-select v-model="submitFormData.dataBaseType" placeholder="请选择数据库类型" style="width:85%"  :disabled="isEdit" @change="changeForm">
                        <el-option label="MySql" value="0"></el-option>
                        <el-option label="Orcale" value="1"></el-option>
                        <el-option label="sqlServer" value="2"></el-option>
                    </el-select>
                </el-form-item>
            </el-form>
            
            <span slot="footer" class="dialog-footer">
                <el-row>
                    <el-col :span="12">
                        <el-button style="float:right;margin-right:10px" @click="connectedTest">连通测试</el-button>
                    </el-col>
                    <el-col :span="12">
                        <el-button style="float:left;margin-left:10px" type="primary" @click="preservationBtn">保 存</el-button>
                    </el-col>
                </el-row>
            </span>
        </el-dialog>
  </div>
</template>

<script>
import { getPageList,testConnection,insertDataBaesConnection,updateDataBaesConnection } from '@/api/dataExchangeManagement/databaseAccess'
export default {
    data(){
        return{
            isEdit:false,
            tableData:[],
            //弹窗flag
            accessDialog:false,
            submitFormData:{
                dataBaseName:null,       //
                dataBaseUrl:null,       //
                dataBasePort:null,      //
                dataBaseUsername:null,  //
                dataBasePassword:null,  //
                dataBaseType:null,      //
                id:null
            },
            currentPage: 1,
            pageSize: 10,
            total: 0,
            preservationFlag:false
        }
    },
    methods:{
        //form表单修改
        changeForm(){
            console.log(123);
            this.preservationFlag = false
        },
        //编辑打开弹窗
        async editOpenDialog(scope){
            this.accessDialog = true
            this.preservationFlag = false
            this.isEdit = true
            console.log(scope.row)
            this.submitFormData = {
                dataBaseName:scope.row.dataBaseName,           //
                dataBaseUrl:scope.row.dataBaseUrl,             //
                dataBasePort:scope.row.dataBasePort,           //
                dataBaseUsername:scope.row.dataBaseUsername,   //
                dataBasePassword:scope.row.dataBasePassword,   //
                // dataBaseType:(scope.row.dataBaseType == 0) ? 'MySql' : ((scope.row.dataBaseType == 1) ? 'Orcale' : 'sqlServer'),  
                dataBaseType:`${scope.row.dataBaseType}`,  
                id:scope.row.id,  
            }
        },
        //关闭弹窗
        handleClose(){
            this.submitFormData = {
                dataBaseName:null,      //
                dataBaseUrl:null,       //
                dataBasePort:null,      //
                dataBaseUsername:null,  //
                dataBasePassword:null,  //
                dataBaseType:null,      //
                id:null
            }
            this.accessDialog = false
        },
        //保存配置
        async preservationBtn(){
            console.log(this.preservationFlag)
            if(!this.preservationFlag){
                this.$message({
                    message: "通过连通测试才能保存",
                    type: 'warning'
                });
                return
            }
            let res = null
            if(this.isEdit){
                res = await updateDataBaesConnection(JSON.stringify(this.submitFormData))
            }else{
                res = await insertDataBaesConnection(JSON.stringify(this.submitFormData))
            }
            let type = res.data.msg.includes('成功') ? 'success' : 'warning'
            this.$message({
                message: res.data.msg,
                type
            });
            this.submitFormData = {
                dataBaseName:null,       //
                dataBaseUrl:null,       //
                dataBasePort:null,      //
                dataBaseUsername:null,  //
                dataBasePassword:null,  //
                dataBaseType:null,      //
                id:null
            }
            this.accessDialog = false
            await this.getPageListData()
        },
        //连通测试
        async connectedTest(){
            console.log(this.submitFormData)
            let res = await testConnection(JSON.stringify(this.submitFormData))
            this.preservationFlag = res.data.msg.includes('成功') ? true : false
            let type = res.data.msg.includes('成功') ? 'success' : 'warning'
            this.$message({
                message: res.data.msg,
                type
            });
        },
        //数据库配置分页查询接口
        async getPageListData(){
            let res = await getPageList({
                currentPage:this.currentPage,
                pageSize:this.pageSize
            })
            console.log(res.data.data.records)
            this.tableData = res.data.data.records
            this.total = res.data.data.total
        },
    },
    async mounted(){
        //数据库配置分页查询接口
        await this.getPageListData()
    }
}
</script>

<style scoped lang="scss">
.btn{
    margin-left: 0;
}
</style>