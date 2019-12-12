<template>
  <div class="tv_product">
    <el-row :gutter="20">
      <el-col :span="24">
        <el-card>
          <h3 class="chart_title">海信电视产品</h3>
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
        <el-select v-model="value" placeholder="请选择" @change="currentChange">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
            :disabled="item.disabled"
          ></el-option>
        </el-select>
        <div id="chartProduct" class="chartProductBox"></div>
        <div style="padding-left:125px;margin-top:30px">
          <el-table :data="tableData" style="width: 100%">
            <!-- <el-table-column>标签体中为放置好的列数据，共6列 -->
            <el-table-column prop="year" label="各年表现排位" width="110" align="center"></el-table-column>
            <el-table-column prop="sony" label="索尼" width="90" align="center"></el-table-column>
            <el-table-column prop="sanxing" label="三星" width="90" align="center"></el-table-column>
            <el-table-column prop="haixin" label="海信" width="90" align="center"></el-table-column>
            <el-table-column prop="xiapu" label="夏普" width="90" align="center"></el-table-column>
            <el-table-column prop="xiaomi" label="小米" width="90" align="center"></el-table-column>
            <el-table-column prop="chuangwei" label="创维" width="90" align="center"></el-table-column>
            <el-table-column prop="tcl" label="TCL" width="90" align="center"></el-table-column>
            <el-table-column prop="haier" label="海尔" width="90" align="center"></el-table-column>
          </el-table>
        </div>
        <p style="margin-left:100px;color:#FFD700">*外设兼容性指标base小于30，未出示。</p>
       <!-- 不用的列表部分 -->
        <!-- <span v-for="(item,index) in data_lists" :key="index">
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
        ></el-button>-->
        <!-- <span
                    style="float: right; padding: 3px 5px 3px 0 "
                    class="color_17b3a3"
                  >指标关注度:{{item.attention}}</span>
        </div>-->
        <!-- :style="{height:item.show2?35*3+35+'px':item.tableData.length*35+35+'px'}" -->
        <!-- <div
                  class="transition"
        >-->
        <!-- <el-table :data="item.tableData" style="width: 100%">
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
        </span>-->
      </el-card>
    </el-row>
  </div>
</template>

