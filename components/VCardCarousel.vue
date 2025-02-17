<template>
  <div class="-mx-4 mb-6">
    <div class="">
      <vue-glide :per-view="1" :gap="0" :peek="{ before: 15, after: 100 }">
        <vue-glide-slide v-for="card in cards" :key="card.title">
          <VCardCarouselCard :card="card"></VCardCarouselCard>
        </vue-glide-slide>
      </vue-glide>
    </div>
  </div>
</template>

<script>
import { Glide, GlideSlide } from 'vue-glide-js'
import 'vue-glide-js/dist/vue-glide.css'

export default {
  components: {
    [Glide.name]: Glide,
    [GlideSlide.name]: GlideSlide,
  },
  props: {
    cards: {
      type: Array,
      default: () => [],
    },
  },
}
</script>
