import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    closeModalController() {
     this.send('closeModal');
    },
  },
});
