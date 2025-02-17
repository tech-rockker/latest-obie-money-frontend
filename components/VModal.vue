<template>
  <!-- <Portal> -->
  <modal
    :adaptive="true"
    :scrollable="true"
    width="90%"
    :max-width="448"
    height="auto"
    :shift-y="1"
    :name="name"
    @before-open="$emit('before-open', $event)"
    :click-to-close="clickToClose"
  >
    <div :class="[includePadding ? 'p-6' : '']">
      <button
        v-if="!clickToClose"
        type="button"
        @click="$modal.hide(name)"
        class="absolute top-0 right-0 mt-6 mr-6 rounded-full bg-gray-100 hover:bg-gray-200 focus:bg-gray-200 text-gray-500 p-1"
      >
        <span class="sr-only">Close</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
      </button>
      <slot></slot>
    </div>
  </modal>
  <!-- </Portal> -->
</template>

<script>
// import { Portal } from '@linusborg/vue-simple-portal'
export default {
  // components: {
  //   Portal,
  // },
  props: {
    clickToClose: {
      type: Boolean,
      default: true,
    },
    name: {
      type: String,
      default: '',
    },
    includePadding: {
      type: Boolean,
      default: true,
    },
  },
}
</script>

<style></style>
