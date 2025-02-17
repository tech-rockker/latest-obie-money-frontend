<template>
  <div class="relative">
    <div
      aria-hidden="true"
      class="h-24 bg-contain bg-center bg-no-repeat mb-2"
      :class="[!reward.has_reward && 'saturate-0 opacity-50', '']"
      :style="{ backgroundImage: `url(/rewards/${reward.image_url})` }"
    ></div>
    <div class="flex">
      <button
        @click="assignReward(reward.id)"
        :disabled="loading || !reward.id"
        :class="[
          reward.has_reward
            ? 'bg-green-500 border-green-500'
            : 'border-gray-300 text-gray-300 hover:bg-gray-100 hover:text-gray-400 focus:bg-gray-100 focus:text-gray-400',
          'w-5 h-5 mr-1 flex-none rounded-full flex items-center justify-center text-white border',
        ]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          class="w-4 h-4"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 12.611 8.923 17.5 20 6.5"
          />
        </svg>
      </button>
      <p
        :class="[
          reward.has_reward ? 'text-black' : 'text-gray-400',
          'font-medium text-sm',
        ]"
      >
        {{ reward.title }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    reward: {
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
    assignReward(id) {
      this.loading = true
      this.$axios
        .post('/api/assign-reward', { reward_id: id })
        .then((response) => {
          this.$auth.fetchUser()
          this.$toast.success(response.data.message)
        })
        .finally(() => {
          this.loading = false
        })
    },
  },
}
</script>

<style></style>
