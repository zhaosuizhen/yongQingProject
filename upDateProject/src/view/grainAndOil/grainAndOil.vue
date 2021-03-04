<template>
    <div>
        <el-breadcrumb separator="/" class="miniNav">
            <el-breadcrumb-item>粮油站</el-breadcrumb-item>
            <el-breadcrumb-item  v-if='this.$route.path.indexOf("/industryLeavePoor") >= 0'>产业脱贫</el-breadcrumb-item>
        </el-breadcrumb>
         <router-view></router-view>
    </div>
</template>
<script>
export default {
    name:'fisheries',
    data() {
        return {

        }
    }
}
</script>
<style scoped lang="scss">

</style>