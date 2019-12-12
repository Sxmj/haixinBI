<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="24">
        <el-col>
          <h2>2019年海信七品类各环节NPS排位</h2>
        </el-col>
        <el-table
          :data="tableData"
          :span-method="objectSpanMethod"
          :row-style="{height:'20px'}"
          :cell-style="{padding:'0px'}"
          border
          style="width: 100%;min-width:500px;text-align:center;border:1px solid #ccc"
        >
          <el-table-column prop="id" label="环节" width="120" align="center" class-name="firstCol"></el-table-column>
          <el-table-column prop="name" label="排位" align="center" class-name="second">
            <template slot-scope="scope">
              <p v-if="Number(scope.$index)%2" :style="{color:'#838B83'}">目标排位</p>
              <!-- 奇数数据行的内容（即18年行业排位行） -->
              <p v-else :style="{color:'#000'}">19年行业排位</p>
            </template>
          </el-table-column>
          <el-table-column prop="amount1" label="海信电视" align="center">
            <template slot-scope="scope">
              <!-- <p
                v-if="Number(scope.$index)%2"
                :style="{color:tableData[scope.$index-1].amount3>=tableData[scope.$index].amount3?'#000':'#DC143C'}"
              >{{tableData[scope.$index].amount3 }}</p>
              <p
                v-else
                :style="{color:tableData[scope.$index].amount3>tableData[scope.$index+1].amount3?'#DC143C':'#17B3A3'}"
              >{{tableData[scope.$index].amount3 }}</p>-->
              <!-- 偶数数据行的内容（即目标排位行） -->
              <p
                v-if="Number(scope.$index)%2"
                style="width:25px;height:25px;margin:auto;text-align:center;border-radius:50%;border:1px solid;line-height:23px"
                :style="{color:'#838B83'}"
              >{{tableData[scope.$index].amount1}}</p>
              <p
                v-else
                class
                :style="{color:Number(tableData[scope.$index].amount1)===Number(tableData[scope.$index+1].amount1)?'#000':Number(tableData[scope.$index].amount1)>Number(tableData[scope.$index+1].amount1)?'#17B3A3':'#DC143C'}"
              >{{tableData[scope.$index].amount1}}</p>
            </template>
          </el-table-column>
          <el-table-column prop="amount2" label="海信冰箱" align="center">
            <template slot-scope="scope">
              <p
                v-if="Number(scope.$index)%2"
                :style="{color:'#838B83'}"
                style="width:25px;height:25px;margin:auto;text-align:center;border-radius:50%;border:1px solid;line-height:23px"
              >{{tableData[scope.$index].amount2}}</p>
              <!-- 奇数数据行的内容（即18年行业排位行） -->
              <p
                v-else
                class
                :style="{color:Number(tableData[scope.$index].amount2)===Number(tableData[scope.$index+1].amount2)?'#DCDCDC':Number(tableData[scope.$index].amount2)>Number(tableData[scope.$index+1].amount2)?'#17B3A3':'#DC143C'}"
              >{{tableData[scope.$index].amount2}}</p>
            </template>
          </el-table-column>
          <el-table-column prop="amount3" label="容声冰箱" align="center">
            <template slot-scope="scope">
              <p
                v-if="Number(scope.$index)%2"
                :style="{color:'#838B83'}"
                style="width:25px;height:25px;margin:auto;text-align:center;border-radius:50%;border:1px solid;line-height:23px"
              >{{tableData[scope.$index].amount3}}</p>
              <!-- 奇数数据行的内容（即18年行业排位行） -->
              <p
                v-else
                class
                :style="{color:Number(tableData[scope.$index].amount3)===Number(tableData[scope.$index+1].amount3)?'#DCDCDC':Number(tableData[scope.$index].amount3)>Number(tableData[scope.$index+1].amount3)?'#17B3A3':'#DC143C'}"
              >{{tableData[scope.$index].amount3}}</p>
            </template>
          </el-table-column>
          <el-table-column prop="amount4" label="海信空调" align="center">
            <template slot-scope="scope">
              <p
                v-if="Number(scope.$index)%2"
                :style="{color:'#838B83'}"
                style="width:25px;height:25px;margin:auto;text-align:center;border-radius:50%;border:1px solid;line-height:23px"
              >{{tableData[scope.$index].amount4}}</p>
              <!-- 奇数数据行的内容（即18年行业排位行） -->
              <p
                v-else
                class
                :style="{color:Number(tableData[scope.$index].amount4)===Number(tableData[scope.$index+1].amount4)?'#000':Number(tableData[scope.$index].amount4)>Number(tableData[scope.$index+1].amount4)?'#17B3A3':'#DC143C'}"
              >{{tableData[scope.$index].amount4}}</p>
            </template>
          </el-table-column>
          <el-table-column prop="amount5" label="科龙空调" align="center">
            <template slot-scope="scope">
              <p
                v-if="Number(scope.$index)%2"
                :style="{color:'#838B83'}"
                style="width:25px;height:25px;margin:auto;text-align:center;border-radius:50%;border:1px solid;line-height:23px"
              >{{tableData[scope.$index].amount5}}</p>
              <!-- 奇数数据行的内容（即18年行业排位行） -->
              <p
                v-else
                class
                :style="{color:Number(tableData[scope.$index].amount5)===Number(tableData[scope.$index+1].amount5)?'#000':Number(tableData[scope.$index].amount5)>Number(tableData[scope.$index+1].amount5)?'#17B3A3':'#DC143C'}"
              >{{tableData[scope.$index].amount5}}</p>
            </template>
          </el-table-column>
          <el-table-column prop="amount6" label="海信洗衣机" align="center">
            <template slot-scope="scope">
              <p
                v-if="Number(scope.$index)%2"
                :style="{color:'#838B83'}"
                style="width:25px;height:25px;margin:auto;text-align:center;border-radius:50%;border:1px solid;line-height:23px"
              >{{tableData[scope.$index].amount6}}</p>
              <!-- 奇数数据行的内容（即18年行业排位行） -->
              <p
                v-else
                class
                :style="{color:Number(tableData[scope.$index].amount6)===Number(tableData[scope.$index+1].amount6)?'#DCDCDC':Number(tableData[scope.$index].amount6)>Number(tableData[scope.$index+1].amount6)?'#17B3A3':'#DC143C'}"
              >{{tableData[scope.$index].amount6}}</p>
            </template>
          </el-table-column>
          <el-table-column prop="amount7" label="海信手机" align="center">
            <template slot-scope="scope">
              <p
                v-if="Number(scope.$index)%2"
                :style="{color:'#838B83'}"
                style="width:25px;height:25px;margin:auto;text-align:center;border-radius:50%;border:1px solid;line-height:23px"
              >{{tableData[scope.$index].amount7}}</p>
              <!-- 奇数数据行的内容（即18年行业排位行） -->
              <p
                v-else
                class
                :style="{color:Number(tableData[scope.$index].amount7)===Number(tableData[scope.$index+1].amount7)?'#000':Number(tableData[scope.$index].amount7)>Number(tableData[scope.$index+1].amount7)?'#17B3A3':'#DC143C'}"
              >{{tableData[scope.$index].amount7}}</p>
            </template>
          </el-table-column>
        </el-table>
      </el-col>
    </el-row>
    <el-card style="margin-top:20px">
      <el-col :span="24">
        <h3>阅读说明:</h3>
        <P>
          <span style="color:green;font-weight:bold">绿色</span>表示位次
          <span style="color:#000;font-weight:bold">高于</span>今年目标行业排名，
          <span style="color:red;font-weight:bold">红色</span>表示位次
          <span style="color:#000;font-weight:bold">低于</span>今年目标行业排名，
          <span style="color:#000;font-weight:bold">黑色</span>表示与今年目标行业排名
          <span style="color:#000;font-weight:bold">持平</span>
        </P>
      </el-col>
    </el-card>
    <el-row :gutter="20">
      <el-col :span="24">
        <el-tabs v-model="activeName" @tab-click="handleClick" type="card" style="margin-top:40px">
          <el-tab-pane label="整体" name="all"></el-tab-pane>
          <el-tab-pane label="产品环节" name="productLink"></el-tab-pane>
          <el-tab-pane label="销售环节" name="sellLink"></el-tab-pane>
          <el-tab-pane label="服务环节" name="serviceLink"></el-tab-pane>
        </el-tabs>
      </el-col>
    </el-row>
    <el-row :guter="20">
      <el-col :span="24">
        <el-card>
          <div id="rankChartBox" class="chartBox" style="width:90%;height:500px"></div>
        </el-card>
        <el-card style="margin-top:20px">
          <el-col :span="24">
            <h3>数据说明：品牌对标范围</h3>
            <p>电视：索尼、三星、海信、海尔、夏普、TCL、创维、小米</p>
            <p>冰箱：西门子、海尔、容声、三星、海信、美的、美菱</p>
            <p>空调：格力、海尔、美的、奥克斯、海信、志高、科龙</p>
            <p>洗衣机：西门子、海尔、松下、小天鹅、三星、LG、海信</p>
            <p>手机：苹果、华为、OPPO、VIVO、三星、荣耀、小米、魅族、海信</p>
          </el-col>
        </el-card>
      </el-col>
      <el-col :span="24"></el-col>
    </el-row>
  </div>
