<template>
  <button
    type="button"
    class="text-red-600 text-xs block mx-auto text-center font-medium mt-3"
    @click="$emit('click')"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {}
</script>

<style></style>
