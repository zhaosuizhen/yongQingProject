<template>
  <div class="navList">
      <!-- <div class="nav_list" v-if="btn_flag">
          <ul>
              <li @click="changePage" id="0" :class="this.$route.path == '/industryAnalysisIndex' ? 'nav_active' : ''">
                  <router-link to='/industryAnalysisIndex'>
                      农业"一张图"
                  </router-link>
              </li>
              <li @click="changePage" id="1" :class="this.$route.path == '/visManage' ? 'nav_active' : ''">
                  <router-link to='/visManage'>
                      农业基础数据
                  </router-link>
              </li>
              <li @click="changePage" id="2" :class="this.$route.path == '/visGeography' ? 'nav_active' : ''">
                  <router-link to='/visGeography'>
                      农业生产数据
                  </router-link>
              </li>
              <li @click="changePage" id="3" :class="this.$route.path == '/visPlant' ? 'nav_active' : ''">
                  <router-link to='/visPlant'>
                      农业经营数据
                  </router-link>
              </li>
              <li @click="changePage" id="4" :class="this.$route.path == '/visProcess' ? 'nav_active' : ''">
                  <router-link to='/visProcess'>
                      农业管理数据
                  </router-link>
              </li>
              <li @click="changePage" id="5" :class="this.$route.path == '/visDiseases' ? 'nav_active' : ''">
                  <router-link to='/visDiseases'>
                      农业服务数据
                  </router-link>
              </li>
          </ul>
      </div> -->
      
      <el-menu
        v-show="btn_flag"
        style="width:135px;overflow: hidden;padding-left: 3px;"
        default-active="2"
        class="el-menu-vertical-demo nav_list"
        @open="handleOpen"
        @close="handleClose"
        @select="selectMenu"
        background-color="rgba(0,0,0,0)"
        text-color="#fff"
        active-text-color="#06D1E5"
        unique-opened="true"
        router>

            <!-- <el-submenu index="1">
                <template slot="title">
                <b>农业"一张图"</b>
                </template>
                <el-menu-item-group>
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
                </el-menu-item-group>
            </el-submenu> -->

            <el-menu-item index="industryAnalysisIndex" :class="this.$route.path == '/industryAnalysisIndex' ? 'nav_active' : ''">
                <i style="color: #fff" class="el-icon-s-home"></i>
                <b slot="title">农业一张图</b>
            </el-menu-item>

            <el-submenu index="0" :class="( this.$route.path == '/visManage' || this.$route.path == '/visDiseases') ? 'nav_sub_active' : ''">
                <template slot="title">
                <i style="color: #fff" class="el-icon-menu"></i>
                <b>&nbsp;基础数据</b>
                </template>
                <el-menu-item-group>
                <el-menu-item index="visManage" :class="this.$route.path == '/visManage' ? 'nav_active' : ''" style="min-width:135px;border-left:1px solid #0B9BA5">经营主体</el-menu-item>
                <!-- <el-menu-item index="visGrainAndOil" :class="this.$route.path == '/visGrainAndOil' ? 'nav_active' : ''" style="min-width:135px">粮油产业</el-menu-item> -->
                <el-menu-item index="visRattanPepper" :class="this.$route.path == '/visRattanPepper' ? 'nav_active' : ''" style="min-width:135px;border-left:1px solid #0B9BA5">农业概览</el-menu-item>
                <el-menu-item index="visDiseases" :class="this.$route.path == '/visDiseases' ? 'nav_active' : ''" style="min-width:135px;border-left:1px solid #0B9BA5">产业园区</el-menu-item>
                <!-- <el-menu-item index="visVegetables" :class="this.$route.path == '/visVegetables' ? 'nav_active' : ''" style="min-width:135px">蔬菜养殖</el-menu-item> -->
                </el-menu-item-group>
            </el-submenu>

            <el-submenu index="1" :class="(this.$route.path == '/visOphiopogon' || this.$route.path == '/visInputs') ? 'nav_sub_active' : ''">
                <template slot="title">
                <i style="color: #fff" class="el-icon-s-data"></i>
                <b>&nbsp;种养数据</b>
                </template>
                <el-menu-item-group>
                <el-menu-item index="visOphiopogon" :class="this.$route.path == '/visOphiopogon' ? 'nav_active' : ''" style="min-width:135px;border-left:1px solid #0B9BA5">畜禽养殖</el-menu-item>
                <el-menu-item index="visInputs" :class="this.$route.path == '/visInputs' ? 'nav_active' : ''" style="min-width:135px;border-left:1px solid #0B9BA5">畜禽产量</el-menu-item>
                <el-menu-item index="visAgriculturalData" :class="this.$route.path == '/visAgriculturalData' ? 'nav_active' : ''" style="min-width:135px;border-left:1px solid #0B9BA5">生产种植</el-menu-item>
                </el-menu-item-group>
            </el-submenu>

            <el-submenu index="2" :class="(this.$route.path == '/visLivestock' || this.$route.path == '/visProcess' || this.$route.path == '/visAnimalHusbandry') ? 'nav_sub_active' : ''">
                <template slot="title">
                <i style="color: #fff" class="el-icon-s-flag"></i>
                <b>&nbsp;特色产业</b>
                </template>
                <el-menu-item-group>
                <el-menu-item index="visLivestock" :class="this.$route.path == '/visLivestock' ? 'nav_active' : ''" style="min-width:135px;border-left:1px solid #0B9BA5">生猪养殖</el-menu-item>
                <!-- <el-menu-item index="visProcess" :class="this.$route.path == '/visProcess' ? 'nav_active' : ''" style="min-width:135px">渔业养殖</el-menu-item> -->
                <el-menu-item index="visAnimalHusbandry" :class="this.$route.path == '/visAnimalHusbandry' ? 'nav_active' : ''" style="min-width:135px;border-left:1px solid #0B9BA5">林果产业</el-menu-item>
                </el-menu-item-group>
            </el-submenu>

            <el-menu-item index="visMarket" :class="this.$route.path == '/visMarket' ? 'nav_active' : ''">
                <i style="color: #fff" class="el-icon-s-marketing"></i>
                <b slot="title">&nbsp;农业价格</b>
            </el-menu-item>

            <!-- <el-submenu index="3" :class="(this.$route.path == '/visDiseases' || this.$route.path == '/visInputs') ? 'nav_sub_active' : ''">
                <template slot="title">
                <b>农业产中数据</b>
                </template>
                <el-menu-item-group>
                <el-menu-item index="visDiseases" :class="this.$route.path == '/visDiseases' ? 'nav_active' : ''" style="min-width:135px">病虫害</el-menu-item>
                <el-menu-item index="visInputs" :class="this.$route.path == '/visInputs' ? 'nav_active' : ''" style="min-width:135px">投入品</el-menu-item>
                </el-menu-item-group>
            </el-submenu> -->

            <!-- <el-menu-item index="visMarket" :class="this.$route.path == '/visMarket' ? 'nav_active' : ''">
                <b slot="title">农业价格数据</b>
            </el-menu-item>

            <el-menu-item index="visProcess"  :class="this.$route.path == '/visProcess' ? 'nav_active' : ''">
                <b slot="title">农业管理数据</b>
            </el-menu-item>
            <el-menu-item index="visDiseases"  :class="this.$route.path == '/visDiseases' ? 'nav_active' : ''">
                <b slot="title">农业服务数据</b>
            </el-menu-item> -->
        </el-menu>

      <div @click="btn_click" :class="btn_flag ? 'nav_btn_in' : 'nav_btn_out'"></div>
  </div>
