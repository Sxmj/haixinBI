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
              <el-tab-pane label="尺寸" name="size"></el-tab-pane>
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
              <hr style="border:0.5px solid black"/>
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
              <hr style="border:0.5px solid black"/>
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
  { name: "索尼", value: "69.4" },
  { name: "三星", value: "71.6" },
  { name: "海信", value: "64.8" },
  { name: "夏普", value: "78.1" },
  { name: "小米", value: "62.7" },
  { name: "创维", value: "61.3" },
  { name: "TCL", value: "63.3" },
  { name: "海尔", value: "42.6" }
];
var productmiddleArr = [
  { name: "索尼", value: "69.4" },
  { name: "三星", value: "71.3" },
  { name: "海信", value: "64.5" },
  { name: "夏普", value: "51.4" },
  { name: "小米", value: "60.3" },
  { name: "创维", value: "57.1" },
  { name: "TCL", value: "61.8" },
  { name: "海尔", value: "64.2" }
];
var bottomArr = [
  { name: "索尼", value: "70.4" },
  { name: "三星", value: "60" },
  { name: "海信", value: "62.7" },
  { name: "夏普", value: "55.7" },
  { name: "小米", value: "53.8" },
  { name: "创维", value: "53.5" },
  { name: "TCL", value: "44.4" },
  { name: "海尔", value: "44" }
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
  // console.log(arr);
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
  console.log(arr_list, arr_name);
  return { arr_list, arr_name };
}
// getRanking(ranking_pr(arr));

export default {
  data() {
    return {
      titlep1: "P≥5元",
      titlep2: "3K≤P<5元",
      titlep3: "P<3k元",
      titletop: 64.8,
      titlemiddle: 62.8,
      titlebottom: 55.7,
      //tabs组件默认显示的的项
      activeName: "price",
      title: "电视各价位产品NPS",
      showChart: true,
      //渠道数据
      //线上
      lineOn: [
        { name: "索尼", value: "77.1" },
        { name: "三星", value: "71.3" },
        { name: "海信", value: "62" },
        { name: "夏普", value: "51.6" },
        { name: "小米", value: "54.7" },
        { name: "创维", value: "58.9" },
        { name: "TCL", value: "52" },
        { name: "海尔", value: "50" }
      ],
      // 线下
      lineDown: [
        { name: "索尼", value: "66.2" },
        { name: "三星", value: "67.1" },
        { name: "海信", value: "65.4" },
        { name: "夏普", value: "62.4" },
        { name: "小米", value: "60.6" },
        { name: "创维", value: "55.9" },
        { name: "TCL", value: "60.3" },
        { name: "海尔", value: "55.4" }
      ],
      //尺寸

      //60+寸
      bigcrren: [
        { name: "索尼", value: "62.7" },
        { name: "三星", value: "70.4" },
        { name: "海信", value: "70.7" },
        { name: "夏普", value: "64.1" },
        { name: "小米", value: "61.1" },
        { name: "创维", value: "63.1" },
        { name: "TCL", value: "57.8" },
        { name: "海尔", value: "64.4" }
      ],
      //55寸
      middlecrren: [
        { name: "索尼", value: "72.2" },
        { name: "三星", value: "72.5" },
        { name: "海信", value: "66.7" },
        { name: "夏普", value: "0" },
        { name: "小米", value: "58.8" },
        { name: "创维", value: "62" },
        { name: "TCL", value: "50.8" },
        { name: "海尔", value: "56.2" }
      ],
      //50寸
      smallcrren: [
        { name: "索尼", value: "57.2" },
        { name: "三星", value: "70.4" },
        { name: "海信", value: "70.7" },
        { name: "夏普", value: "64.1" },
        { name: "小米", value: "61.1" },
        { name: "创维", value: "57.8" },
        { name: "TCL", value: "64.4" },
        { name: "海尔", value: "56.5" }
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
        this.title = "电视各价位产品NPS";
        this.titlep1 = "P≥5元";
        this.titlep2 = "3K≤P<5元";
        this.titlep3 = "P<3k元";
        this.titletop = 64.8;
        this.titlemiddle = 62.8;
        this.titlebottom = 55.7;
        this.showChart = true;
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
                color: function(params) {
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
        ];
        this.initpriceChart();
        this.initsizeChart();
        this.initwaysChart();

        console.log("2017年--价格");
      } else if (tab.$options.propsData.name == "ways") {
        console.log(getRanking(ranking_pr(this.lineOn)));
        this.title = "电视各渠道产品NPS";
        this.titlep1 = "线上";
        this.titlep2 = "线下";
        this.titlep3 = "";
        this.titletop = 60.0;
        this.titlemiddle = 62.0;
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
              position: "top"
            },
            itemStyle: {
              normal: {
                color: params => {
                  return getRanking(ranking_pr(this.lineOn)).arr_list[
                    params.dataIndex
                  ].color;
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
        this.title = "电视各尺寸产品NPS";
        this.titlep1 = "60+寸";
        this.titlep2 = "55寸";
        this.titlep3 = "50寸";
        this.titletop = 62.7;
        this.titlemiddle = 63.3;
        this.titlebottom = "57.2";
        this.showChart = true;
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
        this.xAxis2 = [
          {
            type: "category",
            data: getRanking(ranking_pr(this.smallcrren)).arr_name,
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
                  return getRanking(ranking_pr(this.smallcrren)).arr_list[
                    params.dataIndex
                  ].color;
                }
              }
            },
            data: getRanking(ranking_pr(this.smallcrren)).arr_list
          }
        ];
        this.initpriceChart();
        this.initsizeChart();
        this.initwaysChart();
        // this.initwaysChart()=null;

        console.log("2017年--尺寸");
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