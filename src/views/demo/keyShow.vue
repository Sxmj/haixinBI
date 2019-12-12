<template>
  <div class="tv_product">
    <el-row :gutter="20">
      <el-col :span="24">
        <el-card>
          <h3 class="chart_title">海信产品</h3>
          <div id="TVproduct_chartBarBox" class="chart-box"></div>
        </el-card>
      </el-col>
    </el-row>
    <el-row :gutter="20" class="ranking">
      <el-card>
        <h3 class="chart_title">品牌表现</h3>
        <!-- <el-col :span="8">
          <el-collapse-transition>
            <el-card v-show="show2">
              <div slot="header" class="clearfix">
                <span class="rank">1</span>
                <span class="rank_name">图像质量</span>
                <el-button
                  style="float: right; padding: 3px "
                  type="text"
                  @click="show2 = !show2"
                  icon="el-icon-close"
                ></el-button>
                <el-button
                  :class="[show1?'rotate_btn':'','down_btn']"
                  style="float: right; padding: 3px "
                  type="text"
                  @click="show1 = !show1"
                  icon="el-icon-arrow-up"
                ></el-button>
                <span style="float: right; padding: 3px 5px 3px 0 " class="color_17b3a3">指标关注度:25%</span>
              </div>
              
              <div
                class="transition"
                :style="{height:show1?35*3+35+'px':tableData1.length*35+35+'px'}"
              >
                <el-table :data="tableData1" style="width: 100%">
                  <el-table-column type="index" label="名次" width="50">
                    <template slot-scope="scope">
                      <p :style="{color:scope.row.name =='海信'?'#f8ac59':''}">{{ scope.$index+1 }}</p>
                    </template>
                  </el-table-column>
                  <el-table-column prop="name" label="品牌名称" width="90">
                    <template slot-scope="scope">
                      <p :style="{color:scope.row.name =='海信'?'#f8ac59':''}">{{ scope.row.name }}</p>
                    </template>
                  </el-table-column>
                  <el-table-column prop="value" label="表现值" width="90">
                    <template slot-scope="scope">
                      <div
                        class="number"
                        :style="{width:(scope.row.value-8)/10*500+'px',background:scope.row.name =='海信'?'#f8ac59':''}"
                      >{{scope.row.value}}</div>
                    </template>
                  </el-table-column>
                  <el-table-column prop="year" label="同比" width="80">
                    <template slot-scope="scope">
                      <div :style="{color:scope.row.name =='海信'?'#f8ac59':''}">
                        <block v-if="scope.row.year == 0">
                          <span style="display:inline-block;width:25px;text-align:right;">-1.2</span>
                          <span class="icon iconfont color_d30606">&#xe75e;</span>
                        </block>
                        <block v-if="scope.row.year ==1 ">
                          <span style="display:inline-block;width:25px;text-align:right;">2.2</span>
                          <span class="icon iconfont color_17b3a3">&#xeb47;</span>
                        </block>
                      </div>
                    </template>
                  </el-table-column>
                </el-table>
              </div>
            
            </el-card>
          </el-collapse-transition>
        </el-col>
        <el-col :span="8">
          <el-collapse-transition>
            <el-card v-show="show3">
              <div slot="header" class="clearfix">
                <span class="rank">2</span>
                <span class="rank_name">外观结构</span>
                <el-button
                  style="float: right; padding: 3px "
                  type="text"
                  @click="show3 = !show3"
                  icon="el-icon-close"
                ></el-button>
                <el-button
                  :class="[show4?'rotate_btn':'','down_btn']"
                  style="float: right; padding: 3px "
                  type="text"
                  @click="show4 = !show4"
                  icon="el-icon-arrow-up"
                ></el-button>
                <span style="float: right; padding: 3px 5px 3px 0 " class="color_17b3a3">指标关注度:14%</span>
              </div>

              <div
                class="transition"
                :style="{height:show4?35*3+35+'px':tableData2.length*35+35+'px'}"
              >
                <el-table :data="tableData2" style="width: 100%">
                  <el-table-column type="index" label="名次" width="50">
                    <template slot-scope="scope">
                      <p :style="{color:scope.row.name =='海信'?'#f8ac59':''}">{{ scope.$index+1 }}</p>
                    </template>
                  </el-table-column>
                  <el-table-column prop="name" label="品牌名称" width="90">
                    <template slot-scope="scope">
                      <p :style="{color:scope.row.name =='海信'?'#f8ac59':''}">{{ scope.row.name }}</p>
                    </template>
                  </el-table-column>
                  <el-table-column prop="value" label="表现值" width="90">
                    <template slot-scope="scope">
                      <div
                        class="number"
                        :style="{width:(scope.row.value-8)/10*500+'px',background:scope.row.name =='海信'?'#f8ac59':''}"
                      >{{scope.row.value}}</div>
                    </template>
                  </el-table-column>
                  <el-table-column prop="year" label="同比" width="80">
                    <template slot-scope="scope">
                      <div :style="{color:scope.row.name =='海信'?'#f8ac59':''}">
                        <block v-if="scope.row.year == 0">
                          <span style="display:inline-block;width:25px;text-align:right;">-1.2</span>
                          <span class="icon iconfont color_d30606">&#xe75e;</span>
                        </block>
                        <block v-if="scope.row.year ==1 ">
                          <span style="display:inline-block;width:25px;text-align:right;">2.2</span>
                          <span class="icon iconfont color_17b3a3">&#xeb47;</span>
                        </block>
                      </div>
                    </template>
                  </el-table-column>
                </el-table>
              </div>
            </el-card>
          </el-collapse-transition>
        </el-col>-->
        <span v-for="(item,index) in data_lists" :key="index">
          <el-col :span="8" style="margin-bottom:5px">
            <el-collapse-transition>
              <el-card v-show="item.show1">
                <div slot="header" class="clearfix">
                  <span class="rank">{{index+1}}</span>
                  <span class="rank_name">{{item.name}}</span>
                  <el-button
                    style="float: right; padding: 3px "
                    type="text"
                    @click="item.show1 = !item.show1"
                    icon="el-icon-close"
                  ></el-button>
                  <!-- <el-button
                    :class="[item.show2?'rotate_btn':'','down_btn']"
                    style="float: right; padding: 3px "
                    type="text"
                    @click="item.show2 = !item.show2"
                    icon="el-icon-arrow-up"
                  ></el-button> -->
                  <span
                    style="float: right; padding: 3px 5px 3px 0 "
                    class="color_17b3a3"
                  >指标关注度:{{item.attention}}</span>
                </div>
                <!-- :style="{height:item.show2?35*3+35+'px':item.tableData.length*35+35+'px'}" -->
                <div
                  class="transition"
                >
                  <el-table :data="item.tableData" style="width: 100%">
                    <el-table-column type="index" label="名次" width="50">
                      <template slot-scope="scope">
                        <p :style="{color:scope.row.name =='海信'?'#f8ac59':''}">{{ scope.$index+1 }}</p>
                      </template>
                    </el-table-column>
                    <el-table-column prop="name" label="品牌名称" width="90">
                      <template slot-scope="scope">
                        <p :style="{color:scope.row.name =='海信'?'#f8ac59':''}">{{ scope.row.name }}</p>
                      </template>
                    </el-table-column>
                    <el-table-column prop="value" label="表现值" width="90">
                      <template slot-scope="scope">
                        <div
                          class="number"
                          :style="{width:(scope.row.value-6.8)/10*500+'px',background:scope.row.name =='海信'?'#f8ac59':''}"
                        >{{scope.row.value}}</div>
                      </template>
                    </el-table-column>
                    <el-table-column prop="year" label="同比" width="80">
                      <template slot-scope="scope">
                        <div :style="{color:scope.row.name =='海信'?'#f8ac59':''}">
                          <span v-if="scope.row.year == 0">
                            <span style="display:inline-block;width:25px;text-align:right;">-1.2</span>
                            <span class="icon iconfont color_d30606">&#xe75e;</span>
                          </span>
                          <span v-if="scope.row.year ==1 ">
                            <span style="display:inline-block;width:25px;text-align:right;">2.2</span>
                            <span class="icon iconfont color_17b3a3">&#xeb47;</span>
                          </span>
                        </div>
                      </template>
                    </el-table-column>
                  </el-table>
                </div>
              </el-card>
            </el-collapse-transition>
          </el-col>
        </span>
      </el-card>
    </el-row>
  </div>
