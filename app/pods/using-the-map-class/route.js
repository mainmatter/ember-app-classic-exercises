import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return [
      {
        name: 'Alice',
        pets: [
          { name: 'Woof' },
          { name: 'Fluffy' },
        ],
      },

      {
        name: 'Bob',
        pets: [
          { name: 'Godzilla' },
          { name: 'Snuffles' },
        ],
      },

      {
        name: 'Charlie',
        pets: [
          { name: 'Mylo' },
          { name: 'Trusty' },
        ],
      },
    ]
  },
})
