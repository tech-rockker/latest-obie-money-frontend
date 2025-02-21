/* eslint-disable camelcase */
// import { v4 as uuidv4 } from 'uuid'
import Vue from 'vue'
import moment from 'moment'
import _ from 'lodash'
import expenseIcons from '../utils/expenseIcons'
import insuranceIcons from '../utils/insuranceIcons'
import { getSnowball } from '@/plugins/snowball'

// import defaultExpenses from '~/utils/defaultExpenses'
import {
  valueAndfrequencyToYears,
  yearlyValueToFrequency,
} from '~/utils/calcMethods'

const expenseIconArray = Object.entries(expenseIcons).map(([key, value]) => ({
  label: key,
  bucket: 'Essential Bills',
  icon: value ? `/expense-icons/${value}` : null,
}))
const insuranceIconArray = Object.entries(insuranceIcons).map(([key, value]) => ({
  label: key,
  bucket: 'Insurances',
  icon: value ? `/expense-icons/${value}` : null,
}))

/*eslint-disable */
const getSumFromArray = (array, key) => {
  return array.reduce((a, b) => a + b[key], 0)
}
const getPaymentCountFromUuidAndSnowball = (uuid, snowball) => {
  const account = snowball.find((a) => a.uuid === uuid)
  return account.payments.length
}
const hasReward = (rewardId, rewards) => {
  if (!rewards) {
    return false
  }

  return rewards.some((reward) => reward.id === rewardId && reward.has_reward)
}
const getComputedValues = (amount, frequency, percentage) => {
  const obj = {}
  const state = $nuxt.$store.state
  const getters = $nuxt.$store.getters

  obj.totalPerYear = valueAndfrequencyToYears(amount, frequency)
  obj.totalPerDay = yearlyValueToFrequency(obj.totalPerYear, 'daily')
  obj.totalPerFrequency = yearlyValueToFrequency(
    obj.totalPerYear,
    state.frequency
  )
  if (!getters.netIncomePerYear) {
    obj.percentageOfIncome = 0
  } else {
    obj.percentageOfIncome = (obj.totalPerYear / getters.netIncomePerYear) * 100
  }

  if (percentage !== null) {
    obj.optimisedTotalPerFrequency =
      getters.netIncomePerFrequency * (percentage / 100)
    obj.optimisedTotalPerYear = getters.netIncomePerYear * (percentage / 100)
    obj.optimisedTotalPerDay = yearlyValueToFrequency(
      obj.optimisedTotalPerYear,
      'daily'
    )
  }
  return obj
}

const getTransactionsComputedValues = (transactionsTotal, percentageOfIncome) => {
  const getters = $nuxt.$store.getters
  const state = $nuxt.$store.state
  let transactionsPercentageOfIncome = 0
  const totalPerYear = valueAndfrequencyToYears(transactionsTotal, state.frequency)
  const transactionTotalPerDay = yearlyValueToFrequency(totalPerYear, 'daily')

  if (getters.netIncomePerYear) {
    transactionsPercentageOfIncome = (transactionsTotal / getters.netIncomePerFrequency) * 100
  }

  return {
    transactionsTotal,
    transactionsPercentageOfIncome,
    transactionsAreOptimal: transactionsPercentageOfIncome <= percentageOfIncome,
    transactionTotalPerDay,
  }
}
/* eslint-enable */

const defaultOnboarding = {
    goal: '',
    statement: '',
    household: '',
    challenges_examples: [],
    confidence_examples: [],

  income_frequency: '',
  net_income: '',
  next_payday_date: '',
  cash_savings: '',

  income_to_investments_amount: '',
  income_to_investments_frequency: 'monthly',
  // income_to_investments_percentage: '',
  income_to_savings_amount: '',
  income_to_savings_frequency: 'monthly',
  // income_to_savings_percentage: ''

  industry_provider_examples: [],

  income_projected_at_retirement: 0
}

const defaultSavings = {
  amount: 0,
  frequency: 'monthly',
  percentage: 20,
}

const defaultInvestment = {
  amount: 0,
  frequency: 'monthly',
  percentage: 10,
}

const defaultSafetyNet = {
  emergencyFund: {
    amount: 0,
    allocationSavings: 0,
    allocationIncome: 0,
  },
  bufferForLumpyExpenses: {
    amount: 0,
    allocationSavings: 0,
    allocationIncome: 0,
  },
  threeMonthsOfExpenses: {
    amount: 0,
    allocationSavings: 0,
    allocationIncome: 0,
  },
}

