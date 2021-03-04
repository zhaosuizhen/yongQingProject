<template>
  <div>
    <el-header>
        <el-row><h1>筛选区</h1></el-row>
        <el-row>
            <span>关键字：</span>
            <el-input v-model="searchVal.keyword" style="width:200px;margin-right:30px"></el-input>

            <span>加密状态：</span>
            <el-select v-model="searchVal.encryptionStatus" placeholder="请选择加密状态" style="width:200px;margin-right:30px">
                <el-option label="全部" :value="null"></el-option>
                <el-option label="未加密" value="0"></el-option>
                <el-option label="base64" value="1"></el-option>
                <el-option label="md5" value="2"></el-option>
            </el-select>

            <span>接口状态：</span>
            <el-select v-model="searchVal.InterfaceStatus" placeholder="请选择接口状态" style="width:200px;margin-right:30px">
                <el-option label="全部" :value="null"></el-option>
                <el-option label="已发布" value="0"></el-option>
                <el-option label="未发布" value="1"></el-option>
            </el-select>

            <el-button size="medium" type="primary" @click="searchBtn">查询</el-button>
            <el-button size="medium" type="primary" @click="openAddInterfaceDialog">新增</el-button>
        </el-row>
    </el-header>
    <el-main>
        <el-table :data="tableData" style="width: 100%">
            <el-table-column align="center" prop="interfaceName" width="250" label="接口名称"></el-table-column>
            <el-table-column align="center" prop="callsCount" label="访问次数"></el-table-column>
            <el-table-column align="center" prop="datasize" label="返回数据量"></el-table-column>
            <el-table-column align="center" prop="type" label="类型"></el-table-column>
            <el-table-column align="center" prop="interfaceType" label="接口类型"></el-table-column>
            <el-table-column align="center" prop="isRelease" label="是否发布"></el-table-column>
            <el-table-column align="center" prop="encryptionRules" label="加密规则"></el-table-column>
            <el-table-column align="center" label="操作" width="210">
                <template slot-scope="scope">
                    <el-button size="mini" plain type="primary" @click="openDetailsDialog(scope)">详情</el-button>
                    <el-button size="mini" plain type="warning" @click="releaseBtn(scope)">发布</el-button>
                    <el-button size="mini" plain type="danger" @click="encryptionDialog = true">加密</el-button>
                </template>
            </el-table-column>
        </el-table>

        <el-pagination background layout="prev, pager, next" :total="total" :page-size="searchVal.pageSize" :current-page="searchVal.currentPage" style="float:right;margin-top:50px" @current-change="currentChange"></el-pagination>
    </el-main>

    <!-- 新增弹窗 -->
    <el-dialog title="新增" :visible.sync="addInterfaceDialog" width="40%" :before-close="handleClose">
        <el-form label-width="140px" :model="addInterfaceData" :rules="rules" ref="ruleForm">
            <el-form-item label="接口类型：" prop="interfaceType">
                <el-select v-model="addInterfaceData.interfaceType" placeholder="请选择接口类型" style="width:80%">
                    <el-option label="新增接口" value="0"></el-option>
                    <el-option label="删除接口" value="1"></el-option>
                    <el-option label="修改接口" value="2"></el-option>
                    <el-option label="查询接口" value="3"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="接口名称：" prop="interfaceName">
                <el-input v-model="addInterfaceData.interfaceName" style="width:80%"></el-input>
            </el-form-item>
            <el-form-item label="接口地址：" prop="interfaceAddress">
                <el-input v-model="addInterfaceData.interfaceAddress" style="width:80%"></el-input>
            </el-form-item>
            <el-form-item label="加密规则：" prop="encryptionRules">
                <el-select v-model="addInterfaceData.encryptionRules" placeholder="请选择加密规则" style="width:80%">
                    <el-option label="未加密" value="0"></el-option>
                    <el-option label="base64" value="1"></el-option>
                    <el-option label="md5" value="2"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="类型：" prop="type">
                <el-select v-model="addInterfaceData.type" placeholder="请选择类型" style="width:80%">
                    <el-option label="内部接口" value="0"></el-option>
                    <el-option label="外部接口" value="1"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="是否发布" prop="isRelease">
                <el-radio-group v-model="addInterfaceData.isRelease">
                    <el-radio label="0">是</el-radio>
                    <el-radio label="1">否</el-radio>
                </el-radio-group>
            </el-form-item>
            <el-button type="primary" style="float:right" @click="submitForm('ruleForm')">新 增</el-button>
        </el-form>
        <span slot="footer" class="dialog-footer">
            <!-- <el-button @click="closeAddInterfaceDialog">取 消</el-button> -->
            <!-- <el-button type="primary" @click="addInterfaceSubmit">新 增</el-button> -->
        </span>
    </el-dialog>

    <!-- 加密弹窗 -->
    <el-dialog title="加密" :visible.sync="encryptionDialog" width="30%" >
        接口加密规则：
        <el-select v-model="encryptionDialogFlag" placeholder="请选择加密状态" style="width:200px;margin-right:30px">
                <el-option label="未加密" value="0"></el-option>
                <el-option label="base64" value="1"></el-option>
                <el-option label="md5" value="2"></el-option>
            </el-select>
        <span slot="footer" class="dialog-footer">
            <el-button @click="encryptionDialog = false">取 消</el-button>
            <el-button type="primary" @click="encryptionDialog = false">保 存</el-button>
        </span>
    </el-dialog>

    <!-- 详情弹窗 -->
    <el-dialog title="接口详情" :visible.sync="detailsDialog" width="40%" >
        <el-row>
            <el-col :span="12">接口名称：<span style="color:#409EFF">{{detailsData.interfaceName}}</span></el-col>
            <el-col :span="12">创建时间：<span style="color:#409EFF">{{detailsData.createTime}}</span></el-col>
        </el-row>
        <el-row>
            <el-col :span="12">类型：<span style="color:#409EFF">{{detailsData.type}}</span></el-col>
            <el-col :span="12">接口类型：<span style="color:#409EFF">{{detailsData.interfaceType}}</span></el-col>
        </el-row>
        <el-row>
            <el-col :span="12">返回数据量：<span style="color:#409EFF">{{detailsData.datasize}}</span></el-col>
            <el-col :span="12">访问次数：<span style="color:#409EFF">{{detailsData.callsCount}}</span></el-col>
        </el-row>
        <el-row>
            <el-col :span="12">加密规则：<span style="color:#409EFF">{{detailsData.encryptionRules}}</span></el-col>
            <el-col :span="12">是否发布：<span style="color:#409EFF">{{detailsData.isRelease}}</span></el-col>
        </el-row>
        <el-row>
            <el-col :span="24">接口地址：<span style="color:#409EFF">{{detailsData.interfaceAddress}}</span></el-col>
        </el-row>
        <span slot="footer" class="dialog-footer">
            <!-- <el-button @click="detailsDialog = false">取 消</el-button> -->
            <el-button type="primary" @click="detailsDialog = false">返 回</el-button>
        </span>
    </el-dialog>
  </div>
