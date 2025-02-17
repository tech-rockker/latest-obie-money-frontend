<template>
  <div>
    <div class="px-4">
      <AdminNav></AdminNav>
      <div>
        <div class="sm:flex sm:items-center">
          <div class="sm:flex-auto">
            <h1 class="text-base font-semibold leading-6 text-gray-900">
              Users
            </h1>
            <p class="mt-2 text-sm text-gray-700">
              A list of all the users including their name, email and verified
              status.
            </p>
          </div>
        </div>
      </div>
      <div class="py-4">
        <label
          for="name"
          class="block text-sm font-medium leading-6 text-gray-900"
          >Search Users</label
        >
        <div class="relative mt-1">
          <input
            v-model="search"
            type="text"
            name="search"
            id="search"
            class="peer block w-full border-0 bg-gray-50 py-1.5 px-3 text-gray-900 focus:outline-none focus:ring-0 sm:text-sm sm:leading-6"
            placeholder="Search Users"
          />
          <div
            class="absolute inset-x-0 bottom-0 border-t border-gray-300 peer-focus:border-t-2 peer-focus:border-orange"
            aria-hidden="true"
          ></div>
        </div>
      </div>
      <VTable v-if="sortedUsers.length">
        <thead>
          <tr>
            <VTableHeader
              @sort="handleSort($event)"
              sort-key="name"
              :active-key="sortBy.key"
              :active-direction="sortBy.direction"
              >Name</VTableHeader
            >
            <VTableHeader
              @sort="handleSort($event)"
              sort-key="email"
              :active-key="sortBy.key"
              :active-direction="sortBy.direction"
              >Email</VTableHeader
            >
            <VTableHeader
              @sort="handleSort($event)"
              sort-key="created_at"
              :active-key="sortBy.key"
              :active-direction="sortBy.direction"
              >Created At</VTableHeader
            >
            <VTableHeader
              @sort="handleSort($event)"
              sort-key="last_logged_in_at"
              :active-key="sortBy.key"
              :active-direction="sortBy.direction"
              >Last Logged In</VTableHeader
            >

            <VTableHeader
              @sort="handleSort($event)"
              sort-key="verified_at"
              :active-key="sortBy.key"
              :active-direction="sortBy.direction"
              >Verified</VTableHeader
            >
            <VTableHeader class="text-right">Actions</VTableHeader>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-200">
          <tr v-for="user in sortedUsers" :key="user.id">
            <VTableCell class="font-medium text-gray-900 sm:pl-0">
              {{ user.name }}
            </VTableCell>
            <VTableCell>
              <a :href="`mailto:${user.email}`">{{ user.email }}</a>
            </VTableCell>
            <VTableCell>
              {{ user.created_at }}
            </VTableCell>
            <VTableCell>
              {{ user.last_logged_in_at || '-' }}
            </VTableCell>
            <VTableCell class="font-medium">
              <div class="flex justify-between">
                <span>
                  <svg
                    v-if="user.verified_at"
                    class="w-4 h-4 text-green-500"
                    data-slot="icon"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      clip-rule="evenodd"
                      fill-rule="evenodd"
                      d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14Zm3.844-8.791a.75.75 0 0 0-1.188-.918l-3.7 4.79-1.649-1.833a.75.75 0 1 0-1.114 1.004l2.25 2.5a.75.75 0 0 0 1.15-.043l4.25-5.5Z"
                    ></path>
                  </svg>
                  <svg
                    v-else
                    class="w-4 h-4 text-red-500"
                    data-slot="icon"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      clip-rule="evenodd"
                      fill-rule="evenodd"
                      d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14Zm2.78-4.22a.75.75 0 0 1-1.06 0L8 9.06l-1.72 1.72a.75.75 0 1 1-1.06-1.06L6.94 8 5.22 6.28a.75.75 0 0 1 1.06-1.06L8 6.94l1.72-1.72a.75.75 0 1 1 1.06 1.06L9.06 8l1.72 1.72a.75.75 0 0 1 0 1.06Z"
                    ></path>
                  </svg>
                </span>
                <button
                  v-if="user.verified_at"
                  type="button"
                  class="hover:underline focus:underline"
                  @click="unverifyUser(user.id)"
                >
                  Unverify
                </button>
                <button
                  v-else
                  @click="verifyUser(user.id)"
                  type="button"
                  class="text-gray-600 hover:underline focus:underline"
                >
                  Verify
                </button>
              </div>
            </VTableCell>
            <VTableCell class="text-right">
              <button
                @click="deleteUser(user.id)"
                type="button"
                class="text-red-600 hover:underline focus:underline"
              >
                Delete
              </button>
            </VTableCell>
          </tr>

          <!-- More people... -->
        </tbody>
      </VTable>
      <div class="italic text-gray-500 text-base" v-else>
        {{
          search
            ? `Your search for "${search}" didn't return any users.`
            : 'No Users Found'
        }}
      </div>
    </div>
  </div>
