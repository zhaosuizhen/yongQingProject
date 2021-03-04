<template>
    <div>
        <el-breadcrumb separator="/" class="miniNav">
            <el-breadcrumb-item>渔业渔政股</el-breadcrumb-item>
            <el-breadcrumb-item  v-if='this.$route.path.indexOf("/basicInformationOfFishery") >= 0'>渔业生产基本情况</el-breadcrumb-item>
            <el-breadcrumb-item  v-if='this.$route.path.indexOf("/freshwaterProducts") >= 0'>淡水养殖产品产量</el-breadcrumb-item>
            <el-breadcrumb-item  v-if='this.$route.path.indexOf("/specialFreshwaterArea") >= 0'>淡水特种水产品养殖面积</el-breadcrumb-item>
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