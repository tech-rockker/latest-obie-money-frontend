<template>
  <div>
    <img v-if="imageSrc" class="w-14 mb-2" :src="imageSrc" :alt="title" />
    <h2 v-if="subtitle" class="text-orange-2 font-bold text-xs mb-2">
      {{ subtitle }}
    </h2>
    <h1 class="text-gray-dark text-2xl font-bold mb-2">{{ title }}</h1>
    <p v-if="content" class="text-gray-dark opacity-70">{{ content }}</p>
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
    imageSrc: {
      type: String,
      default: '',
    },
    content: {
      type: String,
      default: '',
    },
  },
}
</script>

<style></style>
