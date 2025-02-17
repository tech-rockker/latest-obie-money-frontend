<template>
  <div class="mb-4">
    <div>
      <div class="border-b border-gray-200">
        <nav class="-mb-px flex space-x-8" aria-label="Tabs">
          <!-- Current: "border-orange text-orange", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" -->
          <NuxtLink
            v-for="link in [
              { name: 'Users', path: '/admin/users' },
              { name: 'Reports', path: '/admin/reports' },
            ]"
            :key="link.name"
            :to="link.path"
            class="text-gray-500 hover:border-gray-300 hover:text-gray-700 whitespace-nowrap py-4 px-1 text-sm font-medium"
            active-class="border-orange text-orange border-b-2"
            >{{ link.name }}</NuxtLink
          >
          <!-- <NuxtLink
            to="/admin/reports"
            class="border-orange text-orange whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium"
            aria-current="page"
            >Reports</NuxtLink
          > -->
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
