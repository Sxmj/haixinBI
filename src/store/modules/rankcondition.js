import {
  RECEICE_RANKCONDITION
} from '../mutations-type'
import {
  reqRankCondition
} from '../../api/index'


const state={
      //年度排位情况表格数据
      rankCondition:{}
}
const mutations = {
      [RECEICE_RANKCONDITION](state,{rankCondition}){
        state.rankCondition=rankCondition
      }
}
const actions = {
        async getRankCondition({commit}){
            const result = await reqRankCondition()
            if (result.code==0) {
              let rankCondition = result.data
               console.log(rankCondition)
              commit(RECEICE_RANKCONDITION,{rankCondition})
                 
            }
        }
}
const getters = {

}
export default {
  state,
  mutations,
  actions,
  getters
}