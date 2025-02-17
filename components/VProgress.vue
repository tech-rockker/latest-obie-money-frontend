<template>
  <div class="flex mb-6">
    <div class="flex items-center">
      <div
        class="bg-orange w-8 h-8 flex items-center justify-center font-bold text-sm rounded-md"
      >
        <span> {{ percentage }}<span class="text-xs font-normal">%</span></span>
      </div>
      <div class="arrow-right"></div>
    </div>
    <div class="relative w-full ml-3">
      <div class="border border-outline bg-transparent flex rounded-md">
        <span
          class="text-xs w-full text-purple font-semibold px-3 py-2 text-center border-r border-outline"
          >Optimise</span
        >
        <span
          class="text-xs text-purple px-3 py-2 text-center border-r border-outline"
          >Maximise</span
        >
        <span class="text-xs text-purple px-3 py-2 text-center">Protect</span>
      </div>
      <div
        class="absolute bottom-0 w-full h-1 bg-outline rounded-b-md overflow-hidden"
      >
        <div
          :style="{ width: `${percentage}%` }"
          class="h-full bg-orange"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    percentage: {
      type: Number,
      default: 0,
    },
  },
}
</script>

<style></style>
