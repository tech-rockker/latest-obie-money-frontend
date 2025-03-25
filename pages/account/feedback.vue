<template>
    <div class="profile-container min-h-screen flex flex-col px-3">

        <!-- Back Button -->
        <div class="p-4 flex items-center space-x-3 mt-5 mb-3">
            <NuxtLink to="/account" class="flex items-center text-blue-2 text-base font-medium hover:underline">
                &#x276E;
            </NuxtLink>
            <p class="font-bold text-xl text-blue-2">Feedback</p>
        </div>

        <!-- Request A Feature Card -->
        <div class="bg-gray-50 p-4 rounded-lg shadow-md mb-6">
            <h3 class="text-lg font-semibold text-gray-900">Request A Feature</h3>
            <p class="text-sm text-gray-600 mt-1">
                Have a feature request or suggestion for future updates? Let us know!
            </p>
            <button
                class="mt-4 flex items-center justify-center bg-gray-900 text-white px-4 py-2 rounded-lg font-medium hover:bg-gray-800"
                @click="handleRequestFeature">
                Request A Feature
                <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
            </button>
        </div>

        <!-- Report a Bug Card -->
        <div class="bg-gray-50 p-4 rounded-lg shadow-md mb-6">
            <h3 class="text-lg font-semibold text-gray-900">Report a Bug</h3>
            <p class="text-sm text-gray-600 mt-1">
                Found something that needs fixing? We would love to know!
            </p>
            <button
                class="mt-4 flex items-center justify-center bg-gray-900 text-white px-4 py-2 rounded-lg font-medium hover:bg-gray-800"
                @click="handleReportBug">
                Report A Bug
                <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
            </button>
        </div>

        <!-- Feedback Survey Card -->
        <div class="bg-gray-50 p-4 rounded-lg shadow-md">
            <h3 class="text-lg font-semibold text-gray-900">Feedback Survey</h3>
            <p class="text-sm text-gray-600 mt-1">
                By providing feedback you are helping us continue to improve the app!
            </p>
            <button
                class="mt-4 flex items-center justify-center bg-gray-900 text-white px-4 py-2 rounded-lg font-medium hover:bg-gray-800"
                @click="handleFeedbackSurvey">
                Give Feedback
                <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
            </button>
        </div>

    </div>
</template>

<script>
export default {
    layout: "profile",

    data() {
        return {
            loading: false,
            error: '',

        }
    },
    methods: {

        handleFeedbackSurvey() {
            const url = 'https://kua27hyqf3v.typeform.com/to/XKFg8Cq1';
            window.open(url, '_blank');
        },
        handleReportBug() {
            const url = 'https://www.obiemoney.com/report-a-bug-form';
            window.open(url, '_blank');
        },
        handleRequestFeature() {
            const url = 'https://www.obiemoney.com/request-a-feature-form';
            window.open(url, '_blank');
        },
    },

    computed: {

    },

};
</script>

<style></style>
