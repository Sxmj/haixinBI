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
            <!-- el-checkbox-group可以将多个el-checkbox视为一组内容，只需要在 Group 中使用v-model绑定Array类型的变量即可 -->
            <!-- <el-checkbox-group v-model="checkList" style="display:inline-block">
              <el-checkbox label="2016"></el-checkbox>
              <el-checkbox label="2017"></el-checkbox>
              <el-checkbox label="2018"></el-checkbox>
            </el-checkbox-group> -->
          <!-- </p>  -->
        </div>
      </el-col>
    </el-row>
    <el-alert title="整体行业NPS分析" type="warning" :closable="false">
      <div slot-scope="description">
        <p class="el-alert__description"></p>
      </div>
    </el-alert>

    <el-row :gutter="20">
      <el-col :span="24">
        <el-card>
          <!-- echarts内容 -->
          <!-- 整体的NPS -->
          <div id="J_chartBarBox" class="chart-box" v-if="radio=='1'"></div>
          <!-- 产品NPS -->
          <div id="product_chartBarBox" class="chart-box" v-if="radio=='2'"></div>
          <!-- 销售NPS -->
          <div id="sales_chartBarBox" class="chart-box" v-if="radio=='3'"></div>
          <!-- 服务NPS -->
          <div id="service_chartBarBox" class="chart-box" v-if="radio=='4'"></div>
          <!-- <div id="three_chartBarBox" class="chart-Three"></div> -->
          <!-- 实现折叠效果 -->
          <el-collapse-transition>
            <div style="padding-left:80px">
              <!-- https://element.eleme.cn/#/zh-CN/component/table#table-column-scoped-slot -->
              <!-- 根据elementUI中的内容tableData一定在data配置项中定义过；且tableData中为最终放置的数据 -->
              <!-- <el-table :data="tableData" style="width: 100%"> -->
                <!-- <el-table-column>标签体中为放置好的列数据，共6列 -->
                <!-- <el-table-column prop="ranking" label="年份同比差值" width="150"></el-table-column>
                <el-table-column prop="name" label="电视" width="140"></el-table-column>
                <el-table-column prop="value" label="冰箱" width="140"></el-table-column>
                <el-table-column prop="value2" label="空调" width="140"></el-table-column>
                <el-table-column prop="value3" label="洗衣机" width="140"></el-table-column>
                <el-table-column prop="value4" label="手机" width="140"></el-table-column>
              </el-table> -->
            </div>
          </el-collapse-transition>
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
        <div id="three_chartBarBox" class="chart-Three"></div>

        <!-- <span class="top">品牌NPS排位</span> -->
      </el-col>
    </el-row>
  </div>
</template>

