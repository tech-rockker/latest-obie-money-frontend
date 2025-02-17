<template>
  <div :class="[backgroundClasses]" class="rounded-md flex p-2 mb-4">
    <div class="flex items-center mr-2">
      <svg
        :class="[textClasses]"
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        fill="none"
      >
        <g fill="currentColor" clip-path="url(#a)">
          <path
            d="M5.442 4.614 3.785 2.957a.586.586 0 1 0-.828.828l1.657 1.657a.586.586 0 1 0 .828-.828ZM2.969 9.414H.586a.586.586 0 1 0 0 1.172h2.383a.586.586 0 1 0 0-1.172ZM19.414 9.414h-2.383a.586.586 0 1 0 0 1.172h2.383a.586.586 0 1 0 0-1.172ZM17.043 2.957a.586.586 0 0 0-.828 0l-1.657 1.657a.586.586 0 1 0 .828.828l1.657-1.657a.586.586 0 0 0 0-.828ZM10 0a.586.586 0 0 0-.586.586v2.383a.586.586 0 1 0 1.172 0V.586A.586.586 0 0 0 10 0ZM13.281 5.863a5.297 5.297 0 0 0-4.547-.984 5.195 5.195 0 0 0-3.843 3.785c-.458 1.875.07 3.773 1.417 5.098.48.48.762 1.234.762 2.008v.128a.58.58 0 0 0 .586.586h4.688a.58.58 0 0 0 .586-.586v-.128c0-.762.293-1.54.808-2.043A5.277 5.277 0 0 0 15.273 10a5.266 5.266 0 0 0-1.992-4.137ZM10 8.243c-.884 0-1.528.586-1.696 1.264a.586.586 0 0 1-1.138-.281C7.456 8.054 8.557 7.07 10 7.07a.586.586 0 1 1 0 1.172ZM7.656 17.656v.586c0 .97.789 1.758 1.758 1.758h1.172a1.76 1.76 0 0 0 1.758-1.758v-.586H7.656Z"
          />
        </g>
        <defs>
          <clipPath id="a">
            <path fill="#fff" d="M0 0h20v20H0z" />
          </clipPath>
        </defs>
      </svg>
    </div>
    <div>
      <p :class="[textClasses]" class="font-semibold">{{ title }}</p>
      <p v-html="description"></p>
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
    description: {
      type: String,
      default: '',
    },
    variant: {
      type: String,
      default: 'green',
    },
  },
  computed: {
    backgroundClasses() {
      switch (this.variant) {
        case 'red':
          return 'bg-red-100'

        default:
          return 'bg-light-green'
      }
    },
    textClasses() {
      switch (this.variant) {
        case 'red':
          return 'text-red-600'

        default:
          return 'text-green-2'
      }
    },
  },
}
</script>

<style></style>
