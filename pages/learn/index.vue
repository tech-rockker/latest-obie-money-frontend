<template>
    <div class="min-h-screen">
        <VIndex :categories="categories" :graphic-buttons="true">
            <div class="my-6">
                <div class="flex justify-center items-center py-6 my-6 bg-[#FBF9F5]">
                    <img class="mb-3" src="/learn1.png" alt="learn" />
                </div>
                <ButtonNext color="blue-three" @click="$router.push('/learn/obie-learn')">Learn Lessons & Tips</ButtonNext>
            </div>
            <div class="mb-6 mt-20">
                <h1 class="text-center">
                    <span class="text-2xl font-bold text-blue-2">Curated Resources</span>
                </h1>
            </div>

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
                            label: 'Books',
                            href: 'https://www.obiemoney.com/booksforyou',
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
                            label: 'Learning for Kids',
                            href: 'https://www.obiemoney.com/kids',
                        },
                        {
                            label: 'Financial News Sites',
                            href: 'https://www.obiemoney.com/news',
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
