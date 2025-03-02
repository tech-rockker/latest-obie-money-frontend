<template>
    <div class="profile-container min-h-screen flex flex-col px-3">

        <!-- Back Button -->
        <div class="p-3 flex items-center space-x-3 mt-5 mb-3">
            <NuxtLink to="/dashboard" class="flex items-center text-orange-2 text-base font-medium hover:underline">
                <!-- Back Arrow Icon -->
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd"
                        d="M10 5a1 1 0 00-1.707-.707L3.586 9H17a1 1 0 110 2H3.586l4.707 4.707A1 1 0 107 15.293L2 10l5-5a1 1 0 011.414 0z"
                        clip-rule="evenodd" />
                </svg>
                Back to Dashboard
            </NuxtLink>
        </div>

        <div class="p-3 relative">

            <div class="mb-3">
                <p class="text-left text-orange-2 text-base font-bold">Account Summary</p>
            </div>
            <div>
                <p class="text-left text-[#100937] text-lg font-normal">Account Details</p>
            </div>

            <!-- Use "gap-2" instead of margins for spacing -->
            <div class="grid gap-2 py-2  w-full">
                <!-- Edit Name -->
                <div
                    class="grid grid-cols-10 bg-white p-2 border border-[#4B4848] border-opacity-25 rounded-md w-full box-border">
                    <div class="col-span-9 p-1 text-left">
                        <p class="text-base font-normal text-[#100937] text-opacity-50">
                            <!-- Name -->
                            {{ $auth.user.name }}
                        </p>
                    </div>
                    <div class="col-span-1 bg-gray-200 flex items-center justify-center p-1">
                        <NuxtLink to="/account/update-name">✏️</NuxtLink> <!-- Edit icon -->
                    </div>
                </div>

                <!-- Edit Email -->
                <div
                    class="grid grid-cols-10 bg-white p-2 border border-[#4B4848] border-opacity-25 rounded-md w-full box-border">
                    <div class="col-span-9 p-1 text-left">
                        <p class="text-base font-normal text-[#100937] text-opacity-50">
                            <!-- Email -->
                            {{ $auth.user.email }}
                        </p>
                    </div>
                    <div class="col-span-1 bg-gray-200 flex items-center justify-center p-1">
                        <NuxtLink to="/account/update-email">✏️</NuxtLink> <!-- Edit icon -->
                    </div>
                </div>

                <!-- Edit Password -->
                <div
                    class="grid grid-cols-10 bg-white p-2 border border-[#4B4848] border-opacity-25 rounded-md w-full box-border">
                    <div class="col-span-9 p-1 text-left">
                        <p class="text-base font-normal text-[#100937] text-opacity-50">
                            Password
                        </p>
                    </div>
                    <div class="col-span-1 bg-gray-200 flex items-center justify-center p-1">
                        <NuxtLink to="/account/update-password">✏️</NuxtLink> <!-- Edit icon -->
                    </div>
                </div>
            </div>

            <div class="mt-10 mb-3">
                <div class="mb-2">
                    <p class="text-left text-[#100937] text-lg font-normal">Subscription Details</p>

                </div>
                <div class=" bg-white p-2 border border-[#4B4848] border-opacity-25 rounded-md w-full box-border">
                    <div class=" p-1 text-left">
                        <p class="text-base font-normal text-[#100937] text-opacity-50">
                            Lifetime Access
                        </p>
                    </div>
                </div>
            </div>
        </div>


        <!-- delete account button -->
        <div class="p-3 relative flex space-x-3">
            <ButtonNext color="blue-one-small" :showIcon="false" @click="$router.push('/account/delete-account')"> Delete Account
            </ButtonNext>
        </div>

    </div>
</template>

<script>
export default {
    layout: "profile",
};
</script>

<style></style>
