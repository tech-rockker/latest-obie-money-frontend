<template>
  <div :class="[visible ? 'mb-6' : 'mb-1']">
    <div class="flex items-center justify-between">
      <VDashboardTitle :to="to">
        <span class="inline-block w-7">{{ step }}.</span>
        {{ title }}
      </VDashboardTitle>
      <button v-if="hasDefaultSlot" @click="visible = !visible" type="button">
        <svg
          class="w-8 h-8 text-orange"
          :class="{ 'rotate-180': visible }"
          data-slot="icon"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            clip-rule="evenodd"
            fill-rule="evenodd"
            d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
          ></path>
        </svg>
      </button>
    </div>
    <div v-if="hasDefaultSlot && visible">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    hasDefaultSlot() {
      return !!this.$slots.default
    },
  },
  data() {
    return {
      visible: false,
    }
  },
  props: {
    title: {
      type: String,
      default: '',
    },
    to: {
      type: String,
      default: '',
    },
    step: {
      type: Number,
      default: 0,
    },
  },
}
</script>

<style lang="scss" scoped></style>
