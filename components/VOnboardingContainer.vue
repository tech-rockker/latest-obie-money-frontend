<template>
  <div class="min-h-screen flex flex-col">
    <!-- <div class="w-full top-0 left-0 absolute">
      <img class="w-full" :src="imageSrc" aria-hidden="true" />
    </div> -->
    <div class="relative">
      <div class="p-3 flex items-center justify-between">
        <!-- <VObieYourMoney /> -->
        <div v-if="characterSrc" class="md:hidden">
          <img class="h-16" :src="characterSrc" aria-hidden="true" />
        </div>
      </div>
    </div>
    <div class="p-3 relative">
      <slot></slot>
    </div>
    <div class="p-3 relative flex space-x-3">
      <slot name="button"></slot>
    </div>
    <div v-if="characterSrc" class="my-6 px-3 hidden md:block">
      <img class="mx-auto" :src="characterSrc" aria-hidden="true" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imageSrc: {
      type: String,
      default: '',
    },
    characterSrc: {
      type: String,
      default: '',
    },
  },
}
</script>

<style></style>
