<template>
  <div class="min-h-screen">
    <VIndex :categories="categories" :graphic-buttons="true">
      <img class="mb-3" src="/learn.png" alt="learn" />
    </VIndex>
  </div>
</template>

<script>
export default {
  data() {
    return {
      categories: [
        {
          label: 'Learn',
          steps: [
            {
              label: 'Obie Learn',
              to: '/learn/obie-learn',
            },
            {
              label: 'Podcasts',
              href: 'https://www.obiemoney.com/obiepodcasts',
            },
            {
              label: 'Courses',
              href: 'https://www.obiemoney.com/courses',
            },
            {
              label: 'Books',
              href: 'https://www.obiemoney.com/booksforyou',
            },
            {
              label: 'News',
              href: 'https://www.obiemoney.com/news',
            },
            {
              label: 'Kids',
              href: 'https://www.obiemoney.com/kids',
            },
            {
              label: 'Vision Board - Design your Vision Board',
              href: 'https://www.canva.com/design/DAFq-ianZ0o/NTeqf8KlNN9oS_vBpknbmA/edit',
            },
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
