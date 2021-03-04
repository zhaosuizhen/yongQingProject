<template>
    <div>
        <el-breadcrumb separator="/" class="miniNav">
            <el-breadcrumb-item>执法大队</el-breadcrumb-item>
            <el-breadcrumb-item  v-if='this.$route.path.indexOf("/enforcementAccount") >= 0'>执法台账</el-breadcrumb-item>
            <el-breadcrumb-item  v-if='this.$route.path.indexOf("/pesticidesBusiness") >= 0'>农药经营主体</el-breadcrumb-item>
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