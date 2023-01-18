import Controller from '@ember/controller';

export default Controller.extend({
  randomValue: null,
  
  generateRandomValue() {
    return Math.random() * 3;
  },
  
  init() {
    this._super(...arguments);
    this.set("randomValue", this.generateRandomValue());
  },

  actions: {
    updateValue() {
      this.set("randomValue", this.generateRandomValue());
    },
  },
});
