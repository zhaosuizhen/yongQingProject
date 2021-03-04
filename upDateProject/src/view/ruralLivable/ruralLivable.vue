<template>
    <div>
        <el-breadcrumb separator="/" class="miniNav">
            <el-breadcrumb-item>宜居乡村股</el-breadcrumb-item>
            <el-breadcrumb-item  v-if='this.$route.path.indexOf("/livableProjectManage") >= 0'>项目管理</el-breadcrumb-item>
            <el-breadcrumb-item  v-if='this.$route.path.indexOf("/livableVillageData") >= 0'>乡村数据汇总</el-breadcrumb-item>
        </el-breadcrumb>
         <router-view></router-view>
    </div>
</template>
<script>
export default {
    name:'ruralLivable',
    data() {
        return {

        }
    }
}
</script>
<style scoped lang="scss">

</style>