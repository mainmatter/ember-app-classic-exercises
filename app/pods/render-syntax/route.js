import Route from '@ember/routing/route';

export default Route.extend({
  actions: {
    openModal() {
      this.render('render-syntax.modal', {
        into: 'render-syntax',
        outlet: 'modal',
      })
    },

    closeModal() {
      this.disconnectOutlet({
        outlet: 'modal',
        parentView: 'render-syntax',
      });
    },
  },
})
