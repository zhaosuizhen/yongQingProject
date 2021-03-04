<template>
  <div>
      <el-header>
        <el-row><h1>筛选区</h1></el-row>
        <el-row>
            <span>关键字：</span>
            <el-input v-model="searchVal.keyword" style="width:200px;margin-right:30px"></el-input>

            <el-button size="medium" type="primary" @click="searchBtn">查询</el-button>
            <el-button size="medium" type="primary" @click="addDialog = true">新增</el-button>
            <el-button size="medium" type="primary" @click="openConfigureDialog">接口配置</el-button>
        </el-row>
    </el-header>
        <el-main>
            <el-table :data="tableData" ref="multipleTable" style="width: 100%" @selection-change="changeSelect">
                <el-table-column type="selection" width="55" ></el-table-column>
                <el-table-column align="center" prop="username" label="账号"></el-table-column>
                <el-table-column align="center" prop="createUser" label="使用者姓名"></el-table-column>
                <el-table-column align="center" width="250" label="操作">
                    <template slot-scope="scope">
                        <el-button size="mini" plain type="primary" @click="openDetailsDialog(scope)">详情</el-button>
                    </template>
                </el-table-column>
            </el-table>

            <el-pagination background layout="prev, pager, next" :total="total" :page-size="searchVal.pageSize" :current-page="searchVal.currentPage" style="float:right;margin-top:50px" @current-change="currentChange"></el-pagination>
        </el-main>
    
    <!-- 接口配置弹窗 -->
    <el-dialog title="创建接口配置" :visible.sync="configureDialog" v-if="configureDialog" width="60%"  :before-close="closeConfigureDialog">
        <el-row>
            <el-col :span="9"><h1>接口列表</h1></el-col>
            <el-col :span="15"><h1>接口名称</h1></el-col>
        </el-row>
        <el-container>
            <el-Aside width="37.5%">
                <el-menu default-active="1" style="width: 100%">
                    <el-submenu v-for="(item,index) in treeList" :key="item.index" :index="`${index}`">
                        <template slot="title">
                        <i class="el-icon-location"></i>
                        <span>{{item.title}}</span>
                        </template>
                        <el-menu-item v-for="(itemList,indexList) in item.list" :key="indexList" :index="`${itemList.id}`" @click="choiceMenu(itemList)">{{itemList.interfaceName}}</el-menu-item>
                    </el-submenu>
                </el-menu>
            </el-Aside>
            <el-main>
                <div class="dataListBox">
                    <div class="dataListItem" v-for="(item,index) in releaseShowList" :key="index">
                        {{item}}
                        <i class="el-icon-close closeBtn" @click="deleteList(item)"></i>
                    </div>
                </div>
            </el-main>
        </el-container>
        
        
        <span slot="footer" class="dialog-footer">
            <el-button @click="closeConfigureDialog">取 消</el-button>
            <el-button type="primary" @click="configureSubmit">保 存</el-button>
        </span>
    </el-dialog>


    <!-- 新增弹窗 -->
    <el-dialog title="新增" :visible.sync="addDialog" width="30%" :before-close="handleClose">
        <el-form label-width="140px" :model="addData" :rules="rules" ref="ruleForm">
            <el-form-item label="用户名：" prop="username">
                <el-input v-model="addData.username" style="width:80%"></el-input>
            </el-form-item>
            <el-form-item label="密码：" prop="password">
                <el-input v-model="addData.password" style="width:80%"></el-input>
            </el-form-item>
            <el-form-item label="使用者姓名：" prop="currentUser">
                <el-input v-model="addData.currentUser" style="width:80%"></el-input>
            </el-form-item>
            <el-button type="primary" style="float:right" @click="submitForm('ruleForm')">新 增</el-button>
        </el-form>
        <span slot="footer" class="dialog-footer">
            <!-- <el-button @click="addDialog = false">取 消</el-button>
            <el-button type="primary" @click="addDialog = false">确 定</el-button> -->
        </span>
    </el-dialog>

    <!-- 详情弹窗 -->
    <el-dialog title="详情" :visible.sync="detailsDialog" width="30%" >
        <el-row>
            <el-col :span="12">账号：<span style="color:#409EFF">{{detailsData.username}}</span></el-col>
            <el-col :span="12">密码：<span style="color:#409EFF">{{detailsData.password}}</span></el-col>
        </el-row>
        <el-row>
            <el-col :span="12">使用者姓名：<span style="color:#409EFF">{{detailsData.createUser}}</span></el-col>
            <el-col :span="12">接口数量：<span style="color:#409EFF">{{detailsData.interfaceCount}}</span></el-col>
        </el-row>
        <span slot="footer" class="dialog-footer">
            <!-- <el-button @click="detailsDialog = false">取 消</el-button> -->
            <el-button type="primary" @click="detailsDialog = false">返 回</el-button>
        </span>
    </el-dialog>
  </div>
</template>

