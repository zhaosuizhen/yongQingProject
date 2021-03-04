<template>
    <div>
        <el-breadcrumb separator="/" class="miniNav">
            <el-breadcrumb-item>农经股</el-breadcrumb-item>
            <el-breadcrumb-item  v-if='this.$route.path.indexOf("/areaFoodPlant") >= 0'>粮食作物播种面积</el-breadcrumb-item>
            <el-breadcrumb-item  v-if='this.$route.path.indexOf("/yieldFoodPlant") >= 0'>粮食作物产量</el-breadcrumb-item>
            <el-breadcrumb-item  v-if='this.$route.path.indexOf("/unitFoodPlant") >= 0'>粮食作物单产</el-breadcrumb-item>
            <el-breadcrumb-item  v-if='this.$route.path.indexOf("/areaEconomicsPlant") >= 0'>经济作物面积</el-breadcrumb-item>
            <el-breadcrumb-item  v-if='this.$route.path.indexOf("/yieldEconomicsPlant") >= 0'>经济作物产量</el-breadcrumb-item>
            <el-breadcrumb-item  v-if='this.$route.path.indexOf("/unitEconomicsPlant") >= 0'>经济作物单产</el-breadcrumb-item>
            <el-breadcrumb-item  v-if='this.$route.path.indexOf("/townPlantArea") >= 0'>各乡镇种植面积</el-breadcrumb-item>
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