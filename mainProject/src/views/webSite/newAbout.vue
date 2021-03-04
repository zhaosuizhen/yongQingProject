<template>
  <div class="webSite-container">
    <div class="webSite-banner">
      <!-- <img src="../../assets/webSiteImages/index_banner2.jpg" alt=""> -->
      <el-carousel height="660px">
        <el-carousel-item v-for="(item,index) in imgList" :key="index">
          <img :src="item" alt="">
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="webSite-content-total">
      <!--和县农业情况-->
      <!-- <div class="webSite-content1">
        <div class="webSite-content1-center" style="margin-bottom: 20px">
          <div class="webSite-sy-common-title">
            <span class="webSite-sy-common-title-c">——&nbsp&nbsp&nbsp&nbsp三台县农业情况&nbsp&nbsp&nbsp&nbsp——</span>
            <span class="webSite-sy-common-line"></span>
            <span class="">全县农业产业化发展现状</span>
          </div>

          <p class="titleText">三台县是四川省典型的丘区农业大县、人口大县，全县农业人口125.5万人，耕地119万亩、林地127万亩，
              农业总产值和主要农副产品总量稳居全国百强，先后荣获全国粮食生产先进县、国家农业产业化示范基地、
              全省“三农”工作先进县、全省农村改革工作先进县、全省现代农业产业基地强县、全省现代农林畜重点（示范）县。
              2019年全县农林牧渔业总产值达135.1亿元，农民人均可支配收入达17152元。</p>

          <div class="img_text_box">
            <div class="imgBox">
              <img src="../../assets/santai_img/banner/1_1.png" alt="">
            </div>
            <div class="textBox" style="padding-left:15px">
              <h3>一、全力推动主导产业转型升级</h3>
              <p>结合我县资源禀赋、产业基础，科学构建了以麦冬、藤椒、生猪三大特色产业和粮油、蔬菜两大基础产业为主导的“3+2”现代农业产业体系。
                实施优势特色农业提质增效行动计划，全力推动产业链纵深发展、价值链高端攀升、利益链广域覆盖。2019年，全县麦冬种植面积达到6.62万亩，
                总产1.52万吨，总产量占全国麦冬产量70%，出口量占全国麦冬制品出口量的80%，成功创建国家级出口食品农产品（麦冬）质量安全示范区；
                建成国家级核心育种场2个，出栏生猪89.3万头，位居全省第一；藤椒种植面积20万亩，成功列入四川省特色农产品优势区；粮食总产66万吨、
                油料总产15万吨，分别位居全省第三、第一；蔬菜种植面积24.45万亩。</p>
            </div>
          </div>

          <div class="img_text_box">
            <div class="textBox"  style="padding-right:15px">
              <h3>二、全力推动一二三产融合发展</h3>
              <p>突出“接二连三”“隔二连三”，以“建基地、育产业、创品牌、拓市场”推动全产业链建设。在发展好优质基地的基础上，我县引导、
                支持龙头企业和新型经营主体后延一产、做强二产、做新三产，推进了100万头A级屠宰场、绿溪优食谷、圣菲伦藤椒加工厂、
                麦冬博物馆、国家生猪交易市场四川分市场、麦冬交易中心、明兴农业主题公园等一批农产品加工、销售或农旅融合项目，
                创建了枫叶牧场、忆乡、麦冬旺、青悦花藤等农产品品牌。坚持生产市场两手抓、线上线下两结合，完善流通链条和市场布局，
                实施“互联网+”现代农业示范行动，以“邮乐网”和“云端363”为核心，构建“2+N”平台模式，推动农村“全企入网”“全民触网”。
                加快物流集配中心建设，推广“产地集配+销地分拨”“电商+冷链快递+智能菜柜”农产品直销模式。打造麦冬特色小镇、藤椒小镇（麻匠镇）、
                枫叶牧场等新业态，建成狂欢小镇、盛世樱花谷、大地飞歌文旅综合体等农旅融合重点项目，沿江农文林旅融合发展产业带基本成型成势，
                全县150个休闲农业经营单位实现乡村旅游收入2.5亿元，成功推进“产区变景区、田园变公园、产品变礼品”，构建独具三台特色“种养加、农林旅”发展模式。</p>
            </div>
            <div class="imgBox">
              <img src="../../assets/santai_img/banner/2_1.png" alt="">
            </div>
          </div>

          <div class="img_text_box">
            <div class="imgBox">
              <img src="../../assets/santai_img/banner/3_1.png" alt="">
            </div>
            <div class="textBox" style="padding-left:15px">
              <h3>三、全力推动现代农业园区建设</h3>
              <p>坚持把现代农业园区作为推进农业供给侧结构性改革的主战场和实施乡村振兴战略的主引擎，实施“千村百园创建”“重点园区建设”两大工程，
                着力构建1个国家级、2个省级现代农业园区的“1+2+5+N”梯次推进体系。麦冬种养循环现代农业园区成功创建全省首批五星级现代农业园区，
                并入选国家产业园创建管理体系；建成市级现代农业园区2个，县级现代农业园区5个，目前正在加速推进三台县优质粮油现代农业园区、三台县刘营镇优质水果现代农业园区建设。</p>
            </div>
          </div>

          <div class="img_text_box">
            <div class="textBox" style="padding-right:15px">
              <h3>四、全力推动新型经营主体培育</h3>
              <p>以培育新型农民、家庭农场、专业合作社为重点，形成了以企业为龙头、以家庭农场、合作社为骨干、以高素质农民为基础的新型经营体系，
                探索出了一条“育小户”“户建场”“场入社”“社联企”小农户和现代农业发展有机衔接的多元化联动发展新路子，2019年新培育种养殖大户166家，
                家庭农场31家，农民专业合作社79家，新型农业经营主体达4594家，培育农业产业化联合体2个。</p>
                <p>近些年，三台县立足资源优势，通过“3+2”优势农业产品的发展支撑起了农业产业振兴的天地，通过科技创新、机制创新、
                  模式创新释放了农业农村的无限活力，下一步我们将继续围绕特色产业、紧盯重点任务，开拓思维、综合施策，促进农业全面升级、农村全面进步、农民全面发展。</p>
            </div>
            <div class="imgBox">
              <img src="../../assets/santai_img/banner/4_1.png" alt="">
            </div>
          </div>

        </div>
      </div> -->

      <!--和县现代农业产业园-->
      <!-- <div class="webSite-content2 webSite-content-bg">
        <div class="webSite-content1-center">
          <div class="webSite-sy-common-title">
            <span class="webSite-sy-common-title-c">——&nbsp&nbsp&nbsp&nbsp农业产业化建设&nbsp&nbsp&nbsp&nbsp——</span>
            <span class="webSite-sy-common-line"></span>
            <span class="">“3+2”现代农业产业发展成效显著</span>
          </div>
          <div class="webSite-sy-common-body">
            <div>
              <img src="../../assets/santai_img/8.png" alt="">
              <div class="right_text">
                  <h2>畜牧产业</h2>
                  <p>全面贯彻落实国家畜牧业发展扶持政策<br/>大力推进畜牧产业健康持续发展</p>
              </div>
            </div>
            <div>
              <img src="../../assets/santai_img/5.png" alt="">
              <div class="right_text">
                  <h2>麦冬产业</h2>
                  <p>大力推广麦冬规范化种植技术<br/>标准化种植面积达总面积的80%以上</p>
              </div>
            </div>
            <div>
              <img src="../../assets/santai_img/6.png" alt="">
              <div class="right_text">
                  <h2>藤椒产业</h2>
                  <p>按照“一园三带五片”发展规划<br/>稳步推进藤椒基地建设</p>
              </div>
            </div>
            <div>
              <img src="../../assets/santai_img/7.png" alt="">
              <div class="right_text">
                  <h2>蔬菜产业</h2>
                  <p>按照“优质、特色、品牌、融合”的发展目标<br/>积极推广“猪-沼-菜”种养循环模式</p>
              </div>
            </div>
            <div>
              <img src="../../assets/santai_img/4.png" alt="">
              <div class="right_text">
                  <h2>粮油产业</h2>
                  <p>推广生态种植、普及优良品种、<br/>发展订单农业、培育优质品牌为抓手</p>
              </div>
            </div>

          </div>

        </div>
      </div> -->

      <!-- 资源专题 -->
      <div class="webSite-content2 webSite-content-bg" style="margin-top:70px">
        <div class="webSite-content1-center">
          <div class="webSite-sy-common-title">
            <span class="webSite-sy-common-title-c">——&nbsp&nbsp&nbsp&nbsp资源专题&nbsp&nbsp&nbsp&nbsp——</span>
            <span class="webSite-sy-common-line"></span>
            <span class="webSite-sy-common-title-e">Resource topics</span>
          </div>
          <div class="ZYZT_content_box">
            <div class="ZYZT_content" v-for="(item,index) in ZYZT_list" :key="index">
              <div class="img_box"><img width="90px" :src="item.img" alt=""></div>
              <div class="title_content">
                <p style="font-size:16px;color:#10B49B"><b>{{item.title}}</b></p>
                <p style="text-align:left;margin-top:15px">{{item.content}}</p>
              </div>
              <div @click="goToPage(item.routerPath)" class="link">点击查看<i class="el-icon-d-arrow-right"></i></div>
            </div>
          </div>
        </div>
      </div>

      <!-- 产业园区 -->
      <div class="webSite-content2 webSite-content-bg" style="margin-top:70px">
        <div class="webSite-content1-center">
          <div class="webSite-sy-common-title">
            <span class="webSite-sy-common-title-c">——&nbsp&nbsp&nbsp&nbsp产业园区&nbsp&nbsp&nbsp&nbsp——</span>
            <span class="webSite-sy-common-line"></span>
            <span class="webSite-sy-common-title-e">Industrial park</span>
          </div>
          <p style="text-align:left;text-indent:2em">
            永清以发展“生态农业、高效农业”为重点，着力构建“企业+品牌、基地+示范、农户+规模”的现代农业发展新格局，大力实施“龙头园区带动工程”，各类农业园区和龙头企业
            实现蓬勃发展。现有市级以上农业园区7家，市级以上农业产业化重点龙头企业37家，其中，远村现代农业园区、恒都美业农业园区、海泽田现代农业园区、新苑阳光现代农
            业园、盛世福地科技园成功列入全国农村创业创新园区（基地）目录。初步形成了的蔬菜配送加工、畜禽养殖加工、林木果品加工、棉花粮油加工、粮食酿造五大龙头产业群。
          </p>
          <div class="CYYQ_content_box" @mouseenter="endTimer" @mouseleave="openTimer">
            <div @mouseenter="choiceImg(index)" :class="index == CYYQ_active_index ? 'active' : 'item'" v-for="(item,index) in CYYQ_list" :key="index">
              <p :class="index == CYYQ_active_index ? 'top_title_active' : 'top_title'">{{item.title}}</p>
              <img width="820px" height="400px" :src="item.imgUrl" alt="">
              <p :class="index == CYYQ_active_index ? 'bottom_text_active' : 'bottom_text'">{{item.content}}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- 市场分析 -->
      <div class="webSite-content2 webSite-content-bg" style="margin-top:70px">
        <div class="webSite-content1-center">
          <div class="webSite-sy-common-title">
            <span class="webSite-sy-common-title-c">——&nbsp&nbsp&nbsp&nbsp市场分析&nbsp&nbsp&nbsp&nbsp——</span>
            <span class="webSite-sy-common-line"></span>
            <span class="webSite-sy-common-title-e">Market analysis</span>
          </div>
          <div class="SCFX_content_box">
            <div class="radio_box">
              <div @click="choice_SCFX('猪肉')" :class="['radio_item', SCFX_radio == '猪肉' ? 'isActive' :'']">猪肉</div>
              <div @click="choice_SCFX('葡萄')" :class="['radio_item', SCFX_radio == '葡萄' ? 'isActive' :'']">葡萄</div>
              <div @click="choice_SCFX('梨')" :class="['radio_item', SCFX_radio == '梨' ? 'isActive' :'']">梨</div>
            </div>
            <div class="SCFX_item">
              <div class="text">
                <div class="title">
                  <div class="date">
                    <div class="box">
                      <div class="top"><h1>{{day}}</h1></div>
                      <div class="bottom"><h1>{{year}}/{{month}}</h1></div>
                    </div>
                  </div>
                  <div class="price"><h1 style="font-size:32px;color:#F28D0E">{{quanGuo_price}}</h1><h1>全国均价（元/斤）</h1></div>
                  <div class="price"><h1 style="font-size:32px;color:#78CF07">{{yongQing_price}}</h1><h1>永清均价（元/斤）</h1></div>
                </div>
                <div class="link">
                  <ul>
                    <li v-for="(item,index) in article_list" :key="index"><span>{{item.title.substring(0,32)}}...</span></li>
                  </ul>
                </div>
              </div>
              <div class="echarts" id="shiChangFenXi"></div>
            </div>
          </div>
        </div>
      </div>

      <!--数据资源标准体系-->
      <div class="webSite-content2 webSite-content-bg" style="height: 600px;">
        <div class="webSite-content1-center">
          <div class="webSite-sy-common-title">
            <span class="webSite-sy-common-title-c">——&nbsp&nbsp&nbsp&nbsp数据资源标准体系&nbsp&nbsp&nbsp&nbsp——</span>
            <span class="webSite-sy-common-line"></span>
            <span class="webSite-sy-common-title-e">Data resource standard system</span>
          </div>
          <div class="newAbout-resources" style="height: 300px;">
            <div class="newAbout-resources-left">
              <img src="../../assets/webSiteImages/newAbout_img1.png" alt="">
              <p>总体标准</p>
            </div>
            <div class="newAbout-resources-right">
              <div>
                <img src="../../assets/webSiteImages/newAbout_img2.png" alt="">
                <p>信息资源标准</p>
              </div>
              <div>
                <img src="../../assets/webSiteImages/newAbout_img3.png" alt="">
                <p>总体应用标准</p>
              </div>
              <div>
                <img src="../../assets/webSiteImages/newAbout_img4.png" alt="" style="margin-bottom: 0">
                <p>基础设施标准</p>
              </div>
              <div>
                <img src="../../assets/webSiteImages/newAbout_img5.png" alt="" style="margin-bottom: 0">
                <p>管理标准</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!--市场行情-->
      <!-- <div class="webSite-content1" style="height: 1055px;">
        <div class="webSite-content1-center">
          <div class="webSite-sy-common-title">
            <span class="webSite-sy-common-title-c">——&nbsp&nbsp&nbsp&nbsp市场行情&nbsp&nbsp&nbsp&nbsp——</span>
            <span class="webSite-sy-common-line"></span>
            <span class="webSite-sy-common-title-e">MARKET QUOTATION</span>
          </div>
          <webSiteMarketNewTable ref="webSiteMarketNewTable"></webSiteMarketNewTable>
        </div>
      </div> -->

      <!--平台情况-->
      <div class="webSite-content2 webSite-content-bg" style="height: 600px;">
        <div class="webSite-content1-center">
          <div class="webSite-sy-common-title">
            <span class="webSite-sy-common-title-c">——&nbsp&nbsp&nbsp&nbsp平台情况&nbsp&nbsp&nbsp&nbsp——</span>
            <span class="webSite-sy-common-line"></span>
            <span class="webSite-sy-common-title-e">Platform situation</span>
          </div>
          <div class="newAbout-platform" >
            <el-tabs v-model="tableNewAbout">
              <el-tab-pane label="成果网络化系统" name="newAboutPlatformFirst">
                <div class="newAbout-platform-img">
                  <img src="../../assets/webSiteImages/newAbout_platform2.png" alt="">
                </div>
                <div class="newAbout-platform-text">
                  <!-- <p><a href="http://39.98.226.242:8089/datamanage/#/industryAnalysisIndex" target="_blank">成果网络化系统</a></p> -->
                  <p>成果网络化系统</p>
                  <ul class="newAbout-platform-ul">
                    <li>基础管理系统</li>
                    <li>分析挖掘系统</li>
                    <li>数据安全系统</li>
                  </ul>
                </div>
              </el-tab-pane>
              <el-tab-pane label="秸秆追溯系统" name="newAboutPlatformSecond">
                <div class="newAbout-platform-img">
                  <img src="../../assets/webSiteImages/newAbout_platform1.png" alt="">
                </div>
                <div class="newAbout-platform-text">
                  <!-- <p><a href="http://39.98.226.242:8089/dataupdate/#/loginUpdate" target="_blank">秸秆追溯系统</a></p> -->
                  <p>秸秆追溯系统</p>
                  <ul class="newAbout-platform-ul">
                    <li>数据填报系统</li>
                    <li>数据交换系统</li>
                    <li>移动数据采集系统</li>
                    <li>涉及网络数据爬取系统</li>
                  </ul>
                </div>
              </el-tab-pane>
              <el-tab-pane label="OA办公系统" name="newAboutPlatformThird">
                <div class="newAbout-platform-img">
                  <img class="OA" width="360" src="../../assets/yongqing_img/OAwork.png" alt="">
                </div>
                <div class="newAbout-platform-text">
                  <p>OA办公系统</p>
                  <div class="commentText">
                    <p >实现远程办公、无纸化办公、手机办公，做到文件一条线下发，随时随地办公，文件无漏收，工作安排及时，从而提高内部办事效率。<span @click="downLoadManual"><a target="_blank" style="font-weight:400;font-size:15px" href="http://39.104.114.103:8082/image/datacentersystem/pdf/Nail_Office.pdf">使用手册下载</a></span></p>
                    <div class="downLoadDingDing">
                      <div class="downLoadItem android">
                        <template>
                          <div @mouseenter="mouseenterBox('android')" v-if="android_show" class="show">
                            <img class="logo" width="45" src="../../assets/yongqing_img/android.jpg" alt="">
                            <p>Android</p>
                          </div>
                          <div @mouseleave="mouseleaveBox('android')" v-else class="show">
                            <img class="code" width="100" src="../../assets/yongqing_img/androidCode.jpg" alt="">
                            <p style="padding: 15px 0 0 0;">下载Android正式版</p>
                          </div>
                        </template>
                      </div>
                      <div class="downLoadItem iphone">
                        <template>
                          <div @mouseenter="mouseenterBox('iphone')" v-if="iphone_show" class="show">
                            <img class="logo" width="45" src="../../assets/yongqing_img/iphone.jpg" alt="">
                            <p>iPhone</p>
                          </div>
                          <div @mouseleave="mouseleaveBox('iphone')" v-else class="show">
                            <img class="code" width="100" src="../../assets/yongqing_img/iphoneCode.jpg" alt="">
                            <p style="padding: 15px 0 0 0;">下载iPhone客户端</p>
                          </div>
                        </template>
                      </div>
                      <div class="downLoadItem mac">
                        <template>
                          <div @mouseenter="mouseenterBox('mac')" v-if="mac_show" class="show">
                            <img class="logo" width="45" src="../../assets/yongqing_img/mac.jpg" alt="">
                            <p>Mac</p>
                          </div>
                          <div @mouseleave="mouseleaveBox('mac')" @click="downLoadDingDing('mac')" v-else class="show">
                            <img class="code" width="100" src="../../assets/yongqing_img/downLoad.jpg" alt="">
                            <p style="padding: 15px 0 0 0;">下载Mac客户端</p>
                          </div>
                        </template>
                      </div>
                      <div class="downLoadItem windows">
                        <template>
                          <div @mouseenter="mouseenterBox('windows')" v-if="windows_show" class="show">
                            <img class="logo" width="45" src="../../assets/yongqing_img/windows.jpg" alt="">
                            <p>Windows</p>
                          </div>
                          <div @mouseleave="mouseleaveBox('windows')" @click="downLoadDingDing('windows')" v-else class="show">
                            <img class="code" width="100" src="../../assets/yongqing_img/downLoad.jpg" alt="">
                            <p style="padding: 15px 0 0 0;">下载Windows客户端</p>
                          </div>
                        </template>
                      </div>
                    </div>
                  </div>
                  <!-- <ul class="newAbout-platform-ul">
                    <li>基础数据访问服务系统</li>
                    <li>农业专题信息服务系统</li>
                    <li>物联网数据接入服务</li>
                    <li>公众数据访问服务</li>
                    <li>农业生产管理应用系统</li>
                  </ul> -->
                </div>
              </el-tab-pane>
            </el-tabs>
          </div>
        </div>
      </div>
    </div>
    <el-footer class="webSite-el-footer">
      <el-row class="webSite-el-footer-center">
        <el-col :span="10">
          <p>友情链接</p>
          <p><a class="footer-text" href="http://www.moa.gov.cn/" target="_blank">中华人民共和国农业农村部</a></p>
          <p><a class="footer-text"  href="http://www.agri.cn/" target="_blank">中国农业信息网</a></p>
          <p><a class="footer-text"  href="http://nync.hebei.gov.cn/" target="_blank">河北省农业农村厅</a></p>
          <p><a class="footer-text"  href="http://yongqing.gov.cn/zhengwugongkai/zhengfujiedu/" target="_blank">永清人民政府</a></p>
        </el-col>
        <el-col :span="12">
          <p>
            <i>主管单位：</i><span class="footer-text">河北省永清县农业农村局 </span>
          </p>
          <p>
            <i>地址：</i><span class="footer-text">河北省廊坊市永清县益昌中路235号</span>
          </p>
          <p>
            <i>电话：</i><span class="footer-text">0316-6623391</span>
          </p>
          <p>
            <i>传真：</i><span class="footer-text">0316-6623391</span>
          </p>
          <p>
            <i>技术支持：</i><span class="footer-text">北京旗硕基业科技股份有限公司</span>
          </p>
        </el-col>
        <el-col :span="2" class="footer_logo">
          <img src="../../assets/webSiteImages/footer_logo.png" alt="">
        </el-col>
      </el-row>
    </el-footer>
  </div>
