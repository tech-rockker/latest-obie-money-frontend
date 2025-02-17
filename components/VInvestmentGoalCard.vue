<template>
  <div>
    <div class="bg-white rounded-md flex shadow-lg">
      <div
        class="bg-orange-2 flex items-center justify-center w-6 rounded-l-md"
      >
        {{ index + 1 }}
      </div>
      <div class="w-full p-3">
        <div class="flex justify-between mb-10">
          <div>
            <h3 class="font-bold">{{ goal.name }}</h3>
            <div>
              <span class="font-bold text-base">{{
                goal.amount | currency
              }}</span
              ><VBadge color="gray">{{ goal.typeDisplay }}</VBadge>
            </div>
          </div>
          <div>
            <button
              v-if="showOpen"
              aria-label="Go to goal"
              @click="$emit('open-goal')"
            >
              <img src="/caret-right-box.svg" aria-hidden="true" />
            </button>
            <button v-if="showEdit" @click="$emit('edit-goal', goal)">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="none"
              >
                <path
                  fill="#DADADA"
                  d="M17.544 8.204a.937.937 0 0 0-.937.937v5.796a1.628 1.628 0 0 1-1.625 1.625h-9.92a1.629 1.629 0 0 1-1.625-1.625V5.02a1.628 1.628 0 0 1 1.626-1.625h5.793a.938.938 0 0 0 0-1.875H5.063a3.506 3.506 0 0 0-3.5 3.5v9.918a3.506 3.506 0 0 0 3.5 3.5h9.918a3.506 3.506 0 0 0 3.5-3.5V9.143a.937.937 0 0 0-.937-.939ZM18.567 4.045l-2.612-2.612a.643.643 0 0 0-.884 0l-1.19 1.192 3.494 3.494 1.19-1.188a.625.625 0 0 0 0-.884l.002-.002Z"
                />
                <path
                  fill="#DADADA"
                  d="M7.054 9.71v2.611a.625.625 0 0 0 .625.625h2.611a.625.625 0 0 0 .442-.183L16.492 7 13 3.508l-5.76 5.76a.625.625 0 0 0-.186.442Z"
                />
              </svg>
            </button>
          </div>
        </div>
        <div class="flex justify-between">
          <p class="flex items-center text-xs">
            <img class="mr-1" src="/time.svg" alt="time" />
            <span>{{ goal.yearAchieved }} year</span>
          </p>
          <div>
            <p class="text-xs">
              {{ goal.allocationIncome | currency }}/{{
                goal.allocationIncomeFrequency | frequencyToNoun
              }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    index: {
      type: Number,
      required: true,
    },
    goal: {
      type: Object,
      required: true,
    },
    showEdit: {
      type: Boolean,
      default: true,
    },
    showOpen: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="scss" scoped></style>
