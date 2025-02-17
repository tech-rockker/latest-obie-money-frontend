<template>
  <form>
    <VOnboardingContainer
      image-src="/onboarding/page-03.png"
      character-src="/onboarding/characters/Characters-3.png"
    >
      <VOnboardingHeading
        class="mb-4"
        title="Privacy Collection Notice"
      ></VOnboardingHeading>
      <VCardDescription>
        This Privacy Collection Notice describes how Old Obie Wise Pty Ltd (ABN
        58 649 916 594) (<strong>we</strong>, <strong>us</strong> or
        <strong>our</strong>) collects and handles your personal information
        when making recommendations about third party providers to you. We
        collect personal information from you and we will de-identify and
        aggregate your income and expenditure data so that we can make
        recommendations of third party service providers you may be interested
        in and for related purposes set out in our Privacy Policy, available on
        our website or on request.
      </VCardDescription>
      <VCardDescription>
        We may disclose this personal information to third parties where you
        consent, including our personnel, related entities, any third parties
        engaged by us and acting on our behalf and as otherwise set out in our
        Privacy Policy.
      </VCardDescription>
      <VCardDescription>
        We store personal information in Australia. Where we disclose your
        personal information to third parties, those third parties may store,
        transfer or access personal information outside of Australia.
      </VCardDescription>
      <VCardDescription>
        If you do not provide your personal information to us, it may affect our
        ability to do business with you.
      </VCardDescription>
      <VCardDescription>
        Please see our Privacy Policy for more information about how we collect,
        store, use and disclose your personal information, including details
        about overseas disclosure, access, correction, how you can make a
        privacy-related complaint and our complaint-handling process.
      </VCardDescription>
      <VCardDescription>
        If you have questions about our privacy practices, please contact us by
        email at:
        <a class="underline" href="mailto:hello@obiemoney.com.au"
          >hello@obiemoney.com.au</a
        >. By providing your personal information to us, you agree to the
        collection, use, storage and disclosure of that information as described
        in this privacy collection notice.
      </VCardDescription>
      <template slot="button">
        <ButtonBack></ButtonBack>
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
    ...mapState(['onboarding']),
  },
  methods: {},
}
</script>

<style></style>
