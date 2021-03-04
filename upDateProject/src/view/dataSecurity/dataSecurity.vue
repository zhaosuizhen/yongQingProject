<template>
    <div>
        <el-breadcrumb separator="/" class="miniNav">
            <el-breadcrumb-item>数据备份</el-breadcrumb-item>
            <el-breadcrumb-item  v-if='this.$route.path.indexOf("/runningStatus") >= 0'>运行状态</el-breadcrumb-item>
            <el-breadcrumb-item  v-if='this.$route.path.indexOf("/dataBackup") >= 0'>数据备份与还原</el-breadcrumb-item>
        </el-breadcrumb>
         <router-view></router-view>
    </div>
</template>
<script>
export default {
    name:'dataSecurity',
    data() {
        return {

        }
    }
}
</script>
<style scoped lang="scss">

</style>