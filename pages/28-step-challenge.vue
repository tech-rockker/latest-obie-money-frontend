<template>
  <LoadingContainer :loading="loading">
    <VContainer>
      <VHeading
        title="28 Day Money Challenge"
        section=""
        image-src=""
      ></VHeading>
      <div class="mt-2">
        <p class="text-xs text-gray-500">Progress</p>
        <div class="bg-dark-purple flex rounded shadow-lg">
          <p
            :style="{ minWidth: `${completedPercentage}%` }"
            class="bg-orange text-dark-purple rounded-l px-1 py-1 font-medium text-xs text-center transition-all duration-200"
          >
            {{ completedPercentage }}%
          </p>
          <p
            v-if="completedPercentage === 0"
            class="text-orange rounded-l px-1 py-1 font-medium text-xs"
          >
            0%
          </p>
        </div>
      </div>
    </VContainer>
    <VCard padding="p-0 pb-6" color="">
      <div class="p-6 pt-6">
        <div class="bg-orange-gradient rounded-xl p-3 text-white mb-6">
          <h2 class="font-bold text-lg">
            28 Days to Get Your Money House in Order
          </h2>
          <ol class="list-decimal list-inside leading-6">
            <li>Swipe through one money challenge card per day</li>
            <li>Record your expenses and review your spending plan</li>
            <li>Post one thing you are grateful for in community</li>
            <li>Pick one thing in Obie Learn to up your game</li>
            <li>Tick off todays challenge!</li>
          </ol>
        </div>
      </div>
      <vue-glide
        :per-view="1"
        :gap="12"
        :peek="{ before: 12, after: 12 }"
        v-model="activeSlide"
        :drag-threshold="false"
        :per-touch="1"
        @glide:move="glideMoving = true"
        @glide:move-after="glideMoving = false"
      >
        <vue-glide-slide
          v-for="challenge in computedChallenges"
          :key="challenge.id"
          class="px-1"
        >
          <VChallengeCard
            :challenge="challenge"
            @complete="handleComplete"
            @uncomplete="handleUncomplete"
          ></VChallengeCard>
        </vue-glide-slide>
      </vue-glide>
      <div class="flex justify-between space-x-3 px-3">
        <button
          :disabled="glideMoving"
          @click="goToPreviousSlide()"
          class="text-orange"
        >
          <span class="sr-only">Previous</span>
          <svg
            style="transform: rotate(180deg)"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
          >
            <path
              fill="currentColor"
              fill-rule="evenodd"
              d="M16 30c7.732 0 14-6.268 14-14S23.732 2 16 2 2 8.268 2 16s6.268 14 14 14Zm.92-14-4.113 4.114 1.136 1.136 5.25-5.25-5.25-5.25-1.136 1.136L16.92 16Z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
        <div class="bg-gray-100 rounded w-full">
          <div
            class="grid grid-cols-7 gap-[1px] border rounded border-gray-100"
          >
            <button
              v-for="(challenge, index) in computedChallenges"
              :key="challenge.id"
              :disabled="glideMoving"
              class="text-xs py-2 bg-white relative"
              :class="[
                activeSlide === challenge.id - 1 && 'bg-orange',
                index === 0 && 'rounded-tl',
                index === 6 && 'rounded-tr',
                index === 21 && 'rounded-bl',
                index === computedChallenges.length - 1 && 'rounded-br',
              ]"
              @click="goToSlide(challenge.id - 1)"
            >
              <div class="absolute z-10 top-0 right-0 -mr-0.5 -mt-0.5">
                <div class="rounded-full bg-gray-100 w-3 h-3">
                  <svg
                    v-if="challenge.completed"
                    class="w-3 text-green-500"
                    data-slot="icon"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      clip-rule="evenodd"
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z"
                    ></path>
                  </svg>
                </div>
              </div>
              {{ challenge.id }}
            </button>
          </div>
        </div>
        <button
          :disabled="glideMoving"
          @click="goToNextSlide()"
          class="text-orange"
        >
          <span class="sr-only">Next</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32">
            <path
              fill="currentColor"
              fill-rule="evenodd"
              d="M16 30c7.732 0 14-6.268 14-14S23.732 2 16 2 2 8.268 2 16s6.268 14 14 14Zm.92-14-4.113 4.114 1.136 1.136 5.25-5.25-5.25-5.25-1.136 1.136L16.92 16Z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </div>
    </VCard>
  </LoadingContainer>
</template>

<script>
import { Glide, GlideSlide } from 'vue-glide-js'
import 'vue-glide-js/dist/vue-glide.css'

