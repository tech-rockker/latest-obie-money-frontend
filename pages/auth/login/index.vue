<template>
    <form @submit.prevent="handleSubmit()">
      <VOnboardingContainer
        image-src="/onboarding/page-03.png"
        character-src="/onboarding/characters/Characters-3.png"
      >
        <VOnboardingHeading class="mb-4" title="Log In"></VOnboardingHeading>
  
        <div class="onboarding-input-container">
          <label class="onboarding-label" for="name">Email</label>
          <input
            id="name"
            class="onboarding-input"
            type="email"
            required
            v-model="email"
          />
        </div>
        
        <div class="onboarding-input-container">
          <label class="onboarding-label" for="password">Password</label>
          <InputPassword name="password" v-model="password"></InputPassword>
          <div class="text-right pt-1">
            <NuxtLink
              class="text-orange-4 font-semibold"
              to="/request-reset-password"
              >Forgot Password?</NuxtLink
            >
          </div>
        </div>
        <template slot="button">
          <ButtonNext :disabled="!email || !password" color="blue" type="submit"
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
  