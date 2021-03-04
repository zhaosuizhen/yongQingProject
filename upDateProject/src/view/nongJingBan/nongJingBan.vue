<template>
    <div>
        <!--农经办主页面-->
        <el-breadcrumb separator="/" class="miniNav">
            <el-breadcrumb-item>农经办</el-breadcrumb-item>
            <el-breadcrumb-item  v-if='this.$route.path.indexOf("/landContractData") >= 0'>土地承包数据</el-breadcrumb-item>
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