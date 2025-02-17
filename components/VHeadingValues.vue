<template>
  <div :class="[textAlignment === 'right' ? 'text-right' : 'text-left']">
    <p class="text-xs" :class="[titleColor]">
      {{ title }}
    </p>
    <div
      class="flex items-center"
      :class="[textAlignment === 'right' ? 'justify-end' : 'justify-start']"
    >
      <p
        v-if="primaryValue !== null"
        class="font-bold text-xl"
        :class="[valueColor]"
      >
        {{ primaryValueFiltered }}
      </p>
      <VBadge v-if="secondaryValue !== null" :color="badgeColor">{{
        secondaryValueFiltered
      }}</VBadge>
      <slot name="button"></slot>
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
    percentage: {
      type: Number,
      default: 0,
    },
    amount: {
      type: Number,
      default: 0,
    },
    mode: {
      type: String,
      default: 'light',
    },
    primaryValue: {
      type: [String, Number],
      default: null,
    },
    primaryFilter: {
      type: String,
      default: 'percentage',
    },
    secondaryValue: {
      type: [String, Number],
      default: null,
    },
    secondaryFilter: {
      type: String,
      default: 'currency',
    },
    textAlignment: {
      type: String,
      default: 'left',
    },
  },
  computed: {
    primaryValueFiltered() {
      return this.getFilteredValue(this.primaryValue, this.primaryFilter)
    },
    secondaryValueFiltered() {
      return this.getFilteredValue(this.secondaryValue, this.secondaryFilter)
    },
    badgeColor() {
      switch (this.mode) {
        case 'light':
          return 'heading-gray'
        // return 'heading-blue'
        case 'yellow':
          return 'heading-yellow'

        default:
          return 'heading-orange'
      }
    },
    titleColor() {
      switch (this.mode) {
        case 'white':
          return 'text-white'
        case 'light':
          return 'text-gray-dark'
        case 'yellow':
          return 'text-gray-dark'

        default:
          return 'text-gray-dark'
      }
    },
    valueColor() {
      switch (this.mode) {
        case 'white':
          return 'text-white'
        case 'light':
          return 'text-gray-dark'
        case 'yellow':
          return 'text-gray-dark'

        default:
          return 'text-gray-dark'
      }
    },
  },
  methods: {
    getFilteredValue(value, filter) {
      if (filter) {
        return this.$options.filters[filter](value)
      } else {
        return value
      }
    },
  },
}
</script>

<style></style>
