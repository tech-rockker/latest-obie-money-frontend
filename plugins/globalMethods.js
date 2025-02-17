export default (context, inject) => {
  inject('saveToDb', (key, value) => {
    console.log(key, value)
  })
}
