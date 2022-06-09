<template>
<div class="flex flex-col md:flex-row py-10 justify-center m-10 font-sans bg-white">
    <div class="md:flex-col basis-1/2">
        <img src="../assets/images/home.jpg" alt="">
    </div>
    <div class="my-5 justify-center md:flex-col basis-1/2">
      <div class="font-bold text-4xl text-red-600">
        <h1>Incomplete Tasks</h1>
      </div>
      <div class="py-5 my-5 justify-center rounded-lg bg-stone-200">
        <table>
        <thead class="my-5 text-xl">
          <tr>
            <th class="px-5">task</th>
            <th class="px-5">date added</th>
            <th class="px-5">due date</th>
            <!-- <th class="px-5">date completed</th> -->
            <th class="px-5">status</th>
          </tr>
        </thead>
        <tbody class="rounded-lg">
          <tr
            class="py-5 my-5 rounded-lg bg-stone-200"
            v-for="t in incomplete"
            :key="t.id"
          >
            <td>
              <dl>
                <dt class="text-2xl font-semibold">{{ t.title }}</dt>
                <dd>{{ t.description }}</dd>
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
  name: "IncompleteTasks",
  data() {},
  computed: {
    ...mapGetters({
      incomplete: "getIncomplete",
    }),
  },
};
</script>