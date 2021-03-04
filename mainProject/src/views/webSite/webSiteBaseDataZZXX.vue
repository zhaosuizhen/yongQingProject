<template>
  <div class="webSite-container">
      <div style="padding: 0 2%;width: 96%">
          <el-tabs v-model="activeName" @tab-click="handleClick" type="card" class="baseDataTabsZZXX">
              <el-tab-pane label="采集器" name="first">
                  <div style="text-align: left">
                    <div class="baseDataTabScreen">
                      <span class="">开始时间：</span>
                      <el-date-picker
                        v-model="query.startDate"
                        type="datetime"
                        placeholder="选择开始时间"
                        value-format="yyyy-MM-dd HH:mm:ss">
                      </el-date-picker>
                    </div>

                    <div class="baseDataTabScreen">
                      <span class="">结束时间：</span>
                      <el-date-picker
                        v-model="query.endDate"
                        type="datetime"
                        placeholder="选择结束时间"
                        value-format="yyyy-MM-dd HH:mm:ss">
                      </el-date-picker>
                    </div>
                    <el-button type="primary" class="baseDataTabScreen" @click="queryBtnCJQ">查询</el-button>
                  </div>

                  <el-table style="width: 100%" border :data="CJQtableData">
                    <el-table-column property="airTemperature" label="空气温度"></el-table-column>
                    <el-table-column property="airHumidity" label="空气湿度"></el-table-column>
                    <el-table-column property="soilTemperature" label="土壤温度"></el-table-column>
                    <el-table-column property="soilMoisture" label="土壤湿度"></el-table-column>
                    <el-table-column property="illumination" label="光照"></el-table-column>
                    <el-table-column property="carbonDioxide" label="二氧化碳"></el-table-column>
                  </el-table>
                  <el-pagination
                    layout="prev, pager, next"
                    background
                    :total="total"
                    @current-change="currentChangeCJQ"
                    :page-size="pageSize"
                  ></el-pagination>
              </el-tab-pane>
              <el-tab-pane label="墒情站" name="second">
                  <div style="text-align: left">
                    <div class="baseDataTabScreen">
                      <span class="">开始时间：</span>
                      <el-date-picker
                        v-model="query.startDate"
                        type="datetime"
                        placeholder="选择开始时间"
                        value-format="yyyy-MM-dd HH:mm:ss">
                      </el-date-picker>
                    </div>

                    <div class="baseDataTabScreen">
                      <span class="">结束时间：</span>
                      <el-date-picker
                        v-model="query.endDate"
                        type="datetime"
                        placeholder="选择结束时间"
                        value-format="yyyy-MM-dd HH:mm:ss">
                      </el-date-picker>
                    </div>
                    <el-button type="primary" class="baseDataTabScreen" @click="queryBtnSQZ">查询</el-button>
                  </div>

                  <el-table style="width: 100%" border :data="SQZtableData">
                      <el-table-column property="soilTemperature" label="土温"></el-table-column>
                      <el-table-column property="soilMoisture" label="土湿"></el-table-column>
                      <el-table-column property="ph" label="PH值"></el-table-column>
                      <el-table-column property="ec" label="EC值"></el-table-column>
                  </el-table>
                  <el-pagination
                    layout="prev, pager, next"
                    background
                    :total="total"
                    @current-change="currentChangeSQZ"
                    :page-size="pageSize"
                  ></el-pagination>
              </el-tab-pane>
            <el-tab-pane label="气象站" name="third">
              <div style="text-align: left">
                <div class="baseDataTabScreen">
                  <span class="">开始时间：</span>
                  <el-date-picker
                    v-model="query.startDate"
                    type="datetime"
                    placeholder="选择开始时间"
                    value-format="yyyy-MM-dd HH:mm:ss">
                  </el-date-picker>
                </div>

                <div class="baseDataTabScreen">
                  <span class="">结束时间：</span>
                  <el-date-picker
                    v-model="query.endDate"
                    type="datetime"
                    placeholder="选择结束时间"
                    value-format="yyyy-MM-dd HH:mm:ss">
                  </el-date-picker>
                </div>

                <el-button type="primary" class="baseDataTabScreen" @click="queryBtnCJQ">查询</el-button>
              </div>
                <el-table style="width: 100%" border :data="QXZtableData">
                    <el-table-column property="airTemperature" label="温度"></el-table-column>
                    <el-table-column property="airHumidity" label="湿度"></el-table-column>
                    <el-table-column property="windSpeed" label="风速"></el-table-column>
                    <el-table-column property="windDirection" label="风向"></el-table-column>
                    <el-table-column property="pressure" label="气压"></el-table-column>
                    <el-table-column property="illumination" label="光照"></el-table-column>
                    <el-table-column property="soilTemperature" label="土温"></el-table-column>
                </el-table>
                <el-pagination
                  layout="prev, pager, next"
                  background
                  :total="total"
                  @current-change="currentChangeQXZ"
                  :page-size="pageSize"
                ></el-pagination>
            </el-tab-pane>

          </el-tabs>
      </div>
  </div>
