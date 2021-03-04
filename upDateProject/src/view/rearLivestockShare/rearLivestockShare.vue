<template>
    <div>
        <el-breadcrumb separator="/" class="miniNav">
            <el-breadcrumb-item>畜牧饲料股</el-breadcrumb-item>
            <el-breadcrumb-item  v-if='this.$route.path.indexOf("/pigBreeList") >= 0'>生猪养殖</el-breadcrumb-item>
            <el-breadcrumb-item  v-if='this.$route.path.indexOf("/rearBusinessEntity") >= 0'>经营主体</el-breadcrumb-item>
            <el-breadcrumb-item  v-if='this.$route.path.indexOf("/rearProductValue") >= 0'>畜产品产量</el-breadcrumb-item>
            <el-breadcrumb-item  v-if='this.$route.path.indexOf("/breedingCostData") >= 0'>养殖成本数据</el-breadcrumb-item>
            <el-breadcrumb-item  v-if='this.$route.path.indexOf("/muXuYangZhi") >= 0'>牧畜养殖</el-breadcrumb-item>
        </el-breadcrumb>
         <router-view></router-view>
    </div>
</template>
<script>
export default {
    name:'rearLivestockShare',
    data() {
        return {

        }
    }
}
</script>
<style scoped lang="scss">

</style>