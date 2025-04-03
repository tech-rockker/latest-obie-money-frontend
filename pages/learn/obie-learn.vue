<template>
    <div class="min-h-screen">
        <VIndex :categories="categories" :graphic-buttons="true">
            <div class="py-6 my-6 bg-[#FBF9F5]">
                <div class=" flex justify-center items-center">
                    <img class="mb-3" src="/learn_book1.png" alt="learn" />
                </div>
                <div class="flex justify-center items-center">
                    <h1 class="text-center">
                        <span class="text-2xl font-bold text-blue-2">Learn Lessons & Tips</span>
                    </h1>
                </div>

                <div class="flex justify-center items-center">
                    <h1 class="text-center">
                        <span class="text-xl font-normal text-[#7B797F]">select a topic to learn more</span>
                    </h1>
                </div>

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
                    label: 'Obie Learn',
                    steps: [
                        {
                            title: '',
                            label: 'Budgeting',
                            to: '/learn/budget',
                        },
                        {
                            title: '',
                            label: 'Safety Net',
                            to: '/safety-net/page-02',
                        },
                        {
                            title: '',
                            label: 'Reducing Debt',
                            to: '/debt/page-01',
                        },
                        {
                            title: '',
                            label: 'Saving',
                            to: '/goals/page-01',
                        },
                        {
                            title: '',
                            label: 'Investing',
                            to: '/invest/page-01',
                        },
                        {
                            title: '',
                            label: 'Superannuation',
                            to: '/learn/super',
                        },
                        {
                            title: '',
                            label: 'Insurance',
                            to: '/learn/insurance',
                        },
                        {
                            title: '',
                            label: 'Asset Protection',
                            to: '/learn/asset-protection',
                        },
                        {
                            title: '',
                            label: 'Estate Planning',
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
