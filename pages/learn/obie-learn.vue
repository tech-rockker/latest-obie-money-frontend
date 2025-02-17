<template>
  <div class="min-h-screen">
    <VIndex :categories="categories" :graphic-buttons="true"></VIndex>
  </div>
</template>

<script>
export default {
  data() {
    return {
      categories: [
        {
          label: 'Obie Learn',
          steps: [
            {
              title: '',
              label: 'Budget - Managing your spending',
              to: '/learn/budget',
            },
            {
              title: '',
              label: 'Safety Net - Emergency Funds',
              to: '/safety-net/page-02',
            },
            {
              title: '',
              label: 'Debt - Breaking up with Your Debt',
              to: '/debt/page-01',
            },
            {
              title: '',
              label: 'Saving - for the things you really want',
              to: '/goals/page-01',
            },
            {
              title: '',
              label: 'Investing - Future Me',
              to: '/invest/page-01',
            },
            {
              title: '',
              label: 'Super - Dont wait til your 50 to ask this question…',
              to: '/learn/super',
            },
            {
              title: '',
              label: 'Insurance - Protecting you and yours',
              to: '/learn/insurance',
            },
            {
              title: '',
              label: 'Asset Protection',
              to: '/learn/asset-protection',
            },
            {
              title: '',
              label: 'Estate Planning - Instructions, Wishes and Fav Song',
              to: '/learn/estate-planning',
            },
            // {
            //   title: '',
            //   label: 'Create your Safety Net',
            //   to: '/safety-net/page-01',
            // },
            // {
            //   title: '',
            //   label: 'Deal with your Debt',
            //   to: '/debt/page-01',
            // },
            // {
            //   title: '',
            //   label: 'Set your Financial Savings Goals',
            //   to: '/goals/page-01',
            // },
          ],
        },
        // {
        //   label: 'Maximise',
        //   steps: [
        //     {
        //       title: 'Step 5',
        //       label: 'Super? Enough to retire on? (WIP)',
        //       to: '/dashboard',
        //     },
        //     {
        //       title: 'Step 6',
        //       label: 'Invest. Small amounts over time make a big difference',
        //       to: '/invest/page-01',
        //     },
        //   ],
        // },
        // {
        //   label: 'Protect',
        //   steps: [
        //     {
        //       title: 'Step 7',
        //       label: 'Do I have Insurance I need? (WIP)',
        //       to: '/dashboard',
        //     },
        //     {
        //       title: 'Step 8',
        //       label: 'Are my assets protected? (WIP)',
        //       to: '/dashboard',
        //     },
        //     {
        //       title: 'Step 9',
        //       label: "Who's in charge when I can't be? (WIP)",
        //       to: '/dashboard',
        //     },
        //   ],
        // },
      ],
    }
  },
}
</script>

<style scoped></style>
