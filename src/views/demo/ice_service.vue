<template>
  <div class="tv_product">
    <el-row :gutter="20">
      <el-col :span="24">
        <el-card>
          <h3 class="chart_title">海信冰箱服务NPS安装环节</h3>
          <div id="TVproduct_chartBarBox" class="chart-box"></div>
          <p style="margin-left:100px;color:#FFD700">* 政策达成度base＜30，结果未出示。</p>
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
        <div id="chartService" class="chartServiceBox"></div>
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

        <!-- 列表数据 -->
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
        >指标关注度:{{item.attention}}</span>-->
        <!-- </div> -->
        <!-- :style="{height:item.show2?35*3+35+'px':item.tableData.length*35+35+'px'}" -->
        <!-- <div
                  class="transition"
                >
                  <el-table :data="item.tableData" style="width: 100%">
                    <el-table-column type="index" label="名次" width="50">
                      <template slot-scope="scope">
                .        <p :style="{color:scope.row.name =='海信'?'#f8ac59':''}">{{ scope.$index+1 }}</p>
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
    <el-row :gutter="20">
      <el-col :span="24">
        <el-card>
          <h3 class="chart_title">海信冰箱服务NPS维修环节</h3>
          <div id="TVproductfix_chartBarBox" class="chart-box"></div>
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
        <el-select v-model="value" placeholder="请选择" @change="fixChange">
          <el-option
            v-for="item in fixoptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
            :disabled="item.disabled"
          ></el-option>
        </el-select>
        <div id="chartFixService" class="chartServiceBox"></div>
        <div style="padding-left:125px;margin-top:30px">
          <el-table :data="tableDataunder" style="width: 100%">
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

        <!-- 列表数据 -->
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
        >指标关注度:{{item.attention}}</span>-->
        <!-- </div> -->
        <!-- :style="{height:item.show2?35*3+35+'px':item.tableData.length*35+35+'px'}" -->
        <!-- <div
                  class="transition"
                >
                  <el-table :data="item.tableData" style="width: 100%">
                    <el-table-column type="index" label="名次" width="50">
                      <template slot-scope="scope">
                .        <p :style="{color:scope.row.name =='海信'?'#f8ac59':''}">{{ scope.$index+1 }}</p>
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
//维修初次显示的数据
var tv_arr = [
  {
    name: "美菱",
    value_2017: "8.58",
    value_2018: "8.19",
    value_2019: "8.73"
  },

  {
    name: "三星",
    value_2017: "8.25",
    value_2018: "8.40",
    value_2019: "8.40"
  },
  {
    name: "卡萨帝",
    value_2017: "-",
    value_2018: "8.75",
    value_2019: "8.86"
  },
  {
    name: "美的",
    value_2017: "8.27",
    value_2018: "8.33",
    value_2019: "8.57"
  },
  {
    name: "海尔",
    value_2017: "8.52",
    value_2018: "8.52",
    value_2019: "8.57"
  },
  {
    name: "西门子",
    value_2017: "8.53",
    value_2018: "8.26",
    value_2019: "8.71"
  },
  {
    name: "容声",
    value_2017: "8.76",
    value_2018: "8.27",
    value_2019: "8.41"
  },
  {
    name: "海信",
    value_2017: "8.50",
    value_2018: "8.22",
    value_2019: "8.34"
  }
];
//安装初始化时显示的数据
var service_arr = [
  {
    name: "美菱",
    value_2017: "8.53",
    value_2018: "8.72",
    value_2019: "9.20"
  },

  {
    name: "三星",
    value_2017: "8.21",
    value_2018: "8.71",
    value_2019: "9.01"
  },
  {
    name: "卡萨帝",
    value_2017: "-",
    value_2018: "9.12",
    value_2019: "8.93"
  },
  {
    name: "美的",
    value_2017: "8.45",
    value_2018: "9.00",
    value_2019: "8.89"
  },
  {
    name: "海尔",
    value_2017: "8.10",
    value_2018: "9.07",
    value_2019: "8.88"
  },
  {
    name: "西门子",
    value_2017: "8.87",
    value_2018: "9.17",
    value_2019: "8.81"
  },
  {
    name: "容声",
    value_2017: "8.87",
    value_2018: "9.17",
    value_2019: "8.81"
  },
  {
    name: "海信",
    value_2017: "8.81",
    value_2018: "8.93",
    value_2019: "8.76"
  }
];
// 根据2018年的值进行由大到小排序
function ranking_pr(arr) {
  for (var i = 0; i < arr.length; i++) {
    for (var j = i + 1; j < arr.length; j++) {
      if (Number(arr[i].value_2019) < Number(arr[j].value_2019)) {
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
  ice_installrepresentat,
  ice_installattention,
  iceserviceInstall_tableData,
  iceservicefix_tableData,
  ice_fixattention,
  ice_fixrepresentat
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
      // 服务安装环节
      chartBar: null,
      chartProduct: null,
      fixoptions: [
        {
          value: "1",
          label: "维修及时性"
        },
        {
          value: "2",
          label: "服务技能"
        },
        {
          value: "3",
          label: "服务人员态度"
        },
        {
          value: "4",
          label: "服务规范"
        },
        {
          value: "5",
          label: "热线服务"
        },
        {
          value: "6",
          label: "政策达成度"
        }
      ],

      TVproductfix_chartBarBox: null,
      chartFixService: null,

      //服务技能
      serviceKill: [
        {
          name: "美菱",
          value_2017: "8.53",
          value_2018: "8.72",
          value_2019: "9.20"
        },

        {
          name: "三星",
          value_2017: "8.21",
          value_2018: "8.71",
          value_2019: "9.01"
        },
        {
          name: "卡萨帝",
          value_2017: "-",
          value_2018: "9.12",
          value_2019: "8.93"
        },
        {
          name: "美的",
          value_2017: "8.45",
          value_2018: "9.00",
          value_2019: "8.89"
        },
        {
          name: "海尔",
          value_2017: "8.10",
          value_2018: "9.07",
          value_2019: "8.88"
        },
        {
          name: "西门子",
          value_2017: "8.87",
          value_2018: "9.17",
          value_2019: "8.81"
        },
        {
          name: "容声",
          value_2017: "8.87",
          value_2018: "9.17",
          value_2019: "8.81"
        },
        {
          name: "海信",
          value_2017: "8.81",
          value_2018: "8.93",
          value_2019: "8.76"
        }
      ],
      //安装及时性
      ontime: [
        {
          name: "美菱",
          value_2017: "8.71",
          value_2018: "7.96",
          value_2019: "8.40"
        },

        {
          name: "三星",
          value_2017: "8.57",
          value_2018: "8.33",
          value_2019: "8.59"
        },
        {
          name: "卡萨帝",
          value_2017: "-",
          value_2018: "8.49",
          value_2019: "8.61"
        },
        {
          name: "美的",
          value_2017: "8.72",
          value_2018: "8.05",
          value_2019: "8.76"
        },
        {
          name: "海尔",
          value_2017: "9.21",
          value_2018: "8.12",
          value_2019: "8.85"
        },
        {
          name: "西门子",
          value_2017: "8.57",
          value_2018: "8.20",
          value_2019: "8.78"
        },
        {
          name: "容声",
          value_2017: "8.45",
          value_2018: "8.25",
          value_2019: "8.70"
        },
        {
          name: "海信",
          value_2017: "8.66",
          value_2018: "8.16",
          value_2019: "8.79"
        }
      ],
      //服务人员态度
      serviceman: [
        {
          name: "美菱",
          value_2017: "8.44",
          value_2018: "9.06",
          value_2019: "8.51"
        },

        {
          name: "三星",
          value_2017: "8.63",
          value_2018: "8.36",
          value_2019: "8.95"
        },
        {
          name: "卡萨帝",
          value_2017: "-",
          value_2018: "8.67",
          value_2019: "9.12"
        },
        {
          name: "美的",
          value_2017: "8.63",
          value_2018: "9.00",
          value_2019: "8.61"
        },
        {
          name: "海尔",
          value_2017: "8.88",
          value_2018: "8.74",
          value_2019: "8.74"
        },
        {
          name: "西门子",
          value_2017: "8.94",
          value_2018: "8.77",
          value_2019: "8.94"
        },
        {
          name: "容声",
          value_2017: "8.43",
          value_2018: "8.45",
          value_2019: "8.77"
        },
        {
          name: "海信",
          value_2017: "8.59",
          value_2018: "9.38",
          value_2019: "8.76"
        }
      ],
      //服务规范
      serviceplan: [
        {
          name: "美菱",
          value_2017: "7.55",
          value_2018: "9.17",
          value_2019: "8.81"
        },

        {
          name: "三星",
          value_2017: "8.67",
          value_2018: "8.96",
          value_2019: "8.39"
        },
        {
          name: "卡萨帝",
          value_2017: "-",
          value_2018: "9.23",
          value_2019: "9.15"
        },
        {
          name: "美的",
          value_2017: "8.13",
          value_2018: "8.93",
          value_2019: "8.73"
        },
        {
          name: "海尔",
          value_2017: "8.11",
          value_2018: "9.00",
          value_2019: "8.72"
        },
        {
          name: "西门子",
          value_2017: "8.75",
          value_2018: "8.63",
          value_2019: "9.06"
        },
        {
          name: "容声",
          value_2017: "7.80",
          value_2018: "8.64",
          value_2019: "9.08"
        },
        {
          name: "海信",
          value_2017: "7.31",
          value_2018: "8.45",
          value_2019: "8.88"
        }
      ],
      //热线服务
      online: [
        {
          name: "美菱",
          value_2017: "-",
          value_2018: "-",
          value_2019: "7.33"
        },

        {
          name: "三星",
          value_2017: "-",
          value_2018: "-",
          value_2019: "8.67"
        },
        {
          name: "卡萨帝",
          value_2017: "-",
          value_2018: "-",
          value_2019: "8.00"
        },
        {
          name: "美的",
          value_2017: "-",
          value_2018: "-",
          value_2019: "8.50"
        },
        {
          name: "海尔",
          value_2017: "-",
          value_2018: "-",
          value_2019: "8.17"
        },
        {
          name: "西门子",
          value_2017: "-",
          value_2018: "-",
          value_2019: "10.00"
        },
        {
          name: "容声",
          value_2017: "-",
          value_2018: "-",
          value_2019: "8.33"
        },
        {
          name: "海信",
          value_2017: "-",
          value_2018: "-",
          value_2019: "8.00"
        }
      ],

      // servicekilltable:
      //维修及时性
      serviceinstallkill: [
        {
          name: "美菱",
          value_2017: "8.58",
          value_2018: "8.19",
          value_2019: "8.73"
        },

        {
          name: "三星",
          value_2017: "8.25",
          value_2018: "8.40",
          value_2019: "8.40"
        },
        {
          name: "卡萨帝",
          value_2017: "-",
          value_2018: "8.75",
          value_2019: "8.86"
        },
        {
          name: "美的",
          value_2017: "8.27",
          value_2018: "8.33",
          value_2019: "8.57"
        },
        {
          name: "海尔",
          value_2017: "8.52",
          value_2018: "8.52",
          value_2019: "8.57"
        },
        {
          name: "西门子",
          value_2017: "8.53",
          value_2018: "8.26",
          value_2019: "8.71"
        },
        {
          name: "容声",
          value_2017: "8.76",
          value_2018: "8.27",
          value_2019: "8.41"
        },
        {
          name: "海信",
          value_2017: "8.50",
          value_2018: "8.22",
          value_2019: "8.34"
        }
      ],
      //服务技能
      serviceinstallontime: [
        {
          name: "美菱",
          value_2017: "8.86",
          value_2018: "8.74",
          value_2019: "8.64"
        },

        {
          name: "三星",
          value_2017: "8.70",
          value_2018: "8.53",
          value_2019: "8.89"
        },
        {
          name: "卡萨帝",
          value_2017: "-",
          value_2018: "9.13",
          value_2019: "8.88"
        },
        {
          name: "美的",
          value_2017: "8.63",
          value_2018: "8.86",
          value_2019: "8.78"
        },
        {
          name: "海尔",
          value_2017: "8.77",
          value_2018: "8.85",
          value_2019: "9.14"
        },
        {
          name: "西门子",
          value_2017: "8.88",
          value_2018: "9.16",
          value_2019: "8.73"
        },
        {
          name: "容声",
          value_2017: "8.52",
          value_2018: "8.77",
          value_2019: "9.13"
        },
        {
          name: "海信",
          value_2017: "8.71",
          value_2018: "8.96",
          value_2019: "8.83"
        }
      ],
      //服务人员态度
      serviceinstallman: [
        {
          name: "美菱",
          value_2017: "8.50",
          value_2018: "8.55",
          value_2019: "8.61"
        },

        {
          name: "三星",
          value_2017: "8.37",
          value_2018: "8.93",
          value_2019: "9.07"
        },
        {
          name: "卡萨帝",
          value_2017: "-",
          value_2018: "8.79",
          value_2019: "8.84"
        },
        {
          name: "美的",
          value_2017: "8.79",
          value_2018: "8.57",
          value_2019: "8.97"
        },
        {
          name: "海尔",
          value_2017: "8.72",
          value_2018: "9.04",
          value_2019: "8.91"
        },
        {
          name: "西门子",
          value_2017: "8.88",
          value_2018: "9.16",
          value_2019: "8.73"
        },
        {
          name: "容声",
          value_2017: "8.43",
          value_2018: "9.26",
          value_2019: "8.84"
        },
        {
          name: "海信",
          value_2017: "8.36",
          value_2018: "8.93",
          value_2019: "8.76"
        }
      ],
      //服务规范
      serviceinstallplan: [
        {
          name: "美菱",
          value_2017: "7.40",
          value_2018: "8.56",
          value_2019: "8.79"
        },

        {
          name: "三星",
          value_2017: "7.75",
          value_2018: "8.22",
          value_2019: "9.08"
        },
        {
          name: "卡萨帝",
          value_2017: "-",
          value_2018: "7.53",
          value_2019: "9.00"
        },
        {
          name: "美的",
          value_2017: "8.00",
          value_2018: "8.61",
          value_2019: "8.82"
        },
        {
          name: "海尔",
          value_2017: "8.00",
          value_2018: "8.82",
          value_2019: "8.98"
        },
        {
          name: "西门子",
          value_2017: "7.42",
          value_2018: "8.33",
          value_2019: "9.02"
        },
        {
          name: "容声",
          value_2017: "8.25",
          value_2018: "8.62",
          value_2019: "8.98"
        },
        {
          name: "海信",
          value_2017: "7.70",
          value_2018: "8.24",
          value_2019: "9.45"
        }
      ],
      //热线服务
      fixonline: [
        {
          name: "美菱",
          value_2017: "-",
          value_2018: "-",
          value_2019: "8.00"
        },

        {
          name: "三星",
          value_2017: "-",
          value_2018: "-",
          value_2019: "7.80"
        },
        {
          name: "卡萨帝",
          value_2017: "-",
          value_2018: "-",
          value_2019: "6.50"
        },
        {
          name: "美的",
          value_2017: "-",
          value_2018: "-",
          value_2019: "8.00"
        },
        {
          name: "海尔",
          value_2017: "-",
          value_2018: "-",
          value_2019: "9.20"
        },
        {
          name: "西门子",
          value_2017: "-",
          value_2018: "-",
          value_2019: "8.00"
        },
        {
          name: "容声",
          value_2017: "-",
          value_2018: "-",
          value_2019: "7.50"
        },
        {
          name: "海信",
          value_2017: "-",
          value_2018: "-",
          value_2019: "9.13"
        }
      ],
      //政策达成度
      fixpolicy: [
        {
          name: "三星",
          value_2017: "-",
          value_2018: "-",
          value_2019: "6.20"
        },
        {
          name: "卡萨帝",
          value_2017: "-",
          value_2018: "-",
          value_2019: "9.00"
        },
        {
          name: "美的",
          value_2017: "-",
          value_2018: "-",
          value_2019: "8.00"
        },
        {
          name: "海尔",
          value_2017: "-",
          value_2018: "-",
          value_2019: "8.42"
        },
        {
          name: "西门子",
          value_2017: "-",
          value_2018: "-",
          value_2019: "7.75"
        },
          {
          name: "美菱",
          value_2017: "-",
          value_2018: "-",
          value_2019: '10.00'
        },

        {
          name: "容声",
          value_2017: "-",
          value_2018: "-",
          value_2019: "7.75"
        },
        {
          name: "海信",
          value_2017: "-",
          value_2018: "-",
          value_2019: "8.33"
        }
      ],

      //下拉菜单数据
      options: [
        {
          value: "1",
          label: "服务技能"
        },
        {
          value: "2",
          label: "安装及时性"
        },
        {
          value: "3",
          label: "服务人员态度"
        },
        {
          value: "4",
          label: "服务规范"
        },
        {
          value: "5",
          label: "热线服务"
        }
      ],
      value: "1",
      // tableData1Index: "",
      // tableData1: tableData1,
      // tableData2: tableData2,

      //服务NPS安装环节
      ice_installrepresentat: ice_installrepresentat,
      haixinData_x: [],
      ice_installattention: ice_installattention, //指标关注度
      data_lists: iceserviceInstall_tableData,
      percentArray: [3.5, 3.4, 2.3, 1.9, 0.6],

      //服务NPS维修环节
      ice_fixrepresentat: ice_fixrepresentat,
      haixinfixData_x: [],
      ice_fixattention: ice_fixattention, //指标关注度
      fixdata_lists: iceservicefix_tableData,
      fixpercentArray: [5.2, 2.9, 2.9, 1.0, 0.5, 0.5],

      //上表格菜单数据
      tableData: [
        {
          year: "19年",
          ximenzi: "6",
          haier: "5",
          rongsheng: "6",
          sanxing: "2",
          haixin: "8",
          meidi: "4",
          meiling: "1",
          kashadi: "3"
        },
        {
          year: "18年",
          ximenzi: "1",
          haier: "4",
          rongsheng: "3",
          sanxing: "8",
          haixin: "6",
          meidi: "5",
          meiling: "7",
          kashadi: "2"
        },
        {
          year: "17年",
          ximenzi: "1",
          haier: "7",
          rongsheng: "2",
          sanxing: "6",
          haixin: "3",
          meidi: "5",
          meiling: "4",
          kashadi: "-"
        }
      ],
      //下表格菜单数据
      tableDataunder: [
        {
          year: "19年",
          ximenzi: "3",
          haier: "4",
          rongsheng: "6",
          sanxing: "7",
          haixin: "8",
          meidi: "5",
          meiling: "2",
          kashadi: "1"
        },
        {
          year: "18年",
          ximenzi: "6",
          haier: "2",
          rongsheng: "5",
          sanxing: "7",
          haixin: "8",
          meidi: "4",
          meiling: "8",
          kashadi: "1"
        },
        {
          year: "17年",
          ximenzi: "3",
          haier: "4",
          rongsheng: "1",
          sanxing: "7",
          haixin: "5",
          meidi: "6",
          meiling: "2",
          kashadi: "-"
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
          //图例的数据数组，数组项通常是一个字符串，每一项代表一个系列的name
          //可删除处理，因为在系列中已经指定，没有指定data时，他会去series中读
          // 每一个series中的对象的name
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
          data: getRanking(ranking_pr(service_arr)).arr_name,
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
          data: getRanking(ranking_pr(service_arr)).arr_2017,

          label: labelOption,
          itemStyle: {
            normal: {
              color: function(params) {
                // var colorList = ['#a3e1d4','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9'];
                //  return colorList[params.dataIndex]
                return getRanking(ranking_pr(service_arr)).arr_2017[
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
          data: getRanking(ranking_pr(service_arr)).arr_2018,
          label: labelOption,
          itemStyle: {
            normal: {
              color: function(params) {
                // var colorList = ['#6dbccf','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9'];
                // return colorList[params.dataIndex]
                return getRanking(ranking_pr(service_arr)).arr_2018[
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
          data: getRanking(ranking_pr(service_arr)).arr_2019,
          label: labelOption,
          itemStyle: {
            normal: {
              color: function(params) {
                // var colorList = ['#17b3a3','#808080','#808080','#808080','#808080','#808080','#808080','#808080','#808080','#808080'];
                // return colorList[params.dataIndex]
                return getRanking(ranking_pr(service_arr)).arr_2019[
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
      ],

      //维修环节柱状图初始化状态配置
      xAxis1: [
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
      series1: [
        {
          name: "2017",
          type: "bar",
          // data:[ 58.8, 65.6, 66.6, 53.7, "","51.0",55.0,"51.0"],
          data: getRanking(ranking_pr(tv_arr)).arr_2017,

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
      ]
    };
  },
  created() {
    console.log(ranking_pr(this.fixpolicy))
    var that = this;
    //服务NPS安装环节
    for (var a = 0; a < this.data_lists.length; a++) {
      // console.log(this.data_lists)
      that.data_lists[a].tableData = ranking(that.data_lists[a].tableData);
      that.data_lists[a].tableDataIndex = ranking_index(
        that.data_lists[a].tableData
      );
    }

    // this.tableData1 = ranking(that.tableData1);
    // this.tableData1Index = ranking_index(that.tableData1);
    // this.tableData2 = ranking(that.tableData2);
    // this.tableData2Index = ranking_index(that.tableData2);

    this.ice_installattention = ranking(that.ice_installattention);
    this.ice_installrepresentat = getData2(
      ice_installattention,
      that.ice_installrepresentat
    );
    this.haixinData_x = getData_x(that.ice_installrepresentat, [
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
        "%"
      // "\n" + that.data_lists[4].tableDataIndex+"\n" + that.percentArray[4]+"%",
      // "\n" + that.data_lists[5].tableDataIndex+"\n" + that.percentArray[5]+"%",
      // "\n" + that.data_lists[6].tableDataIndex+"\n" + that.percentArray[6]+"%"
    ]);

    //服务NPS维修环节
    for (var a = 0; a < this.fixdata_lists.length; a++) {
      // console.log(this.fixdata_lists)
      that.fixdata_lists[a].tableData = ranking(
        that.fixdata_lists[a].tableData
      );
      that.fixdata_lists[a].tableDataIndex = ranking_index(
        that.fixdata_lists[a].tableData
      );
    }

    // this.tableData1 = ranking(that.tableData1);
    // this.tableData1Index = ranking_index(that.tableData1);
    // this.tableData2 = ranking(that.tableData2);
    // this.tableData2Index = ranking_index(that.tableData2);

    this.ice_fixattention = ranking(that.ice_fixattention);
    this.ice_fixrepresentat = getData2(
      ice_fixattention,
      that.ice_fixrepresentat
    );
    this.haixinfixData_x = getData_x(that.ice_fixrepresentat, [
      "\n" +
        that.fixdata_lists[0].tableDataIndex +
        "\n" +
        that.fixpercentArray[0] +
        "%",
      "\n" +
        that.fixdata_lists[1].tableDataIndex +
        "\n" +
        that.fixpercentArray[1] +
        "%",
      "\n" +
        that.fixdata_lists[2].tableDataIndex +
        "\n" +
        that.fixpercentArray[2] +
        "%",
      "\n" +
        that.fixdata_lists[3].tableDataIndex +
        "\n" +
        that.fixpercentArray[3] +
        "%",
      "\n" +
        that.fixdata_lists[4].tableDataIndex +
        "\n" +
        that.fixpercentArray[4] +
        "%",
      "\n" +
        that.fixdata_lists[5].tableDataIndex +
        "\n" +
        that.fixpercentArray[5] +
        "%"
      // "\n" + that.data_lists[4].tableDataIndex+"\n" + that.percentArray[4]+"%",
      // "\n" + that.data_lists[5].tableDataIndex+"\n" + that.percentArray[5]+"%",
      // "\n" + that.data_lists[6].tableDataIndex+"\n" + that.percentArray[6]+"%"
    ]);
  },
  mounted() {
    this.initChartBar();
    this.initServiceChart();
    this.initTVproductfix_chartBarBox();
    this.initchartFixService();
  },
  activated() {
    // 由于给echart添加了resize事件, 在组件激活时需要重新resize绘画一次, 否则出现空白bug
    if (this.chartBar) {
      this.chartBar.resize();
    }
    if (this.chartProduct) {
      this.chartProduct.resize();
    }
    if (this.chartFixService) {
      this.chartFixService.resize();
    }
  },

  methods: {
    currentChange(index) {
      console.log(this.xAxis[0].data);
      if (index == "1") {
        this.xAxis = [
          {
            type: "category",
            // data: ['海信','三星','索尼','夏普','小米','TCL','海尔','创维'],
            data: getRanking(ranking_pr(this.serviceKill)).arr_name,
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
            data: getRanking(ranking_pr(this.serviceKill)).arr_2017,
            label: labelOption,
            itemStyle: {
              normal: {
                color: params => {
                  console.log(this);
                  // var colorList = ['#a3e1d4','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9'];
                  //  return colorList[params.dataIndex]
                  return getRanking(ranking_pr(this.serviceKill)).arr_2017[
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
            data: getRanking(ranking_pr(this.serviceKill)).arr_2018,
            label: labelOption,
            itemStyle: {
              normal: {
                color: params => {
                  // var colorList = ['#6dbccf','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9'];
                  // return colorList[params.dataIndex]
                  return getRanking(ranking_pr(this.serviceKill)).arr_2018[
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
            data: getRanking(ranking_pr(this.serviceKill)).arr_2019,
            label: labelOption,
            itemStyle: {
              normal: {
                color: params => {
                  // var colorList = ['#17b3a3','#808080','#808080','#808080','#808080','#808080','#808080','#808080','#808080','#808080'];
                  // return colorList[params.dataIndex]
                  return getRanking(ranking_pr(this.serviceKill)).arr_2019[
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
            rongsheng: "6",
            sanxing: "2",
            haixin: "8",
            meidi: "4",
            meiling: "1",
            kashadi: "3"
          },
          {
            year: "18年",
            ximenzi: "1",
            haier: "4",
            rongsheng: "3",
            sanxing: "8",
            haixin: "6",
            meidi: "5",
            meiling: "7",
            kashadi: "2"
          },
          {
            year: "17年",
            ximenzi: "1",
            haier: "7",
            rongsheng: "2",
            sanxing: "6",
            haixin: "3",
            meidi: "5",
            meiling: "4",
            kashadi: "-"
          }
        ];
      } else if (index == "2") {
        this.xAxis = [
          {
            type: "category",
            // data: ['海信','三星','索尼','夏普','小米','TCL','海尔','创维'],
            data: getRanking(ranking_pr(this.ontime)).arr_name,
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
            data: getRanking(ranking_pr(this.ontime)).arr_2017,
            label: labelOption,
            itemStyle: {
              normal: {
                color: params => {
                  console.log(this);
                  // var colorList = ['#a3e1d4','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9'];
                  //  return colorList[params.dataIndex]
                  return getRanking(ranking_pr(this.ontime)).arr_2017[
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
            data: getRanking(ranking_pr(this.ontime)).arr_2018,
            label: labelOption,
            itemStyle: {
              normal: {
                color: params => {
                  // var colorList = ['#6dbccf','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9'];
                  // return colorList[params.dataIndex]
                  return getRanking(ranking_pr(this.ontime)).arr_2018[
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
            data: getRanking(ranking_pr(this.ontime)).arr_2019,
            label: labelOption,
            itemStyle: {
              normal: {
                color: params => {
                  // var colorList = ['#17b3a3','#808080','#808080','#808080','#808080','#808080','#808080','#808080','#808080','#808080'];
                  // return colorList[params.dataIndex]
                  return getRanking(ranking_pr(this.ontime)).arr_2019[
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
            haier: "1",
            rongsheng: "5",
            sanxing: "7",
            haixin: "2",
            meidi: "4",
            meiling: "8",
            kashadi: "6"
          },
          {
            year: "18年",
            ximenzi: "4",
            haier: "6",
            rongsheng: "3",
            sanxing: "2",
            haixin: "5",
            meidi: "7",
            meiling: "8",
            kashadi: "1"
          },
          {
            year: "17年",
            ximenzi: "6",
            haier: "1",
            rongsheg: "7",
            sanxing: "5",
            haixin: "4",
            meidi: "2",
            meiling: "3",
            kashadi: "-"
          }
        ];
      } else if (index == "3") {
        this.xAxis = [
          {
            type: "category",
            // data: ['海信','三星','索尼','夏普','小米','TCL','海尔','创维'],
            data: getRanking(ranking_pr(this.serviceman)).arr_name,
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
            data: getRanking(ranking_pr(this.serviceman)).arr_2017,
            label: labelOption,
            itemStyle: {
              normal: {
                color: params => {
                  console.log(this);
                  // var colorList = ['#a3e1d4','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9'];
                  //  return colorList[params.dataIndex]
                  return getRanking(ranking_pr(this.serviceman)).arr_2017[
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
            data: getRanking(ranking_pr(this.serviceman)).arr_2018,
            label: labelOption,
            itemStyle: {
              normal: {
                color: params => {
                  // var colorList = ['#6dbccf','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9'];
                  // return colorList[params.dataIndex]
                  return getRanking(ranking_pr(this.serviceman)).arr_2018[
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
            data: getRanking(ranking_pr(this.serviceman)).arr_2019,
            label: labelOption,
            itemStyle: {
              normal: {
                color: params => {
                  // var colorList = ['#17b3a3','#808080','#808080','#808080','#808080','#808080','#808080','#808080','#808080','#808080'];
                  // return colorList[params.dataIndex]
                  return getRanking(ranking_pr(this.serviceman)).arr_2019[
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
            haier: "6",
            rongsheng: "4",
            sanxing: "2",
            haixin: "5",
            meidi: "7",
            meiling: "8",
            kashadi: "5"
          },
          {
            year: "18年",
            ximenzi: "4",
            haier: "5",
            rongsheng: "7",
            sanxing: "8",
            haixin: "1",
            meidi: "3",
            meiling: "2",
            kashadi: "6"
          },
          {
            year: "17年",
            ximenzi: "1",
            haier: "2",
            rongsheng: "7",
            sanxing: "3",
            haixin: "5",
            meidi: "4",
            meiling: "6",
            kashadi: "-"
          }
        ];
      } else if (index == "4") {
        this.xAxis = [
          {
            type: "category",
            // data: ['海信','三星','索尼','夏普','小米','TCL','海尔','创维'],
            data: getRanking(ranking_pr(this.serviceplan)).arr_name,
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
            data: getRanking(ranking_pr(this.serviceplan)).arr_2017,
            label: labelOption,
            itemStyle: {
              normal: {
                color: params => {
                  console.log(this);
                  // var colorList = ['#a3e1d4','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9'];
                  //  return colorList[params.dataIndex]
                  return getRanking(ranking_pr(this.serviceplan)).arr_2017[
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
            data: getRanking(ranking_pr(this.serviceplan)).arr_2018,
            label: labelOption,
            itemStyle: {
              normal: {
                color: params => {
                  // var colorList = ['#6dbccf','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9'];
                  // return colorList[params.dataIndex]
                  return getRanking(ranking_pr(this.serviceplan)).arr_2018[
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
            data: getRanking(ranking_pr(this.serviceplan)).arr_2019,
            label: labelOption,
            itemStyle: {
              normal: {
                color: params => {
                  // var colorList = ['#17b3a3','#808080','#808080','#808080','#808080','#808080','#808080','#808080','#808080','#808080'];
                  // return colorList[params.dataIndex]
                  return getRanking(ranking_pr(this.serviceplan)).arr_2019[
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
            haier: "7",
            rongsheng: "2",
            sanxing: "8",
            haixin: "4",
            meidi: "6",
            meiling: "5",
            kashadi: "1"
          },
          {
            year: "18年",
            ximenzi: "7",
            haier: "3",
            rongsheng: "6",
            sanxing: "8",
            haixin: "4",
            meidi: "5",
            meiling: "2",
            kashadi: "1"
          },
          {
            year: "17年",
            ximenzi: "1",
            haier: "4",
            rongsheng: "5",
            sanxing: "2",
            haixin: "7",
            meidi: "3",
            meiling: "6",
            kashadi: "-"
          }
        ];
      } else if (index == "5") {
        this.xAxis = [
          {
            type: "category",
            // data: ['海信','三星','索尼','夏普','小米','TCL','海尔','创维'],
            data: getRanking(ranking_pr(this.online)).arr_name,
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
            data: getRanking(ranking_pr(this.online)).arr_2017,
            label: labelOption,
            itemStyle: {
              normal: {
                color: params => {
                  console.log(this);
                  // var colorList = ['#a3e1d4','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9'];
                  //  return colorList[params.dataIndex]
                  return getRanking(ranking_pr(this.online)).arr_2017[
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
            data: getRanking(ranking_pr(this.online)).arr_2018,
            label: labelOption,
            itemStyle: {
              normal: {
                color: params => {
                  // var colorList = ['#6dbccf','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9'];
                  // return colorList[params.dataIndex]
                  return getRanking(ranking_pr(this.online)).arr_2018[
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
            data: getRanking(ranking_pr(this.online)).arr_2019,
            label: labelOption,
            itemStyle: {
              normal: {
                color: params => {
                  // var colorList = ['#17b3a3','#808080','#808080','#808080','#808080','#808080','#808080','#808080','#808080','#808080'];
                  // return colorList[params.dataIndex]
                  return getRanking(ranking_pr(this.online)).arr_2019[
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
            haixin: "6",
            meidi: "3",
            meiling: "8",
            kashadi: "6"
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
      }
      this.initServiceChart();
    },
    fixChange(index) {
      if (index == "1") {
        this.xAxis1 = [
          {
            type: "category",
            // data: ['海信','三星','索尼','夏普','小米','TCL','海尔','创维'],
            data: getRanking(ranking_pr(this.serviceinstallkill)).arr_name,
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
        this.series1 = [
          {
            name: "2017",
            type: "bar",
            // data:[ 58.8, 65.6, 66.6, 53.7, "","51.0",55.0,"51.0"],
            data: getRanking(ranking_pr(this.serviceinstallkill)).arr_2017,
            label: labelOption,
            itemStyle: {
              normal: {
                color: params => {
                  console.log(this);
                  // var colorList = ['#a3e1d4','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9'];
                  //  return colorList[params.dataIndex]
                  return getRanking(ranking_pr(this.serviceinstallkill))
                    .arr_2017[params.dataIndex].color;
                }
              }
            }
          },
          {
            name: "2018",
            type: "bar",
            // data:[ 58.3, 60.6, 67.2, 52.5, "",50.3,48.4,49.3],
            data: getRanking(ranking_pr(this.serviceinstallkill)).arr_2018,
            label: labelOption,
            itemStyle: {
              normal: {
                color: params => {
                  // var colorList = ['#6dbccf','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9'];
                  // return colorList[params.dataIndex]
                  return getRanking(ranking_pr(this.serviceinstallkill))
                    .arr_2018[params.dataIndex].color;
                }
              }
            }
          },
          {
            name: "2019",
            type: "bar",
            // data:[ 62.4, 63.7, 66.0, 58.1, 56.5,55.9,54.1,56.3],
            data: getRanking(ranking_pr(this.serviceinstallkill)).arr_2019,
            label: labelOption,
            itemStyle: {
              normal: {
                color: params => {
                  // var colorList = ['#17b3a3','#808080','#808080','#808080','#808080','#808080','#808080','#808080','#808080','#808080'];
                  // return colorList[params.dataIndex]
                  return getRanking(ranking_pr(this.serviceinstallkill))
                    .arr_2019[params.dataIndex].color;
                }
              }
            }
          }
        ];
        this.tableDataunder = [
          {
            year: "19年",
            ximenzi: "3",
            haier: "4",
            rongsheng: "6",
            sanxing: "7",
            haixin: "8",
            meidi: "5",
            meiling: "2",
            kashadi: "1"
          },
          {
            year: "18年",
            ximenzi: "6",
            haier: "2",
            rongsheng: "5",
            sanxing: "7",
            haixin: "8",
            meidi: "4",
            meiling: "8",
            kashadi: "1"
          },
          {
            year: "17年",
            ximenzi: "3",
            haier: "4",
            rongsheng: "1",
            sanxing: "7",
            haixin: "5",
            meidi: "6",
            meiling: "2",
            kashadi: "-"
          }
        ];
      } else if (index == "2") {
        this.xAxis1 = [
          {
            type: "category",
            // data: ['海信','三星','索尼','夏普','小米','TCL','海尔','创维'],
            data: getRanking(ranking_pr(this.serviceinstallontime)).arr_name,
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
        this.series1 = [
          {
            name: "2017",
            type: "bar",
            // data:[ 58.8, 65.6, 66.6, 53.7, "","51.0",55.0,"51.0"],
            data: getRanking(ranking_pr(this.serviceinstallontime)).arr_2017,
            label: labelOption,
            itemStyle: {
              normal: {
                color: params => {
                  console.log(this);
                  // var colorList = ['#a3e1d4','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9'];
                  //  return colorList[params.dataIndex]
                  return getRanking(ranking_pr(this.serviceinstallontime))
                    .arr_2017[params.dataIndex].color;
                }
              }
            }
          },
          {
            name: "2018",
            type: "bar",
            // data:[ 58.3, 60.6, 67.2, 52.5, "",50.3,48.4,49.3],
            data: getRanking(ranking_pr(this.serviceinstallontime)).arr_2018,
            label: labelOption,
            itemStyle: {
              normal: {
                color: params => {
                  // var colorList = ['#6dbccf','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9'];
                  // return colorList[params.dataIndex]
                  return getRanking(ranking_pr(this.serviceinstallontime))
                    .arr_2018[params.dataIndex].color;
                }
              }
            }
          },
          {
            name: "2019",
            type: "bar",
            // data:[ 62.4, 63.7, 66.0, 58.1, 56.5,55.9,54.1,56.3],
            data: getRanking(ranking_pr(this.serviceinstallontime)).arr_2019,
            label: labelOption,
            itemStyle: {
              normal: {
                color: params => {
                  // var colorList = ['#17b3a3','#808080','#808080','#808080','#808080','#808080','#808080','#808080','#808080','#808080'];
                  // return colorList[params.dataIndex]
                  return getRanking(ranking_pr(this.serviceinstallontime))
                    .arr_2019[params.dataIndex].color;
                }
              }
            }
          }
        ];
        this.tableDataunder = [
          {
            year: "19年",
            ximenzi: "7",
            haier: "1",
            rongsheng: "2",
            sanxing: "3",
            haixin: "5",
            meidi: "6",
            meiling: "8",
            kashadi: "4"
          },
          {
            year: "18年",
            ximenzi: "1",
            haier: "5",
            rongsheng: "6",
            sanxing: "8",
            haixin: "3",
            meidi: "4",
            meiling: "7",
            kashadi: "2"
          },
          {
            year: "17年",
            ximenzi: "1",
            haier: "3",
            rongsheg: "7",
            sanxing: "5",
            haixin: "4",
            meidi: "6",
            meiling: "2",
            kashadi: "-"
          }
        ];
      } else if (index == "3") {
        this.xAxis1 = [
          {
            type: "category",
            // data: ['海信','三星','索尼','夏普','小米','TCL','海尔','创维'],
            data: getRanking(ranking_pr(this.serviceinstallman)).arr_name,
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
        this.series1 = [
          {
            name: "2017",
            type: "bar",
            // data:[ 58.8, 65.6, 66.6, 53.7, "","51.0",55.0,"51.0"],
            data: getRanking(ranking_pr(this.serviceinstallman)).arr_2017,
            label: labelOption,
            itemStyle: {
              normal: {
                color: params => {
                  console.log(this);
                  // var colorList = ['#a3e1d4','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9'];
                  //  return colorList[params.dataIndex]
                  return getRanking(ranking_pr(this.serviceinstallman))
                    .arr_2017[params.dataIndex].color;
                }
              }
            }
          },
          {
            name: "2018",
            type: "bar",
            // data:[ 58.3, 60.6, 67.2, 52.5, "",50.3,48.4,49.3],
            data: getRanking(ranking_pr(this.serviceinstallman)).arr_2018,
            label: labelOption,
            itemStyle: {
              normal: {
                color: params => {
                  // var colorList = ['#6dbccf','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9'];
                  // return colorList[params.dataIndex]
                  return getRanking(ranking_pr(this.serviceinstallman))
                    .arr_2018[params.dataIndex].color;
                }
              }
            }
          },
          {
            name: "2019",
            type: "bar",
            // data:[ 62.4, 63.7, 66.0, 58.1, 56.5,55.9,54.1,56.3],
            data: getRanking(ranking_pr(this.serviceinstallman)).arr_2019,
            label: labelOption,
            itemStyle: {
              normal: {
                color: params => {
                  // var colorList = ['#17b3a3','#808080','#808080','#808080','#808080','#808080','#808080','#808080','#808080','#808080'];
                  // return colorList[params.dataIndex]
                  return getRanking(ranking_pr(this.serviceinstallman))
                    .arr_2019[params.dataIndex].color;
                }
              }
            }
          }
        ];
        this.tableDataunder = [
          {
            year: "19年",
            ximenzi: "7",
            haier: "3",
            rongsheng: "4",
            sanxing: "1",
            haixin: "6",
            meidi: "2",
            meiling: "8",
            kashadi: "4"
          },
          {
            year: "18年",
            ximenzi: "3",
            haier: "2",
            rongsheng: "1",
            sanxing: "3",
            haixin: "3",
            meidi: "6",
            meiling: "7",
            kashadi: "5"
          },
          {
            year: "17年",
            ximenzi: "3",
            haier: "2",
            rongsheng: "5",
            sanxing: "6",
            haixin: "7",
            meidi: "1",
            meiling: "4",
            kashadi: "-"
          }
        ];
      } else if (index == "4") {
        this.xAxis1 = [
          {
            type: "category",
            // data: ['海信','三星','索尼','夏普','小米','TCL','海尔','创维'],
            data: getRanking(ranking_pr(this.serviceinstallplan)).arr_name,
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
        this.series1 = [
          {
            name: "2017",
            type: "bar",
            // data:[ 58.8, 65.6, 66.6, 53.7, "","51.0",55.0,"51.0"],
            data: getRanking(ranking_pr(this.serviceinstallplan)).arr_2017,
            label: labelOption,
            itemStyle: {
              normal: {
                color: params => {
                  console.log(this);
                  // var colorList = ['#a3e1d4','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9'];
                  //  return colorList[params.dataIndex]
                  return getRanking(ranking_pr(this.serviceinstallplan))
                    .arr_2017[params.dataIndex].color;
                }
              }
            }
          },
          {
            name: "2018",
            type: "bar",
            // data:[ 58.3, 60.6, 67.2, 52.5, "",50.3,48.4,49.3],
            data: getRanking(ranking_pr(this.serviceinstallplan)).arr_2018,
            label: labelOption,
            itemStyle: {
              normal: {
                color: params => {
                  // var colorList = ['#6dbccf','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9'];
                  // return colorList[params.dataIndex]
                  return getRanking(ranking_pr(this.serviceinstallplan))
                    .arr_2018[params.dataIndex].color;
                }
              }
            }
          },
          {
            name: "2019",
            type: "bar",
            // data:[ 62.4, 63.7, 66.0, 58.1, 56.5,55.9,54.1,56.3],
            data: getRanking(ranking_pr(this.serviceinstallplan)).arr_2019,
            label: labelOption,
            itemStyle: {
              normal: {
                color: params => {
                  // var colorList = ['#17b3a3','#808080','#808080','#808080','#808080','#808080','#808080','#808080','#808080','#808080'];
                  // return colorList[params.dataIndex]
                  return getRanking(ranking_pr(this.serviceinstallplan))
                    .arr_2019[params.dataIndex].color;
                }
              }
            }
          }
        ];
        this.tableDataunder = [
          {
            year: "19年",
            ximenzi: "3",
            haier: "5",
            rongsheng: "6",
            sanxing: "2",
            haixin: "1",
            meidi: "7",
            meiling: "8",
            kashadi: "4"
          },
          {
            year: "18年",
            ximenzi: "5",
            haier: "1",
            rongsheng: "2",
            sanxing: "7",
            haixin: "6",
            meidi: "3",
            meiling: "4",
            kashadi: "8"
          },
          {
            year: "17年",
            ximenzi: "6",
            haier: "2",
            rongsheng: "1",
            sanxing: "4",
            haixin: "5",
            meidi: "2",
            meiling: "7",
            kashadi: "-"
          }
        ];
      } else if (index == "5") {
        this.xAxis1 = [
          {
            type: "category",
            // data: ['海信','三星','索尼','夏普','小米','TCL','海尔','创维'],
            data: getRanking(ranking_pr(this.fixonline)).arr_name,
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
        this.series1 = [
          {
            name: "2017",
            type: "bar",
            // data:[ 58.8, 65.6, 66.6, 53.7, "","51.0",55.0,"51.0"],
            data: getRanking(ranking_pr(this.fixonline)).arr_2017,
            label: labelOption,
            itemStyle: {
              normal: {
                color: params => {
                  console.log(this);
                  // var colorList = ['#a3e1d4','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9'];
                  //  return colorList[params.dataIndex]
                  return getRanking(ranking_pr(this.fixonline)).arr_2017[
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
            data: getRanking(ranking_pr(this.fixonline)).arr_2018,
            label: labelOption,
            itemStyle: {
              normal: {
                color: params => {
                  // var colorList = ['#6dbccf','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9'];
                  // return colorList[params.dataIndex]
                  return getRanking(ranking_pr(this.fixonline)).arr_2018[
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
            data: getRanking(ranking_pr(this.fixonline)).arr_2019,
            label: labelOption,
            itemStyle: {
              normal: {
                color: params => {
                  // var colorList = ['#17b3a3','#808080','#808080','#808080','#808080','#808080','#808080','#808080','#808080','#808080'];
                  // return colorList[params.dataIndex]
                  return getRanking(ranking_pr(this.fixonline)).arr_2019[
                    params.dataIndex
                  ].color;
                }
              }
            }
          }
        ];
        this.tableDataunder = [
          {
            year: "19年",
            ximenzi: "3",
            haier: "1",
            rongsheng: "7",
            sanxing: "6",
            haixin: "2",
            meidi: "3",
            meiling: "3",
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
      } else if (index == "6") {
       this.xAxis1 = [
          {
            type: "category",
            // data: ['海信','三星','索尼','夏普','小米','TCL','海尔','创维'],
            data: getRanking(ranking_pr(this.fixpolicy)).arr_name,
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
        this.series1 = [
          {
            name: "2017",
            type: "bar",
            // data:[ 58.8, 65.6, 66.6, 53.7, "","51.0",55.0,"51.0"],
            data: getRanking(ranking_pr(this.fixpolicy)).arr_2017,
            label: labelOption,
            itemStyle: {
              normal: {
                color: params => {
                  console.log(this);
                  // var colorList = ['#a3e1d4','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9'];
                  //  return colorList[params.dataIndex]
                  return getRanking(ranking_pr(this.fixpolicy)).arr_2017[
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
            data: getRanking(ranking_pr(this.fixpolicy)).arr_2018,
            label: labelOption,
            itemStyle: {
              normal: {
                color: params => {
                  // var colorList = ['#6dbccf','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9'];
                  // return colorList[params.dataIndex]
                  return getRanking(ranking_pr(this.fixpolicy)).arr_2018[
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
            data: getRanking(ranking_pr(this.fixpolicy)).arr_2019,
            label: labelOption,
            itemStyle: {
              normal: {
                color: params => {
                  // var colorList = ['#17b3a3','#808080','#808080','#808080','#808080','#808080','#808080','#808080','#808080','#808080'];
                  // return colorList[params.dataIndex]
                  return getRanking(ranking_pr(this.fixpolicy)).arr_2019[
                    params.dataIndex
                  ].color;
                }
              }
            }
          }
        ];
        this.tableDataunder = [
          {
            year: "19年",
            ximenzi: "6",
            haier: "3",
            rongsheng: "6",
            sanxing: "8",
            haixin: "4",
            meidi: "5",
            meiling: "1",
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
      }
      this.initchartFixService();
    },
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
            // max: 30,
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
            barWidth: "40%",
            data: that.ice_installrepresentat,
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
            data: that.ice_installattention //[25, 14, 10, 10, 3, 10, 7]
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
    initServiceChart() {
      let option = { ...this.chartOptions };
      option.xAxis = this.xAxis;
      option.series = this.series;
      option.legend = this.legend;
      option.yAxis = this.yAxis;
      this.chartProduct = echarts.init(document.getElementById("chartService"));
      this.chartProduct.setOption(option, true);
      window.addEventListener("resize", () => {
        this.chartProduct.resize();
        // console.log("1111");
      });
    },
    initTVproductfix_chartBarBox() {
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

            data: that.haixinfixData_x,
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
            // max: 30,
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
            barWidth: "40%",
            data: that.ice_fixrepresentat,
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
            data: that.ice_fixattention //[25, 14, 10, 10, 3, 10, 7]
          }
        ]
      };
      this.chartBar = echarts.init(
        document.getElementById("TVproductfix_chartBarBox")
      );
      this.chartBar.setOption(option);
      window.addEventListener("resize", () => {
        this.chartBar.resize();
      });
    },
    initchartFixService() {
      let option = { ...this.chartOptions };
      option.xAxis = this.xAxis1;
      option.series = this.series1;
      option.legend = this.legend;
      option.yAxis = this.yAxis;
      this.chartFixService = echarts.init(
        document.getElementById("chartFixService")
      );
      this.chartFixService.setOption(option, true);
      window.addEventListener("resize", () => {
        this.chartFixService.resize();
        // console.log("1111");
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
  .chartServiceBox {
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