export const state = () => ({
  submittedToZapier: false,
  frequency: 'monthly',
  investment: { ...defaultInvestment },
  savings: { ...defaultSavings },
  expenses: {},
  categories: {},
  subcategories: {},
  debts: {},
  transactions: {},
  insurances: {},
  superFunds: {},
  transactionsLoading: false,
  debtsOrderBy: 'amount',
  goals: {},
  investmentGoals: {},
  // Relationship between expenses and categories
  categoryExpenses: {},
  // Relationship between categories and subcategories
  subcategoryCategories: {},
  onboarding: { ...defaultOnboarding },
  expenseOptions: [
    {
      label: 'Other',
      bucket: 'all',
    },
    {
      label: 'Mortgage',
      bucket: 'Housing',
    },
    {
      label: 'Rent',
      bucket: 'Housing',
    },
    {
      label: 'Board',
      bucket: 'Housing',
    },
    {
      label: 'Accom',
      bucket: 'Housing',
    },
    {
      label: 'Airbnb',
      bucket: 'Housing',
    },
    {
      label: 'Fuel',
      bucket: 'Transport',
    },
    {
      label: 'Registration',
      bucket: 'Transport',
    },
    {
      label: 'Service',
      bucket: 'Transport',
    },
    {
      label: 'Repairs',
      bucket: 'Transport',
    },
    {
      label: 'Carwash',
      bucket: 'Transport',
    },
    {
      label: 'Valet',
      bucket: 'Transport',
    },
    {
      label: 'Public Transport',
      bucket: 'Transport',
    },
    {
      label: 'Tolls',
      bucket: 'Transport',
    },
    {
      label: 'Carparking',
      bucket: 'Transport',
    },
    {
      label: 'Ferry Tickets',
      bucket: 'Transport',
    },
    {
      label: 'Ride Share',
      bucket: 'Transport',
    },
    {
      label: 'Taxis',
      bucket: 'Transport',
    },
    {
      label: 'Aldi',
      bucket: 'Groceries/Food',
    },
    {
      label: 'Coles',
      bucket: 'Groceries/Food',
    },
    {
      label: 'Woolworths',
      bucket: 'Groceries/Food',
    },
    {
      label: 'IGA',
      bucket: 'Groceries/Food',
    },
    {
      label: 'Farmers Market',
      bucket: 'Groceries/Food',
    },
    {
      label: 'Coffee with friends',
      bucket: 'Expense',
    },
    {
      label: 'Drinks with mates',
      bucket: 'Expense',
    },
    {
      label: 'Dinners Out',
      bucket: 'Expense',
    },
    {
      label: 'Takeaways',
      bucket: 'Expense',
    },
    {
      label: 'Date Night!',
      bucket: 'Expense',
    },
    {
      label: 'Caffine Hit!',
      bucket: 'Expense',
    },
    {
      label: 'Movies',
      bucket: 'Expense',
    },
    ...expenseIconArray,
    // {
    //   label: 'Gym',
    //   bucket: 'Essential Bills',
    // },
    // {
    //   label: 'Electricity',
    //   bucket: 'Essential Bills',
    // },
    // {
    //   label: 'Gas',
    //   bucket: 'Essential Bills',
    // },
    // {
    //   label: 'Water',
    //   bucket: 'Essential Bills',
    // },
    // {
    //   label: 'Rates',
    //   bucket: 'Essential Bills',
    // },
    // {
    //   label: 'School Fees',
    //   bucket: 'Essential Bills',
    // },
    ...insuranceIconArray,
    {
      label: 'Doctors Visits',
      bucket: 'Insurances',
    },
    {
      label: 'Medical Insurance',
      bucket: 'Insurances',
    },
    {
      label: 'Car Insurance',
      bucket: 'Insurances',
    },
    {
      label: 'Home and Contents Insurance',
      bucket: 'Insurances',
    },
  ],
  frequencyOptions: [
    {
      label: 'Daily',
      value: 'daily',
    },
    {
      label: 'Weekly',
      value: 'weekly',
    },
    {
      label: 'Fortnightly',
      value: 'fortnightly',
    },
    {
      label: 'Monthly',
      value: 'monthly',
    },
    {
      label: 'Quarterly',
      value: 'quarterly',
    },
    {
      label: 'Yearly',
      value: 'yearly',
    },
  ],
  insuranceTypeMap: {
      'Medical Insurance': 'Medical',
      'Travel Insurance': 'Travel',
      'Car Insurance': 'Car',
      'Pet Insurance': 'Pet',
      'Building Insurance': 'Building',
      'Home and Contents Insurance': 'Home & Contents',
      'Landlords Insurance': 'Landlords',
      'Life Insurance inside Super': 'Life inside Super',
      'Life Insurance outside Super': 'Life outside Super',
      'Income Protection Insurance': 'Income Protection',
      'TDP Insurance': 'TDP',
      'Trauma Insurance': 'Trauma',
      'Life Insurance': 'Life',
      'Public Indemnity Insurance': 'Public Indemity',   
      'Other': 'Other'
  },
  insuranceTypeOptions: [
    {
      label: 'Medical',
      value: 'Medical Insurance',
    },
    {
      label: 'Travel',
      value: 'Travel Insurance',
    },
    {
      label: 'Car',
      value: 'Car Insurance',
    },
    {
      label: 'Pet',
      value: 'Pet Insurance',
    },
    {
      label: 'Building',
      value: 'Building Insurance',
    },
    {
      label: 'Home & Contents',
      value: 'Home and Contents Insurance',
    },
    {
      label: 'Landlords',
      value: 'Landlords Insurance',
    },
    {
      label: 'Life inside Super',
      value: 'Life Insurance inside Super',
    },
    {
      label: 'Life outside Super',
      value: 'Life Insurance outside Super',
    },
    {
      label: 'Income Protection',
      value: 'Income Protection Insurance',
    },
    {
      label: 'TDP',
      value: 'TDP Insurance',
    },
    {
      label: 'Trauma',
      value: 'Trauma Insurance',
    },
    {
      label: 'Life',
      value: 'Life Insurance',
    },
    {
      label: 'Public Indemity',
      value: 'Public Indemnity Insurance',
    },
    {
      label: 'Other',
      value: 'Other',
    },
  ],
  investmentTypeOptions: [
    {
      label: 'Salary Sacrifice into Super',
      value: 'salary_sacrifice_into_super',
    },
    {
      label: 'Set and Forget EFT',
      value: 'set_and_forget_EFT',
    },
    {
      label: 'Invest in Share market',
      value: 'invest_in_share_market',
    },
    {
      label: 'Pay Mortgage Down Early',
      value: 'pay_mortgage_down_early',
    },
    {
      label: 'Invest in Crypto',
      value: 'invest_in_crypto',
    },
    {
      label: 'Super Contribution after Tax',
      value: 'super_contribution_after_tax',
    },
    {
      label: 'Other',
      value: 'other',
    },
  ],
  safetyNet: { ...defaultSafetyNet },
  bgGridPosition: 'top',
})

