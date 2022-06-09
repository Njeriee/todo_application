<template>
  <div
    class="flex flex-col md:flex-row py-10 justify-center m-10 font-sans bg-white"
  >
    <div class="md:flex-col basis-1/2">
      <img src="../assets/images/completetasks.jpg" alt="" />
    </div>
    <div class="md:flex-col basis-1/2">
      <div class="font-bold text-4xl text-secondary">
        <h1>Complete Tasks</h1>
      </div>
      <div class="py-5 my-5 justify-center rounded-lg bg-stone-200">
        <table class=" justify-center">
          <thead class="text-xl">
            <tr class="py-10">
              <th class="px-5">task</th>
              <th class="px-5">date added</th>
              <th class="px-5">due date</th>
              <!-- <th class="px-5">date completed</th> -->
              <th class="px-5">status</th>
            </tr>
          </thead>
          <tbody class="rounded-lg">
            <tr
              class="p-10 my-5 rounded-lg bg-stone-200"
              v-for="t in completeTasks"
              :key="t.id"
            >
              <td class="px-5">
                <dl>
                  <dt class="text-2xl font-semibold">{{ t.title }}</dt>
                  <dd>{{ t.description }}</dd>
                </dl>
              </td>
              <td class="px-5">
                {{ t.date_created }}
              </td>
              <td class="px-5">
                {{ t.due_date }}
              </td>
              <!-- <td>
                {{t.date_completed}}
              </td> -->
              <td class="px-5">
                {{ t.status }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "completeTasks",
  data() {},
  computed: {
    ...mapGetters({
      completeTasks: "getdone",
    }),
  },
};
</script>
