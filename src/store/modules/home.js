const home={
  namespaced: true,
  state:{
    countB: 3,
    todos: [
      { id: 1, text: '红楼梦', done: true },
      { id: 2, text: '西游记', done: false }
    ]
  },
  getters:{
    todosDone(state, getters, rootState, rootGetters){
      console.log('state', state);
      console.log('getters', getters);
      console.log('rootState', rootState);
      console.log('rootGetters', rootGetters);
      return state.todos.filter(todo=>todo.done);
    }
  },
  mutations: {
    increment (state, data) {
      // 变更状态
      state.countB = state.countB+ parseInt(data);
    }
  },
  actions: {
    increment ({commit}, data) {  
      commit('increment',data);
    }
  }
}

export default home