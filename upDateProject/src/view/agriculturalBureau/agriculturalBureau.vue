<template>
    <div class="pageContent">
        <el-breadcrumb separator="/" class="miniNav">
            <el-breadcrumb-item>农机局</el-breadcrumb-item>
            <el-breadcrumb-item  v-if='this.$route.path.indexOf("/agriculturalMachineryShip") >= 0'>农机拥有量</el-breadcrumb-item>
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