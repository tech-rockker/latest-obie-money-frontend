<template>
  <div class="single-chart">
    <svg viewBox="0 0 36 36" class="circular-chart orange">
      <path
        class="circle-bg"
        d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
      />
      <path
        class="circle"
        :stroke-dasharray="`${percentage}, 100`"
        d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
      />

      <text
        x="18"
        y="20.35"
        class="percentage"
        v-if="textInnerHtml"
        v-html="textInnerHtml"
      ></text>
      <text v-else x="18" y="20.35" class="percentage">{{ percentage }}%</text>
    </svg>
  </div>
</template>

<script>
export default {
  props: {
    percentage: {
      type: Number,
      default: 0,
    },
    textInnerHtml: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      wVal: 100,
    }
  },
  computed: {
    strokeDashoffset() {
      let val = this.percentage
      const r = 45
      const c = Math.PI * (r * 2)

      if (val < 0) {
        val = 0
      }
      if (val > 100) {
        val = 100
      }

      const pct = ((100 - val) / 100) * c

      return `${pct}  `
    },
  },
}
</script>

<style scoped lang="scss">
.circular-chart {
  display: block;
  max-width: 80%;
  max-height: 250px;
}

.circle-bg {
  fill: none;
  stroke: #eee;
  stroke-width: 3.8;
}

.circle {
  fill: none;
  stroke-width: 2.8;
  stroke-linecap: round;
  animation: progress 1s ease-out forwards;
}

@keyframes progress {
  0% {
    stroke-dasharray: 0 100;
  }
}

.circular-chart.orange .circle {
  stroke: #ee885a;
}

.percentage {
  @apply font-sans;
  font-weight: 700;
  fill: #997ea5;
  font-size: 0.5em;
  text-anchor: middle;
}
</style>