<script>
import { pageList,insert,details,dataInterfaceTree,insertUserInterface } from '@/api/dataSecurityManagement/interfaceAccount'
export default {
    data(){
        return{
            userIdArr:[],
            releaseList:[],
            releaseShowList:[],
            //树状数据
            treeList:[
                {
                    title: '增加接口',
                    list:[]
                },
                {
                    title: '删除接口',
                    list:[]
                },
                {
                    title: '修改接口',
                    list:[]
                },
                {
                    title: '查询接口',
                    list:[]
                }
            ],
            //详情数据
            detailsData:{},
            //新增
            addData:{
                currentUser: null,  //使用者姓名
                password: null,     //密码
                username: null      //用户名
            },
            addDialog: false,
            detailsDialog: false,
            configureDialog: false,
            searchVal:{
                keyword:null,
                currentPage: 1,
                pageSize: 10
            },
            total:0,
            tableData:[],
            rules: {
                username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
                password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
                currentUser: [{ required: true, message: '请输入使用者姓名', trigger: 'blur' }]
            }
        }
    },
    methods:{
        //保存接口配置
        async configureSubmit(){
            let string = ``
            if(!this.releaseList.length){
                this.$message({
                    message: "请选择至少一个接口",
                    type: 'warning'
                });
                return
            }
            this.releaseList.forEach(item => {
                string = `${string}interfaceIds=${item}&`
            })
            this.userIdArr.forEach(item => {
                string = `${string}userIds=${item}&`
            })
            string = string.substring(0,string.length - 1)
            let res = await insertUserInterface(string)
            this.$message({
                message: "配置成功",
                type: res.data.msg
            });
            this.releaseList = []
            this.releaseShowList = []
            //取消表格选中状态
            this.$refs.multipleTable.clearSelection();
            this.configureDialog = false
        },
        //删除选中列表
        async deleteList(val){
            this.releaseShowList.forEach(item => {
                if(item == val){
                    let count = this.releaseShowList.indexOf(item)
                    this.releaseShowList.splice(count,1)
                    this.releaseList.splice(count,1)
                }
            })
        },
        //从树状列表中选择菜单
        async choiceMenu(itemList){
            this.releaseList.push(`${itemList.id}`)
            this.releaseList = Array.from(new Set(this.releaseList))

            this.releaseShowList.push(itemList.interfaceName)
            this.releaseShowList = Array.from(new Set(this.releaseShowList))
        },
        //打开接口配置弹窗
        async openConfigureDialog(){
            if( !this.userIdArr.length){
                this.$message({
                    message: "请选择至少一个账号",
                    type: 'warning'
                });
                return
            }
            this.configureDialog = true
            await this.gatDataInterfaceTree()
        },
        //关闭接口配置弹窗
        async closeConfigureDialog(){
            this.releaseList = []
            this.releaseShowList = []
            //取消表格选中状态
            this.$refs.multipleTable.clearSelection();
            this.configureDialog = false
        },
        //获取接口树
        async gatDataInterfaceTree(){
            let res_add = await dataInterfaceTree({type:0})
            let res_delete = await dataInterfaceTree({type:1})
            let res_modify = await dataInterfaceTree({type:2})
            let res_search = await dataInterfaceTree({type:3})
            this.treeList[0].list = res_add.data.data
            this.treeList[1].list = res_delete.data.data
            this.treeList[2].list = res_modify.data.data
            this.treeList[3].list = res_search.data.data
        },
        //多选状态改变
        changeSelect(selection){
            console.log(selection)
            this.userIdArr = selection.map(item => {
                return `${item.id}`
            })
        },
        //打开详情弹窗
        async openDetailsDialog(scope){
            let id = scope.row.id
            let res = await details({id})
            this.detailsData = res.data.data
            console.log(this.detailsData)
            this.detailsDialog = true
        },
        //翻页
        async currentChange(val){
            this.searchVal.currentPage = val
            await this.getPageList()
        },
        //关闭新增弹窗
        handleClose(){
            this.addData = {
                currentUser: null,  //使用者姓名
                password: null,     //密码
                username: null      //用户名
            }
            this.addDialog = false
        },
        //新增
        submitForm(formName) {
            console.log(formName)
            this.$refs[formName].validate((valid) => {
            if (valid) {
                console.log('校验通过')
                this.getInsert()
                this.addDialog = false
            } else {
                console.log('error submit!!');
                return false;
            }
            });
        },
        //调用新增接口
        async getInsert(){
            let res = await insert(this.addData)
            await this.getPageList()
            if(res.data.msg == 'success'){
                this.$message({
                    message: "新增成功",
                    type: res.data.msg
                });
            }
            this.addData = {
                currentUser: null,  //使用者姓名
                password: null,     //密码
                username: null      //用户名
            }
            console.log(res)
        },
        //点击查询按钮
        async searchBtn(){
            await this.getPageList()
        },
        //接口账号分页展示
        async getPageList(){
            let res = await pageList(this.searchVal)
            this.total = res.data.data.total
            this.tableData = res.data.data.records
            console.log(this.tableData)
        },
    },
    async mounted(){
        //接口账号分页展示
        await this.getPageList()
    }
}
</script>

<style scoped lang="scss">
.closeBtn{
  cursor: pointer;
}
.dataListBox{
  display: flex;
  flex-wrap: wrap;
  .dataListItem{
    border: 2px solid #61AFFF;
    border-radius: 5px;
    background: #ECF5FF;
    color: #4FA5FF;
    padding: 5px;
    margin: 10px;
  }
}
</style>