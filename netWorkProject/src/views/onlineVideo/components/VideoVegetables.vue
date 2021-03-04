<template>
  <div class='VideoVegetables'>
    <div class="main">
      <div class="btn">
        <el-button type="primary"
                   @click="cur=0"
                   :class="{active:cur==0}"
                   size="small">白菜</el-button>
        <el-button type="primary"
                   @click="cur=1"
                   :class="{active:cur==1}"
                   size="small">番茄</el-button>
        <el-button type="primary"
                   @click="cur=2"
                   :class="{active:cur==2}"
                   size="small">土豆</el-button>
        <el-button type="primary"
                   @click="cur=3"
                   :class="{active:cur==3}"
                   size="small">油菜</el-button>
      </div>
      <div class="videoModule"
           v-show="cur==0">
        <div class="video-item"
             v-for="(item,i) in list"
             :key='i'>
          <video :src="item.video"
                 style="width:100%;height:100%"
                 controls></video>
          <p>{{item.title}}</p>
        </div>
      </div>
      <div class="videoModule"
           v-show="cur==1">
        <div class="video-item"
             v-for="(item,i) in tomatoList"
             :key='i'>
          <video :src="item.video"
                 style="width:100%;height:100%"
                 controls></video>
          <p>{{item.title}}</p>
        </div>
      </div>
      <div class="videoModule"
           v-show="cur==2">
        <div class="video-item"
             v-for="(item,i) in list"
             :key='i'>
          <video :src="item.video"
                 style="width:100%;height:100%"
                 controls></video>
          <p>{{item.title}}</p>
        </div>
      </div>
      <div class="videoModule"
           v-show="cur==3">
        <div class="video-item"
             v-for="(item,i) in list"
             :key='i'>
          <video :src="item.video"
                 style="width:100%;height:100%"
                 controls></video>
          <p>{{item.title}}</p>
        </div>
      </div>

      <el-pagination class="pagination"
                     background
                     :pageSize="pageSize"
                     layout="prev, pager, next"
                     @current-change="currentChange"
                     :total="pagesTotal">
      </el-pagination>

    </div>
  </div>
</template>

<script>

export default {
  components: {

  },
  data () {
    return {
      pageSize: 8,
      pagesTotal: 1,
      list: [
        {
          video: require('../../../assets/images/haiZeTian/01.mp4'),
          title: '白菜育苗技术'
        },
        {
          video: require('../../../assets/images/haiZeTian/01.mp4'),
          title: '白菜育苗技术'
        },
        {
          video: require('../../../assets/images/haiZeTian/01.mp4'),
          title: '白菜育苗技术'
        },
        {
          video: require('../../../assets/images/haiZeTian/01.mp4'),
          title: '白菜育苗技术'
        },
        {
          video: require('../../../assets/images/haiZeTian/01.mp4'),
          title: '白菜育苗技术'
        },
        {
          video: require('../../../assets/images/haiZeTian/01.mp4'),
          title: '白菜育苗技术'
        },
        {
          video: require('../../../assets/images/haiZeTian/01.mp4'),
          title: '白菜育苗技术'
        },
        {
          video: require('../../../assets/images/haiZeTian/01.mp4'),
          title: '白菜育苗技术'
        },

      ],
      tomatoList: [
        {
          video: require('../../../assets/images/haiZeTian/qs.mp4'),
          title: '番茄育苗技术'
        },
        {
          video: require('../../../assets/images/haiZeTian/qs.mp4'),
          title: '番茄育苗技术'
        },
        {
          video: require('../../../assets/images/haiZeTian/qs.mp4'),
          title: '番茄育苗技术'
        },
        {
          video: require('../../../assets/images/haiZeTian/qs.mp4'),
          title: '番茄育苗技术'
        },
        {
          video: require('../../../assets/images/haiZeTian/qs.mp4'),
          title: '番茄育苗技术'
        },
        {
          video: require('../../../assets/images/haiZeTian/qs.mp4'),
          title: '番茄育苗技术'
        },
        {
          video: require('../../../assets/images/haiZeTian/qs.mp4'),
          title: '番茄育苗技术'
        },
        {
          video: require('../../../assets/images/haiZeTian/qs.mp4'),
          title: '番茄育苗技术'
        },
      ],
      cur: 0

    }
  },
  methods: {},
  mounted () { }
}
</script>
<style lang="scss">
.VideoVegetables {
  .main {
    position: relative;
    padding: 2vh 2vw;
    margin-top: 2vh;
    left: 10vw;
    width: 80vw;
    height: 70vh;
    background: rgba($color: #366a7f, $alpha: 0.5);
    border-radius: 8px;
    .btn {
      .el-button--primary {
        background: #1f7593;
        border-color: #18a2ba;
      }
      .el-button {
        padding: 15px 30px;
        font-weight: bold;
      }
      .active {
        background: url('../../../assets/images/btn_s.png') no-repeat center
          center;
        border: none;
      }
    }
    .videoModule {
      display: flex;
      height: 53vh;
      margin-top: 3vh;
      flex-wrap: wrap;
      .video-item {
        height: 20vh;
        width: 17vw;
        margin-left: 34px;
        p {
          text-align: center;
          font-size: 18px;
          font-weight: bold;
          color: #b0d713;
        }
      }
      .video-item:nth-child(1) {
        margin-left: 0;
      }
      .video-item:nth-child(5) {
        margin-left: 0;
      }
    }
    .el-pagination {
      float: right;
    }
  }
}
</style>