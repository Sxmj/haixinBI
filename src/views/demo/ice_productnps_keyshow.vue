<template>
  <div class="tv_product">
    <el-row :gutter="20">
      <el-col :span="24">
        <el-card>
          <h3 class="chart_title">海信冰箱产品</h3>
          <div id="TVproduct_chartBarBox" class="chart-box"></div>
          <p style="margin-left:100px;color:#FFD700">* 性能稳定性、温度调节便利性、外观质量、部件附件感知、产品质量概述、功能体验、显示屏交互、故障维修率、用电安全、说明指示base＜30，结果未出示。</p>
          <p style="margin-left:100px;color:#FFD700">* 异味现象指串味、有塑料味等情况</p>
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
            <el-table-column prop="ximenzi" label="西门子" width="90" align="center"></el-table-column>
            <el-table-column prop="haier" label="海尔" width="90" align="center"></el-table-column>
            <el-table-column prop="rongsheng" label="容声" width="90" align="center"></el-table-column>
            <el-table-column prop="sanxing" label="三星" width="90" align="center"></el-table-column>
            <el-table-column prop="haixin" label="海信" width="90" align="center"></el-table-column>
            <el-table-column prop="meidi" label="美的" width="90" align="center"></el-table-column>
            <el-table-column prop="meiling" label="美菱" width="90" align="center"></el-table-column>
            <el-table-column prop="kashadi" label="卡萨帝" width="90" align="center"></el-table-column>
          </el-table>
        </div>
        <P style="margin-left:100px;color:#FFD700">*仅展示关注度前12且总体分析样本量>30的指标</P>
        <p style="margin-left:100px;color:#FFD700">*异味现象指串味、有塑料味等情况</p>
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
    name: "海尔",
    value_2017: "9.00",
    value_2018: "8.70",
    value_2019: "9.02"
  },
  {
    name: "卡萨帝",
    value_2017: "-",
    value_2018: "9.19",
    value_2019: "8.97"
  },
  {
    name: "海信",
    value_2017: "8.75",
    value_2018: "8.63",
    value_2019: "8.92"
  },
  {
    name: "西门子",
    value_2017: "9.15",
    value_2018: "9.02",
    value_2019: "8.77"
  },
  {
    name: "美的",
    value_2017: "8.63",
    value_2018: "8.68",
    value_2019: "8.77"
  },
  {
    name: "容声",
    value_2017: "8.99",
    value_2018: "8.69",
    value_2019: "8.62"
  },
  {
    name: "美菱",
    value_2017: "8.36",
    value_2018: "8.56",
    value_2019: "8.54"
  },
  {
    name: "三星",
    value_2017: "8.81",
    value_2018: "8.67",
    value_2019: "8.51"
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
  ice_keyshowrepresentat,
  ice_keyshowattention,
  tableData1,
  tableData2,
  icekeyshow_tableData
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
          value_2016: "58.8",
          value_2017: "58.3",
          value_2018: "62.4"
        },
        {
          name: "三星",
          value_2016: "65.6",
          value_2017: "60.6",
          value_2018: "63.7"
        },
        {
          name: "海信",
          value_2016: "66.6",
          value_2017: "67.2",
          value_2018: "66.0"
        },
        {
          name: "夏普",
          value_2016: "53.7",
          value_2017: "52.5",
          value_2018: "58.1"
        },
        {
          name: "小米",
          value_2016: "",
          value_2017: "",
          value_2018: "56.5"
        },
        {
          name: "TCL",
          value_2016: "51.0",
          value_2017: "50.3",
          value_2018: "55.9"
        },
        {
          name: "海尔",
          value_2016: "55",
          value_2017: "48.4",
          value_2018: "54.1"
        },
        {
          name: "创维",
          value_2016: "51.0",
          value_2017: "49.3",
          value_2018: "56.3"
        }
      ],
      // tableData1Index: "",
      // tableData1: tableData1,
      // tableData2: tableData2,
      ice_keyshowrepresentat: ice_keyshowrepresentat,
      haixinData_x: [],
      ice_keyshowattention: ice_keyshowattention, //指标关注度
      data_lists: icekeyshow_tableData,
      percentArray: [
        4.2,
        3.9,
        2.3,
        4.8,
        1.0,
        2.9,
        1.9,
        4.5,
        3.5,
        1.1,
        1.1,
        0.6,
        1.3,
        0.6
      ],
      // 表格数据
      tableData: [
        {
          year: "19年",
          ximenzi: "4",
          haier: "1",
          rongsheng: "6",
          sanxing: "8",
          haixin: "3",
          meidi: "4",
          meiling: "7",
          kashadi: "2"
        },
        {
          year: "18年",
          ximenzi: "2",
          haier: "3",
          rongsheng: "4",
          sanxing: "6",
          haixin: "7",
          meidi: "5",
          meiling: "8",
          kashadi: "1"
        },
        {
          year: "17年",
          ximenzi: "1",
          haier: "2",
          rongsheng: "3",
          sanxing: "4",
          haixin: "5",
          meidi: "6",
          meiling: "7",
          kashadi: "-"
        }
      ],

      // 下拉菜单数据
      options: [
        {
          value: "1",
          label: "制冷体验"
        },
        {
          value: "2",
          label: "保鲜效果"
          // disabled: true
        },
        {
          value: "3",
          label: "外观材质"
        },
        {
          value: "4",
          label: "静音效果"
        },
        {
          value: "5",
          label: "外观设计"
        },
        {
          value: "6",
          label: "能耗"
          // disabled: true
        },
        {
          value: "7",
          label: "容积"
        },
        {
          value: "8",
          label: "内部布局"
        },
        {
          value: "9",
          label: "异味现象"
          // disabled: true
        },
        {
          value: "10",
          label: "产品尺寸"
        },
        {
          value: "11",
          label: "操作便利性"
        },
        {
          value: "12",
          label: "功能丰富性"
        },
        {
          value: "13",
          label: "散热"
        },
        {
          value: "14",
          label: "照明效果"
        }
      ],
      value: "1",
      //1制冷体验   tv_arr=cold_arr
      cold_arr: [
        {
          name: "海尔",
          value_2017: "9.00",
          value_2018: "8.70",
          value_2019: "9.02"
        },
        {
          name: "卡萨帝",
          value_2017: "-",
          value_2018: "9.19",
          value_2019: "8.97"
        },
        {
          name: "海信",
          value_2017: "8.75",
          value_2018: "8.63",
          value_2019: "8.92"
        },
        {
          name: "西门子",
          value_2017: "9.15",
          value_2018: "9.02",
          value_2019: "8.77"
        },
        {
          name: "美的",
          value_2017: "8.63",
          value_2018: "8.68",
          value_2019: "8.77"
        },
        {
          name: "容声",
          value_2017: "8.99",
          value_2018: "8.69",
          value_2019: "8.62"
        },
        {
          name: "美菱",
          value_2017: "8.36",
          value_2018: "8.56",
          value_2019: "8.54"
        },
        {
          name: "三星",
          value_2017: "8.81",
          value_2018: "8.67",
          value_2019: "8.51"
        }
      ],
      //2保鲜效果
      baoxian_arr: [
        {
          name: "海尔",
          value_2017: "8.60",
          value_2018: "9.00",
          value_2019: "8.95"
        },
        {
          name: "卡萨帝",
          value_2017: "-",
          value_2018: "9.04",
          value_2019: "9.02"
        },
        {
          name: "海信",
          value_2017: "8.61",
          value_2018: "8.63",
          value_2019: "8.67"
        },
        {
          name: "西门子",
          value_2017: "8.85",
          value_2018: "9.00",
          value_2019: "9.14"
        },
        {
          name: "美的",
          value_2017: "8.50",
          value_2018: "8.74",
          value_2019: "8.59"
        },
        {
          name: "容声",
          value_2017: "8.46",
          value_2018: "8.81",
          value_2019: "8.82"
        },
        {
          name: "美菱",
          value_2017: "8.57",
          value_2018: "8.77",
          value_2019: "8.35"
        },
        {
          name: "三星",
          value_2017: "8.20",
          value_2018: "9.11",
          value_2019: "8.64"
        }
      ],
      //3外观材质
      waiguan_arr: [
        {
          name: "海尔",
          value_2017: "-",
          value_2018: "-",
          value_2019: "9.17"
        },
        {
          name: "卡萨帝",
          value_2017: "-",
          value_2018: "-",
          value_2019: "9.41"
        },
        {
          name: "海信",
          value_2017: "-",
          value_2018: "-",
          value_2019: "8.94"
        },
        {
          name: "西门子",
          value_2017: "-",
          value_2018: "-",
          value_2019: "8.90"
        },
        {
          name: "美的",
          value_2017: "-",
          value_2018: "-",
          value_2019: "9.25"
        },
        {
          name: "容声",
          value_2017: "-",
          value_2018: "-",
          value_2019: "9.02"
        },
        {
          name: "美菱",
          value_2017: "-",
          value_2018: "-",
          value_2019: "8.91"
        },
        {
          name: "三星",
          value_2017: "-",
          value_2018: "-",
          value_2019: "8.77"
        }
      ],
      //4静音效果
      voice_arr: [
        {
          name: "海尔",
          value_2017: "8.28",
          value_2018: "8.49",
          value_2019: "8.57"
        },
        {
          name: "卡萨帝",
          value_2017: "-",
          value_2018: "8.65",
          value_2019: "9.00"
        },
        {
          name: "海信",
          value_2017: "8.18",
          value_2018: "8.51",
          value_2019: "8.21"
        },
        {
          name: "西门子",
          value_2017: "8.47",
          value_2018: "8.93",
          value_2019: "8.84"
        },
        {
          name: "美的",
          value_2017: "8.00",
          value_2018: "8.41",
          value_2019: "8.31"
        },
        {
          name: "容声",
          value_2017: "8.27",
          value_2018: "8.25",
          value_2019: "8.50"
        },
        {
          name: "美菱",
          value_2017: "8.18",
          value_2018: "8.35",
          value_2019: "8.17"
        },
        {
          name: "三星",
          value_2017: "8.06",
          value_2018: "8.82",
          value_2019: "8.57"
        }
      ],
      //5外观设计
      facebuild_arr: [
        {
          name: "海尔",
          value_2017: "-",
          value_2018: "-",
          value_2019: "9.24"
        },
        {
          name: "卡萨帝",
          value_2017: "-",
          value_2018: "-",
          value_2019: "9.43"
        },
        {
          name: "海信",
          value_2017: "-",
          value_2018: "-",
          value_2019: "9.33"
        },
        {
          name: "西门子",
          value_2017: "-",
          value_2018: "-",
          value_2019: "9.33"
        },
        {
          name: "美的",
          value_2017: "-",
          value_2018: "-",
          value_2019: "9.16"
        },
        {
          name: "容声",
          value_2017: "-",
          value_2018: "-",
          value_2019: "9.18"
        },
        {
          name: "美菱",
          value_2017: "-",
          value_2018: "-",
          value_2019: "9.40"
        },
        {
          name: "三星",
          value_2017: "-",
          value_2018: "-",
          value_2019: "9.43"
        }
      ],
      //6能耗
      nenghao_arr: [
        {
          name: "海尔",
          value_2017: "8.71",
          value_2018: "9.17",
          value_2019: "8.90"
        },
        {
          name: "卡萨帝",
          value_2017: "-",
          value_2018: "9.00",
          value_2019: "8.48"
        },
        {
          name: "海信",
          value_2017: "8.51",
          value_2018: "8.58",
          value_2019: "8.56"
        },
        {
          name: "西门子",
          value_2017: "9.00",
          value_2018: "8.93",
          value_2019: "8.52"
        },
        {
          name: "美的",
          value_2017: "8.38",
          value_2018: "8.75",
          value_2019: "8.35"
        },
        {
          name: "容声",
          value_2017: "8.53",
          value_2018: "8.67",
          value_2019: "8.60"
        },
        {
          name: "美菱",
          value_2017: "8.79",
          value_2018: "8.50",
          value_2019: "8.38"
        },
        {
          name: "三星",
          value_2017: "8.32",
          value_2018: "8.13",
          value_2019: "8.95"
        }
      ],
      //7容积
      rongji_arr: [
        {
          name: "海尔",
          value_2017: "7.75",
          value_2018: "8.62",
          value_2019: "8.71"
        },
        {
          name: "卡萨帝",
          value_2017: "-",
          value_2018: "8.14",
          value_2019: "8.71"
        },
        {
          name: "海信",
          value_2017: "8.71",
          value_2018: "8.63",
          value_2019: "8.31"
        },
        {
          name: "西门子",
          value_2017: "8.50",
          value_2018: "8.20",
          value_2019: "9.04"
        },
        {
          name: "美的",
          value_2017: "8.27",
          value_2018: "8.19",
          value_2019: "8.95"
        },
        {
          name: "容声",
          value_2017: "8.56",
          value_2018: "8.55",
          value_2019: "8.80"
        },
        {
          name: "美菱",
          value_2017: "8.88",
          value_2018: "8.38",
          value_2019: "8.23"
        },
        {
          name: "三星",
          value_2017: "9.00",
          value_2018: "8.86",
          value_2019: "8.97"
        }
      ],
      //8内部布局
      neizhibuju_arr: [
        {
          name: "海尔",
          value_2017: "9.00",
          value_2018: "8.53",
          value_2019: "8.76"
        },
        {
          name: "卡萨帝",
          value_2017: "-",
          value_2018: "8.73",
          value_2019: "8.67"
        },
        {
          name: "海信",
          value_2017: "8.10",
          value_2018: "8.64",
          value_2019: "8.33"
        },
        {
          name: "西门子",
          value_2017: "8.40",
          value_2018: "8.44",
          value_2019: "8.82"
        },
        {
          name: "美的",
          value_2017: "8.35",
          value_2018: "8.19",
          value_2019: "8.40"
        },
        {
          name: "容声",
          value_2017: "8.17",
          value_2018: "8.88",
          value_2019: "8.94"
        },
        {
          name: "美菱",
          value_2017: "7.23",
          value_2018: "8.58",
          value_2019: "8.88"
        },
        {
          name: "三星",
          value_2017: "8.23",
          value_2018: "8.73",
          value_2019: "8.60"
        }
      ],
      //9异味现象
      yiwei_arr: [
        {
          name: "海尔",
          value_2017: "-",
          value_2018: "-",
          value_2019: "8.10"
        },
        {
          name: "卡萨帝",
          value_2017: "-",
          value_2018: "-",
          value_2019: "8.33"
        },
        {
          name: "海信",
          value_2017: "-",
          value_2018: "-",
          value_2019: "8.55"
        },
        {
          name: "西门子",
          value_2017: "-",
          value_2018: "-",
          value_2019: "7.93"
        },
        {
          name: "美的",
          value_2017: "-",
          value_2018: "-",
          value_2019: "8.14"
        },
        {
          name: "容声",
          value_2017: "-",
          value_2018: "-",
          value_2019: "7.86"
        },
        {
          name: "美菱",
          value_2017: "-",
          value_2018: "-",
          value_2019: "7.68"
        },
        {
          name: "三星",
          value_2017: "-",
          value_2018: "-",
          value_2019: "8.18"
        }
      ],
      //10产品尺寸
      productSize_arr: [
        {
          name: "海尔",
          value_2017: "-",
          value_2018: "-",
          value_2019: "9.00"
        },
        {
          name: "卡萨帝",
          value_2017: "-",
          value_2018: "-",
          value_2019: "8.50"
        },
        {
          name: "海信",
          value_2017: "-",
          value_2018: "-",
          value_2019: "8.88"
        },
        {
          name: "西门子",
          value_2017: "-",
          value_2018: "-",
          value_2019: "9.00"
        },
        {
          name: "美的",
          value_2017: "-",
          value_2018: "-",
          value_2019: "8.73"
        },
        {
          name: "容声",
          value_2017: "-",
          value_2018: "-",
          value_2019: "8.57"
        },
        {
          name: "美菱",
          value_2017: "-",
          value_2018: "-",
          value_2019: "8.81"
        },
        {
          name: "三星",
          value_2017: "-",
          value_2018: "-",
          value_2019: "8.71"
        }
      ],
      //11操作便利性
      dongeasy_arr: [
        {
          name: "海尔",
          value_2017: "8.67",
          value_2018: "9.20",
          value_2019: "7.50"
        },
        {
          name: "卡萨帝",
          value_2017: "-",
          value_2018: "9.60",
          value_2019: "9.09"
        },
        {
          name: "海信",
          value_2017: "7.89",
          value_2018: "9.00",
          value_2019: "8.43"
        },
        {
          name: "西门子",
          value_2017: "9.75",
          value_2018: "9.80",
          value_2019: "8.86"
        },
        {
          name: "美的",
          value_2017: "7.83",
          value_2018: "8.83",
          value_2019: "7.67"
        },
        {
          name: "容声",
          value_2017: "7.71",
          value_2018: "9.43",
          value_2019: "8.63"
        },
        {
          name: "美菱",
          value_2017: "9.40",
          value_2018: "8.71",
          value_2019: "9.14"
        },
        {
          name: "三星",
          value_2017: "8.50",
          value_2018: "10.00",
          value_2019: "8.22"
        }
      ],
      //12功能丰富性
      kindskill_arr: [
        {
          name: "海尔",
          value_2017: "9.20",
          value_2018: "9.00",
          value_2019: "9.00"
        },
        {
          name: "海信",
          value_2017: "-",
          value_2018: "8.67",
          value_2019: "9.00"
        },
        {
          name: "卡萨帝",
          value_2017: "-",
          value_2018: "9.14",
          value_2019: "9.25"
        },
        
        {
          name: "西门子",
          value_2017: "8.00",
          value_2018: "9.08",
          value_2019: "10.00"
        },
        {
          name: "美的",
          value_2017: "9.00",
          value_2018: "8.85",
          value_2019: "9.50"
        },
        {
          name: "容声",
          value_2017: "-",
          value_2018: "8.85",
          value_2019: "9.07"
        },
        {
          name: "美菱",
          value_2017: "9.00",
          value_2018: "8.83",
          value_2019: "9.50"
        },
        {
          name: "三星",
          value_2017: "10.00",
          value_2018: "9.03",
          value_2019: "8.91"
        }
      ],
      //散热
      hot:[
        {
          name: "海尔",
          value_2017: "6.00",
          value_2018: "9.00",
          value_2019: "8.50"
        },
        {
          name: "海信",
          value_2017: "7.50",
          value_2018: "8.75",
          value_2019: "8.09"
        },
        {
          name: "卡萨帝",
          value_2017: "-",
          value_2018: "-",
          value_2019: "8.86"
        },
        
        {
          name: "西门子",
          value_2017: "9.40",
          value_2018: "7.33",
          value_2019: "7.33"
        },
        {
          name: "美的",
          value_2017: "7.80",
          value_2018: "8.00",
          value_2019: "8.00"
        },
        {
          name: "容声",
          value_2017: "8.00",
          value_2018: "9.00",
          value_2019: "8.44"
        },
        {
          name: "美菱",
          value_2017: "7.43",
          value_2018: "9.67",
          value_2019: "8.00"
        },
        {
          name: "三星",
          value_2017: "8.50",
          value_2018: "7.75",
          value_2019: "7.67"
        }
      ],
      //照明效果
      lieght:[
        {
          name: "海尔",
          value_2017: "8.25",
          value_2018: "8.00",
          value_2019: "8.00"
        },
        {
          name: "海信",
          value_2017: "7.00",
          value_2018: "9.00",
          value_2019: "8.67"
        },
        {
          name: "卡萨帝",
          value_2017: "-",
          value_2018: "8.00",
          value_2019: "7.75"
        },
        
        {
          name: "西门子",
          value_2017: "7.00",
          value_2018: "8.00",
          value_2019: "8.63"
        },
        {
          name: "美的",
          value_2017: "-",
          value_2018: "10.00",
          value_2019: "8.20"
        },
        {
          name: "容声",
          value_2017: "7.00",
          value_2018: "9.60",
          value_2019: "8.00"
        },
        {
          name: "美菱",
          value_2017: "6.00",
          value_2018: "9.50",
          value_2019: "7.50"
        },
        {
          name: "三星",
          value_2017: "6.00",
          value_2018: "9.00",
          value_2019: "7.60"
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

    this.ice_keyshowattention = ranking(that.ice_keyshowattention);
    this.ice_keyshowrepresentat = getData2(
      ice_keyshowattention,
      that.ice_keyshowrepresentat
    );
    this.haixinData_x = getData_x(that.ice_keyshowrepresentat, [
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
        "%",
      "\n" +
        that.data_lists[12].tableDataIndex +
        "\n" +
        that.percentArray[12] +
        "%",
      "\n" +
        that.data_lists[13].tableDataIndex +
        "\n" +
        that.percentArray[13] +
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
            data: that.ice_keyshowrepresentat,
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
            data: that.ice_keyshowattention //[25, 14, 10, 10, 3, 10, 7]
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
            ximenzi: "4",
            haier: "1",
            rongsheng: "6",
            sanxing: "8",
            haixin: "3",
            meidi: "4",
            meiling: "7",
            kashadi: "2"
          },
          {
            year: "18年",
            ximenzi: "2",
            haier: "3",
            rongsheng: "4",
            sanxing: "6",
            haixin: "7",
            meidi: "5",
            meiling: "8",
            kashadi: "1"
          },
          {
            year: "17年",
            ximenzi: "1",
            haier: "2",
            rongsheng: "3",
            sanxing: "4",
            haixin: "5",
            meidi: "6",
            meiling: "7",
            kashadi: "-"
          }
        ];
      } else if (index == "2") {
        this.xAxis = [
          {
            type: "category",
            // data: ['海信','三星','索尼','夏普','小米','TCL','海尔','创维'],
            data: getRanking(ranking_pr(this.baoxian_arr)).arr_name,
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
            data: getRanking(ranking_pr(this.baoxian_arr)).arr_2017,
            label: labelOption,
            itemStyle: {
              normal: {
                color: params => {
                  console.log(this);
                  // var colorList = ['#a3e1d4','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9'];
                  //  return colorList[params.dataIndex]
                  return getRanking(ranking_pr(this.baoxian_arr)).arr_2017[
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
            data: getRanking(ranking_pr(this.baoxian_arr)).arr_2018,
            label: labelOption,
            itemStyle: {
              normal: {
                color: params => {
                  // var colorList = ['#6dbccf','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9'];
                  // return colorList[params.dataIndex]
                  return getRanking(ranking_pr(this.baoxian_arr)).arr_2018[
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
            data: getRanking(ranking_pr(this.baoxian_arr)).arr_2019,
            label: labelOption,
            itemStyle: {
              normal: {
                color: params => {
                  // var colorList = ['#17b3a3','#808080','#808080','#808080','#808080','#808080','#808080','#808080','#808080','#808080'];
                  // return colorList[params.dataIndex]
                  return getRanking(ranking_pr(this.baoxian_arr)).arr_2019[
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
            ximenzi: "1",
            haier: "3",
            rongsheng: "4",
            sanxing: "6",
            haixin: "5",
            meidi: "7",
            meiling: "8",
            kashadi: "2"
          },
          {
            year: "18年",
            ximenzi: "3",
            haier: "3",
            rongsheng: "5",
            sanxing: "1",
            haixin: "8",
            meidi: "7",
            meiling: "6",
            kashadi: "2"
          },
          {
            year: "17年",
            ximenzi: "1",
            haier: "3",
            rongsheng: "6",
            sanxing: "7",
            haixin: "2",
            meidi: "5",
            meiling: "4",
            kashadi: "-"
          }
        ];
      } else if (index == "3") {
        this.xAxis = [
          {
            type: "category",
            // data: ['海信','三星','索尼','夏普','小米','TCL','海尔','创维'],
            data: getRanking(ranking_pr(this.waiguan_arr)).arr_name,
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
            data: getRanking(ranking_pr(this.waiguan_arr)).arr_2017,
            label: labelOption,
            itemStyle: {
              normal: {
                color: params => {
                  console.log(this);
                  // var colorList = ['#a3e1d4','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9'];
                  //  return colorList[params.dataIndex]
                  return getRanking(ranking_pr(this.waiguan_arr)).arr_2017[
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
            data: getRanking(ranking_pr(this.waiguan_arr)).arr_2018,
            label: labelOption,
            itemStyle: {
              normal: {
                color: params => {
                  // var colorList = ['#6dbccf','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9'];
                  // return colorList[params.dataIndex]
                  return getRanking(ranking_pr(this.waiguan_arr)).arr_2018[
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
            data: getRanking(ranking_pr(this.waiguan_arr)).arr_2019,
            label: labelOption,
            itemStyle: {
              normal: {
                color: params => {
                  // var colorList = ['#17b3a3','#808080','#808080','#808080','#808080','#808080','#808080','#808080','#808080','#808080'];
                  // return colorList[params.dataIndex]
                  return getRanking(ranking_pr(this.waiguan_arr)).arr_2019[
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
            ximenzi: "7",
            haier: "3",
            rongsheng: "4",
            sanxing: "8",
            haixin: "5",
            meidi: "2",
            meiling: "6",
            kashadi: "1"
          },
          {
            year: "18年",
            ximenzi: "-",
            haier: "-",
            rongsheng: "-",
            sanxing: "-",
            haixin: "-",
            meidi: "-",
            meiling: "-",
            kashadi: "-"
          },
          {
            year: "17年",
            ximenzi: "-",
            haier: "-",
            rongsheng: "-",
            sanxing: "-",
            haixin: "-",
            meidi: "-",
            meiling: "-",
            kashadi: "-"
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
            ximenzi: "2",
            haier: "3",
            rongsheng: "5",
            sanxing: "3",
            haixin: "7",
            meidi: "6",
            meiling: "8",
            kashadi: "1"
          },
          {
            year: "18年",
            ximenzi: "1",
            haier: "5",
            rongsheng: "8",
            sanxing: "2",
            haixin: "4",
            meidi: "6",
            meiling: "7",
            kashadi: "3"
          },
          {
            year: "17年",
            ximenzi: "1",
            haier: "2",
            rongsheng: "3",
            sanxing: "6",
            haixin: "4",
            meidi: "7",
            meiling: "5",
            kashadi: "-"
          }
        ];
      } else if (index == "5") {
        this.xAxis = [
          {
            type: "category",
            // data: ['海信','三星','索尼','夏普','小米','TCL','海尔','创维'],
            data: getRanking(ranking_pr(this.facebuild_arr)).arr_name,
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
            data: getRanking(ranking_pr(this.facebuild_arr)).arr_2017,
            label: labelOption,
            itemStyle: {
              normal: {
                color: params => {
                  console.log(this);
                  // var colorList = ['#a3e1d4','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9'];
                  //  return colorList[params.dataIndex]
                  return getRanking(ranking_pr(this.facebuild_arr)).arr_2017[
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
            data: getRanking(ranking_pr(this.facebuild_arr)).arr_2018,
            label: labelOption,
            itemStyle: {
              normal: {
                color: params => {
                  // var colorList = ['#6dbccf','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9'];
                  // return colorList[params.dataIndex]
                  return getRanking(ranking_pr(this.facebuild_arr)).arr_2018[
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
            data: getRanking(ranking_pr(this.facebuild_arr)).arr_2019,
            label: labelOption,
            itemStyle: {
              normal: {
                color: params => {
                  // var colorList = ['#17b3a3','#808080','#808080','#808080','#808080','#808080','#808080','#808080','#808080','#808080'];
                  // return colorList[params.dataIndex]
                  return getRanking(ranking_pr(this.facebuild_arr)).arr_2019[
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
            ximenzi: "4",
            haier: "6",
            rongsheng: "7",
            sanxing: "1",
            haixin: "4",
            meidi: "8",
            meiling: "3",
            kashadi: "1"
          },
          {
            year: "18年",
            ximenzi: "-",
            haier: "-",
            rongsheng: "-",
            sanxing: "-",
            haixin: "-",
            meidi: "-",
            meiling: "-",
            kashadi: "-"
          },
          {
            year: "17年",
            ximenzi: "-",
            haier: "-",
            rongsheng: "-",
            sanxing: "-",
            haixin: "-",
            meidi: "-",
            meiling: "-",
            kashadi: "-"
          }
        ];
      } else if (index == "6") {
        this.xAxis = [
          {
            type: "category",
            // data: ['海信','三星','索尼','夏普','小米','TCL','海尔','创维'],
            data: getRanking(ranking_pr(this.nenghao_arr)).arr_name,
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
            data: getRanking(ranking_pr(this.nenghao_arr)).arr_2017,
            label: labelOption,
            itemStyle: {
              normal: {
                color: params => {
                  // console.log(this);
                  // var colorList = ['#a3e1d4','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9'];
                  //  return colorList[params.dataIndex]
                  return getRanking(ranking_pr(this.nenghao_arr)).arr_2017[
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
            data: getRanking(ranking_pr(this.nenghao_arr)).arr_2018,
            label: labelOption,
            itemStyle: {
              normal: {
                color: params => {
                  // var colorList = ['#6dbccf','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9'];
                  // return colorList[params.dataIndex]
                  return getRanking(ranking_pr(this.nenghao_arr)).arr_2018[
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
            data: getRanking(ranking_pr(this.nenghao_arr)).arr_2019,
            label: labelOption,
            itemStyle: {
              normal: {
                color: params => {
                  // var colorList = ['#17b3a3','#808080','#808080','#808080','#808080','#808080','#808080','#808080','#808080','#808080'];
                  // return colorList[params.dataIndex]
                  return getRanking(ranking_pr(this.nenghao_arr)).arr_2019[
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
            ximenzi: "5",
            haier: "2",
            rongsheng: "3",
            sanxing: "1",
            haixin: "4",
            meidi: "8",
            meiling: "7",
            kashadi: "6"
          },
          {
            year: "18年",
            ximenzi: "3",
            haier: "1",
            rongsheng: "5",
            sanxing: "8",
            haixin: "6",
            meidi: "4",
            meiling: "7",
            kashadi: "2"
          },
          {
            year: "17年",
            ximenzi: "1",
            haier: "3",
            rongsheng: "4",
            sanxing: "7",
            haixin: "5",
            meidi: "6",
            meiling: "2",
            kashadi: "-"
          }
        ];
      } else if (index == "7") {
        this.xAxis = [
          {
            type: "category",
            // data: ['海信','三星','索尼','夏普','小米','TCL','海尔','创维'],
            data: getRanking(ranking_pr(this.rongji_arr)).arr_name,
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
            data: getRanking(ranking_pr(this.rongji_arr)).arr_2017,
            label: labelOption,
            itemStyle: {
              normal: {
                color: params => {
                  console.log(this);
                  // var colorList = ['#a3e1d4','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9'];
                  //  return colorList[params.dataIndex]
                  return getRanking(ranking_pr(this.rongji_arr)).arr_2017[
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
            data: getRanking(ranking_pr(this.rongji_arr)).arr_2018,
            label: labelOption,
            itemStyle: {
              normal: {
                color: params => {
                  // var colorList = ['#6dbccf','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9'];
                  // return colorList[params.dataIndex]
                  return getRanking(ranking_pr(this.rongji_arr)).arr_2018[
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
            data: getRanking(ranking_pr(this.rongji_arr)).arr_2019,
            label: labelOption,
            itemStyle: {
              normal: {
                color: params => {
                  // var colorList = ['#17b3a3','#808080','#808080','#808080','#808080','#808080','#808080','#808080','#808080','#808080'];
                  // return colorList[params.dataIndex]
                  return getRanking(ranking_pr(this.rongji_arr)).arr_2019[
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
            ximenzi: "1",
            haier: "5",
            rongsheng: "4",
            sanxing: "2",
            haixin: "7",
            meidi: "3",
            meiling: "8",
            kashadi: "5"
          },
          {
            year: "18年",
            ximenzi: "1",
            haier: "4",
            rongsheng: "5",
            sanxing: "2",
            haixin: "3",
            meidi: "7",
            meiling: "6",
            kashadi: "8"
          },
          {
            year: "17年",
            ximenzi: "5",
            haier: "7",
            rongsheng: "4",
            sanxing: "1",
            haixin: "3",
            meidi: "6",
            meiling: "2",
            kashadi: "-"
          }
        ];
      } else if (index == "8") {
        this.xAxis = [
          {
            type: "category",
            // data: ['海信','三星','索尼','夏普','小米','TCL','海尔','创维'],
            data: getRanking(ranking_pr(this.neizhibuju_arr)).arr_name,
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
            data: getRanking(ranking_pr(this.neizhibuju_arr)).arr_2017,
            label: labelOption,
            itemStyle: {
              normal: {
                color: params => {
                  console.log(this);
                  // var colorList = ['#a3e1d4','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9'];
                  //  return colorList[params.dataIndex]
                  return getRanking(ranking_pr(this.neizhibuju_arr)).arr_2017[
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
            data: getRanking(ranking_pr(this.neizhibuju_arr)).arr_2018,
            label: labelOption,
            itemStyle: {
              normal: {
                color: params => {
                  // var colorList = ['#6dbccf','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9'];
                  // return colorList[params.dataIndex]
                  return getRanking(ranking_pr(this.neizhibuju_arr)).arr_2018[
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
            data: getRanking(ranking_pr(this.neizhibuju_arr)).arr_2019,
            label: labelOption,
            itemStyle: {
              normal: {
                color: params => {
                  // var colorList = ['#17b3a3','#808080','#808080','#808080','#808080','#808080','#808080','#808080','#808080','#808080'];
                  // return colorList[params.dataIndex]
                  return getRanking(ranking_pr(this.neizhibuju_arr)).arr_2019[
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
            ximenzi: "3",
            haier: "4",
            rongsheng: "1",
            sanxing: "6",
            haixin: "8",
            meidi: "7",
            meiling: "2",
            kashadi: "5"
          },
          {
            year: "18年",
            ximenzi: "7",
            haier: "6",
            rongsheng: "1",
            sanxing: "6",
            haixin: "4",
            meidi: "8",
            meiling: "5",
            kashadi: "2"
          },
          {
            year: "17年",
            ximenzi: "5",
            haier: "1",
            rongsheng: "5",
            sanxing: "1",
            haixin: "6",
            meidi: "3",
            meiling: "7",
            kashadi: "-"
          }
        ];
      } else if (index == "9") {
        this.xAxis = [
          {
            type: "category",
            // data: ['海信','三星','索尼','夏普','小米','TCL','海尔','创维'],
            data: getRanking(ranking_pr(this.yiwei_arr)).arr_name,
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
            data: getRanking(ranking_pr(this.yiwei_arr)).arr_2017,
            label: labelOption,
            itemStyle: {
              normal: {
                color: params => {
                  console.log(this);
                  // var colorList = ['#a3e1d4','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9'];
                  //  return colorList[params.dataIndex]
                  return getRanking(ranking_pr(this.yiwei_arr)).arr_2017[
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
            data: getRanking(ranking_pr(this.yiwei_arr)).arr_2018,
            label: labelOption,
            itemStyle: {
              normal: {
                color: params => {
                  // var colorList = ['#6dbccf','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9'];
                  // return colorList[params.dataIndex]
                  return getRanking(ranking_pr(this.yiwei_arr)).arr_2018[
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
            data: getRanking(ranking_pr(this.yiwei_arr)).arr_2019,
            label: labelOption,
            itemStyle: {
              normal: {
                color: params => {
                  // var colorList = ['#17b3a3','#808080','#808080','#808080','#808080','#808080','#808080','#808080','#808080','#808080'];
                  // return colorList[params.dataIndex]
                  return getRanking(ranking_pr(this.yiwei_arr)).arr_2019[
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
            ximenzi: "6",
            haier: "5",
            rongsheng: "7",
            sanxing: "3",
            haixin: "1",
            meidi: "4",
            meiling: "8",
            kashadi: "2"
          },
          {
            year: "18年",
            ximenzi: "-",
            haier: "-",
            rongsheng: "-",
            sanxing: "-",
            haixin: "-",
            meidi: "-",
            meiling: "-",
            kashadi: "-"
          },
          {
            year: "17年",
            ximenzi: "-",
            haier: "-",
            rongsheng: "-",
            sanxing: "-",
            haixin: "-",
            meidi: "-",
            meiling: "-",
            kashadi: "-"
          }
        ];
      } else if (index == "10") {
        this.xAxis = [
          {
            type: "category",
            // data: ['海信','三星','索尼','夏普','小米','TCL','海尔','创维'],
            data: getRanking(ranking_pr(this.productSize_arr)).arr_name,
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
            data: getRanking(ranking_pr(this.productSize_arr)).arr_2017,
            label: labelOption,
            itemStyle: {
              normal: {
                color: params => {
                  console.log(this);
                  // var colorList = ['#a3e1d4','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9'];
                  //  return colorList[params.dataIndex]
                  return getRanking(ranking_pr(this.productSize_arr)).arr_2017[
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
            data: getRanking(ranking_pr(this.productSize_arr)).arr_2018,
            label: labelOption,
            itemStyle: {
              normal: {
                color: params => {
                  // var colorList = ['#6dbccf','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9'];
                  // return colorList[params.dataIndex]
                  return getRanking(ranking_pr(this.productSize_arr)).arr_2018[
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
            data: getRanking(ranking_pr(this.productSize_arr)).arr_2019,
            label: labelOption,
            itemStyle: {
              normal: {
                color: params => {
                  // var colorList = ['#17b3a3','#808080','#808080','#808080','#808080','#808080','#808080','#808080','#808080','#808080'];
                  // return colorList[params.dataIndex]
                  return getRanking(ranking_pr(this.productSize_arr)).arr_2019[
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
            ximenzi: "1",
            haier: "1",
            rongsheng: "7",
            sanxing: "6",
            haixin: "3",
            meidi: "5",
            meiling: "4",
            kashadi: "8"
          },
          {
            year: "18年",
            ximenzi: "-",
            haier: "-",
            rongsheng: "-",
            sanxing: "-",
            haixin: "-",
            meidi: "-",
            meiling: "-",
            kashadi: "-"
          },
          {
            year: "17年",
            ximenzi: "-",
            haier: "-",
            rongsheng: "-",
            sanxing: "-",
            haixin: "-",
            meidi: "-",
            meiling: "-",
            kashadi: "-"
          }
        ];
      } else if (index == "11") {
        this.xAxis = [
          {
            type: "category",
            // data: ['海信','三星','索尼','夏普','小米','TCL','海尔','创维'],
            data: getRanking(ranking_pr(this.dongeasy_arr)).arr_name,
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
            data: getRanking(ranking_pr(this.dongeasy_arr)).arr_2017,
            label: labelOption,
            itemStyle: {
              normal: {
                color: params => {
                  console.log(this);
                  // var colorList = ['#a3e1d4','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9'];
                  //  return colorList[params.dataIndex]
                  return getRanking(ranking_pr(this.dongeasy_arr)).arr_2017[
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
            data: getRanking(ranking_pr(this.dongeasy_arr)).arr_2018,
            label: labelOption,
            itemStyle: {
              normal: {
                color: params => {
                  // var colorList = ['#6dbccf','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9'];
                  // return colorList[params.dataIndex]
                  return getRanking(ranking_pr(this.dongeasy_arr)).arr_2018[
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
            data: getRanking(ranking_pr(this.dongeasy_arr)).arr_2019,
            label: labelOption,
            itemStyle: {
              normal: {
                color: params => {
                  // var colorList = ['#17b3a3','#808080','#808080','#808080','#808080','#808080','#808080','#808080','#808080','#808080'];
                  // return colorList[params.dataIndex]
                  return getRanking(ranking_pr(this.dongeasy_arr)).arr_2019[
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
            ximenzi: "3",
            haier: "8",
            rongsheng: "4",
            sanxing: "6",
            haixin: "5",
            meidi: "7",
            meiling: "1",
            kashadi: "2"
          },
          {
            year: "18年",
            ximenzi: "2",
            haier: "5",
            rongsheng: "4",
            sanxing: "1",
            haixin: "6",
            meidi: "7",
            meiling: "8",
            kashadi: "3"
          },
          {
            year: "17年",
            ximenzi: "1",
            haier: "3",
            rongsheng: "6",
            sanxing: "4",
            haixin: "5",
            meidi: "7",
            meiling: "2",
            kashadi: "-"
          }
        ];
      } else if (index == "12") {
        this.xAxis = [
          {
            type: "category",
            // data: ['海信','三星','索尼','夏普','小米','TCL','海尔','创维'],
            data: getRanking(ranking_pr(this.kindskill_arr)).arr_name,
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
            data: getRanking(ranking_pr(this.kindskill_arr)).arr_2017,
            label: labelOption,
            itemStyle: {
              normal: {
                color: params => {
                  console.log(this);
                  // var colorList = ['#a3e1d4','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9'];
                  //  return colorList[params.dataIndex]
                  return getRanking(ranking_pr(this.kindskill_arr)).arr_2017[
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
            data: getRanking(ranking_pr(this.kindskill_arr)).arr_2018,
            label: labelOption,
            itemStyle: {
              normal: {
                color: params => {
                  // var colorList = ['#6dbccf','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9'];
                  // return colorList[params.dataIndex]
                  return getRanking(ranking_pr(this.kindskill_arr)).arr_2018[
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
            data: getRanking(ranking_pr(this.kindskill_arr)).arr_2019,
            label: labelOption,
            itemStyle: {
              normal: {
                color: params => {
                  // var colorList = ['#17b3a3','#808080','#808080','#808080','#808080','#808080','#808080','#808080','#808080','#808080'];
                  // return colorList[params.dataIndex]
                  return getRanking(ranking_pr(this.kindskill_arr)).arr_2019[
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
            ximenzi: "1",
            haier: "8",
            rongsheng: "2",
            sanxing: "3",
            haixin: "7",
            meidi: "4",
            meiling: "5",
            kashadi: "5"
          },
          {
            year: "18年",
            ximenzi: "-",
            haier: "7",
            rongsheng: "2",
            sanxing: "2",
            haixin: "6",
            meidi: "4",
            meiling: "5",
            kashadi: "1"
          },
          {
            year: "17年",
            ximenzi: "-",
            haier: "1",
            rongsheng: "7",
            sanxing: "3",
            haixin: "2",
            meidi: "5",
            meiling: "4",
            kashadi: "6"
          }
        ];
      } else if (index == "13") {
        this.xAxis = [
          {
            type: "category",
            // data: ['海信','三星','索尼','夏普','小米','TCL','海尔','创维'],
            data: getRanking(ranking_pr(this.hot)).arr_name,
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
            data: getRanking(ranking_pr(this.hot)).arr_2017,
            label: labelOption,
            itemStyle: {
              normal: {
                color: params => {
                  console.log(this);
                  // var colorList = ['#a3e1d4','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9'];
                  //  return colorList[params.dataIndex]
                  return getRanking(ranking_pr(this.hot)).arr_2017[
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
            data: getRanking(ranking_pr(this.hot)).arr_2018,
            label: labelOption,
            itemStyle: {
              normal: {
                color: params => {
                  // var colorList = ['#6dbccf','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9'];
                  // return colorList[params.dataIndex]
                  return getRanking(ranking_pr(this.hot)).arr_2018[
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
            data: getRanking(ranking_pr(this.hot)).arr_2019,
            label: labelOption,
            itemStyle: {
              normal: {
                color: params => {
                  // var colorList = ['#17b3a3','#808080','#808080','#808080','#808080','#808080','#808080','#808080','#808080','#808080'];
                  // return colorList[params.dataIndex]
                  return getRanking(ranking_pr(this.hot)).arr_2019[
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
            ximenzi: "6",
            haier: "2",
            rongsheng: "3",
            sanxing: "7",
            haixin: "4",
            meidi: "-",
            meiling: "5",
            kashadi: "1"
          },
          {
            year: "18年",
            ximenzi: "6",
            haier: "2",
            rongsheng: "2",
            sanxing: "6",
            haixin: "4",
            meidi: "5",
            meiling: "1",
            kashadi: "-"
          },
          {
            year: "17年",
            ximenzi: "-",
            haier: "7",
            rongsheng: "3",
            sanxing: "2",
            haixin: "5",
            meidi: "4",
            meiling: "6",
            kashadi: "-"
          }
        ];
      } else if (index == "14") {
        this.xAxis = [
          {
            type: "category",
            // data: ['海信','三星','索尼','夏普','小米','TCL','海尔','创维'],
            data: getRanking(ranking_pr(this.lieght)).arr_name,
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
            data: getRanking(ranking_pr(this.lieght)).arr_2017,
            label: labelOption,
            itemStyle: {
              normal: {
                color: params => {
                  console.log(this);
                  // var colorList = ['#a3e1d4','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9'];
                  //  return colorList[params.dataIndex]
                  return getRanking(ranking_pr(this.lieght)).arr_2017[
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
            data: getRanking(ranking_pr(this.lieght)).arr_2018,
            label: labelOption,
            itemStyle: {
              normal: {
                color: params => {
                  // var colorList = ['#6dbccf','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9'];
                  // return colorList[params.dataIndex]
                  return getRanking(ranking_pr(this.lieght)).arr_2018[
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
            data: getRanking(ranking_pr(this.lieght)).arr_2019,
            label: labelOption,
            itemStyle: {
              normal: {
                color: params => {
                  // var colorList = ['#17b3a3','#808080','#808080','#808080','#808080','#808080','#808080','#808080','#808080','#808080'];
                  // return colorList[params.dataIndex]
                  return getRanking(ranking_pr(this.lieght)).arr_2019[
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
            ximenzi: "2",
            haier: "4",
            rongsheng: "4",
            sanxing: "7",
            haixin: "1",
            meidi: "3",
            meiling: "8",
            kashadi: "6"
          },
          {
            year: "18年",
            ximenzi: "6",
            haier: "6",
            rongsheng: "2",
            sanxing: "4",
            haixin: "4",
            meidi: "1",
            meiling: "3",
            kashadi: "6"
          },
          {
            year: "17年",
            ximenzi: "2",
            haier: "1",
            rongsheng: "2",
            sanxing: "5",
            haixin: "2",
            meidi: "-",
            meiling: "5",
            kashadi: "-"
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