</template>

<script>
// var arr = [36, 10, 10, 20, 45, 45, 54];
// function getArr(arr) {
//   for (var i = 0; i < arr.length; index++) {}
//   return arr;
// }
var grid = {
  left: "15%",
  right: "8%",
  bottom: "5%",
  containLabel: false
};
var array = [0, -1, 3, 2, 5, -2];
import ajax from "../../api/ajax";
const BASE = "/api";
export default {
  data() {
    return {
      activeName: "all",
      rankchartbox: null,
      icon: "箭头",
      data: [12, 13, 14, 15, 16, 17, 18],
      // 同比数据：
      tongBidata1: [1, -2, 3, 4, -5, 6, 7],
      // NPS数据:
      NPSdata: [36, 10, 10, 20, 45, 45, 34],

      //整体NPS数据
      allData: [62.6, 57.7, 60.7, 58.3, 54.5, 57.9, 40.2],
      //整体同比
      allCompare: [0.2, 1.2, 0.5, -0.8, 0.7, 1.8, 9.0],
      //产品NPS数据
      productData: [64.1, 58.1, 61.0, 58.5, 53.3, 57.3, 39.2],
      //产品同比变化
      productCompare: [0.7, 1.2, 0.4, -0.6, 1.8, 1.8, 9.5],
      //销售NPS数据
      sellData: [60.4, 57.4, 60.9, 55.6, 54.0, 57.9, 48.8],
      //销售同比变化
      sellCompare: [-1.5, 0.9, 0.3, -1.7, -1.5, 1.9, 4.8],
      // 服务NPS数据
      serviceData: [59.2, 53.5, 56.3, 59.3, 57.6, 60.7, 49.0],
      // 服务同比变化
      serviceCompare: [0.5, 2.3, 3.1, -0.9, -0.5, 1.9, 3.0],

      //echarts柱状图的option设置
      options: {
        color: ["#17b3a3"],
        title: {
          text: "整体表现"
        },
        legend: {},
        tooltip: {},

        xAxis: {
          data: [
            "海信电视",
            "海信冰箱",
            "容声冰箱",
            "海信空调",
            "科龙空调",
            "海信洗衣机",
            "海信手机"
          ],
          type: "category", //category离散的类型
          axisPointer: {
            type: "shadow"
          },
          // 是否显示坐标刻度
          axisTick: {
            show: false
          }
        },
        yAxis: {
          min: 20,
          max: 80
        },
        grid: {
          left: "15%",
          right: "8%",
          bottom: "5%",
          containLabel: false
        },
        toolbox: {
          feature: {
            dataView: { show: true, readOnly: false },
            magicType: { show: true, type: ["line", "bar"] },
            restore: { show: true },
            saveAsImage: { show: true }
          }
        },
        series: [
          {
            barGap: 1,
            // barCategoryGap:'15',
            name: "NPS",
            type: "bar",
            color: "#17B3A3",
            barWidth: 50,
            label: {
              show: true,
              // color:red,
              position: "top",
              formatter: params => {
                console.log(params);
                var nps = this.allData;
                var tongbi = this.allCompare;
                if (tongbi[params.dataIndex] > 0) {
                  return (
                    "NPS: " +
                    nps[params.dataIndex] +
                    "\n" +
                    "\n" +
                    "同比: " +
                    tongbi[params.dataIndex] +
                    "↑"
                  );
                } else {
                  return (
                    "NPS: " +
                    nps[params.dataIndex] +
                    "\n" +
                    "\n" +
                    "同比: " +
                    tongbi[params.dataIndex] +
                    "↓"
                  );
                }
              },
              color: "#000"
            },
            data: [62.6, 57.7, 60.7, 58.3, 54.5, 57.9, 40.2]
          }
        ]
      },
      title: {
        text: "整体表现"
      },
      series: [
        {
          barGap: 1,
          // barCategoryGap:'15',
          name: "NPS",
          type: "bar",
          color: "#17B3A3",
          barWidth: 50,
          label: {
            show: true,
            // color:red,
            position: "top",
            formatter: params => {
              // console.log(params);
              var nps = this.allData;
              var tongbi = this.allCompare;
              if (tongbi[params.dataIndex] > 0) {
                return (
                  "NPS: " +
                  nps[params.dataIndex] +
                  "\n" +
                  "\n" +
                  "同比: " +
                  tongbi[params.dataIndex] +
                  "↑"
                );
              } else {
                return (
                  "NPS: " +
                  nps[params.dataIndex] +
                  "\n" +
                  "\n" +
                  "同比: " +
                  tongbi[params.dataIndex] +
                  "↓"
                );
              }
            },
            textStyle: {
              color: "#000",
              fontSize: 13
            }
          },
          data: [62.6, 57.7, 60.7, 58.3, 54.5, 57.9, 40.2]
        }
      ],

      //表格数据
      tableData: [
        {
          id: "整体",
          name: "18年行业排位",
          amount1: "3",
          amount2: "6",
          amount3: "4",
          amount4: "4",
          amount5: "6",
          amount6: "7",
          amount7: "9"
        },
        {
          id: "整体",
          name: "目标排位",
          amount1: "2",
          amount2: "3",
          amount3: "2",
          amount4: "3",
          amount5: "5",
          amount6: "5",
          amount7: "7"
        },
        {
          id: "产品",
          name: "18年行业排位",
          amount1: "3",
          amount2: "6",
          amount3: "4",
          amount4: "4",
          amount5: "6",
          amount6: "7",
          amount7: "9"
        },
        {
          id: "产品",
          name: "目标排位",
          amount1: "2",
          amount2: "3",
          amount3: "2",
          amount4: "3",
          amount5: "5",
          amount6: "5",
          amount7: "7"
        },
        {
          id: "销售",
          name: "18年行业排位",
          amount1: "1",
          amount2: "6",
          amount3: "3",
          amount4: "5",
          amount5: "6",
          amount6: "6",
          amount7: "8"
        },
        {
          id: "销售",
          name: "目标排位",
          amount1: "1",
          amount2: "3",
          amount3: "1",
          amount4: "4",
          amount5: "5",
          amount6: "3",
          amount7: "7"
        },
        {
          id: "服务",
          name: "18年行业排位",
          amount1: "1",
          amount2: "5",
          amount3: "4",
          amount4: "3",
          amount5: "4",
          amount6: "4",
          amount7: "8"
        },
        {
          id: "服务",
          name: "目标排位",
          amount1: "1",
          amount2: "3",
          amount3: "2",
          amount4: "3",
          amount5: "5",
          amount6: "3",
          amount7: "7"
        }
      ]
    };
  },
  activated() {
    // 由于给echart添加了resize事件, 在组件激活时需要重新resize绘画一次, 否则出现空白bug
    if (this.rankchartbox) {
      this.rankchartbox.resize();
    }
  },
  methods: {
    handleClick(tab, event) {
      if (tab.$options.propsData.label == "整体") {
        // this.data = [36, 10, 10, 20, 45, 45, 54];

        (this.title = {
          text: "整体表现"
        }),
          (this.series = [
            {
              name: "NPS",
              type: "bar",
              barWidth: 50,

              data: this.allData,
              label: {
                show: true,
                position: "top",
                textStyle: {
                  color: "#000",
                  fontSize: 13
                },
                formatter: params => {
                  if (this.allCompare[params.dataIndex] > 0) {
                    // debugger
                    return (
                      "NPS: " +
                      this.allData[params.dataIndex] +
                      "\n" +
                      "\n" +
                      "同比: " +
                      this.allCompare[params.dataIndex] +
                      "↑"
                    );
                    // debugger
                  } else {
                    return (
                      "NPS: " +
                      this.allData[params.dataIndex] +
                      "\n" +
                      "\n" +
                      "同比: " +
                      this.allCompare[params.dataIndex] +
                      "↓"
                    );
                  }
                }
                // color: "#000",
              }
            }
          ]);

        console.log(1);
      } else if (tab.$options.propsData.label == "产品环节") {
        console.log(this.data);
        var ht = this.data;
        // var ha=ajax(BASE + '/index_category')
        // console.log(ha)

        (this.title = {
          text: "产品环节"
        }),
          (this.series = [
            {
              name: "NPS",
              type: "bar",
              barWidth: 50,
              label: {
                show: true,
                position: "top",
                formatter: params => {
                  // this.NPSdata = [12, 13, 14, 15, 16, 17, 18];
                  // this.tongBi = [3, -9, -1, 2, -1, -4, 8];
                  if (this.productCompare[params.dataIndex] > 0) {
                    // debugger
                    return (
                      "NPS: " +
                      this.productData[params.dataIndex] +
                      "\n" +
                      "\n" +
                      "同比: " +
                      this.productCompare[params.dataIndex] +
                      "↑"
                    );
                    // debugger
                  } else {
                    return (
                      "NPS: " +
                      this.productData[params.dataIndex] +
                      "\n" +
                      "\n" +
                      "同比: " +
                      this.productCompare[params.dataIndex] +
                      "↓"
                    );
                  }
                },
                textStyle: {
                  color: "#000",
                  fontSize: 13
                }
              },
              data: this.productData
            }
          ]);
      } else if (tab.$options.propsData.label == "销售环节") {
        (this.title = {
          text: "销售环节"
        }),
          (this.series = [
            {
              name: "NPS",
              type: "bar",
              barWidth: 50,
              label: {
                show: true,
                position: "top",
                formatter: params => {
                  if (this.sellCompare[params.dataIndex] > 0) {
                    // debugger
                    return (
                      "NPS: " +
                      this.sellData[params.dataIndex] +
                      "\n" +
                      "\n" +
                      "同比: " +
                      this.sellCompare[params.dataIndex] +
                      "↑"
                    );
                    // debugger
                  } else {
                    return (
                      "NPS: " +
                      this.sellData[params.dataIndex] +
                      "\n" +
                      "\n" +
                      "同比: " +
                      this.sellCompare[params.dataIndex] +
                      "↓"
                    );
                  }
                },
                textStyle: {
                  color: "#000",
                  fontSize: 13
                }
              },
              data: this.sellData
            }
          ]);
        console.log(3);
      } else if (tab.$options.propsData.label == "服务环节") {
        (this.title = {
          text: "服务环节"
        }),
          (this.series = [
            {
              name: "NPS",
              type: "bar",
              barWidth: 50,
              data: this.serviceData,
              label: {
                show: true,
                position: "top",
                formatter: params => {
                  if (this.serviceCompare[params.dataIndex] > 0) {
                    // debugger
                    return (
                      "NPS: " +
                      this.serviceData[params.dataIndex] +
                      "\n" +
                      "\n" +
                      "同比: " +
                      this.serviceCompare[params.dataIndex] +
                      "↑"
                    );
                    // debugger
                  } else {
                    return (
                      "NPS: " +
                      this.serviceData[params.dataIndex] +
                      "\n" +
                      "\n" +
                      "同比: " +
                      this.serviceCompare[params.dataIndex] +
                      "↓"
                    );
                  }
                },
                textStyle: {
                  color: "#000",
                  fontSize: 13
                }
              }
            }
          ]);
      }
      this.initRankChartBox();
    },
    initRankChartBox() {
      //通过三点运算符拆包获取options中的每一个对象
      var option = { ...this.options };
      option.series = this.series;
      option.title = this.title;
      // debugger
      this.rankchartbox = echarts.init(document.getElementById("rankChartBox"));
      // this.rankchartbox.showLoading();

      // this.rankchartbox.hideLoading();
      this.rankchartbox.setOption(option, true);
      // debugger
      window.addEventListener("resize", () => {
        //  debugger
        this.rankchartbox.resize();
        //   console.log(111)
      });
    },
    //合并列的方法
    objectSpanMethod({ row, column, rowIndex, columnIndex }) {
      if (columnIndex === 0) {
        if (rowIndex % 2 === 0) {
          //合并第一行且两行为一行，从第一行开始，共两行为一行
          return {
            rowspan: 2,
            colspan: 1
          };
        } else {
          return {
            rowspan: 0,
            colspan: 0
          };
        }
      }
    }
  },
  mounted() {
    this.initRankChartBox();
    // this.$store.dispatch('getRankCondition')
  }
};
</script>
<style>
/* 设置第一列的样式 */
.el-table .firstCol {
  background: #17b3a3;
  color: #fff;
  border: #17b3a3;
  font-size: 16px;
  font-weight: bold;
}
/* 设置第二列的样式 */
.el-table .second {
  color: black;
}
/* .el-table .warning-row {
  color: red;
}

.el-table .success-row {
  color: blue;
} */

/* .el-table .el-table__body tr:hover>td{
    background-color:	#A9A9A9;
  } */
/* 鼠标划过表格时的颜色样式 */
.el-table--enable-row-hover .el-table__body tr:hover > td {
  background-color: #c0c0c0;
}
</style>