<template>
    <div>
        <el-breadcrumb separator="/" class="miniNav">
            <el-breadcrumb-item>商务局</el-breadcrumb-item>
            <el-breadcrumb-item  v-if='this.$route.path.indexOf("/agriculturalMarketInfo") >= 0'>农产品批发市场信息</el-breadcrumb-item>
            <el-breadcrumb-item  v-if='this.$route.path.indexOf("/marketBusinessEntity") >= 0'>经营主体数据</el-breadcrumb-item>
            <el-breadcrumb-item  v-if='this.$route.path.indexOf("/agriculturalPriceData") >= 0'>农产品交易价格数据</el-breadcrumb-item>
        </el-breadcrumb>
         <router-view></router-view>
    </div>
</template>
<script>
export default {
    name:'bureauCommerce',
    data() {
        return {

        }
    }
}
</script>
<style scoped lang="scss">

</style>