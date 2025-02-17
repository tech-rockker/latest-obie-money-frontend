<template>
  <a
    :class="card.padding || 'px-2 pb-5'"
    :href="card.href"
    target="_blank"
    class="w-full flex flex-1"
  >
    <div
      class="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col flex-1 border-2"
    >
      <div
        :class="[
          card.backgroundSize || 'bg-cover',
          card.imageAlignment || 'bg-bottom',
          card.imageHeight || 'h-48',
          'bg-no-repeat',
        ]"
        :style="{ backgroundImage: `url(${card.image})` }"
      ></div>
      <div class="p-4">
        <h2 :class="[card.titleClasses || 'font-semibold text-base']">
          {{ card.title }}
        </h2>
      </div>
    </div>
  </a>
</template>

<script>
export default {
  props: {
    card: {
      type: Object,
      required: true,
    },
  },
}
</script>
