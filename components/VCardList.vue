<template>
  <div class="space-y-2 mb-4">
    <div v-for="card in cards" :key="card.title">
      <a
        class="bg-white border rounded-md shadow-lg p-3 transition duration-75 flex justify-between"
        :href="card.href"
        target="_blank"
      >
        <div>
          <p class="font-bold">{{ card.title }}</p>
          <p class="text-gray-500 text-xs mt-1">
            {{ card.description }}
          </p>
        </div>
        <div class="w-16 h-16 ml-4 flex-none">
          <img
            v-if="card.image"
            class="max-w-full max-h-full ml-auto"
            :src="card.image"
            :alt="card.title"
          />
        </div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cards: {
      type: Array,
      default: () => [],
    },
  },
}
</script>
