import Controller from '@ember/controller';


export default Controller.extend({
  number: Math.random(),

  actions: {
    randomize() {
      this.set('number', Math.random());
    }
  }
});
