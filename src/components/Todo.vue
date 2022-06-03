<template>
  <div class="flex flex-col md:flex-row py-10 justify-center m-10 font-sans bg-white">
    <div class="md:flex-col basis-1/2 ">
      <img src=".././assets/images/home.jpg" alt="image here" />
    </div>
    <div class="md:flex-col basis-1/2">
      <div class="font-bold text-4xl">
        <h1>Hi here is a list of your tasks !</h1>
      </div>
      <div>
        <button
          class="my-4 p-2 text-white rounded-lg bg-blue-300"
          @click="toggleInput"
        >
          Add a task
        </button>
      </div>
      <div v-if="showInput">
        <div class="p-5 bg-stone-200 rounded-lg text-left">
          <form action="">
            <dl>
              <dt class="m-2 bg-white rounded px-4 text-slate-400">
                <label for="">Task title</label>
                <input
                  class="p-5 rounded-lg"
                  type="text"
                  v-model="task.title"
                />
              </dt>
              <dd class="m-2 bg-white rounded px-4 text-slate-400">
                Due date:
                <input
                  class="p-5"
                  type="date"
                  id="dueDate"
                  v-model="task.date"
                />
              </dd>
              <dd class="m-2 bg-white rounded px-4 text-slate-400">
                <label for="">Task description</label>
                <input
                  class="p-10 rounded-lg"
                  type="text"
                  v-model="task.description"
                />
              </dd>
            </dl>
          </form>
          <button
            class="m-2 p-2 text-white rounded-lg bg-blue-300"
            @click="addTask"
          >
            add task
          </button>
        </div>
      </div>
      <div class="my-5">
        <table>
          <thead class="my-5">
            <tr>
              <th>mark task complete</th>
              <th>task</th>
              <th>action</th>
            </tr>
          </thead>
          <tbody>
            <tr class="py-5 my-5 bg-stone-200" v-for="t in tasks" :key="t.id">
              <td class="mx-4">
                <input type="checkbox" />
              </td>
              <td class="mx-4">
                <dl>
                  <dt class="text-2xl font-semibold">{{ t.title }}</dt>
                  <dd class="text-s text-slate-400 italic">
                    due on: {{ t.date }}
                  </dd>
                  <dd>{{ t.description }}</dd>
                </dl>
              </td>
              <td class="mx-4">
                <button class="mx-4">edit task</button>
                <button class="mx-4">delete task</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "ToDo",
  props: {},

  data() {
    // thedate = document.getElementById('dueDate').disbled = true
    return {
      task: {},
      showInput: false
    };
  },
  methods: {
    toggleInput(){
      this.showInput = !this.showInput
    },
    addTask() {
      this.$store.commit("addTask", this.task);
      this.task = {};
      this.toggleInput()
    },
  },
  computed: {
    ...mapState({
      tasks: "tasks",
    }),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
