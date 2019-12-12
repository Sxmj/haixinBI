/**
 * 全站路由配置
 *
 * 建议:
 * 1. 代码中路由统一使用name属性跳转(不使用path属性)
 */
import Vue from 'vue'
import Router from 'vue-router'
import http from '@/utils/httpRequest'
import { isURL } from '@/utils/validate'
import { clearLoginInfo } from '@/utils'

Vue.use(Router)

// 开发环境不使用懒加载, 因为懒加载页面太多的话会造成webpack热更新太慢, 所以只有生产环境使用懒加载
const _import = require('./import-' + process.env.NODE_ENV)

// 全局路由(无需嵌套上左右整体布局)
const globalRoutes = [
  { path: '/404', component: _import('common/404'), name: '404', meta: { title: '404未找到' } },
  { path: '/login', component: _import('common/login'), name: 'login', meta: { title: '登录' } }
]

// 主入口路由(需嵌套上左右整体布局)
const mainRoutes = {
  path: '/',
  component: _import('main'),
  name: 'main',
  redirect: { name: 'login' },
  meta: { title: '主入口整体布局' },
  children: [
    // 通过meta对象设置路由展示方式
    // 1. isTab: 是否通过tab展示内容, true: 是, false: 否
    // 2. iframeUrl: 是否通过iframe嵌套展示内容, '以http[s]://开头': 是, '': 否
    // 提示: 如需要通过iframe嵌套展示内容, 但不通过tab打开, 请自行创建组件使用iframe处理!
    // { path: '/home', component: _import('common/home'), name: 'home', meta: { title: '首页' } },
    // { path: '/theme', component: _import('common/theme'), name: 'theme', meta: { title: '主题' } },
    { path: '/dimensionshow', component: _import('demo/dimensionShow'), name: 'dimensionshow', meta: { title: '关键细分维度表现' } },
    { path: '/rankcondition', component: _import('demo/rankCondition'), name: 'rankcondition', meta: { title: '排位情况' } },
    // { path: '/demo-echarts', component: _import('demo/echarts'), name: 'demo-echarts', meta: { title: '行业NPS表现年度跟踪' } },
    { path: '/demoecharts', component: _import('demo/demoEcharts'), name: 'demoEcharts', meta: { title: '行业NPS表现年度跟踪' } },
    { path: '/servicenps', component: _import('demo/servicenps'), name: 'servicenps', meta: { title: '服务NPS' } },
    { path: '/sellnps', component: _import('demo/sellnps'), name: 'sellnps', meta: { title: '销售NPS' } },
    { path: '/keyshow', component: _import('demo/keyShow'), name: 'keyShow', meta: { title: '体验要点表现1' } },
    // { path: '/keyshowlast', component: _import('demo/keyShowLast'), name: 'keyShowLast', meta: { title: '体验要点表现2' } },
    { path: '/keyshowlast', component: _import('demo/keyShowLast'), name: 'keyShowLast', meta: { title: '体验要点表现2' } },
    { path: '/television_nps', component: _import('demo/television'), name: 'television_nps', meta: { title: '电视' } },
    { path: '/television_product', component: _import('demo/televisionProduct'), name: 'television_product', meta: { title: '电视产品' } },
    


    //冰箱NPS
    { path: '/iceall', component: _import('demo/ice_allnps'), name: 'ice_allnps', meta: { title: '冰箱整体NPS' } },
    { path: '/iceproductnpsdimen', component: _import('demo/ice_productnps_dimension'), name: 'ice_productnps_dimension', meta: { title: '冰箱维度表现' } },
    { path: '/iceproductnpskey', component: _import('demo/ice_productnps_keyshow'), name: 'ice_productnps_keyshow', meta: { title: '冰箱体验要素表现' } },
    { path: '/icesellnps', component: _import('demo/ice_sellnps'), name: 'ice_sellnps', meta: { title: '冰箱销售NPS' } },
    { path: '/iceservicenps', component: _import('demo/ice_service'), name: 'ice_service', meta: { title: '冰箱服务NPS' } },

    //空调NPS
    { path: '/airall', component: _import('demo/air_allnps'), name: 'air_allnps', meta: { title: '空调整体NPS' } },
    { path: '/airproductnpsdimen', component: _import('demo/air_productnps_dimension'), name: 'air_productnps_dimension', meta: { title: '空调维度表现' } },
    { path: '/airproductnpskey', component: _import('demo/air_productnps_keyshow'), name: 'air_productnps_keyshow', meta: { title: '空调体验要素表现' } },
    { path: '/airsellnps', component: _import('demo/air_sellnps'), name: 'air_sellnps', meta: { title: '空调销售NPS' } },
    { path: '/airservicenps', component: _import('demo/air_service'), name: 'air_service', meta: { title: '空调服务NPS' } },



    //洗衣机NPS
    { path: '/shoesall', component: _import('demo/shoes_allnps'), name: 'shoes_allnps', meta: { title: '洗衣机整体NPS' } },
    { path: '/shoesproductnpsdimen', component: _import('demo/shoes_productnps_dimension'), name: 'shoes_productnps_dimension', meta: { title: '洗衣机维度表现' } },
    { path: '/shoesproductnpskey', component: _import('demo/shoes_productnps_keyshow'), name: 'shoes_productnps_keyshow', meta: { title: '洗衣机体验要素表现' } },
    { path: '/shoessellnps', component: _import('demo/shoes_sellnps'), name: 'shoes_sellnps', meta: { title: '洗衣机销售NPS' } },
    { path: '/shoesservicenps', component: _import('demo/shoes_service'), name: 'shoes_service', meta: { title: '洗衣机服务NPS' } },


    //手机NPS

    { path: '/phoneall', component: _import('demo/phone_allnps'), name: 'phone_allnps', meta: { title: '洗衣机整体NPS' } },
    { path: '/phoneproductnpsdimen', component: _import('demo/phone_productnps_dimension'), name: 'phone_productnps_dimension', meta: { title: '洗衣机维度表现' } },
    { path: '/phoneproductnpskey', component: _import('demo/phone_productnps_keyshow'), name: 'phone_productnps_keyshow', meta: { title: '洗衣机体验要素表现' } },
    { path: '/phonesellnps', component: _import('demo/phone_sellnps'), name: 'phone_sellnps', meta: { title: '洗衣机销售NPS' } },
    { path: '/phoneservicenps', component: _import('demo/phone_service'), name: 'phone_service', meta: { title: '洗衣机服务NPS' } },






    // { path: '/television', component: _import('demo/television'), name: 'television', meta: { title: '电视', isTab: true } }
  ],
  // beforeEnter(to, from, next) {
  //   let token = Vue.cookie.get('token')
  //   if (!token || !/\S/.test(token)) {
  //     clearLoginInfo()
  //     next({ name: 'login' })
  //   }
  //   next()
  // }
}

