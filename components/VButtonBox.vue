<template>
  <div class="bg-orange-3 text-dark-purple rounded-md text-center">
    <div class="p-3">
      <slot name="content">
        <p class="font-semibold leading-tight" v-html="subtitle"></p>
        <p class="font-bold text-2xl mt-2">
          {{ title }}
        </p>
      </slot>
    </div>
    <div class="p-3">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
    subtitle: {
      type: String,
      default: '',
    },
  },
}
</script>

<style></style>
