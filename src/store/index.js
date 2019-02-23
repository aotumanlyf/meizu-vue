import Vuex from 'vuex'
import Vue from 'vue'
import main from '../main'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    numShop: 0,
    shopData: [
      {
        title: '魅族',
        flag: false,
        content: [{
          title: '魅族 16th Plus',
          content: '骁龙845 屏幕下指纹',
          img: require("../assets/c_con_5_1.jpg"),
          price: '3198',
          num: 1,
          flag: false,
          edit: false,
        }, {
          title: '魅族 16th Plus',
          content: '骁龙845 屏幕下指纹',
          img: require("../assets/c_con_5_1.jpg"),
          price: '3198',
          num: 1,
          flag: false,
          edit: false,
        }]
      }, {
        title: '魅族',
        flag: false,
        content: [{
          title: '魅族 16th Plus',
          content: '骁龙845 屏幕下指纹',
          img: require("../assets/c_con_5_1.jpg"),
          price: '3198',
          num: 1,
          flag: false,
          edit: false,
        }, {
          title: '魅族 16th Plus',
          content: '骁龙845 屏幕下指纹',
          img: require("../assets/c_con_5_1.jpg"),
          price: '3198',
          num: 1,
          flag: false,
          edit: false,
        }]
      }],
  },
  mutations: {
    //商品数量
    NUMALL(state){
      state.numShop = 0;
      for(let i = 0; i < state.shopData.length; i++){
        for(let j = 0; j < state.shopData[i].content.length; j++){
          state.numShop += state.shopData[i].content[j].num;
        }
      }
    },
  },
  getters: {},
  actions: {
    numAll({commit}){
      commit('NUMALL')
    }
  }
});


