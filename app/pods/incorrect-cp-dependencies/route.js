import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return this.store.push({
      data: {
        id: '1',
        type: 'post',
        attributes: {
          title: 'Hello World!',
        },
      },
    });
  },
});