</template>
<script>
  import webSiteMarketNewTable from './webSiteMarketNewTable';
  import { bannerWeb, getArticlesByTitle, tradingMarket } from '@/api/banner';
  import echarts from '@/js/santaiEcharts/home'
  export default {
    name: '',
    data () {
      return {
        android_show:true,
        iphone_show:true,
        mac_show:true,
        windows_show:true,
        //市场分析
        SCFX_radio: '猪肉',
        article_list:[],
        year: null,
        month: null,
        day: null,
        quanGuo_price: 0,
        yongQing_price: 0,
        //产业园区
        CYYQ_flag: true,
        CYYQ_timer: null,
        CYYQ_active_index: 0,
        CYYQ_list:[
          {
            imgUrl: require('@/assets/yongqing_img/10.png'),
            title: '恒都美业',
            content: '河北恒都美业农业开发有限公司，创建于2010年5月25日，公司先后获得“河北省农业产业化重点龙头企业”、“河北 省农业企业联合会常务副会长单位”、“河北省科技型企业”等荣誉。园区现状：园区总体规划面积27.9万亩，其中核心区面积3.68万亩。主导产业现状：园区以花卉和绿色蔬菜为主导产业。'
          },
          {
            imgUrl: require('@/assets/yongqing_img/11.png'),
            title: '海泽田',
            content: '廊坊海泽田农业开发有限公司成立于2010年7月，注册资本 5000万元。是一家以健康生活为宗旨集科研、种植、养殖、采摘、旅游休闲为一体的现代健康生态循环农业企业。规划占地3000亩,现已建成高标准日光温室 171座、连栋智能温室 8640平米。公司以休闲养生、健康生态农业为主题，引进国内外种植技术，培育优质品种，积极推广膜下滴灌、蜜蜂授粉等技术，坚持使用有机肥料，形成了一套能够全年生产各种健康、绿色蔬菜的技术体系，有效保证了产品品质。'
          },
          {
            imgUrl: require('@/assets/yongqing_img/12.png'),
            title: '盛世福地',
            content: '盛世福地科技园位于永清县三圣口乡，规划占地3000亩。园区坚持绿色农业、循环农业、旅游农业的发展道路，将现代科技农业、生态农业和观光旅游有机地紧密地结合在一起，以福文化和永定河文化为内涵，充分利用自然资源，重点建设了采摘区、垂钓池、生态酒店，木质别墅，儿童乐园、水上乐园，烧烤广场、青少年拓展训练基地等八个板块，致力于打造有别于城市旅游的具有浓厚乡土特色的乡村旅游示范园，年接待游客100余万人次，深受京津冀居民的欢迎。'
          },
          {
            imgUrl: require('@/assets/yongqing_img/13.png'),
            title: '新苑阳光',
            content: '新苑阳光现代农业园区，位于亦庄·永清高新区，由新苑阳光农业有限公司投资建设，成立于 2012年7月，注册资金1亿元。园区核心区占地5000亩，辐射带动区域3 万亩，累计完成投资3.2亿元，建成科技集成展示区、集约化蔬菜育苗区和集约化高效安全蔬菜种植基地，现有企业员工110余人。先后获得了"国家高效节水技术集成示范区"、"农业部蔬菜标准化创建基地"、"全国休闲农业和乡村旅游四星级示范企业"、"河北省农业产业化省级示范联合体"等荣誉称号。'
          },
          {
            imgUrl: require('@/assets/yongqing_img/14.png'),
            title: '远村',
            content: '廊坊远村现代农业园区位于永清县刘街乡土楼胜利村，由廊坊远村农业开发有限公司兴建，创建于 2013年6 月，规划面积 23.3平方公里，总投资 30 亿元，园区以蔬菜种植及加工、河北香菊种植及菊王茶加工、籽粒苋种植及饲草加工、生猪养殖及屠宰加工、有机肥生产加工、旅游观光为六大主导产业，经营土地1.3 万亩，涉及团结、建设等八个村街，先后被评为"中国魅力十佳乡村"、"全国文明村镇"、"第 29届奥运会食品供应保障单位"、"河北省现代农业园区"、"河北美丽田园"、"河北最美休闲农村""河北四星级休闲农业园"等。'
          }
        ],
        imgList:[],
        tableNewAbout:'newAboutPlatformFirst',
        ZYZT_list: [
          {
            img: require('@/assets/yongqing_img/1.png'),
            title: '耕地地理专题',
            content: '永清县耕地地力等基本情况',
            routerPath: '/baseData/webSiteBaseDataJYZT'
          },
          {
            img: require('@/assets/yongqing_img/2.png'),
            title: '经营主体专题',
            content: '永清县企业基本情况',
            routerPath: '/baseData/webSiteBaseDataNYTRP'
          },
          {
            img: require('@/assets/yongqing_img/3.png'),
            title: '耕地基本专题',
            content: '包括耕地地力，等级，面积基本情况',
            routerPath: '/baseData/webSiteBaseDataNCPJY'
          },
          {
            img: require('@/assets/yongqing_img/4.png'),
            title: '投入品专题',
            content: '投入品用量基本情况',
            routerPath: '/baseData/webSiteBaseDataTDXX'
          },
          {
            img: require('@/assets/yongqing_img/5.png'),
            title: '物联网专题',
            content: '物联网安装基本情况',
            routerPath: '/baseData/webSiteBaseDataZZXX'
          },
          {
            img: require('@/assets/yongqing_img/6.png'),
            title: '农业生产专题',
            content: '包括农业人口，劳动力等基本情况',
            routerPath: '/baseData/webSiteBaseDataNSXX'
          },
        ]
      }
    },
    methods: {
      //下载使用手册
      downLoadManual(){
        console.log('下载使用手册')
      },
      //下载钉钉
      mouseenterBox(type){
        if(type == 'android'){
          this.android_show = false
        }else if(type == 'iphone'){
          this.iphone_show = false
        }else if(type == 'mac'){
          this.mac_show = false
        }else if(type == 'windows'){
          this.windows_show = false
        }
      },
      mouseleaveBox(type){
        if(type == 'android'){
          this.android_show = true
        }else if(type == 'iphone'){
          this.iphone_show = true
        }else if(type == 'mac'){
          this.mac_show = true
        }else if(type == 'windows'){
          this.windows_show = true
        }
      },
      downLoadDingDing(type){
        if(type == 'mac'){
          location.href = 'https://www.dingtalk.com/mac/d/qd=2017120202091367000000111'
        }else if(type == 'windows'){
          location.href = 'https://www.dingtalk.com/win/d/qd=2017120202091367000000111'
        }
      },
      //获取banner图片
      async getBannerWeb(){
        let res = await bannerWeb({modularName:'首页'})
        res.data.data[0].pictureUrl.split(';').forEach(item => {
          if(item != ''){
            this.imgList.push(item)
          }
        })
      },
      //市场分析选择
      choice_SCFX(val){
        this.SCFX_radio = val
        this.getArticlesByTitleList(this.SCFX_radio)
        this.tradingMarketList(this.SCFX_radio)
      },
      //根据品种名称获取文章
      async getArticlesByTitleList(varieties){
        let res = await getArticlesByTitle({varieties})
        this.article_list = res.data.data.length <= 6 ? res.data.data : res.data.data.splice(0,6)
      },
      //交易市场数据接口
      async tradingMarketList(varieties){
        if(varieties == '猪肉'){
          varieties = '猪肉(白条猪)'
        }else if(varieties == '葡萄'){
          varieties = '巨峰葡萄'
        }else if(varieties == '梨'){
          varieties = '鸭梨'
        }
        let res = await tradingMarket({varieties})
        console.log(res.data.data)
        this.year = res.data.data.xAxis[res.data.data.xAxis.length - 1].substring(0,4)
        this.month = res.data.data.xAxis[res.data.data.xAxis.length - 1].substring(5,7)
        this.day = res.data.data.xAxis[res.data.data.xAxis.length - 1].substring(8)
        this.quanGuo_price = res.data.data.quanguo_series[res.data.data.quanguo_series.length - 1]
        this.yongQing_price = res.data.data.yongqing_series[res.data.data.yongqing_series.length - 1]

        echarts.shiChangFenXi('shiChangFenXi', res.data.data.xAxis , res.data.data.quanguo_series, res.data.data.yongqing_series, '全国', '永清')
      },
      //资源专题跳转
      goToPage(url){
        this.$router.push(url)
      },
      //产业园区选择
      choiceImg(index){
        if(!this.CYYQ_flag){
          return
        }
        this.CYYQ_flag = false
        this.CYYQ_active_index = index
        setTimeout(() => {
          this.CYYQ_flag = true
        },1000)
      },
      //设置定时器
      setTimer(){
        this.CYYQ_timer = setInterval(() => {
          this.CYYQ_active_index++
          this.CYYQ_active_index = this.CYYQ_active_index % 5
          this.choiceImg(this.CYYQ_active_index)
        },3000)
      },
      //鼠标移入关闭定时器
      endTimer(){
        clearInterval(this.CYYQ_timer)
      },
      //鼠标移出开启定时器
      openTimer(){
        this.setTimer()
      }
    },
    created(){
      this.setTimer()
    },
    async mounted () {
      //获取banner图
      await this.getBannerWeb()
      //根据品种名称获取文章
      await this.getArticlesByTitleList(this.SCFX_radio)
      //交易市场数据接口
      await this.tradingMarketList('巨峰葡萄')
      
    },
    components: {
      webSiteMarketNewTable,
    },
  }
</script>
<style scoped lang="scss">
.radio_box{
  position: relative;
  width: 210px;
  height: 50px;
  display: flex;
  .radio_item{
    position: relative;
    width: 70px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    box-sizing: border-box;
    cursor: pointer;
  }
}
.isActive{
  border-left: 1px solid #ccc;
  border-right: 1px solid #ccc;
  border-top: 6px solid #01AF94;
  border-bottom: 1px solid #fff;
  z-index: 9999;
}
</style>

