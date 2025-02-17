<template>
  <NuxtLink v-if="to" :to="to"
    ><h2 class="text-orange text-2xl font-bold hover:underline mb-2">
      <slot></slot></h2
  ></NuxtLink>
  <h2 v-else class="text-orange text-2xl font-bold mb-2"><slot></slot></h2>
</template>

<script>
export default {
  props: {
    to: {
      type: String,
      default: '',
    },
  },
}
</script>

<style></style>
