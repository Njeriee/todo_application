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
          v-for="t in complete"
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
            <button class="bg-red-300 p-4 rounded-lg mr-4 my-2">
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
            <button class="bg-blue-300 p-4 rounded-lg mr-4">
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
</template>

<script>
import { mapGetters, mapState } from "vuex";

export default {
  name: "completeTasks",
  data() {},
  computed: {
    ...mapState({
      complete: 'completeTasks'
    }),
    ...mapGetters({
      completeTasks: "getComplete",
    }),
  },
};
</script>
