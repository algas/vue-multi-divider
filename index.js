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
    grids: [
      { value: 0 },
      { value: 10 },
      { value: 20 },
      { value: 30 },
      { value: 40 },
      { value: 50, last: true },
    ],
    message: 'Vue multi divider!!'
  },
  methods: {
    toggleGrid(index) {
      this.dividers[index].enable = !this.dividers[index].enable;
    }
  }
})
