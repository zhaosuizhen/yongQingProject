<template>
    <div>
        <el-breadcrumb separator="/" class="miniNav">
            <el-breadcrumb-item>兽医兽药股</el-breadcrumb-item>
            <el-breadcrumb-item  v-if='this.$route.path.indexOf("/veterinaryStation") >= 0'>兽医站</el-breadcrumb-item>
            <el-breadcrumb-item  v-if='this.$route.path.indexOf("/veterinaryMedicineEnterprise") >= 0'>兽药经营企业</el-breadcrumb-item>
            <el-breadcrumb-item  v-if='this.$route.path.indexOf("/veterinaryHospital") >= 0'>诊疗机构</el-breadcrumb-item>
            <el-breadcrumb-item  v-if='this.$route.path.indexOf("/pigSlaughterhouse") >= 0'>生猪定点屠宰场</el-breadcrumb-item>
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