<template>
  <div>
    <vue-slider
      :value="value"
      :min="min"
      :max="computedMax"
      :dot-size="[30, 19]"
      tooltip="none"
      :height="8"
      :interval="5"
      :contained="true"
      :process-style="{
        backgroundColor: '#6FCF97',
      }"
      :rail-style="{
        backgroundColor: '#F0F0F0',
      }"
      @change="$emit('input', $event || 0)"
    >
      <template #dot>
        <img draggable="false" src="/slider-dot.svg" alt="slider dot" />
      </template>
    </vue-slider>
    <div class="flex justify-between text-gray-1">
      <p>{{ min | currency }}</p>
      <p>{{ computedMax | currency }}</p>
    </div>
  </div>
</template>

<script>
import VueSlider from 'vue-slider-component'
import 'vue-slider-component/theme/antd.css'

export default {
  components: {
    VueSlider,
  },
  props: {
    value: {
      type: [Number, String],
      default: 0,
    },
    min: {
      type: Number,
      default: 0,
    },
    max: {
      type: Number,
      default: 1000,
    },
  },
  computed: {
    computedMax() {
      const max = this.max
      return Math.floor(max / 5) * 5
    },
  },
}
</script>