</template>
<script>
  import {getIOTData} from "../../request/webService";
  export default {
    name: '',
    data () {
      return {
        activeName: 'first',
        total: 0,  // 总数
        currentPage: 1, // 页码
        pageSize: 10, // 每页显示数量
        // 采集器表格数据
        CJQtableData: [],
        // 墒情站表格数据
        SQZtableData: [],
        // 气象站表格数据
        QXZtableData: [],
        query:{
          startDate: "",
          endDate: ""
        }

      }
    },
    methods: {
      handleClick(tab, event) {
        if(tab.name === 'first'){
            this.query.startDate=""
            this.query.endDate=""
            this.getCollectorData()
        }else if(tab.name === 'second'){
            this.query.startDate=""
            this.query.endDate=""
            this.getSoilmoistureData()
        }else if(tab.name === 'third'){
            this.query.startDate=""
            this.query.endDate=""
            this.getWeatherData()
        }
      },
      //获取采集器数据
      async getCollectorData(){
        const obj = {
          currentPage: this.currentPage,
          pageSize: this.pageSize,
          type: 0,
          createTime: this.query.startDate,
          endTime: this.query.endDate
        }
        const res = await getIOTData(obj)
        if (res.data.code === 0) {
          this.total = res.data.data.total;
          this.CJQtableData = res.data.data.list
        }
      },

      //获取墒情站数据
      async getSoilmoistureData(){
        const obj = {
          currentPage: this.currentPage,
          pageSize: this.pageSize,
          type: 1,
          createTime: this.query.startDate,
          endTime: this.query.endDate
        }
        const res = await getIOTData(obj)
        if (res.data.code === 0) {
          this.total = res.data.data.total;
          this.SQZtableData = res.data.data.list
        }
      },
      //获取气象站数据
      async getWeatherData(){
        const obj = {
          currentPage: this.currentPage,
          pageSize: this.pageSize,
          type: 2,
          createTime: this.query.startDate,
          endTime: this.query.endDate
        }
        const res = await getIOTData(obj)
        if (res.data.code === 0) {
          this.total = res.data.data.total;
          this.QXZtableData = res.data.data.list
        }
      },
      queryBtnCJQ(){
        if(this.query.startDate > this.query.endDate){
           this.$message.error('开始时间不能大于结束时间');
        }
        this.getCollectorData()
      },
      queryBtnSQZ(){
        if(this.query.startDate > this.query.endDate){
          this.$message.error('开始时间不能大于结束时间');
        }
        this.getSoilmoistureData()
      },
      queryBtnQXZ(){
        if(this.query.startDate > this.query.endDate){
          this.$message.error('开始时间不能大于结束时间');
        }
        this.getWeatherData()
      },
      //采集器分页
      currentChangeCJQ(value) {
        this.currentPage = value
        this.getCollectorData()
      },
      //墒情站分页
      currentChangeSQZ(value) {
        this.currentPage = value
        this.getSoilmoistureData()
      },
      //气象站分页
      currentChangeQXZ(value) {
        this.currentPage = value
        this.getWeatherData()
      }
    },
    async mounted () {
      this.getCollectorData()
    },
  }
</script>
<style>
  .baseDataTabsZZXX>.el-tabs__header{
    width: 250px;
    margin-bottom: 0;
  }
  .baseDataTabsZZXX>.el-tabs__header .el-tabs__item.is-active{
    background-color: #58a79f;
    color: #fff;
  }
  .el-tabs__item:hover{
    color: #000;
  }
  .baseDataTabsZZXX td, .baseDataTabsZZXX th.is-leaf{
    text-align: center;
  }
  .baseDataTabScreen{
    display: inline-block;
  }

  .baseDataTabScreen .el-date-editor{
    margin: 20px 20px 20px 0;
  }
</style>
