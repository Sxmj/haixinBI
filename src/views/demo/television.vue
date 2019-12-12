<template>
  <div class="television">
    <!-- <el-alert
      title="提示："
      type="warning"
      :closable="false">
      <div slot-scope="description">
        <p class="el-alert__description">1. 此Demo只提供ECharts官方使用文档，入门部署和体验功能。具体使用请参考：http://echarts.baidu.com/index.html</p>
      </div>
    </el-alert>-->

    <el-row :gutter="20">
      <!-- <el-col :span="6">
        <el-card>
          <el-row type="flex" justify="space-between" align="middle">
            <span class="span_h5 color_17b3a3">海信电视整体</span>
            <span class="span_box">2018</span>
          </el-row>
          <el-row type="flex" justify="space-between">
            <el-col class="span_h4">
              <div>50</div>
              <div>NPS/位次</div>
            </el-col>
            <el-col class="text_align_right">
              <div class="year_on_year">
                <span>2%</span>
                <span class="icon iconfont color_17b3a3">&#xeb47;</span>
              </div>
              <div>同比</div>
            </el-col>
          </el-row>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card class="hand">
          <div @click="goProduct">
            <el-row type="flex" justify="space-between" align="middle">
              <span class="span_h5 color_17b3a3">海信电视产品</span>
              <span class="span_box">2018</span>
            </el-row>
            <el-row type="flex" justify="space-between">
              <el-col class="span_h4">
                <div>50</div>
                <div>NPS/位次</div>
              </el-col>
              <el-col class="text_align_right">
                <div class="year_on_year">
                  <span>2%</span>
                  <span class="icon iconfont color_17b3a3">&#xeb47;</span>
                </div>
                <div>同比</div>
              </el-col>
            </el-row>
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card>
          <el-row type="flex" justify="space-between" align="middle">
            <span class="span_h5 color_17b3a3">海信电视服务</span>
            <span class="span_box">2018</span>
          </el-row>
          <el-row type="flex" justify="space-between">
            <el-col class="span_h4">
              <div>50</div>
              <div>NPS/位次</div>
            </el-col>
            <el-col class="text_align_right">
              <div class="year_on_year">
                <span>20%</span>
                <span class="icon iconfont color_17b3a3">&#xeb47;</span>
              </div>
              <div>同比</div>
            </el-col>
          </el-row>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card>
          <el-row type="flex" justify="space-between" align="middle">
            <span class="span_h5 color_17b3a3">海信电视销售</span>
            <span class="span_box">2018</span>
          </el-row>
          <el-row type="flex" justify="space-between">
            <el-col class="span_h4">
              <div>50</div>
              <div>NPS/位次</div>
            </el-col>
            <el-col class="text_align_right">
              <div class="year_on_year">
                <span>38%</span>
                <span class="icon iconfont color_d30606">&#xe75e;</span>
              </div>
              <div>同比</div>
            </el-col>
          </el-row>
        </el-card>
      </el-col>-->
      <el-col :span="24">
        <el-card class="nps_card">
          <div class="chart_title">
            <span>
              总体NPS(计算权重：整体NPS=
              产品*
              <span class="color_17b3a3">65%</span> +
              销售*
              <span class="color_17b3a3">20%</span> +
              服务*
              <span class="color_17b3a3">15%</span>)
            </span>
            <!-- <span>
              2019年NPS
              <span class="color_17b3a3">50%</span>，同比
              <span class="color_17b3a3">2</span>
              <span class="icon iconfont color_d30606">&#xe75e;</span>
            </span>-->
          </div>
          <div class="nps_box">
            <div id="TV_chartBarBox" class="chart-box tv_box"></div>
            <div class="data_table">
              <h3 style="color:black"> 阅读说明：</h3>
              <p>【左图】</p>
              <p>1、图中展示每年对比上年的NPS同比变化（同比=今年NPS值-上一年NPS值）</p>
              <p>2、左上方为电视品类2019年的NPS权重计算公式</p>
              <p>【下图数据】</p>
              <p>展现电视品类下的产品模块、销售模块、服务模块与竞品的对比情况</p>
              <p>操作说明：点击下方三个模块任意区域，可跳转至查看所选择的模块具体情况</p>
              <!-- <table cellspacing="0">
                <tr>
                  <th colspan="2"></th>
                  <th>NPS</th>
                  <th>同比(较17年)</th>
                </tr>
                <tr>
                  <td rowspan="3" style="padding:15px 10px 15px 0;border-bottom:1px solid #5dcabf">
                    <div class="price td_box">价格段</div>
                  </td>
                  <td>P≥5K元</td>
                  <td>66.9</td>
                  <td>
                    <img src="../../../static/img/NPS_ic_down.png" alt />
                    -1.4
                  </td>
                </tr>
                <tr>
                  <td>3K元≤P&lt;5K元</td>
                  <td>60.1</td>
                  <td>
                    <img src="../../../static/img/NPS_ic_up.png" alt />
                    0.1
                  </td>
                </tr>
                <tr>
                  <td>P&lt;3K元</td>
                  <td>66.0</td>
                  <td>
                    <img src="../../../static/img/NPS_ic_up.png" alt />13.5
                  </td>
                </tr>
                <tr>
                  <td rowspan="3" style="padding:15px 10px 15px 0;border-bottom:1px solid #5dcabf">
                    <div class="size td_box">尺寸</div>
                  </td>
                  <td>60+寸</td>
                  <td>64.3</td>
                  <td>
                    <img src="../../../static/img/NPS_ic_up.png" alt />0.7
                  </td>
                </tr>
                <tr>
                  <td>55寸</td>
                  <td>61.6</td>
                  <td>
                    <img src="../../../static/img/NPS_ic_down.png" alt />-6.1
                  </td>
                </tr>
                <tr>
                  <td>55寸内</td>
                  <td>64.8</td>
                  <td>
                    <img src="../../../static/img/NPS_ic_up.png" alt />7.8
                  </td>
                </tr>
                <tr>
                  <td rowspan="2" style="padding:15px 10px 15px 0;border-bottom:2px solid #5dcabf">
                    <div class="buy td_box">购买渠道</div>
                  </td>
                  <td>线上</td>
                  <td>61.7</td>
                  <td>
                    <img src="../../../static/img/NPS_ic_up.png" alt />5.1
                  </td>
                </tr>
                <tr>
                  <td>线下</td>
                  <td>64.2</td>
                  <td>
                    <img src="../../../static/img/NPS_ic_up.png" alt />1.3
                  </td>
                </tr>
              </table>-->
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card class="hand">
          <div @click="goProduct">
            <el-row type="flex" justify="space-between" align="middle" style="padding:0 0 20px">
              <span class="span_h5 color_17b3a3">海信电视产品</span>
              <span class="span_box">2019年</span>
            </el-row>
            <el-table :data="tableData1" style="width: 100%">
              <el-table-column prop="ranking" label="排名" width="80">
                <!-- 这里不是很理解 -->
                <template slot-scope="scope">
                  <p :style="{color:scope.row.name =='海信'?'#f8ac59':''}">{{ scope.$index+1 }}</p>
                </template>
              </el-table-column>
              <el-table-column prop="name" label="品牌" width="100">
                <template slot-scope="scope">
                  <p :style="{color:scope.row.name =='海信'?'#f8ac59':''}">{{ scope.row.name }}</p>
                </template>
              </el-table-column>
              <el-table-column prop="value" label="NPS" width="100">
                <template slot-scope="scope">
                  <p :style="{color:scope.row.name =='海信'?'#f8ac59':''}">{{ scope.row.value }}</p>
                </template>
              </el-table-column>
              <el-table-column prop="value" label="同比" width="100">
                <template slot-scope="scope">
                  <p :style="{color:scope.row.name =='海信'?'#f8ac59':''}">{{ scope.row.tongbi }}</p>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card class="hand">
          <div @click="goSell">
            <el-row type="flex" justify="space-between" align="middle" style="padding:0 0 20px">
              <span class="span_h5 color_17b3a3">海信电视销售</span>
              <span class="span_box">2019年</span>
            </el-row>
            <el-table :data="tableData2" style="width: 100%">
              <el-table-column prop="ranking" label="排名" width="80">
                <template slot-scope="scope">
                  <p :style="{color:scope.row.name =='海信'?'#f8ac59':''}">{{ scope.$index+1 }}</p>
                </template>
              </el-table-column>
              <el-table-column prop="name" label="品牌" width="100">
                <template slot-scope="scope">
                  <p :style="{color:scope.row.name =='海信'?'#f8ac59':''}">{{ scope.row.name }}</p>
                </template>
              </el-table-column>
              <el-table-column prop="value" label="NPS" width="100">
                <template slot-scope="scope">
                  <p :style="{color:scope.row.name =='海信'?'#f8ac59':''}">{{ scope.row.value }}</p>
                </template>
              </el-table-column>
              <el-table-column prop="value" label="同比" width="100">
                <template slot-scope="scope">
                  <p :style="{color:scope.row.name =='海信'?'#f8ac59':''}">{{ scope.row.tongbi }}</p>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card class="hand">
          <div @click="goService">
            <el-row type="flex" justify="space-between" align="middle" style="padding:0 0 20px">
              <span class="span_h5 color_17b3a3">海信电视服务</span>
              <span class="span_box">2019年</span>
            </el-row>
            <el-table :data="tableData3" style="width: 100%">
              <el-table-column prop="ranking" label="排名" width="80">
                <template slot-scope="scope">
                  <p :style="{color:scope.row.name =='海信'?'#f8ac59':''}">{{ scope.$index+1 }}</p>
                </template>
              </el-table-column>
              <el-table-column prop="name" label="品牌" width="100">
                <template slot-scope="scope">
                  <p :style="{color:scope.row.name =='海信'?'#f8ac59':''}">{{ scope.row.name }}</p>
                </template>
              </el-table-column>
              <el-table-column prop="value" label="NPS" width="100">
                <template slot-scope="scope">
                  <p :style="{color:scope.row.name =='海信'?'#f8ac59':''}">{{ scope.row.value }}</p>
                </template>
              </el-table-column>
              <el-table-column prop="value" label="同比" width="100">
                <template slot-scope="scope">
                  <p :style="{color:scope.row.name =='海信'?'#f8ac59':''}">{{ scope.row.tongbi }}</p>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </el-card>
      </el-col>
      <el-col :span="24">
        <!-- <el-card>
          <el-row style="padding:5px 0">
            <span class="span_h5 color_17b3a3">数据释义说明：</span>
            <span>说明内容</span>
          </el-row>
        </el-card>-->
      </el-col>
    </el-row>
  </div>
