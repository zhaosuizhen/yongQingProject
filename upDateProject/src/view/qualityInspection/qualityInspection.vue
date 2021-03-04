<template>
    <div>
        <el-breadcrumb separator="/" class="miniNav">
            <el-breadcrumb-item>质检办</el-breadcrumb-item>
            <el-breadcrumb-item  v-if='this.$route.path.indexOf("/qualityOrganicProducts") >= 0'>有机食品企业产品数据</el-breadcrumb-item>
            <el-breadcrumb-item  v-if='this.$route.path.indexOf("/qualityPollutionProducts") >= 0'>无公害企业产品数据</el-breadcrumb-item>
            <el-breadcrumb-item  v-if='this.$route.path.indexOf("/qualityDetectionOfAgricultural") >= 0'>农产品农残检测情况信息表</el-breadcrumb-item>
            <el-breadcrumb-item  v-if='this.$route.path.indexOf("/qualityAgriculturalCheckStation") >= 0'>农产品检测站信息</el-breadcrumb-item>
            <el-breadcrumb-item  v-if='this.$route.path.indexOf("/qualityGreenfoodEnterprises") >= 0'>绿色食品企业产品数据</el-breadcrumb-item>
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