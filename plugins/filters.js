import Vue from 'vue'
import moment from 'moment'

export default () => {
  Vue.filter('currency', function (value) {
    if (Number.isInteger(value)) {
      return `$${value.toLocaleString()}`
    } else {
      return `$${value.toLocaleString(undefined, {
        maximumFractionDigits: 2,
        minimumFractionDigits: 2,
      })}`
    }
  })
  Vue.filter('currencyNoCents', function (value) {
    if (Number.isInteger(value)) {
      return `$${value.toLocaleString()}`
    } else {
      return `$${value.toLocaleString(undefined, {
        maximumFractionDigits: 0,
        minimumFractionDigits: 0,
      })}`
    }
  })
  Vue.filter('percentage', function (value) {
    const p = Math.round((value + Number.EPSILON) * 100) / 100
    if (Number.isInteger(p)) {
      return `${p.toLocaleString()}%`
    } else {
      return `${p.toLocaleString(undefined, {
        maximumFractionDigits: 2,
        minimumFractionDigits: 2,
      })}%`
    }
  })
  Vue.filter('date', function (value) {
    return moment(value).format('DD/MM/yyyy')
  })
  Vue.filter('frequencyToNoun', function (value) {
    switch (value) {
      case 'daily':
        return 'day'
      case 'weekly':
        return 'week'
      case 'fortnightly':
        return 'fortnight'
      case 'monthly':
        return 'month'
      case 'quarterly':
        return 'quarter'
      case 'yearly':
        return 'year'

      default:
        return ''
    }
  })
  Vue.filter('capitalize', function (value) {
    if (!value) return ''
    value = value.toString()
    return value.charAt(0).toUpperCase() + value.slice(1)
  })
}