</template>

<script>
import echarts from "echarts";
import { ranking } from "../../utils/validate";
export default {
  data() {
    return {
      chartBar: null,
      tableData2: [
        {
          ranking: "1",
          name: "索尼",
          value: "58.2",
          tongbi:"-0.3"
        },
        {
          ranking: "2",
          name: "三星",
          value: "57.8",
          tongbi:"-0.9"
        },
        {
          ranking: "3",
          name: "海信",
          value: "60.4",
          tongbi:"-1.5"
        },
        {
          ranking: "4",
          name: "夏普",
          value: "56.1",
          tongbi:"-1.2"
        },
        {
          ranking: "5",
          name: "小米",
          value: "59.6",
          tongbi:"2.0"
        },
        {
          ranking: "6",
          name: "TCL",
          value: "53.9",
          tongbi:"-2.6"
        },

        {
          ranking: "7",
          name: "创维",
          value: "59.2",
          tongbi:"-2.5"
        },

        {
          ranking: "8",
          name: "海尔",
          value: "53.8",
          tongbi:"-0.4"
        }
      ],
      tableData1: [
        {
          ranking: "1",
          name: "索尼",
          value: "69.6",
          tongbi:"-1.0"
        },
        {
          ranking: "2",
          name: "三星",
          value: "68.4",
          tongbi:"1.0"
        },
        {
          ranking: "3",
          name: "海信",
          value: "64.1",
          tongbi:"0.7"
        },
        {
          ranking: "4",
          name: "夏普",
          value: "59.1",
          tongbi:"-0.5"
        },
        {
          ranking: "5",
          name: "小米",
          value: "58.7",
          tongbi:"2.1"
        },
        {
          ranking: "6",
          name: "TCL",
          value: "57.6",
          tongbi:"1.6"
        },

        {
          ranking: "7",
          name: "创维",
          value: "57.0",
          tongbi:"1.5"
        },

        {
          ranking: "8",
          name: "海尔",
          value: "53.8",
          tongbi:"0.8"
        }
      ],
      tableData3: [
        {
          ranking: "1",
          name: "索尼",
          value: "55.9",
          tongbi:"0.3"
        },
        {
          ranking: "2",
          name: "三星",
          value: "54.8",
          tongbi:"0.4"
        },
        {
          ranking: "3",
          name: "海信",
          value: "59.2",
          tongbi:"0.5"
        },
        {
          ranking: "4",
          name: "夏普",
          value: "52.2",
          tongbi:"-0.2"
        },
        {
          ranking: "5",
          name: "小米",
          value: "55.0",
          tongbi:"0.6"
        },
        {
          ranking: "6",
          name: "TCL",
          value: "55.8",
          tongbi:"0.9"
        },

        {
          ranking: "7",
          name: "创维",
          value: "53.0",
          tongbi:"0.1"
        },

        {
          ranking: "8",
          name: "海尔",
          value: "58.1",
          tongbi:"-0.4"
        }
      ],
    };
  },
  created() {
    var that = this;
    this.tableData1 = ranking(that.tableData1);
    console.log(this.tableData1);
    this.tableData2 = ranking(that.tableData2);
    this.tableData3 = ranking(that.tableData3);
  },
  mounted() {
    this.initChartBar();
  },
  activated() {
    // 由于给echart添加了resize事件, 在组件激活时需要重新resize绘画一次, 否则出现空白bug
    if (this.chartBar) {
      this.chartBar.resize();
    }
  },
  methods: {
    goProduct() {
      console.log(this.$store, this.$store.dispatch);
      this.$store.commit("common/updateMenuActiveName", "television_product");
      this.$router.push({name:"keyShowLast"});
    },
    goSell(){
      this.$router.push({name:"sellnps"})
    },
    goService(){
      this.$router.push({name:"servicenps"})
    },
    // 柱状图
    initChartBar() {
      var arr_2015 = ["0.2 ↑", "3.1↑",  "0.5↑"];
      var option = {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        xAxis: {
          type: "category",
          // boundaryGap: false,
          data: ["2017", "2018", "2019"],
          axisTick: {
            show: false
          }
        },
        yAxis: {
          type: "value",
          min: 50,
          max:70,
          axisTick: {
            show: false
          }
        },
        series: [
          {
            // type: "bar",
            type: "pictorialBar",
            symbol:
              "path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z",
            itemStyle: {
              color: {
                type: "linear",
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: "#a3e1d4" // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: "#17b3a3" // 100% 处的颜色
                  }
                ],
                global: false // 缺省为 false
              }
            },
            data: [59.3,62.4,62.6],
            // itemStyle: {
            //   normal: {
            //     color: ["#17b3a3", "#333", "#999"]
            //   }
            // },
            label: {
              normal: {
                show: true,
                position: "top",
                formatter: function(item) {
                  return "同比：" + arr_2015[item.dataIndex];
                },
                color: "#000",
                fontSize: "16"
              }
            },
            color: "#17b3a3"
          }
        ]
      };
      this.chartBar = echarts.init(document.getElementById("TV_chartBarBox"));
      this.chartBar.setOption(option);
      window.addEventListener("resize", () => {
        this.chartBar.resize();
      });
    }
  }
};
</script>

