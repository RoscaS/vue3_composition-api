
export default {
  namespaced: true,

  state: {
    value: [],
  },

  getters: {
    users: state => state.value,
  },

  mutations: {
    ADD(state, value) {
      state.value.push(value);
    },
  },

  actions: {
    add({ commit, state }, user) {
      commit('ADD', user);
    },
  },
};

