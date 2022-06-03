import { createStore } from 'vuex'

export default createStore({
  state: {
    tasks:[
      {
        id: '',
        title: '',
        date: '',
        description:'',
      }
    ]
  },
  getters: {
  },
  mutations: {
    addTask(state,task){
      let length = state.tasks.length
      task.id = length +1
      state.tasks.push(task)
      localStorage.setItem('key', JSON.stringify(task));
    }
  },
  actions: {
  },
  modules: {
  }
})
