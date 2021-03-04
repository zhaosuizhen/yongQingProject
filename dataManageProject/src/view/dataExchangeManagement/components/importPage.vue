<template>
  <div>
      <el-row>
        <el-col :span="6">
          <h1>源系统</h1>
          <span>数据库类型：</span>
          <el-select v-model="searchData_1_source.dataBaseType" placeholder="请选择" style="width:200px" :disabled="true">
            <el-option label="MySql" :value="0"></el-option>
            <el-option label="Orcale" :value="1"></el-option>
            <el-option label="sqlServer" :value="2"></el-option>
          </el-select>
          <el-menu default-active="2" class="el-menu-vertical-demo" style="width:95%;overflow:auto;height:25vh" :unique-opened="true">
            <!-- <el-submenu :index="`1_${index_1}`" v-for="(item_1,index_1) in listData_1_source" :key="index_1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span class="menuItem">{{item_1.dataBaseName}}</span>
              </template> -->
                <el-select v-model="select_source" placeholder="请选择活动区域" @change="change_select_source">
                    <el-option :label="item_1.dataBaseName" :value="index_1" v-for="(item_1,index_1) in listData_1_source" :key="index_1"></el-option>
                </el-select>
              <el-submenu :index="`2_${index_2}`" v-for="(item_2,key,index_2) in listData_2_source" :key="index_2">
                <template slot="title">{{key}}</template>
                <el-menu-item :index="`3_${index_3}`" v-for="(item_3,index_3) in item_2" :key="index_3" @click="clickTable_source(item_3, key)">{{item_3}}</el-menu-item>
              </el-submenu>
            <!-- </el-submenu> -->
          </el-menu>
        </el-col>
        <el-col :span="6">
          <el-table :data="tableData_source" style="width: 100%;overflow:auto;height:25vh" @selection-change="handleSelectionChange_source">>
            <el-table-column type="selection" width="55"></el-table-column>
            <el-table-column prop="fieldName" label="字段名称" ></el-table-column>
            <el-table-column prop="notes" label="字段注释" ></el-table-column>
            <el-table-column prop="dataType" label="数据类型" ></el-table-column>
          </el-table>
        </el-col>

        <el-col :span="6">
          <h1>目标系统</h1>
          <span>数据库类型：</span>
          <el-select v-model="searchData_1_target.dataBaseType" placeholder="请选择" style="width:200px" :disabled="true">
            <el-option label="MySql" :value="0"></el-option>
            <el-option label="Orcale" :value="1"></el-option>
            <el-option label="sqlServer" :value="2"></el-option>
          </el-select>
          <el-menu default-active="2" class="el-menu-vertical-demo" style="width:95%;overflow:auto;height:25vh" @open="clickMenu_target" :unique-opened="true">
            <!-- <el-submenu :index="`1_${index_1}`" v-for="(item_1,index_1) in listData_1_target" :key="index_1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>{{item_1.dataBaseName}}</span>
              </template> -->
              <el-select v-model="select_target" placeholder="请选择活动区域" @change="change_select_target">
                    <el-option :label="item_1.dataBaseName" :value="index_1" v-for="(item_1,index_1) in listData_1_source" :key="index_1"></el-option>
                </el-select>
              <el-submenu :index="`2_${index_2}`" v-for="(item_2,key,index_2) in listData_2_target" :key="index_2">
                <template slot="title">{{key}}</template>
                <el-menu-item :index="`3_${index_3}`" v-for="(item_3,index_3) in item_2" :key="index_3" @click="clickTable_target(item_3, key)">{{item_3}}</el-menu-item>
              </el-submenu>
            <!-- </el-submenu> -->
          </el-menu>
        </el-col>
        <el-col :span="6">
          <el-table :data="tableData_target" style="width: 100%;overflow:auto;height:25vh" @selection-change="handleSelectionChange_target">
            <el-table-column type="selection" width="55"></el-table-column>
            <el-table-column prop="fieldName" label="字段名称" ></el-table-column>
            <el-table-column prop="notes" label="字段注释" ></el-table-column>
            <el-table-column prop="dataType" label="数据类型" ></el-table-column>
          </el-table>
        </el-col>
      </el-row>

      <el-row>
        <el-form ref="form"  label-width="80px">
          <el-form-item label="导入规则">
            <el-radio-group v-model="formData.dataType">
              <el-radio :label="0">全量</el-radio>
              <el-radio :label="1">增量</el-radio>
              <el-radio :label="2">定时</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="导入频次">
            <el-radio-group v-model="formData.frequency" :disabled="formData.dataType !== 2" @change="changeFrequency">
              <el-radio label="每天"></el-radio>
              <el-radio label="每周"></el-radio>
              <el-radio label="每月"></el-radio>
              <el-radio label="每年"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="导入时间">
            <el-select  placeholder="请选择导入时间" v-model="formData.time" :disabled="(formData.dataType !== 2) || (formData.frequency !== '每天')">
              <el-option :label="`${item}点`" :value="item" v-for="(item,index) in 24" :key="index"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
        <el-row>
            <el-col :span="12">
                <el-button style="float:right;margin-right:10px" type="primary" @click="submitBtn">保 存</el-button>
            </el-col>
            <el-col :span="12">
                <el-button style="float:left;margin-left:10px" @click="closeDialog">取 消</el-button>
            </el-col>
        </el-row>
      </el-row>
  </div>
