<template>
    <div>
        <el-breadcrumb separator="/" class="miniNav">
            <el-breadcrumb-item>国土局</el-breadcrumb-item>
            <el-breadcrumb-item  v-if='this.$route.path.indexOf("/landUseLeaveOne") >= 0'>农村土地利用现状一级分类面积汇总表</el-breadcrumb-item>
            <el-breadcrumb-item  v-if='this.$route.path.indexOf("/landUseLeaveTwo") >= 0'>农村土地利用</el-breadcrumb-item>
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