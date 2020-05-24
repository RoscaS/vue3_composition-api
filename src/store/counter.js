
export default {
  namespaced: true,

  state: {
    value: 0,
  },

  getters: {
    counter: state => state.value,
  },

  mutations: {
    SET_COUNTER(state, value) {
      state.value = value;
    },
  },

  actions: {
    increment({ commit, state }, increment) {
      // this.dispatch("users/add", "Joel");
      commit('SET_COUNTER', state.value + increment);
    },
    decrement({ commit, state }, increment) {
      commit('SET_COUNTER', state.value - increment);
    },
  },
};