<style lang="scss" scope="scoped">
.television {
  > .el-alert {
    margin-bottom: 10px;
  }
  > .el-row {
    margin-top: -10px;
    margin-bottom: -10px;
    .el-col {
      padding-top: 10px;
      padding-bottom: 10px;
    }
  }
  .hand {
    cursor: pointer;
  }

  .span_h4 {
    font-size: 20px;
    & div:nth-child(2) {
      font-size: 12px;
      color: #999;
    }
  }
  .span_h5 {
    display: inline-block;
    font-size: 15px;
    font-weight: bold;
  }
  .span_box {
    display: inline-block;
    width: 60px;
    height: 24px;
    line-height: 24px;
    background: #17b3a3;
    color: #fff;
    border-radius: 5px;
    text-align: center;
  }
  .chart_title {
    margin-bottom: -20px;
    padding-top: 20px;
    font-size: 16px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .chart-box.tv_box {
    width: 60%;
    min-height: 400px;
    float: left;
  }
  .nps_card {
    position: relative;
  }
  .data_table {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    overflow-y: auto;
    float: right;
    width: 40%;
    padding: 20px 30px 10px;
    // background: #17b3a3;
    border-radius: 5px;
    color: #000;
    h3 {
      color: #fff;
    }

    table {
      margin: 0 auto;
      text-align: center;
      th {
        padding: 8px;
        border-bottom: 2px solid #5dcabf;
      }
      td {
        border-bottom: 1px dashed #5dcabf;
        padding: 5px 8px;
        &:nth-child(4) {
          text-align: left;
          padding-left: 20px;
        }
        img {
          width: 10px;
          margin-right: 5px;
        }
        .td_box {
          width: 32px;
          height: 76px;
          text-align: center;
          padding: 10px;
          box-sizing: border-box;
          line-height: 16px;
          color: #fff;
          border-radius: 8px;
          display: flex;
          justify-content: center;
          align-items: center;
          &.price {
            background: #ff8a10;
            // background-image: linear-gradient(to bottom, #ffc412, #ff8a10);
          }
          &.size {
            background: #11d59c;
            // background-image: linear-gradient(to bottom, #24f5b1, #11d59c);
          }
          &.buy {
            background: #969bf2;
            // background-image: linear-gradient(to bottom, #76c0fa, #969bf2);
          }
        }
      }
      tr:not(:nth-child(3n + 2)) td {
        &:nth-child(3) {
          text-align: left;
          padding-left: 20px;
        }
      }
      tr:nth-child(2) td {
        margin-top: 10px;
      }
      tr:nth-child(3n + 1) td {
        border-bottom: 1px solid #5dcabf;
      }
      tr:nth-child(9) td {
        border-bottom: 2px solid #5dcabf;
      }
    }
  }
  .text_align_right {
    text-align: right;
    & div:nth-child(2) {
      color: #999;
      font-size: 12px;
      margin-top: 5px;
    }
  }
  .el-table--medium td,
  .el-table--medium th {
    padding: 0;
  }
  .el-table .cell {
    p {
      margin: 5px 0;
    }
  }
}
</style>
