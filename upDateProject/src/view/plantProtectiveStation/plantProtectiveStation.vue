<template>
    <div class="pageContent">
        <!--植保站主页面-->
        <el-breadcrumb separator="/" class="miniNav">
            <el-breadcrumb-item>植保站</el-breadcrumb-item>
            <el-breadcrumb-item  v-if='this.$route.path.indexOf("/occurrenceAndArea") >= 0'>虫鼠害发生和防治面积</el-breadcrumb-item>
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