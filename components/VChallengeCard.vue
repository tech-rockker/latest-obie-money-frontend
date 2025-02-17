<template>
  <div class="flex bg-white rounded-md shadow-lg min-h-[300px] mb-6 w-full">
    <div
      class="bg-orange rounded-l-md p-3 px-1 flex items-center justify-center font-semibold"
    >
      {{ challenge.id }}
    </div>
    <div class="p-3 flex flex-col justify-between">
      <p class="text-xl font-bold">{{ challenge.title }}</p>
      <VChallengeCardDescription
        :challenge="challenge"
      ></VChallengeCardDescription>
      <div>
        <button
          :class="[loading && 'cursor-not-allowed opacity-30']"
          :disabled="loading"
          @click="toggleChallenge(challenge.id)"
          type="button"
          class="flex items-center space-x-2 text-green-500 p-2 hover:bg-gray-50 focus:bg-gray-50 rounded-md"
          v-if="challenge.completed"
        >
          <svg
            class="w-6"
            data-slot="icon"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              clip-rule="evenodd"
              fill-rule="evenodd"
              d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z"
            ></path>
          </svg>
          <span>Completed!</span>
        </button>
        <button
          :class="[loading && 'cursor-not-allowed opacity-30']"
          :disabled="loading"
          v-else
          @click="toggleChallenge(challenge.id)"
          class="flex items-center space-x-3"
        >
          <img class="w-14" src="/rewards/budget-nailed.png" alt="complete" />
          <span class="mt-4 inline-block">Click to mark as complete!</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    challenge: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      loading: false,
    }
  },
  methods: {
    toggleChallenge(id) {
      this.loading = true
      if (this.challenge.completed) {
        this.$axios
          .post(`/api/challenges/${id}/uncomplete`)
          .then(() => {
            this.$emit('uncomplete', id)
          })
          .finally(() => {
            this.loading = false
          })
      } else {
        this.$axios
          .post(`/api/challenges/${id}/complete`)
          .then(() => {
            this.$emit('complete', id)
          })
          .finally(() => {
            this.loading = false
          })
      }
    },
  },
}
</script>

<style>
</style>