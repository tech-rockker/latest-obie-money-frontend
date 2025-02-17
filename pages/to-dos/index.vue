<template>
  <div class="p-3 flex flex-col min-h-screen">
    <div>
      <VIndex :categories="categories" :graphic-buttons="false"></VIndex>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      categories: [
        {
          label: 'Optimise',
          steps: [
            {
              title: 'Step 1',
              label: 'Allocate your income before you spend it',
              to: '/expenses/page-01',
            },
            {
              title: 'Step 2',
              label: 'Create your Safety Net',
              to: '/safety-net/page-01',
            },
            {
              title: 'Step 3',
              label: 'Deal with your Debt',
              to: '/debt/page-02',
            },
            {
              title: 'Step 4',
              label: 'Set your Financial Savings Goals',
              to: '/goals/page-02',
            },
          ],
        },
        {
          label: 'Maximise',
          steps: [
            {
              title: 'Step 5',
              label: 'Super? Enough to retire on?',
              to: '/super/page-01',
            },
            {
              title: 'Step 6',
              label: 'Invest. Small amounts over time make a big difference',
              to: '/invest/page-01',
            },
          ],
        },
        {
          label: 'Protect',
          steps: [
            {
              title: 'Step 7',
              label: 'Do I have Insurance I need?',
              to: '/insurance/page-01',
            },
            {
              title: 'Step 8',
              label: 'Are my assets protected?',
              to: '/to-dos/asset-protection',
            },
            {
              title: 'Step 9',
              label: "Who's in charge when I can't be?",
              to: '/to-dos/estate-planning',
            },
          ],
        },
      ],
    }
  },
}
</script>

<style scoped>
.onboarding-list-item {
  @apply border-[#E5E4F5] bg-[#EBEAFF] border-2 text-gray-dark;
  /* background: linear-gradient(98.45deg, #2e3986 25.2%, #1d286a 64.66%); */
  /* border: 1px solid #3f64ab; */
  box-shadow: 0px 8px 24px rgba(37, 54, 44, 0.04);
  border-radius: 6px;
}
</style>
