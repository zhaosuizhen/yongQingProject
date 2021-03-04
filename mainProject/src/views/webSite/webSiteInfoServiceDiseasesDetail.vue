<template>
  <div class="webSite-container">
    <div class="webSite-content-total">
      <div class="webSite-content1">
        <div class="webSite-infoService-content1-center">
          <div class="webSitePolicyNewsDetail-content">
            <div class="detail-content-left" style="background-color: #F7F7F7">
              <div class="detail-content-left-top">
                <p class="detail-content-left-title">{{this.diseasesName}}</p>
                <div class="detail-content-left-date">
                  <p style="float: left">
                    <i>新闻来源：</i><i>{{this.reptileUrl}}</i>
                  </p>
                  <!--<p style="display: inline">-->
                    <!--<i>发布时间：</i><i>{{this.updateTime}}</i>-->
                  <!--</p>-->
                  <p style="float: right">
                    <i>采集时间：</i><i>{{this.createTime}}</i>
                  </p>
                </div>
              </div>
              <div class="webSite-diseases-detail-img">
                <img :src="this.picUrl" :onerror="defaultimg"  alt="">
              </div>
              <div class="detail-content-left-bottom">
                <div v-html="diseasestContent"></div>
                <p class="detail-content-left-footer">
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  // import {thumbnailImg} from '../../util/carousel.min';
  import {diseasesDetail} from '../../request/webService';
  export default {
    data() {
      return {
        diseasesName:'',
        reptileUrl:'',
        picUrl:'',
        // updateTime:'',
        createTime:'',
        diseasestContent:'',
        id:'',
        selectName:'',
        defaultimg: 'this.src="' + require('../../assets/webSiteImages/noImg.jpg') + '"',
      }
    },
    created() {
      this.id = this.$route.query.id;//获取上个页面传递的id,在下面获取数据的时候先提交id
      this.selectName = this.$route.query.paneName;
    },
    methods: {
      getDetailInfo() {
        if (this.selectName == "equipmentDiseases"){
          let self = this;
          let para = {
            id: this.id,
          }
          diseasesDetail(this, para).then(result => {
            if (result.code == 0) {
              let data = result.data;
              if (data) {
                self.id = data.id
                self.diseasesName = data.diseasesName
                self.reptileUrl = data.reptileUrl
                self.picUrl = data.picUrl
                self.createTime = data.createTime
                // self.updateTime = data.updateTime
                self.diseasestContent = data.diseasestContent.replace(/\n|\r\n/g,"<br/>");
              }
            }
          })
        }
      }

    },
    mounted() {
      this.getDetailInfo()
    }
  }
</script>
<style>
  pre {
    text-indent: 0;
    white-space: pre-wrap;       /* css-3 */
    white-space: -moz-pre-wrap;  /* Mozilla, since 1999 */
    white-space: -pre-wrap;      /* Opera 4-6 */
    white-space: -o-pre-wrap;    /* Opera 7 */
    word-wrap: break-word;       /* Internet Explorer 5.5+ */
  }
</style>
