<template>
  <div class="tv_product">
    <el-row :gutter="20">
      <el-col :span="24">
        <el-card>
          <h3 class="chart_title">海信电视服务NPS安装环节</h3>
          <div id="TVproduct_chartBarBox" class="chart-box"></div>
          <p style="margin-left:100px;color:#FFD700">* 热线服务、政策达成度base＜30，结果未出示。</p>
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
            <el-table-column prop="geli" label="格力" width="90" align="center"></el-table-column>
            <el-table-column prop="haier" label="海尔" width="90" align="center"></el-table-column>
            <el-table-column prop="meidi" label="美的" width="90" align="center"></el-table-column>
            <el-table-column prop="haixin" label="海信" width="90" align="center"></el-table-column>
            <el-table-column prop="aokesi" label="奥克斯" width="90" align="center"></el-table-column>
            <el-table-column prop="kelong" label="科龙" width="90" align="center"></el-table-column>
            <el-table-column prop="zhigao" label="志高" width="90" align="center"></el-table-column>
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
          <h3 class="chart_title">海信电视服务NPS维修环节</h3>
          <div id="TVproductfix_chartBarBox" class="chart-box"></div>
          <p style="margin-left:100px;color:#FFD700">* 政策达成度、服务周期base＜30，结果未出示。</p>
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
            <el-table-column prop="geli" label="格力" width="90" align="center"></el-table-column>
            <el-table-column prop="haier" label="海尔" width="90" align="center"></el-table-column>
            <el-table-column prop="meidi" label="美的" width="90" align="center"></el-table-column>
            <el-table-column prop="haixin" label="海信" width="90" align="center"></el-table-column>
            <el-table-column prop="aokesi" label="奥克斯" width="90" align="center"></el-table-column>
            <el-table-column prop="kelong" label="科龙" width="90" align="center"></el-table-column>
            <el-table-column prop="zhigao" label="志高" width="90" align="center"></el-table-column>
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
    name: "索尼",
    value_2017: "8.4",
    value_2018: "8.8",
    value_2019: "8.8"
  },
  {
    name: "三星",
    value_2017: "8.7",
    value_2018: "9.0",
    value_2019: "8.2"
  },
  {
    name: "夏普",
    value_2017: "8.3",
    value_2018: "9.1",
    value_2019: "8.9"
  },
  {
    name: "海信",
    value_2017: "8.4",
    value_2018: "8.7",
    value_2019: "8.9"
  },
  {
    name: "小米",
    value_2017: "-",
    value_2018: "8.8",
    value_2019: "8.7"
  },
  {
    name: "创维",
    value_2017: "8.4",
    value_2018: "8.6",
    value_2019: "8.7"
  },
  {
    name: "TCL",
    value_2017: "8.3",
    value_2018: "8.7",
    value_2019: "9.0"
  },
  {
    name: "海尔",
    value_2017: "8.4",
    value_2018: "8.7",
    value_2019: "9.0"
  }
];
//安装初始化时显示的数据
var service_arr = [
  {
    name: "格力",
    value_2017: "9.07",
    value_2018: "8.97",
    value_2019: "9.14"
  },
  {
    name: "海尔",
    value_2017: "8.71",
    value_2018: "9.27",
    value_2019: "9.06"
  },
  {
    name: "美的",
    value_2017: "8.72",
    value_2018: "8.98",
    value_2019: "8.89"
  },
  {
    name: "海信",
    value_2017: "8.43",
    value_2018: "8.79",
    value_2019: "9.08"
  },
  {
    name: "奥克斯",
    value_2017: "9.00",
    value_2018: "8.91",
    value_2019: "8.83"
  },
  {
    name: "科龙",
    value_2017: "8.20",
    value_2018: "8.95",
    value_2019: "9.14"
  },
  {
    name: "志高",
    value_2017: "8.46",
    value_2018: "8.98",
    value_2019: "8.67"
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
  air_installrepresentat,
  air_installattention,
  air_installData,
  air_fixData,
  air_fixattention,
  air_fixrepresentat
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
        }
      ],

      TVproductfix_chartBarBox: null,
      chartFixService: null,
      //服务安装环节
      //服务技能
      serviceKill: [
        {
          name: "格力",
          value_2017: "9.07",
          value_2018: "8.97",
          value_2019: "9.14"
        },
        {
          name: "海尔",
          value_2017: "8.71",
          value_2018: "9.27",
          value_2019: "9.06"
        },
        {
          name: "美的",
          value_2017: "8.72",
          value_2018: "8.98",
          value_2019: "8.89"
        },
        {
          name: "海信",
          value_2017: "8.43",
          value_2018: "8.79",
          value_2019: "9.08"
        },
        {
          name: "奥克斯",
          value_2017: "9.00",
          value_2018: "8.91",
          value_2019: "8.83"
        },
        {
          name: "科龙",
          value_2017: "8.20",
          value_2018: "8.95",
          value_2019: "9.14"
        },
        {
          name: "志高",
          value_2017: "8.46",
          value_2018: "8.98",
          value_2019: "8.67"
        }
      ],
      //服务人员态度
      ontime: [
        {
          name: "格力",
          value_2017: "8.84",
          value_2018: "9.24",
          value_2019: "9.06"
        },
        {
          name: "海尔",
          value_2017: "8.69",
          value_2018: "8.86",
          value_2019: "9.09"
        },
        {
          name: "美的",
          value_2017: "8.84",
          value_2018: "9.26",
          value_2019: "8.89"
        },
        {
          name: "海信",
          value_2017: "8.86",
          value_2018: "9.31",
          value_2019: "8.63"
        },
        {
          name: "奥克斯",
          value_2017: "8.85",
          value_2018: "8.85",
          value_2019: "9.05"
        },
        {
          name: "科龙",
          value_2017: "8.48",
          value_2018: "9.12",
          value_2019: "8.80"
        },
        {
          name: "志高",
          value_2017: "8.59",
          value_2018: "8.98",
          value_2019: "8.81"
        }
      ],
      //维修及时性
      serviceman: [
        {
          name: "格力",
          value_2017: "8.63",
          value_2018: "8.82",
          value_2019: "8.50"
        },
        {
          name: "海尔",
          value_2017: "9.08",
          value_2018: "8.56",
          value_2019: "8.97"
        },
        {
          name: "美的",
          value_2017: "8.37",
          value_2018: "8.39",
          value_2019: "8.91"
        },
        {
          name: "海信",
          value_2017: "8.89",
          value_2018: "8.84",
          value_2019: "8.70"
        },
        {
          name: "奥克斯",
          value_2017: "7.79",
          value_2018: "8.96",
          value_2019: "8.47"
        },
        {
          name: "科龙",
          value_2017: "8.86",
          value_2018: "8.42",
          value_2019: "8.56"
        },
        {
          name: "志高",
          value_2017: "8.64",
          value_2018: "8.34",
          value_2019: "8.61"
        }
      ],
      //服务规范
      serviceplan: [
        {
          name: "格力",
          value_2017: "8.13",
          value_2018: "9.09",
          value_2019: "8.96"
        },
        {
          name: "海尔",
          value_2017: "7.50",
          value_2018: "8.80",
          value_2019: "8.29"
        },
        {
          name: "美的",
          value_2017: "7.77",
          value_2018: "8.33",
          value_2019: "8.23"
        },
        {
          name: "海信",
          value_2017: "7.50",
          value_2018: "9.00",
          value_2019: "8.52"
        },
        {
          name: "奥克斯",
          value_2017: "7.38",
          value_2018: "8.47",
          value_2019: "8.17"
        },
        {
          name: "科龙",
          value_2017: "9.00",
          value_2018: "9.07",
          value_2019: "8.23"
        },
        {
          name: "志高",
          value_2017: "7.89",
          value_2018: "8.79",
          value_2019: "8.39"
        }
      ],

      //服务维修环节
      //维修及时性
      serviceinstallkill: [
        {
          name: "格力",
          value_2017: "8.52",
          value_2018: "8.49",
          value_2019: "8.78"
        },
        {
          name: "海尔",
          value_2017: "8.97",
          value_2018: "8.41",
          value_2019: "8.61"
        },
        {
          name: "美的",
          value_2017: "8.74",
          value_2018: "8.56",
          value_2019: "8.76"
        },
        {
          name: "海信",
          value_2017: "8.69",
          value_2018: "8.41",
          value_2019: "8.71"
        },
        {
          name: "奥克斯",
          value_2017: "8.78",
          value_2018: "8.65",
          value_2019: "8.52"
        },
        {
          name: "科龙",
          value_2017: "8.59",
          value_2018: "8.45",
          value_2019: "8.88"
        },
        {
          name: "志高",
          value_2017: "8.50",
          value_2018: "8.32",
          value_2019: "8.67"
        }
      ],
      //服务技能
      serviceinstallontime: [
        {
          name: "格力",
          value_2017: "8.89",
          value_2018: "9.09",
          value_2019: "8.91"
        },
        {
          name: "海尔",
          value_2017: "8.56",
          value_2018: "9.30",
          value_2019: "8.96"
        },
        {
          name: "美的",
          value_2017: "8.82",
          value_2018: "8.98",
          value_2019: "8.69"
        },
        {
          name: "海信",
          value_2017: "8.95",
          value_2018: "8.73",
          value_2019: "8.95"
        },
        {
          name: "奥克斯",
          value_2017: "8.65",
          value_2018: "8.90",
          value_2019: "8.78"
        },
        {
          name: "科龙",
          value_2017: "8.53",
          value_2018: "9.13",
          value_2019: "8.72"
        },
        {
          name: "志高",
          value_2017: "8.72",
          value_2018: "9.02",
          value_2019: "8.54"
        }
      ],
      //服务人员态度
      serviceinstallman: [
        {
          name: "格力",
          value_2017: "8.66",
          value_2018: "9.09",
          value_2019: "9.00"
        },
        {
          name: "海尔",
          value_2017: "8.66",
          value_2018: "9.06",
          value_2019: "8.89"
        },
        {
          name: "美的",
          value_2017: "9.00",
          value_2018: "8.55",
          value_2019: "8.78"
        },
        {
          name: "海信",
          value_2017: "8.59",
          value_2018: "8.98",
          value_2019: "9.27"
        },
        {
          name: "奥克斯",
          value_2017: "8.83",
          value_2018: "8.88",
          value_2019: "8.82"
        },
        {
          name: "科龙",
          value_2017: "8.75",
          value_2018: "8.66",
          value_2019: "8.73"
        },
        {
          name: "志高",
          value_2017: "8.67",
          value_2018: "9.00",
          value_2019: "8.80"
        }
      ],
      //服务规范
      serviceinstallplan: [
        {
          name: "格力",
          value_2017: "8.25",
          value_2018: "8.14",
          value_2019: "8.75"
        },
        {
          name: "海尔",
          value_2017: "8.13",
          value_2018: "8.89",
          value_2019: "8.33"
        },
        {
          name: "美的",
          value_2017: "6.90",
          value_2018: "8.50",
          value_2019: "8.38"
        },
        {
          name: "海信",
          value_2017: "8.00",
          value_2018: "9.24",
          value_2019: "8.34"
        },
        {
          name: "奥克斯",
          value_2017: "7.17",
          value_2018: "8.23",
          value_2019: "8.14"
        },
        {
          name: "科龙",
          value_2017: "7.86",
          value_2018: "8.67",
          value_2019: "8.10"
        },
        {
          name: "志高",
          value_2017: "8.00",
          value_2018: "8.45",
          value_2019: "7.74"
        }
      ],
      //热线服务
      hotline: [
        {
          name: "格力",
          value_2017: "9.18",
          value_2018: "8.92",
          value_2019: "8.17"
        },
        {
          name: "海尔",
          value_2017: "8.73",
          value_2018: "8.90",
          value_2019: "7.80"
        },
        {
          name: "美的",
          value_2017: "9.26",
          value_2018: "8.94",
          value_2019: "7.82"
        },
        {
          name: "海信",
          value_2017: "9.01",
          value_2018: "8.86",
          value_2019: "7.60"
        },
        {
          name: "奥克斯",
          value_2017: "9.23",
          value_2018: "8.95",
          value_2019: "8.23"
        },
        {
          name: "科龙",
          value_2017: "9.44",
          value_2018: "8.96",
          value_2019: "8.30"
        },
        {
          name: "志高",
          value_2017: "9.00",
          value_2018: "8.83",
          value_2019: "8.10"
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
          label: "服务人员态度"
        },
        {
          value: "3",
          label: "安装及时性"
        },
        {
          value: "4",
          label: "服务规范"
        }
      ],
      value: "1",
      // tableData1Index: "",
      // tableData1: tableData1,
      // tableData2: tableData2,

      //服务NPS安装环节
      air_installrepresentat: air_installrepresentat,
      haixinData_x: [],
      air_installattention: air_installattention, //指标关注度
      data_lists: air_installData,
      percentArray: [1.1, 1.7, 1.3, 0.8],

      //服务NPS维修环节
      air_fixrepresentat: air_fixrepresentat,
      haixinfixData_x: [],
      air_fixattention: air_fixattention, //指标关注度
      fixdata_lists: air_fixData,
      fixpercentArray: [1.3, 1.1, 0.3, 1.1, 0.8],

      //上表格菜单数据
      tableData: [
        {
          year: "19年",
          geli: "1",
          haier: "4",
          meidi: "5",
          haixin: "3",
          aokesi: "6",
          kelong: "1",
          zhigao: "7"
        },
        {
          year: "18年",
          geli: "4",
          haier: "1",
          meidi: "2",
          haixin: "3",
          aokesi: "6",
          kelong: "5",
          zhigao: "7"
        },
        {
          year: "17年",
          geli: "1",
          haier: "4",
          meidi: "3",
          haixin: "6",
          aokesi: "2",
          kelong: "7",
          zhigao: "5"
        }
      ],
      //下表格菜单数据
      tableDataunder: [
        {
          year: "19年",
          geli: "2",
          haier: "6",
          meidi: "3",
          haixin: "4",
          aokesi: "7",
          kelong: "1",
          zhigao: "5"
        },
        {
          year: "18年",
          geli: "3",
          haier: "5",
          meidi: "2",
          haixin: "6",
          aokesi: "1",
          kelong: "4",
          zhigao: "7"
        },
        {
          year: "17年",
          geli: "6",
          haier: "1",
          meidi: "3",
          haixin: "4",
          aokesi: "2",
          kelong: "5",
          zhigao: "7"
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

    this.air_installattention = ranking(that.air_installattention);
    this.air_installrepresentat = getData2(
      air_installattention,
      that.air_installrepresentat
    );
    this.haixinData_x = getData_x(that.air_installrepresentat, [
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

    this.air_fixattention = ranking(that.air_fixattention);
    this.air_fixrepresentat = getData2(
      air_fixattention,
      that.air_fixrepresentat
    );
    this.haixinfixData_x = getData_x(that.air_fixrepresentat, [
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
            geli: "1",
            haier: "4",
            meidi: "5",
            haixin: "3",
            aokesi: "6",
            kelong: "1",
            zhigao: "7"
          },
          {
            year: "18年",
            geli: "4",
            haier: "1",
            meidi: "2",
            haixin: "3",
            aokesi: "6",
            kelong: "5",
            zhigao: "7"
          },
          {
            year: "17年",
            geli: "1",
            haier: "4",
            meidi: "3",
            haixin: "6",
            aokesi: "2",
            kelong: "7",
            zhigao: "5"
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
            geli: "2",
            haier: "1",
            meidi: "4",
            haixin: "7",
            aokesi: "3",
            kelong: "6",
            zhigao: "5"
          },
          {
            year: "18年",
            geli: "3",
            haier: "6",
            meidi: "2",
            haixin: "1",
            aokesi: "7",
            kelong: "4",
            zhigao: "5"
          },
          {
            year: "17年",
            geli: "3",
            haier: "5",
            meidi: "3",
            haixin: "1",
            aokesi: "2",
            kelong: "7",
            zhigao: "6"
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
            geli: "6",
            haier: "1",
            meidi: "2",
            haixin: "3",
            aokesi: "7",
            kelong: "5",
            zhigao: "4"
          },
          {
            year: "18年",
            geli: "3",
            haier: "4",
            meidi: "6",
            haixin: "2",
            aokesi: "1",
            kelong: "5",
            zhigao: "7"
          },
          {
            year: "17年",
            geli: "5",
            haier: "1",
            meidi: "6",
            haixin: "2",
            aokesi: "7",
            kelong: "3",
            zhigao: "4"
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
            geli: "1",
            haier: "4",
            meidi: "5",
            haixin: "2",
            aokesi: "7",
            kelong: "5",
            zhigao: "3"
          },
          {
            year: "18年",
            geli: "1",
            haier: "4",
            meidi: "7",
            haixin: "3",
            aokesi: "6",
            kelong: "2",
            zhigao: "5"
          },
          {
            year: "17年",
            geli: "2",
            haier: "5",
            meidi: "4",
            haixin: "5",
            aokesi: "7",
            kelong: "1",
            zhigao: "3"
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
            geli: "2",
            haier: "6",
            meidi: "3",
            haixin: "4",
            aokesi: "7",
            kelong: "1",
            zhigao: "5"
          },
          {
            year: "18年",
            geli: "3",
            haier: "5",
            meidi: "2",
            haixin: "6",
            aokesi: "1",
            kelong: "4",
            zhigao: "7"
          },
          {
            year: "17年",
            geli: "6",
            haier: "1",
            meidi: "3",
            haixin: "4",
            aokesi: "2",
            kelong: "5",
            zhigao: "7"
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
            geli: "3",
            haier: "1",
            meidi: "6",
            haixin: "2",
            aokesi: "4",
            kelong: "5",
            zhigao: "7"
          },
          {
            year: "18年",
            geli: "3",
            haier: "1",
            meidi: "5",
            haixin: "7",
            aokesi: "6",
            kelong: "2",
            zhigao: "4"
          },
          {
            year: "17年",
            geli: "2",
            haier: "6",
            meidi: "3",
            haixin: "1",
            aokesi: "5",
            kelong: "7",
            zhigao: "4"
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
            geli: "2",
            haier: "3",
            meidi: "6",
            haixin: "1",
            aokesi: "4",
            kelong: "7",
            zhigao: "5"
          },
          {
            year: "18年",
            geli: "1",
            haier: "2",
            meidi: "7",
            haixin: "4",
            aokesi: "5",
            kelong: "6",
            zhigao: "3"
          },
          {
            year: "17年",
            geli: "5",
            haier: "5",
            meidi: "1",
            haixin: "7",
            aokesi: "2",
            kelong: "3",
            zhigao: "4"
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
            geli: "1",
            haier: "4",
            meidi: "2",
            haixin: "3",
            aokesi: "5",
            kelong: "6",
            zhigao: "7"
          },
          {
            year: "18年",
            geli: "7",
            haier: "2",
            meidi: "4",
            haixin: "1",
            aokesi: "6",
            kelong: "3",
            zhigao: "5"
          },
          {
            year: "17年",
            geli: "1",
            haier: "2",
            meidi: "7",
            haixin: "3",
            aokesi: "6",
            kelong: "5",
            zhigao: "3"
          }
        ];
      } else if (index == "5") {
        this.xAxis1 = [
          {
            type: "category",
            // data: ['海信','三星','索尼','夏普','小米','TCL','海尔','创维'],
            data: getRanking(ranking_pr(this.hotline)).arr_name,
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
            data: getRanking(ranking_pr(this.hotline)).arr_2017,
            label: labelOption,
            itemStyle: {
              normal: {
                color: params => {
                  console.log(this);
                  // var colorList = ['#a3e1d4','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9'];
                  //  return colorList[params.dataIndex]
                  return getRanking(ranking_pr(this.hotline)).arr_2017[
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
            data: getRanking(ranking_pr(this.hotline)).arr_2018,
            label: labelOption,
            itemStyle: {
              normal: {
                color: params => {
                  // var colorList = ['#6dbccf','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9'];
                  // return colorList[params.dataIndex]
                  return getRanking(ranking_pr(this.hotline)).arr_2018[
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
            data: getRanking(ranking_pr(this.hotline)).arr_2019,
            label: labelOption,
            itemStyle: {
              normal: {
                color: params => {
                  // var colorList = ['#17b3a3','#808080','#808080','#808080','#808080','#808080','#808080','#808080','#808080','#808080'];
                  // return colorList[params.dataIndex]
                  return getRanking(ranking_pr(this.hotline)).arr_2019[
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
            geli: "3",
            haier: "6",
            meidi: "5",
            haixin: "7",
            aokesi: "2",
            kelong: "1",
            zhigao: "4"
          },
          {
            year: "18年",
            geli: "4",
            haier: "5",
            meidi: "3",
            haixin: "6",
            aokesi: "2",
            kelong: "1",
            zhigao: "7"
          },
          {
            year: "17年",
            geli: "4",
            haier: "7",
            meidi: "2",
            haixin: "5",
            aokesi: "3",
            kelong: "1",
            zhigao: "6"
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
            data: that.air_installrepresentat,
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
            data: that.air_installattention //[25, 14, 10, 10, 3, 10, 7]
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
            data: that.air_fixrepresentat,
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
            data: that.air_fixattention //[25, 14, 10, 10, 3, 10, 7]
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
