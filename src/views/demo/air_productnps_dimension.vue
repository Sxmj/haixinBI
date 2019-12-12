<template>
  <div class="dimension">
    <el-row :gutter="20">
      <el-col :span="24">
        <el-card class="box-card">
          <el-col :span="8">
            <!-- <span style="margin-right:10px;font-weight:700;font-size:16px">请选择年份:</span> -->
            <!-- <el-select v-model="value1" placeholder="请选择年份:">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>-->
          </el-col>
          <!-- <el-col :span="8">
            <span style="margin-right:10px;font-weight:700;font-size:16px">请选择产品:</span>
            <el-select v-model="value2" placeholder="请选择产品:">
              <el-option
                v-for="item in productOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-col>-->

          <el-col :span="24">
            <el-tabs
              v-model="activeName"
              @tab-click="handleClick"
              type="card"
              style="margin-top:40px"
            >
              <el-tab-pane label="价位" name="price"></el-tab-pane>
              <el-tab-pane label="渠道" name="ways"></el-tab-pane>
              <el-tab-pane label="类型" name="size"></el-tab-pane>
              <el-tab-pane label="容量" name="what"></el-tab-pane>
            </el-tabs>
          </el-col>
          <!-- <el-col :span="24">
            <h3>{{title}}</h3>
          </el-col>-->
          <el-col :span="24">
            <!-- <el-table
              :data="tableData1"
              border
              :header-cell-class-name="rowClass"
              :cell-class-name="changeCellStyle"
            >
              <el-table-column prop="scope" label="P≥5K" align="center"></el-table-column>
              <el-table-column prop="wholenps" label="整体NPS" align="center"></el-table-column>
              <el-table-column prop="sony" label="索尼" align="center"></el-table-column>
              <el-table-column prop="sanxing" label="三星" align="center"></el-table-column>
              <el-table-column prop="haixin" label="海信" align="center"></el-table-column>
              <el-table-column prop="xiapu" label="夏普" align="center"></el-table-column>
              <el-table-column prop="xiaomi" label="小米" align="center"></el-table-column>
              <el-table-column prop="tcl" label="TCL" align="center"></el-table-column>
              <el-table-column prop="haier" label="海尔" align="center"></el-table-column>
              <el-table-column prop="chuangwei" label="创维" align="center"></el-table-column>
            </el-table>
            <el-table
              :data="tableData2"
              border
              :header-cell-class-name="rowClass"
              :cell-class-name="changeCellStyle"
            >
              <el-table-column prop="scope" label="3K≤P<5K" align="center"></el-table-column>
              <el-table-column prop="wholenps" label="整体NPS" align="center"></el-table-column>
              <el-table-column prop="sony" label="三星" align="center"></el-table-column>
              <el-table-column prop="sanxing" label="索尼" align="center"></el-table-column>
              <el-table-column prop="haixin" label="小米" align="center"></el-table-column>
              <el-table-column prop="xiapu" label="海信" align="center"></el-table-column>
              <el-table-column prop="xiaomi" label="创维" align="center"></el-table-column>
              <el-table-column prop="tcl" label="海尔" align="center"></el-table-column>
              <el-table-column prop="haier" label="夏普" align="center"></el-table-column>
              <el-table-column prop="chuangwei" label="TCL" align="center"></el-table-column>
            </el-table>
            <el-table
              :data="tableData3"
              border
              :header-cell-class-name="rowClass"
              :cell-class-name="changeCellStyle"
            >
              <el-table-column prop="scope" label="P<3K" align="center"></el-table-column>
              <el-table-column prop="wholenps" label="整体NPS" align="center"></el-table-column>
              <el-table-column prop="sony" label="索尼" align="center"></el-table-column>
              <el-table-column prop="sanxing" label="海信" align="center"></el-table-column>
              <el-table-column prop="haixin" label="夏普" align="center"></el-table-column>
              <el-table-column prop="xiapu" label="TCL" align="center"></el-table-column>
              <el-table-column prop="xiaomi" label="创维" align="center"></el-table-column>
              <el-table-column prop="tcl" label="小米" align="center"></el-table-column>
              <el-table-column prop="haier" label="海尔" align="center"></el-table-column>
              <el-table-column prop="chuangwei" label="三星" align="center"></el-table-column>
            </el-table>-->
            <el-card style="margin-top:20px">
              <!-- <el-col>
                
              <!-- </el-col>-->
              <h2>{{title}}</h2>
              <el-row>
                <el-col :span="6">
                  <div class="left">
                    <el-col :span="12">
                      <h3 class="judge">{{titlep1}}</h3>
                    </el-col>
                    <el-col :span="12">
                      <p style="height: 100px;line-height: 186px;text-align: center;font-weight: 900;font-size:16px">行业NPS</p>
                      <p class="data">{{titletop}}</p>
                      <!-- <p
                        class="percent"
                        style="text-align:center;color:red;font-size:18px;font-weight:700"
                      >+1%</p>-->
                    </el-col>
                    <!-- <el-col :span="7">
                      <p style="color:#DCDCDC;height:150px;line-height:433px">同比变化</p>
                    </el-col>-->
                  </div>
                </el-col>
                <el-col :span="14">
                  <div id="priceChart" style="width: 100%;height:300px;"></div>
                </el-col>
              </el-row>
              <hr style="border:0.5px solid black" />
              <el-row>
                <el-col :span="6">
                  <div class="left">
                    <el-col :span="12">
                      <h3 class="judge">{{titlep2}}</h3>
                    </el-col>
                    <el-col :span="12">
                      <p style="height: 100px;line-height: 186px;text-align: center;font-weight: 900;font-size:16px">行业NPS</p>
                      <p class="data">{{titlemiddle}}</p>
                    </el-col>
                    <!-- <el-col :span="7">
                      <p style="color:#000;height:150px;line-height:433px">同比变化</p>
                    </el-col>-->
                  </div>
                </el-col>
                <el-col :span="14">
                  <div id="sizeChart" style="width: 100%;height:300px;"></div>
                </el-col>
              </el-row>
              <hr style="border:0.5px solid black" />
              <el-row v-show="showChart">
                <el-col :span="6">
                  <div class="left">
                    <el-col :span="12">
                      <h3 class="judge">{{titlep3}}</h3>
                    </el-col>
                    <el-col :span="12">
                      <p style="height: 100px;line-height: 186px;text-align: center;font-weight: 900;font-size:16px">行业NPS</p>
                      <p class="data">{{titlebottom}}</p>
                    </el-col>
                    <!-- <el-col :span="7">
                      <p style="color:#DCDCDC;height:150px;line-height:433px">同比变化</p>
                    </el-col>-->
                  </div>
                </el-col>
                <el-col :span="14">
                  <div id="waysChart" style="width: 100%;height:300px;"></div>
                </el-col>
              </el-row>
            </el-card>
          </el-col>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script>
