//包含多个接口请求函数的模块
import ajax from './ajax'
// const BASE='/api'
const BASE1='/taidu'

//年度排位情况
//年度排位情况表格数据
// export const req
export const reqRankCondition = () => ajax(BASE + `/index_category`)


//登录操作
export const reqLogin = (params) => ajax.post(`/index/login/dologin`, params)


//退出操作
export const reqOutlogin = (params) => ajax.post(`/index/login/logout`,params)
 










//行内NPS表现年度跟踪下的--整体NPS
export const reqTrackAllnps=()=>ajax(BASE+``)
//行内NPS表现年度跟踪下的--产品NPS
export const reqTrackProductnps=()=>ajax(BASE+``)
//行内NPS表现年度跟踪下的--销售NPS
export const reqTrackSalesnps=()=>ajax(BASE+``)
//行内NPS表现年度跟踪下的--服务NPS
export const reqTrackServicesnps = () => ajax(BASE + ``)



//电视NPS-整体NPS
export const reqTVAllnps=()=>ajax(BASE+``)
//电视NPS-产品NPS
export const reqTVkeyShow=()=>ajax(BASE+``)
  //电视NPS-产品NPS
export const reqTVdimension = () => ajax(BASE + ``)
//电视NPS-销售NPS
export const reqTVSalesnps=()=>ajax(BASE+``)
//电视NPS-服务NPS
export const reqTVservice=()=>ajax(BASE+``)