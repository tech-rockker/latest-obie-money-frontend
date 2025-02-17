export const getSnowball = (a, additionalPayment = 0, mode) => {
  const accounts = Array.from(a)

  if (mode === 'snowball') {
    // Sort the array from lowest balance to highest
    accounts.sort((a, b) => {
      return a.balance - b.balance
    })
  } else if (mode === 'avalance') {
    // Sort the array from highest interest rate to lowest
    accounts.sort((a, b) => {
      return b.interest - a.interest
    })
  }
  accounts.forEach((account) => {
    account.currentBalance = account.balance
    account.payments = []
  })

  const makePayments = async () => {
    // Only make a payment to an account if it still has a balance by filtering out all accounts with 0 balance
    accounts
      .filter((account) => account.currentBalance)
      .forEach((account, index) => {
        // Only make a payment if there is remaining balance
        makePayment(account, index === 0)
      })
    if (accounts.find((account) => account.currentBalance > 0)) {
      await makePayments()
    }
  }
  const makePayment = (account, isFirstAccount) => {
    account.payments.push(getPaymentObj(account, isFirstAccount))
  }
  const getPaymentObj = (account, isFirstAccount) => {
    // The first account should include the min payments of all accounts that have been completed

    const paymentFromCompleteAccounts = accounts
      .filter((account) => account.currentBalance <= 0)
      .reduce((a, b) => a + b.minPayment, 0)

    let payment = 0
    let balance = 0
    let interest = 0

    // If this is not the first payment you've made
    if (account.payments.length) {
      const previousPayment = account.payments[account.payments.length - 1]
      payment = account.minPayment
      if (isFirstAccount) {
        payment += paymentFromCompleteAccounts
        payment += additionalPayment
      }
      balance = previousPayment.balance + previousPayment.interest - payment
      interest = balance * (account.interest / 100 / 12)
    } else {
      payment = account.minPayment
      if (isFirstAccount) {
        payment += additionalPayment
      }
      interest = account.balance * (account.interest / 100 / 12)
      balance = account.currentBalance - payment + interest
    }
    account.currentBalance = balance < 0 ? 0 : balance
    return {
      payment,
      balance,
      interest,
    }
  }

  makePayments()
  return accounts
}
