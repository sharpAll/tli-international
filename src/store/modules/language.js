const user = {
  state: {
    curLan: "CHT"
  },
  mutations: {
    SET_LANGUAGE(state, curLan) {
      state.curLan = curLan;
    }
  },
  actions: {
    setLanguage({ commit }, curLan) {
      commit("SET_LANGUAGE", curLan);
    }
  }
};
export default user;