<script>
var tv_arr = [
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
];
// 根据2018年的值进行由大到小排序
function ranking_pr(arr) {
  for (var i = 0; i < arr.length; i++) {
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[i].value_2018 < arr[j].value_2018) {
        var linshi = arr[i];
        arr[i] = arr[j];
        arr[j] = linshi;
      }
    }
  }
  return arr;
}
// 整理为echarts格式数据
function getRanking(arr) {
  var arr_2016 = [], //[{name:海信，value：66.6，color:xx}]
    arr_2017 = [],
    arr_2018 = [],
    arr_name = [];
  // [{}];
  for (var i = 0; i < arr.length; i++) {
    //遍历获取到每一个对象，对对象中的内容进行判断
    if (arr[i].name == "海信") {//是海信的话，对分别加入每隔年份的数组，并表示去不同的颜色
      arr_2016.push({
        name: arr[i].name,
        value: arr[i].value_2016,
        color: "#a3e1d4"
      });
      arr_2017.push({
        name: arr[i].name,
        value: arr[i].value_2017,
        color: "#6dbccf"
      });
      arr_2018.push({
        name: arr[i].name,
        value: arr[i].value_2018,
        color: "#17b3a3"
      });
      arr_name.push({
        //存放名字的数组，下面的排序由这里产生
        value: arr[i].name + "\n" + (i + 1),
        textStyle: {
          lineHeight: 15,
          color: "#17b3a3",
          fontSize: 15
        }
      });
    } else {
      arr_2016.push({
        name: arr[i].name,
        value: arr[i].value_2016,
        color: "#D3D3D3"
      });
      arr_2017.push({
        name: arr[i].name,
        value: arr[i].value_2017,
        color: "#A9A9A9"
      });
      arr_2018.push({
        name: arr[i].name,
        value: arr[i].value_2018,
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
  return { arr_2016, arr_2017, arr_2018, arr_name };
}

ranking_pr(tv_arr);

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
      activeName:"washer",
      chartBar: null,
      ProductChartBar:null,
      salesChartBar:null,
      serviceChartBar:null,


      charttv: null,
      charThree: null,
      // 这里为tableData中的数据
      tableData: [
        {
          ranking: "2018NPS差值",
          name: "3.9",
          value: "4.5",
          value2: "3.6",
          value3: "1.5",
          value4: "1.9"
        },
        {
          ranking: "2017NPS差值",
          name: "-2.2",
          value: "0.8",
          value2: "4.6",
          value3: "4.1",
          value4: "9.6"
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
      //     value: "4",
      //     label: "产品价格档次NPS同比"
      //   }
      // ],
      value: "1",
      activeName: "tv",
      //三段式柱状图的配置
      threeOptions: {
        color: ["#17b3a3","#6dbccf","#a3e1d4" ],
        //提示框组件(有两个属性如下) https://www.echartsjs.com/zh/option.html#tooltip
        tooltip: {
          //指定为axis(坐标轴触发)
          trigger: "axis",
          //是配置坐标轴指示器的快捷方式
          axisPointer: {
            type: "line"
          }
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
        legend: {
          //图例的数据数组，数组项通常是一个字符串，每一项代表一个系列的name
          //可删除处理，因为在系列中已经指定，没有指定data时，他会去series中读
          // 每一个series中的对象的name
          data: ["索尼", "三星", "海信", "夏普", "小米", "创维", "TCL", "海尔"]
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        //x轴上的配置
        xAxis: [
          {
            type: "category", //category离散的类型
            data: [
              "索尼",
              "三星",
              "海信",
              "夏普",
              "小米",
              "创维",
              "TCL",
              "海尔",
              "乐视"
            ]
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
            max: 150
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
            name: "2016推荐者",
            type: "bar",
            // 2016年的数据
            stack:'2016推荐程度',
            itemStyle: {
                 normal: {
                     label: {
                         position:'top',
                         show: true,
                         distance:80,
                         textStyle: {
                             color: '#FF3030'
                         }
                     }
                 }
             },
            data: [80.7,73.2,68.1,64.0,'-',60.8,65.8,61.8,64.2]//所有2016推荐者
          },
          {
            name: "2016消极者",
            type: "bar",
            // 2016年的数据
            stack:'2016推荐程度',
            data: [13.3,18.1,22.3,24.7,'-',23.5,18.8,20.4,19.9]//所有2016推荐者
          },
          {
            name: "2016贬低者",
            type: "bar",
            // 2016年的数据
            stack:'2016推荐程度',
            data: [6.0,8.7,9.6,11.3,'-',15.7,15.4,17.8,15.9]//所有2016推荐者
          },

          {
            name: "2017推荐者",
            type: "bar",
            // 2016年的数据
            stack:'2017推荐程度',
            data: [76.6,73.6,71.9,69.3,'-',70.1,66.5,66.0]//所有2016推荐者
          },
          {
            name: "2017消极者",
            type: "bar",
            // 2016年的数据
            stack:'2017推荐程度',
            data: [15.4,17.6,17.6,17.4,'-',13.9,16.9,20.0]//所有2016推荐者
          },
          {
            name: "2017贬低者",
            type: "bar",
            // 2016年的数据
            stack:'2017推荐程度',
            data: [8.0,8.9,10.5,13.4,'-',15.9,16.6,14.0]//所有2016推荐者
          },
          {
            name: "2018推荐者",
            type: "bar",
            // 2016年的数据
            stack:'2018推荐程度',
            data: [77.2,74.1,72.4,70.5,65.7,66.0,68.3,64.7]//所有2016推荐者
          },
          {
            name: "2018消极者",
            type: "bar",
            // 2016年的数据
            stack:'2018推荐程度',
            data: [16.2,19.3,18.6,18.5,25.3,23.4,19.3,23.7]//所有2016推荐者
          },
          {
            name: "2018贬低者",
            type: "bar",
            // 2016年的数据
            stack:'2018推荐程度',
            data: [6.6,6.6,9.0,10.9,9.0,10.6,12.3,11.7]//所有2016推荐者
          },
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
      //产品NPS柱状图的NPS参数
      product_chartOptions:{
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
      //销售NPS柱状图的NPS参数
      sales_chartOptions:{
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
      //服务的NPS柱状图的NPS参数
      service_chartOptions:{
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
          //获取品牌的名字
          data: getRanking(tv_arr).arr_name,
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
          name: "2016",
          type: "bar",
          // data:[ 58.8, 65.6, 66.6, 53.7, "","51.0",55.0,"51.0"],
          data: getRanking(tv_arr).arr_2016,

          label: labelOption,
          itemStyle: {
            normal: {
              color: function(params) {
                // var colorList = ['#a3e1d4','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9'];
                //  return colorList[params.dataIndex]
                return getRanking(tv_arr).arr_2016[params.dataIndex].color;
              }
            }
          }
        },
        {
          name: "2017",
          type: "bar",
          // data:[ 58.3, 60.6, 67.2, 52.5, "",50.3,48.4,49.3],
          data: getRanking(tv_arr).arr_2017,
          label: labelOption,
          itemStyle: {
            normal: {
              color: function(params) {
                // var colorList = ['#6dbccf','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9'];
                // return colorList[params.dataIndex]
                return getRanking(tv_arr).arr_2017[params.dataIndex].color;
              }
            }
          }
        },
        {
          name: "2018",
          type: "bar",
          // data:[ 62.4, 63.7, 66.0, 58.1, 56.5,55.9,54.1,56.3],
          data: getRanking(tv_arr).arr_2018,
          label: labelOption,
          itemStyle: {
            normal: {
              color: function(params) {
                // var colorList = ['#17b3a3','#808080','#808080','#808080','#808080','#808080','#808080','#808080','#808080','#808080'];
                // return colorList[params.dataIndex]
                return getRanking(tv_arr).arr_2018[params.dataIndex].color;
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
        data: ["2016", "2017", "2018", "2019总体NPS"]
      },
      yAxis: [
        {
          type: "value",
          name: "NPS值",
          min: 40,
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
    this.initChartBar();
    console.log(this)
    this.initChartTv();

    this.initThreeChartBar();
  },
  activated() {
    // 由于给echart添加了resize事件, 在组件激活时需要重新resize绘画一次, 否则出现空白bug
    if (this.chartBar) {
      this.chartBar.resize();
    }
    if (this.charttv) {
      this.charttv.resize();
    }
    if (this.charThree) {
      this.charThree.resize();
    }
  },
  methods: {
    handleClick(tab, event) {
      if (tab.$options.propsData.name === "tv") {
        this.xAxis = [
          {
            type: "category",
            // data: ['海信','三星','索尼','夏普','小米','TCL','海尔','创维'],
            data: getRanking(tv_arr).arr_name,

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
              padding: [0, 10, 0, 0]
            },
            axisTick: {
              show: false
            }
          }
        ];
        this.series = [
          {
            name: "2016",
            type: "bar",
            // data:[ 58.8, 65.6, 66.6, 53.7, "","51.0",55.0,"51.0"],
            data: getRanking(tv_arr).arr_2016,

            label: labelOption,
            itemStyle: {
              normal: {
                color: function(params) {
                  // var colorList = ['#a3e1d4','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9'];
                  //  return colorList[params.dataIndex]
                  return getRanking(tv_arr).arr_2016[params.dataIndex].color;
                }
              }
            }
          },
          {
            name: "2017",
            type: "bar",
            // data:[ 58.3, 60.6, 67.2, 52.5, "",50.3,48.4,49.3],
            data: getRanking(tv_arr).arr_2017,
            label: labelOption,
            itemStyle: {
              normal: {
                color: function(params) {
                  // var colorList = ['#6dbccf','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9'];
                  // return colorList[params.dataIndex]
                  return getRanking(tv_arr).arr_2017[params.dataIndex].color;
                }
              }
            }
          },
          {
            name: "2018",
            type: "bar",
            // data:[ 62.4, 63.7, 66.0, 58.1, 56.5,55.9,54.1,56.3],
            data: getRanking(tv_arr).arr_2018,
            label: labelOption,
            itemStyle: {
              normal: {
                color: function(params) {
                  // var colorList = ['#17b3a3','#808080','#808080','#808080','#808080','#808080','#808080','#808080','#808080','#808080'];
                  // return colorList[params.dataIndex]
                  return getRanking(tv_arr).arr_2018[params.dataIndex].color;
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
        console.log(getRanking(tv_arr).arr_2016);
      }
      if (tab.$options.propsData.name === "icebox") {
        this.xAxis = [
          {
            type: "category",
            data: ["海信", "海尔", "三星", "西门子", "美的", "容声"],
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
              padding: [0, 10, 0, 0]
            },
            axisTick: {
              show: false
            }
          }
        ];
        this.series = [
          {
            name: "2016",
            type: "bar",
            data: [76, 45, 62, 42, 60, 48],
            label: labelOption,
            itemStyle: {
              normal: {
                color: function(params) {
                  var colorList = [
                    "#a3e1d4",
                    "#A9A9A9",
                    "#A9A9A9",
                    "#A9A9A9",
                    "#A9A9A9",
                    "#A9A9A9",
                    "#A9A9A9",
                    "#A9A9A9",
                    "#A9A9A9",
                    "#A9A9A9"
                  ];
                  return colorList[params.dataIndex];
                }
              }
            }
          },
          {
            name: "2017",
            type: "bar",
            data: [86, 75, 82, 48, 48, 48],
            label: labelOption,
            itemStyle: {
              normal: {
                color: function(params) {
                  var colorList = [
                    "#6dbccf",
                    "#A9A9A9",
                    "#A9A9A9",
                    "#A9A9A9",
                    "#A9A9A9",
                    "#A9A9A9",
                    "#A9A9A9",
                    "#A9A9A9",
                    "#A9A9A9",
                    "#A9A9A9"
                  ];
                  return colorList[params.dataIndex];
                }
              }
            }
          },
          {
            name: "2018",
            type: "bar",
            data: [96, 45, 92, 58, 64, 48],
            label: labelOption,
            itemStyle: {
              normal: {
                color: function(params) {
                  var colorList = [
                    "#17b3a3",
                    "#808080",
                    "#808080",
                    "#808080",
                    "#808080",
                    "#808080",
                    "#808080",
                    "#808080",
                    "#808080",
                    "#808080"
                  ];
                  return colorList[params.dataIndex];
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
            data: ["海信", "海尔", "美的", "格力", "奥克斯", "科龙"],
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
              padding: [0, 10, 0, 0]
            },
            axisTick: {
              show: false
            }
          }
        ];
        this.series = [
          {
            name: "2016",
            type: "bar",
            data: [62, 42, 60, 48, 54, 87],
            label: labelOption,
            itemStyle: {
              normal: {
                color: function(params) {
                  var colorList = [
                    "#a3e1d4",
                    "#A9A9A9",
                    "#A9A9A9",
                    "#A9A9A9",
                    "#A9A9A9",
                    "#A9A9A9",
                    "#A9A9A9",
                    "#A9A9A9",
                    "#A9A9A9",
                    "#A9A9A9"
                  ];
                  return colorList[params.dataIndex];
                }
              }
            }
          },
          {
            name: "2017",
            type: "bar",
            data: [82, 48, 44, 48, 54, 87],
            label: labelOption,
            itemStyle: {
              normal: {
                color: function(params) {
                  var colorList = [
                    "#6dbccf",
                    "#A9A9A9",
                    "#A9A9A9",
                    "#A9A9A9",
                    "#A9A9A9",
                    "#A9A9A9",
                    "#A9A9A9",
                    "#A9A9A9",
                    "#A9A9A9",
                    "#A9A9A9"
                  ];
                  return colorList[params.dataIndex];
                }
              }
            }
          },
          {
            name: "2018",
            type: "bar",
            data: [92, 58, 64, 48, 90, 47],
            label: labelOption,
            itemStyle: {
              normal: {
                color: function(params) {
                  var colorList = [
                    "#17b3a3",
                    "#808080",
                    "#808080",
                    "#808080",
                    "#808080",
                    "#808080",
                    "#808080",
                    "#808080",
                    "#808080",
                    "#808080"
                  ];
                  return colorList[params.dataIndex];
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
            data: ["海信", "西门子", "海尔", "LG", "小天鹅", "松下", "三星"],
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
              padding: [0, 10, 0, 0]
            },
            axisTick: {
              show: false
            }
          }
        ];
        this.series = [
          {
            name: "2016",
            type: "bar",
            data: [49.4, 64.1, 58.5, 55.7, 54.5, 56.7, 53.3],
            label: labelOption,
            itemStyle: {
              normal: {
                color: function(params) {
                  var colorList = [
                    "#a3e1d4",
                    "#A9A9A9",
                    "#A9A9A9",
                    "#A9A9A9",
                    "#A9A9A9",
                    "#A9A9A9",
                    "#A9A9A9",
                    "#A9A9A9",
                    "#A9A9A9",
                    "#A9A9A9"
                  ];
                  return colorList[params.dataIndex];
                }
              }
            }
          },
          {
            name: "2017",
            type: "bar",
            data: [52.8, 67.0, 63.3, 61.2, 58.6, 60.4, 58.1],
            label: labelOption,
            itemStyle: {
              normal: {
                color: function(params) {
                  var colorList = [
                    "#6dbccf",
                    "#A9A9A9",
                    "#A9A9A9",
                    "#A9A9A9",
                    "#A9A9A9",
                    "#A9A9A9",
                    "#A9A9A9",
                    "#A9A9A9",
                    "#A9A9A9",
                    "#A9A9A9"
                  ];
                  return colorList[params.dataIndex];
                }
              }
            }
          },
          {
            name: "2018",
            type: "bar",
            data: [56.1, 67.1, 64.3, 61.8, 61.4, 61.0, 59.8],
            label: labelOption,
            itemStyle: {
              normal: {
                color: function(params) {
                  var colorList = [
                    "#17b3a3",
                    "#808080",
                    "#808080",
                    "#808080",
                    "#808080",
                    "#808080",
                    "#808080",
                    "#808080",
                    "#808080",
                    "#808080"
                  ];
                  return colorList[params.dataIndex];
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
            data: [
              "海信",
              "华为",
              "OPPO",
              "VIVO",
              "小米",
              "三星",
              "魅族",
              "苹果"
            ],
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
              padding: [0, 10, 0, 0]
            },
            axisTick: {
              show: false
            }
          }
        ];
        this.series = [
          {
            name: "2016",
            type: "bar",
            data: [62, 42, 60, 48, 54, 87, 54, 87],
            label: labelOption,
            itemStyle: {
              normal: {
                color: function(params) {
                  var colorList = [
                    "#a3e1d4",
                    "#A9A9A9",
                    "#A9A9A9",
                    "#A9A9A9",
                    "#A9A9A9",
                    "#A9A9A9",
                    "#A9A9A9",
                    "#A9A9A9",
                    "#A9A9A9",
                    "#A9A9A9"
                  ];
                  return colorList[params.dataIndex];
                }
              }
            }
          },
          {
            name: "2017",
            type: "bar",
            data: [82, 48, 48, 48, 54, 87, 54, 87],
            label: labelOption,
            itemStyle: {
              normal: {
                color: function(params) {
                  var colorList = [
                    "#6dbccf",
                    "#A9A9A9",
                    "#A9A9A9",
                    "#A9A9A9",
                    "#A9A9A9",
                    "#A9A9A9",
                    "#A9A9A9",
                    "#A9A9A9",
                    "#A9A9A9",
                    "#A9A9A9"
                  ];
                  return colorList[params.dataIndex];
                }
              }
            }
          },
          {
            name: "2018",
            type: "bar",
            data: [92, 58, 64, 48, 90, 47, 54, 87],
            label: labelOption,
            itemStyle: {
              normal: {
                color: function(params) {
                  var colorList = [
                    "#17b3a3",
                    "#808080",
                    "#808080",
                    "#808080",
                    "#808080",
                    "#808080",
                    "#808080",
                    "#808080",
                    "#808080",
                    "#808080"
                  ];
                  return colorList[params.dataIndex];
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
      console.log(tab, event);
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
    // 整体NPS柱状图
    initChartBar() {
      var option = { ...this.chartOptions };
      this.chartBar = echarts.init(document.getElementById("J_chartBarBox"));
      //使用配置项数据
      this.chartBar.setOption(option, true);
      window.addEventListener("resize", () => {
        this.chartBar.resize();
        //   console.log(111)
      });
    },
    //产品NPS柱状图
    initProductChartBar(){
      var option = { ...this.product_chartOptions };
      this.ProductChartBar = echarts.init(document.getElementById("product_chartBarBox"));
      //使用配置项数据
      this.ProductChartBar.setOption(option, true);
      window.addEventListener("resize", () => {
        this.chartBar.resize();
        //   console.log(111)
      });
    },
    //销售NPS柱状图
    initSalesChartBar(){
      var option = { ...this.sales_chartOptions };
      this.salesChartBar = echarts.init(document.getElementById("sales_chartBarBox"));
      //使用配置项数据
      this.salesChartBar.setOption(option, true);
      window.addEventListener("resize", () => {
        this.chartBar.resize();
        //   console.log(111)
      });
    },
    //服务NPS柱状图
    initServiceChartBar(){
      var option = { ...this.service_chartOptions };
      this.serviceChartBar = echarts.init(document.getElementById("service_chartBarBox"));
      //使用配置项数据
      this.serviceChartBar.setOption(option, true);
      window.addEventListener("resize", () => {
        this.chartBar.resize();
        //   console.log(111)
      });
    },





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
    showChartBar(val){
      // console.log(this)
      if(val=='1'){
        this.initChartBar();
      }
      if(val=="2"){
        this.initProductChartBar();
      }
      if(val=="3"){
        this.initSalesChartBar();
      }
      if(val=="4"){
        this.initServiceChartBar();
      }
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
