<template>
  <div class="p-3 flex flex-col min-h-screen">
    <VIndex :categories="categories" :graphic-buttons="true"></VIndex>
  </div>
</template>

<script>
export default {
  data() {
    return {
      categories: [
        {
          label: 'Partners',
          steps: [
            {
              label: 'Cashflow & Spending',
              to: '/partners/cashflow',
            },
            {
              label: 'Sustainable Biz',
              to: '/partners/sustainable-biz',
            },
            {
              label: 'Investing',
              to: '/partners/investing',
            },
            {
              label: 'Super',
              to: '/partners/super',
            },
            {
              label: 'Property',
              to: '/partners/property',
            },
            {
              label: 'Insurance',
              to: '/partners/insurance',
            },
            {
              label: 'Estate Planning',
              to: '/partners/estate-planning',
            },
            {
              label: 'Move Your Money',
              to: '/partners/move-your-money',
            },
            {
              label: 'Government Services',
              to: '/partners/government-services',
            },
            {
              label: 'Comparison Sites',
              to: '/partners/comparison-sites',
            },
          ],
        },
      ],
    }
  },
}
</script>

<style scoped></style>
