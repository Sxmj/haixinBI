<template>
  <aside class="site-sidebar" :class="'site-sidebar--' + sidebarLayoutSkin">
    <div class="site-sidebar__inner">
      <!-- :default-active="menuActiveName || 'home'" -->
      <el-menu
        :default-active="menuActiveName"
        :collapse="sidebarFold"
        :collapseTransition="false"
        class="site-sidebar__menu"
      >
        <!-- <el-menu-item index="home" @click="$router.push({ name: 'home' })">
          <icon-svg name="shouye" class="site-sidebar__menu-icon"></icon-svg>
          <span slot="title">首页</span>
        </el-menu-item>-->

        <el-submenu index="demo"> -->
         <template slot="title">
            <icon-svg name="tubiao" class="site-sidebar__menu-icon"></icon-svg>
            <span>仪表盘</span>
        </template>

        <!-- 集团仪表盘 -->
        <el-submenu index="group">
          <template slot="title">
            <span>集团仪表盘</span>
          </template>
          <el-menu-item index="rankcondition" @click="$router.push({ name: 'rankcondition' })">
            <!-- <icon-svg name="tubiao" class="site-sidebar__menu-icon"></icon-svg> -->
            <span>年度排位情况</span>
          </el-menu-item>
          <!-- <el-menu-item index="demo-echarts" @click="$router.push({ name: 'demo-echarts' })">
            <icon-svg name="tubiao" class="site-sidebar__menu-icon"></icon-svg>
            <span>行业NPS表现年度跟踪</span>
          </el-menu-item> -->
          <el-menu-item index="demoEcharts" @click="$router.push({ name: 'demoEcharts' })">
            <!-- <icon-svg name="tubiao" class="site-sidebar__menu-icon"></icon-svg> -->
            <span>行业NPS表现年度跟踪</span>
          </el-menu-item>
        </el-submenu>

        <!-- 电视NPS -->
        <el-submenu index="television">
          <template slot="title">
            <span>电视NPS</span>
          </template>
          <el-menu-item index="television_nps" @click="$router.push({ name: 'television_nps' })">
            <span slot="title">整体NPS</span>
          </el-menu-item>
          <el-submenu index="product_nps">
            <template slot="title">产品NPS</template>
            <el-menu-item index="keyShowLast" @click="$router.push({ name: 'keyShowLast' })">体验要素表现</el-menu-item>
            <el-menu-item index="latitudeShow" @click="$router.push({ name: 'dimensionshow' })">关键细分维度表现</el-menu-item>
          </el-submenu>
          <el-menu-item index="sell_nps" @click="$router.push({ name: 'sellnps' })">
            <span>销售NPS</span>
          </el-menu-item>
          <el-menu-item index="service_nps" @click="$router.push({ name: 'servicenps' })">
            <span>服务NPS</span>
          </el-menu-item>
        </el-submenu>


         <!-- 冰箱NPS -->
        <el-submenu index="ice_nps">
          <template slot="title">
            <span>冰箱NPS</span>
          </template>
          <el-menu-item index="ice_allnps" @click="$router.push({ name: 'ice_allnps' })">
            <span slot="title">整体NPS</span>
          </el-menu-item>
          <el-submenu index="iceproductnps">
            <template slot="title">产品NPS</template>
            <el-menu-item index="ice_productnps_keyshow" @click="$router.push({ name: 'ice_productnps_keyshow' })">体验要素表现</el-menu-item>
            <el-menu-item index="ice_productnps_dimension" @click="$router.push({ name: 'ice_productnps_dimension' })">关键细分维度表现</el-menu-item>
          </el-submenu>
          <el-menu-item index="ice_sellnps" @click="$router.push({ name: 'ice_sellnps' })">
            <span>销售NPS</span>
          </el-menu-item>
          <el-menu-item index="ice_service" @click="$router.push({ name: 'ice_service' })">
            <span>服务NPS</span>
          </el-menu-item>
        </el-submenu>



        <!-- 空调NPS -->
        <el-submenu index="air_nps">
          <template slot="title">
            <span>空调NPS</span>
          </template>
          <el-menu-item index="air_allnps" @click="$router.push({ name: 'air_allnps' })">
            <span slot="title">整体NPS</span>
          </el-menu-item>
          <el-submenu index="airproductnps">
            <template slot="title">产品NPS</template>
            <el-menu-item index="air_productnps_keyshow" @click="$router.push({ name: 'air_productnps_keyshow' })">体验要素表现</el-menu-item>
            <el-menu-item index="air_productnps_dimension" @click="$router.push({ name: 'air_productnps_dimension' })">关键细分维度表现</el-menu-item>
          </el-submenu>
          <el-menu-item index="air_sellnps" @click="$router.push({ name: 'air_sellnps' })">
            <span>销售NPS</span>
          </el-menu-item>
          <el-menu-item index="air_service" @click="$router.push({ name: 'air_service' })">
            <span>服务NPS</span>
          </el-menu-item>
        </el-submenu>



        <!-- 洗衣机NPS -->
        <el-submenu index="shoes_nps">
          <template slot="title">
            <span>洗衣机NPS</span>
          </template>
          <el-menu-item index="shoes_allnps" @click="$router.push({ name: 'shoes_allnps' })">
            <span slot="title">整体NPS</span>
          </el-menu-item>
          <el-submenu index="shoesproductnps">
            <template slot="title">产品NPS</template>
            <el-menu-item index="shoes_productnps_keyshow" @click="$router.push({ name: 'shoes_productnps_keyshow' })">体验要素表现</el-menu-item>
            <el-menu-item index="shoes_productnps_dimension" @click="$router.push({ name: 'shoes_productnps_dimension' })">关键细分维度表现</el-menu-item>
          </el-submenu>
          <el-menu-item index="shoes_sellnps" @click="$router.push({ name: 'shoes_sellnps' })">
            <span>销售NPS</span>
          </el-menu-item>
          <el-menu-item index="shoes_service" @click="$router.push({ name: 'shoes_service' })">
            <span>服务NPS</span>
          </el-menu-item>
        </el-submenu>


        <!-- 手机NPS -->
        <el-submenu index="phone_nps">
          <template slot="title">
            <span>手机NPS</span>
          </template>
          <el-menu-item index="phone_allnps" @click="$router.push({ name: 'phone_allnps' })">
            <span slot="title">整体NPS</span>
          </el-menu-item>
          <el-submenu index="phoneproductnps">
            <template slot="title">产品NPS</template>
            <el-menu-item index="phone_productnps_keyshow" @click="$router.push({ name: 'phone_productnps_keyshow' })">体验要素表现</el-menu-item>
            <el-menu-item index="phone_productnps_dimension" @click="$router.push({ name: 'phone_productnps_dimension' })">关键细分维度表现</el-menu-item>
          </el-submenu>
          <el-menu-item index="phone_sellnps" @click="$router.push({ name: 'phone_sellnps' })">
            <span>销售NPS</span>
          </el-menu-item>
          <el-menu-item index="phone_service" @click="$router.push({ name: 'phone_service' })">
            <span>服务NPS</span>
          </el-menu-item>
        </el-submenu>
        </el-submenu>





        <!-- 数据配置 -->
         <!-- <el-submenu index="data_set">
          <template slot="title">
            <icon-svg name="sql" class="site-sidebar__menu-icon"></icon-svg>
            <span>数据配置</span>
          </template>
          <el-menu-item index="data_import">
            <span slot="title">数据导入</span>
          </el-menu-item>
        </el-submenu> -->
        <!-- 系统设置 -->
        <!-- <el-submenu index="admin">
          <template slot="title">
            <icon-svg name="shezhi" class="site-sidebar__menu-icon"></icon-svg>
            <span>系统管理</span>
          </template>
          <el-menu-item index="admin_user">
            <span slot="title">用户管理</span>
          </el-menu-item>
          <el-menu-item index="admin_role">
            <span slot="title">角色管理</span>
          </el-menu-item>
          <el-menu-item index="admin_resource">
            <span slot="title">资源管理</span>
          </el-menu-item>
        </el-submenu>  -->








        <!-- <sub-menu
          v-for="menu in menuList"
          :key="menu.menuId"
          :menu="menu"
          :dynamicMenuRoutes="dynamicMenuRoutes"
        ></sub-menu>-->
      </el-menu>
    </div>
  </aside>
