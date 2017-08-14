const classify={
  namespaced: true,
  state:{
    countA: 1,
    classifys: [
      { id: 1, text: '语文', done: true },
      { id: 2, text: '数学', done: false },
      { id: 2, text: '英语', done: false }
    ]
  },
  getters:{
    classifyDone: state=>{
      return state.classifys.filter( classfiy => classfiy.done);
    }
  },
  mutations: {
    increment (state, data) {
      // 变更状态
      state.countA = state.countA + parseInt(data);
    }
  },
  actions: {
    increment ({commit}, data) {  
      commit('increment',data);
    }
  }
}

export default classify