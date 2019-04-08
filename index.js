let app = new Vue({
  el: '#app',
  data: {
    dividers: [
      { enable: true },
      { enable: false },
      { enable: true },
      { enable: false },
      { enable: false },
      { enable: true, last: true }
    ],
    message: 'Vue multi divider!!'
  }
})
