<template>
  <div>
      <el-row style="height:420px">
          <el-col style="height:100%;border:1px solid #ccc;position: relative;" :span="12">
              <el-button size="mini" class="edit_release_btn" type="primary" @click="openEditDialog(dataList_1,1)">编辑</el-button>
              <el-button size="mini" class="edit_release_btn" type="primary" @click="openReleaseDialog(dataList_1)">发布</el-button>
              <h2 class="echarts_title">{{dataList_1.title}}</h2>
              <div style="height:300px" id="echarts_1"></div>
              <p class="echarts_content">{{dataList_1.content}}</p>
          </el-col>

          <el-col style="height:100%;border:1px solid #ccc" :span="12">
              <el-button size="mini" class="edit_release_btn" type="primary" @click="openEditDialog(dataList_2,2)">编辑</el-button>
              <el-button size="mini" class="edit_release_btn" type="primary" @click="openReleaseDialog(dataList_2)">发布</el-button>
              <h2 class="echarts_title">{{dataList_2.title}}</h2>
              <div style="height:300px" id="echarts_2"></div>
              <p class="echarts_content">{{dataList_2.content}}</p>
          </el-col>
      </el-row>

      <el-row style="height:420px">
          <el-col style="height:100%;border:1px solid #ccc" :span="8">
              <el-button size="mini" class="edit_release_btn" type="primary" @click="openEditDialog(dataList_3,3)">编辑</el-button>
              <el-button size="mini" class="edit_release_btn" type="primary" @click="openReleaseDialog(dataList_3)">发布</el-button>
              <h2 class="echarts_title">{{dataList_3.title}}</h2>
              <div style="height:300px" id="echarts_3"></div>
              <p class="echarts_content">{{dataList_3.content}}</p>
          </el-col>

          <el-col style="height:100%;border:1px solid #ccc" :span="8">
              <el-button size="mini" class="edit_release_btn" type="primary" @click="openEditDialog(dataList_4,4)">编辑</el-button>
              <el-button size="mini" class="edit_release_btn" type="primary" @click="openReleaseDialog(dataList_4)">发布</el-button>
              <h2 class="echarts_title">{{dataList_4.title}}</h2>
              <div style="height:300px" id="echarts_4"></div>
              <p class="echarts_content">{{dataList_4.content}}</p>
          </el-col>

          <el-col style="height:100%;border:1px solid #ccc" :span="8">
              <el-button size="mini" class="edit_release_btn" type="primary" @click="openEditDialog(dataList_5,5)">编辑</el-button>
              <el-button size="mini" class="edit_release_btn" type="primary" @click="openReleaseDialog(dataList_5)">发布</el-button>
              <h2 class="echarts_title">{{dataList_5.title}}</h2>
              <div style="height:300px" id="echarts_5"></div>
              <p class="echarts_content">{{dataList_5.content}}</p>
          </el-col>
      </el-row>

      <el-row style="height:420px">
          <el-col style="height:100%;border:1px solid #ccc" :span="8">
              <el-button size="mini" class="edit_release_btn" type="primary" @click="openEditDialog(dataList_6,6)">编辑</el-button>
              <el-button size="mini" class="edit_release_btn" type="primary" @click="openReleaseDialog(dataList_6)">发布</el-button>
              <h2 class="echarts_title">{{dataList_6.title}}</h2>
              <div style="height:300px" id="echarts_6"></div>
              <p class="echarts_content">{{dataList_6.content}}</p>
          </el-col>

          <el-col style="height:100%;border:1px solid #ccc" :span="8">
              <el-button size="mini" class="edit_release_btn" type="primary" @click="openEditDialog(dataList_7,7)">编辑</el-button>
              <el-button size="mini" class="edit_release_btn" type="primary" @click="openReleaseDialog(dataList_7)">发布</el-button>
              <h2 class="echarts_title">{{dataList_7.title}}</h2>
              <div style="height:300px" id="echarts_7"></div>
              <p class="echarts_content">{{dataList_7.content}}</p>
          </el-col>

          <el-col style="height:100%;border:1px solid #ccc" :span="8">
              <el-button size="mini" class="edit_release_btn" type="primary" @click="openEditDialog(dataList_8,8)">编辑</el-button>
              <el-button size="mini" class="edit_release_btn" type="primary" @click="openReleaseDialog(dataList_8)">发布</el-button>
              <h2 class="echarts_title">{{dataList_8.title}}</h2>
              <div style="height:300px" id="echarts_8"></div>
              <p class="echarts_content">{{dataList_8.content}}</p>
          </el-col>
      </el-row>

        <!-- 编辑弹窗 -->
        <el-dialog :visible.sync="editDialog" width="60%" :before-close="closeEditDialog">
            <el-form ref="requestData" :model="requestData" label-width="100px">
                <el-form-item label="标题：">
                    <el-input v-model="requestData.title"></el-input>
                </el-form-item>
                <el-form-item label="图表配置：">
                    <i style="font-size:46px;cursor: pointer;" class="el-icon-s-tools" @click="openConfigureDialog"></i>
                </el-form-item>
                <el-form-item label="说明内容：">
                    <el-input type="textarea" rows="6" v-model="requestData.content"></el-input>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="closeEditDialog">取 消</el-button>
                <el-button type="primary" @click="add_edit_echarts">确 定</el-button>
            </span>
        </el-dialog>

        <!-- 配置弹窗 -->
        <el-dialog :visible.sync="configureDialog" width="90%" :before-close="closeConfigureDialog">
            <el-form ref="requestData" :model="requestData" label-width="100px">
                <el-form-item label="图表类型：">
                    <el-radio-group v-model="requestData.chartType">
                    <el-radio-button label="0">折线图</el-radio-button>
                    <el-radio-button label="1">柱状图</el-radio-button>
                    <el-radio-button label="2">饼状图</el-radio-button>
                    </el-radio-group>
                </el-form-item>

                <el-form-item label="数据表名称：">
                    <el-select v-model="requestData.tableName" placeholder="请选择数据表名称" @change="changeTableName">
                        <el-option v-for="(item,index) in tableNameList" :key="index" :label="item.tableComment" :value="item.tableName"></el-option>
                    </el-select>
                </el-form-item>

                <!-- 折线图 -->
                <template v-if="requestData.chartType == '0'">

                    <h1 style="margin-bottom:20px">横轴字段：</h1>

                    <el-row style="overflow: auto;width:100%">
                        <el-row type="flex" >
                            <el-col v-for="(item,index) in HZZD_list" :key="index" style="text-align:center;margin:0 5px;min-width:180px"><el-radio v-model="radio" :label="item.name" @change="changeEcharts_x">{{item.value}}</el-radio>  </el-col>
                        </el-row>
                        <el-row type="flex" >
                            <el-col v-for="(item,index) in HZZD_list" :key="index" style="text-align:center;margin:0 5px;min-width:180px">{{item.name}}</el-col>
                        </el-row>
                    </el-row>

                    <h1 style="margin-top:20px">数据选择：</h1>
                    <el-form-item label="纵轴单位：">
                        <el-input v-model="requestData.yunit" style="width:25%"></el-input>
                    </el-form-item> 


                    <!-- <table width="1000px">
                        <tr style="max-width:1200px;overflow:hidden">
                            <el-checkbox-group v-model="checkList">
                                <th v-for="(item,index) in HZZD_list" :key="index"><el-checkbox :label="item.name">{{item.value}}</el-checkbox></th>
                            </el-checkbox-group>
                        </tr>
                        <tr>
                            <td>444</td>
                        </tr>
                    </table> -->


                    <el-row type="flex"  style="font-size:20px;margin:10px 0 10px 5px">
                        <el-checkbox-group v-model="checkList" @change="changeEcharts_y">
                            <el-checkbox v-for="(item,index) in HZZD_list" :key="index" :label="item.name">{{item.value}}</el-checkbox>
                        </el-checkbox-group>
                    </el-row>
                    <el-table :data="SJXZ_list" style="width: 100%" border :show-header='true'>
                        <el-table-column v-for="(item,index) in HZZD_list" :key="index" :prop="item.name" :label="item.value"></el-table-column>
                    </el-table>

                    <h3 style="margin-left:20px">条件选择：</h3>

                    <el-select v-model="dataCondition" placeholder="请选择" style="margin-left:100px">
                        <el-option v-for="(item,index) in selectList" :key="index" :label="item.value" :value="item.name"></el-option>
                    </el-select>

                    <i class="el-icon-plus addYes" @click="addYesBtn"></i>

                    <el-form-item v-for="(item,index) in yes" :key="index" label="是：" style="margin-top:20px">
                        <el-input v-model="item.text" style="width:25%"></el-input>
                    </el-form-item>
                </template>

                <!-- 柱状图 -->
                <template v-if="requestData.chartType == '1'">

                    <h1 style="margin-bottom:20px">横轴字段：</h1>

                    <el-row style="overflow: auto;width:100%">
                        <el-row type="flex" >
                            <el-col v-for="(item,index) in HZZD_list" :key="index" style="text-align:center;margin:0 5px;min-width:180px"><el-radio v-model="radio" :label="item.name" @change="changeEcharts_x">{{item.value}}</el-radio>  </el-col>
                        </el-row>
                        <el-row type="flex" >
                            <el-col v-for="(item,index) in HZZD_list" :key="index" style="text-align:center;margin:0 5px;min-width:180px">{{item.name}}</el-col>
                        </el-row>
                    </el-row>

                    <h1 style="margin-top:20px">数据选择：</h1>
                    <el-form-item label="纵轴单位：">
                        <el-input v-model="requestData.yunit" style="width:25%"></el-input>
                    </el-form-item> 


                    <!-- <table width="1000px">
                        <tr style="max-width:1200px;overflow:hidden">
                            <el-checkbox-group v-model="checkList">
                                <th v-for="(item,index) in HZZD_list" :key="index"><el-checkbox :label="item.name">{{item.value}}</el-checkbox></th>
                            </el-checkbox-group>
                        </tr>
                        <tr>
                            <td>444</td>
                        </tr>
                    </table> -->


                    <el-row type="flex"  style="font-size:20px;margin:10px 0 10px 5px">
                        <el-checkbox-group v-model="checkList" @change="changeEcharts_y">
                            <el-checkbox v-for="(item,index) in HZZD_list" :key="index" :label="item.name">{{item.value}}</el-checkbox>
                        </el-checkbox-group>
                    </el-row>
                    <el-table :data="SJXZ_list" style="width: 100%" border :show-header='true'>
                        <el-table-column v-for="(item,index) in HZZD_list" :key="index" :prop="item.name" :label="item.value"></el-table-column>
                    </el-table>

                    <h3 style="margin-left:20px">条件选择：</h3>

                    <el-select v-model="dataCondition" placeholder="请选择" style="margin-left:100px">
                        <el-option v-for="(item,index) in selectList" :key="index" :label="item.value" :value="item.name"></el-option>
                    </el-select>

                    <i class="el-icon-plus addYes" @click="addYesBtn"></i>

                    <el-form-item v-for="(item,index) in yes" :key="index" label="是：" style="margin-top:20px">
                        <el-input v-model="item.text" style="width:25%"></el-input>
                    </el-form-item>
                </template>

                <!-- 饼图 -->
                <template v-if="requestData.chartType == '2'">
                    <el-row type="flex" justify="center" align="center" style="font-size:20px;margin:10px 0 10px 5px">
                        <el-col><input type="checkbox" name="category" value="日期" style="margin-right:8px" />日期</el-col>
                        <el-col><input type="checkbox" name="category" value="名字" style="margin-right:8px" />名字</el-col>
                        <el-col><input type="checkbox" name="category" value="地址" style="margin-right:8px" />地址</el-col>
                    </el-row>
                    <el-table :data="tableData" style="width: 100%" border :show-header='false'>
                        <el-table-column prop="date" label="日期"></el-table-column>
                        <el-table-column prop="name" label="姓名"></el-table-column>
                        <el-table-column prop="address" label="地址"></el-table-column>
                    </el-table>
                </template>

            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="closeConfigureDialog">取 消</el-button>
                <el-button type="primary" @click="submitConfigureDialog">确 定</el-button>
            </span>
        </el-dialog>

        <!-- 发布弹窗 -->
        <el-dialog :visible.sync="releaseDialog" width="40%">
            <h2 style="margin: 100px 0;text-align:center">是否发布到门户网站进行展示</h2>
            <span slot="footer" class="dialog-footer">
                <el-button @click="releaseDialog = false">取 消</el-button>
                <el-button type="primary" @click="submitReleaseDialog">确 定</el-button>
            </span>
        </el-dialog>
  </div>
