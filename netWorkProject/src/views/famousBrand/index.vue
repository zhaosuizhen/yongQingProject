
<template>
  <div class="recommendPage" style="padding-top:2vh">
    <el-carousel @change="changeBanner" :interval="5000" type="card" height="43vh">
      <el-carousel-item v-for="(item,index) in imgInfo" :key="index">
        <div class="banner_box">
          <img width="100%" :src="item.banner" alt="">
          <div class="content_box">
            <h1>{{item.title}}</h1>
            <p>{{item.content}}</p>
          </div>
        </div>
      </el-carousel-item>
    </el-carousel>
    <div class="vegetableList">
      <div class="vegetableItem" v-for="(item,index) in imgInfo[bannerIndex].imgs" :key="index">
        <img width="100%" :src="item.url" alt="">
        <p>{{item.title}}</p>
      </div>
    </div>
  </div>
</template>
 
<script>
 
export default {
  components: {
    
  },
  data() {
    return {
      bannerIndex: 0,
      imgInfo:[
        {
          banner: require('../../assets/images/haiZeTian/haizetian.png'),
          title: '海岸田现代农业园区',
          content: '廊坊海泽田农业开发有限公司成立于2010年7月，注册资本 5000万元。是一家以健康生活为宗旨集科研、种植、养殖、采摘、旅游休闲为一体的现代健康生态循环农业企业。规划占地3000亩,现已建成高标准日光温室 171座、连栋智能温室 8640平米。公司以休闲养生、健康生态农业为主题，引进国内外种植技术，培育优质品种，积极推广膜下滴灌、蜜蜂授粉等技术，坚持使用有机肥料，形成了一套能够全年生产各种健康、绿色蔬菜的技术体系，有效保证了产品品质。',
          imgs: [
            {title: '西红柿1', url: require('../../assets/images/haiZeTian/h01.png')},
            {title: '西红柿2', url: require('../../assets/images/haiZeTian/h02.png')},
            {title: '西红柿3', url: require('../../assets/images/haiZeTian/h03.png')},
            {title: '西红柿4', url: require('../../assets/images/haiZeTian/h04.png')},
            {title: '西红柿5', url: require('../../assets/images/haiZeTian/h05.png')}
          ]
        },
        {
          banner: require('../../assets/images/hengDuMeiYe/hengdu.png'),
          title: '恒都美业现代农业科技园区',
          content: '河北恒都美业农业开发有限公司，创建于2010年5月25日，公司先后获得“河北省农业产业化重点龙头企业”、“河北     省农业企业联合会常务副会长单位”、“河北省科技型企业”等荣誉。园区现状：园区总体规划面积27.9万亩，其中核心区面积3.68万亩。主导产业现状：园区以花卉和绿色蔬菜为主导产业。',
          imgs: [
            {title: '西红柿1', url: require('../../assets/images/hengDuMeiYe/hd01.png')},
            {title: '西红柿2', url: require('../../assets/images/hengDuMeiYe/hd02.png')},
            {title: '西红柿3', url: require('../../assets/images/hengDuMeiYe/hd03.png')},
            {title: '西红柿4', url: require('../../assets/images/hengDuMeiYe/hd04.png')},
            {title: '西红柿5', url: require('../../assets/images/hengDuMeiYe/hd05.png')}
          ]
        },
        {
          banner: require('../../assets/images/shengShiFuDi/shengshi.png'),
          title: '威世福地科技园',
          content: '盛世福地科技园位于永清县三圣口乡，规划占地3000亩。园区坚持绿色农业、循环农业、旅游农业的发展道路，将现代科技农业、生态农业和观光旅游有机地紧密地结合在一起，以福文化和永定河文化为内涵，充分利用自然资源，重点建设了采摘区、垂钓池、生态酒店，木质别墅，儿童乐园、水上乐园，烧烤广场、青少年拓展训练基地等八个板块，致力于打造有别于城市旅游的具有浓厚乡土特色的乡村旅游示范园，年接待游客100余万人次，深受京津冀居民的欢迎。',
          imgs: [
            {title: '西红柿1', url: require('../../assets/images/shengShiFuDi/s01.png')},
            {title: '西红柿2', url: require('../../assets/images/shengShiFuDi/s02.png')},
            {title: '西红柿3', url: require('../../assets/images/shengShiFuDi/s03.png')},
            {title: '西红柿4', url: require('../../assets/images/shengShiFuDi/s04.png')},
            {title: '西红柿5', url: require('../../assets/images/shengShiFuDi/s05.png')}
          ]
        },
        {
          banner: require('../../assets/images/xinYuanYangGuang/xinyuan.png'),
          title: '新苑的光现代农业园区',
          content: '新苑阳光现代农业园区，位于亦庄·永清高新区，由新苑阳光农业有限公司投资建设，成立于 2012年7月，注册资金1亿元。园区核心区占地5000亩，辐射带动区域3 万亩，累计完成投资3.2亿元，建成科技集成展示区、集约化蔬菜育苗区和集约化高效安全蔬菜种植基地，现有企业员工110余人。先后获得了"国家高效节水技术集成示范区"、"农业部蔬菜标准化创建基地"、"全国休闲农业和乡村旅游四星级示范企业"、"河北省农业产业化省级示范联合体"等荣誉称号。',
          imgs: [
            {title: '西红柿1', url: require('../../assets/images/xinYuanYangGuang/x01.png')},
            {title: '西红柿2', url: require('../../assets/images/xinYuanYangGuang/x02.png')},
            {title: '西红柿3', url: require('../../assets/images/xinYuanYangGuang/x03.png')},
            {title: '西红柿4', url: require('../../assets/images/xinYuanYangGuang/x04.png')},
            {title: '西红柿5', url: require('../../assets/images/xinYuanYangGuang/x05.png')}
          ]
        },
        {
          banner: require('../../assets/images/yuanCun/yuancun.png'),
          title: '远村现代农业创区',
          content: '廊坊远村现代农业园区位于永清县刘街乡土楼胜利村，由廊坊远村农业开发有限公司兴建，创建于 2013年6 月，规划面积 23.3平方公里，总投资 30 亿元，园区以蔬菜种植及加工、河北香菊种植及菊王茶加工、籽粒苋种植及饲草加工、生猪养殖及屠宰加工、有机肥生产加工、旅游观光为六大主导产业，经营土地1.3 万亩，涉及团结、建设等八个村街，先后被评为"中国魅力十佳乡村"、"全国文明村镇"、"第 29届奥运会食品供应保障单位"、"河北省现代农业园区"、"河北美丽田园"、"河北最美休闲农村""河北四星级休闲农业园"等。',
          imgs: [
            {title: '西红柿1', url: require('../../assets/images/yuanCun/y01.png')},
            {title: '西红柿2', url: require('../../assets/images/yuanCun/y02.png')},
            {title: '西红柿3', url: require('../../assets/images/yuanCun/y03.png')},
            {title: '西红柿4', url: require('../../assets/images/yuanCun/y04.png')},
            {title: '西红柿5', url: require('../../assets/images/yuanCun/y05.png')}
          ]
        },
      ]
    };
  },
  computed: {
    
  },
  mounted() {
    
  },
  methods:{
    changeBanner(index){
      this.bannerIndex = index
      // console.log(i)
    },
  }
};
</script>
<style scoped lang="scss">
.recommendPage {
  position: relative;
  width: 100%;
  height: 75vh;
  /* background: pink; */
}
.swiper-container{
  position: relative;
  width: 100%;
  height: 50vh;
}
.vegetableList{
  // margin-top: 2vh;
  position: relative;
  width: 80%;
  margin-left: 10%;
  height: 25vh;
  display: flex;
  justify-content: space-around;
  .vegetableItem{
    width: 15%;
    img{
      border-radius: 8px;
    }
    p{
      font-weight: bold;
      color: #fff;
      text-align: center;
      font-size: 2rem;
    }
  }
}
.recommendPage .swiper-container .swiper-slide{
  width: 100%;
  /* line-height: 200px; */
  /* background: yellowgreen; */
  color: #000;
  font-size: 16px;
  text-align: center;
}

.el-carousel{
  position: relative;
  width: 80%;
  left: 10%;
}

.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }

  .banner_box{
    position: relative;
    width: 100%;
    height: 100%;
    .content_box{
      padding: 0.5rem 0.8rem;
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 45%;
      background: rgba(40, 41, 44, 0.8);
      color: #fff;
      z-index: 99999;
      h1{
        font-size: 2rem;
      }
      p{
        text-indent: 2em;
        font-size: 1.2rem;
        line-height: 2.6vh;
      }
    }
  }
</style>