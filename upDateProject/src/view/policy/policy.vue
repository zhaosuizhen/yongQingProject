<template>
    <div>
        <el-breadcrumb separator="/" class="miniNav">
            <el-breadcrumb-item>政策法规股</el-breadcrumb-item>
            <el-breadcrumb-item  v-if='this.$route.path.indexOf("/policyPesticideBan") >= 0'>禁用农药</el-breadcrumb-item>
        </el-breadcrumb>
         <router-view></router-view>
    </div>
</template>
<script>
export default {
    name:'policy',
    data() {
        return {

        }
    }
}
</script>
<style scoped lang="scss">

</style>