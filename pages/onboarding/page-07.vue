<template>
    <VOnboardingContainer>
        <div class="flex flex-col items-center justify-start">

            <!-- Stage Title -->
            <div class="text-center mt-7 mb-5">
                <div>
                    <h1 class="text-lg font-bold text-orange-4">STAGE ONE</h1>
                </div>
                <div>
                    <h1 class="text-5xl font-extrabold tracking-tight text-[#11064F]">Optimise</h1>
                </div>
            </div>

            <!-- SVG -->
            <div class="flex items-center justify-center my-2 h-44 w-96">
                <img src="/icons/onboarding/People-holding-money.svg" alt="WellCome Clapp Image"
                    class="w-full h-full" />
            </div>

            <!-- Steps List -->
            <div class="bg-white rounded-xl shadow-lg w-full px-10 py-7 my-3">
                <div class="grid grid-rows-4 gap-4 ">
                    <!-- Dynamic rows using v-for -->
                    <div v-for="(step, index) in steps" :key="index" class="grid grid-cols-10 gap-4">
                        <!-- Column 1 (Span 1/10) -->
                        <div class="col-span-1">
                            <div class="grid grid-rows-2">
                                <div class="w-full h-6 content-center">
                                    <div class="w-5 h-5 rounded-full border-4 border-orange-4">
                                    </div>
                                </div>
                                <div class="w-full h-6"></div>
                            </div>
                        </div>
                        <!-- Column 2 (Span 9/10) -->
                        <div class="col-span-9">
                            <div class="grid grid-rows-2">
                                <div class="w-full h-6">
                                    <div class="text-lg text-orange-4 font-bold">STEP {{ step.number }}</div>
                                </div>
                                <div class="w-full h-6 mb-1">
                                    <div class="text-lg text-[#11064F] font-medium">{{ step.text }}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

        <!-- Footer Button -->

        <template slot="button">
            <ButtonBack @click="$router.push('/onboarding/page-06')"></ButtonBack>
            <ButtonNext color="blue" @click="$router.push('/onboarding/page-08')">NEXT
            </ButtonNext>
        </template>
    </VOnboardingContainer>
</template>

<script>
export default {
    layout: 'onboarding',
    data() {
        return {
            steps: [
                { number: 1, text: "Allocate income before spending" },
                { number: 2, text: "Create your Safety Net" },
                { number: 3, text: "Deal with your debt" },
                { number: 4, text: "Create savings goals" }
            ]
        };
    },
};
</script>

<style></style>
