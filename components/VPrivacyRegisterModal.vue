<template>
  <VModal name="privacy-register-modal">
    <VModalTitle>Privacy Collection Notice</VModalTitle>
    <VCardDescription>
      This Privacy Collection Notice describes how Old Obie Wise Pty Ltd (ABN 58
      649 916 594) (<strong>we</strong>, <strong>us</strong> or
      <strong>our</strong>) collects and handles your personal information when
      you sign-up to do business with us. We collect personal information from
      you and from third parties (such as our cookies and analytics providers)
      so that we can do business with you and for related purposes set out in
      our Privacy Policy, available on our website (or on request).
    </VCardDescription>
    <VCardDescription>
      We may disclose this personal information to third parties, including our
      personnel, related entities, any third parties engaged by us and acting on
      our behalf and as otherwise set out in our Privacy Policy.
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
      store, use and disclose your personal information, including details about
      overseas disclosure, access, correction, how you can make a
      privacy-related complaint and our complaint-handling process. If you have
      questions about our privacy practices, please contact us by email at:
      <a class="underline" href="mailto:hello@obiemoney.com.au"
        >hello@obiemoney.com.au</a
      >. By providing your personal information to us, you agree to the
      collection, use, storage and disclosure of that information as described
      in this privacy collection notice.
    </VCardDescription>
    <ButtonNext
      class="mt-4"
      @click="$modal.hide('privacy-register-modal')"
      color="orange"
      type="button"
      >Close</ButtonNext
    >
  </VModal>
</template>

<script>
export default {}
</script>

<style></style>
