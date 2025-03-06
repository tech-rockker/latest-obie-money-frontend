<template>
    <VOnboardingContainer image-src="/onboarding/page-03.png" character-src="/onboarding/characters/Characters-3.png">

        <h1 class="text-[#100937] text-base font-bold mb-2">Create Your Obiemoney Account</h1>

        <div>
            <p class="font-normal text-base leading-[19.36px] tracking-normal text-gray-dark  mb-5 mt-5">Please enter
                your details</p>
        </div>
        <div class="onboarding-input-container">
            <input id="name" v-model="name" class="onboarding-input" placeholder="Name" type="text" required />
        </div>
        <div class="onboarding-input-container">
            <input id="email" v-model="email" class="onboarding-input" placeholder="Email" type="email" required />
        </div>
        <div class="onboarding-input-container">
            <label class="onboarding-label" for="dob">Date of birth</label>
            <input id="dob" v-model="dob" class="onboarding-input" type="date" required
                :max="new Date().toISOString().split('T')[0]" />
            <p v-if="dobInFuture" class="red onboarding-input-description">
                Date must be in the past
            </p>
        </div>
        <div class="onboarding-input-container">
            <label class="onboarding-label" for="password">Choose a password</label>
            <p class="text-xs text-[#100937] font mb-3">
                Your password must contain at least 6 characters, a capital letter, a
                special character and a number.
            </p>
            <InputPassword v-model="password" name="password"></InputPassword>
            <p class="onboarding-input-description" :class="[password && !isPasswordValid ? 'red' : '']">
                Your password must contain at least 6 characters, a capital letter, a
                special character and a number.
            </p>

        </div>
        <div class="onboarding-input-container">
            <InputPassword v-model="password_confirmation" name="password_confirmation"></InputPassword>
            <!-- Show warning if passwords dont match -->
            <p v-if="password_confirmation && password_confirmation !== password"
                class="red onboarding-input-description">
                Passwords do not match
            </p>
        </div>

        <div class="mb-3 flex items-center">
            <input id="acceptedTerms" v-model="acceptedTerms" type="checkbox" class="mr-3" />
            <span>
                <label class="modal-label" for="acceptedTerms">I have read, understand and agree to Obie's </label><span
                    class="text-xs"><button class="inline underline text-xs" @click="$modal.show('disclaimer-modal')"
                        type="button">
                        Disclaimer</button>,
                    <button class="inline underline text-xs" @click="$modal.show('terms-and-conditions-modal')"
                        type="button">
                        Terms and Conditions
                    </button>
                    and
                    <button class="inline underline text-xs" @click="$modal.show('privacy-data-modal')" type="button">
                        Data Privacy Policy</button>.</span>
            </span>
        </div>
        <template slot="button">
            <ButtonNext color="blue" type="submit" :disabled="!acceptedTerms || !name || !email || !password || !isValid || loading"
                @click="handleNext">NEXT
            </ButtonNext>
        </template>
    </VOnboardingContainer>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'

export default {
    auth: false,
    middleware: ['authenticated'], // Redirect to dashboard if user is already logged in

    layout: 'onboarding',
    data() {
        return {
            acceptedTerms: false,
        }
    },
    computed: {
        ...mapState('registration', ['registration', 'loading']),
        ...mapGetters('registration', ['isValid', 'dobInFuture', 'isPasswordValid']),

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
            if (!this.isValid) {
                this.$toast.error('Please complete all required fields correctly')
                return
            }
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
