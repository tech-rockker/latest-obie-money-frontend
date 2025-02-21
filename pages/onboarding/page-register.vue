<template>
  <form @submit.prevent="handleSubmit()">
    <VOnboardingContainer
      image-src="/onboarding/page-03.png"
      character-src="/onboarding/characters/Characters-3.png"
    >
      <VOnboardingHeading
        class="mb-4"
        title="Please fill your account information"
      ></VOnboardingHeading>
      <div class="onboarding-input-container">
        <label class="onboarding-label" for="name">Name</label>
        <input
          id="name"
          class="onboarding-input"
          type="text"
          required
          v-model="name"
        />
      </div>
      <div class="onboarding-input-container">
        <label class="onboarding-label" for="email">Email</label>
        <input
          id="email"
          class="onboarding-input"
          type="email"
          required
          v-model="email"
        />
      </div>
      <div class="onboarding-input-container">
        <label class="onboarding-label" for="password">Password</label>
        <InputPassword name="password" v-model="password"></InputPassword>
        <p
          class="onboarding-input-description"
          :class="[password && !passwordIsValid ? 'red' : '']"
        >
          Your password must contain at least 6 characters, a capital letter, a
          special character and a number.
        </p>
      </div>
      <div class="onboarding-input-container">
        <label class="onboarding-label" for="name">Confirm Password</label>
        <InputPassword
          name="password_confirmation"
          v-model="password_confirmation"
        ></InputPassword>
        <!-- Show warning if passwords dont match -->
        <p
          v-if="password_confirmation && password_confirmation !== password"
          class="red onboarding-input-description"
        >
          Passwords do not match
        </p>
      </div>
      <div class="onboarding-input-container">
        <label class="onboarding-label" for="dob"
          >What is your date of birth?</label
        >
        <input
          id="dob"
          class="onboarding-input"
          type="date"
          :value="onboarding.dob"
          :max="new Date().toISOString().split('T')[0]"
          required
          @input="
            $store.dispatch('setOnboardingValue', {
              key: 'dob',
              value: $event.target.value,
            })
          "
        />
        <p v-if="dobInFuture" class="red onboarding-input-description">
          Date must be in the past
        </p>
      </div>
      <div class="mb-3 flex items-center">
        <input
          id="acceptedTerms"
          v-model="acceptedTerms"
          type="checkbox"
          class="mr-3"
        />
        <span>
          <label class="modal-label" for="acceptedTerms"
            >I have read, understand and agree to Obie's </label
          ><span class="text-xs"
            ><button
              class="inline underline text-xs"
              @click="$modal.show('disclaimer-modal')"
              type="button"
            >
              Disclaimer</button
            >,
            <button
              class="inline underline text-xs"
              @click="$modal.show('terms-and-conditions-modal')"
              type="button"
            >
              Terms and Conditions
            </button>
            and
            <button
              class="inline underline text-xs"
              @click="$modal.show('privacy-data-modal')"
              type="button"
            >
              Data Privacy Policy</button
            >.</span
          >
        </span>
      </div>
      <template slot="button">
        <ButtonBack @click="$router.push('/onboarding/page-06')" />
        <ButtonNext
          color="blue"
          type="submit"
          :disabled="
            !acceptedTerms ||
            !onboarding.dob ||
            !name ||
            !email ||
            !password ||
            !passwordIsValid ||
            password !== password_confirmation ||
            dobInFuture ||
            loading
          "
          >NEXT</ButtonNext
        >
      </template>
    </VOnboardingContainer>
  </form>
</template>

<script>
import moment from 'moment'
import { mapState } from 'vuex'
export default {
  auth: false,
  layout: 'onboarding',
  data() {
    return {
      acceptedTerms: false,
      loading: false,
      name: '',
      email: '',
      password: '',
      password_confirmation: '',
    }
  },
  computed: {
    ...mapState(['onboarding', 'submittedToZapier']),
    passwordIsValid() {
      const password = this.password
      return (
        password &&
        /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password)
      )
    },
    dobInFuture() {
      return moment(this.onboarding.dob).isAfter(moment())
    },
  },
  created() {
    if (this.$auth.loggedIn) {
      this.$router.push('/onboarding/page-08')
    }
  },
  methods: {
    async handleSubmit() {
      try {
        if (this.$auth.loggedIn) {
          this.$router.push('/onboarding/page-08')
          return
        }
        this.loading = true
        await this.$axios.post('/api/register', {
          ...this.onboarding,
          name: this.name,
          email: this.email,
          password: this.password,
          password_confirmation: this.password_confirmation,
        })
        await this.$auth.loginWith('local', {
          data: {
            email: this.email,
            password: this.password,
          },
        })
        this.$router.push('/onboarding/page-08')
      } catch (error) {
        console.log(error)
      } finally {
        this.loading = false
      }
    },
    // submitToZapier() {
    //   if (!this.submittedToZapier) {
    //     this.$axios
    //       .post(`/hooks/catch/7470443/b0a024q/`, {
    //         name: this.onboarding.name,
    //         email: this.onboarding.email,
    //         dob: this.onboarding.dob,
    //       })
    //       .then(() => {
    //         this.$store.dispatch('setValue', {
    //           key: 'submittedToZapier',
    //           value: true,
    //         })
    //       })
    //   }
    // },
  },
}
</script>

<style></style>
