<template>
  <div class="px-4">
    <AdminNav></AdminNav>
    <div class="sm:flex sm:items-center">
      <div class="sm:flex-auto">
        <h1 class="text-base mb-2 font-semibold leading-6 text-gray-900">
          Reports
        </h1>
        <p class="mt-2 text-sm text-gray-700">
          A list of all the users including their name, email and verified
          status.
        </p>
      </div>
    </div>
    <div>
      <div class="flow-root">
        <div class="overflow-x-auto">
          <div class="inline-block min-w-full py-2 align-middle">
            <table class="text-left divide-y divide-gray-300">
              <tr>
                <th
                  class="py-3.5 pr-2 text-left text-xs font-semibold text-gray-900"
                >
                  Name
                </th>
                <th
                  class="py-3.5 pr-2 text-left text-xs font-semibold text-gray-900"
                >
                  Link
                </th>
              </tr>
              <tbody class="divide-y divide-gray-200">
                <tr
                  :key="report"
                  v-for="report in [
                    'debts',
                    'users',
                    'expenses',
                    'investments',
                    'goals',
                    'savings',
                  ]"
                >
                  <td
                    class="whitespace-nowrap capitalize py-3 pl-4 pr-2 text-xs font-medium text-gray-900 sm:pl-0"
                  >
                    {{ report }}
                  </td>
                  <td class="whitespace-nowrap px-1 py-3 text-xs text-gray-500">
                    <button
                      class="text-orange text-xs"
                      @click="downloadReport(report)"
                    >
                      Download
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  middleware: ['admin'],
  layout: 'admin',
  methods: {
    downloadReport(report) {
      this.$axios
        .post(`/api/admin/reports/${report}`, {}, { responseType: 'blob' })
        .then((response) => {
          const url = window.URL.createObjectURL(new Blob([response.data]))
          const link = document.createElement('a')
          link.href = url
          const fileDate = moment().format('YYYY-MM-DD HHmmss')
          link.setAttribute('download', `${report}-data-${fileDate}.xlsx`)
          document.body.appendChild(link)
          link.click()
        })
    },
  },
}
</script>

<style></style>
