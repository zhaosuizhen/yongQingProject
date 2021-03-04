<template>
    <div>
        <el-breadcrumb separator="/" class="miniNav">
            <el-breadcrumb-item>统计局</el-breadcrumb-item>
            <el-breadcrumb-item  v-if='this.$route.path.indexOf("/agrYieldUnitArea") >= 0'>主要农产品单位面积产量</el-breadcrumb-item>
            <el-breadcrumb-item  v-if='this.$route.path.indexOf("/agrOutputProduct") >= 0'>主要农产品产量</el-breadcrumb-item>
            <el-breadcrumb-item  v-if='this.$route.path.indexOf("/statistInputUsage") >= 0'>投入品使用情况</el-breadcrumb-item>
            <el-breadcrumb-item  v-if='this.$route.path.indexOf("/statistCropSownArea") >= 0'>农作物播种面积</el-breadcrumb-item>
            <el-breadcrumb-item  v-if='this.$route.path.indexOf("/statistMachineryList") >= 0'>农机拥有量</el-breadcrumb-item>
            <el-breadcrumb-item  v-if='this.$route.path.indexOf("/statistTotalValue") >= 0'>农林牧渔业总产值</el-breadcrumb-item>
            <el-breadcrumb-item  v-if='this.$route.path.indexOf("/liveProductValue") >= 0'>畜产品产量</el-breadcrumb-item>
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