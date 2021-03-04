<template>
    <div>
        <el-breadcrumb separator="/" class="miniNav">
            <el-breadcrumb-item>工商局</el-breadcrumb-item>
            <el-breadcrumb-item  v-if='this.$route.path.indexOf("/industrialBusinessEntity") >= 0'>经营主体</el-breadcrumb-item>
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