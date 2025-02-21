<template>
    <VOnboardingContainer image-src="/onboarding/page-03.png" character-src="/onboarding/characters/Characters-3.png">
        <VOnboardingHeading class="mb-4" title="Please fill your account information"></VOnboardingHeading>
        <div class="onboarding-input-container">
            <label class="onboarding-label" for="name">Name</label>
            <input id="name" v-model="name" class="onboarding-input" type="text" required />
        </div>
        <div class="onboarding-input-container">
            <label class="onboarding-label" for="email">Email</label>
            <input id="email" v-model="email" class="onboarding-input" type="email" required />
        </div>
        <div class="onboarding-input-container">
            <label class="onboarding-label" for="password">Password</label>
            <InputPassword v-model="password" name="password"></InputPassword>
            <p class="onboarding-input-description">
                Your password must contain at least 6 characters, a capital letter, a
                special character and a number.
            </p>
        </div>
        <div class="onboarding-input-container">
            <label class="onboarding-label" for="name">Confirm Password</label>
            <InputPassword v-model="password_confirmation" name="password_confirmation"></InputPassword>
        </div>
        <div class="onboarding-input-container">
            <label class="onboarding-label" for="dob">What is your date of birth?</label>
            <input id="dob" v-model="dob" class="onboarding-input" type="date" required />
        </div>
        <template slot="button">
            <ButtonNext color="blue" type="submit"
            :disabled="!isValid || password !== password_confirmation || loading"
            @click="handleNext">NEXT
            </ButtonNext>
        </template>
    </VOnboardingContainer>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'

export default {
    auth: false,
    // middleware: ['authenticated'], // Redirect to dashboard if user is already logged in

    layout: 'onboarding',
    computed: {
        ...mapState('registration', ['registration', 'loading']),
        ...mapGetters('registration', ['isValid']),

        name: {
            get() { return this.registration.name },
            set(value) {
                this.setRegistrationValue({ key: 'name', value })
            },
        },
        email: {
            get() { return this.registration.email },
            set(value) {
                this.setRegistrationValue({ key: 'email', value })
            },
        },

        password: {
            get() { return this.registration.password },
            set(value) {
                this.setRegistrationValue({ key: 'password', value })
            },
        },

        password_confirmation: {
            get() { return this.registration.password_confirmation },
            set(value) {
                this.setRegistrationValue({ key: 'password_confirmation', value })
            },
        },

        dob: {
            get() { return this.registration.dob },
            set(value) {
                this.setRegistrationValue({ key: 'dob', value })
            }
        },
    },

    methods: {
        ...mapActions('registration', ['checkEmail', 'setRegistrationValue']),

        async handleNext() {
            if (!this.isValid) return

            try {
                await this.checkEmail()
                this.$router.push('/auth/register/page-02')
            } catch (error) {
                console.error('Registration error:', error)
            }
        }
    },
}

</script>

<style></style>
