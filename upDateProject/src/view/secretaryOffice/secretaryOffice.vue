<template>
    <div>
        <el-breadcrumb separator="/" class="miniNav">
            <el-breadcrumb-item>县委秘书办</el-breadcrumb-item>
            <el-breadcrumb-item  v-if='this.$route.path.indexOf("/newsDynamic") >= 0'>新闻动态</el-breadcrumb-item>
            <el-breadcrumb-item  v-if='this.$route.path.indexOf("/bannerImgMaintain") >= 0'>banner图维护</el-breadcrumb-item>
        </el-breadcrumb>
         <router-view></router-view>
    </div>
</template>
<script>
export default {
    name:'ruralReform',
    data() {
        return {

        }
    }
}
</script>
<style scoped lang="scss">

</style>