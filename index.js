let app = new Vue({
  el: '#app',
  data: {
    dividers: [
      { value: 0, enable: true },
      { value: 10, enable: false },
      { value: 20, enable: true },
      { value: 30, enable: false },
      { value: 40, enable: false },
      { value: 50, enable: false }
    ],
    grids: [
      { value: 0 },
      { value: 10 },
      { value: 20 },
      { value: 30 },
      { value: 40 },
      { value: 50 },
    ],
    message: 'Vue multi divider!!'
  },
  methods: {
    toggleGrid(index) {
      this.dividers[index].enable = !this.dividers[index].enable;
    }
  }
})
