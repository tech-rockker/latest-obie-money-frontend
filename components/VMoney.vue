<template>
  <input
    v-mask="currencyMask"
    :value="value"
    type="text"
    placeholder="$100.00"
    @input="handleInput"
  />
</template>
<script>
import createNumberMask from 'text-mask-addons/dist/createNumberMask'
const currencyMask = createNumberMask({
  prefix: '$',
  allowDecimal: true,
  includeThousandsSeparator: true,
  allowNegative: false,
})
export default {
  props: {
    value: {
      type: [String, Number],
      default: 0,
    },
  },
  data: () => ({
    currencyMask,
  }),
  methods: {
    handleInput($event) {
      if (!$event.isTrusted) {
        return
      }
      const value = $event.target.value.replace(/\$/g, '').replace(/,/g, '')
      this.$emit('input', parseFloat(value))
    },
  },
}
</script>