var arr = [
  { name: "海尔", value: "65.9" },
  { name: "格力", value: "63.3" },
  { name: "美的", value: "61.1" },
  { name: "奥克斯", value: "60.6" },
  { name: "海信", value: "58.6" },
  { name: "科龙", value: "47.5" },
  { name: "志高", value: "45.4" }
];
var productmiddleArr = [
  { name: "格力", value: "73.8" },
  { name: "美的", value: "66.0" },
  { name: "海尔", value: "61.8" },
  { name: "海信", value: "58.4" },
  { name: "科龙", value: "56.3" },
  { name: "奥克斯", value: "56.1" },
  { name: "志高", value: "55.0" }
];
var bottomArr = [
  { name: "奥克斯", value: "64.3" },
  { name: "格力", value: "59.8" },
  { name: "美的", value: "59.3" },
  { name: "海尔", value: "55.1" },
  { name: "海信", value: "48.8" },
  { name: "科龙", value: "46.2" },
  { name: "志高", value: "44.4" }
];
function ranking_pr(arr) {
  for (var i = 0; i < arr.length; i++) {
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[i].value < arr[j].value) {
        var linshi = arr[i];
        arr[i] = arr[j];
        arr[j] = linshi;
      }
    }
  }
  // console.log(arr);
  return arr;
}
function getRanking(arr) {
  console.log(arr);
  var arr_list = [],
    arr_name = [];
  for (var i = 0; i < arr.length; i++) {
    // console.log('ht')
    if (arr[i].name == "海信") {
      arr_list.push({
        name: arr[i].name,
        value: arr[i].value,
        color: "#17b3a3"
      });
      arr_name.push({
        value: arr[i].name,
        textStyle: {
          lineHeight: 15,
          color: "#17b3a3",
          fontSize: 15
        }
      });
    } else {
      arr_list.push({
        name: arr[i].name,
        value: arr[i].value,
        color: "#808080"
      });
      arr_name.push({
        value: arr[i].name,
        textStyle: {
          lineHeight: 15,
          color: "#333"
        }
      });
    }
  }
  console.log(
    "---------------------------------------------------------------------"
  );
  return { arr_list, arr_name };
}
// getRanking(ranking_pr(arr));

