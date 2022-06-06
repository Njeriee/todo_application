import { createStore } from 'vuex'

export default createStore({
  state: {
    tasks:[],
    completeTasks: [],
    incompleteTasks:[]

  
  },
  getters: {
    getComplete: state => state.completeTasks,
    getIncomplete: state => state.incompleteTasks
  },
  mutations: {
    addTask(state,task){
      let length = state.tasks.length
      task.id = length +1
      task.date_created = new Date().getFullYear() + '-' + (new Date().getMonth() + 1)+ '-' + new Date().getDate()
      task.status = 'ongoing'
      state.tasks.push(task)
      localStorage.setItem('key', JSON.stringify(task));
    },
    complete(state,taskComplete){
      state.completeTasks.push(taskComplete)
    }
  },
  actions: {
  },
  modules: {
  }
})
