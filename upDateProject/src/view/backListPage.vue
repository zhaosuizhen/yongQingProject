<template>
  <div class="position: absolute;">
      <el-button class="backBtn" type="primary" @click="backPage">返回</el-button>
  </div>
</template>
<script>
export default {
    methods:{
        backPage(){
            this.$router.go(-1)
        }
    }
}
</script>
<style scoped lang="scss">
.backBtn{
    position: relative;
    left: 50%;
    transform: translate(-50%,0);
}
</style>