import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    alert(value) {
      alert(value);
    }
  },
});
