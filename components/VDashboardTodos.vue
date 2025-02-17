<template>
  <div>
    <div class="flex justify-between items-center">
      <h2 class="text-orange text-lg font-bold mb-2">
        Setup and Track Your Bank
      </h2>
      <p class="text-orange flex items-center">
        <span class="font-semibold mr-1">All</span>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM8.6914 8L5.59961 11.1342L6.45364 12L10.3996 8L6.45364 4L5.59961 4.8658L8.6914 8Z"
            fill="#EE885A"
          />
        </svg>
      </p>
    </div>
    <div class="mb-4">
      <a
        v-for="item in todos"
        :href="item.href"
        target="_blank"
        :key="item.icon"
        class="flex border border-orange bg-orange-3 rounded-md mb-2"
      >
        <div class="w-full p-3 flex items-center">
          <p class="text-gray-dark text-base font-medium">
            {{ item.content }}
          </p>
        </div>
        <div class="bg-[#F7CA97] flex flex-col rounded-r-md">
          <div class="flex-1 p-1 flex items-center justify-center">
            <img class="w-5" aria-hidden="true" :src="item.icon" />
          </div>
          <div class="flex items-center justify-center flex-1 p-1">
            <div class="border border-white opacity-50 rounded-md p-1 w-6 h-6">
              <svg
                width="14"
                height="12"
                viewBox="0 0 14 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="w-full"
              >
                <path
                  d="M12.04 0L4.89999 7.20998L1.95999 4.26999L0 6.22997L4.89999 11.2L14 2.02998L12.04 0Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
        </div>
      </a>
    </div>
    <div>
      <a
        href="https://up.com.au/features/savers/"
        target="_blank"
        class="block hover:underline shadow-lg bg-white rounded-lg overflow-hidden"
      >
        <img src="/up-image.png" alt="Up" />
        <span class="inline-block p-4 text-gray-dark text-base font-medium"
          >Check out Australia’s Best Digital Bank and get setup in
          minutes</span
        >
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SandboxPage',
  data() {
    return {
      todos: [
        {
          content:
            'Setup your bank accounts and automate your transfers. Use your own bank or check out a new one',
          icon: '/growth.svg',
          href: 'https://up.com.au/',
        },
      ],
    }
  },
}
</script>
