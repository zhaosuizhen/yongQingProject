<template>
    <div>
        <!--种植业股主页面-->
        <el-breadcrumb separator="/" class="miniNav">
            <el-breadcrumb-item>植保站</el-breadcrumb-item>
            <el-breadcrumb-item  v-if='this.$route.path.indexOf("/preventionAndCure") >= 0'>病虫害防治趋势</el-breadcrumb-item>
            <el-breadcrumb-item  v-if='this.$route.path.indexOf("/diseaseDescribe") >= 0'>病害描述</el-breadcrumb-item>
            <el-breadcrumb-item  v-if='this.$route.path.indexOf("/monitoringPointData") >= 0'>土壤采样面积分布</el-breadcrumb-item>
        </el-breadcrumb>
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    name:'plantProtectiveStation',
    data() {
        return {

        }
    }
}
</script>
<style scoped lang="scss">

</style>