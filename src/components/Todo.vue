<template>
  <div
    class="flex flex-col lg:flex-row py-10 justify-center m-10 font-sans bg-white"
  >
    <div class="md:flex-col basis-1/2">
      <img src=".././assets/images/incompletetasks.jpg" alt="image here" />
    </div>
    <div class="lg:flex-col basis-1/2">
      <div class="font-bold text-4xl text-secondary">
        <h1>Hi here is a list of your tasks !</h1>
      </div>
      <div>
        <button
          class="my-4 p-2 text-white rounded-lg bg-primary"
          @click="toggleInput"
        >
          Add a task
        </button>
      </div>
      <div v-if="showInput">
        <div class="p-5 bg-stone-200 rounded-lg text-left">
          <form>
            <dl>
              <dt class="m-2 bg-white rounded px-4 text-slate-400">
                <label for="">Task title</label>
                <input
                  class="md:p-5 rounded-lg"
                  type="text"
                  v-model.lazy="task.title"
                />
              </dt>
              <dd class="m-2 bg-white rounded px-4 text-slate-400">
                Due date:
                <input
                  class="p-5"
                  type="date"
                  id="dueDate"
                  v-model.lazy="task.due_date"
                />
              </dd>
              <dd class="m-2 bg-white rounded px-4 text-slate-400">
                <label for="">Task description</label>
                <input
                  class="md:p-10 rounded-lg"
                  type="text"
                  v-model.lazy="task.description"
                />
              </dd>
            </dl>
          </form>
          <button
            class="m-2 p-2 text-white rounded-lg bg-primary"
            @click="pushTask()"
          >
            {{action === 'addTask' ? 'Add Task': 'Edit Task' }}
          </button>
        </div>
      </div>
      <div class="p-2 m-2 md:px-5 md:justify-center rounded-lg bg-stone-200">
        <table class="table-auto">
          <thead class="md:my-5 text-xl">
            <tr>
              <th class="md:px-5 pr-2">mark complete</th>
              <th class="md:px-5 pr-2">task</th>
              <th class="md:px-5 pr-2">date added</th>
              <th class="md:px-5 pr-2">due date</th>
              <!-- <th class="px-5">date completed</th> -->
              <th class="md:px-5 pr-2">status</th>
              <th class="md:px-5 pr-2">action</th>
            </tr>
          </thead>
          <tbody class="rounded-lg">
            <tr
              v-for="t in mytasks"
              :key="t.id"
            >
              <td class="pr-2">
                <input type="checkbox" @click="complete" v-model="t.complete" value="completed"/>
              </td>
              <td >
                <dl>
                  <dt class="text-2xl font-semibold">{{ t.title }}</dt>
                  <dd class="italic">{{ t.description }}</dd>
                </dl>
              </td>
              <td>
                {{ t.date_created }}
              </td>
              <td>
                {{ t.due_date }}
              </td>
              <!-- <td>
                {{t.date_completed}}
              </td> -->
              <td>
                {{ t.status }}
              </td>
              <td class="">
                <button
                  class="bg-red-500 p-4 rounded-lg md:mr-4 my-2"
                  @click="deletetask(t.id)"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </svg>
                </button>
                <button
                  class="bg-primary p-4 rounded-lg md:mr-4"
                  @click="editTask(t)"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                    />
                  </svg>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      {{completetasks}}
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "ToDo",

  data() {
    // thedate = document.getElementById('dueDate').disbled = true
    return {
      task: {},
      showInput: false,
      action: "addTask",
    };
  },
  methods: {
    complete(){
        console.log()
      // this.$store.dispatch("complete")
     
    },
    toggleInput() {
      this.showInput = !this.showInput;
    },
    addTask() {
      this.$store.commit("addTask", this.task);
      this.task = {};
      this.toggleInput();
    },

    deletetask(id) {
      if (confirm("Are you sure you want to delete?")){
        this.$store.commit("deleteTask", id);
      } 
      
    },
    editTask(task) {
      this.action = 'editTask'
      this.task = task;
      this.toggleInput();
      
    },
    pushTask() {
      if (this.action === "addTask") {
        console.log("hey");
        this.$store.commit("addTask", this.task);
        this.task = {}
        this.toggleInput();
      }
      else{
        this.$store.commit('editTask', this.task)
        // this.action = 'addTask'
        // this.task = {};
        this.toggleInput()
        
      }
    },

  },
  computed: {
    ...mapGetters({
      mytasks: 'getTasks'
    })

  },

  watch: {
    mytasks(){
      if(this.mytasks.complete === true){
        this.mytasks.status === 'complete'
      }
    }
  },

  beforeCreate() {
    this.$store.dispatch("fetchTasks");
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