export default {
  components: {
    [Glide.name]: Glide,
    [GlideSlide.name]: GlideSlide,
  },
  methods: {
    goToNextSlide() {
      if (this.activeSlide === this.computedChallenges.length - 1) {
        this.activeSlide = 0
      } else {
        this.activeSlide = this.activeSlide + 1
      }
    },
    goToPreviousSlide() {
      if (this.activeSlide === 0) {
        this.activeSlide = this.computedChallenges.length - 1
      } else {
        this.activeSlide = this.activeSlide - 1
      }
    },
    goToSlide(index) {
      this.activeSlide = index
    },
    handleComplete(id) {
      this.completedChallenges.push(id)
      setTimeout(() => {
        this.selectFirstUncompletedChallenge()
      }, 1000)
    },
    handleUncomplete(id) {
      this.completedChallenges = this.completedChallenges.filter(
        (c) => c !== id
      )
    },
    selectFirstUncompletedChallenge() {
      const firstUncompletedChallenge = this.computedChallenges.find(
        (c) => !c.completed
      )
      const targetIndex = firstUncompletedChallenge
        ? firstUncompletedChallenge.id - 1
        : 0
      if (targetIndex !== this.activeSlide) {
        this.activeSlide = targetIndex
      }
    },
    getCompletedChallenges() {
      this.loading = true
      this.$axios
        .get(`/api/user-completed-challenges`)
        .then((response) => {
          this.completedChallenges = response.data.completed_challenges.map(
            (c) => c.id
          )
          this.selectFirstUncompletedChallenge()
        })
        .finally(() => {
          this.loading = false
        })
    },
  },
  created() {
    this.getCompletedChallenges()
  },
  computed: {
    computedChallenges() {
      return this.challenges.map((c) => {
        return {
          ...c,
          completed: this.completedChallenges.includes(c.id),
        }
      })
    },
    completedPercentage() {
      return Math.ceil(
        (this.completedChallenges.length / this.challenges.length) * 100
      )
    },
  },
  data() {
    return {
      glideMoving: false,
      activeSlide: 0,
      loading: false,
      completedChallenges: [],
      challenges: [
        {
          id: 1,
          title: 'Input your income and review your new 70/30 Budget',
        },
        {
          id: 2,
          title: 'Input all your current Expenses',
        },
        {
          id: 3,
          title: 'Compare your Expenses against your Budget',
        },
        {
          id: 4,
          title:
            'Look for ways to improve your Budget so you start setting aside more of your income',
        },
        {
          id: 5,
          title:
            'Finalise your Spending Plan and start adding your daily receipts',
        },
        {
          id: 6,
          title: 'Set up your three Safety Net buckets',
        },
        {
          id: 7,
          title: 'Allocate Cash Savings or Income to your Safety Net buckets',
        },
        {
          id: 8,
          title: 'Input all your current Bad Debts',
        },
        {
          id: 9,
          title: 'Set up your Savings Goals',
        },
        {
          id: 10,
          title: 'Allocate Cash Savings and Income to your Savings Goals',
        },
        {
          id: 11,
          title: 'Set your Investment Goals',
        },
        {
          id: 12,
          title: 'Allocate Cash Savings or Income to your Investments',
        },
        {
          id: 13,
          title:
            'Look around the Dashboard and familiarise yourself with its functions',
        },
        {
          id: 14,
          title:
            'Setup your bank account buckets and automate regular deposits',
        },
        {
          id: 15,
          title: 'Record your Super balance in your Dashboard',
        },
        {
          id: 16,
          title: 'Calculate your projected income at retirement on Superguru',
        },
        {
          id: 17,
          title: 'Allocate a regular salary sacrifice to your Super',
        },
        {
          id: 18,
          title: 'Review the in app Super Health Check',
        },
        {
          id: 19,
          title: 'Review your Super against the top performing funds',
        },
        {
          id: 20,
          title: 'Check for any lost Super',
        },
        {
          id: 21,
          title: 'Sign your binding nomination and understand tax implications',
        },
        {
          id: 22,
          title: 'Input all your current Insurance policies',
        },
        {
          id: 23,
          title: 'Review your Insurance Dashboard',
        },
        {
          id: 24,
          title: 'Learn how to protect your assets',
        },
        {
          id: 25,
          title: 'Review the Estate Planning Checklist',
        },
        {
          id: 26,
          title: 'Create a Will that’s right for you',
        },
        {
          id: 27,
          title: 'Create a POA now for when you can’t be in charge',
        },
        {
          id: 28,
          title: 'Give yourself a round of applause - you’ve done it!',
        },
      ],
    }
  },
}
</script>
