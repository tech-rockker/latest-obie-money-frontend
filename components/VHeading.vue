<template>
  <div class="v-heading">
    <p class="v-heading-section mb-2">{{ section }}</p>
    <div class="flex items-center">
      <div v-if="imageSrc" class="w-14 pr-2">
        <img :src="imageSrc" :alt="title" />
      </div>
      <div>
        <h1 class="v-heading-title">{{ title }}</h1>
        <h2 class="v-heading-subtitle">{{ subtitle }}</h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      default: '',
    },
    section: {
      type: String,
      default: '',
    },
    imageSrc: {
      type: String,
      default: '',
    },
  },
}
</script>

<style></style>
