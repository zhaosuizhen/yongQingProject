<template>
  <div>
      <div class="question_list" v-for="(item,index) in list" :key="index">
          <h1>
              {{item.title}}
              <span style="font-size:14px;font-weight:500">提问人：{{item.userAccount}}</span>
          </h1>
          <div class="content">
              <p>{{item.content}}</p>
          </div>
          <div class="footer">
              <p>
                  <span>已回答：<span style="color:#01B097;font-size:22px;font-weight:800">{{item.answerCount}}</span>条</span>
                  <span class="link" @click="goToInfo(item)">查看详情<i class="el-icon-d-arrow-right"></i></span>
              </p>
          </div>
      </div>
      <el-pagination
            background
            layout="prev, pager, next"
            :total="total">
      </el-pagination>
  </div>
</template>

<script>
import { personalPageList } from '@/api/knowledgeExchange'
export default {
    data(){
        return{
            id: null,
            name: '',
            image: null,
            total: 0,
            list:[],
        }
    },
    methods:{
        //查看详情
        goToInfo(info){
            console.log(info)
            this.$router.push({
                path: '/knowledgeExchange',
                query: {
                    id: info.id,
                    type: info.type
                }
            })
        },
        //获取用户信息
        getUserInFo(){
            this.id = sessionStorage.getItem('userInfo_id')
            this.name = sessionStorage.getItem('userInfo_name')
            this.image = sessionStorage.getItem('userInfo_image')
        },
        //查看个人发布的问题分页接口
        async getPersonalPageList(currentPage){
            let res = await personalPageList({
                currentPage,
                pageSize: 5,
                userId: this.id
            })
            this.list = res.data.data.pageData
            this.total = res.data.data.totalPage
            console.log(res.data.data)
            this.total = res.data.data.totalCount
        },
    },
    mounted(){
        //获取用户信息
        this.getUserInFo()
        //查看个人发布的问题分页接口
        this.getPersonalPageList(1)
    },
}
</script>

<style scoped lang="scss">
.question_list{
    position: relative;
    width: 100%;
    height: 150px;
    background: #f1f1f1;
    margin-bottom: 10px;
    padding: 0 20px;
    h1{
        text-align: left;
        span{
            position: absolute;
            right: 20px;
        }
    }
    .content{
        position: relative;
        height: 80px;
        text-align: left;
        padding-top: 10px;
    }
    .footer{
        position: relative;
        text-align: left;
        .link{
            position: absolute;
            right: 0;
            cursor: pointer;
        }
    }
}
</style>