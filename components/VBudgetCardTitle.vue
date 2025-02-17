<template>
  <button class="flex items-center w-full" @click="$emit('input', !value)">
    <div v-if="imageSrc" class="flex w-8 h-8 mr-3">
      <img
        class="object-contain"
        :src="imageSrc"
        alt="Minimum Debt Repayments"
      />
    </div>
    <div>
      <h2 class="font-bold text-lg leading-tight">{{ title }}</h2>
    </div>
    <div v-if="showControls" class="ml-auto p-1">
      <svg
        v-if="value"
        class="text-gray-400 w-4 h-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M5 15l7-7 7 7"
        ></path>
      </svg>
      <svg
        v-else
        class="text-gray-400 w-4 h-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M19 9l-7 7-7-7"
        ></path>
      </svg>
    </div>
  </button>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
    imageSrc: {
      type: String,
      default: '',
    },
    value: {
      type: Boolean,
      default: true,
    },
    showControls: {
      type: Boolean,
      default: true,
    },
  },
}
</script>

<style></style>
