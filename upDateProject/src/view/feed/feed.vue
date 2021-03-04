<template>
    <div>
        <!--饲料办主页面  *****永清新增*****-->
        <el-breadcrumb separator="/" class="miniNav">
            <el-breadcrumb-item>饲料办</el-breadcrumb-item>
            <el-breadcrumb-item  v-if='this.$route.path.indexOf("/feedEnterprise") >= 0'>饲料企业</el-breadcrumb-item>
        </el-breadcrumb>
        <router-view></router-view>
    </div>
</template>
<script>
    export default {
        name:'',
        data() {
            return {

            }
        }
    }
</script>
<style scoped lang="scss">

</style>