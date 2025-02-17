export const valueAndfrequencyToYears = (value, frequency) => {
  const multiplier = getMultiplier(frequency)
  return parseFloat(value * multiplier)
}

export const yearlyValueToFrequency = (value, frequency) => {
  const multiplier = getMultiplier(frequency)
  return parseFloat(value) / multiplier
}

const getMultiplier = (frequency) => {
  let multiplier = 0
  switch (frequency) {
    case 'daily':
      multiplier = 365
      break
    case 'weekly':
      multiplier = 52
      break
    case 'fortnightly':
      multiplier = 26
      break
    case 'monthly':
      multiplier = 12
      break
    case 'quarterly':
      multiplier = 4
      break
    case 'yearly':
      multiplier = 1
      break

    default:
      multiplier = 1
      break
  }
  return multiplier
}
