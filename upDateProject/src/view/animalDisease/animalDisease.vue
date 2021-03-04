<template>
    <div>
        <el-breadcrumb separator="/" class="miniNav">
            <el-breadcrumb-item>动物疫病预防控制中心</el-breadcrumb-item>
            <el-breadcrumb-item  v-if='this.$route.path.indexOf("/animalDisease") >= 0'>动物疫病防控</el-breadcrumb-item>
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