<template>
    <div>
        <!--种植业股主页面-->
        <el-breadcrumb separator="/" class="miniNav">
            <el-breadcrumb-item>渔业渔政股</el-breadcrumb-item>
            <el-breadcrumb-item  v-if='this.$route.path.indexOf("/aquaticMachining") >= 0'>水产加工</el-breadcrumb-item>
            <el-breadcrumb-item  v-if='this.$route.path.indexOf("/fisheriesPopulation") >= 0'>渔业人口情况</el-breadcrumb-item>
            <el-breadcrumb-item  v-if='this.$route.path.indexOf("/freshwaterFishingYield") >= 0'>淡水捕捞产量</el-breadcrumb-item>
            <el-breadcrumb-item  v-if='this.$route.path.indexOf("/aquaticSeedling") >= 0'>主要水产苗种</el-breadcrumb-item>
            <el-breadcrumb-item  v-if='this.$route.path.indexOf("/reservoirProduction") >= 0'>水库渔业生产情况</el-breadcrumb-item>
            <el-breadcrumb-item  v-if='this.$route.path.indexOf("/fisheryYield") >= 0'>渔业产值</el-breadcrumb-item>
            <el-breadcrumb-item  v-if='this.$route.path.indexOf("/fisheryEnforcement") >= 0'>渔业执法情况</el-breadcrumb-item>
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