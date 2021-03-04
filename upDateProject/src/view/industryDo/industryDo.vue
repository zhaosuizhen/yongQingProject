<template>
    <div>
        <el-breadcrumb separator="/" class="miniNav">
            <el-breadcrumb-item>产业办</el-breadcrumb-item>
            <el-breadcrumb-item  v-if='this.$route.path.indexOf("/doOrganicFoodEnter") >= 0'>有机食品企业产品数据</el-breadcrumb-item>
            <el-breadcrumb-item  v-if='this.$route.path.indexOf("/doHarmlessProductsEnter") >= 0'>无公害企业产品数据</el-breadcrumb-item>
            <el-breadcrumb-item  v-if='this.$route.path.indexOf("/doCropSownArea") >= 0'>农作物播种面积</el-breadcrumb-item>
            <el-breadcrumb-item  v-if='this.$route.path.indexOf("/doAgriculturalOutputValue") >= 0'>农产品企业产值</el-breadcrumb-item>
            <el-breadcrumb-item  v-if='this.$route.path.indexOf("/doGreenFoodValue") >= 0'>绿色食品企业产品数据</el-breadcrumb-item>
            <el-breadcrumb-item  v-if='this.$route.path.indexOf("/doBusinessEntity") >= 0'>经营主体</el-breadcrumb-item>
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