<template>
  <button
    v-close-popover
    class="block w-full text-left px-4 text-sm font-light py-1.5 min-w-[120px]"
    @click="$emit('click')"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {}
</script>

<style></style>
