import Controller from '@ember/controller';

export default Controller.extend({
  name: 'John Doe',

  setName(data) {
    this.set('name', data);
    console.log(this.get('name'));
  },

  actions: {
    setName(event) {
      this.setName(event.target.value);
    }
  },
});
