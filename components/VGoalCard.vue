<template>
  <div>
    <div class="border border-gray-100 bg-white rounded-md flex shadow-lg">
      <div
        :for="`goal-${goal.uuid}-image`"
        :style="{
          backgroundImage: goal.imageUrl ? `url(${goal.imageUrl})` : null,
        }"
        :class="[
          [
            'bg-red-100 hover:bg-red-200 focus:bg-red-300',
            'bg-orange-3 hover:bg-orange-4 focus:bg-orange-5',
            'bg-yellow-100 hover:bg-yellow-200 focus:bg-yellow-300',
            'bg-green-100 hover:bg-green-200 focus:bg-green-300',
            'bg-blue-100 hover:bg-blue-200 focus:bg-blue-300',
            'bg-rose-100 hover:bg-rose-200 focus:bg-rose-300',
            'bg-indigo-100 hover:bg-indigo-200 focus:bg-indigo-300',
          ][index],
        ]"
        class="w-1/3 relative rounded-l-md flex items-center justify-center p-3 text-gray-500 cursor-pointer bg-cover bg-center"
      ></div>
      <div class="w-full p-3">
        <div class="flex justify-between mb-10">
          <div>
            <h3 class="font-bold">{{ goal.name }}</h3>
            <p class="font-bold text-base">{{ goal.amount | currency }}</p>
          </div>
          <div>
            <button @click="$emit('edit-goal', goal)">
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
            <span v-if="goal.hasDeadline">{{ goal.achieveBy | date }}</span>
            <span v-else>Any time</span>
          </p>
          <p v-if="goal.hasDeadline" class="text-xs">
            {{ goal.totalPerMonth | currency }}/month
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    goal: {
      type: Object,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped></style>
