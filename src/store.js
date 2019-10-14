import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todonts: [
      {
        name: 'Don’t make eye contact with Grandma’s Cat',
        checked: false
      },
      {
        name: 'Don\'t feed the bears',
        checked: false
      }
    ]
  },
  mutations: {

  },
  actions: {

  }
});