<script>
var tv_arr = [
  {
    name: "索尼",
    value_2017: "9.29",
    value_2018: "9.32",
    value_2019: "9.27"
  },
  {
    name: "三星",
    value_2017: "9.33",
    value_2018: "9.31",
    value_2019: "8.97"
  },
  {
    name: "海信",
    value_2017: "9.10",
    value_2018: "9.28",
    value_2019: "9.18"
  },
  {
    name: "夏普",
    value_2017: "9.11",
    value_2018: "9.04",
    value_2019: "9.11"
  },
  {
    name: "小米",
    value_2017: "",
    value_2018: "9.09",
    value_2019: "9.16"
  },
  {
    name: "创维",
    value_2017: "8.84",
    value_2018: "9.06",
    value_2019: "8.79"
  },
  {
    name: "TCL",
    value_2017: "9.00",
    value_2018: "8.91",
    value_2019: "8.96"
  },
  {
    name: "海尔",
    value_2017: "8.98",
    value_2018: "9.04",
    value_2019: "8.88"
  }
];
// 根据2018年的值进行由大到小排序
function ranking_pr(arr) {
  for (var i = 0; i < arr.length; i++) {
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[i].value_2019 < arr[j].value_2019) {
        var linshi = arr[i];
        arr[i] = arr[j];
        arr[j] = linshi;
      }
    }
  }
  // console.log(arr);
  return arr;
}
// 整理为echarts格式数据
function getRanking(arr) {
  var arr_2017 = [], //[{name:海信，value：66.6，color:xx}]
    arr_2018 = [],
    arr_2019 = [],
    arr_name = [];
  [{}];
  for (var i = 0; i < arr.length; i++) {
    //遍历获取到每一个对象，对对象中的内容进行判断
    if (arr[i].name == "海信") {
      arr_2017.push({
        name: arr[i].name,
        value: arr[i].value_2017,
        color: "#a3e1d4"
      });
      arr_2018.push({
        name: arr[i].name,
        value: arr[i].value_2018,
        color: "#6dbccf"
      });
      arr_2019.push({
        name: arr[i].name,
        value: arr[i].value_2019,
        color: "#17b3a3"
      });
      arr_name.push({
        //存放名字的数组，
        value: arr[i].name + "\n" + (i + 1),
        textStyle: {
          lineHeight: 15
          // color: "#17b3a3",
          // fontSize: 15
        }
      });
    } else {
      arr_2017.push({
        name: arr[i].name,
        value: arr[i].value_2017,
        color: "#D3D3D3"
      });
      arr_2018.push({
        name: arr[i].name,
        value: arr[i].value_2018,
        color: "#A9A9A9"
      });
      arr_2019.push({
        name: arr[i].name,
        value: arr[i].value_2019,
        color: "#808080"
      });
      arr_name.push({
        value: arr[i].name + "\n" + (i + 1),
        textStyle: {
          lineHeight: 15,
          color: "#333"
        }
      });
    }
  }
  return { arr_2017, arr_2018, arr_2019, arr_name };
}
// ranking_pr(tv_arr);
//注释了点击是否折叠的按钮，和高度的改变折叠效果
var labelOption = {
  normal: {
    show: true,
    position: "top",
    distance: "12",
    align: "center",
    verticalAlign: "middle",
    rotate: 0,
    formatter: "{c}",
    fontSize: 12,
    rich: {
      name: {
        textBorderColor: "#fff"
      }
    }
  },
  grid: {
    left: "10%",
    right: "4%",
    bottom: "8%",
    containLabel: true
  }
};
import {
  tv_npsrepresentat,
  tv_npsattention,
  tableData1,
  tableData2,
  tv_npsData
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
      //上面的柱状图
      chartBar: null,
      // 下面的柱状图
      chartProduct: null,
      tv_arr: [
        {
          name: "索尼",
          value_2017: "9.29",
          value_2018: "9.32",
          value_2019: "9.27"
        },
        {
          name: "三星",
          value_2017: "9.33",
          value_2018: "9.31",
          value_2019: "8.97"
        },
        {
          name: "海信",
          value_2017: "9.10",
          value_2018: "9.28",
          value_2019: "9.18"
        },
        {
          name: "夏普",
          value_2017: "9.11",
          value_2018: "9.04",
          value_2019: "9.11"
        },
        {
          name: "小米",
          value_2017: "",
          value_2018: "9.09",
          value_2019: "9.16"
        },
        {
          name: "创维",
          value_2017: "8.84",
          value_2018: "9.06",
          value_2019: "8.79"
        },
        {
          name: "TCL",
          value_2017: "9.00",
          value_2018: "8.91",
          value_2019: "8.96"
        },
        {
          name: "海尔",
          value_2017: "8.98",
          value_2018: "9.04",
          value_2019: "8.88"
        }
      ],
      // tableData1Index: "",
      // tableData1: tableData1,
      // tableData2: tableData2,
      tv_npsrepresentat: tv_npsrepresentat,
      haixinData_x: [],
      tv_npsattention: tv_npsattention, //指标关注度
      data_lists: tv_npsData,
      percentArray: [
        3.5,
        3.0,
        5.8,
        4.5,
        4.5,
        3.8,
        1.8,
        1.3,
        1.2,
        0.8,
        0.8,
        0.3
      ],
      // 表格数据
      tableData: [
        {
          year: "19年",
          sony: "1",
          sanxing: "5",
          haixin: "2",
          xiapu: "4",
          xiaomi: "3",
          chuangwei: "8",
          tcl: "6",
          haier: "7"
        },
        {
          year: "18年",
          sony: "1",
          sanxing: "2",
          haixin: "3",
          xiapu: "6",
          xiaomi: "4",
          chuangwei: "5",
          tcl: "8",
          haier: "7"
        },
        {
          year: "17年",
          sony: "2",
          sanxing: "1",
          haixin: "4",
          xiapu: "3",
          xiaomi: "-",
          chuangwei: "7",
          tcl: "5",
          haier: "6"
        }
      ],

      // 下拉菜单数据
      options: [
        {
          value: "1",
          label: "图像质量"
        },
        {
          value: "2",
          label: "外观结构"
          // disabled: true
        },
        {
          value: "3",
          label: "反应速度"
        },
        {
          value: "4",
          label: "声音效果"
        },
        {
          value: "5",
          label: "智能应用"
        },
        {
          value: "6",
          label: "屏幕质量"
          // disabled: true
        },
        {
          value: "7",
          label: "遥控器体验"
        },
        {
          value: "8",
          label: "性能稳定性"
        },
        {
          value: "9",
          label: "产品规划"
          // disabled: true
        },
        {
          value: "10",
          label: "网络连接"
        },
        {
          value: "11",
          label: "内置部件/附件质量"
        },
        {
          value: "12",
          label: "操作便利性"
        }
      ],
      value: "1",
      //图像质量
      photo_arr: [
        {
          name: "索尼",
          value_2017: "9.29",
          value_2018: "9.32",
          value_2019: "9.27"
        },
        {
          name: "三星",
          value_2017: "9.33",
          value_2018: "9.31",
          value_2019: "8.97"
        },
        {
          name: "海信",
          value_2017: "9.10",
          value_2018: "9.28",
          value_2019: "9.18"
        },
        {
          name: "夏普",
          value_2017: "9.11",
          value_2018: "9.04",
          value_2019: "9.11"
        },
        {
          name: "小米",
          value_2017: "",
          value_2018: "9.09",
          value_2019: "9.16"
        },
        {
          name: "创维",
          value_2017: "8.84",
          value_2018: "9.06",
          value_2019: "8.79"
        },
        {
          name: "TCL",
          value_2017: "9.00",
          value_2018: "8.91",
          value_2019: "8.96"
        },
        {
          name: "海尔",
          value_2017: "8.98",
          value_2018: "9.04",
          value_2019: "8.88"
        }
      ],
      //外观结构
      aspect_arr: [
        {
          name: "索尼",
          value_2017: "9.28",
          value_2018: "9.35",
          value_2019: "9.13"
        },
        {
          name: "夏普",
          value_2017: "9.11",
          value_2018: "9.04",
          value_2019: "9.11"
        },

        {
          name: "三星",
          value_2017: "9.33",
          value_2018: "9.31",
          value_2019: "9.97"
        },
        {
          name: "海信",
          value_2017: "9.10",
          value_2018: "9.28",
          value_2019: "9.18"
        },

        {
          name: "小米",
          value_2017: "",
          value_2018: "9.09",
          value_2019: "9.16"
        },
        {
          name: "创维",
          value_2017: "8.84",
          value_2018: "9.06",
          value_2019: "8.79"
        },
        {
          name: "TCL",
          value_2017: "9.00",
          value_2018: "8.91",
          value_2019: "8.96"
        },
        {
          name: "海尔",
          value_2017: "8.98",
          value_2018: "9.04",
          value_2019: "8.88"
        }
      ],
      //反应速度
      reactionSpeed_arr: [
        {
          name: "三星",
          value_2017: "8.00",
          value_2018: "8.45",
          value_2019: "8.82"
        },
        {
          name: "海尔",
          value_2017: "7.59",
          value_2018: "8.90",
          value_2019: "8.77"
        },
        {
          name: "索尼",
          value_2017: "9.46",
          value_2018: "8.64",
          value_2019: "8.76"
        },
        {
          name: "夏普",
          value_2017: "7.41",
          value_2018: "8.49",
          value_2019: "8.62"
        },
        {
          name: "海信",
          value_2017: "8.13",
          value_2018: "8.61",
          value_2019: "8.61"
        },
        {
          name: "创维",
          value_2017: "8.06",
          value_2018: "8.45",
          value_2019: "8.70"
        },
        {
          name: "小米",
          value_2017: "-",
          value_2018: "8.75",
          value_2019: "8.65"
        },
        {
          name: "TCL",
          value_2017: "7.88",
          value_2018: "8.93",
          value_2019: "8.48"
        }
      ],
      //声音效果
      voice_arr: [
        {
          name: "索尼",
          value_2017: "9.00",
          value_2018: "8.78",
          value_2019: "8.53"
        },
        {
          name: "三星",
          value_2017: "8.09",
          value_2018: "8.81",
          value_2019: "8.84"
        },
        {
          name: "小米",
          value_2017: "-",
          value_2018: "8.46",
          value_2019: "8.64"
        },
        {
          name: "夏普",
          value_2017: "9.25",
          value_2018: "8.83",
          value_2019: "8.62"
        },

        {
          name: "创维",
          value_2017: "8.64",
          value_2018: "8.54",
          value_2019: "9.13"
        },
        {
          name: "TCL",
          value_2017: "9.63",
          value_2018: "8.26",
          value_2019: "8.41"
        },
        {
          name: "海尔",
          value_2017: "7.71",
          value_2018: "8.45",
          value_2019: "8.74"
        },
        {
          name: "海信",
          value_2017: "8.68",
          value_2018: "8.68",
          value_2019: "8.61"
        }
      ],
      //智能应用
      smart_arr: [
        {
          name: "三星",
          value_2017: "-",
          value_2018: "7.86",
          value_2019: "8.55"
        },

        {
          name: "索尼",
          value_2017: "-",
          value_2018: "8.21",
          value_2019: "8.62"
        },
        {
          name: "海信",
          value_2017: "-",
          value_2018: "8.33",
          value_2019: "8.56"
        },
        {
          name: "小米",
          value_2017: "-",
          value_2018: "7.42",
          value_2019: "8.24"
        },
        {
          name: "夏普",
          value_2017: "-",
          value_2018: "8.5",
          value_2019: "8.2"
        },
        {
          name: "创维",
          value_2017: "-",
          value_2018: "8.50",
          value_2019: "8.20"
        },
        {
          name: "TCL",
          value_2017: "-",
          value_2018: "8.00",
          value_2019: "8.73"
        },
        {
          name: "海尔",
          value_2017: "-",
          value_2018: "8.75",
          value_2019: "8.42"
        }
      ],
      //屏幕质量
      screen_arr: [
        {
          name: "索尼",
          value_2017: "9.19",
          value_2018: "8.56",
          value_2019: "8.18"
        },
        {
          name: "三星",
          value_2017: "9.09",
          value_2018: "8.20",
          value_2019: "8.20"
        },
        {
          name: "海信",
          value_2017: "9.00",
          value_2018: "8.00",
          value_2019: "7.53"
        },
        {
          name: "夏普",
          value_2017: "9.06",
          value_2018: "7.66",
          value_2019: "7.57"
        },
        {
          name: "小米",
          value_2017: "-",
          value_2018: "8.82",
          value_2019: "7.38"
        },
        {
          name: "创维",
          value_2017: "8.89",
          value_2018: "7.77",
          value_2019: "7.43"
        },
        {
          name: "TCL",
          value_2017: "8.22",
          value_2018: "8.27",
          value_2019: "8.16"
        },
        {
          name: "海尔",
          value_2017: "9.00",
          value_2018: "7.39",
          value_2019: "8.04"
        }
      ],
      //遥控器体验
      control_arr: [
        {
          name: "索尼",
          value_2017: "6.50",
          value_2018: "8.19",
          value_2019: "8.63"
        },
        {
          name: "三星",
          value_2017: "8.50",
          value_2018: "8.72",
          value_2019: "8.77"
        },
        {
          name: "夏普",
          value_2017: "8.63",
          value_2018: "8.35",
          value_2019: "8.63"
        },
        {
          name: "小米",
          value_2017: "-",
          value_2018: "8.52",
          value_2019: "9.00"
        },
        {
          name: "海信",
          value_2017: "7.10",
          value_2018: "8.32",
          value_2019: "8.58"
        },
        {
          name: "创维",
          value_2017: "7.17",
          value_2018: "8.34",
          value_2019: "8.55"
        },
        {
          name: "TCL",
          value_2017: "4.67",
          value_2018: "8.17",
          value_2019: "8.40"
        },
        {
          name: "海尔",
          value_2017: "6.00",
          value_2018: "8.33",
          value_2019: "7.75"
        }
      ],
      //性能稳定性
      performance_arr: [
        {
          name: "索尼",
          value_2017: "9.22",
          value_2018: "9.12",
          value_2019: "8.40"
        },
        {
          name: "三星",
          value_2017: "9.06",
          value_2018: "8.47",
          value_2019: "8.55"
        },
        {
          name: "海信",
          value_2017: "9.00",
          value_2018: "9.05",
          value_2019: "8.45"
        },
        {
          name: "夏普",
          value_2017: "8.70",
          value_2018: "8.93",
          value_2019: "8.50"
        },
        {
          name: "小米",
          value_2017: "-",
          value_2018: "8.56",
          value_2019: "8.55"
        },
        {
          name: "创维",
          value_2017: "8.13",
          value_2018: "8.22",
          value_2019: "7.58"
        },
        {
          name: "TCL",
          value_2017: "8.77",
          value_2018: "8.30",
          value_2019: "8.28"
        },
        {
          name: "海尔",
          value_2017: "8.54",
          value_2018: "8.48",
          value_2019: "8.14"
        }
      ],
      //产品规划
      productPlan_arr: [
        {
          name: "索尼",
          value_2017: "9.50",
          value_2018: "9.00",
          value_2019: "8.00"
        },
        {
          name: "三星",
          value_2017: "8.50",
          value_2018: "8.80",
          value_2019: "9.57"
        },
        {
          name: "海信",
          value_2017: "8.00",
          value_2018: "8.75",
          value_2019: "8.31"
        },
        {
          name: "夏普",
          value_2017: "8.67",
          value_2018: "9.25",
          value_2019: "8.80"
        },
        {
          name: "小米",
          value_2017: "-",
          value_2018: "7.50",
          value_2019: "8.40"
        },
        {
          name: "创维",
          value_2017: "9.00",
          value_2018: "8.40",
          value_2019: "8.50"
        },
        {
          name: "TCL",
          value_2017: "9.75",
          value_2018: "9.13",
          value_2019: "8.80"
        },
        {
          name: "海尔",
          value_2017: "8.00",
          value_2018: "9.00",
          value_2019: "8.43"
        }
      ],
      //网络连接
      network_arr: [
        {
          name: "索尼",
          value_2017: "7.00",
          value_2018: "-",
          value_2019: "8.40"
        },
        {
          name: "三星",
          value_2017: "6.33",
          value_2018: "-",
          value_2019: "9.00"
        },
        {
          name: "夏普",
          value_2017: "8.60",
          value_2018: "8.20",
          value_2019: "9.08"
        },
        {
          name: "小米",
          value_2017: "-",
          value_2018: "7.20",
          value_2019: "8.56"
        },
        {
          name: "创维",
          value_2017: "-",
          value_2018: "9.00",
          value_2019: "8.33"
        },
        {
          name: "TCL",
          value_2017: "7.67",
          value_2018: "7.00",
          value_2019: "7.00"
        },
        {
          name: "海尔",
          value_2017: "7.60",
          value_2018: "10.00",
          value_2019: "8.43"
        },
        {
          name: "海信",
          value_2017: "8.00",
          value_2018: "9.00",
          value_2019: "8.36"
        }
      ],
      //内部组件/附件质量
      inside_arr: [
        {
          name: "索尼",
          value_2017: "8.79",
          value_2018: "9.00",
          value_2019: "8.50"
        },
        {
          name: "三星",
          value_2017: "8.86",
          value_2018: "8.50",
          value_2019: "8.25"
        },
        {
          name: "海信",
          value_2017: "8.93",
          value_2018: "7.63",
          value_2019: "8.60"
        },
        {
          name: "夏普",
          value_2017: "8.53",
          value_2018: "8.50",
          value_2019: "7.71"
        },
        {
          name: "小米",
          value_2017: "-",
          value_2018: "9.50",
          value_2019: "9.40"
        },
        {
          name: "创维",
          value_2017: "9.25",
          value_2018: "7.00",
          value_2019: "6.60"
        },
        {
          name: "TCL",
          value_2017: "9.04",
          value_2018: "7.75",
          value_2019: "8.33"
        },
        {
          name: "海尔",
          value_2017: "8.48",
          value_2018: "",
          value_2019: "7.75"
        }
      ],
      //操作便利性
      handle_arr: [
        {
          name: "索尼",
          value_2017: "8.00",
          value_2018: "9.38",
          value_2019: "8.60"
        },
        {
          name: "三星",
          value_2017: "6.50",
          value_2018: "9.11",
          value_2019: "9.50"
        },
        {
          name: "海信",
          value_2017: "8.28",
          value_2018: "9.40",
          value_2019: "8.86"
        },
        {
          name: "夏普",
          value_2017: "7.13",
          value_2018: "9.00",
          value_2019: "7.67"
        },
        {
          name: "小米",
          value_2017: "-",
          value_2018: "8.93",
          value_2019: "8.71"
        },
        {
          name: "创维",
          value_2017: "7.44",
          value_2018: "8.54",
          value_2019: "9.33"
        },
        {
          name: "TCL",
          value_2017: "5.67",
          value_2018: "9.27",
          value_2019: "9.17"
        },
        {
          name: "海尔",
          value_2017: "9.00",
          value_2018: "8.75",
          value_2019: "8.50"
        }
      ],

      //下面柱状图配置信息
      chartOptions: {
        // color: ["#6A5ACD", "#DC143C", "#90EE90"],
        //提示框组件(有两个属性如下) https://www.echartsjs.com/zh/option.html#tooltip
        tooltip: {
          //指定为axis(坐标轴触发)
          trigger: "axis",
          //是配置坐标轴指示器的快捷方式
          axisPointer: {
            type: "cross",
            crossStyle: {
              color: "#999"
            }
          }
        },
        //工具栏
        toolbox: {
          feature: {
            dataView: { show: true, readOnly: false },
            magicType: { show: true, type: ["line", "bar"] },
            restore: { show: true },
            saveAsImage: { show: true }
          }
        },
        //图例组件，就是图上方的信息
        legend: {
          default: "left"
        },
        //x轴上的配置
        xAxis: [
          {
            type: "category", //category离散的类型
            data: ["电视", "冰箱", "空调", "洗衣机", "手机"],
            axisPointer: {
              type: "shadow"
            },
            // 是否显示坐标刻度
            name: "品牌NPS表现位",
            axisTick: {
              show: false
            }
          }
        ],
        //y轴上的配置
        yAxis: [
          {
            type: "value",
            name: "表现均值",
            min: 35, //最大值会根据数据自动的显示
            // max: 70,
            // interval: 20,
            //坐标轴刻度标签的相关设置。
            axisLabel: {
              formatter: "{value}"
            },
            //是否显示坐标轴刻度
            axisTick: {
              show: false
            }
          }
        ],
        //系列列表，本图表中有三个系列，系列的个数由series.name(配置对象的个数)决定，
        //series中的对象个数和legend中的data数组中的个数有关
        series: [
          {
            name: "2016",
            type: "bar",
            label: labelOption,
            // 2016年的数据
            data: [57.4, 53.2, 51.2, 56.0, 40.2]
          },
          {
            name: "2017",
            type: "bar",
            label: labelOption,
            // 2017年的数据
            data: [55.2, 54.0, 55.8, 60.2, 49.8]
          },
          {
            name: "2018",
            type: "bar",
            label: labelOption,
            // 2018年的数据
            data: [59.1, 58.5, 65.5, 80.6, 64.7]
          }
        ]
      },
      xAxis: [
        {
          type: "category",
          // data中this的指向是当前的组件，那么在外面定义的方法this指向的是window
          data: getRanking(ranking_pr(tv_arr)).arr_name,
          axisPointer: {
            type: "shadow"
          },
          name: "品牌NPS排位",
          nameLocation: "start",
          nameTextStyle: {
            fontSize: 12,
            verticalAlign: "top",
            lineHeight: 40,
            align: "center",
            padding: [10, 10, 0, 0]
          },
          axisTick: {
            show: false
          }
        }
      ],
      series: [
        {
          name: "2017",
          type: "bar",
          // data:[ 58.8, 65.6, 66.6, 53.7, "","51.0",55.0,"51.0"],
          data: getRanking(ranking_pr(tv_arr)).arr_2017,
          // barWidth:10,
          label: labelOption,
          itemStyle: {
            normal: {
              color: function(params) {
                // var colorList = ['#a3e1d4','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9'];
                //  return colorList[params.dataIndex]
                return getRanking(ranking_pr(tv_arr)).arr_2017[params.dataIndex]
                  .color;
              }
            }
          }
        },
        {
          name: "2018",
          type: "bar",
          // data:[ 58.3, 60.6, 67.2, 52.5, "",50.3,48.4,49.3],
          data: getRanking(ranking_pr(tv_arr)).arr_2018,
          label: labelOption,
          itemStyle: {
            normal: {
              color: function(params) {
                // var colorList = ['#6dbccf','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9'];
                // return colorList[params.dataIndex]
                return getRanking(ranking_pr(tv_arr)).arr_2018[params.dataIndex]
                  .color;
              }
            }
          }
        },
        {
          name: "2019",
          type: "bar",
          // data:[ 62.4, 63.7, 66.0, 58.1, 56.5,55.9,54.1,56.3],
          data: getRanking(ranking_pr(tv_arr)).arr_2019,
          label: labelOption,
          itemStyle: {
            normal: {
              color: function(params) {
                // var colorList = ['#17b3a3','#808080','#808080','#808080','#808080','#808080','#808080','#808080','#808080','#808080'];
                // return colorList[params.dataIndex]
                return getRanking(ranking_pr(tv_arr)).arr_2019[params.dataIndex]
                  .color;
              }
            }
          }
        }
        // {
        //     name:'2019总体NPS',
        //     // yAxisIndex: 1,
        //     type:'line',
        //     data:[ 45,45,45,45,45,45,45,45] ,
        //     itemStyle: {normal: {color: '#6dbccf'}}
        // }
      ],
      legend: {
        data: ["2017", "2018", "2019"]
      },
      yAxis: [
        {
          type: "value",
          name: "表现均值",
          min: 2,
          max: 12,
          // interval: 20,
          axisLabel: {
            formatter: "{value}"
          },
          axisTick: {
            show: false
          }
        }
        // {
        //     type: 'value',
        //     name: 'NPS差值',
        //     min: 0,
        //     max: 100,
        //     interval: 20,
        //     axisLabel: {
        //         formatter: '{value} %'
        //     }
        // }
      ]
    };
  },
  created() {
    var that = this;

    for (var a = 0; a < this.data_lists.length; a++) {
      that.data_lists[a].tableData = ranking(that.data_lists[a].tableData);
      that.data_lists[a].tableDataIndex = ranking_index(
        that.data_lists[a].tableData
      );
    }

    // this.tableData1 = ranking(that.tableData1);
    // this.tableData1Index = ranking_index(that.tableData1);
    // this.tableData2 = ranking(that.tableData2);
    // this.tableData2Index = ranking_index(that.tableData2);

    this.tv_npsattention = ranking(that.tv_npsattention);
    this.tv_npsrepresentat = getData2(tv_npsattention, that.tv_npsrepresentat);
    this.haixinData_x = getData_x(that.tv_npsrepresentat, [
      "\n" +
        that.data_lists[0].tableDataIndex +
        "\n" +
        that.percentArray[0] +
        "%",
      "\n" +
        that.data_lists[1].tableDataIndex +
        "\n" +
        that.percentArray[1] +
        "%",
      "\n" +
        that.data_lists[2].tableDataIndex +
        "\n" +
        that.percentArray[2] +
        "%",
      "\n" +
        that.data_lists[3].tableDataIndex +
        "\n" +
        that.percentArray[3] +
        "%",
      "\n" +
        that.data_lists[4].tableDataIndex +
        "\n" +
        that.percentArray[4] +
        "%",
      "\n" +
        that.data_lists[5].tableDataIndex +
        "\n" +
        that.percentArray[5] +
        "%",
      "\n" +
        that.data_lists[6].tableDataIndex +
        "\n" +
        that.percentArray[6] +
        "%",
      "\n" +
        that.data_lists[7].tableDataIndex +
        "\n" +
        that.percentArray[7] +
        "%",
      "\n" +
        that.data_lists[8].tableDataIndex +
        "\n" +
        that.percentArray[8] +
        "%",
      "\n" +
        that.data_lists[9].tableDataIndex +
        "\n" +
        that.percentArray[9] +
        "%",
      "\n" +
        that.data_lists[10].tableDataIndex +
        "\n" +
        that.percentArray[10] +
        "%",
      "\n" +
        that.data_lists[11].tableDataIndex +
        "\n" +
        that.percentArray[11] +
        "%"
    ]);
  },
  mounted() {
    this.initChartBar();
    this.initProductChart();
    // console.log(this.haixinData_x)
  },
  activated() {
    // 由于给echart添加了resize事件, 在组件激活时需要重新resize绘画一次, 否则出现空白bug
    if (this.chartBar) {
      this.chartBar.resize();
    }
    if (this.chartProduct) {
      this.chartProduct.resize();
    }
  },

  methods: {
    // 柱状图

    initChartBar() {
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
            name: "表现值品牌对比排位" + "\n" + "不推荐(0-8分)占比",
            nameLocation: "start",
            nameTextStyle: {
              // fontWeight: "bold",
              fontSize: 10,
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
            //在x轴数据过多时，不让其交叉显示省略内容
            axisLabel: {
              interval: 0
              // rotate:"45"
            },
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
            // min: ,
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
            barWidth: "60%",
            data: that.tv_npsrepresentat,
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
            data: that.tv_npsattention //[25, 14, 10, 10, 3, 10, 7]
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
    },
    initProductChart() {
      let option = { ...this.chartOptions };
      option.xAxis = this.xAxis;
      option.series = this.series;

      option.legend = this.legend;
      option.yAxis = this.yAxis;
      this.chartProduct = echarts.init(document.getElementById("chartProduct"));
      this.chartProduct.setOption(option, true);
      window.addEventListener("resize", () => {
        this.chartProduct.resize();
        // console.log("1111");
      });
    },
    //切换select内容
    currentChange(index) {
      // console.log(typeof index)
      console.log(index);
      if (index == "1") {
        // console.log(sdf)
        this.xAxis = [
          {
            type: "category",
            // data中this的指向是当前的组件，那么在外面定义的方法this指向的是window
            data: getRanking(ranking_pr(tv_arr)).arr_name,
            axisPointer: {
              type: "shadow"
            },
            name: "品牌NPS排位",
            nameLocation: "start",
            nameTextStyle: {
              fontSize: 12,
              verticalAlign: "top",
              lineHeight: 40,
              align: "center",
              padding: [10, 10, 0, 0]
            },
            axisTick: {
              show: false
            }
          }
        ];
        this.series = [
          {
            name: "2017",
            type: "bar",
            // data:[ 58.8, 65.6, 66.6, 53.7, "","51.0",55.0,"51.0"],
            data: getRanking(ranking_pr(tv_arr)).arr_2017,
            // barWidth:10,
            label: labelOption,
            itemStyle: {
              normal: {
                color: function(params) {
                  // var colorList = ['#a3e1d4','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9'];
                  //  return colorList[params.dataIndex]
                  return getRanking(ranking_pr(tv_arr)).arr_2017[
                    params.dataIndex
                  ].color;
                }
              }
            }
          },
          {
            name: "2018",
            type: "bar",
            // data:[ 58.3, 60.6, 67.2, 52.5, "",50.3,48.4,49.3],
            data: getRanking(ranking_pr(tv_arr)).arr_2018,
            label: labelOption,
            itemStyle: {
              normal: {
                color: function(params) {
                  // var colorList = ['#6dbccf','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9'];
                  // return colorList[params.dataIndex]
                  return getRanking(ranking_pr(tv_arr)).arr_2018[
                    params.dataIndex
                  ].color;
                }
              }
            }
          },
          {
            name: "2019",
            type: "bar",
            // data:[ 62.4, 63.7, 66.0, 58.1, 56.5,55.9,54.1,56.3],
            data: getRanking(ranking_pr(tv_arr)).arr_2019,
            label: labelOption,
            itemStyle: {
              normal: {
                color: function(params) {
                  // var colorList = ['#17b3a3','#808080','#808080','#808080','#808080','#808080','#808080','#808080','#808080','#808080'];
                  // return colorList[params.dataIndex]
                  return getRanking(ranking_pr(tv_arr)).arr_2019[
                    params.dataIndex
                  ].color;
                }
              }
            }
          }
          // {
          //     name:'2019总体NPS',
          //     // yAxisIndex: 1,
          //     type:'line',
          //     data:[ 45,45,45,45,45,45,45,45] ,
          //     itemStyle: {normal: {color: '#6dbccf'}}
          // }
        ];
        this.tableData = [
          {
            year: "19年",
            sony: "1",
            sanxing: "5",
            haixin: "2",
            xiapu: "4",
            xiaomi: "3",
            chuangwei: "8",
            tcl: "6",
            haier: "7"
          },
          {
            year: "18年",
            sony: "1",
            sanxing: "2",
            haixin: "3",
            xiapu: "6",
            xiaomi: "4",
            chuangwei: "5",
            tcl: "8",
            haier: "7"
          },
          {
            year: "17年",
            sony: "2",
            sanxing: "1",
            haixin: "4",
            xiapu: "3",
            xiaomi: "-",
            chuangwei: "7",
            tcl: "5",
            haier: "6"
          }
        ];
      } else if (index == "2") {
        this.xAxis = [
          {
            type: "category",
            // data: ['海信','三星','索尼','夏普','小米','TCL','海尔','创维'],
            data: getRanking(ranking_pr(this.aspect_arr)).arr_name,
            axisPointer: {
              type: "shadow"
            },
            name: "品牌NPS排位",
            nameLocation: "start",
            nameTextStyle: {
              fontSize: 12,
              verticalAlign: "top",
              lineHeight: 40,
              align: "center",
              padding: [10, 10, 0, 0]
            },
            axisTick: {
              show: false
            }
          }
        ];
        this.series = [
          {
            name: "2017",
            type: "bar",
            // data:[ 58.8, 65.6, 66.6, 53.7, "","51.0",55.0,"51.0"],
            data: getRanking(ranking_pr(this.aspect_arr)).arr_2017,
            label: labelOption,
            itemStyle: {
              normal: {
                color: params => {
                  console.log(this);
                  // var colorList = ['#a3e1d4','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9'];
                  //  return colorList[params.dataIndex]
                  return getRanking(ranking_pr(this.aspect_arr)).arr_2017[
                    params.dataIndex
                  ].color;
                }
              }
            }
          },
          {
            name: "2018",
            type: "bar",
            // data:[ 58.3, 60.6, 67.2, 52.5, "",50.3,48.4,49.3],
            data: getRanking(ranking_pr(this.aspect_arr)).arr_2018,
            label: labelOption,
            itemStyle: {
              normal: {
                color: params => {
                  // var colorList = ['#6dbccf','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9'];
                  // return colorList[params.dataIndex]
                  return getRanking(ranking_pr(this.aspect_arr)).arr_2018[
                    params.dataIndex
                  ].color;
                }
              }
            }
          },
          {
            name: "2019",
            type: "bar",
            // data:[ 62.4, 63.7, 66.0, 58.1, 56.5,55.9,54.1,56.3],
            data: getRanking(ranking_pr(this.aspect_arr)).arr_2019,
            label: labelOption,
            itemStyle: {
              normal: {
                color: params => {
                  // var colorList = ['#17b3a3','#808080','#808080','#808080','#808080','#808080','#808080','#808080','#808080','#808080'];
                  // return colorList[params.dataIndex]
                  return getRanking(ranking_pr(this.aspect_arr)).arr_2019[
                    params.dataIndex
                  ].color;
                }
              }
            }
          }
        ];
        this.tableData = [
          {
            year: "19年",
            sony: "4",
            sanxing: "6",
            haixin: "2",
            xiapu: "5",
            xiaomi: "7",
            chuangwei: "1",
            tcl: "3",
            haier: "8"
          },
          {
            year: "18年",
            sony: "2",
            sanxing: "3",
            haixin: "4",
            xiapu: "6",
            xiaomi: "8",
            chuangwei: "7",
            tcl: "5",
            haier: "1"
          },
          {
            year: "17年",
            sony: "3",
            sanxing: "1",
            haixin: "5",
            xiapu: "2",
            xiaomi: "-",
            chuangwei: "6",
            tcl: "4",
            haier: "7"
          }
        ];
      } else if (index == "3") {
        this.xAxis = [
          {
            type: "category",
            // data: ['海信','三星','索尼','夏普','小米','TCL','海尔','创维'],
            data: getRanking(ranking_pr(this.reactionSpeed_arr)).arr_name,
            axisPointer: {
              type: "shadow"
            },
            name: "品牌NPS排位",
            nameLocation: "start",
            nameTextStyle: {
              fontSize: 12,
              verticalAlign: "top",
              lineHeight: 40,
              align: "center",
              padding: [10, 10, 0, 0]
            },
            axisTick: {
              show: false
            }
          }
        ];
        this.series = [
          {
            name: "2017",
            type: "bar",
            // data:[ 58.8, 65.6, 66.6, 53.7, "","51.0",55.0,"51.0"],
            data: getRanking(ranking_pr(this.reactionSpeed_arr)).arr_2017,
            label: labelOption,
            itemStyle: {
              normal: {
                color: params => {
                  console.log(this);
                  // var colorList = ['#a3e1d4','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9'];
                  //  return colorList[params.dataIndex]
                  return getRanking(ranking_pr(this.reactionSpeed_arr))
                    .arr_2017[params.dataIndex].color;
                }
              }
            }
          },
          {
            name: "2018",
            type: "bar",
            // data:[ 58.3, 60.6, 67.2, 52.5, "",50.3,48.4,49.3],
            data: getRanking(ranking_pr(this.reactionSpeed_arr)).arr_2018,
            label: labelOption,
            itemStyle: {
              normal: {
                color: params => {
                  // var colorList = ['#6dbccf','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9'];
                  // return colorList[params.dataIndex]
                  return getRanking(ranking_pr(this.reactionSpeed_arr))
                    .arr_2018[params.dataIndex].color;
                }
              }
            }
          },
          {
            name: "2019",
            type: "bar",
            // data:[ 62.4, 63.7, 66.0, 58.1, 56.5,55.9,54.1,56.3],
            data: getRanking(ranking_pr(this.reactionSpeed_arr)).arr_2019,
            label: labelOption,
            itemStyle: {
              normal: {
                color: params => {
                  // var colorList = ['#17b3a3','#808080','#808080','#808080','#808080','#808080','#808080','#808080','#808080','#808080'];
                  // return colorList[params.dataIndex]
                  return getRanking(ranking_pr(this.reactionSpeed_arr))
                    .arr_2019[params.dataIndex].color;
                }
              }
            }
          }
        ];
        this.tableData = [
          {
            year: "19年",
            sony: "3",
            sanxing: "1",
            haixin: "7",
            xiapu: "6",
            xiaomi: "5",
            chuangwei: "4",
            tcl: "8",
            haier: "2"
          },
          {
            year: "18年",
            sony: "4",
            sanxing: "7",
            haixin: "5",
            xiapu: "6",
            xiaomi: "3",
            chuangwei: "7",
            tcl: "1",
            haier: "2"
          },
          {
            year: "17年",
            sony: "1",
            sanxing: "4",
            haixin: "2",
            xiapu: "7",
            xiaomi: "-",
            chuangwei: "3",
            tcl: "5",
            haier: "6"
          }
        ];
      } else if (index == "4") {
        this.xAxis = [
          {
            type: "category",
            // data: ['海信','三星','索尼','夏普','小米','TCL','海尔','创维'],
            data: getRanking(ranking_pr(this.voice_arr)).arr_name,
            axisPointer: {
              type: "shadow"
            },
            name: "品牌NPS排位",
            nameLocation: "start",
            nameTextStyle: {
              fontSize: 12,
              verticalAlign: "top",
              lineHeight: 40,
              align: "center",
              padding: [10, 10, 0, 0]
            },
            axisTick: {
              show: false
            }
          }
        ];
        this.series = [
          {
            name: "2017",
            type: "bar",
            // data:[ 58.8, 65.6, 66.6, 53.7, "","51.0",55.0,"51.0"],
            data: getRanking(ranking_pr(this.voice_arr)).arr_2017,
            label: labelOption,
            itemStyle: {
              normal: {
                color: params => {
                  console.log(this);
                  // var colorList = ['#a3e1d4','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9'];
                  //  return colorList[params.dataIndex]
                  return getRanking(ranking_pr(this.voice_arr)).arr_2017[
                    params.dataIndex
                  ].color;
                }
              }
            }
          },
          {
            name: "2018",
            type: "bar",
            // data:[ 58.3, 60.6, 67.2, 52.5, "",50.3,48.4,49.3],
            data: getRanking(ranking_pr(this.voice_arr)).arr_2018,
            label: labelOption,
            itemStyle: {
              normal: {
                color: params => {
                  // var colorList = ['#6dbccf','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9'];
                  // return colorList[params.dataIndex]
                  return getRanking(ranking_pr(this.voice_arr)).arr_2018[
                    params.dataIndex
                  ].color;
                }
              }
            }
          },
          {
            name: "2019",
            type: "bar",
            // data:[ 62.4, 63.7, 66.0, 58.1, 56.5,55.9,54.1,56.3],
            data: getRanking(ranking_pr(this.voice_arr)).arr_2019,
            label: labelOption,
            itemStyle: {
              normal: {
                color: params => {
                  // var colorList = ['#17b3a3','#808080','#808080','#808080','#808080','#808080','#808080','#808080','#808080','#808080'];
                  // return colorList[params.dataIndex]
                  return getRanking(ranking_pr(this.voice_arr)).arr_2019[
                    params.dataIndex
                  ].color;
                }
              }
            }
          }
        ];
        this.tableData = [
          {
            year: "19年",
            sony: "7",
            sanxing: "2",
            haixin: "6",
            xiapu: "5",
            xiaomi: "4",
            chuangwei: "1",
            tcl: "8",
            haier: "3"
          },
          {
            year: "18年",
            sony: "3",
            sanxing: "2",
            haixin: "4",
            xiapu: "1",
            xiaomi: "6",
            chuangwei: "5",
            tcl: "8",
            haier: "7"
          },
          {
            year: "17年",
            sony: "3",
            sanxing: "6",
            haixin: "4",
            xiapu: "2",
            xiaomi: "-",
            chuangwei: "5",
            tcl: "1",
            haier: "7"
          }
        ];
      } else if (index == "5") {
        this.xAxis = [
          {
            type: "category",
            // data: ['海信','三星','索尼','夏普','小米','TCL','海尔','创维'],
            data: getRanking(ranking_pr(this.smart_arr)).arr_name,
            axisPointer: {
              type: "shadow"
            },
            name: "品牌NPS排位",
            nameLocation: "start",
            nameTextStyle: {
              fontSize: 12,
              verticalAlign: "top",
              lineHeight: 40,
              align: "center",
              padding: [10, 10, 0, 0]
            },
            axisTick: {
              show: false
            }
          }
        ];
        this.series = [
          {
            name: "2017",
            type: "bar",
            // data:[ 58.8, 65.6, 66.6, 53.7, "","51.0",55.0,"51.0"],
            data: getRanking(ranking_pr(this.smart_arr)).arr_2017,
            label: labelOption,
            itemStyle: {
              normal: {
                color: params => {
                  console.log(this);
                  // var colorList = ['#a3e1d4','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9'];
                  //  return colorList[params.dataIndex]
                  return getRanking(ranking_pr(this.smart_arr)).arr_2017[
                    params.dataIndex
                  ].color;
                }
              }
            }
          },
          {
            name: "2018",
            type: "bar",
            // data:[ 58.3, 60.6, 67.2, 52.5, "",50.3,48.4,49.3],
            data: getRanking(ranking_pr(this.smart_arr)).arr_2018,
            label: labelOption,
            itemStyle: {
              normal: {
                color: params => {
                  // var colorList = ['#6dbccf','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9'];
                  // return colorList[params.dataIndex]
                  return getRanking(ranking_pr(this.smart_arr)).arr_2018[
                    params.dataIndex
                  ].color;
                }
              }
            }
          },
          {
            name: "2019",
            type: "bar",
            // data:[ 62.4, 63.7, 66.0, 58.1, 56.5,55.9,54.1,56.3],
            data: getRanking(ranking_pr(this.smart_arr)).arr_2019,
            label: labelOption,
            itemStyle: {
              normal: {
                color: params => {
                  // var colorList = ['#17b3a3','#808080','#808080','#808080','#808080','#808080','#808080','#808080','#808080','#808080'];
                  // return colorList[params.dataIndex]
                  return getRanking(ranking_pr(this.smart_arr)).arr_2019[
                    params.dataIndex
                  ].color;
                }
              }
            }
          }
        ];
        this.tableData = [
          {
            year: "19年",
            sony: "2",
            sanxing: "4",
            haixin: "3",
            xiapu: "7",
            xiaomi: "6",
            chuangwei: "8",
            tcl: "1",
            haier: "5"
          },
          {
            year: "18年",
            sony: "5",
            sanxing: "7",
            haixin: "3",
            xiapu: "2",
            xiaomi: "8",
            chuangwei: "4",
            tcl: "6",
            haier: "1"
          },
          {
            year: "17年",
            sony: "-",
            sanxing: "-",
            haixin: "-",
            xiapu: "-",
            xiaomi: "-",
            chuangwei: "-",
            tcl: "-",
            haier: "-"
          }
        ];
      } else if (index == "6") {
        this.xAxis = [
          {
            type: "category",
            // data: ['海信','三星','索尼','夏普','小米','TCL','海尔','创维'],
            data: getRanking(ranking_pr(this.screen_arr)).arr_name,
            axisPointer: {
              type: "shadow"
            },
            name: "品牌NPS排位",
            nameLocation: "start",
            nameTextStyle: {
              fontSize: 12,
              verticalAlign: "top",
              lineHeight: 40,
              align: "center",
              padding: [10, 10, 0, 0]
            },
            axisTick: {
              show: false
            }
          }
        ];
        this.series = [
          {
            name: "2017",
            type: "bar",
            // data:[ 58.8, 65.6, 66.6, 53.7, "","51.0",55.0,"51.0"],
            data: getRanking(ranking_pr(this.screen_arr)).arr_2017,
            label: labelOption,
            itemStyle: {
              normal: {
                color: params => {
                  // console.log(this);
                  // var colorList = ['#a3e1d4','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9'];
                  //  return colorList[params.dataIndex]
                  return getRanking(ranking_pr(this.screen_arr)).arr_2017[
                    params.dataIndex
                  ].color;
                }
              }
            }
          },
          {
            name: "2018",
            type: "bar",
            // data:[ 58.3, 60.6, 67.2, 52.5, "",50.3,48.4,49.3],
            data: getRanking(ranking_pr(this.screen_arr)).arr_2018,
            label: labelOption,
            itemStyle: {
              normal: {
                color: params => {
                  // var colorList = ['#6dbccf','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9'];
                  // return colorList[params.dataIndex]
                  return getRanking(ranking_pr(this.screen_arr)).arr_2018[
                    params.dataIndex
                  ].color;
                }
              }
            }
          },
          {
            name: "2019",
            type: "bar",
            // data:[ 62.4, 63.7, 66.0, 58.1, 56.5,55.9,54.1,56.3],
            data: getRanking(ranking_pr(this.screen_arr)).arr_2019,
            label: labelOption,
            itemStyle: {
              normal: {
                color: params => {
                  // var colorList = ['#17b3a3','#808080','#808080','#808080','#808080','#808080','#808080','#808080','#808080','#808080'];
                  // return colorList[params.dataIndex]
                  return getRanking(ranking_pr(this.screen_arr)).arr_2019[
                    params.dataIndex
                  ].color;
                }
              }
            }
          }
        ];
        this.tableData = [
          {
            year: "19年",
            sony: "2",
            sanxing: "1",
            haixin: "6",
            xiapu: "5",
            xiaomi: "8",
            chuangwei: "7",
            tcl: "3",
            haier: "4"
          },
          {
            year: "18年",
            sony: "2",
            sanxing: "4",
            haixin: "5",
            xiapu: "7",
            xiaomi: "1",
            chuangwei: "6",
            tcl: "3",
            haier: "8"
          },
          {
            year: "17年",
            sony: "1",
            sanxing: "2",
            haixin: "4",
            xiapu: "3",
            xiaomi: "-",
            chuangwei: "6",
            tcl: "7",
            haier: "4"
          }
        ];
      } else if (index == "7") {
        this.xAxis = [
          {
            type: "category",
            // data: ['海信','三星','索尼','夏普','小米','TCL','海尔','创维'],
            data: getRanking(ranking_pr(this.control_arr)).arr_name,
            axisPointer: {
              type: "shadow"
            },
            name: "品牌NPS排位",
            nameLocation: "start",
            nameTextStyle: {
              fontSize: 12,
              verticalAlign: "top",
              lineHeight: 40,
              align: "center",
              padding: [10, 10, 0, 0]
            },
            axisTick: {
              show: false
            }
          }
        ];
        this.series = [
          {
            name: "2017",
            type: "bar",
            // data:[ 58.8, 65.6, 66.6, 53.7, "","51.0",55.0,"51.0"],
            data: getRanking(ranking_pr(this.control_arr)).arr_2017,
            label: labelOption,
            itemStyle: {
              normal: {
                color: params => {
                  console.log(this);
                  // var colorList = ['#a3e1d4','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9'];
                  //  return colorList[params.dataIndex]
                  return getRanking(ranking_pr(this.control_arr)).arr_2017[
                    params.dataIndex
                  ].color;
                }
              }
            }
          },
          {
            name: "2018",
            type: "bar",
            // data:[ 58.3, 60.6, 67.2, 52.5, "",50.3,48.4,49.3],
            data: getRanking(ranking_pr(this.control_arr)).arr_2018,
            label: labelOption,
            itemStyle: {
              normal: {
                color: params => {
                  // var colorList = ['#6dbccf','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9'];
                  // return colorList[params.dataIndex]
                  return getRanking(ranking_pr(this.control_arr)).arr_2018[
                    params.dataIndex
                  ].color;
                }
              }
            }
          },
          {
            name: "2019",
            type: "bar",
            // data:[ 62.4, 63.7, 66.0, 58.1, 56.5,55.9,54.1,56.3],
            data: getRanking(ranking_pr(this.control_arr)).arr_2019,
            label: labelOption,
            itemStyle: {
              normal: {
                color: params => {
                  // var colorList = ['#17b3a3','#808080','#808080','#808080','#808080','#808080','#808080','#808080','#808080','#808080'];
                  // return colorList[params.dataIndex]
                  return getRanking(ranking_pr(this.control_arr)).arr_2019[
                    params.dataIndex
                  ].color;
                }
              }
            }
          }
        ];
        this.tableData = [
          {
            year: "19年",
            sony: "3",
            sanxing: "2",
            haixin: "5",
            xiapu: "3",
            xiaomi: "1",
            chuangwei: "6",
            tcl: "7",
            haier: "8"
          },
          {
            year: "18年",
            sony: "7",
            sanxing: "1",
            haixin: "6",
            xiapu: "3",
            xiaomi: "2",
            chuangwei: "4",
            tcl: "8",
            haier: "5"
          },
          {
            year: "17年",
            sony: "5",
            sanxing: "1",
            haixin: "3",
            xiapu: "4",
            xiaomi: "-",
            chuangwei: "2",
            tcl: "7",
            haier: "6"
          }
        ];
      } else if (index == "8") {
        this.xAxis = [
          {
            type: "category",
            // data: ['海信','三星','索尼','夏普','小米','TCL','海尔','创维'],
            data: getRanking(ranking_pr(this.performance_arr)).arr_name,
            axisPointer: {
              type: "shadow"
            },
            name: "品牌NPS排位",
            nameLocation: "start",
            nameTextStyle: {
              fontSize: 12,
              verticalAlign: "top",
              lineHeight: 40,
              align: "center",
              padding: [10, 10, 0, 0]
            },
            axisTick: {
              show: false
            }
          }
        ];
        this.series = [
          {
            name: "2017",
            type: "bar",
            // data:[ 58.8, 65.6, 66.6, 53.7, "","51.0",55.0,"51.0"],
            data: getRanking(ranking_pr(this.performance_arr)).arr_2017,
            label: labelOption,
            itemStyle: {
              normal: {
                color: params => {
                  console.log(this);
                  // var colorList = ['#a3e1d4','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9'];
                  //  return colorList[params.dataIndex]
                  return getRanking(ranking_pr(this.performance_arr)).arr_2017[
                    params.dataIndex
                  ].color;
                }
              }
            }
          },
          {
            name: "2018",
            type: "bar",
            // data:[ 58.3, 60.6, 67.2, 52.5, "",50.3,48.4,49.3],
            data: getRanking(ranking_pr(this.performance_arr)).arr_2018,
            label: labelOption,
            itemStyle: {
              normal: {
                color: params => {
                  // var colorList = ['#6dbccf','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9'];
                  // return colorList[params.dataIndex]
                  return getRanking(ranking_pr(this.performance_arr)).arr_2018[
                    params.dataIndex
                  ].color;
                }
              }
            }
          },
          {
            name: "2019",
            type: "bar",
            // data:[ 62.4, 63.7, 66.0, 58.1, 56.5,55.9,54.1,56.3],
            data: getRanking(ranking_pr(this.performance_arr)).arr_2019,
            label: labelOption,
            itemStyle: {
              normal: {
                color: params => {
                  // var colorList = ['#17b3a3','#808080','#808080','#808080','#808080','#808080','#808080','#808080','#808080','#808080'];
                  // return colorList[params.dataIndex]
                  return getRanking(ranking_pr(this.performance_arr)).arr_2019[
                    params.dataIndex
                  ].color;
                }
              }
            }
          }
        ];
        this.tableData = [
          {
            year: "19年",
            sony: "5",
            sanxing: "1",
            haixin: "4",
            xiapu: "3",
            xiaomi: "1",
            chuangwei: "8",
            tcl: "6",
            haier: "7"
          },
          {
            year: "18年",
            sony: "1",
            sanxing: "6",
            haixin: "2",
            xiapu: "3",
            xiaomi: "4",
            chuangwei: "8",
            tcl: "7",
            haier: "5"
          },
          {
            year: "17年",
            sony: "1",
            sanxing: "2",
            haixin: "3",
            xiapu: "5",
            xiaomi: "-",
            chuangwei: "7",
            tcl: "4",
            haier: "6"
          }
        ];
      } else if (index == "9") {
        this.xAxis = [
          {
            type: "category",
            // data: ['海信','三星','索尼','夏普','小米','TCL','海尔','创维'],
            data: getRanking(ranking_pr(this.productPlan_arr)).arr_name,
            axisPointer: {
              type: "shadow"
            },
            name: "品牌NPS排位",
            nameLocation: "start",
            nameTextStyle: {
              fontSize: 12,
              verticalAlign: "top",
              lineHeight: 40,
              align: "center",
              padding: [10, 10, 0, 0]
            },
            axisTick: {
              show: false
            }
          }
        ];
        this.series = [
          {
            name: "2017",
            type: "bar",
            // data:[ 58.8, 65.6, 66.6, 53.7, "","51.0",55.0,"51.0"],
            data: getRanking(ranking_pr(this.productPlan_arr)).arr_2017,
            label: labelOption,
            itemStyle: {
              normal: {
                color: params => {
                  console.log(this);
                  // var colorList = ['#a3e1d4','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9'];
                  //  return colorList[params.dataIndex]
                  return getRanking(ranking_pr(this.productPlan_arr)).arr_2017[
                    params.dataIndex
                  ].color;
                }
              }
            }
          },
          {
            name: "2018",
            type: "bar",
            // data:[ 58.3, 60.6, 67.2, 52.5, "",50.3,48.4,49.3],
            data: getRanking(ranking_pr(this.productPlan_arr)).arr_2018,
            label: labelOption,
            itemStyle: {
              normal: {
                color: params => {
                  // var colorList = ['#6dbccf','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9'];
                  // return colorList[params.dataIndex]
                  return getRanking(ranking_pr(this.productPlan_arr)).arr_2018[
                    params.dataIndex
                  ].color;
                }
              }
            }
          },
          {
            name: "2019",
            type: "bar",
            // data:[ 62.4, 63.7, 66.0, 58.1, 56.5,55.9,54.1,56.3],
            data: getRanking(ranking_pr(this.productPlan_arr)).arr_2019,
            label: labelOption,
            itemStyle: {
              normal: {
                color: params => {
                  // var colorList = ['#17b3a3','#808080','#808080','#808080','#808080','#808080','#808080','#808080','#808080','#808080'];
                  // return colorList[params.dataIndex]
                  return getRanking(ranking_pr(this.productPlan_arr)).arr_2019[
                    params.dataIndex
                  ].color;
                }
              }
            }
          }
        ];
        this.tableData = [
          {
            year: "19年",
            sony: "8",
            sanxing: "1",
            haixin: "7",
            xiapu: "2",
            xiaomi: "6",
            chuangwei: "4",
            tcl: "2",
            haier: "5"
          },
          {
            year: "18年",
            sony: "3",
            sanxing: "5",
            haixin: "6",
            xiapu: "1",
            xiaomi: "8",
            chuangwei: "7",
            tcl: "2",
            haier: "3"
          },
          {
            year: "17年",
            sony: "2",
            sanxing: "5",
            haixin: "6",
            xiapu: "4",
            xiaomi: "-",
            chuangwei: "3",
            tcl: "1",
            haier: "6"
          }
        ];
      } else if (index == "10") {
        this.xAxis = [
          {
            type: "category",
            // data: ['海信','三星','索尼','夏普','小米','TCL','海尔','创维'],
            data: getRanking(ranking_pr(this.network_arr)).arr_name,
            axisPointer: {
              type: "shadow"
            },
            name: "品牌NPS排位",
            nameLocation: "start",
            nameTextStyle: {
              fontSize: 12,
              verticalAlign: "top",
              lineHeight: 40,
              align: "center",
              padding: [10, 10, 0, 0]
            },
            axisTick: {
              show: false
            }
          }
        ];
        this.series = [
          {
            name: "2017",
            type: "bar",
            // data:[ 58.8, 65.6, 66.6, 53.7, "","51.0",55.0,"51.0"],
            data: getRanking(ranking_pr(this.network_arr)).arr_2017,
            label: labelOption,
            itemStyle: {
              normal: {
                color: params => {
                  console.log(this);
                  // var colorList = ['#a3e1d4','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9'];
                  //  return colorList[params.dataIndex]
                  return getRanking(ranking_pr(this.network_arr)).arr_2017[
                    params.dataIndex
                  ].color;
                }
              }
            }
          },
          {
            name: "2018",
            type: "bar",
            // data:[ 58.3, 60.6, 67.2, 52.5, "",50.3,48.4,49.3],
            data: getRanking(ranking_pr(this.network_arr)).arr_2018,
            label: labelOption,
            itemStyle: {
              normal: {
                color: params => {
                  // var colorList = ['#6dbccf','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9'];
                  // return colorList[params.dataIndex]
                  return getRanking(ranking_pr(this.network_arr)).arr_2018[
                    params.dataIndex
                  ].color;
                }
              }
            }
          },
          {
            name: "2019",
            type: "bar",
            // data:[ 62.4, 63.7, 66.0, 58.1, 56.5,55.9,54.1,56.3],
            data: getRanking(ranking_pr(this.network_arr)).arr_2019,
            label: labelOption,
            itemStyle: {
              normal: {
                color: params => {
                  // var colorList = ['#17b3a3','#808080','#808080','#808080','#808080','#808080','#808080','#808080','#808080','#808080'];
                  // return colorList[params.dataIndex]
                  return getRanking(ranking_pr(this.network_arr)).arr_2019[
                    params.dataIndex
                  ].color;
                }
              }
            }
          }
        ];
        this.tableData = [
          {
            year: "19年",
            sony: "5",
            sanxing: "2",
            haixin: "6",
            xiapu: "1",
            xiaomi: "3",
            chuangwei: "7",
            tcl: "8",
            haier: "4"
          },
          {
            year: "18年",
            sony: "-",
            sanxing: "-",
            haixin: "2",
            xiapu: "4",
            xiaomi: "5",
            chuangwei: "2",
            tcl: "6",
            haier: "1"
          },
          {
            year: "17年",
            sony: "5",
            sanxing: "6",
            haixin: "2",
            xiapu: "1",
            xiaomi: "-",
            chuangwei: "-",
            tcl: "3",
            haier: "4"
          }
        ];
      } else if (index == "11") {
        this.xAxis = [
          {
            type: "category",
            // data: ['海信','三星','索尼','夏普','小米','TCL','海尔','创维'],
            data: getRanking(ranking_pr(this.inside_arr)).arr_name,
            axisPointer: {
              type: "shadow"
            },
            name: "品牌NPS排位",
            nameLocation: "start",
            nameTextStyle: {
              fontSize: 12,
              verticalAlign: "top",
              lineHeight: 40,
              align: "center",
              padding: [10, 10, 0, 0]
            },
            axisTick: {
              show: false
            }
          }
        ];
        this.series = [
          {
            name: "2017",
            type: "bar",
            // data:[ 58.8, 65.6, 66.6, 53.7, "","51.0",55.0,"51.0"],
            data: getRanking(ranking_pr(this.inside_arr)).arr_2017,
            label: labelOption,
            itemStyle: {
              normal: {
                color: params => {
                  console.log(this);
                  // var colorList = ['#a3e1d4','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9'];
                  //  return colorList[params.dataIndex]
                  return getRanking(ranking_pr(this.inside_arr)).arr_2017[
                    params.dataIndex
                  ].color;
                }
              }
            }
          },
          {
            name: "2018",
            type: "bar",
            // data:[ 58.3, 60.6, 67.2, 52.5, "",50.3,48.4,49.3],
            data: getRanking(ranking_pr(this.inside_arr)).arr_2018,
            label: labelOption,
            itemStyle: {
              normal: {
                color: params => {
                  // var colorList = ['#6dbccf','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9'];
                  // return colorList[params.dataIndex]
                  return getRanking(ranking_pr(this.inside_arr)).arr_2018[
                    params.dataIndex
                  ].color;
                }
              }
            }
          },
          {
            name: "2019",
            type: "bar",
            // data:[ 62.4, 63.7, 66.0, 58.1, 56.5,55.9,54.1,56.3],
            data: getRanking(ranking_pr(this.inside_arr)).arr_2019,
            label: labelOption,
            itemStyle: {
              normal: {
                color: params => {
                  // var colorList = ['#17b3a3','#808080','#808080','#808080','#808080','#808080','#808080','#808080','#808080','#808080'];
                  // return colorList[params.dataIndex]
                  return getRanking(ranking_pr(this.inside_arr)).arr_2019[
                    params.dataIndex
                  ].color;
                }
              }
            }
          }
        ];
        this.tableData = [
          {
            year: "19年",
            sony: "3",
            sanxing: "5",
            haixin: "2",
            xiapu: "7",
            xiaomi: "1",
            chuangwei: "8",
            tcl: "4",
            haier: "6"
          },
          {
            year: "18年",
            sony: "2",
            sanxing: "3",
            haixin: "6",
            xiapu: "3",
            xiaomi: "1",
            chuangwei: "7",
            tcl: "5",
            haier: "-"
          },
          {
            year: "17年",
            sony: "5",
            sanxing: "4",
            haixin: "3",
            xiapu: "6",
            xiaomi: "-",
            chuangwei: "1",
            tcl: "2",
            haier: "7"
          }
        ];
      } else if (index == "12") {
        this.xAxis = [
          {
            type: "category",
            // data: ['海信','三星','索尼','夏普','小米','TCL','海尔','创维'],
            data: getRanking(ranking_pr(this.handle_arr)).arr_name,
            axisPointer: {
              type: "shadow"
            },
            name: "品牌NPS排位",
            nameLocation: "start",
            nameTextStyle: {
              fontSize: 12,
              verticalAlign: "top",
              lineHeight: 40,
              align: "center",
              padding: [10, 10, 0, 0]
            },
            axisTick: {
              show: false
            }
          }
        ];
        this.series = [
          {
            name: "2017",
            type: "bar",
            // data:[ 58.8, 65.6, 66.6, 53.7, "","51.0",55.0,"51.0"],
            data: getRanking(ranking_pr(this.handle_arr)).arr_2017,
            label: labelOption,
            itemStyle: {
              normal: {
                color: params => {
                  console.log(this);
                  // var colorList = ['#a3e1d4','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9'];
                  //  return colorList[params.dataIndex]
                  return getRanking(ranking_pr(this.handle_arr)).arr_2017[
                    params.dataIndex
                  ].color;
                }
              }
            }
          },
          {
            name: "2018",
            type: "bar",
            // data:[ 58.3, 60.6, 67.2, 52.5, "",50.3,48.4,49.3],
            data: getRanking(ranking_pr(this.handle_arr)).arr_2018,
            label: labelOption,
            itemStyle: {
              normal: {
                color: params => {
                  // var colorList = ['#6dbccf','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9'];
                  // return colorList[params.dataIndex]
                  return getRanking(ranking_pr(this.handle_arr)).arr_2018[
                    params.dataIndex
                  ].color;
                }
              }
            }
          },
          {
            name: "2019",
            type: "bar",
            // data:[ 62.4, 63.7, 66.0, 58.1, 56.5,55.9,54.1,56.3],
            data: getRanking(ranking_pr(this.handle_arr)).arr_2019,
            label: labelOption,
            itemStyle: {
              normal: {
                color: params => {
                  // var colorList = ['#17b3a3','#808080','#808080','#808080','#808080','#808080','#808080','#808080','#808080','#808080'];
                  // return colorList[params.dataIndex]
                  return getRanking(ranking_pr(this.handle_arr)).arr_2019[
                    params.dataIndex
                  ].color;
                }
              }
            }
          }
        ];
        this.tableData = [
          {
            year: "19年",
            sony: "6",
            sanxing: "1",
            haixin: "4",
            xiapu: "8",
            xiaomi: "5",
            chuangwei: "2",
            tcl: "3",
            haier: "7"
          },
          {
            year: "18年",
            sony: "2",
            sanxing: "4",
            haixin: "1",
            xiapu: "5",
            xiaomi: "6",
            chuangwei: "8",
            tcl: "3",
            haier: "7"
          },
          {
            year: "17年",
            sony: "3",
            sanxing: "6",
            haixin: "2",
            xiapu: "5",
            xiaomi: "-",
            chuangwei: "4",
            tcl: "7",
            haier: "1"
          }
        ];
      }
      this.initProductChart();
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
  .chartProductBox {
    min-height: 400px;
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
