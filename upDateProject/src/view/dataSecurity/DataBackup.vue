<template>
  <div style="padding-bottom: 100px">
    <!-- 数据备份状态表 -->
    <!-- <el-button-group style="margin: 10px 0 30px">
      <el-button plain @click="gotoRunningStatus">运行状态</el-button>
      <el-button type="primary">数据备份与还原</el-button>
    </el-button-group> -->
    <el-container style="width:1000px">
        <el-table
            :data="backupData"
            border
            style="width: 100%">
            <el-table-column
            label="操作"
            width="100">
            <template slot-scope="scope">
                <el-checkbox v-model="scope.row.checked"></el-checkbox>
            </template>
            </el-table-column>
            <el-table-column
            prop="name"
            label="库表名称">
            </el-table-column>
            <el-table-column
            prop="comments"
            label="库表注释">
            </el-table-column>
            <el-table-column
            prop="size"
            label="备份大小">
            </el-table-column>
        </el-table>
    </el-container>
    <!-- <el-container style="width:650px">
        <el-form ref="form" :model="form" label-width="180px" style="width:100%;margin:50px 0 0 100px">
        <el-form-item label="数据库连接地址：">
            <el-input type="text" v-model="form.addr"></el-input>
        </el-form-item>
        <el-form-item label="数据库端口号：">
            <el-input type="text" v-model="form.port"></el-input>
        </el-form-item>
        <el-form-item label="用户名：">
            <el-input type="text" v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item label="密码：">
            <el-input type="password" show-password v-model="form.password"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="handleLink" style="margin:0 45px" size="small">测试连接</el-button>
            <el-button type="primary" @click="handleBackup" style="margin:0 45px" size="small">备份</el-button>
        </el-form-item>
        </el-form>
    </el-container> -->
    <!-- 备份按钮 -->
    <el-button type="primary" @click="handleBackup" style="margin:20px 45px;padding-left: 30px;padding-right: 30px">备份</el-button>
    <!-- 数据还原表 -->
    <el-container style="margin-top:20px">
        <el-table
            :data="restoreData"
            border>
            <el-table-column
              prop="name"
              label="库表名称"
              :show-overflow-tooltip="true"
              :resizable="false">
            </el-table-column>
            <el-table-column
              prop="comments"
              label="库表注释"
              :show-overflow-tooltip="true"
              :resizable="false">
            </el-table-column>
            <el-table-column
              prop="size"
              label="备份大小"
              :show-overflow-tooltip="true"
              :resizable="false">
            </el-table-column>
            <el-table-column
              prop="time"
              label="备份时间"
              :show-overflow-tooltip="true"
              :resizable="false">
            </el-table-column>
            <el-table-column
            label="操作"
            :show-overflow-tooltip="true"
            :resizable="false">
                <template slot-scope="scope">
                    <el-button type="text" size="small" @click="handleRestore(scope.row)">恢复</el-button>
                </template>
            </el-table-column>
        </el-table>
    </el-container>
    <!-- 数据还原项选择弹窗 -->
    <el-dialog title="恢复数据" :visible.sync="restoreDialogVisible">
        <el-table
            :data="detailData"
            border
            style="width: 100%;margin:50px 0"
            highlight-current-row
            ref="singleRestoreTable">
            <el-table-column
            label="操作"
            width="100"
            :show-overflow-tooltip="true"
            :resizable="false">
            <template slot-scope="scope">
                <el-checkbox v-model="scope.row.checked" @change="handleSelect(scope)"></el-checkbox>
            </template>
            </el-table-column>
            <el-table-column
            prop="id"
            label="操作表id"
            :show-overflow-tooltip="true"
            :resizable="false">
            </el-table-column>
            <el-table-column
            prop="name"
            width="200"
            label="库表名称"
            :show-overflow-tooltip="true"
            :resizable="false">
            </el-table-column>
            <el-table-column
            prop="comments"
            width="150"
            label="库表注释">
            </el-table-column>
            <el-table-column
            prop="size"
            label="备份大小">
            </el-table-column>
            <el-table-column
            prop="time"
            label="备份时间">
            </el-table-column>
        </el-table>
        <el-button type="primary" @click="handleRestoreSelected" style="float:right;margin-right:30px">恢复</el-button>
    </el-dialog>
  </div>
</template>

<script>
import { BackupList, RestoreList, RestoreDetailList, CommitBackup, CommitRestore } from '@/utils/api/dataSecurity/safeSys'