export const getters = {
  transactionsTotal(state, getters) {
    const expensesTotal = getSumFromArray(getters.expenses, 'transactionsTotal')
    const debtsTotal = getSumFromArray(getters.debts, 'transactionsTotal')
    return expensesTotal + debtsTotal
  },
  debtIncomeSavingsAllocated(state) {
    return state.onboarding.debt_income_savings_allocated
  },
  completedBudget(state) {
    return hasReward(1, state?.auth?.user?.rewards)
  },
  completedSafetyNet(state) {
    return hasReward(2, state?.auth?.user?.rewards)
  },
  completedDebt(state) {
    return hasReward(3, state?.auth?.user?.rewards)
  },
  completedGoals(state) {
    return hasReward(4, state?.auth?.user?.rewards)
  },
  completedInvest(state) {
    return hasReward(6, state?.auth?.user?.rewards)
  },
  allRewardsCompleted(state) {
    const rewards = state?.auth?.user?.rewards
    if (rewards) {
      const unassignedRewards = rewards.filter(
        (reward) => !reward.has_reward
      )
      return unassignedRewards.length === 0
    } else {
      return false
    }
  },
  finalReward(state, getters) {
    return {
      title: 'Money Mastered!',
      image_url: 'graduate.png',
      id: null,
      has_reward: getters.allRewardsCompleted,
    }
  },
  netIncome(state) {
    return parseInt(state.onboarding.net_income)
  },
  incomeProjectedAtRetirement(state) {
    return parseFloat(state.onboarding.income_projected_at_retirement)
  },
  incomeFrequency(state) {
    return state.onboarding.income_frequency
  },
  surplusPerFrequency(state, getters) {
    return getters.netIncomePerFrequency - getters.totalExpensesPerFrequency
  },
  netIncomePerYear(state, getters) {
    return valueAndfrequencyToYears(getters.netIncome, getters.incomeFrequency)
  },
  netIncomePerFrequency(state, getters) {
    return yearlyValueToFrequency(getters.netIncomePerYear, state.frequency)
  },
  totalGoalAmount(state, getters) {
    return getSumFromArray(getters.goals, 'amount')
  },
  totalInvestmentGoalAmount(state, getters) {
    return getSumFromArray(getters.investmentGoals, 'amount')
  },
  totalDebtAmountOwing(state, getters) {
    return getSumFromArray(getters.debts, 'amountOwing')
  },
  totalDebtMinMonthlyRepayment(state, getters) {
    return getSumFromArray(getters.debts, 'minMonthlyRepayment')
  },
  cashSavings(state) {
    return state.onboarding.cash_savings
  },
  cashSavingsAllocated(state, getters) {
    let amount = 0
    // Add all cash savings allocated from safety net
    amount += state.safetyNet.emergencyFund.allocationSavings
    amount += state.safetyNet.bufferForLumpyExpenses.allocationSavings
    amount += state.safetyNet.threeMonthsOfExpenses.allocationSavings
    // Add all the cash savings allocated to goals
    amount += getSumFromArray(getters.goals, 'allocationSavings')

    return amount
  },
  cashSavingsAvailable(state, getters) {
    return getters.cashSavings - getters.cashSavingsAllocated
  },
  // This value should be monthly
  incomeSavings(state, getters) {
    const totalPerYear = valueAndfrequencyToYears(
      getters.savings.amount,
      getters.savings.frequency
    )
    const totalPerMonth = yearlyValueToFrequency(totalPerYear, 'monthly')
    return totalPerMonth
  },
  incomeSavingsAllocated(state, getters) {
    let amount = 0
    amount += getters.debtIncomeSavingsAllocated

    // Add all cash savings allocated from safety net
    amount += state.safetyNet.emergencyFund.allocationIncome
    amount += state.safetyNet.bufferForLumpyExpenses.allocationIncome
    amount += state.safetyNet.threeMonthsOfExpenses.allocationIncome
    // Add all the income savings allocated to goals
    amount += getSumFromArray(getters.goals, 'allocationIncome')

    return amount
  },
  incomeSavingsAvailable(state, getters) {
    return getters.incomeSavings - getters.incomeSavingsAllocated
  },
  incomeInvestments(state, getters) {
    // This is per state.investment.frequency
    return getters.investment.amount
  },
  incomeInvestmentsAllocated(state, getters) {
    // All values here should be converted to state.investment.frequency
    let amount = 0
    // Grab the yearly allocation of interest from the investment goals
    const investmentGoalsYearlyTotal = getSumFromArray(
      getters.investmentGoals,
      'allocationIncomeYearly'
    )
    // And convert it to the investment frequency set in the budgeting section
    amount += yearlyValueToFrequency(
      investmentGoalsYearlyTotal,
      getters.investment.frequency
    )
    return amount
  },
  incomeInvestmentsAvailable(state, getters) {
    return getters.incomeInvestments - getters.incomeInvestmentsAllocated
  },
  incomeInvestmentsAllocatedMonthly(state, getters) {
    const yearlyValue = valueAndfrequencyToYears(
      getters.incomeInvestmentsAllocated,
      getters.investment.frequency
    )
    return yearlyValueToFrequency(yearlyValue, 'monthly')
  },
  incomeInvestmentsAvailablePerFrequency(state, getters) {
    const yearlyValue = valueAndfrequencyToYears(
      getters.incomeInvestmentsAvailable,
      getters.investment.frequency
    )
    return yearlyValueToFrequency(yearlyValue, state.frequency)
  },
  safetyNetTotal(state) {
    const { emergencyFund, bufferForLumpyExpenses, threeMonthsOfExpenses } =
      state.safetyNet
    return (
      Number(emergencyFund.amount) +
      Number(bufferForLumpyExpenses.amount) +
      Number(threeMonthsOfExpenses.amount)
    )
  },
  transactions(state) {
    return Object.values(state.transactions)
  },
  transactionsWithImages(state, getters) {
    return getters.transactions.filter((transaction) => transaction.image_url)
  },
  insurances(state) {
    const arr = Object.values(state.insurances)
    return arr.map((insurance) => {
      const computedValues = getComputedValues(
        insurance.premium,
        insurance.frequency,
        null
      )
      return {
        ...insurance,
        ...computedValues,
      }
    })
  },
  insurancesInsideSuper(state, getters) {
    return getters.insurances.filter((insurance) => insurance.insurance_held === 'Inside Super')
  },
  insurancesOutsideSuper(state, getters) {
    return getters.insurances.filter((insurance) => insurance.insurance_held === 'Outside Super')
  },
  insurancesTotalPerFrequency(state, getters) {
    return getSumFromArray(getters.insurances, 'totalPerFrequency')
  },
  insurancesPercentageOfIncome(state, getters) {
    return getSumFromArray(getters.insurances, 'percentageOfIncome')
  },
  insurancesOutsideSuperTotalPerFrequency(state, getters) {
    return getSumFromArray(getters.insurancesOutsideSuper, 'totalPerFrequency')
  },
  insurancesOutsideSuperPercentageOfIncome(state, getters) {
    return getSumFromArray(getters.insurancesOutsideSuper, 'percentageOfIncome')
  },
  insurancesInsideSuperTotalPerFrequency(state, getters) {
    return getSumFromArray(getters.insurancesInsideSuper, 'totalPerFrequency')
  },
  superFunds(state) {
    const arr = Object.values(state.superFunds)
    return arr
  },
  superFundsTotalCurrentBalance(state, getters) {
    return getSumFromArray(getters.superFunds, 'current_balance')
  },
  insuranceClosestRenewalDate(state, getters) {
    const insurances = getters.insurances
    const sortedInsurances = insurances
      .filter((insurance) => moment().isBefore(moment(insurance.annual_review_date)))
      .sort(
        (a, b) => {
          const aDate = moment(a.annual_review_date)
          const bDate = moment(b.annual_review_date)
          if (aDate.isBefore(bDate)) {
            return -1
          } else if (aDate.isAfter(bDate)) {
            return 1
          } else {
            return 0
          }
        }
      )
    if (sortedInsurances.length === 0) {
      return null
    }
    return sortedInsurances[0]
  },
  expenses(state, getters) {
    const arr = Object.values(state.expenses)
    return arr.map((expense) => {
      const categories = Object.entries(state.categoryExpenses)
        .filter((categoryExpense) => categoryExpense[1] === expense.uuid)
        .map((categoryExpense) => {
          const category = state.categories[categoryExpense[0]]
          const subcategories = Object.entries(state.subcategoryCategories)
            .filter(
              (subcategoryCategory) => subcategoryCategory[1] === category.uuid
            )
            .map((subcategoryCategory) => {
              const theSubcategory = state.subcategories[subcategoryCategory[0]]

              const computedValues = getComputedValues(
                theSubcategory.amount,
                theSubcategory.frequency,
                null
              )
              const transactions = getters.transactions.filter(t => t.type === 'Expense' && t.model_id === theSubcategory.uuid)
              const transactionsTotal = getSumFromArray(transactions, 'amount')
              const transactionsComputedValues = getTransactionsComputedValues(transactionsTotal, computedValues.percentageOfIncome)

              return {
                transactions,
                ...transactionsComputedValues,
                ...theSubcategory,
                ...computedValues,
              }
            })


          const theCategory = {
            ...category,
            subcategories,
          }
          const computedValues = getComputedValues(
            getSumFromArray(theCategory.subcategories, 'totalPerYear'),
            'yearly',
            theCategory.percentage
          )

          theCategory.isOptimal =
            computedValues.percentageOfIncome <= theCategory.percentage

          // TODO only include subcategory type transactions (not expense)
          const transactions = getters.transactions.filter(t => t.type === 'SubCategory' && t.model_id === category.uuid)
          // TODO include transactions from nested expenses in calculation
          const transactionsTotalExpenses = getSumFromArray(subcategories, 'transactionsTotal')
          const transactionsTotalWithoutExpenses = getSumFromArray(transactions, 'amount')
          const transactionsComputedValues = getTransactionsComputedValues(transactionsTotalExpenses + transactionsTotalWithoutExpenses, computedValues.percentageOfIncome)

          return {
            ...theCategory, ...computedValues, transactions, ...transactionsComputedValues, transactionsTotalWithoutExpenses
          }
        })

      // Here we can run the calcs
      const theExpense = {
        ...expense,
        categories,
      }
      const computedValues = getComputedValues(
        getSumFromArray(theExpense.categories, 'totalPerYear'),
        'yearly',
        theExpense.percentage
      )
      theExpense.isOptimal =
        computedValues.percentageOfIncome <= theExpense.percentage

      const transactionsTotal = getSumFromArray(categories, 'transactionsTotal')
      const transactionsComputedValues = getTransactionsComputedValues(transactionsTotal, computedValues.percentageOfIncome)
      return { ...theExpense, ...computedValues, ...transactionsComputedValues }
    })
  },
  debts(state, getters) {
    const orderBy = state.debtsOrderBy
    const debts = [...Object.values(state.debts)].sort((a, b) => {
      if (orderBy === 'amount') {
        return a.amountOwing - b.amountOwing
      } else if (orderBy === 'interest') {
        return b.interest - a.interest
      } else {
        return 0
      }
    })
    // calc the payments here...
    const snowballWithoutAdditional = getSnowball(
      debts.map((debt) => {
        return {
          uuid: debt.uuid,
          balance: debt.amountOwing,
          interest: debt.interest,
          minPayment: debt.minMonthlyRepayment,
        }
      })
    )
    const snowballWithAdditional = getSnowball(
      debts.map((debt) => {
        return {
          uuid: debt.uuid,
          balance: debt.amountOwing,
          interest: debt.interest,
          minPayment: debt.minMonthlyRepayment,
        }
      }),
      getters.debtIncomeSavingsAllocated
    )

    return debts.map((debt) => {
      const paymentsWithoutAdditional = getPaymentCountFromUuidAndSnowball(
        debt.uuid,
        snowballWithoutAdditional
      )
      const paymentsWithAdditional = getPaymentCountFromUuidAndSnowball(
        debt.uuid,
        snowballWithAdditional
      )
      const transactions = getters.transactions.filter(t => t.debt_id === debt.uuid)
      const transactionsTotal = getSumFromArray(transactions, 'amount')
      const transactionsComputedValues = getTransactionsComputedValues(transactionsTotal, 0)
      return {
        paymentsWithoutAdditional,
        paymentsWithoutAdditionalDate: moment()
          .add(paymentsWithoutAdditional, 'months')
          .toDate(),
        paymentsWithAdditional,
        paymentsWithAdditionalDate: moment()
          .add(paymentsWithAdditional, 'months')
          .toDate(),
        ...debt,
        ...getComputedValues(debt.minMonthlyRepayment, 'monthly', null),
        transactions,
        ...transactionsComputedValues
      }
    })
  },
  goals(state) {
    return Object.values(state.goals).map((goal) => {
      const yearsUntilAchieveBy = moment(goal.achieveBy).diff(
        moment(),
        'years',
        true
      )
      const totalPerYear = goal.amount / yearsUntilAchieveBy
      const totalPerMonth = yearlyValueToFrequency(totalPerYear, 'monthly')
      // The amount without income savings
      const amountMinusSavings = goal.amount - goal.allocationSavings
      // monthly income
      let monthsToComplete = null
      let completeAt = null

      if (goal.allocationIncome) {
        monthsToComplete = amountMinusSavings / goal.allocationIncome
        completeAt = moment().add(monthsToComplete, 'months').toDate()
      }

      return {
        ...goal,
        completeAt,
        monthsToComplete,
        yearsUntilAchieveBy,
        totalPerYear,
        totalPerMonth,
      }
    })
  },
  investmentGoals(state) {
    return Object.values(state.investmentGoals).map((goal) => {
      const type = state.investmentTypeOptions.find(
        (t) => t.value === goal.type
      )
      const typeDisplay = type ? type.label : ''
      const allocationIncomeYearly = valueAndfrequencyToYears(
        goal.allocationIncome,
        goal.allocationIncomeFrequency
      )
      const yearsUntilAchieved = goal.amount / allocationIncomeYearly
      const yearAchieved = moment()
        .add(yearsUntilAchieved, 'years')
        .format('YYYY')
      return {
        yearsUntilAchieved,
        yearAchieved,
        allocationIncomeYearly,
        typeDisplay,
        ...goal,
      }
    })
  },
  totalExpensesPerFrequency(state, getters) {
    return getSumFromArray(getters.expenses, 'totalPerFrequency')
  },
  totalExpensesPerYear(state, getters) {
    return getSumFromArray(getters.expenses, 'totalPerYear')
  },
  investment(state, getters) {
    const amount = state.onboarding.income_to_investments_amount
    const frequency = state.onboarding.income_to_investments_frequency
    const percentage = 10

    const computedValues = getComputedValues(amount, frequency, percentage)
    const isOptimal = computedValues.percentageOfIncome >= percentage

    return {
      amount,
      frequency,
      percentage,
      ...computedValues,
      isOptimal,
    }
  },
  savings(state, getters) {
    const amount = state.onboarding.income_to_savings_amount
    const frequency = state.onboarding.income_to_savings_frequency
    const percentage = 20

    const computedValues = getComputedValues(amount, frequency, percentage)
    const isOptimal = computedValues.percentageOfIncome >= percentage
    return {
      amount,
      frequency,
      percentage,
      ...computedValues,
      isOptimal,
    }
  },
  debt(state, getters) {
    const amount = getSumFromArray(getters.debts, 'minMonthlyRepayment')
    const computedValues = getComputedValues(amount, 'monthly', 0)
    const isOptimal = computedValues.percentageOfIncome <= 0
    // const transactions = getters.transactions.filter(t => t.model_id === category.uuid)
    const transactionsTotal = getSumFromArray(getters.debts, 'transactionsTotal')
    const transactionsComputedValues = getTransactionsComputedValues(transactionsTotal, computedValues.percentageOfIncome)

    return {
      ...computedValues,
      ...transactionsComputedValues,
      isOptimal,
    }
  },
}