</template>

<script>
import { hitsCount } from '@/api/burying'
export default {
    data(){
        return{
            btn_flag:true,
            active_index:0
        }
    },
    methods:{
        btn_click(){
            this.btn_flag = !this.btn_flag
            console.log(this.$route)
        },
        changePage(e){
            this.active_index = e.target.id
        },
        async selectMenu(index){
            let moduleName = null
            if(index == 'industryAnalysisIndex'){
                moduleName = '农业一张图'
            }else if(index == 'visManage'){
                moduleName = '经营主体'
            }else if(index == 'visRattanPepper'){
                moduleName = '农业概览'
            }else if(index == 'visDiseases'){
                moduleName = '产业园区'
            }else if(index == 'visOphiopogon'){
                moduleName = '畜禽养殖'
            }else if(index == 'visInputs'){
                moduleName = '畜禽产量'
            }else if(index == 'visAgriculturalData'){
                moduleName = '生产种植'
            }else if(index == 'visLivestock'){
                moduleName = '生猪养殖'
            }else if(index == 'visAnimalHusbandry'){
                moduleName = '林果产业'
            }else if(index == 'visMarket'){
                moduleName = '农业价格'
            }
            let res = await hitsCount({
                moduleName,
                platformType: '0'
            })
            console.log(res)
        }
    },
    created(){
        
    }
}
</script>

<style s style="color: #fff"coped>
.el-icon-arrow-down{
    display: none !important;
}
</style>