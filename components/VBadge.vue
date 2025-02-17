<template>
  <span :class="[colorClasses, sizeClasses]" class="rounded-md ml-2"
    ><slot></slot
  ></span>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: 'green',
    },
    size: {
      type: String,
      default: '',
    },
  },
  computed: {
    sizeClasses() {
      switch (this.size) {
        case 'lg':
          return 'text-lg font-bold px-1 py-1'

        default:
          return 'text-xs px-1.5 font-semibold'
      }
    },
    colorClasses() {
      switch (this.color) {
        case 'red':
          return 'text-red-700 bg-gray-2'
        case 'gray':
          return 'bg-gray-2'
        case 'heading-blue':
          return 'text-white bg-outline'
        case 'heading-yellow':
          // return 'text-yellow-1 bg-outline'
          return 'text-dark-dark bg-[#DEDCDA]'
        case 'heading-gray':
          return 'text-dark-dark bg-[#DEDCDA]'
        case 'heading-orange':
          return 'text-dark-purple bg-orange-1'
        default:
          return 'text-green-2 bg-green-light'
      }
    },
  },
}
</script>

<style></style>
