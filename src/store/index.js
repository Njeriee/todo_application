import { createStore } from "vuex";
import Axios from "axios";

export default createStore({
  state: {
    tasks: [],
    completeTasks: [],
    incompleteTasks: [],
  },

  getters: {
    getComplete: (state) => state.completeTasks,
    getIncomplete: state => state.tasks.filter((task) => ! task.complete ),
    getdone: state => state.tasks.filter((task) => task.complete),
    getTasks: (state) => state.tasks
  },

  mutations: {
    set_task(state, res) {
      // state.tasks.push(res)
      state.tasks = res;
    },
    addTask(state, task) {
      let length = state.tasks.length;
      task.id = length + 1;
      task.date_created =
        new Date().getFullYear() +
        "-" +
        (new Date().getMonth() + 1) +
        "-" +
        new Date().getDate();
      task.status = "ongoing";
      task.complete = false;
      state.tasks.push(task);
    },

    deleteTask(state, id) {
      let tasks = state.tasks;
      let index = tasks.findIndex((task) => task.id === id);
      // console.log(id)
      if (index !== -1) {
        tasks.splice(index, 1);
        state.tasks = tasks;
      }
    },

    editTask(state, task) {
      let tasks = state.tasks;
      let index = tasks.findIndex((task) => task.id === task.id);
      console.log(task.id);
      if (index !== -1) {
        tasks[index] = task;
        state.tasks = tasks;
      }
      
    },
  },
  actions: {
    complete(state) {
      if (state.tasks.complete === true) {
        state.tasks = 'complete'
        state.completeTasks.push(this.task);
        console.log('hey')
      }
    },

    fetchTasks() {
      let baseURL = "https://tychak.github.io/";
      Axios.get(baseURL).then((response) => {
        // console.log(response.data)
        const res = response.data;
        // console.log(res);
        res.forEach((element) => {
          element.id = parseInt(element.id);
          
        });
        this.commit("set_task", res);
      });
    },
  },
  modules: {},
});