</template>

<script>
import SubMenu from "./main-sidebar-sub-menu";
import { isURL } from "@/utils/validate";
export default {
  data() {
    return {
      dynamicMenuRoutes: []
    };
  },
  components: {
    SubMenu
  },
  computed: {
    sidebarLayoutSkin: {
      get() {
        return this.$store.state.common.sidebarLayoutSkin;
      }
    },
    sidebarFold: {
      get() {
        return this.$store.state.common.sidebarFold;
      }
    },
    menuList: {
      get() {
        return this.$store.state.common.menuList;
      },
      set(val) {
        this.$store.commit("common/updateMenuList", val);
      }
    },
    menuActiveName: {
      get() {
        return this.$store.state.common.menuActiveName;
      },
      set(val) {
        this.$store.commit("common/updateMenuActiveName", val);
      }
    },
    mainTabs: {
      get() {
        return this.$store.state.common.mainTabs;
      },
      set(val) {
        this.$store.commit("common/updateMainTabs", val);
      }
    },
    mainTabsActiveName: {
      get() {
        return this.$store.state.common.mainTabsActiveName;
      },
      set(val) {
        this.$store.commit("common/updateMainTabsActiveName", val);
      }
    }
  },
  watch: {
    $route: "routeHandle"
  },

  created() {
    this.menuList = JSON.parse(sessionStorage.getItem("menuList") || "[]");
    this.dynamicMenuRoutes = JSON.parse(
      sessionStorage.getItem("dynamicMenuRoutes") || "[]"
    );
    this.routeHandle(this.$route);
    this.$store.commit("common/updateMenuActiveName", this.$route.name);
  },
  methods: {
    // 路由操作
    routeHandle(route) {
      if (route.meta.isTab) {
        // tab选中, 不存在先添加
        var tab = this.mainTabs.filter(item => item.name === route.name)[0];
        if (!tab) {
          if (route.meta.isDynamic) {
            route = this.dynamicMenuRoutes.filter(
              item => item.name === route.name
            )[0];
            if (!route) {
              return console.error("未能找到可用标签页!");
            }
          }
          tab = {
            menuId: route.meta.menuId || route.name,
            name: route.name,
            title: route.meta.title,
            type: isURL(route.meta.iframeUrl) ? "iframe" : "module",
            iframeUrl: route.meta.iframeUrl || "",
            params: route.params,
            query: route.query
          };
          this.mainTabs = this.mainTabs.concat(tab);
        }
        this.menuActiveName = tab.menuId + "";
        this.mainTabsActiveName = tab.name;
      }
    }
  }
};
</script>