</template>

<script>
import { getInitializationDataResourceMaintenance, getTableName, getTableFieldsAndNotesByTableName, getConnectionAppointDataBaseAppointTablesData, addDataResourceMaintenance, updateIsReleaseById } from '@/api/dataAnalysisAndManagement/resourceMaintenance'
import echarts from '@/echarts/resourceMaintenance'
export default {
    data(){
        return{
            radioObj:{},
            checkboxObj:[],
            releaseId:null,
            requestData:{
                id: null,
                chartType: '0',
                dataCondition: null,
                content: null,
                isRelease: 1,
                position: null,
                tableName: null,
                title: null,
                xaxis: null,
                yaxis: null,
                yunit: null
            },
            yes:[{text:null}],
            selectList:[],
            dataCondition: null,
            radio:null,
            checkList:[],
            HZZD_list:[],           //横轴字段表格
            SJXZ_list:[],           //数据选择表格
            tableNameList:[],
            editDialog:false,
            configureDialog:false,
            releaseDialog:false,
            form:{
                title: null,
                content: null,
            },
            configure:{
                type:0,
                tableName: null,
            },
            dataList_1:{},
            dataList_2:{},
            dataList_3:{},
            dataList_4:{},
            dataList_5:{},
            dataList_6:{},
            dataList_7:{},
            dataList_8:{},
        }
    },
    methods:{
        //初始化
        async initialization(){
            this.selectList = []
            this.dataCondition = null
            this.radio = null
            this.checkList = []
            this.yes = [{text:null}]
            this.HZZD_list = []
            this.SJXZ_list = []
        },
        //初始化表单
        async initializationData(){
            this.requestData = {
                id: null,
                chartType: '0',
                dataCondition: null,
                content: null,
                isRelease: 1,
                position: null,
                tableName: null,
                title: null,
                xaxis: null,
                yaxis: null,
                yunit: null
            }
        },
        //添加是
        async addYesBtn(){
            this.yes.push({text:null})
        },
        //新增、修改echarts图表
        async add_edit_echarts(){
            let res = await addDataResourceMaintenance(JSON.stringify(this.requestData))
            let type = res.data.msg.includes('成功') ? 'success' : 'warning'
            this.$message({
                message: res.data.msg,
                type
            });
            await this.getInitializationDataResourceMaintenanceData()
            await this.initializationPage()
            await this.initializationData()
            this.editDialog = false
        },
        //打开修改弹窗
        async openEditDialog(dataList,position){
            if(dataList.id){
                this.requestData.id = dataList.id
            }
            this.requestData.position = position
            this.editDialog = true
        },
        //关闭修改弹窗
        async closeEditDialog(){
            await this.initialization()
            await this.initializationData()
            this.editDialog = false
        },
        //确定编辑弹窗
        async submitConfigureDialog(){
            let arr = this.yes.map(item => item.text)
            this.requestData.dataCondition = `${this.dataCondition}=${arr.join(':')}`
            console.log(this.requestData)
            if(!this.requestData.tableName){
                this.$message({
                    message: '表名不能为空',
                    type: 'warning'
                });
                return
            }
            if(!this.requestData.xaxis){
                this.$message({
                    message: '横轴字段不能为空',
                    type: 'warning'
                });
                return
            }
            if(!this.requestData.yaxis){
                this.$message({
                    message: '数据选择不能为空',
                    type: 'warning'
                });
                return
            }
            this.configureDialog = false
            await this.initialization()
        },
        //关闭编辑弹窗
        async closeConfigureDialog(){
            this.configureDialog = false
            await this.initialization()

        },
        //打开发布弹窗
        async openReleaseDialog(dataList){
            if(dataList.id){
                this.releaseId = dataList.id
            }
            
            this.releaseDialog = true
        },
        //完成发布功能
        async submitReleaseDialog(){
            if(!this.releaseId){
                this.releaseDialog = false
                return
            }
            let res = await updateIsReleaseById({id:this.releaseId})
            let type = res.data.msg.includes('成功') ? 'success' : 'warning'
            this.$message({
                message: res.data.msg,
                type
            });
            this.releaseDialog = false
        },
        //选择数据表名称
        async changeTableName(val){
            await this.initialization()
            await this.getTableFieldsAndNotesByTableNameData(val)
            await this.getConnectionAppointDataBaseAppointTablesDataData(val)
        },
        //改变多选按钮
        async changeEcharts_y(val){
            let arr = val.map(i => {
                let obj = {}
                this.HZZD_list.forEach(item => {
                    if(item.name == i){
                        obj = item
                    }
                })
                return `${obj.name}-${obj.value}`
            })
            this.checkboxObj = val.map(i => {
                let obj = {}
                this.HZZD_list.forEach(item => {
                    if(item.name == i){
                        obj = item
                    }
                })
                return obj
            })
            this.selectList = [...new Set([this.radioObj,...this.checkboxObj])]
            // console.log(this.selectList)
            this.requestData.yaxis = arr.join(',')
        },
        //改变单选表单
        changeEcharts_x(val){
            this.radioObj = this.HZZD_list.filter(item => item.name == val)[0]
            this.selectList = []
            this.selectList.push(this.radioObj)
            this.selectList = [...new Set([...this.selectList,...this.checkboxObj])]
            // console.log(this.selectList)
            this.HZZD_list.forEach(item => {
                if(item.name == val){
                    this.requestData.xaxis = `${item.name}-${item.value}`
                }
            })
        },
        //获取当前连接下指定数据库的指定表的数据
        async getConnectionAppointDataBaseAppointTablesDataData(tableName){
            let res = await getConnectionAppointDataBaseAppointTablesData(tableName)
            this.SJXZ_list = res.data.data
            // console.log(this.SJXZ_list)
        },
        //根据表名称获取表字段及注释
        async getTableFieldsAndNotesByTableNameData(tableName){
            let res = await getTableFieldsAndNotesByTableName({tableName})
            // console.log(res.data.data)
            this.HZZD_list = res.data.data
        },
        //获取数据库中所有表名称及注释
        async getTableNameData(){
            let res = await getTableName()
            this.tableNameList = res.data.data.data
        },
        //打开配置弹窗
        async openConfigureDialog(){
            // this.editDialog = false
            this.configureDialog = true
            
        },
        //资源专题初始化数据接口
        async getInitializationDataResourceMaintenanceData(){
            let res = await getInitializationDataResourceMaintenance()
            // console.log(res)
            res.data.data.forEach(item => {
                if(item.position == 1){
                    this.dataList_1 = item
                }else if(item.position == 2){
                    this.dataList_2 = item
                }else if(item.position == 3){
                    this.dataList_3 = item
                }else if(item.position == 4){
                    this.dataList_4 = item
                }else if(item.position == 5){
                    this.dataList_5 = item
                }else if(item.position == 6){
                    this.dataList_6 = item
                }else if(item.position == 7){
                    this.dataList_7 = item
                }else if(item.position == 8){
                    this.dataList_8 = item
                }
            })
        },
        //echarts配置
        async setEcharts(indexObj, id){
            // console.log(indexObj)
            //判断折线图、柱状图、饼图
            let type = (indexObj.chartType == "0") ? 'echarts_line' : ((indexObj.chartType == "1") ? 'echarts_bar' : 'echarts_pie')
            let echartsType = (indexObj.chartType == "0") ? 'line' : ((indexObj.chartType == "1") ? 'bar' : 'pie')
            // if(indexObj.chartType == "0"){
                
            // }
            let series = []
                let name = []
                for (const key in indexObj.y) {
                    indexObj.y[key] = indexObj.y[key].map(item => item? item : 0)
                    series.push({
                        name: key,
                        type: echartsType,
                        data: indexObj.y[key]
                    })
                    name.push(key)
                }
                echarts[type](id, indexObj.x, series, name, indexObj.yunit)

        },
        //页面echarts图表初始化
        async initializationPage(){
            if(this.dataList_1.chartType == '0' || this.dataList_1.chartType == '1' || this.dataList_1.chartType == '2' ){
                await this.setEcharts(this.dataList_1, 'echarts_1')
            }
            if(this.dataList_2.chartType == '0' || this.dataList_2.chartType == '1' || this.dataList_2.chartType == '2' ){
                await this.setEcharts(this.dataList_2, 'echarts_2')
            }
            if(this.dataList_3.chartType == '0' || this.dataList_3.chartType == '1' || this.dataList_3.chartType == '2' ){
                await this.setEcharts(this.dataList_3, 'echarts_3')
            }
            if(this.dataList_4.chartType == '0' || this.dataList_4.chartType == '1' || this.dataList_4.chartType == '2' ){
                await this.setEcharts(this.dataList_4, 'echarts_4')
            }
            if(this.dataList_5.chartType == '0' || this.dataList_5.chartType == '1' || this.dataList_5.chartType == '2' ){
                await this.setEcharts(this.dataList_5, 'echarts_5')
            }
            if(this.dataList_6.chartType == '0' || this.dataList_6.chartType == '1' || this.dataList_6.chartType == '2' ){
                await this.setEcharts(this.dataList_6, 'echarts_6')
            }
            if(this.dataList_7.chartType == '0' || this.dataList_7.chartType == '1' || this.dataList_7.chartType == '2' ){
                await this.setEcharts(this.dataList_7, 'echarts_7')
            }
            if(this.dataList_8.chartType == '0' || this.dataList_8.chartType == '1' || this.dataList_8.chartType == '2' ){
                await this.setEcharts(this.dataList_8, 'echarts_8')
            }
        }
    },
    //配置echarts图表
    async created(){
        //获取数据库中所有表名称及注释
        await this.getTableNameData()

        await this.getInitializationDataResourceMaintenanceData()
        await this.initializationPage()
    },
}
</script>

<style scoped lang="scss">
.edit_release_btn{
    // position: absolute;
    position: relative;
    top: 10px;
    float: right;
    margin-right: 10px;
    z-index: 99;
}
.echarts_title{
    position: relative;
    top: 10px;
    left: 15px;
}
.echarts_content{
    position: relative;
    left: 15px;
}
.addYes{
    top: 70px;
    left:-310px;
    position: relative;
    font-size:46px;
    cursor: pointer;
}
</style>