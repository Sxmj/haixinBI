<template>
  <div class="mod-demo-echarts">
    <!-- 通过基础的24分栏，迅速过渡地创造布局。el-row表示行，通过gutter设置所占的间隔，默认为0 -->
    <el-row :gutter="2">
      <!-- 通过设置el-col中的span属性来为其设置列，设置为24为一整列 -->
      <el-col :span="24">
        <div>
          <p>
            请选择环节：
            <!-- v-model的属性值为el-option中的属性值 -->
            <!-- <el-select v-model="value" placeholder="请选择"> -->
            <!-- disabled设置为true,可以替换该选项 -->
            <!-- <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
                :disabled="item.disabled"
              ></el-option>
            </el-select>-->
            <!-- 设置v-model绑定变量，选中意味着变量的值为相应 Radio label属性的值 -->
            <el-radio-group v-model="radio" @change="showChartBar">
              <el-radio :label="1">整体NPS</el-radio>
              <el-radio :label="2">产品NPS</el-radio>
              <el-radio :label="3">销售NPS</el-radio>
              <el-radio :label="4">服务NPS</el-radio>
            </el-radio-group>
          </p>
          <!-- <p>
            选择同比年份(最多选择3个，最少选择2个) :
          <!-- el-checkbox-group可以将多个el-checkbox视为一组内容，只需要在 Group 中使用v-model绑定Array类型的变量即可-->
          <!-- <el-checkbox-group v-model="checkList" style="display:inline-block">
              <el-checkbox label="2016"></el-checkbox>
              <el-checkbox label="2017"></el-checkbox>
              <el-checkbox label="2018"></el-checkbox>
          </el-checkbox-group>-->
          <!-- </p>  -->
        </div>
      </el-col>
    </el-row>
    <!-- <el-alert title="整体NPS/产品NPS/销售NPS/服务NPS" type="warning" :closable="false">
      <div slot-scope="description">
        <p class="el-alert__description"></p>
      </div>
    </el-alert>-->

    <el-row :gutter="20">
      <el-col :span="24">
        <el-card>
          <!-- echarts内容 -->
          <!-- 整体的NPS -->
          <div id="three_chartBarBox" class="chart-Three" v-if="radio=='1'"></div>
          <div id="three1_chartBarBox" class="chart-Three" v-if="radio=='2'"></div>
          <div id="three2_chartBarBox" class="chart-Three" v-if="radio=='3'"></div>
          <div id="three3_chartBarBox" class="chart-Three" v-if="radio=='4'"></div>

          <!-- <div id="J_chartBarBox" class="chart-box" v-if="radio=='1'"></div> -->
          <!-- 产品NPS -->
          <!-- <div id="product_chartBarBox" class="chart-box" v-if="radio=='2'"></div> -->
          <!-- 销售NPS -->
          <!-- <div id="sales_chartBarBox" class="chart-box" v-if="radio=='3'"></div> -->
          <!-- 服务NPS -->
          <!-- <div id="service_chartBarBox" class="chart-box" v-if="radio=='4'"></div> -->
          <!-- <div id="three_chartBarBox" class="chart-Three"></div> -->
          <!-- 实现折叠效果 -->
          <el-collapse-transition>
            <div style="padding-left:80px">
              <!-- https://element.eleme.cn/#/zh-CN/component/table#table-column-scoped-slot -->
              <!-- 根据elementUI中的内容tableData一定在data配置项中定义过；且tableData中为最终放置的数据 -->
              <el-table :data="tableData" style="width: 100%">
                <!-- <el-table-column>标签体中为放置好的列数据，共6列 -->
                <el-table-column prop="ranking" label="年份同比差值" width="150"></el-table-column>
                <el-table-column prop="tv" label="电视" width="140"></el-table-column>
                <el-table-column prop="ice" label="冰箱" width="140"></el-table-column>
                <el-table-column prop="air" label="空调" width="140"></el-table-column>
                <el-table-column prop="wash" label="洗衣机" width="140"></el-table-column>
                <el-table-column prop="phone" label="手机" width="140"></el-table-column>
              </el-table>
            </div>
          </el-collapse-transition>
        </el-card>
      </el-col>
      <el-col :span="24">
        <el-card>
          <el-col :span="24">
            <h3>阅读说明:</h3>
            <P>每个品类对应三个柱图数据来源从左到右依次是2017年、2018年、2019年数据。柱图上方为对应为该年NPS数值；</P>
            <p>下图表格依次展示了各品类2019年与2018年各自较上一年的NPS差值</p>
          </el-col>
        </el-card>
      </el-col>
      <el-col :span="24">
        <el-card style="margin-top:20px">
          <h3>{{title}}</h3>
        </el-card>
      </el-col>
      <el-col :span="24">
        <!-- 分隔内容上有关联但属于不同类别的数据集合。可以设置type来改变标签的风格 -->
        <el-tabs type="card" v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="电视" name="tv"></el-tab-pane>
          <el-tab-pane label="冰箱" name="icebox"></el-tab-pane>
          <el-tab-pane label="空调" name="airConditioner"></el-tab-pane>
          <el-tab-pane label="洗衣机" name="washer"></el-tab-pane>
          <el-tab-pane label="手机" name="phone"></el-tab-pane>
        </el-tabs>
        <div id="icebox" class="chart-box"></div>
        <p style="margin-left:100px;color:#FFD700">注：2018年卡萨帝分析样本量不足30，结果仅供参考</p>
        <!-- <span class="top">品牌NPS排位</span> -->
      </el-col>
      <el-col :span="24">
        <el-card style="margin-top:20px">
          <el-col :span="24">
            <h3>数据说明:</h3>
            <P>每个品牌对应三个柱图数据来源从左到右依次是2017年、2018年、2019年数据。柱图上方为对应为该年NPS数值；</P>
            <p>所有数据按2019年NPS值进行降序排列</p>
          </el-col>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
var tv_arr = [
  {
    name: "海信",
    value_2017: "58.3",
    value_2018: "62.4",
    value_2019: "62.6"
  },
  {
    name: "索尼",
    value_2017: "67.2",
    value_2018: "66.0",
    value_2019: "65.3"
  },
  {
    name: "三星",
    value_2017: "60.6",
    value_2018: "63.7",
    value_2019: "64.6"
  },

  {
    name: "夏普",
    value_2017: "52.5",
    value_2018: "58.1",
    value_2019: "57.5"
  },
  {
    name: "小米",
    value_2017: "-",
    value_2018: "56.5",
    value_2019: "58.4"
  },
  {
    name: "TCL",
    value_2017: "50.3",
    value_2018: "55.9",
    value_2019: "56.6"
  },
  {
    name: "海尔",
    value_2017: "48.4",
    value_2018: "54.1",
    value_2019: "54.5"
  },
  {
    name: "创维",
    value_2017: "49.3",
    value_2018: "56.3",
    value_2019: "56.8"
  }
];
var ice_arr = [
  {
    name: "卡萨帝",
    value_2017: "-",
    value_2018: "65.5",
    value_2019: "67.1"
  },
  {
    name: "西门子",
    value_2017: "63.1",
    value_2018: "64.6",
    value_2019: "64.3"
  },
  {
    name: "海尔",
    value_2017: "58.2",
    value_2018: "62.2",
    value_2019: "63.9"
  },
  {
    name: "容声",
    value_2017: "55.4",
    value_2018: "60.2",
    value_2019: "60.7"
  },
  {
    name: "三星",
    value_2017: "52.0",
    value_2018: "57.3",
    value_2019: "58.0"
  },
  {
    name: "海信",
    value_2017: "50.6",
    value_2018: "56.5",
    value_2019: "57.7"
  },
  {
    name: "美的",
    value_2017: "50.4",
    value_2018: "55.6",
    value_2019: "57.2"
  },
  {
    name: "美菱",
    value_2017: "48.5",
    value_2018: "53.2",
    value_2019: "53.8"
  }
];
var air_arr = [
  {
    name: "格力",
    value_2017: "67.9",
    value_2018: "67.1",
    value_2019: "67.5"
  },
  {
    name: "海尔",
    value_2017: "61.2",
    value_2018: "64.1",
    value_2019: "62.9 "
  },
  {
    name: "美的",
    value_2017: "57.1",
    value_2018: "60.9",
    value_2019: "62.6"
  },
  {
    name: "海信",
    value_2017: "55.0",
    value_2018: "59.1",
    value_2019: "58.3"
  },
  {
    name: "奥克斯",
    value_2017: "52.7",
    value_2018: "58.1",
    value_2019: "57.4"
  },
  {
    name: "科龙",
    value_2017: "49.6",
    value_2018: "53.8",
    value_2019: "54.5"
  },
  {
    name: "志高",
    value_2017: "47.2",
    value_2018: "53.2",
    value_2019: "52.4"
  }
];
var wash_arr = [
  {
    name: "西门子",
    value_2017: "67.0",
    value_2018: "67.1",
    value_2019: "66.3"
  },
  {
    name: "海尔",
    value_2017: "63.3",
    value_2018: "64.3",
    value_2019: "66.1"
  },
  {
    name: "小天鹅",
    value_2017: "58.6",
    value_2018: "61.4",
    value_2019: "63.3"
  },
  {
    name: "LG",
    value_2017: "61.2",
    value_2018: "61.8",
    value_2019: "62.5"
  },
  {
    name: "松下",
    value_2017: "60.4",
    value_2018: "61.0",
    value_2019: "60.4"
  },
  {
    name: "三星",
    value_2017: "58.1",
    value_2018: "59.8",
    value_2019: "58.1"
  },
  {
    name: "海信",
    value_2017: "52.8",
    value_2018: "56.1",
    value_2019: "57.9"
  }
];
var phone_arr = [
  {
    name: "苹果",
    value_2017: "65.4",
    value_2018: "65.1",
    value_2019: "64.0"
  },
  {
    name: "华为",
    value_2017: "57.0",
    value_2018: "61.9",
    value_2019: "63.6"
  },
  {
    name: "OPPO",
    value_2017: "54.0",
    value_2018: "55.5",
    value_2019: "57.0"
  },
  {
    name: "荣耀",
    value_2017: "50.8",
    value_2018: "53.0",
    value_2019: "56.4"
  },
  {
    name: "小米",
    value_2017: "50.0",
    value_2018: "52.2",
    value_2019: "54.2"
  },
  {
    name: "VIVO",
    value_2017: "51.8",
    value_2018: "52.9",
    value_2019: "54.0"
  }
  // {
  //   name: "三星",
  //   value_2017: "49.2",
  //   value_2018: "49.1",
  //   value_2019: "52.9"
  // },
  // {
  //   name: "魅族",
  //   value_2017: "47.7",
  //   value_2018: "44.3",
  //   value_2019: "48.5"
  // },
  // {
  //   name: "海信",
  //   value_2017: "22.3",
  //   value_2018: "31.3",
  //   value_2019: "40.2"
  // }
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
  return arr;
}
// 将海信单独整理成不同的样式，并按照年份和name设置成不同的数组格式数据
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

// ranking_pr(ice_arr);

import echarts from "echarts";

