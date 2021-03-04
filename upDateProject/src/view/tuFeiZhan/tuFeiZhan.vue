<template>
    <div>
        <el-breadcrumb separator="/" class="miniNav">
            <el-breadcrumb-item>土肥站</el-breadcrumb-item>
            <el-breadcrumb-item  v-if='this.$route.path.indexOf("/basicSituationOfPoints") >= 0'>监测点基本情况</el-breadcrumb-item>
            <el-breadcrumb-item  v-if='this.$route.path.indexOf("/inputUsage") >= 0'>投入品使用情况</el-breadcrumb-item>
            <el-breadcrumb-item  v-if='this.$route.path.indexOf("/farmlandQualityData") >= 0'>监测点耕地质量数据</el-breadcrumb-item>
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