const router = new Router({
  mode: 'hash',
  scrollBehavior: () => ({ y: 0 }),
  isAddDynamicMenuRoutes: false, // 是否已经添加动态(菜单)路由
  routes: globalRoutes.concat(mainRoutes)
})

// router.beforeEach((to, from, next) => {
//   // 添加动态(菜单)路由
//   // 1. 已经添加 or 全局路由, 直接访问
//   // 2. 获取菜单列表, 添加并保存本地存储
//   if (router.options.isAddDynamicMenuRoutes || fnCurrentRouteType(to, globalRoutes) === 'global') {
//     next()
//   } else {
//     http({
//       url: http.adornUrl('/sys/menu/nav'),
//       method: 'get',
//       params: http.adornParams()
//     }).then(({ data }) => {
//       if (data && data.code === 0) {
//         fnAddDynamicMenuRoutes(data.menuList)
//         router.options.isAddDynamicMenuRoutes = true
//         sessionStorage.setItem('menuList', JSON.stringify(data.menuList || '[]'))
//         sessionStorage.setItem('permissions', JSON.stringify(data.permissions || '[]'))
//         next({ ...to, replace: true })
//       } else {
//         sessionStorage.setItem('menuList', '[]')
//         sessionStorage.setItem('permissions', '[]')
//         next()
//       }
//     }).catch((e) => {
//       console.log(`%c${e} 请求菜单列表和权限失败，跳转至登录页！！`, 'color:blue')
//       router.push({ name: 'login' })
//     })
//   }
// })

/**
 * 判断当前路由类型, global: 全局路由, main: 主入口路由
 * @param {*} route 当前路由
 */
function fnCurrentRouteType(route, globalRoutes = []) {
  var temp = []
  for (var i = 0; i < globalRoutes.length; i++) {
    if (route.path === globalRoutes[i].path) {
      return 'global'
    } else if (globalRoutes[i].children && globalRoutes[i].children.length >= 1) {
      temp = temp.concat(globalRoutes[i].children)
    }
  }
  return temp.length >= 1 ? fnCurrentRouteType(route, temp) : 'main'
}

/**
 * 添加动态(菜单)路由
 * @param {*} menuList 菜单列表
 * @param {*} routes 递归创建的动态(菜单)路由
 */
function fnAddDynamicMenuRoutes(menuList = [], routes = []) {
  var temp = []
  for (var i = 0; i < menuList.length; i++) {
    if (menuList[i].list && menuList[i].list.length >= 1) {
      temp = temp.concat(menuList[i].list)
    } else if (menuList[i].url && /\S/.test(menuList[i].url)) {
      menuList[i].url = menuList[i].url.replace(/^\//, '')
      var route = {
        path: menuList[i].url.replace('/', '-'),
        component: null,
        name: menuList[i].url.replace('/', '-'),
        meta: {
          menuId: menuList[i].menuId,
          title: menuList[i].name,
          isDynamic: true,
          isTab: true,
          iframeUrl: ''
        }
      }
      // url以http[s]://开头, 通过iframe展示
      if (isURL(menuList[i].url)) {
        route['path'] = `i-${menuList[i].menuId}`
        route['name'] = `i-${menuList[i].menuId}`
        route['meta']['iframeUrl'] = menuList[i].url
      } else {
        try {
          route['component'] = _import(`modules/${menuList[i].url}`) || null
        } catch (e) { }
      }
      routes.push(route)
    }
  }
  if (temp.length >= 1) {
    fnAddDynamicMenuRoutes(temp, routes)
  } else {
    mainRoutes.name = 'main-dynamic'
    mainRoutes.children = routes
    router.addRoutes([
      mainRoutes,
      { path: '*', redirect: { name: '404' } }
    ])
    sessionStorage.setItem('dynamicMenuRoutes', JSON.stringify(mainRoutes.children || '[]'))
    console.log('\n')
    console.log('%c!<-------------------- 动态(菜单)路由 s -------------------->', 'color:blue')
    console.log(mainRoutes.children)
    console.log('%c!<-------------------- 动态(菜单)路由 e -------------------->', 'color:blue')
  }
}

export default router
