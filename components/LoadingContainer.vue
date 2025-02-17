<template>
  <div>
    <div key="loading" v-if="loading" class="">
      <img class="mx-auto" src="/loader.svg" alt="loading" />
    </div>
    <div v-else>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    loading: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style>
</style>