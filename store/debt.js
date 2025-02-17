import moment from 'moment'
export const getters = {
  lastDebtToPayOff(state, getters, rootState, rootGetters) {
    return [...rootGetters.debts]
    .sort(
      (a, b) => a.paymentsWithAdditional - b.paymentsWithAdditional
    )
    .reverse()[0]
  },
  lastDebtToPayOffDate(state, getters, rootState, rootGetters) {
    if (getters.lastDebtToPayOff) {
      return moment(
        getters.lastDebtToPayOff.paymentsWithAdditionalDate
      ).format('MMM YYYY')
    } else {
      return ''
    }
  },
  yearsTillPaidOff(state, getters, rootState, rootGetters) {
    if (getters.lastDebtToPayOff) {
      return moment(getters.lastDebtToPayOff.paymentsWithAdditionalDate)
        .diff(moment(), 'years', true)
        .toFixed(1)
    } else {
      return ''
    }
  },
  yearsAndMonthsTillPaidOff(state, getters, rootState, rootGetters) {
    if (getters.lastDebtToPayOff) {
      const months = moment(getters.lastDebtToPayOff.paymentsWithAdditionalDate)
      .diff(moment(), 'months', false)
      const years = moment(getters.lastDebtToPayOff.paymentsWithAdditionalDate)
      .diff(moment(), 'years', false)
      return [years, years ? months % (years * 12) : months] 
    } else {
      return ''
    }
  },
  withoutAdditionalLastDebtToPayOff(state, getters, rootState, rootGetters) {
    return [...rootGetters.debts]
    .sort(
      (a, b) => a.paymentsWithoutAdditional - b.paymentsWithoutAdditional
    )
    .reverse()[0]
  },
  withoutAdditionalLastDebtToPayOffDate(state, getters, rootState, rootGetters) {
    if (getters.withoutAdditionalLastDebtToPayOff) {
      return moment(
        getters.withoutAdditionalLastDebtToPayOff.paymentsWithoutAdditionalDate
      ).format('MMM YYYY')
    } else {
      return ''
    }
  },
  withoutAdditionalYearsTillPaidOff(state, getters, rootState, rootGetters) {
    if (getters.withoutAdditionalLastDebtToPayOff) {
      return moment(getters.withoutAdditionalLastDebtToPayOff.paymentsWithoutAdditionalDate)
        .diff(moment(), 'years', true)
        .toFixed(1)
    } else {
      return ''
    }
  },  
  withoutAdditionalYearsAndMonthsTillPaidOff(state, getters, rootState, rootGetters) {
    if (getters.withoutAdditionalLastDebtToPayOff) {
      const months = moment(getters.withoutAdditionalLastDebtToPayOff.paymentsWithoutAdditionalDate)
      .diff(moment(), 'months', false)
      const years = moment(getters.withoutAdditionalLastDebtToPayOff.paymentsWithoutAdditionalDate)
      .diff(moment(), 'years', false)
      return [years, months % (years * 12)] 
    } else {
      return ''
    }
  },
}