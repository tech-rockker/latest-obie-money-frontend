<template>
  <div
    class="main-background relative min-h-screen font-sans text-sm antialiased"
  >
    <div
      class="geo-background w-full h-full absolute top-0 right-0 pointer-events-none"
    ></div>
    <div class="relative mx-auto min-h-screen container flex flex-col">
      <VTheNav></VTheNav>
      <transition name="fade" mode="out-in">
        <div class="flex-1 flex flex-col">
          <!-- <VDashboardTopnav /> -->
          <nuxt></nuxt>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