export const mutations = {
  createExpense(state, payload) {
    Vue.set(state.expenses, payload.uuid, payload)
  },
  createCategory(state, payload) {
    Vue.set(state.categories, payload.uuid, payload)
  },
  createSubcategory(state, payload) {
    Vue.set(state.subcategories, payload.uuid, payload)
  },
  deleteSubcategory(state, uuid) {
    Vue.delete(state.subcategories, uuid)
    Vue.delete(state.subcategoryCategories, uuid)
  },
  createDebt(state, payload) {
    Vue.set(state.debts, payload.uuid, payload)
  },
  createTransaction(state, payload) {
    Vue.set(state.transactions, payload.id, payload)
  },
  createInsurance(state, payload) {
    Vue.set(state.insurances, payload.id, payload)
  },
  createSuperFund(state, payload) {
    Vue.set(state.superFunds, payload.id, payload)
  },
  updateInsurance(state, payload) {
    Vue.set(state.insurances, payload.id, payload)
  },
  updateSuperFund(state, payload) {
    Vue.set(state.superFunds, payload.id, payload)
  },
  deleteInsurance(state, uuid) {
    Vue.delete(state.insurances, uuid)
  },
  deleteSuperFund(state, uuid) {
    Vue.delete(state.superFunds, uuid)
  },
  updateTransaction(state, payload) {
    Vue.set(state.transactions, payload.id, payload)
  },
  createGoal(state, payload) {
    Vue.set(state.goals, payload.uuid, payload)
  },
  setInvestmentGoal(state, payload) {
    Vue.set(state.investmentGoals, payload.uuid, payload)
  },
  deleteInvestmentGoal(state, uuid) {
    Vue.delete(state.investmentGoals, uuid)
  },
  deleteTransaction(state, uuid) {
    Vue.delete(state.transactions, uuid)
  },
  deleteGoal(state, uuid) {
    Vue.delete(state.goals, uuid)
  },
  updateGoal(state, payload) {
    Vue.set(state.goals, payload.uuid, payload)
  },
  updateDebt(state, payload) {
    Vue.set(state.debts, payload.uuid, { ...payload })
  },
  deleteDebt(state, uuid) {
    Vue.delete(state.debts, uuid)
  },
  updateInvestment(state, payload) {
    Vue.set(state.investment, payload.key, payload.value)
  },
  updateSavings(state, payload) {
    Vue.set(state.savings, payload.key, payload.value)
  },
  addCategoryToExpense(state, { categoryUuid, expenseUuid }) {
    Vue.set(state.categoryExpenses, categoryUuid, expenseUuid)
  },
  addSubcategoryToCategory(state, { categoryUuid, subcategoryUuid }) {
    Vue.set(state.subcategoryCategories, subcategoryUuid, categoryUuid)
  },
  setValue(state, { key, value }) {
    Vue.set(state, key, value)
  },
  setOnboardingValue(state, { key, value }) {
    Vue.set(state.onboarding, key, value)
  },
  setEntityValue(state, { entity, uuid, key, value }) {
    Vue.set(state[entity][uuid], key, value)
  },
  setSafetyNetValue(state, { category, key, value }) {
    Vue.set(state.safetyNet[category], key, value)
  },
}

