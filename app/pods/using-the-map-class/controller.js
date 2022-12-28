import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { readOnly } from '@ember/object/computed';
import { inject as service } from '@ember/service';

export default Controller.extend({
  store: service(),

  model: null, // Populated from route
  owners: readOnly('model'),

  // ownersById: computed('owners.@each.name', function () {
  //   return this.get('owners').reduce((result, owner) => {
  //     result[owner.name] = owner;
  //     return result;
  //   }, {});
  // }),

  actions: {
    findBob() {
      const bob =
        this
          .get('owners')
          .find((owner) => owner.name === 'Bob');

      // const bob =
      //   this.get('owners.bob');

      alert(`
        Owner ${bob.name}
        has ${bob.pets.length} pets:
        ${bob.pets.mapBy('name').join(', ')}.
      `);
    },
  },
});