</template>

<script>
import Fuse from 'fuse.js'
import moment from 'moment'
export default {
  middleware: ['admin'],
  layout: 'admin',
  data() {
    return {
      fuseOptions: {
        keys: ['name', 'email'],
        threshold: 0.3,
      },
      search: '',
      sortBy: {
        key: 'name',
        direction: 'asc',
      },
      verifying: false,
      users: [],
    }
  },
  computed: {
    filteredUsers() {
      if (!this.search) return this.users

      const results = new Fuse(this.users, this.fuseOptions)
        .search(this.search)
        .map((result) => result.item)
      return results
    },
    sortedUsers() {
      const users = this.filteredUsers
      const key = this.sortBy.key
      const direction = this.sortBy.direction
      if (['name', 'email'].includes(key)) {
        return users.toSorted((a, b) => {
          let modifier = 1
          if (direction === 'desc') modifier = -1
          if (a[key].toLowerCase() < b[key].toLowerCase()) return -1 * modifier
          if (a[key].toLowerCase() > b[key].toLowerCase()) return 1 * modifier
          return 0
        })
      } else if (['created_at', 'last_logged_in_at'].includes(key)) {
        return users.toSorted((a, b) => {
          let modifier = 1

          const momentFormat = 'DD/MM/YYYY hh:mm:ss'
          const momentA = a[key] ? moment(a[key], momentFormat) : moment()
          const momentB = b[key] ? moment(b[key], momentFormat) : moment()
          if (direction === 'desc') modifier = -1
          if (momentA.isBefore(momentB)) return -1 * modifier
          if (momentA.isAfter(momentB)) return 1 * modifier
          return 0
        })
      } else {
        return users.toSorted((a, b) => {
          let modifier = 1
          if (direction === 'desc') modifier = -1
          if (a[key]) return -1 * modifier
          if (!a[key]) return 1 * modifier
          return 0
        })
      }
      // return this.users.sort((a, b) => {
      //   let modifier = 1
      //   if (this.sortBy.direction === 'desc') modifier = -1
      //   if (a[this.sortBy.key] < b[this.sortBy.key]) return -1 * modifier
      //   if (a[this.sortBy.key] > b[this.sortBy.key]) return 1 * modifier
      //   return 0
      // })
    },
  },
  created() {
    this.getUsers()
  },
  methods: {
    deleteUser(id) {
      if (confirm('Are you sure you want to delete this user?')) {
        this.$axios.delete(`/api/admin/users/${id}`).then((response) => {
          this.$toast.success(response.data.message)
          this.getUsers()
        })
      }
    },
    handleSort(name) {
      if (this.sortBy.key === name) {
        this.sortBy.direction = this.sortBy.direction === 'asc' ? 'desc' : 'asc'
      } else {
        this.sortBy.key = name
        this.sortBy.direction = 'asc'
      }
    },
    downloadReport(report) {
      this.$axios.post(`/api/admin/reports/${report}`).then((response) => {
        const url = window.URL.createObjectURL(new Blob([response.data]))
        const link = document.createElement('a')
        link.href = url
        const fileDate = moment().format('YYYY-MM-DD HHmmss')
        link.setAttribute('download', `${report}-data-${fileDate}.xlsx`)
        document.body.appendChild(link)
        link.click()
      })
    },
    verifyUser(id) {
      this.verifying = true
      this.$axios
        .post(`/api/admin/users/${id}/verify`)
        .then((response) => {
          this.$toast.success(response.data.message)
          // Set the users verified_at to the current time
          this.users = this.users.map((user) => {
            if (user.id === id) {
              user.verified_at = new Date().toISOString()
            }
            return user
          })
        })
        .catch((error) => {
          this.$toast.error(error.response.data.status)
        })
        .finally(() => {
          this.verifying = false
        })
    },
    unverifyUser(id) {
      this.$axios
        .post(`/api/admin/users/${id}/unverify`)
        .then((response) => {
          this.$toast.success(response.data.message)
          // Set the users verified_at to null
          this.users = this.users.map((user) => {
            if (user.id === id) {
              user.verified_at = null
            }
            return user
          })
        })
        .catch((error) => {
          this.$toast.error(error.response.data.status)
        })
        .finally(() => {
          this.verifying = false
        })
    },
    getUsers() {
      this.$axios
        .get(`/api/admin/users`)
        .then((response) => {
          this.users = response.data.data
        })
        .catch((error) => {
          this.$toast.error(error.response.data.status)
        })
    },
    // assignAdmin(id) {
    //   this.$axios
    //     .post(`/api/admin/users/${id}/assign-admin`)
    //     .then((response) => {
    //       this.$toast.success(response.data.status)
    //     })
    //     .catch((error) => {
    //       this.$toast.error(error.response.data.status)
    //     })
    // },
  },
}
</script>

<style></style>