export default {
  data() {
    return {
      titlep1: "高档（挂机P≥3.5K，柜机P≥6.5K)",
      titlep2: "中低档（挂机P＜3.5K，柜机＜6.5K）",
      titlep3: "",
      titletop: 57.0,
      titlemiddle: 60.1,
      // titlebottom: 55.7,
      //tabs组件默认显示的的项
      activeName: "price",
      title: "空调各价位产品NPS",
      showChart: false,
      //渠道数据
      //线上
      lineOn: [
        { name: "奥克斯", value: "64.3" },
        { name: "格力", value: "59.8" },
        { name: "美的", value: "59.3" },
        { name: "海尔", value: "55.1" },
        { name: "海信", value: "48.8" },
        { name: "科龙", value: "46.2" },
        { name: "志高", value: "44.4" }
      ],
      // 线下
      lineDown: [
        { name: "格力", value: "73.2" },
        { name: "海尔", value: "66.4" },
        { name: "美的", value: "66.2" },
        { name: "海信", value: "62.0" },
        { name: "科龙", value: "55.9" },
        { name: "奥克斯", value: "54.9" },
        { name: "志高", value: "54.4" }
      ],
      //类型

      //挂机
      bigcrren: [
        { name: "格力", value: "64.3" },
        { name: "海尔", value: "59.8" },
        { name: "美的", value: "59.3" },
        { name: "海信", value: "55.1" },
        { name: "科龙", value: "48.8" },
        { name: "奥克斯", value: "46.2" },
        { name: "志高", value: "44.4" }
      ],
      //柜机
      middlecrren: [
        { name: "格力", value: "69.7" },
        { name: "奥克斯", value: "59.8" },
        { name: "美的", value: "59.3" },
        { name: "海信", value: "55.1" },
        { name: "志高", value: "48.8" },
        { name: "海尔", value: "46.2" },
        { name: "科龙", value: "44.4" }
      ],

      //定频
      order: [
        { name: "格力", value: "82.6" },
        { name: "美的", value: "69.8" },
        { name: "海尔", value: "63.8" },
        { name: "奥克斯", value: "57.0" },
        { name: "科龙", value: "55.3" },
        { name: "志高", value: "53.5" },
        { name: "海信", value: "47.4" }
      ],
      //变频
      change: [
        { name: "格力", value: "69.7" },
        { name: "海尔", value: "63.5" },
        { name: "美的", value: "63.4" },
        { name: "海信", value: "62.3" },
        { name: "奥克斯", value: "57.7" },
        { name: "科龙", value: "52.4" },
        { name: "志高", value: "48.6" }
      ],
      dimenOptions1: {
        color: ["#000"],
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: [
          {
            type: "category",
            data: getRanking(ranking_pr(arr)).arr_name,
            // show:false,
            // boundaryGap : false,

            axisTick: {
              show: false
            }
          }
        ],
        yAxis: [
          {
            type: "value",
            show: false
          }
        ],
        series: [
          {
            name: "NPS",
            type: "bar",
            barWidth: "60%",
            label: {
              show: true,
              position: "top"
            },
            itemStyle: {
              normal: {
                color: function(params) {
                  // var colorList = ['#6dbccf','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9'];
                  // return colorList[params.dataIndex]
                  return getRanking(ranking_pr(arr)).arr_list[params.dataIndex]
                    .color;
                }
              }
            },
            data: getRanking(ranking_pr(arr)).arr_list
          }
        ]
      },
      dimenOptions2: {
        color: ["#000"],
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: [
          {
            type: "category",
            data: getRanking(ranking_pr(productmiddleArr)).arr_name,
            // show:false,
            // boundaryGap : false,

            axisTick: {
              show: false
            }
          }
        ],
        yAxis: [
          {
            type: "value",
            show: false
          }
        ],
        series: [
          {
            name: "NPS",
            type: "bar",
            barWidth: "60%",
            label: {
              show: true,
              position: "top"
            },
            itemStyle: {
              normal: {
                color: function(params) {
                  // var colorList = ['#6dbccf','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9'];
                  // return colorList[params.dataIndex]
                  return getRanking(ranking_pr(productmiddleArr)).arr_list[
                    params.dataIndex
                  ].color;
                }
              }
            },
            data: getRanking(ranking_pr(productmiddleArr)).arr_list
          }
        ]
      },
      dimenOptions3: {
        color: ["#000"],
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: [
          {
            type: "category",
            data: getRanking(ranking_pr(bottomArr)).arr_name,
            // show:false,
            // boundaryGap : false,

            axisTick: {
              show: false
            }
          }
        ],
        yAxis: [
          {
            type: "value",
            show: false
          }
        ],
        series: [
          {
            name: "NPS",
            type: "bar",
            barWidth: "60%",
            label: {
              show: true,
              position: "top"
            },
            itemStyle: {
              normal: {
                color: function(params) {
                  // var colorList = ['#6dbccf','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9'];
                  // return colorList[params.dataIndex]
                  return getRanking(ranking_pr(bottomArr)).arr_list[
                    params.dataIndex
                  ].color;
                }
              }
            },
            data: getRanking(ranking_pr(bottomArr)).arr_list
          }
        ]
      },
      xAxis: [
        {
          type: "category",
          data: getRanking(ranking_pr(arr)).arr_name,
          // show:false,
          // boundaryGap : false,

          axisTick: {
            show: false
          }
        }
      ],
      series: [
        {
          name: "NPS",
          type: "bar",
          barWidth: "60%",
          label: {
            show: true,
            position: "top"
          },
          itemStyle: {
            normal: {
              color: function(params) {
                return getRanking(ranking_pr(arr)).arr_list[params.dataIndex]
                  .color;
              }
            }
          },
          data: getRanking(ranking_pr(arr)).arr_list
        }
      ],
      xAxis1: [
        {
          type: "category",
          data: getRanking(ranking_pr(productmiddleArr)).arr_name,
          // show:false,
          // boundaryGap : false,

          axisTick: {
            show: false
          }
        }
      ],
      series1: [
        {
          name: "NPS",
          type: "bar",
          barWidth: "60%",
          label: {
            show: true,
            position: "top"
          },
          itemStyle: {
            normal: {
              color: function(params) {
                // var colorList = ['#6dbccf','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9'];
                // return colorList[params.dataIndex]
                return getRanking(ranking_pr(productmiddleArr)).arr_list[
                  params.dataIndex
                ].color;
              }
            }
          },
          data: getRanking(ranking_pr(productmiddleArr)).arr_list
        }
      ],
      xAxis2: [
        {
          type: "category",
          data: getRanking(ranking_pr(bottomArr)).arr_name,
          // show:false,
          // boundaryGap : false,

          axisTick: {
            show: false
          }
        }
      ],
      series2: [
        {
          name: "NPS",
          type: "bar",
          barWidth: "60%",
          label: {
            show: true,
            position: "top"
          },
          itemStyle: {
            normal: {
              color: function(params) {
                // var colorList = ['#6dbccf','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9'];
                // return colorList[params.dataIndex]
                return getRanking(ranking_pr(bottomArr)).arr_list[
                  params.dataIndex
                ].color;
              }
            }
          },
          data: getRanking(ranking_pr(bottomArr)).arr_list
        }
      ],

      sizeChart: null,
      priceChart: null,
      waysChart: null,
      value1: "1"
    };
  },
  mounted() {
    // getTdValue()
    this.initpriceChart();
    this.initsizeChart();
    this.initwaysChart();
  },
  activated() {
    // 由于给echart添加了resize事件, 在组件激活时需要重新resize绘画一次, 否则出现空白bug
    if (this.sizeChart) {
      this.sizeChart.resize();
    }
    if (this.priceChart) {
      this.priceChart.resize();
    }
    if (this.waysChart) {
      this.waysChart.resize();
    }
  },
  methods: {
    handleClick(tab, event) {
      if (tab.$options.propsData.name == "price") {
        this.title = "空调各价位产品NPS";
        this.titlep1 = "高档（挂机P≥3.5K，柜机P≥6.5K)";
        this.titlep2 = "中低档（挂机P＜3.5K，柜机＜6.5K）";
        // this.titlep3 = "";
        this.titletop = 57.0;
        this.titlemiddle = 60.1;
        // this.titlebottom = 55.7;
        this.showChart = false;
        this.xAxis = [
          {
            type: "category",
            data: getRanking(ranking_pr(arr)).arr_name,
            // show:false,
            // boundaryGap : false,

            axisTick: {
              show: false
            }
          }
        ];
        this.series = [
          {
            name: "NPS",
            type: "bar",
            barWidth: "60%",
            label: {
              show: true,
              position: "top"
            },
            itemStyle: {
              normal: {
                color: params => {
                  return getRanking(ranking_pr(arr)).arr_list[params.dataIndex]
                    .color;
                }
              }
            },
            data: getRanking(ranking_pr(arr)).arr_list
          }
        ];
        this.xAxis1 = [
          {
            type: "category",
            data: getRanking(ranking_pr(productmiddleArr)).arr_name,
            // show:false,
            // boundaryGap : false,

            axisTick: {
              show: false
            }
          }
        ];
        this.series1 = [
          {
            name: "NPS",
            type: "bar",
            barWidth: "60%",
            label: {
              show: true,
              position: "top"
            },
            itemStyle: {
              normal: {
                color: params => {
                  // var colorList = ['#6dbccf','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9'];
                  // return colorList[params.dataIndex]
                  return getRanking(ranking_pr(productmiddleArr)).arr_list[
                    params.dataIndex
                  ].color;
                }
              }
            },
            data: getRanking(ranking_pr(productmiddleArr)).arr_list
          }
        ];
        this.xAxis2 = [
          {
            type: "category",
            data: getRanking(ranking_pr(bottomArr)).arr_name,
            // show:false,
            // boundaryGap : false,

            axisTick: {
              show: false
            }
          }
        ];
        this.series2 = [
          {
            name: "NPS",
            type: "bar",
            barWidth: "60%",
            label: {
              show: true,
              position: "top"
            },
            itemStyle: {
              normal: {
                color: params => {
                  // var colorList = ['#6dbccf','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9'];
                  // return colorList[params.dataIndex]
                  return getRanking(ranking_pr(bottomArr)).arr_list[
                    params.dataIndex
                  ].color;
                }
              }
            },
            data: getRanking(ranking_pr(bottomArr)).arr_list
          }
        ];
        this.initpriceChart();
        this.initsizeChart();
        this.initwaysChart();

        console.log("2017年--价格");
      } else if (tab.$options.propsData.name == "ways") {
        console.log(getRanking(ranking_pr(this.lineOn)));
        this.title = "空调各渠道产品NPS";
        this.titlep1 = "线上";
        this.titlep2 = "线下";
        this.titlep3 = "";
        this.titletop = 52.6;
        this.titlemiddle = 61.2;
        this.titlebottom = "";
        this.showChart = false;
        this.xAxis = [
          {
            type: "category",
            data: getRanking(ranking_pr(this.lineOn)).arr_name,
            // show:false,
            // boundaryGap : false,

            axisTick: {
              show: false
            }
          }
        ];
        this.series = [
          {
            name: "NPS",
            type: "bar",
            barWidth: "60%",
            label: {
              show: true,
              position: "top",
              itemStyle: {
                normal: {
                  color: params => {
                    // var colorList = ['#6dbccf','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9'];
                    // return colorList[params.dataIndex]
                    return getRanking(ranking_pr(this.lineOn)).arr_list[
                      params.dataIndex
                    ].color;
                  }
                }
              }
            },

            data: getRanking(ranking_pr(this.lineOn)).arr_list
          }
        ];
        this.xAxis1 = [
          {
            type: "category",
            data: getRanking(ranking_pr(this.lineDown)).arr_name,
            // show:false,
            // boundaryGap : false,

            axisTick: {
              show: false
            }
          }
        ];
        this.series1 = [
          {
            name: "NPS",
            type: "bar",
            barWidth: "60%",
            label: {
              show: true,
              position: "top"
            },
            itemStyle: {
              normal: {
                color: params => {
                  // var colorList = ['#6dbccf','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9'];
                  // return colorList[params.dataIndex]
                  return getRanking(ranking_pr(this.lineDown)).arr_list[
                    params.dataIndex
                  ].color;
                }
              }
            },
            data: getRanking(ranking_pr(this.lineDown)).arr_list
          }
        ];
        this.initpriceChart();
        this.initsizeChart();
        console.log("2017年--尺寸");
      } else if (tab.$options.propsData.name == "size") {
        this.title = "空调各类型产品NPS";
        this.titlep1 = "挂机";
        this.titlep2 = "柜机";
        this.titlep3 = "";
        this.titletop = 57.6;
        this.titlemiddle = 60.5;
        this.titlebottom = "";
        this.showChart = false;
        this.xAxis = [
          {
            type: "category",
            data: getRanking(ranking_pr(this.bigcrren)).arr_name,
            // show:false,
            // boundaryGap : false,

            axisTick: {
              show: false
            }
          }
        ];
        this.series = [
          {
            name: "NPS",
            type: "bar",
            barWidth: "60%",
            label: {
              show: true,
              position: "top"
            },
            itemStyle: {
              normal: {
                color: params => {
                  // var colorList = ['#6dbccf','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9'];
                  // return colorList[params.dataIndex]
                  return getRanking(ranking_pr(this.bigcrren)).arr_list[
                    params.dataIndex
                  ].color;
                }
              }
            },
            data: getRanking(ranking_pr(this.bigcrren)).arr_list
          }
        ];
        this.xAxis1 = [
          {
            type: "category",
            data: getRanking(ranking_pr(this.middlecrren)).arr_name,
            // show:false,
            // boundaryGap : false,

            axisTick: {
              show: false
            }
          }
        ];
        this.series1 = [
          {
            name: "NPS",
            type: "bar",
            barWidth: "60%",
            label: {
              show: true,
              position: "top"
            },
            itemStyle: {
              normal: {
                color: params => {
                  // var colorList = ['#6dbccf','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9'];
                  // return colorList[params.dataIndex]
                  return getRanking(ranking_pr(this.middlecrren)).arr_list[
                    params.dataIndex
                  ].color;
                }
              }
            },
            data: getRanking(ranking_pr(this.middlecrren)).arr_list
          }
        ];
        
        this.initpriceChart();
        this.initsizeChart();
        // this.initwaysChart();
        // this.initwaysChart()=null;

        console.log("2017年--尺寸");
      }else if(tab.$options.propsData.name == "what"){
        this.title = "空调各容量产品NPS";
        this.titlep1 = "定频";
        this.titlep2 = "变频";
        this.titlep3 = "";
        this.titletop = 56.4;
        this.titlemiddle = 59.8;
        this.titlebottom = "";
        this.showChart = false;
        this.xAxis = [
          {
            type: "category",
            data: getRanking(ranking_pr(this.order)).arr_name,
            // show:false,
            // boundaryGap : false,

            axisTick: {
              show: false
            }
          }
        ];
        this.series = [
          {
            name: "NPS",
            type: "bar",
            barWidth: "60%",
            label: {
              show: true,
              position: "top"
            },
            itemStyle: {
              normal: {
                color: params => {
                  // var colorList = ['#6dbccf','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9'];
                  // return colorList[params.dataIndex]
                  return getRanking(ranking_pr(this.order)).arr_list[
                    params.dataIndex
                  ].color;
                }
              }
            },
            data: getRanking(ranking_pr(this.order)).arr_list
          }
        ];
        this.xAxis1 = [
          {
            type: "category",
            data: getRanking(ranking_pr(this.change)).arr_name,
            // show:false,
            // boundaryGap : false,

            axisTick: {
              show: false
            }
          }
        ];
        this.series1 = [
          {
            name: "NPS",
            type: "bar",
            barWidth: "60%",
            label: {
              show: true,
              position: "top"
            },
            itemStyle: {
              normal: {
                color: params => {
                  // var colorList = ['#6dbccf','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9'];
                  // return colorList[params.dataIndex]
                  return getRanking(ranking_pr(this.change)).arr_list[
                    params.dataIndex
                  ].color;
                }
              }
            },
            data: getRanking(ranking_pr(this.change)).arr_list
          }
        ];
        this.initpriceChart();
        this.initsizeChart();
      }
      //2018年
    },
    changeCellStyle(row) {
      // console.log(row)
      if (row.column.label == "海信") {
        return "bg";
      }
    },
    //设置海信样式
    rowClass(option) {
      // console.log(option);
      if (option.column.label == "海信") {
        return "test";
      }
    },

    // P>=5
    initpriceChart() {
      var options = { ...this.dimenOptions1 };
      options.xAxis = this.xAxis;
      options.series = this.series;
      this.priceChart = echarts.init(document.getElementById("priceChart"));
      this.priceChart.setOption(options);
      window.addEventListener("resize", () => {
        this.priceChart.resize();
      });
    },
    // 3<P<5
    initsizeChart() {
      var options = { ...this.dimenOptions2 };
      options.xAxis = this.xAxis1;
      options.series = this.series1;
      this.sizeChart = echarts.init(document.getElementById("sizeChart"));
      this.sizeChart.setOption(options);
      window.addEventListener("resize", () => {
        this.sizeChart.resize();
      });
    },
    //p>5
    initwaysChart() {
      var options = { ...this.dimenOptions3 };
      options.xAxis = this.xAxis2;
      options.series = this.series2;
      this.waysChart = echarts.init(document.getElementById("waysChart"));
      this.waysChart.setOption(options);
      window.addEventListener("resize", () => {
        this.waysChart.resize();
      });
    }
  }
};
</script>
<style>
.box-card {
  width: 100%;
  /* height: 4000px; */

  /* background: red; */
}

el-table-column {
  text-align: center;
}
.bg {
  background: #17b3a3;
  color: #fff;
}

.el-table .test {
  background-color: #17b3a3;
  color: #fff;
  font-weight: 700;
}
.left {
  width: 100%;
  height: 300px;
  display: flex;

  /* background: red */
}
.judge {
  text-align: center;
  height: 300px;
  line-height: 41px;
}
.data {
  height: 100px;
  line-height: 186px;
  text-align: center;
  font-weight: 900;
  font-size: 30px;
}
.percent {
  /* text-align:center;
  color:red;
  font-size:18px; */
  /* font-weight:700; */
  height: 150px;
  line-height: 100px;
}
</style>