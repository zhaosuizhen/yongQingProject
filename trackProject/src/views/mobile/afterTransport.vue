<template>
  <div class="message">
      <h1>{{msg}}</h1>
  </div>
</template>

<script>
import { strawDelivery } from '@/api/dataSubmit'
export default {
    data(){
        return{
            msg: ''
        }
    },
    methods:{
        async getStrawDelivery(){
            let res = await strawDelivery()
            console.log(res)
            this.msg = res.data.msg.includes('成功') ? '同步成功' : '同步失败'
        }
    },
    mounted(){
        this.getStrawDelivery()
    }
}
</script>

<style scoped>
.message{
    margin-top: 50px;
    text-align: center;
}
</style>