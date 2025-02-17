<template>
  <div class="v-card" :class="[color, padding]">
    <slot></slot>
    <div v-if="!!$slots['top']">
      <slot name="top"></slot>
    </div>
    <div v-if="!!$slots['bottom']">
      <slot name="bottom"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: 'white',
    },
    padding: {
      type: String,
      default: 'p-4',
    },
  },
}
</script>

<style></style>
