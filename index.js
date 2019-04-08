let app = new Vue({
  el: '#app',
  data: {
    dividers: [
      { value: 0, enabled: true },
      { value: 10, enabled: false },
      { value: 20, enabled: true },
      { value: 30, enabled: false },
      { value: 40, enabled: false },
      { value: 50, enabled: false }
    ],
    grids: [
      { value: 0 },
      { value: 10 },
      { value: 20 },
      { value: 30 },
      { value: 40 },
      { value: 50 },
    ],
    min: 0,
    max: 50,
    conditions: [],
    message: 'Vue multi divider!!'
  },
  created(){
    this.getConditions();
  },
  methods: {
    conditionString(condition){
      let res = '';
      if(condition.min){
        res += `${condition.min} 以上 `;
      }
      if(condition.max){
        res += `${condition.max} 未満`;
      }
      return res;
    },
    getConditions(){
      const conditions = [];
      const filteredValues = this.dividers.filter(div => div.enabled).map(div => div.value);
      if(filteredValues.length > 0 && filteredValues[filteredValues.length - 1] < this.max) {
        filteredValues.push(this.max);
      }
      this.conditions = filteredValues.map((val, index, arr) => {
        const min = (this.min == val) ? null : val;
        const max = (index < filteredValues.length - 1) ? arr[index+1] : null;
        return { min, max }
      });
    },
    toggleGrid(index) {
      this.dividers[index].enabled = !this.dividers[index].enabled;
      this.getConditions();
    }
  }
})
