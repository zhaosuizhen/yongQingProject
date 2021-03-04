<template>
  <div class="main">
      <div class="item" v-for="(item,index) in list" :key="index">
          <h1 class="title">{{item.title}}</h1>
          <span class="date">{{item.createTime.substring(0,10)}}</span>
          <div class="questionInfo">
              <img height="100%" :src="item.userImage" alt="">
              <span>{{item.userAccount}}</span>
          </div>
          <p class="content">
              <b style="color:#FFF">具体描述：</b>
              <span v-html="item.content" style="color:#FFF"></span>
          </p>
          <p class="footer">
              <span class="answerNumber">回答：<span style="color:#F39D00;font-size:17px;font-weight:bold">{{item.answerCount}}</span>条</span>
              <span class="type">分类：{{typeList[type - 1]}}</span>
          </p>
          <div v-if=" (!btnShow && clickQuestionId == item.id)" class="comment_btn" @click="comtent_btn(item,true)"><b>收起</b></div>
          <div v-else class="comment_btn" @click="comtent_btn(item,false)"><b>展开</b></div>

          <template v-if="clickQuestionId == item.id">
              <div class="coomment" v-for="(value,key) in commentList" :key="key">
                      <div class="questionInfo">
                          <img height="100%" :src="value.userImage" alt="">
                          <span>{{value.commentUsername}}</span>
                      </div>
                      <p class="content">
                          <b style="color:#FFF">具体描述：</b>
                          <span v-html="value.content" style="color:#FFF"></span>
                      </p>
              </div>
          </template>
          
      </div>
  </div>
</template>

<script>
import { pageList, details } from '@/api/knowledgeExchange'
export default {
    props:['type'],
    data(){
        return{
            typeList:['蔬菜', '水果', '畜牧', '水产'],
            list:[],
            commentList:[],
            clickQuestionId:null,
            btnShow: true
        }
    },
    methods:{
        //查看所有发布的问题分页接口
        async getPageList(){
            let res = await pageList({
                currentPage: 1,
                pageSize: 100000000,
                type: this.type
            })
            res.data.data.pageData.forEach(item => {
                item.userImage = `http://39.104.114.103:8082/image/datacentersystem/${item.userImage}`
            })
            this.list = res.data.data.pageData
            console.log(this.list)
        },
        //查看问题详情
        async getDetails(id){
            let res = await details({id})
            res.data.data.commentList.forEach(item => {
                item.userImage = `http://39.104.114.103:8082/image/datacentersystem/${item.userImage}`
            })
            this.commentList = res.data.data.commentList
        },
        //点击评论按钮
        comtent_btn(item, flag){
            this.btnShow = flag
            if(flag){
                this.clickQuestionId = item.id
                this.commentList = []
            }else{
                this.clickQuestionId = item.id
                this.getDetails(item.id)
            }
            
        }
    },
    mounted(){
        //查看所有发布的问题分页接口
        this.getPageList()
    }
}
</script>

<style scoped lang="scss">
.main{
    position: relative;
    margin-top: 2vh;
    left: 10vw;
    width: 80vw;
    height: 70vh;
    overflow: auto;
    .item{
        overflow: hidden;
        position: relative;
        min-height: 25vh;
        background-image: linear-gradient(#255585, #386E86);
        border-radius: 8px;
        padding: 1vh 1vw;
        margin-bottom: 1vh;
        .title{
            color: #B4DB0E;
            font-weight: bold;
            font-size: 17px;
            margin-bottom: 1vh;
        }
        .date{
            position: absolute;
            top: 2vh;
            right: 2vw;
            color: #fff;
        }
        .questionInfo{
            position: relative;
            height: 4vh;
            margin-bottom: 1vh;
            img{
                display: block;
                position: absolute;
                border-radius: 50%;
            }
            span{
                display: inline-block;
                height: 4vh;
                line-height: 4vh;
                margin-left: 3vw;
                color: #FFF;
            }
        }
        .content{
            padding: 3px;
            height: 10vh;
        }
        .footer{
            margin-bottom: 2vh;
            color: #FFF;
            .type{
                margin-left: 30px;
            }
        }
        .comment_btn{
            position: absolute;
            right: 1vw;
            bottom: 0.9vh;
            width: 5.5vw;
            height: 5vh;
            background: url('../../../../assets/images/shipin_nbtn.png') no-repeat;
            background-size: 100% 100%;
            cursor: pointer;
            b{
                display: block;
                color: #fff;
                line-height: 5vh;
                text-align: center;
                font-size: 18px;
            }
        }
        .coomment{
            padding: 5px;
            height: 16vh;
            background: #2B5679;
            border-radius: 8px;
            margin-bottom: 6vh;
        }
    }
    .item:last-child{
        margin-bottom:0
    }
}
</style>