import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  randomValue: null,

  getRandomValue() {
    return Math.random();
  },

  value: computed('randomValue', function () {
    return this.get('randomValue') * 2;
  }),

  init() {
    this._super(...arguments);
    this.set('randomValue', this.getRandomValue());
  },

  actions: {
    updateValue() {
      this.set('randomValue', this.getRandomValue());
    },
  },
});