</template>

<script>
import { interfacePublishingPageList,details,dataInterfaceRelease,insert } from '@/api/dataSecurityManagement/interfacePublishing'
export default {
    data(){
        return{
            //新增弹窗
            addInterfaceDialog:false,
            addInterfaceData:{
                encryptionRules: null,  //加密规则
                interfaceAddress: null, //接口地址
                interfaceName: null,    //接口名称
                interfaceType: null,    //接口类型
                isRelease: null,        //是否发布
                type: null,             //类型
            },
            //详情弹窗
            detailsDialog:false,
            detailsData:{},
            //加密弹窗
            encryptionDialog:false,
            encryptionDialogFlag:null,
            searchVal:{
                keyword:null,           //关键字
                encryptionStatus:null,  //加密状态
                InterfaceStatus:null,   //接口状态
                currentPage:1,
                pageSize:10
            },
            total:0,
            tableData:[],

            rules: {
                interfaceType: [{ required: true, message: '请选择接口类型', trigger: 'blur' }],
                interfaceName: [{ required: true, message: '请输入接口名称', trigger: 'blur' }],
                interfaceAddress: [{ required: true, message: '请输入接口地址', trigger: 'blur' }],
                encryptionRules: [{ required: true, message: '请选择加密规则', trigger: 'blur' }],
                type: [{ required: true, message: '请选择类型', trigger: 'blur' }],
                isRelease: [{ required: true, message: '请选择是否发布', trigger: 'blur' }],
            }
        }
    },
    methods:{
        handleClose(){
            this.addInterfaceData = {
                encryptionRules: null,  //加密规则
                interfaceAddress: null, //接口地址
                interfaceName: null,    //接口名称
                interfaceType: null,    //接口类型
                isRelease: null,        //是否发布
                type: null,             //类型
            }
            this.addInterfaceDialog = false
        },
        //按钮校验
        submitForm(formName) {
            console.log(formName)
        this.$refs[formName].validate((valid) => {
          if (valid) {
            console.log('校验通过')
            this.addInterfaceSubmit()
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
        //新增接口
        async addInterfaceSubmit(){
            let res = await insert(this.addInterfaceData)
            console.log(res)
            this.addInterfaceData = {
                encryptionRules: null,  //加密规则
                interfaceAddress: null, //接口地址
                interfaceName: null,    //接口名称
                interfaceType: null,    //接口类型
                isRelease: null,        //是否发布
                type: null,             //类型
            }
            await this.getInterfacePublishingPageList()
            this.addInterfaceDialog = false
        },
        //打开新增接口弹窗
        async openAddInterfaceDialog(){
            this.addInterfaceDialog = true
        },
        async closeAddInterfaceDialog(){
            this.addInterfaceData = {
                encryptionRules: null,  //加密规则
                interfaceAddress: null, //接口地址
                interfaceName: null,    //接口名称
                interfaceType: null,    //接口类型
                isRelease: null,        //是否发布
                type: null,             //类型
            }
            this.addInterfaceDialog = false
        },
        //点击发布按钮
        async releaseBtn(scope){
            let id = scope.row.id
            let res = await dataInterfaceRelease({id})
            let type = res.data.msg.includes('数据已发布') ? 'success' : 'warning' 
            this.$message({
                message: res.data.msg,
                type
            });
            await this.getInterfacePublishingPageList()
        },
        //打开详情弹窗
        async openDetailsDialog(scope){
            let id = scope.row.id
            let res = await details({id})
            for (const key in res.data.data) {
                if(key == 'type'){
                    this.detailsData[key] = (res.data.data[key] == '1') ? '外部接口' : '内部接口'
                }else if(key == 'datasize'){
                    this.detailsData[key] = res.data.data[key] ? `${res.data.data[key]}条` : `0条`
                }else if(key == 'callsCount'){
                    this.detailsData[key] = res.data.data[key] ? res.data.data[key] : 0
                }else if(key == 'isRelease'){
                    this.detailsData[key] = (res.data.data[key] == '1') ? '未发布' : '已发布'
                }else if(key == 'encryptionRules'){
                    this.detailsData[key] = (res.data.data[key] == '1') ? 'base64' : ((res.data.data[key] == '1') ? 'md5' : '未加密')
                }else if(key == 'interfaceType'){
                    this.detailsData[key] = (res.data.data[key] == '0') ? '新增接口' : ((res.data.data[key] == '1') ? '删除接口' : (res.data.data[key] == '2') ? '修改接口' : '查询接口')
                }
                else{
                    this.detailsData[key] = res.data.data[key]
                }
                
            }
            console.log(this.detailsData)
            this.detailsDialog = true
        },
        //搜索查询
        async searchBtn(){
            await this.getInterfacePublishingPageList()
        },
        //翻页
        async currentChange(val){
            this.searchVal.currentPage = val
            await this.getInterfacePublishingPageList()
        },
        //数据接口发布列表
        async getInterfacePublishingPageList(){
            let res = await interfacePublishingPageList(this.searchVal)
            console.log(res)
            res.data.data.records.forEach(item => {
                item.type = (item.type == '1') ? '外部接口' : '内部接口'
                item.datasize = item.datasize ? `${item.datasize}条` : `0条`
                item.callsCount = item.callsCount ? item.callsCount : 0
                if(item.interfaceType == '0'){
                    item.interfaceType = '新增接口'
                }else if(item.interfaceType == '1'){
                    item.interfaceType = '删除接口'
                }else if(item.interfaceType == '2'){
                    item.interfaceType = '修改接口'
                }else if(item.interfaceType == '3'){
                    item.interfaceType = '查询接口'
                }
                item.isRelease = (item.isRelease == '1') ? '未发布' : '已发布'
                item.encryptionRules = (item.encryptionRules == '1') ? 'base64' : ((item.encryptionRules == '2') ? 'md5' : '未加密')
            })
            this.total = res.data.data.total
            this.tableData = res.data.data.records
        }
    },
    async mounted(){
        //数据接口发布列表
        await this.getInterfacePublishingPageList()
    },
}
</script>

<style>

</style>