</template>

<script>
import { getDataBasePageList,getConnectionAppointDataBaseAllTables,getConnectionAllDataBase,
        getConnectionAppointDataBaseAppointTablesAllField,dataBasePreservation } from '@/api/dataExchangeManagement/dataImport'
// import { getConnectionAllDataBaseTest } from '@/api/dataExchangeManagement/dataImportTest'
export default {
  data(){
    return{
      //_source为源系统
      //_target为目标系统
      select_source:'',
      select_target:'',

      listData_1_source:[],
      searchData_1_source:{},
      listData_2_source:[],
      listData_3_source:[],
      clickDataBaseName_source:null,
      clickTableName_source:null,
      tableData_source:[],
      column_source:'',
      
      listData_1_target:[],
      searchData_1_target:{},
      listData_2_target:[],
      listData_3_target:[],
      clickDataBaseName_target:null,
      clickTableName_target:null,
      tableData_target:[],
      column_target:'',

      formData:{
        dataType:null,
        frequency:null,
        time:null
      },
    }
  },
  methods:{
      async change_select_source(){
          this.tableData_source = []
          this.listData_2_source = {}
          this.searchData_1_source = this.listData_1_source[this.select_source]
          //获取二级菜单
          await this.getConnectionAllDataBaseList_source(this.searchData_1_source)
      },
      async change_select_target(){
          this.tableData_target = []
          this.listData_2_target = {}
          this.searchData_1_target = this.listData_1_target[this.select_target]
          //获取二级菜单
          await this.getConnectionAllDataBaseList_target(this.searchData_1_target)
      },
    //改变导入频次
    changeFrequency(){
      if(this.formData.frequency != '每天'){
        this.formData.time = null
      }
    },
    handleSelectionChange_source(val) {
      this.column_source = val.map(item => item.fieldName).join(',')
    },
    handleSelectionChange_target(val){
      this.column_target = val.map(item => item.fieldName).join(',')
      // console.log(this.column_target)
    },
    //保存添加
    async submitBtn(){
      let obj = {
        dataBaseType: this.searchData_1_source.dataBaseType,    //数据库类型
        dataType: this.formData.dataType,        //数据类型

        sourceColumn: this.column_source,    //数据源字段
        sourceDataBase: this.clickDataBaseName_source,  //数据源数据库
        sourceDataTable: this.clickTableName_source.substring(0,this.clickTableName_source.length - 2), //数据源表名称
        sourceIp: this.searchData_1_source.dataBaseUrl,        //数据源IP
        sourcePassword: this.searchData_1_source.dataBasePassword,  //数据源用户密码
        sourcePort: this.searchData_1_source.dataBasePort,      //数据源端口
        sourceUsername: this.searchData_1_source.dataBaseUsername,  //数据源用户名

        targetColumn: this.column_target,    //目标字段
        targetDataBase: this.clickDataBaseName_target,  //目标数据库
        targetDataTable: this.clickTableName_target.substring(0,this.clickTableName_target.length - 2), //目标表
        targetIp: this.searchData_1_target.dataBaseUrl,        //目标IP
        targetPassword: this.searchData_1_target.dataBasePassword,  //目标用户密码
        targetPort: this.searchData_1_target.dataBasePort,      //目标端口
        targetUsername: this.searchData_1_target.dataBaseUsername,  //目标用户名


        timingImportTime: null,//定时导入时间
        updateTime: null //修改时间
      }
      console.log(obj)
      console.log(this.clickTableName_target)
      debugger
      if(obj.dataType == null){
        this.$message({
          message: `请选择导入规则`,
          type: 'warning'
        });
        return
      }
      if(obj.dataType == 2){
        if(this.formData.frequency == null){
          this.$message({
            message: `请选择导入频次`,
            type: 'warning'
          });
          return
        }
        if(this.formData.frequency == '每天' &&  this.formData.time == null){
          this.$message({
            message: `请选择导入时间`,
            type: 'warning'
          });
          return
        }
        obj.timingImportTime = `${this.formData.frequency},${this.formData.time}`
      }else{
        obj.timingImportTime = null
      }
      //判断数据库类型
      if(this.searchData_1_source.dataBaseType !== this.searchData_1_target.dataBaseType){
        this.$message({
          message: `数据库类型不同，请重新选择`,
          type: 'warning'
        });
        return
      }
      // //拼接数据源字段
      // this.tableData_source.forEach((item,index) => {
      //   if(index == this.tableData_source.length - 1){
      //     obj.sourceColumn += `${item.fieldName}`
      //   }else{
      //     obj.sourceColumn += `${item.fieldName},`
      //   }
      // })
      // //拼接目标字段
      // this.tableData_target.forEach((item,index) => {
      //   if(index == this.tableData_target.length - 1){
      //     obj.targetColumn += `${item.fieldName}`
      //   }else{
      //     obj.targetColumn += `${item.fieldName},`
      //   }
      // })
      // console.log(obj)
      let res = await dataBasePreservation(JSON.stringify(obj))
      let type = res.data.msg.includes('成功') ? 'success' : (res.data.msg.includes('失败') ? 'error' : 'warning')
      this.$message({
        message: res.data.msg,
        type
      });
      // console.log(res)
      await this.closeDialog()
    },
    //关闭弹窗
    async closeDialog(){
      this.$emit('close')
    },
    //点击表
    async clickTable_source(tableName, key){
        this.tableData_source = []
      this.clickTableName_source = tableName
      let res = await getConnectionAppointDataBaseAppointTablesAllField({
        dataBaseName:key,
        dataBasePassword:this.searchData_1_source.dataBasePassword,
        dataBasePort:this.searchData_1_source.dataBasePort,
        dataBaseType:this.searchData_1_source.dataBaseType,
        dataBaseUrl:this.searchData_1_source.dataBaseUrl,
        dataBaseUsername:this.searchData_1_source.dataBaseUsername,
        tableName:this.clickTableName_source
      })
      this.tableData_source = res.data.data
      // console.log(this.tableData_source)
    },
    async clickTable_target(tableName, key){
        this.tableData_target = []
      this.clickTableName_target = tableName
      let res = await getConnectionAppointDataBaseAppointTablesAllField({
        dataBaseName:key,
        dataBasePassword:this.searchData_1_target.dataBasePassword,
        dataBasePort:this.searchData_1_target.dataBasePort,
        dataBaseType:this.searchData_1_target.dataBaseType,
        dataBaseUrl:this.searchData_1_target.dataBaseUrl,
        dataBaseUsername:this.searchData_1_target.dataBaseUsername,
        tableName:this.clickTableName_target
      })
      this.tableData_target = res.data.data
      // console.log(this.tableData_target)
    },
    //点击菜单
    async clickMenu_source(index){
      if(index.substring(0,2) == '1_'){
        this.listData_3_source = []
        this.listData_2_source = []
        this.searchData_1_source = this.listData_1_source[index.substring(2)]
        //获取二级菜单
        await this.getConnectionAllDataBaseList_source(this.searchData_1_source)
      }else if(index.substring(0,2) == '2_'){
        this.listData_3_source = []
        this.clickDataBaseName_source = this.listData_2_source[index.substring(2)]
        // await this.getConnectionAppointDataBaseAllTablesList_source({
        //   dataBaseName:this.clickDataBaseName_source,
        //   dataBasePassword:this.searchData_1_source.dataBasePassword,
        //   dataBasePort:this.searchData_1_source.dataBasePort,
        //   dataBaseType:this.searchData_1_source.dataBaseType,
        //   dataBaseUrl:this.searchData_1_source.dataBaseUrl,
        //   dataBaseUsername:this.searchData_1_source.dataBaseUsername,
        // })
      }
    },
    async clickMenu_target(index){
      if(index.substring(0,2) == '1_'){
        this.listData_2_target = []
        this.listData_3_target = []
        this.searchData_1_target = this.listData_1_target[index.substring(2)]
        //获取二级菜单
        await this.getConnectionAllDataBaseList_target(this.searchData_1_target)
      }else if(index.substring(0,2) == '2_'){
        this.listData_3_target = []
        this.clickDataBaseName_target = this.listData_2_target[index.substring(2)]
        await this.getConnectionAppointDataBaseAllTablesList_target({
          dataBaseName:this.clickDataBaseName_target,
          dataBasePassword:this.searchData_1_target.dataBasePassword,
          dataBasePort:this.searchData_1_target.dataBasePort,
          dataBaseType:this.searchData_1_target.dataBaseType,
          dataBaseUrl:this.searchData_1_target.dataBaseUrl,
          dataBaseUsername:this.searchData_1_target.dataBaseUsername,
        })
      }
    },
    //获取当前连接下所有表
    async getConnectionAppointDataBaseAllTablesList_source(params){
      let res = await getConnectionAppointDataBaseAllTables(params)
      this.listData_3_source = res.data.data
    },
    async getConnectionAppointDataBaseAllTablesList_target(params){
      let res = await getConnectionAppointDataBaseAllTables(params)
      this.listData_3_target = res.data.data
    },
    //获取当前连接下所有数据库
    async getConnectionAllDataBaseList_source(params){
      let res = await getConnectionAllDataBase(params)
      console.log(res.data.data)
      this.listData_2_source = res.data.data
    },
    async getConnectionAllDataBaseList_target(params){
      let res = await getConnectionAllDataBase(params)
      this.listData_2_target = res.data.data
    },
    //数据库配置分页查询接口
    async getDataBasePage_source(){
      let res = await getDataBasePageList()
      this.listData_1_source = res.data.data.records
      this.listData_1_target = res.data.data.records
      // console.log(res.data.data.records)
    },
    async getDataBasePage_target(){
      let res = await getDataBasePageList()
      this.listData_1_target = res.data.data.records
      // console.log(res.data.data.records)
    },
  },
  async mounted(){
    //数据库配置分页查询接口
    await this.getDataBasePage_source()
    // await this.getDataBasePage_target()
  }
}
</script>
  
<style scoped lang="scss">
// .menuItem{
//     display: block;
//     width: 100%;
//     height: 100%;
//     position: absolute;
//     top: 0;
//     left: 0;
// }
.el-menu-item{
  height: 22px !important;
  line-height: 22px !important;
}
.el-menu-item{
  height: 30px !important;
  line-height: 30px !important;
}
.el-submenu__title{
  height: 30px !important;
  line-height: 30px !important;
}
.el-menu-item.is-active{
  background: #409EFF !important;
  color: #fff;
}
</style>