</template>

<script>
//注释了点击是否折叠的按钮，和高度的改变折叠效果
import {
  haixin_representat,
  haixin_attention,
  tableData1,
  tableData2,
  tv_productData
} from "../../utils/data";
import echarts from "echarts";
import {
  ranking,
  ranking_index,
  getData_x,
  getData2
} from "../../utils/validate";
export default {
  name: "television_product",
  data() {
    return {
      chartBar: null,

      // tableData1Index: "",
      // tableData1: tableData1,
      // tableData2: tableData2,
      haixin_representat: haixin_representat,//h海信表现数据
      haixinData_x: [],
      haixin_attention: haixin_attention, //指标关注度

      data_lists: tv_productData,
      percentArray:[60,70,30,80,90,50,65],//不推荐%（0-8分）
    };
  },
  created() {
    var that = this;
    // data_lists就是内容tv_productData，使用for进行循环就是获取到每一个tableData(就是每一个列表)
    for (var a = 0; a < this.data_lists.length; a++) {
      //that.data_lists[a].tableData相当于每一项指标数据列表的内容也
      // 就是类似于tableData1，tableData2，相当于对tableData1进行了排序处理
      that.data_lists[a].tableData = ranking(that.data_lists[a].tableData);
      // 这里需要拿到所有的品类的数据进行比较，但是只展示海信的相关的内容
      //取出了海信相关指标的排名，是一个number
      that.data_lists[a].tableDataIndex = ranking_index(
        that.data_lists[a].tableData
      );
    }

    // this.tableData1 = ranking(that.tableData1);
    // this.tableData1Index = ranking_index(that.tableData1);
    // this.tableData2 = ranking(that.tableData2);
    // this.tableData2Index = ranking_index(that.tableData2);



    //右侧的指标关注度，柱状图按照指标关注度进行排序，ranking是排序的方法
    this.haixin_attention = ranking(that.haixin_attention);

    // 取出两个数组公共有的部分,返回的是第二个数组的value
    this.haixin_representat = getData2(
      haixin_attention,
      that.haixin_representat
    );
    console.log(this.haixin_representat,this.haixin_attention)
    // data_lists就是内容tv_productData
    this.haixinData_x = getData_x(that.haixin_representat, [
      "\n" + that.data_lists[0].tableDataIndex+"\n" + that.percentArray[0]+"%",
      "\n" + that.data_lists[1].tableDataIndex+"\n" + that.percentArray[1]+"%",
      "\n" + that.data_lists[2].tableDataIndex+"\n" + that.percentArray[2]+"%",
      "\n" + that.data_lists[3].tableDataIndex+"\n" + that.percentArray[3]+"%",
      "\n" + that.data_lists[4].tableDataIndex+"\n" + that.percentArray[4]+"%",
      "\n" + that.data_lists[5].tableDataIndex+"\n" + that.percentArray[5]+"%",
      "\n" + that.data_lists[6].tableDataIndex+"\n" + that.percentArray[6]+"%"
    ]);
    console.log(this.haixinData_x)
  },
  mounted() {
    this.initChartBar();
    this.get()
  },
  activated() {
    // 由于给echart添加了resize事件, 在组件激活时需要重新resize绘画一次, 否则出现空白bug
    if (this.chartBar) {
      this.chartBar.resize();
    }
  },

  methods: {
    // 柱状图
    get(){//自己定义的一个方法
      console.log("fjdsfid")
    },
    initChartBar() {
      console.log(this)
      var that = this;
      var option = {
        color: ["#a3e1d4", "#17b3a3"],
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          left: "10%",
          right: "4%",
          bottom: "8%",
          containLabel: true
        },
        legend: {
          data: ["海信表现", "指标关注度"]
        },
        xAxis: [
          {
            type: "category",
            name: "表现值品牌对比排位"+"\n" +"不推荐%(0-8分)" ,
            nameLocation: "start",
            nameTextStyle: {
              // fontWeight: "bold",
              fontSize: 12,
              verticalAlign: "top",
              lineHeight: 18,
              color: "#000",
              paddingTop: 15,
              // backgroundColor: "#a3e1d4",
              borderRadius: 10,
              align: "center",
              padding: [21, 0, 0, 0]
            },
            nameGap: 40,

            data: that.haixinData_x,
            // data: [
            //   {
            //     value: "图像质量\n" + that.tableData1Index,
            //     textStyle: {
            //       lineHeight: 15
            //     }
            //   },
            // ],
            axisTick: {
              show: false
            }
          },
          {
            // type: "category",
            // name: "不推荐%(0-8分)",
            // nameLocation: "start",
            // nameTextStyle: {
            //   // fontWeight: "bold",
            //   fontSize: 12,
            //   verticalAlign: "top",
            //   lineHeight: 18,
            //   color: "#000",
            //   paddingTop: 15,
            //   // backgroundColor: "#a3e1d4",
            //   borderRadius: 10,
            //   align: "center",
            //   padding: [21, 0, 0, 0]
            // },
            // offset:-300,
            // show:false,
          }

        ],
        yAxis: [
          {
            type: "value",
            min: 8.2,
            // max: 10,
            // interval: 0.2,
            name: "海信表现",
            axisTick: {
              show: false
            }
          },
          {
            axisTick: {
              show: false
            },
            type: "value",
            name: "指标关注度(%)",
            min: 0,
            max: 30,
            splitLine: { show: false },
            position: "right",
            axisLine: {
              lineStyle: {
                // color: "#6dbccf"
              }
            }
            // axisLabel: {
            //   formatter: "{value}"
            // }
          }
        ],
        series: [
          {
            name: "海信表现",
            type: "bar",
            barWidth: "20%",
            data: that.haixin_representat,
            label: {
              normal: {
                show: true,
                position: "top",
                color: "#17b3a3",
                fontSize: "16"
              }
            }
          }, 
          {
            name: "指标关注度",
            type: "line",
            smooth: true,
            yAxisIndex: 1,
            data: that.haixin_attention //[25, 14, 10, 10, 3, 10, 7]
          }
        ]
      };
      this.chartBar = echarts.init(
        document.getElementById("TVproduct_chartBarBox")
      );
      this.chartBar.setOption(option);
      window.addEventListener("resize", () => {
        this.chartBar.resize();
      });
    }
  }
};
</script>

