import Controller from '@ember/controller';
import { readOnly } from '@ember/object/computed';

export default Controller.extend({
  _number: Math.random(),
  number: readOnly('_number'),
  
  actions: {
    randomize() {
      this.set('_number', Math.random());
    }
  }
});
