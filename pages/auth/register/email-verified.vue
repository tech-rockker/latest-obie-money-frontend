<template>
    <div class="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div class="max-w-md w-full bg-white rounded-xl shadow-lg p-8 text-center">
        <!-- Success Icon -->
        <div class="mx-auto flex items-center justify-center h-20 w-20 rounded-full bg-green-100 mb-6">
          <svg class="h-12 w-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
          </svg>
        </div>
  
        <h1 class="text-3xl font-bold text-gray-900 mb-4">
          Email Verified Successfully!
        </h1>
        <h1 class="text-3xl font-bold text-gray-900 mb-4">
          🎉
        </h1>
        
        <p class="text-gray-600 mb-6">
          Your account has been successfully verified. You can now log in to access all features.
        </p>
  
        <nuxt-link 
          to="/auth/login" 
          class="inline-block w-full bg-[#100937] text-white font-medium py-3 px-6 rounded-lg transition-colors"
        >
          Proceed to Login
        </nuxt-link>
  
        <p class="mt-8 text-sm text-gray-500">
          Having issues? <nuxt-link to="/contact" class="text-indigo-600 hover:underline">Contact support</nuxt-link>
        </p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    auth: false,
    layout: 'onboarding',
    head() {
      return {
        title: 'Email Verified - Obie Money'
      }
    }
  }
  </script>