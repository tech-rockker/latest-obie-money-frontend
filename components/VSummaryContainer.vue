<template>
  <div class="shadow-md rounded-lg">
    <div
      :class="[color === 'orange' ? 'bg-orange-3' : 'bg-green-light']"
      class="px-3 py-1 flex rounded-t-lg"
    >
      <h2 class="uppercase tracking-tight text-gray-1 mr-2 font-bold text-sm">
        {{ title }}
      </h2>
      <p
        :class="[color === 'orange' ? 'text-orange-2' : 'text-green-2']"
        class="font-bold text-sm"
      >
        {{ percentage | percentage }}
      </p>
    </div>
    <div>
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
    color: {
      type: String,
      default: 'orange',
    },
    percentage: {
      type: Number,
      default: 0,
    },
  },
}
</script>

<style></style>
