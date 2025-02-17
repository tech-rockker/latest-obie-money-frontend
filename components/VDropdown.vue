<template>
  <v-popover placement="bottom-end">
    <!-- This will be the popover target (for the events and position) -->
    <button class="p-1 text-gray-500">
      <svg
        class="w-4 h-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
        ></path>
      </svg>
    </button>

    <!-- This will be the content of the popover -->
    <template slot="popover"> <slot></slot> </template>
  </v-popover>
</template>

<script>
export default {}
</script>

<style></style>