export const actions = {
  setValue({ commit }, { key, value }) {
    commit('setValue', { key, value })
  },
  syncProfile: _.debounce(function ({ state }) {
    this.$axios.post('/api/profile', state.onboarding)
  }, 500),
  setOnboardingValue(
    { commit, dispatch, state, getters, $auth },
    { key, value }
  ) {
    commit('setOnboardingValue', { key, value })
    // Only sync if the user is logged in. Once they've completed registration on page 7 it will start syncing
    if (state.auth.loggedIn) {
    //   dispatch('syncProfile')
    }
  },
  setSafetyNetValue({ commit, dispatch }, { category, key, value }) {
    commit('setSafetyNetValue', { category, key, value })
    dispatch('syncSafetyNet')
  },
  syncSafetyNet: _.debounce(function ({ state }) {
    const payload = {
      buffer_for_lumpy_expenses_allocation_income:
        state.safetyNet.bufferForLumpyExpenses.allocationIncome,
      buffer_for_lumpy_expenses_allocation_savings:
        state.safetyNet.bufferForLumpyExpenses.allocationSavings,
      buffer_for_lumpy_expenses_amount:
        state.safetyNet.bufferForLumpyExpenses.amount,
      emergency_fund_allocation_income:
        state.safetyNet.emergencyFund.allocationIncome,
      emergency_fund_allocation_savings:
        state.safetyNet.emergencyFund.allocationSavings,
      emergency_fund_amount: state.safetyNet.emergencyFund.amount,
      three_months_of_expenses_allocation_income:
        state.safetyNet.threeMonthsOfExpenses.allocationIncome,
      three_months_of_expenses_allocation_savings:
        state.safetyNet.threeMonthsOfExpenses.allocationSavings,
      three_months_of_expenses_amount:
        state.safetyNet.threeMonthsOfExpenses.amount,
    }
    this.$axios.post('/api/safety-net', payload)
  }, 500),
  setEntityValue({ commit }, { entity, uuid, key, value }) {
    commit('setEntityValue', { entity, uuid, key, value })
  },
  resetDemo({ dispatch, commit }) {
    dispatch('resetBudget')

    // Reset
    commit('setValue', { key: 'onboarding', value: { ...defaultOnboarding } })
    commit('setValue', { key: 'goals', value: {} })
    commit('setValue', { key: 'investmentGoals', value: {} })
    commit('setValue', { key: 'incomeSavingsAllocated', value: 0 })
    commit('setValue', { key: 'safetyNet', value: { ...defaultSafetyNet } })
  },
  resetBudget({ commit }) {
    commit('setValue', { key: 'savings', value: { ...defaultSavings } })
    commit('setValue', { key: 'investment', value: { ...defaultInvestment } })
    commit('setValue', { key: 'expenses', value: {} })
    commit('setValue', { key: 'categories', value: {} })
    commit('setValue', { key: 'subcategories', value: {} })
    commit('setValue', { key: 'debts', value: {} })
    commit('setValue', { key: 'categoryExpenses', value: {} })
    commit('setValue', { key: 'subcategoryCategories', value: {} })
  },
  buildScenario({ commit, dispatch, getters, state }) {
    const user = state.auth.user
    user.categories.forEach((category) => {
      commit('createExpense', {
        uuid: category.id,
        label: category.name,
        icon: category.image_url,
        percentage: parseInt(category.percentage),
      })
      category.sub_categories.forEach((subcategory, index) => {
        commit('createCategory', {
          order: index + 1,
          uuid: subcategory.id,
          label: subcategory.name,
          icon: subcategory.image_url,
          percentage: parseInt(subcategory.percentage),
        })
        commit('addCategoryToExpense', {
          categoryUuid: subcategory.id,
          expenseUuid: category.id,
        })
      })
    })
  },
  async loadAllData({ dispatch, state }) {
    await dispatch('setValuesFromProfile')
    await dispatch('getExpenses')
    await dispatch('getDebts')
    await dispatch('getSafetyNet')
  },
  setValuesFromProfile({ dispatch, state, commit }) {
    const user = state?.auth?.user
    const profile = { ...user?.profile }
    const investments = user?.investments
    const goals = user?.goals
    if (profile) {
      if (!profile.debt_income_savings_allocated) {
        profile.debt_income_savings_allocated = 0
      }
      // if (profile.challenges_examples) {
      //   profile.challenges_examples = profile.challenges_examples
      // }
      // if (profile.confidence_examples) {
      //   profile.confidence_examples = profile.confidence_examples
      // }
      dispatch('setValue', {
        key: 'onboarding',
        value: { ...state.onboarding, ...profile },
      })
    }
    if (investments && investments.length) {
      investments.forEach((investment) => {
        commit('setInvestmentGoal', {
          name: investment.name,
          type: investment.type,
          amount: investment.amount,
          allocationIncome: investment.allocation_income,
          allocationIncomeFrequency: investment.allocation_income_frequency,
          uuid: investment.id,
        })
      })
    }
    if (goals && goals.length) {
      goals.forEach((goal) => {
        commit('createGoal', {
          name: goal.name,
          amount: goal.amount,
          achieveBy: goal.achieved_by,
          hasDeadline: !!goal.has_deadline,
          allocationSavings: goal.allocation_savings,
          allocationIncome: goal.allocation_income,
          imageUrl: goal.image_url,
          uuid: goal.id,
        })
      })
    }
  },
  getDebts({ commit }) {
    return this.$axios.get('/api/debts').then((response) => {
      response.data.data.forEach((debt) => {
        commit('createDebt', {
          name: debt.name,
          amountOwing: debt.amount_owing,
          interest: parseInt(debt.interest),
          minMonthlyRepayment: debt.min_payments,
          uuid: debt.id,
        })
      })
    })
  },
  getTransactions({ commit }) {
    return this.$axios.get('/api/transactions').then((response) => {
      const transactions = response.data.data
      const transactionObj = {}
      transactions.forEach((transaction) => {
        transactionObj[transaction.id] = transaction
      })
      commit('setValue', { key: 'transactions', value: transactionObj })
    })
  },
  getInsurances({ commit }) {
    return this.$axios.get('/api/insurances').then((response) => {
      const insurances = response.data.data
      const insurancesObj = {}
      insurances.forEach((transaction) => {
        insurancesObj[transaction.id] = transaction
      })
      commit('setValue', { key: 'insurances', value: insurancesObj })
    })
  },
  getSuperFunds({ commit }) {
    return this.$axios.get('/api/super-funds').then((response) => {
      const superFunds = response.data.data
      const superFundsObj = {}
      superFunds.forEach((transaction) => {
        superFundsObj[transaction.id] = transaction
      })
      commit('setValue', { key: 'superFunds', value: superFundsObj })
    })
  },

  // Gets expenses, and sets up the categories + subcategories from user obj
  getExpenses({ commit, dispatch }) {
     console.log("running expenses call");
    return this.$axios.get('/api/expenses').then((response) => {
      response.data.data.forEach((expense) => {
        commit('createSubcategory', {
          label: expense.name,
          amount: expense.amount,
          frequency: expense.frequency,
          uuid: expense.id,
        })
        commit('addSubcategoryToCategory', {
          categoryUuid: expense.sub_category_id,
          subcategoryUuid: expense.id,
        })
      })
      // commit('setValue', { key: 'expenses', value: response.data })
      dispatch('buildScenario')
    })
  },
  getSafetyNet({ commit }) {
    return this.$axios.get('/api/safety-net').then((response) => {
      // Commit rather than dispatch to avoid the sync action
      const {
        emergency_fund_amount,
        emergency_fund_allocation_savings,
        emergency_fund_allocation_income,
        buffer_for_lumpy_expenses_amount,
        buffer_for_lumpy_expenses_allocation_savings,
        buffer_for_lumpy_expenses_allocation_income,
        three_months_of_expenses_amount,
        three_months_of_expenses_allocation_savings,
        three_months_of_expenses_allocation_income,
      } = response.data.data

      commit('setSafetyNetValue', {
        category: 'emergencyFund',
        key: 'amount',
        value: emergency_fund_amount || 0,
      })
      commit('setSafetyNetValue', {
        category: 'emergencyFund',
        key: 'allocationSavings',
        value: emergency_fund_allocation_savings || 0,
      })
      commit('setSafetyNetValue', {
        category: 'emergencyFund',
        key: 'allocationIncome',
        value: emergency_fund_allocation_income || 0,
      })
      commit('setSafetyNetValue', {
        category: 'bufferForLumpyExpenses',
        key: 'amount',
        value: buffer_for_lumpy_expenses_amount || 0,
      })
      commit('setSafetyNetValue', {
        category: 'bufferForLumpyExpenses',
        key: 'allocationSavings',
        value: buffer_for_lumpy_expenses_allocation_savings || 0,
      })
      commit('setSafetyNetValue', {
        category: 'bufferForLumpyExpenses',
        key: 'allocationIncome',
        value: buffer_for_lumpy_expenses_allocation_income || 0,
      })
      commit('setSafetyNetValue', {
        category: 'threeMonthsOfExpenses',
        key: 'amount',
        value: three_months_of_expenses_amount || 0,
      })
      commit('setSafetyNetValue', {
        category: 'threeMonthsOfExpenses',
        key: 'allocationSavings',
        value: three_months_of_expenses_allocation_savings || 0,
      })
      commit('setSafetyNetValue', {
        category: 'threeMonthsOfExpenses',
        key: 'allocationIncome',
        value: three_months_of_expenses_allocation_income || 0,
      })
    })
  },
}
