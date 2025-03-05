<template>
    <form @submit.prevent="handleSubmit()">
      <VOnboardingContainer
        image-src="/onboarding/page-03.png"
        character-src="/onboarding/characters/Woman_walking_on_money.png"
      >
      <div>
        <p class="font-normal text-base leading-[19.36px] tracking-normal text-gray-dark  mb-5 mt-5">Please enter your login details</p>
      </div>
        <div class="onboarding-input-container">
          <input
            id="name"
            class="onboarding-input"
            type="email"
            required
            v-model="email"
            placeholder="Email"
          />
        </div>
        
        <div class="onboarding-input-container">
          <InputPassword name="password" v-model="password"></InputPassword>
          
        </div>

            <div class="text-left">
            <NuxtLink
              class="text-[#100937] font-semibold text-sm"
              to="/request-reset-password"
              >Forgot Password?</NuxtLink
            >
          </div>
        <template slot="button">
          <ButtonNext :disabled="!email || !password" color="blue-one" type="submit"
            >Log In</ButtonNext
          >
        </template>
      </VOnboardingContainer>
    </form>
  </template>
  
  <script>
  import { mapState } from 'vuex'
  export default {
    layout: 'onboarding',
    auth: false,
    middleware: ['authenticated'], // Redirect to dashboard if user is already logged in

    data() {
      return {
        email: '',
        password: '',
      }
    },
    computed: {
      ...mapState(['onboarding', 'submittedToZapier']),
    },
    methods: {
      async handleSubmit() {
        try {
          await this.$auth.loginWith('local', {
            data: {
              email: this.email,
              password: this.password,
            },
          })
          this.$store.dispatch('resetDemo')
          this.$router.push('/dashboard')
        } catch (err) {
          console.log(err)
        }
      },
    },
  }
  </script>
  
  <style></style>
  