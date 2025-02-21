<template>
    <VOnboardingContainer>
        <div class="flex flex-col items-center">

            <div class="flex items-center justify-center my-6 h-44 w-96">
                <img src="/icons/onboarding/wellcome_clapp.svg" alt="WellCome Clapp Image" class="w-full h-full " />
            </div>
            <div>
                <div class="flex flex-col items-center justify-center mt-2 px-4">

                    <div>
                        <!-- Title -->
                        <h1 class="mt-1 font-inter font-semibold text-xl text-center text-[#100937]">
                            Beta
                        </h1>
                    </div>


                    <div class="px-1 mt-1 ">
                        <!-- Subtitle -->
                        <p class="font-inter font-[1000] text-tighter text-[2.5rem] leading-[2.5rem] text-center text-[#100937]">
                            Welcome
                        </p>
                        <p class=" font-inter font-[1000] text-[2.5rem] leading-[2.5rem] text-tighter text-center text-[#100937]">
                            to Obiemoney
                        </p>
                    </div>

                    <div class="px-2 mt-8">
                        <p class="font-inter font-bold text-lg leading-[22px] text-center text-[#100937]">
                            Congrats! You’ve taken the first step on your journey to money mastery.
                        </p>
                    </div>

                    <div class="px-14 my-6">
                        <p class=" font-inter font-normal text-lg leading-[22px] text-center text-[#100937] ">
                            To begin, let’s assess your goals and challenges
                        </p>
                    </div>

                </div>
            </div>

        </div>
        <!-- Footer Button -->
        <template slot="button">
            <ButtonNext color="dark-blue" @click="$router.push('/onboarding/page-01')"> Start my journey
            </ButtonNext>
        </template>
    </VOnboardingContainer>


</template>

<script>

export default {
    layout: 'onboarding',
};
</script>

<style scoped>
/* Custom styles if needed */
</style>