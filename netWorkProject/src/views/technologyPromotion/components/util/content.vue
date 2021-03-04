<template>
    <div class="content">
        <div class="header">
            <h1>{{list[index].title}}</h1>
            <p>
                <span>新闻来源：{{list[index].from}}</span>
                <span>发布时间：{{list[index].date}}</span>
            </p>
        </div>
        <div class="main" v-html="list[index].content"></div>
        <div class="footer">
            <p class="previous" v-if="previous >= 0" @click="goToOther(-1)">上一篇：{{list[previous].title}}</p>
            <p class="next" v-if="next < list.length" @click="goToOther(1)">下一篇：{{list[next].title}}</p>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            list: [],
            index: null,
            previous: null,
            next: null
        }
    },
    created(){
        this.list = this.$route.query.list
        this.index = this.$route.query.index
        this.previous = this.index * 1 - 1
        this.next = this.index * 1 + 1
    },
    methods:{
        goToOther(i){
            this.index = this.index * 1 + i
            this.previous += i
            this.next += i
        },
    }
}
</script>

<style scoped lang="scss">
.content{
    position: relative;
    margin-top: -2vh;
    width: 76vw;
    height: 70vh;
    .header{
        height: 10vh;
        border-bottom: 1px dashed #1E8996;
        h1{
            line-height: 7vh;
            text-align: center;
            color: #B7E009;
            font-size: 3.5rem;
        }
        p{
            line-height: 3vh;
            display: flex;
            justify-content: space-around;
            padding: 0 26vw;
            color: #fff;
        }
    }
    .main{
        height: 50vh;
        color: #fff;
        text-indent: 2em;
        line-height: 3vh;
        font-size: 1.4rem;
        overflow: auto;
    }
    .footer{
        height: 10vh;
        color: #fff;
        font-weight: bold;
        line-height: 5vh;
        font-size: 1.3rem;
        .previous, .next{
            cursor: pointer;
        }
    }
}
</style>