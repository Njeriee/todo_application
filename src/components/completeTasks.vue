<template>
  <div class="my-5 justify-center">
    <table>
      <thead class="my-5">
        <tr>
          <th class="px-5">task</th>
          <th class="px-5">date added</th>
          <th class="px-5">due date</th>
          <!-- <th class="px-5">date completed</th> -->
          <th class="px-5">status</th>
          <th class="px-5">action</th>
        </tr>
      </thead>
      <tbody class="rounded-lg">
        <tr
          class="py-5 my-5 rounded-lg bg-stone-200"
          v-for="t in completeTasks"
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
          <td class="">
            <button class="">edit task</button>
            <button class="mx-4">delete task</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "completeTasks",
  data() {},
  computed: {
    ...mapGetters({
      completeTasks: "getComplete",
    }),
  },
};
</script>
