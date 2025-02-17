<template>
  <div class="flex items-center mb-2" :class="[computedTextAlignment]">
    <img v-if="imageSrc" class="mr-2" aria-hidden="true" :src="imageSrc" />
    <h2 class="text-dark-purple font-bold text-base">{{ title }}</h2>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
    imageSrc: {
      type: String,
      default: '',
    },
    textAlignment: {
      type: String,
      default: 'left',
    },
  },
  computed: {
    computedTextAlignment() {
      switch (this.textAlignment) {
        case 'center':
          return 'justify-center'

        default:
          return 'justify-start'
      }
    },
  },
}
</script>

<style></style>
