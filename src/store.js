import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import localStoragePlugin from './plugins/localStorage';

export default new Vuex.Store({
  plugins: [localStoragePlugin],
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
    initializeStore() {
      const data = localStorage.getItem('todontState');

      if (data) {
        this.replaceState(Object.assign(this.state, JSON.parse(data)));
      }
    },
    addTodont(state, todontName) {
      const newTodont = {
        name: todontName,
        checked: false
      }
      state.todonts.push(newTodont);
    }
  },
  actions: {

  }
});
