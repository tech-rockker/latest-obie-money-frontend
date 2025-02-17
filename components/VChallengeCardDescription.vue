<template>
  <div>
    <ul v-if="id === 1">
      <li>
        Congrats! You completed this task during the onboarding process. Now see
        how your budget can have you spending less and saving and investing
        more. You can review the 70/30 budget
        <NuxtLink to="/expenses/page-01">here</NuxtLink>.
      </li>
    </ul>
    <ul v-else-if="id === 2">
      <li>
        Give your money the time it deserves. Because energy flows where
        attention goes.
      </li>
      <li>
        Spend the time putting in all your expenses and really see where your
        money is going. You can edit/add expenses
        <NuxtLink to="/expenses/page-02">here</NuxtLink>.
      </li>
    </ul>
    <ul v-else-if="id === 3">
      <li>
        See how much you need to live on and always put some aside for fun
      </li>
      <li>
        After all your expenses are entered, you can compare your real budget to
        the Obie 70/30 <NuxtLink to="/expenses/page-03">here</NuxtLink>.
      </li>
    </ul>
    <ul v-else-if="id === 4">
      <li>
        Review your budget <NuxtLink to="/expenses/page-03">here</NuxtLink>.
        Take note of the areas in which you’re over-spending and those in which
        you’re not. Start to think about what adjustments you’re able to make.
      </li>
    </ul>
    <ul v-else-if="id === 5">
      <li>
        Track your spend here for your next pay cycle. You can make changes to
        your spending plan <NuxtLink to="/expenses/page-03">here</NuxtLink>.
      </li>
      <li>
        Use the
        <button @click="$modal.show('actual-expense-modal')" type="button">
          <img class="inline w-12" src="/+button.png" alt="Plus Button" /><span
            class="sr-only"
            >Add transaction</span
          >
        </button>
        button on any screen to add new expenses.
      </li>
    </ul>
    <ul v-else-if="id === 6">
      <li>
        Learn about creating your Safety Net buckets
        <NuxtLink to="/safety-net/page-01">here</NuxtLink>.
      </li>
      <li>
        Set amounts for <strong>Emergency Fund</strong>,
        <strong>Buffer for Lumpy Expenses</strong> and
        <strong>3 Months of Expenses</strong>.
      </li>
    </ul>
    <ul v-else-if="id === 7">
      <li>
        Allocate money from your current savings and decide how much of your
        income you’d like to allocate to your Safety Net buckets. Get started
        <NuxtLink to="/safety-net/page-04">here</NuxtLink>.
      </li>
    </ul>
    <ul v-else-if="id === 8">
      <li>
        Consumer debt payments eating into your budget? Small amounts can mount
        up quickly. You can now get out of debt once and for all.
      </li>
      <li>
        Start getting a handle on your bad debts
        <NuxtLink to="/debt/page-01">here</NuxtLink>.
      </li>
    </ul>
    <ul v-else-if="id === 9">
      <li>
        Get started setting savings goals for the things you really want in life
        <NuxtLink to="/goals/page-02">here</NuxtLink>.
      </li>
    </ul>
    <ul v-else-if="id === 10">
      <li>
        After adding all your goals
        <NuxtLink to="/debt/page-02">here</NuxtLink>, click next to start
        allocating money from your savings and income to achieve these goals.
      </li>
    </ul>
    <ul v-else-if="id === 11">
      <li>
        Investing is an important part of achieving financial freedom. Begin
        your journey <NuxtLink to="/invest/page-01">here</NuxtLink>.
      </li>
    </ul>
    <ul v-else-if="id === 12">
      <li>
        Time to allocate a portion of your savings and income to your investment
        plan, you can do that
        <NuxtLink to="/invest/page-02">here</NuxtLink> while creating your
        investment goals.
      </li>
    </ul>
    <ul v-else-if="id === 13">
      <li>
        All of the previous steps that you’ve completed will now be summarised
        in your <NuxtLink to="/dashboard">Dashboard</NuxtLink>.
      </li>
      <li>Check out the Learn section and Partner pages.</li>
    </ul>
    <ul v-else-if="id === 14">
      <li>
        Now that you’ve set up your plan, it’s time to head to your bank to set
        up your accounts and automate what you can.
      </li>
    </ul>
    <ul v-else-if="id === 15">
      <li>
        Navigate to the Super section in your
        <NuxtLink to="/super/page-02">Dashboard</NuxtLink> and add your Super
        accounts.
      </li>
    </ul>
    <ul v-else-if="id === 16">
      <li>
        Navigate to
        <a target="_blank" href="https://www.superguru.com.au/calculators">Superguru</a>
        and use their resources to help you calculate your projected income at
        retirement.
      </li>
      <li>
        Enter your projected Income
        <NuxtLink to="/super/page-02">here</NuxtLink>.
      </li>
    </ul>
    <ul v-else-if="id === 17">
      <li>
        Significantly increase your super balance with a before tax salary
        sacrifice contribution.
      </li>
      <li>Taxed at 15% often lower than your income tax rate.</li>
      <li>
        Review in your investment goals
        <NuxtLink to="/invest/page-02">here</NuxtLink>.
      </li>
    </ul>
    <ul v-else-if="id === 18">
      <li>
        Super is the investing you never thought you did. But don’t wait til you’re about to retire to make the most of it.  Time is your biggest asset.
      </li>
      <li>
        Optimise your investment, reduce fees and maximise your returns. Review
        the Super Health Check
        <NuxtLink to="/super/page-01">here</NuxtLink>.
      </li>
    </ul>
    <ul v-else-if="id === 19">
      <li>
        In the Obie’s Partners section, navigate to the
        <NuxtLink to="/partners/comparison-sites">Comparison Site</NuxtLink>
        section and use a comparison site to see how your Super is performing
        against the competition.
      </li>
    </ul>
    <ul v-else-if="id === 20">
      <li>
        Lost or unclaimed super topped 16 billion in 2023. Could this be you? A
        simple search using the ATO online services will make sure you track
        down any possible missing super. Review
        <a
          target="_blank"
          href="https://www.ato.gov.au/forms-and-instructions/superannuation-searching-for-lost-superannuation"
          >here</a
        >.
      </li>
    </ul>
    <ul v-else-if="id === 21">
      <li>
        Super is not an asset that is included in your will. You also need to
        allocate who your beneficiaries are and understand the tak implications.
        Did you know that you need to sign your Binding Nomination every 3
        years? Check yours now!
      </li>
    </ul>
    <ul v-else-if="id === 22">
      <li>
        What insurance do you have? Are you under or overinsured? See all your
        insurances in one place. Click
        <NuxtLink to="/insurance/page-01">here</NuxtLink> to start adding your
        insurance policies.
      </li>
    </ul>
    <ul v-else-if="id === 23">
      <li>
        You can review your insurances on your <NuxtLink to="/dashboard#insurances">Dashboard</NuxtLink>.  Check your premiums. The most important thing you can do each year is review your premiums and look to get the best deal. 
      </li>
    </ul>
    <ul v-else-if="id === 24">
      <li>
        Important for relationships and breakups. Learn more about protecting
        your assets <NuxtLink to="/learn/asset-protection">here</NuxtLink>.
      </li>
    </ul>
    <ul v-else-if="id === 25">
      <li>
        Over half of us don't have a will. Research shows 52% of people, haven’t sorted out this key legal doc. Having a will and a POA ensures your stuff goes where you want it to go and helps your loved ones avoid legal messes. Review
        <NuxtLink to="/to-dos/estate-planning">here</NuxtLink>.
      </li>
    </ul>
    <ul v-else-if="id === 26">
      <li>
        Go to the Partners section under
        <NuxtLink to="/partners/estate-planning">Estate Planning</NuxtLink> and
        check out our suggested list of providers.
      </li>
    </ul>
    <ul v-else-if="id === 27">
      <li>
        Learn about Power of Attorney
        <a
          target="_blank"
          href="https://safewill.com/blog/posts/what-is-a-power-of-attorney"
          >here</a
        >.
      </li>
    </ul>
    <ul v-else-if="id === 28">
      <li>
        Congrats! You’ve completed the Obie Money 28 Step Challenge and taken
        the first big step to Mastering Your Money! Take a minute to look over
        your <NuxtLink to="/dashboard">Dashboard</NuxtLink> and pour yourself a
        drink.
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    challenge: {
      type: Object,
      required: true,
    },
  },
  computed: {
    id() {
      return this.challenge.id
    },
  },
}
</script>

<style scoped>
ul {
  @apply pl-3;
  list-style-type: disc;
}
a {
  @apply text-orange;
}
</style>