//这里定义的数据为什么要这么设置
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
export default {
  data() {
    return {
      title:"整体NPS-品牌表现",
      //整体NPS

      //电视排位NPS
      tv_arr: [
            {
              name: "海信",
              value_2017: "58.3",
              value_2018: "62.4",
              value_2019: "62.6"
            },
            {
              name: "索尼",
              value_2017: "67.2",
              value_2018: "66.0",
              value_2019: "65.3"
            },
            {
              name: "三星",
              value_2017: "60.6",
              value_2018: "63.7",
              value_2019: "64.6"
            },

            {
              name: "夏普",
              value_2017: "52.5",
              value_2018: "58.1",
              value_2019: "57.5"
            },
            {
              name: "小米",
              value_2017: "-",
              value_2018: "56.5",
              value_2019: "58.4"
            },
            {
              name: "TCL",
              value_2017: "50.3",
              value_2018: "55.9",
              value_2019: "56.6"
            },
            {
              name: "海尔",
              value_2017: "48.4",
              value_2018: "54.1",
              value_2019: "54.5"
            },
            {
              name: "创维",
              value_2017: "49.3",
              value_2018: "56.3",
              value_2019: "56.8"
            }
      ],
      // 冰箱品牌排位NPS
      ice_arr: [
        {
          name: "海尔",
          value_2017: "58.2",
          value_2018: "62.2",
          value_2019: "63.9"
        },
        {
          name: "卡萨帝",
          value_2017: "-",
          value_2018: "65.5",
          value_2019: "67.1"
        },
        {
          name: "西门子",
          value_2017: "63.1",
          value_2018: "64.6",
          value_2019: "64.3"
        },
        {
          name: "容声",
          value_2017: "55.4",
          value_2018: "60.2",
          value_2019: "60.7"
        },
        {
          name: "三星",
          value_2017: "52.0",
          value_2018: "57.3",
          value_2019: "58.0"
        },
        {
          name: "海信",
          value_2017: "50.6",
          value_2018: "56.5",
          value_2019: "57.7"
        },
        {
          name: "美的",
          value_2017: "50.4",
          value_2018: "55.6",
          value_2019: "57.2"
        },
        {
          name: "美菱",
          value_2017: "48.5",
          value_2018: "53.2",
          value_2019: "53.8"
        }
      ],
      // 空调品牌排位NPS
      air_arr: [
        {
          name: "格力",
          value_2017: "67.9",
          value_2018: "67.1",
          value_2019: "67.5"
        },
        {
          name: "海尔",
          value_2017: "61.2",
          value_2018: "64.1",
          value_2019: "62.9 "
        },
        {
          name: "美的",
          value_2017: "57.1",
          value_2018: "60.9",
          value_2019: "62.6"
        },
        {
          name: "海信",
          value_2017: "55.0",
          value_2018: "59.1",
          value_2019: "58.3"
        },
        {
          name: "奥克斯",
          value_2017: "52.7",
          value_2018: "58.1",
          value_2019: "57.4"
        },
        {
          name: "科龙",
          value_2017: "49.6",
          value_2018: "53.8",
          value_2019: "54.5"
        },
        {
          name: "志高",
          value_2017: "47.2",
          value_2018: "53.2",
          value_2019: "52.4"
        }
      ],
      //洗衣机品牌排位NPS
      wash_arr: [
        {
          name: "西门子",
          value_2017: "67.0",
          value_2018: "67.1",
          value_2019: "66.3"
        },
        {
          name: "海尔",
          value_2017: "63.3",
          value_2018: "64.3",
          value_2019: "66.1"
        },
        {
          name: "小天鹅",
          value_2017: "58.6",
          value_2018: "61.4",
          value_2019: "63.3"
        },
        {
          name: "LG",
          value_2017: "61.2",
          value_2018: "61.8",
          value_2019: "62.5"
        },
        {
          name: "松下",
          value_2017: "60.4",
          value_2018: "61.0",
          value_2019: "60.4"
        },
        {
          name: "三星",
          value_2017: "58.1",
          value_2018: "59.8",
          value_2019: "58.1"
        },
        {
          name: "海信",
          value_2017: "52.8",
          value_2018: "56.1",
          value_2019: "57.9"
        }
      ],
      //手机品牌排位NPS
      phone_arr: [
        {
          name: "苹果",
          value_2017: "65.4",
          value_2018: "65.1",
          value_2019: "64.0"
        },
        {
          name: "华为",
          value_2017: "57.0",
          value_2018: "61.9",
          value_2019: "63.6"
        },
        {
          name: "OPPO",
          value_2017: "54.0",
          value_2018: "55.5",
          value_2019: "57.0"
        },
        {
          name: "荣耀",
          value_2017: "50.8",
          value_2018: "53.0",
          value_2019: "56.4"
        },
        {
          name: "小米",
          value_2017: "50.0",
          value_2018: "52.2",
          value_2019: "54.2"
        },
        {
          name: "VIVO",
          value_2017: "51.8",
          value_2018: "52.9",
          value_2019: "54.0"
        },
        {
          name: "三星",
          value_2017: "49.2",
          value_2018: "49.1",
          value_2019: "52.9"
        },
        {
          name: "魅族",
          value_2017: "47.7",
          value_2018: "44.3",
          value_2019: "48.5"
        },
        {
          name: "海信",
          value_2017: "22.3",
          value_2018: "31.3",
          value_2019: "40.2"
        }
      ],





      //产品NPS内容

      // 电视
      producttv_arr:[
        {
          name: "海信",
          value_2017: "59.4",
          value_2018: "63.4",
          value_2019: "64.1"
        },
        {
          name: "索尼",
          value_2017: "74.8",
          value_2018: "70.6",
          value_2019: "69.6"
        },
        {
          name: "三星",
          value_2017: "65.6",
          value_2018: "67.4",
          value_2019: "68.4"
        },

        {
          name: "夏普",
          value_2017: "53.5",
          value_2018: "59.6",
          value_2019: "59.1"
        },
        {
          name: "小米",
          value_2017: "-",
          value_2018: "56.7",
          value_2019: "58.7"
        },
        {
          name: "TCL",
          value_2017: "50.3",
          value_2018: "56.0",
          value_2019: "57.6"
        },
        {
          name: "海尔",
          value_2017: "45.4",
          value_2018: "53.0",
          value_2019: "53.8"
        },
        {
          name: "创维",
          value_2017: "46.1",
          value_2018: "55.4",
          value_2019: "57.0"
        }
      ],
      // 冰箱
      productIce_arr:[
        {
          name: "海尔",
          value_2017: "58.2",
          value_2018: "62.7",
          value_2019: "64.4"
        },
        {
          name: "卡萨帝",
          value_2017: "",
          value_2018: "67.1",
          value_2019: "68.1"
        },
        {
          name: "西门子",
          value_2017: "66.1",
          value_2018: "67.8",
          value_2019: "66.9"
        },
        {
          name: "容声",
          value_2017: "55.0",
          value_2018: "60.6",
          value_2019: "61.0"
        },
        {
          name: "三星",
          value_2017: "53.3",
          value_2018: "58.9",
          value_2019: "59.2"
        },
        {
          name: "海信",
          value_2017: "50.5",
          value_2018: "56.9",
          value_2019: "58.1"
        },
        {
          name: "美的",
          value_2017: "48.7",
          value_2018: "55.0",
          value_2019: "56.7"
        },
        {
          name: "美菱",
          value_2017: "45.9",
          value_2018: "51.7",
          value_2019: "52.4"
        }
      ],
      // 空调
      productAir_arr:[
        {
          name: "格力",
          value_2017: "72.7",
          value_2018: "69.4",
          value_2019: "69.5"
        },
        {
          name: "海尔",
          value_2017: "63.3",
          value_2018: "65.4",
          value_2019: "63.5 "
        },
        {
          name: "美的",
          value_2017: "58.9",
          value_2018: "61.8",
          value_2019: "64.3"
        },
        {
          name: "海信",
          value_2017: "55.1",
          value_2018: "59.1",
          value_2019: "58.5"
        },
        {
          name: "奥克斯",
          value_2017: "54.1",
          value_2018: "57.8",
          value_2019: "57.5"
        },
        {
          name: "科龙",
          value_2017: "47.5",
          value_2018: "51.5",
          value_2019: "53.3"
        },
        {
          name: "志高",
          value_2017: "48.3",
          value_2018: "51.8",
          value_2019: "51.8"
        }
      ],
      //洗衣机
      productWash_arr:[
        {
          name: "西门子",
          value_2017: "68.9",
          value_2018: "68.7",
          value_2019: "68.3"
        },
        {
          name: "海尔",
          value_2017: "62.2",
          value_2018: "63.8",
          value_2019: "65.9"
        },
        {
          name: "小天鹅",
          value_2017: "55.0",
          value_2018: "60.3",
          value_2019: "62.9"
        },
        {
          name: "LG",
          value_2017: "63.5",
          value_2018: "63.3",
          value_2019: "63.9"
        },
        {
          name: "松下",
          value_2017: "63.2",
          value_2018: "62.5",
          value_2019: "61.5"
        },
        {
          name: "三星",
          value_2017: "57.4",
          value_2018: "61.1",
          value_2019: "60.6"
        },
        {
          name: "海信",
          value_2017: "51.0",
          value_2018: "55.6",
          value_2019: "57.3"
        }
      ],
      //手机
      productPhone_arr:[
        {
          name: "苹果",
          value_2017: "67.8",
          value_2018: "66.1",
          value_2019: "65.2"
        },
        {
          name: "华为",
          value_2017: "56.8",
          value_2018: "61.7",
          value_2019: "63.6"
        },
        {
          name: "OPPO",
          value_2017: "53.7",
          value_2018: "55.0",
          value_2019: "53.7"
        },
        {
          name: "荣耀",
          value_2017: "51.1",
          value_2018: "52.2",
          value_2019: "56.1"
        },
        {
          name: "小米",
          value_2017: "49.6",
          value_2018: "51.6",
          value_2019: "53.8"
        },
        {
          name: "VIVO",
          value_2017: "51.5",
          value_2018: "52.7",
          value_2019: "53.6"
        },
        {
          name: "三星",
          value_2017: "49.6",
          value_2018: "49.0",
          value_2019: "53.0"
        },
        {
          name: "魅族",
          value_2017: "48.1",
          value_2018: "43.9",
          value_2019: "48.4"
        },
        {
          name: "海信",
          value_2017: "20.3",
          value_2018: "29.7",
          value_2019: "39.2"
        }
      ],

      //销售NPS内容
      //电视
      selltv_arr:[
        {
          name: "海信",
          value_2017: "57.3",
          value_2018: "61.9",
          value_2019: "60.4"
        },
        {
          name: "索尼",
          value_2017: "54.0",
          value_2018: "58.6",
          value_2019: "58.2"
        },
        {
          name: "三星",
          value_2017: "51.3",
          value_2018: "58.7",
          value_2019: "57.8"
        },

        {
          name: "夏普",
          value_2017: "52.7",
          value_2018: "57.2",
          value_2019: "56.1"
        },
        {
          name: "小米",
          value_2017: "",
          value_2018: "57.6",
          value_2019: "59.6"
        },
        {
          name: "TCL",
          value_2017: "50.0",
          value_2018: "56.6",
          value_2019: "53.9"
        },
        {
          name: "海尔",
          value_2017: "53.3",
          value_2018: "54.2",
          value_2019: "53.8"
        },
        {
          name: "创维",
          value_2017: "59.3",
          value_2018: "61.7",
          value_2019: "59.2"
        }
      ],
      //冰箱
      sellIce_arr:[
        {
          name: "海尔",
          value_2017: "59.7",
          value_2018: "60.9",
          value_2019: "63.2"
        },
        {
          name: "卡萨帝",
          value_2017: "",
          value_2018: "61.3",
          value_2019: "65.4"
        },
        {
          name: "西门子",
          value_2017: "54.9",
          value_2018: "55.0",
          value_2019: "56.5"
        },
        {
          name: "容声",
          value_2017: "57.9",
          value_2018: "60.6",
          value_2019: "60.9"
        },
        {
          name: "三星",
          value_2017: "49.4",
          value_2018: "53.0",
          value_2019: "55.1"
        },
        {
          name: "海信",
          value_2017: "51.6",
          value_2018: "56.5",
          value_2019: "57.4"
        },
        {
          name: "美的",
          value_2017: "57.7",
          value_2018: "59.3",
          value_2019: "60.3"
        },
        {
          name: "美菱",
          value_2017: "58.8",
          value_2018: "60.0",
          value_2019: "59.6"
        }
      ],
      //空调
      sellAir_arr:[
        {
          name: "格力",
          value_2017: "64.0",
          value_2018: "66.7",
          value_2019: "65.4"
        },
        {
          name: "海尔",
          value_2017: "57.3",
          value_2018: "60.3",
          value_2019: "59.6 "
        },
        {
          name: "美的",
          value_2017: "59.3",
          value_2018: "62.0",
          value_2019: "64.5"
        },
        {
          name: "海信",
          value_2017: "51.0",
          value_2018: "57.3",
          value_2019: "55.6"
        },
        {
          name: "奥克斯",
          value_2017: "49.3",
          value_2018: "58.0",
          value_2019: "58.3"
        },
        {
          name: "科龙",
          value_2017: "49.3",
          value_2018: "55.5",
          value_2019: "54.0"
        },
        {
          name: "志高",
          value_2017: "41.1",
          value_2018: "54.3",
          value_2019: "51.6"
        }
      ],
      //洗衣机
      sellWash_arr:[
        {
          name: "西门子",
          value_2017: "57.0",
          value_2018: "62.9",
          value_2019: "61.3"
        },
        {
          name: "海尔",
          value_2017: "58.3",
          value_2018: "63.6",
          value_2019: "64.7"
        },
        {
          name: "小天鹅",
          value_2017: "64.7",
          value_2018: "66.9",
          value_2019: "64.1"
        },
        {
          name: "LG",
          value_2017: "45.3",
          value_2018: "56.4",
          value_2019: "58.2"
        },
        {
          name: "松下",
          value_2017: "48.7",
          value_2018: "58.3",
          value_2019: "59.2"
        },
        {
          name: "三星",
          value_2017: "52.0",
          value_2018: "56.7",
          value_2019: "55.0"
        },
        {
          name: "海信",
          value_2017: "50.0",
          value_2018: "56.0",
          value_2019: "57.9"
        }
      ],
      //手机
      sellPhone_arr:[
        {
          name: "苹果",
          value_2017: "42.0",
          value_2018: "58.0",
          value_2019: "53.9"
        },
        {
          name: "华为",
          value_2017: "68.0",
          value_2018: "68.2",
          value_2019: "68.4"
        },
        {
          name: "OPPO",
          value_2017: "58.6",
          value_2018: "64.0",
          value_2019: "62.7"
        },
        {
          name: "荣耀",
          value_2017: "56.0",
          value_2018: "66.5",
          value_2019: "63.0"
        },
        {
          name: "小米",
          value_2017: "57.0",
          value_2018: "59.6",
          value_2019: "59.7"
        },
        {
          name: "VIVO",
          value_2017: "59.8",
          value_2018: "60.3",
          value_2019: "60.8"
        },
        {
          name: "三星",
          value_2017: "48.5",
          value_2018: "54.7",
          value_2019: "55.6"
        },
        {
          name: "魅族",
          value_2017: "46.0",
          value_2018: "47.7",
          value_2019: "47.4"
        },
        {
          name: "海信",
          value_2017: "37.0",
          value_2018: "44.0",
          value_2019: "48.8"
        }
      ],


      //服务NPS内容
      //电视
      servicetv_arr:[
        {
          name: "海信",
          value_2017: "55.0",
          value_2018: "58.7",
          value_2019: "59.2"
        },
        {
          name: "索尼",
          value_2017: "51.9",
          value_2018: "55.6",
          value_2019: "55.9"
        },
        {
          name: "三星",
          value_2017: "51.4",
          value_2018: "54.4",
          value_2019: "54.8"
        },

        {
          name: "夏普",
          value_2017: "48.1",
          value_2018: "52.4",
          value_2019: "52.2"
        },
        {
          name: "小米",
          value_2017: "",
          value_2018: "54.3",
          value_2019: "55.0"
        },
        {
          name: "TCL",
          value_2017: "50.8",
          value_2018: "54.8",
          value_2019: "55.8"
        },
        {
          name: "海尔",
          value_2017: "54.7",
          value_2018: "58.6",
          value_2019: "58.1"
        },
        {
          name: "创维",
          value_2017: "49.7",
          value_2018: "52.9",
          value_2019: "53.0"
        }
      ],
      //冰箱
      serviceIce_arr:[
        {
          name: "海尔",
          value_2017: "52.3",
          value_2018: "59.0",
          value_2019: "58.6"
        },
        {
          name: "卡萨帝",
          value_2017: "",
          value_2018: "57.1",
          value_2019: "59.4"
        },
        {
          name: "西门子",
          value_2017: "50.4",
          value_2018: "55.7",
          value_2019: "56.6"
        },
        {
          name: "容声",
          value_2017: "51.8",
          value_2018: "53.2",
          value_2019: "56.3"
        },
        {
          name: "三星",
          value_2017: "42.2",
          value_2018: "49.2",
          value_2019: "50.7"
        },
        {
          name: "海信",
          value_2017: "47.6",
          value_2018: "51.1",
          value_2019: "53.5"
        },
        {
          name: "美的",
          value_2017: "46.3",
          value_2018: "50.4",
          value_2019: "51.6"
        },
        {
          name: "美菱",
          value_2017: "46.3",
          value_2018: "49.6",
          value_2019: "50.7"
        }
      ],
      // 空调
      serviceAir_arr:[
        {
          name: "格力",
          value_2017: "58.8",
          value_2018: "61.8",
          value_2019: "64.0"
        },
        {
          name: "海尔",
          value_2017: "58.4",
          value_2018: "63.3",
          value_2019: "63.4 "
        },
        {
          name: "美的",
          value_2017: "51.3",
          value_2018: "57.9",
          value_2019: "57.3"
        },
        {
          name: "海信",
          value_2017: "57.3",
          value_2018: "60.2",
          value_2019: "59.3"
        },
        {
          name: "奥克斯",
          value_2017: "51.5",
          value_2018: "58.7",
          value_2019: "56.8"
        },
        {
          name: "科龙",
          value_2017: "55.0",
          value_2018: "58.1",
          value_2019: "57.6"
        },
        {
          name: "志高",
          value_2017: "48.1",
          value_2018: "55.7",
          value_2019: "54.1"
        }
      ],
      // 洗衣机
      serviceWash_arr:[
        {
          name: "西门子",
          value_2017: "68.1",
          value_2018: "63.8",
          value_2019: "61.7"
        },
        {
          name: "海尔",
          value_2017: "73.5",
          value_2018: "67.1",
          value_2019: "68.6"
        },
        {
          name: "小天鹅",
          value_2017: "69.3",
          value_2018: "60.9",
          value_2019: "64.6"
        },
        {
          name: "LG",
          value_2017: "66.7",
          value_2018: "60.1",
          value_2019: "60.2"
        },
        {
          name: "松下",
          value_2017: "58.7",
          value_2018: "56.8",
          value_2019: "56.5"
        },
        {
          name: "三星",
          value_2017: "67.3",
          value_2018: "56.6",
          value_2019: "56.2"
        },
        {
          name: "海信",
          value_2017: "64.0",
          value_2018: "58.8",
          value_2019: "60.7"
        }
      ],
      // 手机
      servicePhone_arr:[
        {
          name: "苹果",
          value_2017: "45.5",
          value_2018: "54.5",
          value_2019: "52.7"
        },
        {
          name: "华为",
          value_2017: "50.0",
          value_2018: "58.7",
          value_2019: "58.4"
        },
        {
          name: "OPPO",
          value_2017: "55.2",
          value_2018: "55.0",
          value_2019: "56.2"
        },
        {
          name: "荣耀",
          value_2017: "40.0",
          value_2018: "53.0",
          value_2019: "55.2"
        },
        {
          name: "小米",
          value_2017: "49.0",
          value_2018: "55.2",
          value_2019: "56.7"
        },
        {
          name: "VIVO",
          value_2017: "49.0",
          value_2018: "50.0",
          value_2019: "54.2"
        },
        {
          name: "三星",
          value_2017: "43.6",
          value_2018: "45.8",
          value_2019: "48.3"
        },
        {
          name: "魅族",
          value_2017: "41.0",
          value_2018: "48.0",
          value_2019: "51.2"
        },
        {
          name: "海信",
          value_2017: "42.7",
          value_2018: "46.0",
          value_2019: "49.0"
        }
      ],
      activeName: "tv",
      // chartBar: null,
      ProductChartBar: null,
      salesChartBar: null,
      serviceChartBar: null,

      charttv: null,

      // 所有三段式：
      charThree: null,
      charThree1: null,
      charThree2: null,
      charThree3: null,

      // 这里为表格中的数据
      tableData: [
        {
          ranking: "19年-18年NPS差值",
          tv: "-0.5",
          ice: "0.4",
          air: "-1.1",
          wash: "2.4",
          phone: "12.3"
        },
        {
          ranking: "18年-17年NPS差值",
          tv: "2.2",
          ice: "5.6",
          air: "6.3",
          wash: "5.3",
          phone: "3.0"
        }
      ],
      radio: 1, //radio单选框默认选中时对应的label值
      checkList: [],
      // options: [
      //   {
      //     value: "1",
      //     label: "行业整体NPS 同比"
      //   },
      //   {
      //     value: "2",
      //     label: "产品销售渠道NPS同比"
      //   },
      //   {
      //     value: "3",
      //     label: "产品同类型NPS同比"
      //   },
      //   {
      //     value: "4", 74
      //     label: "产品价格档次NPS同比"
      //   }
      // ],
      value: "1",
      //三段式柱状图的配置
      // 整体2016-2018NPS
      All_array2016: [60.2, 50.9, 52.8, 50.8, 28.3],
      All_array2017: [62.4, 56.5, 59.1, 56.1, 31.3],
      All_array2018: [61.9, 56.9, 58.0, 58.5, 43.6],
      // 产品2016-2018NPS
      product_array2016: [63.0, 50.9, 54.4, 51.8, 22.3],
      product_array2017: [63.4, 56.9, 59.1, 55.6, 29.7],
      product_array2018: [64.1, 58.1, 58.5, 57.3, 39.2],
      //销售2016-2018NPS
      sell_array2016: [57.3, 50.6, 50.3, 50.0, 37.0],
      sell_array2017: [61.9, 56.5, 57.3, 56.0, 44.0],
      sell_array2018: [60.4, 57.4, 55.6, 57.9, 48.8],
      //服务2016-2018NPS
      service_array2016: [56.1, 51.3, 51.5, 49.0, 41.0],
      service_array2017: [59.9, 52.5, 58.4, 58.5, 46.0],
      service_array2018: [59.9, 54.7, 59.1, 60.7, 49.0],

      threeOptions: {
        title: {
          text: "整体NPS"
        },
        color: ["#17b3a3", "#6dbccf", "#a3e1d4"],
        //提示框组件(有两个属性如下) https://www.echartsjs.com/zh/option.html#tooltip
        tooltip: {
          // //指定为axis(坐标轴触发)
          trigger: "item"
          // //是配置坐标轴指示器的快捷方式
          // axisPointer: {
          //   type: "line"
          // }
        },
        // legend:{
        //   data:["2016推荐者","2017推荐者","2018推荐者"]
        // },
        // //工具栏
        // toolbox: {
        //   feature: {
        //     dataView: { show: true, readOnly: false },
        //     magicType: { show: true, type: ["line", "bar"] },
        //     restore: { show: true },
        //     saveAsImage: { show: true }
        //   }
        // },
        //图例组件，就是图上方的信息
        // legend: {
        //图例的数据数组，数组项通常是一个字符串，每一项代表一个系列的name
        //可删除处理，因为在系列中已经指定，没有指定data时，他会去series中读
        // 每一个series中的对象的name
        // data: ["电视", "冰箱", "空调", "手机", "洗衣机"]
        // },
        grid: {
          left: "7%",
          right: "8%",
          bottom: "5%",
          containLabel: true
        },
        //x轴上的配置
        xAxis: [
          {
            type: "category", //category离散的类型
            data: ["电视", "冰箱", "空调", "洗衣机", "手机"]
            // axisPointer: {
            //   type: "shadow"
            // },
            // 是否显示坐标刻度
            // axisTick: {
            //   show: false
            // }
          }
        ],
        //y轴上的配置
        yAxis: [
          {
            type: "value",
            name: "%",
            // min: 0, //最大值会根据数据自动的显示
            max: 120
            // interval: 20,
            //坐标轴刻度标签的相关设置。
            // axisLabel: {
            //   formatter: "{value}"
            // },
            //是否显示坐标轴刻度
            // axisTick: {
            //   show: false
            // }
          }
        ],
        //系列列表，本图表中有三个系列，系列的个数由series.name(配置对象的个数)决定，
        //series中的对象个数和legend中的data数组中的个数有关
        series: [
          //2016
          {
            name: "2017推荐者",
            type: "bar",
            // 2016年的数据
            stack: "2017推荐程度",
            // itemStyle: {
            //   normal: {
            //     label: {
            //       position: "top",
            //       show: true,
            //       distance: 80,
            //       textStyle: {
            //         color: "#FF3030"
            //       }
            //     }
            //   }
            // },
            data: [70.8, 65.3, 67.9, 66.0, 53.0] //所有2016推荐者
          },
          {
            name: "2017消极者",
            type: "bar",
            // 2016年的数据
            stack: "2017推荐程度",
            data: [18.6, 20.4, 17.0, 18.8, 22.2] //所有2016推荐者
          },
          {
            name: "2017贬低者",
            type: "bar",
            // 2016年的数据
            stack: "2017推荐程度",
            data: [10.6, 14.4, 15.1, 15.2, 24.8], //所有2016推荐者
            itemStyle: {
              normal: {
                label: {
                  position: "top",
                  show: true,
                  formatter: params => {
                    //  console.log(params)
                    //  var arr = [11,22,33,44,55]
                    // console.log(this)
                    // console.log(params)
                    // console.log(this.All_array2016)
                    return this.All_array2016[params.dataIndex];
                    //  return params.data+'kg'
                  },
                  //  distance:80,
                  textStyle: {
                    color: "#000",
                    fontSize: 13
                  }
                }
              }
            }

            // data:[{name:'北京',value:12},{name:"上海",value:8}]
          },
          //2017
          {
            name: "2018推荐者",
            type: "bar",
            // 2016年的数据
            stack: "2018推荐程度",
            data: [71.4, 66.0, 68.0, 67.0, 64.1] //所有2016推荐者
          },
          {
            name: "2018消极者",
            type: "bar",
            // 2016年的数据
            stack: "2018推荐程度",
            data: [19.1, 23.8, 22.4, 22.5, 23.2] //所有2016推荐者
          },
          {
            name: "2018贬低者",
            type: "bar",
            itemStyle: {
              normal: {
                label: {
                  position: "top",
                  show: true,
                  formatter: params => {
                    //  console.log(params)
                    //  var arr = [31,42,53,54,65]
                    // console.log(this.All_array2017);
                    return this.All_array2017[params.dataIndex];
                  },
                  //  distance:80,
                  textStyle: {
                    color: "#000",
                    fontSize: 13
                  }
                }
              }
            },
            // 2016年的数据
            stack: "2018推荐程度",
            data: [9.5, 10.3, 9.6, 10.6, 12.7] //所有2016推荐者
          },
          //2018
          {
            name: "2019推荐者",
            type: "bar",
            // 2016年的数据
            stack: "2019推荐程度",
            data: [68.4, 64.1, 65.5, 65.0, 54.4] //所有2016推荐者
          },
          {
            name: "2019消极者",
            type: "bar",
            // 2016年的数据
            stack: "2019推荐程度",
            data: [25.1, 28.7, 27.0, 28.5, 34.8] //所有2016推荐者
          },
          {
            name: "2019贬低者",
            type: "bar",
            // 2016年的数据
            stack: "2019推荐程度",
            data: [6.5, 7.2, 7.5, 6.5, 10.8], //所有2016推荐者
            itemStyle: {
              normal: {
                label: {
                  position: "top",
                  show: true,
                  formatter: params => {
                    //  console.log(params)
                    //  var arr = [61,42,33,54,60]
                    return this.All_array2018[params.dataIndex];
                    //  return params.data+'kg'
                  },
                  //  distance:80,
                  textStyle: {
                    color: "#000",
                    fontSize: 13
                  }
                }
              }
            }
          }
        ]
      },
      three1Options: {
        title: {
          text: "产品NPS"
        },
        color: ["#17b3a3", "#6dbccf", "#a3e1d4"],
        //提示框组件(有两个属性如下) https://www.echartsjs.com/zh/option.html#tooltip
        tooltip: {
          trigger: "item"
        },
        //工具栏
        // toolbox: {
        //   feature: {
        //     dataView: { show: true, readOnly: false },
        //     magicType: { show: true, type: ["line", "bar"] },
        //     restore: { show: true },
        //     saveAsImage: { show: true }
        //   }
        // },
        //图例组件，就是图上方的信息
        // legend: {
        //图例的数据数组，数组项通常是一个字符串，每一项代表一个系列的name
        //可删除处理，因为在系列中已经指定，没有指定data时，他会去series中读
        // 每一个series中的对象的name

        // },
        grid: {
          left: "7%",
          right: "8%",
          bottom: "5%",
          containLabel: true
        },
        //x轴上的配置
        xAxis: [
          {
            type: "category", //category离散的类型
            data: ["电视", "冰箱", "空调", "洗衣机", "手机"]
            // axisPointer: {
            //   type: "shadow"
            // },
            // 是否显示坐标刻度
            // axisTick: {
            //   show: false
            // }
          }
        ],
        //y轴上的配置
        yAxis: [
          {
            type: "value",
            name: "%",
            // min: 0, //最大值会根据数据自动的显示
            max: 120
            // interval: 20,
            //坐标轴刻度标签的相关设置。
            // axisLabel: {
            //   formatter: "{value}"
            // },
            //是否显示坐标轴刻度
            // axisTick: {
            //   show: false
            // }
          }
        ],
        //系列列表，本图表中有三个系列，系列的个数由series.name(配置对象的个数)决定，
        //series中的对象个数和legend中的data数组中的个数有关
        series: [
          {
            name: "2017推荐者",
            type: "bar",
            // 2016年的数据
            stack: "2017推荐程度",

            data: [72.7, 65.1, 66.6, 66.4, 50.4] //所有2016推荐者
          },
          {
            name: "2017消极者",
            type: "bar",
            // 2016年的数据
            stack: "2017推荐程度",
            data: [17.7, 20.8, 21.2, 18.9, 21.5] //所有2016推荐者
          },
          {
            name: "2017贬低者",
            type: "bar",
            // 2016年的数据
            stack: "2017推荐程度",
            data: [9.7, 14.1, 12.2, 14.6, 28.1], //所有2016推荐者
            itemStyle: {
              normal: {
                label: {
                  position: "top",
                  show: true,
                  // distance: 80,
                  formatter: params => {
                    return this.product_array2016[params.dataIndex];
                  },
                  textStyle: {
                    color: "#000",
                    fontSize: 13
                  }
                }
              }
            }
          },

          {
            name: "2018推荐者",
            type: "bar",
            // 2016年的数据
            stack: "2018推荐程度",
            data: [72.4, 66.9, 68.1, 66.2, 63.1] //所有2016推荐者
          },
          {
            name: "2018消极者",
            type: "bar",
            // 2016年的数据
            stack: "2018推荐程度",
            data: [18.6, 23.1, 23.0, 23.1, 22.8] //所有2016推荐者
          },
          {
            name: "2018贬低者",
            type: "bar",
            // 2016年的数据
            stack: "2018推荐程度",
            itemStyle: {
              normal: {
                label: {
                  position: "top",
                  show: true,
                  // distance: 80,
                  formatter: params => {
                    return this.product_array2017[params.dataIndex];
                  },
                  textStyle: {
                    color: "#000",
                    fontSize: 13
                  }
                }
              }
            },
            data: [9.0, 10.0, 9.0, 10.6, 14.1] //所有2016推荐者
          },

          {
            name: "2019推荐者",
            type: "bar",
            // 2016年的数据
            stack: "2019推荐程度",
            data: [68.7, 63.4, 63.9, 64.1, 51.1] //所有2016推荐者
          },
          {
            name: "2019消极者",
            type: "bar",
            // 2016年的数据
            stack: "2019推荐程度",
            data: [26.7, 31.3, 30.6, 29.2, 37.1] //所有2016推荐者
          },
          {
            name: "2019贬低者",
            type: "bar",
            // 2016年的数据
            stack: "2019推荐程度",
            itemStyle: {
              normal: {
                label: {
                  position: "top",
                  show: true,
                  // distance: 80,
                  formatter: params => {
                    return this.product_array2018[params.dataIndex];
                  },
                  textStyle: {
                    color: "#000",
                    fontSize: 13
                  }
                }
              }
            },
            data: [4.6, 5.3, 5.4, 6.8, 11.8] //所有2016推荐者
          }
        ]
      },
      three2Options: {
        title: {
          text: "销售NPS"
        },
        color: ["#17b3a3", "#6dbccf", "#a3e1d4"],
        //提示框组件(有两个属性如下) https://www.echartsjs.com/zh/option.html#tooltip
        tooltip: {
          //指定为axis(坐标轴触发)
          // trigger: "axis",
          //是配置坐标轴指示器的快捷方式
          // axisPointer: {
          //   type: "line"
          // }
          trigger: "item"
        },
        //工具栏
        // toolbox: {
        //   feature: {
        //     dataView: { show: true, readOnly: false },
        //     magicType: { show: true, type: ["line", "bar"] },
        //     restore: { show: true },
        //     saveAsImage: { show: true }
        //   }
        // },
        //图例组件，就是图上方的信息
        // legend: {
        //图例的数据数组，数组项通常是一个字符串，每一项代表一个系列的name
        //可删除处理，因为在系列中已经指定，没有指定data时，他会去series中读
        // 每一个series中的对象的name

        // },
        grid: {
          left: "7%",
          right: "8%",
          bottom: "5%",
          containLabel: true
        },
        //x轴上的配置
        xAxis: [
          {
            type: "category", //category离散的类型
            data: ["电视", "冰箱", "空调", "洗衣机", "手机"]
            // axisPointer: {
            //   type: "shadow"
            // },
            // 是否显示坐标刻度
            // axisTick: {
            //   show: false
            // }
          }
        ],
        //y轴上的配置
        yAxis: [
          {
            type: "value",
            name: "%",
            // min: 0, //最大值会根据数据自动的显示
            max: 120
            // interval: 20,
            //坐标轴刻度标签的相关设置。
            // axisLabel: {
            //   formatter: "{value}"
            // },
            //是否显示坐标轴刻度
            // axisTick: {
            //   show: false
            // }
          }
        ],
        //系列列表，本图表中有三个系列，系列的个数由series.name(配置对象的个数)决定，
        //series中的对象个数和legend中的data数组中的个数有关
        series: [
          {
            name: "2017推荐者",
            type: "bar",
            // 2016年的数据
            stack: "2017推荐程度",
            data: [70.0, 65.9, 69.7, 65.7, 59.5] //所有2016推荐者
          },
          {
            name: "2017消极者",
            type: "bar",
            // 2016年的数据
            stack: "2017推荐程度",
            data: [17.3, 18.8, 11.0, 18.7, 18.0] //所有2016推荐者
          },
          {
            name: "2017贬低者",
            type: "bar",
            // 2016年的数据
            stack: "2017推荐程度",
            data: [12.7, 15.3, 19.3, 15.7, 22.5], //所有2016推荐者
            itemStyle: {
              normal: {
                label: {
                  position: "top",
                  show: true,
                  // distance: 80,
                  formatter: params => {
                    return this.sell_array2016[params.dataIndex];
                  },
                  textStyle: {
                    color: "#000",
                    fontSize: 13
                  }
                }
              }
            }
          },

          {
            name: "2018推荐者",
            type: "bar",
            // 2016年的数据
            stack: "2018推荐程度",
            data: [71.9, 65.8, 65.9, 65.3, 66.8] //所有2016推荐者
          },
          {
            name: "2018消极者",
            type: "bar",
            // 2016年的数据
            stack: "2018推荐程度",
            data: [18.2, 24.9, 25.5, 25.3, 23.2] //所有2016推荐者
          },
          {
            name: "2018贬低者",
            type: "bar",
            // 2016年的数据
            stack: "2018推荐程度",
            data: [9.9, 9.3, 8.6, 9.3, 10.1], //所有2016推荐者
            itemStyle: {
              normal: {
                label: {
                  position: "top",
                  show: true,
                  // distance: 80,
                  formatter: params => {
                    return this.sell_array2017[params.dataIndex];
                  },
                  textStyle: {
                    color: "#000",
                    fontSize: 13
                  }
                }
              }
            }
          },
          {
            name: "2019推荐者",
            type: "bar",
            // 2016年的数据
            stack: "2019推荐程度",
            data: [69.3, 67.5, 65.2, 65.9, 57.4] //所有2016推荐者
          },
          {
            name: "2019消极者",
            type: "bar",
            // 2016年的数据
            stack: "2019推荐程度",
            data: [21.8, 22.3, 25.2, 26.2, 34.0] //所有2016推荐者
          },
          {
            name: "2019贬低者",
            type: "bar",
            // 2016年的数据
            stack: "2019推荐程度",
            data: [8.9, 10.2, 9.6, 7.9, 8.6], //所有2016推荐者
            itemStyle: {
              normal: {
                label: {
                  position: "top",
                  show: true,
                  // distance: 80,
                  formatter: params => {
                    return this.sell_array2018[params.dataIndex];
                  },
                  textStyle: {
                    color: "#000",
                    fontSize: 13
                  }
                }
              }
            }
          }
        ]
      },
      three3Options: {
        title: {
          text: "服务NPS"
        },
        color: ["#17b3a3", "#6dbccf", "#a3e1d4"],
        //提示框组件(有两个属性如下) https://www.echartsjs.com/zh/option.html#tooltip
        tooltip: {
          //指定为axis(坐标轴触发)
          // trigger: "axis",
          //是配置坐标轴指示器的快捷方式
          // axisPointer: {
          //   type: "line"
          // }
          trigger: "item"
        },
        //工具栏
        // toolbox: {
        //   feature: {
        //     dataView: { show: true, readOnly: false },
        //     magicType: { show: true, type: ["line", "bar"] },
        //     restore: { show: true },
        //     saveAsImage: { show: true }
        //   }
        // },
        //图例组件，就是图上方的信息
        // legend: {
        //图例的数据数组，数组项通常是一个字符串，每一项代表一个系列的name
        //可删除处理，因为在系列中已经指定，没有指定data时，他会去series中读
        // 每一个series中的对象的name

        // },
        grid: {
          left: "7%",
          right: "8%",
          bottom: "5%",
          containLabel: true
        },
        //x轴上的配置
        xAxis: [
          {
            type: "category", //category离散的类型
            data: ["电视", "冰箱", "空调", "洗衣机", "手机"]
            // axisPointer: {
            //   type: "shadow"
            // },
            // 是否显示坐标刻度
            // axisTick: {
            //   show: false
            // }
          }
        ],
        //y轴上的配置
        yAxis: [
          {
            type: "value",
            name: "%",
            // min: 0, //最大值会根据数据自动的显示
            max: 120
            // interval: 20,
            //坐标轴刻度标签的相关设置。
            // axisLabel: {
            //   formatter: "{value}"
            // },
            //是否显示坐标轴刻度
            // axisTick: {
            //   show: false
            // }
          }
        ],
        //系列列表，本图表中有三个系列，系列的个数由series.name(配置对象的个数)决定，
        //series中的对象个数和legend中的data数组中的个数有关
        series: [
          {
            name: "2017推荐者",
            type: "bar",
            // 2016年的数据
            stack: "2017推荐程度",

            data: [66.3, 64.8, 69.1, 65.3, 54.9] //所有2016推荐者
          },
          {
            name: "2017消极者",
            type: "bar",
            // 2016年的数据
            stack: "2017推荐程度",
            data: [23.4, 21.6, 13.2, 18.3, 31.3] //所有2016推荐者
          },
          {
            name: "2017贬低者",
            type: "bar",
            // 2016年的数据
            stack: "2017推荐程度",
            data: [10.2, 13.6, 17.6, 16.3, 13.9], //所有2016推荐者
            itemStyle: {
              normal: {
                label: {
                  position: "top",
                  show: true,
                  // distance: 80,
                  formatter: params => {
                    return this.service_array2016[params.dataIndex];
                  },
                  textStyle: {
                    color: "#000",
                    fontSize: 13
                  }
                }
              }
            }
          },

          {
            name: "2018推荐者",
            type: "bar",
            // 2016年的数据
            stack: "2018推荐程度",
            data: [69.7, 64.3, 69.7, 70.1, 63.9] //所有2016推荐者
          },
          {
            name: "2018消极者",
            type: "bar",
            // 2016年的数据
            stack: "2018推荐程度",
            data: [20.4, 23.9, 19.0, 18.3, 23.9] //所有2016推荐者
          },
          {
            name: "2018贬低者",
            type: "bar",
            // 2016年的数据
            stack: "2018推荐程度",
            data: [9.9, 11.8, 11.3, 11.6, 12.2], //所有2016推荐者
            itemStyle: {
              normal: {
                label: {
                  position: "top",
                  show: true,
                  // distance: 80,
                  formatter: params => {
                    return this.service_array2017[params.dataIndex];
                  },
                  textStyle: {
                    color: "#000",
                    fontSize: 13
                  }
                }
              }
            }
          },

          {
            name: "2019推荐者",
            type: "bar",
            // 2016年的数据
            stack: "2019推荐程度",
            data: [67.3, 62.7, 68.1, 65.7, 60.0] //所有2016推荐者
          },
          {
            name: "2019消极者",
            type: "bar",
            // 2016年的数据
            stack: "2019推荐程度",
            data: [25.2, 29.4, 22.8, 29.4, 29.0] //所有2016推荐者
          },
          {
            name: "2019贬低者",
            type: "bar",
            // 2016年的数据
            stack: "2019推荐程度",
            data: [7.4, 8.0, 9.1, 4.9, 11.0], //所有2016推荐者
            itemStyle: {
              normal: {
                label: {
                  position: "top",
                  show: true,
                  // distance: 80,
                  formatter: params => {
                    return this.service_array2018[params.dataIndex];
                  },
                  textStyle: {
                    color: "#000"
                  }
                }
              }
            }
          }
        ]
      },

      //整体的NPS柱状图的NPS参数
      chartOptions: {
        color: ["#a3e1d4", "#6dbccf", "#17b3a3"],
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
            name: "NPS值",
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
            name: "2017",
            type: "bar",
            label: labelOption,
            // 2016年的数据
            data: [57.4, 53.2, 51.2, 56.0, 40.2]
          },
          {
            name: "2018",
            type: "bar",
            label: labelOption,
            // 2017年的数据
            data: [55.2, 54.0, 55.8, 60.2, 49.8]
          },
          {
            name: "2019",
            type: "bar",
            label: labelOption,
            // 2018年的数据
            data: [59.1, 58.5, 65.5, 80.6, 64.7]
          }
        ]
      },
      //产品NPS柱状图的NPS参数(保留项，未显示在页面中)
      product_chartOptions: {
        color: ["#a3e1d4", "#6dbccf", "#17b3a3"],
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
            name: "NPS值",
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
            data: [65.2, 80.2, 80.4, 69.0, 78.2]
          },
          {
            name: "2017",
            type: "bar",
            label: labelOption,
            // 2017年的数据
            data: [89.2, 53.0, 45.8, 80.2, 89.8]
          },
          {
            name: "2018",
            type: "bar",
            label: labelOption,
            // 2018年的数据
            data: [49.1, 58.5, 49.5, 91.6, 51.7]
          }
        ]
      },
      //销售NPS柱状图的NPS参数(保留项，未显示在页面中)
      sales_chartOptions: {
        color: ["#a3e1d4", "#6dbccf", "#17b3a3"],
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
            name: "NPS值",
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
            data: [59.1, 58.5, 59.5, 61.6, 51.7]
          }
        ]
      },
      //服务的NPS柱状图的NPS参数(保留项，未显示在页面中)
      service_chartOptions: {
        color: ["#a3e1d4", "#6dbccf", "#17b3a3"],
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
            name: "NPS值",
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
            data: [59.1, 58.5, 59.5, 61.6, 51.7]
          }
        ]
      },

      xAxis: [
        {
          type: "category",
          data: getRanking(ranking_pr(tv_arr)).arr_name,
          axisPointer: {
            type: "shadow"
          },
          name: "品牌NPS排位",
          nameLocation: "start",
          nameTextStyle: {
            fontSize: 12, //文字大小
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
          label: labelOption,
          itemStyle: {
            normal: {
              color: function(params) {
                // var colorList = ['#a3e1d4','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9'];
                //  return colorList[params.dataIndex]
                return getRanking(tv_arr).arr_2017[params.dataIndex].color;
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
                return getRanking(tv_arr).arr_2018[params.dataIndex].color;
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
                return getRanking(tv_arr).arr_2019[params.dataIndex].color;
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
          name: "NPS值",
          min: 0,
          max: 80,
          // max: 100,
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
  mounted() {
    // this.initChartBar();
    // console.log(this)
    this.initChartTv();
    this.initThreeChartBar();
  },
  activated() {
    // 由于给echart添加了resize事件, 在组件激活时需要重新resize绘画一次, 否则出现空白bug
    // if (this.chartBar) {
    //   this.chartBar.resize();
    // }
    if (this.charttv) {
      this.charttv.resize();
    }
    if (this.charThree) {
      this.charThree.resize();
    }
  },
  methods: {
    handleClick(tab, event) {
      //点击的第一个按钮
      if (this.radio == 1) {
        if (tab.$options.propsData.name === "tv") {
          this.xAxis = [
            {
              type: "category",
              // data: ['海信','三星','索尼','夏普','小米','TCL','海尔','创维'],
              data: getRanking(ranking_pr(this.tv_arr)).arr_name,
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
              data: getRanking(ranking_pr(this.tv_arr)).arr_2017,
              label: labelOption,
              itemStyle: {
                normal: {
                  color: params=> {
                    // var colorList = ['#a3e1d4','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9'];
                    //  return colorList[params.dataIndex]
                    return getRanking(ranking_pr(this.tv_arr)).arr_2017[
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
              data: getRanking(ranking_pr(this.tv_arr)).arr_2018,
              label: labelOption,
              itemStyle: {
                normal: {
                  color: params=>{
                    // var colorList = ['#6dbccf','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9'];
                    // return colorList[params.dataIndex]
                    return getRanking(ranking_pr(this.tv_arr)).arr_2018[
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
              data: getRanking(ranking_pr(this.tv_arr)).arr_2019,
              label: labelOption,
              itemStyle: {
                normal: {
                  color: params=> {
                    // var colorList = ['#17b3a3','#808080','#808080','#808080','#808080','#808080','#808080','#808080','#808080','#808080'];
                    // return colorList[params.dataIndex]
                    return getRanking(ranking_pr(this.tv_arr)).arr_2019[
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
          // console.log(getRanking(tv_arr).arr_2017);
        }
        if (tab.$options.propsData.name === "icebox") {
          this.xAxis = [
            {
              type: "category",
              // data: ['海信','三星','索尼','夏普','小米','TCL','海尔','创维'],
              data: getRanking(ranking_pr(this.ice_arr)).arr_name,
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
              data: getRanking(ranking_pr(this.ice_arr)).arr_2017,
              label: labelOption,
              itemStyle: {
                normal: {
                  color: params => {
                    // console.log(this);
                    // var colorList = ['#a3e1d4','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9'];
                    //  return colorList[params.dataIndex]
                    return getRanking(ranking_pr(this.ice_arr)).arr_2017[
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
              data: getRanking(ranking_pr(this.ice_arr)).arr_2018,
              label: labelOption,
              itemStyle: {
                normal: {
                  color: params => {
                    // var colorList = ['#6dbccf','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9'];
                    // return colorList[params.dataIndex]
                    return getRanking(ranking_pr(this.ice_arr)).arr_2018[
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
              data: getRanking(ranking_pr(this.ice_arr)).arr_2019,
              label: labelOption,
              itemStyle: {
                normal: {
                  color: params => {
                    // var colorList = ['#17b3a3','#808080','#808080','#808080','#808080','#808080','#808080','#808080','#808080','#808080'];
                    // return colorList[params.dataIndex]
                    return getRanking(ranking_pr(this.ice_arr)).arr_2019[
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
        }
        if (tab.$options.propsData.name === "airConditioner") {
          this.xAxis = [
            {
              type: "category",
              // data: ['海信','三星','索尼','夏普','小米','TCL','海尔','创维'],
              data: getRanking(ranking_pr(this.air_arr)).arr_name,
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
              data: getRanking(ranking_pr(this.air_arr)).arr_2017,
              label: labelOption,
              itemStyle: {
                normal: {
                  color: params => {
                    // var colorList = ['#a3e1d4','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9'];
                    //  return colorList[params.dataIndex]
                    return getRanking(ranking_pr(this.air_arr)).arr_2017[
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
              data: getRanking(ranking_pr(this.air_arr)).arr_2018,
              label: labelOption,
              itemStyle: {
                normal: {
                  color: params => {
                    // var colorList = ['#6dbccf','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9'];
                    // return colorList[params.dataIndex]
                    return getRanking(ranking_pr(this.air_arr)).arr_2018[
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
              data: getRanking(ranking_pr(this.air_arr)).arr_2019,
              label: labelOption,
              itemStyle: {
                normal: {
                  color: params => {
                    // var colorList = ['#17b3a3','#808080','#808080','#808080','#808080','#808080','#808080','#808080','#808080','#808080'];
                    // return colorList[params.dataIndex]
                    return getRanking(ranking_pr(this.air_arr)).arr_2019[
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
        }
        if (tab.$options.propsData.name === "washer") {
          this.xAxis = [
            {
              type: "category",
              // data: ['海信','三星','索尼','夏普','小米','TCL','海尔','创维'],
              data: getRanking(ranking_pr(this.wash_arr)).arr_name,

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
              data: getRanking(ranking_pr(this.wash_arr)).arr_2017,
              label: labelOption,
              itemStyle: {
                normal: {
                  color: params => {
                    // var colorList = ['#a3e1d4','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9'];
                    //  return colorList[params.dataIndex]
                    return getRanking(ranking_pr(this.wash_arr)).arr_2017[
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
              data: getRanking(ranking_pr(this.wash_arr)).arr_2018,
              label: labelOption,
              itemStyle: {
                normal: {
                  color: params => {
                    // var colorList = ['#6dbccf','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9'];
                    // return colorList[params.dataIndex]
                    return getRanking(ranking_pr(this.wash_arr)).arr_2018[
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
              data: getRanking(ranking_pr(this.wash_arr)).arr_2019,
              label: labelOption,
              itemStyle: {
                normal: {
                  color: params => {
                    // var colorList = ['#17b3a3','#808080','#808080','#808080','#808080','#808080','#808080','#808080','#808080','#808080'];
                    // return colorList[params.dataIndex]
                    return getRanking(ranking_pr(this.wash_arr)).arr_2019[
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
        }
        if (tab.$options.propsData.name === "phone") {
          this.xAxis = [
            {
              type: "category",
              // data: ['海信','三星','索尼','夏普','小米','TCL','海尔','创维'],
              data: getRanking(ranking_pr(this.phone_arr)).arr_name,

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
              data: getRanking(ranking_pr(this.phone_arr)).arr_2017,
              label: labelOption,
              itemStyle: {
                normal: {
                  color: params => {
                    // console.log(this);
                    // var colorList = ['#a3e1d4','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9'];
                    //  return colorList[params.dataIndex]
                    return getRanking(ranking_pr(this.phone_arr)).arr_2017[
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
              data: getRanking(ranking_pr(this.phone_arr)).arr_2018,
              label: labelOption,
              itemStyle: {
                normal: {
                  color: params => {
                    // var colorList = ['#6dbccf','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9'];
                    // return colorList[params.dataIndex]
                    return getRanking(ranking_pr(this.phone_arr)).arr_2018[
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
              data: getRanking(ranking_pr(this.phone_arr)).arr_2019,
              label: labelOption,
              itemStyle: {
                normal: {
                  color: params => {
                    // var colorList = ['#17b3a3','#808080','#808080','#808080','#808080','#808080','#808080','#808080','#808080','#808080'];
                    // return colorList[params.dataIndex]
                    return getRanking(ranking_pr(this.phone_arr)).arr_2019[
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
        }
      } else if (this.radio == 2) {
        //电视
        if (tab.$options.propsData.name === "tv") {
          console.log('2-tv')
          this.xAxis = [
            {
              type: "category",
              // data: ['海信','三星','索尼','夏普','小米','TCL','海尔','创维'],
              data: getRanking(ranking_pr(this.producttv_arr)).arr_name,

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
              data: getRanking(ranking_pr(this.producttv_arr)).arr_2017,
              label: labelOption,
              itemStyle: {
                normal: {
                  color: params=> {
                    // var colorList = ['#a3e1d4','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9'];
                    //  return colorList[params.dataIndex]
                    return getRanking(ranking_pr(this.producttv_arr)).arr_2017[
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
              data: getRanking(ranking_pr(this.producttv_arr)).arr_2018,
              label: labelOption,
              itemStyle: {
                normal: {
                  color: params=> {
                    // var colorList = ['#6dbccf','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9'];
                    // return colorList[params.dataIndex]
                    return getRanking(ranking_pr(this.producttv_arr)).arr_2018[
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
              data: getRanking(ranking_pr(this.producttv_arr)).arr_2019,
              label: labelOption,
              itemStyle: {
                normal: {
                  color: params=> {
                    // var colorList = ['#17b3a3','#808080','#808080','#808080','#808080','#808080','#808080','#808080','#808080','#808080'];
                    // return colorList[params.dataIndex]
                    return getRanking(ranking_pr(this.producttv_arr)).arr_2019[
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
          // console.log(getRanking(tv_arr).arr_2017);
        }
        if (tab.$options.propsData.name === "icebox") {
          this.xAxis = [
            {
              type: "category",
              // data: ['海信','三星','索尼','夏普','小米','TCL','海尔','创维'],
              data: getRanking(ranking_pr(this.productIce_arr)).arr_name,

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
              data: getRanking(ranking_pr(this.productIce_arr)).arr_2017,
              label: labelOption,
              itemStyle: {
                normal: {
                  color: params => {
                    // console.log(this);
                    // var colorList = ['#a3e1d4','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9'];
                    //  return colorList[params.dataIndex]
                    return getRanking(ranking_pr(this.productIce_arr)).arr_2017[
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
              data: getRanking(ranking_pr(this.productIce_arr)).arr_2018,
              label: labelOption,
              itemStyle: {
                normal: {
                  color: params => {
                    // var colorList = ['#6dbccf','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9'];
                    // return colorList[params.dataIndex]
                    return getRanking(ranking_pr(this.productIce_arr)).arr_2018[
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
              data: getRanking(ranking_pr(this.productIce_arr)).arr_2019,
              label: labelOption,
              itemStyle: {
                normal: {
                  color: params => {
                    // var colorList = ['#17b3a3','#808080','#808080','#808080','#808080','#808080','#808080','#808080','#808080','#808080'];
                    // return colorList[params.dataIndex]
                    return getRanking(ranking_pr(this.productIce_arr)).arr_2019[
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
        }
        if (tab.$options.propsData.name === "airConditioner") {
          this.xAxis = [
            {
              type: "category",
              // data: ['海信','三星','索尼','夏普','小米','TCL','海尔','创维'],
              data: getRanking(ranking_pr(this.productAir_arr)).arr_name,

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
              data: getRanking(ranking_pr(this.productAir_arr)).arr_2017,
              label: labelOption,
              itemStyle: {
                normal: {
                  color: params => {
                    console.log(this);
                    // var colorList = ['#a3e1d4','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9'];
                    //  return colorList[params.dataIndex]
                    return getRanking(ranking_pr(this.productAir_arr)).arr_2017[
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
              data: getRanking(ranking_pr(this.productAir_arr)).arr_2018,
              label: labelOption,
              itemStyle: {
                normal: {
                  color: params => {
                    // var colorList = ['#6dbccf','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9'];
                    // return colorList[params.dataIndex]
                    return getRanking(ranking_pr(this.productAir_arr)).arr_2018[
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
              data: getRanking(ranking_pr(this.productAir_arr)).arr_2019,
              label: labelOption,
              itemStyle: {
                normal: {
                  color: params => {
                    // var colorList = ['#17b3a3','#808080','#808080','#808080','#808080','#808080','#808080','#808080','#808080','#808080'];
                    // return colorList[params.dataIndex]
                    return getRanking(ranking_pr(this.productAir_arr)).arr_2019[
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
        }
        if (tab.$options.propsData.name === "washer") {
          this.xAxis = [
            {
              type: "category",
              // data: ['海信','三星','索尼','夏普','小米','TCL','海尔','创维'],
              data: getRanking(ranking_pr(this.productWash_arr)).arr_name,

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
              data: getRanking(ranking_pr(this.productWash_arr)).arr_2017,
              label: labelOption,
              itemStyle: {
                normal: {
                  color: params => {
                    console.log(this);
                    // var colorList = ['#a3e1d4','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9'];
                    //  return colorList[params.dataIndex]
                    return getRanking(ranking_pr(this.productWash_arr)).arr_2017[
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
              data: getRanking(ranking_pr(this.productWash_arr)).arr_2018,
              label: labelOption,
              itemStyle: {
                normal: {
                  color: params => {
                    // var colorList = ['#6dbccf','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9'];
                    // return colorList[params.dataIndex]
                    return getRanking(ranking_pr(this.productWash_arr)).arr_2018[
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
              data: getRanking(ranking_pr(this.productWash_arr)).arr_2019,
              label: labelOption,
              itemStyle: {
                normal: {
                  color: params => {
                    // var colorList = ['#17b3a3','#808080','#808080','#808080','#808080','#808080','#808080','#808080','#808080','#808080'];
                    // return colorList[params.dataIndex]
                    return getRanking(ranking_pr(this.productWash_arr)).arr_2019[
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
        }
        if (tab.$options.propsData.name === "phone") {
          this.xAxis = [
            {
              type: "category",
              // data: ['海信','三星','索尼','夏普','小米','TCL','海尔','创维'],
              data: getRanking(ranking_pr(this.productPhone_arr)).arr_name,

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
              data: getRanking(ranking_pr(this.productPhone_arr)).arr_2017,
              label: labelOption,
              itemStyle: {
                normal: {
                  color: params => {
                    console.log(this);
                    // var colorList = ['#a3e1d4','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9'];
                    //  return colorList[params.dataIndex]
                    return getRanking(ranking_pr(this.productPhone_arr)).arr_2017[
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
              data: getRanking(ranking_pr(this.productPhone_arr)).arr_2018,
              label: labelOption,
              itemStyle: {
                normal: {
                  color: params => {
                    // var colorList = ['#6dbccf','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9'];
                    // return colorList[params.dataIndex]
                    return getRanking(ranking_pr(this.productPhone_arr)).arr_2018[
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
              data: getRanking(ranking_pr(this.productPhone_arr)).arr_2019,
              label: labelOption,
              itemStyle: {
                normal: {
                  color: params => {
                    // var colorList = ['#17b3a3','#808080','#808080','#808080','#808080','#808080','#808080','#808080','#808080','#808080'];
                    // return colorList[params.dataIndex]
                    return getRanking(ranking_pr(this.productPhone_arr)).arr_2019[
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
        }
      } else if (this.radio == 3) {
        if (tab.$options.propsData.name === "tv") {
          this.xAxis = [
            {
              type: "category",
              // data: ['海信','三星','索尼','夏普','小米','TCL','海尔','创维'],
              data: getRanking(ranking_pr(this.selltv_arr)).arr_name,

              axisPointer: {
                type: "shadow"
              },
              name: "品牌NPS排位",
              nameLocation: "start",
              nameTextStyle: {
                fontSize: 15,
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
              data: getRanking(ranking_pr(this.selltv_arr)).arr_2017,
              label: labelOption,
              itemStyle: {
                normal: {
                  color: params=> {
                    // var colorList = ['#a3e1d4','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9'];
                    //  return colorList[params.dataIndex]
                    return getRanking(ranking_pr(this.selltv_arr)).arr_2017[
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
              data: getRanking(ranking_pr(this.selltv_arr)).arr_2018,
              label: labelOption,
              itemStyle: {
                normal: {
                  color: params=> {
                    // var colorList = ['#6dbccf','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9'];
                    // return colorList[params.dataIndex]
                    return getRanking(ranking_pr(this.selltv_arr)).arr_2018[
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
              data: getRanking(ranking_pr(this.selltv_arr)).arr_2019,
              label: labelOption,
              itemStyle: {
                normal: {
                  color: params=> {
                    // var colorList = ['#17b3a3','#808080','#808080','#808080','#808080','#808080','#808080','#808080','#808080','#808080'];
                    // return colorList[params.dataIndex]
                    return getRanking(ranking_pr(this.selltv_arr)).arr_2019[
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
          // console.log(getRanking(tv_arr).arr_2017);
        }
        if (tab.$options.propsData.name === "icebox") {
          this.xAxis = [
            {
              type: "category",
              // data: ['海信','三星','索尼','夏普','小米','TCL','海尔','创维'],
              data: getRanking(ranking_pr(this.sellIce_arr)).arr_name,

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
              data: getRanking(ranking_pr(this.sellIce_arr)).arr_2017,
              label: labelOption,
              itemStyle: {
                normal: {
                  color: params => {
                    console.log(this);
                    // var colorList = ['#a3e1d4','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9'];
                    //  return colorList[params.dataIndex]
                    return getRanking(ranking_pr(this.sellIce_arr)).arr_2017[
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
              data: getRanking(ranking_pr(this.sellIce_arr)).arr_2018,
              label: labelOption,
              itemStyle: {
                normal: {
                  color: params => {
                    // var colorList = ['#6dbccf','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9'];
                    // return colorList[params.dataIndex]
                    return getRanking(ranking_pr(this.sellIce_arr)).arr_2018[
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
              data: getRanking(ranking_pr(this.sellIce_arr)).arr_2019,
              label: labelOption,
              itemStyle: {
                normal: {
                  color: params => {
                    // var colorList = ['#17b3a3','#808080','#808080','#808080','#808080','#808080','#808080','#808080','#808080','#808080'];
                    // return colorList[params.dataIndex]
                    return getRanking(ranking_pr(this.sellIce_arr)).arr_2019[
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
        }
        if (tab.$options.propsData.name === "airConditioner") {
          this.xAxis = [
            {
              type: "category",
              // data: ['海信','三星','索尼','夏普','小米','TCL','海尔','创维'],
              data: getRanking(ranking_pr(this.sellAir_arr)).arr_name,

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
              data: getRanking(ranking_pr(this.sellAir_arr)).arr_2017,
              label: labelOption,
              itemStyle: {
                normal: {
                  color: params => {
                    console.log(this);
                    // var colorList = ['#a3e1d4','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9'];
                    //  return colorList[params.dataIndex]
                    return getRanking(ranking_pr(this.sellAir_arr)).arr_2017[
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
              data: getRanking(ranking_pr(this.sellAir_arr)).arr_2018,
              label: labelOption,
              itemStyle: {
                normal: {
                  color: params => {
                    // var colorList = ['#6dbccf','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9'];
                    // return colorList[params.dataIndex]
                    return getRanking(ranking_pr(this.sellAir_arr)).arr_2018[
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
              data: getRanking(ranking_pr(this.sellAir_arr)).arr_2019,
              label: labelOption,
              itemStyle: {
                normal: {
                  color: params => {
                    // var colorList = ['#17b3a3','#808080','#808080','#808080','#808080','#808080','#808080','#808080','#808080','#808080'];
                    // return colorList[params.dataIndex]
                    return getRanking(ranking_pr(this.sellAir_arr)).arr_2019[
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
        }
        if (tab.$options.propsData.name === "washer") {
          this.xAxis = [
            {
              type: "category",
              // data: ['海信','三星','索尼','夏普','小米','TCL','海尔','创维'],
              data: getRanking(ranking_pr(this.sellWash_arr)).arr_name,

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
              data: getRanking(ranking_pr(this.sellWash_arr)).arr_2017,
              label: labelOption,
              itemStyle: {
                normal: {
                  color: params => {
                    console.log(this);
                    // var colorList = ['#a3e1d4','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9'];
                    //  return colorList[params.dataIndex]
                    return getRanking(ranking_pr(this.sellWash_arr)).arr_2017[
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
              data: getRanking(ranking_pr(this.sellWash_arr)).arr_2018,
              label: labelOption,
              itemStyle: {
                normal: {
                  color: params => {
                    // var colorList = ['#6dbccf','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9'];
                    // return colorList[params.dataIndex]
                    return getRanking(ranking_pr(this.sellWash_arr)).arr_2018[
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
              data: getRanking(ranking_pr(this.sellWash_arr)).arr_2019,
              label: labelOption,
              itemStyle: {
                normal: {
                  color: params => {
                    // var colorList = ['#17b3a3','#808080','#808080','#808080','#808080','#808080','#808080','#808080','#808080','#808080'];
                    // return colorList[params.dataIndex]
                    return getRanking(ranking_pr(this.sellWash_arr)).arr_2019[
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
        }
        if (tab.$options.propsData.name === "phone") {
          this.xAxis = [
            {
              type: "category",
              // data: ['海信','三星','索尼','夏普','小米','TCL','海尔','创维'],
              data: getRanking(ranking_pr(this.sellPhone_arr)).arr_name,

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
              data: getRanking(ranking_pr(this.sellPhone_arr)).arr_2017,
              label: labelOption,
              itemStyle: {
                normal: {
                  color: params => {
                    console.log(this);
                    // var colorList = ['#a3e1d4','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9'];
                    //  return colorList[params.dataIndex]
                    return getRanking(ranking_pr(this.sellPhone_arr)).arr_2017[
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
              data: getRanking(ranking_pr(this.sellPhone_arr)).arr_2018,
              label: labelOption,
              itemStyle: {
                normal: {
                  color: params => {
                    // var colorList = ['#6dbccf','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9'];
                    // return colorList[params.dataIndex]
                    return getRanking(ranking_pr(this.sellPhone_arr)).arr_2018[
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
              data: getRanking(ranking_pr(this.sellPhone_arr)).arr_2019,
              label: labelOption,
              itemStyle: {
                normal: {
                  color: params => {
                    // var colorList = ['#17b3a3','#808080','#808080','#808080','#808080','#808080','#808080','#808080','#808080','#808080'];
                    // return colorList[params.dataIndex]
                    return getRanking(ranking_pr(this.sellPhone_arr)).arr_2019[
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
        }
      } else if (this.radio == 4) {
        if (tab.$options.propsData.name === "tv") {
          this.xAxis = [
            {
              type: "category",
              // data: ['海信','三星','索尼','夏普','小米','TCL','海尔','创维'],
              data: getRanking(ranking_pr(this.servicetv_arr)).arr_name,

              axisPointer: {
                type: "shadow"
              },
              name: "品牌NPS排位",
              nameLocation: "start",
              nameTextStyle: {
                fontSize: 15,
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
              data: getRanking(ranking_pr(this.servicetv_arr)).arr_2017,
              label: labelOption,
              itemStyle: {
                normal: {
                  color: params=> {
                    // var colorList = ['#a3e1d4','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9'];
                    //  return colorList[params.dataIndex]
                    return getRanking(ranking_pr(this.servicetv_arr)).arr_2017[
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
              data: getRanking(ranking_pr(this.servicetv_arr)).arr_2018,
              label: labelOption,
              itemStyle: {
                normal: {
                  color: params=> {
                    // var colorList = ['#6dbccf','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9'];
                    // return colorList[params.dataIndex]
                    return getRanking(ranking_pr(this.servicetv_arr)).arr_2018[
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
              data: getRanking(ranking_pr(this.servicetv_arr)).arr_2019,
              label: labelOption,
              itemStyle: {
                normal: {
                  color: params=> {
                    // var colorList = ['#17b3a3','#808080','#808080','#808080','#808080','#808080','#808080','#808080','#808080','#808080'];
                    // return colorList[params.dataIndex]
                    return getRanking(ranking_pr(this.servicetv_arr)).arr_2019[
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
          // console.log(getRanking(tv_arr).arr_2017);
        }
        if (tab.$options.propsData.name === "icebox") {
          this.xAxis = [
            {
              type: "category",
              // data: ['海信','三星','索尼','夏普','小米','TCL','海尔','创维'],
              data: getRanking(ranking_pr(this.serviceIce_arr)).arr_name,

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
              data: getRanking(ranking_pr(this.serviceIce_arr)).arr_2017,
              label: labelOption,
              itemStyle: {
                normal: {
                  color: params => {
                    console.log(this);
                    // var colorList = ['#a3e1d4','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9'];
                    //  return colorList[params.dataIndex]
                    return getRanking(ranking_pr(this.serviceIce_arr)).arr_2017[
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
              data: getRanking(ranking_pr(this.serviceIce_arr)).arr_2018,
              label: labelOption,
              itemStyle: {
                normal: {
                  color: params => {
                    // var colorList = ['#6dbccf','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9'];
                    // return colorList[params.dataIndex]
                    return getRanking(ranking_pr(this.serviceIce_arr)).arr_2018[
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
              data: getRanking(ranking_pr(this.serviceIce_arr)).arr_2019,
              label: labelOption,
              itemStyle: {
                normal: {
                  color: params => {
                    // var colorList = ['#17b3a3','#808080','#808080','#808080','#808080','#808080','#808080','#808080','#808080','#808080'];
                    // return colorList[params.dataIndex]
                    return getRanking(ranking_pr(this.serviceIce_arr)).arr_2019[
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
        }
        if (tab.$options.propsData.name === "airConditioner") {
          this.xAxis = [
            {
              type: "category",
              // data: ['海信','三星','索尼','夏普','小米','TCL','海尔','创维'],
              data: getRanking(ranking_pr(this.serviceAir_arr)).arr_name,

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
              data: getRanking(ranking_pr(this.serviceAir_arr)).arr_2017,
              label: labelOption,
              itemStyle: {
                normal: {
                  color: params => {
                    console.log(this);
                    // var colorList = ['#a3e1d4','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9'];
                    //  return colorList[params.dataIndex]
                    return getRanking(ranking_pr(this.serviceAir_arr)).arr_2017[
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
              data: getRanking(ranking_pr(this.serviceAir_arr)).arr_2018,
              label: labelOption,
              itemStyle: {
                normal: {
                  color: params => {
                    // var colorList = ['#6dbccf','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9'];
                    // return colorList[params.dataIndex]
                    return getRanking(ranking_pr(this.serviceAir_arr)).arr_2018[
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
              data: getRanking(ranking_pr(this.serviceAir_arr)).arr_2019,
              label: labelOption,
              itemStyle: {
                normal: {
                  color: params => {
                    // var colorList = ['#17b3a3','#808080','#808080','#808080','#808080','#808080','#808080','#808080','#808080','#808080'];
                    // return colorList[params.dataIndex]
                    return getRanking(ranking_pr(this.serviceAir_arr)).arr_2019[
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
        }
        if (tab.$options.propsData.name === "washer") {
          this.xAxis = [
            {
              type: "category",
              // data: ['海信','三星','索尼','夏普','小米','TCL','海尔','创维'],
              data: getRanking(ranking_pr(this.serviceWash_arr)).arr_name,

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
              data: getRanking(ranking_pr(this.serviceWash_arr)).arr_2017,
              label: labelOption,
              itemStyle: {
                normal: {
                  color: params => {
                    console.log(this);
                    // var colorList = ['#a3e1d4','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9'];
                    //  return colorList[params.dataIndex]
                    return getRanking(ranking_pr(this.serviceWash_arr)).arr_2017[
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
              data: getRanking(ranking_pr(this.serviceWash_arr)).arr_2018,
              label: labelOption,
              itemStyle: {
                normal: {
                  color: params => {
                    // var colorList = ['#6dbccf','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9'];
                    // return colorList[params.dataIndex]
                    return getRanking(ranking_pr(this.serviceWash_arr)).arr_2018[
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
              data: getRanking(ranking_pr(this.serviceWash_arr)).arr_2019,
              label: labelOption,
              itemStyle: {
                normal: {
                  color: params => {
                    // var colorList = ['#17b3a3','#808080','#808080','#808080','#808080','#808080','#808080','#808080','#808080','#808080'];
                    // return colorList[params.dataIndex]
                    return getRanking(ranking_pr(this.serviceWash_arr)).arr_2019[
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
        }
        if (tab.$options.propsData.name === "phone") {
          this.xAxis = [
            {
              type: "category",
              // data: ['海信','三星','索尼','夏普','小米','TCL','海尔','创维'],
              data: getRanking(ranking_pr(this.servicePhone_arr)).arr_name,

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
              data: getRanking(ranking_pr(this.servicePhone_arr)).arr_2017,
              label: labelOption,
              itemStyle: {
                normal: {
                  color: params => {
                    console.log(this);
                    // var colorList = ['#a3e1d4','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9'];
                    //  return colorList[params.dataIndex]
                    return getRanking(ranking_pr(this.servicePhone_arr)).arr_2017[
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
              data: getRanking(ranking_pr(this.servicePhone_arr)).arr_2018,
              label: labelOption,
              itemStyle: {
                normal: {
                  color: params => {
                    // var colorList = ['#6dbccf','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9'];
                    // return colorList[params.dataIndex]
                    return getRanking(ranking_pr(this.servicePhone_arr)).arr_2018[
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
              data: getRanking(ranking_pr(this.servicePhone_arr)).arr_2019,
              label: labelOption,
              itemStyle: {
                normal: {
                  color: params => {
                    // var colorList = ['#17b3a3','#808080','#808080','#808080','#808080','#808080','#808080','#808080','#808080','#808080'];
                    // return colorList[params.dataIndex]
                    return getRanking(ranking_pr(this.servicePhone_arr)).arr_2019[
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
        }
      }
      this.initChartTv();
      // console.log(tab, event);
    },
    //三段柱状图
    initThreeChartBar() {
      var option = { ...this.threeOptions };
      this.charThree = echarts.init(
        document.getElementById("three_chartBarBox")
      );
      //使用配置项的数据
      this.charThree.setOption(option, true);
      window.addEventListener("resize", () => {
        this.chartThree.resize();
        //   console.log(111)
      });
    },
    initThree1ChartBar() {
      var option = { ...this.three1Options };
      this.charThree1 = echarts.init(
        document.getElementById("three1_chartBarBox")
      );
      //使用配置项的数据
      this.charThree1.setOption(option, true);
      window.addEventListener("resize", () => {
        this.chartThree1.resize();
        //   console.log(111)
      });
    },
    initThree2ChartBar() {
      var option = { ...this.three2Options };
      this.charThree2 = echarts.init(
        document.getElementById("three2_chartBarBox")
      );
      //使用配置项的数据
      this.charThree2.setOption(option, true);
      window.addEventListener("resize", () => {
        this.chartThree.resize();
        //   console.log(111)
      });
    },
    initThree3ChartBar() {
      var option = { ...this.three3Options };
      this.charThree3 = echarts.init(
        document.getElementById("three3_chartBarBox")
      );
      //使用配置项的数据
      this.charThree.setOption(option, true);
      window.addEventListener("resize", () => {
        this.chartThree3.resize();
        //   console.log(111)
      });
    },

    // 整体NPS柱状图
    // initChartBar() {
    //   var option = { ...this.chartOptions };
    //   this.chartBar = echarts.init(document.getElementById("J_chartBarBox"));
    //   //使用配置项数据
    //   this.chartBar.setOption(option, true);
    //   window.addEventListener("resize", () => {
    //     this.chartBar.resize();
    //     //   console.log(111)
    //   });
    // },
    //产品NPS柱状图
    // initProductChartBar(){
    //   var option = { ...this.product_chartOptions };
    //   this.ProductChartBar = echarts.init(document.getElementById("product_chartBarBox"));
    //   //使用配置项数据
    //   this.ProductChartBar.setOption(option, true);
    //   window.addEventListener("resize", () => {
    //     this.chartBar.resize();
    //     //   console.log(111)
    //   });
    // },
    //销售NPS柱状图
    // initSalesChartBar(){
    //   var option = { ...this.sales_chartOptions };
    //   this.salesChartBar = echarts.init(document.getElementById("sales_chartBarBox"));
    //   //使用配置项数据
    //   this.salesChartBar.setOption(option, true);
    //   window.addEventListener("resize", () => {
    //     this.chartBar.resize();
    //     //   console.log(111)
    //   });
    // },
    //服务NPS柱状图
    // initServiceChartBar(){
    //   var option = { ...this.service_chartOptions };
    //   this.serviceChartBar = echarts.init(document.getElementById("service_chartBarBox"));
    //   //使用配置项数据
    //   this.serviceChartBar.setOption(option, true);
    //   window.addEventListener("resize", () => {
    //     this.chartBar.resize();
    //     //   console.log(111)
    //   });
    // },

    initChartTv() {
      let option = { ...this.chartOptions };
      option.xAxis = this.xAxis;
      option.series = this.series;

      option.legend = this.legend;
      option.yAxis = this.yAxis;
      this.charttv = echarts.init(document.getElementById("icebox"));
      this.charttv.setOption(option, true);
      window.addEventListener("resize", () => {
        this.charttv.resize();
        // console.log("1111");
      });
    },
    showChartBar(val) {
      console.log(this.radio, val, "环节选项");
      // this.radio = val
      if (val == "1") {
        this.activeName="tv"
        this.title="整体NPS-品牌表现"
        this.initThreeChartBar();
        this.tableData = [
          {
            ranking: "19年-18年NPS差值",
            tv: "-0.5",
            ice: "0.4",
            air: "-1.1",
            wash: "2.4",
            phone: "12.3"
          },
          {
            ranking: "18年-17年NPS差值",
            tv: "2.2",
            ice: "5.6",
            air: "6.3",
            wash: "5.3",
            phone: "3.0"
          }
        ];
        this.xAxis = [
            {
              type: "category",
              // data: ['海信','三星','索尼','夏普','小米','TCL','海尔','创维'],
              data: getRanking(ranking_pr(this.tv_arr)).arr_name,

              axisPointer: {
                type: "shadow"
              },
              name: "品牌NPS排位",
              nameLocation: "start",
              nameTextStyle: {
                fontSize: 15,
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
              data: getRanking(ranking_pr(this.tv_arr)).arr_2017,
              label: labelOption,
              itemStyle: {
                normal: {
                  color: params=> {
                    // var colorList = ['#a3e1d4','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9'];
                    //  return colorList[params.dataIndex]
                    return getRanking(ranking_pr(this.tv_arr)).arr_2017[
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
              data: getRanking(ranking_pr(this.tv_arr)).arr_2018,
              label: labelOption,
              itemStyle: {
                normal: {
                  color: params=> {
                    // var colorList = ['#6dbccf','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9'];
                    // return colorList[params.dataIndex]
                    return getRanking(ranking_pr(this.tv_arr)).arr_2018[
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
              data: getRanking(ranking_pr(this.tv_arr)).arr_2019,
              label: labelOption,
              itemStyle: {
                normal: {
                  color: params=> {
                    // var colorList = ['#17b3a3','#808080','#808080','#808080','#808080','#808080','#808080','#808080','#808080','#808080'];
                    // return colorList[params.dataIndex]
                    return getRanking(ranking_pr(this.tv_arr)).arr_2019[
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


      }
      if (val == "2") {
        this.activeName="tv"
        this.title="产品NPS-品牌表现"
        this.initThree1ChartBar();
        this.tableData = [
          {
            ranking: "19年-18年NPS差值",
            tv: "0.7",
            ice: "1.2",
            air: "-0.6",
            wash: "1.7",
            phone: "9.5"
          },
          {
            ranking: "18年-17年NPS差值",
            tv: "0.4",
            ice: "6.0",
            air: "4.6",
            wash: "3.7",
            phone: "7.4"
          }
        ];
        this.xAxis = [
            {
              type: "category",
              // data: ['海信','三星','索尼','夏普','小米','TCL','海尔','创维'],
              data: getRanking(ranking_pr(this.producttv_arr)).arr_name,

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
              data: getRanking(ranking_pr(this.producttv_arr)).arr_2017,
              label: labelOption,
              itemStyle: {
                normal: {
                  color: params=> {
                    // var colorList = ['#a3e1d4','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9'];
                    //  return colorList[params.dataIndex]
                    return getRanking(ranking_pr(this.producttv_arr)).arr_2017[
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
              data: getRanking(ranking_pr(this.producttv_arr)).arr_2018,
              label: labelOption,
              itemStyle: {
                normal: {
                  color: params=> {
                    // var colorList = ['#6dbccf','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9'];
                    // return colorList[params.dataIndex]
                    return getRanking(ranking_pr(this.producttv_arr)).arr_2018[
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
              data: getRanking(ranking_pr(this.producttv_arr)).arr_2019,
              label: labelOption,
              itemStyle: {
                normal: {
                  color: params=> {
                    // var colorList = ['#17b3a3','#808080','#808080','#808080','#808080','#808080','#808080','#808080','#808080','#808080'];
                    // return colorList[params.dataIndex]
                    return getRanking(ranking_pr(this.producttv_arr)).arr_2019[
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
          
          // 
      }
      if (val == "3") {
        this.activeName="tv"
        this.title="销售NPS-品牌表现"
        this.initThree2ChartBar();
        this.tableData = [
          {
            ranking: "19年-18年NPS差值",
            tv: "-1.5",
            ice: "0.9",
            air: "-1.7",
            wash: "1.9",
            phone: "4.8"
          },
          {
            ranking: "18年-17年NPS差值",
            tv: "4.6",
            ice: "5.8",
            air: "7.0",
            wash: "6.0",
            phone: "7.0"
          }
        ];
        this.xAxis = [
            {
              type: "category",
              // data: ['海信','三星','索尼','夏普','小米','TCL','海尔','创维'],
              data: getRanking(ranking_pr(this.selltv_arr)).arr_name,

              axisPointer: {
                type: "shadow"
              },
              name: "品牌NPS排位",
              nameLocation: "start",
              nameTextStyle: {
                fontSize: 15,
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
              data: getRanking(ranking_pr(this.selltv_arr)).arr_2017,
              label: labelOption,
              itemStyle: {
                normal: {
                  color: params=> {
                    // var colorList = ['#a3e1d4','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9'];
                    //  return colorList[params.dataIndex]
                    return getRanking(ranking_pr(this.selltv_arr)).arr_2017[
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
              data: getRanking(ranking_pr(this.selltv_arr)).arr_2018,
              label: labelOption,
              itemStyle: {
                normal: {
                  color: params=> {
                    // var colorList = ['#6dbccf','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9'];
                    // return colorList[params.dataIndex]
                    return getRanking(ranking_pr(this.selltv_arr)).arr_2018[
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
              data: getRanking(ranking_pr(this.selltv_arr)).arr_2019,
              label: labelOption,
              itemStyle: {
                normal: {
                  color: params=> {
                    // var colorList = ['#17b3a3','#808080','#808080','#808080','#808080','#808080','#808080','#808080','#808080','#808080'];
                    // return colorList[params.dataIndex]
                    return getRanking(ranking_pr(this.selltv_arr)).arr_2019[
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
      }
      if (val == "4") {
        this.activeName="tv"
        this.title="服务NPS-品牌表现"
        this.initThree3ChartBar();
        this.tableData = [
          {
            ranking: "19年-18年NPS差值",
            tv: "0.0",
            ice: "2.2",
            air: "0.7",
            wash: "2.2",
            phone: "3.0"
          },
          {
            ranking: "18年-17年NPS差值",
            tv: "3.8",
            ice: "1.3",
            air: "6.9",
            wash: "9.5",
            phone: "5.0"
          }
        ];
        this.xAxis = [
            {
              type: "category",
              // data: ['海信','三星','索尼','夏普','小米','TCL','海尔','创维'],
              data: getRanking(ranking_pr(this.servicetv_arr)).arr_name,

              axisPointer: {
                type: "shadow"
              },
              name: "品牌NPS排位",
              nameLocation: "start",
              nameTextStyle: {
                fontSize: 15,
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
              data: getRanking(ranking_pr(this.servicetv_arr)).arr_2017,
              label: labelOption,
              itemStyle: {
                normal: {
                  color: params=> {
                    // var colorList = ['#a3e1d4','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9'];
                    //  return colorList[params.dataIndex]
                    return getRanking(ranking_pr(this.servicetv_arr)).arr_2017[
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
              data: getRanking(ranking_pr(this.servicetv_arr)).arr_2018,
              label: labelOption,
              itemStyle: {
                normal: {
                  color: params=> {
                    // var colorList = ['#6dbccf','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9'];
                    // return colorList[params.dataIndex]
                    return getRanking(ranking_pr(this.servicetv_arr)).arr_2018[
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
              data: getRanking(ranking_pr(this.servicetv_arr)).arr_2019,
              label: labelOption,
              itemStyle: {
                normal: {
                  color: params=> {
                    // var colorList = ['#17b3a3','#808080','#808080','#808080','#808080','#808080','#808080','#808080','#808080','#808080'];
                    // return colorList[params.dataIndex]
                    return getRanking(ranking_pr(this.servicetv_arr)).arr_2019[
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
      }
      this.initChartTv();
    }
  }
};
</script>

<style lang="scss">
.mod-demo-echarts {
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
  .chart-box {
    min-height: 400px;
  }
  .chart-Three {
    min-height: 400px;
  }
  .top {
    position: relative;
    left: 13.8%;
    font-size: 24px;
    top: -30px;
    color: #f40;
    display: block;
    width: 30px;
    height: 30px;
    border: 1px solid #f40;
    border-radius: 4px;
    text-align: center;
    line-height: 30px;
  }
}
</style>
