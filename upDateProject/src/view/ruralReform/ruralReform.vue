<template>
    <div>
        <el-breadcrumb separator="/" class="miniNav">
            <el-breadcrumb-item>农村改革与服务体系股</el-breadcrumb-item>
            <el-breadcrumb-item  v-if='this.$route.path.indexOf("/reformBusinessEntity") >= 0'>经营主体</el-breadcrumb-item>
            <el-breadcrumb-item  v-if='this.$route.path.indexOf("/reformEnterpriseQuality") >= 0'>三品一标企业</el-breadcrumb-item>
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