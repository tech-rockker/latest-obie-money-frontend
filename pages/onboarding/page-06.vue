<template>
    <VOnboardingContainer>
        <div class=" flex flex-col items-center">

            <!-- Main Content -->
            <div class="text-center">
                <!-- Heading -->
                <div class="mt-4">
                    <h1 class="text-[#100937] text-4xl font-extrabold tracking-tight leading-6 my-6 ">
                        Thank you!
                    </h1>
                    <h2 class="text-[#100937] text-xl font-normal leading-6 mb-6">
                        Now, let's set up your account<br>
                        so you can start turning those<br>
                        goals into action!
                    </h2>
                </div>


                <!-- Stages Card -->
                <div class="bg-white rounded-xl shadow-lg p-4 mb-4">
                    <div class="text-[#100937] text-center">

                        <h3 class="text-2xl font-bold mb-4">Obiemoney works in <br> three stages</h3>

                        <div class="space-y-4 text-center px-3">
                            <div class="my-2">
                                <h4 class="text-xl font-bold mb-1">Stage One: Optimise</h4>
                                <p class="text-[#100937] text-lg font-normal leading-[22px]">This stage helps you create
                                    a realistic
                                    budget,
                                    buildyour safety net,
                                    tackle debt strategically and develop smart saving habits.</p>
                            </div>

                            <div class="my-2">
                                <h4 class=" text-xl font-bold mb-1">Stage Two: Maximise</h4>
                                <p class="text-[#100937] text-lg font-normal leading-[22px]">This stage focuses on
                                    maximising what you have. Start
                                    or build on
                                    investments and look at your superannuation.</p>
                            </div>

                            <div class="my-2">
                                <h4 class="text-xl font-bold mb-1">Stage Three: Protect</h4>
                                <p class="text-[#100937] text-lg font-normal leading-[22px]">The protect stage helps you
                                    identify
                                    potential risks and put
                                    appropriate
                                    safeguards in place.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

        <!-- Footer Button -->
        <template slot="button">
            <ButtonNext color="dark-blue" @click="$router.push('/onboarding/page-07')"> Start stage one
            </ButtonNext>
        </template>
    </VOnboardingContainer>

</template>

<script>
export default {
    layout: 'onboarding',
}
</script>

<style></style>