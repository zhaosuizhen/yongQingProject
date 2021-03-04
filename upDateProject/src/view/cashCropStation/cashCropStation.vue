<template>
    <div>
        <el-breadcrumb separator="/" class="miniNav">
            <el-breadcrumb-item>经作站</el-breadcrumb-item>
            <el-breadcrumb-item  v-if='this.$route.path.indexOf("/fruitAndVegetable") >= 0'>乡镇果蔬标准化基地</el-breadcrumb-item>
            <el-breadcrumb-item  v-if='this.$route.path.indexOf("/maiDongManagement") >= 0'>麦冬经营主体</el-breadcrumb-item>
            <el-breadcrumb-item  v-if='this.$route.path.indexOf("/maiDongMainArea") >= 0'>麦冬主产区面积</el-breadcrumb-item>
            <el-breadcrumb-item  v-if='this.$route.path.indexOf("/maiDongProducts") >= 0'>麦冬加工产品</el-breadcrumb-item>
            <el-breadcrumb-item  v-if='this.$route.path.indexOf("/maiDongYield") >= 0'>麦冬产量</el-breadcrumb-item>
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