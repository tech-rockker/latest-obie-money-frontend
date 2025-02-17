<template>
  <VModal name="disclaimer-modal">
    <VModalTitle>Disclaimer</VModalTitle>
    <VCardDescription>
      <strong>Obie</strong> (Old Obie Wise Pty Ltd) outlines general advice only
      and should not replace individual, independent , personal financial
      advice. Obie is not a licensed financial services provider and does not
      provide personalised financial advice or recommendations tailored to
      individual needs.
    </VCardDescription>
    <VCardDescription>
      Every effort has been made to provide accurate and up-to-date financial
      information and education through Old Obie Wise Pty Ltd (Obie). However,
      there is no guarantee of earning any money or achieving any particular
      financial results by using the techniques, tools or advice provided.
      Obie's content and services are for general educational purposes only.
    </VCardDescription>
    <VCardDescription>
      The information from Obie should not be relied upon as professional
      financial advice when making money management decisions. Our advice is
      general in nature and does not take into account your specific financial
      circumstances.
    </VCardDescription>
    <VCardDescription>
      Managing finances carries inherent risks. Your use of any information or
      resources from Obie is solely at your own risk. We aim to provide content
      in good faith but without any express or implied warranties. By using our
      site and accessing our content, you agree that Obie is not liable for any
      decisions you make as a result of the information provided.
    </VCardDescription>
    <ButtonNext
      class="mt-4"
      @click="$modal.hide('disclaimer-modal')"
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
