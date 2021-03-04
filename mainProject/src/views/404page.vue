<template>
  <div class="page404">
    <div class="backPage">
      <!-- <el-button type="primary" @click="backPage" plain>返回主页</el-button> -->
      <div class="backHomeBTN" @click="backPage">返回主页</div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{

    }
  },
  methods:{
    backPage(){
      this.$router.push('industryAnalysisIndex')
    }
  }
}
</script>

<style>

</style>