<style lang="scss">
.tv_product {
  > .el-alert {
    margin-bottom: 10px;
  }
  > .el-row {
    // margin-top: 10px;
    margin-bottom: 20px;
    .el-col {
      padding-top: 1px;
      // padding-bottom: 10px;
    }
  }
  .chart-box {
    min-height: 400px;
  }
  .el-card__body {
    padding: 0 20px;
  }

  .ranking {
    .el-card {
      padding-bottom: 15px;
    }
    .rank {
      display: inline-block;
      text-align: center;
      padding: 3px 8px;
      // width: 20px;
      // height: 20px;
      // line-height: 20px;
      background: #17b3a3;
      color: #fff;
      border-radius: 5px;
    }
    .rank_name {
      margin-right: 10px;
    }
    .number {
      box-sizing: border-box;
      padding-left: 5px;
      // text-align: center;
      font-size: 12px;
      color: #fff;
      line-height: 15px;
      height: 15px;
      background: #17b3a3;
    }
    .el-table--medium td,
    .el-table--medium th {
      padding: 5px 0;
    }
    .el-table .cell {
      p {
        margin: 0;
      }
    }
    .down_btn {
      transition: 1s;
    }
    .rotate_btn {
      transform: rotate(180deg);
      transition: 1s;
    }
  }
}
</style>
