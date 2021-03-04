<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  components:{
    
  }
}
</script>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.double {
  background: #147D8B !important;
  color: #c9f6f9 !important;
  height: 30px !important;
}
.single {
  background: #1D354F !important;
  color: #c9f6f9 !important;
  height: 30px !important;
}
.el-date-editor .el-input .el-input--prefix .el-input--suffix .el-date-editor--date{
.el-input__inner{
    background-color: #1C3E54 !important;
    border: 2px solid #07eced !important;
    color: #c9f6f9 !important;
}
}

th{
  padding: 0 !important;
  height: 40px;
  line-height: 40px;
}
tr{
  padding: 0 !important;
  height: 35px;
  line-height: 35px;
  td{
    padding: 0 !important;
    height: 35px;
    line-height: 35px;
  }
}

.el-table--enable-row-hover .el-table__body tr:hover>td{
background-color: rgba($color: #ffffff, $alpha: 0) !important;
}

.btn-prev, .el-pager, .btn-next, .number{
    background: #203852 !important;
    color: #C9F6F9 !important;
}
.el-pager li.active{
  color: #147D8B !important;
}

.el-table td, .el-table th.is-leaf{
  border: 0 !important;
}

.el-table::before {
    height: 0px !important;
 }
</style>
