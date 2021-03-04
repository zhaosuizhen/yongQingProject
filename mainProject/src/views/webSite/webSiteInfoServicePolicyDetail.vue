<template>
  <div class="webSite-container">
    <div class="webSite-content-total">
      <div class="webSite-content1">
        <div class="webSite-infoService-content1-center">
          <div class="webSitePolicyNewsDetail-content">
            <div class="detail-content-left" style="background-color: #F7F7F7">
              <div class="detail-content-left-top">
                <p class="detail-content-left-title">{{this.title}}</p>
                <div class="detail-content-left-date">
                  <p style="float: left">
                    <i>新闻来源：</i><i>{{this.source}}</i>
                  </p>
                  <p style="float: right">
                    <i>发布时间：</i><i>{{this.acquisitionTime}}</i>
                  </p>
                </div>
              </div>
              <div class="detail-content-left-bottom">
                <p v-html = "content"></p>
                <p class="detail-content-left-footer"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import {policyDetail,noticeDetail} from '../../request/webService';
  export default {
    data() {
      return {
        title:'',
        source:'',
        acquisitionTime:'',
        content:'',
        id:'',
        selectName:'',
      }
    },
    created() {
      this.id = this.$route.query.id;//获取上个页面传递的id,在下面获取数据的时候先提交id
      this.selectName = this.$route.query.paneName;
    },
    methods: {
      getDetailInfo() {
        if (this.selectName == "policyFirst"){
            let self = this;
            let para = {
              id: this.id,
            }
            policyDetail(this, para).then(result => {
              if (result.code == 0) {
                let data = result.data;
                if (data) {
                  self.id = data.id
                  self.title = data.title
                  self.source = data.source
                  self.acquisitionTime = data.acquisitionTime
                  self.content = data.content.replace(/\n|\r\n/g,"<br/>");
                }
              }
            })
        }
        else{
          let self = this;
          let para = {
            id: this.id,
          }
          policyDetail(this, para).then(result => {
            if (result.code == 0) {
              let data = result.data;
              if (data) {
                self.id = data.id
                self.title = data.title
                self.source = data.source
                self.acquisitionTime = data.acquisitionTime
                self.content = data.content.replace(/\n|\r\n/g,"<br/>");
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