export default {
  data () {
    return {
      // 数据备份状态列表
      backupData: [],
      // 数据还原选择表
      restoreData: [],
      // 数据还原选择项列表
      detailData: [],
      // 测试数据库表单
      form: {
        addr: '',
        port: '',
        username: '',
        password: ''
      },
      // 弹窗显示控制
      restoreDialogVisible: false,
      // 单选状态
      currentRow: null
    }
  },
  methods: {
    // 跳转至数据备份与还原页面
    gotoRunningStatus () {
      this.$router.push('/runningStatus')
    },
    // 备份选中数据
    handleBackup () {
      this.$confirm('确认是否备份？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        let selected = this.backupData.filter(ele => ele.checked)
        if (selected.length === 0) {
          throw new Error('请选择至少一个要备份的库表')
        }
        let params = selected.map(ele => {
          return {
            tableName: ele.name,
            tableComment: ele.comments,
            tableSchema: ele.table,
            dataLength: ele.len,
            tableRows: ele.size
          }
        })
        CommitBackup(this, params).then((result) => {
          if (result.code == 0) {
            this.$message({type: 'success', message: result.data})
            this.backupData.forEach(ele => {
              ele.checked = false
            })
            this.getRestore()
          }
        }).catch(() => {
          this.$message.error('数据备份失败')
        })
      }).catch((err) => {
        this.$message.error(err.message)
      })
    },
    // 加载并打开数据还原选择项弹窗
    handleRestore (row) {
      let tableName = row.name
      let params = {
        tableName
      }
      RestoreDetailList(this, params).then(result => {
        if (result.code == 200) {
          this.detailData = result.data.map(ele => {
            return {
              id: ele.id,
              name: ele.tableName,
              comments: ele.tableComment,
              size: ele.tableRows,
              time: this.dateFormator(ele.createdTime),
              checked: false
            }
          })
          this.restoreDialogVisible = true
        } else {
          this.$message.error(`弹窗数据获取失败！`)
        }
      }).catch(err => {
        this.$message.error(`弹窗数据获取失败！` + err.message)
      })
    },
    // 初始化数据备份状态表
    getBackup () {
      BackupList(this).then(result => {
        if (result.code == 0) {
          this.backupData = result.data.map(ele => {
            return {
              name: ele.tableName,
              comments: ele.tableComment,
              table: ele.tableSchema,
              len: ele.dataLength,
              size: ele.tableRows,
              checked: false
            }
          })
        } else {
          this.$message.error(`数据备份数据获取失败！`)
        }
      }).catch(err => {
        this.$message.error(`数据备份数据获取失败！` + err.message)
      })
    },
    // 初始化数据还原列表
    getRestore () {
      RestoreList(this).then(result => {
        if (result.code == 0) {
          this.restoreData = result.data.map(ele => {
            return {
              name: ele.tableName,
              comments: ele.tableComment,
              size: ele.tableRows,
              time: this.dateFormator(ele.createdTime)
            }
          })
        } else {
          this.$message.error(`还原列表数据获取失败！`)
        }
      }).catch(err => {
        this.$message.error(`还原列表数据获取失败！` + err.message)
      })
    },
    // 日期格式化
    dateFormator (prop) {
      return new Date(prop).toLocaleDateString('zh-CN').replace(/\//g, '-')
    },
    // 还原选中数据
    handleRestoreSelected () {
      this.$confirm('确认是否恢复？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        let selected = this.detailData.filter(ele => ele.checked)
        if (selected.length === 0) {
          throw new Error('请选择需要还原的备份')
        }
        let id = selected[0].id
        let params = {
          id
        }
        CommitRestore(this, params).then((result) => {
          if (result.code == 1) {
            this.$message({type: 'success', message: result.msg})
            this.handleCloseDialog()
          } else {
            this.$message.error('还原失败')
          }
        }).catch((err) => {
          this.$message.error('还原请求发送失败' + err.message)
        })
      }).catch((err) => {
        this.$message.error(err.message)
      })
    },
    // 单选事件处理
    handleCurrentChange (val) {
      this.currentRow = val
    },
    handleSelect (scope) {
      let check = scope.row.checked
      this.detailData.forEach(ele => {
        ele.checked = false
      })
      this.$refs.singleRestoreTable.setCurrentRow(null)
      scope.row.checked = check
      if (check) {
        this.$refs.singleRestoreTable.setCurrentRow(this.detailData[scope.$index])
      }
    },
    // 单选事件处理结束
    // 关闭弹窗
    handleCloseDialog () {
      this.restoreDialogVisible = false
    }
  },
  created () {
    this.getBackup()
    this.getRestore()
  }
}
</script>

<style>
.el-dialog__body{
    overflow: hidden !important;
}
</style>
