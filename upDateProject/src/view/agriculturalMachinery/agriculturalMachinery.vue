<template>
    <div>
        <el-breadcrumb separator="/" class="miniNav">
            <el-breadcrumb-item>农业机械化与设施股</el-breadcrumb-item>
            <el-breadcrumb-item  v-if='this.$route.path.indexOf("/havePower") >= 0'>农机拥有量-动力</el-breadcrumb-item>
            <el-breadcrumb-item  v-if='this.$route.path.indexOf("/haveCount") >= 0'>农机拥有量-数量</el-breadcrumb-item>
            <el-breadcrumb-item  v-if='this.$route.path.indexOf("/workSituation") >= 0'>农机作业情况</el-breadcrumb-item>
            <el-breadcrumb-item  v-if='this.$route.path.indexOf("/serviceInformation") >= 0'>农机服务</el-breadcrumb-item>
            <el-breadcrumb-item  v-if='this.$route.path.indexOf("/NJJYZT") >= 0'>农机经营主体</el-breadcrumb-item>
        </el-breadcrumb>
         <router-view></router-view>
    </div>
</template>
<script>
export default {
    name:'qualityInspection',
    data() {
        return {

        }
    }
}
</script>
<style scoped lang="scss">

</style>