<template>
  <button
    :disabled="disabled"
    :class="[colorClasses]"
    class="button-next text-lg relative"
    :type="type"
    @click="$emit('click')"
  >
    <slot></slot>
    <span v-if="subtitle"
      ><br />
      <span class="text-xs font-normal">{{ subtitle }}</span></span
    >
    <div
      v-if="showIcon"
      class="absolute top-0 right-0 bottom-0 flex items-center pr-3"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        fill="none"
      >
        <path
          fill="#fff"
          fill-rule="evenodd"
          d="M16 30c7.732 0 14-6.268 14-14S23.732 2 16 2 2 8.268 2 16s6.268 14 14 14Zm.92-14-4.113 4.114 1.136 1.136 5.25-5.25-5.25-5.25-1.136 1.136L16.92 16Z"
          clip-rule="evenodd"
        />
      </svg>
    </div>
    <div
      v-if="preIcon"
      class="absolute top-0 left-0 bottom-0 flex items-center pl-3"
    >
      <img class="w-8" :src="preIcon" aria-hidden="true" />
    </div>
  </button>
</template>

<script>
export default {
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    showIcon: {
      type: Boolean,
      default: true,
    },
    color: {
      type: String,
      default: 'blue',
    },
    type: {
      type: String,
      default: 'button',
    },
    subtitle: {
      type: String,
      default: '',
    },
    preIcon: {
      type: String,
      default: '',
    },
  },
  computed: {
    colorClasses() {
      switch (this.color) {
        case 'orange':
          return 'orange'
        case 'blue-dark':
          return 'blue-dark'
        case 'white':
          return 'white'
        case 'red':
          return 'red'

        default:
          return 'blue'
      }
    },
  },
}
</script>

<style></style>
